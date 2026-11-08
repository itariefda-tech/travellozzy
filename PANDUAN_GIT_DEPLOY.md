# 🚀 Panduan Git Commit & Deployment — TRAVELOZY

Dokumen ini adalah panduan praktis alur kerja pengembangan (*development*), Git commit/push, dan deployment ke VPS untuk website **TRAVELOZY** (`travelozy.my.id`).

---

## 📌 Ringkasan Konfigurasi

| Parameter | Keterangan |
| :--- | :--- |
| **Domain** | `https://travelozy.my.id` & `https://www.travelozy.my.id` |
| **VPS IP** | `51.79.204.126` (OVH Singapore) |
| **Akses SSH** | `ssh ovh` (user `ubuntu`) |
| **Web Server** | Nginx (Static Site Serving) |
| **Path Web di VPS** | `/var/www/travelozy/current` |
| **Mode Deploy** | **Local Build & Atomic Upload** (hemat disk & memory VPS) |

> ⚠️ **PENTING TENTANG DISK VPS:**  
> Partisi root VPS saat ini terpakai ~98% karena ada aplikasi lain (HRIS Docker). **Jangan** menjalankan `npm install` atau `npm run build` di dalam VPS karena dapat menghabiskan disk. Selalu lakukan build di laptop Anda lalu deploy file statisnya (~3 MB) via skrip yang sudah disediakan.

---

## ⚡ Alur Cepat (Daily Workflow)

### Skenario 1: Edit Kode → Langsung Deploy ke VPS

Setelah Anda melakukan perubahan konten/tampilan di laptop dan ingin langsung menayangkannya ke website live:

Buka terminal **PowerShell** di folder proyek, lalu jalankan:

```powershell
.\deploy\deploy-vps.ps1
```

**Apa yang dilakukan skrip ini secara otomatis?**
1. Menjalankan production build lokal (`npm run build` via Vinext).
2. Memverifikasi file output di `dist/client/index.html`.
3. Memaketkan file statis menjadi arsip `.tar.gz`.
4. Mengunggah ke VPS via SSH `ovh`.
5. Mengekstrak ke direktori rilis baru berstempel waktu (`/var/www/travelozy/releases/travelozy-YYYYMMDDHHMMSS`).
6. Mengalihkan symlink `/var/www/travelozy/current` ke rilis baru secara *zero-downtime*.
7. Menguji (`nginx -t`) dan me-reload Nginx di VPS.

---

### Skenario 2: Git Commit + Auto-Push + Deploy Sekaligus

Jika Anda ingin menjalankan pengecekan menyeluruh (linting, typecheck, unit test), membuat commit Git, push ke GitHub, dan deploy ke VPS dalam satu perintah:

```powershell
.\deploy\publish.ps1 -CommitMessage "feat: perbarui informasi armada dan nomor wa"
```

Skrip ini akan memastikan seluruh kualitas kode lulus (*gate pass*) sebelum mempublikasikannya ke produksi.

---

## 🛠️ Alur Standar Git (Commit & Push Manual)

Jika Anda ingin mengelola Git secara manual menggunakan perintah standar:

### 1. Periksa File yang Diubah
```bash
git status
```
Periksa apakah file yang Anda modifikasi sudah sesuai.

### 2. Tambahkan File ke Staging
```bash
# Tambahkan seluruh perubahan
git add .

# Atau tambahkan file tertentu saja
git add app/page.tsx content/fleet.ts
```

### 3. Buat Commit
Gunakan pesan commit yang deskriptif sesuai konvensi umum:
```bash
# Contoh fitur baru
git commit -m "feat: tambah paket wisata baru di bandung"

# Contoh perbaikan bug / teks
git commit -m "fix: perbaiki link whatsapp pada tombol booking"

# Contoh pembaruan aset / styling
git commit -m "style: sesuaikan warna tombol hero cta"
```

### 4. Push ke GitHub
```bash
git push origin main
```

### 5. Deploy Perubahan ke VPS
Setelah kode aman di GitHub, rilis perubahan ke VPS:
```powershell
.\deploy\deploy-vps.ps1
```

---

## 🖥️ Operasional & Monitoring VPS

Jika Anda perlu masuk ke server VPS untuk memeriksa status atau troubleshooting:

### 1. Masuk ke VPS
```bash
ssh ovh
```

### 2. Cek Status Nginx
```bash
sudo systemctl status nginx
```

### 3. Cek Log Akses & Error Nginx
```bash
# Pantau error log secara realtime
sudo tail -f /var/log/nginx/error.log

# Pantau request pengunjung
sudo tail -f /var/log/nginx/access.log
```

### 4. Cek Rilis Aktif di VPS
```bash
# Melihat symlink rilis saat ini
ls -la /var/www/travelozy/current

# Melihat daftar riwayat rilis
ls -la /var/www/travelozy/releases/
```

### 5. Rollback Cepat ke Versi Sebelumnya (Bila Terjadi Masalah)
Jika rilis terbaru bermasalah dan Anda ingin kembali ke rilis sebelumnya dalam 1 detik:
```bash
# Arahkan symlink ke nama folder rilis lama
sudo ln -sfn /var/www/travelozy/releases/travelozy-<TIMESTAMP_LAMA> /var/www/travelozy/current

# Reload Nginx
sudo nginx -t && sudo systemctl reload nginx
```

---

## ☁️ Tips Cloudflare Cache (Purge Cache)

Website ini berada di balik CDN Cloudflare dengan mode *Full / Full (strict)*.

Aset statis seperti CSS, JS, dan gambar memiliki header `Cache-Control` yang agresif. Jika Anda sudah deploy tetapi perubahan CSS/gambar belum terlihat di browser klien:

1. Buka **Dashboard Cloudflare** > pilih domain **travelozy.my.id**.
2. Masuk ke menu **Caching** > **Configuration**.
3. Klik tombol **Purge Everything** (atau Purge URL tertentu).
4. Refresh browser dengan `Ctrl + F5` (Hard Reload).

---

## ❓ FAQ & Solusi Kendala

| Masalah | Penyebab | Solusi |
| :--- | :--- | :--- |
| `Build gagal; deployment dibatalkan` | Error sintaks TypeScript atau JSX di lokal | Jalankan `npm run typecheck` di terminal lokal untuk melihat baris kode yang error. |
| `Permission denied (publickey)` | SSH key belum terbaca | Pastikan SSH key `ovh` terdaftar di `~/.ssh/config` dan ssh-agent berjalan. |
| Halaman tidak berubah setelah deploy | Browser / Cloudflare menyimpan cache | Tekan `Ctrl + Shift + R` di browser atau lakukan *Purge Everything* di dashboard Cloudflare. |
| `ERR_TOO_MANY_REDIRECTS` di browser | Mode SSL Cloudflare diset ke "Flexible" | Masuk ke Cloudflare > **SSL/TLS**, ubah mode menjadi **Full** atau **Full (strict)**. |
| Nginx gagal reload | Ada salah pengetikan konfigurasi | Jalankan `sudo nginx -t` di VPS untuk mengetahui baris konfigurasi yang salah. |
