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
    relatedTreatments: [],
  },
];
