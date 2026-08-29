const BOOKS = [
  ["Kejadian","kejadian",50],["Keluaran","keluaran",40],["Imamat","imamat",27],["Bilangan","bilangan",36],["Ulangan","ulangan",34],
  ["Yosua","yosua",24],["Hakim-hakim","hakim-hakim",21],["Rut","rut",4],["1 Samuel","1-samuel",31],["2 Samuel","2-samuel",24],
  ["1 Raja-raja","1-raja-raja",22],["2 Raja-raja","2-raja-raja",25],["1 Tawarikh","1-tawarikh",29],["2 Tawarikh","2-tawarikh",36],
  ["Ezra","ezra",10],["Nehemia","nehemia",13],["Ester","ester",10],["Ayub","ayub",42],["Mazmur","mazmur",150],["Amsal","amsal",31],
  ["Pengkhotbah","pengkhotbah",12],["Kidung Agung","kidung-agung",8],["Yesaya","yesaya",66],["Yeremia","yeremia",52],["Ratapan","ratapan",5],
  ["Yehezkiel","yehezkiel",48],["Daniel","daniel",12],["Hosea","hosea",14],["Yoel","yoel",3],["Amos","amos",9],["Obaja","obaja",1],
  ["Yunus","yunus",4],["Mikha","mikha",7],["Nahum","nahum",3],["Habakuk","habakuk",3],["Zefanya","zefanya",3],["Hagai","hagai",2],
  ["Zakharia","zakharia",14],["Maleakhi","maleakhi",4],["Matius","matius",28],["Markus","markus",16],["Lukas","lukas",24],["Yohanes","yohanes",21],
  ["Kisah Para Rasul","kisah-para-rasul",28],["Roma","roma",16],["1 Korintus","1-korintus",16],["2 Korintus","2-korintus",13],
  ["Galatia","galatia",6],["Efesus","efesus",6],["Filipi","filipi",4],["Kolose","kolose",4],["1 Tesalonika","1-tesalonika",5],
  ["2 Tesalonika","2-tesalonika",3],["1 Timotius","1-timotius",6],["2 Timotius","2-timotius",4],["Titus","titus",3],["Filemon","filemon",1],
  ["Ibrani","ibrani",13],["Yakobus","yakobus",5],["1 Petrus","1-petrus",5],["2 Petrus","2-petrus",3],["1 Yohanes","1-yohanes",5],
  ["2 Yohanes","2-yohanes",1],["3 Yohanes","3-yohanes",1],["Yudas","yudas",1],["Wahyu","wahyu",22]
].map((book, index) => ({
  name: book[0], slug: book[1], chapters: book[2], index,
  testament: index < 39 ? "PL" : "PB",
  folder: `${String(index + 1).padStart(2, "0")}.${book[0]}`
}));

const SOURCE_ROOT = "https://raw.githubusercontent.com/OpenTranslationBible/open-bible/main/lang/id-ID";
const cache = new Map();
const ui = {
  testament: document.querySelector("#testamentSelect"), book: document.querySelector("#bookSelect"),
  chapter: document.querySelector("#chapterSelect"), title: document.querySelector("#chapterTitle"),
  testamentLabel: document.querySelector("#testamentLabel"), status: document.querySelector("#readerStatus"),
  verses: document.querySelector("#verseList"), previous: document.querySelector("#previousChapter"),
  next: document.querySelector("#nextChapter"), previousBottom: document.querySelector("#previousChapterBottom"),
  nextBottom: document.querySelector("#nextChapterBottom"), play: document.querySelector("#playAudio"),
  pause: document.querySelector("#pauseAudio"), stop: document.querySelector("#stopAudio"),
  speed: document.querySelector("#audioSpeed"), audioStatus: document.querySelector("#audioStatus"),
  share: document.querySelector("#shareChapter")
};

let currentBook = BOOKS[0];
let currentChapter = 1;
let currentVerses = [];
let audioIndex = 0;
let audioSession = 0;
let isSpeaking = false;

function getInitialReading() {
  const params = new URLSearchParams(location.search);
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem("erikson-last-reading") || "null"); } catch (error) { saved = null; }
  const slug = params.get("kitab") || saved?.slug || "kejadian";
  const found = BOOKS.find(book => book.slug === slug) || BOOKS[0];
  const requested = Number(params.get("pasal") || saved?.chapter || 1);
  return { book: found, chapter: Math.min(found.chapters, Math.max(1, requested || 1)) };
}

function fillBooks(keepCurrent = true) {
  const filter = ui.testament.value;
  const visible = BOOKS.filter(book => filter === "all" || book.testament === filter);
  if (!keepCurrent || !visible.includes(currentBook)) currentBook = visible[0];
  ui.book.replaceChildren(...visible.map(book => {
    const option = document.createElement("option");
    option.value = book.slug;
    option.textContent = `${book.name} (${book.testament})`;
    option.selected = book === currentBook;
    return option;
  }));
  fillChapters();
}

function fillChapters() {
  currentChapter = Math.min(currentChapter, currentBook.chapters);
  const options = Array.from({ length: currentBook.chapters }, (_, index) => {
    const option = document.createElement("option");
    option.value = String(index + 1);
    option.textContent = `Pasal ${index + 1}`;
    option.selected = index + 1 === currentChapter;
    return option;
  });
  ui.chapter.replaceChildren(...options);
}

function chapterUrl(book, chapter) {
  const folder = encodeURIComponent(book.folder).replace(/%2F/g, "/");
  const filename = `${book.slug}-${String(chapter).padStart(2, "0")}.json`;
  return `${SOURCE_ROOT}/${folder}/json/${filename}`;
}

function setNavigationState() {
  const atStart = currentBook.index === 0 && currentChapter === 1;
  const atEnd = currentBook.index === BOOKS.length - 1 && currentChapter === currentBook.chapters;
  [ui.previous, ui.previousBottom].forEach(button => button.disabled = atStart);
  [ui.next, ui.nextBottom].forEach(button => button.disabled = atEnd);
}

function renderVerses(data) {
  currentVerses = data.verses
    .filter(item => Number.isFinite(item.verse))
    .map(item => ({ number: item.verse, text: item.text.join(" ").replace(/^>\s*/gm, "").trim() }));
  const fragment = document.createDocumentFragment();
  currentVerses.forEach(verse => {
    const paragraph = document.createElement("p");
    paragraph.className = "bible-verse";
    paragraph.dataset.verse = verse.number;
    const number = document.createElement("sup");
    number.textContent = verse.number;
    paragraph.append(number, document.createTextNode(verse.text));
    fragment.append(paragraph);
  });
  ui.verses.replaceChildren(fragment);
}

async function loadChapter({ scroll = true } = {}) {
  stopAudio();
  ui.status.hidden = false;
  ui.status.textContent = "Memuat ayat...";
  ui.verses.setAttribute("aria-busy", "true");
  ui.title.textContent = `${currentBook.name} ${currentChapter}`;
  ui.testamentLabel.textContent = currentBook.testament === "PL" ? "Perjanjian Lama" : "Perjanjian Baru";
  setNavigationState();

  const url = chapterUrl(currentBook, currentChapter);
  try {
    let data = cache.get(url);
    if (!data) {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      data = await response.json();
      cache.set(url, data);
    }
    renderVerses(data);
    ui.status.hidden = true;
    localStorage.setItem("erikson-last-reading", JSON.stringify({ slug: currentBook.slug, chapter: currentChapter }));
    const params = new URLSearchParams({ kitab: currentBook.slug, pasal: String(currentChapter) });
    history.replaceState(null, "", `${location.pathname}?${params}`);
    document.title = `${currentBook.name} ${currentChapter} | Erikson Atelier`;
    if (scroll && innerWidth < 760) ui.title.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    ui.verses.replaceChildren();
    ui.status.hidden = false;
    ui.status.innerHTML = "Ayat belum berhasil dimuat. Periksa internet, lalu <button type='button' id='retryReader'>coba lagi</button>.";
    document.querySelector("#retryReader")?.addEventListener("click", () => loadChapter({ scroll: false }));
  } finally {
    ui.verses.removeAttribute("aria-busy");
  }
}

function moveChapter(direction) {
  const target = currentChapter + direction;
  if (target >= 1 && target <= currentBook.chapters) currentChapter = target;
  else {
    const nextBook = BOOKS[currentBook.index + direction];
    if (!nextBook) return;
    currentBook = nextBook;
    currentChapter = direction > 0 ? 1 : nextBook.chapters;
    ui.testament.value = "all";
    fillBooks();
  }
  ui.book.value = currentBook.slug;
  fillChapters();
  ui.chapter.value = String(currentChapter);
  loadChapter();
}

function clearSpeakingVerse() {
  document.querySelectorAll(".bible-verse.speaking").forEach(element => element.classList.remove("speaking"));
}

function stopAudio() {
  audioSession += 1;
  window.speechSynthesis?.cancel();
  isSpeaking = false;
  audioIndex = 0;
  clearSpeakingVerse();
  ui.play.disabled = false;
  ui.pause.disabled = true;
  ui.pause.textContent = "⏸ Jeda";
  ui.stop.disabled = true;
  ui.audioStatus.textContent = "Siap dibacakan.";
}

function speakVerse(session) {
  if (session !== audioSession || audioIndex >= currentVerses.length) {
    if (audioIndex >= currentVerses.length) {
      stopAudio();
      ui.audioStatus.textContent = "Pasal selesai dibacakan.";
    }
    return;
  }
  clearSpeakingVerse();
  const verse = currentVerses[audioIndex];
  const element = document.querySelector(`[data-verse="${verse.number}"]`);
  element?.classList.add("speaking");
  if (element && (element.getBoundingClientRect().top < 100 || element.getBoundingClientRect().bottom > innerHeight - 50)) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  ui.audioStatus.textContent = `Membaca ayat ${verse.number} dari ${currentVerses.length}`;
  const utterance = new SpeechSynthesisUtterance(`Ayat ${verse.number}. ${verse.text}`);
  utterance.lang = "id-ID";
  utterance.rate = Number(ui.speed.value);
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices.find(voice => voice.lang.toLowerCase().startsWith("id")) || null;
  utterance.onend = () => {
    if (session !== audioSession) return;
    audioIndex += 1;
    speakVerse(session);
  };
  utterance.onerror = event => {
    if (event.error === "canceled" || event.error === "interrupted") return;
    stopAudio();
    ui.audioStatus.textContent = "Suara tidak tersedia pada perangkat ini.";
  };
  speechSynthesis.speak(utterance);
}

function playAudio() {
  if (!("speechSynthesis" in window)) {
    ui.audioStatus.textContent = "Browser ini belum mendukung pembaca suara.";
    return;
  }
  if (!currentVerses.length) return;
  speechSynthesis.cancel();
  audioSession += 1;
  audioIndex = 0;
  isSpeaking = true;
  ui.play.disabled = true;
  ui.pause.disabled = false;
  ui.stop.disabled = false;
  speakVerse(audioSession);
}

function pauseAudio() {
  if (!isSpeaking) return;
  if (speechSynthesis.paused) {
    speechSynthesis.resume();
    ui.pause.textContent = "⏸ Jeda";
    ui.audioStatus.textContent = `Melanjutkan ayat ${currentVerses[audioIndex]?.number || ""}`;
  } else {
    speechSynthesis.pause();
    ui.pause.textContent = "▶ Lanjut";
    ui.audioStatus.textContent = "Suara dijeda.";
  }
}

async function shareChapter() {
  const data = { title: `${currentBook.name} ${currentChapter}`, text: `Baca ${currentBook.name} ${currentChapter} di Erikson Atelier`, url: location.href };
  try {
    if (navigator.share) await navigator.share(data);
    else {
      await navigator.clipboard.writeText(location.href);
      ui.share.textContent = "Link disalin ✓";
      setTimeout(() => ui.share.textContent = "Bagikan", 1800);
    }
  } catch (error) {
    if (error.name !== "AbortError") ui.share.textContent = "Gagal menyalin";
  }
}

ui.testament.addEventListener("change", () => { currentChapter = 1; fillBooks(false); loadChapter(); });
ui.book.addEventListener("change", () => { currentBook = BOOKS.find(book => book.slug === ui.book.value); currentChapter = 1; fillChapters(); loadChapter(); });
ui.chapter.addEventListener("change", () => { currentChapter = Number(ui.chapter.value); loadChapter(); });
[ui.previous, ui.previousBottom].forEach(button => button.addEventListener("click", () => moveChapter(-1)));
[ui.next, ui.nextBottom].forEach(button => button.addEventListener("click", () => moveChapter(1)));
ui.play.addEventListener("click", playAudio);
ui.pause.addEventListener("click", pauseAudio);
ui.stop.addEventListener("click", stopAudio);
ui.share.addEventListener("click", shareChapter);
addEventListener("beforeunload", () => window.speechSynthesis?.cancel());

const initial = getInitialReading();
currentBook = initial.book;
currentChapter = initial.chapter;
ui.testament.value = "all";
fillBooks();
loadChapter({ scroll: false });
