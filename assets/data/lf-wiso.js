window.LF_CONTENT = window.LF_CONTENT || {};
window.LF_CONTENT["wiso"] = {
  topics: [
    {
      id: "pol-ar",
      title: "Arbeitsrecht",
      lessons: [
        {
          id: "pol-ar-1",
          title: "Arbeitsvertrag & Kündigung",
          content: [
            { type: "heading", value: "Kündigungsarten" },
            {
              type: "text",
              value:
                "Ordentlich: AN 4 Wo. zum 15./Monatsende, AG gestaffelt (§622 BGB). Außerordentlich: Wichtiger Grund, 2 Wo. Frist.",
            },
            { type: "heading", value: "KSchG" },
            {
              type: "text",
              value:
                "Ab >10 MA + 6 Mon. Zugehörigkeit. Soziale Rechtfertigung: personen-/verhaltens-/betriebsbedingt. Besonderer Schutz: Schwangere, Schwerbehinderte, BR, Azubis.",
            },
            { type: "heading", value: "Ausbildung" },
            {
              type: "text",
              value:
                "Probezeit 1-4 Mon., beidseitig fristlos. Danach nur außerordentlich oder Azubi mit 4 Wo. bei Aufgabe.",
            },
            { type: "heading", value: "Übungsaufgabe: Kündigung" },
            {
              type: "text",
              value:
                "Ein Arbeitnehmer ist seit 6 Jahren im Betrieb. Er will kündigen. a) Welche gesetzliche Kündigungsfrist gilt für IHN? b) Welche Frist müsste der ARBEITGEBER einhalten? c) Was ist der Unterschied zwischen ordentlicher und außerordentlicher Kündigung?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Arbeitnehmer: IMMER 4 Wochen zum 15. oder\n   zum Monatsende (§622 BGB), unabhängig von\n   der Betriebszugehörigkeit.\n\nb) Arbeitgeber bei 6 Jahren Betriebszugehörigkeit:\n   2 Monate zum Monatsende (§622 BGB)\n   (Staffelung: ab 5 J = 2 Mon, ab 8 J = 3 Mon, ...)\n\nc) Ordentliche Kündigung: unter Einhaltung der Frist,\n   mit Grund (bei AG: KSchG bei >10 MA).\n   Außerordentliche (fristlose) Kündigung: aus\n   wichtigem Grund (§626 BGB), z.B. Diebstahl,\n   innerhalb von 2 Wochen nach Kenntnis.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Kündigungsarten zuordnen" },
            {
              type: "text",
              value:
                "Ordne den Fällen die Kündigungsart zu und nenne je eine Wirksamkeitsvoraussetzung: (a) Ein Mitarbeiter kommt trotz zweier Abmahnungen wiederholt deutlich zu spät. (b) Eine Abteilung wird dauerhaft geschlossen, die Aufgaben entfallen ersatzlos. (c) Ein Administrator löscht vorsätzlich Kundendaten und wird dabei beobachtet. (d) Eine Mitarbeiterin kann aus gesundheitlichen Gründen dauerhaft nicht mehr arbeiten.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n(a) Verhaltensbedingte ordentliche Kündigung – Voraussetzung: vorherige einschlägige Abmahnung(en) liegen vor.\n(b) Betriebsbedingte Kündigung – Voraussetzung: dringende betriebliche Erfordernisse plus korrekte Sozialauswahl unter vergleichbaren Mitarbeitern.\n(c) Außerordentliche (fristlose) Kündigung aus wichtigem Grund (§ 626 BGB) – Voraussetzung: Unzumutbarkeit der Fortsetzung, Erklärung binnen 2 Wochen ab Kenntnis; Betriebsrat ist vorher anzuhören (§ 102 BetrVG).\n(d) Personenbedingte Kündigung – Voraussetzung: negative Gesundheitsprognose, erhebliche Beeinträchtigung betrieblicher Interessen, Interessenabwägung (mildere Mittel wie leidensgerechter Arbeitsplatz geprüft).",
            },
          ],
          quiz: [
            {
              id: "imp_pol-ar-1_0",
              q: "KSchG ab?",
              options: ["20", "15", ">10", "5"],
              correct: 2,
              explain: ">10 Mitarbeiter.",
            },
            {
              id: "imp_pol-ar-1_1",
              q: "Ordentliche Kündigung AN: Frist?",
              options: ["1 Woche", "3 Monate", "4 Wochen zum 15./Monatsende", "Sofort"],
              correct: 2,
              explain: "§622 BGB: 4 Wochen zum 15. oder zum Monatsende.",
            },
            {
              id: "imp_pol-ar-1_2",
              q: "Innerhalb welcher Frist muss die außerordentliche Kündigung nach Kenntnis des Grundes ERKLÄRT werden?",
              options: [
                "2 Wochen nach Kenntnis (§ 626 Abs. 2 BGB)",
                "1 Monat",
                "Es gibt keine Frist",
                "4 Wochen",
              ],
              correct: 0,
              explain:
                "Die Kündigung selbst wirkt fristlos – aber der Arbeitgeber muss sie innerhalb von 2 Wochen nach Kenntnis des Kündigungsgrundes aussprechen, sonst ist sie verwirkt.",
            },
            {
              id: "imp_pol-ar-1_3",
              q: "KSchG gilt ab?",
              options: ["5 MA", "Immer", ">10 MA + 6 Mon. Zugehörigkeit", "1 MA"],
              correct: 2,
              explain: "Kündigungsschutzgesetz: >10 Mitarbeiter + 6 Monate Betriebszugehörigkeit.",
            },
            {
              id: "imp_pol-ar-1_4",
              q: "Besonderer Kündigungsschutz für?",
              options: [
                "Alle MA",
                "Nur Azubis",
                "Schwangere, Schwerbehinderte, BR",
                "Nur Geschäftsführer",
              ],
              correct: 2,
              explain:
                "Schwangere, Schwerbehinderte, Betriebsratsmitglieder, Azubis nach Probezeit.",
            },
            {
              id: "imp_pol-ar-1_5",
              q: "Sozialauswahl bei betriebsbedingter Kündigung?",
              options: [
                "Entfällt bei KMU: Unter 250 Mitarbeitern ist keine Sozialauswahl nötig",
                "Pflicht: Alter, Unterhaltspflicht, Betriebszugehörigkeit, Behinderung",
                "Nur auf Antrag: Der Arbeitnehmer muss die Sozialauswahl selbst beantragen",
                "Optional: Der Arbeitgeber kann frei entscheiden, wen er kündigt",
              ],
              correct: 1,
              explain: "AG muss dem sozial am wenigsten Schutzbedürftigen kündigen.",
            },
            {
              id: "imp_pol-ar-1_6",
              q: "Arbeitsvertrag: Form?",
              options: [
                "Immer schriftlich",
                "Immer mündlich",
                "Formfrei, aber Nachweisgesetz",
                "Nur notariell",
              ],
              correct: 2,
              explain:
                "Formfrei gültig, aber Nachweisgesetz: AG muss Bedingungen schriftlich bestätigen.",
            },
            {
              id: "imp_pol-ar-1_7",
              q: "Max. Probezeit Arbeitsvertrag?",
              options: ["12 Monate", "3 Monate", "9 Monate", "6 Monate"],
              correct: 3,
              explain: "Max. 6 Monate Probezeit, Kündigung mit 2 Wochen Frist.",
            },
            {
              id: "imp_pol-ar-1_8",
              q: "AG Kündigungsfrist nach 10 Jahren?",
              options: ["6 Monate", "4 Wochen", "2 Monate", "4 Monate"],
              correct: 3,
              explain: "Nach 10 Jahren: 4 Monate zum Monatsende (§622 BGB).",
            },
            {
              id: "imp_pol-ar-1_9",
              q: "Abmahnung vor Kündigung nötig?",
              options: ["Bei verhaltensbedingter Kündigung", "Immer", "Nur bei Azubis", "Nie"],
              correct: 0,
              explain:
                "Verhaltensbedingt: Erst abmahnen, dann kündigen. Ausnahme: schwere Vertrauensbrüche.",
            },
            {
              id: "imp_pol-ar-1_10",
              q: "Welche Funktion hat eine Abmahnung im Arbeitsrecht?",
              options: [
                "Sie rügt ein Fehlverhalten und warnt vor Konsequenzen im Wiederholungsfall",
                "Sie verlängert den gesetzlichen Urlaubsanspruch als Ausgleichsmaßnahme",
                "Sie kündigt eine Gehaltserhöhung zum nächsten Quartal verbindlich an",
                "Sie beendet das Arbeitsverhältnis mit sofortiger Wirkung ohne Frist",
              ],
              correct: 0,
              explain:
                "Meist Voraussetzung einer verhaltensbedingten Kündigung. Ohne vorherige einschlägige Abmahnung ist eine verhaltensbedingte Kündigung in der Regel unwirksam.",
            },
            {
              id: "imp_pol-ar-1_11",
              q: "Welche drei Kündigungsgründe unterscheidet das KSchG?",
              options: [
                "Mündlich, schriftlich, elektronisch",
                "Privat, dienstlich, tariflich",
                "Personen-, verhaltens- und betriebsbedingt",
                "Ordentlich, außerordentlich, fristlos",
              ],
              correct: 2,
              explain:
                "Personenbedingt (z. B. dauerhafte Krankheit), verhaltensbedingt (Pflichtverstöße), betriebsbedingt (Wegfall des Arbeitsplatzes).",
            },
            {
              id: "imp_pol-ar-1_12",
              q: "Innerhalb welcher Frist muss eine fristlose Kündigung nach Kenntnis des wichtigen Grundes erklärt werden?",
              options: ["6 Monate", "2 Wochen (§ 626 Abs. 2 BGB)", "1 Jahr", "Es gibt keine Frist"],
              correct: 1,
              explain:
                "Wer den wichtigen Grund kennt und wartet, zeigt, dass ihm die Fortsetzung zumutbar ist – die Kündigung wird unwirksam.",
            },
            {
              id: "imp_pol-ar-1_13",
              q: "Wie lange hat ein Arbeitnehmer Zeit für eine Kündigungsschutzklage?",
              options: ["3 Wochen ab Zugang der Kündigung", "3 Monate", "1 Woche", "Unbegrenzt"],
              correct: 0,
              explain:
                "Nach Ablauf der 3-Wochen-Frist gilt die Kündigung grundsätzlich als wirksam (§ 4 KSchG).",
            },
            {
              id: "imp_pol-ar-1_14",
              q: "Welche Form muss eine Kündigung des Arbeitsverhältnisses haben?",
              options: [
                "Schriftform mit eigenhändiger Unterschrift",
                "Nur notariell",
                "Eine SMS genügt",
                "Mündlich reicht",
              ],
              correct: 0,
              explain:
                "E-Mail oder WhatsApp genügen nicht (§ 623 BGB). Die elektronische Form ist für die Kündigung ausdrücklich ausgeschlossen.",
            },
            {
              id: "imp_pol-ar-1_15",
              q: "Welches Risiko birgt ein Aufhebungsvertrag für den Arbeitnehmer?",
              options: [
                "Sperrzeit beim Arbeitslosengeld",
                "Er verliert automatisch das Zeugnis",
                "Er verlängert die Kündigungsfrist",
                "Er ist immer unwirksam",
              ],
              correct: 0,
              explain:
                "Da er das Arbeitsverhältnis mitbeendet. Die Agentur für Arbeit verhängt regelmäßig bis zu 12 Wochen Sperrzeit – vor Unterschrift beraten lassen.",
            },
            {
              id: "imp_pol-ar-1_16",
              q: "Welchen Anspruch hat jeder Arbeitnehmer bei Beendigung des Arbeitsverhältnisses?",
              options: [
                "Ein schriftliches Arbeitszeugnis",
                "Eine Abfindung in jedem Fall",
                "Weiterbeschäftigung beim Konkurrenten",
                "Einen Dienstwagen",
              ],
              correct: 0,
              explain:
                "Wahr und wohlwollend formuliert. Ein einfaches Zeugnis immer, ein qualifiziertes (mit Leistung/Verhalten) auf Verlangen; eine Abfindung ist gesetzlich die Ausnahme.",
            },
            {
              id: "imp_pol-ar-1_17",
              q: "Was passiert mit nicht genommenem Urlaub bei Beendigung des Arbeitsverhältnisses?",
              options: [
                "Er überträgt sich auf den neuen Arbeitgeber",
                "Er ist abzugelten, also auszuzahlen (§ 7 Abs. 4 BUrlG)",
                "Er verfällt in jedem Fall ersatzlos ohne Ausgleich",
                "Er wird automatisch an eine Urlaubskasse gespendet",
              ],
              correct: 1,
              explain:
                "Kann der Resturlaub nicht mehr gewährt werden, entsteht ein Abgeltungsanspruch in Geld.",
            },
            {
              id: "imp_pol-ar-1_18",
              q: "Wer genießt besonderen Kündigungsschutz?",
              options: [
                "Niemand – der besondere Kündigungsschutz wurde abgeschafft, es gelten nur noch vertragliche Fristen",
                "U. a. Schwangere, Schwerbehinderte, Betriebsratsmitglieder und Azubis nach der Probezeit",
                "Nur die Geschäftsführung und Prokuristen, da sie besondere Verantwortung für das Unternehmen tragen",
                "Alle Mitarbeiter über 30 Jahren, da das Alter allein den besonderen Kündigungsschutz auslöst",
              ],
              correct: 1,
              explain:
                "Für diese Gruppen ist eine ordentliche Kündigung ausgeschlossen oder nur mit Behördenzustimmung möglich.",
            },
            {
              id: "imp_pol-ar-1_19",
              q: "Eine betriebsbedingte Kündigung ohne korrekte Sozialauswahl ist …",
              options: [
                "sozial ungerechtfertigt und damit angreifbar",
                "automatisch wirksam",
                "nur ein Formfehler ohne Folge",
                "Sache des Finanzamts",
              ],
              correct: 0,
              explain:
                "Genau das prüft das Arbeitsgericht in der Kündigungsschutzklage – Kriterien: Betriebszugehörigkeit, Alter, Unterhalt, Schwerbehinderung.",
            },
          ],
        },
        {
          id: "pol-ar-2",
          title: "Vertragsrecht & Kaufvertrag",
          content: [
            { type: "heading", value: "Zustandekommen eines Vertrags" },
            {
              type: "text",
              value:
                "Angebot (verbindliche Willenserklärung mit wesentlichen Vertragsbestandteilen: Ware, Menge, Preis, Lieferzeit) + Annahme (vorbehaltlos, innerhalb der Annahmefrist). Formvorschriften: Formfrei (Supermarkt, mündlich), Schriftform (Arbeitsvertrag), Notarielle Beurkundung (Grundstückskauf, GmbH-Gründung).",
            },
            { type: "heading", value: "Kaufvertragsstörungen" },
            {
              type: "text",
              value:
                "Schlechtleistung (Mängel): Nacherfüllung verlangen (Nachbesserung ODER Ersatzlieferung, Wahl beim Käufer). Wenn Nacherfüllung scheitert (2 Versuche): Rücktritt, Minderung oder Schadensersatz. Lieferverzug (Verkäufer liefert nicht rechtzeitig): Mahnung setzen, angemessene Nachfrist, bei Ablauf: Rücktritt + ggf. Schadensersatz. Zahlungsverzug (Käufer zahlt nicht): Automatisch 30 Tage nach Fälligkeit (Unternehmer) oder nach Mahnung (Verbraucher). Folge: Verzugszinsen (Verbraucher: 5 Prozentpunkte über Basiszins; im B2B-Geschäft 9 Prozentpunkte über Basiszins, § 288 Abs. 2 BGB).",
            },
            { type: "heading", value: "Gewährleistung vs. Garantie" },
            {
              type: "text",
              value:
                "Gewährleistung: Gesetzlich, 2 Jahre, Verkäufer haftet für Mängel, die bei Übergabe bestanden. Beweislastumkehr: Erste 12 Monate = Mangel war von Anfang an da (Verkäufer muss Gegenteil beweisen). Garantie: Freiwillig, vom Hersteller, Bedingungen frei wählbar. Garantie und Gewährleistung schließen sich NICHT gegenseitig aus.",
            },
            {
              type: "note",
              value:
                "Häufiger AP-Fehler: Gewährleistung und Garantie verwechseln! Gewährleistung = gesetzlich, Garantie = freiwillig.",
            },
            { type: "heading", value: "Der Kaufvertrag im Detail: Zustandekommen und Störungen" },
            {
              type: "text",
              value:
                "Ein Kaufvertrag entsteht durch zwei übereinstimmende Willenserklärungen: Antrag und Annahme. Wichtig für die Prüfung: Die Auslage im Schaufenster oder der Online-Shop ist noch KEIN Antrag, sondern eine unverbindliche Aufforderung zur Abgabe eines Angebots (invitatio ad offerendum) – den Antrag stellt der Kunde mit seiner Bestellung, der Händler nimmt an (Bestellbestätigung ≠ Annahme, Auftragsbestätigung/Lieferung = Annahme). Beim Kauf entstehen zwei Pflichtenpaare: Der Verkäufer muss die Sache übergeben und Eigentum verschaffen (mangelfrei!), der Käufer muss zahlen und abnehmen. Verpflichtungsgeschäft (der Vertrag) und Erfüllungsgeschäft (Übereignung, Zahlung) sind rechtlich getrennt – das Abstraktionsprinzip.",
            },
            {
              type: "list",
              value: [
                "Lieferungsverzug: Verkäufer liefert trotz Fälligkeit und Mahnung nicht → Käufer kann liefern lassen, zurücktreten, Schadensersatz verlangen.",
                "Zahlungsverzug: spätestens 30 Tage nach Fälligkeit und Rechnung (§ 286 BGB) → Verzugszinsen, Mahnkosten.",
                "Mangelhafte Lieferung: Rechte-Reihenfolge beachten – ZUERST Nacherfüllung (Reparatur oder Ersatz, Wahl des Käufers), erst danach Rücktritt/Minderung/Schadensersatz.",
                "Gewährleistung: 2 Jahre bei Neuware (B2C), Beweislastumkehr im 1. Jahr; Garantie ist dagegen freiwillig vom Hersteller.",
              ],
            },
            { type: "heading", value: "Übungsaufgabe: Der defekte Switch" },
            {
              type: "text",
              value:
                "Dein Betrieb kauft einen Switch (890 €). Nach drei Wochen fällt ein Port aus. Der Händler sagt: „Wenden Sie sich an den Hersteller, wir geben nur 6 Monate Garantie.“ Bewerte die Aussage rechtlich und beschreibe das korrekte Vorgehen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: Die Aussage ist doppelt falsch. (1) Die gesetzliche GEWÄHRLEISTUNG des VERKÄUFERS beträgt 2 Jahre und kann bei Neuware gegenüber Verbrauchern nicht ausgeschlossen werden – der Händler ist der richtige Anspruchsgegner, nicht der Hersteller. (2) Die 6-Monats-„Garantie“ ist eine freiwillige Zusatzleistung und ersetzt die Gewährleistung nicht. Vorgehen: Mangel schriftlich anzeigen (Beweis!), Nacherfüllung mit Frist verlangen (Reparatur oder Austausch); innerhalb des ersten Jahres gilt die Vermutung, dass der Mangel schon bei Übergabe vorlag (Beweislastumkehr). Erst nach erfolgloser Frist: Rücktritt oder Minderung.",
            },
          ],
          quiz: [
            {
              id: "imp_pol-ar-2_0",
              q: "Gesetzliche Gewährleistung?",
              options: ["1 Jahr", "2 Jahre", "6 Mon.", "5 Jahre"],
              correct: 1,
              explain: "2 Jahre ab Übergabe.",
            },
            {
              id: "imp_pol-ar-2_1",
              q: "Käufer-Wahl bei Nacherfüllung?",
              options: [
                "Nur Ersatz",
                "Sofort Geld zurück",
                "Nur Reparatur",
                "Nachbesserung ODER Ersatzlieferung",
              ],
              correct: 3,
              explain: "Käufer wählt: Nachbesserung oder Ersatzlieferung.",
            },
            {
              id: "imp_pol-ar-2_2",
              q: "Verzugszinsen Unternehmer?",
              options: [
                "5 Prozentpunkte über Basiszins",
                "9 Prozentpunkte über Basiszins",
                "0%",
                "15%",
              ],
              correct: 1,
              explain: "Zwischen Unternehmern: 9 Prozentpunkte über Basiszins.",
            },
            {
              id: "imp_pol-ar-2_3",
              q: "Beweislastumkehr: Erste 12 Mon?",
              options: [
                "Verkäufer muss beweisen dass Mangel nicht von Anfang an",
                "Der Käufer muss den Mangelzeitpunkt selbst nachweisen",
                "Ein Gericht bestellt stets einen Gutachter zur Prüfung",
                "Es besteht in den ersten 12 Monaten keine Beweispflicht",
              ],
              correct: 0,
              explain: "12 Monate: Mangelvermutung zugunsten des Käufers.",
            },
            {
              id: "imp_pol-ar-2_4",
              q: "Nacherfüllung: Wer wählt?",
              options: ["Verkäufer", "Käufer (Reparatur oder Ersatz)", "Gericht", "Hersteller"],
              correct: 1,
              explain: "Käufer wählt zwischen Nachbesserung und Ersatzlieferung.",
            },
            {
              id: "imp_pol-ar-2_5",
              q: "Verzugszinsen Verbraucher?",
              options: [
                "5 Prozentpunkte über Basiszins",
                "15%",
                "0%",
                "9 Prozentpunkte über Basiszins",
              ],
              correct: 0,
              explain: "Verbraucher: 5pp über Basiszins.",
            },
            {
              id: "imp_pol-ar-2_6",
              q: "Garantie = ?",
              options: ["Pflicht", "Freiwillig vom Hersteller", "Gesetzlich", "Nur 1 Jahr"],
              correct: 1,
              explain: "Garantie ist freiwillig, Gewährleistung ist gesetzlich.",
            },
            {
              id: "imp_pol-ar-2_7",
              q: "Gewährleistung: Dauer?",
              options: ["1 Jahr", "5 Jahre", "6 Mon", "2 Jahre"],
              correct: 3,
              explain: "2 Jahre ab Übergabe (gesetzlich).",
            },
            {
              id: "imp_pol-ar-2_8",
              q: "Anfechtbar vs. nichtig?",
              options: [
                "Anfechtbar = gültig bis angefochten, nichtig = war nie gültig",
                "Anfechtbarkeit ist die stärkere Unwirksamkeitsform als Nichtigkeit",
                "Nichtig bedeutet lediglich anfechtbar innerhalb einer Frist",
                "Beide Begriffe bezeichnen dieselbe Rechtsfolge ohne Unterschied",
              ],
              correct: 0,
              explain: "Anfechtbar: Wirksam bis Anfechtung. Nichtig: Von Anfang an unwirksam.",
            },
            {
              id: "imp_pol-ar-2_9",
              q: "Minderung?",
              options: ["Schadensersatz", "Kaufpreis reduzieren", "Umtausch", "Vertrag aufheben"],
              correct: 1,
              explain: "Mangel akzeptieren. Minderung: Preis senken statt Rücktritt.",
            },
            {
              id: "imp_pol-ar-2_10",
              q: "Wie kommt ein Kaufvertrag zustande?",
              options: [
                "Allein durch die Bezahlung des Kaufpreises an der Kasse",
                "Ausschließlich durch notarielle Beurkundung des Vertragstextes",
                "Erst durch die vollständige Lieferung und Übergabe der Ware",
                "Durch zwei übereinstimmende Willenserklärungen: Antrag und Annahme",
              ],
              correct: 3,
              explain:
                "Ein Schaufensterpreis ist dabei nur eine Aufforderung zur Abgabe eines Angebots (invitatio ad offerendum).",
            },
            {
              id: "imp_pol-ar-2_11",
              q: "Was besagt das Trennungsprinzip beim Kauf?",
              options: [
                "Verpflichtungsgeschäft (Kaufvertrag) und Erfüllungsgeschäfte (Übereignung von Ware und Geld) sind rechtlich getrennt",
                "Verträge müssen in zwei getrennten Dokumenten gedruckt werden, sonst sind sie formunwirksam",
                "Ware und Rechnung müssen aus steuerlichen Gründen stets in getrennten Sendungen verschickt werden",
                "Käufer und Verkäufer dürfen vor Vertragsschluss keinen persönlichen Kontakt gehabt haben",
              ],
              correct: 0,
              explain:
                "Ein Kaufvertrag besteht aus einem Verpflichtungs- und zwei Erfüllungsgeschäften – beliebte Prüfungsfrage.",
            },
            {
              id: "imp_pol-ar-2_12",
              q: "Was bewirkt ein Eigentumsvorbehalt?",
              options: [
                "Die Ware bleibt bis zur vollständigen Bezahlung Eigentum des Verkäufers",
                "Der Käufer wird bereits mit Vertragsschluss vollwertiger Eigentümer der Ware",
                "Die Ware darf vom Käufer dauerhaft niemals an Dritte weiterverkauft werden",
                "Der vereinbarte Kaufpreis wird bis zur Übergabe der Ware eingefroren",
              ],
              correct: 0,
              explain:
                "Der Käufer ist zunächst nur Besitzer – Sicherungsinstrument des Verkäufers bei Zahlungsausfall.",
            },
            {
              id: "imp_pol-ar-2_13",
              q: "Wie lange gilt die gesetzliche Gewährleistung beim Kauf neuer Ware (B2C)?",
              options: ["30 Tage", "5 Jahre", "6 Monate", "2 Jahre ab Übergabe"],
              correct: 3,
              explain:
                "Innerhalb des ersten Jahres wird zudem vermutet, dass der Mangel schon bei Übergabe vorlag (Beweislastumkehr).",
            },
            {
              id: "imp_pol-ar-2_14",
              q: "Welches Recht hat der Käufer bei einem Mangel ZUERST?",
              options: [
                "Den Verkäufer öffentlich bewerten",
                "Schmerzensgeld",
                "Nacherfüllung verlangen",
                "Sofortige Rückzahlung ohne Fristsetzung",
              ],
              correct: 2,
              explain:
                "Nach seiner Wahl Reparatur oder Ersatzlieferung. Erst wenn die Nacherfüllung scheitert oder verweigert wird: Rücktritt, Minderung, ggf. Schadensersatz.",
            },
            {
              id: "imp_pol-ar-2_15",
              q: "Worin unterscheidet sich die Garantie von der Gewährleistung?",
              options: [
                "Beides ist rechtlich identisch und wird im BGB unter demselben Paragraphen geführt",
                "Die Garantie ist gesetzlich vorgeschrieben, die Gewährleistung eine freiwillige Kulanzleistung des Herstellers",
                "Garantie ist eine freiwillige Zusatzleistung des Herstellers/Händlers, Gewährleistung gesetzliche Pflicht des Verkäufers",
                "Die Garantie gilt ausschließlich für Softwareprodukte, die Gewährleistung nur für Hardware",
              ],
              correct: 2,
              explain:
                "Die Garantie ersetzt die Gewährleistung nicht – beide Ansprüche bestehen nebeneinander.",
            },
            {
              id: "imp_pol-ar-2_16",
              q: "Der Kunde zahlt eine fällige Rechnung nicht. Wann gerät er spätestens in Verzug?",
              options: [
                "30 Tage nach Fälligkeit und Zugang der Rechnung",
                "Sofort mit der Unterzeichnung des Kaufvertrags",
                "Erst mit einem rechtskräftigen Gerichtsurteil",
                "Frühestens 6 Monate nach Rechnungszugang",
              ],
              correct: 0,
              explain:
                "Oder früher durch Mahnung. § 286 BGB: Verzug löst Verzugszinsen und Ersatz von Mahn-/Beitreibungskosten aus – Praxisstoff für jede Dienstleisterbuchhaltung.",
            },
            {
              id: "imp_pol-ar-2_17",
              q: "Wann werden AGB Vertragsbestandteil?",
              options: [
                "Immer automatisch bei jedem Vertragsschluss, auch wenn der Kunde nie auf sie hingewiesen wurde",
                "Wenn bei Vertragsschluss auf sie hingewiesen wird und die Kenntnisnahme zumutbar möglich ist",
                "Grundsätzlich nie, da AGB gegenüber Verbrauchern rechtlich unwirksam sind",
                "Nur wenn sie dem Kunden bei Vertragsschluss vollständig laut vorgelesen wurden",
              ],
              correct: 1,
              explain:
                "Überraschende Klauseln werden nicht Vertragsbestandteil; unklare Klauseln gehen zulasten des Verwenders.",
            },
            {
              id: "imp_pol-ar-2_18",
              q: "Welches Widerrufsrecht haben Verbraucher im Fernabsatz (Onlineshop)?",
              options: [
                "14 Tage ohne Angabe von Gründen",
                "Keines",
                "Nur bei defekter Ware",
                "6 Monate mit Begründung",
              ],
              correct: 0,
              explain:
                "Fehlt die ordnungsgemäße Belehrung, verlängert sich die Frist erheblich. Zwischen Unternehmen (B2B) gilt das Widerrufsrecht nicht.",
            },
            {
              id: "imp_pol-ar-2_19",
              q: "Mangelhafte Lieferung: Der gelieferte Switch hat 24 statt bestellter 48 Ports. Welche Vertragsstörung liegt vor?",
              options: [
                "Annahmeverzug",
                "Schlechtleistung",
                "Gar keine",
                "Nicht-rechtzeitige Zahlung",
              ],
              correct: 1,
              explain:
                "Sachmangel: Abweichung von der vereinbarten Beschaffenheit. Aliud-/Minderlieferung und Qualitätsabweichungen sind Sachmängel – es greifen die Gewährleistungsrechte.",
            },
          ],
        },
        {
          id: "pol-vt-2",
          title: "Vertragsarten im IT-Kontext",
          content: [
            { type: "heading", value: "Die wichtigsten Vertragsarten" },
            {
              type: "text",
              value:
                "Kaufvertrag (§433 BGB): Eigentumsübergang einer Sache gegen Zahlung. IT: Hardware kaufen, Softwarelizenzen (perpetual). Pflichten: Verkäufer liefert mangelfreie Ware, Käufer zahlt. Werkvertrag (§631 BGB): Herstellung eines konkreten WERKS/ERGEBNISSES. IT: Netzwerk aufbauen, Software entwickeln, Server migrieren. Geschuldet: Der Erfolg! Mängelhaftung: Auftragnehmer haftet für Fehler am Werk. Abnahme: Kunde prüft und bestätigt Fertigstellung. Dienstvertrag (§611 BGB): Erbringung einer TÄTIGKEIT (nicht Erfolg!). IT: Managed Services, IT-Support-Vertrag, Beratung. Geschuldet: Bemühung/Arbeitsleistung. Arbeitsvertrag ist ein Sonderfall des Dienstvertrags.",
            },
            { type: "heading", value: "Weitere relevante Vertragstypen" },
            {
              type: "text",
              value:
                "Mietvertrag (§535 BGB): Gebrauchsüberlassung auf Zeit. IT: Serverhousing, Hardware-Leasing, Cloud-Infrastruktur (IaaS). Lizenzvertrag: Recht zur Nutzung von Software. Kann zeitlich begrenzt (SaaS-Abo) oder unbefristet (Kauflizenz) sein. Wartungsvertrag: Kombination aus Dienst- und Werkvertrag. Laufende Betreuung (Dienst) + Fehlerbehebung (Werk). SLA regelt Leistungsumfang.",
            },
            { type: "heading", value: "Typische IT-Szenarien" },
            {
              type: "text",
              value:
                "Netzwerk für Kunden aufbauen: Werkvertrag (konkretes Ergebnis geschuldet). Server kaufen: Kaufvertrag. Monatlicher IT-Support: Dienstvertrag. Cloud-Server mieten: Mietvertrag/IaaS. Software entwickeln lassen: Werkvertrag. Microsoft 365 Abo: Lizenz-/Mietvertrag. Hardware-Leasing: Mietvertragsähnlich. Freelancer für Projekt: Werkvertrag (Ergebnis) oder Dienstvertrag (Beratung).",
            },
            {
              type: "note",
              value:
                "In der Prüfung: Erkenne, welcher Vertragstyp vorliegt! Entscheidend ist, ob ein ERGEBNIS geschuldet ist (Werkvertrag) oder eine TÄTIGKEIT (Dienstvertrag). Das bestimmt Haftung, Abnahme und Mängelrechte.",
            },
            { type: "heading", value: "Vertragsarten sicher zuordnen: das Entscheidungsraster" },
            {
              type: "text",
              value:
                "Die Prüfungsfrage lautet fast immer: „Welcher Vertragstyp liegt vor – und was folgt daraus?“ Das Raster: Was wird geschuldet? SACHE gegen Geld = Kaufvertrag. ERFOLG (abnahmefähiges Werk) = Werkvertrag – mit Abnahme, Gewährleistung aufs Werk, Vergütung erst bei Erfolg. TÄTIGKEIT ohne Erfolgsgarantie = Dienstvertrag – bezahlt wird die Zeit, kein Erfolg geschuldet (Arbeitsvertrag ist ein Unterfall!). GEBRAUCH auf Zeit = Miete (SaaS!), unentgeltlich = Leihe. Kombis sind Prüfungsklassiker: Individualsoftware nach Pflichtenheft = Werkvertrag; Softwarepflege nach Aufwand = Dienstvertrag; Standardsoftware-Kauf = Kaufvertrag (auch bei Download); Cloud-Abo = mietvertragsähnlich; Leasing = atypischer Mietvertrag mit Finanzierungsfunktion.",
            },
            { type: "heading", value: "Übungsaufgabe: Fünf Fälle zuordnen" },
            {
              type: "text",
              value:
                "Ordne mit Begründung: (1) Dein Betrieb entwickelt eine Schnittstelle nach Lastenheft zum Festpreis. (2) Ein Freelancer unterstützt das Team 3 Monate nach Stundensatz. (3) Kunde least 10 Firewalls über 36 Monate. (4) Kunde kauft 5 Windows-Lizenzen. (5) Kunde bucht Microsoft 365 im Jahresabo.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: (1) WERKVERTRAG – geschuldet ist der funktionierende Erfolg laut Pflichtenheft, mit Abnahme; Festpreisrisiko beim Auftragnehmer. (2) DIENSTVERTRAG – Tätigkeit nach Zeit, kein konkreter Erfolg; Vergütung auch ohne Projekterfolg. (3) LEASING – Gebrauchsüberlassung mit Finanzierungscharakter, Raten über die Laufzeit, meist Wartungspflichten geregelt. (4) KAUFVERTRAG – dauerhafte Lizenz gegen Einmalzahlung, Gewährleistungsrecht. (5) MIETVERTRAGSÄHNLICH – Nutzung auf Zeit gegen wiederkehrendes Entgelt; Verfügbarkeit regelt das SLA. Je Fall: Typ (0,5 P) + Begründung über das Geschuldete (1 P) – so ist auch das Bewertungsraster aufgebaut.",
            },
          ],
          quiz: [
            {
              id: "imp_pol-vt-2_0",
              q: "Kaufvertrag: Ergebnis?",
              options: [
                "Beratung",
                "Herstellung",
                "Dienstleistung",
                "Eigentumsübergang einer Sache",
              ],
              correct: 3,
              explain: "Sache gegen Geld, Eigentum geht über.",
            },
            {
              id: "imp_pol-vt-2_1",
              q: "Werkvertrag: Geschuldet?",
              options: [
                "Nur Beratung",
                "Dauerhaftes Verhältnis",
                "Ein konkretes Ergebnis/Werk",
                "Arbeitszeit",
              ],
              correct: 2,
              explain: "Erfolg ist geschuldet (z.B. funktionierendes Netzwerk).",
            },
            {
              id: "imp_pol-vt-2_2",
              q: "Dienstvertrag: Geschuldet?",
              options: ["Ergebnis", "Produkt", "Tätigkeit/Bemühung (nicht der Erfolg)", "Lizenz"],
              correct: 2,
              explain: "Arzt schuldet Behandlung, nicht Heilung.",
            },
            {
              id: "imp_pol-vt-2_3",
              q: "IT-Projektvertrag: Meist welcher Typ?",
              options: [
                "Werkvertrag (konkretes Ergebnis)",
                "Mietvertrag",
                "Kaufvertrag",
                "Dienstvertrag",
              ],
              correct: 0,
              explain: "Kunde beauftragt konkretes Ergebnis (z.B. Netzwerk aufbauen).",
            },
            {
              id: "imp_pol-vt-2_4",
              q: "Managed-Service-Vertrag?",
              options: [
                "Werkvertrag",
                "Mietvertrag",
                "Kaufvertrag",
                "Dienstvertrag (laufende Betreuung)",
              ],
              correct: 3,
              explain: "Laufende IT-Betreuung = Dienstvertrag.",
            },
            {
              id: "imp_pol-vt-2_5",
              q: "SaaS-Abo rechtlich?",
              options: ["Kaufvertrag", "Mietvertrag / Lizenzvertrag", "Schenkung", "Werkvertrag"],
              correct: 1,
              explain: "Software-Nutzung auf Zeit = mietvertragsähnlich.",
            },
            {
              id: "imp_pol-vt-2_6",
              q: "Werkvertrag: Mängelhaftung?",
              options: [
                "Ja, Auftragnehmer haftet für Mängel am Werk",
                "Keine",
                "Nur bei Vorsatz",
                "Nur 6 Monate",
              ],
              correct: 0,
              explain: "Werk muss mangelfrei sein, sonst Nachbesserung.",
            },
            {
              id: "imp_pol-vt-2_7",
              q: "Abnahme bei Werkvertrag?",
              options: [
                "Pflicht: Kunde prüft und nimmt Werk ab",
                "Nur schriftlich",
                "Automatisch",
                "Optional",
              ],
              correct: 0,
              explain: "Abnahme = Kunde bestätigt, dass das Werk vertragsgemäß ist.",
            },
            {
              id: "imp_pol-vt-2_8",
              q: "Hardware-Kauf: Vertragstyp?",
              options: ["Mietvertrag", "Werkvertrag", "Dienstvertrag", "Kaufvertrag"],
              correct: 3,
              explain: "Server kaufen = Kaufvertrag.",
            },
            {
              id: "imp_pol-vt-2_9",
              q: "Leasing: Vertragstyp?",
              options: [
                "Kaufvertrag",
                "Schenkung",
                "Mietvertragsähnlich (Nutzung auf Zeit)",
                "Werkvertrag",
              ],
              correct: 2,
              explain: "Leasing = Gebrauchsüberlassung auf Zeit.",
            },
            {
              id: "imp_pol-vt-2_10",
              q: "Bei welchem Vertragstyp wird ein konkreter ERFOLG geschuldet?",
              options: ["Dienstvertrag", "Mietvertrag", "Leihvertrag", "Werkvertrag"],
              correct: 3,
              explain:
                "Das fertige Werk (z. B. funktionierende Netzwerkinstallation) wird geschuldet und ist abnahmefähig – Vergütung nach Abnahme.",
            },
            {
              id: "imp_pol-vt-2_11",
              q: "Ein Admin wird stundenweise für Wartungsarbeiten gebucht, ohne Erfolgsgarantie. Vertragstyp?",
              options: ["Werkvertrag", "Kaufvertrag", "Schenkung", "Dienstvertrag"],
              correct: 3,
              explain:
                "Geschuldet ist die Tätigkeit, nicht der Erfolg. Klassische Abgrenzung: Bezahlte Bemühung = Dienstvertrag; zugesagtes Ergebnis = Werkvertrag.",
            },
            {
              id: "imp_pol-vt-2_12",
              q: "Software as a Service (Cloud-Nutzung gegen monatliches Entgelt) ist rechtlich überwiegend …",
              options: [
                "eine Leihe",
                "ein Arbeitsvertrag",
                "ein Kaufvertrag",
                "ein Mietvertrag über die Softwarenutzung",
              ],
              correct: 3,
              explain:
                "Zeitweise Gebrauchsüberlassung gegen Entgelt = Miete; der Anbieter schuldet die Verfügbarkeit während der Laufzeit.",
            },
            {
              id: "imp_pol-vt-2_13",
              q: "Worin unterscheidet sich Leihe von Miete?",
              options: [
                "Miete ist immer unbefristet",
                "Es gibt keinen Unterschied",
                "Leihe gilt nur für Bücher",
                "Leihe ist unentgeltlich, Miete entgeltlich",
              ],
              correct: 3,
              explain:
                "Das kostenlose Testgerät vom Lieferanten ist eine Leihe – mit entsprechend schwächerer Haftung des Verleihers.",
            },
            {
              id: "imp_pol-vt-2_14",
              q: "Die Erstellung und Lieferung einer individuell angepassten Hardware-Lösung ist typischerweise ein …",
              options: [
                "reiner Mietvertrag",
                "Verwahrungsvertrag",
                "Maklervertrag",
                "Werklieferungsvertrag",
              ],
              correct: 3,
              explain:
                "§ 650 BGB: Auf die Lieferung herzustellender beweglicher Sachen findet überwiegend Kaufrecht Anwendung.",
            },
            {
              id: "imp_pol-vt-2_15",
              q: "Ein Wartungsvertrag mit Reaktionszeiten, Updates und Hotline ist rechtlich meist …",
              options: [
                "eine Bürgschaft des Anbieters für die Funktion der Hardware",
                "ein gemischter Vertrag mit dienst- und werkvertraglichen Elementen",
                "ein reiner Kaufvertrag über die gelieferten Ersatzteile",
                "ein Tarifvertrag zwischen Anbieter und Kundenbelegschaft",
              ],
              correct: 1,
              explain:
                "Bereitschaft/Hotline = Dienst; konkrete Störungsbeseitigung = Werk. Die SLA-Definitionen entscheiden im Streitfall.",
            },
            {
              id: "imp_pol-vt-2_16",
              q: "Was überträgt ein Software-Lizenzvertrag?",
              options: [
                "Keinerlei rechtliche Positionen; er hat lediglich informativen Charakter für den Käufer",
                "Nutzungsrechte am urheberrechtlich geschützten Programm in definiertem Umfang",
                "Das Urheberrecht selbst geht vollständig und dauerhaft auf den Lizenznehmer über",
                "Stets das volle Eigentum am Quellcode einschließlich aller Änderungsrechte",
              ],
              correct: 1,
              explain:
                "Das Urheberrecht verbleibt beim Schöpfer; die Lizenz regelt Art, Umfang und Dauer der Nutzung (z. B. Named User, Server).",
            },
            {
              id: "imp_pol-vt-2_17",
              q: "Warum ist die Abgrenzung Werk-/Dienstvertrag für IT-Projekte so wichtig?",
              options: [
                "Nur Werkverträge dürfen schriftlich geschlossen werden, Dienstverträge gelten nur mündlich",
                "Beim Werkvertrag trägt der Auftragnehmer das Erfolgsrisiko inkl. Gewährleistung und Abnahme",
                "Sie ist bedeutungslos, da beide Vertragstypen rechtlich identisch behandelt werden",
                "Sie entscheidet darüber, welche Partei die Büroausstattung des Projektteams stellt",
              ],
              correct: 1,
              explain:
                "Beim Dienstvertrag nicht. Festpreisprojekt mit Pflichtenheft = Werkvertrag; agile Mitarbeit nach Aufwand = eher Dienstvertrag. Das gehört in jedes Angebot sauber geregelt.",
            },
            {
              id: "imp_pol-vt-2_18",
              q: "Was sind die EVB-IT?",
              options: [
                "Ein anerkannter dualer Ausbildungsberuf im Bereich der IT-Vertragsverwaltung",
                "Eine EU-Behörde, die grenzüberschreitende IT-Beschaffungen zentral genehmigt",
                "Standardisierte Vertragsbedingungen der öffentlichen Hand für IT-Beschaffungen",
                "Ein symmetrisches Verschlüsselungsverfahren für elektronische Vertragsdokumente",
              ],
              correct: 2,
              explain:
                "Wer an Behörden verkauft, begegnet den Ergänzenden Vertragsbedingungen für die Beschaffung von IT-Leistungen.",
            },
            {
              id: "imp_pol-vt-2_19",
              q: "Ein Kunde 'kauft' eine unbefristete On-Premises-Lizenz mit Einmalzahlung. Welcher Vertragstyp passt am ehesten?",
              options: [
                "Kaufvertrag (Rechtskauf) über das dauerhafte Nutzungsrecht",
                "Mietvertrag über die Software mit laufender Gebrauchsüberlassung",
                "Arbeitsvertrag, da der Hersteller eine Dienstleistung erbringt",
                "Leihe, weil die Software unentgeltlich zur Nutzung überlassen wird",
              ],
              correct: 0,
              explain:
                "Dauerhafte Überlassung gegen Einmalentgelt wird kaufrechtlich behandelt – inkl. Gewährleistung für die Software.",
            },
          ],
        },
      ],
    },
    {
      id: "pol-br",
      title: "Mitbestimmung",
      lessons: [
        {
          id: "pol-br-1",
          title: "Betriebsrat & JAV",
          content: [
            { type: "heading", value: "Betriebsrat – Voraussetzungen & Wahl" },
            {
              type: "text",
              value:
                "Min. 5 wahlberechtigte AN im Betrieb (davon mind. 3 wählbar). Nur in Privatbetrieben (nicht Behörden). Wahlberechtigt: AN ab 16 J., mind. 3 Monate Betriebszugehörigkeit. Wählbar: AN ab 18 J., mind. 6 Monate (keine leitenden Angestellten). Amtszeit: 4 Jahre. Größe: ab 1 Mitglied je nach Betriebsgröße.",
            },
            { type: "heading", value: "3 Beteiligungsrechte" },
            {
              type: "text",
              value:
                "Mitbestimmungsrecht (stärkstes): Soziale Angelegenheiten (§87 BetrVG) – Arbeitszeit, Urlaub, Lohnzahlung, Überwachung, Betriebsordnung. Ohne BR-Zustimmung darf AG nichts anordnen, bei Streit entscheidet Einigungsstelle. Eingeschränktes Mitbestimmungsrecht: Personelle Angelegenheiten – Einstellung, Kündigung, Versetzung (§99, §102). §102: BR MUSS vor jeder Kündigung gehört werden, sonst Kündigung unwirksam! 1 Woche Frist. Mitwirkungsrecht: Wirtschaftliche Angelegenheiten (§106, §111) – Information und Beratung, aber KEIN Vetorecht. AG trifft Letztentscheidung.",
            },
            { type: "heading", value: "JAV – Jugend- und Auszubildendenvertretung" },
            {
              type: "text",
              value:
                "Voraussetzung: Min. 5 jugendliche AN (unter 18) und/oder Azubis. Wahlberechtigt: Alle jugendl. AN (unter 18) und alle Azubis – für Azubis gilt bei der Wahlberechtigung seit 2021 KEINE 25-Jahre-Grenze mehr (§ 61 BetrVG). Wählbar: AN unter 25 (keine BR-Mitglieder). Amtszeit: 2 Jahre. Aufgaben: Jugendinteressen im BR vertreten, Einhaltung JArbSchG überwachen, Gleichstellung fördern. Rechte: Teilnahme an BR-Sitzungen, Stimmrecht nur in Jugendfragen.",
            },
            {
              type: "note",
              value:
                "§102 BetrVG ist ein Prüfungsklassiker: BR muss VOR jeder Kündigung gehört werden. Ohne Anhörung = Kündigung unwirksam, egal ob berechtigt!",
            },
            { type: "heading", value: "Mitbestimmung konkret: Was Betriebsrat und JAV dürfen" },
            {
              type: "text",
              value:
                "Der Betriebsrat wird ab 5 ständigen wahlberechtigten Arbeitnehmern gewählt (Amtszeit 4 Jahre) und hat gestufte Rechte: INFORMATIONSRECHTE (z. B. über geplante Betriebsänderungen), BERATUNGSRECHTE (z. B. Personalplanung) und – am stärksten – erzwingbare MITBESTIMMUNGSRECHTE nach § 87 BetrVG: Beginn und Ende der Arbeitszeit, Urlaubsgrundsätze, Verhaltens-/Leistungskontrolle durch technische Einrichtungen (!), Betriebsordnung. Für IT-ler ist § 87 Abs. 1 Nr. 6 zentral: Jede Software, die Leistung oder Verhalten überwachen KANN (Zeiterfassung, Ticketauswertung je Mitarbeiter, Telefonanlagen-Statistik), ist mitbestimmungspflichtig – auch wenn Überwachung gar nicht beabsichtigt ist. Die JAV (Jugend- und Auszubildendenvertretung) vertritt jugendliche Beschäftigte unter 18 und alle Azubis (seit 2021 ohne Altersgrenze bei der Wahlberechtigung; nur die Wählbarkeit setzt unter 25 voraus), wird ab 5 solchen Beschäftigten gewählt (Amtszeit 2 Jahre) und arbeitet mit dem Betriebsrat zusammen – eigene Anträge laufen über ihn.",
            },
            { type: "heading", value: "Übungsaufgabe: Das neue Ticketsystem" },
            {
              type: "text",
              value:
                "Dein Betrieb führt ein Ticketsystem ein, das je Mitarbeiter Bearbeitungszeiten und Erstlösungsquote auswertet. Die Geschäftsführung sagt: „Reine Arbeitsorganisation, der Betriebsrat hat da nichts mitzureden.“ Nimm rechtlich Stellung und beschreibe den sauberen Einführungsweg.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: Die Aussage ist falsch. Das System erfasst personenbezogene Leistungsdaten und ist damit eine technische Einrichtung zur Leistungskontrolle im Sinne von § 87 Abs. 1 Nr. 6 BetrVG – erzwingbare Mitbestimmung, unabhängig von der Absicht; ohne Beteiligung ist die Einführung rechtswidrig und der Betriebsrat kann sie stoppen. Sauberer Weg: Betriebsrat früh informieren, Betriebsvereinbarung abschließen (Zweck der Auswertung, wer Zugriff hat, Auswertungsebene möglichst Team statt Person, Löschfristen, Verbot von Verhaltenssanktionen allein aus den Daten), Datenschutz parallel prüfen (DSGVO: Datenminimierung). Bonus: JAV einbinden, wenn Azubis betroffen sind.",
            },
          ],
          quiz: [
            {
              id: "imp_pol-br-1_0",
              q: "BR ab wie vielen AN?",
              options: ["5", "3", "20", "10"],
              correct: 0,
              explain: "5 wahlberechtigte AN.",
            },
            {
              id: "imp_pol-br-1_1",
              q: "§102 BetrVG: Kündigung ohne BR-Anhörung?",
              options: ["Nur bei Azubis", "Gültig", "Unwirksam", "Nur mit Abfindung"],
              correct: 2,
              explain: "Ohne BR-Anhörung ist die Kündigung unwirksam!",
            },
            {
              id: "imp_pol-br-1_2",
              q: "JAV Amtszeit?",
              options: ["6 Jahre", "4 Jahre", "2 Jahre", "1 Jahr"],
              correct: 2,
              explain: "JAV: 2 Jahre (BR: 4 Jahre).",
            },
            {
              id: "imp_pol-br-1_3",
              q: "BR bei wirtschaftlichen Fragen: Welches Recht?",
              options: [
                "Mitbestimmung",
                "Mitwirkung (nur Beratung)",
                "Eingeschränkte Mitbestimmung",
                "Kein Recht",
              ],
              correct: 1,
              explain: "Mitwirkungsrecht: Information und Beratung, aber kein Vetorecht.",
            },
            {
              id: "imp_pol-br-1_4",
              q: "BR Wahl: Amtszeit?",
              options: ["4 Jahre", "1 Jahr", "2 Jahre", "6 Jahre"],
              correct: 0,
              explain: "Betriebsrat: 4 Jahre Amtszeit.",
            },
            {
              id: "imp_pol-br-1_5",
              q: "§87 BetrVG?",
              options: ["Soziale Mitbestimmung", "Wirtschaft", "JAV", "Kündigung"],
              correct: 0,
              explain: "Arbeitszeit, Urlaub etc.",
            },
            {
              id: "imp_pol-br-1_6",
              q: "Wirtschaftl. Mitwirkung?",
              options: ["Keine Rechte", "Voll", "Veto", "Nur Beratung, kein Veto"],
              correct: 3,
              explain: "Information und Beratung.",
            },
            {
              id: "imp_pol-br-1_7",
              q: "Einigungsstelle?",
              options: ["Gericht", "Neutrale Stelle bei Streit BR/AG", "Nur Tarif", "Optional"],
              correct: 1,
              explain: "Entscheidet bei Uneinigkeit.",
            },
            {
              id: "imp_pol-br-1_8",
              q: "§ 99 BetrVG: Welches Recht hat der Betriebsrat bei einer Einstellung?",
              options: [
                "Gar keins",
                "Nur die Geschäftsführung entscheidet",
                "Zustimmungserfordernis – Verweigerung nur aus gesetzlichen Gründen",
                "Er stellt selbst ein",
              ],
              correct: 2,
              explain:
                "Bei Einstellung/Eingruppierung/Versetzung (Unternehmen mit i. d. R. mehr als 20 wahlberechtigten AN) braucht der AG die Zustimmung des BR; verweigern darf der BR nur aus den Gründen des § 99 Abs. 2. Die bloße ANHÖRUNG gilt bei Kündigungen (§ 102).",
            },
            {
              id: "imp_pol-br-1_9",
              q: "Bei welchen Themen hat der Betriebsrat ein echtes Mitbestimmungsrecht (§ 87 BetrVG)?",
              options: [
                "Bei der Auswahl der Kunden und Lieferanten, mit denen das Unternehmen Geschäftsbeziehungen eingeht",
                "U. a. Beginn/Ende der Arbeitszeit, Urlaubsgrundsätze und Einführung technischer Überwachungseinrichtungen",
                "Bei der Wahl der Firmenfarben und der Gestaltung des Unternehmenslogos für den Außenauftritt",
                "Bei der Kalkulation und Festlegung der Verkaufspreise für Produkte und Dienstleistungen",
              ],
              correct: 1,
              explain:
                "Ohne Einigung mit dem BR (oder Spruch der Einigungsstelle) darf der Arbeitgeber diese Maßnahmen nicht umsetzen – relevant z. B. bei Monitoring-Software!",
            },
            {
              id: "imp_pol-br-1_10",
              q: "Was gilt für eine Kündigung ohne vorherige Anhörung des Betriebsrats?",
              options: [
                "Sie ist unwirksam (§ 102 BetrVG)",
                "Sie wird automatisch zur Abmahnung",
                "Der BR muss zustimmen, sonst Geldstrafe",
                "Sie ist trotzdem gültig",
              ],
              correct: 0,
              explain:
                "Anhörung ist Pflicht; widerspricht der BR, kann der Arbeitnehmer u. U. Weiterbeschäftigung bis zum Urteil verlangen.",
            },
            {
              id: "imp_pol-br-1_11",
              q: "Ab welcher BR-Größe gilt welche Staffel – wie viele Mitglieder hat der BR bei 21–50 Arbeitnehmern?",
              options: ["15 Mitglieder", "3 Mitglieder", "7 Mitglieder", "1 Mitglied"],
              correct: 1,
              explain: "Staffel § 9 BetrVG: 5–20 AN = 1, 21–50 = 3, 51–100 = 5 Mitglieder usw.",
            },
            {
              id: "imp_pol-br-1_12",
              q: "Wie lange dauert die regelmäßige Amtszeit des Betriebsrats?",
              options: ["4 Jahre", "1 Jahr", "Auf Lebenszeit", "2 Jahre"],
              correct: 0,
              explain:
                "Regelwahlen finden alle vier Jahre statt (zuletzt im Frühjahr 2026); die JAV wird alle 2 Jahre gewählt.",
            },
            {
              id: "imp_pol-br-1_13",
              q: "Wer trägt die Kosten der Betriebsratsarbeit?",
              options: [
                "Die Gewerkschaft",
                "Der Arbeitgeber (§ 40 BetrVG)",
                "Die BR-Mitglieder privat",
                "Die IHK",
              ],
              correct: 1,
              explain:
                "Sachmittel, Räume, Schulungen – BR-Arbeit darf für Mitglieder weder Kosten noch Gehaltseinbußen bedeuten (Ehrenamt).",
            },
            {
              id: "imp_pol-br-1_14",
              q: "Wen vertritt die JAV?",
              options: [
                "Ausschließlich Praktikanten und Werkstudenten des Betriebs",
                "Jugendliche unter 18 und Auszubildende unter 25 Jahren",
                "Die ehemaligen Beschäftigten und Rentner des Betriebs",
                "Die Geschäftsleitung gegenüber den Auszubildenden",
              ],
              correct: 1,
              explain:
                "Gewählt werden kann sie ab 5 Wahlberechtigten; sie arbeitet eng mit dem Betriebsrat zusammen und nimmt an dessen Sitzungen teil.",
            },
            {
              id: "imp_pol-br-1_15",
              q: "Welche Rolle spielt der Wirtschaftsausschuss?",
              options: [
                "Er ersetzt die Geschäftsführung und trifft die unternehmerischen Entscheidungen",
                "Er beschließt die Jahresbilanz und stellt den Jahresabschluss förmlich fest",
                "Er prüft die Steuererklärungen des Unternehmens im Auftrag des Finanzamts",
                "In Unternehmen ab 100 AN informiert er den BR über wirtschaftliche Angelegenheiten",
              ],
              correct: 3,
              explain:
                "Im wirtschaftlichen Bereich hat der BR vor allem Informations- und Beratungsrechte – Mitbestimmung ist hier am schwächsten.",
            },
            {
              id: "imp_pol-br-1_16",
              q: "Was ist die Einigungsstelle?",
              options: [
                "Eine innerbetriebliche Schlichtungsstelle, die bei Nichteinigung in Mitbestimmungsfragen verbindlich entscheidet",
                "Ein staatliches Arbeitsgericht, das jeden Streit zwischen Arbeitgeber und Betriebsrat als erste Instanz verhandelt",
                "Eine Abteilung der IHK, die auf Antrag zwischen Betriebsrat und Arbeitgeber vermittelt und Bußgelder verhängen kann",
                "Der Aufsichtsrat des Unternehmens, der bei Streit zwischen Vorstand und Betriebsrat stets das letzte Wort hat",
              ],
              correct: 0,
              explain:
                "Paritätisch besetzt mit unparteiischem Vorsitz – ihr Spruch ersetzt die Einigung zwischen BR und Arbeitgeber.",
            },
            {
              id: "imp_pol-br-1_17",
              q: "Welche Schutzwirkung hat ein BR-Mandat für das Mitglied?",
              options: [
                "Ordentliche Kündigung ist während der Amtszeit und ein Jahr danach grundsätzlich ausgeschlossen",
                "Anspruch auf doppeltes Gehalt als Ausgleich für die zusätzliche Belastung durch das Amt",
                "Keine besondere – Betriebsratsmitglieder sind wie alle anderen Arbeitnehmer ordentlich kündbar",
                "Automatische Beförderung in die nächsthöhere Entgeltgruppe nach dem Ende der Amtszeit",
              ],
              correct: 0,
              explain:
                "Nur außerordentliche Kündigung mit Zustimmung des BR (oder gerichtlicher Ersetzung) bleibt möglich – Schutz der Unabhängigkeit.",
            },
            {
              id: "imp_pol-br-1_18",
              q: "In welchem Bereich wirkt der BR bei Einstellungen und Versetzungen mit?",
              options: [
                "Im personellen Bereich: Zustimmungsverweigerung aus gesetzlichen Gründen möglich (§ 99 BetrVG)",
                "Nur bei Auszubildenden: Bei regulären Arbeitnehmern hat der BR kein Beteiligungsrecht",
                "Nur bei Führungskräften: Leitende Angestellte unterliegen der vollen Mitbestimmung",
                "Gar nicht: Personalentscheidungen trifft der Arbeitgeber ohne jede Beteiligung des BR",
              ],
              correct: 0,
              explain:
                "In Unternehmen mit mehr als 20 wahlberechtigten Arbeitnehmern muss der AG vor personellen Einzelmaßnahmen die Zustimmung des BR einholen.",
            },
            {
              id: "imp_pol-br-1_19",
              q: "Die Geschäftsführung will eine Software einführen, die Tastatureingaben der Mitarbeiter protokolliert. Was gilt?",
              options: [
                "Reine IT-Entscheidung ohne Beteiligung des Betriebsrats",
                "Mitbestimmungspflichtig nach § 87 Abs. 1 Nr. 6 BetrVG",
                "Nur der Datenschutzbeauftragte entscheidet",
                "Zulässig, sofern die Überwachung heimlich erfolgt",
              ],
              correct: 1,
              explain:
                "Ohne BR-Einigung ist die technische Überwachung unzulässig. Für uns als IT-Dienstleister praxisrelevant: Monitoring-/DLP-Tools beim Kunden immer mit Hinweis auf BR-Mitbestimmung und Datenschutz einführen.",
            },
          ],
        },
      ],
    },
    {
      id: "pol-soz",
      title: "Sozialversicherung",
      lessons: [
        {
          id: "wiso-entgelt-1",
          title: "Entgeltabrechnung: von brutto nach netto",
          content: [
            {
              type: "text",
              value:
                "Was vom Bruttolohn übrig bleibt, entscheiden zwei Abzugsblöcke – beide werden PARALLEL vom Brutto berechnet, nicht nacheinander:\n\n1) STEUERN: Lohnsteuer (Höhe hängt von Steuerklasse und Bruttohöhe ab – unterhalb des Grundfreibetrags fällt keine an, daher zahlen viele Azubis 0 € Lohnsteuer), dazu ggf. Kirchensteuer (8/9 % DER Lohnsteuer) und in Resthöhe der Soli (betrifft nur sehr hohe Einkommen).\n\n2) SOZIALVERSICHERUNG (Arbeitnehmeranteile, Stand 2025 – Sätze jährlich prüfen!):\nKrankenversicherung: 7,3 % + die Hälfte des kassenindividuellen Zusatzbeitrags (Ø-Zusatzbeitrag ≈ 2,5 % → AN-Anteil ≈ 8,55 %)\nRentenversicherung: 9,3 %\nArbeitslosenversicherung: 1,3 %\nPflegeversicherung: ≈ 1,8 % (Kinderlose ab 23 zahlen einen Zuschlag, ab dem 2. Kind gibt es Abschläge)\nZusammen ≈ 20–21 % des Bruttos. Der Arbeitgeber zahlt seine Anteile ZUSÄTZLICH – sie erscheinen nicht auf deiner Abrechnung, machen dich für den Betrieb aber rund 21 % teurer als dein Brutto (plus Umlagen U1/U2/Insolvenzgeld).\n\nMerke die Reihenfolge auf der Abrechnung: Brutto → minus Steuern → minus SV-AN-Anteile → = Netto. Vermögenswirksame Leistungen oder Sachbezüge (geldwerter Vorteil, z. B. Jobticket über der Freigrenze) verändern das Steuer-Brutto.",
            },
            { type: "heading", value: "Übungsaufgabe: Azubi-Abrechnung" },
            {
              type: "text",
              value:
                "Ausbildungsvergütung 1.200 € brutto, Steuerklasse I, konfessionslos, 20 Jahre, kinderlos, Zusatzbeitrag der Kasse 2,5 %. a) Berechne die vier SV-Abzüge einzeln und das Netto (Lohnsteuer: 0 €, da unter dem Freibetrag). b) Was kostet der Azubi den Betrieb monatlich mindestens (ohne Umlagen), wenn der AG spiegelbildlich dieselben SV-Anteile trägt?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) KV: 1.200 × 8,55 % = 102,60 € · RV: 1.200 × 9,3 % = 111,60 € · AV: 1.200 × 1,3 % = 15,60 € · PV: 1.200 × 1,8 % = 21,60 € (unter 23 → kein Kinderlosen-Zuschlag)\nSumme SV = 251,40 € → Netto = 1.200 − 0 − 251,40 = 948,60 €\nb) AG-Anteile ≈ ebenfalls rund 251 € (KV/RV/AV spiegelbildlich, PV je nach Bundesland) → Gesamtkosten ≈ 1.200 + ≈ 251 ≈ 1.451 € + Umlagen. Faustformel: Brutto × ≈ 1,21.",
            },
            { type: "heading", value: 'Vertiefung: warum "brutto ist nicht netto" doppelt gilt' },
            {
              type: "text",
              value:
                "Für Gehaltsverhandlungen und Angebotskalkulationen musst du beide Richtungen kennen: Aus ARBEITNEHMERSICHT schrumpft das Brutto um Steuern + SV auf das Netto. Aus ARBEITGEBERSICHT wächst dasselbe Brutto um die AG-Anteile zu den Personal-Vollkosten – die wiederum in Stundensätze und Angebote einfließen (daher kostet eine Technikerstunde beim Dienstleister ein Vielfaches des Stundenlohns). Prüfungsfragen mischen gern beide Sichten: Lies genau, ob nach Netto, nach Abzügen oder nach Arbeitgeber-Gesamtkosten gefragt ist.",
            },
          ],
          quiz: [
            {
              id: "imp_wiso-entgelt-1_g0",
              q: "Welche Abzüge werden direkt vom Bruttolohn berechnet?",
              options: [
                "Erst die Steuern, danach die SV vom Reststeuerbetrag",
                "Erst die SV, danach die Steuern vom verbleibenden Betrag",
                "Steuern und Sozialversicherung jeweils parallel vom Brutto",
                "Nur die Steuern – die SV zahlt der Arbeitgeber allein",
              ],
              correct: 2,
              explain:
                "Beide Blöcke nehmen das Brutto als Basis – ein häufiger Prüfungsfehler ist das Nacheinander-Rechnen.",
            },
            {
              id: "imp_wiso-entgelt-1_g1",
              q: "Warum zahlen viele Azubis keine Lohnsteuer?",
              options: [
                "Ihr Jahresbrutto liegt unter dem Grundfreibetrag",
                "Auszubildende sind gesetzlich steuerbefreit",
                "Die Berufsschulzeit wird steuerlich gegengerechnet",
                "Der Betrieb übernimmt die Lohnsteuer während der Ausbildung",
              ],
              correct: 0,
              explain:
                "Keine Sonderregel für Azubis – nur der Grundfreibetrag wirkt. Steigt das Brutto, kommt Lohnsteuer.",
            },
            {
              id: "imp_wiso-entgelt-1_g2",
              q: "Wer trägt die Beiträge zur Renten- und Arbeitslosenversicherung?",
              options: [
                "Der Arbeitnehmer allein über die Abrechnung",
                "Der Staat aus Steuermitteln",
                "Der Arbeitgeber allein als Lohnnebenkosten",
                "Arbeitnehmer und Arbeitgeber je zur Hälfte",
              ],
              correct: 3,
              explain:
                "Paritätische Finanzierung – der AG-Anteil taucht nur nicht auf der Lohnabrechnung des AN auf.",
            },
            {
              id: "imp_wiso-entgelt-1_g3",
              q: "1.200 € brutto, RV-Satz 18,6 % gesamt. Wie hoch ist der AN-Anteil?",
              options: ["223,20 €", "111,60 €", "93,00 €", "55,80 €"],
              correct: 1,
              explain: "AN zahlt die Hälfte: 9,3 % von 1.200 € = 111,60 €.",
            },
            {
              id: "imp_wiso-entgelt-1_g4",
              q: "Was ist der Zusatzbeitrag in der Krankenversicherung?",
              options: [
                "Ein kassenindividueller Aufschlag, den AN und AG je zur Hälfte tragen",
                "Eine freiwillige Zusatzversicherung für Zahnersatz",
                "Der Beitragsanteil für die Pflegeversicherung",
                "Eine Einmalzahlung beim Kassenwechsel",
              ],
              correct: 0,
              explain:
                "Jede Kasse legt ihn selbst fest (Ø ≈ 2,5 % (2025)) – halbiert auf beide Seiten.",
            },
            {
              id: "imp_wiso-entgelt-1_g5",
              q: "Wer zahlt in der Pflegeversicherung einen Zuschlag?",
              options: [
                "Alle Auszubildenden im ersten Lehrjahr",
                "Beschäftigte über 50",
                "Kinderlose ab dem 23. Lebensjahr",
                "Teilzeitkräfte unter der Midijob-Grenze",
              ],
              correct: 2,
              explain:
                "Der Kinderlosen-Zuschlag greift ab 23; Eltern zahlen je nach Kinderzahl weniger.",
            },
            {
              id: "imp_wiso-entgelt-1_g6",
              q: "Die Kirchensteuer wird berechnet als …",
              options: [
                "8 oder 9 % des Bruttolohns",
                "8 oder 9 % der Lohnsteuer",
                "fester Monatsbetrag je Bundesland",
                "1,5 % des Nettolohns",
              ],
              correct: 1,
              explain:
                "Bemessungsgrundlage ist die Lohnsteuer, nicht das Brutto – daher zahlt ohne Lohnsteuer auch niemand Kirchensteuer.",
            },
            {
              id: "imp_wiso-entgelt-1_g7",
              q: "Was gehört zu den Arbeitgeber-Gesamtkosten, erscheint aber NICHT als Abzug auf der Abrechnung des Arbeitnehmers?",
              options: [
                "Die Lohnsteuer",
                "Der AN-Anteil zur Krankenversicherung",
                "Die vermögenswirksamen Leistungen des AN",
                "Die AG-Sozialversicherungsanteile und Umlagen",
              ],
              correct: 3,
              explain:
                "Sie machen den Mitarbeiter ≈ 21 % teurer als sein Brutto – wichtig für Stundensatz-Kalkulationen.",
            },
            {
              id: "imp_wiso-entgelt-1_g8",
              q: "Brutto 1.200 €, SV-Abzüge 246,60 €, Lohnsteuer 0 €. Netto?",
              options: ["1.026,40 €", "906,80 €", "953,40 €", "989,20 €"],
              correct: 2,
              explain: "1.200 − 246,60 = 953,40 €.",
            },
            {
              id: "imp_wiso-entgelt-1_g9",
              q: "Ein Jobticket über der Sachbezugs-Freigrenze ist …",
              options: [
                "immer komplett steuerfrei",
                "ein geldwerter Vorteil, der das Steuer-Brutto erhöht",
                "nur sozialversicherungspflichtig, nie steuerpflichtig",
                "vom Netto abzuziehen",
              ],
              correct: 1,
              explain:
                "Sachbezüge über der Freigrenze werden wie Lohn behandelt – Steuer- und SV-pflichtig.",
            },
          ],
        },
        {
          id: "pol-soz-1",
          title: "5 Säulen, Träger, Beiträge & Leistungen",
          content: [
            { type: "heading", value: "Die 5 Säulen im Detail" },
            {
              type: "text",
              value:
                "1. Krankenversicherung (KV): Träger: AOK, TK, IKK, BKK, Ersatzkassen. Beitrag: 14,6% + Zusatzbeitrag (Ø 2,5%) = ~17,1%, hälftig AG/AN. BBG: 66.150 EUR/Jahr (2025). Leistungen: Arztbesuche, Krankenhaus, Medikamente, Krankengeld (ab 7. Woche, 70% Brutto max. 90% Netto), Vorsorge, Mutterschaftshilfe, Reha.",
            },
            {
              type: "text",
              value:
                "2. Rentenversicherung (RV): Träger: Deutsche Rentenversicherung Bund. Beitrag: 18,6% hälftig. BBG: 96.600 EUR/Jahr (2025, bundeseinheitlich – die West/Ost-Trennung ist abgeschafft). Leistungen: Altersrente (ab 67), Erwerbsminderungsrente, Hinterbliebenenrente, Reha, Berufsförderung.",
            },
            {
              type: "text",
              value:
                "3. Arbeitslosenversicherung (AV): Träger: Bundesagentur für Arbeit (Nürnberg). Beitrag: 2,6% hälftig. ALG I: 60-67% Netto, max. 12 Mon. (24 Mon. bei >57 J.). Kurzarbeitergeld, Berufsberatung, Umschulung.",
            },
            {
              type: "text",
              value:
                "4. Pflegeversicherung (PV): Träger: Pflegekassen (bei Krankenkassen). Beitrag: 3,6% hälftig + 0,6% Kinderlosen-Zuschlag. Pflegegeld, Sachleistungen, Kurzzeitpflege, 5 Pflegegrade (seit 2017 inkl. Demenz).",
            },
            {
              type: "text",
              value:
                "5. Unfallversicherung (UV): Träger: Berufsgenossenschaften (branchenspezifisch). Beitrag: NUR Arbeitgeber (ca. 1-2%). NUR Arbeits-/Wegeunfälle + Berufskrankheiten! Verletztengeld, Verletztenrente, Reha, UVV-Schulungen.",
            },
            { type: "heading", value: "Prinzipien & Finanzierung" },
            {
              type: "text",
              value:
                "Versicherungsprinzip: Solidarität, Pflichtmitgliedschaft, Beiträge nach Einkommen (KV, RV, AV, PV, UV). Versorgungsprinzip: Steuermittel für besondere Dienste (Beamte, Kriegsopfer). Fürsorgeprinzip (Subsidiarität): Steuermittel, wenn nichts anderes greift (Sozialhilfe, Bürgergeld). Umlageverfahren: Heutige Beiträge finanzieren heutige Leistungen. Problem: Demografischer Wandel (Babyboomer in Rente, weniger Zahler).",
            },
            {
              type: "note",
              value:
                "Minijob-Grenze: 556 EUR/Mon. | Azubi-Geringverdienergrenze: 325 EUR/Mon. (AG zahlt allein) | Mindestlohn: 12,82 EUR/Std. (Stand 2025; die Minijob-Grenze ist dynamisch an den Mindestlohn gekoppelt – 2026: 603 EUR bzw. 13,90 EUR).",
            },
            { type: "heading", value: "Übungsaufgabe: Sozialversicherung" },
            {
              type: "text",
              value: "Nenne die 5 Säulen der Sozialversicherung und wer sie grundsätzlich zahlt.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG - 5 Säulen:\n1. Krankenversicherung (KV)\n2. Rentenversicherung (RV)\n3. Arbeitslosenversicherung (ALV)\n4. Pflegeversicherung (PV)\n5. Unfallversicherung (UV)\n\nFinanzierung:\n- KV, RV, ALV, PV: paritätisch (AN + AG je ~50%)\n  (Ausnahmen: PV-Zuschlag Kinderlose, KV-Zusatzbeitrag)\n- Unfallversicherung: ALLEIN der Arbeitgeber",
            },
          ],
          quiz: [
            {
              id: "imp_pol-soz-1_0",
              q: "UV zahlt wer?",
              options: ["AG", "AN", "Staat", "Beide"],
              correct: 0,
              explain: "Nur Arbeitgeber.",
            },
            {
              id: "imp_pol-soz-1_1",
              q: "KV Krankengeld ab wann?",
              options: ["Sofort", "Ab 7. Woche", "Ab 3 Monaten", "Ab 3. Tag"],
              correct: 1,
              explain: "Ab 7. Woche Arbeitsunfähigkeit (vorher: Lohnfortzahlung durch AG).",
            },
            {
              id: "imp_pol-soz-1_2",
              q: "ALG I Höhe?",
              options: ["50% Brutto", "60-67% Netto", "80% Brutto", "100% Netto"],
              correct: 1,
              explain: "60% (ohne Kind) bis 67% (mit Kind) des letzten Nettogehalts.",
            },
            {
              id: "imp_pol-soz-1_3",
              q: "Umlageverfahren bedeutet?",
              options: [
                "Beiträge werden am Kapitalmarkt für später angelegt",
                "Heutige Beiträge finanzieren heutige Leistungen",
                "Die Renten werden vollständig aus Steuern bezahlt",
                "Jeder spart auf einem eigenen Konto für seine Rente",
              ],
              correct: 1,
              explain: "Generationenvertrag: Aktive zahlen für aktuelle Rentner.",
            },
            {
              id: "imp_pol-soz-1_4",
              q: "PV Kinderlosenzuschlag?",
              options: ["0,35%", "1%", "0%", "0,6%"],
              correct: 3,
              explain: "Kinderlose ab 23 zahlen 0,6% mehr Pflegeversicherung.",
            },
            {
              id: "imp_pol-soz-1_5",
              q: "Beitragsbemessungsgrenze der Rentenversicherung (bundeseinheitlich, 2025) ca.?",
              options: ["59.850 EUR", "30.000 EUR", "120.000 EUR", "96.600 EUR"],
              correct: 3,
              explain:
                "Seit 2025 gilt bundeseinheitlich eine BBG von 96.600 EUR/Jahr (2026: 101.400 EUR) – die frühere West/Ost-Trennung ist abgeschafft. Oberhalb der BBG bleibt Einkommen beitragsfrei.",
            },
            {
              id: "imp_pol-soz-1_6",
              q: "KV-Beitrag insgesamt ca.?",
              options: ["~17,1 % (14,6 % + Ø-Zusatzbeitrag)", "7 %", "20 %", "25 %"],
              correct: 0,
              explain:
                "Allgemeiner Satz 14,6 % plus kassenindividueller Zusatzbeitrag (Ø 2025: 2,5 %) – beides je zur Hälfte von AG und AN getragen.",
            },
            {
              id: "imp_pol-soz-1_7",
              q: "RV Beitrag?",
              options: ["9,3%", "18,6%", "14,6%", "25%"],
              correct: 1,
              explain: "Hälftig.",
            },
            {
              id: "imp_pol-soz-1_8",
              q: "Generationenvertrag?",
              options: ["Steuern", "Sparen", "Kapital", "Heutige Beiträge = heutige Renten"],
              correct: 3,
              explain: "Umlageverfahren.",
            },
            {
              id: "imp_pol-soz-1_9",
              q: "Pflegegrade?",
              options: ["5 (seit 2017)", "10", "7", "3"],
              correct: 0,
              explain: "5 Grade inkl. Demenz.",
            },
            {
              id: "imp_pol-soz-1_10",
              q: "Was besagt das Solidarprinzip der Sozialversicherung?",
              options: [
                "Beiträge richten sich nach Einkommen, Leistungen nach Bedarf",
                "Jeder erhält exakt die Leistungen, die er selbst eingezahlt hat",
                "Beiträge zahlen nur diejenigen, die Leistungen in Anspruch nehmen",
                "Der Staat finanziert sämtliche Leistungen aus Steuermitteln",
              ],
              correct: 0,
              explain:
                "Die Gemeinschaft trägt das Risiko. Gegensatz: Äquivalenzprinzip der Privatversicherung (Prämie nach individuellem Risiko).",
            },
            {
              id: "imp_pol-soz-1_11",
              q: "Welche drei Prinzipien sozialer Sicherung werden unterschieden?",
              options: [
                "Erst-, Zweit- und Drittprinzip",
                "Versicherungs-, Versorgungs- und Fürsorgeprinzip",
                "Markt-, Plan- und Mischprinzip",
                "Brutto-, Netto- und Steuerprinzip",
              ],
              correct: 1,
              explain:
                "Versicherung = beitragsfinanziert (SV), Versorgung = steuerfinanziert für besondere Gruppen (z. B. Beamte), Fürsorge = bedarfsgeprüfte Hilfe (z. B. Bürgergeld/Sozialhilfe).",
            },
            {
              id: "imp_pol-soz-1_12",
              q: "Wer ist Träger der gesetzlichen Rentenversicherung?",
              options: [
                "Das Finanzamt",
                "Die Krankenkassen",
                "Die Berufsgenossenschaften",
                "Die Deutsche Rentenversicherung",
              ],
              correct: 3,
              explain:
                "Unfallversicherung → Berufsgenossenschaften, Arbeitslosenversicherung → Bundesagentur für Arbeit, KV/PV → Kranken-/Pflegekassen.",
            },
            {
              id: "imp_pol-soz-1_13",
              q: "Was bedeutet die Beitragsbemessungsgrenze?",
              options: [
                "Sie regelt den Mindestlohn",
                "Ab dieser Grenze verdoppeln sich die Beiträge",
                "Unterhalb zahlt niemand Beiträge",
                "Einkommen oberhalb der Grenze bleibt beitragsfrei",
              ],
              correct: 3,
              explain:
                "Der Beitrag steigt nicht weiter. Es gibt getrennte Grenzen für KV/PV und RV/AV; sie werden jährlich angepasst.",
            },
            {
              id: "imp_pol-soz-1_14",
              q: "Was ermöglicht die Familienversicherung der GKV?",
              options: [
                "Beitragsfreie Mitversicherung von Ehepartnern ohne/mit geringem Einkommen und Kindern",
                "Beitragsfreiheit für sämtliche Verwandte bis zum dritten Grad ohne Bedingungen",
                "Doppelte Leistungsansprüche für alle verheirateten Versicherten",
                "Eine kostenlose private Krankenversicherung für die gesamte Familie",
              ],
              correct: 0,
              explain:
                "Ein Ausdruck des Solidarprinzips – die PKV kennt das nicht, dort zahlt jede Person eine eigene Prämie.",
            },
            {
              id: "imp_pol-soz-1_15",
              q: "Wie finanziert sich die gesetzliche Rente überwiegend?",
              options: [
                "Ausschließlich aus Steuermitteln des Bundeshaushalts ohne eigene Beiträge",
                "Im Kapitaldeckungsverfahren: Jeder spart sein eigenes Rentenkapital an",
                "Überwiegend aus den Einnahmen der staatlichen Lotterien",
                "Im Umlageverfahren: Heutige Beitragszahler finanzieren heutige Renten",
              ],
              correct: 3,
              explain:
                "Generationenvertrag. Der demografische Wandel belastet das Umlageverfahren – daher die Diskussion um zusätzliche private/betriebliche Vorsorge.",
            },
            {
              id: "imp_pol-soz-1_16",
              q: "Welche Voraussetzung gilt grundsätzlich für Arbeitslosengeld I?",
              options: [
                "Ein Mindestalter von 50 Jahren, da jüngere Arbeitnehmer grundsätzlich Bürgergeld erhalten",
                "Mindestens 10 Jahre ununterbrochene Betriebszugehörigkeit beim letzten Arbeitgeber vor der Kündigung",
                "Keine Voraussetzungen – jeder Erwerbslose erhält es ab dem ersten Tag automatisch ohne Meldung",
                "Mindestens 12 Monate versicherungspflichtige Beschäftigung innerhalb der Rahmenfrist + Arbeitslosmeldung",
              ],
              correct: 3,
              explain:
                "ALG I ist Versicherungsleistung (ca. 60/67 % vom Netto); danach greift das bedarfsgeprüfte Bürgergeld (Fürsorgeprinzip).",
            },
            {
              id: "imp_pol-soz-1_17",
              q: "Wonach richtet sich die Leistung der Pflegeversicherung?",
              options: [
                "Nach dem Beruf",
                "Nach dem festgestellten Pflegegrad (1–5)",
                "Nach dem Kontostand",
                "Nach dem Alter allein",
              ],
              correct: 1,
              explain:
                "Der Medizinische Dienst begutachtet die Selbstständigkeit; je höher der Pflegegrad, desto höher die Leistungen.",
            },
            {
              id: "imp_pol-soz-1_18",
              q: "Was deckt die gesetzliche Unfallversicherung neben Arbeitsunfällen ab?",
              options: [
                "Sportwetten",
                "Freizeitunfälle im Urlaub",
                "Wegeunfälle und anerkannte Berufskrankheiten",
                "Autopannen",
              ],
              correct: 2,
              explain:
                "Leistungen: Heilbehandlung, Reha, Verletztengeld, ggf. Rente – Träger sind die Berufsgenossenschaften.",
            },
            {
              id: "imp_pol-soz-1_19",
              q: "Ein Azubi (Minijob daneben) fragt: Sind Minijobs voll sozialversicherungspflichtig?",
              options: [
                "Minijobs sind neben einer Ausbildung gesetzlich verboten, da die Ausbildungsvergütung als Vollzeitentgelt gilt",
                "Ja – Minijobber zahlen wie normale Arbeitnehmer in allen fünf Zweigen der Sozialversicherung volle Beiträge",
                "Nein – Minijobs sind für Arbeitnehmer weitgehend abgabenfrei; nur Pauschalbeiträge des Arbeitgebers, RV mit Opt-out",
                "Nur die Krankenversicherung entfällt; in allen übrigen Zweigen zahlt der Minijobber selbst volle Arbeitnehmerbeiträge",
              ],
              correct: 2,
              explain:
                "Wichtige Folge: Aus Minijobs entstehen kaum eigene Ansprüche (z. B. kein ALG I) – das übersehen viele.",
            },
          ],
        },
        {
          id: "wiso-sozstaat-1",
          title: "Sozialstaat, Generationenvertrag & Demografie",
          content: [
            { type: "heading", value: "Was heißt eigentlich Sozialstaat?" },
            {
              type: "text",
              value:
                "Das Sozialstaatsprinzip (Art. 20 GG) verpflichtet den Staat, für sozialen Ausgleich und ein menschenwürdiges Existenzminimum zu sorgen. Drei Wege, wie er das tut: Versicherungsprinzip (Leistungen aus eigenen Beiträgen: die fünf Sozialversicherungen Kranken-, Renten-, Arbeitslosen-, Pflege- und Unfallversicherung) · Versorgungsprinzip (Leistung ohne Beitrag für besondere Gruppen/Opfer, z. B. Beamtenpensionen, Kriegsopfer) · Fürsorgeprinzip (steuerfinanzierte Hilfe bei Bedürftigkeit nach Bedarfsprüfung: Bürgergeld, Sozialhilfe, Wohngeld). Prüfungsfrage-Klassiker: Welche Leistung gehört zu welchem Prinzip?",
            },
            { type: "heading", value: "Solidarprinzip vs. Äquivalenzprinzip" },
            {
              type: "text",
              value:
                "Die gesetzliche Sozialversicherung folgt dem Solidarprinzip: Beiträge richten sich nach dem Einkommen, Leistungen (etwa der Arztbesuch) nach dem Bedarf – Gesunde tragen Kranke mit, Gutverdiener zahlen absolut mehr für dieselbe Behandlung. Private Versicherungen folgen dem Äquivalenzprinzip: Der Beitrag richtet sich nach dem individuellen Risiko und der vereinbarten Leistung (deshalb zahlt der junge gesunde IT-ler in der PKV zunächst wenig – und im Alter deutlich mehr).",
            },
            { type: "heading", value: "Generationenvertrag & Umlageverfahren" },
            {
              type: "text",
              value:
                "Die gesetzliche Rente funktioniert im Umlageverfahren: Die heutigen Beitragszahler finanzieren direkt die heutigen Renten – gespart wird nichts. Das ist der „Generationenvertrag“. Er gerät unter Druck, weil der demografische Wandel das Verhältnis kippt: geburtenstarke Jahrgänge (Babyboomer) gehen in Rente, es rücken weniger Junge nach, die Lebenserwartung steigt. Folgen: weniger Beitragszahler je Rentner (Rentnerquotient steigt), Druck auf Beitragssatz, Rentenniveau und Renteneintrittsalter, wachsender Steuerzuschuss. Deshalb wird private und betriebliche Vorsorge (2./3. Säule) immer wichtiger – siehe Lektion „Private Vorsorge“.",
            },
            {
              type: "heading",
              value: "Demografie & Migration: Auswirkungen auf Wirtschaft und IT-Branche",
            },
            {
              type: "text",
              value:
                "Alterung und Schrumpfung der Erwerbsbevölkerung erzeugen Fachkräftemangel – in der IT besonders spürbar. Stellhebel der Politik und der Betriebe: Erwerbsbeteiligung erhöhen (Frauen, Ältere), Ausbildung und Weiterbildung (dein Ausbildungsplatz ist auch demografische Strategie deines Betriebs!), qualifizierte Zuwanderung (Fachkräfteeinwanderungsgesetz, Blaue Karte EU) und Produktivität durch Digitalisierung/Automatisierung. Migration wirkt dabei doppelt: Sie verjüngt kurzfristig die Erwerbsbevölkerung und stabilisiert die Sozialkassen, verlangt aber Integration in Arbeitsmarkt, Sprache und Bildung.",
            },
            {
              type: "note",
              value:
                "Merkhilfe Prinzipien: VERSICHERT = eingezahlt · VERSORGT = verdient (besonderes Opfer/Dienst) · FÜRSORGE = bedürftig (Bedarfsprüfung, steuerfinanziert). Rente = UMLAGE, kein Sparbuch.",
            },
            { type: "heading", value: "Übungsaufgabe: Prinzipien & Demografie" },
            {
              type: "text",
              value:
                "a) Ordne dem richtigen Prinzip zu: Bürgergeld · gesetzliche Rente · Beamtenpension. b) Erkläre in zwei Sätzen, warum der demografische Wandel das Umlageverfahren belastet. c) Nenne drei Maßnahmen, mit denen Betriebe oder Staat dem Fachkräftemangel begegnen können.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Bürgergeld = Fürsorgeprinzip (steuerfinanziert, Bedarfsprüfung) · gesetzliche Rente = Versicherungsprinzip (Beiträge) · Beamtenpension = Versorgungsprinzip.\nb) Im Umlageverfahren zahlen die heutigen Erwerbstätigen die heutigen Renten. Wenn weniger Junge nachrücken und Rentner länger leben, müssen immer weniger Zahler immer mehr Empfänger finanzieren.\nc) Z. B. Ausbildung/Übernahme, Weiterbildung/Umschulung, Erwerbsbeteiligung von Frauen und Älteren erhöhen, qualifizierte Zuwanderung, Automatisierung/Digitalisierung.",
            },
          ],
          quiz: [
            {
              id: "imp_wiso-sozstaat-1_0",
              q: "Bürgergeld gehört zu welchem Prinzip?",
              options: [
                "Versicherungsprinzip",
                "Versorgungsprinzip",
                "Fürsorgeprinzip",
                "Äquivalenzprinzip",
              ],
              correct: 2,
              explain: "Steuerfinanziert und an Bedürftigkeit geknüpft = Fürsorge.",
            },
            {
              id: "imp_wiso-sozstaat-1_1",
              q: "Solidarprinzip bedeutet …",
              options: [
                "Beitrag nach Einkommen, Leistung nach Bedarf",
                "Beitrag nach Risiko",
                "jeder spart für sich",
                "Leistung nur für Beamte",
              ],
              correct: 0,
              explain:
                "Kern der gesetzlichen Sozialversicherung – die Starken tragen die Schwachen mit.",
            },
            {
              id: "imp_wiso-sozstaat-1_2",
              q: "Die gesetzliche Rente wird finanziert im …",
              options: [
                "Kapitaldeckungsverfahren",
                "Steuerverfahren allein",
                "Fondsverfahren",
                "Umlageverfahren",
              ],
              correct: 3,
              explain:
                "Heutige Beiträge zahlen heutige Renten – Generationenvertrag statt Sparbuch.",
            },
            {
              id: "imp_wiso-sozstaat-1_3",
              q: "Private Krankenversicherung kalkuliert nach dem …",
              options: [
                "Solidarprinzip",
                "Fürsorgeprinzip",
                "Versorgungsprinzip",
                "Äquivalenzprinzip",
              ],
              correct: 3,
              explain: "Beitrag nach individuellem Risiko und vereinbarter Leistung.",
            },
            {
              id: "imp_wiso-sozstaat-1_4",
              q: "Demografischer Wandel heißt vor allem …",
              options: [
                "mehr Geburten, kürzeres Leben",
                "sinkende Lebenserwartung",
                "mehr Städte, weniger Land",
                "Alterung + weniger Erwerbstätige",
              ],
              correct: 3,
              explain:
                "Geburtenschwache Jahrgänge + steigende Lebenserwartung kippen das Verhältnis Zahler/Empfänger.",
            },
            {
              id: "imp_wiso-sozstaat-1_5",
              q: "Beamtenpensionen folgen dem …",
              options: [
                "Versorgungsprinzip",
                "Versicherungsprinzip",
                "Fürsorgeprinzip",
                "Solidarprinzip",
              ],
              correct: 0,
              explain:
                "Leistung ohne eigene Beiträge aufgrund des Dienstverhältnisses = Versorgung.",
            },
            {
              id: "imp_wiso-sozstaat-1_6",
              q: "Welche Folge hat der Wandel fürs Umlageverfahren NICHT?",
              options: [
                "steigender Rentnerquotient",
                "Druck auf Beitragssätze",
                "automatisch sinkende Steuerzuschüsse",
                "Debatte ums Renteneintrittsalter",
              ],
              correct: 2,
              explain: "Der Steuerzuschuss zur Rente steigt seit Jahren – er sinkt gerade nicht.",
            },
            {
              id: "imp_wiso-sozstaat-1_7",
              q: "Qualifizierte Zuwanderung wird u. a. geregelt durch …",
              options: [
                "das BDSG",
                "das KSchG",
                "die NIS2-Richtlinie",
                "das Fachkräfteeinwanderungsgesetz",
              ],
              correct: 3,
              explain:
                "Fachkräfteeinwanderungsgesetz und Blaue Karte EU erleichtern Arbeitsmigration Qualifizierter.",
            },
            {
              id: "imp_wiso-sozstaat-1_8",
              q: "Das Sozialstaatsprinzip steht in …",
              options: ["Art. 5 GG", "Art. 38 GG", "Art. 79 GG", "Art. 20 GG"],
              correct: 3,
              explain: "Art. 20: „demokratischer und sozialer Bundesstaat“.",
            },
            {
              id: "imp_wiso-sozstaat-1_9",
              q: "Warum ist deine Ausbildung auch Demografie-Strategie des Betriebs?",
              options: [
                "Azubis zahlen keine Steuern",
                "Azubis erhöhen die Rente",
                "Ausbildung ist gesetzlich verboten abzulehnen",
                "Sie sichert Nachwuchs gegen den Fachkräftemangel",
              ],
              correct: 3,
              explain:
                "Betriebe bilden aus, um trotz alternder Belegschaft qualifizierten Nachwuchs zu sichern.",
            },
            {
              id: "imp_wiso-sozstaat-1_10",
              q: "Welche Versicherung zählt NICHT zu den fünf Sozialversicherungen?",
              options: [
                "Unfallversicherung",
                "Pflegeversicherung",
                "Hausratversicherung",
                "Arbeitslosenversicherung",
              ],
              correct: 2,
              explain:
                "Hausrat ist eine private Sachversicherung – die fünf Säulen sind KV, RV, AV, PV, UV.",
            },
          ],
        },
      ],
    },
    {
      id: "pol-netz",
      title: "Anonymität im Netz & Medienkompetenz",
      lessons: [
        {
          id: "pol-ne-1",
          title: "Anonymität, Filterblasen & NetzDG",
          content: [
            { type: "heading", value: "Anonymität im Netz" },
            {
              type: "text",
              value:
                "Spannungsfeld Art. 5 GG (Meinungsfreiheit) vs. Art. 2 GG (Persönlichkeitsrecht). Anonymität endet, wo Straftaten beginnen: Beleidigung (§185 StGB), Volksverhetzung (§130), Bedrohung (§241). Pro: Schutz Privatsphäre, Whistleblower, freie Meinung. Contra: Hass/Hetze, schwere Strafverfolgung, Fake News, geringere Verantwortung.",
            },
            { type: "heading", value: "Filterblasen & Algorithmen" },
            {
              type: "text",
              value:
                "Plattformen finanzieren sich durch Werbung, Algorithmen optimieren auf Verweildauer. Folge: Filterblase (nur bestärkende Inhalte), Confirmation Bias, Radikalisierung. Rechtslage: Das deutsche NetzDG (2017 bis Mai 2024) verpflichtete große Plattformen, strafbare Inhalte nach Meldung zu löschen; die geplante Meldepflicht ans BKA trat praktisch nie in Kraft. Abgelöst wurde es durch den EU-weiten Digital Services Act (DSA) und das deutsche Digitale-Dienste-Gesetz (DDG): Melde- und Löschpflichten, Transparenzpflichten für Empfehlungssysteme, Aufsicht durch die Bundesnetzagentur.",
            },
            {
              type: "note",
              value:
                "Whistleblowerin Frances Haugen: Facebook-Algorithmus optimiert auf Wut, nicht auf Wohl der Menschen. Hassrede online führt zu realer Gewalt (Studie Schwarz: bei Internetausfall signifikant weniger Übergriffe).",
            },
            { type: "heading", value: "Anonymität, Meinungsmacht und Verantwortung im Netz" },
            {
              type: "text",
              value:
                "Das Netz vergisst nichts, und es sortiert, was du siehst: Empfehlungsalgorithmen optimieren auf Verweildauer, nicht auf Wahrheit – so entstehen Filterblasen (der Algorithmus zeigt dir mehr vom Gleichen) und Echokammern (du tauschst dich nur noch mit Gleichgesinnten aus). Anonymität hat dabei zwei Gesichter: Sie schützt Whistleblower und Meinungsfreiheit in Diktaturen – und sie enthemmt bei Beleidigung und Hetze. Rechtlich gilt: Auch anonym ist nicht rechtsfrei; Plattformen ab einer bestimmten Größe müssen rechtswidrige Inhalte nach Meldung prüfen und entfernen (in Deutschland früher NetzDG, heute EU-weit der Digital Services Act), Strafverfolgung kann Bestandsdaten abfragen. Für die Prüfung wichtig: Meinungsfreiheit endet bei Schmähkritik, Beleidigung, Volksverhetzung und Verleumdung – Kritik an Sachen ist weit geschützt, Angriffe auf Personen nicht.",
            },
            {
              type: "list",
              value: [
                "Filterblase: algorithmische Vorauswahl – der Nutzer merkt nicht, was er NICHT sieht.",
                "Echokammer: soziale Selbstsortierung in gleichgesinnte Gruppen.",
                "Desinformation erkennen: Quelle prüfen (Impressum?), Datum prüfen, Zweitquelle suchen, Bildersuche rückwärts.",
                "Digital Services Act (DSA): EU-Regeln für Plattformen – Melde- und Löschpflichten, Transparenz über Werbung und Empfehlungssysteme.",
                "Recht am eigenen Bild: Fotos anderer nur mit Einwilligung veröffentlichen (§ 22 KunstUrhG).",
              ],
            },
            { type: "heading", value: "Übungsaufgabe: Der Betriebs-Shitstorm" },
            {
              type: "text",
              value:
                "Über deinen Ausbildungsbetrieb kursiert in einem Bewertungsportal eine anonym verfasste, nachweislich falsche Tatsachenbehauptung („Die Firma installiert absichtlich Schadsoftware“). Dein Chef fragt dich: Was können wir rechtlich und praktisch tun? Nenne drei sinnvolle Schritte.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: (1) Beweise sichern: Screenshots mit Datum/URL – bevor der Beitrag geändert wird. (2) Beim Portal melden und Löschung verlangen: Falsche Tatsachenbehauptungen sind nicht von der Meinungsfreiheit gedeckt; Plattformen müssen nach Meldung prüfen (DSA), Bewertungsportale haften nach Kenntnis. (3) Bei Weigerung: anwaltliche Abmahnung/Unterlassung; parallel sachliche öffentliche Antwort des Betriebs (professionell, nicht emotional – Vier-Ohren-Modell!). Wichtig für die Bewertung: Unterscheidung Tatsachenbehauptung (beweisbar, ggf. verboten) vs. Meinungsäußerung („finde ich schlecht“ – geschützt).",
            },
          ],
          quiz: [
            {
              id: "imp_pol-ne-1_0",
              q: "Was verpflichtete das NetzDG (bis zu seiner Ablösung 2024)?",
              options: [
                "Alle Kommentare löschen",
                "Nur Werbung löschen",
                "Plattformen mussten strafbare Inhalte nach Meldung löschen",
                "Nutzer pauschal sperren",
              ],
              correct: 2,
              explain:
                "Das NetzDG verpflichtete große Plattformen, gemeldete strafbare Inhalte schnell zu entfernen. 2024 wurde es weitgehend vom EU-Digital Services Act (DSA) und dem Digitale-Dienste-Gesetz abgelöst, die diese Pflichten europaweit regeln.",
            },
            {
              id: "imp_pol-ne-1_1",
              q: "Filterblase bedeutet?",
              options: [
                "Anonymes Surfen",
                "Internetsperre",
                "Nur bestärkende Inhalte durch Algorithmen",
                "Nur Spam sehen",
              ],
              correct: 2,
              explain:
                "Algorithmen zeigen vorrangig Inhalte, die die bisherige Meinung bestätigen.",
            },
            {
              id: "imp_pol-ne-1_2",
              q: "Filterblase?",
              options: [
                "Spamfilter",
                "Werbefilter",
                "VPN",
                "Algorithmen zeigen nur bestätigende Inhalte",
              ],
              correct: 3,
              explain: "Personalisierte Algorithmen filtern gegensätzliche Meinungen heraus.",
            },
            {
              id: "imp_pol-ne-1_3",
              q: "Welche Regelung gilt heute für illegale Inhalte auf großen Plattformen?",
              options: [
                "Der EU-Digital Services Act (DSA): Melde- und Entfernungspflichten, Transparenzberichte",
                "ISPs müssen alle illegalen Seiten selbst sperren",
                "Es gilt allein das NetzDG (unverändert seit 2017)",
                "Jeder Nutzer ist gesetzlich verpflichtet, illegale Inhalte zu melden",
              ],
              correct: 0,
              explain:
                "Seit 2024 löst der DSA (mit dem deutschen Digitale-Dienste-Gesetz) das NetzDG weitgehend ab: abgestufte Pflichten je Plattformgröße, Meldewege, Transparenz – Verstöße kosten bis zu 6 % des Weltumsatzes.",
            },
            {
              id: "imp_pol-ne-1_4",
              q: "Echokammer?",
              options: [
                "Schallgedämmter Serverraum im Rechenzentrum",
                "Audioeffekt, der Hall in Tonaufnahmen erzeugt",
                "Geschlossene Gruppe, die nur die eigene Meinung bestätigt",
                "Öffentlicher Chatroom mit wechselnden Themen",
              ],
              correct: 2,
              explain:
                "Menschen umgeben sich nur mit Gleichgesinnten, Gegenmeinungen werden ausgeblendet.",
            },
            {
              id: "imp_pol-ne-1_5",
              q: "Recht auf Vergessenwerden?",
              options: [
                "Es gilt ausschließlich für Offline-Archive auf Papier",
                "Es steht nur Prominenten und Personen des öffentlichen Lebens zu",
                "Art. 17 DSGVO: Löschung personenbezogener Daten",
                "Ein solches Recht existiert im europäischen Recht nicht",
              ],
              correct: 2,
              explain: "Art. 17 DSGVO: Betroffene können Löschung ihrer Daten verlangen.",
            },
            {
              id: "imp_pol-ne-1_6",
              q: "Deepfake?",
              options: [
                "Hackerangriff",
                "KI-generierte gefälschte Videos/Audios",
                "Tiefes Lernen",
                "Spam",
              ],
              correct: 1,
              explain: "Deepfake: Täuschend echte KI-generierte Fälschungen.",
            },
            {
              id: "imp_pol-ne-1_7",
              q: "Informationelle Selbstbestimmung?",
              options: [
                "Ein Schutzrecht, das ausschließlich Unternehmen zusteht",
                "Das Grundrecht auf einen schnellen Internetanschluss",
                "Jeder bestimmt selbst über seine Daten (Grundrecht!)",
                "Eine optionale Selbstverpflichtung ohne rechtliche Basis",
              ],
              correct: 2,
              explain: "Grundrecht: Jeder entscheidet, wer seine Daten nutzen darf.",
            },
            {
              id: "imp_pol-ne-1_8",
              q: "Cybermobbing?",
              options: [
                "Systematisches Belästigen/Bloßstellen über digitale Medien",
                "Belästigungen ausschließlich im persönlichen Umfeld offline",
                "Beleidigungen, die nur in Online-Spielen vorkommen",
                "Ein Phänomen, das nur Erwachsene im Berufsleben betrifft",
              ],
              correct: 0,
              explain: "Digitales Mobbing: Rufschädigung, Belästigung online.",
            },
            {
              id: "imp_pol-ne-1_9",
              q: "Fake News erkennen?",
              options: [
                "KI-Filter der Plattformen erkennen Fake News zuverlässig",
                "Nur ausgebildete Journalisten können Fake News erkennen",
                "Quelle prüfen, Faktencheck, mehrere Quellen vergleichen",
                "Unmöglich – Fälschungen sind von Fakten nicht zu trennen",
              ],
              correct: 2,
              explain: "Quellenkritik: Wer sagt was, mit welcher Absicht, welche Belege?",
            },
            {
              id: "imp_pol-ne-1_10",
              q: "Was ist eine Filterblase?",
              options: [
                "Eine Firewall-Funktion, die unerwünschte Webseiten kategoriebasiert blockiert",
                "Ein Bildschirmschoner, der den Monitor bei Inaktivität vor dem Einbrennen schützt",
                "Algorithmen zeigen bevorzugt Inhalte, die zum bisherigen Verhalten passen",
                "Ein Antivirenprogramm, das verdächtige Downloads isoliert prüft",
              ],
              correct: 2,
              explain:
                "Abweichende Sichtweisen werden ausgeblendet. Personalisierung optimiert auf Verweildauer, nicht auf Ausgewogenheit – die eigene Wahrnehmung verengt sich unbemerkt.",
            },
            {
              id: "imp_pol-ne-1_11",
              q: "Was unterscheidet die Echokammer von der Filterblase?",
              options: [
                "Echokammern sind ein reines Rundfunkphänomen und entstehen durch die Nachhallräume in Radiostudios",
                "In der Echokammer verstärken sich Gleichgesinnte aktiv gegenseitig; die Filterblase entsteht passiv durch Algorithmen",
                "Filterblasen sind durch den Digital Services Act gesetzlich verboten, Echokammern dagegen erlaubt",
                "Nichts – beide Begriffe beschreiben denselben Mechanismus und sind beliebig austauschbar",
              ],
              correct: 1,
              explain:
                "Beide Effekte zusammen begünstigen Radikalisierung und die Verbreitung von Desinformation.",
            },
            {
              id: "imp_pol-ne-1_12",
              q: "Woran erkennt man Fake News am ehesten?",
              options: [
                "Gar nicht – Falschmeldungen sind von seriösen Nachrichten grundsätzlich nicht zu unterscheiden",
                "Reißerische Schlagzeile, fehlende/unklare Quellen, kein Impressum, starker Emotionsappell, kein Datum",
                "An besonders korrekter Rechtschreibung und Grammatik, denn Fälscher schreiben stets fehlerfrei",
                "Daran, dass sie auf Social Media stehen – dort veröffentlichte Inhalte sind grundsätzlich falsch",
              ],
              correct: 1,
              explain:
                "Prüfschritte: Quelle checken, Autor suchen, Datum prüfen, Gegenrecherche (z. B. seriöse Medien, Faktenchecker), Bilder-Rückwärtssuche.",
            },
            {
              id: "imp_pol-ne-1_13",
              q: "Was verpflichtete das NetzDG große Plattformen zu tun?",
              options: [
                "Alle Nutzer vor der Anmeldung per Ausweisdokument zu verifizieren und Klarnamen öffentlich anzuzeigen",
                "Nur noch in Deutschland erstellte Inhalte anzuzeigen und ausländische Beiträge zu blockieren",
                "Offensichtlich rechtswidrige Inhalte nach Meldung binnen 24 Stunden zu löschen und Meldewege bereitzustellen",
                "Personalisierte Werbung vollständig abzuschalten und nur noch kontextbasierte Anzeigen auszuspielen",
              ],
              correct: 2,
              explain:
                "Es galt für Plattformen ab 2 Mio. Nutzern in Deutschland; die Regelungen gingen weitgehend im EU-Digital-Services-Act auf.",
            },
            {
              id: "imp_pol-ne-1_14",
              q: "Welche EU-Verordnung regelt heute zentrale Plattformpflichten (Moderation, Meldewege, Transparenz)?",
              options: [
                "Die Spielzeugverordnung",
                "Der Digital Services Act (DSA)",
                "Die Maschinenrichtlinie",
                "REACH",
              ],
              correct: 1,
              explain:
                "Der DSA verschärft Pflichten für sehr große Plattformen (VLOPs) – inkl. Risikoanalysen und Auskunftspflichten.",
            },
            {
              id: "imp_pol-ne-1_15",
              q: "Worin unterscheidet sich Anonymität von Pseudonymität?",
              options: [
                "Pseudonymität ist in Deutschland gesetzlich verboten, erlaubt ist nur das Auftreten unter Klarnamen",
                "Anonym = Identität nicht feststellbar; pseudonym = Auftreten unter Deckname, Identität aber zuordenbar",
                "Beide Begriffe bezeichnen denselben Sachverhalt und werden nur regional unterschiedlich verwendet",
                "Anonymität existiert nur in der Offline-Welt, da im Internet jede Handlung technisch zurückverfolgbar ist",
              ],
              correct: 1,
              explain:
                "Z. B. beim Anbieter. Viele Dienste sind pseudonym: Der Nutzername verbirgt, die IP-/Bestandsdaten beim Anbieter identifizieren.",
            },
            {
              id: "imp_pol-ne-1_16",
              q: "Ist Hassrede im Netz strafbar?",
              options: [
                "Nur, wenn sich die Äußerung gegen prominente Personen des öffentlichen Lebens richtet",
                "Nein – im Internet gilt die Meinungsfreiheit unbegrenzt, Äußerungen dort sind grundsätzlich straffrei",
                "Ja – je nach Inhalt z. B. als Beleidigung, Volksverhetzung oder Bedrohung; das Internet ist kein rechtsfreier Raum",
                "Nur nach ausländischem Recht; das deutsche Strafrecht erfasst Online-Äußerungen nicht",
              ],
              correct: 2,
              explain:
                "Plattformen müssen strafbare Inhalte nach Meldung entfernen; Betroffene können Anzeige erstatten und Auskunftsansprüche verfolgen.",
            },
            {
              id: "imp_pol-ne-1_17",
              q: "Was ist Desinformation im Unterschied zur Falschinformation?",
              options: [
                "Desinformation wird absichtlich zur Täuschung verbreitet; Falschinformation kann auch ein Irrtum sein",
                "Es gibt keinen Unterschied, beide Begriffe werden juristisch synonym verwendet",
                "Desinformation ist grundsätzlich harmlos, da sie leicht als solche erkennbar ist",
                "Falschinformation ist strafbarer, weil der Irrtum den Vorsatz rechtlich verschärft",
              ],
              correct: 0,
              explain:
                "Die Absicht macht den Unterschied – Desinformationskampagnen zielen oft auf Meinungsbildung und Wahlen.",
            },
            {
              id: "imp_pol-ne-1_18",
              q: "Warum sind Deepfakes gesellschaftlich problematisch?",
              options: [
                "Die aufwendig gerenderten Videodateien belegen enorme Speicher- und Bandbreitenkapazitäten im Netz",
                "Täuschend echte Bild-/Ton-Fälschungen untergraben das Vertrauen in Medienbeweise und ermöglichen Betrug und Rufschädigung",
                "Sie betreffen ausschließlich Prominente und Politiker, Privatpersonen sind technisch nicht darstellbar",
                "Sie sind stets auf den ersten Blick an Bildfehlern erkennbar und daher gesellschaftlich harmlos",
              ],
              correct: 1,
              explain:
                "Auch im Unternehmenskontext relevant: CEO-Fraud per gefälschter Stimme ist dokumentierte Betrugsmasche.",
            },
            {
              id: "imp_pol-ne-1_19",
              q: "Welcher Schritt gehört zu seriöser Quellenkritik?",
              options: [
                "Die Information durch mindestens eine unabhängige zweite Quelle bestätigen lassen",
                "Nur die Überschrift lesen, da sie den Inhalt verlässlich zusammenfasst",
                "Der Quelle mit den meisten Likes und Followern glauben, da Reichweite Qualität belegt",
                "Die Meldung sofort teilen und auf Korrekturen aus der Community warten",
              ],
              correct: 0,
              explain:
                "Lateral reading: nicht auf der Seite bleiben, sondern prüfen, was andere über die Quelle schreiben.",
            },
          ],
        },
        {
          id: "wiso-medien-1",
          title: "Medienkompetenz: Desinformation erkennen",
          content: [
            { type: "heading", value: "Warum das ein Berufsschulthema ist" },
            {
              type: "text",
              value:
                "Meinungs- und Pressefreiheit (Art. 5 GG) sind Grundpfeiler der Demokratie – aber sie funktionieren nur mit Bürgern, die Informationen bewerten können. Als ITler bist du doppelt gefragt: privat als Mediennutzer, beruflich als derjenige, der Kollegen erklärt, warum die „dringende Mail vom Chef“ gefälscht ist. Desinformations- und Phishing-Erkennung nutzen dieselben Muskeln: Quelle prüfen, Druck erkennen, Gegencheck machen.",
            },
            { type: "heading", value: "Das Mediensystem in Deutschland" },
            {
              type: "text",
              value:
                "Öffentlich-rechtlicher Rundfunk (ARD, ZDF, Deutschlandradio): beitragsfinanziert (Rundfunkbeitrag je Haushalt), mit gesetzlichem Auftrag zu Grundversorgung, Ausgewogenheit und Vielfalt, kontrolliert durch Rundfunkräte – bewusst staatsFERN organisiert (Rundfunkfreiheit). · Private Medien: werbe- und abofinanziert, unterliegen Presserecht und freiwilliger Selbstkontrolle (Pressekodex, Presserat). · Plattformen und soziale Netzwerke: kuratieren per Algorithmus nach Engagement – was Emotionen auslöst, wird bevorzugt ausgespielt. Der EU-Digital-Services-Act (DSA) verpflichtet große Plattformen zu Risikominderung, Transparenz und Meldewegen.",
            },
            { type: "heading", value: "Desinformation, Filterblase, Deepfake" },
            {
              type: "text",
              value:
                "Desinformation ist bewusst verbreitete Falschinformation (Abgrenzung: Fehlinformation = unabsichtlich falsch; Satire = erkennbar überspitzt). Verstärker: Filterblase (Algorithmen zeigen dir mehr von dem, was du schon magst) und Echokammer (im eigenen Umfeld bestätigen sich alle gegenseitig). Neu dazu kommen KI-generierte Inhalte und Deepfakes – täuschend echte Bilder, Stimmen und Videos. Faustregel: Je stärker ein Inhalt Empörung oder Angst auslöst und zum sofortigen Teilen drängt, desto mehr Skepsis ist angebracht – das gleiche Social-Engineering-Prinzip wie beim Phishing (LF4).",
            },
            { type: "heading", value: "Der Fakten-Check-Werkzeugkasten" },
            {
              type: "text",
              value:
                "1. Quelle prüfen: Wer steht dahinter (Impressum!), gibt es die Redaktion wirklich, was sagt das „Über uns“? 2. Urheber & Datum: Ist der Inhalt aktuell oder ein alter Vorfall in neuem Kontext? 3. Zweitquelle: Berichten unabhängige seriöse Medien dasselbe? 4. Bilder rückwärtssuchen (Google Lens, TinEye) – stammt das Foto wirklich vom behaupteten Ereignis? 5. Faktenchecker nutzen (z. B. Correctiv, dpa-Faktencheck, AFP). 6. Bei KI-Verdacht: auf Artefakte achten (Hände, Schrift, Schatten), Quelle des Originals suchen. 7. Erst denken, dann teilen – du haftest mit deinem Ruf, im Betrieb sogar arbeitsrechtlich.",
            },
            {
              type: "note",
              value:
                "Merksatz: QUELLE – URHEBER – DATUM – BELEG – GEGENCHECK. Und: Empörung ist ein Werkzeug – wer dich wütend macht, will oft nicht informieren, sondern lenken.",
            },
            { type: "heading", value: "Übungsaufgabe: Meldung bewerten" },
            {
              type: "text",
              value:
                "In einer Messenger-Gruppe kursiert ein Screenshot: „EILMELDUNG: Ab Montag wird der Rundfunkbeitrag verdreifacht – Quelle: internes Ministeriumspapier“. Dazu ein dramatisches Foto eines Aktenordners. Beschreibe in 4–5 Schritten, wie du die Meldung prüfst, und nenne zwei Warnsignale, die schon auf den ersten Blick für Desinformation sprechen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nWarnsignale: extremer Empörungstrigger + Zeitdruck („ab Montag“), keine überprüfbare Quelle („internes Papier“ ohne Urheber), Verbreitung als Screenshot statt Link.\nPrüfschritte: 1. Originalquelle suchen (gibt es die Meldung bei einem seriösen Medium?). 2. Absender/Impressum des angeblichen Urhebers prüfen. 3. Datum kontrollieren (alte Meldung im neuen Kontext?). 4. Bild-Rückwärtssuche fürs Foto. 5. Faktenchecker (Correctiv/dpa) gegenprüfen. Ergebnis dokumentieren und in der Gruppe richtigstellen statt weiterleiten.",
            },
          ],
          quiz: [
            {
              id: "imp_wiso-medien-1_0",
              q: "Desinformation unterscheidet sich von Fehlinformation durch …",
              options: [
                "die Absicht zu täuschen",
                "die Länge des Textes",
                "das Medium",
                "die Sprache",
              ],
              correct: 0,
              explain:
                "Desinformation ist BEWUSST falsch; Fehlinformation ist unabsichtlich falsch.",
            },
            {
              id: "imp_wiso-medien-1_1",
              q: "Der öffentlich-rechtliche Rundfunk wird finanziert durch …",
              options: ["Werbung allein", "Steuern", "den Rundfunkbeitrag", "Spenden"],
              correct: 2,
              explain:
                "Beitragsfinanzierung je Haushalt sichert Unabhängigkeit von Staat und Werbemarkt.",
            },
            {
              id: "imp_wiso-medien-1_2",
              q: "Eine Filterblase entsteht, weil …",
              options: [
                "Medien zensiert werden",
                "Fakten geheim sind",
                "Browser Cookies löschen",
                "Algorithmen bevorzugt zeigen, was gefällt",
              ],
              correct: 3,
              explain:
                "Engagement-Optimierung zeigt mehr vom Gleichen – Gegenpositionen verschwinden aus dem Feed.",
            },
            {
              id: "imp_wiso-medien-1_3",
              q: "Bestes erstes Werkzeug bei einem verdächtigen Foto?",
              options: [
                "Kontrast erhöhen",
                "Kommentare lesen",
                "Weiterleiten und fragen",
                "Bild-Rückwärtssuche",
              ],
              correct: 3,
              explain: "Rückwärtssuche zeigt, ob das Bild alt ist oder aus anderem Kontext stammt.",
            },
            {
              id: "imp_wiso-medien-1_4",
              q: "Der Digital Services Act (DSA) verpflichtet …",
              options: [
                "große Plattformen zu Transparenz und Risikominderung",
                "Bürger zur Klarnamenpflicht",
                "Zeitungen zur Beitragszahlung",
                "Behörden zum Posten",
              ],
              correct: 0,
              explain:
                "Die EU-Verordnung nimmt vor allem sehr große Plattformen in die Pflicht (Meldewege, Werbetransparenz, Risikoanalysen).",
            },
            {
              id: "imp_wiso-medien-1_5",
              q: "Meinungs- und Pressefreiheit stehen in …",
              options: ["Art. 1 GG", "Art. 38 GG", "Art. 20 GG", "Art. 5 GG"],
              correct: 3,
              explain:
                "Art. 5 GG schützt Meinung, Information, Presse und Rundfunk – mit Schranken (allg. Gesetze, Jugendschutz, Ehre).",
            },
            {
              id: "imp_wiso-medien-1_6",
              q: "Deepfakes sind …",
              options: [
                "verschlüsselte Videos",
                "Phishing-Mails",
                "Datenbank-Duplikate",
                "KI-generierte täuschend echte Medien",
              ],
              correct: 3,
              explain:
                "KI erzeugt gefälschte Bilder/Stimmen/Videos – Erkennung: Artefakte, Quelle, Gegencheck.",
            },
            {
              id: "imp_wiso-medien-1_7",
              q: "Gemeinsames Muster von Desinformation und Phishing?",
              options: [
                "Beides nutzt Emotion und Zeitdruck",
                "Beides ist strafbar",
                "Beides kommt nur per Mail",
                "Beides betrifft nur Politik",
              ],
              correct: 0,
              explain:
                "Social Engineering: Empörung/Angst + Handlungsdruck schalten das kritische Denken aus.",
            },
            {
              id: "imp_wiso-medien-1_8",
              q: "Echokammer bedeutet …",
              options: [
                "ein Hall-Effekt bei Tonaufnahmen im Studio",
                "besonders laute Werbung in Radio und TV",
                "doppelte Datenhaltung in verteilten Systemen",
                "gegenseitige Bestätigung im gleichgesinnten Umfeld",
              ],
              correct: 3,
              explain: "Im homogenen Umfeld wirken Meinungen wie Fakten, weil Widerspruch fehlt.",
            },
            {
              id: "imp_wiso-medien-1_9",
              q: "Seriosität einer unbekannten News-Seite prüfst du zuerst über …",
              options: [
                "die Ladezeit",
                "die Anzahl der Bilder",
                "Impressum und Urheber",
                "die Domain-Endung allein",
              ],
              correct: 2,
              explain:
                "Impressumspflicht: Wer verantwortlich ist, muss erkennbar sein – fehlt es, Finger weg.",
            },
            {
              id: "imp_wiso-medien-1_10",
              q: "Der Presserat ist …",
              options: [
                "eine Behörde für Zensur",
                "Teil des Bundesrats",
                "ein EU-Gericht",
                "die freiwillige Selbstkontrolle der Presse",
              ],
              correct: 3,
              explain:
                "Er wacht mit dem Pressekodex über journalistische Standards und rügt Verstöße.",
            },
          ],
        },
      ],
    },
    {
      id: "pol-vert",
      title: "Vertragsrecht vertieft",
      lessons: [
        {
          id: "wiso-recht-1",
          title: "Kaufmann, Handelsregister, AGB & Widerruf",
          content: [
            {
              type: "text",
              value:
                "Vier Rechtsthemen, die im Geschäftsalltag ständig auftauchen:\n\nKAUFMANN & HANDELSREGISTER: Kaufmann ist, wer ein Handelsgewerbe betreibt (§ 1 HGB, Istkaufmann) – Kleingewerbetreibende können sich freiwillig eintragen lassen (Kannkaufmann), Kapitalgesellschaften wie GmbH/AG sind Formkaufleute kraft Rechtsform. Das HANDELSREGISTER (geführt beim Amtsgericht, öffentlich einsehbar) hat zwei Abteilungen: HRA für Einzelkaufleute und Personengesellschaften (e. K., OHG, KG), HRB für Kapitalgesellschaften (GmbH, UG, AG). Eintragungen genießen PUBLIZITÄT: Auf das, was im Register steht, darf man sich verlassen – z. B. wer Prokura hat.\n\nFür Kaufleute gilt STRENGERES Recht: Rügepflicht bei Warenlieferungen (§ 377 HGB – Mängel sofort melden, sonst gilt die Ware als genehmigt!), Formfreiheit für Bürgschaften, kaufmännisches Bestätigungsschreiben (Schweigen kann Zustimmung sein – anders als bei Privatleuten!).\n\nAGB (Allgemeine Geschäftsbedingungen): Vorformulierte Vertragsbedingungen für viele Verträge. Sie gelten nur, wenn bei Vertragsschluss auf sie HINGEWIESEN wurde und der Kunde zumutbar Kenntnis nehmen konnte. Überraschende Klauseln (§ 305c BGB) werden nicht Vertragsbestandteil; die Inhaltskontrolle (§§ 307–309) kippt unangemessene Klauseln – gegenüber Verbrauchern strenger als im B2B. Individualabreden schlagen AGB immer.\n\nWIDERRUF im Fernabsatz: Verbraucher (nicht Unternehmen!) können online/telefonisch geschlossene Verträge 14 Tage ohne Grund widerrufen. Frist läuft ab Warenerhalt; fehlt die Belehrung, verlängert sie sich auf bis zu 12 Monate + 14 Tage. Wichtige Ausnahmen: individuell angefertigte Ware, entsiegelte Software/Datenträger, schnell Verderbliches.",
            },
            { type: "heading", value: "Übungsaufgabe: Fälle einordnen" },
            {
              type: "text",
              value:
                "a) Die Möbelmanufaktur Falkenrode GmbH erhält 20 Switches, packt sie erst nach 5 Wochen aus und findet Transportschäden – kann sie noch reklamieren? b) Ein Verbraucher bestellt online eine individuell gravierte Tastatur und will nach 3 Tagen widerrufen. c) Im Kleingedruckten eines Hosting-Vertrags steht überraschend, dass der Kunde dem Anbieter seinen Firmenwagen überlässt – gilt das?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Nein (voraussichtlich): Beide sind Kaufleute → § 377 HGB Rügepflicht. Offensichtliche Mängel müssen unverzüglich nach Lieferung gerügt werden; nach 5 Wochen gilt die Ware als genehmigt. (Bei versteckten Mängeln: unverzüglich nach Entdeckung.)\nb) Kein Widerrufsrecht: individuell nach Kundenwunsch angefertigte Ware ist eine gesetzliche Ausnahme vom Fernabsatz-Widerruf.\nc) Nein: überraschende Klausel (§ 305c BGB) – damit muss niemand rechnen, sie wird nicht Vertragsbestandteil.",
            },
            { type: "heading", value: "Vertiefung: Warum das für IT-Betriebe zählt" },
            {
              type: "text",
              value:
                'Systemhäuser arbeiten fast immer B2B – dort gelten Rügepflicht (Wareneingangsprüfung dokumentieren!), Bestätigungsschreiben und AGB-Spielräume. Verkauft der Betrieb aber an Privatkunden (Onlineshop!), greifen Verbraucherrechte: Widerrufsbelehrung, Button-Lösung ("zahlungspflichtig bestellen"), strengere AGB-Kontrolle. Die Unterscheidung Verbraucher/Unternehmer ist die erste Frage jeder rechtlichen Bewertung.',
            },
          ],
          quiz: [
            {
              id: "imp_wiso-recht-1_g0",
              q: "In welcher Handelsregister-Abteilung steht eine GmbH?",
              options: ["HRA", "HRB", "HRC", "Gar nicht – nur AGs werden eingetragen"],
              correct: 1,
              explain:
                "HRB = Kapitalgesellschaften; HRA = Einzelkaufleute und Personengesellschaften.",
            },
            {
              id: "imp_wiso-recht-1_g1",
              q: "Was verlangt § 377 HGB von Kaufleuten?",
              options: [
                "Jährliche Bilanzveröffentlichung",
                "Unverzügliche Untersuchung und Mängelrüge bei Warenlieferungen",
                "Schriftform für alle Verträge",
                "Mitgliedschaft in der IHK",
              ],
              correct: 1,
              explain:
                "Wer zu spät rügt, verliert die Gewährleistung – die Ware gilt als genehmigt.",
            },
            {
              id: "imp_wiso-recht-1_g2",
              q: "Wann werden AGB Vertragsbestandteil?",
              options: [
                "Immer, sobald sie auf der Website stehen",
                "Nur bei notarieller Beurkundung",
                "Bei Hinweis vor Vertragsschluss und zumutbarer Möglichkeit der Kenntnisnahme",
                "Erst nach 14 Tagen ohne Widerspruch",
              ],
              correct: 2,
              explain: "Ohne Einbeziehung gelten sie nicht – überraschende Klauseln nie.",
            },
            {
              id: "imp_wiso-recht-1_g3",
              q: "Wie lange läuft die Widerrufsfrist im Fernabsatz regulär?",
              options: [
                "7 Tage ab Bestellung",
                "14 Tage ab Warenerhalt",
                "30 Tage ab Rechnung",
                "6 Wochen ab Vertragsschluss",
              ],
              correct: 1,
              explain: "Ohne ordnungsgemäße Belehrung verlängert sie sich drastisch.",
            },
            {
              id: "imp_wiso-recht-1_g4",
              q: "Wer hat KEIN Widerrufsrecht im Fernabsatz?",
              options: [
                "Ein Unternehmen, das für den Betrieb bestellt",
                "Eine Verbraucherin beim Online-Kauf",
                "Ein Azubi, der privat ein Notebook bestellt",
                "Ein Verein als Endverbraucher",
              ],
              correct: 0,
              explain: "Widerruf ist Verbraucherschutz – B2B ist ausgenommen.",
            },
            {
              id: "imp_wiso-recht-1_g5",
              q: "Individuell gravierte Ware im Onlineshop:",
              options: [
                "Widerruf wie immer möglich",
                "Widerruf nur innerhalb 7 Tagen",
                "Vom Widerruf ausgenommen (Anfertigung nach Kundenwunsch)",
                "Widerruf nur gegen Gebühr",
              ],
              correct: 2,
              explain: "Gesetzliche Ausnahme – ebenso entsiegelte Datenträger.",
            },
            {
              id: "imp_wiso-recht-1_g6",
              q: "Was bedeutet die Publizität des Handelsregisters?",
              options: [
                "Einträge sind geheim",
                "Auf eingetragene Tatsachen darf sich der Geschäftsverkehr verlassen",
                "Nur Kaufleute dürfen es einsehen",
                "Einträge kosten nichts",
              ],
              correct: 1,
              explain: "Z. B. eingetragene Prokura – Vertrauensschutz für Geschäftspartner.",
            },
            {
              id: "imp_wiso-recht-1_g7",
              q: "Eine GmbH ist Kaufmann …",
              options: [
                "nur bei über 250 Mitarbeitern",
                "kraft Rechtsform (Formkaufmann)",
                "nur nach freiwilliger Eintragung",
                "nie – nur natürliche Personen sind Kaufleute",
              ],
              correct: 1,
              explain:
                "Kapitalgesellschaften sind immer Kaufleute, unabhängig von Größe und Tätigkeit.",
            },
          ],
        },
        {
          id: "pol-vt-1",
          title: "Geschäftsfähigkeit & Willenserklärungen",
          content: [
            { type: "heading", value: "Geschäftsfähigkeit (3 Stufen)" },
            {
              type: "text",
              value:
                "Geschäftsunfähig (unter 7 / dauerhaft geistig erkrankt, §104 BGB): Willenserklärungen nichtig. Beschränkt geschäftsfähig (7-17 Jahre): Vorteilhafte Geschäfte wirksam, nachteilige schwebend unwirksam bis Eltern zustimmen. Ausnahme §110 BGB Taschengeldparagraph. Voll geschäftsfähig (ab 18): Alles wirksam.",
            },
            { type: "heading", value: "Nichtige Willenserklärungen" },
            {
              type: "text",
              value:
                "Von Anfang an unwirksam (ex tunc), keine Heilung. Gründe: Geschäftsunfähigkeit (§104), Scheingeschäft (§117), gesetzliches Verbot (§134), Sittenwidrigkeit/Wucher (§138), Formmangel (§125). Folge: Vertrag gilt als nie geschlossen.",
            },
            { type: "heading", value: "Anfechtbare Willenserklärungen" },
            {
              type: "text",
              value:
                "Zunächst wirksam, durch Anfechtung rückwirkend vernichtbar. Irrtum (§119): Erklärungsirrtum, Inhaltsirrtum, Eigenschaftsirrtum. Falsche Übermittlung (§120). Arglistige Täuschung / widerrechtliche Drohung (§123). Frist: Bei Irrtum unverzüglich, bei Täuschung/Drohung 1 Jahr.",
            },
            { type: "heading", value: "Prüfschema Vertragsrecht" },
            {
              type: "text",
              value:
                "1) Parteien und Rechtsfrage klären, 2) Rechtsgeschäft zustande gekommen? (Angebot + Annahme, Formvorschrift), 3) Geschäftsfähigkeit prüfen, 4) Nichtigkeitsgrund?, 5) Anfechtungsgrund? (Frist beachten!), 6) Ergebnis: wirksam / nichtig / anfechtbar.",
            },
            {
              type: "heading",
              value:
                "Geschäftsfähigkeit und Willenserklärungen: die Grundmaschine des Privatrechts",
            },
            {
              type: "text",
              value:
                "Jedes Rechtsgeschäft besteht aus Willenserklärungen – und wer sie wirksam abgeben kann, regelt die Geschäftsfähigkeit: Bis 6 Jahre geschäftsunfähig (Erklärungen nichtig). 7 bis 17 beschränkt geschäftsfähig: Verträge sind schwebend unwirksam, bis die Eltern zustimmen – wirksam sofort nur, wenn der Vertrag lediglich rechtlichen Vorteil bringt (Geschenk) oder der „Taschengeldparagraf“ § 110 BGB greift: mit Mitteln bewirkt, die dem Minderjährigen zur freien Verfügung überlassen wurden – WICHTIG: Der Vertrag muss vollständig ERFÜLLT sein; Ratenkäufe fallen nie unter § 110. Ab 18 voll geschäftsfähig. Willenserklärungen können angefochten werden bei Irrtum (Inhalts-/Erklärungsirrtum: unverzüglich), arglistiger Täuschung oder Drohung (binnen Jahresfrist) – Anfechtung macht das Geschäft rückwirkend nichtig.",
            },
            { type: "heading", value: "Übungsaufgabe: Der 16-Jährige und die Grafikkarte" },
            {
              type: "text",
              value:
                "Ein 16-jähriger Azubi (Ausbildungsvergütung 800 €, davon darf er frei verfügen) kauft: a) eine Grafikkarte für 240 € bar, b) ein Notebook für 1.100 € auf 12 Monatsraten. Die Eltern sind gegen beides. Bewerte beide Käufe.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: a) WIRKSAM nach § 110 BGB: Er hat mit Mitteln bezahlt, die ihm zur freien Verfügung überlassen wurden (Ausbildungsvergütung), und der Vertrag ist vollständig erfüllt (bar bezahlt, Ware übergeben). Die nachträgliche Missbilligung der Eltern ändert daran nichts. b) SCHWEBEND UNWIRKSAM: Ratenkauf ist nicht mit vorhandenen Mitteln „bewirkt“ – die Erfüllung steht aus. Ohne Genehmigung der Eltern wird der Vertrag endgültig unwirksam; der Händler kann die Ware zurückverlangen, bereits gezahlte Raten sind zurückzugewähren. Merksatz: § 110 = bar und fertig; Raten = nie.",
            },
          ],
          quiz: [
            {
              id: "imp_pol-vt-1_0",
              q: "Beschränkt geschäftsfähig = Alter?",
              options: ["7-17", "Ab 18", "14-17", "Unter 7"],
              correct: 0,
              explain: "7-17 Jahre = beschränkt geschäftsfähig.",
            },
            {
              id: "imp_pol-vt-1_1",
              q: "Anfechtungsfrist bei arglistiger Täuschung?",
              options: ["3 Jahre", "1 Woche", "1 Jahr", "Sofort"],
              correct: 2,
              explain: "Bei Täuschung/Drohung: 1 Jahr Anfechtungsfrist.",
            },
            {
              id: "imp_pol-vt-1_2",
              q: "§110 BGB Taschengeldparagraph erlaubt?",
              options: [
                "Alle Geschäfte",
                "Nur mit Eltern",
                "Nur online",
                "Geschäfte mit eigenen Mitteln (Taschengeld)",
              ],
              correct: 3,
              explain:
                "Minderjährige können Geschäfte mit frei verfügbaren Mitteln (Taschengeld) wirksam abschließen.",
            },
            {
              id: "imp_pol-vt-1_3",
              q: "Beschränkt geschäftsfähig?",
              options: ["Ab 21", "Unter 7", "7-17 Jahre", "Ab 18"],
              correct: 2,
              explain: "7-17: Beschränkt geschäftsfähig.",
            },
            {
              id: "imp_pol-vt-1_4",
              q: "Nichtiges Rechtsgeschäft?",
              options: ["Heilbar", "Anfechtbar", "Nur mündlich", "War nie gültig"],
              correct: 3,
              explain: "Nichtig = von Anfang an ungültig.",
            },
            {
              id: "imp_pol-vt-1_5",
              q: "Anfechtbar wegen?",
              options: ["Irrtum, Täuschung, Drohung", "Zu teuer", "Falsche Farbe", "Lieferverzug"],
              correct: 0,
              explain: "Irrtum (119), Täuschung/Drohung (123 BGB).",
            },
            {
              id: "imp_pol-vt-1_6",
              q: "Taschengeldparagraph §110?",
              options: [
                "Minderjährige können mit eigenem Geld wirksam kaufen",
                "Der Paragraph gilt nur für volljährige Personen",
                "Er verpflichtet Eltern zur Zahlung von Taschengeld",
                "Eltern müssen jedem einzelnen Kauf vorab zustimmen",
              ],
              correct: 0,
              explain: "§110 BGB: Geschäft wirksam wenn mit eigenen Mitteln bezahlt.",
            },
            {
              id: "imp_pol-vt-1_7",
              q: "Geschäftsunfähig?",
              options: [
                "Ab 18",
                "Nur bei Kindern",
                "7-17",
                "Unter 7 Jahre / in einem die freie Willensbestimmung dauerhaft ausschließenden Zustand (§ 104 BGB)",
              ],
              correct: 3,
              explain: "Unter 7 oder dauerhafte psychische Beeinträchtigung.",
            },
            {
              id: "imp_pol-vt-1_8",
              q: "Willenserklärung: 2 Teile?",
              options: [
                "Angebot + Preis",
                "Innerer Wille + äußere Erklärung",
                "Mündlich + schriftlich",
                "Text + Unterschrift",
              ],
              correct: 1,
              explain: "Innerer Wille (was man will) + Äußerung (wie man es erklärt).",
            },
            {
              id: "imp_pol-vt-1_9",
              q: "Kaufvertrag: Welche WE?",
              options: ["2 übereinstimmende (Angebot + Annahme)", "1", "Keine", "3"],
              correct: 0,
              explain: "2 WE: Angebot + Annahme = Vertrag.",
            },
            {
              id: "imp_pol-vt-1_10",
              q: "Wie sind die Stufen der Geschäftsfähigkeit geregelt?",
              options: [
                "0–13 geschäftsunfähig, 14–20 beschränkt geschäftsfähig, ab 21 voll geschäftsfähig",
                "0–17 geschäftsunfähig, ab 18 voll geschäftsfähig – nur zwei Stufen",
                "Jeder Mensch ist ab Geburt voll geschäftsfähig, Stufen gibt es nicht",
                "0–6 geschäftsunfähig, 7–17 beschränkt geschäftsfähig, ab 18 voll geschäftsfähig",
              ],
              correct: 3,
              explain:
                "Auch dauerhaft krankhaft Gestörte sind geschäftsunfähig (§ 104 BGB) – ihre Willenserklärungen sind nichtig.",
            },
            {
              id: "imp_pol-vt-1_11",
              q: "Ein 16-Jähriger kauft ohne Wissen der Eltern ein Notebook für 900 €. Der Vertrag ist …",
              options: [
                "sofort wirksam",
                "automatisch nichtig",
                "schwebend unwirksam",
                "nur mündlich gültig",
              ],
              correct: 2,
              explain:
                "Wirksam erst mit Genehmigung der Eltern. Verweigern die Eltern, ist der Vertrag endgültig unwirksam; bereits Geleistetes ist zurückzugewähren.",
            },
            {
              id: "imp_pol-vt-1_12",
              q: "Was regelt der 'Taschengeldparagraph' (§ 110 BGB)?",
              options: [
                "Ein generelles Kaufverbot für Minderjährige bei Geschäften über zehn Euro",
                "Die Zulässigkeit von Ratenkäufen Jugendlicher mit Zustimmung nur eines Elternteils",
                "Verträge Minderjähriger sind wirksam, wenn sie mit überlassenen Mitteln vollständig bewirkt wurden",
                "Die gesetzlich vorgeschriebene Mindesthöhe des Taschengelds je Altersstufe",
              ],
              correct: 2,
              explain:
                "Wichtig: Ratenkauf fällt NICHT darunter, da die Leistung nicht vollständig mit Taschengeld bewirkt ist.",
            },
            {
              id: "imp_pol-vt-1_13",
              q: "Aus welchen Komponenten besteht eine Willenserklärung?",
              options: [
                "Aus einem schriftlichen Angebot und der zugehörigen Rechnung",
                "Aus der Anwesenheit von mindestens zwei volljährigen Zeugen",
                "Ausschließlich aus der eigenhändigen Unterschrift beider Parteien",
                "Innerer Wille (Handlungs-, Erklärungs-, Geschäftswille) und dessen Äußerung",
              ],
              correct: 3,
              explain:
                "Auch konkludentes (schlüssiges) Handeln ist eine Erklärung – z. B. Ware aufs Kassenband legen.",
            },
            {
              id: "imp_pol-vt-1_14",
              q: "Was gilt für ein Scheingeschäft (§ 117 BGB)?",
              options: [
                "Es ist nichtig",
                "Es ist gültig, wenn beide schweigen",
                "Es ist anfechtbar binnen 14 Tagen",
                "Es wird automatisch ein echtes Geschäft",
              ],
              correct: 0,
              explain:
                "Die Erklärung wird nur zum Schein abgegeben. Beispiel: Im Kaufvertrag wird zum Schein ein niedrigerer Preis beurkundet – das Scheingeschäft ist nichtig, das verdeckte Geschäft wird nach seinen Regeln beurteilt.",
            },
            {
              id: "imp_pol-vt-1_15",
              q: "Eine durch widerrechtliche Drohung abgegebene Willenserklärung ist …",
              options: [
                "nur moralisch problematisch",
                "unanfechtbar",
                "anfechtbar (§ 123 BGB)",
                "sofort nichtig ohne Anfechtung",
              ],
              correct: 2,
              explain:
                "Binnen Jahresfrist ab Ende der Zwangslage. Gleiches gilt für arglistige Täuschung; die erfolgreiche Anfechtung vernichtet das Geschäft rückwirkend.",
            },
            {
              id: "imp_pol-vt-1_16",
              q: "Wann ist ein Geschäft wegen Wuchers nichtig (§ 138 BGB)?",
              options: [
                "Sobald ein Preis über dem üblichen Marktniveau liegt, ist das Geschäft automatisch nichtig",
                "Bei auffälligem Missverhältnis von Leistung und Gegenleistung unter Ausnutzung einer Zwangslage/Unerfahrenheit",
                "Nur bei Immobiliengeschäften; für Waren und Dienstleistungen gilt § 138 BGB nicht",
                "Nie – Wucher ist zivilrechtlich zulässig, die Preisgestaltung ist vollständig frei",
              ],
              correct: 1,
              explain:
                "Auch ohne Ausbeutungselement sind sittenwidrige Geschäfte nichtig – der Preis allein macht aber noch keinen Wucher.",
            },
            {
              id: "imp_pol-vt-1_17",
              q: "Ein Irrtum beim Vertippen (199 € statt 1.099 € im Shop) berechtigt zur …",
              options: [
                "Strafanzeige gegen den Kunden",
                "Nichts – Pech gehabt, immer",
                "Kündigung nach 2 Wochen",
                "Anfechtung wegen Erklärungsirrtums",
              ],
              correct: 3,
              explain:
                "Unverzüglich nach Entdeckung (§§ 119, 121 BGB). Der Anfechtende muss dem Vertrauenden ggf. den Vertrauensschaden ersetzen – relevant für jeden Onlineshop-Betreiber.",
            },
            {
              id: "imp_pol-vt-1_18",
              q: "Was ist ein einseitiges Rechtsgeschäft?",
              options: [
                "Es kommt durch EINE Willenserklärung zustande",
                "Ein Geschäft ohne Geld",
                "Ein besonders unfaires Geschäft",
                "Ein Vertrag mit nur einer Unterschrift von zweien",
              ],
              correct: 0,
              explain:
                "Z. B. Kündigung oder Testament. Verträge (Kauf, Miete) sind dagegen zwei- oder mehrseitige Rechtsgeschäfte aus übereinstimmenden Erklärungen.",
            },
            {
              id: "imp_pol-vt-1_19",
              q: "Liegt ein Rechtsgeschäft vor? – 'Ein Kollege verspricht, dir beim Umzug zu helfen.'",
              options: [
                "Ja, ein befristeter Arbeitsvertrag nach § 611a BGB",
                "Ja, eine formwirksame Schenkung im Sinne des § 516 BGB",
                "Nein – reine Gefälligkeit ohne Rechtsbindungswillen",
                "Ja, ein einklagbarer Werkvertrag über die Umzugsleistung",
              ],
              correct: 2,
              explain:
                "Abgrenzungsmerkmal ist der Rechtsbindungswille – bei Alltagsgefälligkeiten fehlt er typischerweise (Übungsfall-Klassiker).",
            },
          ],
        },
      ],
    },
    {
      id: "pol-priv",
      title: "Private Vorsorge & Versicherungen",
      lessons: [
        {
          id: "pol-pv-1",
          title: "Wichtige Privatversicherungen",
          content: [
            { type: "heading", value: "Warum private Vorsorge?" },
            {
              type: "text",
              value:
                "Gesetzliche SV deckt nur Grundbedarf. Private Versicherungen schließen Versorgungslücken. Demografischer Wandel setzt die gesetzliche Rente unter Druck; gesetzliche Haltelinie: Rentenniveau 48% (aktuell bis 2031 festgeschrieben).",
            },
            { type: "heading", value: "Die wichtigsten Versicherungen" },
            {
              type: "text",
              value:
                "1. Haftpflichtversicherung: Existenziell! Deckt Schäden, die man Dritten zufügt (§823 BGB), Forderungen können in die Millionen gehen, ab ca. 60 EUR/Jahr. 2. Berufsunfähigkeitsversicherung (BUZ): Sehr wichtig! 1 von 4 AN wird berufsunfähig, Staat zahlt nur Erwerbsminderungsrente (~750 EUR/Mon.). 3. Private KV/Zusatz: Zahnzusatz, Chefarzt, Krankentagegeld. 4. Private Unfallversicherung: Für Freizeit (gesetzl. UV nur bei Arbeit!). 5. Private Rentenversicherung: Riester (Zulagen), Rürup (Selbstständige), bAV (über Arbeitgeber). 6. Rechtsschutz: Anwalts-/Gerichtskosten, Wartezeiten beachten.",
            },
            {
              type: "note",
              value:
                "Reihenfolge der Wichtigkeit: 1. Haftpflicht, 2. BUZ, 3. KV-Zusatz, 4. Altersvorsorge. Erst die existenziellen Risiken absichern!",
            },
            {
              type: "heading",
              value: "Warum private Vorsorge dich schon im ersten Lehrjahr betrifft",
            },
            {
              type: "text",
              value:
                "Die gesetzliche Absicherung deckt Grundrisiken – aber mit Lücken, die im Schadensfall existenzbedrohend sind. Die WISO-Prüfung fragt regelmäßig, welche Versicherung welches Risiko deckt und welche für Berufsstarter Priorität hat. Die wichtigste Faustregel: Zuerst Existenzrisiken absichern (Schäden, die dich ruinieren können), dann erst Komfortrisiken. Konkret heißt das: Privathaftpflicht ist Pflichtprogramm Nummer eins – wer fahrlässig einen Menschen verletzt, haftet unbegrenzt mit allem, was er hat und verdienen wird. Nummer zwei ist die Berufsunfähigkeitsversicherung: Junge Leute bekommen sie günstig und gesund; die staatliche Erwerbsminderungsrente ersetzt nur einen Bruchteil des Einkommens. Danach folgen je nach Lebenslage Hausrat (lohnt erst mit eigenem Hausstand), Kfz-Haftpflicht (gesetzlich vorgeschrieben) und Auslandsreisekranken (billig, große Wirkung).",
            },
            {
              type: "list",
              value: [
                "Privathaftpflicht: deckt Schäden, die DU anderen zufügst – unbegrenzte gesetzliche Haftung, kleine Prämie.",
                "Berufsunfähigkeit (BU): ersetzt Einkommen bei dauerhafter Arbeitsunfähigkeit – je jünger der Abschluss, desto günstiger.",
                "Hausrat: eigener Hausstand gegen Feuer, Wasser, Einbruch – Neuwertprinzip.",
                "Kfz-Haftpflicht: Pflichtversicherung; Kasko ist freiwillig (Teilkasko Diebstahl/Glas, Vollkasko eigener Schaden).",
                "Risikolebensversicherung: nur relevant, wenn andere von deinem Einkommen abhängen.",
                "Kapitalbildende Lebensversicherung: Vorsicht – Prüfungsklassiker: Versicherung und Sparen zu mischen ist meist teuer und unflexibel.",
              ],
            },
            { type: "heading", value: "Übungsaufgabe: Beratungsfall" },
            {
              type: "text",
              value:
                "Dein Kollege (19, Azubi, wohnt bei den Eltern, kein Auto, fährt E-Bike) fragt, welche zwei Versicherungen er zuerst abschließen sollte – und ob sich die von einem Vertreter angebotene Kapitallebensversicherung „zum Sparen“ lohnt. Begründe.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: (1) Privathaftpflicht (falls nicht über die Eltern mitversichert – als Azubi in Erstausbildung oft noch familienversichert: PRÜFEN!): schützt vor unbegrenzter Haftung, z. B. Personenschaden mit dem E-Bike. (2) Berufsunfähigkeitsversicherung: sichert die Arbeitskraft – sein einziges „Kapital“ – zum günstigen Einstiegstarif. Kapitallebensversicherung: abzuraten – Versicherungsschutz und Geldanlage vermischen sich intransparent, hohe Abschlusskosten, geringe Flexibilität; wer sparen will, trennt Risikoabsicherung und Sparvorgang (z. B. BU + separater Sparplan).",
            },
          ],
          quiz: [
            {
              id: "imp_pol-pv-1_0",
              q: "Wichtigste private Versicherung?",
              options: ["Hausrat", "Haftpflicht", "Reiserücktritt", "Rechtsschutz"],
              correct: 1,
              explain: "Haftpflicht: Existenziell, Schäden können in die Millionen gehen.",
            },
            {
              id: "imp_pol-pv-1_1",
              q: "Gesetzliche UV deckt?",
              options: [
                "Alle Unfälle",
                "Nur Sportunfälle",
                "Nur Freizeitunfälle",
                "Nur Arbeits-/Wegeunfälle",
              ],
              correct: 3,
              explain:
                "Gesetzliche UV nur Arbeits-, Wege- und Berufserkrankungen. Freizeit = privat!",
            },
            {
              id: "imp_pol-pv-1_2",
              q: "Welche Versicherung schützt vor den Kosten, wenn DU anderen einen Schaden zufügst?",
              options: [
                "Hausrat",
                "Reiserücktritt",
                "Privathaftpflichtversicherung",
                "Rechtsschutz",
              ],
              correct: 2,
              explain:
                "Die Privathaftpflicht deckt Schäden, die du Dritten zufügst – Personenschäden können in die Millionen gehen, deshalb gilt sie als unverzichtbar. (Hausrat schützt dagegen dein eigenes Eigentum.)",
            },
            {
              id: "imp_pol-pv-1_3",
              q: "Berufsunfähigkeitsversicherung?",
              options: [
                "Nur für Beamte",
                "Pflichtversicherung",
                "Zahlt bei Jobverlust",
                "Zahlt Rente wenn Beruf nicht mehr ausübbar",
              ],
              correct: 3,
              explain:
                "Zahlt monatliche Rente wenn man seinen Beruf krankheitsbedingt nicht mehr ausüben kann.",
            },
            {
              id: "imp_pol-pv-1_4",
              q: "Riester-Rente?",
              options: [
                "Betriebsrente",
                "Gesetzliche Rente",
                "Nur für Beamte",
                "Staatlich geförderte private Altersvorsorge",
              ],
              correct: 3,
              explain: "Riester: Staatliche Zulagen + Steuervorteile für private Altersvorsorge.",
            },
            {
              id: "imp_pol-pv-1_5",
              q: "Hausratversicherung deckt?",
              options: [
                "Schäden, die man selbst Dritten zufügt (Haftpflichtfälle)",
                "Einrichtung/Gegenstände bei Einbruch, Feuer, Wasser",
                "Schäden an Dach, Mauerwerk und fest verbauten Gebäudeteilen",
                "Schäden am eigenen Pkw durch Unfall oder Diebstahl",
              ],
              correct: 1,
              explain: "Hausrat: Möbel, Elektronik, Kleidung bei Einbruch/Brand/Wasserschaden.",
            },
            {
              id: "imp_pol-pv-1_6",
              q: "BU-Versicherung?",
              options: ["Rente bei Berufsunfähigkeit", "Umzug", "Rente", "Jobverlust"],
              correct: 0,
              explain: "Krankheitsbedingt.",
            },
            {
              id: "imp_pol-pv-1_7",
              q: "Rechtsschutz?",
              options: [
                "Nur Firmen",
                "Pflicht",
                "Anwalts-/Gerichtskosten übernehmen",
                "Nur Arbeit",
              ],
              correct: 2,
              explain: "Kostenübernahme.",
            },
            {
              id: "imp_pol-pv-1_8",
              q: "Haftpflicht existenziell?",
              options: ["Schäden können Millionen kosten", "Pflicht", "Billig", "Nur Mieter"],
              correct: 0,
              explain: "Personenschäden!",
            },
            {
              id: "imp_pol-pv-1_9",
              q: "Riester Förderung?",
              options: ["Nichts", "Zulagen + Steuervorteile", "Garantie", "Kostenlos"],
              correct: 1,
              explain: "Staatliche Förderung.",
            },
            {
              id: "imp_pol-pv-1_10",
              q: "Warum gilt die Privathaftpflicht als wichtigste freiwillige Versicherung?",
              options: [
                "Sie ist wie die Kfz-Haftpflicht für alle Volljährigen gesetzlich vorgeschrieben",
                "Man haftet für verursachte Schäden unbegrenzt mit dem gesamten Vermögen (§ 823 BGB)",
                "Sie ersetzt vorrangig eigene Schäden am Hausrat und am persönlichen Eigentum",
                "Sie ersetzt die gesetzliche Krankenversicherung und übernimmt sämtliche Behandlungskosten",
              ],
              correct: 1,
              explain:
                "Ein Personenschaden kann Millionen kosten – die Haftpflicht deckt berechtigte Ansprüche und wehrt unberechtigte ab (passiver Rechtsschutz).",
            },
            {
              id: "imp_pol-pv-1_11",
              q: "Welche Versicherung ist für Autohalter gesetzlich vorgeschrieben?",
              options: [
                "Die Insassenunfallversicherung",
                "Die Vollkasko",
                "Keine",
                "Die Kfz-Haftpflichtversicherung",
              ],
              correct: 3,
              explain:
                "Sie deckt Schäden Dritter; Teil-/Vollkasko für das eigene Fahrzeug sind freiwillig.",
            },
            {
              id: "imp_pol-pv-1_12",
              q: "Worin unterscheiden sich Teil- und Vollkasko?",
              options: [
                "Die Teilkasko übernimmt Schäden, die du Dritten zufügst – dafür ist keine weitere Kfz-Versicherung erforderlich",
                "Die Vollkasko kann nur für Neuwagen in den ersten drei Jahren abgeschlossen werden, danach bleibt nur die Teilkasko",
                "Teilkasko: u. a. Diebstahl, Glas, Wild, Unwetter; Vollkasko zusätzlich selbstverschuldete Schäden am eigenen Auto und Vandalismus",
                "Es gibt keinen Unterschied im Leistungsumfang; die Tarife unterscheiden sich lediglich in der Selbstbeteiligung",
              ],
              correct: 2,
              explain:
                "Faustregel: junges/teures Fahrzeug → Vollkasko; älteres Fahrzeug → Teilkasko oder nur Haftpflicht.",
            },
            {
              id: "imp_pol-pv-1_13",
              q: "Was leistet eine Berufsunfähigkeitsversicherung?",
              options: [
                "Sie zahlt das bisherige Gehalt weiter, wenn der Arbeitgeber das Arbeitsverhältnis betriebsbedingt kündigt",
                "Sie übernimmt sämtliche Arzt- und Behandlungskosten, die die gesetzliche Krankenkasse nicht erstattet",
                "Sie finanziert berufliche Weiterbildungen und Umschulungen, um den beruflichen Aufstieg abzusichern",
                "Eine vereinbarte Rente, wenn der Beruf aus gesundheitlichen Gründen dauerhaft nicht mehr ausgeübt werden kann",
              ],
              correct: 3,
              explain:
                "Die gesetzliche Erwerbsminderungsrente ist niedrig und an strenge Bedingungen geknüpft – die BU schließt diese Lücke; früher Abschluss = günstige Beiträge.",
            },
            {
              id: "imp_pol-pv-1_14",
              q: "Was deckt die Hausratversicherung?",
              options: [
                "Das Gebäude selbst mit Dach, Mauern und fest verbauten Leitungen gegen Sturm- und Wasserschäden",
                "Bewegliches Eigentum in der Wohnung gegen Feuer, Leitungswasser, Sturm, Einbruchdiebstahl",
                "Schäden, die du anderen fahrlässig zufügst – etwa ein umgestoßenes Notebook beim Besuch",
                "Dein Bankkonto und Wertpapierdepot gegen Verluste durch Betrug und Phishing-Angriffe",
              ],
              correct: 1,
              explain:
                "Das Gebäude versichert die Wohngebäudeversicherung des Eigentümers – die Abgrenzung ist Standard-Prüfungsfrage.",
            },
            {
              id: "imp_pol-pv-1_15",
              q: "Was passiert bei Unterversicherung im Schadenfall?",
              options: [
                "Die Entschädigung wird anteilig gekürzt",
                "Der Vertrag wird teurer, zahlt aber voll",
                "Die Versicherung zahlt trotzdem alles",
                "Nichts",
              ],
              correct: 0,
              explain:
                "Verhältnis Versicherungssumme zu tatsächlichem Wert. Beispiel: Hausrat 60.000 € wert, nur 30.000 € versichert → bei 10.000 € Schaden gibt es nur 5.000 €.",
            },
            {
              id: "imp_pol-pv-1_16",
              q: "Wozu dient eine Selbstbeteiligung?",
              options: [
                "Der Kunde trägt Kleinschäden selbst",
                "Sie erhöht die Versicherungsleistung",
                "Sie ist eine Strafgebühr",
                "Sie ersetzt den Vertrag",
              ],
              correct: 0,
              explain:
                "Dafür sinkt die Prämie. Auch ein Steuerungsinstrument: Bagatellschäden werden nicht gemeldet, das hält die Verwaltung schlank.",
            },
            {
              id: "imp_pol-pv-1_17",
              q: "Worin unterscheiden sich Risiko- und Kapitallebensversicherung?",
              options: [
                "Beide Formen sind identisch: Sie zahlen ausschließlich im Todesfall und bauen kein Kapital auf",
                "Risiko-LV zahlt nur im Todesfall (reiner Hinterbliebenenschutz, günstig); Kapital-LV kombiniert Schutz mit Sparvorgang",
                "Die Risiko-LV zahlt in jedem Fall aus – spätestens zum Vertragsende erhält der Versicherte die Summe garantiert",
                "Kapital-LV darf in Deutschland seit 2008 nicht mehr neu abgeschlossen werden und existiert nur im Bestand",
              ],
              correct: 1,
              explain:
                "Verbraucherschützer empfehlen meist: Risiko trennen von Sparen ('Versichern und Sparen nicht mischen').",
            },
            {
              id: "imp_pol-pv-1_18",
              q: "Welche Versicherung übernimmt Anwalts- und Gerichtskosten?",
              options: [
                "Die Hausrat",
                "Die Rechtsschutzversicherung",
                "Die Haftpflicht in jedem Fall",
                "Die Pflegeversicherung",
              ],
              correct: 1,
              explain:
                "Je nach Baustein: Arbeit, Verkehr, Privat, Wohnen. Wartezeiten und Ausschlüsse beachten – ein bereits laufender Streit ist nicht mehr versicherbar.",
            },
            {
              id: "imp_pol-pv-1_19",
              q: "Ein Azubi fragt nach sinnvoller Absicherungs-Reihenfolge. Welche ist fachlich vertretbar?",
              options: [
                "Versicherungen lohnen sich grundsätzlich nie, da Schäden selten eintreten",
                "Zuerst eine Vollkasko fürs Fahrrad, alle weiteren Policen sind nachrangig",
                "1. Privathaftpflicht, 2. Berufsunfähigkeit, dann je nach Lebenslage Hausrat & Co.",
                "1. Handyversicherung, 2. Reisegepäckversicherung, mehr braucht ein Azubi nicht",
              ],
              correct: 2,
              explain:
                "Existenzbedrohende Risiken zuerst absichern – Bagatellrisiken (Handy, Brille) kann man selbst tragen.",
            },
          ],
        },
      ],
    },
    {
      id: "pol-bbig",
      title: "Berufsausbildung & BBiG",
      lessons: [
        {
          id: "pol-bb-1",
          title: "BBiG, Ausbildungsvertrag & Pflichten",
          content: [
            { type: "heading", value: "Berufsbildungsgesetz (BBiG)" },
            {
              type: "text",
              value:
                "Regelt die duale Ausbildung in Deutschland. Ausbildungsvertrag muss VOR Ausbildungsbeginn schriftlich geschlossen werden. Eintragung bei der IHK. Probezeit: 1-4 Monate (Pflicht). Während Probezeit: Kündigung jederzeit ohne Grund und ohne Frist (von beiden Seiten).",
            },
            { type: "heading", value: "Inhalte des Ausbildungsvertrags (nach Nachweisgesetz)" },
            {
              type: "text",
              value:
                "Art und Ziel der Ausbildung, Beginn und Dauer, Ausbildungsstätte, Ausbildungsmaßnahmen außerhalb, tägliche Arbeitszeit, Dauer der Probezeit, Vergütung (steigend pro Jahr), Urlaub, Kündigungsbedingungen, Hinweis auf Tarifverträge/Betriebsvereinbarungen.",
            },
            { type: "heading", value: "Pflichten Azubi" },
            {
              type: "text",
              value:
                "Lernpflicht (sich bemühen, Ausbildungsziel zu erreichen), Berufsschulpflicht, Weisungspflicht (Anweisungen des Ausbilders befolgen), Sorgfaltspflicht (Werkzeuge/Maschinen pfleglich behandeln), Schweigepflicht (Betriebs-/Geschäftsgeheimnisse), Berichtsheft führen (Ausbildungsnachweis).",
            },
            { type: "heading", value: "Pflichten Ausbildungsbetrieb" },
            {
              type: "text",
              value:
                "Ausbildungspflicht (systematisch, nach Ausbildungsordnung), Ausbilder bereitstellen (fachlich + persönlich geeignet, AEVO), kostenlose Ausbildungsmittel, Freistellung für Berufsschule und Prüfungen, Vergütung zahlen (angemessen, steigend), Berichtsheft kontrollieren, Zeugnis ausstellen.",
            },
            { type: "heading", value: "Kündigung in der Ausbildung" },
            {
              type: "text",
              value:
                "In Probezeit: Jederzeit, ohne Grund, ohne Frist. Nach Probezeit durch AG: Nur aus wichtigem Grund (fristlos). Nach Probezeit durch Azubi: 4 Wochen Frist, wenn Beruf aufgegeben oder anderer Beruf erlernt werden soll. Aufhebungsvertrag: Einvernehmlich jederzeit möglich.",
            },
            { type: "heading", value: "Deine Rechte und Pflichten im Ausbildungsverhältnis" },
            {
              type: "text",
              value:
                "Das Berufsbildungsgesetz (BBiG) ist dein Arbeitsrecht als Azubi. Der Ausbildungsvertrag muss VOR Beginn schriftlich niedergelegt werden und enthält u. a. Ausbildungsziel, Beginn/Dauer, Ausbildungsstätte, tägliche Ausbildungszeit, Vergütung, Urlaub, Probezeit (1–4 Monate, in der beide Seiten fristlos ohne Grund kündigen können). Nach der Probezeit kannst nur noch DU mit 4 Wochen Frist kündigen (Berufsaufgabe/-wechsel) – der Betrieb nur noch aus wichtigem Grund fristlos (nach Abmahnung). Deine Pflichten: Lernpflicht, Weisungen folgen, Berichtsheft führen, Berufsschule besuchen, Schweigepflicht über Betriebsgeheimnisse. Betriebspflichten: ausbilden (Ausbilder!), Vergütung (steigt jährlich, Mindestvergütung beachten), Freistellung für Berufsschule und Prüfungen, kostenlose Ausbildungsmittel, Zeugnis. Ausbildungsfremde Tätigkeiten (dauerhaft Kaffee kochen, Lager räumen) sind unzulässig. Bestehst du die Abschlussprüfung vorzeitig, endet die Ausbildung mit Bestehen – fällst du durch, verlängert sie sich auf Verlangen bis zur nächstmöglichen Wiederholung, maximal um ein Jahr.",
            },
            { type: "heading", value: "Übungsaufgabe: Drei Konfliktfälle" },
            {
              type: "text",
              value:
                "Bewerte: a) Dein Chef will dich in Woche 2 der Probezeit ohne Angabe von Gründen kündigen. b) Nach 18 Monaten sollst du seit 3 Monaten fast nur noch Pakete im Lager packen. c) Der Betrieb verweigert die Freistellung für den Berufsschultag, weil „viel zu tun“ ist.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: a) ZULÄSSIG – in der Probezeit können beide Seiten jederzeit fristlos ohne Grund kündigen (§ 22 Abs. 1 BBiG); schriftlich muss es sein. b) UNZULÄSSIG – dauerhafte ausbildungsfremde Tätigkeiten verletzen die Ausbildungspflicht; Weg: Gespräch mit Ausbilder, Berichtsheft als Beleg, dann JAV/Betriebsrat, notfalls Kammer (zuständige Stelle) einschalten. c) UNZULÄSSIG – die Freistellung für die Berufsschule ist gesetzliche Pflicht (§ 15 BBiG), Betriebsarbeit hat zurückzustehen; die Zeit gilt als Ausbildungszeit.",
            },
            { type: "heading", value: "Verkürzung, Verlängerung und der Weg nach der Ausbildung" },
            {
              type: "text",
              value:
                "Die Regelausbildung dauert 3 Jahre – aber sie ist flexibel. VERKÜRZUNG: Mit gutem Zeugnis (Abitur/Fachhochschulreife oft −12 Monate, Realschule −6) oder auf gemeinsamen Antrag mit dem Betrieb bei guten Leistungen (§ 8 BBiG); die VORZEITIGE ZULASSUNG zur Abschlussprüfung ist noch etwas anderes: Bei überdurchschnittlichen Leistungen (Betriebszeugnis + Berufsschulnoten, meist Schnitt besser als 2,49) kannst du die Prüfung ein halbes Jahr früher ablegen – der Antrag läuft über die zuständige Stelle (IHK). VERLÄNGERUNG: Wer die Abschlussprüfung nicht besteht, kann bis zur nächstmöglichen Wiederholung verlängern (auf Verlangen, max. 1 Jahr); auch bei längerer Krankheit oder auf Antrag ist Verlängerung möglich. Die Wiederholungsprüfung ist zweimal möglich – bereits bestandene Teile (schriftlich/mündlich) können unter Bedingungen angerechnet werden.",
            },
            {
              type: "text",
              value:
                "Nach dem IHK-Abschlusszeugnis ist nicht Schluss – der FISI-Abschluss ist ein Sprungbrett: WEITERBILDUNG zum Fachwirt (kaufmännisch-organisatorisch), zum Technischen Betriebswirt oder zum GEPRÜFTEN BERUFSSPEZIALISTEN / OPERATIVEN PROFESSIONAL (die neuen IT-Fortbildungsstufen, früher „IT-Techniker“). MEISTER-ÄQUIVALENT ist der Bachelor Professional (z. B. für Organisation und Führung). STUDIUM: Mit Ausbildung + Berufserfahrung geht auch ohne Abitur ein Informatik-Studium (berufsbegleitend oder dual im Anschluss). ZERTIFIZIERUNGEN vertiefen fachlich (Cisco CCNA, CompTIA, Microsoft, LPIC) und sind am Arbeitsmarkt bares Geld wert. Und ganz praktisch: die ÜBERNAHME – frag rechtzeitig (3–6 Monate vor Ende) nach einem unbefristeten Vertrag; ein Anspruch besteht nur für JAV-Mitglieder unter bestimmten Bedingungen, sonst ist es Verhandlungssache.",
            },
            { type: "heading", value: "Übungsaufgabe: Der eigene Fahrplan" },
            {
              type: "text",
              value:
                "Deine Ausbildung läuft gut (Schnitt 2,0), du willst früher fertig werden und danach möglichst weit kommen. a) Welche zwei Wege zur Zeitersparnis gibt es und wie unterscheiden sie sich? b) Skizziere einen realistischen 5-Jahres-Karriereplan nach dem FISI-Abschluss mit je einer Begründung.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: a) (1) VERKÜRZUNG der Ausbildungszeit (bei Antritt/während der Ausbildung, verkürzt die Vertragslaufzeit) vs. (2) VORZEITIGE ZULASSUNG zur Prüfung (bei sehr guten Leistungen ~6 Monate früher zur AP2, ohne den Vertrag formal zu verkürzen) – letzteres beantragst du bei der IHK mit Betriebs- und Schulzeugnis. b) Beispiel-Plan: Jahr 0 Abschluss + Übernahme sichern (Verhandlung 3–6 Monate vorher); Jahr 1 eine markttaugliche Zertifizierung (z. B. CCNA – vertieft Netzwerk, direkt einsetzbar); Jahr 2–3 Fortbildung zum Operativen Professional/Fachwirt berufsbegleitend (Aufstieg in Richtung Projekt-/Teamverantwortung); Jahr 4–5 Spezialisierung (z. B. Security oder Cloud) oder berufsbegleitendes Informatik-Studium (Bachelor Professional oder Hochschule) – je nach Ziel Führung vs. Fachexperte. Kernaussage: Zertifikate für schnelle Fachtiefe, Fortbildung/Studium für Aufstieg und Gehalt.",
            },
            { type: "heading", value: "Das duale System: zwei Lernorte, klare Rollen" },
            {
              type: "text",
              value:
                "Deine Ausbildung läuft im DUALEN SYSTEM – zwei Lernorte teilen sich die Arbeit: Der BETRIEB vermittelt die Praxis nach der bundeseinheitlichen Ausbildungsordnung (Grundlage: betrieblicher Ausbildungsplan; Rechtsrahmen: BBiG, Aufsicht: die Kammer). Die BERUFSSCHULE vermittelt Theorie und Allgemeinbildung nach dem Rahmenlehrplan der KMK – Schulrecht ist Ländersache, deshalb unterscheiden sich Stundentafeln je Bundesland. Die KAMMER (IHK/HWK) ist die „zuständige Stelle“: Sie trägt den Ausbildungsvertrag ins Verzeichnis ein, berät (Ausbildungsberater), überwacht die Eignung der Betriebe und nimmt die PRÜFUNGEN ab – nicht die Schule! Der Prüfungsausschuss ist paritätisch besetzt: Arbeitgeber-, Arbeitnehmervertreter und Lehrkraft. Vorteile des Systems: Praxisnähe, Fachkräftesicherung, anerkannte Abschlüsse; die Kombination gilt international als Exportschlager.",
            },
            {
              type: "note",
              value:
                "Merkhilfe Rollen: BETRIEB bildet aus (Praxis, BBiG) · SCHULE unterrichtet (Rahmenlehrplan, Länderrecht) · KAMMER prüft (Verzeichnis, AP1/AP2, Beratung).",
            },
          ],
          quiz: [
            {
              id: "imp_pol-bb-1_0",
              q: "Probezeit Ausbildung?",
              options: ["12 Monate", "Keine", "3-6 Monate", "1-4 Monate"],
              correct: 3,
              explain: "1-4 Monate Pflichtprobezeit.",
            },
            {
              id: "imp_pol-bb-1_1",
              q: "Kündigung in der Probezeit?",
              options: [
                "Beide, jederzeit, ohne Grund",
                "Nur mit wichtigem Grund",
                "Nur AG",
                "Nur Azubi",
              ],
              correct: 0,
              explain: "Beide Seiten können ohne Grund und ohne Frist kündigen.",
            },
            {
              id: "imp_pol-bb-1_2",
              q: "Wer stellt den Ausbildungsvertrag der IHK zu?",
              options: ["Azubi", "Eltern", "Berufsschule", "Ausbildungsbetrieb"],
              correct: 3,
              explain: "Der Betrieb meldet den Vertrag bei der IHK zur Eintragung an.",
            },
            {
              id: "imp_pol-bb-1_3",
              q: "Pflicht des Azubis: Berichtsheft?",
              options: ["Pflicht", "Optional", "Nur auf Verlangen", "Nur für Prüfung"],
              correct: 0,
              explain: "Ausbildungsnachweis (Berichtsheft) führen ist Azubi-Pflicht.",
            },
            {
              id: "imp_pol-bb-1_4",
              q: "AG Kündigung nach Probezeit?",
              options: [
                "4 Wochen Frist",
                "Gar nicht",
                "Jederzeit",
                "Nur aus wichtigem Grund (fristlos)",
              ],
              correct: 3,
              explain: "AG kann nach Probezeit nur fristlos aus wichtigem Grund kündigen.",
            },
            {
              id: "imp_pol-bb-1_5",
              q: "AEVO ist?",
              options: [
                "Arbeitserlaubnis",
                "Ausbildungsordnung",
                "Ausbilder-Eignungsverordnung",
                "Azubi-Eingangsverordnung",
              ],
              correct: 2,
              explain: "Ausbilder-Eignungsverordnung: Nachweis der Ausbilderbefähigung.",
            },
            {
              id: "imp_pol-bb-1_6",
              q: "Vergütung in der Ausbildung muss?",
              options: ["Gleich bleiben", "Jedes Jahr steigen", "Egal", "Jedes Jahr sinken"],
              correct: 1,
              explain: "Ausbildungsvergütung muss jährlich steigen (BBiG §17).",
            },
            {
              id: "imp_pol-bb-1_7",
              q: "Azubi will nach Probezeit kündigen: Frist?",
              options: ["2 Wochen", "Keine", "3 Monate", "4 Wochen"],
              correct: 3,
              explain: "Azubi: 4 Wochen Frist, nur wenn Beruf aufgegeben oder gewechselt wird.",
            },
            {
              id: "imp_pol-bb-1_8",
              q: "Freistellung für?",
              options: ["Nebenjob", "Sport", "Urlaub nur", "Berufsschule und Prüfungen"],
              correct: 3,
              explain: "Freistellung für Berufsschule und Prüfungen ist AG-Pflicht.",
            },
            {
              id: "imp_pol-bb-1_9",
              q: "Aufhebungsvertrag?",
              options: [
                "Einvernehmlich jederzeit möglich",
                "Nur durch AG",
                "Gibt es nicht",
                "Nur mit IHK-Genehmigung",
              ],
              correct: 0,
              explain: "Beide Seiten einigen sich auf Beendigung – jederzeit möglich.",
            },
            {
              id: "imp_pol-bb-1_10",
              q: "Wie lang darf die Probezeit im Ausbildungsverhältnis sein?",
              options: [
                "Es gibt keine Probezeit",
                "Bis zu 12 Monate",
                "Mindestens 1, höchstens 4 Monate (§ 20 BBiG)",
                "Genau 6 Monate immer",
              ],
              correct: 2,
              explain:
                "Während der Probezeit können beide Seiten jederzeit ohne Frist und ohne Grund kündigen.",
            },
            {
              id: "imp_pol-bb-1_11",
              q: "Was gilt für die Ausbildungsvergütung?",
              options: [
                "Sie ist eine freiwillige Leistung des Betriebs und kann jederzeit gestrichen werden",
                "Sie wird nur bei guten Leistungen in der Berufsschule und im Betrieb ausgezahlt",
                "Sie muss angemessen sein, jährlich steigen und es gilt die Mindestausbildungsvergütung",
                "Sie ist bundesweit für alle Ausbildungsberufe in identischer Höhe gesetzlich festgelegt",
              ],
              correct: 2,
              explain:
                "§ 17 BBiG; tarifgebundene Betriebe zahlen nach Tarif – der liegt regelmäßig über der Mindestvergütung.",
            },
            {
              id: "imp_pol-bb-1_12",
              q: "Wer trägt die Kosten für Ausbildungsmittel (Werkzeuge, Fachbücher für die Ausbildung im Betrieb)?",
              options: ["Der Ausbildungsbetrieb", "Die Eltern", "Der Azubi", "Die Berufsschule"],
              correct: 0,
              explain:
                "Kostenlose Bereitstellung (§ 14 BBiG). Auch Prüfungsgebühren der Kammer trägt der Betrieb; Berufsschulmaterial kann Ländersache sein.",
            },
            {
              id: "imp_pol-bb-1_13",
              q: "Welche Pflicht hat der Azubi bezüglich des Ausbildungsnachweises (Berichtsheft)?",
              options: [
                "Nur freiwillig führen",
                "Erst nach der Prüfung nachreichen",
                "Er wurde abgeschafft",
                "Ordnungsgemäß führen",
              ],
              correct: 3,
              explain:
                "Er ist Zulassungsvoraussetzung zur Abschlussprüfung. Führen während der Arbeitszeit ist zu ermöglichen; der Ausbilder zeichnet regelmäßig gegen (auch digital zulässig).",
            },
            {
              id: "imp_pol-bb-1_14",
              q: "Was gilt für die Freistellung zur Berufsschule?",
              options: [
                "Die Freistellung erfolgt grundsätzlich unbezahlt ohne Vergütung",
                "Freigestellt wird nur, wer gute schulische Leistungen nachweist",
                "Der Betrieb muss für Berufsschulzeiten und Prüfungen freistellen",
                "Berufsschule zählt als Freizeit und ist privat nachzuholen",
              ],
              correct: 2,
              explain:
                "Die Zeit wird angerechnet. § 15 BBiG; vor schriftlichen Abschlussprüfungen besteht zusätzlich Die Zeit wird angerechnet (§ 15 BBiG); zusätzlich ist der Tag vor der schriftlichen Abschlussprüfung freizustellen.",
            },
            {
              id: "imp_pol-bb-1_15",
              q: "Unter welchen Voraussetzungen kann die Ausbildungszeit verkürzt werden?",
              options: [
                "Automatisch mit Erreichen der Volljährigkeit des Azubis",
                "Auf gemeinsamen Antrag bei zu erwartendem Ausbildungserfolg",
                "Allein durch den Betrieb, ohne Beteiligung der Kammer",
                "Eine Verkürzung ist gesetzlich nicht vorgesehen",
              ],
              correct: 1,
              explain:
                "Z. B. Abitur, gute Leistungen, Vorbildung. Antrag an die zuständige Stelle (IHK); auch vorzeitige Zulassung zur AP bei überdurchschnittlichen Leistungen möglich (§ 45 BBiG).",
            },
            {
              id: "imp_pol-bb-1_16",
              q: "Die Abschlussprüfung wird nicht bestanden. Was gilt?",
              options: [
                "Der Ausbildungsbetrieb entscheidet allein, ob und wann der Auszubildende zur Wiederholungsprüfung zugelassen wird",
                "Die Prüfung ist endgültig nicht bestanden, eine Wiederholung ist im Berufsbildungsgesetz nicht vorgesehen",
                "Sie kann beliebig oft wiederholt werden, ohne dass sich das Ausbildungsverhältnis dabei verlängern kann",
                "Sie kann zweimal wiederholt werden; auf Verlangen verlängert sich die Ausbildung bis zur nächsten Wiederholung, max. 1 Jahr",
              ],
              correct: 3,
              explain: "§ 21, § 37 BBiG – wichtig zu wissen, nimmt Prüfungsdruck.",
            },
            {
              id: "imp_pol-bb-1_17",
              q: "Der Azubi arbeitet nach bestandener Prüfung einfach weiter, ohne neuen Vertrag. Rechtsfolge?",
              options: [
                "Er arbeitet schwarz und macht sich strafbar",
                "Das Ausbildungsverhältnis läuft unverändert weiter",
                "Es entsteht keinerlei Rechtsverhältnis zwischen beiden",
                "Es entsteht ein unbefristetes Arbeitsverhältnis (§ 24 BBiG)",
              ],
              correct: 3,
              explain:
                "Deshalb regeln Betriebe die Übernahme vorher schriftlich – oder beenden die Beschäftigung klar zum Prüfungstag.",
            },
            {
              id: "imp_pol-bb-1_18",
              q: "Welche Pflichten hat der Ausbildende (Betrieb)?",
              options: [
                "Er darf dem Azubi beliebige Hilfsarbeiten wie Kaffeekochen übertragen, solange die Vergütung gezahlt wird",
                "Keine besonderen Pflichten – das BBiG regelt ausschließlich die Pflichten der Auszubildenden",
                "Nur die Ausbildungsvergütung pünktlich zahlen; die inhaltliche Ausbildung übernimmt allein die Berufsschule",
                "Planmäßig ausbilden, Ausbilder bereitstellen, nur ausbildungsbezogene Aufgaben übertragen, Zeugnis ausstellen",
              ],
              correct: 3,
              explain:
                "Ausbildungsfremde Tätigkeiten (dauerhaft Botengänge, Putzen) verstoßen gegen § 14 BBiG – Beschwerdeweg: Ausbilder → BR/JAV → Kammer.",
            },
            {
              id: "imp_pol-bb-1_19",
              q: "Welche zentrale Pflicht hat der Azubi?",
              options: [
                "Überstunden ohne Freizeitausgleich zu leisten, wenn betriebliche Auftragsspitzen dies kurzfristig erfordern",
                "Eigenes Werkzeug und Arbeitsmittel auf eigene Kosten zu beschaffen und instand zu halten",
                "Gewinn zu erwirtschaften: Der Azubi muss seine Ausbildungsvergütung durch produktive Arbeit selbst erwirtschaften",
                "Lernpflicht: sich ernsthaft bemühen, die berufliche Handlungsfähigkeit zu erwerben; Weisungen folgen; Berufsschule besuchen",
              ],
              correct: 3,
              explain:
                "Im Gegenzug schuldet der Betrieb Ausbildung statt Arbeitsleistung – das Ausbildungsverhältnis ist kein normales Arbeitsverhältnis.",
            },
            {
              id: "imp_pol-bb-1_g_du1",
              q: "Wer nimmt AP1 und AP2 ab?",
              options: [
                "die Berufsschule",
                "der Ausbildungsbetrieb",
                "die zuständige Kammer (IHK/HWK)",
                "das Kultusministerium",
              ],
              correct: 2,
              explain:
                "Die Kammer als zuständige Stelle organisiert die Prüfungen mit paritätischem Prüfungsausschuss.",
            },
            {
              id: "imp_pol-bb-1_g_du2",
              q: "Warum unterscheiden sich Berufsschul-Stundenpläne je Bundesland?",
              options: [
                "Schulrecht ist Ländersache",
                "die IHK legt sie zufällig fest",
                "das BBiG verbietet Einheitlichkeit",
                "wegen der Zeitzonen",
              ],
              correct: 0,
              explain:
                "Rahmenlehrpläne kommen von der KMK, die Umsetzung regeln die Länder (Föderalismus/Kulturhoheit).",
            },
          ],
        },
      ],
    },
    {
      id: "pol-tarif",
      title: "Tarifverträge & Arbeitskampf",
      lessons: [
        {
          id: "pol-ta-1",
          title: "Tarifvertrag, Streik & Aussperrung",
          content: [
            { type: "heading", value: "Tarifvertragsarten" },
            {
              type: "text",
              value:
                "Manteltarifvertrag: Regelt allgemeine Arbeitsbedingungen (Arbeitszeit, Urlaub, Kündigungsfristen). Läuft meist mehrere Jahre. Entgelttarifvertrag (Lohntarifvertrag): Regelt Löhne/Gehälter und Zulagen. Kürzere Laufzeit (12-24 Monate). Rahmentarifvertrag: Regelt Eingruppierung in Entgeltgruppen nach Qualifikation/Tätigkeit.",
            },
            { type: "heading", value: "Tarifautonomie" },
            {
              type: "text",
              value:
                "Grundgesetz Art. 9 Abs. 3: Gewerkschaften und Arbeitgeberverbände verhandeln OHNE staatliche Einmischung. Tarifvertrag gilt nur für Mitglieder (Gewerkschaft + Arbeitgeberverband). Allgemeinverbindlicherklärung: Staat kann Tarifvertrag auf alle Betriebe der Branche ausweiten.",
            },
            { type: "heading", value: "Günstigkeitsprinzip & Rangfolge" },
            {
              type: "text",
              value:
                "Rangfolge: Gesetz > Tarifvertrag > Betriebsvereinbarung > Arbeitsvertrag. ABER: Günstigkeitsprinzip: Eine niedrigere Stufe darf FÜR den AN günstigere Regelungen treffen (z.B. Arbeitsvertrag: 30 Tage Urlaub, obwohl Tarifvertrag nur 28 vorsieht).",
            },
            { type: "heading", value: "Arbeitskampf" },
            {
              type: "text",
              value:
                "Friedenspflicht: Während Laufzeit eines Tarifvertrags KEIN Streik erlaubt. Warnstreik: Kurzer Streik während laufender Verhandlungen (umstritten, aber üblich). Streik: Kollektive Arbeitsniederlegung, nur durch Gewerkschaft, nur nach Urabstimmung (75% Zustimmung). Aussperrung: Arbeitgeber schließt Arbeitnehmer aus (Gegenmaßnahme zum Streik). Schlichtung: Neutrale Vermittlung bei gescheiterten Verhandlungen.",
            },
            { type: "heading", value: "Tarifrecht: Wie Löhne wirklich entstehen" },
            {
              type: "text",
              value:
                "Tarifverträge schließen Gewerkschaften mit Arbeitgeberverbänden (Flächentarif) oder einzelnen Unternehmen (Haustarif). Sie regeln Entgelt, Arbeitszeit, Urlaub, Zuschläge – und gelten unmittelbar für beiderseits Tarifgebundene (Gewerkschaftsmitglied + tarifgebundener Betrieb); praktisch wenden viele Betriebe sie auf alle an. Arten: Entgelttarifvertrag (Löhne, kurze Laufzeit), Manteltarifvertrag (Rahmenbedingungen, lange Laufzeit). Während der Laufzeit gilt die FRIEDENSPFLICHT – kein Streik über geregelte Themen. Der Ablauf eines Arbeitskampfes: Verhandlung → Scheitern → ggf. Schlichtung → Urabstimmung (meist 75 % Zustimmung nötig) → Streik (Warnstreik ist auch vorher zulässig); die Arbeitgeberseite kann mit Aussperrung antworten. Streikende erhalten kein Gehalt, sondern Streikgeld der Gewerkschaft. Günstigkeitsprinzip: Vom Tarif darf einzelvertraglich nur ZUGUNSTEN des Arbeitnehmers abgewichen werden.",
            },
            { type: "heading", value: "Übungsaufgabe: Streik im Systemhaus" },
            {
              type: "text",
              value:
                "Im tarifgebundenen Betrieb ruft die Gewerkschaft nach gescheiterten Verhandlungen und Urabstimmung zum Streik. a) Darf dein nicht-organisierter Kollege mitstreiken? b) Darfst du als Azubi teilnehmen? c) Dein Chef sagt: „Wer streikt, dem kürze ich den Urlaub“ – zulässig?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: a) JA – auch Nicht-Mitglieder dürfen an einem rechtmäßigen Streik teilnehmen (Koalitionsfreiheit Art. 9 GG), sie erhalten aber kein Streikgeld. b) Grundsätzlich ja, wenn der Streik die Ausbildungsinhalte des Tarifs betrifft – praktisch sollten Azubis die Teilnahme mit der JAV/Gewerkschaft klären; die Ausbildungspflichten (Berufsschule!) bleiben bestehen. c) UNZULÄSSIG – Maßregelungsverbot: Die Teilnahme an einem rechtmäßigen Streik darf nicht sanktioniert werden; zulässig ist nur der Entgeltabzug für die Streikzeit.",
            },
          ],
          quiz: [
            {
              id: "imp_pol-ta-1_0",
              q: "Manteltarifvertrag regelt?",
              options: [
                "Nur Löhne",
                "Betriebsrenten",
                "Nur Kündigungsfristen",
                "Allgemeine Arbeitsbedingungen",
              ],
              correct: 3,
              explain: "Manteltarif = allgemeine Bedingungen wie Arbeitszeit, Urlaub, Fristen.",
            },
            {
              id: "imp_pol-ta-1_1",
              q: "Friedenspflicht bedeutet?",
              options: [
                "AG darf nicht kündigen",
                "Immer friedlich verhandeln",
                "Während Tariflaufzeit kein Streik erlaubt",
                "Kein Krieg",
              ],
              correct: 2,
              explain: "Während ein Tarifvertrag läuft, darf nicht gestreikt werden.",
            },
            {
              id: "imp_pol-ta-1_2",
              q: "Günstigkeitsprinzip?",
              options: [
                "Der Arbeitgeber wählt stets die kostengünstigste Regelung",
                "Niedrigere Stufe darf AN-günstigere Regelung treffen",
                "Der Arbeitgeber entscheidet allein, welche Regelung gilt",
                "Das Gesetz geht immer vor, Abweichungen sind nie zulässig",
              ],
              correct: 1,
              explain: "Arbeitsvertrag darf besser sein als Tarifvertrag für den AN.",
            },
            {
              id: "imp_pol-ta-1_3",
              q: "Rangfolge richtig?",
              options: [
                "Gesetz > TV > BV > AV",
                "BV > TV > AV > Gesetz",
                "AV > TV > BV > Gesetz",
                "TV > Gesetz > BV > AV",
              ],
              correct: 0,
              explain: "Gesetz > Tarifvertrag > Betriebsvereinbarung > Arbeitsvertrag.",
            },
            {
              id: "imp_pol-ta-1_4",
              q: "Streik: Urabstimmung braucht?",
              options: ["75%", "90%", "66%", "50%"],
              correct: 0,
              explain: "75% der Gewerkschaftsmitglieder müssen zustimmen.",
            },
            {
              id: "imp_pol-ta-1_5",
              q: "Aussperrung ist?",
              options: [
                "AG schließt AN von Arbeit aus",
                "Betriebsrat sperrt AG",
                "Gewerkschaft sperrt Mitglieder",
                "AN schließen Betrieb",
              ],
              correct: 0,
              explain: "Arbeitgeber-Kampfmaßnahme als Reaktion auf Streik.",
            },
            {
              id: "imp_pol-ta-1_6",
              q: "Tarifautonomie: Wer verhandelt?",
              options: [
                "Betriebsrat + AG",
                "Staat",
                "Einzelne AN",
                "Gewerkschaften + Arbeitgeberverbände",
              ],
              correct: 3,
              explain: "Art. 9 GG: Gewerkschaften und Arbeitgeberverbände verhandeln frei.",
            },
            {
              id: "imp_pol-ta-1_7",
              q: "Für wen gilt ein Tarifvertrag unmittelbar?",
              options: [
                "Alle Arbeitnehmer der Branche automatisch",
                "Nur beidseitig Tarifgebundene: Gewerkschaftsmitglied und AG im Arbeitgeberverband",
                "Nur Azubis",
                "Nur Beamte",
              ],
              correct: 1,
              explain:
                "Tarifbindung setzt Mitgliedschaft auf BEIDEN Seiten voraus – Ausnahme: Allgemeinverbindlicherklärung (§ 5 TVG), dann gilt er für die ganze Branche. In der Praxis wenden viele AG Tarife freiwillig auf alle an.",
            },
            {
              id: "imp_pol-ta-1_8",
              q: "Entgelttarifvertrag regelt?",
              options: ["Kündigungsfristen", "Urlaub", "Arbeitszeit", "Löhne und Gehälter"],
              correct: 3,
              explain: "Entgelttarif = Löhne, Gehälter und Zulagen.",
            },
            {
              id: "imp_pol-ta-1_9",
              q: "Schlichtung ist?",
              options: ["Kündigung", "Streik", "Neutrale Vermittlung bei Scheitern", "Aussperrung"],
              correct: 2,
              explain: "Schlichtung = neutraler Vermittler versucht Einigung herbeizuführen.",
            },
            {
              id: "imp_pol-ta-1_10",
              q: "Wer schließt Tarifverträge ab?",
              options: [
                "Die Industrie- und Handelskammern als neutrale Vermittler",
                "Der Bundestag per Gesetz nach Anhörung der Verbände",
                "Gewerkschaften mit Arbeitgeberverbänden oder einzelnen Arbeitgebern",
                "Der Betriebsrat gemeinsam mit der Geschäftsführung des Betriebs",
              ],
              correct: 2,
              explain:
                "Der Betriebsrat darf gerade KEINE Tarifverträge schließen – er ergänzt sie durch Betriebsvereinbarungen.",
            },
            {
              id: "imp_pol-ta-1_11",
              q: "Welche Tarifvertragsarten werden unterschieden?",
              options: [
                "Sommer- und Wintertarif, abhängig von der saisonalen Auftragslage der Branche",
                "Brutto- und Nettotarif, je nachdem ob Sozialabgaben eingerechnet werden",
                "U. a. Entgelt-/Lohntarif (Beträge), Rahmentarif (Entgeltgruppen) und Manteltarif",
                "Es existiert nur ein einziger bundeseinheitlicher Tarifvertragstyp für alle Branchen",
              ],
              correct: 2,
              explain:
                "Allg. Bedingungen wie Urlaub, Arbeitszeit. Manteltarifverträge laufen lange, Entgelttarife werden häufig neu verhandelt – daher die regelmäßigen Tarifrunden.",
            },
            {
              id: "imp_pol-ta-1_12",
              q: "Was bedeutet das Günstigkeitsprinzip?",
              options: [
                "Bei Ausschreibungen erhält stets der günstigste Anbieter den Zuschlag",
                "Vom Tarif darf im Arbeitsvertrag nur zugunsten des Arbeitnehmers abgewichen werden",
                "Der Arbeitgeber darf stets die für ihn kostengünstigere Regelung anwenden",
                "Tarifverträge gelten ausschließlich für Geringverdiener unterhalb einer Einkommensgrenze",
              ],
              correct: 1,
              explain: "Mehr Urlaub als im Tarif: zulässig. Weniger: unwirksam, der Tarif gilt.",
            },
            {
              id: "imp_pol-ta-1_13",
              q: "Was ist eine Allgemeinverbindlicherklärung?",
              options: [
                "Ein Urteil des Bundesarbeitsgerichts, das einen Tarifstreit verbindlich entscheidet",
                "Das Arbeitsministerium erstreckt einen Tarifvertrag auf alle Betriebe der Branche",
                "Eine Werbeaktion der Gewerkschaft, um neue Mitglieder für Tarifverhandlungen zu gewinnen",
                "Die gesetzliche Pflicht aller Beschäftigten einer Branche zur Gewerkschaftsmitgliedschaft",
              ],
              correct: 1,
              explain:
                "Auch ohne Verbandsmitgliedschaft. Beispiele finden sich u. a. im Baugewerbe und bei Mindestarbeitsbedingungen.",
            },
            {
              id: "imp_pol-ta-1_14",
              q: "Welche Funktion hat die Urabstimmung vor einem Streik?",
              options: [
                "Sie ist ein arbeitsgerichtliches Verfahren, in dem ein Richter die Zulässigkeit des Streiks prüft",
                "Die Gewerkschaftsmitglieder stimmen ab; üblich sind 75 % Zustimmung für einen unbefristeten Streik",
                "Sie ist die Wahl des Betriebsrats, der anschließend den Streik organisiert und leitet",
                "Sie legt die künftigen Produktpreise fest, um Streikkosten des Unternehmens auszugleichen",
              ],
              correct: 1,
              explain:
                "Warnstreiks während laufender Verhandlungen sind dagegen ohne Urabstimmung zulässig (kurz und verhältnismäßig).",
            },
            {
              id: "imp_pol-ta-1_15",
              q: "Was ist ein 'wilder Streik'?",
              options: [
                "Ein nicht gewerkschaftlich getragener Streik",
                "Ein besonders lauter Streik",
                "Ein Streik am Wochenende",
                "Ein erlaubter Spontanstreik",
              ],
              correct: 0,
              explain:
                "In Deutschland rechtswidrig. Teilnehmer riskieren Abmahnung und Kündigung; rechtmäßige Arbeitskämpfe führen nur die Tarifparteien.",
            },
            {
              id: "imp_pol-ta-1_16",
              q: "Was ist die Aussperrung?",
              options: [
                "Eine besondere Form der fristlosen Kündigung, mit der streikende Mitarbeiter dauerhaft entlassen werden",
                "Ein IT-Sicherheitskonzept, bei dem Konten nach mehreren Fehlversuchen automatisch gesperrt werden",
                "Das Kampfmittel der Arbeitgeber: vorübergehender Ausschluss von Arbeit und Lohn als Antwort auf Streik",
                "Das routinemäßige Abschließen der Geschäftsräume durch den letzten Mitarbeiter am Feierabend",
              ],
              correct: 2,
              explain:
                "Sie muss verhältnismäßig sein (Kampfparität) – während Streik und Aussperrung ruhen die Hauptpflichten, die Gewerkschaft zahlt Streikgeld.",
            },
            {
              id: "imp_pol-ta-1_17",
              q: "Was passiert bei gescheiterten Tarifverhandlungen häufig vor dem Arbeitskampf?",
              options: [
                "Ein verpflichtender Prozess vor dem Arbeitsgericht über die Löhne",
                "Eine Schlichtung mit neutralem Schlichter und Einigungsvorschlag",
                "Die Bundesregierung legt die Löhne per Verordnung verbindlich fest",
                "Die sofortige Schließung des Betriebs durch den Arbeitgeberverband",
              ],
              correct: 1,
              explain:
                "Viele Branchen haben Schlichtungsabkommen; erst nach dem Scheitern endet die Friedenspflicht endgültig.",
            },
            {
              id: "imp_pol-ta-1_18",
              q: "Gilt ein Tarifvertrag automatisch für jeden Arbeitnehmer der Branche?",
              options: [
                "Ja, immer kraft Gesetzes: Mit Abschluss gilt er für alle Arbeitnehmer der Branche ohne weitere Voraussetzungen",
                "Nur für Auszubildende: Tarifverträge regeln ausschließlich die Ausbildungsvergütungen der jeweiligen Branche",
                "Nein – grundsätzlich nur bei beidseitiger Tarifbindung; praktisch wenden viele Verträge ihn per Bezugnahmeklausel an",
                "Nur für Führungskräfte: Leitende Angestellte sind kraft ihrer Stellung stets automatisch tarifgebunden",
              ],
              correct: 2,
              explain:
                "Ausnahme: Allgemeinverbindlicherklärung. Die arbeitsvertragliche Bezugnahmeklausel ist der Standardweg in nicht gebundenen Betrieben.",
            },
            {
              id: "imp_pol-ta-1_19",
              q: "Warum sichert die Tarifautonomie eine Lohnfindung ohne staatliche Eingriffe?",
              options: [
                "Die Tarifparteien kennen die Branche am besten und regeln Arbeitsbedingungen eigenverantwortlich ohne staatliche Lohnfestsetzung",
                "Weil Löhne für die Wirtschaft eine untergeordnete Rolle spielen und daher keiner besonderen Regelung durch den Staat bedürfen",
                "Der Staat legt trotz Tarifautonomie sämtliche Löhne per Verordnung fest, die Tarifparteien haben nur ein Anhörungsrecht",
                "Damit Verhandlungen ganz entfallen und die Löhne dauerhaft auf dem einmal festgelegten Niveau eingefroren bleiben",
              ],
              correct: 0,
              explain:
                "Der Staat setzt nur Rahmenbedingungen (z. B. Mindestlohn, ArbZG) – die konkrete Lohnfindung bleibt den Parteien überlassen.",
            },
          ],
        },
      ],
    },
    {
      id: "wirt-vwl",
      title: "Betrieb & Volkswirtschaft",
      lessons: [
        {
          id: "wiso-elast-1",
          title: "Wirtschaftskreislauf & Preiselastizität",
          content: [
            {
              type: "text",
              value:
                "Der WIRTSCHAFTSKREISLAUF zeigt, wie Geld und Leistungen zwischen den Wirtschaftsakteuren fließen. Im EINFACHEN Kreislauf gibt es nur Haushalte und Unternehmen: Haushalte liefern Arbeit (und erhalten Lohn), Unternehmen liefern Güter (und erhalten Konsumausgaben) – zwei gegenläufige Ströme: Geldstrom und Güterstrom. Der ERWEITERTE Kreislauf ergänzt Staat (Steuern rein, Transfers und öffentliche Leistungen raus), Banken (Sparen rein, Kredite raus – sie machen aus Ersparnissen Investitionen) und Ausland (Import/Export). Prüfungsfrage-Klassiker: einen Pfeil benennen oder einen fehlenden Strom ergänzen.\n\nDie PREISELASTIZITÄT der Nachfrage misst, wie stark Kunden auf Preisänderungen reagieren: Elastizität = prozentuale Mengenänderung ÷ prozentuale Preisänderung. Ist der Betrag > 1, heißt die Nachfrage ELASTISCH: kleine Preiserhöhung, großer Mengeneinbruch – typisch bei Gütern mit vielen Alternativen (Standard-Patchkabel: 10 % teurer → Kunden kaufen woanders). Betrag < 1 = UNELASTISCH: Menge reagiert kaum – typisch bei Notwendigem ohne Ersatz (lebenswichtige Medikamente, kurzfristig auch Strom oder die einzige zugelassene Fachsoftware).\n\nWarum das fürs Geschäft zählt: Bei UNelastischer Nachfrage steigert eine Preiserhöhung den Umsatz (Menge sinkt kaum). Bei ELASTISCHER Nachfrage senkt sie ihn – dann können sogar Preissenkungen den Umsatz erhöhen. Deshalb differenzieren Anbieter: Wartungsvertrag fürs laufende System (unelastisch, Wechselkosten hoch) vs. Neukundengeschäft (elastisch, Vergleichsportale).",
            },
            { type: "heading", value: "Übungsaufgabe: Elastizität berechnen und deuten" },
            {
              type: "text",
              value:
                "Ein Onlineshop erhöht den Preis eines Standard-Switches von 100 € auf 110 €. Die verkaufte Menge fällt von 400 auf 300 Stück/Monat. a) Berechne die Preiselastizität. b) Elastisch oder unelastisch? c) Was passiert mit dem Umsatz – und was folgt daraus für die Preisstrategie?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Mengenänderung: −100/400 = −25 %. Preisänderung: +10 %. Elastizität = −25 ÷ 10 = −2,5 (Betrag 2,5).\nb) Betrag > 1 → deutlich ELASTISCH (Standardware, viele Alternativanbieter).\nc) Umsatz vorher: 400 × 100 = 40.000 €. Nachher: 300 × 110 = 33.000 € → Umsatz sinkt um 7.000 €. Folgerung: Bei elastischer Nachfrage sind Preiserhöhungen gefährlich – besser über Service, Bundles oder Marke differenzieren statt über den Preis.",
            },
            { type: "heading", value: "Vertiefung: die Pfeile im erweiterten Kreislauf" },
            {
              type: "text",
              value:
                "Merkhilfe für die Zuordnung: Jeder Akteur hat Zu- und Abflüsse, und jeder Geldstrom hat einen Gegenstrom. Staat: Steuern/Abgaben herein von Haushalten und Unternehmen; heraus gehen Transfers (Kindergeld, BAföG), Subventionen und öffentliche Güter. Banken: Sparen herein von Haushalten; heraus Kredite an Unternehmen (Investitionen) – ohne Banken kein Kreislaufschluss zwischen Sparen und Investieren. Ausland: Exporte bringen Geld herein, Importe führen es hinaus; die Differenz ist der Außenbeitrag.",
            },
          ],
          quiz: [
            {
              id: "imp_wiso-elast-1_g0",
              q: "Welche zwei Ströme bilden den einfachen Wirtschaftskreislauf?",
              options: [
                "Steuerstrom und Subventionsstrom",
                "Geldstrom und Güterstrom zwischen Haushalten und Unternehmen",
                "Import und Export",
                "Sparen und Kredite",
              ],
              correct: 1,
              explain: "Arbeit gegen Lohn, Güter gegen Konsumausgaben – zwei gegenläufige Kreise.",
            },
            {
              id: "imp_wiso-elast-1_g1",
              q: "Welche Rolle spielen Banken im erweiterten Kreislauf?",
              options: [
                "Sie erheben Steuern für den Staat",
                "Sie produzieren öffentliche Güter",
                "Sie leiten Ersparnisse der Haushalte als Kredite an Investoren weiter",
                "Sie legen die Preise der Unternehmen fest",
              ],
              correct: 2,
              explain: "Sparen → Bank → Kredit → Investition: so schließt sich der Kreislauf.",
            },
            {
              id: "imp_wiso-elast-1_g2",
              q: "Preis +10 %, Menge −25 %. Die Elastizität beträgt (Betrag) …",
              options: ["0,4", "1,0", "2,5", "25"],
              correct: 2,
              explain: "25 ÷ 10 = 2,5 → elastisch.",
            },
            {
              id: "imp_wiso-elast-1_g3",
              q: "Unelastische Nachfrage bedeutet:",
              options: [
                "Die Menge reagiert kaum auf Preisänderungen",
                "Kleine Preisänderung, großer Mengeneffekt",
                "Der Preis ist gesetzlich festgelegt",
                "Es gibt unendlich viele Anbieter",
              ],
              correct: 0,
              explain: "Betrag < 1 – typisch bei Notwendigem ohne Ausweichmöglichkeit.",
            },
            {
              id: "imp_wiso-elast-1_g4",
              q: "Bei stark elastischer Nachfrage führt eine Preiserhöhung meist zu …",
              options: [
                "steigendem Umsatz",
                "unverändertem Umsatz",
                "einem Nachfrageüberhang",
                "sinkendem Umsatz, weil die Menge überproportional einbricht",
              ],
              correct: 3,
              explain: "Genau das zeigt die Übung: 40.000 € → 33.000 €.",
            },
            {
              id: "imp_wiso-elast-1_g5",
              q: "Welches Gut hat typischerweise UNelastische Nachfrage?",
              options: [
                "Standard-Patchkabel im Onlinehandel",
                "Ein lebenswichtiges Medikament ohne Ersatzpräparat",
                "Ein Marken-Kopfhörer mit vielen Konkurrenzmodellen",
                "Urlaubsreisen",
              ],
              correct: 1,
              explain: "Keine Alternative, hoher Bedarf → Menge reagiert kaum auf den Preis.",
            },
            {
              id: "imp_wiso-elast-1_g6",
              q: "Kindergeld und BAföG sind im Kreislauf …",
              options: [
                "Subventionen an Unternehmen",
                "Transferzahlungen des Staates an Haushalte",
                "Konsumausgaben der Haushalte",
                "Importe",
              ],
              correct: 1,
              explain: "Geld vom Staat ohne direkte Gegenleistung – Transfers.",
            },
            {
              id: "imp_wiso-elast-1_g7",
              q: "Warum ist die Nachfrage nach Wartungsverträgen für laufende Systeme oft unelastisch?",
              options: [
                "Wartung ist gesetzlich vorgeschrieben",
                "Die Preise sind überall identisch",
                "Wechselkosten und Abhängigkeit sind hoch – kurzfristig gibt es kaum Alternativen",
                "Kunden lesen keine Rechnungen",
              ],
              correct: 2,
              explain:
                "Lock-in-Effekt: Deshalb verdienen Anbieter am Bestand mehr als am Neugeschäft.",
            },
          ],
        },
        {
          id: "wiso-steuern-1",
          title: "Steuerarten im Überblick",
          content: [
            {
              type: "text",
              value:
                "Steuern sind Zwangsabgaben ohne direkten Anspruch auf Gegenleistung – anders als Gebühren (für eine konkrete Amtshandlung, z. B. Personalausweis) und Beiträge (für die mögliche Nutzung, z. B. IHK-Beitrag, Sozialversicherung).\n\nDie wichtigste Sortierung: DIREKTE Steuern trägt und zahlt dieselbe Person – Einkommensteuer (mit der Lohnsteuer als Erhebungsform bei Arbeitnehmern), Körperschaftsteuer (Kapitalgesellschaften wie die GmbH), Gewerbesteuer (an die Gemeinde – deshalb werben Kommunen mit niedrigen Hebesätzen um Firmen). INDIREKTE Steuern zahlt der Unternehmer ans Finanzamt, TRAGEN muss sie aber der Verbraucher im Preis – allen voran die Umsatzsteuer (19 %, ermäßigt 7 %), dazu Energie-, Tabak-, Stromsteuer.\n\nDas UMSATZSTEUER-SYSTEM fürs Verständnis: Jedes Unternehmen stellt USt in Rechnung, darf aber die selbst gezahlte USt als VORSTEUER abziehen. Ans Finanzamt fließt nur die Differenz (Zahllast = vereinnahmte USt − Vorsteuer). Ergebnis: Besteuert wird auf jeder Stufe nur der Mehrwert – Unternehmen sind wirtschaftlich Durchleiter, belastet ist allein der Endverbraucher.\n\nNoch zwei Sortierungen für Multiple Choice: Nach EMPFÄNGER – Bundessteuern (Energie, Tabak), Landessteuern (Erbschaft), Gemeindesteuern (Gewerbe, Grund), Gemeinschaftsteuern (Einkommen-, Körperschaft-, Umsatzsteuer werden geteilt). Nach GEGENSTAND – Besitz-/Ertragsteuern (Einkommen, Gewerbe), Verkehrsteuern (Umsatz, Grunderwerb) und Verbrauchsteuern (Energie, Tabak, Kaffee).",
            },
            { type: "heading", value: "Übungsaufgabe: Zahllast berechnen" },
            {
              type: "text",
              value:
                "Ein Systemhaus kauft im Monat Ware für 20.000 € netto + 19 % USt ein und verkauft für 32.000 € netto + 19 % USt. a) Wie hoch sind Vorsteuer und vereinnahmte Umsatzsteuer? b) Welche Zahllast geht ans Finanzamt? c) Wer trägt diese Steuer wirtschaftlich?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Vorsteuer: 20.000 × 0,19 = 3.800 €. Vereinnahmte USt: 32.000 × 0,19 = 6.080 €.\nb) Zahllast = 6.080 − 3.800 = 2.280 € (= 19 % auf den Mehrwert von 12.000 € ✓).\nc) Der Endverbraucher – Unternehmen reichen die Steuer nur durch (Traglast ≠ Zahllast).",
            },
            { type: "heading", value: "Vertiefung: Steuern, die ITler direkt betreffen" },
            {
              type: "text",
              value:
                "Auf der eigenen Abrechnung: Lohnsteuer (Erhebungsform der Einkommensteuer, Steuerklassen I–VI) plus ggf. Kirchensteuer. Im Betrieb: USt auf jeder Ausgangsrechnung (Rechnungspflichtangaben!), Gewerbesteuer als Standortfaktor – und bei Auslandsgeschäften das Reverse-Charge-Verfahren (Steuerschuld wechselt zum Leistungsempfänger, häufig bei Software- und Cloud-Leistungen aus dem EU-Ausland).",
            },
          ],
          quiz: [
            {
              id: "imp_wiso-steuern-1_g0",
              q: "Was unterscheidet eine Steuer von einer Gebühr?",
              options: [
                "Steuern sind freiwillig, Gebühren Pflicht",
                "Steuern zahlen nur Unternehmen",
                "Für Steuern gibt es keinen Anspruch auf eine konkrete Gegenleistung",
                "Gebühren fließen immer an den Bund",
              ],
              correct: 2,
              explain:
                "Gebühr = konkrete Amtshandlung, Beitrag = mögliche Nutzung, Steuer = ohne Gegenleistungsanspruch.",
            },
            {
              id: "imp_wiso-steuern-1_g1",
              q: "Welche Steuer ist INDIREKT?",
              options: ["Einkommensteuer", "Umsatzsteuer", "Gewerbesteuer", "Körperschaftsteuer"],
              correct: 1,
              explain: "Zahler (Unternehmen) und Träger (Verbraucher) fallen auseinander.",
            },
            {
              id: "imp_wiso-steuern-1_g2",
              q: "Vorsteuer 3.800 €, vereinnahmte USt 6.080 € – Zahllast?",
              options: ["9.880 €", "6.080 €", "3.800 €", "2.280 €"],
              correct: 3,
              explain: "Zahllast = USt − Vorsteuer = 2.280 €.",
            },
            {
              id: "imp_wiso-steuern-1_g3",
              q: "Wer trägt die Umsatzsteuer wirtschaftlich?",
              options: [
                "Der Endverbraucher",
                "Das verkaufende Unternehmen",
                "Das Finanzamt",
                "Die Bank des Unternehmens",
              ],
              correct: 0,
              explain:
                "Unternehmen leiten dank Vorsteuerabzug nur durch – je Stufe wird der Mehrwert belastet.",
            },
            {
              id: "imp_wiso-steuern-1_g4",
              q: "Welche Steuer fließt an die Gemeinde und macht Standorte attraktiv oder teuer?",
              options: [
                "Körperschaftsteuer",
                "Energiesteuer",
                "Gewerbesteuer (Hebesatz!)",
                "Erbschaftsteuer",
              ],
              correct: 2,
              explain: "Der kommunale Hebesatz ist ein klassischer Standortfaktor.",
            },
            {
              id: "imp_wiso-steuern-1_g5",
              q: "Die Lohnsteuer ist …",
              options: [
                "eine eigenständige Unternehmenssteuer",
                "eine Erhebungsform der Einkommensteuer bei Arbeitnehmern",
                "eine indirekte Verbrauchsteuer",
                "ein Sozialversicherungsbeitrag",
              ],
              correct: 1,
              explain:
                "Der Arbeitgeber führt sie direkt vom Lohn ab – Vorauszahlung auf die Einkommensteuer.",
            },
            {
              id: "imp_wiso-steuern-1_g6",
              q: "Einkommen-, Körperschaft- und Umsatzsteuer sind …",
              options: [
                "reine Bundessteuern",
                "reine Gemeindesteuern",
                "Landessteuern",
                "Gemeinschaftsteuern, die sich Bund und Länder teilen",
              ],
              correct: 3,
              explain: "Die großen Aufkommensbringer werden nach festen Schlüsseln verteilt.",
            },
            {
              id: "imp_wiso-steuern-1_g7",
              q: "Reverse Charge bedeutet:",
              options: [
                "Die USt wird zurückerstattet",
                "Der Steuersatz halbiert sich",
                "Die Steuerschuld wechselt zum Leistungsempfänger",
                "Die Rechnung wird storniert",
              ],
              correct: 2,
              explain:
                "Häufig bei B2B-Leistungen aus dem Ausland – relevant für Cloud- und Softwarerechnungen.",
            },
          ],
        },
        {
          id: "wirt-vw-1",
          title: "Betrieb, Sektoren & Stakeholder",
          content: [
            { type: "heading", value: "Betrieb vs. Unternehmen" },
            {
              type: "text",
              value:
                "Betrieb = technisch-organisatorische Einheit (Produktion/DL). Unternehmen = rechtlich-wirtschaftliche Einheit (trägt Risiko). Ein Unternehmen kann mehrere Betriebe haben.",
            },
            { type: "heading", value: "Wirtschaftssektoren" },
            {
              type: "text",
              value:
                "Primär: Urproduktion (Landwirtschaft, Bergbau). Sekundär: Verarbeitung (Industrie, Handwerk). Tertiär: Dienstleistungen (IT, Handel, Banken). FiSi = tertiärer Sektor.",
            },
            { type: "heading", value: "Shareholder vs. Stakeholder" },
            {
              type: "text",
              value:
                "Shareholder: Besitzt Kapitalanteile (Aktien, GmbH-Anteil), Ziel: Gewinn/Dividende. Stakeholder: Alle Anspruchsgruppen (Mitarbeiter, Kunden, Lieferanten, Staat, Öffentlichkeit). Jeder Shareholder ist Stakeholder, aber nicht umgekehrt.",
            },
            { type: "heading", value: "Maslow'sche Bedürfnispyramide" },
            {
              type: "text",
              value:
                "5 Stufen von unten nach oben: 1. Physiologisch (Gehalt, Pausen), 2. Sicherheit (Jobsicherheit, Versicherung), 3. Sozial (Team, Betriebsklima), 4. Wertschätzung (Anerkennung, Titel), 5. Selbstverwirklichung (Weiterbildung, Kreativität). Niedrigere Stufen müssen erfüllt sein, bevor höhere motivieren.",
            },
            { type: "heading", value: "Marktformen" },
            {
              type: "text",
              value:
                "Monopol: EIN Anbieter beherrscht den Markt (Preis kann diktiert werden). Beispiel: früher die Deutsche Bahn im Schienenfernverkehr (heute Wettbewerb, u. a. durch Flixtrain). Oligopol: WENIGE Anbieter (gegenseitige Abhängigkeit). Beispiel: Mobilfunk (Telekom, Vodafone, O2). Polypol: VIELE Anbieter und Nachfrager (Preis durch Markt bestimmt). Beispiel: Gastgewerbe, Einzelhandel. Monopson: EIN Nachfrager, viele Anbieter.",
            },
            { type: "heading", value: "Verkaufsstrategien & Kennzahlen" },
            {
              type: "text",
              value:
                "Cross-Selling: Ergänzungsprodukt verkaufen (Laptop + Tasche + Maus). Upselling: Höherwertiges Produkt verkaufen (statt i5 den i7-Laptop). Pre-Sales: Beratung/Demo VOR dem Kauf (kostenlose Testphase, PoC). Wirtschaftlichkeit = Ertrag / Aufwand (>1 = wirtschaftlich). Produktivität = Ausbringungsmenge / Einsatzmenge. Eigenkapitalrentabilität = Gewinn x 100 / Eigenkapital. Kernprozesse: Direkt wertschöpfend (Produktion, Vertrieb, Kundenservice). Unterstützende Prozesse: Nicht direkt wertschöpfend, aber nötig (HR, Buchhaltung, IT-Abteilung).",
            },
            { type: "heading", value: "Vom Bedürfnis zum Wirtschaftskreislauf" },
            {
              type: "text",
              value:
                "Wirtschaften heißt: knappe Mittel auf unbegrenzte Bedürfnisse verteilen. Die Kette: Bedürfnis (Mangelgefühl) → Bedarf (mit Kaufkraft unterlegt) → Nachfrage (am Markt wirksam). Güter ordnest du nach Knappheit (freie vs. wirtschaftliche), Verwendung (Konsum- vs. Produktionsgüter) und Beschaffenheit (Sach- vs. Dienstleistungen). Betriebe kombinieren die Produktionsfaktoren (BWL: Arbeit, Betriebsmittel, Werkstoffe – plus dispositiver Faktor Leitung) nach dem ökonomischen Prinzip: Maximalprinzip (mit gegebenem Einsatz maximaler Ertrag), Minimalprinzip (gegebenes Ziel mit minimalem Einsatz) – nie beides gleichzeitig („mit minimalem Einsatz maximaler Ertrag“ ist der klassische Prüfungsfehler!). Im erweiterten Wirtschaftskreislauf fließen Geld- und Güterströme zwischen Haushalten, Unternehmen, Staat, Banken und Ausland – Stakeholder deines Betriebs sind alle Anspruchsgruppen: Eigentümer, Mitarbeitende, Kunden, Lieferanten, Staat, Öffentlichkeit.",
            },
            { type: "heading", value: "Übungsaufgabe: Prinzipien erkennen" },
            {
              type: "text",
              value:
                "Ordne das ökonomische Prinzip zu und begründe: a) „Mit dem Budget von 10.000 € so viele Arbeitsplätze wie möglich ausstatten.“ b) „Die 25 Arbeitsplätze so günstig wie möglich ausstatten.“ c) „Mit möglichst wenig Geld möglichst viele Arbeitsplätze.“",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: a) MAXIMALPRINZIP – Einsatz fix (10.000 €), Ertrag maximieren. b) MINIMALPRINZIP – Ziel fix (25 Plätze), Einsatz minimieren. c) KEIN gültiges Prinzip – zwei Variablen gleichzeitig optimieren ist logisch unmöglich; genau diese Formulierung ist die beliebteste Falle der Prüfung. Zusatzpunkt: Wer sie im Betrieb hört, macht daraus eine klare Zielvorgabe (Budget ODER Stückzahl fixieren).",
            },
          ],
          quiz: [
            {
              id: "imp_wirt-vw-1_0",
              q: "Betrieb vs. Unternehmen?",
              options: [
                "Betrieb ist größer",
                "Gleich",
                "Betrieb=technisch, Unternehmen=rechtlich",
                "Unternehmen=technisch",
              ],
              correct: 2,
              explain:
                "Betrieb = technisch-organisatorisch, Unternehmen = rechtlich-wirtschaftlich.",
            },
            {
              id: "imp_wirt-vw-1_1",
              q: "FiSi gehört zu welchem Sektor?",
              options: ["Primär", "Quartär", "Tertiär", "Sekundär"],
              correct: 2,
              explain: "IT-Dienstleistungen = tertiärer Sektor.",
            },
            {
              id: "imp_wirt-vw-1_2",
              q: "Maslow Stufe 3?",
              options: ["Physiologisch", "Wertschätzung", "Sozial", "Sicherheit"],
              correct: 2,
              explain: "Stufe 3 = Soziale Bedürfnisse (Zugehörigkeit, Team).",
            },
            {
              id: "imp_wirt-vw-1_3",
              q: "Stakeholder Beispiel?",
              options: ["Nur GF", "Nur Kunden", "MA, Kunden, Staat, Lieferanten", "Nur Aktionäre"],
              correct: 2,
              explain: "Alle Anspruchsgruppen.",
            },
            {
              id: "imp_wirt-vw-1_4",
              q: "Shareholder = ?",
              options: ["Alle", "Kapitalanteilseigner", "Mitarbeiter", "Kunden"],
              correct: 1,
              explain: "Personen mit Kapitalanteil.",
            },
            {
              id: "imp_wirt-vw-1_5",
              q: "Sekundär?",
              options: ["DL", "Industrie", "IT", "Landwirtschaft"],
              correct: 1,
              explain: "Verarbeitung.",
            },
            {
              id: "imp_wirt-vw-1_6",
              q: "Maslow 1?",
              options: ["Sozial", "Wertschätzung", "Sicherheit", "Physiologisch"],
              correct: 3,
              explain: "Grundbedürfnisse.",
            },
            {
              id: "imp_wirt-vw-1_7",
              q: "Maslow Reihenfolge?",
              options: ["Egal", "Gleichzeitig", "Oben zuerst", "Unten vor oben"],
              correct: 3,
              explain: "Hierarchie.",
            },
            {
              id: "imp_wirt-vw-1_8",
              q: "SH vs. Stakeholder?",
              options: ["Stakeholder=Aktionäre", "Gleich", "SH=alle", "SH⊂Stakeholder"],
              correct: 3,
              explain: "Shareholder ist Teilmenge.",
            },
            {
              id: "imp_wirt-vw-1_9",
              q: "Tertiärer Sektor?",
              options: ["Bergbau", "Landwirtschaft", "Industrie", "Dienstleistungen (IT!)"],
              correct: 3,
              explain: "FiSi = tertiär.",
            },
          ],
        },
        {
          id: "wiso-bg-1",
          title: "Bedürfnisse, Güter & ökonomisches Prinzip",
          content: [
            {
              type: "text",
              value:
                'Warum wird überhaupt gewirtschaftet? Weil menschliche BEDÜRFNISSE unbegrenzt sind, die Mittel (Güter, Zeit, Geld) aber knapp. Dieses Spannungsverhältnis heißt Knappheitsproblem – der Ausgangspunkt jeder Wirtschaftsordnung und ein Klassiker im ersten WiSo-Aufgabenblock.\n\nBEDÜRFNIS → BEDARF → NACHFRAGE: Ein Bedürfnis ist ein empfundener Mangel ("Ich hätte gern ein schnelleres Notebook"). Bedarf ist das mit KAUFKRAFT unterlegte Bedürfnis (ich habe das Geld dafür). Nachfrage entsteht, wenn der Bedarf am Markt wirksam wird (ich gehe kaufen). Prüfungsfalle: Nicht jedes Bedürfnis wird Bedarf – ohne Kaufkraft bleibt der Wunsch ein Wunsch.\n\nBedürfnisarten: EXISTENZBEDÜRFNISSE (Essen, Wohnen, Kleidung) müssen befriedigt werden; KULTUR-/GRUNDBEDÜRFNISSE (Bildung, Zeitung, Kino) hängen vom Lebensstandard ab; LUXUSBEDÜRFNISSE (Sportwagen, Designeruhr) gehen darüber hinaus. Die Grenzen sind fließend und gesellschaftsabhängig – das Smartphone ist heute näher am Existenz- als am Luxusbedürfnis.\n\nGÜTERARTEN sortierst du nach drei Fragen: 1) Frei oder knapp? Freie Güter (Luft) haben keinen Preis, wirtschaftliche Güter sind knapp und kosten. 2) Materiell oder immateriell? Sachgüter (Server) vs. Dienstleistungen (Support) und Rechte (Softwarelizenz!). 3) Verwendung: Konsumgüter (Endverbrauch) vs. Produktionsgüter/Investitionsgüter (zur Leistungserstellung – der Firmenserver). Dazu: Verbrauchsgüter (einmalige Nutzung: Strom, Papier) vs. Gebrauchsgüter (mehrfache Nutzung: Monitor); Substitutionsgüter ersetzen einander (Butter/Margarine), Komplementärgüter ergänzen einander (Drucker/Toner).\n\nDas ÖKONOMISCHE PRINZIP verlangt rationalen Umgang mit Knappheit – in zwei Ausprägungen: MAXIMALPRINZIP: mit GEGEBENEM Einsatz den größtmöglichen Ertrag erzielen (Budget 5.000 € → bestmögliche Serverausstattung). MINIMALPRINZIP: ein FESTES Ziel mit möglichst geringem Einsatz erreichen (definierte Serverleistung → kleinstmöglicher Preis). Merke: Es ist immer genau EINE Seite fixiert. "Maximaler Ertrag mit minimalem Einsatz" gleichzeitig ist logisch unmöglich – eine beliebte Falschantwort.',
            },
            { type: "heading", value: "Übungsaufgabe: Begriffe im Betriebsalltag zuordnen" },
            {
              type: "text",
              value:
                'Dein Betrieb stattet einen Neukunden aus. Ordne begründet zu: a) Der Kunde wünscht sich ein Glasfaser-Upgrade, hat aber kein Budget freigegeben – Bedürfnis, Bedarf oder Nachfrage? b) 20 neue Workstations für die Sachbearbeitung – welche Güterart(en)? c) Die Officelizenzen dazu? d) Der Azubi soll Netzwerkkabel "möglichst günstig, aber genau 50 Stück Cat-6a, 3 m" beschaffen – welches ökonomische Prinzip? e) Kaffee im Büro und die Kaffeemaschine – Verbrauchs- oder Gebrauchsgut?',
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Bedürfnis – der Mangel ist empfunden, aber ohne freigegebenes Budget fehlt die Kaufkraft, also (noch) kein Bedarf und erst recht keine Nachfrage.\nb) Wirtschaftliche Güter, Sachgüter, Produktions-/Investitionsgüter (dienen der Leistungserstellung des Kunden), Gebrauchsgüter (mehrjährige Nutzung).\nc) Wirtschaftliches, immaterielles Gut (Recht/Lizenz), Produktionsgut, Gebrauchsgut über die Laufzeit.\nd) Minimalprinzip – das Ziel ist exakt fixiert (50 Stück, Cat-6a, 3 m), minimiert wird der Einsatz (Preis).\ne) Kaffee = Verbrauchsgut (einmalige Nutzung), Kaffeemaschine = Gebrauchsgut (mehrfache Nutzung).",
            },
            { type: "heading", value: "Vertiefung: die Bedürfnispyramide nach Maslow" },
            {
              type: "text",
              value:
                "Maslow ordnet Bedürfnisse als Stufen: 1) physiologische Grundbedürfnisse (Essen, Schlaf), 2) Sicherheit (Wohnung, Arbeitsplatz), 3) soziale Bedürfnisse (Zugehörigkeit), 4) Wertschätzung (Anerkennung, Status), 5) Selbstverwirklichung. Erst wenn untere Stufen weitgehend befriedigt sind, gewinnen obere an Gewicht. In WiSo-Aufgaben taucht das Modell bei Motivation und Marketing auf: Werbung adressiert gezielt Stufen (Versicherung → Sicherheit, Sportwagen → Status). Kritik, die du nennen können solltest: Die strenge Stufenfolge ist empirisch nicht haltbar – Menschen verfolgen Bedürfnisse parallel.",
            },
          ],
          quiz: [
            {
              id: "imp_wiso-bg-1_g0",
              q: "Wann wird aus einem Bedürfnis ein Bedarf?",
              options: [
                "Sobald das Bedürfnis mit Kaufkraft unterlegt ist",
                "Sobald das Produkt am Markt verfügbar ist",
                "Sobald Werbung das Bedürfnis verstärkt hat",
                "Sobald mehrere Personen dasselbe Bedürfnis haben",
              ],
              correct: 0,
              explain:
                "Bedarf = Bedürfnis + Geld dafür. Am Markt wirksam wird er dann als Nachfrage.",
            },
            {
              id: "imp_wiso-bg-1_g1",
              q: "Ein Betrieb kauft einen Server für die Auftragsverwaltung. Welche Güterart liegt vor?",
              options: [
                "Konsumgut, da er täglich benutzt wird",
                "Produktions-/Investitionsgut und zugleich Gebrauchsgut",
                "Freies Gut, da er allen Mitarbeitenden zur Verfügung steht",
                "Verbrauchsgut, weil er nach Jahren ersetzt werden muss",
              ],
              correct: 1,
              explain:
                "Er dient der betrieblichen Leistungserstellung (Produktionsgut) und wird mehrfach genutzt (Gebrauchsgut).",
            },
            {
              id: "imp_wiso-bg-1_g2",
              q: "Welches Beispiel beschreibt das Maximalprinzip?",
              options: [
                "Die vorgegebene Ausstattung zum geringsten Preis beschaffen",
                "Möglichst viel Leistung mit möglichst wenig Geld",
                "Mit dem 5.000-€-Budget die bestmögliche Ausstattung beschaffen",
                "Die Beschaffung auf das nächste Quartal verschieben",
              ],
              correct: 2,
              explain:
                "Einsatz fix (Budget), Ertrag maximieren. „Möglichst viel Leistung mit möglichst wenig Geld“ kombiniert beide Prinzipien – logisch unmöglich.",
            },
            {
              id: "imp_wiso-bg-1_g3",
              q: "Drucker und passende Tonerkartuschen sind zueinander …",
              options: ["Substitutionsgüter", "freie Güter", "Existenzgüter", "Komplementärgüter"],
              correct: 3,
              explain:
                "Sie ergänzen einander – ohne Toner nützt der Drucker nichts. Ersatzbeziehung wäre Substitution.",
            },
            {
              id: "imp_wiso-bg-1_g4",
              q: 'Warum ist "maximaler Ertrag bei minimalem Einsatz" als Prinzip falsch?',
              options: [
                "Weil dabei zwei Größen gleichzeitig offen wären – eine Seite muss fixiert sein",
                "Weil Betriebe Gewinne nicht maximieren dürfen",
                "Weil das Minimalprinzip ausschließlich für private Haushalte gilt, nicht für Unternehmen und deren Beschaffung",
                "Weil Erträge gesetzlich gedeckelt sind",
              ],
              correct: 0,
              explain:
                "Ökonomisch rational ist nur: Einsatz fix → Ertrag max, oder Ziel fix → Einsatz min.",
            },
            {
              id: "imp_wiso-bg-1_g5",
              q: "Eine Softwarelizenz ist ein …",
              options: [
                "Sachgut",
                "immaterielles Gut (Recht)",
                "freies Gut",
                "Verbrauchsgut ohne wirtschaftlichen Wert",
              ],
              correct: 1,
              explain: "Lizenzen sind Nutzungsrechte – immaterielle wirtschaftliche Güter.",
            },
            {
              id: "imp_wiso-bg-1_g6",
              q: "Welche Reihenfolge stimmt?",
              options: [
                "Nachfrage → Bedarf → Bedürfnis",
                "Bedarf → Nachfrage → Bedürfnis",
                "Bedürfnis → Bedarf → Nachfrage",
                "Bedürfnis → Nachfrage → Bedarf",
              ],
              correct: 2,
              explain: "Empfundener Mangel → mit Kaufkraft unterlegt → am Markt wirksam.",
            },
            {
              id: "imp_wiso-bg-1_g7",
              q: "Strom und Druckerpapier im Büro sind typischerweise …",
              options: [
                "Gebrauchsgüter, weil sie regelmäßig gebraucht werden",
                "Investitionsgüter mit langer Nutzungsdauer",
                "freie Güter, weil sie der Arbeitgeber bereitstellt",
                "Verbrauchsgüter, weil sie bei Nutzung aufgezehrt werden",
              ],
              correct: 3,
              explain:
                'Einmalige Nutzung = Verbrauchsgut. "Regelmäßig gebraucht" ist nicht das Kriterium.',
            },
            {
              id: "imp_wiso-bg-1_g8",
              q: "Wozu zählt der Kinobesuch in der klassischen Bedürfnis-Einteilung?",
              options: [
                "Kulturbedürfnis",
                "Existenzbedürfnis",
                "Luxusbedürfnis",
                "gar kein Bedürfnis, sondern Bedarf",
              ],
              correct: 0,
              explain:
                "Kultur- und Bildungsbedürfnisse liegen zwischen Existenz und Luxus; die Grenzen sind fließend.",
            },
            {
              id: "imp_wiso-bg-1_g9",
              q: "Was besagt die Kritik an Maslows Bedürfnispyramide?",
              options: [
                "Die Pyramide hat zu wenige Stufen – moderne digitale Bedürfnisse wie ständige Erreichbarkeit fehlen komplett",
                "Menschen verfolgen Bedürfnisse parallel – die strenge Stufenfolge ist empirisch nicht haltbar",
                "Sie gilt nur für Unternehmen, nicht für Privatpersonen",
                "Selbstverwirklichung gehört auf die unterste Stufe",
              ],
              correct: 1,
              explain: "Das Modell hilft beim Ordnen, die starre Reihenfolge gilt als widerlegt.",
            },
          ],
        },
        {
          id: "wiso-wo-1",
          title: "Wirtschaftsordnungen: freie & soziale Marktwirtschaft, Planwirtschaft",
          content: [
            {
              type: "text",
              value:
                'Jede Gesellschaft muss drei Grundfragen beantworten: WAS wird produziert, WIE wird produziert, FÜR WEN? Die WIRTSCHAFTSORDNUNG ist das Regelwerk, mit dem ein Staat diese Fragen beantwortet – sie ordnet sich ein zwischen Gesellschaftssystem (Werte), Wirtschaftsverfassung (rechtlicher Rahmen, z. B. Grundgesetz-Artikel zu Eigentum und Berufsfreiheit) und dem realen Wirtschaftssystem.\n\nFREIE MARKTWIRTSCHAFT (Modell): Der Markt koordiniert alles über den Preis. Privateigentum an Produktionsmitteln, volle Vertrags- und Gewerbefreiheit, Staat nur als "Nachtwächter" (Sicherheit, Rechtsordnung). Stärken: Effizienz, Innovation, Konsumfreiheit. Schwächen: soziale Härten (wer nichts anbieten kann, fällt durch), Monopolbildung, keine Rücksicht auf Umwelt – Märkte versagen bei öffentlichen Gütern und externen Effekten.\n\nZENTRALVERWALTUNGSWIRTSCHAFT (Planwirtschaft): Eine zentrale Instanz plant Produktion, Preise und Verteilung; Produktionsmittel sind Staatseigentum. Theoretischer Vorteil: Grundversorgung und Vollbeschäftigung planbar. Praxis (DDR, Sowjetunion): Fehlanreize, Mangelwirtschaft, fehlende Innovation – die Planbehörde kann Millionen Preise und Bedürfnisse nicht schneller und besser koordinieren als Märkte.\n\nSOZIALE MARKTWIRTSCHAFT (Deutschland, seit 1948, geprägt von Ludwig Erhard und Alfred Müller-Armack): "So viel Markt wie möglich, so viel Staat wie nötig." Der Markt koordiniert, aber der Staat setzt einen Ordnungsrahmen und korrigiert Marktergebnisse: WETTBEWERBSPOLITIK (Kartellverbot, Fusionskontrolle – Bundeskartellamt), SOZIALPOLITIK (Sozialversicherungen, Grundsicherung, Kündigungsschutz), KONJUNKTUR- und STRUKTURPOLITIK, UMWELTPOLITIK (Emissionshandel, Verbote), VERBRAUCHERSCHUTZ. Eingriffsformen: Gebote/Verbote, Steuern/Subventionen, staatliche Bereitstellung öffentlicher Güter (Straßen, Bildung, innere Sicherheit).\n\nPrüfungslogik: Aufgaben geben oft ein aktuelles Ereignis (Strompreisbremse, Kartellstrafe, Mindestlohn) und fragen, WELCHES Element der sozialen Marktwirtschaft eingreift und WARUM der reine Markt hier versagt.',
            },
            { type: "heading", value: "Übungsaufgabe: Staatseingriffe einordnen" },
            {
              type: "text",
              value:
                "Ordne die Maßnahmen dem passenden Politikfeld der sozialen Marktwirtschaft zu und nenne das jeweilige Marktversagen, das korrigiert wird: a) Das Bundeskartellamt untersagt die Fusion zweier marktbeherrschender Rechenzentrums-Betreiber. b) Einführung eines gesetzlichen Mindestlohns. c) CO₂-Preis auf fossile Brennstoffe. d) Beitragsfinanzierte Pflegeversicherung. e) Der Staat baut und betreibt Autobahnen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Wettbewerbspolitik – korrigiert drohende Monopol-/Oligopolmacht (überhöhte Preise, weniger Innovation).\nb) Sozialpolitik/Arbeitsmarktordnung – korrigiert das Machtungleichgewicht zwischen Anbietern einfacher Arbeit und Nachfragern (soziale Härten des reinen Marktes).\nc) Umweltpolitik – internalisiert externe Effekte: Umweltkosten tauchen sonst in keinem Marktpreis auf.\nd) Sozialpolitik – Pflegerisiko ist privat schwer versicherbar/für Geringverdiener nicht bezahlbar; Pflichtversicherung sichert alle ab.\ne) Bereitstellung öffentlicher Güter – bei Straßen ist der Ausschluss von Nutzern historisch schwer und privater Bau unrentabel; der Markt stellt sie nicht ausreichend bereit.",
            },
            { type: "heading", value: "Vertiefung: Begriffshierarchie sauber trennen" },
            {
              type: "text",
              value:
                "Vier Begriffe, die Aufgaben gern durcheinanderwerfen: GESELLSCHAFTSSYSTEM = Grundwerte einer Gesellschaft (Freiheit, Gleichheit …). WIRTSCHAFTSVERFASSUNG = die rechtlichen Grundentscheidungen (in Deutschland u. a. Eigentumsgarantie Art. 14 GG, Berufsfreiheit Art. 12 GG, Sozialstaatsprinzip Art. 20 GG – das GG schreibt aber keine konkrete Wirtschaftsordnung vor!). WIRTSCHAFTSORDNUNG = das gewählte Regelwerk (soziale Marktwirtschaft). WIRTSCHAFTSSYSTEM = die tatsächlich gelebte Wirtschaftsweise. Merksatz: Werte → Recht → Regeln → Realität.",
            },
            { type: "heading", value: "Die Soziale Marktwirtschaft" },
            {
              type: "text",
              value:
                "Deutschlands Wirtschaftsordnung ist die SOZIALE MARKTWIRTSCHAFT (geprägt von Ludwig Erhard und Alfred Müller-Armack): Grundsätzlich entscheidet der MARKT über Angebot, Nachfrage und Preise (Privateigentum, Vertrags- und Gewerbefreiheit, Wettbewerb) – aber der Staat setzt einen RAHMEN und korrigiert sozial: Wettbewerbsaufsicht (Kartellamt/GWB), Sozialversicherungssystem, Arbeitnehmerschutzrechte (KSchG, ArbSchG, Mitbestimmung), Tarifautonomie, Umverteilung über Steuern und Transfers, Eingreifen bei Marktversagen (öffentliche Güter, externe Effekte, z. B. CO2-Bepreisung). Leitformel: „So viel Markt wie möglich, so viel Staat wie nötig.“ Damit steht sie ZWISCHEN den Modellen freie Marktwirtschaft (Staat nur Nachtwächter) und Zentralverwaltungswirtschaft (Staat plant alles – gescheitert u. a. an fehlenden Preissignalen und Innovationsanreizen).",
            },
            {
              type: "note",
              value:
                "Merkhilfe: Soziale Marktwirtschaft = MARKT entscheidet + STAAT rahmt und federt ab. Prüfungsformel: „so viel Markt wie möglich, so viel Staat wie nötig“ (Erhard/Müller-Armack).",
            },
          ],
          quiz: [
            {
              id: "imp_wiso-wo-1_g0",
              q: "Welcher Leitsatz beschreibt die soziale Marktwirtschaft?",
              options: [
                "So viel Staat wie möglich, so wenig Markt wie nötig",
                "Der Staat plant, der Markt führt aus",
                "So viel Markt wie möglich, so viel Staat wie nötig",
                "Jeder Eingriff des Staates ist ausgeschlossen",
              ],
              correct: 2,
              explain: "Markt als Koordinationsprinzip, Staat als Rahmen- und Korrekturinstanz.",
            },
            {
              id: "imp_wiso-wo-1_g1",
              q: "Wem gehören in der Zentralverwaltungswirtschaft die Produktionsmittel?",
              options: [
                "Den Belegschaften der Betriebe",
                "Privaten Eigentümern mit staatlicher Aufsicht",
                "Internationalen Investoren",
                "Dem Staat",
              ],
              correct: 3,
              explain:
                "Staatseigentum plus zentrale Planung von Produktion, Preisen und Verteilung.",
            },
            {
              id: "imp_wiso-wo-1_g2",
              q: "Das Bundeskartellamt verhängt eine Strafe wegen Preisabsprachen. Welches Politikfeld greift?",
              options: [
                "Wettbewerbspolitik",
                "Sozialpolitik",
                "Konjunkturpolitik",
                "Umweltpolitik",
              ],
              correct: 0,
              explain:
                "Kartellverbot und Fusionskontrolle schützen den funktionierenden Wettbewerb.",
            },
            {
              id: "imp_wiso-wo-1_g3",
              q: "Warum scheiterte die Planwirtschaft in der Praxis?",
              options: [
                "Die Bevölkerung konsumierte zu wenig",
                "Zentrale Planung kann Millionen Preise und Bedürfnisse nicht effizient koordinieren – Fehlanreize und Mangel entstehen",
                "Die Betriebe erwirtschafteten zu hohe Gewinne",
                "Es gab zu viel ruinösen Wettbewerb zwischen den staatlichen Kombinaten, der die Planvorgaben ständig unterlief",
              ],
              correct: 1,
              explain:
                "Fehlende Preissignale und Anreize führten zu Mangelwirtschaft und Innovationsstau.",
            },
            {
              id: "imp_wiso-wo-1_g4",
              q: "Was ist ein externer Effekt?",
              options: [
                "Der Einfluss ausländischer Märkte und Wechselkurse auf die Preisbildung im Inland",
                "Eine staatliche Subvention für Exportgüter",
                "Kosten oder Nutzen einer Aktivität, die Unbeteiligte treffen und in keinem Marktpreis auftauchen",
                "Preisschwankungen durch saisonale Nachfrage",
              ],
              correct: 2,
              explain:
                "Beispiel Umweltverschmutzung: Kosten trägt die Allgemeinheit – der Staat internalisiert sie z. B. per CO₂-Preis.",
            },
            {
              id: "imp_wiso-wo-1_g5",
              q: "Mit welchen Namen ist die soziale Marktwirtschaft verbunden?",
              options: [
                "Karl Marx und Friedrich Engels",
                "Adam Smith und David Ricardo",
                "John Maynard Keynes und Milton Friedman",
                "Ludwig Erhard und Alfred Müller-Armack",
              ],
              correct: 3,
              explain:
                "Erhard (Wirtschaftsminister ab 1949) und Müller-Armack prägten Konzept und Begriff.",
            },
            {
              id: "imp_wiso-wo-1_g6",
              q: "Welche Aussage zur Wirtschaftsverfassung Deutschlands stimmt?",
              options: [
                "Das Grundgesetz legt keine konkrete Wirtschaftsordnung fest, setzt aber Leitplanken wie Eigentumsgarantie und Sozialstaatsprinzip",
                "Das Grundgesetz schreibt die soziale Marktwirtschaft in Artikel 1 wörtlich als verbindliche Ordnung vor",
                "Das Grundgesetz verbietet Privateigentum an Produktionsmitteln",
                "Die Wirtschaftsordnung wird jährlich per Gesetz neu beschlossen",
              ],
              correct: 0,
              explain:
                "Art. 12, 14 und 20 GG bilden den Rahmen – die konkrete Ordnung ist politisch gestaltbar.",
            },
            {
              id: "imp_wiso-wo-1_g7",
              q: "Typische Schwäche der freien Marktwirtschaft?",
              options: [
                "Zu geringe Konsumauswahl für Verbraucher",
                "Soziale Härten und Monopolbildung ohne staatliche Korrektur",
                "Zu langsame Anpassung der Preise an Veränderungen der Nachfrage",
                "Grundsätzlich fehlende Innovationsanreize",
              ],
              correct: 1,
              explain: "Effizient, aber blind für Verteilung, Machtkonzentration und Umwelt.",
            },
            {
              id: "imp_wiso-wo-1_g8",
              q: "Straßenbeleuchtung ist ein öffentliches Gut, weil …",
              options: [
                "sie vom Staat besteuert wird",
                "sie nachts niemand nutzt",
                "niemand von der Nutzung ausgeschlossen werden kann und private Anbieter sie deshalb kaum bereitstellen",
                "sie per Gesetz ausschließlich von Kommunen und Stadtwerken hergestellt und betrieben werden darf",
              ],
              correct: 2,
              explain:
                "Nicht-Ausschließbarkeit + Nicht-Rivalität → der Markt versagt, der Staat stellt bereit.",
            },
            {
              id: "imp_wiso-wo-1_g9",
              q: "Die drei Grundfragen jeder Wirtschaftsordnung lauten:",
              options: [
                "Wer regiert, wer zahlt, wer kontrolliert?",
                "Wann, wo und womit wird gehandelt?",
                "Import, Export oder Eigenproduktion?",
                "Was, wie und für wen wird produziert?",
              ],
              correct: 3,
              explain:
                "Jede Ordnung beantwortet Produktionsziel, -verfahren und Verteilung – nur der Mechanismus unterscheidet sich.",
            },
            {
              id: "imp_wiso-wo-1_g_sm1",
              q: "Kernidee der Sozialen Marktwirtschaft?",
              options: [
                "Der Staat plant Produktion und Preise",
                "Markt entscheidet, Staat setzt Rahmen und sozialen Ausgleich",
                "Es gibt kein Privateigentum",
                "Wettbewerb ist verboten",
              ],
              correct: 1,
              explain:
                "Marktmechanismus plus staatlicher Ordnungsrahmen und Sozialsystem – „so viel Markt wie möglich, so viel Staat wie nötig“.",
            },
            {
              id: "imp_wiso-wo-1_g_sm2",
              q: "Mit wem wird die Soziale Marktwirtschaft historisch verbunden?",
              options: [
                "Karl Marx",
                "John Maynard Keynes",
                "Ludwig Erhard und Alfred Müller-Armack",
                "Adam Riese",
              ],
              correct: 2,
              explain:
                "Erhard (Wirtschaftsminister) und Müller-Armack prägten Konzept und Begriff in der Nachkriegszeit.",
            },
          ],
        },
        {
          id: "wiso-markt-1",
          title: "Markt & Preisbildung: Angebot, Nachfrage, Marktformen",
          content: [
            {
              type: "text",
              value:
                'Ein MARKT ist jedes Zusammentreffen von Angebot und Nachfrage – die Börse genauso wie der Online-Shop. Der PREIS ist dabei kein Zufall, sondern das Ergebnis zweier gegenläufiger Kräfte.\n\nDie NACHFRAGEKURVE fällt: Je niedriger der Preis, desto mehr wird gekauft. Die ANGEBOTSKURVE steigt: Je höher der Preis, desto mehr wird produziert und angeboten. Wo sich beide schneiden, liegt der GLEICHGEWICHTSPREIS (Markträumungspreis): Angebotene und nachgefragte Menge stimmen überein, der Markt ist "geräumt".\n\nDer MARKTMECHANISMUS: Liegt der Preis ÜBER dem Gleichgewicht, entsteht ein Angebotsüberhang (Ladenhüter) – Anbieter senken die Preise. Liegt er DARUNTER, entsteht ein Nachfrageüberhang (leere Regale, Wartelisten) – Preise steigen. Verschiebungen der Kurven ändern das Gleichgewicht: Steigt die Nachfrage (Trend, mehr Einkommen, teureres Substitutionsgut), steigen Preis UND Menge. Steigt das Angebot (billigere Produktion, neue Anbieter), sinkt der Preis, die Menge steigt. Diese "Was passiert, wenn …"-Szenarien sind Standard-Prüfungsaufgaben.\n\nDas Modell des VOLLKOMMENEN MARKTES macht Preisbildung theoretisch sauber – seine Bedingungen: homogene (gleichartige) Güter, vollständige Markttransparenz, keine persönlichen/räumlichen/zeitlichen Präferenzen, viele kleine Anbieter und Nachfrager, sofortige Anpassung. Reale Märkte erfüllen das fast nie (Markenpräferenzen, unvollständige Information) – am nächsten kommt die Wertpapierbörse.\n\nMARKTFORMEN nach Anbieterzahl: POLYPOL (viele Anbieter, viele Nachfrager – intensiver Wettbewerb, z. B. Bäckereien), OLIGOPOL (wenige Anbieter – z. B. Mineralöl, Mobilfunknetze; Verhalten: starke gegenseitige Beobachtung, Preiskämpfe ODER stillschweigende Parallelpreise bis hin zu verbotenen Absprachen), MONOPOL (ein Anbieter – kann Preis oder Menge setzen, aber nicht beides; Gefahr überhöhter Preise, daher Regulierung, z. B. bei Netzinfrastruktur). Spiegelbildlich gibt es die Formen auch auf Nachfrageseite (Nachfragemonopol/Monopson, z. B. der Staat bei Rüstungsgütern).',
            },
            { type: "heading", value: "Übungsaufgabe: Marktmechanismus anwenden" },
            {
              type: "text",
              value:
                "Der Markt für gebrauchte Business-Notebooks ist im Gleichgewicht bei 250 € / 1.000 Stück pro Monat. Analysiere jeweils Preis- und Mengeneffekt: a) Eine große Versicherung löst ihr Leasing auf und wirft 5.000 zusätzliche Geräte auf den Markt. b) Ein neues Windows erscheint, das auf den Gebrauchtgeräten nicht mehr läuft. c) Der Staat deckelt den Preis für refurbished Geräte bei 150 € (unter Gleichgewicht) – was passiert am Markt?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Angebotskurve verschiebt sich nach rechts → neuer Gleichgewichtspreis SINKT, gehandelte Menge STEIGT.\nb) Nachfrage nach den Altgeräten sinkt (Kurve nach links) → Preis SINKT, Menge SINKT.\nc) Höchstpreis unter Gleichgewicht → Nachfrageüberhang: Zum Preis von 150 € wollen mehr Menschen kaufen, als Anbieter liefern wollen. Folgen: Knappheit, Wartelisten, ggf. Schwarzmarkt; der Preismechanismus kann den Markt nicht mehr räumen.",
            },
            { type: "heading", value: "Vertiefung: Verhalten im Oligopol" },
            {
              type: "text",
              value:
                "Im Oligopol hängt jede Entscheidung von der erwarteten Reaktion der wenigen Konkurrenten ab. Typische Muster: PREISKAMPF (einer senkt, alle ziehen nach – ruinös, oft an Tankstellen sichtbar), PREISFÜHRERSCHAFT (der Größte setzt den Preis, die anderen folgen stillschweigend – legal, solange keine Absprache), KARTELL (ausdrückliche Absprache über Preise/Gebiete/Mengen – nach § 1 GWB verboten, Bundeskartellamt verhängt empfindliche Bußgelder, Kronzeugenregelung deckt Kartelle auf). Deshalb weichen Oligopolisten gern auf NICHT-PREIS-Wettbewerb aus: Werbung, Service, Qualität, Markenbindung.",
            },
            { type: "heading", value: "Das Marktformenschema: Monopol, Oligopol, Polypol" },
            {
              type: "text",
              value:
                "Marktformen ordnen Märkte nach der ANZAHL der Anbieter und Nachfrager – das klassische 9-Felder-Schema: einer / wenige / viele auf jeder Marktseite. Die drei Grundformen nach der ANGEBOTSseite: MONOPOL = EIN Anbieter beherrscht den Markt (früher Deutsche Bahn im Fernverkehr, örtliches Wasserwerk; in der IT z. B. ein Software-Anbieter mit proprietärem Format ohne Alternative). Der Monopolist ist Preisfixierer – er setzt den Preis, die Nachfrager können nur die Menge anpassen. · OLIGOPOL = WENIGE Anbieter teilen sich den Markt (Tankstellenketten, Mobilfunknetzbetreiber, die großen Cloud-Hyperscaler). Typisch: starke gegenseitige Reaktion – senkt einer den Preis, ziehen alle nach; hohe Versuchung zu (verbotenen!) Preisabsprachen. · POLYPOL = VIELE Anbieter, viele Nachfrager (Wochenmarkt, Gastronomie, freie IT-Dienstleister). Der Einzelne ist Preisnehmer/Mengenanpasser – dem Marktpreis kann er nur folgen. Die Begriffe gelten auch für die NACHFRAGEseite: Nachfragemonopol (Monopson, z. B. der Staat als einziger Nachfrager für Rüstungsgüter), Nachfrageoligopol (wenige Automobilhersteller als Kunden der Zulieferer) – und Kombinationen wie das bilaterale (zweiseitige) Monopol: ein Anbieter trifft einen Nachfrager (Spezialmaschinenbauer ↔ einziger Abnehmer).",
            },
            { type: "heading", value: "Vollkommener vs. unvollkommener Markt" },
            {
              type: "text",
              value:
                "Das Modell des VOLLKOMMENEN Marktes braucht fünf Bedingungen: homogene (gleichartige) Güter · keine persönlichen Präferenzen (kein Lieblingshändler) · keine räumlichen Unterschiede (ein Punktmarkt) · keine zeitlichen Unterschiede (alle handeln gleichzeitig) · vollständige Markttransparenz (alle kennen alle Preise). Nur dann bildet sich genau EIN Marktpreis. Reale Märkte sind praktisch immer UNVOLLKOMMEN – am nächsten kommt dem Modell die Wertpapierbörse. Prüfungsklassiker: eine Bedingung nennen können, die verletzt ist (z. B. Markenpräferenz beim Smartphone-Kauf = persönliche Präferenz → unvollkommen).",
            },
            { type: "heading", value: "Käufermarkt, Verkäufermarkt & Wettbewerbsaufsicht" },
            {
              type: "text",
              value:
                "KÄUFERMARKT: Das Angebot übersteigt die Nachfrage – die Käufer sitzen am längeren Hebel, Preise sinken, Anbieter müssen umwerben (Gebrauchtwagen-Schwemme, Bewerbermarkt aus Firmensicht bei vielen Bewerbern). VERKÄUFERMARKT: Die Nachfrage übersteigt das Angebot – Verkäufer diktieren die Konditionen (Wohnungen in Großstädten, GPU-Knappheit, und der IT-ARBEITSMARKT aus AZUBI-Sicht: Fachkräftemangel = du bist der umworbene „Verkäufer“ deiner Arbeitskraft). Weil Monopole und Absprachen den Wettbewerb aushebeln, wacht das BUNDESKARTELLAMT auf Basis des GWB (Gesetz gegen Wettbewerbsbeschränkungen): Kartellverbot (Preis-/Gebietsabsprachen sind verboten und bußgeldbewehrt), Missbrauchsaufsicht über marktbeherrschende Unternehmen und Fusionskontrolle (Zusammenschlüsse ab bestimmten Umsatzschwellen brauchen Freigabe). Auf EU-Ebene ergänzt der Digital Markets Act Sonderregeln für Gatekeeper-Plattformen.",
            },
            {
              type: "note",
              value:
                "Merkhilfen: MONO = 1, OLIGO = wenige, POLY = viele (griechisch – wie Monolog/Dialog/Polygon). Monopolist = PreisFIXIERER, Polypolist = PreisNEHMER. Käufermarkt = Angebot > Nachfrage (Käufer king), Verkäufermarkt umgekehrt.",
            },
            { type: "heading", value: "Übungsaufgabe: Marktformen zuordnen" },
            {
              type: "text",
              value:
                "Ordne Marktform (nach Angebotsseite) bzw. Begriff zu und begründe je in einem Satz: a) Drei Mobilfunknetzbetreiber bedienen Millionen Kunden. b) Das städtische Wasserwerk beliefert alle Haushalte. c) 40 Imbisse konkurrieren in der Innenstadt um Laufkundschaft. d) Der Staat ist einziger Käufer für ein spezielles Radarsystem, das mehrere Firmen anbieten. e) Zwei Tankstellenketten sprechen ihre Preise ab – wer schreitet ein, auf welcher Rechtsgrundlage?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Angebotsoligopol – wenige Anbieter, viele Nachfrager; starke gegenseitige Preisreaktion.\nb) Angebotsmonopol – ein Anbieter ohne Ausweichmöglichkeit, Preisfixierer (daher reguliert).\nc) Polypol – viele Anbieter, viele Nachfrager; der Einzelne ist Preisnehmer.\nd) Nachfragemonopol (Monopson) – ein Nachfrager, mehrere Anbieter.\ne) Verbotenes Kartell (Preisabsprache): Das Bundeskartellamt schreitet auf Grundlage des GWB ein – Bußgelder, Absprache nichtig.",
            },
          ],
          quiz: [
            {
              id: "imp_wiso-markt-1_g0",
              q: "Was gilt am Gleichgewichtspreis?",
              options: [
                "Angebotene und nachgefragte Menge stimmen überein",
                "Der Staat hat den Preis genehmigt",
                "Alle Anbieter machen denselben Gewinn",
                "Die nachgefragte Menge ist dauerhaft größer als das Angebot",
              ],
              correct: 0,
              explain: "Markträumung: Es bleibt weder Überschuss noch Knappheit.",
            },
            {
              id: "imp_wiso-markt-1_g1",
              q: "Der Preis liegt über dem Gleichgewichtspreis. Was entsteht?",
              options: [
                "Ein Nachfrageüberhang mit Wartelisten und langen Lieferzeiten für die Kunden",
                "Angebotsüberhang – Anbieter bleiben auf Ware sitzen und senken Preise",
                "Ein neues, höheres Gleichgewicht",
                "Sofortiger Marktzusammenbruch",
              ],
              correct: 1,
              explain:
                "Zu teuer: Es wird mehr angeboten als gekauft – der Preis sinkt Richtung Gleichgewicht.",
            },
            {
              id: "imp_wiso-markt-1_g2",
              q: "Die Nachfrage nach einem Produkt steigt deutlich (Trend). Kurzfristige Folge?",
              options: [
                "Preis sinkt, Menge steigt",
                "Preis steigt, Menge sinkt",
                "Preis und gehandelte Menge steigen",
                "Preis und Menge bleiben konstant",
              ],
              correct: 2,
              explain:
                "Nachfragekurve nach rechts: neues Gleichgewicht bei höherem Preis und größerer Menge.",
            },
            {
              id: "imp_wiso-markt-1_g3",
              q: "Welche Bedingung gehört zum vollkommenen Markt?",
              options: [
                "Starke Markenpräferenzen der Käufer",
                "Ein einziger großer Anbieter",
                "Staatlich festgelegte Preise",
                "Vollständige Markttransparenz",
              ],
              correct: 3,
              explain:
                "Dazu homogene Güter, keine Präferenzen, viele kleine Akteure – reale Märkte erfüllen das kaum.",
            },
            {
              id: "imp_wiso-markt-1_g4",
              q: "Der deutsche Mobilfunknetz-Markt mit drei Netzbetreibern ist ein …",
              options: ["Oligopol", "Polypol", "Monopol", "Nachfragemonopol"],
              correct: 0,
              explain:
                "Wenige Anbieter, viele Nachfrager – typisch: intensive gegenseitige Beobachtung.",
            },
            {
              id: "imp_wiso-markt-1_g5",
              q: "Warum sind Kartelle verboten?",
              options: [
                "Sie senken die Verbraucherpreise dauerhaft unter die tatsächlichen Herstellungskosten",
                "Sie schalten den Preiswettbewerb aus – Kunden zahlen überhöhte Preise (§ 1 GWB)",
                "Sie verhindern Fusionen zwischen Unternehmen",
                "Sie gelten nur im Ausland als schädlich",
              ],
              correct: 1,
              explain:
                "Absprachen über Preise, Mengen oder Gebiete zerstören die Steuerungsfunktion des Wettbewerbs.",
            },
            {
              id: "imp_wiso-markt-1_g6",
              q: "Ein staatlicher Höchstpreis unter dem Gleichgewichtspreis führt zu …",
              options: [
                "einem Angebotsüberhang",
                "sinkender Nachfrage",
                "einem Nachfrageüberhang mit Knappheit und ggf. Schwarzmarkt",
                "einer automatisch steigenden Produktion der Anbieter",
              ],
              correct: 2,
              explain:
                "Der Preis darf nicht steigen, also gleicht nichts Angebot und Nachfrage aus – es bleibt Knappheit.",
            },
            {
              id: "imp_wiso-markt-1_g7",
              q: "Was kann ein Monopolist – anders als ein Polypolist?",
              options: [
                "Preis UND Absatzmenge gleichzeitig völlig frei festlegen, unabhängig von der Nachfrage",
                "Gesetze zum eigenen Vorteil erlassen",
                "Unbegrenzt Verluste an den Staat weitergeben",
                "Den Preis setzen (die Menge bestimmt dann die Nachfrage) oder umgekehrt",
              ],
              correct: 3,
              explain:
                "Preissetzungsspielraum ja – aber die Nachfragekurve bleibt: Preis rauf heißt Menge runter.",
            },
            {
              id: "imp_wiso-markt-1_g8",
              q: "Preisführerschaft im Oligopol bedeutet:",
              options: [
                "Ein führender Anbieter setzt den Preis, die übrigen folgen ohne Absprache",
                "Alle Anbieter schließen einen schriftlichen Preisvertrag",
                "Der Staat bestimmt einen Leitpreis für die Branche",
                "Der jeweils günstigste Anbieter muss den anderen seine Kalkulation offenlegen",
              ],
              correct: 0,
              explain:
                "Stillschweigendes Parallelverhalten ist legal – die ausdrückliche Absprache (Kartell) nicht.",
            },
            {
              id: "imp_wiso-markt-1_g9",
              q: "Welcher reale Markt kommt dem vollkommenen Markt am nächsten?",
              options: [
                "Der Gebrauchtwagenmarkt",
                "Die Wertpapierbörse",
                "Der Friseurmarkt einer Kleinstadt",
                "Der Markt für Markenturnschuhe",
              ],
              correct: 1,
              explain:
                "Homogene Papiere, hohe Transparenz, viele Akteure, sekundenschnelle Anpassung.",
            },
            {
              id: "imp_wiso-markt-1_g_mf1",
              q: "Ein Anbieter, viele Nachfrager – das ist ein …",
              options: ["Polypol", "Angebotsmonopol", "Oligopol", "Käufermarkt"],
              correct: 1,
              explain:
                "Mono = einer: Ein Anbieter beherrscht den Markt und setzt als Preisfixierer den Preis.",
            },
            {
              id: "imp_wiso-markt-1_g_mf2",
              q: "Tankstellenketten und Mobilfunknetzbetreiber sind typische Beispiele für ein …",
              options: ["Monopol", "Polypol", "Oligopol", "bilaterales Monopol"],
              correct: 2,
              explain:
                "Wenige Anbieter, viele Nachfrager – mit starker gegenseitiger Preisreaktion.",
            },
            {
              id: "imp_wiso-markt-1_g_mf3",
              q: "Im Polypol ist der einzelne Anbieter …",
              options: ["Preisfixierer", "Mengenfixierer", "Marktaufseher", "Preisnehmer"],
              correct: 3,
              explain:
                "Bei vielen Anbietern kann der Einzelne den Marktpreis nicht beeinflussen – er passt nur seine Menge an.",
            },
            {
              id: "imp_wiso-markt-1_g_mf4",
              q: "Der Staat als EINZIGER Käufer von Rüstungsgütern ist ein …",
              options: [
                "Nachfragemonopol (Monopson)",
                "Angebotsmonopol",
                "Verkäufermarkt",
                "Polypol",
              ],
              correct: 0,
              explain:
                "Die Marktformen gelten auch für die Nachfrageseite: ein Nachfrager = Nachfragemonopol.",
            },
            {
              id: "imp_wiso-markt-1_g_mf5",
              q: "Welche Bedingung gehört NICHT zum vollkommenen Markt?",
              options: [
                "homogene Güter",
                "volle Markttransparenz",
                "staatliche Preisvorgabe",
                "keine Präferenzen",
              ],
              correct: 2,
              explain:
                "Der vollkommene Markt braucht Homogenität, Transparenz, keine Präferenzen, keine räumlichen/zeitlichen Unterschiede – keinen Staatspreis.",
            },
            {
              id: "imp_wiso-markt-1_g_mf6",
              q: "Angebot > Nachfrage kennzeichnet den …",
              options: ["Verkäufermarkt", "Käufermarkt", "vollkommenen Markt", "Schwarzmarkt"],
              correct: 1,
              explain: "Überangebot stärkt die Käuferseite: Preise sinken, Anbieter müssen werben.",
            },
            {
              id: "imp_wiso-markt-1_g_mf7",
              q: "Preisabsprachen zwischen Wettbewerbern sind …",
              options: [
                "erlaubt, wenn schriftlich",
                "nur in Oligopolen erlaubt",
                "meldepflichtig, sonst ok",
                "als Kartell verboten (GWB)",
              ],
              correct: 3,
              explain:
                "Kartellverbot: Das Bundeskartellamt ahndet Absprachen mit hohen Bußgeldern; die Vereinbarungen sind nichtig.",
            },
            {
              id: "imp_wiso-markt-1_g_mf8",
              q: "Fusionskontrolle bedeutet: …",
              options: [
                "große Zusammenschlüsse brauchen Kartellamts-Freigabe",
                "Firmen dürfen nie fusionieren",
                "der Staat legt Fusionspreise fest",
                "nur Banken werden geprüft",
              ],
              correct: 0,
              explain:
                "Ab bestimmten Umsatzschwellen prüft das Bundeskartellamt, ob die Fusion marktbeherrschend würde.",
            },
          ],
        },
        {
          id: "wiso-konj-1",
          title: "Konjunktur: Phasen, Indikatoren & Wirtschaftspolitik",
          content: [
            {
              type: "text",
              value:
                'KONJUNKTUR bezeichnet die wellenförmigen Schwankungen der gesamtwirtschaftlichen Aktivität um den langfristigen Wachstumstrend – gemessen vor allem am realen BRUTTOINLANDSPRODUKT (BIP: Wert aller im Inland erzeugten Waren und Dienstleistungen eines Jahres, "real" = preisbereinigt).\n\nDie VIER PHASEN des Konjunkturzyklus: 1) AUFSCHWUNG (Expansion): steigende Nachfrage, Produktion und Investitionen, sinkende Arbeitslosigkeit, wachsendes Vertrauen. 2) HOCHKONJUNKTUR (Boom): Kapazitäten voll ausgelastet, Überstunden, Fachkräftemangel, steigende Löhne und Preise (Inflationsgefahr), Zinsen ziehen an. 3) ABSCHWUNG (Rezession): Nachfrage sinkt, Auftragspolster schmelzen, Kurzarbeit, Investitionen werden verschoben. Faustregel/Definition: Rezession bei zwei aufeinanderfolgenden Quartalen mit schrumpfendem BIP. 4) TIEF (Depression): geringe Auslastung, hohe Arbeitslosigkeit, Deflationsgefahr – bis Ersatzinvestitionen und neue Nachfrage den nächsten Aufschwung starten.\n\nINDIKATOREN nach zeitlichem Verhältnis zur Entwicklung: FRÜHINDIKATOREN laufen voraus (Auftragseingänge, ifo-Geschäftsklimaindex, Baugenehmigungen, Aktienkurse), PRÄSENZINDIKATOREN zeigen den Ist-Zustand (BIP, Industrieproduktion, Kapazitätsauslastung), SPÄTINDIKATOREN hinken nach (Arbeitslosenquote, Inflation, Insolvenzen) – Betriebe entlassen erst, wenn die Flaute da ist. Prüfungsklassiker: Indikatoren der richtigen Kategorie zuordnen.\n\nURSACHEN von Schwankungen: Nachfrageschocks (Kaufzurückhaltung, Exporteinbruch), Angebotsschocks (Ölpreis, Lieferketten), psychologische Faktoren (Erwartungen!), politische Ereignisse.\n\nGEGENSTEUERN – zwei Grundrichtungen: NACHFRAGEORIENTIERT (Keynes): Der Staat stützt in der Krise die Nachfrage – mehr Staatsausgaben, Steuersenkungen, Kurzarbeitergeld (antizyklische Fiskalpolitik; im Boom soll er sparen und Schulden tilgen). ANGEBOTSORIENTIERT: bessere Produktionsbedingungen – Steuern und Bürokratie senken, Investitionen fördern; die Wirtschaft hilft sich dann selbst. Dazu die GELDPOLITIK der unabhängigen EZB: In der Flaute Leitzinsen senken (Kredite billiger → Investitionen/Konsum steigen), bei Inflation Zinsen erhöhen ("bremsen"). Ziel des Stabilitätsgesetzes von 1967 – das MAGISCHE VIERECK: Preisniveaustabilität, hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht, stetiges und angemessenes Wachstum. "Magisch", weil nie alle vier Ziele gleichzeitig voll erreichbar sind (Zielkonflikte).',
            },
            { type: "heading", value: "Übungsaufgabe: Fantasieland aus der Krise holen" },
            {
              type: "text",
              value:
                "Das Land Fantasia steckt in der Rezession: BIP zwei Quartale rückläufig, Arbeitslosigkeit 9 %, Auftragseingänge brechen ein, Preise stabil. a) Nenne je zwei fiskalpolitische Maßnahmen nach nachfrage- und nach angebotsorientierter Schule. b) Was sollte die Zentralbank tun – mit Wirkungskette? c) Nenne einen Zielkonflikt aus dem magischen Viereck, der beim Gegensteuern entstehen kann.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Nachfrageorientiert: staatliche Investitionsprogramme (Infrastruktur, Digitalisierung) und temporäre Steuersenkung/Kaufanreize – der Staat ersetzt die fehlende private Nachfrage. Angebotsorientiert: Unternehmenssteuern senken und Bürokratie/Genehmigungen beschleunigen – Investieren wird attraktiver.\nb) Leitzins senken → Banken refinanzieren sich billiger → Kreditzinsen sinken → Unternehmen investieren, Haushalte konsumieren mehr → Nachfrage und Produktion steigen.\nc) Beispiel: Kurbelt der Staat Beschäftigung und Wachstum kräftig an, steigt mittelfristig die Inflationsgefahr – hoher Beschäftigungsstand vs. Preisniveaustabilität.",
            },
            { type: "heading", value: "Vertiefung: Indikatoren lesen wie ein Profi" },
            {
              type: "text",
              value:
                "Warum ist die Arbeitslosenquote ein SPÄTindikator? Betriebe reagieren träge: Erst werden Überstunden abgebaut, dann läuft Kurzarbeit, erst zuletzt wird entlassen – und eingestellt wird auch erst, wenn der Aufschwung gefestigt ist. Deshalb signalisiert der Arbeitsmarkt die Wende immer verspätet. Umgekehrt der ifo-Geschäftsklimaindex: Er fragt 9.000 Unternehmen nach LAGE und ERWARTUNGEN – Erwartungen wirken auf Investitionsentscheidungen, bevor eine einzige Zahl im BIP auftaucht. Merksatz: Stimmung läuft voraus, Produktion zeigt an, der Arbeitsmarkt hinkt nach.",
            },
            { type: "heading", value: "Vertiefung: BIP nominal vs. real – der Deflator" },
            {
              type: "text",
              value:
                'Wächst das BIP um 5 %, während die Preise um 4 % steigen, ist die Wirtschaft real kaum gewachsen – deshalb unterscheidet man: NOMINALES BIP (zu aktuellen Preisen) und REALES BIP (preisbereinigt, zu Preisen eines Basisjahres). Der BIP-DEFLATOR verbindet beide: Deflator = nominales BIP ÷ reales BIP × 100. Ein Deflator von 104 heißt: Das Preisniveau liegt 4 % über dem Basisjahr. Abgrenzung zum Verbraucherpreisindex (VPI): Der VPI misst nur den Warenkorb der privaten Haushalte (Basis der "Inflationsrate" in den Nachrichten), der Deflator ALLE im Inland erzeugten Güter – auch Investitionsgüter und Staatsausgaben. Prüfungsrechnung: nominal 4.284 Mrd., real 4.120 Mrd. → Deflator = 4.284 ÷ 4.120 × 100 ≈ 104,0.',
            },
            { type: "heading", value: "Das Magische Viereck (StabG)" },
            {
              type: "text",
              value:
                "Das Stabilitätsgesetz von 1967 verpflichtet die Wirtschaftspolitik auf vier gleichzeitige Ziele – das MAGISCHE VIERECK: 1. Preisniveaustabilität (Inflation um 2 %) · 2. hoher Beschäftigungsstand (niedrige Arbeitslosigkeit) · 3. außenwirtschaftliches Gleichgewicht (Exporte ≈ Importe) · 4. stetiges und angemessenes Wirtschaftswachstum. „Magisch“ heißt es, weil sich die Ziele teilweise WIDERSPRECHEN (Zielkonflikte): Kurbelt der Staat das Wachstum an, steigt oft die Inflation; bekämpft die Zentralbank die Inflation mit hohen Zinsen, bremst das Wachstum und Beschäftigung. Alle vier gleichzeitig perfekt zu erreichen gelingt praktisch nie. Erweiterung zum Magischen SECHSECK: + gerechte Einkommensverteilung + Umweltschutz.",
            },
            {
              type: "note",
              value:
                "Merkhilfe Magisches Viereck: „PBAW“ – Preise stabil, Beschäftigung hoch, Außenwirtschaft im Gleichgewicht, Wachstum stetig. Magisch = Zielkonflikte, nicht Zauberei.",
            },
          ],
          quiz: [
            {
              id: "imp_wiso-konj-1_g10",
              q: "Nominales BIP 4.284 Mrd., reales BIP 4.120 Mrd. – der BIP-Deflator beträgt ca. …",
              options: ["96,2", "100,0", "104,0", "164,0"],
              correct: 2,
              explain: "4.284 ÷ 4.120 × 100 ≈ 104 → Preisniveau 4 % über dem Basisjahr.",
            },
            {
              id: "imp_wiso-konj-1_g0",
              q: "In welcher Reihenfolge durchläuft die Konjunktur ihre Phasen?",
              options: [
                "Boom → Aufschwung → Tief → Abschwung",
                "Tief → Abschwung → Boom → Aufschwung",
                "Aufschwung → Boom → Abschwung → Tief",
                "Abschwung → Aufschwung → Tief → Boom",
              ],
              correct: 2,
              explain:
                "Expansion, Hochkonjunktur, Rezession, Depression – dann beginnt der Zyklus neu.",
            },
            {
              id: "imp_wiso-konj-1_g1",
              q: "Wann spricht man üblicherweise von einer Rezession?",
              options: [
                "Sobald die Inflation über 2 % steigt",
                "Wenn die Arbeitslosenquote unter 5 % fällt",
                "Bei einem mindestens einmonatigen Rückgang der wichtigsten Aktienkurse",
                "Bei zwei aufeinanderfolgenden Quartalen mit sinkendem realem BIP",
              ],
              correct: 3,
              explain: "Die Zwei-Quartale-Faustregel ist die gängige technische Definition.",
            },
            {
              id: "imp_wiso-konj-1_g2",
              q: "Der ifo-Geschäftsklimaindex ist ein typischer …",
              options: ["Frühindikator", "Spätindikator", "Präsenzindikator", "Störindikator"],
              correct: 0,
              explain: "Erwartungen und Auftragslage laufen der realen Entwicklung voraus.",
            },
            {
              id: "imp_wiso-konj-1_g3",
              q: "Warum ist die Arbeitslosenquote ein Spätindikator?",
              options: [
                "Weil die Statistik nur jährlich erhoben wird",
                "Weil Betriebe erst Überstunden und Kurzarbeit abbauen, bevor sie entlassen oder neu einstellen",
                "Weil sich viele Betroffene erst Wochen später bei der Agentur für Arbeit arbeitslos melden",
                "Weil sie vom BIP gar nicht beeinflusst wird",
              ],
              correct: 1,
              explain: "Der Arbeitsmarkt reagiert träge – die Wende zeigt sich dort zuletzt.",
            },
            {
              id: "imp_wiso-konj-1_g4",
              q: "Antizyklische Fiskalpolitik nach Keynes bedeutet:",
              options: [
                "In der Krise sparen, im Boom investieren",
                "Die Staatsausgaben unabhängig von der jeweiligen Konjunkturlage konstant halten",
                "In der Krise Ausgaben erhöhen/Steuern senken, im Boom sparen und tilgen",
                "Die Geldmenge jährlich um einen festen Satz erhöhen",
              ],
              correct: 2,
              explain: "Der Staat gleicht die Nachfragelücke aus – gegen den Zyklus.",
            },
            {
              id: "imp_wiso-konj-1_g5",
              q: "Was macht die EZB typischerweise bei hoher Inflation?",
              options: [
                "Die Leitzinsen deutlich senken, um Kredite zu verbilligen und die Wirtschaft anzukurbeln",
                "Steuern erhöhen",
                "Löhne einfrieren",
                "Leitzinsen erhöhen, um Kredite zu verteuern und die Nachfrage zu dämpfen",
              ],
              correct: 3,
              explain:
                "Geldpolitik bremst über den Zins – Steuern und Löhne sind nicht ihr Instrument.",
            },
            {
              id: "imp_wiso-konj-1_g6",
              q: "Welche vier Ziele bilden das magische Viereck?",
              options: [
                "Preisstabilität, hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht, stetiges angemessenes Wachstum",
                "Niedrige Steuern, hohe Exportüberschüsse, ein möglichst starker Euro und garantierte Vollbeschäftigung",
                "Wachstum, Digitalisierung, Klimaschutz, Bildung",
                "Preisstabilität, Haushaltsüberschuss, Mindestlohn, Zollfreiheit",
              ],
              correct: 0,
              explain: 'Verankert im Stabilitätsgesetz 1967 – "magisch" wegen der Zielkonflikte.',
            },
            {
              id: "imp_wiso-konj-1_g7",
              q: "Typische Merkmale der Hochkonjunktur (Boom)?",
              options: [
                "Leere Auftragsbücher und Kurzarbeit",
                "Volle Kapazitätsauslastung, Fachkräftemangel, steigende Preise und Zinsen",
                "Deflation und hohe Arbeitslosigkeit",
                "Sinkende Löhne und Preise bei gleichzeitig steigender Produktion",
              ],
              correct: 1,
              explain: "Am oberen Wendepunkt überhitzt die Wirtschaft – Inflationsgefahr.",
            },
            {
              id: "imp_wiso-konj-1_g8",
              q: "Was misst das Bruttoinlandsprodukt?",
              options: [
                "Das Gesamtvermögen aller Inländer einschließlich ihrer Anlagen im Ausland",
                "Die Summe aller staatlichen Steuereinnahmen",
                "Den Wert aller im Inland erzeugten Waren und Dienstleistungen einer Periode",
                "Nur die Produktion der Industrie ohne Dienstleistungen",
              ],
              correct: 2,
              explain:
                'Inlandskonzept, preisbereinigt als "reales" BIP – zentrale Messgröße der Konjunktur.',
            },
            {
              id: "imp_wiso-konj-1_g9",
              q: "Angebotsorientierte Wirtschaftspolitik setzt vor allem auf …",
              options: [
                "deutlich höhere Sozialtransfers zur unmittelbaren Stärkung des privaten Konsums",
                "staatliche Beschäftigungsprogramme",
                "staatliche Preisfestsetzung für Grundgüter",
                "bessere Produktionsbedingungen: niedrigere Unternehmenssteuern, weniger Bürokratie, Investitionsanreize",
              ],
              correct: 3,
              explain:
                "Die Angebotsseite stärken, damit Unternehmen von sich aus investieren – Gegenpol zu Keynes.",
            },
            {
              id: "imp_wiso-konj-1_g_mv1",
              q: "Welches Ziel gehört NICHT zum Magischen Viereck?",
              options: [
                "Preisniveaustabilität",
                "hoher Beschäftigungsstand",
                "maximale Staatseinnahmen",
                "außenwirtschaftliches Gleichgewicht",
              ],
              correct: 2,
              explain:
                "Die vier Ziele des StabG: Preise, Beschäftigung, Außenwirtschaft, Wachstum – Steuermaximierung ist keines.",
            },
            {
              id: "imp_wiso-konj-1_g_mv2",
              q: "„Magisch“ heißt das Viereck, weil …",
              options: [
                "es geheim gehalten wird",
                "sich die Ziele teilweise widersprechen",
                "es von der EZB verwaltet wird",
                "es nur in Krisen gilt",
              ],
              correct: 1,
              explain:
                "Zielkonflikte: z. B. Wachstum ankurbeln treibt oft die Inflation – alle vier zugleich sind kaum erreichbar.",
            },
          ],
        },
      ],
    },
    {
      id: "wirt-b",
      title: "Beschaffung & Kalkulation",
      lessons: [
        {
          id: "wiso-beschaff-1",
          title: "Beschaffung vertieft: Andler, Meldebestand & ABC-Analyse",
          content: [
            {
              type: "text",
              value:
                "Drei Werkzeuge steuern, WANN und WIE VIEL bestellt wird – und WELCHE Artikel die Aufmerksamkeit verdienen:\n\nMELDEBESTAND: Bei welchem Lagerbestand muss die Bestellung raus, damit die Ware ankommt, bevor das Lager leer ist? Meldebestand = Tagesverbrauch × Lieferzeit + Sicherheitsbestand. Der Sicherheitsbestand (eiserner Bestand) puffert Lieferverzug und Mehrverbrauch.\n\nOPTIMALE BESTELLMENGE (Andler-Formel): Viele kleine Bestellungen = hohe Bestellkosten (jede Bestellung kostet Bearbeitung/Versand), wenige große = hohe Lagerkosten (gebundenes Kapital, Platz). Das Optimum: q = √(2 × Jahresbedarf × Bestellkosten je Bestellung ÷ (Einstandspreis × Lagerhaltungskostensatz)). Der Lagerhaltungskostensatz (z. B. 20 %) umfasst Zinsen, Raum, Versicherung, Schwund.\n\nABC-ANALYSE: Nicht jeder Artikel verdient gleiche Sorgfalt. Man sortiert nach Jahresverbrauchswert (Menge × Preis) und bildet Klassen: A-Artikel ≈ 10–20 % der Artikel, aber ≈ 70–80 % des Werts → intensiv steuern (exakte Disposition, Preisverhandlungen, Andler). C-Artikel ≈ 50 % der Artikel, nur ≈ 5–10 % des Werts → einfach steuern (Sammelbestellung, großer Sicherheitsbestand – Nachdenken kostet hier mehr als das Material). B liegt dazwischen. Der IT-Klassiker: Server und Lizenzen sind A, Patchkabel und Kabelbinder sind C.",
            },
            { type: "heading", value: "Übungsaufgabe: Toner-Disposition" },
            {
              type: "text",
              value:
                "Ein Systemhaus verbraucht 1.800 Toner pro Jahr (360 Arbeitstage → 5/Tag). Lieferzeit 6 Tage, Sicherheitsbestand 20 Stück. Bestellkosten 45 € je Bestellung, Einstandspreis 60 €, Lagerhaltungskostensatz 15 %. a) Berechne den Meldebestand. b) Berechne die optimale Bestellmenge nach Andler. c) Wie viele Bestellungen pro Jahr ergeben sich daraus?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Meldebestand = 5 × 6 + 20 = 50 Stück\nb) q = √(2 × 1.800 × 45 ÷ (60 × 0,15)) = √(162.000 ÷ 9) = √18.000 ≈ 134 Stück\nc) 1.800 ÷ 134 ≈ 13,4 → praktisch 13–14 Bestellungen pro Jahr.",
            },
            { type: "heading", value: "Vertiefung: Grenzen der Andler-Formel" },
            {
              type: "text",
              value:
                "Die Formel unterstellt konstanten Verbrauch, feste Preise und unbegrenzten Lagerraum – die Realität kennt Rabattstaffeln (große Menge = besserer Preis, spricht gegen das rechnerische Optimum), Mindestbestellmengen, Verderb/Alterung (bei IT: Technologiewechsel!) und Lagerkapazität. In der Prüfung: Formel anwenden UND eine Grenze nennen können bringt die volle Punktzahl.",
            },
            { type: "heading", value: "Incoterms: Wer trägt Transportkosten und Risiko?" },
            {
              type: "text",
              value:
                "Bei (internationalen) Lieferungen regeln die Incoterms (International Commercial Terms der ICC, aktuell Fassung 2020) mit Drei-Buchstaben-Kürzeln, bis wohin der VERKÄUFER Kosten und Risiko trägt. Die vier Bekanntesten als Treppe vom Käufer- zum Verkäuferaufwand: EXW (Ex Works/ab Werk – Käufer holt ab, trägt alles) · FOB (Free on Board – Verkäufer liefert bis aufs Schiff, dann Übergang) · CIF (Cost, Insurance, Freight – Verkäufer zahlt Fracht und Versicherung bis Zielhafen, Risiko geht aber schon an Bord über!) · DDP (Delivered Duty Paid – Verkäufer trägt alles bis zur Haustür inklusive Zoll). Für die Berufsschule reicht: Prinzip verstehen, EXW und DDP als Extrempole nennen können, CIF-Falle (Kosten ≠ Risiko) kennen.",
            },
            {
              type: "note",
              value:
                "Merkhilfe Incoterms-Treppe: EXW → FOB → CIF → DDP = vom „hol’s dir selbst“ bis „frei Haus verzollt“.",
            },
          ],
          quiz: [
            {
              id: "imp_wiso-beschaff-1_g0",
              q: "Tagesverbrauch 5, Lieferzeit 6 Tage, Sicherheitsbestand 20 – Meldebestand?",
              options: ["30 Stück", "31 Stück", "50 Stück", "110 Stück"],
              correct: 2,
              explain: "5 × 6 + 20 = 50.",
            },
            {
              id: "imp_wiso-beschaff-1_g1",
              q: "Welche zwei Kostenarten gleicht die Andler-Formel gegeneinander aus?",
              options: [
                "Bestellkosten und Lagerhaltungskosten",
                "Personalkosten und Materialkosten",
                "Fixkosten und variable Kosten",
                "Einstandspreis und Verkaufspreis",
              ],
              correct: 0,
              explain:
                "Viele kleine Bestellungen treiben die Bestellkosten, große Mengen die Lagerkosten.",
            },
            {
              id: "imp_wiso-beschaff-1_g2",
              q: "Wonach sortiert die ABC-Analyse die Artikel?",
              options: [
                "Alphabetisch nach Artikelname",
                "Nach dem Jahresverbrauchswert (Menge × Preis)",
                "Nach dem Lagerplatz",
                "Nach der Lieferzeit",
              ],
              correct: 1,
              explain:
                "Wert statt Stückzahl – wenige Artikel machen meist den Großteil des Werts aus.",
            },
            {
              id: "imp_wiso-beschaff-1_g3",
              q: "Typische Behandlung von C-Artikeln?",
              options: [
                "Tagesgenaue Disposition mit Andler-Optimum",
                "Intensive Preisverhandlungen je Bestellung",
                "Gar nicht mehr lagern",
                "Sammelbestellungen mit großzügigem Sicherheitsbestand",
              ],
              correct: 3,
              explain:
                "Der Steuerungsaufwand soll zum Wert passen – bei Kabelbindern lohnt kein Optimierungsaufwand.",
            },
            {
              id: "imp_wiso-beschaff-1_g4",
              q: "Wozu dient der Sicherheitsbestand?",
              options: [
                "Er puffert Lieferverzug und unerwarteten Mehrverbrauch",
                "Er senkt den Einstandspreis",
                "Er ersetzt die Inventur",
                "Er finanziert die Bestellkosten",
              ],
              correct: 0,
              explain: "Der eiserne Bestand wird planmäßig nicht angetastet.",
            },
            {
              id: "imp_wiso-beschaff-1_g5",
              q: "Jahresbedarf 1.800, Bestellkosten 45 €, Einstandspreis 60 €, Lagerkostensatz 15 % – optimale Bestellmenge?",
              options: ["ca. 95 Stück", "ca. 134 Stück", "ca. 180 Stück", "ca. 268 Stück"],
              correct: 1,
              explain: "√(2·1800·45 ÷ 9) = √18.000 ≈ 134.",
            },
            {
              id: "imp_wiso-beschaff-1_g6",
              q: "Welcher Posten gehört in den Lagerhaltungskostensatz?",
              options: [
                "Die Versandkosten des Lieferanten",
                "Der Gewinnzuschlag des Verkäufers",
                "Zinsen auf das im Lager gebundene Kapital",
                "Die Bestellbearbeitung im Einkauf",
              ],
              correct: 2,
              explain:
                "Dazu Raum, Versicherung, Schwund – alles, was das LIEGENDE Material kostet.",
            },
            {
              id: "imp_wiso-beschaff-1_g7",
              q: "Warum kann eine Rabattstaffel gegen die Andler-Menge sprechen?",
              options: [
                "Rabatte sind bei A-Artikeln aus Compliance-Gründen grundsätzlich verboten",
                "Die Andler-Formel gilt ausschließlich für C-Artikel mit geringem Wert",
                "Rabattstaffeln erhöhen automatisch die Bestellkosten je Vorgang",
                "Ab größerer Menge sinkt der Einstandspreis – das kann die Lagerkosten überkompensieren",
              ],
              correct: 3,
              explain: "Dann rechnet man beide Varianten durch und vergleicht die Gesamtkosten.",
            },
            {
              id: "imp_wiso-beschaff-1_g8",
              q: "Server und Standardlizenzen eines Systemhauses sind typischerweise …",
              options: [
                "A-Artikel: wenig Positionen, hoher Wertanteil",
                "B-Artikel: mittlerer Wert",
                "C-Artikel: hoher Wertanteil",
                "nicht klassifizierbar",
              ],
              correct: 0,
              explain: "Hoher Jahresverbrauchswert → intensive Steuerung lohnt.",
            },
            {
              id: "imp_wiso-beschaff-1_g9",
              q: "Welche Annahme steckt in der Andler-Formel?",
              options: [
                "Schwankender Verbrauch mit Saisonspitzen",
                "Gleichmäßiger Verbrauch und konstante Preise",
                "Unbegrenzte Rabattstaffeln",
                "Lieferzeit von null Tagen",
              ],
              correct: 1,
              explain:
                "Deshalb ist sie ein Startpunkt, den Mindestmengen, Rabatte und Lagerplatz korrigieren.",
            },
            {
              id: "imp_wiso-beschaff-1_g_inc1",
              q: "Bei EXW (ab Werk) trägt Transportkosten und Risiko …",
              options: ["der Verkäufer", "der Käufer", "der Spediteur", "die Versicherung"],
              correct: 1,
              explain:
                "Ex Works = Käufer holt ab Werk ab und übernimmt ab dort alles – das Minimum für den Verkäufer.",
            },
            {
              id: "imp_wiso-beschaff-1_g_inc2",
              q: "DDP bedeutet …",
              options: [
                "Verkäufer liefert frei Haus inklusive Zoll",
                "Käufer zahlt den Zoll",
                "Lieferung nur bis zum Hafen",
                "digitale Datenpauschale",
              ],
              correct: 0,
              explain:
                "Delivered Duty Paid: Maximalaufwand des Verkäufers – geliefert, verzollt, bis zur Tür.",
            },
          ],
        },
        {
          id: "wirt-b-1",
          title: "Beschaffung, Kalkulation & Angebotsvergleich",
          content: [
            { type: "heading", value: "Beschaffungsprozess (8 Schritte)" },
            {
              type: "text",
              value:
                "1. Bedarfsmeldung (Fachabteilung), 2. Lieferantenauswahl (Anfrage an mehrere), 3. Angebotsvergleich (quantitativ + qualitativ), 4. Bestellung, 5. Warenannahme (Lieferschein prüfen, Mängel dokumentieren), 6. Wareneinlagerung, 7. Rechnungsprüfung (stimmt mit Bestellung/Lieferschein überein?), 8. Zahlung (Skonto beachten!).",
            },
            { type: "heading", value: "Beschaffungsstrategien" },
            {
              type: "text",
              value:
                "JIT (Just in Time): Bedarfsgerecht, minimale Lagerkosten, Risiko bei Lieferausfall. Vorratsbeschaffung: Sicher, aber Lagerkosten und Kapitalbindung. Einzelbeschaffung: Für Spezialteile/Einzelprojekte. ABC-Analyse: A-Güter (20% Menge = 80% Wert) = intensive Betreuung. B-Güter (30% = 15%). C-Güter (50% = 5%) = vereinfachen.",
            },
            { type: "heading", value: "Bezugspreisberechnung (Handelskalkulation)" },
            {
              type: "text",
              value:
                "Listeneinkaufspreis (Bruttopreis Lieferant) MINUS Liefererrabatt (z.B. 7% Mengenrabatt) = Zieleinkaufspreis. MINUS Skonto (z.B. 3% bei schneller Zahlung, berechnet vom Zieleinkaufspreis!) = Bareinkaufspreis. PLUS Bezugskosten (Versand, Fracht, Verpackung) = Einstandspreis (Bezugspreis).",
            },
            {
              type: "text",
              value:
                "Rechenbeispiel: Listeneinkaufspreis 499 EUR. Rabatt 7% = 34,93 EUR. Zieleinkaufspreis = 464,07 EUR. Skonto 3% = 13,92 EUR. Bareinkaufspreis = 450,15 EUR. Bezugskosten +20 EUR. Einstandspreis = 470,15 EUR. ACHTUNG: Skonto wird vom Zieleinkaufspreis berechnet, NICHT vom Listenpreis!",
            },
            {
              type: "note",
              value:
                "Bezugspreisberechnung ist AP1-Standard. Reihenfolge beachten: Erst Rabatt, dann Skonto (vom reduzierten Preis!), dann Bezugskosten addieren.",
            },
            {
              type: "heading",
              value: "Der Beschaffungsprozess von der Bedarfsmeldung bis zur Zahlung",
            },
            {
              type: "text",
              value:
                "Professionelle Beschaffung läuft in Schritten: Bedarfsermittlung → Bezugsquellen finden → Anfragen stellen → Angebote vergleichen (quantitativ per BEZUGSKALKULATION: Listenpreis − Rabatt − Skonto + Bezugskosten = Bezugspreis; qualitativ per NUTZWERTANALYSE: Kriterien gewichten, Punkte vergeben) → bestellen → Wareneingang prüfen (Lieferschein gegen Bestellung!) → Rechnung prüfen → zahlen (Skontofrist nutzen!). Dazu die Lagerfragen: Wer bestellt wann? Bestellpunktverfahren (bei Meldebestand bestellen) vs. Bestellrhythmusverfahren (feste Termine); die optimale Bestellmenge balanciert Bestellkosten (viele kleine Bestellungen) gegen Lagerkosten (große Vorräte); die ABC-Analyse konzentriert den Aufwand auf die wertvollen A-Güter. Für IT-Betriebe wichtig: Beim Just-in-Time-Prinzip spart man Lager, kauft sich aber Lieferrisiko ein – nach den Chip-Krisen halten viele wieder Sicherheitsbestände kritischer Komponenten.",
            },
            { type: "heading", value: "Übungsaufgabe: Angebotsvergleich komplett" },
            {
              type: "text",
              value:
                "Für 40 SSDs liegen vor – Anbieter X: Listenpreis 89 €, 12 % Rabatt, 2 % Skonto, 25 € Versand gesamt. Anbieter Y: 82 €, kein Rabatt, 3 % Skonto, frei Haus, aber Lieferzeit 4 Wochen statt 3 Tagen. Berechne beide Bezugspreise und triff eine begründete Gesamtentscheidung.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: X: 40 × 89 = 3.560 − 12 % = 3.132,80 − 2 % = 3.070,14 + 25 = 3.095,14 €. Y: 40 × 82 = 3.280 − 3 % = 3.181,60 €. Quantitativ liegt X um 86,46 € vorn. Gesamtentscheidung: X – der Preisvorteil UND die Lieferzeit sprechen dafür; 4 Wochen Lieferzeit bei Y wären nur akzeptabel, wenn der Bedarf nicht zeitkritisch ist. Bewertungsschema: Rechenweg mit richtigen Bezugsgrößen (Skonto auf den rabattierten Preis!), dann qualitative Abwägung explizit benennen.",
            },
          ],
          quiz: [
            {
              id: "imp_wirt-b-1_0",
              q: "A-Güter: Wertanteil?",
              options: ["50%", "80%", "100%", "20%"],
              correct: 1,
              explain: "~80% (Pareto-Prinzip: 20% der Güter machen 80% des Wertes aus).",
            },
            {
              id: "imp_wirt-b-1_1",
              q: "Skonto wird berechnet vom?",
              options: [
                "Bareinkaufspreis",
                "Einstandspreis",
                "Zieleinkaufspreis (nach Rabatt)",
                "Listenpreis",
              ],
              correct: 2,
              explain: "Skonto wird vom Zieleinkaufspreis berechnet (nach Abzug des Rabatts).",
            },
            {
              id: "imp_wirt-b-1_2",
              q: "Listeneinkaufspreis 1000 EUR, 10% Rabatt, 2% Skonto, 50 EUR Versand = Einstandspreis?",
              options: [
                "882 EUR",
                "900 + 50 = 950 EUR (Skonto vergessen)",
                "882 + 50 = 932 EUR",
                "1000 - 120 + 50 = 930 EUR",
              ],
              correct: 2,
              explain:
                "1000 − 100 (Rabatt) = 900. 900 − 18 (Skonto) = 882. 882 + 50 (Versand) = 932 EUR.",
            },
            {
              id: "imp_wirt-b-1_3",
              q: "JIT Nachteil?",
              options: [
                "Zu teuer",
                "Zu langsam",
                "Zu viel Lager",
                "Lieferausfall = Produktionsstopp",
              ],
              correct: 3,
              explain: "Just in Time: Hohes Risiko bei Lieferausfall.",
            },
            {
              id: "imp_wirt-b-1_4",
              q: "C-Güter Wertanteil?",
              options: ["5%", "15%", "50%", "80%"],
              correct: 0,
              explain: "C = 50% Menge, aber nur 5% Wert.",
            },
            {
              id: "imp_wirt-b-1_5",
              q: "A-Güter Menge?",
              options: ["5%", "20%", "80%", "50%"],
              correct: 1,
              explain: "20%=80% Wert.",
            },
            {
              id: "imp_wirt-b-1_6",
              q: "Skonto lohnt sich?",
              options: ["Meist ja (eff. >30% p.a.)", "Nie", "Nur Kredit", "Nur groß"],
              correct: 0,
              explain: "Effektiver Jahreszins.",
            },
            {
              id: "imp_wirt-b-1_7",
              q: "Bedarfsermittlung?",
              options: ["1", "Keine", "Deterministisch, stochastisch, heuristisch", "Nur stoch."],
              correct: 2,
              explain: "3 Methoden.",
            },
            {
              id: "imp_wirt-b-1_8",
              q: "Rechnungsprüfung?",
              options: ["Nur Menge", "Rechnung=Bestellung=Lieferschein", "Nur Datum", "Nur Preis"],
              correct: 1,
              explain: "Dreieck.",
            },
            {
              id: "imp_wirt-b-1_9",
              q: "Konventionalstrafe?",
              options: ["Skonto", "Rabatt", "Bonus", "Vertragsstrafe bei Nichteinhaltung"],
              correct: 3,
              explain: "Bei Lieferverzug etc.",
            },
          ],
        },
      ],
    },
    {
      id: "wirt-m",
      title: "Marketing & QM",
      lessons: [
        {
          id: "wiso-qm-1",
          title: "QM-Werkzeuge: PDCA, Pareto & Ishikawa",
          content: [
            {
              type: "text",
              value:
                "Qualitätsmanagement heißt: Probleme systematisch finden, priorisieren und dauerhaft abstellen – mit drei Werkzeugen, die in Prüfungen und im Betriebsalltag immer wieder auftauchen:\n\nPDCA-ZYKLUS (Deming-Kreis): PLAN (Problem analysieren, Maßnahme planen) → DO (im kleinen Rahmen umsetzen) → CHECK (Wirkung messen: Hat es geholfen?) → ACT (bewährte Maßnahme zum Standard machen – oder zurück zu Plan). Der Kreis dreht sich immer weiter: kontinuierlicher Verbesserungsprozess (KVP). IT-Beispiel: Ticket-Auswertung zeigt viele Passwort-Resets (Plan) → Self-Service-Portal pilotieren (Do) → Ticketzahl nach 4 Wochen messen (Check) → firmenweit ausrollen und dokumentieren (Act).\n\nPARETO-DIAGRAMM (80/20): Sortiert Fehlerursachen nach Häufigkeit als Balken, dazu die kumulierte Summenkurve. Kernaussage: Meist verursachen ~20 % der Ursachen ~80 % der Probleme – man sieht sofort, WO Abstellen am meisten bringt. IT-Beispiel: Von 200 Störungen entfallen 120 auf WLAN und 40 auf Drucker – wer diese zwei Ursachen behebt, eliminiert 80 % der Tickets.\n\nISHIKAWA-DIAGRAMM (Fischgräte/Ursache-Wirkung): Das Problem steht am Kopf, die Hauptgräten sind Ursachenkategorien – klassisch die 5 M: Mensch, Maschine, Methode, Material, Mitwelt (+ Messung). Im Team füllt man je Kategorie mögliche Ursachen ein und hangelt sich zur Wurzel. Es strukturiert Brainstorming und verhindert, dass alle nur auf die offensichtliche Ursache starren.\n\nZusammenspiel: Ishikawa sammelt die Ursachen, Pareto priorisiert sie, PDCA stellt sie ab – so werden aus Einzelaktionen ein Qualitätskreislauf.",
            },
            { type: "heading", value: "Übungsaufgabe: Ticketflut analysieren" },
            {
              type: "text",
              value:
                "Der Servicedesk zählt im Quartal: WLAN-Abbrüche 90, Druckerprobleme 45, Passwort-Resets 30, VPN 15, Sonstiges 20 (gesamt 200). a) Erstelle die Pareto-Rangfolge mit kumulierten Prozenten. b) Welche Ursachen deckst du ab, wenn du 80 % der Tickets eliminieren willst? c) Skizziere für die WLAN-Abbrüche je eine mögliche Ursache in den Kategorien Mensch, Maschine, Methode.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) WLAN 90 (45 % | kum. 45 %) → Drucker 45 (22,5 % | 67,5 %) → Passwort 30 (15 % | 82,5 %) → Sonstiges 20 (10 % | 92,5 %) → VPN 15 (7,5 % | 100 %).\nb) WLAN + Drucker + Passwort = 82,5 % → die ersten DREI Ursachen reichen für das 80-%-Ziel.\nc) Mensch: Nutzer wechseln manuell auf schwaches Band / falsches Profil. Maschine: veraltete AP-Firmware, Funklöcher durch defekten Access Point. Methode: kein Standard fürs Roaming/Kanalplanung, fehlendes Monitoring der Auslastung.",
            },
            { type: "heading", value: "Vertiefung: PDCA in der Prüfungsantwort" },
            {
              type: "text",
              value:
                'Wenn eine AP2-Aufgabe "beschreiben Sie ein strukturiertes Vorgehen zur Qualitätsverbesserung" verlangt, ist PDCA das Gerüst mit Punktegarantie – aber nur mit KONKRETEM Bezug: je Phase einen Satz zum Szenario. Häufiger Fehler: Check vergessen (Maßnahme umgesetzt = fertig?). Ohne Messung keine Verbesserung – das unterscheidet KVP von blindem Aktionismus.',
            },
          ],
          quiz: [
            {
              id: "imp_wiso-qm-1_g0",
              q: "Wofür stehen die vier PDCA-Phasen?",
              options: [
                "Plan, Do, Check, Act",
                "Prüfen, Dokumentieren, Kontrollieren, Abschließen",
                "Planen, Delegieren, Chatten, Archivieren",
                "Problem, Diagnose, Change, Audit",
              ],
              correct: 0,
              explain: "Planen → umsetzen → Wirkung messen → standardisieren (oder neu planen).",
            },
            {
              id: "imp_wiso-qm-1_g1",
              q: "Was zeigt ein Pareto-Diagramm?",
              options: [
                "Den zeitlichen Projektverlauf",
                "Ursachen nach Häufigkeit sortiert plus kumulierte Summenkurve",
                "Die Organisationsstruktur des Betriebs",
                "Zusammenhänge zwischen zwei Messgrößen",
              ],
              correct: 1,
              explain:
                "Es macht sichtbar, welche wenigen Ursachen die meisten Probleme verursachen.",
            },
            {
              id: "imp_wiso-qm-1_g2",
              q: "Die Kernaussage der 80/20-Regel:",
              options: [
                "80 % der Projekte scheitern",
                "Rund 20 % der Ursachen erzeugen rund 80 % der Wirkung",
                "Qualität kostet 80 % des Budgets",
                "20 % der Mitarbeiter machen 80 % der Fehler",
              ],
              correct: 1,
              explain: "Deshalb zuerst die Top-Ursachen abstellen – maximale Wirkung pro Aufwand.",
            },
            {
              id: "imp_wiso-qm-1_g3",
              q: "Wie heißen die klassischen Hauptgräten des Ishikawa-Diagramms?",
              options: [
                "Soll, Ist, Abweichung, Maßnahme",
                "Die 5 M: Mensch, Maschine, Methode, Material, Mitwelt",
                "Plan, Do, Check, Act",
                "Stärken, Schwächen, Chancen, Risiken",
              ],
              correct: 1,
              explain:
                "Oft ergänzt um Messung – Kategorien fürs strukturierte Ursachen-Brainstorming.",
            },
            {
              id: "imp_wiso-qm-1_g4",
              q: "90+45+30 von 200 Tickets sind kumuliert …",
              options: ["67,5 %", "75 %", "82,5 %", "90 %"],
              correct: 2,
              explain: "165 ÷ 200 = 82,5 % – die ersten drei Ursachen knacken die 80-%-Marke.",
            },
            {
              id: "imp_wiso-qm-1_g5",
              q: "Welche PDCA-Phase wird in der Praxis am häufigsten übersprungen – mit fatalen Folgen?",
              options: [
                "Plan",
                "Do",
                "Check – ohne Messung weiß niemand, ob die Maßnahme wirkt",
                "Act",
              ],
              correct: 2,
              explain:
                "Umgesetzt heißt nicht verbessert – erst der Soll-Ist-Vergleich schließt den Kreis.",
            },
            {
              id: "imp_wiso-qm-1_g6",
              q: "In welcher Reihenfolge greifen die drei Werkzeuge sinnvoll ineinander?",
              options: [
                "PDCA sammelt, Ishikawa priorisiert, Pareto setzt um",
                "Pareto sammelt, PDCA priorisiert, Ishikawa misst",
                "Alle drei sind austauschbar",
                "Ishikawa sammelt Ursachen, Pareto priorisiert sie, PDCA stellt sie ab",
              ],
              correct: 3,
              explain: "Finden → gewichten → dauerhaft lösen.",
            },
            {
              id: "imp_wiso-qm-1_g7",
              q: "Was macht KVP (kontinuierlicher Verbesserungsprozess) aus?",
              options: [
                "Einmalige Großprojekte alle fünf Jahre",
                "Der PDCA-Kreis dreht sich dauerhaft in kleinen Schritten weiter",
                "Verbesserungen nur durch externe Berater",
                "Fehler werden gesammelt, aber nicht ausgewertet",
              ],
              correct: 1,
              explain: "Viele kleine, gemessene Verbesserungen statt seltener Umstürze.",
            },
          ],
        },
        {
          id: "wirt-m-1",
          title: "Marketing-Mix & Qualitätsmanagement",
          content: [
            { type: "heading", value: "Marketing-Mix (4 Ps)" },
            {
              type: "text",
              value:
                "Product (Produktpolitik): Sortiment, Qualität, Design, Verpackung, Service, Marke. Produktlebenszyklus: Einführung, Wachstum, Reife, Sättigung, Rückgang. Price (Preispolitik): Kalkulation, Preisstrategien (Penetration=niedrig zum Einstieg, Skimming=hoch am Anfang), Rabatte, Skonti, Zahlungsbedingungen. Place (Distributionspolitik): Direktvertrieb (eigener Shop), Indirekter Vertrieb (Händler), E-Commerce, Logistik. Promotion (Kommunikationspolitik): Werbung, PR, Social Media, Messen, Sponsoring, Content Marketing.",
            },
            { type: "heading", value: "Qualitätsmanagement" },
            {
              type: "text",
              value:
                "ISO 9001: Internationaler QM-Standard, Zertifizierung durch externe Stelle, prozessorientiert. PDCA-Zyklus (Deming-Kreis): Plan (Ziel + Maßnahmen planen), Do (umsetzen), Check (Ergebnis prüfen, Soll-Ist), Act (Verbesserungen einleiten, Standard aktualisieren). Dann wieder Plan. KVP (Kaizen): Kontinuierliche kleine Verbesserungen statt großer Umbrüche. TQM (Total Quality Management): Qualität als Aufgabe ALLER Mitarbeiter, nicht nur QM-Abteilung.",
            },
            { type: "heading", value: "Marketing-Mix und Qualitätsmanagement: das Handwerkszeug" },
            {
              type: "text",
              value:
                "Die 4 P des Marketing-Mix strukturieren jede Absatzfrage: PRODUCT (Leistung, Qualität, Sortiment, Service), PRICE (Preis, Rabatte, Zahlungsbedingungen – Skimming = hoch einsteigen und abschöpfen vs. Penetration = niedrig einsteigen und Markt erobern), PLACE (Vertriebswege: direkt, Handel, online) und PROMOTION (Werbung, PR, persönlicher Verkauf, Verkaufsförderung). Für IT-Dienstleister zählt zusätzlich das fünfte P: PEOPLE – die Qualität entsteht im Kundenkontakt. Qualitätsmanagement dazu: Qualität ist die Erfüllung definierter Anforderungen (nicht „Luxus“); der PDCA-Zyklus (Plan–Do–Check–Act) treibt die kontinuierliche Verbesserung, die ISO-9001-Zertifizierung weist ein funktionierendes QM-System nach – in Ausschreibungen oft Teilnahmevoraussetzung.",
            },
            { type: "heading", value: "Übungsaufgabe: Mix für ein neues Produkt" },
            {
              type: "text",
              value:
                "Dein Betrieb bringt einen Wartungsvertrag für Arztpraxen auf den Markt (Fernwartung, Updates, 4h-Reaktionszeit). Skizziere je P eine konkrete Maßnahme und begründe die Preisstrategie.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (Beispiel): PRODUCT: drei klare Pakete (Basis/Plus/Premium) mit definierten Reaktionszeiten – Ärzte kaufen Verlässlichkeit, keine Technikdetails. PRICE: Penetrationsnahe Einstiegspreise im ersten Jahr mit Jahresvertrag – der Markt ist besetzt, Wechselhürden sind hoch, erst Referenzen aufbauen; danach moderate Anpassung. PLACE: Direktvertrieb über persönliche Beratung + Empfehlungsprogramm bestehender Praxen (Vertrauensgeschäft). PROMOTION: Fachbeitrag/Vortrag beim Ärztestammtisch und Referenzfälle statt Massenwerbung – Zielgruppe erreicht man über Glaubwürdigkeit. Bewertung: je P eine konkrete, zielgruppenbezogene Maßnahme + begründete Preislogik.",
            },
          ],
          quiz: [
            {
              id: "imp_wirt-m-1_0",
              q: "PDCA?",
              options: [
                "Plan,Design,Control,Audit",
                "Process,Dev,Cert,Assess",
                "Plan,Deliver,Confirm,Adjust",
                "Plan,Do,Check,Act",
              ],
              correct: 3,
              explain: "Plan, Do, Check, Act.",
            },
            {
              id: "imp_wirt-m-1_1",
              q: "Penetration-Pricing?",
              options: [
                "Preis steigt ständig",
                "Kostenloser Einstieg",
                "Niedriger Einstiegspreis für Marktanteil",
                "Hoher Einstiegspreis",
              ],
              correct: 2,
              explain: "Penetration = niedrig einsteigen, um schnell Marktanteil zu gewinnen.",
            },
            {
              id: "imp_wirt-m-1_2",
              q: "Produktlebenszyklus Phase 3?",
              options: ["Einführung", "Rückgang", "Reife/Sättigung", "Wachstum"],
              correct: 2,
              explain: "Phase 3 = Reife, Umsatz stagniert.",
            },
            {
              id: "imp_wirt-m-1_3",
              q: "Skimming-Strategie?",
              options: [
                "Niedriger Einstiegspreis",
                "Kostenlos",
                "Hoher Einstiegspreis, später senken",
                "Immer gleicher Preis",
              ],
              correct: 2,
              explain: "Skimming: Hoch starten, zahlungskräftige Kunden abschöpfen.",
            },
            {
              id: "imp_wirt-m-1_4",
              q: "KVP = ?",
              options: [
                "Kostenvorschlagsplan",
                "Konfigurationsverzeichnis",
                "Kundenvertrags-Prüfung",
                "Kontinuierlicher Verbesserungsprozess",
              ],
              correct: 3,
              explain: "Kaizen: Ständige kleine Verbesserungen.",
            },
            {
              id: "imp_wirt-m-1_5",
              q: "TQM: Qualität ist Aufgabe von?",
              options: [
                "Nur Geschäftsführung",
                "Allen Mitarbeitern",
                "Nur Produktion",
                "Nur QM-Abteilung",
              ],
              correct: 1,
              explain: "Total Quality Management: Qualität geht alle an.",
            },
            {
              id: "imp_wirt-m-1_6",
              q: "Direktvertrieb?",
              options: ["Hersteller direkt an Kunde", "Nur online", "Händler", "Nur offline"],
              correct: 0,
              explain: "Ohne Zwischenhändler.",
            },
            {
              id: "imp_wirt-m-1_7",
              q: "ISO 9001 extern?",
              options: ["Freiwillig", "Ja, externe Zertifizierung", "Nur intern", "Nein"],
              correct: 1,
              explain: "Externe Auditoren.",
            },
            {
              id: "imp_wirt-m-1_8",
              q: "Content Marketing?",
              options: ["Kaltakquise", "Nützliche Inhalte", "TV", "Spam"],
              correct: 1,
              explain: "Blogartikel etc.",
            },
            {
              id: "imp_wirt-m-1_9",
              q: "B2B vs B2C?",
              options: [
                "Gleich",
                "B2B=Firma-Firma, B2C=Firma-Endkunde",
                "B2B=online",
                "B2C=Firma-Firma",
              ],
              correct: 1,
              explain: "Business-to-X.",
            },
          ],
        },
        {
          id: "wirt-mv-1",
          title: "Markt & Vertrieb: Käufer-/Verkäufermarkt, Zielgruppen, Bedarfsanalyse",
          content: [
            {
              type: "text",
              value:
                "Bevor ein Betrieb etwas verkauft, muss er drei Dinge verstehen: den Markt (wer hat die Verhandlungsmacht?), die Zielgruppe (wen sprechen wir an?) und den Bedarf (was braucht der Kunde wirklich?). Diese Kette – Markt → Zielgruppe → Bedarf → Angebot → Vertriebsweg – ist Standardstoff der AP1 im Wirtschaftsteil und taucht dort gern als Szenario auf: „Ihr Betrieb will ein neues IT-Produkt anbieten …“",
            },
            { type: "heading", value: "Käufermarkt und Verkäufermarkt" },
            {
              type: "text",
              value:
                "Entscheidend ist das Verhältnis von Angebot und Nachfrage. Käufermarkt: Das Angebot übersteigt die Nachfrage – die Käufer haben die Macht, Anbieter müssen mit Preis, Qualität und Service um Kunden kämpfen (Beispiel: Markt für Standard-Notebooks – riesige Auswahl, harte Preisvergleiche). Verkäufermarkt: Die Nachfrage übersteigt das Angebot – die Verkäufer sitzen am längeren Hebel, Kunden akzeptieren Preise und Wartezeiten (Beispiele aus der IT-Praxis: Grafikkarten während der Chip-Knappheit, gefragte Fachkräfte auf dem Arbeitsmarkt). Wichtig für Argumentationsaufgaben: Die Marktlage bestimmt die Strategie – im Käufermarkt gewinnst du über Differenzierung und Service, im Verkäufermarkt über Liefer- und Lieferantensicherung.",
            },
            { type: "heading", value: "Zielgruppen definieren und abgrenzen" },
            {
              type: "list",
              value: [
                "B2B vs. B2C: Geschäftskunden (rationale Entscheidung, längere Zyklen, Rahmenverträge) vs. Privatkunden (emotionaler, preissensibler, Verbraucherschutzrechte wie Widerruf).",
                "Segmentierungskriterien: demografisch (Alter, Unternehmensgröße, Branche), geografisch (Region, Standortdichte), verhaltensbezogen (Kaufhäufigkeit, Servicebedarf, Technikaffinität), bedürfnisorientiert (Sicherheitsanforderungen, Budget).",
                "Praxiswerkzeug Persona: ein fiktiver, konkreter Beispielkunde („Steuerkanzlei, 10–20 Mitarbeitende, hohe Datenschutzanforderungen, kein eigenes IT-Personal“) macht Zielgruppen für Angebot und Marketing greifbar.",
                "Abgrenzung schützt vor Streuverlust: Wer „alle“ anspricht, erreicht niemanden – Budget und Botschaft verpuffen.",
              ],
            },
            { type: "heading", value: "Bedarfsanalyse: Daten erheben und auswerten" },
            {
              type: "text",
              value:
                "Der Bedarf wird ermittelt, nicht geraten. Primärerhebung: eigene, neue Daten – Kundenbefragung (Fragebogen, Interview), Beobachtung, Testinstallation/Pilot. Vorteil: passgenau; Nachteil: teuer und langsam. Sekundärerhebung: vorhandene Daten auswerten – eigene Verkaufs- und Ticketdaten, Branchenstatistiken, Studien, Anforderungskataloge (z. B. Vorgaben an Büroarbeitsplätze aus der Arbeitsstättenverordnung). Vorteil: schnell und günstig; Nachteil: passt selten exakt. In der Praxis kombiniert man beides: erst Sekundärdaten sichten, dann gezielt nachfragen. Ergebnis der Bedarfsanalyse ist ein Anforderungsprofil, aus dem das Angebot (und später das Lastenheft) entsteht.",
            },
            { type: "heading", value: "Vertriebsformen" },
            {
              type: "list",
              value: [
                "Direkter Vertrieb: Hersteller verkauft selbst – eigener Außendienst, eigener Onlineshop, Direktgeschäft. Vorteile: volle Marge, direkter Kundenkontakt, Kontrolle über Beratung und Daten. Nachteile: eigener Vertriebsaufbau kostet, begrenzte Reichweite.",
                "Indirekter Vertrieb: über Handelsstufen – Distributor, Systemhaus/Fachhändler, Reseller, Marktplätze. Vorteile: schnelle Reichweite, Händler bringt Bestandskunden und Vor-Ort-Service. Nachteile: Marge wird geteilt, weniger Kontrolle über Beratung und Endkundenbeziehung.",
                "IT-typisch: Herstellerpartnerprogramme (zertifizierte Partner), Managed Services als Vertriebsmodell (wiederkehrende Erlöse statt Einmalverkauf).",
              ],
            },
            { type: "heading", value: "Übungsaufgabe" },
            {
              type: "text",
              value:
                "Dein Systemhaus will einen neuen Managed-Backup-Dienst vermarkten. a) Beurteile mit Begründung: Ist der Markt für IT-Dienstleistungen für kleine Unternehmen eher Käufer- oder Verkäufermarkt – und was folgt daraus für euer Angebot? b) Definiere eine passende Zielgruppe mit drei Segmentierungskriterien und formuliere eine Persona in einem Satz. c) Nenne je eine sinnvolle Primär- und Sekundärerhebung zur Bedarfsermittlung. d) Empfiehl begründet direkten oder indirekten Vertrieb für den Start.",
            },
            {
              type: "solution",
              value:
                "a) Überwiegend Käufermarkt: Viele Systemhäuser und Cloud-Anbieter konkurrieren um dieselben KMU – Kunden können vergleichen. Konsequenz: Differenzierung über nachweisbare Qualität (Restore-Tests!), Reaktionszeiten, regionale Nähe und klare Pakete statt reinem Preiskampf.\nb) Z. B. Kriterien: Unternehmensgröße 5–50 Mitarbeitende, Branche mit sensiblen Daten (Kanzleien, Praxen, Handwerk mit Auftragsdaten), kein eigenes IT-Personal. Persona: „Physiotherapiepraxis mit 12 Mitarbeitenden, Patientendaten, bisher USB-Platten-Backup, will Verantwortung abgeben.“\nc) Primär: strukturierte Befragung von 20 Bestandskunden zu heutiger Sicherung, Datenmengen und Zahlungsbereitschaft. Sekundär: Auswertung eigener Support-Tickets zu Datenverlusten sowie Branchenzahlen zu Ransomware-Schäden.\nd) Für den Start direkter Vertrieb an Bestandskunden: kein Margenverlust, vorhandenes Vertrauen, direktes Feedback zur Angebotsschärfung. Später ergänzend indirekt (z. B. über Steuerberater als Empfehlungsgeber), um Reichweite zu skalieren. (Andere Empfehlung ok, wenn sauber begründet.)",
            },
            {
              type: "links",
              value: [
                ["Wikipedia: Käufermarkt", "https://de.wikipedia.org/wiki/K%C3%A4ufermarkt"],
                [
                  "Wikipedia: Marktsegmentierung",
                  "https://de.wikipedia.org/wiki/Marktsegmentierung",
                ],
                ["Wikipedia: Vertrieb", "https://de.wikipedia.org/wiki/Vertrieb"],
              ],
            },
          ],
          quiz: [
            {
              id: "imp_wirt-mv-1_0",
              q: "Woran erkennst du einen Käufermarkt?",
              options: [
                "Die Nachfrage übersteigt das Angebot",
                "Das Angebot übersteigt die Nachfrage",
                "Es gibt nur einen Anbieter",
                "Der Staat legt die Preise fest",
              ],
              correct: 1,
              explain:
                "Käufer haben die Verhandlungsmacht. Angebotsüberhang = Käufer können wählen und drücken. Anbieter reagieren mit Service, Qualität und Differenzierung.",
            },
            {
              id: "imp_wirt-mv-1_1",
              q: "Was ist eine Primärerhebung?",
              options: [
                "Auswertung vorhandener Statistiken",
                "Eigene, neue Datenerhebung",
                "Die erste Erhebung des Jahres",
                "Daten vom Statistischen Bundesamt",
              ],
              correct: 1,
              explain:
                "Beispiel: eine Kundenbefragung. Primär = selbst und neu erhoben (Befragung, Beobachtung, Pilot). Sekundär = vorhandene Daten auswerten.",
            },
            {
              id: "imp_wirt-mv-1_2",
              q: "Welcher Nachteil gehört typischerweise zum indirekten Vertrieb?",
              options: [
                "Geringe Reichweite",
                "Die Marge wird mit den Handelsstufen geteilt",
                "Kein Zugang zu Händlern",
                "Er ist gesetzlich beschränkt",
              ],
              correct: 1,
              explain:
                "Distributor und Händler verdienen mit und besitzen die Endkundenbeziehung – dafür liefern sie Reichweite und Service.",
            },
            {
              id: "imp_wirt-mv-1_3",
              q: "Wozu dient eine Persona?",
              options: [
                "Als rechtlich bindende Kundendefinition, die im Vertrag mit jedem Kunden hinterlegt werden muss",
                "Als konkreter, fiktiver Beispielkunde, der die Zielgruppe für Angebot und Marketing greifbar macht",
                "Als Ersatz für die Datenschutzerklärung, da fiktive Personen keine echten Daten benötigen",
                "Als Organigramm, das die Hierarchie und Abteilungen des Kundenunternehmens abbildet",
              ],
              correct: 1,
              explain:
                "Eine gute Persona übersetzt abstrakte Segmentierungskriterien in einen anschaulichen Beispielkunden – Entscheidungen werden konkreter.",
            },
          ],
        },
      ],
    },
    {
      id: "wirt-fin",
      title: "Finanzierung & Kredite",
      lessons: [
        {
          id: "wirt-fi-1",
          title: "Darlehensarten, Leasing & Vergleich",
          content: [
            { type: "heading", value: "3 Darlehensarten" },
            {
              type: "text",
              value:
                "Fälligkeitsdarlehen (endfällig): Während der Laufzeit NUR Zinsen zahlen. Gesamter Betrag am Ende auf einmal zurück. Vorteil: Niedrige laufende Belastung. Nachteil: Hohe Schlusszahlung, teuerste Variante (Zinsen immer auf volle Summe). Gründe: Rückzahlung durch Lebensversicherung, Zinsen steuerlich absetzbar.",
            },
            {
              type: "text",
              value:
                "Ratendarlehen (Tilgungsdarlehen): Gleichbleibende Tilgung + sinkende Zinsen = sinkende Rate. Restschuld sinkt linear. Günstiger als Fälligkeitsdarlehen. Häufig außerhalb Immobilienfinanzierung.",
            },
            {
              type: "text",
              value:
                "Annuitätendarlehen: Gleichbleibende Rate (Annuität). Innerhalb der Rate: Tilgungsanteil steigt, Zinsanteil sinkt. Standard für Immobilien. Letzte Rate muss an Restschuld angepasst werden.",
            },
            { type: "heading", value: "Rechenbeispiel: 15.000 EUR, 7% Zinsen, 3 Jahre" },
            {
              type: "text",
              value:
                "Fälligkeitsdarlehen: 3x 1.050 EUR Zinsen + 15.000 EUR am Ende = 18.150 EUR Gesamtkosten (3.150 EUR Zinsen). Ratendarlehen: J1: 5.000+1.050=6.050, J2: 5.000+700=5.700, J3: 5.000+350=5.350 = 17.100 EUR (2.100 EUR Zinsen). Annuitätendarlehen (Annuität 5.000): J1: 3.950 Tilg.+1.050 Zins, J2: 4.226,50+773,50, J3: 6.823,50+477,65 = 17.301,15 EUR (2.301,15 EUR Zinsen).",
            },
            { type: "heading", value: "Leasing" },
            {
              type: "text",
              value:
                "Gebrauchsüberlassung auf Zeit gegen Entgelt. Leasingnehmer ist BESITZER, nicht Eigentümer! Übernimmt Wartung, Instandhaltung, Risiko. Ablauf: 1. Kunde wählt Objekt, 2. Leasingvertrag mit Leasinggesellschaft, 3. LG tritt in Bestellung ein, 4. Lieferung an Kunden, 5. Abnahmeerklärung, 6. LG bekommt Rechnung, 7. LG zahlt Lieferant, 8. Kunde zahlt monatliche Raten an LG. Grundlaufzeit: Mind. 40% der Nutzungsdauer. Leasing-Gesamtkosten: Raten x Monate + Restwert.",
            },
            { type: "heading", value: "Darlehen vs. Leasing" },
            {
              type: "list",
              value: [
                "Darlehen +: Eigentümer, Bilanzierung, freier Umgang mit Anlage",
                "Darlehen -: Kreditsicherheiten nötig, Abschreibungen, Darlehen in Bilanz",
                "Leasing +: Keine Sicherheiten, monatlich planbar, laufende Erneuerung",
                "Leasing -: Kein Eigentum, Restwert am Ende, Raten müssen erwirtschaftet werden, teurer als Darlehen",
              ],
            },
            {
              type: "note",
              value:
                "Klausuraufgabe (aus deinem Unterricht): Vergleiche alle 3 Darlehensarten + Leasing bei gleicher Summe. Berechne Gesamtkosten und begründe die Entscheidung. Ratendarlehen ist meist am günstigsten!",
            },
            { type: "heading", value: "Übungsaufgabe: Finanzierung vergleichen" },
            {
              type: "text",
              value:
                "Für einen Serverkauf (24.000 €) stehen zur Wahl: a) Bankdarlehen, 3 Jahre, 7 % p. a. auf die jeweilige Restschuld, Tilgung 8.000 €/Jahr am Jahresende. b) Leasing: 36 Raten à 780 €, danach Rückgabe. Berechne die Gesamtkosten beider Varianten und nenne zwei qualitative Unterschiede, die neben dem Preis entscheiden.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: a) Zinsen: Jahr 1: 24.000 × 7 % = 1.680 · Jahr 2: 16.000 × 7 % = 1.120 · Jahr 3: 8.000 × 7 % = 560 → Zinsen gesamt 3.360 €; Gesamtaufwand 27.360 €, der Server GEHÖRT danach dem Betrieb (Restwert!). b) Leasing: 36 × 780 = 28.080 €, KEIN Eigentum am Ende. Rechnerisch liegt das Darlehen vorn (zusätzlich Restwert des Servers). Qualitativ: Leasing schont die Kreditlinie und bilanziert schlanker (Raten = Aufwand), enthält oft Austausch-/Serviceoptionen; Darlehen bindet Sicherheiten, gibt aber volle Verfügungsgewalt (Umbau, Weiterverkauf). Merksatz: Erst Gesamtkosten inkl. Eigentumsfrage rechnen, dann Liquiditäts- und Flexibilitätsargumente abwägen.",
            },
          ],
          quiz: [
            {
              id: "imp_wirt-fi-1_0",
              q: "Fälligkeitsdarlehen: Wann wird getilgt?",
              options: ["Gar nicht", "Jährlich", "Am Ende der Laufzeit", "Monatlich"],
              correct: 2,
              explain: "Gesamter Betrag am Ende auf einmal.",
            },
            {
              id: "imp_wirt-fi-1_1",
              q: "Annuitätendarlehen: Was bleibt gleich?",
              options: ["Die Rate (Annuität)", "Tilgung", "Zinsen", "Die Restschuld"],
              correct: 0,
              explain: "Die Rate bleibt gleich, Tilgung steigt, Zinsen sinken.",
            },
            {
              id: "imp_wirt-fi-1_2",
              q: "Welche Darlehensart hat die niedrigsten Gesamtkosten?",
              options: [
                "Ratendarlehen",
                "Fälligkeitsdarlehen",
                "Alle gleich",
                "Annuitätendarlehen",
              ],
              correct: 0,
              explain: "Ratendarlehen: Durch sofortige Tilgung sinkt die Zinslast am schnellsten.",
            },
            {
              id: "imp_wirt-fi-1_3",
              q: "Leasingnehmer ist?",
              options: ["Besitzer (nicht Eigentümer)", "Eigentümer", "Hersteller", "Vermieter"],
              correct: 0,
              explain:
                "Besitzer, aber NICHT Eigentümer. Eigentümer bleibt die Leasinggesellschaft.",
            },
            {
              id: "imp_wirt-fi-1_4",
              q: "Leasing: Wer zahlt Wartung?",
              options: ["Leasingnehmer", "Hersteller", "Niemand", "Leasinggeber"],
              correct: 0,
              explain: "Leasingnehmer übernimmt Wartung, Instandhaltung und Risiko.",
            },
            {
              id: "imp_wirt-fi-1_5",
              q: "Leasing: Grundlaufzeit mind.?",
              options: ["20%", "40% der Nutzungsdauer", "80%", "10%"],
              correct: 1,
              explain: "Steuerrechtlich: Mind. 40% der regulären Nutzungsdauer.",
            },
            {
              id: "imp_wirt-fi-1_6",
              q: "Ratendarlehen: Raten sind?",
              options: ["Gleichbleibend", "Fallend (sinkende Zinsen)", "Steigend", "Zufällig"],
              correct: 1,
              explain: "Gleiche Tilgung + sinkende Zinsen = fallende Gesamtrate.",
            },
            {
              id: "imp_wirt-fi-1_7",
              q: "Effektivzins von Skonto: 2 % bei Zahlung in 10 Tagen, Zahlungsziel 30 Tage?",
              options: ["12 %", "2 %", "Ca. 36 % p. a.", "72 % p. a."],
              correct: 2,
              explain:
                "Der Zinsvorteil gilt für 20 Tage (30 − 10). Hochgerechnet: 2 % × 360/20 = 36 % p. a. – deshalb lohnt Skontoziehen fast immer, notfalls per Kontokorrentkredit.",
            },
            {
              id: "imp_wirt-fi-1_8",
              q: "Kontokorrentkredit?",
              options: [
                "Ein Darlehen, das ausschließlich Privatpersonen erhalten",
                "Eine grundpfandrechtlich gesicherte Immobilienhypothek",
                "Ein langfristiger Investitionskredit mit fester Laufzeit",
                "Kurzfristiger Überziehungsrahmen auf Geschäftskonto",
              ],
              correct: 3,
              explain: "Kurzfristige Liquidität, hohe Zinsen.",
            },
            {
              id: "imp_wirt-fi-1_9",
              q: "Annuität bleibt gleich, aber intern?",
              options: [
                "Tilgungsanteil steigt, Zinsanteil sinkt",
                "Tilgung sinkt",
                "Alles gleich",
                "Zins steigt",
              ],
              correct: 0,
              explain: "Gleiche Rate, aber Tilgung wächst und Zins schrumpft.",
            },
            {
              id: "imp_wirt-fi-1_10",
              q: "Goldene Finanzierungsregel?",
              options: [
                "Anlagevermögen langfristig, Umlaufvermögen kurzfristig",
                "Sämtliche Investitionen vollständig über Fremdkapital finanzieren",
                "Grundsätzlich alles ausschließlich mit Eigenkapital finanzieren",
                "Anlage- und Umlaufvermögen stets kurzfristig finanzieren",
              ],
              correct: 0,
              explain: "Langfristig gebundenes Vermögen = langfristig finanziert.",
            },
            {
              id: "imp_wirt-fi-1_11",
              q: "Dispo-Zinsen liegen bei ca.?",
              options: ["5-6%", "1-2%", "0%", "10%+"],
              correct: 3,
              explain: "Dispo: ca. 10% Zinsen, darüber noch teurer.",
            },
          ],
        },
        {
          id: "wiso-zins-1",
          title: "Zinsrechnung & Zinseszins",
          content: [
            { type: "heading", value: "Einfache Zinsen: die Jahreszins-Formel" },
            {
              type: "text",
              value:
                "Zinsen = Kapital × Zinssatz × Zeit: Z = K × p/100 × t (t in Jahren). Für Tage rechnet die kaufmännische Praxis oft mit dem Bankjahr: 360 Zinstagen und 30-Tage-Monaten (deutsche Methode 30/360): Z = K × p/100 × Tage/360. Beispiel Lieferantenkredit: 10.000 € für 60 Tage zu 12 % p. a. → Z = 10.000 × 0,12 × 60/360 = 200 €. Genau diese Rechnung steckt hinter der Skonto-Frage: Skonto ausnutzen lohnt fast immer, weil der effektive Jahreszins des Lieferantenkredits enorm ist (Skontosatz ÷ Zieldifferenz-Tage × 360).",
            },
            { type: "heading", value: "Zinseszins: Wachstum mit Exponent" },
            {
              type: "text",
              value:
                "Bleiben die Zinsen auf dem Konto, verzinsen sie sich mit: Endkapital Kn = K0 × (1 + p/100)ⁿ nach n Jahren – der Zinsfaktor q = 1 + p/100 wird n-mal multipliziert. Beispiel: 5.000 € zu 4 % über 10 Jahre: 5.000 × 1,04¹⁰ ≈ 5.000 × 1,4802 ≈ 7.401 €. Umkehrungen: K0 = Kn ÷ qⁿ (Abzinsung/Barwert – was ist eine künftige Zahlung heute wert?), n = log(Kn/K0) ÷ log(q) (Laufzeit). Faustformel 72er-Regel: Verdopplungszeit ≈ 72 ÷ Zinssatz in % (bei 6 % also ~12 Jahre) – gut zum Überschlagen und Plausibilisieren.",
            },
            { type: "heading", value: "Dieselbe Mathematik überall in der IT" },
            {
              type: "text",
              value:
                "Exponentielles Wachstum ist ein IT-Grundmuster: Datenwachstum („Storage wächst 30 % pro Jahr – wann ist das SAN voll?“ → gleiche Formel!), Zinseszins der Rechenleistung, Abzinsung bei Investitionsvergleichen (Kapitalwert), und umgekehrt die prozentuale Änderung: Änderungsfaktor = neu ÷ alt; mehrere Änderungen MULTIPLIZIEREN sich (erst +20 %, dann −20 % ergibt 0,8 × 1,2 = 0,96 → 4 % Verlust, NICHT null!). Diese Multiplikations-Falle ist ein Klassenarbeits-Dauerbrenner.",
            },
            {
              type: "note",
              value:
                "Merkhilfen: EINFACH = K·p·t/100 (linear) · ZINSESZINS = K·qⁿ (exponentiell) · 72er-Regel für die Verdopplung · Prozentänderungen multiplizieren sich (Faktoren!), sie addieren sich nicht.",
            },
            { type: "heading", value: "Übungsaufgabe: Kredit vs. Skonto & Storage" },
            {
              type: "text",
              value:
                "a) 20.000 € Bankkredit für 90 Tage zu 9 % p. a. (360-Tage-Jahr): Zinsen? b) 8.000 € zu 3 % mit Zinseszins über 5 Jahre: Endkapital? c) Euer Storage (12 TB belegt) wächst 25 % pro Jahr – reicht das 30-TB-SAN noch 4 Jahre?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Z = 20.000 × 0,09 × 90/360 = 450 €.\nb) K5 = 8.000 × 1,03⁵ = 8.000 × 1,15927 ≈ 9.274,19 €.\nc) 12 × 1,25⁴ = 12 × 2,4414 ≈ 29,3 TB → ja, es reicht knapp (im 5. Jahr mit ~36,6 TB nicht mehr) – gleiche Zinseszins-Formel, anderes Gewand.",
            },
          ],
          quiz: [
            {
              id: "imp_wiso-zins-1_0",
              q: "Formel für einfache Jahreszinsen?",
              options: ["Z = K × p/100 × t", "Z = K × qⁿ", "Z = K ÷ p × t", "Z = p × t ÷ K"],
              correct: 0,
              explain: "Kapital mal Zinssatz mal Zeit – linear, ohne Wiederanlage.",
            },
            {
              id: "imp_wiso-zins-1_1",
              q: "Das deutsche Bankjahr rechnet mit …",
              options: ["365 Tagen", "366 Tagen", "360 Tagen", "300 Tagen"],
              correct: 2,
              explain: "Methode 30/360: zwölf 30-Tage-Monate = 360 Zinstage.",
            },
            {
              id: "imp_wiso-zins-1_2",
              q: "Zinseszins-Endkapital nach n Jahren?",
              options: ["K0 + n·Z", "K0 × n ÷ q", "K0 × p × n", "K0 × (1 + p/100)ⁿ"],
              correct: 3,
              explain:
                "Der Zinsfaktor q = 1 + p/100 wird n-mal multipliziert – exponentielles Wachstum.",
            },
            {
              id: "imp_wiso-zins-1_3",
              q: "72er-Regel: Verdopplung bei 8 % dauert ca. …",
              options: ["6 Jahre", "8 Jahre", "12 Jahre", "9 Jahre"],
              correct: 3,
              explain: "72 ÷ 8 = 9 Jahre – Faustformel zum Überschlagen.",
            },
            {
              id: "imp_wiso-zins-1_4",
              q: "Erst +20 %, dann −20 % ergibt insgesamt …",
              options: ["±0 %", "−2 %", "+4 %", "−4 %"],
              correct: 3,
              explain: "1,2 × 0,8 = 0,96 → 4 % weniger. Prozentänderungen multiplizieren sich!",
            },
            {
              id: "imp_wiso-zins-1_5",
              q: "Abzinsung (Barwert) berechnet …",
              options: [
                "künftigen Wert heutiger Zahlung",
                "die Inflation",
                "nur Skonto",
                "heutigen Wert künftiger Zahlung",
              ],
              correct: 3,
              explain: "K0 = Kn ÷ qⁿ – was ist eine spätere Zahlung heute wert?",
            },
            {
              id: "imp_wiso-zins-1_6",
              q: "10.000 € für 60 Tage zu 12 % p. a. (360 Tage) kosten …",
              options: ["1.200 €", "600 €", "200 €", "120 €"],
              correct: 2,
              explain: "10.000 × 0,12 × 60/360 = 200 €.",
            },
            {
              id: "imp_wiso-zins-1_7",
              q: "„Storage wächst 30 %/Jahr“ folgt mathematisch …",
              options: [
                "der Zinseszins-Formel",
                "der AfA-Formel",
                "dem Dreisatz allein",
                "der Gauß-Summe",
              ],
              correct: 0,
              explain: "Bestand × 1,3ⁿ – exponentielles Wachstum wie beim Zinseszins.",
            },
            {
              id: "imp_wiso-zins-1_8",
              q: "Warum lohnt Skonto trotz Kontokorrentkredit meist?",
              options: [
                "Skonto ist steuerfrei",
                "Der Lieferantenkredit hat einen extrem hohen Effektivzins",
                "Banken verbieten Skonto",
                "Skonto verlängert das Zahlungsziel",
              ],
              correct: 1,
              explain:
                "2 % für ~20 Tage entsprechen ~36 % p. a. – teurer als fast jeder Bankkredit.",
            },
            {
              id: "imp_wiso-zins-1_9",
              q: "Laufzeit n aus K0, Kn, q bestimmst du mit …",
              options: ["Wurzelziehen", "Division durch p", "dem Logarithmus", "der 50er-Regel"],
              correct: 2,
              explain: "n = log(Kn/K0) ÷ log(q) – der Logarithmus holt den Exponenten herunter.",
            },
          ],
        },
      ],
    },
    {
      id: "wirt-bp",
      title: "Businessplan & Standort",
      lessons: [
        {
          id: "wirt-bp-1",
          title: "Businessplan & Standortfaktoren",
          content: [
            { type: "heading", value: "Bestandteile des Businessplans" },
            {
              type: "text",
              value:
                "1. Gründerperson (Qualifikation, Erfahrung), 2. Geschäftsidee (USP, Kundennutzen), 3. Produkte/Leistungen, 4. Markt & Wettbewerb (Zielgruppe, Konkurrenz), 5. Marketing (Preis, Werbung, Vertrieb), 6. Standortwahl (Nutzwertanalyse), 7. Rechtsform, 8. Vertragsgestaltung, 9. Chancen & Risiken (SWOT-Analyse: Strengths = interne Stärken, Weaknesses = interne Schwächen, Opportunities = externe Chancen, Threats = externe Risiken/Bedrohungen), 10. Finanzplan (Umsatz, Kosten, Kapitalbedarf, Liquidität).",
            },
            { type: "heading", value: "Standortfaktoren" },
            {
              type: "text",
              value:
                "Harte Faktoren (messbar): Verkehrsanbindung, Mietkosten, Gewerbesteuer, Subventionen, Energieversorgung, Kundennähe, Lieferantennähe. Weiche Faktoren (subjektiv): Schulen/Kitas, Freizeitangebot, Image, Internetversorgung, Lebensqualität.",
            },
            { type: "heading", value: "OHG Gewinnverteilung (§ 709 Abs. 3 BGB)" },
            {
              type: "text",
              value:
                "Gesetzliche Regelung (ohne Vertrag, seit dem MoPeG 2024): Gewinn und Verlust werden nach den Beteiligungsverhältnissen verteilt, im Zweifel nach dem Verhältnis der vereinbarten Einlagen (§ 709 Abs. 3 BGB). Beispiel: A 30.000 EUR, B 50.000 EUR (Verhältnis 3:5), Gewinn 33.200 EUR. A: 33.200 × 3/8 = 12.450 EUR, B: 33.200 × 5/8 = 20.750 EUR. (Bis 2023 galt § 121 HGB a. F.: 4 % Verzinsung der Einlage + Rest nach Köpfen – taucht in älteren Aufgaben noch auf.)",
            },
            { type: "heading", value: "Businessplan und Standortwahl: die Gründungs-Werkzeuge" },
            {
              type: "text",
              value:
                "Ein Businessplan zwingt zum Durchdenken und überzeugt Kapitalgeber. Kernkapitel: Geschäftsidee und Kundennutzen (Was löse ich für wen?), Gründerprofil, Markt- und Wettbewerbsanalyse, Marketingkonzept (4 P), Rechtsform, Organisation/Personal – und der Finanzteil: Kapitalbedarfsplan (Investitionen + Anlaufkosten + private Lebenshaltung!), Finanzierungsplan (Eigen-/Fremdkapital, Fördermittel), Umsatz- und Rentabilitätsvorschau (3 Jahre), Liquiditätsplan (monatlich! Zahlungsfähigkeit ist wichtiger als Gewinn). Standortfaktoren wägst du in harte (Miete, Verkehrsanbindung, Fördergebiete, Gewerbesteuerhebesatz, Breitband!) und weiche (Fachkräfteverfügbarkeit, Image, Lebensqualität) ab – für ein IT-Systemhaus zählen Kundennähe im Gewerbegebiet, Glasfaseranbindung und Parkplätze meist mehr als Laufkundschaft.",
            },
            { type: "heading", value: "Übungsaufgabe: Standortentscheidung" },
            {
              type: "text",
              value:
                "Ein zweiköpfiges IT-Systemhaus (Vor-Ort-Service für Arztpraxen) wählt zwischen: A) Innenstadtbüro (1.400 €/Monat, Laufkundschaft, schlechte Parkplätze), B) Gewerbepark am Stadtrand (700 €/Monat, Glasfaser, Parkplätze, 15 min zu den meisten Kunden). Entscheide mit drei gewichteten Argumenten.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: B. (1) Kostenvorteil 8.400 €/Jahr – bei Gründung ist die Fixkostenquote überlebenskritisch (Liquidität!). (2) Kundenprofil: Arztpraxen kommen nicht vorbei – Laufkundschaft ist für B2B-Vor-Ort-Service wertlos, kurze Anfahrt und Parkplätze für Servicefahrzeuge zählen dagegen täglich. (3) Glasfaser ist für Fernwartung ein harter Produktionsfaktor. Innenstadt-Argument (Sichtbarkeit) lässt sich günstiger über Online-Präsenz und Empfehlungen ersetzen. Struktur der Antwort: Kriterien benennen → am Geschäftsmodell spiegeln → Entscheidung.",
            },
          ],
          quiz: [
            {
              id: "imp_wirt-bp-1_0",
              q: "USP steht für?",
              options: [
                "Unique Selling Proposition",
                "User Support Plan",
                "Unified Security Policy",
                "Universal System Protocol",
              ],
              correct: 0,
              explain: "Unique Selling Proposition = Alleinstellungsmerkmal.",
            },
            {
              id: "imp_wirt-bp-1_1",
              q: "OHG: Wonach wird der Gewinn seit dem MoPeG (2024) vorrangig verteilt?",
              options: [
                "Nach den Beteiligungsverhältnissen (Kapitalanteilen)",
                "Nach Arbeitszeit",
                "Nach Köpfen – das gilt nur noch im Zweifel",
                "Nach Alter",
              ],
              correct: 0,
              explain:
                "§ 709 Abs. 3 BGB i. V. m. § 105 HGB: vereinbarte Beteiligungsverhältnisse, hilfsweise Beitragswerte, erst im Zweifel gleiche Teile. Die alte 4-%-Regel des § 121 HGB galt nur bis Ende 2023.",
            },
            {
              id: "imp_wirt-bp-1_2",
              q: "USP = ?",
              options: [
                "User System Process",
                "Unique Selling Proposition",
                "Universal System Protocol",
                "Unified Standard Platform",
              ],
              correct: 1,
              explain:
                "Alleinstellungsmerkmal. Unique Selling Proposition = Was unterscheidet uns von der Konkurrenz?",
            },
            {
              id: "imp_wirt-bp-1_3",
              q: "Harte vs. weiche Standortfaktoren?",
              options: [
                "Hart = messbar (Miete, Verkehr), Weich = subjektiv (Lebensqualität)",
                "Beide Begriffe bezeichnen dasselbe und werden synonym verwendet",
                "Harte Faktoren sind definitionsgemäß immer wichtiger als weiche",
                "Weiche Faktoren verursachen höhere Kosten als harte Faktoren",
              ],
              correct: 0,
              explain: "Hart: Infrastruktur, Steuern, Miete. Weich: Image, Bildung, Freizeit.",
            },
            {
              id: "imp_wirt-bp-1_4",
              q: "Executive Summary?",
              options: [
                "Kurzzusammenfassung des Businessplans (1-2 Seiten)",
                "Tabellarische Auflistung aller Finanzkennzahlen",
                "Die Eröffnungsbilanz des geplanten Unternehmens",
                "Ausführlicher Detailbericht aller Geschäftsbereiche",
              ],
              correct: 0,
              explain: "Zusammenfassung für Investoren/Banken: Geschäftsidee, Markt, Finanzen.",
            },
            {
              id: "imp_wirt-bp-1_5",
              q: "SWOT: O steht für?",
              options: ["Opportunities (Chancen)", "Output", "Operations", "Organization"],
              correct: 0,
              explain: "Strengths, Weaknesses, Opportunities, Threats.",
            },
            {
              id: "imp_wirt-bp-1_6",
              q: "SWOT: T = ?",
              options: ["Threats (Risiken/Bedrohungen)", "Technology", "Testing", "Trends"],
              correct: 0,
              explain: "Threats = externe Bedrohungen und Risiken.",
            },
            {
              id: "imp_wirt-bp-1_7",
              q: "NWA für Standort?",
              options: [
                "Nur Preis",
                "Harte + weiche Faktoren gewichtet bewerten",
                "Nur Verkehrsanbindung",
                "Nur Fläche",
              ],
              correct: 1,
              explain: "NWA: Alle Faktoren gewichten und vergleichen.",
            },
            {
              id: "imp_wirt-bp-1_8",
              q: "Break-Even im Businessplan?",
              options: [
                "Nur bei Verlust",
                "Nur für Banken",
                "Ab wann decken Einnahmen die Kosten?",
                "Optional",
              ],
              correct: 2,
              explain: "Break-Even-Analyse: Ab welchem Umsatz wird Gewinn gemacht?",
            },
            {
              id: "imp_wirt-bp-1_9",
              q: "Marktanalyse enthält?",
              options: [
                "Nur Preis",
                "Nur Konkurrenz",
                "Zielgruppe, Konkurrenz, Marktgröße, Trends",
                "Nur Standort",
              ],
              correct: 2,
              explain: "Markt analysieren: Wer kauft? Wer ist Konkurrenz? Wie groß ist der Markt?",
            },
          ],
        },
      ],
    },
    {
      id: "wirt-hk",
      title: "Handelskalkulation & Abschreibung",
      lessons: [
        {
          id: "wirt-hk-1",
          title: "Handelskalkulation vorwärts (Verkaufspreis)",
          content: [
            { type: "heading", value: "Kalkulationsschema vorwärts" },
            {
              type: "text",
              value:
                "Einstandspreis (Bezugspreis) + Handlungskosten (Lager, Personal, Verwaltung, Vertrieb) = Selbstkosten + Gewinnzuschlag = Barverkaufspreis + Kundenskonto + Vertreterprovision = Zielverkaufspreis + Kundenrabatt = Listenverkaufspreis (netto) + Umsatzsteuer (19%) = Bruttoverkaufspreis.",
            },
            { type: "heading", value: "Rechenbeispiel" },
            {
              type: "text",
              value:
                "Einstandspreis: 470,15 EUR. Handlungskosten 25%: +117,54 = 587,69 EUR Selbstkosten. Gewinn 10%: +58,77 = 646,46 EUR Barverkaufspreis. Skonto 3% (Achtung: 646,46 = 97%, also 646,46/97*100): = 666,45 EUR Zielverkaufspreis. Rabatt 5% (666,45 = 95%, also 666,45/95*100): = 701,53 EUR Listenverkaufspreis netto. + 19% USt: = 834,82 EUR Bruttoverkaufspreis.",
            },
            { type: "heading", value: "Wichtige Rechenregel" },
            {
              type: "text",
              value:
                "Skonto und Rabatt werden NICHT einfach aufgeschlagen! Bei Skonto 3%: Der Barverkaufspreis ist 97% des Zielverkaufspreises. Also: ZVP = BVP / 0,97. Bei Rabatt 5%: ZVP = 95% des LVP. Also: LVP = ZVP / 0,95. Vom Hundert rechnen (im Hundert), NICHT auf Hundert!",
            },
            {
              type: "note",
              value:
                "Häufigster Klausurfehler: Skonto/Rabatt einfach draufrechnen statt 'im Hundert' zu rechnen. 3% Skonto aufschlagen ist FALSCH. Richtig: Barverkaufspreis / 0,97!",
            },
            { type: "heading", value: "Rückwärts- und Differenzkalkulation" },
            {
              type: "text",
              value:
                "Vorwärtskalkulation: vom Einkauf zum Verkaufspreis. Rückwärtskalkulation: vom marktüblichen Verkaufspreis zurück zum maximalen Einkaufspreis. Differenzkalkulation: Einkauf und Verkauf gegeben, gesucht ist der Gewinn.",
            },
            {
              type: "code",
              value:
                "BEISPIEL RÜCKWÄRTSKALKULATION:\nListenverkaufspreis (netto):       100,00€\n- 10% Rabatt (auf 100):             10,00€\n= Zielverkaufspreis:                90,00€\n- 2% Skonto (auf 90):                1,80€\n= Barverkaufspreis:                 88,20€\nWICHTIG: Prozente sequenziell anwenden, NICHT beide\nauf den Ausgangswert! Rabatt zuerst (auf Listenpreis),\ndann Skonto (auf den bereits reduzierten Preis).\n\nBEISPIEL DIFFERENZKALKULATION:\nBezugspreis (Einkauf):              60,00€\nNetto-Verkaufspreis (Markt):        85,00€\nDifferenz (Handelsspanne):          25,00€\n→ Aus dieser Spanne müssen Handlungskosten\n  gedeckt werden, Rest ist Gewinn.",
            },
            {
              type: "heading",
              value: "Übungsaufgabe: Vorwärtskalkulation bis zum Bruttoverkaufspreis",
            },
            {
              type: "text",
              value:
                "Ein Händler kalkuliert eine Dockingstation: Listeneinkaufspreis 400 €, Liefererrabatt 10 %, Lieferskonto 2 %, Bezugskosten 15 €. Handlungskostenzuschlag 22 %, Gewinnzuschlag 12 %, Kundenskonto 3 %, Kundenrabatt 5 %, USt 19 %. Berechne Bezugspreis, Selbstkosten, Nettoverkaufspreis (Listenverkaufspreis) und Bruttoverkaufspreis – Rechenweg mit Zwischenwerten.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: 400 − 10 % = 360,00 (Zieleinkaufspreis) → − 2 % = 352,80 (Bareinkaufspreis) → + 15 = 367,80 € BEZUGSPREIS. + 22 % Handlungskosten = 448,72 € SELBSTKOSTEN. + 12 % Gewinn = 502,57 € Barverkaufspreis. Kundenskonto „im Hundert“: 502,57 ÷ 0,97 = 518,11 € Zielverkaufspreis. Kundenrabatt: 518,11 ÷ 0,95 = 545,38 € NETTOVERKAUFSPREIS. + 19 % USt = 648,99 € BRUTTO. Die zwei klassischen Fehler: Skonto/Rabatt des Kunden werden AUF HUNDERT gerechnet (dividieren!, nicht multiplizieren – der Abzug erfolgt später vom höheren Preis) und Zwischenwerte gerundet weiterverwendet (erst am Ende kaufmännisch runden bzw. mit vollen Werten weiterrechnen).",
            },
          ],
          quiz: [
            {
              id: "imp_wirt-hk-1_0",
              q: "Handlungskosten sind?",
              options: [
                "Lager+Personal+Verwaltung+Vertrieb",
                "Nur Versandkosten",
                "Materialkosten",
                "Nur Personalkosten",
              ],
              correct: 0,
              explain: "Alle Kosten für Lagerung, Personal, Verwaltung und Vertrieb.",
            },
            {
              id: "imp_wirt-hk-1_1",
              q: "BVP 500 EUR, 2% Skonto: Zielverkaufspreis?",
              options: ["510 EUR", "500/0,98 = 510,20 EUR", "490 EUR (500 × 0,98)", "520 EUR"],
              correct: 1,
              explain:
                "BVP = 98 % des ZVP → ZVP = 500/0,98 = 510,20 EUR. Wer multipliziert statt dividiert, landet beim falschen 490er-Wert.",
            },
            {
              id: "imp_wirt-hk-1_2",
              q: "ZVP 700 EUR, 10% Rabatt: Listenverkaufspreis?",
              options: ["630 EUR (700 × 0,90)", "770 EUR", "778,88 EUR", "700/0,90 = 777,78 EUR"],
              correct: 3,
              explain:
                "ZVP = 90 % des LVP → LVP = 700/0,90 = 777,78 EUR. 770 (nur +10 %) und 630 (multipliziert) sind die klassischen Fehlwege.",
            },
            {
              id: "imp_wirt-hk-1_3",
              q: "Reihenfolge nach Selbstkosten?",
              options: [
                "Rabatt,Skonto,Gewinn",
                "Gewinn,Skonto,Rabatt",
                "Gewinn,Rabatt,Skonto",
                "Skonto,Gewinn,Rabatt",
              ],
              correct: 1,
              explain: "Selbstkosten + Gewinn = BVP + Skonto = ZVP + Rabatt = LVP.",
            },
            {
              id: "imp_wirt-hk-1_4",
              q: "'Im Hundert rechnen' bedeutet?",
              options: [
                "Prozent abziehen",
                "Immer mal 100",
                "Zielwert ist 100%, Ausgangswert ist 100%-x%",
                "Prozent aufschlagen",
              ],
              correct: 2,
              explain:
                "Der Barverkaufspreis IST bereits der reduzierte Wert (z.B. 97% bei 3% Skonto).",
            },
            {
              id: "imp_wirt-hk-1_5",
              q: "LVP netto 800 EUR + 19% USt = brutto?",
              options: ["948 EUR", "800 × 1,19 = 952 EUR", "960 EUR", "819 EUR"],
              correct: 1,
              explain: "800 × 1,19 = 952 EUR brutto.",
            },
            {
              id: "imp_wirt-hk-1_6",
              q: "Selbstkosten = ?",
              options: [
                "Einstandspreis + Handlungskosten",
                "Einstandspreis + Gewinn",
                "Listenpreis - Rabatt",
                "Barverkaufspreis",
              ],
              correct: 0,
              explain: "Einstandspreis + Handlungskosten = Selbstkosten.",
            },
            {
              id: "imp_wirt-hk-1_7",
              q: "Einstandspreis 200 EUR, 30% Handlungskosten, 15% Gewinn: BVP?",
              options: ["345 EUR", "290 EUR", "260 EUR", "299 EUR"],
              correct: 3,
              explain: "200+60(30%)=260 Selbstkosten. 260+39(15%)=299 EUR BVP.",
            },
            {
              id: "imp_wirt-hk-1_8",
              q: "BVP = ZVP bei Skonto?",
              options: [
                "BVP ist immer größer",
                "0%",
                "Nur ohne Skonto sind sie gleich",
                "BVP ist immer kleiner als ZVP",
              ],
              correct: 2,
              explain: "Nur wenn kein Skonto gewährt wird, sind BVP und ZVP identisch.",
            },
            {
              id: "imp_wirt-hk-1_9",
              q: "Was kommt ZULETZT in der Kalkulation?",
              options: ["Rabatt", "Umsatzsteuer", "Gewinn", "Skonto"],
              correct: 1,
              explain: "USt wird ganz am Ende auf den Nettopreis aufgeschlagen.",
            },
          ],
        },
        {
          id: "wirt-hk-2",
          title: "Abschreibung (AfA)",
          content: [
            { type: "heading", value: "Was ist Abschreibung?" },
            {
              type: "text",
              value:
                "Wertminderung von Anlagegütern über die Nutzungsdauer verteilen. Anschaffungskosten werden nicht sofort als Aufwand verbucht, sondern jährlich anteilig. AfA = Absetzung für Abnutzung. Nur für abnutzbare Anlagegüter (PCs, Server, Fahrzeuge). Grundstücke werden NICHT abgeschrieben.",
            },
            { type: "heading", value: "Lineare Abschreibung (Standard)" },
            {
              type: "text",
              value:
                "Jedes Jahr gleicher Betrag. Formel: Jährliche AfA = Anschaffungskosten / Nutzungsdauer. Beispiel: Server 14.000 EUR, 7 Jahre Nutzung. AfA pro Jahr: 14.000/7 = 2.000 EUR. Nach 7 Jahren: Buchwert 0 EUR (oder Restwert). AfA-Tabelle des BMF legt Nutzungsdauer fest: PCs/Notebooks 3 Jahre, Server 7 Jahre (AfA-Tabelle „Großrechner“; PC-nahe Hardware 3 Jahre), Drucker 4 Jahre, Netzwerkinfrastruktur 7 Jahre, Software 3 Jahre. Seit dem BMF-Schreiben 2021/22 dürfen Computer-Hardware und Software alternativ in 1 Jahr abgeschrieben werden.",
            },
            { type: "heading", value: "Degressive Abschreibung" },
            {
              type: "text",
              value:
                "Jedes Jahr fester Prozentsatz vom RESTBUCHWERT (nicht vom Anschaffungswert!). Am Anfang hohe AfA, später niedrig. Beispiel: 10.000 EUR, 25% degressiv. J1: 10.000*0,25=2.500 (Buch: 7.500). J2: 7.500*0,25=1.875 (Buch: 5.625). J3: 5.625*0,25=1.406 (Buch: 4.219). Wechsel zur linearen AfA, wenn linear höher wird.",
            },
            {
              type: "note",
              value:
                "Lineare AfA ist Standard und prüfungsrelevant. Degressive kommt seltener, aber das Prinzip muss verstanden sein. Nutzungsdauern aus AfA-Tabelle kennen (PC=3J, Server=7J; PC-nahe Hardware 3J, seit BMF 2021/22 alternativ 1 Jahr zulässig)!",
            },
            { type: "heading", value: "Übungsaufgabe: Lineare vs. degressive AfA" },
            {
              type: "text",
              value:
                "Server: Anschaffung 9.000€, Nutzungsdauer laut Aufgabe 3 Jahre. a) Lineare AfA pro Jahr? b) Degressive AfA mit 30% (Restbuchwert-Methode) für die ersten 2 Jahre?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) LINEAR:\n   9.000€ / 3 Jahre = 3.000€ pro Jahr\n   Restwerte: 6.000 → 3.000 → 0\n\nb) DEGRESSIV (30% vom Restbuchwert):\n   Jahr 1: 9.000 × 30% = 2.700€  RBW 6.300€\n   Jahr 2: 6.300 × 30% = 1.890€  RBW 4.410€\n\n   Degressiv: höhere Abschreibung am Anfang,\n   sinkt über die Jahre. Linear: gleichbleibend.\n   (Steuerlich ist degressiv nicht immer zulässig\n   - abhängig vom jeweiligen Steuerrecht.)",
            },
            { type: "heading", value: "AfA vertieft: Methoden, monatsgenau, GWG" },
            {
              type: "text",
              value:
                "Abschreibung verteilt Anschaffungskosten auf die Nutzungsdauer (AfA-Tabellen des BMF: z. B. PC/Notebook 3 Jahre, Server 7 – seit 2021 dürfen Computer-Hardware und Software sogar auf 1 Jahr abgeschrieben werden; im Zweifel die in der Aufgabe genannte Nutzungsdauer verwenden!). LINEAR: gleicher Betrag pro Jahr = Anschaffungskosten ÷ Nutzungsdauer. Unterjähriger Kauf: monatsgenau ab Anschaffungsmonat (Kauf 1.10. → 3/12 im ersten Jahr). Geringwertige Wirtschaftsgüter (GWG): bis 250 € Betriebsausgabe (Vereinfachungsgrenzen je Aufgabe), 250–800 € netto Sofortabschreibung möglich, alternativ Sammelposten. Der Restbuchwert sinkt bis auf 0 € bzw. den Erinnerungswert von 1 €, solange das Gut genutzt wird. Wichtig fürs Verständnis: AfA ist AUFWAND, aber keine AUSZAHLUNG – das Geld floss beim Kauf; deshalb taucht sie in der Kostenrechnung (kalkulatorisch) und im Gewinn auf, nicht in der Liquiditätsplanung des laufenden Jahres.",
            },
            { type: "heading", value: "Übungsaufgabe: AfA-Plan mit unterjährigem Kauf" },
            {
              type: "text",
              value:
                "Ein Server (netto 8.400 €, Nutzungsdauer 7 Jahre – die Aufgabe schreibt sie vor) wird am 1. September 2026 angeschafft. Erstelle den AfA-Plan der ersten drei Jahre mit Restbuchwerten und erkläre, in welchem Jahr die letzte Abschreibung erfolgt.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: Jahres-AfA = 8.400 ÷ 7 = 1.200 €. 2026: 4/12 (Sep–Dez) = 400 € → Restbuchwert 8.000 €. 2027: 1.200 € → 6.800 €. 2028: 1.200 € → 5.600 €. Es folgt jeweils 1.200 € bis 2032; 2033 wird der Rest von 800 € (8/12) abgeschrieben – durch den unterjährigen Start verschiebt sich das Ende in ein achtes Kalenderjahr. Punktebringer: monatsgenauer Start, sauberer Plan, Schlussjahr-Logik erklärt.",
            },
          ],
          quiz: [
            {
              id: "imp_wirt-hk-2_0",
              q: "Lineare AfA: 15.000 EUR, 5 Jahre?",
              options: ["3.000 EUR/J", "15.000 EUR/J", "1.500 EUR/J", "5.000 EUR/J"],
              correct: 0,
              explain: "15.000/5 = 3.000 EUR pro Jahr.",
            },
            {
              id: "imp_wirt-hk-2_1",
              q: "AfA-Dauer PC/Notebook laut amtlicher AfA-Tabelle?",
              options: ["10 Jahre", "2 Jahre", "5 Jahre", "3 Jahre"],
              correct: 3,
              explain:
                "3 Jahre laut AfA-Tabelle – der Prüfungsstandard. (Seit BMF-Schreiben 2022 DARF Computerhardware alternativ über 1 Jahr abgeschrieben werden; in Prüfungsaufgaben gilt die Tabelle.)",
            },
            {
              id: "imp_wirt-hk-2_2",
              q: "AfA-Dauer Großrechner laut AfA-Tabelle?",
              options: ["5 Jahre", "3 Jahre", "7 Jahre", "10 Jahre"],
              correct: 2,
              explain:
                "Großrechner: 7 Jahre laut AfA-Tabelle; PC-nahe Hardware 3 Jahre. (Seit BMF 2021/22 ist für Computerhardware alternativ 1 Jahr zulässig – Prüfungen rechnen mit der Tabelle.)",
            },
            {
              id: "imp_wirt-hk-2_3",
              q: "Degressive AfA: Was sinkt jedes Jahr?",
              options: [
                "Der absolute AfA-Betrag",
                "Der Prozentsatz",
                "Nichts",
                "Die Nutzungsdauer",
              ],
              correct: 0,
              explain: "Fester % vom sinkenden Restbuchwert = sinkender absoluter Betrag.",
            },
            {
              id: "imp_wirt-hk-2_4",
              q: "Was wird NICHT abgeschrieben?",
              options: ["Server", "Software", "PCs", "Grundstücke"],
              correct: 3,
              explain: "Grundstücke nutzen sich nicht ab und werden nicht abgeschrieben.",
            },
            {
              id: "imp_wirt-hk-2_5",
              q: "Server 20.000 EUR, 5 Jahre linear: Buchwert nach 2 Jahren?",
              options: ["20.000 EUR", "8.000 EUR", "12.000 EUR", "4.000 EUR"],
              correct: 2,
              explain: "AfA: 4.000/J. Nach 2J: 20.000-8.000=12.000 EUR Buchwert.",
            },
            {
              id: "imp_wirt-hk-2_6",
              q: "AfA steht für?",
              options: [
                "Allgemeine Förderungsabschreibung",
                "Abgabe für Anlagen",
                "Anteilige Finanzierungsabgabe",
                "Absetzung für Abnutzung",
              ],
              correct: 3,
              explain: "Absetzung für Abnutzung.",
            },
            {
              id: "imp_wirt-hk-2_7",
              q: "Lineare AfA: Betrag pro Jahr ist?",
              options: ["Immer gleich", "Zufällig", "Fallend", "Steigend"],
              correct: 0,
              explain: "Linear = jedes Jahr der gleiche Betrag.",
            },
            {
              id: "imp_wirt-hk-2_8",
              q: "AfA-Dauer Standardsoftware laut klassischer Praxis?",
              options: ["8 Jahre", "5 Jahre (das gilt für ERP-Systeme)", "Unbegrenzt", "3 Jahre"],
              correct: 3,
              explain:
                "Standardsoftware 3 Jahre, ERP-Software 5 Jahre. (Seit BMF 2021/22 ist alternativ 1 Jahr zulässig – Prüfungsaufgaben nutzen die klassischen Werte.)",
            },
            {
              id: "imp_wirt-hk-2_9",
              q: "10.000 EUR, 25% degressiv, Buchwert nach J1?",
              options: ["2.500 EUR", "10.000 EUR", "7.500 EUR", "5.000 EUR"],
              correct: 2,
              explain: "10.000 - 2.500 (25%) = 7.500 EUR.",
            },
          ],
        },
      ],
    },
    {
      id: "pol2-eu",
      title: "Europäische Union & Globalisierung",
      lessons: [
        {
          id: "pol2-eu-1",
          title: "EU-Grundlagen & Binnenmarkt",
          content: [
            {
              type: "text",
              value:
                "Die EU ist für IT-Berufe kein Politik-Nebenfach, sondern täglicher Rechtsrahmen: Der Binnenmarkt macht aus 27 Ländern einen Markt mit gemeinsamen Regeln – deshalb darf dein Betrieb ohne Zölle nach Österreich liefern, deshalb gilt die DSGVO für den Kunden in Lissabon genauso wie in Dortmund, und deshalb kommen Fachkräfte ohne Arbeitserlaubnis-Bürokratie aus anderen EU-Staaten. In der WISO-Prüfung werden vor allem die vier Freiheiten, die Aufgabenverteilung der Institutionen und der Unterschied zwischen Verordnung (gilt unmittelbar, z. B. DSGVO) und Richtlinie (muss in nationales Recht umgesetzt werden, z. B. NIS-2) abgefragt.",
            },
            { type: "heading", value: "Die vier Freiheiten des EU-Binnenmarkts" },
            {
              type: "text",
              value:
                "Freier Warenverkehr, Freier Personenverkehr, Freier Dienstleistungsverkehr, Freier Kapitalverkehr. DSGVO gilt EU-weit einheitlich – relevant für IT-Unternehmen mit EU-Kunden.",
            },
            { type: "heading", value: "EU-Institutionen" },
            {
              type: "text",
              value:
                "Europäisches Parlament (gewählt, Gesetzgebung), Europäischer Rat (Staats-/Regierungschefs, Leitlinien), Rat der EU (Ministerrat, Gesetzgebung), Europäische Kommission (Exekutive, Gesetzesvorschläge), EuGH (Rechtsprechung).",
            },
            {
              type: "heading",
              value: "Verordnung vs. Richtlinie – und warum dich das täglich betrifft",
            },
            {
              type: "text",
              value:
                "Die zwei wichtigsten EU-Rechtsakte musst du unterscheiden können: Eine VERORDNUNG gilt unmittelbar in jedem Mitgliedstaat (die DSGVO steht wortgleich in Lissabon und Dortmund) – eine RICHTLINIE gibt Ziele vor und muss erst in nationales Recht umgesetzt werden (NIS-2 → deutsches Umsetzungsgesetz; deshalb unterscheiden sich Details je Land). Gesetzgebung läuft im Zusammenspiel: Die Kommission schlägt vor (Initiativmonopol), Parlament und Rat der EU beschließen gemeinsam, der EuGH wacht über die Auslegung. Für IT-Betriebe direkt spürbar: DSGVO (Datenschutz), eIDAS (digitale Signaturen), DSA/DMA (Plattformregeln), Cyber Resilience Act (Sicherheitsanforderungen an Produkte), CE-Kennzeichnung, Roaming-Verordnung. Der Binnenmarkt bringt außerdem die Niederlassungs- und Dienstleistungsfreiheit: Dein Betrieb darf ohne Extragenehmigung Kunden in Wien betreuen – muss dann aber ggf. deren nationale Umsetzungsgesetze beachten.",
            },
            { type: "heading", value: "Übungsaufgabe: Rechtsakt bestimmen" },
            {
              type: "text",
              value:
                "Dein Chef fragt: „NIS-2 und DSGVO – gilt das jetzt beides einfach so für uns, oder was?“ Erkläre den Unterschied der beiden Rechtsakte und die praktische Folge für die Umsetzung im Betrieb.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: DSGVO = VERORDNUNG: gilt unmittelbar und wortgleich in der ganzen EU, ohne deutsches Umsetzungsgesetz; der Betrieb muss sie direkt einhalten (ergänzt durch das BDSG, wo die DSGVO Öffnungsklauseln lässt). NIS-2 = RICHTLINIE: verpflichtet zunächst die Mitgliedstaaten; für Betriebe verbindlich wird erst das deutsche Umsetzungsgesetz mit seinen konkreten Schwellenwerten und Pflichten. Praktische Folge: Bei Verordnungen den EU-Text als Maßstab nehmen, bei Richtlinien immer auf das nationale Umsetzungsgesetz und dessen Stichtage schauen.",
            },
          ],
          quiz: [
            {
              id: "imp_pol2-eu-1_0",
              q: "Wie viele Freiheiten hat der EU-Binnenmarkt?",
              options: ["2", "5", "3", "4"],
              correct: 3,
              explain: "4: Waren, Personen, Dienstleistungen, Kapital.",
            },
            {
              id: "imp_pol2-eu-1_1",
              q: "EU Binnenmarkt: 4 Freiheiten?",
              options: ["5", "3", "2", "4"],
              correct: 3,
              explain: "Waren, Personen, Dienstleistungen, Kapital.",
            },
            {
              id: "imp_pol2-eu-1_2",
              q: "DSGVO gilt?",
              options: [
                "EU-weit einheitlich",
                "Nur für IT",
                "Nur für Konzerne",
                "Nur in Deutschland",
              ],
              correct: 0,
              explain: "EU-weite Verordnung, direkt gültig in allen Mitgliedsstaaten.",
            },
            {
              id: "imp_pol2-eu-1_3",
              q: "Europäische Kommission?",
              options: [
                "Gesetzgebung",
                "Wählt Parlament",
                "Exekutive (schlägt Gesetze vor)",
                "Rechtsprechung",
              ],
              correct: 2,
              explain: "Kommission = Exekutive, schlägt Gesetze vor und setzt sie um.",
            },
            {
              id: "imp_pol2-eu-1_4",
              q: "EuGH steht für?",
              options: [
                "EU Grundgesetz",
                "Europäische Gesundheitsbehörde",
                "EU Handelsorganisation",
                "Europäischer Gerichtshof",
              ],
              correct: 3,
              explain: "Europäischer Gerichtshof – oberstes rechtsprechendes Organ der EU.",
            },
            {
              id: "imp_pol2-eu-1_5",
              q: "4 Freiheiten EU?",
              options: [
                "Nur Personen",
                "Waren, Personen, Kapital, Dienstleistungen",
                "Nur Waren",
                "Waren + Kapital",
              ],
              correct: 1,
              explain: "Freier Verkehr von Waren, Personen, Dienstleistungen, Kapital.",
            },
            {
              id: "imp_pol2-eu-1_6",
              q: "Euro-Zone?",
              options: ["Nur DE", "Alle EU", "Nur EU-Länder mit Euro (nicht alle!)", "G7"],
              correct: 2,
              explain: "Nicht alle.",
            },
            {
              id: "imp_pol2-eu-1_7",
              q: "EU-Parlament?",
              options: ["Kommission", "Direkt gewählte Volksvertretung", "Gericht", "Regierung"],
              correct: 1,
              explain: "Einzig direkt gewählt.",
            },
            {
              id: "imp_pol2-eu-1_8",
              q: "Schengen?",
              options: ["Zoll", "Währung", "Nur EU", "Reisen ohne Grenzkontrollen"],
              correct: 3,
              explain: "Keine Personenkontrollen.",
            },
            {
              id: "imp_pol2-eu-1_9",
              q: "DSGVO EU-weit?",
              options: ["Ja, direkt gültig", "Nur IT-Firmen", "Nur DE", "Optional"],
              correct: 0,
              explain: "EU-Verordnung.",
            },
            {
              id: "imp_pol2-eu-1_10",
              q: "Welche vier Grundfreiheiten bilden den EU-Binnenmarkt?",
              options: [
                "Presse-, Meinungs-, Religions- und Versammlungsfreiheit",
                "Freier Verkehr von Waren, Personen, Dienstleistungen und Kapital",
                "Reisen, Essen, Wohnen, Arbeiten",
                "Import, Export, Transit, Lagerung",
              ],
              correct: 1,
              explain:
                "Für IT-Dienstleister praktisch: Leistungen können EU-weit ohne Zölle und mit einheitlichen Standards erbracht werden.",
            },
            {
              id: "imp_pol2-eu-1_11",
              q: "Welches EU-Organ hat das alleinige Initiativrecht für Gesetzesvorschläge?",
              options: [
                "Der EuGH",
                "Das Europäische Parlament",
                "Der Europäische Rat",
                "Die Europäische Kommission",
              ],
              correct: 3,
              explain:
                "Parlament und Rat (Ministerrat) beschließen die Vorschläge im ordentlichen Gesetzgebungsverfahren gemeinsam.",
            },
            {
              id: "imp_pol2-eu-1_12",
              q: "Welche Aufgabe hat der Europäische Gerichtshof (EuGH)?",
              options: [
                "Er gibt den Euro heraus und steuert die Geldpolitik",
                "Er sichert die einheitliche Auslegung und Anwendung des EU-Rechts",
                "Er verwaltet und sichert die EU-Außengrenzen (Grenzschutz)",
                "Er wählt die Mitglieder der Europäischen Kommission",
              ],
              correct: 1,
              explain:
                "Nationale Gerichte legen ihm Auslegungsfragen vor (Vorabentscheidungsverfahren) – auch DSGVO-Leitentscheidungen kommen von dort.",
            },
            {
              id: "imp_pol2-eu-1_13",
              q: "Wofür ist die Europäische Zentralbank zuständig?",
              options: [
                "Geldpolitik des Euroraums mit dem vorrangigen Ziel der Preisstabilität",
                "Für die Vergabe der Agrarsubventionen an europäische Landwirte",
                "Für die Erhebung einer einheitlichen Steuer in allen EU-Staaten",
                "Für die gemeinsame Verteidigungspolitik der Mitgliedstaaten",
              ],
              correct: 0,
              explain:
                "Ihr Leitzins beeinflusst Kredite und Investitionen – und damit auch IT-Budgets der Kunden.",
            },
            {
              id: "imp_pol2-eu-1_14",
              q: "Was ermöglicht das Schengen-Abkommen?",
              options: [
                "Wegfall stationärer Personenkontrollen an den Binnengrenzen der Teilnehmerstaaten",
                "Den Aufbau einer gemeinsamen EU-Armee mit integriertem Oberkommando",
                "Einheitliche Steuersätze für Einkommen und Umsatz in allen Teilnehmerstaaten",
                "Kostenloses Mobilfunk-Roaming in allen Ländern des Schengen-Raums",
              ],
              correct: 0,
              explain:
                "Schengen und EU sind nicht deckungsgleich – es gibt EU-Staaten außerhalb und Nicht-EU-Staaten innerhalb des Raums.",
            },
            {
              id: "imp_pol2-eu-1_15",
              q: "Was unterscheidet die Zollunion vom Binnenmarkt?",
              options: [
                "Die Zollunion gilt ausschließlich für Lebensmittel und Agrarprodukte; Industriegüter regelt allein der Binnenmarkt",
                "Der Binnenmarkt betrifft nur Banken und Finanzdienstleistungen, während die Zollunion den Warenverkehr regelt",
                "Nichts – beide Begriffe bezeichnen dieselbe Integrationsstufe und werden in EU-Verträgen synonym verwendet",
                "Zollunion: keine Binnenzölle + gemeinsamer Außenzoll; Binnenmarkt zusätzlich freie Faktorbewegung und harmonisierte Regeln",
              ],
              correct: 3,
              explain:
                "Der Binnenmarkt geht deutlich weiter – inklusive Normung (CE) und Dienstleistungsfreiheit.",
            },
            {
              id: "imp_pol2-eu-1_16",
              q: "Was besagt das Subsidiaritätsprinzip?",
              options: [
                "Die Mitgliedstaaten dürfen keine eigenen Gesetze mehr erlassen, sobald sie der EU beigetreten sind",
                "Die EU regelt grundsätzlich alle Politikbereiche zentral, nationale Parlamente setzen nur noch um",
                "Die EU handelt nur, wenn Ziele auf EU-Ebene besser erreicht werden können als national/regional",
                "Es regelt ausschließlich die Vergabe von EU-Subventionen an landwirtschaftliche Betriebe",
              ],
              correct: 2,
              explain:
                "Es begrenzt die EU-Zuständigkeit – Streitpunkt bei vielen Regulierungsvorhaben.",
            },
            {
              id: "imp_pol2-eu-1_17",
              q: "Welche EU-Regeln zähmen die Marktmacht großer Digitalkonzerne ('Gatekeeper')?",
              options: [
                "Das Schengen-Abkommen",
                "Die Agrarverordnung",
                "Der Digital Markets Act (DMA)",
                "Die Erbschaftssteuerrichtlinie",
              ],
              correct: 2,
              explain:
                "DMA (Wettbewerb/Gatekeeper) und DSA (Inhalte/Plattformpflichten) bilden zusammen das EU-Digitalpaket.",
            },
            {
              id: "imp_pol2-eu-1_18",
              q: "Wie wird das Europäische Parlament besetzt?",
              options: [
                "Nur durch Berufspolitiker der Kommission",
                "Ernennung durch die Regierungen",
                "Direktwahl durch die EU-Bürger alle 5 Jahre",
                "Losverfahren",
              ],
              correct: 2,
              explain: "Es ist das einzige direkt gewählte EU-Organ – zuletzt 2024 gewählt.",
            },
            {
              id: "imp_pol2-eu-1_19",
              q: "Welche Bedeutung hat die CE-Kennzeichnung im Binnenmarkt?",
              options: [
                "Ein vom TÜV vergebenes Qualitätssiegel nach bestandener Produktprüfung",
                "Ein Umweltzeichen, das besonders energieeffiziente Produkte kennzeichnet",
                "Der Hersteller erklärt die Konformität mit den geltenden EU-Anforderungen",
                "Eine Exportkennzeichnung chinesischer Hersteller ('China Export')",
              ],
              correct: 2,
              explain:
                "Voraussetzung für den freien Warenverkehr. Künftig relevant auch für Software/vernetzte Produkte über den Cyber Resilience Act – Beratungsthema für Hersteller-Kunden.",
            },
          ],
        },
        {
          id: "wiso-euro-1",
          title: "Europass – der europäische Bewerbungsstandard",
          content: [
            {
              type: "text",
              value:
                "Der Europass taucht im Wirtschaftsteil der Abschlussprüfung auf, wenn es um Bewerbung, Mobilität in der EU und die Vergleichbarkeit von Qualifikationen geht. Er ist eine Initiative der Europäischen Union: ein Satz kostenloser, standardisierter Dokumente, mit denen Qualifikationen und Kompetenzen europaweit einheitlich und damit vergleichbar dargestellt werden. Verwaltet wird das Angebot über die zentrale Europass-Plattform der EU; in Deutschland unterstützt das Nationale Europass Center (NEC) beim Bundesinstitut für Berufsbildung (BIBB).",
            },
            { type: "heading", value: "Warum gibt es den Europass?" },
            {
              type: "text",
              value:
                "Innerhalb der EU gilt die Arbeitnehmerfreizügigkeit – jeder EU-Bürger darf in jedem Mitgliedsstaat arbeiten. In der Praxis scheitert das oft daran, dass ein Arbeitgeber in Spanien mit einem deutschen IHK-Zeugnis wenig anfangen kann. Der Europass löst genau dieses Problem: Er übersetzt Abschlüsse und Kompetenzen in ein einheitliches, mehrsprachiges Format. Für dich als Fachinformatiker heißt das: Mit Europass-Dokumenten kannst du dich ohne teure Übersetzungen und Anerkennungsgutachten europaweit bewerben.",
            },
            { type: "heading", value: "Die wichtigsten Europass-Dokumente" },
            {
              type: "list",
              value: [
                "Europass-Lebenslauf (CV): Standardisierter, mehrsprachiger Lebenslauf – das bekannteste Dokument. Wird online auf der Europass-Plattform erstellt.",
                "Zeugniserläuterung: Beschreibt einen Berufsabschluss (z. B. Fachinformatiker/-in) einheitlich – erworbene Kompetenzen, Niveau, Zugangsvoraussetzungen. Für jeden deutschen Ausbildungsberuf beim BIBB abrufbar; wird dem IHK-Zeugnis beigelegt.",
                "Europass Mobilität: Dokumentiert Lernaufenthalte im Ausland, z. B. ein Betriebspraktikum in den Niederlanden während der Ausbildung (etwa über Erasmus+). Wird von entsendender und aufnehmender Einrichtung gemeinsam ausgefüllt.",
                "Diploma Supplement: Erläutert Hochschulabschlüsse – das Pendant zur Zeugniserläuterung für Bachelor/Master.",
                "Sprachenpass / Selbsteinschätzung: Dokumentiert Sprachkenntnisse nach dem einheitlichen europäischen Referenzrahmen (GER: A1 bis C2).",
              ],
            },
            {
              type: "note",
              value:
                "Prüfungsklassiker: „Nennen Sie drei Europass-Dokumente und erläutern Sie deren Zweck.“ Und: Der Europass ist kostenlos – Antworten, die von Gebühren ausgehen, sind falsch. Zweiter Klassiker: der Zusammenhang mit dem Europäischen Qualifikationsrahmen (EQR), der Abschlüsse in 8 Niveaustufen einordnet – die duale Berufsausbildung zum Fachinformatiker liegt auf EQR-Niveau 4.",
            },
            { type: "heading", value: "Einordnung: EQR und DQR" },
            {
              type: "text",
              value:
                "Der Europäische Qualifikationsrahmen (EQR) macht Abschlüsse über 8 Stufen vergleichbar; der Deutsche Qualifikationsrahmen (DQR) setzt ihn national um. Beispiele: Stufe 4 = abgeschlossene 3- bis 3,5-jährige duale Ausbildung (Fachinformatiker), Stufe 6 = Bachelor UND Meister/Fachwirt (gleichwertig eingestuft!), Stufe 7 = Master. Auf Zeugnissen und in Europass-Dokumenten wird das Niveau ausgewiesen – so erkennt ein Arbeitgeber in Frankreich sofort, wo ein deutscher Abschluss steht.",
            },
            { type: "heading", value: "Übungsaufgabe" },
            {
              type: "text",
              value:
                "Eine Auszubildende Ihres Betriebs möchte nach der Abschlussprüfung ein Jahr in Österreich und danach in Frankreich arbeiten. a) Erklären Sie, welche drei Europass-Dokumente ihr konkret nutzen und was diese belegen. b) Sie hat während der Ausbildung ein vierwöchiges Erasmus+-Praktikum in Wien absolviert – welches Dokument gehört dazu? c) Auf welchem EQR-Niveau liegt ihr Abschluss?",
            },
            {
              type: "solution",
              value:
                "a) Europass-Lebenslauf (standardisierte, mehrsprachige Darstellung von Werdegang und Kompetenzen – Basis jeder Bewerbung), Zeugniserläuterung (erklärt französischen/österreichischen Arbeitgebern einheitlich, welche Kompetenzen der Abschluss Fachinformatikerin umfasst), Sprachenpass/Sprachen-Selbsteinschätzung (weist Deutsch-, Englisch- und ggf. Französischkenntnisse nach GER-Stufen A1–C2 aus).\nb) Der Europass Mobilität – er dokumentiert den Lernaufenthalt in Wien und wird von entsendender und aufnehmender Einrichtung ausgefüllt.\nc) EQR/DQR-Niveau 4 (abgeschlossene duale Berufsausbildung mit 3 bis 3,5 Jahren Dauer).",
            },
            {
              type: "links",
              value: [
                ["Europass-Portal der EU", "https://europass.europa.eu/de"],
                ["Wikipedia: Europass", "https://de.wikipedia.org/wiki/Europass"],
                [
                  "FI-Prüfungsvorbereitung: Europass",
                  "https://fachinformatikerpruefungsvorbereitung.de/abschlusspr%C3%BCfungteil2wirtschaft/europass/",
                ],
              ],
            },
          ],
          quiz: [
            {
              id: "imp_wiso-euro-1_0",
              q: "Was ist das Ziel des Europasses?",
              options: [
                "Ein EU-weiter Reisepass für Arbeitnehmer",
                "Qualifikationen europaweit einheitlich und vergleichbar darstellen",
                "Ein verpflichtendes Bewerbungsformat in der EU",
                "Die Anerkennung nur akademischer Abschlüsse",
              ],
              correct: 1,
              explain:
                "Der Europass macht Kompetenzen und Abschlüsse durch standardisierte, mehrsprachige und kostenlose Dokumente EU-weit vergleichbar.",
            },
            {
              id: "imp_wiso-euro-1_1",
              q: "Welches Dokument belegt ein Auslandspraktikum während der Ausbildung?",
              options: [
                "Diploma Supplement",
                "Europass Mobilität",
                "Zeugniserläuterung",
                "Sprachenpass",
              ],
              correct: 1,
              explain:
                "Der Europass Mobilität dokumentiert Lernaufenthalte im Ausland und wird von beiden Einrichtungen gemeinsam ausgefüllt.",
            },
            {
              id: "imp_wiso-euro-1_2",
              q: "Auf welchem EQR-Niveau liegt die abgeschlossene Fachinformatiker-Ausbildung?",
              options: ["Niveau 3", "Niveau 4", "Niveau 5", "Niveau 6"],
              correct: 1,
              explain:
                "3- bis 3,5-jährige duale Ausbildungen liegen auf EQR/DQR-Niveau 4. Meister/Fachwirt und Bachelor liegen beide auf Niveau 6.",
            },
            {
              id: "imp_wiso-euro-1_3",
              q: "Was kostet die Nutzung der Europass-Dokumente?",
              options: [
                "Einmalig 75 Euro",
                "Je Dokument eine Gebühr der IHK",
                "Nichts – sie sind kostenlos",
                "Nur der Lebenslauf ist kostenlos",
              ],
              correct: 2,
              explain:
                "Alle Europass-Angebote sind eine kostenlose Initiative der EU – das ist ein beliebter Prüfungs-Stolperstein.",
            },
          ],
        },
        {
          id: "wiso-eu-2",
          title: "EU-Institutionen & Rechtsakte",
          content: [
            { type: "heading", value: "Wer macht was in der EU?" },
            {
              type: "text",
              value:
                "Europäische Kommission: die „Regierung“ der EU – ein Mitglied je Staat, hat das Initiativmonopol (nur sie schlägt EU-Gesetze vor), überwacht als „Hüterin der Verträge“ deren Einhaltung. · Europäisches Parlament: direkt von den EU-Bürgern gewählt (in Deutschland ab 16), beschließt gemeinsam mit dem Rat Gesetze und den Haushalt. · Rat der Europäischen Union (Ministerrat): die Fachminister der Staaten – zweite Gesetzgebungskammer. Nicht verwechseln mit dem Europäischen Rat: das sind die Staats- und Regierungschefs, die nur die Leitlinien vorgeben, und schon gar nicht mit dem Europarat (eigene Organisation, Menschenrechte, kein EU-Organ!). · Europäischer Gerichtshof (EuGH): letzte Instanz für EU-Recht. · Europäische Zentralbank (EZB): Geldpolitik des Euro, Ziel Preisstabilität (~2 % Inflation). · Europäischer Rechnungshof: prüft die EU-Finanzen.",
            },
            { type: "heading", value: "Verordnung vs. Richtlinie – mit IT-Beispielen" },
            {
              type: "text",
              value:
                "Verordnung: gilt unmittelbar und wortgleich in allen Mitgliedstaaten – kein nationales Gesetz nötig. Paradebeispiel: die DSGVO. Auch die KI-Verordnung (AI Act) ist eine Verordnung. · Richtlinie: gibt nur das ZIEL vor; jeder Staat muss sie binnen Frist in nationales Recht umsetzen. Beispiel: die NIS2-Richtlinie (Cybersicherheit) – Deutschland setzt sie mit einem eigenen Umsetzungsgesetz um. Merksatz: VERORDNUNG wirkt SOFORT überall, RICHTLINIE braucht die nationale ÜBERSETZUNG. · Daneben: Beschlüsse (verbindlich für die Adressaten), Empfehlungen/Stellungnahmen (unverbindlich).",
            },
            { type: "heading", value: "Binnenmarkt: die vier Freiheiten" },
            {
              type: "text",
              value:
                "Kern der EU ist der Binnenmarkt mit vier Grundfreiheiten: freier Verkehr von WAREN, PERSONEN (Arbeitnehmerfreizügigkeit – du darfst überall in der EU arbeiten), DIENSTLEISTUNGEN und KAPITAL. Dazu kommen für dich spürbare Ergebnisse: keine Roaming-Gebühren, einheitliche USB-C-Ladebuchse, Fluggastrechte, das CE-Kennzeichen als „Reisepass“ für Produkte und die Währungsunion (Euro in 20+ Staaten). Für IT-Betriebe heißt Binnenmarkt: ein Angebot nach Spanien ist rechtlich kein Export in ein Drittland – Zoll und Einfuhrumsatzsteuer entfallen, es gilt das Reverse-Charge-Verfahren bei der USt.",
            },
            { type: "heading", value: "Wie ein EU-Gesetz entsteht" },
            {
              type: "text",
              value:
                "Ordentliches Gesetzgebungsverfahren: Die Kommission schlägt vor → Parlament und Rat beraten und beschließen gemeinsam (beide müssen zustimmen, ggf. Trilog-Verhandlungen als informeller Kompromissweg) → Veröffentlichung im Amtsblatt der EU. Nationale Parlamente prüfen dabei die Subsidiarität: Die EU soll nur regeln, was auf EU-Ebene besser geregelt werden kann als national.",
            },
            {
              type: "note",
              value:
                "Prüfungsfalle Dreierlei Räte: Rat der EU = Minister (Gesetzgebung) · Europäischer Rat = Staats-/Regierungschefs (Leitlinien) · Europarat = KEINE EU-Institution (Menschenrechte, Straßburg).",
            },
            { type: "heading", value: "Übungsaufgabe: Rechtsakte zuordnen" },
            {
              type: "text",
              value:
                "Ordne zu und begründe kurz: a) Die DSGVO gilt seit 2018 wortgleich in allen Mitgliedstaaten. b) Für NIS2 musste Deutschland ein eigenes Umsetzungsgesetz beschließen. c) Welche EU-Institution hätte einen Vorschlag für beide Rechtsakte einbringen dürfen – und wer beschließt sie?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Verordnung – unmittelbar geltendes EU-Recht, kein nationaler Umsetzungsakt nötig.\nb) Richtlinie – nur das Ziel ist verbindlich, die Umsetzung erfolgt national (mit Frist).\nc) Nur die Europäische Kommission (Initiativmonopol); beschlossen wird im ordentlichen Gesetzgebungsverfahren gemeinsam von Europäischem Parlament und Rat der EU.",
            },
          ],
          quiz: [
            {
              id: "imp_wiso-eu-2_0",
              q: "Wer hat in der EU das Initiativmonopol für Gesetze?",
              options: [
                "Das Europäische Parlament",
                "Die Europäische Kommission",
                "Der Europäische Rat",
                "Der EuGH",
              ],
              correct: 1,
              explain:
                "Nur die Kommission schlägt EU-Rechtsakte vor – Parlament und Rat beschließen sie.",
            },
            {
              id: "imp_wiso-eu-2_1",
              q: "Eine EU-Verordnung …",
              options: [
                "gilt unmittelbar in allen Mitgliedstaaten",
                "muss national umgesetzt werden",
                "ist unverbindlich",
                "gilt nur für Behörden",
              ],
              correct: 0,
              explain:
                "Verordnungen (z. B. DSGVO) wirken sofort und wortgleich überall – ohne Umsetzungsgesetz.",
            },
            {
              id: "imp_wiso-eu-2_2",
              q: "NIS2 (Cybersicherheit) ist eine Richtlinie. Das heißt …",
              options: [
                "sie gilt nur für Deutschland",
                "sie ist eine Empfehlung",
                "jeder Staat setzt das Ziel in eigenes Recht um",
                "der EuGH setzt sie um",
              ],
              correct: 2,
              explain:
                "Richtlinien geben Ziele mit Umsetzungsfrist vor – Deutschland braucht ein Umsetzungsgesetz.",
            },
            {
              id: "imp_wiso-eu-2_3",
              q: "Die vier Freiheiten des Binnenmarkts betreffen …",
              options: [
                "Presse, Meinung, Kunst, Reise",
                "Waren, Personen, Dienstleistungen, Kapital",
                "Strom, Gas, Wasser, Daten",
                "Zölle, Steuern, Beihilfen, Quoten",
              ],
              correct: 1,
              explain:
                "Freier Verkehr von Waren, Personen, Dienstleistungen und Kapital ist der Kern des Binnenmarkts.",
            },
            {
              id: "imp_wiso-eu-2_4",
              q: "Der Europäische Rat besteht aus …",
              options: [
                "den Fachministern",
                "EU-Abgeordneten",
                "Verfassungsrichtern",
                "den Staats- und Regierungschefs",
              ],
              correct: 3,
              explain:
                "Er gibt die politischen Leitlinien vor – nicht verwechseln mit dem Rat der EU (Minister).",
            },
            {
              id: "imp_wiso-eu-2_5",
              q: "Welche Organisation ist KEINE EU-Institution?",
              options: [
                "Der Europarat",
                "Die EZB",
                "Der Rechnungshof",
                "Das Europäische Parlament",
              ],
              correct: 0,
              explain:
                "Der Europarat (Straßburg, Menschenrechte, 46 Staaten) ist eine eigenständige Organisation außerhalb der EU.",
            },
            {
              id: "imp_wiso-eu-2_6",
              q: "Hauptziel der EZB ist …",
              options: ["Vollbeschäftigung", "Preisstabilität", "Exportförderung", "Bankgewinne"],
              correct: 1,
              explain:
                "Die EZB steuert die Geldpolitik des Euro mit dem Ziel Preisstabilität (Inflation um 2 %).",
            },
            {
              id: "imp_wiso-eu-2_7",
              q: "EU-Gesetze beschließen gemeinsam …",
              options: [
                "Kommission und EuGH",
                "Europäischer Rat und Rechnungshof",
                "Parlament und Rat der EU",
                "EZB und Parlament",
              ],
              correct: 2,
              explain:
                "Ordentliches Gesetzgebungsverfahren: Vorschlag der Kommission, Beschluss durch Parlament UND Ministerrat.",
            },
            {
              id: "imp_wiso-eu-2_8",
              q: "Subsidiaritätsprinzip bedeutet …",
              options: [
                "Die EU regelt alles zentral",
                "EU regelt nur, was sie besser kann als die Staaten",
                "Die Staaten prüfen EU-Richter",
                "Jedes Land hat ein Veto",
              ],
              correct: 1,
              explain:
                "Entscheidungen sollen auf der niedrigsten Ebene fallen, die das Problem lösen kann.",
            },
            {
              id: "imp_wiso-eu-2_9",
              q: "Ein IT-Systemhaus liefert Server nach Frankreich. Zollrechtlich ist das …",
              options: [
                "ein Export in ein Drittland",
                "zollfreier Binnenmarkt-Handel",
                "nur mit CE-Ausnahme möglich",
                "verboten ohne EU-Lizenz",
              ],
              correct: 1,
              explain:
                "Innerhalb des Binnenmarkts gibt es keine Zölle – innergemeinschaftliche Lieferung statt Export.",
            },
            {
              id: "imp_wiso-eu-2_10",
              q: "Die 'Hüterin der Verträge' ist …",
              options: ["die Kommission", "das Parlament", "die EZB", "der Europäische Rat"],
              correct: 0,
              explain:
                "Die Kommission überwacht die Einhaltung des EU-Rechts und kann Vertragsverletzungsverfahren einleiten.",
            },
          ],
        },
      ],
    },
    {
      id: "wirt2-kl",
      title: "Kosten- & Leistungsrechnung",
      lessons: [
        {
          id: "wiso-zuschlag-1",
          title: "Zuschlagskalkulation: vom Material zum Listenpreis",
          content: [
            {
              type: "text",
              value:
                "Die Zuschlagskalkulation beantwortet die Frage: Was muss ein selbst gefertigtes Produkt kosten, damit alle Kosten gedeckt sind und Gewinn bleibt? Sie funktioniert wie eine Treppe – jede Stufe baut auf der vorherigen auf:\n\nMATERIALEINZELKOSTEN (MEK, direkt zurechenbar: das verbaute Material)\n+ Materialgemeinkosten (MGK, als %-Zuschlag: Lager, Einkauf)\n= MATERIALKOSTEN\n\nFERTIGUNGSEINZELKOSTEN (FEK: Fertigungslöhne)\n+ Fertigungsgemeinkosten (FGK %: Maschinen, Meister, Halle)\n= FERTIGUNGSKOSTEN\n\nMaterialkosten + Fertigungskosten = HERSTELLKOSTEN (HK)\n+ Verwaltungsgemeinkosten (% auf HK) + Vertriebsgemeinkosten (% auf HK)\n= SELBSTKOSTEN (SK)\n+ Gewinnzuschlag (%)\n= BARVERKAUFSPREIS\n+ Skonto und Rabatt – aber IM HUNDERT gerechnet!\n= LISTENVERKAUFSPREIS (netto, + USt = brutto)\n\nDie Im-Hundert-Falle: Skonto und Rabatt werden später VOM Verkaufspreis gewährt. Wer 2 % Skonto einfach auf den Barverkaufspreis draufschlägt, bekommt zu wenig. Richtig: Zielpreis = Ausgangswert × 100 ÷ (100 − Satz). Die %-Zuschlagssätze stammen aus dem Betriebsabrechnungsbogen (BAB), der die Gemeinkosten den Bereichen zuordnet.\n\nRÜCKWÄRTSKALKULATION dreht die Treppe um: Der Markt gibt den Listenpreis vor, gesucht sind die maximal erlaubten Selbstkosten. DIFFERENZKALKULATION prüft beide Enden: Reicht der erzielbare Preis für die tatsächlichen Kosten – und wie viel Gewinn bleibt?",
            },
            { type: "heading", value: "Übungsaufgabe: Server-Sonderanfertigung" },
            {
              type: "text",
              value:
                "Ein Systemhaus fertigt einen Spezial-Server: MEK 800 €, MGK 10 %, FEK 400 €, FGK 150 %, VwGK 8 %, VtGK 7 %, Gewinn 15 %, Kundenskonto 2 %, Kundenrabatt 5 %. Berechne Herstellkosten, Selbstkosten und den Listenverkaufspreis (netto).",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nMaterial: 800 + 10 % = 880 € · Fertigung: 400 + 150 % = 1.000 €\nHERSTELLKOSTEN = 880 + 1.000 = 1.880 €\n+ VwGK 8 % (150,40) + VtGK 7 % (131,60) → SELBSTKOSTEN = 2.162 €\n+ Gewinn 15 % = 324,30 → Barverkaufspreis = 2.486,30 €\nSkonto im Hundert: 2.486,30 × 100 ÷ 98 = 2.537,04 € (Zielverkaufspreis)\nRabatt im Hundert: 2.537,04 × 100 ÷ 95 = 2.670,57 € = LISTENPREIS netto.\nKontrolle rückwärts: 2.670,57 − 5 % = 2.537,04 − 2 % = 2.486,30 ✓",
            },
            { type: "heading", value: "Vertiefung: BAB in einem Absatz" },
            {
              type: "text",
              value:
                "Woher kommen die Prozentsätze? Der Betriebsabrechnungsbogen verteilt alle Gemeinkosten (Miete, Strom, Verwaltung …) auf die Kostenstellen Material, Fertigung, Verwaltung, Vertrieb. Dann teilt man je Bereich: Gemeinkosten ÷ Einzelkosten-Basis × 100. Beispiel: 50.000 € Materialgemeinkosten bei 500.000 € Materialeinzelkosten → MGK-Satz 10 %. In der Prüfung sind die Sätze meist gegeben – wissen, WAS sie bedeuten, bringt die Konzeptpunkte.",
            },
          ],
          quiz: [
            {
              id: "imp_wiso-zuschlag-1_g0",
              q: "Woraus ergeben sich die Herstellkosten?",
              options: [
                "Materialkosten + Fertigungskosten",
                "Selbstkosten + Gewinnzuschlag",
                "Materialeinzelkosten + Fertigungslöhne (ohne Gemeinkosten)",
                "Listenpreis − Rabatt − Skonto",
              ],
              correct: 0,
              explain: "HK = (MEK+MGK) + (FEK+FGK). Verwaltung/Vertrieb kommen erst danach dazu.",
            },
            {
              id: "imp_wiso-zuschlag-1_g1",
              q: "Worauf werden Verwaltungs- und Vertriebsgemeinkosten prozentual aufgeschlagen?",
              options: [
                "Auf die Materialeinzelkosten",
                "Auf die Herstellkosten",
                "Auf den Barverkaufspreis",
                "Auf den Gewinn",
              ],
              correct: 1,
              explain:
                "Basis der VwGK/VtGK sind die Herstellkosten – Ergebnis sind die Selbstkosten.",
            },
            {
              id: "imp_wiso-zuschlag-1_g2",
              q: 'Warum wird Skonto "im Hundert" gerechnet?',
              options: [
                "Weil Skonto gesetzlich mit 100 multipliziert werden muss",
                "Weil das Ergebnis sonst brutto wäre",
                "Aus historischen Gründen ohne rechnerische Wirkung",
                "Weil Skonto später vom VERKAUFSPREIS abgezogen wird, der ja erst gesucht ist",
              ],
              correct: 3,
              explain:
                "Zielpreis × (100−Satz)/100 muss den Barverkaufspreis ergeben – daher ×100÷(100−Satz).",
            },
            {
              id: "imp_wiso-zuschlag-1_g3",
              q: "MEK 800 €, MGK 10 % – Materialkosten?",
              options: ["808 €", "810 €", "880 €", "900 €"],
              correct: 2,
              explain: "800 × 1,10 = 880 €.",
            },
            {
              id: "imp_wiso-zuschlag-1_g4",
              q: "FEK 400 €, FGK 150 % – Fertigungskosten?",
              options: ["550 €", "600 €", "850 €", "1.000 €"],
              correct: 3,
              explain:
                "400 + 400×1,5 = 1.000 € (Zuschlag über 100 % ist bei Maschinenfertigung normal).",
            },
            {
              id: "imp_wiso-zuschlag-1_g5",
              q: "Barverkaufspreis 2.486,30 €, Skonto 2 % – Zielverkaufspreis?",
              options: ["2.436,57 €", "2.535,03 €", "2.537,04 €", "2.586,30 €"],
              correct: 2,
              explain: "Im Hundert: 2.486,30 × 100 ÷ 98 = 2.537,04 €.",
            },
            {
              id: "imp_wiso-zuschlag-1_g6",
              q: "Was leistet die Rückwärtskalkulation?",
              options: [
                "Sie prüft die Buchhaltung auf Fehler",
                "Sie berechnet die USt aus dem Bruttopreis",
                "Sie verteilt Gemeinkosten auf Kostenstellen",
                "Sie ermittelt aus dem Marktpreis die maximal erlaubten Selbstkosten",
              ],
              correct: 3,
              explain:
                "Der Markt gibt den Preis vor – gerechnet wird die Treppe von oben nach unten.",
            },
            {
              id: "imp_wiso-zuschlag-1_g7",
              q: "Wozu dient der Betriebsabrechnungsbogen (BAB)?",
              options: [
                "Gemeinkosten auf Kostenstellen verteilen und Zuschlagssätze ermitteln",
                "Die Inventur zum Jahresende dokumentieren",
                "Rabattstaffeln für Großkunden festlegen",
                "Löhne der Mitarbeiter abrechnen",
              ],
              correct: 0,
              explain: "GK ÷ Einzelkosten-Basis × 100 = Zuschlagssatz je Bereich.",
            },
            {
              id: "imp_wiso-zuschlag-1_g8",
              q: "Welche Kosten sind EINZELkosten?",
              options: [
                "Miete der Fertigungshalle",
                "Das im Produkt verbaute Material",
                "Gehalt der Geschäftsführung",
                "Strom für die Verwaltung",
              ],
              correct: 1,
              explain:
                "Einzelkosten sind dem Produkt direkt zurechenbar – der Rest läuft als Gemeinkosten über Zuschläge.",
            },
            {
              id: "imp_wiso-zuschlag-1_g9",
              q: "Die Divisionskalkulation eignet sich für …",
              options: [
                "Handelsbetriebe mit breitem Sortiment",
                "Einproduktbetriebe: Selbstkosten = Gesamtkosten ÷ Stückzahl",
                "Betriebe ohne Gemeinkosten",
                "die Berechnung des Skontos",
              ],
              correct: 1,
              explain:
                "Nur bei (nahezu) identischen Produkten; ähnliche Varianten gewichtet man mit Äquivalenzziffern.",
            },
          ],
        },
        {
          id: "wiso-buchf-1",
          title: "Buchführung-Grundlagen: Inventur, Bilanz, Buchungssatz",
          content: [
            {
              type: "text",
              value:
                'Auch wenn FISI/FIAE keine Buchungssätze in der IHK-Prüfung rechnen: Die Grundlogik gehört zum Berufsschulstoff und macht viele WiSo-Begriffe erst verständlich.\n\nDer Weg zur Bilanz: INVENTUR (körperliche Bestandsaufnahme: zählen, messen, wiegen – einmal jährlich Pflicht) → INVENTAR (das ausführliche Verzeichnis aller Vermögensteile und Schulden in Staffelform) → BILANZ (die Kurzfassung in Kontoform: links AKTIVA = Mittelverwendung, rechts PASSIVA = Mittelherkunft). Eiserne Regel: Aktiva = Passiva, immer.\n\nAKTIVA gliedern sich in Anlagevermögen (bleibt lange: Gebäude, Server, Lizenzen) und Umlaufvermögen (fließt: Vorräte, Forderungen, Bank, Kasse). PASSIVA in Eigenkapital und Fremdkapital (Darlehen, Verbindlichkeiten).\n\nJeder Geschäftsvorfall verändert die Bilanz – gebucht wird auf KONTEN. Der BUCHUNGSSATZ nennt immer zuerst das Konto, das im SOLL gebucht wird, dann das im HABEN: "Soll an Haben". Beispiel Serverkauf gegen Banküberweisung: "BGA (Betriebs- und Geschäftsausstattung) an Bank 5.000 €" – Anlagevermögen steigt, Bank sinkt (Aktivtausch). Kauf auf Rechnung: "BGA an Verbindlichkeiten" (Bilanzverlängerung).\n\nERFOLGSKONTEN (Aufwand/Ertrag) sammeln, was das Eigenkapital verändert, und laufen am Jahresende über die GuV (Gewinn- und Verlustrechnung): Erträge − Aufwendungen = Gewinn (oder Verlust) → verändert das Eigenkapital in der Bilanz. Damit schließt sich der Kreis.',
            },
            { type: "heading", value: "Übungsaufgabe: Vorgänge einordnen" },
            {
              type: "text",
              value:
                "Ordne zu (Aktivtausch, Passivtausch, Bilanzverlängerung, Bilanzverkürzung) und nenne den Buchungssatz: a) Kauf eines Servers 5.000 € gegen Banküberweisung. b) Kauf von Büromaterial 200 € auf Rechnung. c) Eine Lieferantenrechnung 1.000 € wird per Bank bezahlt.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Aktivtausch – BGA an Bank 5.000 € (ein Aktivposten steigt, ein anderer sinkt, Bilanzsumme unverändert)\nb) Bilanzverlängerung – Büromaterial an Verbindlichkeiten 200 € (Aktiv- und Passivseite wachsen)\nc) Bilanzverkürzung – Verbindlichkeiten an Bank 1.000 € (beide Seiten schrumpfen: Schuld weg, Geld weg)",
            },
            { type: "heading", value: "Vertiefung: Warum das für ITler relevant ist" },
            {
              type: "text",
              value:
                'Drei Berührungspunkte im Berufsalltag: 1) Bei der Beschaffung entscheidet die Bilanzlogik, ob etwas aktiviert (Anlagevermögen, wird über AfA abgeschrieben) oder sofort als Aufwand gebucht wird – die GWG-Grenze für geringwertige Wirtschaftsgüter macht den Unterschied zwischen "Server über 5 Jahre abschreiben" und "Maus sofort als Aufwand". 2) ERP-Systeme (auch JTL, SAP & Co.) bilden genau diese Konten ab – wer die Logik kennt, versteht die Software. 3) Inventur ist auch IT-Aufgabe: Asset-Management und Lizenz-Inventur folgen demselben Prinzip.',
            },
          ],
          quiz: [
            {
              id: "imp_wiso-buchf-1_g0",
              q: "Welche Reihenfolge stimmt?",
              options: [
                "Bilanz → Inventar → Inventur",
                "Inventar → Bilanz → Inventur",
                "Inventur → Inventar → Bilanz",
                "Inventur → Bilanz → Inventar",
              ],
              correct: 2,
              explain: "Zählen → Verzeichnis → Kurzfassung in Kontoform.",
            },
            {
              id: "imp_wiso-buchf-1_g1",
              q: "Was steht auf der Aktivseite der Bilanz?",
              options: [
                "Die Mittelherkunft: Eigen- und Fremdkapital",
                "Die Mittelverwendung: Anlage- und Umlaufvermögen",
                "Nur die Schulden des Unternehmens",
                "Erträge und Aufwendungen des Jahres",
              ],
              correct: 1,
              explain: "Aktiva = wofür das Kapital verwendet wurde; Passiva = woher es stammt.",
            },
            {
              id: "imp_wiso-buchf-1_g2",
              q: "Wie lautet die Grundform jedes Buchungssatzes?",
              options: ["Haben an Soll", "Aktiv an Passiv", "Aufwand an Ertrag", "Soll an Haben"],
              correct: 3,
              explain: 'Zuerst das Soll-Konto, dann "an", dann das Haben-Konto.',
            },
            {
              id: "imp_wiso-buchf-1_g3",
              q: "Serverkauf 5.000 € gegen Banküberweisung ist ein …",
              options: ["Aktivtausch", "Passivtausch", "Bilanzverlängerung", "Bilanzverkürzung"],
              correct: 0,
              explain: "BGA steigt, Bank sinkt – beides Aktivkonten, Bilanzsumme bleibt.",
            },
            {
              id: "imp_wiso-buchf-1_g4",
              q: "Was passiert bei einem Kauf auf Rechnung mit der Bilanzsumme?",
              options: [
                "Sie sinkt (Bilanzverkürzung)",
                "Sie steigt (Bilanzverlängerung)",
                "Sie bleibt exakt gleich",
                "Sie halbiert sich",
              ],
              correct: 1,
              explain: "Vermögen UND Verbindlichkeiten wachsen um denselben Betrag.",
            },
            {
              id: "imp_wiso-buchf-1_g5",
              q: "Wozu dient die GuV?",
              options: [
                "Sie listet das Anlagevermögen auf",
                "Sie ersetzt die Inventur",
                "Sie ermittelt aus Erträgen und Aufwendungen den Erfolg, der das Eigenkapital verändert",
                "Sie dokumentiert offene Kundenrechnungen",
              ],
              correct: 2,
              explain: "Erträge − Aufwendungen = Gewinn/Verlust → fließt ins Eigenkapital.",
            },
            {
              id: "imp_wiso-buchf-1_g6",
              q: "Ein 40-€-USB-Stick wird gekauft. Warum landet er nicht im Anlagevermögen?",
              options: [
                "USB-Sticks sind grundsätzlich Umlaufvermögen",
                "IT-Hardware wird nie aktiviert",
                "Er liegt unter der GWG-Grenze und wird sofort als Aufwand gebucht",
                "Nur geleaste Geräte werden aktiviert",
              ],
              correct: 2,
              explain: "Geringwertige Wirtschaftsgüter: sofort Aufwand statt jahrelanger AfA.",
            },
            {
              id: "imp_wiso-buchf-1_g7",
              q: "Welche eiserne Regel gilt für jede Bilanz?",
              options: [
                "Eigenkapital > Fremdkapital",
                "Summe Aktiva = Summe Passiva",
                "Anlagevermögen > Umlaufvermögen",
                "Gewinn muss ausgewiesen werden",
              ],
              correct: 1,
              explain:
                "Mittelverwendung und Mittelherkunft sind zwei Sichten auf dasselbe Kapital.",
            },
          ],
        },
        {
          id: "wirt2-kl-1",
          title: "KLR-Grundlagen",
          content: [
            { type: "heading", value: "Kostenartenrechnung" },
            {
              type: "text",
              value:
                "WELCHE Kosten? Fixkosten (unabhängig von Auslastung: Miete, Gehälter) vs. variable Kosten (abhängig: Material, Energie). Einzelkosten (direkt zuordenbar) vs. Gemeinkosten (indirekt, über Schlüssel verteilt).",
            },
            { type: "heading", value: "Kostenstellenrechnung" },
            {
              type: "text",
              value:
                "WO entstehen Kosten? Kostenstellen: IT-Abteilung, Vertrieb, Verwaltung. BAB (Betriebsabrechnungsbogen) verteilt Gemeinkosten auf Kostenstellen.",
            },
            { type: "heading", value: "Kostenträgerrechnung" },
            {
              type: "text",
              value:
                "WOFÜR entstehen Kosten? Kalkulation pro Produkt/Auftrag. Zuschlagskalkulation: Materialeinzelkosten + Materialgemeinkosten + Fertigungseinzelkosten + Fertigungsgemeinkosten = Herstellkosten + Verwaltungs-/Vertriebsgemeinkosten = Selbstkosten.",
            },
            { type: "heading", value: "Kostenarten-, Kostenstellen-, Kostenträgerrechnung" },
            {
              type: "text",
              value:
                "Die KLR (Kosten- und Leistungsrechnung) beantwortet drei Fragen: KOSTENARTENRECHNUNG (Welche Kosten fallen an?): Einteilung in Einzelkosten (direkt zurechenbar, z.B. Material) und Gemeinkosten (nicht direkt, z.B. Miete, Strom). Außerdem fixe Kosten (unabhängig von der Menge) und variable Kosten (mengenabhängig). KOSTENSTELLENRECHNUNG (Wo fallen die Kosten an?): Verteilung der Gemeinkosten auf Bereiche (z.B. Einkauf, Fertigung, Vertrieb) über den Betriebsabrechnungsbogen (BAB). KOSTENTRÄGERRECHNUNG (Wofür fallen die Kosten an?): Zuordnung zu Produkten/Aufträgen, Basis für die Kalkulation.",
            },
            { type: "heading", value: "Deckungsbeitrag & Break-Even" },
            {
              type: "text",
              value:
                "Deckungsbeitrag (DB) = Erlös - variable Kosten. Der DB muss zuerst die Fixkosten decken, was darüber bleibt, ist Gewinn. DB pro Stück = Verkaufspreis - variable Stückkosten. Break-Even-Point (Gewinnschwelle) = Fixkosten / DB pro Stück. Ab dieser Menge macht das Unternehmen Gewinn.",
            },
            {
              type: "code",
              value:
                "BEISPIEL Break-Even:\nFixkosten: 10.000€/Monat\nVerkaufspreis/Stück: 50€\nVariable Kosten/Stück: 30€\n\nDB/Stück = 50 - 30 = 20€\nBreak-Even = 10.000 / 20 = 500 Stück\n\n→ Ab dem 501. verkauften Stück wird Gewinn gemacht.\nProbe: 500×50 = 25.000€ Erlös\n       500×30 + 10.000 = 25.000€ Kosten → ±0 ✓",
            },
            { type: "heading", value: "KLR: von der Buchhaltung zur Entscheidung" },
            {
              type: "text",
              value:
                "Die Kosten- und Leistungsrechnung beantwortet drei Fragen in drei Stufen: KOSTENARTENRECHNUNG – welche Kosten fallen an? (Abgrenzung: neutrale Aufwendungen raus, kalkulatorische Kosten wie Unternehmerlohn und kalkulatorische Abschreibung rein). KOSTENSTELLENRECHNUNG – wo fallen sie an? Der Betriebsabrechnungsbogen (BAB) verteilt Gemeinkosten auf Stellen (Material, Fertigung/Technik, Verwaltung, Vertrieb) und liefert Zuschlagssätze. KOSTENTRÄGERRECHNUNG – wofür? Kalkulation je Produkt/Auftrag. Dazu die Deckungsbeitragsrechnung als Entscheidungswerkzeug: DB = Erlös − variable Kosten; der DB muss die Fixkosten decken – Break-Even-Menge = Fixkosten ÷ Stück-DB. Klassische Prüfungsentscheidung: Ein Auftrag mit positivem DB lohnt kurzfristig auch dann, wenn er „Verlust“ nach Vollkosten zeigt – solange freie Kapazität besteht, trägt er zu den ohnehin anfallenden Fixkosten bei.",
            },
            { type: "heading", value: "Übungsaufgabe: Zusatzauftrag annehmen?" },
            {
              type: "text",
              value:
                "Dein Systemhaus hat freie Kapazität. Ein Kunde bietet für 60 Wartungspauschalen 45 €/Stück. Vollkostenkalkulation: variable Kosten 30 €/Stück, anteilige Fixkosten 20 €/Stück → „Verlust“ 5 €/Stück. Der Vertrieb will ablehnen. Entscheide mit Rechnung und nenne die Bedingung, unter der die Ablehnung doch richtig wäre.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: Deckungsbeitrag = 45 − 30 = 15 €/Stück → 60 × 15 = 900 € zusätzlicher Fixkostendeckungsbeitrag. Die Fixkosten (20 €/Stück anteilig) fallen SO ODER SO an – bei freier Kapazität erhöht die Annahme das Betriebsergebnis um 900 €; Ablehnung wäre ein Fehler. Richtig wäre Ablehnen nur, wenn (a) die Kapazität anderweitig mit höherem DB nutzbar ist (Opportunitätskosten), (b) der Kampfpreis das reguläre Preisgefüge gefährdet (andere Kunden fordern 45 €) oder (c) Folgekosten drohen. Merksatz: Kurzfristige Entscheidungen auf DB-Basis, langfristig müssen Vollkosten verdient werden.",
            },
          ],
          quiz: [
            {
              id: "imp_wirt2-kl-1_0",
              q: "Miete ist eine?",
              options: ["Einzelkosten", "Variable Kosten", "Fixkosten", "Keine Kosten"],
              correct: 2,
              explain: "Miete = Fixkosten (unabhängig von Auslastung).",
            },
            {
              id: "imp_wirt2-kl-1_1",
              q: "BAB verteilt?",
              options: ["Materialkosten", "Gemeinkosten auf Kostenstellen", "Gewinne", "Gehälter"],
              correct: 1,
              explain: "BAB = Betriebsabrechnungsbogen verteilt Gemeinkosten.",
            },
            {
              id: "imp_wirt2-kl-1_2",
              q: "Fixkosten Beispiel?",
              options: [
                "Material",
                "Provisionen",
                "Versandkosten",
                "Miete (unabhängig von Produktion)",
              ],
              correct: 3,
              explain: "Fixkosten fallen unabhängig von der Auslastung an.",
            },
            {
              id: "imp_wirt2-kl-1_3",
              q: "Variable Kosten?",
              options: [
                "Monatliche Miete für Büro- und Produktionsgebäude",
                "Steigen/sinken mit Produktionsmenge (Material, Strom)",
                "Jährliche Beiträge zur Betriebshaftpflichtversicherung",
                "Das feste Monatsgehalt des Geschäftsführers",
              ],
              correct: 1,
              explain: "Variable Kosten ändern sich mit der Ausbringungsmenge.",
            },
            {
              id: "imp_wirt2-kl-1_4",
              q: "Break-Even-Point?",
              options: [
                "Erlöse = Kosten",
                "Maximale Produktion",
                "Gewinnmaximum",
                "Minimale Kosten",
              ],
              correct: 0,
              explain: "Kein Gewinn, kein Verlust. Break-Even: Ab hier wird Gewinn gemacht.",
            },
            {
              id: "imp_wirt2-kl-1_5",
              q: "Deckungsbeitrag?",
              options: [
                "Gewinn",
                "Umsatz",
                "Erlös - fixe Kosten",
                "Erlös - variable Kosten pro Stück",
              ],
              correct: 3,
              explain:
                "DB = Verkaufspreis - variable Stückkosten. Zeigt, was zur Fixkostendeckung beiträgt.",
            },
            {
              id: "imp_wirt2-kl-1_6",
              q: "Gemeinkostenzuschlag?",
              options: [
                "Ein Zuschlag, der nur bei Verlustjahren erhoben wird",
                "Gemeinkosten prozentual auf Kostenträger verteilen",
                "Ein Zuschlag ausschließlich auf Materialkosten",
                "Fixkosten werden den Produkten direkt zugeordnet",
              ],
              correct: 1,
              explain:
                "Gemeinkosten (nicht direkt zuordenbar) werden über Zuschlagssätze verteilt.",
            },
            {
              id: "imp_wirt2-kl-1_7",
              q: "Einzel- vs. Gemeinkosten?",
              options: [
                "Beide Begriffe bezeichnen dieselbe Kostenart",
                "Gemeinkosten sind stets niedriger als Einzelkosten",
                "Einzelkosten direkt zuordenbar, Gemeinkosten nicht",
                "Einzelkosten sind immer Fixkosten, Gemeinkosten variabel",
              ],
              correct: 2,
              explain:
                "Einzelkosten: Direkt einem Produkt zuordenbar (Material). Gemeinkosten: Nicht direkt zuordenbar (Miete, IT).",
            },
            {
              id: "imp_wirt2-kl-1_8",
              q: "Kostenstellenrechnung: Wo?",
              options: [
                "Wie viel?",
                "Welche Kosten?",
                "Wann?",
                "WO fallen Kosten an? (Abteilungen)",
              ],
              correct: 3,
              explain: "Kostenstellen: Welche Abteilung verursacht welche Kosten?",
            },
            {
              id: "imp_wirt2-kl-1_9",
              q: "BAB = ?",
              options: [
                "Backup Analysis Board",
                "Business Account Balance",
                "Betriebsabrechnungsbogen",
                "Basis-Analyse-Bericht",
              ],
              correct: 2,
              explain: "Betriebsabrechnungsbogen: Verteilt Gemeinkosten auf Kostenstellen.",
            },
          ],
        },
      ],
    },
    {
      id: "pol3-digi",
      title: "Digitalisierung & Gesellschaft",
      lessons: [
        {
          id: "pol3-di-1",
          title: "Digitale Transformation & Ethik",
          content: [
            { type: "heading", value: "Digitalisierung der Arbeitswelt" },
            {
              type: "text",
              value:
                "New Work: Remote Work, flexible Arbeitszeiten, Vertrauensarbeitszeit. Plattformökonomie: Gig Work, Crowd Working. KI am Arbeitsplatz: Automatisierung, Assistenzsysteme, ethische Fragen. Datenschutz vs. Überwachung: Mitarbeiter-Monitoring, BYOD-Policies.",
            },
            { type: "heading", value: "IT-Ethik" },
            {
              type: "text",
              value:
                "Verantwortung des FiSi: Zugang zu sensiblen Daten/Systemen verlangt ethisches Handeln. Whistleblowing: Hinweisgeberschutzgesetz. Nachhaltigkeit: Green IT, Energieeffizienz, Kreislaufwirtschaft bei Hardware.",
            },
            { type: "heading", value: "Digitalisierung konkret: Chancen und Risiken abwägen" },
            {
              type: "text",
              value:
                "„Digitale Transformation“ heißt nicht nur neue Technik, sondern veränderte Geschäftsmodelle, Arbeitsformen und Machtverhältnisse. Für die WISO-Prüfung musst du beide Seiten argumentieren können. Chancen: neue Geschäftsmodelle (Plattformen, Abo statt Kauf), Produktivität durch Automatisierung, ortsunabhängiges Arbeiten, bessere Datengrundlage für Entscheidungen, Teilhabe (Bildung, Behördengänge online). Risiken: Wegfall von Routinetätigkeiten und Qualifikationsdruck, digitale Spaltung (Alter, Einkommen, Land/Stadt), Marktmacht weniger Plattformkonzerne, Desinformation und Filterblasen, Überwachungspotenzial und Datenschutz, Energiebedarf der Rechenzentren.",
            },
            { type: "heading", value: "Ethische Leitfragen für IT-Berufe" },
            {
              type: "list",
              value: [
                "Verantwortung: Wer haftet, wenn ein automatisiertes System falsch entscheidet – Entwickler, Betreiber, Nutzer?",
                "Transparenz: Können Betroffene nachvollziehen, warum ein Algorithmus sie ablehnt (Kredit, Bewerbung)?",
                "Datenminimierung: Nur weil Daten erhebbar sind, dürfen und sollten sie nicht erhoben werden.",
                "Barrierefreiheit: Digitale Angebote müssen für alle nutzbar sein – auch mit Einschränkungen.",
                "Nachhaltigkeit: Rebound-Effekt bedenken – Effizienzgewinne werden oft durch Mehrverbrauch aufgefressen.",
              ],
            },
            { type: "heading", value: "Übungsaufgabe: Zwei Seiten argumentieren" },
            {
              type: "text",
              value:
                "Deine Stadtverwaltung will alle Bürgerdienste ausschließlich online anbieten und die Schalter schließen. Nenne je zwei stichhaltige Argumente dafür und dagegen und formuliere einen Kompromissvorschlag.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: Dafür: (1) kürzere Bearbeitungszeiten und 24/7-Erreichbarkeit statt Amtszeiten, (2) Personal- und Kosteneinsparung, die in Leistungen fließen kann. Dagegen: (1) digitale Spaltung – ältere oder einkommensschwache Menschen ohne Gerät/Kompetenz werden ausgeschlossen, (2) Ausfallrisiko und IT-Sicherheit: Bei Störung oder Angriff steht die gesamte Verwaltung. Kompromiss: Online-First mit assistiertem Zugang – Dienste digital als Standard, aber ein besetzter Schalter/Telefonservice und Terminals mit Hilfestellung bleiben; Übergangsfristen und Schulungsangebote (z. B. Volkshochschule) begleiten die Umstellung.",
            },
          ],
          quiz: [
            {
              id: "imp_pol3-di-1_0",
              q: "BYOD steht für?",
              options: [
                "Buy Your Own Desktop",
                "Back Your Own Data",
                "Build Your Own Device",
                "Bring Your Own Device",
              ],
              correct: 3,
              explain: "Bring Your Own Device = private Geräte dienstlich nutzen.",
            },
            {
              id: "imp_pol3-di-1_1",
              q: "BYOD = ?",
              options: [
                "Buy Your Own Desktop",
                "Build Your Own Device",
                "Back Your Own Data",
                "Bring Your Own Device",
              ],
              correct: 3,
              explain: "Private Geräte dienstlich nutzen.",
            },
            {
              id: "imp_pol3-di-1_2",
              q: "Green IT?",
              options: [
                "Nur erneuerbare Energie",
                "Grüne Gehäuse",
                "Kostenlose Software",
                "Energieeffizienz, Nachhaltigkeit bei IT",
              ],
              correct: 3,
              explain: "Energieeffiziente IT, nachhaltige Beschaffung, Recycling.",
            },
            {
              id: "imp_pol3-di-1_3",
              q: "Hinweisgeberschutzgesetz schützt?",
              options: [
                "AG vor Klagen",
                "Whistleblower, die Missstände melden",
                "Kunden",
                "Hacker",
              ],
              correct: 1,
              explain: "Schutz für Personen, die auf Gesetzesverstöße im Unternehmen hinweisen.",
            },
            {
              id: "imp_pol3-di-1_4",
              q: "Gig Work?",
              options: [
                "Ausbildung",
                "Festanstellung",
                "Zeitarbeit",
                "Kurzfristige Aufträge über Plattformen",
              ],
              correct: 3,
              explain: "Gig Economy: Kurzfristige Jobs über digitale Plattformen (Uber, Fiverr).",
            },
            {
              id: "imp_pol3-di-1_5",
              q: "Algorithmen-Ethik?",
              options: [
                "Ein rein technisches Optimierungsthema für Entwickler",
                "Ein Spezialgebiet, das nur Juristen betrifft",
                "Fairness, Transparenz, Diskriminierungsfreiheit bei KI",
                "Für die Praxis der KI-Entwicklung ohne Relevanz",
              ],
              correct: 2,
              explain: "KI/Algorithmen müssen fair, transparent und nicht-diskriminierend sein.",
            },
            {
              id: "imp_pol3-di-1_6",
              q: "Plattformökonomie?",
              options: ["Offline", "Gaming", "Vermittler: Uber, Airbnb, Amazon", "Social Media"],
              correct: 2,
              explain: "Anbieter+Nachfrager.",
            },
            {
              id: "imp_pol3-di-1_7",
              q: "Datensouveränität?",
              options: ["Nur Firmen", "Nur DSGVO", "Staat", "Selbst über eigene Daten bestimmen"],
              correct: 3,
              explain: "Selbstbestimmung.",
            },
            {
              id: "imp_pol3-di-1_8",
              q: "KI-Bias?",
              options: ["Update", "Feature", "Fehler", "Diskriminierung durch Trainingsdaten"],
              correct: 3,
              explain: "Vorurteile.",
            },
            {
              id: "imp_pol3-di-1_9",
              q: "Recht auf Reparatur?",
              options: [
                "EU: Hersteller müssen ermöglichen",
                "Gibt's nicht",
                "Nur Auto",
                "Nur Apple",
              ],
              correct: 0,
              explain: "Ersatzteile.",
            },
            {
              id: "imp_pol3-di-1_10",
              q: "Was regelt die EU-KI-Verordnung (AI Act) im Kern?",
              options: [
                "Risikobasierte Pflichten: verbotene Praktiken, Hochrisiko-Anforderungen, Transparenzpflichten",
                "Ein vollständiges Verbot sämtlicher KI-Systeme im europäischen Binnenmarkt",
                "Ausschließlich Fördermittel und Forschungsprogramme für europäische KI-Start-ups",
                "Ausschließlich den Einsatz physischer Industrieroboter in Fabrikhallen",
              ],
              correct: 0,
              explain:
                "Je höher das Risiko (z. B. Bewerbungsauswahl, kritische Infrastruktur), desto strenger die Pflichten – inkl. Dokumentation und menschlicher Aufsicht.",
            },
            {
              id: "imp_pol3-di-1_11",
              q: "Was ist algorithmischer Bias?",
              options: [
                "Gezielt geschaltete Werbeanzeigen, die Nutzern absichtlich passende Produkte anzeigen",
                "Ein Verschlüsselungsverfahren, das Daten mit einem algorithmischen Schlüssel unlesbar macht",
                "Ein Hardwaredefekt im Prozessor, der bei Berechnungen zufällige Rechenfehler verursacht",
                "Systematische Verzerrung von Ergebnissen, oft durch einseitige Trainingsdaten",
              ],
              correct: 3,
              explain:
                "Beispiel: Ein Recruiting-Modell benachteiligt Gruppen, die in historischen Daten unterrepräsentiert waren – Prüfpflicht vor dem Einsatz.",
            },
            {
              id: "imp_pol3-di-1_12",
              q: "Was beschreibt der Begriff 'digitale Spaltung'?",
              options: [
                "Ungleichen Zugang zu digitaler Infrastruktur und Kompetenzen",
                "Die architektonische Trennung von Hardware und Software",
                "Bildschirme mit gebrochenem Panel oder Pixelfehlern",
                "Einen Festplattenfehler durch defekte Sektoren",
              ],
              correct: 0,
              explain:
                "Stadt/Land, Alter, Einkommen. Folgen: ungleiche Teilhabe an Bildung, Arbeit und Verwaltung – politisches Dauerthema (Breitbandausbau, Schul-IT).",
            },
            {
              id: "imp_pol3-di-1_13",
              q: "Was kennzeichnet Plattformökonomie?",
              options: [
                "Ein Steuermodell, bei dem digitale Umsätze pauschal im Land des Firmensitzes versteuert werden",
                "Den gewerblichen Handel mit Bahnsteig- und Gleisanlagen zwischen Verkehrsunternehmen",
                "Klassische Produktionsbetriebe, die Waren selbst herstellen und direkt an Endkunden verkaufen",
                "Plattformen vermitteln zwischen Anbietern und Nachfragern und profitieren von Netzwerkeffekten",
              ],
              correct: 3,
              explain:
                "Netzwerkeffekte begünstigen Monopolbildung ('the winner takes it all') – Ansatzpunkt für DMA-Regulierung.",
            },
            {
              id: "imp_pol3-di-1_14",
              q: "Welche soziale Frage wirft die Gig-Economy auf?",
              options: [
                "Scheinselbstständigkeit und fehlende soziale Absicherung von Plattformarbeitern",
                "Überfüllte Großraumbüros, weil Plattformen alle Fahrer zentral unterbringen",
                "Zu großzügige Urlaubsansprüche der Plattformarbeiter gegenüber Festangestellten",
                "Zu hohe Festgehälter, da Plattformen tariflich über dem Branchenschnitt zahlen",
              ],
              correct: 0,
              explain:
                "EU-Plattformarbeits-Richtlinie und Gerichte arbeiten an der Einordnung: selbstständig oder arbeitnehmerähnlich?",
            },
            {
              id: "imp_pol3-di-1_15",
              q: "Warum ist der Energieverbrauch von Rechenzentren ein politisches Thema?",
              options: [
                "Rechenzentren verbrauchen kaum Strom und sind daher unproblematisch",
                "Nur aus optischen Gründen wegen der Größe der Gebäude",
                "Wachsender Strombedarf (u. a. durch KI) trifft auf Klimaziele",
                "Weil Strom unbegrenzt verfügbar ist und nichts kostet",
              ],
              correct: 2,
              explain:
                "Daher Effizienzpflichten und Abwärmenutzung. Das Energieeffizienzgesetz setzt PUE-Vorgaben und Abwärme-Pflichten – Beratungsrelevanz bei RZ-Projekten.",
            },
            {
              id: "imp_pol3-di-1_16",
              q: "Was will das Onlinezugangsgesetz (OZG) erreichen?",
              options: [
                "Verwaltungsleistungen von Bund, Ländern und Kommunen digital zugänglich machen",
                "Die Beschleunigung des Briefverkehrs zwischen Behörden durch garantierte Postlaufzeiten",
                "Die vollständige Abschaffung der örtlichen Ämter und Bürgerbüros bis zum Jahresende",
                "Ein Verbot für Behörden, eigene Internetauftritte ohne Bundesfreigabe zu betreiben",
              ],
              correct: 0,
              explain:
                "Die Umsetzung stockt – Themen wie einheitliche Nutzerkonten und Once-Only-Prinzip bleiben Dauerbaustellen.",
            },
            {
              id: "imp_pol3-di-1_17",
              q: "Welche urheberrechtliche Frage stellen generative KI-Systeme?",
              options: [
                "Keine – KI-Systeme genießen eine gesetzliche Schrankenregelung, die Training und Ausgaben vollständig freistellt",
                "Ob Maschinen für ihre erzeugten Werke Steuern zahlen müssen und wie diese Einnahmen verbucht werden",
                "Nur die Wahl geschützter Schriftarten in generierten Texten, alle übrigen Inhalte sind unproblematisch",
                "Ob Training mit geschützten Werken und die erzeugten Ausgaben Rechte verletzen bzw. wem Ergebnisse 'gehören'",
              ],
              correct: 3,
              explain:
                "Laufende Verfahren und EU-Transparenzpflichten (Trainingsdaten) prägen die Rechtslage – im Kundeneinsatz Lizenz-/Compliance-Fragen klären.",
            },
            {
              id: "imp_pol3-di-1_18",
              q: "Wie verändert Automatisierung den Arbeitsmarkt laut gängiger Einschätzung?",
              options: [
                "Nur körperliche Arbeit ist betroffen, Bürojobs bleiben unberührt",
                "Es ändert sich nichts, der Arbeitsmarkt bleibt unverändert",
                "Routinetätigkeiten werden ersetzt, neue Tätigkeitsprofile entstehen",
                "Sämtliche Erwerbsarbeit verschwindet ersatzlos innerhalb weniger Jahre",
              ],
              correct: 2,
              explain:
                "Weiterbildung wird entscheidend. Polarisierung statt Totalverlust: Genau hier setzen Umschulungs- und Qualifizierungsprogramme an.",
            },
            {
              id: "imp_pol3-di-1_19",
              q: "Was bedeutet digitale Souveränität für Staat und Unternehmen?",
              options: [
                "Der Begriff ist lediglich ein anderes Wort für Datenschutz im Sinne der DSGVO",
                "Die vollständige Abschottung staatlicher und betrieblicher Netze vom weltweiten Internet",
                "Selbstbestimmte Kontrolle über kritische digitale Technologien, Daten und Abhängigkeiten",
                "Die Verpflichtung, sämtliche Software im eigenen Haus vollständig selbst zu entwickeln",
              ],
              correct: 2,
              explain:
                "Praktisch: Cloud-Standortfragen, Open Source in der Verwaltung, Lieferkettenabhängigkeiten bei Chips – auch Vertriebsargument im B2B.",
            },
          ],
        },
      ],
    },
    {
      id: "wirt3-inv",
      title: "Investition & Finanzierung",
      lessons: [
        {
          id: "wirt3-iv-1",
          title: "Investitionsrechnung",
          content: [
            { type: "heading", value: "Statische Verfahren" },
            {
              type: "text",
              value:
                "Kostenvergleichsrechnung: Welche Alternative hat geringere Kosten pro Periode? Gewinnvergleichsrechnung: Welche Alternative bringt mehr Gewinn? Rentabilitätsrechnung: Gewinn / eingesetztes Kapital x 100%. Amortisationsrechnung: Anschaffungskosten / jährlicher Rückfluss = Jahre bis Break-Even.",
            },
            { type: "heading", value: "Dynamische Verfahren" },
            {
              type: "text",
              value:
                "Kapitalwertmethode (NPV): Alle künftigen Zahlungen auf heute abzinsen. NPV > 0 = Investition lohnt. Interner Zinsfuß: Zinssatz, bei dem NPV = 0. Berücksichtigt Zeitwert des Geldes.",
            },
            { type: "heading", value: "Make or Buy" },
            {
              type: "text",
              value:
                "Eigenfertigung vs. Fremdbezug. Vergleich: Variable Kosten Eigenfertigung vs. Einkaufspreis. Fixkosten berücksichtigen. Qualitative Faktoren: Know-how, Abhängigkeit, Lieferzeit, Qualität.",
            },
            {
              type: "code",
              value:
                "BEISPIEL Amortisationsrechnung:\nInvestition: 20.000€\nJährlicher Rückfluss (Einsparung): 5.000€\n\nAmortisationszeit = 20.000 / 5.000 = 4 Jahre\n\nBei zwei Alternativen: die mit der KÜRZEREN\nAmortisationszeit ist (statisch betrachtet) besser,\nweil das Kapital schneller wieder verfügbar ist.",
            },
            { type: "heading", value: "Investitionsrechnung: die Verfahren im Überblick" },
            {
              type: "text",
              value:
                "Investitionsentscheidungen begründet man rechnerisch – die Prüfung verlangt meist die statischen Verfahren: KOSTENVERGLEICH (welche Alternative verursacht geringere Gesamtkosten pro Jahr/Stück? Achtung: kalkulatorische Abschreibung und Zinsen einrechnen), GEWINNVERGLEICH (Kosten UND Erlöse), RENTABILITÄTSRECHNUNG (Gewinn ÷ eingesetztes Kapital × 100 – vergleichbar mit anderen Anlagen) und AMORTISATIONSRECHNUNG (Anschaffung ÷ jährlicher Rückfluss = Jahre bis zur Rückzahlung – das Risiko-Maß: je kürzer, desto sicherer). Merke die Schwäche aller statischen Verfahren: Sie ignorieren den Zeitpunkt der Zahlungen; dynamische Verfahren (Kapitalwert) zinsen ab, sind aber seltener gefragt.",
            },
            { type: "heading", value: "Übungsaufgabe: Serverkauf durchrechnen" },
            {
              type: "text",
              value:
                "Zwei Alternativen: Server A kostet 12.000 € (Nutzungsdauer 4 Jahre, Betrieb 1.500 €/Jahr), Server B 8.000 € (4 Jahre, Betrieb 2.800 €/Jahr). a) Kostenvergleich pro Jahr. b) Die durch B nötige Mehrarbeit kostet zusätzlich 20 Personenstunden/Jahr à 42 € – ändert das die Entscheidung? c) Amortisation der Mehrinvestition von A gegenüber B.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: a) A: 12.000/4 + 1.500 = 4.500 €/Jahr · B: 8.000/4 + 2.800 = 4.800 €/Jahr → A ist 300 €/Jahr günstiger. b) B verteuert sich um 20 × 42 = 840 €/Jahr auf 5.640 € → A gewinnt noch deutlicher (1.140 €/Jahr Vorteil). c) Mehrinvestition 4.000 € ÷ jährliche Ersparnis 1.140 € ≈ 3,5 Jahre – amortisiert sich innerhalb der Nutzungsdauer → Empfehlung A. Bewertet wird der saubere Ansatz: AfA einrechnen, alle Kostenarten erfassen, Ergebnis interpretieren.",
            },
          ],
          quiz: [
            {
              id: "imp_wirt3-iv-1_0",
              q: "NPV > 0 bedeutet?",
              options: ["Zinssatz zu hoch", "Break-Even", "Verlust", "Investition lohnt sich"],
              correct: 3,
              explain:
                "Positiver Kapitalwert = Investition erwirtschaftet mehr als die Kapitalkosten.",
            },
            {
              id: "imp_wirt3-iv-1_1",
              q: "Amortisationsdauer berechnen?",
              options: [
                "Kapital x Zinssatz",
                "Anschaffung / jährl. Rückfluss",
                "Gewinn / Umsatz",
                "Umsatz / Kosten",
              ],
              correct: 1,
              explain: "Anschaffungskosten / jährlicher Rückfluss = Amortisationsdauer.",
            },
            {
              id: "imp_wirt3-iv-1_2",
              q: "Amortisationsdauer?",
              options: [
                "Technische Lebensdauer der Anlage bis zum Verschleiß",
                "Vom Hersteller zugesagte Garantiezeit der Investition",
                "Laufzeit des Kredits, mit dem die Anlage finanziert wurde",
                "Zeit, bis Investition sich durch Rückflüsse bezahlt hat",
              ],
              correct: 3,
              explain: "Ab wann hat die Investition sich rentiert?",
            },
            {
              id: "imp_wirt3-iv-1_3",
              q: "Statische Investitionsrechnung?",
              options: [
                "Sie ist stets genauer als dynamische Verfahren",
                "Durchschnittswerte, ignoriert Zeitpunkt der Zahlungen",
                "Sie berücksichtigt den Zeitwert des Geldes per Abzinsung",
                "Sie ist nur für Immobilien-Investitionen zulässig",
              ],
              correct: 1,
              explain: "Statisch: Einfacher, aber ignoriert, wann Zahlungen anfallen.",
            },
            {
              id: "imp_wirt3-iv-1_4",
              q: "Kapitalwertmethode?",
              options: [
                "Nur für Aktien",
                "Statisch",
                "Dynamisch: Alle Zahlungen auf heute abzinsen",
                "Nur Kosten",
              ],
              correct: 2,
              explain:
                "NPV/Kapitalwert: Künftige Zahlungen werden auf den heutigen Wert abgezinst.",
            },
            {
              id: "imp_wirt3-iv-1_5",
              q: "Kapitalwert < 0 bedeutet?",
              options: [
                "Investition lohnt sich trotzdem immer",
                "Rendite liegt unter dem Kalkulationszins – besser nicht investieren",
                "Break-Even ist erreicht",
                "Der Gewinn ist steuerfrei",
              ],
              correct: 1,
              explain:
                "Negativer Kapitalwert: Die Investition erwirtschaftet weniger als die geforderte Mindestverzinsung. (Positiver Kapitalwert = lohnt sich – eigene Frage.)",
            },
            {
              id: "imp_wirt3-iv-1_6",
              q: "ROI = 25 % bedeutet?",
              options: [
                "25 EUR Umsatz",
                "Amortisation in 25 Jahren",
                "25 Cent Gewinn pro investiertem Euro",
                "Verlust",
              ],
              correct: 2,
              explain: "25% ROI = Investition bringt 25 % Rendite.",
            },
            {
              id: "imp_wirt3-iv-1_7",
              q: "Statisch: Kostenvergleich?",
              options: [
                "Wann hat sich die Investition selbst bezahlt gemacht?",
                "Welche Investition erzielt die höheren Erlöse pro Jahr?",
                "Welche Investition hat niedrigere jährliche Kosten?",
                "Welchen Barwert haben alle künftigen Zahlungen heute?",
              ],
              correct: 2,
              explain: "Kostenvergleichsrechnung: Alternative mit niedrigsten Jahreskosten.",
            },
            {
              id: "imp_wirt3-iv-1_8",
              q: "Dynamisch vs. statisch?",
              options: [
                "Dynamische Verfahren sind rechnerisch deutlich einfacher",
                "Statische Verfahren liefern stets genauere Ergebnisse",
                "Beide Verfahren führen immer zum selben Ergebnis",
                "Dynamisch berücksichtigt Zeitwert des Geldes (Abzinsung)",
              ],
              correct: 3,
              explain: "Dynamisch: Wann Zahlungen anfallen ist wichtig (Barwert).",
            },
            {
              id: "imp_wirt3-iv-1_9",
              q: "Interner Zinsfuß?",
              options: [
                "Zinssatz der Bank",
                "Inflation",
                "Leitzins",
                "Zinssatz, bei dem Kapitalwert = 0",
              ],
              correct: 3,
              explain: "Bei diesem Zinssatz ist die Investition gerade noch rentabel.",
            },
          ],
        },
      ],
    },
    {
      id: "wirt-gp",
      title: "Geschäftsprozesse (EPK)",
      lessons: [
        {
          id: "wiso-epk-1",
          title: "EPK – Geschäftsprozesse als Ereignisgesteuerte Prozesskette modellieren",
          content: [
            {
              type: "text",
              value:
                "Die Ereignisgesteuerte Prozesskette (EPK) ist neben UML-Aktivitätsdiagrammen das wichtigste Werkzeug, um Geschäftsprozesse grafisch darzustellen. Im Wirtschaftsteil der AP2 (und gelegentlich in der AP1) musst du EPKs lesen, Fehler darin finden oder kleine Prozesse selbst modellieren. Die EPK wurde von August-Wilhelm Scheer entwickelt und ist Bestandteil der ARIS-Methode, die viele Unternehmen zur Prozessdokumentation nutzen.",
            },
            { type: "heading", value: "Die Grundelemente" },
            {
              type: "list",
              value: [
                "Ereignis (Sechseck): Ein eingetretener Zustand, passiv formuliert – „Bestellung ist eingegangen“, „Rechnung ist geprüft“. Ereignisse tun nichts, sie beschreiben, DASS etwas der Fall ist.",
                "Funktion (abgerundetes Rechteck): Eine Tätigkeit, aktiv formuliert – „Bestellung prüfen“, „Rechnung buchen“. Funktionen kosten Zeit und Ressourcen.",
                "Konnektoren (Kreis mit Symbol): Verknüpfen Pfade. UND (∧): alle Pfade laufen parallel. ODER (∨): mindestens ein Pfad. XOR (×): genau ein Pfad – entweder/oder.",
                "Organisationseinheit (Ellipse/Oval mit Strich): Wer führt die Funktion aus? – „Einkauf“, „Support 1st-Level“. Wird an Funktionen angehängt (dann spricht man von einer erweiterten EPK, eEPK).",
                "Informationsobjekt (Rechteck): Welche Daten/Dokumente werden benutzt oder erzeugt? – „Kundenstammdaten“, „Lieferschein“.",
              ],
            },
            { type: "heading", value: "Die Regeln – hier lauern die Prüfungsfragen" },
            {
              type: "list",
              value: [
                "Eine EPK beginnt und endet immer mit einem Ereignis (Startereignis, Endereignis).",
                "Ereignisse und Funktionen wechseln sich ab: Auf ein Ereignis folgt eine Funktion, auf eine Funktion ein Ereignis. Zwei Funktionen oder zwei Ereignisse direkt hintereinander sind ein Modellierungsfehler.",
                "Nach einem Ereignis darf KEIN ODER- oder XOR-Konnektor zur Verzweigung stehen: Ereignisse können nicht entscheiden. Entscheidungen trifft immer eine Funktion (z. B. „Bonität prüfen“), erst danach verzweigt XOR in „Bonität ausreichend“ / „Bonität nicht ausreichend“.",
                "Ein Konnektor, der einen Pfad aufspaltet, sollte durch einen gleichartigen Konnektor wieder zusammengeführt werden (öffnen und schließen paarweise).",
              ],
            },
            {
              type: "code",
              value:
                "Beispiel (textuell notiert):\n\n(E) Störungsmeldung ist eingegangen\n  -> [F] Störung kategorisieren        {Org: Service Desk}\n  -> (E) Störung ist kategorisiert\n  -> [F] Priorität prüfen\n  -> XOR-Verzweigung:\n     Pfad A: (E) Prio hoch  -> [F] Sofort eskalieren -> (E) 2nd-Level ist informiert\n     Pfad B: (E) Prio normal -> [F] Ticket einplanen  -> (E) Ticket ist eingeplant\n  -> XOR-Zusammenführung\n  -> [F] Kunden informieren             {Info: Ticketdaten}\n  -> (E) Kunde ist informiert",
            },
            {
              type: "note",
              value:
                "Typische Prüfungsfehler zum Finden: Prozess beginnt mit einer Funktion; zwei Funktionen hintereinander; XOR direkt nach einem Ereignis als Verzweigung; Verzweigung mit UND geöffnet, aber mit XOR geschlossen. Wenn du eine EPK korrigieren sollst: erst Start/Ende prüfen, dann den Wechsel Ereignis/Funktion, dann die Konnektoren.",
            },
            { type: "heading", value: "EPK vs. UML-Aktivitätsdiagramm" },
            {
              type: "text",
              value:
                "Beide stellen Abläufe dar. Die EPK kommt aus der Betriebswirtschaft (Prozessdokumentation, ARIS, SAP-Umfeld) und erzwingt den Ereignis-Funktions-Wechsel. Das Aktivitätsdiagramm kommt aus der Softwaretechnik (UML), kennt Start-/Endknoten, Entscheidungsrauten und Swimlanes und ist bei Entwicklern verbreiteter. In der Prüfung gilt: Nutze die Notation, die die Aufgabe verlangt – und mische sie nicht.",
            },
            { type: "heading", value: "Übungsaufgabe" },
            {
              type: "text",
              value:
                "Modellieren Sie als EPK (textuell genügt): Ein Kunde sendet eine Bestellung. Der Vertrieb erfasst die Bestellung. Danach wird die Verfügbarkeit geprüft. Ist die Ware verfügbar, wird sie versendet und der Prozess endet. Ist sie nicht verfügbar, wird eine Nachbestellung ausgelöst und der Kunde informiert; der Prozess endet mit dem informierten Kunden. Kennzeichnen Sie Ereignisse, Funktionen, den Konnektor und die ausführenden Organisationseinheiten.",
            },
            {
              type: "solution",
              value:
                "(E) Bestellung ist eingegangen\n-> [F] Bestellung erfassen {Org: Vertrieb}\n-> (E) Bestellung ist erfasst\n-> [F] Verfügbarkeit prüfen {Org: Lager}\n-> XOR:\n   Pfad A: (E) Ware ist verfügbar -> [F] Ware versenden {Org: Versand} -> (E) Ware ist versendet (Endereignis)\n   Pfad B: (E) Ware ist nicht verfügbar -> [F] Nachbestellung auslösen {Org: Einkauf} -> (E) Nachbestellung ist ausgelöst -> [F] Kunden informieren {Org: Vertrieb} -> (E) Kunde ist informiert (Endereignis)\n\nWichtige Punkte für volle Punktzahl: Start- und Endelemente sind Ereignisse; nach der Funktion „Verfügbarkeit prüfen“ (nicht nach einem Ereignis!) verzweigt XOR; Ereignisse passiv, Funktionen aktiv formuliert; Organisationseinheiten an den Funktionen.",
            },
            {
              type: "links",
              value: [
                [
                  "Wikipedia: Ereignisgesteuerte Prozesskette",
                  "https://de.wikipedia.org/wiki/Ereignisgesteuerte_Prozesskette",
                ],
                [
                  "FI-Prüfungsvorbereitung: EPK",
                  "https://fachinformatikerpruefungsvorbereitung.de/abschlusspr%C3%BCfungteil2wirtschaft/epk/epk/",
                ],
              ],
            },
            { type: "heading", value: "Einordnung: Ablauforganisation" },
            {
              type: "text",
              value:
                "Die EPK ist DAS Werkzeug der Ablauforganisation – sie beschreibt, WAS in welcher Reihenfolge geschieht (Dynamik). Ihr Gegenstück ist die Aufbauorganisation: WER mit welchen Befugnissen zu wem gehört (Statik, dargestellt im Organigramm). Beide greifen ineinander: Jede EPK-Funktion braucht eine zuständige Organisationseinheit aus dem Organigramm. Mehr dazu in der Lektion „Führung, Beurteilung & Arbeitszeugnis“.",
            },
          ],
          quiz: [
            {
              id: "imp_wiso-epk-1_0",
              q: "Womit beginnt und endet eine korrekte EPK?",
              options: [
                "Mit einer Funktion",
                "Mit einem Ereignis",
                "Mit einem Konnektor",
                "Mit einer Organisationseinheit",
              ],
              correct: 1,
              explain:
                "Start und Ende sind immer Ereignisse – Zustände, die eingetreten sind („Bestellung ist eingegangen“).",
            },
            {
              id: "imp_wiso-epk-1_1",
              q: "Warum darf nach einem Ereignis kein XOR zur Verzweigung stehen?",
              options: [
                "XOR ist in EPKs generell verboten",
                "Ereignisse können keine Entscheidungen treffen",
                "XOR darf nur am Prozessende stehen",
                "Ereignisse dürfen nur mit UND verknüpft werden",
              ],
              correct: 1,
              explain:
                "Ereignisse sind passive Zustände. Entscheiden kann nur eine Funktion (z. B. „Bonität prüfen“) – erst nach ihr darf XOR verzweigen.",
            },
            {
              id: "imp_wiso-epk-1_2",
              q: "Welches Element beschreibt eine aktive Tätigkeit?",
              options: ["Ereignis", "Funktion", "Informationsobjekt", "Konnektor"],
              correct: 1,
              explain:
                "Funktionen (abgerundete Rechtecke) sind Tätigkeiten wie „Rechnung prüfen“ – sie verbrauchen Zeit und Ressourcen.",
            },
            {
              id: "imp_wiso-epk-1_3",
              q: "„Bestellung erfassen“ und direkt danach „Verfügbarkeit prüfen“ ohne Zwischenelement – was ist der Fehler?",
              options: [
                "Kein Fehler",
                "Zwei Ereignisse hintereinander",
                "Zwei Funktionen hintereinander",
                "Falscher Konnektor",
              ],
              correct: 2,
              explain:
                "Dazwischen fehlt ein Ereignis. Ereignisse und Funktionen müssen sich abwechseln. Zwischen die beiden Funktionen gehört z. B. „(E) Bestellung ist erfasst“.",
            },
            {
              id: "imp_wiso-epk-1_g_ab1",
              q: "Die EPK ist ein Werkzeug der …",
              options: ["Aufbauorganisation", "Ablauforganisation", "Inventur", "Bilanzierung"],
              correct: 1,
              explain:
                "Prozesse in Reihenfolge = Ablauforganisation; die Struktur (Organigramm) ist Aufbauorganisation.",
            },
          ],
        },
      ],
    },
    {
      id: "pol4-staat",
      title: "Staat & Politik in Deutschland",
      lessons: [
        {
          id: "wiso-staat-1",
          title: "Grundgesetz & Staatsaufbau",
          content: [
            { type: "heading", value: "Das Grundgesetz: mehr als ein Gesetz" },
            {
              type: "text",
              value:
                "Das Grundgesetz (GG) von 1949 ist die Verfassung Deutschlands – die oberste Rechtsordnung, an der sich jedes andere Gesetz messen lassen muss. Ganz vorn stehen die Grundrechte (Art. 1–19): Menschenwürde (Art. 1, unantastbar), freie Entfaltung der Persönlichkeit, Gleichheit vor dem Gesetz, Meinungs-, Presse- und Informationsfreiheit (Art. 5), Versammlungs- und Berufsfreiheit. Grundrechte sind in erster Linie Abwehrrechte des Einzelnen GEGEN den Staat. Für dich im IT-Alltag besonders greifbar: Aus Art. 1 und 2 hat das Bundesverfassungsgericht das Recht auf informationelle Selbstbestimmung abgeleitet – die Wurzel des deutschen Datenschutzrechts und damit von allem, was du in LF4 zur DSGVO lernst.",
            },
            { type: "heading", value: "Die fünf Staatsstrukturprinzipien (Art. 20)" },
            {
              type: "text",
              value:
                "Artikel 20 GG legt fest, WIE dieser Staat gebaut ist: Republik (Staatsoberhaupt wird gewählt, keine Monarchie) · Demokratie (alle Staatsgewalt geht vom Volke aus) · Rechtsstaat (der Staat ist selbst an Recht und Gesetz gebunden, unabhängige Gerichte) · Sozialstaat (der Staat sichert ein menschenwürdiges Existenzminimum und sozialen Ausgleich) · Bundesstaat (Föderalismus: die Länder haben eigene Kompetenzen, z. B. Bildung und Polizei – deshalb sind auch Berufsschulen Ländersache und Lehrpläne je Bundesland verschieden). Die Ewigkeitsklausel (Art. 79 Abs. 3) schützt Art. 1 und Art. 20 vor jeder Verfassungsänderung – selbst mit Zweidrittelmehrheit unantastbar.",
            },
            { type: "heading", value: "Gewaltenteilung: wer kontrolliert wen?" },
            {
              type: "text",
              value:
                "Staatsgewalt wird auf drei Gewalten verteilt, die sich gegenseitig kontrollieren: Legislative (Gesetzgebung: Bundestag und Bundesrat) · Exekutive (ausführende Gewalt: Bundesregierung, Verwaltung, Polizei) · Judikative (Rechtsprechung: unabhängige Gerichte bis hinauf zum Bundesverfassungsgericht). Zusätzlich wirkt die vertikale Gewaltenteilung zwischen Bund und Ländern. Zweck: Machtmissbrauch verhindern – keine Stelle im Staat soll alles allein entscheiden können.",
            },
            { type: "heading", value: "Die Verfassungsorgane im Überblick" },
            {
              type: "text",
              value:
                "Bundestag: das direkt gewählte Parlament – beschließt Gesetze und den Haushalt, wählt und kontrolliert die Regierung. · Bundesrat: Vertretung der 16 Landesregierungen – wirkt an der Gesetzgebung mit (Stimmen je nach Einwohnerzahl 3–6, nur einheitlich abgebbar). · Bundesregierung: Bundeskanzler(in) bestimmt die Richtlinien der Politik, Minister leiten ihre Ressorts. · Bundespräsident(in): Staatsoberhaupt mit überwiegend repräsentativen Aufgaben, fertigt Gesetze aus; gewählt von der Bundesversammlung. · Bundesverfassungsgericht: wacht über das Grundgesetz, kann Gesetze für nichtig erklären; jeder kann nach Ausschöpfung des Rechtswegs Verfassungsbeschwerde erheben.",
            },
            {
              type: "note",
              value:
                "Merkhilfe Staatsstrukturprinzipien: „ReDe RiSo Bund“ – REpublik, DEmokratie, RechtsStaat (Ri), SOzialstaat, BUNDesstaat. Und: Ewigkeitsklausel = Art. 79 (3) schützt Art. 1 + 20.",
            },
            { type: "heading", value: "Übungsaufgabe: Verfassungsorgane zuordnen" },
            {
              type: "text",
              value:
                "Ordne zu, welches Verfassungsorgan gemeint ist: a) erklärt ein beschlossenes Gesetz für verfassungswidrig · b) bestimmt die Richtlinien der Politik · c) vertritt die Landesregierungen im Bund · d) fertigt Gesetze aus und repräsentiert den Staat · e) beschließt den Bundeshaushalt. Nenne außerdem die fünf Staatsstrukturprinzipien aus Art. 20 GG.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Bundesverfassungsgericht · b) Bundesregierung (Kanzler/in) · c) Bundesrat · d) Bundespräsident(in) · e) Bundestag.\nStaatsstrukturprinzipien: Republik, Demokratie, Rechtsstaat, Sozialstaat, Bundesstaat (Art. 20 GG; geschützt durch die Ewigkeitsklausel Art. 79 Abs. 3).",
            },
          ],
          quiz: [
            {
              id: "imp_wiso-staat-1_0",
              q: "Welcher GG-Artikel ist durch die Ewigkeitsklausel geschützt?",
              options: [
                "Art. 5 (Meinungsfreiheit)",
                "Art. 14 (Eigentum)",
                "Art. 12 (Berufsfreiheit)",
                "Art. 1 (Menschenwürde)",
              ],
              correct: 3,
              explain:
                "Art. 79 (3) schützt Art. 1 und Art. 20 vor jeder Verfassungsänderung – die Ewigkeitsklausel.",
            },
            {
              id: "imp_wiso-staat-1_1",
              q: "Grundrechte sind in erster Linie …",
              options: [
                "Pflichten der Bürger",
                "Programmsätze ohne Wirkung",
                "Abwehrrechte gegen den Staat",
                "Ansprüche gegen Unternehmen",
              ],
              correct: 2,
              explain:
                "Grundrechte schützen den Einzelnen vor staatlichen Eingriffen – Abwehrrechte gegen den Staat.",
            },
            {
              id: "imp_wiso-staat-1_2",
              q: "Welches Organ vertritt die Bundesländer bei der Gesetzgebung?",
              options: [
                "Der Bundesrat",
                "Der Bundestag",
                "Die Bundesversammlung",
                "Das Bundeskabinett",
              ],
              correct: 0,
              explain:
                "Der Bundesrat besteht aus Mitgliedern der Landesregierungen und wirkt an Bundesgesetzen mit.",
            },
            {
              id: "imp_wiso-staat-1_3",
              q: "„Alle Staatsgewalt geht vom Volke aus“ beschreibt welches Prinzip?",
              options: ["Rechtsstaat", "Bundesstaat", "Sozialstaat", "Demokratie"],
              correct: 3,
              explain: "Volkssouveränität ist der Kern des Demokratieprinzips (Art. 20 Abs. 2 GG).",
            },
            {
              id: "imp_wiso-staat-1_4",
              q: "Die drei Gewalten heißen …",
              options: [
                "Legislative, Exekutive, Judikative",
                "Regierung, Opposition, Presse",
                "Bund, Länder, Kommunen",
                "Polizei, Justiz, Verwaltung",
              ],
              correct: 0,
              explain:
                "Gesetzgebung (Legislative), ausführende Gewalt (Exekutive) und Rechtsprechung (Judikative) kontrollieren sich gegenseitig.",
            },
            {
              id: "imp_wiso-staat-1_5",
              q: "Warum sind Lehrpläne je Bundesland unterschiedlich?",
              options: [
                "Wegen der EU-Richtlinien",
                "Wegen des Sozialstaatsprinzips",
                "Weil die IHK das festlegt",
                "Bildung ist Ländersache (Föderalismus)",
              ],
              correct: 3,
              explain:
                "Im Bundesstaat liegt die Kulturhoheit (Bildung) bei den Ländern – daher landesspezifische Lehrpläne.",
            },
            {
              id: "imp_wiso-staat-1_6",
              q: "Wer kann ein Gesetz für verfassungswidrig erklären?",
              options: [
                "Der Bundespräsident",
                "Der Bundesrat",
                "Das Bundesverfassungsgericht",
                "Der Europäische Rat",
              ],
              correct: 2,
              explain:
                "Das BVerfG prüft Gesetze am Maßstab des Grundgesetzes und kann sie für nichtig erklären.",
            },
            {
              id: "imp_wiso-staat-1_7",
              q: "Das Recht auf informationelle Selbstbestimmung wurde abgeleitet aus …",
              options: ["Art. 1 und 2 GG", "Art. 20 und 79 GG", "der DSGVO", "dem BDSG"],
              correct: 0,
              explain:
                "Das BVerfG leitete es 1983 (Volkszählungsurteil) aus Menschenwürde und allgemeinem Persönlichkeitsrecht ab – Grundlage des Datenschutzes.",
            },
            {
              id: "imp_wiso-staat-1_8",
              q: "Wer wählt den Bundespräsidenten / die Bundespräsidentin?",
              options: [
                "Das Volk direkt",
                "Der Bundestag allein",
                "Der Bundesrat",
                "Die Bundesversammlung",
              ],
              correct: 3,
              explain:
                "Die Bundesversammlung (Bundestagsabgeordnete + gleich viele Länder-Delegierte) wählt das Staatsoberhaupt.",
            },
            {
              id: "imp_wiso-staat-1_9",
              q: "Republik als Staatsprinzip bedeutet …",
              options: [
                "Es gibt keine Bundesländer",
                "Alle Gesetze kommen vom Volk",
                "Der Staat ist neutral",
                "Das Staatsoberhaupt wird gewählt",
              ],
              correct: 3,
              explain: "Republik = gewähltes Staatsoberhaupt auf Zeit, im Gegensatz zur Monarchie.",
            },
            {
              id: "imp_wiso-staat-1_10",
              q: "Vertikale Gewaltenteilung meint die Machtverteilung zwischen …",
              options: [
                "Regierung und Opposition",
                "Bundestag und Bundesrat",
                "Bund und Ländern",
                "Gericht und Polizei",
              ],
              correct: 2,
              explain:
                "Neben Legislative/Exekutive/Judikative (horizontal) teilt der Föderalismus Macht vertikal zwischen Bund und Ländern.",
            },
            {
              id: "imp_wiso-staat-1_11",
              q: "Welche Aussage zum Bundesrat stimmt?",
              options: [
                "Er wird alle 4 Jahre direkt gewählt",
                "Er ernennt die Bundesrichter",
                "Er beschließt den Bundeshaushalt allein",
                "Seine Mitglieder kommen aus den Landesregierungen",
              ],
              correct: 3,
              explain:
                "Der Bundesrat ist keine gewählte Kammer – die Landesregierungen entsenden ihre Mitglieder; die Stimmen eines Landes werden einheitlich abgegeben.",
            },
          ],
        },
        {
          id: "wiso-wahl-1",
          title: "Wahlen & Wahlrechtsgrundsätze",
          content: [
            { type: "heading", value: "Die fünf Wahlrechtsgrundsätze (Art. 38 GG)" },
            {
              type: "text",
              value:
                "Bundestagswahlen sind allgemein (jede/r Deutsche ab 18 darf wählen, unabhängig von Einkommen, Geschlecht, Bildung), unmittelbar (die Stimme wirkt direkt auf die Sitzverteilung – keine Wahlmänner wie in den USA), frei (kein Zwang, keine Beeinflussung), gleich (jede Stimme zählt gleich viel) und geheim (niemand kann nachvollziehen, wie du gewählt hast). Merkwort: AUFGG – Allgemein, Unmittelbar, Frei, Gleich, Geheim. Diese fünf Grundsätze sind auch beliebte Prüfungs- und Klassenarbeitsfrage.",
            },
            { type: "heading", value: "Erststimme und Zweitstimme" },
            {
              type: "text",
              value:
                "Bei der Bundestagswahl hast du zwei Stimmen: Die Erststimme wählt eine Person – die Direktkandidatin oder den Direktkandidaten deines Wahlkreises (Mehrheitswahl: wer die meisten Stimmen holt, gewinnt den Wahlkreis). Die Zweitstimme wählt die Landesliste einer Partei (Verhältniswahl) – und sie ist die wichtigere: Sie bestimmt, wie viele Sitze eine Partei im Bundestag bekommt. Seit der Wahlrechtsreform 2023 hat der Bundestag eine feste Größe von 630 Sitzen; die Sitzverteilung richtet sich allein nach den Zweitstimmen (Zweitstimmendeckung). Überhang- und Ausgleichsmandate gibt es nicht mehr – deshalb kann ein gewonnener Wahlkreis leer ausgehen, wenn ihn die Zweitstimmen der Partei nicht decken.",
            },
            { type: "heading", value: "Fünf-Prozent-Hürde & Co." },
            {
              type: "text",
              value:
                "In den Bundestag zieht nur ein, wer bundesweit mindestens 5 % der Zweitstimmen erreicht. Zweck: Zersplitterung des Parlaments verhindern und stabile Mehrheiten ermöglichen (Lehre aus der Weimarer Republik). Ausnahme ist die Grundmandatsklausel (Partei zieht mit dem Zweitstimmenanteil ein, wenn sie mindestens drei Wahlkreise direkt gewinnt) – das Bundesverfassungsgericht hat 2024 entschieden, dass sie vorerst weiter gilt. Wahlberechtigt und wählbar: aktives Wahlrecht ab 18 (Bundestag), passives Wahlrecht (selbst kandidieren) ebenfalls ab 18. Bei der Europawahl in Deutschland gilt aktives Wahlrecht ab 16.",
            },
            { type: "heading", value: "Warum Wahlen mehr sind als ein Kreuz" },
            {
              type: "text",
              value:
                "Wahlen sind das zentrale Instrument der Demokratie: Sie legitimieren Herrschaft auf Zeit, ermöglichen Machtwechsel ohne Gewalt und zwingen Parteien, um Zustimmung zu werben. Daneben gibt es weitere Beteiligungsformen: Parteien- und Verbandsarbeit, Petitionen, Demonstrationen (Art. 8), Volksbegehren/Volksentscheide auf Landesebene. Sinkende Wahlbeteiligung gilt als Warnsignal – wer nicht wählt, überlässt anderen die Entscheidung.",
            },
            {
              type: "note",
              value:
                "Merkhilfe: AUFGG = Allgemein, Unmittelbar, Frei, Gleich, Geheim. Und: ZWEITstimme = SITZE (die zählt fürs Kräfteverhältnis), ERSTstimme = PERSON im Wahlkreis.",
            },
            { type: "heading", value: "Übungsaufgabe: Wahlrecht anwenden" },
            {
              type: "text",
              value:
                "a) Eine Partei erhält 4,7 % der Zweitstimmen und gewinnt 2 Wahlkreise direkt. Zieht sie in den Bundestag ein? b) Erkläre, warum die Zweitstimme als die wichtigere gilt. c) Bei einer Betriebsratswahl hängt eine Liste aus, auf der jeder unterschreiben soll, wen er gewählt hat – welcher Wahlrechtsgrundsatz wäre bei einer staatlichen Wahl verletzt?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Nein. Unter 5 % UND weniger als 3 Direktmandate (Grundmandatsklausel greift erst ab 3 gewonnenen Wahlkreisen) – die 2 Wahlkreissieger ziehen aber als Direktkandidaten ein.\nb) Die Zweitstimme bestimmt den Sitzanteil der Partei im Bundestag (Verhältniswahl, seit 2023 mit Zweitstimmendeckung bei fester Größe von 630 Sitzen).\nc) Die geheime Wahl – niemand darf nachvollziehen können, wie jemand gestimmt hat.",
            },
          ],
          quiz: [
            {
              id: "imp_wiso-wahl-1_0",
              q: "Die fünf Wahlrechtsgrundsätze lauten …",
              options: [
                "allgemein, unmittelbar, frei, gleich, geheim",
                "direkt, fair, offen, gleich, frei",
                "allgemein, mittelbar, frei, gleich, öffentlich",
                "geheim, gerecht, gleich, gültig, genau",
              ],
              correct: 0,
              explain: "Art. 38 GG: allgemein, unmittelbar, frei, gleich, geheim (Merkwort AUFGG).",
            },
            {
              id: "imp_wiso-wahl-1_1",
              q: "Welche Stimme bestimmt die Sitzverteilung im Bundestag?",
              options: [
                "Die Erststimme",
                "Die Landesstimme",
                "Beide zu gleichen Teilen",
                "Die Zweitstimme",
              ],
              correct: 3,
              explain:
                "Die Zweitstimme (Verhältniswahl der Landeslisten) bestimmt den Sitzanteil – seit 2023 mit Zweitstimmendeckung.",
            },
            {
              id: "imp_wiso-wahl-1_2",
              q: "Wozu dient die 5-%-Hürde?",
              options: [
                "Kleine Parteien fördern",
                "Wahlbeteiligung erhöhen",
                "Zersplitterung des Parlaments verhindern",
                "Kosten der Wahl senken",
              ],
              correct: 2,
              explain:
                "Sie soll viele Kleinstfraktionen verhindern und stabile Mehrheiten ermöglichen – Lehre aus Weimar.",
            },
            {
              id: "imp_wiso-wahl-1_3",
              q: "Feste Größe des Bundestags seit der Wahlrechtsreform 2023?",
              options: ["598 Sitze", "709 Sitze", "736 Sitze", "630 Sitze"],
              correct: 3,
              explain: "630 Sitze fest; Überhang- und Ausgleichsmandate wurden abgeschafft.",
            },
            {
              id: "imp_wiso-wahl-1_4",
              q: "„Unmittelbar“ bedeutet bei Wahlen …",
              options: [
                "Die Stimme wirkt ohne Zwischeninstanz",
                "Man muss persönlich erscheinen",
                "Das Ergebnis steht sofort fest",
                "Jeder darf nur einmal wählen",
              ],
              correct: 0,
              explain:
                "Keine Wahlmänner o. Ä. – die abgegebene Stimme wirkt direkt auf die Sitzverteilung.",
            },
            {
              id: "imp_wiso-wahl-1_5",
              q: "Die Erststimme wählt …",
              options: [
                "die Landesliste einer Partei",
                "den Kanzlerkandidaten",
                "die Direktkandidatin im Wahlkreis",
                "den Bundespräsidenten",
              ],
              correct: 2,
              explain: "Erststimme = Person im Wahlkreis (relative Mehrheitswahl).",
            },
            {
              id: "imp_wiso-wahl-1_6",
              q: "Grundmandatsklausel: Einzug trotz <5 %, wenn …",
              options: [
                "die Partei 3 Wahlkreise direkt gewinnt",
                "die Partei in allen Ländern antritt",
                "der Bundesrat zustimmt",
                "die Partei 500.000 Mitglieder hat",
              ],
              correct: 0,
              explain:
                "Mindestens drei Direktmandate → Einzug entsprechend dem Zweitstimmenanteil (Fortgeltung 2024 vom BVerfG angeordnet, bis der Gesetzgeber neu regelt).",
            },
            {
              id: "imp_wiso-wahl-1_7",
              q: "Briefwahl ohne Angabe von Gründen – welche Aussage stimmt?",
              options: [
                "Sie ist verboten",
                "Nur im Ausland erlaubt",
                "Nur für über 70-Jährige",
                "Sie ist zulässig und gleichgestellt",
              ],
              correct: 3,
              explain: "Briefwahl ist ohne Begründung möglich und der Urnenwahl gleichgestellt.",
            },
            {
              id: "imp_wiso-wahl-1_8",
              q: "Aktives Wahlrecht bedeutet …",
              options: [
                "selbst kandidieren dürfen",
                "Wahlkampf führen",
                "im Wahlvorstand sitzen",
                "wählen dürfen",
              ],
              correct: 3,
              explain: "Aktiv = wählen dürfen; passiv = gewählt werden können.",
            },
            {
              id: "imp_wiso-wahl-1_9",
              q: "Wahlen legitimieren Herrschaft …",
              options: ["dauerhaft", "rückwirkend", "nur symbolisch", "auf Zeit"],
              correct: 3,
              explain:
                "Herrschaft auf Zeit: Bei der nächsten Wahl kann die Mehrheit friedlich abgewählt werden.",
            },
            {
              id: "imp_wiso-wahl-1_10",
              q: "Ein Arbeitgeber verlangt, ein Foto des ausgefüllten Stimmzettels zu zeigen. Verletzt wäre …",
              options: [
                "die gleiche Wahl",
                "die allgemeine Wahl",
                "die geheime und freie Wahl",
                "die unmittelbare Wahl",
              ],
              correct: 2,
              explain:
                "Geheimhaltung und Freiheit der Wahl schützen vor genau solchem Druck – deshalb ist auch das Fotografieren in der Kabine unzulässig.",
            },
            {
              id: "imp_wiso-wahl-1_11",
              q: "Wahlalter bei der Europawahl in Deutschland (aktiv)?",
              options: ["ab 21", "ab 18", "ab 17", "ab 16"],
              correct: 3,
              explain:
                "Bei Europawahlen dürfen in Deutschland bereits 16-Jährige wählen; beim Bundestag gilt 18.",
            },
          ],
        },
        {
          id: "wiso-gesetz-1",
          title: "Gesetzgebung: Vom Entwurf zum Gesetz",
          content: [
            { type: "heading", value: "Wer darf Gesetze vorschlagen?" },
            {
              type: "text",
              value:
                "Das Initiativrecht für Bundesgesetze haben drei Akteure: die Bundesregierung (in der Praxis der häufigste Weg), der Bundesrat und „die Mitte des Bundestages“ (eine Fraktion oder 5 % der Abgeordneten). Bürgerinnen und Bürger können auf Bundesebene keine Gesetze einbringen – wohl aber Petitionen an den Petitionsausschuss richten; Volksbegehren und Volksentscheide gibt es nur auf Landes- und Kommunalebene.",
            },
            { type: "heading", value: "Der Weg durchs Parlament: drei Lesungen" },
            {
              type: "text",
              value:
                "Im Bundestag durchläuft ein Entwurf drei Lesungen: 1. Lesung – Grundsatzdebatte und Überweisung in die Fachausschüsse (dort passiert die eigentliche Detailarbeit, oft mit Anhörung von Sachverständigen). 2. Lesung – Beratung der Ausschussempfehlung, Änderungsanträge. 3. Lesung – Schlussabstimmung. Danach geht das beschlossene Gesetz an den Bundesrat.",
            },
            { type: "heading", value: "Zustimmungs- vs. Einspruchsgesetz – der Prüfungsklassiker" },
            {
              type: "text",
              value:
                "Zustimmungsgesetze berühren Kerninteressen der Länder (z. B. Länderfinanzen, Verwaltungsverfahren der Länder, Verfassungsänderungen): Ohne ausdrückliche Mehrheit im Bundesrat scheitern sie endgültig. Einspruchsgesetze (der Regelfall): Der Bundesrat kann nur Einspruch einlegen – der Bundestag kann ihn mit entsprechender Mehrheit überstimmen (Einspruch mit absoluter Mehrheit eingelegt → absolute Mehrheit im Bundestag; mit Zweidrittelmehrheit eingelegt → Zweidrittelmehrheit). Bei Streit vermittelt der Vermittlungsausschuss: je 16 Mitglieder aus Bundestag und Bundesrat suchen einen Kompromiss.",
            },
            { type: "heading", value: "Ausfertigung und Verkündung" },
            {
              type: "text",
              value:
                "Zum Schluss prüft und unterschreibt die Bundespräsidentin / der Bundespräsident das Gesetz (Ausfertigung, mit formellem Prüfungsrecht) und es wird im Bundesgesetzblatt verkündet. Erst mit der Verkündung – und dem dort genannten Datum – tritt es in Kraft. Danach bleibt als Notbremse die Kontrolle durch das Bundesverfassungsgericht (z. B. abstrakte Normenkontrolle, Verfassungsbeschwerde).",
            },
            {
              type: "note",
              value:
                "Merkweg: Initiative → 3 Lesungen im Bundestag (Ausschüsse!) → Bundesrat (Zustimmung ODER Einspruch) → ggf. Vermittlungsausschuss → Ausfertigung durch Bundespräsident → Verkündung im Bundesgesetzblatt → Inkrafttreten.",
            },
            { type: "heading", value: "Übungsaufgabe: Gesetzweg durchspielen" },
            {
              type: "text",
              value:
                "Ein Gesetz zur Änderung der Berufsschul-Finanzierung (betrifft Länderfinanzen) wird von der Bundesregierung eingebracht. Der Bundestag beschließt es, der Bundesrat lehnt ab. a) Zustimmungs- oder Einspruchsgesetz – und was folgt aus der Ablehnung? b) Welches Gremium könnte noch einen Kompromiss suchen, und wie ist es besetzt? c) Wer fertigt ein zustande gekommenes Gesetz aus, und wo wird es verkündet?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Zustimmungsgesetz (Länderfinanzen = Kerninteresse der Länder). Ohne Bundesratsmehrheit ist es endgültig gescheitert – ein Überstimmen wie beim Einspruchsgesetz gibt es hier nicht.\nb) Der Vermittlungsausschuss: je 16 Mitglieder aus Bundestag und Bundesrat.\nc) Die Bundespräsidentin / der Bundespräsident fertigt aus; Verkündung im Bundesgesetzblatt, dann Inkrafttreten.",
            },
          ],
          quiz: [
            {
              id: "imp_wiso-gesetz-1_0",
              q: "Wer hat KEIN Initiativrecht für Bundesgesetze?",
              options: [
                "Bundesregierung",
                "Bundesrat",
                "Einzelne Bürger",
                "Fraktionen des Bundestages",
              ],
              correct: 2,
              explain:
                "Initiativrecht: Bundesregierung, Bundesrat, Mitte des Bundestages. Bürger können nur Petitionen einreichen.",
            },
            {
              id: "imp_wiso-gesetz-1_1",
              q: "Wo findet die Detailarbeit an Gesetzentwürfen statt?",
              options: [
                "Im Plenum bei der 1. Lesung",
                "In den Fachausschüssen",
                "Beim Bundespräsidenten",
                "Im Bundesrat-Plenum",
              ],
              correct: 1,
              explain:
                "Nach der 1. Lesung wird in die Ausschüsse überwiesen – dort werden Details beraten und Experten angehört.",
            },
            {
              id: "imp_wiso-gesetz-1_2",
              q: "Ein Zustimmungsgesetz scheitert, wenn …",
              options: [
                "der Bundesrat nicht mehrheitlich zustimmt",
                "eine Fraktion widerspricht",
                "der Bundespräsident zögert",
                "die 3. Lesung ausfällt",
              ],
              correct: 0,
              explain:
                "Bei Zustimmungsgesetzen ist die Bundesratsmehrheit zwingend – Ablehnung ist endgültig.",
            },
            {
              id: "imp_wiso-gesetz-1_3",
              q: "Beim Einspruchsgesetz kann der Bundestag den Einspruch …",
              options: [
                "nie überstimmen",
                "nur mit Bundesratserlaubnis überstimmen",
                "mit entsprechender Mehrheit zurückweisen",
                "an das BVerfG verweisen",
              ],
              correct: 2,
              explain:
                "Der Einspruch kann mit der jeweils passenden Mehrheit (absolut bzw. 2/3) zurückgewiesen werden.",
            },
            {
              id: "imp_wiso-gesetz-1_4",
              q: "Der Vermittlungsausschuss besteht aus …",
              options: [
                "Regierungsmitgliedern",
                "je 16 Mitgliedern von Bundestag und Bundesrat",
                "den Ministerpräsidenten",
                "Verfassungsrichtern",
              ],
              correct: 1,
              explain: "Je 16 aus beiden Häusern suchen bei Konflikten einen Kompromissvorschlag.",
            },
            {
              id: "imp_wiso-gesetz-1_5",
              q: "Wie viele Lesungen durchläuft ein Gesetz im Bundestag?",
              options: ["Eine", "Zwei", "Vier", "Drei"],
              correct: 3,
              explain:
                "Drei Lesungen: Grundsatzdebatte, Beratung nach Ausschussarbeit, Schlussabstimmung.",
            },
            {
              id: "imp_wiso-gesetz-1_6",
              q: "Ein Gesetz tritt in Kraft …",
              options: [
                "mit der Schlussabstimmung",
                "mit Verkündung im Bundesgesetzblatt",
                "mit der Bundesratssitzung",
                "mit Kabinettsbeschluss",
              ],
              correct: 1,
              explain:
                "Erst Ausfertigung durch den Bundespräsidenten und Verkündung im Bundesgesetzblatt machen es wirksam.",
            },
            {
              id: "imp_wiso-gesetz-1_7",
              q: "Volksentscheide auf BUNDESebene …",
              options: [
                "gibt es im GG grundsätzlich nicht (Ausnahme: Länderneugliederung)",
                "finden regelmäßig alle zwei Jahre statt",
                "ersetzen den Bundesrat als Länderkammer",
                "sind ab 100.000 Unterschriften verpflichtend",
              ],
              correct: 0,
              explain:
                "Das GG sieht direkte Demokratie auf Bundesebene praktisch nicht vor – anders als viele Landesverfassungen.",
            },
            {
              id: "imp_wiso-gesetz-1_8",
              q: "Wer unterschreibt Bundesgesetze vor der Verkündung?",
              options: [
                "Die Kanzlerin/der Kanzler",
                "Der Bundestagspräsident",
                "Die Bundespräsidentin/der Bundespräsident",
                "Der Bundesratspräsident",
              ],
              correct: 2,
              explain: "Ausfertigung durch das Staatsoberhaupt – mit formellem Prüfungsrecht.",
            },
            {
              id: "imp_wiso-gesetz-1_9",
              q: "Typisches Zustimmungsgesetz betrifft …",
              options: ["Straßennamen", "Länderfinanzen", "Vereinsrecht", "Feiertagsgrüße"],
              correct: 1,
              explain:
                "Was Kerninteressen der Länder berührt (Finanzen, Länder-Verwaltung, Verfassungsänderung), braucht Bundesratszustimmung.",
            },
            {
              id: "imp_wiso-gesetz-1_10",
              q: "Petitionen richtest du an …",
              options: [
                "das Bundesverfassungsgericht",
                "den Vermittlungsausschuss",
                "die Bundesversammlung",
                "den Petitionsausschuss des Bundestages",
              ],
              correct: 3,
              explain:
                "Jede/r kann sich mit Bitten und Beschwerden an den Petitionsausschuss wenden (Art. 17 GG).",
            },
          ],
        },
      ],
    },
    {
      id: "pol4-nach",
      title: "Nachhaltigkeit & Klimapolitik",
      lessons: [
        {
          id: "wiso-nach-1",
          title: "Nachhaltigkeit, Klimapolitik & Green IT",
          content: [
            { type: "heading", value: "Das Drei-Säulen-Modell" },
            {
              type: "text",
              value:
                "Nachhaltigkeit heißt: heutige Bedürfnisse erfüllen, ohne künftigen Generationen die Grundlagen zu nehmen. Das Drei-Säulen-Modell verlangt den Ausgleich von Ökologie (Umwelt, Ressourcen, Klima), Ökonomie (dauerhaft tragfähiges Wirtschaften) und Sozialem (faire Arbeitsbedingungen, Teilhabe). Unternehmen berichten dazu zunehmend verpflichtend (Stichwort ESG-/Nachhaltigkeitsberichterstattung, CSRD) – auch IT-Dienstleister werden von Kunden nach ihrer Klimabilanz gefragt.",
            },
            { type: "heading", value: "Klimapolitik: Ziele und Werkzeuge" },
            {
              type: "text",
              value:
                "Rahmen: Pariser Abkommen (Erderwärmung deutlich unter 2 °C, möglichst 1,5 °C), EU Green Deal (EU klimaneutral bis 2050, Zwischenziel −55 % bis 2030), Deutschland per Klimaschutzgesetz: treibhausgasneutral bis 2045. Werkzeuge des Staates: CO2-Bepreisung (EU-Emissionshandel ETS für Energie/Industrie, nationaler Preis auf Verkehr/Wärme – Idee: Wer die Umwelt belastet, zahlt und hat einen Anreiz zu sparen), Ordnungsrecht (Grenzwerte, Standards, z. B. Ökodesign-Richtlinie und Energieeffizienzvorgaben), Förderung (erneuerbare Energien, Gebäudesanierung) und Information/Label (Energieeffizienzklassen, Blauer Engel – den gibt es auch für Rechenzentren und Software!).",
            },
            { type: "heading", value: "Green IT: dein Hebel im Betrieb" },
            {
              type: "text",
              value:
                "IT verursacht weltweit einen relevanten Teil des Stromverbrauchs – und du kannst ihn beeinflussen. Rechenzentrum: Effizienz messen mit PUE (Gesamtleistung ÷ IT-Leistung, siehe Formelsammlung), Virtualisierung und Konsolidierung statt Serverwildwuchs, Kaltgang-/Warmgang-Trennung, höhere Zulufttemperaturen, Abwärmenutzung; das Energieeffizienzgesetz setzt für deutsche Rechenzentren PUE-Vorgaben. Clients: Energiesparpläne per GPO ausrollen, Geräte-Lebensdauer verlängern (Reparatur, RAM/SSD-Upgrade statt Neukauf), Refurbished-Hardware, korrekte Entsorgung als E-Schrott (ElektroG, WEEE) wegen wertvoller Rohstoffe und Schadstoffe. Software: effizienter Code, Dark Mode auf OLED, Cloud-Regionen mit Grünstrom. Und ehrlich bleiben: Werbung mit Umweltvorteilen ohne Substanz ist Greenwashing – rechtlich zunehmend angreifbar.",
            },
            { type: "heading", value: "Zielkonflikte aushalten" },
            {
              type: "text",
              value:
                "Nachhaltigkeit ist voller Zielkonflikte: Neue effiziente Hardware spart Strom, kostet aber graue Energie in der Herstellung (Lösung: Lebenszyklus betrachten). Klimaschutz verteuert kurzfristig Energie – trifft einkommensschwache Haushalte stärker (soziale Säule!). Datensparsamkeit vs. KI-Boom mit riesigem Strom- und Wasserbedarf der Rechenzentren. Gute Antworten wägen alle drei Säulen ab, statt eine zu verabsolutieren – genau das wird in Schuldiskussionen und Präsentationen erwartet.",
            },
            {
              type: "note",
              value:
                "Merkhilfe: 3 Säulen = ÖÖS (Ökologie, Ökonomie, Soziales). Klimaziele-Treppe: Paris 1,5° → EU 2050 → Deutschland 2045. Green-IT-Kennzahl Nr. 1: PUE (je näher an 1,0, desto besser).",
            },
            { type: "heading", value: "Übungsaufgabe: Green-IT-Konzept" },
            {
              type: "text",
              value:
                "Dein Betrieb (30 physische Server, PUE 2,1, Clients laufen nachts durch) will „nachhaltiger werden“. Nenne je zwei konkrete Maßnahmen für Rechenzentrum, Clients und Beschaffung/Entsorgung – und ordne jede Maßnahme einer der drei Säulen zu (Mehrfachnennung möglich).",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (Beispiele):\nRechenzentrum: Virtualisierung/Konsolidierung der 30 Server auf wenige Hosts (Ökologie + Ökonomie: Strom & Hardware gespart) · Kalt-/Warmgang und höhere Zulufttemperatur → PUE Richtung 1,4 (Ökologie/Ökonomie).\nClients: Energiesparpläne + nächtliches Abschalten per GPO/Wake-on-LAN (Ökologie/Ökonomie) · längere Nutzungsdauer durch SSD-/RAM-Upgrades (Ökologie).\nBeschaffung/Entsorgung: Effizienzlabel/Blauer Engel und Reparierbarkeit als Vergabekriterium (Ökologie) · zertifizierte E-Schrott-Entsorgung nach ElektroG, ggf. Spende funktionsfähiger Altgeräte (Ökologie + Soziales).",
            },
          ],
          quiz: [
            {
              id: "imp_wiso-nach-1_0",
              q: "Die drei Säulen der Nachhaltigkeit sind …",
              options: [
                "Ökologie, Ökonomie, Soziales",
                "Klima, Energie, Verkehr",
                "Staat, Markt, Familie",
                "Reduce, Reuse, Recycle",
              ],
              correct: 0,
              explain:
                "Nachhaltig ist, was Umwelt, Wirtschaftlichkeit und soziale Wirkung gemeinsam im Blick behält.",
            },
            {
              id: "imp_wiso-nach-1_1",
              q: "Deutschland will laut Klimaschutzgesetz treibhausgasneutral sein bis …",
              options: ["2035", "2045", "2050", "2060"],
              correct: 1,
              explain: "Deutschland 2045 – die EU als Ganzes bis 2050 (Green Deal).",
            },
            {
              id: "imp_wiso-nach-1_2",
              q: "Grundidee der CO2-Bepreisung?",
              options: [
                "Verbote für alle Emissionen",
                "Belastung schafft Sparanreiz",
                "Subvention für Kohle",
                "Feste Emissionsquote je Bürger",
              ],
              correct: 1,
              explain:
                "Wer emittiert, zahlt – Vermeidung wird wirtschaftlich attraktiv (ETS/nationaler CO2-Preis).",
            },
            {
              id: "imp_wiso-nach-1_3",
              q: "PUE = 2,0 bedeutet …",
              options: [
                "Die Hälfte des Stroms erreicht die IT",
                "Das RZ ist klimaneutral",
                "Doppelte Rechenleistung",
                "20 % Verlust",
              ],
              correct: 0,
              explain:
                "PUE = Gesamt/IT-Leistung: Bei 2,0 geht so viel in Kühlung & Co. wie in die IT selbst – modern sind 1,2–1,4.",
            },
            {
              id: "imp_wiso-nach-1_4",
              q: "Alt-Server entsorgst du korrekt …",
              options: [
                "im Restmüll",
                "als zertifizierten E-Schrott (ElektroG)",
                "im Sperrmüll",
                "durch Verbrennen",
              ],
              correct: 1,
              explain:
                "Elektroaltgeräte enthalten Rohstoffe und Schadstoffe – Rücknahme/zertifizierte Entsorgung ist Pflicht.",
            },
            {
              id: "imp_wiso-nach-1_5",
              q: "Greenwashing bedeutet …",
              options: [
                "Server mit Wasser kühlen",
                "Umweltwerbung ohne echte Substanz",
                "grüne Gehäusefarbe",
                "Recycling von Kabeln",
              ],
              correct: 1,
              explain: "Unbelegte Umweltversprechen – zunehmend abmahn- und bußgeldbewehrt.",
            },
            {
              id: "imp_wiso-nach-1_6",
              q: "Wirksamste RZ-Maßnahme bei 30 kaum ausgelasteten Servern?",
              options: [
                "Schnellere CPUs",
                "Virtualisierung & Konsolidierung",
                "Mehr Klimageräte",
                "Längere Kabel",
              ],
              correct: 1,
              explain:
                "Wenige gut ausgelastete Hosts sparen Strom, Kühlung, Hardware und Lizenzen.",
            },
            {
              id: "imp_wiso-nach-1_7",
              q: "Das Pariser Abkommen zielt auf …",
              options: [
                "Verbot aller Autos",
                "max. 3 °C Erwärmung",
                "deutlich unter 2 °C, möglichst 1,5 °C",
                "CO2-freie EU bis 2030",
              ],
              correct: 2,
              explain:
                "Völkerrechtlicher Rahmen: Erwärmung deutlich unter 2 °C, Anstrengungen für 1,5 °C.",
            },
            {
              id: "imp_wiso-nach-1_8",
              q: "Beispiel für einen Nachhaltigkeits-ZIELKONFLIKT?",
              options: [
                "Neue Hardware spart Strom, kostet aber graue Energie",
                "regelmäßige Backups mit Restore-Tests",
                "der Vergleich von RAID 1 und RAID 5",
                "die Umstellung von IPv4 auf IPv6",
              ],
              correct: 0,
              explain:
                "Lebenszyklus denken: Herstellungsenergie kann Einsparungen im Betrieb (teilweise) auffressen.",
            },
            {
              id: "imp_wiso-nach-1_9",
              q: "Der Blaue Engel ist …",
              options: [
                "ein Umweltzeichen (auch für RZ und Software)",
                "eine EU-Behörde",
                "ein Klimagesetz",
                "ein Recycling-Unternehmen",
              ],
              correct: 0,
              explain:
                "Deutschlands bekanntestes Umweltlabel – es zertifiziert u. a. energieeffiziente Rechenzentren und ressourcenschonende Software.",
            },
            {
              id: "imp_wiso-nach-1_10",
              q: "Lebensdauer von Clients verlängern gelingt am ehesten durch …",
              options: [
                "Übertakten",
                "SSD-/RAM-Upgrade und Reparatur",
                "tägliche Neuinstallation",
                "BIOS-Passwort",
              ],
              correct: 1,
              explain:
                "Upgrades und Reparierbarkeit schieben den Neukauf hinaus – oft der größte Umwelthebel bei Clients.",
            },
          ],
        },
      ],
    },
    {
      id: "wirt4-rw",
      title: "Rechnungswesen: Doppelte Buchführung",
      lessons: [
        {
          id: "wiso-inventur-1",
          title: "Inventur, Inventar & Bilanz",
          content: [
            { type: "heading", value: "Vom Zählen zur Bilanz" },
            {
              type: "text",
              value:
                "Jeder Kaufmann muss zu Beginn und zum Ende jedes Geschäftsjahres seine Vermögens- und Schuldenlage feststellen (§§ 240 ff. HGB). Die Inventur ist die TÄTIGKEIT: körperliche Bestandsaufnahme (zählen, messen, wiegen – etwa alle Server im Lager) und Buchinventur für nicht körperliche Posten (Bankguthaben, Forderungen). Das Inventar ist das ERGEBNIS: ein ausführliches Verzeichnis aller Vermögensteile und Schulden in Staffelform. Die Bilanz ist die Kurzfassung des Inventars in Kontoform: links Aktiva, rechts Passiva. Merkreihenfolge: Inventur (Tun) → Inventar (Liste) → Bilanz (Konto-Übersicht).",
            },
            { type: "heading", value: "Aufbau der Bilanz" },
            {
              type: "text",
              value:
                "AKTIVA (Mittelverwendung – wofür steckt das Geld im Unternehmen?): Anlagevermögen (dauerhaft: Grundstücke, Maschinen, Betriebs- und Geschäftsausstattung/BGA, Fuhrpark) und Umlaufvermögen (kurzfristig: Vorräte/Waren, Forderungen aus Lieferungen und Leistungen, Bank, Kasse) – geordnet nach zunehmender Liquidität. PASSIVA (Mittelherkunft – woher kommt das Geld?): Eigenkapital und Fremdkapital (Verbindlichkeiten, Darlehen, Rückstellungen) – geordnet nach Fälligkeit. Eiserne Regel: Bilanzsumme Aktiva = Bilanzsumme Passiva, denn jede Mittelverwendung hat eine Herkunft. Das Eigenkapital ist die Restgröße: EK = Vermögen − Schulden.",
            },
            { type: "heading", value: "Inventurverfahren" },
            {
              type: "text",
              value:
                "Stichtagsinventur: am Bilanzstichtag (± 10 Tage) wird alles aufgenommen – genau, aber aufwendig, oft mit Betriebsschließung. · Verlegte Inventur: bis zu 3 Monate vor oder 2 Monate nach dem Stichtag, Werte werden fortgeschrieben/zurückgerechnet. · Permanente Inventur: laufende Bestandsführung (Lagerverwaltungssystem!), körperliche Aufnahme irgendwann im Jahr – dafür muss die Lagerbuchführung stimmen. · Stichprobeninventur: mathematisch-statistische Hochrechnung. IT-Bezug: Ein sauber gepflegtes Asset-Management/Inventarsystem (CMDB) ist die Voraussetzung für permanente Inventur der IT-Ausstattung.",
            },
            { type: "heading", value: "Wertveränderungen: vier Grundfälle" },
            {
              type: "text",
              value:
                "Jeder Geschäftsvorfall verändert die Bilanz auf eine von vier Arten: Aktivtausch (ein Aktivposten steigt, ein anderer sinkt – Serverkauf gegen Barzahlung: BGA ↑, Kasse ↓; Bilanzsumme unverändert) · Passivtausch (Verbindlichkeit wird in Darlehen umgewandelt; Summe unverändert) · Aktiv-Passiv-Mehrung/Bilanzverlängerung (Wareneinkauf auf Ziel: Vorräte ↑ UND Verbindlichkeiten ↑; Summe steigt) · Aktiv-Passiv-Minderung/Bilanzverkürzung (Verbindlichkeit per Bank bezahlt: Bank ↓ UND Verbindlichkeiten ↓; Summe sinkt).",
            },
            {
              type: "note",
              value:
                "Merkhilfe: AKTIVA = Anlage + Umlauf (Verwendung, links) · PASSIVA = Eigen- + Fremdkapital (Herkunft, rechts). Und: Inventur ZÄHLT, Inventar LISTET, Bilanz VERDICHTET.",
            },
            { type: "heading", value: "Übungsaufgabe: Bilanz-Grundfälle" },
            {
              type: "text",
              value:
                "Ordne die vier Geschäftsvorfälle dem richtigen Grundfall zu und gib an, wie sich die Bilanzsumme ändert: a) Kauf von 5 Notebooks gegen Banküberweisung. b) Kauf eines Servers auf Rechnung (Ziel). c) Tilgung einer Lieferantenverbindlichkeit per Bank. d) Umwandlung einer kurzfristigen Verbindlichkeit in ein langfristiges Darlehen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Aktivtausch (BGA ↑, Bank ↓) – Summe unverändert.\nb) Aktiv-Passiv-Mehrung/Bilanzverlängerung (BGA ↑, Verbindlichkeiten ↑) – Summe steigt.\nc) Aktiv-Passiv-Minderung/Bilanzverkürzung (Bank ↓, Verbindlichkeiten ↓) – Summe sinkt.\nd) Passivtausch (Verbindlichkeiten ↓, Darlehen ↑) – Summe unverändert.",
            },
          ],
          quiz: [
            {
              id: "imp_wiso-inventur-1_0",
              q: "Inventur, Inventar, Bilanz – richtige Zuordnung?",
              options: [
                "Tätigkeit, Verzeichnis, Kurzfassung in Kontoform",
                "Liste, Zählung, Anhang",
                "Konto, Liste, Tätigkeit",
                "Bilanz ist das Verzeichnis",
              ],
              correct: 0,
              explain:
                "Inventur = Bestandsaufnahme, Inventar = ausführliches Verzeichnis, Bilanz = verdichtete Gegenüberstellung.",
            },
            {
              id: "imp_wiso-inventur-1_1",
              q: "Auf der Aktivseite stehen …",
              options: [
                "Eigenkapital und Schulden",
                "Anlage- und Umlaufvermögen",
                "nur Bankguthaben",
                "Erträge und Aufwendungen",
              ],
              correct: 1,
              explain: "Aktiva = Mittelverwendung: Anlagevermögen + Umlaufvermögen.",
            },
            {
              id: "imp_wiso-inventur-1_2",
              q: "Serverkauf gegen BARzahlung ist ein …",
              options: ["Passivtausch", "Bilanzverlängerung", "Aktivtausch", "Bilanzverkürzung"],
              correct: 2,
              explain: "BGA steigt, Kasse sinkt – beides Aktivseite, Summe bleibt gleich.",
            },
            {
              id: "imp_wiso-inventur-1_3",
              q: "Wareneinkauf AUF ZIEL bewirkt …",
              options: ["Bilanzverkürzung", "Aktivtausch", "Passivtausch", "Bilanzverlängerung"],
              correct: 3,
              explain:
                "Vorräte ↑ und Verbindlichkeiten ↑ – die Bilanzsumme wächst auf beiden Seiten.",
            },
            {
              id: "imp_wiso-inventur-1_4",
              q: "Eigenkapital berechnet sich als …",
              options: [
                "Vermögen − Schulden",
                "Umsatz − Kosten",
                "Aktiva + Passiva",
                "Kasse + Bank",
              ],
              correct: 0,
              explain: "EK ist die Restgröße der Bilanz: Gesamtvermögen minus Fremdkapital.",
            },
            {
              id: "imp_wiso-inventur-1_5",
              q: "Permanente Inventur setzt voraus …",
              options: [
                "Betriebsschließung am Stichtag",
                "eine laufend gepflegte Lagerbuchführung",
                "externe Prüfer",
                "monatliche Bilanzen",
              ],
              correct: 1,
              explain:
                "Nur mit verlässlicher laufender Bestandsführung (z. B. LVS/CMDB) darf die körperliche Aufnahme übers Jahr verteilt werden.",
            },
            {
              id: "imp_wiso-inventur-1_6",
              q: "Die Bilanzgleichung lautet …",
              options: [
                "Aktiva = Passiva",
                "Umsatz = Gewinn + Kosten",
                "EK = FK",
                "Anlage = Umlauf",
              ],
              correct: 0,
              explain:
                "Mittelverwendung und Mittelherkunft sind zwei Sichten auf dasselbe Geld – immer gleich groß.",
            },
            {
              id: "imp_wiso-inventur-1_7",
              q: "Forderungen aus Lieferungen und Leistungen gehören zum …",
              options: ["Fremdkapital", "Anlagevermögen", "Umlaufvermögen", "Eigenkapital"],
              correct: 2,
              explain:
                "Kurzfristig gebundenes Vermögen (Kunden schulden uns Geld) = Umlaufvermögen.",
            },
            {
              id: "imp_wiso-inventur-1_8",
              q: "Verlegte Inventur ist zulässig …",
              options: [
                "nur am 31.12.",
                "bis 3 Monate vor / 2 Monate nach dem Stichtag",
                "jederzeit ohne Regeln",
                "nur mit Stichproben",
              ],
              correct: 1,
              explain: "Mit Fortschreibung bzw. Rückrechnung der Werte auf den Stichtag.",
            },
            {
              id: "imp_wiso-inventur-1_9",
              q: "Die Aktivseite ist geordnet nach …",
              options: ["Alphabet", "Betragshöhe", "Anschaffungsdatum", "zunehmender Liquidität"],
              correct: 3,
              explain: "Vom langfristig gebundenen Anlagevermögen bis zur Kasse (sofort flüssig).",
            },
          ],
        },
        {
          id: "wiso-buchung-1",
          title: "Buchungssätze & T-Konten",
          content: [
            { type: "heading", value: "Von der Bilanz zu den Konten" },
            {
              type: "text",
              value:
                "Weil man nicht nach jedem Geschäftsvorfall eine neue Bilanz schreiben will, wird jeder Bilanzposten in ein eigenes T-Konto aufgelöst: links die SOLL-Seite, rechts die HABEN-Seite (reine Konvention – mit „sollen“ und „haben“ im Alltagssinn hat das nichts zu tun). Aktivkonten (Kasse, Bank, BGA, Vorräte …): Anfangsbestand und Zugänge im SOLL, Abgänge im HABEN. Passivkonten (Eigenkapital, Verbindlichkeiten, Darlehen): genau spiegelbildlich – Anfangsbestand und Zugänge im HABEN, Abgänge im SOLL.",
            },
            { type: "heading", value: "Der Buchungssatz: immer „Soll an Haben“" },
            {
              type: "text",
              value:
                "Jeder Geschäftsvorfall berührt mindestens zwei Konten (doppelte Buchführung!). Der Buchungssatz nennt zuerst das Konto, auf dem im SOLL gebucht wird, dann nach dem Wörtchen „an“ das Haben-Konto: SOLL an HABEN. Vorgehen in vier Fragen: 1. Welche Konten sind betroffen? 2. Aktiv- oder Passivkonto (oder Erfolgskonto)? 3. Zugang oder Abgang? 4. Also Soll oder Haben? Beispiel Serverkauf 1.000 € gegen Banküberweisung: BGA (Aktiv, Zugang → Soll) an Bank (Aktiv, Abgang → Haben): „BGA 1.000 an Bank 1.000“. Zusammengesetzter Buchungssatz: mehrere Konten auf einer Seite, Summen müssen links wie rechts gleich sein.",
            },
            { type: "heading", value: "Umsatzsteuer mitbuchen" },
            {
              type: "text",
              value:
                "Beim EINKAUF zahlt der Betrieb 19 % Umsatzsteuer mit – für ihn nur ein durchlaufender Posten: Er bucht sie als VORSTEUER (Forderung ans Finanzamt, aktivisches Konto, Soll). Einkauf Server 1.000 € netto auf Ziel: „BGA 1.000 + Vorsteuer 190 an Verbindlichkeiten 1.190“. Beim VERKAUF schuldet er die eingenommene UMSATZSTEUER dem Finanzamt (Verbindlichkeit, Haben). Verkauf Dienstleistung 2.000 € netto auf Rechnung: „Forderungen 2.380 an Umsatzerlöse 2.000 + Umsatzsteuer 380“. Am Monatsende wird saldiert: Zahllast = Umsatzsteuer − Vorsteuer.",
            },
            { type: "heading", value: "Konten abschließen" },
            {
              type: "text",
              value:
                "Am Jahresende wird jedes Bestandskonto über den Saldo (Differenz der Seiten, steht auf der schwächeren Seite) zum Schlussbilanzkonto (SBK) abgeschlossen; die Anfangsbestände des neuen Jahres kommen vom Eröffnungsbilanzkonto (EBK). So schließt sich der Kreis: Bilanz → Konten → Buchungen → Schlussbilanz.",
            },
            {
              type: "note",
              value:
                "Merkhilfen: Aktivkonten wachsen im SOLL, Passivkonten im HABEN („Aktiv-Soll-Plus“). Buchungssatz IMMER „Soll an Haben“. VORsteuer = beim EINkauf (Forderung), UMSATZsteuer = beim VERkauf (Verbindlichkeit).",
            },
            { type: "heading", value: "Übungsaufgabe: Buchungssätze bilden" },
            {
              type: "text",
              value:
                "Bilde die Buchungssätze (mit Beträgen, 19 % USt): a) Kauf von Netzwerk-Switches für 3.000 € netto auf Ziel. b) Barverkauf einer Altmaschine zum Buchwert 500 € (ohne USt-Betrachtung). c) Die Lieferantenrechnung aus a) wird per Bank bezahlt. d) Ein Kunde zahlt eine offene Rechnung über 1.190 € auf unser Bankkonto.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) BGA 3.000 + Vorsteuer 570 an Verbindlichkeiten aLL 3.570.\nb) Kasse 500 an Maschinen/BGA 500 (Aktivtausch zum Buchwert).\nc) Verbindlichkeiten aLL 3.570 an Bank 3.570.\nd) Bank 1.190 an Forderungen aLL 1.190.\nKontrolle: In jedem Satz Summe Soll = Summe Haben.",
            },
          ],
          quiz: [
            {
              id: "imp_wiso-buchung-1_0",
              q: "Aktivkonten buchen Zugänge …",
              options: ["im Soll", "im Haben", "auf beiden Seiten", "gar nicht"],
              correct: 0,
              explain:
                "Aktivkonten: Anfangsbestand + Zugänge im Soll, Abgänge im Haben – Passivkonten spiegelbildlich.",
            },
            {
              id: "imp_wiso-buchung-1_1",
              q: "Der Buchungssatz nennt zuerst …",
              options: ["das Haben-Konto", "das Soll-Konto", "den Betrag", "das Datum"],
              correct: 1,
              explain: "Konvention: „Soll an Haben“ – zuerst das im Soll bebuchte Konto.",
            },
            {
              id: "imp_wiso-buchung-1_2",
              q: "Serverkauf 1.000 € bar (ohne USt). Buchungssatz?",
              options: [
                "Kasse an BGA 1.000",
                "BGA an Verbindlichkeiten 1.000",
                "BGA an Kasse 1.000",
                "Kasse an Bank 1.000",
              ],
              correct: 2,
              explain: "BGA (Zugang, Soll) an Kasse (Abgang, Haben).",
            },
            {
              id: "imp_wiso-buchung-1_3",
              q: "Vorsteuer entsteht …",
              options: [
                "beim Verkauf",
                "bei der Lohnzahlung",
                "beim Jahresabschluss",
                "beim Einkauf",
              ],
              correct: 3,
              explain:
                "Die beim Einkauf gezahlte USt ist eine Forderung ans Finanzamt = Vorsteuer.",
            },
            {
              id: "imp_wiso-buchung-1_4",
              q: "Zahllast ans Finanzamt = …",
              options: [
                "Umsatzsteuer − Vorsteuer",
                "Vorsteuer − Umsatzsteuer",
                "Umsatz × 19 %",
                "Gewinn × 19 %",
              ],
              correct: 0,
              explain:
                "Eingenommene USt minus gezahlte Vorsteuer ergibt die abzuführende Zahllast.",
            },
            {
              id: "imp_wiso-buchung-1_5",
              q: "Einkauf 1.000 € netto auf Ziel, 19 % USt – Haben-Buchung?",
              options: [
                "Verbindlichkeiten 1.000",
                "Bank 1.190",
                "Verbindlichkeiten 1.190",
                "Vorsteuer 190",
              ],
              correct: 2,
              explain:
                "BGA 1.000 + Vorsteuer 190 an Verbindlichkeiten 1.190 (Bruttobetrag als Schuld).",
            },
            {
              id: "imp_wiso-buchung-1_6",
              q: "Doppelte Buchführung heißt: jeder Vorfall …",
              options: [
                "wird zweimal geprüft",
                "berührt mindestens zwei Konten",
                "wird doppelt bezahlt",
                "braucht zwei Belege",
              ],
              correct: 1,
              explain:
                "Jede Buchung hat Soll- und Haben-Seite auf (mindestens) zwei Konten – daher „doppelt“.",
            },
            {
              id: "imp_wiso-buchung-1_7",
              q: "Der Saldo eines Kontos steht …",
              options: [
                "immer im Soll",
                "immer im Haben",
                "auf der schwächeren Seite",
                "auf der stärkeren Seite",
              ],
              correct: 2,
              explain:
                "Der Saldo gleicht die Seiten aus – er steht auf der betragskleineren Seite.",
            },
            {
              id: "imp_wiso-buchung-1_8",
              q: "Bestandskonten werden abgeschlossen über das …",
              options: ["GuV-Konto", "Privatkonto", "EBK", "Schlussbilanzkonto (SBK)"],
              correct: 3,
              explain:
                "Bestandskonten → SBK; Erfolgskonten → GuV; Eröffnung im neuen Jahr über das EBK.",
            },
            {
              id: "imp_wiso-buchung-1_9",
              q: "Kunde zahlt Rechnung 1.190 € per Überweisung. Buchungssatz?",
              options: [
                "Bank an Forderungen 1.190",
                "Forderungen an Bank 1.190",
                "Bank an Umsatzerlöse 1.190",
                "Kasse an Bank 1.190",
              ],
              correct: 0,
              explain:
                "Bank (Zugang, Soll) an Forderungen (Abgang, Haben) – der Erlös wurde schon bei Rechnungsstellung gebucht.",
            },
            {
              id: "imp_wiso-buchung-1_10",
              q: "Passivkonto Verbindlichkeiten: eine Tilgung wird gebucht …",
              options: ["im Haben", "im Soll", "gar nicht", "doppelt"],
              correct: 1,
              explain: "Passivkonten nehmen im Haben zu – Abgänge (Tilgung) stehen im Soll.",
            },
          ],
        },
        {
          id: "wiso-guv-1",
          title: "Erfolgskonten, GuV & Abschlussbuchungen",
          content: [
            { type: "heading", value: "Bestand oder Erfolg? Die wichtigste Weiche" },
            {
              type: "text",
              value:
                "Bestandskonten (aus der Bilanz) erfassen, WAS da ist. Erfolgskonten erfassen, was das Eigenkapital VERÄNDERT: Aufwendungen (Werteverzehr: Löhne, Miete, Abschreibungen, Wareneinsatz, Zinsen) mindern das EK und werden im SOLL gebucht; Erträge (Wertzuwachs: Umsatzerlöse, Zinserträge, Mieterträge) mehren das EK und stehen im HABEN. Faustregel: Alles, was Gewinn oder Verlust beeinflusst, läuft über Erfolgskonten – nicht direkt übers Eigenkapital.",
            },
            { type: "heading", value: "Typische Buchungen mit Erfolgskonten" },
            {
              type: "text",
              value:
                "Miete 800 € per Bank: „Mietaufwand 800 an Bank 800“. · Gehaltszahlung: „Personalaufwand an Bank“. · Dienstleistung 2.000 € netto auf Rechnung: „Forderungen 2.380 an Umsatzerlöse 2.000 + Umsatzsteuer 380“. · Jahresabschreibung des Servers (AfA, siehe Formelsammlung): „Abschreibungen 1.000 an BGA 1.000“ – der Aufwand mindert den Gewinn UND den Buchwert des Anlageguts. So landet die lineare AfA aus der Kostenrechnung sauber in der Buchführung.",
            },
            { type: "heading", value: "Abschluss über das GuV-Konto" },
            {
              type: "text",
              value:
                "Am Jahresende werden alle Erfolgskonten über das Gewinn- und Verlustkonto (GuV) abgeschlossen: Aufwandssalden auf die Soll-Seite der GuV, Ertragssalden auf die Haben-Seite. Sind die Erträge größer, entsteht GEWINN – der Saldo wird ans Eigenkapital gebucht („GuV an Eigenkapital“); bei Verlust umgekehrt („Eigenkapital an GuV“). Damit schließt sich die Logik: Erfolgskonten sind nichts anderes als ausgelagerte Unterkonten des Eigenkapitals. Reihenfolge des Jahresabschlusses: 1. Erfolgskonten → GuV, 2. GuV-Saldo → EK, 3. Bestandskonten → SBK.",
            },
            { type: "heading", value: "Privatkonto & Kontenrahmen (kurz)" },
            {
              type: "text",
              value:
                "Bei Einzelunternehmen laufen Entnahmen und Einlagen des Inhabers über das Privatkonto (Unterkonto des EK, Abschluss direkt gegen EK – NICHT über die GuV, denn Privatentnahmen sind kein Aufwand!). Damit alle gleich buchen, ordnen Kontenrahmen (z. B. SKR 03/SKR 04 der DATEV, Industriekontenrahmen IKR) jedem Konto eine Nummer zu – die Systematik zu kennen reicht für die Berufsschule, auswendig lernen musst du sie nicht.",
            },
            {
              type: "note",
              value:
                "Merkhilfen: AUFWAND im SOLL, ERTRAG im HABEN („Aufwand solls zahlen, Ertrag haben wir gern“). Abschlusskette: Erfolgskonten → GuV → EK · Bestandskonten → SBK. Privatentnahme ≠ Aufwand!",
            },
            { type: "heading", value: "Übungsaufgabe: Vom Vorfall zum Gewinn" },
            {
              type: "text",
              value:
                "Ein IT-Einzelunternehmen hat im Jahr gebucht: Umsatzerlöse 120.000 €, Zinsertrag 500 €, Personalaufwand 60.000 €, Mietaufwand 12.000 €, Abschreibungen 8.000 €, Zinsaufwand 1.500 €. a) Bilde den Buchungssatz für die Jahres-AfA. b) Stelle die GuV auf und ermittle den Erfolg. c) Wohin wird der Saldo gebucht – mit Buchungssatz?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Abschreibungen 8.000 an BGA 8.000.\nb) GuV: Soll (Aufwände) 60.000 + 12.000 + 8.000 + 1.500 = 81.500 · Haben (Erträge) 120.000 + 500 = 120.500 → Gewinn = 120.500 − 81.500 = 39.000 €.\nc) Gewinn erhöht das Eigenkapital: „GuV 39.000 an Eigenkapital 39.000“.",
            },
            { type: "heading", value: "Rechnungsabgrenzung: Aufwand ins richtige Jahr" },
            {
              type: "text",
              value:
                "Zahlungen und Aufwand/Ertrag fallen nicht immer ins selbe Jahr – die Rechnungsabgrenzung sorgt für periodengerechten Erfolg: AKTIVE Rechnungsabgrenzung (ARAP, Aktivposten): Wir zahlen JETZT für Leistung im NÄCHSTEN Jahr – z. B. im Dezember die Serverwartung für Januar–März vorausbezahlt. Buchung im alten Jahr: „ARAP an Bank“, im neuen Jahr: „Wartungsaufwand an ARAP“. · PASSIVE Rechnungsabgrenzung (PRAP, Passivposten): Wir erhalten JETZT Geld für Leistung, die wir erst im nächsten Jahr erbringen – z. B. der Kunde zahlt den Jahres-Supportvertrag im Dezember im Voraus: „Bank an PRAP“, im neuen Jahr „PRAP an Umsatzerlöse“. Merksatz: ARAP = ich habe VORgezahlt (mein Guthaben) · PRAP = ich wurde VORAUSbezahlt (meine Schuld auf Leistung).",
            },
            {
              type: "note",
              value:
                "Eselsbrücke: A-RAP = Ausgabe vor dem Stichtag, Aufwand danach. P-RAP = Einnahme (Prämie) vor dem Stichtag, Ertrag danach.",
            },
          ],
          quiz: [
            {
              id: "imp_wiso-guv-1_0",
              q: "Aufwendungen werden gebucht …",
              options: [
                "im Soll des Erfolgskontos",
                "im Haben des Erfolgskontos",
                "direkt im EK",
                "im SBK",
              ],
              correct: 0,
              explain: "Aufwand mindert das EK und steht im Soll; Erträge stehen im Haben.",
            },
            {
              id: "imp_wiso-guv-1_1",
              q: "Erfolgskonten werden abgeschlossen über …",
              options: ["das SBK", "das GuV-Konto", "das EBK", "die Kasse"],
              correct: 1,
              explain:
                "Alle Aufwands- und Ertragssalden laufen in die GuV; deren Saldo geht ans EK.",
            },
            {
              id: "imp_wiso-guv-1_2",
              q: "Jahres-AfA eines Servers – Buchungssatz?",
              options: [
                "BGA an Abschreibungen",
                "Abschreibungen an Bank",
                "Abschreibungen an BGA",
                "AfA an GuV",
              ],
              correct: 2,
              explain: "Der Aufwand „Abschreibungen“ (Soll) mindert den Buchwert der BGA (Haben).",
            },
            {
              id: "imp_wiso-guv-1_3",
              q: "Erträge > Aufwendungen in der GuV bedeutet …",
              options: ["Verlust", "Bilanzverkürzung", "Zahllast", "Gewinn"],
              correct: 3,
              explain:
                "Übersteigen die Erträge die Aufwände, entsteht Gewinn – gebucht „GuV an EK“.",
            },
            {
              id: "imp_wiso-guv-1_4",
              q: "Privatentnahmen des Inhabers sind …",
              options: [
                "kein Aufwand – sie laufen übers Privatkonto",
                "Personalaufwand des Unternehmens",
                "sonstiger betrieblicher Aufwand",
                "eine Minderung der Umsatzerlöse",
              ],
              correct: 0,
              explain:
                "Entnahmen mindern das EK direkt (Privatkonto) und dürfen den Gewinn nicht verfälschen.",
            },
            {
              id: "imp_wiso-guv-1_5",
              q: "Gehaltszahlung per Bank – Buchungssatz?",
              options: [
                "Bank an Personalaufwand",
                "Personalaufwand an Bank",
                "Personalaufwand an Kasse",
                "GuV an Bank",
              ],
              correct: 1,
              explain: "Aufwand im Soll, Bankabgang im Haben.",
            },
            {
              id: "imp_wiso-guv-1_6",
              q: "Ein Kontenrahmen (z. B. SKR 04, IKR) dient …",
              options: [
                "der Steuerberechnung",
                "der Inventur",
                "der einheitlichen Kontensystematik",
                "dem Mahnwesen",
              ],
              correct: 2,
              explain:
                "Er nummeriert und ordnet die Konten einheitlich – Grundlage für Software und Vergleichbarkeit.",
            },
            {
              id: "imp_wiso-guv-1_7",
              q: "Der Gewinn wird gebucht als …",
              options: ["EK an GuV", "GuV an EK", "GuV an Bank", "SBK an GuV"],
              correct: 1,
              explain:
                "Gewinn mehrt das Eigenkapital: GuV (Soll) an Eigenkapital (Haben); Verlust umgekehrt.",
            },
            {
              id: "imp_wiso-guv-1_8",
              q: "Welches Konto ist ein ERFOLGSkonto?",
              options: ["Vorräte", "Verbindlichkeiten", "Bank", "Mietaufwand"],
              correct: 3,
              explain:
                "Mietaufwand verändert den Erfolg; Vorräte/Bank/Verbindlichkeiten sind Bestandskonten.",
            },
            {
              id: "imp_wiso-guv-1_9",
              q: "Richtige Abschluss-Reihenfolge?",
              options: [
                "Erfolgskonten→GuV, GuV→EK, Bestandskonten→SBK",
                "erst SBK, dann GuV, dann Eigenkapital",
                "Eigenkapital vor GuV und Schlussbilanz",
                "Bestandskonten direkt in die GuV",
              ],
              correct: 0,
              explain:
                "Erst den Erfolg ermitteln und ins EK bringen, dann die Bestände in die Schlussbilanz.",
            },
            {
              id: "imp_wiso-guv-1_g_rap1",
              q: "Im Dezember wird die Januar-Miete vorausbezahlt. Das ist ein Fall für …",
              options: ["ARAP (aktive Rechnungsabgrenzung)", "PRAP", "Rückstellung", "Privatkonto"],
              correct: 0,
              explain:
                "Ausgabe jetzt, Aufwand im neuen Jahr → aktiver Abgrenzungsposten: ARAP an Bank.",
            },
            {
              id: "imp_wiso-guv-1_g_rap2",
              q: "Der Kunde zahlt den Jahres-Supportvertrag im Voraus. Buchung beim IT-Betrieb?",
              options: [
                "Bank an Umsatzerlöse (sofort alles)",
                "Bank an PRAP",
                "PRAP an Bank",
                "Forderungen an PRAP",
              ],
              correct: 1,
              explain:
                "Einnahme jetzt, Ertrag später → passive Abgrenzung; im Folgejahr PRAP an Umsatzerlöse.",
            },
          ],
        },
      ],
    },
    {
      id: "wirt5-pers",
      title: "Personal & Führung",
      lessons: [
        {
          id: "wiso-personal-1",
          title: "Führung, Beurteilung & Arbeitszeugnis",
          content: [
            { type: "heading", value: "Die klassischen Führungsstile" },
            {
              type: "text",
              value:
                "AUTORITÄR: Die Führungskraft entscheidet allein, Anweisungen von oben, Kontrolle statt Vertrauen. Schnell in Krisen, aber demotivierend und fehleranfällig (niemand widerspricht). · KOOPERATIV (demokratisch): Entscheidungen entstehen im Dialog, Mitarbeitende werden beteiligt, Verantwortung wird delegiert. Höhere Motivation und bessere Lösungen – aber langsamer. · LAISSEZ-FAIRE: Das Team arbeitet weitgehend ohne Eingriff. Funktioniert nur mit erfahrenen, selbstorganisierten Profis, sonst droht Orientierungslosigkeit. Modern ist SITUATIVE Führung: Der Stil richtet sich nach Reifegrad und Lage – der neue Azubi braucht mehr Anleitung als die Senior-Adminin, und beim Serverbrand wird nicht basisdemokratisch abgestimmt. Dazu die Management-Techniken: Management by Objectives (Führen über vereinbarte Ziele – Grundlage vieler Zielvereinbarungsgespräche) und Management by Exception (Eingreifen nur bei Abweichungen).",
            },
            { type: "heading", value: "Personalbeurteilung & Mitarbeitergespräch" },
            {
              type: "text",
              value:
                "Die Personalbeurteilung bewertet Leistung (was wurde erreicht?) und Verhalten/Potenzial (wie – und was ist möglich?) – idealerweise anhand vorher bekannter, messbarer Kriterien. Das jährliche MITARBEITERGESPRÄCH gehört dazu: Rückblick mit beidseitigem Feedback, Zielvereinbarung (SMART!), Entwicklungs- und Weiterbildungsplanung. Typische Beurteilungsfehler, die auch in der Prüfung gefragt werden: Halo-Effekt (ein Merkmal überstrahlt alles), Sympathie-/Ähnlichkeitsfehler, Tendenz zur Mitte, Nikolaus-Effekt (nur die letzten Wochen zählen). Für dich als Azubi: Dein Beurteilungsbogen je Ausbildungsabschnitt folgt derselben Logik – und ein gutes Gespräch ist keine Prüfung, sondern deine Gelegenheit, Wünsche (Abteilung, Themen, Übernahme) zu platzieren.",
            },
            { type: "heading", value: "Das Arbeitszeugnis: wohlwollend, wahr – und codiert" },
            {
              type: "text",
              value:
                "Jeder Arbeitnehmer hat bei Beendigung Anspruch auf ein schriftliches Zeugnis (§ 109 GewO, für Azubis § 16 BBiG): einfaches Zeugnis (Art und Dauer) oder qualifiziertes Zeugnis (zusätzlich Leistung und Verhalten). Es muss WAHR und zugleich WOHLWOLLEND sein – aus diesem Spannungsfeld entstand die berühmte Zeugnissprache: „stets zur vollsten Zufriedenheit“ = sehr gut · „stets zur vollen Zufriedenheit“ = gut · „zur vollen Zufriedenheit“ = befriedigend · „zur Zufriedenheit“ = ausreichend · „im Großen und Ganzen zur Zufriedenheit“ = mangelhaft · „hat sich bemüht“ = ungenügend. Warnsignale: Ausgelassenes spricht Bände (fehlender Dank/Bedauern), „gesellig“ kann auf Alkohol anspielen, „zeigte Verständnis für die Arbeit“ heißt: verstanden ja, gekonnt nein. Wichtig: Geheimcodes und doppeldeutige Formulierungen sind unzulässig – wer sie findet, hat Anspruch auf Berichtigung.",
            },
            { type: "heading", value: "Aufbau- vs. Ablauforganisation" },
            {
              type: "text",
              value:
                "Die AUFBAUorganisation regelt die STRUKTUR: Wer gehört zu welcher Abteilung, wer hat welche Weisungsbefugnis? Dargestellt im Organigramm (Einlinien-, Mehrlinien-, Stablinien-, Matrixorganisation – alles in der Organisations-Lektion). Die ABLAUForganisation regelt die PROZESSE: In welcher Reihenfolge, mit welchen Mitteln, an welchem Ort läuft die Arbeit? Ihre Werkzeuge sind Prozessdarstellungen wie die EPK (eigene Lektion „Geschäftsprozesse“) oder Flussdiagramme. Merksatz: Aufbau = WER mit WEM (Statik) · Ablauf = WAS nach WAS (Dynamik). Beide müssen zusammenpassen: Die beste Prozesskette scheitert, wenn die Zuständigkeit fehlt.",
            },
            {
              type: "note",
              value:
                "Merkhilfen: Führungsstile „AKL“ – Autoritär, Kooperativ, Laissez-faire (+ situativ als Antwort auf fast jede Prüfungsfrage). Zeugnis-Skala: vollste > volle > volle weglassen > nur zufrieden > im Großen und Ganzen > bemüht. Aufbau = Organigramm, Ablauf = Prozess.",
            },
            { type: "heading", value: "Übungsaufgabe: Zeugnis entschlüsseln" },
            {
              type: "text",
              value:
                "a) Übersetze in Schulnoten: 1. „Sie erledigte ihre Aufgaben stets zur vollen Zufriedenheit.“ 2. „Er bemühte sich, den Anforderungen gerecht zu werden.“ 3. „Ihre Leistungen fanden unsere vollste Zufriedenheit – stets.“ b) Ein Teamleiter entscheidet im Ransomware-Notfall allein und ohne Diskussion – welcher Führungsstil, und warum ist er hier richtig? c) Nenne zwei typische Beurteilungsfehler mit je einem Beispiel.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) 1. Note 2 (gut) · 2. Note 6 („bemüht“ = ungenügend) · 3. Note 1 (stets + vollste).\nb) Autoritär (bzw. situativ-direktiv): In akuten Krisen zählen Geschwindigkeit und klare Ansagen – Abstimmung käme zu spät. Danach zurück zum kooperativen Stil inkl. Nachbesprechung.\nc) Z. B. Halo-Effekt (der beste Programmierer wird automatisch auch als teamfähig bewertet) und Nikolaus-Effekt (die starke Leistung im November überdeckt das restliche Jahr).",
            },
          ],
          quiz: [
            {
              id: "imp_wiso-personal-1_0",
              q: "„Hat sich stets bemüht“ im Zeugnis bedeutet …",
              options: ["sehr gut", "befriedigend", "ausreichend", "ungenügend"],
              correct: 3,
              explain:
                "„Bemüht“ = versucht, aber nicht geschafft – die schlechteste Stufe der Zeugnissprache.",
            },
            {
              id: "imp_wiso-personal-1_1",
              q: "„Stets zur vollen Zufriedenheit“ entspricht der Note …",
              options: ["1", "2", "3", "4"],
              correct: 1,
              explain: "„Vollste“ + stets = 1; „volle“ + stets = 2; ohne „stets“ = 3.",
            },
            {
              id: "imp_wiso-personal-1_2",
              q: "Beim kooperativen Führungsstil …",
              options: [
                "entscheidet die Führungskraft allein",
                "werden Mitarbeitende an Entscheidungen beteiligt",
                "gibt es keine Führung",
                "entscheidet immer das Los",
              ],
              correct: 1,
              explain:
                "Dialog, Delegation, Beteiligung – motivierend, aber langsamer als autoritär.",
            },
            {
              id: "imp_wiso-personal-1_3",
              q: "Situative Führung heißt …",
              options: [
                "Stil wechselt je nach Lage und Reifegrad",
                "jeden Tag ein anderer Chef",
                "Führung nur in Krisen",
                "keine Regeln",
              ],
              correct: 0,
              explain:
                "Der neue Azubi braucht Anleitung, der Profi Freiraum, die Krise klare Ansagen.",
            },
            {
              id: "imp_wiso-personal-1_4",
              q: "Der Halo-Effekt ist …",
              options: [
                "ein Beleuchtungsfehler",
                "ein Merkmal überstrahlt die Gesamtbeurteilung",
                "die Tendenz zur Mitte",
                "ein Zeugnis-Code",
              ],
              correct: 1,
              explain:
                "Klassischer Beurteilungsfehler: Ein herausragendes (oder schlechtes) Merkmal färbt alles andere.",
            },
            {
              id: "imp_wiso-personal-1_5",
              q: "Ein qualifiziertes Zeugnis enthält zusätzlich …",
              options: [
                "das Gehalt",
                "Leistung und Verhalten",
                "private Hobbys",
                "den Kündigungsgrund",
              ],
              correct: 1,
              explain:
                "Einfach = Art und Dauer; qualifiziert = plus Leistungs- und Verhaltensbeurteilung. Anspruch: § 109 GewO / § 16 BBiG.",
            },
            {
              id: "imp_wiso-personal-1_6",
              q: "Aufbauorganisation vs. Ablauforganisation:",
              options: [
                "Aufbau = Struktur/Organigramm, Ablauf = Prozesse",
                "Aufbau = Prozesse, Ablauf = Struktur",
                "beides dasselbe",
                "Aufbau gilt nur für Konzerne",
              ],
              correct: 0,
              explain:
                "Aufbau: wer mit wem (Statik). Ablauf: was nach was (Dynamik, z. B. als EPK).",
            },
            {
              id: "imp_wiso-personal-1_7",
              q: "Management by Objectives führt über …",
              options: [
                "ständige Kontrolle",
                "vereinbarte Ziele",
                "Ausnahmen",
                "Dienstanweisungen",
              ],
              correct: 1,
              explain:
                "Zielvereinbarung statt Einzelanweisung – Basis des jährlichen Mitarbeitergesprächs.",
            },
            {
              id: "imp_wiso-personal-1_8",
              q: "Ein Zeugnis muss sein:",
              options: [
                "kritisch und schonungslos",
                "wahr und wohlwollend",
                "kurz und mündlich",
                "vom Betriebsrat verfasst",
              ],
              correct: 1,
              explain:
                "Aus dem Spannungsfeld wahr + wohlwollend entstand die codierte Zeugnissprache; Geheimcodes sind unzulässig.",
            },
            {
              id: "imp_wiso-personal-1_9",
              q: "Laissez-faire funktioniert am ehesten bei …",
              options: [
                "neuen Auszubildenden",
                "erfahrenen, selbstorganisierten Teams",
                "Notfällen",
                "Fließbandarbeit",
              ],
              correct: 1,
              explain:
                "Ohne Erfahrung und Selbstorganisation führt fehlende Führung zu Orientierungslosigkeit.",
            },
          ],
        },
      ],
    },
  ],
};
