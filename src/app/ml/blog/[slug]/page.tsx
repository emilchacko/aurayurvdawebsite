import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticleView } from "@/components/blog/article-view";
import { getMalayalamPost, malayalamPostSlugs } from "@/content/blog-ml";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return malayalamPostSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getMalayalamPost(slug);

  if (!post) {
    return buildMetadata({
      title: `Article not found | ${siteConfig.businessName}`,
      description: "This article could not be found.",
      path: "/blog",
    });
  }

  const englishUrl = `${siteConfig.siteUrl}/blog/${post.slug}/`;
  const canonical = `${siteConfig.siteUrl}/ml/blog/${post.slug}/`;
  const metadata = buildMetadata({
    title: post.metaTitle ?? post.title,
    description: post.description,
    path: `/ml/blog/${post.slug}`,
  });

  return {
    ...metadata,
    alternates: {
      canonical,
      languages: {
        en: englishUrl,
        ml: canonical,
        "x-default": englishUrl,
      },
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: canonical,
      siteName: siteConfig.businessName,
      locale: "ml_IN",
      alternateLocale: ["en_IN"],
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

export default async function MalayalamBlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getMalayalamPost(slug);

  if (!post) {
    notFound();
  }

  return <ArticleView post={post} locale="ml" />;
}
