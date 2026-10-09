import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { doctor } from "@/data/doctor";
import { buildMetadata } from "@/lib/seo";
import { withBasePath } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Doctor | Aura Ayurveda",
  description: "Meet the doctor behind Aura Ayurveda and learn about the clinic’s personalized Ayurvedic care approach.",
  path: "/doctor",
});

export default function DoctorPage() {
  return (
    <Container>
      <section className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Meet the doctor"
          title="A doctor-led clinic with a thoughtful, personalized approach."
          description="Meet Dr. Lidiya Thomas, Ayurveda Doctor at Aura Ayurveda."
        />

        <div className="mt-10 grid gap-8 md:grid-cols-[1.1fr_1.9fr]">
          <div className="relative h-[420px] overflow-hidden rounded-[2rem] bg-[#f5f0e8]">
            <Image
              src={withBasePath(doctor.photo)}
              alt="Dr. Lidiya Thomas"
              width={768}
              height={768}
              className="h-full w-full object-cover object-top"
              priority
            />
          </div>
          <div className="self-center rounded-[2rem] border border-[#e5dccf] bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#496d56]">Doctor profile</p>
            <h3 className="mt-4 font-serif text-4xl text-[#1a2a2a]">{doctor.name}</h3>
            <p className="mt-3 text-base text-[#536260]">{doctor.qualification}</p>
          </div>
        </div>
      </section>
    </Container>
  );
}
