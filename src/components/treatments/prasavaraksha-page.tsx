import Image from "next/image";
import Link from "next/link";
import { ClinicJsonLd } from "@/components/seo/clinic-json-ld";
import { Container } from "@/components/ui/container";
import { RelatedArticles } from "@/components/content/related-content";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl, withBasePath } from "@/lib/site";

const faqs = [
  {
    question: "When can prasavaraksha care start after delivery?",
    answer:
      "The doctor decides the timing after assessing your delivery and recovery. Please also follow the advice of your maternity-care team.",
  },
  {
    question: "Is this suitable after a C-section?",
    answer:
      "The doctor considers each mother's delivery and recovery, including after a C-section, before planning care. Share your maternity-care team's instructions and continue following their advice.",
  },
  {
    question: "What treatments are included?",
    answer:
      "Care includes the mother's abhyanga (massage) and medicated water bath, postnatal medicines and skin-care packs for the mother, and diet advice based on the mother and baby's conditions. The doctor plans care individually.",
  },
  {
    question: "Is massage and bath also provided for the baby?",
    answer:
      "The baby's care includes massage and a medicated water bath. The doctor considers the baby's individual condition when planning care; continue to follow advice from your baby's healthcare team.",
  },
  {
    question: "What postnatal medicines are given?",
    answer:
      "The doctor recommends postnatal medicines for the mother after an individual assessment and explains them during the consultation.",
  },
  {
    question: "What diet advice is provided?",
    answer:
      "Diet advice is based on the individual conditions of the mother and baby. Discuss their needs with the doctor rather than relying on a general diet plan.",
  },
  {
    question: "How do I book, and what should I bring?",
    answer:
      "Call or WhatsApp Aura Ayurveda to arrange a consultation. Bring or have available any advice from your maternity-care team that you would like to discuss; the doctor can guide you on any other information relevant to your assessment. പ്രസവരക്ഷ is a Malayalam term associated with traditional postnatal care.",
  },
] as const;

const breadcrumbItems = [
  { name: "Home", item: `${siteConfig.siteUrl}/` },
  { name: "Treatments", item: `${siteConfig.siteUrl}/treatments/` },
  {
    name: "Prasavaraksha",
    item: `${siteConfig.siteUrl}/treatments/prasavaraksha/`,
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
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
];

const phoneLink = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
const whatsappLink = getWhatsAppUrl(
  `Hello, I would like to ask about prasavaraksha (postnatal Ayurvedic care) at ${siteConfig.businessName} in ${siteConfig.locationLabel}.`,
);

export function PrasavarakshaPage() {
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
          <section aria-labelledby="prasavaraksha-intro" className="py-8 sm:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a05435]">
              Postnatal care · Thiruvalla
            </p>
            <h1
              id="prasavaraksha-intro"
              className="mt-3 max-w-4xl font-serif text-4xl leading-[1.1] text-[#1d3026] sm:text-5xl"
            >
              Prasavaraksha: Ayurvedic Postnatal Care in Thiruvalla
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[#58665c] sm:text-lg sm:leading-8">
              Prasavaraksha (പ്രസവരക്ഷ) is traditional postnatal care offered
              at Aura Ayurveda in Thiruvalla. The care includes
              abhyanga (massage) and a medicated water bath for the mother and
              baby, along with postnatal medicines and diet advice tailored to
              their individual conditions. The doctor assesses each mother and
              baby individually and decides the appropriate timing and care.
              Continue to follow advice from your maternity-care and baby-care
              teams.
            </p>
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
              <a
                href={phoneLink}
                aria-label={`Call ${siteConfig.businessName} at ${siteConfig.phone}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#214d3a] px-5 text-sm font-semibold text-white transition hover:bg-[#183b2c]"
              >
                Call
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#214d3a] bg-white px-5 text-sm font-semibold text-[#214d3a] transition hover:bg-[#edf0e8]"
              >
                WhatsApp
              </a>
              <Link
                href="/contact/"
                data-track-action="booking"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#a05435] bg-white px-5 text-sm font-semibold text-[#8d462f] transition hover:bg-[#f8eee8]"
              >
                Book Consultation
              </Link>
            </div>
          </section>

          <section
            aria-labelledby="what-is-prasavaraksha"
            className="grid items-center gap-6 border-t border-[#d8ded4] py-8 sm:py-10 md:grid-cols-[1.05fr_0.95fr]"
          >
            <div>
              <h2
                id="what-is-prasavaraksha"
                className="font-serif text-3xl text-[#1d3026]"
              >
                What is prasavaraksha?
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#58665c]">
                In Kerala, prasavaraksha is a traditional approach to care
                after childbirth. It brings together care for the mother and
                baby, with the exact timing and recommendations considered
                individually by the doctor.
              </p>
              <p className="mt-3 text-sm leading-7 text-[#58665c]">
                You may also see it written as “prasava raksha” or described
                as “postnatal Ayurveda care”.
              </p>
              <p className="mt-3 text-sm leading-7 text-[#58665c]">
                At Aura Ayurveda, this includes massage and a medicated water
                bath for both mother and baby, as well as guidance and
                postnatal care for the mother. Recommendations are discussed
                after the doctor considers the mother&rsquo;s and baby&rsquo;s conditions.
              </p>
            </div>
            <Image
              src={withBasePath("/images/focus-areas/pregnancy-postnatal.jpg")}
              alt="Illustrative postnatal-care image; not a photograph of Aura Ayurveda or a treatment"
              width={900}
              height={620}
              sizes="(max-width: 767px) 100vw, 45vw"
              className="aspect-[1.45/1] w-full rounded-lg object-cover"
            />
          </section>

          <section
            aria-labelledby="care-includes"
            className="border-t border-[#d8ded4] py-8 sm:py-10"
          >
            <h2
              id="care-includes"
              className="font-serif text-3xl text-[#1d3026]"
            >
              What our prasavaraksha care includes
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#58665c]">
              Prasavaraksha at Aura Ayurveda includes the following elements.
              The doctor assesses the mother and baby individually and
              discusses care in light of their conditions.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Mother's abhyanga (massage) with a medicated water bath",
                "Baby's massage with a medicated water bath",
                "Postnatal medicines for the mother to support strength during recovery, as advised by the doctor",
                "Diet advice based on the conditions of the mother and baby",
                "Postnatal packs for stretch-mark and skin-care concerns",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-[#d8ded4] bg-white p-4 text-sm leading-6 text-[#34463b]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#58665c]">
              Parents can discuss the baby&rsquo;s massage and bath with the
              doctor, who considers the baby&rsquo;s condition when discussing
              this care. The mother can also ask about the postnatal medicines,
              packs, and diet advice considered for her. The doctor assesses
              both mother and baby individually before deciding on care.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#58665c]">
              The doctor discusses the care and medicines with each family.
              For other services, see{" "}
              <Link
                href="/treatments/panchakarma-massage/"
                className="font-semibold text-[#214d3a] underline underline-offset-4"
              >
                Ayurvedic Panchakarma Massage
              </Link>{" "}
              and{" "}
              <Link
                href="/treatments/kalari-varma-massage/"
                className="font-semibold text-[#214d3a] underline underline-offset-4"
              >
                Kalari Varma Massage
              </Link>
              .
            </p>
          </section>

          <section
            aria-labelledby="who-for"
            className="border-t border-[#d8ded4] py-8 sm:py-10"
          >
            <h2 id="who-for" className="font-serif text-3xl text-[#1d3026]">
              Who it is for and when to start
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#58665c]">
              Mothers and babies may be considered for this traditional
              postnatal care after either a vaginal delivery or a C-section.
              The doctor assesses each mother and baby individually, taking
              their conditions into account.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#58665c]">
              The doctor decides when care should start after assessment.
              Continue to follow your maternity-care team&rsquo;s guidance, and
              contact them or an appropriate medical service about urgent
              concerns.
            </p>
          </section>

          <section
            aria-labelledby="meet-doctor"
            className="border-t border-[#d8ded4] py-8 sm:py-10"
          >
            <h2 id="meet-doctor" className="font-serif text-3xl text-[#1d3026]">
              Meet the doctor
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#58665c]">
              The doctor assesses each mother and baby individually and
              discusses care based on their conditions. Read{" "}
              <Link
                href="/doctor/"
                className="font-semibold text-[#214d3a] underline underline-offset-4"
              >
                the doctor&rsquo;s profile
              </Link>{" "}
              or visit the{" "}
              <Link
                href="/treatments/"
                className="font-semibold text-[#214d3a] underline underline-offset-4"
              >
                treatments overview
              </Link>{" "}
              to learn about other clinic services.
            </p>
          </section>

          <section
            aria-labelledby="how-to-book"
            className="border-t border-[#d8ded4] py-8 sm:py-10"
          >
            <h2 id="how-to-book" className="font-serif text-3xl text-[#1d3026]">
              How to book and what to bring
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#58665c]">
              Contact the clinic by phone or WhatsApp to arrange a
              postnatal-care consultation. You can also use the{" "}
              <Link
                href="/contact/"
                className="font-semibold text-[#214d3a] underline underline-offset-4"
              >
                contact page
              </Link>{" "}
              for clinic details. You can discuss the mother&rsquo;s and baby&rsquo;s
              conditions and any guidance already received from their
              healthcare teams.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#58665c]">
              Bring any information you would like the doctor to consider and
              follow the instructions of your maternity-care and baby-care
              teams.
            </p>
          </section>

          <section
            aria-labelledby="visiting-kerala"
            className="border-t border-[#d8ded4] py-8 sm:py-10"
          >
            <h2
              id="visiting-kerala"
              className="font-serif text-3xl text-[#1d3026]"
            >
              Planning a visit to Kerala?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#58665c]">
              Aura Ayurveda is based in Manjadi, Thiruvalla, and welcomes
              enquiries from families across Kerala, elsewhere in India, and
              abroad who are interested in Prasavaraksha during a visit to
              Kerala. This includes Malayalis living in cities such as
              Bengaluru and Chennai. Contact the clinic before making travel
              plans to discuss your circumstances and ask about appointment
              availability. {siteConfig.englishConsultationText} The doctor assesses each mother and baby
              individually. If travelling after childbirth, discuss travel
              with your maternity-care and baby-care teams.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-11 items-center font-semibold text-[#214d3a] underline underline-offset-4"
            >
              Ask about a visit by WhatsApp
            </a>
          </section>

          <section
            aria-labelledby="order-kit"
            className="border-t border-[#d8ded4] py-8 sm:py-10"
          >
            <h2 id="order-kit" className="font-serif text-3xl text-[#1d3026]">
              Interested in the Prasavaraksha medicines kit?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#58665c]">
              If you are elsewhere in India or abroad and want to enquire about
              the kit without visiting the clinic, view it in our store. Contact
              the clinic to ask about current availability, suitability, and
              whether delivery is available to your location.
            </p>
            <Link
              href="/store/#prasavaraksha-kit"
              className="mt-4 inline-flex min-h-11 items-center font-semibold text-[#214d3a] underline underline-offset-4"
            >
              View the Prasavaraksha medicines kit
            </Link>
          </section>

          <section
            aria-labelledby="prasavaraksha-faq"
            className="border-t border-[#d8ded4] py-8 sm:py-10"
          >
            <h2
              id="prasavaraksha-faq"
              className="font-serif text-3xl text-[#1d3026]"
            >
              Frequently asked questions
            </h2>
            <div className="mt-5 divide-y divide-[#d8ded4] border-y border-[#d8ded4]">
              {faqs.map((faq) => (
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
                  <p className="max-w-3xl pb-2 pt-3 text-sm leading-7 text-[#58665c]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section
            aria-labelledby="location-contact"
            className="border-t border-[#d8ded4] py-8 sm:py-10"
          >
            <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
              <div>
                <h2
                  id="location-contact"
                  className="font-serif text-3xl text-[#1d3026]"
                >
                  Location and contact
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#58665c]">
                  {siteConfig.businessName} is at {siteConfig.address.display},
                  in Thiruvalla.
                </p>
                <dl className="mt-4 space-y-3 text-sm leading-6 text-[#58665c]">
                  <div>
                    <dt className="font-semibold text-[#34463b]">Call</dt>
                    <dd>
                      <a
                        href={phoneLink}
                        className="underline underline-offset-4"
                      >
                        {siteConfig.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#34463b]">WhatsApp</dt>
                    <dd>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4"
                      >
                        {siteConfig.whatsapp}
                      </a>
                    </dd>
                  </div>
                </dl>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-[#214d3a] px-5 text-sm font-semibold text-[#214d3a] underline-offset-4 hover:bg-[#edf0e8] hover:underline"
                >
                  Get directions
                </a>
              </div>
              <iframe
                src={siteConfig.googleMapsEmbedUrl}
                title={`Map showing ${siteConfig.businessName} at ${siteConfig.locationLabel}`}
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[4/3] w-full rounded-lg border border-[#d8ded4] sm:aspect-[16/9]"
              />
            </div>
          </section>

          <section
            aria-labelledby="final-consultation"
            className="rounded-xl bg-[#214d3a] p-5 text-white sm:p-8"
          >
            <h2
              id="final-consultation"
              className="font-serif text-3xl text-white sm:text-4xl"
            >
              Discuss your next step with the clinic
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/90">
              Ask Aura Ayurveda about current availability, what a consultation
              involves, and which information to bring. The doctor will assess
              your circumstances individually before discussing care.
            </p>
            <div className="mt-5 grid gap-3 sm:flex sm:flex-wrap">
              <a
                href={phoneLink}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#214d3a] transition hover:bg-[#edf0e8]"
              >
                Call
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/70 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp
              </a>
              <Link
                href="/contact/"
                data-track-action="booking"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/70 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Book Consultation
              </Link>
              <RelatedArticles treatmentSlug="prasavaraksha" />
            </div>
          </section>
        </article>
      </Container>
    </>
  );
}
