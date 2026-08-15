# Windows Server 2022 Active Directory Lab

## Status

Lab

## Objective

Build a Windows identity environment for Active Directory administration, endpoint onboarding, authentication-event analysis, privilege investigations, and SOC detection practice.

## Technologies Used

- Windows Server 2022
- Active Directory Domain Services
- DNS
- Windows 11 endpoint
- Windows Event Logs
- Wazuh / SIEM telemetry

## Implementation

1. Deployed Windows Server 2022 in the Proxmox lab.
2. Promoted the server to a domain controller.
3. Configured the domain and DNS services.
4. Joined a Windows 11 endpoint to the domain for authentication and endpoint testing.
5. Used Windows security events for SOC investigation practice.

## Security Use Cases

- Authentication monitoring
- Privileged account activity
- Active Directory object access
- Event ID 4662 analysis
- Suspicious PowerShell and endpoint behavior
- DCSync-oriented detection concepts

## Security Considerations

- Separate lab credentials from real-world accounts.
- Keep domain-controller management interfaces private.
- Enable sufficient Windows auditing before testing detections.

## Outcome

A reusable Windows identity lab supporting SOC investigations, endpoint testing, Active Directory learning, and SIEM log analysis.

## Future Improvements

- Expand advanced auditing and Sysmon coverage.
- Add controlled attack simulations for credential access and lateral movement.
- Build ATT&CK-aligned detections around identity activity.

## Last Updated

2026-08-15
