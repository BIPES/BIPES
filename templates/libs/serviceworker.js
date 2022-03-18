const CACHE_NAME = 'v{{app_version}}';
const urlsToCache = [
  'ide',
  {% for key, value in available_lang.items() -%}
  'ide-{{ key }}',
  {% endfor %}
  'static/style.css',
  'static/media/icons.svg',
  'static/media/icon/icon-192x192.png',
  'static/media/manifest.webmanifest',
  'static/libs/bipes.umd.js',
  {% for item in imports -%}
  'static/libs/{{ item }}.js',
  {% endfor %}
  {% for item in explicit_imports -%}
  'static/{{ item }}.js',
  {% endfor %}
  {% for plugin in lang_imports -%}
  'static/{{ plugin }}',
  {% endfor %}
  {% for img in static_images -%}
  'static/{{ img }}',
  {% endfor %}
];
let prefix = self.location.pathname.replace('serviceworker.js', '')

let urlsToCacheAbsolute = urlsToCache.map(s => prefix + s)

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCacheAbsolute))
  );
});


self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
        )
      )
  );
});

self.addEventListener('fetch', event => {
{% if import_type == "text/javascript" -%}
  if (event.request.url.includes(`${prefix}mqtt/`) ||
      event.request.url.includes(`${prefix}api/`)  ||
      ) {
    return false
  } else {
    event.respondWith(
      caches.match(event.request, {ignoreSearch: true}).then(response => {
        if (response) {
          return response
        }
        return (
          fetch(event.request)
            .then(response => caches.open(CACHE_NAME))
            .then(cache => {
              cache.put(event.request, response.clone())
              return response
            })
            .catch(response => {
              console.log(`ServiceWorker: Fetch for "${event.request.url}" failed.`)
            })
        );
      })
    );
  }
{% else %}
  return false
{% endif %}
});
