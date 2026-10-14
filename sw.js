const VERSION = "fisi-hq-d712778e803e-a11y3";
const CORE = [
  "403.html",
  "404.html",
  "503.html",
  "50x.html",
  "analyse.html",
  "ap1.html",
  "ap2.html",
  "ap2ae.html",
  "dashboard.html",
  "datenschutz.html",
  "ernstfall.html",
  "firma.html",
  "formeln.html",
  "glossar.html",
  "impressum.html",
  "index.html",
  "jahr1.html",
  "jahr2.html",
  "jahr3.html",
  "labor.html",
  "lektion.html",
  "lernfeld.html",
  "lernfelder.html",
  "lernkarten.html",
  "lernstand.html",
  "links.html",
  "mp.html",
  "netztrainer.html",
  "praxis.html",
  "quellen.html",
  "quiz.html",
  "shorts.html",
  "training.html",
  "uebungstools.html",
  "assets/css/style.css",
  "assets/data/lf-ae.js",
  "assets/data/lf-aeap.js",
  "assets/data/lf-allgemein.js",
  "assets/data/lf-extra.js",
  "assets/data/lf-index.js",
  "assets/data/lf-komm.js",
  "assets/data/lf-lf1.js",
  "assets/data/lf-lf10a.js",
  "assets/data/lf-lf11a.js",
  "assets/data/lf-lf12a.js",
  "assets/data/lf-lf2.js",
  "assets/data/lf-lf3.js",
  "assets/data/lf-lf4.js",
  "assets/data/lf-lf5.js",
  "assets/data/lf-lf6.js",
  "assets/data/lf-lf7.js",
  "assets/data/lf-lf8.js",
  "assets/data/lf-lf9.js",
  "assets/data/lf-prap1.js",
  "assets/data/lf-prap2.js",
  "assets/data/lf-wiso.js",
  "assets/data/lf-zert.js",
  "assets/fonts/ibm-plex-mono-latin-400-normal.woff2",
  "assets/fonts/ibm-plex-mono-latin-500-normal.woff2",
  "assets/fonts/ibm-plex-sans-latin-400-normal.woff2",
  "assets/fonts/ibm-plex-sans-latin-500-normal.woff2",
  "assets/fonts/ibm-plex-sans-latin-600-normal.woff2",
  "assets/fonts/ibm-plex-sans-latin-700-normal.woff2",
  "assets/fonts/ibm.woff2",
  "assets/js/app.js",
  "assets/js/commons-bilder.js",
  "assets/js/data-vertiefung.js",
  "assets/js/diagramme.js",
  "assets/js/ernstfall.js",
  "assets/js/generatoren.js",
  "assets/js/grunddaten.js",
  "assets/js/hintergrund-animation.js",
  "assets/js/labor-stationen.js",
  "assets/js/lernfeld-infos.js",
  "assets/js/musterpruefung-ap1-a.js",
  "assets/js/musterpruefung-ap1-b.js",
  "assets/js/musterpruefung-ap1-c.js",
  "assets/js/musterpruefung-ap2-fiae.js",
  "assets/js/musterpruefung-ap2-fisi-a.js",
  "assets/js/musterpruefung-ap2-fisi-b.js",
  "assets/js/musterpruefung-ap2-konzeption.js",
  "assets/js/musterpruefung-ap2-netzwerkanalyse.js",
  "assets/js/musterpruefung-wiso-a.js",
  "assets/js/musterpruefung-wiso-b.js",
  "assets/js/musterpruefung-wiso-c.js",
  "assets/js/musterpruefung-wiso-d.js",
  "assets/js/musterpruefung-wiso-e.js",
  "assets/js/musterpruefung-wiso-f.js",
  "assets/js/musterpruefung-wiso-g.js",
  "assets/js/uebungspools.js",
  "assets/js/videos.js",
  "assets/icon.svg",
  "manifest.webmanifest",
];
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(VERSION)
      .then((c) => Promise.allSettled(CORE.map((u) => c.add(u))))
      .then(() => self.skipWaiting())
  );
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  if (url.origin !== location.origin) return;
  if (e.request.mode === "navigate" || url.pathname.endsWith(".html")) {
    e.respondWith(
      fetch(e.request)
        .then((r) => {
          const cp = r.clone();
          e.waitUntil(caches.open(VERSION).then((c) => c.put(e.request, cp)));
          return r;
        })
        .catch(() =>
          caches
            .match(e.request, { ignoreSearch: true })
            .then(
              (r) =>
                r ||
                new Response(
                  '<!doctype html><html lang="de"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Offline – FISI-HQ</title>' +
                    '<body style="font-family:system-ui,sans-serif;background:#1a1817;color:#f6f4f3;display:grid;place-items:center;min-height:100vh;margin:0;text-align:center">' +
                    '<div><h1 style="font-size:1.3rem">Du bist offline</h1><p style="color:#9b9797;max-width:34em">Diese Seite ist noch nicht auf dem Ger&auml;t gespeichert. Bereits besuchte Inhalte funktionieren auch ohne Netz.</p>' +
                    '<p><a href="index.html" style="color:#ff563c">Zur Startseite</a></p></div>',
                  { headers: { "Content-Type": "text/html; charset=utf-8" } }
                )
            )
        )
    );
  } else {
    e.respondWith(
      caches.match(e.request).then((cached) => {
        const update = fetch(e.request)
          .then((r) => {
            const cp = r.clone();
            e.waitUntil(caches.open(VERSION).then((c) => c.put(e.request, cp)));
            return r;
          })
          .catch(() => cached);
        return cached || update;
      })
    );
  }
});
