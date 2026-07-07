# Spesifikasi Layout Dashboard — Sidebar + Header + Content Container

Dokumen ini mendefinisikan struktur ulang dashboard PilatesFlow dari layout top-navbar (seperti pada screenshot saat ini) menjadi **layout sidebar standar** — sidebar kiri untuk navigasi, header di dalam main content untuk info user & aksi akun, dan container pembungkus untuk seluruh konten halaman (termasuk bento grid yang sudah ada).

Token warna, tipografi, dan gaya kartu (rounded corner, whitespace) **mengikuti desain yang sudah diimplementasikan** di screenshot (sage green + warm ivory + aksen terracotta) — dokumen ini hanya mengubah **struktur layout**, bukan identitas visual.

---

## 1. Struktur Layout Keseluruhan

```
┌─────────────┬──────────────────────────────────────────────┐
│             │  HEADER (sticky top di dalam main content)   │
│             ├──────────────────────────────────────────────┤
│   SIDEBAR   │                                              │
│   (fixed,   │        CONTENT CONTAINER                     │
│   full      │        (padding, max-width, scrollable)      │
│   height)   │        — berisi bento grid & kartu-kartu     │
│             │          yang sudah ada di dashboard          │
│             │                                              │
└─────────────┴──────────────────────────────────────────────┘
```

- **Sidebar**: lebar tetap (fixed width), tinggi penuh layar (`100vh`), tidak ikut scroll bersama konten.
- **Header**: berada di dalam kolom kanan (main area), sticky di bagian atas saat konten di-scroll.
- **Content Container**: area scrollable di bawah header, membungkus semua kartu/bento grid.

---

## 2. Sidebar (Kiri)

### 2.1 Spesifikasi Dasar
| Properti | Nilai |
|---|---|
| Lebar (desktop) | 260px |
| Lebar (collapsed/icon-only) | 72px |
| Tinggi | 100vh, fixed |
| Background | Surface putih (`#FFFFFF`) atau Deep Forest (`#4A5D4E`) bila ingin varian gelap |
| Border | 1px solid warna border tipis di sisi kanan sidebar, memisahkan dari content |

### 2.2 Isi Sidebar (urut dari atas ke bawah)
1. **Logo/Brand** — "PilatesFlow" (pakai heading font Fraunces), area ±64px tinggi, dengan padding.
2. **Navigasi utama** (menu item dengan ikon line + label):
   - Dashboard (ikon home)
   - Jadwal Kelas (ikon calendar)
   - Membership (ikon card/wallet)
   - Riwayat Booking (ikon clock/history)
   - *(opsional, jika role admin/instruktur: Manajemen Member, Laporan)*
3. **Spacer** (dorong item berikut ke bagian bawah sidebar)
4. **Menu bawah** (opsional):
   - Pengaturan (ikon gear)
   - Bantuan/Support (ikon help-circle)

### 2.3 State Item Navigasi
| State | Gaya |
|---|---|
| Default | Teks warna secondary, ikon outline, tanpa background |
| Hover | Background lembut (`Warm Ivory` sedikit lebih gelap), transisi 150ms |
| Active (halaman sedang dibuka) | Background sage green muda + teks warna primary dark + border kiri 3px aksen sage |

### 2.4 Responsif
- **Desktop (>1024px)**: sidebar selalu terbuka, 260px.
- **Tablet (768–1024px)**: sidebar collapse jadi icon-only (72px), label muncul sebagai tooltip saat hover.
- **Mobile (<768px)**: sidebar disembunyikan, diganti hamburger menu di header yang membuka sidebar sebagai overlay/drawer dari kiri.

---

## 3. Header (di Dalam Main Content)

### 3.1 Posisi & Perilaku
- Sticky di bagian atas kolom kanan (main content), tetap terlihat saat konten di-scroll ke bawah.
- Tinggi: ±72px.
- Background: putih/warm ivory dengan border bawah tipis atau shadow halus untuk memisahkan dari content container.

### 3.2 Struktur Isi Header

```
[Judul Halaman / Breadcrumb]                [Notifikasi]  [Avatar + Nama + Jabatan ▾]
```

**Bagian kiri header:**
- Judul halaman aktif (mis. "Dashboard", "Jadwal Kelas") — font Fraunces medium, atau breadcrumb kecil jika navigasi lebih dari 1 level (mis. `Membership > Riwayat Pembayaran`).

**Bagian kanan header — Blok Profil User:**
| Elemen | Detail |
|---|---|
| Avatar | Foto profil bulat, 40px, fallback inisial nama jika belum ada foto |
| Nama | Nama lengkap user yang sedang login (bukan generik "Admin") — mis. **"Nadia Putri"** |
| Jabatan/Role | Subteks kecil di bawah nama, warna text secondary — mis. **"Member"**, **"Instruktur"**, atau **"Admin Studio"** tergantung role login |
| Ikon dropdown | Chevron kecil di samping kanan avatar, menandakan blok ini bisa diklik |

### 3.3 Dropdown Menu Profil (muncul saat blok profil diklik)
```
┌───────────────────────────────┐
│  Nadia Putri                  │
│  Member                       │
├───────────────────────────────┤
│  ✎  Edit Profile              │
│  ⎋  Logout                    │
└───────────────────────────────┘
```
- Muncul sebagai dropdown/popover di bawah blok profil, align kanan.
- Card putih, rounded 12px, shadow halus, sedikit animasi fade+slide saat muncul (150–200ms).
- **Edit Profile**: mengarah ke halaman/modal edit data diri (nama, foto, kontak, password).
- **Logout**: memicu konfirmasi singkat (opsional) lalu clear session & redirect ke halaman login.
- Divider tipis antara info nama/jabatan dan menu aksi.

---

## 4. Content Container

### 4.1 Spesifikasi
| Properti | Nilai |
|---|---|
| Padding | 32px (desktop), 16–20px (mobile) |
| Max-width | 1280px, di-center bila layar sangat lebar |
| Background | Warm Ivory (`#FAF7F2`) — sama seperti background utama saat ini |
| Overflow | `overflow-y: auto`, scroll independen dari sidebar & header |

### 4.2 Isi Container
Container ini membungkus **seluruh konten dashboard yang sudah ada di screenshot** tanpa perubahan struktur internal:
- Kartu sapaan + kelas berikutnya (hero card)
- Kartu sisa membership
- Kartu konsistensi minggu ini
- Kartu shortcut "Booking Kelas" & "Beli Paket"

Semua kartu ini tetap disusun dalam bento grid seperti sebelumnya, hanya sekarang berada **di dalam content container**, di bawah header, di sebelah kanan sidebar — bukan lagi full-width dengan navbar horizontal di atas.

### 4.3 Catatan Penting
- Karena sidebar mengambil ruang horizontal (260px), bento grid di dalam content container perlu sedikit menyesuaikan lebar kolom (mis. dari 2 kolom besar jadi proporsi yang menyesuaikan sisa ruang), tapi rasio/hierarki kartu (hero besar, sisa kecil) tetap sama seperti desain sebelumnya.

---

## 5. Ringkasan Perubahan dari Layout Saat Ini

| Aspek | Sebelumnya (screenshot) | Sesudah (spesifikasi ini) |
|---|---|---|
| Navigasi | Navbar horizontal di atas (Jadwal Kelas, Membership, Dashboard, Logout) | Sidebar kiri vertikal, dengan Logout dipindah ke dropdown profil |
| Identitas user | Teks "Selamat siang, Admin" generik di dalam kartu hero | Nama & jabatan user ditampilkan permanen di header (bukan hanya di kartu sapaan) |
| Aksi akun | Hanya "Logout" di navbar | Dropdown profil berisi "Edit Profile" + "Logout" |
| Pembungkus konten | Konten langsung di bawah navbar, full width | Content container dengan padding & max-width konsisten |

*Kartu "Selamat siang, [Nama]" di dalam hero card tetap bisa dipertahankan sebagai sapaan personal — tidak konflik dengan info nama di header, karena fungsinya beda: header = identitas & aksi akun (selalu terlihat), hero card = sapaan kontekstual (bagian dari konten halaman Dashboard saja).