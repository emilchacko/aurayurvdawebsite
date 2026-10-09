import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { treatments } from "@/content/treatments";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Treatments | Aura Ayurveda",
  description: "Explore Ayurvedic Panchakarma massage, Kalari Varma massage, dandruff and acne care, hair spa, and varicose vein consultation.",
  path: "/treatments",
});

export default function TreatmentsPage() {
  return (
    <Container>
      <section className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Treatments"
          title="Care planned around your individual needs."
          description="Learn what each service may involve and discuss suitability with the doctor before beginning care."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {treatments.map((treatment) => (
            <Link
              key={treatment.slug}
              href={`/treatments/${treatment.slug}`}
              className="group block rounded-3xl border border-[#e5dccf] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#b9cbb7]"
            >
              <div className="mb-4 flex h-40 items-center justify-center rounded-2xl border border-dashed border-[#b6b8a7] bg-[#f5f0e8] text-sm text-[#536260]">
                Image coming soon
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#496d56]">{treatment.category}</p>
              <h3 className="mt-3 font-serif text-2xl text-[#1a2a2a]">{treatment.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#536260]">{treatment.shortDescription}</p>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}
