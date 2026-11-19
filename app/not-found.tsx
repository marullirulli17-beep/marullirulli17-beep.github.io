import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col items-start px-5 py-20 sm:px-8 lg:py-28">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 text-[clamp(2.25rem,8vw,5.5rem)]">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft">
        Tautan yang Anda buka tidak tersedia atau sudah dipindahkan. Kembali ke
        beranda untuk melihat seluruh karya.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 bg-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-paper transition-colors hover:bg-sosial"
      >
        Kembali ke beranda
        <span aria-hidden>→</span>
      </Link>
    </section>
  );
}
