import { clinic } from "@/data/clinic";

export const siteUrl = "https://auraayurvedawellness.in";

export const withBasePath = (path: string) => path;

export const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${clinic.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
