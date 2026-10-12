import { siteConfig } from "@/config/site";

export const kalariSessionText =
  "At Aura Ayurveda, a Kalari session begins with a consultation with the doctor. After understanding your needs and concerns, the doctor prescribes a Kalari session suited to you, so the plan is not the same for everyone. The session itself mostly consists of a body and head massage, done with herbal oil in the Kerala tradition. Afterwards, you are given time to rest. Because the session is prescribed individually, the doctor decides what is appropriate for you. Please tell the doctor in advance about any injuries, recent surgery, skin conditions, pregnancy, blood pressure or heart conditions, or blood-thinning medicines.";

export const kalariFaq = [
  {
    question: "What is Kalari marma massage?",
    answer:
      "It is a hands-on Kerala therapy connected to kalaripayattu and the traditional understanding of marma points. At Aura Ayurveda, the doctor decides whether and how a session is appropriate after consultation.",
  },
  {
    question: "What is the difference between marma and varma?",
    answer:
      "The terms describe the same traditional idea; marma is a widely used spelling, while varma is common in Kerala and Tamil traditions.",
  },
  {
    question: "What does a session involve?",
    answer: kalariSessionText,
  },
  {
    question: "Is it painful?",
    answer:
      "The clinic has not confirmed how a session may feel for each person. [CONFIRM WITH CLINIC: Ask the clinic what to expect. The doctor decides what is appropriate after consultation.]",
  },
  {
    question: "How long is a session?",
    answer:
      "Session length has not been confirmed. [CONFIRM WITH CLINIC: Ask the clinic about the expected session length before booking.]",
  },
  {
    question: "Can I book while visiting Kerala from abroad?",
    answer: `You can ask about an appointment by WhatsApp at ${siteConfig.whatsapp}. ${siteConfig.englishConsultationText} The doctor decides what is appropriate after the consultation; please confirm appointment availability and travel details with the clinic.`,
  },
] as const;
