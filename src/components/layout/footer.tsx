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
            {siteConfig.englishConsultation ? (
              <li>{siteConfig.englishConsultationLabel}.</li>
            ) : null}
            <li>{siteConfig.openingHours.display} {siteConfig.openingHours.note}</li>
            {siteConfig.socialLinks.map((url) => (
              <li key={url}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Follow ${siteConfig.businessName} on ${url.includes("facebook") ? "Facebook" : "Instagram"}`}
                  className="inline-flex min-h-11 items-center gap-2 transition hover:text-[#1d4f3a]"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="size-5 shrink-0"
                    fill="currentColor"
                  >
                    {url.includes("facebook") ? (
                      <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.2H7.3v3.2h2.8V21h3.4Z" />
                    ) : (
                      <>
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle cx="17.5" cy="6.8" r="1.2" />
                      </>
                    )}
                  </svg>
                  <span>
                    {url.includes("facebook") ? "Facebook" : "Instagram"}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
