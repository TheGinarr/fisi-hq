window.LF_CONTENT = window.LF_CONTENT || {};
window.LF_CONTENT["lf11a"] = {
  topics: [
    {
      id: "lf11-fw",
      title: "Firewall & Netzwerksicherheit",
      lessons: [
        {
          id: "lf11-fw-1",
          title: "Firewall-Konzepte im Unternehmen",
          content: [
            { type: "heading", value: "Firewall-Architekturen" },
            {
              type: "text",
              value:
                "Paketfilter (stateless): Einfache Regeln auf IP/Port. Stateful Firewall: Verfolgt Verbindungsstatus. NGFW: + Application Awareness, IDS/IPS, SSL Inspection. UTM (Unified Threat Management): Firewall + AV + Webfilter + VPN in einem. DMZ (Demilitarisierte Zone): Netzwerksegment für öffentlich erreichbare Server (Webserver, Mailserver) zwischen internem Netz und Internet, geschützt durch Firewalls.",
            },
            { type: "heading", value: "iptables / nftables (Linux)" },
            {
              type: "code",
              value:
                "# SSH erlauben\niptables -A INPUT -p tcp --dport 22 -j ACCEPT\n# HTTP/HTTPS erlauben\niptables -A INPUT -p tcp --dport 80 -j ACCEPT\niptables -A INPUT -p tcp --dport 443 -j ACCEPT\n# Alles andere blockieren\n# Antworten eigener Verbindungen zulassen (sonst blockiert das DROP auch DNS/Updates)\niptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT\niptables -A INPUT -i lo -j ACCEPT\niptables -A INPUT -j DROP\n# Regeln speichern\niptables-save > /etc/iptables/rules.v4",
            },
            { type: "heading", value: "IDS/IPS" },
            {
              type: "text",
              value:
                "IDS (Intrusion Detection System): Erkennt Angriffe, ALARMIERT nur. IPS (Intrusion Prevention System): Erkennt und BLOCKIERT Angriffe aktiv. Erkennungsmethoden: Signaturbasiert (bekannte Angriffsmuster), Anomaliebasiert (Abweichung vom Normalverhalten), Heuristisch (Verhaltensanalyse). Tools: Snort, Suricata (Open Source).",
            },
            { type: "heading", value: "Systemhärtung (Hardening)" },
            {
              type: "text",
              value:
                "Härtung = Angriffsfläche eines Systems minimieren. Grundprinzip: Alles deaktivieren/entfernen, was nicht zwingend gebraucht wird. Maßnahmen: 1. Nicht benötigte Dienste/Software deinstallieren (jeder laufende Dienst ist ein potenzielles Einfallstor). 2. Nicht benötigte Ports schließen. 3. Standard-Passwörter ändern, starke Passwortrichtlinien. 4. Unnötige Benutzerkonten löschen (besonders Default-/Gast-Accounts). 5. Prinzip der minimalen Rechte (Least Privilege): Jeder bekommt nur die Rechte, die er braucht. 6. Regelmäßige Updates/Patches. 7. Logging und Monitoring aktivieren. 8. Verschlüsselung (Festplatte, Verbindungen). 9. Sichere Konfiguration nach BSI-Grundschutz oder CIS Benchmarks.",
            },
            { type: "heading", value: "Härtung in der Praxis" },
            {
              type: "text",
              value:
                "Betriebssystem: Automatische Updates, Firewall aktiv, Telemetrie reduzieren, AutoRun deaktivieren. Server: Nur benötigte Rollen installieren (Server Core statt GUI), RDP absichern/abschalten, Admin-Freigaben prüfen. Netzwerk: Management-Zugriff nur über separates Netz/VLAN, SSH statt Telnet, SNMPv3 statt v1/v2. Anwendungen: Bekannte Schwachstellen patchen, unnötige Module deaktivieren. Härtungs-Standards: BSI IT-Grundschutz-Kataloge, CIS Benchmarks, Microsoft Security Baselines.",
            },
            {
              type: "note",
              value:
                "Systemhärtung ist Kern von LF11 und BSI-Grundschutz. Merksatz: Was nicht da ist, kann nicht angegriffen werden. Härtung reduziert die Angriffsfläche systematisch.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Firewall-Regeln" },
            {
              type: "text",
              value:
                "Webserver (192.168.10.5) per HTTP/HTTPS von außen erreichbar, SSH nur vom Admin (192.168.1.100). Regeln erstellen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nDENY ALL (Whitelist-Ansatz)\nALLOW TCP ANY → 192.168.10.5:80\nALLOW TCP ANY → 192.168.10.5:443\nALLOW TCP 192.168.1.100 → 192.168.10.5:22\nALLOW ESTABLISHED,RELATED\nPrinzip: Deny All + explizite Freigabe. Reihenfolge beachten.",
            },
            { type: "heading", value: "Übungsaufgabe 2: DMZ" },
            { type: "text", value: "Was ist eine DMZ? Netzwerk-Architektur mit DMZ beschreiben." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nDMZ = Netzwerksegment zwischen Internet und internem Netz.\nInternet ↔ FW1 ↔ DMZ ↔ FW2 ↔ Internes Netz\nDMZ: Webserver, Mailserver (von außen erreichbar).\nIntern: AD, Fileserver, DB (nur intern).\nKompromittierter DMZ-Server hat keinen Zugriff aufs interne Netz.",
            },
            { type: "heading", value: "Beispiel 1: Drei-Zonen-Aufbau mit DMZ" },
            {
              type: "code",
              value:
                "Internet ── Firewall ── DMZ: Webserver, Mail-Gateway\n               │\n              LAN: Clients, Dateiserver, AD\n\nRegeln (Auszug, Default Deny am Ende):\n1  extern → DMZ:Web   TCP 80,443   erlauben\n2  extern → DMZ:Mail  TCP 25       erlauben\n3  LAN    → extern    TCP 80,443   erlauben\n4  DMZ    → LAN       *            VERBIETEN\n5  *      → *         *            verwerfen + loggen",
            },
            { type: "heading", value: "Beispiel 2: Warum Regel 4 entscheidend ist" },
            {
              type: "text",
              value:
                "Angreifer übernehmen den Webserver in der DMZ über eine Schwachstelle im CMS. Ihr nächstes Ziel: der Dateiserver im LAN. Regel 4 blockiert jeden Verbindungsaufbau aus der DMZ ins LAN – der Angriff endet in der DMZ und taucht dank Regel 5 im Log auf. Ohne Segmentierung stünde dem Angreifer das gesamte interne Netz offen.",
            },
          ],
          quiz: [
            {
              id: "imp_lf11-fw-1_0",
              q: "DMZ enthält?",
              options: [
                "Öffentlich erreichbare Server",
                "Interne Server",
                "Nur Firewalls",
                "Nur Switches",
              ],
              correct: 0,
              explain:
                "DMZ = Netzwerksegment für öffentliche Dienste (Web, Mail), durch Firewalls geschützt.",
            },
            {
              id: "imp_lf11-fw-1_1",
              q: "IDS vs. IPS: Hauptunterschied?",
              options: [
                "Kein Unterschied",
                "IDS alarmiert nur, IPS blockiert aktiv",
                "IDS ist schneller",
                "IPS ist günstiger",
              ],
              correct: 1,
              explain: "IDS = Detection (nur Alarm), IPS = Prevention (blockiert).",
            },
            {
              id: "imp_lf11-fw-1_2",
              q: "DMZ = ?",
              options: [
                "Digital Media Zone",
                "Daten Management Zone",
                "Direkt Monitoring Zone",
                "Demilitarisierte Zone",
              ],
              correct: 3,
              explain:
                "Netz zwischen intern und extern. DMZ: Netzwerkbereich für öffentliche Server (Web, Mail) zwischen Firewall-Paaren.",
            },
            {
              id: "imp_lf11-fw-1_3",
              q: "Stateful vs. Stateless Firewall?",
              options: [
                "Beide Firewall-Typen arbeiten nach demselben Prüfprinzip",
                "Stateful ist stets langsamer, da jedes Paket doppelt geprüft wird",
                "Stateful merkt sich Verbindungsstatus, Stateless prüft nur Einzelpakete",
                "Stateless ist sicherer, weil keine Verbindungstabelle angreifbar ist",
              ],
              correct: 2,
              explain: "Stateful: Kennt Verbindungsstatus (TCP established), sicherer.",
            },
            {
              id: "imp_lf11-fw-1_4",
              q: "iptables: INPUT Chain?",
              options: [
                "Eingehende Pakete an den Host selbst",
                "Weitergeleitete Pakete",
                "Nur Logging",
                "Ausgehend",
              ],
              correct: 0,
              explain: "INPUT: Pakete, die für den Firewall-Host selbst bestimmt sind.",
            },
            {
              id: "imp_lf11-fw-1_5",
              q: "NGFW = ?",
              options: [
                "Network Gateway Firewall",
                "Next Generation Firewall",
                "New Generation Firewall",
                "Normal Gateway",
              ],
              correct: 1,
              explain:
                "Application Awareness. NGFW: Erkennt Anwendungen (Layer 7), IDS/IPS integriert, Deep Packet Inspection.",
            },
            {
              id: "imp_lf11-fw-1_6",
              q: "IDS vs. IPS?",
              options: [
                "IPS = erkennt Angriffe, meldet sie aber nur passiv",
                "IDS = blockiert Angriffe direkt in der Datenleitung",
                "IDS = erkennt und meldet, IPS = erkennt und blockiert",
                "Beide Systeme reagieren identisch auf Angriffe",
              ],
              correct: 2,
              explain: "IDS: Detection (passiv, meldet). IPS: Prevention (aktiv, blockiert).",
            },
            {
              id: "imp_lf11-fw-1_7",
              q: "WAF = ?",
              options: [
                "Wide Area Firewall",
                "Web Application Firewall",
                "Windows Admin Feature",
                "Wireless Authentication",
              ],
              correct: 1,
              explain: "WAF: Schützt Webanwendungen gegen SQL Injection, XSS etc.",
            },
            {
              id: "imp_lf11-fw-1_8",
              q: "iptables: FORWARD Chain?",
              options: [
                "Pakete, die der Host selbst lokal versendet",
                "Dient nur dem Protokollieren, filtert nichts",
                "Pakete, die an den Host selbst adressiert sind",
                "Pakete, die DURCH den Host weitergeleitet werden",
              ],
              correct: 3,
              explain: "FORWARD: Pakete, die der Firewall-Host routet (nicht für sich selbst).",
            },
            {
              id: "imp_lf11-fw-1_9",
              q: "Deep Packet Inspection?",
              options: [
                "Paketinhalt (Payload) wird analysiert (Layer 7)",
                "Ausschließlich die Header-Felder (Layer 3/4) werden geprüft",
                "Nur Quell- und Ziel-IP-Adresse werden verglichen",
                "Nur der TCP/UDP-Zielport wird kontrolliert",
              ],
              correct: 0,
              explain: "DPI: Schaut in den Paketinhalt, erkennt Anwendungen/Malware.",
            },
            {
              id: "imp_lf11-fw-1_10",
              q: "Systemhärtung Grundprinzip?",
              options: [
                "Möglichst viele Pakete vorsorglich installieren",
                "Zusätzliche Dienste für mehr Redundanz starten",
                "Alle Ports öffnen, um Störungen zu vermeiden",
                "Angriffsfläche minimieren (nur Nötiges aktiv)",
              ],
              correct: 3,
              explain: "Härtung: Alles Unnötige deaktivieren/entfernen.",
            },
            {
              id: "imp_lf11-fw-1_11",
              q: "Least Privilege?",
              options: [
                "Jeder nur die Rechte, die er braucht",
                "Keine Rechte",
                "Alle Admin-Rechte",
                "Root für alle",
              ],
              correct: 0,
              explain: "Minimale Rechte reduzieren Schadenspotenzial.",
            },
            {
              id: "imp_lf11-fw-1_12",
              q: "Was unterscheidet eine stateful Firewall von einem zustandslosen Paketfilter?",
              options: [
                "Sie speichert die vollständigen Inhalte aller Pakete dauerhaft auf der Festplatte zur späteren Auswertung",
                "Sie verfolgt Verbindungszustände und lässt Antwortpakete bestehender Verbindungen automatisch zu",
                "Sie arbeitet ausschließlich auf der Anwendungsebene und kann Netz- und Transportschicht nicht auswerten",
                "Sie prüft grundsätzlich keine Pakete mehr, sondern verlässt sich vollständig auf den Paketfilter davor",
              ],
              correct: 1,
              explain:
                "Die Zustandstabelle erkennt: Dieses eingehende Paket ist die Antwort auf eine erlaubte ausgehende Anfrage – ohne separate Regel.",
            },
            {
              id: "imp_lf11-fw-1_13",
              q: "Welchem Zweck dient eine DMZ?",
              options: [
                "Öffentlich erreichbare Server stehen in einem isolierten Netz, getrennt vom internen LAN",
                "Sie ersetzt die Datensicherung, da DMZ-Server automatisch gespiegelt werden",
                "In der DMZ stehen die Arbeitsplatz-PCs der Geschäftsführung besonders geschützt",
                "Sie beschleunigt das WLAN, indem sie Funkverkehr vom Kabelnetz trennt",
              ],
              correct: 0,
              explain:
                "Wird der Webserver in der DMZ kompromittiert, verhindert die Firewall den Durchgriff ins interne Netz – Schadensbegrenzung durch Segmentierung.",
            },
            {
              id: "imp_lf11-fw-1_14",
              q: "Was bedeutet das Prinzip 'Default Deny' im Regelwerk?",
              options: [
                "Alles ist verboten, was nicht ausdrücklich erlaubt wurde",
                "Die Firewall ist standardmäßig aus",
                "Alles ist erlaubt, was nicht verboten wurde",
                "Nur der Admin wird blockiert",
              ],
              correct: 0,
              explain:
                "Whitelisting ist der sichere Grundsatz: Die letzte Regel verwirft alles Übrige – ein vergessener Dienst ist dann zu, nicht offen.",
            },
            {
              id: "imp_lf11-fw-1_15",
              q: "Worin unterscheidet sich ein IDS von einem IPS?",
              options: [
                "Das IDS erkennt und meldet Angriffe, das IPS blockiert sie zusätzlich aktiv",
                "Beide Systeme löschen erkannte Schadsoftware direkt von den Clients",
                "Das IDS blockiert Angriffe aktiv, das IPS meldet sie lediglich",
                "IPS ist lediglich die ältere, inzwischen abgelöste Bezeichnung für IDS",
              ],
              correct: 0,
              explain:
                "Intrusion Detection = Alarm; Intrusion Prevention sitzt inline im Datenstrom und verwirft erkannte Angriffe sofort – mit dem Risiko von False-Positive-Blockaden.",
            },
            {
              id: "imp_lf11-fw-1_16",
              q: "Was kann eine Next-Generation Firewall (NGFW) mehr als ein klassischer Paketfilter?",
              options: [
                "Sie arbeitet ohne Regeln",
                "Sie filtert ausschließlich MAC-Adressen",
                "Sie erkennt Anwendungen und Benutzer und prüft Inhalte",
                "Sie ersetzt den Virenschutz auf allen Clients vollständig",
              ],
              correct: 2,
              explain:
                "Deep Packet Inspection. NGFW unterscheidet z. B. Teams-Traffic von Filesharing auf demselben Port und bindet Benutzeridentitäten (AD) in Regeln ein.",
            },
            {
              id: "imp_lf11-fw-1_17",
              q: "In welcher iptables-Chain landen Pakete, die an den Server selbst gerichtet sind?",
              options: ["POSTROUTING", "INPUT", "FORWARD", "OUTPUT"],
              correct: 1,
              explain:
                "INPUT = an den Host, OUTPUT = vom Host, FORWARD = durch den Host geroutet (wenn er als Router/Firewall arbeitet).",
            },
            {
              id: "imp_lf11-fw-1_18",
              q: "Ein interner Benutzer soll eine externe Webseite per HTTPS aufrufen können. Welche Regel ist nötig?",
              options: [
                "Alle Ports in beide Richtungen öffnen",
                "UDP 53 eingehend öffnen",
                "Ausgehend TCP 443 von LAN nach extern erlauben",
                "Eingehend TCP 443 von extern ins LAN erlauben",
              ],
              correct: 2,
              explain:
                "Antworten regelt die Zustandstabelle. Die Verbindung wird von innen aufgebaut; stateful genügt die ausgehende Erlaubnis. Eingehende 443-Freigaben braucht nur ein eigener öffentlicher Webserver.",
            },
            {
              id: "imp_lf11-fw-1_19",
              q: "Welche Maßnahmen gehören zur Systemhärtung (Hardening)?",
              options: [
                "Möglichst viele Dienste vorinstallieren, damit später keine Nachinstallationen nötig sind",
                "Alle Ports dauerhaft öffnen, damit Anwendungen ohne Fehlfunktionen kommunizieren",
                "Unnötige Dienste deaktivieren, Standardpasswörter ändern, Patches einspielen, Rechte minimieren",
                "Das Logging deaktivieren, um Speicherplatz und Systemleistung einzusparen",
              ],
              correct: 2,
              explain:
                "Jeder laufende Dienst ist Angriffsfläche; Härtung reduziert sie nach Checklisten (z. B. CIS-Benchmarks, BSI-Empfehlungen).",
            },
          ],
        },
      ],
    },
    {
      id: "lf11-ha",
      title: "Hochverfügbarkeit & Redundanz",
      lessons: [
        {
          id: "lf11-klima-1",
          title: "Serverraum-Planung: Wärmelast, Klima & USV zusammendenken",
          content: [
            {
              type: "text",
              value:
                "Ein Serverraum wird über drei Rechnungen dimensioniert, die in Prüfungen gern kombiniert werden – und die zusammengehören, weil alle von derselben Größe abhängen: der elektrischen Leistungsaufnahme.\n\n1) WÄRMELAST: Praktisch jede aufgenommene elektrische Leistung wird zu Wärme. Kühllast [W] ≈ Summe der Geräteleistungen (+ Zuschläge für Beleuchtung, Personen, Wärmeeintrag durch Wände). Klimageräte werden oft in BTU/h angegeben: BTU/h = W × 3,412.\n\n2) KLIMA-REDUNDANZ: Fällt das einzige Klimagerät aus, überhitzt der Raum in Minuten – deshalb N+1: Die Last wird auf N Geräte ausgelegt und ein zusätzliches gleich großes Gerät installiert. Wichtig fürs Konzept: Kalt-/Warmgang-Trennung erhöht die Effizienz, Temperaturüberwachung mit Alarmierung gehört dazu (Monitoring!).\n\n3) USV: Sie überbrückt Stromausfälle bis zum geordneten Herunterfahren oder Generatorstart. Zwei Rechnungen: Dimensionierung S [VA] = P [W] ÷ cos φ (plus 20–30 % Reserve, künftiges Wachstum!) und Überbrückungszeit t [h] = Batteriekapazität [Wh] ÷ Last [W]. Achtung, Prüfungsfalle: Die Klimaanlage hängt meist NICHT an der USV – bei längerem Ausfall steigt die Temperatur trotz laufender Server; deshalb gehört zur USV-Planung ein Shutdown-Konzept.\n\nZusammenspiel im Konzept (typische AP2-Antwortstruktur): Leistungsbilanz aufstellen → daraus Kühllast UND USV-Größe ableiten → Redundanzen festlegen (N+1 Klima, ggf. 2N USV/Einspeisung) → Überwachung + Notfallplan (Alarm, automatischer Shutdown, Wiederanlaufreihenfolge).",
            },
            { type: "heading", value: "Übungsaufgabe: Serverraum der Stadtwerke" },
            {
              type: "text",
              value:
                "Bestand: 4 Server à 450 W, 2 Switches à 150 W, 1 Storage 600 W, cos φ 0,9. a) Berechne die IT-Gesamtlast und die nötige USV-Scheinleistung inklusive 25 % Reserve. b) Wie viele BTU/h muss die Klimatisierung mindestens abführen, und wie viele Geräte à 10.000 BTU/h installierst du bei N+1? c) Die USV-Batterie liefert 1.440 Wh – wie lange hält sie die IT-Last?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Last = 4×450 + 2×150 + 600 = 1.800 + 300 + 600 = 2.700 W · S = 2.700 ÷ 0,9 = 3.000 VA · mit Reserve: 3.000 × 1,25 = 3.750 VA → nächstgrößere USV (z. B. 4.000 VA)\nb) 2.700 W × 3,412 ≈ 9.212 BTU/h → rechnerisch reicht 1 Gerät à 10.000 BTU/h → N+1 = 2 Geräte\nc) t = 1.440 Wh ÷ 2.700 W = 0,533 h ≈ 32 Minuten – genug für geordneten Shutdown, nicht für Weiterbetrieb.",
            },
            { type: "heading", value: "Vertiefung: PUE als Bewertungsmaßstab" },
            {
              type: "text",
              value:
                "Die Energieeffizienz des Gesamtraums misst die Kennzahl PUE = Gesamtleistung ÷ IT-Leistung. Zieht der Raum 3.800 W, wovon 2.700 W echte IT-Last sind, gilt PUE = 3.800 ÷ 2.700 ≈ 1,41 – der Rest ist vor allem Klima. Moderne Rechenzentren erreichen 1,2–1,4; ein hoher PUE ist das Erste, was ein Energieaudit bemängelt. Stellschrauben: Kalt-/Warmgang, höhere Zulufttemperatur im zulässigen Bereich, effiziente Netzteile (80 PLUS), Virtualisierung statt Blech.",
            },
          ],
          quiz: [
            {
              id: "imp_lf11-klima-1_g0",
              q: "Wie groß ist die Wärmelast eines Serverraums näherungsweise?",
              options: [
                "Etwa die Hälfte der elektrischen Leistungsaufnahme",
                "So groß wie die gesamte elektrische Leistungsaufnahme der Geräte",
                "Nur die Leistung der Netzteile, nicht der CPUs",
                "Unabhängig von der IT-Last, nur von der Raumgröße",
              ],
              correct: 1,
              explain: "Praktisch jede aufgenommene elektrische Leistung endet als Wärme im Raum.",
            },
            {
              id: "imp_lf11-klima-1_g1",
              q: "2.700 W IT-Last – wie viele BTU/h entspricht das (Faktor 3,412)?",
              options: ["ca. 791 BTU/h", "ca. 2.700 BTU/h", "ca. 4.606 BTU/h", "ca. 9.212 BTU/h"],
              correct: 3,
              explain: "2.700 × 3,412 ≈ 9.212 BTU/h.",
            },
            {
              id: "imp_lf11-klima-1_g2",
              q: "Was bedeutet N+1 bei der Klimatisierung?",
              options: [
                "Ein Gerät mehr installieren, als für die Last nötig wäre",
                "Jedes Gerät eine Nummer größer wählen als berechnet",
                "Die Anlage jährlich um ein Gerät erweitern",
                "Ein Gerät läuft, N Geräte stehen im Kaltstart bereit",
              ],
              correct: 0,
              explain:
                "Auslegung auf N Geräte plus ein redundantes – der Ausfall eines Geräts bleibt folgenlos.",
            },
            {
              id: "imp_lf11-klima-1_g3",
              q: "USV-Dimensionierung: 2.700 W bei cos φ 0,9 – welche Scheinleistung ist mindestens nötig (ohne Reserve)?",
              options: ["2.430 VA", "2.700 VA", "3.000 VA", "3.750 VA"],
              correct: 2,
              explain:
                "S = P ÷ cos φ = 2.700 ÷ 0,9 = 3.000 VA; 3.750 wäre der Wert MIT 25 % Reserve.",
            },
            {
              id: "imp_lf11-klima-1_g4",
              q: "Batterie 1.440 Wh, Last 2.700 W – Überbrückungszeit?",
              options: ["ca. 19 Minuten", "ca. 32 Minuten", "ca. 53 Minuten", "ca. 64 Minuten"],
              correct: 1,
              explain: "1.440 ÷ 2.700 = 0,533 h ≈ 32 min.",
            },
            {
              id: "imp_lf11-klima-1_g5",
              q: "Warum reicht eine USV allein bei längerem Stromausfall nicht?",
              options: [
                "Die Klimatisierung hängt meist nicht an der USV – der Raum überhitzt trotz laufender Server",
                "USV-Batterien dürfen nur 5 Minuten belastet werden",
                "Server akzeptieren USV-Strom nur kurzzeitig",
                "Die USV schaltet sich aus Sicherheitsgründen selbst ab",
              ],
              correct: 0,
              explain:
                "Deshalb: Shutdown-Konzept oder Generator – und Klima in die Notstromplanung einbeziehen.",
            },
            {
              id: "imp_lf11-klima-1_g6",
              q: "PUE = 3.800 W Gesamt ÷ 2.700 W IT. Wie ist der Wert ≈ 1,41 einzuordnen?",
              options: [
                "Unmöglich – PUE ist immer kleiner als 1",
                "Hervorragend, besser geht es nicht",
                "Katastrophal, Faktor 10 zu hoch",
                "Mäßig – moderne Räume erreichen 1,2 bis 1,4",
              ],
              correct: 3,
              explain: "PUE ist immer ≥ 1; je näher an 1, desto effizienter.",
            },
            {
              id: "imp_lf11-klima-1_g7",
              q: "Welche Maßnahme senkt den Kühlbedarf strukturell?",
              options: [
                "USV-Reserve von 25 auf 50 % erhöhen",
                "Mehr Batterien parallel schalten",
                "Kalt- und Warmgang konsequent trennen",
                "Die Serverschränke dichter zusammenstellen",
              ],
              correct: 2,
              explain:
                "Getrennte Luftführung verhindert Mischluft – die Klimageräte arbeiten effizienter.",
            },
            {
              id: "imp_lf11-klima-1_g8",
              q: "Wozu dient die 20–30-%-Reserve bei der USV-Auslegung?",
              options: [
                "Für Wachstum und Lastspitzen – und weil Batterien altern",
                "Sie ist gesetzlich vorgeschrieben",
                "Sie kompensiert den Wirkungsgrad der Klimaanlage",
                "Damit die USV auch das Bürogebäude versorgen kann",
              ],
              correct: 0,
              explain: "Ohne Reserve steht bei jeder Erweiterung sofort ein USV-Tausch an.",
            },
            {
              id: "imp_lf11-klima-1_g9",
              q: "Typische AP2-Antwortstruktur für ein Serverraum-Konzept?",
              options: [
                "Erst Hersteller wählen, dann Preise vergleichen, dann bestellen",
                "Leistungsbilanz → Kühllast + USV ableiten → Redundanz → Überwachung/Notfallplan",
                "Raumgröße messen → Klimagerät kaufen → Rest ergibt sich",
                "Immer 2N für alles fordern, Begründung unnötig",
              ],
              correct: 1,
              explain:
                "Die Kette von der Leistungsbilanz zu Redundanz und Betrieb sammelt die Konzeptpunkte.",
            },
          ],
        },
        {
          id: "lf11-ha-1",
          title: "HA-Konzepte",
          content: [
            { type: "heading", value: "Verfügbarkeitsstufen" },
            {
              type: "text",
              value:
                "99% = 3,65 Tage Ausfall/Jahr. 99,9% = 8,76 Stunden. 99,99% = 52,56 Minuten. 99,999% (Five Nines) = 5,26 Minuten. Jede '9' bedeutet 10x weniger Ausfallzeit.",
            },
            { type: "heading", value: "Redundanz-Strategien" },
            {
              type: "text",
              value:
                "Cold Standby: Ersatzsystem offline, manuelles Umschalten, lange Ausfallzeit. Warm Standby: Ersatzsystem läuft, Daten werden repliziert, Umschaltung in Minuten. Hot Standby / Active-Active: Beide Systeme aktiv, automatisches Failover, minimale Ausfallzeit. Clustering: Mehrere Server als ein logisches System (z.B. Windows Failover Cluster, Pacemaker/Corosync). Load Balancing: Lastverteilung auf mehrere Server (HAProxy, Nginx, F5).",
            },
            { type: "heading", value: "Datenreplikation" },
            {
              type: "text",
              value:
                "Synchron: Daten werden gleichzeitig geschrieben (0 Datenverlust, höhere Latenz). Asynchron: Daten werden zeitversetzt repliziert (geringer Datenverlust möglich, schneller). Georedundanz: Replikation an entfernten Standort (Schutz vor Standort-Ausfall).",
            },
            { type: "heading", value: "Übungsaufgabe 1: Verfügbarkeit berechnen" },
            {
              type: "text",
              value:
                "a) 99,9% Verfügbarkeit: Ausfallzeit/Jahr? b) 2 Nodes je 99%: Cluster-Verfügbarkeit Active-Passive?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) (1-0,999) × 365 × 24 = 8,76h/Jahr ≈ 43,8 Min/Monat\nb) P(Ausfall) = 0,01 × 0,01 = 0,0001 → Verfügbarkeit 99,99% (52,6 Min/Jahr)\nFormel: V_ges = 1 - (1-V)^n",
            },
            { type: "heading", value: "Beispiel 1: Verfügbarkeitskette durchrechnen" },
            {
              type: "text",
              value:
                "Webshop-Kette: Firewall 99,9 % → Load Balancer 99,9 % → Webserver 99,5 % → Datenbank 99,5 %. Gesamt: 0,999 × 0,999 × 0,995 × 0,995 ≈ 0,9880 = 98,80 % → rund 105 Stunden Ausfall/Jahr. Nach Verdopplung von Web und DB (je parallel: 1 − 0,005² = 99,9975 %): 0,999 × 0,999 × 0,999975 × 0,999975 ≈ 99,795 % → rund 18 Stunden. Die Rechnung zeigt, wo Redundanz am meisten bringt.",
            },
            { type: "heading", value: "Beispiel 2: Aktiv/Passiv-Failover des Dateiservers" },
            {
              type: "list",
              value: [
                "Knoten A (aktiv) und Knoten B (passiv) teilen sich ein gespiegeltes Storage",
                "Heartbeat über zwei getrennte Netzwerkverbindungen",
                "03:41 Uhr: Netzteil von A fällt aus – Heartbeat bleibt aus",
                "B übernimmt die virtuelle IP und startet die Freigabedienste (Failover ~30 s)",
                "Benutzer merken am Morgen nichts; das Monitoring hat die Bereitschaft informiert",
                "A wird repariert und wieder als Passiv-Knoten eingebunden (Failback geplant im Wartungsfenster)",
              ],
            },
            { type: "heading", value: "Übungsaufgabe 2: Verfügbarkeit Serie und parallel" },
            {
              type: "text",
              value:
                "Gegeben: zwei Internetleitungen mit je 99 % Verfügbarkeit. (a) Wie hoch ist die Verfügbarkeit, wenn BEIDE gleichzeitig benötigt werden? (b) Wie hoch, wenn EINE genügt (echte Redundanz, getrennte Trassen/Anbieter)? (c) Wie viele Stunden Ausfall pro Jahr bedeutet Ergebnis (b)?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n(a) Reihenschaltung: 0,99 × 0,99 = 0,9801 = 98,01 %.\n(b) Parallelschaltung: 1 − (0,01 × 0,01) = 1 − 0,0001 = 0,9999 = 99,99 %.\n(c) 0,01 % von 8.760 h = 0,876 h ≈ 53 Minuten Ausfall pro Jahr.\nHinweis für die Praxis: Die Rechnung in (b) gilt nur, wenn die Leitungen wirklich unabhängig sind – gleiche Trasse oder gleicher Anbieter-Backbone sind ein gemeinsamer Single Point of Failure.",
            },
          ],
          quiz: [
            {
              id: "imp_lf11-ha-1_0",
              q: "99,99% Verfügbarkeit = max. Ausfall/Jahr?",
              options: ["3 Tage", "52 Minuten", "5 Minuten", "8 Stunden"],
              correct: 1,
              explain: "99,99% ≈ 52,56 Minuten Ausfall pro Jahr.",
            },
            {
              id: "imp_lf11-ha-1_1",
              q: "Synchrone Replikation bedeutet?",
              options: [
                "Nur für Backups",
                "0 Datenverlust, aber höhere Latenz",
                "Nur nachts",
                "Schneller",
              ],
              correct: 1,
              explain: "Synchron = Daten werden gleichzeitig an beiden Standorten geschrieben.",
            },
            {
              id: "imp_lf11-ha-1_2",
              q: "MTBF = ?",
              options: [
                "Minimum Time Between Fixes",
                "Mean Time Between Failures",
                "Mean Time Before Failure",
                "Max Time Before Fix",
              ],
              correct: 1,
              explain:
                "Durchschnittliche Betriebszeit. MTBF: Durchschnittliche Zeit zwischen Ausfällen.",
            },
            {
              id: "imp_lf11-ha-1_3",
              q: "MTTR = ?",
              options: [
                "Max Time To Replace",
                "Mean Time To Repair",
                "Minimum Testing Time Required",
                "Mean Throughput Transfer Rate",
              ],
              correct: 1,
              explain:
                "Durchschnittliche Reparaturzeit. MTTR: Durchschnittliche Zeit bis zur Wiederherstellung.",
            },
            {
              id: "imp_lf11-ha-1_4",
              q: "Aktiv-Passiv-Cluster?",
              options: [
                "Beide Knoten bleiben dauerhaft im Standby-Modus",
                "Beide Knoten verarbeiten gleichzeitig alle Anfragen",
                "Ein Verbund aus mindestens drei aktiven Servern",
                "Einer arbeitet, einer springt bei Ausfall ein",
              ],
              correct: 3,
              explain: "Primary arbeitet, Secondary übernimmt im Fehlerfall (Failover).",
            },
            {
              id: "imp_lf11-ha-1_5",
              q: "Aktiv-Aktiv-Cluster?",
              options: [
                "Drei Server, von denen jeweils nur einer aktiv arbeitet",
                "Ein Knoten arbeitet, der zweite wartet passiv als Reserve",
                "Beide Server arbeiten gleichzeitig (Load Sharing)",
                "Ein Verbund ohne Failover, Ausfälle werden nicht abgefangen",
              ],
              correct: 2,
              explain: "Aktiv-Aktiv: Beide arbeiten, bei Ausfall übernimmt einer die volle Last.",
            },
            {
              id: "imp_lf11-ha-1_6",
              q: "SLA 99,95%: Ausfall/Jahr?",
              options: ["52 Min", "8,76h", "0h", "4,38h"],
              correct: 3,
              explain: "99,95%: 8760h x 0,0005 = 4,38h.",
            },
            {
              id: "imp_lf11-ha-1_7",
              q: "Georedundanz?",
              options: [
                "Tägliches Backup auf ein zweites NAS im selben Serverraum",
                "RAID-Verbund, dessen Platten auf Standorte verteilt sind",
                "Systeme an verschiedenen Standorten für Katastrophenschutz",
                "Redundanz, die nur Cloud-Anbieter realisieren können",
              ],
              correct: 2,
              explain: "Standortübergreifende Redundanz gegen Feuer/Überschwemmung etc.",
            },
            {
              id: "imp_lf11-ha-1_8",
              q: "Heartbeat?",
              options: [
                "Ein Testverfahren zur Messung der Netzwerk-Bandbreite",
                "Signal zwischen Cluster-Knoten, ob der Partner noch lebt",
                "Ein Monitoring-Tool zur grafischen Auswertung von Serverlast",
                "Ein zyklischer Selbsttest der lokalen Hardware (CPU, RAM) beim Start",
              ],
              correct: 1,
              explain: "Heartbeat: Regelmäßiges Signal, Ausbleiben = Failover auslösen.",
            },
            {
              id: "imp_lf11-ha-1_9",
              q: "Wofür stehen MTBF und MTTR?",
              options: [
                "Zwei Netzwerkprotokolle für redundante Routing-Pfade",
                "Zwei RAID-Level für gespiegelte bzw. verteilte Datenhaltung",
                "Mittlere Zeit zwischen Ausfällen bzw. mittlere Reparaturdauer",
                "Zwei Lizenzmodelle für Cluster- bzw. Einzelserver-Betrieb",
              ],
              correct: 2,
              explain:
                "Verfügbarkeit = MTBF / (MTBF + MTTR): Seltener ausfallen UND schneller reparieren erhöhen die Verfügbarkeit.",
            },
            {
              id: "imp_lf11-ha-1_10",
              q: "Worin unterscheidet sich ein Aktiv/Passiv- von einem Aktiv/Aktiv-Cluster?",
              options: [
                "Aktiv/Aktiv ist grundsätzlich günstiger, weil nur eine Lizenz benötigt wird und der zweite Knoten unlizenziert mitläuft",
                "Ein Aktiv/Passiv-Cluster bietet keinerlei Redundanz, da der passive Knoten bei einem Ausfall nicht übernehmen kann",
                "Aktiv/Passiv: ein Knoten arbeitet, der zweite wartet als Reserve; Aktiv/Aktiv: beide arbeiten und übernehmen gegenseitig",
                "Es gibt keinen technischen Unterschied, beide Begriffe bezeichnen dieselbe Clusterarchitektur mit anderem Namen",
              ],
              correct: 2,
              explain:
                "Aktiv/Aktiv nutzt die Hardware besser, ist aber komplexer – nach einem Ausfall muss ein Knoten die Gesamtlast tragen können.",
            },
            {
              id: "imp_lf11-ha-1_11",
              q: "Was bezeichnet Failover?",
              options: [
                "Die automatische Übernahme der Dienste durch ein Ersatzsystem beim Ausfall des aktiven Systems",
                "Den Defekt einer Festplatte, der durch die Fehlermeldung des RAID-Controllers angezeigt wird",
                "Das geplante, manuelle Herunterfahren der Server für Wartungsarbeiten am Wochenende",
                "Das automatisierte Einspielen von Updates auf mehreren Servern nacheinander",
              ],
              correct: 0,
              explain:
                "Cluster-Software erkennt den Ausfall (Heartbeat) und startet die Dienste auf dem Partnerknoten – idealerweise in Sekunden.",
            },
            {
              id: "imp_lf11-ha-1_12",
              q: "Wozu dient der Heartbeat in einem Cluster?",
              options: [
                "Die Knoten signalisieren sich gegenseitig regelmäßig ihre Funktionsfähigkeit",
                "Er komprimiert die zwischen den Knoten replizierten Nutzdaten",
                "Er synchronisiert die Systemuhrzeit aller Knoten mit einem Internet-Zeitserver",
                "Er misst in festen Intervallen die CPU-Temperatur aller Clusterknoten",
              ],
              correct: 0,
              explain:
                "Bleibt der Heartbeat aus, gilt der Partner als ausgefallen und das Failover beginnt – deshalb läuft der Heartbeat oft über getrennte Verbindungen.",
            },
            {
              id: "imp_lf11-ha-1_13",
              q: "Was ist eine Split-Brain-Situation?",
              options: [
                "Ein RAID-Controller-Defekt",
                "Ein Stromausfall im Rechenzentrum",
                "Ein Benutzerfehler",
                "Beide Clusterknoten halten sich für aktiv",
              ],
              correct: 3,
              explain:
                "Ursache: Nur die Verbindung zwischen ihnen ist ausgefallen. Gefahr: Beide schreiben gleichzeitig auf die Daten → Inkonsistenz. Gegenmittel: Quorum (dritte Instanz entscheidet, wer weitermachen darf).",
            },
            {
              id: "imp_lf11-ha-1_14",
              q: "Zwei Komponenten mit je 99 % Verfügbarkeit sind in Reihe geschaltet (beide müssen laufen). Gesamtverfügbarkeit?",
              options: ["99,99 %", "99 %", "0,99 × 0,99 = 98,01 %", "198 %"],
              correct: 2,
              explain:
                "In Reihe multiplizieren sich die Verfügbarkeiten – die Kette ist schwächer als ihr schwächstes Glied. Parallel (eine genügt) gilt: 1 − (0,01 × 0,01) = 99,99 %.",
            },
            {
              id: "imp_lf11-ha-1_15",
              q: "Welche Rolle spielt ein Load Balancer in einem HA-Konzept?",
              options: [
                "Er ersetzt die USV, indem er Stromausfälle über redundante Netzteile abfängt",
                "Er verteilt Anfragen auf mehrere Server und nimmt ausgefallene automatisch aus der Verteilung",
                "Er erhöht ausschließlich die Internetbandbreite durch Bündelung der Anschlüsse",
                "Er verschlüsselt die Festplatten aller angeschlossenen Server transparent",
              ],
              correct: 1,
              explain:
                "Health-Checks erkennen tote Backends; Nutzer landen nur auf funktionierenden Servern – Redundanz und Lastverteilung in einem.",
            },
            {
              id: "imp_lf11-ha-1_16",
              q: "Warum ersetzt RAID kein Backup, obwohl es zur Hochverfügbarkeit beiträgt?",
              options: [
                "RAID bietet überhaupt keinen Schutz, auch nicht beim Ausfall einzelner Festplatten",
                "RAID-Systeme sind zu langsam, um die Datenmengen eines Backups rechtzeitig zu schreiben",
                "RAID lässt sich ausschließlich mit SSDs betreiben, Backups erfordern aber Magnetbänder",
                "RAID schützt vor Plattenausfall, aber nicht vor Löschen, Verschlüsselungstrojanern oder Brand",
              ],
              correct: 3,
              explain:
                "Löschen und Trojaner-Verschlüsselung werden vom RAID sofort mitgespiegelt. HA hält den Betrieb am Laufen; das Backup ist die letzte Verteidigungslinie für die Daten selbst – man braucht beides.",
            },
            {
              id: "imp_lf11-ha-1_17",
              q: "Was leistet eine USV im Verfügbarkeitskonzept?",
              options: [
                "Sie überbrückt Stromausfälle und ermöglicht geordnetes Herunterfahren oder den Generatorstart",
                "Sie beschleunigt das Netzwerk durch Glättung der Signalspannung auf den Leitungen",
                "Sie verhindert Softwarefehler, indem sie fehlerhafte Prozesse automatisch neu startet",
                "Sie kühlt den Serverraum und ersetzt damit die Klimaanlage im Notbetrieb",
              ],
              correct: 0,
              explain:
                "Schon Sekundenbruchteile Stromausfall lassen Server abstürzen; die USV filtert zudem Spannungsspitzen.",
            },
            {
              id: "imp_lf11-ha-1_18",
              q: "Was versteht man unter Georedundanz?",
              options: [
                "Redundante Mauspads",
                "Kritische Systeme laufen an räumlich getrennten Standorten",
                "Eine doppelte Internetleitung desselben Anbieters im selben Kabelkanal",
                "Zwei Server im selben Rack",
              ],
              correct: 1,
              explain:
                "So wird auch ein Standortausfall (Brand, Flut) verkraftet. Empfehlungen (z. B. BSI) nennen deutliche Mindestabstände zwischen Rechenzentren, damit ein regionales Ereignis nicht beide trifft.",
            },
            {
              id: "imp_lf11-ha-1_19",
              q: "Ein Dienst benötigt 99,9 % Verfügbarkeit. Webserver (99,5 %) und Datenbank (99,5 %) laufen in Reihe. Wird das Ziel erreicht?",
              options: [
                "Ja, weil sich Verfügbarkeiten addieren: 99,5 % + 99,5 % gibt genug Reserve",
                "Das lässt sich ohne Herstellerangaben rechnerisch nicht ermitteln",
                "Ja, locker – die Kette erreicht deutlich mehr als 99,9 %",
                "Nein – 0,995 × 0,995 ≈ 99,0 %, das Ziel wird verfehlt; Redundanz ist nötig",
              ],
              correct: 3,
              explain:
                "99,0 % bedeuten ~87 Stunden Ausfall pro Jahr statt erlaubter ~8,8 Stunden. Lösung: Komponenten redundant auslegen (parallel) und damit die Einzelwerte anheben.",
            },
          ],
        },
      ],
    },
    {
      id: "lf11-vpn",
      title: "VPN & SIEM",
      lessons: [
        {
          id: "lf11-vp-1",
          title: "VPN-Konfiguration im Unternehmen",
          content: [
            { type: "heading", value: "Site-to-Site VPN (IPsec)" },
            {
              type: "text",
              value:
                "Verbindet zwei Standorte dauerhaft. Phase 1 (IKE): Authentifizierung und Schlüsselaustausch (Pre-Shared Key oder Zertifikat). Phase 2: Eigentlicher Datentunnel (ESP-Protokoll, AES-Verschlüsselung). Auf Cisco: crypto isakmp policy, crypto ipsec transform-set, crypto map. Auf Linux: strongSwan oder Libreswan.",
            },
            { type: "heading", value: "Remote-Access VPN" },
            {
              type: "text",
              value:
                "OpenVPN: Open Source, SSL/TLS-basiert, läuft auf jedem OS. Config-Datei (.ovpn) verteilen. WireGuard: Modern, schlank, sehr schnell. Einfache Konfiguration mit Public/Private Keys. Cisco AnyConnect: Enterprise-Standard, DTLS für Performance. Split Tunneling: Nur Firmendaten über VPN, Rest direkt ins Internet. Spart Bandbreite, aber Sicherheitsrisiko.",
            },
            { type: "heading", value: "SIEM (Security Information and Event Management)" },
            {
              type: "text",
              value:
                "Zentrales Sammeln, Korrelieren und Analysieren von Sicherheitsereignissen aus verschiedenen Quellen (Firewall-Logs, Server-Logs, AD-Events, IDS-Alarme). Ziel: Angriffe früh erkennen, Compliance nachweisen. Ablauf: Collect (Daten sammeln) -> Normalize (einheitliches Format) -> Correlate (Zusammenhänge finden) -> Alert (bei Auffälligkeiten). Tools: Splunk (kommerziell), ELK/Elastic SIEM (Open Source), Microsoft Sentinel (Cloud), Wazuh (Open Source).",
            },
            { type: "heading", value: "Übungsaufgabe 1: Site-to-Site vs. Remote Access" },
            {
              type: "text",
              value: "Unterschied Site-to-Site und Remote Access VPN? Je ein Szenario.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nSite-to-Site: Standorte dauerhaft verbinden (Hamburg↔Berlin). Gateway-zu-Gateway, transparent. IPsec Tunnel Mode.\nRemote Access: Einzelnutzer von extern (Homeoffice). VPN-Client nötig. SSL-VPN/WireGuard.\nSplit Tunneling: Nur Firmendaten über VPN. + Bandbreite, - Sicherheit.",
            },
            { type: "heading", value: "Übungsaufgabe 2: IPsec vs. SSL-VPN" },
            { type: "text", value: "IPsec und SSL-VPN vergleichen. Wofür welches?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nIPsec: Schicht 3, kompletter IP-Traffic, Site-to-Site, komplexer, NAT-Probleme möglich. Protokolle: ESP, AH, IKE.\nSSL-VPN: Schicht 4-7, Port 443 (Firewall-freundlich), Remote Access, einfacher, auch Clientless.\nIPsec: Standortvernetzung. SSL-VPN: Homeoffice, BYOD.",
            },
            { type: "heading", value: "Beispiel 1: Standortkopplung per IPsec" },
            {
              type: "code",
              value:
                "Zentrale Lüneburg          Filiale Hamburg\nLAN 10.0.0.0/16            LAN 10.20.0.0/16\nGateway: fw-lg             Gateway: fw-hh\n   └────── IPsec-Tunnel (Tunnel-Modus) ──────┘\nPhase 1: IKEv2, Zertifikate, AES-256, SHA-256\nPhase 2: 10.0.0.0/16 <-> 10.20.0.0/16\nErgebnis: Drucker, Freigaben und ERP der Zentrale\nsind in der Filiale erreichbar, als wäre es ein Netz.",
            },
            { type: "heading", value: "Beispiel 2: Ablauf einer Homeoffice-Einwahl" },
            {
              type: "list",
              value: [
                "Mitarbeiterin startet den VPN-Client auf dem Firmen-Notebook",
                "Authentifizierung: Benutzerzertifikat + Passwort + MFA-App",
                "Gateway prüft Compliance (aktueller Virenschutz? Patchstand?)",
                "Client erhält IP aus dem VPN-Pool 10.99.0.0/24",
                "Firewall-Regeln erlauben dem Pool nur definierte Ziele (Terminalserver, Intranet) – kein Vollzugriff aufs ganze LAN",
                "Logout oder Inaktivität trennt die Sitzung; alles wird im SIEM protokolliert",
              ],
            },
          ],
          quiz: [
            {
              id: "imp_lf11-vp-1_0",
              q: "IPsec Phase 1 dient?",
              options: [
                "Datenübertragung",
                "Kompression",
                "Authentifizierung und Schlüsselaustausch",
                "Logging",
              ],
              correct: 2,
              explain: "Phase 1 (IKE) = Authentifizierung + Schlüsselaustausch.",
            },
            {
              id: "imp_lf11-vp-1_1",
              q: "SIEM Hauptzweck?",
              options: [
                "Regelmäßige Backups aller Server erstellen",
                "Software zentral auf Clients verteilen",
                "Den Netzwerkverkehr priorisieren und beschleunigen",
                "Sicherheitsereignisse sammeln und korrelieren",
              ],
              correct: 3,
              explain:
                "SIEM sammelt und korreliert Logs aus verschiedenen Quellen zur Angriffserkennung.",
            },
            {
              id: "imp_lf11-vp-1_2",
              q: "IPsec: ESP vs. AH?",
              options: [
                "AH = verschlüsselt Nutzdaten, ESP = prüft nur Header",
                "ESP = nur Authentifizierung ohne Verschlüsselung",
                "ESP = Verschlüsselung + Auth, AH = nur Authentifizierung",
                "Beide Protokolle leisten exakt denselben Schutz",
              ],
              correct: 2,
              explain:
                "ESP: Encapsulating Security Payload (verschlüsselt). AH: Authentication Header (nur Integrität).",
            },
            {
              id: "imp_lf11-vp-1_3",
              q: "Site-to-Site VPN?",
              options: [
                "Einzelner User",
                "Zwei Standorte permanent verbunden",
                "Nur temporär",
                "Nur mobil",
              ],
              correct: 1,
              explain: "Permanente verschlüsselte Verbindung zwischen zwei Standorten.",
            },
            {
              id: "imp_lf11-vp-1_4",
              q: "SSL-VPN Vorteil?",
              options: [
                "Läuft nativ nur auf Windows-Clients mit Admin-Rechten",
                "Überträgt Daten unverschlüsselt und ist dadurch schneller",
                "Ist stets kostenlos, da keine Lizenzen benötigt werden",
                "Funktioniert über HTTPS (Port 443) und kommt so durch die meisten Firewalls",
              ],
              correct: 3,
              explain:
                "Port 443 ist fast überall offen – SSL-VPN funktioniert auch aus Hotels und Gastnetzen.",
            },
            {
              id: "imp_lf11-vp-1_5",
              q: "Was zeichnet WireGuard gegenüber klassischen VPN-Protokollen aus?",
              options: [
                "Nur Windows",
                "Kostenlos",
                "Älteste Lösung",
                "Wenig Code, schnell, modern",
              ],
              correct: 3,
              explain: "WireGuard: ~4000 Zeilen Code vs. OpenVPN ~100.000. Schneller, einfacher.",
            },
            {
              id: "imp_lf11-vp-1_6",
              q: "Always-On-VPN?",
              options: ["Nur mobil", "Manuell", "Nur Büro", "Automatisch bei Start"],
              correct: 3,
              explain: "Permanent.",
            },
            {
              id: "imp_lf11-vp-1_7",
              q: "Split-Tunnel-Risiko?",
              options: ["Traffic umgeht Firmen-Security", "Kosten", "Langsameres VPN", "Keins"],
              correct: 0,
              explain: "Privat = direkt.",
            },
            {
              id: "imp_lf11-vp-1_8",
              q: "IKEv2 Vorteil?",
              options: [
                "Langsamer",
                "Veraltet",
                "Nur Linux",
                "Schneller Reconnect bei Netzwechsel",
              ],
              correct: 3,
              explain: "Ideal für Mobile.",
            },
            {
              id: "imp_lf11-vp-1_9",
              q: "Homeoffice-VPN?",
              options: ["Keins", "Remote Access", "Site-to-Site", "PPTP"],
              correct: 1,
              explain: "Einzelne MA.",
            },
            {
              id: "imp_lf11-vp-1_10",
              q: "Welche Aufgabe hat IKE beim IPsec-VPN?",
              options: [
                "Komprimierung der Nutzdaten vor der Verschlüsselung, um die benötigte Bandbreite im Tunnel zu reduzieren",
                "Filterung unerwünschter Webseiten und Inhalte für alle Clients, die den VPN-Tunnel verwenden",
                "Vergabe von IP-Adressen an die VPN-Clients per DHCP, sobald der Tunnel vollständig aufgebaut wurde",
                "Aushandlung der Sicherheitsparameter und Schlüssel (Phase 1 und 2), bevor Nutzdaten fließen",
              ],
              correct: 3,
              explain:
                "Internet Key Exchange baut zuerst einen sicheren Verhandlungskanal auf (Phase 1) und vereinbart dann die Tunnel für die Nutzdaten (Phase 2).",
            },
            {
              id: "imp_lf11-vp-1_11",
              q: "Worin unterscheidet sich der Tunnel- vom Transport-Modus bei IPsec?",
              options: [
                "Es gibt keinen technischen Unterschied; beide Modi bezeichnen dieselbe Betriebsart von IPsec",
                "Der Tunnel-Modus ist ausschließlich für WLAN-Verbindungen vorgesehen und im LAN nicht nutzbar",
                "Tunnel-Modus verschlüsselt das komplette IP-Paket samt Original-Header, Transport-Modus nur die Nutzlast",
                "Der Transport-Modus überträgt sämtliche Daten grundsätzlich unverschlüsselt im Klartext",
              ],
              correct: 2,
              explain:
                "Site-to-Site-VPNs nutzen den Tunnel-Modus: Die internen Adressen beider Standorte bleiben nach außen unsichtbar.",
            },
            {
              id: "imp_lf11-vp-1_12",
              q: "Wann wählt man ein Site-to-Site-VPN, wann Remote-Access?",
              options: [
                "Site-to-Site koppelt ganze Standorte dauerhaft; Remote-Access verbindet einzelne Endgeräte (Homeoffice) bei Bedarf",
                "Site-to-Site funktioniert ausschließlich über Glasfaserleitungen, Remote-Access nur über Kupfer",
                "Beide Varianten sind technisch identisch und unterscheiden sich nur im Produktnamen",
                "Remote-Access koppelt ganze Rechenzentren, Site-to-Site verbindet einzelne Laptops im Homeoffice",
              ],
              correct: 0,
              explain:
                "Filiale ↔ Zentrale = Site-to-Site zwischen den Gateways (für Nutzer transparent); Außendienst-Notebook = Remote-Access mit VPN-Client.",
            },
            {
              id: "imp_lf11-vp-1_13",
              q: "Was zeichnet WireGuard gegenüber klassischem IPsec/OpenVPN aus?",
              options: [
                "Es verzichtet vollständig auf Verschlüsselung und erreicht dadurch höhere Übertragungsraten",
                "Es funktioniert ausschließlich unter Windows und ist auf anderen Plattformen nicht verfügbar",
                "Sehr schlanke Codebasis, moderne Kryptografie, einfache Konfiguration über Schlüsselpaare",
                "Es benötigt zwingend dedizierte Hardware-Appliances des Herstellers an beiden Tunnelenden",
              ],
              correct: 2,
              explain:
                "WireGuard arbeitet mit festen, modernen Verfahren und Public-Key-Paaren je Peer – weniger Konfigurationsfehler, gute Performance.",
            },
            {
              id: "imp_lf11-vp-1_14",
              q: "Welchen Vorteil bieten Zertifikate gegenüber einem Pre-Shared Key bei der VPN-Authentifizierung?",
              options: [
                "Zertifikate sind kürzer und leichter zu merken",
                "Zertifikate brauchen kein Ablaufdatum",
                "PSKs sind grundsätzlich verboten",
                "Individuelle Identitäten, die einzeln zurückgezogen werden können",
              ],
              correct: 3,
              explain:
                "Ein PSK ist ein geteiltes Geheimnis für alle. Verlässt ein Mitarbeiter die Firma, wird sein Zertifikat gesperrt; ein kompromittierter PSK erzwingt die Umstellung aller Gegenstellen.",
            },
            {
              id: "imp_lf11-vp-1_15",
              q: "Was bedeutet Split Tunneling?",
              options: [
                "Der VPN-Tunnel wird zur Lastverteilung auf zwei verschiedene Internet-Provider gleichzeitig aufgeteilt",
                "Die VPN-Verbindung wird aus Sicherheitsgründen stündlich getrennt und automatisch neu aufgebaut",
                "Nur der Verkehr ins Firmennetz läuft durch den Tunnel, normales Surfen geht direkt ins Internet",
                "Zwei Benutzer teilen sich einen gemeinsamen Tunnel, um Lizenzkosten für VPN-Clients zu sparen",
              ],
              correct: 2,
              explain:
                "Entlastet das Firmen-Gateway, umgeht aber dessen Sicherheitsfilter für den Internetverkehr – eine bewusste Abwägung der Security-Policy.",
            },
            {
              id: "imp_lf11-vp-1_16",
              q: "Warum sollte der VPN-Zugang ins Firmennetz mit MFA abgesichert werden?",
              options: [
                "Ein gestohlenes Passwort allein genügt dann nicht mehr für den Zugriff von außen",
                "MFA beschleunigt den Verbindungsaufbau durch zwischengespeicherte Tokens",
                "Nur wegen der Optik im Audit – einen Sicherheitsgewinn bringt MFA nicht",
                "MFA ersetzt die Tunnelverschlüsselung und spart dadurch Rechenleistung",
              ],
              correct: 0,
              explain:
                "VPN-Zugänge sind exponiert und beliebtes Angriffsziel (Phishing, Credential Stuffing); der zweite Faktor stoppt reine Passwort-Diebstähle.",
            },
            {
              id: "imp_lf11-vp-1_17",
              q: "Welche Aufgabe übernimmt ein SIEM im Zusammenspiel mit VPN und Firewall?",
              options: [
                "Es verteilt IP-Adressen dynamisch an VPN-Clients und dokumentiert die Zuordnung",
                "Es sammelt und korreliert Logs verschiedener Systeme, um Angriffsmuster zu erkennen und zu alarmieren",
                "Es baut die VPN-Tunnel zwischen den Standorten auf und verwaltet deren Schlüsselmaterial",
                "Es ersetzt die Firewall vollständig, da beide Systeme dieselben Filterfunktionen bieten",
              ],
              correct: 1,
              explain:
                "Beispiel-Korrelation: VPN-Login aus dem Ausland + gleichzeitige Badge-Buchung im Gebäude = Alarm 'Impossible Travel'.",
            },
            {
              id: "imp_lf11-vp-1_18",
              q: "Über welchen Standard-Port läuft OpenVPN typischerweise?",
              options: ["UDP 1194", "TCP 3389", "UDP 53 ausschließlich", "TCP 21"],
              correct: 0,
              explain:
                "Standard ist UDP 1194; alternativ TCP 443, um restriktive Netze zu passieren (sieht aus wie HTTPS). 3389 ist RDP, 21 FTP.",
            },
            {
              id: "imp_lf11-vp-1_19",
              q: "Eine Filiale meldet: Tunnel steht laut Firewall, aber kein Zugriff auf Server der Zentrale. Was prüft man zuerst sinnvoll?",
              options: [
                "Den Tonerstand des Druckers in der Filiale, um Folgestörungen auszuschließen",
                "Das WLAN-Passwort der Filiale, da es die Tunnelfreigabe steuert",
                "Die Tastatur des Anwenders auf klemmende Tasten und Belegungsfehler",
                "Phase-2-Netzdefinitionen/Routen und Firewall-Regeln für den Tunnelverkehr",
              ],
              correct: 3,
              explain:
                "Klassiker: Tunnel (Phase 1) steht, aber die verschlüsselten Netze in Phase 2 stimmen nicht überein oder eine Regel blockiert den Verkehr durch den Tunnel.",
            },
          ],
        },
      ],
    },
    {
      id: "lf11-reg",
      title: "Regulierung & Compliance",
      lessons: [
        {
          id: "lf11-nis-1",
          title: "NIS-2 Richtlinie & IT-Compliance",
          content: [
            { type: "heading", value: "NIS-2: EU-weite Cybersecurity-Pflichten" },
            {
              type: "text",
              value:
                "NIS-2 (Network and Information Security Directive 2) ist die EU-Richtlinie für Cybersicherheit, seit Oktober 2024 in nationales Recht umzusetzen. Sie ersetzt die NIS-1-Richtlinie und erweitert den Geltungsbereich massiv: Statt nur kritischer Infrastruktur (KRITIS) sind jetzt auch mittlere und große Unternehmen in 18 Sektoren betroffen, darunter IT-Dienstleister, Cloud-Anbieter, Rechenzentren und Managed Service Provider.",
            },
            { type: "heading", value: "Wer ist betroffen?" },
            {
              type: "text",
              value:
                "Wesentliche Einrichtungen (Essential): Energie, Verkehr, Gesundheit, Wasser, digitale Infrastruktur, öffentliche Verwaltung, Weltraum. Wichtige Einrichtungen (Important): Post, Abfallwirtschaft, Lebensmittel, Chemie, Forschung, digitale Dienste, verarbeitendes Gewerbe. Schwellenwerte: Ab 50 Mitarbeitern ODER 10 Mio. EUR Umsatz. IT-Dienstleister und MSPs sind unabhängig von der Größe oft betroffen (Sonderregelung für digitale Infrastruktur).",
            },
            { type: "heading", value: "Pflichten für Unternehmen" },
            {
              type: "text",
              value:
                "Risikomanagement: Technische und organisatorische Maßnahmen nach Stand der Technik (Verschlüsselung, Zugriffskontrollen, Backup, Incident Response). Meldepflicht: Erhebliche Sicherheitsvorfälle innerhalb von 24 Stunden Erstmeldung an zuständige Behörde (BSI in Deutschland), innerhalb von 72 Stunden detaillierte Folgemeldung, innerhalb von 1 Monat Abschlussbericht. Lieferkettensicherheit: Sicherheitsanforderungen an Zulieferer und Dienstleister vertraglich festlegen. Geschäftsführerhaftung: Geschäftsführer und Vorstände haften persönlich für die Umsetzung und können nicht delegieren.",
            },
            { type: "heading", value: "NIS-2 vs. DSGVO vs. BSI IT-Grundschutz" },
            {
              type: "text",
              value:
                "DSGVO: Schutz personenbezogener DATEN, Bußgelder bis 20 Mio. EUR / 4% Umsatz. NIS-2: Schutz von IT-SYSTEMEN und -DIENSTEN, Bußgelder bis 10 Mio. EUR bzw. 2 % Umsatz (wesentliche Einrichtungen; wichtige: bis 7 Mio. EUR bzw. 1,4 %). BSI IT-Grundschutz: Deutsches Framework, kein Gesetz, aber anerkannte Methodik zur Umsetzung der NIS-2-Anforderungen. ISO 27001: Internationale Norm für ISMS, Zertifizierung hilft bei NIS-2-Compliance-Nachweis.",
            },
            { type: "heading", value: "Relevanz für FiSi" },
            {
              type: "text",
              value:
                "Als IT-Dienstleister bist du doppelt betroffen: Eigene Compliance sicherstellen UND Kunden bei deren NIS-2-Umsetzung beraten. Typische Aufgaben: Sicherheitskonzepte erstellen, Incident-Response-Pläne aufbauen, Backup-Strategien prüfen, Patch-Management etablieren, Lieferantenverträge um Sicherheitsklauseln ergänzen, Meldeprozesse implementieren.",
            },
            {
              type: "note",
              value:
                "NIS-2 wird zunehmend in IHK-Prüfungen relevant. Die Kombination NIS-2 + DSGVO + BSI-Grundschutz ist ein typisches Prüfungsszenario: Welche Pflichten hat ein Unternehmen, welche Maßnahmen sind nötig, wer haftet?",
            },
            { type: "heading", value: "Compliance und Governance" },
            {
              type: "text",
              value:
                "Compliance: Regelkonformes Verhalten – Einhaltung aller Gesetze, Normen und internen Richtlinien (DSGVO, NIS-2, BSI-Grundschutz, ISO 27001). Bei Nichteinhaltung: Bußgelder, Haftung, Reputationsschaden. Governance: Organisations- und Regelsystem zur Steuerung und Kontrolle des Unternehmens. IT-Governance: IT-Strategie an Unternehmenszielen ausrichten, Risiken managen, Ressourcen effizient nutzen. Compliance ist PFLICHT (Gesetze einhalten), Governance ist STEUERUNG (Unternehmensziele erreichen).",
            },
            { type: "heading", value: "Übungsaufgabe 1: NIS-2 Betroffenheit" },
            {
              type: "text",
              value:
                "IT-Systemhaus, 60 MA, 12 Mio. EUR, betreut Krankenhäuser und Stadtwerke. NIS-2 betroffen?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nJa: >50 MA und >10 Mio. Umsatz (Schwellenwert). IT-DL für KRITIS-Kunden → 'wichtige Einrichtung'. Lieferketten-Regelung: Kunden fordern NIS-2-Konformität.\nPflichten: Risikomanagement, GF-Haftung (persönlich!), Incident Response 24h/72h.",
            },
            { type: "heading", value: "Übungsaufgabe 2: IT-Compliance" },
            { type: "text", value: "5 wichtige IT-Compliance-Vorgaben für FiSi mit Kernaussage." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. DSGVO: Personenbezogene Daten schützen, 72h Meldepflicht.\n2. NIS-2: IT-Sicherheit für wichtige Einrichtungen, GF-Haftung.\n3. BSI IT-Grundschutz: Methodik für Sicherheitskonzepte.\n4. GoBD: Ordnungsmäßige IT-Buchführung, Aufbewahrung: Bücher/Abschlüsse 10 Jahre, Buchungsbelege 8 Jahre (seit 2025).\n5. KRITIS-VO: Kritische Infrastrukturen müssen Sicherheit nachweisen.\nZusätzlich: ISO 27001, PCI-DSS, TISAX.",
            },
            { type: "heading", value: "Beispiel 1: Betroffenheitsprüfung eines Mittelständlers" },
            {
              type: "text",
              value:
                "Die Muster Maschinenbau GmbH hat 180 Mitarbeiter und 35 Mio. € Umsatz. Maschinenbau zählt zum Sektor 'verarbeitendes Gewerbe' (Anhang II) → als mittleres/großes Unternehmen ist sie 'wichtige Einrichtung'. Folgen: Registrierung beim BSI, Risikomanagement nach Art. 21, Meldewege einrichten, Geschäftsführung schulen, Lieferanten (z. B. den IT-Dienstleister mit Fernwartungszugang!) vertraglich einbinden. Genau hier kommen wir als JTL-/IT-Dienstleister ins Spiel: Kunden fordern zunehmend Sicherheitsnachweise von uns.",
            },
            { type: "heading", value: "Beispiel 2: Meldeprozess nach einem Ransomware-Vorfall" },
            {
              type: "list",
              value: [
                "Tag 0, 06:30: Verschlüsselte Server entdeckt – Incident-Response-Plan aktiviert, Systeme isoliert",
                "Binnen 24 h: Frühwarnung an das BSI (Verdacht, mutmaßliche Ursache, Auswirkungen)",
                "Binnen 72 h: ausführliche Meldung (Bewertung, Schweregrad, Indikatoren)",
                "Parallel: DSGVO-Prüfung – sind personenbezogene Daten betroffen? Dann zusätzlich Meldung an die Datenschutzbehörde binnen 72 h",
                "Nach Abschluss: Abschlussbericht und Lessons Learned, Maßnahmen nachschärfen",
              ],
            },
          ],
          quiz: [
            {
              id: "imp_lf11-nis-1_0",
              q: "NIS-2 Erstmeldung: Frist?",
              options: ["1 Woche", "72 Stunden", "24 Stunden", "Sofort"],
              correct: 2,
              explain: "Erstmeldung innerhalb 24h, Folgemeldung 72h, Abschlussbericht 1 Monat.",
            },
            {
              id: "imp_lf11-nis-1_1",
              q: "NIS-2 Schwellenwert?",
              options: [
                "Nur DAX-Konzerne",
                "Ab 50 MA oder 10 Mio. EUR Umsatz",
                "Alle Firmen",
                "Nur KRITIS",
              ],
              correct: 1,
              explain:
                "Ab 50 Mitarbeitern oder 10 Mio. Umsatz (plus Sonderregeln für IT-Infrastruktur).",
            },
            {
              id: "imp_lf11-nis-1_2",
              q: "NIS-2 Bußgeld max.?",
              options: ["Keine Bußgelder", "1 Mio.", "20 Mio. EUR", "10 Mio. EUR / 2% Umsatz"],
              correct: 3,
              explain: "Bis 10 Mio. EUR oder 2% des weltweiten Jahresumsatzes.",
            },
            {
              id: "imp_lf11-nis-1_3",
              q: "Geschäftsführerhaftung NIS-2?",
              options: [
                "Keine",
                "Nur IT-Leiter",
                "Nur bei Vorsatz",
                "Persönliche Haftung, nicht delegierbar",
              ],
              correct: 3,
              explain: "GF/Vorstände haften persönlich für Cybersicherheit.",
            },
            {
              id: "imp_lf11-nis-1_4",
              q: "NIS-2 vs. DSGVO: Schutzgegenstand?",
              options: [
                "NIS-2 = IT-Systeme, DSGVO = personenbezogene Daten",
                "Beide schützen denselben Gegenstand auf EU-Ebene",
                "NIS-2 = personenbezogene Daten natürlicher Personen",
                "DSGVO = kritische IT-Systeme und deren Verfügbarkeit",
              ],
              correct: 0,
              explain: "NIS-2 schützt Systeme/Dienste, DSGVO schützt personenbezogene Daten.",
            },
            {
              id: "imp_lf11-nis-1_5",
              q: "Lieferkettensicherheit NIS-2?",
              options: [
                "Betrifft ausschließlich Hardware-Hersteller selbst",
                "Gilt ausschließlich für KRITIS-Betreiber im Energiesektor",
                "Sicherheitsanforderungen vertraglich an Zulieferer",
                "Eine freiwillige Empfehlung ohne rechtliche Verbindlichkeit",
              ],
              correct: 2,
              explain: "Unternehmen müssen Sicherheit in der gesamten Lieferkette sicherstellen.",
            },
            {
              id: "imp_lf11-nis-1_6",
              q: "NIS-2 Sektoren?",
              options: [
                "18 Sektoren inkl. IT-Dienstleister und Cloud",
                "Nur Behörden",
                "Nur Energie",
                "Nur Gesundheit",
              ],
              correct: 0,
              explain: "18 Sektoren: Energie, Verkehr, Gesundheit, IT, Cloud, MSP etc.",
            },
            {
              id: "imp_lf11-nis-1_7",
              q: "FiSi und NIS-2?",
              options: [
                "Nur intern",
                "Eigene Compliance + Kunden beraten",
                "Nicht relevant",
                "Nur Kunden beraten",
              ],
              correct: 1,
              explain: "IT-Dienstleister sind selbst betroffen UND beraten Kunden.",
            },
            {
              id: "imp_lf11-nis-1_8",
              q: "Folgemeldung NIS-2: Frist?",
              options: ["72 Stunden", "1 Woche", "48h", "24h"],
              correct: 0,
              explain: "72 Stunden für den detaillierten Bericht.",
            },
            {
              id: "imp_lf11-nis-1_9",
              q: "ISO 27001 und NIS-2?",
              options: [
                "Nur für Cloud",
                "Ist Pflicht",
                "Hilft beim Compliance-Nachweis",
                "Ersetzt NIS-2",
              ],
              correct: 2,
              explain: "ISO 27001 Zertifizierung erleichtert den NIS-2-Nachweis.",
            },
            {
              id: "imp_lf11-nis-1_10",
              q: "Was ist das Ziel der NIS-2-Richtlinie?",
              options: [
                "Ein EU-weit einheitlich hohes Cybersicherheitsniveau für wichtige Sektoren",
                "Die einheitliche Alterskennzeichnung und Regulierung von Computerspielen",
                "Die schrittweise Ablösung und Abschaffung der DSGVO bis 2030",
                "Ein EU-weites Verbot öffentlicher Cloud-Dienste für kritische Sektoren",
              ],
              correct: 0,
              explain:
                "NIS-2 erweitert die erste NIS-Richtlinie deutlich: mehr Sektoren, konkretere Pflichten, schärfere Sanktionen.",
            },
            {
              id: "imp_lf11-nis-1_11",
              q: "Wie werden betroffene Unternehmen unter NIS-2 grundsätzlich eingeteilt?",
              options: [
                "In gute und schlechte Unternehmen anhand der Ergebnisse externer Sicherheitsaudits",
                "Nach dem aktuellen Aktienkurs und der Marktkapitalisierung an der Börse",
                "Nach der Anzahl der im Unternehmen betriebenen Drucker und Multifunktionsgeräte",
                "In wesentliche und wichtige Einrichtungen, abhängig von Sektor und Unternehmensgröße",
              ],
              correct: 3,
              explain:
                "Wesentliche Einrichtungen (z. B. Energie, Gesundheit) unterliegen strengerer Aufsicht; wichtige Einrichtungen (z. B. produzierendes Gewerbe) etwas milderen Regeln.",
            },
            {
              id: "imp_lf11-nis-1_12",
              q: "Welche Größenkriterien spielen für die NIS-2-Betroffenheit eine zentrale Rolle?",
              options: [
                "Die Anzahl der Firmenwagen und die Größe des Fuhrparks am Hauptstandort",
                "Betroffen sind ausschließlich Großkonzerne ab 100.000 Mitarbeitern weltweit",
                "In der Regel ab 50 Mitarbeitern oder 10 Mio. € Jahresumsatz in einem erfassten Sektor",
                "Jedes Unternehmen ab dem ersten Mitarbeiter, unabhängig von Umsatz und Sektor",
              ],
              correct: 2,
              explain:
                "Die 'Size-Cap'-Regel erfasst mittlere und große Unternehmen der gelisteten Sektoren; einige kritische Anbieter sind größenunabhängig betroffen.",
            },
            {
              id: "imp_lf11-nis-1_13",
              q: "Welche Meldefristen sieht NIS-2 bei erheblichen Sicherheitsvorfällen vor?",
              options: [
                "Meldungen erfolgen rein freiwillig und liegen im Ermessen der Geschäftsführung",
                "Frühwarnung binnen 24 Stunden, ausführlichere Meldung binnen 72 Stunden an die zuständige Behörde",
                "Für die Erstmeldung stehen 30 Kalendertage ab Entdeckung des Vorfalls zur Verfügung",
                "Eine gesammelte Jahresmeldung aller Vorfälle an die Behörde ist ausreichend",
              ],
              correct: 1,
              explain:
                "Gestufte Meldung: 24 h Frühwarnung, 72 h Bewertung, Abschlussbericht – in Deutschland an das BSI.",
            },
            {
              id: "imp_lf11-nis-1_14",
              q: "Welche Verantwortung trifft die Geschäftsleitung unter NIS-2?",
              options: [
                "Keine – Cybersicherheit liegt allein bei der IT-Abteilung, die Geschäftsleitung muss nicht eingebunden werden",
                "Sie muss sämtliche technischen Maßnahmen wie Firewall- und Serverkonfiguration eigenhändig umsetzen",
                "Sie muss lediglich die Rechnungen für Sicherheitsprodukte freigeben, weitere Pflichten bestehen nicht",
                "Sie muss Risikomanagement-Maßnahmen billigen und überwachen, sich schulen lassen und haftet bei Verstößen persönlich",
              ],
              correct: 3,
              explain:
                "NIS-2 verankert Cybersicherheit als Chefsache: Billigung, Überwachung, Schulungspflicht und Haftung der Leitungsorgane.",
            },
            {
              id: "imp_lf11-nis-1_15",
              q: "Welche Maßnahmenbereiche verlangt NIS-2 mindestens (Auswahl)?",
              options: [
                "Lediglich den Abschluss einer Cyberversicherung, die alle Schäden aus Sicherheitsvorfällen finanziell abdeckt",
                "Risikoanalyse, Incident-Management, Backup- und Krisenmanagement, Lieferkettensicherheit, Verschlüsselung, MFA",
                "Ausschließlich jährliche Mitarbeiterschulungen zur Sensibilisierung, weitere technische Maßnahmen sind optional",
                "Nur den Betrieb eines aktuellen Virenscanners auf allen Endgeräten als einzige verpflichtende Maßnahme",
              ],
              correct: 1,
              explain:
                "Artikel 21 nennt einen Mindestkatalog technischer und organisatorischer Maßnahmen nach Stand der Technik – inklusive Bewertung der Wirksamkeit.",
            },
            {
              id: "imp_lf11-nis-1_16",
              q: "Warum gehört die Lieferkette ausdrücklich zu den NIS-2-Pflichten?",
              options: [
                "Angriffe erfolgen oft über Dienstleister und Zulieferer",
                "Lieferanten sind grundsätzlich unsicher",
                "Nur Logistikfirmen sind betroffen",
                "Es geht um die Qualität der gelieferten Hardware-Verpackung",
              ],
              correct: 0,
              explain:
                "Deren Sicherheit muss bewertet und vertraglich geregelt werden. Supply-Chain-Angriffe (kompromittierte Software-Updates, Fernwartungszugänge) treffen das Unternehmen über Dritte – daher Prüf- und Vertragspflichten.",
            },
            {
              id: "imp_lf11-nis-1_17",
              q: "Worin unterscheidet sich eine EU-Richtlinie wie NIS-2 von einer EU-Verordnung wie der DSGVO?",
              options: [
                "Eine Richtlinie muss erst in nationales Recht umgesetzt werden, eine Verordnung gilt unmittelbar",
                "Verordnungen gelten ausschließlich für Behörden, Richtlinien nur für private Unternehmen",
                "Eine Richtlinie ist eine unverbindliche Empfehlung, deren Nichtumsetzung keinerlei Folgen hat",
                "Es gibt keinen Unterschied, beide Rechtsakte wirken in den Mitgliedstaaten auf identische Weise",
              ],
              correct: 0,
              explain:
                "Deshalb gibt es in Deutschland ein NIS-2-Umsetzungsgesetz; die DSGVO galt dagegen ab Stichtag direkt in allen Mitgliedstaaten.",
            },
            {
              id: "imp_lf11-nis-1_18",
              q: "Welche Behörde ist in Deutschland zentrale Melde- und Aufsichtsstelle für NIS-2?",
              options: [
                "Die Bundesnetzagentur allein, da sie alle Netze reguliert",
                "Das örtlich zuständige Finanzamt des Unternehmens",
                "Das BSI (Bundesamt für Sicherheit in der Informationstechnik)",
                "Der TÜV als akkreditierte Zertifizierungsstelle",
              ],
              correct: 2,
              explain:
                "Das BSI nimmt Meldungen entgegen, registriert betroffene Einrichtungen und kann Nachweise und Audits verlangen.",
            },
            {
              id: "imp_lf11-nis-1_19",
              q: "Welche Sanktionen drohen wesentlichen Einrichtungen bei NIS-2-Verstößen maximal?",
              options: [
                "Lediglich eine formlose Verwarnung ohne finanzielle Folgen",
                "Der Entzug der Internetanbindung für die Dauer einer Woche",
                "Ein Verwarnungsgeld von maximal 500 € je festgestelltem Verstoß",
                "Bußgelder bis zu 10 Mio. € oder 2 % des weltweiten Jahresumsatzes",
              ],
              correct: 3,
              explain:
                "Für wichtige Einrichtungen gelten bis zu 7 Mio. € bzw. 1,4 % – die Größenordnung ähnelt bewusst der DSGVO, um Verbindlichkeit zu schaffen.",
            },
          ],
        },
      ],
    },
  ],
};
