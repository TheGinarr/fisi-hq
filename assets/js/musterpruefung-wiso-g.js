window.MP_WISOG = {
  kurz: "WiSo (G)",
  titel: "Musterprüfung – Wirtschafts- und Sozialkunde (WiSo) – Variante G",
  untertitel:
    "60 Minuten · 100 Punkte · 25 gebundene Aufgaben (je genau eine richtige Antwort) · Schwerpunkt Kalkulation, Entgelt, Recht & Beschaffung",
  zeit: 60,
  situation:
    "Du bist Auszubildende/r im dritten Ausbildungsjahr bei der Silberweide Systems GmbH, einem Systemhaus mit 60 Mitarbeitenden, das neben Managed Services auch Spezialhardware in Kleinserie fertigt. Beantworte die gebundenen Aufgaben – je Aufgabe ist genau eine Antwort richtig, es gibt keine Minuspunkte.",
  aufgaben: [
    {
      t: "Aufgabe 1: Kalkulation & Kostenrechnung (20 Punkte)",
      teile: [
        {
          k: "1.1",
          frage:
            "Materialeinzelkosten 500 €, Materialgemeinkostenzuschlag 10 %. Wie hoch sind die Materialkosten?",
          punkte: 4,
          optionen: ["505,00 €", "510,00 €", "550,00 €", "555,00 €", "600,00 €"],
          richtig: 2,
          loesung:
            "MK = MEK + MGK = 500 + 10 % = 550 €. Der Zuschlag deckt Lager und Einkauf ab und stammt aus dem BAB.",
        },
        {
          k: "1.2",
          frage:
            "Materialkosten 550 €, Fertigungseinzelkosten 250 €, Fertigungsgemeinkostenzuschlag 140 %. Wie hoch sind die Herstellkosten?",
          punkte: 4,
          optionen: ["800,00 €", "900,00 €", "1.050,00 €", "1.150,00 €", "1.400,00 €"],
          richtig: 3,
          loesung:
            "FK = 250 + 140 % = 250 × 2,4 = 600 €. HK = MK + FK = 550 + 600 = 1.150 €. Fertigungszuschläge über 100 % sind bei maschinenintensiver Fertigung normal.",
        },
        {
          k: "1.3",
          frage:
            "Herstellkosten 2.000 €, Verwaltungsgemeinkosten 9 %, Vertriebsgemeinkosten 6 % (jeweils auf HK). Die Selbstkosten betragen:",
          punkte: 4,
          optionen: ["2.150,00 €", "2.180,00 €", "2.300,00 €", "2.360,00 €", "2.540,00 €"],
          richtig: 2,
          loesung:
            "SK = HK × (1 + 0,09 + 0,06) = 2.000 × 1,15 = 2.300 €. Beide Zuschläge haben dieselbe Basis (HK) und werden addiert.",
        },
        {
          k: "1.4",
          frage:
            "Der Barverkaufspreis beträgt 1.940 €. Der Kunde soll 3 % Skonto ziehen können. Welcher Zielverkaufspreis ist anzusetzen?",
          punkte: 4,
          optionen: ["1.998,20 €", "2.000,00 €", "2.036,17 €", "1.881,80 €", "2.058,20 €"],
          richtig: 1,
          loesung:
            "Im Hundert: 1.940 × 100 ÷ 97 = 2.000 €. Probe: 2.000 − 3 % = 1.940 € ✓. Einfaches Aufschlagen (1.940 × 1,03 = 1.998,20) wäre falsch, weil Skonto vom Zielpreis berechnet wird.",
        },
        {
          k: "1.5",
          frage:
            "Eine Maschine verursacht jährlich: AfA 12.000 €, kalkulatorische Zinsen 1.500 €, Raum/Energie/Instandhaltung 6.500 €. Sie läuft 1.600 Stunden pro Jahr. Der Maschinenstundensatz beträgt:",
          punkte: 4,
          optionen: ["7,50 €/h", "8,44 €/h", "10,00 €/h", "12,50 €/h", "20,00 €/h"],
          richtig: 3,
          loesung: "MSS = (12.000 + 1.500 + 6.500) ÷ 1.600 = 20.000 ÷ 1.600 = 12,50 €/h.",
        },
      ],
    },
    {
      t: "Aufgabe 2: Entgelt & Steuern (20 Punkte)",
      teile: [
        {
          k: "2.1",
          frage:
            "Bruttogehalt 3.000 €, Rentenversicherungssatz 18,6 % (gesamt). Wie hoch ist der Arbeitnehmeranteil zur RV?",
          punkte: 4,
          optionen: ["558,00 €", "279,00 €", "186,00 €", "139,50 €", "93,00 €"],
          richtig: 1,
          loesung:
            "Paritätische Finanzierung: AN zahlt die Hälfte von 18,6 % = 9,3 % → 3.000 × 0,093 = 279 €.",
        },
        {
          k: "2.2",
          frage:
            "Brutto 2.400 €, Lohnsteuer 220 €, Sozialversicherungs-AN-Anteile zusammen 20,5 %. Das Nettoentgelt beträgt:",
          punkte: 4,
          optionen: ["1.688,00 €", "1.733,20 €", "1.908,00 €", "2.180,00 €", "1.492,00 €"],
          richtig: 0,
          loesung:
            "SV = 2.400 × 0,205 = 492 €. Netto = 2.400 − 220 − 492 = 1.688 €. Steuern und SV werden beide parallel vom Brutto berechnet.",
        },
        {
          k: "2.3",
          frage:
            "Ein Systemhaus verkauft im Monat für 30.000 € netto (19 % USt) und kauft für 17.000 € netto (19 % USt) ein. Die Umsatzsteuer-Zahllast beträgt:",
          punkte: 4,
          optionen: ["5.700,00 €", "3.230,00 €", "8.930,00 €", "2.470,00 €", "1.300,00 €"],
          richtig: 3,
          loesung:
            "Vereinnahmte USt 5.700 € − Vorsteuer 3.230 € = 2.470 € Zahllast (= 19 % auf den Mehrwert von 13.000 €).",
        },
        {
          k: "2.4",
          frage: "Welche der folgenden Steuern ist eine INDIREKTE Steuer?",
          punkte: 4,
          optionen: [
            "Einkommensteuer",
            "Gewerbesteuer",
            "Körperschaftsteuer",
            "Lohnsteuer",
            "Umsatzsteuer",
          ],
          richtig: 4,
          loesung:
            "Bei der USt fallen Steuerzahler (Unternehmen) und Steuerträger (Endverbraucher) auseinander – das Kennzeichen indirekter Steuern. Die übrigen vier sind direkte Steuern.",
        },
        {
          k: "2.5",
          frage:
            "Ein Mitarbeiter kostet den Betrieb deutlich mehr als sein Bruttogehalt. Bei 2.400 € brutto liegen die Arbeitgeber-Gesamtkosten (ohne Umlagen gerechnet mit ca. 21 % AG-Anteilen) am nächsten bei:",
          punkte: 4,
          optionen: ["2.400 €", "2.520 €", "2.904 €", "3.360 €", "4.800 €"],
          richtig: 2,
          loesung:
            "2.400 × 1,21 ≈ 2.904 €. Die AG-Anteile zur Sozialversicherung erscheinen nicht auf der Lohnabrechnung, gehören aber in jede Personalkosten-Kalkulation.",
        },
      ],
    },
    {
      t: "Aufgabe 3: Recht im Geschäftsverkehr (20 Punkte)",
      teile: [
        {
          k: "3.1",
          frage:
            "In welcher Abteilung des Handelsregisters ist die Silberweide Systems GmbH eingetragen?",
          punkte: 4,
          optionen: [
            "HRA",
            "HRB",
            "HRC",
            "Im Gewerberegister der Gemeinde",
            "Gar nicht – GmbHs sind nicht eintragungspflichtig",
          ],
          richtig: 1,
          loesung:
            "HRB = Kapitalgesellschaften (GmbH, UG, AG). HRA = Einzelkaufleute und Personengesellschaften. Die GmbH ist Formkaufmann kraft Rechtsform.",
        },
        {
          k: "3.2",
          frage:
            "Der Betrieb erhält 30 Access Points geliefert und lagert sie ungeöffnet ein. Nach sechs Wochen fallen beim Auspacken Transportschäden auf. Welche Rechtslage gilt im B2B-Kauf?",
          punkte: 4,
          optionen: [
            "Die Gewährleistung von zwei Jahren gilt uneingeschränkt.",
            "Der Lieferant muss binnen 14 Tagen kostenlos ersetzen.",
            "Die Rügefrist des § 377 HGB ist versäumt – die Ware gilt als genehmigt.",
            "Der Spediteur haftet automatisch für alle Schäden.",
            "Der Kaufvertrag ist rückwirkend nichtig.",
          ],
          richtig: 2,
          loesung:
            "Unter Kaufleuten gilt die Untersuchungs- und Rügepflicht: Offensichtliche Mängel müssen unverzüglich nach Lieferung gerügt werden. Wareneingangsprüfung ist deshalb Pflichtprozess.",
        },
        {
          k: "3.3",
          frage: "Wann werden AGB Bestandteil eines Vertrags mit einem Verbraucher?",
          punkte: 4,
          optionen: [
            "Sobald sie irgendwo auf der Website des Anbieters stehen.",
            "Nur wenn der Verbraucher sie unterschrieben zurücksendet.",
            "Automatisch nach Ablauf von 14 Tagen.",
            "Bei Hinweis vor Vertragsschluss und zumutbarer Möglichkeit der Kenntnisnahme.",
            "AGB gelten gegenüber Verbrauchern grundsätzlich nicht.",
          ],
          richtig: 3,
          loesung:
            "Einbeziehung nach § 305 BGB: Hinweis + Möglichkeit der Kenntnisnahme + Einverständnis. Überraschende Klauseln werden nie Vertragsbestandteil, unangemessene kippt die Inhaltskontrolle.",
        },
        {
          k: "3.4",
          frage:
            "Ein Verbraucher bestellt im Onlineshop ein Notebook und widerruft nach 10 Tagen ohne Angabe von Gründen. Der Shop verweigert die Rücknahme. Wer hat Recht?",
          punkte: 4,
          optionen: [
            "Der Shop – Widerruf braucht immer einen wichtigen Grund.",
            "Der Shop – bei Elektronikartikeln ist der Widerruf ausgeschlossen.",
            "Der Verbraucher – aber nur gegen 25 % Wertminderungspauschale.",
            "Der Shop – die Frist beträgt nur 7 Tage.",
            "Der Verbraucher – im Fernabsatz gilt ein 14-tägiges Widerrufsrecht ohne Begründung.",
          ],
          richtig: 4,
          loesung:
            "Fernabsatz: 14 Tage ab Warenerhalt, grundlos. Ausnahmen wären u. a. individuell angefertigte Ware oder entsiegelte Datenträger – ein Standard-Notebook fällt nicht darunter.",
        },
        {
          k: "3.5",
          frage:
            "Ein Kleingewerbetreibender lässt sich freiwillig ins Handelsregister eintragen. Er wird damit zum:",
          punkte: 4,
          optionen: [
            "Formkaufmann",
            "Istkaufmann",
            "Kannkaufmann",
            "Scheinkaufmann",
            "Minderkaufmann",
          ],
          richtig: 2,
          loesung:
            "Kannkaufmann: freiwillige Eintragung macht ihn zum Kaufmann mit allen Rechten und Pflichten des HGB. Istkaufmann = Handelsgewerbe kraft Umfang, Formkaufmann = kraft Rechtsform (GmbH/AG).",
        },
      ],
    },
    {
      t: "Aufgabe 4: Beschaffung & Lager (20 Punkte)",
      teile: [
        {
          k: "4.1",
          frage: "Nach welchem Kriterium teilt die ABC-Analyse das Sortiment ein?",
          punkte: 4,
          optionen: [
            "Nach dem Jahresverbrauchswert (Menge × Preis)",
            "Nach der alphabetischen Reihenfolge",
            "Nach dem Lagerort",
            "Nach der Lieferantenanzahl",
            "Nach dem Gewicht der Artikel",
          ],
          richtig: 0,
          loesung:
            "A-Artikel: wenige Positionen, hoher Wertanteil → intensiv steuern. C-Artikel: viele Positionen, geringer Wert → einfach steuern (Sammelbestellung).",
        },
        {
          k: "4.2",
          frage:
            "Tagesverbrauch 8 Stück, Lieferzeit 5 Tage, Sicherheitsbestand 30 Stück. Der Meldebestand beträgt:",
          punkte: 4,
          optionen: ["40 Stück", "43 Stück", "35 Stück", "70 Stück", "120 Stück"],
          richtig: 3,
          loesung:
            "Meldebestand = 8 × 5 + 30 = 70. Bei diesem Bestand muss bestellt werden, damit der Sicherheitsbestand bei Ankunft unangetastet ist.",
        },
        {
          k: "4.3",
          frage:
            "Jahresbedarf 2.000 Stück, Bestellkosten 40 € je Bestellung, Einstandspreis 50 €, Lagerhaltungskostensatz 16 %. Die optimale Bestellmenge (Andler) liegt am nächsten bei:",
          punkte: 4,
          optionen: ["100 Stück", "120 Stück", "141 Stück", "200 Stück", "283 Stück"],
          richtig: 2,
          loesung: "q = √(2 × 2.000 × 40 ÷ (50 × 0,16)) = √(160.000 ÷ 8) = √20.000 ≈ 141 Stück.",
        },
        {
          k: "4.4",
          frage:
            "Jahresverbrauch 1.200 Stück, durchschnittlicher Lagerbestand 150 Stück. Die durchschnittliche Lagerdauer beträgt (360 Tage):",
          punkte: 4,
          optionen: ["8 Tage", "30 Tage", "45 Tage", "60 Tage", "90 Tage"],
          richtig: 2,
          loesung:
            "Umschlagshäufigkeit = 1.200 ÷ 150 = 8. Lagerdauer = 360 ÷ 8 = 45 Tage. Hohe UH bedeutet wenig gebundenes Kapital.",
        },
        {
          k: "4.5",
          frage: "Welche Aussage über den Sicherheitsbestand ist richtig?",
          punkte: 4,
          optionen: [
            "Er wird bei jeder Bestellung mitverbraucht und neu aufgebaut.",
            "Er puffert Lieferverzug und Mehrverbrauch und wird planmäßig nicht angetastet.",
            "Er entspricht immer genau einer Wochenlieferung.",
            "Er ist gesetzlich auf 10 % des Jahresbedarfs festgelegt.",
            "Er senkt die Kapitalbindung im Lager.",
          ],
          richtig: 1,
          loesung:
            "Der eiserne Bestand ist die Reserve für Störungen – er erhöht die Kapitalbindung bewusst zugunsten der Liefersicherheit.",
        },
      ],
    },
    {
      t: "Aufgabe 5: QM, Markt & Volkswirtschaft (20 Punkte)",
      teile: [
        {
          k: "5.1",
          frage: "In welcher Reihenfolge laufen die Phasen des PDCA-Zyklus ab?",
          punkte: 4,
          optionen: [
            "Plan – Do – Check – Act",
            "Plan – Act – Check – Do",
            "Check – Plan – Do – Act",
            "Do – Plan – Act – Check",
            "Act – Do – Plan – Check",
          ],
          richtig: 0,
          loesung:
            "Planen, umsetzen, Wirkung MESSEN, standardisieren – und der Kreis dreht sich weiter (KVP).",
        },
        {
          k: "5.2",
          frage:
            "Der Servicedesk will die Fehlerursachen finden, die die meisten Tickets verursachen, und sortiert sie nach Häufigkeit mit Summenkurve. Welches Werkzeug ist das?",
          punkte: 4,
          optionen: [
            "Ishikawa-Diagramm",
            "Gantt-Diagramm",
            "KV-Diagramm",
            "Pareto-Diagramm",
            "Netzplan",
          ],
          richtig: 3,
          loesung:
            "Pareto: ~20 % der Ursachen erzeugen ~80 % der Wirkung – die Summenkurve zeigt, welche Top-Ursachen sich zuerst lohnen. Ishikawa sammelt Ursachen, priorisiert sie aber nicht.",
        },
        {
          k: "5.3",
          frage:
            "Eine Preiserhöhung um 5 % lässt die Absatzmenge um 15 % sinken. Die Preiselastizität der Nachfrage beträgt (Betrag):",
          punkte: 4,
          optionen: ["0,33", "1,0", "5,0", "15,0", "3,0"],
          richtig: 4,
          loesung:
            "15 ÷ 5 = 3 → deutlich elastisch. Preiserhöhungen senken hier den Umsatz, weil die Menge überproportional einbricht.",
        },
        {
          k: "5.4",
          frage: "Welche Rolle spielen Banken im erweiterten Wirtschaftskreislauf?",
          punkte: 4,
          optionen: [
            "Sie erheben die Umsatzsteuer für den Staat.",
            "Sie leiten Ersparnisse der Haushalte als Kredite an investierende Unternehmen weiter.",
            "Sie legen die Preise auf den Gütermärkten fest.",
            "Sie zahlen Transferleistungen wie Kindergeld aus.",
            "Sie exportieren Güter ins Ausland.",
          ],
          richtig: 1,
          loesung:
            "Sparen → Bank → Kredit → Investition: Banken schließen den Kreislauf zwischen Sparern und Investoren. Transfers zahlt der Staat, Preise bildet der Markt.",
        },
        {
          k: "5.5",
          frage:
            "Das nominale BIP beträgt 3.150 Mrd. €, das reale BIP 3.000 Mrd. €. Der BIP-Deflator beträgt:",
          punkte: 4,
          optionen: ["95,2", "103,0", "105,0", "115,0", "150,0"],
          richtig: 2,
          loesung:
            "Deflator = nominal ÷ real × 100 = 3.150 ÷ 3.000 × 100 = 105 → das Preisniveau liegt 5 % über dem Basisjahr.",
        },
      ],
    },
  ],
};
