const CACHE = "erikson-bible-v16";
const SHELL = [
  "./",
  "index.html",
  "alkitab.html",
  "kuis.html",
  "sertifikat.html",
  "renungan.html",
  "belajar.html",
  "favorit.html",
  "komunitas.html",
  "privacy.html",
  "styles.css",
  "alkitab.css?v=16",
  "community.css",
  "alkitab.js?v=16",
  "kuis.js?v=8",
  "kuis-upgrades.js?v=8",
  "sertifikat.js",
  "renungan.js",
  "favorit.js",
  "komunitas.js",
  "activity.js",
  "activity.js?v=8",
  "pwa.js?v=11",
  "manifest.webmanifest",
  "assets/bible-studio-icon-v2.png",
  "assets/bible-studio-icon-192.png",
  "assets/bible-studio-icon-512.png",
  "assets/quiz-stage-journey.svg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => Promise.all(SHELL.map(url => cache.add(url).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response && response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(async () => {
        const hit = await caches.match(event.request);
        if (hit) return hit;
        if (event.request.mode === "navigate") return caches.match("index.html");
        return new Response("Konten ini belum tersimpan untuk mode offline.", {
          status: 503,
          headers: { "Content-Type": "text/plain; charset=utf-8" }
        });
      })
  );
});
