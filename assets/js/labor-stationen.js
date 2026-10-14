"use strict";
(function () {
  const esc = (x) => window.escHtml(x);
  function pcbau(host) {
    const STEPS = [
      {
        id: "nt",
        n: "Netzteil einbauen",
        w: "Zuerst das Netzteil – es gibt den Bauraum und die Kabelwege vor.",
      },
      {
        id: "mb",
        n: "Mainboard einsetzen",
        w: "Auf die Abstandshalter schrauben – I/O-Blende nicht vergessen.",
      },
      {
        id: "cpu",
        n: "CPU in den Sockel setzen",
        w: "Hebel öffnen, Markierungsdreieck beachten, OHNE Druck einsetzen.",
      },
      {
        id: "kue",
        n: "Kühler mit Wärmeleitpaste montieren",
        w: "Erst die CPU, dann der Kühler – niemals andersherum.",
      },
      {
        id: "ram",
        n: "RAM-Riegel einrasten",
        w: "Kerbe beachten, bei zwei Riegeln die Dual-Channel-Slots (Handbuch).",
      },
      {
        id: "ver",
        n: "Verkabeln und Funktionstest",
        w: "24-Pin, CPU-Power, Front-Panel – dann erster Start ins BIOS/UEFI.",
      },
    ];
    let next = 0,
      errors = 0;
    host.innerHTML =
      '<div class="card"><h3>Station: PC-Zusammenbau</h3>' +
      '<p class="note">Klicke die Arbeitsschritte in der richtigen Reihenfolge. ESD-Armband ist angelegt.</p>' +
      '<div class="st-steps">' +
      STEPS.map(
        (s2) =>
          '<button type="button" class="btn ghost st-step" data-id="' +
          s2.id +
          '">' +
          esc(s2.n) +
          "</button>"
      ).join("") +
      "</div>" +
      '<div class="st-log" aria-live="polite"></div></div>';
    const log = host.querySelector(".st-log");
    host.querySelectorAll(".st-step").forEach((b) =>
      b.addEventListener("click", () => {
        const idx = STEPS.findIndex((s2) => s2.id === b.dataset.id);
        if (idx === next) {
          b.disabled = true;
          b.classList.remove("ghost");
          b.textContent = next + 1 + ". " + STEPS[idx].n;
          log.innerHTML = '<p class="st-ok">Richtig: ' + esc(STEPS[idx].w) + "</p>";
          next++;
          if (next === STEPS.length) {
            log.innerHTML =
              '<p class="st-ok"><strong>PC läuft!</strong> Alle 6 Schritte in korrekter Reihenfolge' +
              (errors
                ? " (" + errors + " Fehlgriff(e) unterwegs)."
                : " – fehlerfrei, saubere Arbeit.") +
              "</p>";
            if (!errors) Gami.addXp(15, "PC fehlerfrei zusammengebaut");
          }
        } else {
          errors++;
          log.innerHTML =
            '<p class="st-bad">Noch nicht: „' +
            esc(STEPS[idx].n) +
            "“ kommt später. " +
            esc(
              idx < next ? "Diesen Schritt hast du schon erledigt." : "Was muss vorher passieren?"
            ) +
            "</p>";
        }
      })
    );
  }
  function ipkonfig(host) {
    const OK = { ip: "192.168.10.20", mask: "255.255.255.192", gw: "192.168.10.1" };
    host.innerHTML =
      '<div class="card"><h3>Station: IP-Konfigurator</h3>' +
      '<p class="note">Der Server hat 192.168.10.10/26, das Gateway 192.168.10.1. Konfiguriere den neuen Client so, dass der Ping zum Server klappt.</p>' +
      '<div class="st-form">' +
      '<label>IP-Adresse <select data-k="ip"><option value="">– wählen –</option><option>192.168.10.20</option><option>192.168.10.70</option><option>192.168.11.20</option><option>192.168.10.63</option></select></label>' +
      '<label>Subnetzmaske <select data-k="mask"><option value="">– wählen –</option><option>255.255.255.0</option><option>255.255.255.192</option><option>255.255.0.0</option></select></label>' +
      '<label>Gateway <select data-k="gw"><option value="">– wählen –</option><option>192.168.10.1</option><option>192.168.10.65</option><option>192.168.11.1</option></select></label>' +
      '</div><div class="q-actions"><button class="btn small st-ping">Ping 192.168.10.10 senden</button></div><div class="st-log" aria-live="polite"></div></div>';
    host.querySelector(".st-ping").addEventListener("click", () => {
      const v = {};
      host.querySelectorAll("select").forEach((s2) => (v[s2.dataset.k] = s2.value));
      const log = host.querySelector(".st-log");
      if (!v.ip || !v.mask || !v.gw) {
        log.innerHTML = '<p class="st-bad">Erst alle drei Felder setzen.</p>';
        return;
      }
      let fail = "";
      if (v.mask !== OK.mask)
        fail =
          "Falsche Maske: Der Server nutzt /26 (255.255.255.192) – mit einer anderen Maske sehen Client und Server verschiedene Netzgrenzen.";
      else if (v.ip === "192.168.10.70")
        fail =
          "192.168.10.70 liegt im NÄCHSTEN /26-Block (.64–.127) – anderes Subnetz, der Ping geht ins Leere bzw. zum Router.";
      else if (v.ip === "192.168.11.20")
        fail = "Ganz anderes Netz (192.168.11.x) – ohne Routing keine Verbindung.";
      else if (v.ip === "192.168.10.63")
        fail =
          "192.168.10.63 ist die BROADCAST-Adresse des /26-Blocks 0–63 – als Host-IP unzulässig.";
      else if (v.gw !== OK.gw)
        fail =
          "Das Gateway 192.168.10.1 liegt im eigenen Block 0–63. " +
          v.gw +
          " ist nicht erreichbar oder falsch.";
      const log2 = fail
        ? '<pre class="st-term">C:\\> ping 192.168.10.10\nZeitüberschreitung der Anforderung.</pre><p class="st-bad">' +
          esc(fail) +
          "</p>"
        : '<pre class="st-term">C:\\> ping 192.168.10.10\nAntwort von 192.168.10.10: Bytes=32 Zeit&lt;1ms TTL=128 (4/4)</pre><p class="st-ok"><strong>Verbunden!</strong> Client (.20), Server (.10) und Gateway (.1) liegen alle im /26-Block 0–63.</p>';
      log.innerHTML = log2;
      if (!fail && !Store.get("st_ip_done", false)) {
        Store.set("st_ip_done", true);
        Gami.addXp(15, "IP-Konfiguration korrekt");
      }
    });
  }
  function schutzbedarf(host) {
    const CASES = [
      {
        s: "Interne Kaffeekassen-Liste im Teamordner",
        ok: "normal",
        w: "Peinlich bei Verlust, aber weder existenz- noch personenkritisch → normal.",
      },
      {
        s: "Kundendatenbank des Webshops (Namen, Adressen, Bestellungen)",
        ok: "hoch",
        w: "Personenbezogene Daten in Masse: DSGVO-Meldepflichten, Reputationsschaden → hoch.",
      },
      {
        s: "Steuerung der Produktionsanlage (24/7-Fertigung)",
        ok: "sehr hoch",
        w: "Stillstand kostet ab Minute eins, Manipulationsgefahr für Menschen und Maschinen → sehr hoch.",
      },
    ];
    host.innerHTML =
      '<div class="card"><h3>Station: Schutzbedarf einstufen</h3>' +
      '<p class="note">Stufe jedes System ein wie in der BSI-Schutzbedarfsanalyse – danach gibt es die Begründung.</p>' +
      CASES.map(
        (c, i) =>
          '<div class="st-case"><p style="margin:8px 0 4px"><strong>' +
          esc(c.s) +
          "</strong></p>" +
          '<div role="group" aria-label="Einstufung">' +
          ["normal", "hoch", "sehr hoch"]
            .map(
              (v) =>
                '<button type="button" class="btn small ghost st-rate" data-i="' +
                i +
                '" data-v="' +
                v +
                '">' +
                v +
                "</button>"
            )
            .join(" ") +
          "</div>" +
          '<p class="st-fb" data-i="' +
          i +
          '" aria-live="polite"></p></div>'
      ).join("") +
      "</div>";
    let solved = 0;
    host.querySelectorAll(".st-rate").forEach((b) =>
      b.addEventListener("click", () => {
        const c = CASES[+b.dataset.i],
          fb = host.querySelector('.st-fb[data-i="' + b.dataset.i + '"]');
        if (b.dataset.v === c.ok) {
          fb.innerHTML = '<span class="st-ok">Richtig (' + esc(c.ok) + "): " + esc(c.w) + "</span>";
          host
            .querySelectorAll('.st-rate[data-i="' + b.dataset.i + '"]')
            .forEach((x) => (x.disabled = true));
          b.classList.remove("ghost");
          if (++solved === CASES.length && !Store.get("st_schutz_done", false)) {
            Store.set("st_schutz_done", true);
            Gami.addXp(15, "Schutzbedarf korrekt eingestuft");
          }
        } else
          fb.innerHTML =
            '<span class="st-bad">Überlege: Wer ist betroffen, was kostet ein Ausfall, was verlangt das Gesetz?</span>';
      })
    );
  }
  function firewall(host) {
    const PKTS = [
      {
        d: "Internet → Webserver (DMZ), TCP 443",
        src: "internet",
        dst: "dmz",
        port: 443,
        soll: true,
      },
      {
        d: "Internet → Datenbank (LAN), TCP 3306",
        src: "internet",
        dst: "lan",
        port: 3306,
        soll: false,
      },
      {
        d: "Webserver (DMZ) → Datenbank (LAN), TCP 3306",
        src: "dmz",
        dst: "lan",
        port: 3306,
        soll: true,
      },
      { d: "LAN → Internet, TCP 443", src: "lan", dst: "internet", port: 443, soll: true },
      { d: "Internet → LAN, TCP 3389 (RDP)", src: "internet", dst: "lan", port: 3389, soll: false },
    ];
    const sel = (k, opts, lbl) =>
      '<select data-k="' +
      k +
      '" aria-label="' +
      (lbl || "Auswahl " + k) +
      '">' +
      opts.map((o) => '<option value="' + o[0] + '">' + o[1] + "</option>").join("") +
      "</select>";
    const ruleRow = (i) =>
      '<div class="st-rule"><span class="badge">Regel ' +
      (i + 1) +
      "</span> " +
      sel(
        "src" + i,
        [
          ["internet", "Internet"],
          ["dmz", "DMZ"],
          ["lan", "LAN"],
          ["any", "beliebig"],
        ],
        "Regel " + (i + 1) + ": Quelle"
      ) +
      " → " +
      sel(
        "dst" + i,
        [
          ["dmz", "DMZ"],
          ["lan", "LAN"],
          ["internet", "Internet"],
          ["any", "beliebig"],
        ],
        "Regel " + (i + 1) + ": Ziel"
      ) +
      " Port " +
      sel(
        "port" + i,
        [
          ["443", "443"],
          ["3306", "3306"],
          ["3389", "3389"],
          ["any", "beliebig"],
        ],
        "Regel " + (i + 1) + ": Port"
      ) +
      " " +
      sel(
        "act" + i,
        [
          ["allow", "ERLAUBEN"],
          ["deny", "BLOCKIEREN"],
        ],
        "Regel " + (i + 1) + ": Aktion"
      ) +
      "</div>";
    host.innerHTML =
      '<div class="card"><h3>Station: Firewall-Regelwerk</h3>' +
      '<p class="note">Baue drei Regeln (Auswertung von oben nach unten, „First Match wins“, am Ende gilt: alles andere blockiert). Ziel: Webshop erreichbar, LAN geschützt, DMZ darf zur Datenbank.</p>' +
      [0, 1, 2].map(ruleRow).join("") +
      '<div class="q-actions"><button class="btn small st-fwtest">Testpakete senden</button></div><div class="st-log" aria-live="polite"></div></div>';
    host.querySelector(".st-fwtest").addEventListener("click", () => {
      const rules = [0, 1, 2].map((i) => ({
        src: host.querySelector('[data-k="src' + i + '"]').value,
        dst: host.querySelector('[data-k="dst' + i + '"]').value,
        port: host.querySelector('[data-k="port' + i + '"]').value,
        act: host.querySelector('[data-k="act' + i + '"]').value,
      }));
      const verdict = (p) => {
        for (const r of rules)
          if (
            (r.src === "any" || r.src === p.src) &&
            (r.dst === "any" || r.dst === p.dst) &&
            (r.port === "any" || +r.port === p.port)
          )
            return r.act === "allow";
        return false;
      };
      let ok = 0;
      const rows = PKTS.map((p) => {
        const ist = verdict(p),
          gut = ist === p.soll;
        if (gut) ok++;
        return (
          '<li class="' +
          (gut ? "st-ok" : "st-bad") +
          '">' +
          esc(p.d) +
          " → " +
          (ist ? "durchgelassen" : "blockiert") +
          (gut ? " (korrekt)" : " – sollte " + (p.soll ? "durchgehen" : "blockiert sein")) +
          "</li>"
        );
      }).join("");
      host.querySelector(".st-log").innerHTML =
        '<ul style="padding-left:18px;margin:10px 0">' +
        rows +
        "</ul>" +
        (ok === PKTS.length
          ? '<p class="st-ok"><strong>Regelwerk sitzt!</strong> Minimal, gezielt, Default Deny – genau so gehört es in die AP2-Konzeptaufgabe.</p>'
          : '<p class="st-bad">' +
            ok +
            "/5 Testpakete korrekt behandelt. Tipp: eine Regel je Soll-Verbindung, Reihenfolge beachten, nichts pauschal öffnen.</p>");
      if (ok === PKTS.length && !Store.get("st_fw_done", false)) {
        Store.set("st_fw_done", true);
        Gami.addXp(20, "Firewall-Regelwerk fehlerfrei");
      }
    });
  }
  function netzplan(host) {
    const SOLL = { fezB: 8, fezC: 9, fazD: 9, gpB: 1, gpC: 0 };
    host.innerHTML =
      '<div class="card"><h3>Station: Netzplan berechnen</h3>' +
      '<p class="note">A (3 Tage) hat zwei Nachfolger: B (5 Tage) und C (6 Tage). Beide münden in D (4 Tage). Projektstart bei 0. Fülle die Felder und prüfe dich.</p>' +
      '<svg viewBox="0 0 760 210" role="img" aria-label="Netzplan mit vier Vorgängen" style="width:100%;max-width:700px">' +
      '<rect x="20" y="80" width="130" height="50" fill="var(--ac-soft)" stroke="var(--ac)"/><text x="85" y="100" text-anchor="middle" font-size="13" fill="var(--tx)">A · 3 Tage</text><text x="85" y="118" text-anchor="middle" font-size="11" fill="var(--tx3)">FAZ 0 · FEZ 3</text>' +
      '<rect x="300" y="20" width="130" height="50" fill="var(--bg3)" stroke="var(--line-strong)"/><text x="365" y="40" text-anchor="middle" font-size="13" fill="var(--tx)">B · 5 Tage</text><text x="365" y="58" text-anchor="middle" font-size="11" fill="var(--tx3)">FAZ 3 · FEZ ?</text>' +
      '<rect x="300" y="140" width="130" height="50" fill="var(--bg3)" stroke="var(--line-strong)"/><text x="365" y="160" text-anchor="middle" font-size="13" fill="var(--tx)">C · 6 Tage</text><text x="365" y="178" text-anchor="middle" font-size="11" fill="var(--tx3)">FAZ 3 · FEZ ?</text>' +
      '<rect x="580" y="80" width="130" height="50" fill="var(--bg3)" stroke="var(--line-strong)"/><text x="645" y="100" text-anchor="middle" font-size="13" fill="var(--tx)">D · 4 Tage</text><text x="645" y="118" text-anchor="middle" font-size="11" fill="var(--tx3)">FAZ ? · Ende ?</text>' +
      '<line x1="150" y1="95" x2="300" y2="45" stroke="var(--ac)" stroke-width="1.6"/><line x1="150" y1="115" x2="300" y2="165" stroke="var(--ac)" stroke-width="1.6"/>' +
      '<line x1="430" y1="45" x2="580" y2="95" stroke="var(--ac)" stroke-width="1.6"/><line x1="430" y1="165" x2="580" y2="115" stroke="var(--ac)" stroke-width="1.6"/></svg>' +
      '<div class="st-form">' +
      '<label>FEZ von B <input class="gap-input" data-k="fezB" inputmode="numeric" class="w-70px"></label>' +
      '<label>FEZ von C <input class="gap-input" data-k="fezC" inputmode="numeric" class="w-70px"></label>' +
      '<label>FAZ von D <input class="gap-input" data-k="fazD" inputmode="numeric" class="w-70px"></label>' +
      '<label>GP von B <input class="gap-input" data-k="gpB" inputmode="numeric" class="w-70px"></label>' +
      '<label>GP von C <input class="gap-input" data-k="gpC" inputmode="numeric" class="w-70px"></label>' +
      '</div><div class="q-actions"><button class="btn small st-npcheck">Prüfen</button></div><div class="st-log" aria-live="polite"></div></div>';
    host.querySelector(".st-npcheck").addEventListener("click", () => {
      let ok = 0;
      const fb = [];
      for (const k in SOLL) {
        const inp = host.querySelector('[data-k="' + k + '"]');
        const good = parseInt(inp.value, 10) === SOLL[k];
        inp.style.borderColor = good ? "var(--ok)" : "var(--err)";
        if (good) ok++;
        else fb.push(k);
      }
      host.querySelector(".st-log").innerHTML =
        ok === 5
          ? '<p class="st-ok"><strong>Alles richtig!</strong> Kritischer Pfad A–C–D (GP 0), Projektdauer 13 Tage. B hat einen Tag Luft.</p>'
          : '<p class="st-bad">' +
            ok +
            "/5 korrekt. Vorwärts: FEZ = FAZ + Dauer; FAZ von D = MAXIMUM der Vorgänger-FEZ. Rückwärts von Tag 13: GP = SAZ − FAZ.</p>";
      if (ok === 5 && !Store.get("st_np_done", false)) {
        Store.set("st_np_done", true);
        Gami.addXp(20, "Netzplan komplett richtig berechnet");
      }
    });
  }
  function sqlbau(host) {
    const ROWS = [
      { name: "Auer", ort: "Köln", umsatz: 1800 },
      { name: "Berg", ort: "Hamburg", umsatz: 950 },
      { name: "Celik", ort: "Köln", umsatz: 3200 },
      { name: "Dietz", ort: "München", umsatz: 400 },
      { name: "Endres", ort: "Köln", umsatz: 700 },
    ];
    host.innerHTML =
      '<div class="card"><h3>Station: SQL-Baukasten</h3>' +
      '<p class="note"><strong>Auftrag:</strong> Zeige NAME und UMSATZ aller Kunden aus Köln mit Umsatz über 500 €, absteigend nach Umsatz. Stelle die Abfrage zusammen und führe sie aus.</p>' +
      '<div class="st-form" style="font-family:var(--mono);font-size:.9rem;align-items:center">' +
      '<span>SELECT</span><select data-k="sel"><option value="*">*</option><option value="name">name</option><option value="name,umsatz">name, umsatz</option><option value="count">COUNT(*)</option></select>' +
      '<span>FROM kunden WHERE</span><select data-k="w1"><option value="">— ohne —</option><option value="koeln">ort = &#39;Köln&#39;</option><option value="ham">ort = &#39;Hamburg&#39;</option></select>' +
      '<span>AND</span><select data-k="w2"><option value="">— ohne —</option><option value="u500">umsatz &gt; 500</option><option value="u2000">umsatz &gt; 2000</option></select>' +
      '<span>ORDER BY</span><select data-k="ord"><option value="">— ohne —</option><option value="ud">umsatz DESC</option><option value="ua">umsatz ASC</option><option value="na">name ASC</option></select>' +
      '</div><div class="q-actions"><button class="btn small st-sqlrun">Abfrage ausführen</button></div><div class="st-log" aria-live="polite"></div></div>';
    host.querySelector(".st-sqlrun").addEventListener("click", () => {
      const v = {};
      host.querySelectorAll("select").forEach((x) => (v[x.dataset.k] = x.value));
      let rows = ROWS.slice();
      if (v.w1 === "koeln") rows = rows.filter((r) => r.ort === "Köln");
      if (v.w1 === "ham") rows = rows.filter((r) => r.ort === "Hamburg");
      if (v.w2 === "u500") rows = rows.filter((r) => r.umsatz > 500);
      if (v.w2 === "u2000") rows = rows.filter((r) => r.umsatz > 2000);
      if (v.ord === "ud") rows.sort((a, b) => b.umsatz - a.umsatz);
      if (v.ord === "ua") rows.sort((a, b) => a.umsatz - b.umsatz);
      if (v.ord === "na") rows.sort((a, b) => a.name.localeCompare(b.name));
      let out;
      if (v.sel === "count")
        out =
          '<table class="tbl"><tr><th>COUNT(*)</th></tr><tr><td>' +
          rows.length +
          "</td></tr></table>";
      else {
        const cols = v.sel === "*" ? ["name", "ort", "umsatz"] : v.sel.split(",");
        out =
          '<table class="tbl"><tr>' +
          cols.map((c) => "<th>" + c + "</th>").join("") +
          "</tr>" +
          rows
            .map((r) => "<tr>" + cols.map((c) => "<td>" + r[c] + "</td>").join("") + "</tr>")
            .join("") +
          "</table>";
      }
      const ok = v.sel === "name,umsatz" && v.w1 === "koeln" && v.w2 === "u500" && v.ord === "ud";
      out += ok
        ? '<p class="st-ok"><strong>Genau der Auftrag!</strong> Celik (3200) vor Auer (1800), Endres (700) – WHERE filtert Zeilen, ORDER BY sortiert, SELECT wählt Spalten.</p>'
        : '<p class="note-dim">Ergebnis geliefert – entspricht es dem Auftrag? Prüfe Spalten, beide Filter und die Sortierung.</p>';
      host.querySelector(".st-log").innerHTML = out;
      if (ok && !Store.get("st_sql_done", false)) {
        Store.set("st_sql_done", true);
        Gami.addXp(15, "SQL-Abfrage korrekt zusammengestellt");
      }
    });
  }
  window.STATIONEN = { pcbau, ipkonfig, schutzbedarf, firewall, netzplan, sqlbau };
  window.STATION_MAP = {
    lf2: "pcbau",
    lf3: "ipkonfig",
    lf4: "schutzbedarf",
    lf8: "sqlbau",
    lf9: "firewall",
    lf11a: "firewall",
    lf12a: "netzplan",
    prap2: "netzplan",
    prap1: "pcbau",
    ae: "sqlbau",
    aeap: "sqlbau",
    fidp: "sqlbau",
    fidv: "firewall",
    kdm: "sqlbau",
    itse: "pcbau",
  };
  window.STATION_LINKS = {
    itsm: { t: "Deine Firma: Aufträge im virtuellen Systemhaus", href: "firma.html" },
    lf1: { t: "Deine Firma: Aufträge für den Betriebs-Einstieg", href: "firma.html" },
    lf5: { t: "Zahlensystem-Drill (bin/dez/hex, Endlosmodus)", href: "netztrainer.html#drills" },
    lf6: { t: "„Der Server ist down“-Missionen mit Bewertung", href: "praxis.html" },
    lf7: { t: "IT-Labor: Zoom-Reise bis auf die Platine", href: "labor.html" },
    lf10a: { t: "Interaktive Kommandozeile (Linux/Windows/Cisco)", href: "praxis.html" },
    wiso: { t: "Notentracker & Wirtschafts-Rechenaufgaben", href: "dashboard.html" },
    allgemein: { t: "Lern-Snacks: Kommunikation & Doku", href: "shorts.html" },
    zert: { t: "IPv6- und Subnetting-Drills", href: "netztrainer.html#drills" },
    ae: { t: "Fehler-Analyse: Code-Fälle im Terminal", href: "analyse.html" },
    aeap: { t: "Fehler-Analyse: SQL- und Code-Fälle", href: "analyse.html" },
  };
  window.mountStation = function (fid, host) {
    const key = window.STATION_MAP[fid];
    if (key && window.STATIONEN[key]) {
      STATIONEN[key](host);
      return true;
    }
    const link = window.STATION_LINKS[fid];
    if (link) {
      host.innerHTML =
        '<div class="card link-card"><h3><a href="' +
        link.href +
        '">Praxis-Station: ' +
        esc(link.t) +
        '</a></h3><p style="font-size:.88rem;color:var(--tx2);margin:6px 0 0">Hands-on-Übung passend zu diesem Lernfeld – ein Klick, und du bist drin.</p></div>';
      return true;
    }
    return false;
  };
})();
