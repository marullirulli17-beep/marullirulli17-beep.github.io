/**
 * Konfigurasi global situs.
 *
 * Isi nilai kontak di bawah sebelum situs dipublikasikan.
 * Selama masih kosong, UI akan menyembunyikan kanal tersebut
 * alih-alih menampilkan tautan yang rusak.
 */

function resolveSiteUrl(value: string | undefined): string {
  const fallback = "http://localhost:3000";

  if (!value) return fallback;

  try {
    return new URL(value).origin;
  } catch {
    return fallback;
  }
}

export type ContactChannel = {
  label: string;
  href: string;
  handle: string;
};

/** Ubah URL profil menjadi label pendek, mis. "@nama" untuk Instagram. */
function handleFrom(url: string): string {
  try {
    const parsed = new URL(url);
    const path = parsed.pathname.replace(/^\/|\/$/g, "");

    if (parsed.hostname.endsWith("instagram.com")) {
      return path ? `@${path.split("/")[0]}` : "@instagram";
    }

    return path || parsed.hostname;
  } catch {
    return url;
  }
}

function buildChannel(
  label: string,
  href: string,
  handle?: string,
): ContactChannel | null {
  if (!href) return null;

  return { label, href, handle: handle ?? handleFrom(href) };
}

/** Ubah nomor lokal/internasional menjadi tautan wa.me tanpa tanda baca. */
function whatsappHref(number: string): string {
  const digits = number.replace(/\D/g, "");

  if (!digits) return "";

  // Nomor Indonesia boleh ditulis 08xx atau +62 8xx.
  return `https://wa.me/${digits.startsWith("0") ? `62${digits.slice(1)}` : digits}`;
}

const email = "marulli.rulli17@gmail.com";
const whatsapp = "+62 858-1307-9193";
const instagram = "https://www.instagram.com/marullimuhammad/";
const linkedin = "";
const behance = "";

/** Berkas CV. Kosongkan bila belum tersedia, nanti tautannya disembunyikan. */
const cvUrl = "/documents/cv-muhammad-marulli-2026.pdf";

export const site = {
  name: "Muhammad Marulli",
  shortName: "Marulli",
  role: "Graphic Designer",
  discipline: "Identitas visual, materi promosi, dan konten digital",
  tagline:
    "Merancang identitas visual yang dicetak, dipasang, dan dibagikan.",
  description:
    "Portofolio desain grafis Muhammad Marulli — identitas visual, materi promosi, konten sosial media, kemasan, dan desain digital.",
  url: resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  email,
  whatsapp: buildChannel("WhatsApp", whatsappHref(whatsapp), whatsapp),
  cv: cvUrl ? { href: cvUrl, label: "CV" } : null,
  socials: [
    buildChannel("Instagram", instagram),
    buildChannel("LinkedIn", linkedin),
    buildChannel("Behance", behance),
  ].filter((channel): channel is ContactChannel => channel !== null),
};

export const contactChannels: ContactChannel[] = [
  ...(site.whatsapp ? [site.whatsapp] : []),
  ...(site.email
    ? [{ label: "Email", href: `mailto:${site.email}`, handle: site.email }]
    : []),
  ...site.socials,
];

export const hasContact = contactChannels.length > 0;
