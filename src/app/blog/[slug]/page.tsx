import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ClinicJsonLd } from "@/components/seo/clinic-json-ld";
import { Container } from "@/components/ui/container";
import { blogPosts, type BlogBlock, type BlogPost } from "@/content/blog";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppUrl, withBasePath } from "@/lib/site";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

function getBlockText(block: BlogBlock): string {
  switch (block.type) {
    case "paragraph":
      return block.text;
    case "linkedParagraph":
      return `${block.before}${block.linkText}${block.after}`;
    case "orderedList":
    case "unorderedList":
      return block.items.join(" ");
    case "contactCta":
    case "disclaimer":
      return block.text;
    case "visitingInfo":
      return `${siteConfig.openingHours.display} ${siteConfig.address.display} ${siteConfig.whatsapp}`;
  }
}

function getReadingTime(post: BlogPost) {
  const articleText = [
    post.body.hook,
    post.body.internationalTerms,
    post.body.introduction,
    ...post.body.sections.flatMap((section) =>
      section.blocks.map(getBlockText),
    ),
  ].join(" ");
  const wordCount = articleText.trim().split(/\s+/).length;

  return Math.max(1, Math.ceil(wordCount / 200));
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return buildMetadata({
      title: `Article not found | ${siteConfig.businessName}`,
      description: "This article could not be found.",
      path: "/blog",
    });
  }

  const metadata = buildMetadata({
    title: `${post.title} | ${siteConfig.businessName}, Kerala`,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
  const canonical = `${siteConfig.siteUrl}/blog/${post.slug}/`;

  return {
    ...metadata,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: canonical,
      siteName: siteConfig.businessName,
      locale: "en_IN",
      publishedTime: `${post.publishedDate}T00:00:00.000Z`,
      modifiedTime: `${post.updatedDate}T00:00:00.000Z`,
      authors: [post.author.name],
      images: [
        {
          url: `${siteConfig.siteUrl}${post.heroImage.src}`,
          width: post.heroImage.width,
          height: post.heroImage.height,
          alt: post.heroImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${siteConfig.siteUrl}${post.heroImage.src}`],
    },
  };
}

function renderBlock(block: BlogBlock) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={block.text} className="text-base leading-7 text-[#46564b]">
          {block.text}
        </p>
      );
    case "linkedParagraph":
      return (
        <p key={block.linkText} className="text-base leading-7 text-[#46564b]">
          {block.before}
          <Link
            href={block.href}
            className="font-semibold text-[#214d3a] underline underline-offset-4"
          >
            {block.linkText}
          </Link>
          {block.after}
        </p>
      );
    case "orderedList":
    case "unorderedList": {
      const List = block.type === "orderedList" ? "ol" : "ul";
      const listStyle =
        block.type === "orderedList" ? "list-decimal" : "list-disc";

      return (
        <List
          key={block.items[0]}
          className={`space-y-3 pl-6 text-base leading-7 text-[#46564b] marker:font-semibold marker:text-[#a05435] ${listStyle}`}
        >
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </List>
      );
    }
    case "visitingInfo":
      return (
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm leading-7 text-[#46564b]">
              Consultations are by appointment via WhatsApp at{" "}
              <a
                href={getWhatsAppUrl(
                  `Hello, I am visiting Kerala and would like to ask about an Ayurvedic consultation at ${siteConfig.businessName}.`,
                )}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#214d3a] underline underline-offset-4"
              >
                {siteConfig.whatsapp}
              </a>
              . English-language consultation:{" "}
              <strong>[CONFIRM WITH CLINIC]</strong>.
            </p>
            <p className="mt-3 text-sm leading-7 text-[#46564b]">
              Clinic hours: {siteConfig.openingHours.manjadiDisplay}{" "}
              <strong>[CONFIRM WITH CLINIC: weekdays and current hours]</strong>.
              Times are India Standard Time (IST).
            </p>
            <p className="mt-3 text-sm leading-7 text-[#46564b]">
              Nearest airport and travel time:{" "}
              <strong>[PLACEHOLDER, CONFIRM]</strong>.
            </p>
            <p className="mt-3 text-sm leading-7 text-[#46564b]">
              The clinic address is {siteConfig.address.display}. Before your
              visit, bring a list of current medicines and share any allergies
              or health conditions with the doctor.
            </p>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full border border-[#214d3a] px-5 text-sm font-semibold text-[#214d3a] hover:bg-white"
            >
              Get directions
            </a>
          </div>
          <iframe
            src={siteConfig.googleMapsEmbedUrl}
            title={`Map showing ${siteConfig.businessName} at ${siteConfig.locationLabel}`}
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-[4/3] w-full rounded-lg border border-[#d8ded4] bg-white sm:aspect-[16/9]"
          />
        </div>
      );
    case "contactCta":
      return (
        <>
          <p className="text-base leading-7 text-white/90">{block.text}</p>
          <div className="mt-5 grid gap-3 sm:flex sm:flex-wrap">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#214d3a]"
            >
              Call {siteConfig.phone}
            </a>
            <a
              href={getWhatsAppUrl(
                `Hello, I would like to book a consultation at ${siteConfig.businessName} in ${siteConfig.locationLabel}.`,
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/70 px-5 text-sm font-semibold text-white"
            >
              WhatsApp
            </a>
            <Link
              href="/contact/"
              data-track-action="booking"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/70 px-5 text-sm font-semibold text-white"
            >
              Book a consultation
            </Link>
          </div>
        </>
      );
    case "disclaimer":
      return (
        <p
          key={block.text}
          className="text-sm italic leading-6 text-white/80"
        >
          {block.text}
        </p>
      );
  }
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  const canonical = `${siteConfig.siteUrl}/blog/${post.slug}/`;
  const breadcrumbItems = [
    { name: "Home", item: `${siteConfig.siteUrl}/` },
    { name: "Blog", item: `${siteConfig.siteUrl}/blog/` },
    { name: post.title, item: canonical },
  ];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: `${post.publishedDate}T00:00:00.000Z`,
    dateModified: `${post.updatedDate}T00:00:00.000Z`,
    author: {
      "@type": post.author.type,
      name: post.author.name,
      url: post.author.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.businessName,
      url: siteConfig.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logoUrl,
      },
    },
    mainEntityOfPage: canonical,
    image: `${siteConfig.siteUrl}${post.heroImage.src}`,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
  const schemas = [articleSchema, faqSchema, breadcrumbSchema];

  return (
    <>
      <ClinicJsonLd />
      {schemas.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      <Container>
        <article className="mx-auto max-w-4xl pb-16 sm:pb-20">
          <header className="pb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a05435]">
              Ayurveda journal · Kerala
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-[#1d3026] sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#58665c]">
              <span>{getReadingTime(post)} min read</span>
              <span>Published {formatDate(post.publishedDate)}</span>
              <span>Updated {formatDate(post.updatedDate)}</span>
            </div>
            <Image
              src={withBasePath(post.heroImage.src)}
              alt={post.heroImage.alt}
              width={post.heroImage.width}
              height={post.heroImage.height}
              sizes="(max-width: 768px) 100vw, 896px"
              priority
              className="mt-6 aspect-[1.5/1] w-full rounded-xl object-cover"
            />
          </header>

          <div className="mx-auto max-w-[70ch] space-y-6">
            <p className="text-lg leading-8 text-[#34463b]">
              {post.body.hook}
            </p>
            <p className="text-base leading-7 text-[#46564b]">
              {post.body.introduction}
            </p>
            <p className="text-sm leading-7 text-[#58665c]">
              {post.body.internationalTerms}
            </p>

            {post.body.sections.map((section) => (
              <section
                key={section.heading}
                className={
                  section.boxed
                    ? "rounded-xl border border-[#d8ded4] bg-[#edf0e8] p-5 sm:p-7"
                    : "space-y-4"
                }
              >
                {section.heading === "Talk to us" ? (
                  <div className="rounded-xl bg-[#214d3a] p-5 text-white sm:p-7">
                    <h2 className="font-serif text-3xl text-white">
                      {section.heading}
                    </h2>
                    {section.blocks.map((block) => (
                      <div className="mt-4" key={block.type}>
                        {renderBlock(block)}
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <h2 className="font-serif text-3xl text-[#1d3026]">
                      {section.heading}
                    </h2>
                    <div className="space-y-4">
                      {section.blocks.map((block, index) => (
                        <div key={`${block.type}-${index}`}>
                          {renderBlock(block)}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </section>
            ))}

            <section aria-labelledby="related-reading">
              <h2
                id="related-reading"
                className="font-serif text-2xl text-[#1d3026]"
              >
                Related reading
              </h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {post.relatedLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex min-h-11 items-center font-semibold text-[#214d3a] underline underline-offset-4"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="article-faq">
              <h2
                id="article-faq"
                className="font-serif text-3xl text-[#1d3026]"
              >
                Frequently asked questions
              </h2>
              <div className="mt-4 divide-y divide-[#d8ded4] border-y border-[#d8ded4]">
                {post.faq.map((item) => (
                  <details key={item.question} className="group py-4">
                    <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#1d3026] [&::-webkit-details-marker]:hidden">
                      {item.question}
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-xl text-[#a05435] group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="pb-2 pt-3 text-sm leading-7 text-[#58665c]">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </article>
      </Container>
    </>
  );
}
