import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { siteUrl } from "@/lib/site";

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const canonicalPath = path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`;
  const canonical = `${siteUrl}${canonicalPath}`;

  return {
    title,
    description,
    metadataBase: new URL(`${siteUrl}/`),
    keywords: [
      "Ayurvedic clinic in Thiruvalla",
      "Ayurvedic doctor in Thiruvalla",
      "Ayurvedic treatments in Kerala",
      siteConfig.businessName,
    ],
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
    },
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.businessName,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: `${siteUrl}/doctor-lidiya-thomas.png`,
          width: 768,
          height: 768,
          alt: `${siteConfig.doctorName}, at ${siteConfig.businessName} in ${siteConfig.locationLabel}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/doctor-lidiya-thomas.png`],
    },
  };
}
