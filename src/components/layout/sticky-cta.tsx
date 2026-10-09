import Link from "next/link";

export function StickyCta() {
  return (
    <div className="sticky bottom-0 z-40 border-t border-[#e5dccf] bg-[#fffaf4] shadow-[0_-6px_18px_rgba(28,36,32,0.08)] md:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2 px-3 py-2">
        <Link href="/contact" className="rounded-full bg-[#1d4f3a] px-3 py-2 text-center text-xs font-semibold text-white">
          Book
        </Link>
        <Link href="/contact" className="rounded-full border border-[#d9d0c5] bg-white px-3 py-2 text-center text-xs font-semibold text-[#1a2a2a]">
          Call
        </Link>
        <Link href="/contact" className="rounded-full border border-[#d9d0c5] bg-white px-3 py-2 text-center text-xs font-semibold text-[#1a2a2a]">
          WhatsApp
        </Link>
      </div>
    </div>
  );
}
