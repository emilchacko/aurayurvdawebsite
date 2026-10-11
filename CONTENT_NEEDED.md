# Content to confirm or provide

Business facts used by the site live in [`src/config/site.ts`](./src/config/site.ts). Replace its marked TODO values only with clinic-confirmed details. NAP (business name, address, and phone) should be updated there, not repeated as a separate source elsewhere.

## Clinic details

- [ ] Confirm the doctor's public display name and spelling (`doctorName` is currently copied from the existing site).
- [ ] Provide the doctor's exact approved professional qualification; registration number, issuing authority, and experience only if the clinic wants them published. `doctorQualification` is intentionally a TODO and is not rendered.
- [ ] Provide a public clinic email address, or confirm that no email should be displayed. `email` is intentionally a TODO and is omitted from the page.
- [ ] Confirm weekly opening hours for the Manjadi clinic, including closed days and any appointment-only periods. No hours are currently shown or emitted in structured data.
- [ ] Provide verified latitude and longitude for the Manjadi clinic. `geo.latitude` and `geo.longitude` are intentionally `null`; they are omitted from structured data.
- [ ] Confirm the full public address, including the existing road, locality, postal code, and nearby landmark.
- [ ] Verify that the current phone and WhatsApp numbers are correct and approved for publication.
- [ ] Provide a direct Google Maps directions link for Aura Ayurveda. The existing short link is currently shared with the Google review URL; verify whether it is appropriate for both, and replace `googleMapsUrl` and/or `googleBusinessProfileReviewUrl` as needed.
- [ ] Confirm the Google Business Profile review link opens the correct clinic profile.
- [ ] If the Google review URL changes, regenerate the static QR asset at `public/images/review-qr.svg` with the replacement URL.
- [ ] Confirm the Facebook and Instagram URLs in `socialLinks` are the clinic's official accounts.
- [ ] Confirm the service areas (`Manjadi`, `Thiruvalla`, and `Kuttapuzha`) before relying on them as a complete local coverage list.
- [ ] Confirm the displayed relationship and address details for the separate Ayurarogyam sister concern.

## Treatment content

- [ ] Review and approve the draft descriptions, intended audience, and “what to expect” copy for all six treatment pages: Panchakarma massage, Kalari Varma massage, dandruff care, acne care, hair spa, and varicose-vein care.
- [ ] Supply clinic-approved, treatment-specific information for those pages. Keep copy accurate, avoid guarantees or cure claims, and have a qualified clinician review health-related wording.
- [ ] Confirm which services are currently offered at the Manjadi location and whether any require advance booking.
- [ ] Review the homepage FAQ answers and confirm they match clinic policy and current practice.

## Photos and brand

- [ ] Provide current, clinic-owned or licensed photos for the clinic exterior/interior and real treatment settings. Current service imagery is illustrative; confirm its suitability or replace it.
- [ ] Confirm photo subjects, image rights, and accurate alt-text descriptions before publishing replacement images.
- [ ] Confirm whether the doctor photo currently on the site is current and approved for continued use.
- [ ] Confirm any preferred clinic tagline or brand positioning.

## Other copy

- [ ] Review the Privacy Policy and Terms copy for legal accuracy and clinic approval.
- [ ] Provide approved blog articles or topic approvals before publishing educational content.
- [ ] Confirm whether the clinic wants a contact form or if phone and WhatsApp enquiries are sufficient.
- [ ] Confirm whether the store page should continue to describe the current products and consultation offer.
