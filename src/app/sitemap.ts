import type { MetadataRoute } from "next";
import { seoLocations } from "@/lib/seoLocations";

const baseUrl = "https://prestonsrunclub.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/run-info", "/waiver", "/merch"];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const locationEntries = seoLocations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...locationEntries];
}
