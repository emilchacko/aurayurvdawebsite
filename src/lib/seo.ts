import type { Metadata } from "next";

const siteUrl = "https://emilchacko.github.io";
const basePath =
  process.env.GITHUB_ACTIONS === "true" &&
  process.env.GITHUB_REPOSITORY === "emilchacko/aurayurvdawebsite"
    ? "/aurayurvdawebsite"
    : "";

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const canonical = `${siteUrl}${basePath}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(`${siteUrl}${basePath}/`),
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
          url: `${siteUrl}${basePath}/doctor-lidiya-thomas.png`,
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
      images: [`${siteUrl}${basePath}/doctor-lidiya-thomas.png`],
    },
  };
}
