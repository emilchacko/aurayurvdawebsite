import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { treatments } from "@/content/treatments";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

const lastModified = new Date("2026-10-12T00:00:00.000Z");

const indexablePaths = [
  "/",
  "/about/",
  "/ayurveda/",
  "/blog/",
  "/contact/",
  "/doctor/",
  "/store/",
  "/treatments/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...indexablePaths.map((path) => ({
      url: `${siteConfig.siteUrl}${path}`,
      ...(path === "/blog/"
        ? {
            lastModified: new Date(
              `${blogPosts.reduce(
                (latest, post) =>
                  post.updatedDate > latest ? post.updatedDate : latest,
                "1970-01-01",
              )}T00:00:00.000Z`,
            ),
          }
        : { lastModified }),
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.siteUrl}/blog/${post.slug}/`,
      lastModified: new Date(`${post.updatedDate}T00:00:00.000Z`),
    })),
    ...treatments.map((treatment) => ({
      url: `${siteConfig.siteUrl}/treatments/${treatment.slug}/`,
      lastModified: new Date(
        `${treatment.updatedDate ?? "2026-10-12"}T00:00:00.000Z`,
      ),
    })),
  ];
}
