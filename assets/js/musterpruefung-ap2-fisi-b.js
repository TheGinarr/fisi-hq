"use strict";
window.MP_AP2SIB = {
  kurz: "AP2 SI (B)",
  titel:
    "Musterprüfung – FISI AP Teil 2, Variante B: Konzeption und Administration von IT-Systemen",
  untertitel:
    "90 Minuten · 106 Punkte · 5 Aufgaben mit durchgehendem Szenario · offene Konzeptions- und Rechenaufgaben wie im Original",
  zeit: 90,
  situation:
    "Die Spedition TransRegio GmbH (85 Mitarbeitende, Hauptstandort mit Lagerhalle plus 2 Außenstellen) modernisiert ihre IT: Die Server sollen virtualisiert, die Standorte sicher vernetzt und das Lager mit WLAN für Handscanner ausgestattet werden. Die Disposition arbeitet rund um die Uhr (Schichtbetrieb) – Ausfälle kosten ab der ersten Stunde bares Geld. Du planst und administrierst die neue Umgebung.",
  aufgaben: [
    {
      t: "Aufgabe 1: Virtualisierung, Dimensionierung & Cloud (26 Punkte)",
      teile: [
        {
          k: "1.1",
          frage:
            "Die 6 Altserver (Datei, Druck, ERP-DB, ERP-App, Mail-Relay, Monitoring) sollen auf 2 Virtualisierungshosts konsolidiert werden. Nenne vier Vorteile der Virtualisierung gegenüber 6 physischen Servern – bezogen auf dieses Szenario.",
          punkte: 6,
          zeilen: 5,
          loesung:
            "Z. B.: bessere Hardwareauslastung (weniger Strom/Kühlung/Stellplatz); schnelle Wiederherstellung/Migration von VMs bei Hardwaredefekt (Verfügbarkeit im 24/7-Betrieb); Snapshots vor Updates (geringeres Änderungsrisiko); zentrale Verwaltung und einfachere Backups auf VM-Ebene; flexible Ressourcenzuteilung bei Lastspitzen der Disposition; einfaches Bereitstellen von Testsystemen. Je szenariobezogener Vorteil 1,5 P (max. 6).",
        },
        {
          k: "1.2",
          frage:
            "Jeder Host soll alle 6 VMs allein tragen können (N+1). Die VMs benötigen zusammen 20 vCPUs, 88 GB RAM und 2,4 TB Storage; für Host-OS und Reserve sind je Host zusätzlich 16 GB RAM einzuplanen. Die RAM-Module gibt es à 32 GB. Berechne die RAM-Ausstattung je Host (Modulanzahl) und erkläre, warum „Summe der vCPUs > physische Kerne“ zulässig ist.",
          punkte: 8,
          zeilen: 6,
          loesung:
            "RAM je Host: 88 + 16 = 104 GB → 4 Module à 32 GB = 128 GB (nächste sinnvolle Bestückung; 3 × 32 = 96 GB reicht nicht). CPU-Überbuchung (vCPU-Overcommitment) ist zulässig, weil nicht alle VMs gleichzeitig Volllast fahren – der Hypervisor teilt Rechenzeit dynamisch zu (Scheduling). Kritische VMs (ERP-DB) können Reservierungen erhalten.\nBewertung: RAM-Bedarf 2 P, Modulrechnung 3 P, Overcommitment-Erklärung 3 P.",
        },
        {
          k: "1.3",
          frage:
            "Für die ERP-Datenbank-VM ist zu entscheiden: Thick Provisioning oder Thin Provisioning des virtuellen Datenträgers. Erkläre beide Verfahren und gib eine begründete Empfehlung für die DB-VM.",
          punkte: 6,
          zeilen: 5,
          loesung:
            "Thick: Speicher wird bei Anlage vollständig fest reserviert – garantierte Kapazität, konstante Performance, kein Überbuchungsrisiko. Thin: Speicher wächst erst bei tatsächlicher Nutzung – platzsparend, aber Gefahr des Overprovisionings (Datastore läuft voll) und leichte Performance-Nachteile beim Wachsen. Empfehlung DB-VM: Thick Provisioning – eine produktive Datenbank im 24/7-Betrieb braucht garantierten Platz und vorhersagbare Performance; ein vollgelaufener Datastore würde die DB sofort stoppen.\nBewertung: je Verfahren 2 P, begründete Empfehlung 2 P.",
        },
        {
          k: "1.4",
          frage:
            "Alternativ zur eigenen neuen Hardware prüft die Spedition ein Cloud-Angebot.\na) Ordne für IaaS, PaaS und SaaS jeweils zu, WER das Betriebssystem patcht (Shared-Responsibility-Modell).\nb) Nenne je ein stichhaltiges Argument FÜR die Public Cloud und FÜR den Weiterbetrieb on-premises in diesem Szenario.",
          punkte: 6,
          zeilen: 6,
          loesung:
            "a) IaaS: der KUNDE patcht das Betriebssystem (Anbieter liefert nur Infrastruktur). PaaS und SaaS: der ANBIETER hält Plattform bzw. komplette Anwendung samt OS aktuell; beim Kunden verbleiben immer Daten, Benutzer- und Zugriffsverwaltung.\nb) Pro Cloud: bedarfsgerechte Skalierung ohne Investitionskosten (CapEx→OpEx), Verfügbarkeit/Redundanz des Anbieters. Pro on-premises: volle Datenhoheit (Auftragsdaten der Kunden, DSGVO/AVV), vorhandene Hardware-/Lizenzinvestitionen und konstante, kalkulierbare Latenz im Haus.",
        },
      ],
    },
    {
      t: "Aufgabe 2: Standortvernetzung & Adressierung (20 Punkte)",
      intro:
        "Hauptstandort und 2 Außenstellen nutzen das Netz 172.16.0.0/16. Benötigt werden: Hauptstandort 800 Hosts, Lager-WLAN 120 Hosts, Außenstelle West 60 Hosts, Außenstelle Ost 25 Hosts.",
      teile: [
        {
          k: "2.1",
          frage:
            "Vergib per VLSM passende Subnetze (beginnend bei 172.16.0.0, größtes Netz zuerst). Gib je Standort Netzadresse mit Präfix und nutzbare Hostanzahl an.",
          punkte: 10,
          tabelle: {
            kopf: ["Bereich", "Netzadresse/Präfix", "Nutzbare Hosts"],
            zeilen: [
              ["Hauptstandort (800)", null, null],
              ["Lager-WLAN (120)", null, null],
              ["Außenstelle West (60)", null, null],
              ["Außenstelle Ost (25)", null, null],
            ],
            check: [
              "172.16.0.0/22|172.16.0.0 /22",
              "1022",
              "172.16.4.0/25|172.16.4.0 /25",
              "126",
              "172.16.4.128/26|172.16.4.128 /26",
              "62",
              "172.16.4.192/27|172.16.4.192 /27",
              "30",
            ],
          },
          loesung:
            "800 Hosts → 2¹⁰−2 = 1022 → /22: 172.16.0.0/22 (bis 172.16.3.255). 120 → 2⁷−2 = 126 → /25: 172.16.4.0/25. 60 → 2⁶−2 = 62 → /26: 172.16.4.128/26. 25 → 2⁵−2 = 30 → /27: 172.16.4.192/27.\nBewertung: je Zeile 2 P (Präfix 1 P + Hostzahl 1 P), lückenlose Vergabe ohne Überlappung +2 P.",
        },
        {
          k: "2.2",
          frage:
            "Die Außenstellen sollen über das Internet sicher an den Hauptstandort angebunden werden. Empfiehl eine Technik, nenne das dabei übliche Protokoll-Framework und zwei Sicherheitsmerkmale der Verbindung.",
          punkte: 6,
          zeilen: 4,
          loesung:
            "Site-to-Site-VPN zwischen den Routern/Firewalls der Standorte. Üblich: IPsec (IKEv2 für Schlüsselaustausch, ESP für die Nutzdaten). Sicherheitsmerkmale: starke Verschlüsselung (z. B. AES-256) = Vertraulichkeit, Authentifizierung der Gegenstellen (Pre-Shared Key oder besser Zertifikate) und Integritätssicherung (HMAC) – Replay-Schutz inklusive.\nBewertung: Site-to-Site-VPN 2 P, IPsec/IKE 2 P, je Merkmal 1 P.",
        },
        {
          k: "2.3",
          frage:
            "Im Lager klagen die Handscanner über Verbindungsabbrüche in den hinteren Regalreihen. Nenne zwei wahrscheinliche Funkursachen und je eine Abhilfemaßnahme.",
          punkte: 4,
          zeilen: 4,
          loesung:
            "Z. B.: Abschattung/Dämpfung durch Metallregale und Ware → zusätzliche Access Points mit Ausleuchtungsmessung (Site Survey) positionieren; Interferenzen durch überlappende Kanäle oder Störer → feste, überlappungsfreie Kanalplanung (2,4 GHz: 1/6/11) bzw. Wechsel auf 5 GHz, sofern Scanner es unterstützen; zu geringe Sendeleistung/falsche Antennenausrichtung → Justierung. Je Ursache+Maßnahme 2 P.",
        },
      ],
    },
    {
      t: "Aufgabe 3: Verfügbarkeit & Datensicherung (20 Punkte)",
      teile: [
        {
          k: "3.1",
          frage:
            "Der Storage der Virtualisierung soll 8 Platten à 4 TB nutzen. Vergleiche RAID 5, RAID 6 und RAID 10 für dieses Szenario: Nettokapazität (in TB) und verkraftbare Plattenausfälle.",
          punkte: 8,
          tabelle: {
            kopf: ["", "RAID 5", "RAID 6", "RAID 10"],
            zeilen: [
              ["Nettokapazität (TB)", null, null, null],
              ["Verkraftbare Ausfälle", null, null, null],
            ],
            check: ["28", "24", "16", "1", "2", "1 je Spiegelpaar|1-4|mind. 1|1 pro Paar|bis zu 4"],
          },
          loesung:
            "RAID 5: (8−1) × 4 = 28 TB, 1 Ausfall. RAID 6: (8−2) × 4 = 24 TB, 2 Ausfälle. RAID 10: 8/2 × 4 = 16 TB, mindestens 1 Ausfall sicher – je Spiegelpaar darf eine Platte ausfallen (bis zu 4, aber nie beide eines Paares).\nBewertung: je Zelle ~1,3 P. Für den 24/7-Betrieb mit großen Platten ist RAID 6 oder RAID 10 die übliche Empfehlung (Rebuild-Risiko bei RAID 5 und 4-TB-Platten).",
        },
        {
          k: "3.2",
          frage:
            "Die Geschäftsführung verlangt für das ERP: maximal 1 Stunde Datenverlust, maximal 4 Stunden Stillstand. Benenne die beiden Fachbegriffe hinter diesen Vorgaben und skizziere eine Sicherungsstrategie, die beide einhält.",
          punkte: 8,
          zeilen: 6,
          loesung:
            "RPO (Recovery Point Objective) = 1 h maximaler Datenverlust; RTO (Recovery Time Objective) = 4 h maximale Wiederherstellzeit. Strategie z. B.: nächtliches Vollbackup + stündliche inkrementelle Sicherungen bzw. Transaktionslog-Sicherung der DB jede Stunde (erfüllt RPO); Replikation der VM auf den zweiten Host oder Backup mit Instant-Recovery/Boot-from-Backup (erfüllt RTO); regelmäßiger, dokumentierter Restore-Test mit Zeitmessung als Nachweis.\nBewertung: RPO 2 P, RTO 2 P, RPO-Maßnahme 2 P, RTO-Maßnahme inkl. Test 2 P.",
        },
        {
          k: "3.3",
          frage:
            "Berechne die Verfügbarkeit in Prozent, wenn die ERP-Umgebung im Jahr insgesamt 7 Stunden ungeplant ausfällt (Jahr = 8.760 h), und beurteile, ob damit „99,9 %“ zugesagt werden kann.",
          punkte: 4,
          zeilen: 3,
          loesung:
            "Verfügbarkeit = (8.760 − 7) / 8.760 = 0,999201 → 99,92 %. Zusage 99,9 % (= max. 8,76 h Ausfall/Jahr) wird eingehalten – allerdings ohne Puffer für weitere Störungen; geplante Wartungsfenster sind vertraglich gesondert zu regeln.\nBewertung: Rechnung 2 P, Ergebnis 1 P, Beurteilung 1 P.",
        },
      ],
    },
    {
      t: "Aufgabe 4: IT-Sicherheit im Betrieb (20 Punkte)",
      teile: [
        {
          k: "4.1",
          frage:
            "Für die neue Firewall ist eine Regel zu ergänzen: Die Außenstellen (172.16.4.128/26 und 172.16.4.192/27) sollen ausschließlich per HTTPS auf den ERP-Applikationsserver 172.16.0.20 zugreifen dürfen; alles andere aus den Außenstellen Richtung Hauptstandort ist zu verbieten. Formuliere die nötigen Regeln (Quelle, Ziel, Protokoll/Port, Aktion) in Tabellenform und nenne das zugrunde liegende Sicherheitsprinzip.",
          punkte: 8,
          zeilen: 6,
          loesung:
            "Regel 1: Quelle 172.16.4.128/26, Ziel 172.16.0.20, TCP 443, ERLAUBEN. Regel 2: Quelle 172.16.4.192/27, Ziel 172.16.0.20, TCP 443, ERLAUBEN. Regel 3: Quelle 172.16.4.128/25 (bzw. beide Außenstellen-Netze), Ziel 172.16.0.0/22, any, VERWEIGERN. (Reihenfolge: spezifisch vor allgemein – First Match.) Prinzip: Whitelisting / Least Privilege mit implizitem bzw. explizitem Default Deny.\nBewertung: je korrekte Erlauben-Regel 2,5 P, Deny-Regel + Reihenfolge 2 P, Prinzip 1 P.",
        },
        {
          k: "4.2",
          frage:
            "Ein Disponent meldet nachts ein Pop-up: „Ihre Dateien wurden verschlüsselt…“. Beschreibe die vier wichtigsten Sofortmaßnahmen in sinnvoller Reihenfolge.",
          punkte: 8,
          zeilen: 6,
          loesung:
            "1. Isolieren: betroffenen Rechner sofort vom Netz trennen (LAN-Kabel/WLAN), NICHT herunterfahren (flüchtige Spuren/laufende Verschlüsselung stoppen durch Trennung, Forensik ermöglichen). 2. Melden/Alarmieren: IT-Verantwortliche/Bereitschaft informieren, Vorfall dokumentieren (Zeit, Meldung, betroffene Systeme). 3. Ausbreitung prüfen: Server, Freigaben und Backups kontrollieren, verdächtige Konten sperren; Backups sofort vor Zugriff schützen (offline nehmen). 4. Wiederherstellung planen: sauberes System aus Backup, Passwörter zurücksetzen, Einfallstor schließen; ggf. Meldung an Datenschutzbehörde binnen 72 h prüfen (Art. 33 DSGVO) und Anzeige erstatten. Kein Lösegeld zahlen.\nBewertung: je sinnvolle Maßnahme in vertretbarer Reihenfolge 2 P.",
        },
        {
          k: "4.3",
          frage:
            "Die Handscanner melden sich per WLAN an. Begründe, warum WPA2-Personal mit einem gemeinsamen Schlüssel für 40 Scanner problematisch ist, und nenne die bessere Alternative mit dem zugehörigen Authentifizierungsstandard.",
          punkte: 4,
          zeilen: 4,
          loesung:
            "Ein gemeinsamer PSK für alle Geräte: Verlust/Ausscheiden eines Geräts oder Mitarbeiters erzwingt Schlüsselwechsel auf ALLEN Geräten, keine gerätebezogene Nachvollziehbarkeit, PSK verbreitet sich unkontrolliert. Besser: WPA2/WPA3-Enterprise mit IEEE 802.1X und RADIUS-Server – individuelle Anmeldung je Gerät (Zertifikate oder Konten), zentral sperrbar.\nBewertung: Problem 2 P, Enterprise/802.1X/RADIUS 2 P.",
        },
      ],
    },
    {
      t: "Aufgabe 5: Betrieb, Monitoring & Dokumentation (20 Punkte)",
      teile: [
        {
          k: "5.1",
          frage:
            "Nenne vier Kenngrößen/Zustände der neuen Umgebung, die das Monitoring rund um die Uhr überwachen sollte, und je einen sinnvollen Schwellwert bzw. Alarmzustand.",
          punkte: 8,
          zeilen: 6,
          loesung:
            "Z. B.: Datastore-/Plattenfüllstand (Warnung ab 80 %, kritisch ab 90 %); RAID-/Plattenstatus (Alarm bei degraded); Erreichbarkeit der Hosts/VMs per Ping/Dienst-Check (Alarm bei Timeout); Backup-Ergebnis (Alarm bei fehlgeschlagenem Job); CPU-/RAM-Auslastung der Hosts (Warnung > 85 % über 15 min); USV-Status/Akkubetrieb (sofortiger Alarm); Zertifikatsablauf (< 30 Tage); VPN-Tunnelstatus. Je Kenngröße mit sinnvollem Schwellwert 2 P (max. 8).",
        },
        {
          k: "5.2",
          frage:
            "Nach der Migration steigt die Ladezeit der ERP-Masken in der Außenstelle West spürbar. Beschreibe ein strukturiertes Vorgehen zur Eingrenzung (mindestens vier Schritte mit konkreten Prüfpunkten/Werkzeugen).",
          punkte: 8,
          zeilen: 6,
          loesung:
            "1. Problem präzisieren: Wann, wer, wie stark? Nur West oder überall? (Vergleichsmessung Hauptstandort). 2. Netzpfad prüfen: ping/traceroute zur ERP-IP aus West – Latenz/Paketverlust auf der VPN-Strecke? Auslastung der Internetleitung West (Monitoring/Router-Statistik). 3. Server-Seite prüfen: Auslastung der ERP-VM (CPU/RAM/Disk-Latenz im Hypervisor), parallel laufende Backups/Replikation als Verursacher? 4. Anwendungsebene: DNS-Auflösungszeit, MTU/Fragmentierung über den Tunnel testen, ERP-Logs. 5. Hypothese testen (z. B. QoS für ERP-Traffic, MTU anpassen) und Ergebnis dokumentieren.\nBewertung: strukturiertes Vorgehen 2 P, je konkreter Prüfpunkt mit Werkzeug 1,5 P (max. 6).",
        },
        {
          k: "5.3",
          frage:
            "Nenne zwei Dokumente, die nach diesem Projekt zwingend aktualisiert werden müssen, mit je einer Begründung.",
          punkte: 4,
          zeilen: 3,
          loesung:
            "Z. B.: Netzplan/IP-Adresskonzept (neue VLSM-Subnetze und VPN-Strecken – Grundlage jeder späteren Fehlersuche); Notfall-/Wiederanlaufplan (neue Virtualisierung ändert Restore-Wege und Reihenfolgen); Backup-Dokumentation (neue Jobs, RPO/RTO-Nachweis); Verzeichnis von Verarbeitungstätigkeiten, falls sich Verarbeitungen geändert haben. Je Dokument mit Begründung 2 P.",
        },
      ],
    },
  ],
};
