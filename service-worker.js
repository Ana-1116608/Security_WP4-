self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("v1").then((cache) => cache.addAll(["/","/index.html",])),
  );
});

const cacheFirst = async (event) => {
  // first, check the cache
  const cachedResponse = await caches.match(event.request);
  // then, if found
  if (cachedResponse !== undefined) {
    return cachedResponse
  }
  // otherwise, go to network
  const networkResponse = await fetch(event.request)
  if (networkResponse.ok) {
    caches
      .open('v1')
      .then((cache) => cache.put(event.request, networkResponse.clone()))
  }
  return networkResponse
  // return networkEntry
const networkFirst = async (event) => {
  const networkResponse = await fetch(event.request);
  const clonedResponse = networkResponse.clone();
  if (networkResponse.ok) {
  caches
    .open('v1')
    .then((cache) => cache.put(event.request, clonedResponse));
    return networkResponse;
  }
  const cachedResponse = await caches.match(event.request);
  if (cachedResponse !== undefined) {
    return cachedResponse;
  }
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event))
};
//self.addEventListener("fetch", (event) => {
//  const url = new URL(event.request.url);
//  if (pattern1.test(url.pathname)) {
//    event.respondWith(strategy1());
//  } else if (pattern2.test(url.pathname)) {
//    event.respondWith(strategy2());
//  }
//});
