"use client";

import { motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";

import { LeadWork, WorkCard } from "@/components/work-card";
import {
  categories,
  categoryOrder,
  projects,
  type CategoryId,
} from "@/lib/projects";

type FilterId = CategoryId | "all";

const filters: { id: FilterId; label: string }[] = [
  { id: "all", label: "Semua" },
  ...categoryOrder.map((id) => ({ id, label: categories[id].label })),
];

export function WorkGallery() {
  const [active, setActive] = useState<FilterId>("all");
  const reduceMotion = useReducedMotion();

  const visible = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((project) => project.category === active),
    [active],
  );

  // Karya pembuka hanya dipakai bila sisa karya masih cukup untuk mengisi baris.
  const lead = visible.length >= 4 ? visible[0] : undefined;
  const rest = lead ? visible.slice(1) : visible;

  // Jumlah kolom mengikuti isi, supaya hasil filter sedikit tidak menyisakan
  // kolom kosong di kanan.
  const columnsClass =
    rest.length === 1
      ? "max-w-[38rem] columns-1"
      : rest.length === 2
        ? "columns-1 gap-x-6 sm:columns-2 lg:gap-x-8"
        : "columns-1 gap-x-6 sm:columns-2 lg:columns-3 lg:gap-x-8";

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 py-6">
        {filters.map((filter) => {
          const isActive = filter.id === active;
          const count =
            filter.id === "all"
              ? projects.length
              : projects.filter((project) => project.category === filter.id)
                  .length;

          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActive(filter.id)}
              aria-pressed={isActive}
              className={`inline-flex items-center gap-2 border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors ${
                isActive
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-ink-soft hover:border-ink hover:text-ink"
              }`}
            >
              {filter.label}
              <span className="opacity-60">
                {String(count).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        {visible.length} proyek ditampilkan.
      </p>

      {lead && (
        <motion.div
          key={`lead-${lead.slug}`}
          className="mb-8"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <LeadWork project={lead} />
        </motion.div>
      )}

      <div className={columnsClass}>
        {rest.map((project) => (
          <motion.div
            key={`${active}-${project.slug}`}
            className="mb-6 break-inside-avoid sm:mb-8"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <WorkCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
