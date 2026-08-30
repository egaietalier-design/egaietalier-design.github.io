const QUIZ_API = "https://erikson-atelier-admin.egaietalier.chatgpt.site/api/quiz-results";

const choiceQuestions = [
  {category:"Penciptaan",question:"Siapakah manusia pertama yang diciptakan Allah?",options:["Nuh","Adam","Abraham","Musa"],answer:1,reference:"Kejadian 2:7",explanation:"Allah membentuk Adam dari debu tanah dan menghembuskan napas kehidupan kepadanya."},
  {category:"Penciptaan",question:"Pada hari ke berapakah Allah berhenti dari pekerjaan penciptaan?",options:["Hari kelima","Hari keenam","Hari ketujuh","Hari kedelapan"],answer:2,reference:"Kejadian 2:2–3",explanation:"Allah menyelesaikan pekerjaan-Nya dan berhenti pada hari ketujuh, lalu memberkati hari itu."},
  {category:"Bapa-bapa Leluhur",question:"Siapakah anak perjanjian Abraham dan Sara?",options:["Ismael","Ishak","Esau","Yakub"],answer:1,reference:"Kejadian 21:1–3",explanation:"Allah menepati janji-Nya melalui kelahiran Ishak."},
  {category:"Kejadian",question:"Siapakah yang dijual saudara-saudaranya lalu dibawa ke Mesir?",options:["Yusuf","Benyamin","Ruben","Yehuda"],answer:0,reference:"Kejadian 37:28",explanation:"Yusuf dijual, tetapi Allah memakai perjalanan hidupnya untuk memelihara banyak orang."},
  {category:"Keluaran",question:"Siapakah yang memimpin Israel keluar dari Mesir?",options:["Harun","Musa","Yosua","Samuel"],answer:1,reference:"Keluaran 3:10",explanation:"Allah mengutus Musa untuk membawa umat Israel keluar dari perbudakan Mesir."},
  {category:"Keluaran",question:"Berapa jumlah Sepuluh Perintah Allah?",options:["Tujuh","Delapan","Sepuluh","Dua belas"],answer:2,reference:"Keluaran 20:1–17",explanation:"Allah memberikan sepuluh perintah sebagai pedoman perjanjian bagi umat-Nya."},
  {category:"Sejarah Israel",question:"Dengan apakah Daud mengalahkan Goliat?",options:["Pedang","Tombak","Umban dan batu","Busur"],answer:2,reference:"1 Samuel 17:49–50",explanation:"Daud mengalahkan Goliat dengan umban dan batu sambil mengandalkan Tuhan."},
  {category:"Raja-raja",question:"Apa yang diminta Salomo kepada Allah?",options:["Kekayaan","Umur panjang","Hikmat","Kemenangan"],answer:2,reference:"1 Raja-raja 3:9–12",explanation:"Salomo meminta hati yang paham untuk memimpin umat dengan benar."},
  {category:"Para Nabi",question:"Ke kota manakah Yunus diutus?",options:["Yerusalem","Niniwe","Betlehem","Damsyik"],answer:1,reference:"Yunus 3:1–3",explanation:"Allah mengutus Yunus ke Niniwe untuk menyerukan pertobatan."},
  {category:"Para Nabi",question:"Mengapa Daniel dilemparkan ke gua singa?",options:["Ia mencuri","Ia melarikan diri","Ia tetap berdoa kepada Allah","Ia menolak menjadi pejabat"],answer:2,reference:"Daniel 6:11–17",explanation:"Daniel tetap setia berdoa meskipun ada larangan raja."},
  {category:"Mazmur",question:"Menurut Mazmur 23, siapakah gembala pemazmur?",options:["Daud","Tuhan","Musa","Samuel"],answer:1,reference:"Mazmur 23:1",explanation:"Daud mengakui Tuhan sebagai Gembalanya yang memelihara dan menuntun."},
  {category:"Kelahiran Yesus",question:"Di kota manakah Yesus dilahirkan?",options:["Nazaret","Yerusalem","Betlehem","Kapernaum"],answer:2,reference:"Matius 2:1",explanation:"Yesus dilahirkan di Betlehem pada zaman Raja Herodes."},
  {category:"Kehidupan Yesus",question:"Siapakah yang membaptis Yesus?",options:["Petrus","Yohanes Pembaptis","Yakobus","Andreas"],answer:1,reference:"Matius 3:13–17",explanation:"Yohanes membaptis Yesus di Sungai Yordan."},
  {category:"Murid Yesus",question:"Berapa jumlah rasul yang dipilih Yesus?",options:["Tujuh","Sepuluh","Dua belas","Empat belas"],answer:2,reference:"Lukas 6:13",explanation:"Yesus memilih dua belas orang dari antara murid-murid-Nya dan menamai mereka rasul."},
  {category:"Mukjizat Yesus",question:"Berapa roti yang dipakai Yesus untuk memberi makan lima ribu orang?",options:["Dua","Lima","Tujuh","Dua belas"],answer:1,reference:"Yohanes 6:9–13",explanation:"Seorang anak membawa lima roti jelai dan dua ikan, lalu Yesus melipatgandakannya."},
  {category:"Perumpamaan",question:"Dalam perumpamaan, siapakah yang menolong orang yang dirampok?",options:["Imam","Orang Lewi","Orang Samaria","Prajurit"],answer:2,reference:"Lukas 10:30–37",explanation:"Orang Samaria menunjukkan belas kasihan yang nyata kepada orang terluka."},
  {category:"Kehidupan Yesus",question:"Siapakah murid yang berjalan di atas air menghampiri Yesus?",options:["Yohanes","Petrus","Tomas","Matius"],answer:1,reference:"Matius 14:28–29",explanation:"Petrus turun dari perahu dan berjalan di atas air menuju Yesus."},
  {category:"Salib dan Kebangkitan",question:"Pada hari ke berapakah Yesus bangkit?",options:["Hari pertama","Hari kedua","Hari ketiga","Hari ketujuh"],answer:2,reference:"1 Korintus 15:3–4",explanation:"Kristus mati karena dosa-dosa kita dan dibangkitkan pada hari ketiga."},
  {category:"Gereja Mula-mula",question:"Siapakah yang berkhotbah pada hari Pentakosta?",options:["Paulus","Petrus","Barnabas","Stefanus"],answer:1,reference:"Kisah Para Rasul 2:14–41",explanation:"Petrus memberitakan Yesus dan sekitar tiga ribu orang menerima firman."},
  {category:"Rasul Paulus",question:"Apa nama Paulus sebelum dikenal sebagai Paulus?",options:["Saulus","Silas","Simon","Stefanus"],answer:0,reference:"Kisah Para Rasul 9:1–19; 13:9",explanation:"Ia dikenal sebagai Saulus dan kemudian disebut juga Paulus."},
  {category:"Buah Roh",question:"Manakah yang termasuk buah Roh?",options:["Kesombongan","Kasih","Iri hati","Kebencian"],answer:1,reference:"Galatia 5:22–23",explanation:"Kasih adalah bagian pertama dalam daftar buah Roh."},
  {category:"Iman",question:"Menurut Ibrani 11:1, iman adalah dasar dari apa?",options:["Segala kekayaan","Segala sesuatu yang diharapkan","Segala pengetahuan","Segala kekuatan"],answer:1,reference:"Ibrani 11:1",explanation:"Iman adalah dasar dari segala sesuatu yang kita harapkan dan bukti dari yang tidak kita lihat."},
  {category:"Kasih",question:"Menurut 1 Korintus 13:13, yang paling besar adalah?",options:["Iman","Pengharapan","Kasih","Pengetahuan"],answer:2,reference:"1 Korintus 13:13",explanation:"Iman, pengharapan, dan kasih tetap ada, tetapi yang paling besar ialah kasih."},
  {category:"Wahyu",question:"Siapakah Alfa dan Omega menurut Wahyu?",options:["Musa","Yohanes","Tuhan Allah","Malaikat"],answer:2,reference:"Wahyu 1:8",explanation:"Tuhan Allah menyatakan diri sebagai Alfa dan Omega, Yang Ada, sudah ada, dan akan datang."}
];

const essayQuestions = [
  {category:"Kasih",question:"Jelaskan makna mengasihi sesama berdasarkan Markus 12:31.",reference:"Markus 12:31",explanation:"Mengasihi sesama berarti memperlakukan orang lain dengan kasih yang nyata sebagaimana kita ingin diperlakukan, sebagai respons kepada kasih Allah."},
  {category:"Iman",question:"Apa yang dapat dipelajari dari iman Abraham ketika menaati panggilan Allah?",reference:"Kejadian 12:1–4; Ibrani 11:8",explanation:"Abraham percaya dan taat meskipun belum mengetahui seluruh perjalanan. Iman terlihat melalui ketaatan kepada firman Allah."},
  {category:"Pengampunan",question:"Mengapa pengikut Kristus perlu mengampuni orang lain?",reference:"Efesus 4:32",explanation:"Orang percaya dipanggil saling mengampuni sebagaimana Allah telah mengampuni mereka di dalam Kristus."},
  {category:"Pelayanan",question:"Apa arti menjadi garam dan terang dunia?",reference:"Matius 5:13–16",explanation:"Murid Kristus dipanggil membawa pengaruh yang baik dan melakukan perbuatan yang memuliakan Bapa."},
  {category:"Doa",question:"Apa yang Yesus ajarkan tentang ketekunan dalam doa?",reference:"Lukas 18:1–8",explanation:"Yesus mengajar agar murid-murid selalu berdoa dengan tekun dan tidak menjadi lemah."},
  {category:"Firman",question:"Bagaimana seharusnya seseorang merespons Firman Tuhan?",reference:"Yakobus 1:22",explanation:"Firman tidak cukup hanya didengar; orang percaya dipanggil melakukannya dalam kehidupan sehari-hari."},
  {category:"Kerendahan hati",question:"Apa teladan Yesus ketika membasuh kaki murid-murid?",reference:"Yohanes 13:12–15",explanation:"Yesus memberi teladan kerendahan hati dan pelayanan, agar para murid saling melayani."},
  {category:"Kekhawatiran",question:"Apa dasar orang percaya untuk tidak dikuasai kekhawatiran?",reference:"Matius 6:25–34",explanation:"Bapa mengetahui kebutuhan anak-anak-Nya. Karena itu mereka mencari Kerajaan Allah dan mempercayakan hari esok kepada-Nya."},
  {category:"Buah Roh",question:"Bagaimana buah Roh terlihat dalam kehidupan sehari-hari?",reference:"Galatia 5:22–23",explanation:"Buah Roh terlihat melalui kasih, sukacita, damai sejahtera, kesabaran, kemurahan, kebaikan, kesetiaan, kelemahlembutan, dan penguasaan diri."},
  {category:"Misi",question:"Apa tanggung jawab murid Kristus dalam Amanat Agung?",reference:"Matius 28:18–20",explanation:"Murid Kristus dipanggil pergi, menjadikan semua bangsa murid, membaptis, dan mengajar mereka menaati perintah Yesus."}
];

const els = {
  intro: document.querySelector("#quiz-intro"),
  game: document.querySelector("#quiz-game"),
  result: document.querySelector("#quiz-result"),
  name: document.querySelector("#player-name"),
  nameError: document.querySelector("#name-error"),
  start: document.querySelector("#start-quiz"),
  modes: [...document.querySelectorAll(".quiz-mode")],
  modeDescription: document.querySelector("#mode-description"),
  player: document.querySelector("#active-player"),
  liveMode: document.querySelector("#live-mode"),
  stageMap: document.querySelector("#stage-map"),
  count: document.querySelector("#question-count"),
  score: document.querySelector("#score-display"),
  progress: document.querySelector("#progress-bar"),
  progressBox: document.querySelector(".quiz-progress"),
  stageNumber: document.querySelector("#stage-number"),
  category: document.querySelector("#question-category"),
  question: document.querySelector("#question-text"),
  options: document.querySelector("#answer-options"),
  essayArea: document.querySelector("#essay-area"),
  essayAnswer: document.querySelector("#essay-answer"),
  reveal: document.querySelector("#reveal-answer"),
  explanation: document.querySelector("#answer-explanation"),
  answerStatus: document.querySelector("#answer-status"),
  answerDetail: document.querySelector("#answer-detail"),
  answerReference: document.querySelector("#answer-reference"),
  stagePoints: document.querySelector("#stage-points"),
  assessment: document.querySelector("#self-assessment"),
  next: document.querySelector("#next-question"),
  sync: document.querySelector("#score-sync"),
  finalScore: document.querySelector("#final-score"),
  resultTitle: document.querySelector("#result-title"),
  resultMessage: document.querySelector("#result-message"),
  resultPlayer: document.querySelector("#result-player"),
  correctTotal: document.querySelector("#correct-total"),
  bestScore: document.querySelector("#best-score"),
  resultSaved: document.querySelector("#result-saved"),
  again: document.querySelector("#play-again")
};

let mode = "choice";
let questions = [];
let current = 0;
let correct = 0;
let sessionId = "";
let playerName = "";
let answered = false;

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function totalStages() {
  return mode === "essay" ? 5 : 10;
}

function currentScore() {
  return Math.round((correct / totalStages()) * 100);
}

async function saveProgress(stage) {
  els.sync.textContent = "Menyimpan nilai…";
  try {
    const response = await fetch(QUIZ_API, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body: JSON.stringify({
        sessionId,
        playerName,
        mode: mode === "essay" ? "esai" : "pilihan-ganda",
        currentStage: stage,
        correctAnswers: correct
      }),
      mode: "cors",
      keepalive: true
    });
    if (!response.ok) throw new Error();
    els.sync.textContent = stage >= totalStages() ? "Nilai akhir sudah tersimpan untuk admin." : "Skor tahap ini sudah tersimpan.";
    return true;
  } catch {
    els.sync.textContent = "Nilai belum tersimpan. Pastikan internet aktif.";
    return false;
  }
}

function renderStageMap() {
  els.stageMap.innerHTML = Array.from({ length: totalStages() }, (_, index) => {
    const state = index < current ? "done" : index === current ? "active" : "";
    return `<span class="${state}"><i>${index + 1}</i><small>${index === current ? "Sekarang" : index < current ? "Selesai" : "Tahap"}</small></span>`;
  }).join("");
}

function resetQuestionUI() {
  answered = false;
  els.options.innerHTML = "";
  els.explanation.hidden = true;
  els.assessment.hidden = true;
  els.next.hidden = true;
  els.sync.textContent = "";
  els.essayAnswer.value = "";
  els.reveal.disabled = false;
}

function renderQuestion() {
  resetQuestionUI();
  const q = questions[current];
  const total = totalStages();
  els.stageNumber.textContent = String(current + 1).padStart(2, "0");
  els.count.textContent = `Tahap ${current + 1} dari ${total}`;
  els.score.textContent = `Skor: ${currentScore()}`;
  els.progress.style.width = `${((current + 1) / total) * 100}%`;
  els.progressBox.setAttribute("aria-valuemax", String(total));
  els.progressBox.setAttribute("aria-valuenow", String(current + 1));
  els.category.textContent = q.category;
  els.question.textContent = q.question;
  renderStageMap();

  if (mode === "choice") {
    els.essayArea.hidden = true;
    els.options.hidden = false;
    q.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.className = "answer-option";
      button.type = "button";
      button.innerHTML = `<span>${String.fromCharCode(65 + index)}</span><strong>${option}</strong>`;
      button.addEventListener("click", () => answerChoice(index, button));
      els.options.appendChild(button);
    });
  } else {
    els.options.hidden = true;
    els.essayArea.hidden = false;
  }
}

function showFeedback(points, status, detail, reference, correctAnswer) {
  els.stagePoints.textContent = `+${points}`;
  els.stagePoints.className = points ? "earned" : "missed";
  els.answerStatus.textContent = status;
  els.answerStatus.className = correctAnswer ? "status-correct" : "status-wrong";
  els.answerDetail.textContent = detail;
  els.answerReference.textContent = reference;
  els.explanation.hidden = false;
}

function answerChoice(index, selectedButton) {
  if (answered) return;
  answered = true;
  const q = questions[current];
  const buttons = [...els.options.querySelectorAll("button")];
  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === q.answer) button.classList.add("correct");
  });

  const isCorrect = index === q.answer;
  if (isCorrect) {
    correct += 1;
    showFeedback(10, "Benar! Tahap ini selesai.", q.explanation, q.reference, true);
  } else {
    selectedButton.classList.add("wrong");
    showFeedback(0, "Belum tepat. Tetap semangat!", q.explanation, q.reference, false);
  }
  els.score.textContent = `Skor: ${currentScore()}`;
  prepareNext();
  saveProgress(current + 1);
}

function revealEssay() {
  if (answered) return;
  if (els.essayAnswer.value.trim().length < 10) {
    els.sync.textContent = "Tuliskan jawaban sedikit lebih lengkap terlebih dahulu.";
    els.essayAnswer.focus();
    return;
  }
  answered = true;
  const q = questions[current];
  els.reveal.disabled = true;
  showFeedback(0, "Bandingkan jawabanmu", q.explanation, q.reference, true);
  els.assessment.hidden = false;
}

function assessEssay(understood, button) {
  if (els.assessment.dataset.done) return;
  els.assessment.dataset.done = "true";
  [...els.assessment.querySelectorAll("button")].forEach(item => item.disabled = true);
  button.classList.add("selected");
  if (understood) {
    correct += 1;
    els.stagePoints.textContent = "+20";
    els.stagePoints.className = "earned";
    els.answerStatus.textContent = "Jawaban sudah sesuai.";
    els.answerStatus.className = "status-correct";
  } else {
    els.stagePoints.textContent = "+0";
    els.stagePoints.className = "missed";
    els.answerStatus.textContent = "Pelajari kembali ayat referensinya.";
    els.answerStatus.className = "status-wrong";
  }
  els.score.textContent = `Skor: ${currentScore()}`;
  prepareNext();
  saveProgress(current + 1);
}

function prepareNext() {
  const finalStage = current === totalStages() - 1;
  els.next.textContent = finalStage ? "Lihat Nilai Akhir →" : `Lanjut ke Tahap ${current + 2} →`;
  els.next.hidden = false;
}

function nextStage() {
  if (current >= totalStages() - 1) {
    finishQuiz();
    return;
  }
  current += 1;
  delete els.assessment.dataset.done;
  renderQuestion();
  window.scrollTo({ top: els.game.offsetTop - 20, behavior: "smooth" });
}

function startQuiz() {
  playerName = els.name.value.trim().replace(/\s+/g, " ").slice(0, 30);
  if (playerName.length < 2) {
    els.nameError.textContent = "Masukkan nama panggilan minimal 2 huruf.";
    els.name.focus();
    return;
  }
  els.nameError.textContent = "";
  sessionId = crypto.randomUUID ? crypto.randomUUID() : `quiz-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  questions = shuffle(mode === "essay" ? essayQuestions : choiceQuestions).slice(0, totalStages());
  current = 0;
  correct = 0;
  delete els.assessment.dataset.done;
  els.player.textContent = playerName;
  els.liveMode.textContent = mode === "essay" ? "Esai · 5 Tahap" : "Pilihan Ganda · 10 Tahap";
  els.intro.hidden = true;
  els.result.hidden = true;
  els.game.hidden = false;
  renderQuestion();
  saveProgress(0);
  window.eriksonTrackActivity?.("quiz_start", `${playerName} memulai kuis`, `quiz:${sessionId}`);
}

async function finishQuiz() {
  const score = currentScore();
  els.game.hidden = true;
  els.result.hidden = false;
  els.finalScore.textContent = String(score);
  els.resultPlayer.textContent = playerName;
  els.correctTotal.textContent = `${correct}/${totalStages()}`;

  const key = mode === "essay" ? "erikson-quiz-best-essay" : "erikson-quiz-best-choice";
  const previousBest = Number(localStorage.getItem(key) || 0);
  const best = Math.max(previousBest, score);
  localStorage.setItem(key, String(best));
  els.bestScore.textContent = String(best);

  if (score >= 90) {
    els.resultTitle.textContent = "Luar biasa! Pemahamanmu sangat baik.";
    els.resultMessage.textContent = "Teruslah membaca dan melakukan Firman Tuhan dalam kehidupan sehari-hari.";
  } else if (score >= 70) {
    els.resultTitle.textContent = "Bagus! Terus bertumbuh.";
    els.resultMessage.textContent = "Kamu sudah memahami banyak bagian. Pelajari kembali referensi yang belum tepat.";
  } else {
    els.resultTitle.textContent = "Tetap semangat belajar Firman.";
    els.resultMessage.textContent = "Nilai bukan akhir perjalanan. Baca kembali ayat referensi lalu coba lagi.";
  }

  els.resultSaved.textContent = "Menyimpan nilai ke panel admin…";
  const saved = await saveProgress(totalStages());
  els.resultSaved.textContent = saved ? "✓ Nilai sudah tersimpan dan dapat dilihat admin." : "Nilai belum tersimpan. Periksa internet lalu mainkan kembali.";
  window.scrollTo({ top: els.result.offsetTop - 20, behavior: "smooth" });
}

els.modes.forEach(button => {
  button.addEventListener("click", () => {
    mode = button.dataset.mode;
    els.modes.forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    els.modeDescription.textContent = mode === "essay"
      ? "Lima tahap esai Alkitab. Bandingkan jawaban dan nilai pemahamanmu."
      : "Setiap jawaban benar bernilai 10 poin. Nilai maksimal 100.";
    els.start.textContent = "Mulai Tahap 1";
  });
});

els.start.addEventListener("click", startQuiz);
els.next.addEventListener("click", nextStage);
els.reveal.addEventListener("click", revealEssay);
els.assessment.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => assessEssay(button.dataset.understood === "yes", button));
});
els.again.addEventListener("click", () => {
  els.result.hidden = true;
  els.intro.hidden = false;
  els.name.focus();
  window.scrollTo({ top: els.intro.offsetTop - 20, behavior: "smooth" });
});
