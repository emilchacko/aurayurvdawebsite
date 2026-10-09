export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-to-expect-from-an-ayurvedic-consultation",
    title: "What to expect from an Ayurvedic consultation",
    excerpt: "A simple overview of how an assessment typically works and what information may help during your first visit.",
    category: "General Ayurveda",
    publishedAt: "Coming soon",
  },
  {
    slug: "understanding-ayurvedic-hair-care",
    title: "Understanding Ayurvedic hair care",
    excerpt: "A practical introduction to scalp and hair wellness from a personalized care perspective.",
    category: "Hair Care",
    publishedAt: "Coming soon",
  },
  {
    slug: "ayurveda-and-everyday-skin-wellness",
    title: "Ayurveda and everyday skin wellness",
    excerpt: "A balanced look at how lifestyle, routines, and individualized care can support skin wellness.",
    category: "Skin Care",
    publishedAt: "Coming soon",
  },
  {
    slug: "ayurvedic-care-for-women",
    title: "Ayurvedic care for women",
    excerpt: "A respectful introduction to women’s wellness and the role of personalized care in everyday health.",
    category: "Women’s Wellness",
    publishedAt: "Coming soon",
  },
];
