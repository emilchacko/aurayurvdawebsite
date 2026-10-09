import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { clinic } from "@/data/clinic";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact an Ayurvedic Clinic in Thiruvalla | Aura Ayurveda",
  description: "Call or WhatsApp Aura Ayurveda to enquire about an Ayurvedic consultation, services and appointments in Manjadi near Thiruvalla, Kerala. Find the clinic and get directions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Container>
      <section className="py-10 sm:py-14">
        <SectionHeading
          as="h1"
          eyebrow="Visit Aura Ayurveda · Manjadi, Thiruvalla"
          title="Ask a question before you plan your visit."
          description="Call or message the clinic to ask about an Ayurvedic consultation, available services, appointment times or directions."
        />

        <div className="mt-7 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col rounded-xl bg-[#edf0e8] p-5 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a05435]">Clinic contact</p>
            <h2 className="mt-2 font-serif text-3xl text-[#1d3026]">Aura Ayurveda</h2>
            <p className="mt-3 text-sm leading-6 text-[#58665c]">{clinic.address}</p>
            <p className="mt-1 text-sm text-[#58665c]">{clinic.location}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="flex min-h-14 flex-col justify-center rounded-lg bg-white px-4 py-2">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#788378]">Call the clinic</span>
                <span className="mt-1 text-sm font-semibold text-[#214d3a]">{clinic.phone}</span>
              </a>
              <a href={getWhatsAppUrl("Hello, I would like to enquire about Aura Ayurveda in Manjadi. Please share appointment availability and visit details.")} target="_blank" rel="noreferrer" className="flex min-h-14 flex-col justify-center rounded-lg bg-white px-4 py-2">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#788378]">WhatsApp</span>
                <span className="mt-1 text-sm font-semibold text-[#214d3a]">Message the clinic</span>
              </a>
            </div>

            <p className="mt-5 text-xs leading-6 text-[#58665c]">Clinic hours can vary by location. Please call or message to confirm today’s availability and where to visit before travelling.</p>
            <a href={clinic.googleReviewsUrl} target="_blank" rel="noreferrer" className="mt-auto inline-flex min-h-11 items-center pt-4 text-sm font-semibold text-[#214d3a] underline underline-offset-4">Read Google reviews</a>
          </div>

          <div className="rounded-xl border border-[#d8ded4] bg-white p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a05435]">Find us</p>
                <h2 className="mt-1 font-serif text-2xl text-[#1d3026]">Manjadi, near Thiruvalla</h2>
              </div>
              <a href={clinic.mapUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#cbd4c9] px-4 text-sm font-semibold text-[#214d3a]">Open map</a>
            </div>
            <iframe
              src={clinic.mapEmbedUrl}
              title="Map showing Aura Ayurveda in Manjadi, near Thiruvalla, Kerala"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-4 aspect-[4/3] w-full rounded-lg border-0 sm:aspect-[16/9] lg:aspect-auto lg:h-[26rem]"
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
