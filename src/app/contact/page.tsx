import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { LocationMapCards } from "@/components/content/location-map-cards";
import { ClinicJsonLd } from "@/components/seo/clinic-json-ld";
import { isConfiguredValue, siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: `Contact ${siteConfig.businessName} | Ayurveda Clinic in Manjadi, Thiruvalla`,
  description: `Call or WhatsApp ${siteConfig.businessName}, an Ayurvedic clinic in ${siteConfig.locationLabel}, to ask about appointments and directions.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <ClinicJsonLd />
      <Container>
        <section className="py-10 sm:py-14">
          <SectionHeading
            as="h1"
            eyebrow={`Visit ${siteConfig.businessName} · ${siteConfig.locationLabel}`}
            title="Contact the clinic and plan your visit."
            description={`Call or message ${siteConfig.businessName} to ask about a consultation, availability or directions to the clinic.`}
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-xl bg-[#edf0e8] p-5 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a05435]">Clinic contact</p>
              <h2 className="mt-2 font-serif text-3xl text-[#1d3026]">{siteConfig.businessName}</h2>
              <address className="mt-3 text-sm not-italic leading-6 text-[#58665c]">
                {siteConfig.address.display}
              </address>
              <p className="mt-1 text-sm text-[#58665c]">{siteConfig.locationLabel}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex min-h-14 items-center justify-center rounded-full bg-[#214d3a] px-4 py-2 text-center text-sm font-semibold text-white"
                >
                  Call {siteConfig.phone}
                </a>
                <a
                  href={getWhatsAppUrl(`Hello, I would like to enquire about ${siteConfig.businessName}. Please share appointment availability and visit details.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-14 items-center justify-center rounded-full border border-[#214d3a] bg-white px-4 py-2 text-center text-sm font-semibold text-[#214d3a]"
                >
                  WhatsApp the clinic
                </a>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-14 items-center justify-center rounded-full border border-[#214d3a] bg-white px-4 py-2 text-center text-sm font-semibold text-[#214d3a]"
                >
                  Get directions
                </a>
              </div>
              {siteConfig.englishConsultation ? (
                <p className="mt-3 text-sm leading-6 text-[#58665c]">
                  {siteConfig.englishConsultationLabel}.
                </p>
              ) : null}

              {isConfiguredValue(siteConfig.email) ? (
                <p className="mt-4 text-sm text-[#58665c]">
                  Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </p>
              ) : null}
              <div className="mt-5 border-t border-[#d1d9ce] pt-4">
                <h3 className="text-sm font-semibold text-[#34463b]">Opening hours</h3>
                <p className="mt-1 text-sm leading-6 text-[#58665c]">
                  {siteConfig.openingHours.display}
                </p>
                <p className="mt-2 text-xs leading-5 text-[#58665c]">
                  {siteConfig.openingHours.note}
                </p>
              </div>
              <div className="mt-5 border-t border-[#d1d9ce] pt-4">
                <h3 className="text-sm font-semibold text-[#34463b]">Areas served</h3>
                <p className="mt-1 text-sm leading-6 text-[#58665c]">
                  {siteConfig.serviceAreas.join(", ")}.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#d1d9ce] pt-4">
                <a
                  href={siteConfig.googleBusinessProfileReviewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-[#214d3a] underline underline-offset-4"
                >
                  Review us on Google
                </a>
                <a
                  href="/review-qr/"
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-[#214d3a] underline underline-offset-4"
                >
                  Print our review QR code
                </a>
              </div>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-2xl text-[#1d3026]">
                Both locations and their maps
              </h2>
              <LocationMapCards />
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
