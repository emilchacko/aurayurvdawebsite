import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { TreatmentTemplate } from "@/components/treatments/treatment-template";
import { PrasavarakshaPage } from "@/components/treatments/prasavaraksha-page";
import { treatments } from "@/content/treatments";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

const prasavarakshaTitle =
  "Prasavaraksha (Ayurvedic Postnatal Care) in Thiruvalla | Aura Ayurveda, Manjadi";
const prasavarakshaDescription =
  "Ask about prasavaraksha and postnatal Ayurvedic care in Thiruvalla and Manjadi. Call or WhatsApp Aura Ayurveda to discuss a consultation.";

export async function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = treatments.find((item) => item.slug === slug);

  if (!treatment) {
    return buildMetadata({
      title: `Treatment not found | ${siteConfig.businessName}`,
      description: "This treatment page could not be found.",
      path: "/treatments",
    });
  }

  if (slug === "prasavaraksha") {
    return buildMetadata({
      title: prasavarakshaTitle,
      description: prasavarakshaDescription,
      path: `/treatments/${slug}`,
    });
  }

  return buildMetadata({
    title: `${treatment.title} in Thiruvalla | ${siteConfig.businessName}`,
    description: `${treatment.shortDescription} Enquire at ${siteConfig.businessName} in ${siteConfig.locationLabel}.`,
    path: `/treatments/${treatment.slug}`,
  });
}

export default async function TreatmentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = treatments.find((item) => item.slug === slug);

  if (!treatment) {
    notFound();
  }

  if (slug === "prasavaraksha") {
    return <PrasavarakshaPage />;
  }

  return (
    <Container>
      <section className="py-16 sm:py-20">
        <TreatmentTemplate treatment={treatment} />
      </section>
    </Container>
  );
}
