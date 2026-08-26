# ⚡ Next.js Modern Portfolio Website

Website portofolio profesional generasi baru yang dibangun menggunakan **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Lucide React**, dan **Glassmorphism Design System**.

---

## 🌟 Fitur Utama

- ⚡ **Next.js 14 App Router**: Arsitektur komponen modern berbasis React Server/Client Components.
- 🌓 **Dark & Light Mode**: Toggle tema instan dengan sinkronisasi ke `localStorage`.
- ⌨️ **Typing Animation**: Efek teks mengetik peran dinamis di Hero section.
- 📁 **Interactive Project Showcase**: Filter kategori proyek (*Web*, *Mobile*, *UI/UX*, *Backend*) dan pop-up modal detail interaktif.
- 📊 **Skills & Timeline**: Indikator persentase keahlian dan riwayat pengalaman & pendidikan yang elegan.
- 💬 **Interactive Contact Form & Toast**: Form pesan dengan validasi dan notifikasi toast status pengiriman.
- 📱 **100% Fully Responsive**: Optimal di smartphone, tablet, laptop, dan layar monitor besar.
- 🛠️ **Type-Safe Configuration**: Seluruh data dapat diubah dengan mudah di `src/lib/data.ts`.

---

## 🚀 Cara Menjalankan di Localhost

Pastikan Anda berada di direktori proyek:
`C:\Users\Hype\.gemini\antigravity\scratch\portfolio-nextjs`

```powershell
# 1. Jalankan Development Server
npm run dev

# 2. Buka browser di http://localhost:3000
```

---

## ✏️ Cara Mengubah Data Portofolio

Buka file **`src/lib/data.ts`**:
- Ubah nama, peran, deskripsi bio, foto avatar, dan akun sosial media.
- Tambahkan atau ubah data proyek pada array `projects`.
- Sesuaikan keahlian pada array `skills`.
- Perbarui riwayat karir dan pendidikan pada array `timeline`.
- Perbarui kontak pada objek `contact`.

---

## 🌐 Cara Build & Deploy ke Vercel (Gratis)

1. Upload proyek ke GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit Next.js portfolio"
   git branch -M main
   git remote add origin https://github.com/username/portfolio-nextjs.git
   git push -u origin main
   ```
2. Buka [Vercel](https://vercel.com) dan impor repository GitHub Anda.
3. Klik **Deploy** — Vercel akan otomatis mengenali Next.js dan men-deploy portofolio Anda secara live!
