(() => {
  if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("service-worker.js").catch(()=>{}));
  let promptEvent=null;const buttons=[...document.querySelectorAll("[data-install-app]")],status=document.querySelector("#installStatus");
  window.addEventListener("beforeinstallprompt",event=>{event.preventDefault();promptEvent=event;buttons.forEach(button=>button.hidden=false);if(status)status.textContent="Aplikasi siap dipasang pada perangkat ini."});
  buttons.forEach(button=>button.addEventListener("click",async()=>{if(promptEvent){promptEvent.prompt();await promptEvent.userChoice;promptEvent=null;button.hidden=true;if(status)status.textContent="Terima kasih. Erikson Bible Studio sudah dipasang atau pemasangan dibatalkan."}else if(status){status.textContent="Buka menu browser, lalu pilih “Tambahkan ke layar utama” atau “Instal aplikasi”."}}));
  window.addEventListener("appinstalled",()=>{buttons.forEach(button=>button.hidden=true);if(status)status.textContent="Erikson Bible Studio sudah terpasang."});
})();