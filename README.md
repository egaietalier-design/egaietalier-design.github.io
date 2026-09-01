# Erikson Bible Studio

Website dan aplikasi web Erikson Bible Studio milik Erikson Giawa.

## Alamat publik

- Website: https://egaietalier-design.github.io/
- Alkitab: https://egaietalier-design.github.io/alkitab.html
- Kuis: https://egaietalier-design.github.io/kuis.html
- Renungan: https://egaietalier-design.github.io/renungan.html

## Membuka seluruh proyek di Visual Studio Code

1. Instal **Git** dan **Visual Studio Code** di laptop.
2. Buka Visual Studio Code.
3. Tekan **Ctrl + Shift + P**.
4. Ketik dan pilih **Git: Clone**.
5. Masukkan:
   `https://github.com/egaietalier-design/egaietalier-design.github.io.git`
6. Pilih folder penyimpanan.
7. Tekan **Open** setelah proses selesai.

Semua halaman, gambar, kuis, Alkitab, sertifikat, dan fitur aplikasi akan terbuka dalam satu folder proyek.

## Mengambil pembaruan terbaru

Buka menu **Source Control** di Visual Studio Code, tekan menu **…**, lalu pilih **Pull**.

## Mengirim perubahan ke GitHub

1. Simpan perubahan dengan **Ctrl + S**.
2. Buka **Source Control**.
3. Tulis keterangan perubahan.
4. Tekan **Commit**.
5. Tekan **Sync Changes**.

GitHub Pages akan menerbitkan perubahan secara otomatis.

## Berkas utama

- `index.html` — Beranda
- `alkitab.html` dan `alkitab.js` — Pembaca Alkitab
- `kuis.html` dan `kuis.js` — Kuis 100 tahap
- `sertifikat.html` dan `sertifikat.js` — Sertifikat pemain
- `renungan.html` — Renungan
- `komunitas.html` — Pelayanan, doa, dan kesaksian
- `manifest.webmanifest` — Pengaturan aplikasi
- `service-worker.js` — Cache dan penggunaan seperti aplikasi

## Cara aplikasi dibuka

Aplikasi yang dipasang membuka halaman Alkitab terlebih dahulu. Setelah terbuka, pengguna tetap dapat menekan Beranda, Kuis, Renungan, Favorit, dan Pelayanan tanpa dialihkan kembali.
