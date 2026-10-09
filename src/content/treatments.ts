export type Treatment = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  process: string;
  potentialBenefits: string;
  category: string;
  image: string;
  imageAlt: string;
};

export const treatments: Treatment[] = [
  {
    slug: "panchakarma-massage",
    title: "Ayurvedic Panchakarma Massage",
    shortDescription:
      "A doctor-guided oil massage selected as part of an individualized Panchakarma or wellness plan.",
    description:
      "Panchakarma-related therapies are chosen only after a consultation. Massage may be one part of a broader plan when appropriate for the individual.",
    process:
      "The doctor first reviews your health and goals, then explains the appropriate therapy, oils, and session approach. A trained practitioner provides the massage, with comfort and suitability checked throughout.",
    potentialBenefits:
      "Some people find a session relaxing and soothing for temporary muscle tension. Experience varies, and massage is not a substitute for medical care or a guaranteed detox.",
    category: "Massage & Therapies",
    image: "/images/focus-areas/ayurvedic-therapies.jpg",
    imageAlt: "Ayurvedic massage therapy, illustrative image",
  },
  {
    slug: "kalari-varma-massage",
    title: "Kalari Varma Massage",
    shortDescription:
      "A traditional Kalari-inspired massage approach, planned around your needs and practitioner assessment.",
    description:
      "Kalari Varma techniques are considered individually. The practitioner discusses your concerns and health history before deciding whether a session is suitable.",
    process:
      "After an initial discussion, a trained practitioner selects suitable massage techniques and oils. The session is adjusted to your comfort; the specific approach can vary by person and concern.",
    potentialBenefits:
      "A session may support relaxation and temporary ease of muscular tightness. It is not a replacement for diagnosis or treatment of an injury or medical condition.",
    category: "Massage & Therapies",
    image: "/images/focus-areas/ayurvedic-therapies.jpg",
    imageAlt: "Ayurvedic massage therapy, illustrative image",
  },
  {
    slug: "ayurvedic-dandruff-treatment",
    title: "Ayurvedic Dandruff Treatment",
    shortDescription:
      "A scalp assessment followed by suitable cleansing, care guidance, and follow-up for flakes or irritation.",
    description:
      "Dandruff and scalp irritation can have different causes. A consultation helps identify your symptoms and select an appropriate scalp-care approach.",
    process:
      "The doctor reviews your scalp symptoms and routine, then may recommend suitable cleansing, topical scalp care, and practical home-care guidance. Follow-up can help review how your scalp responds.",
    potentialBenefits:
      "Personalized care may help manage visible flakes, dryness, or itch for some people. Results vary; persistent, severe, or worsening symptoms may need medical evaluation.",
    category: "Hair & Scalp",
    image: "/images/focus-areas/hair-scalp.jpg",
    imageAlt: "Hair and scalp care, illustrative image",
  },
  {
    slug: "ayurvedic-acne-treatment",
    title: "Ayurvedic Acne Treatment",
    shortDescription:
      "Individual skin guidance based on your acne concerns, skin-care routine, and health history.",
    description:
      "Acne care begins with understanding your skin and its history. Recommendations are tailored after assessment rather than using the same routine for everyone.",
    process:
      "The doctor discusses your skin concerns, current products, and relevant health history. A care plan may include gentle skin-care and lifestyle guidance, with follow-up to review your response.",
    potentialBenefits:
      "A personalized plan may help you build a more suitable skin-care routine and support day-to-day skin comfort. Acne varies; persistent, painful, or scarring acne should be assessed by a qualified medical professional.",
    category: "Skin Care",
    image: "/images/focus-areas/skin-wellness.jpg",
    imageAlt: "Facial skin care, illustrative image",
  },
  {
    slug: "ayurvedic-hair-spa",
    title: "Ayurvedic Hair Spa",
    shortDescription:
      "A relaxing hair and scalp session that may include cleansing, suitable oils, and gentle massage.",
    description:
      "The hair-spa approach is selected to suit your scalp and hair-care preferences, with product and technique choices discussed before the session.",
    process:
      "After a brief scalp and hair review, the practitioner may cleanse the scalp, apply suitable oil or hair-care products, and provide a gentle massage before rinsing and after-care guidance.",
    potentialBenefits:
      "A session may leave hair feeling conditioned and the scalp feeling refreshed, while offering a relaxing self-care experience. It is not a guaranteed treatment for hair loss or scalp disease.",
    category: "Hair & Scalp",
    image: "/images/focus-areas/hair-scalp.jpg",
    imageAlt: "Hair and scalp care, illustrative image",
  },
  {
    slug: "varicose-vein-care",
    title: "Varicose Vein Care",
    shortDescription:
      "A consultation to discuss vein-related symptoms and determine safe, appropriate supportive care.",
    description:
      "Visible or uncomfortable varicose veins should be assessed carefully. The first step is to review symptoms and discuss whether supportive Ayurvedic care is appropriate alongside medical advice.",
    process:
      "The doctor discusses your symptoms and health history and may recommend medical assessment before suggesting supportive care. Massage over prominent or painful veins is avoided unless a qualified clinician specifically confirms it is safe.",
    potentialBenefits:
      "A consultation can help clarify suitable next steps and comfort-focused support. Ayurvedic care cannot be promised to remove or reverse varicose veins and should not replace evaluation by a qualified medical professional.",
    category: "Circulation & Wellness",
    image: "/images/focus-areas/joint-muscle.jpg",
    imageAlt: "Person experiencing back discomfort, illustrative image",
  },
];
