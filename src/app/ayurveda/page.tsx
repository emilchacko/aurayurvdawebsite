import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { clinic } from "@/data/clinic";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Ayurveda Consultations in Thiruvalla | Aura Ayurveda",
  description: "Learn how a personalized Ayurvedic consultation works at Aura Ayurveda in Manjadi near Thiruvalla, Kerala, and ask the clinic about your next step.",
  path: "/ayurveda",
});

export default function AyurvedaPage() {
  return (
    <Container>
      <section className="py-10 sm:py-14">
        <SectionHeading
          as="h1"
          eyebrow="Ayurveda · Aura Ayurveda, Manjadi"
          title="Start with your questions, not a one-size-fits-all plan."
          description="An Ayurvedic consultation at Aura Ayurveda is a chance to discuss your concerns, health history and goals with Dr. Lidiya Thomas, then understand possible next steps. The right approach depends on an individual assessment."
        />

        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          <section className="border-t-2 border-[#a05435] bg-[#edf0e8] p-5">
            <h2 className="font-serif text-2xl text-[#1d3026]">A conversation</h2>
            <p className="mt-2 text-sm leading-6 text-[#58665c]">Explain what brings you in and ask questions about the consultation, services and practical details.</p>
          </section>
          <section className="border-t-2 border-[#a05435] bg-[#edf0e8] p-5">
            <h2 className="font-serif text-2xl text-[#1d3026]">An individual assessment</h2>
            <p className="mt-2 text-sm leading-6 text-[#58665c]">The doctor considers your circumstances before discussing whether any Ayurvedic care may be appropriate.</p>
          </section>
          <section className="border-t-2 border-[#a05435] bg-[#edf0e8] p-5">
            <h2 className="font-serif text-2xl text-[#1d3026]">Clear next steps</h2>
            <p className="mt-2 text-sm leading-6 text-[#58665c]">Ask about options, expected follow-up and when another health professional may be needed.</p>
          </section>
        </div>

        <p className="mt-6 max-w-3xl border-l-2 border-[#a05435] pl-4 text-sm leading-7 text-[#58665c]">This information is general and is not a diagnosis or a substitute for emergency or other appropriate medical care. Results vary, and no treatment outcome is guaranteed.</p>

        <div className="mt-8 flex flex-col gap-3 rounded-xl bg-[#214d3a] p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div><p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/70">Local Ayurvedic clinic</p><h2 className="mt-1 font-serif text-2xl">{clinic.location}</h2></div>
          <a href={getWhatsAppUrl("Hello, I would like to ask how an Ayurvedic consultation works at Aura Ayurveda in Manjadi.")} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#214d3a]">Ask on WhatsApp</a>
        </div>
      </section>
    </Container>
  );
}
