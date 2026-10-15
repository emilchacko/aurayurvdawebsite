import Image from "next/image";
import Link from "next/link";
import { ClinicJsonLd } from "@/components/seo/clinic-json-ld";
import { VisitingKeralaInfo } from "@/components/content/visiting-kerala-info";
import { RelatedArticles } from "@/components/content/related-content";
import { Container } from "@/components/ui/container";
import { kalariFaq, kalariSessionText } from "@/content/kalari";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl, withBasePath } from "@/lib/site";
import { doctor } from "@/data/doctor";

const canonical = `${siteConfig.siteUrl}/treatments/kalari-varma-massage/`;

const breadcrumbItems = [
  { name: "Home", item: `${siteConfig.siteUrl}/` },
  { name: "Treatments", item: `${siteConfig.siteUrl}/treatments/` },
  { name: "Kalari Marma (Varma) Massage", item: canonical },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: kalariFaq.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kalari marma (varma) massage",
    provider: {
      "@type": "MedicalClinic",
      name: siteConfig.businessName,
      url: siteConfig.siteUrl,
    },
    areaServed: ["Thiruvalla", "Kerala"],
  },
];

const phoneLink = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
const whatsappLink = getWhatsAppUrl(
  `Hello, I would like to ask about a Kalari marma (varma) massage consultation at ${siteConfig.businessName} in ${siteConfig.locationLabel}.`,
);

export function KalariVarmaPage() {
  return (
    <>
      <ClinicJsonLd />
      {structuredData.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      <Container>
        <article className="pb-14 sm:pb-20">
          <header className="py-8 sm:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a05435]">
              Traditional Kerala therapy · {siteConfig.locationLabel}
            </p>
            <h1 className="mt-3 max-w-4xl font-serif text-4xl leading-[1.1] text-[#1d3026] sm:text-5xl">
              Kalari Marma (Varma) Massage in Kerala
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[#58665c] sm:text-lg sm:leading-8">
              Kalari marma massage, also called varma massage, is a Kerala
              Ayurvedic massage connected to kalaripayattu. At Aura Ayurveda
              in Thiruvalla, each session begins with a doctor
              consultation and is planned around your needs and health
              history.{" "}
              {siteConfig.englishConsultation
                ? siteConfig.englishConsultationLabel
                : ""}
            </p>
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#214d3a] px-5 text-sm font-semibold text-white"
              >
                WhatsApp {siteConfig.whatsapp}
              </a>
              <a
                href={phoneLink}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#214d3a] bg-white px-5 text-sm font-semibold text-[#214d3a]"
              >
                Call {siteConfig.phone}
              </a>
              <Link
                href="/contact/"
                data-track-action="booking"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#a05435] bg-white px-5 text-sm font-semibold text-[#8d462f]"
              >
                Book consultation
              </Link>
            </div>
            <p className="mt-3 text-sm text-[#58665c]">
              {siteConfig.englishConsultation
                ? siteConfig.englishConsultationText
                : ""}
            </p>
          </header>

          <div className="space-y-8">
            <section className="grid items-center gap-6 border-t border-[#d8ded4] pt-8 md:grid-cols-[1.05fr_0.95fr]">
              <div>
                <h2 className="font-serif text-3xl text-[#1d3026]">
                  What is Kalari marma / varma massage?
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#58665c]">
                  Kalari refers to the traditional training space of
                  kalaripayattu, Kerala&rsquo;s martial art. Marma or varma
                  refers to vital points of the body described in traditional
                  Indian texts. Kerala is the south Indian state where this
                  therapy developed as part of a wider tradition of hands-on
                  care.
                </p>
                <p className="mt-3 text-sm leading-7 text-[#58665c]">
                  Kalari marma massage is a hands-on practice with roots in
                  Kerala&rsquo;s kalaripayattu tradition. The doctor plans
                  each session after an individual consultation.
                </p>
                <p className="mt-3 text-sm leading-7 text-[#58665c]">
                  If you are comparing approaches, read about{" "}
                  <Link
                    href="/treatments/panchakarma-massage/"
                    className="font-semibold text-[#214d3a] underline underline-offset-4"
                  >
                    Ayurvedic Panchakarma Massage
                  </Link>
                  . You can also read our visitor&rsquo;s{" "}
                  <Link
                    href="/blog/kalari-marma-massage-kerala/"
                    className="font-semibold text-[#214d3a] underline underline-offset-4"
                  >
                    guide to Kalari marma massage
                  </Link>
                  .
                </p>
              </div>
              <Image
                src={withBasePath("/images/focus-areas/ayurvedic-therapies.jpg")}
                alt="Illustrative Ayurvedic massage image; not a photograph of a Kalari session at Aura Ayurveda"
                width={900}
                height={620}
                sizes="(max-width: 767px) 100vw, 45vw"
                className="aspect-[1.45/1] w-full rounded-lg object-cover"
              />
            </section>

            <section className="border-t border-[#d8ded4] pt-8">
              <h2 className="font-serif text-3xl text-[#1d3026]">
                What does a session involve at Aura Ayurveda?
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#58665c]">
                {kalariSessionText}
              </p>
            </section>

            <section className="border-t border-[#d8ded4] pt-8">
              <h2 className="font-serif text-3xl text-[#1d3026]">
                Who should check with the doctor first?
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#58665c]">
                Before a consultation, tell the doctor if you are pregnant,
                have an injury, have had recent surgery, have a skin condition,
                have high blood pressure or a heart condition, or take
                blood-thinning medicines. These details help the doctor plan
                your session and identify anything that needs further
                discussion.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[#58665c]">
                Continue any prescribed treatment and seek medical advice for
                health concerns, including serious or sudden symptoms.
              </p>
            </section>

            <section className="border-t border-[#d8ded4] pt-8">
              <h2 className="font-serif text-3xl text-[#1d3026]">
                Kalari marma and other Kerala therapies
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#58665c]">
                Kerala has a range of Ayurvedic therapies. Panchakarma,
                abhyanga oil massage and Kalari marma massage are distinct
                practices with different approaches. The doctor explains
                these options and plans care around your needs.
              </p>
            </section>

            <section className="rounded-xl border border-[#d8ded4] bg-[#edf0e8] p-5 sm:p-7">
              <h2 className="font-serif text-3xl text-[#1d3026]">
                Visiting Kerala from abroad?
              </h2>
              <div className="mt-4">
                <VisitingKeralaInfo />
              </div>
            </section>

            <section className="grid items-center gap-5 border-t border-[#d8ded4] pt-8 sm:grid-cols-[auto_1fr]">
              <Image
                src={withBasePath(doctor.photo)}
                alt={`${siteConfig.doctorName} at ${siteConfig.businessName}`}
                width={192}
                height={192}
                className="size-28 rounded-full object-cover object-top"
              />
              <div>
                <h2 className="font-serif text-3xl text-[#1d3026]">
                  Meet the doctor
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#58665c]">
                  {siteConfig.doctorName} discusses your concerns and health
                  history before deciding whether a Kalari session is
                  appropriate. Read{" "}
                  <Link
                    href="/doctor/"
                    className="font-semibold text-[#214d3a] underline underline-offset-4"
                  >
                    the doctor&rsquo;s profile
                  </Link>{" "}
                  for the existing clinic information. Any treatment decision
                  is made after individual assessment.
                </p>
              </div>
            </section>

            <section className="border-t border-[#d8ded4] pt-8">
              <h2 className="font-serif text-3xl text-[#1d3026]">
                Frequently asked questions
              </h2>
              <div className="mt-4 divide-y divide-[#d8ded4] border-y border-[#d8ded4]">
                {kalariFaq.map((faq) => (
                  <details key={faq.question} className="group py-4">
                    <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#1d3026] [&::-webkit-details-marker]:hidden">
                      {faq.question}
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-xl text-[#a05435] group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="pb-2 pt-3 text-sm leading-7 text-[#58665c]">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            <section className="border-t border-[#d8ded4] pt-8">
              <h2 className="font-serif text-3xl text-[#1d3026]">
                Location and contact
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#58665c]">
                Aura Ayurveda is at {siteConfig.address.display}. The clinic
                hours and directions are listed above; please arrange an
                appointment before visiting.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#58665c]">
                <a
                  href={phoneLink}
                  className="font-semibold text-[#214d3a] underline underline-offset-4"
                >
                  Call {siteConfig.phone}
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#214d3a] underline underline-offset-4"
                >
                  WhatsApp {siteConfig.whatsapp}
                </a>
                <Link
                  href="/contact/"
                  className="font-semibold text-[#214d3a] underline underline-offset-4"
                >
                  Contact Aura Ayurveda
                </Link>
              </div>
            </section>

            <RelatedArticles treatmentSlug="kalari-varma-massage" />

            <section className="rounded-xl bg-[#214d3a] p-5 text-white sm:p-7">
              <h2 className="font-serif text-3xl text-white">
                Ask whether a consultation is right for you
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/90">
                Contact Aura Ayurveda in Thiruvalla to discuss
                your questions and arrange a consultation for a personalized
                Kalari session.
              </p>
              <Link
                href="/contact/"
                data-track-action="booking"
                className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#214d3a]"
              >
                Book consultation
              </Link>
            </section>

            <p className="text-sm italic leading-6 text-[#58665c]">
              This page is for general information and is not a substitute for
              medical advice.
            </p>
          </div>
        </article>
      </Container>
    </>
  );
}
