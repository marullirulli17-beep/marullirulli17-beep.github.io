import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${site.name} — ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    "desain grafis",
    "graphic designer",
    "portofolio",
    "identitas visual",
    "branding",
    "desain poster",
    "konten sosial media",
    "desain kemasan",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    images: [
      {
        url: "/images/portrait.webp",
        width: 900,
        height: 900,
        alt: `Potret ${site.name}`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description: site.description,
    images: ["/images/portrait.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f4ee",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-[11px] focus:tracking-[0.14em] focus:text-paper focus:uppercase"
        >
          Lompat ke konten
        </a>

        <SiteHeader />

        <main id="konten" className="flex-1">
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}
