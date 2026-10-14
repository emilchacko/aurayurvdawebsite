import { siteConfig } from "@/config/site";

export const kalariSessionText =
  "At Aura Ayurveda, a Kalari session begins with a consultation. The doctor reviews your needs and health history, then plans your individual session. Contact the clinic to confirm what to expect before booking. Tell the doctor about any injuries, recent surgery, skin conditions, pregnancy, blood pressure or heart conditions, or blood-thinning medicines.";

export const kalariFaq = [
  {
    question: "What is Kalari marma massage?",
    answer:
      "It is a hands-on Kerala massage practice connected to kalaripayattu and the Ayurvedic understanding of marma points. At Aura Ayurveda, each session is prescribed by the doctor after consultation.",
  },
  {
    question: "What is the difference between marma and varma?",
    answer:
      "Marma is the spelling used widely across India; varma is common in Kerala and Tamil traditions.",
  },
  {
    question: "What does a session involve?",
    answer: kalariSessionText,
  },
  {
    question: "Is it painful?",
    answer:
      "[CONFIRM WITH CLINIC: Describe how a session may feel and what clients should expect.]",
  },
  {
    question: "How long is a session?",
    answer:
      "Session length has not been confirmed. [CONFIRM WITH CLINIC: Ask the clinic about the expected session length before booking.]",
  },
  {
    question: "Can I book while visiting Kerala from abroad?",
    answer: `Contact the clinic by WhatsApp at ${siteConfig.whatsapp} to arrange a consultation. ${siteConfig.englishConsultationText} Confirm appointment availability and travel details with the clinic.`,
  },
] as const;
