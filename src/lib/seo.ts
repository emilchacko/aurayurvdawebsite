import type { Metadata } from "next";
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
  const canonical = `${siteUrl}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(`${siteUrl}/`),
    keywords: [
      "Ayurvedic clinic in Manjadi",
      "Ayurvedic doctor near Thiruvalla",
      "Ayurvedic treatments in Kerala",
      "Aura Ayurveda",
    ],
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/images/logo/image.png",
    },
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Aura Ayurveda",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: `${siteUrl}/doctor-lidiya-thomas.png`,
          width: 768,
          height: 768,
          alt: "Dr. Lidiya Thomas, Ayurveda Doctor at Aura Ayurveda in Manjadi, Kerala",
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
