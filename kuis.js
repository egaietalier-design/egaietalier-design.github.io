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

const intro=document.getElementById("quiz-intro");
const game=document.getElementById("quiz-game");
const result=document.getElementById("quiz-result");
const startButton=document.getElementById("start-quiz");
const playAgain=document.getElementById("play-again");
const nextButton=document.getElementById("next-question");
const optionBox=document.getElementById("answer-options");
const explanation=document.getElementById("answer-explanation");
let round=[];
let current=0;
let score=0;
let answered=false;

const shuffle=(items)=>[...items].sort(()=>Math.random()-.5);

function startGame(){
  round=shuffle(bibleQuestions).slice(0,10);
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
  nextButton.hidden=true;
  const item=round[current];
  document.getElementById("question-count").textContent=`Pertanyaan ${current+1} dari 10`;
  document.getElementById("score-display").textContent=`Skor: ${score}`;
  document.getElementById("question-category").textContent=item.category;
  document.getElementById("question-text").textContent=item.question;
  const progress=document.querySelector(".quiz-progress");
  progress.setAttribute("aria-valuenow",String(current+1));
  document.getElementById("progress-bar").style.width=`${(current+1)*10}%`;
  optionBox.innerHTML="";
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
  document.getElementById("answer-status").textContent=correct?"Benar!":"Belum tepat.";
  document.getElementById("answer-status").className=correct?"status-correct":"status-wrong";
  document.getElementById("answer-detail").textContent=item.explanation;
  document.getElementById("answer-reference").textContent=item.reference;
  explanation.hidden=false;
  nextButton.textContent=current===round.length-1?"Lihat hasil":"Pertanyaan berikutnya";
  nextButton.hidden=false;
}

function showResult(){
  game.hidden=true;
  result.hidden=false;
  const correct=score/10;
  let title="Terus bertumbuh dalam Firman!";
  let message=`Kamu menjawab ${correct} dari 10 pertanyaan dengan benar. Baca kembali penjelasan ayat dan teruslah belajar.`;
  if(score>=90){title="Luar biasa!";message=`Kamu menjawab ${correct} dari 10 pertanyaan dengan benar. Pemahaman Alkitabmu sangat baik—teruslah membaca dan melakukan Firman Tuhan.`;}
  else if(score>=70){title="Bagus sekali!";message=`Kamu menjawab ${correct} dari 10 pertanyaan dengan benar. Terus belajar agar Firman Tuhan semakin bertumbuh dalam hidupmu.`;}
  else if(score>=50){title="Usaha yang baik!";}
  document.getElementById("final-score").textContent=`${correct}/10`;
  document.getElementById("result-title").textContent=title;
  document.getElementById("result-message").textContent=message;
  const previous=Number(localStorage.getItem("eriksonQuizBest")||0);
  const best=Math.max(previous,score);
  localStorage.setItem("eriksonQuizBest",String(best));
  document.getElementById("best-score").textContent=`${best/10}/10`;
  window.scrollTo({top:0,behavior:"smooth"});
}

nextButton.addEventListener("click",()=>{
  current+=1;
  if(current>=round.length)showResult();
  else renderQuestion();
});
startButton.addEventListener("click",startGame);
playAgain.addEventListener("click",startGame);
