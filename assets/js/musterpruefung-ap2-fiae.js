"use strict";
window.MP_AP2AE = {
  kurz: "FIAE-AP2",
  zeit: 90,
  titel: "Musterprüfung FIAE-AP2: Planen und Entwickeln einer Anwendung",
  untertitel:
    "90 Minuten · 100 Punkte · 4 Aufgaben · Pseudocode, UML, Datenmodell/SQL und Testkonzept – wie im echten Prüfungsformat mit offenen Antworten.",
  situation:
    "Der Fahrradverleih StadtRad Petersen GmbH (vier Stationen, 240 Räder) beauftragt Ihren Ausbildungsbetrieb mit einer Verleih-Anwendung: Kundinnen sollen Räder ausleihen und zurückgeben, das System berechnet Preise, verwaltet den Bestand und liefert Auswertungen. Sie arbeiten als Fachinformatiker/in für Anwendungsentwicklung an Entwurf, Datenmodell und Testkonzept.",
  aufgaben: [
    {
      t: "1. Aufgabe (25 Punkte)",
      intro: "Zunächst entwerfen Sie die Preisberechnung.",
      teile: [
        {
          k: "a)",
          punkte: 10,
          frage:
            "Die Preisregel lautet: erste Stunde 2,00 €; jede weitere angefangene Stunde 1,50 €; Tagesdeckel 12,00 € (mehr wird pro Kalendertag nie berechnet); E-Bikes kosten das 1,5-Fache des Gesamtpreises. Entwerfen Sie die Funktion berechnePreis(stunden, istEbike) als Pseudocode.",
          zeilen: 10,
          loesung:
            "Beispiel-Musterlösung:<br><code>FUNKTION berechnePreis(stunden, istEbike)<br>&nbsp;&nbsp;WENN stunden &lt;= 0 DANN RÜCKGABE 0<br>&nbsp;&nbsp;preis = 2,00<br>&nbsp;&nbsp;WENN stunden &gt; 1 DANN<br>&nbsp;&nbsp;&nbsp;&nbsp;preis = preis + AUFRUNDEN(stunden − 1) × 1,50<br>&nbsp;&nbsp;ENDE WENN<br>&nbsp;&nbsp;WENN preis &gt; 12,00 DANN preis = 12,00<br>&nbsp;&nbsp;WENN istEbike DANN preis = preis × 1,5<br>&nbsp;&nbsp;RÜCKGABE preis<br>ENDE FUNKTION</code><br>Bewertung: Grundpreis (2 P), angefangene Stunden per Aufrunden (3 P), Deckel VOR E-Bike-Faktor (3 P – Reihenfolge ist der Knackpunkt: der Deckel gilt je Rad, der Faktor auf den gedeckelten Preis), Sonderfall ≤ 0 (1 P), sauberer Aufbau (1 P).",
        },
        {
          k: "b)",
          punkte: 6,
          frage:
            "Führen Sie einen Schreibtischtest durch: Welchen Preis liefert Ihre Funktion für (a) 0,5 Stunden normales Rad, (b) 4,25 Stunden normales Rad, (c) 9 Stunden E-Bike? (Rechenweg)",
          tabelle: {
            kopf: ["Fall", "Rechenweg", "Ergebnis"],
            zeilen: [
              ["0,5 h, normal", null, null],
              ["4,25 h, normal", null, null],
              ["9 h, E-Bike", null, null],
            ],
          },
          loesung:
            "(a) erste Stunde → <strong>2,00 €</strong>. (b) 2,00 + AUFRUNDEN(3,25) × 1,50 = 2,00 + 4 × 1,50 = <strong>8,00 €</strong>. (c) 2,00 + 8 × 1,50 = 14,00 → Deckel 12,00 → × 1,5 = <strong>18,00 €</strong>. Je Fall 2 Punkte.",
        },
        {
          k: "c)",
          punkte: 5,
          frage:
            "Ein Kollege hat statt AUFRUNDEN(stunden − 1) den Ausdruck GANZZAHL(stunden) − 1 verwendet. Beschreiben Sie den Fehler an einem konkreten Beispielwert.",
          zeilen: 4,
          loesung:
            "Bei 4,25 h liefert GANZZAHL(4,25) − 1 = 3 weitere Stunden statt 4 – die ANGEFANGENE Stunde wird nicht berechnet (2,5 P). Beispielrechnung: 2,00 + 3 × 1,50 = 6,50 € statt 8,00 € → Umsatzverlust, Regelverstoß (2,5 P). Abrunden statt Aufrunden ist der klassische Randfall-Fehler.",
        },
        {
          k: "d)",
          punkte: 4,
          frage:
            "Nennen Sie zwei Gründe, warum die Preisregel als eigene Funktion statt verstreut im Code implementiert werden sollte.",
          zeilen: 4,
          loesung:
            "Je 2 Punkte: Änderbarkeit (Preisänderung an genau einer Stelle, keine Inkonsistenzen); Testbarkeit (Unittest der Funktion isoliert möglich). Auch zulässig: Wiederverwendung App/Web/Kasse, Lesbarkeit.",
        },
      ],
    },
    {
      t: "2. Aufgabe (25 Punkte)",
      intro: "Sie modellieren die Anwendung objektorientiert.",
      teile: [
        {
          k: "a)",
          punkte: 10,
          frage:
            "Entwerfen Sie das Klassendiagramm in Textform: Basisklasse Fahrrad (Attribute: rahmenNr, station, istVerliehen; Methoden: verleihen(), zurücknehmen()) und die Unterklasse EBike (zusätzlich: akkuProzent; überschreibt verleihen(), das nur bei akkuProzent ≥ 20 verleiht). Notieren Sie beide Klassen mit UML-Sichtbarkeiten (Attribute privat, Methoden öffentlich) und kennzeichnen Sie die Beziehung.",
          zeilen: 10,
          loesung:
            "<code>Fahrrad<br>− rahmenNr: String<br>− station: int<br>− istVerliehen: boolean<br>+ verleihen(): boolean<br>+ zurücknehmen(): void<br><br>EBike (Pfeil mit leerem Dreieck auf Fahrrad = Vererbung)<br>− akkuProzent: int<br>+ verleihen(): boolean  « überschrieben »</code><br>Bewertung: Attribute mit − und Typ (3 P), Methoden mit + (2 P), Vererbungsrichtung Unterklasse → Oberklasse (2 P), Überschreiben von verleihen() mit Akku-Bedingung erwähnt (3 P).",
        },
        {
          k: "b)",
          punkte: 5,
          frage:
            "Erklären Sie am Aufruf rad.verleihen(), was Polymorphie hier konkret bewirkt, wenn rad vom deklarierten Typ Fahrrad ist, aber ein EBike-Objekt enthält.",
          zeilen: 4,
          loesung:
            "Zur Laufzeit entscheidet der TATSÄCHLICHE Objekttyp: Es läuft EBike.verleihen() mit der Akku-Prüfung, nicht die Basisversion (3 P). Der aufrufende Code (Stationsverwaltung) bleibt unverändert und behandelt alle Radtypen gleich – neue Typen (Lastenrad) lassen sich ergänzen, ohne den Verleihcode anzufassen (2 P).",
        },
        {
          k: "c)",
          punkte: 6,
          frage:
            "Die Ausleihe soll als eigene Klasse Ausleihe (kunde, fahrrad, beginn, ende, preis) modelliert werden. Geben Sie die Beziehungen inkl. Multiplizitäten zwischen Kunde, Ausleihe und Fahrrad an und begründen Sie kurz.",
          zeilen: 5,
          loesung:
            "Kunde 1 — 0..* Ausleihe (ein Kunde hat beliebig viele Ausleihen, jede Ausleihe genau einen Kunden, 2,5 P) · Fahrrad 1 — 0..* Ausleihe (2,5 P). Ausleihe ist die Assoziationsklasse, die den Zeitraum und Preis trägt – Kunde und Rad direkt zu verbinden (n:m) würde die Historie verlieren (1 P).",
        },
        {
          k: "d)",
          punkte: 4,
          frage:
            "verleihen() wirft eine Exception, wenn das Rad bereits verliehen ist. Skizzieren Sie den Aufruf mit sauberer Fehlerbehandlung in Pseudocode (try/catch).",
          zeilen: 5,
          loesung:
            "<code>VERSUCHE<br>&nbsp;&nbsp;rad.verleihen()<br>&nbsp;&nbsp;zeigeErfolg()<br>FANGE BereitsVerliehenFehler f<br>&nbsp;&nbsp;zeigeMeldung(„Rad ist bereits verliehen“)<br>&nbsp;&nbsp;protokolliere(f)<br>ENDE VERSUCHE</code><br>Spezifisch fangen (1,5 P), Nutzermeldung statt Absturz (1,5 P), Protokollierung (1 P).",
        },
      ],
    },
    {
      t: "3. Aufgabe (25 Punkte)",
      intro: "Sie entwerfen das Datenmodell und die Auswertungen.",
      teile: [
        {
          k: "a)",
          punkte: 8,
          frage:
            "Gegeben ist die unnormalisierte Tabelle ausleihe(nr, datum, kundenname, kundentelefon, radliste 'R12;R31', stundenliste '2;4'). Überführen Sie den Bestand in die 3. Normalform: Geben Sie die entstehenden Tabellen mit Primär- und Fremdschlüsseln an.",
          zeilen: 8,
          loesung:
            "kunde(<u>k_id</u>, name, telefon) · fahrrad(<u>rad_id</u>, rahmenNr, typ, station) · ausleihe(<u>a_id</u>, datum, k_id↗kunde) · ausleihe_position(<u>a_id↗ausleihe, rad_id↗fahrrad</u>, stunden, preis). Bewertung: 1. NF Listen aufgelöst (2 P), Kundendaten ausgelagert – 3. NF, keine transitive Abhängigkeit (2 P), Positionstabelle mit zusammengesetztem Schlüssel (2 P), Fremdschlüssel korrekt notiert (2 P).",
        },
        {
          k: "b)",
          punkte: 6,
          frage:
            "Formulieren Sie eine SQL-Abfrage: Je Station die Anzahl der Ausleihen und der Durchschnittspreis im Juni 2026, nur Stationen mit mehr als 100 Ausleihen, absteigend nach Anzahl. (Tabellen aus a), fahrrad.station als Stationsnummer)",
          zeilen: 6,
          loesung:
            "SELECT f.station, COUNT(*) AS anzahl, AVG(p.preis) AS schnitt FROM ausleihe_position p JOIN fahrrad f ON f.rad_id = p.rad_id JOIN ausleihe a ON a.a_id = p.a_id WHERE a.datum &gt;= '2026-06-01' AND a.datum &lt; '2026-07-01' GROUP BY f.station HAVING COUNT(*) &gt; 100 ORDER BY anzahl DESC; – JOINs (2 P), Zeitraum im WHERE (1 P), GROUP BY (1 P), HAVING (1 P), ORDER BY (1 P).",
        },
        {
          k: "c)",
          punkte: 6,
          frage:
            "Die App fragt Kundendaten per Eingabefeld ab; ein Tester meldet, dass die Eingabe ' OR 1=1 -- alle Kundendaten liefert. Benennen Sie die Schwachstelle, erklären Sie den Mechanismus in einem Satz und beschreiben Sie die technische Kernmaßnahme mit einem Codebeispiel-Fragment.",
          zeilen: 6,
          loesung:
            "SQL-Injection (1 P): Die Eingabe wird per String-Verkettung Teil des SQL-Befehls und verändert die WHERE-Logik (2 P). Kernmaßnahme Prepared Statement (3 P): <code>SELECT * FROM kunde WHERE name = ?</code> mit Parameter-Bindung (setString(1, eingabe)) – die Eingabe bleibt immer Datum, nie Code. Ergänzend: Least-Privilege-DB-Konto.",
        },
        {
          k: "d)",
          punkte: 5,
          frage:
            "Die Auswertung 'Umsatz je Monat' zeigt im Diagramm einen dramatischen Einbruch, weil die Y-Achse bei 40.000 € beginnt und der Dezember nur halb erfasst ist. Nennen Sie die beiden Darstellungsfehler und die jeweils korrekte Darstellung.",
          zeilen: 4,
          loesung:
            "(1) Abgeschnittene Y-Achse überzeichnet kleine Unterschiede → Achse bei 0 beginnen (2,5 P). (2) Unvollständiger Randmonat verzerrt den Trend → Dezember kennzeichnen/weglassen oder auf Tagesbasis hochrechnen, Vergleich mit Vorjahresmonat (2,5 P).",
        },
      ],
    },
    {
      t: "4. Aufgabe (25 Punkte)",
      intro: "Vor der Abnahme erstellen Sie das Testkonzept.",
      teile: [
        {
          k: "a)",
          punkte: 8,
          frage:
            "Für das Eingabefeld 'Ausleihdauer in Stunden' gilt: zulässig sind Werte von 0,5 bis 24. Bilden Sie die Äquivalenzklassen und leiten Sie die Testwerte der Grenzwertanalyse ab.",
          tabelle: {
            kopf: ["", "Ihre Antwort"],
            zeilen: [
              ["Äquivalenzklassen", null],
              ["Testwerte untere Grenze", null],
              ["Testwerte obere Grenze", null],
              ["Zusätzliche Negativtests", null],
            ],
          },
          loesung:
            "Klassen (3 P): ungültig &lt; 0,5 · gültig 0,5–24 · ungültig &gt; 24. Untere Grenze (2 P): 0,4 (bzw. 0,49) und 0,5. Obere (2 P): 24 und 24,1 (bzw. 24,5). Negativ (1 P): Text ('abc'), leer, negative Zahl – robuste Abweisung statt Absturz.",
        },
        {
          k: "b)",
          punkte: 6,
          frage:
            "Schreiben Sie für berechnePreis() aus Aufgabe 1 zwei vollständige Testfälle in Tabellenform (Testfall-Nr., Eingaben, erwartetes Ergebnis, geprüfte Regel).",
          tabelle: {
            kopf: ["Nr.", "Eingaben", "Erwartet", "Geprüfte Regel"],
            zeilen: [
              ["T1", null, null, null],
              ["T2", null, null, null],
            ],
          },
          loesung:
            "Beispiel: T1: (4,25; falsch) → 8,00 € → angefangene Stunden werden aufgerundet. T2: (9; wahr) → 18,00 € → Tagesdeckel greift VOR dem E-Bike-Faktor. Je Testfall 3 Punkte (vollständig: Eingaben + konkreter Erwartungswert + Regelbezug).",
        },
        {
          k: "c)",
          punkte: 6,
          frage:
            "Erläutern Sie die Teststufen, die die Verleih-Anwendung bis zur Abnahme durchläuft, mit je einem konkreten Prüfgegenstand aus diesem Projekt.",
          zeilen: 6,
          loesung:
            "Unittest (1,5 P): berechnePreis() isoliert. Integrationstest (1,5 P): Ausleihe-Klasse mit Datenbankzugriff (Rad wird als verliehen markiert). Systemtest (1,5 P): kompletter Ausleihvorgang über die Oberfläche an einer Teststation. Abnahmetest (1,5 P): StadtRad prüft gegen das Pflichtenheft (z. B. Preisregeln, Auswertungen).",
        },
        {
          k: "d)",
          punkte: 5,
          frage:
            "Nach einem Bugfix an der Preisfunktion sollen Fehler in bereits getesteten Bereichen ausgeschlossen werden. Benennen Sie das passende Testverfahren und begründen Sie, warum es automatisiert sein sollte.",
          zeilen: 4,
          loesung:
            "Regressionstest (2 P): alle bisherigen Testfälle laufen erneut. Automatisiert (3 P), weil er nach JEDER Änderung wirtschaftlich wiederholbar sein muss – manuell unterbleibt er in der Praxis, automatisiert läuft er in Minuten (CI).",
        },
      ],
    },
  ],
};
