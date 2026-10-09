import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { treatments } from "@/content/treatments";
import { clinic } from "@/data/clinic";
import { doctor } from "@/data/doctor";
import { withBasePath } from "@/lib/site";

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
  "Doctor-led care",
  "Personalized attention",
  "Thoughtful treatment planning",
  "Traditional therapies",
  "Genuine medicines",
  "Welcoming clinic environment",
];

const steps = [
  "Book a consultation",
  "Consultation & assessment",
  "Personalized Ayurvedic plan",
  "Follow-up & care",
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
    <Container>
      <section className="py-10 sm:py-14 lg:py-18">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#496d56]">Aura Ayurveda • Manjadi, near Thiruvalla</p>
            <h1 className="mt-4 max-w-2xl font-serif text-5xl leading-none text-[#1a2a2a] sm:text-6xl">
              Personalized Ayurvedic care for skin, hair & women’s wellness.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#536260]">
              Discover a thoughtful Ayurvedic approach to everyday health and wellness at Aura Ayurveda, designed for people seeking supportive, personalized care.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Book a Consultation</Button>
              <a
                href={clinic.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#d9d0c5] bg-white px-5 py-3 text-sm font-semibold text-[#1a2a2a] transition-colors hover:bg-[#f4efe8]"
              >
                WhatsApp Us
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-[#536260]">
              <Link href="/contact" className="font-medium text-[#1d4f3a] underline-offset-4 hover:underline">
                Call the clinic
              </Link>
              <Link href="/contact" className="font-medium text-[#1d4f3a] underline-offset-4 hover:underline">
                Get directions
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[#e5dccf] bg-[radial-gradient(circle_at_top,_#edf5ee,_#dfeae1_38%,_#e7d4be_100%)] p-5 shadow-[0_24px_50px_rgba(28,39,35,0.08)]">
            <div className="flex h-[430px] items-end rounded-[1.5rem] border border-white/80 bg-white/25 p-5 backdrop-blur-sm">
              <div className="w-full rounded-[1.5rem] border border-[#d9d0c5] bg-white/80 p-6">
                <h2 className="mt-3 font-serif text-4xl text-[#1a2a2a]">Local, warm, and doctor-led.</h2>
                <ul className="mt-5 space-y-2 text-sm text-[#4c5654]">
                  <li>• Personalized Ayurvedic care</li>
                  <li>• Hair, skin, and women’s wellness</li>
                  <li>• Pregnancy, postnatal, and lifestyle support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e5dccf] bg-[#f0eadf] py-16">
        <Container>
          <SectionHeading
            eyebrow="What can we help with?"
            title="Support for the concerns that matter most."
            description="Explore the areas where Aura Ayurveda offers thoughtful, personalized care."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {focusAreas.map((area) => (
              <Link key={area.title} href="/treatments" className="rounded-[1.5rem] border border-[#d9d0c5] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#b9cbb7]">
                <Image
                  src={withBasePath(area.image)}
                  alt={area.imageAlt}
                  width={640}
                  height={420}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="mb-4 h-24 w-full rounded-2xl object-cover"
                />
                <h3 className="font-serif text-2xl text-[#1a2a2a]">{area.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#536260]">{area.summary}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Treatments"
            title="Treatments we offer."
            description="Learn what each service may involve and its potential benefits. The doctor can help determine what may be suitable for you."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {treatments.map((treatment) => (
              <Link key={treatment.slug} href={`/treatments/${treatment.slug}`} className="rounded-[1.5rem] border border-[#d9d0c5] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#b9cbb7]">
                <div className="mb-4 flex h-40 items-center justify-center rounded-2xl border border-dashed border-[#b6b8a7] bg-[#f5f0e8] text-sm text-[#536260]">
                  Image coming soon
                </div>
                <h3 className="font-serif text-2xl text-[#1a2a2a]">{treatment.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#536260]">{treatment.shortDescription}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why Aura Ayurveda?"
            title="A calm, care-led clinic experience."
            description="The clinic is being positioned as a trusted local wellness destination where people feel listened to and supported by a doctor-led Ayurvedic approach."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-[1.5rem] border border-[#e5dccf] bg-[#fffaf4] p-6 shadow-sm">
                <p className="text-lg font-medium text-[#263332]">{reason}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f0e8] py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative h-[420px] overflow-hidden rounded-[2rem] bg-[#f5f0e8]">
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

              <div className="mt-8 rounded-[2rem] border border-[#e5dccf] bg-white p-7 shadow-sm">
                <p className="text-sm uppercase tracking-[0.18em] text-[#496d56]">Doctor profile</p>
                <h3 className="mt-4 font-serif text-4xl text-[#1a2a2a]">{doctor.name}</h3>
                <p className="mt-3 text-base text-[#536260]">{doctor.qualification}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#e5dccf] bg-[#f7f4ee] py-16">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="A clear, uncomplicated path to care."
            description="The exact treatment plan depends on individual assessment, which is why the process is framed as a guided consultation rather than a fixed protocol."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="rounded-[1.5rem] border border-[#e5dccf] bg-white p-5 text-center shadow-sm">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#e3eee5] text-sm font-semibold text-[#1d4f3a]">
                  {index + 1}
                </div>
                <p className="mt-4 text-base font-medium text-[#263332]">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f3efe7] py-16">
        <Container>
          <SectionHeading
            eyebrow="Google reviews"
            title="See what patients are saying."
            description="Google reviews for Aura Ayurveda."
          />

          <div className="mt-8 rounded-[2rem] border border-[#e5dccf] bg-white p-6 shadow-sm sm:p-8">
            <div className="sk-ww-google-reviews" data-embed-id="25720708" />
            <p className="mt-6 text-center text-sm text-[#536260]">
              <a
                href={clinic.googleReviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[#1d4f3a] underline underline-offset-4"
              >
                See all reviews on Google
              </a>
            </p>
            <Script
              src="https://widgets.sociablekit.com/google-reviews/widget.js"
              strategy="afterInteractive"
            />
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

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-[1.5rem] border border-[#e5dccf] bg-white p-5 shadow-sm">
                <h3 className="font-serif text-2xl text-[#1a2a2a]">{faq.question}</h3>
                <p className="mt-3 text-base leading-8 text-[#536260]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-[#e5dccf] bg-[#fffaf4] p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#496d56]">Clinic location</p>
              <h3 className="mt-4 font-serif text-4xl text-[#1a2a2a]">Aura Ayurveda</h3>
              <p className="mt-4 text-base leading-8 text-[#536260]">{clinic.location}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#e5dccf] bg-white p-4">
                  <p className="text-sm font-medium text-[#263332]">Phone</p>
                  <a href="tel:+919600233308" className="mt-2 inline-block text-sm text-[#536260] underline underline-offset-4">{clinic.phone}</a>
                </div>
                <div className="rounded-2xl border border-[#e5dccf] bg-white p-4">
                  <p className="text-sm font-medium text-[#263332]">WhatsApp</p>
                  <a href={clinic.whatsappUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm text-[#536260] underline underline-offset-4">{clinic.whatsapp}</a>
                </div>
                <div className="rounded-2xl border border-[#e5dccf] bg-white p-4">
                  <p className="text-sm font-medium text-[#263332]">Opening hours</p>
                  <p className="mt-2 text-sm text-[#536260]">{clinic.openingHours}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact">Book a Consultation</Button>
                <a
                  href={clinic.whatsappUrl}
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

            <div className="rounded-[2rem] border border-[#e5dccf] bg-white p-5 shadow-sm">
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
                className="mt-4 h-[420px] w-full rounded-[1.5rem] border-0"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="rounded-[2rem] border border-[#e5dccf] bg-[#1d4f3a] p-8 text-white sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#dfeae1]">Ready when you are</p>
            <h2 className="mt-3 max-w-2xl font-serif text-4xl sm:text-5xl">Ready to begin your Ayurvedic wellness journey?</h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" className="bg-white text-[#1d4f3a] hover:bg-[#f1f5f2]">Book a Consultation</Button>
            </div>
          </div>
        </Container>
      </section>
    </Container>
  );
}
