import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms | Aura Ayurveda",
  description: "Terms and conditions for Aura Ayurveda website visitors.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Container>
      <section className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Terms"
          title="Terms and legal information will be published before launch."
          description="This placeholder keeps the structure in place while the clinic finalizes its formal terms and policies."
        />
      </section>
    </Container>
  );
}
