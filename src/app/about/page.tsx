import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About | Aura Ayurveda",
  description: "Learn more about Aura Ayurveda, the local Ayurvedic clinic in Manjadi near Thiruvalla.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Container>
      <section className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="About the clinic"
          title="A trusted local Ayurvedic clinic built around personalized care."
          description="Aura Ayurveda is being developed as a welcoming, doctor-led wellness clinic for people seeking thoughtful Ayurvedic support for hair, skin, women’s wellness, pregnancy and postnatal care, joint and muscle wellness, and everyday health."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            "Doctor-led assessment and treatment planning",
            "Warm, calm clinic experience",
            "Natural, modern Ayurvedic approach",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-[#e5dccf] bg-[#fffaf4] p-6 text-[#263332] shadow-sm">
              <p className="text-base font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
