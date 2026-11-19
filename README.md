# Portofolio Muhammad Marulli

Portofolio desain grafis Muhammad Marulli — identitas visual, materi promosi,
konten sosial media, kemasan, dan desain digital.

Situs statis Next.js yang dibangun dengan konsep **Ruang Cetak**: permukaan
kertas, tinta pekat, dan warna aksen yang diambil langsung dari karya aslinya.

**Live:** <https://marullirulli17-beep.github.io/>

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka <http://localhost:3000>.

```bash
npm run build   # hasil statis ditulis ke ./out
npm run lint
npx tsc --noEmit
```

Karena `output: "export"` aktif, hasil build berupa berkas statis di `out/`
tanpa server Node. Untuk memeriksa hasil build apa adanya:

```bash
python3 -m http.server 3200 --directory out
```

## Struktur

```
app/                 rute App Router (beranda, /work/[slug], 404, sitemap, robots)
components/          potongan UI (hero, galeri, kartu karya, footer, dsb.)
lib/projects.ts      data 10 karya terpilih + arsip lainnya
lib/site.ts          identitas situs, kanal kontak, tautan CV
public/images/       aset WebP hasil optimasi (cover + sheet per proyek)
public/documents/    CV dalam PDF
assets-source/       berkas sumber halaman portofolio (tidak ikut ter-build)
```

## Mengubah konten

- **Karya** — `lib/projects.ts`. Setiap entri memakai `category`, `slug`,
  `title`, `client`, `summary`, serta dimensi `cover`/`sheet`.
- **Kontak & CV** — `lib/site.ts`. Kanal yang dibiarkan kosong otomatis
  disembunyikan, jadi tidak pernah muncul tautan mati.
- **URL publik** — `.env.production` (`NEXT_PUBLIC_SITE_URL`). Nilai ini dipakai
  untuk metadata, `sitemap.xml`, dan `robots.txt`.

## Deploy

Setiap push ke `main` menjalankan `.github/workflows/deploy.yml`:
install dependensi → `npm run build` → unggah `out/` → deploy ke GitHub Pages.

Situs harus dilayani dari akar domain, jadi repositori ini bernama
`marullirulli17-beep.github.io` dan tidak memakai `basePath`.
