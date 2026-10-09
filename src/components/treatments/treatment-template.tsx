import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { clinic } from "@/data/clinic";
import type { Treatment } from "@/content/treatments";
import { getWhatsAppUrl, withBasePath } from "@/lib/site";

export function TreatmentTemplate({ treatment }: { treatment: Treatment }) {
  const isVaricoseVeinPage = treatment.slug === "varicose-vein-care";

  return (
    <div className="space-y-12">
      <section className="border-b border-[#d8ded4] pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a05435]">{treatment.category} · Manjadi, Thiruvalla</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-[1.1] text-[#1d3026] sm:text-5xl">{treatment.title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[#58665c]">{treatment.description}</p>

        <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
          <a href={getWhatsAppUrl(`Hello, I would like to ask about ${treatment.title} at Aura Ayurveda in Manjadi. Please share availability and suitability details.`)} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#214d3a] px-5 text-sm font-semibold text-white">Ask about this service</a>
          <Button href="/contact" variant="secondary" className="min-h-12">Call or visit the clinic</Button>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
        <Image src={withBasePath(treatment.image)} alt={treatment.imageAlt} width={900} height={620} sizes="(max-width: 767px) 100vw, 45vw" className={isVaricoseVeinPage ? "aspect-square w-full rounded-lg bg-[#f4f3ed] p-3 object-contain md:aspect-auto md:min-h-72" : "aspect-[1.45/1] w-full rounded-lg object-cover md:aspect-auto md:h-full md:min-h-72"} />
        <div className="grid gap-6">
          <div className="border-t-2 border-[#a05435] bg-[#edf0e8] p-5">
            <h2 className="font-serif text-2xl text-[#1d3026]">What the process may involve</h2>
            <p className="mt-3 text-sm leading-7 text-[#58665c]">{treatment.process}</p>
          </div>
          <div className="border-t-2 border-[#214d3a] bg-white p-5">
            <h2 className="font-serif text-2xl text-[#1d3026]">Possible benefits and limitations</h2>
            <p className="mt-3 text-sm leading-7 text-[#58665c]">{treatment.potentialBenefits}</p>
          </div>
        </div>
      </section>

      <section className="rounded-lg bg-[#f4f3ed] p-5 sm:p-6">
        <p className="text-sm leading-7 text-[#58665c]">
          Treatment suitability and outcomes vary by person. Please consult the doctor before starting care; these services do not replace appropriate medical evaluation or treatment.
        </p>
      </section>

      <section className="rounded-lg bg-[#214d3a] p-5 text-white sm:p-7">
        <h2 className="font-serif text-3xl">Talk it through with the clinic</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">
          Ask about {treatment.title.toLowerCase()}, appointment availability and whether a consultation may be appropriate for you. Aura Ayurveda is in {clinic.location}.
        </p>
        <div className="mt-5 grid gap-3 sm:flex sm:flex-wrap">
          <a href={getWhatsAppUrl(`Hello, I would like to ask about ${treatment.title} at Aura Ayurveda in Manjadi.`)} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#214d3a]">Ask on WhatsApp</a>
          <Link href="/treatments" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/60 px-5 text-sm font-semibold text-white">Explore other services</Link>
        </div>
      </section>
    </div>
  );
}
