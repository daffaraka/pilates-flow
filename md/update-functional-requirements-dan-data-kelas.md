# Update Rancangan PilatesFlow: Functional Requirements & Data Referensi Kelas

---

## BAGIAN 1 — Functional Requirements Tambahan

Enam fungsi ini mengubah arsitektur aplikasi dari sekadar "app booking" menjadi **platform hybrid**: publik (marketing/SEO) + aplikasi internal (dashboard member) + backend operasional. Berikut penyesuaian rancangan agar keenamnya terpenuhi.

### Keputusan Arsitektur Kunci

React SPA murni (Vite + React Router) **tidak SEO-friendly** karena konten dirender di sisi client — Google/crawler kesulitan mengindeks halaman company profile. Sementara itu, Dashboard & halaman internal lain tidak butuh SEO sama sekali (halaman private, di balik login). Solusinya: **pisahkan aplikasi jadi 2 bagian dengan rendering strategy berbeda**, tapi tetap 1 backend Laravel yang sama.

| Bagian | Kebutuhan | Rendering | Contoh Halaman |
|---|---|---|---|
| **Public Site** (Company Profile) | SEO tinggi, cepat diindeks | SSR/SSG (Next.js) atau Laravel Blade + Inertia | Landing, About, Layanan, Blog, Kontak, Karir |
| **Internal App** (Member/Admin) | Interaktivitas tinggi, tidak perlu SEO | CSR (Vite + React, sesuai rancangan sebelumnya) | Dashboard, Booking, Progress |

> Kedua bagian mengonsumsi API Laravel yang sama. Public Site memanggil endpoint publik (`/api/public/*` — kelas, harga, artikel blog), Internal App memanggil endpoint terautentikasi (`/api/member/*`, `/api/admin/*`).

Alternatif bila ingin tetap 1 codebase React: gunakan **Next.js untuk seluruh aplikasi** (App Router, `"use client"` untuk halaman interaktif seperti Dashboard/Booking, Server Component untuk halaman publik). Ini menyatukan semuanya tapi migrasi dari rancangan Vite sebelumnya lebih besar. Rekomendasi: pakai pendekatan 2-bagian di atas dulu karena lebih cepat dieksekusi dengan stack yang sudah direncanakan.

---

### 1. Company Profile

Halaman publik yang menjual "cerita" studio, bukan sekadar fungsi booking:

- **Beranda**: Hero editorial (sesuai rancangan sebelumnya), Our Services, testimoni, CTA join
- **Tentang Kami**: Visi/misi, tim instruktur (foto + spesialisasi), lokasi cabang
- **Layanan**: Detail tiap jenis kelas/program (grid 3 kolom, sesuai rancangan awal)
- **Blog/Artikel**: Konten edukasi (tips postur, manfaat pilates, dll) — sumber utama traffic SEO
- **Karir** (opsional): Lowongan instruktur/staf
- **Kontak**: Form kontak + peta lokasi cabang (embed Google Maps)

Semua konten di atas **diambil dari CMS** (lihat poin 6), bukan hardcode di kode frontend.

### 2. Progressive Web App (PWA)

Berlaku untuk **Internal App** (dashboard member) — supaya bisa "diinstall" ke home screen HP tanpa lewat App Store/Play Store.

**Implementasi (Vite + React):**
```bash
npm install vite-plugin-pwa -D
```

```js
// vite.config.js
import { VitePWA } from 'vite-plugin-pwa'

export default {
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'PilatesFlow',
        short_name: 'PilatesFlow',
        theme_color: '#7C9885',
        background_color: '#FAF7F2',
        display: 'standalone',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      },
      workbox: {
        // cache asset statis + video thumbnail untuk akses offline sebagian
        runtimeCaching: [
          {
            urlPattern: /\/api\/member\/schedules/,
            handler: 'NetworkFirst',
            options: { cacheName: 'schedules-cache', expiration: { maxAgeSeconds: 3600 } }
          }
        ]
      }
    })
  ]
}
```

**Pertimbangan offline:**
- Cache data jadwal, booking aktif, dan progress member agar tetap bisa dilihat sebentar saat offline (misal sinyal lemah di dalam studio basement)
- Tampilkan indikator "offline" halus di UI bila koneksi hilang, dan antre otomatis aksi seperti booking/cancel untuk dikirim ulang saat koneksi kembali

### 3. Internal Perusahaan (Internal Operations)

Ini mencakup dua hal yang biasanya dibutuhkan bersamaan:

**A. Portal Internal untuk Staf/Operasional**
Modul tambahan di luar Admin Dashboard yang sudah dirancang, khusus untuk operasional harian:
- Manajemen shift & absensi instruktur
- Manajemen inventaris alat (jumlah reformer, matras, resistance band per cabang — kapan servis/ganti)
- Laporan internal per cabang (okupansi kelas, revenue per instruktur)
- Role tambahan: `staff_operasional` dengan akses terbatas (bukan admin penuh)

**B. Corporate Membership (B2B)** — fitur umum di gym besar Indonesia (FTL & Fithub sama-sama punya "Korporasi Membership")
- Perusahaan lain bisa daftar sebagai **korporat partner**, karyawan mereka dapat harga membership khusus
- Butuh entitas baru: `corporate_accounts` (nama perusahaan, kontak PIC, jumlah kuota karyawan, diskon %)
- Member yang terdaftar via korporat ditandai `corporate_account_id` di tabel `member_memberships`
- Laporan penggunaan khusus untuk PIC perusahaan (opsional: portal ringan untuk PIC cek pemakaian kuota timnya)

### 4. Support SEO

Karena Company Profile dipisah dan di-render SSR/SSG:
- **Meta tag dinamis** per halaman (title, description, Open Graph image) — diambil dari data CMS
- **Sitemap.xml & robots.txt** otomatis di-generate (Next.js: `next-sitemap`)
- **Structured data (JSON-LD)** schema `LocalBusiness` dan `SportsActivityLocation` — membantu muncul di Google Maps/local search
- **URL bersih**: `/blog/manfaat-pilates-untuk-postur` bukan `/blog?id=123`
- **Core Web Vitals**: optimasi gambar (next/image atau lazy-load), font-display swap untuk Fraunces/Plus Jakarta Sans
- **Blog** jadi mesin SEO utama — konten seputar keyword lokal ("pilates Jakarta", "kelas reformer terdekat", dll)

### 5. Responsive

Breakpoint Tailwind standar sudah cukup, dengan catatan khusus per bagian aplikasi:

| Breakpoint | Company Profile | Internal App |
|---|---|---|
| Mobile (`<640px`) | Stack 1 kolom, navbar jadi hamburger | Sidebar → bottom nav bar / drawer |
| Tablet (`640-1024px`) | Grid 2 kolom untuk layanan | Sidebar collapsible (icon only) |
| Desktop (`>1024px`) | Grid 3 kolom penuh, hero full-bleed | Sidebar penuh + bento grid dashboard |

### 6. CMS

Konten yang perlu dikelola non-developer (admin/marketing staff): halaman company profile, blog, jadwal promo, testimoni.

**Rekomendasi: bangun CMS ringan di dalam Laravel**, bukan pakai CMS eksternal terpisah — supaya 1 backend, 1 database, 1 sistem auth.

- Gunakan **Filament** (admin panel builder untuk Laravel) untuk membuat CMS interface secara cepat — cocok untuk mengelola: `pages`, `blog_posts`, `testimonials`, `promo_banners`
- Struktur tabel CMS:

```
pages          : slug, title, meta_description, blocks (JSON: hero, services, dll)
blog_posts     : slug, title, content (rich text/markdown), cover_image, published_at, seo_meta
testimonials   : name, photo, quote, rating
promo_banners  : title, image, link, start_date, end_date, active
```

- Public Site (Next.js/Blade) fetch konten ini lewat endpoint `/api/public/pages/{slug}` — sehingga marketing team bisa update copy landing page tanpa deploy ulang frontend
- Alternatif bila tim ingin CMS terpisah dari Laravel: **Strapi** (headless CMS open-source, bisa self-host) — tapi menambah 1 sistem terpisah untuk di-maintain. Rekomendasi tetap Filament di Laravel kecuali tim non-teknis butuh interface CMS yang sangat sederhana.

---

## BAGIAN 2 — Data Referensi Kelas Olahraga Gym Indonesia

Riset dari 2 gym populer di Indonesia — **FTL Gym** (60+ cabang, 40+ variasi kelas, 6.000+ jadwal/bulan) dan **FIT HUB** (120+ cabang, 50+ variasi kelas). Data ini dapat langsung dipetakan ke tabel `class_categories` dan `class_schedules` di database.

### 2.1 Kategori Kelas & Contoh Program

| Kategori | Contoh Kelas (FTL) | Contoh Kelas (FIT HUB) | Alat yang Dibutuhkan | Level Umum |
|---|---|---|---|---|
| **Cardio & Dance** | CID (Cardio Intense Drumming), Cardio Trampoline, Aerostep, Pound Fit, Zumba, Zumba Step, FTL Spinning, Body Jam | Zumba, POUNDFIT, HIIT | Mat, drumstick (untuk Pound Fit), sepeda statis (spinning) | Pemula–Menengah |
| **Strength Training** | LesMills BODYPUMP, LesMills GRIT (Strength/Cardio/Athletic), LesMills CORE, LesMills BODYATTACK, LesMills BODYSTEP, TRX | Strength/gym terstruktur | Barbell ringan, TRX strap, step platform | Menengah–Lanjutan |
| **Combat/Bela Diri** | Boxing, Muaythai, Wing Chun | — | Sarung tinju, pad, matras | Menengah–Lanjutan |
| **Mind-Body** | Yoga, Pilates (Mat) | Yoga, Mat Pilates | Mat, blok yoga, resistance band | Semua level |
| **Reformer Pilates** | Reformer, Tower, Chair, Ladder Barrel, Spine Corrector | Reformer Pilates (unlimited monthly) | Reformer machine, Cadillac/Tower, Chair, Ladder Barrel | Pemula–Lanjutan (progresif) |
| **Fun & Unik** | FTL Catwalk, FTL City Ride, FTL Surfboard, Dance Choreography | — | Alat khusus (surfboard statis, dsb) | Pemula |

### 2.2 Rekomendasi Struktur Data untuk PilatesFlow

Karena fokus aplikasi ini **pilates-sentris** (bukan gym umum), tidak perlu semua kategori di atas — cukup ambil yang relevan & bisa memperluas ke arah *studio wellness* seperti FTL/FIT HUB lakukan dengan lini Reformer Pilates mereka:

```
class_categories
├── Mat Pilates          (level: pemula-lanjutan, alat: mat, resistance band, magic circle)
├── Reformer Pilates      (level: pemula-lanjutan, alat: reformer machine)
├── Tower/Cadillac        (level: menengah-lanjutan, alat: tower/cadillac)
├── Chair Pilates         (level: lanjutan, alat: wunda chair)
├── Ladder Barrel         (level: menengah-lanjutan, alat: ladder barrel)
├── Prenatal/Postnatal Pilates   (level: khusus, alat: mat, bantal support)
├── Yoga (pelengkap mind-body)   (level: semua, alat: mat, blok yoga)
└── Core & Mobility (functional) (level: pemula-menengah, alat: mat, resistance band)
```

**Field tambahan per kelas** (melengkapi skema `class_schedules` sebelumnya):
- `equipment_required` (string/enum) — reformer, mat, tower, chair, ladder_barrel, resistance_band
- `focus_area` (array) — core, fleksibilitas, keseimbangan, postur, kekuatan tubuh atas/bawah
- `class_type` (enum) — `group` vs `private/semi-private` (Reformer sering ditawarkan semi-private karena alat terbatas per sesi, seperti model FIT HUB yang membatasi kuota reformer per kelas)

### 2.3 Insight dari FTL & FIT HUB yang Relevan untuk PilatesFlow

1. **Model "Unlimited Monthly"** — FIT HUB menjual akses Reformer Pilates unlimited per bulan (bukan per sesi/paket 8x). Ini bisa jadi opsi tambahan di `membership_packages`: tipe `unlimited_monthly` vs `session_based` (yang sudah dirancang sebelumnya).
2. **Kuota kelas kecil untuk Reformer** — karena alat terbatas, kapasitas kelas reformer biasanya jauh lebih kecil (8-12 orang) dibanding kelas mat/cardio (20-30 orang) → pastikan field `capacity` di `class_schedules` benar-benar fleksibel per jenis kelas.
3. **Level pemula sangat diprioritaskan di komunikasi** — FTL & FIT HUB sama-sama menonjolkan "ramah pemula", konsisten dengan prinsip microcopy suportif yang sudah dirancang untuk PilatesFlow.
4. **Sertifikasi instruktur ditonjolkan** — tambahkan field `certifications` (array) di tabel `instructors` agar bisa ditampilkan di halaman profil instruktur maupun Company Profile untuk membangun kredibilitas/SEO ("instruktur pilates bersertifikasi Jakarta").

---

## Ringkasan Perubahan pada Rancangan Sebelumnya

| Area | Perubahan |
|---|---|
| Arsitektur Frontend | Split jadi Public Site (SSR/SSG, SEO-focus) + Internal App (CSR, sesuai rancangan React+Tailwind sebelumnya) |
| Backend Laravel | Tambah modul CMS (Filament), endpoint publik `/api/public/*`, tabel `corporate_accounts` |
| Database | Tambah tabel: `pages`, `blog_posts`, `testimonials`, `promo_banners`, `corporate_accounts`; tambah field di `class_schedules` & `instructors` |
| PWA | `vite-plugin-pwa` di Internal App, caching strategy khusus untuk data jadwal (bukan video) |
| Data Kelas | Struktur kategori kelas pilates-sentris terinspirasi model FTL/FIT HUB (Mat, Reformer, Tower, Chair, Ladder Barrel + varian prenatal) |
