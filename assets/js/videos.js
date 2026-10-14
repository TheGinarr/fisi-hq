"use strict";
(function () {
  function esc(s) {
    return String(s || "").replace(
      /[&<>"']/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
    );
  }
  window.VIDEO_SLOTS = {
    lessons: {
      "lf3-gn-1": [
        {
          id: "Ukb2SGhGBDU",
          t: "Netzwerk-Topologien einfach erklärt (IT & Medien einfach erklärt)",
        },
      ],
      "lf3-gn-2": [{ id: "xiTr5B19Zd4", t: "OSI-Modell – Was ist das? (Takiry)" }],
      "lf3-gn-3": [
        {
          id: "jgwWFKryrOw",
          t: "Subnetting einfach erklärt: Netzanteil, Hostanteil, Subnetzmaske (Florian Dalwigk)",
        },
      ],
      "lf3-sp-1": [
        { id: "WzWUChLeGBc", t: "RAID einfach erklärt – welches RAID ist sinnvoll? (Jan Pörtner)" },
        { id: "Lw76leQOUdg", t: "RAID 10 erklärt (Pixelfriedhof Travels)" },
      ],
      "lf3-sp-2": [
        {
          id: "3NrTiOusQ2o",
          t: "Differentielle und inkrementelle Datensicherung (Thomas Grosser)",
        },
      ],
      "lf2-hw-8": [
        {
          id: "lvFFa57dCsA",
          t: "VDI vs. Desktop as a Service – Vor- und Nachteile (RapidScale, engl.)",
        },
        {
          id: "hIG0YqCpS0c",
          t: "Virtual Desktop Infrastructure (VDI) Explained (RapidScale, engl.)",
        },
      ],
      "lf2-pm-1": [
        { id: "ctEAHdbMhag", t: "Lastenheft: Definition & Inhalte einfach erklärt (sevdesk)" },
      ],
      "lf5-db-1": [
        {
          id: "4MzAWa86y_g",
          t: "Datenbankmanagement-Systeme (DBMS) – Tutorial (Programmieren Starten)",
        },
        {
          id: "aCXKT4ycAbQ",
          t: "Normalisierung in Datenbanken: 1. bis 3. Normalform (Patrick Boekhoven)",
        },
      ],
      "lf5-zs-1": [
        { id: "9L_qwf6wD8g", t: "Einheiten in der IT: GiB, Gibibyte & Umrechnung (kaback)" },
      ],
      "lf5-se-1": [
        { id: "Tf-zcpwM5uQ", t: "Kanban erklärt – agiles Projektmanagement (Agile Heroes)" },
        { id: "9TycLR0TqFA", t: "Introduction to Scrum – 7 Minutes (Uzility, engl.)" },
      ],
      "lf5-se-2": [{ id: "zzwUH3vbNkc", t: "Klassendiagramme mit UML (simpleclub)" }],
      "lf1-uz-2": [
        { id: "P5E-0IsVZQg", t: "Nutzwertanalyse einfach erklärt (mit Beispielaufgabe)" },
      ],
      "prap1-team-1": [
        {
          id: "TW_B1skghSY",
          t: "Teamentwicklung nach Tuckman: die Teamuhr (Projekte leicht gemacht)",
        },
        { id: "QmJcYzzN7BA", t: "Das Harvard-Konzept einfach erklärt (Projekte leicht gemacht)" },
      ],
      "wirt3-iv-1": [
        { id: "AgCnoMBOMU4", t: "Amortisationsrechnung: dynamisch & statisch (sevdesk)" },
        {
          id: "saXirtILGkk",
          t: "Amortisation – ab wann rentieren sich Investitionen? (simpleclub)",
        },
      ],
      "wiso-epk-1": [
        { id: "uNDJS9EZJmQ", t: "Ereignisgesteuerte Prozesskette (EPK) (Thomas Grosser)" },
      ],
      "ae-ergo-1": [
        { id: "vFF21WTrF7Y", t: "Software-Ergonomie nach ISO 9241-110 (Thomas Grosser)" },
      ],
      "ae-erm-1": [
        {
          id: "aCXKT4ycAbQ",
          t: "Normalisierung in Datenbanken: 1. bis 3. Normalform (Patrick Boekhoven)",
        },
      ],
      "komm-4o-1": [
        { id: "8A2_iehwb1Q", t: "4-Ohren-Modell (Schulz von Thun) einfach erklärt – mit Beispiel" },
        {
          id: "7nF21nvAsR0",
          t: "Kommunikationsquadrat: Vier Seiten einer Nachricht mit Beispielen",
        },
      ],
      "komm-mail-1": [
        { id: "X3ktwyLsT-c", t: "Professionelle E-Mails für den Beruf (Erklärvideo)" },
        { id: "9cVXRNXVnbs", t: "Schriftliche geschäftliche Kommunikation per E-Mail" },
      ],
      l101: { id: "dVReIwMeZq4", t: "Aufbau eines Computers/PCs einfach erklärt" },
      l102: { id: "2d86hVEKano", t: "Zahlensysteme (Dezimal, Binär, Hexadezimal) einfach erklärt" },
      l103: { id: "bWVrqReifJ8", t: "Das OSI-Modell in 9 Minuten erklärt" },
      l104: { id: "3jLTvJDbc2Q", t: "Subnetting in 4 Minuten erklärt" },
      l201: { id: "3jLTvJDbc2Q", t: "Subnetting in 4 Minuten erklärt" },
      l202: { id: "WRwXsLUziKE", t: "DHCP einfach erklärt (Netzwerk)" },
      l203: { id: "AIOtRTGk2ao", t: "VLAN einfach erklärt (Netzwerktechnik)" },
      l204: { id: "1YoQ-T0wMfE", t: "RAID-Systeme einfach erklärt (Übersicht)" },
      l205: { id: "50m7-2la4sU", t: "Lichtwellenleiter (LWL) / Glasfaser-Technologie" },
      l302: { id: "HRtsnOgxLSo", t: "Cloud Computing einfach erklärt (IaaS/PaaS/SaaS)" },
      l303: { id: "hn8DN-ygSLU", t: "PowerShell-Kurs: Einführung" },
      l304: { id: "OfrfVY-eYQY", t: "Netzplantechnik einfach erklärt (mit kritischem Pfad)" },
      l305: { id: "xCDDkVH-e1s", t: "NAS & SAN einfach erklärt (mit Prüfungsfrage)" },
    },
    lf: {
      itsm: [
        { id: "P5E-0IsVZQg", t: "Nutzwertanalyse einfach erklärt (mit Beispielaufgabe)" },
        { id: "_OyhRDJWyO0", t: "Bezugskalkulation berechnen (Angebotsvergleich)" },
      ],
      kdm: [
        { id: "P5E-0IsVZQg", t: "Nutzwertanalyse einfach erklärt (mit Beispielaufgabe)" },
        { id: "bPS3ojekcKw", t: "EU-Datenschutzgrundverordnung einfach erklärt (explainity)" },
      ],
      itse: [
        { id: "dVReIwMeZq4", t: "Aufbau eines Computers/PCs einfach erklärt" },
        { id: "50m7-2la4sU", t: "Lichtwellenleiter (LWL) / Glasfaser-Technologie" },
      ],
      kbm: [
        { id: "eykaYzKDVLk", t: "Ziele SMART formulieren – die SMART-Formel einfach erklärt" },
        { id: "_OyhRDJWyO0", t: "Bezugskalkulation berechnen (Angebotsvergleich)" },
      ],
      fidp: [
        { id: "RAJxd-oyjL4", t: "SQL-Grundlagen in 13 Minuten" },
        { id: "bPS3ojekcKw", t: "EU-Datenschutzgrundverordnung einfach erklärt (explainity)" },
      ],
      fidv: [
        { id: "kw14jkv-G-A", t: "Was ist das IoT? Internet of Things einfach erklärt" },
        { id: "W08qwzz6mMs", t: "Firewalls einfach erklärt" },
      ],
      lf1: [
        { id: "FCz9ppG_NJ8", t: "Rechtsformen im Überblick: Personen- & Kapitalgesellschaften" },
      ],
      lf2: [{ id: "dVReIwMeZq4", t: "Aufbau eines Computers/PCs einfach erklärt" }],
      lf3: [
        { id: "bWVrqReifJ8", t: "Das OSI-Modell in 9 Minuten erklärt" },
        { id: "3jLTvJDbc2Q", t: "Subnetting in 4 Minuten erklärt" },
        { id: "50m7-2la4sU", t: "Lichtwellenleiter (LWL) / Glasfaser-Technologie" },
      ],
      lf4: [
        { id: "NPHlmQnZhv4", t: "Verschlüsselungsverfahren: symmetrisch, asymmetrisch, hybrid" },
      ],
      lf5: [
        { id: "2d86hVEKano", t: "Zahlensysteme (Dezimal, Binär, Hexadezimal) einfach erklärt" },
        { id: "RAJxd-oyjL4", t: "SQL-Grundlagen in 13 Minuten" },
      ],
      lf6: [{ id: "q4BP7G1GNV0", t: "Was ist ITIL? Einführung ins ITIL-Framework" }],
      lf7: [{ id: "kw14jkv-G-A", t: "Was ist das IoT? Internet of Things einfach erklärt" }],
      lf8: [{ id: "RAJxd-oyjL4", t: "SQL-Grundlagen in 13 Minuten" }],
      lf9: [
        { id: "WRwXsLUziKE", t: "DHCP einfach erklärt (Netzwerk)" },
        { id: "AIOtRTGk2ao", t: "VLAN einfach erklärt (Netzwerktechnik)" },
      ],
      lf10a: [{ id: "hn8DN-ygSLU", t: "PowerShell-Kurs: Einführung" }],
      lf11a: [
        { id: "1YoQ-T0wMfE", t: "RAID-Systeme einfach erklärt (Übersicht)" },
        { id: "1sL-Qjq7VnA", t: "Speichersysteme: DAS, SAN, NAS (LF 11)" },
        { id: "HRtsnOgxLSo", t: "Cloud Computing einfach erklärt (IaaS/PaaS/SaaS)" },
      ],
      lf12a: [{ id: "OfrfVY-eYQY", t: "Netzplantechnik einfach erklärt (mit kritischem Pfad)" }],
      wiso: [
        { id: "FCz9ppG_NJ8", t: "Rechtsformen im Überblick: Personen- & Kapitalgesellschaften" },
      ],
      ae: [{ id: "RAJxd-oyjL4", t: "SQL-Grundlagen in 13 Minuten" }],
      aeap: [{ id: "RAJxd-oyjL4", t: "SQL-Grundlagen in 13 Minuten" }],
      allgemein: [
        {
          id: "S7uVU3otzXE",
          t: "Präsentation: Gliederung, Aufbau & Struktur (Präsentationstechnik)",
        },
      ],
      zert: [{ id: "AIOtRTGk2ao", t: "VLAN einfach erklärt (Netzwerktechnik)" }],
      prap1: [{ id: "3jLTvJDbc2Q", t: "Subnetting in 4 Minuten erklärt" }],
      prap2: [{ id: "OfrfVY-eYQY", t: "Netzplantechnik einfach erklärt (mit kritischem Pfad)" }],
    },
  };
  const VX = {
    smart: { id: "eykaYzKDVLk", t: "Ziele SMART formulieren – die SMART-Formel einfach erklärt" },
    nutzwert: { id: "P5E-0IsVZQg", t: "Nutzwertanalyse einfach erklärt (mit Beispielaufgabe)" },
    bezug: { id: "_OyhRDJWyO0", t: "Bezugskalkulation berechnen (Angebotsvergleich)" },
    firewall: { id: "W08qwzz6mMs", t: "Firewalls einfach erklärt" },
    vpn: { id: "64XajKeofwo", t: "Was bedeutet VPN? Einfach erklärt" },
    ipv6: { id: "ZlxizzNJrCY", t: "IPv6-Adressierung: Aufbau & Verkürzungsregeln (LF3)" },
    dsgvo: { id: "bPS3ojekcKw", t: "EU-Datenschutzgrundverordnung einfach erklärt (explainity)" },
    arbeitsrecht: {
      id: "zy_OqHDjTzw",
      t: "Kündigungsschutz einfach erklärt – Prüfungswissen für Azubis",
    },
    python: { id: "e6vPt_e9sRw", t: "Python-Komplettkurs für Anfänger" },
    praesent: { id: "S7uVU3otzXE", t: "Präsentation: Gliederung, Aufbau & Struktur" },
  };
  window.renderVideoSlot = function (host, v) {
    host.innerHTML =
      '<figure class="viz-figure wiki-slot video-slot">' +
      '<div class="wiki-ph">' +
      '<p style="margin:0 0 4px"><strong>Video: ' +
      esc(v.t) +
      "</strong></p>" +
      '<p style="margin:0 0 10px;font-size:.85rem;color:var(--tx3)">Wird erst nach Klick über youtube-nocookie.com geladen (Zwei-Klick – vorher fließen keine Daten an YouTube/Google).</p>' +
      '<button class="btn small" type="button">Video laden</button> ' +
      '<a class="btn small ghost" href="https://www.youtube.com/watch?v=' +
      encodeURIComponent(v.id) +
      '" target="_blank" rel="noopener">Auf YouTube öffnen</a>' +
      "</div><figcaption></figcaption></figure>";
    host.querySelector("button").addEventListener("click", () => {
      const ph = host.querySelector(".wiki-ph");
      const wrap = document.createElement("div");
      wrap.className = "video-frame";
      wrap.innerHTML =
        '<iframe src="https://www.youtube-nocookie.com/embed/' +
        encodeURIComponent(v.id) +
        '" title="' +
        esc(v.t) +
        '" loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>';
      ph.replaceWith(wrap);
      const fig = host.querySelector("figure");
      if (fig) fig.classList.add("video-loaded");
      host.querySelector("figcaption").innerHTML =
        esc(v.t) +
        " · eingebettet über youtube-nocookie.com · Inhalt und Rechte liegen beim jeweiligen Kanal.";
    });
  };
  const P = window.VIDEO_SLOTS.lessons;
  const VIDEO_KEYS = [
    [
      [
        "mainboard",
        "cpu",
        "arbeitsspeicher",
        "netzteil",
        "hardware",
        "speichermedien",
        "komponenten",
        "monitor",
        "drucker",
        "spannung",
        "elektro",
        "usb",
        "ergonomie",
      ],
      P.l101,
    ],
    [["zahlensystem", "binär", "hex", "datenmengen"], P.l102],
    [
      [
        "osi",
        "tcp",
        "ethernet",
        "icmp",
        "mtu",
        "wireshark",
        "packet tracer",
        "netzwerk",
        "wlan",
        "arp",
      ],
      P.l103,
    ],
    [["subnet", "ipv4", "vlsm", "adressauflösung"], P.l201],
    [["dhcp", "dns"], P.l202],
    [
      ["vlan", "switch", "routing", "topologie", "cisco", "ccna", "ospf", "wan", "ntp", "ios"],
      P.l203,
    ],
    [["raid", "backup", "datensicherung"], P.l204],
    [["lwl", "glasfaser", "verkabelung", "kabel", "stecker"], P.l205],
    [["cloud", "iaas", "saas", "paas", "virtualisierung", "docker", "container"], P.l302],
    [
      [
        "powershell",
        "cmd",
        "skript",
        "scripting",
        "bash",
        "ansible",
        "automation",
        "befehl",
        "monitoring",
        "gpo",
        "active directory",
        "windows server",
        "linux",
        "server",
      ],
      P.l303,
    ],
    [
      ["nosql", "sql", "datenbank", "erm", "normalform", "transaktion", "xampp"],
      { id: "RAJxd-oyjL4", t: "SQL-Grundlagen in 13 Minuten" },
    ],
    [
      ["itil", "ticket", "service", "helpdesk", "fehlersuche"],
      { id: "q4BP7G1GNV0", t: "Was ist ITIL? Einführung ins ITIL-Framework" },
    ],
    [
      ["iot", "industrie", "edge", "cyber-physisch"],
      { id: "kw14jkv-G-A", t: "Was ist das IoT? Internet of Things einfach erklärt" },
    ],
    [["nas", "san", "iscsi", "speichernetz", "hochverfügbar", "ha-konzept", "redundanz"], P.l305],
    [["netzplan", "projekt", "lastenheft", "pflichtenheft"], P.l304],
    [
      [
        "rechtsform",
        "gesellschaft",
        "unternehmen",
        "berufsbild",
        "businessplan",
        "organisation",
        "vollmacht",
      ],
      { id: "FCz9ppG_NJ8", t: "Rechtsformen im Überblick: Personen- & Kapitalgesellschaften" },
    ],
    [
      [
        "verschlüsselung",
        "krypto",
        "hash",
        "oauth",
        "authentif",
        "malware",
        "angriff",
        "incident",
        "pki",
        "zertifikat",
      ],
      { id: "NPHlmQnZhv4", t: "Verschlüsselungsverfahren: symmetrisch, asymmetrisch, hybrid" },
    ],
    [["smart", "ziel"], VX.smart],
    [["nutzwert"], VX.nutzwert],
    [
      [
        "angebotsvergleich",
        "kalkulation",
        "beschaffung",
        "abschreibung",
        "klr",
        "kosten",
        "investition",
        "finanzierung",
        "darlehen",
        "wirtschaftlichkeit",
        "rechenaufgabe",
      ],
      VX.bezug,
    ],
    [["firewall", "dmz", "acl", "port security"], VX.firewall],
    [["vpn", "proxy"], VX.vpn],
    [["ipv6", "ndp"], VX.ipv6],
    [
      [
        "dsgvo",
        "datenschutz",
        "personenbezogen",
        "schutzbedarf",
        "grundschutz",
        "bsi",
        "cia",
        "tom",
        "compliance",
        "nis-2",
        "anonymität",
        "sicherheit",
      ],
      VX.dsgvo,
    ],
    [
      [
        "kündigung",
        "arbeitsvertrag",
        "arbeitsrecht",
        "tarif",
        "betriebsrat",
        "jav",
        "bbig",
        "geschäftsfähigkeit",
        "willenserklär",
        "streik",
        "sozialversicherung",
        "versicherung",
      ],
      VX.arbeitsrecht,
    ],
    [
      [
        "python",
        "programmier",
        "datentyp",
        "kontrollstruktur",
        "oop",
        "uml",
        "klassen",
        "pseudocode",
        "struktogramm",
        "algorith",
        "sortier",
        "testverfahren",
        "testfälle",
        "testen",
        "entwicklungsmethoden",
        "c++",
        "html",
        "css",
        "javascript",
        "web",
      ],
      VX.python,
    ],
    [
      [
        "präsent",
        "dokumentation",
        "protokoll",
        "brief",
        "reklamation",
        "erörterung",
        "kommunikation",
        "knigge",
        "e-mail",
        "deeskalation",
        "englisch",
        "english",
        "interview",
        "vokabular",
      ],
      VX.praesent,
    ],
  ];
  function vHit(text, key) {
    if (key.length >= 6) return text.includes(key);
    return new RegExp("(^|[^a-z0-9äöüß])" + key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).test(text);
  }
  window.videosFuer = function (title, topic) {
    const out = [],
      seen = new Set();
    const scan = (text) => {
      for (const [keys, v] of VIDEO_KEYS)
        for (const k of keys)
          if (vHit(text, k) && !seen.has(v.id)) {
            seen.add(v.id);
            out.push(v);
            break;
          }
    };
    scan((title || "").toLowerCase());
    if (out.length < 1) scan((topic || "").toLowerCase());
    return out.slice(0, 2);
  };
  window.videoFuer = function (title, topic) {
    const v = window.videosFuer(title, topic);
    return v.length ? v[0] : null;
  };
  window.videoSearchLink = function (thema) {
    return (
      "https://www.youtube.com/results?search_query=" +
      encodeURIComponent(thema + " einfach erklärt")
    );
  };
})();
