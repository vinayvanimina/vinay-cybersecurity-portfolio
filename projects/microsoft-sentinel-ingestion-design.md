# Microsoft Sentinel Log Ingestion Design

## Status

Design / Lab

## Objective

Design a practical Microsoft Sentinel ingestion architecture for Windows, Linux, network devices, firewalls, proxies, and other security data sources while balancing visibility, reliability, cost, and operational complexity.

## Technologies Considered

- Microsoft Sentinel
- Azure Monitor Agent (AMA)
- Windows Event Logs
- Syslog / CEF
- Linux collectors / forwarders
- Firewalls, proxies, and load balancers
- Cribl as an optional routing / filtering layer

## Design Approach

1. Use AMA for supported Windows-server telemetry.
2. Use Syslog/CEF collection paths for Linux and network-security devices.
3. Evaluate whether forwarders or Cribl are justified for high availability, routing, filtering, and cost control.
4. Avoid unnecessary architectural complexity where native connectors are sufficient.
5. Align collection scope to detection and investigation requirements rather than ingesting everything by default.

## Security & Operational Considerations

- Ensure log-source coverage supports incident-response use cases.
- Minimize unnecessary ingestion cost.
- Plan high availability for critical forwarding paths.
- Validate timestamp, parsing, source identity, and event completeness.
- Document filtering decisions so visibility gaps are intentional and understood.

## Outcome

A reference design for discussing Sentinel ingestion trade-offs in SOC architecture and interview scenarios.

## Future Improvements

- Build a test Sentinel workspace.
- Validate Windows AMA ingestion.
- Add a Linux/CEF collector path.
- Compare native collection against Cribl-assisted routing with sample volumes.

## Last Updated

2026-08-15
