type OpeningHoursSpecification = {
  opens: string;
  closes: string;
};

export const siteConfig = {
  businessName: "Aura Ayurveda",
  siteUrl: "https://auraayurvedawellness.in",
  logoUrl: "https://auraayurvedawellness.in/images/logo/image.png",
  doctorName: "Dr. Lidiya Thomas",
  doctorQualification: "TODO: confirm the doctor's full approved qualification",
  phone: "+91 96002 33308",
  whatsapp: "+91 96002 33308",
  email: "TODO: add the clinic's public email address",
  address: {
    streetAddress: "TK Rd, Manjadi",
    addressLocality: "Thiruvalla",
    addressRegion: "Kerala",
    postalCode: "689105",
    addressCountry: "IN",
    display:
      "TK Rd, Manjadi, Thiruvalla, Kerala 689105, near Chikkos Fried Chicken",
  },
  locationLabel: "Manjadi, near Thiruvalla, Kerala",
  geo: {
    latitude: 9.3844839,
    longitude: 76.5889257,
  },
  openingHours: {
    note: "Weekdays for these time windows have not been confirmed.",
    manjadiDisplay:
      "9:30 AM–1:00 PM and 6:00 PM–7:30 PM",
    display:
      "Aura Ayurveda, Manjadi: 9:30 AM–1:00 PM and 6:00 PM–7:30 PM. Ayurarogyam, Manakachira: 1:00 PM–6:00 PM.",
    specifications: [
      { opens: "09:30:00", closes: "13:00:00" },
      { opens: "18:00:00", closes: "19:30:00" },
    ] as OpeningHoursSpecification[],
  },
  googleMapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=9.3844839%2C76.5889257",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=AURA+Ayurveda,+TK+Rd,+Manjadi,+Thiruvalla,+Kerala+689105&output=embed",
  googleBusinessProfileReviewUrl: "https://share.google/tKnJchnqEmaezNX70",
  socialLinks: [
    "https://www.facebook.com/Drlidiya.thomas",
    "https://www.instagram.com/ayurarogyam1987/",
  ],
  serviceAreas: ["Manjadi", "Thiruvalla", "Kuttapuzha"],
  sisterConcern: {
    name: "Ayurarogyam",
    location: "Manakachira, near Thiruvalla, Kerala",
    address: "Manakachira, near Thiruvalla, Kerala",
    mapUrl: "https://maps.app.goo.gl/FDMo1n2TrK6qWVNi7",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=9.3818422,76.6034454&z=17&output=embed",
  },
} as const;

export function isConfiguredValue(value: string | null | undefined): value is string {
  return Boolean(value && !value.startsWith("TODO:"));
}
