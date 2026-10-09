import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { clinic } from "@/data/clinic";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact | Aura Ayurveda",
  description: "Contact Aura Ayurveda to book a consultation, call the clinic, or get directions in Manjadi near Thiruvalla.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Container>
      <section className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Contact"
          title="Book a consultation or visit the clinic."
          description="Call, WhatsApp, or visit Aura Ayurveda at the clinic address below to plan your consultation."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#e5dccf] bg-[#fffaf4] p-8">
            <h3 className="font-serif text-3xl text-[#1a2a2a]">Aura Ayurveda</h3>
            <p className="mt-4 text-base leading-8 text-[#536260]">{clinic.address}</p>
            <p className="mt-2 text-base text-[#536260]">{clinic.location}</p>
            <ul className="mt-6 space-y-3 text-sm text-[#2d3837]">
              <li>
                Phone: <a href="tel:+919600233308" className="underline underline-offset-4">{clinic.phone}</a>
              </li>
              <li>
                WhatsApp: <a href={clinic.whatsappUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4">{clinic.whatsapp}</a>
              </li>
              <li>Clinic hours: {clinic.openingHours}</li>
            </ul>
            <a
              href={clinic.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-[#1d4f3a] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#163d30]"
            >
              Read our Google reviews
            </a>
          </div>

          <div className="rounded-3xl border border-[#e5dccf] bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#496d56]">Clinic location</p>
              <a
                href={clinic.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-[#1d4f3a] underline underline-offset-4"
              >
                Open in Google Maps
              </a>
            </div>
            <iframe
              src={clinic.mapEmbedUrl}
              title="Aura Ayurveda location on Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-4 h-72 w-full rounded-2xl border-0"
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
