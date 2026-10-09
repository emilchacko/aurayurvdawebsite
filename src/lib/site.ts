import { clinic } from "@/data/clinic";

const isGitHubPagesBuild =
  process.env.GITHUB_ACTIONS === "true" &&
  process.env.GITHUB_REPOSITORY === "emilchacko/aurayurvdawebsite";

export const withBasePath = (path: string) =>
  `${isGitHubPagesBuild ? "/aurayurvdawebsite" : ""}${path}`;

export const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${clinic.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
