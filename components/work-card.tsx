import Image from "next/image";
import Link from "next/link";

import { categories, type Project } from "@/lib/projects";

/** Label kategori dengan kotak warna aksen. */
function CategoryTag({ project }: { project: Project }) {
  const category = categories[project.category];

  return (
    <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
      <span
        aria-hidden
        className="h-2 w-2 shrink-0"
        style={{ backgroundColor: category.accent }}
      />
      {category.label}
    </span>
  );
}

type WorkCardProps = {
  project: Project;
};

export function WorkCard({ project }: WorkCardProps) {
  const category = categories[project.category];

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block"
      aria-label={`${project.title} — lihat proyek`}
    >
      <div className="relative overflow-hidden border border-line bg-paper-deep">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          width={project.cover.width}
          height={project.cover.height}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-between gap-4 px-4 py-2.5 transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0"
          style={{ backgroundColor: category.accent, color: category.onAccent }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.14em]">
            Lihat proyek
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em]">
            →
          </span>
        </div>
      </div>

      <div className="mt-3">
        <h3 className="text-[16px] leading-snug font-semibold tracking-tight text-pretty">
          {project.title}
        </h3>

        <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">
          {project.client ?? project.summary}
        </p>

        <div className="mt-2">
          <CategoryTag project={project} />
        </div>
      </div>
    </Link>
  );
}

/**
 * Karya pembuka: gambar lebar dengan kolom keterangan di sampingnya.
 * Rasio gambar dijaga apa adanya supaya tidak terpotong.
 */
export function LeadWork({ project }: WorkCardProps) {
  const category = categories[project.category];

  return (
    <article className="grid gap-6 border-b border-line pb-8 lg:grid-cols-12 lg:gap-8 lg:pb-10">
      <Link
        href={`/work/${project.slug}`}
        className="group block lg:col-span-8"
        aria-label={`${project.title} — lihat proyek`}
      >
        <div className="relative overflow-hidden border border-line bg-paper-deep">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            width={project.cover.width}
            height={project.cover.height}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        </div>
      </Link>

      <div className="flex flex-col justify-between gap-6 lg:col-span-4 lg:border-l lg:border-line lg:pl-8">
        <div>
          <CategoryTag project={project} />

          <h3 className="display mt-4 text-[clamp(1.5rem,3vw,2.35rem)]">
            <Link
              href={`/work/${project.slug}`}
              className="transition-colors hover:text-ink-soft"
            >
              {project.title}
            </Link>
          </h3>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            {project.summary}
          </p>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.deliverables.slice(0, 4).map((item) => (
              <li
                key={item}
                className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={`/work/${project.slug}`}
          className="group inline-flex w-fit items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em]"
        >
          <span
            aria-hidden
            className="h-2 w-2 transition-transform duration-300 group-hover:rotate-45"
            style={{ backgroundColor: category.accent }}
          />
          Lihat lembar lengkap
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
