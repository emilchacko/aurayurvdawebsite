import Link from "next/link";
import { Container } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | Aura Ayurveda",
  description: "Privacy information and website policy for Aura Ayurveda.",
  path: "/privacy-policy",
});

metadata.robots = { index: false, follow: true };

export default function PrivacyPolicyPage() {
  return (
    <Container>
      <section className="py-10 sm:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a05435]">Aura Ayurveda · Website information</p>
        <h1 className="mt-3 font-serif text-4xl text-[#1d3026]">Privacy information</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#58665c]">This website is an informational site. It does not provide user accounts, checkout or a website enquiry form.</p>

        <div className="mt-7 max-w-3xl divide-y divide-[#d8ded4] border-y border-[#d8ded4]">
          <section className="py-5">
            <h2 className="font-serif text-2xl text-[#1d3026]">Contacting the clinic</h2>
            <p className="mt-2 text-sm leading-7 text-[#58665c]">When you choose to call or open WhatsApp, you are using those services directly. Their providers may process information under their own privacy terms. Please avoid sending sensitive medical details in an initial message.</p>
          </section>
          <section className="py-5">
            <h2 className="font-serif text-2xl text-[#1d3026]">Maps and external links</h2>
            <p className="mt-2 text-sm leading-7 text-[#58665c]">The clinic map and Google review links are provided by Google. Opening or interacting with them may share data with Google under its own privacy policy.</p>
          </section>
          <section className="py-5">
            <h2 className="font-serif text-2xl text-[#1d3026]">Hosting and questions</h2>
            <p className="mt-2 text-sm leading-7 text-[#58665c]">The site is hosted through GitHub Pages. Hosting providers may process technical request data to deliver and protect the website. For a privacy question, contact Aura Ayurveda by phone or WhatsApp using the details on the <Link href="/contact" className="font-semibold text-[#214d3a] underline underline-offset-4">contact page</Link>.</p>
          </section>
        </div>
        <p className="mt-5 max-w-3xl text-xs leading-6 text-[#58665c]">This summary describes the current website features and is not legal advice. The clinic should obtain a formal review before collecting personal information or adding analytics, forms, or online payments.</p>
      </section>
    </Container>
  );
}
