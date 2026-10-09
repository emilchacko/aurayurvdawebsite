import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | Aura Ayurveda",
  description: "Privacy information and website policy for Aura Ayurveda.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <Container>
      <section className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Privacy Policy"
          title="Privacy information will be finalized before public launch."
          description="This page is intentionally prepared as a placeholder so the clinic can publish the final legal wording before go-live."
        />
      </section>
    </Container>
  );
}
