---
---
const channel = new BroadcastChannel('sw-messages');
const cacheName = "{{ "now" | date: "%Y-%m-%d_%H-%M" }}";
const contentToCache = [
    {%- assign pages = site.pages %}
    {%- for page in pages %}
        {%- if page.url == '/sw.js' %}{% continue %}{% endif %}
        {%- if page.url == '/feed.xml' %}{% continue %}{% endif %}
        {%- if page.url == '/404.html' %}{% continue %}{% endif %}
        "{{page.url}}",
    {%- endfor %}
    {%- assign pages = site.pages %}
    {%- for file in site.static_files %}
        {%- if file.path == '/README.md' %}{% continue %}{% endif %}
        {%- if file.path == '/CNAME' %}{% continue %}{% endif %}
        {%- if file.path contains '.pdf' %}{% continue %}{% endif %}
        {%- if file.path contains '.mp3' %}{% continue %}{% endif %}
        "{{file.path}}"
        {%- unless forloop.last %},{%- endunless %}
    {%- endfor %}
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        (async() => {
            channel.postMessage({id: 'caching_start', message: 'Seite wird gecached.'});
            const cache = await caches.open(cacheName);
            try {
                await cache.addAll(contentToCache);
            }
            catch(error) {
                channel.postMessage({id: 'caching_error', message: error});
            }
            finally {
                channel.postMessage({id: 'caching_finished', message: 'Seite wurde erfolgreich gecached.'});
            }
        })()
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        (async() => {
            const cache = await caches.open(cacheName);
            const cache_response = await cache.match(event.request);
            if (cache_response) {
                return cache_response;
            }
            const response = await fetch(event.request);
            return response;
        })()
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (key === cacheName) {
                        return;
                    }
                    return caches.delete(key);
                })
            );
        })
    );
});
