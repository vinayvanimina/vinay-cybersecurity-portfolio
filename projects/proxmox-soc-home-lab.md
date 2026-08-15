# Proxmox SOC Home Lab

## Status

Active

## Objective

Create a reusable cybersecurity lab for SOC monitoring, Windows and Linux testing, network security, SIEM experimentation, detection validation, and incident-response practice.

## Architecture

```text
Internet
   |
Cloudflare / Secure Remote Access
   |
pfSense
   |
Proxmox VE
   |-- Windows Server 2022
   |-- Windows 11
   |-- Wazuh
   |-- Linux / LXC services
```

## Technologies Used

- Proxmox VE
- Windows Server 2022
- Windows 11
- Linux / Ubuntu
- LXC containers
- Wazuh
- pfSense
- Cloudflare Tunnel

## Implementation

1. Deployed Proxmox as the virtualization platform.
2. Built Windows Server and Windows endpoint workloads for identity and endpoint testing.
3. Added Linux and LXC workloads for security tooling and supporting services.
4. Integrated Wazuh for SIEM/XDR-style telemetry and alerting.
5. Added pfSense for firewalling and controlled network testing.
6. Used Cloudflare-based remote access for selected services.

## Security Considerations

- Separate lab workloads from production systems.
- Limit unnecessary Internet exposure.
- Use authenticated remote access instead of directly exposing management ports.
- Keep snapshots/backups before high-risk testing.

## Challenges & Troubleshooting

The lab has included storage recovery, container start failures, networking changes, service recovery, and remote-access troubleshooting. These issues are documented as part of the learning process because they reflect real infrastructure operations.

## Outcome

A persistent multi-system lab used for practical SOC, SIEM, endpoint, identity, firewall, and remote-access experimentation.

## Future Improvements

- Add additional VLAN segmentation.
- Expand Windows endpoint attack simulations.
- Add more detection engineering content and dashboards.
- Document attack-to-detection workflows with sanitized screenshots.

## Last Updated

2026-08-15
