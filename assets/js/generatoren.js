"use strict";
(function () {
  const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (arr) => arr[R(0, arr.length - 1)];
  const fmt = (n) => String(Math.round(n * 100) / 100).replace(".", ",");
  const ip2int = (ip) => ip.split(".").reduce((a, o) => (a << 8) + +o, 0) >>> 0;
  const int2ip = (n) => [24, 16, 8, 0].map((s) => (n >>> s) & 255).join(".");
  function v6expand(short) {
    let [l, r] = short.split("::");
    let L = l ? l.split(":") : [],
      Rp = r !== undefined ? (r ? r.split(":") : []) : null;
    let mid = Rp ? Array(8 - L.length - Rp.length).fill("0") : [];
    let groups = Rp ? [...L, ...mid, ...Rp] : L;
    return groups.map((g) => g.padStart(4, "0")).join(":");
  }
  function v6shorten(full) {
    let g = full.split(":").map((x) => x.replace(/^0+(?=.)/, ""));
    let best = { i: -1, len: 0 },
      i = 0;
    while (i < 8) {
      if (g[i] === "0") {
        let j = i;
        while (j < 8 && g[j] === "0") j++;
        if (j - i > best.len) best = { i, len: j - i };
        i = j;
      } else i++;
    }
    if (best.len >= 2) {
      const before = g.slice(0, best.i).join(":");
      const after = g.slice(best.i + best.len).join(":");
      return before + "::" + after || "::";
    }
    return g.join(":");
  }
  const GENS = [];
  GENS.push({
    id: "zahlen",
    titel: "Zahlensysteme",
    kurz: "Dezimal ↔ Binär ↔ Hexadezimal umrechnen – der AP1-Klassiker.",
    make() {
      const art = pick(["d2b", "b2d", "d2h", "h2d", "b2h"]);
      const n = R(17, 250);
      const bin = n.toString(2),
        hex = n.toString(16).toUpperCase();
      const weg8 =
        "Stellenwerte 128·64·32·16·8·4·2·1 – von links prüfen: passt der Wert noch hinein? " +
        n +
        " = " +
        bin
          .split("")
          .map((b, i) => (b === "1" ? 2 ** (bin.length - 1 - i) : null))
          .filter(Boolean)
          .join(" + ") +
        ".";
      if (art === "d2b")
        return {
          aufgabe: `Wandle die Dezimalzahl <strong>${n}</strong> in eine Binärzahl um.`,
          felder: [{ label: "Binär", key: "b", soll: bin }],
          weg: weg8,
        };
      if (art === "b2d")
        return {
          aufgabe: `Wandle die Binärzahl <strong>${bin}</strong> in eine Dezimalzahl um.`,
          felder: [{ label: "Dezimal", key: "d", soll: String(n) }],
          weg:
            "Jede 1 mit ihrem Stellenwert addieren: " +
            bin
              .split("")
              .map((b, i) => (b === "1" ? 2 ** (bin.length - 1 - i) : null))
              .filter(Boolean)
              .join(" + ") +
            " = " +
            n +
            ".",
        };
      if (art === "d2h")
        return {
          aufgabe: `Wandle die Dezimalzahl <strong>${n}</strong> in eine Hexadezimalzahl um.`,
          felder: [{ label: "Hexadezimal", key: "h", soll: hex }],
          weg:
            n +
            " ÷ 16 = " +
            Math.floor(n / 16) +
            " Rest " +
            (n % 16) +
            " → Ziffern (Rest zuletzt gelesen): " +
            hex +
            ". Merke: 10=A, 11=B, 12=C, 13=D, 14=E, 15=F.",
        };
      if (art === "h2d")
        return {
          aufgabe: `Wandle die Hexadezimalzahl <strong>${hex}</strong> in eine Dezimalzahl um.`,
          felder: [{ label: "Dezimal", key: "d", soll: String(n) }],
          weg:
            hex
              .split("")
              .map((c, i) => parseInt(c, 16) + "·16" + (hex.length - 1 - i === 0 ? "⁰" : "¹"))
              .join(" + ") +
            " = " +
            n +
            ".",
        };
      return {
        aufgabe: `Wandle die Binärzahl <strong>${bin}</strong> in eine Hexadezimalzahl um.`,
        felder: [{ label: "Hexadezimal", key: "h", soll: hex }],
        weg:
          "Binärzahl von rechts in 4er-Gruppen teilen, jede Gruppe einzeln umrechnen: " +
          bin
            .padStart(Math.ceil(bin.length / 4) * 4, "0")
            .match(/.{4}/g)
            .join(" | ") +
          " → " +
          hex +
          ".",
      };
    },
  });
  GENS.push({
    id: "subnetz",
    titel: "Subnetting (FLSM)",
    kurz: "Ein /24 in gleich große Subnetze teilen: Netz-, Broadcastadresse, Hosts.",
    make() {
      const base = pick([
        "192.168." + R(1, 99) + ".0",
        "172.16." + R(0, 30) + ".0",
        "10." + R(1, 99) + "." + R(0, 200) + ".0",
      ]);
      const teile = pick([2, 4, 8]);
      const bits = Math.log2(teile),
        prefix = 24 + bits,
        step = 256 / teile;
      const k = R(0, teile - 1);
      const netz = ip2int(base) + k * step;
      const hosts = 2 ** (32 - prefix) - 2;
      return {
        aufgabe: `Das Netz <strong>${base}/24</strong> wird in <strong>${teile} gleich große Subnetze</strong> geteilt. Bestimme für <strong>Subnetz ${k + 1}</strong> (Zählung ab 1): neue Präfixlänge, Netzadresse, Broadcastadresse und nutzbare Hostanzahl.`,
        felder: [
          { label: "Präfix (nur Zahl, z. B. 26)", key: "p", soll: String(prefix) },
          { label: "Netzadresse", key: "n", soll: int2ip(netz) },
          { label: "Broadcastadresse", key: "b", soll: int2ip(netz + step - 1) },
          { label: "Nutzbare Hosts", key: "h", soll: String(hosts) },
        ],
        weg: `${teile} Subnetze → ${bits} zusätzliche Bits → /${prefix}. Schrittweite: 256/${teile} = ${step}. Subnetz ${k + 1} beginnt bei ${int2ip(netz)}, Broadcast = nächstes Netz − 1 = ${int2ip(netz + step - 1)}. Hosts: 2^${32 - prefix} − 2 = ${hosts}.`,
      };
    },
  });
  GENS.push({
    id: "vlsm",
    titel: "Subnetting (VLSM)",
    kurz: "Passgenaue Subnetze für unterschiedliche Hostbedarfe – größtes zuerst.",
    make() {
      const base = "172." + R(16, 30) + "." + R(0, 200) + ".0";
      const bedarf = [pick([100, 120, 60]), pick([50, 40, 25]), pick([20, 10, 12])].sort(
        (a, b) => b - a
      );
      let cursor = ip2int(base),
        rows = [],
        weg = [];
      const namen = ["Abteilung A", "Abteilung B", "Abteilung C"];
      bedarf.forEach((h, i) => {
        let bits = 1;
        while (2 ** bits - 2 < h) bits++;
        const prefix = 32 - bits,
          size = 2 ** bits;
        rows.push({ name: namen[i] + " (" + h + " Hosts)", soll: int2ip(cursor) + "/" + prefix });
        weg.push(
          `${namen[i]}: ${h} Hosts → 2^${bits}−2 = ${2 ** bits - 2} ≥ ${h} → /${prefix}, Netz ${int2ip(cursor)}, Blockgröße ${size}.`
        );
        cursor += size;
      });
      return {
        aufgabe: `Vergib per VLSM Subnetze aus <strong>${base}/24</strong> (größter Bedarf zuerst, lückenlos ab ${base}): ${namen.map((n, i) => n + " = <strong>" + bedarf[i] + " Hosts</strong>").join(", ")}. Gib je Abteilung „Netzadresse/Präfix“ an (z. B. 172.16.5.0/26).`,
        felder: rows.map((r, i) => ({ label: r.name, key: "v" + i, soll: r.soll, breit: true })),
        weg: weg.join(" "),
      };
    },
  });
  GENS.push({
    id: "ipv6",
    titel: "IPv6 kürzen & ausschreiben",
    kurz: "Führende Nullen streichen, längsten Nullblock zu :: kürzen – und zurück.",
    make() {
      const g = [];
      for (let i = 0; i < 8; i++) g.push(pick([0, 0, R(1, 65535)]));
      if (!g.includes(0)) g[R(1, 6)] = 0;
      const full = g.map((x) => x.toString(16).padStart(4, "0")).join(":");
      const short = v6shorten(full);
      if (Math.random() < 0.5)
        return {
          aufgabe: `Kürze die IPv6-Adresse maximal:<br><strong class="mono">${full}</strong>`,
          felder: [{ label: "Gekürzte Adresse", key: "k", soll: short, breit: true }],
          weg:
            "1. In jeder Gruppe führende Nullen streichen. 2. Die LÄNGSTE Folge von Null-Gruppen (mind. 2) einmalig durch :: ersetzen – bei Gleichstand die erste. Ergebnis: " +
            short,
        };
      return {
        aufgabe: `Schreibe die IPv6-Adresse vollständig aus (8 Gruppen à 4 Stellen):<br><strong class="mono">${short}</strong>`,
        felder: [{ label: "Vollständige Adresse", key: "v", soll: full, breit: true }],
        weg:
          ":: steht für so viele 0000-Gruppen, dass insgesamt 8 Gruppen entstehen; danach jede Gruppe links mit Nullen auf 4 Stellen auffüllen. Ergebnis: " +
          full,
      };
    },
  });
  GENS.push({
    id: "durchsatz",
    titel: "Durchsatz & Übertragungszeit",
    kurz: "Datenmenge, Datenrate, Zeit – inklusive Byte/Bit- und MiB/MB-Falle.",
    make() {
      const art = pick(["zeit", "zeit", "rate"]);
      if (art === "zeit") {
        const gib = pick([2, 4, 5, 8, 10]);
        const mbit = pick([50, 100, 250, 500, 1000]);
        const bytes = gib * 1024 ** 3,
          bits = bytes * 8,
          sek = bits / (mbit * 1e6);
        return {
          aufgabe: `Eine <strong>${gib} GiB</strong> große Datei wird mit konstanten <strong>${mbit} Mbit/s</strong> übertragen. Wie lange dauert die Übertragung in Sekunden? (Runde auf ganze Sekunden.)`,
          felder: [{ label: "Zeit in Sekunden", key: "t", soll: String(Math.round(sek)), tol: 1 }],
          weg: `${gib} GiB = ${gib} · 1024³ Byte = ${bytes.toLocaleString("de-DE")} Byte · 8 = ${bits.toLocaleString("de-DE")} Bit. ${mbit} Mbit/s = ${(mbit * 1e6).toLocaleString("de-DE")} Bit/s. Zeit = Datenmenge ÷ Rate = ${Math.round(sek)} s (≈ ${fmt(sek / 60)} min). Achtung: GiB rechnet mit 1024, Mbit mit 1000!`,
        };
      }
      const mb = pick([600, 800, 1200, 1500]);
      const s = pick([48, 60, 96, 120]);
      const mbit = (mb * 1e6 * 8) / s / 1e6;
      return {
        aufgabe: `Eine <strong>${mb} MB</strong> große Datei (MB = 10⁶ Byte) wurde in <strong>${s} Sekunden</strong> übertragen. Wie hoch war die durchschnittliche Datenrate in Mbit/s?`,
        felder: [{ label: "Datenrate in Mbit/s", key: "r", soll: fmt(mbit), tol: 0.5 }],
        weg: `${mb} MB = ${mb} · 10⁶ · 8 Bit = ${(mb * 8).toLocaleString("de-DE")} Mbit. Rate = ${(mb * 8).toLocaleString("de-DE")} Mbit ÷ ${s} s = ${fmt(mbit)} Mbit/s.`,
      };
    },
  });
  GENS.push({
    id: "netzplan",
    titel: "Netzplan (Vorgangsknoten)",
    kurz: "FAZ/FEZ, Gesamtdauer, Puffer und kritischer Pfad an einem Zufallsnetz.",
    make() {
      const d = { A: R(2, 8), B: R(2, 8), C: R(2, 8), D: R(2, 8), E: R(2, 6), F: R(2, 6) };
      const fez = { A: d.A, B: d.B };
      fez.C = fez.A + d.C;
      fez.D = fez.B + d.D;
      const fazE = Math.max(fez.C, fez.D);
      fez.E = fazE + d.E;
      fez.F = fez.E + d.F;
      const kritOben = fez.C >= fez.D;
      const pfad = kritOben ? "A-C-E-F" : "B-D-E-F";
      const gp = Math.abs(fez.C - fez.D);
      const opfer = kritOben ? "D" : "C";
      return {
        aufgabe: `Projekt mit 6 Vorgängen (Dauer in Tagen): <strong>A=${d.A}</strong> und <strong>B=${d.B}</strong> starten parallel · <strong>C=${d.C}</strong> nach A · <strong>D=${d.D}</strong> nach B · <strong>E=${d.E}</strong> nach C <em>und</em> D · <strong>F=${d.F}</strong> nach E.<br>Berechne per Vorwärts-/Rückwärtsrechnung:`,
        felder: [
          { label: "FAZ von E", key: "faz", soll: String(fazE) },
          { label: "Gesamtdauer (FEZ von F)", key: "dauer", soll: String(fez.F) },
          { label: `Gesamtpuffer von ${opfer}`, key: "gp", soll: String(gp) },
          { label: "Kritischer Pfad (z. B. A-C-E-F)", key: "pfad", soll: pfad, breit: true },
        ],
        weg: `Vorwärts: FEZ A=${fez.A}, FEZ B=${fez.B}, FEZ C=${fez.C}, FEZ D=${fez.D}. FAZ E = MAXIMUM(FEZ C; FEZ D) = ${fazE} → FEZ E=${fez.E}, FEZ F=${fez.F} = Gesamtdauer. Der längere Ast (${pfad.slice(0, 3)}) ist kritisch (Puffer 0); der kürzere Ast hat Gesamtpuffer = Differenz der Astlängen = ${gp} Tage. Kritischer Pfad: ${pfad}.`,
      };
    },
  });
  GENS.push({
    id: "kalk",
    titel: "Bezugskalkulation & AfA",
    kurz: "Listenpreis → Rabatt → Skonto → Bezugskosten; lineare Abschreibung.",
    make() {
      if (Math.random() < 0.55) {
        const lep = pick([400, 500, 800, 1200, 900]);
        const rab = pick([5, 8, 10, 12]),
          sk = pick([2, 3]),
          bk = pick([15, 25, 40, 12]);
        const ziel = lep * (1 - rab / 100),
          bar = ziel * (1 - sk / 100),
          bez = bar + bk;
        return {
          aufgabe: `Listeneinkaufspreis <strong>${lep} €</strong>, Rabatt <strong>${rab} %</strong>, Skonto <strong>${sk} %</strong>, Bezugskosten <strong>${bk} €</strong>. Berechne Zieleinkaufspreis, Bareinkaufspreis und Bezugspreis (2 Nachkommastellen).`,
          felder: [
            { label: "Zieleinkaufspreis (€)", key: "z", soll: fmt(ziel), tol: 0.02 },
            { label: "Bareinkaufspreis (€)", key: "ba", soll: fmt(bar), tol: 0.02 },
            { label: "Bezugspreis (€)", key: "be", soll: fmt(bez), tol: 0.02 },
          ],
          weg: `${lep} € − ${rab} % (${fmt((lep * rab) / 100)} €) = ${fmt(ziel)} € Zieleinkaufspreis · − ${sk} % Skonto (${fmt((ziel * sk) / 100)} €) = ${fmt(bar)} € Bareinkaufspreis · + ${bk} € Bezugskosten = ${fmt(bez)} € Bezugspreis. Reihenfolge: Skonto NACH dem Rabatt, Bezugskosten zuletzt.`,
        };
      }
      const ak = pick([1200, 1800, 2400, 3600, 6000]);
      const nd = pick([3, 4, 5, 6]);
      const j = R(1, nd - 1);
      const afa = ak / nd,
        rest = ak - j * afa;
      return {
        aufgabe: `Ein Gerät kostet <strong>${ak} €</strong> (Anschaffung) und wird über <strong>${nd} Jahre</strong> linear abgeschrieben. Berechne die jährliche AfA und den Restbuchwert nach <strong>${j} Jahr${j > 1 ? "en" : ""}</strong>.`,
        felder: [
          { label: "AfA pro Jahr (€)", key: "a", soll: fmt(afa), tol: 0.02 },
          { label: `Restbuchwert nach ${j} J. (€)`, key: "r", soll: fmt(rest), tol: 0.02 },
        ],
        weg: `AfA = Anschaffungskosten ÷ Nutzungsdauer = ${ak} ÷ ${nd} = ${fmt(afa)} €/Jahr. Restbuchwert = ${ak} − ${j} · ${fmt(afa)} = ${fmt(rest)} €.`,
      };
    },
  });
  GENS.push({
    id: "usvklima",
    titel: "USV & Klima (Serverraum)",
    kurz: "Leistungsbilanz, USV in VA, Wärmelast in BTU/h und Batterie-Überbrückungszeit.",
    make() {
      const art = pick(["usv", "btu", "zeit"]);
      const server = R(2, 6),
        pServer = pick([300, 400, 450, 600]);
      const rest = pick([300, 450, 600, 750]);
      const last = server * pServer + rest;
      if (art === "usv") {
        const cos = pick([0.8, 0.9]),
          res = pick([20, 25, 30]);
        const va = last / cos,
          vaRes = va * (1 + res / 100);
        return {
          aufgabe: `Ein Serverraum enthält <strong>${server} Server à ${pServer} W</strong> und weitere Geräte mit <strong>${rest} W</strong>. Leistungsfaktor cos φ = <strong>${cos}</strong>. Berechne die IT-Gesamtlast und die nötige USV-Scheinleistung inklusive <strong>${res} % Reserve</strong>. (Runde die VA-Werte auf ganze Zahlen.)`,
          felder: [
            { label: "Gesamtlast (W)", key: "p", soll: String(last), tol: 0 },
            {
              label: `USV mit ${res} % Reserve (VA)`,
              key: "va",
              soll: String(Math.round(vaRes)),
              tol: 2,
            },
          ],
          weg: `Last = ${server} · ${pServer} + ${rest} = ${last} W. S = P ÷ cos φ = ${last} ÷ ${cos} = ${Math.round(va)} VA. Mit Reserve: ${Math.round(va)} · ${(1 + res / 100).toFixed(2)} ≈ ${Math.round(vaRes)} VA.`,
        };
      }
      if (art === "btu") {
        const btu = last * 3.412;
        return {
          aufgabe: `Die IT-Last eines Technikraums beträgt <strong>${last} W</strong> (${server} Server à ${pServer} W + ${rest} W Sonstiges). Wie viel Wärme muss die Klimatisierung mindestens abführen? Rechne in <strong>BTU/h</strong> (Faktor 3,412, auf ganze BTU/h gerundet) – und wie viele Geräte à <strong>7.500 BTU/h</strong> brauchst du nach N+1?`,
          felder: [
            { label: "Wärmelast (BTU/h)", key: "b", soll: String(Math.round(btu)), tol: 5 },
            {
              label: "Klimageräte nach N+1 (Anzahl)",
              key: "n",
              soll: String(Math.ceil(btu / 7500) + 1),
              tol: 0,
            },
          ],
          weg: `Wärmelast ≈ elektrische Last: ${last} W · 3,412 ≈ ${Math.round(btu)} BTU/h. Nötige Geräte N = aufrunden(${Math.round(btu)} ÷ 7.500) = ${Math.ceil(btu / 7500)} → N+1 = ${Math.ceil(btu / 7500) + 1}.`,
        };
      }
      const wh = pick([960, 1440, 1920, 2880]);
      const min = (wh / last) * 60;
      return {
        aufgabe: `Eine USV mit <strong>${wh} Wh</strong> Batteriekapazität versorgt eine IT-Last von <strong>${last} W</strong>. Wie lange hält sie durch? (In Minuten, auf ganze Minuten gerundet – Wirkungsgradverluste vernachlässigt.)`,
        felder: [
          { label: "Überbrückungszeit (min)", key: "t", soll: String(Math.round(min)), tol: 1 },
        ],
        weg: `t = Kapazität ÷ Last = ${wh} Wh ÷ ${last} W = ${(wh / last).toFixed(3)} h · 60 ≈ ${Math.round(min)} Minuten. Genug für den geordneten Shutdown – nicht für Weiterbetrieb.`,
      };
    },
  });
  GENS.push({
    id: "zuschlag",
    titel: "Zuschlagskalkulation",
    kurz: "MEK/FEK mit Gemeinkosten-Zuschlägen bis zum Listenpreis – inklusive Im-Hundert-Falle.",
    make() {
      const mek = pick([400, 500, 600, 800, 1000]),
        mgk = pick([8, 10, 12, 15]);
      const fek = pick([200, 300, 400, 500]),
        fgk = pick([80, 100, 120, 150]);
      const vwvt = pick([10, 12, 15, 20]),
        gewinn = pick([10, 12, 15, 20]);
      const skonto = pick([2, 3]);
      const mk = mek * (1 + mgk / 100),
        fk = fek * (1 + fgk / 100);
      const hk = mk + fk,
        sk = hk * (1 + vwvt / 100),
        bvp = sk * (1 + gewinn / 100);
      const lvp = (bvp * 100) / (100 - skonto);
      return {
        aufgabe: `Zuschlagskalkulation: MEK <strong>${mek} €</strong>, MGK <strong>${mgk} %</strong>, FEK <strong>${fek} €</strong>, FGK <strong>${fgk} %</strong>, Verwaltungs- und Vertriebs-GK zusammen <strong>${vwvt} %</strong> (auf HK), Gewinn <strong>${gewinn} %</strong>, Kundenskonto <strong>${skonto} %</strong>. Berechne Herstellkosten, Selbstkosten und den Listenverkaufspreis (netto). Runde auf 2 Nachkommastellen.`,
        felder: [
          { label: "Herstellkosten (€)", key: "hk", soll: fmt(hk), tol: 0.02 },
          { label: "Selbstkosten (€)", key: "sk", soll: fmt(sk), tol: 0.05 },
          { label: "Listenpreis netto (€)", key: "lvp", soll: fmt(lvp), tol: 0.1 },
        ],
        weg: `Material: ${mek} + ${mgk} % = ${fmt(mk)} €. Fertigung: ${fek} + ${fgk} % = ${fmt(fk)} €. HK = ${fmt(mk)} + ${fmt(fk)} = ${fmt(hk)} €. SK = HK + ${vwvt} % = ${fmt(sk)} €. Barverkaufspreis = SK + ${gewinn} % = ${fmt(bvp)} €. Skonto IM HUNDERT: ${fmt(bvp)} × 100 ÷ ${100 - skonto} = ${fmt(lvp)} €.`,
      };
    },
  });
  GENS.push({
    id: "lwl",
    titel: "LWL-Dämpfungsbudget",
    kurz: "Budget aus Pegeln, Streckendämpfung aus Länge/Spleißen/Steckern – geht die Strecke?",
    make() {
      const tx = pick([-2, -3, -4, -5]),
        rx = pick([-18, -20, -22, -24]);
      const km = pick([2, 4, 6, 8, 10, 15]),
        spleisse = R(2, 8),
        stecker = pick([2, 4]);
      const dbkm = pick([0.4, 0.35, 0.25]);
      const budget = tx - rx;
      const strecke = km * dbkm + spleisse * 0.1 + stecker * 0.5;
      const mitRes = strecke + 3;
      const ok = mitRes <= budget;
      return {
        aufgabe: `Singlemode-Strecke: <strong>${km} km</strong> à <strong>${String(dbkm).replace(".", ",")} dB/km</strong>, <strong>${spleisse} Spleiße</strong> (à 0,1 dB), <strong>${stecker} Steckerpaare</strong> (à 0,5 dB). Transceiver: Sendeleistung <strong>${tx} dBm</strong>, Empfängerempfindlichkeit <strong>${rx} dBm</strong>, Systemreserve <strong>3 dB</strong>. Berechne Budget und Streckendämpfung (ohne Reserve, 2 Nachkommastellen) – funktioniert die Strecke? (ja/nein)`,
        felder: [
          { label: "Budget (dB)", key: "b", soll: String(budget), tol: 0.01 },
          { label: "Streckendämpfung (dB)", key: "s", soll: fmt(strecke), tol: 0.02 },
          { label: "Funktioniert? (ja/nein)", key: "ok", soll: ok ? "ja" : "nein" },
        ],
        weg: `Budget = ${tx} − (${rx}) = ${budget} dB. Strecke = ${km} × ${String(dbkm).replace(".", ",")} + ${spleisse} × 0,1 + ${stecker} × 0,5 = ${fmt(strecke)} dB. Mit Reserve: ${fmt(strecke)} + 3 = ${fmt(mitRes)} dB ${ok ? "≤" : ">"} ${budget} dB → ${ok ? "Strecke funktioniert" : "Budget reicht NICHT – stärkere Optik oder weniger Dämpfung nötig"}.`,
      };
    },
  });
  const norm = (s) =>
    String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(",", ".");
  function checkVal(ist, feld) {
    if (feld.tol !== undefined) {
      const a = parseFloat(norm(ist)),
        b = parseFloat(norm(feld.soll));
      return isFinite(a) && Math.abs(a - b) <= feld.tol;
    }
    return norm(ist) === norm(feld.soll);
  }
  window.renderGenerator = function (host, genId) {
    const gen = GENS.find((g) => g.id === genId);
    if (!gen || !host) return;
    let task = null;
    function neu() {
      task = gen.make();
      host.innerHTML = `
        <p class="gen-aufgabe">${task.aufgabe}</p>
        <div class="gen-felder">${task.felder.map((f, i) => `<label class="gen-feld${f.breit ? "gen-feld-breit" : ""}"><span>${f.label}</span><input class="gap-input"data-i="${i}"autocomplete="off"spellcheck="false"></label>`).join("")}
        </div>
        <div class="q-actions">
          <button type="button" class="btn gen-check">Prüfen</button>
          <button type="button" class="btn ghost gen-weg">Rechenweg</button>
          <button type="button" class="btn ghost gen-neu">Neue Aufgabe ⤾</button>
          <span class="q-progress gen-out" aria-live="polite"></span>
        </div>
        <div class="gen-weg-box" hidden></div>`;
      host.querySelector(".gen-check").addEventListener("click", () => {
        let ok = 0;
        host.querySelectorAll("input[data-i]").forEach((inp) => {
          const f = task.felder[+inp.dataset.i];
          const gut = checkVal(inp.value, f);
          inp.style.borderColor = gut ? "var(--ok)" : "var(--err)";
          if (gut) ok++;
        });
        const alle = task.felder.length;
        host.querySelector(".gen-out").textContent =
          ok + " von " + alle + " richtig" + (ok === alle ? " – stark!" : "");
        if (ok === alle && window.Gami) Gami.addXp(3, "Generator-Aufgabe gelöst");
      });
      host.querySelector(".gen-weg").addEventListener("click", () => {
        const box = host.querySelector(".gen-weg-box");
        box.hidden = !box.hidden;
        if (!box.hidden)
          box.innerHTML =
            "<strong>Rechenweg:</strong> " +
            task.weg +
            "<br><strong>Lösung:</strong> " +
            task.felder.map((f) => f.label + " = " + f.soll).join(" · ");
      });
      host.querySelector(".gen-neu").addEventListener("click", neu);
    }
    neu();
  };
  GENS.push({
    id: "buchung",
    titel: "Buchungssätze",
    kurz: "Geschäftsvorfälle buchen: Soll an Haben, Vorsteuer/Umsatzsteuer und Zahllast.",
    make() {
      const typ = R(1, 5);
      const hinweis =
        "Kontonamen: BGA, Kasse, Bank, Verbindlichkeiten, Forderungen, Vorsteuer, Umsatzsteuer, Umsatzerlöse, Mietaufwand, Abschreibungen.";
      if (typ === 1) {
        const netto = pick([500, 800, 1000, 1500, 2000, 3000]);
        return {
          aufgabe: `Kauf von IT-Hardware für <strong>${netto} € netto</strong> auf Ziel (19 % USt). Vervollständige den Buchungssatz „BGA ${netto} + Vorsteuer ? an ? ?“. ${hinweis}`,
          felder: [
            { label: "Vorsteuer (€)", key: "vst", soll: fmt(netto * 0.19), tol: 0.02 },
            { label: "Haben-Konto", key: "hk", soll: "Verbindlichkeiten" },
            { label: "Haben-Betrag brutto (€)", key: "br", soll: fmt(netto * 1.19), tol: 0.02 },
          ],
          weg: `Vorsteuer = ${netto} × 0,19 = ${fmt(netto * 0.19)} €. Buchungssatz: BGA ${netto} + Vorsteuer ${fmt(netto * 0.19)} an Verbindlichkeiten ${fmt(netto * 1.19)} (Bruttoschuld beim Lieferanten).`,
        };
      }
      if (typ === 2) {
        const netto = pick([1000, 1500, 2000, 2500, 4000]);
        return {
          aufgabe: `Verkauf einer Dienstleistung für <strong>${netto} € netto</strong> auf Rechnung (19 % USt). Vervollständige: „? ? an Umsatzerlöse ${netto} + Umsatzsteuer ?“. ${hinweis}`,
          felder: [
            { label: "Soll-Konto", key: "sk", soll: "Forderungen" },
            { label: "Soll-Betrag brutto (€)", key: "br", soll: fmt(netto * 1.19), tol: 0.02 },
            { label: "Umsatzsteuer (€)", key: "ust", soll: fmt(netto * 0.19), tol: 0.02 },
          ],
          weg: `USt = ${netto} × 0,19 = ${fmt(netto * 0.19)} €. Buchungssatz: Forderungen ${fmt(netto * 1.19)} an Umsatzerlöse ${netto} + Umsatzsteuer ${fmt(netto * 0.19)}.`,
        };
      }
      if (typ === 3) {
        const fall = pick([
          {
            txt: "Eine Lieferantenrechnung wird per Banküberweisung bezahlt",
            s: "Verbindlichkeiten",
            h: "Bank",
          },
          {
            txt: "Ein Kunde bezahlt eine offene Rechnung auf unser Bankkonto",
            s: "Bank",
            h: "Forderungen",
          },
          {
            txt: "Kauf eines Monitors gegen Barzahlung (USt hier ignorieren)",
            s: "BGA",
            h: "Kasse",
          },
          { txt: "Die Büromiete wird per Bank überwiesen", s: "Mietaufwand", h: "Bank" },
        ]);
        const b = pick([300, 500, 800, 1190, 2380]);
        return {
          aufgabe: `${fall.txt}: <strong>${b} €</strong>. Bilde den Buchungssatz. ${hinweis}`,
          felder: [
            { label: "Soll-Konto", key: "s", soll: fall.s },
            { label: "Haben-Konto", key: "h", soll: fall.h },
            { label: "Betrag (€)", key: "b", soll: fmt(b), tol: 0.01 },
          ],
          weg: `${fall.s} ${b} an ${fall.h} ${b}. (Frageschema: Welche Konten? Aktiv/Passiv/Erfolg? Zugang/Abgang? → Soll/Haben.)`,
        };
      }
      if (typ === 4) {
        const aw = pick([2400, 3600, 4800, 6000, 9000]),
          nd = pick([3, 4, 5, 6]);
        const afa = aw / nd;
        return {
          aufgabe: `Ein Server (Anschaffungswert <strong>${aw} €</strong>, Nutzungsdauer <strong>${nd} Jahre</strong>, linear) wird zum Jahresende abgeschrieben. Berechne die Jahres-AfA und bilde den Buchungssatz. ${hinweis}`,
          felder: [
            { label: "Jahres-AfA (€)", key: "afa", soll: fmt(afa), tol: 0.02 },
            { label: "Soll-Konto", key: "s", soll: "Abschreibungen" },
            { label: "Haben-Konto", key: "h", soll: "BGA" },
          ],
          weg: `AfA = ${aw} ÷ ${nd} = ${fmt(afa)} €/Jahr. Buchungssatz: Abschreibungen ${fmt(afa)} an BGA ${fmt(afa)} (Aufwand mindert Gewinn und Buchwert).`,
        };
      }
      const ust = pick([3800, 5700, 7600, 9500]),
        vst = pick([1200, 1800, 2400, 3000]);
      return {
        aufgabe: `Im Monat wurden <strong>${ust} € Umsatzsteuer</strong> eingenommen und <strong>${vst} € Vorsteuer</strong> gezahlt. Berechne die Zahllast an das Finanzamt.`,
        felder: [{ label: "Zahllast (€)", key: "z", soll: fmt(ust - vst), tol: 0.01 }],
        weg: `Zahllast = Umsatzsteuer − Vorsteuer = ${ust} − ${vst} = ${fmt(ust - vst)} €.`,
      };
    },
  });
  GENS.push({
    id: "ablauf",
    titel: "Struktogramm-Trace",
    kurz: "Pseudocode/Struktogramm-Logik im Kopf ausführen: Endwert und Durchläufe bestimmen.",
    make() {
      const typ = R(1, 3);
      if (typ === 1) {
        const s = R(0, 10),
          n = R(4, 9);
        const ende = s + (n * (n + 1)) / 2;
        return {
          aufgabe: `Führe den Ablauf im Kopf aus:<br><code>x = ${s}<br>FÜR i = 1 BIS ${n}:<br>&nbsp;&nbsp;x = x + i<br>AUSGABE x</code>`,
          felder: [
            { label: "Ausgabewert x", key: "x", soll: fmt(ende), tol: 0 },
            { label: "Anzahl Schleifendurchläufe", key: "n", soll: fmt(n), tol: 0 },
          ],
          weg: `Die Schleife addiert 1+2+…+${n} = ${n}·${n + 1}÷2 = ${(n * (n + 1)) / 2} (Gauß). x = ${s} + ${(n * (n + 1)) / 2} = ${fmt(ende)}; Durchläufe: ${n}.`,
        };
      }
      if (typ === 2) {
        const s = pick([1, 2, 3, 5]),
          g = pick([50, 100, 200, 500]);
        let x = s,
          d = 0;
        while (x < g) {
          x *= 2;
          d++;
        }
        return {
          aufgabe: `Führe den Ablauf im Kopf aus:<br><code>x = ${s}<br>SOLANGE x &lt; ${g}:<br>&nbsp;&nbsp;x = x · 2<br>AUSGABE x</code>`,
          felder: [
            { label: "Ausgabewert x", key: "x", soll: fmt(x), tol: 0 },
            { label: "Anzahl Durchläufe", key: "d", soll: fmt(d), tol: 0 },
          ],
          weg: `Verdopplungen ab ${s}: ${Array.from({ length: d }, (_, i) => s * Math.pow(2, i + 1)).join(" → ")}. Abbruch, sobald x ≥ ${g}: x = ${x} nach ${d} Durchläufen. (Logarithmisches Wachstum!)`,
        };
      }
      const n = R(5, 9),
        a = R(2, 5),
        b = R(6, 9);
      const ger = Math.floor(n / 2),
        ung = n - ger;
      const ende = ger * a + ung * b;
      return {
        aufgabe: `Führe den Ablauf im Kopf aus:<br><code>x = 0<br>FÜR i = 1 BIS ${n}:<br>&nbsp;&nbsp;WENN i gerade: x = x + ${a}<br>&nbsp;&nbsp;SONST: x = x + ${b}<br>AUSGABE x</code>`,
        felder: [{ label: "Ausgabewert x", key: "x", soll: fmt(ende), tol: 0 }],
        weg: `Gerade i (${ger} Stück): +${a} → ${ger * a}. Ungerade i (${ung} Stück): +${b} → ${ung * b}. Summe: ${ger * a} + ${ung * b} = ${fmt(ende)}.`,
      };
    },
  });
  GENS.push({
    id: "uml",
    titel: "UML-Beziehungen",
    kurz: "Use-Case-Szenarien: include, extend oder Generalisierung – und wohin zeigt der Pfeil?",
    make() {
      const s = pick([
        {
          a: "Ticket erstellen",
          b: "Benachrichtigung senden",
          txt: "löst IMMER automatisch aus",
          typ: "include",
          ziel: "Benachrichtigung senden",
        },
        {
          a: "Bestellung aufgeben",
          b: "Zahlung verbuchen",
          txt: "schließt zwingend ein",
          typ: "include",
          ziel: "Zahlung verbuchen",
        },
        {
          a: "Benutzer anlegen",
          b: "Protokolleintrag schreiben",
          txt: "führt in jedem Fall auch aus",
          typ: "include",
          ziel: "Protokolleintrag schreiben",
        },
        {
          a: "Eskalieren",
          b: "Ticket bearbeiten",
          txt: "erweitert NUR bei Überschreitung der Reaktionszeit den Fall",
          typ: "extend",
          ziel: "Ticket bearbeiten",
        },
        {
          a: "Rabatt gewähren",
          b: "Bestellung aufgeben",
          txt: "erweitert nur bei Großkunden den Fall",
          typ: "extend",
          ziel: "Bestellung aufgeben",
        },
        {
          a: "Zweitprüfung anfordern",
          b: "Backup prüfen",
          txt: "erweitert nur bei Fehlern im Log den Fall",
          typ: "extend",
          ziel: "Backup prüfen",
        },
        {
          a: "Online-Bestellung bearbeiten",
          b: "Bestellung bearbeiten",
          txt: "ist ein Spezialfall von",
          typ: "generalisierung",
          ziel: "Bestellung bearbeiten",
        },
        {
          a: "VPN-Störung beheben",
          b: "Störung beheben",
          txt: "ist ein Spezialfall von",
          typ: "generalisierung",
          ziel: "Störung beheben",
        },
      ]);
      return {
        aufgabe: `Use-Case-Diagramm: Der Anwendungsfall <strong>„${s.a}“</strong> ${s.txt} <strong>„${s.b}“</strong>.<br>Bestimme den Beziehungstyp (include / extend / Generalisierung) und den Fall, auf den die Pfeilspitze zeigt.`,
        felder: [
          { label: "Beziehungstyp", key: "t", soll: s.typ },
          { label: "Pfeil zeigt auf (Fallname)", key: "z", soll: s.ziel },
        ],
        weg:
          s.typ === "include"
            ? `include = IMMER automatisch mit eingebunden; der gestrichelte Pfeil zeigt auf den EINGEBUNDENEN Fall „${s.ziel}“.`
            : s.typ === "extend"
              ? `extend = nur unter Bedingung; der gestrichelte Pfeil zeigt auf den ERWEITERTEN Basisfall „${s.ziel}“.`
              : `Generalisierung = Vererbung; der Pfeil mit hohler Spitze zeigt auf den ALLGEMEINEN Fall „${s.ziel}“.`,
      };
    },
  });
  window.GENERATOREN = GENS.map((g) => ({ id: g.id, titel: g.titel, kurz: g.kurz }));
})();
