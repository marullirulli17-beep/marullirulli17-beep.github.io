import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export const dynamic = "force-static";

const baseUrl = site.url.replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
