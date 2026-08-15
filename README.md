# Vinay Cybersecurity Portfolio

A responsive multi-page cybersecurity portfolio for a Senior SOC Analyst / Incident Response profile.

## Portfolio Sections

- Home
- About
- Experience
- Expertise
- Sanitized investigation case studies
- Home lab
- GCIH certification
- Contact

## Project Archive

Hands-on current and past projects are documented under [`projects/`](projects/README.md).

The project archive currently includes:

- Cybersecurity Portfolio Website
- Proxmox SOC Home Lab
- Wazuh SIEM & MCP Integration
- pfSense Network Security Lab
- Windows Server 2022 Active Directory Lab
- Cloudflare Secure Remote Access
- Microsoft Sentinel Log Ingestion Design
- OpenSearch SIEM Evaluation

New projects should use [`projects/TEMPLATE.md`](projects/TEMPLATE.md) so implementation details, troubleshooting, outcomes, and lessons learned stay consistent over time.

## Current Profile Links

- Email: `Vinnuv85@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/vinay-kumar-vanimina-081b18130/`
- GitHub: `https://github.com/vinayvanimina`
- Certification: GIAC Certified Incident Handler (GCIH)

## Still to Add

1. Latest résumé PDF
2. Optional profile photo

## Local Development

Install dependencies and start the Cloudflare local server:

```bash
npm install
npm run dev
```

Then open `http://localhost:8787`.

## Cloudflare Deployment

This project uses Cloudflare Workers Static Assets. Wrangler is the source of truth for deployment configuration.

Validate without deploying:

```bash
npm run check
```

Deploy:

```bash
npm run deploy
```

Configured custom domain: `vinayvaniminaportfolio.cyberfox.in`.

## Documentation Safety

Do not publish customer names, production internal IP addresses, user identities, credentials, access tokens, API keys, private keys, or confidential incident screenshots. All professional incident examples should remain sanitized.
