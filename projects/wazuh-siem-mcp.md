# Wazuh SIEM, MCP & SOAR Integration

## Status

Lab / Active — read-only MCP and authenticated SOAR intake validated

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
Shuffle SOAR ----> DFIR-IRIS case management
```

The MCP path is operational and read-only. The authenticated Wazuh-to-Shuffle intake workflow is validated. Automated DFIR-IRIS case creation is the next implementation phase.

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

## Persistence Checkpoint

The following state is saved outside the browser and survives normal logout and reboot:

- Boot-enabled Wazuh MCP and Wazuh services
- Docker Compose configuration and persistent volumes for Shuffle, OpenSearch, and DFIR-IRIS
- Saved Shuffle workflow, authenticated webhook, and hotloaded Shuffle Tools application
- Protected Wazuh-side webhook configuration files
- Host settings required by OpenSearch

The checkpoint and exact resume point are also committed in the private implementation repository. Secrets, private addresses, certificates, raw alerts, and webhook values are intentionally excluded from both repositories.

## Security Considerations

- MCP operations are read-only, bounded, and limited to approved Wazuh endpoints and indexes.
- Dedicated least-privilege accounts are used for the Wazuh API and indexer.
- Credentials, tokens, webhook URIs, certificates, private keys, raw alerts, and internal addresses are never committed.
- Management interfaces remain on private connectivity rather than being directly exposed to the internet.
- Alert content is treated as untrusted input and cannot override workflow or model policy.
- Destructive container-volume operations are excluded from normal maintenance procedures.
- Future response actions will require explicit approval gates.

## Challenges & Troubleshooting

- Resolved API and indexer authorization failures by separating least-privilege roles and validating each interface independently.
- Corrected certificate trust and hostname constraints without disabling TLS verification.
- Recovered endpoint-agent installations while preserving clean enrollment state.
- Fixed Shuffle/OpenSearch startup problems involving host tuning, permissions, and database initialization.
- Replaced a failed self-hosted application activation flow with Shuffle's local hotload mechanism.
- Rebuilt and saved the webhook workflow after detecting stale workflow metadata, then confirmed a clean authenticated execution.

## Outcome

- ChatGPT can retrieve bounded live Wazuh health, agent, alert, rule, and vulnerability information through read-only MCP tools.
- Windows endpoint agents are active and reporting to Wazuh.
- Shuffle and DFIR-IRIS are running as persistent self-hosted services.
- The protected Shuffle intake workflow accepts authenticated test events and processes the complete event object successfully.
- A sanitized Git checkpoint prevents completed infrastructure and workflow setup from being repeated.

## Lessons Learned

- Separate API, indexer, and automation identities make least-privilege validation clearer.
- A successful HTTP response is not enough; workflow execution output must also be inspected.
- Container health, saved application state, and durable volumes should be verified separately.
- Secure automation is easiest to troubleshoot when each boundary is tested independently before the next integration is added.

## Next Phase

1. Implement a bounded Wazuh forwarder for sanitized high-severity lab alerts.
2. Generate one controlled alert and confirm one authenticated Shuffle execution.
3. Map approved fields into DFIR-IRIS and add duplicate-case prevention.
4. Add approval gates before introducing any response action.
5. Record sanitized end-to-end validation evidence.

## Last Updated

2026-08-23
