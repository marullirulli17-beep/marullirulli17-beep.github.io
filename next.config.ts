import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Situs ini dibangun sebagai berkas statis lalu dilayani GitHub Pages.
  output: "export",
  // GitHub Pages tidak punya optimizer gambar Next.js.
  images: { unoptimized: true },
  // Hasilkan /work/slug/index.html supaya URL tanpa ekstensi tetap terbuka.
  trailingSlash: true,
  experimental: {
    agentFeedback: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
