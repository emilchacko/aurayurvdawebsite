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
      "Postnatal care for mothers and babies, planned by the doctor after an individual assessment.",
    whatToExpect:
      "The doctor assesses the mother and baby individually and plans care around their conditions and recovery. Continue to follow advice from their maternity-care teams.",
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
      "The doctor plans Panchakarma care after a consultation. An oil massage can be included as part of an individual wellness plan.",
    whoItsFor:
      "People exploring an oil massage as part of an Ayurvedic wellness plan can discuss their goals with the doctor.",
    whatToExpect:
      "The doctor explains the recommended therapy and session steps before you book. Contact the clinic to confirm oils, preparation and follow-up details.",
    category: "Massage & Therapies",
    image: "/images/focus-areas/ayurvedic-therapies.jpg",
    imageAlt: "Ayurvedic massage therapy, illustrative image",
    relatedPosts: [],
  },
  {
    slug: "back-pain-joint-pain-care",
    title: "Ayurvedic Care for Back Pain and Joint Pain",
    shortDescription:
      "A consultation for back, knee, neck, shoulder and joint discomfort, with an individualized Ayurvedic care plan.",
    description:
      "If you have recurring back, knee, neck, shoulder or joint discomfort, the doctor reviews your symptoms, daily activities and health history, then discusses whether Ayurvedic care may be suitable for you.",
    whoItsFor:
      "People with back, knee, neck, shoulder or joint discomfort, including stiffness after long shifts, standing work or physically demanding care work, can discuss their concerns with the doctor.",
    whatToExpect:
      "Describe when the discomfort began, what affects it and any injury, swelling, numbness or weakness. Bring current medicines and any reports. Seek urgent medical care for severe pain, pain after an injury, fever, significant swelling, or new weakness or numbness.",
    category: "Joint & Muscle Care",
    image: "/images/focus-areas/joint-muscle.jpg",
    imageAlt:
      "Illustrative image of a man holding his lower back outdoors; not a clinic patient or treatment",
    relatedPosts: [
      "knee-back-pain-thiruvalla",
      "ayurveda-for-nurses-care-workers-abroad",
    ],
    updatedDate: "2026-10-21",
  },
  {
    slug: "ayurvedic-body-therapies",
    title: "Ayurvedic Body Therapies: Abhyanga, Kizhi, Kati Vasti and Janu Vasti",
    shortDescription:
      "Traditional Kerala therapies that the doctor may discuss as part of an individualized plan for relaxation and physical wellbeing.",
    description:
      "Abhyanga (oil massage), Kizhi or Pinda Sweda (warm herbal boluses), Kati Vasti (warm oil over the lower back), Janu Vasti (warm oil over the knee) and Shirodhara (oil poured over the forehead) are traditionally used Ayurvedic therapies. The doctor assesses whether any is suitable for you.",
    whoItsFor:
      "People who feel physically tired or stiff, including those returning to Kerala from long working hours abroad, can ask the doctor which therapies, if any, may be appropriate.",
    whatToExpect:
      "The doctor begins with a consultation about your concerns and health history, then explains any recommended therapy and what a session involves. Contact the clinic to confirm availability, session duration and preparation before you visit.",
    category: "Massage & Therapies",
    image: "/images/focus-areas/ayurvedic-therapies.jpg",
    imageAlt: "Ayurvedic massage therapy, illustrative image",
    relatedPosts: ["ayurveda-for-nurses-care-workers-abroad"],
    updatedDate: "2026-10-21",
  },
  {
    slug: "kalari-varma-massage",
    title: "Kalari Marma (Varma) Massage",
    shortDescription:
      "A Kerala massage practice planned by the doctor after an individual consultation.",
    description:
      "Kalari marma (varma) massage is a Kerala hands-on practice connected to kalaripayattu. The doctor plans each session after an individual consultation.",
    whoItsFor:
      "People interested in Kalari marma massage can discuss their needs and health history with the doctor.",
    whatToExpect:
      "A Kalari session begins with a doctor consultation. The doctor reviews your needs and health history, then plans your individual session.",
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
      "The doctor reviews dandruff, scalp irritation and your current care routine, then explains a personalized scalp-care approach.",
    whoItsFor:
      "People concerned about visible flakes or scalp irritation can discuss their symptoms and current care routine with the doctor.",
    whatToExpect:
      "The doctor reviews your symptoms and current routine, then explains the recommended scalp-care steps. Contact the clinic to confirm products, preparation and follow-up details.",
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
      "The doctor reviews your acne concerns, skin-care routine and health history, then plans personalized skin care.",
    whoItsFor:
      "People seeking guidance about acne and their skin-care routine can discuss their concerns and health history with the doctor.",
    whatToExpect:
      "The doctor discusses your skin-care plan and explains recommended products, preparation and follow-up. Contact the clinic to confirm details before booking.",
    category: "Skin Care",
    image: "/images/focus-areas/skin-wellness.jpg",
    imageAlt: "Facial skin care, illustrative image",
    relatedPosts: ["ayurvedic-skincare-different-skin-types-prakriti"],
  },
  {
    slug: "ayurvedic-hair-spa",
    title: "Ayurvedic Hair Spa",
    shortDescription:
      "A relaxing hair and scalp session planned around your scalp and hair-care preferences.",
    description:
      "The clinic discusses your scalp, hair-care preferences, products and session steps with you before booking.",
    whoItsFor:
      "People looking for a dedicated hair and scalp care session.",
    whatToExpect:
      "Contact the clinic to confirm the session steps, products, duration and after-care before booking.",
    category: "Hair & Scalp",
    image: "/images/focus-areas/hair-scalp.jpg",
    imageAlt: "Hair and scalp care, illustrative image",
    relatedPosts: [],
  },
  {
    slug: "varicose-vein-care",
    title: "Varicose Vein Care",
    shortDescription:
      "A consultation to review vein-related symptoms and discuss an individualized care plan.",
    description:
      "The doctor reviews your symptoms and health history to plan Ayurvedic supportive care alongside appropriate medical advice.",
    whoItsFor:
      "People with visible or uncomfortable varicose veins can discuss their symptoms and care plan with the doctor.",
    whatToExpect:
      "Discuss your symptoms, any medical advice you have received and the proposed session with the doctor. Seek medical assessment for concerns about your veins.",
    category: "Circulation & Wellness",
    image: "/images/focus-areas/varicose-veins.jpg",
    imageAlt: "Diagram comparing normal and varicose veins in the leg",
    relatedPosts: [],
  },
];
