export default [
  {
    id: 'mdm-end-to-end',
    role: 'mdm-architect',
    theme: 'Solution Design',
    q: 'How do you design an MDM solution end to end?',
    variants: [
      'Walk me through an MDM implementation.',
      'What are the main components of a master data platform?'
    ],
    answer: 'Six moving parts: domain scope, data model, matching, survivorship, stewardship and syndication. Get the domain and the consuming use case fixed first, because everything downstream is shaped by them.',
    tags: ['mdm', 'architecture', 'design', 'golden record', 'implementation'],
    framework: {
      name: 'MDM Solution Blueprint',
      source: 'MDM reference architecture',
      type: 'flow',
      nodes: [
        { label: 'Domain and use case', detail: 'Customer, product, supplier, site. Name who consumes the golden record and why.' },
        { label: 'Model and sources', detail: 'Master attributes, cross-reference keys, source ranking, source of truth per attribute.' },
        { label: 'Standardize and cleanse', detail: 'Address validation, formats, reference data. Matching quality starts here.' },
        { label: 'Match and merge', detail: 'Deterministic rules plus probabilistic scoring. Auto-merge, review, and no-match bands.' },
        { label: 'Survivorship', detail: 'Attribute-level rules deciding which value wins and why.' },
        { label: 'Steward and govern', detail: 'Review queue, merge and unmerge, audit trail on every change.' },
        { label: 'Syndicate', detail: 'Publish back to consuming systems with the cross-reference intact.' }
      ]
    },
    keywords: [
      { t: 'Golden record', w: 5 },
      { t: 'Match and merge', w: 5 },
      { t: 'Survivorship rules', w: 5 },
      { t: 'Cross-reference', w: 4 },
      { t: 'Source ranking', w: 4 },
      { t: 'Standardization', w: 4 },
      { t: 'Data stewardship', w: 4 },
      { t: 'Syndication', w: 4 },
      { t: 'Trust score', w: 3 },
      { t: 'Domain scope', w: 3 },
      { t: 'Unmerge and audit', w: 3 }
    ],
    phrases: [
      'Name who consumes the golden record before you model anything.',
      'Cleansing quality sets the ceiling on match quality.',
      'Unmerge has to work on day one, not as a later enhancement.',
      'The cross-reference is the part downstream systems depend on most.'
    ],
    example: {
      org: 'Parexel International',
      headline: 'Reltio multi-domain MDM across enterprise systems',
      detail: 'I architected and implemented the solution, defining the data models, match and merge rules, integrations and governance standards. Multi-domain meant the cross-reference design had to hold across systems with different identifiers.',
      metric: 'Delivered trusted, unified master data across enterprise systems.'
    }
  },
  {
    id: 'mdm-style',
    role: 'mdm-architect',
    theme: 'Solution Design',
    q: 'Which MDM style do you choose: registry, consolidation, coexistence or centralized?',
    variants: [
      'How do you decide the MDM implementation style?',
      'Should MDM be the system of record?'
    ],
    answer: 'Pick by who needs to write. Registry when you only need to identify, consolidation when you only need to report, coexistence when sources keep authoring, and centralized when the hub becomes the place people edit.',
    tags: ['mdm style', 'registry', 'coexistence', 'centralized', 'architecture'],
    framework: {
      name: 'MDM Style Selection',
      source: 'Standard MDM implementation styles',
      type: 'quadrant',
      axes: { x: ['Read only', 'Authoring in the hub'], y: ['Identify and link', 'Full master record'] },
      nodes: [
        { label: 'Registry', detail: 'Cross-reference only. Fastest to stand up, lowest disruption, no golden record stored.', pos: 'tl' },
        { label: 'Coexistence', detail: 'Hub masters and publishes back. Sources keep authoring. The common landing spot.', pos: 'tr' },
        { label: 'Consolidation', detail: 'Golden record for analytics. Downstream only, no write-back.', pos: 'bl' },
        { label: 'Centralized', detail: 'Hub is the system of record. Highest control, highest change cost.', pos: 'br' }
      ]
    },
    keywords: [
      { t: 'Coexistence', w: 5 },
      { t: 'Registry style', w: 4 },
      { t: 'Consolidation style', w: 4 },
      { t: 'Centralized style', w: 4 },
      { t: 'Write-back', w: 4 },
      { t: 'System of record', w: 4 },
      { t: 'Change impact', w: 3 },
      { t: 'Time to value', w: 3 },
      { t: 'Source autonomy', w: 3 },
      { t: 'Migration path', w: 3 }
    ],
    phrases: [
      'Decide by who needs to write, not by which style sounds strongest.',
      'Coexistence is where most programs land and where most should start.',
      'Centralized gives the most control and asks the most from every source team.',
      'Registry first is a valid way to prove value before asking for write-back.'
    ],
    example: {
      org: 'Parexel International',
      headline: 'Coexistence across multi-domain enterprise sources',
      detail: 'Source systems continued to author in their own workflows while the hub mastered and published back. That kept the change footprint manageable across a large estate and still delivered unified master data.',
      metric: 'Scalable data models and governance standards across enterprise systems.'
    }
  },
  {
    id: 'mdm-match-rules',
    role: 'mdm-architect',
    theme: 'Matching',
    q: 'How do you design match and merge rules?',
    variants: [
      'Deterministic or probabilistic matching?',
      'How do you tune matching to avoid false merges?'
    ],
    answer: 'Layer them. Deterministic rules on strong identifiers first, probabilistic scoring for the rest, and three outcome bands so borderline pairs go to a steward instead of being merged automatically.',
    tags: ['matching', 'merge', 'probabilistic', 'deterministic', 'tuning'],
    framework: {
      name: 'Layered Match Design',
      source: 'Entity resolution practice',
      type: 'flow',
      nodes: [
        { label: 'Standardize first', detail: 'Names, addresses, phones, identifiers. Match quality is decided here.' },
        { label: 'Blocking', detail: 'Candidate keys to cut comparisons. Too tight loses matches, too loose costs runtime.' },
        { label: 'Deterministic pass', detail: 'Tax ID, national ID, email plus DOB. Exact and trusted, auto-merge.' },
        { label: 'Probabilistic pass', detail: 'Weighted similarity across attributes. Fuzzy names, nicknames, transposed dates.' },
        { label: 'Three bands', detail: 'Auto-merge above the high threshold, steward review in the middle, no match below.' },
        { label: 'Tune with truth data', detail: 'Labeled sample. Track false merges and missed matches separately.' },
        { label: 'Monitor in production', detail: 'Merge rate, review queue depth, unmerge rate. Retune on drift.' }
      ]
    },
    keywords: [
      { t: 'Deterministic matching', w: 5 },
      { t: 'Probabilistic matching', w: 5 },
      { t: 'Match threshold', w: 5 },
      { t: 'Blocking key', w: 4 },
      { t: 'False positive merge', w: 4 },
      { t: 'Steward review band', w: 4 },
      { t: 'Standardization', w: 4 },
      { t: 'Fuzzy matching', w: 3 },
      { t: 'Precision and recall', w: 4 },
      { t: 'Unmerge rate', w: 3 },
      { t: 'Truth set', w: 3 }
    ],
    phrases: [
      'A false merge costs far more than a missed match. Tune for that asymmetry.',
      'Three bands, not two. The middle band is what protects you.',
      'Standardize before you match or you are tuning against noise.',
      'Unmerge rate is the honest measure of whether your threshold is right.'
    ],
    example: {
      org: 'Blue Cross Blue Shield of NC',
      headline: 'Graph-assisted entity resolution for member and provider data',
      detail: 'Attribute matching alone was missing duplicates that shared relationships rather than attributes. Adding graph traversal as match evidence surfaced those pairs, with borderline cases routed to stewards.',
      metric: 'Duplicate master records reduced by about 35 percent.'
    }
  },
  {
    id: 'mdm-survivorship',
    role: 'mdm-architect',
    theme: 'Matching',
    q: 'How do you handle survivorship and golden record rules?',
    variants: [
      'Two systems disagree on the address. Which one wins?',
      'How do you decide which value survives a merge?'
    ],
    answer: 'Survivorship is set per attribute, not per record. Rank sources by attribute, add recency and completeness as tiebreakers, and keep every contributing value visible so a steward can see what was overridden.',
    tags: ['survivorship', 'golden record', 'trust', 'rules', 'mdm'],
    framework: {
      name: 'Attribute-Level Survivorship',
      source: 'MDM trust framework',
      type: 'layers',
      nodes: [
        { label: 'Source ranking per attribute', detail: 'CRM wins on contact, ERP wins on billing, HR wins on employment.' },
        { label: 'Recency', detail: 'Most recently updated wins among equally ranked sources.' },
        { label: 'Completeness and validity', detail: 'A validated, complete value beats a blank or malformed one from a higher rank.' },
        { label: 'Steward override', detail: 'Manual value pins and outranks the automated rules, with a reason recorded.' },
        { label: 'Contributing values retained', detail: 'Every source value stays visible. The golden record shows its own history.' }
      ]
    },
    keywords: [
      { t: 'Attribute-level survivorship', w: 5 },
      { t: 'Source ranking', w: 5 },
      { t: 'Trust score', w: 4 },
      { t: 'Recency rule', w: 4 },
      { t: 'Steward override', w: 4 },
      { t: 'Contributing values', w: 4 },
      { t: 'Completeness', w: 3 },
      { t: 'Validation rule', w: 3 },
      { t: 'Audit trail', w: 3 },
      { t: 'Golden record', w: 4 }
    ],
    phrases: [
      'Survivorship is per attribute. Record-level rules always disappoint someone.',
      'CRM wins on contact, ERP wins on billing. Say it that plainly.',
      'A steward override pins the value and records the reason.',
      'Keep the contributing values. The question always comes up later.'
    ],
    example: {
      org: 'Parexel International',
      headline: 'Attribute-level survivorship across multi-domain sources',
      detail: 'The Reltio implementation defined survivorship per attribute with source ranking agreed by the business owners. Retaining contributing values is what let stewards resolve disputes without going back to the source systems.',
      metric: 'Trusted, unified master data with governance standards across the enterprise.'
    }
  },
  {
    id: 'mdm-metrics',
    role: 'mdm-architect',
    theme: 'Value',
    q: 'How do you measure whether MDM is working?',
    variants: [
      'What KPIs do you track for a master data program?',
      'How do you prove MDM delivered value?'
    ],
    answer: 'Two sets. Platform health covers duplicate rate, match precision, review queue and unmerge rate. Business value covers the outcomes that improved because the data got trustworthy.',
    tags: ['mdm', 'metrics', 'kpi', 'value', 'measurement'],
    framework: {
      name: 'MDM Measurement Set',
      source: 'MDM program measurement practice',
      type: 'pillars',
      base: 'Platform health proves it works. Business value proves it was worth it',
      nodes: [
        { label: 'Duplicate rate', detail: 'Duplicates per domain, trending down. The headline number.' },
        { label: 'Match quality', detail: 'Precision and recall against a truth set. Unmerge rate as the reality check.' },
        { label: 'Steward throughput', detail: 'Queue depth, time to resolve, share of records needing human review.' },
        { label: 'Business outcome', detail: 'Campaign accuracy, billing errors, onboarding time, audit findings closed.' }
      ]
    },
    keywords: [
      { t: 'Duplicate rate', w: 5 },
      { t: 'Match precision', w: 5 },
      { t: 'Unmerge rate', w: 4 },
      { t: 'Steward queue depth', w: 4 },
      { t: 'Auto-merge percentage', w: 4 },
      { t: 'Data completeness', w: 3 },
      { t: 'Adoption by consumers', w: 4 },
      { t: 'Business outcome', w: 4 },
      { t: 'Time to onboard source', w: 3 },
      { t: 'Trust score coverage', w: 2 }
    ],
    phrases: [
      'Duplicate rate is the number the business understands immediately.',
      'A rising unmerge rate means the threshold is too loose. Watch it weekly.',
      'Adoption matters. A golden record nobody consumes has not delivered anything.',
      'Report platform health monthly and business outcome quarterly.'
    ],
    example: {
      org: 'Blue Cross Blue Shield of NC',
      headline: 'Duplicate reduction as the headline program metric',
      detail: 'The entity resolution work was measured on duplicate master records, which is a number the business could verify independently. That made the case for scaling MDM across further domains.',
      metric: 'About 35 percent reduction in duplicate master records.'
    }
  },
  {
    id: 'mdm-stewardship',
    role: 'mdm-architect',
    theme: 'Operating Model',
    q: 'How does data stewardship work in an MDM program?',
    variants: [
      'Who resolves match exceptions?',
      'How do you keep the steward queue under control?'
    ],
    answer: 'Stewards work a queue, not a spreadsheet. Route by domain, set a service level on resolution time, and feed every override back into rule tuning so the queue shrinks over time.',
    tags: ['stewardship', 'mdm', 'operating model', 'exceptions', 'workflow'],
    framework: {
      name: 'Stewardship Workflow',
      source: 'MDM operational model',
      type: 'flow',
      nodes: [
        { label: 'Route by domain', detail: 'Customer records to the customer steward. Product to product. Not one shared inbox.' },
        { label: 'Prioritize the queue', detail: 'By business impact. A duplicate on a top account outranks a dormant one.' },
        { label: 'Resolve with context', detail: 'Steward sees all contributing values, sources and match scores in one view.' },
        { label: 'Record the reason', detail: 'Every merge, unmerge and override carries a reason code.' },
        { label: 'Feed back to rules', detail: 'Recurring override patterns become rule changes, not permanent manual work.' },
        { label: 'Report and coach', detail: 'Queue trend and resolution time reviewed with the business owner monthly.' }
      ]
    },
    keywords: [
      { t: 'Steward queue', w: 5 },
      { t: 'Exception workflow', w: 5 },
      { t: 'Reason code', w: 4 },
      { t: 'Rule tuning feedback', w: 4 },
      { t: 'Service level', w: 4 },
      { t: 'Domain routing', w: 4 },
      { t: 'Merge and unmerge', w: 4 },
      { t: 'Audit trail', w: 3 },
      { t: 'Business prioritization', w: 3 },
      { t: 'Throughput reporting', w: 3 }
    ],
    phrases: [
      'A steward queue that only grows means the rules need work, not more people.',
      'Prioritize by business impact. Not every duplicate matters equally.',
      'Reason codes turn manual decisions into rule improvements.',
      'Give the steward every contributing value on one screen.'
    ],
    example: {
      org: 'KPMG, Fortune 500 client',
      headline: 'Stewardship workflow inside Informatica IDMC',
      detail: 'Stewards worked a routed queue with match scores and contributing values in one view. Reason codes on overrides gave the tuning cycle real input instead of guesswork.',
      metric: 'Data error rates cut 35 percent across the program.'
    }
  },
  {
    id: 'mdm-integration',
    role: 'mdm-architect',
    theme: 'Integration',
    q: 'How do you integrate MDM with Salesforce, SAP and Workday?',
    variants: [
      'How does the golden record get back into source systems?',
      'What integration patterns do you use for MDM?'
    ],
    answer: 'Events out for changes, APIs for real-time lookup, batch for initial load and reconciliation. Keep a cross-reference of every source key so systems can find their own record in the hub.',
    tags: ['integration', 'salesforce', 'sap', 'workday', 'syndication', 'api'],
    framework: {
      name: 'MDM Integration Patterns',
      source: 'MDM syndication architecture',
      type: 'layers',
      nodes: [
        { label: 'Initial load', detail: 'Bulk profile, cleanse, match. Establish the cross-reference before anything is live.' },
        { label: 'Inbound delta', detail: 'Change data capture or events from each source. Idempotent, replayable.' },
        { label: 'Cross-reference', detail: 'Every source key mapped to the master ID. This is what makes write-back possible.' },
        { label: 'Outbound events', detail: 'Publish golden record changes. Subscribers decide what they consume.' },
        { label: 'Real-time lookup', detail: 'API for search and validation at point of entry. Stops duplicates being created.' },
        { label: 'Reconciliation', detail: 'Scheduled counts and drift checks per source. Differences get investigated.' }
      ]
    },
    keywords: [
      { t: 'Cross-reference table', w: 5 },
      { t: 'Publish and subscribe', w: 5 },
      { t: 'Change data capture', w: 4 },
      { t: 'Write-back', w: 4 },
      { t: 'Real-time lookup', w: 4 },
      { t: 'Idempotency', w: 4 },
      { t: 'Initial load', w: 3 },
      { t: 'Reconciliation', w: 4 },
      { t: 'API contract', w: 3 },
      { t: 'Conflict handling', w: 3 },
      { t: 'Duplicate prevention', w: 4 }
    ],
    phrases: [
      'Stop duplicates at the point of entry with a lookup API. Prevention beats matching.',
      'The cross-reference is what makes write-back possible.',
      'Publish events and let subscribers choose. Do not build per-system feeds.',
      'Run reconciliation per source on a schedule or drift goes unnoticed.'
    ],
    example: {
      org: 'KPMG, Fortune 500 client',
      headline: 'Enterprise Data Hub across customized Salesforce, SAP and SaaS systems',
      detail: 'I designed the enterprise models and schemas for real-time and batch integration. The cross-reference layer was what let each system keep its own keys while still resolving to one master record.',
      metric: 'Trusted master data and self-service analytics across the client estate.'
    }
  },
  {
    id: 'mdm-vendor',
    role: 'mdm-architect',
    theme: 'Platform',
    q: 'Reltio, Informatica or Profisee. How do you choose?',
    variants: [
      'How do you run an MDM vendor selection?',
      'What matters most when picking an MDM platform?'
    ],
    answer: 'Score against your domains, your match complexity, your existing stack and your team. Run a proof of concept on your own messy data, because vendor demos all match clean records perfectly.',
    tags: ['vendor', 'reltio', 'informatica', 'profisee', 'selection', 'poc'],
    framework: {
      name: 'MDM Platform Selection',
      source: 'Vendor evaluation with weighted criteria',
      type: 'radial',
      hub: 'Proof of concept on your own data decides it',
      nodes: [
        { label: 'Domain coverage', detail: 'Multi-domain out of the box, or one domain at a time. Reltio leads on multi-domain.' },
        { label: 'Match engine', detail: 'Test on your hardest records. Configurability matters more than the demo score.' },
        { label: 'Ecosystem fit', detail: 'Informatica if IDMC is already there. Profisee if the stack is Microsoft and Azure.' },
        { label: 'Stewardship experience', detail: 'The steward UI decides adoption. Have real stewards test it.' },
        { label: 'Integration and APIs', detail: 'Event support, API maturity, connectors to your actual source systems.' },
        { label: 'Cost model', detail: 'Per record, per domain, per user. Model it at three-year volumes, not today.' }
      ]
    },
    keywords: [
      { t: 'Proof of concept', w: 5 },
      { t: 'Multi-domain support', w: 5 },
      { t: 'Match engine configurability', w: 4 },
      { t: 'Reltio', w: 4 },
      { t: 'Informatica IDMC', w: 4 },
      { t: 'Profisee', w: 4 },
      { t: 'Steward user experience', w: 4 },
      { t: 'Ecosystem fit', w: 4 },
      { t: 'Total cost of ownership', w: 4 },
      { t: 'API maturity', w: 3 },
      { t: 'Cloud native', w: 3 }
    ],
    phrases: [
      'Run the proof of concept on your worst data, not a clean sample.',
      'The steward interface decides adoption more than the match engine does.',
      'Existing stack matters. Fighting your own ecosystem is expensive.',
      'Model the cost at three-year volumes, not at go-live volumes.'
    ],
    example: {
      org: 'Across Parexel and KPMG',
      headline: 'Reltio in one estate, Informatica IDMC in another',
      detail: 'Reltio fit a multi-domain cloud-native requirement at Parexel. Informatica IDMC fit clients already running its data quality and catalog components, where MDM extended an existing platform rather than adding one.',
      metric: 'Both delivered unified master data with governance standards attached.'
    }
  },
  {
    id: 'mdm-hierarchies',
    role: 'mdm-architect',
    theme: 'Solution Design',
    q: 'How do you handle hierarchy management?',
    variants: [
      'A customer is a subsidiary of another customer. How do you model that?',
      'How do you support multiple hierarchies over the same entities?'
    ],
    answer: 'Model hierarchies as relationships, not as columns on the record. Support several at once because legal, sales and billing rollups rarely agree, and version them so last quarter still reports correctly.',
    tags: ['hierarchy', 'relationships', 'modeling', 'rollup', 'mdm'],
    framework: {
      name: 'Hierarchy Design',
      source: 'MDM relationship modeling',
      type: 'layers',
      nodes: [
        { label: 'Relationships not columns', detail: 'Parent-child as a typed relationship. Columns cannot hold two hierarchies.' },
        { label: 'Multiple hierarchies', detail: 'Legal, sales, billing, geographic. Same entities, different structures.' },
        { label: 'Effective dating', detail: 'Version each structure so historical reporting stays correct after a reorg.' },
        { label: 'Ownership per hierarchy', detail: 'Finance owns legal, sales ops owns territory. Different approvers.' },
        { label: 'Rollup rules', detail: 'How measures aggregate, and what happens to records with no parent.' },
        { label: 'Change workflow', detail: 'Reorganizations are approved changes, not overnight file loads.' }
      ]
    },
    keywords: [
      { t: 'Multiple hierarchies', w: 5 },
      { t: 'Effective dating', w: 5 },
      { t: 'Parent-child relationship', w: 4 },
      { t: 'Legal hierarchy', w: 4 },
      { t: 'Sales hierarchy', w: 4 },
      { t: 'Rollup rules', w: 4 },
      { t: 'Ragged hierarchy', w: 3 },
      { t: 'Reorganization workflow', w: 3 },
      { t: 'Hierarchy ownership', w: 3 },
      { t: 'Historical reporting', w: 3 }
    ],
    phrases: [
      'Legal, sales and billing hierarchies will never agree. Support all three.',
      'Effective dating is what keeps last quarter reporting correctly after a reorg.',
      'A hierarchy needs an owner and an approval path, same as any other master data.',
      'Ragged and unbalanced structures are normal. Design for them upfront.'
    ],
    example: {
      org: 'Parexel International',
      headline: 'Multi-domain relationships across sponsors, sites and investigators',
      detail: 'The multi-domain model held relationships between organizations, sites and people rather than flattening them into attributes. That is what supported the different rollup views each function needed.',
      metric: 'Scalable data models supporting unified master data across enterprise systems.'
    }
  },
  {
    id: 'mdm-buyin',
    role: 'mdm-architect',
    theme: 'Value',
    q: 'How do you get business buy-in for MDM?',
    variants: [
      'MDM projects stall here. How would you avoid that?',
      'How do you explain MDM to a business audience?'
    ],
    answer: 'Skip the architecture. Show them their own duplicate records and what those cost, then deliver one domain that fixes a problem they named. MDM sells on evidence, not on concept.',
    tags: ['buy-in', 'stakeholders', 'value', 'adoption', 'business case'],
    framework: {
      name: 'MDM Adoption Path',
      source: 'Program adoption practice',
      type: 'flow',
      nodes: [
        { label: 'Show their data', detail: 'Profile their actual records. Duplicates with familiar names end the debate.' },
        { label: 'Price the problem', detail: 'Duplicate mailings, wrong billing, failed campaigns, onboarding rework.' },
        { label: 'One domain, one quarter', detail: 'Narrow scope with a visible outcome. Not an enterprise program upfront.' },
        { label: 'Name the owner', detail: 'A business leader owns the domain and its duplicate rate.' },
        { label: 'Report the trend', detail: 'Monthly, in business terms. Duplicates down, errors down.' },
        { label: 'Extend on evidence', detail: 'The next domain gets funded because the first one worked.' }
      ]
    },
    keywords: [
      { t: 'Data profiling evidence', w: 5 },
      { t: 'Cost of duplicates', w: 5 },
      { t: 'Narrow first scope', w: 4 },
      { t: 'Business ownership', w: 4 },
      { t: 'Visible outcome', w: 4 },
      { t: 'Trend reporting', w: 3 },
      { t: 'Executive sponsor', w: 4 },
      { t: 'Incremental funding', w: 3 },
      { t: 'Change management', w: 3 }
    ],
    phrases: [
      'Nothing sells MDM like showing someone four versions of their biggest customer.',
      'One domain in one quarter beats an enterprise program on a slide.',
      'The business owns the duplicate rate. My team owns the platform.',
      'Fund the next domain with evidence from the last one.'
    ],
    example: {
      org: 'KPMG, Fortune 500 client',
      headline: 'Profiling results as the opening argument',
      detail: 'Showing business leaders their own duplicate and conflicting records moved the conversation past whether MDM was needed. Scoping the first delivery to one domain kept the timeline short enough to hold attention.',
      metric: 'Data error rates cut 35 percent, time to insight from 3 weeks to 2 days.'
    }
  }
];
