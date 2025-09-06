import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.dollystrategy.com";
  const routes = ["/", "/book", "/contatti", "/privacy"];
  const now = new Date();
  return routes.map((p) => ({ url: `${base}${p}`, lastModified: now, changeFrequency: "weekly", priority: p === "/" ? 1 : 0.7 }));
} 