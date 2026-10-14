"use strict";
window.MP_AP2GA2 = {
  kurz: "AP2 GA2",
  titel: "Musterprüfung – FISI AP Teil 2, Bereich 2: Analyse und Entwicklung von Netzwerken",
  untertitel:
    "90 Minuten · 132 Punkte · 5 Aufgaben mit durchgehendem Szenario · sortenrein für den zweiten berufsspezifischen Prüfungsbereich",
  zeit: 90,
  situation:
    "Das Berufskolleg Westfalenring (3 Gebäude A/B/C auf einem Campus, 90 Lehrkräfte, 1.400 Schülerinnen und Schüler) bekommt ein neues Campus-Netz: strukturierte Verkabelung, VLAN-Konzept, WLAN in allen Gebäuden, zentrale Firewall mit Internetzugang und ein Site-to-Site-VPN zum Schulträger. Du planst, analysierst und dokumentierst das Netzwerk.",
  aufgaben: [
    {
      t: "Aufgabe 1: Adressplanung mit VLSM & IPv6 (28 Punkte)",
      intro:
        "Zur Verfügung steht 10.20.0.0/16. Benötigt: Schüler-Netz 2.000 Hosts, Lehrkräfte 500 Hosts, Verwaltung 120 Hosts, Server 40 Hosts, Management (Switches/APs) 30 Hosts.",
      teile: [
        {
          k: "1.1",
          frage:
            "Vergib per VLSM passende Subnetze (größter Bedarf zuerst, lückenlos ab 10.20.0.0). Trage Netzadresse/Präfix und nutzbare Hosts ein.",
          punkte: 12,
          tabelle: {
            kopf: ["Bereich", "Netzadresse/Präfix", "Nutzbare Hosts"],
            zeilen: [
              ["Schüler (2.000)", null, null],
              ["Lehrkräfte (500)", null, null],
              ["Verwaltung (120)", null, null],
              ["Server (40)", null, null],
              ["Management (30)", null, null],
            ],
            check: [
              "10.20.0.0/21|10.20.0.0 /21",
              "2046",
              "10.20.8.0/23|10.20.8.0 /23",
              "510",
              "10.20.10.0/25|10.20.10.0 /25",
              "126",
              "10.20.10.128/26|10.20.10.128 /26",
              "62",
              "10.20.10.192/27|10.20.10.192 /27",
              "30",
            ],
          },
          loesung:
            "2.000 → 2¹¹−2 = 2.046 → /21: 10.20.0.0/21 (bis 10.20.7.255). 500 → 2⁹−2 = 510 → /23: 10.20.8.0/23 (bis 10.20.9.255). 120 → 2⁷−2 = 126 → /25: 10.20.10.0/25. 40 → 2⁶−2 = 62 → /26: 10.20.10.128/26. 30 → 2⁵−2 = 30 → /27: 10.20.10.192/27.\nBewertung: je Zeile 2 P + 2 P für lückenlose, überlappungsfreie Vergabe. Merkregel: Immer größtes Netz zuerst, dann bleibt alles an Zweierpotenz-Grenzen ausgerichtet.",
        },
        {
          k: "1.2",
          frage:
            "Das Schülernetz soll später auf zwei Gebäude aufgeteilt werden (je ≈ 1.000 Hosts). Zeige, wie 10.20.0.0/21 dafür sauber geteilt wird, und nenne die beiden neuen Netze.",
          punkte: 4,
          zeilen: 3,
          loesung:
            "Ein /21 zerfällt in zwei /22 mit je 2¹⁰−2 = 1.022 Hosts: 10.20.0.0/22 und 10.20.4.0/22 – genug für je ≈ 1.000 Hosts.\nBewertung: Präfixlogik 2 P, beide Netze korrekt 2 P.",
        },
        {
          k: "1.3",
          frage:
            "Begründe in zwei Sätzen, warum Schüler-, Lehrkräfte- und Verwaltungsnetz getrennte Subnetze/VLANs sein müssen (ein technischer, ein organisatorisch-rechtlicher Grund).",
          punkte: 4,
          zeilen: 3,
          loesung:
            "Technisch: getrennte Broadcast-Domänen und gezielte Zugriffskontrolle am Layer-3-Übergang (Firewall/ACL) – Schüler erreichen Verwaltungssysteme gar nicht erst. Organisatorisch-rechtlich: Verwaltungsdaten (Noten, personenbezogene Daten) erfordern Schutz nach DSGVO – Netztrennung ist eine anerkannte technisch-organisatorische Maßnahme.\nBewertung: je Grund 2 P.",
        },
        {
          k: "1.4",
          frage:
            "Die Schule plant zusätzlich IPv6 im Dual-Stack-Betrieb. Zugewiesen ist das Präfix 2001:db8:5a00::/48.\na) Kürze die Adresse 2001:0db8:5a00:0001:0000:0000:0000:00c3 maximal.\nb) Wie viele /64-Subnetze stellt das /48-Präfix bereit? (Rechenweg)\nc) Erkläre in zwei Sätzen, wie sich Clients per SLAAC eine Adresse geben und welche Rolle Router Advertisements dabei spielen.",
          punkte: 8,
          zeilen: 6,
          loesung:
            "a) 2001:db8:5a00:1::c3 (führende Nullen weg, EINE längste Nullfolge als ::).\nb) 64 − 48 = 16 Bit für Subnetze → 2^16 = 65.536 /64-Netze.\nc) Der Router sendet Router Advertisements mit dem /64-Präfix; der Client bildet daraus selbstständig seine Adresse (Interface-Identifier per EUI-64 oder Privacy Extensions) und lernt zugleich das Gateway – ganz ohne DHCP-Server (zustandslos).",
        },
      ],
    },
    {
      t: "Aufgabe 2: Switching, VLANs & Redundanz (20 Punkte)",
      teile: [
        {
          k: "2.1",
          frage:
            "Zwischen den Gebäuden werden die Core-Switches ringförmig mit Glasfaser verbunden. Welches Protokoll verhindert die entstehende Schleifenproblematik, was würde OHNE es passieren (zwei Effekte), und wie heißt der ausgezeichnete zentrale Switch in diesem Protokoll?",
          punkte: 6,
          zeilen: 5,
          loesung:
            "Spanning Tree Protocol (STP, IEEE 802.1D bzw. Rapid STP 802.1w): blockiert redundante Pfade logisch und aktiviert sie erst im Fehlerfall. Ohne STP: Broadcast-Stürme (Frames kreisen endlos und fluten das Netz) und MAC-Tabellen-Flapping (Switches lernen dieselbe MAC ständig auf wechselnden Ports) – das Netz wird unbrauchbar. Der zentrale Switch ist die Root Bridge (Wahl über niedrigste Bridge-ID/Priorität).\nBewertung: STP 2 P, je Effekt 1,5 P, Root Bridge 1 P.",
        },
        {
          k: "2.2",
          frage:
            "Die Verbindung zwischen Core A und Core B soll VLAN 10 (Schüler), 20 (Lehrkräfte), 30 (Verwaltung) und 99 (Management) transportieren. Wie wird der Port konfiguriert (Fachbegriff + Standard), und worin unterscheidet er sich von einem Access-Port?",
          punkte: 6,
          zeilen: 4,
          loesung:
            "Als Trunk-Port (Tagged Port) nach IEEE 802.1Q: Jeder Frame erhält ein VLAN-Tag mit der VLAN-ID, so transportiert EINE Leitung mehrere VLANs. Ein Access-Port gehört genau EINEM VLAN und liefert Frames ungetaggt an das Endgerät – Endgeräte wissen nichts von VLANs.\nBewertung: Trunk/tagged 2 P, 802.1Q 2 P, Access-Abgrenzung 2 P.",
        },
        {
          k: "2.3",
          frage:
            "Im Gebäude C melden Nutzer sporadisch sehr langsame Verbindungen. Der Uplink-Port zeigt zunehmende „Late Collisions“ und CRC-Fehler. Nenne die wahrscheinlichste Ursache und die Behebung – und erkläre, warum an einem korrekt ausgehandelten Vollduplex-Port keine Kollisionen auftreten.",
          punkte: 8,
          zeilen: 6,
          loesung:
            "Klassischer Duplex-Mismatch: eine Seite fest auf Vollduplex, die Gegenseite auf Auto-Negotiation → fällt auf Halbduplex zurück. Behebung: beide Seiten auf Auto-Negotiation (oder beide identisch fest) stellen. Bei Vollduplex senden und empfangen beide Seiten gleichzeitig über getrennte Adernpaare, das Medium ist nicht mehr geteilt – CSMA/CD ist deaktiviert, Kollisionen sind physikalisch ausgeschlossen; deshalb sind „Late Collisions“ an einem Vollduplex-Port immer ein Alarmzeichen für Fehlkonfiguration.\nBewertung: Ursache 3 P, Behebung 2 P, Vollduplex-Erklärung 3 P.",
        },
      ],
    },
    {
      t: "Aufgabe 3: WLAN, Medienzugriff & Zugangskontrolle (26 Punkte)",
      teile: [
        {
          k: "3.1",
          frage:
            "Warum nutzt WLAN CSMA/CA statt CSMA/CD? Erkläre kurz das Hidden-Station-Problem und die Funktion von RTS/CTS.",
          punkte: 8,
          zeilen: 6,
          loesung:
            "Im Funk kann eine Station nicht gleichzeitig senden und zuverlässig mithören – Kollisionserkennung (CD) scheidet aus, also Vermeidung (CA): abhören, Interframe-Wartezeiten, zufälliger Backoff, Empfangsbestätigung per ACK. Hidden Station: Zwei Clients erreichen beide den Access Point, hören sich gegenseitig aber nicht – sie senden „aneinander vorbei“ und kollidieren am AP. RTS/CTS: Der Sender fragt mit Request to Send an, der AP antwortet für alle hörbar mit Clear to Send – auch versteckte Stationen schweigen dann für die angekündigte Dauer.\nBewertung: CA-Begründung 3 P, Hidden Station 3 P, RTS/CTS 2 P.",
        },
        {
          k: "3.2",
          frage:
            "Die 40 Access Points sollen zentral versorgt werden: je AP 13 W, dazu 12 IP-Kameras à 7 W am selben Switch-Stack. Reicht ein PoE-Budget von 450 W? Rechne und nenne den mindestens nötigen PoE-Standard für die APs.",
          punkte: 6,
          zeilen: 4,
          loesung:
            "Bedarf: 40 × 13 + 12 × 7 = 520 + 84 = 604 W > 450 W – das Budget reicht NICHT (Optionen: Switch mit größerem Budget, Verbraucher auf mehrere Switches verteilen, Netzteile aufrüsten). Standard: 802.3af garantiert am Endgerät nur 12,95 W (PSE-seitig 15,4 W, Rest Kabelverlust) – 13 W liegen darüber, daher ist 802.3at (PoE+, 25,5 W am Gerät) erforderlich.\nBewertung: Rechnung 3 P, Bewertung 1 P, Standard 2 P.",
        },
        {
          k: "3.3",
          frage:
            "Für die Anmeldung im Lehrkräfte-WLAN ist ein gemeinsamer PSK nicht akzeptabel. Beschreibe die bessere Lösung mit den drei beteiligten Komponenten und einem Vorteil gegenüber dem PSK.",
          punkte: 6,
          zeilen: 4,
          loesung:
            "WPA2/WPA3-Enterprise mit IEEE 802.1X: Supplicant (Client), Authenticator (Access Point) und Authentication Server (RADIUS, angebunden an das Verzeichnis/AD). Jede Person meldet sich individuell an (Konto oder Zertifikat). Vorteil: Einzelne Zugänge sind sofort zentral sperrbar (z. B. beim Ausscheiden), nachvollziehbar und ein kompromittierter Schlüssel zwingt nicht alle Geräte zum Wechsel.\nBewertung: 802.1X/Enterprise 2 P, drei Komponenten 3 P, Vorteil 1 P.",
        },
        {
          k: "3.4",
          frage:
            "Die Schulleitung fordert zusätzlich: Fremde Geräte sollen erst gar nicht ins LAN, und Angriffe im Netz sollen erkannt werden.\na) Erkläre, was NAC (Network Access Control) über die reine 802.1X-Authentifizierung hinaus leistet (Stichworte Compliance-Prüfung, Quarantäne-VLAN).\nb) Grenze IDS und IPS voneinander ab: Platzierung im Netz und Reaktion auf einen erkannten Angriff.",
          punkte: 6,
          zeilen: 6,
          loesung:
            "a) NAC prüft neben der Identität auch den GERÄTEZUSTAND (Patchstand, Virenschutz, Konfiguration). Nicht konforme Geräte landen in einem Quarantäne-/Gast-VLAN mit eingeschränktem Zugriff, bis sie nachgebessert sind – 802.1X allein fragt nur „wer bist du“, NAC zusätzlich „bist du gesund“.\nb) IDS: erkennt und MELDET Angriffe (passiv, z. B. am Mirror-Port) – greift nicht ein. IPS: sitzt INLINE im Datenpfad und blockiert erkannten Angriffsverkehr aktiv. Preis des IPS: Fehlalarme können legitimen Verkehr stoppen, Inline-Komponente ist möglicher Engpass/Ausfallpunkt.",
        },
      ],
    },
    {
      t: "Aufgabe 4: Routing, Firewall, DMZ, VPN & Zertifikate (32 Punkte)",
      teile: [
        {
          k: "4.1",
          frage:
            "Zwischen den VLANs routet die zentrale Firewall. Formuliere die Regeln (Quelle, Ziel, Protokoll/Port, Aktion) für: Verwaltung (10.20.10.0/25) darf auf den Notenserver 10.20.10.140 per HTTPS; Lehrkräfte (10.20.8.0/23) dürfen NUR drucken auf den Druckserver 10.20.10.150 (TCP 631); Schüler haben KEINEN Zugriff auf Server-Netz außer DNS auf 10.20.10.130 (UDP 53). Abschlussregel nicht vergessen.",
          punkte: 8,
          zeilen: 7,
          loesung:
            "R1: 10.20.10.0/25 → 10.20.10.140, TCP 443, ERLAUBEN. R2: 10.20.8.0/23 → 10.20.10.150, TCP 631, ERLAUBEN. R3: 10.20.0.0/21 → 10.20.10.130, UDP 53, ERLAUBEN. R4 (Default): any → 10.20.10.128/26, any, VERWEIGERN (bzw. globales Deny-All am Ende). Reihenfolge: spezifisch vor allgemein (First Match).\nBewertung: je Regel 2 P, Default-Deny + Reihenfolge 2 P.",
        },
        {
          k: "4.2",
          frage:
            "Zum Schulträger wird ein Site-to-Site-VPN über IPsec aufgebaut. Erkläre die Aufgaben von IKEv2 und ESP und nenne zwei Schutzziele, die der Tunnel erfüllt.",
          punkte: 6,
          zeilen: 4,
          loesung:
            "IKEv2 (Internet Key Exchange): authentifiziert die Gegenstellen (PSK oder Zertifikate) und handelt die Schlüssel/Security Associations aus. ESP (Encapsulating Security Payload): transportiert die Nutzdaten verschlüsselt und integritätsgesichert (im Tunnelmodus inklusive der ursprünglichen IP-Header). Schutzziele: Vertraulichkeit (Verschlüsselung, z. B. AES-256), Integrität (HMAC) und Authentizität der Endpunkte; Replay-Schutz inklusive.\nBewertung: IKE 2 P, ESP 2 P, je Schutzziel 1 P (max. 2).",
        },
        {
          k: "4.3",
          frage:
            "Ein Wireshark-Mitschnitt am Schüler-VLAN zeigt in kurzer Zeit tausende Frames „Who has 10.20.0.1? Tell 10.20.x.y“ von wechselnden Absendern. Um welches Protokoll handelt es sich, was ist die harmlose und was eine bösartige Erklärung, und welche Switch-Funktion begrenzt das Risiko?",
          punkte: 6,
          zeilen: 5,
          loesung:
            "ARP-Requests (Adressauflösung IP→MAC; 10.20.0.1 ist das Gateway). Harmlos: viele Clients starten gleichzeitig (Unterrichtsbeginn) und lösen das Gateway auf. Bösartig: ARP-Spoofing/-Flooding – ein Angreifer antwortet mit gefälschter MAC (Man-in-the-Middle) oder flutet die Switch-Tabellen. Gegenmaßnahmen am Switch: Dynamic ARP Inspection mit DHCP-Snooping-Datenbank, Port Security (MAC-Limit je Port), Rate-Limiting.\nBewertung: ARP 2 P, beide Erklärungen 2 P, Schutzfunktion 2 P.",
        },
        {
          k: "4.4",
          frage:
            "Der Webserver der Schule soll aus dem Internet erreichbar sein, ohne das interne Netz zu gefährden.\na) Beschreibe, wie der Server in einer DMZ platziert wird (einstufig mit Drei-Bein-Firewall ODER zweistufig) – Skizze in Worten genügt.\nb) Formuliere die zwei wichtigsten Firewall-Grundregeln für die Richtungen Internet→DMZ und DMZ→LAN.",
          punkte: 6,
          zeilen: 6,
          loesung:
            "a) Die DMZ ist ein eigenes Netzsegment zwischen Internet und LAN. Einstufig: Firewall mit drei Interfaces (Internet / DMZ / LAN). Zweistufig: Außen-Firewall → DMZ → Innen-Firewall → LAN (höhere Sicherheit, idealerweise verschiedene Hersteller).\nb) Internet→DMZ: NUR die Ports 80/443 zum Webserver erlauben, alles andere verwerfen. DMZ→LAN: grundsätzlich VERBOTEN, nur explizit definierte Ausnahmen (z. B. Datenbank-Port zu genau einem Server). Wird der Webserver kompromittiert, kommt der Angreifer so nicht frei ins interne Netz.",
        },
        {
          k: "4.5",
          frage:
            "Für 802.1X (EAP-TLS) und das Site-to-Site-VPN werden Zertifikate eingesetzt.\na) Beschreibe die Zertifikatskette Root-CA → Zwischen-CA → Server-/Client-Zertifikat und wie ein Client die Kette prüft.\nb) Wie wird ein KOMPROMITTIERTES Zertifikat zurückgezogen, und wie erfahren die Clients davon? Nenne beide gängigen Verfahren.",
          punkte: 6,
          zeilen: 6,
          loesung:
            "a) Die Root-CA signiert die Zwischen-CA, die Zwischen-CA signiert die Endzertifikate. Der Client prüft die Signaturkette bis zu einer Root, der er vertraut (Truststore), zusätzlich Gültigkeitszeitraum und Namen (CN/SAN). Die Root bleibt offline geschützt – kompromittierte Zwischen-CAs lassen sich austauschen, ohne alles neu auszurollen.\nb) Rückzug per Sperrliste CRL (Client lädt periodisch die Liste gesperrter Seriennummern) oder per OCSP (Client fragt den Status EINES Zertifikats live beim Responder ab; aktueller, aber Abhängigkeit vom Dienst). Abgelaufene Zertifikate scheitern schon an der Gültigkeitsprüfung.",
        },
      ],
    },
    {
      t: "Aufgabe 5: Analyse, Leistungsbewertung & VoIP (26 Punkte)",
      teile: [
        {
          k: "5.1",
          frage:
            "Berechne den Protokoll-Overhead im Ethernet: Ein Frame trägt 1.460 Byte Nutzdaten; dazu kommen 58 Byte Header/Trailer (Ethernet+IP+TCP inkl. FCS) sowie pro Frame 8 Byte Präambel/SFD und 12 Byte Interframe Gap auf der Leitung. Wie viel Prozent der Leitungszeit sind Nutzdaten? (Runde auf eine Nachkommastelle.)",
          punkte: 8,
          zeilen: 5,
          loesung:
            "Belegt je Frame: 1.460 + 58 + 8 + 12 = 1.538 Byte. Nutzanteil: 1.460 / 1.538 = 0,9493 → 94,9 %. Der feste Zuschlag von Präambel + IFG (20 Byte) plus Header wirkt bei KLEINEN Frames viel stärker – deshalb sind große Frames effizienter und deshalb gehören Präambel und Interframe Gap in jede ehrliche Durchsatzrechnung.\nBewertung: Summe 3 P, Quotient 3 P, Interpretation 2 P.",
        },
        {
          k: "5.2",
          frage:
            "Die 1-Gbit/s-Anbindung ans Rechenzentrum ist mittags ausgelastet. Eine Messung zeigt 940 Mbit/s Durchsatz und 35 ms Latenz zum Streamingserver; Downloads der Lernplattform (großer Einzelstream) bleiben trotzdem bei ~200 Mbit/s. Nenne zwei mögliche technische Erklärungen und je eine Prüf- bzw. Gegenmaßnahme.",
          punkte: 6,
          zeilen: 5,
          loesung:
            "Z. B.: 1. TCP-Durchsatzgrenze durch Latenz und Empfangsfenster (Bandwidth-Delay-Product): ein Einzelstream schafft bei 35 ms und begrenztem Window nur einen Teil der Leitung → prüfen per iperf mit mehreren parallelen Streams, Window-Skalierung aktivieren. 2. QoS/Shaper oder Rate-Limit auf Firewall/Provider begrenzt je Verbindung → Regelwerk prüfen. 3. Server-/Storage-Limit der Gegenseite (Disk/CPU) → Auslastung der Gegenstelle messen. 4. Paketverlust (CRC-Fehler auf einem Link) drückt TCP massiv → Interface-Zähler prüfen.\nBewertung: je Erklärung mit Maßnahme 3 P (max. 6).",
        },
        {
          k: "5.3",
          frage:
            "Für die Dokumentation: Nenne drei Bestandteile eines vollständigen Netzwerk-Dokumentationssatzes für diesen Campus und je einen Satz, wofür er im Störungsfall gebraucht wird.",
          punkte: 6,
          zeilen: 5,
          loesung:
            "Z. B.: Physischer Netzplan/Verkabelungsplan mit Patchpanel-Beschriftung (welcher Port hängt an welcher Dose – Fehlereingrenzung vor Ort); logischer Plan mit VLANs, Subnetzen und IP-Adresskonzept (wo gehört ein auffälliges Gerät hin, welche Firewall-Zone greift); Konfigurations-Backups der Switches/Firewall mit Änderungshistorie (schneller Ersatz defekter Hardware, Nachvollziehen von Änderungen); dazu Ansprechpartner/Wartungsverträge.\nBewertung: je Bestandteil mit Nutzen 2 P.",
        },
        {
          k: "5.4",
          frage:
            "Die Schule stellt auf VoIP-Telefonie um: maximal 80 gleichzeitige Gespräche, Codec G.711 mit ca. 100 kbit/s je Gespräch und Richtung (inkl. Overhead).\na) Berechne die benötigte Bandbreite je Richtung.\nb) Nenne die drei kritischen Qualitätsgrößen für VoIP mit üblichem Richtwert.\nc) Erkläre, wie QoS-Priorisierung (z. B. DSCP EF) die Sprachqualität auf einer gemeinsam genutzten Leitung sichert.",
          punkte: 6,
          zeilen: 6,
          loesung:
            "a) 80 × 100 kbit/s = 8 Mbit/s je Richtung (symmetrisch nötig).\nb) Latenz (einfach) < 150 ms · Jitter < 30 ms · Paketverlust < 1 %.\nc) Sprachpakete werden markiert (DSCP EF/Expedited Forwarding); Switches und Router bedienen die Voice-Queue bevorzugt. Sprache überholt damit Bulk-Verkehr (Downloads, Backups) – konstant niedrige Latenz und wenig Jitter statt „fairem“ Anstellen in einer Warteschlange.",
        },
      ],
    },
  ],
};
