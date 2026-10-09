import Link from "next/link";
import { Container } from "@/components/ui/container";
import { getWhatsAppUrl } from "@/lib/site";

export default function NotFound() {
  return (
    <Container>
      <section className="flex min-h-[60vh] items-center justify-center py-12">
        <div className="max-w-lg text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a05435]">404 · Aura Ayurveda</p>
          <h1 className="mt-3 font-serif text-4xl text-[#1d3026]">We can’t find that page.</h1>
          <p className="mt-3 text-sm leading-7 text-[#58665c]">Try the services or store pages, or ask the clinic a question directly.</p>
          <div className="mt-6 grid gap-3 sm:flex sm:justify-center">
            <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#214d3a] px-5 text-sm font-semibold text-white">Go to home</Link>
            <Link href="/treatments" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#cbd4c9] px-5 text-sm font-semibold text-[#214d3a]">Browse treatments</Link>
            <a href={getWhatsAppUrl("Hello, I need help finding information about Aura Ayurveda.")} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#cbd4c9] px-5 text-sm font-semibold text-[#214d3a]">Ask on WhatsApp</a>
          </div>
        </div>
      </section>
    </Container>
  );
}
