(() => {
  const CONTENT_API = "https://erikson-atelier-admin.egaietalier.chatgpt.site/api/devotional";
  const IMAGE_API = "https://erikson-atelier-admin.egaietalier.chatgpt.site/api/image";

  const setText = (selector, value) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value || "";
    });
  };

  const render = (data) => {
    setText("[data-renungan-tanggal]", data.tanggal);
    setText("[data-renungan-judul]", data.judul);
    setText("[data-renungan-referensi]", data.referensi);
    setText("[data-renungan-ayat]", data.ayat);
    setText("[data-renungan-ringkasan]", data.ringkasan);
    setText("[data-renungan-doa]", data.doa);

    const content = document.querySelector("[data-renungan-isi]");
    if (content && Array.isArray(data.isi)) {
      content.innerHTML = "";
      data.isi.forEach((paragraph) => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        content.appendChild(p);
      });
    }

    document.querySelectorAll("[data-renungan-gambar]").forEach((image) => {
      image.src = data.gambar || IMAGE_API;
      image.alt = "Gambar renungan: " + (data.judul || "Renungan Harian");
      image.hidden = false;
      image.onerror = () => { image.hidden = true; };
      image.onload = () => { image.hidden = false; };
    });
  };

  const getJson = (url) => fetch(url, { cache: "no-store" }).then((response) => {
    if (!response.ok) throw new Error("Data tidak dapat dimuat");
    return response.json();
  });

  Promise.all([
    getJson(CONTENT_API + "?v=" + Date.now()).catch(() => null),
    getJson("renungan.json?v=" + Date.now()).catch(() => null),
  ])
    .then(([online, fallback]) => {
      const data = { ...(fallback || {}), ...(online || {}), gambar: fallback?.gambar || IMAGE_API };
      if (!data.judul) throw new Error("Renungan belum tersedia");
      render(data);
    })
    .catch(() => {
      document.querySelectorAll("[data-renungan-status]").forEach((element) => {
        element.textContent = "Renungan belum dapat dimuat. Silakan coba kembali.";
      });
    });
})();
