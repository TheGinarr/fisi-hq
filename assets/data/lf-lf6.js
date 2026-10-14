window.LF_CONTENT = window.LF_CONTENT || {};
window.LF_CONTENT["lf6"] = {
  topics: [
    {
      id: "lf6-sm",
      title: "Service-Management",
      lessons: [
        {
          id: "lf6-sm-1",
          title: "ITIL, SLA & Ticketsysteme",
          content: [
            { type: "heading", value: "ITIL 4 Überblick" },
            {
              type: "text",
              value:
                "ITIL (Information Technology Infrastructure Library) ist ein Framework für IT-Service-Management (ITSM). Kernidee: IT ist kein Selbstzweck, sondern liefert Services, die Geschäftsprozesse unterstützen. ITIL 4 organisiert sich um das Service Value System (SVS) mit der Service Value Chain: Plan → Improve → Engage → Design & Transition → Obtain/Build → Deliver & Support.",
            },
            { type: "heading", value: "Wichtige ITIL-Praktiken" },
            {
              type: "text",
              value:
                "Incident Management: Störung so schnell wie möglich beheben (Workaround erlaubt). Ziel: Normalbetrieb wiederherstellen. Problem Management: Ursache finden und dauerhaft beseitigen (Root Cause Analysis). Ein Problem kann mehrere Incidents verursachen. Change Management: Änderungen kontrolliert durchführen (RFC → Bewertung → Genehmigung → Umsetzung → Review). Standard Changes (vorab genehmigt), Normal Changes (CAB-Genehmigung), Emergency Changes (beschleunigte Genehmigung, z. B. durch ein Emergency-CAB; Dokumentation ggf. nachträglich). Service Request Management: Standardanfragen (Passwort-Reset, neue Hardware, Zugang). Kein Incident, kein Change – einfach eine Bestellung.",
            },
            { type: "heading", value: "SLA, OLA, UC" },
            {
              type: "text",
              value:
                "SLA (Service Level Agreement): Vertrag mit dem KUNDEN. Definiert Verfügbarkeit, Reaktionszeit, Lösungszeit, Servicezeiten, Eskalationsstufen, Penalties bei Nichteinhaltung. Beispiel: Verfügbarkeit 99,5%, Reaktionszeit 4h, Lösungszeit 8h bei Priorität 1. OLA (Operational Level Agreement): INTERNE Vereinbarung zwischen IT-Teams. Beispiel: Netzwerk-Team liefert Portfreischaltung innerhalb 2h. UC (Underpinning Contract): Vertrag mit EXTERNEM Dienstleister. Beispiel: ISP garantiert 99,9% Uptime der Internetleitung.",
            },
            { type: "heading", value: "Ticketsystem und Priorisierung" },
            {
              type: "text",
              value:
                "Ticketsystem (z.B. OTRS, Znuny, JIRA Service Desk, Freshdesk): Zentrale Erfassung, Kategorisierung, Priorisierung, Nachverfolgung und Dokumentation aller Anfragen. Priorisierung = Auswirkung × Dringlichkeit. Hoch/Hoch = Prio 1 (z.B. E-Mail-Server down, 500 User betroffen). Hoch/Niedrig = Prio 2. Niedrig/Hoch = Prio 3. Niedrig/Niedrig = Prio 4.",
            },
            { type: "heading", value: "Support-Level" },
            {
              type: "text",
              value:
                "1st Level (Service Desk/Helpdesk): Erste Anlaufstelle, Ticket erstellen, bekannte Lösungen anwenden (Knowledge Base), einfache Probleme sofort lösen, Rest eskalieren. Lösungsquote: ~60-70%. 2nd Level (Spezialisten): Tiefergehende Analyse, Netzwerk-/Server-/Anwendungsspezialisten. 3rd Level (Experten/Hersteller): Entwickler, Hersteller-Support, Root-Cause-Analyse bei komplexen Problemen. Funktionale Eskalation: An Spezialisten-Team. Hierarchische Eskalation: An Vorgesetzten (wenn SLA-Verletzung droht).",
            },
            {
              type: "note",
              value:
                "ITIL-Begriffe kommen regelmäßig in AP1 und AP2 dran. Besonders wichtig: Unterschied Incident vs. Problem vs. Service Request, SLA vs. OLA, und die Support-Level-Struktur.",
            },
            { type: "heading", value: "Übungsaufgabe 1: SLA definieren" },
            {
              type: "text",
              value:
                "Definiere für einen Webshop-SLA: Verfügbarkeit, Reaktionszeit und Wiederherstellungszeit für Kritisch/Hoch/Normal.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nVerfügbarkeit: 99,5%\nKritisch (Shop down): Reaktion 30 Min, Wiederherstellung 4h\nHoch (Teilausfall): Reaktion 2h, Wiederherstellung 8h\nNormal (Kosmetik): Reaktion 8h, Wiederherstellung 3 Werktage\nServicezeiten: Mo-Fr 8-18 (24/7 bei Kritisch).",
            },
            { type: "heading", value: "Übungsaufgabe 2: Incident vs. Problem" },
            {
              type: "text",
              value: "Unterschied Incident Management und Problem Management? Je ein Beispiel.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nIncident: Schnelle Wiederherstellung. Bsp: Drucker druckt nicht → Dienst neustarten → gelöst.\nProblem: Ursache dauerhaft beseitigen. Bsp: Drucker fällt regelmäßig aus → Treiber-Bug → Update.\nIncident = Symptom (schnell). Problem = Ursache (nachhaltig).",
            },
            { type: "heading", value: "Beispiel 1: SLA im IT-Dienstleistungsvertrag" },
            {
              type: "text",
              value:
                "SLA zwischen IT-Dienstleister und Kunde: Verfügbarkeit: 99,5% pro Monat (= max. 3,6h Ausfall/Monat). Reaktionszeit: Kritisch (Prio 1): 30 Minuten. Normal (Prio 3): 4 Stunden. Lösungszeit: Prio 1: 4 Stunden, Prio 3: 2 Arbeitstage. Servicezeiten: Mo-Fr 08:00-18:00 (Prio 1-2 auch 24/7). Reporting: Monatlicher Bericht über Verfügbarkeit, Tickets, SLA-Einhaltung. Pönale: Bei SLA-Verletzung 5% Gutschrift auf Monatspauschale.",
            },
            { type: "heading", value: "Beispiel 2: Ticket-Lebenszyklus in ITIL" },
            {
              type: "text",
              value:
                "1. Erfassung: User meldet per Mail/Portal/Telefon → Ticket wird erstellt. 2. Klassifizierung: Incident vs. Service Request. Priorität = Auswirkung × Dringlichkeit. 3. Zuweisung: 1st Level versucht Sofortlösung (Known Error DB). Nicht lösbar → Eskalation an 2nd Level. 4. Bearbeitung: Diagnose, Workaround oder Lösung. 5. Lösung + Dokumentation: Lösung im Ticket dokumentieren. 6. Abschluss: Bestätigung durch User, Ticket schließen. Wissensdatenbank aktualisieren.",
            },
            { type: "heading", value: "Beispiel 3: Incident vs. Problem vs. Change" },
            {
              type: "text",
              value:
                "Incident: Ungeplante Unterbrechung/Qualitätsminderung eines Services. Beispiel: E-Mail-Server ist down. Ziel: Schnellstmöglich wiederherstellen. Problem: Unbekannte Ursache eines oder mehrerer Incidents. Beispiel: Warum stürzt der E-Mail-Server jede Woche ab? Ziel: Root Cause finden und beseitigen. Change: Geplante Änderung am Service. Beispiel: Exchange auf neue Version updaten. Ziel: Änderung kontrolliert durchführen (RFC → CAB → Genehmigung → Umsetzung → Review).",
            },
            { type: "heading", value: "Übungsaufgabe 3: SLA-Verletzung berechnen" },
            {
              type: "text",
              value:
                "Ein Kunde hat ein SLA mit 99,9% Verfügbarkeit pro Monat. Im November (30 Tage) gab es 2 Ausfälle: 45 Minuten am 5.11. und 2 Stunden am 20.11. Wurde das SLA eingehalten? Berechne die tatsächliche Verfügbarkeit.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nGesamtzeit im November: 30 Tage × 24 Stunden = 720 Stunden\nMaximal erlaubte Ausfallzeit bei 99,9%: 720 × 0,001 = 0,72 Stunden = 43,2 Minuten\n\nTatsächliche Ausfallzeit: 45 Min + 120 Min = 165 Minuten = 2,75 Stunden\nTatsächliche Verfügbarkeit: (720 - 2,75) / 720 × 100 = 99,62%\n\nErgebnis: SLA VERLETZT!\n- Gefordert: 99,9% (max. 43,2 Min Ausfall)\n- Erreicht: 99,62% (165 Min Ausfall)\n- Überschreitung: 121,8 Minuten\n\nMaßnahmen:\n- Pönale gemäß Vertrag (z.B. 5% Gutschrift)\n- Root-Cause-Analyse, warum die Ausfälle passierten\n- Maßnahmen zur Vermeidung dokumentieren\n- Im Monatsbericht transparent kommunizieren",
            },
          ],
          quiz: [
            {
              id: "imp_lf6-sm-1_0",
              q: "Incident vs. Problem?",
              options: [
                "Problem = die akute Störung im Tagesbetrieb",
                "Incident = die dahinterliegende Grundursache",
                "Beide Begriffe sind in ITIL gleichbedeutend",
                "Incident = Störung, Problem = Ursache dahinter",
              ],
              correct: 3,
              explain: "Incident beheben, Problem = Ursache finden.",
            },
            {
              id: "imp_lf6-sm-1_1",
              q: "SLA ist Vertrag mit?",
              options: ["Internem Team", "Externem DL", "Kunden", "Hersteller"],
              correct: 2,
              explain: "SLA = Kundenvertrag. OLA = intern. UC = externer DL.",
            },
            {
              id: "imp_lf6-sm-1_2",
              q: "Priorisierungsformel?",
              options: [
                "Auswirkung x Dringlichkeit",
                "Nur Dringlichkeit",
                "Nur Auswirkung",
                "Kosten x Zeit",
              ],
              correct: 0,
              explain: "Prio = Impact x Urgency.",
            },
            {
              id: "imp_lf6-sm-1_3",
              q: "1st-Level-Aufgabe?",
              options: [
                "Fehlerhaften Quellcode analysieren und direkt patchen",
                "Die Root Cause tiefgehend analysieren und beheben",
                "Defekte Hardware vor Ort ausbauen und ersetzen",
                "Ticket erstellen, KB nutzen, einfach lösen, eskalieren",
              ],
              correct: 3,
              explain: "Erste Anlaufstelle, bekannte Lösungen anwenden.",
            },
            {
              id: "imp_lf6-sm-1_4",
              q: "Change: RFC?",
              options: [
                "Request for Comment",
                "Request for Change (Änderungsantrag)",
                "Required Field Check",
                "Remote Function Call",
              ],
              correct: 1,
              explain: "RFC: Formaler Antrag für eine Änderung.",
            },
            {
              id: "imp_lf6-sm-1_5",
              q: "OLA = ?",
              options: [
                "Interne Vereinbarung zwischen IT-Teams",
                "Nur für Cloud",
                "Kundenvertrag",
                "Externer Vertrag",
              ],
              correct: 0,
              explain: "Operational Level Agreement: Intern.",
            },
            {
              id: "imp_lf6-sm-1_6",
              q: "Service-Request-Beispiel?",
              options: [
                "Netzwerkausfall",
                "Virenbefall",
                "Neuen Monitor bestellen, Passwort-Reset",
                "Server down",
              ],
              correct: 2,
              explain: "Standardanfragen, kein Incident.",
            },
            {
              id: "imp_lf6-sm-1_7",
              q: "Knowledge-Base-Zweck?",
              options: [
                "Marketingtexte für die Außendarstellung des Supports pflegen",
                "Langzeitarchiv für geschlossene Tickets ohne weitere Nutzung",
                "Exklusive Wissenssammlung, auf die nur der 3rd Level zugreift",
                "Dokumentierte Lösungen für bekannte Probleme wiederverwenden",
              ],
              correct: 3,
              explain: "KB: 1st Level kann bekannte Lösungen sofort anwenden.",
            },
            {
              id: "imp_lf6-sm-1_8",
              q: "CAB = ?",
              options: [
                "Config Auto Backup",
                "Cloud Application Builder",
                "Change Advisory Board (bewertet Changes)",
                "Central Admin Backup",
              ],
              correct: 2,
              explain: "CAB: Gremium, das Changes bewertet und genehmigt.",
            },
            {
              id: "imp_lf6-sm-1_9",
              q: "Hierarchische Eskalation?",
              options: ["An Vorgesetzten", "An den Kunden", "An den Hersteller", "An Spezialisten"],
              correct: 0,
              explain: "Bei drohendem SLA-Bruch. An höhere Management-Ebene, wenn SLA in Gefahr.",
            },
            {
              id: "imp_lf6-sm-1_10",
              q: "Was ist ein SLA?",
              options: [
                "Server Load Analyzer",
                "Service Level Agreement",
                "Software License Agreement",
                "System Log Archive",
              ],
              correct: 1,
              explain:
                "Vertragliche Vereinbarung über Qualität/Verfügbarkeit. SLA: Definiert messbare Qualitätskriterien (Verfügbarkeit, Reaktionszeit, Lösungszeit) zwischen Dienstleister und Kunde.",
            },
            {
              id: "imp_lf6-sm-1_11",
              q: "Was ist der Unterschied zwischen Incident und Problem?",
              options: [
                "Es gibt keinen Unterschied, ITIL verwendet beide Begriffe gleichbedeutend",
                "Ein Incident ist lediglich die schwerwiegendere Eskalationsstufe eines Problems",
                "Ein Problem ist ein bereits geschlossener Incident nach der Dokumentation",
                "Incident = Störung beheben (schnell!), Problem = Ursache finden (nachhaltig)",
              ],
              correct: 3,
              explain:
                "Incident: Symptom behandeln (Service wiederherstellen). Problem: Ursache finden, damit es nicht wieder passiert.",
            },
            {
              id: "imp_lf6-sm-1_12",
              q: "Was ist First Level Support?",
              options: [
                "Die höchste Support-Stufe mit den erfahrensten Spezialisten",
                "Erste Anlaufstelle: Ticket-Annahme, bekannte Lösungen, einfache Probleme",
                "Die Administration der Server- und Netzwerkinfrastruktur im Rechenzentrum",
                "Die Entwicklung und Wartung der eingesetzten Unternehmenssoftware",
              ],
              correct: 1,
              explain:
                "1st Level: Annahme, Klassifizierung, Sofortlösung bei bekannten Fehlern. Eskalation an 2nd Level, wenn nötig.",
            },
            {
              id: "imp_lf6-sm-1_13",
              q: "Was bedeutet 99,9% Verfügbarkeit pro Monat?",
              options: [
                "Max. ca. 43 Minuten Ausfallzeit pro Monat (720h × 0,1%)",
                "Der Dienst ist durchgehend ohne jede Ausfallzeit verfügbar",
                "Der Dienst läuft garantiert mindestens 99 Stunden pro Monat",
                "Die höchste erreichbare Verfügbarkeitsstufe ohne Restrisiko",
              ],
              correct: 0,
              explain:
                "720h × 0,001 = 0,72h ≈ 43 Min. 99,99% = max 4,3 Min/Monat. Jede 9 macht es 10× strenger.",
            },
            {
              id: "imp_lf6-sm-1_14",
              q: "Was ist eine Known Error Database (KEDB)?",
              options: [
                "Eine Liste aller aufgetretenen Fehler ohne zugehörige Lösungen",
                "Ein Backup der Konfigurationsdatenbank für den Notfall-Restore",
                "Ein Monitoring-Tool zur Echtzeit-Überwachung von Systemfehlern",
                "Datenbank mit bekannten Fehlern und ihren Workarounds/Lösungen",
              ],
              correct: 3,
              explain:
                "KEDB: 1st Level schlägt bekannte Fehler nach → schnelle Lösung ohne Eskalation. Aus Problem Management befüllt.",
            },
            {
              id: "imp_lf6-sm-1_15",
              q: "Was ist ein Change Advisory Board (CAB)?",
              options: [
                "Ein Entwicklerteam, das die beantragten Changes selbst programmiert",
                "Gremium, das Changes prüft, bewertet und genehmigt/ablehnt",
                "Ein Dashboard zur Live-Anzeige aller offenen Tickets",
                "Eine zentrale Datenbank mit den Stammdaten aller Kunden",
              ],
              correct: 1,
              explain:
                "CAB: Bewertet Risiken, Auswirkungen, Ressourcen für geplante Changes. Genehmigt oder lehnt ab.",
            },
            {
              id: "imp_lf6-sm-1_16",
              q: "Wie berechnet man die Priorität eines Incidents?",
              options: [
                "Nach Kundengröße",
                "Nach Gefühl",
                "Auswirkung × Dringlichkeit = Priorität",
                "Nach Eingangsreihenfolge",
              ],
              correct: 2,
              explain:
                "Auswirkung (Impact): Wie viele betroffen? × Dringlichkeit (Urgency): Wie schnell muss es gelöst werden? = Priorität.",
            },
            {
              id: "imp_lf6-sm-1_17",
              q: "Was ist ITIL?",
              options: [
                "IT Infrastructure Library",
                "Ein Betriebssystem",
                "Ein Ticketsystem",
                "Ein Netzwerkprotokoll",
              ],
              correct: 0,
              explain:
                "Best-Practice-Framework für IT-Service-Management. ITIL: Sammlung von Best Practices für ITSM. Kein Standard (wie ISO), sondern Empfehlungen. Aktuelle Version: ITIL 4.",
            },
            {
              id: "imp_lf6-sm-1_18",
              q: "Was ist ein Workaround?",
              options: [
                "Eine Datensicherung, die vor der Fehlerbehebung angelegt wird",
                "Temporäre Umgehungslösung bis das eigentliche Problem behoben ist",
                "Die endgültige Beseitigung der Fehlerursache im System",
                "Ein Diagnose-Tool zur automatischen Fehlererkennung",
              ],
              correct: 1,
              explain:
                "Workaround: z.B. 'Drucker neu starten' behebt Symptom, aber nicht die Ursache. Dokumentiert in KEDB.",
            },
            {
              id: "imp_lf6-sm-1_19",
              q: "Was ist Eskalation?",
              options: [
                "Weiterleitung an höhere Supportebene (funktional) oder Management (hierarchisch)",
                "Ein Angriff, bei dem Schadsoftware über E-Mail-Anhänge im Unternehmen verteilt wird",
                "Ein zusätzliches Backup, das bei kritischen Störungen automatisch angelegt wird",
                "Die fristlose Kündigung des Supportvertrags durch den unzufriedenen Kunden",
              ],
              correct: 0,
              explain:
                "Funktionale Eskalation: 1st→2nd→3rd Level (technisch). Hierarchische Eskalation: An Management (organisatorisch, z.B. bei SLA-Gefährdung).",
            },
          ],
        },
        {
          id: "lf6-ts-1",
          title: "Systematische Fehlersuche",
          content: [
            { type: "heading", value: "Troubleshooting-Methodik" },
            {
              type: "text",
              value:
                "Systematische Fehlersuche statt Raten! 1. Problem identifizieren: Was genau funktioniert nicht? Seit wann? Was hat sich geändert? Wer ist betroffen? Fehlermeldungen notieren. 2. Ursache eingrenzen: Top-Down (Anwendung→Netzwerk→Hardware) oder Bottom-Up (Kabel→Switch→Server→Anwendung). Divide and Conquer: In der Mitte anfangen. 3. Hypothese aufstellen: Was könnte die Ursache sein? 4. Testen: Eine Sache ändern, Ergebnis prüfen, dokumentieren. 5. Lösung implementieren: Fix anwenden. 6. Verifizieren: Funktioniert alles wieder? Auch für andere User? 7. Dokumentieren: Ticket aktualisieren, Knowledge Base ergänzen.",
            },
            { type: "heading", value: "Top-Down vs. Bottom-Up" },
            {
              type: "text",
              value:
                "Top-Down: Start bei Schicht 7 (Anwendung). Kann der User die Website öffnen? Läuft der Dienst? DNS OK? IP OK? Kabel drin? Vorteil: Schnell bei Anwendungsproblemen. Bottom-Up: Start bei Schicht 1 (Physisch). Kabel drin? Link-LED an? IP konfiguriert? Gateway erreichbar? DNS auflösbar? Dienst erreichbar? Vorteil: Gründlich, übersieht nichts. Divide and Conquer: Ping zum Gateway (Schicht 3 Mitte). Geht? → Problem liegt oberhalb. Geht nicht? → Problem liegt unterhalb.",
            },
            { type: "heading", value: "Die 5 häufigsten Ursachen" },
            {
              type: "text",
              value:
                "1. Kabel/Verbindung (Wackelkontakt, falscher Port, defektes Kabel). 2. DHCP/IP-Konfiguration (keine IP, falsche IP, APIPA 169.254.x.x). 3. DNS (Name wird nicht aufgelöst → nslookup prüfen). 4. Firewall/Portfreischaltung (Dienst läuft, aber Port blockiert). 5. Dienst nicht gestartet (nach Reboot, nach Update, Absturz).",
            },
            { type: "heading", value: "Wichtige Diagnose-Befehle" },
            {
              type: "code",
              value:
                "# Schritt-für-Schritt Diagnose\nipconfig /all          # IP, Gateway, DNS prüfen\nping 127.0.0.1        # Eigener TCP/IP-Stack\nping [Gateway-IP]     # Gateway erreichbar?\nping 8.8.8.8          # Internet erreichbar?\nnslookup example.de   # DNS-Auflösung?\ntracert example.de    # Wo stockt es?\nnetstat -an           # Offene Ports/Verbindungen\ntelnet server 443     # Port erreichbar?",
            },
            {
              type: "note",
              value:
                "In der AP wird oft ein Fehlerszenario beschrieben und du musst systematisch die Ursache finden. Nie raten – immer Schritt für Schritt eingrenzen und begründen!",
            },
            { type: "heading", value: "Übungsaufgabe: Fehleranalyse-Szenario" },
            {
              type: "text",
              value:
                "Ein Nutzer meldet: 'Ich komme nicht ins Internet.' Andere im selben Büro haben das Problem nicht. Beschreibe systematisch dein Vorgehen (Bottom-Up) mit den passenden Befehlen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (Bottom-Up):\n1. Physisch: Kabel/Link-LED? WLAN verbunden?\n2. IP-Konfiguration: ipconfig /all\n   → Hat der PC eine gültige IP oder 169.254.x.x\n     (APIPA = kein DHCP)?\n3. Gateway: ping [Gateway-IP]\n   → erreichbar? Wenn nein: lokales Netzproblem\n4. DNS: nslookup example.de\n   → Name auflösbar? Wenn nein: DNS-Problem\n5. Extern: ping 8.8.8.8 (IP) vs ping google.de (Name)\n   → IP geht, Name nicht = DNS. Beides nicht = Routing\n\nDa NUR dieser Nutzer betroffen ist → Problem liegt\nlokal beim Client (IP/DNS/Kabel), nicht am Gateway\noder der Internetleitung (sonst alle betroffen).",
            },
            { type: "heading", value: "Übungsaufgabe 2: Systematische Fehleranalyse" },
            {
              type: "text",
              value:
                "Mitarbeiter meldet: 'Mein Internet geht nicht.' Systematisches Vorgehen OSI bottom-up?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. Physical: Kabel? LED am Switch?\n2. Data Link: Link-Status (ipconfig /all)?\n3. Network: IP erhalten? APIPA=DHCP-Problem. ping Gateway.\n4. Transport: ping 8.8.8.8 (DNS-unabhängig). Firewall?\n5. Application: nslookup google.de (DNS). Browser-Proxy?\nAlles im Ticket dokumentieren.",
            },
            { type: "heading", value: "Beispiel 1: Systematische Fehlersuche nach OSI" },
            {
              type: "text",
              value:
                "Bottom-Up: Schicht 1 (Kabel, LEDs, Link?), Schicht 2 (MAC, Switch-Port, VLAN?), Schicht 3 (IP, Subnetz, Gateway?), Schicht 4 (Port offen, Firewall?), Schicht 7 (Dienst läuft, Konfiguration?). Beispiel: User kann nicht drucken. Schicht 1: Drucker an? LED? Kabel? Schicht 2: Port am Switch aktiv? Schicht 3: Ping zum Drucker? Schicht 7: Druckdienst läuft?",
            },
            { type: "heading", value: "Beispiel 2: 5-Whys-Methode" },
            {
              type: "text",
              value:
                "Problem: Server stürzt jede Nacht ab. Warum? → Backup läuft um 02:00 und füllt die Festplatte. Warum? → Backup-Ziel ist auf dem gleichen Laufwerk. Warum? → Backup-Config wurde nie angepasst. Warum? → Kein Change-Prozess für Backup-Änderungen. Warum? → IT-Prozesse nicht dokumentiert. → Root Cause: Fehlende Dokumentation und Prozesse. Lösung: Backup auf separates NAS, Dokumentation erstellen, Change-Prozess einführen.",
            },
            { type: "heading", value: "Beispiel 3: Fehlersuche mit Ausschlussverfahren" },
            {
              type: "text",
              value:
                "Problem: Internet geht nicht an einem PC. Test 1: Andere PCs im Netz → funktionieren → Problem ist lokal. Test 2: Kabel wechseln → kein Effekt → kein Kabelproblem. Test 3: ipconfig → 169.254.x.x (APIPA) → DHCP-Problem. Test 4: ipconfig /renew → 'DHCP server unreachable'. Test 5: Am Switch: Port-LED blinkt → physisch OK. Test 6: show vlan brief → Port in falschem VLAN! Lösung: Port in richtiges VLAN verschieben.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Fehlersuche strukturieren" },
            {
              type: "text",
              value:
                "Ein Mitarbeiter meldet: 'Mein Outlook funktioniert nicht mehr.' Beschreibe deine Vorgehensweise in mindestens 6 strukturierten Schritten. Welche Fragen stellst du zuerst? Welche Tests machst du?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1) Problem eingrenzen (Fragen):\n   - Was genau geht nicht? (Senden? Empfangen? Starten?)\n   - Seit wann? (Heute Morgen? Nach einem Update?)\n   - Fehlermeldung? (Screenshot!)\n   - Nur Outlook oder auch Webmail (OWA)?\n   - Betrifft es nur dich oder auch Kollegen?\n\n2) Webmail testen:\n   → OWA funktioniert → Problem ist lokal (Outlook/PC)\n   → OWA geht auch nicht → Serverproblem\n\n3) Outlook-Verbindungsstatus prüfen:\n   Strg + Rechtsklick Outlook-Icon → Verbindungsstatus\n   → Getrennt? → Netzwerk/Exchange-Problem\n   → Verbunden? → Profil/Outlook-Problem\n\n4) Outlook im abgesicherten Modus starten:\n   outlook.exe /safe → Funktioniert? → Add-In-Konflikt\n\n5) Outlook-Profil neu erstellen:\n   Systemsteuerung → Mail → Profile → Neues Profil\n\n6) Netzwerk prüfen:\n   Test-Connection exchange-server → Erreichbar?\n   nslookup exchange-server → DNS-Auflösung OK?\n   telnet exchange-server 443 → Port offen?\n\n7) Event-Log prüfen:\n   Ereignisanzeige → Anwendung → Outlook/Exchange Fehler",
            },
          ],
          quiz: [
            {
              id: "imp_lf6-ts-1_0",
              q: "Womit beginnt strukturiertes Troubleshooting?",
              options: ["Eskalieren", "Lösung raten", "Neustart", "Problem identifizieren"],
              correct: 3,
              explain: "Was, Seit wann, Wer betroffen? Erst verstehen, WAS das Problem ist.",
            },
            {
              id: "imp_lf6-ts-1_1",
              q: "Bottom-Up startet bei?",
              options: ["Anwendung", "DNS", "Firewall", "Physisch (Kabel, LED, Stecker)"],
              correct: 3,
              explain: "Schicht 1: Kabel, LEDs, physische Verbindung.",
            },
            {
              id: "imp_lf6-ts-1_2",
              q: "Divide and Conquer: Ping Gateway?",
              options: [
                "Geht → Problem oberhalb, Geht nicht → unterhalb",
                "Der Test ist nur in WLAN-Umgebungen aussagekräftig",
                "Der Gateway-Ping liefert keine verwertbare Aussage",
                "Man beginnt immer Top-Down bei der Anwendungsschicht",
              ],
              correct: 0,
              explain: "Gateway-Ping teilt das Problem in obere/untere Hälfte.",
            },
            {
              id: "imp_lf6-ts-1_3",
              q: "APIPA 169.254.x.x bedeutet?",
              options: ["Kein DHCP-Server erreichbar", "Statische IP", "Alles OK", "DNS-Fehler"],
              correct: 0,
              explain: "APIPA: Automatische IP, wenn DHCP nicht antwortet.",
            },
            {
              id: "imp_lf6-ts-1_4",
              q: "Dienst läuft, ist aber nicht erreichbar?",
              options: ["DNS kaputt", "Firewall blockiert den Port", "DHCP Fehler", "Kabel defekt"],
              correct: 1,
              explain: "Häufig: Firewall/Port nicht freigegeben.",
            },
            {
              id: "imp_lf6-ts-1_5",
              q: "nslookup zeigt Fehler?",
              options: [
                "Einen IP-Adresskonflikt zwischen zwei Clients im Subnetz",
                "DNS-Problem (Server nicht erreichbar oder Name falsch)",
                "Einen Hardwaredefekt an der Netzwerkkarte des Clients",
                "Ein defektes oder nicht eingestecktes Netzwerkkabel",
              ],
              correct: 1,
              explain: "DNS-Auflösung fehlgeschlagen.",
            },
            {
              id: "imp_lf6-ts-1_6",
              q: "Nach Fix: Was tun?",
              options: [
                "Fertig",
                "Nichts",
                "Verifizieren + Dokumentieren (Ticket, KB)",
                "Nur Ticket schließen",
              ],
              correct: 2,
              explain: "Immer prüfen, ob Fix wirkt, UND dokumentieren.",
            },
            {
              id: "imp_lf6-ts-1_7",
              q: "Top-Down-Vorteil?",
              options: [
                "Immer besser",
                "Gründlicher",
                "Schnell bei Anwendungsproblemen",
                "Einfacher",
              ],
              correct: 2,
              explain: "Top-Down: Schnell, wenn Problem in oberen Schichten liegt.",
            },
            {
              id: "imp_lf6-ts-1_8",
              q: "telnet server 443 prüft?",
              options: ["DNS", "E-Mail", "Ob Port 443 auf dem Server erreichbar ist", "Passwort"],
              correct: 2,
              explain: "TCP-Verbindungstest auf einen bestimmten Port.",
            },
            {
              id: "imp_lf6-ts-1_9",
              q: "Goldene Regel Troubleshooting?",
              options: [
                "Neustart löst alles",
                "NUR EINE Sache ändern, dann testen",
                "Immer eskalieren",
                "Alles gleichzeitig ändern",
              ],
              correct: 1,
              explain: "Eine Variable ändern, Ergebnis prüfen, dokumentieren.",
            },
            {
              id: "imp_lf6-ts-1_10",
              q: "Was ist der erste Schritt bei der Fehlersuche?",
              options: [
                "Die Fehlermeldung sofort googeln und die erste Lösung ausprobieren",
                "Das Betriebssystem sofort neu installieren, das behebt die meisten Fehler",
                "Problem identifizieren: Was genau? Seit wann? Wer betroffen? Fehlermeldung?",
                "Den PC durch ein Ersatzgerät tauschen und das alte Gerät einlagern",
              ],
              correct: 2,
              explain:
                "Erst verstehen, was genau das Problem ist, dann systematisch eingrenzen. Nicht blind reparieren.",
            },
            {
              id: "imp_lf6-ts-1_11",
              q: "Was ist eine Root Cause Analysis?",
              options: [
                "Ein Backup-Verfahren, das vor jeder Analyse den kompletten Systemzustand sichert",
                "Systematische Suche nach der eigentlichen URSACHE eines Problems (nicht nur Symptom)",
                "Schnelle Beseitigung der Symptome, ohne die dahinterliegende Ursache zu betrachten",
                "Die Neuinstallation des Systems als Standardlösung für jedes auftretende Problem",
              ],
              correct: 1,
              explain:
                "RCA: Warum ist es passiert? (nicht nur: Was ist passiert?). Methoden: 5-Whys, Ishikawa/Fishbone-Diagramm.",
            },
            {
              id: "imp_lf6-ts-1_12",
              q: "Was ist der Vorteil von Bottom-Up-Fehlersuche nach OSI?",
              options: [
                "Schneller, weil die oberen Schichten komplett übersprungen werden können",
                "Systematisch von der physischen Schicht aufwärts → nichts wird übersehen",
                "Einfacher, weil man ohne Messwerkzeuge direkt in der Anwendung startet",
                "Günstiger, weil auf Verkabelungs- und Hardwareprüfungen verzichtet wird",
              ],
              correct: 1,
              explain:
                "Bottom-Up: Erst Kabel/Link (L1), dann Switch/MAC (L2), dann IP/Routing (L3) etc. Überspringt keine Ebene.",
            },
            {
              id: "imp_lf6-ts-1_13",
              q: "Ein PC bekommt eine 169.254.x.x Adresse. Was bedeutet das?",
              options: [
                "Normaler Betrieb: 169.254.x.x ist der reguläre Adressbereich des DHCP-Servers",
                "DNS-Fehler: Der Nameserver hat dem PC diese Ausweichadresse zugeteilt",
                "APIPA: DHCP-Server ist nicht erreichbar → PC vergibt sich selbst eine Adresse",
                "Statische IP: Ein Administrator hat diese Adresse fest am PC hinterlegt",
              ],
              correct: 2,
              explain:
                "169.254.x.x = APIPA. DHCP-Server nicht erreichbar. Prüfe: Kabel, Switch-Port, DHCP-Dienst, VLAN.",
            },
            {
              id: "imp_lf6-ts-1_14",
              q: "Was ist ein Ishikawa-Diagramm?",
              options: [
                "Ein Balkendiagramm zur zeitlichen Projektplanung (Gantt)",
                "Ein UML-Diagramm zur Modellierung von Softwareklassen",
                "Ein Netzwerkdiagramm zur Darstellung der LAN-Topologie",
                "Ursache-Wirkungs-Diagramm (Fischgräte) zur Problemanalyse",
              ],
              correct: 3,
              explain:
                "Fishbone/Ishikawa: Kategorien (Mensch, Maschine, Methode, Material, Mitwelt, Messung) → mögliche Ursachen zuordnen.",
            },
            {
              id: "imp_lf6-ts-1_15",
              q: "Wann eskaliert man ein Ticket?",
              options: [
                "Nur zu festen Terminen, z. B. im wöchentlichen Teammeeting am Freitag",
                "Wenn man mit eigenen Mitteln nicht weiterkommt ODER die SLA-Zeit droht abzulaufen",
                "Nie – jedes Ticket muss in der Ebene gelöst werden, in der es eröffnet wurde",
                "Sofort bei Eingang jedes Tickets, damit die höhere Ebene direkt übernimmt",
              ],
              correct: 1,
              explain:
                "Eskalation wenn: Eigenes Know-how nicht ausreicht (funktional) oder SLA-Verletzung droht (hierarchisch).",
            },
            {
              id: "imp_lf6-ts-1_16",
              q: "Was ist ein Known Error?",
              options: [
                "Ein diagnostizierter Fehler, dessen Ursache bekannt ist",
                "Ein neu aufgetretener, noch nicht untersuchter Fehler",
                "Ein physischer Defekt an einer Hardwarekomponente",
                "Eine bekannte Schadsoftware aus der Virendatenbank",
              ],
              correct: 0,
              explain:
                "Mit Workaround/Lösung. Known Error: Ursache identifiziert, Workaround/Lösung dokumentiert. Geht in die KEDB für 1st Level.",
            },
            {
              id: "imp_lf6-ts-1_17",
              q: "Was prüfst du, wenn 'ping Gateway' funktioniert, aber 'ping 8.8.8.8' nicht?",
              options: [
                "PC defekt",
                "Problem zwischen Gateway und Internet",
                "Kabel defekt",
                "DNS-Problem",
              ],
              correct: 1,
              explain:
                "Router, ISP, NAT, Firewall. Gateway erreichbar = LAN OK. Internet nicht erreichbar = Problem ist am/hinter dem Router (WAN-Seite, ISP, NAT).",
            },
            {
              id: "imp_lf6-ts-1_18",
              q: "Was ist der Unterschied zwischen Symptom und Ursache?",
              options: [
                "Kein Unterschied – beide Begriffe bezeichnen die Störungsmeldung des Users",
                "Die Ursache ist für den Support unwichtig, solange das Symptom beseitigt wird",
                "Symptom = was der User merkt (Internet geht nicht). Ursache = warum (DNS-Server down)",
                "Das Symptom wiegt schwerer, da es im Ticket dokumentiert und eskaliert wird",
              ],
              correct: 2,
              explain:
                "Symptom behandeln = Workaround (schnell). Ursache beheben = dauerhafte Lösung (nachhaltig). Beides nötig.",
            },
            {
              id: "imp_lf6-ts-1_19",
              q: "Was dokumentierst du nach der Fehlerlösung?",
              options: [
                "Nur das Endergebnis ('funktioniert wieder') ohne Lösungsweg",
                "Nichts – gelöste Tickets werden kommentarlos geschlossen",
                "Problem, Ursache, Lösungsweg, betroffene Systeme, Zeitaufwand",
                "Nur die entstandenen Kosten für die spätere Abrechnung",
              ],
              correct: 2,
              explain:
                "Vollständige Dokumentation: Zukünftige gleiche Probleme schneller lösen (KEDB). Nachweis für SLA-Reporting.",
            },
          ],
        },
        {
          id: "lf6-itil-1",
          title: "ITIL & IT-Servicemanagement-Grundbegriffe",
          content: [
            { type: "heading", value: "Warum ITIL?" },
            {
              type: "text",
              value:
                "ITIL (IT Infrastructure Library) ist die weltweit verbreitetste Sammlung von Best Practices für IT-Servicemanagement (ITSM) – aktuell ITIL 4. Kernidee: IT wird nicht als Technik-Sammlung, sondern als SERVICE gedacht, der dem Kunden messbaren Nutzen (Value) stiftet. Für dich als FISI liefert ITIL das Vokabular, mit dem Support und Betrieb überall sprechen – die Begriffe unten sind Klassenarbeits- UND Vorstellungsgesprächs-Klassiker. Alternativen/Ergänzungen: ISO/IEC 20000 (zertifizierbare ITSM-Norm), COBIT (Governance).",
            },
            { type: "heading", value: "Incident, Problem, Change – sauber trennen!" },
            {
              type: "text",
              value:
                "INCIDENT = ungeplante Störung oder Qualitätsminderung eines Services („Drucker druckt nicht“, „Mail langsam“). Ziel des Incident Managements: Service SCHNELLSTMÖGLICH wiederherstellen – notfalls per Workaround. · PROBLEM = die (noch unbekannte) URSACHE hinter einem oder mehreren Incidents. Problem Management sucht die Root Cause und beseitigt sie dauerhaft (Known Error + Workaround dokumentieren). · CHANGE = jede kontrollierte Änderung an der Infrastruktur (Patch, neue Firewall-Regel, Serverumzug). Change Enablement bewertet Risiko und genehmigt: Standard Change (vorab genehmigt, Routine), Normal Change (Einzelbewertung, ggf. Change Advisory Board/CAB), Emergency Change (beschleunigt bei Gefahr). Merksatz: Incident = LÖSCHEN des Feuers, Problem = BRANDURSACHE finden, Change = kontrollierter UMBAU.",
            },
            { type: "heading", value: "Service Desk, SLA & Eskalation" },
            {
              type: "text",
              value:
                "Der Service Desk ist der Single Point of Contact (SPOC) für alle Anwender – er nimmt Incidents und Service Requests (Standardanfragen wie „neues Notebook“, Passwort-Reset) an, kategorisiert und priorisiert. Priorität = Impact (Auswirkung: wie viele/wie kritisch?) × Urgency (Dringlichkeit: wie schnell nötig?). Eskalation: funktional (an spezialisiertere Einheit: 1st → 2nd → 3rd Level) und hierarchisch (an Vorgesetzte, wenn SLA-Bruch droht). Das SLA (Service Level Agreement, Kunde↔Anbieter) definiert messbare Ziele: Verfügbarkeit (99,9 % …), Reaktions- und Lösungszeiten; intern gestützt durch OLAs (Operational Level Agreements zwischen Abteilungen) und UCs (Underpinning Contracts mit externen Lieferanten).",
            },
            { type: "heading", value: "CMDB & Wissensmanagement" },
            {
              type: "text",
              value:
                "Die CMDB (Configuration Management Database) hält alle Configuration Items (CIs: Server, Switches, Software, Lizenzen, Dokumente) samt Beziehungen („VM X läuft auf Host Y, gehört zu Service Z“) – Grundlage für Impact-Analysen („Welche Services trifft der Ausfall von Host Y?“) und für die permanente Inventur der IT. Die Known-Error-Datenbank und eine gepflegte Knowledge Base machen aus Einzelwissen Teamwissen: Der zweite Auftritt desselben Fehlers wird zum 5-Minuten-Fall.",
            },
            {
              type: "note",
              value:
                "Merkhilfen: Incident SCHNELL beheben, Problem GRÜNDLICH ergründen. Priorität = Impact × Urgency. SLA (zum Kunden) – OLA (intern) – UC (Lieferant). SPOC = Service Desk.",
            },
            { type: "heading", value: "Übungsaufgabe: Begriffe im Fall anwenden" },
            {
              type: "text",
              value:
                "Im Betrieb melden zwischen 8:00 und 8:30 Uhr 40 Nutzer, dass das ERP nicht erreichbar ist. Der 1st-Level startet den Applikationsdienst neu (läuft wieder), in den Folgetagen passiert dasselbe zweimal. Schließlich wird ein Speicherleck im Update 4.2 gefunden; der Hersteller-Patch wird für Samstagnacht eingeplant und über das CAB genehmigt. Ordne den Phasen die ITIL-Begriffe zu: Meldungen der Nutzer · Dienstneustart · Suche nach der Ursache · Speicherleck (dokumentiert mit Workaround) · geplante Patch-Einspielung. Mit welcher Formel wäre die Priorität der Erstmeldung bestimmt worden?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nMeldungen = Incidents (Major Incident, da viele Nutzer/kritischer Service). Dienstneustart = Workaround (schnelle Wiederherstellung, Incident Management). Ursachensuche = Problem Management. Dokumentiertes Speicherleck + Neustart-Workaround = Known Error. Patch-Einspielung übers CAB = (Normal) Change.\nPriorität = Impact (hoch: 40 Nutzer, ERP-kritisch) × Urgency (hoch: Arbeitsbeginn) → höchste Priorität.",
            },
          ],
          quiz: [
            {
              id: "imp_lf6-itil-1_0",
              q: "Ziel des Incident Managements?",
              options: [
                "Ursache dauerhaft beseitigen",
                "Service schnellstmöglich wiederherstellen",
                "Changes genehmigen",
                "Lizenzen zählen",
              ],
              correct: 1,
              explain:
                "Incident = Feuer löschen, notfalls per Workaround; die Ursache ist Sache des Problem Managements.",
            },
            {
              id: "imp_lf6-itil-1_1",
              q: "Ein PROBLEM ist in ITIL …",
              options: [
                "ein verärgerter Kunde",
                "jede Störung",
                "die Ursache hinter Incidents",
                "ein abgelehnter Change",
              ],
              correct: 2,
              explain: "Problem = (unbekannte) Root Cause eines oder mehrerer Incidents.",
            },
            {
              id: "imp_lf6-itil-1_2",
              q: "Priorität berechnet sich aus …",
              options: ["Impact × Urgency", "Kosten × Zeit", "SLA × OLA", "Anrufen pro Stunde"],
              correct: 0,
              explain: "Auswirkung mal Dringlichkeit ergibt die Bearbeitungspriorität.",
            },
            {
              id: "imp_lf6-itil-1_3",
              q: "„Passwort zurücksetzen“ ist typischerweise ein …",
              options: ["Incident", "Problem", "Emergency Change", "Service Request"],
              correct: 3,
              explain: "Standardanfrage ohne Störungscharakter = Service Request.",
            },
            {
              id: "imp_lf6-itil-1_4",
              q: "Vom 1st- an den 2nd-Level weitergeben heißt …",
              options: ["hierarchische Eskalation", "funktionale Eskalation", "Change", "Review"],
              correct: 1,
              explain:
                "Funktional = fachlich an Spezialisten; hierarchisch = an Führungsebene (z. B. bei SLA-Gefahr).",
            },
            {
              id: "imp_lf6-itil-1_5",
              q: "Ein vorab genehmigter Routine-Change heißt …",
              options: ["Standard Change", "Normal Change", "Emergency Change", "Known Change"],
              correct: 0,
              explain:
                "Standard Changes sind risikoarm und pauschal freigegeben (z. B. Client-Patchday).",
            },
            {
              id: "imp_lf6-itil-1_6",
              q: "SLA – OLA – UC: Wer schließt das OLA?",
              options: [
                "Kunde und Anbieter",
                "interne Abteilungen untereinander",
                "Anbieter und externer Lieferant",
                "zwei Kunden",
              ],
              correct: 1,
              explain:
                "SLA zum Kunden, OLA zwischen internen Teams, Underpinning Contract mit externen Lieferanten.",
            },
            {
              id: "imp_lf6-itil-1_7",
              q: "Die CMDB enthält …",
              options: [
                "nur Passwörter",
                "Configuration Items samt Beziehungen",
                "nur Netzpläne",
                "Gehaltsdaten",
              ],
              correct: 1,
              explain:
                "CIs (Hardware, Software, Doku …) und deren Abhängigkeiten – Basis für Impact-Analysen.",
            },
            {
              id: "imp_lf6-itil-1_8",
              q: "Known Error bedeutet …",
              options: [
                "Fehler des Anwenders",
                "dokumentierte Ursache mit Workaround",
                "gelöschter Incident",
                "Virus",
              ],
              correct: 1,
              explain: "Root Cause bekannt, Workaround dokumentiert – bis der Fix (Change) kommt.",
            },
            {
              id: "imp_lf6-itil-1_9",
              q: "SPOC steht für …",
              options: [
                "Single Point of Contact",
                "Service Point of Change",
                "Support Protocol over Cable",
                "Second Priority on Call",
              ],
              correct: 0,
              explain: "Der Service Desk ist die EINE Anlaufstelle für alle Anwenderanliegen.",
            },
            {
              id: "imp_lf6-itil-1_10",
              q: "Das CAB (Change Advisory Board) …",
              options: [
                "löst Incidents",
                "bewertet und berät Changes",
                "schreibt SLAs",
                "betreibt die CMDB",
              ],
              correct: 1,
              explain: "Gremium zur Risikobewertung und Genehmigungsempfehlung von Normal Changes.",
            },
          ],
        },
      ],
    },
    {
      id: "lf6-kom",
      title: "Kommunikation & Deeskalation",
      lessons: [
        {
          id: "lf6-km-1",
          title: "Kommunikationsmodelle & Deeskalation",
          content: [
            { type: "heading", value: "Sender-Empfänger-Modell (Shannon/Weaver)" },
            {
              type: "text",
              value:
                "Sender codiert Nachricht -> Kanal (Medium) -> Empfänger decodiert. Störungen können auf jedem Schritt auftreten: technisch (Leitung), semantisch (Missverständnis), pragmatisch (fehlender Kontext). Im IT-Support: Kundenbeschreibung (Sender) muss in technisches Problem (Empfänger) übersetzt werden.",
            },
            { type: "heading", value: "4-Ohren-Modell (Schulz von Thun)" },
            {
              type: "text",
              value:
                "Jede Nachricht hat vier Ebenen: Sachinhalt (Was sage ich?), Selbstoffenbarung (Was gebe ich über mich preis?), Beziehung (Was halte ich vom Gegenüber?), Appell (Was will ich bewirken?). Beispiel Kunde: 'Das funktioniert schon wieder nicht!' Sachebene: System defekt. Selbstoffenbarung: Ich bin frustriert. Beziehung: Ihr bekommt das nicht hin. Appell: Bitte sofort lösen!",
            },
            { type: "heading", value: "Deeskalationsstrategien" },
            {
              type: "text",
              value:
                "Aktives Zuhören: Ausreden lassen, Verständnis signalisieren ('Ich verstehe, dass...'). Sachebene suchen: Von emotionaler auf sachliche Ebene wechseln. Ich-Botschaften: 'Ich möchte Ihnen helfen' statt 'Sie müssen...'. Lösung anbieten: Konkreten nächsten Schritt nennen. Grenzen setzen: Bei persönlichen Angriffen höflich, aber bestimmt bleiben. Eskalation: Wenn Deeskalation scheitert, an Vorgesetzten übergeben.",
            },
            {
              type: "note",
              value:
                "Kommunikationsmodelle kommen regelmäßig in AP1 und AP2 dran - oft als Situationsanalyse im Kundenkontakt.",
            },
            { type: "heading", value: "Fragetechniken im IT-Support" },
            {
              type: "text",
              value:
                "Offene Fragen: W-Fragen, Kunde kann frei antworten. Gut für Problemerfassung. Beispiel: Welches Betriebssystem nutzen Sie? Was haben Sie zuletzt geändert? Geschlossene Fragen: Ja/Nein-Antwort. Gut zum Eingrenzen. Beispiel: Haben Sie den Rechner neu gestartet? Funktioniert das WLAN? Regel: Erst offene Fragen (Problem verstehen), dann geschlossene (eingrenzen).",
            },
            { type: "heading", value: "Übungsaufgabe 1: 4-Ohren-Modell" },
            {
              type: "text",
              value:
                "Kunde sagt: 'Das ist das dritte Mal, dass ich anrufe!' Analyse nach Schulz von Thun.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nSachinhalt: 3x angerufen. Selbstoffenbarung: Frustriert. Beziehung: Support unzuverlässig. Appell: Problem endlich lösen!\nReaktion: 'Ich verstehe Ihren Ärger. Ich kümmere mich jetzt persönlich darum.'",
            },
            { type: "heading", value: "Übungsaufgabe 2: Deeskalation" },
            { type: "text", value: "5 konkrete Deeskalationstechniken im telefonischen Support." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. Aktives Zuhören (ausreden lassen, zusammenfassen)\n2. Verständnis zeigen ('Nachvollziehbar, dass Sie verärgert sind')\n3. Sachebene herstellen ('Schauen wir gemeinsam')\n4. Konkrete nächste Schritte nennen\n5. Ownership übernehmen ('Ich kümmere mich persönlich')",
            },
            { type: "heading", value: "Beispiel 1: Vier-Ohren-Modell (Schulz von Thun)" },
            {
              type: "text",
              value:
                "Nachricht 'Der Server ist schon wieder down.' hat 4 Ebenen: Sachebene: Server ist nicht erreichbar. Selbstoffenbarung: Ich bin genervt/frustriert. Beziehung: Du (IT) machst deinen Job nicht richtig. Appell: Mach den Server wieder an! Als IT-Support auf allen 4 Ohren hören und vor allem die Sachebene adressieren, nicht defensiv auf die Beziehungsebene reagieren.",
            },
            { type: "heading", value: "Beispiel 2: Deeskalation bei wütendem Kunden" },
            {
              type: "text",
              value:
                "Kunde: 'Das ist eine Katastrophe! Ich kann seit 2 Stunden nicht arbeiten!' Falsch: 'Das ist nicht mein Problem' / 'Da kann ich nichts machen'. Richtig: 1) Verständnis zeigen: 'Ich verstehe, dass das sehr ärgerlich ist.' 2) Sachebene herstellen: 'Lassen Sie mich das sofort anschauen.' 3) Transparenz: 'Ich sehe das Problem, es liegt an X. Ich arbeite jetzt an der Lösung.' 4) Verbindlich werden: 'In 30 Minuten melde ich mich mit dem Status bei Ihnen.'",
            },
            { type: "heading", value: "Beispiel 3: Aktives Zuhören in der Praxis" },
            {
              type: "text",
              value:
                "Techniken: 1) Paraphrasieren: 'Wenn ich Sie richtig verstehe, funktioniert der Drucker seit heute Morgen nicht mehr?' 2) Nachfragen: 'Erscheint eine Fehlermeldung?' 3) Zusammenfassen: 'Also: Drucker druckt nicht, Fehlermeldung Papierstau, obwohl kein Stau sichtbar.' 4) Nonverbal: Nicken, Blickkontakt, nicht unterbrechen. Ziel: User fühlt sich ernst genommen UND du bekommst präzise Informationen.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Kommunikationssituation meistern" },
            {
              type: "text",
              value:
                "Der Geschäftsführer ruft aufgebracht an: 'Unsere komplette Buchhaltung steht still! Das ERP-System ist seit einer Stunde down! Wenn das nicht in 30 Minuten läuft, verlieren wir einen wichtigen Auftrag!' Formuliere deine Antwort und beschreibe dein Vorgehen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nAntwort: 'Herr Müller, ich verstehe, wie kritisch das für Sie ist – ich kümmere mich sofort darum. Darf ich kurz nachfragen: Betrifft es alle Mitarbeiter oder nur bestimmte? Erscheint eine Fehlermeldung?'\n\nVorgehen:\n1) Priorisierung: Ticket als Prio 1 (Incident Major) erfassen\n2) Sofort-Check: ERP-Server erreichbar? Dienste laufen? DB-Verbindung?\n3) Kommunikation: 'Ich habe den Fehler identifiziert: [Datenbankdienst gestoppt]. Ich starte ihn jetzt neu.'\n4) Falls nicht schnell lösbar: 'Ich eskaliere an den Datenbankspezialisten und melde mich in 15 Minuten mit einem Update.'\n5) Hierarchische Eskalation parallel: Teamleiter informieren (SLA-Risiko)\n6) Nach Lösung: 'Das System läuft wieder. Ursache war X. Ich überwache die nächste Stunde und melde mich nochmal.'\n7) Nachbereitung: RCA durchführen, Maßnahmen definieren, Ticket dokumentieren\n\nKernprinzipien:\n- Verständnis zeigen, nicht verteidigen\n- Sachebene herstellen\n- Verbindliche Zeitaussagen machen\n- Proaktiv Updates geben (nicht warten bis der GF nochmal anruft)",
            },
          ],
          quiz: [
            {
              id: "imp_lf6-km-1_0",
              q: "4-Ohren-Modell: Welche Ebene fehlt? Sachinhalt, Selbstoffenbarung, Beziehung, ...?",
              options: ["Emotion", "Information", "Logik", "Appell"],
              correct: 3,
              explain: "Die vier Ebenen: Sachinhalt, Selbstoffenbarung, Beziehung, Appell.",
            },
            {
              id: "imp_lf6-km-1_1",
              q: "Erste Deeskalationsstrategie?",
              options: [
                "Gegenargument bringen",
                "Aktives Zuhören",
                "Vorgesetzten holen",
                "Gespräch beenden",
              ],
              correct: 1,
              explain: "Aktives Zuhören: Ausreden lassen, Verständnis signalisieren.",
            },
            {
              id: "imp_lf6-km-1_2",
              q: "4-Ohren-Modell: 4 Seiten?",
              options: [
                "Sachinhalt, Selbstoffenbarung, Beziehung, Appell",
                "Hören, Sehen, Fühlen, Denken",
                "Sender, Empfänger, Kanal, Medium",
                "Frage, Antwort, Feedback, Ende",
              ],
              correct: 0,
              explain: "Schulz von Thun: Jede Nachricht hat 4 Seiten.",
            },
            {
              id: "imp_lf6-km-1_3",
              q: "Aktives Zuhören?",
              options: [
                "Eigene Meinung sagen",
                "Paraphrasieren, nachfragen, Blickkontakt",
                "Nichts sagen",
                "Unterbrechen",
              ],
              correct: 1,
              explain: "Zusammenfassen, was man verstanden hat, nachfragen, nonverbale Signale.",
            },
            {
              id: "imp_lf6-km-1_4",
              q: "Deeskalation: Welche innere Haltung hilft zuerst?",
              options: [
                "Gegenangriff",
                "Chef rufen",
                "Ignorieren",
                "Ruhig bleiben, Verständnis zeigen",
              ],
              correct: 3,
              explain:
                "Ruhig bleiben, Verständnis signalisieren, sachlich bleiben – die passende GESPRÄCHSTECHNIK dazu ist das aktive Zuhören (eigene Frage).",
            },
            {
              id: "imp_lf6-km-1_5",
              q: "Ich-Botschaft vs. Du-Botschaft?",
              options: [
                "Beide Botschaftsformen wirken im Konflikt gleich",
                "Ich-Botschaften gelten als unhöflich und egozentrisch",
                "Du-Botschaften wirken höflicher und wertschätzender",
                "Ich = eigene Wahrnehmung (deeskalierend), Du = Vorwurf",
              ],
              correct: 3,
              explain: "Ich-Botschaft: Eigene Wahrnehmung schildern statt Vorwürfe machen.",
            },
            {
              id: "imp_lf6-km-1_6",
              q: "Sender-Empfänger-Modell: Störung?",
              options: [
                "Nur bei technischen Defekten wie Rauschen in der Leitung",
                "Wenn gesendete und empfangene Nachricht unterschiedlich",
                "Nur bei schriftlicher Kommunikation, mündlich nie",
                "Nie – Nachrichten kommen immer unverändert an",
              ],
              correct: 1,
              explain: "Störung = Empfänger versteht etwas anderes als Sender meinte.",
            },
            {
              id: "imp_lf6-km-1_7",
              q: "Eisbergmodell?",
              options: [
                "Kommunikation besteht ausschließlich aus der Sachebene",
                "Ein Modell zur Eskalationstemperatur in Konflikten",
                "Kommunikation besteht nur aus unbewussten Gefühlen",
                "Sichtbar = Sachebene (20%), unsichtbar = Beziehungsebene (80%)",
              ],
              correct: 3,
              explain: "20% Sachinhalt sichtbar, 80% Beziehung/Emotion unsichtbar.",
            },
            {
              id: "imp_lf6-km-1_8",
              q: "Paraphrasieren?",
              options: [
                "Widersprechen",
                "Ignorieren",
                "Gehörtes in eigenen Worten wiedergeben",
                "Thema wechseln",
              ],
              correct: 2,
              explain: "Zeigt dem Gegenüber, dass man zugehört und verstanden hat.",
            },
            {
              id: "imp_lf6-km-1_9",
              q: "Feedback-Regel: Ich-Form?",
              options: [
                "Du hast Mist gebaut",
                "Mir ist aufgefallen, dass ...",
                "Alle finden das schlecht",
                "Das ist falsch",
              ],
              correct: 1,
              explain: "Ich-Botschaften statt Vorwürfe.",
            },
            {
              id: "imp_lf6-km-1_10",
              q: "Was besagt das Vier-Ohren-Modell?",
              options: [
                "Gespräche brauchen genau vier Kommunikationspartner, um zu funktionieren",
                "Jede Nachricht hat 4 Ebenen: Sach, Selbstoffenbarung, Beziehung, Appell",
                "Guter Ton erfordert vier Lautsprecher für räumliches Hören",
                "Jede Nachricht sollte in vier Sprachen formuliert werden",
              ],
              correct: 1,
              explain:
                "Schulz von Thun: Sender sendet auf 4 Ebenen, Empfänger hört auf 4 Ohren. Missverständnisse, wenn verschiedene Ebenen gehört werden.",
            },
            {
              id: "imp_lf6-km-1_11",
              q: "Was ist aktives Zuhören?",
              options: [
                "Aufmerksam zuhören + Paraphrasieren + Nachfragen + Zusammenfassen",
                "Schweigend zuhören und bewusst auf jede eigene Rückmeldung verzichten",
                "Während des Gesprächs parallel weiterarbeiten, um Zeit zu sparen",
                "Besonders laut und deutlich antworten, damit der Partner alles versteht",
              ],
              correct: 0,
              explain:
                "Aktives Zuhören: Zeigt dem Gegenüber, dass man verstanden hat und holt sich Bestätigung.",
            },
            {
              id: "imp_lf6-km-1_12",
              q: "Wie reagiert man professionell auf einen verärgerten Kunden?",
              options: [
                "Verständnis zeigen, Sachebene herstellen, Lösung anbieten, verbindlich werden",
                "Den Ärger ignorieren und ausschließlich das technische Problem abarbeiten",
                "Sofort Gegenargumente liefern, um die eigene Position durchzusetzen",
                "Das Gespräch grundsätzlich sofort an den Vorgesetzten weiterreichen",
              ],
              correct: 0,
              explain:
                "Erst emotional abholen, dann sachlich lösen. Niemals persönlich nehmen oder rechtfertigen.",
            },
            {
              id: "imp_lf6-km-1_13",
              q: "Was ist der Sachinhalt in 'Die Ampel ist grün!'?",
              options: [
                "Die Aufforderung an den Fahrer, endlich loszufahren",
                "Die Ampel zeigt grünes Licht (reine Information)",
                "Der Vorwurf an den Fahrer, zu langsam zu reagieren",
                "Die Selbstoffenbarung, dass der Sprecher es eilig hat",
              ],
              correct: 1,
              explain:
                "Sachebene: Die faktische Information. Die anderen 3 Ebenen (Appell, Beziehung, Selbstoffenbarung) schwingen mit.",
            },
            {
              id: "imp_lf6-km-1_14",
              q: "Was bedeutet 'Ich-Botschaften' verwenden?",
              options: [
                "Eigene Wahrnehmung schildern statt Vorwürfe: 'Ich habe den Eindruck...' statt 'Sie machen immer...'",
                "Ausschließlich von eigenen Erlebnissen erzählen und den Gesprächspartner nicht zu Wort kommen lassen",
                "Grundsätzlich in der dritten Person über sich selbst sprechen, um Distanz zum Gesagten aufzubauen",
                "Die eigenen Leistungen im Gespräch hervorheben, um die eigene Position gegenüber dem Anderen zu stärken",
              ],
              correct: 0,
              explain:
                "Ich-Botschaft: Deeskalierend, nicht anklagend. 'Mir fällt auf, dass...' statt 'Sie haben schon wieder...'.",
            },
            {
              id: "imp_lf6-km-1_15",
              q: "Was ist Paraphrasieren?",
              options: [
                "Eine Aussage wortgetreu in eine andere Sprache übersetzen",
                "Ein Gespräch am Ende nur stichpunktartig für das Protokoll zusammenfassen",
                "Die Aussage des Gegenübers wörtlich und unverändert wiederholen",
                "Gehörtes in eigenen Worten wiedergeben zur Bestätigung des Verständnisses",
              ],
              correct: 3,
              explain:
                "Paraphrasieren: 'Wenn ich Sie richtig verstehe, haben Sie das Problem seit gestern?' → Missverständnisse klären.",
            },
            {
              id: "imp_lf6-km-1_16",
              q: "Was ist der Appell in einer Nachricht?",
              options: [
                "Die Lautstärke, mit der eine Nachricht gesprochen wird",
                "Was der Sender beim Empfänger bewirken/erreichen möchte",
                "Die förmliche Begrüßung am Anfang eines Gesprächs",
                "Die höfliche Verabschiedung am Ende des Gesprächs",
              ],
              correct: 1,
              explain:
                "Appell: 'Der Drucker ist kaputt' → Appell: 'Repariere den Drucker!' (Was soll ich tun?).",
            },
            {
              id: "imp_lf6-km-1_17",
              q: "Welche Kommunikationsregel gilt beim Telefonieren?",
              options: [
                "Besonders laut sprechen, damit der Anrufer jedes Wort sicher versteht",
                "Das Gespräch möglichst schnell beenden, um die Leitung freizuhalten",
                "Anrufe grundsätzlich ablehnen und ausschließlich per E-Mail antworten",
                "Sich mit Namen und Firma melden, freundlich, Notizen machen, Rückruf anbieten",
              ],
              correct: 3,
              explain:
                "Professionelles Telefonieren: Melden, Anliegen aufnehmen, notieren, Ticket erstellen, verbindliche Rückmeldung.",
            },
            {
              id: "imp_lf6-km-1_18",
              q: "Was ist eine Eskalationsmatrix?",
              options: [
                "Ein Organigramm mit allen Abteilungen und Hierarchieebenen der Firma",
                "Ein Notfallplan für die Wiederherstellung nach einem Totalausfall",
                "Definiert wer bei welcher Priorität wann informiert/einbezogen wird",
                "Eine Tabelle zur Bewertung der Servicequalität mit Schulnoten",
              ],
              correct: 2,
              explain:
                "Eskalationsmatrix: Prio 1 → sofort Teamleiter + 2nd Level. Prio 3 → nach 4h ohne Lösung eskalieren. Klar definierte Wege.",
            },
            {
              id: "imp_lf6-km-1_19",
              q: "Was versteht man unter Sender-Empfänger-Modell?",
              options: [
                "Technisches Verfahren für den E-Mail-Versand über SMTP und POP3",
                "Ablauf des Postversands vom Absender über die Filiale zum Empfänger",
                "Übertragungsverfahren für Pakete zwischen Netzwerkkarten (Schicht 1)",
                "Kommunikationsmodell: Sender codiert Nachricht → Kanal → Empfänger decodiert",
              ],
              correct: 3,
              explain:
                "Störungen möglich auf jedem Schritt. Shannon/Weaver bzw. Schulz von Thun: Nachricht kann auf dem Weg gestört werden (Lärm, Missverständnis, Technik).",
            },
          ],
        },
        {
          id: "lf6-chg-1",
          title: "Veränderungsprozesse begleiten: Change Management in der IT",
          content: [
            {
              type: "text",
              value:
                "Die technisch beste Lösung scheitert, wenn die Menschen nicht mitziehen. Ob neues Ticketsystem, Umstieg auf eine andere Officesuite oder Einführung von 2-Faktor-Authentifizierung: IT-Projekte sind immer auch Veränderungsprojekte. Die AP1 fragt dieses Thema als „Veränderungsprozesse begleiten und unterstützen“ ab – mit Rollen, Widerständen und Qualifizierungsmaßnahmen.",
            },
            { type: "heading", value: "Warum Menschen sich wehren" },
            {
              type: "list",
              value: [
                "Angst vor Kompetenzverlust: Wer das alte System im Schlaf beherrschte, ist im neuen wieder Anfänger – Status und Sicherheit wackeln.",
                "Wissenslücken: Unklarheit, was sich ändert und warum, erzeugt Gerüchte und Abwehr.",
                "Persönliche Historie: Wer schon zwei gescheiterte Umstellungen erlebt hat, glaubt nicht an die dritte.",
                "Gewohnheit und Mehraufwand: Umlernen kostet Kraft im ohnehin vollen Alltag – der Nutzen kommt später, die Mühe sofort.",
              ],
            },
            { type: "heading", value: "Rollen im Veränderungsprozess" },
            {
              type: "text",
              value:
                "In jeder Belegschaft verteilen sich vier Haltungen, mit denen du unterschiedlich umgehst: Promotoren treiben die Veränderung aktiv – mache sie zu Multiplikatoren und Key-Usern. Skeptiker haben sachliche Zweifel – nimm ihre Einwände ernst, sie finden echte Schwachstellen und werden überzeugte Botschafter, wenn ihre Punkte adressiert sind. Bremser machen passiv nicht mit – sie brauchen klare Erwartungen, Schulung und Zeit. Widerständler arbeiten aktiv dagegen – hier helfen Einzelgespräche, das Ernstnehmen der Ursachen und notfalls klare Führungsentscheidungen. Faustregel: Energie zuerst in Promotoren und Skeptiker investieren – die Mitte der Belegschaft folgt der Stimmung, nicht der Projektleitung.",
            },
            { type: "heading", value: "Der Ablauf: Verstehen, Verändern, Verankern" },
            {
              type: "text",
              value:
                "Nach dem klassischen Drei-Phasen-Modell von Kurt Lewin: 1. Auftauen (Unfreeze) – Problembewusstsein schaffen: Warum geht es nicht so weiter? Zahlen, Vorfälle und Chancen kommunizieren, Betroffene früh einbeziehen. 2. Verändern (Change) – die Umstellung selbst: Pilotgruppe, Schulungen, Parallelbetrieb, schnelle Erfolge sichtbar machen (Quick Wins), Feedbackkanäle offen halten. 3. Verankern (Refreeze) – das Neue zur Gewohnheit machen: alte Systeme abschalten, Prozesse und Doku anpassen, Erfolge würdigen, Nachschulungen anbieten. Häufigster Fehler in der Praxis: Phase 3 wird übersprungen – nach drei Monaten arbeiten alle wieder mit Excel-Schatten-Listen.",
            },
            { type: "heading", value: "Mitarbeiterqualifizierung" },
            {
              type: "list",
              value: [
                "Präsenzschulung: intensiv, direkte Fragen möglich – teuer und schwer für alle terminierbar.",
                "E-Learning: zeitlich flexibel, beliebig wiederholbar, gut messbar – geringere Verbindlichkeit, keine Praxis im Team.",
                "Blended Learning: die Kombination – Grundlagen als E-Learning, Vertiefung und Praxis in Präsenz. Für Rollouts meist die beste Wahl.",
                "Multiplikatoren/Key-User: je Abteilung wird eine Person intensiv geschult und ist erste Anlaufstelle – entlastet den Support in der Umstellungsphase enorm und verankert Wissen dauerhaft im Team.",
              ],
            },
            { type: "heading", value: "Übungsaufgabe" },
            {
              type: "text",
              value:
                "Dein Betrieb führt ein neues Ticketsystem für 60 Mitarbeitende ein; das alte System ist beliebt, aber technisch am Ende. a) Nenne die vier Rollen im Veränderungsprozess und je eine passende Maßnahme. b) Skizziere die Einführung entlang der drei Lewin-Phasen mit je zwei konkreten Aktivitäten. c) Begründe, warum Blended Learning mit Key-User-Konzept hier passt. d) Woran erkennst du drei Monate später, ob die Veränderung „eingefroren“ ist?",
            },
            {
              type: "solution",
              value:
                "a) Promotoren → als Key-User und Fürsprecher einsetzen; Skeptiker → Einwände strukturiert aufnehmen und beantworten (FAQ, Pilotfeedback); Bremser → verbindliche Schulungstermine und klare Erwartungen; Widerständler → Einzelgespräch, Ursachen klären, Führung einbinden.\nb) Auftauen: Ausfallzeiten/Grenzen des Altsystems transparent machen, Betroffene in Anforderungsworkshop einbeziehen. Verändern: Pilot mit einer Abteilung + Quick Wins kommunizieren, Schulungswellen und Parallelbetrieb mit klarem Enddatum. Verankern: Altsystem lesend stilllegen und dann abschalten, Prozesse/Doku umstellen, Nachschulung nach 4–6 Wochen.\nc) 60 Personen lassen sich nicht gleichzeitig in Präsenz schulen: E-Learning deckt Grundlagen flexibel ab, Präsenz übt die Team-Praxisfälle, Key-User je Abteilung fangen Alltagsfragen ab und entlasten IT-Support und Projektteam.\nd) Kennzahlen statt Bauchgefühl: Anteil der Vorgänge im neuen System (Ziel ~100 %), keine Schatten-Prozesse (E-Mail/Excel), stabile oder sinkende Supporttickets zum neuen System, Nutzung durch alle Abteilungen, positives Stimmungsbild in einer kurzen Nachbefragung.",
            },
            {
              type: "links",
              value: [
                [
                  "Wikipedia: Veränderungsmanagement",
                  "https://de.wikipedia.org/wiki/Ver%C3%A4nderungsmanagement",
                ],
                [
                  "Wikipedia: 3-Phasen-Modell von Lewin",
                  "https://de.wikipedia.org/wiki/3-Phasen-Modell_von_Lewin",
                ],
              ],
            },
          ],
          quiz: [
            {
              id: "imp_lf6-chg-1_0",
              q: "Wie gehst du am sinnvollsten mit Skeptikern um?",
              options: [
                "Konsequent ignorieren, da sie den Fortschritt nur stören",
                "Ihre sachlichen Einwände ernst nehmen und beantworten",
                "Sie umgehend von allen Projektterminen ausschließen",
                "Mit wöchentlichen Rundmails von den Vorteilen überzeugen",
              ],
              correct: 1,
              explain:
                "Sie werden oft die besten Botschafter. Skeptiker zweifeln sachlich – wer ihre Punkte löst, gewinnt glaubwürdige Fürsprecher. Ausgrenzung erzeugt Widerständler.",
            },
            {
              id: "imp_lf6-chg-1_1",
              q: "Welche drei Phasen beschreibt das Modell von Lewin?",
              options: [
                "Plan, Do, Check",
                "Auftauen, Verändern, Verankern",
                "Forming, Storming, Norming",
                "Analyse, Design, Betrieb",
              ],
              correct: 1,
              explain:
                "Unfreeze, Change, Refreeze. Erst Problembewusstsein schaffen, dann umstellen, dann das Neue zur Gewohnheit machen – Phase 3 wird am häufigsten vergessen.",
            },
            {
              id: "imp_lf6-chg-1_2",
              q: "Was ist ein Key-User (Multiplikator)?",
              options: [
                "Der Administrator mit den umfangreichsten Berechtigungen im zentralen Verzeichnisdienst",
                "Eine je Abteilung intensiv geschulte Person als erste Anlaufstelle für Kolleginnen und Kollegen",
                "Der technische Support des Herstellers, der per Fernwartung auf das System zugreift",
                "Ein zentral angelegter Testaccount, mit dem neue Funktionen vor dem Rollout geprüft werden",
              ],
              correct: 1,
              explain:
                "Key-User verankern Wissen im Team, fangen Alltagsfragen ab und entlasten Support und Projektteam in der Umstellung.",
            },
            {
              id: "imp_lf6-chg-1_3",
              q: "Was kennzeichnet Blended Learning?",
              options: [
                "Ausschließlich aufgezeichnete Videos ohne jede Betreuung durch Dozenten",
                "Die Kombination aus E-Learning für Grundlagen und Präsenz für Vertiefung und Praxis",
                "Reines Learning by Doing am Arbeitsplatz ohne begleitende Schulungsangebote",
                "Ausschließlich klassischer Präsenzunterricht ohne digitale Lernanteile",
              ],
              correct: 1,
              explain:
                "Blended = gemischt: flexible Selbstlernanteile plus verbindliche Praxis – für Rollouts meist der beste Kompromiss aus Kosten und Wirkung.",
            },
          ],
        },
      ],
    },
    {
      id: "lf6-praxis",
      title: "Praxisprojekt: Seniorenheim Sonnenhügel",
      lessons: [
        {
          id: "lf6-px-1",
          title: "Kundenprojekt von A bis Z",
          content: [
            { type: "heading", value: "Das Szenario" },
            {
              type: "text",
              value:
                "Das Seniorenheim Sonnenhügel möchte seine IT modernisieren: WLAN für Bewohner und Personal, neue PCs für die Verwaltung, Netzwerkdrucker, ein Gäste-WLAN getrennt vom internen Netz. Dein Unternehmen soll ein Angebot erstellen und das Projekt umsetzen.",
            },
            { type: "heading", value: "Schritt 1: Kundengespräch & Anforderungsaufnahme" },
            {
              type: "text",
              value:
                "Was braucht der Kunde? Wie viele Arbeitsplätze? Welche Software? Wie viele Bewohner/Gäste (WLAN-Dimensionierung)? Budget? Zeitrahmen? Bestehende Infrastruktur? Besondere Anforderungen (Datenschutz Gesundheitsdaten!)? Ergebnis: Dokumentierte Anforderungsliste.",
            },
            { type: "heading", value: "Schritt 2: Lastenheft erstellen" },
            {
              type: "text",
              value:
                "Vom Kunden (mit unserer Hilfe): Ausgangssituation (alte Infrastruktur, Probleme), Zielsetzung (moderne IT, WLAN-Abdeckung, Sicherheit), Funktionale Anforderungen (10 Arbeitsplätze, WLAN 100+ Geräte, getrenntes Gäste-WLAN, Drucker), Nicht-funktionale Anforderungen (99,5% Verfügbarkeit, DSGVO-Konformität, Reaktionszeit < 4h), Rahmenbedingungen (Budget 35.000 EUR, Umsetzung in 6 Wochen, kein Ausfall während Geschäftszeiten).",
            },
            { type: "heading", value: "Schritt 3: Pflichtenheft erstellen" },
            {
              type: "text",
              value:
                "Unsere technische Antwort: Netzwerkplan (VLANs: Verwaltung, Bewohner, Gäste), Hardware-Auswahl (Switch, Access Points, PCs, Drucker) mit Begründung, IP-Adresskonzept (/24 pro VLAN), Sicherheitskonzept (WPA3-Enterprise intern, Captive Portal Gäste, Firewall-Regeln), Zeitplan (Woche 1-2: Planung, 3-4: Verkabelung, 5: Konfiguration, 6: Test+Übergabe), Testkonzept.",
            },
            { type: "heading", value: "Schritt 4: Angebot/Kalkulation" },
            {
              type: "text",
              value:
                "Positionen: Hardware (Switches, APs, PCs, Drucker, Kabel, Patchpanel) + Software/Lizenzen + Dienstleistung (Planung, Installation, Konfiguration, Einweisung) + optionaler Wartungsvertrag. Bezugspreis pro Komponente berechnen, Handlungskosten addieren, Gewinnaufschlag, Kundenrabatt, MwSt. = Angebotspreis.",
            },
            { type: "heading", value: "Schritt 5: Umsetzung & Übergabe" },
            {
              type: "text",
              value:
                "Projektstrukturplan erstellen, Gantt-Diagramm für Zeitplanung. Installation dokumentieren. Abnahmetest mit Checkliste. Übergabeprotokoll: Alle Komponenten, Seriennummern, Konfigurationen, Zugangsdaten (versiegelt!). Einweisung des Personals. Betriebshandbuch übergeben.",
            },
            {
              type: "note",
              value:
                "Dieses Szenario deckt LF1 (Kalkulation), LF2 (Hardware), LF3 (Netzwerk), LF4 (Sicherheit) und LF6 (Serviceprozess) ab – genau wie in der AP1!",
            },
            { type: "heading", value: "Übungsaufgabe 1: Anforderungsanalyse" },
            {
              type: "text",
              value:
                "Seniorenheim braucht WLAN für 40 Zimmer + Gemeinschaftsraum + Büro. Anforderungsliste erstellen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nFunktional: Abdeckung alle Räume, getrennte Netze (Bewohner/Verwaltung), mind. 10 Mbit/s pro Nutzer, einfacher Login.\nNicht-funktional: 99% Verfügbarkeit, WPA3, VLAN-Trennung, erweiterbar auf 60 Zimmer, zentrales Management. Budget erfragen!",
            },
            { type: "heading", value: "Übungsaufgabe 2: Kostenaufstellung" },
            {
              type: "text",
              value: "Grobe Kostenaufstellung WLAN-Projekt Seniorenheim. Welche Positionen?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nHardware: 15x APs (4.500), 2x PoE-Switch (1.600), Controller (500), Kabel (1.500).\nDienstleistung: Planung 8h (960), Installation 16h (1.920), Test 4h (480), Einweisung 2h (240).\nGesamt ca. 11.700 EUR netto.\nNicht vergessen: Anfahrt, Projektleitung, Gewährleistung, Zahlungsbedingungen.",
            },
            { type: "heading", value: "Beispiel 1: Kundenprojekt: Büroumzug IT" },
            {
              type: "text",
              value:
                "Szenario: Arztpraxis zieht um, IT muss mit. Phasen: 1) Ist-Aufnahme: 5 Arbeitsplätze, 1 Server, 1 MFP, TI-Konnektor. 2) Soll-Konzept: Neuer Standort, Cat6a-Verkabelung, VLAN-Trennung Praxis/Verwaltung. 3) Angebot: Hardware + Dienstleistung + laufende Kosten. 4) Umsetzung: Wochenende für minimale Ausfallzeit. 5) Test: Alle Systeme, TI-Anbindung, KV-SafeNet-Zugang. 6) Übergabe + Dokumentation.",
            },
            { type: "heading", value: "Beispiel 2: Angebotskalkulation IT-Projekt" },
            {
              type: "text",
              value:
                "Server-Migration Kunde: Hardware: Server Dell R750 (4.500 EUR), Lizenzen VMware+Veeam (2.800 EUR). Dienstleistung: 2 Tage Migration à 1.200 EUR/Tag = 2.400 EUR. Nebenkosten: Anfahrt 150 EUR. Netto gesamt: 9.850 EUR. + 19% MwSt = 1.871,50 EUR. Brutto: 11.721,50 EUR. Optional: Wartungsvertrag 350 EUR/Monat. Im Angebot: Leistungsbeschreibung, Zeitrahmen, Zahlungsbedingungen (30 Tage netto).",
            },
            { type: "heading", value: "Beispiel 3: Projektdokumentation für den Kunden" },
            {
              type: "text",
              value:
                "Inhalte einer professionellen Projektdokumentation: 1) Projektübersicht (Ziel, Umfang, Zeitrahmen). 2) Ist-/Soll-Vergleich. 3) Netzwerkplan + IP-Schema. 4) Konfigurationsdetails (Server, Firewall, Backup). 5) Zugangsdaten (verschlüsselt!). 6) Übergabeprotokoll mit Abnahme. 7) Wartungsplan + SLA. 8) Notfallkontakte. Tipp: Dokumentation so schreiben, dass ein anderer IT-Dienstleister das System übernehmen könnte.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Kundenangebot erstellen" },
            {
              type: "text",
              value:
                "Ein Kunde (Steuerkanzlei, 15 Mitarbeiter) braucht neue IT: 15 Arbeitsplätze, 1 Server für DATEV, WLAN, Firewall, Backup-Lösung. Erstelle eine grobe Angebotskalkulation mit allen Kostenpositionen (Hardware, Software, Dienstleistung, laufende Kosten). Begründe deine Auswahl.",
            },
            {
              type: "solution",
              value:
                'MUSTERLÖSUNG:\nHardware:\n- 15× Business-PC (i5, 16GB, 512GB NVMe): 15 × 750 = 11.250 EUR\n- 15× Monitor 24" IPS: 15 × 200 = 3.000 EUR\n- 1× Server (Xeon, 64GB ECC, 4×2TB RAID 10): 5.500 EUR\n- 1× NAS Synology für Backup (2×8TB RAID 1): 1.200 EUR\n- 1× Firewall Sophos XGS 126: 1.800 EUR\n- 2× Switch 24-Port managed: 2 × 400 = 800 EUR\n- 2× WLAN Access Point: 2 × 350 = 700 EUR\n- Verkabelung Cat6a (Material): 800 EUR\nHardware gesamt: 25.050 EUR\n\nSoftware/Lizenzen:\n- Windows Server 2022 + 15 CALs: 2.200 EUR\n- DATEV-Lizenzen: Über DATEV direkt (Hinweis im Angebot)\n- Veeam Backup: 800 EUR\nSoftware gesamt: 3.000 EUR\n\nDienstleistung:\n- Verkabelung + Installation (3 Tage à 1.200): 3.600 EUR\n- Server-Setup + Migration (2 Tage): 2.400 EUR\n- Firewall-Konfiguration (0,5 Tage): 600 EUR\n- Test + Einweisung (1 Tag): 1.200 EUR\nDienstleistung gesamt: 7.800 EUR\n\nProjektsumme netto: 35.850 EUR + MwSt = 42.661,50 EUR\n\nLaufende Kosten (monatlich):\n- Wartungsvertrag (Monitoring, Updates, Support): 450 EUR/Monat\n- Backup-Überwachung: inkl.\n- Firewall-Lizenz (jährlich/12): 50 EUR/Monat',
            },
          ],
          quiz: [
            {
              id: "imp_lf6-px-1_0",
              q: "Was gehört ins Lastenheft?",
              options: [
                "Testprotokolle",
                "Konfigurationsdetails",
                "Anforderungen des Kunden",
                "Technische Lösung",
              ],
              correct: 2,
              explain: "Lastenheft = WAS der Kunde will, nicht WIE es umgesetzt wird.",
            },
            {
              id: "imp_lf6-px-1_1",
              q: "Gesundheitsdaten im Seniorenheim erfordern?",
              options: [
                "Nur Backup",
                "Nur Verschlüsselung",
                "Keine besonderen Maßnahmen",
                "Besondere DSGVO-Konformität (sensible Daten)",
              ],
              correct: 3,
              explain:
                "Gesundheitsdaten sind besondere Kategorien nach Art. 9 DSGVO und erfordern erhöhten Schutz.",
            },
            {
              id: "imp_lf6-px-1_2",
              q: "Gäste-WLAN sollte vom internen Netz getrennt sein durch?",
              options: [
                "VLANs + Firewall-Regeln",
                "Anderen Router-Standort",
                "Anderes Passwort reicht",
                "Andere SSID reicht",
              ],
              correct: 0,
              explain:
                "Physische/logische Trennung durch VLANs und Firewall-Regeln, nicht nur andere SSID.",
            },
            {
              id: "imp_lf6-px-1_3",
              q: "Was ist der letzte Schritt vor der Übergabe?",
              options: [
                "Hardware bestellen",
                "Abnahmetest mit Checkliste",
                "Rechnung schreiben",
                "Mitarbeiter einstellen",
              ],
              correct: 1,
              explain:
                "Abnahmetest stellt sicher, dass alle Anforderungen erfüllt sind, bevor der Kunde unterschreibt.",
            },
            {
              id: "imp_lf6-px-1_4",
              q: "Seniorenheim-Projekt: Erst Netzwerkplan oder Hardware?",
              options: [
                "Hardware kaufen",
                "Beides gleichzeitig",
                "Netzwerkplan + IP-Konzept zuerst",
                "Egal",
              ],
              correct: 2,
              explain: "Planung vor Beschaffung: Netzwerkplan → IP-Konzept → dann Hardware.",
            },
            {
              id: "imp_lf6-px-1_5",
              q: "Captive Portal für Gäste-WLAN?",
              options: [
                "Anmeldeseite mit Nutzungsbedingungen",
                "Firewall genügt",
                "Nicht nötig",
                "VPN",
              ],
              correct: 0,
              explain: "Captive Portal: Gäste müssen Nutzungsbedingungen akzeptieren.",
            },
            {
              id: "imp_lf6-px-1_6",
              q: "TCO?",
              options: ["Nur HW", "Nur Personal", "Nur SW", "Gesamtkosten über Lebensdauer"],
              correct: 3,
              explain: "Total Cost of Ownership.",
            },
            {
              id: "imp_lf6-px-1_7",
              q: "Abnahme: Wann?",
              options: ["Nach Zahlung", "Nie", "Nach Test, Kunde bestätigt", "Vor Start"],
              correct: 2,
              explain: "Funktionstest bestanden.",
            },
            {
              id: "imp_lf6-px-1_8",
              q: "WPA3-Enterprise?",
              options: ["Büro mit RADIUS-Login", "Öffentlich", "Gäste", "Heim"],
              correct: 0,
              explain: "Individueller Login.",
            },
            {
              id: "imp_lf6-px-1_9",
              q: "VLAN Zweck?",
              options: ["Mehr IPs", "Internet", "Optik", "Sicherheit + Performance"],
              correct: 3,
              explain: "Broadcast trennen.",
            },
            {
              id: "imp_lf6-px-1_10",
              q: "Was gehört in ein IT-Angebot?",
              options: [
                "Leistungsbeschreibung, Hardware/Software-Liste, Zeitrahmen, Kosten, Zahlungsbedingungen, AGB",
                "Nur ein pauschaler Gesamtpreis; Einzelpositionen würden den Kunden nur verwirren",
                "Nur der Stundensatz des Technikers; alles Weitere wird nach Aufwand abgerechnet",
                "Nur die Hardwareliste mit Herstellernummern; Dienstleistungen gehören nicht hinein",
              ],
              correct: 0,
              explain:
                "Professionelles Angebot: Detaillierte Leistungsbeschreibung, transparente Kalkulation, Zeitplan, Bedingungen.",
            },
            {
              id: "imp_lf6-px-1_11",
              q: "Was ist ein Pflichtenheft im Kundenprojekt?",
              options: [
                "Ungeordnete Wunschliste des Kunden, WAS er sich vorstellt (Lastenheft)",
                "Beschreibung WIE der Dienstleister die Anforderungen technisch umsetzt",
                "Abschließende Rechnung mit allen Positionen des Projekts",
                "Schreiben, mit dem der Kunde den Projektvertrag kündigt",
              ],
              correct: 1,
              explain:
                "Pflichtenheft: Technische Lösung als Antwort auf das Lastenheft des Kunden. Wird Vertragsgrundlage.",
            },
            {
              id: "imp_lf6-px-1_12",
              q: "Was ist TCO?",
              options: [
                "Token Cost Optimization",
                "Ticket Control Office",
                "Total Cost of Ownership",
                "Technical Configuration Online",
              ],
              correct: 2,
              explain:
                "Gesamtbetriebskosten über die Nutzungsdauer. TCO: Anschaffung + Betrieb + Wartung + Entsorgung über z. B. 5 Jahre. Wichtig für Kundenberatung.",
            },
            {
              id: "imp_lf6-px-1_13",
              q: "Warum dokumentiert man ein IT-Projekt?",
              options: [
                "Ausschließlich weil der Vorgesetzte es anordnet; fachlich hat die Doku keinen Nutzen",
                "Ausschließlich als Grundlage für die Rechnungsstellung; danach wird sie nicht mehr benötigt",
                "Nachvollziehbarkeit, Wissenstransfer, Abnahme, Wartung, Haftungsschutz",
                "Allein weil eine gesetzliche Vorschrift jedes IT-Projekt zur Dokumentation verpflichtet",
              ],
              correct: 2,
              explain:
                "Dokumentation schützt beide Seiten: Kunde weiß, was er bekommt, Dienstleister belegt, was er geleistet hat.",
            },
            {
              id: "imp_lf6-px-1_14",
              q: "Was ist ein Netzwerkplan?",
              options: [
                "Ein Organigramm",
                "Ein Projektplan",
                "Grafische Darstellung der IT-Infrastruktur",
                "Ein Zeitplan",
              ],
              correct: 2,
              explain:
                "Geräte, IPs, Verbindungen, VLANs. Netzwerkplan: Zeigt alle Geräte, Verbindungen, IP-Adressen, VLANs. Essentiell für Betrieb und Troubleshooting.",
            },
            {
              id: "imp_lf6-px-1_15",
              q: "Was prüft man bei einer IT-Abnahme?",
              options: [
                "Nur ob der Server eingeschaltet ist und die Betriebs-LEDs leuchten; mehr ist nicht nötig",
                "Nur die gelieferte Hardware auf Transportschäden; Software ist nicht Teil der Abnahme",
                "Alle vereinbarten Leistungen gegen Pflichtenheft: Funktionalität, Performance, Sicherheit, Backup",
                "Nur die Übereinstimmung der Schlussrechnung mit dem ursprünglichen Angebotspreis",
              ],
              correct: 2,
              explain:
                "Abnahme: Systematisch alle Punkte aus dem Pflichtenheft prüfen. Abnahmeprotokoll mit Unterschrift.",
            },
            {
              id: "imp_lf6-px-1_16",
              q: "Was ist ein Wartungsvertrag?",
              options: [
                "Die gesetzliche Hardware-Garantie, die der Hersteller zwei Jahre gewähren muss",
                "Eine Versicherung, die Schäden durch Bedienfehler und Diebstahl abdeckt",
                "Ein einmaliger Servicetermin zur Erstinstallation der Systeme",
                "Laufender Vertrag für regelmäßige Wartung, Updates, Support und Monitoring",
              ],
              correct: 3,
              explain:
                "Wartungsvertrag: Planbare Kosten für den Kunden, planbare Einnahmen für den Dienstleister. Enthält SLA.",
            },
            {
              id: "imp_lf6-px-1_17",
              q: "Was ist ROI?",
              options: [
                "Rate of Interest",
                "Rest of Infrastructure",
                "Remote Operation Interface",
                "Return on Investment",
              ],
              correct: 3,
              explain:
                "Verhältnis von Gewinn zu eingesetztem Kapital. ROI = (Ertrag − Investition) / Investition × 100%. Wichtig, um Kunden den Nutzen einer IT-Investition zu zeigen.",
            },
            {
              id: "imp_lf6-px-1_18",
              q: "Was sollte ein Übergabeprotokoll enthalten?",
              options: [
                "Ausschließlich die technischen Details der Installation, da alles Weitere im Kaufvertrag steht",
                "Nur die Schlussrechnung mit Zahlungsziel, denn die Abnahme erfolgt automatisch mit der Bezahlung",
                "Lediglich Datum und Unterschriften, da der Leistungsumfang bereits im Angebot dokumentiert wurde",
                "Datum, Beteiligte, gelieferte Leistungen, Testergebnisse, offene Punkte, Unterschriften beider Seiten",
              ],
              correct: 3,
              explain:
                "Vollständig: Was wurde geliefert, was getestet, was ist offen, Abnahme bestätigt → rechtliche Absicherung.",
            },
            {
              id: "imp_lf6-px-1_19",
              q: "Warum trennt man Praxis- und Verwaltungsnetz per VLAN?",
              options: [
                "Kosteneinsparung: Getrennte VLANs senken die Lizenzkosten der Switches deutlich",
                "Weil es dem Stand der Technik entspricht; einen praktischen Nutzen gibt es nicht",
                "Geschwindigkeit: VLANs verdoppeln die verfügbare Bandbreite je Endgerät",
                "Sicherheit: Medizinische Geräte/TI getrennt von Büro-Traffic, Compliance-Anforderung",
              ],
              correct: 3,
              explain:
                "Netzwerktrennung: Pflicht bei Arztpraxen (KBV-Richtlinie). Medizinnetz darf nicht direkt mit Büro/Internet verbunden sein.",
            },
          ],
        },
      ],
    },
  ],
};
