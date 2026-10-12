import { blogPosts } from "@/content/blog";
import { treatments } from "@/content/treatments";

export function assertValidContentLinks() {
  const treatmentSlugs = new Set(treatments.map((treatment) => treatment.slug));
  const postSlugs = new Set(blogPosts.map((post) => post.slug));

  for (const post of blogPosts) {
    for (const treatmentSlug of post.relatedTreatments) {
      if (!treatmentSlugs.has(treatmentSlug)) {
        throw new Error(
          `Blog post "${post.slug}" links to unknown treatment "${treatmentSlug}".`,
        );
      }
    }
  }

  for (const treatment of treatments) {
    for (const postSlug of treatment.relatedPosts) {
      if (!postSlugs.has(postSlug)) {
        throw new Error(
          `Treatment "${treatment.slug}" links to unknown blog post "${postSlug}".`,
        );
      }
    }
  }
}
