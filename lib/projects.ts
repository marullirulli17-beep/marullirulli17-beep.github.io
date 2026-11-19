export type CategoryId =
  | "social-media"
  | "promotional"
  | "branding"
  | "food-beverage"
  | "digital-design";

export type Category = {
  /** Label yang tampil di UI. */
  label: string;
  /** Warna aksen kategori, diambil dari karya aslinya. */
  accent: string;
  /** Warna teks yang aman di atas bidang aksen. */
  onAccent: string;
};

export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  client?: string;
  category: CategoryId;
  year?: string;
  /** Satu baris untuk kartu karya. */
  summary: string;
  /** Paragraf untuk halaman detail. */
  description: string;
  deliverables: string[];
  cover: ProjectImage;
  sheet: ProjectImage;
  /**
   * Keterangan di bawah lembar. Dipakai saat lembar adalah halaman portofolio
   * asli yang juga memuat karya klien lain, supaya keterangannya tidak
   * mengklaim seluruh halaman sebagai milik satu proyek.
   */
  sheetNote?: string;
};

export const categories: Record<CategoryId, Category> = {
  "social-media": {
    label: "Social Media",
    // #DB2227 hanya mencapai 4,48:1 terhadap kertas, tepat di bawah ambang
    // WCAG AA untuk teks kecil. Digelapkan 2% agar label 10px di atasnya lolos
    // (4,65:1) tanpa mengubah kesan warna aslinya.
    accent: "#D71F24",
    onAccent: "#F7F4EE",
  },
  promotional: {
    label: "Promosi",
    accent: "#E5CF22",
    onAccent: "#141414",
  },
  branding: {
    label: "Branding",
    accent: "#FC6502",
    onAccent: "#141414",
  },
  "food-beverage": {
    label: "Makanan & Minuman",
    accent: "#EB4034",
    onAccent: "#141414",
  },
  "digital-design": {
    label: "Desain Digital",
    accent: "#1A6D9C",
    onAccent: "#F7F4EE",
  },
};

export const categoryOrder: CategoryId[] = [
  "branding",
  "promotional",
  "social-media",
  "food-beverage",
  "digital-design",
];

const SHEET = { width: 1600, height: 1100 };

export const projects: Project[] = [
  {
    slug: "sujay-id",
    title: "SUJAY.ID — Identitas Apparel",
    client: "SUJAY.ID",
    category: "branding",
    summary:
      "Penerapan identitas apparel pada kaos dan merchandise, dengan slogan sebagai poros pesan.",
    description:
      "Penerapan identitas SUJAY.ID pada kaos dan merchandise, dengan slogan “Punya Niat Jalan Tanpa Alasan” sebagai poros pesan. Oranye menjadi warna pengikat seluruh materi, dari mockup kaos sampai label, sehingga satu potong produk tetap terasa bagian dari satu merek.",
    deliverables: ["Aplikasi logo", "Mockup kaos", "Merchandise", "Panduan warna"],
    cover: {
      src: "/images/projects/branding/sujay-id/cover.webp",
      width: 1600,
      height: 800,
      alt: "Lembar identitas SUJAY.ID: logo SJ, mockup kaos, dan deret uji warna di atas bidang oranye.",
    },
    sheet: {
      src: "/images/projects/branding/sujay-id/sheet.webp",
      ...SHEET,
      alt: "Lembar portofolio lengkap berisi penerapan identitas SUJAY.ID.",
    },
  },
  {
    slug: "ivoox-id",
    title: "IVOoxID — Sistem Konten Sosial",
    client: "IVOoxID",
    category: "social-media",
    year: "2023 – 2024",
    summary:
      "Kartu berita, feed, dan kuis interaktif untuk kanal berita sosial IVOoxID.",
    description:
      "Seri konten harian untuk IVOoxID: kartu berita ringkas, desain feed, dan kuis interaktif. Bahasannya bergerak cepat — isu Pemilu 2024, sepak bola, hari jadi kota, sampai hari besar keagamaan — sehingga seluruh materi diikat oleh satu sistem visual merah yang konsisten dan tetap terbaca di layar ponsel.",
    deliverables: [
      "Kartu berita sosial",
      "Desain feed",
      "Kuis interaktif",
      "Sistem warna & tipografi",
    ],
    cover: {
      src: "/images/projects/social-media/ivoox-id/cover.webp",
      width: 730,
      height: 400,
      alt: "Kartu konten media sosial IVOoxID dengan bidang merah dan tipografi besar.",
    },
    sheet: {
      src: "/images/projects/social-media/ivoox-id/sheet.webp",
      ...SHEET,
      alt: "Lembar portofolio lengkap berisi seri konten sosial IVOoxID.",
    },
  },
  {
    slug: "bca-umrah",
    title: "BCA Umrah — Kampanye Promosi",
    client: "PT. Berkah Cahaya Aulia Tour & Travel",
    category: "promotional",
    year: "2025",
    summary: "Poster, feed, dan banner untuk paket perjalanan umrah.",
    description:
      "Materi promosi paket umrah PT. Berkah Cahaya Aulia, mulai dari poster, banner, hingga konten feed. Palet mustard dipakai agar materi tetap terlihat di antara deretan informasi lain, sementara tipografi besar menjaga informasi utama tetap terbaca dari kejauhan.",
    deliverables: ["Poster", "Banner", "Konten feed", "Adaptasi ukuran cetak"],
    cover: {
      src: "/images/projects/promotional/bca-umrah/cover.webp",
      width: 466,
      height: 624,
      alt: "Poster kampanye umrah dengan latar mustard dan tipografi besar.",
    },
    sheet: {
      src: "/images/projects/promotional/bca-umrah/sheet.webp",
      ...SHEET,
      alt: "Lembar portofolio lengkap berisi rangkaian materi promosi BCA Umrah.",
    },
  },
  {
    slug: "miens-catering",
    title: "Miens Catering — Desain Perayaan",
    client: "Miens Catering",
    category: "food-beverage",
    summary:
      "Kartu ucapan dan materi perayaan ulang tahun untuk Miens Catering.",
    description:
      "Desain kartu ucapan dan materi perayaan untuk Miens Catering. Merah hangat dan ilustrasi ringan dipakai agar materi terasa akrab, bukan korporat — sesuai konteks acara keluarga dan ulang tahun yang jadi ranah layanan ini.",
    deliverables: ["Kartu ucapan", "Materi ulang tahun", "Aset cetak"],
    cover: {
      src: "/images/projects/food-beverage/miens-catering/cover.webp",
      width: 1600,
      height: 710,
      alt: "Deretan kartu ucapan Miens Catering dengan warna merah hangat.",
    },
    sheet: {
      src: "/images/projects/food-beverage/miens-catering/sheet.webp",
      ...SHEET,
      alt: "Lembar portofolio lengkap berisi materi perayaan Miens Catering.",
    },
  },
  {
    slug: "biro-jasa-kota-bambu",
    title: "Biro Jasa Kota Bambu — Materi Promosi",
    client: "Biro Jasa Kota Bambu / Arifana Rent Car",
    category: "promotional",
    summary:
      "Flyer dan konten feed untuk layanan biro jasa dan rental mobil.",
    description:
      "Materi promosi untuk dua layanan yang bertetangga: biro jasa dan rental mobil. Fokusnya kejelasan — daftar layanan dan kontak harus langsung terbaca, termasuk saat flyer dilihat sekilas atau dibagikan ulang di feed.",
    deliverables: ["Flyer", "Konten feed", "Daftar layanan"],
    cover: {
      src: "/images/projects/promotional/biro-jasa-kota-bambu/cover.webp",
      width: 1210,
      height: 724,
      alt: "Flyer promosi biro jasa dan rental mobil dengan daftar layanan.",
    },
    sheet: {
      src: "/images/projects/promotional/biro-jasa-kota-bambu/sheet.webp",
      ...SHEET,
      alt: "Lembar portofolio lengkap berisi materi promosi Biro Jasa Kota Bambu.",
    },
  },
  {
    slug: "binthen-indonesia",
    title: "Binthen Indonesia — Brand & Merchandise",
    client: "Binthen Indonesia",
    category: "branding",
    summary:
      "Standee, billboard, dan merchandise untuk merek tirai motorik.",
    description:
      "Penerapan identitas Binthen Indonesia di ruang fisik: standee, billboard, kaos, topi, gantungan kunci, pin, dan tenda. Satu sistem warna biru-navy menjaga semua material tetap terbaca sebagai satu merek, meski diproduksi dengan bahan dan ukuran yang berbeda.",
    deliverables: [
      "Standee",
      "Billboard",
      "Merchandise",
      "Tenda & materi pameran",
    ],
    cover: {
      src: "/images/projects/branding/binthen-indonesia/cover.webp",
      width: 844,
      height: 568,
      alt: "Standee dan billboard Binthen Indonesia dengan warna biru-navy.",
    },
    sheet: {
      src: "/images/projects/branding/binthen-indonesia/sheet.webp",
      ...SHEET,
      alt: "Lembar portofolio lengkap berisi aplikasi merek Binthen Indonesia.",
    },
  },
  {
    slug: "footwear-web",
    title: "Footwear — Web E-commerce & Rekrutmen",
    client: "Footwear",
    category: "digital-design",
    summary:
      "Tampilan e-commerce, halaman rekrutmen, dan storyboard ilustrasi.",
    description:
      "Desain antarmuka toko sepatu daring, dilengkapi halaman rekrutmen dan storyboard ilustrasi yang menyertainya. Katalog produk dan pesan rekrutmen disusun dalam satu bahasa visual yang sama, supaya tetap ringan dibaca di layar.",
    deliverables: [
      "Desain halaman e-commerce",
      "Halaman rekrutmen",
      "Storyboard ilustrasi",
    ],
    cover: {
      src: "/images/projects/digital-design/footwear-web/cover.webp",
      width: 1330,
      height: 1000,
      alt: "Tampilan situs e-commerce dan halaman rekrutmen Footwear.",
    },
    sheet: {
      src: "/images/projects/digital-design/footwear-web/sheet.webp",
      ...SHEET,
      alt: "Lembar portofolio gabungan: desain web Footwear di sisi kanan, bersama poster Bali dan storyboard iklan di sisi kiri.",
    },
    sheetNote:
      "Halaman portofolio asli — desain web Footwear ada di sisi kanan; sisi kiri memuat karya klien lain dari periode yang sama.",
  },
  {
    slug: "bali-travel",
    title: "Bali — Poster Perjalanan",
    category: "promotional",
    summary: "Poster perjalanan dengan ilustrasi lanskap Bali.",
    description:
      "Poster promosi perjalanan Bali dengan pendekatan ilustratif: lanskap, warna tropis, dan tipografi besar yang mengajak orang berhenti sejenak. Dirancang untuk bekerja di dua tempat sekaligus — dinding cetak dan layar.",
    deliverables: ["Poster", "Ilustrasi", "Tipografi"],
    cover: {
      src: "/images/projects/promotional/bali-travel/cover.webp",
      width: 848,
      height: 870,
      alt: "Poster perjalanan Bali dengan ilustrasi lanskap dan warna tropis.",
    },
    sheet: {
      src: "/images/projects/promotional/bali-travel/sheet.webp",
      ...SHEET,
      alt: "Lembar portofolio gabungan: poster Bali dan storyboard iklan di sisi kiri, bersama desain web Footwear di sisi kanan.",
    },
    sheetNote:
      "Halaman portofolio asli — kampanye Bali ada di sisi kiri; sisi kanan memuat karya klien lain dari periode yang sama.",
  },
  {
    slug: "local-geniuz",
    title: "Local Geniuz — Logo & Merchandise",
    client: "Local Geniuz",
    category: "branding",
    summary: "Lockup logo dan penerapannya pada merchandise.",
    description:
      "Perancangan dan penerapan logo Local Geniuz pada merchandise. Lockup dibuat sederhana agar tetap tajam di ukuran kecil — label, pin, dan sablon — tanpa kehilangan karakternya saat diperbesar.",
    deliverables: ["Lockup logo", "Aplikasi merchandise", "Aset vektor"],
    cover: {
      src: "/images/projects/branding/local-geniuz/cover.webp",
      width: 528,
      height: 292,
      alt: "Lockup logo Local Geniuz pada bidang terang.",
    },
    sheet: {
      src: "/images/projects/branding/local-geniuz/sheet.webp",
      ...SHEET,
      alt: "Lembar portofolio gabungan: logo Local Geniuz di baris bawah, bersama merchandise dan kemasan klien lain.",
    },
    sheetNote:
      "Halaman portofolio asli — logo Local Geniuz ada di baris bawah; halaman ini juga memuat karya klien lain.",
  },
  {
    slug: "herbal-1999",
    title: "Herbal 1999 — Label & Kemasan",
    client: "Herbal 1999",
    category: "food-beverage",
    summary: "Label dan kemasan produk herbal dengan susunan informasi berlapis.",
    description:
      "Label dan kemasan untuk produk Herbal 1999. Susunan informasinya dibuat berlapis supaya nama produk, varian, dan keterangan pendukung tetap terbaca di permukaan yang kecil — tanpa membuat label terasa penuh.",
    deliverables: ["Label", "Kemasan", "Susunan informasi produk"],
    cover: {
      src: "/images/projects/food-beverage/herbal-1999/cover.webp",
      width: 868,
      height: 484,
      alt: "Label dan kemasan produk Herbal 1999.",
    },
    sheet: {
      src: "/images/projects/food-beverage/herbal-1999/sheet.webp",
      ...SHEET,
      alt: "Lembar portofolio gabungan: label Herbal 1999 di sisi kanan, bersama merchandise dan kemasan klien lain.",
    },
    sheetNote:
      "Halaman portofolio asli — label Herbal 1999 ada di sisi kanan; halaman ini juga memuat karya klien lain.",
  },
];

export const totalProjects = projects.length;

/** Karya yang tidak masuk kurasi utama, ditampilkan sebagai arsip teks. */
export const archive: { title: string; note: string }[] = [
  {
    title: "Jersey BOLAC",
    note: "Desain jersey tim, tampil dalam lembar portofolio Local Geniuz.",
  },
  {
    title: "Poster Institut Sains & Teknologi Al-Kamal",
    note: "Poster informasi kampus.",
  },
  {
    title: "Storyboard ilustrasi Footwear",
    note: "Rangkaian panel ilustrasi untuk kebutuhan kampanye.",
  },
  {
    title: "Seri kartu Miens Catering",
    note: "Varian kartu di luar pilihan utama.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectIndex(slug: string): number {
  return projects.findIndex((project) => project.slug === slug);
}

export function formatIndex(value: number): string {
  return String(value + 1).padStart(2, "0");
}

export function getAdjacentProject(slug: string): Project {
  const index = getProjectIndex(slug);
  const next = index === projects.length - 1 ? 0 : index + 1;
  return projects[next];
}
