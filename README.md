# Interview Frameworks

Response frameworks for enterprise architecture and data leadership interviews. Built as an offline-capable PWA so it loads fast and works without a connection.

**Live site:** https://ravikrali.github.io/interview-frameworks/

## What it does

Pick a role or search a question. Every answer page has the same four parts:

1. **Direct answer** in two sentences, ready to say first.
2. **Framework diagram** showing the dimensions to cover, drawn from TOGAF, DAMA DMBOK and standard consulting models.
3. **Keyword map** with the terms that carry weight, sized by importance.
4. **Project reference** with a short talking point and the number attached.

## Roles covered

| Role | Questions |
| --- | --- |
| Enterprise Architect | 10 |
| Director, Enterprise Architecture | 10 |
| Director, Data Management | 10 |
| Enterprise Data Architect | 10 |
| MDM Architect | 10 |

50 questions, 100 phrasing variations, 50 framework diagrams.

## Getting around

| Action | How |
| --- | --- |
| Search from anywhere | Press `/` |
| Move through suggestions | Arrow keys, then Enter |
| Close the suggestion list | `Escape` |
| Jump between roles | Top navigation |
| Browse every diagram | Framework library |
| Move through a role | Previous and Next at the bottom of each answer |

## Adding a role

1. Add an entry to `assets/js/data/roles.js`. The `icon` field takes one of `blueprint`, `org`, `shield`, `model`, `hub`.
2. Create `assets/js/data/q-<role-id>.js` following the shape of an existing file.
3. Import it in `assets/js/data/index.js` and spread it into `questions`.
4. Add the new file path to the `CORE` list in `sw.js` and bump `VERSION`.

The home page, search index, role pages and framework library all build themselves from that data. No other changes needed.

## Question shape

```js
{
  id: 'unique-id',
  role: 'role-id',
  theme: 'Governance',
  q: 'The question as an interviewer would ask it.',
  variants: ['Other phrasings of the same question.'],
  answer: 'Two sentences. The direct answer.',
  tags: ['keywords', 'for', 'search'],
  framework: {
    name: 'Framework name',
    source: 'Where it comes from',
    type: 'flow',              // flow | layers | quadrant | radial | pyramid | pillars
    nodes: [{ label: '...', detail: '...' }]
  },
  keywords: [{ t: 'Term', w: 5 }],   // w runs 1 to 5, 5 is largest
  phrases: ['Short lines worth saying out loud.'],
  example: { org: '...', headline: '...', detail: '...', metric: '...' }
}
```

Diagram types take extra fields: `quadrant` needs `axes` and a `pos` of `tl`, `tr`, `bl` or `br` on each node. `radial` takes `hub`. `pillars` takes `base`.

## Running it locally

Any static server works. The app uses ES modules, so opening `index.html` from the file system will not work.

```bash
python -m http.server 8000
```

Then open http://localhost:8000

## Stack

No framework, no build step. Vanilla ES modules, hash routing, SVG diagrams generated from the data, and a service worker for offline use. Edit a file, reload, done.
