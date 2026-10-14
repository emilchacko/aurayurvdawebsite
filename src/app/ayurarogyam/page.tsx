import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/site";

const pageTitle =
  "Ayurarogyam Ayurveda Clinic in Manakachira, Thiruvalla";
const pageDescription =
  "Learn about Ayurarogyam, the sister Ayurveda clinic to Aura Ayurveda in Manakachira near Thiruvalla. Find location details, opening hours and a WhatsApp enquiry link.";
const canonicalUrl = `${siteConfig.siteUrl}/ayurarogyam/`;

const baseMetadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/ayurarogyam",
});

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    siteName: `${siteConfig.sisterConcern.name} · ${siteConfig.businessName}`,
    type: "website",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: pageTitle,
    description: pageDescription,
  },
};

const ayurarogyamSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: siteConfig.sisterConcern.name,
  url: canonicalUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.sisterConcern.address,
    addressLocality: "Thiruvalla",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 14:00-18:00",
  sameAs: [siteConfig.sisterConcern.mapUrl, siteConfig.socialLinks[1]],
  parentOrganization: {
    "@type": "MedicalClinic",
    name: siteConfig.businessName,
    url: siteConfig.siteUrl,
  },
};

const whatsappUrl = getWhatsAppUrl(
  `Hello, I would like to enquire about Ayurarogyam at ${siteConfig.sisterConcern.location}. Please share appointment availability and visit details.`,
);

export default function AyurarogyamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ayurarogyamSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Container>
        <section className="grid gap-8 py-10 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a05435]">
              A sister concern of {siteConfig.businessName}
            </p>
            <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-[#1d3026] sm:text-5xl">
              Ayurarogyam Ayurveda Clinic in Manakachira
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#58665c]">
              Ayurarogyam is the general Ayurveda clinic at Manakachira, near
              Thiruvalla. It is a sister concern of {siteConfig.businessName},
              which has a separate focus on skin, hair and wellness. Contact
              the clinic to ask about a consultation, available care and
              whether a visit may suit your needs.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#214d3a] px-5 text-sm font-semibold text-white"
              >
                Ask about Ayurarogyam on WhatsApp
              </a>
              <a
                href={siteConfig.sisterConcern.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#214d3a] px-5 text-sm font-semibold text-[#214d3a]"
              >
                View Ayurarogyam on Google Maps
              </a>
            </div>
            <p className="mt-3 max-w-xl text-xs leading-5 text-[#58665c]">
              WhatsApp enquiries use the shared clinic contact line. Mention
              Ayurarogyam so the team can help with the correct location.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#d8ded4] bg-white shadow-sm">
            <iframe
              src={siteConfig.sisterConcern.mapEmbedUrl}
              title={`Map showing ${siteConfig.sisterConcern.name} at ${siteConfig.sisterConcern.address}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] w-full border-0"
            />
            <div className="p-5 sm:p-6">
              <h2 className="font-serif text-2xl text-[#1d3026]">
                Visit Ayurarogyam
              </h2>
              <address className="mt-2 text-sm not-italic leading-6 text-[#58665c]">
                {siteConfig.sisterConcern.address}
              </address>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#a05435]">
                Opening hours
              </p>
              <p className="mt-1 text-sm leading-6 text-[#34463b]">
                {siteConfig.sisterConcern.openingHours}
              </p>
              <p className="mt-1 text-xs text-[#58665c]">
                Hours are in India Standard Time (IST).
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#d8ded4] bg-[#f4f3ed] py-10 sm:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a05435]">
              General Ayurveda care
            </p>
            <h2 className="mt-2 max-w-2xl font-serif text-3xl text-[#1d3026] sm:text-4xl">
              Begin with a conversation about your needs.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#58665c]">
              A consultation is an opportunity to explain your concerns, share
              relevant health history and ask questions. Recommendations depend
              on individual assessment; the clinic can explain what care is
              available and whether it may be appropriate before you decide.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              <article className="border-t-2 border-[#a05435] bg-white p-5">
                <h3 className="font-serif text-2xl text-[#1d3026]">
                  Share your concerns
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#58665c]">
                  Tell the doctor what brings you in, your health history and
                  any care or medicines you already use.
                </p>
              </article>
              <article className="border-t-2 border-[#a05435] bg-white p-5">
                <h3 className="font-serif text-2xl text-[#1d3026]">
                  Discuss possible care
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#58665c]">
                  Ask what options may be available, what they involve and
                  whether another health professional should also be consulted.
                </p>
              </article>
              <article className="border-t-2 border-[#a05435] bg-white p-5">
                <h3 className="font-serif text-2xl text-[#1d3026]">
                  Confirm the practical details
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#58665c]">
                  Message ahead to check appointment availability, the right
                  location and any visit details before travelling.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="grid gap-6 rounded-xl bg-[#214d3a] p-6 text-white sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
                Local clinic · Manakachira
              </p>
              <h2 className="mt-2 font-serif text-3xl">
                Have a question before visiting?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85">
                Send an enquiry for Ayurarogyam to check availability, care
                details or directions. Please seek urgent medical care for
                severe or sudden symptoms; this page is general information and
                is not medical advice.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#214d3a]"
            >
              WhatsApp Ayurarogyam enquiry
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center font-semibold text-[#214d3a] underline underline-offset-4"
            >
              About {siteConfig.businessName}
            </Link>
            <a
              href={siteConfig.socialLinks[1]}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center font-semibold text-[#214d3a] underline underline-offset-4"
            >
              Follow Ayurarogyam on Instagram
            </a>
          </div>
        </section>
      </Container>
    </>
  );
}
