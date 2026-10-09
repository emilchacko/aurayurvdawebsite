import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { TreatmentTemplate } from "@/components/treatments/treatment-template";
import { treatments } from "@/content/treatments";
import { buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = treatments.find((item) => item.slug === slug);

  if (!treatment) {
    return buildMetadata({
      title: "Treatment not found | Aura Ayurveda",
      description: "This treatment page could not be found.",
      path: "/treatments",
    });
  }

  return buildMetadata({
    title: `${treatment.title} | Aura Ayurveda`,
    description: treatment.shortDescription,
    path: `/treatments/${treatment.slug}`,
  });
}

export default async function TreatmentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = treatments.find((item) => item.slug === slug);

  if (!treatment) {
    notFound();
  }

  return (
    <Container>
      <section className="py-16 sm:py-20">
        <TreatmentTemplate treatment={treatment} />
      </section>
    </Container>
  );
}
