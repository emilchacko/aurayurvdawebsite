import Image from "next/image";
import Link from "next/link";
import { ClinicJsonLd } from "@/components/seo/clinic-json-ld";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl, withBasePath } from "@/lib/site";

const faqs = [
  {
    question: "When can prasavaraksha care start after delivery?",
    answer:
      "There is no universal start day stated here. The doctor must first assess your delivery and recovery, review advice from your maternity-care team, and decide whether and when a consultation or any care is appropriate.",
  },
  {
    question: "How long does postnatal care last?",
    answer:
      "The number of days or sessions has not been confirmed by the clinic. It may depend on the individual assessment and the care discussed. Please ask the clinic before making plans.",
  },
  {
    question: "Is this suitable after a C-section?",
    answer:
      "A caesarean delivery needs individual consideration. Discuss your recovery and your obstetric team's instructions with the doctor; the doctor will assess timing and suitability before discussing any care.",
  },
  {
    question: "What treatments are included?",
    answer:
      "The clinic has not yet confirmed which services are offered as part of prasavaraksha. Oil massage, herbal steam, herbal dressing, and diet or lifestyle guidance are examples of categories to ask about, not a confirmed treatment list.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "Please call or WhatsApp before travelling to ask whether an appointment is needed, what times are available, and whether a postnatal consultation can be arranged.",
  },
  {
    question: "What should I bring to the consultation?",
    answer:
      "The clinic has not confirmed a required document list. You may ask whether to bring relevant discharge notes, current medicines, or advice from your maternity-care team, and follow any instructions they give you.",
  },
  {
    question: "What should I eat during recovery?",
    answer:
      "Food needs can vary with recovery, health history, and advice from your maternity-care team. Ask the doctor for individual guidance rather than following a general diet list from a webpage.",
  },
  {
    question: "What does പ്രസവരക്ഷ mean, and how do I book?",
    answer:
      "പ്രസവരക്ഷ is a Malayalam term associated with traditional postnatal care. To ask about availability or arrange a consultation, call or message Aura Ayurveda; any recommendations follow an individual assessment.",
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
              Postnatal care · Manjadi, Thiruvalla
            </p>
            <h1
              id="prasavaraksha-intro"
              className="mt-3 max-w-4xl font-serif text-4xl leading-[1.1] text-[#1d3026] sm:text-5xl"
            >
              Prasavaraksha: Ayurvedic Postnatal Care in Thiruvalla
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[#58665c] sm:text-lg sm:leading-8">
              Prasavaraksha (പ്രസവരക്ഷ) is a traditional approach to postnatal
              care. At Aura Ayurveda in Manjadi, Thiruvalla, a consultation is
              the first step: the doctor considers your delivery, recovery,
              medical advice, and preferences individually before discussing
              whether any care is appropriate. This page is general information,
              not a substitute for guidance from your obstetric or medical
              team. Please contact the clinic to confirm service availability
              and current details.
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
                In Kerala, prasavaraksha is a traditional term for care around
                the postnatal period. Families may also see it written as
                “prasava raksha” or described as “postnatal Ayurveda care”.
                These terms refer to a traditional care context, not one
                standard set of procedures. What may be discussed depends on
                the person, delivery, recovery, and advice already received.
              </p>
              <p className="mt-3 text-sm leading-7 text-[#58665c]">
                A conversation with the doctor can help clarify what the clinic
                currently offers and whether a consultation makes sense for
                your situation. No particular therapy, timetable, or outcome is
                assumed on this page.
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
              The clinic has not confirmed which of the following are offered.
              These are categories to ask about, not a promise that they form
              part of a package or will be suitable for you. The doctor should
              explain any proposed steps and consider your individual
              circumstances before you decide.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Oil massage (abhyanga)",
                "Herbal steam",
                "Herbal dressing",
                "Diet and lifestyle guidance",
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
              Ask what is currently available at Manjadi, what each option
              involves, and whether you should first check with your maternity
              team. Other clinic services, including{" "}
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
              , are separate descriptions and should not be assumed to be
              included in, or suitable after, postnatal care.
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
              People who have recently given birth and their families may
              contact the clinic to ask about a postnatal consultation,
              including after either a vaginal delivery or a C-section. The
              delivery type, recovery, any complications, current medicines,
              and instructions from your obstetric team all matter when
              considering next steps.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#58665c]">
              There is no start date recommended here. The doctor decides
              whether and when to discuss care after an individual assessment;
              please also follow your maternity-care team&rsquo;s instructions. If
              you have a new or urgent concern, contact your maternity team or
              appropriate medical service rather than waiting for an
              appointment at the clinic.
            </p>
          </section>

          <section
            aria-labelledby="duration-format"
            className="border-t border-[#d8ded4] py-8 sm:py-10"
          >
            <h2
              id="duration-format"
              className="font-serif text-3xl text-[#1d3026]"
            >
              Duration and visit format
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#58665c]">
              The clinic has not yet confirmed how many days or sessions
              prasavaraksha involves, whether visits are outpatient or include
              a stay, or whether package options are available. Each detail is
              currently{" "}
              <strong className="font-semibold text-[#34463b]">
                [To be confirmed by the clinic]
              </strong>
              . Please call or WhatsApp before making travel, childcare, or
              recovery plans. No price or fixed schedule is published here.
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
              The existing clinic profile names {siteConfig.doctorName}. The
              doctor&rsquo;s approved credentials for this page are{" "}
              <strong className="font-semibold text-[#34463b]">
                [To be confirmed by the clinic]
              </strong>
              ; no qualification is stated until verified. The doctor assesses
              each patient individually and can discuss what information is
              relevant before any care is considered. Read{" "}
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
              Contact the clinic by phone or WhatsApp to ask whether a
              postnatal consultation is available, whether an appointment is
              needed, and what timings are possible. You can also use the{" "}
              <Link
                href="/contact/"
                className="font-semibold text-[#214d3a] underline underline-offset-4"
              >
                contact page
              </Link>{" "}
              for clinic details. Share only information you are comfortable
              discussing, and ask the doctor which details are useful for an
              assessment.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[#58665c] marker:text-[#a05435]">
              <li>
                Ask the clinic whether it needs any discharge notes, current
                medicine list, or other documents; its exact list is{" "}
                <strong className="font-semibold text-[#34463b]">
                  [To be confirmed by the clinic]
                </strong>
                .
              </li>
              <li>
                Bring questions about the proposed visit and share any relevant
                instructions from your maternity-care team.
              </li>
              <li>
                Confirm the appointment time, location, and visit arrangements
                before setting out.
              </li>
            </ul>
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
                  {siteConfig.businessName} is at {siteConfig.address.display}.
                  The clinic serves enquiries from Thiruvalla, Manjadi, and
                  nearby areas. Please confirm the address and appointment
                  details before travelling.
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
                  <div>
                    <dt className="font-semibold text-[#34463b]">
                      Opening hours
                    </dt>
                    <dd>{siteConfig.openingHours.display}</dd>
                    <dd className="mt-1 text-xs">{siteConfig.openingHours.note} Call to confirm before travelling.</dd>
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
            </div>
          </section>
        </article>
      </Container>
    </>
  );
}
