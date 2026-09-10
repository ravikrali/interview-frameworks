const routes = [];
let onNavigate = () => {};

export function route(pattern, handler) {
  const keys = [];
  const rx = new RegExp(
    '^' + pattern.replace(/:[a-zA-Z]+/g, m => { keys.push(m.slice(1)); return '([^/]+)'; }) + '$'
  );
  routes.push({ rx, keys, handler });
}

export function setNavigateHook(fn) { onNavigate = fn; }

export function current() {
  const raw = location.hash.replace(/^#/, '') || '/';
  const [path, qs] = raw.split('?');
  return { path: path || '/', query: new URLSearchParams(qs || '') };
}

export function go(href, replace = false) {
  const target = href.startsWith('#') ? href : '#' + href;
  if (location.hash === target) { resolve(); return; }
  if (replace) location.replace(target);
  else location.hash = target;
}

export function resolve() {
  const { path, query } = current();
  for (const r of routes) {
    const m = path.match(r.rx);
    if (m) {
      const params = {};
      r.keys.forEach((k, i) => { params[k] = decodeURIComponent(m[i + 1]); });
      onNavigate(path);
      r.handler(params, query);
      return;
    }
  }
  onNavigate(path);
  const fallback = routes[routes.length - 1];
  if (fallback) fallback.handler({}, query);
}

export function start() {
  window.addEventListener('hashchange', resolve);
  resolve();
}
