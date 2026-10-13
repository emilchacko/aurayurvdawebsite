import { siteConfig } from "@/config/site";

const locations = [
  {
    name: siteConfig.businessName,
    address: siteConfig.address.display,
    mapUrl: siteConfig.googleMapsUrl,
    mapEmbedUrl: siteConfig.googleMapsEmbedUrl,
    hours: `${siteConfig.openingHours.display} ${siteConfig.openingHours.note}`,
  },
  {
    name: siteConfig.sisterConcern.name,
    address: siteConfig.sisterConcern.address,
    mapUrl: siteConfig.sisterConcern.mapUrl,
    mapEmbedUrl: siteConfig.sisterConcern.mapEmbedUrl,
    hours: siteConfig.sisterConcern.openingHours,
  },
];

export function LocationMapCards() {
  return (
    <div>
      <h2 className="sr-only">Maps and opening hours for both locations</h2>
      <div className="grid gap-5 lg:grid-cols-2">
        {locations.map((location) => (
          <article
            key={location.name}
            className="overflow-hidden rounded-xl border border-[#d8ded4] bg-white shadow-sm"
          >
            <iframe
              src={location.mapEmbedUrl}
              title={`Map showing ${location.name} at ${location.address}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] w-full border-0"
            />
            <div className="p-5 sm:p-6">
              <h3 className="font-serif text-2xl text-[#1d3026]">
                {location.name}
                {location.name === siteConfig.sisterConcern.name
                  ? " · Sister concern"
                  : ""}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#58665c]">
                {location.address}
              </p>
              <div className="mt-4 rounded-lg bg-[#edf0e8] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a05435]">
                  Opening hours
                </p>
                <p className="mt-2 text-sm leading-6 text-[#34463b]">
                  {location.hours}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#214d3a] px-5 text-sm font-semibold text-white"
                >
                  Directions to {location.name}
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#214d3a] px-5 text-sm font-semibold text-[#214d3a]"
                >
                  Call to confirm
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
