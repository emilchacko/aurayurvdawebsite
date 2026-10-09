import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { clinic } from "@/data/clinic";
import { treatments } from "@/content/treatments";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppUrl, withBasePath } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Ayurvedic Treatments in Thiruvalla | Aura Ayurveda, Manjadi",
  description: "Explore Ayurvedic hair and scalp care, skin consultations, massage therapies and wellness services at Aura Ayurveda in Manjadi near Thiruvalla, Kerala.",
  path: "/treatments",
});

export default function TreatmentsPage() {
  return (
    <Container>
      <section className="py-10 sm:py-14">
        <SectionHeading
          as="h1"
          eyebrow="Ayurvedic treatments · Manjadi, Thiruvalla"
          title="Understand the service before you choose it."
          description="Browse Ayurvedic consultations and therapies available at Aura Ayurveda. Suitability is discussed with the doctor before treatment; descriptions are for general information and outcomes vary."
        />

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-y border-[#d8ded4] py-4">
          <p className="text-sm text-[#58665c]">Not sure where to start? Ask a question first.</p>
          <a href={getWhatsAppUrl("Hello, I would like to ask which Ayurvedic service at Aura Ayurveda in Manjadi may be appropriate for me.")} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#214d3a] px-5 text-sm font-semibold text-white">Ask on WhatsApp</a>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {treatments.map((treatment) => (
            <Link
              key={treatment.slug}
              href={`/treatments/${treatment.slug}`}
              className="group flex min-w-0 flex-col overflow-hidden rounded-lg border border-[#d8ded4] bg-white transition hover:border-[#aab9a8]"
            >
              <Image src={withBasePath(treatment.image)} alt={treatment.imageAlt} width={800} height={520} sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw" className={`aspect-[1.6/1] w-full ${treatment.slug === "varicose-vein-care" ? "bg-[#f4f3ed] object-contain p-2" : "object-cover"}`} />
              <span className="flex flex-1 flex-col p-4 sm:p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a05435]">{treatment.category}</span>
                <span className="mt-2 font-serif text-2xl leading-tight text-[#1d3026]">{treatment.title}</span>
                <span className="mt-2 flex-1 text-sm leading-6 text-[#58665c]">{treatment.shortDescription}</span>
                <span className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[#214d3a] underline underline-offset-4">Read about this service</span>
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-6 text-[#58665c]">Images are illustrative and do not depict treatment results or guarantee an outcome. Persistent or severe symptoms should be assessed by an appropriately qualified medical professional.</p>
        <p className="mt-3 text-sm text-[#58665c]">Visit Aura Ayurveda: {clinic.location} · <Link href="/contact" className="font-semibold text-[#214d3a] underline underline-offset-4">Contact and directions</Link></p>
      </section>
    </Container>
  );
}
