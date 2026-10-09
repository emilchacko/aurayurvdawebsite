import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const classes =
    variant === "primary"
      ? "bg-[#1d4f3a] text-white hover:bg-[#163d30]"
      : "border border-[#d9d0c5] bg-white text-[#1a2a2a] hover:bg-[#f4efe8]";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors ${classes} ${className}`}
    >
      {children}
    </Link>
  );
}
