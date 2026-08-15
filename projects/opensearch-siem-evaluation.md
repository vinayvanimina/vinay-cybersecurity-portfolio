# OpenSearch SIEM Evaluation

## Status

Past / Evaluation

## Objective

Evaluate OpenSearch as a security-log analytics platform and compare practical Windows log-ingestion approaches before standardizing on a lab SIEM design.

## Technologies Considered

- OpenSearch
- Windows Event Logs
- Fluent Bit / Fluentd-style forwarding
- Wazuh as an alternative security-focused platform

## Evaluation Areas

1. Windows log collection and forwarding reliability.
2. Parsing and indexing security events.
3. Operational complexity of the log pipeline.
4. Search and investigation usability.
5. Comparison with Wazuh for agent-based security monitoring and built-in security capabilities.

## Challenges

The evaluation surfaced reliability and architecture considerations around log forwarding and highlighted the operational overhead of assembling a general-purpose OpenSearch pipeline compared with a security-focused SIEM/XDR stack.

## Outcome

The work provided practical experience with OpenSearch ingestion concepts and informed later Wazuh/SIEM architecture decisions.

## Lessons Learned

- Log delivery reliability is as important as search capability.
- A SIEM design must account for collection, parsing, detection, storage, investigation, and operations—not only indexing.
- Tool selection should reflect the use case and administration overhead.

## Future Improvements

- Revisit OpenSearch with a simplified ingestion pipeline.
- Benchmark the same Windows security dataset across OpenSearch and Wazuh.
- Compare operational overhead and detection capabilities.

## Last Updated

2026-08-15
