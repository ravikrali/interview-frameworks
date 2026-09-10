import { search, highlight, escapeHtml } from './search.js';
import { go } from './router.js';

let uid = 0;

const SB_LABEL = { role: 'Role', variant: 'Variation', keywords: 'Keywords', question: 'Q' };

export function mountSearch(host, opts = {}) {
  const id = 'sb' + (++uid);
  const placeholder = opts.placeholder || 'Search a question, role or framework';
  host.innerHTML = `
    <form class="sb" role="search" autocomplete="off">
      <svg class="sb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.6-3.6"/></svg>
      <input class="sb-input" type="text" id="${id}" placeholder="${escapeHtml(placeholder)}"
        aria-label="${escapeHtml(placeholder)}" role="combobox" aria-expanded="false"
        aria-controls="${id}-list" aria-autocomplete="list">
      <button class="sb-clear" type="button" aria-label="Clear search" hidden>&times;</button>
      <button class="sb-go" type="submit" aria-label="Search">Search</button>
      <ul class="sb-list" id="${id}-list" role="listbox" hidden></ul>
    </form>`;

  const form = host.querySelector('form');
  const input = host.querySelector('.sb-input');
  const list = host.querySelector('.sb-list');
  const clear = host.querySelector('.sb-clear');
  let hits = [];
  let active = -1;

  function close() {
    list.hidden = true;
    input.setAttribute('aria-expanded', 'false');
    active = -1;
  }

  function paint() {
    const q = input.value.trim();
    clear.hidden = !q;
    if (!q) { hits = []; close(); return; }
    hits = search(q, 8);
    if (!hits.length) {
      list.innerHTML = `<li class="sb-empty">No match. Try a shorter term.</li>`;
      list.hidden = false;
      input.setAttribute('aria-expanded', 'true');
      return;
    }
    list.innerHTML = hits.map((h, i) => `
      <li role="option" id="${id}-opt${i}" aria-selected="${i === active}" class="sb-opt${i === active ? ' is-active' : ''}" data-href="${h.href}">
        <span class="sb-kind sb-kind-${h.kind}">${SB_LABEL[h.kind] || 'Q'}</span>
        <span class="sb-text"><strong>${highlight(h.title, q)}</strong><em>${escapeHtml(h.sub)}</em></span>
      </li>`).join('');
    list.hidden = false;
    input.setAttribute('aria-expanded', 'true');
  }

  function move(delta) {
    if (list.hidden || !hits.length) return;
    active = (active + delta + hits.length) % hits.length;
    [...list.children].forEach((el, i) => {
      el.classList.toggle('is-active', i === active);
      el.setAttribute('aria-selected', i === active);
    });
    const el = list.children[active];
    if (el) el.scrollIntoView({ block: 'nearest' });
  }

  function pick(i) {
    const h = hits[i];
    if (!h) return;
    input.value = '';
    clear.hidden = true;
    close();
    input.blur();
    go(h.href);
  }

  input.addEventListener('input', paint);
  input.addEventListener('focus', () => { if (input.value.trim()) paint(); });

  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
    else if (e.key === 'Enter') {
      if (active >= 0) { e.preventDefault(); pick(active); }
    } else if (e.key === 'Escape') {
      if (!list.hidden) { close(); } else { input.value = ''; clear.hidden = true; input.blur(); }
    }
  });

  list.addEventListener('mousedown', e => {
    const li = e.target.closest('.sb-opt');
    if (!li) return;
    e.preventDefault();
    pick([...list.children].indexOf(li));
  });

  clear.addEventListener('click', () => { input.value = ''; clear.hidden = true; close(); input.focus(); });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q) return;
    close();
    input.blur();
    go('/search?q=' + encodeURIComponent(q));
  });

  document.addEventListener('click', e => { if (!host.contains(e.target)) close(); });

  return {
    focus() { input.focus(); input.select(); },
    setValue(v) { input.value = v; clear.hidden = !v; paint(); }
  };
}
