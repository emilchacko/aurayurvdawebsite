"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      parameters: { link_url: string; link_text: string },
    ) => void;
  }
}

export function ClinicActionTracking() {
  useEffect(() => {
    function trackClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) {
        return;
      }

      const link = event.target.closest("a");
      if (!link) {
        return;
      }

      const href = link.getAttribute("href") ?? "";
      const label = `${link.textContent ?? ""} ${link.getAttribute("aria-label") ?? ""}`.trim();
      const bookingContext = `${label} ${new URL(link.href).searchParams.get("text") ?? ""}`;
      const actions: string[] = [];

      if (href.startsWith("tel:")) {
        actions.push("call");
      }
      if (href.startsWith("https://wa.me/")) {
        actions.push("whatsapp");
      }
      if (/\b(direction|directions|open map|get directions)\b/i.test(label)) {
        actions.push("directions");
      }
      if (link.dataset.trackAction === "booking" || /\b(book|booking|appointment|consultation)\b/i.test(bookingContext)) {
        actions.push("booking");
      }

      for (const action of actions) {
        window.gtag?.("event", `clinic_${action}_click`, {
          link_url: link.href,
          link_text: label,
        });
      }
    }

    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, []);

  return null;
}
