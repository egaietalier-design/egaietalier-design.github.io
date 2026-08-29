const bibleQuestions = [
  {category:"Perjanjian Lama",question:"Siapakah manusia pertama yang diciptakan Tuhan?",options:["Nuh","Adam","Abraham","Musa"],answer:1,reference:"Kejadian 2:7",explanation:"Tuhan membentuk Adam dari debu tanah dan menghembuskan napas hidup ke dalam hidungnya."},
  {category:"Perjanjian Lama",question:"Siapakah anak yang dijanjikan Tuhan kepada Abraham dan Sara?",options:["Ismael","Yakub","Ishak","Yusuf"],answer:2,reference:"Kejadian 21:1–3",explanation:"Tuhan menepati janji-Nya kepada Abraham dan Sara melalui kelahiran Ishak."},
  {category:"Perjanjian Lama",question:"Siapakah yang dijual oleh saudara-saudaranya dan kemudian dibawa ke Mesir?",options:["Yusuf","Yosua","Samuel","Simson"],answer:0,reference:"Kejadian 37:28",explanation:"Saudara-saudara Yusuf menjualnya kepada pedagang Midian, tetapi Tuhan kemudian memakai hidupnya untuk menyelamatkan banyak orang."},
  {category:"Perjanjian Lama",question:"Siapakah yang memimpin bangsa Israel menyeberangi Laut Teberau?",options:["Harun","Daud","Musa","Elia"],answer:2,reference:"Keluaran 14:21–22",explanation:"Tuhan memakai Musa dan membelah laut sehingga bangsa Israel dapat berjalan di tempat yang kering."},
  {category:"Perjanjian Lama",question:"Dengan apakah Daud mengalahkan Goliat?",options:["Pedang dan perisai","Tombak","Busur panah","Umban dan batu"],answer:3,reference:"1 Samuel 17:49–50",explanation:"Daud percaya kepada Tuhan dan mengalahkan Goliat menggunakan umban dan sebuah batu."},
  {category:"Perjanjian Lama",question:"Apa yang diminta Salomo ketika Tuhan menyuruhnya meminta sesuatu?",options:["Kekayaan","Hikmat","Kemenangan perang","Umur panjang"],answer:1,reference:"1 Raja-raja 3:9–12",explanation:"Salomo meminta hati yang penuh pengertian untuk memimpin umat, dan permintaan itu berkenan kepada Tuhan."},
  {category:"Perjanjian Lama",question:"Ke kota manakah Yunus diutus untuk menyampaikan peringatan Tuhan?",options:["Yerusalem","Betlehem","Niniwe","Nazaret"],answer:2,reference:"Yunus 3:1–3",explanation:"Tuhan mengutus Yunus ke Niniwe agar penduduknya bertobat dari kejahatan mereka."},
  {category:"Perjanjian Lama",question:"Mengapa Daniel dilemparkan ke gua singa?",options:["Karena mencuri","Karena tetap berdoa kepada Tuhan","Karena melarikan diri","Karena menolak bekerja"],answer:1,reference:"Daniel 6:11–17",explanation:"Daniel tetap setia berdoa kepada Tuhan meskipun ada larangan. Tuhan kemudian melindunginya dari singa."},
  {category:"Kehidupan Yesus",question:"Di kota manakah Yesus dilahirkan?",options:["Nazaret","Yerusalem","Betlehem","Kapernaum"],answer:2,reference:"Matius 2:1",explanation:"Yesus dilahirkan di Betlehem pada zaman pemerintahan Raja Herodes."},
  {category:"Kehidupan Yesus",question:"Siapakah yang membaptis Yesus di Sungai Yordan?",options:["Petrus","Yohanes Pembaptis","Yakobus","Andreas"],answer:1,reference:"Matius 3:13–17",explanation:"Yohanes membaptis Yesus, lalu Roh Allah turun seperti burung merpati dan suara Bapa terdengar dari surga."},
  {category:"Kehidupan Yesus",question:"Berapa orang murid yang dipilih Yesus sebagai rasul?",options:["7 orang","10 orang","12 orang","40 orang"],answer:2,reference:"Matius 10:1–4",explanation:"Yesus memilih dua belas murid dan memberi mereka kuasa untuk melayani."},
  {category:"Ajaran Yesus",question:"Apa pesan utama perumpamaan Orang Samaria yang baik hati?",options:["Membalas kejahatan","Mengasihi sesama melalui tindakan nyata","Mengumpulkan kekayaan","Menghindari orang asing"],answer:1,reference:"Lukas 10:25–37",explanation:"Yesus mengajarkan bahwa kasih kepada sesama harus diwujudkan dengan belas kasihan dan pertolongan nyata."},
  {category:"Ajaran Yesus",question:"Apakah hukum yang terutama menurut Yesus?",options:["Mengasihi Allah dan sesama","Menjadi orang terkaya","Tidak pernah mengalami masalah","Menguasai banyak bahasa"],answer:0,reference:"Matius 22:37–39",explanation:"Yesus mengajarkan untuk mengasihi Tuhan dengan segenap hidup dan mengasihi sesama seperti diri sendiri."},
  {category:"Mukjizat Yesus",question:"Berapa roti dan ikan yang digunakan Yesus untuk memberi makan lima ribu orang?",options:["Tujuh roti dan satu ikan","Lima roti dan dua ikan","Dua roti dan lima ikan","Dua belas roti dan dua ikan"],answer:1,reference:"Yohanes 6:9–13",explanation:"Seorang anak membawa lima roti jelai dan dua ikan. Yesus mengucap syukur lalu melipatgandakannya."},
  {category:"Kehidupan Yesus",question:"Siapakah murid yang berjalan di atas air menuju Yesus?",options:["Yohanes","Tomas","Petrus","Matius"],answer:2,reference:"Matius 14:28–29",explanation:"Petrus keluar dari perahu dan berjalan di atas air ketika Yesus memanggilnya."},
  {category:"Injil",question:"Pada hari keberapakah Yesus bangkit dari kematian?",options:["Hari pertama","Hari kedua","Hari ketiga","Hari ketujuh"],answer:2,reference:"1 Korintus 15:3–4",explanation:"Kristus mati karena dosa-dosa kita, dikuburkan, dan dibangkitkan pada hari yang ketiga sesuai Kitab Suci."},
  {category:"Amanat Yesus",question:"Apa yang diperintahkan Yesus dalam Amanat Agung?",options:["Mendirikan kerajaan dunia","Pergi dan menjadikan semua bangsa murid-Nya","Mengumpulkan harta","Menjauhi semua orang"],answer:1,reference:"Matius 28:19–20",explanation:"Yesus mengutus murid-murid untuk menjadikan semua bangsa murid-Nya, membaptis, dan mengajar mereka."},
  {category:"Kehidupan Kristen",question:"Manakah yang termasuk buah Roh?",options:["Iri hati","Kesombongan","Kasih, sukacita, dan damai sejahtera","Kemarahan"],answer:2,reference:"Galatia 5:22–23",explanation:"Buah Roh mencakup kasih, sukacita, damai sejahtera, kesabaran, kemurahan, kebaikan, kesetiaan, kelemahlembutan, dan penguasaan diri."},
  {category:"Kisah Para Rasul",question:"Siapakah nama Paulus sebelum ia dikenal sebagai Paulus?",options:["Saulus","Stefanus","Silas","Barnabas"],answer:0,reference:"Kisah Para Rasul 9:1–6",explanation:"Saulus dahulu menganiaya pengikut Yesus, tetapi hidupnya diubahkan setelah berjumpa dengan Kristus."},
  {category:"Kisah Para Rasul",question:"Siapakah yang berdoa dan menyanyikan pujian ketika berada di penjara?",options:["Petrus dan Yohanes","Paulus dan Silas","Barnabas dan Markus","Filipus dan Stefanus"],answer:1,reference:"Kisah Para Rasul 16:25–26",explanation:"Paulus dan Silas tetap memuji Tuhan di tengah penderitaan, lalu terjadi gempa bumi yang membuka pintu-pintu penjara."}
];

const essayQuestions = [
  {category:"Kehidupan Kristen",question:"Jelaskan mengapa mengasihi Allah dan mengasihi sesama tidak dapat dipisahkan.",reference:"Matius 22:37–39",explanation:"Kasih kepada Allah harus terlihat melalui cara kita memperlakukan sesama. Yesus menempatkan kedua perintah ini sebagai dasar seluruh hukum: mengasihi Tuhan dengan segenap hidup dan mengasihi sesama seperti diri sendiri."},
  {category:"Perjanjian Lama",question:"Apa yang dapat dipelajari dari kehidupan Yusuf tentang rencana Allah dan pengampunan?",reference:"Kejadian 50:20",explanation:"Yusuf mengalami ketidakadilan, tetapi Allah memakai peristiwa itu untuk menyelamatkan banyak orang. Yusuf memilih mengampuni saudara-saudaranya dan mengakui bahwa Allah sanggup mengubah maksud jahat menjadi kebaikan."},
  {category:"Kehidupan Kristen",question:"Apa arti pernyataan bahwa iman tanpa perbuatan adalah mati?",reference:"Yakobus 2:17",explanation:"Iman yang sejati bukan hanya pengakuan melalui kata-kata. Iman menghasilkan tindakan nyata seperti kasih, ketaatan, kepedulian, dan pertolongan kepada sesama. Perbuatan bukan cara membeli keselamatan, tetapi buah dari iman."},
  {category:"Ajaran Yesus",question:"Mengapa Yesus memakai orang Samaria sebagai teladan dalam perumpamaan tentang sesama?",reference:"Lukas 10:25–37",explanation:"Yesus menantang batas suku, status, dan prasangka. Sesama adalah orang yang membutuhkan belas kasihan kita. Kasih yang benar diwujudkan melalui tindakan menolong, bukan hanya mengetahui hukum."},
  {category:"Ajaran Yesus",question:"Apa makna orang percaya disebut garam dunia dan terang dunia?",reference:"Matius 5:13–16",explanation:"Garam menggambarkan pengaruh yang menjaga dan memberi rasa, sedangkan terang membuat kebenaran terlihat. Orang percaya dipanggil menghadirkan kebaikan dan memuliakan Allah melalui kehidupan nyata."},
  {category:"Doa",question:"Bagaimana doa menolong orang percaya menghadapi kekhawatiran?",reference:"Filipi 4:6–7",explanation:"Orang percaya diajar membawa permohonan kepada Allah dengan ucapan syukur. Doa tidak selalu langsung mengubah keadaan, tetapi damai sejahtera Allah memelihara hati dan pikiran dalam Kristus."},
  {category:"Kehidupan Kristen",question:"Sebutkan buah Roh dan jelaskan salah satu penerapannya dalam kehidupan sehari-hari.",reference:"Galatia 5:22–23",explanation:"Buah Roh ialah kasih, sukacita, damai sejahtera, kesabaran, kemurahan, kebaikan, kesetiaan, kelemahlembutan, dan penguasaan diri. Contohnya, penguasaan diri menolong seseorang tidak membalas perkataan kasar dengan kemarahan."},
  {category:"Amanat Yesus",question:"Apa tanggung jawab orang percaya berdasarkan Amanat Agung?",reference:"Matius 28:19–20",explanation:"Orang percaya dipanggil pergi, menjadikan semua bangsa murid Kristus, membaptis, dan mengajar mereka melakukan perintah Yesus. Misi mencakup pemberitaan Injil dan pendampingan agar orang bertumbuh sebagai murid."},
  {category:"Pertobatan",question:"Bagaimana kisah Zakheus menunjukkan pertobatan yang nyata?",reference:"Lukas 19:1–10",explanation:"Pertemuan dengan Yesus mengubah sikap Zakheus terhadap harta dan sesama. Ia bersedia memberi kepada orang miskin dan mengganti kerugian orang yang pernah diperasnya. Pertobatan terlihat melalui perubahan arah hidup."},
  {category:"Kehidupan Yesus",question:"Apa pelajaran dari pengalaman Petrus berjalan di atas air lalu mulai tenggelam?",reference:"Matius 14:28–31",explanation:"Petrus berani melangkah karena percaya kepada perkataan Yesus, tetapi menjadi takut ketika memusatkan perhatian pada angin. Kisah ini mengajarkan iman, keterbatasan manusia, dan kesediaan Yesus menolong ketika kita berseru."},
  {category:"Keselamatan",question:"Jelaskan arti keselamatan oleh kasih karunia melalui iman.",reference:"Efesus 2:8–10",explanation:"Keselamatan adalah pemberian Allah, bukan hasil usaha manusia untuk membanggakan diri. Kita menerimanya melalui iman kepada Kristus, lalu dipanggil menjalani kehidupan baru dan melakukan pekerjaan baik yang Allah kehendaki."},
  {category:"Ketaatan",question:"Apa perbedaan orang bijaksana dan orang bodoh dalam perumpamaan dua macam dasar?",reference:"Matius 7:24–27",explanation:"Keduanya mendengar perkataan Yesus, tetapi hanya orang bijaksana yang melakukannya. Ketaatan menjadi fondasi yang kokoh ketika hidup menghadapi kesulitan, sedangkan mendengar tanpa melakukan menghasilkan dasar yang rapuh."}
];

const intro=document.getElementById("quiz-intro");
const game=document.getElementById("quiz-game");
const result=document.getElementById("quiz-result");
const startButton=document.getElementById("start-quiz");
const playAgain=document.getElementById("play-again");
const nextButton=document.getElementById("next-question");
const optionBox=document.getElementById("answer-options");
const essayArea=document.getElementById("essay-area");
const essayAnswer=document.getElementById("essay-answer");
const revealAnswer=document.getElementById("reveal-answer");
const explanation=document.getElementById("answer-explanation");
const selfAssessment=document.getElementById("self-assessment");
let selectedMode="choice";
let round=[];
let current=0;
let score=0;
let answered=false;

const shuffle=(items)=>[...items].sort(()=>Math.random()-.5);

document.querySelectorAll(".quiz-mode").forEach((button)=>{
  button.addEventListener("click",()=>{
    selectedMode=button.dataset.mode;
    document.querySelectorAll(".quiz-mode").forEach((item)=>{
      const active=item===button;
      item.classList.toggle("active",active);
      item.setAttribute("aria-pressed",String(active));
    });
    const essay=selectedMode==="essay";
    document.getElementById("mode-description").textContent=essay
      ?"Tuliskan jawaban untuk 5 soal acak, lalu bandingkan dengan contoh jawaban dan ayat."
      :"Jawab 10 pertanyaan pilihan ganda dan dapatkan skor otomatis.";
    startButton.textContent=essay?"Mulai kuis esai":"Mulai pilihan ganda";
  });
});

function startGame(){
  selfAssessment.querySelectorAll("button").forEach((item)=>{
    item.disabled=false;
    delete item.dataset.scored;
    item.classList.remove("selected");
  });
  round=shuffle(selectedMode==="essay"?essayQuestions:bibleQuestions).slice(0,selectedMode==="essay"?5:10);
  current=0;
  score=0;
  answered=false;
  intro.hidden=true;
  result.hidden=true;
  game.hidden=false;
  renderQuestion();
  window.scrollTo({top:0,behavior:"smooth"});
}

function renderQuestion(){
  answered=false;
  explanation.hidden=true;
  selfAssessment.hidden=true;
  nextButton.hidden=true;
  const item=round[current];
  const total=round.length;
  document.getElementById("question-count").textContent=`Pertanyaan ${current+1} dari ${total}`;
  document.getElementById("score-display").textContent=`Skor: ${score}`;
  document.getElementById("question-category").textContent=item.category;
  document.getElementById("question-text").textContent=item.question;
  const progress=document.querySelector(".quiz-progress");
  progress.setAttribute("aria-valuemax",String(total));
  progress.setAttribute("aria-valuenow",String(current+1));
  document.getElementById("progress-bar").style.width=`${((current+1)/total)*100}%`;
  optionBox.innerHTML="";

  if(selectedMode==="essay"){
    optionBox.hidden=true;
    essayArea.hidden=false;
    essayAnswer.value="";
    essayAnswer.disabled=false;
    revealAnswer.disabled=false;
  }else{
    optionBox.hidden=false;
    essayArea.hidden=true;
    item.options.forEach((option,index)=>{
      const button=document.createElement("button");
      button.type="button";
      button.className="answer-option";
      button.innerHTML=`<span>${String.fromCharCode(65+index)}</span><strong></strong>`;
      button.querySelector("strong").textContent=option;
      button.addEventListener("click",()=>selectAnswer(index));
      optionBox.appendChild(button);
    });
  }
}

function selectAnswer(selected){
  if(answered)return;
  answered=true;
  const item=round[current];
  const buttons=[...optionBox.querySelectorAll(".answer-option")];
  buttons.forEach((button,index)=>{
    button.disabled=true;
    if(index===item.answer)button.classList.add("correct");
    if(index===selected&&selected!==item.answer)button.classList.add("wrong");
  });
  const correct=selected===item.answer;
  if(correct)score+=10;
  document.getElementById("score-display").textContent=`Skor: ${score}`;
  showExplanation(correct?"Benar!":"Belum tepat.",correct);
  nextButton.textContent=current===round.length-1?"Lihat hasil":"Pertanyaan berikutnya";
  nextButton.hidden=false;
}

function showExplanation(status,correct){
  const item=round[current];
  const statusElement=document.getElementById("answer-status");
  statusElement.textContent=status;
  statusElement.className=correct?"status-correct":"status-wrong";
  document.getElementById("answer-detail").textContent=item.explanation;
  document.getElementById("answer-reference").textContent=item.reference;
  explanation.hidden=false;
}

revealAnswer.addEventListener("click",()=>{
  const response=essayAnswer.value.trim();
  if(response.length<10){
    essayAnswer.focus();
    document.getElementById("answer-status").textContent="Tuliskan jawabanmu terlebih dahulu.";
    document.getElementById("answer-status").className="status-wrong";
    document.getElementById("answer-detail").textContent="Gunakan bahasamu sendiri, minimal satu kalimat.";
    document.getElementById("answer-reference").textContent="";
    explanation.hidden=false;
    return;
  }
  answered=true;
  essayAnswer.disabled=true;
  revealAnswer.disabled=true;
  showExplanation("Contoh jawaban dan dasar Alkitab",true);
  selfAssessment.hidden=false;
});

selfAssessment.querySelectorAll("button").forEach((button)=>{
  button.addEventListener("click",()=>{
    if(button.dataset.scored==="true")return;
    selfAssessment.querySelectorAll("button").forEach((item)=>{
      item.disabled=true;
      item.dataset.scored="true";
    });
    if(button.dataset.understood==="yes")score+=20;
    document.getElementById("score-display").textContent=`Skor: ${score}`;
    button.classList.add("selected");
    nextButton.textContent=current===round.length-1?"Lihat hasil":"Pertanyaan berikutnya";
    nextButton.hidden=false;
  });
});

function showResult(){
  game.hidden=true;
  result.hidden=false;
  const essay=selectedMode==="essay";
  const understood=essay?score/20:score/10;
  const total=essay?5:10;
  let title="Terus bertumbuh dalam Firman!";
  let message=essay
    ?`Kamu menilai ${understood} dari ${total} jawaban sudah dipahami. Pelajari kembali ayat yang masih sulit dan coba permainan baru.`
    :`Kamu menjawab ${understood} dari ${total} pertanyaan dengan benar. Baca kembali penjelasan ayat dan teruslah belajar.`;
  if(score>=90){title="Luar biasa!";message=essay?`Kamu memahami ${understood} dari ${total} pembahasan. Teruslah menggali Firman dan menerapkannya.`:`Kamu menjawab ${understood} dari ${total} pertanyaan dengan benar. Pemahaman Alkitabmu sangat baik.`;}
  else if(score>=70){title="Bagus sekali!";}
  else if(score>=50){title="Usaha yang baik!";}
  document.getElementById("final-score").textContent=`${score}/100`;
  document.getElementById("result-title").textContent=title;
  document.getElementById("result-message").textContent=message;
  const key=essay?"eriksonEssayBest":"eriksonQuizBest";
  const previous=Number(localStorage.getItem(key)||0);
  const best=Math.max(previous,score);
  localStorage.setItem(key,String(best));
  document.getElementById("best-score").textContent=`${best}/100`;
  window.scrollTo({top:0,behavior:"smooth"});
}

nextButton.addEventListener("click",()=>{
  current+=1;
  if(current>=round.length)showResult();
  else{
    selfAssessment.querySelectorAll("button").forEach((item)=>{
      item.disabled=false;
      delete item.dataset.scored;
      item.classList.remove("selected");
    });
    renderQuestion();
  }
});
startButton.addEventListener("click",startGame);
playAgain.addEventListener("click",startGame);
