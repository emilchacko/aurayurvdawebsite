import Image from "next/image";
import Link from "next/link";
import { clinic } from "@/data/clinic";
import { getWhatsAppUrl } from "@/lib/site";
import { MobileNav } from "@/components/layout/mobile-nav";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/ayurveda", label: "Ayurveda" },
  { href: "/treatments", label: "Treatments" },
  { href: "/store", label: "Store" },
  { href: "/doctor", label: "Doctor" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#d8ded4] bg-[#faf9f5]/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[4.5rem] items-center justify-between gap-3 py-2">
          <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Aura Ayurveda home">
            <Image
              src="/images/logo/image.png"
              alt=""
              width={48}
              height={48}
              priority
              className="size-11 shrink-0"
            />
            <span className="min-w-0">
              <span className="block truncate font-serif text-lg leading-tight text-[#1d3026] sm:text-xl">Aura Ayurveda</span>
              <span className="mt-1 block truncate text-[10px] font-medium uppercase tracking-[0.12em] text-[#647267]">Manjadi · Thiruvalla</span>
            </span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-[#34463b] transition hover:text-[#a05435]">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a href={getWhatsAppUrl("Hello, I would like to enquire about Aura Ayurveda services.")} target="_blank" rel="noreferrer" className="hidden min-h-10 items-center justify-center rounded-full bg-[#214d3a] px-4 text-sm font-semibold text-white transition hover:bg-[#183b2c] sm:inline-flex">
              WhatsApp us
            </a>
            <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} aria-label={`Call Aura Ayurveda at ${clinic.phone}`} className="hidden min-h-10 items-center justify-center rounded-full border border-[#cbd4c9] px-3 text-sm font-semibold text-[#214d3a] sm:inline-flex sm:px-4">
              Call
            </a>
            <Link href="/store" className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#a05435] bg-white px-3 text-sm font-semibold text-[#8d462f] transition hover:bg-[#f8eee8] sm:px-4 lg:hidden">
              Store
            </Link>
            <MobileNav items={navItems} whatsappUrl={getWhatsAppUrl("Hello, I would like to enquire about Aura Ayurveda services.")} />
          </div>
        </div>
      </div>
    </header>
  );
}
