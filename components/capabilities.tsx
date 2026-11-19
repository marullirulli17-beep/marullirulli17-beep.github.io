const services = [
  {
    title: "Identitas visual & logo",
    detail:
      "Perancangan logo, palet, tipografi, dan aturan penerapannya di berbagai medium.",
    tag: "Branding",
  },
  {
    title: "Poster & materi cetak",
    detail:
      "Poster, flyer, banner, standee, dan billboard yang dirancang untuk dibaca dari jarak nyata.",
    tag: "Cetak",
  },
  {
    title: "Konten sosial media",
    detail:
      "Sistem konten berulang — kartu berita, feed, dan kuis — yang tetap konsisten meski diproduksi harian.",
    tag: "Digital",
  },
  {
    title: "Kemasan & label",
    detail:
      "Label produk dan kemasan dengan susunan informasi yang jelas di permukaan kecil.",
    tag: "Kemasan",
  },
  {
    title: "Antarmuka web",
    detail:
      "Tampilan halaman e-commerce, katalog, dan rekrutmen yang menyatu dengan identitas merek.",
    tag: "Web",
  },
];

export function Capabilities() {
  return (
    <section id="layanan" className="border-b border-line">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="eyebrow">02 — Layanan</p>
            <h2 className="display mt-3 text-[clamp(1.9rem,4.2vw,3.25rem)]">
              Yang saya kerjakan
            </h2>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-soft">
              Satu alur dari konsep sampai berkas siap cetak atau siap unggah.
            </p>
          </div>

          <ol className="divide-y divide-line border-y border-line lg:col-span-8">
            {services.map((service, index) => (
              <li key={service.title}>
                <div className="grid grid-cols-[2.5rem_1fr] items-baseline gap-4 py-5 sm:grid-cols-[3.5rem_1fr_auto]">
                  <span
                    aria-hidden
                    className="font-mono text-[11px] tracking-[0.14em] text-ink-soft"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-soft">
                      {service.detail}
                    </p>
                  </div>
                  <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft sm:block">
                    {service.tag}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
