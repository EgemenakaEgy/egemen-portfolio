import type { MetadataRoute } from "next";

// Domain: egemendemir.de — siehe layout.tsx.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://egemendemir.de";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
