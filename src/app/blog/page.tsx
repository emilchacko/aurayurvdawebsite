import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ClinicJsonLd } from "@/components/seo/clinic-json-ld";
import { blogPosts } from "@/content/blog";
import { treatments } from "@/content/treatments";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { withBasePath } from "@/lib/site";

export const metadata = buildMetadata({
  title: `Ayurveda Blog | ${siteConfig.businessName}, Kerala`,
  description:
    "Read practical articles about Ayurveda, food, and Kerala traditions from Aura Ayurveda in Thiruvalla, Kerala.",
  path: "/blog",
});

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

export default function BlogPage() {
  return (
    <>
      <ClinicJsonLd />
      <Container>
        <section className="py-10 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a05435]">
            Ayurveda journal · Kerala
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-[#1d3026] sm:text-5xl">
            Notes on Ayurveda, food, and everyday life
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#58665c]">
            Explore practical, general information from {siteConfig.businessName}{" "}
            in {siteConfig.locationLabel}. Articles do not replace individual
            medical advice.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="overflow-hidden rounded-xl border border-[#d8ded4] bg-white"
              >
                <Link
                  href={`/blog/${post.slug}/`}
                  className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#214d3a]"
                >
                  <Image
                    src={withBasePath(post.heroImage.src)}
                    alt={post.heroImage.alt}
                    width={post.heroImage.width}
                    height={post.heroImage.height}
                    sizes="(max-width: 639px) 100vw, 50vw"
                    className="aspect-[1.5/1] w-full object-cover"
                  />
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a05435]">
                      {formatDate(post.publishedDate)}
                    </p>
                    <h2 className="mt-2 font-serif text-2xl leading-tight text-[#1d3026] group-hover:text-[#214d3a]">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-[#58665c]">
                      {post.description}
                    </p>
                    <span className="mt-4 inline-flex min-h-11 items-center font-semibold text-[#214d3a] underline underline-offset-4">
                      Read the article
                    </span>
                  </div>
                </Link>
                {post.relatedTreatments.length > 0 ? (
                  <div className="border-t border-[#d8ded4] px-5 pb-5 pt-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a05435]">
                      Related treatments
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                      {post.relatedTreatments.map((slug) => {
                        const treatment = treatments.find(
                          (item) => item.slug === slug,
                        );

                        return treatment ? (
                          <li key={slug}>
                            <Link
                              href={`/treatments/${slug}/`}
                              className="inline-flex min-h-11 items-center text-sm font-semibold text-[#214d3a] underline underline-offset-4"
                            >
                              {treatment.title}
                            </Link>
                          </li>
                        ) : null;
                      })}
                    </ul>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
