// Dynamic mixed caching strategy service worker
const CACHE_NAME = 'athomft-cache-v1';
const urlsToCache = [
    './',
    'index.html',
    'contact.html',
    'blogs.html',
    'sitemap.xml',
    'robots.txt',
    'assets/icons/favicon-96x96.png',
    'assets/icons/favicon.svg',
    'assets/icons/apple-touch-icon.png',
    'assets/icons/site.webmanifest'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    // Only cache GET requests
    if (event.request.method !== 'GET') return;

    // Do not cache external APIs or browser extensions
    const url = new URL(event.request.url);
    const isSelfOrigin = url.origin === self.location.origin;
    if (!isSelfOrigin) return;

    const pathname = url.pathname;

    // Identify dynamic / mutable content that updates under the same name
    // (HTML entries, JSON databases, XML sitemaps, robots.txt)
    const isDynamic = pathname.endsWith('.html') || 
                      pathname.endsWith('/') || 
                      pathname.includes('posts.json') || 
                      pathname.includes('sitemap.xml') || 
                      pathname.includes('robots.txt');

    if (isDynamic) {
        // Network-First, fallback to Cache (ensures blog lists and layouts stay fresh)
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    if (response && response.status === 200) {
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, responseToCache);
                        });
                    }
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
    } else {
        // Cache-First, fallback to Network (perfect for content-hashed JS/CSS assets and static images)
        event.respondWith(
            caches.match(event.request)
                .then(cachedResponse => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }

                    return fetch(event.request).then(response => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, responseToCache);
                        });

                        return response;
                    });
                })
        );
    }
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            );
        })
    );
});
