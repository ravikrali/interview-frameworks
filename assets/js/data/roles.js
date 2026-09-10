export const roles = [
  {
    id: 'enterprise-architect',
    name: 'Enterprise Architect',
    short: 'EA',
    tagline: 'Target state, decisions, and the path between them.',
    summary: 'Interviews test whether you can hold business strategy and technical detail in the same sentence. Expect scenario questions on modernization, build vs buy, and how you get an organization to follow a standard.',
    focus: ['Target-state design', 'Architecture governance', 'Modernization roadmaps', 'Integration patterns', 'Trade-off decisions'],
    accent: '#1b3a63',
    icon: 'blueprint'
  },
  {
    id: 'director-ea',
    name: 'Director, Enterprise Architecture',
    short: 'Dir EA',
    tagline: 'Build the function, fund the work, move the portfolio.',
    summary: 'The bar shifts from designing systems to running a practice. Panels probe how you stand up an EA function, win executive funding, and keep governance from becoming a bottleneck.',
    focus: ['Operating model', 'Executive influence', 'Portfolio and budget', 'Team building', 'Maturity and metrics'],
    accent: '#12294a',
    icon: 'org'
  },
  {
    id: 'director-data-management',
    name: 'Director, Data Management',
    short: 'Dir DM',
    tagline: 'Governance people use, quality leaders trust.',
    summary: 'Questions center on making governance stick, proving data quality in numbers, and surviving an audit. Regulated industry experience carries weight here.',
    focus: ['Governance programs', 'Stewardship model', 'Data quality KPIs', 'Regulatory readiness', 'AI readiness'],
    accent: '#1a4038',
    icon: 'shield'
  },
  {
    id: 'enterprise-data-architect',
    name: 'Enterprise Data Architect',
    short: 'EDA',
    tagline: 'Models, platforms, and the flow of data between them.',
    summary: 'Deep technical screening on modeling choices, platform selection, lineage, and AI-ready pipelines. Be ready to defend a design on a whiteboard.',
    focus: ['Canonical modeling', 'Lakehouse and warehouse', 'Lineage and metadata', 'Streaming vs batch', 'RAG and knowledge graphs'],
    accent: '#243b6b',
    icon: 'model'
  },
  {
    id: 'mdm-architect',
    name: 'MDM Architect',
    short: 'MDM',
    tagline: 'One trusted version of the entities that matter.',
    summary: 'Expect specifics: match rules, survivorship, hierarchy, and how the golden record flows back to source systems. Vendor comparison questions are common.',
    focus: ['MDM style selection', 'Match and merge', 'Survivorship rules', 'Hierarchies', 'Platform selection'],
    accent: '#5a2540',
    icon: 'hub'
  }
];

export const roleById = Object.fromEntries(roles.map(r => [r.id, r]));
