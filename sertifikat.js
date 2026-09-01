(() => {
  const KEY="erikson-certificates-v2";
  const app=document.querySelector("#certificateApp"),empty=document.querySelector("#emptyCertificate"),canvas=document.querySelector("#certificateCanvas"),ctx=canvas.getContext("2d");
  const fields={name:document.querySelector("#certName"),title:document.querySelector("#certTitle"),message:document.querySelector("#certMessage"),signer:document.querySelector("#certSigner")};
  const params=new URLSearchParams(location.search),id=params.get("id");
  let records=[];try{records=JSON.parse(localStorage.getItem(KEY)||"[]")}catch(_){}
  if(!Array.isArray(records))records=[];
  let item=(id&&records.find(x=>x.id===id))||records[records.length-1];
  if(!item){empty.hidden=false;return}
  app.hidden=false;fields.name.value=item.playerName||"Pemain Kuis";
  document.querySelector("#stageMeta").textContent="Tahap "+item.stage;
  document.querySelector("#scoreMeta").textContent="Nilai "+item.score+"/100";
  const date=new Date(item.completedAt||Date.now());
  document.querySelector("#dateMeta").textContent=date.toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"});

  function fitText(text,maxWidth,start,min){
    let size=start;ctx.font="700 "+size+"px Georgia";
    while(ctx.measureText(text).width>maxWidth&&size>min){size-=2;ctx.font="700 "+size+"px Georgia"}
    return size;
  }
  function wrap(text,x,y,maxWidth,lineHeight,maxLines){
    const words=String(text).split(/\s+/);let line="",lines=[];
    words.forEach(word=>{const test=line?line+" "+word:word;if(ctx.measureText(test).width>maxWidth&&line){lines.push(line);line=word}else line=test});
    if(line)lines.push(line);lines.slice(0,maxLines).forEach((line,i)=>ctx.fillText(line,x,y+i*lineHeight));
  }
  function draw(){
    const w=canvas.width,h=canvas.height;ctx.clearRect(0,0,w,h);
    const g=ctx.createLinearGradient(0,0,w,h);g.addColorStop(0,"#061322");g.addColorStop(.55,"#0b3154");g.addColorStop(1,"#07111f");ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
    ctx.strokeStyle="#e0b14d";ctx.lineWidth=8;ctx.strokeRect(35,35,w-70,h-70);ctx.lineWidth=2;ctx.strokeRect(55,55,w-110,h-110);
    ctx.fillStyle="#e0b14d";ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(330,0);ctx.lineTo(0,250);ctx.fill();ctx.beginPath();ctx.moveTo(w,h);ctx.lineTo(w-330,h);ctx.lineTo(w,h-250);ctx.fill();
    ctx.textAlign="center";ctx.fillStyle="#f1cb70";ctx.font="700 25px Arial";ctx.letterSpacing="8px";ctx.fillText("ERIKSON BIBLE STUDIO",w/2,135);ctx.letterSpacing="0px";
    ctx.fillStyle="#fff";ctx.font="700 54px Georgia";wrap(fields.title.value||"Sertifikat Penyelesaian Kuis Alkitab",w/2,225,1250,65,2);
    ctx.fillStyle="#c9d8e5";ctx.font="24px Arial";ctx.fillText("Diberikan dengan sukacita kepada",w/2,350);
    const name=fields.name.value.trim()||"Pemain Kuis";const size=fitText(name,1250,88,48);ctx.fillStyle="#f2cd76";ctx.font="700 "+size+"px Georgia";ctx.fillText(name,w/2,455);
    ctx.strokeStyle="#d6a843";ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(260,490);ctx.lineTo(w-260,490);ctx.stroke();
    ctx.fillStyle="#e8f0f6";ctx.font="28px Arial";wrap(fields.message.value,w/2,565,1180,42,3);
    ctx.fillStyle="#fff";ctx.font="700 38px Arial";ctx.fillText("TAHAP "+item.stage+"   •   NILAI "+item.score+"/100",w/2,755);
    ctx.fillStyle="#a9bdd0";ctx.font="23px Arial";ctx.fillText((item.mode||"Kuis Alkitab")+"  •  "+date.toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"}),w/2,810);
    ctx.strokeStyle="#f1cb70";ctx.beginPath();ctx.moveTo(570,955);ctx.lineTo(1030,955);ctx.stroke();
    ctx.fillStyle="#fff";ctx.font="700 28px Georgia";ctx.fillText(fields.signer.value||"Erikson Giawa",w/2,1000);ctx.fillStyle="#a9bdd0";ctx.font="20px Arial";ctx.fillText("Admin Erikson Bible Studio",w/2,1035);
  }
  Object.values(fields).forEach(field=>field.addEventListener("input",draw));draw();
  document.querySelector("#downloadCertificate").addEventListener("click",()=>{
    draw();canvas.toBlob(blob=>{if(!blob)return;const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="Sertifikat-"+(fields.name.value||"Pemain").trim().replace(/[^a-z0-9]+/gi,"-")+".png";a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)},"image/png");
  });
  document.querySelector("#printCertificate").addEventListener("click",()=>{draw();const win=open("","_blank");if(!win)return;const image=canvas.toDataURL("image/png");win.document.write('<title>Sertifikat '+fields.name.value+'</title><style>body{margin:0;display:grid;place-items:center;min-height:100vh}img{width:100%;max-width:1100px}@media print{@page{size:landscape;margin:0}img{max-width:none}}</style><img src="'+image+'">');win.document.close();win.onload=()=>win.print()});
})();