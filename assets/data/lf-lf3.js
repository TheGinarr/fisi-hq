window.LF_CONTENT = window.LF_CONTENT || {};
window.LF_CONTENT["lf3"] = {
  topics: [
    {
      id: "lf3-gn",
      title: "Netzwerk-Grundlagen",
      lessons: [
        {
          id: "lf3-lwl-1",
          title: "LWL-Dämpfungsbudget: reicht das Licht bis ans Ende?",
          content: [
            {
              type: "text",
              value:
                "Ob eine Glasfaserstrecke funktioniert, ist reine Rechensache – das DÄMPFUNGSBUDGET entscheidet:\n\nBUDGET = Sendeleistung des Transceivers − Empfängerempfindlichkeit. Beide Werte stehen im Datenblatt in dBm (Leistungspegel bezogen auf 1 mW; 0 dBm = 1 mW, −10 dBm = 0,1 mW). Beispiel: Sender −3 dBm, Empfänger versteht noch −21 dBm → Budget = −3 − (−21) = 18 dB. So viel Dämpfung darf die Strecke maximal schlucken.\n\nSTRECKENDÄMPFUNG = Länge × Faserdämpfung + Spleiße × 0,1 dB + Steckverbinder × 0,5 dB. Typwerte fürs Rechnen: Singlemode ≈ 0,4 dB/km bei 1310 nm (0,25 bei 1550 nm), Multimode ≈ 3 dB/km bei 850 nm. Dazu gehört immer eine SYSTEMRESERVE von ca. 3 dB für Alterung, Reparaturspleiße und Toleranzen.\n\nPRÜFUNG: Strecke ok, wenn Streckendämpfung + Reserve ≤ Budget. Die dB-Logik macht das Rechnen bequem: Dämpfungen werden einfach ADDIERT (statt Leistungen zu multiplizieren) – 3 dB bedeutet halbe Leistung, 10 dB ein Zehntel.\n\nWarum Multimode auf kurze Strecken beschränkt ist: höhere Faserdämpfung UND Modendispersion (Lichtwege unterschiedlicher Länge verschmieren das Signal) begrenzen je nach Standard auf wenige hundert Meter – Singlemode schafft mit schmalem Kern und Laser viele Kilometer. Gemessen wird mit dem OTDR (zeigt Dämpfung über die Strecke und findet Fehlerstellen metergenau) oder einfacher Pegelmessung Sender/Empfänger.",
            },
            { type: "heading", value: "Übungsaufgabe: Standortkopplung rechnen" },
            {
              type: "text",
              value:
                "Zwei Gebäude sollen mit Singlemode (0,4 dB/km) über 8 km gekoppelt werden. Auf der Strecke: 4 Spleiße (à 0,1 dB) und 2 Steckerpaare (à 0,5 dB). Die Transceiver: Sendeleistung −2 dBm, Empfängerempfindlichkeit −18 dBm. Systemreserve 3 dB. Funktioniert die Strecke? Rechne vor.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nBudget = −2 − (−18) = 16 dB\nStreckendämpfung = 8 × 0,4 + 4 × 0,1 + 2 × 0,5 = 3,2 + 0,4 + 1,0 = 4,6 dB\nMit Reserve: 4,6 + 3 = 7,6 dB ≤ 16 dB → Strecke funktioniert mit komfortablen 8,4 dB Luft.\n(Gegenprobe Multimode: 8 × 3 = 24 dB allein durch die Faser → weit über Budget, geht nicht – deshalb Singlemode für Weitstrecken.)",
            },
            { type: "heading", value: "Vertiefung: dBm lesen ohne Taschenrechner" },
            {
              type: "text",
              value:
                "Merke drei Ankerpunkte: 0 dBm = 1 mW · +3 dB = Verdopplung · +10 dB = Faktor 10. Daraus lässt sich alles kombinieren: −3 dBm = 0,5 mW, −13 dBm = 0,05 mW (−10 → Zehntel, −3 → nochmal halbieren). Prüfungsfalle: dB ist ein VERHÄLTNIS (Dämpfung/Gewinn), dBm ein absoluter PEGEL – ein Budget ist in dB, ein Sendepegel in dBm.",
            },
          ],
          quiz: [
            {
              id: "imp_lf3-lwl-1_g0",
              q: "Sender −2 dBm, Empfängerempfindlichkeit −18 dBm – wie groß ist das Dämpfungsbudget?",
              options: ["16 dB", "20 dB", "−20 dB", "2 dB"],
              correct: 0,
              explain: "−2 − (−18) = 16 dB darf die Strecke maximal dämpfen.",
            },
            {
              id: "imp_lf3-lwl-1_g1",
              q: "8 km Singlemode (0,4 dB/km), 4 Spleiße (0,1), 2 Steckerpaare (0,5) – Streckendämpfung?",
              options: ["3,2 dB", "4,2 dB", "4,6 dB", "7,6 dB"],
              correct: 2,
              explain: "3,2 + 0,4 + 1,0 = 4,6 dB; 7,6 wäre der Wert MIT 3 dB Reserve.",
            },
            {
              id: "imp_lf3-lwl-1_g2",
              q: "Was bedeutet eine Dämpfung von 3 dB?",
              options: [
                "Die Leistung verdoppelt sich",
                "Die Leistung halbiert sich",
                "Die Leistung sinkt auf ein Zehntel",
                "Die Spannung halbiert sich exakt",
              ],
              correct: 1,
              explain: "3 dB ≈ Faktor 2 bei Leistung; 10 dB = Faktor 10.",
            },
            {
              id: "imp_lf3-lwl-1_g3",
              q: "Worin unterscheiden sich dB und dBm?",
              options: [
                "Gar nicht – zwei Schreibweisen",
                "dB gilt nur für Kupfer, dBm für Glasfaser",
                "dB misst Spannungen, dBm Ströme",
                "dB ist ein Verhältnis (Dämpfung/Gewinn), dBm ein absoluter Pegel bezogen auf 1 mW",
              ],
              correct: 3,
              explain: "Budget in dB, Sendeleistung in dBm – nie verwechseln.",
            },
            {
              id: "imp_lf3-lwl-1_g4",
              q: "Warum plant man eine Systemreserve von ~3 dB ein?",
              options: [
                "Für Alterung, Reparaturspleiße und Toleranzen",
                "Weil Messgeräte 3 dB Eigenfehler haben",
                "Damit die Strecke schneller wird",
                "Vorschrift der Bundesnetzagentur",
              ],
              correct: 0,
              explain:
                "Ohne Reserve fällt die Strecke bei der ersten Reparatur unter die Empfindlichkeitsgrenze.",
            },
            {
              id: "imp_lf3-lwl-1_g5",
              q: "Warum ist Multimode für 8-km-Strecken ungeeignet?",
              options: [
                "Multimode-Stecker gibt es nicht für Außenkabel",
                "Multimode ist teurer als Singlemode",
                "Hohe Faserdämpfung und Modendispersion begrenzen die Reichweite",
                "Multimode überträgt nur 100 Mbit/s",
              ],
              correct: 2,
              explain: "≈3 dB/km sprengt jedes Budget, und die Lichtwege verschmieren das Signal.",
            },
            {
              id: "imp_lf3-lwl-1_g6",
              q: "−13 dBm entsprechen etwa …",
              options: ["0,5 mW", "0,13 mW", "0,05 mW", "1,3 mW"],
              correct: 2,
              explain: "−10 dB = Zehntel (0,1 mW), −3 dB = nochmal halb → 0,05 mW.",
            },
            {
              id: "imp_lf3-lwl-1_g7",
              q: "Welches Messgerät zeigt Fehlerstellen einer LWL-Strecke metergenau?",
              options: [
                "Multimeter",
                "OTDR",
                "Wireshark",
                "Kabelzertifizierer für Kupfer (Klasse EA)",
              ],
              correct: 1,
              explain:
                "Das Rückstreu-Messgerät zeichnet die Dämpfung über die Distanz und lokalisiert Brüche/Spleiße.",
            },
            {
              id: "imp_lf3-lwl-1_g8",
              q: "Wann gilt eine geplante Strecke rechnerisch als funktionsfähig?",
              options: [
                "Wenn das Budget größer ist als die Sendeleistung",
                "Wenn Streckendämpfung + Reserve ≤ Budget",
                "Wenn die Faser kürzer als 10 km ist",
                "Wenn mehr Spleiße als Stecker verbaut sind",
              ],
              correct: 1,
              explain: "Genau diese Ungleichung ist die Prüfungsantwort – mit Zahlen belegt.",
            },
            {
              id: "imp_lf3-lwl-1_g9",
              q: "Typische Dämpfungswerte fürs Rechnen sind …",
              options: [
                "Singlemode 0,4 dB/km · Spleiß 0,1 dB · Stecker 0,5 dB",
                "Singlemode 3 dB/km · Spleiß 1 dB · Stecker 2 dB",
                "Multimode 0,2 dB/km · Spleiß 0,5 dB",
                "Alle Werte identisch 1 dB",
              ],
              correct: 0,
              explain:
                "Multimode liegt bei ≈3 dB/km (850 nm) – der Hauptgrund für Singlemode auf Weitstrecken.",
            },
          ],
        },
        {
          id: "lf3-pruef-1",
          title: "Fehlererkennung: Parität, CRC & Hamming-Distanz",
          content: [
            {
              type: "text",
              value:
                "Übertragungen sind nie perfekt – Bits kippen. Drei Mechanismen erkennen (oder korrigieren) das:\n\nPARITÄTSBIT: Das einfachste Verfahren. Bei GERADER Parität wird das Prüfbit so gesetzt, dass die Anzahl der Einsen inklusive Prüfbit gerade ist. 1011001 hat vier Einsen → Prüfbit 0. Erkennt jeden EINZELNEN Bitfehler – aber kippen zwei Bits, stimmt die Parität wieder und der Fehler bleibt unsichtbar. Korrigieren kann Parität nichts, nur melden.\n\nCRC (zyklische Redundanzprüfung): Das Verfahren hinter der FCS im Ethernet-Frame. Idee: Die Datenbits werden als große Binärzahl aufgefasst und per Polynomdivision (XOR-Division) durch ein vereinbartes Generatorpolynom geteilt – der REST (z. B. 32 Bit bei CRC-32) wird angehängt. Der Empfänger teilt erneut: Rest 0 = vermutlich fehlerfrei, Rest ≠ 0 = Frame wird verworfen (Ethernet wiederholt nicht selbst – das erledigen höhere Schichten wie TCP). CRC erkennt Bündelfehler extrem zuverlässig und ist in Hardware billig – deshalb steckt es in Ethernet, ZIP, PNG und Festplatten.\n\nHAMMING-DISTANZ: Wie viele Bitpositionen unterscheiden zwei Codewörter? 10110 und 01100 unterscheiden sich an Position 1, 2 und 4 → Distanz 3. Die Distanz eines CODES (Minimum über alle Wortpaare) bestimmt seine Stärke: Erkennen von e Fehlern braucht Distanz ≥ e + 1, KORRIGIEREN von e Fehlern braucht Distanz ≥ 2e + 1. Ein Code mit Distanz 3 kann also 2 Fehler erkennen oder 1 Fehler korrigieren (so arbeiten ECC-RAM und Hamming-Codes).",
            },
            { type: "heading", value: "Übungsaufgabe: alle drei Verfahren anwenden" },
            {
              type: "text",
              value:
                "a) Bestimme das Paritätsbit (gerade Parität) für 1101101. b) Zwei Codewörter lauten 101101 und 100111 – berechne die Hamming-Distanz. c) Ein Code hat die Mindestdistanz 4: Wie viele Fehler kann er sicher erkennen, wie viele korrigieren? d) Warum verwirft Ethernet Frames mit CRC-Fehler, statt sie zu korrigieren?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) 1101101 enthält fünf Einsen (ungerade) → Paritätsbit 1, damit die Gesamtzahl gerade wird.\nb) 101101 vs. 100111: Unterschiede an Position 3 und 5 → Hamming-Distanz 2.\nc) Erkennen: e ≤ d−1 = 3 Fehler. Korrigieren: e ≤ (d−1)/2 = 1 Fehler (sicher).\nd) Korrektur bräuchte deutlich mehr Redundanz je Frame. Verwerfen ist billiger: CRC-32 erkennt zuverlässig, und die Sicherungsaufgabe (Neuübertragung) übernimmt TCP – Schichtenprinzip: jede Schicht macht nur ihren Job.",
            },
            { type: "heading", value: "Vertiefung: Wo dir das täglich begegnet" },
            {
              type: "text",
              value:
                'ECC-RAM in Servern korrigiert Einzelbitfehler on the fly (Hamming) und loggt sie – gehäufte ECC-Meldungen sind ein Frühwarnsignal fürs Riegel-Tauschen. RAID-Paritäten (RAID 5/6) sind dieselbe XOR-Idee auf Blockebene. Und wenn Wireshark "FCS bad" zeigt, kippt irgendwo Hardware Bits: defektes Kabel, Duplex-Mismatch oder sterbende NIC – CRC-Fehlerzähler auf Switchports sind ein Top-Diagnosewerkzeug.',
            },
          ],
          quiz: [
            {
              id: "imp_lf3-pruef-1_g0",
              q: "Gerade Parität für 1101101 (fünf Einsen)?",
              options: ["0", "1", "Beides möglich", "Parität ist hier nicht anwendbar"],
              correct: 1,
              explain: "Fünf Einsen sind ungerade → Prüfbit 1 macht die Summe gerade.",
            },
            {
              id: "imp_lf3-pruef-1_g1",
              q: "Welchen Fehler übersieht ein einzelnes Paritätsbit?",
              options: [
                "Einen einzelnen Bitfehler",
                "Zwei gekippte Bits im selben Wort",
                "Jeden Fehler am ersten Bit",
                "Es übersieht nie etwas",
              ],
              correct: 1,
              explain:
                "Zwei Kipper stellen die gerade Anzahl wieder her – die Parität stimmt scheinbar.",
            },
            {
              id: "imp_lf3-pruef-1_g2",
              q: "Wo steckt CRC-32 im Ethernet-Frame?",
              options: [
                "In der Präambel",
                "Im VLAN-Tag",
                "In der Frame Check Sequence (FCS) am Frame-Ende",
                "In der Ziel-MAC-Adresse",
              ],
              correct: 2,
              explain: "Der Empfänger prüft die FCS und verwirft den Frame bei Abweichung.",
            },
            {
              id: "imp_lf3-pruef-1_g3",
              q: "Hamming-Distanz von 101101 und 100111?",
              options: ["1", "2", "3", "4"],
              correct: 1,
              explain:
                "101101 vs. 100111: Nur die Positionen 3 und 5 (von links) unterscheiden sich → Hamming-Distanz 2.",
            },
            {
              id: "imp_lf3-pruef-1_g4",
              q: "Ein Code mit Mindestdistanz 3 kann …",
              options: [
                "3 Fehler korrigieren",
                "2 Fehler korrigieren und 1 erkennen",
                "nichts erkennen, nur melden",
                "1 Fehler korrigieren oder 2 erkennen",
              ],
              correct: 3,
              explain: "Korrigieren: (d−1)/2 = 1 · Erkennen: d−1 = 2.",
            },
            {
              id: "imp_lf3-pruef-1_g5",
              q: "Wie reagiert Ethernet auf einen CRC-Fehler?",
              options: [
                "Frame wird verworfen – Neuübertragung regeln höhere Schichten",
                "Der Frame wird korrigiert und weitergeleitet",
                "Der Switch sendet ihn an alle Ports",
                "Die Verbindung wird getrennt",
              ],
              correct: 0,
              explain: "Schichtenprinzip: Erkennung unten, zuverlässige Wiederholung (TCP) oben.",
            },
            {
              id: "imp_lf3-pruef-1_g6",
              q: "Was leistet ECC-RAM?",
              options: [
                "Verdoppelt die Speichergeschwindigkeit",
                "Erkennt und korrigiert Einzelbitfehler im laufenden Betrieb",
                "Verschlüsselt den Arbeitsspeicher",
                "Ersetzt das RAID im Server",
              ],
              correct: 1,
              explain: "Hamming-basiert – gehäufte ECC-Logs kündigen sterbende Riegel an.",
            },
            {
              id: "imp_lf3-pruef-1_g7",
              q: "Steigende CRC-Fehlerzähler auf einem Switchport deuten auf …",
              options: [
                "zu viele Broadcasts",
                "ein Routingproblem",
                "physische Probleme: Kabel, Duplex-Mismatch oder defekte NIC",
                "fehlende VLAN-Konfiguration",
              ],
              correct: 2,
              explain:
                "CRC-Fehler entstehen auf Schicht 1/2 – klassischer Startpunkt der Fehlersuche.",
            },
          ],
        },
        {
          id: "lf3-gn-1",
          title: "Topologien & Netzwerktypen",
          content: [
            { type: "heading", value: "Netzwerktypen nach Reichweite" },
            {
              type: "text",
              value:
                "PAN (Personal Area Network): Bluetooth, NFC, wenige Meter. LAN (Local Area Network): Gebäude/Campus, Ethernet, bis einige 100m. WLAN: Drahtloses LAN (IEEE 802.11). MAN (Metropolitan Area Network): Stadtgebiet, Glasfaser-Backbone. WAN (Wide Area Network): Länder/Kontinente, Internet, MPLS. GAN (Global Area Network): Weltweites Netz, Seekabel, Satelliten.",
            },
            { type: "heading", value: "Topologien im Detail" },
            {
              type: "text",
              value:
                "Stern: Alle Geräte an einem zentralen Switch. Standard im LAN. Vorteil: Ausfall eines Geräts betrifft nicht andere. Nachteil: Switch-Ausfall = alles down. Bus: Ein gemeinsames Kabel, Geräte hängen dran. Veraltet (10BASE2/5). Problem: Kabelbruch = ganzes Netz down, Kollisionen. Ring: Token wird weitergereicht, nur Token-Inhaber darf senden. Deterministisch, aber: Ausfall eines Geräts unterbricht Ring (Lösung: Doppelring). Masche: Jeder mit jedem (voll) oder mehrfach redundant (teilvermascht). Typisch für WAN/Internet. Hohe Ausfallsicherheit, teuer. Baum: Hierarchische Sternstruktur. Typisch in größeren Netzwerken: Core-Switch > Distribution > Access.",
            },
            { type: "heading", value: "Client-Server vs. Peer-to-Peer" },
            {
              type: "text",
              value:
                "Client-Server: Zentrale Dienste (Fileserver, AD, DHCP), zentrale Administration, skalierbar, typisch im Unternehmen. Peer-to-Peer: Jeder Rechner gleichberechtigt, teilt Ressourcen direkt. Einfach, aber nicht skalierbar, keine zentrale Verwaltung. Max. ~10 Rechner sinnvoll.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Topologie" },
            {
              type: "text",
              value:
                "Welche Topologie hat ein zentrales Gerät, an dem alle Endgeräte hängen, und was ist der Nachteil?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nStern-Topologie. Alle Geräte sind mit einem zentralen\nSwitch/Hub verbunden. Vorteil: Ausfall eines Kabels\nbetrifft nur ein Gerät. Nachteil: fällt das zentrale\nGerät aus, ist das ganze Netz tot (Single Point of\nFailure). Heute die übliche LAN-Topologie.",
            },
            { type: "heading", value: "Übungsaufgabe 2: LAN/WAN" },
            {
              type: "text",
              value: "Ordne zu: a) Firmennetz in einem Gebäude, b) Internet, c) Funknetz im Büro.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Gebäude-Firmennetz -> LAN (Local Area Network)\nb) Internet/weltweit   -> WAN (Wide Area Network)\nc) Funknetz im Büro   -> WLAN (Wireless LAN)\n(Zwischenstufe Stadt: MAN = Metropolitan Area Network)",
            },
            { type: "heading", value: "Übungsaufgabe 3: Mesh" },
            { type: "text", value: "Was ist eine Mesh-Topologie und wo wird sie genutzt?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nIm (vollvermaschten) Mesh ist jedes Gerät mit jedem\nanderen verbunden. Sehr ausfallsicher (viele\nalternative Pfade), aber teuer/aufwendig (viele\nVerbindungen). Genutzt z.B. im Internet-Backbone und\nbei WLAN-Mesh-Systemen für große Flächen.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Topologien" },
            {
              type: "text",
              value: "Nenne Vor- und Nachteil der Stern-Topologie gegenüber der Bus-Topologie.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nStern: Vorteil: fällt ein Endgerät aus, läuft der\nRest weiter. Einfache Fehlersuche (Kabel testen).\nNachteil: Switch ist Single Point of Failure.\nBus: Vorteil: einfach, wenig Kabel.\nNachteil: ein Kabelbruch legt das ganze Netz lahm,\nschwierige Fehlersuche.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Kollisionsdomäne" },
            {
              type: "text",
              value: "Was ist eine Kollisionsdomäne und wie begrenzt ein Switch sie?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nKollisionsdomäne: der Netzbereich, in dem Frames\nkollidieren können (gleichzeitiges Senden).\nBei Hubs: alle Ports = eine Kollisionsdomäne.\nBei Switches: JEDER Port = eigene Kollisionsdomäne,\nweil der Switch Frames gezielt weiterleitet (MAC).\nDeshalb keine Kollisionen im Vollduplex.",
            },
            { type: "heading", value: "Beispiel 1: Stern-Topologie im Büro" },
            {
              type: "text",
              value:
                "Ein Switch im Netzwerkschrank, 24 Ports. Jeder Arbeitsplatz hat ein eigenes Kabel zum Switch → Stern-Topologie. Vorteil: Fällt ein Kabel aus, ist nur dieser PC betroffen, nicht das ganze Netz. Nachteil: Switch ist Single-Point-of-Failure (Lösung: redundanter Switch). In der Praxis sind fast alle LANs heute physisch Stern, logisch oft erweiterter Stern (Switch→Switch→Endgerät).",
            },
            {
              type: "heading",
              value: "Beispiel 2: Ring vs. Bus – Warum es sie heute kaum noch gibt",
            },
            {
              type: "text",
              value:
                "Token Ring (IEEE 802.5): Jedes Gerät hat genau 2 Nachbarn, ein Token kreist im Ring. Problem: Ein defektes Gerät unterbricht den ganzen Ring. Bus (10BASE-2 Koax): Alle Geräte an einem Kabel, Terminatoren an den Enden. Problem: Kabelbruch = gesamtes Netz tot. Beide sind durch Ethernet über Switch (Stern) abgelöst worden.",
            },
            { type: "heading", value: "Beispiel 3: Netzwerktypen nach Reichweite" },
            {
              type: "text",
              value:
                "PAN (Personal Area Network): Bluetooth-Verbindung Smartphone↔Kopfhörer, <10m. LAN (Local Area Network): Büro-Netzwerk, ein Gebäude, Ethernet/WLAN. MAN (Metropolitan Area Network): Stadtnetz, z.B. Glasfaser-Ring zwischen Standorten. WAN (Wide Area Network): Internet, VPN zwischen Filialen. GAN (Global Area Network): Satellitennetze, weltumspannend.",
            },
          ],
          quiz: [
            {
              id: "imp_lf3-gn-1_0",
              q: "Standard-Topologie im LAN?",
              options: ["Bus", "Ring", "Masche", "Stern"],
              correct: 3,
              explain: "Stern mit zentralem Switch.",
            },
            {
              id: "imp_lf3-gn-1_1",
              q: "Vorteil der Maschentopologie?",
              options: ["Wenig Kabel", "Günstig", "Hohe Ausfallsicherheit", "Einfach zu verkabeln"],
              correct: 2,
              explain: "Redundante Verbindungen = hohe Ausfallsicherheit.",
            },
            {
              id: "imp_lf3-gn-1_2",
              q: "Peer-to-Peer sinnvoll bis ca.?",
              options: ["100 Rechner", "Unbegrenzt", "5 Rechner", "10 Rechner"],
              correct: 3,
              explain: "Ab ~10 Rechner wird zentrale Verwaltung (Client-Server) nötig.",
            },
            {
              id: "imp_lf3-gn-1_3",
              q: "MAN = ?",
              options: [
                "Metropolitan Area Network (Stadtgebiet)",
                "Globales Netz",
                "Heimnetz",
                "Kleines Netz",
              ],
              correct: 0,
              explain: "MAN: Stadtweites Netz.",
            },
            {
              id: "imp_lf3-gn-1_4",
              q: "Bus-Topologie Nachteil?",
              options: [
                "Kabelbruch = ganzes Netz down",
                "Braucht Switch",
                "Zu teuer",
                "Zu schnell",
              ],
              correct: 0,
              explain: "Geteiltes Kabel: Bruch = alle betroffen.",
            },
            {
              id: "imp_lf3-gn-1_5",
              q: "Stern: Zentrales Gerät fällt aus?",
              options: ["Kein Problem", "Nur 1 Client", "Ganzes Netz down", "Failover"],
              correct: 2,
              explain: "Zentraler Switch defekt = alle offline.",
            },
            {
              id: "imp_lf3-gn-1_6",
              q: "Teilvermascht?",
              options: [
                "Stern",
                "Nur einige redundante Verbindungen",
                "Jeder mit jedem",
                "Keine Redundanz",
              ],
              correct: 1,
              explain: "Teilvermascht: Einige (nicht alle) Knoten redundant verbunden.",
            },
            {
              id: "imp_lf3-gn-1_7",
              q: "GAN = ?",
              options: ["LAN", "Global Area Network (weltweit)", "Glasfaser", "Gateway"],
              correct: 1,
              explain: "GAN: Weltweites Netz (Internet, Seekabel, Satelliten).",
            },
            {
              id: "imp_lf3-gn-1_8",
              q: "Baum-Topologie?",
              options: ["Hierarchische Stern-Struktur", "Ring", "Bus", "Flach"],
              correct: 0,
              explain: "Core>Distribution>Access. Baum: Hierarchisch verschachtelte Sterne.",
            },
            {
              id: "imp_lf3-gn-1_9",
              q: "P2P max. sinnvoll?",
              options: ["Unbegrenzt", "100", "1000", "~10 Rechner"],
              correct: 3,
              explain: "Ab ~10 Rechner wird zentrale Verwaltung (Client-Server) nötig.",
            },
            {
              id: "imp_lf3-gn-1_10",
              q: "Welche Topologie nutzt ein zentrales Vermittlungsgerät?",
              options: ["Mesh", "Stern", "Ring", "Bus"],
              correct: 1,
              explain: "Stern: Alle Geräte sind mit einem zentralen Switch/Hub verbunden.",
            },
            {
              id: "imp_lf3-gn-1_11",
              q: "Was ist ein Single-Point-of-Failure in der Stern-Topologie?",
              options: ["Jeder PC", "Das Kabel", "Der zentrale Switch", "Der Router"],
              correct: 2,
              explain: "Fällt der Switch aus, ist das gesamte Netz betroffen.",
            },
            {
              id: "imp_lf3-gn-1_12",
              q: "Welches Netz deckt ein Stadtgebiet ab?",
              options: ["MAN", "LAN", "PAN", "WAN"],
              correct: 0,
              explain: "MAN = Metropolitan Area Network, typisch 10-100 km.",
            },
            {
              id: "imp_lf3-gn-1_13",
              q: "Was ist ein Vorteil der Mesh-Topologie?",
              options: [
                "Es wird nur sehr wenig Verkabelung benötigt",
                "Die Verkabelung ist besonders einfach umzusetzen",
                "Hohe Ausfallsicherheit durch redundante Verbindungen",
                "Die Topologie ist besonders günstig im Aufbau",
              ],
              correct: 2,
              explain:
                "Mesh: Jeder Knoten mit mehreren anderen verbunden → Ausfall eines Weges wird umgangen.",
            },
            {
              id: "imp_lf3-gn-1_14",
              q: "Welche Topologie nutzt Token Ring?",
              options: ["Mesh", "Bus", "Ring", "Stern"],
              correct: 2,
              explain: "Token Ring (IEEE 802.5): Logische Ring-Topologie, Token kreist.",
            },
            {
              id: "imp_lf3-gn-1_15",
              q: "Was passiert bei Kabelbruch in einer Bus-Topologie?",
              options: [
                "Gesamtes Netz fällt aus",
                "Nichts",
                "Nur ein PC fällt aus",
                "Netz wird langsamer",
              ],
              correct: 0,
              explain: "Bus: Ein Kabelbruch = Reflexionen = gesamtes Segment unbrauchbar.",
            },
            {
              id: "imp_lf3-gn-1_16",
              q: "Welcher Netzwerktyp beschreibt das Internet?",
              options: ["PAN", "LAN", "WAN/GAN", "MAN"],
              correct: 2,
              explain: "Das Internet ist ein globales WAN/GAN.",
            },
            {
              id: "imp_lf3-gn-1_17",
              q: "Was ist der Unterschied zwischen physischer und logischer Topologie?",
              options: [
                "Physisch = Software, Logisch = Hardware",
                "Physisch = Verkabelung, Logisch = Datenflusspfad",
                "Logisch ist sichtbar, physisch nicht",
                "Kein Unterschied",
              ],
              correct: 1,
              explain:
                "Physisch: Wie Kabel verlegt sind. Logisch: Wie Daten tatsächlich fließen (kann anders sein!).",
            },
            {
              id: "imp_lf3-gn-1_18",
              q: "Was ist ein VLAN?",
              options: [
                "Visual LAN – grafische Darstellung der Netzwerktopologie",
                "Voice LAN – ein Netz ausschließlich für Telefoniegeräte",
                "Virtual LAN – logische Trennung in einem physischen Netz",
                "Very Large Area Network – ein Netz über mehrere Kontinente",
              ],
              correct: 2,
              explain:
                "VLAN: Logische Netzwerktrennung auf einem Switch. Geräte in verschiedenen VLANs können nicht direkt kommunizieren.",
            },
            {
              id: "imp_lf3-gn-1_19",
              q: "Welche Topologie ist am ausfallsichersten?",
              options: ["Voll vermaschtes Mesh", "Stern", "Ring", "Bus"],
              correct: 0,
              explain:
                "Full Mesh: Jeder mit jedem verbunden → maximale Redundanz (aber teuer und komplex).",
            },
          ],
        },
        {
          id: "lf3-gn-2",
          title: "OSI- & TCP/IP-Modell",
          content: [
            { type: "heading", value: "7 OSI-Schichten (von unten nach oben)" },
            {
              type: "list",
              value: [
                "1 Physical: Bitübertragung. Kabel, Stecker, Signale, Spannungspegel. Geräte: Hub, Repeater, Medienkonverter. PDU: Bits.",
                "2 Data Link: Sicherungsschicht. MAC-Adressen, Frames, Fehlererkennung (CRC). Geräte: Switch, Bridge. Protokolle: Ethernet (802.3), WLAN (802.11), ARP. PDU: Frames.",
                "3 Network: Vermittlung. IP-Adressen, Routing, Pfadwahl. Geräte: Router, L3-Switch. Protokolle: IPv4, IPv6, ICMP, OSPF. PDU: Pakete.",
                "4 Transport: End-to-End-Verbindung. Ports, Segmentierung, Flusskontrolle. TCP (verbindungsorientiert, zuverlässig) vs. UDP (verbindungslos, schnell). PDU: Segmente (TCP) / Datagramme (UDP).",
                "5 Session: Sitzungsverwaltung. Auf-/Abbau von Verbindungen. NetBIOS, RPC.",
                "6 Presentation: Darstellungsschicht. Datenformate, Kodierung, Kompression, Verschlüsselung (SSL/TLS). JPEG, ASCII, MPEG.",
                "7 Application: Anwendungsschicht. Schnittstelle zum Benutzer. HTTP, HTTPS, FTP, SMTP, POP3, IMAP, DNS, DHCP, SSH, Telnet, SNMP.",
              ],
            },
            { type: "heading", value: "Datenkapselung" },
            {
              type: "text",
              value:
                "Beim Senden: Jede Schicht fügt einen Header hinzu (Encapsulation). Daten → Segment (+ Port) → Paket (+ IP) → Frame (+ MAC) → Bits. Beim Empfangen: Jede Schicht entfernt ihren Header (Decapsulation). Merksatz von oben: All People Seem To Need Data Processing.",
            },
            { type: "heading", value: "TCP/IP-Modell (4 Schichten)" },
            {
              type: "text",
              value:
                "Netzzugang (OSI 1+2): Ethernet, WLAN, ARP. Internet (OSI 3): IP, ICMP, OSPF. Transport (OSI 4): TCP, UDP. Anwendung (OSI 5+6+7): HTTP, DNS, SMTP etc. TCP/IP ist das in der Praxis verwendete Modell. OSI ist das theoretische Referenzmodell.",
            },
            { type: "heading", value: "Übungsaufgabe 1: OSI-Schichten" },
            {
              type: "text",
              value: "Auf welcher OSI-Schicht arbeiten: a) Switch, b) Router, c) Kabel/Hub?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Switch -> Schicht 2 (Sicherung, MAC-Adressen)\nb) Router -> Schicht 3 (Vermittlung, IP-Adressen)\nc) Kabel/Hub -> Schicht 1 (Bitübertragung)\nMerkhilfe von unten: Bitübertragung, Sicherung,\nVermittlung, Transport, Sitzung, Darstellung, Anwendung.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Kapselung" },
            {
              type: "text",
              value: "Was passiert beim Senden mit den Daten auf dem Weg durch die Schichten?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nKapselung (Encapsulation): Jede Schicht fügt ihren\nHeader hinzu. Anwendungsdaten -> Segment (Transport,\nTCP/UDP-Header) -> Paket (IP-Header) -> Frame\n(Ethernet-Header+Trailer) -> Bits. Beim Empfänger\nläuft es umgekehrt (Entkapselung).",
            },
            { type: "heading", value: "Übungsaufgabe 3: Modelle" },
            { type: "text", value: "Wie viele Schichten haben OSI- und TCP/IP-Modell?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nOSI: 7 Schichten (Referenzmodell).\nTCP/IP: 4 Schichten (praxisnah): Netzzugang,\nInternet, Transport, Anwendung. Das TCP/IP-Modell\nfasst mehrere OSI-Schichten zusammen (z.B. Anwendung\n= OSI 5-7).",
            },
            { type: "heading", value: "Übungsaufgabe 3: TCP/IP vs OSI" },
            {
              type: "text",
              value: "Wie viele Schichten hat das TCP/IP-Modell und wie mappen sie auf OSI?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nTCP/IP hat 4 Schichten:\n1. Netzzugang (= OSI 1+2: Physical + Data Link)\n2. Internet (= OSI 3: Network, z.B. IP)\n3. Transport (= OSI 4: TCP/UDP)\n4. Anwendung (= OSI 5+6+7)\nTCP/IP ist praxisnäher, OSI ist das Referenzmodell.",
            },
            {
              type: "heading",
              value: "Beispiel 1: OSI-Modell: Daten eines Webaufrufs durch alle Schichten",
            },
            {
              type: "text",
              value:
                "Du öffnest https://example.com: Schicht 7 (Application): HTTP-GET-Request. Schicht 6 (Presentation): TLS-Verschlüsselung, Zeichenkodierung. Schicht 5 (Session): Auf-/Abbau und Verwaltung der Kommunikationssitzung. Schicht 4 (Transport): TCP, Port 443, Segmentierung. Schicht 3 (Network): IP-Adresse des Servers, Routing. Schicht 2 (Data Link): Ethernet-Frame, MAC-Adressen. Schicht 1 (Physical): Elektrische Signale auf dem Kupferkabel.",
            },
            { type: "heading", value: "Beispiel 2: TCP/IP-Modell vs. OSI im Alltag" },
            {
              type: "text",
              value:
                "In der Praxis wird fast immer das TCP/IP-Modell (4 Schichten) verwendet: Application (HTTP, DNS, SMTP) = OSI 5-7. Transport (TCP, UDP) = OSI 4. Internet (IP, ICMP) = OSI 3. Network Access (Ethernet, WLAN) = OSI 1-2. Das OSI-Modell ist ein Referenzmodell für die Prüfung, TCP/IP das reale Internet-Modell.",
            },
            { type: "heading", value: "Beispiel 3: Datenkapselung Schritt für Schritt" },
            {
              type: "text",
              value:
                "Anwendungsdaten (Payload) → Schicht 4 fügt TCP-Header hinzu → Segment. Schicht 3 fügt IP-Header hinzu → Paket. Schicht 2 fügt Ethernet-Header + Trailer (FCS) hinzu → Frame. Schicht 1 wandelt in Bits/Signale um. Am Empfänger: Umgekehrter Vorgang (Dekapselung). Jede Schicht liest nur 'ihren' Header und gibt den Rest nach oben weiter.",
            },
          ],
          quiz: [
            {
              id: "imp_lf3-gn-2_0",
              q: "Switch = welche OSI-Schicht?",
              options: ["4", "3", "2", "1"],
              correct: 2,
              explain: "Schicht 2 (Data Link), arbeitet mit MAC-Adressen.",
            },
            {
              id: "imp_lf3-gn-2_1",
              q: "TCP/IP hat wie viele Schichten?",
              options: ["5", "7", "3", "4"],
              correct: 3,
              explain: "4: Netzzugang, Internet, Transport, Anwendung.",
            },
            {
              id: "imp_lf3-gn-2_2",
              q: "PDU auf Schicht 3?",
              options: ["Bits", "Segmente", "Pakete", "Frames"],
              correct: 2,
              explain: "Schicht 3 (Network) = Pakete.",
            },
            {
              id: "imp_lf3-gn-2_3",
              q: "Welche Zuordnung löst ARP auf?",
              options: ["MAC → Switch-Port", "Hostname → IP", "IP → MAC", "IP → Port"],
              correct: 2,
              explain:
                "ARP (Address Resolution Protocol) ermittelt zur bekannten IPv4-Adresse die zugehörige MAC-Adresse im lokalen Netz.",
            },
            {
              id: "imp_lf3-gn-2_4",
              q: "Welche Schicht fügt MAC-Adressen hinzu?",
              options: ["3 Network", "2 Data Link", "1 Physical", "4 Transport"],
              correct: 1,
              explain: "Data Link (Schicht 2) fügt MAC-Adressen als Frame-Header hinzu.",
            },
            {
              id: "imp_lf3-gn-2_5",
              q: "TCP 3-Way-Handshake?",
              options: ["PUSH, ACK, RST", "ACK, SYN, FIN", "SYN, SYN-ACK, ACK", "SYN, ACK, FIN"],
              correct: 2,
              explain: "Client SYN → Server SYN-ACK → Client ACK.",
            },
            {
              id: "imp_lf3-gn-2_6",
              q: "Schicht 4 PDU Name?",
              options: ["Bits", "Frames", "Pakete", "Segmente (TCP)/Datagramme (UDP)"],
              correct: 3,
              explain: "Transport Layer: Segmente (TCP) oder Datagramme (UDP).",
            },
            {
              id: "imp_lf3-gn-2_7",
              q: "Hub vs. Switch?",
              options: [
                "Der Hub arbeitet intelligenter und lernt MAC-Adressen",
                "Hub = alle Ports (L1), Switch = gezielt per MAC (L2)",
                "Beide Geräte arbeiten identisch auf derselben Schicht",
                "Der Switch ist langsamer, weil er jedes Paket prüft",
              ],
              correct: 1,
              explain: "Hub sendet an alle, Switch nur an Ziel-MAC.",
            },
            {
              id: "imp_lf3-gn-2_8",
              q: "Router = Schicht?",
              options: ["3", "4", "2", "1"],
              correct: 0,
              explain: "Router: Schicht 3 (Network), arbeitet mit IP.",
            },
            {
              id: "imp_lf3-gn-2_9",
              q: "UDP: Verbindungsorientiert?",
              options: ["Ja", "Nein (verbindungslos, schnell)", "Manchmal", "Nur mit TCP"],
              correct: 1,
              explain: "UDP: Verbindungslos, kein Handshake.",
            },
            {
              id: "imp_lf3-gn-2_10",
              q: "Auf welcher OSI-Schicht arbeitet ein Switch?",
              options: ["3 (Network)", "4 (Transport)", "2 (Data Link)", "1 (Physical)"],
              correct: 2,
              explain:
                "Switch = Schicht 2: Arbeitet mit MAC-Adressen. Ein Layer-3-Switch kann auch routen.",
            },
            {
              id: "imp_lf3-gn-2_11",
              q: "Auf welcher OSI-Schicht arbeitet ein Router?",
              options: ["1", "3 (Network)", "7", "2"],
              correct: 1,
              explain:
                "Router = Schicht 3: Arbeitet mit IP-Adressen, trifft Routing-Entscheidungen.",
            },
            {
              id: "imp_lf3-gn-2_12",
              q: "Wie heißt die Dateneinheit auf Schicht 4 (Transport)?",
              options: ["Bit", "Segment", "Paket", "Frame"],
              correct: 1,
              explain: "Schicht 4: Segment (TCP) bzw. Datagramm (UDP).",
            },
            {
              id: "imp_lf3-gn-2_13",
              q: "Welches Protokoll gehört zu Schicht 3?",
              options: ["Ethernet", "TCP", "HTTP", "IP"],
              correct: 3,
              explain: "IP (Internet Protocol) = Schicht 3 (Network/Vermittlung).",
            },
            {
              id: "imp_lf3-gn-2_14",
              q: "Was macht Schicht 6 (Presentation)?",
              options: [
                "Physische Übertragung der Bits über Kabel, Funk und Stecker",
                "Fehlererkennung und -korrektur mittels Prüfsummen je Frame",
                "Routing: Wegewahl der Pakete anhand logischer Adressen",
                "Datendarstellung: Verschlüsselung, Komprimierung, Zeichenkodierung",
              ],
              correct: 3,
              explain:
                "Presentation: Datenformat-Umwandlung, TLS/SSL, Komprimierung, Zeichensätze.",
            },
            {
              id: "imp_lf3-gn-2_15",
              q: "Wie viele Schichten hat das TCP/IP-Modell?",
              options: ["4", "6", "7", "5"],
              correct: 0,
              explain: "TCP/IP: 4 Schichten (Network Access, Internet, Transport, Application).",
            },
            {
              id: "imp_lf3-gn-2_16",
              q: "Was ist Datenkapselung?",
              options: [
                "Sicheres Löschen von Daten durch Überschreiben",
                "Komprimieren von Daten vor dem Versand (z. B. ZIP)",
                "Verschlüsseln der Nutzdaten mit einem Sitzungsschlüssel",
                "Jede Schicht fügt ihren Header hinzu (Encapsulation)",
              ],
              correct: 3,
              explain:
                "Encapsulation: Payload + Header auf jeder Schicht = neue PDU (Protocol Data Unit).",
            },
            {
              id: "imp_lf3-gn-2_17",
              q: "Welche Schicht ist für MAC-Adressen zuständig?",
              options: ["3", "1", "4", "2 (Data Link)"],
              correct: 3,
              explain: "Schicht 2 (Data Link/Sicherungsschicht): MAC-Adressen, Ethernet-Frames.",
            },
            {
              id: "imp_lf3-gn-2_18",
              q: "Was ist ein Hub im OSI-Modell?",
              options: ["Schicht 4", "Schicht 2", "Schicht 3", "Schicht 1 (Physical)"],
              correct: 3,
              explain:
                "Leitet Signale an alle Ports weiter. Hub = Schicht 1: Empfängt Signal, verstärkt und sendet an ALLE Ports (kein Filtern).",
            },
            {
              id: "imp_lf3-gn-2_19",
              q: "Was ist der Unterschied zwischen Hub und Switch?",
              options: [
                "Der Switch arbeitet langsamer, weil er jeden Frame vollständig analysiert",
                "Hub sendet an alle Ports, Switch nur an den Zielport (MAC-Tabelle)",
                "Der Hub ist das intelligentere Gerät und pflegt eine eigene MAC-Tabelle",
                "Es besteht kein Unterschied, beide fluten sämtliche Ports gleichermaßen",
              ],
              correct: 1,
              explain:
                "Switch lernt MAC-Adressen (MAC-Address-Table) und leitet Frames gezielt weiter.",
            },
          ],
        },
        {
          id: "lf3-gn-3",
          title: "IPv4 & Subnetting",
          content: [
            { type: "heading", value: "IPv4-Grundlagen" },
            {
              type: "text",
              value:
                "32 Bit Adresse, 4 Oktette (je 8 Bit) durch Punkte getrennt: 192.168.1.100. Subnetzmaske trennt Netzanteil (Einsen) von Hostanteil (Nullen). CIDR-Notation: /24 = 255.255.255.0.",
            },
            { type: "heading", value: "Adressklassen (historisch)" },
            {
              type: "text",
              value:
                "Klasse A: 1.0.0.0 - 126.x.x.x (/8). Klasse B: 128.0.0.0 - 191.255.x.x (/16). Klasse C: 192.0.0.0 - 223.255.255.x (/24). Heute: Classless (CIDR) statt feste Klassen.",
            },
            { type: "heading", value: "Subnetting-Formel & Tabelle" },
            {
              type: "text",
              value:
                "Hosts pro Subnetz = 2^(32 - Präfix) - 2 (Netz- und Broadcast-Adresse abziehen). /24=254, /25=126, /26=62, /27=30, /28=14, /29=6, /30=2 Hosts. Subnetze pro Netz = 2^(geliehene Bits).",
            },
            { type: "heading", value: "Subnetting Schritt für Schritt (AP1!)" },
            {
              type: "text",
              value:
                "Aufgabe: Netz 192.168.10.0/24 in 4 gleiche Subnetze teilen. Schritt 1: 4 Subnetze = 2 Bits geliehen (2^2=4). Neuer Präfix: /24+2 = /26. Schritt 2: Subnetzmaske /26 = 255.255.255.192. Schrittweite: 256-192 = 64. Schritt 3: Subnetze: 192.168.10.0/26 (Hosts .1-.62, Broadcast .63), 192.168.10.64/26 (Hosts .65-.126, Broadcast .127), 192.168.10.128/26 (Hosts .129-.190, Broadcast .191), 192.168.10.192/26 (Hosts .193-.254, Broadcast .255). Jedes Subnetz: 62 nutzbare Hosts.",
            },
            { type: "heading", value: "Private Bereiche (RFC 1918)" },
            {
              type: "text",
              value:
                "10.0.0.0/8 (Klasse A, 16,7 Mio. Hosts), 172.16.0.0/12 (Klasse B, 1 Mio.), 192.168.0.0/16 (Klasse C, 65.536). Spezial: 127.0.0.1 Loopback, 169.254.x.x APIPA (kein DHCP), 0.0.0.0 Default Route.",
            },
            {
              type: "note",
              value:
                "Subnetting ist DAS Rechenthema der AP1. Schrittweite = 256 - letztes Oktett der Subnetzmaske. Immer 2 Adressen abziehen (Netz + Broadcast)!",
            },
            { type: "heading", value: "VLSM: Variable Length Subnet Mask" },
            {
              type: "text",
              value:
                "Problem: Klassisches Subnetting verschwendet IPs. Ein /24 Subnetz hat 254 Hosts – aber was wenn ein Subnetz nur 2 braucht (Point-to-Point Link)? VLSM = unterschiedlich große Subnetze im selben Netzwerk. Regel: Immer mit dem größten Subnetz anfangen!",
            },
            { type: "heading", value: "VLSM Rechenbeispiel" },
            {
              type: "text",
              value:
                "Gegeben: 192.168.1.0/24. Benötigt: Netz A = 100 Hosts, Netz B = 50 Hosts, Netz C = 25 Hosts, Netz D = 2 Hosts (Point-to-Point). Schritt 1 - Netz A (100 Hosts): 128 Adressen nötig (2^7=128) → /25. 192.168.1.0/25 (Hosts: .1–.126). Schritt 2 - Netz B (50 Hosts): 64 Adressen nötig (2^6=64) → /26. 192.168.1.128/26 (Hosts: .129–.190). Schritt 3 - Netz C (25 Hosts): 32 Adressen nötig (2^5=32) → /27. 192.168.1.192/27 (Hosts: .193–.222). Schritt 4 - Netz D (2 Hosts): 4 Adressen nötig (2^2=4) → /30. 192.168.1.224/30 (Hosts: .225–.226). Noch frei: 192.168.1.228/30 bis 192.168.1.252/30 für weitere Links.",
            },
            {
              type: "note",
              value:
                "VLSM-Regel: Größtes Subnetz ZUERST! Von oben nach unten planen. Jedes Subnetz beginnt an einer Adresse die durch seine Größe teilbar ist. VLSM kommt regelmäßig in AP1 und CCNA-Prüfungen vor.",
            },
            { type: "heading", value: "Übungsaufgabe: Subnetz bestimmen" },
            {
              type: "text",
              value:
                "Gegeben: 10.20.30.155/27. Bestimme Netzadresse, Broadcast, ersten und letzten Host, Anzahl nutzbarer Hosts.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n/27 = 255.255.255.224, Schrittweite 256-224 = 32\nGrenzen im 4. Oktett: 0,32,64,96,128,160,...\n.155 liegt im Block 128-159\n\nNetzadresse:  10.20.30.128\nBroadcast:    10.20.30.159\nErster Host:  10.20.30.129\nLetzter Host: 10.20.30.158\nNutzbare Hosts: 2^5 - 2 = 30",
            },
            { type: "heading", value: "FLSM, VLSM und Supernetting – die Begriffe im Überblick" },
            {
              type: "text",
              value:
                "FLSM (Fixed Length Subnet Mask) teilt ein Netz in GLEICH große Subnetze – einfach zu planen, verschwendet aber Adressen, wenn die Teilnetze unterschiedlich groß sind. VLSM (Variable Length Subnet Mask) vergibt passgenaue, unterschiedlich große Subnetze (größtes zuerst!) – der Standard in Prüfungsaufgaben mit mehreren Abteilungen. Supernetting (Route Aggregation/CIDR) geht den umgekehrten Weg: mehrere zusammenhängende Netze werden zu EINEM größeren Präfix zusammengefasst, z. B. 192.168.0.0/24 bis 192.168.3.0/24 → 192.168.0.0/22. Zweck: kleinere Routingtabellen und übersichtliche Firewall-Regeln. Bedingung: Die Netze müssen zusammenhängend und die Zusammenfassung an einer Zweierpotenz-Grenze ausgerichtet sein.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Subnetz teilen" },
            {
              type: "text",
              value:
                "Teile 192.168.10.0/24 in 4 gleich große Subnetze. Gib Präfix und die 4 Netzadressen an.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n4 Subnetze brauchen 2 zusätzliche Bits -> /26\n/26 = 255.255.255.192, Schrittweite 64\nNetz 1: 192.168.10.0/26   (Hosts .1-.62)\nNetz 2: 192.168.10.64/26  (Hosts .65-.126)\nNetz 3: 192.168.10.128/26 (Hosts .129-.190)\nNetz 4: 192.168.10.192/26 (Hosts .193-.254)\nJe 62 nutzbare Hosts.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Klassen/privat" },
            { type: "text", value: "Nenne die privaten IPv4-Bereiche (RFC 1918)." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n10.0.0.0    - 10.255.255.255   (10.0.0.0/8)\n172.16.0.0  - 172.31.255.255  (172.16.0.0/12)\n192.168.0.0 - 192.168.255.255 (192.168.0.0/16)\nDiese werden nicht im Internet geroutet, daher NAT\nfür den Internetzugang nötig.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Netzklasse" },
            { type: "text", value: "Wie viele /24-Subnetze passen in ein /20-Netz?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n/20 hat 12 Hostbits, /24 hat 8 Hostbits.\nDifferenz: 24-20 = 4 zusätzliche Netzbits.\n2^4 = 16 Subnetze.\nProbe: /20 = 4096 Adressen, /24 = 256 Adressen.\n4096/256 = 16.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Private Netze" },
            { type: "text", value: "Nenne die drei privaten IPv4-Adressbereiche mit Präfix." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n10.0.0.0/8       (Klasse A, 16,7 Mio Adressen)\n172.16.0.0/12    (Klasse B, ca. 1 Mio)\n192.168.0.0/16   (Klasse C, 65.536)\nDefiniert in RFC 1918. Diese Adressen werden im\nInternet NICHT geroutet (NAT nötig).",
            },
            { type: "heading", value: "Beispiel 1: Subnetting /26 berechnen (AP1-Klassiker)" },
            {
              type: "text",
              value:
                "Netz 192.168.100.0/26: Subnetzmaske 255.255.255.192 (= 11111111.11111111.11111111.11000000). Hostbits: 6 → 2^6 - 2 = 62 nutzbare Hosts. Netzadresse: 192.168.100.0. Erster Host: 192.168.100.1. Letzter Host: 192.168.100.62. Broadcast: 192.168.100.63. Nächstes Subnetz: 192.168.100.64/26.",
            },
            { type: "heading", value: "Beispiel 2: Wie viele Subnetze brauche ich?" },
            {
              type: "text",
              value:
                "Firma hat 4 Abteilungen mit je max. 25 PCs. Ein /24 Netz (254 Hosts) soll aufgeteilt werden. 25 Hosts brauchen min. 5 Hostbits (2^5-2=30 Hosts). Bleiben 3 Netzwerkbits → 2^3 = 8 Subnetze möglich. Subnetzmaske: /27 (255.255.255.224). Subnetze: .0/27, .32/27, .64/27, .96/27, .128/27, .160/27, .192/27, .224/27.",
            },
            { type: "heading", value: "Beispiel 3: Private IP-Bereiche im Unternehmen" },
            {
              type: "text",
              value:
                "Klasse A privat: 10.0.0.0/8 (16 Mio Hosts) – Großunternehmen, Rechenzentren. Klasse B privat: 172.16.0.0/12 (172.16-172.31.x.x, je 65k Hosts) – mittlere Unternehmen. Klasse C privat: 192.168.0.0/16 (65k Hosts, typisch /24 = 254) – KMU, Heimnetzwerke. Diese Adressen sind im Internet nicht routbar (RFC 1918).",
            },
          ],
          quiz: [
            {
              id: "imp_lf3-gn-3_0",
              q: "Hosts in /26?",
              options: ["30", "62", "126", "254"],
              correct: 1,
              explain: "2^(32-26) - 2 = 64 - 2 = 62.",
            },
            {
              id: "imp_lf3-gn-3_1",
              q: "APIPA-Bereich?",
              options: ["10.0.0.0", "172.16.0.0", "169.254.0.0", "192.168.0.0"],
              correct: 2,
              explain: "169.254.0.0/16 bei fehlendem DHCP.",
            },
            {
              id: "imp_lf3-gn-3_2",
              q: "/26 Subnetzmaske?",
              options: ["255.255.255.224", "255.255.255.128", "255.255.255.240", "255.255.255.192"],
              correct: 3,
              explain: "/26 = 255.255.255.192 (Schrittweite 64).",
            },
            {
              id: "imp_lf3-gn-3_3",
              q: "192.168.1.0/24 in 8 Subnetze: Neuer Präfix?",
              options: ["/25", "/27", "/26", "/28"],
              correct: 1,
              explain: "8 Subnetze = 3 Bits (2^3=8). /24+3 = /27.",
            },
            {
              id: "imp_lf3-gn-3_4",
              q: "Broadcast-Adresse /24?",
              options: ["x.x.x.1", "x.x.x.0", "x.x.x.255", "x.x.x.254"],
              correct: 2,
              explain: "Letzte Adresse im Subnetz = Broadcast (.255 bei /24).",
            },
            {
              id: "imp_lf3-gn-3_5",
              q: "CIDR /16 = Maske?",
              options: ["255.255.0.0", "255.0.0.0", "255.255.255.128", "255.255.255.0"],
              correct: 0,
              explain: "/16 = 255.255.0.0.",
            },
            {
              id: "imp_lf3-gn-3_6",
              q: "Netzadresse /24?",
              options: ["x.x.x.255", "x.x.x.128", "x.x.x.0 (erste, nicht nutzbar)", "x.x.x.1"],
              correct: 2,
              explain: "Erste Adresse.",
            },
            {
              id: "imp_lf3-gn-3_7",
              q: "Hosts /30?",
              options: ["4", "2", "6", "0"],
              correct: 1,
              explain: "Point-to-Point.",
            },
            {
              id: "imp_lf3-gn-3_8",
              q: "172.16.0.0 bis?",
              options: ["172.31.255.255", "172.32.0.0", "172.16.255.255", "172.255.255.255"],
              correct: 0,
              explain: "/12 Bereich.",
            },
            {
              id: "imp_lf3-gn-3_9",
              q: "APIPA wann?",
              options: ["Manuell", "Immer", "Kein DHCP → 169.254.x.x", "Statisch"],
              correct: 2,
              explain: "Kein DHCP erreichbar.",
            },
            {
              id: "imp_lf3-gn-3_10",
              q: "Wie viele Hosts hat ein /26-Netz?",
              options: ["62", "26", "64", "256"],
              correct: 0,
              explain: "/26 = 6 Hostbits → 2^6 - 2 = 62 nutzbare Hosts.",
            },
            {
              id: "imp_lf3-gn-3_11",
              q: "Was ist die Subnetzmaske für /24?",
              options: ["255.255.0.0", "255.255.255.0", "255.255.255.192", "255.255.255.128"],
              correct: 1,
              explain: "/24 = 24 Netzwerkbits = 255.255.255.0.",
            },
            {
              id: "imp_lf3-gn-3_12",
              q: "Welche IP-Adresse ist privat?",
              options: ["203.0.113.5", "1.1.1.1", "8.8.8.8", "172.20.5.1"],
              correct: 3,
              explain: "172.16.0.0 - 172.31.255.255 ist privater Bereich (Klasse B).",
            },
            {
              id: "imp_lf3-gn-3_13",
              q: "Was ist die Broadcast-Adresse von 192.168.1.0/24?",
              options: ["192.168.1.254", "192.168.1.255", "192.168.1.1", "192.168.1.0"],
              correct: 1,
              explain: "Broadcast = letzte Adresse im Netz: Bei /24 ist das .255.",
            },
            {
              id: "imp_lf3-gn-3_14",
              q: "Wie lautet 255.255.255.240 in CIDR?",
              options: ["/30", "/28", "/24", "/26"],
              correct: 1,
              explain: "240 = 11110000 → 4 Netzwerkbits in letztem Oktett → 24+4 = /28.",
            },
            {
              id: "imp_lf3-gn-3_15",
              q: "Wie viele Hosts hat ein /30-Netz?",
              options: ["6", "2", "4", "30"],
              correct: 1,
              explain:
                "/30 = 2 Hostbits → 2^2 - 2 = 2 Hosts. Typisch für Point-to-Point-Links (Router↔Router).",
            },
            {
              id: "imp_lf3-gn-3_16",
              q: "Was ist eine Netzadresse?",
              options: [
                "Die erste nutzbare Adresse",
                "Die DNS-Adresse",
                "Die Adresse mit allen Hostbits auf 0",
                "Die Gateway-Adresse",
              ],
              correct: 2,
              explain:
                "Identifiziert das Netz. Netzadresse: Alle Hostbits = 0. Beispiel: 192.168.1.0/24. Nicht an Hosts vergeben!",
            },
            {
              id: "imp_lf3-gn-3_17",
              q: "Welches ist die Loopback-Adresse?",
              options: ["0.0.0.0", "192.168.0.1", "127.0.0.1", "255.255.255.255"],
              correct: 2,
              explain: "127.0.0.1 (localhost): Loopback – verweist auf den eigenen Rechner.",
            },
            {
              id: "imp_lf3-gn-3_18",
              q: "Was macht CIDR?",
              options: [
                "MAC-Adressen verwalten",
                "Classless Inter-Domain Routing",
                "DNS-Auflösung",
                "IP-Adressen verschlüsseln",
              ],
              correct: 1,
              explain:
                "Flexible Subnetzgrößen statt fester Klassen. CIDR ersetzt das starre Klassensystem (A/B/C) durch variable Präfix-Längen (/1 bis /32).",
            },
            {
              id: "imp_lf3-gn-3_19",
              q: "192.168.10.130/25 – In welchem Subnetz liegt diese Adresse?",
              options: [
                "192.168.10.64/25",
                "192.168.10.192/25",
                "192.168.10.128/25",
                "192.168.10.0/25",
              ],
              correct: 2,
              explain:
                "/25: Subnetze bei .0 und .128. 130 > 128 → liegt im Subnetz 192.168.10.128/25.",
            },
          ],
        },
        {
          id: "lf3-gn-4",
          title: "Kabeltypen & Stecker",
          content: [
            { type: "heading", value: "Twisted Pair (Kupfer)" },
            {
              type: "text",
              value:
                "Verdrillte Kupferaderpaare, Standard für LAN. Cat 5e: 1 Gbit/s auf 100m (Minimum für Gigabit). Cat 6: 10 Gbit/s auf 55m, 1G auf 100m. Cat 6a: 10 Gbit/s auf 100m (Standard für Neuinstallation). Cat 7: 10 Gbit/s, bessere Schirmung (S/FTP), proprietärer Stecker (GG45/Tera). Cat 8: 25-40 Gbit/s auf 30m, für Rechenzentren. Stecker: RJ-45 (8P8C). Max. Segmentlänge immer 100m (90m Festverkabelung + 2x5m Patchkabel).",
            },
            { type: "heading", value: "Schirmung" },
            {
              type: "text",
              value:
                "UTP (Unshielded): Keine Schirmung, günstig, für Büro. FTP/STP: Folien-/Geflechtschirmung um alle Paare. S/FTP: Gesamtschirmung + Einzelpaar-Folierung, beste Abschirmung. Je mehr Schirmung, desto weniger Störeinflüsse (EMV), aber teurer und unflexibler.",
            },
            { type: "heading", value: "Glasfaser (LWL)" },
            {
              type: "text",
              value:
                "Multimode (OM1-OM5, 50/62,5 µm Kern): LED oder VCSEL, bis 300 m bei 10G (OM3), 400 m (OM4), günstiger, für Gebäude-Backbone. Singlemode (OS1/OS2, 9 µm Kern): Laser, 10-100+ km, teurer, für WAN/Standortverbindungen. Stecker: LC (compact, Standard Rechenzentrum), SC (größer, snap-in), ST (veraltet, Bajonett), MPO/MTP (Multicore, 40/100G).",
            },
            { type: "heading", value: "Wann welches Kabel?" },
            {
              type: "text",
              value:
                "Arbeitsplatz → Patchpanel: Kupfer Cat 6a. Etagenverteiler → Gebäudeverteiler: Multimode OM3/OM4. Gebäude → Gebäude (>100m): Singlemode. Rechenzentrum Server: Kupfer (kurz) oder Multimode (40/100G). Crossover-Kabel: Früher für Switch↔Switch, heute Auto-MDI/X (automatische Erkennung).",
            },
            { type: "heading", value: "Übungsaufgabe 1: Kabelwahl" },
            {
              type: "text",
              value: "Welches Kupferkabel mind. für 1 Gbit/s über 100 m, und welche Steckerform?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nMindestens Cat 5e (besser Cat 6) Twisted-Pair-Kabel,\nbis 100 m für Gigabit Ethernet. Stecker: RJ-45.\nCat 6/6a ermöglichen 10 Gbit/s (10GBASE-T), Cat 6a\nzuverlässig bis 100 m.",
            },
            { type: "heading", value: "Übungsaufgabe 2: LWL" },
            {
              type: "text",
              value: "Wann nutzt man Glasfaser (LWL) statt Kupfer? Unterschied Mono-/Multimode?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nLWL bei großen Entfernungen, hohen Datenraten und\nStörsicherheit (kein EMV-Problem, keine Erdung).\nSinglemode (gelb): kleiner Kern, Laser, sehr große\nReichweite (km).\nMultimode (orange/aqua): größerer Kern, LED,\nkürzere Distanzen (Gebäude/Campus).",
            },
            { type: "heading", value: "Übungsaufgabe 3: Schirmung" },
            { type: "text", value: "Was bedeutet die Bezeichnung S/FTP bei Netzwerkkabeln?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nS/FTP = Gesamtschirm aus Geflecht (S) plus jedes\nAdernpaar einzeln mit Folie geschirmt (FTP).\nBessere Abschirmung gegen Störungen (Crosstalk,\nEMV) als ungeschirmtes U/UTP. Sinnvoll in\nstörintensiven Umgebungen (Industrie).",
            },
            { type: "heading", value: "Übungsaufgabe 1: Kabelkategorien" },
            { type: "text", value: "Welches Kabel für Gigabit-Ethernet: Cat5, Cat5e oder Cat6?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nMindestens Cat5e. Cat5 reicht nur für 100 Mbit/s.\nCat5e: bis 1 Gbit/s.\nCat6: ebenfalls 1 Gbit/s, aber bessere Abschirmung\nund bis zu 10 Gbit/s bei kurzen Strecken (bis 55m).\nCat6a: 10 Gbit/s bis 100m.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Steckertypen" },
            {
              type: "text",
              value: "Nenne die gängigen Stecker für: a) Kupfer-Ethernet, b) Glasfaser.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Kupfer: RJ-45 (8P8C) - der Standard-LAN-Stecker.\nb) Glasfaser: LC (klein, häufigster in Rechenzentren),\nSC (etwas größer, Snap-in), ST (älter, Bajonett).\nModern meist LC auf SFP/SFP+-Transceiver.",
            },
            { type: "heading", value: "Beispiel 1: Cat5e vs. Cat6 vs. Cat7" },
            {
              type: "text",
              value:
                "Cat5e: Bis 1 Gbit/s, 100m, Büro-Standard, günstig (~0,30 EUR/m). Cat6: Bis 10 Gbit/s auf 55m (Cat6a: 100m), besser geschirmt. Cat7: 10 Gbit/s auf 100m, S/FTP vollgeschirmt, aber proprietärer Stecker (GG45/TERA). Empfehlung Neubau: Cat6a – zukunftssicher für 10GbE bei vollem 100m-Support und RJ45-kompatibel.",
            },
            { type: "heading", value: "Beispiel 2: Glasfaser Singlemode vs. Multimode" },
            {
              type: "text",
              value:
                "Multimode (OM3/OM4): 50µm Kern, LED oder VCSEL, bis 300-400m bei 10GbE. Günstigere Transceiver, orange/aqua Kabel. Für innerhalb Gebäude/Campus. Singlemode (OS2): 9µm Kern, Laser, bis 80km+. Teurere Transceiver, gelbes Kabel. Für WAN-Strecken, zwischen Gebäuden. Singlemode ist langfristig kosteneffizienter bei längeren Strecken.",
            },
            { type: "heading", value: "Beispiel 3: Stecker im Alltag: RJ45, LC, SC" },
            {
              type: "text",
              value:
                "RJ45: Standard-Ethernet-Stecker für Kupfer, 8 Pins (8P8C). Clip oben zum Einrasten. LC: Kleiner Glasfaser-Stecker (Lucent Connector), Standard in Rechenzentren, platzsparend. SC: Größerer Glasfaser-Stecker (Subscriber Connector), Push-In/Push-Out. Tipp: Bei Glasfaser immer auf Singlemode vs. Multimode achten – PC-Stecker passt physisch in SM und MM!",
            },
          ],
          quiz: [
            {
              id: "imp_lf3-gn-4_0",
              q: "Cat 6a = 10G auf?",
              options: ["55m", "200m", "100m", "550m"],
              correct: 2,
              explain: "Cat 6a: 10 Gbit/s auf 100m.",
            },
            {
              id: "imp_lf3-gn-4_1",
              q: "Singlemode Kerndurchmesser?",
              options: ["62,5 µm", "9 µm", "125 µm", "50 µm"],
              correct: 1,
              explain: "9 µm.",
            },
            {
              id: "imp_lf3-gn-4_2",
              q: "Max. Segmentlänge Kupfer?",
              options: ["50m", "200m", "550m", "100m"],
              correct: 3,
              explain: "100m (90m Festverkabelung + 2x5m Patchkabel).",
            },
            {
              id: "imp_lf3-gn-4_3",
              q: "Gebäude-zu-Gebäude über 100m?",
              options: ["Cat 8", "Singlemode Glasfaser", "Cat 6a", "Koaxial"],
              correct: 1,
              explain: "Über 100m: Glasfaser (Singlemode für lange Strecken).",
            },
            {
              id: "imp_lf3-gn-4_4",
              q: "S/FTP bedeutet?",
              options: [
                "Keine Schirmung",
                "Gesamtschirm + Einzelpaar-Folierung",
                "Nur Folierung",
                "Nur Gesamtschirm",
              ],
              correct: 1,
              explain: "S/FTP: Gesamtschirm (Geflecht) + Folierung jedes einzelnen Paares.",
            },
            {
              id: "imp_lf3-gn-4_5",
              q: "PoE = ?",
              options: [
                "Port of Entry",
                "Packet over Ethernet",
                "Power over Ethernet",
                "Protocol of Exchange",
              ],
              correct: 2,
              explain: "Strom über das Ethernet-Kabel: für APs, IP-Telefone, Kameras.",
            },
            {
              id: "imp_lf3-gn-4_6",
              q: "Crossover-Kabel heute nötig?",
              options: [
                "Ja, immer",
                "Nein, Auto-MDI/X erkennt automatisch",
                "Nur für Router",
                "Nur für Server",
              ],
              correct: 1,
              explain: "Auto-MDI/X: Moderne Switches erkennen die Kabelart automatisch.",
            },
            {
              id: "imp_lf3-gn-4_7",
              q: "OM3 Glasfaser: Typ?",
              options: ["Koaxial", "Kupfer", "Multimode (für Gebäude-Backbone)", "Singlemode"],
              correct: 2,
              explain: "OM3: Multimode, bis 300m bei 10G.",
            },
            {
              id: "imp_lf3-gn-4_8",
              q: "Cat 7: Stecker?",
              options: ["LC", "SC", "RJ-45", "GG45/Tera (proprietär)"],
              correct: 3,
              explain: "Cat 7: Eigener Stecker, nicht Standard-RJ45.",
            },
            {
              id: "imp_lf3-gn-4_9",
              q: "Multimode: Lichtquelle?",
              options: ["LED oder VCSEL", "Kerze", "Laser", "Infrarot"],
              correct: 0,
              explain: "Multimode nutzt LED/VCSEL, günstiger als Singlemode-Laser.",
            },
            {
              id: "imp_lf3-gn-4_10",
              q: "Bis zu welcher Distanz funktioniert Cat6a bei 10 GbE?",
              options: ["300m", "200m", "55m", "100m"],
              correct: 3,
              explain: "Cat6a: 10 Gbit/s auf volle 100m. Cat6 (ohne a) nur 55m bei 10GbE.",
            },
            {
              id: "imp_lf3-gn-4_11",
              q: "Welche Glasfaser-Art eignet sich für Strecken über 500m?",
              options: ["Multimode OM4", "Cat7", "Multimode OM3", "Singlemode OS2"],
              correct: 3,
              explain:
                "Singlemode: Bis 80km+ Reichweite, für lange Strecken zwischen Gebäuden/Standorten.",
            },
            {
              id: "imp_lf3-gn-4_12",
              q: "Was bedeutet S/FTP?",
              options: [
                "Gesamtschirm (S) + einzeln foliengeschirmte Paare (FTP)",
                "Single/Full Twisted Pair nach Kategorie 7",
                "Shielded Fiber Transfer Protocol für LWL-Strecken",
                "Secure File Transfer Protocol über SSH (Port 22)",
              ],
              correct: 0,
              explain:
                "S/FTP: Gesamtschirm (Geflecht/Folie) + jedes Adernpaar einzeln mit Folie geschirmt.",
            },
            {
              id: "imp_lf3-gn-4_13",
              q: "Wie viele Adern hat ein Ethernet-Kabel?",
              options: ["4", "6", "2", "8 (4 Paare)"],
              correct: 3,
              explain: "Ethernet-Kabel: 8 Adern in 4 verdrillten Paaren (Twisted Pair).",
            },
            {
              id: "imp_lf3-gn-4_14",
              q: "Was ist ein Patchpanel?",
              options: [
                "Ein WLAN-Controller, der die Access Points im Gebäude zentral konfiguriert",
                "Ein Switch, der die ankommenden Verlegekabel aktiv vermittelt und Frames weiterleitet",
                "Ein Router, der die Etagenverkabelung in verschiedene IP-Subnetze aufteilt",
                "Anschlussfeld im Netzwerkschrank zur Verbindung von Verlegekabeln mit Patchkabeln",
              ],
              correct: 3,
              explain:
                "Patchpanel: Zentraler Anschlusspunkt – hinten fest verdrahtet, vorne mit Patchkabeln flexibel verbunden.",
            },
            {
              id: "imp_lf3-gn-4_15",
              q: "Welcher Glasfaser-Stecker ist Standard im Rechenzentrum?",
              options: ["ST", "LC (kompakt, Duplex)", "SC", "RJ45"],
              correct: 1,
              explain: "LC: Klein, Duplex-fähig, hohe Portdichte – Standard in modernen RZs.",
            },
            {
              id: "imp_lf3-gn-4_16",
              q: "Was ist ein SFP-Modul?",
              options: [
                "Small Form-factor Pluggable",
                "Ein Kabeltyp",
                "Ein Protokoll",
                "Ein Switch",
              ],
              correct: 0,
              explain:
                "Einsteckbarer Transceiver für Glasfaser/Kupfer. SFP: Austauschbares Modul in Switches/Routern für Glasfaser oder Kupfer.",
            },
            {
              id: "imp_lf3-gn-4_17",
              q: "Welche Kabelkategorie hat die beste Schirmung?",
              options: ["Cat5e", "Cat6", "Cat7", "Cat3"],
              correct: 2,
              explain: "Cat7: S/FTP Gesamtschirm + Paarschirmung, höchste Störsicherheit.",
            },
            {
              id: "imp_lf3-gn-4_18",
              q: "Was ist Crosstalk bei Netzwerkkabeln?",
              options: [
                "Störung durch Signalübersprung zwischen benachbarten Adern",
                "Signalverlust durch Überschreiten der maximalen Kabellänge",
                "Ein mechanischer Kabelbruch durch zu enge Biegeradien",
                "Eine falsch gesetzte IP-Konfiguration am Endgerät",
              ],
              correct: 0,
              explain:
                "Crosstalk (Nebensprechen): Signal eines Paares stört benachbartes Paar. Schirmung reduziert das.",
            },
            {
              id: "imp_lf3-gn-4_19",
              q: "Was ist die maximale Länge einer Kupfer-Ethernet-Strecke?",
              options: ["1000m", "50m", "100m", "500m"],
              correct: 2,
              explain:
                "100m ist die max. Segmentlänge für Kupfer-Ethernet (10BASE-T bis 10GBASE-T).",
            },
          ],
        },
        {
          id: "lf3-gn-5",
          title: "Netzwerk-Befehle",
          content: [
            { type: "heading", value: "Diagnose-Befehle Windows / Linux" },
            {
              type: "code",
              value:
                "ipconfig /all          # Win: IP, MAC, DNS, DHCP, Gateway\nip addr show / ifconfig # Linux: IP-Konfiguration\nping 192.168.1.1       # ICMP Echo, Erreichbarkeit + Latenz\nping -t 8.8.8.8        # Win: Dauerping (Strg+C beendet)\ntracert 8.8.8.8        # Win: Route verfolgen (Hops)\ntraceroute 8.8.8.8     # Linux: Route verfolgen\nnslookup google.de     # DNS-Auflösung (Name->IP)\ndig google.de          # Linux: DNS detailliert\narp -a                 # ARP-Tabelle (IP<->MAC)\nnetstat -an            # Win: Offene Verbindungen/Ports\nss -tulpn              # Linux: Offene Ports mit Prozess\nipconfig /release      # DHCP-Lease freigeben\nipconfig /renew        # Neue IP vom DHCP anfordern\nipconfig /flushdns     # DNS-Cache leeren\nroute print / ip route # Routing-Tabelle anzeigen\npathping 8.8.8.8       # Win: Kombination aus ping+tracert",
            },
            { type: "heading", value: "Wann welchen Befehl?" },
            {
              type: "text",
              value:
                "Keine Verbindung? -> ipconfig/ip addr (IP vorhanden?), ping Gateway, ping DNS, ping extern. DNS geht nicht? -> nslookup/dig. Langsame Verbindung? -> tracert/pathping (wo ist die Verzögerung?). Unbekanntes Gerät im Netz? -> arp -a. Port offen? -> netstat/ss. DHCP-Problem? -> release + renew.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Befehlswahl" },
            {
              type: "text",
              value:
                "Welcher Befehl zeigt unter Windows die vollständige IP-Konfiguration inkl. MAC und DNS?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nipconfig /all\nZeigt IP-Adresse, Subnetzmaske, Gateway, MAC-Adresse\n(Physische Adresse), DHCP- und DNS-Server.\nUnter Linux: ip addr bzw. ifconfig.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Erreichbarkeit" },
            {
              type: "text",
              value:
                "Mit welchem Befehl prüfst du, ob ein Host antwortet, und womit den kompletten Weg dorthin?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nErreichbarkeit: ping <ziel>\nWeg/Hops: tracert <ziel> (Windows) bzw.\ntraceroute <ziel> (Linux).\ntracert zeigt jeden Router auf dem Weg samt\nLaufzeit - gut zur Eingrenzung, wo es klemmt.",
            },
            { type: "heading", value: "Übungsaufgabe 3: DNS-Test" },
            { type: "text", value: "Wie testest du gezielt die Namensauflösung für eine Domain?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nnslookup example.de\n(oder dig example.de unter Linux)\nGibt die aufgelöste IP und den antwortenden\nDNS-Server zurück. Geht ping auf die IP, aber nicht\nauf den Namen, liegt das Problem beim DNS.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Befehle zuordnen" },
            {
              type: "text",
              value:
                "Welcher Befehl für: a) eigene IP anzeigen, b) Erreichbarkeit testen, c) Route zum Ziel verfolgen?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Windows: ipconfig /all | Linux: ip a\nb) ping [Ziel-IP/Name]\nc) Windows: tracert | Linux: traceroute\nBonusbefehle: nslookup (DNS), arp -a (ARP-Tabelle),\nnetstat / ss (Verbindungen/Ports).",
            },
            { type: "heading", value: "Übungsaufgabe 2: ping interpretieren" },
            {
              type: "text",
              value:
                "ping 192.168.1.1 gibt 'Zeitüberschreitung' zurück. Was sind mögliche Ursachen?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n- Ziel nicht erreichbar (aus/kein Netz)\n- Firewall blockiert ICMP (häufig!)\n- Falsche IP oder Subnetz\n- Kabel defekt / kein Link\n- Gateway-Problem (anderes Subnetz)\nWichtig: 'kein ping' heißt NICHT zwingend 'offline' -\nFirewalls blocken oft ICMP.",
            },
            { type: "heading", value: "Übungsaufgabe 3: nslookup" },
            {
              type: "text",
              value:
                "Du gibst 'nslookup example.de' ein und bekommst eine IP zurück. Was wurde getestet und was NICHT?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nGetestet: ob der DNS-Server den Namen in eine IP\nauflösen kann (DNS-Auflösung funktioniert).\nNICHT getestet: ob der Webserver erreichbar ist,\nob der Dienst läuft, ob Firewall-Regeln stimmen.\nnslookup prüft NUR die Namensauflösung.",
            },
            { type: "heading", value: "Beispiel 1: ipconfig / ifconfig Diagnose" },
            {
              type: "text",
              value:
                "Windows: ipconfig /all zeigt IP-Adresse, Subnetzmaske, Gateway, DNS-Server, MAC-Adresse, DHCP-Server. Erster Schritt bei Netzwerkproblemen: Ist die IP korrekt? Steht dort 169.254.x.x = APIPA → DHCP-Server nicht erreichbar! ipconfig /release + /renew fordert neue IP vom DHCP-Server an. Linux-Äquivalent: ip addr show, ip route.",
            },
            { type: "heading", value: "Beispiel 2: tracert/traceroute zur Fehlersuche" },
            {
              type: "text",
              value:
                "tracert 8.8.8.8 zeigt jeden Router (Hop) auf dem Weg zum Ziel mit Antwortzeiten. Hop 1: 192.168.1.1 (eigener Router, <1ms). Hop 2: 10.0.0.1 (Provider-Gateway, 5ms). Hop 3: * * * (Timeout = Router antwortet nicht auf ICMP). Hop 10: 8.8.8.8 (Ziel, 15ms). Wenn ab Hop 3 alles Timeout → Problem beim Provider.",
            },
            { type: "heading", value: "Beispiel 3: nslookup / dig für DNS" },
            {
              type: "text",
              value:
                "nslookup example.com: Zeigt welche IP der DNS-Server für den Domainnamen zurückgibt. nslookup -type=MX example.com: Zeigt den Mailserver (MX-Record). Praxisbeispiel: Webseite nicht erreichbar → nslookup zeigt falsche IP → DNS-Problem, nicht Webserver-Problem. Auf Linux: dig example.com +short für kompakte Ausgabe.",
            },
          ],
          quiz: [
            {
              id: "imp_lf3-gn-5_0",
              q: "IP-Konfiguration unter Windows?",
              options: ["ifconfig", "ip addr", "netstat", "ipconfig /all"],
              correct: 3,
              explain: "ipconfig /all zeigt IP, MAC, DNS, DHCP, Gateway.",
            },
            {
              id: "imp_lf3-gn-5_1",
              q: "DNS-Cache leeren Windows?",
              options: ["dns flush", "clear dns", "ipconfig /flushdns", "nslookup /clear"],
              correct: 2,
              explain: "ipconfig /flushdns.",
            },
            {
              id: "imp_lf3-gn-5_2",
              q: "Linux: Offene Ports mit Prozess anzeigen?",
              options: ["ss -tulpn", "ports --list", "netstat -p", "lsof -n"],
              correct: 0,
              explain: "ss -tulpn zeigt TCP/UDP-Ports mit Prozessnamen.",
            },
            {
              id: "imp_lf3-gn-5_3",
              q: "pathping kombiniert?",
              options: ["tracert + arp", "ping + nslookup", "netstat + ss", "ping + tracert"],
              correct: 3,
              explain: "pathping: ping und tracert mit Statistik pro Hop.",
            },
            {
              id: "imp_lf3-gn-5_4",
              q: "arp -a zeigt?",
              options: ["Routing", "DNS", "IP-zu-MAC-Tabelle", "Ports"],
              correct: 2,
              explain: "ARP-Tabelle: IP-zu-MAC-Zuordnung.",
            },
            {
              id: "imp_lf3-gn-5_5",
              q: "Troubleshooting Schritt 1?",
              options: [
                "Google",
                "Kabel tauschen",
                "IP vorhanden? (ipconfig)",
                "Server neustarten",
              ],
              correct: 2,
              explain: "Erst prüfen, ob IP-Adresse vorhanden.",
            },
            {
              id: "imp_lf3-gn-5_6",
              q: "nslookup Ergebnis: Non-authoritative?",
              options: ["Fehler", "Server down", "Falsche IP", "Antwort aus Cache"],
              correct: 3,
              explain:
                "Nicht direkt vom zuständigen DNS. Non-authoritative: Antwort kam aus dem DNS-Cache.",
            },
            {
              id: "imp_lf3-gn-5_7",
              q: "route print (Windows)?",
              options: ["Drucker", "DNS", "IP-Config", "Routing-Tabelle anzeigen"],
              correct: 3,
              explain: "Zeigt die aktuelle Routing-Tabelle.",
            },
            {
              id: "imp_lf3-gn-5_8",
              q: "ipconfig /flushdns?",
              options: [
                "IP erneuern",
                "Alle Verbindungen trennen",
                "Firewall reset",
                "DNS-Cache leeren",
              ],
              correct: 3,
              explain: "Löscht den lokalen DNS-Cache.",
            },
            {
              id: "imp_lf3-gn-5_9",
              q: "netstat -b (Windows)?",
              options: [
                "Bandbreite",
                "Backup",
                "Zeigt welches Programm welchen Port nutzt",
                "Nur Ports",
              ],
              correct: 2,
              explain: "-b zeigt den Prozessnamen zu jedem Port.",
            },
            {
              id: "imp_lf3-gn-5_10",
              q: "Was zeigt der Befehl 'ping 192.168.1.1'?",
              options: [
                "Die MAC-Adresse der Netzwerkkarte des Zielgeräts",
                "Ob das Ziel erreichbar ist + Antwortzeit (ICMP Echo)",
                "Alle Router (Hops) auf dem Weg zum Zielgerät",
                "Die im DNS hinterlegten Einträge der Zieladresse",
              ],
              correct: 1,
              explain: "Ping sendet ICMP Echo-Request und misst die Antwortzeit.",
            },
            {
              id: "imp_lf3-gn-5_11",
              q: "Was bedeutet 'Zielhost nicht erreichbar' bei ping?",
              options: ["DNS-Fehler", "Server ist aus", "Kein Internet", "Kein Routing zum Ziel"],
              correct: 3,
              explain:
                "Eigener Router kennt keinen Weg. Zielhost nicht erreichbar: Router auf dem Weg hat keine Route zum Zielnetz.",
            },
            {
              id: "imp_lf3-gn-5_12",
              q: "Welcher Befehl zeigt die Routing-Tabelle?",
              options: ["route print (Win) / ip route (Linux)", "nslookup", "ipconfig", "ping -t"],
              correct: 0,
              explain: "route print (Win) oder ip route show (Linux) zeigt die Routing-Tabelle.",
            },
            {
              id: "imp_lf3-gn-5_13",
              q: "Was ist eine APIPA-Adresse?",
              options: [
                "Die Adresse des zuständigen DNS-Servers im lokalen Netz",
                "169.254.x.x – automatisch, wenn DHCP-Server nicht erreichbar",
                "Eine vom Administrator fest vergebene statische IP-Adresse",
                "Eine IPv6-Adresse aus dem link-lokalen Bereich fe80::/10",
              ],
              correct: 1,
              explain:
                "APIPA (169.254.0.0/16): Windows vergibt diese, wenn kein DHCP-Server antwortet.",
            },
            {
              id: "imp_lf3-gn-5_14",
              q: "Welcher Befehl löst einen Domainnamen in eine IP auf?",
              options: ["arp -a", "tracert", "ping", "nslookup / dig"],
              correct: 3,
              explain:
                "nslookup (Win/Linux) oder dig (Linux) fragen den DNS-Server nach IP-Adressen.",
            },
            {
              id: "imp_lf3-gn-5_15",
              q: "Was zeigt 'arp -a'?",
              options: [
                "Laufende Dienste",
                "DNS-Cache",
                "ARP-Cache: Zuordnung IP ↔ MAC-Adresse",
                "Offene Ports",
              ],
              correct: 2,
              explain: "arp -a zeigt bekannte Zuordnungen von IP-Adressen zu MAC-Adressen.",
            },
            {
              id: "imp_lf3-gn-5_16",
              q: "Was macht 'netstat -an'?",
              options: [
                "Den lokalen DNS-Cache leeren (wie ipconfig /flushdns)",
                "Die physische Verbindung des Netzwerkkabels testen",
                "Alle aktiven Netzwerkverbindungen und offene Ports anzeigen",
                "Alle Netzwerkadapter deaktivieren und neu starten",
              ],
              correct: 2,
              explain:
                "netstat -an: Alle Verbindungen (ESTABLISHED, LISTENING etc.) mit Ports und IP-Adressen.",
            },
            {
              id: "imp_lf3-gn-5_17",
              q: "Welchen Befehl nutzt man um den DNS-Cache zu löschen?",
              options: [
                "nslookup /clear",
                "ipconfig /flushdns",
                "dns --flush",
                "ipconfig /release",
              ],
              correct: 1,
              explain: "ipconfig /flushdns (Win): Löscht den lokalen DNS-Cache bei DNS-Problemen.",
            },
            {
              id: "imp_lf3-gn-5_18",
              q: "Was zeigt tracert/traceroute?",
              options: [
                "Die MAC-Adressen aller Switches entlang des Pfades",
                "Die konfigurierten DNS-Server des lokalen Systems",
                "Lediglich, ob das Ziel erreichbar ist, ohne Weginformationen",
                "Jeden Hop (Router) auf dem Weg zum Ziel mit Antwortzeiten",
              ],
              correct: 3,
              explain:
                "Traceroute zeigt den Netzwerkpfad: Jeder Router (Hop) zwischen Quelle und Ziel.",
            },
            {
              id: "imp_lf3-gn-5_19",
              q: "Windows: Wie erneuert man die DHCP-Lease?",
              options: [
                "nslookup /renew nach vorherigem nslookup /clear",
                "arp --renew mit anschließendem arp --commit",
                "ipconfig /release gefolgt von ipconfig /renew",
                "PC neu starten",
              ],
              correct: 2,
              explain: "Release gibt die IP zurück, Renew fordert eine neue vom DHCP-Server an.",
            },
          ],
        },
        {
          id: "lf3-arp-1",
          title: "ARP, NDP & Adressauflösung",
          content: [
            { type: "heading", value: "ARP: IP-Adresse → MAC-Adresse" },
            {
              type: "text",
              value:
                "Problem: Ein PC will Daten an 192.168.1.5 senden. Er kennt die IP, aber der Switch braucht die MAC-Adresse. Lösung: ARP (Address Resolution Protocol). Ablauf: 1. PC sendet ARP Request als Broadcast (ff:ff:ff:ff:ff:ff): Wer hat 192.168.1.5? 2. ALLE Geräte im Segment empfangen die Anfrage. 3. Nur 192.168.1.5 antwortet mit ARP Reply (Unicast): Meine MAC ist AA:BB:CC:DD:EE:FF. 4. PC speichert die Zuordnung im ARP-Cache. Nächste Kommunikation: Kein ARP nötig, MAC ist im Cache.",
            },
            { type: "heading", value: "ARP-Cache und Befehle" },
            {
              type: "code",
              value:
                "# ARP-Tabelle anzeigen\narp -a                          # Windows/Linux\nshow ip arp                     # Cisco\nshow mac address-table          # Switch: MAC→Port Zuordnung\n\n# Beispiel ARP-Cache:\n192.168.1.1    00-1A-2B-3C-4D-5E   dynamisch\n192.168.1.5    AA-BB-CC-DD-EE-FF   dynamisch\n\n# ARP-Cache löschen (Troubleshooting)\narp -d *                        # Windows\nsudo ip neigh flush all          # Linux",
            },
            { type: "heading", value: "ARP bei Remote-Kommunikation" },
            {
              type: "text",
              value:
                "Wenn das Ziel in einem ANDEREN Subnetz liegt: PC löst NICHT die Ziel-IP per ARP auf, sondern die MAC des Default Gateways! Beispiel: PC (192.168.1.10) will zu Server (10.0.0.5). ARP Request: Wer hat 192.168.1.1 (Gateway)? Gateway antwortet mit seiner MAC. PC sendet Paket an Gateway-MAC, aber mit Ziel-IP 10.0.0.5. Gateway routet das Paket weiter. Merke: MAC-Adressen ändern sich bei jedem Hop, IP-Adressen bleiben gleich!",
            },
            { type: "heading", value: "IPv6: Neighbor Discovery Protocol (NDP)" },
            {
              type: "text",
              value:
                "IPv6 hat KEIN ARP. Stattdessen: NDP (basiert auf ICMPv6). Neighbor Solicitation (NS): Wie ARP Request, aber als Multicast (nicht Broadcast) an die Solicited-Node-Adresse. Effizienter! Neighbor Advertisement (NA): Wie ARP Reply. Router Solicitation (RS): Host fragt nach Router im Netz. Router Advertisement (RA): Router antwortet mit Präfix und Gateway-Info (SLAAC). DAD (Duplicate Address Detection): Vor IP-Nutzung prüfen, ob Adresse frei ist.",
            },
            { type: "heading", value: "Sicherheit: ARP Spoofing" },
            {
              type: "text",
              value:
                "Angriff: Angreifer sendet gefälschte ARP-Replies: Ich bin das Gateway! Alle PCs aktualisieren ihren Cache → Traffic geht über den Angreifer (Man-in-the-Middle). Schutz: Dynamic ARP Inspection (DAI) auf Managed Switches, Static ARP-Einträge für kritische Geräte, Port Security, 802.1X Authentifizierung.",
            },
            {
              type: "note",
              value:
                "Übungsaufgabe: PC-A (192.168.1.10) pingt PC-B (192.168.1.20) zum ersten Mal. Beschreibe alle ARP- und ICMP-Pakete die über das Netzwerk gehen. Lösung: 1. ARP Request Broadcast von A: Wer hat .20? 2. ARP Reply von B an A. 3. ICMP Echo Request von A an B. 4. ICMP Echo Reply von B an A.",
            },
            { type: "heading", value: "Übungsaufgabe 1: ARP-Zweck" },
            { type: "text", value: "Wozu dient ARP und auf welchen Adressen arbeitet es?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nARP (Address Resolution Protocol) löst eine bekannte\nIPv4-Adresse in die zugehörige MAC-Adresse im\nlokalen Netz auf. Ablauf: Broadcast 'Wer hat IP x?'\n-> der Besitzer antwortet mit seiner MAC. Verbindet\nalso Schicht 3 (IP) mit Schicht 2 (MAC).",
            },
            { type: "heading", value: "Übungsaufgabe 2: IPv6" },
            { type: "text", value: "Was ersetzt ARP unter IPv6?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nNDP (Neighbor Discovery Protocol), das ICMPv6 nutzt.\nStatt ARP-Broadcasts verwendet es Neighbor\nSolicitation/Advertisement und arbeitet über\nMulticast statt Broadcast (effizienter).",
            },
            { type: "heading", value: "Übungsaufgabe 3: ARP-Spoofing" },
            { type: "text", value: "Was ist ARP-Spoofing und welche Gefahr besteht?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nEin Angreifer sendet gefälschte ARP-Antworten und\nverknüpft seine MAC mit der IP des Gateways. Der\nVerkehr läuft dann über ihn (Man-in-the-Middle):\nMitlesen oder Manipulieren. Schutz: dynamic ARP\ninspection, statische ARP-Einträge, Verschlüsselung.",
            },
            { type: "heading", value: "Übungsaufgabe 1: ARP-Ablauf" },
            {
              type: "text",
              value:
                "PC A will PC B im selben Subnetz erreichen, kennt aber nur die IP. Beschreibe den ARP-Ablauf.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. A prüft ARP-Cache - MAC von B nicht bekannt.\n2. A sendet ARP-Request als Broadcast (FF:FF:FF:FF:FF:FF)\n   'Wer hat IP x.x.x.x? Teilt mir eure MAC mit.'\n3. Alle Geräte empfangen den Broadcast.\n4. Nur B antwortet mit ARP-Reply (Unicast):\n   'Das bin ich, meine MAC ist xx:xx:xx:xx:xx:xx.'\n5. A speichert die MAC im ARP-Cache.",
            },
            { type: "heading", value: "Übungsaufgabe 2: ARP vs NDP" },
            { type: "text", value: "Was ersetzt in IPv6 das ARP von IPv4?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nNDP (Neighbor Discovery Protocol), Teil von ICMPv6.\nNutzt Multicast statt Broadcast (effizienter).\nNachbarsuche (Neighbor Solicitation/Advertisement)\nersetzt ARP-Request/Reply. Zusätzlich übernimmt NDP\nAufgaben wie Router Discovery und Autokonfiguration\n(SLAAC).",
            },
            { type: "heading", value: "Beispiel 1: ARP-Ablauf" },
            {
              type: "text",
              value:
                "PC (192.168.1.10) will 192.168.1.1 erreichen, kennt die MAC nicht. Sendet ARP-Request (Broadcast FF:FF:FF:FF:FF:FF): 'Wer hat 192.168.1.1?'. Gateway antwortet: 'Ich (MAC: AA:BB:CC:DD:EE:FF)'. PC speichert die Zuordnung im ARP-Cache. Danach direkte Kommunikation ohne Broadcast. Cache-Eintrag verfällt nach Minuten (typ. 2-20 Min, OS-abhängig).",
            },
            { type: "heading", value: "Beispiel 2: ARP-Spoofing Angriff" },
            {
              type: "text",
              value:
                "Angreifer sendet gefälschte ARP-Replies: 'Die MAC des Gateways ist MEINE MAC'. Alle PCs im Netz senden Traffic an den Angreifer statt ans Gateway → Man-in-the-Middle. Gegenmaßnahmen: Dynamic ARP Inspection (DAI) auf dem Switch, Static ARP Entries für kritische Geräte, 802.1X Port-Authentifizierung.",
            },
            { type: "heading", value: "Beispiel 3: NDP bei IPv6" },
            {
              type: "text",
              value:
                "IPv6 nutzt statt ARP das Neighbor Discovery Protocol (NDP) mit ICMPv6: Neighbor Solicitation (NS) = 'Wer hat diese IPv6?'. Neighbor Advertisement (NA) = 'Ich, hier meine MAC'. Router Solicitation (RS) / Router Advertisement (RA): Host findet Router und konfiguriert sich per SLAAC automatisch. NDP ist sicherer als ARP, kann aber auch gespooft werden (Abhilfe: SEND/RA Guard).",
            },
          ],
          quiz: [
            {
              id: "imp_lf3-arp-1_0",
              q: "ARP löst auf?",
              options: ["MAC→IP", "DNS→IP", "IP→MAC", "IP→DNS"],
              correct: 2,
              explain: "ARP: IP-Adresse → MAC-Adresse im lokalen Netz.",
            },
            {
              id: "imp_lf3-arp-1_1",
              q: "ARP Request: Ziel-MAC?",
              options: [
                "Unicast",
                "00:00:00:00:00:00",
                "Multicast",
                "ff:ff:ff:ff:ff:ff (Broadcast)",
              ],
              correct: 3,
              explain: "Broadcast: Wer hat IP x.x.x.x? Alle im Segment empfangen die Anfrage.",
            },
            {
              id: "imp_lf3-arp-1_2",
              q: "ARP Reply: Unicast oder Broadcast?",
              options: ["Multicast", "Unicast (direkt an Anfragenden)", "Anycast", "Broadcast"],
              correct: 1,
              explain: "Nur der Besitzer der IP antwortet, direkt an die MAC des Anfragenden.",
            },
            {
              id: "imp_lf3-arp-1_3",
              q: "ARP-Cache Zweck?",
              options: [
                "Bereits aufgelöste IP→MAC zwischenspeichern",
                "DNS",
                "Routing",
                "Verschlüsselung",
              ],
              correct: 0,
              explain: "Weniger Broadcasts. Cache vermeidet wiederholte ARP-Broadcasts.",
            },
            {
              id: "imp_lf3-arp-1_4",
              q: "Welche Ausgabe liefert der Befehl arp -a?",
              options: [
                "Routing-Tabelle",
                "DNS-Cache",
                "Firewall-Regeln",
                "Lokale ARP-Tabelle (IP→MAC Zuordnungen)",
              ],
              correct: 3,
              explain: "Alle zwischengespeicherten IP-MAC-Zuordnungen.",
            },
            {
              id: "imp_lf3-arp-1_5",
              q: "ARP Spoofing?",
              options: [
                "Der Switch blockiert sämtliche ARP-Broadcasts im Netz",
                "Angreifer sendet gefälschte ARP-Replies (Man-in-the-Middle)",
                "Der lokale ARP-Cache wird regelmäßig automatisch geleert",
                "Die normale ARP-Auflösung von IP- zu MAC-Adressen",
              ],
              correct: 1,
              explain: "Angreifer gibt sich als Gateway aus → leitet Traffic um.",
            },
            {
              id: "imp_lf3-arp-1_6",
              q: "Gratuitous ARP?",
              options: [
                "Anfrage an andere",
                "Broadcast-Sturm",
                "ARP löschen",
                "Host sendet ARP für eigene IP",
              ],
              correct: 3,
              explain:
                "Duplikat-Erkennung/Cache-Update. Prüft, ob eigene IP schon vergeben ist + informiert Switches.",
            },
            {
              id: "imp_lf3-arp-1_7",
              q: "NDP ersetzt ARP bei?",
              options: ["Bluetooth", "IPv4", "WLAN", "IPv6 (Neighbor Discovery Protocol)"],
              correct: 3,
              explain: "IPv6 nutzt NDP statt ARP (ICMPv6-basiert).",
            },
            {
              id: "imp_lf3-arp-1_8",
              q: "Neighbor Solicitation?",
              options: ["Multicast an Solicited-Node-Adresse", "Anycast", "Broadcast", "Unicast"],
              correct: 0,
              explain:
                "Gezielter als Broadcast. NS: Multicast statt Broadcast = effizienter als ARP.",
            },
            {
              id: "imp_lf3-arp-1_9",
              q: "DAD (Duplicate Address Detection)?",
              options: [
                "Prüfung, ob der Hostname doppelt im DNS registriert ist",
                "Verfahren, mit dem Router doppelte Routen entfernen",
                "Host prüft, ob seine IPv6-Adresse schon vergeben ist",
                "Bereinigung doppelter Einträge im lokalen ARP-Cache",
              ],
              correct: 2,
              explain: "Vor Nutzung einer IPv6-Adresse: Ist sie schon im Netz?",
            },
            {
              id: "imp_lf3-arp-1_10",
              q: "Was sendet ein PC als ARP-Request?",
              options: [
                "Einen Unicast direkt an die MAC-Adresse des Zielgeräts",
                "Einen Multicast, der nur an die Router im Netz gerichtet ist",
                "Broadcast an alle im Netz: 'Wer hat IP x.x.x.x?'",
                "Gar nichts; die MAC-Adresse wird lokal aus der IP berechnet",
              ],
              correct: 2,
              explain:
                "ARP-Request = Broadcast (FF:FF:FF:FF:FF:FF): Fragt wer eine bestimmte IP hat.",
            },
            {
              id: "imp_lf3-arp-1_11",
              q: "Wie antwortet das Ziel auf einen ARP-Request?",
              options: [
                "Gar nicht",
                "Per DNS",
                "Mit einem Unicast ARP-Reply",
                "Mit einem Broadcast",
              ],
              correct: 2,
              explain:
                "Direkt an den Anfragenden. ARP-Reply = Unicast: Direkt an die MAC des Anfragenden.",
            },
            {
              id: "imp_lf3-arp-1_12",
              q: "Was speichert der ARP-Cache?",
              options: [
                "Zuordnung IP-Adresse ↔ MAC-Adresse",
                "DHCP-Leases",
                "DNS-Einträge",
                "Routing-Tabelle",
              ],
              correct: 0,
              explain: "ARP-Cache: Tabelle mit bekannten IP→MAC-Zuordnungen.",
            },
            {
              id: "imp_lf3-arp-1_13",
              q: "Was ist ARP-Spoofing?",
              options: [
                "Angreifer sendet gefälschte ARP-Replies, um Traffic umzuleiten",
                "Ein Angriff, der DNS-Antworten fälscht, um Namen umzuleiten",
                "Ein Portscan, der offene Dienste im Netzwerk auflistet",
                "Das manuelle Leeren des ARP-Caches per Kommandozeile",
              ],
              correct: 0,
              explain:
                "ARP-Spoofing: Gefälschte ARP-Antworten → Traffic wird zum Angreifer umgeleitet (MITM).",
            },
            {
              id: "imp_lf3-arp-1_14",
              q: "Was ist NDP?",
              options: [
                "Network Data Protocol",
                "Neighbor Discovery Protocol",
                "Neue DNS-Programmierung",
                "Network Detection Program",
              ],
              correct: 1,
              explain:
                "IPv6-Ersatz für ARP. NDP ersetzt ARP in IPv6: Nutzt ICMPv6 Neighbor Solicitation/Advertisement.",
            },
            {
              id: "imp_lf3-arp-1_15",
              q: "Welcher Befehl zeigt den ARP-Cache?",
              options: ["ipconfig /all", "tracert", "nslookup", "arp -a"],
              correct: 3,
              explain: "arp -a (Windows/Linux): Zeigt alle bekannten IP→MAC-Zuordnungen.",
            },
            {
              id: "imp_lf3-arp-1_16",
              q: "Was ist Gratuitous ARP?",
              options: [
                "Unaufgeforderte ARP-Ankündigung der eigenen IP/MAC",
                "Eine ARP-Abfrage für Ziele außerhalb des eigenen Subnetzes",
                "Ein Befehl zum Leeren des lokalen ARP-Caches",
                "Eine spezielle ARP-Variante ausschließlich für WLAN-Netze",
              ],
              correct: 0,
              explain:
                "Gratuitous ARP: Host sendet ARP für seine eigene IP – aktualisiert Caches anderer, erkennt IP-Konflikte.",
            },
            {
              id: "imp_lf3-arp-1_17",
              q: "Welche Schicht nutzt ARP?",
              options: ["Schicht 4", "Schicht 7", "Schicht 1", "Zwischen Schicht 2 und 3"],
              correct: 3,
              explain:
                "Verbindet IP mit MAC. ARP arbeitet zwischen L2 (MAC) und L3 (IP) – übersetzt IP→MAC.",
            },
            {
              id: "imp_lf3-arp-1_18",
              q: "Was ist DAI (Dynamic ARP Inspection)?",
              options: [
                "Ein DNS-Dienst zur dynamischen Aktualisierung von A-Records",
                "Ein Firewall-Typ, der Pakete auf Anwendungsebene filtert",
                "Switch-Funktion, die ARP-Pakete gegen DHCP-Snooping-DB prüft",
                "Ein Scan-Tool zur Inventarisierung aller Geräte im Subnetz",
              ],
              correct: 2,
              explain: "DAI: Switch prüft ARP-Pakete auf Plausibilität → schützt vor ARP-Spoofing.",
            },
            {
              id: "imp_lf3-arp-1_19",
              q: "Was passiert wenn die Ziel-IP in einem anderen Netz liegt?",
              options: [
                "ARP für die Gateway-IP (Router)",
                "Kein ARP nötig",
                "Broadcast ins andere Netz",
                "ARP für die Ziel-IP",
              ],
              correct: 0,
              explain:
                "Anderes Netz: ARP für Gateway-MAC, dann sendet der PC den Frame an den Router.",
            },
          ],
        },
        {
          id: "lf3-tcp-1",
          title: "TCP, UDP & Ports im Detail",
          content: [
            { type: "heading", value: "Transportschicht: TCP vs. UDP" },
            {
              type: "text",
              value:
                "TCP (Transmission Control Protocol): Verbindungsorientiert (3-Way-Handshake vor Datenübertragung). Zuverlässig (Sequenznummern, ACKs, Retransmission). Flusskontrolle (Window Size, Sliding Window). Reihenfolge garantiert. Overhead: 20 Byte Header. Einsatz: HTTP/S, SSH, FTP, SMTP, Datenbanken. UDP (User Datagram Protocol): Verbindungslos (kein Handshake). Unzuverlässig (kein ACK, keine Retransmission). Geringer Overhead: nur 8 Byte Header. Schnell, echtzeitfähig. Einsatz: DNS, DHCP, VoIP, Video-Streaming, Gaming, SNMP, TFTP.",
            },
            { type: "heading", value: "TCP 3-Way-Handshake im Detail" },
            {
              type: "code",
              value:
                "# Verbindungsaufbau:\nClient → Server:  SYN         (SEQ=100, Ich will verbinden)\nServer → Client:  SYN-ACK     (SEQ=300, ACK=101, OK + meine SEQ)\nClient → Server:  ACK         (SEQ=101, ACK=301, Bestätigt)\n→ Verbindung ESTABLISHED\n\n# Verbindungsabbau (4-Way):\nClient → Server:  FIN         (Ich bin fertig)\nServer → Client:  ACK         (OK, verstanden)\nServer → Client:  FIN         (Ich auch fertig)\nClient → Server:  ACK         (OK, Verbindung geschlossen)",
            },
            { type: "heading", value: "Port-Nummern und Sockets" },
            {
              type: "text",
              value:
                "Well-Known (0-1023): HTTP=80, HTTPS=443, SSH=22, FTP=20/21, SMTP=25, DNS=53, DHCP=67/68, TFTP=69, POP3=110, IMAP=143, SNMP=161, LDAP=389, RDP=3389, MySQL=3306. Registered (1024-49151): Für Anwendungen registriert. Dynamic/Private (49152-65535): Vom Client temporär vergeben (Source Port). Socket = IP:Port, z.B. 192.168.1.10:49812 → 93.184.216.34:443. Ein Socket-Paar identifiziert eine Verbindung eindeutig.",
            },
            { type: "heading", value: "Flusskontrolle und Sliding Window" },
            {
              type: "text",
              value:
                "Window Size: Empfänger teilt Sender mit, wie viele Bytes er aufnehmen kann. Sender darf so viele Bytes senden, OHNE auf ACK zu warten. Beispiel: Window=3000 → Sender schickt 3000 Bytes, wartet dann auf ACK. Sliding Window: Window verschiebt sich mit jedem ACK nach vorne. Window Size = 0: Empfänger ist voll → Sender pausiert (Flow Control). Congestion Control: Bei Paketverlust wird Window verkleinert (Slow Start, Congestion Avoidance).",
            },
            { type: "heading", value: "Praxis-Übung" },
            {
              type: "text",
              value:
                "Aufgabe: Du öffnest https://example.de im Browser. Welche Schritte passieren auf der Transportschicht? Lösung: 1. Browser wählt zufälligen Source Port (z.B. 52341). 2. TCP SYN an example.de Port 443. 3. Server antwortet SYN-ACK. 4. Client sendet ACK → ESTABLISHED. 5. TLS-Handshake über die TCP-Verbindung. 6. HTTP GET Request. 7. Server sendet Webseite in TCP-Segmenten mit Sequenznummern. 8. Client bestätigt mit ACKs. 9. Verbindungsabbau mit FIN.",
            },
            {
              type: "note",
              value:
                "Merkhilfe Ports: HTTP=80, HTTPS=443 (80+363), SSH=22, DNS=53, DHCP=67/68, FTP=20(Daten)/21(Steuerung), RDP=3389. Diese Ports kommen in JEDER AP1 vor!",
            },
            { type: "heading", value: "Übungsaufgabe 1: TCP vs. UDP" },
            { type: "text", value: "Wann TCP, wann UDP? Je ein Beispiel." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nTCP: verbindungsorientiert, zuverlässig (Bestätigung,\nReihenfolge, erneutes Senden). Beispiel: Web (HTTPS),\nE-Mail, Dateiübertragung.\nUDP: verbindungslos, schnell, ohne Garantie.\nBeispiel: DNS-Anfrage, Video-/Audio-Streaming, VoIP,\nwo Tempo wichtiger ist als jedes einzelne Paket.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Handshake" },
            { type: "text", value: "Beschreibe den TCP-Verbindungsaufbau (Three-Way-Handshake)." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. Client -> Server: SYN\n2. Server -> Client: SYN-ACK\n3. Client -> Server: ACK\nDanach steht die Verbindung. Der Abbau erfolgt\nmit FIN/ACK (Four-Way).",
            },
            { type: "heading", value: "Übungsaufgabe 3: Ports" },
            { type: "text", value: "Nenne die Standardports von HTTP, HTTPS, SSH und DNS." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nHTTP : 80 (TCP)\nHTTPS: 443 (TCP)\nSSH  : 22 (TCP)\nDNS  : 53 (UDP, bei Zonentransfer TCP)\nWell-known Ports: 0-1023.",
            },
            { type: "heading", value: "Übungsaufgabe 1: TCP vs UDP" },
            { type: "text", value: "Wann TCP, wann UDP? Je 2 Beispielprotokolle." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nTCP (zuverlässig, verbindungsorientiert):\nHTTP/HTTPS (Web), SSH, FTP, SMTP (Mail).\nUDP (schnell, verbindungslos, kein Handshake):\nDNS (Standard), DHCP, VoIP/Streaming, NTP.\nFaustregel: Zuverlässigkeit -> TCP. Echtzeit -> UDP.",
            },
            { type: "heading", value: "Übungsaufgabe 2: 3-Way-Handshake" },
            { type: "text", value: "Beschreibe den TCP-Verbindungsaufbau." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. Client -> Server: SYN (Synchronize)\n2. Server -> Client: SYN-ACK (Bestätigung + eigenes SYN)\n3. Client -> Server: ACK (Bestätigung)\nDanach ist die Verbindung aufgebaut. Abbau: FIN/ACK.\nDer Handshake stellt sicher, dass beide Seiten\nbereit sind.",
            },
            { type: "heading", value: "Beispiel 1: TCP Three-Way-Handshake" },
            {
              type: "text",
              value:
                "Verbindungsaufbau: Client sendet SYN (Seq=100). Server antwortet SYN-ACK (Seq=300, Ack=101). Client sendet ACK (Seq=101, Ack=301). Verbindung steht. Abbau: FIN → ACK → FIN → ACK (Four-Way-Teardown). Der Handshake stellt sicher, dass beide Seiten bereit sind – UDP hat keinen Handshake.",
            },
            { type: "heading", value: "Beispiel 2: TCP vs. UDP in der Praxis" },
            {
              type: "text",
              value:
                "TCP (zuverlässig): HTTP/HTTPS (Webseiten), SMTP (E-Mail), FTP (Dateiübertragung), SSH (Remote). Garantiert Reihenfolge und Vollständigkeit. UDP (schnell, unzuverlässig): DNS (Abfragen), DHCP, VoIP/Video-Streaming, Gaming. Kein Handshake, keine Wiederholung – bei Paketverlust kein Nachteil bei Echtzeit (veraltetes Videoframe ist wertlos).",
            },
            { type: "heading", value: "Beispiel 3: Well-Known Ports" },
            {
              type: "text",
              value:
                "HTTP: 80. HTTPS: 443. FTP Daten/Steuerung: 20/21. SSH: 22. Telnet: 23. SMTP: 25 (587 mit Auth). DNS: 53. DHCP: 67(Server)/68(Client). POP3: 110 (995 SSL). IMAP: 143 (993 SSL). RDP: 3389. SMB: 445. SNMP: 161/162. NTP: 123. MySQL: 3306. Well-Known Ports: 0-1023 (reserviert). Registered: 1024-49151. Dynamic: 49152-65535.",
            },
          ],
          quiz: [
            {
              id: "imp_lf3-tcp-1_0",
              q: "TCP Port 443?",
              options: ["HTTP", "FTP", "HTTPS", "SSH"],
              correct: 2,
              explain: "443 = HTTPS (verschlüsseltes Web).",
            },
            {
              id: "imp_lf3-tcp-1_1",
              q: "Bereich der Well-Known Ports?",
              options: ["0-49151", "0-100", "0-1023", "0-65535"],
              correct: 2,
              explain: "0-1023: Reserviert für Standard-Dienste.",
            },
            {
              id: "imp_lf3-tcp-1_2",
              q: "TCP Window Size?",
              options: [
                "Die maximale Größe eines einzelnen Pakets in Bytes",
                "Die Anzahl der Hops, die ein Segment durchlaufen darf",
                "Der Bereich der Portnummern, den die Verbindung nutzen darf",
                "Wie viele Bytes OHNE Bestätigung gesendet werden dürfen",
              ],
              correct: 3,
              explain: "Sliding Window: Empfänger steuert Datenfluss.",
            },
            {
              id: "imp_lf3-tcp-1_3",
              q: "UDP: Warum für VoIP?",
              options: [
                "UDP verschlüsselt Sprachdaten bereits auf Transportebene",
                "Geringerer Overhead, keine Retransmission (Echtzeit!)",
                "UDP stellt Pakete zuverlässiger zu als TCP",
                "UDP gilt als sicherer, da es keine offenen Verbindungen hält",
              ],
              correct: 1,
              explain: "Nachgesendete Pakete wären bei VoIP veraltet.",
            },
            {
              id: "imp_lf3-tcp-1_4",
              q: "SYN-Flood-Angriff?",
              options: [
                "DNS-Angriff",
                "Massenhaft SYN ohne ACK",
                "Normaler Handshake",
                "UDP-Flood",
              ],
              correct: 1,
              explain: "Server-Ressourcen erschöpfen. Half-open Connections überlasten den Server.",
            },
            {
              id: "imp_lf3-tcp-1_5",
              q: "TCP Retransmission?",
              options: [
                "Verbindung trennen",
                "Neuer Handshake",
                "Nicht bestätigte Segmente erneut senden",
                "Port wechseln",
              ],
              correct: 2,
              explain: "Wenn ACK ausbleibt → Segment wird nochmal gesendet.",
            },
            {
              id: "imp_lf3-tcp-1_6",
              q: "Socket = ?",
              options: ["MAC-Adresse", "Kabel", "IP-Adresse + Port-Nummer", "VLAN"],
              correct: 2,
              explain:
                "Identifiziert Verbindung. Socket: 192.168.1.10:443 = eindeutiger Kommunikationsendpunkt.",
            },
            {
              id: "imp_lf3-tcp-1_7",
              q: "netstat -an zeigt?",
              options: [
                "Die vollständige Routing-Tabelle mit allen Gateways",
                "Alle aktiven Verbindungen mit IP:Port und Status",
                "Alle DNS-Einträge des lokalen Resolver-Caches",
                "Die ARP-Tabelle mit MAC-zu-IP-Zuordnungen",
              ],
              correct: 1,
              explain: "TCP-Status: ESTABLISHED, LISTENING, TIME_WAIT etc.",
            },
            {
              id: "imp_lf3-tcp-1_8",
              q: "MSS vs. MTU?",
              options: [
                "Gleich – beide Werte betragen immer exakt 1500 Byte",
                "MTU=max Frame (1500B), MSS=max TCP-Payload (MTU minus Header)",
                "Der Unterschied gilt nur bei UDP; TCP nutzt beide Werte nicht",
                "MSS > MTU: Die MSS enthält zusätzlich Ethernet- und IP-Header",
              ],
              correct: 1,
              explain: "MSS = MTU - IP-Header(20B) - TCP-Header(20B) = 1460 Bytes.",
            },
            {
              id: "imp_lf3-tcp-1_9",
              q: "TCP FIN vs. RST?",
              options: [
                "RST=normaler Abbau, FIN=Abbruch im Fehlerfall",
                "FIN=ordentlicher Abbau, RST=sofortiger Abbruch",
                "FIN signalisiert einen Übertragungsfehler im Segment",
                "Beide Flags bewirken exakt denselben Verbindungsabbau",
              ],
              correct: 1,
              explain: "FIN: Geordnet (4-Way). RST: Sofort, bei Fehler/Ablehnung.",
            },
            {
              id: "imp_lf3-tcp-1_10",
              q: "Was sind die drei Schritte des TCP-Handshakes?",
              options: [
                "GET → POST → PUT",
                "HELLO → READY → GO",
                "SYN → SYN-ACK → ACK",
                "ACK → SYN → FIN",
              ],
              correct: 2,
              explain: "Three-Way-Handshake: SYN → SYN-ACK → ACK.",
            },
            {
              id: "imp_lf3-tcp-1_11",
              q: "Welcher Port wird für HTTPS verwendet?",
              options: ["22", "80", "443", "8080"],
              correct: 2,
              explain: "HTTPS = Port 443 (HTTP = Port 80).",
            },
            {
              id: "imp_lf3-tcp-1_12",
              q: "Welches Protokoll nutzt DNS hauptsächlich?",
              options: ["FTP", "ICMP", "UDP (Port 53)", "TCP"],
              correct: 2,
              explain:
                "DNS nutzt primär UDP/53. Bei großen Antworten (>512 Bytes) oder Zonentransfer: TCP/53.",
            },
            {
              id: "imp_lf3-tcp-1_13",
              q: "Was garantiert TCP gegenüber UDP?",
              options: [
                "Eine grundsätzlich schnellere Übertragung der Daten",
                "Weniger Protokoll-Overhead pro übertragenem Segment",
                "Zustellung in richtiger Reihenfolge + Vollständigkeit",
                "Dass keine Verschlüsselung eingesetzt werden muss",
              ],
              correct: 2,
              explain:
                "TCP: Reihenfolge (Sequenznummern), Vollständigkeit (ACK/Retransmission), Flusskontrolle.",
            },
            {
              id: "imp_lf3-tcp-1_14",
              q: "Welcher Portbereich ist für Well-Known Ports reserviert?",
              options: ["0-1023", "0-65535", "49152-65535", "1024-49151"],
              correct: 0,
              explain: "Well-Known Ports: 0-1023. Von IANA reserviert für Standarddienste.",
            },
            {
              id: "imp_lf3-tcp-1_15",
              q: "Wofür steht Port 22?",
              options: ["SMTP", "HTTP", "FTP", "SSH (Secure Shell)"],
              correct: 3,
              explain: "Port 22 = SSH: Verschlüsselte Remote-Verbindung.",
            },
            {
              id: "imp_lf3-tcp-1_16",
              q: "Was ist der Vorteil von UDP?",
              options: [
                "Zuverlässiger als TCP",
                "Weniger Overhead, schneller (kein Handshake)",
                "Größere Pakete",
                "Bessere Verschlüsselung",
              ],
              correct: 1,
              explain:
                "UDP: Kein Handshake, kein ACK → weniger Overhead, ideal für Echtzeit (VoIP, Streaming, Gaming).",
            },
            {
              id: "imp_lf3-tcp-1_17",
              q: "Welcher Port wird für RDP verwendet?",
              options: ["80", "22", "3389", "443"],
              correct: 2,
              explain: "RDP (Remote Desktop Protocol) = Port 3389.",
            },
            {
              id: "imp_lf3-tcp-1_18",
              q: "Was ist ein Socket?",
              options: [
                "Ein Switch-Port",
                "Kombination aus IP-Adresse + Portnummer",
                "Ein DNS-Eintrag",
                "Ein Netzwerkkabel",
              ],
              correct: 1,
              explain:
                "Socket = IP:Port (z.B. 192.168.1.10:443) – identifiziert eine Verbindung eindeutig.",
            },
            {
              id: "imp_lf3-tcp-1_19",
              q: "Warum nutzt VoIP UDP statt TCP?",
              options: [
                "Bei Paketverlust bringt Wiederholung nichts (veraltet), Geschwindigkeit wichtiger",
                "UDP bietet eine integrierte Verschlüsselung, die Gespräche abhörsicher macht",
                "UDP verbessert die Audioqualität durch eingebaute Fehlerkorrektur der Sprachdaten",
                "TCP kann prinzipbedingt keine Audiodaten transportieren, nur Text und Dateien",
              ],
              correct: 0,
              explain:
                "Echtzeit: Ein verlorenes Sprachpaket nachzusenden würde Verzögerung verursachen – besser überspringen.",
            },
          ],
        },
        {
          id: "lf3-eth-1",
          title: "Ethernet-Frames, MTU & ICMP",
          content: [
            { type: "heading", value: "Ethernet II Frame-Struktur" },
            {
              type: "text",
              value:
                "Preamble (7 Byte): Synchronisation (101010...). SFD (1 Byte): Start Frame Delimiter (10101011), markiert Frame-Beginn. Ziel-MAC (6 Byte): An wen? Quell-MAC (6 Byte): Von wem? EtherType (2 Byte): Welches Protokoll? 0x0800=IPv4, 0x86DD=IPv6, 0x0806=ARP, 0x8100=802.1Q. Payload (46-1500 Byte): Die eigentlichen Daten (IP-Paket). FCS (4 Byte): Frame Check Sequence, CRC32-Prüfsumme.",
            },
            { type: "heading", value: "Frame-Größen" },
            {
              type: "text",
              value:
                "Minimum: 64 Byte (ohne Preamble/SFD). Frames unter 64 Byte = Runt Frames → werden verworfen (Kollisionsfragmente). Maximum: 1518 Byte (ohne Preamble/SFD). Davon 18 Byte Header/Trailer → 1500 Byte Payload = MTU (Maximum Transmission Unit). Jumbo Frames: MTU bis 9000 Byte. Muss auf allen Geräten im Pfad aktiviert sein. Einsatz: iSCSI Storage, Backup-Netzwerke, Rechenzentren.",
            },
            { type: "heading", value: "ICMP: Internet Control Message Protocol" },
            {
              type: "text",
              value:
                "ICMP ist das Diagnoseprotokoll von IP (Schicht 3). Keine Ports! ICMP wird direkt in IP-Pakete gekapselt. Wichtige ICMP-Typen: Type 0: Echo Reply (Ping-Antwort). Type 3: Destination Unreachable (Code 0=Net, 1=Host, 3=Port). Type 5: Redirect (Router kennt besseren Weg). Type 8: Echo Request (Ping-Anfrage). Type 11: Time Exceeded (TTL=0, genutzt von traceroute).",
            },
            { type: "heading", value: "Traceroute: So funktioniert es" },
            {
              type: "code",
              value:
                "# traceroute sendet Pakete mit steigendem TTL:\nPaket 1: TTL=1 → Router1 antwortet mit Time Exceeded\nPaket 2: TTL=2 → Router2 antwortet mit Time Exceeded\nPaket 3: TTL=3 → Router3 antwortet mit Time Exceeded\nPaket 4: TTL=4 → Ziel antwortet mit Echo Reply\n\n# Ergebnis:\n1  192.168.1.1    1ms   (Gateway)\n2  10.0.0.1       5ms   (ISP Router)\n3  172.16.0.1    12ms   (Backbone)\n4  93.184.216.34 25ms   (Ziel)\n\n# * * * = Router antwortet nicht auf ICMP (Firewall)",
            },
            { type: "heading", value: "Medienzugriff: CSMA/CD und CSMA/CA" },
            {
              type: "text",
              value:
                "CSMA/CD (Carrier Sense Multiple Access / Collision Detection): Für kabelgebundenes Ethernet (veraltet bei Full-Duplex). Ablauf: 1. Horchen ob Leitung frei (Carrier Sense). 2. Wenn frei: Senden. 3. Wenn Kollision erkannt: Senden stoppen, Jam-Signal, zufällige Wartezeit (Backoff), erneut versuchen. Nur relevant bei Half-Duplex (Hubs). Moderne Switches mit Full-Duplex haben KEINE Kollisionen mehr. CSMA/CA (Collision Avoidance): Für WLAN (802.11). Kollisionen können nicht erkannt werden (Hidden-Node-Problem). Ablauf: 1. Horchen ob Medium frei. 2. Warten (IFS-Intervall). 3. Wenn frei: RTS (Request to Send). 4. AP antwortet CTS (Clear to Send). 5. Dann erst senden. Aufwändiger als CD, aber nötig, weil WLAN nicht gleichzeitig senden und empfangen kann.",
            },
            { type: "heading", value: "Half-Duplex vs. Full-Duplex" },
            {
              type: "text",
              value:
                "Half-Duplex: Nur EINE Richtung gleichzeitig (wie Walkie-Talkie). Kollisionen möglich → CSMA/CD nötig. Typisch: Hubs, ältere WLAN-Verbindungen. Full-Duplex: BEIDE Richtungen gleichzeitig (wie Telefon). Keine Kollisionen, doppelte Bandbreite. Typisch: Alle modernen Switch-Verbindungen. Auto-Negotiation: Switch und Endgerät handeln automatisch die beste Geschwindigkeit und Duplex-Modus aus. Duplex-Mismatch: Wenn ein Ende Half-Duplex und das andere Full-Duplex spricht → extreme Performance-Probleme, viele Late Collisions im Log. Häufiger Fehler bei manueller Port-Konfiguration!",
            },
            { type: "heading", value: "Switch Forwarding-Methoden" },
            {
              type: "text",
              value:
                "Store-and-Forward: Switch empfängt den KOMPLETTEN Frame, prüft FCS (Fehlererkennung), verwirft fehlerhafte Frames, leitet nur gültige weiter. Höhere Latenz, aber zuverlässig. Standard bei Cisco Catalyst Switches. Cut-Through: Switch liest nur die Ziel-MAC (erste 6 Byte nach Preamble) und leitet sofort weiter, OHNE den ganzen Frame zu empfangen. Minimale Latenz, aber keine Fehlererkennung → fehlerhafte Frames werden weitergeleitet. Fragment-Free: Kompromiss. Switch wartet auf die ersten 64 Byte (= minimale Frame-Größe). Filtert Runt Frames (Kollisionsfragmente), ist aber schneller als Store-and-Forward.",
            },
            {
              type: "note",
              value:
                "Übung: Ein Frame ist 60 Byte groß. Was passiert? → Er ist ein Runt Frame (< 64 Byte) und wird vom Switch verworfen. Übung: MTU ist 1500, IP-Header 20B, TCP-Header 20B. Wie groß ist die maximale TCP-Payload (MSS)? → 1500-20-20 = 1460 Byte.",
            },
            { type: "heading", value: "Übungsaufgabe 1: MTU" },
            {
              type: "text",
              value: "Was ist die MTU und welchen Standardwert hat sie bei Ethernet?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nMTU (Maximum Transmission Unit) = größte Nutzlast\neines Frames. Bei Ethernet standardmäßig 1500 Byte.\nGrößere Pakete werden fragmentiert. 'Jumbo Frames'\n(bis ~9000 Byte) können in speziellen Netzen den\nDurchsatz erhöhen.",
            },
            { type: "heading", value: "Übungsaufgabe 2: MAC-Aufbau" },
            { type: "text", value: "Wie ist eine MAC-Adresse aufgebaut?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n48 Bit, dargestellt als 6 Hex-Paare, z.B.\n00:1A:2B:3C:4D:5E. Die ersten 3 Byte (OUI)\nidentifizieren den Hersteller, die letzten 3 Byte\nsind die gerätespezifische Seriennummer. Weltweit\neindeutig (im Idealfall).",
            },
            { type: "heading", value: "Übungsaufgabe 3: ICMP" },
            { type: "text", value: "Wozu dient ICMP und welches Werkzeug nutzt es?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nICMP (Internet Control Message Protocol) übermittelt\nStatus-/Fehlermeldungen im IP-Netz, z.B.\n'Ziel nicht erreichbar' oder 'Zeit überschritten'.\nping (Echo Request/Reply) und traceroute nutzen ICMP.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Ethernet-Frame" },
            { type: "text", value: "Was enthält ein Ethernet-Frame (grob)?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nPreamble | Ziel-MAC | Quell-MAC | EtherType/Länge |\nPayload (Daten, 46-1500 Bytes) | FCS (Prüfsumme).\nMTU (Maximum Transmission Unit) = max. 1500 Bytes\nPayload bei Standard-Ethernet.",
            },
            { type: "heading", value: "Übungsaufgabe 2: ICMP" },
            {
              type: "text",
              value: "Welches Protokoll nutzt ping und auf welcher OSI-Schicht liegt es?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nping nutzt ICMP (Internet Control Message Protocol).\nICMP liegt auf Schicht 3 (Network), arbeitet\ndirekt auf IP (kein Port). Echo-Request/Echo-Reply.\ntraceroute nutzt ebenfalls ICMP (TTL exceeded).",
            },
            { type: "heading", value: "Übungsaufgabe 3: Duplex" },
            { type: "text", value: "Unterschied Half-Duplex und Full-Duplex?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nHalf-Duplex: senden ODER empfangen, nicht gleichzeitig\n(wie Walkie-Talkie, CSMA/CD bei alten Hubs).\nFull-Duplex: senden UND empfangen gleichzeitig\n(moderne Switches). Keine Kollisionen im Full-Duplex.",
            },
            { type: "heading", value: "Beispiel 1: Ethernet-Frame Aufbau" },
            {
              type: "text",
              value:
                "Präambel (7 Byte) + SFD (1 Byte) + Ziel-MAC (6) + Quell-MAC (6) + EtherType/Länge (2) + Payload (46-1500 Byte) + FCS (4 Byte CRC). Gesamter Frame: 64-1518 Byte. Unter 64 Byte = Runt Frame (verworfen). Über 1518 Byte = Jumbo Frame (nur mit spezieller Konfiguration).",
            },
            { type: "heading", value: "Beispiel 2: MTU und Fragmentierung" },
            {
              type: "text",
              value:
                "MTU (Maximum Transmission Unit): Ethernet = 1500 Byte Payload. Wird ein IP-Paket größer, muss es fragmentiert werden. Fragmentierung kostet Performance → besser vermeiden durch Path MTU Discovery. Jumbo Frames (9000 Byte MTU) in Rechenzentren für hohen Durchsatz – alle Geräte im Pfad müssen Jumbo unterstützen!",
            },
            { type: "heading", value: "Beispiel 3: ICMP in der Praxis" },
            {
              type: "text",
              value:
                "ICMP (Internet Control Message Protocol): Ping nutzt ICMP Echo Request/Reply. Traceroute nutzt ICMP Time Exceeded (TTL abgelaufen). 'Destination Unreachable', wenn Router kein Ziel kennt. 'Redirect', wenn ein besserer Weg existiert. Firewalls blockieren oft ICMP → Ping funktioniert nicht, obwohl Ziel erreichbar ist.",
            },
          ],
          quiz: [
            {
              id: "imp_lf3-eth-1_0",
              q: "Ethernet-Frame min. Größe?",
              options: ["128 Byte", "64 Byte", "1518 Byte", "32 Byte"],
              correct: 1,
              explain: "Min. 64 Byte (inkl. Header+Trailer). Kleinere = Runt → verworfen.",
            },
            {
              id: "imp_lf3-eth-1_1",
              q: "MTU Standard Ethernet?",
              options: ["512 Byte", "1500 Byte", "9000 Byte", "64 Byte"],
              correct: 1,
              explain: "Maximum Transmission Unit: 1500 Byte Payload.",
            },
            {
              id: "imp_lf3-eth-1_2",
              q: "FCS im Ethernet-Frame?",
              options: ["Verschlüsselung", "Portnummer", "Sequenznummer", "Frame Check Sequence"],
              correct: 3,
              explain:
                "CRC-Prüfsumme, Fehlererkennung. FCS: Empfänger prüft, ob Frame fehlerfrei übertragen wurde.",
            },
            {
              id: "imp_lf3-eth-1_3",
              q: "EtherType 0x0800?",
              options: ["VLAN", "IPv6", "IPv4", "ARP"],
              correct: 2,
              explain: "0x0800=IPv4, 0x86DD=IPv6, 0x0806=ARP, 0x8100=802.1Q VLAN.",
            },
            {
              id: "imp_lf3-eth-1_4",
              q: "Jumbo Frame?",
              options: [
                "Standard-Frame mit exakt 1500 Byte MTU",
                "Broadcast-Frame an alle Geräte im Subnetz",
                "Verkleinerter Frame unter 64 Byte für IoT",
                "MTU > 1500, typisch 9000 Byte (iSCSI, Storage)",
              ],
              correct: 3,
              explain: "Jumbo: Weniger Overhead bei großen Datenmengen.",
            },
            {
              id: "imp_lf3-eth-1_5",
              q: "ICMP Typ 8?",
              options: ["Unreachable", "Time Exceeded", "Echo Request (Ping)", "Redirect"],
              correct: 2,
              explain: "Type 8 = Echo Request, Type 0 = Echo Reply.",
            },
            {
              id: "imp_lf3-eth-1_6",
              q: "TTL=0: Was passiert?",
              options: [
                "Router verwirft Paket + sendet ICMP Time Exceeded",
                "Router leitet das Paket mit TTL=255 erneut weiter",
                "Der Router startet den Routing-Prozess neu",
                "Das Paket erreicht sein Ziel ohne weitere Prüfung",
              ],
              correct: 0,
              explain: "TTL wird bei jedem Hop um 1 reduziert. Bei 0 → verwerfen.",
            },
            {
              id: "imp_lf3-eth-1_7",
              q: "traceroute nutzt?",
              options: [
                "DNS-Zonentransfers: Jeder Hop wird per AXFR beim Nameserver erfragt",
                "DHCP-Leases: Jeder Router auf dem Pfad vergibt eine kurze Adresse",
                "TTL-Ablauf: Pakete mit steigendem TTL (1,2,3...) senden",
                "ARP-Broadcasts, die jeder Router auf dem Pfad beantwortet",
              ],
              correct: 2,
              explain: "TTL=1 → Router 1 antwortet. TTL=2 → Router 2. Usw.",
            },
            {
              id: "imp_lf3-eth-1_8",
              q: "Destination Unreachable: Code 3?",
              options: [
                "Network Unreachable",
                "Protocol Unreachable",
                "Host Unreachable",
                "Port Unreachable",
              ],
              correct: 3,
              explain: "Code 0=Net, Code 1=Host, Code 3=Port, Code 2=Protocol.",
            },
            {
              id: "imp_lf3-eth-1_9",
              q: "Runt Frame?",
              options: [
                "> 64 Byte",
                "Normaler Frame",
                "< 64 Byte (zu klein, wird verworfen)",
                "Zu groß",
              ],
              correct: 2,
              explain: "Unter Minimum → Kollisionsfragment oder Fehler.",
            },
            {
              id: "imp_lf3-eth-1_10",
              q: "Wie groß ist die MTU bei Standard-Ethernet?",
              options: ["64 Byte", "512 Byte", "1500 Byte", "9000 Byte"],
              correct: 2,
              explain: "Standard-Ethernet MTU = 1500 Byte Nutzlast. Jumbo Frames: bis 9000 Byte.",
            },
            {
              id: "imp_lf3-eth-1_11",
              q: "Was ist FCS im Ethernet-Frame?",
              options: [
                "Fiber Cable Standard",
                "Fast Connection Setup",
                "Frame Check Sequence",
                "File Control System",
              ],
              correct: 2,
              explain:
                "CRC-Prüfsumme zur Fehlererkennung. FCS: 4 Byte CRC32-Prüfsumme am Frame-Ende zur Erkennung von Übertragungsfehlern.",
            },
            {
              id: "imp_lf3-eth-1_12",
              q: "Was ist ein Runt Frame?",
              options: [
                "Ein verschlüsselter Frame",
                "Ein Frame unter 64 Byte Mindestgröße",
                "Ein besonders großer Frame",
                "Ein VLAN-Frame",
              ],
              correct: 1,
              explain:
                "Wird verworfen. Runt: Unter 64 Byte → ungültig, wird vom Switch verworfen. Ursache: Kollision oder Hardwarefehler.",
            },
            {
              id: "imp_lf3-eth-1_13",
              q: "Welches Protokoll nutzt Ping?",
              options: ["UDP", "ICMP (Echo Request/Reply)", "TCP", "ARP"],
              correct: 1,
              explain: "Ping = ICMP Echo Request + Echo Reply (Layer 3).",
            },
            {
              id: "imp_lf3-eth-1_14",
              q: "Was ist ein Jumbo Frame?",
              options: [
                "Ein spezieller WLAN-Frame nach dem Standard 802.11",
                "Ein per Hardware komprimierter Ethernet-Frame",
                "Ein fehlerhafter Frame, der die CRC-Prüfung nicht besteht",
                "Ethernet-Frame mit MTU größer als 1500 Byte (typ. 9000)",
              ],
              correct: 3,
              explain:
                "Jumbo Frames: MTU bis 9000 Byte. Für Storage-Netzwerke (iSCSI) und Server-zu-Server-Traffic.",
            },
            {
              id: "imp_lf3-eth-1_15",
              q: "Was macht ICMP 'Destination Unreachable'?",
              options: [
                "Ziel antwortet langsam",
                "Misst die Antwortzeit zum Ziel",
                "DNS-Fehler",
                "Router meldet: Kein Weg zum Ziel bekannt",
              ],
              correct: 3,
              explain:
                "Destination Unreachable: Router hat keine Route zum Zielnetz und meldet den Fehler zurück.",
            },
            {
              id: "imp_lf3-eth-1_16",
              q: "Was ist der EtherType im Frame-Header?",
              options: [
                "Bestimmt die Verschlüsselung der Frame-Nutzdaten",
                "Gibt an, welches L3-Protokoll transportiert wird",
                "Gibt die Gesamtgröße des Frames in Byte an",
                "Enthält die TCP-Portnummer der Zielanwendung",
              ],
              correct: 1,
              explain:
                "EtherType: 2 Byte, identifiziert Payload-Protokoll. 0x0800=IPv4, 0x86DD=IPv6, 0x0806=ARP.",
            },
            {
              id: "imp_lf3-eth-1_17",
              q: "Was passiert wenn ein Frame beschädigt ankommt?",
              options: [
                "FCS-Prüfung schlägt fehl → Frame wird verworfen",
                "Der Frame wird vom Switch automatisch repariert",
                "Der Frame wird an den Absender zurückgeschickt",
                "Der Frame wird unverändert weitergeleitet",
              ],
              correct: 0,
              explain:
                "Kein Retransmit auf L2. Ethernet hat keine Fehlerkorrektur auf L2 – fehlerhafte Frames werden verworfen. Retransmit macht TCP auf L4.",
            },
            {
              id: "imp_lf3-eth-1_18",
              q: "Was ist ein Broadcast-Frame?",
              options: [
                "Frame ohne Ziel-MAC",
                "Frame an eine bestimmte MAC",
                "Frame an FF:FF:FF:FF:FF:FF",
                "Frame an den Router",
              ],
              correct: 2,
              explain:
                "Wird an alle Ports im VLAN geschickt. Broadcast: Ziel-MAC FF:FF:FF:FF:FF:FF → Switch leitet an alle Ports weiter (im selben VLAN).",
            },
            {
              id: "imp_lf3-eth-1_19",
              q: "Was ist 802.1Q?",
              options: [
                "Ein Sicherheitsprotokoll",
                "Ein WLAN-Standard",
                "Ein Kabelstandard",
                "VLAN-Tagging im Ethernet-Frame (4 Byte Tag)",
              ],
              correct: 3,
              explain:
                "802.1Q: Fügt 4-Byte-VLAN-Tag in Ethernet-Frame ein. Trunk-Ports taggen Frames mit VLAN-ID.",
            },
          ],
        },
      ],
    },
    {
      id: "lf3-nd",
      title: "Netzwerkdienste",
      lessons: [
        {
          id: "lf3-nd-1",
          title: "DHCP, DNS, NAT",
          content: [
            { type: "heading", value: "DHCP (Dynamic Host Configuration Protocol)" },
            {
              type: "text",
              value:
                "Vergibt automatisch IP-Konfiguration an Clients. DORA-Prozess: Discover (Client sucht Server, Broadcast), Offer (Server bietet IP an), Request (Client akzeptiert), Acknowledge (Server bestätigt). Vergibt: IP-Adresse, Subnetzmaske, Default Gateway, DNS-Server, Lease-Dauer. Lease: Zeitlich begrenzte Zuweisung. Client erneuert bei 50% und 87,5% der Lease-Zeit. Ports: Server 67 (UDP), Client 68 (UDP).",
            },
            { type: "heading", value: "DNS (Domain Name System)" },
            {
              type: "text",
              value:
                "Löst Namen in IP-Adressen auf. Hierarchie: Root-Server (.) → TLD (.de, .com) → Autoritativer Nameserver (firma.de). Rekursive Auflösung: Client fragt lokalen DNS → fragt Root → fragt TLD → fragt autoritativen NS. Caching beschleunigt weitere Anfragen (TTL).",
            },
            { type: "heading", value: "DNS Record-Typen" },
            {
              type: "text",
              value:
                "A: Name → IPv4. AAAA: Name → IPv6. MX: Mailserver für Domain (mit Priorität). CNAME: Alias (www.firma.de → firma.de). NS: Zuständiger Nameserver. PTR: Reverse-Lookup (IP → Name). TXT: Freitext (SPF, DKIM für E-Mail-Authentifizierung). SRV: Dienst-Lokalisierung (z.B. AD-Domänencontroller). SOA: Zonenstartinformation (Seriennummer, Refresh).",
            },
            { type: "heading", value: "NAT/PAT" },
            {
              type: "text",
              value:
                "NAT (Network Address Translation): Übersetzt private in öffentliche IPs. SNAT (Source NAT): Ausgehend, private Quell-IP → öffentliche IP. DNAT (Destination NAT): Eingehend, öffentliche Ziel-IP → private IP (Port Forwarding). PAT (Port Address Translation / NAT Overload): Mehrere private IPs über EINE öffentliche IP, unterschieden durch Portnummern. Standard in Heimroutern.",
            },
            { type: "heading", value: "Übungsaufgabe: DHCP-Bereich berechnen" },
            {
              type: "text",
              value:
                "In einem /24-Netz (192.168.1.0/24) sollen folgende Adressen NICHT per DHCP vergeben werden: .1 (Gateway), .2-.10 (Server, statisch), .250-.254 (Drucker). Wie groß ist der nutzbare DHCP-Bereich und wie viele Clients passen rein?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nGesamt nutzbar in /24: .1 bis .254 = 254 Adressen\nReserviert:\n  .1            = 1  (Gateway)\n  .2 bis .10    = 9  (Server)\n  .250 bis .254 = 5  (Drucker)\n  Summe reserviert = 15\n\nDHCP-Bereich: 192.168.1.11 bis 192.168.1.249\nAnzahl: 249 - 11 + 1 = 239 Adressen\n→ max. 239 DHCP-Clients gleichzeitig\n\nTipp: Lease-Time beachten - bei vielen wechselnden\nGeräten kürzere Lease-Time, damit IPs schneller\nzurück in den Pool kommen.",
            },
            { type: "heading", value: "Übungsaufgabe 2: DORA" },
            { type: "text", value: "Beschreibe den DHCP-Ablauf (DORA)." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nDORA:\n1. DISCOVER - Client sucht per Broadcast einen Server\n2. OFFER    - Server bietet eine IP an\n3. REQUEST  - Client fordert die angebotene IP an\n4. ACK      - Server bestätigt, Lease beginnt\nDanach hat der Client IP, Maske, Gateway, DNS.",
            },
            { type: "heading", value: "Übungsaufgabe 3: NAT" },
            { type: "text", value: "Warum braucht man NAT und was macht es?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nNAT (Network Address Translation) übersetzt private\nIPs in eine öffentliche (und zurück). Nötig, weil\nprivate Adressen nicht im Internet geroutet werden\nund IPv4-Adressen knapp sind. Meist PAT/Overload:\nviele interne Geräte teilen sich eine öffentliche\nIP, unterschieden über Portnummern.",
            },
            { type: "heading", value: "Übungsaufgabe 2: DNS-Auflösung" },
            {
              type: "text",
              value:
                "Beschreibe kurz, was passiert wenn du 'example.de' im Browser eingibst (DNS).",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. Browser fragt lokalen DNS-Cache.\n2. Falls nicht gefunden: Anfrage an konfigurierten\n   DNS-Server (z.B. Router oder Provider-DNS).\n3. Der DNS-Server fragt ggf. rekursiv: Root-Server ->\n   .de-Server -> autoritativer Server für example.de.\n4. Antwort mit IP-Adresse zurück an den Client.\n5. Browser verbindet sich zur erhaltenen IP.",
            },
            { type: "heading", value: "Beispiel 1: DHCP-Ablauf (DORA)" },
            {
              type: "text",
              value:
                "1. Discover: Client sendet Broadcast 'Ich brauche eine IP'. 2. Offer: DHCP-Server bietet IP an (z.B. 192.168.1.50, Lease 24h). 3. Request: Client akzeptiert das Angebot. 4. Acknowledge: Server bestätigt. Zusätzlich: Gateway, DNS-Server, Subnetzmaske werden mitgeliefert. DHCP-Relay: Wenn Server in anderem Subnetz, leitet ein Router die Broadcasts als Unicast weiter.",
            },
            { type: "heading", value: "Beispiel 2: DNS-Hierarchie und Auflösung" },
            {
              type: "text",
              value:
                "Client fragt lokalen DNS (z.B. 192.168.1.1). Kennt er die Antwort nicht → Recursive Query an Forwarder (z.B. 8.8.8.8). Forwarder fragt Root-Server (.) → verweist auf .com-TLD-Server → verweist auf autoritativen NS für example.com → liefert IP. Ergebnis wird gecacht (TTL z.B. 3600s). Wichtige Record-Typen: A (IPv4), AAAA (IPv6), MX (Mail), CNAME (Alias), NS (Nameserver), PTR (Reverse).",
            },
            { type: "heading", value: "Beispiel 3: NAT im Heimnetz" },
            {
              type: "text",
              value:
                "Router hat öffentliche IP 203.0.113.5. Internes Netz 192.168.1.0/24. PC (192.168.1.10:50000) öffnet google.com. Router ersetzt Quell-IP/Port: 192.168.1.10:50000 → 203.0.113.5:12345 (PAT/NAPT). Google antwortet an 203.0.113.5:12345. Router übersetzt zurück und leitet an 192.168.1.10:50000 weiter. So können viele interne Geräte eine öffentliche IP teilen.",
            },
          ],
          quiz: [
            {
              id: "imp_lf3-nd-1_0",
              q: "DORA?",
              options: [
                "Discover, Offer, Request, Acknowledge",
                "Data,Open,Receive,Accept",
                "Detect,Organize,Redirect,Apply",
                "Domain,Origin,Route,Access",
              ],
              correct: 0,
              explain: "Discover, Offer, Request, Acknowledge.",
            },
            {
              id: "imp_lf3-nd-1_1",
              q: "DNS A-Record?",
              options: ["Name → Mailserver", "Name → IPv6", "IP → Name", "Name → IPv4"],
              correct: 3,
              explain: "A-Record: Name zu IPv4-Adresse.",
            },
            {
              id: "imp_lf3-nd-1_2",
              q: "MX-Record?",
              options: ["IPv4-Adresse", "Mailserver für Domain", "Reverse-Lookup", "Alias"],
              correct: 1,
              explain: "MX zeigt auf den Mailserver einer Domain.",
            },
            {
              id: "imp_lf3-nd-1_3",
              q: "PAT unterscheidet Clients durch?",
              options: ["Portnummern", "MAC-Adressen", "VLANs", "Hostnamen"],
              correct: 0,
              explain: "PAT: Eine öffentliche IP, verschiedene Ports pro Client.",
            },
            {
              id: "imp_lf3-nd-1_4",
              q: "DHCP-Server-Port?",
              options: ["68", "67", "80", "53"],
              correct: 1,
              explain: "Server: UDP 67, Client: UDP 68.",
            },
            {
              id: "imp_lf3-nd-1_5",
              q: "PTR-Record?",
              options: ["Name → IP", "IP → Name (Reverse Lookup)", "Mailserver", "Alias"],
              correct: 1,
              explain: "PTR: Reverse DNS, löst IP in Namen auf.",
            },
            {
              id: "imp_lf3-nd-1_6",
              q: "DHCP Lease bei 50%?",
              options: ["Lease erlischt", "Nichts", "Client versucht Lease zu erneuern", "Neue IP"],
              correct: 2,
              explain: "Bei 50% der Lease: Client versucht beim GLEICHEN Server zu verlängern.",
            },
            {
              id: "imp_lf3-nd-1_7",
              q: "SNAT vs. DNAT?",
              options: [
                "SNAT = eingehend (Ziel-IP wird ersetzt)",
                "Beide ersetzen dieselben Adressfelder im Paket",
                "DNAT = ausgehend (Quell-IP wird ersetzt)",
                "SNAT = ausgehend (Quell-IP), DNAT = eingehend (Ziel-IP)",
              ],
              correct: 3,
              explain: "SNAT: Source NAT (raus). DNAT: Destination NAT (rein, Port Forwarding).",
            },
            {
              id: "imp_lf3-nd-1_8",
              q: "DNS Port?",
              options: ["22", "67", "53", "80"],
              correct: 2,
              explain: "DNS: Port 53 (TCP+UDP).",
            },
            {
              id: "imp_lf3-nd-1_9",
              q: "CNAME Record?",
              options: ["Reverse", "IP-Adresse", "Mailserver", "Alias-Name für anderen Namen"],
              correct: 3,
              explain: "CNAME: Alias, z.B. www → firma.de.",
            },
            {
              id: "imp_lf3-nd-1_10",
              q: "Wofür steht DORA beim DHCP?",
              options: [
                "Distribute, Open, Route, Apply",
                "Discover, Offer, Request, Acknowledge",
                "Deny, Offer, Reject, Accept",
                "Data, Output, Receive, Accept",
              ],
              correct: 1,
              explain: "DORA = die 4 Schritte der DHCP-Lease-Vergabe.",
            },
            {
              id: "imp_lf3-nd-1_11",
              q: "Was ist eine DHCP-Lease?",
              options: [
                "Zeitlich begrenzte Zuweisung einer IP-Adresse",
                "Eine rekursive DNS-Abfrage beim Nameserver",
                "Ein gemietetes Netzwerkkabel vom Provider",
                "Eine Kaufoption auf zusätzliche IP-Adressen",
              ],
              correct: 0,
              explain:
                "Lease = Zeitraum, für den der Client die IP nutzen darf (z.B. 24h). Danach Erneuerung nötig.",
            },
            {
              id: "imp_lf3-nd-1_12",
              q: "Welcher DNS-Record verweist auf den Mailserver?",
              options: ["CNAME", "PTR-Record", "A-Record", "MX-Record"],
              correct: 3,
              explain:
                "MX = Mail Exchange: Gibt an, welcher Server E-Mails für die Domain annimmt.",
            },
            {
              id: "imp_lf3-nd-1_13",
              q: "Was macht NAT?",
              options: [
                "Übersetzt private IP-Adressen in öffentliche",
                "Verschlüsselt Daten",
                "Löst Domainnamen auf",
                "Vergibt IP-Adressen",
              ],
              correct: 0,
              explain: "NAT ersetzt private Quell-IPs durch die öffentliche IP des Routers.",
            },
            {
              id: "imp_lf3-nd-1_14",
              q: "Was ist PAT/NAPT?",
              options: [
                "Ein Verschlüsselungsprotokoll",
                "NAT mit Port-Übersetzung",
                "Ein DNS-Typ",
                "Ein WLAN-Standard",
              ],
              correct: 1,
              explain:
                "Mehrere interne IPs teilen eine öffentliche. PAT: Neben der IP wird auch der Port übersetzt → viele Clients hinter einer öffentlichen IP.",
            },
            {
              id: "imp_lf3-nd-1_15",
              q: "Welcher DNS-Record ist ein Alias?",
              options: ["CNAME", "NS", "MX", "A"],
              correct: 0,
              explain:
                "CNAME = Canonical Name: Alias auf einen anderen Domainnamen (z.B. www.example.com → example.com).",
            },
            {
              id: "imp_lf3-nd-1_16",
              q: "Was passiert wenn der DHCP-Server ausfällt?",
              options: [
                "Der Router erkennt den Ausfall und übernimmt automatisch die Adressvergabe",
                "Alle PCs verlieren im selben Moment ihre IP-Adresse und sind sofort offline",
                "PCs behalten ihre IP, bis Lease abläuft, neue Geräte bekommen APIPA (169.254.x.x)",
                "Es passiert nichts, da IP-Adressen nach der Vergabe dauerhaft gültig bleiben",
              ],
              correct: 2,
              explain:
                "Bestehende Leases laufen weiter. Neue/ablaufende Geräte bekommen keine IP → APIPA.",
            },
            {
              id: "imp_lf3-nd-1_17",
              q: "Welchen Port nutzt DNS?",
              options: ["443", "25", "53", "80"],
              correct: 2,
              explain: "DNS = Port 53 (UDP primär, TCP für große Antworten/Zonentransfer).",
            },
            {
              id: "imp_lf3-nd-1_18",
              q: "Was ist ein Reverse-DNS-Lookup?",
              options: ["MAC → IP", "IP → MAC", "IP → Domainname (PTR-Record)", "Domainname → IP"],
              correct: 2,
              explain: "Reverse DNS: Von IP-Adresse auf Domainnamen auflösen (PTR-Record).",
            },
            {
              id: "imp_lf3-nd-1_19",
              q: "Was ist Port Forwarding?",
              options: [
                "Eingehende Verbindungen an öffentlichem Port an interne IP:Port weiterleiten",
                "Offene Ports eines Zielsystems automatisiert scannen und auflisten",
                "DNS-Anfragen an einen anderen Nameserver weiterleiten (Forwarder)",
                "Bestimmte Ports in der Firewall dauerhaft für Zugriffe blockieren",
              ],
              correct: 0,
              explain:
                "Port Forwarding: Router leitet Verbindung an öffentl. Port (z.B. :443) an internen Server (192.168.1.10:443) weiter.",
            },
          ],
        },
        {
          id: "lf3-nd-2",
          title: "WLAN-Standards & Sicherheit",
          content: [
            { type: "heading", value: "IEEE 802.11" },
            {
              type: "text",
              value:
                "n (Wi-Fi 4): 2,4/5GHz, 600Mbit/s. ac (Wi-Fi 5): 5GHz, 6,9Gbit/s. ax (Wi-Fi 6/6E): +6GHz, 9,6Gbit/s, OFDMA. be (Wi-Fi 7): 46Gbit/s, MLO.",
            },
            { type: "heading", value: "Sicherheit" },
            {
              type: "text",
              value:
                "WEP: Gebrochen – NIEMALS. WPA: TKIP, unsicher. WPA2: AES/CCMP, Mindeststandard. WPA3: SAE, Forward Secrecy. Personal = PSK, Enterprise = 802.1X/RADIUS.",
            },
            {
              type: "text",
              value:
                "2,4GHz: Reichweite, 3 überlappungsfreie Kanäle (1,6,11), störanfällig. 5GHz: Mehr Kanäle, weniger Störung, geringere Reichweite.",
            },
            { type: "heading", value: "WLAN-Controller und Voucher" },
            {
              type: "text",
              value:
                "Autonome APs: Jeder AP wird einzeln konfiguriert. Für kleine Netze (<5 APs). Controllerbasiert: Zentraler WLAN-Controller verwaltet alle APs (CAPWAP-Protokoll). Vorteile: Zentrale Konfiguration, automatische Kanalzuweisung, Roaming zwischen APs, einheitliche Sicherheitsrichtlinien, Firmware-Updates zentral. Voucher-System/Captive Portal: Gäste bekommen Zugangscode mit Zeitlimit. Erfüllt rechtliche Anforderungen (Nachvollziehbarkeit). Trennung von Gäste- und Firmen-WLAN über VLANs.",
            },
            { type: "heading", value: "Übungsaufgabe 1: WLAN-Sicherheit" },
            {
              type: "text",
              value: "Welcher WLAN-Sicherheitsstandard ist heute Pflicht und welche sind unsicher?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nAktuell WPA3 (bzw. mind. WPA2 mit AES).\nUnsicher/veraltet: WEP (leicht zu knacken) und WPA\nmit TKIP. Offenes WLAN ohne Verschlüsselung nur für\nGastnetze mit Isolierung. Starkes Passwort wichtig.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Frequenzbänder" },
            { type: "text", value: "Unterschied 2,4-GHz- und 5-GHz-WLAN?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n2,4 GHz: größere Reichweite, bessere\nWanddurchdringung, aber langsamer und störanfälliger\n(wenige Kanäle, viele Geräte).\n5 GHz: schneller, mehr Kanäle, weniger Störung,\naber geringere Reichweite. 6 GHz (Wi-Fi 6E) erweitert\ndas zusätzlich.",
            },
            { type: "heading", value: "Übungsaufgabe 3: SSID-Verteilung" },
            {
              type: "text",
              value:
                "Ein Büro auf 3 Etagen braucht lückenloses WLAN mit einer SSID. Wie löst du das?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nMehrere Access Points mit GLEICHER SSID und\nVerschlüsselung, idealerweise von einem WLAN-\nController verwaltet. Überlappende Funkzellen mit\nverschiedenen Kanälen, damit Geräte beim Gehen\nnahtlos roamen. So wirkt es wie ein zusammenhängendes\nNetz.",
            },
            { type: "heading", value: "Übungsaufgabe 1: WLAN-Standards" },
            { type: "text", value: "Ordne zu: Wi-Fi 5, Wi-Fi 6, 2,4 GHz, 5 GHz, MIMO." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nWi-Fi 5 (802.11ac): nur 5 GHz, bis ca. 6,9 Gbit/s.\nWi-Fi 6 (802.11ax): 2,4 + 5 GHz, effizienter bei\nvielen Geräten (OFDMA, MU-MIMO), bis 9,6 Gbit/s.\nMIMO (Multiple Input Multiple Output): mehrere\nAntennen senden/empfangen parallel -> mehr Durchsatz.",
            },
            { type: "heading", value: "Übungsaufgabe 2: WLAN-Sicherheit" },
            {
              type: "text",
              value: "Welche WLAN-Verschlüsselung nutzt du 2024+ und warum nicht WEP?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nWPA3 (oder mindestens WPA2-AES/CCMP).\nWEP ist unsicher: kurze Schlüssel, statischer IV,\nin Minuten knackbar. WPA2-TKIP ebenfalls veraltet.\nWPA3 bietet: SAE-Handshake (gegen Brute-Force),\nForward Secrecy, stärkere Verschlüsselung.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Kanalwahl" },
            {
              type: "text",
              value: "In einem Büro stören sich 3 APs gegenseitig. Welche 2,4-GHz-Kanäle nutzt du?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nKanäle 1, 6, 11 - diese überlappen sich nicht.\nAlle anderen 2,4-GHz-Kanäle überlappen mit\nNachbarkanälen und verursachen Interferenz.\nBei 5 GHz gibt es deutlich mehr nicht-überlappende\nKanäle (weniger Störung bei mehr APs).",
            },
            { type: "heading", value: "Beispiel 1: WLAN-Frequenzbänder" },
            {
              type: "text",
              value:
                "2,4 GHz: 3 überlappungsfreie Kanäle (1, 6, 11), größere Reichweite, mehr Störungen (Mikrowelle, Bluetooth). 5 GHz: Bis zu 19 überlappungsfreie Kanäle (in DE), höhere Geschwindigkeit, geringere Reichweite, weniger Störungen. 6 GHz (Wi-Fi 6E/7): 24 Kanäle, am wenigsten überfüllt. Praxis: Büro mit vielen APs → 5/6 GHz bevorzugen, 2,4 GHz nur für IoT-Geräte.",
            },
            { type: "heading", value: "Beispiel 2: WLAN-Sicherheit: WPA3 vs. WPA2" },
            {
              type: "text",
              value:
                "WPA2-Personal (PSK): Alle nutzen dasselbe Passwort. Angreifer kann mit Handshake-Capture offline Brute-Force machen. WPA2-Enterprise (802.1X): Jeder User eigene Credentials via RADIUS-Server. WPA3-Personal: SAE-Handshake statt PSK → Forward Secrecy, kein Offline-Brute-Force möglich. WPA3-Enterprise: 192-Bit-Sicherheit für Regierung/Militär. Empfehlung: Mindestens WPA2-Enterprise, besser WPA3.",
            },
            { type: "heading", value: "Beispiel 3: WLAN-Ausleuchtung planen" },
            {
              type: "text",
              value:
                "Büro 500m², 50 Mitarbeiter: 1 AP pro 150-200m² = 3-4 APs. Kanalplanung: AP1=Kanal 1, AP2=Kanal 6, AP3=Kanal 11 (2,4 GHz) oder 36/40/44/48 (5 GHz). Sendeleistung reduzieren, um Überlappung zu minimieren. Mindestens 20% Überlappung für nahtloses Roaming. Wand-Dämpfung beachten: Gipskarton ~3dB, Betonwand ~15dB, Stahlbeton ~25dB.",
            },
          ],
          quiz: [
            {
              id: "imp_lf3-nd-2_0",
              q: "Mindeststandard WLAN-Sicherheit?",
              options: ["WPA3", "WPA", "WPA2", "WEP"],
              correct: 2,
              explain: "WPA2 mit AES.",
            },
            {
              id: "imp_lf3-nd-2_1",
              q: "Überlappungsfreie 2,4-GHz-Kanäle?",
              options: ["1", "11", "6", "3"],
              correct: 3,
              explain: "3: Kanäle 1, 6, 11.",
            },
            {
              id: "imp_lf3-nd-2_2",
              q: "Welches neue Authentifizierungsverfahren führt WPA3 ein?",
              options: [
                "WEP",
                "SAE (Simultaneous Authentication of Equals)",
                "TKIP",
                "Offene Authentifizierung ohne Schlüssel",
              ],
              correct: 1,
              explain:
                "SAE ersetzt den PSK-Handshake von WPA2, sicherer gegen Offline-Wörterbuch-Angriffe. Verschlüsselt wird weiterhin mit AES (CCMP/GCMP).",
            },
            {
              id: "imp_lf3-nd-2_3",
              q: "802.1X braucht?",
              options: ["Proxy", "Nur Passwort", "RADIUS-Server", "DNS-Server"],
              correct: 2,
              explain: "802.1X Enterprise: Authentifizierung über RADIUS-Server.",
            },
            {
              id: "imp_lf3-nd-2_4",
              q: "Wi-Fi 6 = ?",
              options: ["802.11n", "802.11ax", "802.11ac", "802.11be"],
              correct: 1,
              explain: "Wi-Fi 6 = 802.11ax.",
            },
            {
              id: "imp_lf3-nd-2_5",
              q: "Hidden SSID: Sicherheit?",
              options: ["Gering (SSID trotzdem erkennbar)", "Nur bei WPA3", "Perfekt", "Sehr hoch"],
              correct: 0,
              explain: "SSID verstecken ist kein echter Schutz, Netzwerk ist trotzdem erkennbar.",
            },
            {
              id: "imp_lf3-nd-2_6",
              q: "Captive Portal?",
              options: [
                "Firewall",
                "VPN-Client",
                "Router",
                "Anmeldeseite bei WLAN-Zugang (Hotel, Gäste)",
              ],
              correct: 3,
              explain: "Webseite die bei WLAN-Verbindung zur Anmeldung/Zustimmung auffordert.",
            },
            {
              id: "imp_lf3-nd-2_7",
              q: "WPA2 Personal vs. Enterprise?",
              options: [
                "Enterprise ist die kostenlose Variante für Privathaushalte",
                "Beide Modi sind identisch und unterscheiden sich nur im Namen",
                "Personal = PSK (ein Passwort), Enterprise = RADIUS/802.1X",
                "Personal bietet die stärkere Verschlüsselung für Firmennetze",
              ],
              correct: 2,
              explain: "Personal: Gemeinsames Passwort. Enterprise: Individuelle Accounts.",
            },
            {
              id: "imp_lf3-nd-2_8",
              q: "Wi-Fi 7 = ?",
              options: ["802.11ax", "802.11ac", "802.11n", "802.11be"],
              correct: 3,
              explain: "Wi-Fi 7 = 802.11be.",
            },
            {
              id: "imp_lf3-nd-2_9",
              q: "WEP: Sicher?",
              options: [
                "Ja",
                "Nein (gebrochen, niemals verwenden!)",
                "Mit starkem Passwort",
                "Nur intern",
              ],
              correct: 1,
              explain: "WEP ist geknackt. Niemals verwenden.",
            },
            {
              id: "imp_lf3-nd-2_10",
              q: "Welcher WLAN-Standard bietet die höchste Geschwindigkeit?",
              options: [
                "Wi-Fi 7 (802.11be)",
                "Wi-Fi 4 (802.11n)",
                "Wi-Fi 5 (802.11ac)",
                "Wi-Fi 6 (802.11ax)",
              ],
              correct: 0,
              explain:
                "Wi-Fi 7: Bis 46 Gbit/s (theoretisch). Wi-Fi 6: 9,6 Gbit/s. Wi-Fi 5: 6,9 Gbit/s.",
            },
            {
              id: "imp_lf3-nd-2_11",
              q: "Welches WLAN-Sicherheitsprotokoll ist veraltet und unsicher?",
              options: ["WPA2", "WPA3", "802.1X", "WEP"],
              correct: 3,
              explain:
                "WEP: In Minuten knackbar. Seit 2004 als unsicher eingestuft. Nicht mehr verwenden!",
            },
            {
              id: "imp_lf3-nd-2_12",
              q: "Was ist der Vorteil von WPA2-Enterprise gegenüber WPA2-Personal?",
              options: [
                "Deutlich einfacher einzurichten als der Personal-Modus",
                "Individuelle Zugangsdaten pro User via RADIUS",
                "Höherer Datendurchsatz durch effizientere Verschlüsselung",
                "Geringere Kosten, da keine Lizenzgebühren anfallen",
              ],
              correct: 1,
              explain:
                "Enterprise: Jeder User hat eigene Credentials → bei Mitarbeiteraustritt einfach sperren, kein PSK-Wechsel nötig.",
            },
            {
              id: "imp_lf3-nd-2_13",
              q: "Welche drei 2,4-GHz-Kanäle überlappen sich nicht?",
              options: ["4, 8, 12", "1, 5, 9", "1, 6, 11", "1, 2, 3"],
              correct: 2,
              explain:
                "In Deutschland: Kanäle 1, 6, 11 (je 22 MHz breit, 5 MHz Abstand zwischen Kanälen).",
            },
            {
              id: "imp_lf3-nd-2_14",
              q: "Was ist MIMO bei WLAN?",
              options: [
                "Ein WLAN-Name",
                "Ein Kanalwechselprotokoll",
                "Ein Verschlüsselungsverfahren",
                "Multiple Input Multiple Output",
              ],
              correct: 3,
              explain:
                "Mehrere Antennen für parallele Datenströme. MIMO: Mehrere Antennen senden/empfangen parallel → höhere Geschwindigkeit und bessere Reichweite.",
            },
            {
              id: "imp_lf3-nd-2_15",
              q: "Was ist eine SSID?",
              options: [
                "Subnet Service ID",
                "Server Side Interface Device",
                "Service Set Identifier",
                "Security Service Identifier",
              ],
              correct: 2,
              explain:
                "Der WLAN-Netzwerkname. SSID = Netzwerkname des WLANs. Kann sichtbar oder versteckt sein (Hidden SSID = kein echter Schutz!).",
            },
            {
              id: "imp_lf3-nd-2_16",
              q: "Was macht ein WLAN-Controller?",
              options: [
                "Zentrale Verwaltung vieler Access Points",
                "Verschlüsselt WLAN-Traffic",
                "Verstärkt das Signal",
                "Ersetzt den Router",
              ],
              correct: 0,
              explain:
                "Kanäle, Firmware, Policies. WLAN-Controller: Zentral APs managen, Roaming steuern, Load Balancing, einheitliche Policies.",
            },
            {
              id: "imp_lf3-nd-2_17",
              q: "Was ist 802.1X im WLAN-Kontext?",
              options: [
                "Ein Funkstandard, der Datenraten und Frequenzbänder im WLAN definiert",
                "Port-basierte Netzwerkzugangskontrolle mit RADIUS-Authentifizierung",
                "Ein Protokoll zur automatischen Auswahl freier Funkkanäle im WLAN",
                "Ein Verschlüsselungsverfahren, das die Nutzdaten im Funknetz chiffriert",
              ],
              correct: 1,
              explain:
                "802.1X: Supplicant (Client) → Authenticator (AP) → Authentication Server (RADIUS). Prüft Zugangsberechtigung.",
            },
            {
              id: "imp_lf3-nd-2_18",
              q: "Was ist der Nachteil des 5-GHz-Bands?",
              options: [
                "Deutlich weniger nutzbare Funkkanäle als bei 2,4 GHz",
                "Schwächere Verschlüsselung und damit unsicherer Betrieb",
                "Grundsätzlich niedrigere Datenraten als das 2,4-GHz-Band",
                "Geringere Reichweite und schlechtere Wanddurchdringung",
              ],
              correct: 3,
              explain:
                "5 GHz: Höhere Frequenz = kürzere Wellenlänge = schlechtere Durchdringung von Wänden/Hindernissen.",
            },
            {
              id: "imp_lf3-nd-2_19",
              q: "Was ist Wi-Fi 6E?",
              options: [
                "Wi-Fi 6 für Enterprise",
                "Wi-Fi 6 mit Ethernet",
                "Wi-Fi 6 erweitert um das 6-GHz-Band",
                "Wi-Fi 6 verschlüsselt",
              ],
              correct: 2,
              explain:
                "Wi-Fi 6E: 802.11ax mit zusätzlichem 6-GHz-Band → viel mehr Kanäle, weniger Überlappung.",
            },
          ],
        },
        {
          id: "lf3-nd-3",
          title: "IPv6",
          content: [
            { type: "heading", value: "Warum IPv6?" },
            {
              type: "text",
              value:
                "IPv4: 2^32 = ~4,3 Milliarden Adressen (erschöpft). IPv6: 2^128 = praktisch unendlich. 128 Bit, 8 Gruppen je 4 Hex-Ziffern: 2001:0db8:85a3:0000:0000:8a2e:0370:7334. Kurzschreibung: Führende Nullen weglassen, eine Nullgruppe durch :: ersetzen.",
            },
            { type: "heading", value: "Adresstypen" },
            {
              type: "text",
              value:
                "Global Unicast (2000::/3): Weltweit eindeutig, wie öffentliche IPv4. Link-Local (fe80::/10): Nur im lokalen Netz gültig, automatisch generiert, für Neighbor Discovery. Unique Local (fc00::/7): Wie private IPv4 (10.x, 192.168.x). Multicast (ff00::/8): An Gruppe von Empfängern. Kein Broadcast in IPv6! Wird durch Multicast ersetzt.",
            },
            { type: "heading", value: "Autokonfiguration" },
            {
              type: "text",
              value:
                "SLAAC (Stateless Address Autoconfiguration): Router sendet Netzwerk-Präfix (Router Advertisement), Host generiert Interface-ID aus MAC (EUI-64) oder zufällig (Privacy Extensions). Kein DHCP nötig! DHCPv6 (Stateful): Wie DHCP für IPv4, vergibt feste Adressen + Optionen. Dual-Stack: IPv4 und IPv6 parallel betreiben (Übergangslösung).",
            },
            { type: "heading", value: "Übungsaufgabe: IPv6 verkürzen" },
            {
              type: "text",
              value:
                "Verkürze die Adresse 2001:0db8:0000:0000:0000:ff00:0042:8329 nach den IPv6-Regeln. Und umgekehrt: schreibe fe80::1 vollständig aus.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nVerkürzen:\n1. Führende Nullen je Block weglassen:\n   2001:db8:0:0:0:ff00:42:8329\n2. Längste Nullfolge durch :: ersetzen (nur 1x!):\n   2001:db8::ff00:42:8329\n\nAusschreiben fe80::1:\nfe80:0000:0000:0000:0000:0000:0000:0001\n(:: steht für 6 Nullblöcke, damit 8 Blöcke gesamt)",
            },
            { type: "heading", value: "Übungsaufgabe 2: IPv6-Vorteile" },
            { type: "text", value: "Nenne zwei wesentliche Vorteile von IPv6 gegenüber IPv4." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. Riesiger Adressraum: 128 Bit statt 32 Bit -\n   praktisch unbegrenzt, kein NAT mehr nötig.\n2. Autokonfiguration (SLAAC): Geräte können sich\n   selbst eine Adresse vergeben.\nDazu: vereinfachter Header, eingebautes IPsec-Konzept.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Adresstypen" },
            {
              type: "text",
              value: "Was ist eine Link-Local-Adresse bei IPv6 und woran erkennt man sie?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nEine nur im lokalen Netzsegment gültige Adresse,\ndie jedes IPv6-Gerät automatisch hat. Sie beginnt\nimmer mit fe80::/10 (praktisch fe80::...). Wird nicht\ngeroutet, dient z.B. für NDP und lokale Kommunikation.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Link-Local" },
            { type: "text", value: "Was ist eine Link-Local-Adresse bei IPv6?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nfe80::/10 - wird automatisch auf jeder IPv6-fähigen\nSchnittstelle generiert (aus MAC via EUI-64 oder\nzufällig). Nur im lokalen Netzsegment gültig,\nnicht geroutet. Wird für Nachbarsuche (NDP) und\nals Gateway-Adresse genutzt.",
            },
            { type: "heading", value: "Übungsaufgabe 3: SLAAC" },
            { type: "text", value: "Was bedeutet SLAAC und wie funktioniert es?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nSLAAC (Stateless Address Autoconfiguration):\nDer Host erzeugt seine IPv6-Adresse SELBST aus\ndem Router-Präfix (aus Router Advertisement) +\neigener Interface-ID (z.B. aus MAC). Kein DHCP-Server\nnötig. 'Stateless' = kein Server merkt sich die\nZuordnung (anders als DHCPv6 'stateful').",
            },
            { type: "heading", value: "Beispiel 1: IPv6-Adressformat" },
            {
              type: "text",
              value:
                "128 Bit, 8 Gruppen à 4 Hex-Zeichen: 2001:0db8:85a3:0000:0000:8a2e:0370:7334. Kürzungsregeln: Führende Nullen weglassen: 2001:db8:85a3:0:0:8a2e:370:7334. Einmalig aufeinanderfolgende Null-Gruppen durch :: ersetzen: 2001:db8:85a3::8a2e:370:7334. :: darf nur EINMAL vorkommen (sonst mehrdeutig).",
            },
            { type: "heading", value: "Beispiel 2: Link-Local, ULA und Global Unicast" },
            {
              type: "text",
              value:
                "Link-Local (fe80::/10): Automatisch auf jedem Interface, nur im lokalen Segment gültig. Vergleichbar mit APIPA bei IPv4. ULA (fc00::/7): Private Adressen, nicht im Internet geroutet. Vergleichbar mit 10.x.x.x/192.168.x.x. Global Unicast (2000::/3): Öffentliche, weltweit eindeutige Adressen. Jedes Gerät bekommt typischerweise mehrere IPv6-Adressen gleichzeitig!",
            },
            { type: "heading", value: "Beispiel 3: SLAAC – Autoconfiguration" },
            {
              type: "text",
              value:
                "Stateless Address Autoconfiguration: Host generiert Link-Local-Adresse aus MAC (EUI-64) oder zufällig (Privacy Extensions). Host sendet Router Solicitation (RS). Router antwortet mit Router Advertisement (RA): Präfix (z.B. 2001:db8:1::/64), Gateway, DNS (via RDNSS). Host bildet vollständige Adresse: Präfix + Interface-ID. Kein DHCP-Server nötig! (DHCPv6 existiert aber für mehr Kontrolle).",
            },
          ],
          quiz: [
            {
              id: "imp_lf3-nd-3_0",
              q: "IPv6 = wie viele Bit?",
              options: ["64", "128", "32", "256"],
              correct: 1,
              explain: "128 Bit.",
            },
            {
              id: "imp_lf3-nd-3_1",
              q: "Link-Local beginnt mit?",
              options: ["2001:", "fc00:", "fe80:", "ff00:"],
              correct: 2,
              explain: "fe80::/10.",
            },
            {
              id: "imp_lf3-nd-3_2",
              q: "IPv6 hat Broadcast?",
              options: ["Nur im LAN", "Optional", "Ja", "Nein, Multicast stattdessen"],
              correct: 3,
              explain: "Kein Broadcast in IPv6. Wird durch Multicast ersetzt.",
            },
            {
              id: "imp_lf3-nd-3_3",
              q: "SLAAC nutzt?",
              options: ["DNS", "Router Advertisement + Interface-ID", "ARP", "DHCP-Server"],
              correct: 1,
              explain: "SLAAC: Router sendet Präfix, Host generiert Adresse selbst.",
            },
            {
              id: "imp_lf3-nd-3_4",
              q: "Unique Local (fc00::/7)?",
              options: ["Öffentlich", "Wie private IPv4 (intern)", "Nur Multicast", "Link-Local"],
              correct: 1,
              explain: "Unique Local = privater Adressbereich wie 10.x oder 192.168.x.",
            },
            {
              id: "imp_lf3-nd-3_5",
              q: "EUI-64?",
              options: [
                "Interface-ID aus MAC-Adresse ableiten",
                "Verschlüsselung",
                "DNS-Protokoll",
                "IPv4-Kompatibilität",
              ],
              correct: 0,
              explain: "MAC-Adresse wird in 64-Bit Interface-ID umgewandelt (für SLAAC).",
            },
            {
              id: "imp_lf3-nd-3_6",
              q: "Kein Broadcast in IPv6?",
              options: ["Anycast", "Gibt es", "Multicast stattdessen", "Doch"],
              correct: 2,
              explain: "Multicast ersetzt Broadcast.",
            },
            {
              id: "imp_lf3-nd-3_7",
              q: "Privacy Extensions?",
              options: ["VPN", "Zufällige Interface-ID statt MAC", "Proxy", "Firewall"],
              correct: 1,
              explain: "Datenschutz.",
            },
            {
              id: "imp_lf3-nd-3_8",
              q: "DHCPv6 vs SLAAC?",
              options: [
                "SLAAC=Server",
                "Gleich",
                "DHCPv6=zentral, SLAAC=Router-basiert",
                "DHCPv6=auto",
              ],
              correct: 2,
              explain: "Zwei Wege.",
            },
            {
              id: "imp_lf3-nd-3_9",
              q: "NAT bei IPv6?",
              options: ["Nein, genug Adressen", "Immer", "Ja", "Pflicht"],
              correct: 0,
              explain: "Jedes Gerät eigene öffentliche IP.",
            },
            {
              id: "imp_lf3-nd-3_10",
              q: "Wie lang ist eine IPv6-Adresse?",
              options: ["32 Bit", "64 Bit", "256 Bit", "128 Bit"],
              correct: 3,
              explain: "IPv6 = 128 Bit (IPv4 = 32 Bit). 2^128 ≈ 3,4 × 10^38 Adressen.",
            },
            {
              id: "imp_lf3-nd-3_11",
              q: "Welcher Adressbereich ist Link-Local?",
              options: ["ff00::/8", "fc00::/7", "fe80::/10", "2001::/16"],
              correct: 2,
              explain:
                "fe80::/10: Link-Local, automatisch auf jedem Interface, nur im lokalen Segment.",
            },
            {
              id: "imp_lf3-nd-3_12",
              q: "Was ersetzt ARP bei IPv6?",
              options: [
                "NDP (Neighbor Discovery Protocol) mit ICMPv6",
                "Kein Ersatz nötig",
                "mDNS",
                "DHCPv6",
              ],
              correct: 0,
              explain: "NDP: Neighbor Solicitation/Advertisement ersetzen ARP Request/Reply.",
            },
            {
              id: "imp_lf3-nd-3_13",
              q: "Was ist SLAAC?",
              options: [
                "Ein DNS-Service",
                "Ein Sicherheitsprotokoll",
                "Ein Routing-Protokoll",
                "Stateless Address Autoconfiguration",
              ],
              correct: 3,
              explain:
                "Host konfiguriert sich selbst via Router Advertisement. SLAAC: Automatische IPv6-Konfiguration ohne DHCP, basierend auf Router Advertisements.",
            },
            {
              id: "imp_lf3-nd-3_14",
              q: "Welche Kürzung ist bei IPv6 erlaubt?",
              options: [
                "Nur führende Nullen weglassen, :: ist nicht zulässig",
                "Es ist keinerlei Kürzung erlaubt, alle 32 Hexziffern sind Pflicht",
                "Führende Nullen + eine Sequenz von Nullgruppen durch :: ersetzen",
                "Beliebige Nullen an jeder Stelle der Adresse weglassen",
              ],
              correct: 2,
              explain:
                "Führende Nullen pro Gruppe weglassen + EINMAL :: für aufeinanderfolgende Null-Gruppen.",
            },
            {
              id: "imp_lf3-nd-3_15",
              q: "Gibt es Broadcast bei IPv6?",
              options: [
                "Nur im LAN",
                "Nur für DNS",
                "Ja, wie bei IPv4",
                "Nein – ersetzt durch Multicast und Anycast",
              ],
              correct: 3,
              explain:
                "IPv6 hat KEINEN Broadcast. Stattdessen: Multicast (ff02::1 = alle Knoten) und Anycast.",
            },
            {
              id: "imp_lf3-nd-3_16",
              q: "Was ist ein /64-Präfix?",
              options: [
                "Die ersten 64 Bit = Netzwerkteil, letzte 64 Bit = Interface-ID",
                "Ein halbiertes Subnetz mit 64 nutzbaren Adressen",
                "Ein reserviertes privates Netz nur für interne Hosts",
                "Die gesamte IPv6-Adresse inklusive Interface-Anteil",
              ],
              correct: 0,
              explain:
                "/64: Standard-Subnetzgröße bei IPv6. 64 Bit Netzwerkteil + 64 Bit Interface-ID.",
            },
            {
              id: "imp_lf3-nd-3_17",
              q: "Was ist Dual-Stack?",
              options: [
                "Zwei Netzwerkkarten",
                "Zwei VLANs",
                "Zwei DNS-Server",
                "Gerät nutzt IPv4 und IPv6 gleichzeitig",
              ],
              correct: 3,
              explain:
                "Dual-Stack: Beide Protokolle parallel → schrittweise Migration von IPv4 zu IPv6 möglich.",
            },
            {
              id: "imp_lf3-nd-3_18",
              q: "Was sind Privacy Extensions bei IPv6?",
              options: [
                "Ein integrierter VPN-Ersatz, der den gesamten Datenverkehr tunnelt",
                "Zufällige Interface-ID statt MAC-basierter EUI-64 → Datenschutz",
                "Die verpflichtende Verschlüsselung aller IPv6-Pakete per IPsec",
                "Eine Firewall-Funktion, die eingehende Verbindungen blockiert",
              ],
              correct: 1,
              explain:
                "Privacy Extensions: Zufällige, rotierende Interface-ID statt fester MAC-Ableitung → Tracking erschwert.",
            },
            {
              id: "imp_lf3-nd-3_19",
              q: "Wie viele IPv6-Adressen hat ein Interface typischerweise?",
              options: ["Genau 4", "Genau 1", "Keine", "Mindestens 2"],
              correct: 3,
              explain:
                "Link-Local + Global Unicast. Mindestens: 1 Link-Local (fe80::) + 1+ Global Unicast. Oft auch temporäre Privacy-Adressen.",
            },
          ],
        },
        {
          id: "lf3-nd-4",
          title: "Proxy & VPN",
          content: [
            { type: "heading", value: "Proxy-Server" },
            {
              type: "text",
              value:
                "Vermittler zwischen Client und Internet. Forward Proxy: Client → Proxy → Internet (Filterung, Caching, Anonymisierung). Reverse Proxy: Internet → Proxy → interne Server (Load Balancing, SSL-Termination, WAF). Transparenter Proxy: Client merkt nichts, wird im Netzwerk erzwungen.",
            },
            { type: "heading", value: "VPN (Virtual Private Network)" },
            {
              type: "text",
              value:
                "Verschlüsselter Tunnel über öffentliches Netz. Site-to-Site: Standorte verbinden (IPsec). Remote Access: Einzelne Mitarbeiter ins Firmennetz (SSL/TLS-VPN, IPsec). Split Tunneling: Nur Firmendaten über VPN, Rest direkt ins Internet.",
            },
            { type: "heading", value: "VPN-Protokolle" },
            {
              type: "text",
              value:
                "IPsec: Standard für Site-to-Site, Schicht 3, AH+ESP. OpenVPN: Open Source, SSL/TLS-basiert, flexibel. WireGuard: Modern, schnell, schlanker Code. L2TP/IPsec: Kombination, veraltet. PPTP: Unsicher, nicht mehr verwenden.",
            },
            { type: "heading", value: "Proxy-Typen" },
            {
              type: "text",
              value:
                "Forward Proxy: Steht vor den Clients, leitet deren Anfragen ins Internet. Nutzen: Caching, Inhaltsfilter, Anonymisierung, Zugriffskontrolle. Reverse Proxy: Steht vor den Servern, nimmt Anfragen aus dem Internet entgegen. Nutzen: Load Balancing, SSL-Termination, Schutz der Backend-Server, Caching. Transparenter Proxy: Greift ein, ohne dass der Client konfiguriert werden muss.",
            },
            { type: "heading", value: "VPN-Typen und -Protokolle" },
            {
              type: "text",
              value:
                "Site-to-Site VPN: Verbindet zwei Standorte/Netze dauerhaft (z.B. Zentrale und Filiale). Remote-Access (End-to-Site) VPN: Einzelner Mitarbeiter verbindet sich von unterwegs ins Firmennetz. Protokolle: IPsec (Layer 3, Site-to-Site Standard, ESP/AH, IKE für Schlüsselaustausch), OpenVPN (TLS-basiert, flexibel), WireGuard (modern, schlank, schnell), L2TP/IPsec. Ziel immer: Vertraulichkeit (Verschlüsselung), Integrität und Authentizität über ein unsicheres Netz (Internet).",
            },
            {
              type: "code",
              value:
                "BEISPIEL-ENTSCHEIDUNG:\nZwei feste Standorte verbinden  → Site-to-Site (IPsec)\nHomeoffice-MA ans Firmennetz    → Remote-Access VPN\nÖffentlich erreichbarer Webshop → Reverse Proxy davor\nMitarbeiter-Surfen filtern/cachen → Forward Proxy",
            },
            { type: "heading", value: "Übungsaufgabe 1: Proxy-Nutzen" },
            { type: "text", value: "Nenne drei Aufgaben, die ein Forward-Proxy übernehmen kann." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. Caching: häufig abgerufene Inhalte zwischenspeichern\n   -> schneller, weniger Bandbreite.\n2. Inhaltsfilter/Zugriffskontrolle: bestimmte Seiten\n   sperren, protokollieren.\n3. Anonymisierung: nach außen tritt nur der Proxy\n   auf, nicht der einzelne Client.",
            },
            { type: "heading", value: "Übungsaufgabe 2: VPN-Wahl" },
            {
              type: "text",
              value:
                "Homeoffice-Mitarbeiter soll sicher ins Firmennetz. Welcher VPN-Typ und welches Ziel?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nRemote-Access-VPN (End-to-Site). Der Mitarbeiter\nbaut vom Laptop einen verschlüsselten Tunnel ins\nFirmennetz auf. Ziel: Vertraulichkeit (Verschlüsselung),\nIntegrität und Authentizität über das unsichere\nInternet. Protokoll z.B. IPsec oder WireGuard.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Reverse-Proxy" },
            { type: "text", value: "Warum stellt man einen Reverse-Proxy vor Webserver?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nLastverteilung auf mehrere Backend-Server,\nSSL-Termination (zentrale Zertifikate), Schutz der\nBackends (nicht direkt aus dem Internet erreichbar)\nund Caching. Der Client sieht nur den Reverse-Proxy.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Proxy-Funktion" },
            {
              type: "text",
              value:
                "Ein Unternehmen will bestimmte Websites für Mitarbeiter sperren. Welche Technik?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nForward Proxy mit URL-Filter/Content-Filter.\nAlle HTTP(S)-Anfragen der Clients gehen durch den\nProxy, der anhand von Sperrlisten/Kategorien\nbestimmte Seiten blockiert. Zusätzlich Logging\nder Zugriffe möglich.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Split-Tunneling" },
            { type: "text", value: "Was ist Split-Tunneling bei VPN?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nNur der Firmennetz-Traffic geht durch den VPN-Tunnel,\nprivates Surfen geht direkt ins Internet.\nVorteil: weniger Last auf dem VPN-Gateway, schnelleres\nprivates Surfen.\nNachteil: der private Traffic ist ungeschützt und\nkönnte ein Sicherheitsrisiko sein (Malware-Einfallstor).",
            },
            { type: "heading", value: "Beispiel 1: VPN-Typen im Unternehmenseinsatz" },
            {
              type: "text",
              value:
                "Site-to-Site VPN: Zwei Standorte dauerhaft verbunden (Router↔Router). Protokoll: IPsec (Tunnel-Modus). Beispiel: Hauptsitz ↔ Filiale. Remote-Access VPN: Einzelner Mitarbeiter verbindet sich von unterwegs. Protokoll: WireGuard, OpenVPN oder IPsec IKEv2. Split-Tunneling: Nur Firmentraffic durch VPN, Internet direkt → schneller aber weniger sicher.",
            },
            { type: "heading", value: "Beispiel 2: Proxy-Server im Unternehmen" },
            {
              type: "text",
              value:
                "Forward-Proxy: Steht zwischen internen Clients und Internet. Funktionen: URL-Filter (Sperrlisten), Caching (häufig besuchte Seiten), Logging (wer besucht was), Bandbreiten-Management. Reverse-Proxy: Steht vor den eigenen Webservern. Funktionen: Load Balancing, SSL-Termination, WAF (Web Application Firewall), Caching. Beispiele: Squid (Forward), nginx/HAProxy (Reverse).",
            },
            { type: "heading", value: "Beispiel 3: VPN-Protokolle Vergleich" },
            {
              type: "text",
              value:
                "IPsec: Standard für Site-to-Site, komplex, sehr sicher, in Hardware-Firewalls integriert. OpenVPN: Open Source, SSL/TLS-basiert, flexibel, UDP oder TCP, gut für Remote-Access. WireGuard: Modern, minimaler Code (~4000 Zeilen vs. 600.000 bei OpenVPN), sehr schnell, einfach zu konfigurieren. Empfehlung heute: WireGuard für neue Installationen, IPsec für Site-to-Site mit Hardware-Appliances.",
            },
          ],
          quiz: [
            {
              id: "imp_lf3-nd-4_0",
              q: "Site-to-Site VPN nutzt typisch?",
              options: ["PPTP", "SSL/TLS", "HTTP", "IPsec"],
              correct: 3,
              explain: "IPsec = Standard für Site-to-Site-VPN.",
            },
            {
              id: "imp_lf3-nd-4_1",
              q: "Was macht ein Reverse Proxy?",
              options: [
                "Client anonymisieren",
                "DNS-Anfragen filtern",
                "E-Mails verschlüsseln",
                "Interne Server schützen/Load Balancing",
              ],
              correct: 3,
              explain:
                "Reverse Proxy steht vor internen Servern → Load Balancing, SSL-Termination, WAF.",
            },
            {
              id: "imp_lf3-nd-4_2",
              q: "Forward Proxy: Richtung?",
              options: [
                "Internet → Server",
                "Client → Proxy → Internet",
                "Client → Client",
                "Server → Client",
              ],
              correct: 1,
              explain: "Forward: Client-Anfragen gehen über Proxy ins Internet.",
            },
            {
              id: "imp_lf3-nd-4_3",
              q: "Transparenter Proxy?",
              options: [
                "Nur mit VPN",
                "Client muss konfiguriert werden",
                "Client merkt nichts, im Netzwerk erzwungen",
                "Nur für HTTPS",
              ],
              correct: 2,
              explain: "Transparent: Wird im Netzwerk erzwungen, Client-Konfiguration nicht nötig.",
            },
            {
              id: "imp_lf3-nd-4_4",
              q: "Split Tunneling?",
              options: [
                "VPN deaktiviert",
                "VPN-Tunnel wird geteilt",
                "Nur Firmendaten über VPN, Rest direkt",
                "Doppeltes VPN",
              ],
              correct: 2,
              explain: "Firmenverkehr über VPN, privates Surfen direkt ins Internet.",
            },
            {
              id: "imp_lf3-nd-4_5",
              q: "IPsec arbeitet auf OSI-Schicht?",
              options: ["2", "3", "4", "7"],
              correct: 1,
              explain: "IPsec = Schicht 3 (Network Layer).",
            },
            {
              id: "imp_lf3-nd-4_6",
              q: "WireGuard Vorteil?",
              options: [
                "Besonders große, gewachsene Codebasis",
                "Modern, schnell, schlanker Code",
                "Nur für Windows",
                "Älteste VPN-Lösung",
              ],
              correct: 1,
              explain: "WireGuard: Modern, performant, wenig Code (einfacher zu auditieren).",
            },
            {
              id: "imp_lf3-nd-4_7",
              q: "Reverse Proxy Vorteil?",
              options: [
                "Backend-Server nicht direkt erreichbar + Load Balancing",
                "Er dient ausschließlich dem Caching statischer Inhalte",
                "Er wird nur für den Aufbau von VPN-Tunneln eingesetzt",
                "Er übernimmt ausschließlich die SSL-Verschlüsselung",
              ],
              correct: 0,
              explain: "Backend geschützt, Plus: Caching, SSL-Termination, Load Balancing.",
            },
            {
              id: "imp_lf3-nd-4_8",
              q: "IPsec Tunnel vs. Transport?",
              options: [
                "Der Tunnelmodus ist durch geringeren Overhead schneller",
                "Tunnel = neuer IP-Header, Transport = nur Payload",
                "Der Transportmodus verschlüsselt stärker und ist sicherer",
                "Beide Modi arbeiten identisch und sind frei austauschbar",
              ],
              correct: 1,
              explain: "Tunnel: Komplettes Paket verschlüsselt + neuer Header.",
            },
            {
              id: "imp_lf3-nd-4_9",
              q: "OpenVPN nutzt?",
              options: ["IPsec", "PPTP", "WPA", "SSL/TLS"],
              correct: 3,
              explain: "OpenVPN: SSL/TLS-basiert, Open Source.",
            },
            {
              id: "imp_lf3-nd-4_10",
              q: "Was ist der Unterschied zwischen Forward- und Reverse-Proxy?",
              options: [
                "Forward ist die deutlich sicherere Proxy-Variante",
                "Es gibt keinen Unterschied, beide Begriffe sind synonym",
                "Reverse-Proxys übertragen Daten grundsätzlich schneller",
                "Forward = Client→Internet, Reverse = Internet→Server",
              ],
              correct: 3,
              explain:
                "Forward-Proxy: Schützt Clients (ausgehend). Reverse-Proxy: Schützt Server (eingehend).",
            },
            {
              id: "imp_lf3-nd-4_11",
              q: "Was ist Split-Tunneling bei VPN?",
              options: [
                "Der VPN-Tunnel wird zur Sicherheit doppelt verschlüsselt aufgebaut",
                "Der VPN-Tunnel wird zur Lastverteilung auf mehrere Server gesplittet",
                "Es werden zwei separate VPN-Tunnel gleichzeitig zum Firmennetz aufgebaut",
                "VPN-Verkehr wird aufgeteilt: Firmentraffic durch VPN, Internet direkt",
              ],
              correct: 3,
              explain:
                "Split-Tunneling: Nur Firmenrelevantes durch VPN → weniger Bandbreite nötig, aber Internet-Traffic ungeschützt.",
            },
            {
              id: "imp_lf3-nd-4_12",
              q: "Welches VPN-Protokoll ist am einfachsten zu konfigurieren?",
              options: ["WireGuard", "PPTP", "IPsec IKEv2", "L2TP"],
              correct: 0,
              explain:
                "WireGuard: Minimale Konfiguration (wenige Zeilen), modernes Kryptografie-Design, sehr performant.",
            },
            {
              id: "imp_lf3-nd-4_13",
              q: "Was ist ein Site-to-Site VPN?",
              options: [
                "Ein VPN-Typ, der grundsätzlich ohne Verschlüsselung arbeitet",
                "Einwahl-VPN für einen einzelnen mobilen Benutzer",
                "Dauerhafter VPN-Tunnel zwischen zwei Netzwerken/Standorten",
                "Ein VPN, das zwingend über Satellitenverbindungen läuft",
              ],
              correct: 2,
              explain:
                "Site-to-Site: Zwei Router/Firewalls verbinden ganze Netze permanent miteinander.",
            },
            {
              id: "imp_lf3-nd-4_14",
              q: "Was cached ein Proxy-Server?",
              options: [
                "Häufig angeforderte Webinhalte → schnellere Auslieferung",
                "Die Passwörter der Benutzer für automatische Logins",
                "Die MAC-Adressen aller Clients im lokalen Netzwerk",
                "Ein- und ausgehende E-Mails der Benutzerpostfächer",
              ],
              correct: 0,
              explain:
                "Proxy-Cache: Speichert Webseiten/Dateien lokal → nächster Request wird aus Cache bedient statt aus dem Internet.",
            },
            {
              id: "imp_lf3-nd-4_15",
              q: "Warum wird PPTP als unsicher eingestuft?",
              options: [
                "Zu hohe Übertragungsrate, sodass Firewalls Pakete nicht prüfen",
                "Schwache Verschlüsselung (MS-CHAPv2 geknackt), keine PFS",
                "Zu großer Protokoll-Overhead macht die Verbindung angreifbar",
                "Es läuft nur unter Windows und erhält dort keine Updates mehr",
              ],
              correct: 1,
              explain: "PPTP: MS-CHAPv2 ist kryptographisch gebrochen. Nicht mehr einsetzen.",
            },
            {
              id: "imp_lf3-nd-4_16",
              q: "Was ist SSL/TLS-VPN?",
              options: [
                "Ein unsicheres VPN",
                "VPN ohne Verschlüsselung",
                "VPN nur für Webseiten",
                "VPN, das SSL/TLS nutzt (Port 443)",
              ],
              correct: 3,
              explain:
                "Funktioniert durch die meisten Firewalls. SSL-VPN nutzt HTTPS (Port 443) → funktioniert fast überall, da Port 443 selten blockiert ist.",
            },
            {
              id: "imp_lf3-nd-4_17",
              q: "Was ist ein transparenter Proxy?",
              options: [
                "Ein Proxy, den Benutzer nicht bemerken",
                "Ein Proxy nur für HTTPS",
                "Ein unsichtbares VPN",
                "Ein Proxy ohne Funktion",
              ],
              correct: 0,
              explain:
                "Keine Client-Config nötig. Transparent Proxy: Router leitet HTTP-Traffic automatisch zum Proxy um. Keine Client-Konfiguration nötig.",
            },
            {
              id: "imp_lf3-nd-4_18",
              q: "Welchen Vorteil bietet ein Reverse-Proxy?",
              options: [
                "Die Clients surfen damit vollständig anonym im Internet",
                "Schützt Backend-Server, Load-Balancing, SSL-Offloading",
                "Die Internetanbindung selbst wird spürbar beschleunigt",
                "Der Betrieb ist grundsätzlich kostenlos und wartungsfrei",
              ],
              correct: 1,
              explain:
                "Reverse-Proxy: Clients sehen nur den Proxy, nicht die echten Server. Zusätzlich: Lastverteilung, WAF, Caching.",
            },
            {
              id: "imp_lf3-nd-4_19",
              q: "Was ist IPsec?",
              options: [
                "DNS-Dienst, der Namensauflösungen signiert (DNSSEC)",
                "Protokoll-Suite für verschlüsselte IP-Kommunikation (AH + ESP)",
                "Scanner, der IP-Bereiche auf offene Ports untersucht",
                "Proxy-Dienst, der Webzugriffe anonymisiert weiterleitet",
              ],
              correct: 1,
              explain:
                "IPsec: Verschlüsselung (ESP) und Integrität (AH) auf IP-Ebene (Layer 3). Standard für Site-to-Site VPN.",
            },
          ],
        },
        {
          id: "lf3-vl-1",
          title: "VLANs & Switch-Konfiguration",
          content: [
            { type: "heading", value: "Was ist ein VLAN?" },
            {
              type: "text",
              value:
                "Ein VLAN (Virtual LAN) ist eine logische Gruppierung von Netzwerkgeräten auf einem oder mehreren Switches. Geräte im selben VLAN können kommunizieren, als wären sie im selben physischen Netz – auch wenn sie an verschiedenen Switches hängen. Geräte in verschiedenen VLANs können NICHT direkt kommunizieren (erst über einen Router / Layer-3-Switch).",
            },
            { type: "heading", value: "Warum VLANs?" },
            {
              type: "text",
              value:
                "Sicherheit: Trennung von Abteilungen (Buchhaltung, Entwicklung, Gäste-WLAN). Performance: Broadcast-Domänen verkleinern – weniger Broadcast-Verkehr pro Segment. Flexibilität: Mitarbeiter können den Schreibtisch wechseln und bleiben im selben VLAN. Compliance: Sensible Systeme (z.B. Kassensysteme PCI-DSS) müssen separiert sein.",
            },
            { type: "heading", value: "VLAN-Typen" },
            {
              type: "text",
              value:
                "Portbasiertes VLAN (Standard): Switch-Port wird einem VLAN zugeordnet. Tagged VLAN (802.1Q): VLAN-ID wird als 4-Byte-Tag in den Ethernet-Frame eingefügt. Trunk-Port: Transportiert mehrere VLANs über eine Leitung (zwischen Switches oder zum Router). Native VLAN: Ungetaggter Traffic auf einem Trunk gehört zum Native VLAN (Default: VLAN 1 – aus Sicherheitsgründen ändern!).",
            },
            { type: "heading", value: "Switch-Konfiguration (Cisco IOS)" },
            {
              type: "text",
              value:
                "VLAN anlegen: switch(config)# vlan 10 / switch(config-vlan)# name Büro. Access-Port konfigurieren: switch(config-if)# switchport mode access / switch(config-if)# switchport access vlan 10. Trunk-Port konfigurieren: switch(config-if)# switchport mode trunk / switch(config-if)# switchport trunk allowed vlan 10,20,30. Prüfen: show vlan brief (alle VLANs und Portzuordnung), show interfaces trunk (Trunk-Status).",
            },
            { type: "heading", value: "Inter-VLAN-Routing" },
            {
              type: "text",
              value:
                "Router-on-a-Stick: Ein physischer Router-Port, mehrere Subinterfaces (GigE0/0.10 für VLAN 10, GigE0/0.20 für VLAN 20). Jedes Subinterface hat eine IP als Gateway für das VLAN. Layer-3-Switch: Switch kann selbst routen (SVI = Switch Virtual Interface). Schneller als Router-on-a-Stick, Standard in Unternehmen. Konfiguration: switch(config)# interface vlan 10 / switch(config-if)# ip address 192.168.10.1 255.255.255.0.",
            },
            { type: "heading", value: "Beispiel 1: VLAN-Design für KMU" },
            {
              type: "text",
              value:
                "Büro mit 3 Abteilungen: VLAN 10 (Verwaltung, 192.168.10.0/24), VLAN 20 (Technik, 192.168.20.0/24), VLAN 30 (Gäste, 192.168.30.0/24). Gäste-VLAN hat keinen Zugriff auf interne Ressourcen (ACL auf L3-Switch). Trunk zwischen den Switches transportiert alle drei VLANs. DHCP-Server vergibt pro VLAN eigene IP-Bereiche.",
            },
            { type: "heading", value: "Beispiel 2: Voice-VLAN für VoIP" },
            {
              type: "text",
              value:
                "IP-Telefone brauchen eigenes VLAN (QoS-Anforderungen). Port-Konfiguration: switchport mode access / switchport access vlan 10 / switchport voice vlan 50. Der Port ist gleichzeitig Access (VLAN 10 für PC) und Voice (VLAN 50 für Telefon). Das Telefon tagged seinen Traffic mit VLAN 50, der PC sendet ungetaggt in VLAN 10.",
            },
            { type: "heading", value: "Beispiel 3: VLAN-Trunk zwischen Etagen" },
            {
              type: "text",
              value:
                "Gebäude mit 3 Etagen, je ein Switch. Alle Switches per Trunk (Glasfaser Uplink) verbunden. VLAN 10 existiert auf allen 3 Switches – ein Mitarbeiter in Etage 1 und einer in Etage 3 können kommunizieren, obwohl sie an verschiedenen Switches hängen. Der Trunk transportiert die VLANs transparent zwischen den Etagen.",
            },
            { type: "heading", value: "Übungsaufgabe 1: VLAN-Design erstellen" },
            {
              type: "text",
              value:
                "Ein mittelständisches Unternehmen hat 3 Abteilungen: Verwaltung (20 PCs), Entwicklung (30 PCs), Gäste-WLAN (variabel). Entwerfe ein VLAN-Konzept: Welche VLANs legst du an? Welche IP-Bereiche? Wie stellst du sicher, dass Gäste keinen Zugriff auf interne Ressourcen haben?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nVLAN 10 – Verwaltung: 192.168.10.0/24 (254 Hosts, reicht für 20 PCs + Drucker)\nVLAN 20 – Entwicklung: 192.168.20.0/24\nVLAN 30 – Gäste: 192.168.30.0/24\nVLAN 99 – Management: 192.168.99.0/24 (für Switch-Management, separiert)\n\nInter-VLAN-Routing über Layer-3-Switch mit SVIs.\nACL auf dem L3-Switch: VLAN 30 darf nur ins Internet (permit 192.168.30.0/24 → 0.0.0.0/0), KEIN Zugriff auf 192.168.10.0/24 oder 192.168.20.0/24 (deny).\nNative VLAN auf VLAN 999 setzen (unbenutzt) → Schutz vor VLAN-Hopping.\nDTP abschalten auf allen Ports: switchport nonegotiate.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Cisco-Switch konfigurieren" },
            {
              type: "text",
              value:
                "Konfiguriere auf einem Cisco 2960 Switch: VLAN 10 (Name: Büro), VLAN 20 (Name: Server). Port GigE0/1-10 sollen in VLAN 10, Port GigE0/11-12 in VLAN 20. Port GigE0/24 soll Trunk zum Router sein. Schreibe die vollständigen IOS-Befehle.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nenable\nconf t\n\nvlan 10\n name Büro\nvlan 20\n name Server\nexit\n\ninterface range GigabitEthernet0/1-10\n switchport mode access\n switchport access vlan 10\n spanning-tree portfast\n no shutdown\n\ninterface range GigabitEthernet0/11-12\n switchport mode access\n switchport access vlan 20\n spanning-tree portfast\n no shutdown\n\ninterface GigabitEthernet0/24\n switchport mode trunk\n switchport trunk allowed vlan 10,20\n switchport trunk native vlan 999\n no shutdown\n\ncopy running-config startup-config",
            },
            { type: "heading", value: "Übungsaufgabe 3: Fehlersuche VLAN-Problem" },
            {
              type: "text",
              value:
                "Ein PC in VLAN 10 (IP 192.168.10.50) kann den Server in VLAN 20 (IP 192.168.20.10) nicht erreichen. Ping auf das eigene Gateway 192.168.10.1 funktioniert. Beschreibe systematisch deine Fehlersuche und nenne mindestens 4 mögliche Ursachen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nSystematische Fehlersuche:\n1) show vlan brief → Ist der Server-Port wirklich in VLAN 20? (Häufigster Fehler: Port in falschem VLAN)\n2) show interfaces trunk → Läuft der Trunk? Ist VLAN 20 auf dem Trunk erlaubt? (trunk allowed vlan prüfen)\n3) show ip interface brief (Router/L3-Switch) → Hat das SVI für VLAN 20 eine IP? Ist es up/up?\n4) show ip route → Existiert eine Route zu 192.168.20.0/24?\n5) Auf dem Server: IP-Config prüfen (falsches Gateway? Falsche Subnetzmaske?)\n\nMögliche Ursachen:\n- Server-Port in falschem VLAN\n- VLAN 20 nicht auf Trunk erlaubt\n- SVI interface vlan 20 fehlt oder ist shutdown\n- ip routing nicht aktiviert auf L3-Switch\n- Firewall/ACL blockiert Inter-VLAN-Traffic\n- Server hat falsches Default-Gateway konfiguriert",
            },
          ],
          quiz: [
            {
              id: "imp_lf3-vl-1_0",
              q: "Was ist ein Access-Port?",
              options: [
                "Ein Port, der nur Administratoren Konsolenzugriff gewährt",
                "Ein Port, der genau einem VLAN zugeordnet ist (für Endgeräte)",
                "Ein Port, der per shutdown dauerhaft deaktiviert wurde",
                "Ein Port, der getaggte Frames mehrerer VLANs transportiert",
              ],
              correct: 1,
              explain: "Access-Port: Gehört zu einem VLAN, sendet/empfängt ungetaggte Frames.",
            },
            {
              id: "imp_lf3-vl-1_1",
              q: "Was ist ein Trunk-Port?",
              options: [
                "Ein Port, an dem genau ein Arbeitsplatz-PC angeschlossen ist",
                "Ein Port, der mehrere VLANs per 802.1Q-Tagging transportiert",
                "Der Uplink-Port, der die Internetverbindung bereitstellt",
                "Ein Funkport für die Anbindung von WLAN-Endgeräten",
              ],
              correct: 1,
              explain:
                "Trunk: Transportiert Traffic mehrerer VLANs mit 802.1Q-Tags zwischen Switches/Routern.",
            },
            {
              id: "imp_lf3-vl-1_2",
              q: "Welcher Befehl zeigt alle VLANs auf einem Cisco-Switch?",
              options: [
                "show interfaces",
                "show running-config",
                "show ip route",
                "show vlan brief",
              ],
              correct: 3,
              explain: "show vlan brief: Zeigt VLAN-ID, Name, Status und zugeordnete Ports.",
            },
            {
              id: "imp_lf3-vl-1_3",
              q: "Was ist das Native VLAN?",
              options: [
                "Ein verstecktes VLAN, das in der Switch-Konfiguration nicht angezeigt wird",
                "VLAN für ungetaggten Traffic auf einem Trunk (Default: VLAN 1)",
                "Das VLAN mit der höchsten Priorität und Bandbreite auf dem Trunk",
                "Ein reserviertes VLAN, in dem ausschließlich Server betrieben werden",
              ],
              correct: 1,
              explain:
                "Native VLAN: Ungetaggter Traffic auf einem Trunk wird diesem VLAN zugeordnet.",
            },
            {
              id: "imp_lf3-vl-1_4",
              q: "Wie kommunizieren Geräte in verschiedenen VLANs?",
              options: [
                "Nur über einen Router oder Layer-3-Switch",
                "Direkt über den Switch",
                "Über das Internet",
                "Gar nicht",
              ],
              correct: 0,
              explain:
                "Inter-VLAN-Routing. VLANs sind isoliert. Kommunikation zwischen VLANs nur über Routing (L3-Switch oder Router).",
            },
            {
              id: "imp_lf3-vl-1_5",
              q: "Was ist Router-on-a-Stick?",
              options: [
                "Ein Router, der mangels Ports nur ein einziges Netz anbinden kann",
                "Ein Router, der ausschließlich per WLAN ohne Kabel angebunden ist",
                "Ein Router mit Subinterfaces auf einem Port für Inter-VLAN-Routing",
                "Eine Fehlkonfiguration, bei der das Routing komplett ausfällt",
              ],
              correct: 2,
              explain:
                "Router-on-a-Stick: Ein Trunk zum Router, Subinterfaces pro VLAN (z.B. GigE0/0.10, .20, .30).",
            },
            {
              id: "imp_lf3-vl-1_6",
              q: "Was ist ein SVI (Switch Virtual Interface)?",
              options: [
                "Ein physischer Uplink-Port, der fest einem einzelnen VLAN zugeordnet ist",
                "Virtuelle Schnittstelle auf einem L3-Switch, die als Gateway für ein VLAN dient",
                "Ein Monitoring-Port, der den Datenverkehr aller VLANs zur Analyse spiegelt",
                "Ein virtuelles WLAN-Interface, das SSIDs den VLANs des Switches zuordnet",
              ],
              correct: 1,
              explain:
                "SVI: interface vlan X auf einem Layer-3-Switch → Gateway für dieses VLAN, ermöglicht Routing.",
            },
            {
              id: "imp_lf3-vl-1_7",
              q: "Welcher Cisco-Befehl ordnet einen Port einem VLAN zu?",
              options: [
                "set vlan 10",
                "switchport access vlan 10",
                "vlan add 10",
                "ip address vlan 10",
              ],
              correct: 1,
              explain: "switchport mode access + switchport access vlan 10 in Interface-Config.",
            },
            {
              id: "imp_lf3-vl-1_8",
              q: "Warum sollte man das Native VLAN ändern?",
              options: [
                "Kosten sparen – VLAN 1 verursacht bei vielen Herstellern zusätzliche Lizenzgebühren",
                "Performance – VLAN 1 ist auf 100 Mbit/s gedrosselt, höhere VLAN-IDs sind schneller",
                "Sicherheit – VLAN 1 ist Default und bekannt, Angreifer nutzen das aus (VLAN-Hopping)",
                "Pflicht laut DSGVO – Art. 32 schreibt die Umbenennung des Standard-VLANs vor",
              ],
              correct: 2,
              explain:
                "VLAN 1 als Native = Sicherheitsrisiko. Best Practice: Native VLAN auf ein ungenutztes VLAN setzen.",
            },
            {
              id: "imp_lf3-vl-1_9",
              q: "Was ist VLAN-Hopping?",
              options: [
                "Die automatische VLAN-Zuweisung neuer Geräte per Radius",
                "Angriff, bei dem Traffic unberechtigt in ein anderes VLAN gelangt",
                "Das reguläre Routing von Paketen zwischen zwei VLANs",
                "Der geplante VLAN-Wechsel eines Ports durch den Admin",
              ],
              correct: 1,
              explain:
                "VLAN-Hopping: Angreifer sendet doppelt getaggte Frames, um in ein fremdes VLAN einzudringen. Gegenmaßnahme: Native VLAN ändern, DTP abschalten.",
            },
            {
              id: "imp_lf3-vl-1_10",
              q: "Wie viele VLANs kann ein Switch maximal haben?",
              options: ["Unbegrenzt", "4094 (VLAN-ID 1-4094)", "256", "10"],
              correct: 1,
              explain:
                "802.1Q: 12-Bit VLAN-ID = 4096, davon VLAN 0 und 4095 reserviert = 4094 nutzbar.",
            },
            {
              id: "imp_lf3-vl-1_11",
              q: "Was ist DTP (Dynamic Trunking Protocol)?",
              options: [
                "Ein Routing-Protokoll für dynamische Routen im WAN",
                "Cisco-Protokoll, das automatisch Trunks aushandelt",
                "Ein Verschlüsselungsprotokoll für VLAN-Datenverkehr",
                "Ein DNS-Protokoll zur dynamischen Namensauflösung",
              ],
              correct: 1,
              explain:
                "Sicherheitsrisiko! DTP: Automatische Trunk-Aushandlung. Sicherheitsrisiko → best practice: switchport nonegotiate.",
            },
            {
              id: "imp_lf3-vl-1_12",
              q: "Was macht der Befehl 'switchport trunk allowed vlan 10,20'?",
              options: [
                "Löscht die VLANs 10 und 20 aus der VLAN-Datenbank des Switches",
                "Zeigt die aktuell auf dem Trunk erlaubten VLANs 10 und 20 nur an",
                "Erstellt die VLANs 10 und 20 neu und vergibt automatisch Namen",
                "Erlaubt nur VLAN 10 und 20 auf diesem Trunk, alle anderen werden blockiert",
              ],
              correct: 3,
              explain:
                "Trunk Pruning: Nur explizit erlaubte VLANs werden über den Trunk transportiert.",
            },
            {
              id: "imp_lf3-vl-1_13",
              q: "Was braucht man für Inter-VLAN-Routing mit L3-Switch?",
              options: [
                "ip routing aktivieren + SVIs pro VLAN konfigurieren",
                "Nichts – der Switch routet VLANs ab Werk automatisch",
                "Zwingend einen externen Router, da Switches nie routen",
                "Nur Trunk-Ports einrichten, Routing entsteht von selbst",
              ],
              correct: 0,
              explain:
                "L3-Switch: ip routing + interface vlan X mit IP pro VLAN. Kein externer Router nötig.",
            },
            {
              id: "imp_lf3-vl-1_14",
              q: "In welcher Schicht arbeitet ein VLAN?",
              options: ["Schicht 7", "Schicht 3", "Schicht 1", "Schicht 2 (Data Link)"],
              correct: 3,
              explain:
                "Logische Trennung auf Switch-Ebene. VLANs arbeiten auf Layer 2. Erst Inter-VLAN-Routing bringt Layer 3 ins Spiel.",
            },
            {
              id: "imp_lf3-vl-1_15",
              q: "Was ist Port Security in Kombination mit VLANs?",
              options: [
                "Firewall pro Port",
                "Ports sperren",
                "VLAN-Verschlüsselung",
                "Begrenzt erlaubte MAC-Adressen pro Port",
              ],
              correct: 3,
              explain:
                "Verhindert unbefugte Geräte im VLAN. Port Security: Max. Anzahl MACs pro Port festlegen. Unbekannte MAC → Port wird deaktiviert (shutdown).",
            },
            {
              id: "imp_lf3-vl-1_16",
              q: "Was ist 802.1Q Tagging?",
              options: [
                "Automatische Zuweisung von IP-Adressen an Endgeräte je VLAN",
                "4 Byte werden in den Ethernet-Frame eingefügt mit VLAN-ID und Priorität",
                "Ein WLAN-Standard für schnelles Roaming zwischen Access Points",
                "Verschlüsselung der Frames zwischen zwei Switches (MACsec)",
              ],
              correct: 1,
              explain: "802.1Q: Tag enthält TPID (0x8100), Priority (CoS), DEI, VLAN-ID (12 Bit).",
            },
            {
              id: "imp_lf3-vl-1_17",
              q: "Welches Problem lösen VLANs bei großen Netzwerken?",
              options: [
                "IP-Adressmangel",
                "Zu große Broadcast-Domänen",
                "Zu langsame Verbindungen",
                "Zu wenig Ports",
              ],
              correct: 1,
              explain:
                "VLANs begrenzen Broadcasts auf ihr Segment. Ohne VLANs: Ein Broadcast erreicht ALLE Geräte. Mit VLANs: Broadcast nur innerhalb des VLANs.",
            },
            {
              id: "imp_lf3-vl-1_18",
              q: "Was passiert wenn ein PC im VLAN 10 einen Broadcast sendet?",
              options: [
                "Nur Geräte in VLAN 10 empfangen ihn",
                "Nur der Router empfängt ihn",
                "Niemand empfängt ihn",
                "Alle Geräte im Netz empfangen ihn",
              ],
              correct: 0,
              explain: "Broadcast bleibt innerhalb des VLANs. Andere VLANs sehen ihn nicht.",
            },
            {
              id: "imp_lf3-vl-1_19",
              q: "Was ist ein Voice VLAN?",
              options: [
                "Separates VLAN für IP-Telefone mit QoS-Priorisierung",
                "Ein sehr lautes VLAN",
                "Ein eigenes VLAN für Mikrofone und Lautsprecher",
                "Ein reserviertes VLAN für Sprachassistenten wie Alexa",
              ],
              correct: 0,
              explain:
                "Voice VLAN: IP-Telefon-Traffic getrennt vom Daten-Traffic auf dem gleichen Port, mit QoS-Priorisierung.",
            },
          ],
        },
      ],
    },
    {
      id: "lf3-sp",
      title: "Speichersysteme",
      lessons: [
        {
          id: "lf3-sp-1",
          title: "RAID-Systeme",
          content: [
            { type: "heading", value: "RAID-Level im Detail" },
            {
              type: "text",
              value:
                "RAID 0 (Striping): Daten auf min. 2 Platten verteilt. Maximale Performance (doppelte Geschwindigkeit). KEINE Redundanz – 1 Ausfall = ALLES weg. Kapazität: 100%.",
            },
            {
              type: "text",
              value:
                "RAID 1 (Mirroring): Daten auf 2 Platten gespiegelt. Volle Redundanz, 1 Ausfall verkraftbar. 50% Kapazitätsverlust. Leseperformance verdoppelt.",
            },
            {
              type: "text",
              value:
                "RAID 5 (Striping + verteilte Parität): Min. 3 Platten. 1 Ausfall verkraftbar. Kapazität: (n-1) Platten. Beispiel: 4x 1TB = 3TB nutzbar. Standard für Server.",
            },
            {
              type: "text",
              value:
                "RAID 6 (doppelte Parität): Min. 4 Platten. 2 Ausfälle verkraftbar. Kapazität: (n-2). Für große Arrays und kritische Daten.",
            },
            {
              type: "text",
              value:
                "RAID 10 (1+0): Min. 4 Platten. Erst spiegeln (RAID 1), dann stripen (RAID 0). Hohe Performance + Redundanz. Kapazität: 50%. Für Datenbanken.",
            },
            { type: "heading", value: "Hot Spare & Rebuild" },
            {
              type: "text",
              value:
                "Hot Spare: Ersatzplatte springt automatisch ein. Rebuild: Parität wird auf die neue Platte geschrieben. Während Rebuild ist RAID 5 verwundbar!",
            },
            {
              type: "note",
              value:
                "RAID ist KEIN Backup! Schützt vor Plattenausfall, NICHT vor Löschen, Ransomware oder Feuer.",
            },
            { type: "heading", value: "Hot Spare, Hot Swap, Redundanz, Load Sharing" },
            {
              type: "text",
              value:
                "Hot Spare: Ersatzfestplatte, die im RAID-Array bereitsteht und bei Ausfall automatisch einspringt (kein manueller Eingriff nötig). Hot Swappable: Komponente kann im laufenden Betrieb getauscht werden OHNE das System herunterzufahren. Gilt für Festplatten, Netzteile, Lüfter in Servern. Redundant: Komponente ist doppelt vorhanden (z.B. 2 Netzteile, aber nur 1 wird benötigt). Load Sharing: Last wird auf mehrere Komponenten verteilt (z.B. beide Netzteile liefern jeweils 50% des Stroms). Bei Ausfall eines Netzteils übernimmt das andere 100%.",
            },
            { type: "heading", value: "Übungsaufgabe 1: RAID-Kapazität" },
            {
              type: "text",
              value:
                "4 Platten je 4 TB. Berechne die nutzbare Kapazität bei RAID 0, RAID 1, RAID 5, RAID 10.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nRAID 0 (Striping):   4x4 = 16 TB (keine Sicherheit)\nRAID 1: 4 TB nutzbar (alle 4 Platten gespiegelt)\nRAID 5 (n-1):        (4-1)x4 = 12 TB\nRAID 10 (Stripe+Mirror): 8 TB\nRAID 0 max. Platz/kein Schutz, RAID 1/10 hohe\nSicherheit/halber Platz, RAID 5 guter Kompromiss.",
            },
            { type: "heading", value: "Übungsaufgabe 2: RAID-Wahl" },
            {
              type: "text",
              value:
                "Datenbank-Server braucht Ausfallsicherheit UND gute Schreibleistung. Welches RAID?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nRAID 10. Kombiniert Spiegelung (Sicherheit, eine\nPlatte je Mirror darf ausfallen) mit Striping (hohe\nLese- UND Schreibleistung). Besser als RAID 5 bei\nschreibintensiven Datenbanken, da keine\nParitätsberechnung beim Schreiben.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Grenzen" },
            { type: "text", value: "Ersetzt ein RAID ein Backup? Begründe." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nNein. RAID schützt vor HARDWARE-Ausfall einzelner\nPlatten, nicht vor versehentlichem Löschen, Viren/\nRansomware, Diebstahl oder Brand - diese betreffen\nden ganzen Verbund. Ein separates Backup (3-2-1) ist\nzwingend zusätzlich nötig.",
            },
            { type: "heading", value: "Übungsaufgabe 1: RAID-Level" },
            {
              type: "text",
              value:
                "Vergleiche RAID 1 und RAID 5 bei 4 Platten à 2 TB: nutzbare Kapazität und Ausfallsicherheit.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nRAID 1 (Spiegelung, nur 2 Platten nutzbar):\nKapazität: 2 TB (50% Nutzung). 1 Platte darf ausfallen.\nRAID 5 (Parität verteilt):\nKapazität: (4-1)x2 = 6 TB (75%). 1 Platte darf ausfallen.\nRAID 5 nutzt den Speicher besser, RAID 1 ist\neinfacher und beim Rebuild schneller.",
            },
            { type: "heading", value: "Übungsaufgabe 2: RAID 0" },
            { type: "text", value: "Warum ist RAID 0 kein Datenschutz?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nRAID 0 (Striping): verteilt Daten über alle Platten\nOHNE Redundanz. Fällt EINE Platte aus, sind ALLE\nDaten verloren. Vorteil: maximale Performance und\nKapazität. Einsatz nur wo Geschwindigkeit wichtiger\nist als Sicherheit (z.B. Videoschnitt mit Backup).",
            },
            { type: "heading", value: "Übungsaufgabe 3: Hot Spare" },
            { type: "text", value: "Was ist ein Hot Spare bei RAID?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nEine eingebaute Ersatzplatte, die im Normalbetrieb\npassiv wartet. Fällt eine aktive Platte aus, startet\nautomatisch der Rebuild auf die Hot Spare - ohne\nmanuelles Eingreifen. Reduziert die kritische Zeit\nzwischen Ausfall und Wiederherstellung.",
            },
            { type: "heading", value: "Beispiel 1: RAID 0, 1, 5, 6, 10 Vergleich" },
            {
              type: "text",
              value:
                "RAID 0 (Striping): 2+ Platten, volle Kapazität, hohe Geschwindigkeit, KEINE Redundanz – 1 Platte defekt = alles weg. RAID 1 (Mirror): 2 Platten, 50% Kapazität, 1 darf ausfallen. RAID 5 (Striping+Parität): Min. 3 Platten, 1 darf ausfallen, Kapazität n-1. RAID 6: Min. 4 Platten, 2 dürfen ausfallen, Kapazität n-2. RAID 10 (1+0): Min. 4 Platten, Mirror+Stripe, hohe Performance+Redundanz, 50% Kapazität.",
            },
            { type: "heading", value: "Beispiel 2: RAID-Kapazität berechnen (AP1-typisch)" },
            {
              type: "text",
              value:
                "4 Platten à 2 TB: RAID 0: 4×2=8 TB, 0 Redundanz. RAID 1: 1×2=2 TB (Spiegel). RAID 5: (4-1)×2=6 TB, 1 darf ausfallen. RAID 6: (4-2)×2=4 TB, 2 dürfen ausfallen. RAID 10: 4/2×2=4 TB, je 1 pro Mirror-Paar. Faustregel: Je mehr Redundanz, desto weniger nutzbare Kapazität.",
            },
            { type: "heading", value: "Beispiel 3: Hot Spare und Rebuild" },
            {
              type: "text",
              value:
                "Hot Spare: Eine zusätzliche Platte im RAID-Verbund, die bei Ausfall automatisch einspringt und den Rebuild startet. Rebuild-Zeit bei 4 TB Platte in RAID 5: 8-24 Stunden. Während Rebuild ist RAID 5 verwundbar (keine weitere Redundanz!). Deshalb für kritische Daten RAID 6 oder RAID 10 bevorzugen.",
            },
          ],
          quiz: [
            {
              id: "imp_lf3-sp-1_0",
              q: "RAID 5 toleriert wie viele Ausfälle?",
              options: ["0", "1", "2", "3"],
              correct: 1,
              explain: "1 Ausfall.",
            },
            {
              id: "imp_lf3-sp-1_1",
              q: "4x 2TB RAID 5 = nutzbar?",
              options: ["4TB", "2TB", "6TB", "8TB"],
              correct: 2,
              explain: "(n-1) = 3 x 2TB = 6TB.",
            },
            {
              id: "imp_lf3-sp-1_2",
              q: "RAID 10 min. Platten?",
              options: ["2", "6", "3", "4"],
              correct: 3,
              explain: "Min. 4: 2 gespiegelte Paare gestriped.",
            },
            {
              id: "imp_lf3-sp-1_3",
              q: "RAID 0: Redundanz?",
              options: ["Nein (nur Performance)", "Teilweise", "Nur Lesen", "Ja"],
              correct: 0,
              explain: "RAID 0 = Striping = KEINE Redundanz.",
            },
            {
              id: "imp_lf3-sp-1_4",
              q: "Hot Spare?",
              options: [
                "Externe Platte",
                "Ersatzplatte springt automatisch ein",
                "Tape",
                "Aktive Platte",
              ],
              correct: 1,
              explain: "Hot Spare wartet und übernimmt bei Ausfall.",
            },
            {
              id: "imp_lf3-sp-1_5",
              q: "RAID 6 min. Platten?",
              options: ["4", "6", "2", "3"],
              correct: 0,
              explain: "RAID 6: Min. 4 Platten, toleriert 2 Ausfälle.",
            },
            {
              id: "imp_lf3-sp-1_6",
              q: "RAID 1: Kapazität bei 2x 2TB?",
              options: ["1 TB", "2 TB", "4 TB", "3 TB"],
              correct: 1,
              explain: "RAID 1: Gespiegelt, nur 50% nutzbar = 2 TB.",
            },
            {
              id: "imp_lf3-sp-1_7",
              q: "RAID 5: 5x 4TB nutzbar?",
              options: ["12TB", "16TB", "8TB", "20TB"],
              correct: 1,
              explain: "(n-1) x 4TB = 4 x 4TB = 16TB.",
            },
            {
              id: "imp_lf3-sp-1_8",
              q: "RAID ersetzt Backup?",
              options: ["Nur RAID 6", "Teilweise", "Nein! RAID schützt nur vor HW-Ausfall", "Ja"],
              correct: 2,
              explain: "RAID schützt NICHT vor Löschen, Ransomware, Feuer.",
            },
            {
              id: "imp_lf3-sp-1_9",
              q: "Rebuild-Risiko bei RAID 5?",
              options: [
                "Keines, da die Parität jeden weiteren Ausfall abfängt",
                "Während Rebuild ist zweiter Ausfall = Datenverlust",
                "Der Rebuild ist in wenigen Sekunden abgeschlossen",
                "Ein Risiko besteht nur bei Platten älter als fünf Jahre",
              ],
              correct: 1,
              explain: "Rebuild: Array ist verwundbar bis neue Platte synchronisiert.",
            },
            {
              id: "imp_lf3-sp-1_10",
              q: "Wie viele Platten dürfen bei RAID 5 ausfallen?",
              options: ["0", "Beliebig viele", "2", "1"],
              correct: 3,
              explain: "RAID 5: Genau 1 Platte darf ausfallen. Bei 2 defekten → Datenverlust.",
            },
            {
              id: "imp_lf3-sp-1_11",
              q: "Was ist RAID 10?",
              options: [
                "Ein Verbund aus genau zehn Festplatten",
                "Ein reines Software-RAID ohne Controller",
                "RAID 1 und RAID 0 kombiniert (Mirror + Stripe)",
                "RAID 1 mit null Redundanz (ohne Spiegelung)",
              ],
              correct: 2,
              explain:
                "RAID 10 = RAID 1+0: Erst spiegeln (Mirror), dann stripen. Hohe Performance + Redundanz.",
            },
            {
              id: "imp_lf3-sp-1_12",
              q: "5 Platten à 4 TB in RAID 5: Nutzbare Kapazität?",
              options: ["8 TB", "16 TB", "20 TB", "12 TB"],
              correct: 1,
              explain: "RAID 5: (n-1) × Plattengröße = (5-1) × 4 = 16 TB.",
            },
            {
              id: "imp_lf3-sp-1_13",
              q: "Was ist ein Hot Spare?",
              options: [
                "Reserve-Platte, die bei Ausfall automatisch Rebuild startet",
                "Eine Platte, die wegen Überhitzung gedrosselt betrieben wird",
                "Der RAID-Controller, der die Parität der Platten berechnet",
                "Ein externes Backup-Medium, das außer Haus gelagert wird",
              ],
              correct: 0,
              explain:
                "Hot Spare: Wartet im Verbund und springt bei Plattendefekt automatisch ein.",
            },
            {
              id: "imp_lf3-sp-1_14",
              q: "Was ist RAID KEIN Ersatz für?",
              options: [
                "Speicherplatz (mehrere Platten lassen sich zu einem Volume bündeln)",
                "Verfügbarkeit (der Betrieb läuft bei Ausfall einer Platte weiter)",
                "Backup (schützt nicht vor Löschen/Ransomware/Brand)",
                "Performance (Striping verteilt Zugriffe auf mehrere Platten)",
              ],
              correct: 2,
              explain:
                "RAID ≠ Backup! Schützt nur vor Plattenausfall, nicht vor versehentlichem Löschen, Ransomware oder Standort-Katastrophen.",
            },
            {
              id: "imp_lf3-sp-1_15",
              q: "Welches RAID bietet die beste Lese-Performance?",
              options: ["RAID 5", "RAID 1", "RAID 6", "RAID 0 (Striping über alle Platten)"],
              correct: 3,
              explain:
                "RAID 0: Daten verteilt über alle Platten → paralleles Lesen = höchste Geschwindigkeit.",
            },
            {
              id: "imp_lf3-sp-1_16",
              q: "Was ist der Nachteil von RAID 6 gegenüber RAID 5?",
              options: [
                "Weniger sicher",
                "Kein Nachteil",
                "Weniger Nutzkapazität und langsameres Schreiben (doppelte Parität)",
                "RAID 6 toleriert weniger Plattenausfälle als RAID 5",
              ],
              correct: 2,
              explain:
                "RAID 6: Nutzkapazität n−2 statt n−1, und Schreibvorgänge sind durch die doppelte Paritätsberechnung langsamer. Dafür verkraftet RAID 6 zwei gleichzeitige Plattenausfälle.",
            },
            {
              id: "imp_lf3-sp-1_17",
              q: "Kann man verschiedene Plattengrößen in einem RAID mischen?",
              options: [
                "Ja, ohne jede Einschränkung – jede Platte bringt ihre volle Kapazität ein",
                "Möglich, aber die größte wird auf die kleinste Größe reduziert",
                "Nein, der Controller verweigert den Verbund unterschiedlicher Größen komplett",
                "Das Mischen funktioniert ausschließlich bei RAID 0, alle anderen Level verbieten es",
              ],
              correct: 1,
              explain:
                "Verschiedene Größen: Controller nutzt nur die Größe der kleinsten Platte pro Disk. Rest verschwendet.",
            },
            {
              id: "imp_lf3-sp-1_18",
              q: "Was macht ein RAID-Controller?",
              options: [
                "Internet bereitstellen",
                "Daten verschlüsseln",
                "Verwaltet RAID-Verbund, Parität, Rebuild",
                "Platten formatieren",
              ],
              correct: 2,
              explain:
                "In Hardware oder Software. RAID-Controller: Berechnet Parität, verteilt Daten, managt Rebuild. Hardware-RAID hat eigenen Prozessor+Cache.",
            },
            {
              id: "imp_lf3-sp-1_19",
              q: "Welches RAID eignet sich für einen Datenbankserver?",
              options: ["RAID 10 (hohe IOPS + Redundanz)", "RAID 5", "RAID 0", "RAID 1"],
              correct: 0,
              explain:
                "RAID 10: Beste Random-IOPS (wichtig für DB) + gute Redundanz. RAID 5/6 hat Write-Penalty bei Random-Writes.",
            },
          ],
        },
        {
          id: "lf3-sp-2",
          title: "Backup-Strategien",
          content: [
            { type: "heading", value: "Backup-Arten" },
            {
              type: "text",
              value:
                "Vollbackup: Sichert ALLE Daten. Längste Dauer, einfachste Wiederherstellung. Inkrementell: Nur Änderungen seit dem LETZTEN Backup (egal welcher Art). Schnellstes Backup, aber Wiederherstellung braucht Vollbackup + alle Inkrementellen. Differentiell: Nur Änderungen seit dem LETZTEN VOLLBACKUP. Kompromiss: Schneller als Voll, einfachere Wiederherstellung als Inkrementell (nur Voll + letztes Differentiell).",
            },
            { type: "heading", value: "Backup-Strategien" },
            {
              type: "text",
              value:
                "3-2-1-Regel: 3 Kopien der Daten, auf 2 verschiedenen Medien, 1 davon Offsite (anderer Standort/Cloud). GFS-Schema: Grandfather (monatliches Vollbackup, 12 Monate aufheben), Father (wöchentliches Vollbackup, 4 Wochen), Son (tägliches Inkrementell/Differentiell). RPO (Recovery Point Objective): Max. akzeptabler Datenverlust (z.B. 4h = max. 4h Arbeit verloren). RTO (Recovery Time Objective): Max. akzeptable Wiederherstellungszeit.",
            },
            { type: "heading", value: "Backup-Medien" },
            {
              type: "text",
              value:
                "Bandlaufwerke (LTO): Günstig, hohe Kapazität, langsam, gut für Archivierung. NAS/SAN: Schnell, netzwerkbasiert, für aktive Backups. Cloud-Backup: Offsite, skalierbar, Abhängigkeit von Anbieter/Internet. USB-Festplatten: Für kleine Umgebungen, unsicher (Diebstahl, Verschleiß).",
            },
            {
              type: "note",
              value:
                "RAID ist KEIN Backup! RAID schützt vor Hardware-Ausfall, nicht vor versehentlichem Löschen, Ransomware oder Standort-Katastrophen.",
            },
            { type: "heading", value: "Übungsaufgabe 1: 3-2-1" },
            { type: "text", value: "Erkläre die 3-2-1-Backup-Regel." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n3 Kopien der Daten (Original + 2 Backups),\nauf 2 verschiedenen Medientypen,\n1 Kopie außer Haus (offsite, z.B. anderer Standort\noder Cloud). Schützt gegen Hardwaredefekt, lokale\nKatastrophen und Ransomware.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Backup-Arten" },
            { type: "text", value: "Unterschied voll, differenziell, inkrementell?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nVollbackup: alle Daten jedes Mal.\nDifferenziell: alle Änderungen seit dem letzten\nVOLLBACKUP (Wiederherstellung: Voll + 1 diff).\nInkrementell: nur Änderungen seit dem LETZTEN\nBackup (kleinste Sicherung, aber Wiederherstellung:\nVoll + alle inkrementellen der Reihe nach).",
            },
            { type: "heading", value: "Übungsaufgabe 3: RTO/RPO" },
            { type: "text", value: "Was bedeuten RTO und RPO?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nRTO (Recovery Time Objective): wie lange darf die\nWiederherstellung maximal dauern (Ausfallzeit).\nRPO (Recovery Point Objective): wie viel Datenverlust\nist maximal akzeptabel (bestimmt die Backup-Häufigkeit).\nKleiner RPO -> häufiger sichern.",
            },
            { type: "heading", value: "Übungsaufgabe 3: RPO/RTO" },
            { type: "text", value: "Was bedeuten RPO und RTO?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nRPO (Recovery Point Objective): wie viel Datenverlust\nist tolerierbar? (z.B. 4h = Backup alle 4h nötig)\nRTO (Recovery Time Objective): wie schnell muss das\nSystem wieder laufen? (z.B. 2h = Restore in <2h)\nBeide bestimmen die Backup-Strategie und -Frequenz.",
            },
            {
              type: "heading",
              value: "Beispiel 1: Backup-Strategien: Voll, Inkrementell, Differentiell",
            },
            {
              type: "text",
              value:
                "Vollbackup: Alles sichern (z.B. Sonntag). Größter Speicherbedarf, schnellste Wiederherstellung. Inkrementell: Nur Änderungen seit letztem Backup (egal ob Voll oder Inkr.). Klein, schnell, aber Restore braucht Voll + alle Inkrementellen. Differentiell: Alle Änderungen seit letztem Vollbackup. Größer als Inkr., aber Restore braucht nur Voll + letztes Diff.",
            },
            { type: "heading", value: "Beispiel 2: 3-2-1-Regel" },
            {
              type: "text",
              value:
                "3 Kopien der Daten (Original + 2 Backups). 2 verschiedene Medientypen (z.B. NAS + LTO-Band). 1 Kopie an einem anderen Standort (Offsite/Cloud). Erweitert: 3-2-1-1-0: Zusätzlich 1 Kopie offline (Air-Gapped, gegen Ransomware) und 0 Fehler (regelmäßige Restore-Tests!).",
            },
            { type: "heading", value: "Beispiel 3: Generationenprinzip (GVS)" },
            {
              type: "text",
              value:
                "Großvater-Vater-Sohn: Sohn = tägliches Backup (Mo-Do, 4 Bänder). Vater = wöchentliches Vollbackup (Fr, 4 Bänder = 4 Wochen). Großvater = monatliches Vollbackup (Monatsende, 12 Bänder). Gesamt: 20 Bänder für ein Jahr Backup-Historie. Älteste Bänder werden recycelt.",
            },
          ],
          quiz: [
            {
              id: "imp_lf3-sp-2_0",
              q: "Inkrementell sichert seit?",
              options: [
                "Letztem Backup jeder Art",
                "Letzter Woche",
                "Letztem Vollbackup",
                "Gestern",
              ],
              correct: 0,
              explain: "Seit dem letzten Backup, egal welcher Art.",
            },
            {
              id: "imp_lf3-sp-2_1",
              q: "3-2-1 Regel: Was bedeutet die 1?",
              options: ["1 Admin", "1 Backup pro Tag", "1 Kopie Offsite", "1 Medium"],
              correct: 2,
              explain: "1 Kopie an einem anderen Standort (Offsite).",
            },
            {
              id: "imp_lf3-sp-2_2",
              q: "RPO 4 Stunden bedeutet?",
              options: [
                "4h Wiederherstellungszeit",
                "4h Backup-Dauer",
                "Max. 4h Datenverlust akzeptabel",
                "4 Backups pro Tag",
              ],
              correct: 2,
              explain: "RPO = max. Datenverlust. 4h = max. 4 Stunden Arbeit gehen verloren.",
            },
            {
              id: "imp_lf3-sp-2_3",
              q: "Differentiell sichert seit?",
              options: ["Letztem Vollbackup", "Letztem Backup", "Letzter Woche", "Gestern"],
              correct: 0,
              explain: "Seit dem letzten VOLLBACKUP.",
            },
            {
              id: "imp_lf3-sp-2_4",
              q: "GFS: Grandfather?",
              options: ["Täglich", "Wöchentlich", "Jährlich", "Monatliches Vollbackup"],
              correct: 3,
              explain: "Son=täglich, Father=wöchentlich, Grandfather=monatlich.",
            },
            {
              id: "imp_lf3-sp-2_5",
              q: "RTO vs. RPO?",
              options: [
                "RPO=maximale Wiederherstellungszeit nach Ausfall",
                "RTO=maximal tolerierbarer Datenverlust in Stunden",
                "Beide Kennzahlen messen exakt dasselbe Zeitfenster",
                "RTO=max Wiederherstellungszeit, RPO=max Datenverlust",
              ],
              correct: 3,
              explain: "RTO: Wie schnell? RPO: Wie viel Daten dürfen verloren gehen?",
            },
            {
              id: "imp_lf3-sp-2_6",
              q: "Ransomware und Backup: Wichtig?",
              options: [
                "Nur Cloud-Backup",
                "Backup egal",
                "Offline-Backup überlebt Ransomware",
                "Nur RAID",
              ],
              correct: 2,
              explain: "Offline/Air-Gapped Backup ist der wichtigste Schutz gegen Ransomware.",
            },
            {
              id: "imp_lf3-sp-2_7",
              q: "Voll+Differentiell: Restore braucht?",
              options: [
                "Nur Differentiell",
                "Vollbackup + letztes Differentiell",
                "Alle Differentiellen",
                "Nur Vollbackup",
              ],
              correct: 1,
              explain: "Voll + letztes Differentiell = vollständige Wiederherstellung.",
            },
            {
              id: "imp_lf3-sp-2_8",
              q: "LTO-Tape: Wofür?",
              options: ["RAM", "Archivierung/Offsite Backup", "SSD-Ersatz", "Primärspeicher"],
              correct: 1,
              explain: "LTO: Günstig, hohe Kapazität, ideal für Langzeit-Archivierung.",
            },
            {
              id: "imp_lf3-sp-2_9",
              q: "Air-Gapped Backup?",
              options: [
                "Physisch getrennt vom Netzwerk (Ransomware-Schutz)",
                "Backup in der Cloud, ständig über Internet synchron",
                "Snapshot der VM auf demselben Host-Speicher",
                "RAID-Spiegelung der Platten im laufenden Server",
              ],
              correct: 0,
              explain: "Air-Gap: Backup ist offline, nicht erreichbar für Malware.",
            },
            {
              id: "imp_lf3-sp-2_10",
              q: "Was sichert ein inkrementelles Backup?",
              options: [
                "Nur die Änderungen seit dem letzten Vollbackup (differenziell)",
                "Nur Dateien, die seit der letzten Sicherung gelöscht wurden",
                "Sämtliche Daten des Systems bei jedem einzelnen Lauf",
                "Nur Änderungen seit dem letzten Backup (egal welcher Art)",
              ],
              correct: 3,
              explain:
                "Inkrementell: Delta seit letztem Backup (Voll ODER Inkrementell). Klein und schnell.",
            },
            {
              id: "imp_lf3-sp-2_11",
              q: "Wie viele Backups braucht man für einen Restore bei inkrementeller Sicherung?",
              options: [
                "Nur das zuletzt erstellte inkrementelle Backup genügt",
                "Nur das letzte Vollbackup, Inkremente sind verzichtbar",
                "Die letzten beiden Sicherungen, unabhängig vom Typ",
                "Vollbackup + alle Inkrementellen bis zum gewünschten Stand",
              ],
              correct: 3,
              explain:
                "Restore: Vollbackup einspielen + jedes Inkrementelle in Reihenfolge. Bei vielen = langsam.",
            },
            {
              id: "imp_lf3-sp-2_12",
              q: "Wofür steht die Kennzahl RPO im Backup-Konzept?",
              options: [
                "Recovery Point Objective",
                "Recovery Process Order",
                "Restore Program Output",
                "Regular Point Operation",
              ],
              correct: 0,
              explain:
                "Max. akzeptabler Datenverlust (Zeit). RPO 4h = max. 4 Stunden Datenverlust akzeptabel → Backup mind. alle 4 Stunden.",
            },
            {
              id: "imp_lf3-sp-2_13",
              q: "Was ist die 3-2-1-Regel?",
              options: [
                "3 TB, 2 TB, 1 TB",
                "3 Backups pro Tag",
                "3 Server, 2 Netzwerke, 1 Admin",
                "3 Kopien, 2 Medientypen, 1 Offsite-Kopie",
              ],
              correct: 3,
              explain: "3-2-1: Mindeststandard für Backup-Sicherheit.",
            },
            {
              id: "imp_lf3-sp-2_14",
              q: "Was ist ein Offsite-Backup?",
              options: [
                "Backup auf dem gleichen Server",
                "Backup an einem anderen physischen Standort",
                "Backup auf USB-Stick",
                "Backup in der Cloud (nur)",
              ],
              correct: 1,
              explain:
                "Offsite: Räumlich getrennt → schützt vor Brand, Diebstahl, Naturkatastrophen am Hauptstandort.",
            },
            {
              id: "imp_lf3-sp-2_15",
              q: "Was ist ein Snapshot?",
              options: [
                "Momentaufnahme des Speicherzustands zu einem Zeitpunkt",
                "Eine Log-Datei mit den Ereignissen des Systems",
                "Ein vollständiges, unabhängiges Backup aller Daten",
                "Ein Kamerafoto des Servers zur Inventarisierung",
              ],
              correct: 0,
              explain:
                "Snapshot: Schnelle Momentaufnahme (z.B. VM-Snapshot). Kein echtes Backup, aber gut für schnelle Wiederherstellung.",
            },
            {
              id: "imp_lf3-sp-2_16",
              q: "Warum sind regelmäßige Restore-Tests wichtig?",
              options: [
                "Weil ein Backup, das nie getestet wurde, kein zuverlässiges Backup ist",
                "Sie sind nur bei Band-Backups nötig, da Magnetbänder altern",
                "Sie dienen nur dem Nachweis gegenüber Auditoren und Prüfern",
                "Sie sind unnötig, da erfolgreiche Backups automatisch fehlerfrei sind",
              ],
              correct: 0,
              explain:
                "Ungetestetes Backup = Schrödingers Backup: Funktioniert es? Weiß man erst beim Restore.",
            },
            {
              id: "imp_lf3-sp-2_17",
              q: "Wofür steht die Kennzahl RTO im Backup-Konzept?",
              options: [
                "Restore Test Operation",
                "Runtime Optimization",
                "Recovery Time Objective",
                "Regular Time Output",
              ],
              correct: 2,
              explain:
                "Max. Zeit bis System wieder läuft. RTO 2h = System muss innerhalb von 2 Stunden nach Ausfall wieder verfügbar sein.",
            },
            {
              id: "imp_lf3-sp-2_18",
              q: "Was ist ein Air-Gapped Backup?",
              options: [
                "Backup ohne Netzwerkverbindung (physisch getrennt)",
                "Ein stark komprimiertes Backup zur Platzersparnis",
                "Eine Sicherung, die per Richtfunk übertragen wird",
                "Ein Online-Backup bei einem Cloud-Anbieter",
              ],
              correct: 0,
              explain:
                "Air-Gapped: Keine Verbindung zum Netzwerk → Ransomware kann es nicht erreichen.",
            },
            {
              id: "imp_lf3-sp-2_19",
              q: "Welches Backup-Medium eignet sich für Langzeitarchivierung?",
              options: ["LTO-Magnetband", "SSD", "USB-Stick", "RAM-Disk"],
              correct: 0,
              explain:
                "LTO-Bänder: 30+ Jahre Haltbarkeit, günstigster Preis/TB, Standard für Archive und Compliance.",
            },
          ],
        },
      ],
    },
    {
      id: "lf3-tools",
      title: "Netzwerk-Tools (Praxis)",
      lessons: [
        {
          id: "lf3-tl-1",
          title: "Wireshark – Netzwerkanalyse",
          content: [
            { type: "heading", value: "Was ist Wireshark?" },
            {
              type: "text",
              value:
                "Freier Open-Source Paketanalysator (Packet Sniffer). Fängt den gesamten Netzwerkverkehr auf einer Schnittstelle mit und zeigt ihn in Echtzeit an. Unverzichtbares Werkzeug für Netzwerk-Troubleshooting, Sicherheitsanalyse und Protokoll-Verständnis.",
            },
            { type: "heading", value: "Installation & Grundbedienung" },
            {
              type: "text",
              value:
                "Download: wireshark.org (Windows, macOS, Linux). Interface auswählen (Ethernet, WLAN), Capture starten. Pakete werden in Echtzeit aufgelistet mit: Nr., Zeit, Quelle, Ziel, Protokoll, Länge, Info. Farbcodierung: Grün=TCP, Blau=UDP, Schwarz=Fehler/Probleme.",
            },
            { type: "heading", value: "Wichtige Filter" },
            {
              type: "text",
              value:
                "Display-Filter (nach dem Capture): ip.addr == 192.168.1.1 (alle Pakete von/zu dieser IP). tcp.port == 443 (HTTPS-Verkehr). http (nur HTTP-Pakete). dns (nur DNS-Anfragen). tcp.flags.syn == 1 (nur SYN-Pakete, Verbindungsaufbau). icmp (nur Ping). arp (ARP-Anfragen).",
            },
            { type: "heading", value: "Übungsaufgaben (im Programm testen!)" },
            {
              type: "text",
              value:
                "1) Starte einen Capture, öffne eine Webseite und filtere nach 'dns'. Welche Domains werden aufgelöst? 2) Filtere nach 'tcp.port == 80 || tcp.port == 443'. Erkennst du den 3-Way-Handshake (SYN, SYN-ACK, ACK)? 3) Filtere nach 'arp'. Welche MAC-Adressen siehst du? Welche gehört zu deinem Gateway? 4) Fange einen Ping ein (icmp-Filter). Wie groß sind die Pakete? Welche TTL wird verwendet? 5) Vergleiche HTTP (Port 80) mit HTTPS (Port 443) – kannst du bei HTTP den Inhalt lesen? Bei HTTPS?",
            },
            {
              type: "note",
              value:
                "Wireshark ist ein MUSS-Tool für jeden FiSi. In der AP wird zwar nicht direkt Wireshark abgefragt, aber das Verständnis von Paketen, Protokollen und dem 3-Way-Handshake schon.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Wireshark-Zweck" },
            { type: "text", value: "Wozu nutzt man Wireshark und auf welcher Ebene arbeitet es?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nWireshark ist ein Protokollanalysator (Sniffer), der\nNetzwerkverkehr mitschneidet und Paket für Paket\nbis ins Detail darstellt (alle Schichten). Nutzen:\nFehlersuche, Analyse von Protokollen, Erkennen von\nProblemen wie Retransmissions oder falschen DNS-\nAntworten.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Filter" },
            {
              type: "text",
              value: "Wie filterst du in Wireshark nur HTTP-Verkehr bzw. eine bestimmte IP?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nAnzeigefilter:\n  http                 (nur HTTP)\n  ip.addr == 192.168.1.10  (nur diese IP)\n  tcp.port == 443      (nur HTTPS)\nFilter können mit and/or kombiniert werden, z.B.\n  http and ip.addr == 192.168.1.10",
            },
            { type: "heading", value: "Übungsaufgabe 3: Recht/Datenschutz" },
            {
              type: "text",
              value: "Worauf musst du beim Mitschneiden von Verkehr rechtlich achten?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nMitschneiden kann personenbezogene Daten und Inhalte\nerfassen -> nur mit Erlaubnis/berechtigtem Grund im\neigenen Netz, nicht in fremden Netzen. Datenschutz\n(DSGVO) und Fernmeldegeheimnis beachten, Aufzeichnungen\nzweckgebunden und sicher behandeln.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Capture-Filter" },
            {
              type: "text",
              value:
                "Du willst nur Traffic von/zu 192.168.1.100 aufzeichnen. Welcher Wireshark-Capture-Filter?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nCapture-Filter: host 192.168.1.100\n(Nur Pakete mit dieser IP als Quelle ODER Ziel.)\nDisplay-Filter (nach Aufzeichnung):\nip.addr == 192.168.1.100\nCapture-Filter spart Ressourcen bei großem Traffic.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Analyse" },
            {
              type: "text",
              value:
                "Im Capture siehst du viele TCP-Retransmissions zu einem Server. Was deutet das an?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nPaketverlust auf dem Weg zum Server: Pakete kommen\nnicht an oder die Bestätigungen (ACK) gehen verloren,\ndeshalb sendet TCP erneut. Mögliche Ursachen:\nNetzwerküberlastung, defektes Kabel/Port,\nFirewall/IDS, das Pakete verwirft, überlasteter Server.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Mitschnitt-Recht" },
            { type: "text", value: "Darfst du einfach so den Netzwerkverkehr mitschneiden?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nNein - Netzwerk-Mitschnitt kann personenbezogene Daten\nerfassen (DSGVO) und in vielen Fällen Strafrecht\nberühren (Ausspähen §§ 202a/b StGB; Fernmeldegeheimnis heute § 3 TDDDG, früher TKG). Nur mit Genehmigung\ndes Verantwortlichen und in begründeten Fällen\n(Fehleranalyse, Sicherheitsvorfall). Im Betrieb:\nBetriebsrat und Datenschutzbeauftragten einbeziehen.",
            },
            { type: "heading", value: "Beispiel 1: Wireshark-Capture lesen" },
            {
              type: "text",
              value:
                "Filter 'http' zeigt alle HTTP-Pakete. Ein GET-Request an example.com: Frame → Ethernet (MAC-Adressen) → IP (Quell-/Ziel-IP) → TCP (Quell-Port 54321, Ziel-Port 80, Flags: ACK,PSH) → HTTP (GET / HTTP/1.1, Host: example.com). Im Hex-Dump sieht man die Rohdaten. Follow TCP Stream zeigt die komplette Kommunikation als Text.",
            },
            { type: "heading", value: "Beispiel 2: Typische Wireshark-Filter" },
            {
              type: "text",
              value:
                "ip.addr == 192.168.1.10: Alle Pakete von/zu dieser IP. tcp.port == 443: Nur HTTPS-Traffic. dns: Nur DNS-Abfragen/Antworten. tcp.flags.syn == 1: Nur SYN-Pakete (Verbindungsaufbau). http.request.method == POST: Nur HTTP-POST-Requests. !(arp or icmp): Alles außer ARP und ICMP. Praxis: Bei Netzwerkproblemen zuerst nach fehlgeschlagenen Handshakes (SYN ohne SYN-ACK) filtern.",
            },
            { type: "heading", value: "Beispiel 3: Netzwerkproblem mit Wireshark diagnostizieren" },
            {
              type: "text",
              value:
                "Problem: Webseite lädt langsam. Capture starten, Seite aufrufen. Filter: dns → DNS-Auflösung dauert 5 Sekunden (Normal: <50ms) → DNS-Server antwortet langsam. Oder: tcp.analysis.retransmission → Viele TCP-Retransmissions → Paketverlust auf der Strecke. Oder: tcp.time_delta > 1 → Große Verzögerungen zwischen Paketen → Bandbreiten-Engpass.",
            },
          ],
          quiz: [
            {
              id: "imp_lf3-tl-1_0",
              q: "Wireshark Display-Filter für nur DNS?",
              options: ["protocol=dns", "show dns only", "dns", "filter dns"],
              correct: 2,
              explain: "Einfach 'dns' in die Filterzeile eingeben.",
            },
            {
              id: "imp_lf3-tl-1_1",
              q: "TCP 3-Way-Handshake Reihenfolge?",
              options: [
                "SYN, ACK, SYN-ACK",
                "ACK, SYN, SYN-ACK",
                "SYN, SYN-ACK, ACK",
                "ACK, ACK, ACK",
              ],
              correct: 2,
              explain: "SYN (Client) -> SYN-ACK (Server) -> ACK (Client) = Verbindung steht.",
            },
            {
              id: "imp_lf3-tl-1_2",
              q: "Kann man HTTPS-Inhalte in Wireshark lesen?",
              options: [
                "Ja, immer",
                "Nein, verschlüsselt",
                "Nur mit Passwort",
                "Nur auf dem Server",
              ],
              correct: 1,
              explain: "HTTPS ist TLS-verschlüsselt - Wireshark zeigt nur verschlüsselte Daten.",
            },
            {
              id: "imp_lf3-tl-1_3",
              q: "Wireshark Filter: http?",
              options: ["DNS filtern", "HTTP blockieren", "Nur HTTP-Pakete", "Alle Pakete"],
              correct: 2,
              explain: "Display Filter http zeigt nur HTTP-Traffic.",
            },
            {
              id: "imp_lf3-tl-1_4",
              q: "Promiscuous Mode?",
              options: [
                "Alle Pakete im Netz empfangen",
                "Firewall",
                "Verschlüsselt",
                "Nur eigene Pakete",
              ],
              correct: 0,
              explain: "NIC empfängt ALLE Frames, nicht nur eigene.",
            },
            {
              id: "imp_lf3-tl-1_5",
              q: "tcp.port == 443?",
              options: ["Alle Ports", "Nur HTTPS-Traffic", "DNS", "Nur UDP"],
              correct: 1,
              explain: "Filtert auf Port 443 (HTTPS).",
            },
            {
              id: "imp_lf3-tl-1_6",
              q: "Follow TCP Stream?",
              options: [
                "Komplette Kommunikation einer TCP-Verbindung anzeigen",
                "Sämtliche Pakete aller Verbindungen ungefiltert auflisten",
                "Die bestehende TCP-Verbindung per Reset-Paket trennen",
                "Den mitgeschnittenen Stream aus der Capture-Datei löschen",
              ],
              correct: 0,
              explain: "Zeigt den kompletten Inhalt einer TCP-Session zusammenhängend.",
            },
            {
              id: "imp_lf3-tl-1_7",
              q: "Display Filter vs. Capture Filter?",
              options: [
                "Capture-Filter wirken erst nachträglich auf die fertige Aufzeichnung",
                "Display = nachträglich filtern, Capture = beim Aufzeichnen",
                "Display-Filter begrenzen bereits beim Mitschnitt, was aufgezeichnet wird",
                "Beide Filterarten sind identisch und nur unterschiedlich benannt",
              ],
              correct: 1,
              explain:
                "Display-Filter: filtert nur die Anzeige (auch nachträglich änderbar). Capture-Filter: bestimmt schon beim Mitschnitt, was aufgezeichnet wird.",
            },
            {
              id: "imp_lf3-tl-1_8",
              q: "Wireshark: Farben?",
              options: [
                "Benutzerdefiniert nur",
                "Zufällig",
                "Grün=TCP, Blau=DNS, Rot=Fehler/RST",
                "Nur Deko",
              ],
              correct: 2,
              explain: "Farbcodierung hilft bei schneller Analyse.",
            },
            {
              id: "imp_lf3-tl-1_9",
              q: "HTTP vs. HTTPS in Wireshark?",
              options: [
                "HTTPS = auch lesbar",
                "Nur mit VPN",
                "Gleich",
                "HTTP = lesbar, HTTPS = verschlüsselt",
              ],
              correct: 3,
              explain:
                "Nur Handshake sichtbar. HTTPS: Payload verschlüsselt, nur TLS-Handshake sichtbar.",
            },
            {
              id: "imp_lf3-tl-1_10",
              q: "Was ist ein Capture-Filter in Wireshark?",
              options: [
                "Filter, der erst nach dem Aufzeichnen auf die fertige Aufnahme angewendet wird",
                "Eine Schutzfunktion, die verdächtige Pakete im Netz blockiert",
                "Filter, der VOR dem Aufzeichnen bestimmt, welche Pakete mitgeschnitten werden",
                "Ein integrierter Virenscanner für mitgeschnittene Dateien",
              ],
              correct: 2,
              explain:
                "Capture-Filter: Bestimmt was aufgezeichnet wird (BPF-Syntax). Display-Filter: Filtert die Anzeige nachträglich.",
            },
            {
              id: "imp_lf3-tl-1_11",
              q: "Welcher Display-Filter zeigt nur DNS-Traffic?",
              options: ["filter=dns", "port 53", "dns", "protocol:dns"],
              correct: 2,
              explain: "Display-Filter 'dns' zeigt alle DNS-Pakete (Queries und Responses).",
            },
            {
              id: "imp_lf3-tl-1_12",
              q: "Was zeigt 'Follow TCP Stream' in Wireshark?",
              options: [
                "Alle TCP-Pakete sämtlicher Verbindungen chronologisch gemischt",
                "Alle offenen Ports des Zielsystems mit zugehörigen Diensten",
                "Die TCP-Statistik mit Retransmissions und Fenstergrößen je Verbindung",
                "Die komplette Kommunikation einer TCP-Verbindung als zusammenhängenden Text",
              ],
              correct: 3,
              explain:
                "Follow TCP Stream: Rekonstruiert die gesamte Konversation – sehr nützlich für HTTP/SMTP-Analyse.",
            },
            {
              id: "imp_lf3-tl-1_13",
              q: "Was ist Promiscuous Mode?",
              options: [
                "Betriebsmodus, in dem die Netzwerkkarte alle Pakete verschlüsselt",
                "Netzwerkkarte empfängt ALLE Pakete im Segment, nicht nur eigene",
                "Ein Sicherheitsmodus, der fremde Pakete automatisch verwirft",
                "Der normale Standardbetrieb jeder Netzwerkkarte ab Werk",
              ],
              correct: 1,
              explain:
                "Promiscuous Mode: NIC empfängt auch Frames, die nicht an die eigene MAC adressiert sind → nötig für Sniffing.",
            },
            {
              id: "imp_lf3-tl-1_14",
              q: "Was bedeutet TCP Retransmission in Wireshark?",
              options: [
                "Der Sender hat die Daten absichtlich doppelt geschickt, um die Übertragung zu beschleunigen",
                "Ein normaler, gesunder Datenverkehr ohne jede Auffälligkeit im Netzwerk",
                "Die TCP-Verbindung wird komplett abgebaut und mit neuem Three-Way-Handshake neu aufgebaut",
                "Ein Paket wurde erneut gesendet, weil keine Bestätigung kam → möglicherweise Paketverlust",
              ],
              correct: 3,
              explain:
                "Retransmission: Sender hat kein ACK erhalten → sendet Paket erneut. Häufig = Netzwerkproblem.",
            },
            {
              id: "imp_lf3-tl-1_15",
              q: "Welcher DISPLAY-Filter zeigt in Wireshark nur Pakete einer bestimmten IP?",
              options: [
                "host 192.168.1.10",
                "ip.addr == 192.168.1.10",
                "src=192.168.1.10",
                "mac.addr == ...",
              ],
              correct: 1,
              explain: "Display-Filter: ip.addr == x.x.x.x (Capture-Filter wäre: host x.x.x.x).",
            },
            {
              id: "imp_lf3-tl-1_16",
              q: "Was ist eine PCAP-Datei?",
              options: ["Ein PDF-Format", "Packet Capture", "Ein Programm", "Ein Protokoll"],
              correct: 1,
              explain:
                "Aufgezeichneter Netzwerk-Mitschnitt. PCAP (.pcap/.pcapng): Standardformat für gespeicherte Netzwerk-Captures. Kann in Wireshark geöffnet werden.",
            },
            {
              id: "imp_lf3-tl-1_17",
              q: "Warum sieht man bei HTTPS den Inhalt nicht im Klartext?",
              options: [
                "TLS-Verschlüsselung",
                "Falscher Filter",
                "Wireshark-Fehler",
                "HTTPS nutzt UDP",
              ],
              correct: 0,
              explain:
                "Payload ist verschlüsselt, nur TLS-Handshake sichtbar. HTTPS = HTTP + TLS: Daten verschlüsselt. Man sieht: IP-Adressen, Ports, TLS-Handshake, SNI (Servername) – aber nicht den Inhalt.",
            },
            {
              id: "imp_lf3-tl-1_18",
              q: "Was ist ein Three-Way-Handshake in Wireshark?",
              options: [
                "Drei Retransmissions",
                "Drei Pakete: SYN → SYN,ACK → ACK",
                "Drei DNS-Abfragen",
                "Drei ARP-Requests",
              ],
              correct: 1,
              explain:
                "TCP-Verbindungsaufbau: SYN (Client) → SYN,ACK (Server) → ACK (Client). Filter: tcp.flags.syn==1.",
            },
            {
              id: "imp_lf3-tl-1_19",
              q: "Wann ist Wireshark das richtige Werkzeug?",
              options: [
                "Für Netzwerk-Diagnose auf Paketebene (Layer 2-7)",
                "Für das Debugging von Quellcode in der IDE",
                "Für die Entwicklung und das Styling von Webseiten",
                "Für die Analyse und Wiederherstellung von Festplatten",
              ],
              correct: 0,
              explain:
                "Wireshark: Analyse auf Paketebene. Ideal für: Verbindungsprobleme, Latenz, DNS-Fehler, Protokoll-Analyse.",
            },
          ],
        },
        {
          id: "lf3-tl-2",
          title: "Cisco Packet Tracer – Netzwerksimulation",
          content: [
            { type: "heading", value: "Was ist Cisco Packet Tracer?" },
            {
              type: "text",
              value:
                "Kostenlose Netzwerk-Simulationssoftware von Cisco. Ermöglicht das Erstellen, Konfigurieren und Testen von Netzwerken ohne physische Hardware. Registrierung auf netacad.com erforderlich (kostenlos). Verfügbar für Windows, macOS, Linux.",
            },
            { type: "heading", value: "Grundlagen der Bedienung" },
            {
              type: "text",
              value:
                "Geräte aus der Palette ziehen (Router, Switches, PCs, Server). Verbindungen mit Kabeltypen herstellen (Kupfer Straight-Through, Crossover, Fiber, Seriell). Geräte per Klick konfigurieren (CLI-Tab für Cisco-Befehle, Desktop-Tab für PC-Konfiguration). Simulation-Modus: Pakete Schritt für Schritt verfolgen.",
            },
            { type: "heading", value: "Übung 1: Einfaches LAN" },
            {
              type: "text",
              value:
                "Aufgabe: 3 PCs an einem Switch. PCs: 192.168.1.10/24, .11/24, .12/24. Gateway: 192.168.1.1. Teste Ping zwischen allen PCs. Prüfe: Was passiert wenn du eine falsche Subnetzmaske einstellst?",
            },
            { type: "heading", value: "Übung 2: Zwei Netze mit Router" },
            {
              type: "text",
              value:
                "Netz A: 192.168.1.0/24 (3 PCs + Switch). Netz B: 192.168.2.0/24 (2 PCs + Switch). Router verbindet beide Netze (Gi0/0 = .1.1, Gi0/1 = .2.1). Konfiguriere IPs auf Router-Interfaces. Setze Default Gateways auf den PCs. Teste Ping zwischen den Netzen.",
            },
            { type: "heading", value: "Übung 3: VLAN-Konfiguration" },
            {
              type: "text",
              value:
                "1 Switch, 4 PCs. VLAN 10 (Büro): PC1 + PC2. VLAN 20 (Server): PC3 + PC4. Erstelle VLANs, weise Ports zu. Teste: PCs im gleichen VLAN können pingen, verschiedene VLANs nicht. Für Inter-VLAN-Routing: Router-on-a-Stick mit Subinterfaces.",
            },
            { type: "heading", value: "Übung 4: DHCP-Server" },
            {
              type: "text",
              value:
                "Router als DHCP-Server konfigurieren. Pool: 192.168.1.100 - .200, Gateway .1, DNS 8.8.8.8. PCs auf DHCP stellen. Prüfen: Bekommen alle eine IP? Was zeigt 'show ip dhcp binding'?",
            },
            {
              type: "note",
              value:
                "Packet Tracer ist PFLICHT für FiSi. Die Praxis-Übungen hier bilden typische Prüfungsszenarien ab. Speichere deine Lösungen als .pkt-Dateien.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Packet Tracer" },
            { type: "text", value: "Was ist Cisco Packet Tracer und wofür eignet es sich?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nEin Netzwerk-Simulator von Cisco zum Aufbauen und\nTesten virtueller Netze (Router, Switches, PCs) ohne\nechte Hardware. Ideal zum Lernen/Üben von\nKonfigurationen (VLANs, Routing) und für die\nCCNA-Vorbereitung.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Simulationsmodus" },
            {
              type: "text",
              value: "Welchen Vorteil bietet der Simulationsmodus gegenüber dem Echtzeitmodus?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nIm Simulationsmodus laufen Pakete in Zeitlupe und\nman sieht Schritt für Schritt, wie ein Paket durch\ndas Netz wandert (welche Protokolle, welche Schicht).\nGut zum Verstehen von ARP, Ping, Routing - im\nEchtzeitmodus passiert das zu schnell.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Grenzen" },
            { type: "text", value: "Wo stößt ein Simulator wie Packet Tracer an Grenzen?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nEr bildet nicht jede Funktion echter Geräte und\nnicht das volle Verhalten realer Hardware/IOS-\nVersionen ab. Für produktionsnahe Tests braucht man\nechte Geräte oder vollwertige Emulatoren (z.B. GNS3\nmit echten IOS-Images).",
            },
            { type: "heading", value: "Übungsaufgabe 2: Simulation" },
            {
              type: "text",
              value:
                "Du konfigurierst einen Router in PT und ein PC kann den anderen nicht pingen. Nenne 3 Prüfschritte.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. IP-Adressen prüfen: stimmen Subnetz, Gateway?\n2. Router-Interfaces: sind sie 'no shutdown' / up?\n3. Routing: gibt es eine Route zwischen den Netzen?\n   (show ip route)\nBonus: VLAN-Zuordnung prüfen, Firewall/ACL prüfen.",
            },
            { type: "heading", value: "Übungsaufgabe 3: CLI" },
            {
              type: "text",
              value:
                "Wie wechselst du im Cisco IOS vom User- in den Privileged- und dann in den Config-Modus?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nUser EXEC: Router>\nenable -> Privileged EXEC: Router#\nconfigure terminal -> Global Config: Router(config)#\n(Kurzform: en, conf t)\nZurück: exit oder end (aus Config direkt zu Priv).",
            },
            { type: "heading", value: "Beispiel 1: Cisco Packet Tracer Grundlagen" },
            {
              type: "text",
              value:
                "Packet Tracer ist ein Netzwerk-Simulator von Cisco. Man kann virtuelle Netzwerke aufbauen: Router, Switches, PCs, Server per Drag&Drop platzieren, verkabeln und konfigurieren. Simulation-Mode zeigt Pakete Schritt für Schritt durch das Netzwerk → perfekt um OSI-Schichten, Routing, DHCP, DNS visuell zu verstehen. Kostenlos über Cisco Networking Academy.",
            },
            { type: "heading", value: "Beispiel 2: Einfaches LAN in Packet Tracer" },
            {
              type: "text",
              value:
                "Setup: 1 Switch (2960), 3 PCs, 1 Server. PCs per Kupferkabel (Straight-Through) an Switch. IPs manuell: PC1=192.168.1.10/24, PC2=.20, PC3=.30, Server=.1. Test: PC1 ping PC2 → ARP-Request (Broadcast), ARP-Reply, ICMP Echo/Reply sichtbar. Im Simulation-Mode sieht man den Frame durch den Switch zur richtigen MAC-Adresse weitergeleitet.",
            },
            { type: "heading", value: "Beispiel 3: Routing zwischen VLANs" },
            {
              type: "text",
              value:
                "2 VLANs auf einem Switch: VLAN 10 (Büro, 192.168.10.0/24) und VLAN 20 (Server, 192.168.20.0/24). PCs in VLAN 10 können Server in VLAN 20 nicht erreichen → brauchen Router (Inter-VLAN-Routing). Router mit Subinterfaces: GigE0/0.10 (192.168.10.1) und GigE0/0.20 (192.168.20.1). Trunk-Port zum Switch (802.1Q). Jetzt können beide VLANs über den Router kommunizieren.",
            },
          ],
          quiz: [
            {
              id: "imp_lf3-tl-2_0",
              q: "Packet Tracer ist von?",
              options: ["Wireshark", "Cisco", "VMware", "Microsoft"],
              correct: 1,
              explain: "Cisco Packet Tracer, kostenlos über netacad.com.",
            },
            {
              id: "imp_lf3-tl-2_1",
              q: "Zwei verschiedene VLANs können NICHT direkt kommunizieren. Was braucht man?",
              options: [
                "Einen Router (Inter-VLAN-Routing)",
                "Einen Hub",
                "Nichts, geht automatisch",
                "Längeres Kabel",
              ],
              correct: 0,
              explain:
                "VLANs sind isoliert. Für Kommunikation zwischen VLANs braucht man einen Router oder L3-Switch.",
            },
            {
              id: "imp_lf3-tl-2_2",
              q: "DHCP-Zuweisungen auf Cisco anzeigen?",
              options: [
                "show ip dhcp binding",
                "show dhcp status",
                "show ip pool",
                "show dhcp leases",
              ],
              correct: 0,
              explain: "show ip dhcp binding zeigt alle vergebenen Adressen.",
            },
            {
              id: "imp_lf3-tl-2_3",
              q: "Packet Tracer: enable?",
              options: [
                "Privileged EXEC Mode",
                "Interface aktivieren",
                "Config speichern",
                "Neustart",
              ],
              correct: 0,
              explain: "enable: Wechselt in privilegierten Modus (Router#).",
            },
            {
              id: "imp_lf3-tl-2_4",
              q: "show running-config?",
              options: [
                "Interface-Status",
                "Gespeicherte Config",
                "Boot-Config",
                "Aktuelle Config im RAM",
              ],
              correct: 3,
              explain: "running-config: Aktuelle Konfiguration im RAM.",
            },
            {
              id: "imp_lf3-tl-2_5",
              q: "copy run start?",
              options: ["Von USB laden", "Config löschen", "Config dauerhaft speichern", "Reset"],
              correct: 2,
              explain: "Speichert laufende Config im NVRAM.",
            },
            {
              id: "imp_lf3-tl-2_6",
              q: "show ip interface brief?",
              options: [
                "VLAN-Config",
                "ARP-Tabelle",
                "Routing",
                "IP-Adressen und Status aller Interfaces",
              ],
              correct: 3,
              explain: "Schnellübersicht: Interface, IP, Status (up/down).",
            },
            {
              id: "imp_lf3-tl-2_7",
              q: "hostname R1?",
              options: [
                "VLAN erstellen",
                "Router-Hostname auf R1 setzen",
                "IP setzen",
                "Interface aktivieren",
              ],
              correct: 1,
              explain: "hostname: Setzt den Namen des Geräts.",
            },
            {
              id: "imp_lf3-tl-2_8",
              q: "interface range g0/1-24?",
              options: [
                "Ein neues VLAN mit der ID 1 bis 24 erstellen",
                "Mehrere Interfaces gleichzeitig konfigurieren",
                "Nur das einzelne Interface g0/1 konfigurieren",
                "Die Konfiguration der Ports 1–24 löschen",
              ],
              correct: 1,
              explain: "interface range: Befehl auf mehrere Ports gleichzeitig anwenden.",
            },
            {
              id: "imp_lf3-tl-2_9",
              q: "write memory = ?",
              options: [
                "Aktiviert das Logging aller Befehle in den RAM",
                "Löscht den Inhalt des Arbeitsspeichers (RAM)",
                "Setzt den Switch auf Werkseinstellungen zurück",
                "Config dauerhaft speichern (= copy run start)",
              ],
              correct: 3,
              explain: "write memory = copy running-config startup-config.",
            },
            {
              id: "imp_lf3-tl-2_10",
              q: "Was ist Cisco Packet Tracer?",
              options: [
                "Ein Portscanner, der offene Dienste in fremden Netzen findet",
                "Ein Monitoring-System für produktive Unternehmensnetze",
                "Ein Netzwerk-Simulator für Ausbildung und Prüfungsvorbereitung",
                "Ein VPN-Client für die sichere Einwahl ins Firmennetz",
              ],
              correct: 2,
              explain:
                "Packet Tracer: Kostenloser Simulator von Cisco, ideal für CCNA-Vorbereitung und FiSi-Ausbildung.",
            },
            {
              id: "imp_lf3-tl-2_11",
              q: "Welches Kabel verbindet einen PC mit einem Switch?",
              options: [
                "Straight-Through-Kabel (Patch-Kabel)",
                "Glasfaser",
                "Konsolenkabel",
                "Crossover-Kabel",
              ],
              correct: 0,
              explain:
                "PC→Switch: Straight-Through (Patch-Kabel). Switch→Switch (ohne Auto-MDI-X): Crossover.",
            },
            {
              id: "imp_lf3-tl-2_12",
              q: "Was zeigt der Simulation-Mode in Packet Tracer?",
              options: [
                "Ausschließlich die physische Verkabelung zwischen den Geräten",
                "Pakete Schritt für Schritt durch das Netzwerk mit Protokolldetails",
                "Nur die konfigurierten IP-Adressen aller Geräte in Tabellenform",
                "Ausschließlich die aufgetretenen Fehlermeldungen der Geräte",
              ],
              correct: 1,
              explain:
                "Simulation-Mode: Pakete visuell verfolgen, PDUs öffnen und Schicht für Schicht analysieren.",
            },
            {
              id: "imp_lf3-tl-2_13",
              q: "Welche Aufgabe hat ein Trunk-Port zwischen zwei Switches?",
              options: [
                "Ein dedizierter Anschluss, an dem ausschließlich Server mit erhöhter Bandbreite angebunden werden",
                "Ein USB-Anschluss am Switch, über den Konfigurationsdateien per Speicherstick übertragen werden",
                "Ein Switch-Port, der VLAN-getaggte Frames mehrerer VLANs transportiert (802.1Q)",
                "Ein Access-Port, an dem ein einzelner PC ungetaggte Frames genau eines VLANs sendet und empfängt",
              ],
              correct: 2,
              explain:
                "Trunk: Transportiert Traffic mehrerer VLANs zwischen Switches oder zum Router (802.1Q-Tagging).",
            },
            {
              id: "imp_lf3-tl-2_14",
              q: "Was ist Inter-VLAN-Routing?",
              options: [
                "Routing zwischen verschiedenen Standorten über WAN-Verbindungen",
                "Routing zwischen VLANs über einen Router oder Layer-3-Switch",
                "Routing der Pakete innerhalb eines einzelnen VLANs",
                "Routing in flachen Netzen, die ganz ohne VLANs auskommen",
              ],
              correct: 1,
              explain:
                "VLANs können nicht direkt kommunizieren → Router oder L3-Switch nötig für Inter-VLAN-Traffic.",
            },
            {
              id: "imp_lf3-tl-2_15",
              q: "Was ist ein Access-Port auf einem Switch?",
              options: [
                "Ein Port, der Trunk-Verbindungen mit mehreren VLANs transportiert",
                "Ein Port, der genau einem VLAN zugeordnet ist (für Endgeräte)",
                "Ein nur für Administrator-Zugriffe reservierter Management-Port",
                "Ein administrativ deaktivierter Port ohne jede VLAN-Zuordnung",
              ],
              correct: 1,
              explain:
                "Access-Port: Gehört zu genau einem VLAN, verbindet Endgeräte (PCs, Drucker). Kein VLAN-Tag im Frame.",
            },
            {
              id: "imp_lf3-tl-2_16",
              q: "Welcher CLI-Befehl zeigt die Routing-Tabelle auf einem Cisco-Router?",
              options: ["ip route show", "show ip route", "show routes", "route print"],
              correct: 1,
              explain:
                "show ip route: Zeigt alle bekannten Routen (direkt verbundene, statische, dynamische).",
            },
            {
              id: "imp_lf3-tl-2_17",
              q: "Was ist ein Default-Gateway?",
              options: [
                "Die Management-IP des Switches im lokalen Netzsegment",
                "Die Broadcast-Adresse, über die alle Hosts erreichbar sind",
                "Der DNS-Server, der Hostnamen in IP-Adressen auflöst",
                "Die IP des Routers, an den Pakete für unbekannte Netze gesendet werden",
              ],
              correct: 3,
              explain:
                "Default-Gateway: Wohin der PC Pakete sendet, die nicht im eigenen Subnetz liegen → typischerweise der Router.",
            },
            {
              id: "imp_lf3-tl-2_18",
              q: "Was ist VLAN-Tagging (802.1Q)?",
              options: [
                "Automatische IP-Adress-Zuweisung je VLAN per DHCP",
                "Verschlüsselung des Datenverkehrs innerhalb eines VLANs",
                "Filterung der Endgeräte anhand ihrer MAC-Adressen",
                "4-Byte-Tag im Ethernet-Frame, der die VLAN-ID enthält",
              ],
              correct: 3,
              explain:
                "802.1Q: 4 Byte werden in den Ethernet-Frame eingefügt mit VLAN-ID (1-4094) zur Identifikation.",
            },
            {
              id: "imp_lf3-tl-2_19",
              q: "Was versteht man unter dem Konzept Router-on-a-Stick?",
              options: [
                "Ein defekter Router, der nur noch über die Konsole erreichbar ist",
                "Ein Sparmodell-Router, der ab Werk nur einen einzigen LAN-Port ohne VLAN-Funktion besitzt",
                "Ein Router mit Subinterfaces auf einem physischen Port für Inter-VLAN-Routing",
                "Ein WLAN-Router, der Funknetz und kabelgebundenes Netz überbrückt",
              ],
              correct: 2,
              explain:
                "Router-on-a-Stick: Ein physischer Port, mehrere Subinterfaces (je eins pro VLAN) – günstige Inter-VLAN-Lösung.",
            },
          ],
        },
      ],
    },
  ],
};
