const CACHE="historia-v6-1-network-first-20260903";
const CORE=["./manifest.webmanifest","./icon-192.png","./icon-512.png","./apple-touch-icon.png"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const req = event.request;

  // 对 HTML 导航采用 network-first，今后更新网站时优先拿 GitHub Pages 最新版。
  if (req.mode === "navigate" || req.destination === "document") {
    event.respondWith(
      fetch(req, {cache:"no-store"}).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(cache => cache.put("./index.html", copy));
        return resp;
      }).catch(() => caches.match("./index.html"))
    );
    return;
  }

  // 其他静态文件采用 stale-while-revalidate。
  event.respondWith(
    caches.match(req).then(hit => {
      const network = fetch(req).then(resp => {
        if (resp && resp.ok) {
          const copy = resp.clone();
          caches.open(CACHE).then(cache => cache.put(req, copy));
        }
        return resp;
      }).catch(() => hit);
      return hit || network;
    })
  );
});
