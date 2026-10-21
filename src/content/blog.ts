import { siteConfig } from "@/config/site";
import { kalariSessionText } from "@/content/kalari";

export type BlogLink = {
  href: string;
  label: string;
};

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
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
  | {
      type: "contactCta";
      text: string;
      whatsappMessage?: string;
      whatsappLabel?: string;
    };

export type BlogSection = {
  heading: string;
  blocks: readonly BlogBlock[];
  boxed?: boolean;
  afterArticle?: boolean;
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
    slug: "ayurvedic-skincare-different-skin-types-prakriti",
    title: "Why Ayurvedic Skincare Is Different for Every Skin Type",
    metaTitle: "Ayurvedic Skincare for Every Skin Type | Aura Ayurveda",
    description:
      "Learn how Ayurveda understands Prakriti and approaches dry, oily and sensitive skin, including eczema-prone skin and everyday skin-care habits.",
    publishedDate: "2026-10-14",
    updatedDate: "2026-10-14",
    author: {
      type: "Organization",
      name: siteConfig.businessName,
      url: siteConfig.siteUrl,
    },
    heroImage: {
      src: "/images/focus-areas/skin-wellness.jpg",
      alt: "Illustrative image of a person receiving facial care; not an Aura Ayurveda treatment or result",
      width: 640,
      height: 420,
    },
    body: {
      hook:
        "A cleanser or moisturiser that feels comfortable for one person may leave another feeling tight, greasy or irritated. Ayurvedic skincare starts from the idea that care should be considered in the context of the individual, rather than chosen from a single routine for everyone. At Aura Ayurveda in Thiruvalla, Kerala, people can ask about an individual consultation for their concerns.",
      internationalTerms: "",
      introduction:
        "Ayurveda uses Prakriti, understood through Vata, Pitta and Kapha, to describe a person's constitution and guide personalized care. This broader view complements modern skin descriptions such as dry or oily. Your skin can also change with weather, age, health, medicines and the products you use.",
      sections: [
        {
          heading: "What is Prakriti in Ayurveda?",
          blocks: [
            {
              type: "paragraph",
              text: "Prakriti is the Ayurvedic understanding of a person's constitution through Vata, Pitta and Kapha, also called doshas. Each person has a unique combination. Ayurveda describes Vata with qualities such as movement and dryness, Pitta with heat, and Kapha with stability and moisture.",
            },
            {
              type: "subheading",
              text: "Prakriti is not simply another name for skin type",
            },
            {
              type: "paragraph",
              text: "Dry, oily, combination and sensitive are common ways to describe how skin looks and feels. Prakriti describes a person's wider constitution, so it is not the same as a modern skin-type label. Ayurveda also uses the term Vikriti for a person's current state, which may differ from their usual tendencies. Weather, stress, sleep, health, hormones, age, medicines and skin products can all affect the skin.",
            },
            {
              type: "paragraph",
              text: "Terms such as Vata skin and Pitta skin describe Ayurvedic patterns that help guide an individual approach to skin care.",
            },
          ],
        },
        {
          heading: "Vata and skin: when skin tends towards dryness",
          blocks: [
            {
              type: "paragraph",
              text: "Ayurveda associates Vata tendencies with dryness, roughness and tightness. Skin may feel drier after washing or in cold, windy weather. These are common patterns, but everyone's skin is different.",
            },
            {
              type: "subheading",
              text: "A gentle, nourishing approach",
            },
            {
              type: "paragraph",
              text: "For dry skin, keep cleansing gentle and use a moisturiser that feels comfortable. Choose lukewarm water instead of a very hot shower, and avoid scrubbing or exfoliating if it makes your skin feel tight or sore. Natural oils and herbal products do not suit everyone, so introduce new products carefully.",
            },
            {
              type: "paragraph",
              text: "In Ayurveda, Vata skin describes a tendency towards dryness. If very dry or itchy skin persists, ask a health professional for advice.",
            },
          ],
        },
        {
          heading: "Pitta and skin: when sensitivity is a concern",
          blocks: [
            {
              type: "paragraph",
              text: "Ayurveda describes Pitta skin with qualities such as sensitivity, warmth, redness, irritation or occasional breakouts. Sun, heat or fragranced products can also affect the skin, so notice what influences your own skin.",
            },
            {
              type: "subheading",
              text: "Keep the routine calm and uncomplicated",
            },
            {
              type: "paragraph",
              text: "For sensitive skin, use a mild cleanser and a moisturiser you already know suits you. Try new products one at a time and stop using one if it irritates your skin. Protect yourself from the sun with shade, clothing and a suitable sunscreen. Avoid strong products or home remedies on irritated skin.",
            },
            {
              type: "paragraph",
              text: "An Ayurvedic skincare routine for sensitive skin can be simple and personal. If irritation continues or gets worse, ask a health professional for advice.",
            },
          ],
        },
        {
          heading: "Kapha and skin: when oiliness or congestion is noticed",
          blocks: [
            {
              type: "paragraph",
              text: "Ayurveda describes Kapha skin with qualities such as oiliness, moisture and a heavier feel. You may notice shine, visible pores or occasional blemishes. Climate, hormones, medicines and skin-care habits can also affect oiliness.",
            },
            {
              type: "subheading",
              text: "Cleanse without over-cleansing",
            },
            {
              type: "paragraph",
              text: "For oily skin, cleanse gently and choose products that do not feel too heavy. Oily skin can still need moisturiser. Harsh cleansers and scrubbing may irritate it, so choose gentle products and avoid picking at blemishes.",
            },
            {
              type: "paragraph",
              text: "The Ayurvedic description of Kapha skin can help guide everyday care. Ask a health professional about persistent or painful acne, scarring or breakouts that affect your wellbeing.",
            },
          ],
        },
        {
          heading: "An Ayurvedic approach to dry skin",
          blocks: [
            {
              type: "paragraph",
              text: "Dry skin can have many causes. Dry weather, air conditioning, frequent washing, hot showers and harsh cleansers can all play a part. Some health conditions and medicines can affect the skin too. If your skin is very dry, cracked or keeps bothering you, ask a health professional for advice.",
            },
            {
              type: "subheading",
              text: "Review the everyday habits around your skin",
            },
            {
              type: "unorderedList",
              items: [
                "Use lukewarm water and keep baths or showers comfortable rather than very hot.",
                "Choose a gentle cleanser and use it where needed instead of repeatedly washing or scrubbing.",
                "Apply an appropriate moisturiser after bathing, while the skin is still slightly damp.",
                "Pause exfoliants or fragranced products if they sting, burn or worsen dryness.",
                "Notice whether weather, work conditions, a new product or a medicine coincides with changes; discuss medication concerns with the prescriber rather than stopping it yourself.",
              ],
            },
            {
              type: "paragraph",
              text: "Good sleep, regular meals and drinking enough water support general wellbeing. They are part of a wider approach to self-care. An Ayurvedic consultation can consider your skin and daily habits together.",
            },
          ],
        },
        {
          heading: "Ayurveda, eczema and sensitive skin",
          blocks: [
            {
              type: "paragraph",
              text: "Eczema can make skin dry, itchy and easily irritated. Ayurveda takes an individual approach to wellbeing and skin care. A health professional can help assess ongoing, recurring or severe symptoms and discuss suitable care.",
            },
            {
              type: "subheading",
              text: "Prioritise skin-barrier care and appropriate assessment",
            },
            {
              type: "paragraph",
              text: "If your skin is eczema-prone or very sensitive, keep your routine simple, avoid known irritants and notice what seems to trigger symptoms. Fragrance, essential oils and herbal products may irritate some people. Ask a health professional before trying a new product on inflamed or broken skin.",
            },
            {
              type: "paragraph",
              text: "An Ayurvedic consultation can include your skin concerns and overall wellbeing. Continue any care recommended by your health professional. Get medical advice if symptoms quickly worsen, the skin becomes painful, or you notice possible signs of infection such as increasing warmth or pus.",
            },
            {
              type: "linkedParagraph",
              before: "If acne is your main concern, read more about ",
              linkText: "the clinic's Ayurvedic acne-care approach",
              href: "/treatments/ayurvedic-acne-treatment/",
              after:
                ". A health professional can advise you about persistent or severe acne.",
            },
          ],
        },
        {
          heading: "Ayurvedic skincare for healthy, glowing skin",
          blocks: [
            {
              type: "paragraph",
              text: "Healthy skin is supported by everyday care, not instant fixes. Cleanse gently, moisturise when needed and protect your skin from the sun. Sleep, nourishing food and ways to manage stress also support general wellbeing.",
            },
            {
              type: "paragraph",
              text: "Natural skincare does not have to mean lots of products or homemade remedies. A simple routine that suits your skin is a good place to start. If you want to explore Ayurvedic skin care, discuss your goals, allergies and current products during a consultation.",
            },
            {
              type: "paragraph",
              text: "Ask a health professional about uneven skin tone, pigmentation, persistent redness or any new or changing marks.",
            },
          ],
        },
        {
          heading: "How to build a skin-care routine that suits you",
          blocks: [
            {
              type: "orderedList",
              items: [
                "Start with what your skin is doing now. Note dryness, oiliness, irritation, breakouts and when they tend to appear.",
                "Keep the basics consistent for a while: gentle cleansing, suitable moisturisation and sun protection.",
                "Introduce one new product at a time so you can notice an unwanted reaction. Stop using it if it causes significant irritation.",
                "Consider context such as climate, work, sleep, stress, health changes, medicines and the products already in your routine.",
                "Ask a health professional for guidance if symptoms persist, are severe or keep returning.",
              ],
            },
            {
              type: "paragraph",
              text: "Prakriti is one part of understanding your individual needs. If a skin problem continues, seek professional advice as well.",
            },
          ],
        },
        {
          heading: "When to seek professional skin care",
          blocks: [
            {
              type: "paragraph",
              text: "Ask a health professional about a rash that persists or worsens, severe or painful acne, repeated skin infections, unexplained pigmentation or a changing mark. Seek urgent care for a severe allergic reaction, rapidly spreading rash, major swelling or trouble breathing.",
            },
            {
              type: "paragraph",
              text: "If you take prescribed medicines, speak with the clinician who prescribed them before changing your treatment or adding medicines, supplements or skin products. Share what you use during any consultation.",
            },
          ],
        },
        {
          heading: "Explore an individualized Ayurvedic consultation",
          blocks: [
            {
              type: "paragraph",
              text: "At a consultation, you can explain your concerns, share your health history and ask about care options. Recommendations are based on your individual needs. You can also ask when another health professional should assess a concern.",
            },
            {
              type: "linkedParagraph",
              before: "Learn how to ask about an ",
              linkText: "Ayurvedic consultation",
              href: "/ayurveda/",
              after:
                " or find practical information about the clinic and directions on the contact page.",
            },
          ],
        },
        {
          heading: "Your skin is unique. Your skincare can be too.",
          afterArticle: true,
          blocks: [
            {
              type: "contactCta",
              text: `Your skin is unique. If you would like to discuss Ayurvedic skin care, message ${siteConfig.businessName} in Thiruvalla on WhatsApp.`,
              whatsappMessage: `Hello, I would like to ask about Ayurvedic skin care at ${siteConfig.businessName} in ${siteConfig.locationLabel}.`,
              whatsappLabel: "Ask about skin care on WhatsApp",
            },
            {
              type: "paragraph",
              text: "Seek advice from a health professional if skin symptoms are persistent or severe.",
            },
          ],
        },
      ],
    },
    faq: [
      {
        question: "What is Prakriti skin type in Ayurveda?",
        answer:
          "Prakriti is a traditional Ayurvedic concept describing a person's constitution through Vata, Pitta and Kapha. It is broader than modern skin-type labels.",
      },
      {
        question: "How does Ayurveda approach eczema-prone skin?",
        answer:
          "Ayurveda takes an individual approach to wellbeing and skin care. A health professional can assess eczema symptoms and discuss suitable care. You can also ask an Ayurvedic practitioner how an individual consultation may support your overall skin-care approach.",
      },
      {
        question: "What is an Ayurvedic skincare routine for dry skin?",
        answer:
          "A gentle approach may include lukewarm water, a mild cleanser, suitable moisturisation and avoiding products or exfoliation that irritate the skin. Ongoing or severe dryness should be discussed with a health professional.",
      },
      {
        question: "Is Ayurvedic skincare suitable for sensitive skin?",
        answer:
          "Ayurvedic skin care is considered individually. Keep your routine gentle, avoid known triggers and introduce new products carefully. Ask a health professional about persistent or worsening symptoms.",
      },
      {
        question: "Can my current skin condition differ from my Prakriti?",
        answer:
          "Yes. In Ayurvedic thought, a person's current state may differ from their constitutional tendencies. Weather, age, health, medicines and skin-care habits can also affect how skin feels.",
      },
    ],
    relatedLinks: [
      {
        href: "/treatments/ayurvedic-acne-treatment/",
        label: "Explore Ayurvedic acne care",
      },
      { href: "/treatments/", label: "Browse Ayurvedic treatments" },
      { href: "/ayurveda/", label: "Learn about an Ayurvedic consultation" },
      { href: "/about/", label: "About Aura Ayurveda" },
      { href: "/contact/", label: "Contact and directions" },
    ],
    relatedTreatments: ["ayurvedic-acne-treatment"],
  },
  {
    slug: "food-as-medicine-ayurveda",
    title: "Food as Medicine: The Ayurvedic Way of Eating",
    relatedTreatments: ["prasavaraksha"],
    description:
      "What does food as medicine mean in Ayurveda? Simple eating principles from a Kerala Ayurveda clinic in Thiruvalla. Visitors from abroad welcome.",
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
        "Kerala is widely known as a home of Ayurvedic tradition, and many visitors from outside India are curious about how everyday food fits into it. Aura Ayurveda is in Thiruvalla, Kerala.",
      internationalTerms:
        "Ayurvedic diet and Ayurvedic food describe the role of food in Ayurveda. At Aura Ayurveda, a consultation considers your individual needs and daily habits.",
      introduction:
        "Ayurveda places food and digestion at the heart of daily wellbeing. In many Kerala homes, ginger and cumin water, rice kanji and special foods for new mothers are part of everyday life. Here is how Ayurvedic food principles can inform everyday choices.",
      sections: [
        {
          heading: "The basic idea",
          blocks: [
            {
              type: "paragraph",
              text: "In Ayurveda, food is an important part of caring for wellbeing. What you eat, when you eat and how you digest it all matter. Ayurvedic guidance considers digestion and daily habits when discussing a person's food choices.",
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
                "Eat at regular times. Ayurveda emphasizes a substantial midday meal and a lighter dinner earlier in the evening.",
                "Include all six tastes. Ayurveda describes sweet, sour, salty, bitter, pungent, and astringent tastes. A varied plate with vegetables, grains, pulses, and spices naturally covers them.",
                "Eat mindfully. Sit down, chew well, and avoid eating while distracted or in a rush. Stop before you feel overly full.",
                "Use common kitchen spices. Turmeric, ginger, cumin, coriander, black pepper, and curry leaves are traditional parts of Kerala cooking and are valued in Ayurveda.",
                "Choose food to suit the person. Ayurveda tailors food guidance to age, season, digestion and health needs.",
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
                ", illness, or when digestion is weak. Ayurvedic food guidance is tailored to the person's needs and discussed with a doctor.",
            },
          ],
        },
        {
          heading: "A few honest points",
          blocks: [
            {
              type: "unorderedList",
              items: [
                "For a serious illness, work with your healthcare professional and continue prescribed treatment. Ayurvedic food guidance can be discussed as part of your overall care.",
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
              text: "At Aura Ayurveda in Thiruvalla, our doctor can discuss food and lifestyle suited to your needs. Book a consultation by phone or WhatsApp.",
            },
          ],
        },
      ],
    },
    faq: [
      {
        question: "What is food as medicine in Ayurveda?",
        answer:
          "Ayurveda considers everyday food and digestion an important part of wellbeing. Discuss dietary changes with your doctor, especially if you have a health condition or take prescribed medicine.",
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
          "Ayurvedic food guidance can be discussed alongside your prescribed care. Speak with your doctor before changing your diet or adding herbs.",
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
      "What is Kalari marma (varma) massage, and what should visitors to Kerala expect? A plain guide from an Ayurveda clinic in Thiruvalla.",
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
              text: '"Marma" is the spelling used widely across India; "varma" is common in Kerala and Tamil traditions. Both names refer to this Kerala hands-on practice.',
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
                " and oil massages such as abhyanga. These are distinct Ayurvedic practices with different approaches. The doctor explains the options and recommends a care plan based on your consultation.",
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
          heading: "Your safety",
          blocks: [
            {
              type: "paragraph",
              text: "Kalari marma massage is an Ayurvedic wellness therapy. Continue prescribed care and seek medical attention for serious or sudden symptoms.",
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
                "Confirm session details and any preparation advice with the clinic before travelling.",
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
          heading: "Visit Aura Ayurveda in Thiruvalla",
          blocks: [
            {
              type: "contactCta",
              text: "Aura Ayurveda in Thiruvalla offers Kalari marma massage after an individual doctor consultation. Contact the clinic to arrange your consultation.",
            },
          ],
        },
      ],
    },
    faq: [
      {
        question: "What is Kalari marma massage?",
        answer:
          "It is a Kerala Ayurvedic hands-on practice connected to kalaripayattu and the Ayurvedic understanding of marma points. At Aura Ayurveda, each session is planned by the doctor after consultation.",
      },
      {
        question: "What is the difference between marma and varma?",
        answer:
          '"Marma" is the spelling used widely across India; "varma" is common in Kerala and Tamil traditions.',
      },
      {
        question: "How is it different from Panchakarma or abhyanga?",
        answer:
          "They are distinct Ayurvedic practices. The doctor explains their differences and recommends an approach based on your consultation.",
      },
      {
        question: "Who should check with a doctor before booking?",
        answer:
          "Tell the doctor if you are pregnant, have an injury, recent surgery, a skin condition, high blood pressure, a heart condition, or take blood thinners.",
      },
      {
        question:
          "Can I book while visiting Kerala from abroad?",
        answer: `Contact the clinic by WhatsApp at ${siteConfig.whatsapp} to arrange a consultation. ${siteConfig.englishConsultationText} Confirm appointment availability and travel details with the clinic.`,
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
      "Looking for information about knee pain or back pain in Thiruvalla? Learn what to discuss at a consultation, when to seek urgent care, and how to contact Aura Ayurveda.",
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
              text: "People with knee or back pain can contact Aura Ayurveda in Thiruvalla for an Ayurvedic consultation. The doctor reviews symptoms and health history before recommending a care plan. For urgent symptoms, seek prompt medical care and continue prescribed treatment.",
            },
            {
              type: "paragraph",
              text: "Bring a list of current medicines and any relevant reports. Explain injuries, numbness, weakness, swelling, health conditions and care you are already receiving. The doctor can explain your care plan and when to seek additional medical care.",
            },
          ],
        },
        {
          heading: "Contact Aura Ayurveda in Thiruvalla",
          blocks: [
            {
              type: "contactCta",
              text: "Aura Ayurveda in Thiruvalla offers consultations for people with knee or back concerns. Contact the clinic to arrange an appointment.",
            },
          ],
        },
      ],
    },
    faq: [
      {
        question: "Where can I ask about knee or back pain in Thiruvalla?",
        answer:
          "Aura Ayurveda in Thiruvalla offers consultations for knee and back concerns. Seek urgent medical care for severe or concerning symptoms.",
      },
      {
        question: "Can Ayurveda treat knee pain or back pain?",
        answer:
          "The doctor reviews each person's symptoms and health history before recommending Ayurvedic care. Continue prescribed treatment and seek medical evaluation when needed.",
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
      { href: "/contact/", label: "Contact Aura Ayurveda in Thiruvalla" },
    ],
    relatedTreatments: ["back-pain-joint-pain-care"],
  },
  {
    slug: "ayurveda-for-nurses-care-workers-abroad",
    title:
      "Back and Joint Discomfort After Long Shifts? Ayurvedic Care in Kerala for Nurses and Care Workers Returning Home",
    metaTitle: "Ayurvedic Care for Back & Joint Discomfort in Kerala | Aura Ayurveda",
    description:
      "Back, knee or neck discomfort after long shifts abroad? Learn how an Ayurvedic consultation in Thiruvalla, Kerala may support relaxation and physical wellbeing.",
    publishedDate: "2026-10-21",
    updatedDate: "2026-10-21",
    author: {
      type: "Organization",
      name: siteConfig.businessName,
      url: siteConfig.siteUrl,
    },
    heroImage: {
      src: "/images/blog/healthcare-workers-hospital-shift.jpg",
      alt: "Healthcare workers discussing a patient's care during a hospital shift",
      width: 1280,
      height: 851,
    },
    body: {
      hook:
        "If you are an Indian nurse, healthcare assistant, caregiver or care-home worker living abroad, back, knee, neck or joint discomfort may feel like part of the job: hours on your feet, helping patients move, repeated bending and night shifts. You spend your working life taking care of other people. When you come home to Kerala, it is worth taking some time to take care of yourself, too.",
      internationalTerms: "",
      introduction:
        "For many Indian nurses in the UK and other healthcare workers across the USA, UAE and Gulf countries, a visit home is precious family time. It can also be a chance to pause, talk through the stiffness or physical tiredness that has built up, and ask whether an Ayurvedic consultation in Kerala could be appropriate for you.",
      sections: [
        {
          heading: "Why healthcare and care work can be physically demanding",
          blocks: [
            {
              type: "paragraph",
              text: "Care work asks a lot of the body as well as the mind. A shift may mean standing for long periods, walking between patients, bending to assist with daily care, reaching, pushing equipment, or helping someone change position. Patient handling and transfers can involve lifting or working in awkward positions, while repeated tasks may leave the same muscles working again and again.",
            },
            {
              type: "paragraph",
              text: "Long shifts, short turnarounds and night duties can make it difficult to get enough rest between demanding days. The way this feels is personal: one person may notice tight shoulders or a stiff neck, while another notices tired legs, back discomfort or general muscular fatigue. These symptoms can have different causes, so it is important not to assume that work strain is the only explanation.",
            },
          ],
        },
        {
          heading: "Your days off should not be spent only recovering from work",
          blocks: [
            {
              type: "paragraph",
              text: "Perhaps your first day off is spent sleeping late, trying to loosen tight shoulders, or hoping your legs will feel lighter. Even after rest, you may still notice stiffness, a tired back or a general sense of physical exhaustion. When work and recovery take up most of the week, it can be hard to make space for your own wellbeing.",
            },
            {
              type: "linkedParagraph",
              before:
                "Ayurveda may be considered as a complementary approach to relaxation and physical wellbeing. It should not replace medical assessment, prescribed treatment or advice from your regular healthcare team. If recurring back or joint discomfort is affecting your work or daily life, you may also find it useful to read our guidance on ",
              linkText: "knee and back concerns in Thiruvalla",
              href: "/blog/knee-back-pain-thiruvalla/",
              after: ".",
            },
          ],
        },
        {
          heading: "Back, knee, neck and leg discomfort after long shifts",
          blocks: [
            {
              type: "paragraph",
              text: "Discomfort tends to settle where your work loads the body most. The causes differ from person to person, so it helps to notice the pattern rather than guess.",
            },
            {
              type: "subheading",
              text: "Lower back pain and stiffness",
            },
            {
              type: "paragraph",
              text: "Bending over beds, assisting transfers and long periods standing can leave the lower back feeling tight or sore, especially at the end of a run of shifts. Note when it starts, what eases it and whether it ever travels into a leg.",
            },
            {
              type: "subheading",
              text: "Knee and joint discomfort",
            },
            {
              type: "paragraph",
              text: "Hours of walking on hard hospital floors, crouching and climbing stairs can make knees and other joints feel stiff or achy. Swelling, warmth, locking or a joint that gives way needs a medical assessment first.",
            },
            {
              type: "subheading",
              text: "Neck and shoulder tightness",
            },
            {
              type: "paragraph",
              text: "Repositioning patients, reaching, pushing equipment and long periods leaning forward often show up as tight shoulders and a stiff neck. Numbness, tingling or weakness in an arm should be checked by a doctor.",
            },
            {
              type: "subheading",
              text: "Heavy, tired legs",
            },
            {
              type: "linkedParagraph",
              before:
                "Heavy or aching legs after standing all day can have several causes, including circulation. If you also notice visible or uncomfortable veins, you can read about ",
              linkText: "varicose vein care at Aura Ayurveda",
              href: "/treatments/varicose-vein-care/",
              after: ".",
            },
            {
              type: "linkedParagraph",
              before:
                "If any of this sounds familiar, the clinic's page on ",
              linkText: "Ayurvedic care for back pain and joint pain in Thiruvalla",
              href: "/treatments/back-pain-joint-pain-care/",
              after:
                " explains what to expect from a consultation. Our guide to knee and back concerns also lists signs that need urgent medical attention.",
            },
          ],
        },
        {
          heading: "How Ayurveda may support physical wellbeing",
          blocks: [
            {
              type: "linkedParagraph",
              before:
                "Ayurveda traditionally uses a range of therapies as part of an individualized plan. Depending on your concerns, health history and the doctor's assessment, therapies such as these may be discussed. You can also read an overview of ",
              linkText: "Ayurvedic body therapies such as Abhyanga, Kizhi, Kati Vasti and Janu Vasti",
              href: "/treatments/ayurvedic-body-therapies/",
              after: ".",
            },
            {
              type: "subheading",
              text: "Abhyanga",
            },
            {
              type: "linkedParagraph",
              before:
                "Abhyanga is a traditional oil-based massage. A doctor may consider whether it is suitable for you and how it fits into a broader care plan. You can also ask about the clinic's ",
              linkText: "doctor-guided Ayurvedic massage therapy",
              href: "/treatments/panchakarma-massage/",
              after: ".",
            },
            {
              type: "subheading",
              text: "Kizhi or Pinda Sweda",
            },
            {
              type: "paragraph",
              text: "Kizhi uses warm herbal boluses that are applied to the body in a planned way. The materials, temperature and approach should be selected by the practitioner for the individual; it is not suitable to assume the same therapy is right for everyone.",
            },
            {
              type: "subheading",
              text: "Kati Vasti and Janu Vasti",
            },
            {
              type: "paragraph",
              text: "In these traditional therapies, warm oil is held over a selected area using a soft dough boundary: Kati Vasti is associated with the lower back area and Janu Vasti with the knee area. Whether either is appropriate depends on a proper assessment, including the cause and nature of your symptoms.",
            },
            {
              type: "subheading",
              text: "Shirodhara",
            },
            {
              type: "paragraph",
              text: "Shirodhara involves a steady flow of liquid, commonly oil, over the forehead. It may be considered in some individualized plans for relaxation and wellbeing. The doctor should discuss suitability and practical details with you first.",
            },
            {
              type: "paragraph",
              text: "These therapies are traditionally used in Ayurveda; none should be understood as a guaranteed cure for pain, stiffness or exhaustion. The appropriate choice, if any, depends on your condition and an Ayurvedic doctor's assessment.",
            },
          ],
        },
        {
          heading: "Ayurveda is not simply a massage",
          blocks: [
            {
              type: "paragraph",
              text: "A responsible Ayurvedic consultation starts by listening: what feels uncomfortable, when it began, what your work involves, what makes it better or worse, and what care you already receive. The doctor may also ask about your health history, medicines, previous injuries and any reports you bring.",
            },
            {
              type: "linkedParagraph",
              before:
                "Only after understanding these details can the doctor discuss whether a therapy may be suitable, what an individualized plan could involve, and whether you should seek another medical assessment first. At Aura Ayurveda, the aim is to understand your concerns before discussing care—not to offer the same massage to everyone. Learn more about ",
              linkText: "how Aura Ayurveda approaches consultations",
              href: "/about/",
              after: ".",
            },
          ],
        },
        {
          heading: "Coming home to Kerala? Make time for yourself",
          blocks: [
            {
              type: "paragraph",
              text: "Whether you are returning from the UK, USA, UAE, Saudi Arabia, Qatar, Oman, Bahrain, Kuwait or elsewhere, you may be able to include a consultation in a family visit to Kerala. An initial conversation can help you understand what an assessment involves and whether any follow-up would be needed.",
            },
            {
              type: "paragraph",
              text: "Ayurvedic care does not automatically mean a long residential programme. Your doctor can discuss your available time, health history and concerns, then explain what is reasonable to consider during your visit. Contact the clinic before travelling to ask about appointment availability, expected duration and any information to bring.",
            },
          ],
        },
        {
          heading: "For nurses and care workers from Kerala living abroad",
          blocks: [
            {
              type: "paragraph",
              text: "You may have spent years looking after other people. Now it may be time to look after yourself. The work you do matters, and your own wellbeing deserves attention too—not only when you have reached the end of a difficult shift.",
            },
            {
              type: "paragraph",
              text: "Aura Ayurveda welcomes people visiting Kerala from abroad, including patients travelling from the UK. If you are looking for Ayurveda for nurses and care workers, or exploring Ayurveda for long working hours and physical tiredness, you can start with an honest conversation about what you are experiencing and what support may be appropriate.",
            },
          ],
        },
        {
          heading: "Coming to Thiruvalla?",
          blocks: [
            {
              type: "paragraph",
              text: "Aura Ayurveda is in Manjadi, near Thiruvalla, Kerala. If you are visiting Thiruvalla, Pathanamthitta or nearby areas, you can ask about scheduling a consultation during your stay.",
            },
            {
              type: "linkedParagraph",
              before:
                "People considering Ayurvedic treatment near Thiruvalla can ",
              linkText: "contact the clinic to plan a visit",
              href: "/contact/",
              after: ".",
            },
            {
              type: "linkedParagraph",
              before: "",
              linkText: "Get directions to Aura Ayurveda",
              href: siteConfig.googleMapsUrl,
              after: ".",
            },
          ],
        },
        {
          heading: "When to seek medical advice",
          blocks: [
            {
              type: "paragraph",
              text: "Do not delay medical care for severe or persistent pain, pain after an injury, significant swelling, fever, new weakness or numbness, or any other worrying change. Seek urgent medical help for serious or rapidly worsening symptoms. Tell both your regular healthcare professional and the Ayurvedic doctor about your symptoms, medicines and any ongoing treatment.",
            },
          ],
        },
        {
          heading: "Talk to us",
          afterArticle: true,
          blocks: [
            {
              type: "contactCta",
              text: "Coming home to Kerala? Talk to our Ayurvedic doctor about your concerns and plan your visit to Aura Ayurveda. We can discuss appointment availability and what to expect before you travel.",
              whatsappMessage:
                "Hello, I am visiting Kerala and would like to ask about an Ayurvedic consultation at Aura Ayurveda in Thiruvalla. Please share appointment availability and visit details.",
              whatsappLabel: "Ask on WhatsApp",
            },
          ],
        },
      ],
    },
    faq: [
      {
        question:
          "Where can I ask about recurring back or joint discomfort in Thiruvalla?",
        answer:
          "You can contact Aura Ayurveda in Manjadi, near Thiruvalla, to ask about a consultation for back, knee or joint discomfort. The doctor reviews your symptoms and health history first. Seek urgent medical care for severe pain, pain after an injury, fever, significant swelling, or new weakness or numbness.",
      },
      {
        question:
          "Can Ayurveda help with back pain after long nursing or care-home shifts?",
        answer:
          "Ayurveda is traditionally used as a complementary approach to relaxation and physical wellbeing, but it does not replace medical assessment, and results vary. Back pain has many causes, so the doctor assesses your symptoms and work pattern before discussing whether any care may be suitable.",
      },
      {
        question: "Can nurses working in the UK get Ayurvedic treatment in Kerala?",
        answer:
          "Yes. Nurses visiting Kerala can contact Aura Ayurveda in Manjadi, near Thiruvalla, to ask about an Ayurvedic consultation. The doctor will discuss your concerns and health history before advising whether any care may be appropriate.",
      },
      {
        question:
          "Can Ayurveda help with physical tiredness from long working hours?",
        answer:
          "Some people consider Ayurveda as a complementary approach to relaxation and physical wellbeing. Tiredness can have many causes, so persistent or concerning symptoms should be discussed with a healthcare professional; an Ayurvedic doctor can assess your individual situation.",
      },
      {
        question: "Is Ayurveda suitable for care-home workers?",
        answer:
          "Care-home workers can ask for an individual consultation. Suitability depends on each person's symptoms, health history, medicines and assessment; no therapy is appropriate for everyone.",
      },
      {
        question:
          "What Ayurvedic therapies may be recommended for muscle stiffness?",
        answer:
          "Depending on an individual assessment, an Ayurvedic doctor may discuss therapies such as Abhyanga or Kizhi. These are traditionally used approaches, not guaranteed cures, and the doctor should first consider your condition and health history.",
      },
      {
        question:
          "Can NRIs receive Ayurvedic treatment during a short visit to Kerala?",
        answer:
          "You can contact the clinic before travelling to ask about an initial consultation, appointment availability and the time involved. The doctor can discuss what may be appropriate during your visit; a short visit does not guarantee a particular treatment plan or outcome.",
      },
      {
        question: "Where is Aura Ayurveda located?",
        answer:
          "Aura Ayurveda is in Manjadi, near Thiruvalla, Kerala. Contact the clinic for directions or use the Google Maps link on the contact page.",
      },
      {
        question:
          "How can I contact Aura Ayurveda before travelling to Kerala?",
        answer:
          `Call ${siteConfig.phone}, send a WhatsApp message, or use the contact page to ask about appointments and visit details.`,
      },
    ],
    relatedLinks: [
      {
        href: "/blog/knee-back-pain-thiruvalla/",
        label: "Guidance on knee and back concerns in Thiruvalla",
      },
      {
        href: "/treatments/back-pain-joint-pain-care/",
        label: "Ayurvedic care for back pain and joint pain in Thiruvalla",
      },
      {
        href: "/treatments/ayurvedic-body-therapies/",
        label: "Abhyanga, Kizhi, Kati Vasti and Janu Vasti explained",
      },
      {
        href: "/treatments/",
        label: "Explore Ayurvedic treatments and therapies",
      },
      {
        href: "/about/",
        label: "How Aura Ayurveda approaches care",
      },
      {
        href: "/contact/",
        label: "Contact Aura Ayurveda and plan your visit",
      },
    ],
    relatedTreatments: [
      "back-pain-joint-pain-care",
      "ayurvedic-body-therapies",
      "panchakarma-massage",
    ],
  },
  {
    slug: "safe-weight-loss-ayurvedic-diet-kerala",
    title: "Safe Weight Loss with an Ayurvedic Diet: A Gentle, Sustainable Approach",
    metaTitle: "Safe Weight Loss with an Ayurvedic Diet | Aura Ayurveda",
    description:
      "Looking for safe, sustainable weight loss through diet? Learn Ayurvedic eating principles, everyday Kerala foods, habits to avoid and when to see a doctor first.",
    publishedDate: "2026-10-22",
    updatedDate: "2026-10-22",
    author: {
      type: "Organization",
      name: siteConfig.businessName,
      url: siteConfig.siteUrl,
    },
    heroImage: {
      src: "/images/focus-areas/weight-management.jpg",
      alt: "A person meditating as part of a wellness routine",
      width: 640,
      height: 420,
    },
    body: {
      hook:
        "Crash diets, slimming teas and quick-fix promises are everywhere, but a healthy weight is usually built slowly, with food and habits you can keep up. Ayurveda looks at weight through digestion, daily routine and the individual person, which makes it a useful lens for a safer, more sustainable approach.",
      internationalTerms: "",
      introduction:
        "This guide explains how Ayurvedic eating principles can inform everyday food choices if you want to manage your weight, and when it is wise to speak to a doctor first. At Aura Ayurveda in Thiruvalla, Kerala, you can ask about an individual consultation.",
      sections: [
        {
          heading: "Why safe matters more than fast",
          blocks: [
            {
              type: "paragraph",
              text: "Rapid weight loss through very low-calorie eating, skipped meals or unregulated products can leave you tired, undernourished and more likely to regain weight. A gradual, balanced approach is generally easier to sustain and gentler on the body.",
            },
            {
              type: "paragraph",
              text: "Weight is also personal. Age, health conditions, medicines, hormones, sleep, stress and family history all play a part, so no single diet suits everyone.",
            },
          ],
        },
        {
          heading: "How Ayurveda looks at weight and digestion",
          blocks: [
            {
              type: "paragraph",
              text: "In Ayurveda, digestion (often described as agni) is central to wellbeing. Traditional texts associate a tendency to gain weight with heaviness, sluggish digestion and a lifestyle with little movement, and they emphasise food, routine and activity suited to the individual.",
            },
            {
              type: "paragraph",
              text: "These are traditional ideas that can guide everyday habits. They are not a substitute for medical assessment, and results vary from person to person.",
            },
          ],
        },
        {
          heading: "Ayurvedic eating principles that may support a healthy weight",
          blocks: [
            {
              type: "orderedList",
              items: [
                "Eat freshly cooked, warm meals rather than heavily processed, deep-fried or very sugary food.",
                "Eat at regular times, with your largest meal around midday and a lighter dinner earlier in the evening.",
                "Eat mindfully: sit down, chew well and stop before you feel overly full.",
                "Do not eat again until the previous meal has digested; avoid constant snacking.",
                "Include vegetables, pulses, whole grains and a little healthy fat, rather than cutting out whole food groups.",
                "Drink warm or room-temperature water through the day, and avoid very cold, sweetened drinks.",
              ],
            },
            {
              type: "linkedParagraph",
              before: "For more on how food and digestion fit into Ayurveda, read ",
              linkText: "Food as Medicine: The Ayurvedic Way of Eating",
              href: "/blog/food-as-medicine-ayurveda/",
              after: ".",
            },
          ],
        },
        {
          heading: "Everyday Kerala foods to build your plate around",
          blocks: [
            {
              type: "paragraph",
              text: "You do not need unfamiliar ingredients. Many traditional Kerala foods fit a balanced, home-cooked plate when portions are sensible.",
            },
            {
              type: "unorderedList",
              items: [
                "Vegetable-rich curries, thoran and sambar with a moderate portion of rice or millets.",
                "Pulses and lentils such as dal and green gram (cherupayar) for protein and fibre.",
                "Seasonal fruit and vegetables instead of packaged snacks and sweets.",
                "Buttermilk (moru) and home-cooked kanji as light, easily digested options.",
                "Familiar spices such as ginger, cumin, coriander, turmeric, black pepper and curry leaves used in cooking.",
              ],
            },
          ],
        },
        {
          heading: "Habits beyond the plate",
          blocks: [
            {
              type: "unorderedList",
              items: [
                "Move daily. A regular walk or other activity you enjoy matters as much as what you eat.",
                "Keep a steady sleep routine; poor sleep can affect appetite and energy.",
                "Find ways to manage stress that do not involve food.",
                "Keep a simple note of meals, hunger and energy for a week to spot patterns.",
              ],
            },
          ],
        },
        {
          heading: "What to avoid",
          blocks: [
            {
              type: "unorderedList",
              items: [
                "Crash diets, prolonged fasting or skipping meals to lose weight quickly.",
                "Slimming teas, powders or herbal products of unknown ingredients or origin.",
                "Stopping or changing prescribed medicines without speaking to your doctor.",
                "Comparing yourself with others; a healthy pace is different for each person.",
              ],
            },
          ],
        },
        {
          heading: "Who should check with a doctor first",
          blocks: [
            {
              type: "paragraph",
              text: "Speak with your doctor before changing your diet or adding herbs if you have diabetes, high blood pressure, thyroid, kidney, liver or heart conditions, take regular medicines, are pregnant or breastfeeding, or have a history of an eating disorder. Children and older adults also need individual guidance.",
            },
          ],
        },
        {
          heading: "When to seek medical advice",
          blocks: [
            {
              type: "paragraph",
              text: "See a doctor if your weight changes quickly without explanation, if you notice persistent tiredness, swelling, breathlessness, a very changed appetite, or if you feel unwell while changing your diet. Do not rely on online advice for these symptoms.",
            },
          ],
        },
        {
          heading: "What an Ayurvedic consultation may involve",
          blocks: [
            {
              type: "paragraph",
              text: "An Ayurvedic doctor can ask about your digestion, eating pattern, activity, sleep, health history and medicines, then discuss food and lifestyle guidance suited to you. Recommendations are individual; the doctor will also tell you when another health professional should assess a concern.",
            },
            {
              type: "linkedParagraph",
              before: "Learn how to ask about an ",
              linkText: "Ayurvedic consultation",
              href: "/ayurveda/",
              after: " or meet the clinic doctor on the doctor page.",
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
              text: "At Aura Ayurveda in Thiruvalla, our doctor can discuss diet and lifestyle guidance for healthy weight management. Book a consultation by phone or WhatsApp.",
              whatsappMessage: `Hello, I would like to ask about diet and weight management guidance at ${siteConfig.businessName} in ${siteConfig.locationLabel}.`,
              whatsappLabel: "Ask about weight management on WhatsApp",
            },
          ],
        },
      ],
    },
    faq: [
      {
        question: "Can Ayurveda help with safe weight loss?",
        answer:
          "Ayurveda offers food and lifestyle guidance that some people find helpful as a gradual, complementary approach. It does not guarantee weight loss, and results vary. An individual consultation can discuss what may suit you.",
      },
      {
        question: "What is an Ayurvedic diet for weight loss?",
        answer:
          "It generally means fresh, warm, home-cooked meals at regular times, a lighter dinner, mindful eating and suitable portions of vegetables, pulses and whole grains. The details are adjusted to the individual.",
      },
      {
        question: "How fast should I lose weight?",
        answer:
          "A slow, steady pace is generally safer and easier to maintain than rapid loss. Ask your doctor what a healthy pace and target is for you.",
      },
      {
        question: "Are herbal slimming products safe?",
        answer:
          "Not always. Products of unknown ingredients or origin can cause side effects or interact with medicines. Check with a doctor or qualified practitioner before using any.",
      },
      {
        question: "Can I follow an Ayurvedic diet if I have diabetes or take regular medicines?",
        answer:
          "Speak with your doctor first and do not stop prescribed medicines. Ayurvedic food guidance can be discussed alongside your regular care.",
      },
      {
        question: "Can I book a consultation if I am visiting Kerala from abroad?",
        answer: `Appointments can be requested via WhatsApp at ${siteConfig.whatsapp}. ${siteConfig.englishConsultationText} Please contact the clinic to confirm visit details.`,
      },
    ],
    relatedLinks: [
      {
        href: "/blog/food-as-medicine-ayurveda/",
        label: "Food as Medicine: The Ayurvedic Way of Eating",
      },
      { href: "/ayurveda/", label: "Learn about an Ayurvedic consultation" },
      { href: "/doctor/", label: "Meet the clinic doctor" },
      { href: "/contact/", label: "Contact Aura Ayurveda" },
    ],
    relatedTreatments: [],
  },
];
