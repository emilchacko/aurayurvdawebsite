import { siteConfig } from "@/config/site";
import { visitorAirportInfo } from "@/content/visitor-info";
import { getWhatsAppUrl } from "@/lib/site";

const mlText = {
  appointments: "കൺസൾട്ടേഷനുകൾ വാട്സ്ആപ്പ് വഴി അപ്പോയിന്റ്മെന്റ് എടുത്താണ്:",
  english: "കൺസൾട്ടേഷൻ ഇംഗ്ലീഷിലും ലഭ്യമാണ്.",
  hours:
    "ക്ലിനിക് സമയം: തിങ്കൾ–ശനി: രാവിലെ 9:30–ഉച്ചയ്ക്ക് 1:00, വൈകുന്നേരം 6:00–7:30. ഞായർ: അവധി. എല്ലാ സമയവും ഇന്ത്യൻ സ്റ്റാൻഡേർഡ് ടൈം (IST) ആണ്.",
  airport:
    "ഏറ്റവും അടുത്തുള്ള വിമാനത്താവളങ്ങൾ കൊച്ചിയും തിരുവനന്തപുരവുമാണ്. റൂട്ടും ഗതാഗതവും അനുസരിച്ച് ഏതിൽ നിന്നായാലും ഏകദേശം 2–3 മണിക്കൂർ യാത്രയുണ്ട്.",
  address:
    "ക്ലിനിക് TK Rd, മഞ്ഞാടി, തിരുവല്ല, കേരളം 689105 ൽ, ചിക്കോസ് ഫ്രൈഡ് ചിക്കന് സമീപമാണ്. നിലവിൽ കഴിക്കുന്ന മരുന്നുകളുടെ പട്ടിക കൊണ്ടുവരിക, അലർജികളോ ആരോഗ്യപ്രശ്നങ്ങളോ ഉണ്ടെങ്കിൽ ഡോക്ടറോട് പറയുക, സൗകര്യപ്രദമായ വസ്ത്രം ധരിക്കുക.",
  directions: "വഴി കാണുക",
  whatsappMessage: `Hello, I am visiting Kerala and would like to ask about a consultation at ${siteConfig.businessName}.`,
  mapTitle: `${siteConfig.businessName}, തിരുവല്ല, കേരളം - ഭൂപടം`,
};

export function VisitingKeralaInfo({
  locale = "en",
}: {
  locale?: "en" | "ml";
}) {
  const ml = locale === "ml";

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
      <div>
        <p className="text-sm leading-7 text-[#46564b]">
          {ml
            ? mlText.appointments
            : "Consultations are by appointment via WhatsApp at"}{" "}
          <a
            href={getWhatsAppUrl(mlText.whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#214d3a] underline underline-offset-4"
          >
            {siteConfig.whatsapp}
          </a>
          .{" "}
          {siteConfig.englishConsultation
            ? ml
              ? mlText.english
              : siteConfig.englishConsultationText
            : ""}
        </p>
        <p className="mt-3 text-sm leading-7 text-[#46564b]">
          {ml ? (
            mlText.hours
          ) : (
            <>
              Clinic hours: {siteConfig.openingHours.display}{" "}
              {siteConfig.openingHours.note}
            </>
          )}
        </p>
        <p className="mt-3 text-sm leading-7 text-[#46564b]">
          {ml ? mlText.airport : visitorAirportInfo}
        </p>
        <p className="mt-3 text-sm leading-7 text-[#46564b]">
          {ml ? (
            mlText.address
          ) : (
            <>
              The clinic is at {siteConfig.address.display}. Bring a list of
              current medicines, share any allergies or health conditions with
              the doctor, and wear comfortable clothing.
            </>
          )}
        </p>
        <a
          href={siteConfig.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full border border-[#214d3a] px-5 text-sm font-semibold text-[#214d3a] hover:bg-white"
        >
          {ml ? mlText.directions : "Get directions"}
        </a>
      </div>
      <iframe
        src={siteConfig.googleMapsEmbedUrl}
        title={
          ml
            ? mlText.mapTitle
            : `Map showing ${siteConfig.businessName} at ${siteConfig.locationLabel}`
        }
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="aspect-[4/3] w-full rounded-lg border border-[#d8ded4] bg-white sm:aspect-[16/9]"
      />
    </div>
  );
}
