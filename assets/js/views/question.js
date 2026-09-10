import { questionById, roleById, byRole, related } from '../data/index.js';
import { renderDiagram, renderLegend, renderKeywordMap } from '../lib/diagram.js';
import { escapeHtml } from '../lib/search.js';

export function renderQuestion(id) {
  const q = questionById[id];
  if (!q) return `<section class="section"><h2>Question not found</h2><p><a class="btn" href="#/">Back to home</a></p></section>`;

  const role = roleById[q.role];
  const siblings = byRole(q.role);
  const idx = siblings.findIndex(s => s.id === q.id);
  const prev = siblings[idx - 1];
  const next = siblings[idx + 1];
  const rel = related(q);

  const variants = q.variants.length ? `
    <div class="variants">
      <h2 class="mini-head">Also asked as</h2>
      <ul>${q.variants.map(v => `<li>${escapeHtml(v)}</li>`).join('')}</ul>
    </div>` : '';

  const phrases = q.phrases.map((p, i) =>
    `<li class="phrase reveal" style="--i:${i}"><span aria-hidden="true">&ldquo;</span>${escapeHtml(p)}</li>`).join('');

  const relHtml = rel.length ? `
    <section class="section">
      <div class="section-head"><h2>Related questions</h2></div>
      <div class="rel-grid">
        ${rel.map((r, i) => {
          const rr = roleById[r.role];
          return `<a class="rel-card reveal" style="--i:${i}" href="#/q/${r.id}">
            <span class="rel-role">${escapeHtml(rr ? rr.short : '')} &middot; ${escapeHtml(r.theme)}</span>
            <strong>${escapeHtml(r.q)}</strong>
          </a>`;
        }).join('')}
      </div>
    </section>` : '';

  return `
  <nav class="crumb">
    <a href="#/">Home</a><span>/</span>
    <a href="#/role/${q.role}">${escapeHtml(role ? role.name : 'Role')}</a><span>/</span>
    <b>${escapeHtml(q.theme)}</b>
  </nav>

  <header class="q-head">
    <p class="eyebrow">${escapeHtml(role ? role.name : '')} &middot; ${escapeHtml(q.theme)}</p>
    <h1>${escapeHtml(q.q)}</h1>
  </header>

  <section class="answer-card reveal">
    <span class="answer-flag">Answer first</span>
    <p>${escapeHtml(q.answer)}</p>
  </section>

  ${variants}

  <section class="section">
    <div class="section-head">
      <h2>Response framework</h2>
      <p>${escapeHtml(q.framework.name)} &middot; ${escapeHtml(q.framework.source)}</p>
    </div>
    <div class="fw-wrap">
      <div class="fw-canvas">${renderDiagram(q.framework)}</div>
      <aside class="kw-panel">
        <h3 class="mini-head">Keyword map</h3>
        ${renderKeywordMap(q.keywords)}
      </aside>
    </div>
    <div class="fw-detail">
      <h3 class="mini-head">What to cover in each step</h3>
      ${renderLegend(q.framework)}
    </div>
  </section>

  <section class="section">
    <div class="section-head"><h2>Lines worth using</h2></div>
    <ul class="phrase-list">${phrases}</ul>
  </section>

  <section class="section">
    <div class="example-card reveal">
      <span class="example-flag">Project reference</span>
      <p class="example-org">${escapeHtml(q.example.org)}</p>
      <h3>${escapeHtml(q.example.headline)}</h3>
      <p class="example-detail">${escapeHtml(q.example.detail)}</p>
      <p class="example-metric">${escapeHtml(q.example.metric)}</p>
    </div>
  </section>

  ${relHtml}

  <nav class="pager">
    ${prev ? `<a class="pager-link" href="#/q/${prev.id}"><span>Previous</span><strong>${escapeHtml(prev.q)}</strong></a>` : '<span></span>'}
    ${next ? `<a class="pager-link pager-next" href="#/q/${next.id}"><span>Next</span><strong>${escapeHtml(next.q)}</strong></a>` : '<span></span>'}
  </nav>`;
}
