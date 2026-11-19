import type { MetadataRoute } from "next";

import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const baseUrl = site.url.replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${baseUrl}/work/${project.slug}/`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
