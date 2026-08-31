(() => {
  const API="https://erikson-atelier-admin.egaietalier.chatgpt.site/api";
  const esc=value=>String(value||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
  const details=value=>{try{return JSON.parse(value||"{}")}catch{return{}}};
  document.querySelectorAll("[data-community-form]").forEach(form=>form.addEventListener("submit",async event=>{
    event.preventDefault();const status=form.querySelector(".form-status"),data=new FormData(form);
    status.textContent="Mengirim…";form.querySelector("button").disabled=true;
    const payload={type:form.dataset.communityForm,author:data.get("author"),content:data.get("content"),website:data.get("website"),allowPublicName:data.get("allowPublicName")==="on"};
    try{const response=await fetch(API+"/community",{method:"POST",headers:{"Content-Type":"text/plain;charset=UTF-8"},body:JSON.stringify(payload)});const result=await response.json();if(!response.ok)throw new Error(result.error||"Kiriman belum dapat dikirim.");status.textContent="✓ "+result.message;form.reset()}catch(error){status.textContent=error.message||"Kiriman belum dapat dikirim."}finally{form.querySelector("button").disabled=false}
  }));
  async function loadType(type,selector,render){
    const box=document.querySelector(selector);
    try{const response=await fetch(API+"/community?type="+type,{cache:"no-store"});if(!response.ok)throw new Error();const data=await response.json();box.innerHTML=data.items.length?data.items.map(render).join(""):'<div class="community-empty compact"><span>✦</span><h3>Belum ada konten</h3><p>Admin akan memperbaruinya segera.</p></div>'}catch{box.innerHTML='<div class="community-empty compact"><p>Konten belum dapat dimuat. Coba kembali nanti.</p></div>'}
  }
  loadType("schedule","#scheduleList",item=>{const d=details(item.details);return '<article><span>📅</span><div><small>'+esc(d.schedule||"Jadwal pelayanan")+'</small><h3>'+esc(item.title)+'</h3><p>'+esc(item.content)+'</p></div></article>'});
  loadType("sermon","#sermonCollection",item=>{const d=details(item.details);return '<article><span>🎙️</span><small>'+esc(d.reference||"Bahan khotbah")+'</small><h3>'+esc(item.title)+'</h3><p>'+esc(item.content)+'</p><button data-copy-sermon="'+encodeURIComponent(item.title+"\n"+item.content)+'">📋 Salin Ringkasan</button></article>'});
  loadType("testimony","#testimonyList",item=>{const d=details(item.details);const name=d.allowPublicName?item.author:"Anonim";return '<blockquote><p>“'+esc(item.content)+'”</p><cite>— '+esc(name)+'</cite></blockquote>'});
  loadType("sunday","#sundayMaterials",item=>{const d=details(item.details);return '<article><span>🌈</span><h3>'+esc(item.title)+'</h3><p>'+esc(d.reference?d.reference+" · ":"")+esc(item.content)+'</p></article>'});
  document.addEventListener("click",event=>{const button=event.target.closest("[data-copy-sermon]");if(button){navigator.clipboard?.writeText(decodeURIComponent(button.dataset.copySermon));button.textContent="✓ Tersalin"}});
  fetch(API+"/leaderboard",{cache:"no-store"}).then(r=>r.json()).then(data=>{
    const box=document.querySelector("#leaderboardList");box.innerHTML=data.leaders?.length?data.leaders.map((leader,index)=>'<div><span>'+(index<3?["🥇","🥈","🥉"][index]:index+1)+'</span><strong>'+esc(leader.playerName)+'</strong><small>Tahap '+leader.selectedStage+' · '+esc(leader.mode)+'</small><b>'+leader.score+'/10</b></div>').join(""):'<div class="community-empty compact"><p>Belum ada nilai selesai.</p></div>'
  }).catch(()=>document.querySelector("#leaderboardList").innerHTML='<div class="community-empty compact"><p>Peringkat belum dapat dimuat.</p></div>');
  try{
    const certificate=JSON.parse(localStorage.getItem("erikson-last-certificate"));
    if(certificate?.playerName){document.querySelector("#certificateName").textContent=certificate.playerName;document.querySelector("#certificateDetail").textContent="Telah menyelesaikan "+certificate.mode+" Tahap "+certificate.stage+" dengan nilai "+certificate.score+"/10.";document.querySelector("#printCertificate").hidden=false;document.querySelector("#certificateQuizLink").textContent="Main Lagi"}
  }catch{}
  document.querySelector("#printCertificate").addEventListener("click",()=>window.print());
})();