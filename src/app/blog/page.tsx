import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogPosts } from "@/content/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog | Aura Ayurveda",
  description: "Educational articles and wellness insights for Ayurveda, hair care, skin care, and women’s wellness.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <Container>
      <section className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Blog"
          title="Educational content for a calmer, more informed wellness journey."
          description="The blog is structured to grow into a long-term SEO asset for the clinic, beginning with a few foundational topics."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-3xl border border-[#e5dccf] bg-white p-6 shadow-sm transition hover:-translate-y-0.5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#496d56]">{post.category}</p>
              <h3 className="mt-3 font-serif text-2xl text-[#1a2a2a]">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#536260]">{post.excerpt}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[#6b766e]">{post.publishedAt}</p>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}
