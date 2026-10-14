import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { isConfiguredValue, siteConfig } from "@/config/site";
import { doctor } from "@/data/doctor";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppUrl, withBasePath } from "@/lib/site";

export const metadata = buildMetadata({
  title: `${siteConfig.doctorName} | Doctor at ${siteConfig.businessName} in Thiruvalla`,
  description: `Meet ${siteConfig.doctorName} at ${siteConfig.businessName} in ${siteConfig.locationLabel}. Learn about consultations and contact the clinic.`,
  path: "/doctor",
});

export default function DoctorPage() {
  return (
    <Container>
      <section className="py-10 sm:py-14">
        <SectionHeading
          as="h1"
          eyebrow={`Your Ayurveda doctor · ${siteConfig.locationLabel}`}
          title={`Meet ${siteConfig.doctorName}.`}
          description={`Get to know who you can speak with at ${siteConfig.businessName} before you arrange a consultation.`}
        />

        <div className="mt-8 grid items-center gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
          <div className="relative mx-auto aspect-[4/4.3] w-full max-w-sm overflow-hidden rounded-t-[10rem] rounded-b-lg bg-[#d7e0d5] md:max-w-none">
            <Image
              src={withBasePath(doctor.photo)}
              alt={`${siteConfig.doctorName} at ${siteConfig.businessName}`}
              width={768}
              height={768}
              sizes="(max-width: 767px) 100vw, 40vw"
              className="h-full w-full object-cover object-top"
              priority
            />
          </div>
          <div className="self-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a05435]">Doctor profile</p>
            <h2 className="mt-3 font-serif text-3xl text-[#1d3026] sm:text-4xl">{siteConfig.doctorName}</h2>
            {isConfiguredValue(siteConfig.doctorQualification) ? (
              <p className="mt-2 text-base text-[#58665c]">{siteConfig.doctorQualification}</p>
            ) : null}
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#58665c]">During a consultation, discuss your concerns and health history, ask questions, and learn about the care plan the doctor recommends for you. Care is planned after an individual assessment.</p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#58665c]">{siteConfig.businessName} welcomes enquiries from {siteConfig.serviceAreas.join(", ")}. Contact the clinic to ask about appointment availability and visit details.</p>
            <a href={getWhatsAppUrl(`Hello, I would like to ask about an appointment with ${siteConfig.doctorName} at ${siteConfig.businessName} in ${siteConfig.locationLabel}.`)} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#214d3a] px-5 text-sm font-semibold text-white">Ask about an appointment</a>
            <p className="mt-3 text-sm text-[#58665c]">{siteConfig.address.display}</p>
          </div>
        </div>
      </section>
    </Container>
  );
}
