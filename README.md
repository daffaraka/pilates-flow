# PilatesFlow Dashboard System

PilatesFlow adalah aplikasi manajemen operasional dan Content Management System (CMS) untuk studio Pilates, dibangun secara kustom guna memberikan fleksibilitas tanpa batas untuk keperluan administrasi dan konten website publik.

## 🚀 Teknologi

Proyek ini menggunakan *stack* teknologi yang modern untuk menjamin pengalaman pengguna (UX) yang sangat responsif (SPA) serta mudah dikembangkan:
- **Backend:** Laravel 11.x (PHP 8.3)
- **Frontend / UI:** React.js 18 + Inertia.js v2 + Tailwind CSS v3
- **Database:** MySQL
- **Tema Desain:** Kustom "Ivory & Sage" (Minimalis, bersih, dan menenangkan, disesuaikan untuk citra studio Pilates / Wellness).

## 🎨 Palet Warna (Color Palette)

Aplikasi ini menggunakan skema warna **Ivory & Sage** yang elegan, kalem, dan minimalis, cocok untuk industri _wellness_ dan studio Pilates. Skema ini di-embed secara langsung ke dalam konfigurasi TailwindCSS (`tailwind.config.js`):

- **Sage (Primary)**:
  - Sage 500 (`#7C9885`) - Aksen utama (Tombol, Teks Highlight).
  - Sage 700 (`#4A5D4E`) - Warna dominan gelap (_Sidebar_).
- **Blush (Secondary)**: 
  - Blush 500 (`#E8B4A0`) - Aksen sekunder atau *Error*.
- **Ivory (Background)**: 
  - Ivory (`#FAF7F2`) - Latar belakang utama aplikasi yang *creamy* dan bersih.
- **Charcoal (Text)**: 
  - Charcoal (`#2E2E2E`) - Warna utama teks (mengurangi kontras keras dari hitam murni).
  - Charcoal Soft (`#8A8378`) - Teks sekunder/label.

## 🧩 Modul Fitur

Sistem ini terbagi ke dalam tiga pilar operasional utama:

### 1. Master Data
Modul fondasi untuk mengatur data primer studio:
- **Kelas Pilates**: Pengaturan informasi, jenis kelas, tingkat kesulitan, dan kapasitas.
- **Pelatih (Coaches)**: Pengelolaan data instruktur atau staf yang bertugas mengajar.
- **Paket Harga (Memberships & Pricing)**: Katalog harga pembelian akses per kedatangan (*drop-in*) atau berlangganan.

### 2. Operasional
Modul untuk administrasi harian dan lalu lintas klien:
- **Jadwal Kelas (Schedules)**: Kalender kelas kapan kelas diadakan beserta pelatihnya.
- **Membership**: Manajemen anggota, pelacakan masa aktif (*start/end date*).
- **Pembayaran (Payments)**: Perekaman transaksi untuk setiap anggota dengan multi-opsi (Cash, Transfer, Card) dan status (*Lunas / Belum Lunas*).
- **Booking (Reservasi)**: Registrasi kehadiran/reservasi slot untuk jadwal kelas tertentu.

### 3. CMS (Content Management System)
Sistem pengelola konten yang akan terhubung dengan _Public Front-end_ (berbasis Next.js):
- **Halaman (Pages)**: Mengelola halaman statis (Tentang Kami, dll.) dilengkapi SEO _meta descriptions_ dan sistem _Slug_.
- **Artikel Blog (Blog Posts)**: Publikasi berita, fitur *cover image*, dan filter _draft_ vs _published_.
- **Testimonial**: Mengelola _review_ klien, sistem _rating_ (1-5), kurasi tampilan halaman utama.
- **Promo Banner**: _Slider_ kampanye iklan di aplikasi, diatur menggunakan parameter waktu aktif (_start & end date_).

## 📦 Panduan Instalasi (Development)

Jika Anda ingin menjalankan aplikasi ini di lokal, ikuti langkah berikut:

### Persiapan
- Pastikan PHP >= 8.2 terinstal
- Pastikan Composer terinstal
- Pastikan Node.js dan NPM terinstal (direkomendasikan v18 atau v20+)
- Pastikan Database MySQL siap (misal via XAMPP, Laragon, atau native)

### Langkah-langkah:
1. **Kloning Repositori**
   ```bash
   git clone https://github.com/daffaraka/pilates-flow.git
   cd pilates-flow
   ```

2. **Instal Dependensi PHP & Node**
   ```bash
   composer install
   npm install
   ```

3. **Konfigurasi Environment**
   ```bash
   cp .env.example .env
   ```
   Atur koneksi database pada `.env`:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=pilates_flow
   DB_USERNAME=root
   DB_PASSWORD=
   ```

4. **Generate Key dan Migrate Data**
   ```bash
   php artisan key:generate
   php artisan migrate
   ```
   *Catatan: Pastikan Anda menjalankan ini jika ada update migration (contoh: untuk modul CMS).*

5. **Symlink Storage Folder**
   Gambar yang diunggah dari CMS akan disimpan di lokal (storage/app/public). Anda perlu membuat tautan publik:
   ```bash
   php artisan storage:link
   ```

6. **Jalankan Aplikasi**
   Buka 2 tab terminal untuk menjalankan Server dan *Vite watcher* (React):
   
   *Terminal 1:*
   ```bash
   php artisan serve
   ```
   
   *Terminal 2:*
   ```bash
   npm run dev
   ```

Aplikasi admin dapat diakses di `http://127.0.0.1:8000`.

## 📌 Status Fase Pengembangan
- ✅ **Fase 1**: Fondasi & Routing (Selesai)
- ✅ **Fase 2**: Implementasi Master Data & Tema UI (Selesai)
- ✅ **Fase 3**: Integrasi Operasional (Membership, Payment, Booking) (Selesai)
- ✅ **Fase 4**: Modul CMS & Penggantian Total Filament (Selesai)
- 🚧 **Fase 5 (Rencana Selanjutnya)**: Otorisasi berbasis peran (*Roles & Permissions*) menggunakan Spatie, serta integrasi API publik.
