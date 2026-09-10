import { roleById, roles } from '../data/index.js';
import { roleKeywords, topTerms, termCount } from '../data/role-keywords.js';
import { renderKeywordMap } from '../lib/diagram.js';
import { escapeHtml } from '../lib/search.js';

export function renderKeywords(id) {
  const role = roleById[id];
  const set = roleKeywords[id];
  if (!role || !set) {
    return `<section class="section"><h2>Keyword map not found</h2><p><a class="btn" href="#/">Back to home</a></p></section>`;
  }

  const top = topTerms(id);
  const total = termCount(id);

  const topCloud = top.map((t, i) =>
    `<span class="top-term" style="--i:${i}">${escapeHtml(t.t)}</span>`).join('');

  const groups = set.groups.map((g, i) => `
    <section class="kwgroup reveal" style="--i:${i}">
      <header class="kwgroup-head">
        <span class="kwgroup-num">${i + 1}</span>
        <div>
          <h2>${escapeHtml(g.name)}</h2>
          <p>${escapeHtml(g.hint)}</p>
        </div>
      </header>
      ${renderKeywordMap(g.terms)}
    </section>`).join('');

  const others = roles.filter(r => r.id !== id).map(r =>
    `<a class="pill" href="#/role/${r.id}/keywords">${escapeHtml(r.short)}</a>`).join('');

  return `
  <nav class="crumb">
    <a href="#/">Home</a><span>/</span>
    <a href="#/role/${id}">${escapeHtml(role.name)}</a><span>/</span>
    <b>Keyword map</b>
  </nav>

  <header class="role-head">
    <div>
      <p class="eyebrow">Keyword map</p>
      <h1>${escapeHtml(role.name)}</h1>
      <p class="lede">${escapeHtml(set.intro)}</p>
    </div>
    <div class="role-head-stat"><strong>${total}</strong><span>terms</span></div>
  </header>

  <section class="section">
    <div class="top-terms-card reveal">
      <h2 class="mini-head">Say these if you say nothing else</h2>
      <div class="top-terms">${topCloud}</div>
    </div>
  </section>

  <div class="kwgroups">${groups}</div>

  <section class="section">
    <div class="section-head"><h2>Keyword map for another role</h2></div>
    <div class="pill-row">${others}</div>
  </section>

  <nav class="pager">
    <a class="pager-link" href="#/role/${id}"><span>Back to</span><strong>${escapeHtml(role.name)} questions</strong></a>
    <a class="pager-link pager-next" href="#/frameworks"><span>Browse</span><strong>Framework library</strong></a>
  </nav>`;
}
