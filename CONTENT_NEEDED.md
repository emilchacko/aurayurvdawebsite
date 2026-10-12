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
- [ ] Provide and approve future blog articles or topics before publishing additional educational content.
- [ ] Confirm whether the clinic wants a contact form or if phone and WhatsApp enquiries are sufficient.
- [ ] Confirm whether the store page should continue to describe the current products and consultation offer.

## Food as Medicine blog article

- [x] Clinic confirms English-language consultations are available for visitors from abroad.
- [x] Clinic identifies Kochi and Thiruvananthapuram as nearest airports and estimates travel time at 2–3 hours; the article labels this approximate and dependent on route and traffic.
- [ ] [CONFIRM WITH CLINIC] Verify current Aura Ayurveda opening hours and which weekdays the Manjadi time windows apply to. The article marks these details for confirmation and states India Standard Time (IST).
- [ ] [CONFIRM WITH CLINIC] Verify the doctor's public display name and spelling before naming the doctor in article copy. The article currently refers to “our doctor” and uses Aura Ayurveda as its organization author.
- [ ] Provide a current clinic-owned or licensed hero photograph of Kerala food, spices, or another suitable subject for this article. The current hero image is an illustrative existing site asset, not a photograph of a Kerala meal or the clinic.
- [ ] Review the general food and health wording in the article with the clinic doctor before publication.

## Prasavaraksha page

- [x] Clinic confirms mother's abhyanga (massage) with a medicated water bath and the same massage-and-bath care for the baby.
- [x] Clinic confirms postnatal medicines for the mother, packs for stretch-mark and postnatal skin-care concerns, and diet advice based on the mother's and baby's conditions.
- [ ] Provide a current, clinic-owned or licensed photograph of the Manjadi clinic or an approved postnatal-care setting. The current page image is illustrative and is not a photograph of the clinic or treatment.
- [ ] Confirm the existing Google Maps embed points to the correct Aura Ayurveda location.
- [ ] If adding a duration, stay/visit format, packages, or prices later, provide clinic-confirmed details first; none are stated on the page.
