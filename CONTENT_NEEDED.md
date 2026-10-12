# Content to confirm or provide

Business facts used by the site live in [`src/config/site.ts`](./src/config/site.ts). Replace its marked TODO values only with clinic-confirmed details. NAP (business name, address, and phone) should be updated there, not repeated as a separate source elsewhere.

## Clinic details

- [ ] Confirm the doctor's public display name and spelling (`doctorName` is currently copied from the existing site).
- [ ] Provide the doctor's exact approved professional qualification; registration number, issuing authority, and experience only if the clinic wants them published. `doctorQualification` is intentionally a TODO and is not rendered.
- [ ] Provide a public clinic email address, or confirm that no email should be displayed. `email` is intentionally a TODO and is omitted from the page.
- [ ] Confirm which weekdays the existing Manjadi hours apply to and any closed days or appointment-only periods. The displayed time windows came from the existing site; the clinic's Google Maps listing currently reports different hours, so reconcile the two sources.
- [x] Verified Aura Ayurveda coordinates from the matching Google Maps result for TK Rd, Manjadi: 9.3844839, 76.5889257.
- [ ] Confirm the full public address, including the existing road, locality, postal code, and nearby landmark.
- [ ] Verify that the current phone and WhatsApp numbers are correct and approved for publication.
- [x] Add a direct Google Maps directions URL for Aura Ayurveda using the coordinates from its matching map result.
- [ ] Confirm that the existing Google review short link opens the correct clinic review form/profile; it is separate from the directions URL now.
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

## Prasavaraksha page

- [ ] [CONFIRM WITH CLINIC] Whether prasavaraksha/postnatal Ayurvedic care is currently offered at the Manjadi clinic and whether the page may describe it as an available service.
- [ ] [CONFIRM WITH CLINIC] Whether oil massage (abhyanga) is offered as part of this care.
- [ ] [CONFIRM WITH CLINIC] Whether herbal steam is offered as part of this care.
- [ ] [CONFIRM WITH CLINIC] Whether herbal dressing is offered as part of this care.
- [ ] [CONFIRM WITH CLINIC] Whether diet and lifestyle guidance is offered as part of this care.
- [ ] [CONFIRM WITH CLINIC] Whether any additional care categories may be described; do not add unverified therapies.
- [ ] Confirm the approved postnatal-care description and have the doctor review all health-related wording.
- [ ] Confirm when a consultation may be considered after vaginal or caesarean delivery, and state that timing is decided after individual assessment and coordination with the patient's maternity-care team.
- [ ] Confirm the number of days or sessions: currently shown as `[To be confirmed by the clinic]`; do not publish a duration until confirmed.
- [ ] Confirm whether visits are outpatient or involve a stay: currently shown as `[To be confirmed by the clinic]`.
- [ ] Confirm whether any package options exist: currently shown as `[To be confirmed by the clinic]`. Add no prices without explicit approval.
- [ ] Confirm the doctor's exact approved credentials for this page; credentials are currently shown as `[To be confirmed by the clinic]`.
- [ ] Confirm the clinic's recommended appointment process, availability, and any postnatal intake requirements. The current “what to bring” list is general and should be checked by the clinic.
- [ ] Confirm whether the site-configured address, phone, WhatsApp number, directions link, and displayed hours are correct for enquiries about postnatal care.
- [ ] Provide a current, clinic-owned or licensed photograph of the Manjadi clinic or an approved postnatal-care setting. The current page image is illustrative and is not a photograph of the clinic or treatment.
- [ ] Confirm that the existing Google Maps embed points to the correct Aura Ayurveda location.
