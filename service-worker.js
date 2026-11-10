// Офлайн-кэш. При изменении файлов увеличь номер версии, чтобы телефон забрал обновление.
const CACHE = 'time-cost-v6';
const FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }));
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

// Сначала сеть (чтобы обновления с GitHub подтягивались), при отсутствии сети — кэш.
self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then(function (res) {
        const copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(event.request, copy); });
        return res;
      })
      .catch(function () {
        return caches.match(event.request).then(function (r) { return r || caches.match('./index.html'); });
      })
  );
});
