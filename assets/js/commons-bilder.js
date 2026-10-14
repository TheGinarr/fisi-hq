"use strict";
(function () {
  const API = "https://commons.wikimedia.org/w/api.php";
  const OK_LICENSE = /^(cc0|public domain|pd|cc[ -]by(?:[ -]sa)?[ -]?\d?(\.\d)?)/i;
  function esc(s) {
    const d = document.createElement("div");
    d.textContent = s || "";
    return d.innerHTML;
  }
  function stripTags(html) {
    const d = document.createElement("div");
    d.innerHTML = html || "";
    return (d.textContent || "").trim();
  }
  async function fetchImage(search) {
    const url =
      API +
      "?action=query&format=json&origin=*" +
      "&generator=search&gsrnamespace=6&gsrlimit=10" +
      "&gsrsearch=" +
      encodeURIComponent("filetype:bitmap|drawing " + search) +
      "&prop=imageinfo&iiprop=url%7Cextmetadata%7Cmime&iiurlwidth=900";
    const r = await fetch(url);
    if (!r.ok) throw new Error("API " + r.status);
    const j = await r.json();
    const pages = j.query && j.query.pages ? Object.values(j.query.pages) : [];
    for (const p of pages.sort((a, b) => (a.index || 99) - (b.index || 99))) {
      const ii = p.imageinfo && p.imageinfo[0];
      if (!ii) continue;
      const md = ii.extmetadata || {};
      const lic = stripTags(md.LicenseShortName && md.LicenseShortName.value);
      if (!lic || !OK_LICENSE.test(lic)) continue;
      if (!/image\/(jpeg|png|svg)/.test(ii.mime || "")) continue;
      return {
        thumb: ii.thumburl || ii.url,
        page: ii.descriptionurl,
        title: (p.title || "").replace(/^File:/, ""),
        artist: stripTags(md.Artist && md.Artist.value) || "Unbekannt / siehe Dateiseite",
        license: lic,
        licenseUrl: stripTags(md.LicenseUrl && md.LicenseUrl.value) || "",
      };
    }
    throw new Error("Kein Bild mit eindeutig freier Lizenz gefunden");
  }
  window.renderWikiSlot = function (host, topic) {
    host.innerHTML = `<figure class="viz-figure wiki-slot">
      <div class="wiki-ph">
        <p style="margin:0 0 4px"><strong>${esc(topic.label)}</strong></p>
        <p style="margin:0 0 10px;font-size:.85rem;color:var(--tx3)">Echtes Foto von Wikimedia Commons – wird erst nach Klick von wikimedia.org geladen (Zwei-Klick, Urheber &amp; Lizenz werden live mit angezeigt).</p>
        <button class="btn small" type="button">Bild laden</button>
      </div>
      <figcaption></figcaption>
    </figure>`;
    const btn = host.querySelector("button"),
      ph = host.querySelector(".wiki-ph"),
      cap = host.querySelector("figcaption");
    btn.addEventListener("click", async () => {
      btn.disabled = true;
      btn.textContent = "Lädt…";
      try {
        const img = await fetchImage(topic.search);
        const el = document.createElement("img");
        el.src = img.thumb;
        el.alt = topic.alt || topic.label;
        el.loading = "lazy";
        el.style.cssText = "width:100%;border-radius:4px;border:1px solid var(--line)";
        el.onerror = () => {
          ph.innerHTML =
            '<p class="empty">Bild nicht erreichbar – <a href="' +
            img.page +
            '" rel="noopener">direkt auf Commons ansehen</a>.</p>';
        };
        ph.replaceWith(el);
        cap.innerHTML =
          `${esc(img.title)} · Foto: ${esc(img.artist)} · Lizenz: ` +
          (img.licenseUrl
            ? `<a href="${esc(img.licenseUrl)}" rel="noopener">${esc(img.license)}</a>`
            : esc(img.license)) +
          ` · <a href="${esc(img.page)}" rel="noopener">Quelle: Wikimedia Commons</a> [Q1]`;
      } catch (e) {
        if (/Kein Bild/.test(e.message)) {
          host.remove();
          return;
        }
        btn.disabled = false;
        btn.textContent = "Bild laden";
        ph.insertAdjacentHTML(
          "beforeend",
          `<p style="color:var(--err);font-size:.85rem;margin:8px 0 0">Konnte gerade nicht laden (${esc(e.message)}). Offline? <a href="https://commons.wikimedia.org/w/index.php?search=${encodeURIComponent(topic.search)}" rel="noopener">Auf Commons suchen</a>.</p>`
        );
      }
    });
  };
  window.WIKI_SLOTS = {
    komm: [
      {
        label: "Das Original-Schaubild: Vier-Seiten-Modell",
        search: "Vier-Seiten-Modell Schulz von Thun",
        alt: "Schaubild des Vier-Seiten-Modells nach Schulz von Thun",
      },
      {
        label: "Friedemann Schulz von Thun",
        search: "Friedemann Schulz von Thun",
        alt: "Foto von Friedemann Schulz von Thun",
      },
    ],
    lf2: [
      {
        label: "Mainboard in echt",
        search: "computer motherboard",
        alt: "Foto einer Computer-Hauptplatine",
      },
      {
        label: "RAM-Modul in echt",
        search: "DDR4 SDRAM memory module",
        alt: "Foto eines Arbeitsspeicher-Riegels",
      },
      {
        label: "Netzteil von innen",
        search: "computer power supply interior",
        alt: "Foto eines geöffneten PC-Netzteils",
      },
      {
        label: "USV-Schaltbild: Offline (VFD)",
        search: "UPS VFD Offline UPS German",
        alt: "Schaltbild einer Offline-USV (VFD)",
      },
      {
        label: "USV-Schaltbild: Online (VFI)",
        search: "VFI UPS Online UPS German",
        alt: "Schaltbild einer Online-USV (VFI)",
      },
    ],
    lf3: [
      {
        label: "RJ45-Stecker & Twisted Pair",
        search: "RJ45 connector twisted pair cable",
        alt: "Foto eines RJ45-Netzwerksteckers",
      },
      {
        label: "Patchfeld im Schrank",
        search: "patch panel network rack",
        alt: "Foto eines Patchfelds",
      },
      {
        label: "RAID-5-Schema",
        search: "RAID 5 svg diagram",
        alt: "Schema eines RAID-5-Verbunds mit verteilter Parität",
      },
      {
        label: "SAN-Architektur (Schema)",
        search: "Schema SAN german",
        alt: "Schema eines Storage Area Network",
      },
    ],
    lf9: [
      {
        label: "Netzwerk-Switch",
        search: "ethernet network switch ports",
        alt: "Foto eines Netzwerk-Switches",
      },
      {
        label: "19-Zoll-Serverschrank",
        search: "19-inch server rack datacenter",
        alt: "Foto eines Serverschranks",
      },
    ],
    lf5: [
      {
        label: "Leiterbahnen (Platine im Detail)",
        search: "printed circuit board traces macro",
        alt: "Makrofoto von Leiterbahnen auf einer Platine",
      },
    ],
    lf11a: [
      {
        label: "Rechenzentrum",
        search: "data center server room",
        alt: "Foto eines Rechenzentrums",
      },
    ],
    labor: {
      2: {
        label: "Netzteil in echt",
        search: "ATX computer power supply",
        alt: "Foto eines PC-Netzteils",
      },
      3: {
        label: "Mainboard in echt",
        search: "computer motherboard",
        alt: "Foto einer Hauptplatine",
      },
      4: {
        label: "RAM-Riegel in echt",
        search: "DDR4 SDRAM memory module",
        alt: "Foto eines RAM-Moduls",
      },
      5: {
        label: "CPU-Die unter dem Mikroskop",
        search: "CPU die shot",
        alt: "Mikroskopaufnahme eines Prozessor-Dies",
      },
      9: {
        label: "Leiterbahnen im Detail",
        search: "printed circuit board traces macro",
        alt: "Makrofoto von Leiterbahnen",
      },
    },
    lessons: {
      l101: {
        label: "Mainboard in echt",
        search: "computer motherboard",
        alt: "Foto einer Hauptplatine",
      },
      l204: {
        label: "Festplatten im Server",
        search: "hard disk drives server hot swap",
        alt: "Foto von Server-Festplatten",
      },
    },
  };
})();
(function () {
  const TERMS = [
    ["mainboard", "computer motherboard"],
    ["bussystem", "computer motherboard"],
    ["chipsatz", "computer motherboard"],
    ["prozessor", "computer processor chip"],
    ["cpu", "computer processor chip"],
    ["kern", "cpu die"],
    ["arbeitsspeicher", "DDR SDRAM memory module"],
    ["ram", "DDR SDRAM memory module"],
    ["speichermedien", "hard disk drive"],
    ["festplatte", "hard disk drive"],
    ["ssd", "solid state drive"],
    ["raid", "server hard disk drives"],
    ["backup", "magnetic tape data storage"],
    ["datensicherung", "magnetic tape data storage"],
    ["monitor", "computer monitor"],
    ["display", "computer monitor"],
    ["video-anschl", "displayport hdmi connector"],
    ["drucker", "laser printer"],
    ["scanner", "document scanner"],
    ["netzteil", "computer power supply"],
    ["usv", "uninterruptible power supply"],
    ["spannung", "multimeter"],
    ["strom", "multimeter"],
    ["elektro", "multimeter"],
    ["dguv", "multimeter"],
    ["usb", "usb connector"],
    ["thunderbolt", "usb c connector"],
    ["ergonomie", "office workplace desk"],
    ["hardware", "computer hardware"],
    ["troubleshooting", "computer repair"],
    ["verkabelung", "structured cabling patch panel"],
    ["lwl", "optical fiber cable"],
    ["glasfaser", "optical fiber cable"],
    ["speichernetz", "network attached storage"],
    ["nas", "network attached storage"],
    ["iscsi", "server hard disk drives"],
    ["kabel", "network cables"],
    ["stecker", "rj45 connector"],
    ["topologie", "network topology diagram"],
    ["osi", "OSI model"],
    ["tcp", "ethernet cable"],
    ["udp", "ethernet cable"],
    ["arp", "ethernet switch"],
    ["ethernet", "ethernet cable"],
    ["ipv6", "network router"],
    ["ipv4", "network router"],
    ["subnet", "network router"],
    ["vlsm", "network router"],
    ["wlan", "wireless access point"],
    ["router", "network router"],
    ["routing", "network router"],
    ["switch", "ethernet switch"],
    ["vlan", "ethernet switch"],
    ["ports", "ethernet switch"],
    ["firewall", "hardware firewall"],
    ["vpn", "vpn router"],
    ["dns", "server rack"],
    ["dhcp", "server rack"],
    ["nat", "network router"],
    ["proxy", "server room"],
    ["netzwerk", "local area network"],
    ["wireshark", "local area network"],
    ["packet tracer", "computer network laboratory"],
    ["ospf", "network router"],
    ["acl", "hardware firewall"],
    ["ntp", "server rack"],
    ["wan", "optical fiber cable"],
    ["sd-wan", "network router"],
    ["server", "server rack"],
    ["active directory", "server rack"],
    ["gpo", "windows server"],
    ["virtualisierung", "data center servers"],
    ["container", "data center servers"],
    ["docker", "data center servers"],
    ["cloud", "data center"],
    ["monitoring", "network operations center"],
    ["hochverfügbarkeit", "server rack data center"],
    ["redundanz", "server rack data center"],
    ["ha-konzept", "server rack data center"],
    ["lizenz", "software box"],
    ["patch", "software update"],
    ["ansible", "command line interface"],
    ["konfigurationsmanagement", "command line interface"],
    ["reverse proxy", "server room"],
    ["load balanc", "server room"],
    ["nginx", "server room"],
    ["linux", "tux linux"],
    ["powershell", "command line interface"],
    ["bash", "command line interface"],
    ["cmd", "command line interface"],
    ["befehl", "command line interface"],
    ["skript", "source code monitor"],
    ["scripting", "source code monitor"],
    ["automation", "command line interface"],
    ["programmability", "command line interface"],
    ["python", "python programming"],
    ["c++", "source code monitor"],
    ["html", "html source code"],
    ["css", "html source code"],
    ["javascript", "source code monitor"],
    ["nosql", "database server"],
    ["sql", "database server"],
    ["datenbank", "database server"],
    ["erm", "entity relationship model"],
    ["er-modell", "entity relationship model"],
    ["normalform", "database"],
    ["rest-api", "source code monitor"],
    ["api", "source code monitor"],
    ["xampp", "web server"],
    ["web-entwicklung", "html source code"],
    ["webseite", "html source code"],
    ["uml", "unified modeling language diagram"],
    ["klassendiagramm", "unified modeling language diagram"],
    ["pseudocode", "flowchart"],
    ["struktogramm", "flowchart"],
    ["algorithmik", "flowchart"],
    ["algorithm", "flowchart"],
    ["sortier", "flowchart"],
    ["datentyp", "source code monitor"],
    ["kontrollstruktur", "flowchart"],
    ["oop", "source code monitor"],
    ["vererbung", "source code monitor"],
    ["klassen", "source code monitor"],
    ["testverfahren", "software testing"],
    ["testfälle", "software testing"],
    ["testing", "software development"],
    ["testen", "software testing"],
    ["git", "git logo"],
    ["entwicklungsmethoden", "kanban board"],
    ["zahlensystem", "binary code"],
    ["binär", "binary code"],
    ["datenmengen", "binary code"],
    ["schutzbedarf", "padlock security"],
    ["grundschutz", "padlock security"],
    ["cia", "padlock security"],
    ["tom", "access control"],
    ["dsgvo", "data privacy"],
    ["verschlüsselung", "enigma machine"],
    ["hash", "cryptography"],
    ["malware", "computer security"],
    ["angriff", "computer security"],
    ["oauth", "access control"],
    ["authentifizierung", "access control"],
    ["incident", "network operations center"],
    ["pki", "digital certificate"],
    ["zertifikat", "digital certificate"],
    ["zero trust", "access control"],
    ["risiko", "risk management"],
    ["nis-2", "european parliament"],
    ["compliance", "law books"],
    ["anonymität", "computer privacy"],
    ["medienkompetenz", "social media"],
    ["itil", "help desk"],
    ["ticket", "call centre"],
    ["service", "help desk"],
    ["deeskalation", "telephone office"],
    ["seniorenheim", "help desk"],
    ["fehlersuche", "multimeter"],
    ["kommunikationsmodelle", "telephone"],
    ["helpdesk", "call centre"],
    ["kunde", "business meeting"],
    ["beratung", "business meeting"],
    ["übergabe", "handshake business"],
    ["lösungsdesign", "business meeting"],
    ["protokoll", "meeting minutes"],
    ["präsent", "video projector presentation"],
    ["dokumentation", "technical documentation"],
    ["englisch", "english dictionary"],
    ["english", "english dictionary"],
    ["geschäftsbrief", "business letter"],
    ["brief", "business letter"],
    ["bewerbung", "job interview"],
    ["reklamation", "customer service"],
    ["erörterung", "debate"],
    ["interview", "job interview"],
    ["e-mail", "email"],
    ["knigge", "business etiquette"],
    ["mail", "email"],
    ["iot", "raspberry pi"],
    ["edge", "industrial robot"],
    ["industrie", "industrial robot"],
    ["cyber-physisch", "industrial robot"],
    ["projekt", "gantt chart"],
    ["gantt", "gantt chart"],
    ["netzplan", "gantt chart"],
    ["lastenheft", "technical documentation"],
    ["pflichtenheft", "technical documentation"],
    ["rechtsform", "german courthouse"],
    ["gesellschaft", "law books"],
    ["arbeitsvertrag", "law books"],
    ["kündigung", "law books"],
    ["vertrag", "law books"],
    ["betriebsrat", "meeting room"],
    ["jav", "meeting room"],
    ["sozialversicherung", "german health insurance card"],
    ["tarif", "law books"],
    ["streik", "demonstration strike"],
    ["bbig", "law books"],
    ["geschäftsfähigkeit", "law books"],
    ["wirtschaft", "frankfurt stock exchange"],
    ["kalkulation", "desktop calculator"],
    ["abschreibung", "desktop calculator"],
    ["beschaffung", "warehouse logistics"],
    ["finanzierung", "euro banknotes"],
    ["kredit", "euro banknotes"],
    ["darlehen", "euro banknotes"],
    ["businessplan", "business meeting"],
    ["marketing", "advertising"],
    ["standort", "industrial park"],
    ["eu", "european parliament"],
    ["globalisierung", "container ship"],
    ["digitalisierung", "data center"],
    ["digitale transformation", "modern office computer"],
    ["investition", "euro banknotes"],
    ["kosten", "desktop calculator"],
    ["klr", "desktop calculator"],
    ["versicherung", "insurance documents"],
    ["organisation", "organization chart"],
    ["zielsystem", "dartboard target"],
    ["nutzwert", "desktop calculator"],
    ["berufsbild", "apprenticeship germany"],
    ["energie", "electricity meter"],
    ["wirtschaftlichkeit", "desktop calculator"],
    ["wiso", "law books"],
    ["ccna", "cisco router"],
    ["cisco", "cisco router"],
    ["ios", "cisco router"],
    ["comptia", "computer repair"],
    ["übungsaufgabe", "classroom exam"],
    ["aufgabentraining", "classroom exam"],
    ["rechenaufgabe", "desktop calculator"],
    ["ap1", "classroom exam"],
    ["ap2", "classroom exam"],
    ["prüfung", "classroom exam"],
  ];
  const OVERRIDES = {
    "ports & protokolle": "ethernet switch",
    "betriebssysteme (windows, linux, macos)": "computer operating system screenshot",
  };
  TERMS.sort((a, b) => b[0].length - a[0].length);
  const reCache = {};
  function hit(text, key) {
    if (key.length >= 6) return text.includes(key);
    let re = reCache[key];
    if (!re)
      re = reCache[key] = new RegExp(
        "(^|[^a-z0-9äöüß])" + key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
    return re.test(text);
  }
  window.lessonSearchTerm = function (title, topic, fieldId) {
    const tl = (title || "").toLowerCase().trim();
    if (OVERRIDES[tl]) return OVERRIDES[tl];
    for (const [k, term] of TERMS) if (hit(tl, k)) return term;
    const tp = (topic || "").toLowerCase();
    for (const [k, term] of TERMS) if (hit(tp, k)) return term;
    return null;
  };
})();
