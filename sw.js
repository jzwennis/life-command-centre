self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('glass-v1').then((cache) => cache.addAll([
      './',
      './index.html',
      './style.css'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});