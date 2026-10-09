import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { doctor } from "@/data/doctor";
import { clinic } from "@/data/clinic";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppUrl, withBasePath } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Dr. Lidiya Thomas | Ayurveda Doctor in Thiruvalla",
  description: "Meet Dr. Lidiya Thomas, Ayurveda Doctor at Aura Ayurveda in Manjadi near Thiruvalla, Kerala. Learn about consultations and contact the clinic.",
  path: "/doctor",
});

export default function DoctorPage() {
  return (
    <Container>
      <section className="py-10 sm:py-14">
        <SectionHeading
          as="h1"
          eyebrow="Your Ayurveda doctor · Manjadi, Thiruvalla"
          title="Meet Dr. Lidiya Thomas."
          description="Ayurveda Doctor at Aura Ayurveda. Get to know who you can speak with before you arrange a consultation."
        />

        <div className="mt-8 grid items-center gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
          <div className="relative mx-auto aspect-[4/4.3] w-full max-w-sm overflow-hidden rounded-t-[10rem] rounded-b-lg bg-[#d7e0d5] md:max-w-none">
            <Image
              src={withBasePath(doctor.photo)}
              alt="Dr. Lidiya Thomas, Ayurveda Doctor at Aura Ayurveda"
              width={768}
              height={768}
              sizes="(max-width: 767px) 100vw, 40vw"
              className="h-full w-full object-cover object-top"
              priority
            />
          </div>
          <div className="self-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a05435]">Doctor profile</p>
            <h2 className="mt-3 font-serif text-3xl text-[#1d3026] sm:text-4xl">{doctor.name}</h2>
            <p className="mt-2 text-base text-[#58665c]">{doctor.qualification}</p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#58665c]">A consultation is a chance to discuss your concerns and health history, ask questions, and understand possible next steps. Recommendations are made after individual assessment; a particular treatment or outcome is not guaranteed.</p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#58665c]">Aura Ayurveda welcomes enquiries from Manjadi, Thiruvalla and nearby communities in Kerala. Contact the clinic to ask about appointment availability and visit details.</p>
            <a href={getWhatsAppUrl("Hello, I would like to ask about an appointment with Dr. Lidiya Thomas at Aura Ayurveda in Manjadi.")} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#214d3a] px-5 text-sm font-semibold text-white">Ask about an appointment</a>
            <p className="mt-3 text-sm text-[#58665c]">{clinic.address}</p>
          </div>
        </div>
      </section>
    </Container>
  );
}
