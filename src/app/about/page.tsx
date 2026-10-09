import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { clinic } from "@/data/clinic";
import { doctor } from "@/data/doctor";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About Aura Ayurveda | Ayurvedic Clinic in Manjadi, Thiruvalla",
  description: "Learn about Aura Ayurveda, Dr. Lidiya Thomas and our consultation-first approach to Ayurvedic care in Manjadi near Thiruvalla, Kerala.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Container>
      <section className="py-10 sm:py-14">
        <SectionHeading
          as="h1"
          eyebrow="About Aura Ayurveda · Manjadi, Kerala"
          title="Care starts with listening and a proper consultation."
          description="Aura Ayurveda is a local Ayurvedic clinic in Manjadi, near Thiruvalla. Dr. Lidiya Thomas meets with people to understand their concerns and discuss suitable next steps before care is recommended."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Talk it through", "Share your concerns, health goals and questions directly with the doctor."],
            ["Understand your options", "Ask how a consultation works and whether a service may suit your needs."],
            ["Plan the next step", "Discuss appointment availability, follow-up and what to expect before visiting."],
          ].map((item) => (
            <div key={item[0]} className="border-t-2 border-[#a05435] bg-[#edf0e8] p-5 text-[#34463b]">
              <h2 className="font-serif text-2xl">{item[0]}</h2>
              <p className="mt-2 text-sm leading-6 text-[#58665c]">{item[1]}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-xl bg-[#214d3a] p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/70">Your local Ayurveda doctor</p>
            <h2 className="mt-1 font-serif text-2xl">{doctor.name}</h2>
            <p className="mt-1 text-sm text-white/80">{doctor.qualification} · {clinic.location}</p>
          </div>
          <a href={getWhatsAppUrl("Hello, I would like to ask about an Ayurvedic consultation at Aura Ayurveda in Manjadi.")} target="_blank" rel="noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#214d3a]">Ask about a consultation</a>
        </div>
      </section>
    </Container>
  );
}
