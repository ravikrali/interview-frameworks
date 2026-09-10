import { roles, byRole, stats, allThemes } from '../data/index.js';
import { termCount, roleKeywords } from '../data/role-keywords.js';
import { escapeHtml } from '../lib/search.js';

const ICONS = {
  blueprint: '<path d="M4 5h16v14H4z"/><path d="M4 10h16M9 5v14"/>',
  org: '<circle cx="12" cy="5" r="2.4"/><circle cx="5" cy="19" r="2.4"/><circle cx="19" cy="19" r="2.4"/><path d="M12 7.4v4.6M5 16.6V13h14v3.6"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.6 8.1-8 9-4.4-.9-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  model: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><path d="M10 6.5h4.5A2.5 2.5 0 0 1 17 9v5"/>',
  hub: '<circle cx="12" cy="12" r="3"/><circle cx="4" cy="6" r="2"/><circle cx="20" cy="6" r="2"/><circle cx="4" cy="18" r="2"/><circle cx="20" cy="18" r="2"/><path d="M6 7l3.5 3.5M18 7l-3.5 3.5M6 17l3.5-3.5M18 17l-3.5-3.5"/>'
};

function icon(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ICONS.blueprint}</svg>`;
}

export function renderHome() {
  const cards = roles.map((r, i) => {
    const count = byRole(r.id).length;
    return `<a class="role-card reveal" style="--i:${i}" href="#/role/${r.id}">
      <span class="role-card-icon">${icon(r.icon)}</span>
      <h3>${escapeHtml(r.name)}</h3>
      <p>${escapeHtml(r.tagline)}</p>
      <ul class="role-card-focus">${r.focus.slice(0, 3).map(f => `<li>${escapeHtml(f)}</li>`).join('')}</ul>
      <span class="role-card-foot"><strong>${count}</strong> questions<span class="role-card-go" aria-hidden="true">&rarr;</span></span>
    </a>`;
  }).join('');

  const kwRow = roles.map(r => `
    <a class="kwrow-card" href="#/role/${r.id}/keywords">
      <div>
        <strong>${escapeHtml(r.name)}</strong>
        <span>${termCount(r.id)} terms</span>
      </div>
      <em aria-hidden="true">&rarr;</em>
    </a>`).join('');

  const themes = allThemes().map(([t, n], i) =>
    `<a class="theme-chip reveal" style="--i:${i}" href="#/search?q=${encodeURIComponent(t)}">${escapeHtml(t)}<span>${n}</span></a>`
  ).join('');

  return `
  <section class="hero">
    <div class="hero-inner">
      <p class="eyebrow">Interview response frameworks</p>
      <h1>Structured answers for architecture and data leadership interviews.</h1>
      <p class="hero-sub">Pick a role or search a question. Each answer opens with a framework diagram, the words worth using, and a project reference you can talk through.</p>
      <div id="hero-search" class="search-host search-host-lg"></div>
      <p class="hero-hint">Try <button class="linklike" data-seed="modernization">modernization</button>, <button class="linklike" data-seed="data governance">data governance</button>, <button class="linklike" data-seed="match and merge">match and merge</button> or press <kbd>/</kbd></p>
    </div>
    <div class="hero-grid" aria-hidden="true"></div>
  </section>

  <section class="section">
    <div class="section-head">
      <h2>Roles</h2>
      <p>Five tracks today. The structure takes more without rework.</p>
    </div>
    <div class="role-grid">${cards}</div>
  </section>

  <section class="section">
    <div class="section-head">
      <h2>Keyword maps</h2>
      <p>The terms worth working into your answers, grouped and weighted per role.</p>
    </div>
    <div class="kwrow">${kwRow}</div>
  </section>

  <section class="section">
    <div class="section-head">
      <h2>How each answer is built</h2>
      <p>Same four parts every time, so you know where to look under pressure.</p>
    </div>
    <div class="how-grid">
      <div class="how-card reveal" style="--i:0"><span class="how-num">1</span><h3>Direct answer</h3><p>Two sentences you can say first, before you expand into detail.</p></div>
      <div class="how-card reveal" style="--i:1"><span class="how-num">2</span><h3>Framework diagram</h3><p>The dimensions to cover, drawn from TOGAF, DAMA DMBOK and consulting practice.</p></div>
      <div class="how-card reveal" style="--i:2"><span class="how-num">3</span><h3>Keyword map</h3><p>The terms that carry weight, sized by how much they matter in the answer.</p></div>
      <div class="how-card reveal" style="--i:3"><span class="how-num">4</span><h3>Project reference</h3><p>A short talking point from your own work, with the number attached.</p></div>
    </div>
  </section>

  <section class="section">
    <div class="section-head">
      <h2>Browse by theme</h2>
      <p>Cuts across roles. Useful when the panel mixes topics.</p>
    </div>
    <div class="theme-row">${themes}</div>
  </section>

  <section class="section">
    <div class="stat-strip">
      <div><strong>${stats.roles}</strong><span>Roles</span></div>
      <div><strong>${stats.questions}</strong><span>Questions</span></div>
      <div><strong>${stats.variants}</strong><span>Phrasing variations</span></div>
      <div><strong>${stats.frameworks}</strong><span>Frameworks</span></div>
      <div><strong>${Object.keys(roleKeywords).reduce((n, k) => n + termCount(k), 0)}</strong><span>Keyword terms</span></div>
    </div>
  </section>`;
}
