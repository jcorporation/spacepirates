---
---
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
        {%- if file.path == '/spacepirates.webmanifest' %}{% continue %}{% endif %}
        "{{file.path}}"
        {%- unless forloop.last %},{%- endunless %}
    {%- endfor %}
];

self.addEventListener("install", (event) => {
    event.waitUntil(
      (async () => {
        const cache = await caches.open(cacheName);
        await cache.addAll(contentToCache);
      })()
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
      (async () => {
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
