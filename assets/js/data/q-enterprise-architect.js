export default [
  {
    id: 'ea-legacy-modernization',
    role: 'enterprise-architect',
    theme: 'Modernization',
    q: 'How do you approach modernizing a legacy platform?',
    variants: [
      'Walk me through a modernization roadmap you have built.',
      'How do you decide what to rewrite and what to leave alone?'
    ],
    answer: 'Start with business capability, not technology. Score each application on business value and technical health, assign a disposition from the 6R set, then sequence the moves so every wave ships something users notice.',
    tags: ['modernization', 'togaf', 'legacy', '6r', 'roadmap', 'application portfolio'],
    framework: {
      name: 'Capability Baseline to 6R Disposition',
      source: 'TOGAF ADM Phases B to E, adapted',
      type: 'flow',
      nodes: [
        { label: 'Capability map', detail: 'What the business does, not what the systems are called.' },
        { label: 'Portfolio scoring', detail: 'Business value against technical health for every application.' },
        { label: '6R disposition', detail: 'Retain, retire, rehost, replatform, refactor, replace.' },
        { label: 'Target state', detail: 'Business, data, application and technology views that agree with each other.' },
        { label: 'Gap and waves', detail: 'Sequence by dependency and by visible business win.' },
        { label: 'Run and adjust', detail: 'Review board checkpoints, measured benefit per wave.' }
      ]
    },
    keywords: [
      { t: 'Business capability map', w: 5 },
      { t: '6R disposition', w: 5 },
      { t: 'Application portfolio', w: 4 },
      { t: 'Technical debt', w: 4 },
      { t: 'Target state', w: 4 },
      { t: 'Strangler fig', w: 3 },
      { t: 'TOGAF ADM', w: 3 },
      { t: 'Dependency sequencing', w: 3 },
      { t: 'Coexistence period', w: 2 },
      { t: 'Total cost of ownership', w: 2 },
      { t: 'Benefit realization', w: 2 },
      { t: 'Cutover risk', w: 2 }
    ],
    phrases: [
      'Modernization is a portfolio decision before it is an engineering decision.',
      'Every wave has to ship something a user can feel.',
      'I do not rewrite systems that work and cost little to run.',
      'The strangler pattern buys you the option to stop halfway.'
    ],
    example: {
      org: 'Parexel International',
      headline: 'Clinical and commercial platform modernization across 8 business domains',
      detail: 'I ran the portfolio assessment across clinical data management, finance, scheduling, site management and resourcing. Scored each platform, set dispositions, and sequenced the roadmap through an Architecture Review Board so no domain moved ahead of its data dependencies.',
      metric: 'Every data platform investment gated through one board, which removed duplicate spend.'
    }
  },
  {
    id: 'ea-build-vs-buy',
    role: 'enterprise-architect',
    theme: 'Decisions',
    q: 'How do you decide build versus buy?',
    variants: [
      'A vendor product covers 70 percent of the need. What do you do?',
      'When is custom development the right call?'
    ],
    answer: 'Build where the capability differentiates the business and the market has no mature answer. Buy everywhere else, then hold the line on configuration over customization.',
    tags: ['build vs buy', 'vendor', 'saas', 'differentiation', 'decision'],
    framework: {
      name: 'Differentiation and Market Maturity',
      source: 'Consulting standard 2x2, feeds TOGAF Phase E',
      type: 'quadrant',
      axes: { x: ['Commodity capability', 'Differentiating capability'], y: ['Immature market', 'Mature market'] },
      nodes: [
        { label: 'Buy and configure', detail: 'Commodity work, mature vendors. Payroll, ticketing, CRM core.', pos: 'tl' },
        { label: 'Buy and extend', detail: 'Differentiating, but a strong platform exists. Extend at the edges.', pos: 'tr' },
        { label: 'Rent or defer', detail: 'Commodity work, no mature vendor. Buy time with a light solution.', pos: 'bl' },
        { label: 'Build', detail: 'Differentiating and nobody sells it. This is where engineering pays back.', pos: 'br' }
      ]
    },
    keywords: [
      { t: 'Differentiation', w: 5 },
      { t: 'Total cost of ownership', w: 5 },
      { t: 'Vendor lock-in', w: 4 },
      { t: 'Configuration over customization', w: 4 },
      { t: 'Time to value', w: 4 },
      { t: 'Fit-gap analysis', w: 3 },
      { t: 'Exit cost', w: 3 },
      { t: 'Roadmap alignment', w: 3 },
      { t: 'Support model', w: 2 },
      { t: 'Data ownership', w: 2 },
      { t: 'Upgrade path', w: 2 }
    ],
    phrases: [
      'Buy the commodity, build the difference.',
      'Every customization is a bill you pay again at the next upgrade.',
      'Ask what the exit costs before you sign the entry.',
      'A 70 percent fit is fine if the missing 30 percent is not why customers pick you.'
    ],
    example: {
      org: 'KPMG, Fortune 500 client',
      headline: 'Snowflake plus Informatica IDMC over a custom stack',
      detail: 'The client wanted to build their own catalog and quality engine. I ran a fit-gap against Informatica IDMC covering MDM, data quality and the AXON catalog. Buying moved go-live forward by quarters and let the team spend engineering effort on the models specific to their business.',
      metric: 'Time to insight moved from 3 weeks to 2 days. Data error rates fell 35 percent.'
    }
  },
  {
    id: 'ea-target-state',
    role: 'enterprise-architect',
    theme: 'Architecture Design',
    q: 'What does your target-state architecture process look like?',
    variants: [
      'How do you produce a target-state architecture the business agrees with?',
      'Walk me through your architecture artifacts.'
    ],
    answer: 'Four connected views on one page each: business, data, application, technology. Each view answers a question an executive asked, and each one traces back to a capability on the business map.',
    tags: ['togaf', 'target state', 'bdat', 'artifacts', 'reference architecture'],
    framework: {
      name: 'TOGAF BDAT Layers',
      source: 'TOGAF 10, Architecture Development Method',
      type: 'layers',
      nodes: [
        { label: 'Business Architecture', detail: 'Capabilities, value streams, org boundaries, process owners.' },
        { label: 'Data Architecture', detail: 'Domains, canonical entities, ownership, flow and lineage.' },
        { label: 'Application Architecture', detail: 'Systems of record, engagement and insight. Integration contracts.' },
        { label: 'Technology Architecture', detail: 'Cloud, network, runtime, identity and the non-functional baseline.' },
        { label: 'Governance and Standards', detail: 'Principles, review board, decision records, exception path.' }
      ]
    },
    keywords: [
      { t: 'Capability model', w: 5 },
      { t: 'Baseline and target', w: 5 },
      { t: 'Gap analysis', w: 4 },
      { t: 'Reference architecture', w: 4 },
      { t: 'Architecture principles', w: 4 },
      { t: 'Value stream', w: 3 },
      { t: 'Transition architecture', w: 3 },
      { t: 'Non-functional requirements', w: 3 },
      { t: 'Traceability', w: 3 },
      { t: 'Architecture repository', w: 2 },
      { t: 'Viewpoint', w: 2 }
    ],
    phrases: [
      'If a diagram needs a narrator, it is not finished.',
      'One page per view, four views, one story.',
      'Baseline, target, gap, sequence. That order every time.',
      'Every box traces to a capability somebody owns.'
    ],
    example: {
      org: 'Parexel International',
      headline: 'Enterprise data and AI target state for a global CRO',
      detail: 'I produced the four-layer target state covering clinical and commercial operations across 100+ countries. The data layer named domain owners, which is what unlocked the governance conversation with the business.',
      metric: 'Roadmap covered governance, MDM and data quality with audit-ready lineage across multi-study portfolios.'
    }
  },
  {
    id: 'ea-arb',
    role: 'enterprise-architect',
    theme: 'Governance',
    q: 'How do you run an Architecture Review Board?',
    variants: [
      'How do you keep governance from becoming a bottleneck?',
      'What happens when a team wants an exception?'
    ],
    answer: 'Publish the standards, triage by risk so most changes never need a meeting, and give the board a fixed turnaround. Exceptions get approved with an expiry date and a named owner.',
    tags: ['arb', 'governance', 'review board', 'standards', 'exceptions'],
    framework: {
      name: 'Risk-Tiered Review Flow',
      source: 'TOGAF Architecture Governance, tuned for delivery speed',
      type: 'flow',
      nodes: [
        { label: 'Intake', detail: 'One form, one queue, one place to look.' },
        { label: 'Risk triage', detail: 'Green auto-approves against the standard. Amber gets a reviewer. Red goes to board.' },
        { label: 'Review', detail: 'Fixed agenda, fixed slot, decision made in the room.' },
        { label: 'Decision record', detail: 'Context, options, choice, consequences. Written down and searchable.' },
        { label: 'Exception with expiry', detail: 'Approved with a date and an owner, not open-ended.' },
        { label: 'Compliance check', detail: 'Sample delivered work against decisions. Feed findings back into standards.' }
      ]
    },
    keywords: [
      { t: 'Architecture Review Board', w: 5 },
      { t: 'Decision record', w: 5 },
      { t: 'Risk tiering', w: 4 },
      { t: 'Standards and patterns', w: 4 },
      { t: 'Exception management', w: 4 },
      { t: 'Guardrails', w: 3 },
      { t: 'Dispensation', w: 3 },
      { t: 'Compliance assessment', w: 3 },
      { t: 'Reference patterns', w: 2 },
      { t: 'Escalation path', w: 2 }
    ],
    phrases: [
      'Most changes should never reach the board.',
      'An exception without an expiry date is a new standard.',
      'The board publishes patterns so teams can self-serve the answer.',
      'Governance earns its place by being fast.'
    ],
    example: {
      org: 'Parexel International',
      headline: 'Architecture Review Board covering every data platform investment',
      detail: 'I established the board across 8+ business domains. The tiering mattered most. Routine integrations followed published patterns without a meeting, and the board spent its time on decisions carrying regulatory or spend risk.',
      metric: 'Stopped duplicate platform spend and kept clinical systems aligned to regulatory requirements.'
    }
  },
  {
    id: 'ea-disagreement',
    role: 'enterprise-architect',
    theme: 'Influence',
    q: 'How do you handle an architecture decision people disagree on?',
    variants: [
      'A senior engineer refuses to follow the standard. What do you do?',
      'Tell me about a time you had to win a technical argument.'
    ],
    answer: 'Move the debate from opinion to criteria. Agree the decision criteria first, score the options against them in the open, and write the decision record so the reasoning outlives the meeting.',
    tags: ['influence', 'conflict', 'adr', 'stakeholders', 'decision'],
    framework: {
      name: 'Criteria-First Decision Path',
      source: 'Architecture Decision Records plus weighted trade-off analysis',
      type: 'flow',
      nodes: [
        { label: 'Name the decision', detail: 'One sentence. What are we choosing between and by when.' },
        { label: 'Agree criteria', detail: 'Cost, risk, speed, fit, support. Weight them before you see any scores.' },
        { label: 'Score options', detail: 'Including the option the other person is defending.' },
        { label: 'Surface the trade-off', detail: 'Say out loud what the winning option gives up.' },
        { label: 'Decide and record', detail: 'Context, options, choice, consequences, review date.' },
        { label: 'Disagree and commit', detail: 'Log the dissent, set a checkpoint to revisit with evidence.' }
      ]
    },
    keywords: [
      { t: 'Decision criteria', w: 5 },
      { t: 'Trade-off analysis', w: 5 },
      { t: 'Architecture Decision Record', w: 4 },
      { t: 'Weighted scoring', w: 4 },
      { t: 'Disagree and commit', w: 3 },
      { t: 'Reversible decision', w: 3 },
      { t: 'Proof of concept', w: 3 },
      { t: 'Stakeholder alignment', w: 3 },
      { t: 'Escalation', w: 2 },
      { t: 'Review date', w: 2 }
    ],
    phrases: [
      'Agree the criteria before you look at the options.',
      'If the decision is cheap to reverse, run the spike instead of the debate.',
      'Write down what we gave up, not just what we picked.',
      'Score their option too. It changes the conversation.'
    ],
    example: {
      org: 'Blue Cross Blue Shield of NC',
      headline: 'Graph database for entity resolution when the team expected relational',
      detail: 'The team assumed a relational match engine. I set the criteria around match accuracy and traversal depth, then ran a bounded proof of concept on Neo4j. The numbers made the argument and the decision record kept it settled.',
      metric: 'Duplicate master records fell about 35 percent.'
    }
  },
  {
    id: 'ea-value',
    role: 'enterprise-architect',
    theme: 'Value',
    q: 'How do you measure the value of architecture?',
    variants: [
      'Your CFO asks what EA delivered this year. What do you show?',
      'What metrics do you track for an architecture function?'
    ],
    answer: 'Four columns: money avoided, time saved, risk reduced, reuse created. Attach a number to each, sourced from finance or delivery data rather than from architecture itself.',
    tags: ['value', 'metrics', 'roi', 'kpi', 'business case'],
    framework: {
      name: 'Four Value Pillars',
      source: 'Benefit realization practice, consulting standard',
      type: 'pillars',
      base: 'Numbers sourced from finance and delivery systems, not from architecture',
      nodes: [
        { label: 'Cost avoided', detail: 'Duplicate platforms stopped, licenses consolidated, rework prevented.' },
        { label: 'Time saved', detail: 'Delivery cycle time, pattern reuse, faster onboarding of new systems.' },
        { label: 'Risk reduced', detail: 'Audit findings closed, single points of failure removed, compliance gaps shut.' },
        { label: 'Reuse created', detail: 'Shared services, canonical models and integration patterns teams adopt.' }
      ]
    },
    keywords: [
      { t: 'Cost avoidance', w: 5 },
      { t: 'Benefit realization', w: 4 },
      { t: 'Cycle time', w: 4 },
      { t: 'Reuse rate', w: 4 },
      { t: 'Risk reduction', w: 4 },
      { t: 'Audit findings closed', w: 3 },
      { t: 'Rationalization', w: 3 },
      { t: 'Pattern adoption', w: 3 },
      { t: 'Portfolio spend', w: 2 },
      { t: 'Debt burn-down', w: 2 }
    ],
    phrases: [
      'Cost avoidance counts only if finance signs the number.',
      'Reuse is the cleanest architecture metric there is.',
      'I report the same four columns every quarter so the trend is the story.',
      'If the number cannot be sourced from someone else, I do not claim it.'
    ],
    example: {
      org: 'Blue Cross Blue Shield of NC',
      headline: 'Canonical patterns turned into measurable delivery speed',
      detail: 'The canonical data model gave 20+ integration touchpoints a reusable contract. The value case was simple to state because delivery teams reported the build time directly.',
      metric: 'Integration build time dropped about 40 percent through reusable canonical patterns.'
    }
  },
  {
    id: 'ea-failure',
    role: 'enterprise-architect',
    theme: 'Experience',
    q: 'Tell me about a time an architecture decision did not work out.',
    variants: [
      'What is the biggest mistake you have made as an architect?',
      'When have you had to reverse a design?'
    ],
    answer: 'Pick a decision that was reasonable at the time, name the signal you missed, describe the correction, and end with the practice you changed. Own it in the first sentence.',
    tags: ['behavioral', 'star', 'failure', 'learning'],
    framework: {
      name: 'Situation, Decision, Signal, Correction, Change',
      source: 'STAR adapted for architecture decisions',
      type: 'flow',
      nodes: [
        { label: 'Situation', detail: 'Two sentences of context. Scale, constraint, deadline.' },
        { label: 'Decision', detail: 'What you chose and why it was defensible then.' },
        { label: 'Signal missed', detail: 'The specific thing that proved the assumption wrong.' },
        { label: 'Correction', detail: 'What you changed, how fast, and what it cost.' },
        { label: 'Practice changed', detail: 'The check you added so it does not repeat.' }
      ]
    },
    keywords: [
      { t: 'Assumption', w: 5 },
      { t: 'Early signal', w: 4 },
      { t: 'Reversible decision', w: 4 },
      { t: 'Course correction', w: 4 },
      { t: 'Ownership', w: 4 },
      { t: 'Blast radius', w: 3 },
      { t: 'Pilot first', w: 3 },
      { t: 'Post-implementation review', w: 3 },
      { t: 'Guardrail added', w: 2 }
    ],
    phrases: [
      'I owned it, I fixed it, and I changed how we check for it.',
      'The assumption was reasonable. The validation was thin.',
      'We caught it at pilot instead of at rollout, which is the part I would keep.',
      'Now every design of that type gets a load profile before build.'
    ],
    example: {
      org: 'Shape to use',
      headline: 'Pick a design where a volume or adoption assumption moved',
      detail: 'Good shape: a platform sized against forecast volumes, actual volumes arrived different, you re-architected the ingestion tier during pilot rather than after go-live, and you added a volume validation gate to the review board checklist.',
      metric: 'Close on the guardrail you added, not on the apology.'
    }
  },
  {
    id: 'ea-tech-debt',
    role: 'enterprise-architect',
    theme: 'Modernization',
    q: 'How do you manage technical debt?',
    variants: [
      'How do you get funding to pay down debt?',
      'How do you stop new debt from accumulating?'
    ],
    answer: 'Make it visible in business terms, sort it by what it costs now against what it will cost later, and reserve a fixed share of delivery capacity so paydown never competes with features in a fair fight.',
    tags: ['technical debt', 'modernization', 'portfolio', 'risk'],
    framework: {
      name: 'Debt Impact and Urgency Matrix',
      source: 'Portfolio risk practice, consulting standard',
      type: 'quadrant',
      axes: { x: ['Low business impact', 'High business impact'], y: ['Can wait', 'Failing now'] },
      nodes: [
        { label: 'Schedule it', detail: 'Failing but low impact. Fix in the next planned wave.', pos: 'tl' },
        { label: 'Fix now', detail: 'Failing and high impact. Pull into current sprint capacity.', pos: 'tr' },
        { label: 'Accept and log', detail: 'Low impact, no failure. Record it, review annually.', pos: 'bl' },
        { label: 'Fund a program', detail: 'High impact, not yet failing. This is the modernization business case.', pos: 'br' }
      ]
    },
    keywords: [
      { t: 'Debt register', w: 5 },
      { t: 'Capacity allocation', w: 5 },
      { t: 'Run cost', w: 4 },
      { t: 'Risk exposure', w: 4 },
      { t: 'End of support', w: 4 },
      { t: 'Definition of done', w: 3 },
      { t: 'Burn-down', w: 3 },
      { t: 'Architecture fitness', w: 2 },
      { t: 'Remediation backlog', w: 2 }
    ],
    phrases: [
      'Debt gets a register, an owner, and a number in dollars.',
      'A fixed capacity share means paydown never has to win an argument.',
      'End-of-support dates are the easiest funding conversation you will ever have.',
      'Stop new debt at the definition of done, not at the review board.'
    ],
    example: {
      org: 'Parexel International',
      headline: 'Debt surfaced through the portfolio assessment',
      detail: 'The application scoring exercise doubled as the debt register. Platforms carrying regulatory exposure or approaching vendor end of support moved to the front of the roadmap, which made the funding conversation straightforward.',
      metric: 'Downstream reconciliation effort fell about 40 percent once the data layer debt was addressed.'
    }
  },
  {
    id: 'ea-integration',
    role: 'enterprise-architect',
    theme: 'Architecture Design',
    q: 'How do you design integration architecture across many SaaS systems?',
    variants: [
      'Salesforce, SAP and Workday all disagree on the customer. How do you fix it?',
      'Point to point or a hub? How do you choose?'
    ],
    answer: 'Define one canonical contract per business entity, route through a hub so systems never learn each other schemas, and set a clear rule for which system owns which attribute.',
    tags: ['integration', 'api', 'canonical', 'saas', 'event driven', 'ipaas'],
    framework: {
      name: 'Canonical Hub Integration Model',
      source: 'Enterprise integration patterns plus MDM ownership rules',
      type: 'layers',
      nodes: [
        { label: 'Source systems', detail: 'Salesforce, SAP, Workday, Veeva and the rest. Each keeps its own model.' },
        { label: 'Ingestion and contract', detail: 'API, file or event. Schema validated at the door.' },
        { label: 'Canonical layer', detail: 'One shared definition per entity. Systems map to it, not to each other.' },
        { label: 'Mastering and quality', detail: 'MDM decides the surviving value. Quality rules run before publish.' },
        { label: 'Distribution', detail: 'Events out, APIs for lookup, batch for bulk. Same payload shape.' },
        { label: 'Observability', detail: 'Lineage, replay, reconciliation counts and error queues someone owns.' }
      ]
    },
    keywords: [
      { t: 'Canonical data model', w: 5 },
      { t: 'System of record', w: 5 },
      { t: 'Attribute ownership', w: 4 },
      { t: 'Event-driven integration', w: 4 },
      { t: 'API contract', w: 4 },
      { t: 'Replay and reconciliation', w: 3 },
      { t: 'Schema evolution', w: 3 },
      { t: 'Idempotency', w: 3 },
      { t: 'iPaaS', w: 3 },
      { t: 'Point-to-point sprawl', w: 3 },
      { t: 'Publish and subscribe', w: 2 }
    ],
    phrases: [
      'Systems map to the canonical model, never to each other.',
      'Name the owning system per attribute, not per entity. That is where the arguments live.',
      'Point to point is fast for the first three and expensive from the fourth.',
      'If you cannot replay it, you cannot support it.'
    ],
    example: {
      org: 'KPMG, Fortune 500 client',
      headline: 'Enterprise Data Hub across Salesforce, SAP and legacy systems',
      detail: 'I designed the enterprise data models and schemas behind the hub, covering both real-time and batch integration. Attribute-level ownership was the piece that settled the long-running disputes between sales and finance.',
      metric: 'Trusted master data plus self-service analytics on Snowflake and Informatica IDMC.'
    }
  },
  {
    id: 'ea-ai-in-ea',
    role: 'enterprise-architect',
    theme: 'AI',
    q: 'Where does AI fit in enterprise architecture right now?',
    variants: [
      'How do you architect for GenAI at enterprise scale?',
      'What changes in your reference architecture because of LLMs?'
    ],
    answer: 'AI is an application tier that runs on governed data, so most of the architecture work sits underneath it. Add a retrieval layer, an evaluation loop, and access controls that follow the user rather than the index.',
    tags: ['ai', 'genai', 'llm', 'rag', 'agentic', 'reference architecture'],
    framework: {
      name: 'Governed AI Reference Stack',
      source: 'Enterprise AI architecture, layered view',
      type: 'layers',
      nodes: [
        { label: 'Experience', detail: 'Chat, search, copilots and agents inside the tools people already use.' },
        { label: 'Orchestration', detail: 'Prompt routing, tool calling, agent workflows, guardrails, human checkpoints.' },
        { label: 'Retrieval', detail: 'Vector store plus knowledge graph. Chunking, embeddings, hybrid search.' },
        { label: 'Governed data', detail: 'Curated structured data and cleared documents. Permissions carried through.' },
        { label: 'Evaluation and safety', detail: 'Groundedness scoring, red teaming, drift monitoring, audit log.' },
        { label: 'Platform', detail: 'Model hosting, cost controls, secrets, network isolation.' }
      ]
    },
    keywords: [
      { t: 'Retrieval augmented generation', w: 5 },
      { t: 'Knowledge graph', w: 5 },
      { t: 'Governed data access', w: 5 },
      { t: 'Vector store', w: 4 },
      { t: 'Agentic workflow', w: 4 },
      { t: 'Groundedness evaluation', w: 4 },
      { t: 'Permission propagation', w: 4 },
      { t: 'Hallucination control', w: 3 },
      { t: 'Prompt orchestration', w: 3 },
      { t: 'Model cost control', w: 3 },
      { t: 'Human in the loop', w: 3 },
      { t: 'Audit trail', w: 3 }
    ],
    phrases: [
      'The model is the easy part. The governed data underneath it is the work.',
      'Permissions have to follow the user into the index, not stop at the source system.',
      'Without an evaluation loop you are shipping a demo.',
      'A knowledge graph gives the model structure that plain vector search cannot.'
    ],
    example: {
      org: 'Parexel International',
      headline: 'Enterprise AI platform on LLM plus knowledge graph',
      detail: 'I architected the platform for intelligent search, protocol summarization, and site and investigator insight across the global study portfolio. The pipeline joined structured clinical metadata with unstructured protocol documents through RAG, with governed and auditable access.',
      metric: 'Analyst research time fell about 60 percent, which accelerated study start-up decisions.'
    }
  }
];
