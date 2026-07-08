# design.md — Wellness Landing Page (Referensi: "Momentus")

Dokumen ini mendokumentasikan sistem desain dari referensi landing page yang di-screenshot: gaya **editorial, photography-led, kontras gelap-terang**, berbeda dari sistem desain pastel/calming yang dipakai di dashboard PilatesFlow sebelumnya. Gunakan dokumen ini sebagai **spesifikasi terpisah** khusus untuk landing page/marketing site, bukan pengganti design system dashboard.

---

## 1. Konsep & Mood

- **Gaya:** editorial modern, fokus pada fotografi manusia (bukan ilustrasi), kontras tinggi antara section gelap dan terang.
- **Kesan yang ingin dibangun:** premium, aspirational, tenang tapi percaya diri — cocok untuk landing page marketing (beda kebutuhan dari dashboard aplikasi yang harus "netral & fungsional" untuk pemakaian harian).
- **Prinsip layout:** full-bleed photography di hero, lalu bergantian dark section → light section untuk membangun ritme visual saat scroll.

---

## 2. Palet Warna

| Peran | Warna | Hex (perkiraan) | Konteks Pemakaian |
|---|---|---|---|
| Hero Overlay | Dark Olive Gray | `#4A4E48` | Overlay di atas foto hero, agar teks putih terbaca |
| Dark Section BG | Near Black | `#181818` | Background stats bar |
| Light Section BG | Off-White Warm | `#F5F4F1` | Background section "Our Services", "Meet Our Team" |
| Text on Dark | White | `#FFFFFF` | Headline hero, angka statistik |
| Text on Dark (secondary) | Warm Gray Light | `#B8B5AE` | Subtext/label di stats bar |
| Text on Light (primary) | Charcoal | `#1F1F1F` | Heading & body di section terang |
| Text on Light (secondary) | Gray | `#6B6B68` | Paragraf deskripsi |
| Icon Accent 1 | Olive Green | `#8A9B5E` | Ikon "Yoga Classes" |
| Icon Accent 2 | Lime/Chartreuse | `#C9D96B` | Ikon "Fitness Training" |
| Icon Accent 3 | Sage Green | `#9BAE8C` | Ikon "Wellness Workshops" |
| Button Primary (di hero) | White pill, teks gelap | `#FFFFFF` bg / `#1F1F1F` teks | Tombol "Join now" |
| Button Primary (di light section) | Dark pill, teks putih | `#1F1F1F` bg / `#FFFFFF` teks | Tombol "Explore more" |

> Catatan: ini bukan brand palette baru untuk aplikasi Pilates — kalau landing page ini dipakai untuk PilatesFlow, sebaiknya swap warna icon accent & overlay hero dengan token yang sudah ada (sage green/blush/dsb dari dokumen palet sebelumnya) agar tetap satu identitas dengan dashboard.

---

## 3. Tipografi

| Elemen | Font (rekomendasi) | Ukuran | Weight | Catatan |
|---|---|---|---|---|
| Logo wordmark | Sans-serif rounded (mis. Poppins/Quicksand) | 18px | Medium | Disertai icon mark kecil di kiri logo |
| Headline hero | Sans-serif rounded, sedikit humanis (mis. Poppins/General Sans) | 48–56px | SemiBold | Center-aligned, 2 baris, line-height ketat (~1.1) |
| Subtext hero | Sans-serif regular | 14–15px | Regular | Center-aligned, max-width ±480px agar tidak melebar penuh |
| Angka statistik | Sans-serif, angka besar + unit kecil superscript (`1k+`, `1.8%`, `4.5m`) | 36–40px (angka), 14px (unit) | Bold (angka) / Regular (unit) | Unit huruf kecil ditempel di kanan-atas angka |
| Label statistik | Sans-serif regular | 12–13px | Regular | Warna secondary, di bawah angka |
| Heading section ("Our Services") | Sans-serif rounded | 32px | Medium | Left-aligned |
| Body/paragraf | Sans-serif regular | 14–15px | Regular | Line-height 1.6, warna gray |
| Judul kartu layanan | Sans-serif | 18px | SemiBold | |
| Link "Learn More" / "Join Member" | Sans-serif, underline | 13–14px | Medium | Underline permanen (bukan hanya on-hover), menandakan link teks bukan tombol |

---

## 4. Struktur Layout (Section per Section)

### 4.1 Navbar (overlay di atas foto hero)
```
[More ⠿]        ✤ Momentus (logo tengah)        [Join now]
```
- Transparan, menyatu di atas foto hero (bukan bar solid).
- Kiri: pill button "More" dengan ikon dots (kemungkinan menu sekunder/dropdown).
- Tengah: logo mark (bentuk clover/bunga kecil) + wordmark "Momentus".
- Kanan: pill button putih solid "Join now" — CTA utama, kontras tinggi dari background gelap.

### 4.2 Hero Section
- Full-bleed photo (2 orang dalam pose duduk/meditasi), dengan overlay gelap transparan agar teks tetap terbaca.
- Headline besar center: **"Find your balance with Momentus"** — 2 baris, bold, putih.
- Subtext kecil di bawah headline, center, 1–2 baris.
- Tidak ada tombol CTA langsung di tengah hero — CTA sudah diwakili "Join now" di navbar.

### 4.3 Stats Bar (dark section, langsung di bawah hero)
```
[1k+]   [1.8%]   [4.5m]     |  Paragraf singkat + "Join Member" (underline link)   [ikon dekoratif clover, pojok kanan bawah]
World    Runner   Sea games
champions up      participation
```
- Background hitam pekat, full-width, sedikit padding vertikal besar.
- 3 angka statistik besar di kiri, masing-masing dengan label kecil di bawahnya.
- Blok teks pendek + link "Join Member" di kanan — menjelaskan proses konsultasi/pendaftaran singkat.
- Elemen dekoratif (ikon clover/bunga transparan besar) di pojok kanan bawah sebagai aksen visual, tidak fungsional.

### 4.4 Our Services (light section)
```
Our Services                                          [Explore more]
Paragraf deskripsi singkat, max-width ±400px

[icon]                [icon]                  [icon]
Yoga Classes          Fitness Training         Wellness Workshops
Deskripsi singkat...  Deskripsi singkat...     Deskripsi singkat...
Learn More            Learn More               Learn More
```
- Heading + paragraf deskripsi di kiri, tombol "Explore more" (dark pill) sejajar di kanan pada baris yang sama.
- Di bawahnya, grid 3 kolom: tiap kolom punya icon circle (background gelap, ikon berwarna sesuai accent masing-masing), judul layanan, deskripsi singkat, dan link "Learn More".
- Icon circle: ±48px diameter, background dark (`#1F1F1F`), ikon di tengah dengan warna accent (hijau/lime/sage berbeda tiap kolom).

### 4.5 Meet Our Team (section berikutnya, terpotong di gambar)
- Label kecil "Our team" di atas heading.
- Heading besar "Meet Our Team" — pola heading sama seperti "Our Services" (label kecil + heading besar di bawahnya).
- (Konten lengkap section ini terpotong di gambar — kemungkinan lanjut ke grid foto anggota tim di bawahnya, mengikuti pola visual section sebelumnya.)

---

## 5. Komponen Reusable

| Komponen | Spesifikasi |
|---|---|
| Pill Button (light on dark) | Rounded-full, padding ±10px 20px, background putih, teks gelap, dipakai di atas foto/hero |
| Pill Button (dark on light) | Rounded-full, padding ±10px 20px, background hitam, teks putih, dipakai di section terang |
| Icon Circle | 48px, rounded-full, background gelap, ikon 20px di tengah dengan warna accent |
| Underline Link | Teks + underline permanen, dipakai untuk aksi sekunder ("Learn More", "Join Member") — bukan tombol utama |
| Stat Number | Angka besar bold + unit kecil superscript, label kecil di bawah dengan warna secondary |

---

## 6. Spacing & Grid

- Container max-width: ±1200–1280px, center.
- Padding horizontal section: ±64–80px (desktop).
- Jarak vertikal antar section besar: ±80–100px.
- Grid layanan: 3 kolom sama lebar, gap ±40px antar kolom.

---

## 7. Catatan Adaptasi ke Brand PilatesFlow (Opsional)

Kalau referensi ini ingin dipakai sebagai landing page PilatesFlow (bukan sekadar inspirasi), berikut penyesuaian yang disarankan agar konsisten dengan design system dashboard yang sudah dibuat sebelumnya:

| Elemen di Referensi | Ganti dengan (mengacu dokumen sebelumnya) |
|---|---|
| Overlay hero dark olive | Bisa tetap gelap untuk landing page (kontras dgn dashboard yang terang), atau ganti ke Deep Forest `#4A5D4E` agar senada dgn token sage green |
| Icon accent hijau/lime | Sage Green `#7C9885` + Terracotta `#E8B4A0` (dari palet dashboard) |
| Font headline rounded sans | Tetap pakai Fraunces (serif) untuk headline agar konsisten dgn identitas dashboard, atau kombinasi Fraunces (headline) + Inter (body) seperti sistem yang sudah ada |
| Pill button hitam/putih | Sage Green sebagai warna primary CTA, putih untuk secondary |

Dengan penyesuaian ini, landing page akan terasa seperti bagian dari brand yang sama dengan dashboard, bukan produk yang berbeda.