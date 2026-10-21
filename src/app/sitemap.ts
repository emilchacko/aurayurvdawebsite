import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { malayalamPostSlugs } from "@/content/blog-ml";
import { treatments } from "@/content/treatments";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

const lastModified = new Date("2026-10-12T00:00:00.000Z");

const indexablePaths = [
  "/",
  "/about/",
  "/ayurveda/",
  "/ayurarogyam/",
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
      ...(path === "/ayurarogyam/"
        ? { lastModified: new Date("2026-10-14T00:00:00.000Z") }
        : path === "/blog/"
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
    ...blogPosts.flatMap((post) => {
      const lastModified = new Date(`${post.updatedDate}T00:00:00.000Z`);
      const englishUrl = `${siteConfig.siteUrl}/blog/${post.slug}/`;

      if (!malayalamPostSlugs.includes(post.slug)) {
        return [{ url: englishUrl, lastModified }];
      }

      const malayalamUrl = `${siteConfig.siteUrl}/ml/blog/${post.slug}/`;
      const alternates = { languages: { en: englishUrl, ml: malayalamUrl } };

      return [
        { url: englishUrl, lastModified, alternates },
        { url: malayalamUrl, lastModified, alternates },
      ];
    }),
    ...treatments.map((treatment) => ({
      url: `${siteConfig.siteUrl}/treatments/${treatment.slug}/`,
      lastModified: new Date(
        `${treatment.updatedDate ?? "2026-10-12"}T00:00:00.000Z`,
      ),
    })),
  ];
}
