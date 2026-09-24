# Sumba with Tinus

Website wisata kecil untuk Tinus, pemandu lokal di Sumba, Indonesia, dibuat
dari foto dan daftar tempat yang ia kirim lewat WhatsApp. Ini adalah situs
statis sederhana (tanpa proses build, tanpa server, tanpa biaya bulanan) yang
bisa di-hosting gratis di GitHub Pages, lalu diserahkan ke Tinus agar ia bisa
mengeditnya sendiri tanpa perlu coding.

## Isi folder ini

```
index.html       halaman utama
style.css        desain/tampilan
app.js           membaca content.json dan mengisi halaman
content.json     semua teks, jalur foto, dan detail kontak yang bisa diedit
images/          foto-foto Tinus, sudah dikompres untuk web
fonts/           font yang di-hosting sendiri (berlisensi untuk penggunaan ini, lihat fonts/LICENSE-*)
.pages.yml       konfigurasi untuk Pages CMS, editor visual gratis (lihat di bawah)
```

Setiap nama tempat, harga, dan detail kontak yang belum diisi **sengaja
dikosongkan** — situs akan menampilkan tulisan "to be added" (akan
ditambahkan) atau kotak putus-putus, supaya Tinus tahu persis bagian mana
yang masih perlu ia isi, dan tampilan situs tidak terlihat rusak sementara
itu.

## 1. Membuat akun GitHub (lewati jika sudah punya)

1. Buka [github.com/signup](https://github.com/signup).
2. Masukkan email, kata sandi, dan username, verifikasi email, lalu pilih
   paket **Free** saat diminta. Tidak perlu paket berbayar untuk ini.

## 2. Membuat repository dan mengunggah file

1. Setelah masuk (login), klik ikon **+** di kanan atas → **New
   repository**.
2. Beri nama sederhana, misalnya `sumba-with-tinus`.
3. Biarkan tetap **Public** (fitur GitHub Pages gratis mengharuskan
   repository bersifat publik, kecuali menggunakan paket GitHub berbayar).
4. Biarkan "Add a README" tidak dicentang — Anda sudah punya file ini.
5. Klik **Create repository**.
6. Di halaman repository baru yang masih kosong, klik **uploading an
   existing file** (tautan di bagian tengah halaman).
7. Ekstrak (unzip) `sumba-with-tinus.zip` di komputer Anda terlebih dahulu.
   Lalu seret *isi* folder hasil ekstrak tersebut — `index.html`,
   `style.css`, `app.js`, `content.json`, `.pages.yml`, `README.md`, serta
   folder `images/` dan `fonts/` — ke area upload di browser. Jangan
   mengunggah file zip-nya, dan jangan sampai ada folder pembungkus;
   `index.html` harus berada tepat di tingkat teratas repository.
   - Catatan: sebagian besar file browser menyembunyikan file yang diawali
     tanda titik secara default, sehingga `.pages.yml` mungkin tidak
     terlihat saat memilih file — menyeret seluruh isi folder sekaligus
     biasanya menghindari masalah ini. Jika masih hilang, lihat catatan
     troubleshooting di bagian akhir.
8. Gulir ke bawah dan klik **Commit changes**.

## 3. Mengaktifkan GitHub Pages (hosting gratis)

1. Di halaman repository, klik **Settings** (tab di bagian atas).
2. Di sidebar kiri, klik **Pages**.
3. Di bagian "Build and deployment" → **Source**, pilih **Deploy from a
   branch**.
4. Di **Branch**, pilih `main` dan `/ (root)`, lalu klik **Save**.
5. Tunggu satu-dua menit, lalu muat ulang (refresh) halaman Settings →
   Pages. GitHub akan menampilkan kotak di bagian atas: "Your site is live
   at `https://namauser-anda.github.io/sumba-with-tinus/`". Klik untuk
   memastikan situs terbuka dengan benar.

Jika halaman muncul tanpa gaya/desain (polos) atau rusak, hampir selalu
disebabkan file-file terunggah di dalam subfolder tambahan — buka daftar
file repository dan pastikan `index.html` berada di tingkat teratas, bukan
di dalam folder lain.

## 4. Membiarkan Tinus mengedit sendiri (gratis, tanpa coding)

Repository ini sudah menyertakan file `.pages.yml` untuk
**[Pages CMS](https://pagescms.org)**, editor gratis dan open-source yang
mengubah `content.json` menjadi formulir web sederhana — kolom teks, pemilih
foto, tombol tambah/hapus untuk daftar — dan menyimpan perubahan langsung ke
GitHub. Tinus tidak perlu tahu apa itu GitHub atau JSON.

Anda bisa mencoba mengaturnya sendiri dulu untuk melihat cara kerjanya,
baru menyerahkan login-nya, atau langsung mengaturnya di bawah akun GitHub
milik Tinus sendiri — urutan mana pun tidak masalah, karena akses Pages CMS
dan kepemilikan repository GitHub adalah dua hal yang terpisah.

1. Buka [app.pagescms.org](https://app.pagescms.org).
2. Klik **Sign in with GitHub** dan izinkan aksesnya.
3. Pertama kali, akan diminta memasang **Pages CMS GitHub App**. Pilih akun
   yang memiliki repository ini, lalu beri akses ke **semua repository**
   atau pilih hanya `sumba-with-tinus`.
4. Kembali di Pages CMS, klik repository untuk membukanya. Sistem akan
   otomatis membaca `.pages.yml` dan menampilkan sidebar berisi bagian:
   **Site content**, **Contact details**, **Trips & transfers**, **Places**,
   **About the guide**, **Guest reviews**, **Good to know**, dan **Plan
   your trip**.
5. Klik salah satu bagian, isi kolom yang diinginkan (harga, nomor
   WhatsApp, biodata singkat), lalu klik **Save**. Perubahan ini langsung
   ditulis ke `content.json` di GitHub sebagai sebuah commit.
6. GitHub Pages akan otomatis mendeteksi perubahan dan menerbitkan ulang
   situs, biasanya dalam waktu satu menit. Muat ulang situs untuk melihat
   hasilnya.

Jika ingin melewati Pages CMS sepenuhnya dan cukup meneruskan perubahan dari
Tinus sendiri, Anda juga bisa mengedit `content.json` dan mengunggah file
baru ke folder `images/` langsung di github.com — tanpa perlu CMS, hanya
sedikit lebih merepotkan karena berhadapan langsung dengan format JSON.

## 5. Menyerahkan kendali ke Tinus

Ada dua jenis penyerahan yang terpisah di sini: siapa yang bisa mengedit
konten (akses Pages CMS / GitHub), dan siapa yang memiliki repository-nya
(kendali admin dan penagihan, meski tidak ada biaya di paket gratis).
Lakukan dengan urutan berikut:

1. **Buatkan akun GitHub untuk Tinus.** Caranya sama seperti langkah 1 —
   ia bisa membuatnya sendiri, atau Anda buatkan lalu serahkan detail
   login-nya, kemudian minta ia mengganti kata sandinya.
2. **Tambahkan ia sebagai collaborator** agar ia bisa langsung masuk ke
   Pages CMS dan mengedit, tanpa perlu menunggu proses transfer kepemilikan
   selesai:
   - Di repository, buka **Settings → Collaborators** → **Add people**.
   - Masukkan username GitHub atau emailnya, lalu kirim undangan. Ia
     menerima undangan tersebut lewat notifikasi GitHub atau email.
   - Setelah itu ia bisa masuk ke [app.pagescms.org](https://app.pagescms.org)
     dengan akun GitHub miliknya sendiri dan mengedit dengan cara yang sama
     seperti dijelaskan di atas.
3. **Transfer kepemilikan repository**, setelah Anda siap untuk sepenuhnya
   melepas tanggung jawab:
   - Buka **Settings → General**, gulir ke bawah sampai bagian "Danger
     Zone".
   - Klik **Transfer ownership**, ketik nama repository untuk konfirmasi,
     lalu masukkan username GitHub Tinus sebagai pemilik baru.
   - Ia akan menerima email untuk menyetujui transfer tersebut. Setelah
     disetujui, repository sepenuhnya menjadi miliknya — situs GitHub Pages
     dan alamat URL-nya tetap berfungsi tanpa perlu perubahan apa pun.
4. Jika suatu saat ia ingin memindahkan instalasi Pages CMS GitHub App ke
   akunnya sendiri (bukan akun Anda), ia bisa melakukannya lewat **Settings
   → Applications → Installed GitHub Apps** di akun GitHub-nya, setelah ia
   resmi memiliki repository-nya.

## 6. Bagian yang perlu diisi Tinus

Buka `content.json` (atau kolom yang sesuai di Pages CMS) dan cari:
- Kolom `"value"` yang masih kosong di bagian **Trips & transfers** — harga,
  durasi, apa saja yang termasuk dalam paket.
- `contact.whatsapp` — nomor WhatsApp-nya lengkap dengan kode negara, hanya
  angka (contoh: `6281234567890`). Kolom ini juga yang mengaktifkan tombol
  WhatsApp mengambang di situs, yang akan tetap tersembunyi sampai nomornya
  diisi.
- `about.text` dan `about.photo` — biodata singkat dan foto dirinya.
- Hal lain yang ingin ditambahkan: lebih banyak foto per kategori tempat,
  ulasan dari tamu (daftar `reviews` masih kosong dan bagian ini akan
  otomatis tersembunyi sampai ada isinya), harga, atau catatan tambahan di
  bagian "Good to know".

## Melihat pratinjau perubahan secara lokal (opsional)

Membuka `index.html` langsung dengan cara klik dua kali tidak akan memuat
`content.json` (browser memblokir hal ini untuk file lokal). Untuk melihat
pratinjau secara lokal, jalankan server lokal kecil dari folder ini lalu
buka alamat yang muncul:

```
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

Atau, cara paling mudah: push ke GitHub lalu buka alamat Pages-nya — cara
ini selalu berhasil.

## Mengatasi masalah (Troubleshooting)

- **Situs terbuka tanpa gaya/desain, hanya teks polos.** Kemungkinan besar
  `index.html` berada di dalam subfolder tambahan di repository. Buka
  daftar file repository di github.com — pastikan `index.html`,
  `style.css`, dan lainnya terlihat langsung di daftar, bukan tersembunyi
  satu tingkat lebih dalam.
- **File `.pages.yml` sepertinya tidak ada di repository.** Kebanyakan
  file manager menyembunyikan file yang diawali tanda titik. Di
  github.com, gunakan **Add file → Upload files** dan seret file tersebut
  secara langsung, atau aktifkan opsi "show hidden files" di file browser
  komputer Anda sebelum menyeret isi foldernya.
- **Pages CMS tidak menampilkan repository-nya.** Instalasi GitHub App
  perlu diberi akses secara khusus ke repository tersebut — buka
  **Settings → Applications → Installed GitHub Apps → Pages CMS →
  Configure** di akun GitHub Anda, lalu tambahkan repository ini di bagian
  "Repository access".
- **Perubahan yang disimpan di Pages CMS tidak muncul di situs.** GitHub
  Pages biasanya menerbitkan ulang situs dalam waktu satu menit; periksa
  tab **Actions** di repository (atau tanda centang hijau kecil di dekat
  commit terbaru) untuk melihat apakah proses deploy masih berjalan.
  Refresh secara paksa (Ctrl/Cmd+Shift+R) juga membantu jika browser masih
  menyimpan versi lama di cache.

## Kredit foto

Semua foto adalah foto yang dikirim Tinus sendiri. Foto-foto tersebut sudah
diubah ukurannya dan data lokasi yang tertanam di dalamnya sudah dihapus
sebelum dipublikasikan.
