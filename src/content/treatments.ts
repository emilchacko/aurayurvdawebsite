export type Treatment = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  whoItsFor: string;
  whatToExpect: string;
  category: string;
  image: string;
  imageAlt: string;
  relatedPosts: readonly string[];
  updatedDate?: string;
};

export const treatments: Treatment[] = [
  {
    slug: "prasavaraksha",
    title: "Prasavaraksha (Ayurvedic Postnatal Care)",
    shortDescription:
      "Postnatal massage and medicated water baths for mother and baby, with medicines and diet advice based on their individual conditions.",
    description:
      "Prasavaraksha includes abhyanga (massage) and a medicated water bath for mother and baby, postnatal medicines and skin-care packs for the mother, and diet advice based on their individual conditions.",
    whoItsFor:
      "Families interested in discussing traditional postnatal care after birth can ask the doctor whether a consultation is appropriate for their circumstances.",
    whatToExpect:
      "The doctor assesses the mother and baby individually and decides appropriate timing and care based on their conditions. Continue to follow advice from their maternity-care teams.",
    category: "Women’s Wellness",
    image: "/images/focus-areas/pregnancy-postnatal.jpg",
    imageAlt:
      "Illustrative postnatal-care image; not a photograph of Aura Ayurveda or a treatment",
    relatedPosts: [],
  },
  {
    slug: "panchakarma-massage",
    title: "Ayurvedic Panchakarma Massage",
    shortDescription:
      "A doctor-guided oil massage selected as part of an individualized Panchakarma or wellness plan.",
    description:
      "Panchakarma-related therapies are chosen only after a consultation. Massage may be one part of a broader plan when appropriate for the individual.",
    whoItsFor:
      "People considering an oil massage as part of a broader Ayurvedic plan can discuss their goals and circumstances with the doctor first.",
    whatToExpect:
      "Ask which therapy and oils, if any, would be used, how the session is carried out, and whether preparation or follow-up is recommended. Confirm the proposed steps with the clinic before booking.",
    category: "Massage & Therapies",
    image: "/images/focus-areas/ayurvedic-therapies.jpg",
    imageAlt: "Ayurvedic massage therapy, illustrative image",
    relatedPosts: [],
  },
  {
    slug: "kalari-varma-massage",
    title: "Kalari Marma (Varma) Massage",
    shortDescription:
      "A traditional Kerala therapy, considered by the doctor after an individual consultation.",
    description:
      "A traditional Kerala hands-on therapy connected to kalaripayattu and its knowledge of marma, also called varma, points. The doctor assesses each person and decides what is appropriate.",
    whoItsFor:
      "People interested in a traditional Kerala therapy can discuss their circumstances with the doctor before deciding whether to proceed.",
    whatToExpect:
      "A Kalari session begins with a consultation with the doctor. The doctor discusses your needs and decides what is appropriate for you.",
    category: "Massage & Therapies",
    image: "/images/focus-areas/ayurvedic-therapies.jpg",
    imageAlt:
      "Illustrative Ayurvedic massage image; not a photograph of a Kalari session at Aura Ayurveda",
    relatedPosts: [
      "kalari-marma-massage-kerala",
      "food-as-medicine-ayurveda",
    ],
    updatedDate: "2026-10-12",
  },
  {
    slug: "ayurvedic-dandruff-treatment",
    title: "Ayurvedic Dandruff Treatment",
    shortDescription:
      "A scalp assessment followed by suitable cleansing, care guidance, and follow-up for flakes or irritation.",
    description:
      "Dandruff and scalp irritation can have different causes. A consultation helps identify your symptoms and select an appropriate scalp-care approach.",
    whoItsFor:
      "People concerned about visible flakes or scalp irritation can discuss their symptoms and current care routine with the doctor.",
    whatToExpect:
      "Ask what scalp-care steps or products, if any, may be discussed, whether preparation is needed, and what follow-up may involve. The clinic can explain the proposed approach before you decide.",
    category: "Hair & Scalp",
    image: "/images/focus-areas/hair-scalp.jpg",
    imageAlt: "Hair and scalp care, illustrative image",
    relatedPosts: [],
  },
  {
    slug: "ayurvedic-acne-treatment",
    title: "Ayurvedic Acne Treatment",
    shortDescription:
      "Individual skin guidance based on your acne concerns, skin-care routine, and health history.",
    description:
      "Acne care begins with understanding your skin and its history. Recommendations are tailored after assessment rather than using the same routine for everyone.",
    whoItsFor:
      "People seeking guidance about acne and their skin-care routine can discuss their concerns and health history with the doctor.",
    whatToExpect:
      "Ask what skin-care steps or products, if any, may be discussed, whether preparation is needed, and what follow-up may involve. The clinic can explain the proposed approach before you decide.",
    category: "Skin Care",
    image: "/images/focus-areas/skin-wellness.jpg",
    imageAlt: "Facial skin care, illustrative image",
    relatedPosts: ["ayurvedic-skincare-different-skin-types-prakriti"],
  },
  {
    slug: "ayurvedic-hair-spa",
    title: "Ayurvedic Hair Spa",
    shortDescription:
      "A relaxing hair and scalp session that may include cleansing, suitable oils, and gentle massage.",
    description:
      "The hair-spa approach is selected to suit your scalp and hair-care preferences, with product and technique choices discussed before the session.",
    whoItsFor:
      "People considering a hair and scalp care session can ask about the products, steps, and whether it fits their preferences.",
    whatToExpect:
      "Ask what steps and products are included, how long the visit may take, and what after-care is recommended. Confirm the session details with the clinic before booking.",
    category: "Hair & Scalp",
    image: "/images/focus-areas/hair-scalp.jpg",
    imageAlt: "Hair and scalp care, illustrative image",
    relatedPosts: [],
  },
  {
    slug: "varicose-vein-care",
    title: "Varicose Vein Care",
    shortDescription:
      "A consultation to discuss vein-related symptoms and determine safe, appropriate supportive care.",
    description:
      "Visible or uncomfortable varicose veins should be assessed carefully. The first step is to review symptoms and discuss whether supportive Ayurvedic care is appropriate alongside medical advice.",
    whoItsFor:
      "People with visible or uncomfortable varicose veins can use a consultation to discuss symptoms and appropriate next steps, including medical assessment.",
    whatToExpect:
      "Discuss your symptoms and any relevant medical advice with the clinic before deciding whether to book. Ask what the proposed session involves and seek appropriate medical assessment for concerns about your veins.",
    category: "Circulation & Wellness",
    image: "/images/focus-areas/varicose-veins.jpg",
    imageAlt: "Diagram comparing normal and varicose veins in the leg",
    relatedPosts: [],
  },
];
