import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/site";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_ORIGIN,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_ORIGIN}/gallery`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
      {
      url: `${SITE_ORIGIN}/samhithreddysangam`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...posts.map((post) => ({
      url: `${SITE_ORIGIN}/blog/${post.slug}`,
      lastModified: new Date(`${post.date}T00:00:00Z`),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
