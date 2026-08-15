# Cloudflare Secure Remote Access

## Status

Active

## Objective

Use Cloudflare services to publish and securely access selected home-lab applications without directly exposing internal management services to the Internet.

## Technologies Used

- Cloudflare DNS
- Cloudflare Tunnel
- Cloudflare Access
- Cloudflare Workers / Pages
- Custom domain: `cyberfox.in`

## Implementation

1. Moved DNS management for the domain to Cloudflare.
2. Deployed Cloudflare Tunnel in the home-lab environment.
3. Published selected services through authenticated Cloudflare access paths.
4. Used Cloudflare for the cybersecurity portfolio deployment and custom hostname.
5. Troubleshot tunnel/container failures and restored secure remote access when needed.

## Security Considerations

- Avoid direct exposure of management ports.
- Protect sensitive applications with authentication and access policies.
- Keep tunnel credentials and tokens out of GitHub.
- Review DNS and hostname mappings before publishing a new service.

## Challenges & Troubleshooting

The project included recovering a Cloudflare Tunnel running inside an LXC container after container startup issues. Service health and tunnel operation were validated after recovery.

## Outcome

A reusable Cloudflare-based access layer for home-lab services and the public portfolio domain.

## Future Improvements

- Document the Zero Trust policy design.
- Add diagrams showing public hostname to internal-service routing.
- Review access logs and security controls as part of the SOC lab.

## Last Updated

2026-08-15
