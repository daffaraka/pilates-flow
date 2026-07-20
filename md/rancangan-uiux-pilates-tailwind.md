# Rancangan UI/UX Aplikasi Pilates — Movement-First Experience
**Styling Stack:** Tailwind CSS

---

## Filosofi Desain

Aplikasi ini bukan "app diet/kalori" — fokus utamanya adalah **presisi gerakan, postur, dan kesehatan jangka panjang**. Setiap keputusan desain harus menjawab satu pertanyaan: *"Apakah ini membantu pengguna bergerak dengan benar dan merasa dipandu, bukan dihakimi?"*

Prinsip inti:
1. Informasi kelas & instruktur jelas sejak awal, membantu pengguna memilih kelas yang tepat sebelum datang ke studio
2. Navigasi minim gesekan (home → booking kelas dalam 1–2 tap)
3. Progress tracking berbasis kualitas gerakan, bukan angka kalori
4. Microcopy suportif, bukan menuntut performa

> Catatan: Mode Studio (layar guided-video saat sesi berlangsung) **tidak menjadi bagian dari rancangan ini**. Aplikasi berfokus pada booking kelas fisik di studio (kelas dipandu langsung oleh instruktur), bukan aplikasi latihan on-demand berbasis video.

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
  state: {
    success: '#8FAE9B',
    warning: '#D9A566',
    error:   '#C97B7B',
  }
}
```

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
- **Tidak pakai font dekoratif sama sekali** — keterbacaan > gaya visual

**Skala Tipografi (Tailwind utility mapping):**

| Elemen | Class Tailwind | Ukuran | Weight | Konteks |
|---|---|---|---|---|
| Judul kelas (card) | `text-xl font-semibold` | 20px | 600 | Nama kelas di card |
| Judul halaman | `text-2xl md:text-3xl font-bold` | 24-30px | 700 | Judul halaman (jadwal, detail kelas, dsb) |
| Subteks (instruktur/durasi) | `text-sm text-charcoal-soft` | 14px | 400 | Info sekunder, tidak bersaing dengan judul |
| Body text | `text-base` | 16px | 400 | Deskripsi kelas, microcopy |
| Label/badge (level) | `text-xs font-medium uppercase tracking-wide` | 12px | 500 | Badge "Pemula/Menengah/Lanjutan" |

**Hierarki:** judul kelas selalu paling besar & tebal → instruktur & durasi sebagai subteks kecil abu-abu (`text-charcoal-soft`) → badge level sebagai aksen warna terpisah, bukan bagian dari judul.

---

## 2. Struktur Informasi per Kartu Kelas

Setiap **class card** menampilkan (dalam urutan visual prioritas):

1. Foto kelas/studio (aspect ratio 16:9, rounded-2xl) — bukan video, cukup foto suasana kelas/alat yang dipakai
2. Badge level (Pemula/Menengah/Lanjutan) — warna berbeda per level
3. Nama kelas (`text-xl font-semibold`)
4. Instruktur + jadwal (tanggal, jam, durasi) (`text-sm text-charcoal-soft`) dalam satu baris
5. Icon kecil: alat yang dibutuhkan (reformer/mat/resistance band)
6. Icon kecil: fokus area tubuh (core, fleksibilitas, dst — pakai icon outline, bukan teks panjang)
7. Indikator sisa kuota (mis. "3 slot tersisa") — penting untuk kelas reformer yang kapasitasnya terbatas

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
        <img src={classData.photo} className="w-full h-full object-cover" alt="" />
        {classData.slotsLeft <= 3 && (
          <span className="absolute top-3 left-3 flex items-center gap-1.5 bg-charcoal/80 text-ivory text-xs font-medium px-2.5 py-1 rounded-full">
            {classData.slotsLeft} slot tersisa
          </span>
        )}
        <span className={`absolute top-3 right-3 text-xs font-medium uppercase tracking-wide px-2.5 py-1 rounded-full ${levelColor[classData.level]}`}>
          {classData.level}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-charcoal">{classData.title}</h3>
        <p className="text-sm text-charcoal-soft mt-1">
          {classData.instructor} · {classData.date}, {classData.time} · {classData.duration} menit
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

**Alur ideal: Home → Booking Kelas**

```
Home (tap 1) → Tap Class Card → Detail singkat + tombol besar "Booking" (tap 2) → Konfirmasi booking
```

Aturan implementasi:
- Tombol "Booking Kelas" **selalu terlihat tanpa scroll** di halaman detail (sticky button di bagian bawah, `fixed bottom-0` dengan padding aman)
- Home page punya bagian **"Kelas Berikutnya"** di paling atas (booking aktif terdekat pengguna) — 1 tap untuk lihat detail atau reschedule
- Hindari modal/dialog konfirmasi berlapis sebelum booking selesai — cukup 1 konfirmasi (ringkasan kelas + potongan sesi dari membership)
- Setelah booking berhasil: tampilkan konfirmasi ringan (bukan halaman baru penuh) + opsi tambah ke kalender HP

```jsx
// Sticky CTA di halaman detail kelas
<div className="fixed bottom-0 left-0 right-0 bg-ivory border-t border-sage-100 p-4 pb-safe">
  <button className="w-full bg-sage-500 hover:bg-sage-700 text-ivory font-semibold text-lg py-4 rounded-2xl transition-colors">
    Booking Kelas
  </button>
</div>
```

---

## 4. Progress Tracking Berbasis Kualitas Gerakan

**Hindari total** tampilan ala app diet (angka kalori besar-besar, grafik defisit kalori). Sebagai gantinya:

### Dashboard Progress — Struktur Kartu

| Metrik | Cara Tampil |
|---|---|
| Konsistensi mingguan | Kalender mini 7 hari, dot terisi = sesi selesai (bukan angka streak yang menekan) |
| Kekuatan inti (core strength) | Progress bar kualitatif: Baru mulai → Berkembang → Konsisten (bukan skor angka presisi) |
| Fleksibilitas | Sama — tren kualitatif per area tubuh (punggung, pinggul, bahu) |
| Total kelas selesai | Angka sederhana, ditampilkan sebagai pencapaian, bukan target/kewajiban |

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

## 5. Informasi & Filter di Halaman Daftar Kelas

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

Filter sekunder (bisa dalam bottom sheet, bukan halaman baru): durasi, alat yang dibutuhkan, tanggal/jam, instruktur.

---

## 6. Preferensi Instruktur

Karena pengguna menghargai variasi gaya mengajar, sediakan **halaman profil instruktur** ringkas:
- Foto, nama, gaya mengajar singkat (1 kalimat, bukan bio panjang)
- Daftar kelas dari instruktur tersebut
- Opsi "ikuti instruktur ini" untuk personalisasi rekomendasi home

---

## 7. Ringkasan Prinsip Microcopy

| Situasi | Nada yang Dipakai | Hindari |
|---|---|---|
| Reminder kelas | Mengajak, santai | Perintah/urgensi berlebihan |
| Setelah sesi selesai | Apresiasi proses | Skor/nilai performa |
| Melewatkan target mingguan | Netral, tanpa rasa bersalah | Kalimat menghakimi/menyalahkan |
| Cedera/level pemula | Validasi & dukungan | Perbandingan dengan pengguna lain |

---

## Catatan Implementasi Tailwind

- Gunakan `tabular-nums` di angka yang berubah dinamis (mis. sisa slot, sisa sesi membership) agar layout tidak "bergetar"
- Gunakan `pb-safe` / `env(safe-area-inset-bottom)` untuk sticky button di perangkat mobile dengan notch/gesture bar
- Definisikan warna & font di `tailwind.config.js` (bukan hardcode hex di JSX) agar konsisten dan mudah diubah di satu tempat
