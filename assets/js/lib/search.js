import { questions, roles } from '../data/index.js';
import { roleKeywords } from '../data/role-keywords.js';

const index = [];

roles.forEach(r => {
  index.push({
    kind: 'role',
    id: r.id,
    title: r.name,
    sub: r.tagline,
    href: `#/role/${r.id}`,
    hay: [r.name, r.short, r.tagline, ...r.focus].join(' ').toLowerCase()
  });

  const kw = roleKeywords[r.id];
  if (kw) {
    index.push({
      kind: 'keywords',
      id: r.id + '-kw',
      title: `${r.name} keyword map`,
      sub: `${kw.groups.length} groups of terms to work into your answers`,
      href: `#/role/${r.id}/keywords`,
      hay: ['keyword map keywords terms vocabulary', r.name, r.short,
        ...kw.groups.map(g => g.name),
        ...kw.groups.flatMap(g => g.terms.map(t => t.t))].join(' ').toLowerCase()
    });
  }
});

questions.forEach(q => {
  const role = roles.find(r => r.id === q.role);
  index.push({
    kind: 'question',
    id: q.id,
    title: q.q,
    sub: `${role ? role.name : ''} · ${q.theme}`,
    href: `#/q/${q.id}`,
    hay: [q.q, ...q.variants, ...q.tags, q.theme, q.framework.name, role ? role.name : '', ...q.keywords.map(k => k.t)]
      .join(' ')
      .toLowerCase()
  });
  q.variants.forEach((v, i) => {
    index.push({
      kind: 'variant',
      id: `${q.id}-v${i}`,
      title: v,
      sub: `Variation of: ${q.q}`,
      href: `#/q/${q.id}`,
      hay: (v + ' ' + q.tags.join(' ')).toLowerCase()
    });
  });
});

function scoreOne(entry, term) {
  const hay = entry.hay;
  const title = entry.title.toLowerCase();
  if (!hay.includes(term)) return 0;
  let s = 1;
  if (title.startsWith(term)) s += 10;
  else if (new RegExp('\\b' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).test(title)) s += 6;
  else if (title.includes(term)) s += 3;
  if (new RegExp('\\b' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).test(hay)) s += 2;
  return s;
}

export function search(query, limit = 8) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const scored = [];
  for (const entry of index) {
    let total = 0;
    let matchedAll = true;
    for (const t of terms) {
      const s = scoreOne(entry, t);
      if (s === 0) { matchedAll = false; break; }
      total += s;
    }
    if (!matchedAll) continue;
    if (entry.kind === 'role') total += 5;
    if (entry.kind === 'keywords') total += 2;
    if (entry.kind === 'question') total += 3;
    if (entry.kind === 'variant') total -= 6;
    scored.push({ ...entry, score: total });
  }
  const seen = new Set();
  return scored
    .sort((a, b) => b.score - a.score || a.title.length - b.title.length)
    .filter(e => {
      const key = e.kind === 'variant' ? e.title : e.href + e.title;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, limit);
}

export function highlight(text, query) {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return escapeHtml(text);
  let out = escapeHtml(text);
  terms.forEach(t => {
    const re = new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
    out = out.replace(re, '<mark>$1</mark>');
  });
  return out;
}

export function escapeHtml(s) {
  return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}
