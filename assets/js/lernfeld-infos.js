"use strict";
window.LF_META = {
  komm: {
    intro:
      "Kommunikation ist die halbe IT-Arbeit: Mit dem Vier-Ohren-Modell verstehst du, was Kunden wirklich sagen – und mit dem E-Mail-Leitfaden schreibst du Antworten, die ankommen.",
    deep: "Kommunikationsquadrat nach Schulz von Thun (vier Seiten, vier Ohren, Hörgewohnheiten, Deeskalationsformel), professionelle Kunden-E-Mails (Lieschen-Müller-Prinzip, Ich-Form, Struktur mit Fristen und Konsequenz, Ehrlichkeitsregel, Platzhalter statt erfundener Daten).",
    situation:
      "Ein Kunde schreibt gereizt, die Störung sei „schon wieder“ da – du analysierst die Nachricht auf vier Ebenen und antwortest mit einer Mail, die deeskaliert und den Vorgang abschließbar macht.",
    goals: [
      "Nachrichten auf allen vier Seiten analysieren",
      "verärgerte Kunden deeskalieren",
      "Kunden-E-Mails klar, freundlich und verbindlich schreiben",
    ],
    terms: [],
    mistakes: [
      "auf der Beziehungsebene zurückschlagen („wie bereits erklärt …“)",
      "vage Erfolgsmeldungen ohne Beleg („dürfte wieder gehen“)",
    ],
    praxis: "Übungsmails aus den Lektionen nachschreiben und mit den Musterlösungen vergleichen.",
    links: [
      ["Wikipedia: Vier-Seiten-Modell", "https://de.wikipedia.org/wiki/Vier-Seiten-Modell"],
      ["Karrierebibel: E-Mails schreiben", "https://karrierebibel.de/e-mail-schreiben/"],
    ],
    cross: [
      { lf: "lf6", label: "Serviceanfragen & Deeskalation in LF6" },
      { lf: "allgemein", label: "Protokolle & Doku in der Berufsschule" },
    ],
    viz: "ticket",
    apNote:
      "Kundenkommunikation taucht in AP1 und AP2 in Situationsaufgaben auf – Antwortschema: anerkennen, klären, verbindlich zusagen.",
  },
  itsm: {
    intro:
      "IT-Produkte und -Dienstleistungen beraten, kalkulieren, verkaufen – der kaufmännische Blick auf IT-Lösungen.",
    deep: "Bedarfsanalyse, Angebotsinhalte, Nutzenargumentation, Vertragsarten (Kauf/Werk/Dienst/Miete/Leasing, SLA), Handelskalkulation vor- und rückwärts, Angebotsvergleich mit Nutzwertanalyse.",
    situation:
      "Ein Kunde will „10 Notebooks mit allem“ – du machst daraus ein sauberes Angebot mit Kalkulation und Vertragsklarheit.",
    goals: [
      "Angebote vollständig erstellen",
      "Vertragsarten zuordnen und begründen",
      "Preise kalkulieren",
    ],
    terms: [],
    mistakes: [
      "Skonto auf den falschen Zwischenwert beziehen",
      "Werk- und Dienstvertrag verwechseln",
    ],
    praxis: "Deine Firma: Aufträge kaufmännisch durchspielen.",
    links: [["Wikipedia: Werkvertrag", "https://de.wikipedia.org/wiki/Werkvertrag_(Deutschland)"]],
    cross: [{ lf: "wiso", label: "Kalkulation & Recht in WISO" }],
    viz: "orga",
    apNote:
      "AP1 ist für alle IT-Berufe identisch; im Teil 2 zählen Kalkulation, Verträge und Kundensituationen.",
  },
  kdm: {
    intro:
      "Digitalisierung wirtschaftlich steuern: Prozesse analysieren, Business Cases rechnen, Verträge und Datenschutz im Griff.",
    deep: "Medienbrüche und Priorisierung, ROI/Amortisation/TCO, Kennzahlen-Steckbriefe und Berichtskritik, SaaS-Verträge (AVV, Exit, SLA), Lizenzmetriken, Einführung mit Key-Usern.",
    situation:
      "Fünf Excel-Listen im Vertrieb – du baust den Business Case fürs CRM und planst die Einführung.",
    goals: [
      "Digitalisierungspotenzial priorisieren",
      "Wirtschaftlichkeit rechnen",
      "Verträge und Datenschutz bewerten",
    ],
    terms: ["SLA"],
    mistakes: ["Prozess erst digitalisieren, dann optimieren", "Exit-Klausel vergessen"],
    praxis: "SQL-Baukasten: Auswertungen selbst zusammenstellen.",
    links: [
      [
        "Wikipedia: Total Cost of Ownership",
        "https://de.wikipedia.org/wiki/Total_Cost_of_Ownership",
      ],
    ],
    cross: [
      { lf: "fidp", label: "Analyse-Handwerk im FIDP-Bonus" },
      { lf: "wiso", label: "KLR in WISO" },
    ],
    viz: "datenfluss",
    apNote:
      "AP1 ist für alle IT-Berufe identisch; im Teil 2 zählen Business Case, Bericht und Vertragsbewertung.",
  },
  itse: {
    intro:
      "Wo IT auf Strom trifft: Elektrotechnik, DGUV-V3-Prüfungen und physische Infrastruktur sicher errichten und instandhalten.",
    deep: "U=R·I und P=U·I in der Einsatzplanung, Schutzklassen, fünf Sicherheitsregeln, DGUV-V3-Prüfablauf mit Messungen, Trassen/EMV/Erdung, USV-Wartung, DIN 31051.",
    situation:
      "Nach Elektroarbeiten flappen Ports auf zwei Etagen – du grenzt physikalisch ein statt Software zu raten.",
    goals: [
      "Elektrische Grundgrößen sicher rechnen",
      "DGUV-V3-Prüfungen durchführen und bewerten",
      "Infrastruktur normgerecht errichten",
    ],
    terms: ["USV"],
    mistakes: ["Sicherheitsregeln-Reihenfolge", "Sichtprüfung für ausreichend halten"],
    praxis: "PC-Zusammenbau und Patchkabel-Trainer im IT-Labor.",
    links: [["Wikipedia: DGUV Vorschrift 3", "https://de.wikipedia.org/wiki/DGUV_Vorschrift_3"]],
    cross: [
      { lf: "lf2", label: "Elektro-Grundlagen in LF2" },
      { lf: "lf3", label: "Verkabelung in LF3" },
    ],
    viz: "arbeitsplatz",
    apNote:
      "AP1 ist für alle IT-Berufe identisch; im Teil 2 zählen Elektro-Rechnungen und Prüfabläufe.",
  },
  kbm: {
    intro:
      "Büromanagement: DIN-5008-Korrespondenz, Organisation, Rechnungswesen und Tabellenkalkulation – dein Prüfungskern.",
    deep: "DIN-5008-Schreibweisen, Eisenhower/ALPEN, Aufbewahrungsfristen (10/8/6 Jahre), Rechnungs-Pflichtangaben § 14 UStG, Skonto-Effektivzins, Mahnwesen, SVERWEIS/WENN/SUMMEWENN, absolute Bezüge.",
    situation:
      "Falschlieferung mit überhöhter Rechnung – du prüfst, rügst nach DIN 5008 und sperrst die Zahlung.",
    goals: [
      "Geschäftsbriefe normgerecht verfassen",
      "Rechnungen prüfen und Fristen managen",
      "Tabellenkalkulation prüfungssicher einsetzen",
    ],
    terms: [],
    mistakes: ["Großschreibung nach der Anrede", "SVERWEIS ohne FALSCH/absolute Bezüge"],
    praxis: "Notentracker im Dashboard für deine Fächer nutzen.",
    links: [["Wikipedia: DIN 5008", "https://de.wikipedia.org/wiki/DIN_5008"]],
    cross: [{ lf: "wiso", label: "WISO gilt auch für dich" }],
    viz: "ticket",
    apNote:
      "Achtung: KBM ist kein IT-Beruf – Teil 1 ist das informationstechnische Büromanagement (PC-Prüfung), nicht die IT-AP1.",
  },
  fidp: {
    intro:
      "Daten- und Prozessanalyse: Aus Rohdaten belastbare Kennzahlen machen, Prozesse sichtbar machen und datenschutzkonform optimieren.",
    deep: "ETL und Datenqualität (6 Dimensionen), SQL-Auswertungen mit GROUP BY, Lage- und Streuungsmaße (Median vs. Mittelwert), Diagrammwahl, BPMN 2.0, Prozesskennzahlen (Durchlauf- vs. Bearbeitungszeit), Ist-/Soll-Analyse, Anonymisierung vs. Pseudonymisierung.",
    situation:
      "Die Geschäftsführung will wissen, warum Anträge sechs Tage liegen – du misst den Ist-Prozess, findest die Wartezeiten und baust das Soll-Konzept mit Kennzahlen.",
    goals: [
      "Datenqualität bewerten und Bereinigung begründen",
      "Kennzahlen berechnen und richtig interpretieren",
      "Prozesse in BPMN lesen und modellieren",
    ],
    terms: ["EVA-Prinzip"],
    mistakes: [
      "Mittelwert trotz Ausreißern verwenden (Median!)",
      "Durchlauf- mit Bearbeitungszeit verwechseln",
    ],
    praxis:
      "SQL-Baukasten in der Labor-Station: Auswertung mit Filter und Sortierung selbst zusammenstellen.",
    links: [
      [
        "Wikipedia: Business Process Model and Notation",
        "https://de.wikipedia.org/wiki/Business_Process_Model_and_Notation",
      ],
      ["Wikipedia: Datenqualität", "https://de.wikipedia.org/wiki/Datenqualit%C3%A4t"],
    ],
    cross: [
      { lf: "lf8", label: "SQL-Vertiefung in LF8" },
      { lf: "wiso", label: "Kennzahlen & KLR in WISO" },
    ],
    viz: "datenfluss",
    apNote:
      "AP1 ist berufsübergreifend identisch; im Teil 2 zählen Kennzahlen-Interpretation, BPMN und Datenschutz.",
  },
  fidv: {
    intro:
      "Digitale Vernetzung: IT und Produktion (OT) sicher verbinden – Zonen, Industrieprotokolle, Echtzeit und Störungsanalyse an der Anlage.",
    deep: "Purdue-Modell und Industrie-DMZ, Zonen & Conduits (IEC 62443), Modbus/OPC UA/MQTT mit Ports und Sicherheitsniveau, gehärtete Fernwartung, passives OT-Monitoring, Determinismus, TSN/PTP, privates 5G, Safety vs. Security.",
    situation:
      "Ein Maschinenbauer will SPS-Daten im ERP sehen – du entwirfst den Weg über Edge-Gateway und Industrie-DMZ, statt die Steuerung ins Büro-VLAN zu hängen.",
    goals: [
      "Zonenkonzept für eine Anlage entwerfen",
      "Industrieprotokolle anforderungsgerecht wählen",
      "Störungen entlang der Automatisierungskette eingrenzen",
    ],
    terms: ["DMZ", "VLAN"],
    mistakes: [
      "SPS direkt ins Büro-LAN/Internet hängen",
      "aktives Scannen im OT-Netz (Anlagen-Absturz)",
    ],
    praxis:
      "Firewall-Regelwerk in der Labor-Station: Zonenübergänge mit Default Deny selbst bauen.",
    links: [
      ["Wikipedia: Operational Technology", "https://de.wikipedia.org/wiki/Operational_Technology"],
      [
        "Wikipedia: OPC Unified Architecture",
        "https://de.wikipedia.org/wiki/OPC_Unified_Architecture",
      ],
    ],
    cross: [
      { lf: "lf7", label: "CPS-Grundlagen in LF7" },
      { lf: "lf11a", label: "Netz-Sicherheit in LF11a" },
    ],
    viz: "cps",
    apNote:
      "AP1 ist berufsübergreifend identisch; im Teil 2 zählen Zonenkonzepte, Protokollwahl und OT-Störungsanalyse.",
  },
  lf1: {
    intro:
      "Hier lernst du, wie ein Betrieb tickt: Rechtsformen, Ziele, Organisation – und wo du als Azubi mit Rechten und Pflichten stehst.",
    deep: "Rechtsformen (Einzelunternehmen, GbR, OHG, KG, GmbH, UG, AG) mit Haftung, Kapital und Organen; Zielsysteme und Organigramme; BBiG, JArbSchG, Tarif- und Arbeitsrecht in Grundzügen; Stakeholder und Wertschöpfung.",
    situation:
      "Ein Kunde fragt beim Beratungsgespräch, warum eure Firma eine GmbH ist und wer bei Fehlern haftet – du sollst es in zwei Sätzen sauber erklären können.",
    goals: [
      "Rechtsformen unterscheiden und begründet empfehlen",
      "Aufbau- und Ablauforganisation lesen",
      "eigene Rechte und Pflichten in der Ausbildung kennen",
    ],
    terms: ["TOM", "EVA-Prinzip"],
    mistakes: [
      "GmbH-Stammkapital (25.000 €) mit UG verwechseln",
      "Lastenheft/Pflichtenheft-Zuordnung (kommt in WISO ständig dran)",
    ],
    praxis:
      "Angebotsvergleich mit Nutzwertanalyse für eine Kundenanfrage durchführen und die Empfehlung wirtschaftlich begründen.",
    links: [
      [
        "Wikipedia: Rechtsformen (Deutschland)",
        "https://de.wikipedia.org/wiki/Rechtsform_(Deutschland)",
      ],
      ["Gesetze im Internet: BBiG", "https://www.gesetze-im-internet.de/bbig_2005/"],
    ],
    cross: [
      { lf: "wiso", label: "Vertiefung in WISO" },
      { lf: "lf12a", label: "Wird in LF12a (Projektwirtschaftlichkeit) erneut benötigt" },
    ],
    viz: "orga",
    apNote: "AP1: Rechtsformen, Nutzwertanalyse und Arbeitsrecht sind sichere Punktebringer.",
  },
  lf2: {
    intro:
      "Vom Kundenwunsch zum fertigen Arbeitsplatz: Hardware auswählen, elektrisch denken, Angebote vergleichen und ergonomisch aufbauen.",
    deep: "Computerkomponenten und Schnittstellen (PCIe, SATA, M.2, USB), Netzteile und elektrische Leistung (P = U · I), Zahlensysteme als Werkzeug, Monitore und Peripherie, Beschaffung mit Angebotsvergleich und Nutzwertanalyse, Ergonomie und Arbeitsschutz.",
    situation:
      "Eine Arztpraxis bestellt drei Arbeitsplätze für Bildbefundung: Du planst Hardware, begründest die Auswahl und kalkulierst die Stromkosten.",
    goals: [
      "Komponenten anforderungsgerecht auswählen",
      "elektrische Grundgrößen berechnen",
      "Angebote strukturiert vergleichen",
    ],
    terms: ["EVA-Prinzip", "RAID"],
    mistakes: [
      "Watt und Kilowattstunde verwechseln",
      "RAM-Bedarf nach Gefühl statt nach Anwendungsprofil schätzen",
    ],
    praxis:
      "Mainboard-Vergleich wie in den Projektunterlagen (LF2-Material) – zwei Boards gegen Anforderungsliste bewerten.",
    links: [
      ["Wikipedia: Mainboard", "https://de.wikipedia.org/wiki/Hauptplatine"],
      ["Wikipedia: Netzteil", "https://de.wikipedia.org/wiki/Netzteil"],
    ],
    cross: [
      { lf: "lf3", label: "Netzanbindung des Arbeitsplatzes in LF3" },
      { lf: "lf4", label: "Schutzbedarf der Geräte in LF4" },
    ],
    viz: "arbeitsplatz",
    apNote: "AP1: Rechenaufgaben zu Leistung/Energie und Komponentenwahl kommen fast immer dran.",
  },
  lf3: {
    intro:
      "Du bringst Clients ins Netz: IP-Adressen, Subnetze, Switches, Verkabelung – die Grundlage für alles, was danach kommt.",
    deep: "OSI- und TCP/IP-Modell, Ethernet und WLAN, IPv4-Adressierung mit Subnetting, MAC-Adressen und Switching, strukturierte Verkabelung, erste Fehlersuche mit ping/ipconfig, Packet-Tracer-Übungen aus dem Schulmaterial.",
    situation:
      "Ein neuer Mitarbeiter-PC bekommt keine Verbindung: Du prüfst Dose, Patchfeld, Switchport, IP-Konfiguration – strukturiert nach Schichten.",
    goals: [
      "Subnetze berechnen und zuweisen",
      "Geräte den OSI-Schichten zuordnen",
      "Clients strukturiert ins LAN einbinden",
    ],
    terms: ["OSI-Modell", "Subnetzmaske", "MAC-Adresse", "Switch"],
    mistakes: [
      "Netz- und Broadcast-Adresse als nutzbare Hosts mitzählen",
      "Switch (Schicht 2) und Router (Schicht 3) verwechseln",
    ],
    praxis:
      "Subnetting-Drill im Trainer, danach Wireshark und Packet Tracer praktisch ausprobieren.",
    links: [
      ["RFC 1918 (private Adressen)", "https://www.rfc-editor.org/rfc/rfc1918"],
      ["Wikipedia: OSI-Modell", "https://de.wikipedia.org/wiki/OSI-Modell"],
    ],
    cross: [
      { lf: "lf9", label: "Vertiefung in LF9 (Dienste & Routing)" },
      { lf: "prap1", label: "Prüfungsrelevant für AP1" },
    ],
    viz: "clientnetz",
    apNote: "AP1: Subnetting ist der Dauergast – Schrittweite und Hostformel im Schlaf können.",
  },
  lf4: {
    intro:
      "Was ist schützenswert und wie sehr? Du analysierst Schutzbedarf, denkst in Schutzzielen und leitest passende Maßnahmen ab.",
    deep: "Schutzziele Vertraulichkeit/Integrität/Verfügbarkeit, Schutzbedarfsanalyse nach BSI-Grundschutz (normal/hoch/sehr hoch), Gefährdungen (z. B. G 0.8 Stromausfall), TOM nach DSGVO Art. 32, Datensicherungskonzepte, USV, Passwort- und Zugriffskonzepte.",
    situation:
      "Für deinen eigenen Arbeitsbereich sollst du eine Schutzbedarfsanalyse erstellen: Welche Daten, welche Systeme, welcher Schaden bei Ausfall oder Leak?",
    goals: [
      "Schutzbedarf nachvollziehbar einstufen",
      "TOM begründet auswählen",
      "Backup-Konzepte nach 3-2-1 bewerten",
    ],
    terms: ["TOM", "USV", "RPO / RTO"],
    mistakes: [
      "RAID als Backup verkaufen",
      "Schutzziele nur aufzählen statt auf den Fall anwenden",
    ],
    praxis: "Einen eigenen TOM-Katalog aufstellen und auf ein Kundenszenario übertragen.",
    links: [
      [
        "BSI IT-Grundschutz",
        "https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/it-grundschutz_node.html",
      ],
      ["DSGVO Art. 32", "https://www.gesetze-im-internet.de/englisch_bdsg/"],
    ],
    cross: [
      { lf: "lf11a", label: "Wird in LF11a (Betrieb & Sicherheit) erneut benötigt" },
      { lf: "prap1", label: "Prüfungsrelevant für AP1" },
    ],
    viz: "schutzbedarf",
    apNote:
      "AP1/AP2: Schutzziele + Maßnahmen zuordnen ist Standardaufgabe – immer konkret begründen.",
  },
  lf5: {
    intro:
      "Software und Daten im Griff: Von Programmierlogik über SQL bis zu Dateiformaten – hier wird aus Daten Information.",
    deep: "Programmiergrundlagen (Variablen, Kontrollstrukturen, Funktionen – im Schulkontext C++), Algorithmen (Sortieren, Suchen), SQL-Grundlagen (SELECT, JOIN, Normalisierung), Datenformate (CSV, JSON, XML), Speicherhierarchie und Zeichencodierung.",
    situation:
      "Die Warenwirtschaft braucht eine Auswertung: Du schreibst die SQL-Abfrage und erklärst dem Kunden, warum die Daten vorher normalisiert gehören.",
    goals: [
      "einfachen Code lesen und vervollständigen",
      "SQL-Abfragen formulieren",
      "Datenstrukturen bewerten",
    ],
    terms: ["Logikgatter"],
    mistakes: ["WHERE und HAVING verwechseln", "Schleifenabbruch (off-by-one) übersehen"],
    praxis:
      "Kleine Programmierübungen (Taschenrechner, Sortieralgorithmen, Zahlenraten) selbst umsetzen.",
    links: [
      ["Wikipedia: SQL", "https://de.wikipedia.org/wiki/SQL"],
      [
        "Wikipedia: Normalisierung (Datenbank)",
        "https://de.wikipedia.org/wiki/Normalisierung_(Datenbank)",
      ],
    ],
    cross: [{ lf: "lf8", label: "Vertiefung in LF8 (Daten systemübergreifend)" }],
    viz: "datenfluss",
    apNote: "AP1: Pseudocode/Struktogramme und einfache SQL-Statements tauchen regelmäßig auf.",
  },
  lf6: {
    intro:
      "Serviceanfragen professionell abarbeiten: Ticket annehmen, priorisieren, lösen, dokumentieren – und den Kunden mitnehmen.",
    deep: "IT-Serviceprozesse (Incident, Problem, Change nach ITIL-Grundidee), Ticketsysteme und SLAs, Eskalationsstufen, strukturierte Fehleranalyse, Wissensdatenbanken, Kundenkommunikation in schwierigen Situationen.",
    situation:
      "Montagmorgen, drei Tickets gleichzeitig: Drucker der Chefin, Mailserver einer Abteilung, ein einzelner Passwort-Reset. Du priorisierst nach Auswirkung und Dringlichkeit – nicht nach Lautstärke.",
    goals: [
      "Tickets nach Impact/Urgency priorisieren",
      "Fehler reproduzierbar dokumentieren",
      "SLA-gerecht kommunizieren",
    ],
    terms: ["Patchmanagement"],
    mistakes: [
      "Lösung liefern, aber Ticket nicht dokumentieren",
      "Eskalation als Niederlage statt als Prozessschritt sehen",
    ],
    praxis:
      "Die Fehlersuche-Szenarien der Plattform als Ticket-Simulationen durchspielen (Mission M1).",
    links: [["Wikipedia: ITIL", "https://de.wikipedia.org/wiki/ITIL"]],
    cross: [
      { lf: "lf12a", label: "Serviceprozesse fließen in LF12a-Projekte ein" },
      { lf: "lf9", label: "Technische Ursachen oft in LF9-Themen" },
    ],
    viz: "ticket",
    apNote:
      "Abweichung dokumentiert: LF6 wird hier im 1. Jahr geführt; der Rahmenlehrplan ordnet es dem 2. Jahr zu. Beides wird angezeigt.",
  },
  lf7: {
    intro:
      "Cyber-physische Systeme: Wo IT auf echte Maschinen trifft – Sensoren, Aktoren, IoT und die Absicherung dieser Systeme.",
    deep: "Aufbau CPS (Sensor → Steuerung → Aktor), Embedded Systems und Microcontroller, IoT-Protokolle (MQTT), Schnittstellen zur OT-Welt, Netztrennung/Segmentierung für Produktionsnetze, Sicherheits- und Ausfallrisiken.",
    situation:
      "Die Produktion will Maschinendaten live im Dashboard: Du planst die Anbindung der Steuerungen ans IT-Netz – ohne die Fertigung angreifbar zu machen.",
    goals: [
      "CPS-Komponenten benennen",
      "IT/OT-Trennung begründen",
      "Risiken cyber-physischer Systeme bewerten",
    ],
    terms: ["VLAN", "Firewall"],
    mistakes: [
      "Produktionsnetz einfach ins Büro-LAN hängen",
      "Verfügbarkeitsanforderungen von OT unterschätzen",
    ],
    praxis:
      "Netzsegmentierung für eine Beispiel-Fertigung skizzieren (Planungsaufgabe im Netztrainer als Muster).",
    links: [
      [
        "Wikipedia: Cyber-physisches System",
        "https://de.wikipedia.org/wiki/Cyber-physisches_System",
      ],
      ["Wikipedia: MQTT", "https://de.wikipedia.org/wiki/MQTT"],
    ],
    cross: [
      { lf: "lf9", label: "Grundlage aus LF9 (Netzsegmentierung)" },
      { lf: "lf11a", label: "Absicherung vertieft in LF11a" },
    ],
    viz: "cps",
    apNote: "AP2: CPS-Fragen zielen meist auf Segmentierung, Verfügbarkeit und Schnittstellen.",
  },
  lf8: {
    intro:
      "Daten dahin bringen, wo sie gebraucht werden: Datenbanken, Schnittstellen, Formate und Automatisierung des Datenflusses.",
    deep: "Relationale Datenbanken und SQL-Vertiefung (JOINs, Aggregation), Datenmodellierung/ER-Modelle, Schnittstellen (REST, CSV-Import/Export), Datenqualität und -bereinigung, systemübergreifende Prozesse (z. B. WaWi ↔ Shop ↔ Buchhaltung), Datenschutz beim Datenaustausch.",
    situation:
      "Der Webshop soll Bestände aus der Warenwirtschaft anzeigen: Du planst Schnittstelle, Abgleichintervall und Fehlerbehandlung.",
    goals: [
      "Datenflüsse zwischen Systemen entwerfen",
      "SQL-Auswertungen erstellen",
      "Datenqualität sichern",
    ],
    terms: ["NAT"],
    mistakes: [
      "Stammdaten und Bewegungsdaten mischen",
      "Schnittstellen ohne Fehler- und Duplikatbehandlung planen",
    ],
    praxis:
      "SQL-Klausurmaterial aus Arbeiten und Tests (LF8-SQL-und-Datenbanken.pdf) als Übungsgrundlage nutzen.",
    links: [
      ["Wikipedia: ER-Modell", "https://de.wikipedia.org/wiki/Entity-Relationship-Modell"],
      ["Wikipedia: REST", "https://de.wikipedia.org/wiki/Representational_State_Transfer"],
    ],
    cross: [
      { lf: "lf5", label: "Grundlage aus LF5 (SQL & Datenstrukturen)" },
      { lf: "lf10a", label: "Automatisierung des Datenflusses in LF10a" },
    ],
    viz: "datenfluss2",
    apNote: "AP2: ER-Diagramm lesen, JOIN formulieren, Datenschutz beim Austausch benennen.",
  },
  lf9: {
    intro:
      "Das große Netzwerk-Lernfeld: Routing, VLANs, DHCP, DNS, NAT, Firewall, VPN und WLAN – Netze planen und Dienste bereitstellen.",
    deep: "IPv4/IPv6-Adressierung und VLSM, Routing (statisch, dynamisch), Switching und VLANs mit Trunks, DHCP-Design (Scopes, Relay), DNS-Architektur, NAT/PAT, Firewall-Regelwerke, VPN (Site-to-Site, Remote Access), WLAN-Standards und -Sicherheit.",
    situation:
      "Eine Firma zieht um: Du planst das komplette Netz – Subnetze je Abteilung, VLANs, DHCP, DNS, Internetzugang mit Firewall und Home-Office-VPN.",
    goals: [
      "Netzwerke mit VLSM planen",
      "Dienste (DHCP/DNS) ausfallsicher bereitstellen",
      "Firewall-Regeln nach Default-Deny entwerfen",
    ],
    terms: ["VLAN", "Router", "DHCP", "DNS", "NAT", "VPN", "Firewall"],
    mistakes: ["DHCP-Relay bei VLANs vergessen", "Firewall-Regeln in falscher Richtung denken"],
    praxis:
      "Beide Netzwerkplanungs-Szenarien im Trainer lösen; Subnetting-Zufallsgenerator bis zur Fehlerfreiheit.",
    links: [
      ["RFC 1035 (DNS)", "https://www.rfc-editor.org/rfc/rfc1035"],
      [
        "Wikipedia: Virtual Local Area Network",
        "https://de.wikipedia.org/wiki/Virtual_Local_Area_Network",
      ],
    ],
    cross: [
      { lf: "lf3", label: "Grundlage aus LF3" },
      { lf: "lf10a", label: "Serverdienste vertieft in LF10a" },
      { lf: "lf11a", label: "Absicherung in LF11a" },
    ],
    viz: "netzplan",
    apNote: "AP1 & AP2: Das prüfungsrelevanteste technische Lernfeld überhaupt.",
  },
  lf10a: {
    intro:
      "Serverdienste aufbauen und die Verwaltung automatisieren: AD, Datei-, Web- und Datenbankdienste plus PowerShell, Bash und IaC.",
    deep: "Windows Server mit Active Directory, Gruppenrichtlinien und DNS/DHCP-Serverrollen, Linux-Serverdienste, Virtualisierung und Container, Automatisierung mit PowerShell/Bash, Infrastructure as Code (idempotent, versioniert), Deployment und Patchmanagement.",
    situation:
      "30 neue Azubis starten am 1.8.: Statt 30-mal Klicken schreibst du ein Skript, das Konten, Gruppen und Home-Verzeichnisse automatisch anlegt.",
    goals: [
      "Serverrollen begründet auswählen",
      "Administrationsaufgaben skripten",
      "Deployments reproduzierbar machen",
    ],
    terms: ["Hypervisor", "IaC", "Virtualisierung"],
    mistakes: ["Skripte ohne Fehlerbehandlung produktiv nehmen", "GPO-Vererbung nicht bedenken"],
    praxis:
      "Die beiden Terminal-Übungen der Plattform durchspielen; eigenes Onboarding-Skript als Projektidee.",
    links: [
      ["Microsoft Learn: PowerShell", "https://learn.microsoft.com/de-de/powershell/"],
      ["Wikipedia: Infrastructure as Code", "https://de.wikipedia.org/wiki/Infrastructure_as_Code"],
    ],
    cross: [
      { lf: "lf9", label: "Grundlage aus LF9 (DNS/DHCP)" },
      { lf: "lf11a", label: "Betrieb & Monitoring in LF11a" },
    ],
    viz: "serverdienste",
    apNote: "AP2: Skript lesen/vervollständigen und Automatisierungsnutzen begründen.",
  },
  lf11a: {
    intro:
      "Systeme am Laufen halten und verteidigen: Monitoring, Hochverfügbarkeit, Backup-Konzepte, Härtung und Incident Response.",
    deep: "Monitoring und Logging (Metriken, Alarme, SIEM-Grundidee), Hochverfügbarkeit (Cluster, Redundanz, USV, RTO/RPO), Backup-/Recovery-Konzepte mit Restore-Tests, Systemhärtung, Schwachstellen- und Patchmanagement, Incident-Response-Prozess, Cloud-Sicherheit (Shared Responsibility).",
    situation:
      "Das Monitoring meldet nachts eine degradierte RAID-Gruppe und verdächtige Logins: Du entscheidest über Sofortmaßnahmen, Kommunikation und Nacharbeit.",
    goals: [
      "Monitoring sinnvoll konfigurieren",
      "HA-Konzepte mit RTO/RPO planen",
      "Incidents strukturiert abarbeiten",
    ],
    terms: ["MTBF / MTTR", "RPO / RTO", "Zero Trust", "USV"],
    mistakes: [
      "Backups nie testweise zurückspielen",
      "Alarmschwellen so setzen, dass niemand mehr hinschaut",
    ],
    praxis:
      "Fehlersuche-Szenario ‚Der lahme Fileserver‘ und die HA-Lektion kombinieren; eigenes Backup-Konzept nach 3-2-1 formulieren.",
    links: [
      ["BSI: IT-Grundschutz-Kompendium", "https://www.bsi.bund.de"],
      ["Wikipedia: Hochverfügbarkeit", "https://de.wikipedia.org/wiki/Hochverf%C3%BCgbarkeit"],
    ],
    cross: [
      { lf: "lf4", label: "Grundlage aus LF4 (Schutzbedarf)" },
      { lf: "lf9", label: "Netzabsicherung aus LF9" },
      { lf: "prap2", label: "Prüfungsrelevant für AP2" },
    ],
    viz: "monitoring",
    apNote: "AP2: Verfügbarkeitsrechnung, Backup-Strategie und Incident-Ablauf sind Klassiker.",
  },
  lf12a: {
    intro:
      "Das Königs-Lernfeld: Ein komplettes Kundenprojekt von der Anforderung bis zur Übergabe – exakt das Muster der betrieblichen Projektarbeit.",
    deep: "Anforderungsanalyse (Lasten-/Pflichtenheft), Projektphasen und Meilensteine, Zeit- und Kostenplanung (Gantt, kritischer Pfad, Amortisation), Umsetzung und Qualitätssicherung (Testkonzept, Abnahme), technische Dokumentation, Präsentation und Fachgespräch.",
    situation:
      "Ein Kunde will seinen alternden Fileserver ablösen: Du führst das Projekt – Ist-Analyse, Soll-Konzept, Angebotsvergleich, Umsetzung, Abnahme, Doku.",
    goals: [
      "Projekte realistisch planen",
      "Entscheidungen wirtschaftlich begründen",
      "prüfungsreife Doku und Präsentation erstellen",
    ],
    terms: ["RPO / RTO"],
    mistakes: ["35-Stunden-Projekt zu groß schneiden", "Soll-Ist-Vergleich am Ende vergessen"],
    praxis:
      "AP2-Checklisten der Plattform mit einer eigenen, komplett durchgeplanten Übungs-Projektarbeit kombinieren.",
    links: [
      ["Wikipedia: Projektmanagement", "https://de.wikipedia.org/wiki/Projektmanagement"],
      ["Wikipedia: Netzplantechnik", "https://de.wikipedia.org/wiki/Netzplantechnik"],
    ],
    cross: [
      { lf: "lf1", label: "Grundlage aus LF1 (Wirtschaftlichkeit)" },
      { lf: "prap2", label: "Direkte AP2-Vorbereitung" },
    ],
    viz: "projekt",
    apNote:
      "AP2: Dieses Lernfeld IST die Projektarbeit – Fachgespräch-Fragen entstehen fast alle hier.",
  },
  wiso: {
    intro:
      "Wirtschafts- und Sozialkunde plus Politik: der unterschätzte Prüfungsteil, der in AP1 und AP2 sichere Punkte bringt.",
    deep: "Arbeits- und Tarifrecht, Sozialversicherungen, Verträge und AGB, Betriebsrat und Mitbestimmung, Wirtschaftskreislauf, Unternehmensformen, politisches System.",
    situation:
      "Im Fachgespräch fragt der Prüfungsausschuss nach Kündigungsfristen in der Probezeit – WISO-Wissen rettet die Situation.",
    goals: ["WISO-Standardthemen sicher beantworten"],
    terms: [],
    mistakes: ["WISO auf die letzte Woche verschieben"],
    praxis: "Täglich 5 WISO-Fragen über die Tagesaufgabe.",
    links: [["Gesetze im Internet", "https://www.gesetze-im-internet.de"]],
    cross: [
      { lf: "prap1", label: "WISO-Teil der AP1" },
      { lf: "prap2", label: "WISO-Teil der AP2" },
    ],
    viz: "wiso",
    apNote: "AP1 & AP2: eigener Prüfungsbereich (AP2: 60 Minuten).",
  },
  allgemein: {
    intro:
      "Berufsschul-Basics Deutsch und Englisch: Protokolle, Geschäftskorrespondenz und IT-Englisch für Doku und Kundenkontakt.",
    deep: "Protokollarten und -fehler, Geschäftsbriefe, Cover Letter, technisches Englisch (Hierarchien beschreiben, E-Mail-Knigge).",
    situation:
      "Der Kunde ist ein internationales Team – das Übergabeprotokoll schreibst du zweisprachig.",
    goals: ["Protokolle formal korrekt verfassen", "IT-Sachverhalte auf Englisch erklären"],
    terms: [],
    mistakes: ["Ergebnis- und Verlaufsprotokoll mischen"],
    praxis: "Den E-Mail-Knigge aus der Lektion aktiv im Arbeitsalltag anwenden.",
    links: [],
    cross: [{ lf: "lf12a", label: "Doku-Qualität zahlt in LF12a ein" }],
    viz: "doku",
    apNote: "Indirekt prüfungsrelevant: Dokumentation und Fachgespräch profitieren.",
  },
  zert: {
    intro:
      "Bonus-Bereich: CCNA- und CompTIA-orientierte Inhalte – ideal zur Vertiefung über den Rahmenlehrplan hinaus.",
    deep: "Cisco-Grundlagen (IOS-Befehle, Switching/Routing-Vertiefung), CompTIA-A+/Network+-Niveau.",
    situation: "Nach der Ausbildung ein Zertifikat draufsetzen – hier testest du, wo du stehst.",
    goals: ["Zertifikatsniveau einschätzen"],
    terms: [],
    mistakes: ["Zertifikatslernen vor AP-Vorbereitung priorisieren"],
    praxis: "Als Zusatz-Challenges nach abgeschlossenen Lernfeldern nutzen.",
    links: [["Cisco Networking Academy", "https://www.netacad.com/"]],
    cross: [{ lf: "lf9", label: "Baut auf LF9 auf" }],
    viz: "zert",
    apNote: "Nicht AP-relevant, aber exzellentes Training für LF9-Themen.",
  },
  prap1: {
    intro:
      "Der AP1-Übungspool: Strategie, Rechenaufgaben, offene Aufgaben mit Musterlösung und Aufgabentraining nach den typischen Aufgabenmustern der schriftlichen Prüfung.",
    deep: "90 Minuten, 20 % der Gesamtnote, Themen aus LF1–LF6: Arbeitsplatz, Netzwerk-Grundlagen, Sicherheit, Wirtschaft.",
    situation:
      "Generalprobe: erst dieser Pool, dann die zeitgesteuerte Musterprüfung unter Echtzeit-Bedingungen.",
    goals: ["Aufgabenmuster der AP1 verinnerlichen"],
    terms: [],
    mistakes: ["Nur Multiple Choice üben – die echte AP1 verlangt Rechenwege"],
    praxis:
      "Trainiere unter Echtzeit-Bedingungen: Timer stellen, ohne Hilfsmittel lösen, Lücken danach gezielt nacharbeiten.",
    links: [],
    cross: [
      { lf: "lf3", label: "Kernthemen aus LF3" },
      { lf: "lf2", label: "Kernthemen aus LF2" },
      { lf: "wiso", label: "WISO-Anteil" },
    ],
    viz: "pruefung",
    apNote: "Direkter AP1-Bezug.",
  },
  ae: {
    intro:
      "Bonus aus dem Datenbestand: Anwendungsentwicklungs-Grundlagen – Programmierung/OOP, Datenbanken und Software-Testen. Für FISI eine sinnvolle Vertiefung zu LF5 und LF8.",
    deep: "Objektorientierung (Klassen, Vererbung, Polymorphie), SQL-Vertiefung, Testverfahren (Unit-Tests, Blackbox/Whitebox), Qualitätssicherung im Entwicklungsprozess.",
    situation:
      "Du sollst ein kleines Admin-Tool anpassen: Wer Code lesen, eine Abfrage schreiben und einen Testfall formulieren kann, ist klar im Vorteil.",
    goals: ["Code und OOP-Konzepte lesen", "SQL sicher anwenden", "Testfälle formulieren"],
    terms: [],
    mistakes: ["AE-Stoff vor den FISI-Kernlernfeldern priorisieren"],
    praxis: "Als Vertiefung nach LF5/LF8 nutzen.",
    links: [],
    cross: [
      { lf: "lf5", label: "Grundlage aus LF5" },
      { lf: "lf8", label: "Ergänzt LF8" },
    ],
    viz: "datenfluss",
    apNote:
      "Für die FISI-AP nicht direkt prüfungsrelevant – aber gutes Transferwissen für Skript- und SQL-Aufgaben.",
  },
  aeap: {
    intro:
      "Prüfungstraining des FIAE-Zweigs (AP Teil 2 Anwendungsentwicklung) – als Bonus enthalten, falls du über den Tellerrand üben willst.",
    deep: "Algorithmen (Pseudocode/Struktogramm), Planung eines Softwareprodukts, Umsetzungsszenarien mit Musterlösungen.",
    situation:
      "Pseudocode-Aufgaben tauchen abgeschwächt auch in FISI-Prüfungen auf – hier trainierst du sie am Original-Niveau.",
    goals: ["Pseudocode-Aufgaben strukturiert lösen"],
    terms: [],
    mistakes: ["FISI-AP2-Pool vernachlässigen – der hat Vorrang"],
    praxis: "Nach dem FISI-AP2-Pool als Zusatzrunde.",
    links: [],
    cross: [
      { lf: "prap2", label: "FISI-AP2-Pool (Vorrang)" },
      { lf: "lf5", label: "Grundlagen in LF5" },
    ],
    viz: "pruefung",
    apNote: "FIAE-spezifisch; für FISI optionales Bonustraining.",
  },
  prap2: {
    intro: "Der AP2-Übungspool: WiSo, Szenarien und Szenariotraining für die schriftliche AP2.",
    deep: "Konzeptionsaufgaben (Netzdesign, Sicherheit, Backup), WiSo-Teil, Szenarioaufgaben mit Musterlösungen.",
    situation:
      "Nach jedem abgeschlossenen LF des 3. Jahres eine Runde hier – so bleibt AP2-Stoff präsent.",
    goals: ["Szenarioaufgaben strukturiert lösen"],
    terms: [],
    mistakes: ["Musterlösung lesen statt erst selbst lösen"],
    praxis: "Kombiniere mit der zeitgesteuerten AP2-Simulation der Plattform.",
    links: [],
    cross: [
      { lf: "lf9", label: "Kernthemen aus LF9" },
      { lf: "lf11a", label: "Kernthemen aus LF11a" },
      { lf: "lf12a", label: "Projektteil" },
    ],
    viz: "pruefung",
    apNote: "Direkter AP2-Bezug.",
  },
};
