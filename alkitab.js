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

const SPIRITUAL_THEMES = [
  {
    title: "Tuhan adalah Pencipta",
    words: ["menciptakan", "ciptaan", "langit dan bumi", "menjadikan"],
    message: "Segala sesuatu berasal dari Tuhan dan hidup kita berada dalam tangan-Nya. Hargailah ciptaan-Nya dan jalani hidup sesuai kehendak-Nya."
  },
  {
    title: "Belajar Taat kepada Tuhan",
    words: ["taat", "perintah", "ketetapan", "melakukan firman", "mendengarkan suara"],
    message: "Ketaatan membawa kita tetap berjalan dalam kehendak Tuhan. Lakukanlah Firman-Nya, termasuk dalam perkara sederhana."
  },
  {
    title: "Hidup oleh Iman",
    words: ["iman", "percaya", "mempercayai", "beriman"],
    message: "Iman menolong kita tetap berharap walaupun belum melihat jawabannya. Percayalah bahwa Tuhan bekerja dengan cara dan waktu yang terbaik."
  },
  {
    title: "Datanglah kepada Tuhan dalam Doa",
    words: ["berdoa", "doanya", "permohonan", "berseru kepada"],
    message: "Tuhan mendengar orang yang datang kepada-Nya dengan hati tulus. Ceritakan kebutuhanmu kepada Tuhan dan tetaplah tekun berdoa."
  },
  {
    title: "Kasih yang Nyata",
    words: ["mengasihi", "kasihilah", "kasih", "belas kasihan"],
    message: "Kasih kepada Tuhan perlu terlihat melalui sikap kepada sesama. Pilihlah untuk peduli, menolong, dan memperlakukan orang lain dengan baik."
  },
  {
    title: "Memaafkan dan Memulihkan",
    words: ["mengampuni", "pengampunan", "diampuni", "memaafkan"],
    message: "Pengampunan membebaskan hati dari kepahitan dan membuka jalan bagi pemulihan. Karena Tuhan mengampuni kita, belajarlah mengampuni sesama."
  },
  {
    title: "Kembali kepada Tuhan",
    words: ["bertobat", "pertobatan", "berbaliklah", "meninggalkan dosa"],
    message: "Tuhan memberi kesempatan untuk meninggalkan jalan yang salah dan kembali kepada-Nya. Datanglah dengan jujur dan mulailah langkah yang baru."
  },
  {
    title: "Hidup dalam Kekudusan",
    words: ["kudus", "kekudusan", "menguduskan", "najis"],
    message: "Tuhan memanggil umat-Nya hidup berbeda dan menjaga hati tetap bersih. Jauhilah yang jahat dan pilihlah yang berkenan kepada-Nya."
  },
  {
    title: "Carilah Hikmat Tuhan",
    words: ["hikmat", "bijaksana", "pengertian", "pengetahuan"],
    message: "Hikmat Tuhan menolong kita mengambil keputusan yang benar. Dengarkan Firman-Nya dan jangan hanya mengandalkan pengertian sendiri."
  },
  {
    title: "Jangan Takut",
    words: ["jangan takut", "kuatkanlah", "teguhkanlah", "keberanian"],
    message: "Tuhan menyertai kita di tengah keadaan yang menakutkan. Melangkahlah dengan berani karena pertolongan-Nya lebih besar daripada ketakutan kita."
  },
  {
    title: "Tuhan Melindungi",
    words: ["melindungi", "perlindungan", "tempat perlindungan", "menjaga engkau", "menaungi"],
    message: "Tuhan adalah tempat perlindungan yang aman. Tetaplah dekat kepada-Nya dan serahkan kekhawatiranmu ke dalam tangan-Nya."
  },
  {
    title: "Tuhan Memelihara",
    words: ["memelihara", "memberi makan", "menyediakan", "mencukupi", "roti"],
    message: "Tuhan mengetahui kebutuhan umat-Nya dan sanggup memelihara. Bersyukurlah atas yang ada dan tetap percaya kepada pemeliharaan-Nya."
  },
  {
    title: "Pujilah Tuhan",
    words: ["pujilah", "memuji", "nyanyikanlah", "bersyukur", "syukur"],
    message: "Pujian mengingatkan kita kepada kebaikan dan kesetiaan Tuhan. Bersyukurlah bukan hanya saat keadaan mudah, tetapi juga ketika sedang berjuang."
  },
  {
    title: "Hiduplah dengan Adil",
    words: ["keadilan", "adil", "membela orang", "orang miskin", "anak yatim"],
    message: "Tuhan memperhatikan keadilan dan kepedulian kepada yang lemah. Jadilah orang yang jujur, tidak pilih kasih, dan berani melakukan yang benar."
  },
  {
    title: "Melayani dengan Setia",
    words: ["melayani", "pelayanan", "hamba", "bersaksi", "memberitakan"],
    message: "Tuhan memakai orang yang bersedia melayani dengan rendah hati. Lakukan bagianmu dengan setia supaya orang lain merasakan kasih Tuhan."
  },
  {
    title: "Hidup Dipimpin Roh Kudus",
    words: ["roh kudus", "dipenuhi roh", "buah roh", "karunia roh"],
    message: "Roh Kudus menolong, menguatkan, dan memimpin orang percaya. Berilah ruang bagi-Nya untuk membentuk pikiran, perkataan, dan tindakanmu."
  },
  {
    title: "Keselamatan di dalam Yesus",
    words: ["juruselamat", "keselamatan", "diselamatkan", "anak manusia", "yesus kristus"],
    message: "Yesus datang membawa keselamatan dan hidup yang baru. Terimalah kasih karunia-Nya dan ikutilah Dia dengan sungguh-sungguh."
  },
  {
    title: "Pengharapan yang Hidup",
    words: ["kebangkitan", "dibangkitkan", "hidup yang kekal", "pengharapan", "langit baru"],
    message: "Di dalam Tuhan selalu ada pengharapan, bahkan ketika keadaan terasa gelap. Kemenangan-Nya menolong kita tetap teguh dan tidak menyerah."
  },
  {
    title: "Tetap Tekun",
    words: ["bertekun", "ketekunan", "bertahan", "sabar dalam", "jangan menjadi lelah"],
    message: "Perjalanan iman membutuhkan ketekunan. Jangan menyerah ketika proses terasa panjang; Tuhan membentuk kita melalui setiap langkah."
  },
  {
    title: "Hidup dalam Persatuan",
    words: ["sehati", "satu tubuh", "persekutuan", "bersatu", "damai sejahtera"],
    message: "Tuhan rindu umat-Nya hidup dalam kasih dan persatuan. Jagalah perkataan, selesaikan perbedaan dengan damai, dan saling menguatkan."
  },
  {
    title: "Memberi dengan Sukacita",
    words: ["memberi", "persembahan", "murah hati", "berbagi"],
    message: "Apa yang kita miliki adalah titipan Tuhan. Berbagilah dengan tulus dan jadilah berkat bagi orang yang membutuhkan."
  },
  {
    title: "Rendahkanlah Hatimu",
    words: ["rendah hati", "kesombongan", "meninggikan diri", "merendahkan diri"],
    message: "Tuhan berkenan kepada hati yang rendah dan mau diajar. Jangan mencari kehormatan sendiri; pakailah hidupmu untuk memuliakan Tuhan."
  },
  {
    title: "Tuhan Setia pada Janji-Nya",
    words: ["janji", "perjanjian", "menggenapi", "setia"],
    message: "Tuhan tidak melupakan janji-Nya. Walaupun kita harus menunggu, kesetiaan-Nya menjadi alasan untuk tetap berharap."
  }
];
const ui = {
  testament: document.querySelector("#testamentSelect"), book: document.querySelector("#bookSelect"),
  chapter: document.querySelector("#chapterSelect"), title: document.querySelector("#chapterTitle"),
  testamentLabel: document.querySelector("#testamentLabel"), status: document.querySelector("#readerStatus"),
  verses: document.querySelector("#verseList"), previous: document.querySelector("#previousChapter"),
  next: document.querySelector("#nextChapter"), previousBottom: document.querySelector("#previousChapterBottom"),
  nextBottom: document.querySelector("#nextChapterBottom"), play: document.querySelector("#playAudio"),
  pause: document.querySelector("#pauseAudio"), stop: document.querySelector("#stopAudio"),
  speed: document.querySelector("#audioSpeed"), audioStatus: document.querySelector("#audioStatus"),
  share: document.querySelector("#shareChapter"), card: document.querySelector("#bookReader"),
  quickBook: document.querySelector("#quickBookSelect"), quickChapter: document.querySelector("#quickChapterSelect"),
  verseSelect: document.querySelector("#verseSelect"), quickPlay: document.querySelector("#quickPlayAudio"),
  selectionBar: document.querySelector("#verseSelectionBar"), selectedRef: document.querySelector("#selectedVerseReference"),
  selectedPreview: document.querySelector("#selectedVersePreview"), copyVerse: document.querySelector("#copyVerseButton"),
  clearSelection: document.querySelector("#clearVerseSelection"), blessingTitle: document.querySelector("#blessingTitle"),
  blessingText: document.querySelector("#blessingText"), blessingReference: document.querySelector("#blessingReference")
};

let currentBook = BOOKS[0];
let currentChapter = 1;
let currentVerses = [];
let audioIndex = 0;
let audioSession = 0;
let isSpeaking = false;
let selectedVerse = null;

function getInitialReading() {
  const params = new URLSearchParams(location.search);
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem("erikson-last-reading") || "null"); } catch (error) { saved = null; }
  const slug = params.get("kitab") || saved?.slug || "kejadian";
  const found = BOOKS.find(book => book.slug === slug) || BOOKS[0];
  const requested = Number(params.get("pasal") || saved?.chapter || 1);
  return { book: found, chapter: Math.min(found.chapters, Math.max(1, requested || 1)) };
}

function makeBookOptions(books) {
  return books.map(book => {
    const option = document.createElement("option");
    option.value = book.slug;
    option.textContent = `${book.name} (${book.testament})`;
    option.selected = book === currentBook;
    return option;
  });
}

function makeChapterOptions() {
  return Array.from({ length: currentBook.chapters }, (_, index) => {
    const option = document.createElement("option");
    option.value = String(index + 1);
    option.textContent = `Pasal ${index + 1}`;
    option.selected = index + 1 === currentChapter;
    return option;
  });
}

function fillBooks(keepCurrent = true) {
  const filter = ui.testament.value;
  const visible = BOOKS.filter(book => filter === "all" || book.testament === filter);
  if (!keepCurrent || !visible.includes(currentBook)) currentBook = visible[0];
  ui.book.replaceChildren(...makeBookOptions(visible));
  ui.quickBook.replaceChildren(...makeBookOptions(BOOKS));
  fillChapters();
}

function fillChapters() {
  currentChapter = Math.min(currentChapter, currentBook.chapters);
  ui.chapter.replaceChildren(...makeChapterOptions());
  ui.quickChapter.replaceChildren(...makeChapterOptions());
  ui.book.value = currentBook.slug;
  ui.quickBook.value = currentBook.slug;
  ui.chapter.value = String(currentChapter);
  ui.quickChapter.value = String(currentChapter);
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

function defaultSpiritualTheme() {
  if (currentBook.index <= 4) return {
    title: "Hidup menurut Firman Tuhan",
    message: "Tuhan mengajar umat-Nya untuk mengenal kehendak-Nya dan hidup dalam ketaatan. Dengarkan Firman-Nya dan lakukan dengan hati yang sungguh."
  };
  if (currentBook.index <= 16) return {
    title: "Tuhan bekerja dalam perjalanan hidup",
    message: "Tuhan tetap bekerja melalui kemenangan, kegagalan, dan proses yang panjang. Tetaplah setia dan belajarlah melihat penyertaan-Nya."
  };
  if (currentBook.index <= 21) return {
    title: "Hikmat untuk kehidupan",
    message: "Firman Tuhan memberi hikmat untuk menghadapi kehidupan sehari-hari. Simpanlah kebenaran-Nya dalam hati dan pakailah dalam setiap keputusan."
  };
  if (currentBook.index <= 38) return {
    title: "Dengarkan panggilan Tuhan",
    message: "Tuhan memanggil umat-Nya meninggalkan yang salah dan kembali hidup benar. Teguran-Nya diberikan karena Ia mengasihi dan ingin memulihkan."
  };
  if (currentBook.index <= 42) return {
    title: "Pandanglah kepada Yesus",
    message: "Melalui kehidupan dan perkataan Yesus, kita mengenal kasih serta kehendak Allah. Ikutilah teladan-Nya dalam kehidupan sehari-hari."
  };
  if (currentBook.index === 43) return {
    title: "Menjadi saksi Kristus",
    message: "Tuhan memakai orang percaya untuk membawa kabar baik kepada sesama. Mintalah pertolongan Roh Kudus dan bersaksilah melalui hidupmu."
  };
  if (currentBook.index <= 64) return {
    title: "Bertumbuh sebagai orang percaya",
    message: "Iman bukan hanya diketahui, tetapi perlu terlihat dalam cara hidup. Bertumbuhlah dalam kasih, kekudusan, dan kesetiaan kepada Kristus."
  };
  return {
    title: "Tetap setia sampai akhir",
    message: "Tuhan memegang kendali dan kemenangan terakhir ada di dalam Dia. Tetaplah setia karena pengharapan orang percaya tidak akan sia-sia."
  };
}

function renderSpiritualBlessing() {
  const chapterText = currentVerses.map(verse => verse.text.toLowerCase()).join(" ");
  let chosen = null;
  let highestScore = 0;
  SPIRITUAL_THEMES.forEach(theme => {
    const score = theme.words.reduce((total, word) => total + chapterText.split(word).length - 1, 0);
    if (score > highestScore) {
      chosen = theme;
      highestScore = score;
    }
  });
  const theme = chosen || defaultSpiritualTheme();
  const matchingVerse = chosen
    ? currentVerses.find(verse => chosen.words.some(word => verse.text.toLowerCase().includes(word)))
    : currentVerses[0];
  ui.blessingTitle.textContent = theme.title;
  ui.blessingText.textContent = theme.message;
  ui.blessingReference.textContent = matchingVerse
    ? `Renungkan: ${currentBook.name} ${currentChapter}:${matchingVerse.number}`
    : `${currentBook.name} ${currentChapter}`;
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
    paragraph.tabIndex = 0;
    paragraph.setAttribute("role", "button");
    paragraph.setAttribute("aria-label", `Pilih ayat ${verse.number} untuk disalin`);
    paragraph.title = "Klik untuk memilih dan menyalin ayat";
    const number = document.createElement("sup");
    number.textContent = verse.number;
    paragraph.append(number, document.createTextNode(verse.text));
    fragment.append(paragraph);
  });
  ui.verses.replaceChildren(fragment);
  clearSelectedVerse();
  ui.verseSelect.replaceChildren(...currentVerses.map(verse => {
    const option = document.createElement("option");
    option.value = String(verse.number);
    option.textContent = `Ayat ${verse.number}`;
    return option;
  }));
}

function animatePageTurn(direction = 0) {
  const animation = direction > 0 ? "turning-next" : direction < 0 ? "turning-previous" : "book-opening";
  ui.card.classList.remove("turning-next", "turning-previous", "book-opening");
  void ui.card.offsetWidth;
  ui.card.classList.add(animation);
  setTimeout(() => ui.card.classList.remove(animation), 760);
}

function clearSelectedVerse() {
  selectedVerse = null;
  document.querySelectorAll(".bible-verse.selected").forEach(element => element.classList.remove("selected"));
  ui.selectionBar.hidden = true;
  ui.selectedRef.textContent = "—";
  ui.selectedPreview.textContent = "";
  ui.copyVerse.textContent = "📋 Salin Ayat";
}

function selectVerse(verseNumber, { scroll = false } = {}) {
  const verse = currentVerses.find(item => item.number === Number(verseNumber));
  const target = document.querySelector(`[data-verse="${verseNumber}"]`);
  if (!verse || !target) return;
  selectedVerse = verse;
  document.querySelectorAll(".bible-verse.selected").forEach(element => element.classList.remove("selected"));
  target.classList.add("selected");
  ui.verseSelect.value = String(verse.number);
  ui.selectedRef.textContent = `${currentBook.name} ${currentChapter}:${verse.number}`;
  ui.selectedPreview.textContent = verse.text;
  ui.selectionBar.hidden = false;
  ui.copyVerse.textContent = "📋 Salin Ayat";
  if (scroll) target.scrollIntoView({ behavior: "smooth", block: "center" });
}

function jumpToVerse() {
  selectVerse(Number(ui.verseSelect.value), { scroll: true });
}

async function copySelectedVerse() {
  if (!selectedVerse) return;
  const reference = `${currentBook.name} ${currentChapter}:${selectedVerse.number}`;
  const text = `${reference}\n${selectedVerse.text}`;
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.append(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
  ui.copyVerse.textContent = "✓ Ayat Tersalin";
  setTimeout(() => { if (selectedVerse) ui.copyVerse.textContent = "📋 Salin Ayat"; }, 1800);
}

async function loadChapter({ scroll = true, direction = 0 } = {}) {
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
    renderSpiritualBlessing();
    animatePageTurn(direction);
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
  loadChapter({ direction });
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
  ui.quickPlay.textContent = "🔊 Dengarkan";
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
  ui.audioStatus.textContent = `Membaca bagian ${audioIndex + 1} dari ${currentVerses.length}`;
  const utterance = new SpeechSynthesisUtterance(verse.text);
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
  const selectedVerse = Number(ui.verseSelect.value);
  const selectedIndex = currentVerses.findIndex(verse => verse.number === selectedVerse);
  audioIndex = selectedIndex >= 0 ? selectedIndex : 0;
  isSpeaking = true;
  ui.play.disabled = true;
  ui.pause.disabled = false;
  ui.stop.disabled = false;
  ui.quickPlay.textContent = "■ Berhenti";
  speakVerse(audioSession);
}

function pauseAudio() {
  if (!isSpeaking) return;
  if (speechSynthesis.paused) {
    speechSynthesis.resume();
    ui.pause.textContent = "⏸ Jeda";
    ui.audioStatus.textContent = "Melanjutkan bacaan.";
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
ui.chapter.addEventListener("change", () => { currentChapter = Number(ui.chapter.value); fillChapters(); loadChapter(); });
ui.quickBook.addEventListener("change", () => {
  currentBook = BOOKS.find(book => book.slug === ui.quickBook.value);
  currentChapter = 1;
  ui.testament.value = "all";
  fillBooks();
  loadChapter();
});
ui.quickChapter.addEventListener("change", () => {
  currentChapter = Number(ui.quickChapter.value);
  fillChapters();
  loadChapter();
});
ui.verseSelect.addEventListener("change", jumpToVerse);
ui.verses.addEventListener("click", event => {
  const verse = event.target.closest(".bible-verse");
  if (verse) selectVerse(Number(verse.dataset.verse));
});
ui.verses.addEventListener("keydown", event => {
  const verse = event.target.closest(".bible-verse");
  if (verse && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    selectVerse(Number(verse.dataset.verse));
  }
});
ui.copyVerse.addEventListener("click", copySelectedVerse);
ui.clearSelection.addEventListener("click", clearSelectedVerse);
[ui.previous, ui.previousBottom].forEach(button => button.addEventListener("click", () => moveChapter(-1)));
[ui.next, ui.nextBottom].forEach(button => button.addEventListener("click", () => moveChapter(1)));
ui.play.addEventListener("click", playAudio);
ui.pause.addEventListener("click", pauseAudio);
ui.stop.addEventListener("click", stopAudio);
ui.quickPlay.addEventListener("click", () => isSpeaking ? stopAudio() : playAudio());
ui.share.addEventListener("click", shareChapter);
addEventListener("beforeunload", () => window.speechSynthesis?.cancel());

const initial = getInitialReading();
currentBook = initial.book;
currentChapter = initial.chapter;
ui.testament.value = "all";
fillBooks();
loadChapter({ scroll: false });
