"use strict";
window.MP_AP1C = {
  kurz: "AP1 (C)",
  titel: "Musterprüfung – AP Teil 1, Variante C: Einrichten eines IT-gestützten Arbeitsplatzes",
  untertitel:
    "90 Minuten · 110 Punkte · 5 Aufgaben mit durchgehendem Szenario · offene, handlungsorientierte Aufgaben wie im Original · für alle IT-Berufe identisch",
  zeit: 90,
  situation:
    "Die ShowTec Veranstaltungstechnik GmbH (Verleih von Licht-, Ton- und Bühnentechnik, 28 Mitarbeitende) richtet ein neues Dispositions-Büro mit 6 Arbeitsplätzen ein und ersetzt ihre gealterte Lager-IT. Besonderheit: Im Lager werden Geräte per Handscanner ein- und ausgebucht, die Disposition plant Events teils am Wochenende. Du übernimmst Planung, Beschaffung, Einrichtung und Übergabe.",
  aufgaben: [
    {
      t: "Aufgabe 1: Projektplanung & Team (20 Punkte)",
      teile: [
        {
          k: "1.1",
          frage:
            "Erstelle für die Einrichtung einen Projektstrukturplan mit den drei Teilprojekten „Beschaffung“, „Technische Umsetzung“ und „Übergabe“ und ordne jedem zwei konkrete Arbeitspakete zu. Nenne außerdem den Ansatz, wenn man vom Gesamtprojekt zu den Arbeitspaketen hin plant.",
          punkte: 8,
          zeilen: 6,
          loesung:
            "Beispiel-PSP: Beschaffung (AP: Anforderungen/Angebotsvergleich; AP: Bestellung & Liefertermine). Technische Umsetzung (AP: Arbeitsplätze aufbauen + OS-Installation; AP: Netzwerk/WLAN im Lager + Scanner-Anbindung). Übergabe (AP: Funktionstest mit Testprotokoll; AP: Einweisung + Dokumentation). Der Ansatz vom Ganzen zu den Details ist der Top-down-Ansatz (Gegenrichtung: Bottom-up).\nBewertung: Struktur 2 P, je sinnvolles Arbeitspaket 0,75 P (max. 4,5), Top-down 1,5 P.",
        },
        {
          k: "1.2",
          frage:
            "Für die Umsetzung gilt: G Verkabelung Lager (6 h, Start) · H Büroplätze aufbauen (8 h, Start) · I WLAN/Scanner einrichten (5 h, nach G) · J Software-Rollout (4 h, nach H) · K Integrationstest (3 h, nach I und J). Berechne FAZ/FEZ aller Vorgänge, die Gesamtdauer und den kritischen Pfad.",
          punkte: 8,
          zeilen: 6,
          loesung:
            "FAZ/FEZ: G 0/6 · H 0/8 · I 6/11 · J 8/12 · K: FAZ = max(11; 12) = 12 → FEZ 15. Gesamtdauer 15 h. Kritischer Pfad: H → J → K (8+4+3 = 15). Der Ast G–I hat 1 h Gesamtpuffer (12 − 11).\nBewertung: je Vorgang 1 P (5 P), Maximum bei K 1 P, Dauer 1 P, Pfad 1 P.",
        },
        {
          k: "1.3",
          frage:
            "Das Projektteam (du, ein Geselle Veranstaltungstechnik, eine Werkstudentin) gerät in der zweiten Woche in Streit über Zuständigkeiten. Ordne die Situation in das Phasenmodell nach Tuckman ein und nenne zwei konkrete Maßnahmen der Projektleitung.",
          punkte: 4,
          zeilen: 3,
          loesung:
            "Storming-Phase (Konflikte um Rollen sind normal und notwendig). Maßnahmen: Rollen und Zuständigkeiten explizit festlegen (z. B. einfache Aufgabenmatrix), moderiertes Klärungsgespräch mit gemeinsamen Arbeitsregeln; danach kurze Regel-Checks (Norming unterstützen). Konflikt unterdrücken wäre falsch.\nBewertung: Phase 2 P, je Maßnahme 1 P.",
        },
      ],
    },
    {
      t: "Aufgabe 2: Beschaffung, Wirtschaftlichkeit & Nachhaltigkeit (30 Punkte)",
      teile: [
        {
          k: "2.1",
          frage:
            "Für 6 Dispositions-PCs liegen zwei Angebote vor. Angebot Licht+Ton-IT: Listenpreis je PC 1.150 €, 12 % Rabatt, 2 % Skonto (10 Tage), Lieferung frei Haus. Angebot MegaBit: Listenpreis je PC 1.050 €, 5 % Rabatt, kein Skonto, 90 € Versand gesamt. Berechne beide Bezugspreise (gesamt, 2 Nachkommastellen) und empfiehl rechnerisch.",
          punkte: 10,
          tabelle: {
            kopf: ["", "Licht+Ton-IT", "MegaBit"],
            zeilen: [
              ["Listenpreis (6 Stück)", null, null],
              ["− Rabatt", null, null],
              ["= Zieleinkaufspreis", null, null],
              ["− Skonto", null, null],
              ["+ Bezugskosten", null, null],
              ["= Bezugspreis", null, null],
            ],
            check: [
              "6900|6.900|6900,00|6.900,00",
              "6300|6.300|6300,00|6.300,00",
              "828|828,00",
              "315|315,00",
              "6072|6.072|6072,00|6.072,00",
              "5985|5.985|5985,00|5.985,00",
              "121,44|121.44",
              "0|0,00|kein|–|-",
              "0|0,00|frei Haus|–|-",
              "90|90,00",
              "5950,56|5.950,56|5950.56",
              "6075|6.075|6075,00|6.075,00",
            ],
          },
          loesung:
            "Licht+Ton-IT: 6 × 1.150 = 6.900 € − 12 % (828 €) = 6.072 € − 2 % Skonto (121,44 €) = 5.950,56 € + 0 € = 5.950,56 €.\nMegaBit: 6 × 1.050 = 6.300 € − 5 % (315 €) = 5.985 € − 0 = 5.985 € + 90 € = 6.075,00 €.\nEmpfehlung: Licht+Ton-IT, Ersparnis 124,44 € – der nominell günstigere Listenpreis täuscht (Skonto- und Versandeffekt!).\nBewertung: je Kette 4 P, Empfehlung mit Differenz 2 P.",
        },
        {
          k: "2.2",
          frage:
            "Die sechs Alt-PCs (Anschaffung je 900 €, Nutzungsdauer 5 Jahre, linear) sind exakt 3 Jahre alt und sollen für je 250 € verkauft werden. Berechne Restbuchwert je Gerät und den Buchgewinn/-verlust je Gerät.",
          punkte: 5,
          zeilen: 4,
          loesung:
            "AfA: 900 / 5 = 180 €/Jahr. Restbuchwert nach 3 Jahren: 900 − 3 × 180 = 360 €. Verkauf 250 € → Buchverlust 110 € je Gerät (Verkaufspreis unter Restbuchwert).\nBewertung: AfA 1,5 P, Restbuchwert 2 P, Buchverlust mit Vorzeichen 1,5 P.",
        },
        {
          k: "2.3",
          frage:
            "Die Disposition arbeitet eventbedingt auch samstags. Nenne zwei arbeitszeitrechtliche Eckpunkte (Erwachsene, ArbZG), die die Geschäftsführung bei der Wochenendplanung beachten muss.",
          punkte: 5,
          zeilen: 4,
          loesung:
            "Z. B.: werktägliche Arbeitszeit max. 8 h, verlängerbar auf 10 h nur mit Ausgleich (innerhalb von 6 Monaten/24 Wochen im Schnitt 8 h); Ruhezeit von mindestens 11 Stunden nach Arbeitsende; Ruhepausen (30 min ab 6 h, 45 min ab 9 h); Samstag ist Werktag – aber Sonn-/Feiertagsarbeit ist nur in Ausnahmebranchen erlaubt (Veranstaltungsbetrieb kann darunter fallen, dann Ersatzruhetag). Je korrekter Eckpunkt 2,5 P (max. 5).",
        },
        {
          k: "2.4",
          frage:
            "Die Geschäftsführung möchte bei der Notebook-Beschaffung NACHHALTIGKEIT (Green IT) berücksichtigen. Nenne vier konkrete Kriterien bzw. Maßnahmen.",
          punkte: 4,
          zeilen: 5,
          loesung:
            "z. B.: Energieeffizienz (Energy-Star-/EPEAT-zertifizierte Geräte, sparsame Netzteile) · Reparierbarkeit und Ersatzteilverfügbarkeit (wechselbarer Akku/SSD) · lange Nutzungsdauer durch Garantieverlängerung und ausreichende Dimensionierung · Rücknahme-/Recyclingprogramm des Herstellers · Mehrweg-/reduzierte Verpackung · Energiesparprofile und automatische Abschaltung im Betrieb.",
        },
        {
          k: "2.5",
          frage:
            "Alternativ zum Kauf der 10 Notebooks (12.000 € netto) bietet der Händler Leasing an: 280 €/Monat bei 48 Monaten Laufzeit.\na) Berechne die Leasing-Gesamtkosten und vergleiche mit dem Kauf.\nb) Nenne je zwei Vor- und Nachteile des Leasings.\nc) Was versteht man allgemein unter einer Make-or-Buy-Entscheidung?",
          punkte: 6,
          zeilen: 7,
          loesung:
            "a) 280 € × 48 = 13.440 € → 1.440 € teurer als der Kauf (ohne Zinseffekte/Servicevorteile).\nb) Vorteile: Liquidität wird geschont, planbare monatliche Raten, regelmäßige Geräteerneuerung, oft Service/Austausch enthalten. Nachteile: höhere Gesamtkosten, feste Vertragsbindung, kein Eigentum (keine spätere Verwertung), Rückgabepflichten/Zustandsklauseln.\nc) Make or Buy: Grundsatzentscheidung, ob eine Leistung selbst erbracht (make) oder eingekauft wird (buy) – Kriterien: Kosten, eigenes Know-how, Kapazität, strategische Bedeutung (Kernkompetenz), Abhängigkeit vom Anbieter.",
        },
      ],
    },
    {
      t: "Aufgabe 3: Arbeitsplätze & Betriebssystem (20 Punkte)",
      teile: [
        {
          k: "3.1",
          frage:
            "Die neuen PCs kommen mit 2-TB-NVMe-SSD und sollen mit UEFI/GPT und Windows eingerichtet werden. Nenne je zwei Vorteile von UEFI gegenüber BIOS und von SSD (NVMe) gegenüber HDD – bezogen auf den Arbeitsalltag der Disposition.",
          punkte: 6,
          zeilen: 5,
          loesung:
            "UEFI: Secure Boot (Schutz vor manipulierten Bootloadern), schnellerer Start, GPT ohne 2-TB-Grenze und mit redundanter Partitionstabelle, komfortable Firmware-Oberfläche. NVMe-SSD: keine Mechanik – unempfindlich und leise im Büro, drastisch kürzere Lade-/Bootzeiten (Disposition öffnet große Planungsdateien), geringere Latenz durch PCIe-Anbindung statt SATA-Flaschenhals, weniger Energieverbrauch.\nBewertung: je korrekter Vorteil 1,5 P (max. 6).",
        },
        {
          k: "3.2",
          frage:
            "Für den Datenaustausch mit Event-Locations nutzt die Disposition USB-Sticks; einzelne Projektordner sind bis 8 GiB groß, die Sticks müssen auch an macOS-Rechnern der Locations lesbar sein. Begründe die Wahl des Dateisystems (und warum zwei naheliegende Alternativen ausscheiden).",
          punkte: 6,
          zeilen: 4,
          loesung:
            "exFAT: keine 4-GiB-Dateigrenze und ab Werk unter Windows UND macOS les- und schreibbar. FAT32 scheidet aus (Einzeldateien max. 4 GiB – die 8-GiB-Ordner enthalten oft größere Videodateien). NTFS scheidet aus, weil macOS es standardmäßig nur LESEN kann (Schreiben nur mit Zusatztools).\nBewertung: exFAT mit Begründung 3 P, je Ausschluss 1,5 P.",
        },
        {
          k: "3.3",
          frage:
            "Beschreibe vier Schritte einer sauberen Arbeitsplatz-Übergabe nach der Installation (Stichwort Qualitätssicherung).",
          punkte: 8,
          zeilen: 5,
          loesung:
            "Z. B.: 1. Funktionstest nach Testprotokoll (Login, Drucker, Dispo-Software, Scanner-Anbindung) mit dokumentiertem Ergebnis; 2. Sicherheits-Grundzustand prüfen (Updates, Virenschutz, Verschlüsselung, Standardnutzer ohne Adminrechte); 3. Inventarisierung/Dokumentation (Hostname, Seriennummer, installierte Software, Lizenz); 4. Einweisung der Nutzerin/des Nutzers inkl. Ansprechpartner und Übergabe-/Abnahmebestätigung mit Unterschrift.\nBewertung: je Schritt 2 P.",
        },
      ],
    },
    {
      t: "Aufgabe 4: Netzwerk & Lager-WLAN (20 Punkte)",
      teile: [
        {
          k: "4.1",
          frage:
            "ShowTec nutzt 192.168.50.0/24 und braucht vier gleich große Subnetze (Büro, Lager-WLAN, Server/NAS, Gäste). Bestimme Präfix und fülle die Tabelle für Subnetz 2 (Lager-WLAN) und Subnetz 4 (Gäste).",
          punkte: 8,
          tabelle: {
            kopf: ["", "Subnetz 2 (Lager-WLAN)", "Subnetz 4 (Gäste)"],
            zeilen: [
              ["Netzadresse", null, null],
              ["Broadcastadresse", null, null],
              ["Nutzbare Hosts", null, null],
            ],
            check: [
              "192.168.50.64",
              "192.168.50.192",
              "192.168.50.127",
              "192.168.50.255",
              "62",
              "62",
            ],
          },
          loesung:
            "4 Subnetze → 2 Bits → /26, Schrittweite 64. Subnetz 2: 192.168.50.64/26, Broadcast .127. Subnetz 4: 192.168.50.192/26, Broadcast .255. Hosts je Subnetz: 2⁶ − 2 = 62.\nBewertung: Präfixlogik 2 P, je Zelle 1 P.",
        },
        {
          k: "4.2",
          frage:
            "Die Handscanner buchen über das Lager-WLAN direkt in die Warenwirtschaft. Nenne drei Anforderungen an dieses WLAN (Sicherheit/Verfügbarkeit) mit kurzer Begründung.",
          punkte: 6,
          zeilen: 5,
          loesung:
            "Z. B.: eigenes VLAN/SSID nur für Scanner mit Firewall-Freigabe ausschließlich zur Warenwirtschaft (Least Privilege); WPA2/WPA3-Enterprise oder mindestens gerätebezogene Zugänge statt ein PSK für alle (Sperrbarkeit); flächendeckende Ausleuchtung per Messung inkl. Regalgassen und überlappungsfreie Kanäle (Verfügbarkeit beim Buchen); Roaming-fähige APs (unterbrechungsfreies Arbeiten in Bewegung); getrenntes Gäste-WLAN ohne Weg ins Betriebsnetz. Je Anforderung mit Begründung 2 P (max. 6).",
        },
        {
          k: "4.3",
          frage:
            "Ein Scanner erreicht die Warenwirtschaft (192.168.50.140) nicht, andere Scanner funktionieren. Beschreibe eine strukturierte Fehlereingrenzung in vier Schritten mit je einem konkreten Befehl/Prüfpunkt.",
          punkte: 6,
          zeilen: 5,
          loesung:
            "1. Gerät prüfen: WLAN verbunden? Korrekte IP/DHCP-Lease (Netz 192.168.50.64/26)? 2. Konnektivität testen: ping Gateway, dann ping 192.168.50.140 – scheitert nur der Server, liegt es nicht am Funk. 3. Namensauflösung/Anwendung: erreicht der Scanner den Dienst-Port (Test von einem Rechner: Test-NetConnection 192.168.50.140 -Port …)? 4. Vergleich mit funktionierendem Scanner (Konfig-Diff), AP-Logs/MAC-Filter und Firewall-Regeln prüfen; Erkenntnisse dokumentieren.\nBewertung: sinnvolle Reihenfolge 2 P, je konkreter Prüfpunkt 1 P (max. 4).",
        },
      ],
    },
    {
      t: "Aufgabe 5: IT-Sicherheit & Datenschutz (20 Punkte)",
      teile: [
        {
          k: "5.1",
          frage:
            "Auf dem NAS liegen Kundenverträge und Personaldaten. Ordne den Schutzzielen Vertraulichkeit, Integrität und Verfügbarkeit je eine konkrete Maßnahme aus dem ShowTec-Umfeld zu.",
          punkte: 6,
          tabelle: {
            kopf: ["Schutzziel", "Maßnahme"],
            zeilen: [
              ["Vertraulichkeit", null],
              ["Integrität", null],
              ["Verfügbarkeit", null],
            ],
            check: [
              "verschlüsselung|berechtigung|zugriffsrecht|vlan|2fa|zwei-faktor|agdlp",
              "prüfsumme|hash|versionierung|snapshot|signatur|protokollierung",
              "backup|raid|usv|redundan|3-2-1|spiegel",
            ],
          },
          loesung:
            "Vertraulichkeit: Berechtigungskonzept nach Rollen, Verschlüsselung des NAS, getrennte Netze. Integrität: Snapshots/Versionierung, Prüfsummen, Änderungsprotokolle. Verfügbarkeit: RAID im NAS, 3-2-1-Backup mit Offline-Kopie, USV. Je sinnvolle Zuordnung 2 P.",
        },
        {
          k: "5.2",
          frage:
            "Eine Disponentin erhält eine E-Mail: „Ihr Sharepoint-Passwort läuft ab – hier verlängern“, der Link führt auf showtec-login.eventportal-security.net. Benenne die Angriffsart, drei Erkennungsmerkmale und das korrekte Verhalten.",
          punkte: 8,
          zeilen: 6,
          loesung:
            "Phishing (Credential Harvesting). Merkmale: fremde Domain, die den Firmennamen nur als Subdomain-Köder enthält; erzeugter Zeitdruck („läuft ab“); generische Anrede/untypischer Absender; Link-Ziel weicht vom angezeigten Text ab (Mouse-over); Unternehmen fragen Passwörter nie per Mail-Link ab. Verhalten: nicht klicken, nichts eingeben, Mail über den Meldeweg an die IT melden (nicht löschen – Beweis), bei bereits erfolgter Eingabe sofort Passwort ändern und IT informieren; Kollegen warnen macht die IT zentral.\nBewertung: Angriffsart 2 P, je Merkmal 1,33 P (max. 4), Verhalten 2 P.",
        },
        {
          k: "5.3",
          frage:
            "Für das Buchungssystem werden personenbezogene Daten von Location-Kontakten gespeichert. Nenne zwei Grundsätze der DSGVO (Art. 5) mit je einem konkreten Umsetzungsbeispiel bei ShowTec.",
          punkte: 6,
          zeilen: 4,
          loesung:
            "Z. B.: Datenminimierung – nur dienstlich nötige Kontaktfelder speichern (kein Geburtsdatum von Ansprechpartnern); Speicherbegrenzung – Löschkonzept nach Vertragsende/Aufbewahrungsfristen; Zweckbindung – Kontaktdaten nur für Eventabwicklung, kein Marketing ohne Einwilligung; Integrität und Vertraulichkeit – Zugriff nur für Disposition (Berechtigungskonzept). Je Grundsatz mit Beispiel 3 P.\nBewertung: nur benannter Grundsatz ohne Beispiel = halbe Punkte.",
        },
      ],
    },
  ],
};
