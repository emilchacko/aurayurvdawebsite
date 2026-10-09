"use client";

import Link from "next/link";
import { useRef } from "react";

type NavItem = {
  href: string;
  label: string;
};

export function MobileNav({
  items,
  whatsappUrl,
}: {
  items: NavItem[];
  whatsappUrl: string;
}) {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.open = false;
    }
  };

  return (
    <details ref={menuRef} className="relative lg:hidden">
      <summary className="flex min-h-10 cursor-pointer list-none items-center justify-center rounded-full border border-[#cbd4c9] px-4 text-sm font-semibold text-[#214d3a] [&::-webkit-details-marker]:hidden">
        Menu
      </summary>
      <nav aria-label="Mobile navigation" className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(18rem,calc(100vw-2rem))] rounded-xl border border-[#d8ded4] bg-[#faf9f5] p-2 shadow-xl">
        {items.map((item) => (
          <Link key={item.href} href={item.href} onClick={closeMenu} className="block rounded-lg px-4 py-3 text-sm font-medium text-[#26392e] hover:bg-[#edf1e9]">
            {item.label}
          </Link>
        ))}
        <a href={whatsappUrl} onClick={closeMenu} target="_blank" rel="noreferrer" className="mt-1 block rounded-lg bg-[#214d3a] px-4 py-3 text-sm font-semibold text-white">
          Message on WhatsApp
        </a>
      </nav>
    </details>
  );
}