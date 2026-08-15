# pfSense Network Security Lab

## Status

Lab

## Objective

Use pfSense as the firewall and routing layer for the cybersecurity home lab to practice network segmentation, traffic control, visibility, and security-policy testing.

## Technologies Used

- pfSense
- Proxmox VE
- Virtual network interfaces / bridges
- Windows and Linux lab systems

## Implementation

1. Deployed pfSense as a virtual firewall in the Proxmox environment.
2. Connected lab workloads through controlled virtual network paths.
3. Used firewall policies and routing to manage lab traffic.
4. Prepared the environment for security testing and log-analysis use cases.

## Security Considerations

- Keep management access restricted.
- Avoid exposing administrative interfaces directly to the Internet.
- Use segmentation to isolate test workloads.
- Review firewall rules after each lab change.

## Outcome

A network-security layer for the home lab that supports controlled connectivity and firewall-focused learning.

## Future Improvements

- Add VLAN segmentation.
- Forward firewall logs into the SIEM.
- Build detection cases around denied, allowed, NAT, and suspicious outbound traffic.

## Last Updated

2026-08-15
