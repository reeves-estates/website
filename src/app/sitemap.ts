import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://reevesestates.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-18"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-03-24"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/neighborhoods/river-oaks`,
      lastModified: new Date("2026-05-14"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/neighborhoods/tanglewood`,
      lastModified: new Date("2026-05-14"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/neighborhoods/memorial`,
      lastModified: new Date("2026-05-14"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/neighborhoods/west-university`,
      lastModified: new Date("2026-05-14"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/neighborhoods/bellaire`,
      lastModified: new Date("2026-05-14"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/neighborhoods/upper-kirby`,
      lastModified: new Date("2026-05-14"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/neighborhoods/museum-district`,
      lastModified: new Date("2026-05-14"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/neighborhoods/montrose`,
      lastModified: new Date("2026-05-14"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
