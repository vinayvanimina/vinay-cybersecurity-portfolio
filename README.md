# Vinay Cybersecurity Portfolio

A responsive static portfolio designed for a Senior SOC Analyst profile.

## Included

- Hero / professional summary
- Experience
- Technical skills
- Sanitized incident case studies
- Home lab
- Certifications placeholder
- Contact section
- Responsive navigation
- Lightweight scroll animations

## Current profile links

- Email: `Vinnuv85@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/vinay-kumar-vanimina-081b18130/`
- GitHub: `https://github.com/vinayvanimina`
- Certification: GIAC Certified Incident Handler (GCIH)

## Still to add

1. Latest résumé PDF
2. Optional profile photo

## Local development

Install dependencies and start the Cloudflare local server:

```bash
npm install
npm run dev
```

Then open `http://localhost:8787`.

## Cloudflare deployment

This project uses Cloudflare Workers Static Assets. Wrangler is the source of truth for deployment configuration.

Validate without deploying:

```bash
npm run check
```

Deploy:

```bash
npm run deploy
```

Configured custom domain: `portfolio.cyberfox.in`.
