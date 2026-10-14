"use strict";
window.MP_AP1B = {
  kurz: "AP1 (B)",
  titel: "Musterprüfung – AP Teil 1, Variante B: Einrichten eines IT-gestützten Arbeitsplatzes",
  untertitel:
    "90 Minuten · 108 Punkte · 5 Aufgaben mit durchgehendem Szenario · offene, handlungsorientierte Aufgaben wie im Original · für alle IT-Berufe identisch",
  zeit: 90,
  situation:
    "Die Steuerkanzlei Rademacher & Kollegen (12 Mitarbeitende, davon 8 Sachbearbeiter, 3 Steuerberater, 1 Empfang) zieht in neue Büroräume und beauftragt deinen Betrieb mit der kompletten IT-Ausstattung: 12 Arbeitsplätze, ein kleiner Serverraum, strukturierte Verkabelung, Datensicherung und Schulung. Die Kanzlei arbeitet mit besonders schützenswerten Mandantendaten (Steuerunterlagen). Du begleitest das Projekt von der Planung bis zur Übergabe.",
  aufgaben: [
    {
      t: "Aufgabe 1: Projektplanung (28 Punkte)",
      intro: "Das Projekt soll in 5 Arbeitstagen abgeschlossen sein.",
      teile: [
        {
          k: "1.1",
          frage:
            "Für das Projekt liegen folgende Vorgänge mit Dauer (in Stunden) und Abhängigkeiten vor: A Verkabelung (8 h, keine Vorgänger) · B Serverschrank aufbauen (4 h, keine Vorgänger) · C Server installieren (6 h, nach B) · D Clients aufbauen (6 h, nach A) · E Clients ins Netz einbinden (8 h, nach C und D) · F Datenübernahme & Tests (6 h, nach E). Berechne für jeden Vorgang FAZ und FEZ (Vorwärtsrechnung) und gib die Gesamtdauer des Projekts an.",
          punkte: 8,
          zeilen: 6,
          loesung:
            "FAZ/FEZ: A 0/8 · B 0/4 · C 4/10 · D 8/14 · E 14/22 (Maximum aus FEZ C=10 und FEZ D=14!) · F 22/28. Gesamtdauer: 28 Stunden.\nBewertung: je Vorgang 1 P (6 P), korrektes Maximum bei E +1 P, Gesamtdauer +1 P. Häufigster Fehler: Bei E den kleineren Vorgänger-FEZ (10) statt des größeren (14) anzusetzen.",
        },
        {
          k: "1.2",
          frage:
            "Bestimme den kritischen Pfad und den Gesamtpuffer von Vorgang C. Erläutere in einem Satz, was der Gesamtpuffer aussagt.",
          punkte: 6,
          zeilen: 4,
          loesung:
            "Kritischer Pfad: A → D → E → F (8+6+8+6 = 28 h, Puffer 0). Rückwärtsrechnung für C: SEZ C = SAZ E = 14, SAZ C = 14 − 6 = 8 → Gesamtpuffer C = SAZ − FAZ = 8 − 4 = 4 h. Aussage: C darf sich um bis zu 4 Stunden verzögern, ohne den Projektendtermin zu gefährden.\nBewertung: kritischer Pfad 3 P, GP-Berechnung 2 P, Erläuterung 1 P.",
        },
        {
          k: "1.3",
          frage:
            "Die Kanzlei fragt, warum du vor Projektbeginn ein Lastenheft von ihr verlangst. Erkläre den Unterschied zwischen Lastenheft und Pflichtenheft und nenne je einen typischen Inhalt.",
          punkte: 6,
          zeilen: 5,
          loesung:
            "Lastenheft: erstellt der Auftraggeber – WAS soll erreicht werden und WOFÜR (Anforderungen, Ziele, Rahmenbedingungen). Typischer Inhalt: „12 Arbeitsplätze mit Zugriff auf die Kanzleisoftware, Datensicherung täglich“. Pflichtenheft: erstellt der Auftragnehmer auf Basis des Lastenhefts – WIE und WOMIT werden die Anforderungen umgesetzt (konkrete technische Lösung). Typischer Inhalt: „Server XY mit RAID 5, Backup-Software Z mit täglicher inkrementeller Sicherung um 22 Uhr“.\nBewertung: je Definition 2 P, je Beispiel 1 P.",
        },
        {
          k: "1.4",
          frage:
            "Übertrage die Vorgänge aus Teil 1.1 in ein GANTT-Diagramm (Wochenraster reicht, Skizze). Markiere den kritischen Pfad. Woran erkennt man kritische Vorgänge im Gantt-Diagramm?",
          punkte: 4,
          zeilen: 6,
          loesung:
            "Balken je Vorgang ab FAZ mit Länge = Dauer; parallele Vorgänge untereinander. Kritische Vorgänge (A→D→E→F) liegen lückenlos hintereinander und haben KEINEN Puffer – jede Verschiebung eines kritischen Balkens verschiebt das Projektende. Nicht kritische Vorgänge (z. B. C) haben sichtbaren Spielraum bis zum spätesten Endtermin.",
        },
        {
          k: "1.5",
          frage:
            "Die Kanzleileitung formuliert als Ziel: „Die Migration soll schnell und gut klappen.“ Formuliere daraus ein SMART-Ziel und benenne die fünf SMART-Kriterien.",
          punkte: 4,
          zeilen: 5,
          loesung:
            "Beispiel: „Bis zum 30.11. sind alle 25 Arbeitsplätze auf das neue System migriert; Abnahme je Platz per Checkliste, Ausfallzeit je Arbeitsplatz unter 2 Stunden.“ – Spezifisch (was genau), Messbar (25 Plätze, Checkliste, <2 h), Attraktiv/Akzeptiert (von Beteiligten getragen), Realistisch (mit vorhandenen Ressourcen erreichbar), Terminiert (30.11.).",
        },
      ],
    },
    {
      t: "Aufgabe 2: Arbeitsplätze & Wirtschaftlichkeit (20 Punkte)",
      teile: [
        {
          k: "2.1",
          frage:
            "Für die 12 Arbeitsplätze liegen zwei Angebote für Business-PCs vor. Angebot Nord: Listenpreis je PC 950 €, 8 % Rabatt, 2 % Skonto bei Zahlung in 10 Tagen, Lieferung frei Haus. Angebot Süd: Listenpreis je PC 899 €, kein Rabatt, 3 % Skonto, zzgl. 120 € Versandkosten gesamt. Berechne die Bezugspreise beider Angebote für 12 PCs und empfiehl rechnerisch begründet.",
          punkte: 10,
          tabelle: {
            kopf: ["", "Angebot Nord", "Angebot Süd"],
            zeilen: [
              ["Listenpreis (12 Stück)", null, null],
              ["− Rabatt", null, null],
              ["= Zieleinkaufspreis", null, null],
              ["− Skonto", null, null],
              ["= Bareinkaufspreis", null, null],
              ["+ Bezugskosten", null, null],
              ["= Bezugspreis", null, null],
            ],
            check: [
              "11400|11.400|11400,00|11.400,00 €|11400 €|11.400,00",
              "10788|10.788|10788,00|10.788,00",
              "912|912,00",
              "0|0,00|kein|–|-",
              "10488|10.488|10488,00|10.488,00",
              "10788|10.788",
              "209,76|209.76",
              "323,64|323.64",
              "10278,24|10.278,24|10278.24",
              "10464,36|10.464,36|10464.36",
              "0|0,00|frei Haus|–|-",
              "120|120,00",
              "10278,24|10.278,24",
              "10584,36|10.584,36",
            ],
          },
          loesung:
            "Nord: 12 × 950 = 11.400 € − 8 % (912 €) = 10.488 € − 2 % Skonto (209,76 €) = 10.278,24 € + 0 € (frei Haus) = 10.278,24 €.\nSüd: 12 × 899 = 10.788 € − 0 = 10.788 € − 3 % Skonto (323,64 €) = 10.464,36 € + 120 € = 10.584,36 €.\nEmpfehlung: Angebot Nord, Ersparnis 306,12 €.\nBewertung: je Rechenkette 4 P, Empfehlung mit Differenz 2 P. Skonto immer NACH Rabatt, Bezugskosten NACH Skonto addieren.",
        },
        {
          k: "2.2",
          frage:
            "Die alten PCs (Anschaffung vor 4 Jahren: je 1.200 €, Nutzungsdauer 6 Jahre, lineare Abschreibung) sollen verkauft werden. Berechne den Restbuchwert je Gerät und erkläre, was ein Verkaufspreis über dem Restbuchwert buchhalterisch bedeutet.",
          punkte: 6,
          zeilen: 4,
          loesung:
            "Jährliche AfA: 1.200 / 6 = 200 €. Nach 4 Jahren: 4 × 200 = 800 € abgeschrieben → Restbuchwert 400 €. Ein Verkaufspreis über 400 € erzeugt einen außerordentlichen Ertrag (Buchgewinn) in Höhe der Differenz.\nBewertung: AfA-Betrag 2 P, Restbuchwert 2 P, Buchgewinn-Erklärung 2 P.",
        },
        {
          k: "2.3",
          frage:
            "Nenne vier ergonomische Anforderungen an die neuen Bildschirmarbeitsplätze der Sachbearbeitung.",
          punkte: 4,
          zeilen: 4,
          loesung:
            "Z. B.: höhenverstellbarer Bürostuhl mit Lordosenstütze; Bildschirmoberkante auf/knapp unter Augenhöhe, Blickabstand 50–70 cm; Bildschirm quer zum Fenster (keine Reflexionen/kein Gegenlicht); ausreichende Beleuchtung (ca. 500 Lux); ausreichend Beinfreiheit und Tischfläche; externe Tastatur/Maus. Je korrekte Anforderung 1 P (max. 4).",
        },
      ],
    },
    {
      t: "Aufgabe 3: Netzwerk (20 Punkte)",
      intro:
        "Die Kanzlei erhält das private Netz 192.168.40.0/24. Es soll in Teilnetze für Verwaltung, Steuerberater, Server und Gäste-WLAN aufgeteilt werden.",
      teile: [
        {
          k: "3.1",
          frage:
            "Teile 192.168.40.0/24 in vier gleich große Subnetze auf. Gib für die ersten beiden Subnetze jeweils Netzadresse, Broadcastadresse und die Anzahl nutzbarer Hostadressen an.",
          punkte: 8,
          tabelle: {
            kopf: ["", "Subnetz 1", "Subnetz 2"],
            zeilen: [
              ["Netzadresse", null, null],
              ["Broadcastadresse", null, null],
              ["Nutzbare Hosts", null, null],
            ],
            check: [
              "192.168.40.0|192.168.40.0/26",
              "192.168.40.64|192.168.40.64/26",
              "192.168.40.63",
              "192.168.40.127",
              "62",
              "62",
            ],
          },
          loesung:
            "4 Subnetze aus /24 → 2 zusätzliche Bits → /26, Schrittweite 64. Subnetz 1: 192.168.40.0/26, Broadcast .63. Subnetz 2: 192.168.40.64/26, Broadcast .127. Nutzbar je Subnetz: 2⁶ − 2 = 62 Hosts.\nBewertung: /26 hergeleitet 2 P, je Netz-/Broadcastadresse 1 P, Hostanzahl 2 P.",
        },
        {
          k: "3.2",
          frage:
            "Das Gäste-WLAN soll vom Kanzleinetz getrennt bleiben, obwohl beide über dieselben Switches laufen. Erkläre, mit welcher Technik das erreicht wird und wie die Trennung auf dem Switch umgesetzt ist (zwei Fachbegriffe).",
          punkte: 6,
          zeilen: 5,
          loesung:
            "VLANs (IEEE 802.1Q): logische Trennung auf denselben physischen Switches. Umsetzung: Access-Ports werden dem jeweiligen VLAN zugewiesen (z. B. VLAN 40 Kanzlei, VLAN 99 Gäste); zwischen den Switches transportiert ein Trunk-Port (Tagged Port) beide VLANs mit 802.1Q-Tags. Kommunikation zwischen den VLANs ist nur über einen Router/Layer-3-Switch möglich – für Gäste wird sie per Firewall-Regel unterbunden.\nBewertung: VLAN + Zweck 2 P, Access/untagged 1 P, Trunk/tagged 2 P, Inter-VLAN-Kontrolle 1 P.",
        },
        {
          k: "3.3",
          frage:
            "Beim Testen erreicht ein Client den Server per IP-Adresse, aber nicht über den Namen kanzlei-srv01. Benenne die wahrscheinlichste Ursache und zwei Kommandozeilenbefehle zur Diagnose.",
          punkte: 6,
          zeilen: 4,
          loesung:
            "Wahrscheinlichste Ursache: Namensauflösung defekt – falscher/fehlender DNS-Server-Eintrag am Client oder fehlender A-Eintrag für kanzlei-srv01. Diagnose: nslookup kanzlei-srv01 (prüft DNS-Auflösung und zuständigen Server), ipconfig /all (zeigt konfigurierte DNS-Server), ergänzend ping kanzlei-srv01 vs. ping IP.\nBewertung: Ursache DNS 2 P, je sinnvoller Befehl mit Zweck 2 P (max. 4).",
        },
      ],
    },
    {
      t: "Aufgabe 4: IT-Sicherheit & Datenschutz (20 Punkte)",
      intro: "Mandantendaten einer Steuerkanzlei haben hohen Schutzbedarf.",
      teile: [
        {
          k: "4.1",
          frage:
            "Ordne den drei klassischen Schutzzielen der Informationssicherheit je eine konkrete Maßnahme aus diesem Projekt zu.",
          punkte: 6,
          tabelle: {
            kopf: ["Schutzziel", "Maßnahme aus dem Projekt"],
            zeilen: [
              ["Vertraulichkeit", null],
              ["Integrität", null],
              ["Verfügbarkeit", null],
            ],
            check: [
              "verschlüsselung|zugriffsrecht|berechtigung|vlan|firewall|2fa|zwei-faktor|passwort",
              "hash|signatur|prüfsumme|checksumme|versionierung|änderungsprotokoll|protokollierung",
              "backup|raid|usv|redundan|wartungsvertrag|ersatzgerät",
            ],
          },
          loesung:
            "Vertraulichkeit: z. B. Festplattenverschlüsselung, Berechtigungskonzept, VLAN-Trennung des Gästenetzes. Integrität: z. B. Prüfsummen/Hashes bei der Datenübernahme, Änderungsprotokollierung der Kanzleisoftware. Verfügbarkeit: z. B. RAID im Server, tägliches Backup, USV. Je sinnvolle Zuordnung 2 P.",
        },
        {
          k: "4.2",
          frage:
            "Entwirf ein Datensicherungskonzept für den Kanzleiserver (ca. 400 GB Daten, Arbeitszeit Mo–Fr 7–19 Uhr): Sicherungsart(en) mit Zeitplan, Aufbewahrung nach dem Generationenprinzip und eine Maßnahme gegen Ransomware. Begründe kurz.",
          punkte: 8,
          zeilen: 7,
          loesung:
            "Beispiel: Sonntags Vollbackup (Zeitfenster ohne Betrieb), Mo–Fr inkrementell um 20 Uhr (kurzes Sicherungsfenster, wenig Speicher). Generationenprinzip: 5 Tagessicherungen (Sohn), 4 Wochensicherungen (Vater), 12 Monatssicherungen (Großvater) – Schutz auch vor spät entdeckten Fehlern/Verschlüsselung. Ransomware-Schutz: mindestens eine Kopie offline/offsite bzw. unveränderlich (Immutable/Air-Gap, 3-2-1-Regel), damit Schadsoftware die Sicherung nicht mitverschlüsseln kann. Restore-Test einplanen.\nBewertung: Sicherungsarten+Zeitplan 3 P, Generationen 2 P, Ransomware-Maßnahme 2 P, Begründung/Restore-Test 1 P.",
        },
        {
          k: "4.3",
          frage:
            "Eine Mitarbeiterin fragt, ob sie Mandantenunterlagen über ihren privaten Cloud-Speicher mit nach Hause nehmen darf. Beantworte fachlich mit zwei DSGVO-Begriffen und schlage eine zulässige Alternative vor.",
          punkte: 6,
          zeilen: 5,
          loesung:
            "Nein. Personenbezogene Daten dürfen nur mit geeigneten technischen und organisatorischen Maßnahmen (TOM, Art. 32 DSGVO) verarbeitet werden; ein privater Cloud-Dienst ohne Auftragsverarbeitungsvertrag (Art. 28 DSGVO) ist unzulässig – zudem drohen Drittlandtransfer-Probleme. Alternative: Zugriff per Firmen-VPN auf den Kanzleiserver oder ein dienstlich bereitgestellter, vertraglich geregelter Cloud-Speicher.\nBewertung: klare Ablehnung 1 P, TOM 2 P, AVV 2 P, Alternative 1 P.",
        },
      ],
    },
    {
      t: "Aufgabe 5: Betrieb & Übergabe (20 Punkte)",
      teile: [
        {
          k: "5.1",
          frage:
            "Der Server soll über eine USV abgesichert werden. Der Serverschrank benötigt 900 W Wirkleistung, der Leistungsfaktor beträgt 0,9. Berechne die erforderliche Mindest-Scheinleistung der USV in VA und erkläre, warum die USV-Angabe in VA erfolgt.",
          punkte: 6,
          zeilen: 4,
          loesung:
            "Scheinleistung S = P / cos φ = 900 W / 0,9 = 1.000 VA. USVs werden nach Scheinleistung dimensioniert, weil sie den gesamten Strom liefern müssen – also Wirk- UND Blindleistungsanteil der Netzteile; die VA-Angabe ist damit die belastungsrelevante Größe.\nBewertung: Formel 2 P, Ergebnis 2 P, Begründung 2 P.",
        },
        {
          k: "5.2",
          frage:
            "Berechne die monatlichen Stromkosten der 12 neuen PCs: je 45 W im Betrieb (8 h/Tag), je 1,5 W im Standby (16 h/Tag), 21 Arbeitstage, Strompreis 0,32 €/kWh. Runde auf zwei Nachkommastellen.",
          punkte: 8,
          zeilen: 5,
          loesung:
            "Betrieb: 12 × 45 W × 8 h × 21 = 90.720 Wh = 90,72 kWh. Standby: 12 × 1,5 W × 16 h × 21 = 6.048 Wh = 6,048 kWh. Gesamt: 96,768 kWh × 0,32 €/kWh = 30,97 € (gerundet).\nBewertung: Betriebsenergie 3 P, Standby 2 P, Summe+Preis 2 P, Rundung/Einheiten 1 P. Wh→kWh-Umrechnung ist die klassische Fehlerquelle.",
        },
        {
          k: "5.3",
          frage: "Nenne drei Bestandteile einer vollständigen Projektübergabe an die Kanzlei.",
          punkte: 6,
          zeilen: 4,
          loesung:
            "Z. B.: Abnahmeprotokoll mit Unterschrift des Auftraggebers; Systemdokumentation (Netzplan, IP-Konzept, Zugangsdaten-Übergabe, Lizenz-/Garantieunterlagen); Einweisung/Schulung der Mitarbeitenden inkl. Ansprechpartner und Supportweg; Wiederanlaufplan/Backup-Dokumentation. Je Bestandteil 2 P (max. 6).",
        },
      ],
    },
  ],
};
