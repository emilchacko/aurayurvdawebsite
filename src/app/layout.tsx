import type { Metadata } from "next";
import { ClinicActionTracking } from "@/components/analytics/clinic-action-tracking";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StickyCta } from "@/components/layout/sticky-cta";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(`${siteConfig.siteUrl}/`),
  title: siteConfig.businessName,
  description: `${siteConfig.businessName}, an Ayurvedic clinic in ${siteConfig.locationLabel}.`,
  icons: {
    icon: "/images/logo/image.png",
  },
  verification: {
    google: "3sWDsw2NJy8rZNrkzz-ysqvvH9qVe9aFmiw4z4_iXK0",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#faf9f5] pb-16 text-[#1d3026] md:pb-0 print:pb-0">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Breadcrumbs />
            {children}
          </main>
          <Footer />
          <StickyCta />
        </div>
        <ClinicActionTracking />
      </body>
    </html>
  );
}
