(() => {
  const CERT_KEY="erikson-certificates-v2";
  const openings=[
    "Pilih jawaban yang paling tepat:",
    "Uji ingatanmu:",
    "Perhatikan kisah Alkitab berikut:",
    "Tebak dengan teliti:",
    "Tantangan Firman untukmu:",
    "Cermati pertanyaan berikut:",
    "Jelajahi kembali isi Alkitab:",
    "Siapakah yang dapat menjawab:",
    "Petualangan Alkitab berlanjut:",
    "Buktikan pemahamanmu:"
  ];
  const question=document.querySelector("#question-text"),number=document.querySelector("#question-number"),stageText=document.querySelector("#active-stage");
  function varyQuestion(){
    if(!question||!question.textContent||/\(Tahap \d+ · Soal \d+\)$/.test(question.textContent))return;
    const stageMatch=(stageText?.textContent||"").match(/Tahap\s+(\d+)/i),stage=stageMatch?Number(stageMatch[1]):1;
    const qNumber=Number(number?.textContent||1);
    const original=question.textContent.replace(/^.+?—\s*/,"").replace(/\s*\(Tahap \d+ · Soal \d+\)$/,"");
    question.textContent=openings[(stage+qNumber-2)%openings.length]+" — "+original+" (Tahap "+stage+" · Soal "+qNumber+")";
  }
  if(question){
    new MutationObserver(varyQuestion).observe(question,{childList:true,characterData:true,subtree:true});
    const originalSetter=Object.getOwnPropertyDescriptor(Node.prototype,"textContent");
    if(originalSetter)varyQuestion();
  }
  const result=document.querySelector("#quiz-result"),link=document.querySelector("#download-certificate");
  function saveCertificate(){
    if(!result||result.hidden||result.dataset.certificateSaved==="yes")return;
    const player=document.querySelector("#result-player")?.textContent.trim()||"Pemain Kuis";
    const score=Number(document.querySelector("#final-score")?.textContent||0);
    const stageMatch=(document.querySelector("#result-stage")?.textContent||"").match(/TAHAP\s+(\d+)/i);
    const totalText=document.querySelector("#correct-total")?.textContent||"0/0",parts=totalText.split("/");
    const id="cert-"+Date.now()+"-"+Math.random().toString(36).slice(2,9);
    const certificate={id,playerName:player,stage:stageMatch?Number(stageMatch[1]):1,score,correct:Number(parts[0]),total:Number(parts[1]),mode:(document.querySelector("#result-stage")?.textContent||"").includes("SEKOLAH MINGGU")?"Sekolah Minggu":"Kuis Alkitab Umum",completedAt:new Date().toISOString()};
    let records=[];try{records=JSON.parse(localStorage.getItem(CERT_KEY)||"[]")}catch(_){}
    if(!Array.isArray(records))records=[];records.push(certificate);
    localStorage.setItem(CERT_KEY,JSON.stringify(records.slice(-100)));
    localStorage.setItem("erikson-last-certificate",JSON.stringify(certificate));
    if(link)link.href="sertifikat.html?id="+encodeURIComponent(id);
    result.dataset.certificateSaved="yes";
  }
  if(result)new MutationObserver(()=>{if(result.hidden){result.dataset.certificateSaved=""}else saveCertificate()}).observe(result,{attributes:true,attributeFilter:["hidden"]});
})();