import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Ayurveda | Aura Ayurveda",
  description: "A simple explanation of Ayurveda, personalized care, and how it can support everyday wellness.",
  path: "/ayurveda",
});

export default function AyurvedaPage() {
  return (
    <Container>
      <section className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Ayurveda"
          title="A personalized and preventive approach to everyday wellness."
          description="Ayurveda is best understood as a way of looking at the individual, their habits, and their health in context. At Aura Ayurveda, the focus is on thoughtful assessment and individual care."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            "What is Ayurveda?",
            "What happens during consultation?",
            "How is treatment personalized?",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-[#e5dccf] bg-[#fffaf4] p-6">
              <h3 className="font-serif text-2xl text-[#1a2a2a]">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-[#536260]">
                This section will be expanded with final educational content once the clinic’s approach and editorial priorities are confirmed.
              </p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
