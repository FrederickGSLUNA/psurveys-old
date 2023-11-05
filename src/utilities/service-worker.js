const cacheName = 'project';
const cacheAssets = [
  '/',
  'Home.jsx',
  'Ayuda.jsx',
  'Mision.jsx',
  'Vision.jsx',
  'QuienesSomos.jsx',
  'Valores.jsx',
  'Servicios.jsx',
  'Portafolio.jsx',
  'Aviso.jsx',
  'Politica.jsx'

  // Agrega más recursos según sea necesario
];

self.addEventListener('install', (event) => {
  console.log('Service worker: Instalado');

  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        console.log('Service worker: Cacheado en archivos.');
        return cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service worker: Activado');

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service worker: Limpiando cache antigua');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push recibido');
  console.log(`[Service Worker] Datos del Push: "${event.data.text()}"`);

  const title = 'Hola de nuevo';
  const options = {
    body: event.data.text(),
    icon: 'icono.png',
    badge: 'insignia.png'
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  console.log('Service worker: Fetching');

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        const responseClone = networkResponse.clone();
        caches.open(cacheName)
          .then((cache) => {
            cache.put(event.request, responseClone);
          });
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request)
          .then((cacheResponse) => {
            return cacheResponse || fetch(event.request);
          });
      })
  );
});
