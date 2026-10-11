"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#214d3a] px-6 text-sm font-semibold text-white print:hidden"
    >
      Print this QR code
    </button>
  );
}
