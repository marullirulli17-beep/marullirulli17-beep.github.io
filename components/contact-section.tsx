import { contactChannels } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="kontak" className="border-b border-line">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:py-20">
        <div className="bg-sosial px-6 py-12 text-paper sm:px-10 lg:px-14 lg:py-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em]">
            03 — Kontak
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h2 className="display text-[clamp(2.1rem,6vw,4.75rem)]">
                Punya proyek yang perlu dirancang?
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="max-w-sm text-sm leading-relaxed">
                Terbuka untuk pekerjaan identitas visual, materi promosi, konten
                sosial, dan desain kemasan.
              </p>

              {contactChannels.length > 0 ? (
                <ul className="mt-7 flex flex-col gap-3">
                  {contactChannels.map((channel) => (
                    <li key={channel.href}>
                      <a
                        href={channel.href}
                        className="group inline-flex items-baseline gap-3 border-b border-paper/40 pb-1 transition-colors hover:border-paper"
                      >
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] opacity-75">
                          {channel.label}
                        </span>
                        <span className="text-sm">{channel.handle}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em]">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-paper" />
                  Terbuka untuk proyek baru
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
