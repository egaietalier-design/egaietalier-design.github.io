(() => {
  const API = "https://erikson-atelier-admin.egaietalier.chatgpt.site/api/activity";
  const pathname = window.location.pathname.toLowerCase();
  const page = pathname.includes("renungan") ? "renungan"
    : pathname.includes("alkitab") ? "alkitab"
    : pathname.includes("belajar") ? "belajar"
    : pathname.includes("kuis") ? "kuis"
    : "beranda";
  const sent = new Set();

  function track(eventType, label, key = eventType) {
    if (sent.has(key)) return;
    sent.add(key);
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body: JSON.stringify({ eventType, page, label }),
      mode: "cors",
      keepalive: true
    }).catch(() => {});
  }

  window.eriksonTrackActivity = track;
  track("page_view", document.title, "page_view");

  if (page === "renungan") {
    let recorded = false;
    const recordReading = () => {
      if (recorded) return;
      recorded = true;
      const title = document.querySelector("[data-renungan-judul]")?.textContent?.trim() || "Renungan Harian";
      track("renungan_read", title, "renungan_read");
    };
    const checkReading = () => {
      const height = document.documentElement.scrollHeight || 1;
      if ((window.scrollY + window.innerHeight) / height >= 0.65) recordReading();
    };
    window.addEventListener("scroll", checkReading, { passive: true });
    window.setTimeout(recordReading, 45000);
  }

  document.addEventListener("click", event => {
    const target = event.target instanceof Element ? event.target : null;
    const link = target?.closest("a");
    if (link?.href.includes("wa.me")) track("whatsapp_click", "Membuka WhatsApp", "whatsapp_click");
    const button = target?.closest("button");
    if (page === "kuis" && button?.id === "start-quiz") {
      track("quiz_start", button.textContent?.trim() || "Memulai Kuis Alkitab", "quiz_start");
    }
  });

  if (page === "alkitab") {
    const chapterTitle = document.querySelector("#chapterTitle");
    if (chapterTitle) {
      let lastChapter = "";
      const reportChapter = () => {
        const label = chapterTitle.textContent?.trim() || "";
        if (label && label !== lastChapter) {
          lastChapter = label;
          track("bible_chapter", label, `bible:${label}`);
        }
      };
      new MutationObserver(reportChapter).observe(chapterTitle, { childList: true, subtree: true, characterData: true });
      window.setTimeout(reportChapter, 1500);
    }
  }
})();
