(() => {
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
      if (data.gambar) {
        image.src = data.gambar;
        image.alt = "Gambar renungan: " + (data.judul || "Renungan Harian");
        image.hidden = false;
      } else {
        image.hidden = true;
      }
    });
  };

  fetch("renungan.json?v=" + Date.now())
    .then((response) => {
      if (!response.ok) throw new Error("Renungan tidak dapat dimuat");
      return response.json();
    })
    .then(render)
    .catch(() => {
      document.querySelectorAll("[data-renungan-status]").forEach((element) => {
        element.textContent = "Renungan belum dapat dimuat. Silakan coba kembali.";
      });
    });
})();
