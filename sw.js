/* Interview Frameworks service worker.
   Precache the shell so the app opens offline, then serve cache-first
   for app assets and network-first for navigation. */

const VERSION = 'if-v1';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/css/app.css',
  './assets/js/app.js',
  './assets/js/lib/router.js',
  './assets/js/lib/search.js',
  './assets/js/lib/searchbox.js',
  './assets/js/lib/diagram.js',
  './assets/js/data/index.js',
  './assets/js/data/roles.js',
  './assets/js/data/q-enterprise-architect.js',
  './assets/js/data/q-director-ea.js',
  './assets/js/data/q-director-data-management.js',
  './assets/js/data/q-enterprise-data-architect.js',
  './assets/js/data/q-mdm-architect.js',
  './assets/js/views/home.js',
  './assets/js/views/role.js',
  './assets/js/views/question.js',
  './assets/js/views/frameworks.js',
  './assets/js/views/results.js',
  './assets/icons/icon.svg',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSION)
      .then(c => Promise.allSettled(CORE.map(u => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  if (url.origin !== location.origin && !url.host.includes('fonts.g')) return;

  e.respondWith(
    caches.match(req).then(hit => {
      if (hit) return hit;
      return fetch(req).then(res => {
        if (res && res.status === 200 && (res.type === 'basic' || res.type === 'cors')) {
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => hit);
    })
  );
});
