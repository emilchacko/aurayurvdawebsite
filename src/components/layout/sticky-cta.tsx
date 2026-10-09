import Link from "next/link";
import { clinic } from "@/data/clinic";
import { getWhatsAppUrl } from "@/lib/site";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#d8ded4] bg-[#faf9f5]/95 shadow-[0_-8px_24px_rgba(29,48,38,0.12)] backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-xl grid-cols-3 gap-2 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2">
        <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="flex min-h-11 items-center justify-center rounded-full border border-[#cbd4c9] bg-white text-xs font-semibold text-[#214d3a]">
          Call clinic
        </a>
        <a href={getWhatsAppUrl("Hello, I would like to enquire about Aura Ayurveda services.")} target="_blank" rel="noreferrer" className="flex min-h-11 items-center justify-center rounded-full bg-[#214d3a] text-xs font-semibold text-white">
          WhatsApp
        </a>
        <Link href="/contact" className="flex min-h-11 items-center justify-center rounded-full border border-[#cbd4c9] bg-white text-xs font-semibold text-[#214d3a]">
          Visit us
        </Link>
      </div>
    </div>
  );
}
