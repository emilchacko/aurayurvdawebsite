import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Treatment } from "@/content/treatments";

export function TreatmentTemplate({ treatment }: { treatment: Treatment }) {
  return (
    <div className="space-y-12">
      <section className="rounded-[2rem] border border-[#e5dccf] bg-[#fffaf4] p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#496d56]">{treatment.category}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl text-[#1a2a2a] sm:text-5xl">{treatment.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[#536260]">{treatment.description}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/contact">Book a consultation</Button>
          <Button href="/treatments" variant="secondary">View all treatments</Button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="flex min-h-64 items-center justify-center rounded-[1.75rem] border border-dashed border-[#b6b8a7] bg-[#f5f0e8] p-6 text-sm text-[#536260]">
          Treatment image coming soon
        </div>
        <div className="grid gap-6">
          <div className="rounded-[1.75rem] border border-[#e5dccf] bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl text-[#1a2a2a]">What the process may involve</h2>
            <p className="mt-3 text-sm leading-7 text-[#536260]">{treatment.process}</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#e5dccf] bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl text-[#1a2a2a]">Potential benefits</h2>
            <p className="mt-3 text-sm leading-7 text-[#536260]">{treatment.potentialBenefits}</p>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#e5dccf] bg-[#f5f0e8] p-6 shadow-sm sm:p-8">
        <p className="text-sm leading-7 text-[#536260]">
          Treatment suitability and outcomes vary by person. Please consult the doctor before starting care; these services do not replace appropriate medical evaluation or treatment.
        </p>
      </section>

      <section className="rounded-[2rem] border border-[#1d4f3a] bg-[#1d4f3a] p-8 text-white">
        <h2 className="font-serif text-4xl">Book a consultation</h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[#e4f1ea]">
          Every plan is shaped by assessment and individual goals. If this concern feels relevant, the next step is a conversation with the clinic.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#1d4f3a]">
            Book a consultation
          </Link>
          <Link href="/treatments" className="inline-flex items-center justify-center rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white">
            Explore other treatments
          </Link>
        </div>
      </section>
    </div>
  );
}
