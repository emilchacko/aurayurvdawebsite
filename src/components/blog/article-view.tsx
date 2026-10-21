import Image from "next/image";
import Link from "next/link";
import { ClinicJsonLd } from "@/components/seo/clinic-json-ld";
import { VisitingKeralaInfo } from "@/components/content/visiting-kerala-info";
import { RelatedTreatments } from "@/components/content/related-content";
import { Container } from "@/components/ui/container";
import type { BlogBlock, BlogPost } from "@/content/blog";
import { visitorAirportInfo } from "@/content/visitor-info";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl, withBasePath } from "@/lib/site";

export type ArticleLocale = "en" | "ml";

const strings = {
  en: {
    eyebrow: "Ayurveda journal · Kerala",
    minRead: "min read",
    published: "Published",
    updated: "Updated",
    call: "Call",
    book: "Book a consultation",
    whatsapp: "WhatsApp",
    relatedReading: "Related reading",
    faq: "Frequently asked questions",
    relatedTreatments: "Related treatments",
    languageLabel: "Language",
    home: "Home",
    blog: "Blog",
    allArticles: "All articles",
    whatsappMessage: `Hello, I would like to book a consultation at ${siteConfig.businessName} in ${siteConfig.locationLabel}.`,
  },
  ml: {
    eyebrow: "ആയുർവേദ ജേണൽ · കേരളം",
    minRead: "മിനിറ്റ് വായന",
    published: "പ്രസിദ്ധീകരിച്ചത്",
    updated: "പുതുക്കിയത്",
    call: "വിളിക്കുക",
    book: "കൺസൾട്ടേഷൻ ബുക്ക് ചെയ്യുക",
    whatsapp: "വാട്സ്ആപ്പ്",
    relatedReading: "കൂടുതൽ വായനയ്ക്ക്",
    faq: "പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ",
    relatedTreatments: "ബന്ധപ്പെട്ട ചികിത്സകൾ",
    languageLabel: "ഭാഷ",
    home: "ഹോം",
    blog: "ബ്ലോഗ്",
    allArticles: "എല്ലാ ലേഖനങ്ങളും",
    whatsappMessage: `Hello, I would like to book a consultation at ${siteConfig.businessName} in ${siteConfig.locationLabel}.`,
  },
} as const;

export function articlePath(slug: string, locale: ArticleLocale) {
  return locale === "ml" ? `/ml/blog/${slug}/` : `/blog/${slug}/`;
}

function formatDate(value: string, locale: ArticleLocale) {
  return new Intl.DateTimeFormat(locale === "ml" ? "ml-IN" : "en", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

function getBlockText(block: BlogBlock): string {
  switch (block.type) {
    case "paragraph":
      return block.text;
    case "subheading":
      return block.text;
    case "linkedParagraph":
      return `${block.before}${block.linkText}${block.after}`;
    case "orderedList":
    case "unorderedList":
      return block.items.join(" ");
    case "contactCta":
      return block.text;
    case "visitingInfo":
      return `${visitorAirportInfo} ${siteConfig.openingHours.display} ${siteConfig.address.display} ${siteConfig.whatsapp}`;
  }
}

function getReadingTime(post: BlogPost, locale: ArticleLocale) {
  const articleText = [
    post.body.hook,
    post.body.internationalTerms,
    post.body.introduction,
    ...post.body.sections.flatMap((section) =>
      section.blocks.map(getBlockText),
    ),
  ].join(" ");
  const wordCount = articleText.trim().split(/\s+/).length;
  const wordsPerMinute = locale === "ml" ? 120 : 200;

  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

function renderBlock(block: BlogBlock, locale: ArticleLocale) {
  const t = strings[locale];

  switch (block.type) {
    case "paragraph":
      return (
        <p key={block.text} className="text-base leading-7 text-[#46564b]">
          {block.text}
        </p>
      );
    case "subheading":
      return (
        <h3 className="font-serif text-2xl text-[#1d3026]">{block.text}</h3>
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
      return <VisitingKeralaInfo locale={locale} />;
    case "contactCta":
      return (
        <>
          <p className="text-base leading-7 text-white/90">{block.text}</p>
          <div className="mt-5 grid gap-3 sm:flex sm:flex-wrap">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#214d3a]"
            >
              {t.call} {siteConfig.phone}
            </a>
            <a
              href={getWhatsAppUrl(block.whatsappMessage ?? t.whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/70 px-5 text-sm font-semibold text-white"
            >
              {block.whatsappLabel ?? t.whatsapp}
            </a>
            <Link
              href="/contact/"
              data-track-action="booking"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/70 px-5 text-sm font-semibold text-white"
            >
              {t.book}
            </Link>
          </div>
          {siteConfig.englishConsultation ? (
            <p className="mt-3 text-sm leading-6 text-white/80">
              {locale === "ml"
                ? "കൺസൾട്ടേഷൻ ഇംഗ്ലീഷിലും ലഭ്യമാണ്."
                : `${siteConfig.englishConsultationLabel}.`}
            </p>
          ) : null}
        </>
      );
  }
}

function LanguageToggle({
  slug,
  locale,
}: {
  slug: string;
  locale: ArticleLocale;
}) {
  const options = [
    { code: "en", label: "English", lang: "en" },
    { code: "ml", label: "മലയാളം", lang: "ml" },
  ] as const;

  return (
    <nav
      aria-label={strings[locale].languageLabel}
      className="inline-flex rounded-full border border-[#d8ded4] bg-white p-1 text-sm font-semibold shadow-sm print:hidden"
    >
      {options.map((option) => {
        const active = option.code === locale;

        return (
          <Link
            key={option.code}
            href={articlePath(slug, option.code)}
            lang={option.lang}
            hrefLang={option.lang}
            aria-current={active ? "true" : undefined}
            className={`inline-flex min-h-9 items-center rounded-full px-4 transition ${
              active
                ? "bg-[#214d3a] text-white"
                : "text-[#214d3a] hover:bg-[#edf0e8]"
            }`}
          >
            {option.label}
          </Link>
        );
      })}
    </nav>
  );
}

function hasContactCta(section: BlogPost["body"]["sections"][number]) {
  return section.blocks.some((block) => block.type === "contactCta");
}

export function ArticleView({
  post,
  locale,
}: {
  post: BlogPost;
  locale: ArticleLocale;
}) {
  const t = strings[locale];
  const ml = locale === "ml";
  const canonical = `${siteConfig.siteUrl}${articlePath(post.slug, locale)}`;
  const breadcrumbItems = [
    { name: t.home, item: `${siteConfig.siteUrl}/` },
    { name: t.blog, item: `${siteConfig.siteUrl}/blog/` },
    { name: post.title, item: canonical },
  ];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    inLanguage: locale,
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
    inLanguage: locale,
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
        <article
          lang={locale}
          className="mx-auto max-w-4xl pb-16 sm:pb-20"
        >
          <header className="pb-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a05435]">
                {t.eyebrow}
              </p>
              <LanguageToggle slug={post.slug} locale={locale} />
            </div>
            <h1
              className={`mt-3 font-serif text-4xl text-[#1d3026] sm:text-5xl ${
                ml ? "leading-[1.35] sm:leading-[1.3]" : "leading-tight"
              }`}
            >
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#58665c]">
              <span>
                {getReadingTime(post, locale)} {t.minRead}
              </span>
              <span>
                {t.published} {formatDate(post.publishedDate, locale)}
              </span>
              <span>
                {t.updated} {formatDate(post.updatedDate, locale)}
              </span>
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

          <div
            className={`mx-auto max-w-[70ch] space-y-6 ${ml ? "[&_h2]:leading-[1.4] [&_h3]:leading-[1.4]" : ""}`}
          >
            {post.body.hook ? (
              <p className="text-lg leading-8 text-[#34463b]">
                {post.body.hook}
              </p>
            ) : null}
            {post.body.introduction ? (
              <p className="text-base leading-7 text-[#46564b]">
                {post.body.introduction}
              </p>
            ) : null}
            {post.body.internationalTerms ? (
              <p className="text-sm leading-7 text-[#58665c]">
                {post.body.internationalTerms}
              </p>
            ) : null}

            {post.body.sections
              .filter((section) => !section.afterArticle)
              .map((section) => (
                <section
                  key={section.heading}
                  className={
                    section.boxed
                      ? "rounded-xl border border-[#d8ded4] bg-[#edf0e8] p-5 sm:p-7"
                      : "space-y-4"
                  }
                >
                  {hasContactCta(section) ? (
                    <div className="rounded-xl bg-[#214d3a] p-5 text-white sm:p-7">
                      <h2 className="font-serif text-3xl text-white">
                        {section.heading}
                      </h2>
                      {section.blocks.map((block, index) => (
                        <div className="mt-4" key={`${block.type}-${index}`}>
                          {renderBlock(block, locale)}
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
                            {renderBlock(block, locale)}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </section>
              ))}

            {post.body.sections
              .filter((section) => section.afterArticle)
              .map((section) => (
                <section
                  key={section.heading}
                  className="rounded-xl bg-[#214d3a] p-5 text-white sm:p-7"
                >
                  <h2 className="font-serif text-3xl text-white">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.blocks.map((block, index) => (
                      <div key={`${block.type}-${index}`}>
                        {renderBlock(block, locale)}
                      </div>
                    ))}
                  </div>
                </section>
              ))}

            <section aria-labelledby="related-reading">
              <h2
                id="related-reading"
                className="font-serif text-2xl text-[#1d3026]"
              >
                {t.relatedReading}
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
                {t.faq}
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

            <RelatedTreatments
              treatmentSlugs={post.relatedTreatments}
              heading={t.relatedTreatments}
            />

            {ml ? (
              <p>
                <Link
                  href="/blog/"
                  className="font-semibold text-[#214d3a] underline underline-offset-4"
                >
                  ← {t.allArticles}
                </Link>
              </p>
            ) : null}
          </div>
        </article>
      </Container>
    </>
  );
}
