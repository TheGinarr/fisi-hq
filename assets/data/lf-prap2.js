window.LF_CONTENT = window.LF_CONTENT || {};
window.LF_CONTENT["prap2"] = {
  topics: [
    {
      id: "ap2-info",
      title: "AP2 Überblick",
      lessons: [
        {
          id: "ap2-i-1",
          title: "Struktur & Projektarbeit",
          content: [
            { type: "heading", value: "AP2 Bestandteile" },
            {
              type: "text",
              value:
                "1. Betriebliche Projektarbeit (50%): Reales Projekt im Betrieb, 40h, Dokumentation, Präsentation + Fachgespräch. 2. Konzeption und Administration von IT-Systemen (Schriftlich): Handlungsorientierte Aufgaben. 3. Analyse und Entwicklung von Netzwerken (Schriftlich). 4. WiSo (10%).",
            },
            { type: "heading", value: "Projektarbeit FiSi" },
            {
              type: "text",
              value:
                "Max. 40 Stunden. Phasen: Projektantrag → Genehmigung → Durchführung → Dokumentation (max. 15 Seiten + Anhänge) → Präsentation (15 Min.) → Fachgespräch (15 Min.).",
            },
            { type: "heading", value: "Typische FiSi-Projekte" },
            {
              type: "text",
              value:
                "Migration eines Mailservers, Einführung eines Monitoring-Systems, VPN-Lösung implementieren, Netzwerk-Segmentierung mit VLANs, Firewall-Konzept erstellen, Server-Virtualisierung, Backup-Konzept überarbeiten.",
            },
            {
              type: "note",
              value:
                "AP2-Inhalte werden im 2. und 3. Lehrjahr vertieft. Hier der Überblick zur Orientierung.",
            },
            { type: "heading", value: "So funktioniert die FISI-AP2" },
            {
              type: "text",
              value:
                "Teil 2 der Abschlussprüfung besteht für FISI aus drei Bereichen: zwei schriftliche Prüfungen („Konzeption und Administration von IT-Systemen“ und „Analyse und Entwicklung von Netzwerken“, je 90 Minuten), der WISO-Prüfung (60 Minuten) – und der betrieblichen Projektarbeit (Dokumentation + Präsentation + Fachgespräch). Die schriftlichen AP2-Aufgaben sind Szenarioaufgaben: ein Betrieb mit einem Problem, dazu Konzeptions-, Berechnungs- und Begründungsaufgaben. Anders als in der AP1 wird hier ausführliches ANTWORTEN in Sätzen erwartet: „Erläutern Sie…“, „Beurteilen Sie…“, „Entwerfen Sie…“.",
            },
            {
              type: "heading",
              value: "Die Operatoren verstehen – sie definieren die erwartete Antwort",
            },
            {
              type: "list",
              value: [
                "NENNEN: Stichworte reichen (2 nennen = 2 Stichworte).",
                "BESCHREIBEN: Stichworte + je ein erklärender Satz.",
                "ERLÄUTERN/BEGRÜNDEN: Zusammenhang + Warum – hier gibt es die meisten Punkte für „…, weil …“-Sätze.",
                "BEURTEILEN/BEWERTEN: beide Seiten abwägen und zu einem begründeten Schluss kommen.",
                "ENTWERFEN/ERSTELLEN: strukturiertes Ergebnis (Skizze, Tabelle, Konzept) – Struktur gibt Punkte, auch wenn Details fehlen.",
              ],
            },
            { type: "heading", value: "Übungsaufgabe: Operator-Training" },
            {
              type: "text",
              value:
                "Die Aufgabe lautet: „Beurteilen Sie, ob der Betrieb sein Backup in die Cloud verlagern sollte.“ Ein Mitschüler antwortet nur: „Ja, Cloud ist modern und günstig.“ Warum bekommt er fast keine Punkte, und wie sähe eine punktereiche Antwortstruktur aus (nur Gliederung)?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: „Beurteilen“ verlangt Abwägung BEIDER Seiten plus begründetes Fazit – eine einseitige Behauptung ohne Begründung erfüllt den Operator nicht. Punktestruktur: (1) Pro Cloud: kein eigener Medienbestand/Auslagerung erfüllt 3-2-1, Skalierung, Schutz vor lokalem Brand. (2) Contra: laufende Kosten, Restore-Dauer über die Leitung (Rechenbeispiel!), Abhängigkeit/DSGVO (AVV, Verarbeitungsort). (3) Fazit mit Bedingung: „Empfehlenswert, WENN Bandbreite für den Restore reicht und ein AVV mit EU-Region vorliegt – als Ergänzung zur lokalen Sicherung, nicht als Ersatz.“",
            },
            { type: "heading", value: "Themen-Wahrscheinlichkeit: Was kommt wie oft dran?" },
            {
              type: "text",
              value:
                "Diese Auswertung basiert auf einer automatischen Volltext-Analyse von 7 Original-Prüfungen (FISI AP Teil 2, Jahrgänge 2021–2025). Der Prozentwert gibt an, in wie vielen der analysierten Prüfungen das Thema vorkam. Wichtig für die Einordnung: Ein Großteil der Prüfungen wurde per Texterkennung (OCR) ausgewertet – die Werte sind Näherungen, keine Garantie. Und: Vergangene Häufigkeit ist keine Zusage für deine Prüfung; die Prüfungserstellung variiert Themen bewusst. Als Lernstrategie taugt die Liste trotzdem: Was in über der Hälfte der Prüfungen vorkam, gehört in jede Vorbereitung.",
            },
            {
              type: "code",
              value:
                " 57 %  ███████████░░░░░░░░░  Subnetting / IP-Adressierung  (sehr häufig)\n 57 %  ███████████░░░░░░░░░  Cloud (IaaS/PaaS/SaaS)  (sehr häufig)\n 57 %  ███████████░░░░░░░░░  DSGVO / Datenschutz  (sehr häufig)\n 57 %  ███████████░░░░░░░░░  Struktogramm / Pseudocode / Algorithmus  (sehr häufig)\n 43 %  █████████░░░░░░░░░░░  Verschlüsselung / Zertifikate / Hash  (sehr häufig)\n 43 %  █████████░░░░░░░░░░░  Passwörter / MFA / Authentifizierung  (sehr häufig)\n 43 %  █████████░░░░░░░░░░░  Schutzbedarf / CIA / BSI  (sehr häufig)\n 43 %  █████████░░░░░░░░░░░  SQL / Datenbanken  (sehr häufig)\n 43 %  █████████░░░░░░░░░░░  ER-Modell / Kardinalität  (sehr häufig)\n 43 %  █████████░░░░░░░░░░░  Lastenheft / Pflichtenheft  (sehr häufig)\n 43 %  █████████░░░░░░░░░░░  Netzplan / Gantt / krit. Pfad  (sehr häufig)\n 43 %  █████████░░░░░░░░░░░  Angebotsvergleich / Bezugskalk. / Skonto  (sehr häufig)\n 43 %  █████████░░░░░░░░░░░  Mängel / Gewährleistung / Verzug  (sehr häufig)\n 29 %  ██████░░░░░░░░░░░░░░  IPv6  (häufig)\n 29 %  ██████░░░░░░░░░░░░░░  Routing / Gateway  (häufig)\n 29 %  ██████░░░░░░░░░░░░░░  VPN  (häufig)\n 29 %  ██████░░░░░░░░░░░░░░  RAID  (häufig)\n 29 %  ██████░░░░░░░░░░░░░░  USV / Netzteil / Strom  (häufig)\n 29 %  ██████░░░░░░░░░░░░░░  Skript / Automatisierung  (häufig)\n 29 %  ██████░░░░░░░░░░░░░░  Zahlensysteme / Speichergrößen  (häufig)",
            },
            {
              type: "note",
              value:
                "Lernstrategie daraus: 1. Alles ab „sehr häufig“ zuerst sicher beherrschen – das ist der Grundstock der Punkte. 2. „Häufig“-Themen mindestens einmal mit Übungsaufgabe durcharbeiten. 3. „Gelegentlich“-Themen über die Lernkarten und das Blitz-Training abdecken – hier reicht Überblickswissen für Teilpunkte. Rechenthemen (Subnetting, Kalkulation, Netzplan) immer mit Rechenweg üben: Sie kommen nicht nur oft, sie geben auch planbare Punkte.",
            },
          ],
          quiz: [
            {
              id: "imp_ap2-i-1_0",
              q: "Max. Stunden für die Projektarbeit FiSi?",
              options: ["35h", "70h", "40h", "20h"],
              correct: 2,
              explain: "40 Stunden.",
            },
            {
              id: "imp_ap2-i-1_1",
              q: "Wie lang ist die Präsentation?",
              options: ["10 Min", "30 Min", "15 Min", "5 Min"],
              correct: 2,
              explain: "15 Minuten Präsentation + 15 Minuten Fachgespräch.",
            },
            {
              id: "imp_ap2-i-1_2",
              q: "AP2 Projektarbeit: Doku max.?",
              options: ["10 Seiten", "5 Seiten", "15 Seiten + Anhang", "30 Seiten"],
              correct: 2,
              explain: "15 Seiten Dokumentation plus Anhänge.",
            },
            {
              id: "imp_ap2-i-1_3",
              q: "Mündliche Ergänzungsprüfung: Wann?",
              options: [
                "Bei mangelhaft in einem schriftlichen Bereich",
                "Nie – schriftliche Ergebnisse sind grundsätzlich endgültig",
                "Freiwillig – jeder Prüfling kann sie ohne Anlass beantragen",
                "Immer – sie ist fester Pflichtbestandteil jeder AP2",
              ],
              correct: 0,
              explain: "Möglich, wenn ein schriftlicher Bereich mangelhaft (Note 5) ist.",
            },
            {
              id: "imp_ap2-i-1_4",
              q: "WiSo Gewichtung AP2?",
              options: ["5%", "30%", "10%", "20%"],
              correct: 2,
              explain: "WiSo = 10% der Gesamtnote der Abschlussprüfung (AP1 zählt 20 %).",
            },
            {
              id: "imp_ap2-i-1_5",
              q: "AP2: Betriebliche Projektarbeit Gewichtung?",
              options: ["70%", "30%", "50%", "10%"],
              correct: 2,
              explain: "Projektarbeit: 50% der Gesamtnote der Abschlussprüfung (AP1 zählt 20 %).",
            },
            {
              id: "imp_ap2-i-1_6",
              q: "Fachgespräch Themen?",
              options: [
                "Nur Fakten",
                "Persönlich",
                "Vertiefung, Alternativen, Sicherheit",
                "Nur WiSo",
              ],
              correct: 2,
              explain: "Warum diese Lösung?",
            },
            {
              id: "imp_ap2-i-1_7",
              q: "Medien Präsentation?",
              options: [
                "Folien + Demo + Handout möglich",
                "Nur Video",
                "Nur Folien",
                "Nur mündlich",
              ],
              correct: 0,
              explain: "Medien-Mix.",
            },
            {
              id: "imp_ap2-i-1_8",
              q: "Mündl. Ergänzung Dauer?",
              options: ["60 Min", "~15 Min", "5 Min", "30 Min"],
              correct: 1,
              explain: "15 Minuten.",
            },
            {
              id: "imp_ap2-i-1_9",
              q: "Bestehensgrenze AP2?",
              options: [
                "Nur Projekt",
                "Alles 100%",
                "Kein Bereich <30%, Gesamt mind. 50%",
                "Nur WiSo",
              ],
              correct: 2,
              explain: "Mindestanforderungen.",
            },
            {
              id: "imp_ap2-i-1_10",
              q: "Was muss VOR Beginn der betrieblichen Projektarbeit vorliegen?",
              options: [
                "Der von der IHK genehmigte Projektantrag",
                "Das Prüfungszeugnis",
                "Die fertige Dokumentation",
                "Nichts – einfach anfangen",
              ],
              correct: 0,
              explain:
                "Ohne Genehmigung zählt das Projekt nicht – Durchführungszeitraum und Inhalt sind an den Antrag gebunden.",
            },
            {
              id: "imp_ap2-i-1_11",
              q: "Was gehört in den Projektantrag?",
              options: [
                "Eine Übersicht der bevorzugten Betriebssysteme und Lieblingswerkzeuge des Prüflings",
                "Die vollständigen Testergebnisse und der abschließende Soll-Ist-Vergleich des Projekts",
                "Die erreichte Punktzahl und Note der bereits abgelegten Abschlussprüfung Teil 1",
                "Ausgangssituation, Projektziel, geplante Phasen mit Zeitansätzen, Schnittstellen und Umfeld",
              ],
              correct: 3,
              explain:
                "Der Ausschuss prüft, ob Umfang und Tiefe für eine eigenständige Fachkraft-Leistung angemessen sind.",
            },
            {
              id: "imp_ap2-i-1_12",
              q: "Was gilt für Kundendaten in der Projektdokumentation?",
              options: [
                "Der Datenschutz gilt in Prüfungsunterlagen nicht, da Prüfer schweigepflichtig sind",
                "Vollständige Kundendaten mit Namen und Adressen sind für die Bewertung Pflicht",
                "Sensible Angaben anonymisieren bzw. mit dem Betrieb abstimmen (ggf. Sperrvermerk)",
                "Echte Passwörter und Zugangsdaten gehören zur Nachvollziehbarkeit in den Anhang",
              ],
              correct: 2,
              explain:
                "Die Doku geht an Prüfer außerhalb des Betriebs – Datenschutz und Betriebsgeheimnisse beachten.",
            },
            {
              id: "imp_ap2-i-1_13",
              q: "Eine persönliche Erklärung in der Dokumentation bestätigt …",
              options: [
                "die Note der Berufsschule",
                "die Richtigkeit aller Preise",
                "die Anwesenheit im Betrieb",
                "die selbstständige Anfertigung der Arbeit",
              ],
              correct: 3,
              explain:
                "Die Eigenständigkeitserklärung ist Pflichtbestandteil – Täuschung führt zum Nichtbestehen.",
            },
            {
              id: "imp_ap2-i-1_14",
              q: "Das Projekt scheitert technisch teilweise. Was gilt für die Bewertung?",
              options: [
                "Die Dokumentation darf das Scheitern nicht erwähnen, da nur erfolgreiche Ergebnisse bewertet werden dürfen",
                "Ein technisches Scheitern führt automatisch zu 0 Punkten, unabhängig von Vorgehen und Analyse",
                "Das Projekt muss vor der Abgabe unbemerkt wiederholt werden, bis ein Erfolg dokumentierbar ist",
                "Auch ein dokumentiert gescheitertes Projekt kann bestehen, wenn Vorgehen, Analyse und Konsequenzen professionell dargestellt sind",
              ],
              correct: 3,
              explain:
                "Bewertet wird die Facharbeiterleistung: Analyse, Entscheidungen, Umgang mit Abweichungen – nicht der Marketingerfolg.",
            },
            {
              id: "imp_ap2-i-1_15",
              q: "An welcher Zielgruppe richtet sich die Projektpräsentation aus?",
              options: [
                "Am fachkundigen Prüfungsausschuss",
                "An der Geschäftsführung des Kunden",
                "An Grundschülern",
                "An Laien ohne IT-Bezug",
              ],
              correct: 0,
              explain:
                "Fachbegriffe sind erwünscht; erklärt werden projektspezifische Besonderheiten, nicht IT-Grundlagen.",
            },
            {
              id: "imp_ap2-i-1_16",
              q: "Welche Hilfsmittel sind in der Präsentation üblich und wer stellt sie sicher?",
              options: [
                "Nur Tafel und Kreide",
                "Hilfsmittel sind verboten",
                "Die IHK stellt immer alles inklusive Laptop",
                "Eigene Technik/Medien des Prüflings",
              ],
              correct: 3,
              explain:
                "Funktion vorab testen, Plan B bereithalten. Beamer-Ausfall ist kein anerkannter Grund für eine Verschiebung – Ausdrucke oder zweites Gerät als Rückfallebene mitbringen.",
            },
            {
              id: "imp_ap2-i-1_17",
              q: "Worauf bezieht sich das Fachgespräch?",
              options: [
                "Ausschließlich auf Inhalte der WiSo-Prüfung",
                "Auf das Projekt und die zugrunde liegenden Fachinhalte",
                "Auf die bereits abgelegten Aufgaben der AP1",
                "Auf persönliche Interessen und private Hobbys",
              ],
              correct: 1,
              explain:
                "Auch über die Doku hinaus. Vom Projekt ausgehend prüft der Ausschuss Verständnis in die Tiefe ('Warum diese Lösung? Was wäre wenn …?').",
            },
            {
              id: "imp_ap2-i-1_18",
              q: "Müssen fremde Quellen in der Dokumentation gekennzeichnet werden?",
              options: [
                "Nein, Quellenangaben sind in IT-Dokumentationen generell unüblich",
                "Nur gedruckte Buchquellen; Webseiten müssen nicht angegeben werden",
                "Nur auf Nachfrage des Prüfungsausschusses im Fachgespräch nötig",
                "Ja – Zitate und Quellen sind anzugeben, sonst droht Täuschung",
              ],
              correct: 3,
              explain:
                "Quellenverzeichnis und saubere Kennzeichnung gehören zum wissenschaftlich-handwerklichen Standard der Arbeit.",
            },
            {
              id: "imp_ap2-i-1_19",
              q: "Wozu dient der Anhang der Projektdokumentation?",
              options: [
                "Er bietet Platz, um die Seitenbegrenzung zu umgehen und inhaltliche Kapitel des Hauptteils dort fortzusetzen",
                "Er ist für persönliche Fotos und Erinnerungen aus der Projektzeit vorgesehen",
                "Für ergänzende Nachweise (Netzpläne, Konfigurationen, Protokolle), die den Textteil nicht aufblähen",
                "Ein Anhang ist in der Projektdokumentation nicht zulässig und führt zu Punktabzug",
              ],
              correct: 2,
              explain:
                "Kernaussagen gehören in den Hauptteil; der Anhang belegt – als Fließtext-Ersatz wird er nicht gewertet.",
            },
          ],
        },
        {
          id: "prap2-antrag-1",
          title: "Der Projektantrag: Schritt für Schritt zur Genehmigung",
          content: [
            {
              type: "text",
              value:
                "Vor der betrieblichen Projektarbeit steht der Projektantrag bei deiner zuständigen Stelle (i. d. R. IHK, meist über deren Online-Portal). Er entscheidet, ob dein Projekt überhaupt prüfungsfähig ist – ein abgelehnter oder schwacher Antrag kostet Wochen. Die FISI-Projektarbeit umfasst 40 Stunden inklusive Dokumentation. Genehmigungsfähig ist ein Projekt, wenn es: einen ECHTEN betrieblichen Auftrag mit Nutzen hat, EIGENE Entscheidungsspielräume bietet (du musst zwischen Alternativen begründet wählen – reine Umsetzung nach Anweisung ist keine Projektarbeit!), einen kaufmännischen Anteil enthält (Kosten, Angebotsvergleich, Wirtschaftlichkeit) und in 40 Stunden realistisch machbar ist (lieber klein und tief als groß und oberflächlich).",
            },
            { type: "heading", value: "Die Antrags-Gliederung, die funktioniert" },
            {
              type: "list",
              value: [
                "PROJEKTBEZEICHNUNG: konkret und ergebnisorientiert – „Konzeption und Implementierung einer zentralen Datensicherung nach 3-2-1 für die Muster GmbH“ statt „Backup-Projekt“.",
                "AUSGANGSSITUATION (Ist): Wo steht der Betrieb, was ist das Problem – mit Zahlen („dezentrale Sicherung auf 4 USB-Platten, kein Restore-Test, 340 GB Datenbestand“).",
                "PROJEKTZIEL (Soll): messbar formuliert – was ist am Ende nachweislich anders?",
                "PROJEKTUMFELD: Betrieb, Abteilung, Schnittstellen, WER entscheidet was (hier zeigst du deinen Entscheidungsspielraum!).",
                "PROJEKTPHASEN MIT ZEITPLANUNG: Analyse, Konzeption/Alternativenvergleich, Umsetzung, Test/Abnahme, Dokumentation – die Stunden müssen exakt die Vorgabe ergeben und die Doku-Zeit enthalten.",
                "DOKUMENTATION ZUR PROJEKTARBEIT: geplante Unterlagen (Netzplan, Kostenvergleich, Testprotokoll, Abnahme).",
              ],
            },
            {
              type: "text",
              value:
                "Die häufigsten Ablehnungsgründe – und wie du sie vermeidest: (1) „Reine Routinetätigkeit“ → Entscheidungsalternativen in den Antrag schreiben (Produktvergleich, Make-or-Buy). (2) „Kein kaufmännischer Anteil“ → Kostenkalkulation und Wirtschaftlichkeitsbetrachtung explizit als Phase nennen. (3) „Zeitplanung unrealistisch“ → 40 h glaubwürdig verteilen, Doku mit 6–10 h einplanen. (4) „Zu unkonkret“ → messbare Ziele, konkreter Betrieb. (5) Datenschutz: Kundennamen im Antrag ggf. anonymisieren. Nach der Genehmigung gilt: Durchführung im genehmigten Zeitraum, wesentliche Abweichungen mit der zuständigen Stelle klären – kleine Abweichungen sind normal und werden in der Doku begründet.",
            },
            { type: "heading", value: "Übungsaufgabe: Antrag retten" },
            {
              type: "text",
              value:
                "Ein Mitazubi reicht ein: „Projekt: Server installieren. Ich installiere bei uns einen neuen Server, weil der alte langsam ist. Zeitplan: Installation 30 h, Doku 10 h.“ Nenne vier Gründe, warum dieser Antrag scheitert, und formuliere Projektbezeichnung + drei Phasen der Zeitplanung neu.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: Ablehnungsgründe: (1) Keine Entscheidungsspielräume erkennbar – reine Installationsroutine. (2) Kein kaufmännischer Anteil (keine Kosten, kein Vergleich). (3) Ausgangssituation/Ziel ohne Messbarkeit („langsam“ ist keine Analyse). (4) Zeitplan ohne Analyse-, Konzeptions- und Testphase – 30 h „Installation“ ist unglaubwürdig. Neufassung: „Analyse, Konzeption und Wirtschaftlichkeitsvergleich der Servererneuerung mit anschließender Migration für die Muster GmbH“. Zeitplanung (40 h): Ist-Analyse und Anforderungsaufnahme 6 h · Konzeption mit Alternativenvergleich (Neuanschaffung vs. Aufrüstung vs. Cloud, Nutzwertanalyse + Kostenkalkulation) 8 h · Beschaffung/Installation/Migration 12 h · Test, Abnahme, Einweisung 6 h · Projektdokumentation 8 h. Damit sind Entscheidungsspielraum, kaufmännischer Anteil und realistische Verteilung sichtbar.",
            },
          ],
          quiz: [
            {
              id: "imp_prap2-antrag-1_0",
              q: "Wie viele Stunden umfasst die betriebliche Projektarbeit für FISI (inkl. Doku)?",
              options: ["24", "40", "70", "80"],
              correct: 1,
              explain:
                "40 Stunden inklusive Dokumentation – die Zeitplanung im Antrag muss genau darauf aufgehen.",
            },
            {
              id: "imp_prap2-antrag-1_1",
              q: "Der häufigste inhaltliche Ablehnungsgrund ist…",
              options: [
                "zu viele Seiten",
                "fehlender Entscheidungsspielraum",
                "falsche Schriftart",
                "zu günstiges Projekt",
              ],
              correct: 1,
              explain:
                "Reine Routine-Umsetzung ohne begründete Alternativenwahl. Die Prüfer wollen sehen, DASS und WIE du entscheidest – Alternativenvergleich in den Antrag!",
            },
            {
              id: "imp_prap2-antrag-1_2",
              q: "Welche Phase darf in keiner Zeitplanung fehlen?",
              options: ["Betriebsausflug", "Projektdokumentation", "Urlaub", "Marketing"],
              correct: 1,
              explain:
                "Realistisch 6–10 h. Die Doku gehört IN die Projektstunden – wer sie vergisst, plant unrealistisch.",
            },
            {
              id: "imp_prap2-antrag-1_3",
              q: "Während der Durchführung ändert sich eine Rahmenbedingung wesentlich. Was tust du?",
              options: [
                "Stillschweigend anders umsetzen und in der Doku den alten Stand beschreiben",
                "Abweichung mit der zuständigen Stelle klären bzw. dokumentiert begründen",
                "Das Projekt sofort abbrechen und ein komplett neues beantragen",
                "Den genehmigten Antrag rückwirkend umschreiben und neu einreichen",
              ],
              correct: 1,
              explain:
                "Kleine Abweichungen sind normal. Begründete Abweichungen sind kein Makel – verschwiegene schon.",
            },
          ],
        },
        {
          id: "prap2-fach-1",
          title: "Fachgespräch-Training: die Prüferfragen",
          content: [
            {
              type: "text",
              value:
                "Nach deiner Projektpräsentation (15 Minuten) folgt das Fachgespräch (ca. 15 Minuten) – zusammen 50 % deiner AP2-Projektnote mitbestimmend. Die Prüfer fragen entlang DEINES Projekts, aber mit System: Sie prüfen, ob du die Entscheidungen wirklich selbst getroffen und verstanden hast, ob du Alternativen kennst, und ob du über den Tellerrand (Wirtschaftlichkeit, Sicherheit, Recht) schauen kannst. Die goldenen Regeln: Jede Antwort mit Begründung („…, weil…“); „Das weiß ich nicht sicher, ich würde es so herausfinden: …“ ist besser als Raten; ruhig nachfragen, wenn die Frage unklar ist; und NIE die eigene Doku widerlegen – kenne deine Zahlen (Kosten, Zeiten, Kennzahlen) auswendig.",
            },
            { type: "heading", value: "Die 12 Klassiker – Frage für Frage mit Antwortstrategie" },
            {
              type: "text",
              value:
                "Geh die folgenden Fragen durch, formuliere DEINE Antwort laut (am besten mit Stoppuhr, 60–90 Sekunden pro Antwort), und klappe erst dann die Strategie auf.",
            },
            {
              type: "heading",
              value:
                "Frage 1: „Warum haben Sie sich für Lösung X entschieden – welche Alternativen gab es?“",
            },
            {
              type: "solution",
              value:
                "STRATEGIE: Die Kernfrage des Fachgesprächs – hier wird der Entscheidungsspielraum geprüft. Aufbau: 2–3 echte Alternativen nennen → Bewertungskriterien (Kosten, Betrieb, Sicherheit, Skalierung) → warum X gewann (Nutzwert/Zahlen!) → EHRLICHE Schwäche von X plus Umgang damit. Wer nur Vorteile aufzählt, wirkt einstudiert.",
            },
            {
              type: "heading",
              value:
                "Frage 2: „Was hat Ihr Projekt insgesamt gekostet – und was bringt es dem Betrieb?“",
            },
            {
              type: "solution",
              value:
                "STRATEGIE: Zahlen auswendig: Personalkosten (deine Stunden × Stundensatz!), Hardware/Lizenzen, laufende Kosten – dem Nutzen gegenüberstellen (eingesparte Stunden, vermiedene Risiken) und die Amortisation nennen. Klassische Nachfrage: „Warum rechnen Sie IHRE Stunden mit, Sie werden doch sowieso bezahlt?“ – Antwort: Opportunitätskosten, in der Zeit wäre andere wertschöpfende Arbeit möglich gewesen.",
            },
            {
              type: "heading",
              value:
                "Frage 3: „Welche Risiken hatte Ihr Projekt und wie sind Sie damit umgegangen?“",
            },
            {
              type: "solution",
              value:
                "STRATEGIE: 2–3 konkrete Risiken (Lieferzeit, Datenverlust bei Migration, Akzeptanz) mit je Eintrittswahrscheinlichkeit/Schaden und deiner Gegenmaßnahme (Puffer, Backup + Testlauf, Einweisung). Bonuspunkte: ein Risiko, das EINGETRETEN ist, und wie du reagiert hast – das beweist echtes Projektgeschehen.",
            },
            { type: "heading", value: "Frage 4: „Was würden Sie heute anders machen?“" },
            {
              type: "solution",
              value:
                "STRATEGIE: Niemals „nichts“! Ein bis zwei ehrliche, kluge Punkte (früherer Testaufbau, mehr Puffer bei X, zweites Angebot eingeholt) + was du daraus für Folgeprojekte ableitest. Die Frage prüft Reflexionsfähigkeit, nicht Fehlerfreiheit.",
            },
            {
              type: "heading",
              value: "Frage 5: „Wie haben Sie die Datensicherheit/den Datenschutz berücksichtigt?“",
            },
            {
              type: "solution",
              value:
                "STRATEGIE: Zwei Ebenen trennen: SICHERHEIT (Schutzziele: Wie sind Vertraulichkeit/Integrität/Verfügbarkeit im Projekt umgesetzt – Rechtekonzept, Verschlüsselung, Backup) und DATENSCHUTZ (personenbezogene Daten? Rechtsgrundlage, Datenminimierung, ggf. AVV). Auch wenn's im Projekt klein war: zeigen, dass du daran GEDACHT hast.",
            },
            {
              type: "heading",
              value: "Frage 6: „Ihr Netzplan zeigt Phase X mit Y Stunden – warum genau so?“",
            },
            {
              type: "solution",
              value:
                "STRATEGIE: Zeitplanung verteidigen können: Wie hast du geschätzt (Erfahrungswerte, Ausbilder befragt, Vergleichsprojekte)? Wo war Puffer? Wo kam es zu Abweichungen und wie hast du sie dokumentiert? Wer seine eigene Zeitplanung nicht erklären kann, weckt Zweifel an der Eigenleistung.",
            },
            {
              type: "heading",
              value:
                "Frage 7: „Erklären Sie [Fachbegriff aus Ihrer Doku] – was bedeutet das genau?“",
            },
            {
              type: "solution",
              value:
                "STRATEGIE: JEDER Begriff in deiner Doku ist Freiwild: RAID-Level, VLAN, Snapshot, AVV, Nutzwertanalyse … Vor der Prüfung die eigene Doku durchgehen und jeden Begriff in zwei Sätzen erklären üben – gern mit dem Lieschen-Müller-Test. Ein nicht erklärbarer Begriff in der eigenen Doku ist der peinlichste Moment des Fachgesprächs.",
            },
            {
              type: "heading",
              value: "Frage 8: „Wie haben Sie getestet, dass Ihre Lösung funktioniert?“",
            },
            {
              type: "solution",
              value:
                "STRATEGIE: Konkrete Testfälle nennen (Was, wie, erwartetes Ergebnis, wer hat abgenommen) – idealerweise mit Testprotokoll in der Doku. Nachfrage-Klassiker: „Was hätten Sie getan, wenn der Test fehlgeschlagen wäre?“ → Rollback-Plan.",
            },
            {
              type: "heading",
              value: "Frage 9: „Was passiert mit Ihrer Lösung in 3 Jahren?“ (Skalierung/Wartung)",
            },
            {
              type: "solution",
              value:
                "STRATEGIE: Betriebsdenken zeigen: Wer wartet die Lösung, wie laufen Updates, was passiert bei Wachstum (mehr Nutzer/Daten), wann steht ein Refresh an, ist die Doku übergabefähig? Die Prüfer sind Praktiker – Nachhaltigkeit schlägt Technik-Feuerwerk.",
            },
            {
              type: "heading",
              value: "Frage 10: „Warum ist das überhaupt ein Projekt und keine Routineaufgabe?“",
            },
            {
              type: "solution",
              value:
                "STRATEGIE: Die Projektmerkmale am eigenen Fall: einmalig, definiertes Ziel, begrenzte Ressourcen/Zeit, Neuartigkeit für den Betrieb, eigener Entscheidungsspielraum. Kurz und selbstbewusst – die Frage testet, ob du Projektmanagement-Grundlagen kannst.",
            },
            {
              type: "heading",
              value: "Frage 11: „Welche rechtlichen Aspekte spielten eine Rolle?“",
            },
            {
              type: "solution",
              value:
                "STRATEGIE: Je nach Projekt: Lizenzrecht (Volumen/OEM/Open Source mit Copyleft!), DSGVO, Gewährleistung beim Einkauf, ggf. Betriebsrat (Leistungskontrolle), Aufbewahrungspflichten. Zwei solide Punkte reichen – aber null Punkte gehen nicht.",
            },
            {
              type: "heading",
              value: "Frage 12: „Ihre Präsentation nennt Kennzahl X – wie kommt die zustande?“",
            },
            {
              type: "solution",
              value:
                "STRATEGIE: Jede Zahl auf jeder Folie muss herleitbar sein (Formel, Datenquelle, Zeitraum). Vor der Prüfung: Folien durchgehen und zu jeder Zahl die Rechnung auf einen Spickzettel (für dich, nicht für die Prüfung) – wer bei der eigenen Kennzahl ins Schwimmen kommt, verliert die Glaubwürdigkeit der ganzen Arbeit.",
            },
            { type: "heading", value: "Übungsaufgabe: Generalprobe" },
            {
              type: "text",
              value:
                "Nimm dein (geplantes oder fiktives) Projekt und beantworte die Fragen 1, 2 und 4 laut mit Stoppuhr (je max. 90 Sekunden). Nimm dich mit dem Handy auf und prüfe: Begründung enthalten? Zahlen konkret? Füllwörter?",
            },
            {
              type: "solution",
              value:
                "SELBST-CHECK: (1) Kam in jeder Antwort ein „weil“? (2) Hast du mindestens eine konkrete Zahl genannt (Kosten, Stunden, Prozent)? (3) Warst du unter 90 Sekunden (Prüfer haken lieber nach, als Monologe zu hören)? (4) Bei Frage 4: Hast du einen echten Verbesserungspunkt genannt statt „eigentlich lief alles gut“? Wiederhole die Übung, bis alle vier Checks sitzen – das ist die beste Fachgespräch-Vorbereitung, die es gibt.",
            },
          ],
          quiz: [
            {
              id: "imp_prap2-fach-1_0",
              q: "Was prüft die Frage „Welche Alternativen gab es?“ wirklich?",
              options: [
                "Ob du möglichst viele Produkte und Hersteller aus dem Marktumfeld aufzählen kannst",
                "Ob du den Entscheidungsspielraum selbst genutzt und begründet entschieden hast",
                "Ob du dich für das Produkt des jeweiligen Marktführers entschieden hast",
                "Nichts Fachliches; die Frage dient als lockerer Einstieg ins Gespräch",
              ],
              correct: 1,
              explain: "Eigenleistung und Entscheidungskompetenz – das Herz der Projektbewertung.",
            },
            {
              id: "imp_prap2-fach-1_1",
              q: "„Warum rechnen Sie Ihre eigenen Stunden als Kosten?“ – die richtige Antwort?",
              options: [
                "Aus Gewohnheit: In unserem Betrieb wurde das schon immer so gemacht, einen fachlichen Grund gibt es nicht",
                "Opportunitätskosten: In der Zeit wäre andere wertschöpfende Arbeit möglich gewesen; Personalkosten sind echte Kosten",
                "Weil die IHK das formal verlangt; betriebswirtschaftlich sind eigene Stunden eigentlich kostenlos",
                "Stimmt, die rechne ich raus – Azubistunden verursachen dem Betrieb tatsächlich keinerlei Kosten",
              ],
              correct: 1,
              explain:
                "Der Klassiker unter den Nachfragen – wer hier einknickt, verliert die Wirtschaftlichkeitsargumentation.",
            },
            {
              id: "imp_prap2-fach-1_2",
              q: "Auf „Was würden Sie heute anders machen?“ antwortest du am besten…",
              options: [
                "mit der Aussage, das Projekt sei fehlerfrei verlaufen und nichts wäre zu verbessern",
                "mit 1–2 ehrlichen Verbesserungspunkten plus abgeleiteter Erkenntnis",
                "mit einer vollständigen Auflistung sämtlicher Fehler und Pannen des Projekts",
                "gar nicht; die Frage höflich übergehen und zum nächsten Thema wechseln",
              ],
              correct: 1,
              explain:
                "Reflexionsfähigkeit wird geprüft – „nichts“ wirkt unreflektiert, Selbstzerfleischung unprofessionell.",
            },
            {
              id: "imp_prap2-fach-1_3",
              q: "Du kennst die Antwort auf eine Fachfrage nicht sicher. Beste Reaktion?",
              options: [
                "Selbstbewusst raten und die Antwort mit fester Stimme als gesichert präsentieren",
                "Schweigen und abwarten, bis der Prüfungsausschuss zur nächsten Frage übergeht",
                "Ehrlich einordnen und den Lösungsweg skizzieren: „Ich würde das so herausfinden: …“",
                "Unauffällig auf ein Themengebiet lenken, das man sicher beherrscht",
              ],
              correct: 2,
              explain:
                "Prüfer honorieren Methodenkompetenz – erfundene Antworten fliegen bei der Nachfrage auf.",
            },
          ],
        },
        {
          id: "prap2-doku-1",
          title: "Muster-Projektdokumentation: ein komplettes Beispielprojekt",
          content: [
            {
              type: "text",
              value:
                "Die betriebliche Projektarbeit macht mit Dokumentation, Präsentation und Fachgespräch 50 % deiner GESAMTnote (der Abschlussprüfung) aus – die Dokumentation ist dabei das Fundament, denn die Prüfer lesen sie VOR der Präsentation und bauen ihre Fragen darauf auf. Diese Lektion zeigt dir eine komplette Muster-Dokumentation an einem durchgängigen Beispielprojekt: Kapitel für Kapitel mit echten Auszügen, Zeitplan, Wirtschaftlichkeitsrechnung und den Punkten, an denen Prüfer besonders genau hinschauen. Wichtig: Formvorgaben (Seitenzahl, Schriftgröße, Abgabeweg) unterscheiden sich je nach IHK – üblich sind etwa 10 bis 15 Textseiten zuzüglich Anhang. Maßgeblich ist IMMER das Merkblatt deiner IHK.",
            },
            { type: "heading", value: "Das Beispielprojekt" },
            {
              type: "text",
              value:
                "Projekttitel: „Konzeption und Einführung einer zentralen Backup- und Restore-Lösung bei der MedienWerk GmbH“. Ausgangslage: Die MedienWerk GmbH (Werbeagentur, 32 Mitarbeitende) sichert Daten bisher dezentral – jeder Arbeitsplatz auf eigene USB-Festplatten, der Dateiserver per Kopier-Skript auf eine zweite interne Platte. Es gab bereits einen Datenverlust (defekte USB-Platte, drei Tage Projektdaten weg). Auftrag an den Azubi: Anforderungen aufnehmen, Lösungen vergleichen, eine zentrale Backup-Lösung wirtschaftlich begründet auswählen, umsetzen, testen und übergeben – geplant als 40-Stunden-Projekt (FISI). Genau solche Projekte sind ideal: klar abgrenzbar, echter Kundennutzen, Entscheidungsspielraum für Vergleich und Begründung.",
            },
            { type: "heading", value: "Kapitelstruktur mit Muster-Auszügen" },
            {
              type: "list",
              value: [
                "1. Einleitung – Projektumfeld, Projektziel, Abgrenzung: Wer ist der Kunde, was ist das Ziel, was gehört ausdrücklich NICHT zum Projekt? Muster-Auszug: „Nicht Bestandteil des Projekts sind die Sicherung der Mobilgeräte sowie ein Archivierungskonzept nach GoBD; beides wird als Folgeprojekt empfohlen.“ Die Abgrenzung schützt dich im Fachgespräch – sie zeigt bewusstes Scope-Management.",
                "2. Projektplanung – Phasen, Zeitplan (Soll), Ressourcen, Meilensteine: Tabelle mit Phasen und Stunden (siehe unten), beteiligte Personen, verwendete Hard-/Software. Prüferblick: Ist die Planung realistisch und sind 40 Stunden nachvollziehbar verteilt?",
                "3. Ist-Analyse – aktuelle Situation mit Schwachstellen: dezentrale USB-Sicherung, keine Kontrolle, kein Restore-Test, RPO faktisch undefiniert. Mit Netzplan-Skizze des Bestands im Anhang.",
                "4. Soll-Konzept & Anforderungen – messbare Anforderungen: RPO ≤ 24 h, RTO ≤ 4 h für den Dateiserver, 3-2-1-Regel (3 Kopien, 2 Medientypen, 1 Kopie extern/offsite), Verschlüsselung, tägliche automatische Erfolgskontrolle.",
                "5. Lösungsvergleich & Entscheidung – mindestens zwei echte Alternativen, bewertet per Nutzwertanalyse (Kriterien gewichten!), dazu Kostenvergleich über 3 Jahre (TCO). Muster-Auszug siehe Wirtschaftlichkeit unten. Prüferblick: Hast DU entschieden und begründet – oder stand die Lösung vorher fest? Letzteres kostet Punkte.",
                "6. Umsetzung – Installation, Konfiguration, Backup-Plan (Vollsicherung + inkrementell), Verschlüsselung, Offsite-Kopie, Benachrichtigungen. Inklusive aufgetretener Probleme und Lösungen – Abweichungen ehrlich dokumentieren wirkt stark, nicht schwach.",
                "7. Qualitätssicherung & Test – Testfalltabelle: Sicherung erfolgreich? Einzeldatei-Restore? Komplett-Restore des Dateiservers auf Testhardware mit Zeitmessung (RTO-Nachweis: 2 h 40 min < 4 h ✓)? Ein Backup ohne dokumentierten Restore-Test ist der Klassiker unter den Prüferfragen.",
                "8. Übergabe & Abschluss – Abnahmeprotokoll mit Unterschrift, Einweisung der Verantwortlichen, Betriebsdokumentation (Wiederanlaufplan!), Soll-Ist-Vergleich der Stunden.",
                "9. Fazit & Ausblick – Zielerreichung an den messbaren Anforderungen gespiegelt, Lessons Learned, Folgeprojekte (Archivierung, Monitoring-Anbindung).",
                "Anhang – Netzpläne, Angebote, Nutzwertanalyse im Detail, Testprotokolle, Abnahmeprotokoll, Glossar. Der Anhang zählt nicht zur Seitenzahl, muss aber referenziert sein („siehe Anhang A3“).",
              ],
            },
            { type: "heading", value: "Zeitplanung: Soll-Ist-Vergleich (40 Stunden)" },
            {
              type: "code",
              value:
                "Phase                                        Soll    Ist   Abweichung\n1  Ist-Analyse & Anforderungsaufnahme         6 h    7 h   +1 h (zusätzliches Gespräch Geschäftsführung)\n2  Soll-Konzept & Lösungsvergleich            8 h    8 h   –\n3  Wirtschaftlichkeitsbetrachtung             3 h    3 h   –\n4  Umsetzung (Installation, Konfiguration)   12 h   11 h   −1 h (Vorlagen aus Teststellung nutzbar)\n5  Qualitätssicherung & Restore-Tests         5 h    5 h   –\n6  Übergabe, Einweisung, Abnahme              2 h    2 h   –\n7  Projektdokumentation                       4 h    4 h   –\n   Summe                                     40 h   40 h\n\nMerksatz: Abweichungen sind normal – dokumentiert und begründet\nsind sie ein Qualitätsmerkmal, verschwiegen ein Fachgespräch-Risiko.",
            },
            { type: "heading", value: "Wirtschaftlichkeit im Beispiel" },
            {
              type: "text",
              value:
                "Kostenvergleich über 3 Jahre: Lösung A (Backup-Server on-premises mit Backup-Software und Offsite-Kopie auf verschlüsselte Wechselmedien): einmalig 4.800 € Hardware/Lizenzen + 20 h Dienstleistung; laufend ca. 600 €/Jahr. Lösung B (Cloud-Backup as a Service): keine Anschaffung, aber 210 €/Monat = 2.520 €/Jahr, dazu Datenschutzprüfung (AVV, Serverstandort). TCO 3 Jahre: A ≈ 8.600 €, B ≈ 7.560 € – B knapp günstiger, aber die Nutzwertanalyse (Kriterien: Restore-Geschwindigkeit 30 %, Datenschutz/Kontrolle 25 %, Kosten 25 %, Skalierbarkeit 20 %) ergibt 8,05 zu 6,90 Punkte für A, ausschlaggebend die lokale Restore-Geschwindigkeit (RTO!) und die Datenhoheit. Dazu die Risikobetrachtung: Ein Tag Produktionsausfall kostet die Agentur bei 32 Mitarbeitenden konservativ gerechnet über 12.000 € – die Investition amortisiert sich also bereits mit dem ersten verhinderten größeren Datenverlust. Diese Verbindung aus TCO, Nutzwertanalyse und Risikokosten ist genau das Niveau, das die Bewerter sehen wollen.",
            },
            {
              type: "note",
              value:
                "Die fünf häufigsten Doku-Fehler: 1. Produktwerbung statt Vergleich (Entscheidung stand „schon fest“). 2. Kein messbares Ziel – ohne RPO/RTO kann Kapitel 9 keine Zielerreichung nachweisen. 3. Restore nie getestet. 4. Zeitplan ohne Soll-Ist-Vergleich. 5. Anhang als Müllhalde ohne Verweise im Text. Und formal: Rechtschreibung zählt in die Bewertung – gegenlesen lassen!",
            },
            { type: "heading", value: "Übungsaufgabe" },
            {
              type: "text",
              value:
                "Dein (fiktives) Projekt: „Einführung eines zentralen Monitorings für 12 Server“. a) Formuliere ein messbares Projektziel mit zwei Kennzahlen. b) Grenze zwei Punkte bewusst aus dem Projekt aus. c) Skizziere eine 40-h-Phasenplanung mit Stundenansätzen. d) Nenne die zwei Alternativen, die du im Lösungsvergleich betrachten würdest, und drei gewichtete Kriterien für die Nutzwertanalyse.",
            },
            {
              type: "solution",
              value:
                "a) Beispiel: „Bis Projektende werden alle 12 Server zentral überwacht; kritische Ausfälle werden innerhalb von 5 Minuten per Alarm gemeldet (statt bisher: Entdeckung durch Nutzerbeschwerden nach durchschnittlich 45 Minuten); die Verfügbarkeitsberichte werden monatlich automatisch erzeugt.“\nb) Z. B.: Überwachung der Clients/Arbeitsplätze (nur Server im Scope); Anbindung an ein Ticketsystem (Folgeprojekt).\nc) Ist-Analyse 5 h, Soll-Konzept & Vergleich 7 h, Wirtschaftlichkeit 3 h, Umsetzung (Installation, Agents, Schwellwerte, Alarmierung) 13 h, Tests (simulierte Ausfälle) 5 h, Übergabe & Einweisung 3 h, Dokumentation 4 h = 40 h.\nd) Alternativen z. B. eine Open-Source-Lösung (Lizenzkosten 0, mehr Einrichtungsaufwand) vs. eine kommerzielle Lösung (Lizenzkosten, Support inklusive). Kriterien z. B.: Alarmierungsfunktionen 30 %, laufende Kosten 25 %, Einarbeitung/Betriebsaufwand 25 %, Erweiterbarkeit 20 %. Wichtig ist nicht, WELCHE Lösung gewinnt, sondern dass Gewichtung und Bewertung nachvollziehbar begründet sind.",
            },
            {
              type: "links",
              value: [
                [
                  "FI-Prüfungsvorbereitung: Projektdokumentation",
                  "https://fachinformatikerpruefungsvorbereitung.de/abschlusspr%C3%BCfungteil2ae/projekt/projektdokumentation/",
                ],
                [
                  "FI-Prüfungsvorbereitung: Projektantrag",
                  "https://fachinformatikerpruefungsvorbereitung.de/abschlusspr%C3%BCfungteil2ae/projekt/projektantrag/",
                ],
                [
                  "Wikipedia: Betriebliche Projektarbeit",
                  "https://de.wikipedia.org/wiki/Fachinformatiker",
                ],
              ],
            },
          ],
          quiz: [
            {
              id: "imp_prap2-doku-1_0",
              q: "Warum gehören messbare Kennzahlen (RPO/RTO) ins Soll-Konzept?",
              options: [
                "Sie sind Pflichtvokabeln, die der Prüfungsausschuss zählt",
                "Ohne sie kann das Fazit keine Zielerreichung nachweisen",
                "Sie ersetzen die Nutzwertanalyse bei der Lösungsauswahl",
                "Sie verkürzen die Dokumentation um mehrere Textseiten",
              ],
              correct: 1,
              explain:
                "Kapitel 9 spiegelt die Zielerreichung an den Anforderungen – ohne messbare Ziele bleibt nur „hat geklappt“, und das gibt keine Punkte.",
            },
            {
              id: "imp_prap2-doku-1_1",
              q: "Wie gehst du mit Abweichungen vom Zeitplan um?",
              options: [
                "Verschweigen, wirkt sonst unprofessionell",
                "Im Soll-Ist-Vergleich dokumentieren und begründen",
                "Den Zeitplan nachträglich anpassen",
                "Abweichungen sind nicht erlaubt",
              ],
              correct: 1,
              explain:
                "Begründete Abweichungen zeigen Projektsteuerung. Nachträglich frisierte Pläne fliegen im Fachgespräch auf.",
            },
            {
              id: "imp_prap2-doku-1_2",
              q: "Was macht den Lösungsvergleich für die Bewerter wertvoll?",
              options: [
                "Eine möglichst lange Liste von Produktnamen und Herstellern ohne weitere Bewertung",
                "Eine echte, nachvollziehbar gewichtete Entscheidung zwischen realen Alternativen",
                "Die konsequente Wahl des Marktführers, da diese keine Begründung mehr erfordert",
                "Allein der niedrigste Anschaffungspreis, alle anderen Kriterien sind unerheblich",
              ],
              correct: 1,
              explain:
                "Bewertet wird dein Entscheidungsprozess (Nutzwertanalyse, TCO, Begründung) – nicht das Produkt.",
            },
            {
              id: "imp_prap2-doku-1_3",
              q: "Warum ist der dokumentierte Restore-Test im Backup-Projekt so wichtig?",
              options: [
                "Er füllt den Anhang der Dokumentation",
                "Ein Backup ohne getesteten Restore ist wertlos",
                "Er ersetzt die Abnahme durch den Kunden",
                "Er ist optional bei Cloud-Backups",
              ],
              correct: 1,
              explain:
                "Und eine Standard-Prüferfrage. Erst der erfolgreiche Wiederherstellungstest (mit RTO-Zeitmessung) beweist, dass das Projektziel erreicht ist.",
            },
          ],
        },
        {
          id: "prap2-praes-1",
          title: "Die Projektpräsentation: 15 Minuten, Folienplan & Medieneinsatz",
          content: [
            {
              type: "text",
              value:
                "Nach der Dokumentation folgen am Prüfungstag 15 Minuten Präsentation und ca. 15 Minuten Fachgespräch – zusammen fließen sie neben der Doku in die Projektnote ein. Die Präsentation ist kein Vorlesen der Doku: Die Prüfer haben sie bereits gelesen. Deine Aufgabe ist, das Projekt als Geschichte mit Entscheidungen zu erzählen – vom Problem über deine Lösung bis zum belegten Ergebnis. Zielgruppe: fachkundige Prüfer, die dein Projekt aber nicht miterlebt haben. Zu einfach erklären ist genauso falsch wie Buzzword-Feuerwerk.",
            },
            { type: "heading", value: "Der 15-Minuten-Folienplan (Beispielprojekt Backup)" },
            {
              type: "code",
              value:
                "Nr  Folie                                   Zeit    Kernbotschaft\n 1  Titel, Name, Betrieb, Projekttitel      0:30   Orientierung\n 2  Agenda                                  0:30   Roter Faden\n 3  Projektumfeld & Ausgangssituation       1:30   Warum gab es das Projekt? (Datenverlust!)\n 4  Projektziel & Abgrenzung                1:00   Messbare Ziele: RPO ≤ 24 h, RTO ≤ 4 h\n 5  Projektplanung (Phasen, 40 h)           1:00   Realistische Planung\n 6  Ist-Analyse (Schwachstellen)            1:30   Dezentral, ungetestet, riskant\n 7  Lösungsvergleich & Entscheidung         2:30   Nutzwertanalyse + TCO – DEINE Entscheidung\n 8  Umsetzung (Architektur, 3-2-1)          2:30   Wie die Lösung aufgebaut ist\n 9  Qualitätssicherung & Restore-Test       1:30   RTO-Nachweis: 2 h 40 min < 4 h\n10  Wirtschaftlichkeit & Nutzen             1:00   Kosten vs. Risikokosten\n11  Fazit: Soll-Ist, Lessons Learned,       1:30   Zielerreichung belegt + Ausblick\n    Ausblick\n                                    Summe  15:00\n\nFaustregeln: max. ~12 Folien · max. 6 Zeilen je Folie ·\nGrafiken statt Textwüsten · Foliennummern für das Fachgespräch.",
            },
            { type: "heading", value: "Bewertet wird mehr als der Inhalt" },
            {
              type: "list",
              value: [
                "Aufbau & roter Faden: Problem → Ziel → Entscheidung → Umsetzung → Beleg. Die Prüfer müssen jederzeit wissen, wo du bist (Agenda, Zwischenstände).",
                "Zeitmanagement: 15 Minuten sind hart – deutliche Über- ODER Unterschreitung kostet Punkte. Zu Hause mit Stoppuhr proben, Puffer von einer Minute einplanen. Viele Ausschüsse brechen nach 15 Minuten ab.",
                "Sprache & Auftreten: frei sprechen (Stichwortkarten ja, Ablesen nein), Blickkontakt, Fachbegriffe korrekt verwenden UND auf Nachfrage erklären können.",
                "Medieneinsatz: Beamer/Folien sind Standard. Live-Demos sind riskant – wenn, dann mit Fallback (Screenshots oder kurzes Video als Reserve). Immer dabei: eigener Laptop, eigener HDMI-Adapter, Präsentation zusätzlich als PDF auf USB-Stick – PDF rettet dich bei jedem fremden Rechner.",
                "Übergang ins Fachgespräch: Die letzte Folie (Fazit/Ausblick) bleibt stehen. Typische Einstiegsfragen ergeben sich aus deiner Präsentation – lege bewusst Themen aus, bei denen du sicher bist (z. B. 3-2-1-Regel, RTO-Messung).",
              ],
            },
            {
              type: "note",
              value:
                "Kleiderfrage: gepflegt und dem Anlass angemessen – Hemd/Bluse reicht, Verkleidung braucht niemand. Nervosität ist normal und den Prüfern vertraut; ein Schluck Wasser und ein strukturierter Einstieg („Ich zeige Ihnen zuerst, warum es dieses Projekt gab“) tragen dich über die ersten zwei Minuten. Und: Handy aus, Uhr im Blick – deine eigene Zeitkontrolle gehört zur Bewertung.",
            },
            { type: "heading", value: "Übungsaufgabe" },
            {
              type: "text",
              value:
                "Erstelle für DEIN Projekt (oder das Monitoring-Beispiel aus der Doku-Lektion) einen Folienplan: a) 10 bis 12 Folientitel mit Zeitbudget (Summe 15:00). b) Markiere die Folie, in die du am meisten Zeit investierst, und begründe. c) Nenne deinen Technik-Fallback-Plan in drei Punkten. d) Lege zwei „Köder-Themen“ für das Fachgespräch fest.",
            },
            {
              type: "solution",
              value:
                "a) Struktur analog zum Beispielplan: Titel, Agenda, Umfeld/Ausgangslage, Ziel & Abgrenzung, Planung, Ist-Analyse, Lösungsvergleich & Entscheidung, Umsetzung, Tests, Wirtschaftlichkeit, Fazit/Ausblick – Zeitbudgets so verteilen, dass Entscheidungs- und Umsetzungsfolien zusammen etwa ein Drittel bekommen.\nb) Die Entscheidungsfolie (Lösungsvergleich): Hier zeigst du eigenständiges, begründetes Handeln – das unterscheidet ein Fachkraft-Projekt von einer Anleitung.\nc) 1. Präsentation zusätzlich als PDF auf USB-Stick (läuft überall), 2. eigener Laptop + eigener HDMI/USB-C-Adapter, 3. statt Live-Demo vorbereitete Screenshots bzw. kurzes Bildschirmvideo.\nd) Beispiele: 3-2-1-Backup-Regel (sicher erklärbar inkl. Offsite-Begründung) und die Nutzwertanalyse (Gewichtung verteidigen können). Köder funktionieren nur bei Themen, die du wirklich beherrschst.",
            },
            {
              type: "links",
              value: [
                [
                  "FI-Prüfungsvorbereitung: Projektpräsentation",
                  "https://fachinformatikerpruefungsvorbereitung.de/abschlusspr%C3%BCfungteil2ae/projekt/projektpr%C3%A4sentation/",
                ],
                [
                  "Wikipedia: Präsentationstechnik",
                  "https://de.wikipedia.org/wiki/Pr%C3%A4sentationstechnik",
                ],
              ],
            },
          ],
          quiz: [
            {
              id: "imp_prap2-praes-1_0",
              q: "Warum ist „Doku vorlesen“ die falsche Präsentationsstrategie?",
              options: [
                "Die Doku ist zu lang",
                "Die Prüfer haben die Doku bereits gelesen",
                "Vorlesen ist verboten",
                "Folien dürfen keinen Doku-Inhalt enthalten",
              ],
              correct: 1,
              explain:
                "Die Präsentation soll das Projekt als begründete Entscheidungsgeschichte erzählen. Mehrwert statt Wiederholung: Problem, Entscheidung, Beleg – mit eigener Schwerpunktsetzung.",
            },
            {
              id: "imp_prap2-praes-1_1",
              q: "Was ist der sicherste Technik-Fallback?",
              options: [
                "Darauf vertrauen, dass die Technik vor Ort funktioniert",
                "Die Präsentation zusätzlich als PDF auf einem USB-Stick",
                "Eine zweite Live-Demo auf einem anderen Testsystem",
                "Alle Folien ausdrucken und ans Publikum verteilen",
              ],
              correct: 1,
              explain:
                "PDF öffnet auf jedem Rechner identisch – Schriftarten, Layout und Animationsausfälle können dir egal sein.",
            },
            {
              id: "imp_prap2-praes-1_2",
              q: "Wie gehst du mit den 15 Minuten um?",
              options: [
                "Lieber 20 Minuten, Hauptsache vollständig",
                "Deutlich unter 10 Minuten bleiben, wirkt souverän",
                "Mit Stoppuhr proben und auf ca. 14–15 Minuten zielen",
                "Die Zeit stoppt der Prüfer, das geht mich nichts an",
              ],
              correct: 2,
              explain:
                "Deutliche Abweichung kostet Punkte. Zeitmanagement ist explizites Bewertungskriterium; viele Ausschüsse brechen nach 15 Minuten ab.",
            },
            {
              id: "imp_prap2-praes-1_3",
              q: "Was sind „Köder-Themen“ für das Fachgespräch?",
              options: [
                "Absichtlich in die Präsentation eingebaute Fehler, mit denen du testest, ob die Prüfer aufmerksam zuhören",
                "Bewusst platzierte Themen, die du sicher beherrschst und zu denen Prüfer naheliegend nachfragen",
                "Themen, die du bewusst aus Präsentation und Doku weglässt, damit die Prüfer sie nicht ansprechen können",
                "Lockere Smalltalk-Angebote an die Prüfer, um die Atmosphäre im Fachgespräch aufzulockern",
              ],
              correct: 1,
              explain:
                "Du steuerst das Fachgespräch mit, indem deine Präsentation Vertiefungsangebote macht – aber nur bei Themen, die du wirklich kannst.",
            },
          ],
        },
        {
          id: "prap2-thema-1",
          title: "Themenfinder: das richtige Projektthema (und die Praktikumsarbeit)",
          content: [
            {
              type: "text",
              value:
                "Das Projektthema entscheidet über die halbe Note, bevor du eine Zeile Doku geschrieben hast: Ein gutes Thema gibt dir Entscheidungen, Rechnungen und Stoff fürs Fachgespräch praktisch geschenkt – ein schlechtes zwingt dich, aus einer Routine-Installation künstlich ein „Projekt“ aufzublasen. Die IHK genehmigt und bewertet entlang weniger Kernfragen: Steckt eine ECHTE ENTSCHEIDUNG mit Alternativen darin? Gibt es eine WIRTSCHAFTLICHKEITSBETRACHTUNG (Kosten/Nutzen, Angebotsvergleich, Make-or-Buy)? Ist das Projekt in ca. 40 Stunden (FISI, inkl. Doku-Anteil) realistisch DURCHFÜHRBAR und sauber ABGRENZBAR? Und: Hat der Betrieb einen echten Nutzen?\n\nDas klassische Anti-Muster: „Ich installiere Produkt X nach Anleitung.“ Keine Alternativen, keine Entscheidung, nichts zu begründen – so ein Antrag kommt mit Auflagen zurück oder fällt durch. Die Rettung ist fast immer dieselbe: aus der Installation eine KONZEPTION machen. Nicht „Ich installiere Zabbix“, sondern „Konzeption und Einführung eines Monitoring-Systems für die Serverlandschaft – Auswahl aus drei Lösungen anhand gewichteter Kriterien, Wirtschaftlichkeitsvergleich, Pilotbetrieb“.",
            },
            { type: "heading", value: "Entscheidungs-Checkliste: Trägt mein Thema?" },
            {
              type: "text",
              value:
                "Prüfe jedes Kandidaten-Thema gegen diese sieben Punkte – jedes „Nein“ ist eine Baustelle:\n\n1. ENTSCHEIDUNGSSPIELRAUM: Gibt es mindestens zwei ernsthafte Lösungsalternativen, zwischen denen ICH begründet wähle (nicht der Chef, nicht der Hersteller)?\n2. WIRTSCHAFTLICHKEIT: Kann ich Kosten kalkulieren und einen Nutzen- oder Alternativenvergleich rechnen (Angebotsvergleich, TCO, Amortisation)?\n3. UMFANG: Passt es in ca. 40 Stunden – groß genug für Substanz, klein genug zum Fertigwerden? Notfalls einen sauberen Teilausschnitt schneiden (Pilotgruppe, ein Standort, eine Abteilung).\n4. ABGRENZBARKEIT: Ist MEIN Anteil klar von Vorarbeit/Kollegenarbeit getrennt und als eigenständige Leistung erkennbar?\n5. BETRIEBLICHER NUTZEN: Löst es ein echtes Problem, das der Betrieb auch ohne Prüfung angehen würde?\n6. MACHBARKEIT IM BETRIEB: Habe ich Zugriff auf Systeme, Budgetdaten, Testumgebung – und die Freigabe der Ausbildungsleitung?\n7. DATENSCHUTZ/GEHEIMHALTUNG: Darf ich das dokumentieren? Betriebsdaten notfalls anonymisieren, Freigabe VOR dem Antrag klären.\n\nFürs Fachgespräch gilt: Alles, was im Projekt vorkommt, ist Prüfungsstoff – wähle ein Thema, dessen Technik du auch zwei Ebenen tiefer erklären kannst.",
            },
            { type: "heading", value: "Themenkatalog: bewährte Projektideen nach Bereichen" },
            {
              type: "text",
              value:
                "NETZWERK: Netzwerk-Segmentierung mit VLANs (Entscheidung: Segmentierungskonzept, Hardware-Auswahl; Stolperfalle: reine Umkonfiguration ohne Konzeptvergleich) · WLAN-Neuausleuchtung mit Controller-Lösung (Ausleuchtungsplanung, Controller vs. Standalone, 802.1X-Anbindung) · Einführung von 802.1X/NAC (RADIUS-Server-Wahl, Rollout-Strategie, Quarantäne-Konzept).\n\nSERVER & VIRTUALISIERUNG: Migration der Hosts auf einen neuen Hypervisor (Produktvergleich nach Lizenzkosten/Funktionen, Migrationsplan; Stolperfalle: nur „umziehen“ ohne Auswahlentscheidung) · Konsolidierung von Altservern in eine Virtualisierungsumgebung (Dimensionierung, Wirtschaftlichkeit alt vs. neu) · Container-Plattform für interne Web-Dienste (VM vs. Container, Orchestrierung ja/nein).\n\nSTORAGE & BACKUP: Neues Backup-Konzept nach 3-2-1 (Software- und Medienvergleich, RPO/RTO-Herleitung, Restore-Tests – dankbares Thema mit viel Rechenstoff: Backup-Fenster, Kapazität) · Ablösung des Alt-NAS durch zentrale Storage-Lösung (RAID-Level-Entscheidung, iSCSI vs. SMB, Kapazitätsplanung).\n\nSECURITY: Firewall-Ablösung mit Regelwerk-Redesign (Produktvergleich, DMZ-Konzept; Stolperfalle: 1:1-Regelübernahme ohne Konzept) · Standort-VPN neu konzipieren (IPsec vs. SSL-VPN, Anbieter-/Appliance-Vergleich) · Einführung zentrales Patch-Management (Tool-Vergleich, Test-Ring-Konzept, Compliance-Reporting).\n\nMONITORING & AUTOMATISIERUNG: Einführung eines Monitoring-Systems (Kriterienkatalog, drei Kandidaten, Alarmierungskonzept – der Klassiker, funktioniert fast überall) · Automatisierte Client-Betankung (Softwareverteilung/OS-Deployment: Lösungsvergleich, Pilotgruppe, Zeitersparnis-Rechnung).\n\nCLOUD & DIENSTE: Migration des Mail-/Dateiservers zu M365 oder Alternative (On-Prem vs. Cloud inkl. DSGVO-Bewertung und TCO – viel Entscheidungsstoff) · Einführung einer MDM-Lösung für Firmenhandys (Anbietervergleich, Richtlinienkonzept).\n\nSERVICE & ORGANISATION: Einführung eines Ticketsystems (Anforderungsanalyse, Tool-Vergleich, SLA-/Prozessdefinition) · Aufbau einer IT-Dokumentation/Wiki mit Migrationskonzept (Strukturkonzept, Tool-Wahl, Pilotbereich).\n\nZu jedem dieser Themen gilt der gleiche Dreiklang für den Antrag: Ist-Analyse mit Problem → begründete Auswahl aus Alternativen (Nutzwertanalyse!) → Umsetzung im abgegrenzten Rahmen mit Wirtschaftlichkeits- und Erfolgskontrolle. Den interaktiven Themenfinder mit diesen Vorschlägen findest du auf der AP2-Seite.",
            },
            { type: "heading", value: "Praktikums-/Facharbeit in der Schule: Thema wählen" },
            {
              type: "text",
              value:
                "Für die schulische Praktikums- oder Facharbeit gelten ANDERE Kriterien als für das IHK-Projekt – hier bewertet niemand Wirtschaftlichkeit, sondern Beschreibung und Reflexion: 1. ENGER FOKUS – „Mein Praktikum in der IT-Abteilung“ ist kein Thema, „Aufnahme und Bearbeitung von Störungsmeldungen im First-Level-Support der Firma X“ schon. 2. ERLEBT + BESCHREIBBAR – wähle etwas, das du selbst getan hast und mit Material belegen kannst (anonymisierte Tickets, Fotos mit Freigabe, Ablaufdiagramme). 3. REFLEKTIERBAR – die Arbeit lebt vom Abgleich Erwartung/Theorie vs. Realität: Was lief anders als in der Berufsschule gelernt, was habe ich daraus mitgenommen?\n\nBewährtes Gliederungsgerüst: Einleitung (Betrieb, Abteilung, Erwartungen) → Hauptteil (die konkrete Tätigkeit Schritt für Schritt, mit Fachbezug: verwendete Systeme, Begriffe sauber erklärt) → Reflexion (Soll/Ist, eigene Lernkurve, Berufswunsch-Abgleich) → Fazit. Themenbeispiele: Ersteinrichtung von Arbeitsplätzen im Onboarding-Prozess · Mitarbeit bei einer Client-Migration · Ticketbearbeitung im Support inkl. Eskalationswegen · Begleitung einer Backup-Wiederherstellung. Auch hier: Datenschutz-Freigabe des Betriebs VOR dem Schreiben einholen.",
            },
            { type: "heading", value: "Übungsaufgabe: Wunschthema gegen die Checkliste prüfen" },
            {
              type: "text",
              value:
                "Nimm dein aktuelles Wunschthema (oder wähle eines aus dem Katalog) und: a) prüfe es schriftlich gegen alle sieben Checklisten-Punkte, b) formuliere einen antragstauglichen Projekttitel, c) benenne die zentrale Entscheidung mit mindestens zwei Alternativen und d) skizziere, wie du die Wirtschaftlichkeit nachweist. Erst selbst, dann Musterlösung.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (Beispiel Monitoring):\na) 1 ✓ Auswahl aus Zabbix/CheckMK/PRTG · 2 ✓ Lizenz-/Betriebskostenvergleich + eingesparte Ausfallzeiten · 3 ✓ Pilotumfang: 20 Server, 5 Switches · 4 ✓ Konzept, Auswahl, Pilotaufbau komplett eigenständig; bestehende Serverlandschaft nur Rahmen · 5 ✓ bisher werden Ausfälle von Anwendern gemeldet · 6 ✓ Testumgebung + Freigabe liegen vor · 7 ✓ Doku ohne echte Hostnamen/IPs (anonymisiert).\nb) Titel: „Konzeption und pilothafte Einführung eines Monitoring-Systems zur proaktiven Überwachung der Serverinfrastruktur der Beispiel GmbH“.\nc) Entscheidung: Auswahl der Monitoring-Lösung aus drei Kandidaten per gewichteter Nutzwertanalyse (Kriterien: Lizenzkosten, Agent/agentenlos, Alarmierung, Erweiterbarkeit, Community/Support).\nd) Wirtschaftlichkeit: Anschaffungs- und Betriebskosten je Kandidat über 3 Jahre (TCO) + Nutzenrechnung über vermiedene Ausfallzeit (bisher x Stunden/Jahr × Kosten/Stunde) → Amortisationsdauer.",
            },
            {
              type: "text",
              value:
                "Weiterführend: Die Lektion „Der Projektantrag“ führt durch die Antragsformulierung, „Muster-Projektdokumentation“ zeigt ein komplettes Beispielprojekt, und der interaktive Themenfinder auf der AP2-Seite filtert den Katalog nach deinem Bereich. Merksatz: Erst Entscheidung und Rechnung sichern, dann Technik – die Technik ist im Projekt der einfachste Teil.",
            },
          ],
          quiz: [
            {
              id: "imp_prap2-thema-1_0",
              q: "Was macht ein Projektthema IHK-tauglich?",
              options: [
                "Möglichst neue, spektakuläre Technik",
                "Ein echter Entscheidungsspielraum mit Alternativen plus nachweisbarer Wirtschaftlichkeitsbetrachtung",
                "Ein möglichst großer Zeitumfang",
                "Dass der Ausbilder alle Entscheidungen absegnet",
              ],
              correct: 1,
              explain:
                "Bewertet werden Entscheidung, Begründung und kaufmännischer Blick – nicht die Modernität der Technik.",
            },
            {
              id: "imp_prap2-thema-1_1",
              q: "Welches Vorhaben ist das klassische ANTI-Muster für einen Projektantrag?",
              options: [
                "Konzeption eines Backup-Konzepts mit Medienvergleich",
                "Auswahl eines Ticketsystems per Nutzwertanalyse",
                "Installation eines vorgegebenen Produkts streng nach Herstelleranleitung",
                "Vergleich von drei Monitoring-Lösungen mit Pilotbetrieb",
              ],
              correct: 2,
              explain:
                "Reine Installation ohne Alternativen enthält keine bewertbare Entscheidung – solche Anträge kommen mit Auflagen zurück.",
            },
            {
              id: "imp_prap2-thema-1_2",
              q: "Welchen zeitlichen Umfang hat die betriebliche Projektarbeit beim FISI?",
              options: [
                "ca. 40 Stunden (inklusive Dokumentationsanteil)",
                "genau 8 Stunden",
                "ca. 80 Stunden wie beim FIAE",
                "unbegrenzt, solange das Ergebnis stimmt",
              ],
              correct: 0,
              explain:
                "FISI: max. 40 Stunden Durchführung inkl. Doku (FIAE: 80 h). Der Zuschnitt aufs Zeitfenster ist Teil der Planungsleistung.",
            },
            {
              id: "imp_prap2-thema-1_3",
              q: "Was bedeutet ABGRENZBARKEIT des Projektthemas?",
              options: [
                "Das Projekt darf keine Schnittstellen zu anderen Systemen haben",
                "Das Thema muss geheim gehalten werden",
                "Es dürfen keine Kollegen im selben Raum arbeiten",
                "Der eigene Anteil ist klar von Vor- und Fremdleistungen getrennt und als eigenständige Leistung erkennbar",
              ],
              correct: 3,
              explain:
                "Die Prüfer müssen DEINE Leistung bewerten können – deshalb im Antrag sauber trennen, was vorhanden war und was du selbst konzipierst/umsetzt.",
            },
            {
              id: "imp_prap2-thema-1_4",
              q: "Wie weist du die Wirtschaftlichkeit eines Projekts typischerweise nach?",
              options: [
                "Durch die Aussage des Chefs, dass es sich lohnt",
                "Durch möglichst niedrige Gesamtkosten",
                "Kostenkalkulation plus Nutzen- oder Alternativenvergleich (z. B. TCO über 3 Jahre, Amortisation, Nutzwertanalyse)",
                "Wirtschaftlichkeit ist nur beim Kaufmann gefragt",
              ],
              correct: 2,
              explain:
                "Zahlenbasiert argumentieren: Kosten je Alternative, Nutzen (z. B. vermiedene Ausfallzeit), Amortisationsdauer – das trägt Antrag, Doku UND Fachgespräch.",
            },
            {
              id: "imp_prap2-thema-1_5",
              q: "In der Projektdoku sollen Screenshots mit echten Kundendaten erscheinen. Richtige Vorgehensweise?",
              options: [
                "Einfach einfügen – die IHK unterliegt der Schweigepflicht",
                "Daten anonymisieren bzw. Freigabe des Betriebs einholen, bevor dokumentiert wird",
                "Auf Screenshots komplett verzichten",
                "Nur die Hälfte der Daten zeigen",
              ],
              correct: 1,
              explain:
                "Datenschutz/Geheimhaltung VOR dem Schreiben klären: anonymisieren (Hostnamen, IPs, Personendaten) oder Freigabe – sonst riskierst du Ärger im Betrieb.",
            },
            {
              id: "imp_prap2-thema-1_6",
              q: "Worin liegt beim Thema „Backup-Konzept nach 3-2-1“ der bewertbare Entscheidungskern?",
              options: [
                "Im Kauf möglichst vieler Festplatten",
                "Im Auswendiglernen der 3-2-1-Regel",
                "Im Vergleich von Sicherungssoftware, Medien und Strategien anhand hergeleiteter RPO-/RTO-Anforderungen",
                "Darin, dass Backups grundsätzlich sinnvoll sind",
              ],
              correct: 2,
              explain:
                "RPO/RTO aus dem Geschäftsbedarf herleiten, daraus Strategie und Produktwahl begründen, mit Kapazitäts- und Zeitfenster-Rechnung unterlegen.",
            },
            {
              id: "imp_prap2-thema-1_7",
              q: "Was zeichnet ein gutes Thema für die SCHULISCHE Praktikumsarbeit aus?",
              options: [
                "Es umfasst das komplette Praktikum von Tag 1 bis zum Ende",
                "Ein eng umrissener, selbst erlebter Arbeitsbereich, den man beschreiben UND reflektieren kann",
                "Es enthält zwingend eine Wirtschaftlichkeitsrechnung",
                "Es behandelt ausschließlich Theorie aus dem Unterricht",
              ],
              correct: 1,
              explain:
                "Die Schularbeit lebt von Beschreibung + Reflexion (Soll/Ist, eigene Lernkurve) – nicht von Kaufmannsrechnung. Enger Fokus schlägt Vollständigkeit.",
            },
            {
              id: "imp_prap2-thema-1_8",
              q: "Wer genehmigt den Projektantrag für die betriebliche Projektarbeit?",
              options: [
                "Der Prüfungsausschuss der zuständigen IHK",
                "Die Berufsschule",
                "Der Ausbilder allein",
                "Das Bundesministerium für Bildung",
              ],
              correct: 0,
              explain:
                "Der Antrag geht an die IHK; der Prüfungsausschuss genehmigt (ggf. mit Auflagen). Erst nach Genehmigung darf die Durchführung starten.",
            },
            {
              id: "imp_prap2-thema-1_9",
              q: "Welcher Projekttitel ist antragstauglich formuliert?",
              options: [
                "„Zabbix installieren“",
                "„Irgendwas mit Monitoring“",
                "„Server der Firma“",
                "„Konzeption und pilothafte Einführung eines Monitoring-Systems zur proaktiven Überwachung der Serverinfrastruktur“",
              ],
              correct: 3,
              explain:
                "Ergebnis- und konzeptorientiert formulieren: WAS wird konzipiert/eingeführt, WOFÜR – ohne Produktnamen im Titel (die Auswahl ist ja Teil des Projekts).",
            },
          ],
        },
      ],
    },
    {
      id: "ap2-wiso",
      title: "WiSo (Wirtschaft & Soziales)",
      lessons: [
        {
          id: "ap2-w-1",
          title: "WiSo-Überblick für die Prüfung",
          content: [
            { type: "heading", value: "WiSo in der AP2 (10%)" },
            {
              type: "text",
              value:
                "60 Minuten, Multiple-Choice und offene Fragen. Prüft allgemeine Wirtschafts- und Sozialkunde, die im Politik- und Wirtschaftsunterricht behandelt wird.",
            },
            { type: "heading", value: "Themengebiete" },
            {
              type: "text",
              value:
                "Berufsbildung: BBiG, Ausbildungsvertrag, Rechte/Pflichten Azubi & AG, Prüfungswesen, Probezeit, Kündigung in der Ausbildung. Arbeitsrecht: Arbeitsvertrag, Kündigungsschutz, Arbeitszeitgesetz (max. 8h/Tag, 48h/Woche), Mutterschutz, Jugendarbeitsschutz (JArbSchG: U18 max. 8h/Tag, 40h/Woche, keine Nachtarbeit). Mitbestimmung: Betriebsrat, JAV, Tarifverträge (Manteltarif, Entgelttarif, Rahmentarif), Streik & Aussperrung. Sozialversicherung: 5 Säulen, Beitragssätze, Prinzipien. Wirtschaftsordnung: Soziale Marktwirtschaft, Angebot & Nachfrage, Konjunkturzyklus.",
            },
            { type: "heading", value: "Gehaltsabrechnung mit Rechenbeispiel" },
            {
              type: "text",
              value:
                "Bruttogehalt: 2.800 EUR/Monat (Steuerklasse I, keine Kirchensteuer, keine Kinder).",
            },
            {
              type: "text",
              value:
                "Abzüge AN: KV 7,3% + Zusatz 0,8% = 226,80 EUR. RV 9,3% = 260,40 EUR. AV 1,3% = 36,40 EUR. PV 1,7% + 0,6% kinderlos = 64,40 EUR. Lohnsteuer ca. 350 EUR (abhängig von Steuerklasse). Soli: entfällt i. d. R. seit 2021 (Freigrenze) = 0 EUR. Summe Abzüge: ~938 EUR. Netto: ~1.862 EUR.",
            },
            {
              type: "text",
              value:
                "AG-Kosten zusätzlich: KV 7,3% + 0,8% (hälftiger Zusatzbeitrag) = 226,80 EUR. RV 9,3% = 260,40 EUR. AV 1,3% = 36,40 EUR. PV 1,7% = 47,60 EUR. UV ca. 1,5% = 42 EUR. Umlage U1/U2/Insolvenzgeld ca. 3% = 84 EUR. AG-Gesamtkosten: ~3.497 EUR (Brutto + AG-Anteile).",
            },
            {
              type: "note",
              value:
                "Gehaltsabrechnung kommt in WiSo (AP2). Merke: AN und AG teilen sich KV/RV/AV/PV hälftig. UV zahlt nur AG. Kinderlose zahlen PV-Zuschlag.",
            },
            { type: "heading", value: "Konjunkturzyklus" },
            {
              type: "text",
              value:
                "Aufschwung (Expansion) → Boom (Hochkonjunktur) → Abschwung (Rezession) → Tief (Depression) → wieder Aufschwung. Indikatoren: BIP, Arbeitslosenquote, Inflationsrate, Auftragseingänge.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Kündigungsfall lösen" },
            {
              type: "text",
              value:
                "Frau K. arbeitet seit 5 Jahren als Fachinformatikerin in einem Betrieb mit 25 Beschäftigten. Der Arbeitgeber will betriebsbedingt kündigen. a) Welche gesetzliche Kündigungsfrist gilt (§ 622 BGB)? b) Findet das Kündigungsschutzgesetz Anwendung – mit Begründung? c) Nenne die vier Kriterien der Sozialauswahl.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Nach 5 Jahren Betriebszugehörigkeit gilt für den Arbeitgeber eine Frist von 2 Monaten zum Monatsende (§ 622 Abs. 2 BGB).\nb) Ja: Der Betrieb hat mehr als 10 Arbeitnehmer und das Arbeitsverhältnis besteht länger als 6 Monate – beide Schwellen des KSchG sind erfüllt. Die Kündigung braucht daher einen sozial rechtfertigenden Grund (hier: dringende betriebliche Erfordernisse).\nc) Sozialauswahl: Dauer der Betriebszugehörigkeit, Lebensalter, Unterhaltspflichten, Schwerbehinderung.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Sozialversicherung zuordnen" },
            {
              type: "text",
              value:
                "Ordne den Fällen den richtigen Sozialversicherungszweig zu: (a) Azubi verletzt sich auf dem Weg zur Berufsschule, (b) Mitarbeiterin erhält nach Jobverlust Unterstützung und Vermittlung, (c) Behandlungskosten einer Grippe, (d) monatliche Einzahlung für das Alter, (e) Finanzierung der häuslichen Pflege eines Angehörigen. Nenne zusätzlich, welcher Zweig allein vom Arbeitgeber finanziert wird.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n(a) Gesetzliche Unfallversicherung (Wegeunfall – zuständig: Berufsgenossenschaft).\n(b) Arbeitslosenversicherung (Agentur für Arbeit).\n(c) Gesetzliche Krankenversicherung.\n(d) Gesetzliche Rentenversicherung.\n(e) Pflegeversicherung.\nAllein vom Arbeitgeber finanziert: die Unfallversicherung – alle anderen Zweige tragen Arbeitgeber und Arbeitnehmer grundsätzlich je zur Hälfte (Beitragssatz-Details variieren).",
            },
            { type: "heading", value: "Themen-Wahrscheinlichkeit: Was kommt wie oft dran?" },
            {
              type: "text",
              value:
                "Diese Auswertung basiert auf einer automatischen Volltext-Analyse von 28 Original-Prüfungen (WiSo-Prüfungen der IT-Berufe, Jahrgänge 2012–2023). Der Prozentwert gibt an, in wie vielen der analysierten Prüfungen das Thema vorkam. Wichtig für die Einordnung: Ein Großteil der Prüfungen wurde per Texterkennung (OCR) ausgewertet – die Werte sind Näherungen, keine Garantie. Und: Vergangene Häufigkeit ist keine Zusage für deine Prüfung; die Prüfungserstellung variiert Themen bewusst. Als Lernstrategie taugt die Liste trotzdem: Was in über der Hälfte der Prüfungen vorkam, gehört in jede Vorbereitung.",
            },
            {
              type: "code",
              value:
                " 96 %  ███████████████████░  Arbeitsrecht / Kündigung / Arbeitsvertrag  (fast sicher)\n 96 %  ███████████████████░  Betriebsrat / JAV / Mitbestimmung  (fast sicher)\n 96 %  ███████████████████░  Sozialversicherung  (fast sicher)\n 89 %  ██████████████████░░  Tarifvertrag / Streik  (fast sicher)\n 82 %  ████████████████░░░░  Mängel / Gewährleistung / Verzug  (fast sicher)\n 79 %  ████████████████░░░░  Rechtsformen  (fast sicher)\n 68 %  ██████████████░░░░░░  Kündigungsschutz / Mutterschutz  (fast sicher)\n 57 %  ███████████░░░░░░░░░  Marktformen / Preisbildung  (sehr häufig)\n 57 %  ███████████░░░░░░░░░  EU / Europass / Außenwirtschaft  (sehr häufig)\n 46 %  █████████░░░░░░░░░░░  BBiG / Ausbildung / Berichtsheft  (sehr häufig)\n 36 %  ███████░░░░░░░░░░░░░  Magisches Viereck / Konjunktur / Inflation  (häufig)\n 25 %  █████░░░░░░░░░░░░░░░  Kaufvertrag / Willenserklärung / AGB  (häufig)\n 21 %  ████░░░░░░░░░░░░░░░░  ER-Modell / Kardinalität  (gelegentlich)\n 21 %  ████░░░░░░░░░░░░░░░░  Ergonomie / Arbeitsschutz am Platz  (gelegentlich)\n 18 %  ████░░░░░░░░░░░░░░░░  Abschreibung / Kalkulation  (gelegentlich)\n 14 %  ███░░░░░░░░░░░░░░░░░  Fixkosten / Deckungsbeitrag / Break-Even  (gelegentlich)\n 11 %  ██░░░░░░░░░░░░░░░░░░  Verschlüsselung / Zertifikate / Hash  (gelegentlich)\n 11 %  ██░░░░░░░░░░░░░░░░░░  DSGVO / Datenschutz  (gelegentlich)",
            },
            {
              type: "note",
              value:
                "Lernstrategie daraus: 1. Alles ab „sehr häufig“ zuerst sicher beherrschen – das ist der Grundstock der Punkte. 2. „Häufig“-Themen mindestens einmal mit Übungsaufgabe durcharbeiten. 3. „Gelegentlich“-Themen über die Lernkarten und das Blitz-Training abdecken – hier reicht Überblickswissen für Teilpunkte. Rechenthemen (Subnetting, Kalkulation, Netzplan) immer mit Rechenweg üben: Sie kommen nicht nur oft, sie geben auch planbare Punkte.",
            },
          ],
          quiz: [
            {
              id: "imp_ap2-w-1_0",
              q: "Max. Arbeitszeit pro Tag nach ArbZG?",
              options: ["12h", "6h", "8h", "10h"],
              correct: 2,
              explain: "8 Stunden pro Tag (kann auf 10h verlängert werden bei Ausgleich).",
            },
            {
              id: "imp_ap2-w-1_1",
              q: "JArbSchG: Max. Wochenarbeitszeit U18?",
              options: ["48h", "40h", "35h", "60h"],
              correct: 1,
              explain: "Unter 18: max. 40 Stunden pro Woche.",
            },
            {
              id: "imp_ap2-w-1_2",
              q: "Was kommt nach dem Boom im Konjunkturzyklus?",
              options: ["Expansion", "Aufschwung", "Depression", "Rezession"],
              correct: 3,
              explain: "Boom → Abschwung/Rezession.",
            },
            {
              id: "imp_ap2-w-1_3",
              q: "Brutto − Steuern − SV-Beiträge = ?",
              options: ["Bruttolohn", "Umsatz", "Gesamtkosten AG", "Nettolohn"],
              correct: 3,
              explain: "Nettolohn = was auf dem Konto ankommt.",
            },
            {
              id: "imp_ap2-w-1_4",
              q: "Wie heißt der Tiefpunkt des Konjunkturzyklus?",
              options: ["Boom", "Depression", "Aufschwung", "Expansion"],
              correct: 1,
              explain:
                "Zyklus: Aufschwung → Boom (Hochkonjunktur) → Abschwung/Rezession → Depression (Tiefstand).",
            },
            {
              id: "imp_ap2-w-1_5",
              q: "BIP = ?",
              options: [
                "Bundesweiter IT-Plan",
                "Bruttoinlandsprodukt",
                "Betriebsinterne Produktion",
                "Bruttoindividualpreis",
              ],
              correct: 1,
              explain: "Bruttoinlandsprodukt: Wert aller Güter/DL eines Landes pro Jahr.",
            },
            {
              id: "imp_ap2-w-1_6",
              q: "Soziale Marktwirtschaft?",
              options: ["Nur Markt", "Markt + staatliche Korrektur", "Nur Staat", "Planwirtschaft"],
              correct: 1,
              explain: "Freiheit + Soziales.",
            },
            {
              id: "imp_ap2-w-1_7",
              q: "Streikrecht GG?",
              options: [
                "Art. 9 Abs. 3 (Koalitionsfreiheit)",
                "Nur Beamte",
                "Nur Gewerkschaft",
                "Nein",
              ],
              correct: 0,
              explain: "Grundrecht.",
            },
            {
              id: "imp_ap2-w-1_8",
              q: "Inflation?",
              options: ["Zins", "Allgemeine Preissteigerung %", "BIP", "ALQ"],
              correct: 1,
              explain: "Preise steigen.",
            },
            {
              id: "imp_ap2-w-1_9",
              q: "Tarifbindung?",
              options: ["Nur Azubis", "Nur Mitglieder beider Seiten", "Alle", "Nur Beamte"],
              correct: 1,
              explain: "Mitgliedschaft nötig.",
            },
            {
              id: "imp_ap2-w-1_10",
              q: "Welche fünf Zweige umfasst die gesetzliche Sozialversicherung?",
              options: [
                "Kranken-, Pflege-, Renten-, Arbeitslosen- und Unfallversicherung",
                "Steuer-, Zoll-, Beitrags-, Gebühren- und Umlageversicherung",
                "Nur Kranken- und Rentenversicherung",
                "Hausrat-, Haftpflicht-, Kfz-, Lebens- und Reiseversicherung",
              ],
              correct: 0,
              explain:
                "Die fünf Säulen sind Pflichtwissen – die ersten vier werden paritätisch finanziert, die Unfallversicherung allein vom Arbeitgeber.",
            },
            {
              id: "imp_ap2-w-1_11",
              q: "Wer trägt die Beiträge zur gesetzlichen Unfallversicherung?",
              options: [
                "Der Staat vollständig",
                "Beide je zur Hälfte",
                "Allein der Arbeitgeber",
                "Allein der Arbeitnehmer",
              ],
              correct: 2,
              explain:
                "Träger sind die Berufsgenossenschaften; versichert sind auch Wegeunfälle und Berufskrankheiten.",
            },
            {
              id: "imp_ap2-w-1_12",
              q: "Die Kündigungsfrist in der Probezeit beträgt …",
              options: ["4 Wochen zum 15. oder Monatsende", "1 Tag", "3 Monate", "2 Wochen"],
              correct: 3,
              explain:
                "Während der vereinbarten Probezeit (max. 6 Monate) gilt § 622 Abs. 3 BGB: zwei Wochen, taggenau.",
            },
            {
              id: "imp_ap2-w-1_13",
              q: "Ab wann greift das Kündigungsschutzgesetz?",
              options: [
                "Erst nach mindestens 10 Jahren ununterbrochener Betriebszugehörigkeit",
                "Betrieb mit mehr als 10 Arbeitnehmern und Arbeitsverhältnis länger als 6 Monate",
                "Ausschließlich in Betrieben, in denen ein Betriebsrat gewählt wurde",
                "Ab dem ersten Arbeitstag in jedem Betrieb, unabhängig von dessen Größe",
              ],
              correct: 1,
              explain:
                "Beide Voraussetzungen müssen erfüllt sein – dann braucht die Kündigung einen sozial rechtfertigenden Grund.",
            },
            {
              id: "imp_ap2-w-1_14",
              q: "Ab wie vielen ständigen wahlberechtigten Arbeitnehmern kann ein Betriebsrat gewählt werden?",
              options: ["20", "50", "500", "5"],
              correct: 3,
              explain: "§ 1 BetrVG: fünf ständige wahlberechtigte AN, davon drei wählbar.",
            },
            {
              id: "imp_ap2-w-1_15",
              q: "Wie kann einem Azubi nach der Probezeit gekündigt werden?",
              options: [
                "Jederzeit ordentlich mit 2 Wochen Frist",
                "Gar nicht",
                "Nur außerordentlich aus wichtigem Grund",
                "Nur zum Jahresende",
              ],
              correct: 2,
              explain:
                "Bzw. durch den Azubi mit 4 Wochen bei Berufsaufgabe/-wechsel. § 22 BBiG schützt das Ausbildungsverhältnis – ordentliche Kündigung durch den Betrieb ist ausgeschlossen.",
            },
            {
              id: "imp_ap2-w-1_16",
              q: "Der gesetzliche Mindesturlaub nach BUrlG beträgt …",
              options: [
                "Es gibt keinen gesetzlichen Anspruch",
                "30 Arbeitstage für alle",
                "24 Werktage bei einer 6-Tage-Woche",
                "14 Kalendertage",
              ],
              correct: 2,
              explain:
                "Entspricht 20 Arbeitstagen bei 5-Tage-Woche. Tarif- und Arbeitsverträge gewähren oft mehr – das Gesetz setzt nur die Untergrenze.",
            },
            {
              id: "imp_ap2-w-1_17",
              q: "Was bedeutet die Friedenspflicht während der Laufzeit eines Tarifvertrags?",
              options: [
                "Die Pflicht der Beschäftigten, angeordnete Überstunden während der Laufzeit zu leisten",
                "Keine Arbeitskampfmaßnahmen (Streik/Aussperrung) bezüglich der tariflich geregelten Themen",
                "Ein Verbot von Betriebsversammlungen und Personalgesprächen während der Laufzeit",
                "Ein generelles Redeverbot über Gehälter und Arbeitsbedingungen im Betrieb",
              ],
              correct: 1,
              explain:
                "Erst nach Ablauf bzw. Kündigung des Tarifvertrags sind Kampfmaßnahmen zu diesen Inhalten wieder zulässig.",
            },
            {
              id: "imp_ap2-w-1_18",
              q: "Die Prokura …",
              options: [
                "entsteht automatisch nach zehn Jahren Betriebszugehörigkeit ohne gesonderte Erteilung",
                "berechtigt lediglich zu einfachen Botengängen wie dem Leeren des Briefkastens",
                "gilt nur bei mündlicher Erteilung und erlischt mit schriftlicher Fixierung",
                "ist eine umfassende handelsrechtliche Vollmacht und wird ins Handelsregister eingetragen",
              ],
              correct: 3,
              explain:
                "Sie ermächtigt zu fast allen Geschäften des Handelsgewerbes (Ausnahmen u. a. Grundstücksveräußerung ohne Sondervollmacht).",
            },
            {
              id: "imp_ap2-w-1_19",
              q: "Was regelt das Nachweisgesetz im Arbeitsverhältnis?",
              options: [
                "Es verbietet mündliche Arbeitsverträge und erklärt sie für nichtig",
                "Es regelt die Zuordnung der Steuerklassen bei Aufnahme der Beschäftigung",
                "Arbeitsverträge sind nur nach notarieller Beurkundung rechtswirksam",
                "Der Arbeitgeber muss die wesentlichen Vertragsbedingungen dokumentiert nachweisen (seit 2025 genügt i. d. R. die Textform, z. B. PDF)",
              ],
              correct: 3,
              explain:
                "Ein Arbeitsvertrag kann grundsätzlich formfrei geschlossen werden – die wesentlichen Bedingungen sind aber nachzuweisen. Seit dem Bürokratieentlastungsgesetz IV (1.1.2025) reicht dafür meist die Textform; Schriftform nur noch auf Verlangen bzw. in bestimmten Branchen.",
            },
          ],
        },
      ],
    },
    {
      id: "ap2-üb",
      title: "Übungsaufgaben & Szenarien",
      lessons: [
        {
          id: "ap2-ub-1",
          title: "AP2-Übungsaufgaben & Szenarien (mit Musterlösung)",
          content: [
            {
              type: "note",
              value:
                "AP2 ist projektorientiert. Diese Szenarien trainieren die Argumentation, die du in Doku UND Fachgespräch brauchst – nicht auswendig lernen, sondern begründen üben.",
            },
            { type: "heading", value: "Szenario 1: Wirtschaftlichkeit begründen" },
            {
              type: "text",
              value:
                "In deinem Projekt führst du eine Virtualisierungslösung ein. Hardware-Investition: 12.000€. Durch Servervirtualisierung sparst du jährlich 4.000€ (Strom, Wartung, Platz). Berechne die Amortisationsdauer und den ROI nach 5 Jahren. Argumentiere, ob sich das Projekt lohnt.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nAmortisationsdauer = Investition / jährl. Einsparung\n                   = 12.000 / 4.000 = 3 Jahre\n\nROI nach 5 Jahren:\nGesamteinsparung = 5 × 4.000 = 20.000€\nGewinn = 20.000 - 12.000 = 8.000€\nROI = Gewinn / Investition × 100\n    = 8.000 / 12.000 × 100 = 66,7%\n\nArgumentation: Investition amortisiert sich nach 3\nJahren, danach reine Einsparung. Bei 5 Jahren\nNutzungsdauer ROI 66,7% → wirtschaftlich sinnvoll.",
            },
            { type: "heading", value: "Szenario 2: Migrationsstrategie wählen" },
            {
              type: "text",
              value:
                "Ein Kunde mit 50 Arbeitsplätzen will von Windows-Fileserver auf eine neue Server-Infrastruktur migrieren. Ausfallzeiten sollen minimal sein. Welche Migrationsstrategie empfiehlst du (Big Bang / Parallel / Pilot) und warum?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nEmpfehlung: Parallelbetrieb mit Pilotphase\n\n1. Pilot: Erst eine Abteilung (z.B. 5 PCs)\n   auf neues System umstellen, testen.\n2. Parallel: Alt- und Neusystem laufen parallel,\n   Daten werden synchronisiert.\n3. Schrittweise Umstellung der restlichen Abteilungen.\n4. Nach erfolgreicher Migration Altsystem abschalten.\n\nBegründung: Minimale Ausfallzeit (kein kompletter\nStillstand wie bei Big Bang), Rollback jederzeit\nmöglich, Risiko begrenzt. Nachteil: höherer Aufwand\nund temporär doppelte Infrastruktur.",
            },
            { type: "heading", value: "Szenario 3: Projektdokumentation strukturieren" },
            {
              type: "text",
              value:
                "Nenne die Hauptbestandteile einer AP2-Projektdokumentation in der richtigen Reihenfolge und erkläre kurz Soll-Ist-Vergleich.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (typische Gliederung):\n1. Deckblatt + Inhaltsverzeichnis\n2. Projektumfeld / Ausgangssituation\n3. Projektziel (SMART formuliert)\n4. Ist-Analyse\n5. Soll-Konzept\n6. Projektplanung (PSP, Zeitplan, Ressourcen, Kosten)\n7. Durchführung / Realisierung\n8. Qualitätssicherung / Tests\n9. Soll-Ist-Vergleich\n10. Abnahme / Übergabe\n11. Fazit / Ausblick\n12. Anhang (Netzpläne, Configs, Screenshots)\n\nSoll-Ist-Vergleich: Geplante vs. tatsächliche Zeit\nund Kosten gegenüberstellen, Abweichungen begründen\n(z.B. mehr Zeit für Tests als geplant, weil...).",
            },
            { type: "heading", value: "Szenario 4: Fachgespräch-Vorbereitung" },
            {
              type: "text",
              value:
                "Typische Fachgespräch-Fragen, auf die du vorbereitet sein musst: Warum hast du DIESE Lösung gewählt? Welche Alternativen gab es? Wie hast du die Sicherheit gewährleistet? Was würdest du heute anders machen? Übe, jede Entscheidung im Projekt begründen zu können.",
            },
            {
              type: "note",
              value:
                "Im Fachgespräch zählt nicht die perfekte Lösung, sondern dass du deine Entscheidungen NACHVOLLZIEHBAR begründen kannst. Bereite zu jeder Projektentscheidung eine Alternative + Begründung vor.",
            },
          ],
          quiz: [
            {
              id: "imp_ap2-ub-1_0",
              q: "AP2-Projekt (FISI): max. Umfang der Dokumentation?",
              options: [
                "Unbegrenzt",
                "ca. 10–15 Seiten + Anhang (je nach IHK)",
                "100 Seiten",
                "mindestens 50 Seiten",
              ],
              correct: 1,
              explain:
                "Üblich sind je nach IHK ca. 10–15 Seiten ohne Anhang – die genaue Vorgabe steht in den Unterlagen deiner Kammer. Mehr Masse gibt keine Punkte, Präzision schon.",
            },
            {
              id: "imp_ap2-ub-1_1",
              q: "Projektantrag: was rein?",
              options: [
                "Der vollständige Quellcode der geplanten Umsetzung",
                "Ausgangssituation, Ziel, Teilschritte, Zeitplanung",
                "Nur die Kostenkalkulation mit den Stundensätzen",
                "Nur der Projekttitel und der Name des Betriebs",
              ],
              correct: 1,
              explain: "Antrag muss von IHK genehmigt werden.",
            },
            {
              id: "imp_ap2-ub-1_2",
              q: "Soll-Ist-Vergleich Zweck?",
              options: [
                "Funktionstest des Produkts gegen die Testfälle",
                "Geplante vs. tatsächliche Zeit/Kosten bewerten",
                "Vermarktung der Projektergebnisse beim Kunden",
                "Reine Pflichtangabe für die Doku ohne Nutzen",
              ],
              correct: 1,
              explain: "Abweichungen erkennen und begründen.",
            },
            {
              id: "imp_ap2-ub-1_3",
              q: "Wirtschaftlichkeit im Projekt: Kennzahl?",
              options: ["ROI / Amortisationsdauer", "Nur Umsatz", "Nur Kosten", "Taktrate"],
              correct: 0,
              explain: "ROI und Amortisation zeigen Wirtschaftlichkeit.",
            },
            {
              id: "imp_ap2-ub-1_4",
              q: "Fachgespräch Dauer (Richtwert)?",
              options: ["5 Min", "60 Min", "ca. 15 Min", "2 h"],
              correct: 2,
              explain:
                "Präsentation (ca. 15 Min) + Fachgespräch (ca. 15 Min) = zusammen höchstens 30 Min laut Verordnung.",
            },
            {
              id: "imp_ap2-ub-1_5",
              q: "Lastenheft erstellt wer?",
              options: ["Auftraggeber (Kunde)", "Auftragnehmer", "IHK", "Berufsschule"],
              correct: 0,
              explain: "Lastenheft = Kunde (WAS). Pflichtenheft = AN (WIE).",
            },
            {
              id: "imp_ap2-ub-1_6",
              q: "Meilenstein?",
              options: [
                "Pufferzeit",
                "Risiko",
                "Tägliche Aufgabe",
                "Definierter Zwischenpunkt mit Ergebnis",
              ],
              correct: 3,
              explain: "Meilenstein = überprüfbares Zwischenergebnis.",
            },
            {
              id: "imp_ap2-ub-1_7",
              q: "Risikoanalyse im Projekt?",
              options: [
                "Nur Kostenrisiken betrachten, alles andere ignorieren",
                "Risiken identifizieren, bewerten, Gegenmaßnahmen",
                "Unnötig – kleine Projekte haben keine echten Risiken",
                "Erst am Projektende rückblickend durchführen",
              ],
              correct: 1,
              explain: "Eintrittswahrscheinlichkeit × Auswirkung.",
            },
            {
              id: "imp_ap2-ub-1_8",
              q: "Projektabschluss beinhaltet?",
              options: [
                "Nur Rechnung",
                "Abnahme, Doku, Übergabe, Fazit",
                "Neustart",
                "Nur Präsentation",
              ],
              correct: 1,
              explain: "Formale Abnahme + Übergabe an Kunde.",
            },
            {
              id: "imp_ap2-ub-1_9",
              q: "Amortisationsdauer = ?",
              options: [
                "Investition / jährliche Einsparung",
                "Umsatz × Zeit",
                "Gewinn/Jahr",
                "Kosten - Nutzen",
              ],
              correct: 0,
              explain: "Wann hat sich die Investition bezahlt gemacht?",
            },
            {
              id: "imp_ap2-ub-1_10",
              q: "Was gehört in eine Ist-Analyse des Projekts?",
              options: [
                "Das vollständige Organigramm der IHK samt Prüfungsausschüssen, da diese das Projekt später bewerten",
                "Bestehende Infrastruktur, Prozesse und Schwachstellen als dokumentierter Ausgangszustand",
                "Die bereits ausgearbeitete fertige Lösung inklusive Konfiguration, damit der Prüfer das Ergebnis vorab sieht",
                "Ausschließlich die Wunschliste des Kunden mit allen gewünschten Features, ohne den aktuellen Zustand zu betrachten",
              ],
              correct: 1,
              explain:
                "Ohne sauberen Ist-Zustand lassen sich weder Soll-Konzept noch Erfolg belegen.",
            },
            {
              id: "imp_ap2-ub-1_11",
              q: "Personalkosten im Projekt kalkuliert man üblicherweise als …",
              options: [
                "Pauschal 1.000 € pro Projekt",
                "Anzahl Mitarbeiter × Monatsgehalt, unabhängig vom Einsatz",
                "geplante Stunden × interner Stundensatz je Mitarbeiterrolle",
                "Gar nicht – Arbeitszeit ist kostenlos",
              ],
              correct: 2,
              explain:
                "Auch Azubi-Stunden bekommen einen (niedrigeren) Satz – das fragt der Ausschuss gern im Fachgespräch.",
            },
            {
              id: "imp_ap2-ub-1_12",
              q: "Eine Risikomatrix bewertet Risiken nach …",
              options: [
                "Eintrittswahrscheinlichkeit und Schadenshöhe",
                "Alphabet und Datum",
                "Farbe und Form",
                "Zuständigkeit und Uhrzeit",
              ],
              correct: 0,
              explain:
                "Hohe Wahrscheinlichkeit × hoher Schaden = Maßnahmen zwingend (vermeiden, vermindern, übertragen, akzeptieren).",
            },
            {
              id: "imp_ap2-ub-1_13",
              q: "Warum plant man Pufferzeiten in den Projektzeitplan ein?",
              options: [
                "Damit das Projekt teurer kalkuliert werden kann und mehr Budget abgerechnet wird",
                "Pufferzeiten sind nach gängigen Projektmanagement-Standards unzulässig und zu vermeiden",
                "Um dem Kunden eine längere Projektdauer vorzutäuschen, als tatsächlich benötigt wird",
                "Unvorhergesehenes (Lieferverzug, Krankheit) soll den Endtermin nicht sofort gefährden",
              ],
              correct: 3,
              explain:
                "Realistische Puffer zeigen Planungskompetenz; ihr Verbrauch wird im Soll-Ist-Vergleich erläutert.",
            },
            {
              id: "imp_ap2-ub-1_14",
              q: "Wer oder was sind Stakeholder?",
              options: [
                "Ausschließlich die Hardwarelieferanten, die Komponenten für das Projekt bereitstellen",
                "Nur die Programmierer, die den Quellcode des Projekts tatsächlich schreiben",
                "Nur die Geldgeber, die das Budget des Projekts bereitstellen und freigeben",
                "Alle Personen/Gruppen, die vom Projekt betroffen sind oder Einfluss darauf haben",
              ],
              correct: 3,
              explain:
                "Kunde, Anwender, IT-Betrieb, Geschäftsführung, ggf. Betriebsrat – wer sie übersieht, bekommt Widerstände.",
            },
            {
              id: "imp_ap2-ub-1_15",
              q: "Welche Bedeutung hat die Abnahme durch den Kunden?",
              options: [
                "Sie schließt spätere Wartungsarbeiten am abgenommenen System vertraglich aus",
                "Sie bestätigt die vertragsgemäße Leistung; Gewährleistungsfristen beginnen",
                "Sie ersetzt die Schlussrechnung und beendet damit den Zahlungsanspruch",
                "Sie ist eine unverbindliche Höflichkeitsgeste ohne rechtliche Bedeutung",
              ],
              correct: 1,
              explain:
                "Deshalb gehört ein Abnahmeprotokoll mit Datum, geprüften Punkten und Unterschriften in jede Projektarbeit.",
            },
            {
              id: "imp_ap2-ub-1_16",
              q: "Was ist ein Change Request?",
              options: [
                "Eine formale Änderungsanforderung an den vereinbarten Projektumfang mit Bewertung von Aufwand und Folgen",
                "Ein gemeldeter Hardwaredefekt, der vom Support als Incident mit Prioritätsstufe erfasst und repariert wird",
                "Eine Urlaubsanfrage eines Projektmitarbeiters, die der Projektleiter im Ressourcenplan genehmigen muss",
                "Ein anderes Wort für die regelmäßige Datensicherung, die vor jeder Änderung am System angefertigt wird",
              ],
              correct: 0,
              explain:
                "Ungeregelte Änderungen ('Scope Creep') sprengen Zeit und Budget – das Änderungsverfahren schützt beide Seiten.",
            },
            {
              id: "imp_ap2-ub-1_17",
              q: "Wozu dient die Projektabgrenzung im Antrag und in der Doku?",
              options: [
                "Sie grenzt die Prüfer vom Zugriff auf die Anlagen aus",
                "Sie weist die Seitenzahl gegenüber der IHK nach",
                "Sie dient als optische Auflockerung des Layouts",
                "Sie legt fest, was ausdrücklich NICHT Teil des Projekts ist",
              ],
              correct: 3,
              explain:
                "Beispiel: 'Die Schulung der Endanwender erfolgt nach Projektende durch den Betrieb' – schützt vor Umfangsdiskussionen.",
            },
            {
              id: "imp_ap2-ub-1_18",
              q: "Welche Testart bestätigt am Ende die Erfüllung der Kundenanforderungen?",
              options: [
                "Es ist gar kein Test erforderlich, die Lieferung gilt als Nachweis",
                "Der Modultest des Entwicklers während der Implementierung",
                "Abnahmetest gegen die definierten Anforderungen/Abnahmekriterien",
                "Ein spontaner explorativer Klicktest ohne Testplan und Kriterien",
              ],
              correct: 2,
              explain:
                "Testfälle aus den Anforderungen ableiten und Ergebnisse protokollieren – Qualitätssicherung ist Bewertungskriterium.",
            },
            {
              id: "imp_ap2-ub-1_19",
              q: "Der Soll-Ist-Vergleich bei den Kosten ergibt +6 % gegenüber Plan. Wie gehst du in der Doku damit um?",
              options: [
                "Die Verantwortung für die Mehrkosten in der Doku dem Kunden zuweisen",
                "Abweichung offen ausweisen, Ursache erklären und Konsequenz ableiten",
                "Den Kostenabschnitt komplett weglassen, um Nachfragen zu vermeiden",
                "Die Ist-Zahlen nachträglich anpassen, bis sie dem Plan entsprechen",
              ],
              correct: 1,
              explain:
                "Begründete Abweichungen zeigen Projektsteuerung – verschwiegene Abweichungen fallen im Fachgespräch auf.",
            },
          ],
        },
      ],
    },
    {
      id: "ap2-train",
      title: "Szenariotraining AP2",
      lessons: [
        {
          id: "ap2-t-4",
          title: "Szenariotraining: USV, Wärmelast & Klimatisierung",
          content: [
            {
              type: "text",
              value:
                'AUSGANGSSITUATION: Das Medizinische Versorgungszentrum "Praxisverbund Leine" zieht seine IT aus drei Praxen in einen zentralen Technikraum um. Geplanter Bestand: 2 Virtualisierungshosts à 600 W, 1 Backup-Server 400 W, 1 NAS 250 W, 2 Switches à 75 W, Router/Firewall 100 W. Der Raum hat bisher weder Klimatisierung noch USV. Vorgabe der Geschäftsführung: Bei Stromausfall müssen alle Systeme geordnet herunterfahren können; der Ausfall eines einzelnen Klimageräts darf den Betrieb nicht gefährden. cos φ der Netzteile: 0,9.',
            },
            { type: "heading", value: "Aufgabe a) Leistungsbilanz und USV (8 Punkte)" },
            {
              type: "text",
              value:
                "Berechne die IT-Gesamtlast in Watt und die erforderliche USV-Scheinleistung in VA inklusive 20 % Reserve. Runde auf eine marktübliche Gerätegröße auf.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nLast = 2×600 + 400 + 250 + 2×75 + 100 = 1.200 + 400 + 250 + 150 + 100 = 2.100 W\nS = 2.100 ÷ 0,9 = 2.333 VA · mit 20 % Reserve: 2.333 × 1,2 ≈ 2.800 VA → marktüblich 3.000 VA.\n(Punkteschema: Summe 3 P, VA-Umrechnung 2 P, Reserve 2 P, Geräteempfehlung 1 P)",
            },
            { type: "heading", value: "Aufgabe b) Klimatisierung mit Redundanz (7 Punkte)" },
            {
              type: "text",
              value:
                "Ermittle die abzuführende Wärmelast in BTU/h (Faktor 3,412) und lege die Anzahl der Klimageräte à 7.500 BTU/h nach dem N+1-Prinzip fest. Begründe kurz, warum N+1 hier gefordert ist.",
            },
            {
              type: "solution",
              value:
                'MUSTERLÖSUNG:\n2.100 W × 3,412 ≈ 7.165 BTU/h → rechnerisch genügt 1 Gerät à 7.500 BTU/h (N = 1) → N+1 = 2 Geräte.\nBegründung: Vorgabe "Ausfall eines Geräts darf den Betrieb nicht gefährden" – ohne Redundanz überhitzt der Raum nach Ausfall des einzigen Geräts innerhalb kurzer Zeit (Patientendaten-Systeme!).\n(Punkte: BTU-Rechnung 3 P, Geräteanzahl 2 P, Begründung 2 P)',
            },
            { type: "heading", value: "Aufgabe c) Notfallkonzept Stromausfall (5 Punkte)" },
            {
              type: "text",
              value:
                'Die gewählte USV hält die Last rund 15 Minuten. Beschreibe drei Maßnahmen, die das geforderte "geordnete Herunterfahren" sicherstellen – und nenne die Lücke, die trotz USV bleibt.',
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (drei von):\n1. USV-Managementsoftware mit Netzwerk-Shutdown: signalisiert Hosts/NAS den Stromausfall und fährt sie nach definierter Restlaufzeit automatisch herunter.\n2. Shutdown-Reihenfolge festlegen: erst VMs/Anwendungen, dann Hosts, zuletzt Storage – dokumentiert im Notfallplan.\n3. Regelmäßiger USV-Test + Batteriewartung, Alarmierung an Bereitschaft (Monitoring).\nLücke: Die Klimatisierung hängt nicht an der USV – bei längerem Ausfall steigt die Temperatur; zudem ist nach 15 Minuten Schluss (kein Weiterbetrieb, nur geordnetes Ende).",
            },
            { type: "heading", value: "Rechenweg-Training" },
            {
              type: "text",
              value:
                'Dieselben Formeln endlos üben: Formelsammlung → "Elektro & USV" sowie der Übungs-Generator "Durchsatz" für die Einheiten-Routine. Die ausführliche Theorie steht in LF11a → "Serverraum-Planung".',
            },
          ],
          quiz: [
            {
              id: "imp_ap2-t-4_g0",
              q: "2 Hosts à 600 W, Backup 400 W, NAS 250 W, 2 Switches à 75 W, Router 100 W – Gesamtlast?",
              options: ["1.950 W", "2.100 W", "2.250 W", "2.400 W"],
              correct: 1,
              explain: "1.200+400+250+150+100 = 2.100 W.",
            },
            {
              id: "imp_ap2-t-4_g1",
              q: "2.100 W bei cos φ 0,9 mit 20 % Reserve – welche USV passt?",
              options: ["2.100 VA", "2.333 VA", "2.520 VA", "3.000 VA"],
              correct: 3,
              explain: "2.100÷0,9 ≈ 2.333 VA, ×1,2 ≈ 2.800 VA → nächste Marktgröße 3.000 VA.",
            },
            {
              id: "imp_ap2-t-4_g2",
              q: "Warum werden hier zwei Klimageräte installiert, obwohl eines rechnerisch reicht?",
              options: [
                "Zwei kleine Geräte sind billiger als ein großes",
                "Die Vorgabe verlangt, dass ein Geräteausfall den Betrieb nicht gefährdet (N+1)",
                "BTU-Geräte dürfen nur paarweise betrieben werden",
                "Für die Kalt-/Warmgang-Trennung sind immer zwei nötig",
              ],
              correct: 1,
              explain: "N+1: Auslegung auf die Last plus ein redundantes Gerät.",
            },
            {
              id: "imp_ap2-t-4_g3",
              q: "Was leistet die USV-Managementsoftware im Notfallkonzept?",
              options: [
                "Sie signalisiert den Ausfall und fährt Systeme automatisch geordnet herunter",
                "Sie erhöht die Batteriekapazität bei Bedarf",
                "Sie übernimmt die Kühlung des Raums",
                "Sie verhindert den Stromausfall im Versorgungsnetz",
              ],
              correct: 0,
              explain:
                "Netzwerk-Shutdown nach definierter Restlaufzeit – Kernstück des geordneten Herunterfahrens.",
            },
            {
              id: "imp_ap2-t-4_g4",
              q: "Welche Reihenfolge ist beim Shutdown korrekt?",
              options: [
                "Storage → Hosts → VMs",
                "Hosts → Storage → VMs",
                "VMs/Anwendungen → Hosts → Storage",
                "Beliebig, solange alles ausgeht",
              ],
              correct: 2,
              explain:
                "Erst die Ebene, die auf allem anderen aufsetzt – Storage zuletzt, sonst drohen Datenverluste.",
            },
            {
              id: "imp_ap2-t-4_g5",
              q: "Welche Lücke bleibt trotz USV bestehen?",
              options: [
                "Die Switches sind grundsätzlich nicht USV-fähig",
                "Die USV schützt nicht vor Überspannung",
                "Backups laufen während des Ausfalls nicht weiter",
                "Klima ohne Notstrom + begrenzte Überbrückungszeit – Weiterbetrieb ist nicht gesichert",
              ],
              correct: 3,
              explain:
                "USV = Zeit für geordnetes Ende; Dauerbetrieb bräuchte Generator und notstromversorgte Kühlung.",
            },
          ],
        },
        {
          id: "ap2-t-1",
          title: "Szenariotraining: Netzwerkplanung & VLSM",
          content: [
            {
              type: "text",
              value:
                "Die AP2-Klausuren der FiSi ('Konzeption und Administration von IT-Systemen', 'Analyse und Entwicklung von Netzwerken') arbeiten mit durchgehenden Firmenszenarien: Du planst Adressbereiche, segmentierst Netze und begründest Entscheidungen. Diese Lektion trainiert die Klassiker im Prüfungszuschnitt.",
            },
            { type: "heading", value: "Aufgabe 1: VLSM-Adressplan erstellen" },
            {
              type: "text",
              value:
                "Die Nordwind Logistik GmbH erhält den Bereich 172.20.0.0/22. Benötigt werden Subnetze für: Produktion (450 Hosts), Büro (200 Hosts), Server (50 Hosts), Management (20 Hosts) sowie vier Transfernetze zu Routern mit je 2 Hosts. Erstelle einen VLSM-Plan mit Netzadresse, Präfix, nutzbaren Hosts und Broadcast je Subnetz. Beginne mit dem größten Bedarf.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (vom größten zum kleinsten Bedarf):\nProduktion: 450 Hosts → /23 (510 nutzbar): 172.20.0.0/23, Hosts 172.20.0.1–172.20.1.254, Broadcast 172.20.1.255.\nBüro: 200 → /24 (254): 172.20.2.0/24, Hosts .2.1–.2.254, Broadcast 172.20.2.255.\nServer: 50 → /26 (62): 172.20.3.0/26, Hosts .3.1–.3.62, Broadcast 172.20.3.63.\nManagement: 20 → /27 (30): 172.20.3.64/27, Hosts .3.65–.3.94, Broadcast 172.20.3.95.\nTransfernetze: je /30 (2): 172.20.3.96/30, 172.20.3.100/30, 172.20.3.104/30, 172.20.3.108/30.\nRest 172.20.3.112–172.20.3.255 bleibt als Reserve. Größtes Subnetz zuerst verhindert Verschnitt und Überlappungen – diese Begründung gibt in der Prüfung den Extrapunkt.",
            },
            { type: "heading", value: "Aufgabe 2: VLAN-Konzept begründen" },
            {
              type: "text",
              value:
                "Produktion, Büro und Server sollen als VLANs auf gemeinsamen Switches getrennt werden. a) Nenne drei Gründe für die Segmentierung. b) Erkläre, wie die VLANs über die Verbindung zwischen zwei Switches transportiert werden. c) Erkläre, was für die Kommunikation ZWISCHEN den VLANs nötig ist.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Sicherheit (Produktionsanlagen vom Büro isoliert, Schadsoftware bleibt im Segment) – kleinere Broadcast-Domänen (Performance) – organisatorische Flexibilität (Port-Zuordnung statt Umverkabelung) – Voraussetzung für gezielte Firewall-Regeln zwischen Bereichen.\nb) Über einen Trunk-Port nach IEEE 802.1Q: Die Frames erhalten ein VLAN-Tag mit der VLAN-ID, sodass mehrere VLANs über eine physische Leitung laufen.\nc) Inter-VLAN-Routing über eine Layer-3-Instanz: Router ('Router on a Stick') oder Layer-3-Switch mit SVIs – idealerweise kombiniert mit Firewall-Regeln, die nur den nötigen Verkehr erlauben.",
            },
            { type: "heading", value: "Aufgabe 3: IPv6-Adressen kürzen und einordnen" },
            {
              type: "text",
              value:
                "a) Kürze die Adresse 2001:0db8:0000:0000:00ff:0000:0000:0001 maximal. b) Erkläre die zwei Kürzungsregeln. c) Ordne ein: Wozu dienen Adressen, die mit fe80:: beginnen, und welche Präfixlänge haben Endgeräte-Netze üblicherweise?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) 2001:db8::ff:0:0:1\nb) Regel 1: Führende Nullen je Block entfallen (0db8 → db8, 00ff → ff). Regel 2: GENAU EINE zusammenhängende Folge von Null-Blöcken darf durch :: ersetzt werden – bei zwei gleich langen Folgen die erste (hier Blöcke 3–4; die Folge an Position 6–7 bleibt als 0:0 stehen).\nc) fe80::/10 sind link-lokale Adressen – gültig nur im eigenen Netzsegment, automatisch je Interface vorhanden (Nachbarschaft, Router-Kommunikation). Endgeräte-Subnetze nutzen üblicherweise /64, u. a. damit SLAAC (automatische Adressbildung) funktioniert.",
            },
            { type: "heading", value: "Aufgabe 4: Routing-Entscheidung nachvollziehen" },
            {
              type: "text",
              value:
                "Ein Router kennt folgende Routen: (1) 0.0.0.0/0 via ISP, (2) 172.20.0.0/22 via Core, (3) 172.20.3.0/26 via FW-DMZ. Über welche Route verlässt ein Paket an 172.20.3.10 den Router – und warum? Was passiert mit einem Paket an 8.8.8.8?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n172.20.3.10 passt auf Route (2) UND (3). Es gilt Longest Prefix Match: Die spezifischste Route gewinnt → /26 schlägt /22, das Paket geht via FW-DMZ.\n8.8.8.8 passt auf keine spezifische Route → Default-Route 0.0.0.0/0 greift, das Paket geht zum ISP. Die Default-Route ist die unspezifischste Route und kommt immer zuletzt zum Zug.",
            },
          ],
          quiz: [
            {
              id: "imp_ap2-t-1_0",
              q: "Welches Präfix bietet mindestens 450 nutzbare Hostadressen?",
              options: ["/26", "/24", "/25", "/23"],
              correct: 3,
              explain: "/23 = 2⁹ − 2 = 510 Hosts; /24 hätte nur 254 – zu wenig.",
            },
            {
              id: "imp_ap2-t-1_1",
              q: "Welches Präfix ist für Punkt-zu-Punkt-Transfernetze (2 Hosts) üblich?",
              options: ["/28", "/16", "/30", "/24"],
              correct: 2,
              explain:
                "/30 bietet exakt 2 nutzbare Adressen; alternativ /31 nach RFC 3021 auf reinen Router-Links.",
            },
            {
              id: "imp_ap2-t-1_2",
              q: "Nach welchem Standard werden VLAN-Tags auf Trunks übertragen?",
              options: ["IEEE 802.1Q", "IEEE 802.11ax", "IEEE 802.3af", "RFC 1918"],
              correct: 0,
              explain:
                "802.1Q fügt dem Ethernet-Frame ein 4-Byte-Tag mit der VLAN-ID hinzu; 802.3af ist PoE, 802.11ax WLAN.",
            },
            {
              id: "imp_ap2-t-1_3",
              q: "Was ist für die Kommunikation zwischen zwei VLANs zwingend nötig?",
              options: [
                "Eine Layer-3-Instanz",
                "Ein zweites Patchkabel",
                "Nichts – VLANs kommunizieren immer direkt",
                "Ein Hub",
              ],
              correct: 0,
              explain:
                "Router oder L3-Switch. VLANs sind getrennte Broadcast-Domänen/Subnetze – ohne Routing kein Übergang (das ist gerade der Sicherheitsgewinn).",
            },
            {
              id: "imp_ap2-t-1_4",
              q: "Wie lautet 2001:0db8:0000:0000:0000:0000:0000:0042 maximal gekürzt?",
              options: ["2001:db8::0042", "2001:db8:0:42", "2001:db8::42", "2001:db8::::42"],
              correct: 2,
              explain: "Führende Nullen weg, die Nullblock-Folge wird zu :: – und 0042 wird zu 42.",
            },
            {
              id: "imp_ap2-t-1_5",
              q: "Warum darf :: in einer IPv6-Adresse nur einmal vorkommen?",
              options: [
                "Weil Router die Adresse sonst zu langsam verarbeiten und Pakete verspätet zustellen würden",
                "Die Einschränkung existiert nicht, :: darf mehrfach in derselben Adresse vorkommen",
                "Bei mehrfacher Verwendung wäre die Zahl der ausgelassenen Nullblöcke nicht mehr eindeutig",
                "Aus rein optischen Gründen, damit Adressen in Dokumentationen einheitlich aussehen",
              ],
              correct: 2,
              explain:
                "2001::1::2 könnte z. B. 2001:0:0:1:0:0:0:2 oder 2001:0:1:0:0:0:0:2 sein – nicht rekonstruierbar.",
            },
            {
              id: "imp_ap2-t-1_6",
              q: "Welche Präfixlänge ist für IPv6-Endgeräte-Subnetze Standard?",
              options: ["/8", "/64", "/24", "/128"],
              correct: 1,
              explain:
                "/64 ist Voraussetzung für SLAAC; /128 bezeichnet eine einzelne Hostadresse.",
            },
            {
              id: "imp_ap2-t-1_7",
              q: "Was besagt Longest Prefix Match?",
              options: [
                "Die physisch längste Leitung gewinnt bei der Wegewahl",
                "Der Router wählt die Route mit dem längsten passenden Präfix",
                "Der Router bevorzugt in jedem Fall die Default-Route",
                "Die zeitlich zuerst gelernte Route gewinnt immer",
              ],
              correct: 1,
              explain:
                "Spezifischste Route. /26 schlägt /22 schlägt /0 – Grundlage jeder Routing-Entscheidung.",
            },
            {
              id: "imp_ap2-t-1_8",
              q: "Wofür steht die Route 0.0.0.0/0?",
              options: [
                "Ein ungültiger Eintrag, den Router automatisch verwerfen",
                "Default-Route für alle Ziele ohne spezifischere Route",
                "Die Broadcast-Adresse, an die alle Hosts im Netz lauschen",
                "Die Loopback-Adresse zum Testen des lokalen TCP/IP-Stacks",
              ],
              correct: 1,
              explain: "Sie zeigt typischerweise zum Internet-Gateway/ISP.",
            },
            {
              id: "imp_ap2-t-1_9",
              q: "Wie viele /26-Subnetze passen in ein /24?",
              options: ["2", "16", "4", "8"],
              correct: 2,
              explain: "2 zusätzliche Netzbits = 2² = 4 Subnetze à 62 Hosts.",
            },
            {
              id: "imp_ap2-t-1_10",
              q: "Ein Vorteil kleinerer Broadcast-Domänen ist …",
              options: [
                "dass zwischen den Segmenten kein Routing mehr nötig ist",
                "ein höherer Stromverbrauch der beteiligten Switches",
                "weniger Broadcast-Last je Segment und damit bessere Performance",
                "mehr Kollisionsdomänen pro Switchport im Segment",
              ],
              correct: 2,
              explain:
                "Broadcasts (ARP, DHCP) erreichen nur noch das eigene VLAN statt des gesamten Netzes.",
            },
            {
              id: "imp_ap2-t-1_11",
              q: "Welche IPv4-Bereiche sind privat nach RFC 1918?",
              options: [
                "169.254.0.0/16 und 127.0.0.0/8",
                "8.8.8.0/24, 1.1.1.0/24",
                "10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16",
                "Alle Adressen unter 100.0.0.0",
              ],
              correct: 2,
              explain:
                "Private Bereiche werden im Internet nicht geroutet; 169.254 ist APIPA, 127 Loopback – beides separat definiert.",
            },
          ],
        },
        {
          id: "ap2-t-2",
          title: "Szenariotraining: Backup, USV & Speicher",
          content: [
            {
              type: "text",
              value:
                "Dimensionierungsaufgaben sind AP2-Standard: Speicherbedarf eines Backup-Konzepts berechnen, eine USV auslegen, RAID-Kapazitäten bestimmen und RTO/RPO in Maßnahmen übersetzen. Rechenweg immer mitschreiben.",
            },
            { type: "heading", value: "Aufgabe 1: Backup-Speicherbedarf berechnen" },
            {
              type: "text",
              value:
                "Ein Fileserver hält 800 GB Daten, die tägliche Änderungsrate beträgt 5 %. Gesichert wird: sonntags Vollsicherung, Montag–Samstag inkrementell. Aufbewahrt werden vier Wochen. a) Berechne den Speicherbedarf. b) Wie ändert sich der Wochenbedarf bei differenzieller statt inkrementeller Sicherung? c) Vergleiche beide Verfahren hinsichtlich des Wiederherstellungsaufwands für einen Ausfall am Samstag.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Inkrementell sichert nur die Änderungen seit der LETZTEN Sicherung: 5 % von 800 GB = 40 GB/Tag.\nWoche: 800 + 6 × 40 = 1.040 GB. Vier Wochen: 4 × 1.040 = 4.160 GB ≈ 4,2 TB.\nb) Differenziell sichert alles seit der letzten VOLLsicherung: Mo 40, Di 80, Mi 120, Do 160, Fr 200, Sa 240 GB = 840 GB/Woche zusätzlich zur Vollsicherung → 800 + 840 = 1.640 GB/Woche, vier Wochen 6.560 GB ≈ 6,6 TB.\nc) Restore Samstag: inkrementell = Vollsicherung + 6 inkrementelle Sätze in korrekter Reihenfolge (länger, fehleranfälliger – eine defekte Kette bricht alles); differenziell = Vollsicherung + nur der letzte differenzielle Satz (schneller, robuster). Klassischer Zielkonflikt Speicherplatz gegen Restore-Zeit.",
            },
            { type: "heading", value: "Aufgabe 2: USV dimensionieren" },
            {
              type: "text",
              value:
                "Abzusichern sind: Server 600 W, Storage 250 W, Core-Switch 50 W. a) Berechne die benötigte Scheinleistung in VA bei einem Leistungsfaktor von 0,9 und plane 30 % Reserve ein. b) Die Systeme sollen bei Stromausfall 10 Minuten weiterlaufen und dann geordnet herunterfahren. Welche USV-Klasse empfiehlst du und warum? c) Nenne die drei USV-Klassen mit je einem Stichwort.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Wirkleistung gesamt: 600 + 250 + 50 = 900 W. Scheinleistung: 900 W / 0,9 = 1.000 VA. Mit 30 % Reserve: 1.000 × 1,3 = 1.300 VA → nächstgrößeres Modell, z. B. 1.500 VA.\nb) Online-USV (VFI, Doppelwandler): Server und Storage erhalten unterbrechungsfrei sauberen Strom ohne Umschaltzeit – bei zentraler Serverinfrastruktur Stand der Technik. Wichtig: Shutdown-Automatik über USV-Management (Netzwerkkarte/USB + Agent) konfigurieren.\nc) VFI (Online/Doppelwandler): keine Umschaltzeit, beste Qualität. VI (Line-Interactive): Spannungsregelung, kurze Umschaltzeit – Standard für kleine Server/Switches. VFD (Offline/Standby): einfacher Umschalter – nur für unkritische Einzelgeräte.",
            },
            { type: "heading", value: "Aufgabe 3: RAID nach Anforderung dimensionieren" },
            {
              type: "text",
              value:
                "Ein neues Storage soll 20 TB netto bereitstellen und den gleichzeitigen Ausfall von zwei Festplatten verkraften. Verfügbar sind Platten mit 6 TB. a) Welches RAID-Level erfüllt die Anforderung und wie viele Platten brauchst du mindestens? b) Was bringt zusätzlich eine Hot-Spare-Platte? c) Warum ersetzt auch dieses Storage kein Backup?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) RAID 6 (doppelte verteilte Parität) verkraftet zwei gleichzeitige Ausfälle. Nutzkapazität = (n − 2) × Plattengröße. Mit 6 Platten: (6 − 2) × 6 TB = 24 TB ≥ 20 TB ✓ → mindestens 6 Platten. (5 Platten ergäben nur 18 TB.)\nb) Eine Hot-Spare springt automatisch ein, sobald eine Platte ausfällt – der Rebuild startet sofort, das Zeitfenster verringerter Redundanz schrumpft.\nc) RAID schützt nur vor Plattenausfall. Löschen, Ransomware, Software-/Controllerfehler und Brand treffen alle Platten gleichzeitig – dagegen hilft nur ein getrenntes Backup.",
            },
            { type: "heading", value: "Aufgabe 4: RTO und RPO in Maßnahmen übersetzen" },
            {
              type: "text",
              value:
                "Die Geschäftsführung gibt für das ERP-System vor: RPO maximal 1 Stunde, RTO maximal 4 Stunden. a) Erkläre beide Kennzahlen. b) Leite je eine konkrete technische Maßnahme ab. c) Das aktuelle Konzept (tägliche Sicherung um 22 Uhr, Restore auf Ersatzhardware dauert ca. 8 h) – erfüllt es die Vorgaben?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) RPO (Recovery Point Objective): maximal tolerierter Datenverlust, gemessen als Zeitspanne seit der letzten Sicherung. RTO (Recovery Time Objective): maximal tolerierte Ausfallzeit bis zur Wiederaufnahme des Betriebs.\nb) RPO 1 h → mindestens stündliche Sicherungen, z. B. Transaktionslog-Sicherung/Snapshots mit Replikation. RTO 4 h → schnelles Wiederanlauf-Konzept: Standby-System/VM-Replikation mit Failover oder Restore-Automatisierung, regelmäßig GETESTET.\nc) Nein, beides verfehlt: RPO real bis zu 24 h (≫ 1 h), RTO real ca. 8 h (> 4 h). Das Konzept muss auf stündliche Sicherung plus Standby-/Replikationslösung umgebaut werden.",
            },
          ],
          quiz: [
            {
              id: "imp_ap2-t-2_0",
              q: "Inkrementelle Sicherung sichert …",
              options: [
                "alle Änderungen seit der letzten Vollsicherung",
                "ausschließlich die Systemdateien des Betriebssystems",
                "bei jedem Lauf immer den kompletten Datenbestand",
                "alle Änderungen seit der letzten Sicherung (egal welcher Art)",
              ],
              correct: 3,
              explain:
                "Differenziell = seit der letzten VOLLsicherung. Der Unterschied ist DIE Klassikerfrage.",
            },
            {
              id: "imp_ap2-t-2_1",
              q: "Für den Restore nach inkrementeller Strategie benötigt man …",
              options: [
                "die Vollsicherung plus ALLE inkrementellen Sätze in Reihenfolge",
                "nur die letzte Vollsicherung, weitere Sätze sind entbehrlich",
                "keinen Datenträger, da das System sich selbst wiederherstellt",
                "nur den jüngsten inkrementellen Satz, ältere sind überflüssig",
              ],
              correct: 0,
              explain:
                "Fehlt ein Glied der Kette, ist alles danach verloren – der Preis für den geringen Speicherbedarf.",
            },
            {
              id: "imp_ap2-t-2_2",
              q: "RPO bezeichnet …",
              options: [
                "die Geschwindigkeit, mit der ein Backup durchläuft",
                "die maximal zulässige Wiederanlaufzeit der Systeme",
                "den maximal tolerierten Datenverlust als Zeitspanne",
                "die benötigte Plattenkapazität des Backup-Speichers",
              ],
              correct: 2,
              explain:
                "Recovery Point Objective: Wie alt darf der letzte wiederherstellbare Stand maximal sein?",
            },
            {
              id: "imp_ap2-t-2_3",
              q: "RTO bezeichnet …",
              options: [
                "die maximale Lebensdauer der eingesetzten Sicherungsbänder",
                "die maximal tolerierte Zeit bis zur Wiederaufnahme des Betriebs",
                "die Zeit, die ein RAID-Verbund für einen Rebuild benötigt",
                "die maximal tolerierte Datenverlustmenge in Gigabyte",
              ],
              correct: 1,
              explain: "Recovery Time Objective: Wie lange darf der Ausfall dauern?",
            },
            {
              id: "imp_ap2-t-2_4",
              q: "Eine USV-Last von 1.800 W bei Leistungsfaktor 0,9 entspricht …",
              options: ["900 VA", "1.800 VA", "2.000 VA", "1.620 VA"],
              correct: 2,
              explain:
                "VA = W / Leistungsfaktor = 1.800 / 0,9 = 2.000 VA – die USV wird nach Scheinleistung dimensioniert.",
            },
            {
              id: "imp_ap2-t-2_5",
              q: "Welche USV-Klasse arbeitet ohne jede Umschaltzeit?",
              options: [
                "Line-Interactive/VI",
                "Keine",
                "Offline/VFD",
                "Online/VFI (Doppelwandler)",
              ],
              correct: 3,
              explain:
                "Beim Doppelwandler laufen die Verbraucher permanent über Gleichrichter/Wechselrichter – Stand der Technik im Serverraum.",
            },
            {
              id: "imp_ap2-t-2_6",
              q: "RAID 6 verkraftet den Ausfall von …",
              options: [
                "zwei beliebigen Platten gleichzeitig",
                "einer Platte",
                "keiner Platte",
                "drei Platten",
              ],
              correct: 0,
              explain:
                "Doppelte Parität; Nutzkapazität (n−2) Platten. Bei großen Platten wichtig: Während des langen Rebuilds darf eine weitere ausfallen.",
            },
            {
              id: "imp_ap2-t-2_7",
              q: "Wozu dient eine Hot-Spare-Platte?",
              options: [
                "Sie speichert eine Kopie des Betriebssystems für die Wiederherstellung",
                "Sie verdoppelt die nutzbare Kapazität des RAID-Verbunds",
                "Sie übernimmt automatisch und sofort die Rolle einer ausgefallenen Platte",
                "Sie senkt die Betriebstemperatur des Storage-Systems",
              ],
              correct: 2,
              explain:
                "Der Rebuild beginnt ohne Wartezeit auf den Techniker – das Risikofenster wird kürzer.",
            },
            {
              id: "imp_ap2-t-2_8",
              q: "Das Generationenprinzip (Großvater-Vater-Sohn) regelt …",
              options: [
                "die Aufbewahrung von Sicherungen in mehreren zeitlichen Generationen",
                "die Vererbung von NTFS-Berechtigungen entlang der Ordnerhierarchie",
                "die Reihenfolge, in der Platten in einem RAID-Verbund angesprochen werden",
                "die altersgestufte Personalplanung in der IT-Abteilung",
              ],
              correct: 0,
              explain:
                "Z. B. täglich/wöchentlich/monatlich. So sind auch ältere Stände verfügbar – wichtig, wenn Fehler oder Verschlüsselung erst spät auffallen.",
            },
            {
              id: "imp_ap2-t-2_9",
              q: "800 GB sollen über 1 Gbit/s wiederhergestellt werden. Theoretische Mindestdauer?",
              options: ["ca. 1,8 Stunden", "ca. 8 Minuten", "ca. 13 Minuten", "ca. 18 Stunden"],
              correct: 0,
              explain:
                "800 × 8 = 6.400 Gbit / 1 Gbit/s = 6.400 s ≈ 107 min ≈ 1,8 h – Praxis durch Overhead länger. Solche Restore-Zeiten gehören in jede RTO-Betrachtung.",
            },
            {
              id: "imp_ap2-t-2_10",
              q: "Warum gehört mindestens eine Sicherungskopie offline bzw. unveränderlich (immutable) gelagert?",
              options: [
                "Offline gelagerte Kopien lassen sich im Ernstfall deutlich schneller zurückspielen",
                "Vor allem, um Energiekosten zu sparen, da abgeschaltete Medien keinen Strom verbrauchen",
                "Ransomware und Fehlbedienung können verbundene Sicherungen mitverschlüsseln oder löschen",
                "Ausschließlich aus historischen Gründen, als Bänder noch ausgelagert werden mussten",
              ],
              correct: 2,
              explain:
                "Air-Gap/Immutability ist die letzte Verteidigungslinie gegen Verschlüsselungstrojaner.",
            },
            {
              id: "imp_ap2-t-2_11",
              q: "Ein Backup gilt erst dann als verlässlich, wenn …",
              options: [
                "der Sicherungsjob den Status 'erfolgreich' meldet",
                "alle Bänder korrekt beschriftet und einsortiert sind",
                "die Wiederherstellung regelmäßig getestet wurde",
                "die Sicherung mindestens ein Jahr alt ist",
              ],
              correct: 2,
              explain:
                "Ungetestete Backups sind Hoffnung, keine Strategie – Restore-Tests gehören ins Konzept (und in die AP2-Doku).",
            },
          ],
        },
        {
          id: "ap2-t-3",
          title: "Szenariotraining: Sicherheit, Firewall & Vorfall",
          content: [
            {
              type: "text",
              value:
                "AP2-Sicherheitsaufgaben verlangen anwendbares Wissen: ein Regelwerk aufstellen, einen Vorfall strukturiert abarbeiten, Phishing erkennen, Zertifikatsketten erklären. Hier die Muster als Szenarien.",
            },
            { type: "heading", value: "Aufgabe 1: Firewall-Regelwerk aufstellen" },
            {
              type: "text",
              value:
                "Gegeben: Internet – Firewall – DMZ (Webshop 192.0.2.10) – LAN (Datenbankserver 10.10.20.5, Admin-Netz 10.10.99.0/24, Clients 10.10.10.0/24). Erstelle ein Regelwerk (Quelle, Ziel, Port/Protokoll, Aktion) für: (1) Webshop aus dem Internet erreichbar per HTTPS, (2) Webshop greift auf die Datenbank zu (MySQL), (3) Admins administrieren den Webshop per SSH, (4) Clients dürfen ins Internet surfen und Namen auflösen, (5) alles andere wird verworfen und protokolliert. Begründe die Position der letzten Regel.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (Auswertung von oben nach unten, First Match):\n1  any(Internet) → 192.0.2.10  TCP 443  ERLAUBEN\n2  192.0.2.10 → 10.10.20.5  TCP 3306  ERLAUBEN (nur der Webshop, nicht die ganze DMZ!)\n3  10.10.99.0/24 → 192.0.2.10  TCP 22  ERLAUBEN\n4  10.10.10.0/24 → any(Internet)  TCP 80/443, UDP/TCP 53  ERLAUBEN\n5  any → any  any  VERWERFEN + LOG\nRegel 5 steht zwingend am Ende: Da die Firewall die erste passende Regel anwendet, würde ein Deny-All an früherer Position alle Erlaubnisregeln darunter wirkungslos machen. Das abschließende Deny-All setzt das Whitelist-Prinzip durch; das Logging macht Angriffsversuche und Fehlkonfigurationen sichtbar.\nZusatzpunkt: Regel 2 ist bewusst eng gefasst – würde die DMZ pauschal ins LAN dürfen, wäre der Sinn der DMZ dahin.",
            },
            { type: "heading", value: "Aufgabe 2: Ransomware-Vorfall abarbeiten" },
            {
              type: "text",
              value:
                "Montagmorgen melden mehrere Mitarbeiter verschlüsselte Dateien auf dem Fileserver; auf den Desktops liegt eine Lösegeldforderung. Beschreibe a) vier Sofortmaßnahmen in sinnvoller Reihenfolge, b) drei Schritte der Wiederherstellung, c) drei präventive Maßnahmen, die einen erneuten Vorfall erschweren.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Sofort: betroffene Systeme vom Netz isolieren (Switchports/WLAN deaktivieren, nicht ausschalten – Spuren!) – Ausbreitung stoppen: Backupziele und Replikation trennen – Incident-Response-/Notfallplan aktivieren, Verantwortliche und Geschäftsleitung informieren – Meldungen prüfen: Datenschutzbehörde binnen 72 h bei Personenbezug (Art. 33 DSGVO), ggf. BSI (NIS-2), Anzeige bei der Polizei (ZAC). Kein Lösegeld zahlen.\nb) Wiederherstellung: sauberen Wiederanlaufpunkt identifizieren (letztes nicht kompromittiertes Backup) – Systeme aus vertrauenswürdigen Quellen neu aufsetzen statt 'bereinigen' – Einfallstor schließen (Patch, Zugangsdaten zurücksetzen, MFA), dann gestaffelt wieder ans Netz und Daten aus dem Backup einspielen.\nc) Prävention: Offline-/Immutable-Backups mit Restore-Tests – MFA auf allen Fernzugängen und konsequentes Patch-Management – Netzsegmentierung und Least Privilege – Awareness-Schulungen und E-Mail-Filterung (drei genügen).",
            },
            { type: "heading", value: "Aufgabe 3: Phishing-Mail bewerten" },
            {
              type: "text",
              value:
                "Eine Mail 'Ihr Konto wird in 24 Stunden gesperrt – jetzt verifizieren' fordert zum Klick auf hxxps://login.m1crosoft-support.io auf. Nenne vier Merkmale, an denen diese Mail als Phishing erkennbar ist, und beschreibe das korrekte Verhalten des Mitarbeiters.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nMerkmale: künstlicher Zeitdruck/Drohung – Absender-/Linkdomain gehört nicht zum echten Anbieter (m1crosoft-support.io statt microsoft.com, Ziffer statt Buchstabe) – generische Anrede statt Name – Aufforderung zur Eingabe von Zugangsdaten über einen Link – (auch zulässig: Rechtschreibfehler, unpassende Sprache, abweichende Reply-To-Adresse).\nVerhalten: nicht klicken, nichts eingeben, keine Anhänge öffnen – Mail über den vorgesehenen Weg an die IT melden (Melde-Button/Postfach) – im Zweifel den Dienst über die offiziell bekannte Adresse direkt aufrufen – falls bereits geklickt/eingegeben: sofort IT informieren und Passwort ändern (MFA begrenzt den Schaden).",
            },
            { type: "heading", value: "Aufgabe 4: Zertifikatskette erklären" },
            {
              type: "text",
              value:
                "Ein Kunde fragt, warum sein Browser dem Webshop-Zertifikat 'einfach so' vertraut, beim selbstsignierten Zertifikat des internen Wikis aber warnt. Erkläre die Vertrauenskette und nenne zwei Lösungswege für das interne Wiki.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nDer Browser bringt einen Speicher vertrauenswürdiger Stammzertifizierungsstellen (Root-CAs) mit. Das Webshop-Zertifikat ist von einer Zwischen-CA signiert, diese von einer Root-CA – der Browser prüft die Signaturkette bis zu einer bekannten Root und zusätzlich Gültigkeit und Hostnamen. Beim selbstsignierten Zertifikat fehlt diese Kette: Niemand Vertrauenswürdiges bürgt dafür → Warnung.\nLösungen: (1) Zertifikat einer öffentlichen CA verwenden, z. B. kostenlos via Let's Encrypt (öffentlich auflösbarer Name nötig). (2) Interne CA betreiben (z. B. AD CS) und deren Root-Zertifikat per GPO auf alle Firmengeräte verteilen – dann gilt die Kette intern.",
            },
          ],
          quiz: [
            {
              id: "imp_ap2-t-3_0",
              q: "Warum steht die Deny-All-Regel am ENDE des Regelwerks?",
              options: [
                "Weil die wichtigste Regel traditionell den Abschluss des Regelwerks bildet",
                "Die Position ist beliebig, da die Firewall stets alle Regeln vollständig auswertet",
                "Weil Firewalls ihre Regeln alphabetisch sortieren und abarbeiten",
                "Wegen First Match würde sie weiter oben alle folgenden Erlaubnisregeln aushebeln",
              ],
              correct: 3,
              explain:
                "Firewalls werten von oben nach unten aus und wenden die erste passende Regel an.",
            },
            {
              id: "imp_ap2-t-3_1",
              q: "Warum erlaubt man der DMZ nicht pauschal Zugriff ins LAN?",
              options: [
                "Aus Lizenzgründen: Zugriffe ins LAN erfordern teure Zusatzlizenzen",
                "DMZ-Server benötigen grundsätzlich niemals Daten aus anderen Netzen",
                "Das interne LAN würde durch den Zusatzverkehr zu schnell werden",
                "Ein kompromittierter DMZ-Server hätte sonst freie Bahn ins interne Netz",
              ],
              correct: 3,
              explain:
                "Nur gezielte Verbindungen (z. B. Webshop → DB-Port) zulassen – die DMZ ist die Pufferzone.",
            },
            {
              id: "imp_ap2-t-3_2",
              q: "Erste Sofortmaßnahme bei aktivem Ransomware-Befall?",
              options: [
                "Betroffene Systeme vom Netz isolieren",
                "Eine Woche abwarten",
                "Lösegeld überweisen",
                "Alle Server sofort formatieren",
              ],
              correct: 0,
              explain:
                "Isolieren stoppt die Ausbreitung; nicht ausschalten, um flüchtige Spuren für die Analyse zu erhalten.",
            },
            {
              id: "imp_ap2-t-3_3",
              q: "Binnen welcher Frist ist eine Datenschutzverletzung der Aufsichtsbehörde zu melden (Art. 33 DSGVO)?",
              options: ["30 Tage", "7 Tage", "72 Stunden", "Sofort innerhalb einer Stunde"],
              correct: 2,
              explain:
                "72 h nach Bekanntwerden, sofern ein Risiko für Betroffene besteht – parallel ggf. NIS-2-Meldewege.",
            },
            {
              id: "imp_ap2-t-3_4",
              q: "Welches Merkmal entlarvt die Domain m1crosoft-support.io?",
              options: [
                "Die ungewöhnliche Gesamtlänge der URL, da seriöse Domains höchstens zehn Zeichen enthalten dürfen",
                "Typosquatting: Ziffer statt Buchstabe und fremde Domain statt der echten Herstellerdomain",
                "Dass HTTPS verwendet wird, denn verschlüsselte Verbindungen sind ein typisches Zeichen für Betrugsseiten",
                "Dass sie durchgehend klein geschrieben ist, denn offizielle Herstellerdomains beginnen stets mit Großbuchstaben",
              ],
              correct: 1,
              explain:
                "Angreifer imitieren bekannte Namen; auch Phishing-Seiten nutzen längst HTTPS – das Schloss allein beweist nichts.",
            },
            {
              id: "imp_ap2-t-3_5",
              q: "Was prüft der Browser bei einem TLS-Zertifikat NICHT automatisch?",
              options: [
                "Das Gültigkeitsdatum",
                "Die Signaturkette bis zu einer vertrauenswürdigen Root-CA",
                "Ob der Seitenbetreiber geschäftlich seriös ist",
                "Ob der Hostname zum Zertifikat passt",
              ],
              correct: 2,
              explain:
                "Das Zertifikat belegt Identität des Servernamens und Verschlüsselung – keine inhaltliche Seriosität.",
            },
            {
              id: "imp_ap2-t-3_6",
              q: "Wie wird das Root-Zertifikat einer internen CA firmenweit vertrauenswürdig?",
              options: [
                "Gar nicht – interne CAs können nie vertrauenswürdig werden",
                "Per E-Mail an alle mit der Bitte um Installation",
                "Verteilung in die Zertifikatsspeicher der Geräte, z. B. per GPO",
                "Es genügt, das Zertifikat einmalig auf dem CA-Server zu speichern",
              ],
              correct: 2,
              explain:
                "In AD-Umgebungen übernimmt das eine Gruppenrichtlinie – danach gelten intern ausgestellte Zertifikate ohne Warnung.",
            },
            {
              id: "imp_ap2-t-3_7",
              q: "Least Privilege bedeutet …",
              options: [
                "alle Benutzer arbeiten dauerhaft als lokale Administratoren",
                "nur die Geschäftsführung erhält Zugriffsrechte auf Systeme",
                "die vergebenen Rechte werden turnusmäßig jährlich verdoppelt",
                "jeder erhält nur die minimal nötigen Rechte für seine Aufgabe",
              ],
              correct: 3,
              explain:
                "Begrenzte Rechte begrenzen den Schaden kompromittierter Konten – Grundprinzip jeder Härtung.",
            },
            {
              id: "imp_ap2-t-3_8",
              q: "Welche Aussage zu Lösegeldzahlungen ist fachlich korrekt?",
              options: [
                "Sie stellen die verschlüsselten Daten in jedem Fall vollständig wieder her",
                "Sie sind der schnellste und sicherste Weg zur Wiederherstellung der Daten",
                "Sie sind bei kritischen Infrastrukturen gesetzlich vorgeschrieben",
                "Sie garantieren keine Entschlüsselung und finanzieren weitere Angriffe",
              ],
              correct: 3,
              explain:
                "BSI und Behörden raten ab. Verlässlich ist nur die eigene Wiederherstellungsfähigkeit: getestete, getrennte Backups.",
            },
            {
              id: "imp_ap2-t-3_9",
              q: "Was leistet ein SPF-/DKIM-/DMARC-Setup?",
              options: [
                "Es erschwert das Fälschen der eigenen Absenderdomain in E-Mails",
                "Es verschlüsselt alle E-Mail-Inhalte Ende-zu-Ende",
                "Es beschleunigt den Mailversand durch optimiertes Routing",
                "Es ersetzt den Virenschutz auf dem Mailserver vollständig",
              ],
              correct: 0,
              explain:
                "Empfangende Server können prüfen, ob die Mail autorisiert von der Domain stammt – Baustein gegen Phishing im eigenen Namen.",
            },
            {
              id: "imp_ap2-t-3_10",
              q: "Wozu dient ein Penetrationstest?",
              options: [
                "Beauftragte Sicherheitsexperten suchen kontrolliert nach ausnutzbaren Schwachstellen",
                "Er ist ein Einstellungstest, mit dem Bewerber für IT-Sicherheitsstellen geprüft werden",
                "Er misst die Druckgeschwindigkeit und den Durchsatz der Netzwerkdrucker",
                "Er ersetzt regelmäßige Sicherheitsupdates, da Schwachstellen direkt geschlossen werden",
              ],
              correct: 0,
              explain:
                "Ergebnis ist ein Bericht mit Schwachstellen und Priorisierung – Wirksamkeitskontrolle der eigenen Maßnahmen.",
            },
            {
              id: "imp_ap2-t-3_11",
              q: "Ein Admin-Zugang zum Webshop sollte zusätzlich abgesichert werden durch …",
              options: [
                "Zugriff aus dem gesamten Internet",
                "ein gemeinsames Team-Passwort",
                "MFA und Beschränkung auf das Admin-Netz",
                "eine längere Session-Dauer",
              ],
              correct: 2,
              explain:
                "Quell-Beschränkung (Firewall-Regel 3 im Szenario) plus zweiter Faktor – exponierte Verwaltungszugänge sind Hauptangriffsziel.",
            },
          ],
        },
      ],
    },
  ],
};
