export default [
  {
    id: 'ddm-standup-governance',
    role: 'director-data-management',
    theme: 'Governance',
    q: 'How do you stand up a data governance program?',
    variants: [
      'We have no governance today. Where do you start?',
      'What does your governance operating model look like?'
    ],
    answer: 'Start with one domain that has a business problem worth fixing. Name the owner, set the definitions, measure quality, and show the improvement before you take governance anywhere else.',
    tags: ['governance', 'dama', 'operating model', 'stewardship', 'program'],
    framework: {
      name: 'Governance Operating Model',
      source: 'DAMA DMBOK plus domain-first rollout',
      type: 'flow',
      nodes: [
        { label: 'Pick one domain', detail: 'Customer, product or finance. Somewhere the pain is already named.' },
        { label: 'Name accountability', detail: 'Data owner in the business, steward who does the work. Not a committee.' },
        { label: 'Define and publish', detail: 'Business glossary for the terms that get argued about.' },
        { label: 'Measure quality', detail: 'Six dimensions, a baseline number, a target and a trend.' },
        { label: 'Policy and controls', detail: 'Classification, access, retention. Written to be enforceable.' },
        { label: 'Prove it, then extend', detail: 'Show the improvement. Use it to open the next domain.' }
      ]
    },
    keywords: [
      { t: 'Data owner', w: 5 },
      { t: 'Data steward', w: 5 },
      { t: 'Business glossary', w: 5 },
      { t: 'Data quality dimensions', w: 4 },
      { t: 'Domain-first rollout', w: 4 },
      { t: 'Policy and standards', w: 4 },
      { t: 'DAMA DMBOK', w: 3 },
      { t: 'Data classification', w: 3 },
      { t: 'Governance council', w: 3 },
      { t: 'Metadata management', w: 3 },
      { t: 'Operating model', w: 3 },
      { t: 'Maturity assessment', w: 2 }
    ],
    phrases: [
      'Governance starts with one domain and one owner, not an enterprise policy.',
      'A committee is not accountability. A name is.',
      'The glossary only needs the terms people argue about.',
      'Show the quality trend before you ask for the next domain.'
    ],
    example: {
      org: 'KPMG, Fortune 500 client',
      headline: 'Enterprise data governance program built around a policy engine and stewardship model',
      detail: 'I architected the program covering the policy engine, stewardship operating model, data quality KPIs and metadata taxonomy. Naming owners per domain was what turned the policy from a document into a practice.',
      metric: 'Clients passed regulatory audits and cut compliance remediation costs by about 30 percent.'
    }
  },
  {
    id: 'ddm-governance-sticks',
    role: 'director-data-management',
    theme: 'Governance',
    q: 'How do you make data governance stick?',
    variants: [
      'Governance programs stall here. Why do you think that happens?',
      'How do you get people to follow governance when they are busy?'
    ],
    answer: 'Put the control where the work already happens. Embed rules in pipelines and applications, give stewards tooling instead of spreadsheets, and report quality to the executive who owns the outcome.',
    tags: ['governance', 'adoption', 'change management', 'automation'],
    framework: {
      name: 'Governance That Holds',
      source: 'Adoption practice, embedded controls',
      type: 'pillars',
      base: 'Governance that requires extra effort will be dropped the first busy quarter',
      nodes: [
        { label: 'Embedded controls', detail: 'Quality rules run in the pipeline. Bad data stops at the door, not at a report.' },
        { label: 'Steward tooling', detail: 'Workflow, not spreadsheets. Stewards see their queue and clear it.' },
        { label: 'Visible reporting', detail: 'Quality trend on the same dashboard as business KPIs.' },
        { label: 'Executive ownership', detail: 'A business leader owns the domain score, not the data team.' }
      ]
    },
    keywords: [
      { t: 'Embedded controls', w: 5 },
      { t: 'Data quality scorecard', w: 5 },
      { t: 'Business ownership', w: 5 },
      { t: 'Steward workflow', w: 4 },
      { t: 'Automation', w: 4 },
      { t: 'Change management', w: 4 },
      { t: 'Incentives', w: 3 },
      { t: 'Exception handling', w: 3 },
      { t: 'Training and enablement', w: 3 },
      { t: 'Cultural adoption', w: 2 }
    ],
    phrases: [
      'Put the rule where the data moves, not in a policy binder.',
      'If a steward works in a spreadsheet, the program is already fading.',
      'The business leader owns the score. My team owns the tooling.',
      'Governance that costs extra effort gets dropped in a busy quarter.'
    ],
    example: {
      org: 'Bank of America, AML program',
      headline: 'Cleansing rules automated inside the transaction pipeline',
      detail: 'Rather than reporting quality issues after the fact, the cleansing ran as part of ingestion for the AML transaction hub. Analysts saw fewer false positives instead of a longer issue list.',
      metric: 'False positive rates in transaction monitoring fell about 25 percent.'
    }
  },
  {
    id: 'ddm-dq-metrics',
    role: 'director-data-management',
    theme: 'Data Quality',
    q: 'How do you measure data quality and report it to executives?',
    variants: [
      'What data quality KPIs do you track?',
      'How do you show data quality improvement over time?'
    ],
    answer: 'Score the six dimensions per critical data element, roll them into one domain score, and report the trend against a target with the business impact attached. Executives need one number and the story behind it.',
    tags: ['data quality', 'kpi', 'metrics', 'reporting', 'dama'],
    framework: {
      name: 'Six Data Quality Dimensions',
      source: 'DAMA DMBOK data quality dimensions',
      type: 'radial',
      hub: 'Critical Data Element score, rolled up per domain',
      nodes: [
        { label: 'Completeness', detail: 'Are required values present where the business needs them.' },
        { label: 'Accuracy', detail: 'Does the value match the source of truth or the real world.' },
        { label: 'Consistency', detail: 'Does the same entity agree across systems.' },
        { label: 'Timeliness', detail: 'Is it current enough for the decision it supports.' },
        { label: 'Validity', detail: 'Does it conform to format, range and reference data.' },
        { label: 'Uniqueness', detail: 'One record per real entity. No hidden duplicates.' }
      ]
    },
    keywords: [
      { t: 'Critical data element', w: 5 },
      { t: 'Data quality score', w: 5 },
      { t: 'Completeness', w: 4 },
      { t: 'Accuracy', w: 4 },
      { t: 'Consistency', w: 4 },
      { t: 'Timeliness', w: 3 },
      { t: 'Validity', w: 3 },
      { t: 'Uniqueness', w: 3 },
      { t: 'Threshold and target', w: 4 },
      { t: 'Trend reporting', w: 3 },
      { t: 'Business impact', w: 4 },
      { t: 'Root cause analysis', w: 3 }
    ],
    phrases: [
      'Measure critical data elements, not every column you own.',
      'One score per domain, with the trend and the target.',
      'Attach the business cost to the gap or nobody funds the fix.',
      'A rule that never fails is not measuring anything.'
    ],
    example: {
      org: 'KPMG, Fortune 500 client',
      headline: 'Data quality KPIs built into the governance program',
      detail: 'The scorecard covered critical data elements per domain with thresholds agreed by the business owner. Reporting the trend next to business KPIs is what kept remediation funded.',
      metric: 'Data error rates fell 35 percent. Business user time to insight moved from 3 weeks to 2 days.'
    }
  },
  {
    id: 'ddm-domain-priority',
    role: 'director-data-management',
    theme: 'Program',
    q: 'How do you decide which data domains to govern first?',
    variants: [
      'Where do you start when everything needs governance?',
      'How do you sequence a data management roadmap?'
    ],
    answer: 'Rank domains by business impact against effort to fix. Start where a regulatory obligation or a named business pain gives you a sponsor who will stay engaged.',
    tags: ['prioritization', 'domains', 'roadmap', 'program'],
    framework: {
      name: 'Domain Prioritization Matrix',
      source: 'Consulting impact and effort scoring',
      type: 'quadrant',
      axes: { x: ['Low business impact', 'High business impact'], y: ['High effort', 'Low effort'] },
      nodes: [
        { label: 'Fill-in work', detail: 'Easy but low value. Do it when capacity allows.', pos: 'tl' },
        { label: 'Start here', detail: 'High impact, low effort. Customer or product usually sits here.', pos: 'tr' },
        { label: 'Leave for now', detail: 'Hard and low value. Log it and move on.', pos: 'bl' },
        { label: 'Plan as a program', detail: 'High impact, high effort. Regulatory domains, multi-system data.', pos: 'br' }
      ]
    },
    keywords: [
      { t: 'Business impact', w: 5 },
      { t: 'Regulatory driver', w: 5 },
      { t: 'Effort estimate', w: 4 },
      { t: 'Engaged sponsor', w: 4 },
      { t: 'Critical data element', w: 4 },
      { t: 'Domain ownership', w: 4 },
      { t: 'Quick win', w: 3 },
      { t: 'Dependency', w: 3 },
      { t: 'Data lineage complexity', w: 2 }
    ],
    phrases: [
      'Start where a regulator or a business leader is already asking.',
      'A sponsor who stays engaged is worth more than an easy domain.',
      'Customer and product usually give you the fastest visible win.',
      'High effort and high impact is a program, not a first move.'
    ],
    example: {
      org: 'Parexel International',
      headline: 'Clinical operations domains sequenced by audit exposure',
      detail: 'Multi-study clinical data carried the regulatory obligation, so it went first and secured a sponsor with a real deadline. Commercial domains followed once the pattern was proven.',
      metric: 'Audit-ready data lineage across multi-study portfolios. Reconciliation effort down about 40 percent.'
    }
  },
  {
    id: 'ddm-business-case',
    role: 'director-data-management',
    theme: 'Value',
    q: 'How do you build the business case for data management?',
    variants: [
      'Leadership sees data governance as a cost. What do you say?',
      'How do you prove ROI on data quality work?'
    ],
    answer: 'Convert data problems into money the business already tracks. Rework hours, failed audits, lost revenue from bad contact data, analyst time spent reconciling. Size those, then price the fix against them.',
    tags: ['business case', 'roi', 'value', 'funding'],
    framework: {
      name: 'Data Value Case',
      source: 'Benefit quantification, four buckets',
      type: 'pillars',
      base: 'Every number sourced from finance, audit or delivery data',
      nodes: [
        { label: 'Cost of poor quality', detail: 'Rework hours, manual reconciliation, duplicate mailings, credit losses.' },
        { label: 'Regulatory exposure', detail: 'Findings, remediation cost, and the cost of a delayed submission.' },
        { label: 'Speed to decision', detail: 'Analyst hours spent finding and trusting data before they can use it.' },
        { label: 'Revenue enabled', detail: 'Campaigns, cross-sell and AI use cases that need trusted data to run.' }
      ]
    },
    keywords: [
      { t: 'Cost of poor quality', w: 5 },
      { t: 'Regulatory exposure', w: 5 },
      { t: 'Rework cost', w: 4 },
      { t: 'Time to insight', w: 4 },
      { t: 'Remediation cost', w: 4 },
      { t: 'Revenue enablement', w: 3 },
      { t: 'Audit findings', w: 3 },
      { t: 'Staged funding', w: 3 },
      { t: 'Benefit tracking', w: 3 },
      { t: 'Payback period', w: 2 }
    ],
    phrases: [
      'Data problems become fundable when they are stated in hours and dollars.',
      'A failed audit is the clearest business case in the room.',
      'Count the analyst hours spent proving the number is right.',
      'Price the fix against the cost of leaving it alone.'
    ],
    example: {
      org: 'KPMG, Fortune 500 client',
      headline: 'Compliance remediation cost as the anchor',
      detail: 'The governance case was built on audit exposure and remediation spend the client already tracked. That framing moved the conversation out of the data team and into the risk committee.',
      metric: 'Compliance remediation costs reduced by about 30 percent.'
    }
  },
  {
    id: 'ddm-audit',
    role: 'director-data-management',
    theme: 'Compliance',
    q: 'How do you prepare for a regulatory audit?',
    variants: [
      'How do you handle FDA 21 CFR Part 11, HIPAA or AML requirements?',
      'What does audit-ready data look like?'
    ],
    answer: 'Audit readiness is lineage plus evidence. Show where the data came from, who changed it, under what control, and produce that trail on demand rather than assembling it when the letter arrives.',
    tags: ['compliance', 'audit', 'regulatory', 'lineage', 'hipaa', 'fda', 'aml'],
    framework: {
      name: 'Audit Readiness Chain',
      source: 'Regulated industry control practice',
      type: 'flow',
      nodes: [
        { label: 'Scope and obligation', detail: 'Which regulation touches which data. Map it explicitly.' },
        { label: 'Controls documented', detail: 'Access, change, retention, validation. Written and testable.' },
        { label: 'Lineage end to end', detail: 'Source to report, automated, not drawn by hand in a slide.' },
        { label: 'Evidence on demand', detail: 'Audit log, approvals, exception records, retrievable in minutes.' },
        { label: 'Self-assessment', detail: 'Test your own controls before the regulator does.' },
        { label: 'Finding closure', detail: 'Owner, date, verification. Tracked in one place.' }
      ]
    },
    keywords: [
      { t: 'Data lineage', w: 5 },
      { t: 'Audit trail', w: 5 },
      { t: 'Control evidence', w: 5 },
      { t: '21 CFR Part 11', w: 4 },
      { t: 'HIPAA', w: 4 },
      { t: 'AML and BSA', w: 4 },
      { t: 'Access control', w: 4 },
      { t: 'Retention policy', w: 3 },
      { t: 'Validation', w: 3 },
      { t: 'Self-assessment', w: 3 },
      { t: 'Finding remediation', w: 3 },
      { t: 'Segregation of duties', w: 2 }
    ],
    phrases: [
      'Audit readiness is a standing state, not a project you start when the letter arrives.',
      'Automated lineage or it will not hold up under questioning.',
      'Test your own controls first. Findings you raise cost less than findings they raise.',
      'Every finding gets an owner and a date the day it lands.'
    ],
    example: {
      org: 'Parexel International',
      headline: 'Audit-ready lineage across global clinical operations',
      detail: 'The governance, MDM and quality roadmap was designed so lineage was produced by the platform rather than assembled for each audit. That is what made multi-study portfolios defensible.',
      metric: 'Downstream reconciliation effort fell about 40 percent alongside the audit readiness gain.'
    }
  },
  {
    id: 'ddm-stewardship',
    role: 'director-data-management',
    theme: 'Operating Model',
    q: 'How do you structure a data stewardship operating model?',
    variants: [
      'Who owns data in your model?',
      'How do stewards work day to day?'
    ],
    answer: 'Three layers. A council that sets policy, business data owners accountable per domain, and stewards who do the daily work with tooling and a defined queue. Every role has a named person and a time allocation.',
    tags: ['stewardship', 'operating model', 'roles', 'governance'],
    framework: {
      name: 'Three-Layer Stewardship Model',
      source: 'DAMA governance roles, applied',
      type: 'pyramid',
      nodes: [
        { label: 'Data Governance Council', detail: 'Cross-functional. Sets policy, resolves disputes, approves standards.' },
        { label: 'Business Data Owners', detail: 'Accountable per domain. Approve definitions, sign off quality targets.' },
        { label: 'Data Stewards', detail: 'Daily work. Definitions, quality issues, exception queue, match review.' },
        { label: 'Technical Stewards', detail: 'Implement rules, maintain lineage and catalog, support the platform.' }
      ]
    },
    keywords: [
      { t: 'Data owner', w: 5 },
      { t: 'Data steward', w: 5 },
      { t: 'Governance council', w: 4 },
      { t: 'RACI', w: 4 },
      { t: 'Technical steward', w: 4 },
      { t: 'Time allocation', w: 4 },
      { t: 'Escalation path', w: 3 },
      { t: 'Decision rights', w: 3 },
      { t: 'Issue queue', w: 3 },
      { t: 'Federated stewardship', w: 3 }
    ],
    phrases: [
      'Stewardship without allocated time is a job title, not a role.',
      'The owner signs the definition. The steward keeps it true.',
      'The council exists to break ties, not to approve routine work.',
      'Name people, not departments.'
    ],
    example: {
      org: 'KPMG, Fortune 500 client',
      headline: 'Stewardship operating model inside the governance program',
      detail: 'The model paired business owners per domain with stewards working an issue queue in the platform. Defining the time allocation upfront was the difference between adoption and drift.',
      metric: 'Program supported regulatory audit success and about 30 percent lower remediation cost.'
    }
  },
  {
    id: 'ddm-privacy-risk',
    role: 'director-data-management',
    theme: 'Compliance',
    q: 'How do you manage data risk and privacy?',
    variants: [
      'How do you handle sensitive data across a large estate?',
      'What is your approach to data classification and access?'
    ],
    answer: 'Classify first, then let the classification drive everything else. Access, masking, retention and residency all follow from the label, applied by policy rather than by ticket.',
    tags: ['privacy', 'risk', 'classification', 'security', 'compliance'],
    framework: {
      name: 'Classification-Driven Controls',
      source: 'Privacy by design plus data protection practice',
      type: 'flow',
      nodes: [
        { label: 'Discover and classify', detail: 'Automated scanning plus steward confirmation. PII, PHI, financial, confidential.' },
        { label: 'Policy per class', detail: 'Who can see it, in what form, for how long, in which region.' },
        { label: 'Enforce by attribute', detail: 'Role and tag-based access. Masking and tokenization at the platform layer.' },
        { label: 'Minimize', detail: 'Collect less, keep less, copy less. Fewer copies means less exposure.' },
        { label: 'Monitor', detail: 'Access anomalies, unexpected exports, stale permissions.' },
        { label: 'Respond', detail: 'Subject requests, breach process, retention enforcement. Rehearsed.' }
      ]
    },
    keywords: [
      { t: 'Data classification', w: 5 },
      { t: 'PII and PHI', w: 5 },
      { t: 'Attribute-based access', w: 4 },
      { t: 'Masking and tokenization', w: 4 },
      { t: 'Data minimization', w: 4 },
      { t: 'Retention policy', w: 4 },
      { t: 'Residency', w: 3 },
      { t: 'Consent management', w: 3 },
      { t: 'Access review', w: 3 },
      { t: 'Breach response', w: 3 },
      { t: 'Privacy by design', w: 3 }
    ],
    phrases: [
      'The label drives the control. Everything else follows from it.',
      'Every extra copy of sensitive data is another thing to defend.',
      'Tag-based access scales. Ticket-based access does not.',
      'Rehearse the subject request process before you need it.'
    ],
    example: {
      org: 'R2 Data Vision',
      headline: 'Classification frameworks delivered as part of governance blueprints',
      detail: 'The blueprints paired classification with catalog configuration so controls attached to the label rather than to individual tables. Clients had a structured path to regulatory-ready data assets.',
      metric: 'Gave clients a repeatable route to trustworthy, audit-ready data.'
    }
  },
  {
    id: 'ddm-mesh-vs-central',
    role: 'director-data-management',
    theme: 'Strategy',
    q: 'Data mesh or a central data team. Which do you prefer?',
    variants: [
      'What is your view on data mesh?',
      'Should data ownership sit with domains or with a central group?'
    ],
    answer: 'Federate ownership, centralize the platform and the standards. Domains own their data products because they know the meaning. The central team owns the paved road so every domain is not solving the same problem.',
    tags: ['data mesh', 'strategy', 'operating model', 'data products', 'fabric'],
    framework: {
      name: 'Federated Ownership on a Central Platform',
      source: 'Data mesh principles balanced with platform economics',
      type: 'layers',
      nodes: [
        { label: 'Domain data products', detail: 'Owned by the business domain. Documented, versioned, with an SLA.' },
        { label: 'Federated governance', detail: 'Shared standards, local decisions. Global rules only where they must be global.' },
        { label: 'Self-serve platform', detail: 'Central. Ingestion, storage, compute, catalog, quality, access.' },
        { label: 'Interoperability', detail: 'Canonical identifiers and shared reference data so products join cleanly.' },
        { label: 'Observability', detail: 'Lineage, freshness, quality and cost visible per product.' }
      ]
    },
    keywords: [
      { t: 'Data product', w: 5 },
      { t: 'Federated governance', w: 5 },
      { t: 'Self-serve platform', w: 5 },
      { t: 'Domain ownership', w: 4 },
      { t: 'Interoperability', w: 4 },
      { t: 'Data fabric', w: 3 },
      { t: 'Shared reference data', w: 3 },
      { t: 'Product SLA', w: 3 },
      { t: 'Platform economics', w: 3 },
      { t: 'Duplication risk', w: 2 }
    ],
    phrases: [
      'Domains own meaning. The platform team owns plumbing.',
      'Mesh without a central platform is just silos with a new name.',
      'Global rules only where they have to be global.',
      'A data product without an owner and an SLA is a dataset.'
    ],
    example: {
      org: 'R2 Data Vision',
      headline: 'Lakehouse and ODS consolidating siloed sources on AWS and Azure',
      detail: 'The pattern was one platform with domain-aligned data products on top. Consolidating the plumbing while leaving meaning with the domains is what shortened the path from question to answer.',
      metric: 'Client time to insight moved from weeks to days.'
    }
  },
  {
    id: 'ddm-ai-ready',
    role: 'director-data-management',
    theme: 'AI',
    q: 'How do you make an organization AI-ready from a data standpoint?',
    variants: [
      'What has to be true about our data before we deploy GenAI?',
      'How does governance change when AI enters the picture?'
    ],
    answer: 'AI raises the cost of bad data and bad access control. Get definitions, quality, lineage and permissions right on the domains the AI will touch, then extend governance to prompts, retrieval and model output.',
    tags: ['ai', 'genai', 'readiness', 'governance', 'llm', 'rag'],
    framework: {
      name: 'AI Data Readiness',
      source: 'Data governance extended to AI workloads',
      type: 'flow',
      nodes: [
        { label: 'Use case first', detail: 'Pick the AI use case. Readiness is scoped to what it touches.' },
        { label: 'Trusted foundation', detail: 'Mastered entities, quality thresholds, current definitions.' },
        { label: 'Content readiness', detail: 'Documents cleared, deduplicated, chunked, tagged with source and date.' },
        { label: 'Permission model', detail: 'Access carried into the index so the model cannot leak across roles.' },
        { label: 'AI governance', detail: 'Approved use, prompt logging, groundedness checks, human review points.' },
        { label: 'Monitor and correct', detail: 'Track answer quality and drift. Feed errors back into the data, not the prompt.' }
      ]
    },
    keywords: [
      { t: 'Governed data access', w: 5 },
      { t: 'Permission propagation', w: 5 },
      { t: 'Retrieval augmented generation', w: 5 },
      { t: 'Content readiness', w: 4 },
      { t: 'Master data foundation', w: 4 },
      { t: 'AI governance', w: 4 },
      { t: 'Groundedness', w: 4 },
      { t: 'Prompt logging', w: 3 },
      { t: 'Model drift', w: 3 },
      { t: 'Human in the loop', w: 3 },
      { t: 'Auditability', w: 3 }
    ],
    phrases: [
      'AI does not fix bad data. It publishes it faster.',
      'Scope readiness to the use case. Boiling the whole estate first never ships.',
      'Permissions have to follow the user into the index.',
      'When the answer is wrong, fix the data before you rewrite the prompt.'
    ],
    example: {
      org: 'Parexel International',
      headline: 'Knowledge LLM pipeline over clinical metadata and protocol documents',
      detail: 'The pipeline joined structured clinical metadata with unstructured protocol documents through RAG. Governed and auditable access was designed in from the start, which is what let operational teams query trial intelligence in natural language.',
      metric: 'Analyst research time down about 60 percent with governed, auditable access.'
    }
  }
];
