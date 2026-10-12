import { siteConfig } from "@/config/site";

export type BlogLink = {
  href: string;
  label: string;
};

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | {
      type: "linkedParagraph";
      before: string;
      linkText: string;
      href: string;
      after: string;
    }
  | { type: "orderedList"; items: readonly string[] }
  | { type: "unorderedList"; items: readonly string[] }
  | { type: "visitingInfo" }
  | { type: "contactCta"; text: string }
  | { type: "disclaimer"; text: string };

export type BlogSection = {
  heading: string;
  blocks: readonly BlogBlock[];
  boxed?: boolean;
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedDate: string;
  updatedDate: string;
  author: {
    type: "Organization";
    name: string;
    url: string;
  };
  heroImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  body: {
    hook: string;
    internationalTerms: string;
    introduction: string;
    sections: readonly BlogSection[];
  };
  faq: readonly BlogFaq[];
  relatedLinks: readonly BlogLink[];
};

export const blogPosts: readonly BlogPost[] = [
  {
    slug: "food-as-medicine-ayurveda",
    title: "Food as Medicine: The Ayurvedic Way of Eating",
    description:
      "What does food as medicine mean in Ayurveda? Simple eating principles from a Kerala Ayurveda clinic in Manjadi, Thiruvalla. Visitors from abroad welcome.",
    publishedDate: "2026-10-12",
    updatedDate: "2026-10-12",
    author: {
      type: "Organization",
      name: siteConfig.businessName,
      url: siteConfig.siteUrl,
    },
    heroImage: {
      src: "/images/focus-areas/ayurvedic-medicines.jpg",
      alt: "Illustrative amber bottle associated with Ayurvedic wellness",
      width: 640,
      height: 420,
    },
    body: {
      hook:
        "Kerala is widely known as a home of Ayurvedic tradition, and many visitors from outside India are curious about how everyday food fits into it. Aura Ayurveda is in Manjadi, near Thiruvalla, in Kerala.",
      internationalTerms:
        "For readers abroad, Ayurvedic diet and Ayurvedic food are terms used for these food traditions; Kerala Ayurveda describes the regional context. An Ayurvedic consultation is an opportunity to ask a doctor what may suit your individual needs.",
      introduction:
        "There is an old saying often linked to Ayurveda: let food be your medicine. In many Kerala homes, this idea isn't new. Ginger and cumin water for an upset stomach, rice kanji when someone is unwell, and special foods for new mothers are all part of everyday life. Here is what Ayurveda means by it, in simple terms.",
      sections: [
        {
          heading: "The basic idea",
          blocks: [
            {
              type: "paragraph",
              text: "Ayurveda treats food as the foundation of health, not just fuel. What you eat, when you eat, and how well you digest it all matter. The traditional view is that good digestion supports good health, and that eating the wrong things, or at the wrong time, can leave you feeling heavy, tired, or unwell. This does not mean food replaces medicine. It means everyday eating is the first and most regular form of care you give your body.",
            },
          ],
        },
        {
          heading: "Simple principles",
          blocks: [
            {
              type: "orderedList",
              items: [
                "Eat fresh and warm. Freshly cooked, warm meals are favoured over cold, stale, or heavily processed food.",
                "Eat with the seasons. Lighter, easily digested food in the hot months. Warm, nourishing food in the rains and cooler weather. This is why Kerala has special monsoon food traditions.",
                "Eat at regular times. Having your main meal at midday, when digestion is traditionally considered strongest, and a lighter dinner earlier in the evening.",
                "Include all six tastes. Ayurveda describes sweet, sour, salty, bitter, pungent, and astringent tastes. A varied plate with vegetables, grains, pulses, and spices naturally covers them.",
                "Eat mindfully. Sit down, chew well, and avoid eating while distracted or in a rush. Stop before you feel overly full.",
                "Use common kitchen spices. Turmeric, ginger, cumin, coriander, black pepper, and curry leaves are traditional parts of Kerala cooking and are valued in Ayurveda.",
                "Choose food to suit the person. Ayurveda says one diet doesn't fit everyone. Age, season, digestion, and health conditions all affect what suits you, which is why a doctor's advice matters.",
              ],
            },
          ],
        },
        {
          heading: "Food in special stages of life",
          blocks: [
            {
              type: "linkedParagraph",
              before:
                "Ayurveda gives particular attention to nourishing food during times of recovery, such as ",
              linkText: "after childbirth",
              href: "/treatments/prasavaraksha/",
              after:
                ", illness, or when digestion is weak. Warm, simple, easily digested meals are traditionally recommended in these periods, usually along with a doctor's guidance.",
            },
          ],
        },
        {
          heading: "A few honest points",
          blocks: [
            {
              type: "unorderedList",
              items: [
                "Food can support health, but it cannot cure serious illness. Please continue any prescribed treatment.",
                "If you have diabetes, high blood pressure, kidney problems, allergies, or are pregnant or breastfeeding, check with your doctor before changing your diet or adding herbs.",
                '"Natural" doesn\'t always mean safe for everyone. A qualified practitioner can tell you what suits you.',
              ],
            },
          ],
        },
        {
          heading: "Small steps to start this week",
          blocks: [
            {
              type: "unorderedList",
              items: [
                "Have one freshly cooked, warm meal a day without screens.",
                "Add a few familiar spices to your cooking.",
                "Keep dinner lighter and earlier.",
                "Notice how different foods make you feel.",
              ],
            },
          ],
        },
        {
          heading: "Visiting Kerala from abroad?",
          boxed: true,
          blocks: [{ type: "visitingInfo" }],
        },
        {
          heading: "Talk to us",
          blocks: [
            {
              type: "contactCta",
              text: "At Aura Ayurveda in Manjadi, near Thiruvalla, our doctor can discuss food and lifestyle suited to your needs. Book a consultation by phone or WhatsApp.",
            },
            {
              type: "disclaimer",
              text: "This article is for general information and isn't a substitute for medical advice.",
            },
          ],
        },
      ],
    },
    faq: [
      {
        question: "What is food as medicine in Ayurveda?",
        answer:
          "It is the traditional idea that everyday food and digestion are an important part of caring for health. Food does not replace prescribed medicine or medical advice.",
      },
      {
        question: "Is there one Ayurvedic diet for everyone?",
        answer:
          "No. The article describes an individualized approach; ask a doctor what may suit your age, digestion, season, and health conditions.",
      },
      {
        question: "What are the six tastes in Ayurveda?",
        answer:
          "Sweet, sour, salty, bitter, pungent, and astringent.",
      },
      {
        question: "Can Ayurvedic food replace my regular medicines?",
        answer:
          "No. Continue prescribed treatment and speak with your doctor before changing your diet or adding herbs.",
      },
      {
        question:
          "Can I book an Ayurvedic consultation if I'm visiting Kerala from abroad?",
        answer: `Appointments can be requested via WhatsApp at ${siteConfig.whatsapp}. Please contact the clinic to confirm other visit details.`,
      },
    ],
    relatedLinks: [
      { href: "/treatments/", label: "Explore Ayurvedic treatments" },
      { href: "/doctor/", label: "Meet the clinic doctor" },
      { href: "/contact/", label: "Contact Aura Ayurveda" },
      {
        href: "/treatments/prasavaraksha/",
        label: "Read about prasavaraksha postnatal care",
      },
    ],
  },
];
