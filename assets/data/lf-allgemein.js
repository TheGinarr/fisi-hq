window.LF_CONTENT = window.LF_CONTENT || {};
window.LF_CONTENT["allgemein"] = {
  topics: [
    {
      id: "de-prot",
      title: "Protokolle & Dokumentation",
      lessons: [
        {
          id: "de-prot-1",
          title: "Protokolle schreiben",
          content: [
            { type: "heading", value: "4 Funktionen eines Protokolls" },
            {
              type: "text",
              value:
                "1. Dokumentation: Festhalten, was besprochen und beschlossen wurde. 2. Information: Abwesende können sich informieren. 3. Verbindlichkeit: Beschlüsse werden rechtlich nachvollziehbar. 4. Kontrolle: Umsetzung der Beschlüsse kann überprüft werden.",
            },
            { type: "heading", value: "Protokollarten" },
            {
              type: "text",
              value:
                "Verlaufsprotokoll: Chronologischer Gesprächsverlauf, wer was gesagt hat (indirekte Rede!). Für komplexe Diskussionen mit verschiedenen Positionen. Ergebnisprotokoll: Nur Beschlüsse und Ergebnisse, kein Diskussionsverlauf. Standard in Unternehmen und Prüfung. Kürzer und handlungsorientiert.",
            },
            { type: "heading", value: "Aufbau eines Protokolls" },
            {
              type: "text",
              value:
                "Protokollkopf: Art der Veranstaltung, Datum/Uhrzeit, Ort/Raum, Teilnehmer (anwesend + entschuldigt + unentschuldigt), Protokollführer, Sitzungsleiter, Thema/Anlass. Tagesordnung: Nummerierte Tagesordnungspunkte (TOP 1, TOP 2...). Hauptteil: Sachlich, Präsens, indirekte Rede bei Verlaufsprotokoll ('Herr Müller weist darauf hin, dass...'). Ergebnisse/Beschlüsse klar formulieren. Schluss: Zusammenfassung der Beschlüsse, Termin nächste Sitzung, Ort und Zeit des Protokollendes, Unterschriften (Protokollführer + Sitzungsleiter).",
            },
            { type: "heading", value: "Sprachliche Regeln" },
            {
              type: "text",
              value:
                "Zeitform: IMMER Präsens. Sachlich und neutral (keine Wertungen). Indirekte Rede mit Konjunktiv I bei Verlaufsprotokoll. Keine Umgangssprache. Abkürzungen nur, wenn eingeführt. Passive Formulierungen bevorzugen ('Es wird beschlossen...' statt 'Wir haben beschlossen...').",
            },
            { type: "heading", value: "Übungsaufgabe: Protokollfehler finden (nach Schulaufgabe)" },
            {
              type: "text",
              value:
                "Ein Azubi protokolliert die Teambesprechung so: 'Protokoll, 12.3. — Ein paar Leute waren da, Frau S. fehlt mal wieder. TOP Messe: Manche meinten, abends sei das totale Chaos am Stand gewesen. Ich fand das auch. Wir machen das nächstes Mal besser. Irgendwer kümmert sich um den Einsatzplan.' Finde mindestens fünf formale bzw. inhaltliche Mängel und formuliere einen korrekten Protokollkopf für diese Besprechung (Annahmen erlaubt).",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nMängel: (1) Unvollständiger Kopf – Art der Veranstaltung, vollständiges Datum mit Jahr, Ort, vollständige Teilnehmerliste, Leitung und Protokollführung fehlen. (2) Wertende, unsachliche Sprache ('mal wieder', 'totales Chaos'). (3) Ich-Form und eigene Meinung des Protokollführers ('Ich fand das auch'). (4) Aussagen nicht in indirekter Rede, umgangssprachlich. (5) Beschluss ohne Verantwortlichen und Termin ('Irgendwer kümmert sich') – nicht nachhaltbar. (6) Keine Tagesordnungspunkte/Nummerierung, kein Abstimmungsergebnis.\nKorrekter Kopf (Beispiel):\nErgebnisprotokoll der Teambesprechung Messeorganisation\nDatum: 12.03.2026, 10:00–11:00 Uhr, Ort: Besprechungsraum 2\nTeilnehmende: K. Breuer, P. Dirks, B. Kemper, M. Reimann, K. Werner; entschuldigt: Frau Schröder\nSitzungsleitung: P. Dirks – Protokoll: B. Kemper\nTOP 1 Rückblick Messe | TOP 2 Einsatzplan | TOP 3 Standordnung",
            },
          ],
          quiz: [
            {
              id: "imp_de-prot-1_0",
              q: "Zeitform im Protokoll?",
              options: ["Perfekt", "Futur", "Präsens", "Präteritum"],
              correct: 2,
              explain: "Immer Präsens.",
            },
            {
              id: "imp_de-prot-1_1",
              q: "Ergebnisprotokoll enthält?",
              options: [
                "Alles chronologisch",
                "Wer was gesagt hat",
                "Nur Beschlüsse und Ergebnisse",
                "Private Meinungen",
              ],
              correct: 2,
              explain: "Nur Beschlüsse/Ergebnisse, kein Diskussionsverlauf.",
            },
            {
              id: "imp_de-prot-1_2",
              q: "Wer unterschreibt das Protokoll?",
              options: [
                "Protokollführer + Sitzungsleiter",
                "Niemand",
                "Nur der Chef",
                "Alle Teilnehmer",
              ],
              correct: 0,
              explain: "Protokollführer und Sitzungsleiter unterschreiben.",
            },
            {
              id: "imp_de-prot-1_3",
              q: "Indirekte Rede im Protokoll nutzt?",
              options: ["Indikativ", "Imperativ", "Konjunktiv II", "Konjunktiv I"],
              correct: 3,
              explain: "Konjunktiv I: 'Herr Müller betone, dass...'",
            },
            {
              id: "imp_de-prot-1_4",
              q: "Wie viele Funktionen hat ein Protokoll?",
              options: ["5", "2", "3", "4"],
              correct: 3,
              explain: "Dokumentation, Information, Verbindlichkeit, Kontrolle.",
            },
            {
              id: "imp_de-prot-1_5",
              q: "Verlaufsprotokoll vs. Ergebnis?",
              options: [
                "Beide Protokollarten sind inhaltlich gleich und nur anders benannt",
                "Das Verlaufsprotokoll ist kürzer, weil es nur Stichpunkte enthält",
                "Verlauf = chronologisch wer was sagt, Ergebnis = nur Beschlüsse",
                "Das Ergebnisprotokoll ist ausführlicher, da es jede Wortmeldung erfasst",
              ],
              correct: 2,
              explain: "Verlauf: Diskussionsverlauf. Ergebnis: Nur Beschlüsse.",
            },
            {
              id: "imp_de-prot-1_6",
              q: "TOP?",
              options: ["Optional", "Nur mündlich", "Nummerierte Tagesordnungspunkte", "Am Ende"],
              correct: 2,
              explain: "Struktur.",
            },
            {
              id: "imp_de-prot-1_7",
              q: "Indirekte Rede?",
              options: ["Er sage/betone, dass...", "Er sagt", "Er hat gesagt", "Direkt"],
              correct: 0,
              explain: "Konjunktiv I.",
            },
            {
              id: "imp_de-prot-1_8",
              q: "Persönliche Meinung?",
              options: ["Nur positiv", "Ja", "Manchmal", "Nein, sachlich neutral"],
              correct: 3,
              explain: "Objektiv.",
            },
            {
              id: "imp_de-prot-1_9",
              q: "Entschuldigte TN?",
              options: ["Im Kopf dokumentieren", "Egal", "Ignorieren", "Nur mündlich"],
              correct: 0,
              explain: "Status aufführen.",
            },
            {
              id: "imp_de-prot-1_10",
              q: "Worin unterscheidet sich das Ergebnis- vom Verlaufsprotokoll?",
              options: [
                "Ergebnisprotokolle werden nur mündlich weitergegeben und nicht schriftlich festgehalten",
                "Das Ergebnisprotokoll hält nur Beschlüsse und Ergebnisse fest, das Verlaufsprotokoll auch den Diskussionsverlauf",
                "Es gibt keinen Unterschied, beide Bezeichnungen stehen für dasselbe Dokument",
                "Das Verlaufsprotokoll ist deutlich kürzer, weil es nur die Endergebnisse stichpunktartig auflistet",
              ],
              correct: 1,
              explain:
                "Im Betrieb ist das Ergebnisprotokoll Standard – wer was bis wann erledigt, ist wichtiger als jede Wortmeldung.",
            },
            {
              id: "imp_de-prot-1_11",
              q: "Welche Angaben gehören zwingend in den Protokollkopf?",
              options: [
                "Wetterlage, Raumtemperatur und die allgemeine Stimmung der Teilnehmenden zu Beginn der Sitzung",
                "Art der Veranstaltung, Datum, Ort, Teilnehmende (inkl. Abwesende), Sitzungsleitung, Protokollführung, Tagesordnungspunkte",
                "Die privaten Handynummern und Wohnadressen aller Teilnehmenden für spätere Rückfragen",
                "Nur das Datum der Sitzung; alle weiteren Angaben stehen im Fließtext des Protokolls",
              ],
              correct: 1,
              explain:
                "Ein unvollständiger Kopf ist der häufigste Formfehler – genau das wurde in der Schulaufgabe geprüft.",
            },
            {
              id: "imp_de-prot-1_12",
              q: "In welcher Zeitform und welchem Stil wird protokolliert?",
              options: [
                "Vergangenheitsform, angereichert mit der persönlichen Meinung",
                "Präsens, sachlich-neutral, ohne Ich-Form und ohne Wertungen",
                "Lockere Umgangssprache mit wörtlichen Zitaten aller Beteiligten",
                "Zukunftsform, da Beschlüsse erst noch umgesetzt werden",
              ],
              correct: 1,
              explain:
                "'Herr Meier berichtet …' statt 'Ich fand, Herr Meier hat gut berichtet' – Neutralität ist Pflicht.",
            },
            {
              id: "imp_de-prot-1_13",
              q: "Wie gibt man Aussagen von Teilnehmern korrekt wieder?",
              options: [
                "Gar nicht – ein Protokoll hält nur Beschlüsse fest, nie Aussagen einzelner Teilnehmer",
                "Wortwörtlich mitstenografiert inklusive aller Füllwörter und Versprecher",
                "In indirekter Rede (Konjunktiv), nicht als wörtliche Zitate in Umgangssprache",
                "Sinngemäß verkürzt mit Symbolen und Emojis, um das Protokoll aufzulockern",
              ],
              correct: 2,
              explain:
                "'Frau K. erklärt, die Lieferung verzögere sich' statt 'Frau K.: Das wird eh nix.'",
            },
            {
              id: "imp_de-prot-1_14",
              q: "Was muss bei Beschlüssen im Protokoll stehen?",
              options: [
                "Lediglich der Vermerk 'wurde beschlossen', Details würden das Protokoll unnötig aufblähen",
                "Die persönliche Einschätzung des Protokollführers zur Sinnhaftigkeit des Beschlusses",
                "Nichts Besonderes – Beschlüsse werden wie normale Wortbeiträge formlos zusammengefasst",
                "Der genaue Beschlusswortlaut, das Abstimmungsergebnis sowie Verantwortliche und Termine",
              ],
              correct: 3,
              explain:
                "Aus Beschlüssen müssen Aufgaben ableitbar sein: Wer macht was bis wann? Sonst ist das Protokoll wertlos.",
            },
            {
              id: "imp_de-prot-1_15",
              q: "Wann sollte ein Protokoll angefertigt und verteilt werden?",
              options: [
                "Zeitnah nach der Sitzung",
                "Nur auf Anfrage",
                "Erst zur nächsten Sitzung",
                "Nach einem Monat",
              ],
              correct: 0,
              explain:
                "Solange die Erinnerung frisch ist, mit Verteiler an alle Beteiligten. Üblich: Versand binnen weniger Tage; Einwände werden bis zur Genehmigung in der Folgesitzung behandelt.",
            },
            {
              id: "imp_de-prot-1_16",
              q: "Wozu dient die Genehmigung des Protokolls in der Folgesitzung?",
              options: [
                "Sie ist reine Höflichkeit",
                "Die Teilnehmenden bestätigen die Richtigkeit",
                "Sie macht das Protokoll geheim",
                "Sie ersetzt die Sitzung",
              ],
              correct: 1,
              explain:
                "Danach ist es verbindliche Arbeitsgrundlage. Korrekturen werden vor der Genehmigung eingearbeitet – wichtig bei späteren Streitfragen ('Was war vereinbart?').",
            },
            {
              id: "imp_de-prot-1_17",
              q: "Was sind TOPs?",
              options: [
                "Teilnehmer ohne Pflichten",
                "Tagesordnungspunkte",
                "Technische Operationspläne",
                "Die besten Mitarbeiter",
              ],
              correct: 1,
              explain:
                "Die nummerierte Gliederung der Sitzung und des Protokolls. Das Protokoll folgt der Tagesordnung Punkt für Punkt – das macht es auffindbar und vergleichbar.",
            },
            {
              id: "imp_de-prot-1_18",
              q: "Welche Formulierung gehört NICHT in ein Protokoll?",
              options: [
                "'Ich fand die Diskussion mal wieder chaotisch.'",
                "'Herr Dirks berichtet über die Messevorbereitung.'",
                "'Der Vorschlag wird mit 4:1 Stimmen angenommen.'",
                "'Die Einsatzplanung übernimmt Frau Breuer bis 30.09.'",
              ],
              correct: 0,
              explain:
                "Ich-Form plus Wertung – gleich zwei Verstöße gegen den neutralen Protokollstil.",
            },
            {
              id: "imp_de-prot-1_19",
              q: "Wer unterschreibt ein betriebliches Sitzungsprotokoll üblicherweise?",
              options: [
                "Protokollführung und Sitzungsleitung",
                "Nur die Geschäftsführung",
                "Niemand",
                "Alle Anwesenden einzeln",
              ],
              correct: 0,
              explain:
                "Die Unterschriften dokumentieren Erstellung und Freigabe – bei formellen Gremien (z. B. BR) ist das vorgeschrieben.",
            },
          ],
        },
        {
          id: "de-prot-2",
          title: "Technische Dokumentation",
          content: [
            { type: "heading", value: "Arten technischer Dokumentation" },
            {
              type: "text",
              value:
                "Installationsanleitung: Schritt-für-Schritt-Anleitung zur Einrichtung eines Systems. Zielgruppe: Techniker/Admin. Betriebshandbuch: Tägliche Aufgaben, Wartungsintervalle, Notfallprozeduren, Ansprechpartner. Zielgruppe: Admins im laufenden Betrieb. Netzwerkdokumentation: Topologieplan, IP-Adressplan (Subnetze, VLANs, DHCP-Bereiche), Geräteliste (Modell, Standort, Seriennummer), Konfigurationen, Zugangsdaten (verschlüsselt!), Wartungsverträge, Ansprechpartner. Störungsdokumentation: Ticketsystem mit Fehlerbeschreibung, Analyse, Lösung, Zeitaufwand. Übergabeprotokoll: Komponenten, Seriennummern, Konfiguration, Funktionstest, Unterschriften beider Seiten.",
            },
            { type: "heading", value: "Aufbau einer Installationsanleitung" },
            {
              type: "text",
              value:
                "1. Titel und Versionsnummer. 2. Ziel: Was wird installiert/konfiguriert? 3. Voraussetzungen: Hardware, Software, Zugangsdaten, Netzwerkinfos. 4. Schritte: Nummeriert, mit Screenshots/Befehlen, eine Aktion pro Schritt. 5. Verifizierung: Wie prüft man, ob es funktioniert? 6. Troubleshooting: Häufige Fehler und Lösungen. 7. Kontakt: Ansprechpartner bei Problemen.",
            },
            { type: "heading", value: "Versionierung und Pflege" },
            {
              type: "text",
              value:
                "Jedes Dokument braucht: Versionsnummer (z.B. v2.3), Datum der letzten Änderung, Autor, Änderungshistorie (was wurde geändert und warum). Dokumentation muss bei JEDER Infrastrukturänderung aktualisiert werden. Veraltete Dokumentation ist schlimmer als keine – sie führt zu falschen Entscheidungen.",
            },
            { type: "heading", value: "Zielgruppengerechtes Schreiben" },
            {
              type: "text",
              value:
                "Admins: Technische Details, Befehle, Konfigurationsdateien, Netzwerkdiagramme. Endbenutzer: Einfache Sprache, Screenshots, Schritt-für-Schritt, kein Fachjargon. Management: Zusammenfassung, Kosten-Nutzen, Risiken, Entscheidungsgrundlage. Grundregel: So technisch wie nötig, so verständlich wie möglich.",
            },
            {
              type: "note",
              value:
                "Technische Dokumentation ist ein Kernbestandteil der AP2-Projektarbeit UND des FiSi-Berufsalltags. Gute Doku spart allen Beteiligten Zeit und Nerven.",
            },
            { type: "heading", value: "Technische Doku, die jemand anders nutzen kann" },
            {
              type: "text",
              value:
                "Der Maßstab guter technischer Dokumentation ist brutal einfach: Kann eine fachkundige Person, die das System NICHT kennt, damit arbeiten? Dafür trennst du Doku-Typen sauber: ANLEITUNG (Schritt für Schritt, Imperativ, ein Schritt pro Zeile, Ergebniskontrolle je Schritt), REFERENZ (Nachschlagen: Parameter, IP-Listen, Zuständigkeiten – tabellarisch), KONZEPT (Warum ist es so gebaut? Entscheidungen mit Begründung) und BETRIEBSHANDBUCH (Start/Stopp, Backup/Restore, Störungsroutinen, Ansprechpartner). Eiserne Regeln: Stand/Datum und Autor auf jedes Dokument, Versionierung statt „final_v2_NEU“, Screenshots sparsam (veralten schnell) und geheime Daten NIE in die Doku (Passwörter gehören in den Passwortmanager, die Doku verweist nur dorthin).",
            },
            { type: "heading", value: "Übungsaufgabe: Doku-Review" },
            {
              type: "text",
              value:
                "Du findest im Wiki: „Server neu starten wenn Probleme. Zugang wie immer. PW: Sommer2024! Bei Fragen Meier fragen.“ Nenne vier konkrete Mängel und schreibe die Passage neu.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: Mängel: (1) Klartext-Passwort in der Doku – Sicherheitsverstoß. (2) „wenn Probleme“ – kein definierter Auslöser. (3) „wie immer“/„Meier“ – implizites Wissen, ohne Kontakt-/Vertretungsangabe. (4) Kein Stand/Autor, keine Schritte. Neufassung (Beispiel): „Neustart Applikationsserver APP01 – Auslöser: Dienst ‚AuftragsSvc‘ reagiert nicht (Monitoring-Alarm A-113). Schritte: 1. Per RDP auf APP01 (Zugangsdaten: Passwortmanager → Ordner Server). 2. Dienste-Konsole → ‚AuftragsSvc‘ → Neu starten. 3. Prüfen: http://app01/status meldet OK. Eskalation: IT-Leitung (Vertretung: Ticketsystem, Queue Infrastruktur). Stand: 22.07.2026, Autor: L. M.“",
            },
          ],
          quiz: [
            {
              id: "imp_de-prot-2_0",
              q: "Was gehört in eine Netzwerkdokumentation?",
              options: [
                "Nur physischer Plan",
                "Nur IP-Adressen",
                "Nur Zugangsdaten",
                "IP-Plan, VLANs, Firewall-Regeln, Netzpläne",
              ],
              correct: 3,
              explain: "Vollständige Doku: physisch + logisch + IPs + VLANs + Firewall + Kontakte.",
            },
            {
              id: "imp_de-prot-2_1",
              q: "Netzwerkdokumentation enthält?",
              options: [
                "Topologie, IP-Plan, VLANs, Passwörter",
                "Nur Herstellernamen",
                "Nur Rechnungen",
                "Nur IP-Adressen",
              ],
              correct: 0,
              explain: "Topologie, IP-Plan, VLAN-Zuordnung, Zugangsdaten, Konfigurationen.",
            },
            {
              id: "imp_de-prot-2_2",
              q: "Betriebshandbuch ist für?",
              options: ["Administratoren", "Kunden", "Geschäftsführung", "Marketing"],
              correct: 0,
              explain:
                "Tägliche Aufgaben, Notfallprozeduren. Anleitung für Admins: Routineaufgaben, Notfälle, Kontakte.",
            },
            {
              id: "imp_de-prot-2_3",
              q: "Übergabeprotokoll enthält?",
              options: [
                "Nur die installierte Software mit Versionsnummern; Hardware wird nicht erfasst",
                "Komponenten, Seriennummern, Konfiguration, Funktionstest, Unterschriften",
                "Nur den Gesamtpreis und die Zahlungsbedingungen der gelieferten Leistung",
                "Nur das Übergabedatum mit Uhrzeit; weitere Angaben sind entbehrlich",
              ],
              correct: 1,
              explain: "Vollständige Dokumentation aller übergebenen Komponenten.",
            },
            {
              id: "imp_de-prot-2_4",
              q: "Technische Doku: Zielgruppe beachten?",
              options: [
                "Ja: Admins vs. Endbenutzer vs. Management",
                "Nein, immer gleich",
                "Nur für IT",
                "Nur auf Englisch",
              ],
              correct: 0,
              explain: "Detailtiefe und Sprache an die Zielgruppe anpassen.",
            },
            {
              id: "imp_de-prot-2_5",
              q: "Netzwerkdoku: Was muss rein?",
              options: [
                "Werbematerial und Produktbroschüren der Hersteller",
                "Ausschließlich die Liste der vergebenen IP-Adressen",
                "Topologie, IP-Plan, VLANs, Passwörter, Configs",
                "Nur die Herstellernamen der verbauten Geräte",
              ],
              correct: 2,
              explain: "Vollständige Netzwerkdokumentation für Admins.",
            },
            {
              id: "imp_de-prot-2_6",
              q: "Doku versionieren?",
              options: ["Nur SW", "Version + Datum + Änderungshistorie", "Unnötig", "Nur Datum"],
              correct: 1,
              explain: "Nachvollziehbar.",
            },
            {
              id: "imp_de-prot-2_7",
              q: "Wissenstransfer?",
              options: ["Nach Kündigung", "Nur mündlich", "Doku aktuell + Übergabe planen", "Egal"],
              correct: 2,
              explain: "Wissensverlust vermeiden.",
            },
            {
              id: "imp_de-prot-2_8",
              q: "Netzwerkplan aktuell?",
              options: ["Bei JEDER Änderung", "Optional", "Jährlich", "Einmal reicht"],
              correct: 0,
              explain: "Sofort updaten.",
            },
            {
              id: "imp_de-prot-2_9",
              q: "Passwörter in Doku?",
              options: ["Post-It", "Klartext", "Gar nicht", "Verschlüsselt, Zugriff beschränkt"],
              correct: 3,
              explain: "Sicher verwahren.",
            },
            {
              id: "imp_de-prot-2_10",
              q: "Was steht am Anfang jeder guten technischen Dokumentation?",
              options: [
                "Die Danksagung an Ausbilder und Kollegen, die zum Gelingen des Projekts beigetragen haben",
                "Der vollständige Quellcode, damit Leser die Umsetzung von Beginn an nachvollziehen können",
                "Das Firmenlogo in Großformat auf der Titelseite, da der Corporate-Design-Leitfaden dies vorschreibt",
                "Die Zielgruppenanalyse: Vorwissen und Bedarf der Leser bestimmen Tiefe und Sprache",
              ],
              correct: 3,
              explain:
                "Admin-Handbuch ≠ Anwenderanleitung – dieselbe Lösung braucht zwei verschiedene Dokumente.",
            },
            {
              id: "imp_de-prot-2_11",
              q: "Wie formuliert man Handlungsanweisungen am verständlichsten?",
              options: [
                "Lange Schachtelsätze, die alle denkbaren Eventualitäten in einem einzigen Satz vollständig abdecken",
                "Als zusammenhängender Fließtext ohne Nummerierung, Absätze oder sonstige Struktur",
                "Im Passiv mit Konjunktiv: 'Es sollte anschließend auf Netzwerk geklickt worden sein'",
                "Imperativ, ein Schritt pro Satz: 'Öffnen Sie die Einstellungen. Klicken Sie auf Netzwerk.'",
              ],
              correct: 3,
              explain:
                "Nummerierte Schritte mit je genau einer Aktion sind nachvollziehbar und beim Abarbeiten abhakbar.",
            },
            {
              id: "imp_de-prot-2_12",
              q: "Welche Regel gilt für Screenshots?",
              options: [
                "Sparsam, aktuell, beschriftet und mit Markierung des relevanten Bereichs einsetzen",
                "Screenshots sind in technischen Dokumentationen grundsätzlich nicht zulässig",
                "Je mehr, desto besser – auch veraltete Screenshots erhöhen den Umfang sinnvoll",
                "Nur unbearbeitet in Originalgröße über ganze Seiten hinweg einbinden",
              ],
              correct: 0,
              explain:
                "Veraltete Screenshots verwirren mehr, als sie helfen – jeder UI-Wechsel macht Pflegeaufwand.",
            },
            {
              id: "imp_de-prot-2_13",
              q: "Wozu dient eine Versionshistorie in der Dokumentation?",
              options: [
                "Nachvollziehbarkeit: Wer hat wann was geändert",
                "Reine Dekoration für das Deckblatt",
                "Sie verlängert das Dokument auf die Solllänge",
                "Sie ersetzt das Inhaltsverzeichnis",
              ],
              correct: 0,
              explain:
                "Alle arbeiten mit dem aktuellen Stand. Tabelle am Dokumentanfang: Version, Datum, Autor, Änderung – Standard in jeder Betriebsdoku.",
            },
            {
              id: "imp_de-prot-2_14",
              q: "Wie geht man mit Abkürzungen um?",
              options: [
                "Bei erster Verwendung ausschreiben und erklären, ergänzend ein Abkürzungsverzeichnis führen",
                "Abkürzungen grundsätzlich nicht erklären, da Fachleser alle gängigen Kürzel kennen",
                "Nur englischsprachige Abkürzungen erläutern, deutsche gelten als selbsterklärend",
                "Abkürzungen sind in technischen Dokumentationen generell nicht zulässig",
              ],
              correct: 0,
              explain:
                "'Die Firewall (FW) …' – danach darf FW verwendet werden. Das gilt auch für die AP2-Doku.",
            },
            {
              id: "imp_de-prot-2_15",
              q: "Was kennzeichnet Warn- und Sicherheitshinweise in Anleitungen?",
              options: [
                "Einheitliche, hervorgehobene Struktur (z. B. ACHTUNG: Folge + Vermeidung) VOR dem riskanten Schritt",
                "Sie stehen kursiv gesetzt an beliebiger Stelle im Fließtext, damit der Lesefluss nicht gestört wird",
                "Sie werden in Fußnoten am Seitenende untergebracht, um das Layout der Anleitung nicht zu unterbrechen",
                "Sie folgen unmittelbar NACH dem riskanten Schritt, damit der Nutzer den Zusammenhang direkt erkennt",
              ],
              correct: 0,
              explain:
                "Der Hinweis muss gelesen werden, BEVOR der Fehler passieren kann – Position ist entscheidend.",
            },
            {
              id: "imp_de-prot-2_16",
              q: "Was bedeutet 'Single Source of Truth' für Dokumentation?",
              options: [
                "Einmal freigegebene Dokumente werden grundsätzlich nie wieder geändert",
                "Nur die Führungskraft besitzt Schreibrechte auf die gesamte Dokumentation",
                "Jede Abteilung pflegt eine eigene Kopie der Dokumente für den schnellen Zugriff",
                "Jede Information wird an genau einer Stelle gepflegt und von dort referenziert",
              ],
              correct: 3,
              explain:
                "Kopien veralten unbemerkt – Verweise statt Duplikate halten die Doku konsistent (z. B. zentrale IP-Liste).",
            },
            {
              id: "imp_de-prot-2_17",
              q: "Welche Gliederung ist für eine Installationsanleitung sinnvoll?",
              options: [
                "Eine alphabetische Sortierung aller Arbeitsschritte nach ihren Stichworten",
                "Zweck → Voraussetzungen → Schritt-für-Schritt-Installation → Prüfung/Test → Fehlerbehebung",
                "Zuerst die Fehlerbehebung, danach der Zweck, damit Probleme sofort lösbar sind",
                "Eine freie Reihenfolge nach Ermessen des Autors ohne feste Struktur",
              ],
              correct: 1,
              explain:
                "Der Abschnitt 'Voraussetzungen' (Rechte, Versionen, Lizenzen) verhindert die häufigsten Supportfälle.",
            },
            {
              id: "imp_de-prot-2_18",
              q: "Aktiv oder Passiv in technischen Texten?",
              options: [
                "Ausschließlich Passiv",
                "Nur Nominalstil",
                "Überwiegend aktiv und konkret",
                "Möglichst unpersönliche Schachtelsätze",
              ],
              correct: 2,
              explain:
                "Passiv nur, wenn der Handelnde unwichtig ist. 'Der Dienst startet automatisch' ist klarer als 'Es wird ein automatischer Start durchgeführt'.",
            },
            {
              id: "imp_de-prot-2_19",
              q: "Wie prüft man die Verständlichkeit einer Anleitung am wirksamsten?",
              options: [
                "Die automatische Rechtschreibprüfung genügt als Nachweis",
                "Eine Person der Zielgruppe arbeitet sie ohne Hilfe durch",
                "Eine Prüfung ist nicht nötig, Anleitungen erklären sich selbst",
                "Der Autor liest die Anleitung dreimal selbst Korrektur",
              ],
              correct: 1,
              explain:
                "Stolperstellen werden protokolliert. Der Autor ist betriebsblind; der Praxistest deckt fehlende Schritte und unklare Begriffe auf.",
            },
          ],
        },
        {
          id: "de-gb-1",
          title: "Geschäftsbriefe & Reklamation",
          content: [
            { type: "heading", value: "Aufbau eines Geschäftsbriefs (DIN 5008)" },
            {
              type: "text",
              value:
                "Absender (Firma, Adresse, Kontaktdaten), Empfänger, Datum, Betreff (fett, ohne 'Betreff:'), Anrede ('Sehr geehrte Frau...'), Textblock (Einleitung, Hauptteil, Schluss), Grußformel ('Mit freundlichen Grüßen'), Unterschrift, Anlagen. Schriftart: Serifenlos (Arial, Calibri), 11 pt (üblich/empfohlen – DIN 5008 schreibt keine Schriftart vor, Schriftgröße nicht unter 10 pt). Seitenränder: Links 2,5 cm, rechts mind. 1 cm.",
            },
            { type: "heading", value: "Mängelrüge / Reklamation" },
            {
              type: "text",
              value:
                "Aufbau: 1. Bezug herstellen (Bestellnummer, Datum, Lieferschein). 2. Mangel sachlich beschreiben (Was ist defekt? Was wurde geliefert vs. bestellt?). 3. Rechtsgrundlage nennen (§437 BGB Mängelrechte: Nacherfüllung, Rücktritt, Minderung, Schadensersatz). 4. Forderung formulieren (Nachlieferung bis Datum X, Reparatur, Preisnachlass). 5. Frist setzen (angemessen, z.B. 14 Tage). Ton: Sachlich und bestimmt, nicht emotional. Belege beifügen (Fotos, Lieferschein).",
            },
            { type: "heading", value: "Weitere Geschäftsbriefe im IT-Kontext" },
            {
              type: "text",
              value:
                "Angebot: Leistungsbeschreibung, Preis (netto + USt), Gültigkeit, Zahlungsbedingungen, Lieferzeit. Auftragsbestätigung: Bestätigung des Auftrags mit Details. Mahnung: Zahlungserinnerung mit Frist und Verzugszinsen-Hinweis. Abnahmeprotokoll: Bestätigung der Leistungserfüllung. Alle Geschäftsbriefe müssen Pflichtangaben enthalten: Firmenname, Rechtsform, Sitz, je nach Rechtsform: bei einer GmbH z. B. Registergericht, HRB-Nummer und alle Geschäftsführer (§ 35a GmbHG); bei e. K./OHG/KG die HRA-Nummer.",
            },
            {
              type: "note",
              value:
                "In der Prüfung wird oft eine Situation beschrieben und du musst den passenden Geschäftsbrief verfassen. Achte auf DIN 5008, sachlichen Ton und vollständige Pflichtangaben.",
            },
            { type: "heading", value: "Übungsaufgabe: Reklamation" },
            {
              type: "text",
              value:
                "Festplatte defekt (Bestellnr. 4711, geliefert 02.06.). Formuliere die Kernsätze einer sachlichen Mängelrüge mit Frist.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (Kernsätze):\n1. Bezug: Mit Bestellung Nr. 4711 erhielten wir am\n   02.06. eine Festplatte Modell XY.\n2. Mangel: Bei Inbetriebnahme stellten wir fest,\n   dass das Gerät defekt ist / nicht erkannt wird.\n3. Forderung + Frist: Wir bitten um kostenfreie\n   Ersatzlieferung bis zum 20.06.\n4. Folge: Nach fruchtlosem Fristablauf behalten wir\n   uns die gesetzlichen Mängelrechte vor.\n\nTon: sachlich, bestimmt. Grundlage §437 BGB.",
            },
          ],
          quiz: [
            {
              id: "imp_de-gb-1_0",
              q: "DIN 5008?",
              options: [
                "Norm für Geschäftsbriefe und Textverarbeitung",
                "Sicherheitsstandard für Rechenzentren",
                "Netzwerkstandard für Ethernet-Verkabelung",
                "Prüfungsordnung der IHK-Abschlussprüfung",
              ],
              correct: 0,
              explain: "DIN 5008 regelt Geschäftsbrief-Layout.",
            },
            {
              id: "imp_de-gb-1_1",
              q: "Mängelrüge: Was zuerst?",
              options: [
                "Drohen",
                "Ignorieren",
                "Kündigen",
                "Bezug herstellen (Bestell-Nr., Datum)",
              ],
              correct: 3,
              explain: "Erst Bezug zum Kauf herstellen.",
            },
            {
              id: "imp_de-gb-1_2",
              q: "Nacherfüllung nach §437 BGB?",
              options: [
                "Reparatur ODER Ersatzlieferung (Käufer wählt)",
                "Ausschließlich Umtausch gegen ein anderes Produkt",
                "Sofortige Rückzahlung des vollen Kaufpreises",
                "Ausschließlich Reparatur durch den Verkäufer",
              ],
              correct: 0,
              explain: "Käufer hat Wahl zwischen Reparatur und Ersatz.",
            },
            {
              id: "imp_de-gb-1_3",
              q: "Frist in Reklamation?",
              options: [
                "Angemessene Frist setzen (z. B. 14 Tage)",
                "Immer 1 Tag",
                "Unnötig",
                "Keine Frist nötig",
              ],
              correct: 0,
              explain: "Angemessene Frist für Nacherfüllung.",
            },
            {
              id: "imp_de-gb-1_4",
              q: "Pflichtangabe Geschäftsbrief?",
              options: [
                "Optional",
                "Nur Name",
                "Firma, Rechtsform, Sitz, Registergericht, GF",
                "Nur Adresse",
              ],
              correct: 2,
              explain: "Gesetzliche Pflichtangaben.",
            },
            {
              id: "imp_de-gb-1_5",
              q: "Angebot enthält?",
              options: [
                "Leistung, Preis (netto+USt), Gültigkeit, Zahlungsbedingungen",
                "Nur die Lieferzeit; Preise werden erst mit der Rechnung genannt",
                "Nur die Leistungsbeschreibung; kaufmännische Angaben folgen später",
                "Nur den Endpreis brutto; weitere Angaben sind entbehrlich",
              ],
              correct: 0,
              explain: "Vollständiges Angebot.",
            },
            {
              id: "imp_de-gb-1_6",
              q: "Ton bei Reklamation?",
              options: ["Wütend", "Egal", "Sachlich und bestimmt", "Unterwürfig"],
              correct: 2,
              explain: "Sachlich, bestimmt, nicht emotional.",
            },
            {
              id: "imp_de-gb-1_7",
              q: "Betreff im Geschäftsbrief?",
              options: [
                "Fett, OHNE das Wort 'Betreff'",
                "Unterstrichen",
                "Mit 'Betreff:' davor",
                "Kursiv",
              ],
              correct: 0,
              explain: "DIN 5008: Fett, ohne Vorsatz.",
            },
            {
              id: "imp_de-gb-1_8",
              q: "Mahnung enthält?",
              options: [
                "Drohung",
                "Betrag, Frist, Hinweis auf Verzugszinsen",
                "Nur Betrag",
                "Nur Datum",
              ],
              correct: 1,
              explain: "Betrag + Frist + Verzugsfolgen.",
            },
            {
              id: "imp_de-gb-1_9",
              q: "Schriftart DIN 5008?",
              options: [
                "Serifenlos (Arial, Calibri), 11 pt",
                "Times New Roman",
                "Handschrift",
                "Comic Sans",
              ],
              correct: 0,
              explain: "Serifenlose Schrift, gut lesbar.",
            },
            {
              id: "imp_de-gb-1_10",
              q: "Nach welcher Norm werden Geschäftsbriefe in Deutschland gestaltet?",
              options: [
                "DIN 5008",
                "ISO 9001",
                "DIN A4... das ist nur das Papierformat",
                "RFC 822",
              ],
              correct: 0,
              explain:
                "Die DIN 5008 regelt u. a. Anschriftfeld, Bezugszeile, Abstände, Datumsformat und Gliederung.",
            },
            {
              id: "imp_de-gb-1_11",
              q: "Was gilt für die Betreffzeile nach DIN 5008?",
              options: [
                "Eine Betreffzeile ist nach DIN 5008 in Geschäftsbriefen nicht mehr zulässig",
                "Sie steht am Briefende unterhalb der Grußformel, direkt über der Signatur",
                "Kurz und aussagekräftig, OHNE das Wort 'Betreff', hervorgehoben (z. B. fett)",
                "Sie wird immer mit dem vorangestellten Wort 'Betreff:' samt Doppelpunkt eingeleitet",
              ],
              correct: 2,
              explain: "Beispiel: 'Reklamation – Lieferung vom 14.05.2026, Rechnungs-Nr. 4711'.",
            },
            {
              id: "imp_de-gb-1_12",
              q: "Welche Anrede ist korrekt, wenn der Ansprechpartner bekannt ist?",
              options: [
                "'Sehr geehrte Damen und Herren,' trotz bekanntem Namen",
                "'Hallo Meier!'",
                "Gar keine Anrede",
                "'Sehr geehrte Frau Meier,'",
              ],
              correct: 3,
              explain:
                "Danach klein weiterschreiben. Der persönliche Ansprechpartner gehört in Anschrift und Anrede – 'Sehr geehrte Damen und Herren' nur als Notlösung.",
            },
            {
              id: "imp_de-gb-1_13",
              q: "Wie ist eine Mängelrüge (Reklamation) aufgebaut?",
              options: [
                "Ausschließlich die Forderung nach Ersatzlieferung, ohne Angabe von Bestelldaten oder Beschreibung des Mangels",
                "Emotional formulierte Beschwerde, die dem Lieferanten sofort rechtliche Schritte und Kündigung aller Verträge androht",
                "Sachverhalt mit Bestell-/Rechnungsdaten, präzise Mängelbeschreibung, Forderung (Nacherfüllung) mit Fristsetzung",
                "Ein formloser Telefonanruf beim Lieferanten, der rechtlich in jedem Fall ausreicht und keine Dokumentation erfordert",
              ],
              correct: 2,
              explain:
                "Sachlich im Ton. Sachlichkeit wahrt die Geschäftsbeziehung; die Fristsetzung ist Voraussetzung für spätere Rechte wie Rücktritt.",
            },
            {
              id: "imp_de-gb-1_14",
              q: "Welche Grußformel ist im Geschäftsbrief Standard?",
              options: [
                "'Mit freundlichen Grüßen'",
                "'Hochachtungsvoll' als moderne Standardform",
                "'Tschüss'",
                "'LG'",
              ],
              correct: 0,
              explain:
                "Ohne Komma danach, darunter die Unterschrift. 'Hochachtungsvoll' wirkt heute distanziert-altmodisch; informelle Kürzel gehören nicht in Geschäftspost.",
            },
            {
              id: "imp_de-gb-1_15",
              q: "Welche Pflichtangaben gehören auf den Geschäftsbrief einer GmbH?",
              options: [
                "Die vollständige Bankverbindung des Kunden zur Vereinfachung des Lastschrifteinzugs",
                "Lediglich das Firmenlogo, alle weiteren Angaben sind freiwillige Zusätze",
                "Die Privatadresse des Geschäftsführers für persönliche Rückfragen der Kunden",
                "Firma mit Rechtsform, Sitz, Registergericht und HRB-Nummer, alle Geschäftsführer",
              ],
              correct: 3,
              explain:
                "§ 35a GmbHG – fehlende Pflichtangaben können abgemahnt werden; gilt sinngemäß auch für Geschäfts-E-Mails.",
            },
            {
              id: "imp_de-gb-1_16",
              q: "Wozu dient der Anlagenvermerk?",
              options: [
                "Er ist Dekoration",
                "Er listet beigefügte Dokumente auf",
                "Er ersetzt die Anlagen",
                "Er nennt die Lieblingsanlagen des Verfassers",
              ],
              correct: 1,
              explain:
                "Der Empfänger kann Vollständigkeit prüfen. 'Anlagen: Angebot Nr. 2026-117, Datenblatt' – unterhalb der Unterschrift, ggf. hervorgehoben.",
            },
            {
              id: "imp_de-gb-1_17",
              q: "Wie schreibt man das Datum nach DIN 5008 korrekt?",
              options: [
                "Zweistellig gekürzt 10.6.26, um Platz in der Bezugszeile zu sparen",
                "In der Form 'Juni, 10ter' mit vorangestelltem Monatsnamen",
                "Numerisch JJJJ-MM-TT (2026-06-10) oder alphanumerisch '10. Juni 2026'",
                "Mit römischen Monatszahlen, z. B. 10.VI.2026, für Amtsschreiben",
              ],
              correct: 2,
              explain:
                "In Geschäftsbriefen ist die alphanumerische Form üblich und unmissverständlich.",
            },
            {
              id: "imp_de-gb-1_18",
              q: "Welcher Ton gehört in die Antwort auf eine unberechtigte Reklamation?",
              options: [
                "Gar keine Antwort senden – unberechtigte Reklamationen verjähren, wenn man sie kommentarlos ignoriert",
                "Sachlich und lösungsorientiert: Sachverhalt prüfen, Ablehnung begründen, ggf. Kulanz anbieten",
                "Bereits im ersten Satz mit dem Anwalt drohen, um weitere unberechtigte Forderungen abzuschrecken",
                "Leicht spöttisch formulieren, damit der Kunde seinen Irrtum selbst erkennt und das Gesicht wahrt",
              ],
              correct: 1,
              explain:
                "Auch eine Ablehnung kann die Kundenbeziehung erhalten – Begründung und Alternativangebot sind der Profi-Weg.",
            },
            {
              id: "imp_de-gb-1_19",
              q: "Was gilt für geschäftliche E-Mails im Vergleich zum Brief?",
              options: [
                "Gleiche Sorgfalt: aussagekräftiger Betreff, Anrede, vollständige Signatur mit Pflichtangaben, korrekte Sprache",
                "Die Großschreibung ist in E-Mails optional, da sich Kleinschreibung im Netz etabliert hat",
                "Smileys ersetzen in modernen Geschäftsmails die klassische Grußformel vollständig",
                "E-Mails sind formfrei; Anrede, Signatur und Rechtschreibregeln sind hier nicht bindend",
              ],
              correct: 0,
              explain:
                "Die E-Mail ist heute der Standard-Geschäftsbrief – Schludrigkeit fällt direkt auf das Unternehmen zurück.",
            },
          ],
        },
      ],
    },
    {
      id: "en-it",
      title: "IT English",
      lessons: [
        {
          id: "en-it-1",
          title: "IT-Fachvokabular",
          content: [
            { type: "heading", value: "Essential IT Vocabulary" },
            {
              type: "text",
              value:
                "Hardware: motherboard, CPU (processor), RAM (memory), SSD/HDD (storage), PSU (power supply unit), NIC (network interface card), GPU (graphics card), chassis/case, peripheral (Peripheriegerät). Software: firmware, driver, patch, update, deploy (bereitstellen), compile, debug, runtime, legacy (Altsystem). Network: bandwidth (Bandbreite), latency (Latenz), throughput (Durchsatz), packet loss, uplink/downlink, backbone, subnet, gateway, hop.",
            },
            { type: "heading", value: "Troubleshooting & Support Vocabulary" },
            {
              type: "text",
              value:
                "The system is down / unresponsive / slow. I cannot connect to / access / log in to... The error message says... It worked before but stopped after the update. Have you tried restarting? Can you reproduce the issue? What is the exact error code? Let me check the logs. I will escalate this to the network team. The fix has been deployed / rolled back. We need to schedule a maintenance window.",
            },
            { type: "heading", value: "Wichtige Abkürzungen" },
            {
              type: "text",
              value:
                "SLA = Service Level Agreement. RCA = Root Cause Analysis. RFC = Request for Change. EoL = End of Life. PoC = Proof of Concept. SPoF = Single Point of Failure. MTBF/MTTR = Mean Time Between Failures / To Repair. RPO/RTO = Recovery Point/Time Objective. IOPS = Input/Output Operations Per Second. VLAN = Virtual Local Area Network.",
            },
            {
              type: "note",
              value:
                "In der AP kommen englische Fachtexte vor, die du verstehen musst. Die Abkürzungen und Troubleshooting-Phrasen sind besonders prüfungsrelevant.",
            },
            { type: "heading", value: "Building your IT vocabulary systematically" },
            {
              type: "text",
              value:
                "IT-Englisch lernst du am schnellsten in Wortfeldern statt als Einzelvokabeln – und mit den Verben, die dazugehören: HARDWARE: to install/replace a component, to plug in/unplug a cable, the device boots/fails. NETWORK: to assign an IP address, to connect to/disconnect from, the connection drops, latency is high. SOFTWARE: to deploy/roll out an update, to configure settings, to run/execute a script, the application crashes/freezes. SUPPORT: to troubleshoot an issue, to reproduce an error, to escalate a ticket, to resolve/close a case, a workaround vs. a permanent fix. Achtung False Friends: 'handy' heißt praktisch (das Gerät ist ein mobile/cell phone), 'chef' ist der Koch (der Vorgesetzte ist boss/manager), 'to control' heißt steuern (kontrollieren = to check), 'undertaker' ist der Bestatter (Unternehmer = entrepreneur).",
            },
            { type: "heading", value: "Übungsaufgabe: Support-Dialog vervollständigen" },
            {
              type: "text",
              value:
                "Übersetze die Kernsätze eines Support-Telefonats: a) „Können Sie den Fehler reproduzieren?“ b) „Ich habe das Ticket an die zweite Ebene eskaliert.“ c) „Als Übergangslösung starten Sie den Dienst bitte neu.“ d) „Das Problem ist behoben, ich schließe den Vorgang.“",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: a) 'Can you reproduce the error/issue?' b) 'I have escalated the ticket to second-level support.' c) 'As a workaround, please restart the service.' d) 'The issue is resolved – I will close the ticket/case.' Typische Fehler: 'I give the ticket further' (Denglisch – richtig: escalate/forward), 'the problem is repaired' (Geräte werden repaired, Probleme resolved/fixed).",
            },
          ],
          quiz: [
            {
              id: "imp_en-it-1_0",
              q: "'Latency' means?",
              options: ["Bandwidth", "Delay/Verzögerung", "Speed", "Storage"],
              correct: 1,
              explain: "Latency = Verzögerungszeit.",
            },
            {
              id: "imp_en-it-1_1",
              q: "'Breach' in IT security?",
              options: ["Sicherheitsvorfall/Einbruch", "Firewall", "Verschlüsselung", "Backup"],
              correct: 0,
              explain: "Breach = Sicherheitsverletzung/Einbruch.",
            },
            {
              id: "imp_en-it-1_2",
              q: "Bandwidth = ?",
              options: ["Server", "Bandbreite", "Batterie", "Sicherheit"],
              correct: 1,
              explain: "Bandwidth = Bandbreite (Übertragungskapazität).",
            },
            {
              id: "imp_en-it-1_3",
              q: "Latency = ?",
              options: ["Wartezeit/Verzögerung", "Bandbreite", "Speicher", "Verschlüsselung"],
              correct: 0,
              explain: "Latency = Latenz/Verzögerung bei Datenübertragung.",
            },
            {
              id: "imp_en-it-1_4",
              q: "Deploy = ?",
              options: ["Kaufen", "Löschen", "Bereitstellen/Ausrollen (Software)", "Testen"],
              correct: 2,
              explain: "Deploy = Software auf Server/Umgebung bereitstellen.",
            },
            {
              id: "imp_en-it-1_5",
              q: "Throughput = ?",
              options: [
                "Speicherplatz",
                "Durchsatz (tatsächliche Datenrate)",
                "Latenz",
                "Fehlerrate",
              ],
              correct: 1,
              explain: "Throughput = tatsächlich erreichter Datendurchsatz.",
            },
            {
              id: "imp_en-it-1_6",
              q: "Redundancy = ?",
              options: [
                "Sicherheit",
                "Backup",
                "Redundanz (Ausfall-Absicherung)",
                "Geschwindigkeit",
              ],
              correct: 2,
              explain: "Redundancy = Dopplung von Komponenten für Ausfallsicherheit.",
            },
            {
              id: "imp_en-it-1_7",
              q: "Troubleshoot = ?",
              options: ["Installieren", "Testen", "Probleme lösen/Fehler suchen", "Schießen"],
              correct: 2,
              explain: "Troubleshoot = Fehlersuche und -behebung.",
            },
            {
              id: "imp_en-it-1_8",
              q: "Firewall = ?",
              options: [
                "Router",
                "Feuerwand",
                "Switch",
                "Network security system filtering traffic",
              ],
              correct: 3,
              explain: "System das Netzwerkverkehr filtert und kontrolliert.",
            },
            {
              id: "imp_en-it-1_9",
              q: "Patch = ?",
              options: ["Aufnäher/Software-Update", "Netzwerk", "Datenbank", "Server"],
              correct: 0,
              explain: "Patch: Software-Aktualisierung (Bugfix/Sicherheit).",
            },
            {
              id: "imp_en-it-1_10",
              q: "What does 'to troubleshoot' mean?",
              options: [
                "To write an invoice for completed repair work",
                "To systematically find and fix the cause of a problem",
                "To install new software on a client computer",
                "To physically shoot at malfunctioning hardware",
              ],
              correct: 1,
              explain: "Typical ticket phrase: 'I am troubleshooting the network issue.'",
            },
            {
              id: "imp_en-it-1_11",
              q: "Which is the correct meaning of 'to deploy'?",
              options: [
                "To disconnect a cable or device from the network",
                "To permanently delete data from a storage system",
                "To roll out software or systems into an environment",
                "To pause work and take a break from an ongoing task",
              ],
              correct: 2,
              explain: "'We deployed the update to all clients last night.'",
            },
            {
              id: "imp_en-it-1_12",
              q: "'Actual' is a false friend. What does it mean?",
              options: ["Tatsächlich/wirklich", "Aktuell", "Schnell", "Veraltet"],
              correct: 0,
              explain:
                "NOT 'aktuell' (that is 'current'). Klassiker: 'the actual problem' = das eigentliche Problem; 'die aktuelle Version' = the current version.",
            },
            {
              id: "imp_en-it-1_13",
              q: "'Eventually' means …",
              options: ["schließlich/irgendwann", "eventuell", "niemals", "sofort"],
              correct: 0,
              explain:
                "NOT 'eventuell'. That is 'possibly/maybe'. 'The server eventually rebooted' heißt: Er hat es am Ende getan – nicht vielleicht.",
            },
            {
              id: "imp_en-it-1_14",
              q: "What is a 'vulnerability'?",
              options: [
                "A strong password",
                "A security weakness that can be exploited",
                "A backup copy",
                "A user manual",
              ],
              correct: 1,
              explain:
                "'A critical vulnerability was patched' – Standardvokabel in Security-Advisories.",
            },
            {
              id: "imp_en-it-1_15",
              q: "What does 'requirements' refer to in IT projects?",
              options: [
                "The conditions and features a solution must fulfil",
                "The rules governing staff lunch breaks and rest times",
                "The total amount stated on the project invoice",
                "The office furniture provided at each workplace",
              ],
              correct: 0,
              explain:
                "'Functional and non-functional requirements' entsprechen den Anforderungen aus dem Lastenheft.",
            },
            {
              id: "imp_en-it-1_16",
              q: "Choose the correct pair: backup / restore",
              options: [
                "Backup = update the software; restore = reboot the machine afterwards",
                "Backup = create a safety copy; restore = bring data back from that copy",
                "Backup = delete old files; restore = print the remaining documents",
                "Both terms mean the same thing and can be used interchangeably",
              ],
              correct: 1,
              explain: "'We restored the file from last night's backup.'",
            },
            {
              id: "imp_en-it-1_17",
              q: "What does 'default' mean (e.g. default settings)?",
              options: [
                "A password that is set by the manufacturer",
                "The preset standard value used unless changed",
                "A serious error that crashes the whole system",
                "A discount granted for early payment of invoices",
              ],
              correct: 1,
              explain: "'By default, the firewall blocks incoming connections.'",
            },
            {
              id: "imp_en-it-1_18",
              q: "What is 'maintenance'?",
              options: [
                "A type of malware",
                "The main entrance",
                "Regular work to keep systems running",
                "The sales department",
              ],
              correct: 2,
              explain:
                "Updates, checks, repairs. 'Scheduled maintenance window: Sunday 02:00–04:00' – so kündigt man Wartungsfenster an.",
            },
            {
              id: "imp_en-it-1_19",
              q: "What does 'asap' mean in business messages?",
              options: [
                "As soon as possible",
                "After some appointments pass",
                "As slow as possible",
                "Ask someone about pricing",
              ],
              correct: 0,
              explain: "Höflicher im Kundenkontakt: 'at your earliest convenience'.",
            },
          ],
        },
        {
          id: "en-it-2",
          title: "E-Mails & Meetings auf Englisch",
          content: [
            { type: "heading", value: "Professional E-Mail Structure" },
            {
              type: "text",
              value:
                "Subject: Clear and specific ('Re: Server migration scheduled for Friday 14:00'). Greeting: Dear Mr/Ms [Name] (formal), Hi [Name] (semi-formal), Hello team (group). Body: Purpose in first sentence. One topic per email. Action items clearly stated. Closing: Best regards / Kind regards (formal), Thanks / Cheers (informal). Signature: Name, title, company, phone.",
            },
            { type: "heading", value: "Useful E-Mail Phrases" },
            {
              type: "text",
              value:
                "Opening: I am writing to inform you about... / Following up on our conversation... / As discussed in the meeting... Requesting: Could you please provide... / I would appreciate if you could... / Would it be possible to... Confirming: I can confirm that... / As agreed, we will... / Please find attached... Closing: Please do not hesitate to contact me. / I look forward to your reply. / Let me know if you need further information.",
            },
            { type: "heading", value: "Meeting English" },
            {
              type: "text",
              value:
                "Opening: 'Shall we get started? The purpose of today's meeting is...' Agenda: 'First, we will discuss... Then, we will move on to...' Opinions: 'In my opinion... / I believe that... / From a technical perspective...' Agreeing: 'I agree. / That makes sense. / Good point.' Disagreeing: 'I see your point, but... / I am not sure I agree because...' Summarizing: 'To summarize... / The key takeaways are... / The action items are...' Closing: 'Thank you all. The next meeting will be on...'",
            },
            { type: "heading", value: "Common Mistakes (False Friends)" },
            {
              type: "text",
              value:
                "actual ≠ aktuell (actual = tatsächlich, current = aktuell). become ≠ bekommen (become = werden, get/receive = bekommen). chef ≠ Chef (chef = Koch, boss/manager = Chef). eventually ≠ eventuell (eventually = schließlich, perhaps = eventuell). fabric ≠ Fabrik (fabric = Stoff, factory = Fabrik). sensible ≠ sensibel (sensible = vernünftig, sensitive = sensibel).",
            },
            {
              type: "note",
              value:
                "In AP und Berufsschule kommen englische E-Mails und Meeting-Situationen vor. False Friends sind eine beliebte Fehlerfalle!",
            },
            { type: "heading", value: "Meetings and e-mails: the phrases that carry you" },
            {
              type: "text",
              value:
                "Berufs-Englisch ist Baukasten-Englisch – wer die Standardphrasen sicher hat, wirkt souverän: E-MAIL-EINSTIEG: 'I am writing to inform you about … / to follow up on …'. BITTEN: 'Could you please send me …' (höflicher als 'Send me'). ANHANG: 'Please find attached the report' oder moderner 'I have attached …'. FRIST: 'Please reply by Friday, 25 July.' MEETING: 'Could we schedule a call for Tuesday?', 'Let me share my screen.', 'To sum up, we agreed on three action items.' NACHFASSEN: 'Just a quick reminder about …'. ABSAGEN/VERSCHIEBEN: 'I am afraid I have to reschedule our meeting.' Ton: Im Englischen wird stärker abgefedert als im Deutschen – 'I think we should…' statt 'We must…', 'There seems to be an issue' statt 'This is wrong'.",
            },
            { type: "heading", value: "Übungsaufgabe: Die knappe deutsche Mail auf Englisch" },
            {
              type: "text",
              value:
                "Übersetze sinngemäß und höflich: „Der Servertausch ist abgeschlossen. Bitte testen Sie bis Donnerstag, ob alles funktioniert. Bei Problemen melden Sie sich im Ticketsystem. Anbei die neue IP-Liste.“",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (Beispiel): 'The server replacement has been completed. Could you please test by Thursday whether everything is working as expected? If you notice any issues, please report them via the ticket system. Please find attached the updated IP list.' – Punkte: Present Perfect für das abgeschlossene Ergebnis, höfliche Frageform statt Imperativ, 'via the ticket system', Anhang-Phrase. Bonus: 'as expected' zeigt, dass ein Soll-Zustand definiert ist.",
            },
          ],
          quiz: [
            {
              id: "imp_en-it-2_0",
              q: "'Minutes' in a meeting context means?",
              options: ["Notizen", "Kleinigkeiten", "Protokoll", "Minuten/Zeit"],
              correct: 2,
              explain: "Minutes = Besprechungsprotokoll.",
            },
            {
              id: "imp_en-it-2_1",
              q: "Meeting eröffnen?",
              options: [
                "Let us begin the meeting",
                "Shall we start?",
                "Hey guys, what's up?",
                "Both 'Let us begin the meeting' and 'Shall we start?'",
              ],
              correct: 3,
              explain:
                "Beide formellen Eröffnungen funktionieren – 'Hey guys' ist im Kundentermin zu locker.",
            },
            {
              id: "imp_en-it-2_2",
              q: "Action item = ?",
              options: [
                "Aufgabe die jemand übernimmt",
                "Beschwerde",
                "Tagesordnungspunkt",
                "Vorschlag",
              ],
              correct: 0,
              explain: "Action item = konkrete Aufgabe mit Verantwortlichem.",
            },
            {
              id: "imp_en-it-2_3",
              q: "Could you elaborate on that?",
              options: [
                "Könntest du das näher erläutern?",
                "Kannst du kürzer fassen?",
                "Stimmt das?",
                "Kannst du aufhören?",
              ],
              correct: 0,
              explain: "Elaborate = näher erläutern, ausführen.",
            },
            {
              id: "imp_en-it-2_4",
              q: "FYI = ?",
              options: [
                "Follow Your Instructions",
                "Fix Your Issue",
                "File Your Invoice",
                "For Your Information",
              ],
              correct: 3,
              explain: "For Your Information = Zur Information/Kenntnisnahme.",
            },
            {
              id: "imp_en-it-2_5",
              q: "ASAP = ?",
              options: [
                "Automated Setup",
                "Advanced Security Access Point",
                "As Soon As Possible",
                "After System Analysis Process",
              ],
              correct: 2,
              explain: "As Soon As Possible = So schnell wie möglich.",
            },
            {
              id: "imp_en-it-2_6",
              q: "Deadline?",
              options: ["Meeting", "Frist/Termin", "Tod", "Start"],
              correct: 1,
              explain: "Fälligkeitstermin.",
            },
            {
              id: "imp_en-it-2_7",
              q: "I suggest...?",
              options: ["Ich frage", "Ich schlage vor", "Ich kündige", "Beschwerde"],
              correct: 1,
              explain: "Vorschlag.",
            },
            {
              id: "imp_en-it-2_8",
              q: "Minutes?",
              options: ["Stunden", "Sitzungsprotokoll", "Agenda", "Minuten"],
              correct: 1,
              explain: "Meeting Minutes.",
            },
            {
              id: "imp_en-it-2_9",
              q: "Get back to you?",
              options: ["Gehe zurück", "Zurück", "Melde mich nochmal dazu", "Aufhören"],
              correct: 2,
              explain: "Komme darauf zurück.",
            },
            {
              id: "imp_en-it-2_10",
              q: "Which salutation/closing pair is correct for an unknown recipient?",
              options: [
                "'Dear Sir or Madam,' … 'Yours sincerely,'",
                "'Hi there,' … 'Yours faithfully,'",
                "'Dear Sir or Madam,' … 'Yours faithfully,'",
                "'To whom,' … 'Bye,'",
              ],
              correct: 2,
              explain:
                "Bekannter Name → 'Dear Ms Smith' + 'Yours sincerely'; unbekannt → 'faithfully'. Moderner Standard: 'Kind regards'.",
            },
            {
              id: "imp_en-it-2_11",
              q: "How do you politely ask for something in an email?",
              options: [
                "'Could you please send me the report by Friday?'",
                "'Send me the report right now, no excuses.'",
                "'You must give me the report immediately.'",
                "'Report!! I am still waiting for it!!'",
              ],
              correct: 0,
              explain:
                "Could/Would + please macht Anfragen höflich, Deadlines bleiben trotzdem klar.",
            },
            {
              id: "imp_en-it-2_12",
              q: "Which phrase introduces an attachment correctly?",
              options: [
                "'Look the data.'",
                "'Please find attached the updated offer.'",
                "'Here is in the inside the file.'",
                "'Attachment is be there.'",
              ],
              correct: 1,
              explain: "Auch gängig: 'I have attached …' oder 'Attached you will find …'.",
            },
            {
              id: "imp_en-it-2_13",
              q: "How do you politely follow up on an unanswered email?",
              options: [
                "'Why you no answer?'",
                "'Hello again again again.'",
                "'I am following up on my email from 3 June. Have you had a chance to look at it?'",
                "'Last warning!'",
              ],
              correct: 2,
              explain:
                "Freundlich nachfassen statt Vorwurf – 'just a gentle reminder' ist die Standardformel.",
            },
            {
              id: "imp_en-it-2_14",
              q: "Which sentence proposes a meeting time correctly?",
              options: [
                "'Tuesday 2, be there.'",
                "'Would Tuesday at 2 pm work for you?'",
                "'We meet when I want.'",
                "'Meeting is happen Tuesday maybe sure.'",
              ],
              correct: 1,
              explain:
                "Alternativen anbieten wirkt professionell: 'If that doesn't suit you, I'm also free on Wednesday morning.'",
            },
            {
              id: "imp_en-it-2_15",
              q: "What are 'action items' in meeting minutes?",
              options: [
                "Agenda decorations",
                "Deleted topics",
                "Agreed tasks with owner and due date",
                "Snacks for the meeting",
              ],
              correct: 2,
              explain:
                "'Action item: Anna to update the firewall rules by 20 June' – das englische Pendant zu Beschluss + Verantwortlichem.",
            },
            {
              id: "imp_en-it-2_16",
              q: "How do you interrupt politely in a meeting?",
              options: [
                "Just speak louder until others stop",
                "'Stop talking now, it's my turn to speak!'",
                "'Wrong, wrong, that is completely wrong.'",
                "'Sorry to interrupt, but may I add something?'",
              ],
              correct: 3,
              explain:
                "Auch nützlich: 'May I jump in here?' – höflich Raum nehmen statt übertönen.",
            },
            {
              id: "imp_en-it-2_17",
              q: "Which phrase summarizes at the end of a meeting?",
              options: [
                "'The end.'",
                "'Whatever, bye.'",
                "'To sum up, we agreed on three next steps …'",
                "'Nothing happened today.'",
              ],
              correct: 2,
              explain:
                "Kurz zusammenfassen + nächste Schritte nennen = professioneller Abschluss, schriftlich wie mündlich.",
            },
            {
              id: "imp_en-it-2_18",
              q: "What does 'cc' someone mean — and when is 'bcc' appropriate?",
              options: [
                "cc is reserved for managers only; regular colleagues must never be copied on e-mails",
                "cc hides the recipients from everyone; bcc shows them openly to all readers",
                "Both options delete the mail from the server right after it has been sent",
                "cc = visible copy for information; bcc = hidden copy, e.g. for large external lists (privacy)",
              ],
              correct: 3,
              explain:
                "Bcc bei externen Verteilern schützt die Adressen der Empfänger – DSGVO-relevant.",
            },
            {
              id: "imp_en-it-2_19",
              q: "Which is appropriate small talk before a video call with a client?",
              options: [
                "'You look tired.'",
                "'How much money do you earn?'",
                "'How has your week been so far?'",
                "'Politics: discuss!'",
              ],
              correct: 2,
              explain:
                "Unverfängliche Themen (Woche, Wetter, Anreise) – Gehalt, Politik und Aussehen sind tabu.",
            },
          ],
        },
        {
          id: "en-hd-1",
          title: "IT Helpdesk Conversations",
          content: [
            { type: "heading", value: "Helpdesk Call Structure" },
            {
              type: "text",
              value:
                "1. Greeting: 'IT Support, this is [Name] speaking. How can I help you?' 2. Identify: 'Can I have your name and employee ID, please?' 3. Problem: 'Could you describe the issue? When did it start? Are others affected?' 4. Troubleshoot: 'Let me walk you through some steps. Could you try...' 5. Resolve/Escalate: 'I have resolved the issue.' or 'I will escalate this to our network team.' 6. Close: 'Is there anything else I can help you with? Your ticket number is...'",
            },
            { type: "heading", value: "Common Helpdesk Phrases" },
            {
              type: "text",
              value:
                "Diagnosing: 'Are you connected to the VPN? Can you open a browser? What error message do you see? Have you tried clearing the cache? Let me remote into your machine.' Instructions: 'Please click on Settings, then go to Network. Now select the Wi-Fi tab. Enter the password and click Connect.' Status updates: 'I have raised a ticket for this. The estimated resolution time is 4 hours. I will keep you updated. The server team is working on it.'",
            },
            { type: "heading", value: "Schwierige Situationen auf Englisch" },
            {
              type: "text",
              value:
                "Angry user: 'I understand your frustration. Let me look into this right away.' Not your area: 'This falls under the responsibility of the network team. Let me transfer you.' Cannot fix immediately: 'Unfortunately, this requires a change request. I will fast-track it for you.' Explaining downtime: 'We are currently performing scheduled maintenance. The system will be back online by 14:00.'",
            },
            {
              type: "note",
              value:
                "IT-Support auf Englisch ist Berufsalltag in internationalen Unternehmen. Die Phrasen hier decken 90% der typischen Helpdesk-Situationen ab.",
            },
            { type: "heading", value: "Exercise: Helpdesk Call" },
            {
              type: "text",
              value:
                "User: 'My computer won't connect to the network.' Formuliere auf Englisch: a) Diagnose-Frage, b) Anweisung Adapter-Neustart, c) Eskalation.",
            },
            {
              type: "solution",
              value:
                "SAMPLE ANSWER:\na) Question:\n   Could you tell me if other devices can connect?\n   And do you see any error message?\n\nb) Instruction:\n   Please go to Settings, then Network. Right-click\n   the adapter, select Disable, wait, then Enable.\n\nc) Escalation:\n   I will escalate this to our network team and raise\n   a ticket. You will get an update within two hours.",
            },
          ],
          quiz: [
            {
              id: "imp_en-hd-1_0",
              q: "Helpdesk Greeting?",
              options: ["What's up", "Hey", "Yo", "IT Support, this is [Name]. How can I help?"],
              correct: 3,
              explain: "Professionelle Begrüßung.",
            },
            {
              id: "imp_en-hd-1_1",
              q: "Escalate = ?",
              options: ["Lösen", "Schließen", "Ignorieren", "An Spezialisten-Team weiterleiten"],
              correct: 3,
              explain: "Eskalieren = weiterleiten an höhere Ebene.",
            },
            {
              id: "imp_en-hd-1_2",
              q: "Remote into your machine = ?",
              options: [
                "Neustart",
                "Telefonieren",
                "E-Mail senden",
                "Per Fernzugriff auf deinen PC zugreifen",
              ],
              correct: 3,
              explain: "Remote Desktop / Fernwartung.",
            },
            {
              id: "imp_en-hd-1_3",
              q: "I understand your frustration = ?",
              options: [
                "Ich bin frustriert",
                "Ich verstehe Ihre Frustration",
                "Verstehe ich nicht",
                "Das ist Ihr Problem",
              ],
              correct: 1,
              explain: "Empathie zeigen bei verärgerten Usern.",
            },
            {
              id: "imp_en-hd-1_4",
              q: "Ticket number dient?",
              options: ["Nur Statistik", "Passwort", "Zugangscode", "Nachverfolgung der Anfrage"],
              correct: 3,
              explain: "Ticket-Nr. für Status-Abfrage und Nachverfolgung.",
            },
            {
              id: "imp_en-hd-1_5",
              q: "Scheduled maintenance = ?",
              options: ["Update", "Notfall", "Ungeplanter Ausfall", "Geplante Wartung"],
              correct: 3,
              explain: "Geplante Wartungsarbeiten.",
            },
            {
              id: "imp_en-hd-1_6",
              q: "Let me walk you through = ?",
              options: [
                "Ich gehe spazieren",
                "Ich überlege",
                "Ich laufe weg",
                "Ich führe Sie Schritt für Schritt durch",
              ],
              correct: 3,
              explain: "Schrittweise Anleitung geben.",
            },
            {
              id: "imp_en-hd-1_7",
              q: "Unfortunately = ?",
              options: ["Bestimmt", "Glücklicherweise", "Natürlich", "Leider"],
              correct: 3,
              explain: "Leider (höflich schlechte Nachricht einleiten).",
            },
            {
              id: "imp_en-hd-1_8",
              q: "Raise a ticket = ?",
              options: [
                "Ticket löschen",
                "Ticket erhöhen",
                "Ticket eskalieren",
                "Ein Ticket erstellen/eröffnen",
              ],
              correct: 3,
              explain: "Ticket anlegen.",
            },
            {
              id: "imp_en-hd-1_9",
              q: "ETA = ?",
              options: [
                "Extended Technical Access",
                "Estimated Time of Arrival",
                "External Transfer Agent",
                "Error Type Analysis",
              ],
              correct: 1,
              explain: "Geschätzte Ankunft/Fertigstellung. Wann ist es voraussichtlich fertig?",
            },
            {
              id: "imp_en-hd-1_10",
              q: "How do you open a support call professionally?",
              options: [
                "'Who gave you this number? This line is for internal staff only, you know.'",
                "'What? Speak up, I can barely hear you and I don't have much time.'",
                "'Thank you for calling IT support, my name is Alex. How can I help you?'",
                "'Make it quick, we're closing the queue in a few minutes anyway.'",
              ],
              correct: 2,
              explain:
                "Begrüßung + Name + offene Frage – der Standardeinstieg jedes Helpdesk-Gesprächs.",
            },
            {
              id: "imp_en-hd-1_11",
              q: "Which question helps to narrow down an issue?",
              options: [
                "'When did the problem first occur, and has anything changed since then?'",
                "'Why did you break it, and why didn't you tell anyone sooner?'",
                "'Can you fix it yourself so I don't have to open a ticket?'",
                "'Is it even plugged in? You should know that yourself.'",
              ],
              correct: 0,
              explain: "Offene W-Fragen liefern Diagnose-Infos; Schuldzuweisungen eskalieren nur.",
            },
            {
              id: "imp_en-hd-1_12",
              q: "How do you ask for permission to start a remote session?",
              options: [
                "'May I connect to your computer remotely to take a look?'",
                "'Give me your password so I can log in!'",
                "'I am already inside your PC, don't touch anything.'",
                "'Move away from the keyboard, I am taking over now.'",
              ],
              correct: 0,
              explain:
                "Erst fragen, dann verbinden – Zustimmung gehört zu Professionalität und Datenschutz.",
            },
            {
              id: "imp_en-hd-1_13",
              q: "What does 'to escalate a ticket' mean?",
              options: [
                "To print it and file a paper copy in the archive",
                "To mark it as spam so the system ignores it",
                "To pass it to a higher support level or specialist",
                "To delete it permanently from the ticket queue",
              ],
              correct: 2,
              explain:
                "'I will escalate this to second-level support' – inklusive Ticketnummer und bisheriger Schritte.",
            },
            {
              id: "imp_en-hd-1_14",
              q: "Which phrase shows empathy to a frustrated user?",
              options: [
                "'I understand this is frustrating. Let's get it sorted together.'",
                "'Calm down.'",
                "'It is your own fault.'",
                "'Not my problem.'",
              ],
              correct: 0,
              explain: "Empathie zuerst, dann Lösung – deeskaliert in Sekunden.",
            },
            {
              id: "imp_en-hd-1_15",
              q: "How do you guide a user through a step?",
              options: [
                "'Figure it out yourself, the manual is somewhere online.'",
                "'Do the thing with the stuff in the menu like always.'",
                "'Please click the Start button, then type cmd and press Enter.'",
                "'You know what to do, just do it like last time.'",
              ],
              correct: 2,
              explain:
                "Ein Schritt pro Anweisung, konkrete Bezeichnungen – wie in guter Doku, nur mündlich.",
            },
            {
              id: "imp_en-hd-1_16",
              q: "Which phrase confirms the issue is resolved?",
              options: [
                "'It's probably fine now, I wouldn't worry about it.'",
                "'Could you please check if everything is working as expected now?'",
                "'It works now, goodbye, please do not reply to this.'",
                "'Everything is fixed, so please don't call this number again.'",
              ],
              correct: 1,
              explain:
                "Bestätigung durch den Nutzer einholen, dann Ticket mit Lösung dokumentieren und schließen.",
            },
            {
              id: "imp_en-hd-1_17",
              q: "How do you communicate that you need time to investigate?",
              options: [
                "'Wait. This could take a long time, maybe. Don't know yet.'",
                "'I'll look into this and get back to you by 3 pm with an update.'",
                "Stay silent and keep working until the user asks again",
                "'No idea what's wrong here. Try again tomorrow, bye.'",
              ],
              correct: 1,
              explain:
                "Konkrete Rückmeldezeit zusagen ('I'll keep you posted') – und sie einhalten.",
            },
            {
              id: "imp_en-hd-1_18",
              q: "What is a 'workaround'?",
              options: [
                "A temporary solution that restores work while the root cause is being fixed",
                "A special type of network cable used to bypass a faulty switch port",
                "The corridor around the office that technicians walk to reach the server room",
                "A permanent fix that removes the root cause so the issue never returns",
              ],
              correct: 0,
              explain: "'As a workaround, please use the web client until the app is patched.'",
            },
            {
              id: "imp_en-hd-1_19",
              q: "How do you end a support call politely?",
              options: [
                "'Finally done. That took much longer than it should have, to be honest.'",
                "'Next time, please read the manual first so you don't have to call us again.'",
                "End the call by hanging up silently once the issue appears to be solved",
                "'Is there anything else I can help you with? … Thank you for your patience, have a great day.'",
              ],
              correct: 3,
              explain: "Abschlussfrage + Dank – der letzte Eindruck prägt die Servicebewertung.",
            },
          ],
        },
      ],
    },
    {
      id: "de2-präs",
      title: "Präsentieren & Berichten",
      lessons: [
        {
          id: "de2-pr-1",
          title: "Präsentationstechniken",
          content: [
            { type: "heading", value: "Aufbau einer Fachpräsentation" },
            {
              type: "text",
              value:
                "Einleitung (10%): Begrüßung, Thema vorstellen, Gliederung zeigen, Interesse wecken (Frage, Statistik, Zitat). Hauptteil (80%): Maximal 3-5 Kernpunkte, logisch aufgebaut (chronologisch, Problem→Lösung, Vergleich). Jeder Punkt: These → Begründung → Beispiel. Schluss (10%): Zusammenfassung der Kernpunkte, Fazit/Empfehlung, Ausblick, Fragen an das Publikum.",
            },
            { type: "heading", value: "Foliengestaltung" },
            {
              type: "text",
              value:
                "6×6-Regel: Max. 6 Zeilen, max. 6 Wörter pro Zeile. Schriftgröße: Mind. 24pt (Überschrift 32pt+). Einheitliches Design: Farben, Schriftart, Layout konsistent. Bilder/Diagramme statt Textwüste. Keine ganzen Sätze – Stichworte als Gedankenstütze. Animation sparsam (Einblenden OK, Herumfliegen nicht).",
            },
            { type: "heading", value: "Vortragstechnik" },
            {
              type: "text",
              value:
                "Blickkontakt: Wechselnd durchs Publikum, NICHT Folien ablesen. Sprache: Laut, deutlich, Pausen machen, Fachbegriffe erklären. Körpersprache: Aufrecht stehen, offene Haltung, Gestik unterstützt. Zeitmanagement: Vorher üben mit Stoppuhr! AP2: 15 Min Präsentation, nicht überziehen. Lampenfieber: Gute Vorbereitung ist der beste Schutz. Tiefes Atmen. Die ersten 30 Sekunden auswendig können.",
            },
            { type: "heading", value: "Handout erstellen" },
            {
              type: "text",
              value:
                "Handout ≠ Folienausdruck! Eigenes Dokument mit: Titel, Name, Datum, Kernpunkte zusammengefasst, weiterführende Quellen/Links. Max. 1-2 Seiten. Wird VOR der Präsentation verteilt oder am Ende zum Mitnehmen.",
            },
            {
              type: "note",
              value:
                "In der AP2 hast du 15 Min Präsentation + 15 Min Fachgespräch. Die Präsentation zählt zur Note – Foliendesign, Vortragsstil und Zeitmanagement üben!",
            },
            { type: "heading", value: "Präsentieren: Struktur schlägt Folien" },
            {
              type: "text",
              value:
                "Eine Präsentation ist eine geführte Argumentation, keine vorgelesene Foliensammlung. Struktur: EINSTIEG (Aufhänger: Problem, Zahl oder Frage – nicht „Ich präsentiere heute…“), HAUPTTEIL (3 Kernbotschaften, mehr merkt sich niemand; je Botschaft: Behauptung → Beleg → Beispiel), SCHLUSS (Zusammenfassung + klarer Appell/nächster Schritt). Foliendesign: eine Aussage pro Folie, max. 6 Zeilen, Diagramm schlägt Tabelle, Schrift ≥ 24 pt, Folien sind Verstärker – das Skript bist DU. Vortragstechnik: frei sprechen mit Stichwortkarten, Blickkontakt rotieren, Pausen statt „ähm“, Hände sichtbar. Lampenfieber ist normal – die ersten zwei Sätze auswendig zu können nimmt den Druck. Für die AP2-Projektpräsentation gilt zusätzlich: exakt im Zeitfenster bleiben (15 min ± Toleranz üben!), Fachbegriffe beherrschen (das Fachgespräch hakt dort ein) und Technik-Fallback (PDF auf USB-Stick) mitbringen.",
            },
            { type: "heading", value: "Übungsaufgabe: Der schwache Einstieg" },
            {
              type: "text",
              value:
                "Ein Mitschüler beginnt: „Ja, äh, hallo, ich bin der Jan und ich präsentiere heute mal mein Projekt, ich hoffe, das klappt alles mit der Technik…“ Schreibe ihm einen starken 3-Satz-Einstieg für ein Projekt „Einführung eines zentralen Backupsystems“.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (Beispiel): „340 Gigabyte Kundendaten – und bis vor drei Monaten hätte ein einziger defekter Bürorechner sie unwiederbringlich gelöscht. Mein Projekt hat dieses Risiko beseitigt: ein zentrales Backupsystem nach der 3-2-1-Regel, das seit acht Wochen produktiv läuft. In den nächsten 15 Minuten zeige ich Ihnen, wie ich von der Risikoanalyse über den Systemvergleich zur Umsetzung gekommen bin – und was das Unternehmen jetzt davon hat.“ – Wirkung: konkretes Risiko als Aufhänger, Ergebnis vorweg (die Prüfer wissen, wohin die Reise geht), Agenda in einem Satz, kein Technik-Gejammer.",
            },
          ],
          quiz: [
            {
              id: "imp_de2-pr-1_0",
              q: "Max. Kernpunkte im Hauptteil einer Präsentation?",
              options: ["8-10", "Unbegrenzt", "1-2", "3-5"],
              correct: 3,
              explain: "3-5 Kernpunkte, mehr überfordert das Publikum.",
            },
            {
              id: "imp_de2-pr-1_1",
              q: "Max. Kernpunkte pro Präsentation?",
              options: ["Unbegrenzt", "3-5", "1-2", "8-10"],
              correct: 1,
              explain: "3-5 Hauptpunkte, mehr überfordert das Publikum.",
            },
            {
              id: "imp_de2-pr-1_2",
              q: "Mindestschriftgröße Folien?",
              options: ["18pt", "24pt", "36pt", "12pt"],
              correct: 1,
              explain: "Min. 24 pt, damit auch hinten im Raum lesbar.",
            },
            {
              id: "imp_de2-pr-1_3",
              q: "Fachbericht: Welche Sprache?",
              options: [
                "Poetisch-bildhaft, um die Lesenden emotional zu erreichen",
                "Egal – der Inhalt zählt, die Sprachform wird nicht bewertet",
                "Locker-umgangssprachlich, damit der Text nahbar wirkt",
                "Sachlich, keine persönlichen Meinungen ohne Begründung",
              ],
              correct: 3,
              explain: "Sachlich, strukturiert, zielgruppengerecht.",
            },
            {
              id: "imp_de2-pr-1_4",
              q: "Präsentation: Was kommt am Schluss?",
              options: ["Neue Themen", "Werbung", "Nichts", "Zusammenfassung, Fazit, Fragen"],
              correct: 3,
              explain: "Zusammenfassung, Fazit/Ausblick, Fragen an das Publikum.",
            },
            {
              id: "imp_de2-pr-1_5",
              q: "Körpersprache: Verschränkte Arme?",
              options: ["Offen", "Langeweile", "Abwehrhaltung/Verschlossenheit", "Zustimmung"],
              correct: 2,
              explain: "Verschränkte Arme signalisieren oft Abwehr oder Distanz.",
            },
            {
              id: "imp_de2-pr-1_6",
              q: "Blickkontakt?",
              options: ["Publikum anschauen", "Vermeiden", "Folien lesen", "Nur eine Person"],
              correct: 0,
              explain: "Wechselnd.",
            },
            {
              id: "imp_de2-pr-1_7",
              q: "Foliensünde?",
              options: ["Zu viel Text", "Farben", "Bilder", "Animation"],
              correct: 0,
              explain: "6x6-Regel.",
            },
            {
              id: "imp_de2-pr-1_8",
              q: "Lampenfieber?",
              options: ["Absagen", "Alkohol", "Vorbereitung + Übung", "Ignorieren"],
              correct: 2,
              explain: "Vorbereitung hilft.",
            },
            {
              id: "imp_de2-pr-1_9",
              q: "Handout?",
              options: ["Unnötig", "Zusammenfassung zum Mitnehmen", "Nur Prüfer", "Folien"],
              correct: 1,
              explain: "Kernpunkte.",
            },
            {
              id: "imp_de2-pr-1_10",
              q: "Welche Faustregel hilft gegen überladene Folien?",
              options: [
                "Jede Folie braucht drei Diagramme",
                "Mindestens 20 Zeilen Text pro Folie",
                "Wenige Stichpunkte pro Folie, eine Kernaussage",
                "Alles in Rot und Großbuchstaben",
              ],
              correct: 2,
              explain:
                "Die Folie unterstützt den Vortrag, ersetzt ihn nicht. Wer Folien vorliest, verliert das Publikum – Stichworte auf der Folie, Erklärung im gesprochenen Wort.",
            },
            {
              id: "imp_de2-pr-1_11",
              q: "Wie baut man eine Präsentation klassisch auf?",
              options: [
                "Nur Hauptteil – Einstieg und Schluss kosten unnötig Zeit",
                "Einstieg (Aufhänger, Agenda) → Hauptteil (roter Faden) → Schluss",
                "Erst die Publikumsfragen sammeln, danach den Inhalt zeigen",
                "Chronologisch rückwärts vom Fazit zur Ausgangsfrage",
              ],
              correct: 1,
              explain:
                "Fazit, Ausblick, Fragen. Der Einstieg entscheidet über Aufmerksamkeit: Frage, Zahl oder kurzes Szenario funktionieren besser als 'Ich fange dann mal an'.",
            },
            {
              id: "imp_de2-pr-1_12",
              q: "Was hilft am besten gegen Lampenfieber?",
              options: [
                "Gar nicht vorbereiten, spontan ist besser",
                "Gründliche Vorbereitung plus Generalprobe unter realen Bedingungen",
                "Sehr schnell sprechen, damit es vorbei ist",
                "Den Vortrag auswendig herunterrasseln",
              ],
              correct: 1,
              explain:
                "Wer den Einstieg sicher beherrscht, gewinnt Ruhe für den Rest – Probedurchlauf mit Zeitmessung ist Pflicht (auch vor der AP2-Präsentation).",
            },
            {
              id: "imp_de2-pr-1_13",
              q: "Welche Rolle spielt Blickkontakt?",
              options: [
                "Nur den Beamer ansehen",
                "Blickkontakt ist unhöflich",
                "Er bindet das Publikum ein und wirkt souverän",
                "Nur eine Person dauerhaft fixieren",
              ],
              correct: 2,
              explain:
                "In die Runde schauen, nicht auf Leinwand oder Notizen. Mit dem Rücken zum Publikum auf die Leinwand reden ist der häufigste Anfängerfehler.",
            },
            {
              id: "imp_de2-pr-1_14",
              q: "Wie geht man mit einer Frage um, deren Antwort man nicht kennt?",
              options: [
                "Die fragende Person kritisieren",
                "Die Frage ignorieren",
                "Irgendetwas Plausibles erfinden",
                "Ehrlich zugeben und Nachlieferung anbieten",
              ],
              correct: 3,
              explain:
                "Nicht raten oder bluffen. 'Das prüfe ich und reiche es nach' wirkt professioneller als eine falsche Antwort, die auffliegt – gilt besonders im Fachgespräch.",
            },
            {
              id: "imp_de2-pr-1_15",
              q: "Welche Visualisierung passt zu einem Anteilsvergleich (z. B. Budgetverteilung)?",
              options: [
                "Eine Textwand",
                "Ein Foto",
                "Kreis- oder Balkendiagramm",
                "Ein Liniendiagramm über die Zeit – das zeigt Verläufe",
              ],
              correct: 2,
              explain:
                "Diagrammtyp nach Aussage wählen: Anteile → Kreis/Balken, Entwicklung → Linie, Vergleich → Balken.",
            },
            {
              id: "imp_de2-pr-1_16",
              q: "Was bedeutet 'roter Faden'?",
              options: [
                "Das rote Signalkabel, mit dem der Beamer an den Präsentationsrechner angeschlossen wird",
                "Eine Regel, nach der in längeren Vorträgen feste Pausen eingeplant werden müssen",
                "Eine nachvollziehbare Struktur, bei der jeder Teil logisch zum nächsten führt",
                "Die einheitliche rote Schriftfarbe für Überschriften auf allen Folien",
              ],
              correct: 2,
              explain:
                "Überleitungen ('Nachdem wir X gesehen haben, nun Y') machen den Faden hörbar.",
            },
            {
              id: "imp_de2-pr-1_17",
              q: "Wie viel Sprechtempo und Pausen sind angemessen?",
              options: [
                "Durchgehend monotones Sprechen ohne jede Pause",
                "Ruhiges Tempo mit bewussten Pausen nach Kernaussagen",
                "So schnell wie möglich, um Zeit zu sparen",
                "Jedes einzelne Wort gleich stark betonen",
              ],
              correct: 1,
              explain:
                "Pausen wirken souverän. Pausen geben dem Publikum Zeit zum Verarbeiten und dem Redner Zeit zum Atmen.",
            },
            {
              id: "imp_de2-pr-1_18",
              q: "Welche Vorbereitung gehört zur Technik-Checkliste?",
              options: [
                "Den Raum bewusst erst unmittelbar beim Vortrag zum ersten Mal betreten, um spontan zu bleiben",
                "Keine Vorbereitung – moderne Präsentationstechnik funktioniert ohne Test zuverlässig",
                "Nur das Ladekabel für das eigene Handy einpacken, mehr Technik wird nicht benötigt",
                "Beamer/Anschluss testen, Präsentation zusätzlich offline/als PDF dabei, Plan B für Technikausfall",
              ],
              correct: 3,
              explain:
                "Adapter, zweites Speichermedium, Ausdrucke – wer Plan B hat, bleibt bei Pannen gelassen.",
            },
            {
              id: "imp_de2-pr-1_19",
              q: "Worauf zielt die Abschlussfolie sinnvollerweise?",
              options: [
                "Sämtliche verwendeten Quellen vollständig in Schriftgröße 8 auflisten",
                "Ein lustiges Meme",
                "Kernaussagen verdichten und zur Diskussion/zum nächsten Schritt überleiten",
                "'Danke für Ihre Aufmerksamkeit' als einziger Inhalt der letzten Folie",
              ],
              correct: 2,
              explain:
                "Das Fazit ist, was hängen bleibt – die letzte Folie darf ruhig die Kernbotschaft wiederholen.",
            },
          ],
        },
        {
          id: "de2-er-1",
          title: "Erörterung & Argumentation",
          content: [
            { type: "heading", value: "Arten der Erörterung" },
            {
              type: "text",
              value:
                "Lineare Erörterung: Nur eine Seite (Pro ODER Contra), stärkstes Argument am Schluss (Sanduhr-Prinzip). Dialektische Erörterung: Pro UND Contra, am Ende eigene Position. Textgebundene Erörterung: Sachtext analysieren und bewerten.",
            },
            { type: "heading", value: "Aufbau eines Arguments" },
            {
              type: "text",
              value:
                "These (Behauptung) + Begründung (Warum?) + Beispiel (Beleg) + Schlussfolgerung. Beispiel: Cloud-Lösungen sind für KMU sinnvoll (These), weil Skalierbarkeit steigt (Begründung). M365 senkte IT-Kosten um 30% (Beispiel). Daher empfiehlt sich Cloud-Migration (Schlussfolgerung).",
            },
            { type: "heading", value: "Typische FiSi-Themen" },
            {
              type: "text",
              value:
                "Cloud vs. On-Premises: Kosten, Kontrolle, Datenschutz, Skalierbarkeit. Open Source vs. proprietär: Kosten, Support, Sicherheit, Abhängigkeit. BYOD: Flexibilität vs. Sicherheitsrisiken. Homeoffice: Produktivität vs. Teamkommunikation. KI im IT-Support: Effizienz vs. Arbeitsplätze. Outsourcing vs. Inhouse-IT: Kosten vs. Kontrolle.",
            },
            { type: "heading", value: "Formulierungshilfen" },
            {
              type: "text",
              value:
                "Pro: Ein wesentlicher Vorteil ist... / Dafür spricht, dass... Contra: Dem steht entgegen, dass... / Kritiker wenden ein... Abwägen: Einerseits... andererseits... / Obwohl... ist dennoch... Fazit: Zusammenfassend lässt sich sagen... / Unter Abwägung aller Argumente...",
            },
            {
              type: "note",
              value:
                "Erörterungen kommen in Deutschklausuren vor. Immer beide Seiten kennen, strukturiert argumentieren, eigene Position begründen!",
            },
            { type: "heading", value: "Erörtern und Argumentieren: das B-A-B-Schema" },
            {
              type: "text",
              value:
                "Ein Argument ist mehr als eine Meinung – es besteht aus BEHAUPTUNG (These), ARGUMENT (Begründung mit „weil“) und BEISPIEL/BELEG (Fakt, Zahl, Erfahrung). Die lineare Erörterung entwickelt EINE Position mit gestaffelten Argumenten (stärkstes zum Schluss!), die dialektische wägt Pro und Contra ab (These → Antithese → begründete Synthese). Entkräften von Gegenargumenten gehört dazu: anerkennen („Richtig ist, dass…“), dann relativieren („allerdings…“). Im Berufsalltag ist das die DNA jeder Entscheidungsvorlage: Optionen, Kriterien, Abwägung, Empfehlung – exakt das Schema der AP2-Konzeptaufgaben („Beurteilen Sie…“). Sprachlich: sachlich statt polemisch, Konjunktionen als Wegweiser (zwar–aber, einerseits–andererseits, folglich), keine Killerphrasen („Das war schon immer so“).",
            },
            { type: "heading", value: "Übungsaufgabe: Kurz-Erörterung mit Schema" },
            {
              type: "text",
              value:
                "These: „Azubis sollten im Homeoffice arbeiten dürfen.“ Formuliere ein vollständiges Pro-Argument (B-A-B), ein Contra-Argument (B-A-B) und eine begründete Synthese in je 1–2 Sätzen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: PRO: Homeoffice fördert Selbstorganisation (B), weil Azubis lernen, Aufgaben eigenverantwortlich zu strukturieren (A) – wie es der spätere Berufsalltag verlangt; in Projektwochen zeigen Azubis im Homeoffice oft konzentriertere Doku-Arbeit (B/Beleg). CONTRA: Ausbildung lebt vom direkten Lernen (B), weil Fragen, Über-die-Schulter-Schauen und spontanes Erklären remote verloren gehen (A); gerade im 1. Lehrjahr entstehen Wissenslücken, wenn niemand daneben sitzt (Beispiel). SYNTHESE: Hybridmodell – Präsenz als Regel in der Grundausbildung, definierte Homeoffice-Tage für Doku- und Lernaufgaben ab dem 2. Lehrjahr, gekoppelt an Erreichbarkeitsregeln und Lernziele.",
            },
          ],
          quiz: [
            {
              id: "imp_de2-er-1_0",
              q: "Dialektische Erörterung?",
              options: [
                "Nur Contra",
                "Ohne Meinung",
                "Nur Pro",
                "Pro UND Contra, dann eigene Position",
              ],
              correct: 3,
              explain: "Beide Seiten, dann Stellung beziehen.",
            },
            {
              id: "imp_de2-er-1_1",
              q: "Argument-Aufbau?",
              options: [
                "These + Begründung + Beispiel + Schluss",
                "Nur Beispiel",
                "Nur Meinung",
                "Nur These",
              ],
              correct: 0,
              explain: "Strukturiertes Argument.",
            },
            {
              id: "imp_de2-er-1_2",
              q: "Sanduhr-Prinzip?",
              options: [
                "Alle Argumente gleich gewichten",
                "Nur die eigenen Argumente nennen",
                "Zufällige Reihenfolge",
                "Gegenargumente absteigend, eigene Argumente aufsteigend – das stärkste am Schluss",
              ],
              correct: 3,
              explain:
                "Sanduhr: erst die Gegenseite (mit ihrem stärksten Argument beginnend, absteigend), dann die eigenen Argumente aufsteigend – das stärkste eigene Argument bleibt als Schlusspunkt hängen.",
            },
            {
              id: "imp_de2-er-1_3",
              q: "Textgebundene Erörterung?",
              options: [
                "Ohne Text",
                "Freies Thema",
                "Nur Zusammenfassung",
                "Sachtext analysieren und Position bewerten",
              ],
              correct: 3,
              explain: "Ausgehend von einem Text.",
            },
            {
              id: "imp_de2-er-1_4",
              q: "Cloud vs On-Prem: Pro Cloud?",
              options: [
                "Immer billiger",
                "Weniger sicher",
                "Keine Wartung",
                "Skalierbar, kosteneffizient",
              ],
              correct: 3,
              explain: "Skalierbarkeit.",
            },
            {
              id: "imp_de2-er-1_5",
              q: "BYOD Contra?",
              options: ["Billiger", "Flexibler", "Nur Vorteile", "Sicherheitsrisiken, Datenschutz"],
              correct: 3,
              explain: "Risiken.",
            },
            {
              id: "imp_de2-er-1_6",
              q: "Open Source Pro?",
              options: [
                "Besserer Support",
                "Immer besser",
                "Kostenfrei, anpassbar, kein Vendor Lock-in",
                "Immer sicherer",
              ],
              correct: 2,
              explain: "Keine Lizenzkosten.",
            },
            {
              id: "imp_de2-er-1_7",
              q: "Open Source Contra?",
              options: ["Kein garantierter Support", "Langsam", "Unsicher", "Kostenlos"],
              correct: 0,
              explain: "Support-Risiko.",
            },
            {
              id: "imp_de2-er-1_8",
              q: "Homeoffice Pro?",
              options: [
                "Immer produktiver",
                "Mehr Teamwork",
                "Flexibilität, Work-Life-Balance",
                "Billiger für AN",
              ],
              correct: 2,
              explain: "Flexibilität.",
            },
            {
              id: "imp_de2-er-1_9",
              q: "Erörterung Schluss?",
              options: [
                "Wiederholung",
                "Neue Argumente",
                "Offenes Ende",
                "Fazit: Eigene Position begründet",
              ],
              correct: 3,
              explain: "Position mit Begründung.",
            },
            {
              id: "imp_de2-er-1_10",
              q: "Worin unterscheidet sich die lineare von der dialektischen Erörterung?",
              options: [
                "Es gibt keinen inhaltlichen Unterschied; beide Begriffe bezeichnen dieselbe Aufsatzform mit anderem Namen",
                "Linear stützt eine These mit gesteigerten Argumenten; dialektisch wägt Pro und Contra ab und endet mit Synthese",
                "Die dialektische Erörterung verzichtet vollständig auf Argumente und schildert nur persönliche Eindrücke",
                "Die lineare Erörterung wird ausschließlich mündlich vorgetragen, die dialektische immer schriftlich verfasst",
              ],
              correct: 1,
              explain:
                "Dialektisch nach dem Sanduhrprinzip: Die Gegenposition zuerst, die eigene Position zuletzt – sie wirkt nach.",
            },
            {
              id: "imp_de2-er-1_11",
              q: "Wie ist ein vollständiges Argument aufgebaut?",
              options: [
                "Ein einzelnes Beispiel ohne jede Begründung",
                "Nur eine Behauptung, kräftig formuliert",
                "These/Behauptung → Begründung → Beleg/Beispiel",
                "Drei Behauptungen direkt hintereinander",
              ],
              correct: 2,
              explain:
                "Das B-B-B-Schema (Behauptung, Begründung, Beispiel) trägt jede Erörterung – und jede Kundenargumentation.",
            },
            {
              id: "imp_de2-er-1_12",
              q: "Welche Argumenttypen werden unterschieden?",
              options: [
                "Lange Haupt- und kurze Nebenargumente je nach Redezeit",
                "Ausschließlich gute und schlechte Argumente nach Wirkung",
                "Laut vorgetragene und leise vorgetragene Argumente",
                "U. a. Fakten-, Autoritäts-, Erfahrungs- und Plausibilitätsargument",
              ],
              correct: 3,
              explain:
                "Faktenargumente (belegbare Daten) wiegen am schwersten; Autoritätsargumente stehen und fallen mit der Quelle.",
            },
            {
              id: "imp_de2-er-1_13",
              q: "Wie ordnet man Argumente in der linearen Erörterung an?",
              options: [
                "Das stärkste zuerst, dann abfallend",
                "Steigernd – das stärkste Argument zum Schluss",
                "Alphabetisch nach dem Anfangsbuchstaben",
                "In zufälliger Reihenfolge ohne Systematik",
              ],
              correct: 1,
              explain: "Das letzte Argument bleibt im Gedächtnis (Rezenzeffekt).",
            },
            {
              id: "imp_de2-er-1_14",
              q: "Was gehört in die Einleitung einer Erörterung?",
              options: [
                "Alle Pro- und Contra-Argumente bereits in Kurzform, damit der Hauptteil entfallen kann",
                "Aufhänger (Anlass, Zitat, Zahl), Hinführung zum Thema und die Fragestellung",
                "Das vollständige Fazit mit der eigenen Position, damit der Leser das Ergebnis sofort kennt",
                "Eine persönliche Abwertung der Gegenposition, um die eigene Haltung von Beginn an durchzusetzen",
              ],
              correct: 1,
              explain:
                "Die Einleitung weckt Interesse und nennt die Leitfrage – sie nimmt die Antwort noch nicht vorweg.",
            },
            {
              id: "imp_de2-er-1_15",
              q: "Welche Funktion haben Überleitungen?",
              options: [
                "Sie füllen den Text auf die geforderte Seitenzahl auf, ohne Inhalt zu ergänzen",
                "Sie ersetzen eigenständige Argumente, sodass weniger Belege nötig sind",
                "Sie verbinden Argumente logisch und machen die Struktur für Lesende sichtbar",
                "Sie haben keine Funktion und sollten beim Überarbeiten gestrichen werden",
              ],
              correct: 2,
              explain:
                "'Schwerer als … wiegt jedoch …' signalisiert Gewichtung und hält den roten Faden.",
            },
            {
              id: "imp_de2-er-1_16",
              q: "Was leistet der Schluss einer dialektischen Erörterung?",
              options: [
                "Wiederholung der Einleitung wortgleich",
                "Begründete eigene Stellungnahme bzw. Synthese",
                "Ein völlig neues Thema",
                "Eine offene Frage ohne Position",
              ],
              correct: 1,
              explain:
                "Keine neuen Argumente mehr. Abwägen heißt nicht ausweichen: Am Ende steht eine begründete Position oder ein vermittelnder dritter Weg.",
            },
            {
              id: "imp_de2-er-1_17",
              q: "Wie entkräftet man ein Gegenargument fair?",
              options: [
                "Es korrekt wiedergeben und dann mit stärkeren Gründen oder Belegen relativieren",
                "Es bewusst überspitzen und übertreiben, bis es für das Publikum lächerlich wirkt",
                "Es im eigenen Text vollständig verschweigen, damit es gar nicht erst auffällt",
                "Die Glaubwürdigkeit der Person angreifen, statt sich mit dem Argument zu befassen",
              ],
              correct: 0,
              explain:
                "Strohmann-Argumente (verzerrte Wiedergabe) und Ad-hominem-Angriffe sind unsachlich und fallen auf den Autor zurück.",
            },
            {
              id: "imp_de2-er-1_18",
              q: "Welcher Stil gehört in eine Erörterung?",
              options: [
                "Sachlich, präzise, in vollständigen Sätzen",
                "Ironie als Hauptstilmittel",
                "Stichpunkte genügen",
                "Möglichst emotional und übertreibend",
              ],
              correct: 0,
              explain:
                "Umgangssprache und Polemik vermeiden. Die Stärke liegt in den Argumenten, nicht in der Lautstärke – das gilt im Aufsatz wie in der Kunden-E-Mail.",
            },
            {
              id: "imp_de2-er-1_19",
              q: "Warum ist diese Textform für IT-Berufe praxisrelevant?",
              options: [
                "Sie ist nur für Deutschlehrer relevant, die Erörterungen im Unterricht korrigieren",
                "Sie wird nur in Romanen und literarischen Texten verwendet, nicht im Berufsalltag",
                "Abwägende Argumentation braucht man in Angeboten, Entscheidungsvorlagen und der AP2-Doku",
                "Sie ist es nicht – im IT-Alltag werden ausschließlich Stichpunkte geschrieben",
              ],
              correct: 2,
              explain:
                "Lösungsvarianten begründen. 'Variante A vs. B mit begründeter Empfehlung' ist nichts anderes als eine dialektische Erörterung in Fachform.",
            },
          ],
        },
      ],
    },
    {
      id: "en2-doc",
      title: "Technical Documentation",
      lessons: [
        {
          id: "en2-doc-1",
          title: "Writing IT Documentation in English",
          content: [
            { type: "heading", value: "Common Documentation Types" },
            {
              type: "text",
              value:
                "SOP (Standard Operating Procedure): Step-by-step instructions for routine tasks. Runbook: Procedures for incident response and system administration. Knowledge Base Article: Solution to a specific problem, searchable. Change Request: Formal proposal for system changes with risk assessment.",
            },
            { type: "heading", value: "Writing Tips" },
            {
              type: "text",
              value:
                "Use imperative mood for instructions: 'Click Settings' not 'You should click Settings'. Use numbered steps for procedures. Include screenshots where helpful. Write for your audience: technical depth for admins, simple language for end users. Version your documents. Common phrases: 'Navigate to...', 'Verify that...', 'In the event of...', 'Refer to section...', 'Prerequisites: ...'.",
            },
            { type: "heading", value: "Why documentation in English matters" },
            {
              type: "text",
              value:
                "In vielen Betrieben ist Englisch die Doku-Sprache: internationale Teams, Hersteller-Dokus, Ticketsysteme mit ausländischen Dienstleistern. Gute technische Doku auf Englisch folgt denselben Regeln wie auf Deutsch – nur die Stolpersteine sind andere: False Friends (actual = tatsächlich, nicht aktuell; eventually = schließlich, nicht eventuell; become = werden, nicht bekommen), einfache Verbformen (Simple Present für Abläufe: 'The server restarts every night at 2 a.m.'), Imperativ für Anleitungen ('Open the settings. Click Save.') und kurze Sätze ohne Schachtelung.",
            },
            { type: "heading", value: "Useful phrases für IT-Dokumentation" },
            {
              type: "list",
              value: [
                "Purpose: 'This document describes how to …' / 'This guide covers …'",
                "Prerequisites: 'Before you start, make sure that …'",
                "Steps: 'First …, then …, finally …' – ein Schritt pro Satz, nummeriert.",
                "Results: 'The system now displays …' / 'You should see …'",
                "Troubleshooting: 'If the error persists, check …'",
                "Warnings: 'Caution: This step deletes all data.'",
              ],
            },
            { type: "heading", value: "Übungsaufgabe: Anleitung übersetzen" },
            {
              type: "text",
              value:
                "Übersetze prüfungstauglich: „Öffnen Sie die Systemsteuerung. Klicken Sie auf Netzwerk. Notieren Sie die IP-Adresse. Falls das Feld leer ist, starten Sie den Dienst neu.“",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: 'Open the Control Panel. Click Network. Write down the IP address. If the field is empty, restart the service.' – Bewertungspunkte: Imperativ statt 'You must open', korrekte Fachbegriffe (Control Panel, service), 'write down' statt wörtlichem 'note', bedingter Satz mit if. Typische Fehler: 'please' in jeder Zeile (unüblich in Doku), 'restart the service new' (Denglisch).",
            },
          ],
          quiz: [
            {
              id: "imp_en2-doc-1_0",
              q: "SOP stands for?",
              options: [
                "Secure Online Protocol",
                "Server Output Process",
                "System Operating Plan",
                "Standard Operating Procedure",
              ],
              correct: 3,
              explain: "Standard Operating Procedure.",
            },
            {
              id: "imp_en2-doc-1_1",
              q: "SOP = ?",
              options: [
                "Server Output Process",
                "System Operating Plan",
                "Standard Operating Procedure",
                "Secure Online Protocol",
              ],
              correct: 2,
              explain: "Standard Operating Procedure = Standardarbeitsanweisung.",
            },
            {
              id: "imp_en2-doc-1_2",
              q: "Use imperative mood means?",
              options: ["Konjunktiv", "Frage stellen", "Passiv", "Befehlsform: Click Settings"],
              correct: 3,
              explain: "Befehlsform für Anleitungen: Click, Enter, Navigate to...",
            },
            {
              id: "imp_en2-doc-1_3",
              q: "Knowledge Base Article?",
              options: [
                "Lösung für ein bestimmtes Problem, durchsuchbar",
                "Ausführlicher Erfahrungsbericht in erzählender Form",
                "Öffentlicher Wikipedia-Artikel über das Unternehmen",
                "Vertragsdokument mit Support- und Reaktionszeiten",
              ],
              correct: 0,
              explain: "KB Article = dokumentierte Lösung für ein konkretes Problem.",
            },
            {
              id: "imp_en2-doc-1_4",
              q: "Prerequisites means?",
              options: ["Probleme", "Voraussetzungen", "Ergebnisse", "Nachbereitung"],
              correct: 1,
              explain: "Prerequisites = Voraussetzungen, die erfüllt sein müssen.",
            },
            {
              id: "imp_en2-doc-1_5",
              q: "Troubleshooting guide: First step?",
              options: ["Call support", "Reboot", "Buy new hardware", "Describe the symptoms"],
              correct: 3,
              explain: "Erst Symptome beschreiben, dann systematisch eingrenzen.",
            },
            {
              id: "imp_en2-doc-1_6",
              q: "README?",
              options: ["Lizenz", "Changelog", "Backup", "Projektbeschreibung + Setup"],
              correct: 3,
              explain: "Erste Anlaufstelle.",
            },
            {
              id: "imp_en2-doc-1_7",
              q: "Changelog?",
              options: ["Install", "Änderungen pro Version", "Fehlerlog", "Handbuch"],
              correct: 1,
              explain: "Was geändert.",
            },
            {
              id: "imp_en2-doc-1_8",
              q: "API Docs?",
              options: ["Nur intern", "Endpoints, Parameter, Responses", "Marketing", "Kommentare"],
              correct: 1,
              explain: "Vollständig.",
            },
            {
              id: "imp_en2-doc-1_9",
              q: "Runbook?",
              options: ["Test", "Code", "Plan", "Betriebsanleitungen für Admins"],
              correct: 3,
              explain: "Operative Anleitungen.",
            },
            {
              id: "imp_en2-doc-1_10",
              q: "Which style is standard for written instructions in English documentation?",
              options: [
                "Questions only: 'Could you maybe open the settings?'",
                "Past tense narrative: 'The settings were opened.'",
                "Passive voice everywhere: 'Network should be clicked.'",
                "Imperative mood: 'Open the settings. Click Network.'",
              ],
              correct: 3,
              explain:
                "Kurz, direkt, ein Schritt pro Satz – wie im Deutschen, nur mit 'Click', 'Open', 'Run'.",
            },
            {
              id: "imp_en2-doc-1_11",
              q: "How should acronyms be handled?",
              options: [
                "Spell out at first use: 'Virtual Private Network (VPN)'",
                "Use only German acronyms and avoid English ones",
                "Invent new abbreviations in every chapter as needed",
                "Never explain them; readers should look them up",
              ],
              correct: 0,
              explain:
                "Then use the acronym. Gilt für jede englische Doku und auch für README-Dateien.",
            },
            {
              id: "imp_en2-doc-1_12",
              q: "What belongs in a 'Prerequisites' section?",
              options: [
                "Required access rights, software versions and conditions before starting",
                "Light jokes and anecdotes that help the reader relax before starting",
                "A complete overview of the company history and its founders",
                "The author's full CV including all previous employers",
              ],
              correct: 0,
              explain:
                "'Prerequisites: admin rights, PowerShell 7+, network access to srv01' verhindert gescheiterte Anläufe.",
            },
            {
              id: "imp_en2-doc-1_13",
              q: "How are warnings conventionally marked in English docs?",
              options: [
                "Labelled blocks like NOTE / CAUTION / WARNING placed before the risky step",
                "In light grey text that is barely visible on the page",
                "Directly after the risky step, once the reader has tried it",
                "In footnotes at the bottom of the page to keep the layout clean",
              ],
              correct: 0,
              explain:
                "Aufsteigende Schwere: Note (Hinweis) → Caution (Sachschaden möglich) → Warning (ernste Folgen).",
            },
            {
              id: "imp_en2-doc-1_14",
              q: "Which heading style keeps structure parallel?",
              options: [
                "Avoid using any headings so the document reads as one continuous, uninterrupted text",
                "Same grammatical form: 'Installing the agent', 'Configuring the service', 'Testing the setup'",
                "Capitalize random words in each heading to draw the reader's attention to key terms",
                "Deliberately mixed forms: 'Install', 'How one configures the service', 'The test procedure'",
              ],
              correct: 1,
              explain:
                "Parallele Überschriften machen das Dokument scanbar – Leser springen, sie lesen nicht linear.",
            },
            {
              id: "imp_en2-doc-1_15",
              q: "What does 'one action per step' mean in numbered instructions?",
              options: [
                "All numbered steps are optional for the reader",
                "The numbering is purely decorative formatting",
                "Each numbered step bundles at least five actions",
                "Each numbered step contains exactly one user action",
              ],
              correct: 3,
              explain: "'1. Open the console. 2. Select File > Import.' – prüfbar und abhakbar.",
            },
            {
              id: "imp_en2-doc-1_16",
              q: "Why should screenshots in English docs be localized or neutral?",
              options: [
                "Colours are taboo",
                "Screenshots are forbidden",
                "Readers may use a different language UI",
                "Localization is impossible",
              ],
              correct: 2,
              explain:
                "Text references like 'click Save' must match what they see. Bei mehrsprachigen Umgebungen Menüpfade zusätzlich als Text nennen: 'File > Save (Datei > Speichern)'.",
            },
            {
              id: "imp_en2-doc-1_17",
              q: "Which sentence is concise documentation style?",
              options: [
                "'Service restart configuration change yes.'",
                "'Restart the service after changing the configuration.'",
                "'Maybe restart sometimes.'",
                "'It is to be noted that in the event of the configuration having been changed, a restart might possibly be considered.'",
              ],
              correct: 1,
              explain: "Plain English: kurze Sätze, aktive Verben, keine Füllfloskeln.",
            },
            {
              id: "imp_en2-doc-1_18",
              q: "What is a changelog?",
              options: [
                "An error message shown to the user when an update fails",
                "A chronological list of changes per version of the software or document",
                "A type of firewall that logs every change to network traffic",
                "A meeting protocol that records decisions made during sprint reviews",
              ],
              correct: 1,
              explain:
                "'v1.2 – Added LDAP support; fixed login timeout' – Pflicht für nachvollziehbare Releases und Doku-Stände.",
            },
            {
              id: "imp_en2-doc-1_19",
              q: "Where do you document known limitations?",
              options: [
                "Only verbally in team meetings, so nothing is written down",
                "In a dedicated 'Known issues / Limitations' section so users are not surprised",
                "In the marketing brochure, so the sales team can present them to customers",
                "Nowhere – limitations should be hidden so the product looks flawless",
              ],
              correct: 1,
              explain:
                "Ehrliche Doku spart Support-Tickets: 'Known issue: sync fails if the file name contains an emoji.'",
            },
          ],
        },
      ],
    },
    {
      id: "de3-proj",
      title: "Projektdokumentation & Fachgespräch",
      lessons: [
        {
          id: "de3-pj-1",
          title: "AP2-Dokumentation schreiben",
          content: [
            { type: "heading", value: "Aufbau der Projektdokumentation" },
            {
              type: "text",
              value:
                "Deckblatt, Inhaltsverzeichnis, Projektumfeld (Unternehmen, Abteilung), Ist-Analyse, Soll-Konzept, Projektplanung (PSP, Zeitplan, Kosten), Durchführung (technische Umsetzung), Qualitätssicherung, Übergabe/Einweisung, Fazit, Anhang (Configs, Screenshots, Netzpläne).",
            },
            { type: "heading", value: "Häufige Fehler" },
            {
              type: "text",
              value:
                "Zu technisch ohne Kontext (Prüfer müssen den Geschäftszweck verstehen). Keine Entscheidungsbegründungen (WARUM diese Lösung?). Zeitplan nicht realistisch. Keine Wirtschaftlichkeitsbetrachtung. Schlechte Formatierung/Struktur. Anhang vergessen.",
            },
            { type: "heading", value: "Fachgespräch vorbereiten" },
            {
              type: "text",
              value:
                "15 Minuten, Prüfer stellen Fragen zum Projekt und darüber hinaus. Typisch: Alternative Lösungen? Warum nicht X statt Y? Was würdest du anders machen? Sicherheitsaspekte? Skalierbarkeit? Kosten? Souverän auf Rückfragen reagieren, Wissenslücken ehrlich zugeben.",
            },
            { type: "heading", value: "Die Projektdokumentation: Aufbau, der Punkte bringt" },
            {
              type: "text",
              value:
                "Die Dokumentation der betrieblichen Projektarbeit ist eine PRÜFUNGSLEISTUNG mit Bewertungsraster – kein Erlebnisbericht. Der rote Faden: Ausgangssituation und Ist-Analyse (messbar!), Ziele SMART, Alternativenvergleich mit begründeter Entscheidung (Nutzwertanalyse), geplanter vs. tatsächlicher Ablauf (Abweichungen begründen – sie sind normal!), Wirtschaftlichkeitsbetrachtung (Kosten inkl. eigener Arbeitszeit vs. Nutzen, Amortisation), Soll-Ist-Vergleich gegen die Ziele, Fazit mit Ausblick. Sprachlich: sachlicher Berichtsstil im Präteritum oder Perfekt, Ich-Form ist erlaubt und erwünscht („Ich entschied mich für…, weil…“), Fachbegriffe korrekt, jede Grafik/Tabelle nummeriert, beschriftet und im Text referenziert.",
            },
            {
              type: "list",
              value: [
                "Anhang gehört NICHT zur Seitenzahl – Netzpläne, Angebote, Screenshots dorthin auslagern.",
                "Quellen sauber angeben – auch für Preise und Herstellerangaben.",
                "Kundendaten anonymisieren (Firma X, Herr M.) – Datenschutz gilt auch in der Doku.",
                "Vor Abgabe: Rechtschreibprüfung UND eine fachfremde Person lesen lassen (Verständlichkeitstest).",
              ],
            },
            { type: "heading", value: "Übungsaufgabe: Abweichung professionell dokumentieren" },
            {
              type: "text",
              value:
                "In deinem Projekt kam die bestellte Hardware eine Woche zu spät, du hast die Zeit mit dem Vorziehen der Dokumentation und Tests in der Testumgebung überbrückt. Formuliere den Doku-Absatz dazu (3–5 Sätze, Berichtsstil).",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (Beispiel): „Abweichend von der Planung verzögerte sich die Lieferung der Server-Hardware um fünf Arbeitstage (geplant: KW 12, tatsächlich: KW 13). Um den Endtermin nicht zu gefährden, zog ich die für KW 13 geplante Erstellung der Dokumentationsstruktur sowie die Vorbereitung der Testfälle vor. Die Installation führte ich nach Lieferung in KW 13 durch; durch die vorgezogenen Arbeiten blieb der Gesamtpuffer erhalten und der Endtermin wurde gehalten. Für Folgeprojekte empfehle ich, bei diesem Lieferanten eine Lieferzeitreserve von einer Woche einzuplanen.“ – Prüfer honorieren: konkrete Zahlen, aktive Gegenmaßnahme, Wirkung auf den Termin, Lessons Learned.",
            },
          ],
          quiz: [
            {
              id: "imp_de3-pj-1_0",
              q: "Max. Umfang AP2-Doku?",
              options: ["30 Seiten", "5 Seiten", "10 Seiten", "15 Seiten + Anhang"],
              correct: 3,
              explain: "15 Seiten plus Anhang.",
            },
            {
              id: "imp_de3-pj-1_1",
              q: "Häufiger Doku-Fehler?",
              options: [
                "Zu bunt",
                "Zu kurz",
                "Keine Entscheidungsbegründungen",
                "Zu viele Anhänge",
              ],
              correct: 2,
              explain:
                "WARUM diese Lösung? Prüfer wollen wissen, WARUM du dich für diese Lösung entschieden hast.",
            },
            {
              id: "imp_de3-pj-1_2",
              q: "Fachgespräch: Typische Frage?",
              options: [
                "Wie heißt dein Chef?",
                "Alternative Lösungen? Warum nicht X?",
                "Was ist dein Hobby?",
                "Wie alt bist du?",
              ],
              correct: 1,
              explain: "Prüfer fragen nach Alternativen, Sicherheit, Skalierbarkeit, Kosten.",
            },
            {
              id: "imp_de3-pj-1_3",
              q: "Wirtschaftlichkeitsbetrachtung in der Doku?",
              options: [
                "Sollte enthalten sein (TCO, ROI)",
                "Optional",
                "Nur bei BWL-Projekten",
                "Verboten",
              ],
              correct: 0,
              explain: "Kosten-Nutzen-Analyse zeigt wirtschaftliches Verständnis.",
            },
            {
              id: "imp_de3-pj-1_4",
              q: "Wie auf Wissenslücken im Fachgespräch reagieren?",
              options: [
                "Schweigen",
                "Thema wechseln",
                "Ehrlich zugeben und logisch herleiten",
                "Raten",
              ],
              correct: 2,
              explain: "Ehrlich sagen, dass man es nicht sicher weiß, dann logisch herleiten.",
            },
            {
              id: "imp_de3-pj-1_5",
              q: "Soll-Ist-Vergleich in Doku?",
              options: ["Nur bei Abweichung", "Geplant vs. tatsächlich", "Nur mündlich", "Unnötig"],
              correct: 1,
              explain:
                "Zeit, Kosten, Ergebnis. Prüfer wollen sehen: Was war geplant, was wurde erreicht?",
            },
            {
              id: "imp_de3-pj-1_6",
              q: "Projektantrag?",
              options: ["Name", "Thema, Zeitplan, Kosten, Nutzen", "Code", "Titel"],
              correct: 1,
              explain: "Was, warum, wie lang.",
            },
            {
              id: "imp_de3-pj-1_7",
              q: "Deckblatt?",
              options: [
                "Nur Titel",
                "Titel, Name, Firma, Prüfungsnr, Datum",
                "Unnötig",
                "Optional",
              ],
              correct: 1,
              explain: "IHK-Pflichtangaben.",
            },
            {
              id: "imp_de3-pj-1_8",
              q: "Quellen?",
              options: ["Unnötig", "Nur Bücher", "Pflicht für alle Quellen", "Optional"],
              correct: 2,
              explain: "Alle angeben.",
            },
            {
              id: "imp_de3-pj-1_9",
              q: "Eigenständigkeitserklärung?",
              options: ["Nur AP1", "Optional", "Pflicht, unterschrieben", "Nur Uni"],
              correct: 2,
              explain: "Selbstständig verfasst.",
            },
            {
              id: "imp_de3-pj-1_10",
              q: "Welche Erzählperspektive/Zeitform ist für die AP2-Doku üblich?",
              options: [
                "Wilde Mischung aller Zeiten",
                "Durchgehend einheitlich",
                "Zukunftsform",
                "Nur wörtliche Rede",
              ],
              correct: 1,
              explain:
                "Verbreitet: Präteritum oder Präsens für den Projektverlauf, sparsame Ich-Form bzw. sachliche Formulierungen. Wichtiger als die Wahl ist die Konsistenz; viele Kammern akzeptieren maßvolle Ich-Form ('Ich entschied mich für …'), Hauptsache sachlich.",
            },
            {
              id: "imp_de3-pj-1_11",
              q: "Wie werden Abbildungen in der Doku korrekt eingesetzt?",
              options: [
                "Abbildungen sind in der Projektdokumentation grundsätzlich nicht zugelassen",
                "Nummeriert und beschriftet (Abb. 3: Netzplan) und im Text referenziert ('siehe Abb. 3')",
                "Sie werden ohne Nummerierung und Beschriftung an passender Stelle frei eingefügt",
                "Sie gehören ausschließlich in den Anhang und benötigen keinen Bezug im Text",
              ],
              correct: 1,
              explain:
                "Eine Abbildung ohne Textbezug ist Dekoration – Prüfer achten auf die Verzahnung von Text und Grafik.",
            },
            {
              id: "imp_de3-pj-1_12",
              q: "Wie geht man mit Fachbegriffen um, die der Prüfungsausschuss kennen dürfte?",
              options: [
                "Jeden einzelnen Fachbegriff ausführlich über mehrere Absätze erklären, auch etablierte Standardbegriffe wie LAN",
                "Standardbegriffe nutzen, projektspezifische oder mehrdeutige Begriffe kurz definieren bzw. ins Glossar aufnehmen",
                "Grundsätzlich nur englische Originalbegriffe verwenden, da deutsche Übersetzungen in Prüfungen unzulässig sind",
                "Fachbegriffe vollständig vermeiden und jeden Sachverhalt in umgangssprachlichen Umschreibungen wiedergeben",
              ],
              correct: 1,
              explain:
                "Zielgruppe ist fachkundig – aber Eigenentwicklungen, Produktnamen und Abkürzungen brauchen eine Einordnung.",
            },
            {
              id: "imp_de3-pj-1_13",
              q: "Warum müssen Entscheidungen in der Doku begründet werden?",
              options: [
                "Bewertet wird die begründete Auswahl (z. B. per Vergleich/Nutzwertanalyse), nicht nur das Ergebnis",
                "Begründungen sind unnötig, da die Prüfer ausschließlich den günstigsten Angebotspreis der Lösung bewerten",
                "Begründungen dienen vor allem dazu, die geforderte Mindestseitenzahl der Dokumentation zu erreichen",
                "Sie müssen nicht begründet werden, solange das Projektergebnis am Ende technisch funktioniert",
              ],
              correct: 0,
              explain:
                "'Ich wählte RAID 6, weil …' bringt Punkte; 'Es wurde RAID 6 verwendet' verschenkt sie.",
            },
            {
              id: "imp_de3-pj-1_14",
              q: "Wie zitiert man fremde Quellen in der Projektdoku?",
              options: [
                "Nur den reinen Link angeben, ohne Abrufdatum oder Autor, da URLs bereits eindeutig genug sind",
                "Fremde Quellen sind in der Projektdokumentation verboten und führen zur Abwertung der Arbeit",
                "Gar nicht zitieren – die Nennung fremder Quellen wirkt unselbstständig und mindert die Bewertung",
                "Einheitlich kennzeichnen (Fußnote oder Kurzbeleg) und im Quellenverzeichnis vollständig angeben",
              ],
              correct: 3,
              explain:
                "Auch Hersteller-Doku und interne Wikis sind Quellen; ungekennzeichnete Übernahmen gelten als Täuschungsversuch.",
            },
            {
              id: "imp_de3-pj-1_15",
              q: "Was tun, wenn die Doku das Seitenlimit überschreitet?",
              options: [
                "Kürzen und auslagern: Details in den Anhang, Redundanzen streichen",
                "Die Seitenränder auf null reduzieren, um mehr Text unterzubringen",
                "Das Limit ignorieren, da die Inhalte wichtiger sind als Formalien",
                "Die Schriftgröße auf 8 Punkt verkleinern, bis der Text hineinpasst",
              ],
              correct: 0,
              explain:
                "Das Limit einhalten. Formatvorgaben sind Teil der Bewertung; Tricksereien fallen sofort auf und kosten Wohlwollen.",
            },
            {
              id: "imp_de3-pj-1_16",
              q: "Welche sprachlichen Fehler kosten in der Doku am meisten Eindruck?",
              options: [
                "Zu kurze Sätze – erst lange, verschachtelte Sätze wirken fachlich souverän",
                "Zu viele Absätze – ein durchgehender Textblock gilt als deutlich professioneller",
                "Unklare Bezüge, Umgangssprache, inkonsistente Begriffe und fehlende Korrektur (Rechtschreibung)",
                "Fett gedruckte Überschriften – Hervorhebungen gelten in Fachtexten als Stilbruch",
              ],
              correct: 2,
              explain:
                "Ein Begriff = eine Bedeutung: Wer 'Server', 'Host' und 'Maschine' wild mischt, verwirrt die Prüfer.",
            },
            {
              id: "imp_de3-pj-1_17",
              q: "Wie stellt man den Soll-Ist-Vergleich sprachlich überzeugend dar?",
              options: [
                "Nur die Erfolge nennen und diese in Superlativen ausführlich hervorheben",
                "Abweichungen bewusst weglassen, damit das Projekt fehlerfrei wirkt",
                "Abweichungen benennen und die Schuld dafür klar anderen Beteiligten zuweisen",
                "Abweichungen klar benennen, Ursache erklären, Konsequenz/Maßnahme ableiten",
              ],
              correct: 3,
              explain:
                "Ohne Beschönigung. Professioneller Umgang mit Abweichungen zeigt Reflexionsfähigkeit – ein Bewertungskriterium.",
            },
            {
              id: "imp_de3-pj-1_18",
              q: "Welche Rolle spielt der rote Faden entlang der Projektphasen?",
              options: [
                "Nur das Fazit ist relevant, die vorherigen Kapitel liest der Prüfungsausschuss nicht",
                "Die Projektphasen sind Geheimsache und dürfen in der Doku nicht offengelegt werden",
                "Die Kapitel folgen dem Projektablauf; jedes Kapitel knüpft erkennbar an das vorige an",
                "Die Kapitel dürfen beliebig springen, da der Leser die Reihenfolge selbst wählt",
              ],
              correct: 2,
              explain:
                "Ist-Analyse → Soll-Konzept → Entscheidung → Umsetzung → Test → Fazit: Wer die Kette bricht, verliert die Lesenden.",
            },
            {
              id: "imp_de3-pj-1_19",
              q: "Wann sollte das Korrekturlesen erfolgen – und durch wen?",
              options: [
                "Erst nach der Abgabe, wenn die Bewertung bereits läuft",
                "Gar nicht, da allein der fachliche Inhalt bewertet wird",
                "Mit zeitlichem Abstand UND zusätzlich durch eine zweite Person",
                "Unmittelbar nach dem letzten Satz und ausschließlich selbst",
              ],
              correct: 2,
              explain:
                "Betriebsblindheit ist real – Ausbilder oder Kollegen finden Fehler, die man selbst überliest.",
            },
          ],
        },
      ],
    },
    {
      id: "en3-job",
      title: "Job Applications & Presentations",
      lessons: [
        {
          id: "en3-jb-1",
          title: "IT Job Interviews in English",
          content: [
            { type: "heading", value: "Common Interview Questions" },
            {
              type: "text",
              value:
                "'Tell me about yourself' - Brief professional summary, not life story. 'Describe a challenging project' - Use STAR method: Situation, Task, Action, Result. 'Where do you see yourself in 5 years?' - Show ambition but be realistic. 'What is your experience with [technology]?' - Be honest, emphasize willingness to learn.",
            },
            { type: "heading", value: "Technical Interview Vocabulary" },
            {
              type: "text",
              value:
                "Troubleshooting, root cause analysis, scalability, high availability, disaster recovery, service level agreement, change management, continuous integration, infrastructure as code, containerization, orchestration, load balancing.",
            },
            { type: "heading", value: "Presenting in English" },
            {
              type: "text",
              value:
                "Opening: 'Good morning, my name is... and today I will present...' Structure: 'I have divided my presentation into three parts...' Transition: 'Moving on to...', 'Let me now turn to...' Closing: 'To summarize...', 'In conclusion...', 'Are there any questions?'",
            },
            { type: "heading", value: "Übungsaufgabe: Cover Letter vervollständigen" },
            {
              type: "text",
              value:
                "Schreibe für diese Anzeige die ersten beiden Absätze eines englischen Cover Letters (Bewerbung als Junior System Administrator bei der NordIT GmbH, gefunden auf LinkedIn; du bist FiSi im 3. Lehrjahr mit Praxiserfahrung in Windows-Server-Administration und einem Ausbildungsprojekt zur Backup-Umstellung). Nutze die Struktur: Einstieg mit Position und Fundort, dann Eignung mit konkretem Beispiel.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (Beispiel):\nDear Ms Berger,\n\nI am writing to apply for the position of Junior System Administrator at NordIT GmbH, which I found on LinkedIn. I am currently completing my apprenticeship as an IT specialist for system integration (Fachinformatiker Systemintegration) and will graduate in summer 2026.\n\nDuring my apprenticeship I have gained hands-on experience in administering Windows Server environments, including Active Directory and group policies. For my final project I redesigned the company's backup strategy, reducing restore time by more than half while meeting a defined RPO of one hour. I enjoy taking ownership of systems and documenting my work so that colleagues can build on it.\n\n(Weiter ginge es mit Motivation für NordIT und dem Schluss: 'I would welcome the opportunity to discuss … I am available for an interview at your convenience. Yours sincerely, …')",
            },
          ],
          quiz: [
            {
              id: "imp_en3-jb-1_0",
              q: "STAR method stands for?",
              options: [
                "System Testing And Reporting",
                "Standard Technical Assessment Review",
                "Situation, Task, Action, Result",
                "Strategic Technical Architecture Review",
              ],
              correct: 2,
              explain:
                "Situation, Task, Action, Result - structured way to answer behavioral questions.",
            },
            {
              id: "imp_en3-jb-1_1",
              q: "STAR = ?",
              options: [
                "Standard Technical Assessment",
                "System Testing And Reporting",
                "Strategic Technical Architecture",
                "Situation, Task, Action, Result",
              ],
              correct: 3,
              explain: "Structured answer method: Situation, Task, Action, Result.",
            },
            {
              id: "imp_en3-jb-1_2",
              q: "Tell me about yourself: Was NICHT sagen?",
              options: [
                "Komplette Lebensgeschichte seit Geburt",
                "Karriereziel",
                "Relevante Skills",
                "Berufliche Erfahrung",
              ],
              correct: 0,
              explain: "Kurze professionelle Zusammenfassung, nicht die ganze Lebensgeschichte.",
            },
            {
              id: "imp_en3-jb-1_3",
              q: "Scalability means?",
              options: ["Verfügbarkeit", "Skalierbarkeit", "Geschwindigkeit", "Sicherheit"],
              correct: 1,
              explain: "Scalability = Skalierbarkeit (System kann mit Wachstum umgehen).",
            },
            {
              id: "imp_en3-jb-1_4",
              q: "Moving on to... means?",
              options: ["Schluss", "Zurück zu", "Kommen wir nun zu...", "Wiederholung"],
              correct: 2,
              explain: "Überleitung in einer Präsentation: Kommen wir nun zu...",
            },
            {
              id: "imp_en3-jb-1_5",
              q: "Weakness-Frage: Gute Antwort?",
              options: [
                "Echte Schwäche + was ich dagegen tue",
                "Ich bin Perfektionist",
                "Ich habe keine",
                "Ich arbeite zu viel",
              ],
              correct: 0,
              explain: "Ehrliche Schwäche nennen und zeigen, wie man daran arbeitet.",
            },
            {
              id: "imp_en3-jb-1_6",
              q: "Salary expectations?",
              options: ["Recherchieren, Spanne nennen", "1 Mio", "Egal", "Die fragen"],
              correct: 0,
              explain: "Marktüblich.",
            },
            {
              id: "imp_en3-jb-1_7",
              q: "Why hire you?",
              options: ["Billig", "Skills + Mehrwert betonen", "Verzweifelt", "Kein Grund"],
              correct: 1,
              explain: "Passung zeigen.",
            },
            {
              id: "imp_en3-jb-1_8",
              q: "Questions for them?",
              options: ["Immer: Team, Projekte, Wachstum", "Nein", "Nie", "Nur Gehalt"],
              correct: 0,
              explain: "Zeigt Interesse.",
            },
            {
              id: "imp_en3-jb-1_9",
              q: "Thank-you E-Mail?",
              options: ["Best Practice nach Interview", "Nur Absage", "Sofort anrufen", "Unnötig"],
              correct: 0,
              explain: "Professionell.",
            },
            {
              id: "imp_en3-jb-1_10",
              q: "What is the standard structure of a cover letter?",
              options: [
                "Opening (position + where found) → why you fit (skills, examples) → motivation for the company → closing with call to action",
                "Salary demands first, followed by vacation expectations and a complete list of required benefits",
                "One short sentence stating you want the job; all details are only discussed in the interview",
                "A full autobiography covering childhood, school years and every previous job in complete detail",
              ],
              correct: 0,
              explain:
                "Genau diese Struktur stand im Unterrichtsmaterial: kurz, konkret, auf die Stelle zugeschnitten.",
            },
            {
              id: "imp_en3-jb-1_11",
              q: "How do you answer 'Tell me about yourself' effectively?",
              options: [
                "Stay silent and wait for a more specific question from the panel",
                "'Everything is in my CV, please read it yourself.'",
                "A 1–2 minute professional summary: background, key skills, why this role",
                "Your complete life story starting from kindergarten onwards",
              ],
              correct: 2,
              explain:
                "Present–Past–Future-Formel: aktuelle Rolle, relevante Erfahrung, warum diese Stelle.",
            },
            {
              id: "imp_en3-jb-1_12",
              q: "How do you talk about a weakness professionally?",
              options: [
                "Name a real but manageable weakness plus what you do about it",
                "Claim confidently that you have no weaknesses at all",
                "Blame former colleagues for anything that went wrong",
                "List ten serious flaws to demonstrate full honesty",
              ],
              correct: 0,
              explain:
                "'I used to underestimate documentation, so I now block time for it after each task' – ehrlich plus Entwicklung.",
            },
            {
              id: "imp_en3-jb-1_13",
              q: "What does 'notice period' mean?",
              options: [
                "The time between resigning and actually leaving the current job (Kündigungsfrist)",
                "The scheduled length of a job interview as stated in the invitation letter",
                "A paid trial day at the new company before signing the employment contract",
                "The daily lunch break that is guaranteed in the employment contract",
              ],
              correct: 0,
              explain:
                "Standardfrage: 'What is your notice period?' – 'Six weeks to the end of the quarter' wäre eine typische Antwort.",
            },
            {
              id: "imp_en3-jb-1_14",
              q: "How do you phrase salary expectations diplomatically?",
              options: [
                "'I want the maximum amount of money your company is able to pay me.'",
                "Refuse to discuss the topic and tell the interviewer the question is inappropriate",
                "'Based on my experience and the role, I am looking for a range of X to Y.'",
                "'I will accept whatever amount you decide to pay; salary does not matter to me.'",
              ],
              correct: 2,
              explain:
                "Eine recherchierte Spanne nennen und Verhandlungsbereitschaft signalisieren.",
            },
            {
              id: "imp_en3-jb-1_15",
              q: "What does 'to report to someone' mean in a job context?",
              options: [
                "To file a police report",
                "To have that person as your direct superior",
                "To greet them daily",
                "To write news articles",
              ],
              correct: 1,
              explain:
                "'You will report to the Head of IT' – Vokabular aus dem Hierarchie-Material (line manager, subordinate, flat hierarchy).",
            },
            {
              id: "imp_en3-jb-1_16",
              q: "What is the difference between a CV and a résumé?",
              options: [
                "They are legally distinct document types in Germany, regulated by separate employment laws",
                "A résumé is a short tailored summary (US, 1–2 pages); a CV can be longer and more complete (UK/academic)",
                "A résumé must be written in the third person, while a CV always uses the first person",
                "A CV must be handwritten and signed, while a résumé is always typed and unsigned",
              ],
              correct: 1,
              explain:
                "Für Bewerbungen in US-Unternehmen 'résumé' kurz halten; im UK-Kontext ist 'CV' der Normalbegriff.",
            },
            {
              id: "imp_en3-jb-1_17",
              q: "What does 'references available upon request' mean?",
              options: [
                "It is a software licensing term for requesting API references",
                "You refuse to give any references until a contract is signed",
                "You ask the hiring company to send you their own references first",
                "You can provide contacts who will vouch for your work if asked",
              ],
              correct: 3,
              explain: "Referenzen vorher um Erlaubnis bitten – und im Interview parat haben.",
            },
            {
              id: "imp_en3-jb-1_18",
              q: "Which question is smart to ask the interviewer?",
              options: [
                "'What would a successful first six months in this role look like?'",
                "It is smartest to ask no questions at all in an interview",
                "'When exactly is my next pay rise guaranteed in writing?'",
                "'How little can I work before anyone notices or complains?'",
              ],
              correct: 0,
              explain:
                "Eigene Fragen zeigen Interesse; nach Team, Onboarding und Erwartungen fragen wirkt professionell.",
            },
            {
              id: "imp_en3-jb-1_19",
              q: "What is an appropriate follow-up after an interview?",
              options: [
                "Calling the recruiter every day until they respond",
                "A short thank-you email within 1–2 days, restating interest",
                "Waiting in complete silence for a month before making contact",
                "Sending a gift basket to the hiring manager's office",
              ],
              correct: 1,
              explain:
                "'Thank you for taking the time … I remain very interested in the position' – kurz, höflich, einmal.",
            },
          ],
        },
      ],
    },
    {
      id: "ausb",
      title: "Ausbildung & Arbeitswelt",
      lessons: [
        {
          id: "ausb-bh-1",
          title: "Berichtsheft richtig führen",
          content: [
            { type: "heading", value: "Warum das Berichtsheft kein Papierkram ist" },
            {
              type: "text",
              value:
                "Der Ausbildungsnachweis (Berichtsheft) ist gesetzlich vorgeschrieben (§ 13 BBiG: Pflicht des Azubis, ihn zu führen; § 14 BBiG: Pflicht des Betriebs, dir dafür ZEIT WÄHREND der Ausbildungszeit zu geben und ihn kostenlos bereitzustellen). Er ist Zulassungsvoraussetzung zur Abschlussprüfung (§ 43 BBiG): Ohne geführten und vom Ausbilder abgezeichneten Nachweis wirst du nicht zur AP zugelassen. Er darf schriftlich ODER elektronisch geführt werden – das legt der Ausbildungsvertrag fest. Und er ist dein Beweismittel: Bei Streit, ob der Betrieb ausbildungsfremde Tätigkeiten verlangt hat, zählt, was im Heft steht.",
            },
            { type: "heading", value: "Was reingehört – und wie" },
            {
              type: "text",
              value:
                "Üblich ist der wöchentliche Nachweis (je nach Kammer auch täglich): stichwortartig die betrieblichen Tätigkeiten, die Berufsschulthemen und Unterweisungen/Schulungen, je mit Zeitanteilen. Gute Einträge sind KONKRET („VLAN 20 für Gäste-WLAN auf Core-Switch eingerichtet, Trunk zu SW-02 getaggt“ statt „Netzwerkarbeiten“) – so wird das Heft nebenbei zur persönlichen Wissensdatenbank und zur Steilvorlage fürs Fachgespräch in der AP2. Unterschrieben wird regelmäßig von dir und der Ausbilderin/dem Ausbilder; bei Minderjährigen sehen viele Vorlagen zusätzlich die Kenntnisnahme der Eltern vor. Faustregel der Kammern: zeitnah führen (wöchentlich), nicht monatelang „nachschreiben“.",
            },
            { type: "heading", value: "Typische Fragen & Fallen" },
            {
              type: "text",
              value:
                "Wer stellt das Heft? Der Betrieb, kostenlos. · Wann führst du es? Während der Arbeitszeit – Berichtsheft ist Ausbildungszeit, kein Feierabend-Hobby. · Was, wenn der Ausbilder nicht gegenzeichnet? Ansprechen, dann Ausbildungsberater der IHK einschalten – die Abzeichnung ist Betriebs-Pflicht. · Verloren? Aus Schulplänen, Ticketsystem und Kalender rekonstruieren und von der Ausbilderin bestätigen lassen. · KI-generierte Sammel-Einträge? Formal möglich, aber riskant: Im AP2-Fachgespräch fliegt auf, wessen Wissen im Heft steht. · Digitale Führung braucht regelmäßige elektronische Signatur/Bestätigung – dieselben Fristen wie auf Papier.",
            },
            {
              type: "note",
              value:
                "Merkzahlen: § 13 BBiG = DU führst · § 14 BBiG = BETRIEB gibt Zeit + stellt kostenlos · § 43 BBiG = ohne Nachweis keine Prüfungszulassung. Führen: wöchentlich, konkret, während der Arbeitszeit.",
            },
            { type: "heading", value: "Übungsaufgabe: Einträge verbessern" },
            {
              type: "text",
              value:
                "Verbessere die drei Berichtsheft-Einträge zu prüfungstauglichen Formulierungen: a) „PC gemacht“ (4 h) b) „Schule“ (8 h) c) „mit Kollegen mitgelaufen“ (3 h). Nenne außerdem, wer das Heft bereitstellt und was bei fehlender Führung zur Prüfung droht.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (Beispiele):\na) „Arbeitsplatz-PC aufgesetzt: Windows 11 per USB-Stick installiert, Domänenbeitritt, Standardsoftware per winget-Skript, Übergabeprotokoll erstellt“ (4 h).\nb) „Berufsschule LF3: Subnetting-Übungen (VLSM), Test OSI-Modell“ (8 h).\nc) „2nd-Level-Support begleitet: Ticketanalyse Druckerspooler, Eskalationsweg und Doku im Ticketsystem kennengelernt“ (3 h).\nBereitstellung: der Ausbildungsbetrieb, kostenlos (§ 14 BBiG). Ohne ordnungsgemäß geführten, abgezeichneten Nachweis keine Zulassung zur Abschlussprüfung (§ 43 BBiG).",
            },
          ],
          quiz: [
            {
              id: "imp_ausb-bh-1_0",
              q: "Das Berichtsheft ist Voraussetzung für …",
              options: [
                "die Zulassung zur Abschlussprüfung",
                "das Gehalt",
                "den Urlaub",
                "die Probezeit",
              ],
              correct: 0,
              explain: "§ 43 BBiG: Ohne geführten Ausbildungsnachweis keine Prüfungszulassung.",
            },
            {
              id: "imp_ausb-bh-1_1",
              q: "Wann darfst du das Berichtsheft führen?",
              options: [
                "nur am Wochenende",
                "während der Ausbildungszeit",
                "nur in der Berufsschule",
                "nach Feierabend",
              ],
              correct: 1,
              explain:
                "§ 14 BBiG verpflichtet den Betrieb, dir dafür Zeit während der Ausbildung zu geben.",
            },
            {
              id: "imp_ausb-bh-1_2",
              q: "Wer stellt das Berichtsheft (auch digital) bereit?",
              options: [
                "die IHK gegen Gebühr",
                "die Berufsschule",
                "der Betrieb, kostenlos",
                "du selbst",
              ],
              correct: 2,
              explain: "Kostenlose Bereitstellung ist Pflicht des Ausbildungsbetriebs.",
            },
            {
              id: "imp_ausb-bh-1_3",
              q: "Gute Berichtsheft-Einträge sind …",
              options: [
                "möglichst allgemein",
                "konkret mit Tätigkeit und Kontext",
                "nur Schulnoten",
                "einmal jährlich",
              ],
              correct: 1,
              explain:
                "Konkrete Einträge belegen Ausbildungsinhalte und helfen dir im AP2-Fachgespräch.",
            },
            {
              id: "imp_ausb-bh-1_4",
              q: "Der Ausbilder verweigert dauerhaft die Abzeichnung. Nächster sinnvoller Schritt?",
              options: [
                "Heft wegwerfen",
                "IHK-Ausbildungsberater einschalten",
                "selbst unterschreiben",
                "Prüfung ohne Heft antreten",
              ],
              correct: 1,
              explain: "Erst intern ansprechen, dann berät und vermittelt die zuständige Kammer.",
            },
            {
              id: "imp_ausb-bh-1_5",
              q: "Elektronische Führung des Nachweises ist …",
              options: [
                "verboten",
                "nur für FIAE erlaubt",
                "zulässig, wenn im Vertrag vereinbart",
                "Pflicht seit 2020",
              ],
              correct: 2,
              explain: "Schriftlich oder elektronisch – die Form regelt der Ausbildungsvertrag.",
            },
            {
              id: "imp_ausb-bh-1_6",
              q: "Welche Inhalte gehören NICHT ins Berichtsheft?",
              options: [
                "betriebliche Tätigkeiten",
                "Berufsschulthemen",
                "Unterweisungen",
                "Gehaltsverhandlungen der Kollegen",
              ],
              correct: 3,
              explain:
                "Tätigkeiten, Schule, Unterweisungen mit Zeitanteilen – keine fremden Personaldaten.",
            },
            {
              id: "imp_ausb-bh-1_7",
              q: "Üblicher Führungsrhythmus laut Kammern?",
              options: [
                "täglich oder wöchentlich, zeitnah",
                "monatlich rückwirkend",
                "nur vor Prüfungen",
                "jährlich",
              ],
              correct: 0,
              explain:
                "Zeitnah (meist wöchentlich) statt kurz vor der Prüfung monatelang rekonstruieren.",
            },
          ],
        },
        {
          id: "ausb-as-1",
          title: "Arbeitsschutz, Brandschutz & Unterweisung",
          content: [
            { type: "heading", value: "Das System dahinter" },
            {
              type: "text",
              value:
                "Arbeitsschutz ist Arbeitgeberpflicht: Das Arbeitsschutzgesetz (ArbSchG) verlangt eine Gefährdungsbeurteilung je Arbeitsplatz und daraus abgeleitete Maßnahmen; die DGUV-Vorschriften (Berufsgenossenschaften) konkretisieren sie. Jeder Beschäftigte muss vor Aufnahme der Tätigkeit und danach mindestens JÄHRLICH unterwiesen werden (bei Jugendlichen halbjährlich, § 29 JArbSchG) – deine Erstunterweisung am ersten Tag war also keine Kür. Die Berufsgenossenschaft ist zugleich Trägerin der gesetzlichen Unfallversicherung: Arbeits- und Wegeunfälle sind versichert, Beiträge zahlt allein der Arbeitgeber.",
            },
            { type: "heading", value: "Maßnahmen-Rangfolge: das TOP-Prinzip" },
            {
              type: "text",
              value:
                "Schutzmaßnahmen haben eine Pflicht-Reihenfolge: TECHNISCH vor ORGANISATORISCH vor PERSÖNLICH (TOP). Erst die Gefahr an der Quelle beseitigen (Absaugung, Abschrankung, RCD/FI-Schutzschalter), dann organisatorisch regeln (Zutrittsregeln, Wartungsintervalle, Zwei-Personen-Regel), erst zuletzt persönliche Schutzausrüstung (PSA: Handschuhe, ESD-Armband, Gehörschutz). Prüfungsklassiker: „Der Chef verteilt Gehörschutz statt die Maschine zu kapseln“ = Verstoß gegen die TOP-Rangfolge. IT-Bezug: ortsveränderliche elektrische Geräte werden regelmäßig geprüft (DGUV Vorschrift 3 – die Prüfplakette am Netzteil!), beim Öffnen von Netzteilen gilt: Nur Elektrofachkräfte, Kondensatoren können auch stromlos geladen sein.",
            },
            { type: "heading", value: "Brandschutz: Klassen, Löscher, Verhalten" },
            {
              type: "text",
              value:
                "Brandklassen: A (feste Stoffe: Holz, Papier), B (Flüssigkeiten), C (Gase), D (Metalle), F (Speisefette). Für Elektro-/IT-Brände nimmst du CO2-Löscher (rückstandsfrei – Pulver ruiniert jede Elektronik im Raum!) – Vorsicht in kleinen Räumen: Erstickungsgefahr. Serverräume schützt man mit Rauchansaugsystemen (RAS) und Gaslöschanlagen (z. B. Inertgas: Sauerstoffverdrängung). Verhalten im Brandfall: Ruhe bewahren → Menschen warnen/retten → Notruf 112 (Wer? Wo? Was? Wie viele? Warten auf Rückfragen) → Türen schließen, KEINE Aufzüge → Löschversuch nur ohne Eigengefährdung. Flucht- und Rettungswege sind freizuhalten – auch vom „kurz abgestellten“ Serverkarton.",
            },
            { type: "heading", value: "Bildschirmarbeit & Jugendliche" },
            {
              type: "text",
              value:
                "Für deinen Arbeitsplatz gilt die Arbeitsstättenverordnung samt Bildschirmarbeits-Anforderungen: ergonomische Richtwerte (u. a. ~500 Lux, Blickabstand, einstellbarer Stuhl – Details in der Ergonomie-Lektion LF2) und das Angebot einer Augenuntersuchung. Für Minderjährige gilt zusätzlich das JArbSchG: max. 8 h/Tag und 40 h/Woche, keine Nachtarbeit, mindestens 12 h Freizeit nach Arbeitsende, ärztliche Erstuntersuchung vor Ausbildungsbeginn.",
            },
            {
              type: "note",
              value:
                "Merkhilfen: TOP = Technisch → Organisatorisch → Persönlich (Reihenfolge ist Pflicht!). Elektronik brennt? CO2 statt Pulver. Unterweisung: vor Beginn + jährlich (Jugendliche halbjährlich). DGUV V3 = Prüfplakette an Geräten.",
            },
            { type: "heading", value: "Übungsaufgabe: Serverraum-Szenario" },
            {
              type: "text",
              value:
                "Im Serverraum riecht es verschmort; an einer Mehrfachsteckdose (ohne Prüfplakette, überlastet mit 2 USVs) glimmt es. a) Sofortmaßnahmen in sinnvoller Reihenfolge? b) Welcher Löscher wäre richtig, welcher fatal – warum? c) Welche zwei Verstöße gegen den Arbeitsschutz sind erkennbar, und wie wären sie nach TOP zu beheben?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Ruhe bewahren, Gefahrenbereich räumen/Kollegen warnen → wenn gefahrlos möglich Strom trennen (Sicherung) → Notruf 112 bzw. Brandmeldung → Löschversuch nur ohne Eigengefährdung → Tür schließen.\nb) Richtig: CO2 (rückstandsfrei, für Elektronik geeignet; in kleinen Räumen auf Erstickungsgefahr achten). Fatal: Pulverlöscher – das Löschpulver zerstört die gesamte Raumelektronik; Wasser an Elektroanlagen: Stromschlaggefahr.\nc) Verstöße: ungeprüftes Betriebsmittel (keine DGUV-V3-Plakette) und überlastete Mehrfachsteckdose. TOP: Technisch = feste, ausreichend dimensionierte Stromkreise/PDUs installieren, defekte Leiste entsorgen; Organisatorisch = Prüfintervalle und Verbot von Mehrfachsteckdosen-Kaskaden; Persönlich ist hier nachrangig.",
            },
          ],
          quiz: [
            {
              id: "imp_ausb-as-1_0",
              q: "Das TOP-Prinzip ordnet Maßnahmen in der Reihenfolge …",
              options: [
                "Technisch → Organisatorisch → Persönlich",
                "Persönlich → Organisatorisch → Technisch",
                "Teuer → Ordentlich → Praktisch",
                "beliebig",
              ],
              correct: 0,
              explain:
                "Gefahr an der Quelle beseitigen kommt vor Regeln, PSA ist das letzte Mittel.",
            },
            {
              id: "imp_ausb-as-1_1",
              q: "Für brennende Elektronik nimmst du …",
              options: ["Pulverlöscher", "Wasserlöscher", "CO2-Löscher", "Schaumlöscher"],
              correct: 2,
              explain:
                "CO2 löscht rückstandsfrei; Pulver kontaminiert die komplette Raumelektronik.",
            },
            {
              id: "imp_ausb-as-1_2",
              q: "Unterweisungen müssen erfolgen …",
              options: [
                "nur bei Einstellung",
                "vor Beginn und mind. jährlich",
                "alle 5 Jahre",
                "nur nach Unfällen",
              ],
              correct: 1,
              explain:
                "ArbSchG/DGUV: Erstunterweisung + Wiederholung mindestens jährlich (Jugendliche halbjährlich).",
            },
            {
              id: "imp_ausb-as-1_3",
              q: "Die Prüfplakette am Notebook-Netzteil gehört zu …",
              options: [
                "DGUV Vorschrift 3 (elektrische Betriebsmittel)",
                "der Datenschutz-Grundverordnung (DSGVO)",
                "der Qualitätsnorm ISO 9001 für Betriebe",
                "dem Jugendarbeitsschutzgesetz (JArbSchG)",
              ],
              correct: 0,
              explain:
                "Ortsveränderliche elektrische Geräte werden regelmäßig nach DGUV V3 geprüft.",
            },
            {
              id: "imp_ausb-as-1_4",
              q: "Wegeunfall auf dem Weg zur Berufsschule – versichert über …",
              options: [
                "private Haftpflicht",
                "die gesetzliche Unfallversicherung (BG)",
                "die Krankenkasse allein",
                "gar nicht",
              ],
              correct: 1,
              explain:
                "Arbeits- und Wegeunfälle deckt die Berufsgenossenschaft; Beiträge zahlt der Arbeitgeber.",
            },
            {
              id: "imp_ausb-as-1_5",
              q: "Brandklasse A umfasst …",
              options: ["Gase", "Metalle", "feste Stoffe wie Holz und Papier", "Speisefette"],
              correct: 2,
              explain: "A = fest, B = flüssig, C = Gase, D = Metalle, F = Speisefette.",
            },
            {
              id: "imp_ausb-as-1_6",
              q: "Im Brandfall gilt u. a. …",
              options: [
                "Aufzug nehmen, das geht schneller",
                "Türen öffnen für Durchzug",
                "Menschen warnen, 112, keine Aufzüge",
                "erst Daten sichern",
              ],
              correct: 2,
              explain:
                "Retten/Warnen vor Löschen; Aufzüge können zur Falle werden; Türen schließen.",
            },
            {
              id: "imp_ausb-as-1_7",
              q: "Für 17-jährige Azubis gilt …",
              options: [
                "max. 8 h/Tag, keine Nachtarbeit (JArbSchG)",
                "unbegrenzte Überstunden",
                "Nachtschicht ab 16 erlaubt",
                "kein Urlaubsanspruch",
              ],
              correct: 0,
              explain:
                "JArbSchG: 8 h/Tag, 40 h/Woche, Nachtruhe, 12 h Freizeit, ärztliche Untersuchungen.",
            },
            {
              id: "imp_ausb-as-1_8",
              q: "Gefährdungsbeurteilungen zu erstellen ist Pflicht …",
              options: ["des Betriebsrats", "des Arbeitgebers", "der IHK", "jedes Azubis"],
              correct: 1,
              explain:
                "§ 5 ArbSchG: Der Arbeitgeber beurteilt Gefährdungen und leitet Maßnahmen ab.",
            },
            {
              id: "imp_ausb-as-1_9",
              q: "Serverraum-Löschanlagen arbeiten oft mit …",
              options: [
                "Wassersprinklern direkt über den Racks",
                "Inertgas (Sauerstoffverdrängung)",
                "Löschschaum",
                "Sand",
              ],
              correct: 1,
              explain:
                "Gaslöschanlagen löschen ohne Rückstände und ohne Kurzschlussgefahr – plus Frühesterkennung per RAS.",
            },
          ],
        },
        {
          id: "ausb-lt-1",
          title: "Lerntechniken & Zeitmanagement",
          content: [
            { type: "heading", value: "Lernen, was nachweislich funktioniert" },
            {
              type: "text",
              value:
                "Die Lernforschung ist eindeutig: Aktives ABRUFEN schlägt passives Wiederlesen. Wer sich selbst testet (Retrieval Practice: Karteikarten, Übungsfragen, aus dem Kopf erklären), behält ein Vielfaches – genau deshalb besteht diese Plattform aus Quizfragen statt nur Texten. Zweitens wirkt VERTEILTES Lernen (Spaced Repetition): Wiederholungen mit wachsenden Abständen (1–3–7–14–30 Tage – exakt die Staffel des Wiederholungsplaners hier). Drittens INTERLEAVING: Themen mischen statt stundenlang eines – das fühlt sich anstrengender an, verankert aber tiefer. Marker-Orgien und reines Abschreiben sind dagegen Zeitfresser mit Wohlfühlfaktor.",
            },
            { type: "heading", value: "Verstehen statt auswendig: Feynman & Eselsbrücken" },
            {
              type: "text",
              value:
                "Feynman-Technik: Erkläre das Thema in einfachen Worten einem fiktiven Fünftklässler – wo du stockst, ist die Lücke; nachlesen, erneut erklären. Aktive Fragen ans Material („Warum −2 Adressen je Subnetz?“) schlagen passives Hinnehmen. Mnemotechniken für Listenwissen: Merksätze (OSI: „Alle deutschen Studenten…“), Akronyme (DORA, AUFGG, TOP), Loci-Methode (Begriffe an Orte deiner Wohnung hängen), Zahlen als Bilder. Und: Schlaf ist Lernzeit – im Tiefschlaf konsolidiert das Gehirn; die Nacht VOR der Prüfung durchzulernen ist kontraproduktiv.",
            },
            { type: "heading", value: "Zeitmanagement-Werkzeuge" },
            {
              type: "text",
              value:
                "Pomodoro: 25 min fokussiert + 5 min Pause, nach 4 Runden längere Pause (der Lern-Timer im Ansicht-Menü macht genau das). · Eisenhower-Matrix: Aufgaben nach wichtig/dringend sortieren – Wichtig+dringend sofort, wichtig+nicht dringend TERMINIEREN (das ist Prüfungsvorbereitung!), unwichtig+dringend delegieren/kurz halten, unwichtig+nicht dringend streichen. · ALPEN-Methode fürs Tagesplanen: Aufgaben notieren, Länge schätzen, Pufferzeit (40 %!) einplanen, Entscheidungen über Prioritäten treffen, Nachkontrolle. · SMART-Ziele statt „mehr lernen“: „Bis Freitag die 36 WiSo-Lektionen 1–6 mit Quiz ≥ 80 %“. Größter Hebel gegen Prokrastination: Anfangen klein machen (2-Minuten-Regel) und Ablenkung physisch entfernen (Handy raus aus dem Raum).",
            },
            { type: "heading", value: "Der konkrete Prüfungs-Fahrplan" },
            {
              type: "text",
              value:
                "8–6 Wochen vor der AP: Stoff sichten, Lücken per Übungsquiz finden (Stärken/Schwächen-Auswertung im Dashboard). 6–2 Wochen: Lücken gezielt schließen, Musterprüfungen unter Echtzeit-Bedingungen (90 min am Stück, ohne Handy), Fehler in den Wiederholungsplaner. Letzte Woche: nur noch Wiederholen fälliger Karten, Formeln-Spickzettel selbst schreiben (das Schreiben IST die Wiederholung), Schlafrhythmus stabilisieren. Am Vortag: kurz Formeln, früh schlafen, Tasche packen – Zulassung, Ausweis, Taschenrechner (Achtung: in der AP1 ist KEIN Taschenrechner zugelassen – nur in der AP2, nicht programmierbar).",
            },
            {
              type: "note",
              value:
                "Merkhilfen: Testen > Lesen · Verteilen > Marathon · Mischen > Blocken · Schlaf > Nachtschicht. Eisenhower: Prüfungsvorbereitung = wichtig, nicht dringend → TERMINIEREN, bevor sie dringend wird.",
            },
            { type: "heading", value: "Übungsaufgabe: Lernplan bauen" },
            {
              type: "text",
              value:
                "Bis zur AP1 sind es 6 Wochen; unter der Woche hast du abends je 1 Stunde, samstags 3. Deine Quiz-Auswertung zeigt Schwächen in Subnetting und WiSo-Recht. Entwirf einen Wochenplan nach den Prinzipien dieser Lektion (Retrieval, Spacing, Interleaving, Pomodoro, Eisenhower) und begründe drei Entscheidungen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (Beispiel):\nMo/Do: 2 Pomodori Subnetting-Generator + 1 Pomodoro fällige Wiederholungen. Di/Fr: 2 Pomodori WiSo-Recht (Quiz + eine Lektion per Feynman laut erklären). Mi: gemischtes Quiz quer durch alle LFs (Interleaving). Sa: 90-min-Musterprüfung unter Echtzeit + Fehleranalyse in den Planer; Rest des Samstags frei (Puffer).\nBegründungen: 1. Schwächen bekommen die meisten, aber nicht alle Slots – Mischen verankert tiefer als Blocken. 2. Übungsquiz statt Lesen = Retrieval Practice. 3. Musterprüfung samstags unter Realbedingungen trainiert Zeitdruck; die Fehler wandern in die Spaced-Repetition-Staffel. (Eisenhower: feste Termine machen das Wichtige planbar, bevor es dringend wird.)",
            },
          ],
          quiz: [
            {
              id: "imp_ausb-lt-1_0",
              q: "Nachweislich wirksamste Lerntechnik?",
              options: [
                "Text mehrfach lesen",
                "aktives Selbst-Abfragen (Retrieval)",
                "alles markern",
                "Zusammenfassung abschreiben",
              ],
              correct: 1,
              explain:
                "Abrufen aus dem Gedächtnis festigt am stärksten – Wiederlesen täuscht nur Vertrautheit vor.",
            },
            {
              id: "imp_ausb-lt-1_1",
              q: "Spaced Repetition bedeutet …",
              options: [
                "alles am Vortag",
                "Wiederholen in wachsenden Abständen",
                "nur schwere Themen",
                "Lernen ohne Pausen",
              ],
              correct: 1,
              explain:
                "1–3–7–14–30 Tage – exakt die Staffel des Wiederholungsplaners dieser Plattform.",
            },
            {
              id: "imp_ausb-lt-1_2",
              q: "Pomodoro-Grundtakt?",
              options: ["25 min Fokus + 5 min Pause", "60 + 30", "10 + 10", "120 ohne Pause"],
              correct: 0,
              explain:
                "Kurze fokussierte Einheiten mit Mikropausen; nach 4 Runden eine längere Pause.",
            },
            {
              id: "imp_ausb-lt-1_3",
              q: "Eisenhower: „wichtig, aber nicht dringend“ (z. B. Prüfungsvorbereitung) sollst du …",
              options: ["sofort erledigen", "delegieren", "terminieren", "streichen"],
              correct: 2,
              explain: "Fest einplanen, bevor es dringend wird – der Kern der Matrix.",
            },
            {
              id: "imp_ausb-lt-1_4",
              q: "Die Feynman-Technik heißt …",
              options: [
                "schneller lesen",
                "einfach erklären, Lücken finden, nachlesen",
                "Formeln auswendig singen",
                "Multiple Choice raten",
              ],
              correct: 1,
              explain:
                "Wer es einem Laien erklären kann, hat es verstanden – Stocken markiert die Lücke.",
            },
            {
              id: "imp_ausb-lt-1_5",
              q: "Interleaving bedeutet …",
              options: [
                "Themen mischen statt blocken",
                "nachts lernen",
                "nur ein Thema pro Woche",
                "Musik beim Lernen",
              ],
              correct: 0,
              explain: "Gemischte Übung fühlt sich schwerer an, führt aber zu robusterem Können.",
            },
            {
              id: "imp_ausb-lt-1_6",
              q: "Die Nacht vor der Prüfung durchlernen ist …",
              options: [
                "die beste Vorbereitung überhaupt",
                "kontraproduktiv – Schlaf konsolidiert Gelerntes",
                "verpflichtend vor jeder IHK-Prüfung",
                "nur für WiSo-Themen sinnvoll",
              ],
              correct: 1,
              explain:
                "Ohne Schlaf keine Gedächtniskonsolidierung – ausgeruht abrufen schlägt übermüdet vollgestopft.",
            },
            {
              id: "imp_ausb-lt-1_7",
              q: "ALPEN-Methode: Das P steht für …",
              options: ["Prioritäten", "Pufferzeit einplanen", "Pausen", "Planlosigkeit"],
              correct: 1,
              explain: "Aufgaben, Länge, PUFFER (~40 %), Entscheidungen, Nachkontrolle.",
            },
            {
              id: "imp_ausb-lt-1_8",
              q: "Bester Anti-Prokrastinations-Hebel laut Lektion?",
              options: [
                "auf Motivation warten",
                "klein anfangen + Ablenkung physisch entfernen",
                "mehr Kaffee",
                "länger planen",
              ],
              correct: 1,
              explain:
                "2-Minuten-Regel senkt die Starthürde; das Handy in einem anderen Raum wirkt stärker als Willenskraft.",
            },
            {
              id: "imp_ausb-lt-1_9",
              q: "Ein SMART formuliertes Lernziel ist …",
              options: [
                "„Ich lerne mehr“",
                "„Bis Freitag LF3-Quiz mit mindestens 80 %“",
                "„Irgendwann Subnetting können“",
                "„Öfter mal reinschauen“",
              ],
              correct: 1,
              explain:
                "Spezifisch, messbar, attraktiv, realistisch, terminiert – sonst bleibt es ein Wunsch.",
            },
          ],
        },
      ],
    },
  ],
};
