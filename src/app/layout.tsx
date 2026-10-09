import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StickyCta } from "@/components/layout/sticky-cta";
import { buildMetadata } from "@/lib/seo";
import { clinic } from "@/data/clinic";
import "./globals.css";

export const metadata: Metadata = buildMetadata({
  title: "Ayurvedic Clinic in Manjadi, Thiruvalla | Aura Ayurveda",
  description:
    "Meet Dr. Lidiya Thomas at Aura Ayurveda, a local Ayurvedic clinic in Manjadi near Thiruvalla, Kerala. Explore consultations, hair and skin care, therapies and women’s wellness.",
  path: "/",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#faf9f5] pb-16 text-[#1d3026] md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: clinic.name,
              alternateName: clinic.secondaryName,
              url: "https://emilchacko.github.io/aurayurvdawebsite/",
              telephone: clinic.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: clinic.streetAddress,
                addressLocality: clinic.addressLocality,
                addressRegion: clinic.addressRegion,
                postalCode: clinic.postalCode,
                addressCountry: clinic.addressCountry,
              },
              knowsAbout: ["Ayurveda", "Ayurvedic consultations", "Hair and scalp care", "Skin care", "Women’s wellness"],
              areaServed: ["Manjadi", "Thiruvalla", "Pathanamthitta district", "Kerala"],
              sameAs: [clinic.googleReviewsUrl],
            }).replace(/</g, "\\u003c"),
          }}
        />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyCta />
        </div>
      </body>
    </html>
  );
}
