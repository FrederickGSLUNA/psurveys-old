const cacheName = 'project';
const cacheAssets = [
  '/',
  'index.html',
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
  if (event.request.url.startsWith('http')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Copia la respuesta
          const responseToCache = response.clone();
          // Abre el caché
          caches.open(cacheName)
            .then((cache) => {
              cache.put(event.request, responseToCache).catch((error) => {
                console.warn('Error al cachear:', event.request.url, error);
              });
            });
          return response;
        })
        .catch((error) => {
          console.error('Fetch fallido; devolviendo caché si existe:', error);
          return caches.match(event.request);
        })
    );
  }
});


