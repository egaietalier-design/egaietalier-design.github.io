(() => {
  const KEY="erikson-favorite-verses-v1";
  const list=document.querySelector("#favoritePageList"),search=document.querySelector("#favoritePageSearch"),count=document.querySelector("#favoritePageCount");
  let favorites=read();
  function read(){try{const data=JSON.parse(localStorage.getItem(KEY));return Array.isArray(data)?data:[]}catch{return[]}}
  function save(){localStorage.setItem(KEY,JSON.stringify(favorites));render()}
  function esc(value){return String(value||"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[char]))}
  function copy(text){return navigator.clipboard?.writeText(text)||Promise.reject()}
  function content(item){return item.reference+"\n"+item.verses.map(v=>v.number+". "+v.text).join("\n")+(item.note?"\n\nCatatan: "+item.note:"")}
  function render(){
    const query=search.value.trim().toLowerCase();
    const shown=favorites.filter(item=>(item.reference+" "+item.verses.map(v=>v.text).join(" ")+" "+(item.note||"")).toLowerCase().includes(query));
    count.textContent=favorites.length+" favorit";list.innerHTML="";
    if(!shown.length){list.innerHTML='<div class="community-empty"><span>♡</span><h2>'+(query?"Tidak ditemukan":"Belum ada ayat favorit")+'</h2><p>'+(query?"Coba kata pencarian lain.":"Buka Alkitab, lalu tekan ikon hati di samping ayat.")+'</p></div>';return}
    shown.forEach(item=>{
      const card=document.createElement("article");card.className="favorite-page-card color-"+(item.color||"gold");
      card.innerHTML='<div class="favorite-page-card-head"><div><small>AYAT FAVORIT</small><h2>'+esc(item.reference)+'</h2></div><button data-action="delete" aria-label="Hapus favorit">×</button></div><blockquote>'+item.verses.map(v=>"<sup>"+v.number+"</sup> "+esc(v.text)).join(" ")+'</blockquote><label>Catatan pribadi<textarea rows="4" maxlength="500" placeholder="Tulis pelajaran, doa, atau penerapan…">'+esc(item.note||"")+'</textarea></label><div class="favorite-color-row"><span>Warna</span>'+["gold","blue","rose","green"].map(color=>'<button class="color-dot '+color+(item.color===color?" active":"")+'" data-color="'+color+'" aria-label="Pilih warna '+color+'"></button>').join("")+'</div><div class="favorite-page-actions"><button data-action="open">📖 Buka Ayat</button><button data-action="copy">📋 Salin</button><button data-action="share">↗ Bagikan</button><button data-action="save">💾 Simpan Catatan</button></div>';
      card.addEventListener("click",async event=>{
        const button=event.target.closest("button");if(!button)return;
        if(button.dataset.color){item.color=button.dataset.color;save();return}
        if(button.dataset.action==="delete"&&confirm("Hapus "+item.reference+" dari favorit?")){favorites=favorites.filter(f=>f.id!==item.id);save()}
        if(button.dataset.action==="open"){location.href="alkitab.html?kitab="+encodeURIComponent(item.slug)+"&pasal="+item.chapter+"&ayat="+item.verses.map(v=>v.number).join(",")}
        if(button.dataset.action==="copy"){await copy(content(item)).catch(()=>{});button.textContent="✓ Tersalin"}
        if(button.dataset.action==="share"){if(navigator.share)await navigator.share({title:item.reference,text:content(item),url:"https://egaietalier-design.github.io/alkitab.html"});else await copy(content(item))}
        if(button.dataset.action==="save"){item.note=card.querySelector("textarea").value.trim().slice(0,500);save()}
      });
      list.appendChild(card);
    })
  }
  search.addEventListener("input",render);render();
})();