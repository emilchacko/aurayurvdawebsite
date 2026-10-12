import { siteConfig } from "@/config/site";

export function ClinicJsonLd() {
  const { address, geo, openingHours, serviceAreas, socialLinks } = siteConfig;
  const hasGeo = geo.latitude !== null && geo.longitude !== null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: siteConfig.businessName,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    ...(hasGeo
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: geo.latitude,
            longitude: geo.longitude,
          },
        }
      : {}),
    ...(openingHours.specifications.length > 0
      ? { openingHoursSpecification: openingHours.specifications }
      : {}),
    areaServed: serviceAreas,
    sameAs: [...socialLinks, siteConfig.googleBusinessProfileReviewUrl],
    medicalSpecialty: "Ayurvedic",
    ...(siteConfig.englishConsultation
      ? { availableLanguage: "English" }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
