import Link from "next/link";

import { site } from "@/lib/site";

const navigation = [
  { label: "Karya", href: "/#karya" },
  { label: "Layanan", href: "/#layanan" },
  { label: "Kontak", href: "/#kontak" },
];

export function SiteHeader() {
  return (
    <header
      id="atas"
      className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md"
    >
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/"
          aria-label={`${site.name} — beranda`}
          className="group flex items-center gap-2.5"
        >
          <span
            aria-hidden
            className="h-2.5 w-2.5 bg-sosial transition-transform duration-300 ease-out group-hover:rotate-45"
          />
          <span className="font-mono text-[11px] uppercase tracking-[0.16em]">
            {site.shortName}
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft sm:inline">
            / Portofolio
          </span>
        </Link>

        <nav aria-label="Navigasi utama">
          <ul className="flex items-center gap-5 sm:gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
