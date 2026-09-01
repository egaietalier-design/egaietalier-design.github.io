(() => {
  const ICON = "assets/bible-studio-icon-512.png";
  const DISMISS_KEY = "erikson-install-dismissed-until";
  let promptEvent = null;\n  const standaloneLaunch = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;\n  const homePath = location.pathname === "/" || location.pathname.endsWith("/index.html");\n  if (standaloneLaunch && homePath) {\n    location.replace("alkitab.html?source=pwa");\n    return;\n  }\n
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => navigator.serviceWorker.register("service-worker.js").catch(() => {}));
  }

  const isInstalled = () =>
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;

  function instructions() {
    const ua = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(ua)) {
      return {
        title: "Instal di iPhone atau iPad",
        text: "Buka tombol Bagikan di Safari, lalu pilih “Tambahkan ke Layar Utama” dan tekan Tambah."
      };
    }
    if (/android/.test(ua)) {
      return {
        title: "Instal di HP",
        text: "Buka menu browser (⋮ atau ☰), lalu pilih “Instal aplikasi” atau “Tambahkan ke layar utama”."
      };
    }
    if (/firefox/.test(ua)) {
      return {
        title: "Instal Bible Studio",
        text: "Firefox komputer belum menyediakan instalasi aplikasi web penuh. Buka website ini di Chrome atau Microsoft Edge, lalu tekan tombol Instal."
      };
    }
    if (/edg/.test(ua)) {
      return {
        title: "Instal di Microsoft Edge",
        text: "Tekan ikon instal aplikasi di sisi kanan kolom alamat, atau buka menu ⋯ → Aplikasi → Instal Erikson Bible Studio."
      };
    }
    return {
      title: "Instal di komputer",
      text: "Tekan ikon instal di sisi kanan kolom alamat. Jika belum terlihat, buka menu browser lalu pilih “Instal Erikson Bible Studio”."
    };
  }

  function makeInterface() {
    if (isInstalled() || document.querySelector("#bible-install-launcher")) return;

    const style = document.createElement("style");
    style.textContent = `
      .bible-install-launcher{position:fixed;right:18px;bottom:18px;z-index:999;display:flex;align-items:center;gap:10px;border:1px solid rgba(228,177,72,.55);border-radius:18px;padding:8px 13px 8px 8px;background:linear-gradient(145deg,#071423,#102b48);box-shadow:0 16px 44px rgba(0,0,0,.28);color:#fff;cursor:pointer;font:inherit;text-align:left}
      .bible-install-launcher img{width:46px;height:46px;border-radius:12px;object-fit:cover}
      .bible-install-launcher strong,.bible-install-launcher small{display:block}.bible-install-launcher strong{font-size:12px}.bible-install-launcher small{margin-top:2px;color:#e9c978;font-size:9px}
      .bible-install-close{position:fixed;right:12px;bottom:72px;z-index:1000;width:25px;height:25px;border:0;border-radius:50%;background:#fff;color:#23384c;box-shadow:0 5px 16px rgba(0,0,0,.18);cursor:pointer;font-weight:900}
      .bible-install-overlay{position:fixed;inset:0;z-index:1100;display:grid;place-items:center;padding:20px;background:rgba(3,11,20,.72);backdrop-filter:blur(6px)}
      .bible-install-overlay[hidden]{display:none}.bible-install-card{width:min(430px,100%);border:1px solid rgba(228,177,72,.4);border-radius:25px;padding:24px;background:linear-gradient(150deg,#071423,#12375b);box-shadow:0 28px 80px rgba(0,0,0,.45);color:#fff;text-align:center}
      .bible-install-card img{width:92px;height:92px;border-radius:23px;object-fit:cover;box-shadow:0 12px 30px rgba(0,0,0,.3)}.bible-install-card h2{margin:15px 0 8px;font-family:Georgia,serif;font-size:27px}.bible-install-card p{margin:0;color:#d5e3ee;font-size:13px;line-height:1.65}
      .bible-install-actions{display:grid;grid-template-columns:1fr auto;gap:9px;margin-top:20px}.bible-install-actions button{min-height:45px;border:0;border-radius:12px;padding:0 16px;cursor:pointer;font-weight:900}.bible-install-primary{background:linear-gradient(135deg,#f4d27a,#d99d2b);color:#092846}.bible-install-cancel{background:rgba(255,255,255,.1);color:#fff}
      @media(max-width:760px){.bible-install-launcher{right:12px;bottom:82px}.bible-install-close{right:8px;bottom:136px}.bible-install-launcher img{width:42px;height:42px}.bible-install-launcher strong{font-size:11px}}
    `;
    document.head.appendChild(style);

    const launcher = document.createElement("button");
    launcher.id = "bible-install-launcher";
    launcher.className = "bible-install-launcher";
    launcher.type = "button";
    launcher.setAttribute("aria-label", "Instal aplikasi Erikson Bible Studio");
    launcher.innerHTML = `<img src="${ICON}" alt=""><span><strong>Instal Bible Studio</strong><small id="bible-install-state">Pasang gratis di perangkat</small></span>`;

    const close = document.createElement("button");
    close.className = "bible-install-close";
    close.type = "button";
    close.setAttribute("aria-label", "Sembunyikan tombol instal");
    close.textContent = "×";

    const overlay = document.createElement("div");
    overlay.className = "bible-install-overlay";
    overlay.hidden = true;
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "bible-install-title");
    overlay.innerHTML = `
      <div class="bible-install-card">
        <img src="${ICON}" alt="Ikon Bible Studio">
        <h2 id="bible-install-title">Instal Bible Studio</h2>
        <p id="bible-install-help">Aplikasi siap dipasang.</p>
        <div class="bible-install-actions">
          <button type="button" class="bible-install-primary" id="bible-install-confirm">Instal Sekarang</button>
          <button type="button" class="bible-install-cancel" id="bible-install-cancel">Nanti</button>
        </div>
      </div>`;

    document.body.append(launcher, close, overlay);
    const title = overlay.querySelector("#bible-install-title");
    const help = overlay.querySelector("#bible-install-help");
    const confirm = overlay.querySelector("#bible-install-confirm");
    const cancel = overlay.querySelector("#bible-install-cancel");

    function openInstaller() {
      if (isInstalled()) {
        launcher.hidden = true;
        close.hidden = true;
        return;
      }
      const copy = instructions();
      title.textContent = promptEvent ? "Instal Erikson Bible Studio" : copy.title;
      help.textContent = promptEvent
        ? "Tekan Instal Sekarang untuk memasang aplikasi dengan ikon Bible Studio yang baru."
        : copy.text;
      const manualOnly = /iphone|ipad|ipod|firefox/i.test(navigator.userAgent);
      confirm.textContent = promptEvent ? "Instal Sekarang" : (manualOnly ? "Saya Mengerti" : "Salin Link untuk Chrome/Edge");
      overlay.hidden = false;
    }

    async function install() {
      if (!promptEvent) {
        const manualOnly = /iphone|ipad|ipod|firefox/i.test(navigator.userAgent);
        if (manualOnly) {
          overlay.hidden = true;
          return;
        }
        try {
          await navigator.clipboard.writeText("https://egaietalier-design.github.io/");
          confirm.textContent = "Link Sudah Disalin ✓";
          help.textContent = "Sekarang buka Google Chrome atau Microsoft Edge, tempel link di kolom alamat, lalu tekan ikon instal di sebelah kanan kolom alamat.";
        } catch (_) {
          help.textContent = "Salin link https://egaietalier-design.github.io/ lalu buka langsung di Google Chrome atau Microsoft Edge. Setelah itu tekan ikon instal di sebelah kanan kolom alamat.";
          confirm.textContent = "Saya Mengerti";
        }
        return;
      }
      const event = promptEvent;
      promptEvent = null;
      overlay.hidden = true;
      await event.prompt();
      const choice = await event.userChoice;
      if (choice.outcome === "accepted") {
        launcher.hidden = true;
        close.hidden = true;
      } else {
        launcher.querySelector("#bible-install-state").textContent = "Instal kapan saja";
      }
    }

    launcher.addEventListener("click", openInstaller);
    confirm.addEventListener("click", install);
    cancel.addEventListener("click", () => { overlay.hidden = true; });
    overlay.addEventListener("click", event => { if (event.target === overlay) overlay.hidden = true; });
    close.addEventListener("click", () => {
      launcher.hidden = true;
      close.hidden = true;
      localStorage.setItem(DISMISS_KEY, String(Date.now() + 24 * 60 * 60 * 1000));
    });

    const dismissedUntil = Number(localStorage.getItem(DISMISS_KEY) || 0);
    if (dismissedUntil > Date.now()) {
      launcher.hidden = true;
      close.hidden = true;
    }

    document.querySelectorAll("[data-install-app]").forEach(button => {
      button.hidden = false;
      button.addEventListener("click", openInstaller);
    });

    window.addEventListener("beforeinstallprompt", event => {
      event.preventDefault();
      promptEvent = event;
      launcher.hidden = false;
      close.hidden = false;
      launcher.querySelector("#bible-install-state").textContent = "Siap dipasang sekarang";
      const status = document.querySelector("#installStatus");
      if (status) status.textContent = "Aplikasi siap dipasang pada perangkat ini.";
    });

    window.addEventListener("appinstalled", () => {
      launcher.hidden = true;
      close.hidden = true;
      overlay.hidden = true;
      const status = document.querySelector("#installStatus");
      if (status) status.textContent = "Erikson Bible Studio sudah terpasang.";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", makeInterface, { once: true });
  } else {
    makeInterface();
  }
})();
