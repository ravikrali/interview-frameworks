import { search, highlight, escapeHtml } from '../lib/search.js';

export function renderResults(query) {
  const q = (query || '').trim();
  const hits = q ? search(q, 40) : [];

  if (!q) {
    return `<nav class="crumb"><a href="#/">Home</a><span>/</span><b>Search</b></nav>
      <section class="section"><h1>Search</h1><p class="lede">Type in the bar above to find a question, a role or a framework.</p></section>`;
  }

  if (!hits.length) {
    return `<nav class="crumb"><a href="#/">Home</a><span>/</span><b>Search</b></nav>
      <section class="section">
        <h1>No match for &ldquo;${escapeHtml(q)}&rdquo;</h1>
        <p class="lede">Try a shorter term. Topic words like governance, matching, modernization or lineage tend to work best.</p>
        <p><a class="btn" href="#/">Back to home</a></p>
      </section>`;
  }

  const rows = hits.map((h, i) => `
    <a class="result-row reveal" style="--i:${Math.min(i, 14)}" href="${h.href}">
      <span class="result-kind result-kind-${h.kind}">${h.kind === 'role' ? 'Role' : h.kind === 'variant' ? 'Variation' : 'Question'}</span>
      <span class="result-main">
        <strong>${highlight(h.title, q)}</strong>
        <em>${escapeHtml(h.sub)}</em>
      </span>
      <span class="result-go" aria-hidden="true">&rarr;</span>
    </a>`).join('');

  return `
  <nav class="crumb"><a href="#/">Home</a><span>/</span><b>Search</b></nav>
  <header class="role-head">
    <div>
      <p class="eyebrow">Search</p>
      <h1>${hits.length} result${hits.length > 1 ? 's' : ''} for &ldquo;${escapeHtml(q)}&rdquo;</h1>
    </div>
  </header>
  <section class="section"><div class="result-list">${rows}</div></section>`;
}
