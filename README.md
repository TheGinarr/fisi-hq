# FISI-HQ – Lernplattform für Fachinformatiker:innen

Statische, buildfreie Lernplattform zur Vorbereitung auf die IHK-Abschlussprüfungen
**Fachinformatiker:in Systemintegration (FISI)** – mit zuschaltbarem Modus für
**Anwendungsentwicklung (FIAE)**.

Reines HTML, CSS und JavaScript: kein Framework, kein Build-Schritt, kein Backend, keine Konten.
Der Lernfortschritt bleibt im Browser der Nutzer:innen (`localStorage`); als Progressive Web App
funktioniert die Seite nach dem ersten Besuch auch offline.

## Inhalt

- **Lernpfade** für alle drei Ausbildungsjahre und **Lernfelder LF1–LF12a** mit Lektionen, Diagrammen und Mini-Quiz
- **Quiz & Challenges**: rund 190 Kernfragen plus ca. 3.700 Lernfeld-Fragen (Single/Multiple Choice, Lückentext, Zuordnung, Reihenfolge) mit adaptiver Wiederholung
- **15 Musterprüfungen** im Prüfungsformat (AP1, AP2 FISI, AP2 FIAE, 7 × WiSo) mit Timer, Musterlösung und Selbstbewertung
- **IT-Labor, Netz- & Subnetting-Trainer, Übungsgeneratoren, Ernstfall-Simulator, Lernkarten, Glossar, Formelsammlung**
- Dashboard mit Notentracker, Lernstand-Export und optionaler automatischer Sicherung in eine lokale Datei
- Hell-/Dunkelmodus, Textgröße, Akzentfarbe, Tastaturbedienung, Screenreader-Hinweise

## Schnellstart

Jeder statische Webserver genügt, z. B.:

```bash
python3 -m http.server 8080
# danach http://localhost:8080/ öffnen
```

Oder den Ordner in XAMPP/Apache (`htdocs/`) bzw. nginx legen. Einen Build gibt es nicht.

> Service Worker und Offline-Modus funktionieren nur über `https://` oder `http://localhost`.

## Vor dem eigenen Betrieb anpassen

| Datei | Was |
|---|---|
| `impressum.html` | alle `[PLATZHALTER]` durch eigene Angaben ersetzen |
| `datenschutz.html` | Verantwortliche:r, Aufsichtsbehörde, Hosting-Abschnitte (Ziffer 3/4) an das eigene Setup anpassen |
| `sitemap.xml`, `.well-known/security.txt` | `https://example.org` durch die eigene Domain ersetzen |
| `sw.js` | bei jedem Update die `VERSION` ändern, damit Browser den Offline-Cache erneuern |

Optional: `tools/build-gz.sh` erzeugt vorkomprimierte `.gz`-Dateien für nginx `gzip_static`.
Eine Beispiel-Konfiguration für nginx (Sicherheits-Header, echte 404, Cache-Regeln) liegt in
`deploy/nginx.conf.example`; die `.htaccess` deckt dasselbe für Apache ab.

## Aufbau

```
*.html                 Seiten (jeweils mit kleinem Inline-Skript)
assets/js/app.js       Kern: Navigation, Fortschritt, Quiz-Engine, Tour, Hinweise
assets/js/*.js         Fragenpools, Musterprüfungen, Labor, Generatoren, Diagramme
assets/data/lf-*.js    Lernfeld-Inhalte inkl. Lernfeld-Quiz
assets/css/style.css   komplettes Styling (Hell/Dunkel, Druck)
sw.js                  Service Worker (Offline-Cache)
```

## Code-Stil

Der Code ist mit [Prettier](https://prettier.io) formatiert (Einstellungen in `.prettierrc.json`:
2 Leerzeichen, max. 100 Zeichen pro Zeile). Vor einem Pull Request bitte einmal formatieren:

```bash
npx prettier --write "*.html" "sw.js" "assets/**/*.{js,css}"
```

## Hinweise

- **Kein offizielles Angebot** einer IHK, der ZPA oder einer Berufsschule. Alle Musterprüfungen sind
  eigenständig erstellte Übungsaufgaben im Stil der Abschlussprüfung, keine Original-Prüfungsaufgaben.
- Inhalte wurden mit Unterstützung von KI erstellt und redaktionell geprüft – Fehler sind trotzdem möglich.
  Korrekturen gern per Issue oder Pull Request.
- Ohne Gewähr für Vollständigkeit und Richtigkeit.

## Lizenzen

- Code und eigene Inhalte: **MIT** – siehe [`LICENSE`](LICENSE)
- Schrift **IBM Plex** (Sans/Mono): SIL Open Font License 1.1 – siehe [`assets/fonts/OFL.txt`](assets/fonts/OFL.txt)
- Auswahl von Video-Verweisen und Commons-Bildern aus dem Projekt *Fachinformatiker-Prüfungsvorbereitung*:
  MIT, Lizenzvermerk auf `quellen.html`
- Bilder von Wikimedia Commons werden erst nach Klick geladen; Urheber und Lizenz werden live am Bild angezeigt.
