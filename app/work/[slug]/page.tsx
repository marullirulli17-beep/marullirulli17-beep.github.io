import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  categories,
  formatIndex,
  getAdjacentProject,
  getProject,
  getProjectIndex,
  projects,
  totalProjects,
  type Project,
} from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Proyek tidak ditemukan" };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.summary,
      url: `/work/${project.slug}`,
      images: [
        {
          // Versi 1200x630 di atas latar kertas, dalam JPEG: WebP tidak
          // selalu dirender oleh pratinjau tautan WhatsApp/LinkedIn.
          url: `/images/og/${project.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: project.cover.alt,
        },
      ],
    },
  };
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="eyebrow">{label}</dt>
      <dd className="mt-1.5 text-sm">{value}</dd>
    </div>
  );
}

function ProjectHeader({ project }: { project: Project }) {
  const category = categories[project.category];
  const index = getProjectIndex(project.slug);

  return (
    <header className="grid gap-10 py-10 lg:grid-cols-12 lg:gap-8 lg:py-14">
      <div className="lg:col-span-8">
        <p className="eyebrow flex items-center gap-2">
          <span
            aria-hidden
            className="h-2 w-2"
            style={{ backgroundColor: category.accent }}
          />
          {category.label}
        </p>

        <h1 className="display mt-4 text-[clamp(2.1rem,5.5vw,4.5rem)]">
          {project.title}
        </h1>

        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed">
          {project.description}
        </p>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
          {formatIndex(index)} / {formatIndex(totalProjects - 1)}
        </p>
      </div>

      <dl className="flex flex-col gap-6 border-line text-sm lg:col-span-4 lg:border-l lg:pl-8">
        {project.client && <MetaRow label="Klien" value={project.client} />}
        <MetaRow label="Kategori" value={category.label} />
        {project.year && <MetaRow label="Tahun" value={project.year} />}

        <div>
          <dt className="eyebrow">Lingkup</dt>
          <dd className="mt-2 flex flex-wrap gap-1.5">
            {project.deliverables.map((item) => (
              <span
                key={item}
                className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft"
              >
                {item}
              </span>
            ))}
          </dd>
        </div>
      </dl>
    </header>
  );
}

export default async function WorkPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const next = getAdjacentProject(project.slug);
  const nextCategory = categories[next.category];

  return (
    <article>
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="flex items-center justify-between gap-4 border-b border-line py-4">
          <Link
            href="/#karya"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-ink"
          >
            <span
              aria-hidden
              className="transition-transform group-hover:-translate-x-0.5"
            >
              ←
            </span>
            Semua karya
          </Link>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
            Lembar portofolio
          </p>
        </div>

        <ProjectHeader project={project} />
      </div>

      <div className="border-y border-line bg-paper-deep">
        <div className="mx-auto max-w-[1600px] sm:px-8 sm:py-8">
          <Image
            src={project.sheet.src}
            alt={project.sheet.alt}
            width={project.sheet.width}
            height={project.sheet.height}
            sizes="(max-width: 1600px) 100vw, 1600px"
            className="h-auto w-full sm:border sm:border-line"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <p className="py-4 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
          {project.sheetNote ?? `${project.title} — halaman lengkap`}
        </p>

        <Link
          href={`/work/${next.slug}`}
          className="group grid items-end gap-6 border-t border-line py-10 md:grid-cols-12 lg:py-14"
        >
          <div className="md:col-span-8">
            <p className="eyebrow">Proyek berikutnya</p>
            <p className="display mt-3 text-[clamp(1.6rem,4vw,2.75rem)] transition-colors group-hover:text-ink-soft">
              {next.title}
            </p>
          </div>
          <div className="flex items-center justify-between gap-4 md:col-span-4 md:justify-end">
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
              <span
                aria-hidden
                className="h-2 w-2"
                style={{ backgroundColor: nextCategory.accent }}
              />
              {nextCategory.label}
            </span>
            <span
              aria-hidden
              className="inline-flex h-9 w-9 items-center justify-center border border-ink transition-colors group-hover:bg-ink group-hover:text-paper"
            >
              →
            </span>
          </div>
        </Link>
      </div>
    </article>
  );
}
