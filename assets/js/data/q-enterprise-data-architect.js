export default [
  {
    id: 'eda-canonical-model',
    role: 'enterprise-data-architect',
    theme: 'Modeling',
    q: 'How do you design an enterprise canonical data model?',
    variants: [
      'What is a canonical model and when do you need one?',
      'How do you get systems to agree on what a customer is?'
    ],
    answer: 'Model the business entity, not any system version of it. Keep the canonical set small, version it properly, and map each source into it rather than letting systems negotiate with each other.',
    tags: ['canonical', 'modeling', 'integration', 'semantics', 'entities'],
    framework: {
      name: 'Canonical Model Design',
      source: 'Enterprise data modeling practice',
      type: 'flow',
      nodes: [
        { label: 'Scope the entities', detail: 'Only what crosses system boundaries. Customer, product, party, account, site.' },
        { label: 'Agree semantics', detail: 'One definition per attribute, signed by the business owner.' },
        { label: 'Model neutral', detail: 'No source system quirks. No downstream report shapes.' },
        { label: 'Map each source', detail: 'Source to canonical mapping with transformation rules and gaps recorded.' },
        { label: 'Version and govern', detail: 'Additive changes by default. Breaking changes get a deprecation window.' },
        { label: 'Publish contracts', detail: 'Schema registry, sample payloads, validation rules teams can test against.' }
      ]
    },
    keywords: [
      { t: 'Canonical data model', w: 5 },
      { t: 'Business semantics', w: 5 },
      { t: 'Source to target mapping', w: 4 },
      { t: 'Schema versioning', w: 4 },
      { t: 'Entity scope', w: 4 },
      { t: 'Data contract', w: 4 },
      { t: 'Reference data', w: 3 },
      { t: 'Backward compatibility', w: 3 },
      { t: 'Schema registry', w: 3 },
      { t: 'Conformed dimension', w: 3 },
      { t: 'Attribute ownership', w: 3 }
    ],
    phrases: [
      'Canonical means neutral. If it looks like SAP, it is not canonical.',
      'Only model what crosses a boundary. Everything else stays local.',
      'Additive by default. Breaking changes get a deprecation window.',
      'The mapping document is where the disagreements finally get settled.'
    ],
    example: {
      org: 'Blue Cross Blue Shield of NC',
      headline: 'Enterprise canonical data model powering business transformation',
      detail: 'I architected the canonical model behind the transformation program. It gave 20+ integration touchpoints one contract to build against instead of each pair negotiating its own format.',
      metric: 'Integration build time fell about 40 percent through reusable canonical patterns.'
    }
  },
  {
    id: 'eda-platform-choice',
    role: 'enterprise-data-architect',
    theme: 'Platform',
    q: 'Lakehouse, warehouse or data mesh. How do you choose?',
    variants: [
      'Snowflake or Databricks? How do you decide?',
      'When does a warehouse stop being enough?'
    ],
    answer: 'Choose on workload shape, not on vendor preference. Structured SQL analytics and governance favor a warehouse. Heavy ML, streaming and unstructured data favor a lakehouse. Mesh is an ownership model that runs on either.',
    tags: ['platform', 'snowflake', 'databricks', 'lakehouse', 'warehouse', 'mesh'],
    framework: {
      name: 'Workload-Driven Platform Selection',
      source: 'Platform selection criteria, weighted',
      type: 'quadrant',
      axes: { x: ['Structured and SQL', 'Unstructured and code'], y: ['Batch analytics', 'Streaming and ML'] },
      nodes: [
        { label: 'Cloud warehouse', detail: 'Snowflake. BI, governed SQL, strong sharing and access control.', pos: 'tl' },
        { label: 'Lakehouse', detail: 'Databricks. Notebooks, ML, document and log data at volume.', pos: 'tr' },
        { label: 'Warehouse plus streams', detail: 'Snowflake with Snowpipe and dynamic tables for near real time.', pos: 'bl' },
        { label: 'Full lakehouse platform', detail: 'Delta plus MLflow plus streaming. One engine for the whole pipeline.', pos: 'br' }
      ]
    },
    keywords: [
      { t: 'Workload profile', w: 5 },
      { t: 'Lakehouse', w: 5 },
      { t: 'Cloud data warehouse', w: 5 },
      { t: 'Total cost of ownership', w: 4 },
      { t: 'Open table format', w: 4 },
      { t: 'Governance and access', w: 4 },
      { t: 'Skills in the team', w: 4 },
      { t: 'Data sharing', w: 3 },
      { t: 'Vendor lock-in', w: 3 },
      { t: 'Interoperability', w: 3 },
      { t: 'Concurrency', w: 2 }
    ],
    phrases: [
      'Pick on workload shape, then check the team can run it.',
      'Mesh is an ownership model. It is not a product you buy.',
      'Open table formats keep the exit door open.',
      'Two platforms is a defensible answer if the workloads are genuinely different.'
    ],
    example: {
      org: 'R2 Data Vision',
      headline: 'Lakehouse and ODS on AWS and Azure',
      detail: 'Clients had siloed sources and mixed workloads. Consolidating into a lakehouse with an operational data store underneath gave both the analytics layer and the operational reporting layer somewhere correct to sit.',
      metric: 'Time to insight moved from weeks to days.'
    }
  },
  {
    id: 'eda-rag-architecture',
    role: 'enterprise-data-architect',
    theme: 'AI',
    q: 'How do you design data architecture for AI and RAG?',
    variants: [
      'What does an enterprise RAG pipeline look like?',
      'How do you make unstructured content usable by an LLM?'
    ],
    answer: 'Treat the retrieval index as a governed data product. Curate the sources, chunk with structure preserved, carry permissions and metadata into the index, and combine vector search with a knowledge graph for anything relational.',
    tags: ['rag', 'ai', 'llm', 'vector', 'knowledge graph', 'embeddings'],
    framework: {
      name: 'Enterprise RAG Pipeline',
      source: 'RAG reference architecture with governance controls',
      type: 'flow',
      nodes: [
        { label: 'Source curation', detail: 'Approved documents and structured tables. Version and effective date captured.' },
        { label: 'Parse and chunk', detail: 'Preserve headings, tables and section context. Chunking decides answer quality.' },
        { label: 'Enrich metadata', detail: 'Entity tags, classification, permission labels, source and recency.' },
        { label: 'Index', detail: 'Vector store for similarity, graph or SQL for relationships and filters.' },
        { label: 'Retrieve and rank', detail: 'Hybrid search, metadata filters applied before the model sees anything.' },
        { label: 'Generate and cite', detail: 'Grounded answer with source links. No citation, no answer.' },
        { label: 'Evaluate', detail: 'Groundedness and relevance scored on a fixed question set every release.' }
      ]
    },
    keywords: [
      { t: 'Chunking strategy', w: 5 },
      { t: 'Vector store', w: 5 },
      { t: 'Knowledge graph', w: 5 },
      { t: 'Hybrid search', w: 4 },
      { t: 'Metadata filtering', w: 4 },
      { t: 'Permission propagation', w: 4 },
      { t: 'Embedding model', w: 4 },
      { t: 'Groundedness evaluation', w: 4 },
      { t: 'Citation', w: 3 },
      { t: 'Re-ranking', w: 3 },
      { t: 'Freshness and reindexing', w: 3 },
      { t: 'Golden question set', w: 3 }
    ],
    phrases: [
      'Chunking decides answer quality more than the model choice does.',
      'Filter on metadata before retrieval, not after generation.',
      'No citation, no answer. That rule alone removes most of the risk.',
      'Structured metadata plus unstructured text beats either one alone.'
    ],
    example: {
      org: 'Parexel International',
      headline: 'Knowledge LLM pipeline across clinical metadata and protocol documents',
      detail: 'I designed the pipeline joining structured clinical metadata with unstructured protocol text through RAG. The metadata layer is what made filtered, governed retrieval possible across a global study portfolio.',
      metric: 'Analyst research time down about 60 percent with auditable data access.'
    }
  },
  {
    id: 'eda-modeling-approach',
    role: 'enterprise-data-architect',
    theme: 'Modeling',
    q: 'Third normal form, dimensional or Data Vault. Which do you use?',
    variants: [
      'How do you model a modern data platform?',
      'Is dimensional modeling still relevant?'
    ],
    answer: 'Use all three, each in its layer. Normalized or Data Vault for the integrated history, dimensional for the consumption layer, and let the raw layer stay as it landed.',
    tags: ['modeling', 'data vault', 'dimensional', 'kimball', 'inmon', 'medallion'],
    framework: {
      name: 'Layered Modeling Stack',
      source: 'Medallion architecture with fit-for-purpose modeling per layer',
      type: 'layers',
      nodes: [
        { label: 'Consumption layer', detail: 'Dimensional. Star schemas and semantic models the business queries.' },
        { label: 'Integrated layer', detail: 'Data Vault or 3NF. History, source tracking, business keys, relationships.' },
        { label: 'Cleansed layer', detail: 'Typed, deduplicated, quality rules applied, conformed reference data.' },
        { label: 'Raw layer', detail: 'As landed, immutable, with load metadata. Replay starts here.' },
        { label: 'Semantic layer', detail: 'Metric definitions once, reused by BI and by AI. Prevents two versions of revenue.' }
      ]
    },
    keywords: [
      { t: 'Dimensional model', w: 5 },
      { t: 'Data Vault', w: 5 },
      { t: 'Medallion architecture', w: 4 },
      { t: 'Semantic layer', w: 5 },
      { t: 'Business key', w: 4 },
      { t: 'Slowly changing dimension', w: 4 },
      { t: 'Third normal form', w: 3 },
      { t: 'Conformed dimension', w: 3 },
      { t: 'Grain', w: 3 },
      { t: 'Historization', w: 3 },
      { t: 'Star schema', w: 3 }
    ],
    phrases: [
      'Model for the layer, not for the ideology.',
      'Data Vault earns its cost when sources change often and history matters.',
      'Define the grain before you draw anything.',
      'One semantic layer stops the two-versions-of-revenue argument.'
    ],
    example: {
      org: 'KPMG, Fortune 500 client',
      headline: 'Enterprise data models across Salesforce, SAP and SaaS sources',
      detail: 'I designed the enterprise models and schemas for the data hub supporting both real-time and batch integration. Separating the integrated layer from the consumption layer meant source changes did not break business reports.',
      metric: 'Business user time to insight moved from 3 weeks to 2 days.'
    }
  },
  {
    id: 'eda-lineage',
    role: 'enterprise-data-architect',
    theme: 'Governance',
    q: 'How do you design for data lineage and auditability?',
    variants: [
      'How do you prove where a number came from?',
      'What does end-to-end lineage require architecturally?'
    ],
    answer: 'Capture lineage from the pipeline itself, not from documentation. Every job emits what it read, wrote and transformed, and the catalog stitches it into a path from source system to the number on the report.',
    tags: ['lineage', 'metadata', 'audit', 'catalog', 'governance'],
    framework: {
      name: 'Lineage Capture Chain',
      source: 'Active metadata practice',
      type: 'flow',
      nodes: [
        { label: 'Instrument the pipeline', detail: 'Jobs emit run metadata automatically. Manual lineage goes stale in weeks.' },
        { label: 'Column-level capture', detail: 'Table level answers where. Column level answers why the number changed.' },
        { label: 'Catalog stitching', detail: 'One graph from source to report across tools and platforms.' },
        { label: 'Business overlay', detail: 'Link technical assets to glossary terms so the business can read it.' },
        { label: 'Impact analysis', detail: 'Change a source column, see every downstream report before you ship.' },
        { label: 'Evidence export', detail: 'Produce the trail for an auditor without a manual exercise.' }
      ]
    },
    keywords: [
      { t: 'Column-level lineage', w: 5 },
      { t: 'Active metadata', w: 5 },
      { t: 'Data catalog', w: 5 },
      { t: 'Impact analysis', w: 4 },
      { t: 'Business glossary link', w: 4 },
      { t: 'Audit evidence', w: 4 },
      { t: 'OpenLineage', w: 3 },
      { t: 'Run metadata', w: 3 },
      { t: 'Traceability', w: 3 },
      { t: 'Change management', w: 3 }
    ],
    phrases: [
      'Lineage drawn by hand is out of date before the meeting ends.',
      'Table-level lineage tells you where. Column-level tells you why.',
      'Impact analysis is what turns lineage from a diagram into a tool.',
      'The auditor should get the trail exported, not assembled.'
    ],
    example: {
      org: 'Parexel International',
      headline: 'Audit-ready lineage across multi-study clinical portfolios',
      detail: 'The governance and quality roadmap treated lineage as a platform output rather than a documentation task. That is what made the trail defensible across studies and reduced the reconciliation burden downstream.',
      metric: 'Downstream reconciliation effort fell about 40 percent.'
    }
  },
  {
    id: 'eda-realtime-batch',
    role: 'enterprise-data-architect',
    theme: 'Platform',
    q: 'How do you decide between real-time and batch?',
    variants: [
      'The business says they need real time. How do you respond?',
      'When is streaming worth the complexity?'
    ],
    answer: 'Work backward from the decision. Ask what action changes if the data is one minute old versus one hour old. Stream only where the answer is a real action, and run batch everywhere else.',
    tags: ['streaming', 'batch', 'real time', 'latency', 'kafka', 'cdc'],
    framework: {
      name: 'Latency Requirement Test',
      source: 'Latency-driven design',
      type: 'flow',
      nodes: [
        { label: 'Name the decision', detail: 'What action does this data trigger and who takes it.' },
        { label: 'Test the latency', detail: 'What breaks at one hour that does not break at one minute.' },
        { label: 'Pick the pattern', detail: 'Streaming, change data capture, micro-batch, or nightly batch.' },
        { label: 'Price the complexity', detail: 'Streaming brings ordering, replay, state and on-call cost.' },
        { label: 'Design for correction', detail: 'Late and out-of-order events need a defined handling rule.' },
        { label: 'Reconcile', detail: 'A batch check against the stream. Catches drift nobody would otherwise see.' }
      ]
    },
    keywords: [
      { t: 'Latency requirement', w: 5 },
      { t: 'Change data capture', w: 5 },
      { t: 'Micro-batch', w: 4 },
      { t: 'Event streaming', w: 4 },
      { t: 'Exactly once', w: 3 },
      { t: 'Late arriving data', w: 4 },
      { t: 'Idempotency', w: 4 },
      { t: 'Replay', w: 3 },
      { t: 'Reconciliation', w: 4 },
      { t: 'Operational cost', w: 3 },
      { t: 'Backpressure', w: 2 }
    ],
    phrases: [
      'Ask what action changes. Most real-time requests do not survive that question.',
      'Change data capture covers most of what people call real time.',
      'Streaming is a permanent on-call commitment, not a one-time build.',
      'Always run a batch reconciliation against the stream.'
    ],
    example: {
      org: 'Bank of America, AML program',
      headline: 'Transaction hub built for genuine real-time detection',
      detail: 'Suspicious activity detection is a case where latency changes the action, so streaming was justified. Integrating 15+ sources with reconciliation built in kept the numbers defensible to regulators.',
      metric: 'SAR filing accuracy improved 30 percent. OCC and FinCEN obligations met on schedule.'
    }
  },
  {
    id: 'eda-migration',
    role: 'enterprise-data-architect',
    theme: 'Delivery',
    q: 'How do you approach a large data migration?',
    variants: [
      'Walk me through a migration you led.',
      'How do you de-risk a cutover?'
    ],
    answer: 'Profile before you plan, migrate in waves with both systems running, and reconcile at every step with counts and business checks. Cutover should be the least eventful day of the project.',
    tags: ['migration', 'sap', 'cutover', 'delivery', 'reconciliation'],
    framework: {
      name: 'Migration Delivery Pattern',
      source: 'Large-scale data migration practice',
      type: 'flow',
      nodes: [
        { label: 'Profile the source', detail: 'Volumes, quality, duplicates, orphans. Surprises found here are cheap.' },
        { label: 'Scope and rules', detail: 'What moves, what archives, what gets fixed first. Signed by the business.' },
        { label: 'Map and build', detail: 'Source to target with transformation rules under version control.' },
        { label: 'Mock runs', detail: 'Repeated full-volume rehearsals. Each one times the cutover window.' },
        { label: 'Reconcile', detail: 'Row counts, control totals, and business validations the users recognize.' },
        { label: 'Cutover and coexist', detail: 'Parallel run, rollback plan, defined fallback trigger.' },
        { label: 'Hypercare', detail: 'Two to four weeks of daily checks with a named owner per domain.' }
      ]
    },
    keywords: [
      { t: 'Data profiling', w: 5 },
      { t: 'Reconciliation', w: 5 },
      { t: 'Mock run', w: 5 },
      { t: 'Cutover plan', w: 4 },
      { t: 'Rollback', w: 4 },
      { t: 'Parallel run', w: 4 },
      { t: 'Control totals', w: 4 },
      { t: 'Cleanse at source', w: 3 },
      { t: 'Archive strategy', w: 3 },
      { t: 'Hypercare', w: 3 },
      { t: 'Business sign-off', w: 3 }
    ],
    phrases: [
      'Profile first. Every surprise found in profiling is cheap.',
      'Cleanse at source where you can. Transformation rules are where cleansing goes to hide.',
      'Three mock runs at full volume, or the cutover window is a guess.',
      'Cutover day should be boring.'
    ],
    example: {
      org: 'KPMG, global pharmaceutical client',
      headline: 'Global SAP data migration rollout',
      detail: 'I architected and led delivery across the rollout. Repeated full-volume mock runs and business-recognizable reconciliation checks were what kept each country cutover predictable.',
      metric: 'Delivered across a global rollout for a large pharmaceutical client.'
    }
  },
  {
    id: 'eda-metadata-catalog',
    role: 'enterprise-data-architect',
    theme: 'Governance',
    q: 'How do you design metadata management and a data catalog?',
    variants: [
      'Nobody uses our catalog. How would you fix that?',
      'What makes a catalog useful rather than shelfware?'
    ],
    answer: 'Automate the harvesting, curate only the assets people search for, and put the catalog in the path of daily work. A catalog maintained by hand becomes wrong, and a wrong catalog gets abandoned.',
    tags: ['catalog', 'metadata', 'glossary', 'axon', 'discovery'],
    framework: {
      name: 'Catalog That Gets Used',
      source: 'Metadata management practice',
      type: 'layers',
      nodes: [
        { label: 'Search and discovery', detail: 'Business language search. Certified badge, owner, freshness, sample.' },
        { label: 'Business glossary', detail: 'Terms linked to physical assets so meaning and table are one click apart.' },
        { label: 'Curation', detail: 'Certify the top assets people actually query. Ignore the long tail at first.' },
        { label: 'Automated harvesting', detail: 'Technical metadata and lineage pulled from platforms on a schedule.' },
        { label: 'Active integration', detail: 'Catalog surfaced in the BI tool and the IDE, not only in its own web page.' }
      ]
    },
    keywords: [
      { t: 'Business glossary', w: 5 },
      { t: 'Automated harvesting', w: 5 },
      { t: 'Certified dataset', w: 4 },
      { t: 'Data discovery', w: 4 },
      { t: 'Active metadata', w: 4 },
      { t: 'Ownership and stewardship', w: 4 },
      { t: 'Freshness indicator', w: 3 },
      { t: 'AXON', w: 3 },
      { t: 'Search relevance', w: 3 },
      { t: 'Adoption metrics', w: 3 }
    ],
    phrases: [
      'Curate the top 100 assets, not all 10,000.',
      'A certified badge with an owner beats a full description nobody wrote.',
      'Surface the catalog inside the BI tool where people already are.',
      'Measure searches and reuse, not how many assets are documented.'
    ],
    example: {
      org: 'KPMG, Fortune 500 client',
      headline: 'AXON catalog inside the Informatica IDMC deployment',
      detail: 'The catalog was deployed alongside MDM and data quality so glossary terms, certified assets and quality scores appeared together. Users could see whether a dataset was trusted at the moment they found it.',
      metric: 'Business user time to insight moved from 3 weeks to 2 days.'
    }
  },
  {
    id: 'eda-cost-control',
    role: 'enterprise-data-architect',
    theme: 'Platform',
    q: 'How do you control cost on a cloud data platform?',
    variants: [
      'Our Snowflake bill tripled. What do you look at?',
      'How do you design for cost efficiency?'
    ],
    answer: 'Attribute cost to a team before you try to reduce it. Then work the big three: compute sizing and auto-suspend, storage and retention, and the queries or pipelines that repeat expensive work.',
    tags: ['finops', 'cost', 'snowflake', 'databricks', 'optimization'],
    framework: {
      name: 'Data Platform Cost Control',
      source: 'FinOps applied to data platforms',
      type: 'pillars',
      base: 'Attribution first. You cannot manage a bill nobody owns',
      nodes: [
        { label: 'Attribution', detail: 'Tag every warehouse, job and dataset to a team and a use case.' },
        { label: 'Compute discipline', detail: 'Right-size, auto-suspend, separate workloads, cap runaway queries.' },
        { label: 'Storage and retention', detail: 'Partitioning, clustering, time travel windows, drop the abandoned copies.' },
        { label: 'Pipeline efficiency', detail: 'Incremental over full refresh. Materialize what gets read repeatedly.' }
      ]
    },
    keywords: [
      { t: 'Cost attribution', w: 5 },
      { t: 'Auto-suspend', w: 4 },
      { t: 'Warehouse sizing', w: 4 },
      { t: 'Incremental processing', w: 4 },
      { t: 'Partitioning and clustering', w: 4 },
      { t: 'Retention window', w: 3 },
      { t: 'Query optimization', w: 4 },
      { t: 'Showback', w: 3 },
      { t: 'Materialized view', w: 3 },
      { t: 'Workload isolation', w: 3 },
      { t: 'Idle spend', w: 2 }
    ],
    phrases: [
      'Nobody optimizes a bill they cannot see.',
      'Full refresh is the most common expensive habit.',
      'Separate warehouses per workload so one bad query does not slow everyone.',
      'Showback changes behavior faster than a policy does.'
    ],
    example: {
      org: 'KPMG, Fortune 500 client',
      headline: 'Snowflake platform designed with workload separation from day one',
      detail: 'Warehouses were separated by workload and tagged by consumer group, so cost was visible per team from the start. That made sizing conversations factual instead of political.',
      metric: 'Self-service analytics delivered without the usual contention between BI and data engineering.'
    }
  },
  {
    id: 'eda-knowledge-graph',
    role: 'enterprise-data-architect',
    theme: 'AI',
    q: 'When do you use a knowledge graph?',
    variants: [
      'Why a graph database instead of a relational one?',
      'How does a knowledge graph help with AI?'
    ],
    answer: 'Use a graph when the relationships are the question. Entity resolution, multi-hop traversal and semantic context are where graphs beat joins, and they give an LLM structure that vector search alone cannot.',
    tags: ['knowledge graph', 'neo4j', 'graph', 'semantic', 'entity resolution', 'ai'],
    framework: {
      name: 'Knowledge Graph Fit',
      source: 'Graph and semantic modeling practice',
      type: 'radial',
      hub: 'Entities, relationships and meaning in one queryable structure',
      nodes: [
        { label: 'Entity resolution', detail: 'Find the same party across systems through relationship evidence.' },
        { label: 'Multi-hop questions', detail: 'Which investigators worked on studies of this type for this sponsor.' },
        { label: 'Semantic context for AI', detail: 'Ground the model in real relationships instead of similar-sounding text.' },
        { label: 'Hierarchy and rollup', detail: 'Legal, sales and location hierarchies that change shape over time.' },
        { label: 'Lineage and impact', detail: 'Lineage is a graph problem. Traversal is the whole point.' },
        { label: 'Where not to use it', detail: 'High-volume aggregation and reporting stay in columnar storage.' }
      ]
    },
    keywords: [
      { t: 'Entity resolution', w: 5 },
      { t: 'Knowledge graph', w: 5 },
      { t: 'Multi-hop traversal', w: 4 },
      { t: 'Ontology', w: 4 },
      { t: 'Neo4j', w: 4 },
      { t: 'GraphRAG', w: 4 },
      { t: 'Semantic layer', w: 3 },
      { t: 'Hierarchy management', w: 3 },
      { t: 'Relationship inference', w: 3 },
      { t: 'RDF and property graph', w: 2 }
    ],
    phrases: [
      'Use a graph when the relationships are the question.',
      'Graphs do not replace the warehouse. They answer different questions.',
      'A graph gives the model structure that similarity search cannot.',
      'If your query has four joins and a recursive CTE, look at a graph.'
    ],
    example: {
      org: 'Blue Cross Blue Shield of NC',
      headline: 'Neo4j for MDM entity resolution',
      detail: 'I introduced graph technology for entity resolution in the master data program. Relationship evidence caught duplicate members that attribute matching alone was missing.',
      metric: 'Duplicate master records fell about 35 percent and it set the foundation for the enterprise MDM program.'
    }
  }
];
