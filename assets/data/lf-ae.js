window.LF_CONTENT = window.LF_CONTENT || {};
window.LF_CONTENT["ae"] = {
  topics: [
    {
      id: "ae-prog-t",
      title: "Programmierung",
      lessons: [
        {
          id: "ae-ps-1",
          title: "Pseudocode & Struktogramme",
          content: [
            {
              type: "text",
              value:
                "Pseudocode und Struktogramme (Nassi-Shneiderman) sind die sprachunabhängige Darstellung von Algorithmen – und das Standardformat der FIAE-Prüfung. Wichtig sind die drei Grundstrukturen: Sequenz, Verzweigung, Schleife.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Pseudocode analysieren" },
            {
              type: "text",
              value:
                "Gegeben ist:\nsumme = 0\nFÜR i = 1 BIS 5\n  WENN i MOD 2 = 0 DANN\n    summe = summe + i\n  ENDE WENN\nENDE FÜR\nAUSGABE summe\na) Welcher Wert wird ausgegeben? b) Was berechnet der Algorithmus allgemein? c) Wie müsste die Bedingung lauten, damit die ungeraden Zahlen summiert werden?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Durchläufe: i=2 → summe=2; i=4 → summe=6. Ausgabe: 6.\nb) Die Summe aller geraden Zahlen von 1 bis 5 (allgemein: bis zur Obergrenze).\nc) WENN i MOD 2 = 1 DANN (bzw. i MOD 2 <> 0) – dann ergäbe sich 1+3+5 = 9.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Struktogramm entwerfen" },
            {
              type: "text",
              value:
                "Entwirf (textuell als Pseudocode mit Einrückung) einen Algorithmus, der aus einem Array zahlen[] mit n Elementen den größten Wert ermittelt und ausgibt. Beschreibe zusätzlich, welche Struktogramm-Elemente du verwendest.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nmax = zahlen[0]\nFÜR i = 1 BIS n-1\n  WENN zahlen[i] > max DANN\n    max = zahlen[i]\n  ENDE WENN\nENDE FÜR\nAUSGABE max\nStruktogramm-Elemente: ein Anweisungsblock (Initialisierung), eine Zählschleife (kopfgesteuert) als umfassender Block, darin eine einseitige Verzweigung, abschließend ein Ausgabeblock. Typischer Prüfungsfehler: Start bei i = 0 statt 1 ist auch korrekt, aber max muss VOR der Schleife mit dem ersten Element (nicht mit 0!) initialisiert werden – sonst scheitert der Algorithmus bei rein negativen Werten.",
            },
            {
              type: "heading",
              value: "Vertiefung: Vom Problem zum Struktogramm – die Denkschritte",
            },
            {
              type: "text",
              value:
                "Bevor du zeichnest, zerlegst du: Was sind EINGABEN (Datentypen!), was ist die AUSGABE, welche Zwischenwerte brauchst du? Dann wählst du die Kontrollstrukturen: feste Wiederholungszahl → Zählschleife; Wiederholen bis Bedingung → kopf- (0..n Durchläufe) oder fußgesteuert (mindestens 1); Fallunterscheidung mit vielen Zweigen → Mehrfachauswahl statt if-Kaskade. Der Schreibtischtest ist Pflichtwerkzeug: eine Tabelle mit einer Spalte je Variable, eine Zeile je Durchlauf – so beweist du in der Prüfung dein Ergebnis und findest Off-by-One-Fehler selbst. Häufige Muster, die du blind können solltest: Summe/Zähler (Initialisierung!), Minimum/Maximum (mit erstem Element initialisieren, nie mit 0!), Tausch zweier Variablen (Hilfsvariable), lineare Suche mit Abbruch-Flag.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Muster kombinieren" },
            {
              type: "text",
              value:
                "Entwirf als Pseudocode: Aus einem Array temperaturen[0..n-1] sollen der Durchschnitt UND die Anzahl der Werte über dem Durchschnitt ausgegeben werden. Begründe, warum du zwei Schleifen brauchst.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: summe = 0; FÜR i = 0 BIS n-1: summe = summe + temperaturen[i]; ENDE; durchschnitt = summe / n; anzahl = 0; FÜR i = 0 BIS n-1: WENN temperaturen[i] > durchschnitt DANN anzahl = anzahl + 1; ENDE; AUSGABE durchschnitt, anzahl. — Zwei Schleifen sind nötig, weil der Durchschnitt erst nach vollständigem ersten Durchlauf feststeht; der Vergleich in Schleife 2 braucht ihn als fertigen Wert. Ein-Schleifen-„Lösungen“ vergleichen gegen einen unfertigen Durchschnitt – klassischer Logikfehler. Randfall nennen: n = 0 abfangen (Division durch 0!).",
            },
          ],
          quiz: [
            {
              id: "imp_ae-ps-1_0",
              q: "Welche drei Grundstrukturen bilden jeden Algorithmus ab?",
              options: [
                "Sequenz, Verzweigung (Selektion), Schleife (Iteration)",
                "Eingabe, Verarbeitung, Gewinn (erweitertes EVA-Prinzip)",
                "Klasse, Objekt und Methode der Objektorientierung",
                "Start, Pause und Stopp des Programmablaufs",
              ],
              correct: 0,
              explain:
                "Nach dem Strukturierungssatz lässt sich jeder Algorithmus aus diesen drei Strukturen aufbauen – Grundlage von Pseudocode und Struktogramm.",
            },
            {
              id: "imp_ae-ps-1_1",
              q: "Worin unterscheiden sich kopf- und fußgesteuerte Schleifen?",
              options: [
                "Kopfgesteuert prüft VOR dem Durchlauf (ggf. 0 Durchläufe), fußgesteuert NACH dem Durchlauf",
                "Kopfgesteuerte Schleifen zählen grundsätzlich rückwärts, fußgesteuerte zählen aufwärts",
                "Fußgesteuerte Schleifen werden vom Compiler stärker optimiert und laufen daher schneller",
                "Es gibt keinen Unterschied, beide Varianten prüfen die Bedingung zum selben Zeitpunkt",
              ],
              correct: 0,
              explain:
                "Fußgesteuert heißt: mindestens 1 Durchlauf. WHILE = kopfgesteuert, DO-WHILE/REPEAT-UNTIL = fußgesteuert – die Mindestdurchlauf-Frage ist ein Prüfungsklassiker.",
            },
            {
              id: "imp_ae-ps-1_2",
              q: "Was liefert 17 MOD 5?",
              options: ["85", "3,4", "2", "3"],
              correct: 2,
              explain:
                "MOD liefert den Rest der ganzzahligen Division: 17 = 3×5 + 2. DIV ergäbe 3.",
            },
            {
              id: "imp_ae-ps-1_3",
              q: "Wozu dient die Initialisierung einer Variablen vor einer Schleife?",
              options: [
                "Sie ist rein optional und hat keinerlei Auswirkungen auf das Ergebnis",
                "Sie legt einen definierten Startwert fest, auf dem die Schleife aufbauen kann",
                "Sie gibt den belegten Arbeitsspeicher vor dem Schleifenstart wieder frei",
                "Sie beendet das Programm kontrolliert, bevor die Schleife beginnt",
              ],
              correct: 1,
              explain:
                "summe = 0 vor der Summenschleife; max = erstes Element vor der Maximumsuche – fehlende Initialisierung ist ein Standardfehler in Prüfungsaufgaben.",
            },
            {
              id: "imp_ae-ps-1_4",
              q: "Was kennzeichnet eine Endlosschleife?",
              options: [
                "Jede WHILE-Schleife",
                "Die Abbruchbedingung wird nie erreicht",
                "Eine besonders schnelle Schleife",
                "Eine Schleife mit genau 1000 Durchläufen",
              ],
              correct: 1,
              explain:
                "Beispiel: weil die Laufvariable nicht verändert wird. Klassische Fehlerfrage: Im Schleifenrumpf fehlt i = i + 1 – der Algorithmus terminiert nicht.",
            },
            {
              id: "imp_ae-ps-1_5",
              q: "Welche Aussage zu Struktogrammen (Nassi-Shneiderman) ist korrekt?",
              options: [
                "Sie stellen Datenbanktabellen und deren Fremdschlüsselbeziehungen dar",
                "Sie sind seit einer Normänderung 2020 in Prüfungen nicht mehr zugelassen",
                "Sie eignen sich ausschließlich für Programme in der Sprache Java",
                "Sie kommen ohne Sprunganweisungen (GOTO) aus und erzwingen strukturierte Abläufe",
              ],
              correct: 3,
              explain:
                "Verzweigungen als Dreiecksblock, Schleifen als umfassende Blöcke – jede Struktur hat genau einen Ein- und Ausgang.",
            },
            {
              id: "imp_ae-ps-1_6",
              q: "Ein Array zahlen[0..9]: Wie viele Elemente enthält es und wie lautet der letzte Index?",
              options: [
                "10 Elemente, letzter Index 10",
                "Unbegrenzt",
                "10 Elemente, letzter Index 9",
                "9 Elemente, letzter Index 9",
              ],
              correct: 2,
              explain:
                "Nullbasierte Indizierung: n Elemente belegen die Indizes 0 bis n−1. Der Zugriff auf zahlen[10] wäre ein Laufzeitfehler (Off-by-One).",
            },
            {
              id: "imp_ae-ps-1_7",
              q: "Was bewirkt die Anweisungsfolge: h = a; a = b; b = h;?",
              options: [
                "Sie löscht die Inhalte von a und b, da h beide Werte überschreibt",
                "Sie verdoppelt den Wert von a, weil a zweimal zugewiesen wird",
                "Sie tauscht die Inhalte von a und b mithilfe einer Hilfsvariablen",
                "Nichts – die drei Zuweisungen heben sich gegenseitig wieder auf",
              ],
              correct: 2,
              explain:
                "Der Dreieckstausch – ohne Hilfsvariable würde der erste Wert überschrieben und ginge verloren.",
            },
            {
              id: "imp_ae-ps-1_8",
              q: "Wie viele Durchläufe macht: FÜR i = 3 BIS 10?",
              options: ["3", "8", "10", "7"],
              correct: 1,
              explain:
                "Obergrenze − Untergrenze + 1 = 10 − 3 + 1 = 8. Das +1 wird in Prüfungen gern vergessen.",
            },
            {
              id: "imp_ae-ps-1_9",
              q: "Was ist ein Trace (Schreibtischtest)?",
              options: [
                "Ein Netzwerkprotokoll zum Verfolgen von Paketen über mehrere Router (traceroute)",
                "Das schrittweise Durchspielen eines Algorithmus mit konkreten Werten in einer Tabelle",
                "Ein Compiler-Befehl, der den Programmablauf automatisch in eine Logdatei schreibt",
                "Eine UML-Diagrammart zur Darstellung von Objektinteraktionen über die Zeit",
              ],
              correct: 1,
              explain:
                "In der AP wird oft eine Wertetabelle je Durchlauf verlangt – sauberes Tracen sichert die Punkte auch bei kleinen Denkfehlern.",
            },
            {
              id: "imp_ae-ps-1_10",
              q: "Welche Bedingung prüft, ob eine Zahl x im Intervall 10 bis 20 (einschließlich) liegt?",
              options: [
                "x > 10 UND x < 20",
                "x >= 10 UND x <= 20",
                "x = 10 UND x = 20",
                "x >= 10 ODER x <= 20",
              ],
              correct: 1,
              explain:
                "ODER wäre immer wahr; die strikten Vergleiche schlössen die Grenzen aus – Logikfragen dieser Art sind Standard.",
            },
            {
              id: "imp_ae-ps-1_11",
              q: "Was unterscheidet Syntax- von Logikfehlern?",
              options: [
                "Beide Fehlerarten sind identisch und werden vom Compiler auf dieselbe Weise gemeldet",
                "Logikfehler werden vom Compiler bei der Übersetzung erkannt und als Fehlermeldung ausgegeben",
                "Syntaxfehler verhindern die Übersetzung; Logikfehler laufen durch, liefern aber falsche Ergebnisse",
                "Syntaxfehler treten erst zur Laufzeit auf und sind dort harmloser als Logikfehler",
              ],
              correct: 2,
              explain:
                "Den Logikfehler findet erst der Test (oder der Kunde) – deshalb gehören Schreibtischtest und Testfälle zur Entwicklung.",
            },
          ],
        },
        {
          id: "ae-oop-1",
          title: "OOP-Grundlagen & UML-Klassendiagramm",
          content: [
            {
              type: "text",
              value:
                "Objektorientierung strukturiert Software in Klassen mit Attributen und Methoden. Das UML-Klassendiagramm ist die Standardnotation – in der FIAE-AP2 (W21: Klassendiagramm mit Vererbung und Interface) wird regelmäßig gelesen, ergänzt oder implementiert.",
            },
            { type: "heading", value: "Übungsaufgabe: Klassendiagramm in Code denken" },
            {
              type: "text",
              value:
                "Modelliert ist: Klasse Fahrzeug (Attribute: kennzeichen: String, kmStand: int; Methode: fahre(km: int)). Klasse Lkw erbt von Fahrzeug und ergänzt zuladungKg: int sowie eine überschriebene Methode fahre(km: int). a) Erkläre die Bedeutung von + und − vor Attributen/Methoden. b) Was bedeutet der Vererbungspfeil im Diagramm? c) Skizziere die Methode fahre() der Basisklasse als Pseudocode (sie soll kmStand erhöhen) und erkläre, was 'überschreiben' im Lkw bedeutet.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) + = public (von außen zugreifbar), − = private (nur innerhalb der Klasse); üblich: Attribute privat, Zugriff über öffentliche Methoden (Kapselung). # wäre protected (auch in Unterklassen sichtbar).\nb) Der nicht ausgefüllte Dreieckspfeil zeigt von der Unterklasse zur Oberklasse: Lkw 'ist ein' Fahrzeug und erbt dessen Attribute und Methoden.\nc) METHODE fahre(km: int)\n     WENN km > 0 DANN\n       kmStand = kmStand + km\n     ENDE WENN\nÜberschreiben (Overriding): Der Lkw definiert fahre() mit gleicher Signatur neu, z. B. um zusätzlich verschleißabhängige Logik bei hoher Zuladung zu ergänzen – beim Aufruf auf einem Lkw-Objekt gewinnt die spezialisierte Variante (Polymorphie).",
            },
            { type: "heading", value: "Vertiefung: Vom Diagramm zum Code und zurück" },
            {
              type: "text",
              value:
                "Die Prüfung testet Übersetzen in beide Richtungen. Diagramm → Code: Sichtbarkeiten übernehmen (− wird private, + public), Attribute mit Typ deklarieren, Konstruktor initialisiert Pflichtattribute, Vererbungspfeil wird extends/erbt. Code → Diagramm: Signaturen exakt (methode(param: Typ): Rückgabetyp), statische Elemente unterstrichen, abstrakte kursiv. Beziehungen entscheidest du über Lebensdauer und Exklusivität: Komposition (gefüllte Raute) = Teil stirbt mit dem Ganzen (Rechnung–Rechnungsposition), Aggregation (leere Raute) = lose Zuordnung (Team–Mitarbeiter), Assoziation mit Multiplizitäten für alles Übrige. Kapselung praktisch: Attribute privat + Validierung im Setter (setAlter lehnt −5 ab) – so bleibt das Objekt IMMER in gültigem Zustand; genau diese Begründung will die Prüfung lesen.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Beziehung begründen" },
            {
              type: "text",
              value:
                "Modelliere begründet: a) Bestellung und Bestellposition, b) Kurs und Teilnehmer, c) Auto und Motor (Austauschmotor möglich). Gib je Beziehungstyp, Multiplizitäten und einen Begründungssatz.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: a) KOMPOSITION Bestellung ◆— 1..* Bestellposition: Positionen existieren nur innerhalb ihrer Bestellung, mit deren Löschung verschwinden sie. b) ASSOZIATION/AGGREGATION Kurs ◇— * Teilnehmer (Teilnehmer * — * Kurs, meist über Anmeldung aufgelöst): Teilnehmer existieren unabhängig vom Kurs. c) AGGREGATION Auto ◇— 1 Motor: Der Motor ist Teil des Ganzen, kann aber ausgetauscht werden und existiert davor/danach eigenständig – Austauschbarkeit spricht gegen Komposition. Bewertung: Typ (je 1 P), Multiplizität (je 0,5), Begründung über Lebensdauer (je 1).",
            },
          ],
          quiz: [
            {
              id: "imp_ae-oop-1_0",
              q: "Was ist der Unterschied zwischen Klasse und Objekt?",
              options: [
                "Die Klasse ist der Bauplan, das Objekt eine konkrete Instanz davon",
                "Objekte sind die Baupläne, aus denen Klassen zur Laufzeit erzeugt werden",
                "Klassen existieren nur zur Laufzeit und werden danach gelöscht",
                "Beides bezeichnet dasselbe Konzept in unterschiedlichen Sprachen",
              ],
              correct: 0,
              explain:
                "Klasse Kunde – Objekte: kunde1 ('Meier GmbH'), kunde2 ('Schulz AG') mit eigenen Attributwerten.",
            },
            {
              id: "imp_ae-oop-1_1",
              q: "Was bedeutet Kapselung (Information Hiding)?",
              options: [
                "Alle Attribute werden als public deklariert, damit andere Klassen direkt darauf zugreifen können",
                "Attribute sind privat; der Zugriff erfolgt kontrolliert über öffentliche Methoden (Getter/Setter)",
                "Klassen dürfen ausschließlich Attribute enthalten; Methoden werden in separate Module ausgelagert",
                "Der Quellcode wird mit einem kryptografischen Verfahren verschlüsselt, um ihn vor Einsicht zu schützen",
              ],
              correct: 1,
              explain:
                "So bleiben interne Zustände konsistent (z. B. Validierung im Setter) und die Implementierung austauschbar.",
            },
            {
              id: "imp_ae-oop-1_2",
              q: "Was beschreibt Polymorphie?",
              options: [
                "Ein Methodenaufruf führt je nach tatsächlichem Objekttyp unterschiedliche Implementierungen aus",
                "Die Möglichkeit einer Klasse, in Java von mehreren Basisklassen gleichzeitig zu erben",
                "Variablen wechseln ihren Datentyp zur Laufzeit zufällig und unkontrolliert",
                "Eine Klasse wird unter mehreren Aliasnamen im selben Namensraum registriert",
              ],
              correct: 0,
              explain:
                "fahrzeug.fahre() ruft beim Lkw die überschriebene Variante – Grundlage erweiterbarer Architekturen.",
            },
            {
              id: "imp_ae-oop-1_3",
              q: "Worin unterscheiden sich Überladen und Überschreiben?",
              options: [
                "Überschreiben funktioniert ausschließlich bei privaten Methoden, da nur diese in der Unterklasse neu implementiert werden dürfen",
                "Überladen: gleicher Name, andere Parameterliste in derselben Klasse; Überschreiben: gleiche Signatur in der Unterklasse neu implementiert",
                "Beides ist identisch: Beide Begriffe beschreiben das erneute Implementieren einer geerbten Methode mit gleicher Signatur",
                "Überladen ist in objektorientierten Sprachen verboten, weil der Compiler gleichnamige Methoden nicht unterscheiden kann",
              ],
              correct: 1,
              explain:
                "drucke(int) / drucke(String) = überladen; Lkw.fahre() ersetzt Fahrzeug.fahre() = überschrieben.",
            },
            {
              id: "imp_ae-oop-1_4",
              q: "Was kennzeichnet eine abstrakte Klasse?",
              options: [
                "Sie wird zur Laufzeit besonders schnell ausgeführt",
                "Sie kann nicht instanziiert werden und dient als Basis",
                "Sie existiert nur in UML-Diagrammen, nicht im Code",
                "Sie darf keinerlei Attribute oder Felder besitzen",
              ],
              correct: 1,
              explain:
                "Oft mit abstrakten Methoden, die Unterklassen implementieren müssen. In UML kursiv notiert. Beispiel: abstrakte Klasse Zahlung mit abstrakter Methode ausführen(), implementiert von KartenZahlung und RechnungsZahlung.",
            },
            {
              id: "imp_ae-oop-1_5",
              q: "Was definiert ein Interface?",
              options: [
                "Einen Standard-Konstruktor, den alle implementierenden Klassen beim Instanziieren aufrufen müssen",
                "Zwingend eine grafische Benutzeroberfläche mit Fenstern und Bedienelementen für die Anwendung",
                "Einen Vertrag aus Methodensignaturen ohne (bzw. mit nur Standard-)Implementierung, den Klassen erfüllen",
                "Eine Datenbanktabelle, deren Spalten die Attribute der zugreifenden Klassen vorgeben",
              ],
              correct: 2,
              explain:
                "In UML mit «interface» und gestrichelter Realisierungslinie – im W21-Diagramm genau so abgefragt.",
            },
            {
              id: "imp_ae-oop-1_6",
              q: "Welche UML-Beziehung drückt 'besteht aus' mit existenzabhängigen Teilen aus?",
              options: [
                "Vererbung",
                "Realisierung",
                "Gestrichelte Abhängigkeit",
                "Komposition (ausgefüllte Raute)",
              ],
              correct: 3,
              explain:
                "Teile leben und sterben mit dem Ganzen. Bestellung ◆— Bestellposition: Ohne Bestellung keine Positionen. Aggregation (leere Raute) wäre die lose 'hat'-Beziehung.",
            },
            {
              id: "imp_ae-oop-1_7",
              q: "Was bedeutet die Multiplizität 1..* an einer Assoziation?",
              options: [
                "Null oder eins",
                "Genau eins",
                "Mindestens eins, beliebig viele",
                "Höchstens zehn",
              ],
              correct: 2,
              explain:
                "Kunde 1 — 1..* Bestellung: Jede Bestellung gehört genau einem Kunden, ein Kunde hat mindestens eine Bestellung. Multiplizitäten sind Pflichtpunkte beim Diagramm-Lesen.",
            },
            {
              id: "imp_ae-oop-1_8",
              q: "Welche Aufgabe hat ein Konstruktor?",
              options: [
                "Er gibt den Speicher von Objekten am Lebensende frei",
                "Er initialisiert ein neues Objekt mit gültigen Startwerten",
                "Er kompiliert die Klasse beim ersten Aufruf zur Laufzeit",
                "Er legt beim Programmstart die Datenbanktabellen an",
              ],
              correct: 1,
              explain:
                "Gleicher Name wie die Klasse (sprachabhängig), kein Rückgabetyp – oft überladen für verschiedene Initialisierungswege.",
            },
            {
              id: "imp_ae-oop-1_9",
              q: "Wofür steht das Geheimnisprinzip-konforme Attribut '- preis: decimal' mit Methode '+ getPreis(): decimal'?",
              options: [
                "Eine statische Konstante mit fest hinterlegtem Preiswert",
                "Einen Datenbankindex auf der Preisspalte der Tabelle",
                "Privates Attribut mit öffentlichem Lesezugriff (Getter)",
                "Ein öffentliches Attribut, auf das kein Zugriff möglich ist",
              ],
              correct: 2,
              explain:
                "UML-Notation: Sichtbarkeit Name: Typ – Methoden mit Parameterliste und Rückgabetyp nach dem Doppelpunkt.",
            },
            {
              id: "imp_ae-oop-1_10",
              q: "Was bedeutet 'statisch' (unterstrichen in UML) bei Attribut oder Methode?",
              options: [
                "Es gehört der Klasse selbst, nicht den einzelnen Objekten",
                "Es ist als veraltet (deprecated) markiert und soll entfallen",
                "Es ist privat und nur innerhalb der Klasse sichtbar",
                "Es ist eine Konstante, deren Wert nie geändert werden kann",
              ],
              correct: 0,
              explain:
                "Beispiel: anzahlInstanzen oder eine Hilfsmethode Mathe.runden() – Aufruf über den Klassennamen.",
            },
            {
              id: "imp_ae-oop-1_11",
              q: "Warum gilt 'Komposition vor Vererbung' als Entwurfsempfehlung?",
              options: [
                "Komposition wird vom Compiler stets zu schnellerem Maschinencode optimiert als Vererbung",
                "Zusammensetzen von Komponenten koppelt loser und bleibt flexibler als tiefe Vererbungshierarchien",
                "Die Empfehlung gilt als überholt; moderne Entwürfe setzen bevorzugt auf tiefe Vererbungshierarchien",
                "Vererbung wurde aus modernen Programmiersprachen entfernt und steht nicht mehr zur Verfügung",
              ],
              correct: 1,
              explain:
                "Vererbung nur bei echter 'ist-ein'-Beziehung einsetzen – ein Auto HAT einen Motor (Komposition), es IST keiner.",
            },
          ],
        },
        {
          id: "ae-alg-1",
          title: "Algorithmen: Suchen & Sortieren",
          content: [
            {
              type: "text",
              value:
                "Such- und Sortierverfahren sind das Standard-Algorithmikthema der FIAE-Prüfung (W21: Array sortieren). Verstehen statt auswendig lernen: Wie viele Schritte braucht ein Verfahren, und warum?",
            },
            { type: "heading", value: "Übungsaufgabe: Lineare vs. binäre Suche" },
            {
              type: "text",
              value:
                "Ein SORTIERTES Array enthält 1.000 Kundennummern. a) Wie viele Vergleiche braucht die lineare Suche im schlechtesten Fall, wie viele die binäre Suche (Begründung)? b) Spiele die binäre Suche nach der 7 im Array [2, 5, 7, 9, 12, 15, 21] durch (Indizes 0–6). c) Welche Voraussetzung hat die binäre Suche?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Linear: bis zu 1.000 Vergleiche (jedes Element). Binär: maximal ⌈log₂(1000)⌉ = 10 Vergleiche, da sich der Suchraum pro Schritt halbiert.\nb) Schritt 1: Mitte Index 3 → 9 > 7 → links weiter (Indizes 0–2). Schritt 2: Mitte Index 1 → 5 < 7 → rechts weiter (Index 2). Schritt 3: Index 2 → 7 gefunden. 3 Vergleiche.\nc) Das Array muss sortiert sein – auf unsortierten Daten ist nur die lineare Suche korrekt (oder vorher sortieren, was sich erst bei vielen Suchvorgängen lohnt).",
            },
            { type: "heading", value: "Vertiefung: Verfahren wählen und Aufwand begründen" },
            {
              type: "text",
              value:
                "Die eigentliche Prüfungskompetenz ist die WAHL: Wenige Datensätze oder einmalige Suche → lineare Suche genügt (kein Sortieraufwand). Viele Suchvorgänge auf stabilen Daten → einmal sortieren (O(n log n)), dann binär suchen (O(log n)). Ständige Einzelzugriffe über Schlüssel → Hash-Map (O(1), dafür Speicher + keine Ordnung). Sortierverfahren einordnen: Bubble/Selection/Insertion O(n²) – gut erklärbar, für Prüfungs-Traces; Merge-/Quicksort O(n log n) – Produktionsstandard; Insertion Sort glänzt bei fast sortierten Daten. Stabilität (gleiche Schlüssel behalten Reihenfolge) wird wichtig beim Mehrfachsortieren: erst nach Name, dann stabil nach PLZ sortieren erhält die Namensordnung innerhalb gleicher PLZ. Rechne Wachstum immer konkret vor: n=1.000 → n² = 1.000.000 Vergleiche, n log n ≈ 10.000 – Faktor 100.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Verfahren empfehlen" },
            {
              type: "text",
              value:
                "Ein Ticketsystem hält 200.000 Tickets im Speicher. Anforderungen: (a) Suche per Ticketnummer tausendfach pro Minute, (b) einmal nachts eine sortierte Liste nach Priorität und Datum, (c) beim Import werden fast vorsortierte Tagespakete eingefügt. Empfiehl je Datenstruktur/Verfahren mit Begründung.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: a) HASH-MAP mit Ticketnummer als Schlüssel: O(1) je Zugriff – 200.000 lineare Suchen pro Minute wären O(n) und viel zu teuer. b) MERGESORT (oder Bibliotheks-Sort) mit zusammengesetztem Schlüssel Priorität, dann Datum – O(n log n), STABIL, damit die Datumsordnung innerhalb gleicher Priorität erhalten bleibt. c) INSERTION SORT bzw. sortiertes Einfügen: bei fast sortierten Daten nahezu O(n) – der Spezialfall, in dem das „einfache“ Verfahren gewinnt. Struktur der Antwort: Anforderung → Eigenschaft des Verfahrens → Begründung.",
            },
          ],
          quiz: [
            {
              id: "imp_ae-alg-1_0",
              q: "Wie funktioniert Bubble Sort?",
              options: [
                "Es wird ein Pivot-Element gewählt, um das herum partitioniert wird",
                "Die Elemente werden so lange zufällig gemischt, bis die Reihenfolge stimmt",
                "Benachbarte Elemente werden verglichen und bei falscher Reihenfolge getauscht",
                "Das Array wird wiederholt halbiert und die Hälften rekursiv verschmolzen",
              ],
              correct: 2,
              explain:
                "Große Werte 'blubbern' ans Ende. Einfach zu erklären, aber O(n²) – in Prüfungen meist als Trace über 1–2 Durchläufe gefragt.",
            },
            {
              id: "imp_ae-alg-1_1",
              q: "Nach dem ERSTEN vollständigen Bubble-Sort-Durchlauf (aufsteigend) gilt sicher:",
              options: [
                "Nichts ist garantiert",
                "Das Array ist komplett sortiert",
                "Das kleinste Element steht am Ende",
                "Das größte Element steht am Ende",
              ],
              correct: 3,
              explain:
                "Pro Durchlauf wandert das jeweils größte verbleibende Element an seine Endposition – darum n−1 Durchläufe im Maximum.",
            },
            {
              id: "imp_ae-alg-1_2",
              q: "Wie arbeitet Selection Sort?",
              options: [
                "Er sucht im unsortierten Teil das Minimum und tauscht es an die nächste Position des sortierten Teils",
                "Er vergleicht und vertauscht in jedem Durchlauf ausschließlich direkt benachbarte Elemente (Bubble-Prinzip)",
                "Er teilt die Liste rekursiv in Hälften und fügt die sortierten Teillisten anschließend wieder zusammen",
                "Er legt alle Werte in einer Hash-Tabelle ab und liest sie über die Hashfunktion sortiert wieder aus",
              ],
              correct: 0,
              explain:
                "Wenige Tauschoperationen (max. n−1), aber immer O(n²) Vergleiche – auch bei bereits sortierten Daten.",
            },
            {
              id: "imp_ae-alg-1_3",
              q: "Was beschreibt die O-Notation (z. B. O(n²))?",
              options: [
                "Das Wachstum des Aufwands in Abhängigkeit von der Eingabegröße",
                "Den Speicherort des Programms im Adressraum des Prozesses",
                "Die Anzahl der zur Laufzeit erzeugten Objekte",
                "Die exakt gemessene Laufzeit des Programms in Millisekunden",
              ],
              correct: 0,
              explain:
                "Unabhängig von Hardware und Konstanten. O(n²) heißt: Verdoppelt sich n, vervierfacht sich der Aufwand ungefähr – die Vergleichsbasis für Algorithmen.",
            },
            {
              id: "imp_ae-alg-1_4",
              q: "Welche durchschnittliche Komplexität haben effiziente Sortierverfahren wie Quicksort/Mergesort?",
              options: ["O(n log n)", "O(n!)", "O(n²)", "O(1)"],
              correct: 0,
              explain:
                "Gegenüber O(n²) bei 1 Mio. Elementen der Unterschied zwischen Sekunden und Stunden – Quicksorts Worst Case bleibt allerdings O(n²).",
            },
            {
              id: "imp_ae-alg-1_5",
              q: "Wie viele Vergleiche braucht die binäre Suche in 1.000.000 sortierten Elementen maximal?",
              options: ["Etwa 1.000", "Genau 1.000.000", "Etwa 500.000", "Etwa 20"],
              correct: 3,
              explain:
                "⌈log₂(10⁶)⌉ = 20 – die Halbierungslogik ist DER Effizienzklassiker der Prüfung.",
            },
            {
              id: "imp_ae-alg-1_6",
              q: "Was kennzeichnet einen rekursiven Algorithmus?",
              options: [
                "Ein wiederholter Datenbankzugriff, der dieselbe Abfrage in einer Schleife mehrfach ausführt",
                "Ein Algorithmus, der vollständig ohne Variablen auskommt und nur mit Konstanten rechnet",
                "Eine Funktion ruft sich selbst mit verkleinertem Problem auf und besitzt eine Abbruchbedingung",
                "Eine Endlosschleife, die denselben Codeblock ohne Abbruchbedingung unendlich wiederholt",
              ],
              correct: 2,
              explain:
                "Ohne Abbruchbedingung (Basisfall) droht Stack Overflow – die Standardfangfrage zu Rekursion.",
            },
            {
              id: "imp_ae-alg-1_7",
              q: "fakultaet(n): WENN n <= 1 DANN RÜCKGABE 1 SONST RÜCKGABE n * fakultaet(n-1). Was liefert fakultaet(4)?",
              options: ["4", "256", "24", "10"],
              correct: 2,
              explain:
                "4 × 3 × 2 × 1 = 24. Aufrufkette bis zum Basisfall n=1, dann Auflösung rückwärts.",
            },
            {
              id: "imp_ae-alg-1_8",
              q: "Was ist ein stabiles Sortierverfahren?",
              options: [
                "Es sortiert grundsätzlich absteigend, unabhängig vom Vergleichskriterium",
                "Gleiche Schlüssel behalten ihre ursprüngliche Reihenfolge zueinander",
                "Es läuft auch bei fehlerhaften Eingabedaten garantiert ohne Absturz durch",
                "Es kommt vollständig ohne zusätzlichen Arbeitsspeicher aus",
              ],
              correct: 1,
              explain:
                "Relevant beim Mehrfachsortieren (erst nach Name, dann nach PLZ): Stabil bleibt die Vorsortierung innerhalb gleicher PLZ erhalten.",
            },
            {
              id: "imp_ae-alg-1_9",
              q: "Wofür eignet sich eine Hash-basierte Datenstruktur (Dictionary/Map)?",
              options: [
                "Sie liefert Elemente garantiert in sortierter Reihenfolge zurück",
                "Zugriff auf Werte über einen Schlüssel in nahezu konstanter Zeit O(1)",
                "Sie kann ausschließlich numerische Werte als Schlüssel verwalten",
                "Sie ersetzt relationale Datenbanken in jedem Einsatzszenario vollständig",
              ],
              correct: 1,
              explain:
                "kundenMap[kundennr] → Kundenobjekt ohne Suche – der Preis sind Speicher und fehlende Ordnung.",
            },
            {
              id: "imp_ae-alg-1_10",
              q: "Worin unterscheiden sich Stack und Queue?",
              options: [
                "Stack: LIFO (zuletzt rein, zuerst raus); Queue: FIFO",
                "Beides sind binäre Bäume mit sortierten Knoten",
                "Beide arbeiten nach FIFO (zuerst rein, zuerst raus)",
                "Stack: FIFO (zuerst rein, zuerst raus); Queue: LIFO",
              ],
              correct: 0,
              explain:
                "Queue: zuerst rein, zuerst raus. Undo-Funktion = Stack, Druckerwarteschlange = Queue – Anwendungszuordnung ist die typische Prüfungsfrage.",
            },
            {
              id: "imp_ae-alg-1_11",
              q: "Warum lohnt Sortieren vor vielen Suchvorgängen?",
              options: [
                "Der einmalige Sortieraufwand (O(n log n)) ermöglicht danach binäre Suche in O(log n) je Anfrage",
                "Sortieren verursacht keinerlei Rechenaufwand und ist daher immer kostenlos möglich",
                "Sortierte Daten belegen deutlich weniger Festplattenplatz als unsortierte",
                "Unsortierte Datenbestände können von Suchalgorithmen grundsätzlich nicht durchsucht werden",
              ],
              correct: 0,
              explain:
                "Bei einer einzigen Suche lohnt es nicht – Aufwandsabwägung gehört zur Begründung in der AP.",
            },
          ],
        },
        {
          id: "ae-pat-1",
          title: "Observer-Pattern – Ereignisse sauber entkoppeln",
          content: [
            {
              type: "text",
              value:
                "Entwurfsmuster (Design Patterns) sind bewährte Lösungsschablonen für wiederkehrende Programmierprobleme. Neben MVC ist das Observer-Pattern das prüfungsrelevanteste Muster in der FIAE-AP2: Es taucht in UML-Aufgaben auf, in Fragen zur GUI-Programmierung – und du benutzt es täglich, ohne es zu merken, denn jeder Event-Listener ist ein Observer.",
            },
            { type: "heading", value: "Das Problem" },
            {
              type: "text",
              value:
                "Ein Lagerbestand ändert sich. Drei Stellen müssen es erfahren: die Anzeige im Shop, das Dashboard der Disposition und ein E-Mail-Alarm bei Unterschreitung des Meldebestands. Naive Lösung: Die Lagerklasse ruft alle drei direkt auf. Folge: Die Lagerklasse muss jede dieser Klassen kennen (enge Kopplung) und wird bei jedem neuen Empfänger angefasst – ein Verstoß gegen das Open-Closed-Prinzip.",
            },
            { type: "heading", value: "Die Lösung: Subject und Observer" },
            {
              type: "list",
              value: [
                "Subject (das Beobachtete, z. B. Lagerbestand): führt eine Liste von Beobachtern und bietet drei Methoden an: registrieren (attach), abmelden (detach), benachrichtigen (notify).",
                "Observer (Interface): schreibt allen Beobachtern eine einheitliche Methode vor, meist update().",
                "Konkrete Observer (ShopAnzeige, DispoDashboard, MailAlarm): implementieren das Interface und reagieren in update() jeweils auf ihre Art.",
                "Ablauf: Zustand des Subjects ändert sich -> Subject ruft notify() auf -> notify() ruft bei jedem registrierten Observer update() auf. Das Subject kennt nur das Interface – nicht die konkreten Klassen.",
              ],
            },
            {
              type: "code",
              value:
                '// Observer-Pattern in JavaScript (Prinzip identisch in Java/C#)\nclass Lagerbestand {\n  #observers = [];\n  #bestand = 0;\n  attach(o){ this.#observers.push(o); }\n  detach(o){ this.#observers = this.#observers.filter(x => x !== o); }\n  set bestand(wert){\n    this.#bestand = wert;\n    this.#notify();            // Zustandsänderung -> alle informieren\n  }\n  get bestand(){ return this.#bestand; }\n  #notify(){ this.#observers.forEach(o => o.update(this)); }\n}\n\nclass MailAlarm {\n  update(subject){             // Pull-Variante: Observer holt sich die Daten\n    if (subject.bestand < 10) console.log("Meldebestand unterschritten!");\n  }\n}\n\nconst lager = new Lagerbestand();\nlager.attach(new MailAlarm());\nlager.bestand = 7;             // -> "Meldebestand unterschritten!"',
            },
            { type: "heading", value: "Push vs. Pull und typische Prüfungsaspekte" },
            {
              type: "list",
              value: [
                "Push: notify() übergibt die geänderten Daten direkt an update(daten) – einfach, aber alle Observer bekommen dieselben Daten.",
                "Pull: update(subject) übergibt nur eine Referenz; jeder Observer holt sich per Getter genau das, was er braucht (siehe Codebeispiel) – flexibler, dafür engere Bindung an die Subject-Schnittstelle.",
                "Vorteile: lose Kopplung, beliebig viele Empfänger zur Laufzeit an- und abmeldbar, Open-Closed-Prinzip erfüllt (neue Observer ohne Änderung am Subject).",
                "Nachteile: Reihenfolge der Benachrichtigung ist nicht garantiert, vergessene detach()-Aufrufe verursachen Memory Leaks („Lapsed Listener“), Kaskaden von Updates können schwer nachvollziehbar werden.",
                "Praxisbeispiele: addEventListener im Browser, Java PropertyChangeListener, .NET-Events, Publish/Subscribe bei Messaging (MQTT) – und die View-Aktualisierung im MVC-Muster: die Views beobachten das Model.",
              ],
            },
            { type: "heading", value: "Übungsaufgabe" },
            {
              type: "text",
              value:
                "a) Zeichnen bzw. beschreiben Sie das UML-Klassendiagramm des Observer-Patterns mit Subject, Observer-Interface und zwei konkreten Observern (Methoden angeben!). b) Erklären Sie, warum das Muster das Open-Closed-Prinzip unterstützt. c) Nennen Sie den Zusammenhang zwischen MVC und Observer. d) Was ist der „Lapsed Listener“-Fehler und wie vermeiden Sie ihn?",
            },
            {
              type: "solution",
              value:
                "a) Klasse Subject: - observers: List<Observer>; + attach(o: Observer); + detach(o: Observer); + notify(). Interface Observer: + update(). Klassen ShopAnzeige und MailAlarm implementieren Observer (Realisierungspfeil, gestrichelt mit hohlem Dreieck) und überschreiben update(). Subject hält eine Assoziation 1..* auf das Interface Observer – nicht auf die konkreten Klassen.\nb) Neue Empfänger (z. B. ein SMS-Alarm) werden als neue Observer-Klasse ergänzt und zur Laufzeit registriert. Das Subject selbst bleibt unverändert: offen für Erweiterung, geschlossen für Modifikation.\nc) Im MVC beobachten die Views das Model: Ändert der Controller das Model, benachrichtigt das Model alle registrierten Views per Observer-Mechanismus – die Views aktualisieren sich selbst. So kennt das Model keine konkrete View.\nd) Ein Observer wird registriert, aber nie abgemeldet (detach vergessen). Das Subject hält die Referenz fest – das Objekt kann nicht vom Garbage Collector eingesammelt werden (Memory Leak) und erhält weiter Updates. Vermeidung: detach() im Aufräumcode (z. B. beim Schließen des Fensters), schwache Referenzen (WeakReference) oder einmalige Listener (once).",
            },
            {
              type: "links",
              value: [
                [
                  "Wikipedia: Beobachter (Entwurfsmuster)",
                  "https://de.wikipedia.org/wiki/Beobachter_(Entwurfsmuster)",
                ],
                [
                  "FI-Prüfungsvorbereitung: Observer-Pattern",
                  "https://fachinformatikerpruefungsvorbereitung.de/abschlusspr%C3%BCfungteil2ae/ga2/observerpattern/",
                ],
                [
                  "Refactoring Guru: Observer (deutsch)",
                  "https://refactoring.guru/design-patterns/observer",
                ],
              ],
            },
          ],
          quiz: [
            {
              id: "imp_ae-pat-1_0",
              q: "Welche drei Methoden bietet das Subject im Observer-Pattern typischerweise an?",
              options: [
                "create, read, update",
                "attach, detach, notify",
                "push, pull, sync",
                "subscribe, render, delete",
              ],
              correct: 1,
              explain:
                "Beobachter registrieren (attach), abmelden (detach) und alle benachrichtigen (notify) – das ist der Kern des Subjects.",
            },
            {
              id: "imp_ae-pat-1_1",
              q: "Warum spricht man von loser Kopplung?",
              options: [
                "Weil das Subject nur das Observer-Interface kennt, nicht die konkreten Klassen",
                "Weil das Subject überhaupt keine Referenzen auf seine Observer speichert",
                "Weil die Observer auf das Subject ausschließlich lesend zugreifen dürfen",
                "Weil das Muster vollständig ohne Interfaces und Abstraktionen auskommt",
              ],
              correct: 0,
              explain:
                "Das Subject ruft nur update() auf dem Interface auf – welche konkreten Klassen dahinterstehen, ist ihm egal. Neue Observer erfordern keine Änderung am Subject.",
            },
            {
              id: "imp_ae-pat-1_2",
              q: "Was unterscheidet die Pull- von der Push-Variante?",
              options: [
                "Bei Pull wird grundsätzlich nur ein einziger Observer benachrichtigt",
                "Bei Pull holt sich der Observer die benötigten Daten selbst vom Subject",
                "Push funktioniert ausschließlich synchron im selben Thread",
                "Die Pull-Variante kommt vollständig ohne Observer-Interface aus",
              ],
              correct: 1,
              explain:
                "Push: Daten werden an update(daten) mitgegeben. Pull: update(subject) erhält nur die Referenz, der Observer liest per Getter genau das, was er braucht.",
            },
            {
              id: "imp_ae-pat-1_3",
              q: "Welches alltägliche Konstrukt ist eine direkte Anwendung des Observer-Patterns?",
              options: [
                "Eine for-Schleife",
                "addEventListener im Browser",
                "Eine SQL-Transaktion",
                "Ein Konstruktor",
              ],
              correct: 1,
              explain:
                "Event-Listener sind Observer: Das DOM-Element ist das Subject, der Listener wird registriert und bei jedem Ereignis benachrichtigt.",
            },
          ],
        },
        {
          id: "ae-uml-2",
          title: "UML: Use-Case, Sequenz, Aktivität & Zustand",
          content: [
            {
              type: "text",
              value:
                'Das Klassendiagramm kennst du schon – in der FIAE-AP2 tauchen aber regelmäßig drei weitere UML-Diagrammtypen auf, jeweils mit klarem Einsatzzweck.\n\nDas USE-CASE-DIAGRAMM (Anwendungsfalldiagramm) zeigt, WAS ein System aus Nutzersicht können soll – nicht wie. Bausteine: Akteure (Strichmännchen, auch andere Systeme!), Anwendungsfälle (Ellipsen) und die Systemgrenze (Rechteck). Zwei Beziehungen musst du sauber unterscheiden: <<include>> bindet einen Anwendungsfall IMMER ein ("Bestellung aufgeben" include "Anmelden"), <<extend>> erweitert nur UNTER BEDINGUNG ("Bestellung aufgeben" extend "Rabatt anwenden"). Der Pfeil zeigt bei include vom Basis- zum eingebundenen Fall, bei extend vom erweiternden zum Basisfall – ein beliebter Prüfungsfehler.\n\nDas SEQUENZDIAGRAMM zeigt den zeitlichen Ablauf einer Interaktion: Objekte/Beteiligte oben nebeneinander, darunter gestrichelte Lebenslinien, die Zeit läuft von oben nach unten. Synchrone Aufrufe sind ausgefüllte Pfeile (Sender wartet auf Antwort), asynchrone offene Pfeile (Sender arbeitet weiter), Antworten gestrichelt. Aktivierungsbalken zeigen, wann ein Objekt arbeitet. Kombinierte Fragmente strukturieren den Ablauf: alt (Verzweigung mit Alternativen), opt (optional), loop (Wiederholung).\n\nDas AKTIVITÄTSDIAGRAMM ist das UML-Gegenstück zum Programmablaufplan: Startknoten (ausgefüllter Kreis), Aktionen (abgerundete Rechtecke), Entscheidungen (Rauten mit Bedingungen in eckigen Klammern), Endknoten (Kreis mit Punkt). Sein Alleinstellungsmerkmal: Gabelung/Synchronisation (schwarze Balken) für PARALLELE Abläufe und Schwimmbahnen (Partitionen) für Zuständigkeiten – z. B. Kunde / Shop / Versand.\n\nFaustregel für die Aufgabenauswahl in der Prüfung: Anforderungen aus Nutzersicht → Use Case; zeitliche Interaktion mehrerer Objekte → Sequenz; Ablauf mit Parallelität oder Zuständigkeiten → Aktivität; Struktur der Software → Klassendiagramm.',
            },
            { type: "heading", value: "Übungsaufgabe: Diagrammtyp wählen und begründen" },
            {
              type: "text",
              value:
                'Ein Kunde beschreibt: a) "Zeigen Sie, welche Funktionen Lagerist und Disponent im neuen Lagersystem nutzen können." b) "Dokumentieren Sie, wie App, API-Gateway und Datenbank beim Login nacheinander kommunizieren." c) "Modellieren Sie den Retourenprozess: Prüfung und Rückerstattung laufen teilweise parallel, beteiligt sind Kunde, Support und Buchhaltung." Nenne je Diagrammtyp und zwei typische Elemente, die du verwenden würdest.',
            },
            {
              type: "solution",
              value:
                'MUSTERLÖSUNG:\na) Use-Case-Diagramm – Elemente: Akteure Lagerist/Disponent, Anwendungsfall-Ellipsen innerhalb der Systemgrenze, ggf. <<include>> für gemeinsame Teilfunktionen wie "Anmelden".\nb) Sequenzdiagramm – Elemente: Lebenslinien für App, Gateway, DB; synchrone Aufrufpfeile mit gestrichelten Antworten; Aktivierungsbalken; ggf. alt-Fragment für "Login gültig/ungültig".\nc) Aktivitätsdiagramm – Elemente: Schwimmbahnen für Kunde/Support/Buchhaltung; Gabelungs-/Synchronisationsbalken für die parallelen Schritte Prüfung und Rückerstattung; Entscheidungsraute "[Ware beschädigt?]".',
            },
            { type: "heading", value: "Vertiefung: typische Prüfungsfallen" },
            {
              type: "text",
              value:
                'Drei Klassiker: 1) include/extend verwechselt – merke: inCLude = zwingend inCLuded, extend = Extra unter Bedingung. 2) Im Sequenzdiagramm Pfeilarten ignoriert – die Bewertung unterscheidet synchron/asynchron fast immer. 3) Im Aktivitätsdiagramm Raute als Parallelität missbraucht – eine Raute wählt genau EINEN Weg, parallele Wege erzeugt nur die Gabelung (Fork). Wenn die Aufgabe "gleichzeitig" sagt, gehört ein schwarzer Balken ins Diagramm.',
            },
            { type: "heading", value: "Zustandsdiagramm: Lebenszyklus eines Objekts" },
            {
              type: "text",
              value:
                'Das ZUSTANDSDIAGRAMM (State Machine) zeigt, welche Zustände EIN Objekt durchlaufen kann und welche Ereignisse die Übergänge auslösen – perfekt für Ticket-, Bestell- oder Gerätestatus. Notation: abgerundete Rechtecke für Zustände, Pfeile mit Beschriftung "Ereignis [Bedingung] / Aktion" für Übergänge (Transitionen), ausgefüllter Kreis als Start, umrandeter Punkt als Ende. Beispiel Support-Ticket: Neu → (Bearbeiter zugewiesen) → In Bearbeitung → (Lösung geliefert) → Gelöst → (Kunde bestätigt) → Geschlossen; aus Gelöst führt "Kunde widerspricht" zurück nach In Bearbeitung. Abgrenzung fürs Bewertungsraster: Das Aktivitätsdiagramm zeigt einen ABLAUF über viele Beteiligte, das Zustandsdiagramm das VERHALTEN eines einzelnen Objekts über seine Lebenszeit.\n\nDie übrigen Verhaltensdiagramme im Schnellüberblick: Das KOMMUNIKATIONSDIAGRAMM zeigt dieselben Nachrichten wie ein Sequenzdiagramm, betont aber die Beziehungen (Objekte als Netz, Nachrichten nummeriert an den Linien) statt der Zeitachse. Das ZEITVERLAUFSDIAGRAMM (Timing) trägt Zustände über einer echten Zeitachse ab – wichtig, wenn Fristen/Timeouts eine Rolle spielen (Embedded, Netzprotokolle). Das INTERAKTIONSÜBERSICHTSDIAGRAMM verknüpft mehrere Sequenzdiagramme wie ein Aktivitätsdiagramm zu einem Gesamtablauf. Für die Prüfung reicht meist: erkennen, benennen und den passenden Einsatzzweck zuordnen.',
            },
          ],
          quiz: [
            {
              id: "imp_ae-uml-2_g0",
              q: "Welche Beziehung im Use-Case-Diagramm bindet einen Anwendungsfall in jedem Durchlauf verpflichtend ein?",
              options: [
                "<<include>>",
                "<<extend>>",
                "Generalisierung",
                "Assoziation mit Multiplizität 1",
              ],
              correct: 0,
              explain:
                "<<include>> = immer eingebunden; <<extend>> ergänzt nur unter einer Bedingung.",
            },
            {
              id: "imp_ae-uml-2_g1",
              q: "Wofür steht ein ausgefüllter Pfeil im Sequenzdiagramm?",
              options: [
                "Asynchroner Aufruf – der Sender arbeitet sofort weiter",
                "Synchroner Aufruf – der Sender wartet auf die Antwort",
                "Antwortnachricht an den Aufrufer",
                "Erzeugung eines neuen Objekts",
              ],
              correct: 1,
              explain:
                "Ausgefüllte Pfeilspitze = synchron (warten), offene Spitze = asynchron, gestrichelt = Antwort.",
            },
            {
              id: "imp_ae-uml-2_g2",
              q: "Welches Element stellt im Aktivitätsdiagramm parallele Abläufe dar?",
              options: [
                "Die Entscheidungsraute mit mehreren bedingten Ausgängen, die alle gleichzeitig durchlaufen werden",
                "Zwei getrennte Startknoten",
                "Der schwarze Gabelungs-/Synchronisationsbalken (Fork/Join)",
                "Eine Schwimmbahn je parallelem Zweig",
              ],
              correct: 2,
              explain:
                "Fork teilt in parallele Pfade, Join führt sie zusammen. Die Raute wählt dagegen genau einen Weg.",
            },
            {
              id: "imp_ae-uml-2_g3",
              q: "Ein Bezahldienst-Server ist am Bestellprozess beteiligt. Wie erscheint er im Use-Case-Diagramm?",
              options: [
                "Gar nicht – als Akteure gelten ausschließlich menschliche Benutzer des Systems",
                "Als Anwendungsfall-Ellipse im System",
                "Als Kommentar am Diagrammrand",
                "Als eigener Akteur außerhalb der Systemgrenze",
              ],
              correct: 3,
              explain:
                "Akteure können auch externe Systeme sein; sie stehen immer außerhalb der Systemgrenze.",
            },
            {
              id: "imp_ae-uml-2_g4",
              q: "Wozu dienen Schwimmbahnen (Partitionen) im Aktivitätsdiagramm?",
              options: [
                "Sie ordnen Aktionen Zuständigkeiten wie Abteilungen oder Rollen zu",
                "Sie markieren besonders zeitkritische Aktionen im Ablauf farblich",
                "Sie trennen Start- und Endknoten optisch",
                "Sie gruppieren ausschließlich parallele Aktionen",
              ],
              correct: 0,
              explain:
                "Jede Bahn gehört einem Verantwortlichen; Aktionen liegen in der Bahn dessen, der sie ausführt.",
            },
            {
              id: "imp_ae-uml-2_g5",
              q: "Welches kombinierte Fragment im Sequenzdiagramm bildet eine Wenn-dann-sonst-Verzweigung ab?",
              options: ["loop", "alt", "opt", "ref"],
              correct: 1,
              explain:
                "alt enthält mehrere Bereiche mit Bedingungen; opt ist nur ein optionaler Block ohne Alternative.",
            },
            {
              id: "imp_ae-uml-2_g6",
              q: '"Rabatt anwenden" soll "Bestellung aufgeben" nur bei Aktionscode ergänzen. Wie modellierst du das?',
              options: [
                '"Bestellung aufgeben" <<include>> "Rabatt anwenden"',
                'Generalisierung von "Rabatt anwenden" zu "Bestellung aufgeben"',
                '"Rabatt anwenden" <<extend>> "Bestellung aufgeben"',
                "Beide Fälle zu einem Anwendungsfall zusammenfassen",
              ],
              correct: 2,
              explain:
                "Bedingte Erweiterung = extend, Pfeil vom erweiternden zum Basis-Anwendungsfall.",
            },
            {
              id: "imp_ae-uml-2_g7",
              q: "In welcher Richtung verläuft die Zeit im Sequenzdiagramm?",
              options: [
                "Von links nach rechts entlang der Nachrichten",
                "Von unten nach oben zur wichtigsten Nachricht",
                "Im Uhrzeigersinn um die Systemgrenze",
                "Von oben nach unten entlang der Lebenslinien",
              ],
              correct: 3,
              explain:
                "Oben stehen die Beteiligten, die gestrichelten Lebenslinien wachsen mit der Zeit nach unten.",
            },
            {
              id: "imp_ae-uml-2_g8",
              q: "Für welche Aufgabenstellung ist das Aktivitätsdiagramm die beste Wahl?",
              options: [
                "Geschäftsprozess mit Entscheidungen und parallelen Schritten modellieren",
                "Statischen Aufbau der Klassen mit Attributen zeigen",
                "Nachrichtenreihenfolge zwischen genau zwei Objekten dokumentieren",
                "Funktionsumfang aus Sicht der Benutzer abgrenzen",
              ],
              correct: 0,
              explain:
                "Abläufe mit Verzweigung/Parallelität sind die Domäne des Aktivitätsdiagramms.",
            },
            {
              id: "imp_ae-uml-2_g9",
              q: "Was zeigt der Aktivierungsbalken auf einer Lebenslinie an?",
              options: [
                "Das Objekt wurde soeben erzeugt",
                "Das Objekt führt gerade eine Operation aus",
                "Das Objekt wurde zerstört",
                "Das Objekt wartet dauerhaft auf Ereignisse",
              ],
              correct: 1,
              explain:
                "Der schmale Balken markiert die aktive Ausführungszeit; Objekterzeugung/-zerstörung haben eigene Notationen.",
            },
            {
              id: "imp_ae-uml-2_g10",
              q: "Ein Support-Ticket durchläuft die Status Neu, In Bearbeitung, Gelöst und Geschlossen. Welches Diagramm bildet das ab?",
              options: [
                "Das Zustandsdiagramm – es zeigt die Zustände eines Objekts und die auslösenden Ereignisse",
                "Das Use-Case-Diagramm mit vier Anwendungsfällen",
                "Das Klassendiagramm mit vier Unterklassen des Tickets",
                "Das Kommunikationsdiagramm mit nummerierten Nachrichten",
              ],
              correct: 0,
              explain:
                "Ein Objekt, mehrere Zustände, Ereignisse als Übergänge – die Domäne der State Machine.",
            },
            {
              id: "imp_ae-uml-2_g11",
              q: "Worin unterscheidet sich das Kommunikationsdiagramm vom Sequenzdiagramm?",
              options: [
                "Es kann im Gegensatz zum Sequenzdiagramm keine Antwortnachrichten darstellen",
                "Es zeigt dieselben Nachrichten, betont aber das Beziehungsnetz statt der Zeitachse",
                "Es eignet sich ausschließlich für die Modellierung von Datenbanken",
                "Es ersetzt sämtliche Nachrichten durch die Zustände der Objekte",
              ],
              correct: 1,
              explain:
                "Gleicher Inhalt, andere Sicht: Netz mit nummerierten Nachrichten statt Lebenslinien von oben nach unten.",
            },
            {
              id: "imp_ae-uml-2_g12",
              q: "Wie wird ein Übergang im Zustandsdiagramm beschriftet?",
              options: [
                "Nur mit einer laufenden Nummer",
                "Mit dem Namen des Zielzustands in Klammern",
                "Ereignis [Bedingung] / Aktion",
                "Mit der Multiplizität wie im Klassendiagramm",
              ],
              correct: 2,
              explain:
                "Das Ereignis löst aus, die optionale Bedingung muss gelten, die Aktion wird beim Übergang ausgeführt.",
            },
          ],
        },
        {
          id: "ae-ds-1",
          title: "Datenstrukturen: Array, Liste, Stack, Queue, Baum & Hash",
          content: [
            {
              type: "text",
              value:
                'Die Wahl der Datenstruktur entscheidet über Laufzeit und Speicher – und ist ein FIAE-Dauerbrenner: "Welche Struktur wählen Sie und warum?"\n\nARRAY: feste Größe, Elemente liegen lückenlos im Speicher. Zugriff per Index in O(1), aber Einfügen/Löschen in der Mitte kostet O(n), weil alles verschoben werden muss.\n\nVERKETTETE LISTE: jedes Element (Knoten) trägt Daten + Zeiger auf den Nachfolger (bei doppelter Verkettung auch Vorgänger). Einfügen/Löschen an bekannter Position O(1), dafür Suche/Zugriff O(n) – man muss durchhangeln. Wächst dynamisch.\n\nSTACK (Stapel, LIFO – Last In, First Out): nur oben zugreifbar. Operationen push (drauflegen), pop (oberstes entnehmen), peek/top (ansehen ohne Entnahme). Praxis: Aufrufstack (Rekursion!), Undo-Funktion, Klammerprüfung im Parser.\n\nQUEUE (Warteschlange, FIFO – First In, First Out): hinten enqueue, vorne dequeue. Praxis: Druckaufträge, Nachrichten-Queues, Breitensuche. Variante Ringpuffer: festes Array, Indizes laufen modulo der Größe im Kreis.\n\nBINÄRER SUCHBAUM: links kleiner, rechts größer. Suche/Einfügen im BALANCIERTEN Baum O(log n) – im entarteten Baum (sortiert eingefügt!) verkommt er zur Liste mit O(n). Deshalb selbstbalancierende Varianten (AVL, Rot-Schwarz).\n\nHASHTABELLE (Map/Dictionary): Schlüssel → Hashfunktion → Speicherplatz. Durchschnittlich O(1) für Suchen/Einfügen/Löschen. Problem Kollision (zwei Schlüssel, gleicher Platz): Lösung per Verkettung (Liste am Platz) oder offener Adressierung (nächsten freien Platz suchen). Keine sortierte Reihenfolge!',
            },
            { type: "heading", value: "Übungsaufgabe: Struktur begründet auswählen" },
            {
              type: "text",
              value:
                "Wähle für jedes Szenario die passende Datenstruktur und begründe in einem Satz: a) Undo-Verlauf eines Grafikeditors, b) faire Abarbeitung eingehender Support-Tickets, c) Artikelsuche über die Artikelnummer in einem Shop mit 500.000 Artikeln, d) ständig sortierte Ausgabe aller Kundennamen bei häufigen Einfügungen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Stack – Undo braucht die zuletzt ausgeführte Aktion zuerst (LIFO).\nb) Queue – Tickets werden in Eingangsreihenfolge bearbeitet (FIFO, Fairness).\nc) Hashtabelle – Schlüsselzugriff über die Artikelnummer im Schnitt in O(1); Sortierung wird nicht benötigt.\nd) Balancierter binärer Suchbaum – hält die Ordnung bei Einfügungen in O(log n); ein Inorder-Durchlauf liefert alle Namen sortiert.",
            },
            { type: "heading", value: "Vertiefung: die Prüfungsfrage hinter der Frage" },
            {
              type: "text",
              value:
                'Wenn die Aufgabe Zugriffszahlen nennt ("häufig lesen, selten einfügen"), fragt sie eigentlich nach Komplexitäten: viel Lesen per Schlüssel → Hash; viel Lesen per Position → Array; viel Einfügen/Löschen mitten drin → Liste; sortiert halten → Baum. Nenne in der Begründung immer die Operation UND ihre Laufzeit – dafür gibt es die Punkte. Und denke an die Schwäche jeder Struktur: Hash unsortiert, Array starr, Liste ohne Direktzugriff, Baum nur balanciert schnell.',
            },
          ],
          quiz: [
            {
              id: "imp_ae-ds-1_g0",
              q: "Nach welchem Prinzip arbeitet ein Stack?",
              options: [
                "FIFO – das älteste Element wird zuerst entnommen",
                "Priorität – das wichtigste Element wird zuerst entnommen",
                "LIFO – das zuletzt abgelegte Element wird zuerst entnommen",
                "Zufall – die Entnahmereihenfolge ist nicht definiert",
              ],
              correct: 2,
              explain: "Last In, First Out: pop liefert immer das zuletzt gepushte Element.",
            },
            {
              id: "imp_ae-ds-1_g1",
              q: "Warum kostet das Einfügen in der Mitte eines Arrays O(n)?",
              options: [
                "Weil das Array dabei komplett neu sortiert wird",
                "Weil der Index erst per Suche bestimmt werden muss",
                "Weil Arrays grundsätzlich nur am Ende beschreibbar sind",
                "Weil alle nachfolgenden Elemente verschoben werden müssen",
              ],
              correct: 3,
              explain:
                "Die lückenlose Speicherung erzwingt das Verschieben aller Elemente hinter der Einfügeposition.",
            },
            {
              id: "imp_ae-ds-1_g2",
              q: "Welche Struktur passt zu Druckaufträgen, die in Eingangsreihenfolge abgearbeitet werden?",
              options: ["Queue", "Stack", "Binärer Suchbaum", "Hashtabelle"],
              correct: 0,
              explain: "Warteschlange = FIFO: enqueue hinten, dequeue vorne.",
            },
            {
              id: "imp_ae-ds-1_g3",
              q: "Was passiert bei einer Kollision in einer Hashtabelle?",
              options: [
                "Der neue Datensatz wird verworfen und ein Laufzeitfehler an die aufrufende Anwendung gemeldet",
                "Zwei Schlüssel treffen denselben Platz – gelöst z. B. per Verkettung oder offener Adressierung",
                "Die komplette Tabelle wird sofort neu aufgebaut",
                "Der zweite Schlüssel wird automatisch umbenannt",
              ],
              correct: 1,
              explain:
                "Kollisionen sind normal; Verkettung (Liste am Slot) und offene Adressierung sind die Standardlösungen.",
            },
            {
              id: "imp_ae-ds-1_g4",
              q: "Wann degeneriert ein binärer Suchbaum zur Laufzeit O(n) pro Suche?",
              options: [
                "Wenn er mehr als 1000 Knoten enthält",
                "Wenn Schlüssel doppelt vorkommen",
                "Wenn bereits sortierte Daten unbalanciert eingefügt werden",
                "Wenn der Wurzelknoten des Baums nachträglich gelöscht wird",
              ],
              correct: 2,
              explain:
                "Sortiertes Einfügen erzeugt eine einseitige Kette – der Baum wird faktisch zur Liste; Abhilfe: AVL/Rot-Schwarz.",
            },
            {
              id: "imp_ae-ds-1_g5",
              q: "Welchen Vorteil hat die verkettete Liste gegenüber dem Array?",
              options: [
                "Deutlich schnellerer wahlfreier Zugriff über den Elementindex",
                "Geringerer Speicherbedarf pro Element",
                "Die Elemente bleiben ohne weiteres Zutun automatisch dauerhaft sortiert gespeichert",
                "Einfügen und Löschen an bekannter Stelle in O(1) und dynamisches Wachstum",
              ],
              correct: 3,
              explain: "Nur Zeiger umhängen statt verschieben; dafür kein Direktzugriff per Index.",
            },
            {
              id: "imp_ae-ds-1_g6",
              q: "Welche Operationen gehören zum Stack?",
              options: [
                "push, pop und peek",
                "enqueue und dequeue",
                "insert und select",
                "hash, probe und rehash",
              ],
              correct: 0,
              explain: "push legt ab, pop entnimmt, peek liest das oberste Element ohne Entnahme.",
            },
            {
              id: "imp_ae-ds-1_g7",
              q: "Ein Shop sucht Artikel ausschließlich über die eindeutige Artikelnummer. Welche Struktur liefert im Schnitt O(1)?",
              options: [
                "Sortiertes Array mit Binärsuche",
                "Hashtabelle",
                "Doppelt verkettete Liste",
                "Balancierter Suchbaum",
              ],
              correct: 1,
              explain:
                "Hashfunktion bildet den Schlüssel direkt auf den Speicherplatz ab – Binärsuche wäre O(log n).",
            },
            {
              id: "imp_ae-ds-1_g8",
              q: "Welche Aussage über Hashtabellen ist korrekt?",
              options: [
                "Sie halten ihre Einträge stets in sortierter Reihenfolge",
                "Sie sind bei Bereichsabfragen (von–bis) dank der Hashfunktion besonders effizient",
                "Sie bieten im Durchschnitt O(1), liefern aber keine sortierte Reihenfolge",
                "Sie funktionieren nur mit numerischen Schlüsseln",
              ],
              correct: 2,
              explain:
                "Die Hashfunktion verteilt bewusst wahllos – sortierte oder Bereichs-Ausgaben sind die Domäne des Suchbaums.",
            },
            {
              id: "imp_ae-ds-1_g9",
              q: "Der Aufrufstack eines Programms ist voll (Stack Overflow). Welche typische Ursache steckt oft dahinter?",
              options: [
                "Zu viele gleichzeitig wartende Elemente in einer Warteschlange (Queue) des Programms",
                "Eine Hashtabelle mit vielen Kollisionen",
                "Ein stark unbalancierter binärer Suchbaum",
                "Eine Endlos- oder zu tiefe Rekursion ohne greifende Abbruchbedingung",
              ],
              correct: 3,
              explain:
                "Jeder Rekursionsaufruf legt einen Frame auf den Stack – ohne Abbruch läuft er über.",
            },
          ],
        },
        {
          id: "ae-bigo-1",
          title: "Laufzeitkomplexität: O-Notation im Prüfungskontext",
          content: [
            {
              type: "text",
              value:
                "Die O-Notation beschreibt, wie die Laufzeit (oder der Speicherbedarf) eines Algorithmus mit der Eingabegröße n WÄCHST – unabhängig von Hardware und konstanten Faktoren. Sie ist eine Obergrenze für den Worst Case und die Standardsprache, um Algorithmen zu vergleichen.\n\nDie wichtigsten Klassen von schnell nach langsam:\nO(1) konstant – Zugriff aufs Array-Element, Hash-Lookup. Die Eingabegröße spielt keine Rolle.\nO(log n) logarithmisch – Binärsuche im sortierten Array: jeder Schritt halbiert den Suchraum. Bei n = 1.000.000 nur ca. 20 Schritte!\nO(n) linear – einmal alles durchlaufen: lineare Suche, Maximum finden, Summe bilden.\nO(n log n) – die guten Sortierverfahren: Mergesort immer, Quicksort im Durchschnitt.\nO(n²) quadratisch – verschachtelte Schleifen über dieselben Daten: Bubblesort, Insertionsort, jedes Paar vergleichen. Bei n = 10.000 schon 100 Millionen Operationen.\nO(2^n) exponentiell – praktisch nur für kleine n lösbar (z. B. alle Teilmengen durchprobieren).\n\nRegeln fürs Bestimmen: 1) Konstante Faktoren und niedrigere Terme fallen weg: 3n² + 50n + 7 → O(n²). 2) Hintereinander ausgeführte Blöcke: der größte gewinnt. 3) Verschachtelte Schleifen: Komplexitäten multiplizieren sich (zwei ineinander über n → n·n = n²). 4) Halbieren pro Schritt → log n.\n\nTypische Prüfungswerte zum Einordnen: lineare Suche O(n), Binärsuche O(log n) – erfordert aber SORTIERTE Daten; Bubblesort/Insertionsort O(n²), Mergesort O(n log n) mit O(n) Zusatzspeicher, Quicksort im Schnitt O(n log n), im Worst Case (ungünstige Pivots) O(n²).",
            },
            { type: "heading", value: "Übungsaufgabe: Komplexität bestimmen" },
            {
              type: "text",
              value:
                "Bestimme jeweils die O-Klasse und begründe kurz:\na) FÜR i = 1 BIS n: FÜR j = 1 BIS n: vergleiche(i,j)\nb) solange n > 1: n = n / 2\nc) FÜR i = 1 BIS n: summe += a[i]; danach FÜR j = 1 BIS n: prüfe(a[j])\nd) Suche eines Namens in einer unsortierten Kundenliste mit n Einträgen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) O(n²) – zwei ineinander verschachtelte Schleifen über n: n·n Vergleiche.\nb) O(log n) – n wird pro Schritt halbiert, nach log₂(n) Schritten ist 1 erreicht.\nc) O(n) – zwei Schleifen NACHEINANDER sind n + n = 2n, Konstante fällt weg.\nd) O(n) – unsortiert bleibt nur die lineare Suche, im Worst Case alle n Einträge prüfen. (Erst Sortieren + Binärsuche lohnt nur bei vielen Suchvorgängen.)",
            },
            { type: "heading", value: "Vertiefung: Worst, Best & Average Case" },
            {
              type: "text",
              value:
                'Die O-Notation meint üblicherweise den Worst Case – aber Aufgaben fragen gern nach Unterschieden: Lineare Suche findet das Element im Best Case sofort (O(1)), im Schnitt nach n/2, im Worst Case nach n Schritten – alles zusammen O(n). Quicksort ist der Klassiker der Diskrepanz: durchschnittlich O(n log n), aber O(n²), wenn das Pivot immer das kleinste/größte Element ist (etwa bei vorsortierten Daten und naiver Pivotwahl). Wenn eine Aufgabe "garantiert n log n" verlangt, ist Mergesort (oder Heapsort) die richtige Antwort, nicht Quicksort.',
            },
          ],
          quiz: [
            {
              id: "imp_ae-bigo-1_g0",
              q: "Was beschreibt die O-Notation?",
              options: [
                "Das Wachstum des Aufwands in Abhängigkeit von der Eingabegröße n",
                "Die exakte Laufzeit eines Programms in Millisekunden auf der Zielhardware",
                "Den Speicherverbrauch des Quellcodes",
                "Die Anzahl der Codezeilen eines Algorithmus",
              ],
              correct: 0,
              explain:
                "Es geht um die Größenordnung des Wachstums, nicht um absolute Zeiten – Hardware und Konstanten bleiben außen vor.",
            },
            {
              id: "imp_ae-bigo-1_g1",
              q: "Welche Komplexität hat die Binärsuche im sortierten Array?",
              options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
              correct: 1,
              explain:
                "Jeder Vergleich halbiert den Suchraum – Halbieren pro Schritt ist das Markenzeichen von log n.",
            },
            {
              id: "imp_ae-bigo-1_g2",
              q: "Zwei ineinander verschachtelte Schleifen laufen jeweils über alle n Elemente. Gesamtkomplexität?",
              options: ["O(2n)", "O(n log n)", "O(n²)", "O(n) – die innere Schleife zählt nicht"],
              correct: 2,
              explain: "Verschachtelt heißt multiplizieren: n · n = n².",
            },
            {
              id: "imp_ae-bigo-1_g3",
              q: "Vereinfache 5n² + 100n + 3000 in O-Notation.",
              options: ["O(5n²)", "O(n³)", "O(100n)", "O(n²)"],
              correct: 3,
              explain:
                "Konstante Faktoren und niedrigere Terme entfallen – es bleibt die höchste Potenz n².",
            },
            {
              id: "imp_ae-bigo-1_g4",
              q: "Welches Sortierverfahren garantiert auch im Worst Case O(n log n)?",
              options: ["Mergesort", "Quicksort", "Bubblesort", "Insertionsort"],
              correct: 0,
              explain:
                "Mergesort teilt immer sauber in Hälften; Quicksort kann mit ungünstigen Pivots auf O(n²) abrutschen.",
            },
            {
              id: "imp_ae-bigo-1_g5",
              q: "Was ist Voraussetzung für die Binärsuche?",
              options: [
                "Die Daten liegen in einer Hashtabelle",
                "Die Daten sind sortiert",
                "Die Daten enthalten keine Duplikate",
                "Die Datenmenge ist kleiner als 1000 Elemente",
              ],
              correct: 1,
              explain:
                "Ohne Sortierung kann man den Suchraum nicht gezielt halbieren – dann bleibt nur linear O(n).",
            },
            {
              id: "imp_ae-bigo-1_g6",
              q: "Ein Algorithmus braucht bei n=100 rund 10.000 Operationen, bei n=200 rund 40.000. Welche Klasse liegt nahe?",
              options: ["O(n)", "O(log n)", "O(n²)", "O(2^n)"],
              correct: 2,
              explain:
                "Doppelte Eingabe, vierfacher Aufwand (2² = 4) – das ist quadratisches Wachstum.",
            },
            {
              id: "imp_ae-bigo-1_g7",
              q: "Zwei Schleifen über n laufen NACHEINANDER (nicht verschachtelt). Gesamtkomplexität?",
              options: ["O(n²)", "O(n log n)", "O(2^n)", "O(n)"],
              correct: 3,
              explain: "Sequenzen addieren sich: n + n = 2n → Konstante weg → O(n).",
            },
            {
              id: "imp_ae-bigo-1_g8",
              q: "Wann rutscht Quicksort in seinen Worst Case O(n²)?",
              options: [
                "Wenn die Pivot-Wahl stets das kleinste oder größte Element trifft, z. B. bei vorsortierten Daten",
                "Bei mehr als einer Million Elementen",
                "Wenn die Daten Duplikate enthalten",
                "Immer dann, sobald der Algorithmus rekursiv statt iterativ implementiert wird – Rekursion kostet n²",
              ],
              correct: 0,
              explain:
                "Extrem unbalancierte Teilungen machen aus dem Teilen-und-Herrschen eine n²-Kaskade.",
            },
            {
              id: "imp_ae-bigo-1_g9",
              q: "Der Zugriff auf ein Element einer Hashtabelle über den Schlüssel liegt im Durchschnitt bei …",
              options: ["O(log n)", "O(1)", "O(n)", "O(n log n)"],
              correct: 1,
              explain:
                "Die Hashfunktion berechnet den Speicherplatz direkt – unabhängig von der Anzahl der Einträge.",
            },
          ],
        },
        {
          id: "ae-pat-2",
          title: "Entwurfsmuster: Singleton, Factory & MVC",
          content: [
            {
              type: "text",
              value:
                'Entwurfsmuster (Design Patterns) sind bewährte Lösungsschablonen für wiederkehrende Entwurfsprobleme – die "Gang of Four" (GoF) hat 23 davon katalogisiert, gegliedert in Erzeugungs-, Struktur- und Verhaltensmuster. In der FIAE-Prüfung musst du die wichtigsten erkennen, zuordnen und ihren Zweck begründen.\n\nSINGLETON (Erzeugungsmuster): stellt sicher, dass es von einer Klasse GENAU EINE Instanz gibt, mit globalem Zugriffspunkt. Umsetzung: privater Konstruktor, statische Methode getInstance(), die die einzige Instanz verwaltet. Praxis: Logger, Konfigurationsobjekt, Verbindungspool. Kritik (auch prüfungsrelevant!): erschwert Unit-Tests (globaler Zustand), versteckte Abhängigkeiten – sparsam einsetzen.\n\nFACTORY METHOD (Erzeugungsmuster): Objekterzeugung wird in eine Methode ausgelagert, statt im Code überall new KonkreteKlasse() zu streuen. Der Aufrufer kennt nur das Interface/die Oberklasse; WELCHE konkrete Klasse entsteht, entscheidet die Factory (z. B. anhand eines Parameters oder in Unterklassen). Vorteil: neue Produkttypen ergänzen, ohne den aufrufenden Code anzufassen (Open-Closed-Prinzip).\n\nMVC – MODEL, VIEW, CONTROLLER (Architekturmuster): trennt Daten und Logik (Model), Darstellung (View) und Eingabesteuerung (Controller). Der Controller nimmt Nutzereingaben entgegen und ändert das Model; die View zeigt den Model-Zustand an (oft per Observer über Änderungen informiert – hier verzahnen sich die Muster!). Vorteile: getrennte Testbarkeit, mehrere Views auf dieselben Daten, arbeitsteilige Entwicklung.\n\nDazu kennst du bereits den OBSERVER (Verhaltensmuster) aus der eigenen Lektion: Beobachter registrieren sich beim Subjekt und werden bei Zustandsänderung benachrichtigt – das Ereignis-Rückgrat vieler MVC-Umsetzungen.',
            },
            { type: "heading", value: "Übungsaufgabe: Muster erkennen und begründen" },
            {
              type: "text",
              value:
                "a) In einer Anwendung erzeugt die Methode erstelleExport(format) je nach Parameter ein PdfExport-, CsvExport- oder XmlExport-Objekt; alle implementieren das Interface Export. Welches Muster liegt vor und welchen Vorteil bringt es beim Ergänzen eines JSON-Exports?\nb) Die Klasse Konfiguration hat einen privaten Konstruktor und die statische Methode getInstance(). Welches Muster ist das, und nenne einen Nachteil.\nc) Ordne zu: In einer Webanwendung rendert PHP-Template-Code die Artikelliste, eine Klasse ArtikelRepository lädt die Daten, ein Router wertet die Anfrage aus und ruft die passende Aktion auf.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Factory Method – der JSON-Export wird als neue Klasse JsonExport implementiert und nur in der Factory ergänzt; sämtlicher Aufrufercode bleibt unverändert, da er nur das Interface Export kennt (Open-Closed-Prinzip).\nb) Singleton – genau eine Instanz, globaler Zugriff. Nachteil: globaler Zustand macht Unit-Tests schwer (keine Isolation, kein einfaches Mocken) und koppelt Klassen versteckt.\nc) MVC: ArtikelRepository/Datenhaltung = Model, Template = View, Router mit Aktionen = Controller.",
            },
            { type: "heading", value: "Vertiefung: Muster benennen reicht nicht" },
            {
              type: "text",
              value:
                'Volle Punkte gibt es fast nie für den Namen allein – die Bewertungsraster verlangen Zweck und Begründung im Szenario. Trainiere den Dreisatz: 1) Muster nennen, 2) Kernmechanik in einem Satz ("privater Konstruktor + getInstance stellt Einmaligkeit sicher"), 3) Nutzen im konkreten Fall ("alle Module loggen in dieselbe Datei, keine konkurrierenden Instanzen"). Und lerne die Abgrenzung: Singleton regelt WIE VIELE Instanzen existieren, Factory WER die Instanz erzeugt, Observer WIE Objekte über Änderungen informiert werden, MVC WO welche Verantwortung liegt.',
            },
          ],
          quiz: [
            {
              id: "imp_ae-pat-2_g0",
              q: "Welche Kombination kennzeichnet das Singleton-Muster?",
              options: [
                "Öffentlicher Konstruktor kombiniert mit ausschließlich statischen Attributen",
                "Abstrakte Oberklasse und viele Unterklassen",
                "Privater Konstruktor und eine statische getInstance()-Methode",
                "Interface mit genau einer Methode",
              ],
              correct: 2,
              explain:
                "Der private Konstruktor verhindert fremdes new; getInstance() verwaltet die einzige Instanz.",
            },
            {
              id: "imp_ae-pat-2_g1",
              q: "Was ist der Hauptzweck der Factory Method?",
              options: [
                "Objekte automatisch nach Gebrauch zu zerstören",
                "Mehrere Instanzen einer Klasse zu verhindern",
                "Die Views einer Anwendung automatisch mit dem Zustand des Models zu synchronisieren",
                "Die Erzeugung konkreter Objekte zu kapseln – Aufrufer kennen nur das Interface",
              ],
              correct: 3,
              explain:
                "Die Entscheidung, welche konkrete Klasse entsteht, liegt zentral in der Factory statt verstreut im Code.",
            },
            {
              id: "imp_ae-pat-2_g2",
              q: "Zu welcher GoF-Kategorie gehören Singleton und Factory Method?",
              options: [
                "Erzeugungsmuster",
                "Verhaltensmuster",
                "Strukturmuster",
                "Architekturmuster",
              ],
              correct: 0,
              explain:
                "Beide regeln die Objekterzeugung – Observer ist dagegen ein Verhaltensmuster.",
            },
            {
              id: "imp_ae-pat-2_g3",
              q: "Welche Aufgabe hat das Model in MVC?",
              options: [
                "Nutzereingaben entgegennehmen und Aktionen auslösen",
                "Daten und Geschäftslogik halten und verwalten",
                "Die Oberfläche rendern",
                "HTTP-Anfragen auf Routen verteilen",
              ],
              correct: 1,
              explain:
                "Das Model ist die Daten- und Logikschicht; View zeigt an, Controller steuert.",
            },
            {
              id: "imp_ae-pat-2_g4",
              q: "Ein neuer Exporttyp soll ergänzt werden, ohne bestehenden Aufrufercode zu ändern. Welches Prinzip erfüllt die Factory damit?",
              options: [
                "Single-Responsibility-Prinzip",
                "DRY – Don't Repeat Yourself: dieselbe Logik nie an mehreren Stellen doppelt pflegen",
                "Open-Closed-Prinzip – offen für Erweiterung, geschlossen für Änderung",
                "KISS – Keep It Simple",
              ],
              correct: 2,
              explain:
                "Erweiterung per neuer Klasse plus Factory-Eintrag, keine Änderung an den Nutzern des Interfaces.",
            },
            {
              id: "imp_ae-pat-2_g5",
              q: "Warum gilt das Singleton als testfeindlich?",
              options: [
                "Es benötigt zwingend eine Datenbankverbindung",
                "Es kann in rein objektorientierten Sprachen technisch nicht sauber implementiert werden",
                "Es erzeugt bei jedem Aufruf eine neue Instanz",
                "Sein globaler Zustand überdauert Tests und lässt sich schlecht isolieren oder mocken",
              ],
              correct: 3,
              explain:
                "Globale, versteckte Abhängigkeiten koppeln Tests aneinander – ein Standard-Kritikpunkt.",
            },
            {
              id: "imp_ae-pat-2_g6",
              q: "Welches Muster informiert registrierte Objekte automatisch über Zustandsänderungen?",
              options: ["Observer", "Singleton", "Factory Method", "Adapter"],
              correct: 0,
              explain:
                "Beobachter melden sich beim Subjekt an und erhalten bei Änderungen eine Benachrichtigung – so hält oft die View den Model-Stand.",
            },
            {
              id: "imp_ae-pat-2_g7",
              q: 'In einer MVC-Webanwendung klickt der Nutzer "Artikel löschen". Welche Komponente verarbeitet den Klick zuerst?',
              options: [
                "Die View – sie entfernt die Tabellenzeile",
                "Der Controller – er nimmt die Eingabe an und ruft die Model-Operation auf",
                "Das Model – es erkennt die Eingabe selbst und löscht den Datensatz eigenständig und sofort",
                "Die Datenbank – sie löst einen Trigger aus",
              ],
              correct: 1,
              explain:
                "Eingaben laufen über den Controller; der ändert das Model, die View aktualisiert sich danach.",
            },
            {
              id: "imp_ae-pat-2_g8",
              q: "Welcher Vorteil ergibt sich aus der MVC-Trennung?",
              options: [
                "Die Anwendung benötigt keine Datenbank mehr",
                "Der Quellcode wird zwangsläufig kürzer",
                "Model, View und Controller sind getrennt testbar und austauschbar",
                "Es können durch die Schichtentrennung keine Laufzeitfehler mehr auftreten",
              ],
              correct: 2,
              explain:
                "Entkopplung ist der Kernnutzen – z. B. Web-View und App-View auf demselben Model.",
            },
            {
              id: "imp_ae-pat-2_g9",
              q: "Wofür ist ein Singleton ein typischer, sinnvoller Einsatzfall?",
              options: [
                "Für jede Entity-Klasse eines Datenmodells",
                "Für sämtliche Klassen des Datenmodells mit mehr als fünf Attributen",
                "Für kurzlebige Wertobjekte wie Geldbeträge",
                "Für einen zentralen Logger oder ein Konfigurationsobjekt",
              ],
              correct: 3,
              explain:
                "Genau eine koordinierte Instanz ergibt bei Logger/Konfiguration Sinn – Entities brauchen viele Instanzen.",
            },
          ],
        },
        {
          id: "ae-rek-1",
          title: "Rekursion: Basisfall, Aufrufstapel & Prüfungsklassiker",
          content: [
            {
              type: "text",
              value:
                "Rekursion heißt: Eine Funktion ruft sich selbst auf – mit einem kleineren Teilproblem, bis ein trivial lösbarer Fall erreicht ist. Jede korrekte Rekursion braucht zwei Bausteine: den BASISFALL (Abbruchbedingung, die OHNE weiteren Selbstaufruf ein Ergebnis liefert) und den REKURSIONSFALL (führt das Problem auf eine kleinere Instanz zurück). Fehlt der Basisfall oder wird er nie erreicht, ruft sich die Funktion endlos selbst auf – der Aufrufstapel (Call Stack) läuft voll und das Programm bricht mit einem Stack Overflow ab.\n\nTechnisch legt JEDER Aufruf einen eigenen Stackframe an: lokale Variablen, Parameter und die Rücksprungadresse. Bei fakultaet(4) liegen also zeitweise vier Frames übereinander; erst wenn der Basisfall erreicht ist, werden sie von oben nach unten wieder abgebaut und die Teilergebnisse multipliziert. Genau deshalb kostet Rekursion Speicher proportional zur Aufruftiefe – O(n) zusätzlicher Speicher, wo eine Schleife mit O(1) auskommt.\n\nMan unterscheidet DIREKTE Rekursion (f ruft f) und INDIREKTE Rekursion (f ruft g, g ruft wieder f). In der Prüfung reicht meist die direkte Form – wichtig ist, dass du einen rekursiven Ablauf von Hand nachvollziehen (tracen) kannst.",
            },
            { type: "heading", value: "Klassiker: Fakultät & Fibonacci" },
            {
              type: "text",
              value:
                "Fakultät als Pseudocode:\n\nFUNKTION fakultaet(n)\n  WENN n <= 1 DANN RÜCKGABE 1        // Basisfall\n  SONST RÜCKGABE n * fakultaet(n-1)  // Rekursionsfall\nENDE\n\nTrace für fakultaet(4): 4·fakultaet(3) → 4·(3·fakultaet(2)) → 4·(3·(2·fakultaet(1))) → 4·3·2·1 = 24. Aufruftiefe: 4 Frames.\n\nFibonacci naiv – fib(n) = fib(n-1) + fib(n-2) mit fib(0)=0, fib(1)=1 – ist der Warnhinweis der Prüfung: Jeder Aufruf erzeugt ZWEI neue, dieselben Teilprobleme werden immer wieder berechnet. Die Laufzeit wächst exponentiell, O(2^n). Abhilfe: MEMOISIERUNG – einmal berechnete Ergebnisse in einer Tabelle (Array/Hash) merken und beim nächsten Bedarf nachschlagen statt neu rechnen. Damit fällt die Laufzeit auf O(n). Merksatz: Rekursion beschreibt das Problem elegant, Memoisierung oder eine Schleife machen es schnell.\n\nGrundsatz für die Prüfung: JEDE Rekursion lässt sich auch iterativ formulieren (notfalls mit eigenem Stapel) – und umgekehrt. Iterativ ist meist speicherschonender, rekursiv oft näher an der mathematischen Definition (Fakultät, Baum-Traversierung, Türme von Hanoi).",
            },
            { type: "heading", value: "Übungsaufgabe: Rekursion von Hand tracen" },
            {
              type: "text",
              value:
                "Gegeben ist f(n): WENN n <= 1 DANN RÜCKGABE 1 SONST RÜCKGABE n * f(n-1).\n\na) Bestimme f(5) mit vollständigem Trace.\nb) Wie viele Funktionsaufrufe (inklusive des ersten) verursacht naives fib(5) mit fib(0)=0, fib(1)=1?\nc) Aus f wird versehentlich die Zeile mit dem Basisfall gelöscht. Was passiert beim Aufruf f(3)?\nd) Formuliere summe(n) rekursiv, sodass summe(n) = 0 + 1 + 2 + … + n gilt.\n\nErst selbst rechnen, dann Lösung aufklappen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) f(5) = 5·f(4) = 5·4·f(3) = 5·4·3·f(2) = 5·4·3·2·f(1) = 5·4·3·2·1 = 120.\nb) 15 Aufrufe. Zählformel A(n) = A(n-1) + A(n-2) + 1 mit A(0)=A(1)=1: A(2)=3, A(3)=5, A(4)=9, A(5)=15 – die Mehrfachberechnung derselben Teilprobleme ist hier direkt sichtbar (fib(1) allein wird 5-mal berechnet).\nc) Kein Basisfall → f ruft sich endlos mit n-1, n-2, … auf (auch für negative n). Der Aufrufstapel wächst, bis der Speicher erschöpft ist: Stack Overflow / Programmabbruch.\nd) FUNKTION summe(n): WENN n = 0 DANN RÜCKGABE 0 SONST RÜCKGABE n + summe(n-1). Basisfall summe(0)=0, Rekursionsfall n + summe(n-1).",
            },
            { type: "heading", value: "Endrekursion & Grenzen" },
            {
              type: "text",
              value:
                "ENDREKURSION (tail recursion) liegt vor, wenn der rekursive Aufruf die LETZTE Operation der Funktion ist und sein Ergebnis unverändert zurückgegeben wird. Manche Compiler/Interpreter optimieren das zu einer Schleife (Tail-Call-Optimierung) – der Stack wächst dann nicht mehr. Verlass dich in der Prüfung aber nicht darauf: Java und Python optimieren Endrekursion NICHT, Python bricht standardmäßig bei ca. 1.000 Aufruftiefe ab.\n\nWann also was? Rekursion glänzt bei selbstähnlichen Strukturen: Baum-Traversierung (Dateisystem, DOM, binärer Suchbaum), Divide & Conquer (Mergesort, Quicksort, binäre Suche), Backtracking. Für einfache Zählschleifen oder Summen ist Iteration die bessere Wahl – weniger Speicher, kein Stack-Risiko. Typische Prüfungsaufgaben: Rückgabewert eines rekursiven Pseudocodes bestimmen, Basisfall ergänzen, Aufrufanzahl zählen oder eine Rekursion in eine Schleife umschreiben – alles Varianten des Handwerks aus der Übung oben.",
            },
          ],
          quiz: [
            {
              id: "imp_ae-rek-1_0",
              q: "Welche zwei Bausteine braucht jede korrekte rekursive Funktion?",
              options: [
                "Schleife und Zähler",
                "Basisfall und Rekursionsfall",
                "Globale Variable und Rückgabewert",
                "Parameter und Kommentar",
              ],
              correct: 1,
              explain:
                "Der Basisfall beendet die Selbstaufrufe, der Rekursionsfall verkleinert das Problem. Fehlt einer von beiden, ist die Rekursion falsch.",
            },
            {
              id: "imp_ae-rek-1_1",
              q: "f(n): WENN n <= 1 DANN 1 SONST n * f(n-1). Was liefert f(4)?",
              options: ["10", "12", "24", "120"],
              correct: 2,
              explain: "4·3·2·1 = 24 – die klassische Fakultät. 120 wäre f(5).",
            },
            {
              id: "imp_ae-rek-1_2",
              q: "Was passiert, wenn der Basisfall einer Rekursion nie erreicht wird?",
              options: [
                "Der Aufrufstapel läuft voll – Stack Overflow / Programmabbruch",
                "Der Compiler meldet einen Syntaxfehler",
                "Die Funktion gibt automatisch 0 zurück",
                "Die Rekursion wird zur Iteration optimiert",
              ],
              correct: 0,
              explain:
                "Jeder Aufruf legt einen neuen Stackframe an. Ohne Abbruch wächst der Stapel, bis der Speicher erschöpft ist – ein Laufzeitfehler, kein Syntaxfehler.",
            },
            {
              id: "imp_ae-rek-1_3",
              q: "Welche Laufzeitklasse hat naives rekursives Fibonacci (fib(n-1)+fib(n-2))?",
              options: ["O(1)", "O(n)", "O(n log n)", "O(2^n)"],
              correct: 3,
              explain:
                "Jeder Aufruf erzeugt zwei neue, dieselben Teilprobleme werden mehrfach berechnet – exponentielles Wachstum.",
            },
            {
              id: "imp_ae-rek-1_4",
              q: "Was bewirkt Memoisierung bei rekursivem Fibonacci?",
              options: [
                "Sie halbiert die Aufruftiefe",
                "Sie wandelt die Rekursion in Endrekursion um",
                "Bereits berechnete Teilergebnisse werden gespeichert – Laufzeit sinkt auf O(n)",
                "Sie verhindert Stack Overflow bei fehlendem Basisfall",
              ],
              correct: 2,
              explain:
                "Einmal berechnete fib-Werte landen in einer Tabelle und werden nachgeschlagen statt neu berechnet – aus O(2^n) wird O(n).",
            },
            {
              id: "imp_ae-rek-1_5",
              q: "Wann spricht man von Endrekursion (tail recursion)?",
              options: [
                "Wenn die Funktion am Ende des Programms steht",
                "Wenn der rekursive Aufruf die letzte Operation ist und sein Ergebnis direkt zurückgegeben wird",
                "Wenn die Rekursion mit n-1 statt n+1 arbeitet",
                "Wenn genau zwei rekursive Aufrufe erfolgen",
              ],
              correct: 1,
              explain:
                "Nach dem Selbstaufruf passiert nichts mehr – das können manche Sprachen zu einer Schleife optimieren. n * f(n-1) ist KEINE Endrekursion, weil nach dem Aufruf noch multipliziert wird.",
            },
            {
              id: "imp_ae-rek-1_6",
              q: "Wo werden Parameter, lokale Variablen und Rücksprungadresse jedes rekursiven Aufrufs abgelegt?",
              options: [
                "Im Heap",
                "In der CPU-Cache-Zeile",
                "In einer globalen Tabelle",
                "Auf dem Aufrufstapel (Call Stack) – ein Stackframe pro Aufruf",
              ],
              correct: 3,
              explain:
                "Deshalb kostet Rekursion Speicher proportional zur Aufruftiefe – und deshalb endet Endlosrekursion im Stack Overflow.",
            },
            {
              id: "imp_ae-rek-1_7",
              q: "Welche Aussage zu Rekursion und Iteration ist richtig?",
              options: [
                "Jede Rekursion lässt sich auch iterativ formulieren (notfalls mit eigenem Stapel)",
                "Rekursion ist immer schneller als Iteration",
                "Iteration braucht immer mehr Speicher als Rekursion",
                "Nur rekursive Funktionen dürfen sich selbst aufrufen, Schleifen können keine Bäume durchlaufen",
              ],
              correct: 0,
              explain:
                "Rekursion und Iteration sind gleich mächtig. Iterativ ist meist speicherschonender, rekursiv oft eleganter bei selbstähnlichen Strukturen.",
            },
            {
              id: "imp_ae-rek-1_8",
              q: "summe(n): WENN n = 0 DANN 0 SONST n + summe(n-1). Was liefert summe(3)?",
              options: ["3", "5", "6", "9"],
              correct: 2,
              explain:
                "3 + 2 + 1 + 0 = 6. Trace: summe(3)=3+summe(2)=3+2+summe(1)=3+2+1+summe(0)=3+2+1+0.",
            },
            {
              id: "imp_ae-rek-1_9",
              q: "Was ist INDIREKTE Rekursion?",
              options: [
                "Eine Rekursion ohne Rückgabewert",
                "Funktion A ruft B auf, und B ruft wieder A auf",
                "Eine Rekursion, die über eine Schleife simuliert wird",
                "Ein rekursiver Aufruf mit mehreren Parametern",
              ],
              correct: 1,
              explain:
                "Der Selbstaufruf läuft über den Umweg einer zweiten Funktion – der Kreislauf A→B→A braucht trotzdem einen Basisfall.",
            },
          ],
        },
      ],
    },
    {
      id: "ae-db-t",
      title: "Datenbanken",
      lessons: [
        {
          id: "ae-sql-1",
          title: "SQL-Abfragen & JOINs",
          content: [
            {
              type: "text",
              value:
                "SQL ist in jeder FIAE-AP2 vertreten (W21: SELECT mit mehreren JOINs). Gegeben sind hier die Tabellen kunde(k_id, name, ort), auftrag(a_id, k_id, datum, summe) und position(p_id, a_id, artikel, menge, preis).",
            },
            { type: "heading", value: "Übungsaufgabe: Auswertung schreiben" },
            {
              type: "text",
              value:
                "Formuliere eine SQL-Abfrage, die je Kunde aus 'Hamburg' den Namen und die Gesamtsumme aller Aufträge des Jahres 2025 ausgibt – absteigend nach Gesamtsumme, nur Kunden mit mehr als 10.000 € Gesamtsumme.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nSELECT k.name, SUM(a.summe) AS gesamt\nFROM kunde k\nJOIN auftrag a ON a.k_id = k.k_id\nWHERE k.ort = 'Hamburg'\n  AND a.datum >= '2025-01-01' AND a.datum < '2026-01-01'\nGROUP BY k.k_id, k.name\nHAVING SUM(a.summe) > 10000\nORDER BY gesamt DESC;\nBegründung der Klassiker: Zeilenfilter (Ort, Zeitraum) gehören ins WHERE, der Filter auf das Aggregat ins HAVING – WHERE kennt SUM() noch nicht. GROUP BY fasst je Kunde zusammen – über den Schlüssel gruppieren, sonst verschmelzen Namensgleiche; der Alias macht das ORDER BY lesbar.",
            },
            { type: "heading", value: "Vertiefung: Die Abfrage systematisch aufbauen" },
            {
              type: "text",
              value:
                "Baue jede SQL-Aufgabe in fester Reihenfolge: (1) Welche Tabellen? → FROM + JOINs über die Schlüsselpaare (JOIN auftrag a ON a.k_id = k.k_id). (2) Welche Zeilen? → WHERE (Zeitraum: datum >= '2026-01-01' AND datum < '2027-01-01' – robust gegen Zeitanteile). (3) Gruppieren? → GROUP BY je Ausgabespalte, die kein Aggregat ist. (4) Gruppen filtern? → HAVING mit Aggregat. (5) Sortierung/Begrenzung → ORDER BY … DESC, ggf. LIMIT. Aliasse (AS umsatz) machen ORDER BY lesbar. Die JOIN-Familie mit Merkbild: INNER = Schnittmenge, LEFT = ganze linke Tabelle (rechts NULL), RIGHT spiegelbildlich, CROSS = Kreuzprodukt (fast immer ein Versehen). NULL-Regeln: Vergleiche nur mit IS NULL; Aggregatfunktionen ignorieren NULL (COUNT(spalte) zählt Nicht-NULL, COUNT(*) alle Zeilen!).",
            },
            { type: "heading", value: "Übungsaufgabe 2: Die Karteileichen-Abfrage" },
            {
              type: "text",
              value:
                "Tabellen: kunde(k_id, name), auftrag(a_id, k_id, datum, summe). Gesucht: alle Kunden OHNE Auftrag im Jahr 2026 – Name reicht. Schreibe die Abfrage und erkläre, warum ein INNER JOIN hier grundsätzlich scheitert.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: SELECT k.name FROM kunde k LEFT JOIN auftrag a ON a.k_id = k.k_id AND a.datum >= '2026-01-01' AND a.datum < '2027-01-01' WHERE a.a_id IS NULL; — Der INNER JOIN liefert NUR Kunden MIT passendem Auftrag; Kunden ohne Treffer fallen komplett aus der Ergebnismenge und können daher nie gefunden werden. Der LEFT JOIN behält alle Kunden und markiert „kein Auftrag“ als NULL – das WHERE … IS NULL filtert genau diese. Feinheit für Extrapunkte: Die Datumsbedingung gehört in die JOIN-Bedingung, nicht ins WHERE – sonst filtert sie die NULL-Zeilen wieder weg.",
            },
          ],
          quiz: [
            {
              id: "imp_ae-sql-1_0",
              q: "Worin unterscheiden sich WHERE und HAVING?",
              options: [
                "WHERE filtert Zeilen VOR der Gruppierung, HAVING filtert Gruppen anhand von Aggregatwerten",
                "WHERE kann ausschließlich numerische Spalten filtern, für Text ist HAVING zuständig",
                "HAVING entfernt die gefilterten Datensätze dauerhaft aus der Tabelle (wie DELETE)",
                "HAVING ist lediglich ein älteres Synonym für WHERE mit identischer Funktion",
              ],
              correct: 0,
              explain:
                "Der meistgeprüfte SQL-Unterschied: HAVING SUM(summe) > 10000 geht, WHERE SUM(...) ist ein Fehler.",
            },
            {
              id: "imp_ae-sql-1_1",
              q: "Was liefert ein INNER JOIN?",
              options: [
                "Das vollständige Kreuzprodukt beider Tabellen ohne jede Join-Bedingung",
                "Alle Zeilen beider Tabellen in jedem Fall, auch ohne Übereinstimmung",
                "Nur Zeilen, die in BEIDEN Tabellen einen passenden Schlüsselwert haben",
                "Ausschließlich alle Zeilen der linken Tabelle unverändert",
              ],
              correct: 2,
              explain:
                "Kunden ohne Auftrag fallen beim INNER JOIN heraus – will man sie sehen, braucht es LEFT JOIN.",
            },
            {
              id: "imp_ae-sql-1_2",
              q: "Was bewirkt: … FROM kunde k LEFT JOIN auftrag a ...?",
              options: [
                "Nur Aufträge ohne Kunde",
                "Alle Kunden erscheinen",
                "Nur Kunden mit Auftrag",
                "Ein Syntaxfehler",
              ],
              correct: 1,
              explain:
                "Auch ohne Auftrag (Auftragsspalten dann NULL). Mit WHERE a.a_id IS NULL findet man so die Kunden OHNE Aufträge – beliebte Prüfungsaufgabe.",
            },
            {
              id: "imp_ae-sql-1_3",
              q: "Was bewirkt GROUP BY k.name?",
              options: [
                "Zeilen mit gleichem Namen werden zu einer Gruppe zusammengefasst, auf die Aggregatfunktionen wirken",
                "Es sortiert die Ergebniszeilen alphabetisch aufsteigend nach der Spalte k.name (wie ORDER BY)",
                "Es entfernt doppelte Namenseinträge dauerhaft aus der zugrunde liegenden Tabelle",
                "Es weist der Spalte k.name im Ergebnis einen neuen Aliasnamen zu (wie AS)",
              ],
              correct: 0,
              explain:
                "Im SELECT dürfen dann nur Gruppierungsspalten und Aggregate stehen – andere Spalten wären mehrdeutig.",
            },
            {
              id: "imp_ae-sql-1_4",
              q: "Welche Aggregatfunktion zählt nur unterschiedliche Werte?",
              options: ["COUNT(DISTINCT spalte)", "SUM(spalte)", "COUNT(*)", "MAX(spalte)"],
              correct: 0,
              explain:
                "COUNT(*) zählt Zeilen, COUNT(spalte) Nicht-NULL-Werte, COUNT(DISTINCT ...) eindeutige Werte – die Dreier-Unterscheidung sitzt selten und bringt Punkte.",
            },
            {
              id: "imp_ae-sql-1_5",
              q: "Wie prüft man in SQL korrekt auf NULL?",
              options: [
                "spalte IS NULL bzw. IS NOT NULL",
                "spalte == NULL",
                "NULL(spalte)",
                "spalte = NULL",
              ],
              correct: 0,
              explain:
                "NULL ist 'unbekannt': Jeder Vergleich mit = ergibt weder wahr noch falsch – nur IS NULL funktioniert.",
            },
            {
              id: "imp_ae-sql-1_6",
              q: "Was bewirkt ORDER BY summe DESC, datum ASC?",
              options: [
                "Eine zufällige Reihenfolge, da sich zwei Sortierkriterien gegenseitig aufheben",
                "Einen Syntaxfehler, weil ORDER BY nur ein einziges Sortierkriterium erlaubt",
                "Sortierung primär nach Summe absteigend, bei Gleichstand nach Datum aufsteigend",
                "Sortierung nur nach Datum; das zweite Kriterium überschreibt das erste komplett",
              ],
              correct: 2,
              explain:
                "Mehrere Sortierschlüssel arbeiten von links nach rechts – das zweite Kriterium greift nur bei Gleichstand.",
            },
            {
              id: "imp_ae-sql-1_7",
              q: "Welche Anweisung ändert bestehende Datensätze?",
              options: [
                "INSERT INTO tabelle (spalte) VALUES (wert)",
                "SELECT spalte FROM tabelle WHERE bedingung",
                "ALTER SESSION SET parameter = wert FOR tabelle",
                "UPDATE tabelle SET spalte = wert WHERE bedingung",
              ],
              correct: 3,
              explain:
                "Ohne WHERE trifft das UPDATE ALLE Zeilen – der berüchtigtste SQL-Praxisunfall, auch als Prüfungsfrage beliebt.",
            },
            {
              id: "imp_ae-sql-1_8",
              q: "Was leistet ein Primärschlüssel?",
              options: [
                "Er sortiert die Ergebnismenge automatisch aufsteigend",
                "Er identifiziert jede Zeile eindeutig und darf nicht NULL sein",
                "Er ist ein optionales Element ohne technische Wirkung",
                "Er verschlüsselt die Tabelleninhalte gegen fremde Zugriffe",
              ],
              correct: 1,
              explain:
                "Oft als Auto-Increment-ID; Fremdschlüssel verweisen auf ihn und sichern die referenzielle Integrität.",
            },
            {
              id: "imp_ae-sql-1_9",
              q: "Was verhindert eine Fremdschlüssel-Beziehung mit referenzieller Integrität?",
              options: [
                "Doppelte Namen",
                "Verwaiste Datensätze",
                "NULL-Werte generell",
                "Lange Abfragen",
              ],
              correct: 1,
              explain:
                "Z. B. einen Auftrag mit nicht existierender Kundennummer. Die Datenbank lehnt INSERT/DELETE ab, die die Beziehung verletzen würden (bzw. kaskadiert kontrolliert).",
            },
            {
              id: "imp_ae-sql-1_10",
              q: "Wozu dient ein Index auf einer Spalte?",
              options: [
                "Er ersetzt den Primärschlüssel zwingend",
                "Er komprimiert die Daten verlustfrei",
                "Er verschönert die Ausgabe",
                "Er beschleunigt Suchen/Joins über diese Spalte",
              ],
              correct: 3,
              explain:
                "Kostet dafür Speicher und Schreibaufwand. Abwägung wie im echten Projekt: Leselastige Spalten indizieren, nicht blind jede Spalte.",
            },
            {
              id: "imp_ae-sql-1_11",
              q: "Welche Klauselreihenfolge ist in einer SELECT-Anweisung syntaktisch korrekt?",
              options: [
                "Beliebig, der Parser ordnet die Klauseln selbst",
                "SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY",
                "FROM → SELECT → HAVING → WHERE → GROUP BY",
                "SELECT → ORDER BY → WHERE → FROM → GROUP BY",
              ],
              correct: 1,
              explain:
                "Die Reihenfolge ist fix – wer sie kennt, strukturiert auch komplexe Prüfungsabfragen sicher.",
            },
          ],
        },
        {
          id: "ae-erm-1",
          title: "ER-Modell & Normalisierung",
          content: [
            {
              type: "text",
              value:
                "Vor der Tabelle steht das Modell: Entitäten, Beziehungen, Kardinalitäten – und die Normalisierung gegen Redundanz. In der FIAE-AP2 wird typisch ein ER-Modell in ein Relationenmodell überführt (W21: Relationen aus ERM ableiten).",
            },
            { type: "heading", value: "Übungsaufgabe: Tabelle normalisieren" },
            {
              type: "text",
              value:
                "Gegeben ist die unnormalisierte Tabelle rechnung(re_nr, datum, kundenname, kundenort, artikelliste 'A1;A3;A7', mengenliste '2;1;5'). a) Warum verletzt sie die 1. Normalform? b) Überführe sie schrittweise bis in die 3. Normalform (Tabellen mit Schlüsseln angeben). c) Nenne zwei konkrete Anomalien, die der Ausgangszustand verursacht.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Die Listen-Spalten enthalten mehrere Werte pro Feld – Attribute sind nicht atomar → Verstoß gegen die 1. NF.\nb) 1. NF: je Artikel eine Zeile (re_nr, datum, kundenname, kundenort, artikel, menge) mit Schlüssel (re_nr, artikel). 2. NF: Teilabhängigkeiten vom zusammengesetzten Schlüssel auslagern → rechnung(re_nr, datum, kundenname, kundenort) und rechnungsposition(re_nr, artikel_id, menge). 3. NF: transitive Abhängigkeit kundenort ← kundenname auflösen → kunde(k_id, name, ort) herauslösen und k_id als Fremdschlüssel in rechnung einführen → rechnung(re_nr, datum, k_id); zusätzlich artikel(artikel_id, bezeichnung, preis). Ergebnis: kunde, rechnung, rechnungsposition, artikel – verbunden über Fremdschlüssel.\nc) Änderungsanomalie: Zieht der Kunde um, müsste der Ort in vielen Rechnungszeilen geändert werden (Inkonsistenzgefahr). Einfügeanomalie: Ein neuer Kunde ohne Rechnung kann nicht erfasst werden. (Auch zulässig: Löschanomalie – mit der letzten Rechnung verschwinden die Kundendaten.)",
            },
            { type: "heading", value: "Vertiefung: Vom Text zum Modell – die Analyse-Methode" },
            {
              type: "text",
              value:
                "ER-Aufgaben sind Textanalyse: SUBSTANTIVE sind Entitäts-Kandidaten (Kunde, Vertrag, Gerät), VERBEN werden Beziehungen (schließt ab, enthält), ADJEKTIVE/Angaben werden Attribute. Danach je Beziehung die Kardinalität aus zwei Fragen: „Wie viele B kann EIN A haben?“ und umgekehrt – daraus 1:1, 1:n oder n:m (→ Zwischentabelle, oft mit eigenen Attributen wie Menge oder Preis). Schlüsselwahl: künstlicher Surrogatschlüssel (laufende ID) schlägt fachliche Schlüssel, weil sich Fachliches ändert (E-Mail, Name). Beim Ableiten ins Relationenmodell: Entität → Tabelle, 1:n → Fremdschlüssel auf der n-Seite, n:m → Zwischentabelle mit zusammengesetztem Schlüssel. Zum Schluss Normalformen-Check: atomar (1NF), voll vom ganzen Schlüssel abhängig (2NF), nichts Transitives (3NF).",
            },
            { type: "heading", value: "Übungsaufgabe 2: Miniwelt modellieren" },
            {
              type: "text",
              value:
                "„Unsere Techniker betreuen Wartungsverträge. Jeder Vertrag gehört genau einem Kunden und umfasst mehrere Geräte; ein Gerät kann in mehreren Verträgen stehen (z. B. Hardware- und Software-Wartung). Je Vertrag und Gerät gilt ein eigener Stundensatz.“ Modelliere Entitäten, Beziehungen mit Kardinalitäten und leite die Tabellen ab.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: Entitäten: KUNDE, VERTRAG, GERÄT, (TECHNIKER – betreut Verträge, n:m oder 1:n je Lesart, hier: Techniker n — m Vertrag). Beziehungen: Kunde 1 — n Vertrag; Vertrag n — m Gerät MIT Attribut stundensatz → Zwischentabelle. Tabellen: kunde(k_id, …), vertrag(v_id, k_id↗, beginn, …), geraet(g_id, seriennr, …), vertrag_geraet(v_id↗, g_id↗, stundensatz) mit zusammengesetztem Primärschlüssel (v_id, g_id), techniker(t_id,…), vertrag_techniker(v_id↗, t_id↗). Der Stundensatz MUSS in die Zwischentabelle – er hängt von Vertrag UND Gerät gemeinsam ab; ihn ins Gerät zu legen wäre der klassische 2NF-Fehler.",
            },
          ],
          quiz: [
            {
              id: "imp_ae-erm-1_0",
              q: "Welche Bedingung muss eine Tabelle für die 1. Normalform erfüllen?",
              options: [
                "Alle Spalten sind Zahlen",
                "Alle Attributwerte sind atomar",
                "Es gibt keine Schlüssel",
                "Jede Tabelle hat höchstens 5 Spalten",
              ],
              correct: 1,
              explain:
                "Keine Listen oder Wiederholungsgruppen in einem Feld. 'A1;A3;A7' in einer Zelle ist der klassische 1.-NF-Verstoß aus der Prüfung.",
            },
            {
              id: "imp_ae-erm-1_1",
              q: "Was fordert die 2. Normalform zusätzlich?",
              options: [
                "Das Schema darf maximal zwei Tabellen enthalten, die über genau einen Fremdschlüssel verbunden sind",
                "Keine partiellen Abhängigkeiten: Nichtschlüsselattribute hängen vom GESAMTEN zusammengesetzten Schlüssel ab",
                "Alle Datensätze müssen physisch alphabetisch nach dem Primärschlüssel sortiert gespeichert werden",
                "Zusammengesetzte Schlüssel müssen durch einen einzelnen numerischen Schlüssel ersetzt werden",
              ],
              correct: 1,
              explain:
                "Relevant nur bei zusammengesetzten Schlüsseln: Das Rechnungsdatum hängt nur von re_nr ab, nicht von (re_nr, artikel) → auslagern.",
            },
            {
              id: "imp_ae-erm-1_2",
              q: "Was fordert die 3. Normalform zusätzlich?",
              options: [
                "Keine transitiven Abhängigkeiten zwischen Nichtschlüsselattributen",
                "Alle Spalten mit personenbezogenen Daten müssen verschlüsselt sein",
                "Keine NULL-Werte in irgendeiner Spalte der Tabelle",
                "Jede Tabelle muss mindestens drei Fremdschlüssel enthalten",
              ],
              correct: 0,
              explain:
                "kundenort hängt vom kundennamen ab, nicht direkt vom Rechnungsschlüssel → eigene Kundentabelle.",
            },
            {
              id: "imp_ae-erm-1_3",
              q: "Welche Kardinalität hat 'Ein Kunde erteilt beliebig viele Aufträge, jeder Auftrag gehört genau einem Kunden'?",
              options: ["1:n", "1:1", "n:m", "0:0"],
              correct: 0,
              explain:
                "Umsetzung: Fremdschlüssel k_id in der Auftragstabelle – die n-Seite trägt den Schlüssel der 1-Seite.",
            },
            {
              id: "imp_ae-erm-1_4",
              q: "Wie wird eine n:m-Beziehung (Artikel ↔ Lieferant) relational umgesetzt?",
              options: [
                "Durch Verdopplung der Spalten in einer der beiden Tabellen",
                "Eine solche Beziehung ist relational nicht abbildbar",
                "Über eine Zwischentabelle mit den Fremdschlüsseln beider Seiten",
                "Mit einem Fremdschlüssel auf nur einer Seite",
              ],
              correct: 2,
              explain:
                "artikel_lieferant(artikel_id, lieferant_id [, einkaufspreis]) – der zusammengesetzte Schlüssel verhindert Doppeleinträge.",
            },
            {
              id: "imp_ae-erm-1_5",
              q: "Was versteht man im ER-Modell unter einer Entität?",
              options: [
                "Eine SQL-Anweisung (z. B. SELECT oder INSERT), mit der Objekte in der Datenbank angelegt oder gelesen werden",
                "Ein Index, der auf einer Tabellenspalte angelegt wird, um Suchabfragen auf großen Tabellen zu beschleunigen",
                "Ein eindeutig identifizierbares Objekt der realen Welt (z. B. Kunde, Artikel), das beschrieben werden soll",
                "Eine Schleife im Programmablauf, die Datensätze wiederholt durchläuft und dabei einzeln verarbeitet",
              ],
              correct: 2,
              explain:
                "Entitätstypen werden zu Tabellen, ihre Attribute zu Spalten, ihre Schlüsselattribute zu Primärschlüsseln.",
            },
            {
              id: "imp_ae-erm-1_6",
              q: "Wozu dient ein künstlicher Schlüssel (Surrogatschlüssel, z. B. Auto-Increment-ID)?",
              options: [
                "Er ersetzt Fremdschlüssel",
                "Er verschönert Tabellen",
                "Er identifiziert stabil und kurz",
                "Er ist gesetzlich vorgeschrieben",
              ],
              correct: 2,
              explain:
                "Unabhängig von fachlichen Werten, die sich ändern können. Fachliche Schlüssel (z. B. E-Mail) ändern sich – die ID bleibt. In Prüfungslösungen üblich und akzeptiert.",
            },
            {
              id: "imp_ae-erm-1_7",
              q: "Welche Anomalie beschreibt: 'Mit der letzten Rechnung eines Kunden gehen auch seine Stammdaten verloren'?",
              options: ["Suchanomalie", "Einfügeanomalie", "Änderungsanomalie", "Löschanomalie"],
              correct: 3,
              explain:
                "Die drei Anomalien (Einfügen, Ändern, Löschen) sind DIE Begründung für Normalisierung – je ein Beispiel parat haben.",
            },
            {
              id: "imp_ae-erm-1_8",
              q: "Wann kann gezielte Denormalisierung sinnvoll sein?",
              options: [
                "Bei leselastigen Auswertungen, wenn Joins zu teuer werden",
                "Nie, sie verstößt gegen die Normalformen und ist unzulässig",
                "Ausschließlich bei kleinen Datenmengen unter 1000 Zeilen",
                "Immer, denn Normalisierung gilt heute als veraltetes Konzept",
              ],
              correct: 0,
              explain:
                "Bewusst und dokumentiert. Data-Warehouse-Schemata verstoßen bewusst gegen die 3. NF – der Zielkonflikt Konsistenz vs. Lesegeschwindigkeit gehört in die Begründung.",
            },
            {
              id: "imp_ae-erm-1_9",
              q: "Was unterscheidet Primär- und Fremdschlüssel?",
              options: [
                "Der Primärschlüssel identifiziert Zeilen der eigenen Tabelle, der Fremdschlüssel verweist auf den Primärschlüssel einer anderen",
                "Fremdschlüssel sind immer Textspalten, Primärschlüssel enthalten ausschließlich numerische Auto-Increment-Werte",
                "Primärschlüssel dürfen NULL-Werte enthalten, solange die übrigen Spalten der Zeile eindeutig identifizierbar sind",
                "Beides ist dasselbe: Beide Schlüsselarten identifizieren Zeilen der eigenen Tabelle eindeutig",
              ],
              correct: 0,
              explain:
                "Ein Fremdschlüssel darf je nach Modell NULL sein (optionale Beziehung) – der Primärschlüssel nie.",
            },
            {
              id: "imp_ae-erm-1_10",
              q: "Welches Diagrammelement zeigt im ER-Modell (Chen-Notation) eine Beziehung?",
              options: [
                "Ein Pfeil mit Dreieck",
                "Die Raute zwischen den Entitäts-Rechtecken",
                "Eine Wolke",
                "Ein Kreis",
              ],
              correct: 1,
              explain:
                "Rechteck = Entität, Raute = Beziehung, Ellipse = Attribut – an den Kanten stehen die Kardinalitäten.",
            },
            {
              id: "imp_ae-erm-1_11",
              q: "Tabelle bestellung(b_id, k_id, kundenname, ...): Welches Normalisierungsproblem liegt vor?",
              options: [
                "Kein Problem – die Tabelle erfüllt alle Normalformen bis einschließlich der BCNF",
                "Fehlender Index auf k_id; die Normalisierung verlangt Indizes auf allen Fremdschlüsseln",
                "Transitive Abhängigkeit: kundenname hängt von k_id ab und ist redundant gespeichert (3.-NF-Verstoß)",
                "Verstoß gegen die 1. NF: kundenname ist kein atomarer Wert und muss aufgeteilt werden",
              ],
              correct: 2,
              explain:
                "Der Name gehört in die Kundentabelle – in der Bestellung genügt der Fremdschlüssel k_id.",
            },
          ],
        },
      ],
    },
    {
      id: "ae-qs-t",
      title: "Testen",
      lessons: [
        {
          id: "ae-test-1",
          title: "Testverfahren & Testfälle",
          content: [
            {
              type: "text",
              value:
                "Software testen heißt systematisch prüfen, nicht klicken, bis es kracht. Die AP2 fragt Black-/White-Box, Teststufen und vor allem das Ableiten konkreter Testfälle per Äquivalenzklassen und Grenzwertanalyse.",
            },
            { type: "heading", value: "Übungsaufgabe: Testfälle ableiten" },
            {
              type: "text",
              value:
                "Ein Eingabefeld akzeptiert Bestellmengen von 1 bis 100 (ganzzahlig). Leite per Äquivalenzklassenbildung und Grenzwertanalyse die Testfälle ab: a) Nenne die Äquivalenzklassen. b) Welche konkreten Testwerte ergeben sich aus der Grenzwertanalyse? c) Nenne zwei zusätzliche Negativtests jenseits des Wertebereichs.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Drei Klassen: ungültig klein (< 1), gültig (1–100), ungültig groß (> 100). Je Klasse genügt ein Repräsentant (z. B. −5 / 50 / 250).\nb) Grenzwerte testen die Ränder: 0 und 1 (untere Grenze), 100 und 101 (obere Grenze) – Fehler entstehen typischerweise genau dort (Off-by-One, falsche Vergleichsoperatoren).\nc) Nicht-numerische Eingabe ('abc'), leere Eingabe, Dezimalwert (2,5) – robuste Software muss ungültige Typen sauber abweisen statt abzustürzen.",
            },
            { type: "heading", value: "Vertiefung: Vom Anforderungssatz zum Testfallkatalog" },
            {
              type: "text",
              value:
                "Professionelles Testen beginnt bei der Anforderung, nicht beim Code: Jede prüfbare Aussage („Das Feld akzeptiert 1–100“) erzeugt Äquivalenzklassen (gültig/ungültig klein/ungültig groß) und Grenzwerte (0, 1, 100, 101) – dazu Negativtests für Typfehler (Text, leer, Sonderzeichen). Ein dokumentierter Testfall enthält: ID, Vorbedingungen, Testschritte, TESTDATEN, ERWARTETES Ergebnis, Nachbedingung – ohne konkreten Erwartungswert kein Soll-Ist-Vergleich, keine Punkte. Teststufen von klein nach groß (Unit → Integration → System → Abnahme) und Testarten quer dazu: funktional vs. nicht-funktional (Last, Sicherheit, Usability), Regression nach jeder Änderung, Smoke als Schnellcheck. Fehlerkultur: Ein Bug-Report braucht Reproduktionsschritte, erwartetes vs. tatsächliches Verhalten, Umgebung/Version – „geht nicht“ ist kein Report.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Testfälle aus einer Anforderung" },
            {
              type: "text",
              value:
                "Anforderung: „Der Rabatt beträgt 5 % ab 100 € Warenwert, 10 % ab 500 €; Rabatte gelten nicht für Sale-Artikel.“ Leite die Äquivalenzklassen ab und formuliere vier Testfälle in Kurzform (Eingabe → erwartet), darunter mindestens einen Grenzwert- und einen Negativfall.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: Klassen: <100 € (0 %), 100–499,99 (5 %), ≥500 (10 %), jeweils × {kein Sale, Sale}. Testfälle: T1 Grenzwert: 99,99 € normal → 0 % Rabatt. T2 Grenzwert: 100,00 € normal → 5 %. T3 Grenzwert: 500,00 € normal → 10 %. T4 Negativ/Sonderregel: 600 € Sale-Artikel → 0 % (Sale schlägt Warenwert). Bonus: T5 Mischwarenkorb (Sale + normal) klärt, worauf sich der Warenwert bezieht – wenn die Anforderung das offenlässt, ist GENAU DAS der dokumentierte Klärungsbedarf; Lücken finden ist Testerarbeit.",
            },
          ],
          quiz: [
            {
              id: "imp_ae-test-1_0",
              q: "Worin unterscheiden sich Black-Box- und White-Box-Test?",
              options: [
                "Black-Box-Tests lassen sich ausschließlich manuell durchführen und nie automatisieren",
                "White-Box-Tests prüfen ausschließlich die grafische Oberfläche der Anwendung",
                "Es gibt keinen Unterschied; beide Begriffe bezeichnen dieselbe Testmethode",
                "Black-Box testet gegen die Spezifikation ohne Codekenntnis; White-Box nutzt die innere Struktur",
              ],
              correct: 3,
              explain:
                "Z. B. Zweigabdeckung. Äquivalenzklassen/Grenzwerte = Black-Box-Techniken; Anweisungs-/Zweigüberdeckung = White-Box.",
            },
            {
              id: "imp_ae-test-1_1",
              q: "Welche Teststufen folgen aufeinander?",
              options: [
                "Abnahmetest (Kunde) → Unittest (Komponenten) → Systemtest (Gesamtsystem), da zuerst der Kunde die Anforderungen abnimmt",
                "Es existiert nur der Systemtest; Unit- und Integrationstests sind veraltete Konzepte aus der Wasserfall-Ära",
                "Unittest (Komponenten) → Integrationstest (Zusammenspiel) → Systemtest (Gesamtsystem) → Abnahmetest (Kunde)",
                "Die Reihenfolge ist beliebig und ohne fachliche Logik, da alle Teststufen unabhängig voneinander dasselbe prüfen",
              ],
              correct: 2,
              explain:
                "Fehler sind umso billiger, je früher sie gefunden werden – das Argument für automatisierte Unittests.",
            },
            {
              id: "imp_ae-test-1_2",
              q: "Was prüft ein Regressionstest?",
              options: [
                "Die Rechtschreibung und Formatierung der Benutzerdokumentation",
                "Ausschließlich die neu hinzugekommenen Funktionen eines Release",
                "Die Hardware auf Defekte nach einem Software-Update",
                "Ob nach Änderungen bisher funktionierende Teile weiterhin korrekt arbeiten",
              ],
              correct: 3,
              explain:
                "Automatisierte Testsuiten machen Regressionstests bei jedem Build bezahlbar – Kernargument für CI.",
            },
            {
              id: "imp_ae-test-1_3",
              q: "Warum konzentriert sich die Grenzwertanalyse auf die Ränder des Wertebereichs?",
              options: [
                "Aus historischer Tradition der Testverfahren, ohne fachliche Begründung im heutigen Software-Test",
                "Weil mittlere Werte in Testspezifikationen normativ nicht getestet werden dürfen",
                "Weil Randwerte kürzer sind und sich beim manuellen Testen schneller eingeben lassen",
                "Dort entstehen typische Fehler wie Off-by-One oder falsche Vergleichsoperatoren (< statt <=)",
              ],
              correct: 3,
              explain:
                "Bei 1–100 testet man 0, 1, 100, 101 – vier Werte mit maximaler Fehlerfindungswahrscheinlichkeit.",
            },
            {
              id: "imp_ae-test-1_4",
              q: "Was bedeutet 100 % Anweisungsüberdeckung?",
              options: [
                "Alle möglichen Eingabewerte wurden getestet",
                "Jede Codezeile wurde mindestens einmal ausgeführt",
                "Der Code ist nachweislich frei von Fehlern",
                "Die Testdokumentation ist vollständig gepflegt",
              ],
              correct: 1,
              explain:
                "Garantiert aber NICHT, dass alle Zweige/Kombinationen geprüft sind. Zweig- und Pfadüberdeckung sind strengere Maße – Überdeckung misst Testumfang, nicht Korrektheit.",
            },
            {
              id: "imp_ae-test-1_5",
              q: "Was gehört in einen dokumentierten Testfall?",
              options: [
                "Vorbedingungen, Testschritte, Testdaten und das erwartete Ergebnis",
                "Der vollständige Quellcode des zu testenden Moduls als Kopie",
                "Ausschließlich der Name des Testers und das Datum der Durchführung",
                "Die Personalkosten des Entwicklungsteams für die Testphase",
              ],
              correct: 0,
              explain:
                "Ohne erwartetes Ergebnis ist kein Soll-Ist-Vergleich möglich – genau daran scheitern unsaubere Testprotokolle.",
            },
            {
              id: "imp_ae-test-1_6",
              q: "Was kennzeichnet einen Unittest?",
              options: [
                "Er prüft eine einzelne Komponente (Methode/Klasse) isoliert",
                "Er testet das komplette Gesamtsystem in der Umgebung des Kunden",
                "Er ersetzt die formale Abnahme des Systems durch den Auftraggeber",
                "Er läuft nur einmal wöchentlich im nächtlichen Batch-Fenster",
              ],
              correct: 0,
              explain:
                "Abhängigkeiten werden ggf. durch Mocks ersetzt. Frameworks wie JUnit/pytest; das AAA-Muster (Arrange, Act, Assert) strukturiert jeden Test.",
            },
            {
              id: "imp_ae-test-1_7",
              q: "Wozu dienen Mocks/Stubs im Test?",
              options: [
                "Sie erzeugen Zufallsfehler, um Abstürze im Produktivsystem auszulösen",
                "Sie ersetzen echte Abhängigkeiten (DB, API) durch kontrollierbare Attrappen",
                "Es handelt sich um Schadsoftware, die Testumgebungen kompromittiert",
                "Sie dienen dazu, die Testausführung künstlich zu verlangsamen",
              ],
              correct: 1,
              explain:
                "So testet man die Geschäftslogik ohne laufende Datenbank – schnell, reproduzierbar, isoliert.",
            },
            {
              id: "imp_ae-test-1_8",
              q: "Was beschreibt Test-Driven Development (TDD)?",
              options: [
                "Die Tests werden ausschließlich vom Kunden geschrieben und nach Abnahme übergeben",
                "Getestet wird erst nach dem Release, um die Entwicklung nicht zu verlangsamen",
                "Tests sind ein optionaler Zusatz, der nur bei sicherheitskritischen Modulen nötig ist",
                "Erst den (fehlschlagenden) Test schreiben, dann die Implementierung, dann refaktorisieren",
              ],
              correct: 3,
              explain:
                "Red-Green-Refactor. Der Test wird zur ausführbaren Spezifikation – und die Testabdeckung entsteht nebenbei.",
            },
            {
              id: "imp_ae-test-1_9",
              q: "Worin unterscheiden sich Verifikation und Validierung?",
              options: [
                "Verifikation: Wurde das Produkt RICHTIG gebaut (gemäß Spezifikation)? Validierung: Wurde das RICHTIGE Produkt gebaut (Nutzerbedarf)?",
                "Beides ist identisch: Beide Begriffe bezeichnen den abschließenden Systemtest gegen die Spezifikation vor der Auslieferung",
                "Validierung ist ein rein juristischer Begriff und bezeichnet die notarielle Prüfung der Rechtsgültigkeit von Verträgen",
                "Die Verifikation führt allein der Kunde durch, da nur er beurteilen kann, ob die Spezifikation eingehalten wurde",
              ],
              correct: 0,
              explain:
                "Ein spezifikationskonformes Produkt kann trotzdem am Bedarf vorbeigehen – deshalb beides prüfen.",
            },
            {
              id: "imp_ae-test-1_10",
              q: "Was ist ein Smoke Test?",
              options: [
                "Ein Lasttest, der das System mit Maximallast beaufschlagt",
                "Ein Test nur für Raucher",
                "Ein schneller Grobtest der Kernfunktionen nach einem Build",
                "Ein Brandschutztest der Rauchmelder im Rechenzentrum",
              ],
              correct: 2,
              explain:
                "Namensgebung: 'Raucht es irgendwo?' Schlägt der Smoke Test fehl, lohnt kein Detailtest – Standard-Gate in CI-Pipelines.",
            },
            {
              id: "imp_ae-test-1_11",
              q: "Welche Aussage über Fehlerberichte (Bug Reports) ist korrekt?",
              options: [
                "Sie enthalten Schritte zur Reproduktion, erwartetes und tatsächliches Verhalten sowie Umgebung/Version",
                "Sie werden grundsätzlich mündlich an die Entwickler übermittelt, damit keine Zeit für Dokumentation verloren geht",
                "Die knappe Meldung 'Geht nicht' genügt, da Entwickler die Details selbst im System nachvollziehen können",
                "Screenshots sind in Fehlerberichten unzulässig, da sie vertrauliche Daten enthalten könnten",
              ],
              correct: 0,
              explain:
                "Reproduzierbarkeit ist alles – ein guter Report halbiert die Behebungszeit.",
            },
          ],
        },
        {
          id: "ae-ergo-1",
          title: "Softwareergonomie & Usability – ISO 9241 verständlich",
          content: [
            {
              type: "text",
              value:
                "Softwareergonomie beschäftigt sich damit, Software an den Menschen anzupassen – nicht umgekehrt. In der FIAE-AP2 (und im Fachgespräch zur Projektarbeit) wird das Thema regelmäßig geprüft: „Bewerten Sie den Dialog nach den Grundsätzen der ISO 9241“ oder „Nennen Sie Kriterien für eine gebrauchstaugliche Oberfläche“. Wer die Begriffe sauber trennt und die Grundsätze mit Beispielen erklären kann, punktet hier zuverlässig.",
            },
            { type: "heading", value: "Usability nach ISO 9241-11: drei Leitkriterien" },
            {
              type: "list",
              value: [
                "Effektivität: Erreicht der Nutzer sein Ziel vollständig und korrekt? (Konnte die Rechnung angelegt werden?)",
                "Effizienz: Mit welchem Aufwand? (Wie viele Klicks, wie viel Zeit, wie viele Fehlversuche?)",
                "Zufriedenstellung: Wie angenehm empfindet der Nutzer die Bedienung? (subjektiv, z. B. per Fragebogen wie SUS messbar)",
                "Wichtig: Usability gilt immer für einen Nutzungskontext – bestimmte Benutzer, Aufgaben und Umgebung. Eine Profi-Software darf dichter und komplexer sein als eine Bürger-App.",
                "User Experience (UX) ist der Oberbegriff: Sie umfasst zusätzlich Erwartungen vor und Emotionen nach der Nutzung – Usability ist ein Teil der UX.",
              ],
            },
            { type: "heading", value: "Die 7 Grundsätze der Dialoggestaltung (ISO 9241-110)" },
            {
              type: "list",
              value: [
                "Aufgabenangemessenheit: Der Dialog unterstützt genau die Aufgabe – ohne unnötige Schritte. Beispiel: Pflichtfelder minimal halten, sinnvolle Defaults, keine doppelte Dateneingabe.",
                "Selbstbeschreibungsfähigkeit: Jeder Schritt ist aus sich heraus verständlich. Beispiel: klare Beschriftungen, erkennbarer Fortschritt („Schritt 2 von 4“), verständliche Statusmeldungen.",
                "Steuerbarkeit: Der Nutzer bestimmt Tempo und Richtung. Beispiel: Zurück-Funktion, Abbrechen ohne Datenverlust, Undo/Redo.",
                "Erwartungskonformität: Der Dialog verhält sich konsistent und wie im Umfeld üblich. Beispiel: OK rechts unten wie im Betriebssystem üblich, gleiche Begriffe für gleiche Dinge im gesamten System.",
                "Fehlertoleranz: Trotz fehlerhafter Eingaben bleibt das Ziel mit minimalem Korrekturaufwand erreichbar. Beispiel: Validierung mit konkreter Hilfe („Datum bitte als TT.MM.JJJJ“), Sicherheitsabfrage vor Löschen, kein Datenverlust bei Fehlern.",
                "Individualisierbarkeit: Anpassbar an Vorlieben und Fähigkeiten. Beispiel: Schriftgröße, Tastenkürzel, ein-/ausblendbare Spalten, Dunkelmodus.",
                "Lernförderlichkeit: Der Dialog unterstützt das Erlernen. Beispiel: Tooltips, geführte Erst-Einrichtung, Beispielwerte in Feldern.  (Hinweis: Die Neufassung ISO 9241-110:2020 spricht von „Interaktionsprinzipien“ und ergänzt u. a. Benutzerbindung – in Prüfungen werden weiterhin die klassischen sieben Grundsätze abgefragt.)",
              ],
            },
            {
              type: "note",
              value:
                "Prüfungstrick: Zu jedem Grundsatz ein konkretes UI-Beispiel nennen können – reine Definitionen geben selten volle Punkte. Umgekehrt: In „Bewerten Sie diesen Dialog“-Aufgaben zuerst die Verstöße suchen (fehlender Abbrechen-Button = Steuerbarkeit; kryptische Fehlermeldung „Error 0x80004“ = Selbstbeschreibungsfähigkeit + Fehlertoleranz).",
            },
            { type: "heading", value: "Barrierefreiheit" },
            {
              type: "text",
              value:
                "Eng verwandt, aber eigenständig: Barrierefreiheit (Accessibility) stellt sicher, dass auch Menschen mit Einschränkungen die Software nutzen können. Grundlage im Web sind die WCAG (Web Content Accessibility Guidelines) mit den vier Prinzipien wahrnehmbar, bedienbar, verständlich, robust – konkret: ausreichende Farbkontraste, Alternativtexte für Bilder, vollständige Tastaturbedienbarkeit, Screenreader-Kompatibilität (semantisches HTML, ARIA). In Deutschland verpflichtet die BITV 2.0 öffentliche Stellen; seit Ende Juni 2025 verlangt das Barrierefreiheitsstärkungsgesetz (BFSG) Barrierefreiheit auch für viele privatwirtschaftliche digitale Produkte und Dienstleistungen wie Onlineshops.",
            },
            { type: "heading", value: "Übungsaufgabe" },
            {
              type: "text",
              value:
                "Ein Bestellformular zeigt bei jedem Fehler nur „Eingabe ungültig!“, hat keinen Zurück-Button, verwirft bei einem Fehler alle bereits eingegebenen Daten und verwendet hellgrauen Text auf weißem Grund. a) Ordnen Sie jedem der vier Mängel den verletzten Grundsatz der ISO 9241-110 bzw. das verletzte Barrierefreiheits-Prinzip zu. b) Formulieren Sie je eine konkrete Verbesserung. c) Nennen Sie die drei Usability-Kriterien der ISO 9241-11.",
            },
            {
              type: "solution",
              value:
                "a) „Eingabe ungültig!“ ohne Hinweis: verletzt Selbstbeschreibungsfähigkeit und Fehlertoleranz. Kein Zurück-Button: verletzt Steuerbarkeit. Datenverlust bei Fehler: verletzt Fehlertoleranz (und Aufgabenangemessenheit, da doppelte Eingabe erzwungen wird). Hellgrau auf Weiß: verletzt das WCAG-Prinzip der Wahrnehmbarkeit (unzureichender Kontrast).\nb) Feldgenaue Fehlermeldung mit Korrekturhinweis („PLZ muss 5 Ziffern haben“) direkt am Feld; Zurück-/Abbrechen-Schaltfläche in jedem Schritt; Eingaben bei Validierungsfehlern erhalten (nur fehlerhafte Felder markieren); Kontrastverhältnis auf mindestens 4,5:1 erhöhen (WCAG AA).\nc) Effektivität, Effizienz, Zufriedenstellung – jeweils bezogen auf den definierten Nutzungskontext.",
            },
            {
              type: "links",
              value: [
                [
                  "Wikipedia: Softwareergonomie",
                  "https://de.wikipedia.org/wiki/Software-Ergonomie",
                ],
                ["Wikipedia: ISO 9241", "https://de.wikipedia.org/wiki/EN_ISO_9241"],
                ["WCAG-Überblick (W3C, deutsch)", "https://www.w3.org/Translations/WCAG21-de/"],
                [
                  "FI-Prüfungsvorbereitung: Softwareergonomie",
                  "https://fachinformatikerpruefungsvorbereitung.de/abschlusspr%C3%BCfungteil2ae/ga2/softwareergonomie/",
                ],
              ],
            },
          ],
          quiz: [
            {
              id: "imp_ae-ergo-1_0",
              q: "Welche drei Kriterien definieren Usability nach ISO 9241-11?",
              options: [
                "Schnelligkeit, Schönheit, Stabilität",
                "Effektivität, Effizienz, Zufriedenstellung",
                "Funktionalität, Sicherheit, Wartbarkeit",
                "Konsistenz, Toleranz, Lernbarkeit",
              ],
              correct: 1,
              explain:
                "Effektivität (Ziel erreicht?), Effizienz (mit welchem Aufwand?) und Zufriedenstellung – immer bezogen auf den Nutzungskontext.",
            },
            {
              id: "imp_ae-ergo-1_1",
              q: "Ein Dialog bietet kein Abbrechen und kein Undo. Welcher Grundsatz ist verletzt?",
              options: [
                "Aufgabenangemessenheit",
                "Steuerbarkeit",
                "Individualisierbarkeit",
                "Lernförderlichkeit",
              ],
              correct: 1,
              explain:
                "Steuerbarkeit heißt: Der Nutzer bestimmt Tempo und Richtung des Dialogs – dazu gehören Zurück, Abbrechen und Undo.",
            },
            {
              id: "imp_ae-ergo-1_2",
              q: "Die Fehlermeldung lautet nur „Error 0x80004“. Welche Grundsätze sind verletzt?",
              options: [
                "Erwartungskonformität und Individualisierbarkeit",
                "Selbstbeschreibungsfähigkeit und Fehlertoleranz",
                "Steuerbarkeit und Lernförderlichkeit",
                "Keiner – Fehlercodes sind Standard",
              ],
              correct: 1,
              explain:
                "Die Meldung erklärt weder, was passiert ist (Selbstbeschreibungsfähigkeit), noch hilft sie bei der Korrektur (Fehlertoleranz).",
            },
            {
              id: "imp_ae-ergo-1_3",
              q: "Wofür stehen die vier WCAG-Prinzipien?",
              options: [
                "wahrnehmbar, bedienbar, verständlich, robust",
                "schnell, sicher, schön, sparsam",
                "lesbar, klickbar, druckbar, testbar",
                "effektiv, effizient, zufrieden, erlernbar",
              ],
              correct: 0,
              explain:
                "Perceivable, Operable, Understandable, Robust – die Grundlage barrierefreier Webinhalte (in Deutschland u. a. über BITV 2.0 und BFSG verankert).",
            },
          ],
        },
      ],
    },
    {
      id: "ae-tools-t",
      title: "Werkzeuge & Clean Code",
      lessons: [
        {
          id: "ae-git-1",
          title: "Versionsverwaltung mit Git",
          content: [
            {
              type: "text",
              value:
                'Git ist der De-facto-Standard der Versionsverwaltung – verteilt (jeder Klon trägt die komplette Historie) und damit anders als zentrale Systeme wie SVN, bei denen alles auf einem Server liegt.\n\nDie drei Bereiche eines Git-Repos: ARBEITSVERZEICHNIS (deine Dateien) → STAGING AREA (Vorbereitungszone, gefüllt per git add) → REPOSITORY (dauerhafte Historie, geschrieben per git commit). Diese Trennung erlaubt, gezielt nur ausgewählte Änderungen in einen Commit zu packen.\n\nDie Kernbefehle: git init (neues Repo), git clone (Repo kopieren), git status (was ist geändert/gestaged?), git add datei (in Staging), git commit -m "Nachricht" (Snapshot mit Beschreibung), git log (Historie), git push (Commits zum Remote hochladen), git pull (Remote-Stand holen und einarbeiten = fetch + merge), git branch (Zweige verwalten), git checkout/switch (Zweig wechseln), git merge zweig (Zweig einarbeiten).\n\nBRANCHES sind das Herzstück: Ein Branch ist ein leichtgewichtiger Zeiger auf einen Commit. Feature-Branches isolieren die Arbeit; erst wenn das Feature fertig (und per Review geprüft) ist, wird es in den Hauptzweig (main) gemergt. Verbreiteter Arbeitsfluss: branch anlegen → committen → push → PULL/MERGE REQUEST stellen → Review → Merge.\n\nMERGE-KONFLIKT: Ändern zwei Zweige dieselben Zeilen, kann Git nicht automatisch entscheiden. Git markiert die Stellen mit <<<<<<< (dein Stand), ======= (Trenner), >>>>>>> (anderer Stand). Du wählst/kombinierst den korrekten Inhalt, entfernst die Marker, dann git add und commit – der Konflikt ist gelöst. Konflikte sind kein Fehler, sondern Alltag.\n\nGute COMMITS sind klein, thematisch geschlossen und tragen aussagekräftige Nachrichten ("Preisberechnung: Rabattstaffel korrigiert" statt "fix"). Das macht Historie, Review und Fehlersuche (git bisect) erst brauchbar.',
            },
            { type: "heading", value: "Übungsaufgabe: Arbeitsablauf aufschreiben" },
            {
              type: "text",
              value:
                'Du sollst im Team die Funktion "Export als CSV" entwickeln. Notiere die Git-Befehle für den kompletten Weg: aktuellen Stand holen, Feature-Branch "csv-export" anlegen und wechseln, zwei geänderte Dateien committen, Branch zum Server hochladen. Was folgt organisatorisch, bevor dein Code in main landet?',
            },
            {
              type: "solution",
              value:
                'MUSTERLÖSUNG:\ngit pull                                 (main aktuell ziehen)\ngit switch -c csv-export                 (Branch anlegen + wechseln; ältere Syntax: git checkout -b csv-export)\ngit add export.py tests/test_export.py  (gezielt stagen)\ngit commit -m "CSV-Export für Artikelliste ergänzt"\ngit push -u origin csv-export           (Branch hochladen, Upstream setzen)\nDanach: Pull/Merge Request erstellen → Code-Review durch Teammitglied → nach Freigabe Merge in main (und Feature-Branch löschen).',
            },
            { type: "heading", value: "Vertiefung: pull vs. fetch, revert vs. reset" },
            {
              type: "text",
              value:
                "Zwei Paare, die Prüfungen gern abfragen: git fetch holt nur die Remote-Stände (verändert deine Arbeit nicht), git pull = fetch + merge in deinen Zweig. Und beim Zurücknehmen: git revert erzeugt einen NEUEN Commit, der einen alten umkehrt – sicher für geteilte Zweige, die Historie bleibt intakt. git reset verschiebt dagegen den Zweig-Zeiger und schreibt Historie um – auf bereits gepushten Zweigen tabu, weil Kollegen sonst auf verschwundenen Ständen sitzen.",
            },
          ],
          quiz: [
            {
              id: "imp_ae-git-1_g0",
              q: "In welcher Reihenfolge wandert eine Änderung in die Git-Historie?",
              options: [
                "Arbeitsverzeichnis → Staging Area (git add) → Repository (git commit)",
                "Repository → Staging Area → Arbeitsverzeichnis – Commits werden zur Bearbeitung ausgecheckt",
                "Staging Area → Arbeitsverzeichnis → Repository",
                "Arbeitsverzeichnis → Repository → Staging Area",
              ],
              correct: 0,
              explain:
                "add befördert Änderungen ins Staging, commit macht daraus einen dauerhaften Snapshot.",
            },
            {
              id: "imp_ae-git-1_g1",
              q: "Was unterscheidet Git grundlegend von einem zentralen System wie SVN?",
              options: [
                "Git funktioniert nur mit Cloud-Anbietern",
                "Jeder Klon enthält die vollständige Historie – Committen geht auch offline",
                "Git kann keine Binärdateien verwalten",
                "SVN unterstützt im Gegensatz zu Git keinerlei Branches oder parallele Entwicklungszweige",
              ],
              correct: 1,
              explain:
                "Verteilte Versionsverwaltung: das Repo liegt komplett lokal, der Server ist nur ein Austauschpunkt.",
            },
            {
              id: "imp_ae-git-1_g2",
              q: "Wozu dient ein Feature-Branch?",
              options: [
                "Er beschleunigt die Ausführung des Programms",
                "Er sichert das Repository per Zugriffsrechten gegen unbefugte Änderungen anderer ab",
                "Er isoliert die Arbeit an einer Funktion bis zum geprüften Merge in main",
                "Er komprimiert die Historie älterer Commits",
              ],
              correct: 2,
              explain:
                "Isolation hält main stabil; der Merge erfolgt erst nach Fertigstellung und Review.",
            },
            {
              id: "imp_ae-git-1_g3",
              q: "Git meldet beim Merge einen Konflikt. Was ist zu tun?",
              options: [
                "Das lokale Repository sicherheitshalber löschen und komplett neu vom Server klonen",
                "git push --force ausführen, um den Konflikt zu überschreiben",
                "Warten – Git löst Konflikte nach einiger Zeit selbst",
                "Die Konfliktmarker sichten, den korrekten Inhalt herstellen, dann add und commit",
              ],
              correct: 3,
              explain:
                "Konflikte löst der Mensch: Inhalt entscheiden, Marker entfernen, Lösung committen.",
            },
            {
              id: "imp_ae-git-1_g4",
              q: "Was macht git pull?",
              options: [
                "Remote-Stand holen und in den aktuellen Zweig einarbeiten (fetch + merge)",
                "Nur die Remote-Referenzen aktualisieren, ohne lokale Dateien oder Zweige zu verändern",
                "Alle lokalen Änderungen verwerfen",
                "Einen neuen Branch auf dem Server anlegen",
              ],
              correct: 0,
              explain: "pull = fetch + merge; nur holen ohne Einarbeiten wäre git fetch.",
            },
            {
              id: "imp_ae-git-1_g5",
              q: "Ein fehlerhafter Commit wurde bereits gepusht und vom Team gezogen. Wie nimmst du ihn sicher zurück?",
              options: [
                "git reset --hard auf den Stand davor und erneut pushen",
                "git revert – ein neuer Commit kehrt die Änderung um, die Historie bleibt intakt",
                "Die betroffene Datei im Arbeitsverzeichnis manuell löschen und ohne neuen Commit pushen",
                "Den main-Branch löschen und neu anlegen",
              ],
              correct: 1,
              explain:
                "revert ist auf geteilten Zweigen der sichere Weg; reset schreibt veröffentlichte Historie um.",
            },
            {
              id: "imp_ae-git-1_g6",
              q: "Welche Commit-Nachricht ist am brauchbarsten?",
              options: [
                '"update"',
                '"Änderungen"',
                '"Rechnungsdruck: Rundungsfehler bei Bruttobeträgen korrigiert"',
                '"final version 2 wirklich final jetzt aber echt, nicht mehr anfassen"',
              ],
              correct: 2,
              explain:
                "Aussagekräftig und thematisch konkret – so bleibt die Historie durchsuchbar und reviewbar.",
            },
            {
              id: "imp_ae-git-1_g7",
              q: "Was zeigt git status an?",
              options: [
                "Die komplette Commit-Historie mit Autoren",
                "Die Größe des Repositories auf dem Server",
                "Alle offenen Pull Requests",
                "Geänderte, gestagte und unversionierte Dateien",
              ],
              correct: 3,
              explain:
                "status ist der Blick auf Arbeitsverzeichnis und Staging – die Historie zeigt git log.",
            },
            {
              id: "imp_ae-git-1_g8",
              q: "Was ist ein Pull Request (bzw. Merge Request)?",
              options: [
                "Die Bitte, einen Branch nach Review in einen Zielzweig zu übernehmen",
                "Ein automatischer, serverseitig eingeplanter Backup-Vorgang des Repositories",
                "Ein Befehl, der Konflikte automatisch löst",
                "Eine Sperre, die Commits anderer verhindert",
              ],
              correct: 0,
              explain:
                "Der PR bündelt Diff, Diskussion und Review vor dem Merge – zentraler Qualitätsschritt im Teamworkflow.",
            },
            {
              id: "imp_ae-git-1_g9",
              q: "Womit lädst du deinen neuen lokalen Branch erstmals zum Server hoch?",
              options: [
                'git commit -m "upload"',
                "git push -u origin branchname",
                "git merge origin",
                "git clone branchname",
              ],
              correct: 1,
              explain:
                "push überträgt Commits; -u setzt den Upstream, damit künftig push/pull ohne Zusätze reichen.",
            },
          ],
        },
        {
          id: "ae-cc-1",
          title: "Clean Code & Refactoring",
          content: [
            {
              type: "text",
              value:
                'Clean Code heißt: Code, den der nächste Mensch (oder du in sechs Monaten) ohne Rätselraten versteht. In der FIAE-AP2 taucht das als "Nennen und erläutern Sie Kriterien für wartbaren Code" oder als konkrete Verbesserungsaufgabe an einem Code-Ausschnitt auf.\n\nDie wichtigsten Prinzipien:\nSPRECHENDE NAMEN: restlaufzeitInTagen statt rlz, berechneBruttopreis() statt calc2(). Namen ersetzen Kommentare.\nKLEINE FUNKTIONEN MIT EINER AUFGABE (Single Responsibility): Eine Funktion, die validiert UND speichert UND E-Mails versendet, ist drei Funktionen. Faustregel: eine Abstraktionsebene pro Funktion, wenige Zeilen, wenige Parameter.\nDRY (Don\'t Repeat Yourself): Kopierter Code driftet auseinander – beim Bugfix vergisst man eine Kopie. Wiederkehrendes gehört in Funktionen/Klassen/Konstanten.\nKEINE MAGISCHEN ZAHLEN: if (status == 3) sagt nichts; if (status == Status.VERSENDET) dokumentiert sich selbst. Grenzwerte als benannte Konstanten (MWST_SATZ = 0.19).\nKOMMENTARE erklären WARUM, nicht WAS: Das Was steht im Code selbst; ein Kommentar lohnt für Geschäftsregeln, Workarounds, Absichten.\nFEHLER NICHT VERSCHLUCKEN: leere catch-Blöcke verstecken Probleme (mehr dazu in der Exceptions-Lektion).\n\nREFACTORING ist das Verbessern der inneren Struktur OHNE Änderung des äußeren Verhaltens – abgesichert durch Tests (erst grün, dann umbauen, wieder grün). Wichtige Techniken mit Namen: Extract Method (Codeblock in benannte Methode auslagern), Rename (Namen präzisieren), Extract Constant (magische Zahl benennen), Guard Clauses (frühe returns statt tief verschachtelter ifs).\n\nCode-Gerüche (Smells), die Refactoring signalisieren: lange Methoden, doppelter Code, tiefe Verschachtelung, lange Parameterlisten, Gott-Klassen, auskommentierter Altcode.',
            },
            { type: "heading", value: "Übungsaufgabe: Code verbessern" },
            {
              type: "text",
              value:
                "Gegeben (Pseudocode):\nFUNKTION p(a, b)\n  WENN b == 1 DANN\n    r = a * 0.19\n  SONST WENN b == 2 DANN\n    r = a * 0.07\n  ENDE\n  RÜCKGABE a + r\nENDE\nNenne vier konkrete Clean-Code-Verstöße und schreibe eine verbesserte Fassung.",
            },
            {
              type: "solution",
              value:
                'MUSTERLÖSUNG: Verstöße: 1) nichtssagende Namen p, a, b, r; 2) magische Zahlen 1/2 und 0.19/0.07; 3) fehlender Fall für ungültiges b (r wäre undefiniert); 4) die Funktion mischt Satzwahl und Berechnung.\nVerbessert:\nKONSTANTE MWST_VOLL = 0.19; KONSTANTE MWST_ERM = 0.07\nFUNKTION mwstSatz(steuerklasse)\n  WENN steuerklasse == VOLL DANN RÜCKGABE MWST_VOLL\n  WENN steuerklasse == ERMAESSIGT DANN RÜCKGABE MWST_ERM\n  FEHLER "unbekannte Steuerklasse"\nENDE\nFUNKTION bruttoPreis(nettoPreis, steuerklasse)\n  RÜCKGABE nettoPreis * (1 + mwstSatz(steuerklasse))\nENDE',
            },
            { type: "heading", value: "Vertiefung: Refactoring sicher durchführen" },
            {
              type: "text",
              value:
                "Refactoring ohne Sicherheitsnetz ist Glücksspiel. Der disziplinierte Ablauf: 1) Tests vorhanden und grün (fehlen sie: erst Tests um das Ist-Verhalten schreiben, sogenannte Charakterisierungstests). 2) EINE kleine Strukturänderung. 3) Tests erneut laufen lassen. 4) Committen. Nie Refactoring und neue Funktionalität im selben Schritt mischen – sonst weißt du bei einem roten Test nicht, ob der Umbau oder das neue Feature schuld ist.",
            },
          ],
          quiz: [
            {
              id: "imp_ae-cc-1_g0",
              q: "Was bedeutet Refactoring?",
              options: [
                "Neue Funktionen möglichst schnell ergänzen",
                "Den bestehenden Code vollständig in eine modernere Programmiersprache übersetzen",
                "Die innere Code-Struktur verbessern, ohne das äußere Verhalten zu ändern",
                "Alle Kommentare aus dem Code entfernen",
              ],
              correct: 2,
              explain:
                "Verhalten bleibt gleich (Tests sichern das ab), nur die Struktur wird sauberer.",
            },
            {
              id: "imp_ae-cc-1_g1",
              q: "Warum sind magische Zahlen wie if (status == 3) problematisch?",
              options: [
                "Zahlenvergleiche sind zur Laufzeit deutlich langsamer als Textvergleiche",
                "Ganzzahlen dürfen in Bedingungen nicht vorkommen",
                "Der Compiler entfernt solche Vergleiche automatisch",
                "Die Bedeutung ist nicht erkennbar; Änderungen sind überall nachzuziehen",
              ],
              correct: 3,
              explain:
                "Eine benannte Konstante oder ein Enum dokumentiert die Bedeutung und zentralisiert den Wert.",
            },
            {
              id: "imp_ae-cc-1_g2",
              q: "Was besagt das DRY-Prinzip?",
              options: [
                "Logik nicht duplizieren, sondern an einer Stelle pflegen",
                "Jede Funktion braucht mindestens einen erklärenden Kommentar über der Signatur",
                "Code sollte täglich neu geschrieben werden",
                "Variablennamen müssen kurz sein",
              ],
              correct: 0,
              explain:
                "Don't Repeat Yourself: Kopien driften auseinander und machen Bugfixes unvollständig.",
            },
            {
              id: "imp_ae-cc-1_g3",
              q: "Welche Funktion verletzt das Single-Responsibility-Prinzip am deutlichsten?",
              options: [
                "berechneNettoSummeAllerOffenenPositionen(positionen, stichtag)",
                "speichereUndValidiereUndSendeBestellbestätigung(bestellung)",
                "validiereEingabe(formular)",
                "formatiereDatum(datum)",
              ],
              correct: 1,
              explain:
                "Drei Verantwortlichkeiten in einer Funktion – Validierung, Persistenz und Versand gehören getrennt.",
            },
            {
              id: "imp_ae-cc-1_g4",
              q: "Wofür sind Kommentare im Sinne von Clean Code da?",
              options: [
                "Jede Codezeile in Prosa zu wiederholen",
                "Alten, nicht mehr genutzten Code aufzubewahren, statt ihn zu löschen",
                "Das WARUM zu erklären – Geschäftsregeln, Absichten, Workarounds",
                "Fehlende sprechende Namen auszugleichen",
              ],
              correct: 2,
              explain:
                "Das WAS drückt guter Code selbst aus; auskommentierter Altcode gehört in die Versionsverwaltung, nicht in die Datei.",
            },
            {
              id: "imp_ae-cc-1_g5",
              q: "Was ist eine Guard Clause?",
              options: [
                "Eine Sperre gegen gleichzeitige Threads",
                "Ein try-catch-Block, der zur Absicherung die gesamte Funktion umschließt",
                "Eine Zugriffsbeschränkung per private",
                "Ein früher return bei Sonder-/Fehlerfällen, der tiefe Verschachtelung vermeidet",
              ],
              correct: 3,
              explain:
                "Sonderfälle zuerst abhandeln und zurückkehren – der Normalfall bleibt unverschachtelt lesbar.",
            },
            {
              id: "imp_ae-cc-1_g6",
              q: "Welcher Schritt gehört ZWINGEND vor ein größeres Refactoring?",
              options: [
                "Prüfen, dass Tests das Ist-Verhalten absichern und grün sind",
                "Eine neue Programmiersprache wählen",
                "Vorsorglich alle Variablen und Methoden nach neuem Schema umbenennen",
                "Den Code ausdrucken und archivieren",
              ],
              correct: 0,
              explain:
                "Ohne grüne Tests merkst du nicht, ob der Umbau das Verhalten verändert hat.",
            },
            {
              id: "imp_ae-cc-1_g7",
              q: "Welcher Name ist im Sinne von Clean Code am besten?",
              options: [
                "int x2",
                "int restlaufzeitInTagen",
                "int tempWertZwischenspeicherVar1",
                "int rlzT",
              ],
              correct: 1,
              explain: "Der Name trägt Bedeutung und Einheit – Abkürzungen erzwingen Rätselraten.",
            },
            {
              id: "imp_ae-cc-1_g8",
              q: 'Was beschreibt der Code-Smell "Gott-Klasse"?',
              options: [
                "Eine Klasse ohne Konstruktor",
                "Eine abstrakte Basisklasse, die nur eine einzige abstrakte Methode deklariert",
                "Eine Klasse, die zu viele Verantwortlichkeiten und Abhängigkeiten ansammelt",
                "Eine Klasse, die von zwei Interfaces erbt",
              ],
              correct: 2,
              explain:
                "Solche Zentralklassen sind schwer test- und änderbar – Verantwortungen aufteilen.",
            },
            {
              id: "imp_ae-cc-1_g9",
              q: 'Refactoring-Technik "Extract Method" bedeutet:',
              options: [
                "Eine Methode in die Oberklasse verschieben",
                "Eine selbst geschriebene Methode durch eine fertige Bibliotheksfunktion ersetzen",
                "Eine Methode als deprecated markieren",
                "Einen Codeblock in eine eigene, sprechend benannte Methode auslagern",
              ],
              correct: 3,
              explain:
                "Lange Funktionen werden lesbar, der Block bekommt per Namen eine Dokumentation.",
            },
          ],
        },
        {
          id: "ae-exc-1",
          title: "Fehlerbehandlung: Exceptions richtig einsetzen",
          content: [
            {
              type: "text",
              value:
                'Exceptions (Ausnahmen) trennen den Normalablauf vom Fehlerfall: Statt Fehlercodes durch alle Ebenen zu schleifen, wirft (throw) eine Funktion bei einem Problem ein Ausnahmeobjekt, und eine passende Stelle weiter oben fängt (catch) es.\n\nDer Mechanismus: try umschließt den Block, in dem Fehler auftreten können. Tritt einer auf, wird der Rest des try-Blocks übersprungen und der ERSTE passende catch-Block ausgeführt – deshalb stehen SPEZIELLE Ausnahmen vor ALLGEMEINEN (erst DateiNichtGefunden, dann IOFehler, dann allgemeine Exception). finally läuft IMMER – ob Fehler oder nicht, sogar bei return im try. Dort gehören Aufräumarbeiten hin: Dateien schließen, Verbindungen freigeben, Sperren lösen (bzw. moderne Varianten wie try-with-resources/using/with, die das automatisch erledigen).\n\nEigene Exception-Klassen (z. B. UngueltigeIbanException erbt von Exception) machen Fehlerarten unterscheidbar und tragen Kontext (welche IBAN, welche Stelle). Die Vererbungshierarchie ist prüfungsrelevant: ein catch auf die Oberklasse fängt auch alle Unterklassen.\n\nDie wichtigsten Grundsätze:\n1) Exceptions für AUSNAHMEN, nicht für normale Programmsteuerung ("Kunde nicht gefunden" bei einer Suche ist oft ein normales Ergebnis → leere Liste/null-Objekt, keine Exception).\n2) Fehler nie VERSCHLUCKEN: ein leerer catch-Block lässt das Programm scheinbar korrekt weiterlaufen, während der Zustand kaputt ist – der Fehler taucht später an unerklärlicher Stelle auf.\n3) Fangen, wo man sinnvoll REAGIEREN kann: Die Datenzugriffsschicht kann eine abgebrochene Verbindung selten sinnvoll behandeln – die Anwendungsschicht kann es dem Nutzer melden oder einen Retry starten. Bis dahin: weiterwerfen (ggf. in eine fachliche Exception verpackt).\n4) Aussagekräftig loggen (Meldung + Stacktrace), verständlich melden (dem Nutzer keine Stacktraces zeigen).',
            },
            { type: "heading", value: "Übungsaufgabe: Fehlerbehandlung entwerfen" },
            {
              type: "text",
              value:
                "Eine Methode importiereKunden(csvDatei) liest eine CSV-Datei und schreibt die Datensätze in die Datenbank. Mögliche Probleme: Datei fehlt, Zeile hat ungültiges Format, Datenbankverbindung bricht ab. Skizziere in Pseudocode eine sinnvolle try/catch/finally-Struktur: Welche Fehler behandelst du wie, was gehört ins finally, und bei welchem Fehler bricht der Import komplett ab?",
            },
            {
              type: "solution",
              value:
                'MUSTERLÖSUNG:\nVERSUCHE (try)\n  datei = öffne(csvDatei)\n  FÜR jede zeile\n    VERSUCHE\n      datensatz = parse(zeile)\n      dbSchreibe(datensatz)\n    FANGE FormatFehler f\n      logge(f, zeilennummer); zähle als übersprungen   // Einzelzeile überspringen, Import läuft weiter\n    ENDE\n  ENDE\nFANGE DateiNichtGefunden d\n  melde "Datei nicht gefunden: " + csvDatei             // klarer Abbruch mit Nutzerhinweis\nFANGE DbVerbindungsFehler v\n  logge(v); melde "Import abgebrochen, bisherige Sätze zurückgerollt"; rollback()  // Abbruch: ohne DB geht nichts\nSCHLIESSLICH (finally)\n  WENN datei offen DANN schließe(datei)                 // Ressourcen immer freigeben\nENDE\nKernidee: Zeilenfehler sind lokal behandelbar (überspringen + protokollieren), fehlende Datei und DB-Ausfall nicht (Abbruch); Aufräumen läuft in jedem Fall.',
            },
            { type: "heading", value: "Vertiefung: der leere catch-Block als Prüfungsklassiker" },
            {
              type: "text",
              value:
                '"Bewerten Sie diesen Code" mit einem leeren catch ist eine Standardaufgabe. Die erwartete Antwort: Der Fehler wird verschluckt – keine Meldung, kein Log, das Programm arbeitet mit möglicherweise inkonsistentem Zustand weiter; die Fehlersuche wird extrem erschwert, weil das Symptom erst weit entfernt von der Ursache sichtbar wird. Mindestlösung: protokollieren und je nach Fall weiterwerfen oder definierten Ersatzwert liefern – begründet, nicht stillschweigend.',
            },
          ],
          quiz: [
            {
              id: "imp_ae-exc-1_g0",
              q: "Wozu dient der finally-Block?",
              options: [
                "Er läuft immer und eignet sich zum Freigeben von Ressourcen",
                "Er läuft ausschließlich dann, wenn im try-Block keine Ausnahme aufgetreten ist",
                "Er läuft nur im Fehlerfall als letzter catch",
                "Er beendet das Programm kontrolliert",
              ],
              correct: 0,
              explain:
                "finally wird in jedem Fall ausgeführt – ideal für schließen/freigeben; für den Fehlerfall allein ist catch da.",
            },
            {
              id: "imp_ae-exc-1_g1",
              q: "Warum müssen spezielle catch-Blöcke vor allgemeinen stehen?",
              options: [
                "Aus reinen Stilgründen – funktional ist die Reihenfolge der Blöcke egal",
                "Weil der erste passende Block gewinnt – die Oberklasse würde alles wegfangen",
                "Weil allgemeine Ausnahmen schneller verarbeitet werden",
                "Weil der Compiler catch-Blöcke alphabetisch sortiert",
              ],
              correct: 1,
              explain:
                "catch (Exception) vor catch (IOFehler) macht den zweiten Block toten Code – viele Compiler melden genau das.",
            },
            {
              id: "imp_ae-exc-1_g2",
              q: "Was ist das Kernproblem eines leeren catch-Blocks?",
              options: [
                "Er verbraucht unnötig Speicher",
                "Er fängt auch Ausnahmen anderer Threads",
                "Der Fehler wird unsichtbar verschluckt – Folgefehler tauchen fern der Ursache auf",
                "Er verhindert die Ausführung des zugehörigen finally-Blocks und aller Aufräumarbeiten",
              ],
              correct: 2,
              explain:
                "Fehler verschwinden unsichtbar, der Programmzustand kann inkonsistent weiterlaufen – Debugging-Albtraum.",
            },
            {
              id: "imp_ae-exc-1_g3",
              q: "Eine Kundensuche findet keinen Treffer. Wie gehst du damit idealerweise um?",
              options: [
                "UngueltigeSucheException werfen",
                "Das Programm mit Fehlercode beenden",
                "Die Suche automatisch mit gelockerten Parametern wiederholen, bis Treffer vorliegen",
                "Leeres Ergebnis zurückgeben – ein erwartbarer Fall ist keine Ausnahme",
              ],
              correct: 3,
              explain:
                'Exceptions sind für Ausnahmesituationen; "nichts gefunden" ist reguläres Ergebnis der Fachlichkeit.',
            },
            {
              id: "imp_ae-exc-1_g4",
              q: "Auf welcher Ebene sollte eine Exception gefangen werden?",
              options: [
                "Dort, wo sinnvoll reagiert werden kann – Nutzerhinweis, Retry, Ersatzverhalten",
                "Grundsätzlich immer direkt dort, wo die Ausnahme entsteht – nie weiterwerfen",
                "Immer erst in der main-Funktion",
                "In jeder Ebene erneut fangen und weiterwerfen",
              ],
              correct: 0,
              explain:
                "Wer nichts Sinnvolles tun kann, lässt sie (ggf. verpackt) nach oben durch – behandelt wird beim Zuständigen.",
            },
            {
              id: "imp_ae-exc-1_g5",
              q: "Was passiert nach einem throw mitten im try-Block?",
              options: [
                "Die restlichen Anweisungen des try-Blocks laufen erst vollständig zu Ende",
                "Der Rest des try wird übersprungen, der erste passende catch übernimmt",
                "Das Programm endet immer sofort",
                "finally wird übersprungen",
              ],
              correct: 1,
              explain:
                "Der Kontrollfluss springt zum passenden Handler; finally läuft danach trotzdem.",
            },
            {
              id: "imp_ae-exc-1_g6",
              q: "Welchen Vorteil bieten eigene Exception-Klassen wie UngueltigeIbanException?",
              options: [
                "Sie beschleunigen die Fehlerbehandlung des Laufzeitsystems spürbar",
                "Sie ersetzen die Protokollierung",
                "Fehlerarten werden gezielt fangbar und tragen fachlichen Kontext",
                "Sie verhindern, dass Fehler überhaupt auftreten",
              ],
              correct: 2,
              explain:
                'Gezieltes catch je Fehlerart plus sprechende Information – statt Einheitsbrei "Exception".',
            },
            {
              id: "imp_ae-exc-1_g7",
              q: "Ein catch auf die Oberklasse IOFehler fängt …",
              options: [
                "nur exakt IOFehler, keine Unterklassen",
                "alle Ausnahmen des Programms",
                "nur Ausnahmen aus finally-Blöcken",
                "auch alle Unterklassen wie DateiNichtGefunden",
              ],
              correct: 3,
              explain:
                "Polymorphie: Unterklassen SIND IOFehler – deshalb zählt die Reihenfolge der catch-Blöcke.",
            },
            {
              id: "imp_ae-exc-1_g8",
              q: "Beim CSV-Import ist eine einzelne Zeile fehlerhaft. Sinnvolle Behandlung?",
              options: [
                "Zeile protokollieren und überspringen – der Import läuft weiter",
                "Den gesamten Import sofort abbrechen und alle bisherigen Sätze zurückrollen",
                "Die Zeile stillschweigend mit Standardwerten füllen",
                "Den Anwender jede Zeile einzeln bestätigen lassen",
              ],
              correct: 0,
              explain:
                "Lokal behandelbarer Fehler: überspringen + Protokoll; Totalabbruch wäre bei DB-Ausfall angemessen.",
            },
            {
              id: "imp_ae-exc-1_g9",
              q: "Was sollte der Endnutzer im Fehlerfall zu sehen bekommen?",
              options: [
                "Den vollständigen Stacktrace zur Transparenz",
                "Eine verständliche Meldung – technische Details wandern ins Log",
                "Gar keine Meldung anzeigen, um jede Verunsicherung der Anwender zu vermeiden",
                "Den Quellcode der fehlerhaften Methode",
              ],
              correct: 1,
              explain:
                "Nutzer brauchen Handlungsfähigkeit, Entwickler brauchen Details – deshalb Meldung und Log trennen (auch aus Sicherheitsgründen).",
            },
          ],
        },
        {
          id: "ae-api-1",
          title: "Schnittstellen: REST, JSON & XML",
          content: [
            {
              type: "text",
              value:
                'Moderne Anwendungen sind verteilte Systeme: App, Webshop und Warenwirtschaft tauschen Daten über Schnittstellen (APIs) aus. Der verbreitetste Stil ist REST (Representational State Transfer) über HTTP.\n\nREST-Grundidee: Alles ist eine RESSOURCE mit eindeutiger URL (/kunden, /kunden/42, /kunden/42/bestellungen). Die Operation bestimmt die HTTP-METHODE: GET liest, POST legt neu an, PUT ersetzt einen Datensatz komplett, PATCH ändert Teilfelder, DELETE löscht. GET, PUT und DELETE sind IDEMPOTENT – mehrfaches Ausführen hat dieselbe Wirkung wie einmaliges; POST nicht (dreimal POST = drei neue Datensätze).\n\nSTATUSCODES melden das Ergebnis: 200 OK, 201 Created (nach POST), 204 No Content (z. B. nach DELETE), 400 Bad Request (fehlerhafte Anfrage), 401 Unauthorized (nicht authentifiziert), 403 Forbidden (authentifiziert, aber keine Rechte), 404 Not Found, 500 Internal Server Error. Merkregel: 2xx Erfolg, 4xx Fehler des Clients, 5xx Fehler des Servers.\n\nREST ist ZUSTANDSLOS: Jede Anfrage trägt alles Nötige (z. B. ein Token im Authorization-Header); der Server merkt sich keine Sitzung – das macht die API gut skalierbar.\n\nDatenformate: JSON ist heute Standard – leichtgewichtig, direkt aus JavaScript entstanden. Bausteine: Objekte {"name":"Meier","aktiv":true}, Arrays [1,2,3], Strings, Zahlen, true/false/null. Schlüssel stehen IMMER in doppelten Anführungszeichen, Kommentare sind nicht erlaubt.\nXML ist ausdrucksstärker (Attribute, Namespaces, Schema-Validierung per XSD), aber geschwätziger: <kunde id="42"><name>Meier</name></kunde>. Es dominiert in Alt- und B2B-Schnittstellen (z. B. SOAP-Webservices) und überall, wo strenge Validierung gefordert ist.\n\nTypische Prüfungsaufgaben: eine REST-Schnittstelle für eine Fachlichkeit entwerfen (URLs + Methoden + Statuscodes), ein JSON-Dokument zu einem Datenmodell schreiben/lesen oder JSON und XML abwägen.',
            },
            { type: "heading", value: "Übungsaufgabe: REST-API entwerfen" },
            {
              type: "text",
              value:
                "Für eine Fahrradverleih-App sollen Stationen und Ausleihen verwaltet werden. Entwirf die REST-Endpunkte für: a) alle Stationen abrufen, b) Details der Station 7, c) neue Ausleihe anlegen, d) Ausleihe 123 beenden (Rückgabezeit setzen), e) Ausleihe 123 stornieren/löschen. Gib je Methode + URL an sowie den erwarteten Erfolgs-Statuscode. Skizziere zusätzlich den JSON-Body für c) mit stationId, fahrradId und nutzerId.",
            },
            {
              type: "solution",
              value:
                'MUSTERLÖSUNG:\na) GET /stationen → 200\nb) GET /stationen/7 → 200 (404, falls unbekannt)\nc) POST /ausleihen → 201 Created (Location-Header mit URL der neuen Ausleihe)\nd) PATCH /ausleihen/123 → 200 (Teil-Update: Rückgabezeit; PUT wäre Komplett-Ersetzen)\ne) DELETE /ausleihen/123 → 204 No Content\nJSON-Body zu c):\n{\n  "stationId": 7,\n  "fahrradId": 301,\n  "nutzerId": 42\n}',
            },
            { type: "heading", value: "Vertiefung: JSON lesen wie die Prüfung es verlangt" },
            {
              type: "text",
              value:
                "Aufgaben geben oft ein JSON-Dokument vor und fragen nach Werten oder Fehlern. Checkliste: Sind alle Schlüssel in doppelten Anführungszeichen? Trennen Kommata die Elemente (aber KEIN Komma nach dem letzten)? Passen die Typen (Zahl ohne Anführungszeichen, Boolean kleingeschrieben)? Verschachtelung: bestellung.kunde.name greift durch Objekte, positionen[0].preis in Arrays. Häufigster Fehler in Antworten: einfache statt doppelte Anführungszeichen und vergessene geschweifte Klammern bei verschachtelten Objekten.",
            },
          ],
          quiz: [
            {
              id: "imp_ae-api-1_g0",
              q: "Welche HTTP-Methode legt in einer REST-API eine neue Ressource an?",
              options: ["GET", "PUT", "POST", "DELETE"],
              correct: 2,
              explain:
                "POST auf die Sammel-URL (/kunden) erzeugt; die Antwort ist idealerweise 201 Created.",
            },
            {
              id: "imp_ae-api-1_g1",
              q: "Was bedeutet Idempotenz – und welche Methode ist NICHT idempotent?",
              options: [
                "Anfragen werden verschlüsselt; GET ist nicht idempotent",
                "Der Server speichert den Sitzungszustand; DELETE ist nicht idempotent",
                "Antworten werden zwischengespeichert; PUT ist nicht idempotent",
                "Mehrfachausführung wirkt wie Einmalausführung; POST ist nicht idempotent",
              ],
              correct: 3,
              explain:
                "Dreimal dasselbe PUT/DELETE ändert nichts mehr – dreimal POST erzeugt drei Datensätze.",
            },
            {
              id: "imp_ae-api-1_g2",
              q: "Ein Client sendet fehlerhafte Daten (Pflichtfeld fehlt). Welcher Statuscode passt?",
              options: ["400 Bad Request", "200 OK", "404 Not Found", "500 Internal Server Error"],
              correct: 0,
              explain:
                "4xx = Client-Fehler; 400 signalisiert eine inhaltlich/syntaktisch fehlerhafte Anfrage.",
            },
            {
              id: "imp_ae-api-1_g3",
              q: "Worin unterscheiden sich 401 und 403?",
              options: [
                "401 = Server überlastet, 403 = Wartungsmodus",
                "401 = nicht authentifiziert, 403 = authentifiziert, aber ohne Berechtigung",
                "401 = Ressource wurde gelöscht, 403 = Ressource wurde dauerhaft verschoben",
                "Es gibt keinen Unterschied",
              ],
              correct: 1,
              explain:
                "Erst ausweisen (401 fehlt der Nachweis), dann dürfen (403 fehlt das Recht).",
            },
            {
              id: "imp_ae-api-1_g4",
              q: 'Was heißt "REST ist zustandslos"?',
              options: [
                "Die API speichert keine Daten in der Datenbank",
                "Die API kann ausschließlich lesende GET-Zugriffe ohne Parameter verarbeiten",
                "Jede Anfrage enthält alle nötigen Informationen; der Server hält keine Sitzung",
                "Antworten dürfen nicht gecacht werden",
              ],
              correct: 2,
              explain:
                "Kein Session-Gedächtnis auf dem Server – Auth-Token & Co. reisen mit jeder Anfrage mit; das skaliert gut.",
            },
            {
              id: "imp_ae-api-1_g5",
              q: "Welches JSON-Dokument ist syntaktisch korrekt?",
              options: [
                '{name: "Meier", aktiv: true}',
                "{'name': 'Meier', 'aktiv': True}",
                '("name" = "Meier", "aktiv" = true)',
                '{"name": "Meier", "aktiv": true}',
              ],
              correct: 3,
              explain:
                "Schlüssel und Strings in doppelten Anführungszeichen, Boolean klein – die anderen Varianten verletzen die JSON-Syntax.",
            },
            {
              id: "imp_ae-api-1_g6",
              q: "Wann ist XML gegenüber JSON im Vorteil?",
              options: [
                "Wenn Schema-Validierung (XSD), Attribute oder Namespaces gefordert sind",
                "Wenn möglichst wenig Datenvolumen übertragen werden soll",
                "Wenn die Daten nur aus Zahlen bestehen",
                "XML ist JSON in jeder Hinsicht überlegen",
              ],
              correct: 0,
              explain:
                "XSD-Validierung und Namespaces sind XML-Stärken – dafür ist es deutlich geschwätziger.",
            },
            {
              id: "imp_ae-api-1_g7",
              q: "PUT /kunden/42 vs. PATCH /kunden/42 – der Unterschied?",
              options: [
                "PUT liest Ressourcen aus, PATCH legt dagegen neue Ressourcen an",
                "PUT ersetzt die Ressource vollständig, PATCH ändert nur übermittelte Teilfelder",
                "PUT ist unsicher, PATCH verschlüsselt",
                "PATCH legt neue Ressourcen an, PUT löscht sie",
              ],
              correct: 1,
              explain:
                "Komplett-Ersetzen vs. Teil-Update – bei PUT müssen alle Felder mitgesendet werden.",
            },
            {
              id: "imp_ae-api-1_g8",
              q: 'Welche URL entspricht dem REST-Stil für "alle Bestellungen des Kunden 42"?',
              options: [
                "GET /getBestellungenVonKunde?nr=42",
                "POST /bestellungen/suche/kunde42",
                "GET /kunden/42/bestellungen",
                "GET /api.php?action=bestellungen&kunde=42",
              ],
              correct: 2,
              explain:
                "Ressourcen-Hierarchie in der URL, Verb über die HTTP-Methode – keine Verben oder Aktionen im Pfad.",
            },
            {
              id: "imp_ae-api-1_g9",
              q: "Nach erfolgreichem POST /ausleihen antwortet eine saubere REST-API mit …",
              options: [
                "200 OK ohne weitere Angaben",
                "204 No Content",
                "302 Found mit sofortiger Weiterleitung des Clients zur Startseite",
                "201 Created, idealerweise mit Location-Header zur neuen Ressource",
              ],
              correct: 3,
              explain:
                "201 signalisiert die Erzeugung; der Location-Header nennt die URL des neuen Datensatzes.",
            },
          ],
        },
      ],
    },
  ],
};
