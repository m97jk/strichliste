
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("strichliste-cache").then(cache => {
      return cache.addAll([
        "index_mit_speicher_passwort.html",
        "manifest.json",
        "icon-192.png",
        "icon-512.png",
        "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
