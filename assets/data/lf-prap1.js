window.LF_CONTENT = window.LF_CONTENT || {};
window.LF_CONTENT["prap1"] = {
  topics: [
    {
      id: "ap1-info",
      title: "AP1 Überblick & Strategie",
      lessons: [
        {
          id: "ap1-i-1",
          title: "Struktur & häufige Themen",
          content: [
            { type: "heading", value: "Prüfungsformat" },
            {
              type: "text",
              value:
                "90 Minuten, offene handlungsorientierte Aufgaben (KEIN Multiple Choice!), 20% der Gesamtnote. Prüft LF1-6 übergreifend. Typisches Szenario: Ein Unternehmen beauftragt dich, einen IT-Arbeitsplatz einzurichten.",
            },
            { type: "heading", value: "Top-Themen (AO 2020, analysiert aus 2021-2025)" },
            {
              type: "text",
              value:
                "Netzwerk: Subnetting, VLANs, Topologie, IPv4/IPv6. Wirtschaftlich: Angebotsvergleich, NWA, Handelskalkulation, Energiekosten. Speicher: RAID, Backup-Konzepte. Sicherheit: CIA, Schutzbedarf, DSGVO, Verschlüsselung. Projekt: PSP, Gantt, Lastenheft/Pflichtenheft. Hardware: Ergonomie, Komponentenauswahl.",
            },
            { type: "heading", value: "Tipps" },
            {
              type: "text",
              value:
                "Immer den Rechenweg aufschreiben (Teilpunkte!). Fachbegriffe verwenden. Aufgabenstellung genau lesen – oft sind mehrere Teilfragen versteckt. Zeitmanagement: ~1 Min. pro Punkt.",
            },
            { type: "heading", value: "So funktioniert die AP1 – und so gehst du sie an" },
            {
              type: "text",
              value:
                "Die AP1 „Einrichten eines IT-gestützten Arbeitsplatzes“ ist für alle IT-Berufe identisch: 90 Minuten, ca. 100 Punkte, typischerweise vier bis fünf Aufgaben zu einer gemeinsamen Ausgangssituation (ein Betrieb, ein Auftrag). Sie zählt 20 % der Gesamtnote – und sie ist die früheste Chance, Punkte zu sichern, meist Mitte des zweiten Ausbildungsjahres. Gefragt ist Handlungswissen quer durch: Arbeitsplatz-Hardware und Beschaffung (Entscheidungsmatrix!), einfache Netzwerkplanung (Subnetting!), IT-Sicherheit und Datenschutz im Alltag, Wirtschaftlichkeit (AfA, Stromkosten, Angebotsvergleich) – und regelmäßig Pseudocode/SQL-Grundlagen, weil die AP1 eben auch die AE-Azubis prüft.",
            },
            { type: "heading", value: "Bearbeitungsstrategie für die 90 Minuten" },
            {
              type: "list",
              value: [
                "Erst ALLE Aufgaben überfliegen (5 min): Wo sind sichere Punkte? Dort anfangen.",
                "Punkte = Zeitbudget: Eine 3-Punkte-Teilaufgabe verdient keine 15 Minuten.",
                "Rechenwege IMMER hinschreiben – Folgefehler geben Teilpunkte, ein nacktes falsches Ergebnis nicht.",
                "Bei „Nennen Sie zwei…“ genau zwei nennen – das dritte wird nicht gewertet, kostet aber Zeit.",
                "Nichts leer lassen: Bei Auswahl-/Zuordnungsaufgaben zählt jede plausible Antwort.",
                "Letzte 5 Minuten: Namen/Nummern auf jedem Blatt, alle Aufgaben beantwortet?",
              ],
            },
            { type: "heading", value: "Übungsaufgabe: Zeitplan aufstellen" },
            {
              type: "text",
              value:
                "Der Aufgabensatz hat 4 Aufgaben à 25 Punkte. Aufgabe 2 (Netzwerk) liegt dir, Aufgabe 3 (Wirtschaft) fürchtest du. Stelle einen sinnvollen Zeitplan für 90 Minuten auf und begründe die Reihenfolge.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (Beispiel): 0–5 min Überblick. 5–25 min Aufgabe 2 (Stärke zuerst: sichere Punkte, Selbstvertrauen). 25–45 min Aufgabe 1. 45–65 min Aufgabe 4. 65–85 min Aufgabe 3 (die Angstaufgabe bekommt volle 20 min, aber erst wenn die sicheren Punkte im Trockenen sind – und oft entpuppt sie sich als machbar, weil Teilaufgaben unabhängig lösbar sind). 85–90 min Kontrolle. Grundsatz: Reihenfolge nach Punktesicherheit, nie stur nach Nummerierung.",
            },
            { type: "heading", value: "Themen-Wahrscheinlichkeit: Was kommt wie oft dran?" },
            {
              type: "text",
              value:
                "Diese Auswertung basiert auf einer automatischen Volltext-Analyse von 29 Original-Prüfungen (AP Teil 1, Vorgänger „GA Kernqualifikation“ sowie APT1-Bögen aller IT-Berufe, Jahrgänge 2012–2025). Der Prozentwert gibt an, in wie vielen der analysierten Prüfungen das Thema vorkam. Wichtig für die Einordnung: Ein Großteil der Prüfungen wurde per Texterkennung (OCR) ausgewertet – die Werte sind Näherungen, keine Garantie. Und: Vergangene Häufigkeit ist keine Zusage für deine Prüfung; die Prüfungserstellung variiert Themen bewusst. Als Lernstrategie taugt die Liste trotzdem: Was in über der Hälfte der Prüfungen vorkam, gehört in jede Vorbereitung.",
            },
            {
              type: "code",
              value:
                " 55 %  ███████████░░░░░░░░░  Routing / Gateway  (sehr häufig)\n 55 %  ███████████░░░░░░░░░  DSGVO / Datenschutz  (sehr häufig)\n 55 %  ███████████░░░░░░░░░  Abschreibung / Kalkulation  (sehr häufig)\n 52 %  ██████████░░░░░░░░░░  Subnetting / IP-Adressierung  (sehr häufig)\n 52 %  ██████████░░░░░░░░░░  SQL / Datenbanken  (sehr häufig)\n 52 %  ██████████░░░░░░░░░░  Struktogramm / Pseudocode / Algorithmus  (sehr häufig)\n 48 %  ██████████░░░░░░░░░░  Schutzbedarf / CIA / BSI  (sehr häufig)\n 45 %  █████████░░░░░░░░░░░  Verschlüsselung / Zertifikate / Hash  (sehr häufig)\n 41 %  ████████░░░░░░░░░░░░  VPN  (sehr häufig)\n 38 %  ████████░░░░░░░░░░░░  Zahlensysteme / Speichergrößen  (häufig)\n 38 %  ████████░░░░░░░░░░░░  ER-Modell / Kardinalität  (häufig)\n 38 %  ████████░░░░░░░░░░░░  Netzplan / Gantt / krit. Pfad  (häufig)\n 34 %  ███████░░░░░░░░░░░░░  WLAN  (häufig)\n 34 %  ███████░░░░░░░░░░░░░  RAID  (häufig)\n 34 %  ███████░░░░░░░░░░░░░  Backup / Datensicherung  (häufig)\n 34 %  ███████░░░░░░░░░░░░░  NAS / SAN / iSCSI  (häufig)\n 31 %  ██████░░░░░░░░░░░░░░  DHCP  (häufig)\n 31 %  ██████░░░░░░░░░░░░░░  USV / Netzteil / Strom  (häufig)\n 31 %  ██████░░░░░░░░░░░░░░  Cloud (IaaS/PaaS/SaaS)  (häufig)\n 31 %  ██████░░░░░░░░░░░░░░  Angebotsvergleich / Bezugskalk. / Skonto  (häufig)\n 28 %  ██████░░░░░░░░░░░░░░  IPv6  (häufig)\n 28 %  ██████░░░░░░░░░░░░░░  Malware / Phishing / Angriffe  (häufig)",
            },
            {
              type: "note",
              value:
                "Lernstrategie daraus: 1. Alles ab „sehr häufig“ zuerst sicher beherrschen – das ist der Grundstock der Punkte. 2. „Häufig“-Themen mindestens einmal mit Übungsaufgabe durcharbeiten. 3. „Gelegentlich“-Themen über die Lernkarten und das Blitz-Training abdecken – hier reicht Überblickswissen für Teilpunkte. Rechenthemen (Subnetting, Kalkulation, Netzplan) immer mit Rechenweg üben: Sie kommen nicht nur oft, sie geben auch planbare Punkte.",
            },
          ],
          quiz: [
            {
              id: "imp_ap1-i-1_0",
              q: "AP1 Dauer?",
              options: ["180 Min", "60 Min", "90 Min", "120 Min"],
              correct: 2,
              explain: "90 Minuten.",
            },
            {
              id: "imp_ap1-i-1_1",
              q: "In welchem Antwortformat ist die AP1 gehalten?",
              options: ["Projektarbeit", "Offene Aufgaben", "Mündlich", "Multiple Choice"],
              correct: 1,
              explain: "Offene, handlungsorientierte Aufgaben.",
            },
            {
              id: "imp_ap1-i-1_2",
              q: "AP1 Aufgabenformat?",
              options: [
                "Mündlich",
                "Offene handlungsorientierte Aufgaben",
                "Nur Multiple Choice",
                "Nur Rechenaufgaben",
              ],
              correct: 1,
              explain:
                "Offene Aufgaben: Berechnungen, Netzpläne, Analyse, Entscheidungen begründen.",
            },
            {
              id: "imp_ap1-i-1_3",
              q: "AP1 prüft welche Lernfelder?",
              options: ["Alle", "LF1-3", "LF7-12", "LF1-6"],
              correct: 3,
              explain: "AP1 prüft die Inhalte aus LF1-LF6 (1. Lehrjahr).",
            },
            {
              id: "imp_ap1-i-1_4",
              q: "AP1 Bestehensgrenze?",
              options: ["50%", "30%", "70%", "60%"],
              correct: 0,
              explain: "Mind. 50% in AP1 (aber Gesamtnote zählt).",
            },
            {
              id: "imp_ap1-i-1_5",
              q: "AP1: Taschenrechner erlaubt?",
              options: ["Egal", "Nein", "Ja, nicht programmierbar", "Nur Handy"],
              correct: 2,
              explain: "Nicht programmierbarer Taschenrechner ist erlaubt.",
            },
            {
              id: "imp_ap1-i-1_6",
              q: "AP1: Handlungsorientiert?",
              options: [
                "Ausschließlich Multiple-Choice ohne Freitexte",
                "Reine Theoriefragen ohne jeden Praxisbezug",
                "Ausschließlich Rechenaufgaben mit Formelsammlung",
                "Praxisnahe Szenarien, Entscheidungen begründen",
              ],
              correct: 3,
              explain: "Handlungsorientiert: Reale Szenarien analysieren und lösen.",
            },
            {
              id: "imp_ap1-i-1_7",
              q: "Typische AP1-Aufgabe?",
              options: [
                "Mündliche Präsentation mit anschließendem Fachgespräch",
                "Umfangreiche Programmieraufgabe mit Quellcode-Abgabe",
                "Netzwerk planen, Hardware auswählen, Kosten berechnen",
                "Ausschließlich WiSo-Fragen zu Recht und Wirtschaft",
              ],
              correct: 2,
              explain: "Netzplanung, Hardwareauswahl, Kalkulation, Projektplanung.",
            },
            {
              id: "imp_ap1-i-1_8",
              q: "AP1: Welche Themen besonders?",
              options: [
                "Ausschließlich LF1, andere Lernfelder entfallen",
                "Nur WiSo-Themen wie Vertragsrecht und Tarifpolitik",
                "Subnetting, Kalkulation, Projektplanung, IT-Sicherheit",
                "Nur Netzwerktechnik, alles andere kommt erst in AP2",
              ],
              correct: 2,
              explain: "Subnetting, Bezugspreis, Energiekosten, Netzplan, BSI sind Dauerbrenner.",
            },
            {
              id: "imp_ap1-i-1_9",
              q: "Wie viel Zeit bleibt rechnerisch pro Punkt (90 Minuten, 100 Punkte)?",
              options: [
                "Genau zwei Minuten",
                "Zeit spielt keine Rolle",
                "Knapp unter einer Minute",
                "Fünf Minuten",
              ],
              correct: 2,
              explain:
                "Die Punktzahl je Teilaufgabe ist die Zeitvorgabe. Eine 6-Punkte-Teilaufgabe verdient ca. 5–6 Minuten. Wer an 2-Punktern klebt, verliert die Prüfung über die Zeit.",
            },
            {
              id: "imp_ap1-i-1_10",
              q: "Was passiert, wenn vier Angaben gefordert sind und du sechs aufzählst?",
              options: [
                "Die Aufgabe wird mit 0 bewertet",
                "Alle sechs werden bewertet, die besten zählen",
                "Es gibt Bonuspunkte",
                "Nur die ersten vier werden bewertet",
              ],
              correct: 3,
              explain:
                "So steht es in den Bearbeitungshinweisen – überflüssige Antworten kosten Zeit und können sogar richtige verdrängen.",
            },
            {
              id: "imp_ap1-i-1_11",
              q: "Wie unterscheiden sich die Operatoren 'nennen' und 'erläutern'?",
              options: [
                "Beide Operatoren verlangen ausformulierte Aufsätze von mindestens einer Seite Länge",
                "Erläutern = die zutreffende Antwort ankreuzen; nennen = eine Multiple-Choice-Auswahl treffen",
                "Nennen = mindestens eine Seite Fließtext; erläutern = nur ein einzelnes Stichwort angeben",
                "Nennen = stichwortartig aufzählen; erläutern = mit Begründung/Zusammenhang ausführen",
              ],
              correct: 3,
              explain:
                "Den Operator lesen spart Zeit: Bei 'nennen' reichen Stichworte, bei 'beschreiben/erläutern' braucht es Sätze.",
            },
            {
              id: "imp_ap1-i-1_12",
              q: "Mit welchem Wert rechnest du weiter, wenn du ein Zwischenergebnis gerundet hast?",
              options: [
                "Abwechselnd",
                "Mit dem exakten Wert aus dem Speicher",
                "Mit dem gerundeten Wert – konsequent auch im Taschenrechner",
                "Mit dem Mittelwert",
              ],
              correct: 2,
              explain:
                "Die Bearbeitungshinweise schreiben das ausdrücklich vor – sonst weichen die Folgeergebnisse von der Musterlösung ab.",
            },
            {
              id: "imp_ap1-i-1_13",
              q: "Was gilt für Notizen auf dem Konzeptpapier?",
              options: [
                "Sie ersetzen die Lösungsfelder",
                "Sie werden NICHT bewertet",
                "Sie geben Zusatzpunkte",
                "Sie werden zuerst korrigiert",
              ],
              correct: 1,
              explain:
                "Nur Eintragungen im Aufgabensatz zählen. Lösungen rechtzeitig in die vorgesehenen Felder übertragen – am Ende der Zeit wird das gern vergessen.",
            },
            {
              id: "imp_ap1-i-1_14",
              q: "Welche Folge hat unleserliche Schrift laut Bearbeitungshinweisen?",
              options: [
                "Der Korrektor ruft im Betrieb an und fragt die Lösung nach",
                "Keine Folge – der gute Wille des Prüflings zählt",
                "Nicht eindeutig lesbare Ergebnisse werden als falsch gewertet",
                "Es gibt einen pauschalen Punktabzug von 5 % der Gesamtpunkte",
              ],
              correct: 2,
              explain:
                "Deutlich schreiben ist Punktesicherung, besonders bei Zahlen und Fachbegriffen.",
            },
            {
              id: "imp_ap1-i-1_15",
              q: "Wie fließt die AP1 in das Gesamtergebnis der Abschlussprüfung ein?",
              options: [
                "Mit 80 Prozent",
                "Mit 20 Prozent",
                "Gar nicht, sie ist nur Übung",
                "Mit 50 Prozent",
              ],
              correct: 1,
              explain:
                "AP1 (Mitte der Ausbildung) zählt 20 %, die AP2-Teile zusammen 80 % – die AP1 ist nicht wiederholbar, die Punkte stehen fest.",
            },
            {
              id: "imp_ap1-i-1_16",
              q: "Wann findet die AP1 regulär statt?",
              options: [
                "Zur Mitte der Ausbildung, im Regelfall im vierten Ausbildungshalbjahr",
                "Bereits in der ersten Ausbildungswoche als Eingangstest des Betriebs",
                "Erst nach der AP2, da sie inhaltlich auf deren Ergebnissen aufbaut",
                "Zugelassen wird nur, wer die AP2 zuvor erfolgreich bestanden hat",
              ],
              correct: 0,
              explain:
                "Bei 3-jähriger Ausbildung also etwa nach 18 Monaten – die Inhalte der ersten Lernfelder müssen dann sitzen.",
            },
            {
              id: "imp_ap1-i-1_17",
              q: "Bei einer Rechenaufgabe fehlt dir Teilergebnis a). Was tust du bei Teil b), der darauf aufbaut?",
              options: [
                "Den im Aufgabentext angebotenen Ersatzwert nutzen bzw. mit einem angenommenen Wert nachvollziehbar weiterrechnen",
                "Teil b) komplett auslassen, da ohne exaktes Teilergebnis a) ohnehin keine Punkte vergeben werden können",
                "Ein plausibles Endergebnis ohne Rechenweg hinschreiben, da nur das Resultat in die Bewertung eingeht",
                "Die Prüfung abbrechen und einen Rücktritt erklären, um den Prüfungsversuch nicht zu verlieren",
              ],
              correct: 0,
              explain:
                "Die IHK gibt oft Ersatzwerte vor ('Falls Sie a) nicht lösen konnten, rechnen Sie mit …') – Folgefehler werden nicht doppelt bestraft.",
            },
            {
              id: "imp_ap1-i-1_18",
              q: "Welche Aufgabenform hat die AP1 (AO 2020) überwiegend?",
              options: [
                "Ein mündliches Prüfungsgespräch vor dem Prüfungsausschuss",
                "Ausschließlich Multiple-Choice-Fragen mit vier Antwortmöglichkeiten",
                "Praktische Programmieraufgaben, die direkt am PC gelöst werden",
                "Offene, handlungsorientierte Aufgaben entlang eines Firmenszenarios",
              ],
              correct: 3,
              explain:
                "Ein durchgehendes Szenario (z. B. Systemhaus mit Kundenauftrag) zieht sich durch alle vier Aufgaben.",
            },
            {
              id: "imp_ap1-i-1_19",
              q: "Welche Strategie ist bei 4 Aufgaben à ~25 Punkte sinnvoll?",
              options: [
                "Mit der Aufgabe starten, die dir am meisten liegt",
                "Erst alles durchlesen und die letzten 30 Minuten schreiben",
                "Nur die ersten zwei Aufgaben bearbeiten",
                "Streng der Reihenfolge folgen, egal wie lange Aufgabe 1 dauert",
              ],
              correct: 0,
              explain:
                "Punkte sind überall gleich viel wert. Die Aufgaben sind unabhängig; wer sich festbeißt, verschenkt leichte Punkte in späteren Aufgaben.",
            },
          ],
        },
        {
          id: "prap1-lernen-1",
          title: "Lernstrategie: Fahrplan, Techniken & Prüfungsangst",
          content: [
            {
              type: "text",
              value:
                "Wissen allein besteht keine Prüfung – der Umgang damit entscheidet. Diese Lektion ist deine Meta-Anleitung: wie du die drei Jahre planst, wie du effektiv lernst und wie du am Prüfungstag ruhig bleibst. Sie ist bewusst kurz gehalten, damit du schnell ins Tun kommst – denn Lernen über das Lernen ersetzt das Lernen nicht.",
            },
            { type: "heading", value: "Der 3-Jahres-Fahrplan" },
            {
              type: "list",
              value: [
                "JAHR 1 (Grundlagen sichern): LF1–5 – Hardware, Netzwerk-Grundlagen, IPv4/Subnetting, IT-Sicherheit, Daten/SQL. Ziel: die Rechenrezepte (Subnetting!) sitzen automatisch. Zwischenziel: AP1 nach ~18 Monaten – die zählt 20 % und ist früh sicherbar.",
                "JAHR 2 (Aufbau): LF6–9 – Service/ITIL, CPS, Datenbereitstellung, Netzwerke & Dienste. Parallel: erste Zertifizierung erwägen, Projektideen für die AP2 sammeln.",
                "JAHR 3 (Vertiefung + Prüfung): LF10–12 – Automatisierung, Sicherheit, Systemintegration. Projektantrag früh einreichen, AP2-Musterprüfungen unter Zeitdruck üben, WiSo-Themen wiederholen.",
                "DAUERAUFGABE: Berichtsheft wöchentlich führen (es ist Zulassungsvoraussetzung!) und die tägliche Lernaufgabe dieser Plattform nutzen – 5 Fragen täglich schlagen 3 Stunden am Wochenende.",
              ],
            },
            { type: "heading", value: "Lerntechniken, die belegt funktionieren" },
            {
              type: "list",
              value: [
                "AKTIVES ABRUFEN (Retrieval): Karteikarten/Quiz schlagen erneutes Lesen deutlich – genau dafür sind die Lernkarten und Snacks hier da. Erst selbst antworten, dann Lösung.",
                "VERTEILTES LERNEN (Spaced Repetition): 20 Minuten täglich über zwei Wochen schlagen 5 Stunden am Stück. Der Wiederholungsmodus im Quiz priorisiert deine Fehler.",
                "POMODORO: 25 Minuten fokussiert, 5 Minuten Pause – der Fokus-Timer oben im Menü hilft. Handy in den anderen Raum.",
                "VERSTEHEN vor Auswendiglernen: Wer WEISS, warum ein /26 genau 62 Hosts hat, muss es nie auswendig lernen. Die Erklärungen und Merkhilfen zielen darauf.",
                "SELBSTTEST unter echten Bedingungen: Die Musterprüfungen mit Timer machen – der beste Angst-Killer ist ein Probelauf, der geklappt hat.",
              ],
            },
            { type: "heading", value: "Prüfungsangst: was wirklich hilft" },
            {
              type: "text",
              value:
                "Ein bisschen Aufregung ist normal und macht wach – erst Panik blockiert. Vorbeugung schlägt Bekämpfung: Wer früh und verteilt gelernt und mindestens eine Musterprüfung im Zeitfenster bestanden hat, geht anders rein. Am Prüfungstag: ausgeschlafen und gefrühstückt erscheinen, zuerst die Aufgaben lösen, die du sicher kannst (Punkte + Selbstvertrauen), bei Blackout eine Minute bewusst atmen (4 Sekunden ein, 6 aus) und zur nächsten Aufgabe springen – nichts leer lassen, Teilpunkte mitnehmen. Bei ernster, dauerhafter Prüfungsangst ist das kein Charakterfehler: Die Berufsschule, die Kammer und Beratungsstellen helfen – rechtzeitig ansprechen.",
            },
            { type: "heading", value: "Übungsaufgabe: Deinen Wochenplan bauen" },
            {
              type: "text",
              value:
                "Du bist im 3. Lehrjahr, die AP2 ist in 10 Wochen, du fühlst dich bei Netzplantechnik und WiSo unsicher, Subnetting sitzt. Entwirf einen realistischen Wochen-Lernplan (Werktags-Abende + Wochenende) nach den obigen Prinzipien und begründe die Schwerpunkte.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (Beispiel): Werktags je 25–50 Min (Pomodoro): Mo/Mi/Fr WiSo (Schwäche – verteiltes Lernen über viele kleine Einheiten wirkt hier am besten), Di/Do Netzplantechnik (Schwäche – täglich EIN durchgerechneter Netzplan, bis der Ablauf automatisch sitzt). Subnetting NICHT täglich (sitzt schon), aber 1× pro Woche kurz auffrischen, damit es nicht verfällt. Wochenende: samstags eine AP2-Musterprüfung unter Zeitdruck (Selbsttest unter echten Bedingungen), sonntags die Fehler daraus im Wiederholungsmodus nacharbeiten. Ab Woche 8: verstärkt Musterprüfungen, weniger Neues. Begründung: Zeit fließt in die SCHWÄCHEN (nicht ins angenehme Subnetting), aktives Abrufen + verteiltes Lernen statt Nachtschichten, und der frühe Prüfungs-Probelauf nimmt die Angst.",
            },
          ],
          quiz: [
            {
              id: "imp_prap1-lernen-1_0",
              q: "Warum schlägt aktives Abrufen (Quiz/Karten) das reine Wiederlesen?",
              options: [
                "Aktives Abrufen geht schneller, man spart gegenüber dem Wiederlesen rund die Hälfte der Lernzeit",
                "Das Gehirn festigt Wissen stärker, wenn es aktiv abgerufen statt nur passiv aufgenommen wird",
                "Reines Wiederlesen ist in der Prüfungsvorbereitung nicht zugelassen und wird von der IHK nicht anerkannt",
                "Karteikarten sind übersichtlicher gestaltet, und schöneres Layout erhöht automatisch die Merkleistung",
              ],
              correct: 1,
              explain:
                "Retrieval Practice ist einer der bestbelegten Lerneffekte – erst selbst antworten, dann Lösung.",
            },
            {
              id: "imp_prap1-lernen-1_1",
              q: "Was ist die klügste Reihenfolge in der schriftlichen Prüfung?",
              options: [
                "Aufgaben stur der Reihe nach",
                "Zuerst die sicheren Aufgaben",
                "Die schwerste zuerst",
                "Alle gleichzeitig anfangen",
              ],
              correct: 1,
              explain:
                "Sichere Punkte und Selbstvertrauen zuerst holen, die Angst-Aufgabe später mit vollem Zeitbudget angehen – und nichts leer lassen. Standardstrategie.",
            },
            {
              id: "imp_prap1-lernen-1_2",
              q: "Du kannst Subnetting sicher, WiSo ist die Schwäche. Wie verteilst du die Lernzeit?",
              options: [
                "Die meiste Zeit in Subnetting investieren, weil es Spaß macht und schnelle Erfolge bringt",
                "Den Großteil in die Schwäche (WiSo), Subnetting nur kurz auffrischen",
                "Ausschließlich Subnetting üben und WiSo vollständig aus dem Lernplan streichen",
                "Auf einen Lernplan komplett verzichten und spontan nach Tagesform entscheiden",
              ],
              correct: 1,
              explain: "Zeit gehört in die Schwächen – die Heatmap dieser Plattform zeigt dir, wo.",
            },
            {
              id: "imp_prap1-lernen-1_3",
              q: "Was ist die wirksamste Vorbeugung gegen Prüfungsangst?",
              options: [
                "Nichts unternehmen und darauf vertrauen, dass die Aufregung am Prüfungstag verschwindet",
                "Früh und verteilt lernen plus mindestens eine bestandene Musterprüfung unter Zeitdruck",
                "Die komplette Nacht vor der Prüfung durchlernen, um den Stoff frisch im Kopf zu haben",
                "Am Prüfungstag viel Kaffee und Energydrinks, um die Konzentration zu erzwingen",
              ],
              correct: 1,
              explain:
                "Ein geglückter Probelauf unter echten Bedingungen ist der beste Angst-Killer; Nachtschichten schaden.",
            },
          ],
        },
        {
          id: "prap1-orga-1",
          title: "Prüfungsorganisation: Gewichtung, Bestehensregeln & Fristen",
          content: [
            {
              type: "text",
              value:
                "Damit du weißt, worum du eigentlich kämpfst: Die gestreckte Abschlussprüfung der IT-Berufe (AO 2020) hat KEINE Zwischenprüfung mehr – Teil 1 (AP1) zählt direkt in die Endnote. Die FISI-Gewichtung: AP1 „Einrichten eines IT-gestützten Arbeitsplatzes“ 20 % · AP2 „Konzeption und Administration von IT-Systemen“ 10 % · „Analyse und Entwicklung von Netzwerken“ 10 % · „Wirtschafts- und Sozialkunde“ 10 % · betriebliche Projektarbeit mit Präsentation und Fachgespräch 50 %. Die Projektarbeit ist also das halbe Zeugnis! Verbindlich ist immer der Bescheid deiner zuständigen Stelle – aber diese Struktur gilt bundesweit nach der Ausbildungsordnung.",
            },
            { type: "heading", value: "Die Bestehensregeln – hier fallen Leute durch" },
            {
              type: "list",
              value: [
                "Gesamtergebnis (Teil 1 + Teil 2) mindestens „ausreichend“ (50 %).",
                "Ergebnis von TEIL 2 für sich mindestens „ausreichend“ – eine Super-AP1 rettet keine verpatzte AP2.",
                "Mindestens DREI der vier Prüfungsbereiche von Teil 2 mindestens „ausreichend“.",
                "KEIN Prüfungsbereich von Teil 2 „ungenügend“ (unter 30 %) – ein einziges Ungenügend heißt durchgefallen, egal wie gut der Rest ist.",
                "Wichtig: Die AP1 selbst kann man nicht „nicht bestehen“ – ein schlechtes AP1-Ergebnis zieht aber 20 % der Endnote nach unten und ist nicht wiederholbar!",
              ],
            },
            { type: "heading", value: "Der Rettungsanker: mündliche Ergänzungsprüfung" },
            {
              type: "text",
              value:
                "Steht das Bestehen auf der Kippe, kannst du in EINEM schlecht gelaufenen schriftlichen Bereich von Teil 2 (auch WiSo) eine mündliche Ergänzungsprüfung beantragen: rund 15 Minuten, das schriftliche Ergebnis wird mit der mündlichen Leistung im Verhältnis 2:1 verrechnet. Rechenbeispiel: schriftlich 40 Punkte, mündlich 70 → (2 × 40 + 70) ÷ 3 = 50 → bestanden. Sie lohnt nur, wenn sie rechnerisch den Ausschlag geben KANN – das rechnet dir die zuständige Stelle vor, aber du solltest es selbst können. Fristen und Formalien, die du im Blick haben musst: Anmeldung zur Prüfung läuft über den Betrieb bei der zuständigen Stelle (Einladung kommt schriftlich), Zulassung zu Teil 2 setzt u. a. den geführten Ausbildungsnachweis voraus, die Projektarbeit hat feste Einreichungsfristen für Antrag und Dokumentation (Portal-Deadlines!), und bei Nichtbestehen ist die Prüfung zweimal wiederholbar – auf Verlangen verlängert sich die Ausbildung bis zur nächstmöglichen Wiederholung (max. 1 Jahr).",
            },
            { type: "heading", value: "Übungsaufgabe: Bestehen oder nicht?" },
            {
              type: "text",
              value:
                "Prüfe drei Kandidaten (Punkte von 100): a) AP1 90 · Konzeption 45 · Netzwerke 48 · WiSo 52 · Projekt 70. b) AP1 38 · Konzeption 55 · Netzwerke 60 · WiSo 58 · Projekt 65. c) AP1 75 · Konzeption 60 · Netzwerke 28 · WiSo 80 · Projekt 85. Berechne jeweils das Gesamtergebnis und wende ALLE Bestehensregeln an.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: a) Gesamt: 90×0,2 + 45×0,1 + 48×0,1 + 52×0,1 + 70×0,5 = 18+4,5+4,8+5,2+35 = 67,5 → Note 3. ABER: In Teil 2 sind Konzeption (45) und Netzwerke (48) unter 50 – nur ZWEI von vier Bereichen ausreichend → NICHT bestanden (Regel: mindestens drei). Rettung: mündliche Ergänzung in Konzeption ODER Netzwerke, wenn damit ein dritter Bereich auf ≥ 50 kommt. b) Gesamt: 7,6+5,5+6+5,8+32,5 = 57,4; Teil 2 komplett ausreichend → BESTANDEN – die schwache AP1 (38) kostet nur Note, nicht das Bestehen. c) Netzwerke 28 = UNGENÜGEND → durchgefallen, trotz Gesamt 74,3 – die Ungenügend-Regel schlägt alles; Ergänzungsprüfung prüfen (28 → mündlich nötig: (2×28+x)/3 ≥ 50 → x ≥ 94: praktisch kaum erreichbar → Wiederholung des Bereichs).",
            },
          ],
          quiz: [
            {
              id: "imp_prap1-orga-1_0",
              q: "Wie viel wiegt die betriebliche Projektarbeit (inkl. Präsentation/Fachgespräch) an der FISI-Endnote?",
              options: ["20 %", "10 %", "50 %", "80 %"],
              correct: 2,
              explain:
                "Die halbe Endnote – entsprechend gehört sie strategisch geplant, nicht nebenbei erledigt.",
            },
            {
              id: "imp_prap1-orga-1_1",
              q: "Ein Prüfungsbereich von Teil 2 endet mit 25 Punkten (ungenügend), alles andere ist gut. Ergebnis?",
              options: [
                "Bestanden, der Schnitt stimmt",
                "Nicht bestanden",
                "Bestanden mit Auflage",
                "Nur WiSo zählt",
              ],
              correct: 1,
              explain:
                "Ein Ungenügend in Teil 2 verhindert das Bestehen immer. Die Ungenügend-Sperre ist die härteste Regel – unter 30 % darf kein Bereich liegen.",
            },
            {
              id: "imp_prap1-orga-1_2",
              q: "Schriftlich 40 Punkte, mündliche Ergänzungsprüfung 70 – was ergibt die 2:1-Verrechnung?",
              options: ["55", "50", "60", "46"],
              correct: 1,
              explain:
                "(2 × 40 + 70) ÷ 3 = 150 ÷ 3 = 50 → gerade bestanden. Diese Rechnung solltest du selbst beherrschen.",
            },
            {
              id: "imp_prap1-orga-1_3",
              q: "Kann man die AP1 wiederholen, wenn sie schlecht lief?",
              options: [
                "Ja, beliebig oft – bis zum Bestehen kann sie in jedem Prüfungszeitraum neu angetreten werden",
                "Ja, einmal – auf Antrag bei der IHK wird ein einmaliger Zweitversuch angesetzt",
                "Nein – sie ist Teil der gestreckten Prüfung und wird nicht wiederholt; das Ergebnis zählt mit 20 %",
                "Nur mit ärztlichem Attest genehmigt die IHK einen zweiten Versuch der AP1",
              ],
              correct: 2,
              explain:
                "Deshalb die AP1 ernst nehmen: 20 % der Endnote stehen danach unveränderlich fest.",
            },
          ],
        },
        {
          id: "prap1-bericht-1",
          title: "Berichtsheft führen: Pflicht, Praxis & gute Einträge",
          content: [
            {
              type: "text",
              value:
                "Der Ausbildungsnachweis (Berichtsheft) ist keine Schikane, sondern ZULASSUNGSVORAUSSETZUNG zur Abschlussprüfung (§ 43 BBiG) – ohne vollständig geführten und unterschriebenen Nachweis keine Prüfung. Die Regeln: Führen während der Arbeitszeit (Ausbildungszeit!), mindestens wöchentlich, schriftlich oder digital (im Vertrag festgelegt), regelmäßige Kontrolle und Abzeichnung durch die Ausbilderin/den Ausbilder. Inhalt: ausgeführte Tätigkeiten, Unterweisungen, Berufsschulthemen – in einfachen Stichworten oder kurzen Sätzen mit Zeitangaben. Der unterschätzte Nutzen: Ein gut geführtes Heft ist deine Stoffsammlung für die Projektarbeit (wann hast du was gemacht?), dein Beleg bei Streit über ausbildungsfremde Tätigkeiten – und die Prüfer dürfen im Fachgespräch darauf zurückgreifen.",
            },
            { type: "heading", value: "Gute vs. schlechte Einträge" },
            {
              type: "list",
              value: [
                "SCHLECHT: „Diverses gemacht, Tickets bearbeitet“ – nichtssagend, nicht prüfbar, hilft dir in drei Monaten nichts.",
                "GUT: „Ticket #4711: Netzwerkdrucker Empfang ohne Verbindung – Ursache: Port im falschen VLAN; Umzug auf VLAN 20, Testdruck ok (1,5 h). Unterweisung Switch-Konfiguration durch Hr. M. (1 h). Berufsschule: LF3 Subnetting, VLSM-Übungen (8 h).“",
                "Regel: Tätigkeit + System/Kontext + Ergebnis + Dauer. Fachbegriffe verwenden – das Heft dokumentiert deinen Kompetenzzuwachs.",
                "Wöchentlich SOFORT schreiben – die Rekonstruktion von sechs Monaten aus dem Kalender vor der Zulassung ist die klassische Azubi-Panikwoche.",
              ],
            },
            { type: "heading", value: "Übungsaufgabe: Woche dokumentieren" },
            {
              type: "text",
              value:
                "Deine Woche: Mo Patchpanel im 2. OG mit aufgelegt und Dosen beschriftet; Di+Mi beim Kunden Müller GmbH Windows-Server-Migration begleitet (Datenübernahme, Freigaben); Do Berufsschule; Fr drei Tickets (Drucker, VPN-Zugang, Outlook-Profil) plus Unterweisung Backupkonzept. Schreibe die fünf Berichtsheft-Einträge prüfungstauglich.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (Beispiel): Mo: „Strukturierte Verkabelung 2. OG: 12 Dosen auf Patchpanel aufgelegt (T568B), Beschriftung nach Doku-Schema, Durchgangsprüfung (8 h).“ Di: „Kunde M. GmbH: Migration Windows Server – Ist-Aufnahme Freigaben/Rechte, Robocopy-Testlauf der Datenübernahme (8 h).“ Mi: „Kunde M. GmbH: Produktivmigration Dateidienste, NTFS-/Freigabe-Rechte geprüft, Abnahmetest mit Kundin (8 h).“ Do: „Berufsschule: LF9 Netzwerkdienste – DHCP-Relay, DNS-Zonen; WiSo: Kaufvertragsstörungen (8 h).“ Fr: „Support: 3 Tickets gelöst (Netzwerkdrucker VLAN, VPN-Profil neu ausgerollt, Outlook-Profil repariert, zus. 4 h); Unterweisung Backupkonzept 3-2-1 durch Ausbilder (2 h); Doku (2 h).“ – Muster: konkret, mit Fachbegriffen, Zeiten plausibel, Namen von Kunden ggf. gekürzt (Datenschutz).",
            },
          ],
          quiz: [
            {
              id: "imp_prap1-bericht-1_0",
              q: "Welche Folge hat ein nicht geführter Ausbildungsnachweis?",
              options: [
                "Keine Folgen, das Führen ist eine freiwillige Übung",
                "Eine schriftliche Abmahnung durch die Berufsschule",
                "Keine Zulassung zur Abschlussprüfung (§ 43 BBiG)",
                "Eine Geldstrafe, die die IHK vom Azubi einfordert",
              ],
              correct: 2,
              explain:
                "Das Berichtsheft ist Zulassungsvoraussetzung – der häufigste vermeidbare Zulassungsstolperstein.",
            },
            {
              id: "imp_prap1-bericht-1_1",
              q: "Wann wird das Berichtsheft geführt?",
              options: [
                "Am Wochenende zu Hause",
                "Während der Ausbildungszeit",
                "Nur vor Prüfungen",
                "Nach Feierabend",
              ],
              correct: 1,
              explain:
                "Das Führen ist Arbeitszeit. Gesetzlich klargestellt: Die Zeit fürs Führen gehört zur Ausbildung.",
            },
            {
              id: "imp_prap1-bericht-1_2",
              q: "Was macht einen guten Eintrag aus?",
              options: [
                "Möglichst kurze Stichworte wie „Tickets bearbeitet“",
                "Tätigkeit + Kontext + Ergebnis + Dauer, mit Fachbegriffen",
                "Ausführliche Romanform mit sämtlichen Detailinformationen",
                "Lediglich die Tagesüberschrift ohne weitere Angaben",
              ],
              correct: 1,
              explain:
                "Konkret genug, dass du (und der Prüfungsausschuss) in einem Jahr noch weißt, was du gelernt hast.",
            },
            {
              id: "imp_prap1-bericht-1_3",
              q: "Welcher Zusatznutzen macht das Heft für die AP2 wertvoll?",
              options: [
                "Es hat für die AP2 keinerlei Nutzen, da es nur die AP1 betrifft",
                "Es ist die Stoffsammlung für Projektarbeit und Fachgespräch",
                "Es ersetzt die komplette Projektdokumentation der Abschlussarbeit",
                "Die IHK vergibt für geführte Hefte Bonuspunkte auf die Prüfungsnote",
              ],
              correct: 1,
              explain:
                "Zeiten und Tätigkeiten sind belegbar. Wer sauber führt, rekonstruiert Projektphasen und Beispiele fürs Fachgespräch in Minuten.",
            },
          ],
        },
        {
          id: "prap1-team-1",
          title: "Teamphasen & Verhandeln: Tuckman-Modell und Harvard-Konzept",
          content: [
            {
              type: "text",
              value:
                "In der AP1 tauchen regelmäßig Fragen zu Teamarbeit und Verhandlungsführung auf – meist als Handlungsschritt in einer Projektsituation: „Das neue Projektteam arbeitet noch nicht effektiv zusammen. Erklären Sie, in welcher Phase sich das Team befindet.“ Oder: „Verhandeln Sie mit dem Lieferanten über den Preis – nach welchen Grundsätzen gehen Sie vor?“ Beide Themen sind reine Lernthemen: Wer die Modelle kennt, holt hier volle Punkte.",
            },
            { type: "heading", value: "Die 5 Teamphasen nach Tuckman" },
            {
              type: "text",
              value:
                "Der Psychologe Bruce Tuckman hat 1965 beschrieben, dass jedes neu zusammengestellte Team typische Entwicklungsphasen durchläuft. Wichtig für die Prüfung: Die Phasen laufen in fester Reihenfolge ab, und ein Team kann bei Veränderungen (neues Mitglied, neuer Auftrag) in eine frühere Phase zurückfallen.",
            },
            {
              type: "list",
              value: [
                "Forming (Orientierungsphase): Das Team lernt sich kennen. Höflichkeit, Unsicherheit, wenig Produktivität. Rollen und Ziele sind unklar – die Führungskraft muss Orientierung geben.",
                "Storming (Konfliktphase): Rollen, Zuständigkeiten und Vorgehensweisen werden ausgefochten. Konflikte und Machtkämpfe sind normal und sogar notwendig. Gefährlichste Phase – hier zerbrechen Teams, wenn Konflikte unterdrückt statt moderiert werden.",
                "Norming (Regelphase): Das Team einigt sich auf Spielregeln, Rollen sind akzeptiert, ein Wir-Gefühl entsteht. Die Produktivität steigt deutlich.",
                "Performing (Arbeitsphase): Das Team arbeitet selbstorganisiert und leistungsfähig. Die Führungskraft kann delegieren und sich auf Ausnahmen konzentrieren.",
                "Adjourning (Auflösungsphase, 1977 ergänzt): Das Projekt endet, das Team löst sich auf. Wichtig: Ergebnisse sichern (Lessons Learned), Erfolge würdigen, Abschied gestalten.",
              ],
            },
            {
              type: "note",
              value:
                "Merksatz: Forming – Storming – Norming – Performing – Adjourning. In der Prüfung wird oft ein Szenario beschrieben („es gibt Streit über Zuständigkeiten“) und du musst die Phase benennen (hier: Storming) und eine passende Führungsmaßnahme nennen (Konflikte moderieren, Rollen klären – nicht: Konflikt verbieten).",
            },
            { type: "heading", value: "Das Harvard-Konzept: sachgerecht verhandeln" },
            {
              type: "text",
              value:
                "Das Harvard-Konzept (Fisher/Ury, Harvard-Universität) ist die bekannteste Methode für sachliches Verhandeln. Ziel ist nicht der Sieg über die Gegenseite, sondern eine Win-Win-Lösung: ein Ergebnis, bei dem beide Seiten ihre wesentlichen Interessen durchsetzen und die Geschäftsbeziehung erhalten bleibt. Das Gegenteil wäre Positionsfeilschen („Ich will 10 % Rabatt!“ – „Maximal 2 %!“), bei dem sich beide Seiten in Positionen eingraben.",
            },
            {
              type: "list",
              value: [
                "1. Menschen und Probleme getrennt behandeln: Hart in der Sache, weich zu den Personen. Persönliche Angriffe und Sachfragen niemals vermischen.",
                "2. Interessen statt Positionen verhandeln: Hinter der Position („10 % Rabatt“) steht ein Interesse („Budget einhalten“). Interessen lassen sich oft anders erfüllen als über die genannte Position – z. B. längere Zahlungsziele, kostenlose Wartung, Staffelpreise.",
                "3. Optionen zum beiderseitigen Vorteil entwickeln: Vor der Entscheidung mehrere Lösungsvarianten sammeln (Brainstorming), statt um eine einzige Zahl zu kämpfen.",
                "4. Objektive Kriterien anwenden: Das Ergebnis an neutralen Maßstäben messen – Marktpreise, Gutachten, Normen, Vergleichsangebote. So wird die Einigung begründbar statt willkürlich.",
              ],
            },
            {
              type: "text",
              value:
                "Dazu gehört die BATNA (Best Alternative To a Negotiated Agreement): die beste Alternative, falls die Verhandlung scheitert. Wer seine BATNA kennt (z. B. ein Vergleichsangebot eines zweiten Lieferanten), verhandelt gelassener und weiß, ab wann ein Abbruch besser ist als ein schlechter Abschluss.",
            },
            { type: "heading", value: "Übungsaufgabe (AP1-Stil)" },
            {
              type: "text",
              value:
                "Situation: Ihr Betrieb verhandelt mit einem Systemhaus über 25 Notebooks. Das Systemhaus fordert 1.100 Euro pro Gerät, Ihr Budget erlaubt 1.000 Euro. a) Nennen Sie die vier Grundsätze des Harvard-Konzepts. b) Zeigen Sie an diesem Beispiel den Unterschied zwischen Position und Interesse. c) Nennen Sie zwei Optionen zum beiderseitigen Vorteil. d) Das Projektteam, das die Geräte ausrollen soll, streitet über Zuständigkeiten – welche Tuckman-Phase liegt vor und was sollte die Teamleitung tun?",
            },
            {
              type: "solution",
              value:
                "a) Menschen und Probleme trennen; Interessen statt Positionen verhandeln; Optionen zum beiderseitigen Vorteil entwickeln; auf objektiven Kriterien bestehen.\nb) Position: „maximal 1.000 Euro pro Gerät“. Interesse dahinter: Budgetrahmen einhalten und funktionsfähige Arbeitsplätze bekommen. Position des Verkäufers: 1.100 Euro. Interesse: Umsatz/Marge sichern, Kunden langfristig binden.\nc) Z. B.: Preis 1.050 Euro, dafür kostenlose Vor-Ort-Garantie für 3 Jahre (Verkäufer bindet Kunden, Käufer spart Servicekosten). Oder: Listenpreis akzeptieren, aber Docking-Stations und Rollout-Unterstützung inklusive. Oder Staffelpreis bei Abnahme weiterer Geräte im Folgejahr.\nd) Storming (Konfliktphase). Die Teamleitung sollte den Konflikt moderieren, Rollen und Zuständigkeiten klar verteilen (z. B. RACI) und gemeinsame Regeln erarbeiten lassen – nicht die Konflikte unterdrücken, denn sie gehören zur Teamentwicklung.",
            },
            {
              type: "links",
              value: [
                ["Wikipedia: Teambildung (Tuckman)", "https://de.wikipedia.org/wiki/Teambildung"],
                ["Wikipedia: Harvard-Konzept", "https://de.wikipedia.org/wiki/Harvard-Konzept"],
                [
                  "FI-Prüfungsvorbereitung: Teamphasen",
                  "https://fachinformatikerpruefungsvorbereitung.de/abschlusspr%C3%BCfungteil1/projektmanagement/phasenderteamentwicklung/",
                ],
                [
                  "FI-Prüfungsvorbereitung: Harvard-Konzept",
                  "https://fachinformatikerpruefungsvorbereitung.de/abschlusspr%C3%BCfungteil1/wirtschaft/harvardkonzept/",
                ],
              ],
            },
          ],
          quiz: [
            {
              id: "imp_prap1-team-1_0",
              q: "Ein neues Projektteam streitet heftig über Zuständigkeiten. Welche Tuckman-Phase?",
              options: ["Forming", "Storming", "Norming", "Performing"],
              correct: 1,
              explain:
                "Konflikte um Rollen und Macht kennzeichnen die Storming-Phase. Sie ist normal und muss moderiert, nicht unterdrückt werden.",
            },
            {
              id: "imp_prap1-team-1_1",
              q: "Was fordert das Harvard-Konzept statt des Feilschens um Positionen?",
              options: [
                "Maximalforderungen stellen",
                "Interessen hinter den Positionen verhandeln",
                "Immer nachgeben, um die Beziehung zu retten",
                "Verhandlungen schriftlich führen",
              ],
              correct: 1,
              explain:
                "Kern des Harvard-Konzepts: Interessen statt Positionen. Hinter „10 % Rabatt“ steht z. B. das Interesse „Budget einhalten“ – das lässt sich auch anders erfüllen.",
            },
            {
              id: "imp_prap1-team-1_2",
              q: "Was bezeichnet BATNA?",
              options: [
                "Die niedrigste akzeptable Zahl",
                "Die beste Alternative bei Scheitern der Verhandlung",
                "Eine Eskalationsstufe im Konfliktmanagement",
                "Die Budgetobergrenze des Einkaufs",
              ],
              correct: 1,
              explain:
                "Best Alternative To a Negotiated Agreement – wer eine starke Alternative hat, kann gelassener verhandeln und weiß, wann Abbruch besser ist.",
            },
            {
              id: "imp_prap1-team-1_3",
              q: "In welcher Phase kann die Führungskraft am stärksten delegieren?",
              options: ["Forming", "Storming", "Norming", "Performing"],
              correct: 3,
              explain:
                "In der Performing-Phase arbeitet das Team selbstorganisiert und leistungsfähig – Führung beschränkt sich auf Ausnahmen und Rahmenbedingungen.",
            },
          ],
        },
      ],
    },
    {
      id: "ap1-rech",
      title: "Rechenaufgaben üben",
      lessons: [
        {
          id: "ap1-r-1",
          title: "Typische Rechenaufgaben AP1",
          content: [
            { type: "heading", value: "Subnetting" },
            {
              type: "text",
              value:
                "Gegeben: 192.168.10.0/24, 4 Subnetze benötigt. Lösung: /26 (2 zusätzliche Bits = 4 Subnetze). Hosts pro Subnetz: 2^6−2 = 62. Subnetze: .0-.63, .64-.127, .128-.191, .192-.255.",
            },
            { type: "heading", value: "Energiekosten" },
            {
              type: "text",
              value:
                "5 PCs à 200W + 2 Monitore à 40W + 1 Switch 30W, 8h/Tag, 250 Tage/Jahr, 0,32€/kWh. Leistung: 5×200+2×40+30 = 1.110W = 1,11kW. Energie: 1,11×8×250 = 2.220 kWh. Kosten: 2.220×0,32 = 710,40€/Jahr.",
            },
            { type: "heading", value: "Bezugspreis" },
            {
              type: "text",
              value:
                "LP 2.400€, 15% Rabatt, 3% Skonto, 45€ Fracht. ZEP: 2.400−360 = 2.040€. BEP: 2.040−61,20 = 1.978,80€. Bezugspreis: 1.978,80+45 = 2.023,80€.",
            },
            { type: "heading", value: "Verfügbarkeit" },
            {
              type: "text",
              value:
                "Verfügbarkeit = (Gesamtzeit − Ausfallzeit) / Gesamtzeit × 100%. Beispiel: 8.760h/Jahr, 4,38h Ausfall → (8760−4,38)/8760 = 99,95%. Reihenschaltung: V_ges = V1 × V2 × V3. Parallelschaltung: V_ges = 1 − (1−V1)(1−V2).",
            },
            { type: "heading", value: "Die Rechenaufgaben-Landkarte der AP1" },
            {
              type: "text",
              value:
                "Fast jede AP1 enthält Rechenaufgaben aus denselben sechs Familien – wer die Rezepte kennt, holt hier die schnellsten Punkte: (1) Subnetting: Blockgrößen-Methode, Hosts = 2^n − 2, Netz-/Broadcast-/Gateway-Adressen. (2) Speicher- und Datenmengen: Bild = Breite × Höhe × Farbtiefe ÷ 8, Einheitenkette Bit→Byte→KB→MB, GiB vs. GB. (3) Übertragungsdauer: Datenmenge ÷ Rate, vorher Einheiten angleichen (÷ 8!). (4) Strom und Kosten: P = U × I, Energie = kW × h × Tage × Preis. (5) Abschreibung: linear = Anschaffung ÷ Nutzungsdauer, unterjährig monatsgenau. (6) Angebotsvergleich: Bezugskalkulation (Rabatt → Skonto → Bezugskosten) und Nutzwertanalyse. Alle Formeln stehen in der Formelsammlung dieser Plattform – rechne jede Familie mindestens dreimal, bis der Weg automatisch abläuft.",
            },
            {
              type: "note",
              value:
                "Häufigste Punktekiller: Einheiten nicht angeglichen (MBit vs. MByte), „−2“ beim Subnetting vergessen, Skonto auf den falschen Zwischenwert bezogen, Rechenweg nicht notiert.",
            },
            { type: "heading", value: "Übungsaufgabe: Gemischter Dreierpack" },
            {
              type: "text",
              value:
                "a) Wie lange dauert die Übertragung von 1,5 GB über 50 MBit/s (real 80 % Durchsatz)? b) Ein 24-Port-Switch nimmt 30 W auf und läuft durchgehend – Jahresstromkosten bei 0,32 €/kWh? c) Ein /27-Netz – wie viele nutzbare Hosts?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: a) 50 MBit/s × 0,8 = 40 MBit/s = 5 MB/s; 1.500 MB ÷ 5 = 300 s = 5 Minuten. b) 0,03 kW × 8.760 h = 262,8 kWh × 0,32 € = 84,10 €/Jahr. c) /27 → 5 Hostbits → 2⁵ − 2 = 30 Hosts. Jede Familie: Formel hinschreiben, Einheiten notieren, dann einsetzen.",
            },
          ],
          quiz: [
            {
              id: "imp_ap1-r-1_0",
              q: "192.168.10.0/26: Hosts pro Subnetz?",
              options: ["62", "254", "126", "30"],
              correct: 0,
              explain: "2^6−2 = 62.",
            },
            {
              id: "imp_ap1-r-1_1",
              q: "3 Systeme in Reihe, je 99%: Gesamtverfügbarkeit?",
              options: ["99,99%", "97,03%", "99,97%", "99,00%"],
              correct: 1,
              explain: "0,99³ = 0,9703 = 97,03%.",
            },
            {
              id: "imp_ap1-r-1_2",
              q: "Verfügbarkeit = ?",
              options: [
                "Die absolute Uptime, gemessen in Betriebsstunden",
                "Die Übertragungsgeschwindigkeit des Systems in Mbit/s",
                "(Gesamtzeit - Ausfallzeit) / Gesamtzeit × 100 %",
                "Die Summe aus MTBF und MTTR in Stunden",
              ],
              correct: 2,
              explain: "Verfügbarkeit in Prozent: (Gesamt - Ausfall) / Gesamt × 100 %.",
            },
            {
              id: "imp_ap1-r-1_3",
              q: "99,9% Verfügbarkeit: Max. Ausfall/Jahr?",
              options: ["4,38h", "52 Min", "87,6h", "8,76h"],
              correct: 3,
              explain: "8760h x 0,001 = 8,76 Stunden Ausfall pro Jahr.",
            },
            {
              id: "imp_ap1-r-1_4",
              q: "2 Systeme in Reihe je 99%: Gesamt?",
              options: ["98,01%", "99,99%", "99%", "97%"],
              correct: 0,
              explain: "0,99 x 0,99 = 0,9801 = 98,01%.",
            },
            {
              id: "imp_ap1-r-1_5",
              q: "Parallelschaltung erhöht?",
              options: ["Verfügbarkeit", "Nichts", "Kosten nur", "Latenz"],
              correct: 0,
              explain: "Parallel: V = 1 - (1-V1)(1-V2) – Verfügbarkeit steigt.",
            },
            {
              id: "imp_ap1-r-1_6",
              q: "Parallel: 2x 99% Verfügbarkeit?",
              options: ["99 %", "1 − (1 − 0,99)² = 99,99 %", "98 %", "99,90 %"],
              correct: 1,
              explain: "Parallel: 1 − (1 − 0,99) × (1 − 0,99) = 1 − 0,0001 = 99,99 %.",
            },
            {
              id: "imp_ap1-r-1_7",
              q: "Energiekosten: Was braucht man?",
              options: [
                "Nur Spannung",
                "Leistung (W) x Zeit (h) x Preis (EUR/kWh)",
                "Nur Leistung",
                "Nur Strom",
              ],
              correct: 1,
              explain: "W = P x t, dann x Preis/kWh.",
            },
            {
              id: "imp_ap1-r-1_8",
              q: "Subnetting: Schrittweite?",
              options: [
                "Immer 64",
                "Netzwerkadresse",
                "Immer 128",
                "256 minus Wert des relevanten Oktetts der Subnetzmaske",
              ],
              correct: 3,
              explain:
                "Schrittweite = 256 − Wert des relevanten (interessanten) Oktetts der Maske.",
            },
            {
              id: "imp_ap1-r-1_9",
              q: "Netzplan: Mindestprojektdauer?",
              options: [
                "Egal",
                "Längster Pfad (kritischer Pfad)",
                "Durchschnitt",
                "Kürzester Pfad",
              ],
              correct: 1,
              explain: "Kritischer Pfad = längste Kette = Mindestdauer des Projekts.",
            },
            {
              id: "imp_ap1-r-1_10",
              q: "Ein Netto-Preis von 1.200 € entspricht brutto (19 % USt) …",
              options: ["1.219 €", "1.428 €", "1.380 €", "1.008 €"],
              correct: 1,
              explain: "1.200 × 1,19 = 1.428 €. Rückrechnung: brutto / 1,19 = netto.",
            },
            {
              id: "imp_ap1-r-1_11",
              q: "Listenpreis 2.000 €, 10 % Rabatt, dann 2 % Skonto. Zahlbetrag?",
              options: ["1.764 €", "1.800 €", "1.760 €", "1.960 €"],
              correct: 0,
              explain:
                "Reihenfolge beachten: 2.000 × 0,90 = 1.800; 1.800 × 0,98 = 1.764 €. Skonto wird auf den rabattierten Preis gewährt.",
            },
            {
              id: "imp_ap1-r-1_12",
              q: "Wie viel GB (Basis 1.000) sind 2 GiB (Basis 1.024) ungefähr?",
              options: ["exakt 2,00 GB", "ca. 4,00 GB", "ca. 2,15 GB", "ca. 1,86 GB"],
              correct: 2,
              explain:
                "2 × 1.024³ Byte = 2.147.483.648 Byte ≈ 2,15 × 10⁹ Byte. Hersteller rechnen dezimal, Betriebssysteme oft binär – daher die 'fehlenden' GB.",
            },
            {
              id: "imp_ap1-r-1_13",
              q: "Eine Tonerkartusche kostet 80 € und reicht für 2.000 Seiten. Tonerkosten pro Seite?",
              options: ["40 Cent", "4 Cent", "0,4 Cent", "8 Cent"],
              correct: 1,
              explain:
                "80 € / 2.000 Seiten = 0,04 €/Seite. Für echte Seitenkosten kämen Papier, Wartung und Abschreibung dazu (TCO-Gedanke).",
            },
            {
              id: "imp_ap1-r-1_14",
              q: "Unkomprimierter Speicherbedarf eines Bildes mit 1.920 × 1.080 Pixeln bei 24 Bit Farbtiefe?",
              options: ["ca. 2,1 MB", "ca. 6,2 MB", "ca. 0,6 MB", "ca. 49,8 MB"],
              correct: 1,
              explain:
                "1.920 × 1.080 = 2.073.600 Pixel × 3 Byte = 6.220.800 Byte ≈ 6,2 MB. Standard-Rechenweg: Pixel × Farbtiefe in Byte.",
            },
            {
              id: "imp_ap1-r-1_15",
              q: "Ein Datenbestand wächst jährlich um 20 %. 10 TB heute – wie viel nach 2 Jahren?",
              options: ["20,0 TB", "14,0 TB", "12,0 TB", "14,4 TB"],
              correct: 3,
              explain:
                "10 × 1,2 × 1,2 = 14,4 TB. Wachstum wirkt multiplikativ (Zinseszins-Prinzip), nicht additiv.",
            },
            {
              id: "imp_ap1-r-1_16",
              q: "Wie viele 4-TB-Platten brauchst du für 30 TB netto in RAID 5?",
              options: ["9", "10", "8", "7"],
              correct: 0,
              explain:
                "RAID 5 nutzt (n−1) Platten: gesucht n mit (n−1)×4 ≥ 30 → n−1 ≥ 7,5 → n = 9 (ergibt 32 TB netto).",
            },
            {
              id: "imp_ap1-r-1_17",
              q: "Ein Techniker kostet den Betrieb 52.000 €/Jahr und leistet 1.600 verrechenbare Stunden. Mindest-Stundensatz zur Kostendeckung?",
              options: ["65,00 €", "20,60 €", "32,50 €", "52,00 €"],
              correct: 2,
              explain:
                "52.000 / 1.600 = 32,50 € – ohne Gemeinkosten und Gewinn; der Marktpreis liegt entsprechend höher.",
            },
            {
              id: "imp_ap1-r-1_18",
              q: "Eine Videokonferenz benötigt 4 Mbit/s je Teilnehmer. Wie viele Teilnehmer verkraftet ein 100-Mbit/s-Anschluss theoretisch?",
              options: ["50", "25", "100", "4"],
              correct: 1,
              explain:
                "100 / 4 = 25. In der Praxis Reserve einplanen (anderer Verkehr, Overhead) – auch das ist einen Antwortsatz wert.",
            },
            {
              id: "imp_ap1-r-1_19",
              q: "Ein Server kostet 6.000 € und wird linear über 5 Jahre abgeschrieben. Restbuchwert nach 3 Jahren?",
              options: ["3.600 €", "6.000 €", "2.400 €", "1.200 €"],
              correct: 2,
              explain: "AfA: 6.000/5 = 1.200 €/Jahr. Nach 3 Jahren: 6.000 − 3.600 = 2.400 €.",
            },
          ],
        },
      ],
    },
    {
      id: "ap1-üb",
      title: "Übungsaufgaben (offen, mit Musterlösung)",
      lessons: [
        {
          id: "ap1-ub-1",
          title: "Übungsaufgaben Netzwerk (mit Musterlösung)",
          content: [
            {
              type: "note",
              value:
                "Diese Aufgaben sind im offenen IHK-Stil. Versuch sie ERST selbst zu lösen, dann die Musterlösung lesen. In der echten Prüfung gibt es Teilpunkte für den Rechenweg!",
            },
            { type: "heading", value: "Aufgabe 1: VLSM-Planung" },
            {
              type: "text",
              value:
                "Ein Unternehmen hat das Netz 192.168.50.0/24. Es werden 4 Abteilungen benötigt: Vertrieb (50 PCs), Technik (25 PCs), Lager (10 PCs), Server-Link (2 Geräte, Point-to-Point). Plane die Subnetze mit VLSM. Gib für jedes Subnetz an: Netzadresse, Präfix, nutzbarer Host-Bereich, Broadcast.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (größtes Subnetz zuerst!):\n\nVertrieb (50 PCs): braucht 64 Adressen → /26\n  Netz: 192.168.50.0/26\n  Hosts: .1 - .62  | Broadcast: .63\n\nTechnik (25 PCs): braucht 32 Adressen → /27\n  Netz: 192.168.50.64/27\n  Hosts: .65 - .94  | Broadcast: .95\n\nLager (10 PCs): braucht 16 Adressen → /28\n  Netz: 192.168.50.96/28\n  Hosts: .97 - .110  | Broadcast: .111\n\nServer-Link (2): braucht 4 Adressen → /30\n  Netz: 192.168.50.112/30\n  Hosts: .113 - .114  | Broadcast: .115\n\nRest .116-.255 frei für Erweiterung.",
            },
            { type: "heading", value: "Aufgabe 2: Subnetz-Analyse" },
            {
              type: "text",
              value:
                "Gegeben ist die IP 172.16.40.130/26. Bestimme: a) Netzadresse, b) Broadcast-Adresse, c) nutzbarer Host-Bereich, d) Anzahl nutzbarer Hosts.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n/26 = 255.255.255.192, Schrittweite 256-192 = 64\nSubnetz-Grenzen im 4. Oktett: 0, 64, 128, 192\n.130 liegt im Bereich 128-191\n\na) Netzadresse:    172.16.40.128\nb) Broadcast:      172.16.40.191\nc) Host-Bereich:   172.16.40.129 - 172.16.40.190\nd) Nutzbare Hosts: 2^6 - 2 = 62",
            },
            { type: "heading", value: "Aufgabe 3: Statisches Routing" },
            {
              type: "text",
              value:
                "Router R1 (192.168.1.1) soll das Netz 192.168.2.0/24 erreichen, das hinter Router R2 (192.168.1.2) liegt. Formuliere den statischen Routing-Eintrag (Cisco IOS) und erkläre, wann man statisches statt dynamisches Routing wählt.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nip route 192.168.2.0 255.255.255.0 192.168.1.2\n(Zielnetz | Maske | Next-Hop)\n\nStatisch wählen wenn: kleines/stabiles Netz, hohe\nSicherheit (keine Routing-Updates), volle Kontrolle,\nwenig CPU-Last. Bei großen/dynamischen Netzen mit\nredundanten Pfaden besser OSPF (automatisches Failover).",
            },
            {
              type: "note",
              value:
                "Prüfungstipp: Bei Subnetting-Aufgaben IMMER die Schrittweite (256 - Maskenwert) zuerst bestimmen. Dann sind Netzadresse und Broadcast schnell ablesbar.",
            },
          ],
          quiz: [
            {
              id: "imp_ap1-ub-1_0",
              q: "VLSM: Größtes Subnetz zuerst – warum?",
              options: [
                "Sonst überlappen die Bereiche / Verschnitt",
                "Schneller",
                "Vorschrift",
                "Zufall",
              ],
              correct: 0,
              explain: "Von groß nach klein verhindert Adress-Überlappung und Verschnitt.",
            },
            {
              id: "imp_ap1-ub-1_1",
              q: "/29 Netz: nutzbare Hosts?",
              options: ["6", "14", "8", "30"],
              correct: 0,
              explain: "2^3-2 = 6 Hosts (z.B. für Point-to-Multipoint).",
            },
            {
              id: "imp_ap1-ub-1_2",
              q: "Broadcast von 192.168.1.64/26?",
              options: ["192.168.1.255", "192.168.1.63", "192.168.1.127", "192.168.1.128"],
              correct: 2,
              explain: "Bereich .64-.127, Broadcast = .127.",
            },
            {
              id: "imp_ap1-ub-1_3",
              q: "Wie viele /27 passen in ein /24?",
              options: ["4", "8", "16", "32"],
              correct: 1,
              explain: "2^(27-24) = 8 Subnetze.",
            },
            {
              id: "imp_ap1-ub-1_4",
              q: "Default Gateway Funktion?",
              options: ["DHCP", "DNS", "Übergang in andere Netze (Router-IP)", "Firewall"],
              correct: 2,
              explain: "Gateway leitet Pakete in fremde Subnetze.",
            },
            {
              id: "imp_ap1-ub-1_5",
              q: "Welche IP ist privat?",
              options: ["203.0.113.1", "172.16.5.1", "8.8.8.8", "1.1.1.1"],
              correct: 1,
              explain: "172.16.0.0/12 ist privat (RFC 1918).",
            },
            {
              id: "imp_ap1-ub-1_6",
              q: "Welchen Zweck erfüllen VLANs im LAN?",
              options: [
                "Mehr Speed",
                "Verschlüsselung",
                "Broadcast-Domänen logisch trennen",
                "Routing",
              ],
              correct: 2,
              explain: "VLANs segmentieren ein physisches Netz logisch.",
            },
            {
              id: "imp_ap1-ub-1_7",
              q: "Subnetzmaske /28 dezimal?",
              options: ["255.255.255.240", "255.255.255.224", "255.255.255.248", "255.255.255.192"],
              correct: 0,
              explain: "/28 = 255.255.255.240 (4 Hostbits).",
            },
            {
              id: "imp_ap1-ub-1_8",
              q: "Anzahl Subnetze bei /24 → /28?",
              options: ["4", "8", "16", "32"],
              correct: 2,
              explain: "4 zusätzliche Bits = 2^4 = 16 Subnetze.",
            },
            {
              id: "imp_ap1-ub-1_9",
              q: "Erste nutzbare Host-IP in 10.0.0.0/24?",
              options: ["10.0.0.0", "10.0.0.255", "10.0.0.1", "10.0.0.254"],
              correct: 2,
              explain: "Netzadresse .0, erste Host = .1.",
            },
            {
              id: "imp_ap1-ub-1_10",
              q: "Welche Aufgabe hat ARP?",
              options: [
                "Es ermittelt zur bekannten IP-Adresse die MAC-Adresse im lokalen Netz",
                "Es verschlüsselt die Pakete auf dem Weg durch das lokale Netzwerk",
                "Es vergibt automatisch IP-Adressen an neue Geräte im Netz (wie DHCP)",
                "Es löst Domainnamen wie www.example.de in IP-Adressen auf (wie DNS)",
              ],
              correct: 0,
              explain:
                "Address Resolution Protocol: Ohne MAC-Adresse kann der Frame im LAN nicht zugestellt werden.",
            },
            {
              id: "imp_ap1-ub-1_11",
              q: "Wofür steht die DHCP-Abfolge DORA?",
              options: [
                "Detect, Order, Receive, Answer",
                "Discover, Offer, Request, Acknowledge",
                "Domain, Object, Resource, Address",
                "Download, Open, Run, Apply",
              ],
              correct: 1,
              explain:
                "Der Client sucht (Discover), Server bieten an (Offer), der Client wählt (Request), der Server bestätigt (ACK).",
            },
            {
              id: "imp_ap1-ub-1_12",
              q: "Welcher DNS-Recordtyp verweist auf eine IPv6-Adresse?",
              options: ["MX", "AAAA", "CNAME", "A"],
              correct: 1,
              explain:
                "A = IPv4, AAAA = IPv6, MX = Mailserver, CNAME = Alias auf einen anderen Namen.",
            },
            {
              id: "imp_ap1-ub-1_13",
              q: "Welcher Port gehört standardmäßig zu HTTPS?",
              options: ["443", "25", "80", "3389"],
              correct: 0,
              explain:
                "80 = HTTP, 25 = SMTP, 3389 = RDP. Die Standardports sind verlässliche AP-Punkte.",
            },
            {
              id: "imp_ap1-ub-1_14",
              q: "Wozu dient das TTL-Feld im IP-Header?",
              options: [
                "Es begrenzt die Anzahl der Router-Hops und verhindert endlos kreisende Pakete",
                "Es speichert die MAC-Adresse des Absenders für den Rückweg des Pakets",
                "Es gibt die Gesamtgröße des Pakets einschließlich Header in Byte an",
                "Es misst die tatsächliche Übertragungszeit des Pakets in Sekunden vom Sender zum Ziel",
              ],
              correct: 0,
              explain:
                "Jeder Router verringert die TTL um 1; bei 0 wird das Paket verworfen – genau das nutzt tracert zur Weganzeige.",
            },
            {
              id: "imp_ap1-ub-1_15",
              q: "Was leistet NAT am Internetrouter?",
              options: [
                "Es übersetzt private interne Adressen auf die öffentliche Adresse des Anschlusses",
                "Es blockiert Werbung und unerwünschte Inhalte, bevor sie die Clients erreichen",
                "Es verschlüsselt den gesamten Datenverkehr zwischen LAN und Internet wie ein VPN",
                "Es verteilt die WLAN-Kanäle automatisch, um Funkstörungen zu vermeiden",
              ],
              correct: 0,
              explain:
                "So teilen sich viele interne Geräte eine öffentliche IPv4-Adresse – Antworten ordnet die NAT-Tabelle zu.",
            },
            {
              id: "imp_ap1-ub-1_16",
              q: "Worin unterscheidet sich ein Switch von einem Hub?",
              options: [
                "Der Hub überträgt Daten schneller, weil er ohne Adressauswertung direkt weiterleitet",
                "Der Switch arbeitet ausschließlich drahtlos über WLAN, der Hub nur kabelgebunden",
                "Der Switch leitet gezielt an den Ziel-Port weiter, der Hub wiederholt an alle Ports",
                "Es gibt keinen Unterschied; beide Geräte verteilen Frames nach demselben Prinzip",
              ],
              correct: 2,
              explain:
                "Der Switch lernt MAC-Adressen je Port und beendet die gemeinsame Kollisionsdomäne des Hubs.",
            },
            {
              id: "imp_ap1-ub-1_17",
              q: "Wie viele nutzbare Hostadressen bietet ein /16-Netz?",
              options: ["254", "65.536", "16.382", "65.534"],
              correct: 3,
              explain: "2¹⁶ − 2 = 65.534 (Netz- und Broadcast-Adresse abziehen).",
            },
            {
              id: "imp_ap1-ub-1_18",
              q: "Eine MAC-Adresse ist … lang.",
              options: ["128 Bit", "32 Bit", "48 Bit (6 Byte)", "8 Bit"],
              correct: 2,
              explain:
                "Notiert als sechs Hex-Paare (z. B. 00-1A-2B-3C-4D-5E); die ersten drei Byte kennzeichnen den Hersteller (OUI).",
            },
            {
              id: "imp_ap1-ub-1_19",
              q: "Welcher Befehl zeigt unter Windows die ARP-Tabelle?",
              options: ["ping -arp", "arp -a", "ipconfig /arp", "netsh show mac"],
              correct: 1,
              explain:
                "arp -a listet die aktuell aufgelösten IP-MAC-Zuordnungen – nützlich bei Diagnose doppelter IPs.",
            },
          ],
        },
        {
          id: "ap1-ub-2",
          title: "Übungsaufgaben Wirtschaft & Sicherheit (mit Musterlösung)",
          content: [
            { type: "heading", value: "Aufgabe 1: Angebotsvergleich mit Nutzwertanalyse" },
            {
              type: "text",
              value:
                "Drei Laptop-Angebote sollen bewertet werden. Kriterien: Preis (Gewichtung 40%), Leistung (35%), Garantie (25%). Bewertung je 1-10. Angebot A: Preis 8, Leistung 6, Garantie 7. Angebot B: Preis 6, Leistung 9, Garantie 8. Welches Angebot gewinnt?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (Nutzwert = Σ Note × Gewichtung):\n\nAngebot A: 8×0,40 + 6×0,35 + 7×0,25\n         = 3,20 + 2,10 + 1,75 = 7,05\n\nAngebot B: 6×0,40 + 9×0,35 + 8×0,25\n         = 2,40 + 3,15 + 2,00 = 7,55\n\n→ Angebot B gewinnt (7,55 > 7,05)\nTrotz höherem Preis durch bessere Leistung/Garantie.",
            },
            { type: "heading", value: "Aufgabe 2: Handelskalkulation" },
            {
              type: "text",
              value:
                "Listeneinkaufspreis 1.500€, 20% Rabatt, 2% Skonto, 50€ Bezugskosten. Berechne den Bezugspreis (Einstandspreis).",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nListeneinkaufspreis:     1.500,00€\n- 20% Rabatt (300):      1.200,00€  (Zieleinkaufspreis)\n- 2% Skonto (24):        1.176,00€  (Bareinkaufspreis)\n+ Bezugskosten:             50,00€\n= Bezugspreis:           1.226,00€",
            },
            { type: "heading", value: "Aufgabe 3: RAID-Auswahl begründen" },
            {
              type: "text",
              value:
                "Ein Kunde will 4 Festplatten à 4TB für einen Datei-Server. Ihm sind Ausfallsicherheit UND möglichst viel Speicher wichtig. Empfehle ein RAID-Level mit Begründung und nenne die nutzbare Kapazität.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nEmpfehlung: RAID 5\n\nBegründung: RAID 5 bietet Ausfallsicherheit\n(1 Platte darf ausfallen, Parität verteilt) bei\ngutem Speichernutzungsgrad.\n\nNutzbare Kapazität: (n-1) × Größe = (4-1) × 4TB = 12 TB\nVon 16TB brutto → 12 TB netto (4TB für Parität).\n\nAlternative RAID 6 (2 Platten dürfen ausfallen,\naber nur 8TB nutzbar) wenn höhere Sicherheit nötig.",
            },
            { type: "heading", value: "Aufgabe 4: Schutzbedarfsanalyse" },
            {
              type: "text",
              value:
                "Ordne den Schutzbedarf (normal/hoch/sehr hoch) zu und begründe: a) Öffentliche Pressemitteilung, b) Gehaltsdaten der Mitarbeiter, c) Steuerungsdaten eines Krankenhaus-Beatmungsgeräts.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Pressemitteilung → NORMAL\n   (öffentlich, kein Schaden bei Bekanntwerden)\n\nb) Gehaltsdaten → HOCH\n   (personenbezogen, DSGVO, erheblicher Schaden\n   bei Verletzung der Vertraulichkeit)\n\nc) Beatmungsgerät-Steuerung → SEHR HOCH\n   (Ausfall/Manipulation gefährdet Menschenleben,\n   existenzielle/lebensbedrohliche Auswirkung)",
            },
            {
              type: "note",
              value:
                "Bei Begründungsaufgaben: Immer die Auswirkung nennen (Was passiert wenn...?). Das gibt die Punkte, nicht die bloße Zuordnung.",
            },
          ],
          quiz: [
            {
              id: "imp_ap1-ub-2_0",
              q: "Nutzwertanalyse: Was zuerst?",
              options: [
                "Preis prüfen",
                "Anbieter wählen",
                "Kriterien gewichten (Summe 100%)",
                "Bewerten",
              ],
              correct: 2,
              explain: "Erst Kriterien festlegen und gewichten.",
            },
            {
              id: "imp_ap1-ub-2_1",
              q: "Skonto 3% bei 2.000 €?",
              options: ["60 €", "20€", "200€", "600€"],
              correct: 0,
              explain: "2.000 × 0,03 = 60 €.",
            },
            {
              id: "imp_ap1-ub-2_2",
              q: "RAID 5 mit 4 × 4 TB: nutzbar?",
              options: ["4TB", "16TB", "12 TB", "8TB"],
              correct: 2,
              explain: "(n-1)×Größe = 3×4 = 12 TB.",
            },
            {
              id: "imp_ap1-ub-2_3",
              q: "Schutzbedarf 'hoch' bedeutet?",
              options: [
                "Kein Schutz",
                "Egal",
                "Nur intern",
                "Erhebliche (beträchtliche) Schäden möglich",
              ],
              correct: 3,
              explain: "Drei Stufen: normal, hoch, sehr hoch.",
            },
            {
              id: "imp_ap1-ub-2_4",
              q: "AfA linear bei 3.000 €, 3 Jahre?",
              options: ["1.000 €", "1.500€", "3.000 €", "500€"],
              correct: 0,
              explain: "3.000/3 = 1.000 € pro Jahr.",
            },
            {
              id: "imp_ap1-ub-2_5",
              q: "Verschlüsselung at rest?",
              options: ["Gespeicherte Daten (Festplatte)", "Nur RAM", "Übertragung", "Nur Cloud"],
              correct: 0,
              explain: "At rest = ruhende/gespeicherte Daten.",
            },
            {
              id: "imp_ap1-ub-2_6",
              q: "Deckungsbeitrag = ?",
              options: ["Gewinn", "Umsatz", "Erlös - variable Kosten", "Fixkosten"],
              correct: 2,
              explain: "DB = Erlös minus variable Kosten.",
            },
            {
              id: "imp_ap1-ub-2_7",
              q: "3 Schutzbedarfsstufen BSI?",
              options: ["gering/mittel", "1-10", "normal/hoch/sehr hoch", "A/B/C"],
              correct: 2,
              explain: "normal, hoch, sehr hoch.",
            },
            {
              id: "imp_ap1-ub-2_8",
              q: "Backup 3-2-1-Regel?",
              options: [
                "3 Kopien, 2 Medien, 1 extern",
                "1 Backup täglich",
                "3 Server",
                "3 Backups",
              ],
              correct: 0,
              explain: "3 Kopien auf 2 Medientypen, 1 außer Haus.",
            },
            {
              id: "imp_ap1-ub-2_9",
              q: "Symmetrisch vs. asymmetrisch: Geschwindigkeit?",
              options: ["Symmetrisch schneller", "Egal", "Asymmetrisch schneller", "Gleich"],
              correct: 0,
              explain: "Symmetrisch (AES) ist deutlich schneller als asymmetrisch (RSA).",
            },
            {
              id: "imp_ap1-ub-2_10",
              q: "Worin unterscheiden sich fixe und variable Kosten?",
              options: [
                "Es gibt keinen Unterschied, beide Begriffe bezeichnen dieselben Kostenarten",
                "Fixe Kosten fallen unabhängig von der Ausbringungsmenge an, variable steigen mit ihr",
                "Variable Kosten sind nach dem Handelsrecht in Deutschland unzulässig",
                "Fixe Kosten sind in jedem Betrieb stets höher als die variablen Kosten",
              ],
              correct: 1,
              explain:
                "Miete und Gehälter = fix; Material und Stromverbrauch je Stück = variabel – Grundlage jeder Break-even-Rechnung.",
            },
            {
              id: "imp_ap1-ub-2_11",
              q: "Break-even-Menge berechnet sich als …",
              options: [
                "Fixkosten / (Verkaufspreis − variable Stückkosten)",
                "variable Stückkosten / Fixkosten je Periode",
                "Gesamtumsatz / erzielter Gewinn der Periode",
                "Fixkosten × Verkaufspreis pro Stück",
              ],
              correct: 0,
              explain:
                "Der Nenner ist der Deckungsbeitrag je Stück – ab dieser Menge sind die Fixkosten gedeckt.",
            },
            {
              id: "imp_ap1-ub-2_12",
              q: "Was bedeutet Liquidität?",
              options: [
                "Die Menge der auf Lager verfügbaren Waren und Rohstoffe",
                "Die Fähigkeit, fällige Zahlungsverpflichtungen fristgerecht zu erfüllen",
                "Der nach Steuern verbleibende Gewinn eines Geschäftsjahres",
                "Die Anzahl der fest angestellten Mitarbeiter im Unternehmen",
              ],
              correct: 1,
              explain:
                "Ein profitables Unternehmen kann trotzdem zahlungsunfähig werden – Liquiditätsplanung ist überlebenswichtig.",
            },
            {
              id: "imp_ap1-ub-2_13",
              q: "Degressive Abschreibung bedeutet …",
              options: [
                "jedes Jahr derselbe gleichbleibende Betrag über die gesamte Nutzungsdauer",
                "der vollständige Verzicht auf Abschreibung bis zum Verkauf des Anlageguts",
                "steigende Jahresbeträge: anfangs niedrige, später höhere Abschreibung",
                "fallende Jahresbeträge: anfangs hohe, später niedrigere Abschreibung",
              ],
              correct: 3,
              explain:
                "Linear = konstant, degressiv = prozentual vom Restbuchwert. IT verliert anfangs schnell an Wert – das bildet degressiv ab.",
            },
            {
              id: "imp_ap1-ub-2_14",
              q: "Art. 15 DSGVO gibt betroffenen Personen das Recht auf …",
              options: [
                "Schadenersatz in jedem Fall, auch ohne Nachweis",
                "Löschung sämtlicher Daten des Unternehmens",
                "kostenloses Hosting der eigenen Daten beim Anbieter",
                "Auskunft über die zu ihrer Person gespeicherten Daten",
              ],
              correct: 3,
              explain:
                "Dazu kommen u. a. Berichtigung (Art. 16), Löschung (Art. 17) und Datenübertragbarkeit (Art. 20).",
            },
            {
              id: "imp_ap1-ub-2_15",
              q: "Wann ist ein Auftragsverarbeitungsvertrag (AVV) nötig?",
              options: [
                "Nur bei Behörden und anderen öffentlichen Stellen des Bundes",
                "Nie – die DSGVO untersagt die Datenverarbeitung durch externe Dienstleister",
                "Bei jedem Kauf von Hardware, unabhängig vom Umgang mit Daten",
                "Wenn ein Dienstleister personenbezogene Daten im Auftrag verarbeitet (z. B. Cloud, Hosting, Wartung mit Datenzugriff)",
              ],
              correct: 3,
              explain:
                "Art. 28 DSGVO: Der Verantwortliche bleibt in der Pflicht und regelt Weisungen, TOMs und Subunternehmer vertraglich.",
            },
            {
              id: "imp_ap1-ub-2_16",
              q: "Welches Beispiel schützt Daten 'in transit'?",
              options: [
                "Ein verschlossener Serverschrank",
                "BitLocker auf der lokalen SSD",
                "TLS-Verschlüsselung einer HTTPS-Verbindung",
                "Tägliche Backups",
              ],
              correct: 2,
              explain:
                "In transit = während der Übertragung; at rest = gespeicherte Daten (Festplattenverschlüsselung).",
            },
            {
              id: "imp_ap1-ub-2_17",
              q: "Das Vier-Augen-Prinzip bedeutet …",
              options: [
                "kritische Vorgänge erfordern die Mitwirkung oder Kontrolle einer zweiten Person",
                "jeder Arbeitsplatz muss mit mindestens zwei Bildschirmen ausgestattet sein",
                "alle Daten werden doppelt auf zwei getrennten Systemen gespeichert",
                "im Serverraum gilt für alle Beschäftigten Schutzbrillenpflicht",
              ],
              correct: 0,
              explain:
                "Es senkt Fehler- und Missbrauchsrisiko, z. B. bei Berechtigungsvergabe oder Zahlungsfreigaben.",
            },
            {
              id: "imp_ap1-ub-2_18",
              q: "Die Grundsätze Datenminimierung und Zweckbindung verlangen …",
              options: [
                "möglichst viele Daten auf Vorrat zu sammeln, um sie später für neue Zwecke nutzen zu können",
                "nur die für den festgelegten Zweck nötigen Daten zu erheben und sie nicht zweckfremd zu nutzen",
                "sämtliche Daten zu verschlüsseln, dann dürfen sie unbegrenzt gesammelt werden",
                "alle personenbezogenen Daten spätestens nach einem Tag automatisch zu löschen",
              ],
              correct: 1,
              explain: "Art. 5 DSGVO – beliebte Begründungsbausteine in Datenschutz-Teilaufgaben.",
            },
            {
              id: "imp_ap1-ub-2_19",
              q: "Beim Angebotsvergleich ist der Bezugspreis …",
              options: [
                "der Preis des teuersten Anbieters",
                "Listenpreis − Rabatt − Skonto + Bezugskosten (Fracht, Verpackung)",
                "Listenpreis + Rabatt",
                "immer der Listenpreis",
              ],
              correct: 1,
              explain:
                "Erst der Bezugspreis macht Angebote vergleichbar; qualitative Kriterien ergänzt die Nutzwertanalyse.",
            },
          ],
        },
      ],
    },
    {
      id: "ap1-train",
      title: "Aufgabentraining: typische Aufgabenmuster",
      lessons: [
        {
          id: "ap1-t-1",
          title: "Aufgabentraining: Projekt & Netzplantechnik",
          content: [
            {
              type: "text",
              value:
                "Netzplantechnik ist Dauergast in der AP1: In den letzten Prüfungsjahren musste fast immer ein Netzplan vervollständigt, der kritische Pfad markiert oder die Auswirkung einer Verzögerung beurteilt werden. Diese Lektion trainiert genau diese Aufgabentypen – mit eigenen Zahlen, aber im Originalzuschnitt.",
            },
            { type: "heading", value: "Das Handwerkszeug" },
            {
              type: "list",
              value: [
                "FAZ = frühester Anfangszeitpunkt, FEZ = frühester Endzeitpunkt (Vorwärtsrechnung: FEZ = FAZ + Dauer)",
                "SAZ = spätester Anfangszeitpunkt, SEZ = spätester Endzeitpunkt (Rückwärtsrechnung: SAZ = SEZ − Dauer)",
                "GP (Gesamtpuffer) = SAZ − FAZ (oder SEZ − FEZ)",
                "FP (freier Puffer) = FAZ des frühesten Nachfolgers − eigener FEZ",
                "Kritischer Pfad: alle Vorgänge mit GP = 0 – jede Verzögerung dort verschiebt das Projektende",
              ],
            },
            { type: "heading", value: "Aufgabe 1: Netzplan vervollständigen (Variante)" },
            {
              type: "text",
              value:
                "Ein Systemhaus plant den Umzug einer Steuerkanzlei. Vorgänge und Abhängigkeiten: A 'Ist-Aufnahme' (2 Tage, kein Vorgänger) – B 'Beschaffung' (3 Tage, nach A) – C 'Verkabelung neuer Standort' (4 Tage, nach A) – D 'Serverinstallation' (5 Tage, nach B) – E 'Client-Vorbereitung' (3 Tage, nach C) – F 'Umzug & Inbetriebnahme' (2 Tage, nach D und E). Berechne für jeden Vorgang FAZ, FEZ, SAZ, SEZ, GP und FP, markiere den kritischen Pfad und gib die Projektdauer an.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (alle Angaben in Tagen):\nVorwärts: A: FAZ 0, FEZ 2 | B: 2/5 | C: 2/6 | D: 5/10 | E: 6/9 | F: FAZ 10 (Maximum aus FEZ D=10 und FEZ E=9), FEZ 12.\nRückwärts: F: SEZ 12, SAZ 10 | D: 10/5 | E: SEZ 10, SAZ 7 | B: SEZ 5, SAZ 2 | C: SEZ 7, SAZ 3 | A: SEZ 2, SAZ 0.\nPuffer: A: GP 0, FP 0 | B: GP 0, FP 0 | C: GP 1 (3−2), FP 0 (FAZ E 6 − FEZ C 6) | D: GP 0, FP 0 | E: GP 1, FP 1 (FAZ F 10 − FEZ E 9) | F: GP 0, FP 0.\nKritischer Pfad: A → B → D → F. Projektdauer: 12 Tage.\nBeachte C: GP = 1, aber FP = 0 – C darf sich nur verschieben, wenn der Puffer nicht schon von E gebraucht wird. Genau solche Feinheiten bringen in der Prüfung die Punkte.",
            },
            { type: "heading", value: "Aufgabe 2: Verzögerung beurteilen (Variante)" },
            {
              type: "text",
              value:
                "Im Netzplan aus Aufgabe 1 verzögert sich Vorgang E ('Client-Vorbereitung') um 2 Tage. Beschreibe die Auswirkung auf das Projektende. Was wäre bei einer Verzögerung von Vorgang D um 2 Tage?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nE hat GP = 1 Tag. Eine Verzögerung um 2 Tage überschreitet den Puffer um 1 Tag → das Projektende verschiebt sich um 1 Tag (von Tag 12 auf Tag 13), E wird Teil des kritischen Pfads.\nD liegt auf dem kritischen Pfad (GP = 0) → jede Verzögerung wirkt voll: Projektende verschiebt sich um 2 Tage auf Tag 14.",
            },
            { type: "heading", value: "Aufgabe 3: Projektmerkmale & SMART (Variante)" },
            {
              type: "text",
              value:
                "a) Dein Kollege bezeichnet die Einführung eines Ticketsystems beim Kunden als Projekt. Nenne vier Merkmale, die ein Vorhaben zum Projekt machen. b) Die Projektziele sollen SMART formuliert sein – nenne die fünf Kriterien und formuliere ein SMARTes Ziel für die Ticketsystem-Einführung.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Zeitliche Begrenzung (definierter Anfang und Ende) – Einmaligkeit/Neuartigkeit – definiertes Ziel – begrenzte Ressourcen (Budget, Personal) – projektspezifische Organisation – gewisse Komplexität/Risiko (vier genügen).\nb) S pezifisch, M essbar, A ttraktiv/Akzeptiert (auch: erreichbar/achievable), R ealistisch, T erminiert.\nBeispielziel: 'Bis zum 30.09. ist das Ticketsystem für alle 25 Support-Mitarbeiter produktiv, 90 % der eingehenden Anfragen werden darüber erfasst.'",
            },
            { type: "heading", value: "Aufgabe 4: Gantt-Diagramm vs. Netzplan (Variante)" },
            {
              type: "text",
              value:
                "Dein Projektleiter fragt, ob die Planung als Gantt-Diagramm oder als Netzplan dargestellt werden soll. Nenne je zwei Eigenschaften bzw. Vorteile beider Darstellungen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nGantt: Balkendarstellung auf Zeitachse – zeitlicher Ablauf und Dauer sofort visuell erfassbar – gut für Terminplanung und Kommunikation mit dem Kunden – Meilensteine einfach darstellbar.\nNetzplan: Abhängigkeiten der Vorgänge stehen im Mittelpunkt – Puffer und kritischer Pfad berechenbar (FAZ/SAZ etc.) – Auswirkungen von Verzögerungen exakt bestimmbar.\nIn der Praxis ergänzen sich beide: Netzplan zur Analyse, Gantt zur Kommunikation.",
            },
          ],
          quiz: [
            {
              id: "imp_ap1-t-1_0",
              q: "Wie berechnet sich der Gesamtpuffer (GP) eines Vorgangs?",
              options: [
                "SAZ − FAZ (bzw. SEZ − FEZ)",
                "FEZ − SEZ des Nachfolgers",
                "Dauer × 2",
                "FAZ + Dauer",
              ],
              correct: 0,
              explain:
                "Der GP gibt an, um wie viel sich ein Vorgang verschieben darf, ohne das Projektende zu gefährden.",
            },
            {
              id: "imp_ap1-t-1_1",
              q: "Woran erkennt man den kritischen Pfad?",
              options: [
                "Am ersten und letzten Vorgang",
                "An den teuersten Vorgängen",
                "An den Vorgängen mit der längsten Dauer",
                "An allen Vorgängen mit Gesamtpuffer 0",
              ],
              correct: 3,
              explain:
                "Auf dem kritischen Pfad gibt es keinen Spielraum – jede Verzögerung verschiebt das Projektende.",
            },
            {
              id: "imp_ap1-t-1_2",
              q: "Wie wird der FAZ eines Vorgangs mit mehreren Vorgängern bestimmt?",
              options: [
                "Durchschnitt der FEZ",
                "Minimum der FEZ aller Vorgänger",
                "Summe aller Dauern",
                "Maximum der FEZ aller Vorgänger",
              ],
              correct: 3,
              explain:
                "Der Vorgang kann erst starten, wenn ALLE Vorgänger fertig sind – also zählt der späteste FEZ.",
            },
            {
              id: "imp_ap1-t-1_3",
              q: "Was beschreibt der freie Puffer (FP)?",
              options: [
                "Den Unterschied zwischen geplanten und tatsächlich angefallenen Kosten",
                "Verschiebespielraum, ohne den FAZ des frühesten Nachfolgers zu verzögern",
                "Die gesamte Reservezeit des Projekts bis zum spätesten Endtermin",
                "Die verbleibende Restzeit vom Vorgang bis zum geplanten Projektende",
              ],
              correct: 1,
              explain:
                "FP = FAZ(Nachfolger) − eigener FEZ. Er kann kleiner als der GP sein, wenn nachfolgende Vorgänge denselben Puffer nutzen.",
            },
            {
              id: "imp_ap1-t-1_4",
              q: "Ein Vorgang hat GP = 3 und verzögert sich um 5 Tage. Auswirkung auf das Projektende?",
              options: [
                "Es verschiebt sich um 3 Tage",
                "Keine Auswirkung",
                "Es verschiebt sich um 5 Tage",
                "Es verschiebt sich um 2 Tage",
              ],
              correct: 3,
              explain:
                "Die Verzögerung übersteigt den Puffer um 5 − 3 = 2 Tage – genau darum verschiebt sich das Ende.",
            },
            {
              id: "imp_ap1-t-1_5",
              q: "Wofür steht das 'M' in den SMART-Kriterien?",
              options: ["Machbar", "Modern", "Messbar", "Mehrstufig"],
              correct: 2,
              explain:
                "Spezifisch, Messbar, Attraktiv/Akzeptiert, Realistisch, Terminiert – messbar heißt: Zielerreichung objektiv prüfbar.",
            },
            {
              id: "imp_ap1-t-1_6",
              q: "Welches ist KEIN typisches Projektmerkmal?",
              options: [
                "Definiertes Ziel",
                "Zeitliche Begrenzung",
                "Dauerhafte, wiederkehrende Routinetätigkeit",
                "Einmaligkeit",
              ],
              correct: 2,
              explain:
                "Routinebetrieb (z. B. täglicher Support) ist Linienarbeit – Projekte sind einmalig und befristet.",
            },
            {
              id: "imp_ap1-t-1_7",
              q: "In welcher Reihenfolge laufen klassische Projektphasen ab?",
              options: [
                "Abschluss → Initialisierung → Planung → Durchführung",
                "Planung → Abschluss → Durchführung → Initialisierung",
                "Durchführung → Planung → Abschluss → Initialisierung",
                "Initialisierung → Planung → Durchführung → Abschluss",
              ],
              correct: 3,
              explain:
                "Erst Auftrag/Ziele klären, dann planen, dann umsetzen (mit Steuerung), zuletzt Abnahme, Doku und Lessons Learned.",
            },
            {
              id: "imp_ap1-t-1_8",
              q: "Was zeigt ein Gantt-Diagramm primär?",
              options: [
                "Die Organisationsstruktur",
                "Die Netzwerktopologie",
                "Vorgänge als Balken auf einer Zeitachse",
                "Kostenstellen des Unternehmens",
              ],
              correct: 2,
              explain:
                "Das Gantt-Diagramm visualisiert Dauer und zeitliche Lage der Vorgänge – Abhängigkeiten sind nur eingeschränkt erkennbar.",
            },
            {
              id: "imp_ap1-t-1_9",
              q: "Ein Meilenstein ist …",
              options: [
                "ein Ereignis mit Dauer 0, das ein prüfbares Zwischenergebnis markiert",
                "ein besonders langer Vorgang mit vielen beteiligten Ressourcen",
                "die Abschlussrechnung, die am Projektende gestellt wird",
                "ein anderes Wort für die Pufferzeit zwischen zwei Vorgängen",
              ],
              correct: 0,
              explain:
                "Meilensteine ('Server produktiv', 'Abnahme erfolgt') strukturieren das Projekt und dienen der Fortschrittskontrolle.",
            },
            {
              id: "imp_ap1-t-1_10",
              q: "Der FEZ eines Vorgangs berechnet sich aus …",
              options: ["FAZ + Dauer", "SEZ + Puffer", "SAZ − Dauer", "FAZ − Dauer"],
              correct: 0,
              explain:
                "Vorwärtsrechnung: frühester Endzeitpunkt = frühester Anfangszeitpunkt plus Vorgangsdauer.",
            },
            {
              id: "imp_ap1-t-1_11",
              q: "Warum beginnt die Rückwärtsrechnung beim letzten Vorgang?",
              options: [
                "Weil dessen SEZ dem Projektende (FEZ) gleichgesetzt wird und daraus alle späteren Zeitpunkte rückwärts folgen",
                "Aus rein optischen Gründen, damit der Netzplan von rechts nach links gelesen werden kann",
                "Weil nur der letzte Vorgang eine Pufferzeit besitzt und diese zuerst bestimmt werden muss",
                "Weil der erste Vorgang zu Projektbeginn unbekannt ist und erst durch die Rückrechnung ermittelt wird",
              ],
              correct: 0,
              explain:
                "SEZ(letzter) = FEZ(letzter) = Projektdauer; von dort rechnet man SAZ = SEZ − Dauer rückwärts durch den Plan.",
            },
          ],
        },
        {
          id: "ap1-t-2",
          title: "Aufgabentraining: Wirtschaftlichkeit & Energie",
          content: [
            {
              type: "text",
              value:
                "Rechenaufgaben zu Energiekosten, Amortisation, Personalkalkulation und Datenübertragung tauchen in fast jeder AP1 auf. Wichtig: Rechenweg immer hinschreiben – auch mit Folgefehler gibt es Punkte. Die Aufgaben hier folgen den typischen Aufgabenmustern, mit eigenen Zahlen.",
            },
            {
              type: "heading",
              value: "Aufgabe 1: Netzteil-Wirkungsgrad und Energiekosten (Variante)",
            },
            {
              type: "text",
              value:
                "Ein Kunde vergleicht zwei baugleiche PCs, die sich nur im Netzteil unterscheiden. Die Komponenten benötigen im Betrieb durchschnittlich 80 W. PC-X hat ein Netzteil mit 50 % Wirkungsgrad, PC-Y eines nach 80 PLUS-Standard mit 90 % Wirkungsgrad. Betrieb: 8 Stunden täglich an 22 Arbeitstagen im Monat, Strompreis 35 Cent/kWh. a) Berechne für beide PCs die aus dem Netz bezogene Leistung und die monatlichen Energiekosten. b) PC-Y kostet 120 € mehr. Nach wie vielen Monaten amortisiert sich der Mehrpreis?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Wirkungsgrad = Nutzleistung / aufgenommene Leistung → aufgenommene Leistung = 80 W / Wirkungsgrad.\nPC-X: 80 / 0,50 = 160 W. PC-Y: 80 / 0,90 = 88,89 W.\nBetriebszeit: 8 h × 22 Tage = 176 h/Monat.\nPC-X: 0,160 kW × 176 h = 28,16 kWh × 0,35 €/kWh = 9,86 €/Monat.\nPC-Y: 0,08889 kW × 176 h = 15,64 kWh × 0,35 €/kWh = 5,48 €/Monat.\nb) Ersparnis: 9,86 − 5,48 = 4,38 €/Monat. Amortisation: 120 € / 4,38 €/Monat = 27,4 → ab dem 28. Monat hat sich der Mehrpreis bezahlt gemacht.",
            },
            {
              type: "heading",
              value: "Aufgabe 2: Mehrfachsteckdose – Belastungsnachweis (Variante)",
            },
            {
              type: "text",
              value:
                "An einer Mehrfachsteckdose mit der Aufschrift 'max. 16 A' sollen gleichzeitig betrieben werden: 4 PCs mit je maximal 200 W, ein Laserdrucker mit 600 W, ein Heizlüfter mit 1.800 W und eine Kaffeemaschine mit 1.000 W (Netzspannung 230 V). Weise rechnerisch nach, ob das zulässig ist.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nMaximal zulässige Leistung: P = U × I = 230 V × 16 A = 3.680 W.\nSumme der Verbraucher: 4 × 200 + 600 + 1.800 + 1.000 = 800 + 600 + 1.800 + 1.000 = 4.200 W.\n4.200 W > 3.680 W → die Geräte dürfen NICHT gleichzeitig an dieser Leiste betrieben werden (Überlastung, Brandgefahr). Praxisempfehlung: Heizlüfter/Kaffeemaschine an separate Stromkreise.",
            },
            { type: "heading", value: "Aufgabe 3: Migrationskosten und Dauer (Variante)" },
            {
              type: "text",
              value:
                "Für einen Kunden sollen 24 Postfächer auf einen neuen Mailserver migriert werden. Die Arbeiten dürfen nur nachts (Praxis geschlossen) erfolgen. Ein Subunternehmer berechnet 110 €/h; die Migration eines Postfachs dauert inklusive Nacharbeiten durchschnittlich 1,5 Stunden. a) Berechne die Gesamtkosten. b) Der Subunternehmer setzt zwei Techniker mit je 6 Stunden Nachtarbeitszeit ein. Nach wie vielen Nächten ist die Migration frühestens abgeschlossen?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Gesamtaufwand: 24 Postfächer × 1,5 h = 36 h. Kosten: 36 h × 110 €/h = 3.960 €.\nb) Kapazität pro Nacht: 2 Techniker × 6 h = 12 h. Dauer: 36 h / 12 h = 3 Nächte.",
            },
            { type: "heading", value: "Aufgabe 4: Make or Buy (Variante)" },
            {
              type: "text",
              value:
                "Ein Softwarehaus überlegt, ein Verwaltungstool selbst zu entwickeln oder Lizenzen zuzukaufen. Eigenentwicklung: 8.000 Personenstunden à 70 €, dazu jährlich 100 Stunden Pflege à 70 € über die geplante Nutzungsdauer von 10 Jahren. Alternativ kostet eine Kauflizenz 30 €. Ab welcher Lizenzanzahl lohnt sich die Eigenentwicklung?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nEigenentwicklung gesamt: 8.000 × 70 = 560.000 € + Pflege 100 × 70 × 10 = 70.000 € → 630.000 € über 10 Jahre.\nBreak-even: 630.000 € / 30 €/Lizenz = 21.000 Lizenzen.\nBei 21.000 Lizenzen sind beide kostengleich (630.000 €), darüber ist die Eigenentwicklung günstiger; darunter ist der Zukauf wirtschaftlicher. (Qualitative Faktoren wie Abhängigkeit, Know-how und Anpassbarkeit zusätzlich nennen – gibt oft Zusatzpunkte.)",
            },
            {
              type: "heading",
              value: "Aufgabe 5: Minutensatz einer Hotline kalkulieren (Variante)",
            },
            {
              type: "text",
              value:
                "Eine kostenpflichtige After-Hours-Hotline wird von drei Mitarbeitern in Rufbereitschaft betreut (je 10 Bereitschaftsstunden im Abrechnungszeitraum, Vergütung 11 €/h, 14 €/h und 19 €/h). Zusätzlich fallen für aktive Gesprächszeit an: 120 Minuten à 0,60 €, 90 Minuten à 1,20 € und 60 Minuten à 1,80 €. Berechne den kostendeckenden Minutensatz.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nBereitschaft: (11 + 14 + 19) €/h × 10 h = 440 €.\nGesprächskosten: 120 × 0,60 + 90 × 1,20 + 60 × 1,80 = 72 + 108 + 108 = 288 €.\nGesamtkosten: 440 + 288 = 728 €. Gesamtminuten: 120 + 90 + 60 = 270 Minuten.\nMinutensatz: 728 € / 270 min = 2,696 ≈ 2,70 €/Minute.",
            },
            { type: "heading", value: "Aufgabe 6: Übertragungsdauer berechnen (Variante)" },
            {
              type: "text",
              value:
                "Ein Backup-Archiv von 250 MiB soll über eine Leitung mit 50 Mbit/s Upstream übertragen werden. Berechne die theoretische Übertragungsdauer in Sekunden. (1 MiB = 1.024 × 1.024 Byte, 1 Byte = 8 Bit)",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nDatenmenge in Bit: 250 × 1.024 × 1.024 × 8 = 2.097.152.000 Bit.\nDauer: 2.097.152.000 Bit / 50.000.000 Bit/s = 41,94 s ≈ 42 Sekunden.\nStolperfalle der Prüfung: MiB (Basis 1.024) sauber von Mbit (Basis 1.000) trennen und Byte → Bit mit Faktor 8 umrechnen.",
            },
          ],
          quiz: [
            {
              id: "imp_ap1-t-2_0",
              q: "Ein Netzteil hat 80 % Wirkungsgrad, die Komponenten benötigen 120 W. Wie viel Leistung wird aus dem Netz bezogen?",
              options: ["96 W", "200 W", "120 W", "150 W"],
              correct: 3,
              explain: "Aufgenommene Leistung = Nutzleistung / Wirkungsgrad = 120 / 0,8 = 150 W.",
            },
            {
              id: "imp_ap1-t-2_1",
              q: "Wie berechnet man Energiekosten?",
              options: [
                "Leistung × Preis ohne Zeit",
                "Zeit / Leistung × Preis",
                "Leistung (kW) × Zeit (h) × Preis (€/kWh)",
                "Spannung × Stromstärke × Preis",
              ],
              correct: 2,
              explain: "Erst die Arbeit in kWh (kW × h), dann mit dem Strompreis multiplizieren.",
            },
            {
              id: "imp_ap1-t-2_2",
              q: "Welche maximale Leistung verträgt eine 16-A-Steckdosenleiste bei 230 V?",
              options: ["16.000 W", "230 W", "3.680 W", "1.600 W"],
              correct: 2,
              explain:
                "P = U × I = 230 V × 16 A = 3.680 W – der Klassiker unter den AP1-Rechnungen.",
            },
            {
              id: "imp_ap1-t-2_3",
              q: "Amortisationszeit bedeutet …",
              options: [
                "die Zeit, bis eingesparte Kosten die Mehrinvestition ausgeglichen haben",
                "die vom Finanzamt vorgegebene Abschreibungsdauer (AfA-Tabelle)",
                "die Dauer der gesetzlichen Garantie- und Gewährleistungszeit",
                "die technische Lebensdauer eines Geräts bis zum Defekt",
              ],
              correct: 0,
              explain: "Amortisation = Mehrkosten / Ersparnis pro Periode.",
            },
            {
              id: "imp_ap1-t-2_4",
              q: "100 MiB entsprechen in Bit …",
              options: [
                "100 × 1.024 Bit",
                "100 × 8.000 Bit",
                "100 × 1.024 × 1.024 × 8 Bit",
                "100 × 1.000.000 Bit",
              ],
              correct: 2,
              explain:
                "MiB ist binär (1.024er-Potenzen); für die Übertragungsrechnung Byte mit 8 multiplizieren.",
            },
            {
              id: "imp_ap1-t-2_5",
              q: "Warum sollte in der AP1 immer der Rechenweg notiert werden?",
              options: [
                "Der Taschenrechner wird eingesammelt",
                "Der Rechenweg ist Pflicht, sonst 0 Punkte auf die ganze Prüfung",
                "Nur zur Zeitkontrolle",
                "Teilpunkte gibt es auch bei Folgefehlern, wenn der Ansatz stimmt",
              ],
              correct: 3,
              explain:
                "Die Lösungshinweise vergeben Teilpunkte pro Schritt – ein Zahlendreher kostet dann nur einen Punkt, nicht die Aufgabe.",
            },
            {
              id: "imp_ap1-t-2_6",
              q: "Eigenentwicklung kostet 200.000 €, eine Kauflizenz 50 €. Ab wie vielen Lizenzen lohnt die Eigenentwicklung?",
              options: ["400", "40.000", "2.500", "4.000"],
              correct: 3,
              explain: "Break-even: 200.000 / 50 = 4.000 Lizenzen.",
            },
            {
              id: "imp_ap1-t-2_7",
              q: "Ein Techniker (95 €/h) braucht je Arbeitsplatz 45 Minuten. Was kosten 16 Arbeitsplätze?",
              options: ["760 €", "855 €", "1.140 €", "1.520 €"],
              correct: 2,
              explain: "16 × 0,75 h = 12 h × 95 € = 1.140 €.",
            },
            {
              id: "imp_ap1-t-2_8",
              q: "Welche Maßnahme senkt die Energiekosten eines IT-Arbeitsplatzes NICHT?",
              options: [
                "Bildschirmschoner mit 3D-Animation statt Standby",
                "Energiesparmodus/Standby aktivieren",
                "Geräte nach Feierabend ausschalten (schaltbare Leisten)",
                "Effiziente Netzteile (80 PLUS) einsetzen",
              ],
              correct: 0,
              explain:
                "Aufwendige Bildschirmschoner halten GPU und Display aktiv – Standby oder Abschalten spart wirklich.",
            },
            {
              id: "imp_ap1-t-2_9",
              q: "Skonto 2 % bei Rechnungsbetrag 4.500 € – wie viel wird bei Skontonutzung gezahlt?",
              options: ["4.590 €", "4.050 €", "4.410 €", "4.490 €"],
              correct: 2,
              explain:
                "4.500 × 0,98 = 4.410 €. Skonto ist ein Preisnachlass für schnelle Zahlung – fester Bestandteil von Angebotsvergleichen.",
            },
            {
              id: "imp_ap1-t-2_10",
              q: "Eine Leitung schafft 100 Mbit/s. Wie viele MB (Basis 1.000) überträgt sie theoretisch pro Sekunde?",
              options: ["12,5 MB", "100 MB", "8 MB", "800 MB"],
              correct: 0,
              explain: "100.000.000 Bit/s ÷ 8 = 12.500.000 Byte/s = 12,5 MB/s.",
            },
            {
              id: "imp_ap1-t-2_11",
              q: "Der Stundensatz eines Technikers enthält neben dem Bruttolohn üblicherweise …",
              options: [
                "Lohnnebenkosten, Gemeinkosten und Gewinnzuschlag",
                "die vom Kunden zu zahlende Mehrwertsteuer",
                "ausschließlich den Nettolohn des Technikers",
                "ausschließlich die Fahrt- und Reisekosten",
              ],
              correct: 0,
              explain:
                "Deshalb liegt der Verrechnungssatz (z. B. 95–130 €/h) deutlich über dem reinen Lohn – typische Begründungsfrage in der AP.",
            },
          ],
        },
        {
          id: "ap1-t-3",
          title: "Aufgabentraining: Hardware & Arbeitsplatz",
          content: [
            {
              type: "text",
              value:
                "Der Prüfungsteil heißt 'Einrichten eines IT-gestützten Arbeitsplatzes' – entsprechend regelmäßig kommen Hardware-Montage, Anschlusskunde, Komponentenauswahl und Ergonomie/Homeoffice dran. Die Aufgaben decken die typischen Aufgabenmuster ab.",
            },
            { type: "heading", value: "Aufgabe 1: CPU- und RAM-Einbau beraten (Variante)" },
            {
              type: "text",
              value:
                "Ein Azubi im ersten Lehrjahr baut zum ersten Mal einen PC zusammen. a) Beschreibe ihm die drei Schritte zum Einsetzen der CPU in den Sockel und nenne zwei Punkte, die er dabei unbedingt beachten muss. b) Erkläre, wozu Wärmeleitpaste dient. c) Das Mainboard hat vier RAM-Slots (A1/A2/B1/B2), eingebaut werden zwei Riegel. Worauf muss er für den Dual-Channel-Betrieb achten?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Schritte: Sockelhebel öffnen → CPU vorsichtig und passgenau einsetzen → Hebel schließen. Beachten: keine Gewalt anwenden (Pins!), Markierung/Pfeil auf CPU muss mit der Markierung am Sockel übereinstimmen.\nb) Wärmeleitpaste gleicht mikroskopische Unebenheiten zwischen CPU-Heatspreader und Kühlerboden aus – Luft leitet Wärme schlecht, die Paste verbessert die Wärmeabfuhr.\nc) Beide Riegel in die zusammengehörigen Slots desselben Kanals laut Handbuch (z. B. A2+B2), idealerweise identische Riegel (gleiche Größe/Taktung), damit Dual Channel aktiv wird und die Speicherbandbreite sich verdoppelt.",
            },
            { type: "heading", value: "Aufgabe 2: Anschlüsse und Komponenten zuordnen (Variante)" },
            {
              type: "text",
              value:
                "a) Nenne drei aktuelle Anschlussarten für Monitore. b) Nenne zwei Vorteile von USB-C gegenüber USB-A. c) Erkläre kurz die Begriffe Hyperthreading/SMT und CPU-Cache. d) Nenne je einen Vor- und Nachteil einer M.2-NVMe-SSD gegenüber einer 2,5-Zoll-SATA-SSD.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) DisplayPort, HDMI, USB-C (DP-Alt-Mode); älter: DVI, VGA.\nb) Beidseitig steckbar – höhere Datenraten möglich – mehr Stromversorgung (Power Delivery) – ein Stecker für Daten, Video und Laden.\nc) Hyperthreading/SMT: Ein physischer Kern führt zwei Threads quasi gleichzeitig aus und erscheint als zwei logische Prozessoren. Cache: sehr schneller Zwischenspeicher der CPU, der Zugriffe auf den langsameren RAM reduziert.\nd) Vorteil M.2-NVMe: deutlich schneller (PCIe statt SATA), kompakt, keine Kabel. Nachteil: meist teurer pro GB, begrenzte Anzahl M.2-Slots auf dem Board, kann unter Last throtteln (Kühlung).",
            },
            { type: "heading", value: "Aufgabe 3: Homeoffice-Arbeitsplatz ausstatten (Variante)" },
            {
              type: "text",
              value:
                "Eine Mitarbeiterin wechselt zwei Tage pro Woche ins Homeoffice und erhält ein Notebook. a) Nenne vier sinnvolle Ausstattungsgegenstände mit kurzer Begründung. b) Nenne drei ergonomische Ergänzungen speziell für die Notebook-Arbeit. c) Stelle je drei Vor- und Nachteile von Homeoffice aus Sicht der Beschäftigten gegenüber.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Headset (Videokonferenzen in guter Qualität), Webcam (Bildübertragung), externer Monitor (größere Arbeitsfläche, weniger Ermüdung), Dockingstation (ein Kabel für alles), gesicherter Internetzugang/VPN (datenschutzkonforme Anbindung), ergonomischer Stuhl (Gesundheitsschutz) – vier genügen.\nb) Externe Tastatur und Maus, Notebookständer (Display auf Augenhöhe), externer Monitor, ergonomische Maus/Tastatur.\nc) Vorteile: keine Pendelzeit/Fahrtkosten, flexiblere Zeiteinteilung, ruhigere Arbeitsumgebung, bessere Vereinbarkeit von Beruf und Privatem. Nachteile: Vermischung von Arbeit und Freizeit, weniger soziale Kontakte, Selbstdisziplin nötig, erschwerter Informationsfluss/Sichtbarkeit im Team.",
            },
            { type: "heading", value: "Aufgabe 4: Notebook-Auswahlkriterien (Variante)" },
            {
              type: "text",
              value:
                "Für die Beschaffung von 15 Notebooks sollst du Auswahlkriterien definieren. Nenne vier Kriterienbereiche mit je einem konkreten Beispiel.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nLeistung (z. B. CPU-Klasse, 16 GB RAM, NVMe-SSD) – Anschlüsse/Erweiterbarkeit (USB-C mit PD, HDMI, Docking-Unterstützung) – Ergonomie (mattes Display, Tastaturqualität, Gewicht) – Akkulaufzeit (z. B. mind. 8 h) – Wartung/Support (Garantieumfang, Vor-Ort-Service, Ersatzteilversorgung) – Sicherheit (TPM 2.0, ggf. Smartcard-Reader) – Preis/TCO. Vier Bereiche mit Beispiel genügen.",
            },
          ],
          quiz: [
            {
              id: "imp_ap1-t-3_0",
              q: "Worauf weist der Pfeil auf einer CPU hin?",
              options: [
                "Auf den Garantiestatus und das Produktionsdatum der CPU",
                "Auf die korrekte Ausrichtung zur Markierung am Sockel",
                "Auf die maximale Taktfrequenz im Turbo-Betrieb",
                "Auf den heißesten Punkt des Dies für die Kühlermontage",
              ],
              correct: 1,
              explain:
                "CPU-Markierung und Sockel-Markierung müssen übereinstimmen – falsches Einsetzen verbiegt Pins.",
            },
            {
              id: "imp_ap1-t-3_1",
              q: "Wozu dient Wärmeleitpaste?",
              options: [
                "Sie klebt den Kühler fest",
                "Sie erhöht die Taktfrequenz",
                "Sie gleicht Unebenheiten aus, da Luft Wärme schlecht leitet",
                "Sie isoliert die CPU elektrisch nach außen",
              ],
              correct: 2,
              explain:
                "Ohne Paste bilden sich Luftspalte zwischen CPU und Kühler – die Wärmeabfuhr verschlechtert sich deutlich.",
            },
            {
              id: "imp_ap1-t-3_2",
              q: "Was bringt Dual-Channel-Betrieb beim RAM?",
              options: [
                "Einen halbierten Stromverbrauch durch Lastverteilung auf zwei Riegel",
                "Verdoppelte Speicherbandbreite durch parallelen Zugriff auf zwei Riegel",
                "Eine verdoppelte Speicherkapazität, ohne einen zweiten Riegel einzubauen",
                "Ein automatisches Übertakten der Speichermodule ab Werk",
              ],
              correct: 1,
              explain:
                "Dafür müssen die Riegel in die richtigen Slots (laut Handbuch) und sollten identisch sein.",
            },
            {
              id: "imp_ap1-t-3_3",
              q: "Welcher Anschluss ist KEIN Monitoranschluss?",
              options: ["HDMI", "SATA", "DisplayPort", "DVI"],
              correct: 1,
              explain: "SATA verbindet Laufwerke mit dem Mainboard.",
            },
            {
              id: "imp_ap1-t-3_4",
              q: "Was sind logische Prozessoren?",
              options: [
                "Virtuelle Maschinen, die der Hypervisor als eigenständige Prozessoren an das BIOS meldet",
                "Externe Co-Prozessoren, die über PCIe zugeschaltet werden und die CPU entlasten",
                "Durch SMT/Hyperthreading aufgeteilte physische Kerne, die je zwei Threads ausführen",
                "Die Shader-Kerne der integrierten Grafikeinheit, die Rechenaufgaben der CPU übernehmen",
              ],
              correct: 2,
              explain:
                "Ein 8-Kern-Prozessor mit SMT meldet sich mit 16 logischen Prozessoren im System.",
            },
            {
              id: "imp_ap1-t-3_5",
              q: "Welche Aussage zum CPU-Cache stimmt?",
              options: [
                "Er ersetzt den Arbeitsspeicher vollständig, sodass moderne CPUs keinen RAM mehr benötigen",
                "Er ist ein schneller Zwischenspeicher, der Zugriffe auf den langsameren RAM reduziert",
                "Er ist langsamer als die Festplatte und dient daher nur als Notfallreserve",
                "Er speichert Dateien dauerhaft und behält sie auch nach dem Ausschalten",
              ],
              correct: 1,
              explain: "L1/L2/L3-Cache halten häufig benötigte Daten direkt bei den Kernen.",
            },
            {
              id: "imp_ap1-t-3_6",
              q: "3,4 GHz entsprechen …",
              options: [
                "3.400.000.000 Takten pro Sekunde",
                "3.400 Takten pro Sekunde",
                "3,4 Millionen Takten pro Sekunde",
                "34 Milliarden Takten pro Sekunde",
              ],
              correct: 0,
              explain: "Giga = Milliarde; die Umrechnung war wörtlich Prüfungsaufgabe.",
            },
            {
              id: "imp_ap1-t-3_7",
              q: "Ein Vorteil von USB-C ist …",
              options: [
                "die Inkompatibilität zu Adaptern",
                "dass er nur Strom liefern kann",
                "dass er ausschließlich für Drucker gedacht ist",
                "beidseitiges Stecken und Power Delivery",
              ],
              correct: 3,
              explain:
                "USB-C bündelt Daten, Video (DP-Alt-Mode) und Laden in einem verdrehsicheren Stecker.",
            },
            {
              id: "imp_ap1-t-3_8",
              q: "Welche Notebook-Eigenschaft gehört zur Ergonomie?",
              options: [
                "Die Anzahl der CPU-Kerne",
                "Mattes, entspiegeltes Display",
                "Die SSD-Größe",
                "Die WLAN-Antenne",
              ],
              correct: 1,
              explain:
                "Ergonomie = gesundes Arbeiten: Entspiegelung, Tastatur, Gewicht, Displayhöhe (Ständer!).",
            },
            {
              id: "imp_ap1-t-3_9",
              q: "Wofür wird ein USB-Port mit der Beschriftung 'BIOS Flashback' genutzt?",
              options: [
                "Zum schnelleren Aufladen von Smartphones und Tablets",
                "Für den dauerhaften Betrieb von Lizenz-Dongles",
                "Für den Anschluss des Monitors per USB-C-DisplayPort",
                "Für ein BIOS/UEFI-Update auch ohne installierte CPU/RAM",
              ],
              correct: 3,
              explain:
                "Über diesen Port kann die Firmware per USB-Stick aktualisiert werden – z. B. damit das Board eine neue CPU-Generation erkennt.",
            },
            {
              id: "imp_ap1-t-3_10",
              q: "Welche Ausstattung gehört NICHT zur datenschutzgerechten Homeoffice-Grundausstattung?",
              options: [
                "VPN-Zugang ins Firmennetz",
                "Öffentlicher Cloud-Speicher des Privatkontos für Firmendaten",
                "Blickschutzfilter bzw. abschließbarer Arbeitsraum",
                "Firmen-Notebook mit Festplattenverschlüsselung",
              ],
              correct: 1,
              explain:
                "Firmendaten gehören nicht in private Cloud-Konten – Klassiker unter den Fangoptionen.",
            },
            {
              id: "imp_ap1-t-3_11",
              q: "Eine Dockingstation dient dazu, …",
              options: [
                "das Notebook mit einem Kabel an Monitore, Netzwerk und Peripherie anzubinden",
                "den Notebook-Akku regelmäßig zu kalibrieren und dadurch seine Lebensdauer zu verlängern",
                "das WLAN-Signal des Notebooks zu verstärken und die Funkreichweite zu erhöhen",
                "die Festplatte des Notebooks automatisch zu verschlüsseln, sobald es angedockt wird",
              ],
              correct: 0,
              explain:
                "Ein Stecker (meist USB-C/Thunderbolt) verbindet den kompletten Arbeitsplatz – ergonomisch und praktisch.",
            },
          ],
        },
        {
          id: "ap1-t-4",
          title: "Aufgabentraining: Netzwerk-Aufgaben",
          content: [
            {
              type: "text",
              value:
                "Netzwerk in der AP1 heißt: OSI-Modell anwenden, WLAN-Sicherheit bewerten, IP-Konfigurationen interpretieren und Adressen berechnen. Die Aufgaben folgen den typischen Aufgabenmustern, mit eigenen Werten.",
            },
            { type: "heading", value: "Aufgabe 1: OSI-Tabelle vervollständigen (Variante)" },
            {
              type: "text",
              value:
                "Vervollständige die Tabelle: Für die OSI-Schichten 7, 4, 3, 2 und 1 sind jeweils Name, ein typisches Protokoll, die verwendete Adressierung und ein möglicher Fehler auf dieser Schicht anzugeben.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nSchicht 7 Anwendung – Protokolle: DNS, DHCP, HTTP – Adressen: – (Namen/URLs) – Fehler: Serverkonfiguration fehlerhaft, Dienst antwortet nicht.\nSchicht 4 Transport – TCP/UDP – Ports – Fehler: Port durch Firewall blockiert, Segmentverlust.\nSchicht 3 Vermittlung – IPv4/IPv6, ICMP – IP-Adressen – Fehler: falsche IP/Subnetzmaske/Gateway.\nSchicht 2 Sicherung – Ethernet, ARP – MAC-Adressen – Fehler: defekte Netzwerkkarte, Switchport-Fehler.\nSchicht 1 Bitübertragung – (elektrische/optische Signale) – keine Adressen – Fehler: Kabel getrennt/defekt, Stecker locker.",
            },
            { type: "heading", value: "Aufgabe 2: WLAN-Authentifizierung bewerten (Variante)" },
            {
              type: "text",
              value:
                "Ein Kunde mit 45 Mitarbeitern fragt, ob für das Firmen-WLAN ein gemeinsames Passwort (WPA2/WPA3-PSK) reicht oder WPA-Enterprise mit RADIUS-Server eingeführt werden soll. a) Welche zwei Angaben braucht ein Mitarbeiter, um sich mit einem PSK-geschützten WLAN zu verbinden? b) Stelle beide Verfahren mit je einem Vor- und Nachteil gegenüber und gib eine begründete Empfehlung.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) SSID (Netzwerkname) und Pre-Shared Key (WLAN-Passwort).\nb) PSK: Vorteil einfach einzurichten, keine Zusatzinfrastruktur; Nachteil: ein gemeinsames Geheimnis – verlässt ein Mitarbeiter die Firma oder wird der Key bekannt, muss er überall geändert werden. Enterprise (802.1X/RADIUS): Vorteil individuelle Anmeldung je Benutzer (sperrbar, nachvollziehbar); Nachteil: aufwendiger, RADIUS-Server nötig.\nEmpfehlung: Bei 45 Mitarbeitern WPA-Enterprise – individuelle Zugänge sind bei dieser Größe sicherheitlich geboten; PSK allenfalls für ein getrenntes Gäste-WLAN.",
            },
            { type: "heading", value: "Aufgabe 3: IP-Konfiguration interpretieren (Variante)" },
            {
              type: "text",
              value:
                "Ein Client meldet 'kein Internet'. ipconfig /all zeigt: Physische Adresse 00-1A-2B-3C-4D-5E, IPv4-Adresse 169.254.83.17, IPv6-Adresse fe80::a1b2:c3d4:e5f6:1234. a) Erkläre, was die physische Adresse ist. b) Was sagt die IPv4-Adresse 169.254.x.x aus und was ist die wahrscheinlichste Ursache? c) Was ist die fe80::-Adresse?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Die MAC-Adresse – die vom Hersteller fest zugeordnete Hardware-Adresse der Netzwerkkarte (Schicht 2).\nb) 169.254.x.x ist eine APIPA-Adresse: Der Client hat KEINE Antwort vom DHCP-Server erhalten und sich selbst eine link-lokale Adresse gegeben. Wahrscheinliche Ursache: DHCP-Server nicht erreichbar (Dienst gestoppt, VLAN/Verkabelung, Scope erschöpft).\nc) Eine link-lokale IPv6-Adresse, die sich der Rechner unabhängig von Routern/Servern selbst zuweist – sie gilt nur im lokalen Netzsegment.\nLösungsweg in der Praxis: physische Verbindung prüfen, dann ipconfig /release & /renew, DHCP-Server kontrollieren.",
            },
            { type: "heading", value: "Aufgabe 4: Netz-, Host- und Broadcast-Adresse (Variante)" },
            {
              type: "text",
              value:
                "Ein Client hat die Adresse 172.16.5.77/24. Bestimme Netzadresse, Hostanteil und Broadcast-Adresse. Wandle anschließend ab: Das Netz 192.168.40.0/24 soll in vier gleich große Subnetze geteilt werden – gib die neuen Subnetze mit Präfix und nutzbaren Hosts je Subnetz an.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n172.16.5.77/24: Netzadresse 172.16.5.0, Hostanteil .77 (letztes Oktett), Broadcast 172.16.5.255.\nTeilung /24 → /26 (2 zusätzliche Netzbits = 4 Subnetze):\n192.168.40.0/26 (Hosts .1–.62, Broadcast .63)\n192.168.40.64/26 (Hosts .65–.126, Broadcast .127)\n192.168.40.128/26 (Hosts .129–.190, Broadcast .191)\n192.168.40.192/26 (Hosts .193–.254, Broadcast .255)\nJe Subnetz: 2⁶ − 2 = 62 nutzbare Hostadressen.",
            },
            { type: "heading", value: "Aufgabe 5: Adapterstatus interpretieren (Variante)" },
            {
              type: "text",
              value:
                "Der Netzwerkadapter eines PCs zeigt: Medienstatus 'verbunden', Übertragungsrate 1 Gbit/s, gesendete und empfangene Pakete steigen. Der Benutzer erreicht trotzdem keine Webseiten. Auf welcher OSI-Schicht liegt der Fehler vermutlich NICHT – und wie gehst du weiter vor?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nSchicht 1 (Bitübertragung) ist in Ordnung: Link steht, Daten fließen. Der Fehler liegt auf einer höheren Schicht.\nWeiteres Vorgehen (Bottom-up): ipconfig prüfen (gültige IP? Gateway?) → ping auf Gateway (Schicht 3 lokal) → ping auf externe IP wie 9.9.9.9 (Routing/Internet) → nslookup auf einen Namen (DNS, Schicht 7). Antwortet die externe IP, aber kein Name → DNS-Problem.",
            },
          ],
          quiz: [
            {
              id: "imp_ap1-t-4_0",
              q: "Auf welcher OSI-Schicht arbeiten MAC-Adressen?",
              options: [
                "Schicht 3 (Vermittlung)",
                "Schicht 4 (Transport)",
                "Schicht 2 (Sicherung)",
                "Schicht 7 (Anwendung)",
              ],
              correct: 2,
              explain: "MAC = Sicherungsschicht; IP-Adressen sind Schicht 3, Ports Schicht 4.",
            },
            {
              id: "imp_ap1-t-4_1",
              q: "Eine IPv4-Adresse 169.254.x.x bedeutet …",
              options: [
                "eine vom Administrator manuell fest vergebene Serveradresse im Firmennetz",
                "eine in IPv4-Schreibweise dargestellte IPv6-Adresse (Übergangstechnik)",
                "APIPA: kein DHCP-Server erreichbar, Client hat sich selbst eine Adresse gegeben",
                "eine öffentliche, weltweit routbare Adresse aus dem Internet-Bereich",
              ],
              correct: 2,
              explain: "Der erste Diagnose-Reflex bei 169.254: DHCP prüfen.",
            },
            {
              id: "imp_ap1-t-4_2",
              q: "Was ist fe80:: am Anfang einer IPv6-Adresse?",
              options: [
                "Die MAC-Adresse der Netzwerkkarte in hexadezimaler Schreibweise",
                "Ein fehlerhafter Eintrag, der durch falsche Konfiguration entsteht",
                "Eine weltweit eindeutige, im Internet routbare globale Adresse",
                "Eine link-lokale Adresse, die nur im eigenen Netzsegment gilt",
              ],
              correct: 3,
              explain:
                "Link-lokale Adressen vergibt sich jedes IPv6-Interface selbst – unabhängig von Router oder DHCP.",
            },
            {
              id: "imp_ap1-t-4_3",
              q: "Netz- und Broadcast-Adresse von 10.0.3.44/24?",
              options: [
                "10.0.3.44 und 10.0.3.45",
                "10.0.3.1 und 10.0.3.254",
                "10.0.0.0 und 10.255.255.255",
                "10.0.3.0 und 10.0.3.255",
              ],
              correct: 3,
              explain: "/24: Die ersten drei Oktette sind Netzanteil; .0 = Netz, .255 = Broadcast.",
            },
            {
              id: "imp_ap1-t-4_4",
              q: "Wie viele nutzbare Hostadressen hat ein /26-Subnetz?",
              options: ["30", "64", "254", "62"],
              correct: 3,
              explain: "2⁶ = 64 Adressen minus Netz- und Broadcast-Adresse = 62.",
            },
            {
              id: "imp_ap1-t-4_5",
              q: "Welches Protokoll löst Hostnamen in IP-Adressen auf?",
              options: ["DNS", "DHCP", "SMTP", "ARP"],
              correct: 0,
              explain:
                "DNS = Namen→IP (Schicht 7); ARP löst IP→MAC im lokalen Netz; DHCP vergibt IP-Konfigurationen.",
            },
            {
              id: "imp_ap1-t-4_6",
              q: "Der Vorteil von WPA-Enterprise (802.1X) gegenüber PSK ist …",
              options: [
                "dass es ohne Verschlüsselung auskommt",
                "individuelle Anmeldedaten je Benutzer, einzeln sperrbar",
                "dass kein Server benötigt wird",
                "dass alle dasselbe Passwort teilen",
              ],
              correct: 1,
              explain: "Genau das geteilte Passwort ist die Schwäche von PSK in Unternehmen.",
            },
            {
              id: "imp_ap1-t-4_7",
              q: "Welche Angaben benötigt ein Gerät mindestens für die Verbindung zu einem PSK-WLAN?",
              options: [
                "RADIUS-Zertifikat",
                "MAC-Adresse des Routers und Portnummer",
                "IP-Adresse des DNS-Servers",
                "SSID und Pre-Shared Key",
              ],
              correct: 3,
              explain: "Netzwerkname plus Passwort – mehr braucht es im PSK-Verfahren nicht.",
            },
            {
              id: "imp_ap1-t-4_8",
              q: "ping 9.9.9.9 funktioniert, ping google.de nicht. Wo liegt das Problem?",
              options: [
                "Bei der DNS-Namensauflösung",
                "Am Patchkabel",
                "An der Netzwerkkarte",
                "Am Monitor",
              ],
              correct: 0,
              explain:
                "IP-Konnektivität steht, nur Namen werden nicht aufgelöst → DNS-Konfiguration prüfen.",
            },
            {
              id: "imp_ap1-t-4_9",
              q: "Welche Aussage über TCP und UDP stimmt?",
              options: [
                "TCP ist verbindungsorientiert mit Bestätigung, UDP verbindungslos ohne Garantie",
                "UDP bestätigt jedes einzelne Paket mit einem ACK an den Absender",
                "TCP arbeitet auf Schicht 2 und adressiert direkt über MAC-Adressen",
                "UDP verschlüsselt seine Datagramme immer automatisch mit TLS",
              ],
              correct: 0,
              explain:
                "Deshalb UDP für Echtzeit (VoIP, Streaming), TCP für verlustfreie Übertragung (Web, Mail, Dateien).",
            },
            {
              id: "imp_ap1-t-4_10",
              q: "Ein Switch leitet Frames anhand welcher Information weiter?",
              options: ["Portnummer", "Ziel-MAC-Adresse", "Hostname", "Ziel-IP-Adresse"],
              correct: 1,
              explain:
                "Der Switch arbeitet auf Schicht 2 und pflegt eine MAC-Adresstabelle je Port; Router entscheiden nach IP.",
            },
            {
              id: "imp_ap1-t-4_11",
              q: "Welcher Befehl fordert beim DHCP-Server eine neue Adresse an (Windows)?",
              options: [
                "ping /renew",
                "ipconfig /release und ipconfig /renew",
                "tracert /new",
                "netstat -dhcp",
              ],
              correct: 1,
              explain:
                "Erst Lease freigeben, dann neu anfordern – Standardvorgehen nach DHCP-Problemen.",
            },
          ],
        },
        {
          id: "ap1-t-5",
          title: "Aufgabentraining: Sicherheit & Datenschutz",
          content: [
            {
              type: "text",
              value:
                "Datenschutz und IT-Sicherheit stellen regelmäßig die punktreichste AP1-Aufgabe: Schutzziele zuordnen, Schutzbedarf begründen, technische und organisatorische Maßnahmen (TOMs) für Telearbeit nennen, Backup-Konzepte bewerten. Die Varianten hier decken die typischen Aufgabenmuster ab.",
            },
            { type: "heading", value: "Aufgabe 1: Schutzziele zuordnen (Variante)" },
            {
              type: "text",
              value:
                "Ordne jeder Maßnahme das primär unterstützte Schutzziel zu (Vertraulichkeit, Integrität, Verfügbarkeit) und begründe in einem Satz: (a) tägliche Datensicherung der Auftragsdaten, (b) TLS-Verschlüsselung beim Versand von Angeboten, (c) Hashwert-Prüfung heruntergeladener Installationsdateien, (d) USV am Server, (e) Festplattenverschlüsselung der Notebooks, (f) digitale Signatur unter Verträgen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n(a) Verfügbarkeit – nach Datenverlust können die Daten wiederhergestellt werden.\n(b) Vertraulichkeit – Dritte können die Übertragung nicht mitlesen.\n(c) Integrität – Manipulationen an der Datei werden durch abweichende Hashwerte erkannt.\n(d) Verfügbarkeit – der Server läuft bei Stromausfall weiter bzw. fährt geordnet herunter.\n(e) Vertraulichkeit – bei Diebstahl bleiben die Daten unlesbar.\n(f) Integrität (und Authentizität) – nachträgliche Änderungen werden erkennbar, der Urheber ist nachweisbar.",
            },
            { type: "heading", value: "Aufgabe 2: Schutzbedarf feststellen (Variante)" },
            {
              type: "text",
              value:
                "Eine Zahnarztpraxis kategorisiert ihre IT-Anwendungen in 'normal', 'hoch' und 'sehr hoch'. Begründe je eine plausible Einstufung für: (a) Praxisverwaltungssystem mit Patientenakten, (b) Textverarbeitung für allgemeine Briefe, (c) Software für Videosprechstunden.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n(a) Sehr hoch – Gesundheitsdaten sind besondere Kategorien nach Art. 9 DSGVO; Verlust oder Offenlegung kann existenzbedrohende Folgen (Bußgelder, Vertrauensverlust, Behandlungsfehler) haben.\n(b) Normal – allgemeine Korrespondenz ohne sensible Inhalte; Schäden wären begrenzt und überschaubar.\n(c) Hoch bis sehr hoch – es werden live Gesundheitsinformationen übertragen; Vertraulichkeit und Verfügbarkeit während der Sprechstunde sind kritisch.",
            },
            { type: "heading", value: "Aufgabe 3: TOMs für den Telearbeitsplatz (Variante)" },
            {
              type: "text",
              value:
                "Für neue Telearbeitsplätze sollen Maßnahmen definiert werden. Nenne je eine konkrete Maßnahme für: (a) Zutrittsschutz am häuslichen Arbeitsplatz, (b) Schutz der Daten auf dem Notebook, (c) sichere Anmeldung, (d) sichere Datenübertragung ins Firmennetz, (e) sicherer Transport von Datenträgern.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n(a) Separater, abschließbarer Arbeitsraum; Bildschirm nicht einsehbar; abschließbarer Schrank für das Notebook.\n(b) Vollverschlüsselung der SSD (z. B. BitLocker); keine lokalen Kopien sensibler Daten.\n(c) Starke Passwörter plus Zwei-Faktor-Authentifizierung.\n(d) VPN mit aktueller Verschlüsselung; nur firmenseitig verwaltete Geräte zulassen.\n(e) Verschlüsselte Datenträger, Übergabe nur an Berechtigte mit Protokollierung, stoß-/wassergeschützte Transportbehälter.",
            },
            {
              type: "heading",
              value: "Aufgabe 4: Wiederherstellungsschlüssel aufbewahren (Variante)",
            },
            {
              type: "text",
              value:
                "Die Notebooks werden mit BitLocker verschlüsselt. Bewerte vier Aufbewahrungsorte für den Wiederherstellungsschlüssel mit je einem Vor- und Nachteil: (a) als Textdatei auf demselben Notebook, (b) im Cloud-Speicher, (c) auf einem USB-Stick, (d) als Ausdruck im Tresor. Nenne anschließend die zwei Schutzziele, die die Verschlüsselung primär unterstützt, und erkläre das Restrisiko, wenn der Schlüssel verloren geht.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n(a) Vorteil: kein Zusatzmedium. Nachteil: im Wiederherstellungsfall nicht erreichbar – praktisch unbrauchbar.\n(b) Vorteil: von überall erreichbar. Nachteil: Abhängigkeit vom Anbieter, mögliche Datenschutz-/Zugriffsrisiken.\n(c) Vorteil: mobil, offline. Nachteil: leicht zu verlieren/zu entwenden.\n(d) Vorteil: ohne IT-Gerät nutzbar, physisch gesichert. Nachteil: Zugriff nur vor Ort, Pflege der Ablage nötig.\nSchutzziele: Vertraulichkeit (nur Berechtigte lesen die Daten) und Integrität (unbemerkte Manipulation am Datenträger wird verhindert/erkannt).\nRestrisiko: Ohne Passwort UND Wiederherstellungsschlüssel sind die Daten unwiederbringlich verloren – die Verschlüsselung wirkt dann gegen den Eigentümer.",
            },
            { type: "heading", value: "Aufgabe 5: Backup-Konzept bewerten (Variante)" },
            {
              type: "text",
              value:
                "Die Abrechnungssoftware eines Kunden sichert die Daten freitags beim Herunterfahren auf eine zweite Partition derselben Festplatte. a) Beschreibe zwei Risiken dieses Konzepts. b) Mache einen konkreten Verbesserungsvorschlag. c) Der Kunde möchte zusätzlich hohe Verfügbarkeit: Erkläre RAID 0, 1 und 5 in je einem Satz und sprich eine begründete Empfehlung aus (Ausfall einer Platte soll kompensiert werden, möglichst wenig Kapazitätsverlust).",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Risiko 1: Fällt die Festplatte aus, sind Original UND Sicherung verloren. Risiko 2: Nur wöchentliche Sicherung – bis zu eine Woche Datenverlust; zudem keine Versionierung und kein Schutz vor Ransomware (verschlüsselt beide Partitionen).\nb) 3-2-1-Regel umsetzen: tägliche automatische Sicherung auf ein externes Ziel (NAS + zusätzlich Offsite/Cloud), mindestens eine Kopie offline/unveränderlich, regelmäßige Wiederherstellungstests.\nc) RAID 0: Striping – Daten verteilt auf mehrere Platten, schnell, aber KEINE Redundanz (Ausfall einer Platte = Totalverlust). RAID 1: Spiegelung – volle Redundanz, aber 50 % Kapazitätsverlust. RAID 5: Striping mit verteilter Parität – Ausfall einer Platte wird kompensiert, Kapazitätsverlust nur eine Platte (n−1 nutzbar).\nEmpfehlung: RAID 5 – erfüllt beide Anforderungen. Wichtig im Antwortsatz: RAID ersetzt das Backup nicht.",
            },
            {
              type: "heading",
              value: "Aufgabe 6: Besondere Datenkategorien & Passwörter (Variante)",
            },
            {
              type: "text",
              value:
                "a) Die Empfangskraft fragt, für welche Daten ein besonderer gesetzlicher Schutz gilt. Antworte mit Rechtsgrundlage. b) Nenne zwei Kriterien für ein sicheres Passwort und begründe jeweils, warum sie die Sicherheit erhöhen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Besondere Kategorien personenbezogener Daten nach Art. 9 DSGVO: u. a. Gesundheitsdaten, religiöse/weltanschauliche Überzeugungen, politische Meinungen, biometrische und genetische Daten, sexuelle Orientierung. Ergänzend gelten BDSG und ggf. Landesdatenschutzgesetze.\nb) Ausreichende Länge (z. B. 12+ Zeichen): Der Aufwand für Brute-Force-Angriffe wächst exponentiell mit der Länge. Keine Wörterbuch-Begriffe/persönlichen Bezüge: Wörterbuch- und Social-Engineering-Angriffe laufen ins Leere. (Auch korrekt: Zeichenmix, Einmaligkeit je Dienst, Passwortmanager.)",
            },
          ],
          quiz: [
            {
              id: "imp_ap1-t-5_0",
              q: "Eine USV unterstützt primär welches Schutzziel?",
              options: ["Authentizität", "Verfügbarkeit", "Vertraulichkeit", "Integrität"],
              correct: 1,
              explain:
                "Sie überbrückt Stromausfälle – das System bleibt verfügbar bzw. fährt geordnet herunter.",
            },
            {
              id: "imp_ap1-t-5_1",
              q: "Hashwert-Prüfung eines Downloads unterstützt primär …",
              options: ["Integrität", "Verfügbarkeit", "Anonymität", "Vertraulichkeit"],
              correct: 0,
              explain: "Stimmt der Hash nicht, wurde die Datei verändert – Manipulation erkannt.",
            },
            {
              id: "imp_ap1-t-5_2",
              q: "Festplattenverschlüsselung auf Notebooks schützt primär die …",
              options: [
                "Garantie des Herstellers",
                "Vertraulichkeit bei Verlust oder Diebstahl",
                "Geschwindigkeit der SSD",
                "Verfügbarkeit bei Stromausfall",
              ],
              correct: 1,
              explain: "Ohne Schlüssel sind die Daten für den Dieb unlesbar.",
            },
            {
              id: "imp_ap1-t-5_3",
              q: "Welche Daten zählen zu den besonderen Kategorien nach Art. 9 DSGVO?",
              options: [
                "Gesundheitsdaten, biometrische Daten, religiöse Überzeugungen",
                "Artikelnummern, Bestellmengen und Lagerbestände eines Shops",
                "Vor- und Nachname sowie das Geburtsdatum einer Person",
                "Firmenanschrift, Handelsregisternummer und Umsatzsteuer-ID",
              ],
              correct: 0,
              explain:
                "Für diese Kategorien gilt ein grundsätzliches Verarbeitungsverbot mit engen Ausnahmen.",
            },
            {
              id: "imp_ap1-t-5_4",
              q: "Warum ist ein Backup auf einer zweiten Partition derselben Platte unzureichend?",
              options: [
                "Bei Plattenausfall sind Original und Sicherung gleichzeitig verloren",
                "Backups dürfen laut Norm ausschließlich auf Magnetband erfolgen",
                "Die Sicherung läuft zu schnell und wird dadurch unvollständig",
                "Mehrere Partitionen auf einer Platte sind grundsätzlich unzulässig",
              ],
              correct: 0,
              explain:
                "Gleicher physischer Datenträger = gemeinsamer Single Point of Failure; auch Ransomware trifft beide.",
            },
            {
              id: "imp_ap1-t-5_5",
              q: "Wofür steht die 3-2-1-Regel?",
              options: [
                "3 Kopien, 2 verschiedene Medien, 1 Kopie außer Haus",
                "3 Passwörter, 2 Faktoren, 1 Benutzer",
                "3 Festplatten in RAID, 2 Netzteile, 1 USV",
                "3 Backups pro Tag, 2 Admins, 1 Server",
              ],
              correct: 0,
              explain:
                "Der Standard für robuste Backup-Konzepte – gern als Verbesserungsvorschlag in der Prüfung.",
            },
            {
              id: "imp_ap1-t-5_6",
              q: "Welches RAID-Level bietet KEINE Redundanz?",
              options: ["RAID 6", "RAID 1", "RAID 5", "RAID 0"],
              correct: 3,
              explain:
                "RAID 0 verteilt nur (Striping) – fällt eine Platte aus, sind alle Daten weg.",
            },
            {
              id: "imp_ap1-t-5_7",
              q: "Bei RAID 5 mit vier 4-TB-Platten sind nutzbar …",
              options: ["4 TB", "16 TB", "12 TB", "8 TB"],
              correct: 2,
              explain:
                "n−1 Platten nutzbar: (4−1) × 4 TB = 12 TB; eine Plattenkapazität geht für die Parität auf.",
            },
            {
              id: "imp_ap1-t-5_8",
              q: "Eine Schutzbedarfsanalyse ermittelt …",
              options: [
                "die verfügbare Internetgeschwindigkeit, um Bandbreite für sicherheitskritische Anwendungen zu reservieren",
                "den aktuellen Marktwert der eingesetzten Software, um den Versicherungswert der IT-Systeme zu beziffern",
                "wie schwer die Folgen einer Beeinträchtigung je Anwendung wären, um das nötige Schutzniveau festzulegen",
                "die Anzahl der benötigten Softwarelizenzen, um Unter- und Überlizenzierung im Unternehmen aufzudecken",
              ],
              correct: 2,
              explain:
                "Kategorien wie normal/hoch/sehr hoch steuern, wie viel Aufwand in den Schutz fließt (BSI-Vorgehen).",
            },
            {
              id: "imp_ap1-t-5_9",
              q: "Welche Maßnahme gehört zum Zutrittsschutz (nicht Zugriffsschutz)?",
              options: [
                "Firewall-Regel",
                "Abschließbarer Arbeitsraum",
                "Starkes Passwort",
                "Festplattenverschlüsselung",
              ],
              correct: 1,
              explain:
                "Zutritt = physisch in den Raum; Zugang = ans System; Zugriff = an die Daten – die drei sauber trennen!",
            },
            {
              id: "imp_ap1-t-5_10",
              q: "Warum erhöht Zwei-Faktor-Authentifizierung die Sicherheit?",
              options: [
                "Sie verschlüsselt die Festplatte",
                "Sie beschleunigt die Anmeldung",
                "Ein gestohlenes Passwort allein genügt nicht mehr",
                "Sie macht Passwörter überflüssig",
              ],
              correct: 2,
              explain:
                "Ein zweiter, unabhängiger Faktor ist nötig. Wissen (Passwort) plus Besitz (Token/App) oder Merkmal (Biometrie).",
            },
            {
              id: "imp_ap1-t-5_11",
              q: "Eine Basis-Anforderung des BSI-Grundschutzes für Clients lautet 'Autoupdate-Mechanismen aktivieren'. Eine passende Umsetzung ist …",
              options: [
                "Updates gesammelt nur alle zwei Jahre im Rahmen der Hardware-Wartung manuell einspielen",
                "Updates grundsätzlich deaktivieren, um unerwartete Änderungen am System zu vermeiden",
                "Installation von Updates vollständig den Benutzern überlassen, ohne Vorgaben oder Kontrolle",
                "automatische Windows-/Anwendungsupdates aktivieren bzw. zentrale Updateverteilung (WSUS)",
              ],
              correct: 3,
              explain:
                "Zeitnahe Patches schließen bekannte Lücken – Grundpfeiler der Client-Absicherung.",
            },
          ],
        },
        {
          id: "ap1-t-6",
          title: "Aufgabentraining: Skript, SQL & Kommunikation",
          content: [
            {
              type: "text",
              value:
                "Drei weitere Dauerbrenner: Fehler in einem (PowerShell-)Skript anhand eines englischen Manuals finden, SQL-Abfragen schreiben oder beschreiben und Kommunikationsmodelle anwenden. Auch Lastenheft und Schulungsformen gehören in diesen Block.",
            },
            { type: "heading", value: "Aufgabe 1: Skriptfehler finden (Variante)" },
            {
              type: "text",
              value:
                "Das folgende Skript soll warnen, wenn der freie Speicherplatz auf Laufwerk D unter 20 % fällt. Es meldet aber Speicherplatzmangel, obwohl das Laufwerk halb leer ist. Finde die zwei Fehler anhand der Operatorenliste (-eq gleich, -ne ungleich, -gt größer, -lt kleiner):",
            },
            {
              type: "code",
              value:
                '$Drive = Get-Volume -DriveLetter D\n$Prozent = ($Drive.SizeRemaining / $Drive.Size) + 100\nIf ($Prozent -gt 20) {\n    Write-Host "Warnung: weniger als 20 % Speicherplatz frei"\n}\nelse {\n    Write-Host "Es ist ausreichend Speicherplatz verfuegbar"\n}',
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nFehler 1: Die Prozentrechnung ist falsch – statt '+ 100' muss '* 100' stehen (Anteil mal hundert ergibt Prozent). Mit '+ 100' liegt das Ergebnis immer über 100, die Bedingung wäre immer wahr.\nFehler 2: Der Vergleichsoperator ist falsch herum – gewarnt werden soll, wenn der Wert KLEINER als 20 ist: 'If ($Prozent -lt 20)'.\nKorrekte Zeilen:\n$Prozent = ($Drive.SizeRemaining / $Drive.Size) * 100\nIf ($Prozent -lt 20) { ... }",
            },
            { type: "heading", value: "Aufgabe 2: SQL-Abfragen schreiben (Variante)" },
            {
              type: "text",
              value:
                "Gegeben ist die Tabelle Ticket(TicketID, KundenID, Erfassungsdatum, Problembeschreibung, Prioritaet, Status). a) Schreibe eine Abfrage, die je Status die Anzahl der Tickets ausgibt. b) Schreibe eine Abfrage, die zählt, wie viele verschiedene Kunden Tickets erstellt haben. c) Beschreibe in Worten, was diese Abfrage liefert: SELECT Erfassungsdatum, Problembeschreibung FROM Ticket WHERE Status = 'offen' AND Prioritaet = 'hoch' ORDER BY Erfassungsdatum ASC;",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) SELECT Status, COUNT(*) AS Anzahl FROM Ticket GROUP BY Status;\nb) SELECT COUNT(DISTINCT KundenID) AS AnzahlKunden FROM Ticket;\nc) Die Abfrage liefert Erfassungsdatum und Problembeschreibung aller offenen Tickets mit hoher Priorität, sortiert aufsteigend nach Datum – also die ältesten dringenden offenen Fälle zuerst (typische Arbeitsliste für den Support).",
            },
            { type: "heading", value: "Aufgabe 3: Vier-Ohren-Modell anwenden (Variante)" },
            {
              type: "text",
              value:
                "Ein Kunde sagt am Telefon: 'Das neue Update hat schon wieder alles langsamer gemacht.' Zerlege die Aussage nach dem Vier-Seiten-Modell von Schulz von Thun (Sachinhalt, Selbstoffenbarung, Beziehung, Appell).",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (Beispielformulierungen):\nSachinhalt: 'Seit dem Update ist die Anwendung langsamer als vorher.'\nSelbstoffenbarung: 'Ich bin frustriert und fühle mich in meiner Arbeit ausgebremst.'\nBeziehung: 'Ihr testet eure Updates nicht ausreichend, bevor ihr sie uns gebt.'\nAppell: 'Beheben Sie das Performance-Problem schnell bzw. nehmen Sie das Update zurück.'\nAndere sinnvolle Formulierungen sind zulässig – wichtig ist die klare Trennung der vier Ebenen.",
            },
            { type: "heading", value: "Aufgabe 4: Schulungsformen beschreiben (Variante)" },
            {
              type: "text",
              value:
                "Nach der Einführung einer neuen Software sollen 30 Mitarbeiter eingewiesen werden. Beschreibe drei der folgenden Vermittlungsformen in je 1–2 Sätzen: Schulung am Arbeitsplatz, Webinar, Video-Tutorials, Multiplikatoren-Schulung.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nSchulung am Arbeitsplatz: Ein Trainer schult direkt am eigenen Gerät in der echten Arbeitsumgebung – praxisnah und individuell, aber personalintensiv.\nWebinar: Live-Online-Schulung für viele Teilnehmer gleichzeitig mit Rückfragemöglichkeit – ortsunabhängig und günstig skalierbar.\nVideo-Tutorials: Aufgezeichnete Lerneinheiten, jederzeit und beliebig oft abrufbar – ideal zum Nachschlagen, aber ohne direkte Rückfragen.\nMultiplikatoren-Schulung: Ausgewählte Mitarbeiter (Key User) werden intensiv geschult und geben ihr Wissen in den Abteilungen weiter – nachhaltig, baut interne Ansprechpartner auf.",
            },
            { type: "heading", value: "Aufgabe 5: Lastenheft & Angebot (Variante)" },
            {
              type: "text",
              value:
                "a) Ein Kunde soll für eine geplante Serverumstellung ein Lastenheft liefern. Nenne fünf Inhaltsaspekte, die üblicherweise hineingehören. b) Nenne drei formale Bestandteile, die im darauf folgenden Angebot deines Unternehmens nicht fehlen dürfen. c) Grenze Lastenheft und Pflichtenheft in einem Satz ab.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Ausgangssituation/Ist-Zustand – Ziele des Projekts – fachliche und technische Anforderungen (Muss-/Kann-Kriterien) – Mengengerüst (Nutzer, Datenvolumen) – Rahmenbedingungen (Termine, Budget, Standards/Compliance) – Abnahmekriterien (fünf genügen).\nb) Ansprechpartner mit Kontaktdaten – Bindungsfrist des Angebots – Preisangaben mit Zahlungsbedingungen – Datum/Angebotsnummer – Leistungsbeschreibung und Lieferzeit.\nc) Das Lastenheft beschreibt, WAS der Auftraggeber fordert; das Pflichtenheft beschreibt, WIE der Auftragnehmer die Forderungen umsetzt.",
            },
            { type: "heading", value: "Aufgabe 6: Remote- vs. Vor-Ort-Wartung (Variante)" },
            {
              type: "text",
              value:
                "Ein Kunde überlegt, ob Wartungsarbeiten künftig remote statt vor Ort erbracht werden sollen. Nenne je zwei Vor- und Nachteile der Remote-Wartung.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nVorteile: keine Anfahrtszeit/-kosten – schnellere Reaktionszeit bei Störungen – flexiblere Terminierung – auch kurze Einsätze wirtschaftlich.\nNachteile: kein Zugriff auf Hardware (Tausch, Verkabelung unmöglich) – abhängig von funktionierender Internetverbindung – Sicherheitsrisiko des Fernzugangs muss beherrscht werden (VPN, MFA, Protokollierung) – persönlicher Kundenkontakt fehlt.",
            },
          ],
          quiz: [
            {
              id: "imp_ap1-t-6_0",
              q: "Welcher PowerShell-Operator prüft auf 'kleiner als'?",
              options: ["-ne", "-gt", "-lt", "-eq"],
              correct: 2,
              explain:
                "less than; -gt = greater than, -eq = equals, -ne = not equals. Die Operatorenliste liegt in der Prüfung meist als englisches Manual bei.",
            },
            {
              id: "imp_ap1-t-6_1",
              q: "Wie rechnet man einen Anteil (0,45) in Prozent um?",
              options: [
                "Durch 100 teilen → 0,0045 %",
                "Quadrieren",
                "100 addieren → 100,45 %",
                "Mit 100 multiplizieren → 45 %",
              ],
              correct: 3,
              explain:
                "Genau dieser Fehler (+100 statt ×100) ist der klassische Stolperstein bei dieser Aufgabenart.",
            },
            {
              id: "imp_ap1-t-6_2",
              q: "Welche SQL-Klausel gruppiert Zeilen für Aggregatfunktionen?",
              options: ["ORDER BY", "WHERE", "GROUP BY", "JOIN"],
              correct: 2,
              explain: "GROUP BY Status mit COUNT(*) liefert die Anzahl je Statuswert.",
            },
            {
              id: "imp_ap1-t-6_3",
              q: "Was liefert COUNT(DISTINCT KundenID)?",
              options: [
                "Die Anzahl aller Zeilen",
                "Die Anzahl unterschiedlicher Kunden",
                "Die Summe aller IDs",
                "Die größte KundenID",
              ],
              correct: 1,
              explain:
                "DISTINCT entfernt Duplikate vor dem Zählen – Kunden mit mehreren Tickets zählen nur einmal.",
            },
            {
              id: "imp_ap1-t-6_4",
              q: "Wofür sorgt ORDER BY Erfassungsdatum ASC?",
              options: [
                "Zufällige Reihenfolge",
                "Aufsteigende Sortierung",
                "Löschen alter Einträge",
                "Absteigende Sortierung",
              ],
              correct: 1,
              explain:
                "Älteste Einträge zuerst. ASC = ascending; DESC wäre absteigend (neueste zuerst).",
            },
            {
              id: "imp_ap1-t-6_5",
              q: "Die vier Seiten einer Nachricht nach Schulz von Thun sind …",
              options: [
                "Sachinhalt, Selbstoffenbarung, Beziehung, Appell",
                "Lob, Kritik, Wunsch, Befehl",
                "Frage, Antwort, Pause, Schluss",
                "Sender, Empfänger, Kanal, Störung",
              ],
              correct: 0,
              explain:
                "Jede Aussage transportiert alle vier Ebenen – Prüfungsaufgabe: eine Kundenaussage zerlegen.",
            },
            {
              id: "imp_ap1-t-6_6",
              q: "Was beschreibt ein Use-Case-Diagramm?",
              options: [
                "Die physische Verkabelung des Netzwerks mit allen Switches",
                "Akteure und die Anwendungsfälle, die sie mit dem System ausführen",
                "Den zeitlichen Projektablauf mit Meilensteinen und Puffern",
                "Die Datenbankstruktur mit Tabellen und Fremdschlüsselbeziehungen",
              ],
              correct: 1,
              explain:
                "Strichmännchen (Akteure) verbunden mit Ellipsen (Anwendungsfälle) im Systemrahmen – UML-Grundwissen der AP1.",
            },
            {
              id: "imp_ap1-t-6_7",
              q: "Das Lastenheft erstellt …",
              options: [
                "der Auftragnehmer – es beschreibt die Umsetzung",
                "der Auftraggeber",
                "die IHK",
                "der Datenschutzbeauftragte",
              ],
              correct: 1,
              explain:
                "Es beschreibt seine Anforderungen (das WAS). Antwort auf das Lastenheft ist das Pflichtenheft des Auftragnehmers (das WIE).",
            },
            {
              id: "imp_ap1-t-6_8",
              q: "Welche Schulungsform skaliert am besten für 200 Mitarbeiter an 5 Standorten?",
              options: [
                "Einzelschulung am Arbeitsplatz für jeden",
                "Gar keine Schulung",
                "Externes Präsenzseminar für alle gleichzeitig in einem Raum",
                "Webinare bzw. Video-Tutorials",
              ],
              correct: 3,
              explain:
                "Online-Formate erreichen viele Personen ortsunabhängig; Multiplikatoren ergänzen für die Praxis vor Ort.",
            },
            {
              id: "imp_ap1-t-6_9",
              q: "Ein Vorteil der Multiplikatoren-Schulung ist …",
              options: [
                "dauerhafte interne Ansprechpartner in den Abteilungen",
                "dass sie nur extern stattfinden kann",
                "dass niemand geschult werden muss",
                "dass sie keine Vorbereitung braucht",
              ],
              correct: 0,
              explain:
                "Key User tragen Wissen weiter und fangen Alltagsfragen ab – entlastet den IT-Support.",
            },
            {
              id: "imp_ap1-t-6_10",
              q: "Welcher formale Bestandteil gehört in ein Angebot?",
              options: [
                "Die Urlaubsplanung des Technikers",
                "Das Betriebssystem des Kunden",
                "Der Quellcode der Software",
                "Bindungsfrist des Angebots",
              ],
              correct: 3,
              explain:
                "Dazu Ansprechpartner, Datum, Preise, Zahlungs- und Lieferbedingungen – formale Aspekte sind 1-Punkt-Klassiker.",
            },
            {
              id: "imp_ap1-t-6_11",
              q: "Remote-Wartung scheitert prinzipbedingt bei …",
              options: [
                "physischen Arbeiten wie Hardwaretausch oder Verkabelung",
                "Konfigurationsänderungen an Diensten und Betriebssystemen",
                "der Installation von Software-Updates und Patches",
                "der Auswertung von Logdateien und Ereignisprotokollen",
              ],
              correct: 0,
              explain:
                "Alles rein Logische geht remote; sobald angefasst werden muss, ist der Vor-Ort-Einsatz unvermeidlich.",
            },
          ],
        },
      ],
    },
  ],
};
