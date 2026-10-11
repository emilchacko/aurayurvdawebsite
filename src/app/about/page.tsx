import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { isConfiguredValue, siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: `About ${siteConfig.businessName} | Ayurveda Clinic in Manjadi, Thiruvalla`,
  description: `Learn about ${siteConfig.businessName} and how to enquire about Ayurvedic care in ${siteConfig.locationLabel}.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <Container>
      <section className="py-10 sm:py-14">
        <SectionHeading
          as="h1"
          eyebrow={`About ${siteConfig.businessName} · ${siteConfig.locationLabel}`}
          title="Care starts with listening and a proper consultation."
          description={`${siteConfig.businessName} is an Ayurvedic clinic in ${siteConfig.locationLabel}. ${siteConfig.doctorName} meets with people to understand their concerns and discuss suitable next steps before care is recommended.`}
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
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/70">Your Ayurveda doctor</p>
            <h2 className="mt-1 font-serif text-2xl">{siteConfig.doctorName}</h2>
            <p className="mt-1 text-sm text-white/80">
              {isConfiguredValue(siteConfig.doctorQualification)
                ? `${siteConfig.doctorQualification} · `
                : ""}
              {siteConfig.locationLabel}
            </p>
          </div>
          <a href={getWhatsAppUrl(`Hello, I would like to ask about an Ayurvedic consultation at ${siteConfig.businessName} in ${siteConfig.locationLabel}.`)} target="_blank" rel="noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#214d3a]">Ask about a consultation</a>
        </div>

        <div className="mt-8 grid gap-6 rounded-xl border border-[#d8ded4] bg-[#faf9f5] p-5 sm:p-7 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a05435]">Sister concern</p>
            <h2 className="mt-2 font-serif text-3xl text-[#1d3026] sm:text-4xl">{siteConfig.sisterConcern.name}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#58665c]">
              {siteConfig.sisterConcern.name} is the sister concern of {siteConfig.businessName} and provides a separate location for Ayurvedic care enquiries.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#58665c]">
              Contact the clinic to confirm which location is appropriate for your visit and to ask about availability.
            </p>
            <div className="mt-5 inline-flex items-center rounded-full bg-[#edf0e8] px-4 py-2 text-sm font-semibold text-[#214d3a]">
              {siteConfig.sisterConcern.location}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#d8ded4] bg-white p-3 shadow-sm">
            <div className="mb-3 flex items-center justify-between gap-3 px-1">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a05435]">Location map</p>
                <p className="mt-1 text-sm font-medium text-[#34463b]">{siteConfig.sisterConcern.name}, Manakachira</p>
              </div>
              <a href={siteConfig.sisterConcern.mapUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#214d3a] underline underline-offset-4">Open map</a>
            </div>
            <iframe
              src={siteConfig.sisterConcern.mapEmbedUrl}
              title={`${siteConfig.sisterConcern.name} location map`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] w-full rounded-lg border-0"
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
