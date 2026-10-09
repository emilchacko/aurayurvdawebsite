import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { treatments } from "@/content/treatments";
import { clinic } from "@/data/clinic";
import { doctor } from "@/data/doctor";
import { getWhatsAppUrl, withBasePath } from "@/lib/site";

const focusAreas = [
  {
    title: "Hair & Scalp Care",
    summary: "Support for hair fall, dandruff, and scalp wellness.",
    image: "/images/focus-areas/hair-scalp.jpg",
    imageAlt: "Hair being styled",
  },
  {
    title: "Skin Wellness",
    summary: "Gentle guidance for skin care and everyday skin balance.",
    image: "/images/focus-areas/skin-wellness.jpg",
    imageAlt: "A woman receiving a facial treatment",
  },
  {
    title: "Women’s Wellness",
    summary: "Personalized care for daily wellness and women’s health.",
    image: "/images/focus-areas/womens-wellness.png",
    imageAlt: "A woman enjoying a peaceful moment outdoors with a warm drink",
  },
  {
    title: "Pregnancy & Postnatal Care",
    summary: "Supportive care during pregnancy and recovery after birth.",
    image: "/images/focus-areas/pregnancy-postnatal.jpg",
    imageAlt: "A baby enjoying a peaceful moment",
  },
  {
    title: "Joint & Muscle Care",
    summary: "Ayurvedic support for discomfort and movement-related wellness.",
    image: "/images/focus-areas/joint-muscle.jpg",
    imageAlt: "A man holding his lower back while outdoors",
  },
  {
    title: "Ayurvedic Therapies",
    summary: "Traditional therapies considered in a personalized care plan.",
    image: "/images/focus-areas/ayurvedic-therapies.jpg",
    imageAlt: "A relaxing massage therapy",
  },
  {
    title: "Weight Management",
    summary: "Lifestyle and dietary guidance for sustainable wellness.",
    image: "/images/focus-areas/weight-management.jpg",
    imageAlt: "A person meditating as part of a wellness routine",
  },
  {
    title: "Ayurvedic Medicines",
    summary: "Medicines considered as part of appropriate clinical recommendation.",
    image: "/images/focus-areas/ayurvedic-medicines.jpg",
    imageAlt: "An amber glass bottle with a dropper",
  },
];

const reasons = [
  "Meet your doctor before you book",
  "Ask about suitability and next steps",
  "Clear clinic location and directions",
  "Message the clinic directly on WhatsApp",
];

const steps = [
  "Start with a conversation",
  "Share what you need help with",
  "Discuss a suitable appointment",
  "Review your next steps with the doctor",
];

const faqs = [
  {
    question: "What happens during the first consultation?",
    answer:
      "The first consultation is an assessment-based discussion to understand the individual’s health goals, concerns, routines, and the most appropriate next steps.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "Appointments are recommended so the clinic can plan appropriate consultation time and follow-up care.",
  },
  {
    question: "Do you provide Ayurvedic medicines?",
    answer:
      "Medicines may be provided as part of appropriate Ayurvedic care and clinical guidance, subject to consultation and recommendation.",
  },
  {
    question: "Where is the clinic located?",
    answer:
      "Aura Ayurveda is located at TK Rd, Manjadi, Thiruvalla, Keralam 689105, near Chikkos Fried Chicken.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can contact the clinic through the contact page, call, or WhatsApp to arrange a consultation.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="bg-[#edf0e8]">
        <Container>
          <div className="grid items-center gap-8 py-8 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-16">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a05435]">Ayurvedic clinic · Manjadi · Thiruvalla, Kerala</p>
              <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.08] text-[#1d3026] sm:text-5xl lg:text-[3.5rem]">
                A doctor-led conversation about your wellbeing.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#58665c] sm:text-lg sm:leading-8">
                Meet Dr. Lidiya Thomas at Aura Ayurveda in Manjadi, near Thiruvalla. Explore personalized Ayurvedic consultations, hair and skin care, traditional therapies and women’s wellness.
              </p>
              <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
                <a href={getWhatsAppUrl("Hello, I would like to ask about booking a consultation at Aura Ayurveda in Manjadi.")} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#214d3a] px-6 text-sm font-semibold text-white transition hover:bg-[#183b2c]">
                  Ask about an appointment
                </a>
                <a href={clinic.mapUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#b9c7b8] bg-white px-6 text-sm font-semibold text-[#214d3a]">
                  Get directions
                </a>
              </div>
              <p className="mt-4 text-sm text-[#58665c]">Prefer to call? <a className="font-semibold text-[#214d3a] underline underline-offset-4" href={`tel:${clinic.phone.replace(/\s/g, "")}`}>{clinic.phone}</a></p>
            </div>

            <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
              <div className="aspect-[4/4.3] overflow-hidden rounded-t-[12rem] rounded-b-xl bg-[#d7e0d5] sm:aspect-[4/3.4] lg:aspect-[4/4.3]">
                <Image src={withBasePath(doctor.photo)} alt="Dr. Lidiya Thomas, Ayurveda Doctor at Aura Ayurveda" width={768} height={768} priority sizes="(max-width: 1023px) 100vw, 45vw" className="h-full w-full object-cover object-top" />
              </div>
              <div className="absolute inset-x-3 bottom-3 rounded-lg bg-[#faf9f5]/95 p-4 shadow-sm sm:inset-x-5 sm:bottom-5 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a05435]">Your local Ayurveda doctor</p>
                <p className="mt-1 font-serif text-2xl text-[#1d3026]">{doctor.name}</p>
                <p className="mt-1 text-sm text-[#58665c]">{doctor.qualification} · Aura Ayurveda, Manjadi</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section aria-label="Clinic details" className="border-y border-[#d8ded4] bg-[#faf9f5]">
        <Container>
          <div className="grid gap-4 py-5 sm:grid-cols-3 sm:gap-6">
            <div><p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a05435]">Local clinic</p><p className="mt-1 text-sm font-medium text-[#34463b]">Manjadi, near Thiruvalla</p></div>
            <div><p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a05435]">Speak directly</p><p className="mt-1 text-sm font-medium text-[#34463b]">Call or message the clinic</p></div>
            <div><p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a05435]">First step</p><p className="mt-1 text-sm font-medium text-[#34463b]">Ask about an appointment</p></div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f4f3ed] py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="What can we help with?"
            title="Support for the concerns that matter most."
            description="Explore the areas where Aura Ayurveda offers thoughtful, personalized care."
          />

          <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
            {focusAreas.map((area) => (
              <Link key={area.title} href="/treatments" className="min-w-0 overflow-hidden rounded-lg border border-[#d8ded4] bg-white transition hover:border-[#aab9a8]">
                <Image
                  src={withBasePath(area.image)}
                  alt={area.imageAlt}
                  width={640}
                  height={420}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="aspect-[1.55/1] w-full object-cover"
                />
                <div className="p-3 sm:p-4">
                  <h3 className="font-serif text-lg leading-tight text-[#1d3026] sm:text-xl">{area.title}</h3>
                  <p className="mt-2 hidden text-sm leading-6 text-[#58665c] sm:block">{area.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Treatments"
            title="Treatments we offer."
            description="Learn what each service may involve and its potential benefits. The doctor can help determine what may be suitable for you."
          />

          <div className="mt-7 grid gap-x-8 sm:grid-cols-2">
            {treatments.map((treatment) => (
              <Link key={treatment.slug} href={`/treatments/${treatment.slug}`} className="group flex min-h-24 items-start justify-between gap-4 border-b border-[#d8ded4] py-5 transition hover:border-[#a05435]">
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#a05435]">{treatment.category}</span>
                  <span className="mt-1 block font-serif text-xl text-[#1d3026]">{treatment.title}</span>
                  <span className="mt-2 block text-sm leading-6 text-[#58665c]">{treatment.shortDescription}</span>
                </span>
                <span aria-hidden="true" className="mt-4 shrink-0 text-lg text-[#214d3a]">→</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#edf0e8] py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Why Aura Ayurveda?"
            title="A calm, care-led clinic experience."
            description="The clinic is being positioned as a trusted local wellness destination where people feel listened to and supported by a doctor-led Ayurvedic approach."
          />

          <div className="mt-7 grid gap-x-8 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="border-b border-[#d1d9ce] py-4">
                <p className="text-base font-medium text-[#34463b]">{reason}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid items-center gap-7 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
            <div className="relative mx-auto aspect-[4/4.3] w-full max-w-sm overflow-hidden rounded-t-[10rem] rounded-b-lg bg-[#d7e0d5] md:max-w-none">
              <Image
                src={withBasePath(doctor.photo)}
                alt="Dr. Lidiya Thomas"
                width={768}
                height={768}
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div>
              <SectionHeading
                eyebrow="Meet the doctor"
                title="Meet Dr. Lidiya Thomas."
                description="Ayurveda Doctor at Aura Ayurveda."
              />

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#58665c]">Learn about the consultation process and what to expect before you decide on care. Treatment recommendations are based on assessment and individual needs.</p>
              <Link href="/doctor" className="mt-5 inline-flex min-h-11 items-center font-semibold text-[#214d3a] underline underline-offset-4">Read the doctor profile</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#d8ded4] bg-[#f4f3ed] py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="A clear, uncomplicated path to care."
            description="The exact treatment plan depends on individual assessment, which is why the process is framed as a guided consultation rather than a fixed protocol."
          />

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="border-t-2 border-[#a05435] bg-white p-4 sm:p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a05435]">
                  {index + 1}
                </div>
                <p className="mt-2 text-sm font-medium leading-6 text-[#34463b]">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#edf0e8] py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Google reviews"
            title="See what patients are saying."
            description="Google reviews for Aura Ayurveda."
          />

          <div className="mt-7 flex flex-col gap-4 border-y border-[#d1d9ce] py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-7 text-[#58665c]">Read current feedback directly on Google. Reviews and ratings are hosted by Google and may change over time.</p>
            <a href={clinic.googleReviewsUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[#214d3a] px-5 text-sm font-semibold text-white">Read Google reviews</a>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Helpful answers before the first visit."
            description="These are designed to be practical and honest, with placeholders where clinic-specific information still needs to be finalized."
          />

          <div className="mt-7 divide-y divide-[#d8ded4] border-y border-[#d8ded4]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-4">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl text-[#1d3026] [&::-webkit-details-marker]:hidden">
                  {faq.question}<span aria-hidden="true" className="text-xl text-[#a05435] group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pb-2 pt-3 text-sm leading-7 text-[#58665c]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-xl bg-[#edf0e8] p-5 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#496d56]">Clinic location</p>
              <h3 className="mt-4 font-serif text-4xl text-[#1a2a2a]">Aura Ayurveda</h3>
              <p className="mt-4 text-base leading-8 text-[#536260]">{clinic.location}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-white p-4">
                  <p className="text-sm font-medium text-[#263332]">Phone</p>
                  <a href="tel:+919600233308" className="mt-2 inline-block text-sm text-[#536260] underline underline-offset-4">{clinic.phone}</a>
                </div>
                <div className="rounded-lg bg-white p-4">
                  <p className="text-sm font-medium text-[#263332]">WhatsApp</p>
                  <a href={getWhatsAppUrl("Hello, I would like to ask about visiting Aura Ayurveda in Manjadi.")} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm text-[#536260] underline underline-offset-4">{clinic.whatsapp}</a>
                </div>
                <div className="rounded-lg bg-white p-4">
                  <p className="text-sm font-medium text-[#263332]">Opening hours</p>
                  <p className="mt-2 text-sm text-[#536260]">{clinic.openingHours}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact">Book a Consultation</Button>
                <a
                  href={getWhatsAppUrl("Hello, I would like to enquire about visiting Aura Ayurveda in Manjadi.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#d9d0c5] bg-white px-5 py-3 text-sm font-semibold text-[#1a2a2a] transition-colors hover:bg-[#f4efe8]"
                >
                  WhatsApp Us
                </a>
                <a
                  href={clinic.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#d9d0c5] bg-white px-5 py-3 text-sm font-semibold text-[#1a2a2a] transition-colors hover:bg-[#f4efe8]"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-[#d8ded4] bg-white p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#496d56]">Clinic location</p>
                <a
                  href={clinic.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-[#1d4f3a] underline underline-offset-4"
                >
                  Directions
                </a>
              </div>
              <iframe
                src={clinic.mapEmbedUrl}
                title="Aura Ayurveda location on Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mt-4 aspect-[4/3] w-full rounded-lg border-0 sm:aspect-[16/9] lg:aspect-auto lg:h-[420px]"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-12 sm:pb-16">
        <Container>
          <div className="rounded-xl bg-[#214d3a] p-5 text-white sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#dfeae1]">Ready when you are</p>
            <h2 className="mt-3 max-w-2xl font-serif text-4xl sm:text-5xl">Ready to begin your Ayurvedic wellness journey?</h2>
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
              <a href={getWhatsAppUrl("Hello, I would like to ask about booking an Ayurvedic consultation at Aura Ayurveda in Manjadi.")} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#214d3a]">Ask about a consultation</a>
              <Button href="/contact" variant="secondary" className="min-h-12">Visit and contact details</Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
