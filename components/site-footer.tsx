import { contactChannels, site } from "@/lib/site";

export function SiteFooter() {
  // Situs ini dirender sekali saat build (static export), jadi tahun aman
  // dibaca langsung dan ikut terbarui setiap kali situs di-deploy ulang.
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="flex flex-col gap-10 py-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="display text-[clamp(1.75rem,4vw,2.75rem)]">
              {site.name}
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
              {site.role} — {site.discipline}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            {contactChannels.length > 0 && (
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {contactChannels.map((channel) => (
                  <li key={channel.href}>
                    <a
                      href={channel.href}
                      className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-ink"
                    >
                      {channel.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {site.cv && (
              <a
                href={site.cv.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Buka CV ${site.name} (PDF) di tab baru`}
                className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-ink"
              >
                {site.cv.label}
                <span aria-hidden className="transition-transform group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            )}
            <a
              href="#atas"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-ink"
            >
              Kembali ke atas
              <span aria-hidden className="transition-transform group-hover:-translate-y-0.5">
                ↑
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line py-5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <p>Desain & kode: {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
