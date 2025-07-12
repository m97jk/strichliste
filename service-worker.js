self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("strichliste-cache").then(cache => {
      return cache.addAll([
        "strichliste.html",
        "manifest.json",
        "icon-192.png",
        "icon-512.png"
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
