"use strict";
(function () {
  var PAL = {
    0: ["var(--bg3)", "var(--line)"],
    1: ["var(--ac-soft)", "var(--ac)"],
    2: ["var(--viz1-f)", "var(--viz1-s)"],
    3: ["var(--viz2-f)", "var(--viz2-s)"],
    4: ["var(--viz3-f)", "var(--viz3-s)"],
    5: ["var(--viz4-f)", "var(--viz4-s)"],
    6: ["var(--viz5-f)", "var(--viz5-s)"],
  };
  function R(x, y, w, h, label, acc) {
    var p = PAL[acc || 0] || PAL[0];
    return (
      '<rect x="' +
      x +
      '" y="' +
      y +
      '" width="' +
      w +
      '" height="' +
      h +
      '" rx="9" fill="' +
      p[0] +
      '" stroke="' +
      p[1] +
      '" stroke-width="' +
      (acc ? 2 : 1.5) +
      '"' +
      (acc ? ' filter="url(#soft)"' : "") +
      "/>" +
      (label
        ? '<text x="' +
          (x + w / 2) +
          '" y="' +
          (y + h / 2 + 4) +
          '" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="12" font-weight="600" fill="var(--tx)">' +
          label +
          "</text>"
        : "")
    );
  }
  function A(x1, y1, x2, y2, dash) {
    return (
      '<line x1="' +
      x1 +
      '" y1="' +
      y1 +
      '" x2="' +
      x2 +
      '" y2="' +
      y2 +
      '" stroke="var(--ac)" stroke-width="2"' +
      (dash ? ' stroke-dasharray="6 4"' : "") +
      ' marker-end="url(#darr)"/>'
    );
  }
  function TX(x, y, s, mid, small) {
    return (
      '<text x="' +
      x +
      '" y="' +
      y +
      '"' +
      (mid ? ' text-anchor="middle"' : "") +
      ' font-family="IBM Plex Sans,sans-serif" font-size="' +
      (small ? 10.5 : 12) +
      '" fill="var(--tx3)">' +
      s +
      "</text>"
    );
  }
  function W(inner, label, h) {
    h = h || 300;
    return (
      '<svg viewBox="0 0 760 ' +
      h +
      '" role="img" aria-label="' +
      label +
      '"><defs><filter id="soft" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="1.6" stdDeviation="2" flood-color="#000" flood-opacity=".16"/></filter><marker id="darr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="var(--ac)"/></marker></defs>' +
      inner +
      "</svg>"
    );
  }
  function IBOX(x, y, w, h, d, fill, stroke) {
    var dx = d * 0.55,
      dy = d * 0.32,
      st = stroke || "var(--line-strong)";
    return (
      '<path d="M' +
      x +
      " " +
      (y - h) +
      " L" +
      (x + dx) +
      " " +
      (y - h - dy) +
      " L" +
      (x + w + dx) +
      " " +
      (y - h - dy) +
      " L" +
      (x + w) +
      " " +
      (y - h) +
      ' Z" fill="' +
      fill +
      '" stroke="' +
      st +
      '" stroke-width="1.2" opacity=".82"/>' +
      '<path d="M' +
      (x + w) +
      " " +
      (y - h) +
      " L" +
      (x + w + dx) +
      " " +
      (y - h - dy) +
      " L" +
      (x + w + dx) +
      " " +
      (y - dy) +
      " L" +
      (x + w) +
      " " +
      y +
      ' Z" fill="' +
      fill +
      '" stroke="' +
      st +
      '" stroke-width="1.2" opacity=".6"/>' +
      '<rect x="' +
      x +
      '" y="' +
      (y - h) +
      '" width="' +
      w +
      '" height="' +
      h +
      '" fill="' +
      fill +
      '" stroke="' +
      st +
      '" stroke-width="1.2"/>'
    );
  }
  function ILBL(x, y, w, h, t, mono) {
    return (
      '<text x="' +
      (x + w / 2) +
      '" y="' +
      (y - h / 2 + 3.5) +
      '" text-anchor="middle" font-family="' +
      (mono === false ? "IBM Plex Sans,sans-serif" : "IBM Plex Mono,monospace") +
      '" font-size="10" fill="var(--tx)">' +
      t +
      "</text>"
    );
  }
  function IDISK(x, y, t, par) {
    return (
      IBOX(
        x,
        y,
        64,
        20,
        16,
        par ? "var(--ac-soft)" : "var(--bg3)",
        par ? "var(--ac)" : "var(--line-strong)"
      ) + ILBL(x, y, 64, 20, t)
    );
  }
  window.TOPIC_VIZ = {
    osi: {
      title: "Das OSI-Modell: 7 Schichten mit Geräten und Protokollen",
      wiki: ["OSI-Modell", "https://de.wikipedia.org/wiki/OSI-Modell"],
      commons: "OSI model",
      svg: function () {
        var L = [
            ["7 Anwendung", "HTTP · DNS · SMTP", ""],
            ["6 Darstellung", "Formate · Verschlüsselung", ""],
            ["5 Sitzung", "Sitzungssteuerung · RPC", ""],
            ["4 Transport", "TCP · UDP · Ports", "Segmente"],
            ["3 Vermittlung", "IP · Router", "Pakete"],
            ["2 Sicherung", "MAC · Switch", "Frames"],
            ["1 Bitübertragung", "Kabel · Funk · Repeater", "Bits"],
          ],
          out = "";
        for (var i = 0; i < L.length; i++) {
          var y = 18 + i * 52,
            acc = i < 3 ? 2 : i === 3 ? 5 : i === 4 ? 3 : i === 5 ? 4 : 2;
          out +=
            R(60, y, 300, 44, L[i][0], acc) + TX(380, y + 28, L[i][1]) + TX(620, y + 28, L[i][2]);
        }
        out += TX(620, 20, "Verpackung:", 0, 1);
        return W(
          out,
          "OSI-Modell mit sieben Schichten, zugehörigen Protokollen und Verpackungseinheiten",
          400
        );
      },
    },
    dora: {
      title: "DHCP-Ablauf: DORA",
      wiki: [
        "Dynamic Host Configuration Protocol",
        "https://de.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol",
      ],
      commons: "DHCP session diagram",
      svg: function () {
        var out = R(60, 30, 140, 50, "Client", 2) + R(560, 30, 140, 50, "DHCP-Server", 3);
        var steps = [
          ["1. DISCOVER – Wer kann mir eine IP geben? (Broadcast)", 120, 0],
          ["2. OFFER – Ich biete dir 192.168.1.57 an", 165, 1],
          ["3. REQUEST – Ich nehme dieses Angebot an", 210, 0],
          ["4. ACKNOWLEDGE – Bestätigt, Lease läuft (inkl. Gateway & DNS)", 255, 1],
        ];
        for (var i = 0; i < steps.length; i++) {
          var y = steps[i][1],
            back = steps[i][2];
          out += back ? A(560, y, 200, y) : A(200, y, 560, y);
          out += TX(380, y - 8, steps[i][0], 1);
        }
        out +=
          '<line x1="130" y1="80" x2="130" y2="280" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4"/><line x1="630" y1="80" x2="630" y2="280" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4"/>';
        return W(
          out,
          "Sequenzdiagramm des DHCP-Ablaufs Discover, Offer, Request, Acknowledge",
          300
        );
      },
    },
    raid: {
      title: "RAID 0, 1 und 5 als Laufwerks-Stapel (Paritätsrotation bei RAID 5 dargestellt)",
      wiki: ["RAID", "https://de.wikipedia.org/wiki/RAID"],
      commons: "RAID 5 diagram",
      svg: function () {
        var out = "",
          base = 200;
        function sock(x, w, label) {
          return (
            IBOX(x - 8, base + 26, w, 10, 22, "var(--bg3)") +
            '<text x="' +
            (x + w / 2 - 8) +
            '" y="' +
            (base + 52) +
            '" text-anchor="middle" font-family="IBM Plex Sans,sans-serif" font-size="11" font-weight="600" fill="var(--tx)">' +
            label +
            "</text>"
          );
        }
        out += sock(55, 180, "RAID 0 – Striping");
        out +=
          IDISK(60, base) +
          ILBL(60, base, 64, 20, "") +
          IDISK(60, base - 26, "A3") +
          IDISK(60, base, "A1");
        out += IDISK(150, base - 26, "A4") + IDISK(150, base, "A2");
        out +=
          TX(140, base - 72, "Lesen/Schreiben parallel", 1, 1) +
          TX(140, base + 72, "Ausfall 1 Platte = ALLE Daten weg", 1, 1);
        out += sock(310, 180, "RAID 1 – Spiegelung");
        out += IDISK(315, base - 26, "A2") + IDISK(315, base, "A1");
        out += IDISK(405, base - 26, "A2") + IDISK(405, base, "A1");
        out +=
          '<path d="M383 ' +
          (base - 36) +
          " C 393 " +
          (base - 56) +
          ", 403 " +
          (base - 56) +
          ", 413 " +
          (base - 36) +
          '" fill="none" stroke="var(--ac)" stroke-width="1.6" marker-end="url(#darr)"/>';
        out +=
          TX(395, base - 72, "identische Kopie (Mirror)", 1, 1) +
          TX(395, base + 72, "1 Platte darf ausfallen · 50 % Nettokapazität", 1, 1);
        out += sock(555, 190, "RAID 5 – Striping + Parität");
        out +=
          IDISK(548, base - 52, "Cp", 1) + IDISK(548, base - 26, "B1") + IDISK(548, base, "A1");
        out +=
          IDISK(618, base - 52, "C1") + IDISK(618, base - 26, "Bp", 1) + IDISK(618, base, "A2");
        out +=
          IDISK(688, base - 52, "C2") + IDISK(688, base - 26, "B2") + IDISK(688, base, "Ap", 1);
        out +=
          TX(650, base - 92, "Parität rotiert über alle Platten", 1, 1) +
          TX(650, base + 72, "min. 3 Platten · 1 darf ausfallen · netto (n−1)×Größe", 1, 1);
        out += TX(
          380,
          300,
          "Blöcke einer Datei: A1, A2 … · P/Ap/Bp/Cp = Paritätsblock (XOR) · RAID ersetzt kein Backup!",
          1
        );
        return W(
          out,
          "RAID 0, 1 und 5 als isometrische Laufwerks-Stapel mit Datenbloecken und rotierender Paritaet",
          320
        );
      },
    },
    backup: {
      title: "Backup-Strategien: Voll, differenziell, inkrementell",
      wiki: ["Datensicherung", "https://de.wikipedia.org/wiki/Datensicherung"],
      svg: function () {
        var days = ["So", "Mo", "Di", "Mi", "Do"],
          out = "";
        out += TX(50, 40, "Voll:", 0) + TX(50, 105, "Diff.:", 0) + TX(50, 170, "Inkr.:", 0);
        for (var i = 0; i < 5; i++) {
          var x = 120 + i * 120;
          out += TX(x + 35, 25, days[i], 1);
          out += R(x, 30, 70, 30, i === 0 ? "VOLL" : "VOLL", 1);
          out += R(x, 95, 70, 30 + i * 0, i === 0 ? "VOLL" : "Δ seit So", i === 0 ? 1 : 0);
          out += R(x, 160, 70, 30, i === 0 ? "VOLL" : "Δ seit " + days[i - 1], i === 0 ? 1 : 0);
        }
        out += TX(
          380,
          225,
          "Restore am Do: Voll = 1 Satz · Differenziell = Voll + letzte Diff · Inkrementell = Voll + alle Δ",
          1
        );
        return W(
          out,
          "Zeitstrahl-Vergleich von Voll-, differenzieller und inkrementeller Sicherung",
          250
        );
      },
    },
    topologien: {
      title: "Netzwerk-Topologien: Stern, Bus, Ring",
      wiki: ["Topologie (Rechnernetz)", "https://de.wikipedia.org/wiki/Topologie_(Rechnernetz)"],
      commons: "network topology diagram",
      svg: function () {
        var out = "";
        out += TX(140, 30, "Stern (heute Standard)", 1) + R(105, 90, 70, 36, "Switch", 1);
        var pts = [
          [60, 45],
          [220, 45],
          [60, 175],
          [220, 175],
        ];
        for (var i = 0; i < 4; i++) {
          out +=
            R(pts[i][0] - 25, pts[i][1] - 14, 50, 28, "PC") +
            '<line x1="' +
            pts[i][0] +
            '" y1="' +
            pts[i][1] +
            '" x2="140" y2="108" stroke="var(--ac)" stroke-width="2"/>';
        }
        out +=
          TX(400, 30, "Bus (historisch)", 1) +
          '<line x1="310" y1="130" x2="490" y2="130" stroke="var(--ac)" stroke-width="3"/>';
        for (var j = 0; j < 3; j++) {
          var bx = 330 + j * 60;
          out +=
            R(bx - 22, 60, 44, 26, "PC") +
            '<line x1="' +
            bx +
            '" y1="86" x2="' +
            bx +
            '" y2="130" stroke="var(--ac)" stroke-width="2"/>';
        }
        out += TX(400, 160, "1 Kabelbruch legt alles lahm", 1, 1);
        out +=
          TX(630, 30, "Ring", 1) +
          '<circle cx="630" cy="115" r="55" fill="none" stroke="var(--ac)" stroke-width="2"/>';
        var ang = [0, 120, 240];
        for (var k = 0; k < 3; k++) {
          var a = (ang[k] * Math.PI) / 180,
            cx = 630 + 55 * Math.cos(a),
            cy = 115 + 55 * Math.sin(a);
          out += R(cx - 22, cy - 13, 44, 26, "PC");
        }
        return W(out, "Vergleich der Netzwerk-Topologien Stern, Bus und Ring", 210);
      },
    },
    handshake: {
      title: "TCP-Verbindungsaufbau: 3-Wege-Handshake",
      wiki: [
        "Transmission Control Protocol",
        "https://de.wikipedia.org/wiki/Transmission_Control_Protocol",
      ],
      svg: function () {
        var out = R(60, 30, 140, 50, "Client", 2) + R(560, 30, 140, 50, "Server", 3);
        out += A(200, 130, 560, 130) + TX(380, 120, "1. SYN – Verbindungswunsch (Seq = x)", 1);
        out +=
          A(560, 180, 200, 180) +
          TX(380, 170, "2. SYN-ACK – einverstanden (Seq = y, Ack = x+1)", 1);
        out +=
          A(200, 230, 560, 230) +
          TX(380, 220, "3. ACK – bestätigt (Ack = y+1) → Verbindung steht", 1);
        out +=
          '<line x1="130" y1="80" x2="130" y2="255" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4"/><line x1="630" y1="80" x2="630" y2="255" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4"/>';
        return W(out, "Sequenzdiagramm des TCP-Drei-Wege-Handshakes", 280);
      },
    },
    nat: {
      title: "NAT/PAT: private Adressen hinter einer öffentlichen IP",
      wiki: [
        "Netzwerkadressübersetzung",
        "https://de.wikipedia.org/wiki/Netzwerkadress%C3%BCbersetzung",
      ],
      svg: function () {
        var out =
          R(40, 40, 150, 44, "PC 192.168.1.10") +
          R(40, 110, 150, 44, "PC 192.168.1.11") +
          R(40, 180, 150, 44, "PC 192.168.1.12");
        out +=
          R(300, 100, 150, 70, "Router mit NAT", 1) +
          TX(375, 90, "übersetzt Quell-IP + Port", 1, 1);
        out += R(560, 100, 160, 70, "Internet sieht nur:") + TX(640, 155, "203.0.113.5", 1);
        out +=
          A(190, 62, 300, 120) +
          A(190, 132, 300, 135) +
          A(190, 202, 300, 150) +
          A(450, 135, 560, 135);
        out += TX(
          380,
          250,
          "Viele private Adressen (RFC 1918) teilen sich eine öffentliche IP – unterschieden per Portnummer (PAT).",
          1
        );
        return W(
          out,
          "NAT-Übersetzung mehrerer privater IP-Adressen auf eine öffentliche Adresse",
          270
        );
      },
    },
    zahlen: {
      title: "Zahlensysteme: Stellenwerte und Umrechnung",
      wiki: ["Dualsystem", "https://de.wikipedia.org/wiki/Dualsystem"],
      svg: function () {
        var out = TX(380, 30, "Beispiel: 1101 0110₂ = 214₁₀ = D6₁₆", 1);
        var bits = "11010110",
          vals = [128, 64, 32, 16, 8, 4, 2, 1];
        for (var i = 0; i < 8; i++) {
          var x = 100 + i * 72;
          out +=
            R(x, 50, 60, 40, bits[i], bits[i] === "1" ? 1 : 0) +
            TX(x + 30, 110, String(vals[i]), 1, 1);
        }
        out += TX(380, 140, "Nur die Einsen zählen: 128 + 64 + 16 + 4 + 2 = 214", 1);
        out += R(150, 170, 200, 44, "1101 → D (13)", 1) + R(410, 170, 200, 44, "0110 → 6", 1);
        out += TX(380, 245, "4 Bit = genau 1 Hex-Ziffer → Binär in Vierergruppen lesen.", 1);
        return W(
          out,
          "Umrechnung zwischen Binär-, Dezimal- und Hexadezimalsystem am Beispiel 214",
          270
        );
      },
    },
    speicher: {
      title: "Speicherhierarchie: schnell & klein → groß & langsam",
      wiki: ["Speicherhierarchie", "https://de.wikipedia.org/wiki/Speicherhierarchie"],
      svg: function () {
        var rows = [
            ["Register", "1 Takt", "~ KB"],
            ["CPU-Cache (L1–L3)", "Nanosek.", "~ MB"],
            ["Arbeitsspeicher (RAM)", "~100 ns", "~ GB"],
            ["SSD (NVMe/SATA)", "~µs", "~ TB"],
            ["HDD / Band / Cloud-Archiv", "ms und mehr", "~ TB–PB"],
          ],
          out = "";
        for (var i = 0; i < 5; i++) {
          var w = 180 + i * 110,
            x = (760 - w) / 2,
            y = 30 + i * 52;
          out +=
            R(x, y, w, 42, rows[i][0], i < 2 ? 1 : 0) +
            TX(60, y + 26, rows[i][1], 0, 1) +
            TX(700, y + 26, rows[i][2], 0, 1);
        }
        out += TX(
          380,
          295,
          "Nach unten: mehr Kapazität, weniger Tempo – Caching hält heiße Daten oben.",
          1
        );
        return W(out, "Pyramide der Speicherhierarchie von Registern bis zum Archivspeicher", 320);
      },
    },
    gantt: {
      title: "Projektplanung: Gantt-Diagramm mit kritischem Pfad",
      wiki: ["Gantt-Diagramm", "https://de.wikipedia.org/wiki/Gantt-Diagramm"],
      svg: function () {
        var tasks = [
            ["Ist-Analyse", 0, 2, 1],
            ["Soll-Konzept", 2, 3, 1],
            ["Beschaffung", 5, 2, 0],
            ["Umsetzung", 5, 4, 1],
            ["Test & Abnahme", 9, 2, 1],
            ["Doku", 8, 3, 0],
          ],
          out = "";
        for (var d = 0; d <= 11; d++) {
          var gx = 180 + d * 48;
          out +=
            '<line x1="' +
            gx +
            '" y1="30" x2="' +
            gx +
            '" y2="250" stroke="var(--line)" stroke-width="1" opacity=".4"/>' +
            (d % 2 === 0 ? TX(gx, 270, "T" + d, 1, 1) : "");
        }
        for (var i = 0; i < tasks.length; i++) {
          var t = tasks[i],
            y = 40 + i * 34;
          out += TX(30, y + 15, t[0], 0, 1) + R(180 + t[1] * 48, y, t[2] * 48, 22, "", t[3]);
        }
        out += TX(
          380,
          295,
          "Farbig = kritischer Pfad: jede Verzögerung dort verschiebt das Projektende (kein Puffer).",
          1
        );
        return W(out, "Gantt-Diagramm eines IT-Projekts mit markiertem kritischem Pfad", 320);
      },
    },
    subnetz: {
      title: "Subnetting: aus /24 werden vier /26",
      wiki: ["Netzmaske", "https://de.wikipedia.org/wiki/Netzmaske"],
      svg: function () {
        var out = R(80, 30, 600, 44, "192.168.10.0/24 – 254 Hosts", 1);
        var blocks = [
          [".0 – .63", "/26"],
          [".64 – .127", "/26"],
          [".128 – .191", "/26"],
          [".192 – .255", "/26"],
        ];
        for (var i = 0; i < 4; i++) {
          var x = 80 + i * 152;
          out +=
            R(x, 120, 140, 50, blocks[i][0]) +
            TX(x + 70, 190, blocks[i][1] + " · 62 Hosts", 1, 1) +
            A(380, 74, x + 70, 120);
        }
        out += TX(
          380,
          240,
          "2 geliehene Bits → 4 Teilnetze · Schrittweite 64 · erste Adresse = Netz, letzte = Broadcast",
          1
        );
        return W(out, "Aufteilung eines /24-Netzes in vier /26-Subnetze", 260);
      },
    },
  };
  Object.assign(window.TOPIC_VIZ, {
    stp: {
      title: "Spanning Tree: Root Bridge, Rollen und der blockierte Redundanzpfad",
      wiki: ["Spanning Tree Protocol", "https://de.wikipedia.org/wiki/Spanning_Tree_Protocol"],
      svg: function () {
        var out = "";
        out +=
          R(310, 30, 140, 54, "", 1) +
          TX(380, 52, "Root Bridge", 1) +
          TX(380, 70, "Priorität 4096", 1, 1);
        out +=
          R(80, 150, 140, 54, "", 2) + TX(150, 172, "Switch B", 1) + TX(150, 190, "32768", 1, 1);
        out +=
          R(540, 150, 140, 54, "", 2) + TX(610, 172, "Switch C", 1) + TX(610, 190, "32768", 1, 1);
        out += '<line x1="310" y1="70" x2="220" y2="160" stroke="var(--viz3-s)" stroke-width="3"/>';
        out += '<line x1="450" y1="70" x2="540" y2="160" stroke="var(--viz3-s)" stroke-width="3"/>';
        out +=
          '<line x1="220" y1="185" x2="540" y2="185" stroke="var(--viz5-s)" stroke-width="3" stroke-dasharray="7 6"/>';
        out +=
          TX(230, 105, "Root Port ← Designated", 0, 1) +
          TX(415, 105, "Designated → Root Port", 0, 1);
        out +=
          R(320, 168, 120, 34, "BLOCKIERT", 6) +
          TX(380, 225, "Alternate Port: kein Datenverkehr, nur BPDU-Beobachtung", 1, 1);
        out += TX(
          380,
          262,
          "Fällt ein grüner Link aus, aktiviert (R)STP den gestrichelten Pfad – Redundanz ohne Schleife.",
          1
        );
        return W(
          out,
          "Drei Switches im Dreieck: aktive Pfade zur Root Bridge und ein blockierter Redundanzpfad",
          290
        );
      },
    },
    csma: {
      title: "CSMA/CA im WLAN: Warten, Backoff, ACK – und das Hidden-Station-Problem",
      wiki: [
        "Carrier Sense Multiple Access/Collision Avoidance",
        "https://de.wikipedia.org/wiki/Carrier_Sense_Multiple_Access/Collision_Avoidance",
      ],
      svg: function () {
        var out = "";
        var steps = [
          ["1. Medium abhören", "frei?", 3],
          ["2. IFS + Backoff", "zufällig warten", 5],
          ["3. Frame senden", "Daten →", 1],
          ["4. ACK abwarten", "sonst Wiederholung", 4],
        ];
        for (var i = 0; i < 4; i++) {
          var x = 40 + i * 185;
          out +=
            R(x, 50, 155, 58, "", steps[i][2]) +
            TX(x + 77, 74, steps[i][0], 1, 1) +
            TX(x + 77, 92, steps[i][1], 1, 1);
          if (i < 3) out += A(x + 155, 79, x + 185, 79);
        }
        out +=
          R(90, 190, 120, 50, "", 2) +
          TX(150, 211, "Station A", 1) +
          TX(150, 228, "hört B nicht", 1, 1);
        out += R(320, 190, 120, 50, "", 1) + TX(380, 211, "Access Point", 1);
        out +=
          R(550, 190, 120, 50, "", 2) +
          TX(610, 211, "Station B", 1) +
          TX(610, 228, "hört A nicht", 1, 1);
        out += A(210, 215, 320, 215) + A(550, 215, 440, 215);
        out +=
          '<path d="M225 258 C 300 285, 460 285, 535 258" fill="none" stroke="var(--viz5-s)" stroke-width="2" stroke-dasharray="5 5"/>';
        out += TX(
          380,
          300,
          "Hidden Station: A und B erreichen nur den AP – gegen gleichzeitiges Senden hilft RTS/CTS.",
          1
        );
        return W(
          out,
          "Ablauf von CSMA/CA in vier Schritten und Skizze des Hidden-Station-Problems",
          330
        );
      },
    },
    dmz: {
      title: "Firewall-Zonen: Internet, DMZ und internes Netz",
      wiki: [
        "Demilitarisierte Zone (Informatik)",
        "https://de.wikipedia.org/wiki/Demilitarisierte_Zone_(Informatik)",
      ],
      svg: function () {
        var out = "";
        out +=
          R(40, 90, 140, 70, "", 6) +
          TX(110, 118, "Internet", 1) +
          TX(110, 136, "nicht vertrauenswürdig", 1, 1);
        out += R(240, 90, 90, 70, "FW 1", 1);
        out +=
          R(390, 60, 180, 130, "", 5) +
          TX(480, 80, "DMZ", 1) +
          R(405, 95, 150, 36, "Webserver", 0) +
          R(405, 140, 150, 36, "Mail-Gateway", 0);
        out += R(620, 90, 90, 70, "FW 2", 1);
        out += A(180, 125, 240, 125) + A(330, 125, 390, 125) + A(570, 125, 620, 125);
        out +=
          R(620, 210, 110, 50, "", 4) +
          TX(675, 231, "LAN", 1) +
          TX(675, 248, "intern", 1, 1) +
          A(665, 160, 665, 210);
        out += TX(
          380,
          290,
          "Von außen erreichbar ist NUR die DMZ. Aus der DMZ ins LAN gilt: verweigern – kompromittierte",
          1
        );
        out += TX(
          380,
          308,
          "DMZ-Server dürfen nicht weiter nach innen. Einstufige Variante: eine Firewall mit drei Zonen-Ports.",
          1
        );
        return W(out, "Zweistufiges Firewall-Konzept mit Internet, DMZ und internem Netz", 330);
      },
    },
    dns: {
      title: "DNS-Namensauflösung: vom Client über Resolver zu Root, TLD und autoritativem Server",
      wiki: ["Domain Name System", "https://de.wikipedia.org/wiki/Domain_Name_System"],
      svg: function () {
        var out = "";
        out += R(40, 110, 120, 54, "", 2) + TX(100, 132, "Client", 1) + TX(100, 150, "stub", 1, 1);
        out +=
          R(240, 110, 150, 54, "", 1) +
          TX(315, 132, "Resolver", 1) +
          TX(315, 150, "rekursiv + Cache", 1, 1);
        out +=
          R(520, 30, 190, 44, "Root-Server", 3) +
          R(520, 110, 190, 44, "TLD-Server (.de)", 3) +
          R(520, 190, 190, 44, "autoritativ: firma.de", 4);
        out += A(160, 137, 240, 137) + TX(200, 125, "1", 1);
        out += A(390, 120, 520, 52) + TX(450, 72, "2 wer kennt .de?", 1, 1);
        out += A(390, 137, 520, 132) + TX(455, 122, "3 wer kennt firma.de?", 1, 1);
        out += A(390, 155, 520, 212) + TX(450, 200, "4 A-Record?", 1, 1);
        out +=
          A(240, 170, 160, 170, 1) +
          TX(200, 188, "5 Antwort: 203.0.113.10 (+TTL in den Cache)", 0, 1);
        out += TX(
          380,
          270,
          "Der Client fragt EINMAL (rekursiv), der Resolver hangelt sich iterativ durch – Antworten werden",
          1
        );
        out += TX(
          380,
          288,
          "gemäß TTL gecacht. Autoritativ = zuständig; Forwarder reicht an den nächsten Resolver weiter.",
          1
        );
        return W(
          out,
          "Rekursive DNS-Anfrage eines Clients und iterative Auflösung durch den Resolver",
          320
        );
      },
    },
    vpn: {
      title: "Site-to-Site-VPN: zwei Standorte über einen IPsec-Tunnel",
      wiki: ["Virtual Private Network", "https://de.wikipedia.org/wiki/Virtual_Private_Network"],
      svg: function () {
        var out = "";
        out +=
          R(40, 80, 150, 100, "", 4) +
          TX(115, 105, "Zentrale", 1) +
          TX(115, 124, "10.1.0.0/16", 1, 1) +
          R(60, 138, 110, 30, "Gateway", 1);
        out +=
          R(570, 80, 150, 100, "", 4) +
          TX(645, 105, "Filiale", 1) +
          TX(645, 124, "10.2.0.0/16", 1, 1) +
          R(590, 138, 110, 30, "Gateway", 1);
        out +=
          R(280, 95, 200, 70, "", 6) + TX(380, 123, "Internet", 1) + TX(380, 141, "unsicher", 1, 1);
        out +=
          '<path d="M170 153 C 280 60, 480 60, 590 153" fill="none" stroke="var(--viz2-s)" stroke-width="10" opacity=".35"/>';
        out +=
          '<path d="M170 153 C 280 60, 480 60, 590 153" fill="none" stroke="var(--viz2-s)" stroke-width="2.5"/>';
        out += TX(
          380,
          58,
          "IPsec-Tunnel: IKEv2 authentifiziert + handelt Schlüssel aus · ESP verschlüsselt die Pakete",
          1,
          1
        );
        out += TX(
          380,
          225,
          "Die Netze sprechen sich mit privaten Adressen an, als wären sie direkt verbunden –",
          1
        );
        out += TX(
          380,
          243,
          "das Internet sieht nur verschlüsselte Pakete zwischen den Gateways. Alternative für Einzelgeräte: Client-to-Site.",
          1
        );
        return W(
          out,
          "Zwei Standorte, deren Gateways einen verschlüsselten IPsec-Tunnel über das Internet aufbauen",
          270
        );
      },
    },
    erm: {
      title: "ER-Modell: Entitäten, Beziehung und die n:m-Auflösung per Zwischentabelle",
      wiki: [
        "Entity-Relationship-Modell",
        "https://de.wikipedia.org/wiki/Entity-Relationship-Modell",
      ],
      svg: function () {
        var out = "";
        out +=
          R(60, 50, 160, 60, "", 2) +
          TX(140, 74, "KUNDE", 1) +
          TX(140, 92, "k_id (PK), name", 1, 1);
        out +=
          R(540, 50, 160, 60, "", 2) +
          TX(620, 74, "ARTIKEL", 1) +
          TX(620, 92, "a_id (PK), preis", 1, 1);
        out +=
          '<path d="M310 80 L380 45 L450 80 L380 115 Z" fill="var(--viz4-f)" stroke="var(--viz4-s)" stroke-width="2" filter="url(#soft)"/>' +
          TX(380, 84, "bestellt", 1);
        out +=
          '<line x1="220" y1="80" x2="310" y2="80" stroke="var(--viz1-s)" stroke-width="2"/><line x1="450" y1="80" x2="540" y2="80" stroke="var(--viz1-s)" stroke-width="2"/>';
        out += TX(255, 70, "m", 1) + TX(500, 70, "n", 1);
        out += A(380, 120, 380, 165);
        out +=
          R(230, 170, 300, 64, "", 5) +
          TX(380, 192, "BESTELLPOSITION", 1) +
          TX(380, 212, "k_id (FK) + a_id (FK) = PK · menge, datum", 1, 1);
        out += TX(
          380,
          270,
          "Regel: n:m geht nicht direkt in Tabellen – die Beziehung wird zur Zwischentabelle mit beiden",
          1
        );
        out += TX(
          380,
          288,
          "Fremdschlüsseln als zusammengesetztem Primärschlüssel. 1:n-Beziehungen: Fremdschlüssel auf der n-Seite.",
          1
        );
        return W(
          out,
          "ER-Modell mit den Entitäten Kunde und Artikel, n:m-Beziehung und aufgelöster Zwischentabelle",
          320
        );
      },
    },
    eva: {
      title: "Das EVA(S)-Prinzip mit Beispielkomponenten",
      wiki: ["EVA-Prinzip", "https://de.wikipedia.org/wiki/EVA-Prinzip"],
      commons: "computer hardware motherboard",
      svg: function () {
        var out = "";
        out +=
          R(40, 90, 180, 70, "", 3) +
          TX(130, 115, "EINGABE", 1) +
          TX(130, 133, "Tastatur · Maus", 1, 1) +
          TX(130, 146, "Scanner · NIC ein", 1, 1);
        out +=
          R(290, 90, 180, 70, "", 1) +
          TX(380, 115, "VERARBEITUNG", 1) +
          TX(380, 133, "CPU · RAM", 1, 1) +
          TX(380, 146, "GPU · Chipsatz", 1, 1);
        out +=
          R(540, 90, 180, 70, "", 4) +
          TX(630, 115, "AUSGABE", 1) +
          TX(630, 133, "Monitor · Drucker", 1, 1) +
          TX(630, 146, "NIC aus", 1, 1);
        out +=
          R(290, 210, 180, 60, "", 5) +
          TX(380, 232, "SPEICHERUNG", 1) +
          TX(380, 250, "SSD · HDD · Band", 1, 1);
        out +=
          A(220, 125, 290, 125) +
          A(470, 125, 540, 125) +
          A(360, 160, 360, 210) +
          A(400, 210, 400, 160);
        out += TX(380, 290, "Jede Fehlersuche folgt diesem Raster: Engpass je Phase prüfen.", 1);
        return W(
          out,
          "EVA-Prinzip: Eingabe, Verarbeitung, Ausgabe und Speicherung mit Beispielkomponenten",
          300
        );
      },
    },
    kapsel: {
      title: "Kapselung: Daten werden Schicht für Schicht verpackt",
      wiki: ["OSI-Modell", "https://de.wikipedia.org/wiki/OSI-Modell"],
      commons: "encapsulation network packet",
      svg: function () {
        var out = "";
        out += R(40, 60, 680, 150, "", 0) + TX(70, 85, "Ethernet-Frame (Schicht 2)", 0, 1);
        out += R(150, 90, 500, 100, "", 0) + TX(180, 113, "IP-Paket (Schicht 3)", 0, 1);
        out += R(260, 120, 330, 55, "", 1) + TX(290, 141, "TCP-Segment (4)", 0, 1);
        out += R(400, 128, 170, 38, "Nutzdaten", 0);
        out += R(655, 60, 65, 150, "FCS", 0) + TX(688, 225, "Prüfsumme", 1, 1);
        out +=
          TX(95, 175, "MAC-Header", 0, 1) +
          TX(200, 175, "IP-Header", 0, 1) +
          TX(300, 163, "Ports", 0, 1);
        out += TX(
          380,
          260,
          "Senden: von innen nach außen verpacken – Empfangen: Schicht für Schicht auspacken.",
          1
        );
        return W(out, "Kapselung: Nutzdaten in TCP-Segment, IP-Paket und Ethernet-Frame", 290);
      },
    },
    vlsm: {
      title: "VLSM: ein /24 passgenau zerlegt (Beispielrechnung aus der Vertiefung)",
      wiki: [
        "Classless Inter-Domain Routing",
        "https://de.wikipedia.org/wiki/Classless_Inter-Domain_Routing",
      ],
      commons: "subnet mask",
      svg: function () {
        var out = "",
          x = 60,
          base = 110,
          sc = 2.34;
        var teile = [
          ["Produktion /25", "126 Hosts", 128, 1],
          ["Verwaltung /26", "62", 64, 0],
          ["Technik /27", "30", 32, 1],
          ["Server /28", "14", 16, 0],
          ["frei /28", "", 16, 0],
        ];
        out += TX(60, 70, "192.168.20.0/24 = 256 Adressen", 0) + TX(660, 70, ".255", 0, 1);
        for (var i = 0; i < teile.length; i++) {
          var w = teile[i][2] * sc;
          out +=
            R(x, 90, w, 64, "", teile[i][3]) +
            TX(x + w / 2, 118, teile[i][0], 1, 1) +
            (teile[i][1]
              ? TX(x + w / 2, 134, teile[i][1] + " Hosts", 1, 1)
              : TX(x + w / 2, 134, "Reserve", 1, 1));
          out += TX(x + 2, 175, "." + Math.round((x - 60) / sc), 0, 1);
          x += w;
        }
        out += TX(
          380,
          230,
          "Immer mit dem größten Bedarf beginnen – Subnetze starten an Vielfachen ihrer Größe.",
          1
        );
        return W(
          out,
          "Balkendarstellung eines per VLSM in vier Subnetze und Reserve zerlegten /24-Netzes",
          250
        );
      },
    },
    verfueg: {
      title: "Verfügbarkeit: Reihe senkt, Redundanz erhöht",
      wiki: ["Verfügbarkeit", "https://de.wikipedia.org/wiki/Verf%C3%BCgbarkeit"],
      commons: "server rack redundant power",
      svg: function () {
        var out = "";
        out +=
          TX(200, 50, "REIHE: beide nötig", 1) +
          R(80, 70, 110, 50, "99,9 %", 0) +
          R(250, 70, 110, 50, "99,9 %", 0) +
          A(190, 95, 250, 95);
        out +=
          A(30, 95, 80, 95) +
          A(360, 95, 410, 95) +
          TX(220, 155, "gesamt: 0,999 · 0,999 = 99,8 %", 1);
        out +=
          TX(580, 50, "PARALLEL: eine reicht", 1) +
          R(520, 70, 110, 44, "99,9 %", 1) +
          R(520, 130, 110, 44, "99,9 %", 1);
        out +=
          A(470, 108, 520, 92) +
          A(470, 108, 520, 152) +
          A(630, 92, 690, 108) +
          A(630, 152, 690, 108);
        out += TX(590, 205, "gesamt: 1 − 0,001² = 99,9999 %", 1);
        out += TX(
          380,
          255,
          "Jede zusätzlich NÖTIGE Komponente senkt die Gesamtverfügbarkeit – Redundanz hebt sie.",
          1
        );
        return W(out, "Vergleich der Gesamtverfügbarkeit bei Reihen- und Parallelschaltung", 280);
      },
    },
    cloudstack: {
      title: "Shared Responsibility: Wer betreibt was?",
      wiki: ["Cloud Computing", "https://de.wikipedia.org/wiki/Cloud_Computing"],
      commons: "data center servers",
      svg: function () {
        var rows = [
            "Daten & Zugriffe",
            "Anwendung",
            "Laufzeit/Middleware",
            "Betriebssystem",
            "Virtualisierung",
            "Hardware & RZ",
          ],
          cols = [
            ["On-Prem", 6],
            ["IaaS", 4],
            ["PaaS", 2],
            ["SaaS", 1],
          ],
          out = "";
        for (var c = 0; c < 4; c++) {
          var x = 120 + c * 155;
          out += TX(x + 70, 55, cols[c][0], 1);
          for (var r = 0; r < 6; r++) {
            var du = r < cols[c][1];
            out +=
              R(x, 65 + r * 42, 140, 36, "", du ? 1 : 3) +
              TX(x + 70, 87 + r * 42, du ? "du" : "Anbieter", 1, 1);
          }
        }
        for (var r2 = 0; r2 < 6; r2++)
          out +=
            TX(112, 87 + r2 * 42, rows[r2], 0, 1) +
            '<text x="108" y="' +
            (87 + r2 * 42) +
            '" text-anchor="end" font-family="IBM Plex Sans,sans-serif" font-size="10" fill="var(--tx3)"></text>';
        for (var r3 = 0; r3 < 6; r3++) {}
        out += TX(
          380,
          345,
          "Merksatz: Der Anbieter sichert die Cloud – du sicherst, was IN der Cloud liegt.",
          1
        );
        return W(out, "Verantwortungsmatrix für On-Premises, IaaS, PaaS und SaaS", 370);
      },
    },
    vierohren: {
      title: "Das Kommunikationsquadrat: vier Seiten einer Nachricht, vier Ohren des Empfängers",
      wiki: ["Vier-Seiten-Modell", "https://de.wikipedia.org/wiki/Vier-Seiten-Modell"],
      commons: "Vier Seiten Modell communication",
      svg: function () {
        var out = "";
        out +=
          R(30, 120, 120, 60, "Sender", 1) +
          TX(90, 200, "spricht mit", 1, 1) +
          TX(90, 213, "vier Schnäbeln", 1, 1);
        out +=
          R(610, 120, 120, 60, "Empfänger", 1) +
          TX(670, 200, "hört mit", 1, 1) +
          TX(670, 213, "vier Ohren", 1, 1);
        out +=
          '<rect x="270" y="70" width="220" height="160" fill="var(--bg3)" stroke="var(--line-strong)" stroke-width="1.5"/>';
        out += R(280, 40, 200, 40, "Sachinhalt", 3) + TX(380, 95, "Worüber informiere ich?", 1, 1);
        out +=
          R(280, 220, 200, 40, "Appell", 5) + TX(380, 212, "Wozu will ich dich veranlassen?", 1, 1);
        out +=
          R(150, 125, 110, 50, "Selbstkundgabe", 4) + TX(205, 190, "Was gebe ich preis?", 1, 1);
        out += R(500, 125, 110, 50, "Beziehung", 6) + TX(555, 190, "Wie stehen wir?", 1, 1);
        out += TX(380, 150, "NACHRICHT", 1);
        out += A(150, 150, 270, 150) + A(490, 150, 610, 150);
        out += TX(
          380,
          290,
          "Konflikt: gesendet auf einer Seite – gehört mit einem anderen Ohr. Profis prüfen alle vier Ebenen.",
          1
        );
        return W(
          out,
          "Kommunikationsquadrat nach Schulz von Thun mit Sender, vier Nachrichtenseiten und Empfänger",
          310
        );
      },
    },
    mailaufbau: {
      title: "Aufbau einer professionellen Kunden-E-Mail",
      wiki: ["E-Mail", "https://de.wikipedia.org/wiki/E-Mail"],
      svg: function () {
        var out = "",
          y = 30;
        var teile = [
          [
            "Betreff: konkret und eindeutig",
            "z. B. \u201eStörung Mailversand behoben – bitte Rückmeldung bis [Datum]\u201c",
            0,
          ],
          [
            "Einleitung: Anlass in einem Satz",
            "Prüfung, Umsetzung, Bearbeitungsstand oder benötigte Rückmeldung",
            0,
          ],
          [
            "Hauptteil: Aufzählung in Ich-Form",
            "- geprüft … - umgesetzt … - getestet … + Auswirkung für den Kunden",
            1,
          ],
          [
            "Offene Punkte mit Frist",
            "Was der Kunde tut, bis wann (Datum!), was ohne Rückmeldung passiert",
            1,
          ],
          [
            "Schluss: ein Satz",
            "Erwartete Rückmeldung + Abschlussbedingung – keine Floskel-Grußformel",
            0,
          ],
        ];
        teile.forEach(function (t) {
          out +=
            R(120, y, 520, 42, "", t[2]) + TX(140, y + 18, t[0], 0) + TX(140, y + 33, t[1], 0, 1);
          out += A(380, y + 42, 380, y + 54);
          y += 54;
        });
        out = out.slice(0, -1 * 0);
        out += TX(
          380,
          y + 22,
          "Ehrlichkeitsregel: Nur behaupten, was belegt ist – Unsicheres benennen, [Datum] statt raten.",
          1
        );
        return W(out, "Blockschema einer Kunden-E-Mail von Betreff bis Schluss", y + 40);
      },
    },
    uml: {
      title: "UML-Klassendiagramm: Vererbung, Sichtbarkeiten, Beziehungen",
      wiki: ["Klassendiagramm", "https://de.wikipedia.org/wiki/Klassendiagramm"],
      commons: "UML class diagram",
      svg: function () {
        var out = "";
        function K(x, y, w, name, attrs, meth, acc) {
          var h = 34 + attrs.length * 16 + meth.length * 16 + 10;
          out +=
            R(x, y, w, h, "", acc) +
            '<line x1="' +
            x +
            '" y1="' +
            (y + 26) +
            '" x2="' +
            (x + w) +
            '" y2="' +
            (y + 26) +
            '" stroke="var(--line)"/>' +
            TX(x + w / 2, y + 18, name, 1);
          attrs.forEach(function (t, i) {
            out += TX(x + 10, y + 42 + i * 16, t, 0, 1);
          });
          out +=
            '<line x1="' +
            x +
            '" y1="' +
            (y + 30 + attrs.length * 16) +
            '" x2="' +
            (x + w) +
            '" y2="' +
            (y + 30 + attrs.length * 16) +
            '" stroke="var(--line)"/>';
          meth.forEach(function (t, i) {
            out += TX(x + 10, y + 46 + attrs.length * 16 + i * 16, t, 0, 1);
          });
          return h;
        }
        K(
          280,
          30,
          200,
          "Fahrzeug",
          ["# kennzeichen: String", "# geschwindigkeit: int"],
          ["+ beschleunige(): void", "+ bremse(): void"],
          1
        );
        K(80, 190, 200, "PKW", ["− sitzplaetze: int"], ["+ beschleunige(): void"], 0);
        K(480, 190, 200, "LKW", ["− zuladungKg: int"], ["+ beschleunige(): void"], 0);
        out +=
          '<path d="M180 190 L370 146 L360 158 M370 146 L378 160" fill="none" stroke="var(--ac)" stroke-width="2"/>';
        out +=
          '<line x1="180" y1="190" x2="368" y2="148" stroke="var(--ac)" stroke-width="2"/><line x1="580" y1="190" x2="392" y2="148" stroke="var(--ac)" stroke-width="2"/>';
        out +=
          '<path d="M380 128 L364 152 L396 152 Z" fill="var(--bg)" stroke="var(--ac)" stroke-width="2"/>';
        out += TX(
          380,
          300,
          "Leeres Dreieck = Vererbung ('ist ein'). + public · − private · # protected. beschleunige() wird überschrieben = Polymorphie.",
          1
        );
        return W(
          out,
          "UML-Klassendiagramm mit Oberklasse Fahrzeug und Unterklassen PKW und LKW",
          320
        );
      },
    },
    pipe: {
      title: "Die PowerShell-Pipeline: Objekte fließen von Stufe zu Stufe",
      wiki: ["PowerShell", "https://de.wikipedia.org/wiki/PowerShell"],
      commons: "command line terminal",
      svg: function () {
        var st = [
            ["Get-Service", "alle Dienste"],
            ["Where-Object", "filtern: Stopped"],
            ["Sort-Object", "sortieren"],
            ["Select-Object", "Spalten wählen"],
          ],
          out = "";
        for (var i = 0; i < 4; i++) {
          var x = 40 + i * 185;
          out +=
            R(x, 90, 150, 60, "", i === 1) +
            TX(x + 75, 115, st[i][0], 1, 1) +
            TX(x + 75, 133, st[i][1], 1, 1);
          if (i < 3) out += A(x + 150, 120, x + 185, 120) + TX(x + 167, 108, "| ", 1, 1);
        }
        out += TX(
          380,
          190,
          "Es fließen OBJEKTE (mit Eigenschaften wie Status, Name) – kein Text. $_ = aktuelles Objekt.",
          1
        );
        out +=
          R(150, 220, 460, 50, "0 2 * * *  =  Minute · Stunde · Tag · Monat · Wochentag", 0) +
          TX(380, 295, "Cron plant die Ausführung: hier täglich um 02:00 Uhr.", 1);
        return W(out, "PowerShell-Pipeline in vier Stufen und Aufbau eines Cron-Eintrags", 320);
      },
    },
    sanvsnas: {
      title: "NAS (Dateizugriff) und SAN (Blockzugriff) im Vergleich",
      wiki: ["Storage Area Network", "https://de.wikipedia.org/wiki/Storage_Area_Network"],
      commons: "storage area network",
      svg: function () {
        var out = "";
        out +=
          TX(200, 45, "NAS – Datei (SMB/NFS)", 1) +
          R(60, 60, 90, 44, "Client", 0) +
          R(250, 60, 90, 44, "Client", 0);
        out +=
          R(140, 140, 120, 50, "LAN-Switch", 0) + A(105, 104, 175, 140) + A(295, 104, 235, 140);
        out +=
          R(120, 230, 160, 60, "NAS", 3) +
          TX(200, 275, "eigenes Dateisystem", 1, 1) +
          A(200, 190, 200, 230);
        out +=
          TX(560, 45, "SAN – Block (iSCSI/FC)", 1) +
          R(430, 60, 90, 44, "Server", 0) +
          R(620, 60, 90, 44, "Server", 0);
        out +=
          R(500, 140, 140, 50, "Fabric A/B", 2) + A(475, 104, 545, 140) + A(665, 104, 605, 140);
        out +=
          R(490, 230, 160, 60, "Storage-Array", 2) +
          TX(570, 275, "LUNs – Server formatiert selbst", 1, 1) +
          A(570, 190, 570, 230);
        out += TX(
          380,
          325,
          "NAS: viele Clients teilen Dateien. SAN: eine LUN, ein Schreiber (außer Cluster-Dateisystem).",
          1
        );
        return W(out, "Topologievergleich von NAS mit Dateizugriff und SAN mit Blockzugriff", 350);
      },
    },
    verkab: {
      title: "Strukturierte Verkabelung: Primär-, Sekundär- und Tertiärbereich",
      wiki: [
        "Strukturierte Verkabelung",
        "https://de.wikipedia.org/wiki/Strukturierte_Verkabelung",
      ],
      commons: "patch panel cabling",
      svg: function () {
        var out = "";
        out +=
          R(60, 50, 200, 50, "Etagenverteiler OG2", 0) +
          R(60, 130, 200, 50, "Etagenverteiler OG1", 0) +
          R(60, 210, 200, 50, "Gebäudeverteiler EG", 1);
        out +=
          A(160, 130, 160, 100) +
          A(160, 210, 160, 180) +
          TX(175, 115, "Sekundär (Steigleitung, LWL)", 0, 1) +
          TX(175, 195, "Sekundär", 0, 1);
        out +=
          R(420, 50, 130, 44, "Dose 1. TA", 0) +
          R(420, 110, 130, 44, "Dose 2. TA", 0) +
          A(260, 72, 420, 72) +
          A(260, 80, 420, 130, 1);
        out +=
          TX(330, 60, "Tertiär: max. 90 m Link", 1, 1) +
          TX(330, 150, "+ 2 x 5 m Patch = 100 m Channel", 1, 1);
        out +=
          R(420, 210, 200, 50, "Standortverteiler", 1) +
          A(260, 235, 420, 235) +
          TX(340, 225, "Primär (Gebäude zu Gebäude, LWL!)", 1, 1);
        out += TX(
          380,
          300,
          "Zwischen Gebäuden immer Glasfaser: Distanz, EMV und Potentialtrennung (Blitzschutz).",
          1
        );
        return W(
          out,
          "Bereiche der strukturierten Verkabelung vom Standortverteiler bis zur Anschlussdose",
          330
        );
      },
    },
    kreislauf: {
      title: "Erweiterter Wirtschaftskreislauf: Haushalte, Unternehmen, Staat, Banken",
      wiki: ["Wirtschaftskreislauf", "https://de.wikipedia.org/wiki/Wirtschaftskreislauf"],
      svg: function () {
        var out = "";
        out += R(60, 120, 170, 60, "Haushalte", 0) + R(530, 120, 170, 60, "Unternehmen", 2);
        out += R(295, 40, 170, 54, "Staat", 1) + R(295, 220, 170, 54, "Banken", 3);
        out += A(230, 135, 530, 135) + TX(380, 128, "Arbeit", 1, 1);
        out += A(530, 165, 230, 165) + TX(380, 180, "Löhne · Güter gegen Konsumausgaben", 1, 1);
        out += A(150, 120, 300, 70, 0) + TX(190, 82, "Steuern", 0, 1);
        out += A(330, 94, 150, 124, 1) + TX(215, 118, "Transfers", 0, 1);
        out += A(610, 120, 460, 70, 0) + TX(505, 82, "Steuern", 1, 1);
        out += A(430, 94, 610, 124, 1) + TX(575, 96, "Subventionen", 0, 1);
        out += A(150, 180, 300, 240, 0) + TX(190, 222, "Sparen", 0, 1);
        out += A(460, 240, 610, 180, 0) + TX(545, 222, "Kredite → Investitionen", 0, 1);
        out += TX(
          380,
          305,
          "Jeder Geldstrom hat einen Gegenstrom – Banken schließen den Kreis zwischen Sparen und Investieren.",
          1
        );
        return W(
          out,
          "Erweiterter Wirtschaftskreislauf mit Geldströmen zwischen Haushalten, Unternehmen, Staat und Banken",
          330
        );
      },
    },
    pareto: {
      title: "Pareto-Diagramm: wenige Ursachen, große Wirkung (80/20)",
      wiki: ["Paretoprinzip", "https://de.wikipedia.org/wiki/Paretoprinzip"],
      svg: function () {
        var out = "";
        var werte = [
          ["WLAN", 90, 45],
          ["Drucker", 45, 67.5],
          ["Passwort", 30, 82.5],
          ["Sonstiges", 20, 92.5],
          ["VPN", 15, 100],
        ];
        out +=
          '<line x1="70" y1="250" x2="700" y2="250" stroke="var(--line-strong)" stroke-width="1.5"/>';
        out +=
          '<line x1="70" y1="250" x2="70" y2="40" stroke="var(--line-strong)" stroke-width="1.5"/>';
        var pts = [];
        for (var i = 0; i < 5; i++) {
          var x = 100 + i * 120,
            h = werte[i][1] * 2,
            kx = x + 40,
            ky = 250 - werte[i][2] * 2;
          out +=
            '<rect x="' +
            x +
            '" y="' +
            (250 - h) +
            '" width="80" height="' +
            h +
            '" fill="' +
            PAL[i === 0 ? 4 : 0][0] +
            '" stroke="' +
            PAL[i === 0 ? 4 : 0][1] +
            '" stroke-width="1.5"/>';
          out +=
            TX(x + 40, 268, werte[i][0], 1, 1) + TX(x + 40, 246 - h, String(werte[i][1]), 1, 1);
          pts.push(kx + "," + ky);
        }
        out +=
          '<polyline points="' +
          pts.join(" ") +
          '" fill="none" stroke="var(--ac)" stroke-width="2.5"/>';
        for (var j = 0; j < 5; j++) {
          var p = pts[j].split(",");
          out += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="var(--ac)"/>';
        }
        out +=
          '<line x1="70" y1="90" x2="700" y2="90" stroke="var(--tx3)" stroke-width="1.5" stroke-dasharray="6 4"/>' +
          TX(690, 84, "80 %", 0, 1);
        out += TX(
          380,
          300,
          "Balken = Tickets je Ursache · Linie = kumulierter Anteil. Die ersten drei Ursachen knacken die 80 %.",
          1
        );
        return W(
          out,
          "Pareto-Diagramm mit absteigenden Ursachen-Balken und kumulierter Summenkurve",
          325
        );
      },
    },
    ishikawa: {
      title: "Ishikawa-Diagramm (Fischgräte): Ursachen systematisch sammeln",
      wiki: [
        "Ursache-Wirkungs-Diagramm",
        "https://de.wikipedia.org/wiki/Ursache-Wirkungs-Diagramm",
      ],
      svg: function () {
        var out = "";
        out +=
          '<line x1="60" y1="160" x2="600" y2="160" stroke="var(--tx)" stroke-width="3" marker-end="url(#darr)"/>';
        out += R(610, 132, 130, 56, "Problem", 4);
        var oben = [
            ["Mensch", 150],
            ["Methode", 330],
          ],
          unten = [
            ["Maschine", 240],
            ["Material", 420],
          ];
        oben.forEach(function (g) {
          out +=
            '<line x1="' +
            (g[1] + 90) +
            '" y1="160" x2="' +
            g[1] +
            '" y2="60" stroke="var(--line-strong)" stroke-width="2"/>' +
            R(g[1] - 58, 38, 116, 34, g[0], 1);
          out +=
            '<line x1="' +
            (g[1] + 58) +
            '" y1="106" x2="' +
            (g[1] + 22) +
            '" y2="88" stroke="var(--tx3)" stroke-width="1.5"/>' +
            TX(g[1] + 62, 110, "Ursache", 0, 1);
        });
        unten.forEach(function (g) {
          out +=
            '<line x1="' +
            (g[1] + 90) +
            '" y1="160" x2="' +
            g[1] +
            '" y2="260" stroke="var(--line-strong)" stroke-width="2"/>' +
            R(g[1] - 58, 248, 116, 34, g[0], 2);
          out +=
            '<line x1="' +
            (g[1] + 58) +
            '" y1="214" x2="' +
            (g[1] + 22) +
            '" y2="232" stroke="var(--tx3)" stroke-width="1.5"/>' +
            TX(g[1] + 62, 210, "Ursache", 0, 1);
        });
        out += TX(
          380,
          300,
          "Kopf = Wirkung/Problem, Hauptgräten = Kategorien (5 M), kleine Gräten = konkrete Ursachen aus dem Brainstorming.",
          1
        );
        return W(
          out,
          "Fischgräten-Diagramm mit Problem am Kopf und Ursachenkategorien an den Gräten",
          325
        );
      },
    },
    kv: {
      title: "KV-Diagramm: Wahrheitstabelle grafisch minimieren",
      wiki: ["Karnaugh-Veitch-Diagramm", "https://de.wikipedia.org/wiki/Karnaugh-Veitch-Diagramm"],
      svg: function () {
        var out = "";
        var zellen = [
          ["000", 0],
          ["001", 0],
          ["011", 1],
          ["010", 1],
          ["100", 0],
          ["101", 0],
          ["111", 1],
          ["110", 1],
        ];
        out += TX(180, 52, "a b c (Gray-Code: Nachbarn unterscheiden sich in genau 1 Bit)", 0, 1);
        var kopf = ["00", "01", "11", "10"];
        for (var c = 0; c < 4; c++) out += TX(210 + c * 110 + 55, 84, "bc=" + kopf[c], 1, 1);
        out += TX(160, 130, "a=0", 0) + TX(160, 200, "a=1", 0);
        for (var i = 0; i < 8; i++) {
          var col = i % 4,
            row = i < 4 ? 0 : 1,
            x = 210 + col * 110,
            y = 96 + row * 70,
            eins = zellen[(row ? 4 : 0) + col][1];
          out +=
            '<rect x="' +
            x +
            '" y="' +
            y +
            '" width="110" height="70" fill="' +
            (eins ? PAL[2][0] : "var(--bg2)") +
            '" stroke="var(--line-strong)" stroke-width="1.5"/>';
          out +=
            '<text x="' +
            (x + 55) +
            '" y="' +
            (y + 42) +
            '" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="17" font-weight="700" fill="var(--tx)">' +
            eins +
            "</text>";
        }
        out +=
          '<rect x="430" y="96" width="220" height="140" fill="none" stroke="var(--ac)" stroke-width="3" rx="12" stroke-dasharray="8 5"/>';
        out += TX(
          430,
          262,
          "4er-Block: nur b ist konstant (=1) → f = b. Ein Signal statt vier Termen.",
          1,
          1
        );
        out += TX(
          380,
          295,
          "Blöcke der Größe 1, 2, 4, 8 bilden – auch über die Ränder hinweg (das Diagramm ist rund).",
          1
        );
        return W(
          out,
          "KV-Diagramm mit acht Feldern, markiertem Viererblock und minimierter Funktion",
          320
        );
      },
    },
  });
  window.renderTopicViz = function (id) {
    var v = window.TOPIC_VIZ[id];
    if (!v) return "";
    var extra = v.commons
      ? '<div class="viz-commons" data-search="' +
        v.commons +
        '" data-label="Etablierte Grafik zu: ' +
        v.title.replace(/"/g, "&quot;") +
        '"></div>'
      : "";
    return (
      '<figure class="viz-figure">' +
      v.svg() +
      "<figcaption>" +
      v.title +
      ' – eigene Darstellung (FISI-HQ), fachlich abgeglichen mit dem Wikipedia-Artikel „<a href="' +
      v.wiki[1] +
      '" rel="noopener">' +
      v.wiki[0] +
      "</a>“ [Q1].</figcaption></figure>" +
      extra
    );
  };
  window.initVizCommons = function (root) {
    if (!window.renderWikiSlot) return;
    (root || document).querySelectorAll(".viz-commons:not([data-done])").forEach(function (el) {
      el.dataset.done = "1";
      renderWikiSlot(el, {
        label: el.dataset.label,
        search: el.dataset.search,
        alt: el.dataset.label,
      });
    });
  };
  window.LESSON_VIZ = {
    l101: ["eva"],
    l102: ["zahlen"],
    l103: ["osi", "kapsel"],
    l104: ["subnetz"],
    l201: ["subnetz", "vlsm"],
    l202: ["dora"],
    l203: ["topologien"],
    l204: ["raid", "backup"],
    l205: ["verkab"],
    l301: ["verfueg", "backup"],
    l302: ["cloudstack"],
    l303: ["pipe"],
    l304: ["gantt"],
    l305: ["sanvsnas"],
  };
  window.LF_EXTRA_VIZ = {
    komm: ["vierohren", "mailaufbau"],
    itsm: ["gantt"],
    kdm: ["pipe", "gantt"],
    itse: ["verkab", "eva"],
    kbm: ["gantt"],
    fidp: ["pipe", "gantt"],
    fidv: ["topologien", "kapsel"],
    lf2: ["speicher", "eva"],
    lf10a: ["dora", "pipe"],
    prap2: ["gantt", "verfueg"],
    ae: ["uml", "erm"],
    aeap: ["uml"],
    lf5: ["zahlen", "speicher", "uml", "kv"],
    lf3: ["osi", "topologien", "dns"],
    lf4: ["backup"],
    lf9: ["stp", "csma"],
    wiso: ["kreislauf", "pareto", "ishikawa"],
    lf11a: ["dmz", "vpn"],
    lf12a: ["gantt"],
    prap1: ["subnetz"],
    zert: ["handshake", "stp"],
    lf6: ["handshake"],
    lf1: ["gantt"],
    lf7: ["topologien"],
    lf8: ["erm", "nat"],
  };
})();
