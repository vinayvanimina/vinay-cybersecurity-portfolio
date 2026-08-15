# Cybersecurity Portfolio Website

## Status

Active

## Objective

Build and publish a professional multi-page cybersecurity portfolio that presents SOC experience, technical expertise, sanitized investigations, certifications, home-lab work, and contact details.

## Architecture

```text
GitHub Repository
      |
Cloudflare Build
      |
Wrangler Static Assets
      |
Cloudflare Worker / Custom Domain
      |
vinayvaniminaportfolio.cyberfox.in
```

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Git / GitHub
- Cloudflare Workers Static Assets
- Wrangler
- Custom Cloudflare DNS domain

## Implementation

1. Built an initial single-page dark cybersecurity portfolio.
2. Added GitHub, LinkedIn, email, GCIH certification, case studies, and home-lab content.
3. Connected the repository to Cloudflare deployment.
4. Added Wrangler configuration and a build step that copies static assets into `dist/`.
5. Changed the custom hostname to `vinayvaniminaportfolio.cyberfox.in`.
6. Redesigned the interface into a premium SOC/incident-response visual style.
7. Converted the long landing page into a multi-page site for About, Experience, Expertise, Investigations, Lab, and Contact.

## Security Considerations

- No production customer data is published.
- Investigation examples are sanitized.
- No API keys, access tokens, private keys, or credentials are stored in the website.
- External links use safe browser attributes where applicable.

## Challenges & Troubleshooting

The Cloudflare build initially reached the deployment stage but failed because Wrangler expected static assets in `./dist` while no build step had created the directory. The project was corrected by adding a Node build script and configuring Cloudflare to run `npm run build` before `npx wrangler deploy`.

## Outcome

A public, responsive cybersecurity portfolio backed by GitHub and Cloudflare with automatic deployment from the `main` branch.

## Lessons Learned

- Static Cloudflare deployments still require the repository structure and Wrangler asset path to match.
- A concise landing page with dedicated technical pages is easier for recruiters and hiring managers to navigate.
- GitHub documentation should evolve alongside the live website.

## Future Improvements

- Add the latest résumé PDF.
- Add an optional professional profile photo.
- Create individual technical pages for major investigation case studies.
- Add sanitized diagrams/screenshots to selected project documentation.

## Last Updated

2026-08-15
