import type { Metadata } from "next";
import Script from "next/script";
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
    icon: "/favicon.ico",
  },
  verification: {
    google: "egcOVUrAu1fbzFAh17agjycJyqW1AbN44u1o_lbJyoY",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H7YR7XQVCN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H7YR7XQVCN');
          `}
        </Script>
      </head>
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
