"use strict";
window.MP_AP2SI = {
  kurz: "FISI-AP2",
  zeit: 90,
  titel: "Musterprüfung FISI-AP2: Konzeption und Administration von IT-Systemen",
  untertitel:
    "90 Minuten · 100 Punkte · 4 Aufgaben · Szenario-Aufgaben mit Konzeption, Berechnung und Begründung – wie im echten Prüfungsformat.",
  situation:
    "Die Möbelmanufaktur Holzwerk Janssen GmbH (85 Mitarbeitende, zwei Standorte) modernisiert ihre IT: Der alternde Einzelserver soll durch eine virtualisierte Umgebung ersetzt werden, die Standorte werden vernetzt, und nach einem Beinahe-Datenverlust verlangt die Geschäftsführung ein belastbares Verfügbarkeits- und Sicherungskonzept. Sie betreuen das Projekt als Fachinformatiker/-in für Systemintegration der Nordwind IT GmbH.",
  aufgaben: [
    {
      t: "1. Aufgabe (25 Punkte)",
      intro: "Zunächst planen Sie die neue Virtualisierungsumgebung mit zentralem Speicher.",
      teile: [
        {
          k: "a)",
          punkte: 6,
          frage:
            "Der Storage erhält ein RAID 5 aus vier Platten à 12 TB. Berechnen Sie die Nettokapazität und erläutern Sie, warum der Hersteller für Platten dieser Größe stattdessen RAID 6 empfiehlt (mit dem Fachbegriff für das Risiko während der Wiederherstellung).",
          zeilen: 5,
          loesung:
            "Netto (2 P): (4−1) × 12 = <strong>36 TB</strong>. Begründung (4 P): Nach einem Ausfall dauert der <strong>Rebuild</strong> bei 12-TB-Platten viele Stunden bis Tage (12 TB bei ~200 MB/s ≈ 16,7 h reine Schreibzeit, real länger). Fällt in dieser Zeit eine zweite Platte aus oder tritt ein Lesefehler (URE) auf, ist das RAID 5 verloren – RAID 6 verkraftet den zweiten Ausfall.",
        },
        {
          k: "b)",
          punkte: 6,
          frage:
            "Zwei Virtualisierungshosts sollen die VMs eines ausgefallenen Partners übernehmen können. Jeder Host trägt im Normalbetrieb 8 VMs mit zusammen 96 GB RAM-Bedarf. Ermitteln Sie die RAM-Mindestausstattung je Host inklusive 25 % Reserve für Betriebssystem und Lastspitzen, und begründen Sie die Auslegung.",
          zeilen: 5,
          loesung:
            "Failover-Fall (3 P): Ein Host trägt alle 16 VMs = 192 GB. Reserve (2 P): 192 × 1,25 = <strong>240 GB je Host</strong> (praktisch 256 GB Bestückung). Begründung (1 P): N+1-Prinzip – Wartung/Ausfall eines Hosts darf den Betrieb nicht stoppen.",
        },
        {
          k: "c)",
          punkte: 7,
          frage:
            "Der Storage wird per iSCSI angebunden. Nennen Sie drei Best Practices für das iSCSI-Netz und begründen Sie jede kurz.",
          zeilen: 6,
          loesung:
            "Je ~2,3 Punkte: (1) Eigenes VLAN/physisch getrenntes Netz – Storage-Verkehr konkurriert sonst mit Nutzerverkehr, Latenz steigt. (2) Jumbo Frames (MTU 9000) durchgängig – weniger Overhead bei großen Blöcken, aber nur Ende-zu-Ende konsistent. (3) Multipathing (MPIO) über zwei Pfade/Switches – Pfadausfall ohne Unterbrechung. (Auch zulässig: CHAP-Authentifizierung, kein Routing ins Client-Netz.)",
        },
        {
          k: "d)",
          punkte: 6,
          frage:
            "Die Geschäftsführung fragt, ob die VMs den Wartungsvertrag für den alten Server ersetzen. Erläutern Sie den Unterschied zwischen Hochverfügbarkeit und Datensicherung an je einem Schadensbeispiel aus der Manufaktur.",
          zeilen: 6,
          loesung:
            "HA (3 P) schützt vor AUSFALL: Stirbt ein Host, starten die VMs auf dem Partner neu – Beispiel Netzteildefekt während der Produktionsplanung. Backup (3 P) schützt vor DATENVERLUST/-manipulation: Verschlüsselt Ransomware die Auftragsdaten oder löscht jemand versehentlich die Stücklisten, repliziert der Cluster den Schaden mit – nur die Sicherung stellt den alten Stand wieder her.",
        },
      ],
    },
    {
      t: "2. Aufgabe (25 Punkte)",
      intro: "Für die Einführung planen Sie das Projekt mit einem Netzplan.",
      teile: [
        {
          k: "a)",
          punkte: 10,
          frage:
            "Gegeben sind die Vorgänge: A Bestellung/Lieferung (2 Wochen, kein Vorgänger) · B Aufbau und Grundinstallation (5 Wochen, nach A) · C Schulungsunterlagen erstellen (3 Wochen, nach A) · D Migration der Systeme (4 Wochen, nach B und C) · E Abnahme und Doku (2 Wochen, nach D). Vervollständigen Sie die Tabelle (Vorwärts- und Rückwärtsrechnung, Projektstart Woche 0).",
          tabelle: {
            kopf: ["Vorgang", "Dauer", "FAZ", "FEZ", "SAZ", "SEZ", "GP"],
            zeilen: [
              ["A", "2", null, null, null, null, null],
              ["B", "5", null, null, null, null, null],
              ["C", "3", null, null, null, null, null],
              ["D", "4", null, null, null, null, null],
              ["E", "2", null, null, null, null, null],
            ],
            check: [
              "0",
              "2",
              "0",
              "2",
              "0",
              "2",
              "7",
              "2",
              "7",
              "0",
              "2",
              "5",
              "4",
              "7",
              "2",
              "7",
              "11",
              "7",
              "11",
              "0",
              "11",
              "13",
              "11",
              "13",
              "0",
            ],
          },
          loesung:
            "A: 0/2 · 0/2 · GP 0 — B: 2/7 · 2/7 · GP 0 — C: 2/5 · 4/7 · GP <strong>2</strong> — D: 7/11 · 7/11 · GP 0 — E: 11/13 · 11/13 · GP 0. FAZ(D) = max(7, 5) = 7 (Maximum-Regel!). Je korrekte Zeile 2 Punkte.",
        },
        {
          k: "b)",
          punkte: 3,
          frage: "Geben Sie den kritischen Pfad und die Projektdauer an.",
          zeilen: 2,
          loesung:
            "Kritischer Pfad <strong>A–B–D–E</strong> (alle GP 0), Projektdauer <strong>13 Wochen</strong>. C hat 2 Wochen Puffer.",
        },
        {
          k: "c)",
          punkte: 6,
          frage:
            "Die Schulungsunterlagen (C) verzögern sich um 3 Wochen. Beurteilen Sie die Auswirkung auf den Endtermin rechnerisch und nennen Sie zwei mögliche Gegenmaßnahmen.",
          zeilen: 5,
          loesung:
            "Rechnung (2 P): GP von C ist 2 Wochen → 3 Wochen Verzug überschreiten den Puffer um 1 Woche, der Endtermin verschiebt sich auf Woche 14. Maßnahmen (je 2 P): zusätzliche Ressourcen auf C (Crashing), Parallelisierung/Vorziehen von Teilen der Migration (Fast Tracking), Reduktion des Schulungsumfangs auf das Abnahme-Nötige mit Nachlieferung.",
        },
        {
          k: "d)",
          punkte: 6,
          frage:
            "Die Migration soll am Wochenende laufen. Skizzieren Sie die vier Kernelemente eines sauberen Change-/Migrationsplans für dieses Wochenende.",
          zeilen: 6,
          loesung:
            "Je 1,5 Punkte: (1) Angekündigtes Wartungsfenster mit Kommunikationsplan an alle Abteilungen. (2) Vollständige, GETESTETE Sicherung + definierter Rollback-Plan mit Entscheidungszeitpunkt („Point of no Return“). (3) Testmigration vorab in Testumgebung, Abnahmekriterien definiert. (4) Funktionstests nach Migration (Checkliste je System) und dokumentierter Abschluss.",
        },
      ],
    },
    {
      t: "3. Aufgabe (25 Punkte)",
      intro:
        "Die Geschäftsführung verlangt ein Verfügbarkeits- und Notstromkonzept für den Serverraum.",
      teile: [
        {
          k: "a)",
          punkte: 8,
          frage:
            "Die Kette für den Zugriff der Fertigung besteht aus Firewall (99,5 %), Core-Switch (99,0 %) und Virtualisierungscluster (99,8 %). Berechnen Sie die Gesamtverfügbarkeit der Kette in Prozent (3 Nachkommastellen) und die rechnerische Ausfallzeit pro Jahr in Stunden (8.760 h).",
          zeilen: 5,
          loesung:
            "Reihenschaltung (4 P): 0,995 × 0,99 × 0,998 = 0,98308 → <strong>98,308 %</strong>. Ausfallzeit (4 P): 8.760 × 0,01692 ≈ <strong>148,2 h/Jahr</strong>. Merksatz: Jede zusätzlich nötige Komponente senkt die Gesamtverfügbarkeit.",
        },
        {
          k: "b)",
          punkte: 5,
          frage:
            "Der schwächste Punkt soll redundant werden. Berechnen Sie die Verfügbarkeit von zwei parallelen Core-Switches (je 99,0 %) und die neue Gesamtverfügbarkeit der Kette.",
          zeilen: 4,
          loesung:
            "Parallel (3 P): 1 − 0,01² = 0,9999 = 99,99 %. Neue Kette (2 P): 0,995 × 0,9999 × 0,998 ≈ 0,99291 → <strong>99,291 %</strong> (Ausfallzeit sinkt auf ~62 h).",
        },
        {
          k: "c)",
          punkte: 8,
          frage:
            "Die USV liefert 1.500 VA bei einem Leistungsfaktor von 0,8; die kritische Last beträgt 900 W. Die Batterie stellt 1.440 Wh nutzbare Energie bereit. Prüfen Sie rechnerisch, ob die USV die Last tragen kann, und berechnen Sie die Überbrückungszeit in Minuten.",
          zeilen: 5,
          loesung:
            "Tragfähigkeit (4 P): 1.500 VA × 0,8 = 1.200 W nutzbar ≥ 900 W Last → ja, mit 300 W Reserve. Überbrückung (4 P): 1.440 Wh ÷ 900 W = 1,6 h = <strong>96 Minuten</strong>. Einheiten sauber: VA ≠ W!",
        },
        {
          k: "d)",
          punkte: 4,
          frage:
            "Nennen Sie zwei organisatorische Maßnahmen, damit das USV-Konzept im Ernstfall tatsächlich funktioniert.",
          zeilen: 4,
          loesung:
            "Je 2 Punkte: regelmäßiger Batterietest/Lastprobe mit Protokoll (Akkus altern unbemerkt); dokumentierte automatische Shutdown-Reihenfolge (Agent auf Hosts, erst VMs, dann Storage); zusätzlich zulässig: Wartungsvertrag/Tauschintervall, Alarmierung ans Monitoring.",
        },
      ],
    },
    {
      t: "4. Aufgabe (25 Punkte)",
      intro:
        "Nach dem Beinahe-Datenverlust überarbeiten Sie Datensicherung und Zugriffssicherheit.",
      teile: [
        {
          k: "a)",
          punkte: 8,
          frage:
            "Entwerfen Sie das Sicherungskonzept: Vollsicherung sonntags 22:00, inkrementelle Sicherung Mo–Fr 22:00. Ein Ausfall vernichtet Mittwoch um 14:00 die Produktivdaten. Geben Sie an, welche Sicherungssätze für den Restore nötig sind (in Reihenfolge), wie hoch der maximale Datenverlust (RPO) ist, und welche EINE Änderung den maximalen Datenverlust deutlich reduzieren würde.",
          zeilen: 6,
          loesung:
            "Restore (4 P): Voll (So) → Inkrement Mo → Inkrement Di (in dieser Reihenfolge). RPO (2 P): letzte Sicherung Di 22:00 → bis Mi 14:00 sind <strong>16 Stunden</strong> (bzw. ein Arbeitstag-Vormittag) verloren. Halbierung (2 P): zusätzliche Zwischensicherung mittags (z. B. Snapshot/inkrementell 12:00) reduziert den maximalen Datenverlust deutlich – im ungünstigsten Fall auf ca. 14 h, im konkreten Beispiel (Ausfall 14:00 Uhr) sogar auf 2 h.",
        },
        {
          k: "b)",
          punkte: 5,
          frage:
            "Begründen Sie, warum eine der Sicherungskopien offline oder unveränderlich (immutable) sein muss, obwohl das NAS bereits räumlich getrennt steht.",
          zeilen: 4,
          loesung:
            "Ransomware und Angreifer verschlüsseln/löschen alles, was über das Netz erreichbar und beschreibbar ist – auch das entfernte NAS (5 P bei Nennung von: erreichbare Sicherungen sind Teil der Angriffsfläche; offline/immutable = letzte unangreifbare Kopie; 3-2-1-Regel mit Offline-Komponente).",
        },
        {
          k: "c)",
          punkte: 6,
          frage:
            "Der Wartungszugang des Maschinenherstellers auf die CNC-Steuerung soll abgesichert werden. Nennen Sie drei Anforderungen an eine sichere Fernwartung mit kurzer Begründung.",
          zeilen: 6,
          loesung:
            "Je 2 Punkte: Zugang nur auf Anforderung, zeitlich begrenzt (kein Dauer-VPN – Angriffsfläche); personalisierte Konten + MFA über Jump-Host (Nachvollziehbarkeit statt Sammellogin); Zugriff nur auf die Zielanlage per Firewall-Regel + Sitzungsprotokollierung (Least Privilege, Beweisbarkeit).",
        },
        {
          k: "d)",
          punkte: 6,
          frage:
            "Formulieren Sie für den Monitoring-Server eine SQL-Abfrage auf die Tabelle messwerte(host, zeit, cpu_last), die je host die maximale CPU-Last des heutigen Tages ausgibt, aber nur für Hosts mit einem Maximum über 90.",
          zeilen: 4,
          loesung:
            "SELECT host, MAX(cpu_last) AS spitze FROM messwerte WHERE zeit &gt;= CURRENT_DATE GROUP BY host HAVING MAX(cpu_last) &gt; 90; – Punkte: MAX+Alias (1,5), WHERE auf heute (1,5), GROUP BY (1,5), HAVING statt WHERE fürs Aggregat (1,5).",
        },
      ],
    },
  ],
};
