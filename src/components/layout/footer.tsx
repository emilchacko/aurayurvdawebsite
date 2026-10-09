import Link from "next/link";
import { clinic } from "@/data/clinic";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/doctor", label: "Doctor" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#e5dccf] bg-[#f0eadf]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <div className="font-serif text-2xl text-[#1a2a2a]">Aura Ayurveda</div>
          <p className="mt-3 max-w-md text-sm leading-7 text-[#536260]">
            Personalized Ayurvedic care for hair, skin, women’s wellness, and everyday health in {clinic.location}.
          </p>
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
            <li>{clinic.phone}</li>
            <li>
              <a href={clinic.whatsappUrl} target="_blank" rel="noreferrer" className="transition hover:text-[#1d4f3a]">
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
