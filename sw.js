// Este código hace que la app sea instalable, pero obliga a que siempre 
// descargue tu código más reciente de internet, garantizando actualizaciones automáticas.
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Siempre busca la versión más nueva en la red
    event.respondWith(fetch(event.request));
});