const QUIZ_API = "https://erikson-atelier-admin.egaietalier.chatgpt.site/api/quiz-results";

const bank = [
  {category:"Kejadian",question:"Siapakah manusia pertama yang diciptakan Allah?",options:["Nuh","Adam","Abraham","Musa"],answer:1,reference:"Kejadian 2:7",explanation:"Allah membentuk Adam dari debu tanah dan menghembuskan napas kehidupan kepadanya."},
  {category:"Kejadian",question:"Siapakah perempuan pertama dalam Alkitab?",options:["Sara","Hawa","Ribka","Rahel"],answer:1,reference:"Kejadian 2:21–23",explanation:"Allah membentuk Hawa dan membawanya kepada Adam."},
  {category:"Kejadian",question:"Siapakah yang membuat bahtera atas perintah Allah?",options:["Nuh","Lot","Henokh","Yakub"],answer:0,reference:"Kejadian 6:13–22",explanation:"Nuh menaati Allah dengan membuat bahtera sesuai petunjuk-Nya."},
  {category:"Kejadian",question:"Apakah tanda perjanjian Allah dengan Nuh?",options:["Bintang","Pelangi","Api","Tiang awan"],answer:1,reference:"Kejadian 9:12–17",explanation:"Allah memberikan pelangi sebagai tanda perjanjian-Nya."},
  {category:"Kejadian",question:"Siapakah anak perjanjian Abraham dan Sara?",options:["Ismael","Ishak","Esau","Yakub"],answer:1,reference:"Kejadian 21:1–3",explanation:"Allah menepati janji-Nya melalui kelahiran Ishak."},
  {category:"Kejadian",question:"Siapakah yang dijual saudara-saudaranya ke Mesir?",options:["Yusuf","Benyamin","Ruben","Yehuda"],answer:0,reference:"Kejadian 37:28",explanation:"Yusuf dijual, tetapi Allah memakai hidupnya untuk memelihara banyak orang."},
  {category:"Keluaran",question:"Siapakah yang memimpin Israel keluar dari Mesir?",options:["Harun","Musa","Yosua","Samuel"],answer:1,reference:"Keluaran 3:10",explanation:"Allah mengutus Musa membawa Israel keluar dari perbudakan."},
  {category:"Keluaran",question:"Laut apakah yang diseberangi bangsa Israel?",options:["Laut Mati","Laut Teberau","Danau Galilea","Sungai Yordan"],answer:1,reference:"Keluaran 14:21–22",explanation:"Allah membelah Laut Teberau sehingga Israel berjalan di tanah kering."},
  {category:"Sejarah Israel",question:"Siapakah yang menggantikan Musa memimpin Israel?",options:["Kaleb","Yosua","Harun","Gideon"],answer:1,reference:"Yosua 1:1–2",explanation:"Allah menetapkan Yosua untuk memimpin Israel memasuki negeri perjanjian."},
  {category:"Sejarah Israel",question:"Dengan apakah Daud mengalahkan Goliat?",options:["Pedang","Tombak","Umban dan batu","Busur"],answer:2,reference:"1 Samuel 17:49–50",explanation:"Daud mengalahkan Goliat dengan umban dan batu sambil mengandalkan Tuhan."},
  {category:"Raja-raja",question:"Apa yang diminta Salomo kepada Allah?",options:["Kekayaan","Umur panjang","Hikmat","Kemenangan"],answer:2,reference:"1 Raja-raja 3:9–12",explanation:"Salomo meminta hati yang paham untuk memimpin umat."},
  {category:"Para Nabi",question:"Nabi siapakah yang terangkat ke surga dalam angin badai?",options:["Elia","Elisa","Yesaya","Yeremia"],answer:0,reference:"2 Raja-raja 2:11",explanation:"Elia naik ke surga dalam angin badai dengan kereta berapi."},
  {category:"Para Nabi",question:"Ke kota manakah Yunus diutus?",options:["Yerusalem","Niniwe","Betlehem","Damsyik"],answer:1,reference:"Yunus 3:1–3",explanation:"Allah mengutus Yunus ke Niniwe untuk menyerukan pertobatan."},
  {category:"Para Nabi",question:"Mengapa Daniel dilemparkan ke gua singa?",options:["Mencuri","Melarikan diri","Tetap berdoa kepada Allah","Menolak bekerja"],answer:2,reference:"Daniel 6:11–17",explanation:"Daniel tetap setia berdoa meskipun ada larangan."},
  {category:"Mazmur",question:"Menurut Mazmur 23, siapakah gembala pemazmur?",options:["Daud","Tuhan","Musa","Samuel"],answer:1,reference:"Mazmur 23:1",explanation:"Daud mengakui Tuhan sebagai Gembalanya."},
  {category:"Kelahiran Yesus",question:"Di kota manakah Yesus dilahirkan?",options:["Nazaret","Yerusalem","Betlehem","Kapernaum"],answer:2,reference:"Matius 2:1",explanation:"Yesus dilahirkan di Betlehem pada zaman Raja Herodes."},
  {category:"Kehidupan Yesus",question:"Siapakah yang membaptis Yesus?",options:["Petrus","Yohanes Pembaptis","Yakobus","Andreas"],answer:1,reference:"Matius 3:13–17",explanation:"Yohanes membaptis Yesus di Sungai Yordan."},
  {category:"Murid Yesus",question:"Berapa jumlah rasul yang dipilih Yesus?",options:["Tujuh","Sepuluh","Dua belas","Empat belas"],answer:2,reference:"Lukas 6:13",explanation:"Yesus memilih dua belas orang dan menamai mereka rasul."},
  {category:"Mukjizat Yesus",question:"Berapa roti yang dipakai Yesus untuk memberi makan lima ribu orang?",options:["Dua","Lima","Tujuh","Dua belas"],answer:1,reference:"Yohanes 6:9–13",explanation:"Seorang anak membawa lima roti dan dua ikan, lalu Yesus melipatgandakannya."},
  {category:"Perumpamaan",question:"Siapakah yang menolong orang yang dirampok dalam perumpamaan Yesus?",options:["Imam","Orang Lewi","Orang Samaria","Prajurit"],answer:2,reference:"Lukas 10:30–37",explanation:"Orang Samaria menunjukkan belas kasihan yang nyata."},
  {category:"Kehidupan Yesus",question:"Siapakah murid yang berjalan di atas air menuju Yesus?",options:["Yohanes","Petrus","Tomas","Matius"],answer:1,reference:"Matius 14:28–29",explanation:"Petrus turun dari perahu dan berjalan di atas air menuju Yesus."},
  {category:"Salib dan Kebangkitan",question:"Pada hari ke berapakah Yesus bangkit?",options:["Pertama","Kedua","Ketiga","Ketujuh"],answer:2,reference:"1 Korintus 15:3–4",explanation:"Kristus dibangkitkan pada hari ketiga sesuai Kitab Suci."},
  {category:"Gereja Mula-mula",question:"Siapakah yang berkhotbah pada hari Pentakosta?",options:["Paulus","Petrus","Barnabas","Stefanus"],answer:1,reference:"Kisah Para Rasul 2:14–41",explanation:"Petrus memberitakan Yesus dan sekitar tiga ribu orang menerima firman."},
  {category:"Rasul Paulus",question:"Apa nama Paulus sebelum dikenal sebagai Paulus?",options:["Saulus","Silas","Simon","Stefanus"],answer:0,reference:"Kisah Para Rasul 9:1–19; 13:9",explanation:"Ia dikenal sebagai Saulus dan kemudian disebut juga Paulus."},
  {category:"Buah Roh",question:"Manakah yang termasuk buah Roh?",options:["Kesombongan","Kasih","Iri hati","Kebencian"],answer:1,reference:"Galatia 5:22–23",explanation:"Kasih adalah bagian pertama dalam daftar buah Roh."},
  {category:"Iman",question:"Menurut Ibrani 11:1, iman adalah dasar dari apa?",options:["Segala kekayaan","Sesuatu yang diharapkan","Segala pengetahuan","Segala kekuatan"],answer:1,reference:"Ibrani 11:1",explanation:"Iman adalah dasar dari segala sesuatu yang diharapkan."},
  {category:"Kasih",question:"Menurut 1 Korintus 13:13, yang paling besar adalah?",options:["Iman","Pengharapan","Kasih","Pengetahuan"],answer:2,reference:"1 Korintus 13:13",explanation:"Yang paling besar di antara iman, pengharapan, dan kasih ialah kasih."},
  {category:"Kisah Para Rasul",question:"Siapakah yang dipilih menggantikan Yudas Iskariot?",options:["Silas","Matias","Barnabas","Markus"],answer:1,reference:"Kisah Para Rasul 1:23–26",explanation:"Matias terpilih dan ditambahkan kepada bilangan sebelas rasul."},
  {category:"Surat Paulus",question:"Di pasal manakah perlengkapan senjata Allah dijelaskan?",options:["Efesus 4","Efesus 5","Efesus 6","Filipi 4"],answer:2,reference:"Efesus 6:10–18",explanation:"Paulus menjelaskan perlengkapan senjata Allah dalam Efesus 6."},
  {category:"Wahyu",question:"Siapakah Alfa dan Omega menurut Wahyu?",options:["Musa","Yohanes","Tuhan Allah","Malaikat"],answer:2,reference:"Wahyu 1:8",explanation:"Tuhan Allah menyatakan diri sebagai Alfa dan Omega."}
];

const stageSlices = {
  1:[0,5], 2:[5,10], 3:[10,15], 4:[15,20], 5:[20,25],
  6:[0,10], 7:[5,15], 8:[10,20], 9:[15,25], 10:[20,30]
};

const els = {
  intro:document.querySelector("#quiz-intro"), game:document.querySelector("#quiz-game"), result:document.querySelector("#quiz-result"),
  name:document.querySelector("#player-name"), nameError:document.querySelector("#name-error"), stageButtons:[...document.querySelectorAll(".stage-card")],
  player:document.querySelector("#active-player"), activeStage:document.querySelector("#active-stage"), changeStage:document.querySelector("#change-stage"),
  count:document.querySelector("#question-count"), score:document.querySelector("#score-display"), progress:document.querySelector("#progress-bar"),
  progressBox:document.querySelector(".quiz-progress"), number:document.querySelector("#question-number"), category:document.querySelector("#question-category"),
  question:document.querySelector("#question-text"), options:document.querySelector("#answer-options"), explanation:document.querySelector("#answer-explanation"),
  status:document.querySelector("#answer-status"), detail:document.querySelector("#answer-detail"), reference:document.querySelector("#answer-reference"),
  stagePoints:document.querySelector("#stage-points"), sync:document.querySelector("#score-sync"), next:document.querySelector("#next-question"),
  resultStage:document.querySelector("#result-stage"), finalScore:document.querySelector("#final-score"), resultTitle:document.querySelector("#result-title"),
  resultMessage:document.querySelector("#result-message"), resultPlayer:document.querySelector("#result-player"),
  correctTotal:document.querySelector("#correct-total"), saveStatus:document.querySelector("#save-status"),
  chooseAnother:document.querySelector("#choose-another"), retry:document.querySelector("#retry-stage")
};

let selectedStage=1, questions=[], current=0, correct=0, answered=0, playerName="", sessionId="", locked=false;

function questionCount(){return selectedStage<=5?5:10}
function score(){return Math.round((correct/questionCount())*10)}
function makeSession(){return crypto.randomUUID?crypto.randomUUID():`quiz-${Date.now()}-${Math.random().toString(36).slice(2)}`}

async function saveProgress(){
  els.sync.textContent="Menyimpan nilai…";
  try{
    const response=await fetch(QUIZ_API,{method:"POST",headers:{"Content-Type":"text/plain;charset=UTF-8"},body:JSON.stringify({
      sessionId,playerName,selectedStage,answeredQuestions:answered,correctAnswers:correct
    }),mode:"cors",keepalive:true});
    if(!response.ok)throw new Error();
    els.sync.textContent=answered>=questionCount()?"Nilai akhir tersimpan untuk admin.":"Nilai sementara tersimpan untuk admin.";
    return true;
  }catch{
    els.sync.textContent="Nilai belum tersimpan. Pastikan internet aktif.";
    return false;
  }
}

function beginStage(stage){
  playerName=els.name.value.trim().replace(/\s+/g," ").slice(0,30);
  if(playerName.length<2){
    els.nameError.textContent="Masukkan nama panggilan minimal 2 huruf sebelum memilih tahap.";
    els.name.focus();
    return;
  }
  els.nameError.textContent="";
  selectedStage=stage;
  const [start,end]=stageSlices[stage];
  questions=bank.slice(start,end);
  current=0;correct=0;answered=0;locked=false;sessionId=makeSession();
  els.intro.hidden=true;els.result.hidden=true;els.game.hidden=false;
  els.player.textContent=playerName;els.activeStage.textContent=`Tahap ${selectedStage} · ${questionCount()} soal`;
  renderQuestion();saveProgress();
  window.eriksonTrackActivity?.("quiz_start",`${playerName} memilih Tahap ${selectedStage}`,`quiz:${sessionId}`);
  window.scrollTo({top:els.game.offsetTop-20,behavior:"smooth"});
}

function renderQuestion(){
  locked=false;
  const q=questions[current];
  els.count.textContent=`Soal ${current+1} dari ${questionCount()}`;
  els.score.textContent=`Nilai: ${score()}/10`;
  els.progress.style.width=`${((current+1)/questionCount())*100}%`;
  els.progressBox.setAttribute("aria-valuemax",String(questionCount()));
  els.progressBox.setAttribute("aria-valuenow",String(current+1));
  els.number.textContent=String(current+1).padStart(2,"0");
  els.category.textContent=q.category;els.question.textContent=q.question;
  els.options.innerHTML="";els.explanation.hidden=true;els.next.hidden=true;els.sync.textContent="";
  q.options.forEach((option,index)=>{
    const button=document.createElement("button");
    button.type="button";button.className="answer-option";
    button.innerHTML=`<span>${String.fromCharCode(65+index)}</span><strong>${option}</strong>`;
    button.addEventListener("click",()=>answer(index,button));
    els.options.appendChild(button);
  });
}

function answer(index,selected){
  if(locked)return;locked=true;
  const q=questions[current];
  const buttons=[...els.options.querySelectorAll("button")];
  buttons.forEach((button,i)=>{button.disabled=true;if(i===q.answer)button.classList.add("correct")});
  const isCorrect=index===q.answer;
  answered+=1;
  if(isCorrect)correct+=1;else selected.classList.add("wrong");
  els.stagePoints.textContent=`${score()}/10`;
  els.stagePoints.className=isCorrect?"earned":"missed";
  els.status.textContent=isCorrect?"Benar!":"Belum tepat.";
  els.status.className=isCorrect?"status-correct":"status-wrong";
  els.detail.textContent=q.explanation;els.reference.textContent=q.reference;
  els.explanation.hidden=false;els.score.textContent=`Nilai: ${score()}/10`;
  els.next.textContent=answered>=questionCount()?"Lihat Nilai Tahap →":"Soal berikutnya →";
  els.next.hidden=false;
  saveProgress();
}

function nextQuestion(){
  if(answered>=questionCount()){finish();return}
  current+=1;renderQuestion();
  window.scrollTo({top:els.game.offsetTop-20,behavior:"smooth"});
}

async function finish(){
  els.game.hidden=true;els.result.hidden=false;
  els.resultStage.textContent=`TAHAP ${selectedStage} SELESAI`;
  els.finalScore.textContent=String(score());
  els.resultPlayer.textContent=playerName;els.correctTotal.textContent=`${correct}/${questionCount()}`;
  if(score()>=9){els.resultTitle.textContent="Luar biasa!";els.resultMessage.textContent="Pemahamanmu sangat baik. Teruslah membaca dan melakukan Firman Tuhan."}
  else if(score()>=7){els.resultTitle.textContent="Bagus! Terus bertumbuh.";els.resultMessage.textContent="Pelajari kembali ayat pada jawaban yang belum tepat."}
  else{els.resultTitle.textContent="Tetap semangat belajar.";els.resultMessage.textContent="Nilai ini menjadi awal untuk mengenal Firman Tuhan lebih dalam."}
  els.saveStatus.textContent="Menyimpan…";
  els.saveStatus.textContent=await saveProgress()?"Tersimpan":"Belum tersimpan";
  window.scrollTo({top:els.result.offsetTop-20,behavior:"smooth"});
}

function backToStages(){
  els.game.hidden=true;els.result.hidden=true;els.intro.hidden=false;
  window.scrollTo({top:els.intro.offsetTop-20,behavior:"smooth"});
}
els.stageButtons.forEach(button=>button.addEventListener("click",()=>beginStage(Number(button.dataset.stage))));
els.next.addEventListener("click",nextQuestion);
els.changeStage.addEventListener("click",backToStages);
els.chooseAnother.addEventListener("click",backToStages);
els.retry.addEventListener("click",()=>beginStage(selectedStage));
