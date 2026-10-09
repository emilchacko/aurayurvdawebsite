import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogPosts } from "@/content/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = {
  ...buildMetadata({
    title: "Ayurveda Journal | Aura Ayurveda, Thiruvalla",
    description: "Upcoming educational articles from Aura Ayurveda in Manjadi near Thiruvalla, Kerala.",
    path: "/blog",
  }),
  robots: { index: false, follow: true },
};

export default function BlogPage() {
  return (
    <Container>
      <section className="py-16 sm:py-20">
        <SectionHeading
          as="h1"
          eyebrow="Ayurveda journal · Thiruvalla"
          title="Practical guidance, reviewed before publication."
          description="We’re preparing clear, educational articles about Ayurvedic consultations, hair and skin care, and women’s wellness. The articles below are planned topics, not published medical guidance."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className="border-t-2 border-[#a05435] bg-[#edf0e8] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a05435]">Planned · {post.category}</p>
              <h2 className="mt-2 font-serif text-2xl text-[#1d3026]">{post.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#58665c]">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
}
