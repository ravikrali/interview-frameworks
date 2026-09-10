import { route, start, setNavigateHook, current } from './lib/router.js';
import { mountSearch } from './lib/searchbox.js';
import { renderHome } from './views/home.js';
import { renderRole } from './views/role.js';
import { renderQuestion } from './views/question.js';
import { renderFrameworks } from './views/frameworks.js';
import { renderResults } from './views/results.js';
import { renderKeywords } from './views/keywords.js';
import { roles } from './data/index.js';

const view = document.getElementById('view');
const headerSearchHost = document.getElementById('header-search');
let headerSearch = null;
let heroSearch = null;

/* ---------- nav ---------- */
function buildNav() {
  const nav = document.getElementById('nav-roles');
  nav.innerHTML = roles.map(r =>
    `<a class="nav-link" href="#/role/${r.id}" data-path="/role/${r.id}">${r.short}</a>`
  ).join('') + `<a class="nav-link" href="#/frameworks" data-path="/frameworks">Frameworks</a>`;
}

function markActive(path) {
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('is-active', a.dataset.path === path);
  });
  document.body.classList.toggle('is-home', path === '/');
}

/* ---------- paint ---------- */
function paint(html, opts = {}) {
  const doSwap = () => {
    view.innerHTML = html;
    view.classList.remove('is-leaving');
    view.classList.add('is-entering');
    requestAnimationFrame(() => view.classList.remove('is-entering'));
    if (!opts.keepScroll) window.scrollTo(0, 0);
    observeReveals();
    if (opts.after) opts.after();
  };
  doSwap();
}

/* ---------- reveal on scroll ---------- */
let io = null;
function observeReveals() {
  if (!('IntersectionObserver' in window)) {
    view.querySelectorAll('.reveal').forEach(el => el.classList.add('is-in'));
    return;
  }
  if (io) io.disconnect();
  io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  view.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Safety net: nothing stays invisible if the observer never fires.
  clearTimeout(observeReveals.t);
  observeReveals.t = setTimeout(() => {
    view.querySelectorAll('.reveal:not(.is-in)').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-in');
    });
  }, 1400);
}

/* ---------- routes ---------- */
route('/', () => {
  paint(renderHome(), {
    after: () => {
      const host = document.getElementById('hero-search');
      if (host) {
        heroSearch = mountSearch(host, { placeholder: 'Ask a question. Try "how do you run an ARB"' });
        document.querySelectorAll('[data-seed]').forEach(b => {
          b.addEventListener('click', () => { heroSearch.setValue(b.dataset.seed); heroSearch.focus(); });
        });
      }
    }
  });
});

route('/role/:id/keywords', p => paint(renderKeywords(p.id)));
route('/role/:id', p => paint(renderRole(p.id)));
route('/q/:id', p => paint(renderQuestion(p.id)));
route('/frameworks', () => paint(renderFrameworks()));
route('/search', (p, query) => {
  const q = query.get('q') || '';
  paint(renderResults(q), { after: () => { if (headerSearch) headerSearch.setValue(q); } });
});
route('/(.*)', () => paint(renderHome(), {
  after: () => {
    const host = document.getElementById('hero-search');
    if (host) heroSearch = mountSearch(host);
  }
}));

setNavigateHook(markActive);

/* ---------- boot ---------- */
buildNav();
headerSearch = mountSearch(headerSearchHost, { placeholder: 'Search questions' });

document.addEventListener('keydown', e => {
  const tag = (e.target.tagName || '').toLowerCase();
  if (e.key === '/' && tag !== 'input' && tag !== 'textarea') {
    e.preventDefault();
    const isHome = current().path === '/';
    if (isHome && heroSearch) heroSearch.focus();
    else headerSearch.focus();
  }
});

document.getElementById('nav-toggle').addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});
document.getElementById('nav-roles').addEventListener('click', e => {
  if (e.target.closest('a')) document.body.classList.remove('nav-open');
});

start();

/* ---------- pwa ---------- */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
