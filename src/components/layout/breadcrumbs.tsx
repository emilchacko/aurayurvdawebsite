"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { treatments } from "@/content/treatments";
import { blogPosts } from "@/content/blog";
import { Container } from "@/components/ui/container";

const routeLabels: Record<string, string> = {
  about: "About",
  ayurveda: "Ayurveda",
  blog: "Blog",
  contact: "Contact",
  doctor: "Doctor",
  "privacy-policy": "Privacy Policy",
  "review-qr": "Google review QR",
  store: "Store",
  terms: "Terms",
  treatments: "Treatments",
};

function getLabel(segment: string, parentPath: string) {
  if (parentPath === "/treatments") {
    return treatments.find((item) => item.slug === segment)?.title ?? segment;
  }
  if (parentPath === "/blog") {
    return blogPosts.find((item) => item.slug === segment)?.title ?? segment;
  }

  return (
    routeLabels[segment] ??
    segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}

export function Breadcrumbs() {
  const pathname = usePathname();

  if (!pathname || pathname === "/" || pathname.startsWith("/ml/")) {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = segments.map((segment, index) => {
    const parentPath = `/${segments.slice(0, index).join("/")}`;
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    return { href, label: getLabel(segment, parentPath) };
  });

  return (
    <Container>
      <nav aria-label="Breadcrumb" className="py-3 text-sm text-[#58665c] print:hidden">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="underline underline-offset-4">
              Home
            </Link>
          </li>
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.href} className="flex items-center gap-2">
              <span aria-hidden="true">/</span>
              {index === breadcrumbs.length - 1 ? (
                <span aria-current="page">{breadcrumb.label}</span>
              ) : (
                <Link href={breadcrumb.href} className="underline underline-offset-4">
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </Container>
  );
}
