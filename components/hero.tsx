import Image from "next/image";
import Link from "next/link";

import { totalProjects } from "@/lib/projects";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="flex items-center justify-between gap-4 border-b border-line py-4">
          <p className="eyebrow">Portofolio — {totalProjects} karya terpilih</p>
          <p className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft sm:flex">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-sosial" />
            Terbuka untuk proyek
          </p>
        </div>

        <div className="grid gap-10 pt-10 pb-12 lg:grid-cols-12 lg:items-end lg:gap-8 lg:pt-14 lg:pb-16">
          <div className="lg:col-span-8">
            <h1 className="display text-[clamp(2.75rem,10.5vw,9rem)]">
              <span className="block">Muhammad</span>
              <span className="block">Marulli</span>
            </h1>

            <div className="mt-8 flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-start sm:justify-between">
              <p className="max-w-md text-[15px] leading-relaxed">
                {site.tagline} Karya di bawah ini datang dari klien nyata — travel
                umrah, katering, apparel, biro jasa, sampai kanal berita.
              </p>

              <div className="flex shrink-0 flex-wrap items-center gap-x-4 gap-y-3">
                <Link
                  href="#karya"
                  className="inline-flex items-center gap-2 bg-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-paper transition-colors hover:bg-sosial"
                >
                  Lihat karya
                  <span aria-hidden>↓</span>
                </Link>
                <Link
                  href="#kontak"
                  className="inline-flex items-center border border-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors hover:bg-ink hover:text-paper"
                >
                  Kontak
                </Link>
                {site.cv && (
                  <a
                    href={site.cv.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Buka CV ${site.name} (PDF) di tab baru`}
                    className="inline-flex items-center gap-1.5 px-1 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
                  >
                    {site.cv.label}
                    <span aria-hidden>↗</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="mx-auto w-full max-w-[360px] lg:mr-0 lg:ml-auto">
              <Image
                src="/images/portrait.webp"
                alt={`Potret ${site.name}`}
                width={900}
                height={900}
                preload
                sizes="(max-width: 1024px) 360px, 360px"
                className="h-auto w-full mix-blend-multiply"
              />
              <p className="mt-3 border-t border-line pt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
                {site.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
