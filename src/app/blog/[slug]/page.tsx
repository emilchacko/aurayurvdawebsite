import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticleView } from "@/components/blog/article-view";
import { blogPosts } from "@/content/blog";
import { malayalamPostSlugs } from "@/content/blog-ml";
import { assertValidContentLinks } from "@/content/validate-related-content";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  assertValidContentLinks();
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
    title: post.metaTitle ?? `${post.title} | ${siteConfig.businessName}, Kerala`,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
  const canonical = `${siteConfig.siteUrl}/blog/${post.slug}/`;
  const hasMalayalam = malayalamPostSlugs.includes(post.slug);

  return {
    ...metadata,
    alternates: {
      canonical,
      ...(hasMalayalam
        ? {
            languages: {
              en: canonical,
              ml: `${siteConfig.siteUrl}/ml/blog/${post.slug}/`,
              "x-default": canonical,
            },
          }
        : {}),
    },
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

  return <ArticleView post={post} locale="en" />;
}
