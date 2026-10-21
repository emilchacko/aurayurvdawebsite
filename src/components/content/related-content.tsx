import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { treatments } from "@/content/treatments";

export function RelatedTreatments({
  treatmentSlugs,
  heading = "Related treatments",
}: {
  treatmentSlugs: readonly string[];
  heading?: string;
}) {
  const related = treatmentSlugs
    .map((slug) => treatments.find((treatment) => treatment.slug === slug))
    .filter((treatment) => treatment !== undefined);

  if (related.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="related-treatments">
      <h2
        id="related-treatments"
        className="font-serif text-2xl text-[#1d3026]"
      >
        {heading}
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {related.map((treatment) => (
          <Link
            key={treatment.slug}
            href={`/treatments/${treatment.slug}/`}
            className="rounded-lg border border-[#d8ded4] bg-white p-4 transition hover:border-[#aab9a8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#214d3a]"
          >
            <span className="font-serif text-xl text-[#1d3026]">
              {treatment.title}
            </span>
            <span className="mt-2 block text-sm leading-6 text-[#58665c]">
              {treatment.shortDescription}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function RelatedArticles({
  treatmentSlug,
}: {
  treatmentSlug: string;
}) {
  const treatment = treatments.find((item) => item.slug === treatmentSlug);
  const declaredPostSlugs = treatment?.relatedPosts ?? [];
  const related = [...declaredPostSlugs, ...blogPosts
    .filter((post) => post.relatedTreatments.includes(treatmentSlug))
    .map((post) => post.slug)]
    .filter((slug, index, slugs) => slugs.indexOf(slug) === index)
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post) => post !== undefined);

  if (related.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="related-articles">
      <h2
        id="related-articles"
        className="font-serif text-2xl text-[#1d3026]"
      >
        Related articles
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}/`}
            className="rounded-lg border border-[#d8ded4] bg-white p-4 transition hover:border-[#aab9a8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#214d3a]"
          >
            <span className="font-serif text-xl text-[#1d3026]">
              {post.title}
            </span>
            <span className="mt-2 block text-sm leading-6 text-[#58665c]">
              {post.description}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
