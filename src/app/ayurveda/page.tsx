import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: `Ayurveda Consultations in Thiruvalla | ${siteConfig.businessName}`,
  description: `Learn how to ask about Ayurvedic consultations at ${siteConfig.businessName} in ${siteConfig.locationLabel}.`,
  path: "/ayurveda",
});

export default function AyurvedaPage() {
  return (
    <Container>
      <section className="py-10 sm:py-14">
        <SectionHeading
          as="h1"
          eyebrow={`Ayurveda · ${siteConfig.businessName}, Thiruvalla`}
          title="Personalized Ayurvedic care starts with a consultation."
          description={`At ${siteConfig.businessName}, ${siteConfig.doctorName} reviews your concerns, health history and goals, then explains an Ayurvedic care plan tailored to your individual assessment.`}
        />

        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          <section className="border-t-2 border-[#a05435] bg-[#edf0e8] p-5">
            <h2 className="font-serif text-2xl text-[#1d3026]">A conversation</h2>
            <p className="mt-2 text-sm leading-6 text-[#58665c]">Explain what brings you in and ask questions about the consultation, services and practical details.</p>
          </section>
          <section className="border-t-2 border-[#a05435] bg-[#edf0e8] p-5">
            <h2 className="font-serif text-2xl text-[#1d3026]">An individual assessment</h2>
            <p className="mt-2 text-sm leading-6 text-[#58665c]">The doctor considers your circumstances and explains the Ayurvedic care plan recommended for you.</p>
          </section>
          <section className="border-t-2 border-[#a05435] bg-[#edf0e8] p-5">
            <h2 className="font-serif text-2xl text-[#1d3026]">Clear next steps</h2>
            <p className="mt-2 text-sm leading-6 text-[#58665c]">Discuss your care plan, follow-up and any coordination with other health professionals.</p>
          </section>
        </div>

        <div className="mt-8 flex flex-col gap-3 rounded-xl bg-[#214d3a] p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div><p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/70">Clinic consultations</p><h2 className="mt-1 font-serif text-2xl">{siteConfig.locationLabel}</h2></div>
          <a href={getWhatsAppUrl(`Hello, I would like to ask how an Ayurvedic consultation works at ${siteConfig.businessName} in ${siteConfig.locationLabel}.`)} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#214d3a]">Ask on WhatsApp</a>
        </div>
      </section>
    </Container>
  );
}
