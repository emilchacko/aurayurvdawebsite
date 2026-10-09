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

## Publish preview with GitHub Pages

After the deployment workflow is pushed and Pages is enabled, the preview will be available at:

https://emilchacko.github.io/aurayurvdawebsite/

In the GitHub repository, open **Settings → Pages** and choose **GitHub Actions** as the build and deployment source. Push changes to `main` to trigger the deployment workflow. The site is public to anyone with the URL.

## Important notes

- Clinic contact details and the doctor’s name and title have been added; doctor credentials and an email address still need confirmation.
- Contact details and legal pages are structured but not final.
- Treatment and blog content is placeholder content only.

See [CONTENT_NEEDED.md](CONTENT_NEEDED.md) for the missing launch requirements.
