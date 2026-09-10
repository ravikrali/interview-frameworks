export default [
  {
    id: 'dea-build-function',
    role: 'director-ea',
    theme: 'Operating Model',
    q: 'How do you build an enterprise architecture function from scratch?',
    variants: [
      'There is no EA practice here today. Where do you start?',
      'What does your EA operating model look like?'
    ],
    answer: 'Pick two or three problems the leadership team already complains about and solve them first. Publish a thin set of standards, stand up a light review path, then grow the team against demand you have proven.',
    tags: ['operating model', 'ea function', 'startup', 'governance', 'leadership'],
    framework: {
      name: 'EA Function Build-Out',
      source: 'TOGAF Preliminary Phase plus practice build experience',
      type: 'flow',
      nodes: [
        { label: 'Find the pain', detail: 'Two or three problems executives already name. Duplicate spend, failed audits, slow integration.' },
        { label: 'Early win', detail: 'Ship one visible fix in the first quarter before asking for anything.' },
        { label: 'Thin standards', detail: 'Ten principles, a handful of patterns. Not a 200-page framework.' },
        { label: 'Light governance', detail: 'Risk-tiered review with a published turnaround time.' },
        { label: 'Team and roles', detail: 'Domain architects near the business, a small core for standards and tooling.' },
        { label: 'Measure and grow', detail: 'Report value quarterly. Add headcount against proven demand.' }
      ]
    },
    keywords: [
      { t: 'Operating model', w: 5 },
      { t: 'Early win', w: 5 },
      { t: 'Architecture principles', w: 4 },
      { t: 'Federated architects', w: 4 },
      { t: 'Governance cadence', w: 4 },
      { t: 'Capability model', w: 3 },
      { t: 'Charter and mandate', w: 3 },
      { t: 'Executive sponsor', w: 4 },
      { t: 'Maturity roadmap', w: 3 },
      { t: 'Community of practice', w: 2 },
      { t: 'Tooling and repository', w: 2 }
    ],
    phrases: [
      'Earn the mandate with a win before you ask for the authority.',
      'Ten principles people remember beat a framework nobody opens.',
      'Domain architects sit with the business. The core team owns standards and tools.',
      'I grow the team against demand I can point to.'
    ],
    example: {
      org: 'Parexel International',
      headline: 'Enterprise architecture practice across clinical and commercial',
      detail: 'The opening move was the Architecture Review Board covering data platform investments. It gave the function a visible decision right, and standards followed from the decisions the board was already making.',
      metric: 'Coverage across 8+ business domains including clinical data management, finance, scheduling and site management.'
    }
  },
  {
    id: 'dea-exec-funding',
    role: 'director-ea',
    theme: 'Executive Influence',
    q: 'How do you get executives to fund architecture work?',
    variants: [
      'How do you build a business case for a platform investment?',
      'The CFO sees architecture as overhead. What is your pitch?'
    ],
    answer: 'Tie the ask to a number the executive already owns. Frame it as cost, risk or speed against their plan, offer a staged commitment, and bring evidence from a small pilot rather than a slide.',
    tags: ['business case', 'funding', 'executive', 'roi', 'influence'],
    framework: {
      name: 'Executive Business Case',
      source: 'Consulting business case structure, staged funding',
      type: 'flow',
      nodes: [
        { label: 'Their number', detail: 'Start from a metric the executive is measured on this year.' },
        { label: 'Cost of doing nothing', detail: 'Run cost, audit exposure, delivery drag. Quantified, sourced.' },
        { label: 'Options with prices', detail: 'Three options including the cheap one. Never a single path.' },
        { label: 'Staged funding', detail: 'Fund the pilot, then the wave, then the scale. Exit points at each stage.' },
        { label: 'Evidence', detail: 'Pilot results or a peer benchmark. Something outside your own opinion.' },
        { label: 'Benefit tracking', detail: 'Named owner reports the benefit after go-live. This is what buys the next ask.' }
      ]
    },
    keywords: [
      { t: 'Cost of doing nothing', w: 5 },
      { t: 'Staged funding', w: 5 },
      { t: 'Business outcome', w: 4 },
      { t: 'Executive sponsor', w: 4 },
      { t: 'Total cost of ownership', w: 4 },
      { t: 'Risk exposure', w: 4 },
      { t: 'Options analysis', w: 3 },
      { t: 'Benefit tracking', w: 3 },
      { t: 'Pilot evidence', w: 3 },
      { t: 'Portfolio trade-off', w: 3 },
      { t: 'Payback period', w: 2 }
    ],
    phrases: [
      'I open with the number they are already measured on.',
      'Give them three options with prices, not one recommendation.',
      'Stage the funding so they can stop after the pilot.',
      'Report the benefit after go-live. That is what funds the next request.'
    ],
    example: {
      org: 'KPMG, Digital Lighthouse',
      headline: 'Executive workshops that converted vision into funded roadmaps',
      detail: 'I ran workshops translating business vision into prioritized data roadmaps, then sequenced them as staged investments. Leaders could see what they were buying in each phase and where they could stop.',
      metric: 'Secured C-suite approval for multi-year data programs across Fortune 500 clients.'
    }
  },
  {
    id: 'dea-standards-speed',
    role: 'director-ea',
    theme: 'Governance',
    q: 'How do you set architecture standards without slowing delivery?',
    variants: [
      'Teams say governance blocks them. How do you respond?',
      'How do you balance standardization and autonomy?'
    ],
    answer: 'Give teams a paved road that is easier than the alternative. Automate the checks that can be automated, reserve human review for high-risk changes, and publish a clear exception path so nobody has to go around you.',
    tags: ['governance', 'standards', 'delivery', 'guardrails', 'autonomy'],
    framework: {
      name: 'Paved Road Governance',
      source: 'Platform engineering practice plus TOGAF governance',
      type: 'pillars',
      base: 'Standards work when the compliant path is the fastest path',
      nodes: [
        { label: 'Paved road', detail: 'Reference patterns, templates and shared services teams can pick up in a day.' },
        { label: 'Automated checks', detail: 'Policy as code in the pipeline. Fails fast, no meeting required.' },
        { label: 'Human review where it counts', detail: 'Regulatory, high spend, cross-domain, novel pattern.' },
        { label: 'Open exception path', detail: 'Published, quick, with expiry. Going around you should never be easier.' }
      ]
    },
    keywords: [
      { t: 'Paved road', w: 5 },
      { t: 'Guardrails not gates', w: 5 },
      { t: 'Policy as code', w: 4 },
      { t: 'Reference patterns', w: 4 },
      { t: 'Risk-based review', w: 4 },
      { t: 'Shared services', w: 3 },
      { t: 'Exception with expiry', w: 3 },
      { t: 'Self-service compliance', w: 3 },
      { t: 'Developer experience', w: 3 },
      { t: 'Standards adoption rate', w: 2 }
    ],
    phrases: [
      'Make the compliant path the fastest path.',
      'Guardrails in the pipeline, not gates in a calendar.',
      'If teams route around governance, the process is the problem.',
      'I measure adoption of patterns, not attendance at reviews.'
    ],
    example: {
      org: 'Parexel International',
      headline: 'Tiered review so routine work never queued',
      detail: 'Integrations that followed a published pattern went ahead without a board slot. The board reviewed novel designs and anything touching regulated clinical data, which kept turnaround short for the majority of requests.',
      metric: 'Governance held across 8+ domains without becoming a delivery queue.'
    }
  },
  {
    id: 'dea-ignored-governance',
    role: 'director-ea',
    theme: 'Influence',
    q: 'What do you do when a delivery team ignores architecture governance?',
    variants: [
      'A team built something off-standard and it is in production. Now what?',
      'How do you handle repeated non-compliance?'
    ],
    answer: 'Find out why before you escalate. Most bypasses point to a standard that was slow, unclear or wrong. Fix the cause, agree a remediation date for what is live, and escalate only when the pattern repeats.',
    tags: ['influence', 'conflict', 'compliance', 'leadership', 'governance'],
    framework: {
      name: 'Non-Compliance Response Path',
      source: 'Architecture compliance practice',
      type: 'flow',
      nodes: [
        { label: 'Understand the driver', detail: 'Deadline, unclear standard, missing pattern, or disagreement. Ask first.' },
        { label: 'Assess the exposure', detail: 'Security, regulatory, cost, supportability. Size the actual risk.' },
        { label: 'Decide the path', detail: 'Grant a timed exception, remediate, or change the standard because they were right.' },
        { label: 'Fix the cause', detail: 'If the standard was the obstacle, publish a better pattern.' },
        { label: 'Track to closure', detail: 'Named owner, agreed date, visible on the same register as everything else.' },
        { label: 'Escalate on repeat', detail: 'Pattern of bypass goes to the sponsor with data, not with complaint.' }
      ]
    },
    keywords: [
      { t: 'Root cause', w: 5 },
      { t: 'Risk exposure', w: 4 },
      { t: 'Timed exception', w: 4 },
      { t: 'Remediation plan', w: 4 },
      { t: 'Standard revision', w: 4 },
      { t: 'Compliance assessment', w: 3 },
      { t: 'Escalation path', w: 3 },
      { t: 'Sponsor support', w: 3 },
      { t: 'Trust building', w: 3 }
    ],
    phrases: [
      'A bypass usually tells me something about my process.',
      'Size the exposure before you decide how loud to be.',
      'Sometimes the right outcome is that I change the standard.',
      'Escalate the pattern, not the incident.'
    ],
    example: {
      org: 'KPMG, Fortune 500 client',
      headline: 'A team that had outrun the published pattern',
      detail: 'A delivery team built a direct integration because the canonical pattern did not yet cover their entity. The fix was to extend the pattern and give them a dated path to move onto it, which was faster than arguing about the breach.',
      metric: 'The extended pattern became the default for later integrations.'
    }
  },
  {
    id: 'dea-team-building',
    role: 'director-ea',
    theme: 'Leadership',
    q: 'How do you build and grow an architecture team?',
    variants: [
      'How do you structure architects across domains?',
      'How do you develop architects who came up through engineering?'
    ],
    answer: 'Federate. Put domain architects close to the business, keep a small core for standards, patterns and tooling, and run a community of practice that makes the two halves one team.',
    tags: ['team', 'leadership', 'hiring', 'org design', 'development'],
    framework: {
      name: 'Federated Architecture Team',
      source: 'Hub and spoke operating model',
      type: 'radial',
      hub: 'Core EA team: principles, patterns, repository, review board',
      nodes: [
        { label: 'Domain architects', detail: 'Embedded with business units. Own the roadmap for their domain.' },
        { label: 'Data architecture', detail: 'Canonical models, governance, platform standards.' },
        { label: 'Solution architects', detail: 'Project level, work inside the published patterns.' },
        { label: 'Security and risk', detail: 'Standing seat, not a late review.' },
        { label: 'Community of practice', detail: 'Regular forum where patterns get proposed and challenged.' },
        { label: 'Career path', detail: 'Defined levels from solution to domain to enterprise architect.' }
      ]
    },
    keywords: [
      { t: 'Federated model', w: 5 },
      { t: 'Domain architect', w: 5 },
      { t: 'Community of practice', w: 4 },
      { t: 'Career ladder', w: 4 },
      { t: 'Business partnering', w: 4 },
      { t: 'Onshore and offshore', w: 3 },
      { t: 'Mentoring', w: 3 },
      { t: 'Succession', w: 3 },
      { t: 'Skills matrix', w: 2 },
      { t: 'Rotation', w: 2 }
    ],
    phrases: [
      'Architects who sit with the business hear the problem before it becomes a project.',
      'The core team owns the standard. The domains own the outcome.',
      'The hardest shift for a strong engineer is learning to write the decision down.',
      'A community of practice is where patterns get pressure tested.'
    ],
    example: {
      org: 'KPMG, Digital Lighthouse',
      headline: 'Delivery teams of 10 to 15 with P&L accountability',
      detail: 'I led cross-functional teams across onshore and offshore delivery. The structure that worked was senior architects owning client domains with a shared pattern library underneath, so quality did not depend on who was staffed.',
      metric: 'Multi-engagement portfolio delivered with full P&L accountability.'
    }
  },
  {
    id: 'dea-portfolio-priorities',
    role: 'director-ea',
    theme: 'Portfolio',
    q: 'How do you handle competing priorities against a fixed budget?',
    variants: [
      'Every executive says their project is first. How do you decide?',
      'How do you run portfolio prioritization?'
    ],
    answer: 'Publish the scoring criteria before anyone submits. Score against strategy fit, value, risk and dependency, show the ranked list to the group, and make the trade-off visible so the decision belongs to the leadership team.',
    tags: ['portfolio', 'prioritization', 'budget', 'governance', 'executive'],
    framework: {
      name: 'Portfolio Prioritization Model',
      source: 'Consulting portfolio scoring, weighted criteria',
      type: 'flow',
      nodes: [
        { label: 'Publish criteria', detail: 'Strategy fit, business value, risk reduction, dependency, capacity. Weighted upfront.' },
        { label: 'Score every request', detail: 'Same scale for everyone, including the sponsor with the loudest voice.' },
        { label: 'Map dependencies', detail: 'Some low-scoring work has to go first. Foundation before feature.' },
        { label: 'Show the line', detail: 'Rank the list, draw the funding line, name what falls below it.' },
        { label: 'Group decision', detail: 'Leadership decides together. Trading in the room beats lobbying afterward.' },
        { label: 'Rebalance quarterly', detail: 'Fixed review point so changes have a place to go.' }
      ]
    },
    keywords: [
      { t: 'Weighted scoring', w: 5 },
      { t: 'Strategy fit', w: 5 },
      { t: 'Dependency mapping', w: 4 },
      { t: 'Capacity constraint', w: 4 },
      { t: 'Funding line', w: 4 },
      { t: 'Trade-off transparency', w: 4 },
      { t: 'Quarterly rebalance', w: 3 },
      { t: 'Foundation investment', w: 3 },
      { t: 'Sponsor alignment', w: 3 },
      { t: 'Benefit case', w: 2 }
    ],
    phrases: [
      'Agree the criteria before anyone knows how their project scores.',
      'Draw the funding line in the room and name what falls under it.',
      'Foundation work often scores low and still has to go first. Say why.',
      'Quarterly rebalance gives late requests somewhere to go.'
    ],
    example: {
      org: 'Parexel International',
      headline: 'Board arbitration across 8 domains competing for data platform spend',
      detail: 'Clinical, finance, scheduling, site management and resourcing all had requests. Running them through one scored view meant the sequencing argument happened once, in front of everybody, instead of repeatedly in side conversations.',
      metric: 'Accountable for delivery quality, budget oversight and risk across the data and AI architecture portfolio.'
    }
  },
  {
    id: 'dea-first-90',
    role: 'director-ea',
    theme: 'Leadership',
    q: 'What would your first 90 days look like?',
    variants: [
      'How do you approach a new architecture leadership role?',
      'What would you change in your first quarter?'
    ],
    answer: 'Listen for the first month, publish a short assessment in the second, and ship one visible win in the third. Change nothing structural until you can name the top three problems in the words leaders use.',
    tags: ['onboarding', 'leadership', '90 days', 'assessment'],
    framework: {
      name: 'First 90 Days',
      source: 'Leadership transition practice',
      type: 'flow',
      nodes: [
        { label: 'Days 1-30: Listen', detail: '25+ conversations across business, delivery, security and finance. No proposals yet.' },
        { label: 'Days 1-30: Baseline', detail: 'Application portfolio, spend, open audit findings, in-flight programs.' },
        { label: 'Days 31-60: Assess', detail: 'Short written assessment. Top three problems, in their language, with evidence.' },
        { label: 'Days 31-60: Align', detail: 'Walk it to each executive individually before the group sees it.' },
        { label: 'Days 61-90: One win', detail: 'Fix something visible. A duplicate platform stopped, an audit finding closed.' },
        { label: 'Days 61-90: Roadmap', detail: 'Twelve-month plan with staged funding and named owners.' }
      ]
    },
    keywords: [
      { t: 'Listening tour', w: 5 },
      { t: 'Current state baseline', w: 5 },
      { t: 'Quick win', w: 5 },
      { t: 'Stakeholder map', w: 4 },
      { t: 'Written assessment', w: 4 },
      { t: 'Executive alignment', w: 4 },
      { t: 'Twelve-month roadmap', w: 3 },
      { t: 'Team assessment', w: 3 },
      { t: 'Credibility', w: 3 },
      { t: 'No surprises', w: 2 }
    ],
    phrases: [
      'I do not propose anything in the first month.',
      'The assessment uses their words, not architecture vocabulary.',
      'Walk it to each executive alone before the group meeting.',
      'One visible win by day 90 buys the next year of change.'
    ],
    example: {
      org: 'Parexel International',
      headline: 'Opened with the review board, not with a framework',
      detail: 'The visible early move was governing data platform investment. It answered a problem leaders were already naming, and it gave the architecture agenda a place to be decided rather than debated.',
      metric: 'Board became the entry point for the governance, MDM and data quality roadmap.'
    }
  },
  {
    id: 'dea-shifting-cio',
    role: 'director-ea',
    theme: 'Executive Influence',
    q: 'How do you work with a CIO whose priorities shift often?',
    variants: [
      'The strategy changed again mid-program. How do you respond?',
      'How do you keep a roadmap stable in a changing organization?'
    ],
    answer: 'Build the roadmap in modules that each deliver value on their own. Keep a standing view of what is committed against what is optional, and make the cost of each change visible at the moment it is requested.',
    tags: ['executive', 'change', 'roadmap', 'agility', 'stakeholders'],
    framework: {
      name: 'Modular Roadmap Under Change',
      source: 'Adaptive portfolio practice',
      type: 'pillars',
      base: 'Change is normal. Absorbing it without losing the foundation is the skill',
      nodes: [
        { label: 'Modular waves', detail: 'Each wave stands alone. Stopping after any one still leaves value delivered.' },
        { label: 'Committed versus optional', detail: 'A standing view of what is locked and what can move.' },
        { label: 'Priced change', detail: 'Every reprioritization comes with what it delays and what it costs.' },
        { label: 'Stable foundation', detail: 'Data, identity and integration layers stay funded through the churn.' }
      ]
    },
    keywords: [
      { t: 'Modular roadmap', w: 5 },
      { t: 'Cost of change', w: 5 },
      { t: 'Committed scope', w: 4 },
      { t: 'Foundation investment', w: 4 },
      { t: 'Optionality', w: 3 },
      { t: 'Rolling wave planning', w: 3 },
      { t: 'Stakeholder communication', w: 3 },
      { t: 'Dependency risk', w: 3 },
      { t: 'Scenario planning', w: 2 }
    ],
    phrases: [
      'Every wave has to be worth stopping after.',
      'Price the change in the same meeting it gets requested.',
      'The data and integration layers stay funded through the churn.',
      'I keep one list of what is committed and one of what can move.'
    ],
    example: {
      org: 'KPMG, Digital Lighthouse',
      headline: 'Multi-year programs with quarterly re-sequencing',
      detail: 'Client priorities moved regularly across a multi-engagement portfolio. Structuring roadmaps as independently valuable waves meant a reprioritization changed the order rather than restarting the design.',
      metric: 'Multi-year programs held C-suite support through repeated priority changes.'
    }
  },
  {
    id: 'dea-maturity',
    role: 'director-ea',
    theme: 'Value',
    q: 'How do you measure architecture maturity?',
    variants: [
      'How mature is our EA practice? How would you assess it?',
      'What does good look like for an EA function?'
    ],
    answer: 'Assess five dimensions on a five-level scale, publish the current and target level for each, and pick two to move per year. Maturity is only useful if it changes what gets funded.',
    tags: ['maturity', 'assessment', 'metrics', 'capability'],
    framework: {
      name: 'EA Maturity Dimensions',
      source: 'CMMI-style assessment adapted for architecture',
      type: 'pyramid',
      nodes: [
        { label: 'Level 5 Optimizing', detail: 'Architecture data drives portfolio decisions. Continuous pattern improvement.' },
        { label: 'Level 4 Measured', detail: 'Reuse, compliance and benefit tracked with numbers leaders trust.' },
        { label: 'Level 3 Defined', detail: 'Standards published, review board running, repository current.' },
        { label: 'Level 2 Repeatable', detail: 'Some patterns exist. Quality depends on who is on the project.' },
        { label: 'Level 1 Initial', detail: 'Architecture happens per project. No shared view of the estate.' }
      ]
    },
    keywords: [
      { t: 'Maturity assessment', w: 5 },
      { t: 'Standards adoption', w: 4 },
      { t: 'Repository currency', w: 4 },
      { t: 'Reuse rate', w: 4 },
      { t: 'Compliance rate', w: 4 },
      { t: 'Target maturity', w: 3 },
      { t: 'Capability gap', w: 3 },
      { t: 'Benchmarking', w: 3 },
      { t: 'Continuous improvement', w: 2 }
    ],
    phrases: [
      'Level 5 everywhere is a waste of money. Pick where it matters.',
      'Move two dimensions a year, not all five.',
      'A repository nobody updates scores level 1 no matter what the policy says.',
      'Maturity is only useful if it changes the funding conversation.'
    ],
    example: {
      org: 'KPMG, Fortune 500 clients',
      headline: 'Maturity assessment as the opening of a roadmap engagement',
      detail: 'Assessments across governance, metadata, quality and stewardship gave clients a defensible starting position. The target level per dimension was what made the multi-year investment case concrete.',
      metric: 'Clients used the assessment to secure funding and to pass regulatory audits.'
    }
  },
  {
    id: 'dea-difficult-stakeholder',
    role: 'director-ea',
    theme: 'Influence',
    q: 'Tell me about a difficult stakeholder you turned around.',
    variants: [
      'How do you win over someone who does not want you involved?',
      'Describe a time you had to influence without authority.'
    ],
    answer: 'Find what they are accountable for and solve a piece of it before you ask for anything. Opposition is usually about risk to their outcome, so reduce that risk and the position moves.',
    tags: ['behavioral', 'influence', 'stakeholders', 'star'],
    framework: {
      name: 'Influence Without Authority',
      source: 'Stakeholder management practice',
      type: 'flow',
      nodes: [
        { label: 'Name their stake', detail: 'What are they measured on and what do they think you threaten.' },
        { label: 'Listen in private', detail: 'One to one. Positions soften away from an audience.' },
        { label: 'Solve something small', detail: 'Pick a problem of theirs you can fix inside a few weeks.' },
        { label: 'Give them the credit', detail: 'Their name on the outcome, not yours.' },
        { label: 'Co-design the next step', detail: 'Bring them in early enough to shape it.' },
        { label: 'Keep the channel open', detail: 'Standing check-in so issues arrive early instead of at the board.' }
      ]
    },
    keywords: [
      { t: 'Stakeholder mapping', w: 5 },
      { t: 'Influence without authority', w: 5 },
      { t: 'Shared outcome', w: 4 },
      { t: 'Early involvement', w: 4 },
      { t: 'Credit sharing', w: 4 },
      { t: 'Trust building', w: 4 },
      { t: 'Risk to their goal', w: 3 },
      { t: 'Private conversation', w: 3 },
      { t: 'Co-design', w: 3 }
    ],
    phrases: [
      'Opposition is usually risk to something they own.',
      'Solve one of their problems before you bring them one of yours.',
      'Put their name on the outcome.',
      'The meeting is not where you change a mind. The conversation before it is.'
    ],
    example: {
      org: 'Bank of America, AML program',
      headline: 'Compliance leadership skeptical of a new data hub',
      detail: 'The concern was regulatory exposure during transition. Working through their reporting obligations first, and showing the audit trail before asking for the platform decision, moved the conversation from whether to when.',
      metric: 'SAR filing accuracy improved 30 percent and OCC and FinCEN obligations were met on schedule.'
    }
  }
];
