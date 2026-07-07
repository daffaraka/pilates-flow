# Rancangan UI/UX Aplikasi Pilates — Movement-First Experience
**Styling Stack:** Tailwind CSS
---
## Filosofi Desain
Aplikasi ini bukan "app diet/kalori" — fokus utamanya adalah **presisi gerakan, postur, dan kesehatan jangka panjang**. Setiap keputusan desain harus menjawab satu pertanyaan: *"Apakah ini membantu pengguna bergerak dengan benar dan merasa dipandu, bukan dihakimi?"*
Prinsip inti:
1. Video demo & panduan postur = elemen utama, bukan pelengkap
2. Navigasi minim gesekan (home → mulai kelas dalam 1–2 tap)
3. Mode "studio" yang bersih total saat sesi berlangsung
4. Progress tracking berbasis kualitas gerakan, bukan angka kalori
5. Microcopy suportif, bukan menuntut performa
---
## 1. Design Tokens (Tailwind Config)
### 1.1 Palet Warna
```js
// tailwind.config.js
colors: {
  sage: {
    50:  '#F3F6F3',
    100: '#E3EAE4',
    300: '#B8C9BC',
    500: '#7C9885',   // primary
    700: '#4A5D4E',   // primary dark / teks penting
    900: '#2B362D',
  },
  blush: {
    100: '#F7E6DF',
    300: '#EFC9B8',
    500: '#E8B4A0',   // secondary / aksen hangat
  },
  ivory: {
    DEFAULT: '#FAF7F2', // background utama
    dark: '#F0EBE2',
  },
  charcoal: {
    DEFAULT: '#2E2E2E', // teks primary
    soft: '#8A8378',    // teks secondary/caption
  },
  studio: {
    bg: '#1C1F1C',      // background mode studio (gelap, fokus)
    text: '#FAF7F2',
  },
  state: {
    success: '#8FAE9B',
    warning: '#D9A566',
    error:   '#C97B7B',
  }
}
```
> **Kenapa `studio.bg` gelap?** Saat sesi berlangsung, pengguna berdiri jauh dari layar. Background gelap + kontras tinggi pada teks/tombol mengurangi silau dan membuat kontrol lebih mudah dikenali dari jarak matras.
### 1.2 Tipografi
```js
// tailwind.config.js
fontFamily: {
  sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'], // humanis, medium-weight
}
```
**Kenapa Plus Jakarta Sans (atau alternatif: Manrope, Inter):**
- Sans-serif humanis — sudut huruf tidak kaku, terasa ramah tapi tetap presisi
- Punya medium-weight yang tebal secara visual tanpa terasa "berat"
- Angka & huruf tetap terbaca jelas di ukuran besar (penting untuk mode studio)
- **Tidak pakai font dekoratif sama sekali** — keterbacaan dari jarak jauh > gaya visual
**Skala Tipografi (Tailwind utility mapping):**
|
 Elemen 
|
 Class Tailwind 
|
 Ukuran 
|
 Weight 
|
 Konteks 
|
|
---
|
---
|
---
|
---
|
---
|
|
 Judul kelas (card) 
|
`text-xl font-semibold`
|
 20px 
|
 600 
|
 Nama kelas di card 
|
|
 Judul mode studio 
|
`text-4xl md:text-5xl font-bold`
|
 36-48px 
|
 700 
|
 Nama gerakan saat sesi, terbaca dari matras 
|
|
 Timer/counter studio 
|
`text-6xl font-bold tabular-nums`
|
 60px 
|
 700 
|
 Angka harus sangat besar & stabil (tidak geser) 
|
|
 Subteks (instruktur/durasi) 
|
`text-sm text-charcoal-soft`
|
 14px 
|
 400 
|
 Info sekunder, tidak bersaing dengan judul 
|
|
 Body text 
|
`text-base`
|
 16px 
|
 400 
|
 Deskripsi kelas, microcopy 
|
|
 Label/badge (level) 
|
`text-xs font-medium uppercase tracking-wide`
|
 12px 
|
 500 
|
 Badge "Pemula/Menengah/Lanjutan" 
|
**Hierarki:** judul kelas selalu paling besar & tebal → instruktur & durasi sebagai subteks kecil abu-abu (`text-charcoal-soft`) → badge level sebagai aksen warna terpisah, bukan bagian dari judul.
---
## 2. Struktur Informasi per Kartu Kelas
Setiap **class card** menampilkan (dalam urutan visual prioritas):
1. Thumbnail/preview video (aspect ratio 16:9, rounded-2xl)
2. Badge level (Pemula/Menengah/Lanjutan) — warna berbeda per level
3. Nama kelas (`text-xl font-semibold`)
4. Instruktur + durasi (`text-sm text-charcoal-soft`) dalam satu baris
5. Icon kecil: alat yang dibutuhkan (reformer/mat/resistance band)
6. Icon kecil: fokus area tubuh (core, fleksibilitas, dst — pakai icon outline, bukan teks panjang)
7. Indikator live vs on-demand (dot merah kecil + "Live" untuk kelas live)
### Contoh Struktur Komponen (React + Tailwind)
```jsx
function ClassCard({ classData }) {
  const levelColor = {
    pemula: 'bg-sage-100 text-sage-700',
    menengah: 'bg-blush-100 text-blush-500',
    lanjutan: 'bg-sage-700 text-ivory'
  };
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
      <div className="relative aspect-video">
        <img src={classData.thumbnail} className="w-full h-full object-cover" alt="" />
        {classData.isLive && (
          <span className="absolute top-3 left-3 flex items-center gap-1.5 bg-charcoal/80 text-ivory text-xs font-medium px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Live
          </span>
        )}
        <span className={`absolute top-3 right-3 text-xs font-medium uppercase tracking-wide px-2.5 py-1 rounded-full ${levelColor[classData.level]}`}>
          {classData.level}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-charcoal">{classData.title}</h3>
        <p className="text-sm text-charcoal-soft mt-1">
          {classData.instructor} · {classData.duration} menit
        </p>
        <div className="flex items-center gap-3 mt-3 text-charcoal-soft">
          {/* icon alat & fokus area, pakai heroicons/lucide outline */}
          <span className="flex items-center gap-1 text-xs">
            <EquipmentIcon className="w-4 h-4" /> {classData.equipment}
          </span>
          <span className="flex items-center gap-1 text-xs">
            <TargetIcon className="w-4 h-4" /> {classData.focusArea}
          </span>
        </div>
      </div>
    </div>
  );
}
```
---
## 3. Navigasi Minim Gesekan (1–2 Tap Rule)
**Alur ideal: Home → Mulai Kelas**
```
Home (tap 1) → Tap Class Card → Detail singkat + tombol besar "Mulai" (tap 2) → Studio Mode
```
Aturan implementasi:
- Tombol "Mulai Kelas" **selalu terlihat tanpa scroll** di halaman detail (sticky button di bagian bawah, `fixed bottom-0` dengan padding aman)
- Home page punya bagian **"Lanjutkan"** di paling atas (kelas terakhir yang belum selesai) — 1 tap langsung lanjut
- Hindari modal/dialog konfirmasi berlapis sebelum masuk kelas — cukup 1 konfirmasi jika diperlukan (misal pilih alat yang tersedia)
```jsx
// Sticky CTA di halaman detail kelas
<div className="fixed bottom-0 left-0 right-0 bg-ivory border-t border-sage-100 p-4 pb-safe">
  <button className="w-full bg-sage-500 hover:bg-sage-700 text-ivory font-semibold text-lg py-4 rounded-2xl transition-colors">
    Mulai Kelas
  </button>
</div>
```
---
## 4. Mode Studio (Saat Sesi Berlangsung)
Ini adalah layar paling kritis — dirancang untuk **dilihat sambil bergerak**, bukan dibaca.
### Prinsip Desain Mode Studio
- Background gelap (`bg-studio-bg`) — mengurangi silau, kontras tinggi
- **Video/gerakan mendominasi 70-80% layar**
- Kontrol besar: play/pause/next minimal `w-16 h-16` (touch target besar, mudah dikenali dari jarak)
- Teks minim — hanya nama gerakan saat ini + timer, tidak ada paragraf deskripsi
- Tidak ada notifikasi/pop-up yang mengganggu selama sesi berjalan
- Auto-hide UI controls setelah beberapa detik tidak disentuh (`opacity-0` transition), muncul lagi saat layar disentuh
```jsx
function StudioMode() {
  return (
    <div className="fixed inset-0 bg-studio-bg text-studio-text flex flex-col">
      {/* Video area - dominan */}
      <div className="flex-1 relative">
        <video className="w-full h-full object-cover" />
        {/* Overlay minimal di atas */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
          <h2 className="text-4xl md:text-5xl font-bold">Cat-Cow Stretch</h2>
          <span className="text-lg text-sage-300">3/12</span>
        </div>
      </div>
      {/* Kontrol besar di bawah */}
      <div className="flex items-center justify-center gap-8 py-8 bg-studio-bg/95">
        <button className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
          <PrevIcon className="w-8 h-8" />
        </button>
        <button className="w-20 h-20 rounded-full bg-sage-500 flex items-center justify-center">
          <PlayPauseIcon className="w-10 h-10" />
        </button>
        <button className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
          <NextIcon className="w-8 h-8" />
        </button>
      </div>
      {/* Timer besar, angka stabil (tabular-nums agar tidak "loncat") */}
      <div className="text-center pb-6">
        <span className="text-6xl font-bold tabular-nums">04:32</span>
      </div>
    </div>
  );
}
```
### Fleksibilitas Sesi
Sesuai preferensi pengguna: sediakan kontrol untuk **jeda, ulang gerakan (repeat), dan pilih intensitas** langsung dari mode studio — tidak perlu keluar dari layar sesi untuk mengubah pengaturan ini.
---
## 5. Progress Tracking Berbasis Kualitas Gerakan
**Hindari total** tampilan ala app diet (angka kalori besar-besar, grafik defisit kalori). Sebagai gantinya:
### Dashboard Progress — Struktur Kartu
|
 Metrik 
|
 Cara Tampil 
|
|
---
|
---
|
|
 Konsistensi mingguan 
|
 Kalender mini 7 hari, dot terisi = sesi selesai (bukan angka streak yang menekan) 
|
|
 Kekuatan inti (core strength) 
|
 Progress bar kualitatif: Baru mulai → Berkembang → Konsisten (bukan skor angka presisi) 
|
|
 Fleksibilitas 
|
 Sama — tren kualitatif per area tubuh (punggung, pinggul, bahu) 
|
|
 Total kelas selesai 
|
 Angka sederhana, ditampilkan sebagai pencapaian, bukan target/kewajiban 
|
```jsx
<div className="bg-white rounded-2xl p-5">
  <p className="text-sm text-charcoal-soft mb-2">Konsistensi Minggu Ini</p>
  <div className="flex gap-2">
    {days.map((day) => (
      <div key={day.label} className="flex-1 flex flex-col items-center gap-1.5">
        <div className={`w-8 h-8 rounded-full ${day.done ? 'bg-sage-500' : 'bg-sage-100'}`} />
        <span className="text-xs text-charcoal-soft">{day.label}</span>
      </div>
    ))}
  </div>
</div>
```
**Microcopy untuk progress** — nada suportif, contoh arah penulisan (bukan skrip final):
- Menyoroti proses/usaha ("kamu sudah konsisten 4 hari minggu ini") ketimbang menuntut target angka
- Tidak menyertakan perbandingan sosial (leaderboard, ranking) — retensi didorong personalisasi, bukan kompetisi
- Nada ini berlaku di seluruh microcopy aplikasi: notifikasi reminder, pesan setelah sesi selesai, dan pesan kosong (empty state)
---
## 6. Informasi & Filter di Halaman Daftar Kelas
**Filter utama (chip/tab, bukan dropdown tersembunyi):**
```jsx
<div className="flex gap-2 overflow-x-auto px-4 py-3">
  {['Semua', 'Pemula', 'Menengah', 'Lanjutan'].map((level) => (
    <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
      bg-sage-100 text-sage-700 data-[active]:bg-sage-500 data-[active]:text-ivory">
      {level}
    </button>
  ))}
</div>
```
Filter sekunder (bisa dalam bottom sheet, bukan halaman baru): durasi, alat yang dibutuhkan, live vs on-demand, instruktur.
---
## 7. Preferensi Instruktur
Karena pengguna menghargai variasi gaya mengajar, sediakan **halaman profil instruktur** ringkas:
- Foto, nama, gaya mengajar singkat (1 kalimat, bukan bio panjang)
- Daftar kelas dari instruktur tersebut
- Opsi "ikuti instruktur ini" untuk personalisasi rekomendasi home
---
## 8. Ringkasan Prinsip Microcopy
|
 Situasi 
|
 Nada yang Dipakai 
|
 Hindari 
|
|
---
|
---
|
---
|
|
 Reminder kelas 
|
 Mengajak, santai 
|
 Perintah/urgensi berlebihan 
|
|
 Setelah sesi selesai 
|
 Apresiasi proses 
|
 Skor/nilai performa 
|
|
 Melewatkan target mingguan 
|
 Netral, tanpa rasa bersalah 
|
 Kalimat menghakimi/menyalahkan 
|
|
 Cedera/level pemula 
|
 Validasi & dukungan 
|
 Perbandingan dengan pengguna lain 
|
---
## Catatan Implementasi Tailwind
- Gunakan `tabular-nums` di semua angka yang berubah real-time (timer, counter) agar layout tidak "bergetar"
- Gunakan `pb-safe` / `env(safe-area-inset-bottom)` untuk sticky button di perangkat mobile dengan notch/gesture bar
- Definisikan warna & font di `tailwind.config.js` (bukan hardcode hex di JSX) agar konsisten dan mudah diubah di satu tempat
- Pertimbangkan dark-mode variant khusus untuk Mode Studio yang selalu aktif, terlepas dari preferensi tema pengguna di bagian lain aplikasi
