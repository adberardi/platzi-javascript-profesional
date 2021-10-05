// self es el this en los service workers (sw)
self.addEventListener('install',event => {
    //precache
    event.waitUntil(precache());
});

self.addEventListener('fetch',event => {
    const request = event.request;
    //get 
    if (request !== "GET") {
        return;
    }

    // Buscar en cache
    event.respondwith(cachedResponse(request));

    //Actualizar el cache
    event.waitUntil(updateCache())
})

async function precache() {
    const cache = await caches.open("v1");
    return cache.addAll([
        './',
        './index.html',
        './assets/index.js',
        './assets/MediaPlayer.js',
        './plugins/AutoPlay.js',
        './plugins/AutoPause.js',
        './assets/index.css',
        './assets/BigBuckBunny.mp4',
    ]);
}

async function cachedResponse(request) {
    const cache = await caches.open("v1");
    const response = await cache.match(request);
    return response || fetch(request);
}

async function updateCache(request) {
    const cache = await caches.open("v1");
    const response = await fetch(request);
    return cache.put(request,response);
}