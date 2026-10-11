import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PrintButton } from "@/components/ui/print-button";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = {
  ...buildMetadata({
    title: `Google Review QR Code | ${siteConfig.businessName}`,
    description: `Print a QR code to open the Google review page for ${siteConfig.businessName}.`,
    path: "/review-qr",
  }),
  robots: { index: false, follow: true },
};

export default function ReviewQrPage() {
  return (
    <Container>
      <section className="mx-auto flex max-w-2xl flex-col items-center py-10 text-center sm:py-16 print:py-0">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a05435]">
          {siteConfig.businessName}
        </p>
        <h1 className="mt-3 font-serif text-4xl text-[#1d3026] sm:text-5xl">
          Review us on Google
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-[#58665c]">
          Scan this QR code to open our Google review page.
        </p>
        <Image
          src="/images/review-qr.svg"
          alt={`QR code linking to the Google review page for ${siteConfig.businessName}`}
          width={400}
          height={400}
          unoptimized
          className="mt-6 size-72 max-w-full sm:size-96 print:size-96"
        />
        <a
          href={siteConfig.googleBusinessProfileReviewUrl}
          className="mt-4 break-all text-sm font-semibold text-[#214d3a] underline underline-offset-4"
        >
          Open the Google review page
        </a>
        <div className="mt-6">
          <PrintButton />
        </div>
      </section>
    </Container>
  );
}
