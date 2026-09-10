/* Role-level keyword maps. Terms worth working into answers for that track.
   w runs 1 to 5. 5 is the term you want the panel to hear. */

export const roleKeywords = {
  'enterprise-architect': {
    intro: 'Language that signals you operate above the project level. Lead with business capability, land on trade-offs, and name the governance that made the decision hold.',
    groups: [
      {
        name: 'Business and strategy',
        hint: 'Open here. Every architecture answer should start on this ground.',
        terms: [
          { t: 'Business capability map', w: 5 },
          { t: 'Business outcome', w: 5 },
          { t: 'Value stream', w: 4 },
          { t: 'Strategic alignment', w: 4 },
          { t: 'Time to value', w: 4 },
          { t: 'Target operating model', w: 4 },
          { t: 'Differentiation', w: 3 },
          { t: 'Investment case', w: 3 },
          { t: 'Executive sponsor', w: 3 },
          { t: 'Cost avoidance', w: 3 }
        ]
      },
      {
        name: 'Architecture practice',
        hint: 'The craft vocabulary. Use it precisely and sparingly.',
        terms: [
          { t: 'Baseline and target', w: 5 },
          { t: 'Architecture Decision Record', w: 5 },
          { t: 'Trade-off analysis', w: 5 },
          { t: 'Reference architecture', w: 5 },
          { t: 'TOGAF ADM', w: 4 },
          { t: 'Gap analysis', w: 4 },
          { t: 'Architecture principles', w: 4 },
          { t: 'Non-functional requirements', w: 4 },
          { t: 'Transition architecture', w: 3 },
          { t: 'Architecture repository', w: 3 },
          { t: 'Viewpoint', w: 2 }
        ]
      },
      {
        name: 'Technology and platforms',
        hint: 'Enough depth to prove you still build, without drifting into a tool debate.',
        terms: [
          { t: 'Integration patterns', w: 5 },
          { t: 'Event-driven architecture', w: 4 },
          { t: 'API-first', w: 4 },
          { t: 'Technology radar', w: 4 },
          { t: 'Cloud native', w: 4 },
          { t: 'Identity and access', w: 3 },
          { t: 'Observability', w: 3 },
          { t: 'Zero trust', w: 3 },
          { t: 'Microservices', w: 3 },
          { t: 'Lakehouse', w: 3 },
          { t: 'Containerization', w: 2 }
        ]
      },
      {
        name: 'Governance and risk',
        hint: 'What turns a design into something the organization actually follows.',
        terms: [
          { t: 'Architecture Review Board', w: 5 },
          { t: 'Guardrails not gates', w: 4 },
          { t: 'Risk tiering', w: 4 },
          { t: 'Exception with expiry', w: 4 },
          { t: 'Regulatory alignment', w: 4 },
          { t: 'Compliance assessment', w: 3 },
          { t: 'Policy as code', w: 3 },
          { t: 'Vendor lock-in', w: 3 },
          { t: 'Approved catalog', w: 3 }
        ]
      },
      {
        name: 'Delivery and value',
        hint: 'Close on these. They are what a hiring manager repeats to their own boss.',
        terms: [
          { t: 'Technical debt', w: 5 },
          { t: 'Application rationalization', w: 5 },
          { t: 'Total cost of ownership', w: 5 },
          { t: '6R disposition', w: 4 },
          { t: 'Reuse rate', w: 4 },
          { t: 'Benefit realization', w: 4 },
          { t: 'Portfolio scoring', w: 4 },
          { t: 'Roadmap waves', w: 4 },
          { t: 'Strangler pattern', w: 3 },
          { t: 'TIME model', w: 4 }
        ]
      }
    ]
  },

  'director-ea': {
    intro: 'Leadership language. The panel is testing whether you run a function and move money, so keep the vocabulary on operating model, funding and measurement.',
    groups: [
      {
        name: 'Operating model',
        hint: 'How the function is structured and where decisions sit.',
        terms: [
          { t: 'Federated architecture', w: 5 },
          { t: 'Decision rights', w: 5 },
          { t: 'Domain architect', w: 5 },
          { t: 'Charter and mandate', w: 4 },
          { t: 'Community of practice', w: 4 },
          { t: 'Paved road', w: 4 },
          { t: 'Governance cadence', w: 4 },
          { t: 'Shared services', w: 3 },
          { t: 'Escalation path', w: 3 }
        ]
      },
      {
        name: 'Executive influence',
        hint: 'The phrases that work in a room with a CFO in it.',
        terms: [
          { t: 'Cost of doing nothing', w: 5 },
          { t: 'Staged funding', w: 5 },
          { t: 'Business case', w: 5 },
          { t: 'Options analysis', w: 4 },
          { t: 'Executive sponsor', w: 4 },
          { t: 'Risk appetite', w: 3 },
          { t: 'Board reporting', w: 3 },
          { t: 'Trusted advisor', w: 3 },
          { t: 'Influence without authority', w: 4 }
        ]
      },
      {
        name: 'Portfolio and finance',
        hint: 'Show that you have owned a number, not just advised on one.',
        terms: [
          { t: 'Portfolio prioritization', w: 5 },
          { t: 'P&L accountability', w: 5 },
          { t: 'Weighted scoring', w: 4 },
          { t: 'Run versus change', w: 4 },
          { t: 'Capacity constraint', w: 4 },
          { t: 'Budget oversight', w: 4 },
          { t: 'Funding line', w: 4 },
          { t: 'Multi-year roadmap', w: 4 },
          { t: 'Showback', w: 3 },
          { t: 'Quarterly rebalance', w: 3 }
        ]
      },
      {
        name: 'People and organization',
        hint: 'Director interviews turn on this more than candidates expect.',
        terms: [
          { t: 'Cross-functional leadership', w: 5 },
          { t: 'Career ladder', w: 4 },
          { t: 'Talent strategy', w: 4 },
          { t: 'Change management', w: 4 },
          { t: 'Onshore and offshore', w: 4 },
          { t: 'Mentoring', w: 3 },
          { t: 'Succession', w: 3 },
          { t: 'Hiring bar', w: 3 },
          { t: 'Team of 10 to 15', w: 3 }
        ]
      },
      {
        name: 'Measurement',
        hint: 'Have two or three of these ready with a number attached.',
        terms: [
          { t: 'Cost avoidance', w: 5 },
          { t: 'EA maturity', w: 5 },
          { t: 'Standards adoption', w: 4 },
          { t: 'Reuse rate', w: 4 },
          { t: 'Compliance rate', w: 4 },
          { t: 'Delivery cycle time', w: 4 },
          { t: 'Audit findings closed', w: 4 },
          { t: 'Benefit tracking', w: 4 },
          { t: 'Debt burn-down', w: 3 }
        ]
      }
    ]
  },

  'director-data-management': {
    intro: 'Governance and accountability language. Regulated-industry terms carry weight here, so name the regulation and the control rather than describing them generically.',
    groups: [
      {
        name: 'Governance program',
        hint: 'Accountability first. Names, not committees.',
        terms: [
          { t: 'Data owner', w: 5 },
          { t: 'Data steward', w: 5 },
          { t: 'Business glossary', w: 5 },
          { t: 'Operating model', w: 4 },
          { t: 'Governance council', w: 4 },
          { t: 'DAMA DMBOK', w: 4 },
          { t: 'Policy engine', w: 4 },
          { t: 'Federated governance', w: 4 },
          { t: 'Decision rights', w: 3 },
          { t: 'Domain-first rollout', w: 4 }
        ]
      },
      {
        name: 'Quality and measurement',
        hint: 'Name the dimensions. It separates practitioners from people who read about it.',
        terms: [
          { t: 'Critical data element', w: 5 },
          { t: 'Data quality score', w: 5 },
          { t: 'Completeness', w: 4 },
          { t: 'Accuracy', w: 4 },
          { t: 'Consistency', w: 4 },
          { t: 'Threshold and target', w: 4 },
          { t: 'Root cause analysis', w: 4 },
          { t: 'Timeliness', w: 3 },
          { t: 'Validity', w: 3 },
          { t: 'Uniqueness', w: 3 },
          { t: 'Remediation backlog', w: 3 }
        ]
      },
      {
        name: 'Compliance and privacy',
        hint: 'Say the specific regulation that matches their industry.',
        terms: [
          { t: 'Data classification', w: 5 },
          { t: 'Audit trail', w: 5 },
          { t: 'PII and PHI', w: 5 },
          { t: '21 CFR Part 11', w: 4 },
          { t: 'HIPAA', w: 4 },
          { t: 'AML and BSA', w: 4 },
          { t: 'Retention policy', w: 4 },
          { t: 'Access review', w: 3 },
          { t: 'GDPR and CCPA', w: 3 },
          { t: 'Data residency', w: 3 },
          { t: 'Segregation of duties', w: 2 }
        ]
      },
      {
        name: 'Platform and architecture',
        hint: 'Enough to show you can direct the build, not only the policy.',
        terms: [
          { t: 'Master data management', w: 5 },
          { t: 'Data lineage', w: 5 },
          { t: 'Metadata management', w: 5 },
          { t: 'Data catalog', w: 5 },
          { t: 'Data product', w: 4 },
          { t: 'Data mesh', w: 4 },
          { t: 'Reference data', w: 4 },
          { t: 'Lakehouse', w: 4 },
          { t: 'Self-serve platform', w: 3 },
          { t: 'Embedded controls', w: 4 }
        ]
      },
      {
        name: 'Value and AI readiness',
        hint: 'Where the conversation goes once governance is covered.',
        terms: [
          { t: 'Cost of poor quality', w: 5 },
          { t: 'Governed data access', w: 5 },
          { t: 'AI readiness', w: 5 },
          { t: 'Regulatory exposure', w: 4 },
          { t: 'Time to insight', w: 4 },
          { t: 'Retrieval augmented generation', w: 4 },
          { t: 'Permission propagation', w: 4 },
          { t: 'Benefit tracking', w: 3 },
          { t: 'Model risk', w: 3 }
        ]
      }
    ]
  },

  'enterprise-data-architect': {
    intro: 'The most technical of the tracks. Be precise with modeling terms, name the platform trade-off rather than the brand, and be ready to defend a design on a whiteboard.',
    groups: [
      {
        name: 'Modeling',
        hint: 'Precision matters. Using grain and business key correctly signals depth immediately.',
        terms: [
          { t: 'Canonical data model', w: 5 },
          { t: 'Semantic layer', w: 5 },
          { t: 'Dimensional model', w: 5 },
          { t: 'Data Vault', w: 4 },
          { t: 'Grain', w: 4 },
          { t: 'Business key', w: 4 },
          { t: 'Slowly changing dimension', w: 4 },
          { t: 'Conformed dimension', w: 4 },
          { t: 'Schema evolution', w: 4 },
          { t: 'Third normal form', w: 3 },
          { t: 'Ontology', w: 3 }
        ]
      },
      {
        name: 'Platform and storage',
        hint: 'Talk workload shape before you talk vendor.',
        terms: [
          { t: 'Lakehouse', w: 5 },
          { t: 'Medallion architecture', w: 4 },
          { t: 'Open table format', w: 4 },
          { t: 'Snowflake', w: 4 },
          { t: 'Databricks', w: 4 },
          { t: 'Partitioning and clustering', w: 4 },
          { t: 'Cost attribution', w: 4 },
          { t: 'Workload isolation', w: 3 },
          { t: 'Delta and Iceberg', w: 3 },
          { t: 'Concurrency', w: 2 }
        ]
      },
      {
        name: 'Movement and integration',
        hint: 'The operational vocabulary that shows you have supported a pipeline at 3am.',
        terms: [
          { t: 'Change data capture', w: 5 },
          { t: 'Data contract', w: 5 },
          { t: 'Idempotency', w: 4 },
          { t: 'Reconciliation', w: 4 },
          { t: 'Late arriving data', w: 4 },
          { t: 'Event streaming', w: 4 },
          { t: 'API contract', w: 4 },
          { t: 'Replay', w: 3 },
          { t: 'Micro-batch', w: 3 },
          { t: 'Orchestration', w: 3 }
        ]
      },
      {
        name: 'Metadata and governance',
        hint: 'What makes a platform defensible under audit.',
        terms: [
          { t: 'Column-level lineage', w: 5 },
          { t: 'Data catalog', w: 5 },
          { t: 'Active metadata', w: 4 },
          { t: 'Impact analysis', w: 4 },
          { t: 'Certified dataset', w: 4 },
          { t: 'Audit evidence', w: 4 },
          { t: 'Attribute-based access', w: 4 },
          { t: 'Masking and tokenization', w: 3 },
          { t: 'Data quality rules', w: 4 }
        ]
      },
      {
        name: 'AI and advanced',
        hint: 'Expected in almost every data architecture interview now.',
        terms: [
          { t: 'Knowledge graph', w: 5 },
          { t: 'Chunking strategy', w: 4 },
          { t: 'Vector store', w: 4 },
          { t: 'Hybrid search', w: 4 },
          { t: 'Embeddings', w: 4 },
          { t: 'GraphRAG', w: 4 },
          { t: 'Entity resolution', w: 4 },
          { t: 'Groundedness', w: 4 },
          { t: 'MLOps', w: 3 },
          { t: 'Feature store', w: 3 }
        ]
      }
    ]
  },

  'mdm-architect': {
    intro: 'The most specific vocabulary of the five. Interviewers listen for whether you have tuned a match engine or only read about one, so reach for threshold, survivorship and unmerge language.',
    groups: [
      {
        name: 'Domains and model',
        hint: 'Scope language. Say which domains and which consuming systems.',
        terms: [
          { t: 'Multi-domain MDM', w: 5 },
          { t: 'Cross-reference', w: 5 },
          { t: 'Customer and party', w: 5 },
          { t: 'Reference data', w: 4 },
          { t: 'Hierarchy management', w: 4 },
          { t: 'Effective dating', w: 4 },
          { t: 'Product domain', w: 4 },
          { t: 'Supplier domain', w: 3 },
          { t: 'Master attribute', w: 3 }
        ]
      },
      {
        name: 'Matching and survivorship',
        hint: 'The core of the role. These terms carry the most weight in a screen.',
        terms: [
          { t: 'Match and merge', w: 5 },
          { t: 'Match threshold', w: 5 },
          { t: 'Survivorship rules', w: 5 },
          { t: 'Golden record', w: 5 },
          { t: 'Deterministic matching', w: 5 },
          { t: 'Probabilistic matching', w: 5 },
          { t: 'Source ranking', w: 4 },
          { t: 'Blocking key', w: 4 },
          { t: 'False positive merge', w: 4 },
          { t: 'Unmerge rate', w: 4 },
          { t: 'Trust score', w: 4 },
          { t: 'Precision and recall', w: 4 }
        ]
      },
      {
        name: 'Stewardship',
        hint: 'Shows you have run it in production, not only designed it.',
        terms: [
          { t: 'Steward queue', w: 5 },
          { t: 'Exception workflow', w: 4 },
          { t: 'Reason code', w: 4 },
          { t: 'Rule tuning feedback', w: 4 },
          { t: 'Data owner', w: 4 },
          { t: 'Audit trail', w: 4 },
          { t: 'Service level', w: 3 },
          { t: 'Domain routing', w: 3 }
        ]
      },
      {
        name: 'Integration',
        hint: 'How the golden record reaches the systems that need it.',
        terms: [
          { t: 'System of record', w: 5 },
          { t: 'Duplicate prevention', w: 5 },
          { t: 'Write-back', w: 4 },
          { t: 'Publish and subscribe', w: 4 },
          { t: 'Real-time lookup', w: 4 },
          { t: 'Change data capture', w: 4 },
          { t: 'Reconciliation', w: 4 },
          { t: 'Initial load', w: 3 },
          { t: 'Conflict handling', w: 3 }
        ]
      },
      {
        name: 'Platforms and outcomes',
        hint: 'Name platforms you have run, and close on the duplicate rate.',
        terms: [
          { t: 'Duplicate rate', w: 5 },
          { t: 'Registry and coexistence', w: 5 },
          { t: 'Reltio', w: 4 },
          { t: 'Informatica IDMC', w: 4 },
          { t: 'Profisee', w: 4 },
          { t: 'Match precision', w: 4 },
          { t: 'Adoption by consumers', w: 4 },
          { t: 'Proof of concept', w: 4 },
          { t: 'Time to onboard source', w: 3 }
        ]
      }
    ]
  }
};

export function topTerms(roleId, limit = 12) {
  const set = roleKeywords[roleId];
  if (!set) return [];
  const seen = new Set();
  return set.groups
    .flatMap(g => g.terms)
    .filter(t => t.w === 5 && !seen.has(t.t) && seen.add(t.t))
    .slice(0, limit);
}

export function termCount(roleId) {
  const set = roleKeywords[roleId];
  return set ? set.groups.reduce((n, g) => n + g.terms.length, 0) : 0;
}
