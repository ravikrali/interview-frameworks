import { questions, roleById } from '../data/index.js';
import { renderDiagram } from '../lib/diagram.js';
import { escapeHtml } from '../lib/search.js';

export function renderFrameworks() {
  const seen = new Set();
  const list = questions.filter(q => {
    if (seen.has(q.framework.name)) return false;
    seen.add(q.framework.name);
    return true;
  });

  const cards = list.map((q, i) => {
    const role = roleById[q.role];
    return `<a class="fwlib-card reveal" style="--i:${Math.min(i, 12)}" href="#/q/${q.id}">
      <div class="fwlib-thumb">${renderDiagram(q.framework)}</div>
      <div class="fwlib-body">
        <span class="fwlib-meta">${escapeHtml(role ? role.short : '')} &middot; ${escapeHtml(q.theme)}</span>
        <h3>${escapeHtml(q.framework.name)}</h3>
        <p class="fwlib-src">${escapeHtml(q.framework.source)}</p>
        <p class="fwlib-q">${escapeHtml(q.q)}</p>
      </div>
    </a>`;
  }).join('');

  return `
  <nav class="crumb"><a href="#/">Home</a><span>/</span><b>Framework library</b></nav>
  <header class="role-head">
    <div>
      <p class="eyebrow">Reference</p>
      <h1>Framework library</h1>
      <p class="lede">Every response structure in one place. Drawn from TOGAF, DAMA DMBOK, entity resolution practice and standard consulting models. Click any card to open the question it answers.</p>
    </div>
    <div class="role-head-stat"><strong>${list.length}</strong><span>frameworks</span></div>
  </header>
  <section class="section"><div class="fwlib-grid">${cards}</div></section>`;
}
