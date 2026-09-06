# Wazuh SIEM, MCP & SOAR Integration

## Status

Lab / Active — read-only MCP and sanitized Wazuh-to-Shuffle-to-IRIS alert automation validated

## Objective

Build a reproducible SOC home-lab workflow where an analyst can query Wazuh through a read-only MCP interface and safely route selected alerts into a self-hosted SOAR and case-management stack.

## Problem / Use Case

Security analysts often need to move between SIEM dashboards, endpoint inventories, vulnerability views, and case-management tools. This project explores how those activities can be connected without giving an AI assistant unrestricted administrative access or exposing SIEM credentials and internal telemetry.

## Architecture

```text
Analyst / ChatGPT
       |
Authenticated private connection
       |
Read-only MCP service
       |
Wazuh Manager API + Indexer
       |
Sanitized high-severity alert intake
       |
Shuffle SOAR
       |
Private relay with certificate-verified IRIS delivery
       |
DFIR-IRIS alert intake and analyst-led case management
```

The MCP path is operational and read-only. A bounded level-12 Wazuh forwarder delivers sanitized alerts to the authenticated Shuffle intake using strict TLS verification. Shuffle passes the approved event schema to a private relay, which creates an IRIS alert through certificate-verified HTTPS. Analysts decide whether an alert should become a case.

## Technologies Used

- Proxmox VE and Ubuntu Server
- Wazuh Manager, Indexer, Dashboard, and API
- Windows 11 and Windows Server endpoint agents
- TypeScript and Model Context Protocol
- Tailscale/private remote connectivity
- Docker and Docker Compose
- Shuffle SOAR with OpenSearch
- DFIR-IRIS case management
- Git and GitHub

## Implementation

1. Deployed the Wazuh all-in-one lab and validated the manager, indexer, dashboard, and API services.
2. Replaced and re-enrolled Windows endpoint agents, then confirmed active telemetry connections.
3. Built six bounded MCP tools for health, manager status, agents, rules, alerts, and vulnerabilities.
4. Enforced read-only API/index permissions, request limits, TLS validation, and a loopback-only MCP listener.
5. Connected the MCP service to ChatGPT through a private authenticated path and validated live tool discovery and health queries.
6. Deployed DFIR-IRIS and Shuffle as separate persistent container stacks on the SOAR lab server.
7. Installed Shuffle Tools through the supported self-hosted hotload mechanism.
8. Created an authenticated webhook workflow and validated a fresh end-to-end test using `Webhook -> Repeat back to me` with the received event object.
9. Stored webhook configuration outside Git in protected files with restricted ownership and permissions.
10. Deployed a custom level-12 Wazuh integration that forwards only an approved, bounded field allowlist and excludes raw events, addresses, usernames, file paths, and command lines.
11. Replaced the container-bundled HTTPS identity with persistent SAN-enabled TLS material and pinned the administratively verified public certificate on the Wazuh host.
12. Validated a synthetic sanitized delivery with HTTP 200, activated the integration once in Wazuh, and confirmed the integration daemon remained running after restart.
13. Generated one controlled level-12 alert through the real Wazuh manager pipeline and confirmed exactly one finished Shuffle execution containing only the approved ten-field schema.
14. Recovered the DFIR-IRIS reverse-proxy network attachment and confirmed the persistent application stack was healthy.
15. Deployed a private Shuffle-to-IRIS relay with a file-mounted API key, trusted IRIS certificate, restart behavior, and no public port exposure.
16. Replaced the workflow test action with a saved HTTP POST action that forwards the sanitized Shuffle execution argument to the relay.
17. Validated the complete Wazuh-to-Shuffle-to-IRIS path with a controlled alert and confirmed an IRIS alert was created successfully.

## Persistence Checkpoint

The following state is saved outside the browser and survives normal logout and reboot:

- Boot-enabled Wazuh MCP and Wazuh services
- Docker Compose configuration and persistent volumes for Shuffle, OpenSearch, and DFIR-IRIS
- Saved Shuffle workflow, authenticated webhook, and hotloaded Shuffle Tools application
- Persistent Shuffle TLS mounts and protected Wazuh-side webhook trust files
- Installed Wazuh custom forwarder and validated integration configuration
- Persistent private Shuffle-to-IRIS relay with protected API-key storage and certificate verification
- Host settings required by OpenSearch

The checkpoint and exact resume point are also committed in the private implementation repository. Secrets, private addresses, certificates, raw alerts, and webhook values are intentionally excluded from both repositories.

## Security Considerations

- MCP operations are read-only, bounded, and limited to approved Wazuh endpoints and indexes.
- Dedicated least-privilege accounts are used for the Wazuh API and indexer.
- Credentials, tokens, webhook URIs, certificates, private keys, raw alerts, and internal addresses are never committed.
- Management interfaces remain on private connectivity rather than being directly exposed to the internet.
- Alert content is treated as untrusted input and cannot override workflow or model policy.
- The forwarder independently enforces the severity threshold, fixed schema, payload cap, TLS validation, and redirect rejection.
- The forwarder contains no active-response or endpoint-control capability.
- Destructive container-volume operations are excluded from normal maintenance procedures.
- Future response actions will require explicit approval gates.

## Challenges & Troubleshooting

- Resolved API and indexer authorization failures by separating least-privilege roles and validating each interface independently.
- Corrected certificate trust and hostname constraints without disabling TLS verification.
- Recovered endpoint-agent installations while preserving clean enrollment state.
- Fixed Shuffle/OpenSearch startup problems involving host tuning, permissions, and database initialization.
- Replaced a failed self-hosted application activation flow with Shuffle's local hotload mechanism.
- Rebuilt and saved the webhook workflow after detecting stale workflow metadata, then confirmed a clean authenticated execution.
- Replaced a certificate without endpoint identity extensions with a persistent SAN-enabled certificate and strict trust pinning.

## Outcome

- ChatGPT can retrieve bounded live Wazuh health, agent, alert, rule, and vulnerability information through read-only MCP tools.
- Windows endpoint agents are active and reporting to Wazuh.
- Shuffle and DFIR-IRIS are running as persistent self-hosted services.
- The protected Shuffle intake workflow accepts authenticated test events and processes the complete event object successfully.
- The active Wazuh integration can deliver a bounded synthetic level-12 event through the protected Shuffle webhook with verified TLS.
- The complete manager-to-Shuffle path was validated through log collection, rule analysis, the integration daemon, sanitization, authenticated delivery, and successful workflow execution.
- The complete manager-to-Shuffle-to-IRIS alert path was validated without exposing the IRIS API key to the workflow or creating cases automatically.
- A sanitized Git checkpoint prevents completed infrastructure and workflow setup from being repeated.

## Lessons Learned

- Separate API, indexer, and automation identities make least-privilege validation clearer.
- A successful HTTP response is not enough; workflow execution output must also be inspected.
- Container health, saved application state, and durable volumes should be verified separately.
- Secure automation is easiest to troubleshoot when each boundary is tested independently before the next integration is added.

## Next Phase

1. Add duplicate suppression using the sanitized alert reference.
2. Add analyst approval before promoting an IRIS alert to a case.
3. Add approval gates before introducing any response action.
4. Continue recording only sanitized validation evidence.

## Last Updated

2026-09-06
