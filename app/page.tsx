import { Capabilities } from "@/components/capabilities";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { ServiceMarquee } from "@/components/service-marquee";
import { WorkGallery } from "@/components/work-gallery";
import { archive, categories, totalProjects } from "@/lib/projects";

const categoryCount = Object.keys(categories).length;

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceMarquee />

      <section id="karya" className="border-b border-line">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:py-20">
          <Reveal className="flex flex-col gap-6 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">01 — Karya</p>
              <h2 className="display mt-3 text-[clamp(1.9rem,4.2vw,3.25rem)]">
                Karya terpilih
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
              Kurasi {totalProjects} proyek dari {categoryCount} kategori. Setiap
              kartu membuka lembar portofolio lengkapnya.
            </p>
          </Reveal>

          <WorkGallery />

          <div className="mt-14 border-t border-line pt-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="eyebrow">Arsip lain</p>
              <p className="eyebrow">Termuat dalam lembar portofolio</p>
            </div>

            <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
              {archive.map((item, index) => (
                <li key={item.title} className="border-b border-line py-3">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[10px] tracking-[0.14em] text-ink-soft">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-ink-soft">
                        {item.note}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Capabilities />

      <ContactSection />
    </>
  );
}
