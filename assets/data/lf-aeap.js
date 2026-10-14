window.LF_CONTENT = window.LF_CONTENT || {};
window.LF_CONTENT["aeap"] = {
  topics: [
    {
      id: "ae-ap2-t",
      title: "Aufgabentraining",
      lessons: [
        {
          id: "ae-t-1",
          title: "Aufgabentraining: Algorithmik & Pseudocode",
          content: [
            {
              type: "text",
              value:
                "Die FIAE-Klausur 'Planen eines Softwareproduktes' (90 Minuten, 100 Punkte, 4 Aufgaben mit durchgehendem Szenario) verlangt regelmäßig Array-Verarbeitung, Schreibtischtests und das Vervollständigen von Pseudocode – wie im Original Winter 2021/22. Hinweise aus dem Original: Antworten stichwortartig erlaubt, bei geforderter Anzahl werden nur die ersten Angaben gewertet.",
            },
            { type: "heading", value: "Aufgabe 1: Schreibtischtest durchführen" },
            {
              type: "text",
              value:
                "Gegeben (Array werte = [4, 1, 3, 2], n = 4):\nFÜR i = 0 BIS n-2\n  FÜR j = 0 BIS n-2-i\n    WENN werte[j] > werte[j+1] DANN\n      tausche(werte[j], werte[j+1])\n    ENDE WENN\n  ENDE FÜR\nENDE FÜR\na) Welches Verfahren liegt vor? b) Gib den Array-Inhalt nach JEDEM Durchlauf der äußeren Schleife an. c) Wie viele Vergleiche finden insgesamt statt?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Bubble Sort (aufsteigend), optimiert: Die innere Schleife wird pro Durchlauf kürzer.\nb) Nach i=0: [1, 3, 2, 4] (Vergleiche 4>1 tausch, 4>3 tausch, 4>2 tausch). Nach i=1: [1, 2, 3, 4] (1>3 nein, 3>2 tausch). Nach i=2: [1, 2, 3, 4] (1>2 nein).\nc) Vergleiche: 3 + 2 + 1 = 6 = n(n−1)/2. In der AP die Wertetabelle sauber je Schritt führen – Folgefehler werden anerkannt, wenn der Weg stimmt.",
            },
            { type: "heading", value: "Aufgabe 2: Pseudocode vervollständigen" },
            {
              type: "text",
              value:
                "Eine Methode soll den Durchschnitt aller Werte eines Arrays messwerte[] (n Elemente, n > 0) berechnen, dabei aber Ausreißer über 1000 ignorieren. Vervollständige den Pseudocode:\nsumme = 0\nanzahl = 0\nFÜR i = 0 BIS n-1\n  WENN ___(1)___ DANN\n    summe = ___(2)___\n    anzahl = ___(3)___\n  ENDE WENN\nENDE FÜR\nWENN anzahl > 0 DANN\n  RÜCKGABE ___(4)___\nSONST\n  RÜCKGABE 0\nENDE WENN\nErkläre außerdem, warum die letzte Verzweigung nötig ist.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n(1) messwerte[i] <= 1000\n(2) summe + messwerte[i]\n(3) anzahl + 1\n(4) summe / anzahl\nDie abschließende Verzweigung verhindert eine Division durch null für den Fall, dass ALLE Werte Ausreißer sind – Robustheitsprüfungen dieser Art geben in der Bewertung eigene Punkte.",
            },
            { type: "heading", value: "Aufgabe 3: Algorithmus entwerfen" },
            {
              type: "text",
              value:
                "Ein Webshop speichert Tagesumsätze in umsatz[0..29] (30 Tage). Entwirf einen Pseudocode-Algorithmus, der die längste Serie aufeinanderfolgender Tage mit Umsatz über 5.000 € ermittelt und ausgibt.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\naktuell = 0\nmaximum = 0\nFÜR i = 0 BIS 29\n  WENN umsatz[i] > 5000 DANN\n    aktuell = aktuell + 1\n    WENN aktuell > maximum DANN\n      maximum = aktuell\n    ENDE WENN\n  SONST\n    aktuell = 0\n  ENDE WENN\nENDE FÜR\nAUSGABE maximum\nKernidee: Zähler bei Treffern erhöhen, bei Unterbrechung zurücksetzen, Maximum mitführen. Der häufigste Fehler ist das fehlende Zurücksetzen im SONST-Zweig.",
            },
            { type: "heading", value: "Themen-Wahrscheinlichkeit: Was kommt wie oft dran?" },
            {
              type: "text",
              value:
                "Diese Auswertung basiert auf einer automatischen Volltext-Analyse von 44 Original-Prüfungen (FIAE-Prüfungen (GA1 und AP Teil 2), Jahrgänge 2011–2023). Der Prozentwert gibt an, in wie vielen der analysierten Prüfungen das Thema vorkam. Wichtig für die Einordnung: Ein Großteil der Prüfungen wurde per Texterkennung (OCR) ausgewertet – die Werte sind Näherungen, keine Garantie. Und: Vergangene Häufigkeit ist keine Zusage für deine Prüfung; die Prüfungserstellung variiert Themen bewusst. Als Lernstrategie taugt die Liste trotzdem: Was in über der Hälfte der Prüfungen vorkam, gehört in jede Vorbereitung.",
            },
            {
              type: "code",
              value:
                " 86 %  █████████████████░░░  Struktogramm / Pseudocode / Algorithmus  (fast sicher)\n 80 %  ████████████████░░░░  SQL / Datenbanken  (fast sicher)\n 66 %  █████████████░░░░░░░  UML-Diagramme  (fast sicher)\n 66 %  █████████████░░░░░░░  OOP / Programmierung  (fast sicher)\n 55 %  ███████████░░░░░░░░░  ER-Modell / Kardinalität  (sehr häufig)\n 30 %  ██████░░░░░░░░░░░░░░  REST / API / JSON / XML  (häufig)\n 20 %  ████░░░░░░░░░░░░░░░░  Netzplan / Gantt / krit. Pfad  (gelegentlich)\n 20 %  ████░░░░░░░░░░░░░░░░  Arbeitsrecht / Kündigung / Arbeitsvertrag  (gelegentlich)\n 18 %  ████░░░░░░░░░░░░░░░░  Angebotsvergleich / Bezugskalk. / Skonto  (gelegentlich)\n 16 %  ███░░░░░░░░░░░░░░░░░  Verschlüsselung / Zertifikate / Hash  (gelegentlich)\n 16 %  ███░░░░░░░░░░░░░░░░░  Software-Test / QS  (gelegentlich)\n 14 %  ███░░░░░░░░░░░░░░░░░  Lastenheft / Pflichtenheft  (gelegentlich)\n 14 %  ███░░░░░░░░░░░░░░░░░  SLA / ITIL / Ticket / Incident  (gelegentlich)\n 11 %  ██░░░░░░░░░░░░░░░░░░  Cloud (IaaS/PaaS/SaaS)  (gelegentlich)\n 11 %  ██░░░░░░░░░░░░░░░░░░  Skript / Automatisierung  (gelegentlich)\n 11 %  ██░░░░░░░░░░░░░░░░░░  Zahlensysteme / Speichergrößen  (gelegentlich)\n 11 %  ██░░░░░░░░░░░░░░░░░░  Softwareergonomie / Barrierefreiheit  (gelegentlich)\n  9 %  ██░░░░░░░░░░░░░░░░░░  DSGVO / Datenschutz  (gelegentlich)",
            },
            {
              type: "note",
              value:
                "Lernstrategie daraus: 1. Alles ab „sehr häufig“ zuerst sicher beherrschen – das ist der Grundstock der Punkte. 2. „Häufig“-Themen mindestens einmal mit Übungsaufgabe durcharbeiten. 3. „Gelegentlich“-Themen über die Lernkarten und das Blitz-Training abdecken – hier reicht Überblickswissen für Teilpunkte. Rechenthemen (Subnetting, Kalkulation, Netzplan) immer mit Rechenweg üben: Sie kommen nicht nur oft, sie geben auch planbare Punkte.",
            },
          ],
          quiz: [
            {
              id: "imp_ae-t-1_0",
              q: "Wie viele Vergleiche braucht Bubble Sort bei n Elementen maximal?",
              options: ["n", "n(n−1)/2", "n²+n", "log₂(n)"],
              correct: 1,
              explain:
                "Die Summenformel 1+2+…+(n−1) – bei n = 4 also 6 Vergleiche, wie im Schreibtischtest.",
            },
            {
              id: "imp_ae-t-1_1",
              q: "Was prüft die Bedingung 'anzahl > 0' vor einer Division?",
              options: [
                "Sie ist überflüssig, da Divisionen nie fehlschlagen",
                "Sie sortiert das Array vor der Division aufsteigend",
                "Sie verhindert eine Division durch null (Laufzeitfehler)",
                "Sie rundet das Divisionsergebnis auf ganze Zahlen",
              ],
              correct: 2,
              explain:
                "Defensive Programmierung wird in den Lösungssätzen ausdrücklich honoriert – Randfälle benennen!",
            },
            {
              id: "imp_ae-t-1_2",
              q: "FÜR i = 0 BIS n-2 läuft bei n = 5 über welche Werte?",
              options: ["0 bis 5", "1 bis 4", "0 bis 4", "0, 1, 2, 3"],
              correct: 3,
              explain:
                "n−2 = 3, also 4 Durchläufe – Indexgrenzen exakt lesen ist die halbe Pseudocode-Miete.",
            },
            {
              id: "imp_ae-t-1_3",
              q: "Warum wird beim optimierten Bubble Sort die innere Schleife pro Durchlauf kürzer?",
              options: [
                "Der Computer wird müde",
                "Das ist ein Fehler im Algorithmus",
                "Aus Speichergründen",
                "Das Ende des Arrays ist bereits sortiert",
              ],
              correct: 3,
              explain:
                "Die größten Elemente stehen fest. Nach Durchlauf k stehen die k größten Elemente final – Vergleiche dorthin wären verschwendet.",
            },
            {
              id: "imp_ae-t-1_4",
              q: "Was bedeutet RÜCKGABE (return) in einer Methode?",
              options: [
                "Der Wert wird als Ausgabe an den Standarddrucker gesendet",
                "Die umgebende Schleife beginnt erneut beim ersten Durchlauf",
                "Die Methode endet sofort und liefert den Wert an den Aufrufer",
                "Das gesamte Programm startet von der main-Methode neu",
              ],
              correct: 2,
              explain:
                "Nach RÜCKGABE wird kein weiterer Code der Methode ausgeführt – relevant beim Lesen verschachtelter Logik.",
            },
            {
              id: "imp_ae-t-1_5",
              q: "Ein Algorithmus soll den ZWEITgrößten Wert finden. Welcher Ansatz ist korrekt?",
              options: [
                "Das Array nach jedem Vergleich leeren und mit den verbleibenden Werten neu befüllen, bis nur noch ein Wert übrig ist",
                "Zwei Variablen (max, zweitMax) in einem Durchlauf mitführen und beim neuen Maximum das alte nach zweitMax schieben",
                "Nur das Maximum in einem Durchlauf suchen; der zweitgrößte Wert steht danach automatisch an zweiter Position",
                "Den Mittelwert aller Elemente berechnen; der zweitgrößte Wert liegt immer direkt über dem Durchschnitt",
              ],
              correct: 1,
              explain:
                "Alternativ sortieren und Element [n−2] nehmen – der Eindurchlauf-Ansatz ist aber effizienter und die elegantere AP-Antwort.",
            },
            {
              id: "imp_ae-t-1_6",
              q: "Was ist ein Off-by-One-Fehler?",
              options: [
                "Ein Hardwaredefekt an einem einzelnen Speicherbaustein",
                "Ein Datenbankfehler durch eine verletzte Fremdschlüsselbeziehung",
                "Eine um eins falsche Grenze oder ein um eins falscher Index",
                "Ein Rundungsfehler bei Gleitkommazahlen in der letzten Stelle",
              ],
              correct: 2,
              explain:
                "Z. B. BIS n statt n−1. Der häufigste Fehler in Schleifenaufgaben – Grenzwerte im Schreibtischtest explizit prüfen.",
            },
            {
              id: "imp_ae-t-1_7",
              q: "Wozu dient eine Hilfsvariable wie 'aktuell' in der Serien-Aufgabe?",
              options: [
                "Sie hält den Zwischenzustand (laufende Serienlänge) zwischen den Schleifendurchläufen",
                "Sie dient nur der Lesbarkeit und kann ersatzlos entfallen, ohne das Ergebnis zu ändern",
                "Sie reduziert den Speicherverbrauch, da das Array dadurch kleiner dimensioniert werden kann",
                "Sie ersetzt das Array vollständig, da alle Werte nacheinander in ihr abgelegt werden",
              ],
              correct: 0,
              explain:
                "Zustand über Durchläufe mitführen (Zähler, Maximum, Flag) ist DAS Entwurfsmuster der AP-Algorithmikaufgaben.",
            },
            {
              id: "imp_ae-t-1_8",
              q: "Welche Aussage zu verschachtelten Schleifen ist korrekt?",
              options: [
                "Die innere Schleife läuft je Durchlauf der äußeren komplett durch",
                "Innere und äußere Schleife laufen parallel in getrennten Threads",
                "Verschachtelte Schleifen sind in modernen Sprachen nicht erlaubt",
                "Die äußere Schleife läuft unabhängig von ihrer Bedingung nur einmal",
              ],
              correct: 0,
              explain:
                "Bei n äußeren und m inneren Durchläufen ergeben sich n×m Ausführungen des inneren Rumpfs – Basis jeder Aufwandsabschätzung.",
            },
            {
              id: "imp_ae-t-1_9",
              q: "Ein Array soll rückwärts ausgegeben werden. Welche Schleife passt?",
              options: [
                "FÜR i = n-1 ABWÄRTS BIS 0: AUSGABE werte[i]",
                "FÜR i = n BIS 1: AUSGABE werte[i]",
                "FÜR i = 0 BIS n-1: AUSGABE werte[i]",
                "WHILE wahr: AUSGABE werte[0]",
              ],
              correct: 0,
              explain:
                "Die Variante „FÜR i = n BIS 1“ ist die Falle: werte[n] existiert nicht – gültige Indizes laufen nur von 0 bis n−1.",
            },
            {
              id: "imp_ae-t-1_10",
              q: "Was gehört laut Original-Bearbeitungshinweisen zur Antwortform der FIAE-Klausur?",
              options: [
                "Alle Antworten sind in englischer Fachsprache zu formulieren, da die Klausur international ausgewertet wird",
                "Stichwortartige Antworten genügen, sofern nicht ausdrücklich ganze Sätze oder ein Brief gefordert sind",
                "Sämtliche Aufgaben sind als Multiple-Choice gestellt, eigene Formulierungen sind nicht vorgesehen",
                "Jede Antwort ist als zusammenhängender Aufsatz in vollständigen Sätzen mit Einleitung und Schluss zu verfassen",
              ],
              correct: 1,
              explain:
                "Und: Bei geforderter Anzahl werden nur die ersten Angaben gewertet – Mehrarbeit bringt keine Zusatzpunkte.",
            },
            {
              id: "imp_ae-t-1_11",
              q: "Welche Strategie passt zur 90-Minuten-Klausur mit 4 Aufgaben à ca. 25 Punkte?",
              options: [
                "Nur zwei der vier Aufgaben vollständig bearbeiten, da 50 Punkte immer sicher zum Bestehen reichen",
                "Mit der stärksten eigenen Aufgabe beginnen und die Zeit je Teilaufgabe an deren Punktzahl ausrichten",
                "Streng der Reihenfolge folgen, selbst wenn eine einzelne Aufgabe die gesamte Restzeit verschlingt",
                "Die ersten 30 Minuten ausschließlich mit dem Lesen aller Aufgabenstellungen verbringen",
              ],
              correct: 1,
              explain:
                "Punkte sind überall gleich viel wert – ca. 0,9 Minuten je Punkt als Taktgeber.",
            },
          ],
        },
        {
          id: "ae-t-2",
          title: "Aufgabentraining: SQL & Datenmodell",
          content: [
            {
              type: "text",
              value:
                "Im Original Winter 2021/22 waren SELECT-Abfragen mit mehreren JOINs sowie das Ableiten von Relationen aus einem ER-Modell gefordert. Dieses Training nutzt ein vergleichbares Szenario: Eine Fahrschule verwaltet schueler(s_id, name, ort), kurs(k_id, bezeichnung, preis), teilnahme(s_id, k_id, anmeldedatum, bezahlt).",
            },
            { type: "heading", value: "Aufgabe 1: Mehrtabellen-Abfrage schreiben" },
            {
              type: "text",
              value:
                "Gib je Kurs die Bezeichnung und die Anzahl der angemeldeten Schüler aus – aber nur für Kurse mit mindestens 5 Teilnahmen, sortiert nach Anzahl absteigend. Schreibe die vollständige SQL-Anweisung.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nSELECT k.bezeichnung, COUNT(t.s_id) AS anzahl\nFROM kurs k\nJOIN teilnahme t ON t.k_id = k.k_id\nGROUP BY k.k_id, k.bezeichnung\nHAVING COUNT(t.s_id) >= 5\nORDER BY anzahl DESC;\nBewertungsrelevant: korrekter JOIN über den Fremdschlüssel, Aggregat mit GROUP BY (über den Schlüssel gruppieren, sonst verschmelzen Namensgleiche), Gruppenfilter im HAVING (nicht WHERE), Sortierung. Wer Kurse OHNE Teilnahmen mit 0 anzeigen wollte, bräuchte LEFT JOIN und COUNT(t.s_id) – solche Varianten kurz zu benennen bringt Zusatzpunkte.",
            },
            { type: "heading", value: "Aufgabe 2: ER-Modell in Relationen überführen" },
            {
              type: "text",
              value:
                "Modell: SCHÜLER —(n:m, mit Attributen anmeldedatum, bezahlt)— KURS; KURS —(n:1)— FAHRLEHRER(f_id, name). Leite das vollständige Relationenmodell ab (Schreibweise: tabelle(schlüssel unterstrichen gedacht, attribute, fremdschlüssel↑)).",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nschueler(s_id, name, ort)\nfahrlehrer(f_id, name)\nkurs(k_id, bezeichnung, preis, f_id↑)   ← n:1: Fremdschlüssel auf der n-Seite\nteilnahme(s_id↑, k_id↑, anmeldedatum, bezahlt)   ← n:m: Zwischentabelle, zusammengesetzter Primärschlüssel (s_id, k_id); die Beziehungsattribute wandern in die Zwischentabelle.\nGenau diese zwei Regeln (n:1 → Fremdschlüssel, n:m → Zwischentabelle mit beiden Schlüsseln) tragen die Original-Aufgabe.",
            },
            { type: "heading", value: "Aufgabe 3: Datenänderung mit Bedacht" },
            {
              type: "text",
              value:
                "a) Alle Kurspreise des Kurses 'BF17' sollen um 5 % steigen – formuliere die SQL-Anweisung. b) Erkläre, warum die Anweisung ohne WHERE gefährlich wäre und welche zwei Maßnahmen dich in der Praxis vor so einem Fehler schützen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) UPDATE kurs SET preis = preis * 1.05 WHERE bezeichnung = 'BF17';\nb) Ohne WHERE würden ALLE Kurspreise erhöht. Schutzmaßnahmen: (1) vorher ein SELECT mit derselben WHERE-Bedingung ausführen und die Trefferzahl prüfen; (2) die Änderung in einer Transaktion ausführen (BEGIN → UPDATE → Kontrolle → COMMIT, sonst ROLLBACK). Auch zulässig: Backup/Testsystem zuerst. Diese Begründungsfragen sind typische 2-Punkte-Lieferanten.",
            },
          ],
          quiz: [
            {
              id: "imp_ae-t-2_0",
              q: "Wohin kommt der Fremdschlüssel bei einer n:1-Beziehung (viele Kurse, ein Fahrlehrer)?",
              options: [
                "Es braucht keinen",
                "In eine Zwischentabelle zwingend",
                "Auf die 1-Seite: fahrlehrer erhält k_id",
                "Auf die n-Seite: kurs erhält f_id",
              ],
              correct: 3,
              explain:
                "Stünde k_id beim Fahrlehrer, könnte er nur EINEN Kurs halten – die Richtung ist der Standard-Denkfehler.",
            },
            {
              id: "imp_ae-t-2_1",
              q: "Wie lautet der Primärschlüssel der Zwischentabelle teilnahme?",
              options: [
                "Zusammengesetzt aus (s_id, k_id)",
                "Nur anmeldedatum",
                "Nur s_id",
                "Sie braucht keinen",
              ],
              correct: 0,
              explain:
                "Die Kombination verhindert doppelte Anmeldungen desselben Schülers zum selben Kurs; soll Mehrfachbelegung über Zeiträume möglich sein, käme das Datum hinzu (begründen!).",
            },
            {
              id: "imp_ae-t-2_2",
              q: "Warum liefert COUNT(t.s_id) bei LEFT JOIN für teilnahmelose Kurse 0, COUNT(*) aber 1?",
              options: [
                "Beide Varianten liefern grundsätzlich immer identische Ergebnisse zurück",
                "COUNT(spalte) ignoriert NULL-Werte; COUNT(*) zählt die (eine) Ergebniszeile mit NULL-Spalten",
                "Ein LEFT JOIN erzeugt für teilnahmelose Kurse überhaupt keine Ergebniszeilen",
                "COUNT(*) ist eine fehlerhafte Legacy-Funktion und sollte nie verwendet werden",
              ],
              correct: 1,
              explain:
                "Der NULL-Effekt beim Zählen ist eine beliebte Detailfrage – COUNT(fremdschlüssel) ist beim LEFT JOIN die korrekte Wahl.",
            },
            {
              id: "imp_ae-t-2_3",
              q: "Was bewirkt eine Transaktion (BEGIN … COMMIT/ROLLBACK)?",
              options: [
                "Sie verschlüsselt die betroffenen Datensätze automatisch",
                "Mehrere Anweisungen wirken ganz oder gar nicht (Atomarität)",
                "Sie dient nur der Lesbarkeit ohne technische Wirkung",
                "Sie beschleunigt jede einzelne Abfrage durch Zwischenspeicherung",
              ],
              correct: 1,
              explain:
                "Bei Fehlern ist ROLLBACK möglich. ACID-Eigenschaften: Atomarität, Konsistenz, Isolation, Dauerhaftigkeit – Stichwort für die Begründung.",
            },
            {
              id: "imp_ae-t-2_4",
              q: "Welche Abfrage findet Schüler OHNE einzige Kursteilnahme?",
              options: [
                "SELECT s.name FROM schueler s LEFT JOIN teilnahme t ON t.s_id = s.s_id WHERE t.s_id IS NULL",
                "SELECT * FROM schueler s WHERE s.teilnahme = 0 GROUP BY s.name ORDER BY s.name",
                "SELECT s.name FROM schueler s JOIN teilnahme t ON t.s_id = s.s_id GROUP BY s.name",
                "DELETE FROM schueler WHERE s_id IN (SELECT s_id FROM teilnahme)",
              ],
              correct: 0,
              explain:
                "LEFT JOIN + IS-NULL-Filter ist DAS Muster für 'ohne Zuordnung' – der INNER JOIN würde diese Schüler gerade ausblenden.",
            },
            {
              id: "imp_ae-t-2_5",
              q: "Was prüft die Bedingung bezahlt = 0 sinnvollerweise in der Praxis zusätzlich?",
              options: [
                "Die Serverzeit, weil Vergleiche mit 0 nur bei exakt synchronisierter Systemuhr korrekt ausgewertet werden",
                "Nichts – der Wert 0 wird von jedem Datenbanksystem automatisch in jede beliebige Konvention übersetzt",
                "Die Schriftart der Spaltenwerte, da Ziffern je nach eingestelltem Zeichensatz anders codiert werden",
                "Den Datentyp/die Konvention: Boolean-Spalten können auch als true/false oder 'J'/'N' modelliert sein",
              ],
              correct: 3,
              explain:
                "In der AP die Annahme kurz benennen ('bezahlt: 0 = nein, 1 = ja') – dokumentierte Annahmen werden akzeptiert.",
            },
            {
              id: "imp_ae-t-2_6",
              q: "Wozu dient ein Alias (kurs k, teilnahme t)?",
              options: [
                "Er ändert den Tabellennamen dauerhaft",
                "Kurze, eindeutige Tabellenbezüge",
                "Er sortiert das Ergebnis",
                "Er verschlüsselt die Abfrage",
              ],
              correct: 1,
              explain:
                "Bei Joins mit gleichnamigen Spalten sogar nötig. k.k_id vs. t.k_id wäre ohne Alias mehrdeutig – außerdem bleibt die Abfrage lesbar.",
            },
            {
              id: "imp_ae-t-2_7",
              q: "Welche Anweisung legt einen neuen Datensatz an?",
              options: [
                "SELECT INTO NEW",
                "INSERT INTO schueler (name, ort) VALUES",
                "UPDATE schueler ADD ...",
                "CREATE schueler",
              ],
              correct: 1,
              explain:
                "'Kim Berg', 'Lüneburg'. Spaltenliste explizit angeben gilt als saubere Form – der Auto-Increment-Schlüssel bleibt weg.",
            },
            {
              id: "imp_ae-t-2_8",
              q: "Was unterscheidet DELETE FROM kurs WHERE k_id = 7 von DROP TABLE kurs?",
              options: [
                "DELETE entfernt Datenzeilen (hier eine), DROP löscht die gesamte Tabelle samt Struktur",
                "DELETE entfernt die komplette Datenbank inklusive aller enthaltenen Tabellen",
                "Beide Anweisungen sind identisch und entfernen jeweils genau eine Datenzeile",
                "DROP löscht nur die eine Zeile mit k_id = 7 und behält die Tabellenstruktur",
              ],
              correct: 0,
              explain:
                "DML vs. DDL – die Verwechslung wäre im Betrieb fatal und ist in Prüfungen eine gern gestellte Abgrenzungsfrage.",
            },
            {
              id: "imp_ae-t-2_9",
              q: "Ein Bericht braucht Schülername, Kursbezeichnung und Fahrlehrername in einer Zeile. Wie viele JOINs sind nötig?",
              options: [
                "0 – alle drei Angaben stehen bereits in der Tabelle teilnahme",
                "7 – jede Tabelle muss zusätzlich mit sich selbst verbunden werden",
                "1 (nur teilnahme→schueler, der Rest kommt automatisch mit)",
                "3 (teilnahme→schueler, teilnahme→kurs, kurs→fahrlehrer)",
              ],
              correct: 3,
              explain:
                "Die Kette folgt den Fremdschlüsseln durch das Modell – genau das Muster der W21-Aufgabe mit mehreren JOINs.",
            },
            {
              id: "imp_ae-t-2_10",
              q: "Warum gehören Preise nicht redundant in die teilnahme-Tabelle?",
              options: [
                "Zahlen sind in Zwischentabellen verboten",
                "Aus Performancegründen niemals",
                "Redundanz erzeugt Änderungsanomalien",
                "Preise sind geheim",
              ],
              correct: 2,
              explain:
                "Außer man speichert bewusst den historischen Preis zum Buchungszeitpunkt (dann begründen). Die Ausnahme 'historischer Preis' ist eine klassische Diskussionsfrage – wer beide Seiten benennt, punktet.",
            },
            {
              id: "imp_ae-t-2_11",
              q: "Was liefert SELECT AVG(preis) FROM kurs WHERE preis > 300?",
              options: [
                "Die Anzahl aller Kurse mit Preis über 300 €",
                "Den Durchschnittspreis nur der Kurse über 300 €",
                "Einen Syntaxfehler wegen fehlendem GROUP BY",
                "Den Durchschnittspreis sämtlicher Kurse der Tabelle",
              ],
              correct: 1,
              explain:
                "WHERE filtert die Zeilen VOR der Aggregation – hier ist das gewollt und korrekt (kein HAVING nötig, da kein GROUP BY).",
            },
          ],
        },
        {
          id: "ae-t-3",
          title: "Aufgabentraining: UML, Klassen & Testen",
          content: [
            {
              type: "text",
              value:
                "Der dritte Originalschwerpunkt (W21: Klassendiagramm mit Vererbung, Interface und Methoden) verbindet Modellierung mit Implementierungslogik und Testfragen. Szenario: Eine Bibliotheks-Software verwaltet Medien.",
            },
            { type: "heading", value: "Aufgabe 1: Klassendiagramm auswerten" },
            {
              type: "text",
              value:
                "Gegeben: abstrakte Klasse Medium (− titel: String, − inventarNr: int, + istVerfügbar(): boolean, abstrakt + leihfristTage(): int). Buch und DVD erben von Medium; Buch ergänzt − isbn: String und implementiert leihfristTage() mit 28, DVD mit 7. Das Interface «Reservierbar» (+ reservieren(kundenNr: int): boolean) wird nur von Buch realisiert. a) Warum kann Medium nicht instanziiert werden? b) Welche Beziehungstypen enthält das Modell (mit Notation)? c) Ein Objekt vom Typ Medium referenziert zur Laufzeit eine DVD – was liefert leihfristTage() und wie heißt das Prinzip?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Medium ist abstrakt und enthält eine abstrakte Methode ohne Implementierung – erst die Unterklassen liefern leihfristTage(). Instanziierung wäre unvollständig.\nb) Vererbung/Generalisierung (durchgezogene Linie mit hohlem Dreieck von Buch/DVD zu Medium) und Realisierung eines Interfaces (gestrichelte Linie mit hohlem Dreieck von Buch zu «Reservierbar»).\nc) 7 – es zählt der tatsächliche Objekttyp, nicht der Referenztyp: Polymorphie (dynamische Bindung). Genau diese Dreierkette (abstrakt → Vererbung → Polymorphie) prüfte die Original-Aufgabe.",
            },
            { type: "heading", value: "Aufgabe 2: Methode entwerfen" },
            {
              type: "text",
              value:
                "Entwirf in Pseudocode die Methode berechneMahngebühr(tageÜberzogen: int): decimal der Klasse Medium: 0 € bis einschließlich 0 Tage, 0,50 € pro Tag für Tag 1–14, ab Tag 15 zusätzlich einmalig 5,00 € Bearbeitungspauschale. Nenne anschließend die Grenzwert-Testfälle für diese Methode.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nMETHODE berechneMahngebühr(tageÜberzogen: int): decimal\n  WENN tageÜberzogen <= 0 DANN\n    RÜCKGABE 0\n  ENDE WENN\n  gebühr = tageÜberzogen * 0.50\n  WENN tageÜberzogen >= 15 DANN\n    gebühr = gebühr + 5.00\n  ENDE WENN\n  RÜCKGABE gebühr\nGrenzwert-Testfälle: 0 → 0,00 € | 1 → 0,50 € | 14 → 7,00 € | 15 → 12,50 € (7,50 + 5,00) | zusätzlich ein Negativwert (−3 → 0,00 €). Die Grenzen 14/15 sind die kritischen Werte – exakt dort sitzen die typischen <-statt-<=-Fehler.",
            },
            { type: "heading", value: "Aufgabe 3: Testfälle dokumentieren" },
            {
              type: "text",
              value:
                "Erstelle für istVerfügbar() eine Testfalltabelle (Testfall-Nr., Vorbedingung, Aktion, erwartetes Ergebnis) mit mindestens drei Fällen: Medium nicht ausgeliehen, Medium ausgeliehen, Medium ausgeliehen und reserviert.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nTF1 | Medium ist nicht ausgeliehen | istVerfügbar() aufrufen | true\nTF2 | Medium ist ausgeliehen | istVerfügbar() aufrufen | false\nTF3 | Medium ist ausgeliehen UND reserviert | istVerfügbar() aufrufen | false (Reservierung ändert die aktuelle Verfügbarkeit nicht)\nForm zählt: Jede Zeile braucht Vorbedingung, Aktion UND erwartetes Ergebnis – fehlende Soll-Werte kosten in der Bewertung regelmäßig Punkte.",
            },
          ],
          quiz: [
            {
              id: "imp_ae-t-3_0",
              q: "Welcher Pfeil kennzeichnet in UML die Realisierung eines Interfaces?",
              options: [
                "Durchgezogene Linie mit ausgefüllter Raute am Ganzen",
                "Einfacher offener Pfeil an durchgezogener Linie",
                "Gestrichelte Linie mit hohlem Dreieck zum Interface",
                "Doppelpfeil mit Spitzen an beiden Linienenden",
              ],
              correct: 2,
              explain:
                "Vererbung: durchgezogen + hohles Dreieck. Realisierung: gestrichelt + hohles Dreieck. Die Unterscheidung war Teil der W21-Aufgabe.",
            },
            {
              id: "imp_ae-t-3_1",
              q: "Eine Variable vom Typ Medium hält eine DVD. medium.leihfristTage() liefert …",
              options: [
                "0 – der statische Typ Medium liefert immer den Default-Wert 0",
                "28 – es gilt stets die Basisimplementierung der Oberklasse Medium",
                "Einen Compilerfehler immer, weil Medium die Methode nicht selbst ausprogrammiert",
                "7 – die Implementierung des tatsächlichen Objekttyps (Polymorphie)",
              ],
              correct: 3,
              explain:
                "Dynamische Bindung: Zur Laufzeit entscheidet der Objekttyp, nicht der Referenztyp.",
            },
            {
              id: "imp_ae-t-3_2",
              q: "Warum deklariert man leihfristTage() in Medium als abstrakt statt mit Dummy-Wert?",
              options: [
                "Dummy-Werte sind laut Java-Sprachspezifikation nicht zulässig",
                "Abstrakte Methoden werden zur Laufzeit schneller aufgerufen",
                "Aus optischen Gründen, damit das Klassendiagramm übersichtlicher wirkt",
                "Der Compiler erzwingt so die Implementierung in jeder Unterklasse",
              ],
              correct: 3,
              explain:
                "Vergessene Fälle fallen sofort auf. Ein Dummy-Rückgabewert (z. B. 0) würde Fehler erst zur Laufzeit zeigen – das Entwurfsargument gehört in die Begründung.",
            },
            {
              id: "imp_ae-t-3_3",
              q: "Was bedeutet das Schlüsselwort super (bzw. base) in einer überschriebenen Methode?",
              options: [
                "Es erzeugt ein neues Objekt der Oberklasse",
                "Es ruft die Implementierung der Oberklasse auf",
                "Es löscht das aktuelle Objekt aus dem Speicher",
                "Es macht die überschriebene Methode statisch",
              ],
              correct: 1,
              explain:
                "Typisches Muster: Erst super.methode() für das Basisverhalten, dann die Spezialisierung ergänzen.",
            },
            {
              id: "imp_ae-t-3_4",
              q: "Welcher Testfall fehlt einer Tabelle, die nur 'gültige' Eingaben prüft?",
              options: [
                "Negativtests mit ungültigen/unerwarteten Eingaben",
                "Ein Belastungstest der eingesetzten Hardware",
                "Keiner – gültige Eingaben decken alles ab",
                "Ein zweiter, identisch aufgebauter Positivfall",
              ],
              correct: 0,
              explain:
                "Robustheit wird explizit bewertet: ungültige Werte, Grenzfälle, leere Eingaben.",
            },
            {
              id: "imp_ae-t-3_5",
              q: "Für die Mahngebühr-Methode sind 14 und 15 Testwerte, weil …",
              options: [
                "dort die Bedingungsgrenze liegt (Grenzwertanalyse)",
                "die Methode nur diese Werte akzeptiert",
                "sie in der Teststrategie als Zufallswerte gelten",
                "sie ein gerades und ein ungerades Beispiel abdecken",
              ],
              correct: 0,
              explain:
                "Grenzwertanalyse: jeweils letzter Wert der alten und erster Wert der neuen Äquivalenzklasse.",
            },
            {
              id: "imp_ae-t-3_6",
              q: "Was beschreibt ein Sequenzdiagramm im Unterschied zum Klassendiagramm?",
              options: [
                "Den zeitlichen Ablauf von Nachrichten zwischen Objekten in einem Szenario",
                "Die physische Netzwerktopologie mit Routern, Switches und der Verkabelung",
                "Die statische Struktur der Klassen mit ihren Attributen, Methoden und Beziehungen",
                "Die Datenbanktabellen mit ihren Spalten, Schlüsseln und Fremdschlüsselbeziehungen",
              ],
              correct: 0,
              explain:
                "Klassendiagramm = Struktur, Sequenzdiagramm = Verhalten über die Zeit (Lebenslinien, Aufrufe) – beide tauchen in FIAE-Prüfungen auf.",
            },
            {
              id: "imp_ae-t-3_7",
              q: "Wozu dient ein Use-Case-Diagramm?",
              options: [
                "Es zeigt Akteure und die Anwendungsfälle des Systems aus Nutzersicht",
                "Es modelliert die Vererbungshierarchie zwischen Klassen und Interfaces",
                "Es ersetzt die Testfälle, da Anwendungsfälle bereits alle Tests abdecken",
                "Es visualisiert die SQL-Abfragen einer Anwendung samt Tabellenzugriffen",
              ],
              correct: 0,
              explain:
                "Strichmännchen (Akteur) + Ellipsen (Anwendungsfälle) + Systemgrenze – das Anforderungsbild für Kunde und Entwickler.",
            },
            {
              id: "imp_ae-t-3_8",
              q: "Was bedeutet 'private' für die Testbarkeit einer Methode?",
              options: [
                "Sie wird indirekt über die öffentlichen Methoden getestet, die sie verwenden",
                "Private Methoden werden zur Laufzeit vom Compiler vollständig entfernt",
                "Private Methoden sind grundsätzlich untestbar und gelten daher als fehlerfrei",
                "Tests dürfen die Kapselung jederzeit brechen und private Member direkt aufrufen",
              ],
              correct: 0,
              explain:
                "Unittests prüfen das öffentliche Verhalten; wer ständig Privates direkt testen will, hat oft ein Designproblem (Klasse zu groß).",
            },
            {
              id: "imp_ae-t-3_9",
              q: "Eine Klasse Ausleihe verbindet Medium und Kunde mit Datum. Welche UML-Konstruktion passt?",
              options: [
                "Assoziationsklasse bzw. eigene Klasse mit Assoziationen zu beiden",
                "Ausleihe erbt von Kunde und ergänzt Medium als Attribut",
                "Eine UML-Notiz am Diagrammrand, die das Datum textlich festhält",
                "Ein Interface, das Medium und Kunde beide implementieren",
              ],
              correct: 0,
              explain:
                "Multiplizitäten 1 zu 0..*. Beziehungen mit eigenen Attributen (Datum, Frist) werden zur eigenen Klasse – das UML-Pendant zur n:m-Zwischentabelle.",
            },
            {
              id: "imp_ae-t-3_10",
              q: "Was gehört in die Spalte 'erwartetes Ergebnis' eines Testfalls?",
              options: [
                "Der konkrete Soll-Wert bzw. das Soll-Verhalten VOR der Ausführung festgelegt",
                "Der Name des Entwicklers, der die getestete Funktion implementiert hat",
                "Eine allgemeine Einschätzung wie 'funktioniert hoffentlich wie gedacht'",
                "Das tatsächlich beobachtete Ergebnis nach Durchführung des Testlaufs",
              ],
              correct: 0,
              explain:
                "Ohne vorab definiertes Soll gibt es keinen objektiven Soll-Ist-Vergleich – Kernkriterium der Bewertung.",
            },
            {
              id: "imp_ae-t-3_11",
              q: "Warum gehört zur AP-Antwort 'Polymorphie' idealerweise ein Halbsatz Erklärung?",
              options: [
                "Begriffe sind verboten",
                "Begriffe allein geben selten volle Punkte",
                "Erklärungen sind optional ohne Einfluss",
                "Lange Antworten geben immer mehr Punkte",
              ],
              correct: 1,
              explain:
                "Die Lösungssätze honorieren die erklärte Anwendung im Szenario. Muster: Begriff + 'das heißt hier: …' + Szenariobezug – so sind Definitions- UND Transferpunkt gesichert.",
            },
          ],
        },
      ],
    },
  ],
};
