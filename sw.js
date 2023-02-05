self.addEventListener('fetch', (event) => {
    event.respondWith(async function() {
        try {
            return await fetch(event.request);
        }
        catch (err) {
            return caches.match(event.request);
        }
    }());
});
