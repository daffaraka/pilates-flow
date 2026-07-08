# Rencana Implementasi Landing Page (Homepage)

Berdasarkan pedoman `homepage-ui.md`, kita akan mendesain ulang halaman beranda (`Welcome.jsx`) dari gaya standar menjadi desain bergaya **editorial, photography-led, dan berkontras tinggi (gelap-terang)**, sambil tetap mempertahankan identitas brand PilatesFlow (seperti font *Fraunces* dan warna dasar).

Berikut adalah rancangan eksekusi untuk halaman Landing Page:

## 1. Adaptasi Brand PilatesFlow ke Desain Baru
Sesuai rekomendasi pada dokumen, kita akan mengadaptasi gaya referensi "Momentus" dengan sistem desain (tema) yang sudah kita buat sebelumnya:
- **Tipografi**: Menggunakan kombinasi **Fraunces** (untuk Headline besar) dan **Inter** (untuk teks paragraf/subteks).
- **Warna Aksen**: Menggunakan warna dari tema aktif (misal: *Sage Green* / *primary*) untuk ikon dan tombol *Call to Action* (CTA), bukan sekadar hitam/putih.
- **Overlay Hero**: Menggunakan warna `primary-dark` transparan (misal hijau hutan tua) sebagai overlay foto hero agar teks putih tetap terbaca, alih-alih abu-abu gelap biasa.

## 2. Struktur Halaman (Berdasarkan Section)

### A. Navbar (Transparan di atas Hero)
- Navbar tidak lagi menggunakan *solid background*.
- Mengambang transparan di atas gambar Hero.
- Berisi Logo "PilatesFlow" di tengah, tombol "Login" di kiri (opsional), dan tombol "Join Now / Daftar" di kanan dengan gaya *pill-button*.

### B. Hero Section (Full-bleed)
- Latar belakang foto layar penuh (kita akan gunakan gambar *placeholder* Pilates sementara).
- Teks Headline rata tengah (Center-aligned): "Find your balance with PilatesFlow".
- Subteks singkat pendukung di bawahnya.

### C. Stats Bar (Dark Section)
- Menggunakan latar belakang mendekati hitam (`#181818`) atau hijau sangat gelap.
- Tiga angka statistik berukuran besar dengan superskrip (contoh: `1k+`, `1.8%`, `4.5m`).
- Area teks singkat dan tautan *Underline* "Join Member" di sisi kanan.

### D. Our Services (Light Section)
- Latar belakang cerah *Off-White Warm* (`#F5F4F1`).
- Judul "Our Services" dan tombol "Explore more".
- **Grid 3 Kolom**: Menampilkan layanan (misal: *Reformer Pilates*, *Mat Pilates*, *Private Sessions*), masing-masing dengan Ikon berbentuk lingkaran, judul, deskripsi, dan teks "Learn More".

> [!IMPORTANT]
> **User Review Required: Persetujuan Layout Halaman Depan**
> Apakah adaptasi desain ini (menjaga font Fraunces dan warna tema PilatesFlow, namun mengadopsi struktur kontras gelap-terang ala "Momentus") sudah sesuai dengan ekspektasi Anda untuk halaman Landing Page?

## 3. Rencana Eksekusi
1. Rombak file `resources/js/Pages/Welcome.jsx`.
2. Hapus referensi `MainLayout.jsx` karena halaman Landing Page kini memiliki struktur desain khusus (transparan navbar, dll) yang tidak cocok dengan *wrapper layout* standar.
3. Buat kerangka setiap section (Hero, Stats, Services) dengan kelas utilitas Tailwind CSS.
4. Gunakan gambar *placeholder* dari *Unsplash* untuk gambar latar belakang Hero.
