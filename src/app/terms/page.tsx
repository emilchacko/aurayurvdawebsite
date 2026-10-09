import { Container } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms | Aura Ayurveda",
  description: "Terms and conditions for Aura Ayurveda website visitors.",
  path: "/terms",
});

metadata.robots = { index: false, follow: true };

export default function TermsPage() {
  return (
    <Container>
      <section className="py-10 sm:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a05435]">Aura Ayurveda · Website information</p>
        <h1 className="mt-3 font-serif text-4xl text-[#1d3026]">Website terms</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#58665c]">By using this site, you understand that it provides general clinic, service and product information. Please contact Aura Ayurveda to confirm current details before making a decision or travelling.</p>

        <div className="mt-7 max-w-3xl divide-y divide-[#d8ded4] border-y border-[#d8ded4]">
          <section className="py-5">
            <h2 className="font-serif text-2xl text-[#1d3026]">Health information</h2>
            <p className="mt-2 text-sm leading-7 text-[#58665c]">Website content is not a diagnosis, personal treatment recommendation, or substitute for appropriate medical care. For urgent or severe symptoms, seek timely care from an appropriate medical professional.</p>
          </section>
          <section className="py-5">
            <h2 className="font-serif text-2xl text-[#1d3026]">Treatments and products</h2>
            <p className="mt-2 text-sm leading-7 text-[#58665c]">Service descriptions and product images are informational. Availability, prices, ingredients, contents and suitability can change and should be confirmed directly with the clinic. Individual responses and outcomes vary; no result is guaranteed.</p>
          </section>
          <section className="py-5">
            <h2 className="font-serif text-2xl text-[#1d3026]">Appointments and external services</h2>
            <p className="mt-2 text-sm leading-7 text-[#58665c]">This website does not take bookings or payments. A WhatsApp or phone enquiry is not a confirmed appointment; the clinic will confirm arrangements directly. External maps and review sites are governed by their own terms.</p>
          </section>
        </div>
        <p className="mt-5 max-w-3xl text-xs leading-6 text-[#58665c]">These general website terms should receive formal legal review before being treated as final clinic terms.</p>
      </section>
    </Container>
  );
}
