window.LF_CONTENT = window.LF_CONTENT || {};
window.LF_CONTENT["lf12a"] = {
  topics: [
    {
      id: "lf12-proj",
      title: "Projektabwicklung & Kundenlösung",
      lessons: [
        {
          id: "lf12-pr-1",
          title: "Kundenberatung & Lösungsdesign",
          content: [
            { type: "heading", value: "Anforderungsanalyse" },
            {
              type: "text",
              value:
                "Ist-Analyse: Aktuelle Infrastruktur dokumentieren (Netzplan, Serverliste, Dienste, Schwachstellen). Soll-Konzept: Gewünschter Zustand (Performance, Sicherheit, Skalierbarkeit). Gap-Analyse: Was muss sich ändern? Machbarkeitsstudie: Technisch, wirtschaftlich und organisatorisch machbar?",
            },
            { type: "heading", value: "Kosten-Nutzen-Analyse" },
            {
              type: "text",
              value:
                "TCO (Total Cost of Ownership): Gesamtkosten über die Nutzungsdauer (Anschaffung + Betrieb + Wartung + Schulung + Entsorgung). ROI (Return on Investment): (Gewinn − Investition) / Investition × 100%. Amortisationsdauer: Ab wann hat sich die Investition bezahlt gemacht?",
            },
            { type: "heading", value: "Migrationsstrategie" },
            {
              type: "text",
              value:
                "Big Bang: Alles auf einmal umstellen. Schnell, aber hohes Risiko. Parallel: Alt- und Neusystem parallel betreiben, schrittweise umstellen. Sicher, aber teuer. Pilot: Erst eine Abteilung/Standort, dann ausrollen. Guter Kompromiss. Rollback-Plan: Immer einen Plan B haben!",
            },
            { type: "heading", value: "Übungsaufgabe: TCO-Vergleich" },
            {
              type: "text",
              value:
                "TCO über 3 Jahre: A = 6.000€ + 500€/Jahr. B = 3.000€ + 1.800€/Jahr. Welche ist günstiger?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nLösung A: 6.000 + 3x500  = 7.500€\nLösung B: 3.000 + 3x1.800 = 8.400€\n\n-> Lösung A günstiger über 3 Jahre (7.500€)\n\nTrotz höherer Anschaffung gewinnt A durch niedrigere\nBetriebskosten. TCO = Gesamtkosten über Lebensdauer,\nnicht nur Anschaffung.\nBreak-Even: 6000+500x < 3000+1800x -> x > 2,3 Jahre.",
            },
            { type: "heading", value: "Übungsaufgabe 2: TCO-Berechnung" },
            {
              type: "text",
              value:
                "On-Premise (5.000 EUR + 200/Monat) vs. Cloud (450/Monat). TCO über 3 und 5 Jahre.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nOn-Prem 3J: 5.000+7.200=12.200. 5J: 5.000+12.000=17.000.\nCloud 3J: 16.200. 5J: 27.000 (450 × 60).\nOn-Prem 3J 4.000 günstiger, 5J 10.000 günstiger.\nBreak-Even: 5.000/250=20 Monate. Aber: Strom, Raum, Admin-Aufwand, HW-Ersatz berücksichtigen!",
            },
            { type: "heading", value: "Beispiel 1: Amortisationsrechnung Serverkonsolidierung" },
            {
              type: "text",
              value:
                "Investition: 2 Virtualisierungshosts + Lizenzen + Dienstleistung = 18.000 €. Jährliche Einsparung: Strom 2.400 € + entfallene Wartungsverträge 3.600 € + vermiedene Ersatzbeschaffung (anteilig) 2.000 € = 8.000 €/Jahr. Amortisationszeit: 18.000 € ÷ 8.000 €/Jahr = 2,25 Jahre. Bei 5 Jahren geplanter Nutzung klar wirtschaftlich – so argumentiert man in der AP2-Doku und beim Kunden.",
            },
            { type: "heading", value: "Beispiel 2: Nutzwertanalyse zweier Angebote" },
            {
              type: "code",
              value:
                "Kriterium        Gewicht  Anbieter A  Anbieter B\nPreis              30 %    8 (2,4)     6 (1,8)\nSupport/SLA        25 %    5 (1,25)    9 (2,25)\nErweiterbarkeit    20 %    7 (1,4)     8 (1,6)\nReferenzen         15 %    6 (0,9)     8 (1,2)\nLieferzeit         10 %    9 (0,9)     5 (0,5)\n----------------------------------------------\nNutzwert                   6,85        7,35  <- B gewinnt\nPunkte 1-10, in Klammern: Punkte x Gewicht",
            },
          ],
          quiz: [
            {
              id: "imp_lf12-pr-1_0",
              q: "TCO beinhaltet?",
              options: [
                "Nur Betriebskosten",
                "Nur Hardware",
                "Nur Anschaffung",
                "Alle Kosten über Nutzungsdauer",
              ],
              correct: 3,
              explain:
                "TCO = Total Cost of Ownership = alle Kosten von Anschaffung bis Entsorgung.",
            },
            {
              id: "imp_lf12-pr-1_1",
              q: "Pilotmigration bedeutet?",
              options: [
                "Alles auf einmal",
                "Erst eine Abteilung, dann ausrollen",
                "Nur Dokumentation",
                "Nur testen ohne Umsetzung",
              ],
              correct: 1,
              explain: "Pilot = erst kleiner Bereich, bei Erfolg auf alle ausrollen.",
            },
            {
              id: "imp_lf12-pr-1_2",
              q: "TCO = ?",
              options: [
                "Total Customer Output",
                "Total Cost of Ownership",
                "Temporary Cost Overview",
                "Technical Configuration Order",
              ],
              correct: 1,
              explain:
                "Gesamtkosten über Lebensdauer. TCO: Anschaffung + Betrieb + Wartung + Entsorgung über die gesamte Nutzungsdauer.",
            },
            {
              id: "imp_lf12-pr-1_3",
              q: "ROI Formel?",
              options: [
                "Kosten / Umsatz",
                "Umsatz/Kosten",
                "(Gewinn - Investition) / Investition x 100%",
                "Gewinn x Kosten",
              ],
              correct: 2,
              explain: "ROI = (Gewinn - Investition) / Investition x 100%.",
            },
            {
              id: "imp_lf12-pr-1_4",
              q: "Machbarkeitsstudie?",
              options: [
                "Analyse der Marketingkanäle, über die das fertige Produkt später beworben werden soll",
                "Abschließender Testbericht, der nach der Implementierung alle Testfälle dokumentiert",
                "Verbindlicher Kostenvoranschlag des Auftragnehmers über den Endpreis des Projekts",
                "Prüfung ob Projekt technisch, wirtschaftlich und organisatorisch umsetzbar",
              ],
              correct: 3,
              explain: "Technische + wirtschaftliche + organisatorische Machbarkeit bewerten.",
            },
            {
              id: "imp_lf12-pr-1_5",
              q: "TCO vs. Anschaffungspreis?",
              options: [
                "TCO = Anschaffung + Betrieb + Wartung + Entsorgung",
                "TCO liegt stets unter dem reinen Anschaffungspreis",
                "Der Anschaffungspreis ist immer höher als die TCO",
                "Beide Begriffe bezeichnen denselben Gesamtbetrag",
              ],
              correct: 0,
              explain: "TCO berücksichtigt die GESAMTEN Kosten über die Lebensdauer.",
            },
            {
              id: "imp_lf12-pr-1_6",
              q: "PoC?",
              options: ["Vertrag", "Fertig", "Machbarkeitsnachweis", "Marketing"],
              correct: 2,
              explain: "Kleiner Test.",
            },
            {
              id: "imp_lf12-pr-1_7",
              q: "Migration?",
              options: ["Big Bang oder schrittweise", "Alles sofort", "Nur parallel", "Nie"],
              correct: 0,
              explain: "Zwei Strategien.",
            },
            {
              id: "imp_lf12-pr-1_8",
              q: "Schulung im Angebot?",
              options: ["Nur groß", "Optional", "Wichtig für Projekterfolg", "Unnötig"],
              correct: 2,
              explain: "Einplanen.",
            },
            {
              id: "imp_lf12-pr-1_9",
              q: "SLA Wartungsvertrag?",
              options: [
                "Optional",
                "Reaktions-/Lösungszeit, Verfügbarkeit",
                "Nur Preis",
                "Nur Cloud",
              ],
              correct: 1,
              explain: "Klare Level definieren.",
            },
            {
              id: "imp_lf12-pr-1_10",
              q: "Wer erstellt das Lastenheft und was beschreibt es?",
              options: [
                "Die IHK – die Prüfungsregeln",
                "Niemand, es entsteht automatisch",
                "Der Auftragnehmer – die technische Umsetzung",
                "Der Auftraggeber – die Gesamtheit seiner Anforderungen (WAS)",
              ],
              correct: 3,
              explain:
                "Das Lastenheft formuliert das WAS aus Kundensicht; das Pflichtenheft des Auftragnehmers beschreibt das WIE der Umsetzung.",
            },
            {
              id: "imp_lf12-pr-1_11",
              q: "Welche Kosten gehören in eine TCO-Betrachtung über die Anschaffung hinaus?",
              options: [
                "Nur die Versand- und Verpackungskosten der ersten Lieferung",
                "Betrieb, Wartung, Strom, Schulung, Support und Entsorgung über die Nutzungsdauer",
                "Ausschließlich die Software-Lizenzkosten des ersten Betriebsjahres",
                "Nur der reine Kaufpreis der Hardware zum Anschaffungszeitpunkt",
              ],
              correct: 1,
              explain:
                "Total Cost of Ownership verhindert die 'Billig gekauft, teuer betrieben'-Falle – entscheidend bei Server-, Cloud- und Druckervergleichen.",
            },
            {
              id: "imp_lf12-pr-1_12",
              q: "Wie berechnet sich die Amortisationszeit einer Investition?",
              options: [
                "Sie lässt sich rechnerisch nicht ermitteln, sondern nur schätzen",
                "Jährliche Einsparung multipliziert mit den Investitionskosten",
                "Investitionskosten plus jährliche Einsparung, summiert über die Laufzeit",
                "Investitionskosten geteilt durch jährliche Einsparung bzw. jährlichen Rückfluss",
              ],
              correct: 3,
              explain:
                "Beispiel: 12.000 € Investition, 4.000 € Einsparung pro Jahr → 3 Jahre. Liegt das unter der geplanten Nutzungsdauer, lohnt die Investition.",
            },
            {
              id: "imp_lf12-pr-1_13",
              q: "Wozu dient eine Nutzwertanalyse beim Angebotsvergleich?",
              options: [
                "Sie prüft die formale Korrektheit und Rechtschreibung der eingereichten Angebotsunterlagen",
                "Sie ermittelt ausschließlich das Angebot mit dem niedrigsten Preis, andere Kriterien bleiben außen vor",
                "Sie ersetzt die anschließende Vertragsverhandlung, da ihr Ergebnis rechtlich bindend ist",
                "Qualitative Kriterien werden gewichtet und bewertet, um Angebote objektiv vergleichbar zu machen",
              ],
              correct: 3,
              explain:
                "Kriterien (Support, Erweiterbarkeit, Referenzen …) erhalten Gewichte; Punkte × Gewicht ergeben den Nutzwert – Preis und Qualität fließen gemeinsam ein.",
            },
            {
              id: "imp_lf12-pr-1_14",
              q: "Was kennzeichnet die Big-Bang-Migration?",
              options: [
                "Alt- und Neusystem laufen über mehrere Jahre dauerhaft parallel weiter",
                "Auf eine Migration wird verzichtet, das Altsystem bleibt bestehen",
                "Das Altsystem wird zu einem Stichtag komplett durch das neue ersetzt",
                "Pro Jahr wechselt jeweils nur eine einzelne Abteilung auf das neue System",
              ],
              correct: 2,
              explain:
                "Vorteil: kurz und ohne Doppelbetrieb. Risiko: Scheitert der Stichtag, steht alles – deshalb Fallback-Plan und intensiver Test vorab.",
            },
            {
              id: "imp_lf12-pr-1_15",
              q: "Welchen Vorteil bietet die Parallelmigration gegenüber dem Big Bang?",
              options: [
                "Sie ist in jedem Fall die günstigste Migrationsform",
                "Sie ist bei Systemwechseln gesetzlich vorgeschrieben",
                "Sie kommt vollständig ohne Tests und Abnahmen aus",
                "Alt- und Neusystem laufen übergangsweise gleichzeitig",
              ],
              correct: 3,
              explain:
                "Ergebnisse sind vergleichbar, Rückfall jederzeit möglich. Der doppelte Betrieb kostet Aufwand (Doppelerfassung!), minimiert aber das Risiko – typisch bei Lohnabrechnung oder Buchhaltung.",
            },
            {
              id: "imp_lf12-pr-1_16",
              q: "Was wird bei einer Make-or-Buy-Entscheidung abgewogen?",
              options: [
                "Ob Mitarbeiter im Homeoffice oder im Büro arbeiten sollen (Arbeitsplatzmodell)",
                "Ob Hardware gemietet oder Büromöbel gekauft werden sollen (Beschaffungsform)",
                "Welche Farbe das Logo bekommt",
                "Eigenleistung (selbst entwickeln/betreiben) gegen Fremdbezug (kaufen/auslagern)",
              ],
              correct: 3,
              explain:
                "Kriterien: Kosten, Know-how, Kapazität, strategische Bedeutung, Abhängigkeit – z. B. eigene Serverlandschaft gegen Managed Service.",
            },
            {
              id: "imp_lf12-pr-1_17",
              q: "Warum steht die Ist-Analyse am Anfang eines Kundenprojekts?",
              options: [
                "Sie ist eine reine Formsache für die Projektablage und hat keinen Einfluss auf das weitere Vorgehen",
                "Sie ersetzt das kaufmännische Angebot, sodass keine Kalkulation mehr erforderlich ist",
                "Sie wird erst nach Abschluss der Umsetzung erstellt, um das Ergebnis zu dokumentieren",
                "Ohne dokumentierten Ausgangszustand lassen sich Soll-Konzept, Aufwand und Erfolg nicht seriös bestimmen",
              ],
              correct: 3,
              explain:
                "Ist-Aufnahme (Inventar, Prozesse, Schwachstellen) → Soll-Konzept → Lösungsvarianten: die Grundkette jeder AP2-Projektarbeit.",
            },
            {
              id: "imp_lf12-pr-1_18",
              q: "Was gehört in einen seriösen Angebotsvergleich neben dem Preis?",
              options: [
                "Die Entfernung zum Anbieter in Kilometern als einziges Kriterium",
                "Nur die Schriftart und das optische Layout des Angebotsdokuments als Entscheidungsbasis",
                "Ausschließlich das Gründungsjahr des Anbieters als alleiniges Entscheidungskriterium",
                "Lieferzeit, Service-/SLA-Bedingungen, Garantie, Referenzen, Folgekosten und Skonto/Rabatte",
              ],
              correct: 3,
              explain:
                "Der Bezugspreis wird rechnerisch verglichen (Listenpreis − Rabatt − Skonto + Versand); qualitative Faktoren ergänzt die Nutzwertanalyse.",
            },
            {
              id: "imp_lf12-pr-1_19",
              q: "Ein Kunde will 'irgendwas mit Cloud'. Was ist der fachlich richtige erste Schritt?",
              options: [
                "Die Anfrage zurückstellen, bis der Kunde von sich aus konkrete technische Vorgaben nachliefert",
                "Dem Kunden direkt die leistungsstärkste und teuerste Enterprise-Lösung des Portfolios anbieten",
                "Anforderungen strukturiert aufnehmen: Ziele, Workloads, Datenschutz, Budget, Abhängigkeiten",
                "Sofort den erstbesten Cloud-Vertrag abschließen, um dem Kunden schnelle Handlungsfähigkeit zu zeigen",
              ],
              correct: 2,
              explain:
                "Erst dann Lösungen vorschlagen. Beratungskompetenz heißt: erst verstehen, dann empfehlen. Unklare Anforderungen sind die häufigste Ursache gescheiterter IT-Projekte.",
            },
          ],
        },
        {
          id: "lf12-pr-2",
          title: "Dokumentation & Übergabe",
          content: [
            { type: "heading", value: "Projektdokumentation für AP2" },
            {
              type: "text",
              value:
                "Max. 15 Seiten + Anhänge. Aufbau: Deckblatt, Inhaltsverzeichnis, Projektumfeld, Ist-Analyse, Soll-Konzept, Projektplanung (PSP, Zeitplan, Ressourcen, Kosten), Durchführung, Qualitätssicherung/Tests, Übergabe/Einweisung, Fazit/Ausblick. Anhänge: Netzpläne, Konfigurationen, Screenshots, Testprotokolle, Pflichtenheft.",
            },
            { type: "heading", value: "Übergabe an den Kunden" },
            {
              type: "text",
              value:
                "Abnahmeprotokoll: Kunde bestätigt, dass Anforderungen erfüllt sind. Einweisung: Administratoren und Endbenutzer schulen. Betriebshandbuch: Tägliche Aufgaben, Notfallprozeduren, Kontaktdaten. Wartungsvertrag: Regelmäßige Updates, Monitoring, Support-Level.",
            },
            {
              type: "note",
              value:
                "Die Dokumentation ist der Schlüssel zur guten AP2-Note – inhaltlich und formal.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Projektdokumentation" },
            {
              type: "text",
              value:
                "Bestandteile einer IT-Projektdokumentation für die Übergabe. Gliederung erstellen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. Projektübersicht (Auftraggeber, Ziel, Ist/Soll)\n2. Technische Doku (Netzwerkplan, IP-Konzept, Konfigurationen)\n3. Betriebshandbuch (Prozeduren, Ansprechpartner, Known Issues)\n4. Testprotokoll (Tests, Ergebnisse, Abnahmekriterien)\n5. Übergabeprotokoll (Datum, Teilnehmer, Unterschriften)\n6. Wartungsvertrag/SLA",
            },
            { type: "heading", value: "Übungsaufgabe 2: Übergabegespräch" },
            { type: "text", value: "Struktur eines Übergabegesprächs nach Projektabschluss." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. Begrüßung + Agenda (5 Min)\n2. Projekt-Rückblick (10 Min)\n3. Live-Demo (15 Min)\n4. Einweisung + Doku-Übergabe (15 Min)\n5. Offene Punkte + Abnahme unterschreiben (10 Min)\n6. Follow-Up-Termin vereinbaren",
            },
            { type: "heading", value: "Beispiel 1: Gliederung einer AP2-Projektdokumentation" },
            {
              type: "list",
              value: [
                "1. Einleitung: Projektumfeld, Ausgangssituation, Projektziel",
                "2. Ist-Analyse: aktuelle Infrastruktur, Schwachstellen",
                "3. Soll-Konzept: Anforderungen, Lösungsvarianten mit Entscheidung (Nutzwertanalyse)",
                "4. Planung: Projektphasen, Zeitplan (Gantt), Kostenplan, Risiken",
                "5. Durchführung: Umsetzung mit Begründung der Entscheidungen, Abweichungen",
                "6. Qualitätssicherung: Tests, Abnahme",
                "7. Soll-Ist-Vergleich und Fazit (inkl. Wirtschaftlichkeit, Lessons Learned)",
                "Anhang: Netzplan, Konfigurationsauszüge, Abnahmeprotokoll, Glossar",
              ],
            },
            { type: "heading", value: "Beispiel 2: Inhalt eines Abnahmeprotokolls" },
            {
              type: "list",
              value: [
                "Projektbezeichnung, Datum, Ort, Teilnehmer (Kunde + Dienstleister)",
                "Geprüfte Leistungen mit Ergebnis (z. B. 'Failover-Test Firewall: bestanden')",
                "Festgestellte Mängel mit Kategorie und Behebungsfrist (z. B. 'Doku Kapitel Backup fehlt – Nachlieferung bis 15.07.')",
                "Erklärung der Abnahme (ggf. unter Vorbehalt der Mängelbeseitigung)",
                "Beginn der Gewährleistung, Unterschriften beider Parteien",
              ],
            },
          ],
          quiz: [
            {
              id: "imp_lf12-pr-2_0",
              q: "Max. Seitenzahl AP2-Dokumentation?",
              options: ["5", "25", "15", "10"],
              correct: 2,
              explain: "15 Seiten + Anhänge.",
            },
            {
              id: "imp_lf12-pr-2_1",
              q: "Max. Seiten AP2-Doku?",
              options: ["30", "10", "15 + Anhang", "5"],
              correct: 2,
              explain: "15 Seiten plus Anhänge.",
            },
            {
              id: "imp_lf12-pr-2_2",
              q: "Fachgespräch Dauer?",
              options: ["15 Min", "10 Min", "5 Min", "30 Min"],
              correct: 0,
              explain: "15 Minuten Fachgespräch nach 15 Min Präsentation.",
            },
            {
              id: "imp_lf12-pr-2_3",
              q: "Was gehört in den Anhang?",
              options: [
                "Lebenslauf und Zeugnisse des Prüflings",
                "Werbematerial und Imagebroschüren des Betriebs",
                "Ausschließlich Fließtext ohne Abbildungen",
                "Netzpläne, Configs, Screenshots, Testprotokolle",
              ],
              correct: 3,
              explain:
                "Technische Details: Konfigurationen, Netzpläne, Screenshots, Testprotokolle.",
            },
            {
              id: "imp_lf12-pr-2_4",
              q: "Abnahmeprotokoll: Wer unterschreibt?",
              options: ["Kunde bestätigt Anforderungserfüllung", "Nur IT", "Niemand", "Nur Azubi"],
              correct: 0,
              explain: "Kunde bestätigt dass alle Anforderungen erfüllt sind.",
            },
            {
              id: "imp_lf12-pr-2_5",
              q: "Lessons Learned?",
              options: [
                "Zertifikate, die Teammitglieder nach Projektabschluss erhalten",
                "Nach Projektende: Was lief gut/schlecht für zukünftige Projekte",
                "Benotung der Teammitglieder durch den Projektleiter am Ende",
                "Ein Fragenkatalog zur Vorbereitung auf die Abschlussprüfung",
              ],
              correct: 1,
              explain: "Erfahrungen dokumentieren für künftige Projekte.",
            },
            {
              id: "imp_lf12-pr-2_6",
              q: "Netzplan AP2?",
              options: ["Nur Anhang", "Nie", "Nur mündlich", "Zeigt Projektablauf"],
              correct: 3,
              explain: "Abhängigkeiten.",
            },
            {
              id: "imp_lf12-pr-2_7",
              q: "Wirtschaftlichkeit?",
              options: ["Optional", "Nur BWL", "Verboten", "TCO/ROI zeigt Verständnis"],
              correct: 3,
              explain: "Kosten-Nutzen.",
            },
            {
              id: "imp_lf12-pr-2_8",
              q: "Reflexion?",
              options: [
                "Nur negativ",
                "Unnötig",
                "Was gut/schlecht, was anders machen",
                "Nur positiv",
              ],
              correct: 2,
              explain: "Selbstkritik.",
            },
            {
              id: "imp_lf12-pr-2_9",
              q: "Anhang Inhalt?",
              options: ["Marketing", "Alles", "Nur Text", "Configs, Netzpläne, Screenshots, Tests"],
              correct: 3,
              explain: "Technische Details.",
            },
            {
              id: "imp_lf12-pr-2_10",
              q: "Welche Kernbestandteile gehören in die AP2-Projektdokumentation?",
              options: [
                "Eine detaillierte Auflistung aller Arbeits- und Pausenzeiten während der Projektdurchführung als Stundennachweis",
                "Ausschließlich Screenshots der fertigen Lösung, da Prüfer visuelle Nachweise schneller bewerten können",
                "Ausschließlich der vollständige, kommentierte Quellcode des Projekts ohne weitere textliche Erläuterungen",
                "Ist-Analyse, Soll-Konzept, Planung (Zeit/Kosten), Durchführung, Soll-Ist-Vergleich und Fazit, Anhang mit Nachweisen",
              ],
              correct: 3,
              explain:
                "Die IHK bewertet den nachvollziehbaren Projektverlauf inklusive Entscheidungen und Wirtschaftlichkeit – nicht nur das Endergebnis.",
            },
            {
              id: "imp_lf12-pr-2_11",
              q: "Was leistet der Soll-Ist-Vergleich am Projektende?",
              options: [
                "Er ersetzt die vollständige Projektdokumentation, sodass weitere Kapitel entfallen können",
                "Er stellt geplante und tatsächliche Zeiten, Kosten und Ziele gegenüber und begründet Abweichungen",
                "Er listet ausschließlich die erreichten Erfolge auf; Abweichungen gehören nicht hinein",
                "Er stellt Planabweichungen und Fehler so dar, dass sie dem Leser nicht auffallen",
              ],
              correct: 1,
              explain:
                "Abweichungen sind kein Makel, wenn sie erklärt werden ('Lieferverzug Switch +2 Tage, kompensiert durch Vorziehen der Doku') – das zeigt Projektsteuerung.",
            },
            {
              id: "imp_lf12-pr-2_12",
              q: "Worin unterscheidet sich die Projektdokumentation von der Betriebsdokumentation?",
              options: [
                "Projektdoku beschreibt den Weg des Projekts; Betriebsdoku beschreibt den laufenden Betrieb",
                "Die Projektdoku enthält ausschließlich Rechnungen und Belege für die Buchhaltung",
                "Beides bezeichnet dasselbe Dokument, nur mit unterschiedlichem Deckblatt",
                "Die Betriebsdoku wird nur für die IHK-Prüfung erstellt und danach nicht mehr benötigt",
              ],
              correct: 0,
              explain:
                "Konfigurationen, Abläufe, Wartung. Der Kunde arbeitet nach Projektende mit der Betriebsdoku (Admin-Handbuch, Netzplan, Passwortübergabe-Prozess) – sie ist Teil der Übergabe.",
            },
            {
              id: "imp_lf12-pr-2_13",
              q: "Welche rechtliche Bedeutung hat das Abnahmeprotokoll?",
              options: [
                "Es ersetzt den ursprünglichen Vertrag vollständig und definiert das Leistungsverhältnis rückwirkend neu",
                "Mit der Abnahme bestätigt der Kunde die vertragsgemäße Leistung; Gefahrübergang und Gewährleistungsfristen beginnen",
                "Es ist eine unverbindliche Gesprächsnotiz ohne jede rechtliche Wirkung für beide Vertragsparteien",
                "Es erlangt Gültigkeit erst durch notarielle Beglaubigung und Hinterlegung beim Amtsgericht",
              ],
              correct: 1,
              explain:
                "Deshalb gehören Datum, Teilnehmer, geprüfte Punkte, festgestellte Mängel (mit Frist) und Unterschriften hinein – ab jetzt läuft die Gewährleistung.",
            },
            {
              id: "imp_lf12-pr-2_14",
              q: "Was gehört in eine vollständige Übergabe an den Kunden?",
              options: [
                "Ein persönlicher Händedruck mit mündlicher Bestätigung, dass alles läuft; schriftliche Unterlagen sind nicht erforderlich",
                "Nur die Schlussrechnung mit Zahlungsziel; alle weiteren Unterlagen folgen erst auf ausdrückliche Anforderung des Kunden",
                "Die Originalverpackungen der Hardware mit Lieferscheinen, damit der Kunde die Geräte bei Bedarf zurücksenden kann",
                "Betriebsdokumentation, Zugangsdaten (sicher übergeben), Einweisung/Schulung, Abnahmeprotokoll und Ansprechpartner für Support",
              ],
              correct: 3,
              explain:
                "Eine saubere Übergabe reduziert Support-Aufwand und Streitfälle – und ist in der AP2-Präsentation ein Pluspunkt.",
            },
            {
              id: "imp_lf12-pr-2_15",
              q: "Warum wird Dokumentation versioniert (z. B. v1.0, v1.1 mit Änderungshistorie)?",
              options: [
                "Aus rein ästhetischen Gründen, weil Versionsnummern auf dem Deckblatt professionell wirken",
                "Um die Dateigröße künstlich zu erhöhen und Manipulationen dadurch zu erschweren",
                "Versionierung ist in normgerechter Dokumentation unzulässig und wird vermieden",
                "Damit nachvollziehbar bleibt, wer wann was geändert hat, und alle mit dem aktuellen Stand arbeiten",
              ],
              correct: 3,
              explain:
                "Ein Änderungsverzeichnis (Datum, Autor, Änderung) gehört auf die ersten Seiten jeder Betriebsdoku – sonst kursieren veraltete Stände.",
            },
            {
              id: "imp_lf12-pr-2_16",
              q: "Wie unterscheidet sich Dokumentation für Administratoren von der für Endanwender?",
              options: [
                "Anwender-Doku enthält zusätzlich alle Passwörter und Zugangsdaten, damit Nutzer sich bei Problemen selbst als Administrator anmelden können",
                "Beide Dokumentationen müssen inhaltlich identisch sein, damit keine Informationsunterschiede zwischen Administratoren und Anwendern entstehen",
                "Admin-Doku besteht ausschließlich aus Screenshots und Diagrammen, da Administratoren Konfigurationen visuell schneller erfassen als in Textform",
                "Admin-Doku: technisch vollständig (Konfigs, IPs, Abhängigkeiten); Anwender-Doku: aufgabenbezogen, einfach, mit Schritten und Screenshots",
              ],
              correct: 3,
              explain:
                "Zielgruppengerechtes Schreiben ist Prüfungswissen: Der Anwender braucht 'Wie drucke ich?', der Admin 'Wie ist der Druckserver konfiguriert?'.",
            },
            {
              id: "imp_lf12-pr-2_17",
              q: "Was sind Lessons Learned und wozu dienen sie?",
              options: [
                "Strukturierte Erkenntnisse aus dem Projekt (was lief gut/schlecht), um Folgeprojekte zu verbessern",
                "Ein Marketingdokument, das Projekterfolge für Kundenpräsentationen und Vertriebsunterlagen aufbereitet",
                "Eine personenbezogene Auflistung, wer im Projekt welche Fehler verursacht hat, für die Personalakte",
                "Die Bewertung der beteiligten Auszubildenden durch die Berufsschule am Ende des Projekts",
              ],
              correct: 0,
              explain:
                "Kurzer Workshop oder Abschnitt im Fazit: Erkenntnisse zu Planung, Kommunikation, Technik – kontinuierliche Verbesserung statt Wiederholungsfehler.",
            },
            {
              id: "imp_lf12-pr-2_18",
              q: "Welche Inhalte gehören in einen Netzplan als Anlage der Betriebsdoku?",
              options: [
                "Geräte mit Hostnamen, IP-Adressen/VLANs, Verbindungen und relevante Dienste",
                "Die Urlaubs- und Schichtplanung der IT-Abteilung für das laufende Jahr",
                "Ein einzelnes Übersichtsfoto des Serverschranks ohne Beschriftung",
                "Die aktuelle Preisliste des Hardware-Händlers mit Rabattstaffeln",
              ],
              correct: 0,
              explain:
                "Aktuell gehalten. Im Störungsfall ist der aktuelle Netzplan das wichtigste Dokument; veraltete Pläne verlängern jede Fehlersuche.",
            },
            {
              id: "imp_lf12-pr-2_19",
              q: "Wie geht man im Übergabegespräch professionell mit einem festgestellten Restmangel um?",
              options: [
                "Den Mangel bewusst verschweigen und darauf hoffen, dass er im Betrieb nicht auffällt",
                "Mangel offen ins Abnahmeprotokoll aufnehmen, Behebungstermin vereinbaren, Abnahme ggf. unter Vorbehalt",
                "Dem Kunden die Verantwortung zuweisen, da er die Anforderungen unklar formuliert hat",
                "Die komplette Übergabe absagen und das Projekt bis zur Fehlerfreiheit zurückhalten",
              ],
              correct: 1,
              explain:
                "Transparenz schafft Vertrauen: 'Abnahme mit Mängelliste' ist Standard – wichtig sind klare Fristen und Verantwortlichkeiten für die Nachbesserung.",
            },
          ],
        },
      ],
    },
  ],
};
