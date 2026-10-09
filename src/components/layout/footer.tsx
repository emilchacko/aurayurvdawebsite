import Link from "next/link";
import { clinic } from "@/data/clinic";
import { getWhatsAppUrl } from "@/lib/site";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/ayurveda", label: "Ayurveda" },
  { href: "/treatments", label: "Treatments" },
  { href: "/store", label: "Store" },
  { href: "/doctor", label: "Doctor" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#d8ded4] bg-[#edf0e8]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 pb-28 sm:px-6 md:pb-10 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <div className="font-serif text-2xl text-[#1d3026]">Aura Ayurveda</div>
          <p className="mt-3 max-w-md text-sm leading-7 text-[#536260]">
            Doctor-led Ayurvedic consultations and wellness services in Manjadi, near Thiruvalla, Kerala.
          </p>
          <a href={clinic.mapUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[#214d3a] underline underline-offset-4">Get directions</a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#496d56]">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#2d3837]">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-[#1d4f3a]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#496d56]">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#2d3837]">
            <li>{clinic.location}</li>
            <li><a href={`tel:${clinic.phone.replace(/\s/g, "")}`}>{clinic.phone}</a></li>
            <li>
              <a href={getWhatsAppUrl("Hello, I would like to enquire about Aura Ayurveda services.")} target="_blank" rel="noreferrer" className="transition hover:text-[#1d4f3a]">
                WhatsApp
              </a>
            </li>
            <li>
              <Link href="/privacy-policy" className="transition hover:text-[#1d4f3a]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition hover:text-[#1d4f3a]">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
