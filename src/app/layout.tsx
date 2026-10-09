import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StickyCta } from "@/components/layout/sticky-cta";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = buildMetadata({
  title: "Aura Ayurveda | Personalized Ayurvedic Care",
  description:
    "Aura Ayurveda offers thoughtful, personalized Ayurvedic care for hair, skin, women’s wellness, and everyday health in Manjadi near Thiruvalla, Kerala.",
  path: "/",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#f7f4ee] text-[#1a2a2a]">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyCta />
        </div>
      </body>
    </html>
  );
}
