import { siteConfig } from "@/config/site";
import { kalariSessionText } from "@/content/kalari";

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
  metaTitle?: string;
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
  relatedTreatments: readonly string[];
};

export const blogPosts: readonly BlogPost[] = [
  {
    slug: "food-as-medicine-ayurveda",
    title: "Food as Medicine: The Ayurvedic Way of Eating",
    relatedTreatments: ["prasavaraksha"],
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
        answer: `Appointments can be requested via WhatsApp at ${siteConfig.whatsapp}. ${siteConfig.englishConsultationText} Please contact the clinic to confirm other visit details.`,
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
  {
    slug: "kalari-marma-massage-kerala",
    title: "Kalari Marma Massage in Kerala: What It Is and What to Expect",
    metaTitle:
      "Kalari Marma (Varma) Massage in Kerala: A Visitor's Guide | Aura Ayurveda",
    description:
      "What is Kalari marma (varma) massage, and what should visitors to Kerala expect? A plain guide from an Ayurveda clinic in Manjadi, near Thiruvalla.",
    publishedDate: "2026-10-12",
    updatedDate: "2026-10-12",
    author: {
      type: "Organization",
      name: siteConfig.businessName,
      url: siteConfig.siteUrl,
    },
    heroImage: {
      src: "/images/focus-areas/ayurvedic-therapies.jpg",
      alt: "Illustrative Ayurvedic massage image; not a photograph of a Kalari session at Aura Ayurveda",
      width: 900,
      height: 620,
    },
    body: {
      hook:
        "Kerala is widely known as a home of traditional Ayurvedic therapies, and many visitors from abroad are curious about one of its most distinctive hands-on traditions: Kalari marma massage. This guide explains it simply, so you know what to ask before you book.",
      internationalTerms: "",
      introduction: "",
      sections: [
        {
          heading: 'What does "Kalari marma massage" mean?',
          blocks: [
            {
              type: "paragraph",
              text: "Kalari refers to the traditional training space of kalaripayattu, Kerala's ancient martial art. Marma (also spelled varma in the south) refers to vital points of the body described in traditional Indian texts. Kalari marma massage, sometimes called varma massage, is a hands-on Kerala therapy connected to this tradition, usually done with herbal oils.",
            },
          ],
        },
        {
          heading: "Marma or varma: is there a difference?",
          blocks: [
            {
              type: "paragraph",
              text: 'The two words describe the same traditional idea. "Marma" is the Sanskrit-derived spelling used widely across India. "Varma" is the form common in Kerala and Tamil traditions. You may see both on clinic websites; they usually refer to the same style of therapy.',
            },
          ],
        },
        {
          heading: "How is it different from other Kerala therapies?",
          blocks: [
            {
              type: "linkedParagraph",
              before: "Kerala is also known for ",
              linkText: "Panchakarma massage",
              href: "/treatments/panchakarma-massage/",
              after:
                " and oil massages such as abhyanga. These are often longer, programme-style therapies. Kalari marma massage is described as more focused on specific points and movement. Which one suits you is best decided with a doctor.",
            },
          ],
        },
        {
          heading: "What does a session involve at Aura Ayurveda?",
          blocks: [
            { type: "paragraph", text: kalariSessionText },
          ],
        },
        {
          heading: "Who should check with a doctor first?",
          blocks: [
            {
              type: "paragraph",
              text: "Tell the doctor before booking if you are pregnant, have an injury, recent surgery, a skin condition, high blood pressure, a heart condition, or take blood thinners. Hands-on therapies are not suitable for everyone, and the doctor decides what is appropriate for you.",
            },
          ],
        },
        {
          heading: "What it is not",
          blocks: [
            {
              type: "paragraph",
              text: "It is not a medical treatment for any disease and doesn't replace medical care. Please continue any prescribed treatment and seek medical help for serious or sudden symptoms.",
            },
          ],
        },
        {
          heading: "Tips for visitors from abroad",
          blocks: [
            {
              type: "unorderedList",
              items: [
                `Book ahead by WhatsApp at ${siteConfig.whatsapp}.`,
                `${siteConfig.englishConsultationText} You can discuss your needs with the doctor directly.`,
                "Bring a list of current medicines and any allergies.",
                "Wear comfortable clothing and allow time to rest afterwards.",
                "Clinic hours are in India Standard Time (IST).",
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
          heading: "Visit Aura Ayurveda, Manjadi",
          blocks: [
            {
              type: "contactCta",
              text: "Aura Ayurveda is in Manjadi, near Thiruvalla, Kerala. Contact the clinic to ask about a consultation and discuss whether a Kalari session may be appropriate after assessment.",
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
        question: "What is Kalari marma massage?",
        answer:
          "It is a hands-on Kerala therapy connected to kalaripayattu and the traditional understanding of marma points. The doctor decides whether a session is appropriate after consultation.",
      },
      {
        question: "What is the difference between marma and varma?",
        answer:
          "The terms describe the same traditional idea; marma is a widely used spelling, while varma is common in Kerala and Tamil traditions.",
      },
      {
        question: "How is it different from Panchakarma or abhyanga?",
        answer:
          "They are different traditional approaches. The doctor can explain them and discuss which, if any, may be appropriate for you after hearing your circumstances.",
      },
      {
        question: "Who should check with a doctor before booking?",
        answer:
          "Tell the doctor if you are pregnant, have an injury, recent surgery, a skin condition, high blood pressure, a heart condition, or take blood thinners.",
      },
      {
        question:
          "Can I book while visiting Kerala from abroad?",
        answer: `You can ask about an appointment by WhatsApp at ${siteConfig.whatsapp}. ${siteConfig.englishConsultationText} The doctor decides what is appropriate after the consultation; please confirm appointment availability and travel details with the clinic.`,
      },
    ],
    relatedLinks: [
      {
        href: "/treatments/kalari-varma-massage/",
        label: "Read about Kalari Marma (Varma) Massage at Aura Ayurveda",
      },
      { href: "/treatments/", label: "Explore Ayurvedic treatments" },
      { href: "/doctor/", label: "Meet the clinic doctor" },
      { href: "/contact/", label: "Contact Aura Ayurveda" },
    ],
    relatedTreatments: [
      "kalari-varma-massage",
      "panchakarma-massage",
    ],
  },
  {
    slug: "knee-back-pain-thiruvalla",
    title:
      "Knee and Back Pain in Thiruvalla: What to Know and When to Seek Care",
    metaTitle: "Knee & Back Pain in Thiruvalla | Aura Ayurveda",
    description:
      "Looking for information about knee pain or back pain in Thiruvalla? Learn what to discuss at a consultation, when to seek urgent care, and how to contact Aura Ayurveda in Manjadi.",
    publishedDate: "2026-10-13",
    updatedDate: "2026-10-13",
    author: {
      type: "Organization",
      name: siteConfig.businessName,
      url: siteConfig.siteUrl,
    },
    heroImage: {
      src: "/images/focus-areas/joint-muscle.jpg",
      alt: "Illustrative image of a man holding his lower back outdoors; not a clinic patient or treatment",
      width: 1152,
      height: 768,
    },
    body: {
      hook:
        "If you are searching for knee pain treatment in Thiruvalla or trying to understand persistent back pain, start with a proper assessment. Pain can have different causes, and an online article cannot diagnose what is causing yours.",
      internationalTerms: "",
      introduction:
        "Knee or lower-back discomfort can affect walking, work, sleep, and everyday activities. Note when the pain began, what makes it better or worse, any injury, and symptoms such as swelling, numbness, or weakness. These details can help a health professional decide what assessment or next steps may be appropriate.",
      sections: [
        {
          heading: "Knee pain: details worth noting",
          blocks: [
            {
              type: "paragraph",
              text: "Knee pain may follow an injury or build gradually. Notice whether the knee is swollen, warm, stiff, unstable, or difficult to bend; whether walking or stairs make it worse; and whether you can put weight on the leg. Avoid assuming that every knee problem has the same cause or needs the same treatment.",
            },
            {
              type: "unorderedList",
              items: [
                "Seek urgent medical assessment if a serious injury causes severe pain, marked swelling, deformity, or inability to bear weight.",
                "Get prompt medical help for a hot, red, swollen knee, especially with fever or feeling unwell.",
                "Tell the health professional about previous injuries, operations, medicines, and any other health conditions.",
              ],
            },
          ],
        },
        {
          heading: "Back pain: when to get checked",
          blocks: [
            {
              type: "paragraph",
              text: "Back pain has many possible causes. A health professional can assess your symptoms and decide whether further investigation or a particular kind of care is needed. Seek urgent care for back pain with new difficulty controlling your bladder or bowel, numbness around the groin or inner thighs, or increasing weakness in a leg. Severe pain after an accident, or back pain with fever or feeling very unwell, also needs prompt medical attention.",
            },
            {
              type: "paragraph",
              text: "If symptoms are persistent, getting worse, repeatedly returning, or interfering with daily life, arrange an assessment rather than relying only on home remedies or online advice. Until you have advice, avoid activities that sharply worsen the pain; gentle movement may be reasonable if it feels comfortable and is safe for you.",
            },
          ],
        },
        {
          heading: "Considering an Ayurvedic consultation in Thiruvalla?",
          blocks: [
            {
              type: "paragraph",
              text: "People looking for an Ayurvedic doctor for knee pain or back pain in Thiruvalla can contact Aura Ayurveda in Manjadi to ask whether a consultation is suitable for their concern. Any recommendations depend on an individual assessment. Traditional or supportive care should not delay urgent evaluation, replace a needed diagnosis, or mean stopping prescribed medicines or treatment.",
            },
            {
              type: "paragraph",
              text: "Before an appointment, bring a list of current medicines and relevant reports if you have them. Explain any injury, numbness, weakness, swelling, other health conditions, or treatment you are already receiving. Ask what is being proposed, why it may be appropriate, and when you should seek other medical care.",
            },
          ],
        },
        {
          heading: "Contact Aura Ayurveda in Manjadi",
          blocks: [
            {
              type: "contactCta",
              text: "Aura Ayurveda is in Manjadi, near Thiruvalla, Kerala. Contact the clinic to ask about an appointment and whether a consultation may be appropriate for your knee or back concern.",
            },
            {
              type: "disclaimer",
              text: "This article provides general information only. It does not diagnose or treat pain and is not a substitute for advice from a qualified medical professional. Seek urgent care for severe or concerning symptoms.",
            },
          ],
        },
      ],
    },
    faq: [
      {
        question: "Where can I ask about knee or back pain in Thiruvalla?",
        answer:
          "Aura Ayurveda is in Manjadi, near Thiruvalla. Contact the clinic to ask whether a consultation is suitable for your concern. Seek urgent medical care for severe or concerning symptoms.",
      },
      {
        question: "Can Ayurveda treat knee pain or back pain?",
        answer:
          "The cause of pain and appropriate care vary from person to person. Contact Aura Ayurveda to ask whether a consultation is suitable; any recommendations depend on an individual assessment. Ayurvedic care should not replace needed medical evaluation or prescribed treatment.",
      },
      {
        question: "When should I seek urgent help for back pain?",
        answer:
          "Seek urgent care for back pain with new bladder or bowel control problems, numbness around the groin or inner thighs, increasing leg weakness, severe pain after an accident, or fever and feeling very unwell.",
      },
      {
        question: "What should I bring to a consultation about joint or back pain?",
        answer:
          "Bring a list of current medicines and any relevant reports you have. Be ready to describe when the pain began, any injury, what affects it, and symptoms such as swelling, numbness, or weakness.",
      },
    ],
    relatedLinks: [
      { href: "/ayurveda/", label: "Learn about an Ayurvedic consultation" },
      { href: "/doctor/", label: "Meet the clinic doctor" },
      { href: "/contact/", label: "Contact Aura Ayurveda in Manjadi" },
    ],
    relatedTreatments: [],
  },
];
