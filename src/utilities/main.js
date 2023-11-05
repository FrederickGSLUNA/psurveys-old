//Verificar si el navegador soporta Service Worker
export function registerServiceWorker() {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    // Registramos el service worker
    navigator.serviceWorker.register('/src/utilities/service-worker.js')
      .then((registration) => {
        console.log('Service worker registrado con exito.', registration);
        // Solicitamos el permiso para la notificación
        return Notification.requestPermission();
      })
      .then((permission) => {
        if (permission === 'granted') {
          console.log("Permiso de notificacion concedido");

          // Aquí puedes agregar la lógica para la suscripción a la API de notificaciones
          return navigator.serviceWorker.ready;
        } else {
          console.log("Permiso de notificación denegado");
        }
      })
      
      .catch((error) => {
        console.log("Error en el registro del service worker", error);
      });
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    // Previene que el navegador muestre el mensaje de instalación por defecto
    event.preventDefault();
    // Guarda el evento para mostrar el mensaje cuando sea apropiado
    deferredPrompt = event;
    // Muestra un mensaje o banner personalizado para la instalación
    mostrarMensajeInstalacion();
  });
}
