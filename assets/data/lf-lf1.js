window.LF_CONTENT = window.LF_CONTENT || {};
window.LF_CONTENT["lf1"] = {
  topics: [
    {
      id: "lf1-rf",
      title: "Rechtsformen",
      lessons: [
        {
          id: "lf1-rf-1",
          title: "Personen- vs. Kapitalgesellschaften",
          content: [
            { type: "heading", value: "Grundsätzlicher Unterschied" },
            {
              type: "text",
              value:
                "Personengesellschaften: Gesellschafter stehen im Vordergrund, persönliche Mitarbeit erwartet, unbeschränkte persönliche Haftung, kein Mindestkapital, Einkommensteuer, kein Handelsregistereintrag nötig (Ausnahme OHG/KG). Kapitalgesellschaften: Kapitaleinlage steht im Vordergrund, Haftung auf Gesellschaftsvermögen beschränkt, Mindestkapital erforderlich, eigene Rechtspersönlichkeit (juristische Person), Körperschaftsteuer + Gewerbesteuer, Handelsregistereintrag Pflicht, Gesellschafter müssen nicht mitarbeiten.",
            },
            { type: "heading", value: "Einzelunternehmen" },
            {
              type: "text",
              value:
                "Alleiniger Inhaber, keine Gesellschafter. Unbeschränkte Haftung mit Privat- UND Geschäftsvermögen. Einfachste Gründung, kein Mindestkapital, kein Notar. Gewerbe anmelden genügt. Einkommensteuer + Gewerbesteuer. Handelsregister nur für Kaufleute (e.K.). Typisch: Freelancer, Kiosk, Handwerker.",
            },
            { type: "heading", value: "GbR (Gesellschaft bürgerlichen Rechts)" },
            {
              type: "text",
              value:
                "Min. 2 Gesellschafter, geregelt im BGB (§705 ff.). Kein Mindestkapital, keine Registerpflicht – freiwillige Eintragung ins GESELLSCHAFTSREGISTER als eGbR seit 2024 möglich. Alle Gesellschafter haften persönlich, unbeschränkt und gesamtschuldnerisch (jeder für die Schulden aller!). Geschäftsführung: Alle gemeinsam (oder per Vertrag geregelt). Gewinnverteilung: vorrangig nach den vereinbarten Beteiligungsverhältnissen, im Zweifel zu gleichen Teilen (§ 709 Abs. 3 BGB, seit MoPeG 2024) oder nach Gesellschaftsvertrag. Kein Handelsgewerbe (sonst wird es automatisch OHG). Typisch: Startup-Teams, Bürogemeinschaften, Praxisgemeinschaften.",
            },
            { type: "heading", value: "OHG (Offene Handelsgesellschaft)" },
            {
              type: "text",
              value:
                "Min. 2 Gesellschafter, geregelt im HGB (§105 ff.). Für Handelsgewerbe (= Gewerbebetrieb, der einen in kaufmännischer Weise eingerichteten Geschäftsbetrieb erfordert). Handelsregistereintrag Pflicht (HRA). Alle Gesellschafter haften persönlich, unbeschränkt, gesamtschuldnerisch – genau wie GbR. Geschäftsführung: Jeder Gesellschafter ist einzeln geschäftsführungsbefugt (§ 116 HGB n. F.), Einzelvertretung möglich. Gewinnverteilung: nach den Beteiligungsverhältnissen (§ 709 Abs. 3 BGB i. V. m. § 120 HGB) – die frühere 4-%-Vorabverzinsung des § 121 HGB a. F. wurde mit dem MoPeG 2024 abgeschafft (nicht nach Einlage!). Typisch: Kanzleien, Handelsunternehmen, IT-Beratung.",
            },
            { type: "heading", value: "KG (Kommanditgesellschaft)" },
            {
              type: "text",
              value:
                "Min. 2 Gesellschafter mit unterschiedlichen Rollen. Komplementär: Vollhafter (persönlich, unbeschränkt), führt das Geschäft. Kommanditist: Teilhafter (haftet nur mit Einlage), keine Geschäftsführung, aber Kontrollrecht. Handelsregistereintrag Pflicht (HRA). Typisch: Familienunternehmen mit stillen Partnern, Investoren als Kommanditisten.",
            },
            { type: "heading", value: "Vergleich auf einen Blick" },
            {
              type: "list",
              value: [
                "GbR: Einfachste Gesellschaft, BGB, kein HR, alle haften voll",
                "OHG: Wie GbR aber für Kaufleute, HGB, HR Pflicht, Gewinn nach §121",
                "KG: Komplementär (Vollhafter+GF) + Kommanditist (nur Einlage)",
                "GmbH: 25.000 EUR, beschränkte Haftung, Körperschaftsteuer, HR (HRB)",
                "UG: Ab 1 EUR, Rücklage 25%, Vorstufe zur GmbH",
                "AG: 50.000 EUR, Aktien, Vorstand/Aufsichtsrat/HV",
              ],
            },
            {
              type: "note",
              value:
                "Prüfungsfalle: Gesamtschuldnerisch = Gläubiger kann sich den Gesellschafter aussuchen, bei dem er das Geld holt. Dieser muss dann intern bei den anderen einfordern.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Haftung" },
            {
              type: "text",
              value:
                "Ein Einzelunternehmer und eine GmbH machen je 50.000€ Schulden. Wie haften beide?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nEinzelunternehmer: haftet UNBESCHRÄNKT, auch mit\nseinem Privatvermögen (Haus, Auto, Erspartes).\nGmbH: haftet nur mit dem GESELLSCHAFTSVERMÖGEN.\nDas Privatvermögen der Gesellschafter bleibt\ngrundsätzlich unangetastet (Haftungsbeschränkung).",
            },
            { type: "heading", value: "Übungsaufgabe 2: Einordnung" },
            {
              type: "text",
              value:
                "Ordne zu, ob Personen- oder Kapitalgesellschaft: a) OHG, b) GmbH, c) KG, d) AG.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nPersonengesellschaften: a) OHG, c) KG\n  (auch GbR) - mind. 2 Personen, persönliche Haftung\nKapitalgesellschaften: b) GmbH, d) AG\n  (auch UG) - juristische Person, Haftungsbeschränkung,\n  Stammkapital/Grundkapital nötig.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Entscheidung" },
            {
              type: "text",
              value:
                "Eine Einzelperson will ein kleines IT-Beratungsgewerbe starten, ohne Mitarbeiter, geringes Risiko. Welche Rechtsform ist am einfachsten?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nEinzelunternehmen ist am einfachsten:\n- keine Mindestkapital-Pflicht\n- einfache Gründung (Gewerbeanmeldung)\n- volle Entscheidungsfreiheit\nNachteil: unbeschränkte Haftung. Bei geringem\nRisiko und ohne Mitarbeiter aber vertretbar.\nAlternative bei Haftungssorge: UG.",
            },
            { type: "heading", value: "Beispiel 1: Handwerksbetrieb als OHG" },
            {
              type: "text",
              value:
                "Zwei Elektriker gründen gemeinsam einen Betrieb. Sie wählen die OHG, weil beide gleichberechtigt arbeiten und Entscheidungen treffen wollen. Nachteil: Beide haften persönlich, unbeschränkt und gesamtschuldnerisch – wenn der Betrieb 80.000 EUR Schulden macht, kann der Gläubiger die gesamte Summe von nur einem der beiden fordern. Dieser muss dann intern beim Partner Ausgleich suchen.",
            },
            {
              type: "heading",
              value: "Beispiel 2: Arztpraxis als GbR vs. Partnerschaftsgesellschaft",
            },
            {
              type: "text",
              value:
                "Drei Ärzte eröffnen eine Gemeinschaftspraxis. Als GbR wäre die Gründung am einfachsten (formfrei, kein HR-Eintrag), aber alle haften persönlich für Behandlungsfehler der anderen. Deshalb wählen sie die Partnerschaftsgesellschaft mit beschränkter Berufshaftung (PartGmbB): Bei der PartGmbB ist die Haftung für berufliche Fehler auf das Gesellschaftsvermögen beschränkt (Pflicht-Berufshaftpflicht, § 8 Abs. 4 PartGG) – kein Partner haftet dafür persönlich.",
            },
            { type: "heading", value: "Beispiel 3: IT-Freelancer wählt Rechtsform" },
            {
              type: "text",
              value:
                "Ein Fachinformatiker macht sich als Ein-Mann-IT-Dienstleister selbständig. Er wählt das Einzelunternehmen: keine Gesellschafter nötig, Gründung durch Gewerbeanmeldung, kein Mindestkapital. Er haftet zwar mit Privatvermögen, aber bei reiner Dienstleistung ohne große Investitionen ist das Risiko überschaubar. Sobald das Geschäft wächst und er höhere Haftungsrisiken sieht, kann er später in eine UG oder GmbH umwandeln.",
            },
          ],
          quiz: [
            {
              id: "imp_lf1-rf-1_0",
              q: "Mindestkapital GmbH?",
              options: ["25.000 EUR", "10.000 EUR", "50.000 EUR", "1 EUR"],
              correct: 0,
              explain: "GmbH = 25.000 EUR Stammkapital.",
            },
            {
              id: "imp_lf1-rf-1_1",
              q: "Haftung OHG-Gesellschafter?",
              options: [
                "Keine persönliche Haftung der Gesellschafter",
                "Persönlich, unbeschränkt, gesamtschuldnerisch",
                "Nur bis zur Höhe der geleisteten Einlage",
                "Auf Gesellschaftsvermögen beschränkt",
              ],
              correct: 1,
              explain: "OHG = persönlich, unbeschränkt, gesamtschuldnerisch.",
            },
            {
              id: "imp_lf1-rf-1_2",
              q: "Wer haftet bei einer KG unbeschränkt?",
              options: ["Kommanditist", "Niemand", "Komplementär", "Alle"],
              correct: 2,
              explain: "Komplementär = Vollhafter, Kommanditist = nur Einlage.",
            },
            {
              id: "imp_lf1-rf-1_3",
              q: "GbR: Wie wird der Gewinn verteilt, wenn nichts vereinbart ist (Rechtslage seit MoPeG 2024)?",
              options: [
                "Vorrangig nach den Beteiligungsverhältnissen, im Zweifel zu gleichen Teilen (§ 709 Abs. 3 BGB)",
                "80/20 zugunsten des Geschäftsführers",
                "Immer nach geleisteter Arbeitszeit",
                "Der dienstälteste Gesellschafter erhält mehr",
              ],
              correct: 0,
              explain:
                "Seit dem MoPeG (01.01.2024): § 709 Abs. 3 BGB – maßgeblich sind die vereinbarten Beteiligungsverhältnisse, hilfsweise das Verhältnis der Beiträge, im Zweifel gleiche Teile. Der frühere § 722 BGB ist aufgehoben.",
            },
            {
              id: "imp_lf1-rf-1_4",
              q: "OHG: Wonach richtet sich die gesetzliche Gewinnverteilung seit dem MoPeG (2024)?",
              options: [
                "Nach den Beteiligungsverhältnissen (§ 709 Abs. 3 BGB i. V. m. § 105 Abs. 3 HGB)",
                "Nach Arbeitszeit",
                "Nach Betriebszugehörigkeit",
                "4 % Kapitalverzinsung, Rest nach Köpfen (§ 121 HGB a. F.)",
              ],
              correct: 0,
              explain:
                "Die alte 4-%-Regel des § 121 HGB galt nur bis Ende 2023. Seit dem MoPeG wird nach Beteiligungsverhältnissen verteilt – die Altregel ist in Prüfungsfragen ein beliebter Distraktor.",
            },
            {
              id: "imp_lf1-rf-1_5",
              q: "Kapitalgesellschaft = eigene Rechtspersönlichkeit?",
              options: ["Ja (juristische Person)", "Nur GmbH", "Nur AG", "Nein"],
              correct: 0,
              explain: "Alle Kapitalgesellschaften sind juristische Personen.",
            },
            {
              id: "imp_lf1-rf-1_6",
              q: "Gesamtschuldnerisch bedeutet?",
              options: [
                "Die Schulden werden anteilig auf alle Köpfe geteilt",
                "Gläubiger kann sich einen Gesellschafter aussuchen",
                "Alle Gesellschafter zahlen stets exakt gleich viel",
                "Nur der bestellte Geschäftsführer haftet persönlich",
              ],
              correct: 1,
              explain: "Gläubiger kann sich aussuchen, von wem er das gesamte Geld fordert.",
            },
            {
              id: "imp_lf1-rf-1_7",
              q: "Einzelunternehmen: Mindestkapital?",
              options: ["25.000 EUR", "Keines", "1 EUR", "50.000 EUR"],
              correct: 1,
              explain: "Kein Mindestkapital, einfachste Gründung.",
            },
            {
              id: "imp_lf1-rf-1_8",
              q: "e.K. = ?",
              options: ["Eingetragener Kaufmann", "Erstkapital", "Einzelkapital", "Euro-Konto"],
              correct: 0,
              explain: "Einzelunternehmer im Handelsregister.",
            },
            {
              id: "imp_lf1-rf-1_9",
              q: "GbR: BGB oder HGB?",
              options: ["Beide", "Keines", "HGB", "BGB (§705 ff.)"],
              correct: 3,
              explain: "GbR = Gesellschaft bürgerlichen Rechts, BGB.",
            },
            {
              id: "imp_lf1-rf-1_10",
              q: "Welche Rechtsform ist KEINE Personengesellschaft?",
              options: ["GmbH", "KG", "GbR", "OHG"],
              correct: 0,
              explain:
                "GmbH = Kapitalgesellschaft (juristische Person). OHG, KG, GbR = Personengesellschaften.",
            },
            {
              id: "imp_lf1-rf-1_11",
              q: "Was bedeutet 'gesamtschuldnerisch haften'?",
              options: [
                "Die Haftung ist auf die geleistete Kapitaleinlage begrenzt",
                "Nur der geschäftsführende Gesellschafter haftet persönlich",
                "Gläubiger kann gesamte Schuld von einem Gesellschafter fordern",
                "Jeder Gesellschafter haftet nur anteilig nach seiner Quote",
              ],
              correct: 2,
              explain:
                "Gesamtschuldnerisch: Gläubiger sucht sich aus, bei wem er die volle Summe holt. Interner Ausgleich ist Sache der Gesellschafter.",
            },
            {
              id: "imp_lf1-rf-1_12",
              q: "Wie viele Gründer braucht eine OHG mindestens?",
              options: ["7", "2", "1", "3"],
              correct: 1,
              explain: "OHG = min. 2 Gesellschafter, alle Vollhafter, HGB §105 ff.",
            },
            {
              id: "imp_lf1-rf-1_13",
              q: "Was unterscheidet Komplementär und Kommanditist?",
              options: [
                "Komplementär = Vollhafter, Kommanditist = Teilhafter",
                "Kein Unterschied, beide haften identisch",
                "Der Kommanditist führt allein die Geschäfte der KG",
                "Der Komplementär haftet nur mit seiner Einlage",
              ],
              correct: 0,
              explain:
                "KG: Komplementär haftet persönlich + unbeschränkt, Kommanditist nur mit seiner Einlage.",
            },
            {
              id: "imp_lf1-rf-1_14",
              q: "Welches Gesetz regelt die GbR?",
              options: ["HGB", "BGB §705 ff.", "GmbHG", "AktG"],
              correct: 1,
              explain: "GbR = Gesellschaft bürgerlichen Rechts, geregelt im BGB (§705 ff.).",
            },
            {
              id: "imp_lf1-rf-1_15",
              q: "Wer führt bei einer KG die Geschäfte?",
              options: [
                "Externer Geschäftsführer",
                "Kommanditist",
                "Beide gleichberechtigt",
                "Komplementär",
              ],
              correct: 3,
              explain:
                "Nur der Komplementär führt die Geschäfte. Der Kommanditist hat kein Geschäftsführungsrecht.",
            },
            {
              id: "imp_lf1-rf-1_16",
              q: "Was gilt für die gesetzliche Gewinnverteilung bei der OHG (aktuelle Rechtslage)?",
              options: [
                "Stets gleichmäßig nach Köpfen",
                "Ausschließlich nach dem Alter der Gesellschafter",
                "Nach den Beteiligungsverhältnissen (seit MoPeG 2024)",
                "4 % auf den Kapitalanteil, Rest nach Köpfen (galt nur bis 2023)",
              ],
              correct: 2,
              explain:
                "Seit 01.01.2024 (MoPeG): Verteilung nach Beteiligungsverhältnissen (§ 709 Abs. 3 BGB, § 105 Abs. 3 HGB). Die 4-%-Regel des § 121 HGB a. F. ist aufgehoben – Vorsicht bei älteren Lernmaterialien.",
            },
            {
              id: "imp_lf1-rf-1_17",
              q: "Welche Aussage zur GbR ist FALSCH?",
              options: [
                "Eintrag ins Handelsregister ist Pflicht",
                "Geregelt im BGB",
                "Kein Mindestkapital erforderlich",
                "Min. 2 Gesellschafter",
              ],
              correct: 0,
              explain:
                "Eine Eintragung ist bei der GbR freiwillig – und zwar seit 2024 als eGbR ins GESELLSCHAFTSREGISTER, nicht ins Handelsregister.",
            },
            {
              id: "imp_lf1-rf-1_18",
              q: "Warum heißt die OHG 'offene' Handelsgesellschaft?",
              options: [
                "Weil die Mitgliederzahl offen ist",
                "Weil die Bücher offen einsehbar sind",
                "Weil alle Gesellschafter offen (erkennbar) haften",
                "Weil sie offen für alle Branchen ist",
              ],
              correct: 2,
              explain:
                "Offen = alle Gesellschafter treten nach außen sichtbar auf und haften persönlich.",
            },
            {
              id: "imp_lf1-rf-1_19",
              q: "Kann eine Personengesellschaft klagen und verklagt werden?",
              options: [
                "Nein, nur die Gesellschafter persönlich",
                "Ja, sie ist rechtsfähig (§ 705 Abs. 2 BGB)",
                "Nur die OHG, nicht die GbR",
                "Nur vor dem Amtsgericht",
              ],
              correct: 1,
              explain:
                "Seit dem MoPeG ist die (Außen-)GbR ausdrücklich rechtsfähig – wie OHG und KG kann sie unter eigenem Namen klagen, verklagt werden und Eigentum erwerben.",
            },
          ],
        },
        {
          id: "lf1-rf-2",
          title: "UG & GmbH Besonderheiten + Rechtsformwahl",
          content: [
            { type: "heading", value: "UG (haftungsbeschränkt) – Mini-GmbH" },
            {
              type: "text",
              value:
                "Mindestkapital: ab 1 EUR. Rücklagepflicht: 25% des Jahresüberschusses einbehalten, bis Stammkapital 25.000 EUR erreicht, dann GmbH-Umwandlung möglich. Notarieller Gesellschaftsvertrag oder günstiges Musterprotokoll. Haftungsbeschränkung gilt ERST nach Handelsregistereintragung!",
            },
            { type: "heading", value: "GmbH – häufigste Kapitalgesellschaft" },
            {
              type: "text",
              value:
                "Mindestkapital: 25.000 EUR, davon mind. 12.500 EUR bei Gründung einzuzahlen. Häufigste Rechtsform im deutschen Mittelstand. Oberstes Organ: Gesellschafterversammlung. Fremdgeschäftsführung möglich (GF muss nicht Gesellschafter sein). Besteuerung: Körperschaftsteuer (15%) + Gewerbesteuer + Solidaritätszuschlag.",
            },
            { type: "heading", value: "Kriterien zur Rechtsformwahl" },
            {
              type: "text",
              value:
                "Haftung: Wie viel persönliches Risiko? Kapital: Wie viel Startkapital vorhanden? Gründerzahl: Allein oder mit Partnern? Geschäftsführung: Wer leitet? Gewinnverteilung: Wie aufteilen? Steuer: Einkommensteuer (Personenges.) vs. Körperschaftsteuer (Kapitalges.)? Außenwirkung: Wie professionell wirken? Aufwand: Notar, Handelsregister, Buchführungspflichten?",
            },
            {
              type: "note",
              value:
                "AG: Grundkapital 50.000 EUR, Aktien, Vorstand + Aufsichtsrat + Hauptversammlung, Dividende nach Aktienanzahl. Für Großunternehmen (SAP, Siemens).",
            },
            { type: "heading", value: "Übungsaufgabe: Rechtsformwahl" },
            {
              type: "text",
              value:
                "Drei IT-Gründer wollen gemeinsam ein Systemhaus aufbauen. Sie wollen die persönliche Haftung begrenzen, haben aber nur 15.000€ Startkapital. Welche Rechtsform empfiehlst du und warum? Welche Alternative gäbe es bei vollen 25.000€?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nEmpfehlung bei 15.000€: UG (haftungsbeschränkt)\n- Haftung auf Gesellschaftsvermögen begrenzt\n- Gründung schon ab 1€ Stammkapital möglich\n- Pflicht: 25% des Jahresgewinns zurücklegen,\n  bis 25.000€ erreicht sind → dann Umwandlung\n  in GmbH möglich\n- 'Mini-GmbH', UG muss im Namen geführt werden\n\nBei 25.000€: GmbH\n- Mind. 25.000€ Stammkapital (davon 12.500€\n  bei Gründung eingezahlt)\n- Volle Haftungsbeschränkung, höheres Ansehen\n- Keine Thesaurierungspflicht wie bei UG\n\nBeide: juristische Person, Eintrag Handelsregister,\nNotar nötig, doppelte Buchführung.",
            },
            { type: "heading", value: "Übungsaufgabe 2: UG-Pflicht" },
            { type: "text", value: "Welche Besonderheit gilt bei der UG bezüglich der Gewinne?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nThesaurierungspflicht: Die UG muss 25% des\nJahresüberschusses als Rücklage einbehalten,\nbis das Stammkapital von 25.000€ erreicht ist.\nDann kann sie in eine GmbH umgewandelt werden.\nDeshalb auch 'Mini-GmbH' genannt.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Stammkapital" },
            {
              type: "text",
              value:
                "Wie viel Stammkapital braucht eine GmbH mindestens, und wie viel muss bei Gründung eingezahlt sein?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nMindeststammkapital GmbH: 25.000€\nBei Gründung eingezahlt: mindestens die Hälfte,\nalso 12.500€.\nUG dagegen: ab 1€ Stammkapital gründbar.",
            },
            { type: "heading", value: "Beispiel 1: UG-Gründung eines Startups" },
            {
              type: "text",
              value:
                "Ein Absolvent gründet eine App-Entwicklungsfirma als UG (haftungsbeschränkt) mit 1 EUR Stammkapital. Vorteil: Haftung auf Gesellschaftsvermögen beschränkt, günstiger Start. Pflicht: 25% des Jahresüberschusses müssen als Rücklage einbehalten werden (Thesaurierungspflicht), bis 25.000 EUR erreicht sind. Dann kann in eine GmbH umgewandelt werden.",
            },
            { type: "heading", value: "Beispiel 2: GmbH-Gründung IT-Systemhaus" },
            {
              type: "text",
              value:
                "Drei IT-Spezialisten gründen ein Systemhaus als GmbH. Sie bringen je 10.000 EUR ein (gesamt 30.000 EUR, min. 25.000 EUR). Der Gesellschaftsvertrag wird notariell beurkundet, die GmbH ins Handelsregister eingetragen. Bis zur Eintragung besteht eine GmbH i.G. (in Gründung) – hier haften die Gründer persönlich. Ab HR-Eintragung haftet nur noch das Gesellschaftsvermögen.",
            },
            { type: "heading", value: "Beispiel 3: Rechtsformwahl nach Haftungsrisiko" },
            {
              type: "text",
              value:
                "Ein IT-Dienstleister realisiert ein 500.000-EUR-Projekt. Als Einzelunternehmer würde er bei Scheitern mit Haus und Privatvermögen haften. Als GmbH ist die Haftung auf die Einlage begrenzt. Die GmbH kostet mehr (Notar, HR-Eintrag, 25.000 EUR Kapital, Jahresabschluss-Pflicht), schützt aber das Privatvermögen. Bei hohen Projektrisiken ist die Kapitalgesellschaft die bessere Wahl.",
            },
          ],
          quiz: [
            {
              id: "imp_lf1-rf-2_0",
              q: "UG Rücklagepflicht?",
              options: ["10% des Gewinns", "50% des Umsatzes", "Keine", "25% bis 25.000 EUR"],
              correct: 3,
              explain: "25% des Jahresüberschusses bis 25.000 EUR Stammkapital.",
            },
            {
              id: "imp_lf1-rf-2_1",
              q: "GmbH: Mind. einzuzahlen bei Gründung?",
              options: ["1 EUR", "50.000 EUR", "25.000 EUR", "12.500 EUR"],
              correct: 3,
              explain: "Mind. 12.500 EUR der 25.000 EUR bei Gründung.",
            },
            {
              id: "imp_lf1-rf-2_2",
              q: "Personengesellschaft: Welcher Steuer unterliegt der GEWINN?",
              options: [
                "Einkommensteuer der Gesellschafter",
                "Keiner",
                "Nur der Umsatzsteuer",
                "Körperschaftsteuer",
              ],
              correct: 0,
              explain:
                "Der Gewinn wird den Gesellschaftern zugerechnet und unterliegt deren Einkommensteuer (Transparenzprinzip). Umsatz- und ggf. Gewerbesteuer zahlt die Gesellschaft daneben natürlich auch – gefragt ist die Gewinnbesteuerung.",
            },
            {
              id: "imp_lf1-rf-2_3",
              q: "AG Organe?",
              options: [
                "Nur Gesellschafterversammlung",
                "Vorstand + Betriebsrat",
                "Nur Vorstand",
                "Vorstand + Aufsichtsrat + Hauptversammlung",
              ],
              correct: 3,
              explain:
                "3 Organe: Vorstand (Geschäftsführung), Aufsichtsrat (Kontrolle), HV (Aktionäre).",
            },
            {
              id: "imp_lf1-rf-2_4",
              q: "GmbH: Fremdgeschäftsführer möglich?",
              options: [
                "Nur bei AG",
                "Nein",
                "Ja, GF muss nicht Gesellschafter sein",
                "Nur mit IHK-Erlaubnis",
              ],
              correct: 2,
              explain: "GF kann von außen bestellt werden.",
            },
            {
              id: "imp_lf1-rf-2_5",
              q: "Gewinnrücklage UG: Wie lange?",
              options: ["Bis 25.000 EUR Stammkapital erreicht", "Nie", "1 Jahr", "Immer"],
              correct: 0,
              explain: "25% des Jahresüberschusses bis 25.000 EUR, dann GmbH-Umwandlung möglich.",
            },
            {
              id: "imp_lf1-rf-2_6",
              q: "Körperschaftsteuer Satz?",
              options: ["30%", "25%", "15%", "0%"],
              correct: 2,
              explain: "Körperschaftsteuer: 15% (+ Gewerbesteuer + Soli).",
            },
            {
              id: "imp_lf1-rf-2_7",
              q: "AG: Grundkapital?",
              options: ["25.000 EUR", "100.000 EUR", "1 EUR", "50.000 EUR"],
              correct: 3,
              explain: "AG: Mindestens 50.000 EUR Grundkapital.",
            },
            {
              id: "imp_lf1-rf-2_8",
              q: "Stammkapital GmbH?",
              options: ["50.000 EUR", "12.500 EUR", "1 EUR", "25.000 EUR"],
              correct: 3,
              explain: "25.000 EUR Stammkapital.",
            },
            {
              id: "imp_lf1-rf-2_9",
              q: "UG: Haftung ab wann beschränkt?",
              options: ["Sofort", "Nach HR-Eintragung", "Nach 1 Jahr", "Nie"],
              correct: 1,
              explain: "Haftungsbeschränkung erst nach Handelsregistereintragung!",
            },
            {
              id: "imp_lf1-rf-2_10",
              q: "Wie hoch ist die Thesaurierungspflicht bei der UG?",
              options: [
                "50% des Umsatzes",
                "10% des Gewinns",
                "Es gibt keine",
                "25% des Jahresüberschusses",
              ],
              correct: 3,
              explain:
                "UG muss 25% des Jahresüberschusses als Rücklage einbehalten, bis 25.000 EUR Stammkapital erreicht sind.",
            },
            {
              id: "imp_lf1-rf-2_11",
              q: "Ab welchem Betrag entfällt die Thesaurierungspflicht der UG?",
              options: ["12.500 EUR", "Sie entfällt nie", "50.000 EUR", "25.000 EUR"],
              correct: 3,
              explain:
                "Bei 25.000 EUR kann die UG in eine GmbH umgewandelt werden, Thesaurierung entfällt.",
            },
            {
              id: "imp_lf1-rf-2_12",
              q: "Wer bestellt den Geschäftsführer einer GmbH?",
              options: [
                "Der Geschäftsführer selbst",
                "Die Gesellschafterversammlung",
                "Das Handelsregister",
                "Die IHK",
              ],
              correct: 1,
              explain: "Die Gesellschafterversammlung bestellt und entlässt den GF.",
            },
            {
              id: "imp_lf1-rf-2_13",
              q: "Muss der GF einer GmbH Gesellschafter sein?",
              options: [
                "Nein, ein Fremd-GF ist möglich",
                "Nur wenn im Vertrag festgelegt",
                "Ja, immer",
                "Nur bei Ein-Mann-GmbH",
              ],
              correct: 0,
              explain: "Ein Fremdgeschäftsführer muss nicht Gesellschafter sein.",
            },
            {
              id: "imp_lf1-rf-2_14",
              q: "Welche Steuer zahlt eine GmbH auf ihren Gewinn?",
              options: [
                "Körperschaftsteuer (~15%) + Gewerbesteuer",
                "Nur Umsatzsteuer",
                "Einkommensteuer",
                "Kapitalertragsteuer",
              ],
              correct: 0,
              explain:
                "GmbH zahlt Körperschaftsteuer (ca. 15%) plus Gewerbesteuer. Einkommensteuer zahlen nur natürliche Personen.",
            },
            {
              id: "imp_lf1-rf-2_15",
              q: "Was ist die GmbH i.G.?",
              options: [
                "GmbH in Gründung (vor HR-Eintragung)",
                "GmbH im Gewerbegebiet",
                "GmbH in Genossenschaft",
                "Eine insolvente GmbH",
              ],
              correct: 0,
              explain:
                "GmbH i.G. = in Gründung: Phase zwischen Notartermin und Handelsregistereintragung.",
            },
            {
              id: "imp_lf1-rf-2_16",
              q: "Wie viele Organe hat eine AG?",
              options: [
                "2 – nur Vorstand und Aufsichtsrat bilden Organe",
                "1 – allein der Vorstand ist Organ der AG",
                "3 (Vorstand + Aufsichtsrat + Hauptversammlung)",
                "4 – zusätzlich zählt der Betriebsrat als Organ",
              ],
              correct: 2,
              explain:
                "AG hat 3 Organe: Vorstand (führt Geschäfte), Aufsichtsrat (kontrolliert), Hauptversammlung (Aktionäre beschließen).",
            },
            {
              id: "imp_lf1-rf-2_17",
              q: "Was ist das Mindest-Grundkapital einer AG?",
              options: ["1 EUR", "50.000 EUR", "25.000 EUR", "100.000 EUR"],
              correct: 1,
              explain: "AG = min. 50.000 EUR Grundkapital, aufgeteilt in Aktien.",
            },
            {
              id: "imp_lf1-rf-2_18",
              q: "Wann entsteht eine GmbH rechtlich?",
              options: [
                "Mit Einzahlung des Stammkapitals",
                "Mit Unterzeichnung des Gesellschaftsvertrags",
                "Mit Gewerbeanmeldung",
                "Mit Eintragung ins Handelsregister",
              ],
              correct: 3,
              explain: "Die GmbH entsteht als juristische Person erst mit HR-Eintragung.",
            },
            {
              id: "imp_lf1-rf-2_19",
              q: "Welche Aussage zur UG ist RICHTIG?",
              options: [
                "Gesellschafter haften persönlich",
                "Kein Gesellschaftsvertrag nötig",
                "Ist eine Sonderform der GmbH",
                "Mindestkapital 25.000 EUR",
              ],
              correct: 2,
              explain:
                "Die UG (haftungsbeschränkt) ist eine Sonderform der GmbH mit min. 1 EUR Stammkapital.",
            },
          ],
        },
      ],
    },
    {
      id: "lf1-uz",
      title: "Unternehmensziele & Planung",
      lessons: [
        {
          id: "lf1-uz-1",
          title: "Zielsystem & SMART",
          content: [
            { type: "heading", value: "Zielhierarchie" },
            {
              type: "text",
              value:
                "Vision: Langfristiger Zukunftstraum ('Wohin in 10-20 Jahren?'). Leitbild/Mission: Aktueller Unternehmenszweck und Werte. Strategische Ziele (3-5 Jahre): z.B. Marktführerschaft in der Region. Operative Ziele (kurzfristig): Konkret, messbar, z.B. 'Umsatz Q3 um 10% steigern'.",
            },
            { type: "heading", value: "Zielarten" },
            {
              type: "text",
              value:
                "Ökonomisch/Formalziele: Gewinn, Umsatz, Liquidität, Rentabilität, Marktanteil. Sachziele/Leistungsziele: Art, Menge, Qualität der Produkte/DL. Soziale Ziele: Mitarbeiterzufriedenheit, faire Löhne, Work-Life-Balance. Ökologische Ziele: CO2-Reduktion, Green IT, Kreislaufwirtschaft.",
            },
            { type: "heading", value: "Zielbeziehungen" },
            {
              type: "text",
              value:
                "Komplementär: Ziele unterstützen sich (hohe Qualität → zufriedene Kunden → mehr Umsatz). Konkurrierend/Konflikt: Ziele widersprechen sich (niedrige Kosten vs. hohe Qualität). Indifferent: Ziele sind unabhängig (Fahrzeugfarbe vs. Jahresumsatz). Zielkonflikte müssen abgewogen werden!",
            },
            { type: "heading", value: "SMART-Methode" },
            {
              type: "text",
              value:
                "S = Spezifisch (klar formuliert, nicht vage). M = Messbar (Kennzahl, Menge, Prozent). A = Attraktiv/Akzeptiert (motivierend, von Beteiligten getragen). R = Realistisch (erreichbar mit vorhandenen Ressourcen). T = Terminiert (fester Endtermin). Beispiel: 'Bis 31.12.2026 die Kundenzufriedenheit (NPS) von 45 auf 60 Punkte steigern.'",
            },
            { type: "heading", value: "Übungsaufgabe 1: SMART" },
            {
              type: "text",
              value: "Formuliere ein SMART-Ziel für die Migration von 20 PCs auf Windows.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (Beispiel):\n'Bis zum 31.10. werden alle 20 Arbeitsplatz-PCs der\nVerwaltung auf das neue Betriebssystem migriert,\nohne dass die tägliche Arbeitszeit der Mitarbeiter\num mehr als 1 Stunde unterbrochen wird.'\nS=migrieren, M=20 PCs/max 1h, A=akzeptiert/attraktiv (Team trägt es mit),\nR=realistisch machbar, T=bis 31.10.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Zielbeziehungen" },
            {
              type: "text",
              value:
                "Was bedeuten komplementäre, konkurrierende und neutrale Ziele? Je ein Beispiel.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nKomplementär (fördern sich): hohe Qualität +\nKundenzufriedenheit.\nKonkurrierend (behindern sich): niedrige Kosten +\nhohe Qualität.\nNeutral (unabhängig): Mitarbeiterschulung +\nFarbe des Firmenlogos.",
            },
            { type: "heading", value: "Übungsaufgabe 3: SMART-Kritik" },
            { type: "text", value: "Warum ist 'Wir wollen die IT verbessern' kein SMART-Ziel?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nEs ist nicht spezifisch (was genau?), nicht messbar\n(woran erkennt man Erfolg?), nicht terminiert\n(bis wann?). Besser: konkrete, messbare, terminierte\nFormulierung wie oben.",
            },
            { type: "heading", value: "Beispiel 1: SMART-Ziel im IT-Projekt" },
            {
              type: "text",
              value:
                "Statt 'Wir wollen schnelleres Internet': 'Bis zum 30.06. wird die Internetbandbreite von 50 Mbit/s auf 250 Mbit/s erhöht, um die Upload-Zeiten für Kundendaten um 80% zu reduzieren.' – Spezifisch (Bandbreite), Messbar (250 Mbit/s), Attraktiv (bessere Kundenzufriedenheit), Realistisch (technisch machbar), Terminiert (30.06.).",
            },
            { type: "heading", value: "Beispiel 2: Zielkonflikte erkennen" },
            {
              type: "text",
              value:
                "Ein IT-Unternehmen will gleichzeitig die Kosten senken und die Mitarbeiterzufriedenheit erhöhen. Kostenreduktion könnte bedeuten: weniger Fortbildungen, günstigere Hardware, Personalabbau – alles konträr zur Mitarbeiterzufriedenheit. Lösung: Priorisierung und Kompromiss, z.B. Kosten bei Hardware senken (Leasing statt Kauf), aber Fortbildungsbudget beibehalten.",
            },
            { type: "heading", value: "Beispiel 3: Leitbild eines IT-Systemhauses" },
            {
              type: "text",
              value:
                "Vision: 'Wir sind der führende IT-Partner für den Mittelstand in Norddeutschland.' Mission: 'Wir liefern zuverlässige IT-Lösungen mit persönlicher Beratung.' Daraus abgeleitete Ziele: Strategisch (5J): Marktanteil auf 15% erhöhen. Taktisch (1J): 50 Neukunden gewinnen. Operativ (Quartal): Reaktionszeit im Support auf unter 2 Stunden senken.",
            },
          ],
          quiz: [
            {
              id: "imp_lf1-uz-1_0",
              q: "'M' in SMART?",
              options: ["Monetär", "Messbar", "Motivierend", "Machbar"],
              correct: 1,
              explain: "Messbar – mit Kennzahlen überprüfbar.",
            },
            {
              id: "imp_lf1-uz-1_1",
              q: "Komplementäre Ziele?",
              options: [
                "Sind unabhängig",
                "Unterstützen sich gegenseitig",
                "Widersprechen sich",
                "Gibt es nicht",
              ],
              correct: 1,
              explain: "Komplementär = ein Ziel fördert das andere.",
            },
            {
              id: "imp_lf1-uz-1_2",
              q: "Zielkonflikt-Beispiel?",
              options: [
                "Marketing + Vertrieb",
                "Niedrige Kosten + hohe Löhne",
                "Umsatz + Gewinn",
                "Qualität + Kundenzufriedenheit",
              ],
              correct: 1,
              explain: "Niedrige Kosten vs. hohe Löhne – beides gleichzeitig schwierig.",
            },
            {
              id: "imp_lf1-uz-1_3",
              q: "SMART: Was fehlt? 'Umsatz steigern.'",
              options: ["Alles vorhanden", "Spezifisch", "Attraktiv", "Messbar + Terminiert"],
              correct: 3,
              explain: "Nicht messbar (um wie viel?) und nicht terminiert (bis wann?).",
            },
            {
              id: "imp_lf1-uz-1_4",
              q: "Indifferente Ziele?",
              options: [
                "Unterstützen sich",
                "Widersprechen sich",
                "Gibt es nicht",
                "Sind voneinander unabhängig",
              ],
              correct: 3,
              explain: "Indifferent = Ziele beeinflussen sich nicht gegenseitig.",
            },
            {
              id: "imp_lf1-uz-1_5",
              q: "Ökologisches Unternehmensziel?",
              options: [
                "Mehr Mitarbeiter",
                "Max. Gewinn",
                "Höherer Marktanteil",
                "CO2-Reduktion, Green IT",
              ],
              correct: 3,
              explain: "Ökologisch: Umwelt und Nachhaltigkeit.",
            },
            {
              id: "imp_lf1-uz-1_6",
              q: "Strategisches Ziel?",
              options: [
                "E-Mail beantworten",
                "In 5J Marktführer",
                "Drucker kaufen",
                "Umsatz Q3 +10%",
              ],
              correct: 1,
              explain: "Langfristig 3-5 Jahre.",
            },
            {
              id: "imp_lf1-uz-1_7",
              q: "Operatives Ziel?",
              options: ["Konkret, kurzfristig, messbar", "Immer gleich", "Vision", "Nur für Chefs"],
              correct: 0,
              explain: "Operativ = kurzfristig.",
            },
            {
              id: "imp_lf1-uz-1_8",
              q: "Zielkonflikt lösen?",
              options: ["Gar nicht", "Ignorieren", "Priorisieren, Kompromiss", "Aufgeben"],
              correct: 2,
              explain: "Abwägung nötig.",
            },
            {
              id: "imp_lf1-uz-1_9",
              q: "Leitbild?",
              options: [
                "Orientierung für MA + Außenwirkung",
                "Nur intern",
                "Nur extern",
                "Marketing",
              ],
              correct: 0,
              explain: "Werte und Richtung.",
            },
            {
              id: "imp_lf1-uz-1_10",
              q: "Wofür steht das R in SMART?",
              options: ["Reproduzierbar", "Relevant", "Reaktiv", "Realistisch (erreichbar)"],
              correct: 3,
              explain:
                "R = Realistisch/erreichbar: Das Ziel muss mit vorhandenen Ressourcen machbar sein.",
            },
            {
              id: "imp_lf1-uz-1_11",
              q: "Was ist ein operatives Ziel?",
              options: [
                "Kurzfristiges, konkretes Tagesziel",
                "Gesellschaftliches Ziel",
                "Vision des Unternehmens",
                "Langfristiges Unternehmensziel",
              ],
              correct: 0,
              explain: "Operativ = kurzfristig, konkret, direkt umsetzbar (Tage/Wochen).",
            },
            {
              id: "imp_lf1-uz-1_12",
              q: "Wie nennt man Ziele, die sich gegenseitig ausschließen?",
              options: [
                "Komplementäre Ziele",
                "Identische Ziele",
                "Konkurrierende Ziele (Zielkonflikt)",
                "Indifferente Ziele",
              ],
              correct: 2,
              explain:
                "Konkurrierende Ziele widersprechen sich – z.B. Kosten senken UND Qualität steigern.",
            },
            {
              id: "imp_lf1-uz-1_13",
              q: "Was ist ein Beispiel für komplementäre Ziele?",
              options: [
                "Kosten senken + Gehälter erhöhen",
                "Wachstum + Personalabbau",
                "Gewinn + Spenden erhöhen",
                "Kundenzufriedenheit + Qualität steigern",
              ],
              correct: 3,
              explain:
                "Komplementär: Ziele unterstützen sich gegenseitig. Bessere Qualität führt oft zu höherer Kundenzufriedenheit.",
            },
            {
              id: "imp_lf1-uz-1_14",
              q: "Welches ist ein ökologisches Unternehmensziel?",
              options: [
                "Marktführerschaft",
                "Maximaler Gewinn",
                "Mehr Mitarbeiter einstellen",
                "CO2-Reduktion durch Green IT",
              ],
              correct: 3,
              explain: "Ökologisch: Umweltschutz, Nachhaltigkeit, z.B. Green IT, Energieeffizienz.",
            },
            {
              id: "imp_lf1-uz-1_15",
              q: "Was ist der Unterschied zwischen Vision und Leitbild?",
              options: [
                "Es gibt keinen Unterschied; beide Begriffe werden völlig gleichbedeutend verwendet",
                "Die Vision ist konkreter und detaillierter ausformuliert als das Leitbild",
                "Vision = Zukunftsbild, Leitbild = Vision + Werte + Verhaltensregeln",
                "Das Leitbild ist nur eine kurzfristige Jahresplanung ohne Bezug zu Werten",
              ],
              correct: 2,
              explain:
                "Das Leitbild umfasst Vision, Mission und Werte – es ist umfassender als die Vision allein.",
            },
            {
              id: "imp_lf1-uz-1_16",
              q: "Welches Ziel ist NICHT SMART formuliert?",
              options: [
                "Umsatz Q3 um 10% steigern",
                "Besser werden",
                "Bis 31.12. 5 neue Kunden gewinnen",
                "Serverausfallzeit auf unter 1% senken",
              ],
              correct: 1,
              explain: "'Besser werden' ist nicht spezifisch, nicht messbar, nicht terminiert.",
            },
            {
              id: "imp_lf1-uz-1_17",
              q: "Wer formuliert strategische Unternehmensziele?",
              options: [
                "Die Geschäftsführung / Vorstand",
                "Der Betriebsrat",
                "Die IHK",
                "Jeder Mitarbeiter",
              ],
              correct: 0,
              explain: "Strategische Ziele kommen von der Unternehmensführung (Top-Down).",
            },
            {
              id: "imp_lf1-uz-1_18",
              q: "Was sind soziale Unternehmensziele?",
              options: [
                "Marktanteile erhöhen und Wettbewerber verdrängen",
                "Steuerlast durch Gestaltung konsequent minimieren",
                "Faire Löhne, Weiterbildung, Work-Life-Balance",
                "Maximaler Gewinn und hohe Eigenkapitalrendite",
              ],
              correct: 2,
              explain:
                "Soziale Ziele betreffen Mitarbeiter: faire Arbeitsbedingungen, Gesundheitsschutz, Fortbildung.",
            },
            {
              id: "imp_lf1-uz-1_19",
              q: "In welcher Reihenfolge werden Ziele abgeleitet?",
              options: [
                "Operativ → Strategisch → Taktisch",
                "Operativ → Taktisch → Strategisch",
                "Alle gleichzeitig",
                "Strategisch → Taktisch → Operativ",
              ],
              correct: 3,
              explain:
                "Top-Down: Strategisch (langfristig) → Taktisch (mittelfristig) → Operativ (kurzfristig).",
            },
          ],
        },
        {
          id: "lf1-uz-2",
          title: "Angebotsvergleich & Nutzwertanalyse",
          content: [
            { type: "heading", value: "Quantitativer Angebotsvergleich (Bezugspreis)" },
            {
              type: "text",
              value:
                "Listeneinkaufspreis - Rabatt = Zieleinkaufspreis - Skonto = Bareinkaufspreis + Bezugskosten = Bezugspreis (Einstandspreis). Skonto wird vom ZEP berechnet, NICHT vom Listenpreis! Günstigster Bezugspreis = bestes Angebot bei rein preislicher Betrachtung.",
            },
            { type: "heading", value: "Nutzwertanalyse (NWA) – Schritt für Schritt" },
            {
              type: "text",
              value:
                "1) Kriterien festlegen (z.B. Preis, Liefertreue, Service, Qualität, Umwelt). 2) Gewichten (Summe = 100%, z.B. Preis 30%, Qualität 25%). 3) Jede Alternative pro Kriterium bewerten (Skala 1-10 oder 1-4). 4) Gewichtete Punkte berechnen: Bewertung x Gewichtung. 5) Summieren: Höchster Gesamtnutzwert = beste Wahl.",
            },
            { type: "heading", value: "NWA-Rechenbeispiel (Serverauswahl)" },
            {
              type: "text",
              value:
                "Kriterien: Preis (40%), Performance (30%), Support (20%), Energieeffizienz (10%). Server A: 8x0,4 + 6x0,3 + 7x0,2 + 9x0,1 = 3,2+1,8+1,4+0,9 = 7,3. Server B: 6x0,4 + 9x0,3 + 8x0,2 + 7x0,1 = 2,4+2,7+1,6+0,7 = 7,4. Server B gewinnt knapp (7,4 vs. 7,3) trotz höherem Preis, weil Performance und Support besser sind.",
            },
            {
              type: "note",
              value:
                "NWA kommt in AP1 fast immer vor! Gewichtung als Dezimalzahl (0,4) oder Prozent (40%) – Ergebnis identisch.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Nutzwertanalyse" },
            {
              type: "text",
              value:
                "Zwei Angebote, Kriterien Preis (50%), Leistung (30%), Support (20%), Noten 1-10. A: 7/6/8. B: 5/9/7. Wer gewinnt?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nA: 7x0,5 + 6x0,3 + 8x0,2 = 3,5+1,8+1,6 = 6,9\nB: 5x0,5 + 9x0,3 + 7x0,2 = 2,5+2,7+1,4 = 6,6\n-> Angebot A gewinnt (6,9 > 6,6)",
            },
            { type: "heading", value: "Übungsaufgabe 2: Gewichtung" },
            {
              type: "text",
              value: "Warum müssen die Gewichtungen in der NWA zusammen 100% ergeben?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nDamit die Nutzwerte vergleichbar und fair gewichtet\nsind. Ergäbe die Summe nicht 100%, wären die\nKriterien über- oder untergewichtet und das\nGesamtergebnis verzerrt. 100% = vollständige,\nnormierte Bewertung.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Grenzen" },
            { type: "text", value: "Nenne eine Schwäche der Nutzwertanalyse." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nDie Bewertung ist subjektiv: Gewichtung und Noten\nwerden von Menschen festgelegt und können das\nErgebnis gezielt beeinflussen. Außerdem werden\nharte Fakten (Preis) und weiche Kriterien (Sympathie)\nvermischt. Sie ist ein Entscheidungshilfe-Werkzeug,\nkein objektiver Beweis.",
            },
            { type: "heading", value: "Beispiel 1: Quantitativer Angebotsvergleich Server" },
            {
              type: "text",
              value:
                "Drei Angebote für einen Server: A: LP 5.000 EUR, 10% Rabatt, 2% Skonto. B: LP 4.800 EUR, 5% Rabatt, 3% Skonto. C: LP 4.500 EUR, kein Rabatt, kein Skonto. Berechnung Bezugspreis A: 5.000 - 500 (Rabatt) = 4.500 - 90 (Skonto) = 4.410 EUR. B: 4.800 - 240 = 4.560 - 136,80 = 4.423,20 EUR. C: 4.500 EUR. Günstigster Bezugspreis: Angebot A mit 4.410 EUR.",
            },
            { type: "heading", value: "Beispiel 2: Nutzwertanalyse Druckerauswahl (AP1-typisch)" },
            {
              type: "text",
              value:
                "Drei Drucker werden nach 4 Kriterien bewertet (Punkte 1-3, 3=beste): Druckgeschwindigkeit: A=2, B=3, C=2. Scangeschwindigkeit: A=1, B=3, C=2. Wartungskosten: A=1, B=3, C=2. Preis: A=1, B=2, C=3. Ergebnis: A=5, B=11, C=9. Gewählt wird Drucker B mit der höchsten Gesamtpunktzahl. Die NWA berücksichtigt anders als der reine Preisvergleich auch qualitative Faktoren.",
            },
            { type: "heading", value: "Beispiel 3: Gewichtete Nutzwertanalyse" },
            {
              type: "text",
              value:
                "Notebook-Auswahl mit Gewichtung: Performance (40%), Preis (30%), Akkulaufzeit (20%), Gewicht (10%). Notebook X: 8×0,4 + 6×0,3 + 7×0,2 + 5×0,1 = 3,2 + 1,8 + 1,4 + 0,5 = 6,9. Notebook Y: 6×0,4 + 9×0,3 + 8×0,2 + 7×0,1 = 2,4 + 2,7 + 1,6 + 0,7 = 7,4. Notebook Y gewinnt trotz schwächerer Performance, weil Preis und Akku überzeugen.",
            },
          ],
          quiz: [
            {
              id: "imp_lf1-uz-2_0",
              q: "Reihenfolge Bezugspreis?",
              options: [
                "LP - Rabatt - Skonto + Bezugskosten",
                "LP x Rabatt / Skonto",
                "Netto + MwSt",
                "LP + Rabatt - Skonto",
              ],
              correct: 0,
              explain: "LP - Rabatt = ZEP - Skonto = BEP + Bezugskosten = Bezugspreis.",
            },
            {
              id: "imp_lf1-uz-2_1",
              q: "NWA: Bewertung 8, Gewichtung 25%?",
              options: ["33", "2,0", "8", "25"],
              correct: 1,
              explain: "8 x 0,25 = 2,0 gewichtete Punkte.",
            },
            {
              id: "imp_lf1-uz-2_2",
              q: "NWA-Ergebnis: Wer gewinnt?",
              options: ["Höchster Gesamtnutzwert", "Billigster", "Niedrigster Wert", "Teuerster"],
              correct: 0,
              explain: "Höchster Gesamtnutzwert = beste Alternative.",
            },
            {
              id: "imp_lf1-uz-2_3",
              q: "NWA: Gewichtung 40%, Bewertung 7?",
              options: ["47", "2,8", "28", "11,4"],
              correct: 1,
              explain: "0,40 x 7 = 2,8 gewichtete Punkte.",
            },
            {
              id: "imp_lf1-uz-2_4",
              q: "Quantitativer Vergleich berücksichtigt?",
              options: [
                "Nur Lieferzeit",
                "Nur Preis/Kosten",
                "Alles gleichwertig",
                "Auch Service und Qualität",
              ],
              correct: 1,
              explain: "Quantitativ = nur Zahlen (Bezugspreis). Qualitativ = NWA.",
            },
            {
              id: "imp_lf1-uz-2_5",
              q: "Skonto vom ZEP, nicht LP! Warum?",
              options: [
                "Skonto gilt nur für Neukunden",
                "Rabatt wurde bereits abgezogen",
                "Ist egal",
                "LP enthält MwSt",
              ],
              correct: 1,
              explain: "Erst Rabatt abziehen = ZEP, dann Skonto vom reduzierten Betrag.",
            },
            {
              id: "imp_lf1-uz-2_6",
              q: "NWA Gewichtung gesamt?",
              options: ["100%", "200%", "50%", "Egal"],
              correct: 0,
              explain: "Muss 100% ergeben.",
            },
            {
              id: "imp_lf1-uz-2_7",
              q: "Bezugspreis = ?",
              options: ["Netto", "Einstandspreis", "Verkaufspreis", "Listenpreis"],
              correct: 1,
              explain: "Was Ware wirklich kostet.",
            },
            {
              id: "imp_lf1-uz-2_8",
              q: "Qualitativer Vergleich?",
              options: ["Nur Preis", "Nur Marke", "NWA: Service, Qualität etc.", "Nur Zeit"],
              correct: 2,
              explain: "Nicht-preisliche Faktoren.",
            },
            {
              id: "imp_lf1-uz-2_9",
              q: "LP 1000, 20% Rabatt: ZEP?",
              options: ["980", "800", "784", "1000"],
              correct: 1,
              explain: "1000-20%=800 EUR.",
            },
            {
              id: "imp_lf1-uz-2_10",
              q: "Wie lautet die Formel für den Bezugspreis?",
              options: [
                "Listenpreis x Rabatt / Skonto",
                "Listenpreis − Rabatt − Skonto + Bezugskosten",
                "Netto + MwSt",
                "Listenpreis + Rabatt",
              ],
              correct: 1,
              explain:
                "Bezugspreis = Listenpreis − Rabatt (= Zieleinkaufspreis) − Skonto (= Bareinkaufspreis) + Bezugskosten (Transport, Versicherung).",
            },
            {
              id: "imp_lf1-uz-2_11",
              q: "Was berücksichtigt die NWA gegenüber dem reinen Preisvergleich?",
              options: [
                "Auch qualitative Faktoren wie Service und Qualität",
                "Ausschließlich den Markennamen des Herstellers",
                "Ausschließlich den Angebotspreis der Alternativen",
                "Ausschließlich die zugesagte Lieferzeit der Anbieter",
              ],
              correct: 0,
              explain:
                "NWA bewertet auch nicht-monetäre Kriterien wie Qualität, Service, Lieferzeit.",
            },
            {
              id: "imp_lf1-uz-2_12",
              q: "Welches Angebot wählt man bei der NWA?",
              options: [
                "Das teuerste",
                "Das mit den meisten Kriterien",
                "Das billigste",
                "Das mit dem höchsten Gesamtnutzwert",
              ],
              correct: 3,
              explain: "Gewählt wird das Angebot mit der höchsten Gesamtpunktzahl.",
            },
            {
              id: "imp_lf1-uz-2_13",
              q: "Was ist Skonto?",
              options: [
                "Versandkosten",
                "Mengenrabatt",
                "Umsatzsteuer",
                "Preisnachlass bei schneller Zahlung",
              ],
              correct: 3,
              explain:
                "Skonto = Preisnachlass für Zahlung innerhalb einer kurzen Frist (z.B. 2% bei Zahlung innerhalb 10 Tagen).",
            },
            {
              id: "imp_lf1-uz-2_14",
              q: "In welcher Reihenfolge wird Rabatt und Skonto abgezogen?",
              options: [
                "Die Reihenfolge spielt keine Rolle und ist kaufmännisch nicht geregelt",
                "Erst Skonto vom Listenpreis, dann Rabatt vom Restbetrag",
                "Erst Rabatt, dann Skonto vom reduzierten Betrag",
                "Beide Prozentsätze werden addiert und in einem Schritt abgezogen",
              ],
              correct: 2,
              explain: "Immer: Erst Rabatt vom Listenpreis, dann Skonto vom Zieleinkaufspreis.",
            },
            {
              id: "imp_lf1-uz-2_15",
              q: "Was bedeutet eine Gewichtung von 40% bei der NWA?",
              options: [
                "In der Vorauswahl werden 40 % der Angebote aussortiert",
                "Der Anbieter gewährt 40 % Rabatt auf den Listenpreis",
                "Das Kriterium hat den größten Einfluss auf das Ergebnis",
                "Das Kriterium fällt mit geringem Gewicht kaum ins Gewicht",
              ],
              correct: 2,
              explain: "40% Gewichtung = dieses Kriterium bestimmt 40% des Gesamtergebnisses.",
            },
            {
              id: "imp_lf1-uz-2_16",
              q: "Was ist der Zieleinkaufspreis?",
              options: ["Listenpreis minus Rabatt", "Verkaufspreis", "Bezugspreis", "Listenpreis"],
              correct: 0,
              explain: "Zieleinkaufspreis = Listenpreis - Rabatt (vor Skonto-Abzug).",
            },
            {
              id: "imp_lf1-uz-2_17",
              q: "Welche Summe aller Gewichtungen muss bei der NWA gelten?",
              options: ["100%", "200%", "Beliebig", "50%"],
              correct: 0,
              explain: "Alle Gewichtungen müssen zusammen genau 100% ergeben.",
            },
            {
              id: "imp_lf1-uz-2_18",
              q: "Was ist der Einstandspreis?",
              options: [
                "Listenpreis minus Rabatt, ohne Skonto und Bezugskosten",
                "Der Verkaufspreis, den der Kunde am Ende zahlt",
                "Bezugspreis (= was die Ware insgesamt kostet)",
                "Der Netto-Listenpreis ohne jegliche Abzüge",
              ],
              correct: 2,
              explain:
                "Einstandspreis = Bezugspreis = Gesamtkosten bis zur Verfügbarkeit im eigenen Lager.",
            },
            {
              id: "imp_lf1-uz-2_19",
              q: "LP 2.000 EUR, 15% Rabatt, 3% Skonto. Wie hoch ist der Bareinkaufspreis?",
              options: ["1.640,00 EUR", "1.649,00 EUR", "1.750,00 EUR", "1.700,00 EUR"],
              correct: 1,
              explain: "2.000 - 300 (15% Rabatt) = 1.700 - 51 (3% Skonto) = 1.649,00 EUR.",
            },
          ],
        },
      ],
    },
    {
      id: "lf1-org",
      title: "Organisation & Wertschöpfung",
      lessons: [
        {
          id: "lf1-org-1",
          title: "Aufbauorganisation & Vollmachten",
          content: [
            { type: "heading", value: "Aufbauorganisation" },
            {
              type: "text",
              value:
                "Zeigt die hierarchische Gliederung eines Unternehmens im Organigramm. Leitungssysteme: Einliniensystem (jeder hat genau einen Vorgesetzten, klare Zuständigkeit), Mehrliniensystem (mehrere Vorgesetzte möglich, schnellere Kommunikation), Stabliniensystem (Stabsstellen beraten, aber keine Weisungsbefugnis). Abteilungsbildung nach: Funktion (IT, Vertrieb, HR), Produkt (Software, Hardware), Region (Nord, Süd) oder Kunden (Privat, Geschäft).",
            },
            { type: "heading", value: "Vollmachten" },
            {
              type: "text",
              value:
                "Handlungsvollmacht: Beschränkt auf bestimmte Geschäfte (z.B. Einkauf bis 5.000 EUR). Prokura: Weitreichende Vollmacht für fast alle Geschäfte, eingetragen im Handelsregister. Ausnahmen: Grundstücke, Insolvenz. Einzelprokura vs. Gesamtprokura (nur gemeinsam).",
            },
            { type: "heading", value: "Wertschöpfungskette" },
            {
              type: "text",
              value:
                "Beschreibt alle Aktivitäten von der Beschaffung bis zum Kunden. Primäre Aktivitäten: Eingangslogistik, Produktion/Leistungserstellung, Ausgangslogistik, Marketing/Vertrieb, Kundendienst. Unterstützende Aktivitäten: Unternehmensinfrastruktur, Personalmanagement, Technologieentwicklung, Beschaffung. IT-Unternehmen: Kundenberatung -> Planung -> Implementierung -> Test -> Übergabe -> Support.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Vollmachten" },
            { type: "text", value: "Was darf ein Prokurist, was nicht?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nProkura (§§ 48, 49 HGB): umfasst alle gewöhnlichen UND\naußergewöhnlichen Geschäfte eines Handelsgewerbes.\nDARF NICHT: Grundstücke verkaufen/belasten (ohne\nbesondere Befugnis), das Unternehmen einstellen,\nProkura erteilen, Bilanz unterzeichnen, Insolvenz\nanmelden. Eintrag ins Handelsregister.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Organigramm" },
            { type: "text", value: "Was zeigt ein Organigramm und was ist ein Einliniensystem?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nOrganigramm: stellt die Aufbauorganisation grafisch\ndar (Stellen, Abteilungen, Weisungswege).\nEinliniensystem: jede Stelle hat genau EINEN\nVorgesetzten - klare Weisung, aber langer Dienstweg.\nMehrliniensystem: mehrere Vorgesetzte (z.B. fachlich\n+ disziplinarisch) - kürzere Wege, aber Konfliktrisiko.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Handlungsvollmacht" },
            { type: "text", value: "Unterschied Prokura und Handlungsvollmacht?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nProkura: weitreichend, gesetzlich geregelt (§48 HGB),\nins Handelsregister eingetragen.\nHandlungsvollmacht (§54 HGB): enger, nur die\nbranchenüblichen Geschäfte, NICHT im Handelsregister\neingetragen. Beispiel: Einkäufer darf Waren bestellen.",
            },
            {
              type: "heading",
              value: "Beispiel 1: Einlinien- vs. Matrixorganisation im IT-Unternehmen",
            },
            {
              type: "text",
              value:
                "Kleines Systemhaus (20 MA): Einliniensystem – jeder MA hat genau einen Vorgesetzten (Teamleiter → Abteilungsleiter → GF). Klare Zuständigkeiten, aber lange Entscheidungswege. Großes IT-Beratungshaus (500 MA): Matrixorganisation – Entwickler berichtet an Fachvorgesetzten (z.B. Leiter Java) UND an Projektleiter. Schnellere Projektzuordnung, aber Gefahr von Konflikten bei widersprüchlichen Anweisungen.",
            },
            { type: "heading", value: "Beispiel 2: Prokura vs. Handlungsvollmacht im Alltag" },
            {
              type: "text",
              value:
                "Der Prokurist des IT-Unternehmens darf: Server im Wert von 200.000 EUR bestellen, Mietvertrag für neues Büro unterschreiben, Mitarbeiter einstellen. Er darf NICHT: Grundstück des Unternehmens verkaufen, Unternehmen auflösen. Der Mitarbeiter mit Handlungsvollmacht darf: übliche Bestellungen im Namen der Firma ausführen, Angebote annehmen. Er darf NICHT: große Verträge schließen oder Personal einstellen.",
            },
            { type: "heading", value: "Beispiel 3: Stabliniensystem beim IT-Dienstleister" },
            {
              type: "text",
              value:
                "Die GF hat einen Stabsmitarbeiter für Qualitätsmanagement und einen für Datenschutz. Diese beraten die GF, können aber selbst keine Anweisungen an Abteilungen geben. Vorteil: Entlastung der Linienvorgesetzten durch Spezialwissen. Nachteil: Stabsstellen fühlen sich manchmal übergangen, weil ihre Empfehlungen nicht bindend sind.",
            },
          ],
          quiz: [
            {
              id: "imp_lf1-org-1_0",
              q: "Einliniensystem bedeutet?",
              options: [
                "Keine Hierarchie",
                "Mehrere Vorgesetzte",
                "Nur horizontale Kommunikation",
                "Genau ein Vorgesetzter pro Mitarbeiter",
              ],
              correct: 3,
              explain: "Einliniensystem: Jeder Mitarbeiter hat genau einen Vorgesetzten.",
            },
            {
              id: "imp_lf1-org-1_1",
              q: "Prokura ist eingetragen im?",
              options: ["Grundbuch", "Vereinsregister", "Handelsregister", "Schuldnerverzeichnis"],
              correct: 2,
              explain: "Prokura wird im Handelsregister eingetragen.",
            },
            {
              id: "imp_lf1-org-1_2",
              q: "Was gehört NICHT zu primären Aktivitäten der Wertschöpfungskette?",
              options: ["Produktion", "Kundendienst", "Marketing", "Personalmanagement"],
              correct: 3,
              explain: "Personalmanagement ist eine unterstützende Aktivität.",
            },
            {
              id: "imp_lf1-org-1_3",
              q: "Stabliniensystem?",
              options: [
                "Jeder Mitarbeiter berichtet direkt an jede andere Stelle",
                "Mitarbeiter unterstehen zwei gleichberechtigten Weisungsdimensionen",
                "Jede Stelle erhält Weisungen von genau einer Instanz, ohne Stäbe",
                "Stabstellen beraten die Linie ohne Weisungsbefugnis",
              ],
              correct: 3,
              explain:
                "Stabstellen (z.B. IT-Sicherheitsbeauftragter) beraten, haben aber keine Weisungsbefugnis.",
            },
            {
              id: "imp_lf1-org-1_4",
              q: "Handlungsvollmacht §54 HGB?",
              options: [
                "Identisch mit der Prokura inklusive Grundstücksgeschäften",
                "Ausschließlich den Kauf und Verkauf von Grundstücken",
                "Unbeschränkte Vertretung in allen denkbaren Geschäften",
                "Branchenübliche Geschäfte eines Handlungsgehilfen",
              ],
              correct: 3,
              explain:
                "Branchenübliche Geschäfte, keine außergewöhnlichen (kein Grundstück, kein Kredit).",
            },
            {
              id: "imp_lf1-org-1_5",
              q: "Wertschöpfungskette nach Porter?",
              options: [
                "Primäre (Logistik, Produktion, Vertrieb) + Unterstützende",
                "Nur die Finanzprozesse von Buchhaltung bis Controlling",
                "Nur die Produktion vom Rohstoff bis zum Fertigprodukt",
                "Nur Marketingaktivitäten entlang der Customer Journey",
              ],
              correct: 0,
              explain:
                "IT, HR, Beschaffung. Primäre + unterstützende Aktivitäten, die Wert schaffen.",
            },
            {
              id: "imp_lf1-org-1_6",
              q: "Einliniensystem?",
              options: [
                "Jeder hat genau einen Vorgesetzten",
                "Jeder hat mehrere Vorgesetzte",
                "Keine Hierarchie",
                "Matrix",
              ],
              correct: 0,
              explain: "Einliniensystem: Klare Befehlskette, ein Vorgesetzter.",
            },
            {
              id: "imp_lf1-org-1_7",
              q: "Prokura (§48 HGB)?",
              options: [
                "Fast unbeschränkt",
                "Wie Handlungsvollmacht",
                "Nur Bestellungen",
                "Eingeschränkt",
              ],
              correct: 0,
              explain: "Prokura: sehr umfassend, nur Grundstücksverkauf/-belastung ausgeschlossen.",
            },
            {
              id: "imp_lf1-org-1_8",
              q: "Mehrliniensystem?",
              options: [
                "Nur Stab",
                "Keine Hierarchie",
                "1 Vorgesetzter",
                "Mehrere Vorgesetzte pro Mitarbeiter",
              ],
              correct: 3,
              explain: "Mitarbeiter hat mehrere fachliche Vorgesetzte.",
            },
            {
              id: "imp_lf1-org-1_9",
              q: "Matrixorganisation?",
              options: [
                "Nur Projekt",
                "Einlinie",
                "Keine Struktur",
                "Kombination Funktional + Produkt/Projekt",
              ],
              correct: 3,
              explain: "Zwei Dimensionen: Funktion UND Projekt/Produkt.",
            },
            {
              id: "imp_lf1-org-1_10",
              q: "Was ist das Merkmal des Mehrliniensystems?",
              options: [
                "Nur Stabstellen",
                "Ein Vorgesetzter pro Mitarbeiter",
                "Keine Hierarchie",
                "Mehrere Vorgesetzte pro Mitarbeiter",
              ],
              correct: 3,
              explain:
                "Mehrliniensystem: MA erhält Weisungen von mehreren Vorgesetzten (schnelle Fachwege, aber Kompetenzüberschneidungen).",
            },
            {
              id: "imp_lf1-org-1_11",
              q: "Was darf ein Prokurist NICHT?",
              options: [
                "Verträge schließen",
                "Grundstücke verkaufen",
                "Kredite aufnehmen",
                "Mitarbeiter einstellen",
              ],
              correct: 1,
              explain:
                "Prokura umfasst fast alles AUSSER Grundstücksgeschäfte und Unternehmensauflösung.",
            },
            {
              id: "imp_lf1-org-1_12",
              q: "Wie wird eine Prokura erteilt?",
              options: [
                "Durch die IHK nach bestandener Sachkundeprüfung",
                "Durch Eintrag ins Handelsregister nach Erteilung durch Inhaber",
                "Formlos mündlich durch beliebige Mitarbeiter",
                "Automatisch nach fünf Jahren Betriebszugehörigkeit",
              ],
              correct: 1,
              explain:
                "Prokura wird vom Inhaber/GF erteilt und ins HR eingetragen. HR-Eintrag ist deklaratorisch (Wirkung ab Erteilung).",
            },
            {
              id: "imp_lf1-org-1_13",
              q: "Was kennzeichnet eine Stabstelle?",
              options: [
                "Sie hat Weisungsbefugnis",
                "Sie ist hierarchisch über den Abteilungen",
                "Sie ersetzt den Vorgesetzten",
                "Sie berät ohne Weisungsbefugnis",
              ],
              correct: 3,
              explain:
                "Stabstellen beraten die Linie, können aber selbst keine Weisungen erteilen.",
            },
            {
              id: "imp_lf1-org-1_14",
              q: "Welches Organigramm zeigt die Aufbauorganisation?",
              options: [
                "Gantt-Diagramm",
                "UML-Diagramm",
                "Strukturdiagramm mit Hierarchieebenen",
                "Netzplan",
              ],
              correct: 2,
              explain:
                "Die Aufbauorganisation wird in einem Organigramm (Strukturdiagramm) dargestellt.",
            },
            {
              id: "imp_lf1-org-1_15",
              q: "Was ist die Abteilungsbildung nach Verrichtung?",
              options: [
                "Abteilungen nach Region",
                "Abteilungen nach Produkten",
                "Abteilungen nach Tätigkeit",
                "Abteilungen nach Kunden",
              ],
              correct: 2,
              explain:
                "Einkauf, Vertrieb, IT. Verrichtungsprinzip = gleiche Tätigkeiten zusammen (funktionale Organisation).",
            },
            {
              id: "imp_lf1-org-1_16",
              q: "Welche Vollmacht ist am stärksten?",
              options: ["Artvollmacht", "Einzelvollmacht", "Prokura", "Handlungsvollmacht"],
              correct: 2,
              explain: "Prokura ist die umfassendste handelsrechtliche Vollmacht (§48 HGB).",
            },
            {
              id: "imp_lf1-org-1_17",
              q: "Was unterscheidet Aufbau- von Ablauforganisation?",
              options: [
                "Aufbau = Struktur/Hierarchie, Ablauf = Prozesse/Reihenfolge",
                "Aufbau = kleine Betriebe, Ablauf = große Konzernstrukturen",
                "Aufbau = temporäre Projekte, Ablauf = permanente Abteilungen",
                "Kein Unterschied, beide Begriffe sind Synonyme",
              ],
              correct: 0,
              explain:
                "Aufbauorganisation: Wer macht was? (Stellen, Abteilungen). Ablauforganisation: Wie wird es gemacht? (Prozesse, Reihenfolge).",
            },
            {
              id: "imp_lf1-org-1_18",
              q: "Welche Organisationsform eignet sich für Projektarbeit?",
              options: ["Einmannbetrieb", "Matrixorganisation", "Einliniensystem", "Spartensystem"],
              correct: 1,
              explain:
                "Matrixorganisation: MA können flexibel Projekten zugeordnet werden (Fach- + Projektleitung).",
            },
            {
              id: "imp_lf1-org-1_19",
              q: "Was bedeutet 'Leitungsspanne'?",
              options: [
                "Die Gehaltsspanne zwischen unterster und oberster Führungskraft",
                "Anzahl der direkt unterstellten Mitarbeiter eines Vorgesetzten",
                "Die maximale Zeitspanne für Entscheidungen einer Führungskraft",
                "Die Anzahl der Hierarchieebenen vom Vorstand bis zur Basis",
              ],
              correct: 1,
              explain:
                "Leitungsspanne = Anzahl MA, die einem Vorgesetzten direkt unterstellt sind.",
            },
          ],
        },
      ],
    },
    {
      id: "lf1-it",
      title: "IT-Berufe & Branche",
      lessons: [
        {
          id: "lf1-it-1",
          title: "IT-Berufsbilder (AO 2020)",
          content: [
            { type: "heading", value: "4 IT-Ausbildungsberufe (Neuordnung 2020)" },
            {
              type: "text",
              value:
                "Fachinformatiker/in mit 4 Fachrichtungen: Systemintegration (SI): IT-Infrastruktur planen, installieren, administrieren. Server, Netzwerke, Clients. Anwendungsentwicklung (AE): Software entwickeln, testen, dokumentieren. Daten- und Prozessanalyse (DuP): Daten auswerten, Prozesse optimieren. Digitale Vernetzung (DV): IoT, Industrie 4.0, cyber-physische Systeme. Alle 4 haben LF1-LF6 gemeinsam (1. Lehrjahr), danach Spezialisierung.",
            },
            { type: "heading", value: "Weitere IT-Berufe" },
            {
              type: "text",
              value:
                "IT-System-Elektroniker/in (ITSE): Hardware-nah, Elektrotechnik, Installationen, Service. Kaufleute für Digitalisierungsmanagement (KDM): Geschäftsprozesse digital gestalten, Datenanalyse, Projektmanagement. Kaufleute für IT-System-Management (KITSM): IT-Produkte vermarkten, beraten, beschaffen, Verträge gestalten.",
            },
            { type: "heading", value: "FiSi: Prüfungsstruktur" },
            {
              type: "text",
              value:
                "AP1 (nach ~18 Monaten): 20% Gesamtnote, 90 Minuten, offene handlungsorientierte Aufgaben, prüft LF1-6. AP2 (am Ende): 80% Gesamtnote, bestehend aus: Betriebliche Projektarbeit (50%): 40h reales Projekt + Dokumentation + Präsentation + Fachgespräch. Schriftlich: Konzeption/Administration (10%) + Netzwerkanalyse (10%) + WiSo (10%); dazu Projektarbeit mit Präsentation/Fachgespräch (50%). Mündliche Ergänzungsprüfung möglich bei Mangelhaft in einem schriftlichen Bereich.",
            },
            { type: "heading", value: "Übungsaufgabe 1: FiSi vs. FiAE" },
            {
              type: "text",
              value:
                "Nenne je 2 typische Tätigkeiten von Systemintegration und Anwendungsentwicklung.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nSystemintegration: Netzwerke aufbauen/administrieren,\nServer und Clients einrichten, IT-Infrastruktur\nbetreuen, Störungen beheben.\nAnwendungsentwicklung: Software programmieren,\nDatenbanken entwerfen, Anwendungen testen und\nanpassen, Schnittstellen entwickeln.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Fachrichtungen" },
            {
              type: "text",
              value: "Welche vier Fachrichtungen hat der Fachinformatiker seit der AO 2020?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. Systemintegration\n2. Anwendungsentwicklung\n3. Daten- und Prozessanalyse\n4. Digitale Vernetzung\nAlle teilen die gemeinsame AP1, unterscheiden sich\nin den Spezialisierungs-Lernfeldern und der AP2.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Prüfungsstruktur" },
            { type: "text", value: "Wie ist die gestreckte Abschlussprüfung aufgebaut?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nTeil 1 (AP1): nach ca. 18 Monaten, geht mit 20%\nin die Endnote ein.\nTeil 2 (AP2): am Ende der Ausbildung, 80% der Note.\nDie AP1 kann nicht wiederholt werden, ihr Ergebnis\nbleibt erhalten. 'Gestreckt' = über die Ausbildung\nverteilt statt einer Zwischenprüfung.",
            },
            { type: "heading", value: "Beispiel 1: FISI vs. FIAE im Projektalltag" },
            {
              type: "text",
              value:
                "Kunde braucht neue IT-Infrastruktur: Der FISI plant das Netzwerk, konfiguriert Server, richtet Active Directory ein, implementiert Backup-Konzept und VPN. Der FIAE entwickelt die firmenspezifische Branchensoftware, die auf dieser Infrastruktur läuft: Datenbank-Design, REST-API, Frontend. Beide arbeiten am selben Projekt, aber mit unterschiedlichen Schwerpunkten: FISI = Infrastruktur, FIAE = Software.",
            },
            { type: "heading", value: "Beispiel 2: Kaufmännische IT-Berufe im Vergleich" },
            {
              type: "text",
              value:
                "IT-System-Management (ITSM): Vermarktet und vertreibt IT-Dienstleistungen, berät Kunden, erstellt Angebote, plant IT-Projekte kaufmännisch. Typisch: Angebotsvergleich, Kostenrechnung, Vertragsgestaltung. Kaufleute für Digitalisierungsmanagement (KDM): Steuern die Digitalisierung des Unternehmens wirtschaftlich, analysieren und optimieren Geschäftsprozesse und Datenflüsse. Typisch: Prozessanalyse, Datenauswertung, Wirtschaftlichkeitsrechnung.",
            },
            {
              type: "heading",
              value: "Beispiel 3: Ausbildungsordnung 2020 – Was hat sich geändert?",
            },
            {
              type: "text",
              value:
                "Vor 2020: IT-Systemkaufmann und Informatikkaufmann. Nach 2020: Kaufleute für IT-System-Management und Kaufleute für Digitalisierungsmanagement. Die technischen Berufe FISI und FIAE blieben, aber die Inhalte wurden modernisiert: Cloud Computing, Datenschutz (DSGVO), agile Methoden und IT-Sicherheit wurden aufgenommen. AP1 wird gestreckt über alle Berufe hinweg einheitlich geprüft.",
            },
          ],
          quiz: [
            {
              id: "imp_lf1-it-1_0",
              q: "AP1 Gewichtung?",
              options: ["40%", "20%", "10%", "30%"],
              correct: 1,
              explain: "20% der Gesamtnote.",
            },
            {
              id: "imp_lf1-it-1_1",
              q: "FiSi = welche Fachrichtung?",
              options: [
                "Systemintegration",
                "Anwendungsentwicklung",
                "IT-System-Elektronik",
                "Digitale Vernetzung",
              ],
              correct: 0,
              explain: "Fachinformatiker Fachrichtung Systemintegration.",
            },
            {
              id: "imp_lf1-it-1_2",
              q: "LF1-LF6 sind gemeinsam für?",
              options: ["Nur FIAE", "Nur FiSi", "Alle IT-Berufe", "Alle 4 Fachinformatiker-FR"],
              correct: 3,
              explain: "LF1-6 sind für alle 4 Fachinformatiker-Fachrichtungen identisch.",
            },
            {
              id: "imp_lf1-it-1_3",
              q: "AP2 Projektarbeit: Max. Stunden?",
              options: ["40h", "20h", "70h", "35h"],
              correct: 0,
              explain: "40 Stunden für die betriebliche Projektarbeit.",
            },
            {
              id: "imp_lf1-it-1_4",
              q: "FIAE = ?",
              options: [
                "Anwendungsentwicklung",
                "Digitale Vernetzung",
                "Daten und Prozesse",
                "Systemintegration",
              ],
              correct: 0,
              explain: "Fachinformatiker Fachrichtung Anwendungsentwicklung.",
            },
            {
              id: "imp_lf1-it-1_5",
              q: "AP1 nach wie viel Monaten?",
              options: ["24", "6", "12", "~18"],
              correct: 3,
              explain: "AP1 wird nach ca. 18 Monaten abgelegt.",
            },
            {
              id: "imp_lf1-it-1_6",
              q: "KDM?",
              options: ["KITSM", "Kaufleute Digitalisierungsmanagement", "FI", "SE"],
              correct: 1,
              explain: "Geschäftsprozesse digitalisieren.",
            },
            {
              id: "imp_lf1-it-1_7",
              q: "AP1 Format?",
              options: ["Mündlich", "MC", "Offene Aufgaben", "Code"],
              correct: 2,
              explain: "Handlungsorientiert.",
            },
            {
              id: "imp_lf1-it-1_8",
              q: "ITSE?",
              options: ["Dev", "IT-System-Elektroniker", "Kaufmann", "FI"],
              correct: 1,
              explain: "Hardware, Elektro.",
            },
            {
              id: "imp_lf1-it-1_9",
              q: "LF1-6 gemeinsam?",
              options: ["Ja, alle 4 FI-FR", "Nur FiSi", "Nein", "Nur LF1-3"],
              correct: 0,
              explain: "1. LJ identisch.",
            },
            {
              id: "imp_lf1-it-1_10",
              q: "Welcher IT-Beruf hat den Schwerpunkt Server, Clients und Unternehmens-Netzwerkinfrastruktur?",
              options: [
                "Fachinformatiker Daten- und Prozessanalyse",
                "FISI",
                "FIAE",
                "Kaufmann für IT-System-Management",
              ],
              correct: 1,
              explain:
                "FISI = Fachinformatiker Systemintegration: plant, betreibt und sichert Netzwerke, Server und Clients im Unternehmen.",
            },
            {
              id: "imp_lf1-it-1_11",
              q: "Wann trat die aktuelle Ausbildungsordnung für IT-Berufe in Kraft?",
              options: ["2015", "2023", "2020", "2018"],
              correct: 2,
              explain: "AO 2020: Neue Bezeichnungen und modernisierte Inhalte seit 01.08.2020.",
            },
            {
              id: "imp_lf1-it-1_12",
              q: "Wie heißt der Nachfolger des IT-Systemkaufmanns?",
              options: [
                "Kaufmann für IT-System-Management",
                "FISI",
                "Kaufmann für Digitalisierungsmanagement",
                "IT-Systembetreuer",
              ],
              correct: 0,
              explain: "IT-Systemkaufmann → Kaufmann/Kauffrau für IT-System-Management (ab 2020).",
            },
            {
              id: "imp_lf1-it-1_13",
              q: "Was ist die gestreckte Abschlussprüfung?",
              options: [
                "AP1 (20 %) nach ca. 18 Monaten + AP2 (80 %) am Ende",
                "Eine rein mündliche Prüfung am Ausbildungsende",
                "Eine Prüfung, die sich über 2 Tage erstreckt",
                "Eine besonders lange Einzelprüfung von 8 Stunden",
              ],
              correct: 0,
              explain:
                "Gestreckte AP der IT-Berufe: Teil 1 nach ca. 18 Monaten mit 20 % Gewichtung, Teil 2 am Ende mit 80 % – es gibt keine separate Zwischenprüfung mehr.",
            },
            {
              id: "imp_lf1-it-1_14",
              q: "Welches Thema ist seit AO 2020 NEU in der Ausbildung?",
              options: [
                "Netzwerktechnik",
                "Datenbanken",
                "DSGVO und Datenschutz",
                "Programmierung",
              ],
              correct: 2,
              explain:
                "DSGVO/Datenschutz, Cloud, agile Methoden und IT-Sicherheit wurden 2020 explizit aufgenommen.",
            },
            {
              id: "imp_lf1-it-1_15",
              q: "Wie heißt AP1 offiziell?",
              options: [
                "Planen und Konzipieren eines IT-Systems",
                "Grundlagen der IT und der Vernetzung",
                "Einrichten eines IT-gestützten Arbeitsplatzes",
                "Einrichten einer IT-Infrastruktur im Betrieb",
              ],
              correct: 2,
              explain:
                "AP1 heißt offiziell 'Einrichten eines IT-gestützten Arbeitsplatzes' – 90 Minuten, 100 Punkte.",
            },
            {
              id: "imp_lf1-it-1_16",
              q: "Welche Aussage zur AP1 ist richtig?",
              options: [
                "AP1 findet am Ausbildungsende statt",
                "Nur FISI muss AP1 ablegen",
                "AP1 ist für alle IT-Berufe identisch",
                "AP1 zählt nicht zur Endnote",
              ],
              correct: 2,
              explain: "AP1 ist berufsübergreifend identisch für alle 4+1 IT-Berufe.",
            },
            {
              id: "imp_lf1-it-1_17",
              q: "Was ist der Schwerpunkt eines FIAE?",
              options: [
                "Softwareentwicklung und Programmierung",
                "Netzwerkadministration",
                "Hardwarereparatur",
                "Kundenberatung und Vertrieb",
              ],
              correct: 0,
              explain:
                "FIAE = Fachinformatiker Anwendungsentwicklung: Programmierung, Datenbanken, Softwaredesign.",
            },
            {
              id: "imp_lf1-it-1_18",
              q: "Wie viele IT-Ausbildungsberufe umfasst die Neuordnung von 2020?",
              options: ["5", "4", "3", "2"],
              correct: 1,
              explain:
                "4 Berufe: Fachinformatiker (mit den 4 Fachrichtungen SI, AE, Daten- und Prozessanalyse, Digitale Vernetzung), IT-System-Elektroniker, Kaufleute für IT-System-Management, Kaufleute für Digitalisierungsmanagement.",
            },
            {
              id: "imp_lf1-it-1_19",
              q: "Welcher Beruf verbindet Technik und Kaufmännisches?",
              options: [
                "Fachinformatiker Daten- und Prozessanalyse",
                "Kaufmann für IT-System-Management",
                "FISI",
                "FIAE",
              ],
              correct: 1,
              explain: "IT-SM: kaufmännische Planung + IT-Beratung + Projektmanagement.",
            },
          ],
        },
      ],
    },
  ],
};
