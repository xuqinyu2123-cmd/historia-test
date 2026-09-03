const CACHE="aevemora-v8-5-quiz-edition-20260903";
const CORE=[
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(CORE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

function isWikiRequest(url){
  return /(^|\.)wikipedia\.org$/.test(url.hostname) ||
         /(^|\.)wikimedia\.org$/.test(url.hostname);
}

self.addEventListener("fetch", event => {
  if(event.request.method !== "GET") return;

  const req=event.request;
  const url=new URL(req.url);

  // HTML：network-first，确保 GitHub Pages 更新后优先得到最新版。
  if(req.mode==="navigate" || req.destination==="document"){
    event.respondWith(
      fetch(req,{cache:"no-store"}).then(resp=>{
        const copy=resp.clone();
        caches.open(CACHE).then(cache=>cache.put("./index.html",copy));
        return resp;
      }).catch(()=>caches.match("./index.html"))
    );
    return;
  }

  // Wikipedia API / Wikimedia 图片：
  // cache-first。首次请求成功（包括 opaque 图片响应）后直接持久缓存，
  // 后续同一人物图片无需再次经过外部网络。
  if(isWikiRequest(url)){
    event.respondWith(
      caches.match(req).then(hit=>{
        if(hit) return hit;
        return fetch(req).then(resp=>{
          if(resp && (resp.ok || resp.type==="opaque")){
            caches.open(CACHE).then(cache=>cache.put(req,resp.clone())).catch(()=>{});
          }
          return resp;
        });
      })
    );
    return;
  }

  // 站内静态资源：stale-while-revalidate。
  event.respondWith(
    caches.match(req).then(hit=>{
      const network=fetch(req).then(resp=>{
        if(resp && resp.ok){
          caches.open(CACHE).then(cache=>cache.put(req,resp.clone())).catch(()=>{});
        }
        return resp;
      }).catch(()=>hit);
      return hit || network;
    })
  );
});