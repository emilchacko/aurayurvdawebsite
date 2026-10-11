import type { MetadataRoute } from "next";
import { treatments } from "@/content/treatments";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

const indexablePaths = [
  "/",
  "/about/",
  "/ayurveda/",
  "/contact/",
  "/doctor/",
  "/store/",
  "/treatments/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...indexablePaths.map((path) => ({
      url: `${siteConfig.siteUrl}${path}`,
    })),
    ...treatments.map((treatment) => ({
      url: `${siteConfig.siteUrl}/treatments/${treatment.slug}/`,
    })),
  ];
}
