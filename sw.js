// Vocab Cage offline service worker. Bump VERSION to ship an update.
const VERSION = "vocab-cage-202610212226";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png", "./vendor/jspdf.umd.min.js"];
const FONT_CSS = "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&family=Charis+SIL:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Mono:wght@500&display=swap";

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(VERSION);
    await cache.addAll(SHELL);
    try {   // fonts are optional: the app falls back to system fonts
      const res = await fetch(FONT_CSS);
      if (res.ok) {
        const css = await res.clone().text();
        await cache.put(FONT_CSS, res);
        const urls = [...css.matchAll(/url\((https:[^)]+)\)/g)].map((m) => m[1]);
        await Promise.all(urls.map((u) => fetch(u, { mode: "cors" }).then((r) => r.ok && cache.put(u, r)).catch(() => {})));
      }
    } catch (e) {}
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) if (key !== VERSION) await caches.delete(key);
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  if (req.mode === "navigate") {
    // Open instantly from the cache; refresh the cached copy in the background.
    event.respondWith((async () => {
      const cache = await caches.open(VERSION);
      const cached = await cache.match("./index.html");
      const fresh = fetch(req).then((res) => { if (res.ok) cache.put("./index.html", res.clone()); return res; }).catch(() => null);
      return cached || (await fresh) || new Response("Offline", { status: 503 });
    })());
    return;
  }
  event.respondWith((async () => {
    const cache = await caches.open(VERSION);
    const cached = await cache.match(req);
    if (cached) return cached;
    try {
      const res = await fetch(req);
      if (res.ok && (new URL(req.url).origin === location.origin || /fonts\.(googleapis|gstatic)\.com$/.test(new URL(req.url).hostname))) cache.put(req, res.clone());
      return res;
    } catch (e) {
      return new Response("", { status: 504 });
    }
  })());
});
