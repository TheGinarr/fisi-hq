"use strict";
window.MP_AP1 = {
  kurz: "AP1",
  zeit: 90,
  titel: "Musterprüfung AP1: Einrichten eines IT-gestützten Arbeitsplatzes",
  untertitel:
    "90 Minuten · 110 Punkte · 4 Aufgaben · für alle IT-Berufe identisch aufgebaut: Ausgangssituation, Teilaufgaben mit Punkten, freie Antworten und Tabellen.",
  situation:
    "Eine Physiotherapie-Praxis mit drei Inhaberinnen eröffnet einen zweiten Standort. Die Praxis möchte Terminverwaltung, Abrechnung und Dokumentation künftig vollständig digital abwickeln. Ihr Ausbildungsbetrieb, die Nordwind IT GmbH, erhält den Auftrag für die komplette IT-Ausstattung. Bearbeiten Sie die folgenden Aufgaben: Auswahl und Anbindung eines Multifunktionsgeräts, Netzwerkplanung am neuen Standort, IT-Sicherheit und Datenschutz beim Umgang mit Patientendaten sowie die wirtschaftliche Bewertung der Beschaffung.",
  aufgaben: [
    {
      t: "1. Aufgabe (29 Punkte)",
      intro:
        "Für den neuen Standort soll ein Multifunktionsgerät beschafft werden. Gedruckt werden ca. 1.500 Seiten S/W und 300 Seiten Farbe pro Monat; wichtig sind geringe Folgekosten und hohe Geschwindigkeit.",
      teile: [
        {
          k: "a) aa)",
          punkte: 6,
          frage:
            "Vervollständigen Sie die Entscheidungsmatrix: Vergeben Sie je Kriterium (Zeile) die Ränge 3 (bester Wert) bis 1 (schlechtester Wert) und bilden Sie je Gerät die Summe.",
          material:
            "<table class='tbl'><tr><th>Kriterium</th><th>Gerät A</th><th>Gerät B</th><th>Gerät C</th></tr><tr><td>Druckgeschwindigkeit</td><td>40 S./min</td><td>62 S./min</td><td>50 S./min</td></tr><tr><td>Scangeschwindigkeit</td><td>20 S./min</td><td>50 S./min</td><td>40 S./min</td></tr><tr><td>Wartungskosten</td><td>50 €/Monat</td><td>10 €/Monat</td><td>15 €/Monat</td></tr><tr><td>Anschaffungspreis</td><td>3.456 €</td><td>2.844 €</td><td>1.656 €</td></tr></table>",
          tabelle: {
            kopf: ["Kriterium", "Rang Gerät A", "Rang Gerät B", "Rang Gerät C"],
            zeilen: [
              ["Druckgeschwindigkeit", null, null, null],
              ["Scangeschwindigkeit", null, null, null],
              ["Wartungskosten", null, null, null],
              ["Anschaffungspreis", null, null, null],
              ["<strong>Summe</strong>", null, null, null],
            ],
            check: ["1", "3", "2", "1", "3", "2", "1", "3", "2", "1", "2", "3", "4", "11", "9"],
          },
          loesung:
            "Druck: A 1, B 3, C 2 · Scan: A 1, B 3, C 2 · Wartung: A 1, B 3, C 2 · Preis: A 1, B 2, C 3. Summen: <strong>A = 4, B = 11, C = 9</strong>. Je Zeile korrekt = 1 Punkt, Summenzeile 2 Punkte.",
        },
        {
          k: "a) ab)",
          punkte: 1,
          frage: "Nennen Sie das Gerät, das Sie aufgrund der Entscheidungsmatrix auswählen.",
          zeilen: 1,
          loesung: "Gerät B (höchste Rangsumme 11).",
        },
        {
          k: "b)",
          punkte: 4,
          frage:
            "Die Praxisleitung fragt, warum nicht einfach das billigste Gerät gekauft wird. Erläutern Sie zwei Gründe, warum die Entscheidung über eine gewichtete Matrix statt nur über den Preis getroffen werden sollte.",
          zeilen: 4,
          loesung:
            "Je 2 Punkte: (1) Folgekosten (Wartung, Toner) übersteigen über die Nutzungsdauer oft den Preisunterschied – TCO-Betrachtung statt Anschaffungspreis. (2) Qualitative Anforderungen (Geschwindigkeit, Qualität) fließen nachvollziehbar und dokumentierbar ein; die Entscheidung ist gegenüber den Inhaberinnen begründbar. (Auch zulässig: Vergleichbarkeit mehrerer Angebote, Vermeidung von Fehlkäufen.)",
        },
        {
          k: "c)",
          punkte: 6,
          frage:
            "Das Gerät wird per LAN eingebunden. Der neue Standort nutzt das Netz 192.168.50.0/26. Die letzte nutzbare Adresse ist für das Gateway reserviert; das Multifunktionsgerät soll die vorletzte nutzbare Adresse erhalten. Geben Sie Netzadresse, Broadcastadresse, Gateway-Adresse und die Adresse des Multifunktionsgeräts an.",
          tabelle: {
            kopf: ["", "Adresse"],
            zeilen: [
              ["Netzadresse", null],
              ["Broadcastadresse", null],
              ["Gateway (letzte nutzbare)", null],
              ["Multifunktionsgerät (vorletzte nutzbare)", null],
            ],
            check: ["192.168.50.0", "192.168.50.63", "192.168.50.62", "192.168.50.61"],
          },
          loesung:
            "/26 → Block 0–63: Netz <strong>192.168.50.0</strong>, Broadcast <strong>192.168.50.63</strong>, Gateway <strong>192.168.50.62</strong>, Gerät <strong>192.168.50.61</strong>. Je Zeile 1,5 Punkte – Rechenweg (Blockgröße 256−192=64) notieren.",
        },
        {
          k: "d) da)",
          punkte: 4,
          frage:
            "Zur Absicherung des Geräts liegt folgender englischer Herstellertext vor. Nennen Sie vier der beschriebenen Sicherheitsmaßnahmen auf Deutsch.",
          material:
            "<em>Protect your device in four steps. First, change the default administrator password to a strong, unique passphrase. Second, install firmware updates regularly to close known vulnerabilities. Third, disable unused services such as FTP and Telnet to reduce the attack surface. Finally, restrict access to the web interface so that only the management network can reach it.</em>",
          zeilen: 4,
          loesung:
            "Je 1 Punkt: (1) Standard-Admin-Passwort durch starkes, einmaliges ersetzen, (2) Firmware-Updates regelmäßig einspielen, (3) ungenutzte Dienste (FTP/Telnet) deaktivieren, (4) Zugriff aufs Web-Interface auf das Management-Netz beschränken.",
        },
        {
          k: "d) db)",
          punkte: 4,
          frage:
            "Ein Kollege schlägt vor, allen Praxis-Mitarbeitenden Administratorrechte zu geben, damit sie seltener beim Support anrufen. Erläutern Sie zwei Gründe, warum das aus Sicherheitssicht abzulehnen ist.",
          zeilen: 4,
          loesung:
            "Je 2 Punkte: (1) Least-Privilege-Prinzip: Schadsoftware läuft mit den Rechten des Benutzers – Adminrechte ermöglichen Systemänderungen und Ausbreitung. (2) Fehlbedienung/absichtliche Änderungen (Deinstallation von Schutzsoftware, Treiber) gefährden Stabilität und Nachvollziehbarkeit; zudem entfallen saubere Protokolle, wer was geändert hat.",
        },
        ,
        {
          k: "e)",
          frage:
            "Eine neue Mitarbeiterin an der Rezeption ist stark sehbeeinträchtigt. Nennen Sie vier Maßnahmen, mit denen Sie ihren IT-Arbeitsplatz BARRIEREFREI einrichten.",
          punkte: 4,
          zeilen: 5,
          loesung:
            "z. B.: Screenreader (z. B. NVDA) bzw. Sprachausgabe der Praxissoftware · Bildschirmlupe/Systemvergrößerung und großer, entspiegelter Monitor · Hoher-Kontrast-Modus und vergrößerte Schrift systemweit · Braille-Zeile als Ausgabegerät · vollständig tastaturbedienbare Software (keine reinen Maus-Funktionen) · gute, blendfreie Beleuchtung. Wichtig: Auswahl gemeinsam mit der Nutzerin – Hilfsmittel sind individuell.",
        },
      ],
    },
    {
      t: "2. Aufgabe (25 Punkte)",
      intro:
        "Für den neuen Standort planen Sie das Netzwerk. Vorgesehen sind Behandlungsräume, Empfang und ein kleiner Serverraum.",
      teile: [
        {
          k: "a)",
          punkte: 6,
          frage:
            "Dem Standort steht 172.16.20.0/24 zur Verfügung. Bilden Sie per Subnetting drei Teilnetze für: Verwaltung (mind. 60 Hosts), Behandlung (mind. 25 Hosts), Gäste-WLAN (mind. 10 Hosts). Geben Sie je Teilnetz Netzadresse und Präfix an (fortlaufend, beginnend bei .0, größtes Netz zuerst).",
          tabelle: {
            kopf: ["Teilnetz", "Netzadresse / Präfix"],
            zeilen: [
              ["Verwaltung (60 Hosts)", null],
              ["Behandlung (25 Hosts)", null],
              ["Gäste-WLAN (10 Hosts)", null],
            ],
            check: ["172.16.20.0/26", "172.16.20.64/27", "172.16.20.96/28"],
          },
          loesung:
            "Verwaltung: 2⁶−2=62 → <strong>172.16.20.0/26</strong> · Behandlung: 2⁵−2=30 → <strong>172.16.20.64/27</strong> · Gäste: 2⁴−2=14 → <strong>172.16.20.96/28</strong>. Je 2 Punkte (Netzadresse + Präfix korrekt).",
        },
        {
          k: "b)",
          punkte: 5,
          frage:
            "Begründen Sie, warum das Gäste-WLAN in ein eigenes Teilnetz mit eigener SSID gehört, und nennen Sie zwei technische Maßnahmen, die den Gastverkehr vom Praxisnetz trennen.",
          zeilen: 5,
          loesung:
            "Begründung (1 P): Gästegeräte sind nicht vertrauenswürdig und dürfen Patientendaten-Systeme nicht erreichen. Maßnahmen (je 2 P): eigenes VLAN mit Firewall-Regeln (Gäste → nur Internet, Default Deny Richtung Praxisnetz); Client-Isolation im WLAN bzw. eigene Firewall-Zone/ACL am Router.",
        },
        {
          k: "c)",
          punkte: 6,
          frage:
            "Der Serverraum erhält einen 19-Zoll-Schrank. Nennen Sie drei Punkte, die bei Aufstellung und Betrieb aus Sicht von Sicherheit und Verfügbarkeit zu beachten sind, mit je einer kurzen Begründung.",
          zeilen: 6,
          loesung:
            "Je 2 Punkte, z. B.: Klimatisierung/Lüftung (Überhitzung ist häufigste Ausfallursache), USV mit getesteten Akkus (überbrückt Stromausfälle, sauberes Herunterfahren), Zutrittsbeschränkung/abschließbar (physischer Schutz der Patientendaten), Erdung/Potentialausgleich, Brandschutz/kein Lager brennbarer Materialien.",
        },
        {
          k: "d)",
          punkte: 8,
          frage:
            "Unabhängig von Teilaufgabe a): Zwischen Empfang (PC 172.16.20.10/26, Gateway 172.16.20.62) und dem Praxisserver (172.16.20.130/28) besteht keine Verbindung; ping auf den Server schlägt fehl, ping auf das eigene Gateway funktioniert. Beschreiben Sie in vier Schritten Ihre systematische Fehlereingrenzung (mit dem jeweils erwarteten Ergebnis).",
          zeilen: 8,
          loesung:
            "Je 2 Punkte, z. B.: (1) IP-Konfiguration beider Geräte prüfen (ipconfig): liegt der Server wirklich im /28-Netz, stimmt sein Gateway? (2) Vom Gateway/Router aus den Server pingen: klappt das, liegt es am Rückweg/Serverkonfiguration. (3) Firewall-Regeln zwischen den Teilnetzen prüfen (ICMP/Ports erlaubt?). (4) Physik/Switchport des Servers prüfen (Link-LED, VLAN-Zuordnung des Ports). Wichtig: Schicht für Schicht, jede Prüfung mit erwartetem Ergebnis.",
        },
      ],
    },
    {
      t: "3. Aufgabe (25 Punkte)",
      intro:
        "Die Praxis verarbeitet besondere Kategorien personenbezogener Daten (Gesundheitsdaten). Vor dem Start prüfen Sie Sicherheit und Datenschutz.",
      teile: [
        {
          k: "a)",
          punkte: 6,
          frage:
            "Ordnen Sie den drei Schutzzielen Vertraulichkeit, Integrität und Verfügbarkeit je eine konkrete technische Maßnahme aus dem Praxisumfeld zu und begründen Sie kurz.",
          zeilen: 6,
          loesung:
            "Je 2 Punkte: Vertraulichkeit → Verschlüsselung der Patientendatenbank/Festplatten + Rechtekonzept (nur Behandelnde sehen Akten). Integrität → Protokollierung/Signaturen bei Änderungen an Abrechnungsdaten (Manipulation erkennbar). Verfügbarkeit → tägliche Sicherung nach 3-2-1 + USV (Praxisbetrieb hängt an Terminen/Akten).",
        },
        {
          k: "b)",
          punkte: 5,
          frage:
            "Die Praxis will die Terminverwaltung als Cloud-Dienst eines deutschen Anbieters nutzen. Nennen Sie die datenschutzrechtliche Grundlage, die VOR der Beauftragung vertraglich geregelt sein muss, und zwei Inhalte, die dieser Vertrag regelt.",
          zeilen: 5,
          loesung:
            "Auftragsverarbeitungsvertrag nach Art. 28 DSGVO (1 P). Inhalte (je 2 P): Weisungsbindung und Zweckbindung der Verarbeitung; technische und organisatorische Maßnahmen (TOM); außerdem zulässig: Subunternehmer-Regelung, Lösch-/Rückgabepflichten nach Vertragsende, Nachweis-/Kontrollrechte.",
        },
        {
          k: "c)",
          punkte: 6,
          frage:
            "Beschreiben Sie ein Backup-Konzept für den Praxisserver nach der 3-2-1-Regel mit konkreten Medien/Orten für diese Praxis.",
          zeilen: 6,
          loesung:
            "3 Kopien (2 P): Produktivdaten + Sicherung auf NAS + Auslagerung. 2 Medientypen (2 P): z. B. NAS-Festplatten und verschlüsselte externe Platte/Band. 1 Kopie außer Haus bzw. offline (2 P): verschlüsselte Platte im Bankschließfach oder Standort 1 – schützt gegen Brand/Diebstahl/Ransomware. Bonus in der Bewertung: regelmäßiger Test-Restore erwähnt.",
        },
        {
          k: "d)",
          punkte: 8,
          frage:
            "Eine Mitarbeiterin meldet: Nach dem Öffnen eines E-Mail-Anhangs „Rechnung.zip“ erscheinen auf dem Empfangs-PC Meldungen, dass Dateien verschlüsselt wurden. Beschreiben Sie die vier wichtigsten Sofortmaßnahmen in sinnvoller Reihenfolge mit kurzer Begründung.",
          zeilen: 8,
          loesung:
            "Je 2 Punkte: (1) PC sofort vom Netz trennen (LAN/WLAN) – Ausbreitung auf Server/Shares stoppen; nicht herunterfahren (Spuren). (2) IT-Verantwortliche/Vorgesetzte informieren, weitere Nutzer warnen – keine Alleingänge. (3) Betroffene Systeme/Shares prüfen und ggf. isolieren; Backups auf Unversehrtheit prüfen (offline halten!). (4) Vorfall dokumentieren und Meldepflichten prüfen (DSGVO Art. 33: binnen 72 h an Aufsichtsbehörde bei Risiko für Betroffene). Wiederanlauf nur aus sauberen Backups.",
        },
      ],
    },
    {
      t: "4. Aufgabe (31 Punkte)",
      intro:
        "Zur Abrechnung und Auswertung setzt die Praxis eine kleine Datenbank ein; außerdem soll die Beschaffung wirtschaftlich bewertet werden.",
      teile: [
        {
          k: "a)",
          punkte: 5,
          frage:
            "Gegeben ist die Tabelle behandlung(b_id, patient_id, datum, dauer_min, preis). Formulieren Sie eine SQL-Abfrage, die je patient_id die Anzahl der Behandlungen und die Summe der Preise für das Jahr 2026 ausgibt, absteigend nach der Preissumme.",
          zeilen: 5,
          loesung:
            "SELECT patient_id, COUNT(*) AS anzahl, SUM(preis) AS summe FROM behandlung WHERE datum &gt;= '2026-01-01' AND datum &lt; '2027-01-01' GROUP BY patient_id ORDER BY summe DESC; – Punkte: SELECT/Aggregate (1), WHERE-Zeitraum (1), GROUP BY (1), ORDER BY DESC (1), lauffähige Gesamtsyntax (1).",
        },
        {
          k: "b)",
          punkte: 4,
          frage:
            "Der folgende Pseudocode soll die Gesamtdauer aller Behandlungen eines Tages berechnen, liefert aber immer 0. Finden Sie den Fehler und korrigieren Sie ihn:\n  gesamt = 0; FÜR i = 1 BIS n: WENN datum[i] = heute DANN gesamt = 0 + dauer[i]; AUSGABE gesamt",
          zeilen: 4,
          loesung:
            "Fehler (2 P): In der Zuweisung wird die Summe bei jedem Treffer neu auf 0 + dauer[i] gesetzt statt aufaddiert – es bleibt nur der letzte Wert (bzw. wirkt wie Überschreiben). Korrektur (2 P): gesamt = gesamt + dauer[i].",
        },
        {
          k: "c)",
          punkte: 8,
          frage:
            "Der Praxisserver nimmt dauerhaft 120 Watt auf und läuft 10 Stunden täglich an 230 Tagen im Jahr. Der Strompreis beträgt 0,35 €/kWh. Berechnen Sie die jährlichen Stromkosten (Rechenweg angeben). Der Anbieter eines sparsameren Modells verspricht 40 % weniger Aufnahme bei 350 € Mehrpreis – nach wie vielen vollen Jahren amortisiert sich der Mehrpreis?",
          zeilen: 6,
          loesung:
            "Stromkosten (4 P): 0,12 kW × 10 h × 230 Tage = 276 kWh × 0,35 € = <strong>96,60 €/Jahr</strong>. Ersparnis (2 P): 40 % = 38,64 €/Jahr. Amortisation (2 P): 350 ÷ 38,64 ≈ 9,06 → der Mehrpreis <strong>amortisiert sich im 10. Jahr (rechnerisch nach ca. 9,06 Jahren)</strong> – Bewertungshinweis: Rechenweg mit korrektem Ergebnis (9,06 Jahre bzw. 10. Jahr) gibt volle Punkte.",
        },
        {
          k: "d)",
          punkte: 8,
          frage:
            "Die Server-Hardware kostet 3.900 € netto (Nutzungsdauer 3 Jahre, Kauf 1. Januar). Stellen Sie den AfA-Plan (linear) mit Jahresbeträgen und Restbuchwerten auf.",
          tabelle: {
            kopf: ["Jahr", "AfA-Betrag", "Restbuchwert 31.12."],
            zeilen: [
              ["1", null, null],
              ["2", null, null],
              ["3", null, null],
            ],
            check: [
              "1300|1.300|1300€|1.300€",
              "2600|2.600",
              "1300|1.300",
              "1300|1.300",
              "1300|1.300",
              "0|0€|1",
            ],
          },
          loesung:
            "AfA = 3.900 ÷ 3 = <strong>1.300 €/Jahr</strong>. Restbuchwerte: 2.600 € → 1.300 € → 0 € (bzw. Erinnerungswert 1 €). Je Zeile korrekt ≈ 2,5 Punkte, Rechenansatz 0,5.",
        },
        ,
        {
          k: "e)",
          frage:
            "Gegeben ist folgender Ablauf als STRUKTOGRAMM (hier textuell dargestellt):\n[Eingabe n] → [summe = 0; i = 1] → [Solange i ≤ n: summe = summe + i; i = i + 1] → [Ausgabe summe]\na) Welche Ausgabe liefert das Programm für n = 4? (kurzer Trace)\nb) Worin unterscheidet sich ein Struktogramm (Nassi-Shneiderman) von einem Programmablaufplan (PAP)?",
          punkte: 6,
          zeilen: 6,
          loesung:
            "a) 1+2+3+4 = 10. Trace: i=1→summe1, i=2→3, i=3→6, i=4→10, i=5 beendet die Schleife → Ausgabe 10.\nb) Struktogramm: geschachtelte Rechteck-Blöcke OHNE Pfeile – es erzwingt strukturierte Programmierung (Sequenz, Auswahl, Wiederholung), Sprünge sind nicht darstellbar. PAP (DIN 66001): Symbole mit Verbindungspfeilen, auch unstrukturierte Sprünge möglich; dafür wird der Kontrollfluss explizit sichtbar.",
        },
      ],
    },
  ],
};
