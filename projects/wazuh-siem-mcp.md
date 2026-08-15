# Wazuh SIEM & MCP Integration

## Status

Lab / Active Learning

## Objective

Deploy Wazuh as a SIEM/XDR platform in the home lab and integrate it with an MCP-based workflow for security visibility, alert inspection, agent status, vulnerability information, and operational queries.

## Technologies Used

- Wazuh Manager
- Wazuh Indexer
- Wazuh Dashboard
- Wazuh API
- OpenSearch components
- Windows and Linux agents
- MCP integration

## Implementation

1. Deployed Wazuh services on Linux.
2. Configured manager, indexer, dashboard, and API connectivity.
3. Onboarded endpoints for security telemetry.
4. Validated manager/API status and authentication.
5. Integrated MCP tooling to query Wazuh operational and security data.
6. Tested alert, agent, vulnerability, monitoring, and threat-analysis use cases.

## Security Considerations

- Keep Wazuh API credentials and bearer tokens out of GitHub.
- Restrict management interfaces to trusted networks or authenticated tunnels.
- Rotate credentials after lab troubleshooting if they may have been exposed.

## Challenges & Troubleshooting

Work included service restarts, API validation, credential resets, package/version checks, and rebuilding parts of the environment when required.

## Outcome

A functioning Wazuh lab capable of ingesting endpoint telemetry and supporting security investigations, vulnerability visibility, and MCP-assisted operational workflows.

## Future Improvements

- Add more custom detection rules.
- Build repeatable attack simulation scenarios.
- Add dashboards for authentication, PowerShell, persistence, and network indicators.
- Document alert-to-response examples.

## Last Updated

2026-08-15
