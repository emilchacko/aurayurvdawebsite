# Aura Ayurveda website

This repository contains the foundation for the Aura Ayurveda marketing website, built in Next.js with TypeScript and Tailwind CSS.

## Current status

This is the Phase 2 foundation stage, not the final site. It includes:

- Next.js App Router setup
- Design system and typography
- Reusable UI components
- Local SEO setup via metadata and sitemap/robots
- Content model for treatments and blog posts
- Placeholder pages for key sections
- Structured call-to-action and trust-oriented layout

## Run locally

```bash
npm run dev
```

Then open http://localhost:3000.

## Publish with GitHub Pages

The site is published at:

https://auraayurvedawellness.in/

In the GitHub repository, open **Settings → Pages**, set the custom domain to `auraayurvedawellness.in`, and choose **GitHub Actions** as the build and deployment source. The deployment workflow exports the site at the domain root and includes the `CNAME` file. Push changes to `main` to trigger a deployment.

The `www` hostname should have a CNAME record pointing to `emilchacko.github.io`. The apex domain should point only to GitHub Pages using these A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. Remove any other apex A records. Enable **Enforce HTTPS** in Pages after GitHub provisions the certificate.

## Important notes

- Clinic contact details and the doctor’s name and title have been added; doctor credentials and an email address still need confirmation.
- Contact details and legal pages are structured but not final.
- Treatment and blog content is placeholder content only.

See [CONTENT_NEEDED.md](CONTENT_NEEDED.md) for the missing launch requirements.
