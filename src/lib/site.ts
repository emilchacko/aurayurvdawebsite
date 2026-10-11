import { siteConfig } from "@/config/site";

export const siteUrl = siteConfig.siteUrl;

export const withBasePath = (path: string) => path;

export const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
