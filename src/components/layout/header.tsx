import Link from "next/link";
import { clinic } from "@/data/clinic";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/doctor", label: "Doctor" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#e5dccf] bg-[#f7f4ee]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Aura Ayurveda home">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e3eee5] text-sm font-semibold text-[#1d4f3a]">
            AA
          </div>
          <div>
            <div className="font-serif text-xl text-[#1a2a2a]">Aura Ayurveda</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#5a6663]">{clinic.location}</div>
          </div>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-[#293331] transition hover:text-[#1d4f3a]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden text-sm font-semibold text-[#1d4f3a] sm:inline-flex">
            Book a consultation
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#1d4f3a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#163d30]"
          >
            Call
          </Link>
        </div>
      </div>
    </header>
  );
}
