import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/site";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/ayurveda", label: "Ayurveda" },
  { href: "/treatments", label: "Treatments" },
  { href: "/treatments/prasavaraksha", label: "Prasavaraksha care" },
  { href: "/store", label: "Store" },
  { href: "/doctor", label: "Doctor" },
  { href: "/contact", label: "Contact" },
  { href: "/review-qr", label: "Google review QR" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#d8ded4] bg-[#edf0e8] print:hidden">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 pb-28 sm:px-6 md:pb-10 lg:grid-cols-[1.3fr_0.8fr_1.2fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/image.png"
              alt=""
              width={44}
              height={44}
              className="size-11 shrink-0"
            />
            <div className="font-serif text-2xl text-[#1d3026]">{siteConfig.businessName}</div>
          </div>
          <p className="mt-3 max-w-md text-sm leading-7 text-[#536260]">
            Ayurvedic consultations and services in {siteConfig.locationLabel}.
          </p>
          <a href={siteConfig.googleMapsUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[#214d3a] underline underline-offset-4">Get directions</a>
          <p className="mt-4 text-sm leading-6 text-[#2d3837]">{siteConfig.serviceAreas.join(" · ")}</p>
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
            <li>{siteConfig.address.display}</li>
            <li><a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>{siteConfig.phone}</a></li>
            <li>
              <a href={getWhatsAppUrl(`Hello, I would like to enquire about ${siteConfig.businessName} services.`)} target="_blank" rel="noreferrer" className="transition hover:text-[#1d4f3a]">
                WhatsApp · {siteConfig.whatsapp}
              </a>
            </li>
            <li>Call or WhatsApp to confirm current opening hours.</li>
            {siteConfig.socialLinks.map((url) => (
              <li key={url}>
                <a href={url} target="_blank" rel="noreferrer" className="transition hover:text-[#1d4f3a]">
                  {url.includes("facebook") ? "Facebook" : "Instagram"}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
