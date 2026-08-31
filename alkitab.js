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
const ORIGINAL_LANGUAGE_TERMS = [
  { keys: ["kasih", "mengasihi"], he: ["אַהֲבָה", "ahavah", "kasih yang dinyatakan melalui kesetiaan dan tindakan"], gr: ["ἀγάπη", "agapē", "kasih yang memberi diri dan mengutamakan kebaikan orang lain"] },
  { keys: ["percaya", "iman", "setia"], he: ["אֱמוּנָה", "emunah", "keteguhan, kesetiaan, dan kepercayaan"], gr: ["πίστις", "pistis", "iman, kepercayaan, dan kesetiaan"] },
  { keys: ["anugerah", "kasih karunia"], he: ["חֵן", "chen", "kemurahan atau perkenanan"], gr: ["χάρις", "charis", "anugerah dan pemberian yang tidak diperoleh karena jasa"] },
  { keys: ["damai", "damai sejahtera"], he: ["שָׁלוֹם", "shalom", "keutuhan, kesejahteraan, dan damai"], gr: ["εἰρήνη", "eirēnē", "damai, keharmonisan, dan pemulihan"] },
  { keys: ["selamat", "keselamatan", "menyelamatkan"], he: ["יְשׁוּעָה", "yeshuah", "pertolongan dan keselamatan dari Tuhan"], gr: ["σωτηρία", "sōtēria", "keselamatan, pembebasan, dan pemulihan"] },
  { keys: ["roh", "napas"], he: ["רוּחַ", "ruach", "roh, angin, atau napas"], gr: ["πνεῦμα", "pneuma", "roh, angin, atau napas; sering dipakai untuk Roh Kudus"] },
  { keys: ["kudus", "kekudusan"], he: ["קָדוֹשׁ", "qadosh", "dipisahkan dan dikhususkan bagi Tuhan"], gr: ["ἅγιος", "hagios", "kudus atau dikhususkan bagi Allah"] },
  { keys: ["firman", "perkataan", "berkata"], he: ["דָּבָר", "dabar", "firman, perkataan, atau perkara yang berkuasa"], gr: ["λόγος", "logos", "firman, pesan, perkataan, atau makna"] },
  { keys: ["hikmat", "bijaksana"], he: ["חָכְמָה", "chokmah", "kecakapan hidup menurut kehendak Tuhan"], gr: ["σοφία", "sophia", "hikmat untuk memahami dan menjalani kebenaran"] },
  { keys: ["bertobat", "berbalik"], he: ["שׁוּב", "shuv", "berbalik atau kembali kepada Tuhan"], gr: ["μετάνοια", "metanoia", "perubahan pikiran yang menghasilkan perubahan hidup"] },
  { keys: ["hamba", "melayani", "pelayanan"], he: ["עֶבֶד", "eved", "hamba atau pelayan yang tunduk"], gr: ["δοῦλος", "doulos", "hamba yang menjadi milik dan taat kepada tuannya"] },
  { keys: ["kerajaan", "raja"], he: ["מַלְכוּת", "malkut", "pemerintahan atau kekuasaan raja"], gr: ["βασιλεία", "basileia", "pemerintahan dan kekuasaan Allah"] },
  { keys: ["benar", "kebenaran", "adil"], he: ["צְדָקָה", "tsedaqah", "kebenaran dan keadilan dalam relasi"], gr: ["δικαιοσύνη", "dikaiosynē", "kebenaran atau keadaan benar di hadapan Allah"] },
  { keys: ["harap", "pengharapan"], he: ["תִּקְוָה", "tiqvah", "harapan yang dinantikan dengan teguh"], gr: ["ἐλπίς", "elpis", "pengharapan yang yakin kepada janji Allah"] },
  { keys: ["perjanjian", "janji"], he: ["בְּרִית", "berit", "perjanjian yang mengikat"], gr: ["διαθήκη", "diathēkē", "perjanjian atau ketetapan yang diteguhkan"] },
  { keys: ["menyembah", "sembah", "sujud"], he: ["שָׁחָה", "shachah", "membungkuk atau sujud dalam penyembahan"], gr: ["προσκυνέω", "proskyneō", "bersujud dan memberi hormat dalam penyembahan"] }
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
  blessingText: document.querySelector("#blessingText"), blessingReference: document.querySelector("#blessingReference"),
  openSermon: document.querySelector("#openSermonStudio"), sermonStudio: document.querySelector("#sermonStudio"),
  sermonRefs: document.querySelector("#sermonSelectedReferences"), sermonPreview: document.querySelector("#sermonSelectedPreview"),
  sermonDuration: document.querySelector("#sermonDuration"), includeExegesis: document.querySelector("#includeExegesis"),
  includeOriginal: document.querySelector("#includeOriginalLanguage"), includeApplication: document.querySelector("#includeApplication"),
  generateSermon: document.querySelector("#generateSermon"), sermonOutput: document.querySelector("#sermonOutput"),
  sermonOutputTitle: document.querySelector("#sermonOutputTitle"), sermonContent: document.querySelector("#sermonContent"),
  copySermon: document.querySelector("#copySermon")
};

let currentBook = BOOKS[0];
let currentChapter = 1;
let currentVerses = [];
let audioIndex = 0;
let audioSession = 0;
let isSpeaking = false;
let selectedVerses = [];

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
  const chapterDigits = book.slug === "mazmur" ? 3 : 2;
  const filename = `${book.slug}-${String(chapter).padStart(chapterDigits, "0")}.json`;
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
    const heart = document.createElement("span");
    heart.className = "verse-heart";
    heart.dataset.favoriteVerse = String(verse.number);
    heart.setAttribute("role", "button");
    heart.setAttribute("tabindex", "0");
    heart.setAttribute("aria-label", `Simpan ${currentBook.name} ${currentChapter} ayat ${verse.number} ke favorit`);
    heart.title = "Tambah ke ayat favorit";
    heart.textContent = "♡";
    paragraph.append(number, document.createTextNode(verse.text), heart);
    fragment.append(paragraph);
  });
  ui.verses.replaceChildren(fragment);
  updateVerseHeartStates();
  clearSelectedVerses();
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

function groupVerseNumbers(numbers) {
  if (!numbers.length) return "";
  const groups = [];
  let start = numbers[0];
  let previous = numbers[0];
  numbers.slice(1).forEach(number => {
    if (number === previous + 1) {
      previous = number;
      return;
    }
    groups.push(start === previous ? String(start) : `${start}–${previous}`);
    start = number;
    previous = number;
  });
  groups.push(start === previous ? String(start) : `${start}–${previous}`);
  return groups.join(", ");
}

function selectedPassageReference() {
  const numbers = selectedVerses.map(verse => verse.number).sort((a, b) => a - b);
  return numbers.length ? `${currentBook.name} ${currentChapter}:${groupVerseNumbers(numbers)}` : "";
}

function updateSelectionUI() {
  document.querySelectorAll(".bible-verse.selected").forEach(element => element.classList.remove("selected"));
  selectedVerses.forEach(verse => document.querySelector(`[data-verse="${verse.number}"]`)?.classList.add("selected"));
  const hasSelection = selectedVerses.length > 0;
  ui.selectionBar.hidden = !hasSelection;
  ui.generateSermon.disabled = !hasSelection;
  if (!hasSelection) {
    ui.selectedRef.textContent = "—";
    ui.selectedPreview.textContent = "";
    ui.sermonRefs.textContent = "Belum ada ayat dipilih";
    ui.sermonPreview.textContent = "Klik beberapa ayat pada halaman Alkitab.";
    ui.copyVerse.textContent = "📋 Salin Ayat";
    return;
  }
  const reference = selectedPassageReference();
  ui.selectedRef.textContent = selectedVerses.length === 1 ? reference : `${selectedVerses.length} ayat dipilih`;
  ui.selectedPreview.textContent = selectedVerses.map(verse => `${verse.number}. ${verse.text}`).join(" • ");
  ui.sermonRefs.textContent = reference;
  ui.sermonPreview.textContent = selectedVerses.map(verse => `${verse.number}. ${verse.text}`).join(" ");
  ui.copyVerse.textContent = selectedVerses.length === 1 ? "📋 Salin Ayat" : `📋 Salin ${selectedVerses.length} Ayat`;
}

function clearSelectedVerses() {
  selectedVerses = [];
  updateSelectionUI();
  ui.sermonOutput.hidden = true;
}

function selectVerse(verseNumber, { scroll = false, toggle = true } = {}) {
  const verse = currentVerses.find(item => item.number === Number(verseNumber));
  const target = document.querySelector(`[data-verse="${verseNumber}"]`);
  if (!verse || !target) return;
  const existingIndex = selectedVerses.findIndex(item => item.number === verse.number);
  if (existingIndex >= 0 && toggle) selectedVerses.splice(existingIndex, 1);
  else if (existingIndex < 0) selectedVerses.push(verse);
  selectedVerses.sort((a, b) => a.number - b.number);
  ui.verseSelect.value = String(verse.number);
  updateSelectionUI();
  if (scroll) target.scrollIntoView({ behavior: "smooth", block: "center" });
}

function jumpToVerse() {
  selectVerse(Number(ui.verseSelect.value), { scroll: true, toggle: false });
}

async function writeClipboard(text) {
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
}

async function copySelectedVerses() {
  if (!selectedVerses.length) return;
  const text = `${selectedPassageReference()}\n${selectedVerses.map(verse => `${verse.number}. ${verse.text}`).join("\n")}`;
  await writeClipboard(text);
  ui.copyVerse.textContent = "✓ Ayat Tersalin";
  setTimeout(() => { if (selectedVerses.length) updateSelectionUI(); }, 1800);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);
}

function analyzeSelectedTheme() {
  const passage = selectedVerses.map(verse => verse.text.toLowerCase()).join(" ");
  let chosen = null;
  let highest = 0;
  SPIRITUAL_THEMES.forEach(theme => {
    const score = theme.words.reduce((total, word) => total + passage.split(word).length - 1, 0);
    if (score > highest) {
      chosen = theme;
      highest = score;
    }
  });
  return chosen || defaultSpiritualTheme();
}

function bookContext() {
  if (currentBook.index <= 4) return "Bagian ini berada dalam kitab Taurat, yang menolong umat mengenal karya, perjanjian, dan kehendak Tuhan.";
  if (currentBook.index <= 16) return "Bagian ini berada dalam kitab sejarah. Peristiwa di dalamnya memperlihatkan karya Tuhan sekaligus respons manusia.";
  if (currentBook.index <= 21) return "Bagian ini termasuk sastra hikmat dan puisi. Bahasa yang dipakai perlu dibaca sebagai ungkapan iman, hikmat, doa, atau perenungan.";
  if (currentBook.index <= 38) return "Bagian ini berada dalam kitab para nabi. Pesannya memuat teguran, panggilan untuk kembali kepada Tuhan, dan pengharapan pemulihan.";
  if (currentBook.index <= 42) return "Bagian ini berada dalam Injil dan perlu dibaca dalam terang kehidupan, pengajaran, karya, kematian, dan kebangkitan Yesus.";
  if (currentBook.index === 43) return "Bagian ini berada dalam Kisah Para Rasul, yang menceritakan karya Roh Kudus dan pertumbuhan kesaksian gereja mula-mula.";
  if (currentBook.index <= 64) return "Bagian ini berada dalam surat Perjanjian Baru. Perhatikan penerima awal surat, masalah yang dihadapi, dan penerapannya bagi gereja.";
  return "Bagian ini berada dalam kitab Wahyu dan memakai banyak simbol. Bacalah dengan memperhatikan pengharapan, kesetiaan, dan kemenangan Allah.";
}

function explainSelectedVerse(verse, theme) {
  const text = verse.text.toLowerCase();
  if (/jangan|hendaklah|harus|lakukan|taat/.test(text)) return "Ayat ini memuat arahan yang menuntut respons nyata. Kebenaran tidak cukup diketahui; kebenaran perlu dilakukan dalam kehidupan.";
  if (/akan|janji|setia|perjanjian/.test(text)) return "Ayat ini mengarahkan perhatian kepada janji dan kesetiaan Tuhan. Dasar pengharapan kita bukan keadaan, melainkan karakter Tuhan yang dapat dipercaya.";
  if (/tuhan|allah|yesus|roh kudus/.test(text)) return `Ayat ini menolong kita melihat karya dan karakter Tuhan. Pesan utamanya sejalan dengan tema “${theme.title}” dan mengundang kita menanggapi-Nya dengan iman.`;
  if (/kasih|mengampuni|menolong|memberi/.test(text)) return "Ayat ini menunjukkan bahwa iman memiliki akibat dalam hubungan dengan sesama. Kasih Tuhan perlu menjadi tindakan yang dapat dirasakan orang lain.";
  return `Ayat ini menjadi bagian penting dari pesan pasal. Bacalah bersama ayat sebelum dan sesudahnya agar tema “${theme.title}” dipahami secara utuh.`;
}

function originalLanguageItems() {
  const text = selectedVerses.map(verse => verse.text.toLowerCase()).join(" ");
  let matches = ORIGINAL_LANGUAGE_TERMS.filter(term => term.keys.some(key => text.includes(key))).slice(0, 4);
  if (!matches.length) {
    matches = [ORIGINAL_LANGUAGE_TERMS.find(term => term.keys.includes("firman"))];
  }
  const language = currentBook.testament === "PL" ? "Ibrani" : "Yunani";
  return {
    language,
    items: matches.map(term => {
      const data = currentBook.testament === "PL" ? term.he : term.gr;
      return { word: data[0], transliteration: data[1], meaning: data[2] };
    })
  };
}

function sermonIllustration(theme) {
  const title = theme.title.toLowerCase();
  if (title.includes("iman") || title.includes("jangan takut")) return "Seseorang yang berjalan dalam kabut tidak dapat melihat seluruh jalan, tetapi ia masih dapat melangkah mengikuti tanda di depannya. Demikian juga iman: kita mungkin belum melihat seluruh jawaban, tetapi kita mengenal Tuhan yang memimpin.";
  if (title.includes("kasih") || title.includes("memaafkan")) return "Luka yang terus digenggam seperti batu berat yang dibawa ke mana-mana. Ketika kita menyerahkannya kepada Tuhan dan memilih mengampuni, beban itu mulai dilepaskan dan hati memperoleh ruang untuk dipulihkan.";
  if (title.includes("tekun") || title.includes("setia")) return "Benih tidak menjadi pohon dalam satu malam. Ia bertumbuh melalui proses yang tersembunyi. Demikian juga Tuhan sering membentuk iman kita melalui kesetiaan sehari-hari.";
  if (title.includes("hikmat") || title.includes("firman")) return "Kompas tidak berjalan menggantikan kita, tetapi menunjukkan arah yang benar. Firman Tuhan juga tidak menghapus setiap perjalanan sulit, namun menuntun langkah kita supaya tidak kehilangan arah.";
  if (title.includes("doa")) return "Seorang anak tidak ragu menceritakan kebutuhannya kepada ayah yang mengasihinya. Doa adalah keberanian datang kepada Bapa, bukan karena kita kuat, tetapi karena Dia baik.";
  return "Sebuah lampu kecil tidak menerangi seluruh perjalanan sekaligus, tetapi cukup untuk langkah berikutnya. Firman Tuhan memberi terang yang kita perlukan untuk menaati-Nya hari ini.";
}

function sermonPacing(duration) {
  if (duration === 15) return "Pendahuluan 2 menit • Tiga poin 10 menit • Penutup dan doa 3 menit";
  if (duration === 45) return "Pendahuluan 7 menit • Tiga poin 30 menit • Aplikasi, ajakan, dan doa 8 menit";
  return "Pendahuluan 5 menit • Tiga poin 20 menit • Aplikasi, ajakan, dan doa 5 menit";
}

function generateSermonDraft() {
  if (!selectedVerses.length) return;
  const theme = analyzeSelectedTheme();
  const reference = selectedPassageReference();
  const duration = Number(ui.sermonDuration.value);
  const title = `${theme.title}: Firman yang Mengubah Kehidupan`;
  const quotedVerses = selectedVerses.map(verse =>
    `<blockquote><sup>${verse.number}</sup> ${escapeHTML(verse.text)}</blockquote>`
  ).join("");
  const explanations = selectedVerses.map(verse =>
    `<li><strong>${escapeHTML(currentBook.name)} ${currentChapter}:${verse.number}</strong><p>${escapeHTML(explainSelectedVerse(verse, theme))}</p></li>`
  ).join("");
  const mainTruth = theme.message.split(".")[0] + ".";
  let html = `
    <section class="sermon-cover">
      <p class="sermon-kicker">DRAF KHOTBAH • ${duration} MENIT</p>
      <h1>${escapeHTML(title)}</h1>
      <p><strong>Teks:</strong> ${escapeHTML(reference)}</p>
      <p><strong>Tema:</strong> ${escapeHTML(theme.title)}</p>
      <p><strong>Tujuan:</strong> Jemaat memahami kebenaran teks dan mengambil satu langkah nyata untuk melakukannya.</p>
      <p class="sermon-pacing">${escapeHTML(sermonPacing(duration))}</p>
    </section>
    <section>
      <h3>1. Pendahuluan</h3>
      <p>Saudara-saudari yang dikasihi Tuhan, kita sering mengetahui banyak kebenaran, tetapi pergumulan sesungguhnya adalah membawa kebenaran itu masuk ke dalam kehidupan. Teks ${escapeHTML(reference)} mengajak kita berhenti, mendengar suara Tuhan, dan memberikan respons yang nyata.</p>
      <p><strong>Pertanyaan pembuka:</strong> Apakah Firman Tuhan hanya kita dengar, atau sungguh-sungguh sedang mengubah cara kita hidup?</p>
    </section>
    <section>
      <h3>2. Pembacaan Firman</h3>
      ${quotedVerses}
      <p class="sermon-transition">Kalimat transisi: “Mari kita melihat tiga kebenaran penting dari bagian Firman Tuhan ini.”</p>
    </section>
    <section>
      <h3>3. Latar Belakang dan Konteks</h3>
      <p>${escapeHTML(bookContext())}</p>
      <p>Teks yang dipilih berada dalam ${escapeHTML(currentBook.name)} pasal ${currentChapter}. Untuk menjelaskan dengan bertanggung jawab, perhatikan alur pasal, ayat sebelum dan sesudahnya, siapa yang berbicara, kepada siapa pesan diberikan, serta masalah yang sedang dibahas.</p>
    </section>`;

  if (ui.includeExegesis.checked) {
    html += `
    <section>
      <h3>4. Eksegese Ayat Pilihan</h3>
      <p><strong>Pengamatan utama:</strong> Tema yang menonjol adalah “${escapeHTML(theme.title)}”. Jangan memisahkan ayat pilihan dari konteks pasalnya.</p>
      <ol class="verse-explanations">${explanations}</ol>
      <p><strong>Prinsip teologis:</strong> ${escapeHTML(mainTruth)}</p>
    </section>`;
  }

  if (ui.includeOriginal.checked) {
    const original = originalLanguageItems();
    html += `
    <section>
      <h3>5. Kata Kunci Bahasa ${original.language}</h3>
      <div class="original-word-grid">
        ${original.items.map(item => `<article><strong>${item.word}</strong><em>${item.transliteration}</em><p>${escapeHTML(item.meaning)}</p></article>`).join("")}
      </div>
      <p class="language-note">Catatan: kata-kata ini berkaitan dengan tema teks. Periksa kembali bentuk kata, tata bahasa, dan konteksnya memakai leksikon atau komentar Alkitab sebelum menyatakan arti yang lebih khusus.</p>
    </section>`;
  }

  html += `
    <section>
      <h3>6. Pokok Khotbah</h3>
      <div class="sermon-point">
        <span>01</span><div><h4>Kenali kebenaran yang Tuhan nyatakan</h4><p>${escapeHTML(mainTruth)} Sebelum memikirkan apa yang harus kita lakukan, lihatlah terlebih dahulu siapa Tuhan dan apa yang sedang dikerjakan-Nya dalam teks.</p><b>Kalimat penekanan: “Iman yang benar dimulai dari pengenalan yang benar kepada Tuhan.”</b></div>
      </div>
      <div class="sermon-point">
        <span>02</span><div><h4>Berikan respons iman yang benar</h4><p>Firman Tuhan selalu mengundang respons. Respons itu dapat berupa percaya, bertobat, taat, mengampuni, melayani, atau tetap setia di tengah proses.</p><b>Kalimat penekanan: “Firman yang hanya didengar belum selesai; Firman perlu dijawab dengan ketaatan.”</b></div>
      </div>
      <div class="sermon-point">
        <span>03</span><div><h4>Hidupi kebenaran dalam tindakan</h4><p>Mulailah dari satu tindakan yang jelas dan dapat dilakukan hari ini. Perubahan besar sering dimulai dari ketaatan kecil yang dilakukan terus-menerus.</p><b>Kalimat penekanan: “Kebenaran menjadi terlihat ketika diwujudkan dalam kehidupan.”</b></div>
      </div>
    </section>`;

  if (ui.includeApplication.checked) {
    html += `
    <section>
      <h3>7. Ilustrasi Khotbah</h3>
      <p>${escapeHTML(sermonIllustration(theme))}</p>
    </section>
    <section>
      <h3>8. Aplikasi Praktis</h3>
      <ul>
        <li><strong>Pribadi:</strong> Tanyakan bagian hidup mana yang perlu diserahkan atau ditaati berdasarkan teks ini.</li>
        <li><strong>Keluarga dan gereja:</strong> Nyatakan kebenaran melalui perkataan yang membangun, pengampunan, pelayanan, dan kepedulian.</li>
        <li><strong>Dunia digital:</strong> Gunakan media sosial dengan jujur, tidak merendahkan orang lain, dan membawa pesan yang memberi kehidupan.</li>
      </ul>
    </section>`;
  }

  html += `
    <section>
      <h3>9. Kesimpulan</h3>
      <p>${escapeHTML(theme.message)} Tuhan tidak hanya ingin kita memahami Firman-Nya, tetapi juga hidup di dalamnya.</p>
      <p><strong>Kalimat penutup:</strong> “Hari ini Tuhan mengundang kita bukan sekadar menjadi pendengar, melainkan pelaku Firman.”</p>
    </section>
    <section>
      <h3>10. Ajakan Respons</h3>
      <p>Mari periksa hati: adakah kebenaran yang sudah kita ketahui tetapi belum kita lakukan? Datanglah kepada Tuhan dengan jujur, mintalah pertolongan-Nya, dan ambillah satu komitmen nyata mulai hari ini.</p>
    </section>
    <section class="sermon-prayer">
      <h3>Doa Penutup</h3>
      <p>“Tuhan, terima kasih untuk Firman-Mu. Bukalah pikiran kami untuk mengerti, lembutkan hati kami untuk menerima, dan kuatkan kami untuk melakukannya. Tolong kami hidup dalam kebenaran, menjadi berkat bagi sesama, dan memuliakan nama-Mu. Di dalam nama Tuhan Yesus kami berdoa. Amin.”</p>
    </section>`;

  ui.sermonOutputTitle.textContent = title;
  ui.sermonContent.innerHTML = html;
  ui.sermonOutput.hidden = false;
  ui.sermonOutput.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function copySermonDraft() {
  if (ui.sermonOutput.hidden) return;
  const text = `${ui.sermonOutputTitle.textContent}\n\n${ui.sermonContent.innerText}`;
  await writeClipboard(text);
  ui.copySermon.textContent = "✓ Bahan Khotbah Tersalin";
  setTimeout(() => ui.copySermon.textContent = "📋 Salin Semua", 1800);
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
  const heart = event.target.closest(".verse-heart");
  if (heart) {
    event.stopPropagation();
    toggleSingleVerseFavorite(Number(heart.dataset.favoriteVerse));
    return;
  }
  const verse = event.target.closest(".bible-verse");
  if (verse) selectVerse(Number(verse.dataset.verse), { toggle: true });
});
ui.verses.addEventListener("keydown", event => {
  const heart = event.target.closest(".verse-heart");
  if (heart && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();event.stopPropagation();
    toggleSingleVerseFavorite(Number(heart.dataset.favoriteVerse));
    return;
  }
  const verse = event.target.closest(".bible-verse");
  if (verse && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    selectVerse(Number(verse.dataset.verse), { toggle: true });
  }
});
ui.copyVerse.addEventListener("click", copySelectedVerses);
ui.clearSelection.addEventListener("click", clearSelectedVerses);
ui.openSermon.addEventListener("click", () => {
  ui.sermonStudio.scrollIntoView({ behavior: "smooth", block: "start" });
});
ui.generateSermon.addEventListener("click", generateSermonDraft);
ui.copySermon.addEventListener("click", copySermonDraft);
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


/* Rencana Baca, Ayat Favorit, dan Catatan Pribadi */
const PERSONAL_KEYS = {
  plan: "erikson-reading-plan-v1",
  favorites: "erikson-favorite-verses-v1"
};
const JESUS_7 = [
  ["Yohanes","yohanes",1],["Yohanes","yohanes",3],["Markus","markus",4],["Lukas","lukas",15],
  ["Yohanes","yohanes",10],["Yohanes","yohanes",19],["Yohanes","yohanes",20]
];
const FAITH_30 = [
  ["Kejadian","kejadian",1],["Kejadian","kejadian",12],["Keluaran","keluaran",3],["Keluaran","keluaran",20],
  ["Yosua","yosua",1],["1 Samuel","1-samuel",17],["Mazmur","mazmur",23],["Mazmur","mazmur",51],
  ["Amsal","amsal",3],["Yesaya","yesaya",53],["Daniel","daniel",6],["Matius","matius",5],
  ["Matius","matius",6],["Lukas","lukas",2],["Lukas","lukas",10],["Lukas","lukas",15],
  ["Yohanes","yohanes",1],["Yohanes","yohanes",3],["Yohanes","yohanes",10],["Yohanes","yohanes",15],
  ["Yohanes","yohanes",19],["Yohanes","yohanes",20],["Kisah Para Rasul","kisah-para-rasul",2],["Roma","roma",8],
  ["Roma","roma",12],["1 Korintus","1-korintus",13],["Galatia","galatia",5],["Efesus","efesus",6],
  ["Filipi","filipi",4],["Wahyu","wahyu",21]
];
const PLAN_DEFS = {
  jesus7:{title:"7 Hari Mengenal Yesus",days:7,subtitle:"Mengenal pribadi, kasih, salib, dan kebangkitan Yesus."},
  faith30:{title:"30 Hari Dasar Iman",days:30,subtitle:"Bagian-bagian penting untuk membangun dasar kehidupan Kristen."},
  nt90:{title:"90 Hari Perjanjian Baru",days:90,subtitle:"Membaca seluruh Perjanjian Baru secara bertahap."},
  bible365:{title:"365 Hari Seluruh Alkitab",days:365,subtitle:"Perjalanan dari Kejadian sampai Wahyu."}
};
const toolEls = {
  saveFavorite:document.querySelector("#saveFavoriteVerse"),
  shortcutCount:document.querySelector("#favoriteShortcutCount"),
  planChoices:document.querySelector("#planChoiceGrid"),
  activePlan:document.querySelector("#activePlanCard"),
  planLabel:document.querySelector("#activePlanLabel"),
  planTitle:document.querySelector("#activePlanTitle"),
  planPercent:document.querySelector("#planProgressPercent"),
  planBar:document.querySelector("#planProgressBar"),
  todayLabel:document.querySelector("#todayDayLabel"),
  todayReference:document.querySelector("#todayReadingReference"),
  todayEncouragement:document.querySelector("#todayReadingEncouragement"),
  openToday:document.querySelector("#openTodayReading"),
  completeToday:document.querySelector("#completeTodayReading"),
  dayList:document.querySelector("#planDayList"),
  changePlan:document.querySelector("#changeReadingPlan"),
  favoriteSearch:document.querySelector("#favoriteSearch"),
  favoriteCount:document.querySelector("#favoriteCount"),
  favoriteList:document.querySelector("#favoriteList")
};
let activeReadingPlan = readStoredJSON(PERSONAL_KEYS.plan, null);
let favoriteVerses = readStoredJSON(PERSONAL_KEYS.favorites, []);
if(!Array.isArray(favoriteVerses))favoriteVerses=[];
if(activeReadingPlan&&(!activeReadingPlan.id||!Array.isArray(activeReadingPlan.completed)))activeReadingPlan=null;
let visiblePlanDay = 1;

function readStoredJSON(key,fallback){
  try{
    const value=JSON.parse(localStorage.getItem(key));
    return value===null?fallback:value;
  }catch(error){return fallback}
}
function localDateKey(date=new Date()){
  return date.getFullYear()+"-"+String(date.getMonth()+1).padStart(2,"0")+"-"+String(date.getDate()).padStart(2,"0");
}
function chapterSequence(testament){
  const list=[];
  BOOKS.filter(book=>!testament||book.testament===testament).forEach(book=>{
    for(let chapter=1;chapter<=book.chapters;chapter++)list.push({name:book.name,slug:book.slug,chapter});
  });
  return list;
}
function splitSequence(sequence,days){
  return Array.from({length:days},(_,index)=>{
    const start=Math.floor(index*sequence.length/days);
    let end=Math.floor((index+1)*sequence.length/days);
    if(end<=start)end=start+1;
    return sequence.slice(start,Math.min(end,sequence.length));
  });
}
function planDays(planId){
  if(planId==="jesus7")return JESUS_7.map(item=>[{name:item[0],slug:item[1],chapter:item[2]}]);
  if(planId==="faith30")return FAITH_30.map(item=>[{name:item[0],slug:item[1],chapter:item[2]}]);
  if(planId==="nt90")return splitSequence(chapterSequence("PB"),90);
  return splitSequence(chapterSequence(),365);
}
function formatReading(items){
  const groups=[];
  items.forEach(item=>{
    const last=groups.at(-1);
    if(last&&last.slug===item.slug&&last.end+1===item.chapter)last.end=item.chapter;
    else groups.push({name:item.name,slug:item.slug,start:item.chapter,end:item.chapter});
  });
  return groups.map(group=>group.name+" "+group.start+(group.end>group.start?"–"+group.end:"")).join(" · ");
}
function currentPlanDay(){
  if(!activeReadingPlan)return 1;
  const start=new Date(activeReadingPlan.startedAt+"T00:00:00");
  const now=new Date();const today=new Date(now.getFullYear(),now.getMonth(),now.getDate());
  const difference=Math.floor((today-start)/86400000)+1;
  return Math.max(1,Math.min(PLAN_DEFS[activeReadingPlan.id].days,difference));
}
function persistPlan(){
  localStorage.setItem(PERSONAL_KEYS.plan,JSON.stringify(activeReadingPlan));
  renderReadingPlan();
}
function startReadingPlan(planId){
  activeReadingPlan={id:planId,startedAt:localDateKey(),completed:[]};
  visiblePlanDay=1;persistPlan();
  window.eriksonTrackActivity?.("reading_plan_start",PLAN_DEFS[planId].title,"plan:"+planId);
}
function togglePlanDay(day){
  const completed=new Set(activeReadingPlan.completed||[]);
  if(completed.has(day))completed.delete(day);else completed.add(day);
  activeReadingPlan.completed=Array.from(completed).sort((a,b)=>a-b);
  persistPlan();
}
function renderReadingPlan(){
  if(!activeReadingPlan||!PLAN_DEFS[activeReadingPlan.id]){
    toolEls.planChoices.hidden=false;toolEls.activePlan.hidden=true;return;
  }
  const definition=PLAN_DEFS[activeReadingPlan.id];
  const days=planDays(activeReadingPlan.id);
  visiblePlanDay=currentPlanDay();
  const completed=new Set(activeReadingPlan.completed||[]);
  const percent=Math.round(completed.size/definition.days*100);
  toolEls.planChoices.hidden=true;toolEls.activePlan.hidden=false;
  toolEls.planLabel.textContent="RENCANA AKTIF · DIMULAI "+new Date(activeReadingPlan.startedAt+"T00:00:00").toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"});
  toolEls.planTitle.textContent=definition.title;toolEls.planPercent.textContent=percent+"%";toolEls.planBar.style.width=percent+"%";
  toolEls.todayLabel.textContent="HARI "+visiblePlanDay+" DARI "+definition.days;
  toolEls.todayReference.textContent=formatReading(days[visiblePlanDay-1]);
  toolEls.todayEncouragement.textContent=definition.subtitle;
  const isDone=completed.has(visiblePlanDay);
  toolEls.completeToday.textContent=isDone?"✓ Sudah Selesai":"✓ Tandai Selesai";
  toolEls.completeToday.classList.toggle("completed",isDone);
  renderPlanDayList(days,completed,visiblePlanDay);
}
function renderPlanDayList(days,completed,today){
  toolEls.dayList.innerHTML="";
  const start=Math.max(1,Math.min(days.length-6,today-2));
  const end=Math.min(days.length,start+6);
  for(let day=start;day<=end;day++){
    const button=document.createElement("button");
    button.type="button";button.className="plan-day"+(completed.has(day)?" done":"")+(day===today?" current":"");
    button.innerHTML="<span>"+(completed.has(day)?"✓":String(day).padStart(2,"0"))+"</span><div><strong>Hari "+day+"</strong><small>"+escapeHTML(formatReading(days[day-1]))+"</small></div>";
    button.addEventListener("click",()=>togglePlanDay(day));
    toolEls.dayList.appendChild(button);
  }
}
async function openReadingItem(item,verseNumbers=[]){
  const targetBook=BOOKS.find(book=>book.slug===item.slug);
  if(!targetBook)return;
  currentBook=targetBook;currentChapter=item.chapter;ui.testament.value="all";
  fillBooks();fillChapters();await loadChapter({scroll:false});
  if(verseNumbers.length){
    selectedVerses=currentVerses.filter(verse=>verseNumbers.includes(verse.number));
    updateSelectionUI();
  }
  document.querySelector("#bookReader").scrollIntoView({behavior:"smooth",block:"start"});
}
function openPlanDay(day){
  const days=planDays(activeReadingPlan.id);
  const first=days[day-1]?.[0];
  if(first)openReadingItem(first);
}
function persistFavorites(){
  localStorage.setItem(PERSONAL_KEYS.favorites,JSON.stringify(favoriteVerses));
  renderFavorites();updateVerseHeartStates();
}
function singleFavoriteKey(verseNumber){
  return currentBook.slug+"-"+currentChapter+"-"+verseNumber;
}
function updateVerseHeartStates(){
  if(typeof favoriteVerses==="undefined")return;
  document.querySelectorAll(".verse-heart").forEach(heart=>{
    const number=Number(heart.dataset.favoriteVerse);
    const saved=favoriteVerses.some(item=>item.key===singleFavoriteKey(number));
    heart.classList.toggle("saved",saved);
    heart.textContent=saved?"♥":"♡";
    heart.setAttribute("aria-pressed",String(saved));
    heart.title=saved?"Hapus dari favorit":"Tambah ke ayat favorit";
  });
}
function toggleSingleVerseFavorite(verseNumber){
  const verse=currentVerses.find(item=>item.number===verseNumber);
  if(!verse)return;
  const key=singleFavoriteKey(verseNumber);
  const existing=favoriteVerses.find(item=>item.key===key);
  if(existing){
    favoriteVerses=favoriteVerses.filter(item=>item.id!==existing.id);
  }else{
    favoriteVerses.unshift({
      id:crypto.randomUUID?crypto.randomUUID():"fav-"+Date.now(),key,
      book:currentBook.name,slug:currentBook.slug,chapter:currentChapter,
      reference:currentBook.name+" "+currentChapter+":"+verse.number,
      verses:[{number:verse.number,text:verse.text}],note:"",savedAt:new Date().toISOString()
    });
    window.eriksonTrackActivity?.("favorite_verse_save",currentBook.name+" "+currentChapter+":"+verse.number,"favorite:"+key);
  }
  persistFavorites();
}
function favoriteKey(){
  return currentBook.slug+"-"+currentChapter+"-"+selectedVerses.map(verse=>verse.number).join("-");
}
function saveFavoriteSelection(){
  if(!selectedVerses.length)return;
  const key=favoriteKey();
  const existing=favoriteVerses.find(item=>item.key===key);
  if(existing){
    toolEls.saveFavorite.textContent="⭐ Sudah Tersimpan";
    setTimeout(()=>toolEls.saveFavorite.textContent="⭐ Simpan Favorit",1600);
    document.querySelector("#favoriteVerses").scrollIntoView({behavior:"smooth",block:"start"});
    return;
  }
  favoriteVerses.unshift({
    id:crypto.randomUUID?crypto.randomUUID():"fav-"+Date.now(),key,
    book:currentBook.name,slug:currentBook.slug,chapter:currentChapter,
    reference:selectedPassageReference(),verses:selectedVerses.map(verse=>({number:verse.number,text:verse.text})),
    note:"",savedAt:new Date().toISOString()
  });
  persistFavorites();
  toolEls.saveFavorite.textContent="✓ Favorit Tersimpan";
  setTimeout(()=>toolEls.saveFavorite.textContent="⭐ Simpan Favorit",1600);
  window.eriksonTrackActivity?.("favorite_verse_save",selectedPassageReference(),"favorite:"+key);
}
function renderFavorites(){
  const query=(toolEls.favoriteSearch.value||"").trim().toLowerCase();
  const filtered=favoriteVerses.filter(item=>(item.reference+" "+item.verses.map(verse=>verse.text).join(" ")+" "+item.note).toLowerCase().includes(query));
  const countText=favoriteVerses.length+(favoriteVerses.length===1?" ayat tersimpan":" ayat tersimpan");
  toolEls.favoriteCount.textContent=countText;
  toolEls.shortcutCount.textContent=favoriteVerses.length?countText:"Belum ada ayat tersimpan";
  toolEls.favoriteList.innerHTML="";
  if(!filtered.length){
    toolEls.favoriteList.innerHTML='<div class="favorite-empty"><span>☆</span><strong>'+(query?"Ayat tidak ditemukan":"Belum ada ayat favorit")+'</strong><p>'+(query?"Coba gunakan kata pencarian lain.":"Pilih ayat di atas untuk membuat koleksi pribadimu.")+"</p></div>";
    return;
  }
  filtered.forEach(item=>{
    const card=document.createElement("article");card.className="favorite-card";
    card.innerHTML='<div class="favorite-card-top"><div><small>AYAT FAVORIT</small><h4>'+escapeHTML(item.reference)+'</h4></div><button type="button" class="favorite-delete" aria-label="Hapus '+escapeHTML(item.reference)+'">×</button></div><blockquote>'+item.verses.map(verse=>"<sup>"+verse.number+"</sup> "+escapeHTML(verse.text)).join(" ")+'</blockquote><label>Catatan pribadi<textarea maxlength="500" rows="3" placeholder="Tuliskan pelajaran, doa, atau penerapan…">'+escapeHTML(item.note||"")+'</textarea></label><div class="favorite-actions"><button type="button" data-action="open">📖 Buka</button><button type="button" data-action="copy">📋 Salin</button><button type="button" data-action="note">💾 Simpan Catatan</button></div>';
    card.querySelector(".favorite-delete").addEventListener("click",()=>{
      if(confirm("Hapus "+item.reference+" dari ayat favorit?")){
        favoriteVerses=favoriteVerses.filter(favorite=>favorite.id!==item.id);persistFavorites();
      }
    });
    card.querySelector('[data-action="open"]').addEventListener("click",()=>openReadingItem(item,item.verses.map(verse=>verse.number)));
    card.querySelector('[data-action="copy"]').addEventListener("click",async event=>{
      await writeClipboard(item.reference+"\n"+item.verses.map(verse=>verse.number+". "+verse.text).join("\n")+(item.note?"\n\nCatatan: "+item.note:""));
      event.currentTarget.textContent="✓ Tersalin";setTimeout(()=>event.currentTarget.textContent="📋 Salin",1400);
    });
    card.querySelector('[data-action="note"]').addEventListener("click",event=>{
      item.note=card.querySelector("textarea").value.trim().slice(0,500);
      localStorage.setItem(PERSONAL_KEYS.favorites,JSON.stringify(favoriteVerses));
      event.currentTarget.textContent="✓ Catatan Tersimpan";setTimeout(()=>event.currentTarget.textContent="💾 Simpan Catatan",1400);
    });
    toolEls.favoriteList.appendChild(card);
  });
}

toolEls.planChoices.addEventListener("click",event=>{
  const button=event.target.closest("[data-plan]");
  if(button)startReadingPlan(button.dataset.plan);
});
toolEls.openToday.addEventListener("click",()=>openPlanDay(visiblePlanDay));
toolEls.completeToday.addEventListener("click",()=>togglePlanDay(visiblePlanDay));
toolEls.changePlan.addEventListener("click",()=>{
  if(confirm("Ganti rencana baca? Progres rencana yang sedang aktif akan dimulai ulang.")){
    activeReadingPlan=null;localStorage.removeItem(PERSONAL_KEYS.plan);renderReadingPlan();
  }
});
toolEls.saveFavorite.addEventListener("click",saveFavoriteSelection);
toolEls.favoriteSearch.addEventListener("input",renderFavorites);
renderReadingPlan();renderFavorites();
