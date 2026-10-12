import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/site";

export function VisitingKeralaInfo({
  airportAndTravelInfo,
}: {
  airportAndTravelInfo: string;
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
      <div>
        <p className="text-sm leading-7 text-[#46564b]">
          Consultations are by appointment via WhatsApp at{" "}
          <a
            href={getWhatsAppUrl(
              `Hello, I am visiting Kerala and would like to ask about a Kalari marma massage consultation at ${siteConfig.businessName}.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#214d3a] underline underline-offset-4"
          >
            {siteConfig.whatsapp}
          </a>
          .{" "}
          {siteConfig.englishConsultation
            ? siteConfig.englishConsultationText
            : ""}
        </p>
        <p className="mt-3 text-sm leading-7 text-[#46564b]">
          Clinic hours: {siteConfig.openingHours.display}{" "}
          {siteConfig.openingHours.note}
        </p>
        <p className="mt-3 text-sm leading-7 text-[#46564b]">
          {airportAndTravelInfo}
        </p>
        <p className="mt-3 text-sm leading-7 text-[#46564b]">
          The clinic is at {siteConfig.address.display}. Bring a list of
          current medicines, share any allergies or health conditions with the
          doctor, and wear comfortable clothing.
        </p>
        <a
          href={siteConfig.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full border border-[#214d3a] px-5 text-sm font-semibold text-[#214d3a] hover:bg-white"
        >
          Get directions
        </a>
      </div>
      <iframe
        src={siteConfig.googleMapsEmbedUrl}
        title={`Map showing ${siteConfig.businessName} at ${siteConfig.locationLabel}`}
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="aspect-[4/3] w-full rounded-lg border border-[#d8ded4] bg-white sm:aspect-[16/9]"
      />
    </div>
  );
}
