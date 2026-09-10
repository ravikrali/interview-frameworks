import { roleById, themesFor, byRole, roles } from '../data/index.js';
import { escapeHtml } from '../lib/search.js';

export function renderRole(id) {
  const role = roleById[id];
  if (!role) return `<section class="section"><h2>Role not found</h2><p><a class="btn" href="#/">Back to home</a></p></section>`;

  const groups = themesFor(id);
  const total = byRole(id).length;

  const body = groups.map((g, gi) => `
    <div class="theme-block reveal" style="--i:${gi}">
      <h3 class="theme-title"><span>${escapeHtml(g.theme)}</span><em>${g.items.length}</em></h3>
      <ul class="q-list">
        ${g.items.map(q => `
          <li>
            <a class="q-item" href="#/q/${q.id}">
              <span class="q-item-main">
                <span class="q-item-q">${escapeHtml(q.q)}</span>
                <span class="q-item-a">${escapeHtml(q.answer)}</span>
                ${q.variants.length ? `<span class="q-item-var">${q.variants.length} variation${q.variants.length > 1 ? 's' : ''} &middot; ${escapeHtml(q.framework.name)}</span>` : ''}
              </span>
              <span class="q-item-go" aria-hidden="true">&rarr;</span>
            </a>
          </li>`).join('')}
      </ul>
    </div>`).join('');

  const others = roles.filter(r => r.id !== id).map(r =>
    `<a class="pill" href="#/role/${r.id}">${escapeHtml(r.short)}</a>`).join('');

  return `
  <nav class="crumb"><a href="#/">Home</a><span>/</span><b>${escapeHtml(role.name)}</b></nav>
  <header class="role-head">
    <div>
      <p class="eyebrow">Role track</p>
      <h1>${escapeHtml(role.name)}</h1>
      <p class="lede">${escapeHtml(role.summary)}</p>
      <div class="tag-row">${role.focus.map(f => `<span class="tag">${escapeHtml(f)}</span>`).join('')}</div>
    </div>
    <div class="role-head-stat"><strong>${total}</strong><span>questions</span></div>
  </header>
  <section class="section">${body}</section>
  <section class="section">
    <div class="section-head"><h2>Switch role</h2></div>
    <div class="pill-row">${others}</div>
  </section>`;
}
