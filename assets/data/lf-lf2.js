window.LF_CONTENT = window.LF_CONTENT || {};
window.LF_CONTENT["lf2"] = {
  topics: [
    {
      id: "lf2-hw",
      title: "Hardware-Komponenten",
      lessons: [
        {
          id: "lf2-ergo-2",
          title: "Arbeitsplatz-Richtwerte: Licht, Lärm, Klima, Bildschirm",
          content: [
            {
              type: "text",
              value:
                "Die Arbeitsstättenverordnung und DIN EN 12464 liefern konkrete ZAHLEN, die in Prüfungen und bei jeder Arbeitsplatz-Einrichtung abgefragt werden – hier die Merkwerte:\n\nBELEUCHTUNG: Büro-/Bildschirmarbeit 500 Lux, Verkehrsflächen/Flure 100 Lux, Technikräume für Wartungsarbeiten ~200–300 Lux, feine Prüfarbeiten 750–1000 Lux. Dazu: Bildschirm parallel zum Fenster aufstellen (nie davor oder dahinter – Blendung bzw. Reflexion), Lichtfarbe neutralweiß fürs Büro.\n\nLÄRM: Für überwiegend geistige Tätigkeit sollen 55 dB(A) nicht überschritten werden (Serverraum-Dauerlärm gehört deshalb nicht neben den Schreibtisch), bei einfacher Büroarbeit gelten bis 70 dB(A) als zulässig. Ab 80 dB(A) muss der Arbeitgeber Gehörschutz ANBIETEN, ab 85 dB(A) besteht TRAGEPFLICHT (Lärmbereiche kennzeichnen!).\n\nKLIMA: Raumtemperatur für sitzende Bürotätigkeit mindestens 20 °C, empfohlen 20–22 °C; ab 26 °C SOLLEN Maßnahmen ergriffen werden (Stufenmodell bis 35 °C – darüber ist der Raum ohne Schutzmaßnahmen nicht mehr als Arbeitsraum geeignet). Relative Luftfeuchte behaglich bei 40–60 %.\n\nBILDSCHIRM & MÖBEL: Sehabstand 50–70 cm, Oberkante des Bildschirms auf oder knapp unter Augenhöhe, Blick leicht nach unten. Tischhöhe (fest) 72 cm, besser höhenverstellbar; Unterarme waagerecht aufgelegt, Ober-/Unterschenkel ≈ 90°. Und die Pausenregel der Bildschirmarbeit: Tätigkeitswechsel oder Kurzpausen einplanen – als Faustformel gilt oft 5 Minuten Unterbrechung je Stunde Bildschirmarbeit.",
            },
            { type: "heading", value: "Übungsaufgabe: Arbeitsplatz abnehmen" },
            {
              type: "text",
              value:
                "Du richtest für eine Sachbearbeiterin einen Bildschirmarbeitsplatz ein und misst: 350 Lux am Schreibtisch, 24 °C, Bildschirm direkt vor dem Fenster, Dauerpegel 58 dB(A) durch einen offenen Serverschrank im Raum. Bewerte die vier Messwerte gegen die Richtwerte und nenne je eine Maßnahme.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1) 350 Lux < 500 Lux → zu dunkel für Bildschirmarbeit: Beleuchtung ergänzen (z. B. Arbeitsplatzleuchte).\n2) 24 °C → im grünen Bereich (20–26 °C), keine Maßnahme nötig.\n3) Bildschirm VOR dem Fenster → Blendung durch Gegenlicht: um 90° drehen, Blickrichtung parallel zum Fenster (+ ggf. Blendschutz).\n4) 58 dB(A) Dauerlärm > 55 dB(A) für geistige Tätigkeit → Serverschrank raus aus dem Büro (Technikraum), mindestens gedämmter Schrank.",
            },
            { type: "heading", value: "Vertiefung: Warum die Zahlen Punkte bringen" },
            {
              type: "text",
              value:
                'AP-Aufgaben zur Arbeitsplatzgestaltung verlangen fast immer BEGRÜNDETE Bewertungen – und die Begründung ist der Richtwert: "zu dunkel" gibt einen halben Punkt, "350 Lux unterschreiten die geforderten 500 Lux für Bildschirmarbeit" die volle Punktzahl. Die fünf Zahlen 500 Lux · 55 dB(A) · 85 dB(A) · 20–26 °C · 50–70 cm decken die häufigsten Fragen ab.',
            },
          ],
          quiz: [
            {
              id: "imp_lf2-ergo-2_g0",
              q: "Richtwert für die Beleuchtung eines Bildschirmarbeitsplatzes?",
              options: ["100 Lux", "300 Lux", "500 Lux", "1.500 Lux"],
              correct: 2,
              explain: "500 Lux nach DIN EN 12464; Flure 100, feine Prüfarbeit bis 1000.",
            },
            {
              id: "imp_lf2-ergo-2_g1",
              q: "Ab welchem Lärmpegel besteht Gehörschutz-TRAGEPFLICHT?",
              options: ["55 dB(A)", "70 dB(A)", "80 dB(A)", "85 dB(A)"],
              correct: 3,
              explain: "Ab 80 dB(A) anbieten, ab 85 dB(A) tragen + Bereich kennzeichnen.",
            },
            {
              id: "imp_lf2-ergo-2_g2",
              q: "Wie steht der Bildschirm richtig zum Fenster?",
              options: [
                "Parallel – Blickrichtung entlang des Fensters",
                "Direkt davor mit Blick nach draußen",
                "Direkt dahinter, Fenster im Rücken",
                "Egal, moderne Displays blenden nicht",
              ],
              correct: 0,
              explain: "Davor = Gegenlicht-Blendung, dahinter = Reflexionen auf dem Display.",
            },
            {
              id: "imp_lf2-ergo-2_g3",
              q: "Ab welcher Raumtemperatur SOLLEN Maßnahmen ergriffen werden?",
              options: ["22 °C", "26 °C", "30 °C", "35 °C"],
              correct: 1,
              explain:
                "20–26 °C ist der Zielkorridor; ab 26 °C greift das Stufenmodell, ab 35 °C ist Schluss.",
            },
            {
              id: "imp_lf2-ergo-2_g4",
              q: "Empfohlener Sehabstand zum Monitor?",
              options: ["20–30 cm", "30–40 cm", "50–70 cm", "mindestens 1 m"],
              correct: 2,
              explain: "Dazu: Oberkante auf/knapp unter Augenhöhe, Blick leicht nach unten.",
            },
            {
              id: "imp_lf2-ergo-2_g5",
              q: "58 dB(A) Dauerlärm im Büro mit überwiegend geistiger Tätigkeit sind …",
              options: [
                "unbedenklich, Grenze ist 70 dB(A)",
                "über dem Richtwert von 55 dB(A) – Lärmquelle entfernen/dämmen",
                "nur mit Gehörschutz zulässig",
                "gesetzlich verboten ab 50 dB(A)",
              ],
              correct: 1,
              explain:
                "Für konzentrierte Arbeit gelten 55 dB(A) – der Serverschrank gehört in den Technikraum.",
            },
            {
              id: "imp_lf2-ergo-2_g6",
              q: "Welche Luftfeuchte gilt als behaglich?",
              options: ["10–20 %", "40–60 %", "70–90 %", "exakt 50 %"],
              correct: 1,
              explain: "Zu trocken reizt Augen/Schleimhäute, zu feucht fördert Schimmel.",
            },
            {
              id: "imp_lf2-ergo-2_g7",
              q: "Was bringt in der Prüfung die volle Punktzahl bei Arbeitsplatz-Bewertungen?",
              options: [
                "Die Nennung des Herstellers der Leuchten",
                "Möglichst viele Fachwörter",
                "Bewertung MIT Richtwert: Messwert gegen Grenzwert stellen",
                'Ein allgemeines "entspricht nicht der Norm"',
              ],
              correct: 2,
              explain: "Zahl schlägt Gefühl: 350 Lux < 500 Lux ist die prüfungsfeste Begründung.",
            },
          ],
        },
        {
          id: "lf2-hw-1",
          title: "Mainboard & Bussysteme",
          content: [
            { type: "heading", value: "Mainboard-Formfaktoren" },
            {
              type: "text",
              value:
                "ATX (305x244mm): Standard-Desktop, 7 Erweiterungsslots. Micro-ATX (244x244mm): Kompakter, 4 Slots, passt auch in ATX-Gehäuse. Mini-ITX (170x170mm): 1 Slot, für HTPCs und kompakte Systeme. E-ATX (305x330mm): Erweitert, für Server und High-End-Workstations.",
            },
            { type: "heading", value: "Chipsatz-Architektur: Früher vs. Heute" },
            {
              type: "text",
              value:
                "Klassisch (vor ~2010): Zwei Chips. Northbridge (MCH = Memory Controller Hub): Verbindung CPU ↔ RAM ↔ PCIe-Grafik. Schnelle Kommunikation, hohe Bandbreite. Wurde heiß, brauchte eigenen Kühlkörper. Southbridge (ICH = I/O Controller Hub): Verbindung zu langsamen Geräten: USB, SATA, Audio, LAN, PCIe x1. Verbunden mit Northbridge über DMI (Direct Media Interface).",
            },
            { type: "heading", value: "Modern (ab ~2010): Platform Controller Hub (PCH)" },
            {
              type: "text",
              value:
                "Intel hat die Northbridge IN die CPU integriert. Der Speichercontroller und PCIe-Lanes für die Grafikkarte sitzen jetzt direkt im Prozessor. Übrig bleibt nur noch der PCH (Platform Controller Hub) = die ehemalige Southbridge. PCH verbindet: SATA-Ports, USB-Ports, Audio, LAN, PCIe-Slots (außer x16 für GPU), M.2 Slots, RAID-Controller. CPU ↔ PCH kommunizieren über DMI 4.0 (bei Intel) bzw. einen PCIe-x4-Link (bei AMD; Infinity Fabric verbindet intern die CPU-Chiplets). Vorteil: Schnellerer RAM-Zugriff (kein Umweg über Northbridge), weniger Wärme, kompakteres Board-Design.",
            },
            { type: "heading", value: "Intel RST (Rapid Storage Technology)" },
            {
              type: "text",
              value:
                "Intel RST ist eine Software/Treiber-Suite für den SATA/NVMe-Controller im PCH. Funktionen: RAID-Management (RAID 0/1/5/10) über den Chipsatz ohne extra RAID-Controller. Smart Response Technology (SRT): Kleine SSD als Cache für große HDD (beschleunigt Zugriffe). Intel Optane Memory: Extrem schneller Cache (3D XPoint) für HDDs. TRIM-Support: SSD-Lebensdauer optimieren. AHCI vs. RAID-Modus im BIOS: AHCI = Standard für einzelne SSDs. RAID/RST = wenn RAID oder Optane/SRT genutzt wird. Achtung: Modus-Wechsel nach Windows-Installation führt oft zu Bootproblemen!",
            },
            { type: "heading", value: "Chipsatz-Bezeichnungen 2024/2026" },
            {
              type: "text",
              value:
                "Intel: Z790/B760/H770 (für 12./13./14. Gen, LGA 1700). Z890/B860 (für Core Ultra 200S, LGA 1851). Buchstabe: Z = Overclocking + volle Features, B = Mainstream, H = Budget. AMD: X670E/B650/A620 (für Ryzen 7000, AM5). X870E/B850 (für Ryzen 9000). X = High-End, B = Mainstream, A = Budget. Wichtig für FiSi: Chipsatz bestimmt, welche Features verfügbar sind (Anzahl USB/SATA/M.2, PCIe-Generation, Overclocking).",
            },
            { type: "heading", value: "PCIe-Generationen" },
            {
              type: "text",
              value:
                "PCIe 3.0: ~1 GB/s pro Lane (x16 = ~16 GB/s). PCIe 4.0: ~2 GB/s pro Lane (x16 = ~32 GB/s). Doppelte Bandbreite von 3.0. PCIe 5.0: ~4 GB/s pro Lane (x16 = ~64 GB/s). Aktuell für NVMe-SSDs (x4 ≈ 16 GB/s theoretisch, ~14 GB/s praktisch). PCIe 6.0: ~8 GB/s pro Lane. Erste Hardware ab 2025/2026. Abwärtskompatibel: PCIe 3.0 Karte funktioniert in PCIe 5.0 Slot (und umgekehrt), aber mit der langsameren Geschwindigkeit.",
            },
            {
              type: "note",
              value:
                "Prüfungsrelevant: Northbridge/Southbridge als historisches Konzept kennen, erklären können warum die Northbridge in die CPU gewandert ist, PCH als modernen Nachfolger der Southbridge benennen. Intel RST und AHCI vs. RAID-Modus im BIOS sind Praxiswissen für den Arbeitsalltag.",
            },
            { type: "heading", value: "Übungsaufgabe 1: PCIe" },
            {
              type: "text",
              value:
                "Eine Grafikkarte mit PCIe 4.0 x16 wird in einen PCIe 3.0 x16 Slot gesteckt. Funktioniert das, und mit welcher Geschwindigkeit?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nJa, es funktioniert - PCIe ist abwärts- und\naufwärtskompatibel. Es läuft aber mit der\nlangsameren Geschwindigkeit des Slots, also\nPCIe 3.0 (ca. 16 GB/s bei x16 statt 32 GB/s bei 4.0).\nDas Gerät handelt automatisch die niedrigste\ngemeinsame Generation aus.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Chipsatz" },
            {
              type: "text",
              value:
                "Wofür ist heute der PCH (Platform Controller Hub) zuständig, nachdem die Northbridge in die CPU gewandert ist?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nDer PCH übernimmt die Aufgaben der früheren\nSouthbridge: SATA-Ports, USB, Onboard-Audio, LAN,\nPCIe-Slots (außer dem x16 für die GPU), M.2.\nSpeichercontroller und GPU-PCIe-Lanes sitzen heute\ndirekt in der CPU. CPU und PCH verbinden sich über\nDMI (Intel) bzw. PCIe-x4-Link (AMD).",
            },
            { type: "heading", value: "Übungsaufgabe 3: Formfaktor" },
            {
              type: "text",
              value:
                "Ein Kunde will ein möglichst kompaktes System mit nur einer Erweiterungskarte. Welcher Mainboard-Formfaktor?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nMini-ITX (170x170mm) - hat genau einen\nErweiterungsslot und ist der kleinste gängige\nDesktop-Formfaktor. Für mehr Slots: Micro-ATX (4)\noder ATX (7).",
            },
            { type: "heading", value: "Beispiel 1: ATX vs. Micro-ATX im Unternehmenseinsatz" },
            {
              type: "text",
              value:
                "Für einen CAD-Arbeitsplatz wählt man ATX (305×244mm): Platz für mehrere PCIe-Slots (Grafikkarte + Netzwerkkarte), 4 RAM-Slots für bis zu 128 GB. Für einen Büro-PC reicht Micro-ATX (244×244mm): Weniger Slots, aber günstiger und kompakter. Mini-ITX (170×170mm) eignet sich für Thin Clients oder HTPCs.",
            },
            { type: "heading", value: "Beispiel 2: PCIe-Generationen in der Praxis" },
            {
              type: "text",
              value:
                "PCIe 3.0 x16: ~16 GB/s – reicht für ältere Grafikkarten. PCIe 4.0 x4: ~8 GB/s – typisch für NVMe-SSDs (z.B. Samsung 980 Pro). PCIe 5.0 x16: ~64 GB/s – aktuelle High-End-Grafikkarten (RTX 5090). Wichtig: PCIe ist abwärtskompatibel – eine PCIe 3.0-Karte funktioniert in einem PCIe 5.0-Slot, nur langsamer.",
            },
            { type: "heading", value: "Beispiel 3: Chipsatz bestimmt die Möglichkeiten" },
            {
              type: "text",
              value:
                "Intel B660: Budget-Chipsatz, kein CPU-Overclocking, weniger USB/PCIe-Lanes. Intel Z790: Enthusiasten-Chipsatz, Overclocking möglich, mehr PCIe 5.0 Lanes, mehr USB-Ports. Bei der Arbeitsplatzplanung entscheidet der Chipsatz, welche und wie viele Geräte angeschlossen werden können – nicht nur die CPU.",
            },
          ],
          quiz: [
            {
              id: "imp_lf2-hw-1_0",
              q: "SATA III max?",
              options: ["600 MB/s", "150 MB/s", "1200 MB/s", "300 MB/s"],
              correct: 0,
              explain: "600 MB/s.",
            },
            {
              id: "imp_lf2-hw-1_1",
              q: "ATX-Maße?",
              options: ["170x170", "330x305", "305x244", "244x244"],
              correct: 2,
              explain: "305x244 mm.",
            },
            {
              id: "imp_lf2-hw-1_2",
              q: "PCIe 4.0 pro Lane?",
              options: ["~1 GB/s", "~500 MB/s", "~2 GB/s", "~4 GB/s"],
              correct: 2,
              explain: "PCIe 4.0 = ca. 2 GB/s pro Lane.",
            },
            {
              id: "imp_lf2-hw-1_3",
              q: "Mini-ITX: Wie viele PCIe-Slots?",
              options: ["1", "7", "0", "4"],
              correct: 0,
              explain: "Mini-ITX: 1 PCIe-Slot, für kompakte Systeme.",
            },
            {
              id: "imp_lf2-hw-1_4",
              q: "UEFI vs. BIOS?",
              options: [
                "BIOS ist neuer",
                "UEFI = grafisch, GPT, >2TB, Secure Boot",
                "Gleich",
                "UEFI nur für Server",
              ],
              correct: 1,
              explain: "UEFI: Moderner, grafisch, Maus, GPT-Partitionen, >2TB Boot, Secure Boot.",
            },
            {
              id: "imp_lf2-hw-1_5",
              q: "M.2 2280: Was bedeutet 2280?",
              options: ["22 Lanes", "2280 MHz", "Geschwindigkeit", "22mm breit, 80mm lang"],
              correct: 3,
              explain: "22mm Breite x 80mm Länge.",
            },
            {
              id: "imp_lf2-hw-1_6",
              q: "Chipsatz Aufgabe?",
              options: [
                "Ausschließlich die USB-Ports bereitstellen und verwalten",
                "Ausschließlich das Grafiksignal berechnen und ausgeben",
                "Datenfluss zwischen CPU, RAM, GPU, Peripherie koordinieren",
                "Ausschließlich die Audiosignale wandeln und verstärken",
              ],
              correct: 2,
              explain: "Chipsatz = Kommunikationszentrale auf dem Mainboard.",
            },
            {
              id: "imp_lf2-hw-1_7",
              q: "PCIe x16 typisch für?",
              options: ["SSD", "RAM", "USB", "Grafikkarte"],
              correct: 3,
              explain: "x16 = 16 Lanes = volle Bandbreite für GPUs.",
            },
            {
              id: "imp_lf2-hw-1_8",
              q: "Micro-ATX Slots?",
              options: ["1", "7", "4", "10"],
              correct: 2,
              explain: "Micro-ATX: 4 Erweiterungsslots.",
            },
            {
              id: "imp_lf2-hw-1_9",
              q: "BIOS vs. UEFI: GPT?",
              options: [
                "Keiner",
                "Beide booten problemlos von GPT",
                "Nur UEFI unterstützt das Booten von GPT",
                "Nur BIOS",
              ],
              correct: 2,
              explain:
                "Das BOOTEN von GPT-Datenträgern erfordert UEFI; am klassischen BIOS sind GPT-Platten höchstens als Datenlaufwerke nutzbar.",
            },
            {
              id: "imp_lf2-hw-1_10",
              q: "Welcher Formfaktor ist am größten?",
              options: ["Mini-ITX", "Micro-ATX", "ATX", "Nano-ITX"],
              correct: 2,
              explain: "ATX = 305×244mm, Micro-ATX = 244×244mm, Mini-ITX = 170×170mm.",
            },
            {
              id: "imp_lf2-hw-1_11",
              q: "Was verbindet die CPU mit RAM und PCIe?",
              options: ["BIOS", "Chipsatz / Memory Controller", "Grafikkarte", "Netzteil"],
              correct: 1,
              explain:
                "Der Chipsatz (bzw. seit neueren CPUs der integrierte Memory Controller) verbindet CPU mit RAM und PCIe-Geräten.",
            },
            {
              id: "imp_lf2-hw-1_12",
              q: "Wofür steht PCIe?",
              options: [
                "Peripheral Component Interconnect Express",
                "Parallel Component Input Express",
                "Primary Circuit Interconnect Express",
                "Personal Computer Interface Extended",
              ],
              correct: 0,
              explain:
                "PCIe = Peripheral Component Interconnect Express – serieller Hochgeschwindigkeitsbus.",
            },
            {
              id: "imp_lf2-hw-1_13",
              q: "Wie viel Bandbreite bietet PCIe 4.0 x4?",
              options: ["~8 GB/s", "~4 GB/s", "~16 GB/s", "~2 GB/s"],
              correct: 0,
              explain: "PCIe 4.0 pro Lane: ~2 GB/s. x4 = 4 Lanes = ~8 GB/s. Typisch für NVMe-SSDs.",
            },
            {
              id: "imp_lf2-hw-1_14",
              q: "Was bedeutet 'abwärtskompatibel' bei PCIe?",
              options: [
                "Ältere Geräte funktionieren nicht",
                "Neuere Slots akzeptieren ältere Karten",
                "Die Geschwindigkeit verdoppelt sich",
                "Man braucht einen Adapter",
              ],
              correct: 1,
              explain:
                "Abwärtskompatibel: PCIe 3.0-Karte funktioniert in PCIe 5.0-Slot (mit PCIe 3.0-Speed).",
            },
            {
              id: "imp_lf2-hw-1_15",
              q: "Welcher Sockel gehört zu Intel 12./13./14. Gen?",
              options: ["LGA 1200", "AM4", "LGA 1700", "AM5"],
              correct: 2,
              explain: "LGA 1700 = Intel Alder Lake (12th), Raptor Lake (13th/14th Gen).",
            },
            {
              id: "imp_lf2-hw-1_16",
              q: "Was ist der Unterschied zwischen UEFI und BIOS?",
              options: [
                "UEFI ist der moderne Nachfolger mit GUI und GPT-Support",
                "Es gibt keinen Unterschied, nur zwei Namen derselben Firmware",
                "BIOS ist die neuere Entwicklung und löst UEFI schrittweise ab",
                "UEFI ist ausschließlich Server-Hardware vorbehalten",
              ],
              correct: 0,
              explain:
                "UEFI: Grafische Oberfläche, GPT-Support, Secure Boot, schnellerer Boot – Nachfolger des klassischen BIOS.",
            },
            {
              id: "imp_lf2-hw-1_17",
              q: "Wofür braucht man einen M.2-Slot?",
              options: [
                "Für USB-Geräte",
                "Für NVMe-SSDs und WLAN-Module",
                "Für Grafikkarten",
                "Für RAM",
              ],
              correct: 1,
              explain: "M.2 = kompakter Steckplatz für NVMe-SSDs (PCIe) oder WLAN-Karten.",
            },
            {
              id: "imp_lf2-hw-1_18",
              q: "Was ist ein Vorteil von Micro-ATX gegenüber ATX?",
              options: [
                "Kompakter und günstiger",
                "Bessere Kühlung",
                "Schnellerer Bus",
                "Mehr Erweiterungsslots",
              ],
              correct: 0,
              explain:
                "Micro-ATX: Kleiner, günstiger, reicht für Standard-Arbeitsplätze – weniger Slots als ATX.",
            },
            {
              id: "imp_lf2-hw-1_19",
              q: "Welche Komponente liefert den Takt für alle Bussysteme?",
              options: ["Netzteil", "RAM", "Quarzoszillator / Taktgeber", "Festplatte"],
              correct: 2,
              explain:
                "Der Quarzoszillator auf dem Mainboard gibt den Basistakt vor, der per Multiplikatoren angepasst wird.",
            },
          ],
        },
        {
          id: "lf2-hw-2",
          title: "Speichermedien",
          content: [
            { type: "heading", value: "HDD vs. SSD" },
            {
              type: "text",
              value:
                "HDD: Magnetische, rotierende Scheiben. 5.400 RPM (Notebook/NAS), 7.200 RPM (Desktop), 10.000-15.000 RPM (Server). Günstig pro GB, aber langsam (100-200 MB/s sequentiell), empfindlich gegen Erschütterungen. SSD: Flash-Speicher, keine beweglichen Teile. SATA-SSD: ~560 MB/s (SATA-Limit). NVMe (PCIe 3.0): ~3.500 MB/s. NVMe (PCIe 4.0): ~7.000 MB/s. NVMe (PCIe 5.0): ~12.000 MB/s.",
            },
            { type: "heading", value: "NAND-Flash-Typen" },
            {
              type: "text",
              value:
                "SLC (1 Bit/Zelle): Langlebigste, schnellste, teuerste. Enterprise-Cache. MLC (2 Bit): Guter Kompromiss, Enterprise. TLC (3 Bit): Standard für Consumer-SSDs. Gutes Preis-Leistungs-Verhältnis. QLC (4 Bit): Günstigste, geringste Haltbarkeit. Für Leselast (Archiv, NAS). TBW (Terabytes Written): Gibt an, wie viel eine SSD beschrieben werden kann, bevor sie ausfällt.",
            },
            { type: "heading", value: "Formfaktoren & Schnittstellen" },
            {
              type: "text",
              value:
                "2,5 Zoll SATA: Standard-SSD, passt in Laptops und Desktop. M.2 2280: Direkt auf Mainboard, NVMe oder SATA. U.2/U.3: Enterprise-SSD, Hot-Swap-fähig. mSATA: Veraltet, für ältere Laptops.",
            },
            { type: "heading", value: "Übungsaufgabe 1: SSD vs. HDD" },
            { type: "text", value: "Nenne je 2 Vor- und Nachteile von SSD gegenüber HDD." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nSSD Vorteile: viel schneller (keine beweglichen\nTeile), robust gegen Stöße, lautlos, geringer\nStromverbrauch.\nSSD Nachteile: teurer pro GB, begrenzte\nSchreibzyklen (heute meist unkritisch).\nHDD: billiger pro GB, hohe Kapazitäten - aber\nlangsam und mechanisch empfindlich.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Schnittstellen" },
            { type: "text", value: "Worin unterscheiden sich SATA-SSD und NVMe-SSD?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nSATA-SSD: nutzt die SATA-Schnittstelle, max. ca.\n550 MB/s (Limit des SATA-III-Busses).\nNVMe-SSD: nutzt PCIe-Lanes (M.2 oder PCIe-Karte),\nvielfach schneller (mehrere GB/s), da direkt am\nschnellen PCIe-Bus statt am alten SATA-Protokoll.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Kapazität" },
            {
              type: "text",
              value:
                "Eine Festplatte wird mit 1 TB beworben. Warum zeigt Windows nur ca. 931 GB an?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nHersteller rechnen dezimal: 1 TB = 1.000.000.000.000\nByte. Windows rechnet binär: 1 TiB = 1024^4 Byte.\n1.000.000.000.000 / 1024^4 = ca. 931 GiB.\nKein Defekt, nur unterschiedliche Zähleinheiten\n(SI dezimal vs. binär).",
            },
            { type: "heading", value: "Beispiel 1: SSD vs. HDD im Unternehmen" },
            {
              type: "text",
              value:
                "Für den Fileserver mit 20 TB Archivdaten: HDDs (z.B. 4×8TB im RAID 5) – günstiger pro GB (~3 Cent/GB), große Kapazitäten. Für den Datenbankserver: NVMe-SSD – 3.500 MB/s lesen vs. 150 MB/s bei HDD, keine mechanischen Teile, IOPS um Faktor 100 höher. Für den Arbeitsplatz-PC: SATA-SSD (500 MB/s) als Boot-Laufwerk reicht für Office-Anwendungen.",
            },
            { type: "heading", value: "Beispiel 2: Speicherhierarchie erklärt" },
            {
              type: "text",
              value:
                "Register (CPU-intern): ~0,3 ns Zugriff, wenige KB. L1-Cache: ~1 ns, 32-64 KB pro Kern. L2-Cache: ~3 ns, 256 KB-1 MB. L3-Cache: ~10 ns, 8-64 MB. RAM (DDR5): ~80 ns, 16-128 GB. NVMe-SSD: ~0,02 ms, 256 GB-4 TB. HDD: ~5-10 ms, 1-20 TB. Je näher an der CPU, desto schneller, aber kleiner und teurer.",
            },
            { type: "heading", value: "Beispiel 3: QLC vs. TLC vs. MLC bei SSDs" },
            {
              type: "text",
              value:
                "SLC (1 Bit/Zelle): Schnellste, langlebigste, teuerste – für Enterprise-Server. MLC (2 Bit): Guter Kompromiss – High-End-Consumer. TLC (3 Bit): Standard für Consumer-SSDs, gutes Preis-Leistungs-Verhältnis. QLC (4 Bit): Günstigste, aber niedrigste Haltbarkeit (TBW) – für Archiv/Lese-Workloads. Praxisregel: Je mehr Bits pro Zelle, desto günstiger, aber kurzlebiger.",
            },
          ],
          quiz: [
            {
              id: "imp_lf2-hw-2_0",
              q: "TLC = wie viele Bit/Zelle?",
              options: ["1", "2", "4", "3"],
              correct: 3,
              explain: "Triple-Level Cell = 3 Bit.",
            },
            {
              id: "imp_lf2-hw-2_1",
              q: "NVMe PCIe 4.0 max?",
              options: ["12.000 MB/s", "3.500 MB/s", "7.000 MB/s", "560 MB/s"],
              correct: 2,
              explain: "~7.000 MB/s.",
            },
            {
              id: "imp_lf2-hw-2_2",
              q: "TBW steht für?",
              options: [
                "Total Bus Width",
                "Terabytes Written",
                "Thermal Buffer Write",
                "Transfer Bandwidth",
              ],
              correct: 1,
              explain: "TBW = Terabytes Written, Haltbarkeitsangabe für SSDs.",
            },
            {
              id: "imp_lf2-hw-2_3",
              q: "SLC vs. QLC: Was hält länger?",
              options: ["QLC", "MLC", "SLC (1 Bit/Zelle)", "Gleich"],
              correct: 2,
              explain: "SLC: Weniger Bit pro Zelle = weniger Verschleiß = längere Haltbarkeit.",
            },
            {
              id: "imp_lf2-hw-2_4",
              q: "HDD 5400 vs. 7200 RPM?",
              options: [
                "5400 = schneller",
                "RPM ist egal",
                "Gleich schnell",
                "7200 = schneller aber lauter/wärmer",
              ],
              correct: 3,
              explain: "Höhere Drehzahl = schnellere Zugriffszeiten, aber mehr Wärme/Lärm.",
            },
            {
              id: "imp_lf2-hw-2_5",
              q: "IOPS steht für?",
              options: [
                "Internet Operations",
                "Input/Output Per Second",
                "Internal OS Process",
                "Interface Output",
              ],
              correct: 1,
              explain: "I/O Operations Per Second: Zufällige Lese-/Schreiboperationen pro Sekunde.",
            },
            {
              id: "imp_lf2-hw-2_6",
              q: "NVMe vs. SATA-SSD?",
              options: [
                "NVMe = Festplatte",
                "Gleich schnell",
                "NVMe bis 7000 MB/s, SATA max 560 MB/s",
                "SATA schneller",
              ],
              correct: 2,
              explain: "NVMe nutzt PCIe, SATA ist auf 600 MB/s begrenzt.",
            },
            {
              id: "imp_lf2-hw-2_7",
              q: "U.2 SSD?",
              options: ["Cloud-Speicher", "Laptop-Format", "Enterprise Hot-Swap SSD", "USB-Stick"],
              correct: 2,
              explain: "U.2: Server-SSD, Hot-Swap-fähig.",
            },
            {
              id: "imp_lf2-hw-2_8",
              q: "QLC = ?",
              options: ["1 Bit/Zelle", "2 Bit", "3 Bit", "4 Bit/Zelle"],
              correct: 3,
              explain: "Quad-Level Cell = 4 Bit pro Zelle.",
            },
            {
              id: "imp_lf2-hw-2_9",
              q: "NVMe nutzt?",
              options: ["SATA", "USB", "PCIe (schneller als SATA)", "IDE"],
              correct: 2,
              explain: "NVMe nutzt PCIe-Lanes statt SATA.",
            },
            {
              id: "imp_lf2-hw-2_10",
              q: "Wie viel schneller ist eine NVMe-SSD als eine HDD beim Lesen?",
              options: [
                "Doppelt so schnell",
                "Gleich schnell",
                "Ca. 20-30x schneller",
                "5x schneller",
              ],
              correct: 2,
              explain:
                "NVMe-SSD: ~3.500 MB/s vs. HDD: ~150 MB/s = ca. 23x schneller beim sequentiellen Lesen.",
            },
            {
              id: "imp_lf2-hw-2_11",
              q: "Was bedeutet IOPS?",
              options: [
                "Internal Operation Power Supply",
                "Input/Output Per Socket",
                "Integrated Optical Processing Speed",
                "Input/Output Operations Per Second",
              ],
              correct: 3,
              explain:
                "IOPS = Lese-/Schreibvorgänge pro Sekunde – entscheidend für Datenbank-Performance.",
            },
            {
              id: "imp_lf2-hw-2_12",
              q: "Welche SSD-Zellart hat die höchste Lebensdauer?",
              options: ["QLC", "TLC", "SLC", "MLC"],
              correct: 2,
              explain:
                "SLC = 1 Bit pro Zelle = geringste Abnutzung, verträgt die meisten Schreibzyklen (P/E) = längste Lebensdauer.",
            },
            {
              id: "imp_lf2-hw-2_13",
              q: "Was ist der Vorteil von NVMe gegenüber SATA?",
              options: ["Größere Kapazität", "Nutzt PCIe statt SATA", "Lauter", "Günstiger"],
              correct: 1,
              explain:
                "Deutlich höhere Bandbreite. NVMe nutzt PCIe direkt: ~7.000 MB/s (PCIe 4.0) vs. 550 MB/s (SATA III).",
            },
            {
              id: "imp_lf2-hw-2_14",
              q: "Was bedeutet TBW bei SSDs?",
              options: [
                "Terabyte Bandwidth",
                "Transfer Block Weight",
                "Terabytes Written",
                "Total Bandwidth Width",
              ],
              correct: 2,
              explain:
                "Gesamtschreibmenge bis Lebensdauerende. TBW = Total Bytes Written / Terabytes Written – gibt an, wie viel insgesamt geschrieben werden kann.",
            },
            {
              id: "imp_lf2-hw-2_15",
              q: "Welches Medium eignet sich am besten für ein Langzeitarchiv?",
              options: ["USB-Stick", "LTO-Magnetband", "RAM-Disk", "NVMe-SSD"],
              correct: 1,
              explain:
                "LTO-Bänder: Günstigster Preis/TB, 30+ Jahre Haltbarkeit, Standard für Langzeitarchivierung.",
            },
            {
              id: "imp_lf2-hw-2_16",
              q: "Welche Schnittstelle nutzen 2,5-Zoll-SSDs?",
              options: ["SATA III (6 Gbit/s)", "PCIe", "USB", "Thunderbolt"],
              correct: 0,
              explain: "2,5-Zoll-SSDs nutzen SATA III mit max. 6 Gbit/s (= 550 MB/s real).",
            },
            {
              id: "imp_lf2-hw-2_17",
              q: "Was ist SMART bei Festplatten?",
              options: [
                "Ein RAID-Level für gespiegelte Festplatten",
                "Ein Dateisystem für besonders große Platten",
                "Self-Monitoring, Analysis and Reporting Technology",
                "Eine Vollverschlüsselung des Datenträgers",
              ],
              correct: 2,
              explain:
                "S.M.A.R.T. überwacht Gesundheitszustand der Festplatte (Temperatur, Fehlerraten, Betriebsstunden).",
            },
            {
              id: "imp_lf2-hw-2_18",
              q: "Wie groß ist eine typische NVMe-SSD physisch?",
              options: ["3,5 Zoll", "M.2 2280 (22mm breit, 80mm lang)", "2,5 Zoll", "5,25 Zoll"],
              correct: 1,
              explain: "M.2 2280 ist das Standardformat für NVMe-SSDs: 22mm breit, 80mm lang.",
            },
            {
              id: "imp_lf2-hw-2_19",
              q: "Warum sind HDDs für Server-Archivierung immer noch sinnvoll?",
              options: [
                "Sie verbrauchen im Betrieb weniger Strom als SSDs",
                "Sie arbeiten mechanisch leiser als moderne SSDs",
                "Sie bieten höhere Lese- und Schreibraten als SSDs",
                "Deutlich günstiger pro TB bei großen Kapazitäten",
              ],
              correct: 3,
              explain:
                "HDD: ~3 Cent/GB vs. SSD: ~8-10 Cent/GB. Bei 100+ TB Archiv ist der Preisunterschied enorm.",
            },
          ],
        },
        {
          id: "lf2-hw-3",
          title: "Monitore & Displays",
          content: [
            { type: "heading", value: "Panel-Technologien" },
            {
              type: "text",
              value:
                "IPS (In-Plane Switching): Beste Farbgenauigkeit und Blickwinkelstabilität (178 Grad). Standard für Büro, Grafikdesign, Bildbearbeitung. Etwas langsamer. VA (Vertical Alignment): Bester Kontrast unter LCD-Panels (3000:1+). Gut für dunkle Räume, Multimedia. Kompromiss zwischen IPS und TN. TN (Twisted Nematic): Schnellste Reaktionszeit (1ms). Gaming, aber schlechte Farben und Blickwinkel. Veraltet. OLED: Selbstleuchtende Pixel, perfektes Schwarz, unendlicher Kontrast. Risiko: Burn-In (Einbrennen statischer Elemente).",
            },
            { type: "heading", value: "Kennwerte" },
            {
              type: "text",
              value:
                "Auflösung: FHD 1920x1080, WQHD 2560x1440, 4K/UHD 3840x2160, 5K 5120x2880. Bildwiederholrate: 60Hz (Büro), 144Hz+ (Gaming). Reaktionszeit: GtG (Grey-to-Grey) in ms. Farbtiefe: 8-Bit (16,7 Mio. Farben), 10-Bit (1,07 Mrd.). Farbräume: sRGB (Standard), Adobe RGB (Druck), DCI-P3 (Video). Helligkeit: 250-350 cd/m2 (Büro), 1000+ (HDR).",
            },
            { type: "heading", value: "Übungsaufgabe 1: Auflösung" },
            { type: "text", value: "Was bedeutet die Auflösung 1920x1080 und wie nennt man sie?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1920 Pixel horizontal x 1080 Pixel vertikal.\nName: Full HD (FHD) bzw. 1080p.\nMehr Pixel = schärferes Bild bei gleicher Größe.\nWeitere: 2560x1440 = QHD/1440p, 3840x2160 = 4K/UHD.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Panel-Typen" },
            { type: "text", value: "Worin unterscheiden sich IPS- und TN-Panels?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nIPS: sehr gute Blickwinkel und Farbtreue, etwas\nlangsamer/teurer - gut für Bildbearbeitung, Büro.\nTN: sehr schnelle Reaktionszeit, günstig, aber\nschlechtere Blickwinkel und Farben - früher beliebt\nbei Gaming.\n(VA liegt dazwischen, mit hohem Kontrast.)",
            },
            { type: "heading", value: "Übungsaufgabe 3: Bildwiederholrate" },
            { type: "text", value: "Was bedeutet 144 Hz und für wen ist das relevant?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n144 Hz = der Monitor baut das Bild 144 mal pro\nSekunde neu auf (gegenüber 60 Hz Standard).\nFlüssigere Darstellung bei schnellen Bewegungen.\nRelevant v.a. für Gaming; im Büro reichen 60 Hz.",
            },
            { type: "heading", value: "Beispiel 1: Monitorauswahl CAD-Arbeitsplatz" },
            {
              type: "text",
              value:
                "Für CAD/Konstruktion: 27 Zoll, IPS-Panel (weite Blickwinkel, gute Farbwiedergabe), 4K (3840x2160), 100% sRGB, min. 350 cd/m² Helligkeit. Nicht VA (schlechte Reaktionszeit) oder TN (schlechte Farben/Blickwinkel). Budget-Alternative: 2x 24 Zoll Full-HD für Dual-Monitor-Setup.",
            },
            { type: "heading", value: "Beispiel 2: Bildwiederholrate vs. Reaktionszeit" },
            {
              type: "text",
              value:
                "Office-Arbeitsplatz: 60 Hz, 5ms Reaktionszeit genügt völlig. Gaming/Video-Schnitt: 144-240 Hz, 1ms GtG (Grey-to-Grey). Praxisbeispiel: Bei 60 Hz wird jedes Bild 16,7ms angezeigt. Bei 144 Hz nur 6,9ms – deutlich flüssiger. Die Reaktionszeit gibt an, wie schnell ein Pixel die Farbe wechselt – zu langsam = Schlieren/Ghosting.",
            },
            { type: "heading", value: "Beispiel 3: OLED vs. IPS vs. VA" },
            {
              type: "text",
              value:
                "IPS: Beste Farbwiedergabe + Blickwinkelstabilität, Standard für Büro/Grafik. VA: Bester Kontrast (3000:1 vs. 1000:1 bei IPS), gut für dunkle Räume/Multimedia, aber langsamer. OLED: Perfektes Schwarz (Pixel schalten einzeln ab), beste Farben, aber Burn-In-Gefahr bei statischen Inhalten (Taskleiste!) und teuer.",
            },
          ],
          quiz: [
            {
              id: "imp_lf2-hw-3_0",
              q: "WQHD Auflösung?",
              options: ["1920x1080", "5120x2880", "2560x1440", "3840x2160"],
              correct: 2,
              explain: "2560x1440.",
            },
            {
              id: "imp_lf2-hw-3_1",
              q: "Bestes LCD-Panel für Farbgenauigkeit?",
              options: ["TN", "VA", "IPS", "Kein Unterschied zwischen den Paneltypen"],
              correct: 2,
              explain:
                "Unter den LCD-Paneltypen hat IPS die beste Farbgenauigkeit und Blickwinkelstabilität (OLED ist kein LCD und spielt farblich in eigener Liga).",
            },
            {
              id: "imp_lf2-hw-3_2",
              q: "OLED-Risiko?",
              options: ["Burn-In", "Kein HDMI", "Zu langsam", "Zu dunkel"],
              correct: 0,
              explain: "Burn-In: Statische Bildelemente können sich einbrennen.",
            },
            {
              id: "imp_lf2-hw-3_3",
              q: "HDR = ?",
              options: [
                "Hardware Display Ready",
                "Horizontal Display Rate",
                "High Definition Resolution",
                "High Dynamic Range",
              ],
              correct: 3,
              explain:
                "Hoher Kontrastumfang. HDR: Größerer Helligkeits- und Farbumfang für realistischere Darstellung.",
            },
            {
              id: "imp_lf2-hw-3_4",
              q: "Reaktionszeit GtG?",
              options: [
                "Zeit bis Monitor angeht",
                "Grau-zu-Grau Pixelwechselzeit in ms",
                "Anschlussgeschwindigkeit",
                "Bildwiederholrate",
              ],
              correct: 1,
              explain: "Grey-to-Grey: Wie schnell ein Pixel die Farbe wechselt. Niedrig = besser.",
            },
            {
              id: "imp_lf2-hw-3_5",
              q: "sRGB vs. Adobe RGB?",
              options: [
                "Beide Farbräume decken denselben Farbumfang ab",
                "sRGB = Web-Standard, Adobe RGB = Druck (größerer Farbraum)",
                "Adobe RGB = kleinerer Farbraum als sRGB, nur fürs Web",
                "sRGB = Druckstandard mit erweitertem CMYK-Farbraum",
              ],
              correct: 1,
              explain: "sRGB: Standard für Web/Büro. Adobe RGB: Größerer Farbraum für Druck.",
            },
            {
              id: "imp_lf2-hw-3_6",
              q: "10-Bit Farbtiefe?",
              options: ["1,07 Milliarden Farben", "16,7 Mio.", "256 Farben", "Unbegrenzt"],
              correct: 0,
              explain: "10 Bit pro Kanal = 1.073.741.824 Farben.",
            },
            {
              id: "imp_lf2-hw-3_7",
              q: "VA-Panel: Bester?",
              options: ["Geschwindigkeit", "Farbe", "Kontrast unter LCD-Panels", "Blickwinkel"],
              correct: 2,
              explain: "VA: Bestes Kontrastverhältnis aller LCD-Typen.",
            },
            {
              id: "imp_lf2-hw-3_8",
              q: "4K = ?",
              options: ["1920x1080", "2560x1440", "5120x2880", "3840x2160"],
              correct: 3,
              explain: "4K/UHD: 3840x2160 Pixel.",
            },
            {
              id: "imp_lf2-hw-3_9",
              q: "HDMI 2.1 Feature?",
              options: ["Nur 1080p", "Nur Audio", "Max 30Hz", "4K@120Hz, VRR, eARC"],
              correct: 3,
              explain: "4K@120Hz, Variable Refresh Rate, eARC.",
            },
            {
              id: "imp_lf2-hw-3_10",
              q: "Welches LCD-Panel hat die besten Blickwinkel?",
              options: ["Alle Paneltypen gleich", "IPS", "VA", "TN"],
              correct: 1,
              explain:
                "IPS: Stabile Farben auch bei seitlicher Betrachtung (178°). TN kippt am stärksten.",
            },
            {
              id: "imp_lf2-hw-3_11",
              q: "Was bedeutet 4K-Auflösung?",
              options: ["2560x1440", "1920x1080", "7680x4320", "3840x2160"],
              correct: 3,
              explain: "4K = 3840x2160 Pixel = 4x Full-HD.",
            },
            {
              id: "imp_lf2-hw-3_12",
              q: "Welche Einheit misst die Helligkeit eines Monitors?",
              options: ["Candela pro Quadratmeter (cd/m²)", "Hertz", "Watt", "Lumen"],
              correct: 0,
              explain: "cd/m² (Nit): Für Büro mind. 250, für helle Räume 350+.",
            },
            {
              id: "imp_lf2-hw-3_13",
              q: "Was ist Burn-In bei OLED?",
              options: [
                "Pixelfehler ab Werk",
                "Zu hohe Helligkeit",
                "Überhitzung",
                "Einbrennen statischer Bildelemente",
              ],
              correct: 3,
              explain:
                "Bei OLED können statische Elemente (Taskleiste, Logos) sich dauerhaft einbrennen.",
            },
            {
              id: "imp_lf2-hw-3_14",
              q: "Welche Auflösung ist Full-HD?",
              options: ["1920x1080", "1280x720", "2560x1440", "3840x2160"],
              correct: 0,
              explain: "Full-HD = 1920x1080 Pixel (1080p).",
            },
            {
              id: "imp_lf2-hw-3_15",
              q: "Was misst die Reaktionszeit GtG?",
              options: [
                "Die Internetgeschwindigkeit des Streaming-PCs",
                "Den Input-Lag zwischen Maus und Bildausgabe",
                "Wie schnell der Monitor nach dem Einschalten angeht",
                "Wie schnell ein Pixel von Grau zu Grau wechselt",
              ],
              correct: 3,
              explain:
                "GtG = Grey-to-Grey: Farbwechselzeit eines Pixels. Niedrig = weniger Schlieren.",
            },
            {
              id: "imp_lf2-hw-3_16",
              q: "Wie viel Zoll hat ein typischer Büro-Monitor?",
              options: ["15 Zoll", "24 Zoll", "19 Zoll", "34 Zoll"],
              correct: 1,
              explain: "24 Zoll Full-HD ist der Standard für Büroarbeitsplätze.",
            },
            {
              id: "imp_lf2-hw-3_17",
              q: "Was ist ein Vorteil von VA gegenüber IPS?",
              options: [
                "Höherer Kontrast (tieferes Schwarz)",
                "Schnellere Reaktionszeit",
                "Bessere Blickwinkel",
                "Günstigerer Preis",
              ],
              correct: 0,
              explain:
                "VA: Kontrast ~3000:1 vs. IPS ~1000:1. Besseres Schwarz, ideal für dunkle Umgebungen.",
            },
            {
              id: "imp_lf2-hw-3_18",
              q: "Was bedeutet HDR bei Monitoren?",
              options: [
                "Hardware Display Resolution",
                "Höhe der Darstellung",
                "High Dynamic Range",
                "High Definition Refresh",
              ],
              correct: 2,
              explain:
                "Erweiterter Helligkeits-/Kontrastumfang. HDR = erweiterter Dynamikumfang: Hellere Highlights, tiefere Schatten, mehr Farben.",
            },
            {
              id: "imp_lf2-hw-3_19",
              q: "Welcher Monitor eignet sich für Grafikdesign?",
              options: [
                "VA 32 Zoll curved",
                "TN 24 Zoll 1080p",
                "IPS 27 Zoll 4K mit 100% sRGB",
                "Jeder Monitor",
              ],
              correct: 2,
              explain:
                "Grafikdesign braucht: IPS (Farbtreue), hohe Auflösung, gute Farbraumabdeckung (sRGB/Adobe RGB).",
            },
          ],
        },
        {
          id: "lf2-hw-3b",
          title: "Video-Anschlüsse im Vergleich",
          content: [
            { type: "heading", value: "VGA (Video Graphics Array)" },
            {
              type: "text",
              value:
                "Analog, 15-Pin D-Sub Stecker (blau). Max. 2048x1536 bei 85Hz, aber Qualität nimmt mit Kabellänge ab (Signalrauschen). Kein Audio. Veraltet, aber noch in älteren Beamern und Monitoren. Nicht für moderne Arbeitsplätze empfohlen.",
            },
            { type: "heading", value: "DVI (Digital Visual Interface)" },
            {
              type: "text",
              value:
                "DVI-D (nur digital), DVI-I (digital + analog), DVI-A (nur analog). Single-Link: Max. 1920x1200@60Hz. Dual-Link: Max. 2560x1600@60Hz. Kein Audio. Weißer Stecker mit Pins. Auslaufend, aber noch in älteren Business-Monitoren.",
            },
            { type: "heading", value: "HDMI (High-Definition Multimedia Interface)" },
            {
              type: "text",
              value:
                "Digital, Audio + Video in einem Kabel. HDMI 1.4: 4K@30Hz, ARC (Audio Return Channel). HDMI 2.0: 4K@60Hz, HDR. HDMI 2.1: 4K@120Hz, 8K@60Hz, eARC, VRR (Variable Refresh Rate). Steckertypen: Standard (Typ A), Mini (Typ C, Tablets), Micro (Typ D, Kameras). Weit verbreitet: TV, Monitore, Beamer, Spielkonsolen.",
            },
            { type: "heading", value: "DisplayPort (DP)" },
            {
              type: "text",
              value:
                "Digital, optimiert für PC-Monitore. DP 1.2: 4K@60Hz. DP 1.4: 4K@120Hz, 8K@60Hz, HDR. DP 2.0: 8K@60Hz+, 16K. Vorteile gegenüber HDMI: Daisy-Chaining (mehrere Monitore in Reihe), höhere Bandbreite, Verriegelungsmechanismus. Mini-DisplayPort (mDP): Kompaktere Variante.",
            },
            { type: "heading", value: "Vergleichstabelle" },
            {
              type: "list",
              value: [
                "VGA: Analog, kein Audio, veraltet, max. FHD sinnvoll, für Legacy-Geräte",
                "DVI: Digital, kein Audio, auslaufend, max. WQXGA, für ältere Business-Monitore",
                "HDMI: Digital, Audio+Video, universell, 4K-8K, für Multimedia und Büro",
                "DisplayPort: Digital, Audio+Video, PC-optimiert, 4K-8K+, für professionelle Arbeitsplätze",
              ],
            },
            { type: "heading", value: "Adapter & Praxistipps" },
            {
              type: "text",
              value:
                "DP zu HDMI: Funktioniert meist problemlos (aktiv oder passiv). HDMI zu DP: Braucht aktiven Adapter (Richtung beachten!). VGA zu HDMI: Braucht aktiven Konverter (analog zu digital). DVI zu HDMI: Passive Adapter möglich (gleiche Signale). USB-C/Thunderbolt: Kann DP und HDMI per Adapter ausgeben. Für neue Arbeitsplätze: DisplayPort oder USB-C bevorzugen.",
            },
            {
              type: "note",
              value:
                "Prüfungsrelevant: Unterschiede analog/digital, Audio-Fähigkeit, max. Auflösung und typische Einsatzszenarien kennen.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Anschlusswahl" },
            {
              type: "text",
              value:
                "Welchen Anschluss nutzt du für 4K bei 60 Hz, und welcher alte Anschluss kann das nicht?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n4K@60Hz: HDMI 2.0 oder DisplayPort 1.2 (und neuer).\nNICHT geeignet: VGA (analog, kein 4K), DVI (je nach\nVariante begrenzt), HDMI 1.4 schafft 4K nur mit 30 Hz.\nDisplayPort ist im PC-Bereich oft die beste Wahl.",
            },
            { type: "heading", value: "Übungsaufgabe 2: VGA vs. digital" },
            { type: "text", value: "Warum ist VGA für moderne Displays ungeeignet?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nVGA überträgt ANALOG. Bei modernen digitalen\nDisplays muss das Signal gewandelt werden, was zu\nQualitätsverlust/Unschärfe führen kann, und es\nunterstützt keine hohen Auflösungen/Bildraten.\nDigitale Anschlüsse (HDMI, DisplayPort, DVI-D)\nübertragen verlustfrei.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Mehrere Monitore" },
            {
              type: "text",
              value:
                "Ein Notebook hat nur einen USB-C-Anschluss, der Kunde will zwei Monitore. Wie löst du das?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nÜber eine USB-C-Dockingstation bzw. einen Hub mit\nDisplayPort/HDMI-Ausgängen. USB-C kann per\nDisplayPort Alternate Mode Bildsignale übertragen.\nWichtig: prüfen, ob der USB-C-Port DP-Alt-Mode und\ngenug Bandbreite für zwei Displays unterstützt.",
            },
            { type: "heading", value: "Beispiel 1: Richtiger Anschluss für 4K@60Hz" },
            {
              type: "text",
              value:
                "HDMI 1.4: Nur 4K@30Hz – zu langsam für flüssiges Arbeiten. HDMI 2.0: 4K@60Hz – reicht für Büro/Office. DisplayPort 1.4: 4K@120Hz oder 8K@60Hz – für High-End. Typischer Fehler in der Praxis: Kunde kauft 4K-Monitor, nutzt aber altes HDMI-Kabel (1.4) und wundert sich über 30Hz-Ruckler. Lösung: HDMI 2.0-Kabel oder besser DisplayPort.",
            },
            { type: "heading", value: "Beispiel 2: Daisy-Chaining mit DisplayPort" },
            {
              type: "text",
              value:
                "DisplayPort unterstützt MST (Multi-Stream Transport): Mehrere Monitore hintereinander an einem DP-Ausgang. Beispiel: Laptop → Monitor 1 (DP-In/Out) → Monitor 2 (DP-In). So braucht man nur einen Videoausgang für 2 Monitore. HDMI kann das nicht. Voraussetzung: Monitore müssen MST/DP-Out unterstützen.",
            },
            { type: "heading", value: "Beispiel 3: USB-C als Videoanschluss" },
            {
              type: "text",
              value:
                "Moderne Laptops haben oft nur USB-C. Über USB-C mit DisplayPort Alt Mode kann Video übertragen werden – gleichzeitig mit Strom (PD) und Daten. Beispiel: Ein USB-C-Kabel zum Monitor liefert: 4K-Bild + 65W Stromversorgung + USB-Hub. Achtung: Nicht jeder USB-C-Port kann Video! Nur mit DP Alt Mode oder Thunderbolt.",
            },
          ],
          quiz: [
            {
              id: "imp_lf2-hw-3b_0",
              q: "Welcher Anschluss ist analog?",
              options: ["HDMI", "USB-C", "DisplayPort", "VGA"],
              correct: 3,
              explain: "VGA ist der einzige analoge Standard unter den gängigen Video-Anschlüssen.",
            },
            {
              id: "imp_lf2-hw-3b_1",
              q: "HDMI 2.1 unterstützt?",
              options: ["4K@30Hz max.", "1080p@60Hz max.", "4K@120Hz und 8K@60Hz", "Nur Audio"],
              correct: 2,
              explain: "HDMI 2.1: 4K@120Hz, 8K@60Hz, eARC, VRR.",
            },
            {
              id: "imp_lf2-hw-3b_2",
              q: "Vorteil von DisplayPort gegenüber HDMI?",
              options: ["Besser für TV", "Daisy-Chaining möglich", "Billiger", "Länger haltbar"],
              correct: 1,
              explain: "DP unterstützt Daisy-Chaining: Mehrere Monitore in Reihe an einem Ausgang.",
            },
            {
              id: "imp_lf2-hw-3b_3",
              q: "VGA zu HDMI braucht?",
              options: [
                "Gar keinen Adapter",
                "Passiven Adapter",
                "Aktiven Konverter",
                "Nur ein anderes Kabel",
              ],
              correct: 2,
              explain: "Analog zu Digital erfordert einen aktiven Konverter mit Signalumwandlung.",
            },
            {
              id: "imp_lf2-hw-3b_4",
              q: "HDMI kann Audio?",
              options: ["Nein", "Nur mit Adapter", "Ja (Audio + Video)", "Nur HDMI 2.1"],
              correct: 2,
              explain: "HDMI überträgt Audio und Video in einem Kabel.",
            },
            {
              id: "imp_lf2-hw-3b_5",
              q: "DP Daisy-Chaining?",
              options: [
                "Nur mit Hub",
                "Nicht möglich",
                "Nur HDMI",
                "Mehrere Monitore in Reihe an einem Ausgang",
              ],
              correct: 3,
              explain: "DisplayPort unterstützt Daisy-Chain: Monitor1→Monitor2→Monitor3.",
            },
            {
              id: "imp_lf2-hw-3b_6",
              q: "DVI Audio?",
              options: ["Nur DVI-D", "Mit Adapter", "Nein", "Ja"],
              correct: 2,
              explain: "DVI = nur Video.",
            },
            {
              id: "imp_lf2-hw-3b_7",
              q: "USB-C Alt Mode?",
              options: ["BT", "Video über USB-C", "Strom", "Daten"],
              correct: 1,
              explain: "DP-Signal über USB-C.",
            },
            {
              id: "imp_lf2-hw-3b_8",
              q: "Neuer Arbeitsplatz: Anschluss?",
              options: ["DisplayPort/USB-C", "VGA", "HDMI nur", "DVI"],
              correct: 0,
              explain: "Zukunftssicher.",
            },
            {
              id: "imp_lf2-hw-3b_9",
              q: "VGA analog?",
              options: ["Beides", "Digital", "Ja, einziger analoger", "Nein"],
              correct: 2,
              explain: "Analog.",
            },
            {
              id: "imp_lf2-hw-3b_10",
              q: "Welcher Anschluss unterstützt Daisy-Chaining?",
              options: ["DVI", "VGA", "HDMI", "DisplayPort (MST)"],
              correct: 3,
              explain: "Nur DisplayPort mit MST (Multi-Stream Transport) erlaubt Daisy-Chaining.",
            },
            {
              id: "imp_lf2-hw-3b_11",
              q: "Ab welcher HDMI-Version ist 4K@60Hz möglich?",
              options: ["HDMI 1.0", "HDMI 2.1", "HDMI 1.4", "HDMI 2.0"],
              correct: 3,
              explain: "HDMI 2.0 = 4K@60Hz. HDMI 1.4 schafft nur 4K@30Hz.",
            },
            {
              id: "imp_lf2-hw-3b_12",
              q: "Was ist DisplayPort Alt Mode?",
              options: [
                "Ein spezieller Monitor",
                "Ein Audio-Standard",
                "Video-Übertragung über USB-C",
                "Eine HDMI-Alternative",
              ],
              correct: 2,
              explain: "DP Alt Mode: DisplayPort-Signal wird über USB-C-Kabel übertragen.",
            },
            {
              id: "imp_lf2-hw-3b_13",
              q: "Welchen Anschluss sollte man für 8K-Video nutzen?",
              options: ["DisplayPort 1.4 oder HDMI 2.1", "DVI-D", "VGA", "HDMI 2.0"],
              correct: 0,
              explain: "8K@60Hz: HDMI 2.1 (48 Gbit/s) oder DP 1.4 mit DSC.",
            },
            {
              id: "imp_lf2-hw-3b_14",
              q: "Was ist der Nachteil von VGA?",
              options: [
                "Zu viele Pins, der Stecker passt an moderne Karten nicht",
                "Braucht eine eigene Stromversorgung per Zusatzkabel",
                "Analog – Bildqualität leidet bei hohen Auflösungen",
                "Zu teuer in der Herstellung wegen vergoldeter Kontakte",
              ],
              correct: 2,
              explain:
                "VGA = analog, verlustbehaftet. Bei Full-HD und höher sichtbar schlechtere Bildqualität.",
            },
            {
              id: "imp_lf2-hw-3b_15",
              q: "Was kann Thunderbolt 4 über USB-C?",
              options: [
                "Video + Daten + Laden + Daisy Chain",
                "Nur Video",
                "Nur Daten",
                "Nur Laden",
              ],
              correct: 0,
              explain:
                "Thunderbolt 4: 40 Gbit/s, 2x 4K-Displays, PD-Laden, Daten – alles über ein Kabel.",
            },
            {
              id: "imp_lf2-hw-3b_16",
              q: "Was bedeutet HDCP?",
              options: [
                "High-bandwidth Digital Content Protection (Kopierschutz)",
                "High Dynamic Compression Protocol (Bildkompression)",
                "Hardware Display Control Panel (Monitorsteuerung)",
                "High Definition Color Profile (Farbkalibrierung)",
              ],
              correct: 0,
              explain: "HDCP = Kopierschutz für digitale Videoinhalte (Netflix, Blu-ray etc.).",
            },
            {
              id: "imp_lf2-hw-3b_17",
              q: "Welcher Anschluss ist rein digital?",
              options: ["DVI-A", "Composite", "DisplayPort", "VGA"],
              correct: 2,
              explain:
                "DisplayPort ist rein digital. VGA = analog. DVI-A = analog. DVI-I = beides.",
            },
            {
              id: "imp_lf2-hw-3b_18",
              q: "Wie viele 4K-Monitore kann Thunderbolt 3/4 ansteuern?",
              options: ["3", "4", "1", "2"],
              correct: 3,
              explain: "Thunderbolt 3/4 = 2x 4K@60Hz oder 1x 5K/8K.",
            },
            {
              id: "imp_lf2-hw-3b_19",
              q: "Was passiert bei einem HDMI-1.4-Kabel an einem 4K@60Hz-Monitor?",
              options: [
                "Monitor zeigt nur 4K@30Hz",
                "Nur Ton, kein Bild",
                "Monitor geht nicht an",
                "Funktioniert perfekt",
              ],
              correct: 0,
              explain:
                "HDMI 1.4 schafft max. 4K@30Hz – der Monitor skaliert auf die maximal mögliche Rate herunter.",
            },
          ],
        },
        {
          id: "lf2-hw-4",
          title: "USB-Standards & Thunderbolt",
          content: [
            { type: "heading", value: "USB-Generationen & Geschwindigkeit" },
            {
              type: "text",
              value:
                "USB 2.0: 480 Mbit/s (Hi-Speed). Standard für Maus, Tastatur, Drucker. USB 3.2 Gen 1 (USB 3.0): 5 Gbit/s (SuperSpeed). USB 3.2 Gen 2 (USB 3.1): 10 Gbit/s (SuperSpeed+). USB 3.2 Gen 2x2: 20 Gbit/s (nur USB-C). USB4: 40 Gbit/s (auf TB3 basierend). USB4 v2: 80 Gbit/s.",
            },
            { type: "heading", value: "Steckertypen" },
            {
              type: "text",
              value:
                "Typ-A: Klassisch rechteckig, seit USB 1.0, nicht reversibel. Typ-B: Quadratisch, für Drucker/Scanner. Micro-B: Alte Smartphones, langsam aussterbend. USB-C: Oval, reversibel (egal wie herum), universell. Kann Daten, Video (DisplayPort Alt Mode), Strom (Power Delivery bis 240W) übertragen. ACHTUNG: USB-C ist nur der STECKER, sagt nichts über Geschwindigkeit aus! Ein USB-C-Kabel kann USB 2.0 (480 Mbit/s) oder USB4 (40 Gbit/s) sein.",
            },
            { type: "heading", value: "Thunderbolt (TB)" },
            {
              type: "text",
              value:
                "TB3: USB-C Stecker, 40 Gbit/s, kann DisplayPort + PCIe tunneln (eGPU, NVMe-Gehäuse). TB4: Wie TB3, aber garantierte Mindeststandards (z.B. 2x 4K-Displays). TB5: 80 Gbit/s (bidirektional), 120 Gbit/s asymmetrisch. Thunderbolt-Kabel haben Blitz-Symbol. Nicht jeder USB-C-Port ist Thunderbolt!",
            },
            { type: "heading", value: "Power Delivery (PD)" },
            {
              type: "text",
              value:
                "USB PD über USB-C: Bis 240W (48V, 5A) mit USB PD 3.1. Lädt Laptops, Monitore, Dockingstations. Aushandlung: Gerät und Ladegerät handeln die optimale Spannung/Stromstärke aus.",
            },
            { type: "heading", value: "Übungsaufgabe 1: USB-Geschwindigkeit" },
            {
              type: "text",
              value: "Ordne grob die Datenraten zu: USB 2.0, USB 3.2 Gen 1, USB 3.2 Gen 2.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nUSB 2.0: 480 Mbit/s (= 0,48 Gbit/s)\nUSB 3.2 Gen 1 (früher 3.0): 5 Gbit/s\nUSB 3.2 Gen 2: 10 Gbit/s\n(Thunderbolt 3/4 über USB-C: bis 40 Gbit/s)\nFaustregel: jede Stufe deutlich schneller.",
            },
            { type: "heading", value: "Übungsaufgabe 2: USB-C" },
            { type: "text", value: "Ist USB-C dasselbe wie USB 3.2 oder Thunderbolt?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nNein. USB-C ist nur die STECKERFORM (verdrehsicher).\nWas tatsächlich drüber läuft (USB 2.0, USB 3.2,\nThunderbolt, DisplayPort) hängt vom Gerät/Port ab.\nEin USB-C-Port kann also langsam oder sehr schnell\nsein - immer die Spezifikation prüfen.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Thunderbolt" },
            { type: "text", value: "Was kann Thunderbolt 3/4, das normales USB nicht kann?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nThunderbolt bündelt Daten (bis 40 Gbit/s),\nDisplayPort-Video und PCIe in einem Kabel. Damit\nsind externe Grafikkarten (eGPU), schnelle\nNVMe-Gehäuse und Daisy-Chaining mehrerer Geräte\nmöglich. Nutzt den USB-C-Stecker.",
            },
            { type: "heading", value: "Beispiel 1: USB-Generationen und Geschwindigkeiten" },
            {
              type: "text",
              value:
                "USB 2.0: 480 Mbit/s (60 MB/s) – reicht für Maus, Tastatur, Drucker. USB 3.0/3.2 Gen1: 5 Gbit/s (625 MB/s) – für externe SSDs, Webcams. USB 3.2 Gen2: 10 Gbit/s – für schnelle externe NVMe-Gehäuse. USB 3.2 Gen2x2: 20 Gbit/s – nur USB-C. USB4: 40 Gbit/s – basiert auf Thunderbolt 3. Praxistipp: An der Farbe erkennbar – USB 2.0 schwarz/weiß, USB 3.0 blau, USB 3.2 Gen2 rot/türkis.",
            },
            { type: "heading", value: "Beispiel 2: USB-C ist nicht gleich USB-C" },
            {
              type: "text",
              value:
                "Drei USB-C-Ports am Laptop können völlig unterschiedlich sein: Port 1: USB 2.0 (nur 480 Mbit/s, kein Video) – für Maus. Port 2: USB 3.2 Gen2 (10 Gbit/s + DP Alt Mode) – für externen Monitor. Port 3: Thunderbolt 4 (40 Gbit/s + PD + 2x4K) – für Docking Station. Gleicher Stecker, völlig unterschiedliche Fähigkeiten. Immer Specs prüfen!",
            },
            { type: "heading", value: "Beispiel 3: USB Power Delivery in der Praxis" },
            {
              type: "text",
              value:
                "USB PD kann bis zu 240W liefern (seit PD 3.1). Beispiele: Smartphone: 18-25W. Laptop: 65-100W. Workstation: 140-240W. Vorteil: Ein Kabel für Daten + Video + Strom. Der Monitor kann den Laptop laden, während er als zweiter Bildschirm dient. Voraussetzung: Kabel UND Gerät müssen PD unterstützen.",
            },
          ],
          quiz: [
            {
              id: "imp_lf2-hw-4_0",
              q: "USB 3.2 Gen 2?",
              options: ["5 Gbit/s", "10 Gbit/s", "20 Gbit/s", "40 Gbit/s"],
              correct: 1,
              explain: "Gen 2 = 10 Gbit/s.",
            },
            {
              id: "imp_lf2-hw-4_1",
              q: "USB-C bedeutet?",
              options: ["Nur den Steckertyp", "40 Gbit/s", "Immer USB 3.0", "Thunderbolt"],
              correct: 0,
              explain: "USB-C = Steckerform, sagt nichts über Geschwindigkeit.",
            },
            {
              id: "imp_lf2-hw-4_2",
              q: "Thunderbolt 4 Geschwindigkeit?",
              options: ["40 Gbit/s", "10 Gbit/s", "80 Gbit/s", "20 Gbit/s"],
              correct: 0,
              explain: "TB4 = 40 Gbit/s (wie TB3, aber mit garantierten Mindeststandards).",
            },
            {
              id: "imp_lf2-hw-4_3",
              q: "USB PD max. Leistung?",
              options: ["240W", "100W", "65W", "15W"],
              correct: 0,
              explain: "USB PD 3.1: Bis 240W (48V, 5A).",
            },
            {
              id: "imp_lf2-hw-4_4",
              q: "USB 3.0 = Gen?",
              options: ["Gen 1 (5 Gbit/s)", "Gen 2", "Gen 2x2", "USB4"],
              correct: 0,
              explain: "Umbenannt zu 3.2 Gen 1.",
            },
            {
              id: "imp_lf2-hw-4_5",
              q: "TB3 vs TB4?",
              options: [
                "TB4 = gleich, garantierte Standards",
                "Kein Unterschied",
                "TB3 neuer",
                "TB4 schneller",
              ],
              correct: 0,
              explain: "Gleiche Speed, bessere Garantien.",
            },
            {
              id: "imp_lf2-hw-4_6",
              q: "USB-C immer schnell?",
              options: ["40G", "Nein, nur Steckerform", "Immer TB", "Ja"],
              correct: 1,
              explain: "Steckerform sagt nichts über Speed.",
            },
            {
              id: "imp_lf2-hw-4_7",
              q: "PD Aushandlung?",
              options: ["Automatisch optimale V/A", "Egal", "Immer 5V", "Fest"],
              correct: 0,
              explain: "USB PD handelt aus.",
            },
            {
              id: "imp_lf2-hw-4_8",
              q: "Micro-USB aktuell?",
              options: ["Standard", "Veraltet, USB-C-Pflicht", "Apple", "Schneller"],
              correct: 1,
              explain: "EU-weite USB-C-Pflicht.",
            },
            {
              id: "imp_lf2-hw-4_9",
              q: "TB5 Speed?",
              options: ["20G", "80 Gbit/s", "40G", "120G"],
              correct: 1,
              explain: "TB5: 80Gbit/s bidirektional.",
            },
            {
              id: "imp_lf2-hw-4_10",
              q: "Welche USB-Version hat 5 Gbit/s?",
              options: ["USB4", "USB 3.2 Gen2", "USB 3.2 Gen1 (früher USB 3.0)", "USB 2.0"],
              correct: 2,
              explain: "USB 3.2 Gen1 = 5 Gbit/s (früher als USB 3.0 bekannt).",
            },
            {
              id: "imp_lf2-hw-4_11",
              q: "Welche Farbe hat ein USB 3.0-Port typischerweise?",
              options: ["Grün", "Rot", "Blau", "Schwarz"],
              correct: 2,
              explain: "USB 3.0-Ports sind standardmäßig blau gekennzeichnet.",
            },
            {
              id: "imp_lf2-hw-4_12",
              q: "Was ist der Unterschied zwischen USB-C und USB 3.2?",
              options: [
                "USB-C ist der Steckertyp, USB 3.2 das Protokoll",
                "Kein Unterschied, beide Begriffe sind synonym",
                "USB-C überträgt stets schneller als USB 3.2",
                "USB-C ist das Protokoll, USB 3.2 der Steckertyp",
              ],
              correct: 0,
              explain:
                "USB-C = physischer Steckertyp (Form). USB 3.2 = Übertragungsprotokoll (Geschwindigkeit). Beides ist unabhängig voneinander.",
            },
            {
              id: "imp_lf2-hw-4_13",
              q: "Wie viel Watt liefert USB PD 3.1 maximal?",
              options: ["240W", "100W", "18W", "500W"],
              correct: 0,
              explain: "USB PD 3.1 Extended Power Range: Bis zu 240W (48V/5A).",
            },
            {
              id: "imp_lf2-hw-4_14",
              q: "Welcher USB-Standard basiert auf Thunderbolt 3?",
              options: ["USB 3.2", "USB4", "USB 3.0", "USB 2.0"],
              correct: 1,
              explain: "USB4 übernimmt das Thunderbolt-3-Protokoll und bietet 40 Gbit/s.",
            },
            {
              id: "imp_lf2-hw-4_15",
              q: "Was kann USB On-The-Go (OTG)?",
              options: [
                "WLAN über USB",
                "PCs schneller machen",
                "Mobilgeräte können als Host fungieren",
                "USB-Kabel verlängern",
              ],
              correct: 2,
              explain:
                "Z.B. USB-Stick anschließen. OTG: Smartphone/Tablet wird zum USB-Host – USB-Sticks, Tastaturen direkt anschließbar.",
            },
            {
              id: "imp_lf2-hw-4_16",
              q: "Wie viel schneller ist USB 3.2 Gen2 als USB 2.0?",
              options: ["100x", "~20x", "5x", "2x"],
              correct: 1,
              explain: "USB 3.2 Gen2: 10 Gbit/s vs. USB 2.0: 480 Mbit/s = ca. 20x schneller.",
            },
            {
              id: "imp_lf2-hw-4_17",
              q: "Welcher Steckertyp ist beidseitig einsteckbar?",
              options: ["USB-A", "USB-C", "Micro-USB", "USB-B"],
              correct: 1,
              explain: "USB-C ist reversibel – egal welche Seite oben/unten.",
            },
            {
              id: "imp_lf2-hw-4_18",
              q: "Was ist Thunderbolt 4?",
              options: [
                "Eine drahtlose Funkverbindung für Peripherie im 60-GHz-Band",
                "Intel-Protokoll: 40 Gbit/s, PCIe-Tunneling, über USB-C",
                "Ein reiner USB-Kabeltyp ohne eigenes Übertragungsprotokoll",
                "Ein reiner HDMI-Nachfolger, der nur Bildsignale überträgt",
              ],
              correct: 1,
              explain:
                "Thunderbolt 4 = Intel-Spezifikation, 40 Gbit/s, nutzt USB-C als Stecker, kann PCIe-Geräte anbinden.",
            },
            {
              id: "imp_lf2-hw-4_19",
              q: "Welches USB kann NICHT über USB-C laufen?",
              options: [
                "Alle können über USB-C laufen",
                "USB 3.2 Gen1",
                "USB 2.0",
                "USB 3.2 Gen2x2",
              ],
              correct: 0,
              explain:
                "Alle USB-Versionen können über USB-C-Stecker laufen – nur die Geschwindigkeit unterscheidet sich.",
            },
          ],
        },
        {
          id: "lf2-hw-5",
          title: "Drucker & Scanner",
          content: [
            { type: "heading", value: "Druckertypen" },
            {
              type: "text",
              value:
                "Laserdrucker: Fotoleitertrommel + Toner + Fixierung (Hitze). Schnell (20-50 S/Min), günstige Seitenkosten, ideal für Büro. Farblaser: 4 Toner (CMYK). Tintenstrahldrucker: Piezo (Epson) oder Thermal (HP/Canon). Gute Fotoqualität, hohe Seitenkosten, Eintrocknen bei Nichtbenutzung. Nadeldrucker: Nadeln schlagen durch Farbband auf Papier. Veraltet, aber für Durchschläge (Lieferscheine) unverzichtbar. Thermosublimation: Farbstoff wird verdampft, Fotoqualität. Plotter: Großformat (A0+) für CAD-Zeichnungen, Poster.",
            },
            { type: "heading", value: "Scanner-Typen" },
            {
              type: "text",
              value:
                "Flachbettscanner: Vorlage liegt auf Glasplatte, Scaneinheit fährt darunter. Vorteil: Bücher, dicke Vorlagen, fragile Dokumente. Nachteil: Langsamer, nur Einzelseiten. Einzugsscanner (ADF): Papier wird automatisch eingezogen. Vorteil: Schnell, Stapelverarbeitung, beidseitig (Duplex). Nachteil: Nur lose Blätter, Papierstau möglich.",
            },
            { type: "heading", value: "CCD vs. CIS Sensortechnik" },
            {
              type: "text",
              value:
                "CCD (Charge-Coupled Device): Spiegel + Linse + CCD-Sensor. Bessere Tiefenschärfe, höhere Qualität, auch bei gewölbten Vorlagen (Bücher). Teurer, größer. CIS (Contact Image Sensor): LED-Leiste direkt an Glasplatte. Flacher, günstiger, energiesparend. Schlechtere Tiefenschärfe, Vorlage muss plan aufliegen.",
            },
            { type: "heading", value: "Scan-Formate" },
            {
              type: "text",
              value:
                "JPEG/JPG: Verlustbehaftet, kompakt, für Fotos. PNG: Verlustfrei, Transparenz, für Grafiken/Screenshots. TIFF: Verlustfrei, große Dateien, professioneller Druck/Archivierung. PDF: Dokumentenformat, durchsuchbar mit OCR. BMP: Unkomprimiert, veraltet, sehr groß.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Druckertypen" },
            {
              type: "text",
              value:
                "Laserdrucker oder Tintenstrahldrucker für ein Büro mit hohem Schwarzweiß-Volumen? Begründe.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nLaserdrucker. Vorteile bei hohem Volumen: niedrige\nSeitenkosten, hohe Geschwindigkeit, wischfeste\nAusdrucke, Toner trocknet nicht ein.\nTintenstrahl lohnt eher bei wenig Druck oder\nFotodruck; bei seltener Nutzung trocknen Düsen ein.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Funktionsweise" },
            { type: "text", value: "Wie funktioniert ein Laserdrucker grob (Stichworte)?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. Bildtrommel wird elektrostatisch aufgeladen.\n2. Laser entlädt die zu druckenden Stellen punktuell.\n3. Toner haftet an den belichteten Stellen.\n4. Toner wird auf das Papier übertragen.\n5. Fixiereinheit schmilzt den Toner mit Hitze ein.\nDeshalb ist frisch Bedrucktes warm.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Scanner" },
            { type: "text", value: "Was bedeutet die Scan-Auflösung 600 dpi?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\ndpi = dots per inch (Punkte pro Zoll). 600 dpi\nbedeutet 600 abgetastete Bildpunkte je 2,54 cm.\nHöhere dpi = mehr Detail, aber größere Dateien.\nFür Text reichen 300 dpi, für Fotos eher 600+ dpi.",
            },
            { type: "heading", value: "Beispiel 1: Drucker für Kanzlei auswählen (AP1-typisch)" },
            {
              type: "text",
              value:
                "Kanzlei druckt 2.000 S/W + 500 Farbe pro Monat. Laserdrucker rechnen: Toner S/W ~3 Cent/Seite, Farbe ~12 Cent/Seite. Tinte S/W ~6 Cent/Seite, Farbe ~15 Cent/Seite. Bei 2.500 Seiten/Monat: Laser = 120 EUR/Monat, Tinte = 195 EUR/Monat. Trotz höherer Anschaffungskosten (Laser ~800 vs. Tinte ~300 EUR) amortisiert sich der Laser nach ~7 Monaten.",
            },
            { type: "heading", value: "Beispiel 2: Thermodrucker im Lager" },
            {
              type: "text",
              value:
                "Für Versandetiketten und Barcode-Labels wird ein Thermodirektdrucker eingesetzt: Kein Toner/Tinte nötig (wärmeempfindliches Papier), extrem schnell, wartungsarm. Nachteil: Ausdrucke verblassen bei Hitze/Licht. Für langlebige Etiketten (z.B. Inventarisierung) besser Thermotransferdrucker mit Farbband.",
            },
            { type: "heading", value: "Beispiel 3: Netzwerkdrucker einrichten" },
            {
              type: "text",
              value:
                "MFP (Multifunktionsdrucker) im Büro-Netzwerk: Per Ethernet (RJ45) ans LAN angeschlossen, feste IP oder DHCP-Reservierung. Treiber per GPO auf alle Clients verteilen. Scan-to-E-Mail konfigurieren: SMTP-Server hinterlegen, Absenderadresse setzen. Scan-to-Folder: SMB-Freigabe auf dem Fileserver als Ziel.",
            },
          ],
          quiz: [
            {
              id: "imp_lf2-hw-5_0",
              q: "Laserdrucker nutzt?",
              options: ["Tintentröpfchen", "Wachsstifte", "Nadeln", "Fotoleitertrommel + Toner"],
              correct: 3,
              explain: "Fotoleitertrommel + Toner + Fixierung.",
            },
            {
              id: "imp_lf2-hw-5_1",
              q: "CCD vs CIS Scanner: Bessere Tiefenschärfe?",
              options: ["CIS", "Kommt auf DPI an", "CCD", "Gleich"],
              correct: 2,
              explain: "CCD hat bessere Tiefenschärfe durch Spiegel+Linse.",
            },
            {
              id: "imp_lf2-hw-5_2",
              q: "TIFF ist?",
              options: [
                "Verlustfrei, groß, professionell",
                "Animiert",
                "Nur für Web",
                "Verlustbehaftet",
              ],
              correct: 0,
              explain: "TIFF: Verlustfrei, große Dateien, Druck/Archivierung.",
            },
            {
              id: "imp_lf2-hw-5_3",
              q: "Nadeldrucker wird heute noch gebraucht für?",
              options: ["3D-Druck", "Durchschläge (Lieferscheine)", "Großformat", "Fotos"],
              correct: 1,
              explain: "Nadeldrucker für Durchschlagpapier (Lieferscheine, Formulare).",
            },
            {
              id: "imp_lf2-hw-5_4",
              q: "Flachbettscanner Vorteil?",
              options: ["Auch Bücher und dicke Vorlagen", "Schneller", "Nur A4", "Billiger"],
              correct: 0,
              explain: "Flachbett: Vorlage liegt auf Glas, auch gebundene Dokumente möglich.",
            },
            {
              id: "imp_lf2-hw-5_5",
              q: "OCR = ?",
              options: [
                "Optical Character Recognition (Texterkennung)",
                "Online Cloud Reader (Dokumentenanzeige)",
                "Output Control Register (Steuerregister)",
                "Open Config Runtime (Konfigurationsdienst)",
              ],
              correct: 0,
              explain: "Texterkennung aus gescannten Bildern/PDFs.",
            },
            {
              id: "imp_lf2-hw-5_6",
              q: "Thermosublimation?",
              options: ["Verdampfter Farbstoff, Fotoqualität", "Nadeln", "Laser", "Tinte"],
              correct: 0,
              explain: "Höchste Fotoqualität.",
            },
            {
              id: "imp_lf2-hw-5_7",
              q: "ADF?",
              options: ["Auto", "Audio", "Automatischer Dokumenteneinzug", "Admin"],
              correct: 2,
              explain: "Stapelscans.",
            },
            {
              id: "imp_lf2-hw-5_8",
              q: "TIFF vs JPEG?",
              options: [
                "Gleich",
                "JPEG verlustfrei",
                "TIFF klein",
                "TIFF verlustfrei+groß, JPEG kompakt",
              ],
              correct: 3,
              explain: "TIFF für Archiv.",
            },
            {
              id: "imp_lf2-hw-5_9",
              q: "Plotter?",
              options: ["A4", "Großformat A0+ CAD Poster", "Fotos", "Etiketten"],
              correct: 1,
              explain: "Große Formate.",
            },
            {
              id: "imp_lf2-hw-5_10",
              q: "Welche Drucktechnologie ist für hohe Druckvolumen am günstigsten?",
              options: ["Tintenstrahldrucker", "Laserdrucker", "Thermodrucker", "Nadeldrucker"],
              correct: 1,
              explain:
                "Laser: Niedrigere Kosten pro Seite bei hohem Volumen, schneller, haltbarere Ausdrucke.",
            },
            {
              id: "imp_lf2-hw-5_11",
              q: "Was ist ein MFP?",
              options: [
                "Mega Fast Printer",
                "Multifunktionsdrucker",
                "Managed File Printer",
                "Mini Farbdrucker Professional",
              ],
              correct: 1,
              explain:
                "Drucken, Scannen, Kopieren, Faxen. MFP = Multifunktionsgerät: Drucker + Scanner + Kopierer + ggf. Fax in einem.",
            },
            {
              id: "imp_lf2-hw-5_12",
              q: "Wie funktioniert ein Laserdrucker?",
              options: [
                "Flüssige Tinte wird über feine Düsen auf das Papier gesprüht",
                "Wärme verfärbt beschichtetes Spezialpapier an den Druckstellen",
                "Toner wird elektrostatisch auf Bildtrommel übertragen und fixiert",
                "Nadeln drücken durch ein Farbband und erzeugen Punktmuster",
              ],
              correct: 2,
              explain:
                "Laser: Trommel wird per Laser belichtet → Toner haftet elektrostatisch → Fixierung durch Hitze.",
            },
            {
              id: "imp_lf2-hw-5_13",
              q: "Was ist DPI bei Druckern?",
              options: [
                "Document Pages Interval",
                "Digital Printer Index",
                "Dots Per Inch – Druckauflösung",
                "Data Processing Interface",
              ],
              correct: 2,
              explain: "DPI = Punkte pro Zoll. Büro: 600 DPI reicht. Fotodruck: 1200+ DPI.",
            },
            {
              id: "imp_lf2-hw-5_14",
              q: "Welcher Drucker braucht weder Tinte noch Toner?",
              options: [
                "Tintenstrahldrucker",
                "Jeder Drucker braucht Tinte oder Toner",
                "Laserdrucker",
                "Thermodirektdrucker",
              ],
              correct: 3,
              explain:
                "Thermodirektdrucker: Kein Toner, keine Tinte – Spezial-Thermopapier wird durch Wärme beschrieben (Kassenbons, Versandetiketten).",
            },
            {
              id: "imp_lf2-hw-5_15",
              q: "Was ist Duplex-Druck?",
              options: [
                "Doppelt so schnelles Drucken",
                "Zwei Seiten auf ein Blatt",
                "Farbdruck",
                "Beidseitiges Drucken",
              ],
              correct: 3,
              explain: "Duplex = automatisches beidseitiges Drucken. Spart 50% Papier.",
            },
            {
              id: "imp_lf2-hw-5_16",
              q: "Welche Schnittstelle hat ein Netzwerkdrucker?",
              options: [
                "Nur USB",
                "Ethernet (RJ45) und/oder WLAN",
                "Nur Parallel (LPT)",
                "Nur Bluetooth",
              ],
              correct: 1,
              explain:
                "Netzwerkdrucker: Ethernet und/oder WLAN, erreichbar über IP-Adresse im LAN.",
            },
            {
              id: "imp_lf2-hw-5_17",
              q: "Was bedeutet ppm?",
              options: [
                "Points per Millimeter",
                "Pages per Minute (Seiten pro Minute)",
                "Print Processing Mode",
                "Pixel pro Minute",
              ],
              correct: 1,
              explain: "ppm = Seiten pro Minute – die Druckgeschwindigkeit.",
            },
            {
              id: "imp_lf2-hw-5_18",
              q: "Welcher Scanner-Typ eignet sich für große Dokumentenmengen?",
              options: ["Handscanner", "Flachbettscanner", "Buchscanner", "Einzugsscanner (ADF)"],
              correct: 3,
              explain:
                "ADF (Automatic Document Feeder): Scannt automatisch Stapel von Dokumenten – ideal für Digitalisierung.",
            },
            {
              id: "imp_lf2-hw-5_19",
              q: "Was ist OCR?",
              options: [
                "Online Color Rendering",
                "Output Control Register",
                "Optical Character Recognition",
                "Optical Cable Routing",
              ],
              correct: 2,
              explain:
                "Texterkennung in gescannten Bildern. OCR wandelt gescannte Bilder in durchsuchbaren/bearbeitbaren Text um.",
            },
          ],
        },
        {
          id: "lf2-hw-6",
          title: "Ergonomie am Arbeitsplatz",
          content: [
            { type: "heading", value: "Vorgaben (ArbStättV)" },
            {
              type: "text",
              value:
                "Monitor: Oberkante Augenhöhe, 50-70 cm Abstand. 500 Lux Beleuchtung, keine Blendung. Stuhl höhenverstellbar, Rückenlehne. Tisch 68-76 cm (oder verstellbar), min. 160x80 cm. Raumklima 20-26 Grad, 40-60% Feuchte.",
            },
            { type: "heading", value: "Elektrische Berechnungen (Prüfungsklassiker!)" },
            {
              type: "text",
              value:
                "Grundformeln: P = U * I (Leistung = Spannung x Strom). W = P * t (Arbeit = Leistung x Zeit). U = R * I (Ohmsches Gesetz).",
            },
            {
              type: "text",
              value:
                "Beispiel 1: Blade-Server 2.400W an 230V, 10A Sicherung. I = P/U = 2400/230 = 10,43A. Sicherung reicht NICHT (10A < 10,43A). Beispiel 2: 75 PCs x 300W x 8h = 180.000 Wh = 180 kWh pro Tag. Bei 0,30 EUR/kWh = 54 EUR/Tag Stromkosten.",
            },
            {
              type: "note",
              value:
                "Elektrische Berechnungen kommen in AP1 fast immer vor! Formeln P=U*I und W=P*t auswendig kennen. Einheiten beachten: W, kW, Wh, kWh.",
            },
            {
              type: "heading",
              value: "Gütesiegel: Energieeffizienz und Nachhaltigkeit beim Gerätekauf",
            },
            {
              type: "text",
              value:
                "Bei der ökologischen Bewertung von IT-Systemen (AP1-Katalog!) helfen anerkannte Siegel: ENERGY STAR kennzeichnet energieeffiziente Geräte; der Blaue Engel ist das deutsche Umweltzeichen und bewertet neben Energie auch Langlebigkeit, Reparierbarkeit und Schadstoffe; TCO Certified (aus Schweden) prüft zusätzlich Ergonomie und soziale Kriterien in der Herstellung; EPEAT bewertet den gesamten Lebenszyklus. In Angebotsvergleichen zählen solche Siegel als qualitative Kriterien – zusammen mit messbaren Werten wie Leistungsaufnahme (Betrieb/Standby), Wirkungsgrad des Netzteils (80-PLUS-Stufen) und Recyclingfähigkeit. Praxis-Tipp für Argumentationsaufgaben: Ein sparsameres Gerät rechnet sich über die Stromkosten der Nutzungsdauer – die Rechnung Watt-Differenz × Stunden × Strompreis liefert das Argument.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Bildschirmhöhe" },
            { type: "text", value: "Wie sollte ein Monitor ergonomisch positioniert sein?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nOberkante des Bildschirms auf oder leicht unter\nAugenhöhe, Blick leicht nach unten gerichtet.\nAbstand ca. 50-70 cm. Senkrecht zum Fenster\n(keine Spiegelungen/Blendung). So bleiben Nacken\nund Augen entspannt.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Sitzhaltung" },
            {
              type: "text",
              value: "Nenne drei Merkmale einer ergonomischen Sitzhaltung am Arbeitsplatz.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n- Ober- und Unterarme sowie Ober- und Unterschenkel\n  jeweils etwa im 90-Grad-Winkel.\n- Füße flach auf dem Boden (oder Fußstütze).\n- Rücken angelehnt, Lordosenstütze im unteren Rücken.\nDazu: regelmäßig Haltung wechseln und bewegen.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Pausen" },
            {
              type: "text",
              value: "Was sagt die Bildschirmarbeitsverordnung sinngemäß zu Pausen?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nBildschirmarbeit soll regelmäßig durch andere\nTätigkeiten oder Pausen unterbrochen werden, um\neinseitige Belastung von Augen und Haltung zu\nvermeiden. Faustregel: kurze Unterbrechungen\nlieber häufig als selten und lang.",
            },
            { type: "heading", value: "Beispiel 1: Ergonomischer Bildschirmarbeitsplatz" },
            {
              type: "text",
              value:
                "Gesetzliche Vorgaben (ArbStättV + DGUV Information 215-410): Monitoroberkante auf Augenhöhe, Sehabstand 50-70 cm, Blick leicht nach unten geneigt. Beleuchtung 500 Lux, keine Blendung/Spiegelung (Monitor 90° zum Fenster). Tischhöhe 68-76 cm (verstellbar), Stuhl mit Lordosenstütze, Füße flach am Boden.",
            },
            { type: "heading", value: "Beispiel 2: Beleuchtung im Büro richtig planen" },
            {
              type: "text",
              value:
                "Mindestbeleuchtungsstärke: 500 Lux für Bildschirmarbeit (DIN EN 12464-1). Monitor NICHT vor Fenster stellen (Blendung) und NICHT mit Fenster im Rücken (Spiegelung). Ideal: Schreibtisch 90° zum Fenster. Direkte + indirekte Beleuchtung kombinieren. Tageslichtlampen (5000-6500K) reduzieren Ermüdung.",
            },
            { type: "heading", value: "Beispiel 3: Höhenverstellbarer Schreibtisch" },
            {
              type: "text",
              value:
                "Sitz-Steh-Arbeitsplatz: Im Sitzen 68-76 cm Tischhöhe, im Stehen 100-130 cm. Empfehlung: 60% Sitzen, 30% Stehen, 10% Gehen. Elektrisch verstellbare Tische mit Memory-Funktion speichern die persönlichen Höhen. Investition: 500-1.500 EUR pro Arbeitsplatz, aber messbare Reduktion von Rücken-Ausfallzeiten.",
            },
          ],
          quiz: [
            {
              id: "imp_lf2-hw-6_0",
              q: "Beleuchtungsstärke Bildschirmarbeitsplatz?",
              options: ["300 Lux", "750 Lux", "200 Lux", "500 Lux"],
              correct: 3,
              explain: "500 Lux.",
            },
            {
              id: "imp_lf2-hw-6_1",
              q: "Server 2400W an 230V: Stromstärke?",
              options: ["10A", "8,5A", "24A", "10,43A"],
              correct: 3,
              explain: "I = P/U = 2400W/230V = 10,43A.",
            },
            {
              id: "imp_lf2-hw-6_2",
              q: "50 PCs x 200W x 10h = ?",
              options: ["100 kWh", "1000 kWh", "10 kWh", "10000 kWh"],
              correct: 0,
              explain: "50x200Wx10h = 100.000 Wh = 100 kWh.",
            },
            {
              id: "imp_lf2-hw-6_3",
              q: "Tischhöhe Norm?",
              options: ["50-60 cm", "Egal", "68-76 cm (oder verstellbar)", "80-90 cm"],
              correct: 2,
              explain: "68-76 cm fest oder höhenverstellbar (Steh-Sitz-Tisch ideal).",
            },
            {
              id: "imp_lf2-hw-6_4",
              q: "Monitor: Oberkante auf?",
              options: ["Unter Augenhöhe", "Über Augenhöhe", "Augenhöhe", "Egal"],
              correct: 2,
              explain: "Oberkante auf Augenhöhe, leichter Blick nach unten.",
            },
            {
              id: "imp_lf2-hw-6_5",
              q: "Raumtemperatur Büro?",
              options: ["Egal", "28-32°C", "20-26°C", "15-18°C"],
              correct: 2,
              explain: "20-26°C, 40-60% Luftfeuchtigkeit.",
            },
            {
              id: "imp_lf2-hw-6_6",
              q: "PoE für Arbeitsplatz?",
              options: [
                "Ersetzt Steckdose",
                "Nur für Server",
                "Nur Daten",
                "Strom über Netzwerkkabel (IP-Telefon, AP)",
              ],
              correct: 3,
              explain: "PoE: IP-Telefone und Access Points über Netzwerkkabel mit Strom versorgen.",
            },
            {
              id: "imp_lf2-hw-6_7",
              q: "Bildschirmabstand?",
              options: ["50-70 cm", "100 cm", "20 cm", "Egal"],
              correct: 0,
              explain: "50-70 cm Abstand zum Monitor.",
            },
            {
              id: "imp_lf2-hw-6_8",
              q: "Luftfeuchtigkeit Büro?",
              options: ["80-90%", "Egal", "10-20%", "40-60%"],
              correct: 3,
              explain: "40-60% relative Luftfeuchtigkeit.",
            },
            {
              id: "imp_lf2-hw-6_9",
              q: "Ergonomischer Stuhl: Pflicht?",
              options: [
                "Höhenverstellbar mit Rückenlehne",
                "Nur optional",
                "Nur für Chefs",
                "Nein",
              ],
              correct: 0,
              explain: "Höhenverstellbar + Rückenlehne = ArbStättV.",
            },
            {
              id: "imp_lf2-hw-6_10",
              q: "Wie hoch sollte die Beleuchtungsstärke am Bildschirmarbeitsplatz sein?",
              options: ["500 Lux", "200 Lux", "1000 Lux", "100 Lux"],
              correct: 0,
              explain: "500 Lux nach DIN EN 12464-1 für Bildschirmarbeitsplätze.",
            },
            {
              id: "imp_lf2-hw-6_11",
              q: "In welcher Position zum Fenster sollte der Monitor stehen?",
              options: [
                "Direkt vor dem Fenster",
                "90 Grad (seitlich) zum Fenster",
                "Mit Fenster im Rücken",
                "Egal",
              ],
              correct: 1,
              explain:
                "90° zum Fenster: Keine Blendung (vor Fenster) und keine Spiegelung (Fenster im Rücken).",
            },
            {
              id: "imp_lf2-hw-6_12",
              q: "Wie weit sollte der Monitor vom Auge entfernt sein?",
              options: ["20-30 cm", "50-70 cm", "Egal", "100 cm"],
              correct: 1,
              explain: "50-70 cm Sehabstand ist ergonomisch optimal.",
            },
            {
              id: "imp_lf2-hw-6_13",
              q: "Was regelt die Arbeitsstättenverordnung (ArbStättV)?",
              options: [
                "Mindestanforderungen an Arbeitsplätze",
                "Nur Brandschutz",
                "Nur Heimarbeit",
                "Nur Pausenzeiten",
              ],
              correct: 0,
              explain:
                "ArbStättV legt Mindestanforderungen fest: Beleuchtung, Klima, Lärm, Platzbedarf, Ergonomie.",
            },
            {
              id: "imp_lf2-hw-6_14",
              q: "Wie sollte die Monitoroberkante positioniert sein?",
              options: [
                "Auf Augenhöhe oder leicht darunter",
                "Auf Brusthöhe",
                "Egal",
                "Über Augenhöhe",
              ],
              correct: 0,
              explain:
                "Monitoroberkante auf Augenhöhe – Blick geht leicht nach unten auf Bildschirmmitte.",
            },
            {
              id: "imp_lf2-hw-6_15",
              q: "Welche Verordnung ist für Bildschirmarbeitsplätze relevant?",
              options: [
                "DGUV Vorschrift 3",
                "BetrSichV",
                "Nur das ArbSchG",
                "ArbStättV (mit Anhang zu Bildschirmarbeitsplätzen)",
              ],
              correct: 3,
              explain:
                "Die frühere Bildschirmarbeitsverordnung wurde 2016 in die ArbStättV integriert (Anhang Nr. 6); ergänzend DGUV Information 215-410.",
            },
            {
              id: "imp_lf2-hw-6_16",
              q: "Wie groß muss die Grundfläche (Raumfläche) pro Büroarbeitsplatz mindestens sein?",
              options: ["Keine Vorgabe", "12 m²", "4 m²", "8 m²"],
              correct: 3,
              explain:
                "Richtwert (ASR A1.2): mind. 8 m² Raumfläche je Büroarbeitsplatz (Empfehlung 10 m²) – gemeint ist die Grundfläche des Raums, nicht die Tischfläche.",
            },
            {
              id: "imp_lf2-hw-6_17",
              q: "Was ist Blendung am Arbeitsplatz?",
              options: [
                "Störende Helligkeit, die Sehleistung oder Wohlbefinden beeinträchtigt",
                "Ein Pixeldefekt des Monitors, der helle Flecken erzeugt",
                "Eine falsch eingestellte Monitorauflösung mit unscharfem Bild",
                "Eine zu geringe Beleuchtungsstärke am Arbeitsplatz",
              ],
              correct: 0,
              explain:
                "Blendung = störende Lichtquelle im Sichtfeld oder als Spiegelung auf dem Monitor.",
            },
            {
              id: "imp_lf2-hw-6_18",
              q: "Welche Pausenregelung gilt für Bildschirmarbeit?",
              options: [
                "Keine besonderen Regelungen",
                "1 Stunde Pause pro 2 Stunden Arbeit",
                "Regelmäßige Kurzpausen oder Mischarbeit",
                "Nur Mittagspause",
              ],
              correct: 2,
              explain:
                "Regelmäßige Kurzpausen (5-10 Min. nach 50 Min.) oder Wechsel zu anderen Tätigkeiten.",
            },
            {
              id: "imp_lf2-hw-6_19",
              q: "Wie hoch sollte ein ergonomischer Bürostuhl eingestellt werden?",
              options: [
                "Oberschenkel waagerecht, Füße flach am Boden",
                "Immer 50 cm",
                "So hoch wie möglich",
                "So niedrig wie möglich",
              ],
              correct: 0,
              explain:
                "Sitzhöhe so, dass Oberschenkel waagerecht und Füße flach auf dem Boden stehen.",
            },
          ],
        },
        {
          id: "lf2-hw-7",
          title: "CPU-Architekturen & RAM",
          content: [
            { type: "heading", value: "CPU-Grundlagen" },
            {
              type: "text",
              value:
                "Taktfrequenz (GHz): Operationen pro Sekunde. Kerne: Physische Recheneinheiten. Threads: Logische Kerne (Hyperthreading/SMT = 2 Threads pro Kern). Cache: L1 (schnellst, kleinst, pro Kern), L2 (pro Kern), L3 (geteilt). TDP: Thermal Design Power – Wärmeabgabe/Stromverbrauch in Watt.",
            },
            { type: "heading", value: "x86 vs. ARM" },
            {
              type: "text",
              value:
                "x86 (Intel/AMD): CISC-Architektur, Desktop/Server-Standard, höhere Leistung pro Kern. ARM (Qualcomm, Apple Silicon): RISC-Architektur, energieeffizient, Smartphones/Tablets, zunehmend in Laptops/Servern (Apple M-Serie, AWS Graviton).",
            },
            { type: "heading", value: "RAM (Arbeitsspeicher)" },
            {
              type: "text",
              value:
                "DDR4: 2133-3200 MT/s (JEDEC; OC-Module bis ~5333), 1,2V, 288 Pins (DIMM). DDR5: 4800-8400+ MT/s, 1,1V, 288 Pins (anders beschaltet, nicht kompatibel!). ECC-RAM: Fehlerkorrektur für Server – erkennt und korrigiert Bitfehler. SO-DIMM: Laptop-Format (kleiner). Dual-Channel: 2 identische Module für doppelte Bandbreite.",
            },
            {
              type: "note",
              value:
                "DDR4 und DDR5 sind NICHT kompatibel – unterschiedliche Kerbe am Slot. Immer Mainboard-Spezifikation prüfen.",
            },
            { type: "heading", value: "Serielle vs. Parallele Datenübertragung" },
            {
              type: "text",
              value:
                "Parallel: Mehrere Bits gleichzeitig über mehrere Leitungen (z.B. 8 Leitungen = 1 Byte). Vorteil: Schnell auf kurze Distanz. Nachteil: Signale kommen unterschiedlich schnell an (Skew), kurze Kabel nötig, störanfällig. Beispiel: Alter Druckerport (LPT), IDE/PATA. Seriell: Ein Bit nach dem anderen über eine Leitung. Vorteil: Längere Kabel, weniger Störungen, höhere Taktraten möglich. Beispiel: USB, SATA, Ethernet, PCIe. Paradox: Moderne serielle Verbindungen (USB 3.2, PCIe 5.0) sind SCHNELLER als alte parallele, weil sie viel höher takten können.",
            },
            { type: "heading", value: "RAM-Übertragungsrate berechnen" },
            {
              type: "text",
              value:
                "Formel: Übertragungsrate = Speichertakt (MHz) x Prefetch-Faktor x Busbreite (Bit) / 8. Beispiel DDR4-3200: Takt 400 MHz x Prefetch 8 x 64 Bit / 8 = 25.600 MB/s = 25,6 GB/s. DDR5-5600: Takt 350 MHz x Prefetch 16 x 64 Bit / 8 = 44.800 MB/s. Die Zahl hinter DDR (z.B. 3200) = effektive Taktrate in MT/s (Megatransfers). Dual-Channel: Bandbreite verdoppelt sich (2x 64 Bit = 128 Bit Busbreite). SO-DIMM: Laptop-RAM (kleinerer Formfaktor als Desktop-DIMM).",
            },
            { type: "heading", value: "Übungsaufgabe: RAM-Datenrate" },
            {
              type: "text",
              value:
                "Ein DDR5-6000-Modul arbeitet mit 64 Bit Busbreite und Prefetch-Faktor 16. Berechne die theoretische Übertragungsrate. (Hinweis: effektive Taktrate = 6000 MT/s, realer Speichertakt = 6000/16 = 375 MHz).",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nFormel: Rate = Speichertakt × Prefetch × Busbreite / 8\n= 375 MHz × 16 × 64 Bit / 8\n= 375 × 16 × 8 Byte\n= 48.000 MB/s = 48 GB/s\n\nKurzformel über effektive Rate:\n6000 MT/s × 64 Bit / 8 = 48.000 MB/s = 48 GB/s\nDual-Channel verdoppelt: 96 GB/s",
            },
            { type: "heading", value: "Übungsaufgabe 2: Cache" },
            { type: "text", value: "Wozu dient der CPU-Cache (L1/L2/L3)?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nDer Cache ist ein sehr schneller Zwischenspeicher\nzwischen CPU und RAM. Er hält häufig benötigte\nDaten/Befehle vor, damit die CPU nicht auf den\nlangsameren RAM warten muss.\nL1: kleinster, schnellster, pro Kern.\nL2: größer, etwas langsamer.\nL3: am größten, von allen Kernen geteilt.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Dual-Channel" },
            { type: "text", value: "Was bringt Dual-Channel-RAM und was ist die Voraussetzung?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nDual-Channel verdoppelt die Speicherbandbreite,\nweil die CPU über zwei 64-Bit-Kanäle (zusammen\n128 Bit) parallel auf den RAM zugreift.\nVoraussetzung: mindestens zwei gleiche Module in\nden richtigen (meist gleichfarbigen) Slots.",
            },
            { type: "heading", value: "Beispiel 1: CPU-Auswahl Office vs. CAD" },
            {
              type: "text",
              value:
                "Office-PC: Intel Core i3-13100 (4 Kerne, 4.5 GHz Boost) oder AMD Ryzen 3 5300G (4C/8T mit iGPU) – reicht für Office, Browser, Mail. CAD-Workstation: Intel Core i7-13700K (16 Kerne, 8P+8E) oder AMD Ryzen 9 7900X (12C/24T) – Multi-Core für Rendering. Server: Intel Xeon oder AMD EPYC – ECC-RAM-Support, hohe Kernanzahl.",
            },
            { type: "heading", value: "Beispiel 2: DDR4 vs. DDR5 im Vergleich" },
            {
              type: "text",
              value:
                "DDR4: 3200 MT/s, 1.2V, 16 GB Module günstig (~25 EUR). DDR5: 5600+ MT/s, 1.1V, höhere Bandbreite, aber auch höhere Latenz (CL40 vs. CL16). Für Office kein spürbarer Unterschied. Für Videobearbeitung/Simulation profitiert man von DDR5-Bandbreite. Wichtig: DDR4 und DDR5 sind NICHT kompatibel (anderer Slot-Keying).",
            },
            { type: "heading", value: "Beispiel 3: Dual-Channel RAM richtig einbauen" },
            {
              type: "text",
              value:
                "2 identische RAM-Module in die richtigen Slots stecken: Bei 4 Slots typischerweise Slot 2+4 (nicht 1+2!). Dual-Channel verdoppelt die Bandbreite: 1 Modul DDR4-3200 = 25,6 GB/s. 2 Module Dual-Channel = 51,2 GB/s. Immer Mainboard-Handbuch prüfen – die empfohlenen Slots variieren je nach Hersteller.",
            },
          ],
          quiz: [
            {
              id: "imp_lf2-hw-7_0",
              q: "Was ist Hyperthreading?",
              options: [
                "Doppelte Taktfrequenz",
                "2 Threads pro physischem Kern",
                "Zwei CPUs",
                "Doppelter Cache",
              ],
              correct: 1,
              explain: "Hyperthreading/SMT = 2 logische Threads pro physischem Kern.",
            },
            {
              id: "imp_lf2-hw-7_1",
              q: "DDR5 Spannung?",
              options: ["1,35V", "1,2V", "1,5V", "1,1V"],
              correct: 3,
              explain: "DDR5 = 1,1V (DDR4 = 1,2V).",
            },
            {
              id: "imp_lf2-hw-7_2",
              q: "ECC-RAM ist wichtig für?",
              options: ["Server (Fehlerkorrektur)", "Gaming", "Grafikkarten", "Smartphones"],
              correct: 0,
              explain: "ECC erkennt und korrigiert Speicherfehler – essentiell für Server.",
            },
            {
              id: "imp_lf2-hw-7_3",
              q: "Hyperthreading?",
              options: [
                "2 logische Threads pro physischem Kern",
                "Schnellerer Takt",
                "Mehr Kerne",
                "Mehr RAM",
              ],
              correct: 0,
              explain: "SMT/HT: Jeder Kern kann 2 Threads gleichzeitig bearbeiten.",
            },
            {
              id: "imp_lf2-hw-7_4",
              q: "DDR5 vs. DDR4: Kompatibel?",
              options: ["Nur mit Adapter", "Ja", "Nur bei Server", "Nein (andere Kontaktbelegung)"],
              correct: 3,
              explain: "DDR5 ≠ DDR4: Gleiche Pinzahl (288), aber andere Beschaltung.",
            },
            {
              id: "imp_lf2-hw-7_5",
              q: "ECC-RAM: Wofür?",
              options: [
                "Fehlerkorrektur für Server",
                "Mehr Geschwindigkeit",
                "Weniger Stromverbrauch",
                "Gaming",
              ],
              correct: 0,
              explain:
                "Bitfehler erkennen/korrigieren. ECC erkennt und korrigiert Bitfehler im RAM. Pflicht für Server.",
            },
            {
              id: "imp_lf2-hw-7_6",
              q: "TDP = ?",
              options: ["Taktfrequenz", "Thermal Design Power", "Kernanzahl", "RAM-Typ"],
              correct: 1,
              explain: "Wärmeabgabe/Kühlung nötig. TDP: Wie viel Kühlung die CPU braucht.",
            },
            {
              id: "imp_lf2-hw-7_7",
              q: "ARM Vorteil?",
              options: ["Billiger", "Energieeffizient", "Mehr Leistung", "Älter"],
              correct: 1,
              explain: "ARM: RISC, energieeffizient (Smartphones, Apple Silicon).",
            },
            {
              id: "imp_lf2-hw-7_8",
              q: "Dual-Channel RAM?",
              options: [
                "1 Modul",
                "2 gleiche Module = doppelte Bandbreite",
                "4 verschiedene",
                "3 Module",
              ],
              correct: 1,
              explain: "2 identische Module parallel = doppelte Bandbreite.",
            },
            {
              id: "imp_lf2-hw-7_9",
              q: "L1-Cache: Wo?",
              options: [
                "Auf Festplatte",
                "Pro Kern, am kleinsten und schnellsten",
                "Im RAM",
                "Auf Mainboard",
              ],
              correct: 1,
              explain: "L1: Pro Kern, wenige KB, schnellster Cache.",
            },
            {
              id: "imp_lf2-hw-7_10",
              q: "Was bedeutet '8C/16T' bei einer CPU?",
              options: [
                "8 Kerne, 16 Threads",
                "8 Cluster, 16 Tasks",
                "8 Caches, 16 Transistoren",
                "8 Channels, 16 Transfers",
              ],
              correct: 0,
              explain: "8 physische Kerne mit Hyperthreading/SMT → 16 gleichzeitige Threads.",
            },
            {
              id: "imp_lf2-hw-7_11",
              q: "Was ist ECC-RAM?",
              options: [
                "Extra schnelles RAM",
                "Error-Correcting Code",
                "Extended Cache Configuration",
                "Ein RAM-Formfaktor",
              ],
              correct: 1,
              explain:
                "Erkennt und korrigiert Speicherfehler. ECC erkennt und korrigiert 1-Bit-Fehler im RAM. Pflicht für Server, nicht für Consumer.",
            },
            {
              id: "imp_lf2-hw-7_12",
              q: "Was ist der Unterschied zwischen CISC und RISC?",
              options: [
                "CISC = komplexe Befehle (x86), RISC = einfache Befehle (ARM)",
                "RISC-Prozessoren werden ausschließlich in Servern eingesetzt",
                "Beide Architekturen verwenden identische Befehlssätze",
                "CISC ist die neuere Architektur und löst RISC schrittweise ab",
              ],
              correct: 0,
              explain:
                "CISC (x86/AMD64): Komplexe Maschinenbefehle, Intel/AMD PCs. RISC (ARM): Einfache Befehle, Smartphones, Apple M-Chips.",
            },
            {
              id: "imp_lf2-hw-7_13",
              q: "Was macht der CPU-Cache?",
              options: [
                "Verbindet die CPU über Lanes mit der Grafikkarte",
                "Kühlt die CPU bei hoher Last zusätzlich passiv",
                "Speichert das Betriebssystem dauerhaft beim Booten",
                "Speichert häufig benötigte Daten zwischen CPU und RAM",
              ],
              correct: 3,
              explain:
                "Cache = schneller Zwischenspeicher in der CPU. L1 (schnellste, kleinste) → L2 → L3 (langsamste, größte).",
            },
            {
              id: "imp_lf2-hw-7_14",
              q: "Welcher RAM-Typ ist aktuell Standard in neuen PCs?",
              options: ["DDR4", "DDR3", "SDRAM", "DDR5"],
              correct: 3,
              explain:
                "DDR5 ist aktueller Standard für neue Plattformen (Intel 12+ Gen, AMD Ryzen 7000+).",
            },
            {
              id: "imp_lf2-hw-7_15",
              q: "Was passiert bei Single-Channel statt Dual-Channel?",
              options: [
                "Kein Unterschied",
                "Doppelte Geschwindigkeit",
                "RAM funktioniert nicht",
                "Halbe Speicherbandbreite",
              ],
              correct: 3,
              explain:
                "Single-Channel: Nur ein Speicherkanal → halbe Bandbreite gegenüber Dual-Channel.",
            },
            {
              id: "imp_lf2-hw-7_16",
              q: "Was ist Overclocking?",
              options: [
                "Ein neuartiges Kühlsystem mit Flüssigmetall-Paste",
                "CPU über Spezifikation hinaus takten für mehr Leistung",
                "CPU per Software verlangsamen, um Energie zu sparen",
                "Die CPU mit zusätzlichem RAM für mehr Leistung betreiben",
              ],
              correct: 1,
              explain:
                "Overclocking: CPU/RAM mit höherer Frequenz als vom Hersteller angegeben betreiben. Mehr Leistung, aber mehr Hitze und Instabilitätsrisiko.",
            },
            {
              id: "imp_lf2-hw-7_17",
              q: "Welche CPU-Architektur nutzen Apple M-Chips?",
              options: ["MIPS", "ARM (RISC)", "x86 (CISC)", "PowerPC"],
              correct: 1,
              explain:
                "Apple M1/M2/M3/M4 nutzen ARM-Architektur (RISC): Hohe Effizienz, niedriger Stromverbrauch.",
            },
            {
              id: "imp_lf2-hw-7_18",
              q: "Was gibt der Basistakt einer CPU an?",
              options: [
                "Maximale Geschwindigkeit unter Last",
                "RAM-Geschwindigkeit",
                "Garantierte Mindestfrequenz im Normalbetrieb",
                "Geschwindigkeit bei Overclocking",
              ],
              correct: 2,
              explain:
                "Basistakt = garantierte Frequenz. Boost-Takt = höhere Frequenz bei thermischem Spielraum.",
            },
            {
              id: "imp_lf2-hw-7_19",
              q: "Wie viel RAM braucht ein typischer Büro-PC?",
              options: ["8-16 GB", "4 GB", "128 GB", "64 GB"],
              correct: 0,
              explain:
                "8 GB = Minimum für Windows + Office. 16 GB = komfortabel. 32+ GB nur für Spezialanwendungen.",
            },
          ],
        },
        {
          id: "lf2-hw-8",
          title: "Thin Clients, VDI & DaaS – Arbeitsplätze zentral bereitstellen",
          content: [
            {
              type: "text",
              value:
                "Nicht jeder Arbeitsplatz braucht einen vollwertigen PC. Wenn ein Kunde 30 Callcenter-Plätze, Praxis-Terminals oder Kassensysteme ausstatten will, lautet die eigentliche Frage: Wo läuft die Rechenleistung – am Arbeitsplatz oder zentral? Genau diese Abwägung (dezentral vs. zentral) ist ein Dauerbrenner in AP1-Aufgaben und in echten Kundenprojekten.",
            },
            { type: "heading", value: "Client-Arten im Vergleich" },
            {
              type: "list",
              value: [
                "Fat Client (Thick Client): klassischer PC/Notebook. Anwendungen und Daten laufen lokal. Volle Leistung auch offline, aber hoher Aufwand pro Gerät (Installation, Updates, Reparatur) und höherer Stromverbrauch.",
                "Thin Client: kleines, meist lüfterloses Gerät mit Minimal-Betriebssystem. Es stellt nur Bildschirm, Tastatur und Maus bereit – die eigentliche Sitzung läuft auf einem Server (Terminalserver oder VDI). Typisch 5–15 Watt statt 100+ Watt, kaum bewegliche Teile, lange Lebensdauer.",
                "Zero Client: noch radikaler – praktisch ohne eigenes Betriebssystem, nur ein Protokoll-Decoder in Hardware/Firmware. Konfiguration komplett zentral, kleinste Angriffsfläche.",
                "Software-Client: das Zugriffsprogramm (z. B. RDP-, Citrix- oder VMware-Horizon-Client) auf vorhandener Hardware – so wird auch ein alter Fat Client zum „Thin Client“ und die Hardware lebt länger.",
              ],
            },
            { type: "heading", value: "Terminalserver, VDI und DaaS – die Server-Seite" },
            {
              type: "list",
              value: [
                "Terminalserver (Shared Desktop, z. B. Windows-RDS): Viele Benutzer teilen sich EIN Server-Betriebssystem; jeder bekommt eine Sitzung. Sehr ressourceneffizient, aber wenig Isolation – ein Amoklauf-Prozess eines Nutzers kann alle stören, und nicht jede Software ist terminalserverfähig.",
                "VDI (Virtual Desktop Infrastructure): Jeder Benutzer erhält eine EIGENE virtuelle Desktop-VM auf dem Hypervisor. Persistent (jeder behält seine personalisierte VM) oder non-persistent (bei Abmeldung wird die VM auf ein Golden Image zurückgesetzt – ideal für Schulungsräume). Bessere Isolation als Terminalserver, aber deutlich mehr RAM/Storage-Bedarf und Lizenzkosten.",
                "DaaS (Desktop as a Service): VDI als Cloud-Dienst eines Providers (z. B. Azure Virtual Desktop, Amazon WorkSpaces). Der Betrieb der Infrastruktur liegt beim Anbieter, Abrechnung pro Nutzer/Monat – Opex statt Capex. Dafür: laufende Kosten, Internet-Abhängigkeit und Datenschutzprüfung (Auftragsverarbeitung, Serverstandort!) nötig.",
              ],
            },
            {
              type: "note",
              value:
                "Merkhilfe: Terminalserver = viele Nutzer, EIN OS. VDI = viele Nutzer, VIELE virtuelle OS. DaaS = VDI, die jemand anders betreibt. In Prüfungsaufgaben musst du fast immer Vor- und Nachteile gegenüberstellen und eine begründete Empfehlung für ein Szenario abgeben.",
            },
            { type: "heading", value: "Vor- und Nachteile zentraler Bereitstellung" },
            {
              type: "list",
              value: [
                "Pro: zentrale Administration (ein Image statt 30 Installationen), schnelles Ausrollen neuer Arbeitsplätze, Daten bleiben im Rechenzentrum (Diebstahl eines Thin Clients ist unkritisch), geringer Stromverbrauch, weniger Lärm, lange Hardware-Nutzungsdauer, Homeoffice-fähig.",
                "Contra: Server und Netzwerk werden zum Single Point of Failure (Redundanz einplanen!), ohne Netz geht nichts, Anfangsinvestition in Server/Storage/Lizenzen, grafikintensive Anwendungen (CAD, Video) brauchen Spezial-Lösungen (GPU-Passthrough), Latenz spürbar bei schlechter Anbindung.",
              ],
            },
            { type: "heading", value: "Übungsaufgabe (AP1-Stil)" },
            {
              type: "text",
              value:
                "Ein Kunde plant 30 identische Callcenter-Arbeitsplätze (Browser-CRM, Softphone, Office). a) Empfehlen Sie Fat Client, Thin Client mit Terminalserver oder VDI – mit zwei Begründungen. b) Nennen Sie zwei Maßnahmen gegen den entstehenden Single Point of Failure. c) Der Kunde fragt nach DaaS: Nennen Sie einen wirtschaftlichen Vorteil und einen datenschutzrechtlichen Prüfpunkt. d) Rechnen Sie überschlägig: 30 Fat Clients à 120 W vs. 30 Thin Clients à 10 W + Server 800 W – Ersparnis pro 8-Stunden-Tag in kWh?",
            },
            {
              type: "solution",
              value:
                "a) Thin Clients mit Terminalserver (oder non-persistenter VDI): 1. identische, anspruchslose Standardanwendungen – ideal für Shared Sessions; 2. zentrale Administration senkt Betriebskosten massiv (ein Image, ein Update statt 30); zudem geringer Stromverbrauch und schneller Austausch defekter Geräte. Fat Clients wären Overkill, persistente VDI unnötig teuer.\nb) Redundanter zweiter Terminalserver mit Loadbalancing/Failover; USV und redundante Netzwerk-/Internetanbindung; regelmäßige, getestete Backups der Profile.\nc) Vorteil: keine Anfangsinvestition in Serverhardware, planbare monatliche Kosten (Opex), elastisch skalierbar. Prüfpunkt: Auftragsverarbeitungsvertrag nach Art. 28 DSGVO und Serverstandort/Drittlandtransfer (Kundendaten im Callcenter!).\nd) Fat: 30 × 120 W = 3.600 W. Thin: 30 × 10 W + 800 W = 1.100 W. Differenz 2.500 W = 2,5 kW × 8 h = 20 kWh Ersparnis pro Arbeitstag.",
            },
            {
              type: "links",
              value: [
                ["Wikipedia: Thin Client", "https://de.wikipedia.org/wiki/Thin_Client"],
                [
                  "Wikipedia: Desktop-Virtualisierung",
                  "https://de.wikipedia.org/wiki/Desktop-Virtualisierung",
                ],
                [
                  "FI-Prüfungsvorbereitung: Thin-Client-Arten",
                  "https://fachinformatikerpruefungsvorbereitung.de/abschlusspr%C3%BCfungteil1/systemintegration/thinclientarten/",
                ],
                [
                  "FI-Prüfungsvorbereitung: VDI und DaaS",
                  "https://fachinformatikerpruefungsvorbereitung.de/abschlusspr%C3%BCfungteil1/systemintegration/vdiunddaas/",
                ],
              ],
            },
          ],
          quiz: [
            {
              id: "imp_lf2-hw-8_0",
              q: "Worin unterscheidet sich VDI vom Terminalserver?",
              options: [
                "VDI funktioniert ausschließlich in der Public Cloud",
                "Bei VDI erhält jeder Nutzer eine eigene virtuelle Desktop-VM",
                "Terminalserver benötigen keinerlei Client-Lizenzen (CALs)",
                "VDI kommt vollständig ohne Hypervisor auf dem Host aus",
              ],
              correct: 1,
              explain:
                "Terminalserver: viele Nutzer teilen ein OS (Sitzungen). VDI: jeder Nutzer bekommt eine eigene VM – bessere Isolation, mehr Ressourcenbedarf.",
            },
            {
              id: "imp_lf2-hw-8_1",
              q: "Was kennzeichnet einen Zero Client?",
              options: [
                "Ein vollwertiger Desktop-PC ohne angeschlossenen Monitor",
                "Ein Gerät praktisch ohne eigenes OS, nur Protokoll-Decoder",
                "Ein kostenlos lizenzierter Software-Client für Downloads",
                "Ein Thin Client, der ohne jeden Netzwerkanschluss arbeitet",
              ],
              correct: 1,
              explain:
                "Zero Clients haben kein administrierbares lokales Betriebssystem – kleinste Angriffsfläche, Konfiguration komplett zentral.",
            },
            {
              id: "imp_lf2-hw-8_2",
              q: "Was bedeutet non-persistente VDI?",
              options: [
                "Die VM wird bei Abmeldung auf das Golden Image zurückgesetzt",
                "Die VM läuft komplett ohne angebundenen Storage im RAM",
                "Der Nutzer behält seine persönliche VM samt Änderungen dauerhaft",
                "Für die VM fallen keinerlei Lizenzkosten an",
              ],
              correct: 0,
              explain:
                "Non-persistent = Änderungen werden verworfen, jede Anmeldung startet vom sauberen Golden Image – ideal für Schulungsräume und Kioske.",
            },
            {
              id: "imp_lf2-hw-8_3",
              q: "Welcher Punkt spricht GEGEN eine zentrale Thin-Client-Lösung?",
              options: [
                "Hoher Stromverbrauch der Clients",
                "Daten liegen verstreut auf den Endgeräten",
                "Server und Netz werden zum Single Point of Failure",
                "Updates müssen an jedem Gerät einzeln erfolgen",
              ],
              correct: 2,
              explain:
                "Fällt Server oder Netzwerk aus, stehen alle Arbeitsplätze – deshalb Redundanz (zweiter Server, USV, redundante Anbindung) einplanen.",
            },
          ],
        },
        {
          id: "lf2-os-1",
          title: "Betriebssystem installieren: BIOS/UEFI, Partitionen & Dateisysteme",
          content: [
            {
              type: "text",
              value:
                "„Einrichten eines IT-gestützten Arbeitsplatzes“ heißt in der Praxis fast immer: Rechner auspacken, Firmware prüfen, Betriebssystem sauber installieren, konfigurieren, dokumentieren. Die AP1 fragt die Grundlagen dahinter regelmäßig ab – von der Firmware über die Partitionierung bis zur Wahl des Dateisystems.",
            },
            { type: "heading", value: "BIOS und UEFI" },
            {
              type: "text",
              value:
                "Die Firmware startet den Rechner und übergibt an das Betriebssystem. Das klassische BIOS bootet über den Master Boot Record (MBR) und stammt konzeptionell aus den 1980ern. Der Nachfolger UEFI bringt entscheidende Vorteile: grafische Oberfläche mit Mausbedienung, Boot von Platten über 2 TB (zusammen mit GPT), schnellerer Start, Netzwerkfähigkeit und Secure Boot – dabei prüft die Firmware die Signatur des Bootloaders und verhindert, dass manipulierte Bootkits vor dem Betriebssystem starten. Für die Prüfung: BIOS+MBR = alt, UEFI+GPT = Standard heute.",
            },
            { type: "heading", value: "Partitionierung: MBR vs. GPT" },
            {
              type: "list",
              value: [
                "MBR (Master Boot Record): maximal 4 primäre Partitionen (oder 3 primäre + 1 erweiterte mit logischen Laufwerken), Platten nur bis 2 TB adressierbar.",
                "GPT (GUID Partition Table): praktisch beliebig viele Partitionen (Windows: 128), Platten weit über 2 TB, Partitionstabelle redundant gespeichert – zusammen mit UEFI der heutige Standard.",
                "Warum überhaupt partitionieren? Trennung von System und Daten (Neuinstallation ohne Datenverlust), Mehrfach-Boot, separate Recovery-Partition, unter Linux getrennte Bereiche wie /home oder swap.",
              ],
            },
            { type: "heading", value: "Dateisysteme im Vergleich" },
            {
              type: "list",
              value: [
                "NTFS (Windows): Journaling, Zugriffsrechte (ACLs), Verschlüsselung (EFS), Komprimierung, riesige Dateien – Standard für Windows-Systempartitionen.",
                "FAT32: uralt, aber überall lesbar (Kameras, Sticks, Firmware-Updates). Harte Grenze: einzelne Dateien maximal 4 GiB – der Klassiker unter den Prüfungsfragen.",
                "exFAT: der FAT32-Nachfolger für Wechselmedien – keine 4-GiB-Grenze, von Windows, macOS und modernen Geräten unterstützt, aber ohne Rechteverwaltung/Journaling.",
                "ext4 (Linux): Journaling, Rechteverwaltung nach Unix-Modell, Standard der meisten Linux-Distributionen.",
                "APFS (Apple): für SSDs optimiert, Snapshots, Klone, Verschlüsselung – Standard bei macOS.",
                "Merkhilfe für die Auswahl: Windows-System → NTFS · USB-Stick für alles → exFAT (oder FAT32, wenn Uralt-Geräte dabei sind) · Linux → ext4 · Mac → APFS.",
              ],
            },
            { type: "heading", value: "Ablauf einer sauberen Installation" },
            {
              type: "text",
              value:
                "1. Vorbereitung: Bootmedium erstellen (USB), Firmware aktualisieren, im UEFI Bootreihenfolge und Secure Boot prüfen, Uhrzeit kontrollieren. 2. Installation: GPT-Partitionierung (System, ggf. Daten getrennt), Dateisystem wählen, lokales Konto bzw. Domänenbeitritt nach Vorgabe. 3. Nachbereitung: Treiber und Updates einspielen, Standardsoftware installieren, Energie- und Sicherheitseinstellungen (BitLocker/Verschlüsselung nach Firmenrichtlinie), Virenschutz, Aufnahme in Inventar und Monitoring. 4. Dokumentation & Übergabe: Hostname, Seriennummer, installierte Software, Besonderheiten – ohne Doku ist der Arbeitsplatz nicht „fertig“. Bei vielen gleichen Geräten lohnt ein Referenz-Image (Klonen statt Einzelinstallation) – Lizenzbedingungen und eindeutige Systemkennungen beachten.",
            },
            { type: "heading", value: "Übungsaufgabe" },
            {
              type: "text",
              value:
                "Ein Kunde bekommt 8 neue Windows-Arbeitsplätze (je 1 SSD mit 4 TB). a) Begründe, warum UEFI mit GPT statt BIOS mit MBR eingesetzt werden muss (zwei Gründe). b) Der Kunde will Fotos per USB-Stick an ein altes Präsentationsgerät geben, einzelne Videodateien sind 6 GiB groß – welches Dateisystem empfiehlst du für den Stick und warum nicht FAT32? c) Nenne zwei Vorteile von Secure Boot. d) Nenne drei Punkte, die nach der Installation vor der Übergabe zu erledigen sind.",
            },
            {
              type: "solution",
              value:
                "a) 1. MBR adressiert nur 2 TB – die 4-TB-SSD wäre nicht voll nutzbar; GPT hat diese Grenze nicht. 2. UEFI bietet Secure Boot und ist Voraussetzung aktueller Windows-Versionen; zudem redundante Partitionstabelle und schnellerer Start.\nb) exFAT: keine 4-GiB-Dateigrenze (FAT32 kann die 6-GiB-Videos nicht speichern) und trotzdem breite Gerätekompatibilität. NTFS wäre möglich, wird aber von vielen älteren Abspielgeräten nicht gelesen.\nc) Secure Boot prüft die Signatur des Bootloaders → schützt vor Bootkits/manipulierten Startdateien; nur vertrauenswürdige, signierte Software startet vor dem OS.\nd) Z. B.: Updates + Treiber aktuell, Virenschutz/Verschlüsselung nach Richtlinie aktiv, Domänenbeitritt/Konten eingerichtet, Inventarisierung/Dokumentation (Hostname, Seriennummer), Funktionstest mit Testprotokoll, Einweisung des Nutzers.",
            },
            {
              type: "links",
              value: [
                [
                  "Wikipedia: UEFI",
                  "https://de.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface",
                ],
                [
                  "Wikipedia: GUID Partition Table",
                  "https://de.wikipedia.org/wiki/GUID_Partition_Table",
                ],
                ["Wikipedia: Dateisystem", "https://de.wikipedia.org/wiki/Dateisystem"],
              ],
            },
          ],
          quiz: [
            {
              id: "imp_lf2-os-1_0",
              q: "Welche Kombination ist heute Standard für neue Arbeitsplatzrechner?",
              options: [
                "BIOS + MBR",
                "UEFI + GPT",
                "BIOS + GPT",
                "UEFI + FAT32 als Systempartition",
              ],
              correct: 1,
              explain:
                "UEFI bootet mit GPT-Partitionstabelle – Platten über 2 TB, Secure Boot, schnellerer Start. BIOS+MBR ist Legacy.",
            },
            {
              id: "imp_lf2-os-1_1",
              q: "Ein Nutzer kann eine 5-GiB-Videodatei nicht auf den USB-Stick kopieren. Häufigste Ursache?",
              options: [
                "Der Stick ist defekt",
                "Der Stick ist mit FAT32 formatiert",
                "USB 2.0 ist zu langsam",
                "Windows verbietet Videodateien",
              ],
              correct: 1,
              explain:
                "Maximale Dateigröße 4 GiB. FAT32 begrenzt EINZELNE Dateien auf 4 GiB, egal wie groß der Stick ist. Lösung: exFAT oder NTFS.",
            },
            {
              id: "imp_lf2-os-1_2",
              q: "Wovor schützt Secure Boot?",
              options: [
                "Vor Phishing-Mails, die Anmeldedaten über gefälschte Login-Seiten abgreifen",
                "Vor manipulierten Bootloadern/Bootkits, die vor dem Betriebssystem starten",
                "Vor einem mechanischen Festplattenausfall durch defekte Sektoren",
                "Vor schwachen Passwörtern, indem es Mindestlängen beim Login erzwingt",
              ],
              correct: 1,
              explain:
                "Die UEFI-Firmware prüft die Signatur der Startdateien – unsignierter/manipulierter Code wird nicht gebootet.",
            },
            {
              id: "imp_lf2-os-1_3",
              q: "Wie viele primäre Partitionen erlaubt eine klassische MBR-Partitionstabelle maximal?",
              options: ["2", "4", "16", "128"],
              correct: 1,
              explain:
                "MBR: max. 4 primäre (bzw. 3 + 1 erweiterte mit logischen Laufwerken). GPT kennt diese Grenze nicht (Windows: 128).",
            },
          ],
        },
      ],
    },
    {
      id: "lf2-mail",
      title: "Kommunikation im Berufsalltag",
      lessons: [
        {
          id: "lf2-ml-1",
          title: "E-Mail Knigge (10 Regeln)",
          content: [
            { type: "heading", value: "Die 10 goldenen Regeln" },
            {
              type: "text",
              value:
                "1. Seriöse E-Mail-Adresse (vorname.nachname@firma.de). 2. Aussagekräftige Betreffzeile ('Verspätete Lieferung Art. 203365' statt 'Unser Telefonat'). 3. Kurz fassen, Wichtigstes zuerst, max. eine Seite. 4. Grammatik und Rechtschreibung beachten, keine Chat-Sprache, GROSSSCHREIBUNG = Anbrüllen. 5. Nur bei kurzen Mails zitieren. 6. Empfänger gezielt wählen (CC sparsam, BCC bei Massenmails). 7. Signatur mit Kontaktdaten. 8. Anhänge komprimieren und im Text erwähnen. 9. Antwortzeit: Geschäftlich innerhalb 24h. 10. Emoticons nur intern und sparsam.",
            },
            { type: "heading", value: "CC vs. BCC vs. TO" },
            {
              type: "text",
              value:
                "TO: Direkter Empfänger, von dem eine Aktion erwartet wird. CC (Carbon Copy): Zur Kenntnis, keine Aktion erwartet. BCC (Blind Carbon Copy): Empfänger unsichtbar für andere – für Massenmails oder Datenschutz.",
            },
            {
              type: "note",
              value:
                "E-Mail-Kommunikation ist Prüfungsthema (LF2 + LF6) und Berufsalltag. Die Regeln gelten analog für Ticketsysteme.",
            },
            { type: "heading", value: "Übungsaufgabe 1: CC vs. BCC" },
            { type: "text", value: "Wann nutzt man CC, wann BCC?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nCC (Carbon Copy): sichtbare Kopie - alle Empfänger\nsehen, wer mitliest (zur Information).\nBCC (Blind Carbon Copy): unsichtbare Kopie - die\nanderen sehen diesen Empfänger NICHT. Nutzen:\nDatenschutz bei Verteilern (Adressen nicht\noffenlegen) oder stille Mitinformation.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Betreff" },
            { type: "text", value: "Warum ist ein guter Betreff wichtig, und was gehört rein?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nDer Betreff entscheidet, ob/wann eine Mail gelesen\nwird, und macht sie wiederauffindbar. Er sollte\nkurz und konkret das Anliegen nennen, z.B.\n'Angebot Netzwerk-Upgrade - Rückfrage zu Position 3'.\nLeere oder vage Betreffs ('Frage') vermeiden.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Anhang" },
            { type: "text", value: "Ein Kunde soll eine 40-MB-Datei erhalten. Worauf achtest du?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nViele Mailserver begrenzen Anhänge (oft 10-25 MB).\n40 MB können abgewiesen werden. Lösung: Datei über\neinen Freigabe-Link (Cloud-Speicher) senden statt\nals Anhang, ggf. komprimieren (ZIP). Im Mailtext\nauf den Link hinweisen.",
            },
            { type: "heading", value: "Beispiel 1: BCC richtig einsetzen" },
            {
              type: "text",
              value:
                "Situation: Newsletter an 200 Kunden. FALSCH: Alle in 'An' oder 'CC' – jeder sieht alle E-Mail-Adressen (DSGVO-Verstoß!). RICHTIG: Eigene Adresse in 'An', alle Empfänger in BCC. Zweiter Anwendungsfall: Chef informieren, ohne dass der Empfänger es sieht – Chef in BCC. Aber Vorsicht: Wenn der BCC-Empfänger 'Allen antworten' klickt, fliegt die Sache auf.",
            },
            { type: "heading", value: "Beispiel 2: Betreffzeile formulieren" },
            {
              type: "text",
              value:
                "SCHLECHT: 'Frage', 'Wichtig!!!', 'Hallo', leer. GUT: 'Angebot Server-Migration KW24 – Freigabe erbeten', 'Ticket #4521 – Drucker 3.OG offline seit 10:00'. Die Betreffzeile muss den Inhalt zusammenfassen UND Handlungsbedarf signalisieren. In vielen Unternehmen werden E-Mails nach Betreff sortiert/gefiltert – ein guter Betreff spart allen Zeit.",
            },
            { type: "heading", value: "Beispiel 3: Signatur im Geschäftsverkehr" },
            {
              type: "text",
              value:
                "Pflichtangaben nach HGB/GmbHG in geschäftlichen E-Mails: Firmenname, Rechtsform, Sitz, Registergericht + HR-Nummer, Geschäftsführer. Fehlen diese Angaben, drohen Abmahnungen. Zusätzlich empfohlen: Telefon, Adresse, Website. Optional: Disclaimer/Vertraulichkeitshinweis (rechtlich umstritten, aber branchenüblich).",
            },
          ],
          quiz: [
            {
              id: "imp_lf2-ml-1_0",
              q: "GROSSSCHREIBUNG in E-Mails wirkt wie?",
              options: ["Wichtig", "Anbrüllen", "Hervorhebung", "Professionell"],
              correct: 1,
              explain: "GROSSSCHREIBUNG wird als Schreien/Anbrüllen empfunden.",
            },
            {
              id: "imp_lf2-ml-1_1",
              q: "BCC nutzt man für?",
              options: [
                "Den Hauptempfänger",
                "Dringende Mails",
                "Empfänger, die unsichtbar bleiben sollen",
                "Anhänge",
              ],
              correct: 2,
              explain: "BCC = Blind Carbon Copy, Empfänger sehen einander nicht.",
            },
            {
              id: "imp_lf2-ml-1_2",
              q: "CC vs. BCC?",
              options: [
                "CC = Chef",
                "BCC = wichtiger",
                "CC sichtbar, BCC unsichtbar für andere",
                "Gleich",
              ],
              correct: 2,
              explain: "CC sichtbar, BCC Empfänger unsichtbar.",
            },
            {
              id: "imp_lf2-ml-1_3",
              q: "Professionelle Signatur enthält?",
              options: [
                "Nur Name",
                "Lieblingszitat",
                "Name, Position, Firma, Kontaktdaten",
                "Emojis",
              ],
              correct: 2,
              explain: "Name, Position, Firma, Telefon, Adresse.",
            },
            {
              id: "imp_lf2-ml-1_4",
              q: "Betreffzeile: Richtig?",
              options: ["Angebot IT-Ausstattung Projekt 2024-15", "FYI", "Ohne Betreff", "Hallo"],
              correct: 0,
              explain: "Aussagekräftig und spezifisch.",
            },
            {
              id: "imp_lf2-ml-1_5",
              q: "E-Mail Antwortzeit geschäftlich?",
              options: ["1 Woche", "Sofort", "Innerhalb 24h", "Egal"],
              correct: 2,
              explain: "Geschäftlich innerhalb 24 Stunden antworten.",
            },
            {
              id: "imp_lf2-ml-1_6",
              q: "Anhänge: Best Practice?",
              options: [
                "10MB+ ist OK",
                "Als ZIP umbenennen",
                "Ohne Beschreibung",
                "Im Text erwähnen, komprimieren",
              ],
              correct: 3,
              explain: "Im Text erwähnen und sinnvolle Größe (komprimieren).",
            },
            {
              id: "imp_lf2-ml-1_7",
              q: "TO (An) vs. CC?",
              options: [
                "Gleich",
                "TO = Aktion erwartet, CC = zur Kenntnis",
                "CC = wichtiger",
                "TO = optional",
              ],
              correct: 1,
              explain: "TO: Direkte Empfänger. CC: Zur Information, keine Aktion erwartet.",
            },
            {
              id: "imp_lf2-ml-1_8",
              q: "E-Mail an 50 Externe: TO oder BCC?",
              options: ["BCC (Datenschutz!)", "CC", "Egal", "TO"],
              correct: 0,
              explain: "BCC: Empfänger sehen einander nicht → Datenschutz bei Verteilern.",
            },
            {
              id: "imp_lf2-ml-1_9",
              q: "Wann sollte BCC statt CC verwendet werden?",
              options: [
                "Immer – CC gilt als veraltet und sollte nicht mehr genutzt werden",
                "Nur bei internen Mails; extern ist BCC technisch nicht zulässig",
                "Nie – BCC ist aus Datenschutzgründen in Unternehmen untersagt",
                "Wenn Empfänger die Adressen der anderen nicht sehen sollen",
              ],
              correct: 3,
              explain:
                "BCC = Blind Carbon Copy: Empfänger sind füreinander unsichtbar. Pflicht bei Massen-Mails (DSGVO).",
            },
            {
              id: "imp_lf2-ml-1_10",
              q: "Welche Pflichtangaben gehören in eine geschäftliche E-Mail-Signatur?",
              options: [
                "Firmenname, Rechtsform, Sitz, Registergericht, GF",
                "Lediglich eine Telefonnummer für Rückfragen",
                "Nur der Vor- und Nachname des Absenders",
                "Es existieren keine gesetzlichen Pflichtangaben",
              ],
              correct: 0,
              explain:
                "GmbH/UG: Firma, Rechtsform, Sitz, HR-Gericht + Nummer, alle GFs müssen genannt werden.",
            },
            {
              id: "imp_lf2-ml-1_11",
              q: "Was ist bei der Betreffzeile wichtig?",
              options: [
                "Leer lassen, damit die Mail neutral wirkt",
                "Möglichst kurz halten: ein einzelnes Wort genügt",
                "Immer 'Dringend' voranstellen, um Aufmerksamkeit zu sichern",
                "Inhalt zusammenfassen und Handlungsbedarf signalisieren",
              ],
              correct: 3,
              explain: "Guter Betreff = Thema + Kontext + ggf. Handlungsaufforderung.",
            },
            {
              id: "imp_lf2-ml-1_12",
              q: "Wann ist 'Allen antworten' angemessen?",
              options: [
                "Wenn alle Empfänger die Antwort sehen müssen",
                "Immer",
                "Nur beim Chef",
                "Nie",
              ],
              correct: 0,
              explain:
                "'Allen antworten' nur wenn die Information für alle relevant ist – sonst nur dem Absender antworten.",
            },
            {
              id: "imp_lf2-ml-1_13",
              q: "Was sollte man bei vertraulichen Anhängen tun?",
              options: [
                "Verschlüsseln oder Passwort-schützen",
                "Nur als BCC senden",
                "Nichts besonderes",
                "Nur ausdrucken",
              ],
              correct: 0,
              explain:
                "Vertrauliche Anhänge verschlüsseln (z.B. ZIP mit Passwort) und Passwort über separaten Kanal senden.",
            },
            {
              id: "imp_lf2-ml-1_14",
              q: "Wie schnell sollte man auf geschäftliche E-Mails antworten?",
              options: [
                "Innerhalb einer Woche, das gilt als völlig ausreichend",
                "Gar nicht, sofern die Mail nicht als wichtig markiert ist",
                "Innerhalb von 24 Stunden, bei Dringlichkeit schneller",
                "Grundsätzlich sofort, spätestens innerhalb weniger Minuten",
              ],
              correct: 2,
              explain:
                "Faustregel: Innerhalb eines Arbeitstags. Bei dringendem Betreff am selben Tag. Zumindest Eingangsbestätigung.",
            },
            {
              id: "imp_lf2-ml-1_15",
              q: "Was ist bei der E-Mail-Kommunikation mit Kunden besonders zu beachten?",
              options: [
                "Umgangssprache ist in Ordnung, sie schafft Nähe zum Kunden",
                "Emojis sind Pflicht, um die Tonalität eindeutig zu machen",
                "Ausschließlich Stichpunkte, ganze Sätze gelten als umständlich",
                "Professionelle Anrede, korrekte Rechtschreibung, höflicher Ton",
              ],
              correct: 3,
              explain:
                "Professionell: Korrekte Anrede, Rechtschreibung, Signatur, zeitnahe Antwort.",
            },
            {
              id: "imp_lf2-ml-1_16",
              q: "Welches Format ist für E-Mail-Anhänge am universellsten?",
              options: ["DOCX", "TXT", "PDF", "PPTX"],
              correct: 2,
              explain: "PDF: Plattformunabhängig, Layout bleibt erhalten, jeder kann es öffnen.",
            },
            {
              id: "imp_lf2-ml-1_17",
              q: "Was ist ein E-Mail-Disclaimer?",
              options: [
                "Ein E-Mail-Programm zum Verwalten mehrerer Postfächer",
                "Rechtlicher Hinweis am Ende der Mail zur Vertraulichkeit",
                "Ein serverseitiger Spam-Filter für eingehende Mails",
                "Eine Ende-zu-Ende-Verschlüsselung des Mailinhalts",
              ],
              correct: 1,
              explain:
                "Disclaimer = Hinweis auf Vertraulichkeit/Haftungsausschluss. Rechtswirkung in DE umstritten.",
            },
            {
              id: "imp_lf2-ml-1_18",
              q: "Was ist der Unterschied zwischen CC und BCC?",
              options: [
                "BCC ist schneller",
                "Kein Unterschied",
                "CC ist verschlüsselt",
                "CC ist sichtbar für alle, BCC ist unsichtbar",
              ],
              correct: 3,
              explain:
                "CC = Carbon Copy (sichtbar), BCC = Blind CC (unsichtbar für andere Empfänger).",
            },
            {
              id: "imp_lf2-ml-1_19",
              q: "Was sollte man bei der Weiterleitung von E-Mails beachten?",
              options: [
                "E-Mails grundsätzlich nie weiterleiten, sondern alle Inhalte stets manuell neu abtippen",
                "E-Mails dürfen grundsätzlich nur an den direkten Vorgesetzten weitergeleitet werden",
                "Sicherheitshalber immer den kompletten Verteiler einbeziehen, damit niemand Informationen verpasst",
                "Prüfen ob der Inhalt für den neuen Empfänger bestimmt ist und sensible Daten entfernen",
              ],
              correct: 3,
              explain:
                "Vor Weiterleitung prüfen: Ist der Inhalt für den neuen Empfänger relevant? Gibt es vertrauliche Informationen im Verlauf, die entfernt werden müssen?",
            },
          ],
        },
      ],
    },
    {
      id: "lf2-el",
      title: "Elektrotechnik",
      lessons: [
        {
          id: "lf2-el-1",
          title: "Spannung, Strom, Widerstand, Leistung",
          content: [
            { type: "heading", value: "Grundgrößen & Ohmsches Gesetz" },
            {
              type: "text",
              value:
                "U [V] = Spannung (Potentialunterschied, 'treibt' den Strom). I [A] = Stromstärke (Anzahl fließender Ladungen). R [Ohm] = Widerstand (hemmt den Stromfluss). Ohmsches Gesetz: U = R x I. Umgestellt: R = U/I, I = U/R.",
            },
            { type: "heading", value: "Leistung & Energie" },
            {
              type: "text",
              value:
                "Leistung P = U x I [Watt]. Energie/Arbeit W = P x t [Wattstunde]. 1 kWh = 1.000 Wh. Umstellung: I = P/U (wichtig für Sicherungsberechnung!).",
            },
            { type: "heading", value: "Reihen- und Parallelschaltung" },
            {
              type: "text",
              value:
                "Reihenschaltung: R_ges = R1 + R2 + R3. Strom überall gleich, Spannung teilt sich auf. Parallelschaltung: 1/R_ges = 1/R1 + 1/R2. Spannung überall gleich, Strom teilt sich auf.",
            },
            { type: "heading", value: "Praxis: Energiekosten berechnen" },
            {
              type: "text",
              value:
                "PC 400W x 8h x 22 Arbeitstage = 70.400 Wh = 70,4 kWh/Monat. Bei 0,35 EUR/kWh = 24,64 EUR/Monat. Serverraum: 10 Server x 500W x 24h x 365 Tage = 43.800 kWh/Jahr x 0,30 EUR = 13.140 EUR/Jahr Stromkosten.",
            },
            {
              type: "note",
              value:
                "P=U*I und W=P*t kommen in fast jeder AP1. Besonders: Sicherungsberechnung (I=P/U) und Stromkosten (W=P*t*Preis/kWh).",
            },
            { type: "heading", value: "Übungsaufgabe 1: Leistung" },
            {
              type: "text",
              value: "Ein Gerät zieht an 230 V einen Strom von 0,5 A. Berechne die Leistung.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nP = U x I = 230 V x 0,5 A = 115 W\n(Leistung = Spannung x Strom)",
            },
            { type: "heading", value: "Übungsaufgabe 2: Ohmsches Gesetz" },
            {
              type: "text",
              value:
                "An einem Widerstand liegen 12 V an, es fließen 2 A. Wie groß ist der Widerstand?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nR = U / I = 12 V / 2 A = 6 Ohm\n(Ohmsches Gesetz: U = R x I, also R = U/I)",
            },
            { type: "heading", value: "Übungsaufgabe 3: Stromart" },
            {
              type: "text",
              value:
                "Worin unterscheiden sich Gleichstrom (DC) und Wechselstrom (AC), und wo kommen sie vor?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nGleichstrom (DC): fließt konstant in eine Richtung -\nin Computern, Akkus, USB (5 V), Netzteil-Ausgang.\nWechselstrom (AC): wechselt periodisch die Richtung\n(in DE 50 Hz) - im Stromnetz/Steckdose (230 V).\nDas Netzteil wandelt AC aus der Steckdose in DC\nfür die PC-Komponenten.",
            },
            { type: "heading", value: "Beispiel 1: Ohmsches Gesetz in der Praxis" },
            {
              type: "text",
              value:
                "Ein Lüfter läuft mit 12V und zieht 0,5A. Widerstand: R = U/I = 12V/0,5A = 24 Ohm. Leistung: P = U×I = 12V × 0,5A = 6W. Bei der Netzteil-Dimensionierung addiert man alle Verbraucher: 3 Lüfter à 6 W + CPU 125 W + GPU 300 W + RAM/SSD ~20 W = ~463 W. Sicherheitszuschlag 20 % → min. 600-W-Netzteil.",
            },
            { type: "heading", value: "Beispiel 2: Strom berechnen für USV-Dimensionierung" },
            {
              type: "text",
              value:
                "Server: 500W Netzteil, 230V Netz. I = P/U = 500W/230V = 2,17A. Bei 3 Servern = 6,52A gesamt. USV muss min. 1.500W abdecken: 1.500W / 0,8 (Leistungsfaktor) = 1.875VA → eine 2.000-VA-USV wählen. Autonomiezeit 10 Minuten → Batterie ca. 250Wh nötig. Formel: Energie(Wh) = Leistung(W) × Zeit(h) = 1.500W × (10/60)h = 250Wh.",
            },
            { type: "heading", value: "Beispiel 3: Reihenschaltung vs. Parallelschaltung" },
            {
              type: "text",
              value:
                "Reihenschaltung: 2 Widerstände à 100 Ohm → Rgesamt = 200 Ohm. Spannung teilt sich auf, Strom ist überall gleich. Parallelschaltung: 2 × 100 Ohm → 1/Rges = 1/100 + 1/100 = 2/100 → Rges = 50 Ohm. Spannung überall gleich, Strom teilt sich auf. Praxis: USB-Ports am Hub sind parallel (jeder bekommt 5V).",
            },
          ],
          quiz: [
            {
              id: "imp_lf2-el-1_0",
              q: "230V, 2A = Leistung?",
              options: ["115W", "460W", "232W", "920W"],
              correct: 1,
              explain: "P = 230 x 2 = 460W.",
            },
            {
              id: "imp_lf2-el-1_1",
              q: "Reihenschaltung: Was teilt sich auf?",
              options: ["Leistung", "Widerstand", "Spannung", "Strom"],
              correct: 2,
              explain: "In Reihenschaltung teilt sich die Spannung, Strom ist überall gleich.",
            },
            {
              id: "imp_lf2-el-1_2",
              q: "I = P/U: Server 1200W an 230V?",
              options: ["7,8A", "5,2A", "3,2A", "12A"],
              correct: 1,
              explain: "I = 1200/230 = 5,22A.",
            },
            {
              id: "imp_lf2-el-1_3",
              q: "Parallelschaltung: Was teilt sich?",
              options: ["Spannung", "Widerstand", "Strom", "Leistung"],
              correct: 2,
              explain: "Strom teilt sich auf, Spannung ist überall gleich.",
            },
            {
              id: "imp_lf2-el-1_4",
              q: "1 kWh Kosten ca.?",
              options: ["0,05 EUR", "0,30-0,35 EUR", "0,15 EUR", "1,00 EUR"],
              correct: 1,
              explain: "Aktueller Strompreis ca. 0,30-0,35 EUR/kWh.",
            },
            {
              id: "imp_lf2-el-1_5",
              q: "Watt vs. Wattstunde?",
              options: [
                "W = Energie, die ein Gerät insgesamt verbraucht hat",
                "Beide Einheiten bezeichnen dieselbe physikalische Größe",
                "Wh = Leistung, die ein Gerät momentan aufnimmt",
                "Watt = Leistung (momentan), Wh = Energie (über Zeit)",
              ],
              correct: 3,
              explain: "Watt = Leistung (wie schnell). Wh = Energie (wie viel insgesamt).",
            },
            {
              id: "imp_lf2-el-1_6",
              q: "kWh in Wh?",
              options: ["1000", "100", "1", "10000"],
              correct: 0,
              explain: "1 kWh = 1000 Wh.",
            },
            {
              id: "imp_lf2-el-1_7",
              q: "R = U/I: 230V, 10A?",
              options: ["230 Ohm", "0,043 Ohm", "2300 Ohm", "23 Ohm"],
              correct: 3,
              explain: "R = 230V/10A = 23 Ohm.",
            },
            {
              id: "imp_lf2-el-1_8",
              q: "Sicherung 16A: Max. Leistung bei 230V?",
              options: ["3680W", "1600W", "2300W", "16000W"],
              correct: 0,
              explain: "P = 230V x 16A = 3680W.",
            },
            {
              id: "imp_lf2-el-1_9",
              q: "Wh in kWh umrechnen: 5000 Wh?",
              options: ["5 kWh", "50 kWh", "0,5 kWh", "500 kWh"],
              correct: 0,
              explain: "5000/1000 = 5 kWh.",
            },
            {
              id: "imp_lf2-el-1_10",
              q: "Wie lautet das Ohmsche Gesetz?",
              options: ["R = U × I", "U = R / I", "U = R × I", "I = U × R"],
              correct: 2,
              explain:
                "U = R × I → Spannung = Widerstand × Strom. Umgestellt: R = U/I oder I = U/R.",
            },
            {
              id: "imp_lf2-el-1_11",
              q: "Was ist die Einheit der elektrischen Leistung?",
              options: ["Ohm", "Ampere", "Watt", "Volt"],
              correct: 2,
              explain: "Leistung wird in Watt gemessen: P = U × I.",
            },
            {
              id: "imp_lf2-el-1_12",
              q: "Ein Gerät läuft mit 230V und zieht 2A. Wie hoch ist die Leistung?",
              options: ["232W", "46W", "460W", "115W"],
              correct: 2,
              explain: "P = U × I = 230V × 2A = 460W.",
            },
            {
              id: "imp_lf2-el-1_13",
              q: "Was passiert in einer Reihenschaltung, wenn ein Verbraucher ausfällt?",
              options: [
                "Alle Verbraucher fallen aus",
                "Die anderen laufen weiter",
                "Die Spannung verdoppelt sich",
                "Nichts",
              ],
              correct: 0,
              explain:
                "Reihenschaltung: Unterbrechung an einer Stelle → gesamter Stromkreis unterbrochen.",
            },
            {
              id: "imp_lf2-el-1_14",
              q: "Wie ist die Spannung in einer Parallelschaltung?",
              options: [
                "Doppelt so hoch",
                "Null",
                "An allen Verbrauchern gleich",
                "Unterschiedlich an jedem Verbraucher",
              ],
              correct: 2,
              explain: "Parallel: Spannung ist überall gleich, der Strom teilt sich auf.",
            },
            {
              id: "imp_lf2-el-1_15",
              q: "Was bedeutet VA bei einer USV?",
              options: [
                "Volt-Ampere (Scheinleistung)",
                "Volt-Anzahl",
                "Variable Ampere",
                "Verstärker-Ausgang",
              ],
              correct: 0,
              explain:
                "VA = Volt-Ampere = Scheinleistung. Wirkleistung (W) = VA × Leistungsfaktor (typ. 0,6-0,8).",
            },
            {
              id: "imp_lf2-el-1_16",
              q: "Welche Netzspannung gilt in Deutschland?",
              options: ["120V / 50Hz", "240V / 60Hz", "230V / 50Hz", "110V / 60Hz"],
              correct: 2,
              explain: "Deutschland: 230V Wechselspannung bei 50 Hz.",
            },
            {
              id: "imp_lf2-el-1_17",
              q: "Was ist Wechselstrom?",
              options: [
                "Strom fließt immer in eine Richtung",
                "Stromrichtung wechselt periodisch (in DE 50 Schwingungen pro Sekunde)",
                "Strom, der ganz ohne anliegende Spannung fließt",
                "Strom mit wechselnder Stärke bei fester Richtung",
              ],
              correct: 1,
              explain:
                "AC: Die Richtung wechselt periodisch – 50 Hz bedeutet 50 vollständige Schwingungen (also 100 Richtungswechsel) pro Sekunde. DC: immer eine Richtung.",
            },
            {
              id: "imp_lf2-el-1_18",
              q: "R1=200 Ohm, R2=300 Ohm in Reihe. Rgesamt?",
              options: ["250 Ohm", "120 Ohm", "500 Ohm", "100 Ohm"],
              correct: 2,
              explain: "Reihenschaltung: Rges = R1 + R2 = 200 + 300 = 500 Ohm.",
            },
            {
              id: "imp_lf2-el-1_19",
              q: "Wofür steht die Einheit Ampere (A)?",
              options: ["Spannung", "Leistung", "Stromstärke", "Widerstand"],
              correct: 2,
              explain: "Ampere misst die elektrische Stromstärke (Ladung pro Zeit).",
            },
          ],
        },
        {
          id: "lf2-el-2",
          title: "USV & Netzteile",
          content: [
            { type: "heading", value: "USV-Typen (Unterbrechungsfreie Stromversorgung)" },
            {
              type: "text",
              value:
                "Offline/VFD (Voltage and Frequency Dependent): Umschaltzeit 5-12 ms. Günstig, für Arbeitsplätze und Peripherie. Strom fließt normal direkt, USV schaltet bei Ausfall um. Line-Interactive/VI (Voltage Independent): Umschaltzeit 2-4 ms. Automatische Spannungsregulierung (AVR) bei Schwankungen. Für Server, Netzwerktechnik. Online/VFI (Voltage and Frequency Independent): 0 ms Umschaltzeit. Strom fließt PERMANENT über Gleichrichter->Akku->Wechselrichter. Beste Qualität, teuerste. Für Rechenzentren, kritische Systeme.",
            },
            { type: "heading", value: "USV-Dimensionierung" },
            {
              type: "text",
              value:
                "VA (Voltampere) vs. W (Watt): USV in VA angegeben. Watt = VA x Leistungsfaktor (typ. 0,6-0,8). Berechnung: Alle angeschlossenen Geräte in Watt addieren, durch Leistungsfaktor teilen, 20-30% Reserve aufschlagen. Autonomiezeit: Abhängig von Akku-Kapazität und Last. Typisch: 5-30 Minuten (für geordnetes Herunterfahren oder Generatorstart).",
            },
            { type: "heading", value: "PC-Netzteile (80 PLUS)" },
            {
              type: "text",
              value:
                "Effizienzklassen: White (80%), Bronze (82-85%), Silver (85-88%), Gold (87-90%), Platinum (89-92%), Titanium (90-94%). Hohe Effizienz = weniger Abwärme, weniger Stromkosten. Modular: Nur benötigte Kabel anschließen (besserer Luftstrom). Server-Netzteile: Oft redundant (2 Netzteile, 1 reicht).",
            },
            { type: "heading", value: "Übungsaufgabe: USV dimensionieren" },
            {
              type: "text",
              value:
                "Ein Server zieht 400W, ein Switch 60W, ein NAS 40W. Leistungsfaktor 0,9. Die USV soll die Geräte 15 Minuten überbrücken. a) Welche Scheinleistung (VA) muss die USV mindestens haben? b) Worauf achtest du zusätzlich?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Wirkleistung gesamt: 400+60+40 = 500W\n   Scheinleistung S = P / Leistungsfaktor\n   S = 500W / 0,9 = 556 VA\n   → USV mit mind. ~600 VA wählen (Reserve einplanen!)\n\nb) Zusätzlich beachten:\n   - Autonomiezeit bei dieser Last (Herstellerangabe/\n     Akkukapazität prüft man über Runtime-Diagramm)\n   - Reserve für Anlaufströme/zukünftige Geräte (20-30%)\n   - Online-USV (VFI) für Server, nicht nur Offline\n   - Managementkarte für sauberes Herunterfahren",
            },
            { type: "heading", value: "Übungsaufgabe 2: USV-Typen" },
            {
              type: "text",
              value: "Worin unterscheiden sich Offline- (VFD) und Online-USV (VFI)?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nOffline/Standby (VFD): Gerät läuft normal am Netz,\nbei Ausfall schaltet die USV mit kurzer\nUmschaltzeit auf Akku. Günstig, für einfache PCs.\nOnline (VFI): Strom läuft IMMER über den\nWechselrichter (Doppelwandlung), keine Umschaltzeit,\nbestes Niveau - für Server/Rechenzentren.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Netzteil-Wirkungsgrad" },
            {
              type: "text",
              value:
                "Ein Netzteil hat 85% Wirkungsgrad und gibt 400 W an den PC ab. Wie viel zieht es aus der Steckdose?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nAufnahme = Abgabe / Wirkungsgrad\n= 400 W / 0,85 = ca. 471 W\nDie Differenz (ca. 71 W) geht als Wärme verloren.\n(80-PLUS-Zertifizierungen bewerten genau diesen\nWirkungsgrad - höher = weniger Verlust/Stromkosten.)",
            },
            { type: "heading", value: "Beispiel 1: USV-Typen im Vergleich" },
            {
              type: "text",
              value:
                "Offline/Standby-USV: Schaltet erst bei Ausfall um (~5-10ms Umschaltzeit). Günstig, für Arbeitsplätze OK. Line-Interactive-USV: Regelt Spannungsschwankungen automatisch, ~3-5ms Umschaltzeit. Standard für kleine Server. Online/Doppelwandler-USV: Versorgt Geräte PERMANENT über Batterie+Wechselrichter, 0ms Umschaltzeit. Pflicht für kritische Server/Datenbanken.",
            },
            { type: "heading", value: "Beispiel 2: 80 PLUS Zertifizierung bei Netzteilen" },
            {
              type: "text",
              value:
                "Ein 500W-Netzteil mit 80 PLUS Bronze hat min. 82% Effizienz bei 20% Last. Netzteile sind nach Abgabeleistung klassifiziert: Für 500W Abgabe zieht ein 82-%-Netzteil ca. 610W aus der Steckdose; ~110W werden als Wärme verschwendet. Gold: 87%, Platinum: 90%, Titanium: 94%. Für Server-Räume lohnt sich hohe Effizienz: Bei 100 Servern spart Platinum vs. Bronze ca. 15.000 kWh/Jahr.",
            },
            { type: "heading", value: "Beispiel 3: USV-Dimensionierung für Serverraum" },
            {
              type: "text",
              value:
                "3 Server à 450W + 2 Switches à 50W + 1 NAS 200W = 1.650W Gesamtlast. USV-Größe: 1.650W / 0,8 (Leistungsfaktor) = 2.063 VA → nächste Größe: 2.200 VA USV. Für 15 Min. Autonomie: 1.650W × 0,25h = 412,5 Wh Batteriekapazität. Online-USV wählen wegen 0ms Umschaltzeit für Server.",
            },
          ],
          quiz: [
            {
              id: "imp_lf2-el-2_0",
              q: "USV mit 0 ms Umschaltzeit?",
              options: ["Alle gleich", "Offline", "Online/VFI", "Line-Interactive"],
              correct: 2,
              explain: "Online/VFI = 0 ms, Strom fließt permanent über Akku.",
            },
            {
              id: "imp_lf2-el-2_1",
              q: "USV in 800 VA, Leistungsfaktor 0,8 = max. Watt?",
              options: ["640W", "800W", "400W", "1000W"],
              correct: 0,
              explain: "800 VA x 0,8 = 640 Watt maximale Reallast.",
            },
            {
              id: "imp_lf2-el-2_2",
              q: "Line-Interactive USV: Umschaltzeit?",
              options: ["5-12 ms", "2-4 ms", "0 ms", "50 ms"],
              correct: 1,
              explain: "Line-Interactive: 2-4 ms mit automatischer Spannungsregulierung.",
            },
            {
              id: "imp_lf2-el-2_3",
              q: "80 PLUS Gold Effizienz?",
              options: ["87-90%", "85%", "92%", "80%"],
              correct: 0,
              explain: "Gold: 87-90% Wirkungsgrad.",
            },
            {
              id: "imp_lf2-el-2_4",
              q: "Redundantes Netzteil: Warum?",
              options: ["Leiser", "Billiger", "Ausfallsicherheit", "Mehr Leistung"],
              correct: 2,
              explain: "Wenn ein Netzteil ausfällt, übernimmt das zweite nahtlos.",
            },
            {
              id: "imp_lf2-el-2_5",
              q: "Autonomiezeit USV?",
              options: ["Garantie", "Wie lange USV Strom liefert", "Preis der USV", "Ladezeit"],
              correct: 1,
              explain: "Autonomiezeit = Wie lange die USV Geräte versorgen kann.",
            },
            {
              id: "imp_lf2-el-2_6",
              q: "Modulares Netzteil?",
              options: [
                "Billiger",
                "Leiser",
                "Stärker",
                "Nur benötigte Kabel anschließen (Luftstrom)",
              ],
              correct: 3,
              explain: "Modular: Nur nötige Kabel = besserer Luftstrom im Gehäuse.",
            },
            {
              id: "imp_lf2-el-2_7",
              q: "USV: Welcher Typ für Rechenzentrum?",
              options: ["Egal", "Online/VFI (0ms)", "Offline", "Line-Interactive"],
              correct: 1,
              explain: "Online/VFI: 0ms Umschaltzeit, permanent über Akku.",
            },
            {
              id: "imp_lf2-el-2_8",
              q: "Offline USV: Umschaltzeit?",
              options: ["50 ms", "2-4 ms", "5-12 ms", "0 ms"],
              correct: 2,
              explain: "Offline/VFD: 5-12 ms.",
            },
            {
              id: "imp_lf2-el-2_9",
              q: "80 PLUS Titanium?",
              options: ["92%", "80%", "90-94%", "87%"],
              correct: 2,
              explain: "Titanium: 90-94% Effizienz.",
            },
            {
              id: "imp_lf2-el-2_10",
              q: "Welche USV-Klasse hat 0ms Umschaltzeit?",
              options: [
                "Offline/Standby",
                "Online/Doppelwandler (VFI)",
                "Alle gleich",
                "Line-Interactive",
              ],
              correct: 1,
              explain:
                "Online-USV: Geräte laufen permanent über Wechselrichter → keine Umschaltzeit.",
            },
            {
              id: "imp_lf2-el-2_11",
              q: "Was bedeutet 80 PLUS Gold?",
              options: [
                "Max. 80W Leistung",
                "Das Netzteil ist vergoldet",
                "Mindestens 87% Wirkungsgrad bei 50% Last",
                "Besonders leise",
              ],
              correct: 2,
              explain: "80 PLUS Gold: Min. 87% Effizienz bei 20%, 50% und 100% Last.",
            },
            {
              id: "imp_lf2-el-2_12",
              q: "Was ist die Hauptfunktion einer USV?",
              options: [
                "Sie stellt eine redundante Internetverbindung bereit",
                "Sie senkt den Stromverbrauch der angeschlossenen Geräte",
                "Überbrückung bei Stromausfall + Schutz vor Überspannung",
                "Sie sichert die Daten regelmäßig auf externe Medien",
              ],
              correct: 2,
              explain:
                "USV = unterbrechungsfreie Stromversorgung: Überbrückt Stromausfälle und schützt vor Spannungsspitzen.",
            },
            {
              id: "imp_lf2-el-2_13",
              q: "Wofür steht VFI bei USV-Klassifizierung?",
              options: [
                "Voltage Filter Integrated",
                "Variable Frequency Inverter",
                "Very Fast Interface",
                "Voltage Frequency Independent (Online-USV)",
              ],
              correct: 3,
              explain:
                "VFI = Voltage and Frequency Independent: Gerät ist komplett von Netzstrom entkoppelt.",
            },
            {
              id: "imp_lf2-el-2_14",
              q: "Was passiert, wenn ein Netzteil nur 400W liefert, aber 500W benötigt werden?",
              options: [
                "Läuft langsamer",
                "System stürzt ab oder startet nicht",
                "Kein Problem",
                "Netzteil wird schneller",
              ],
              correct: 1,
              explain:
                "Unterdimensioniertes Netzteil: Instabilität, Abstürze, Neustarts, im schlimmsten Fall Hardwareschaden.",
            },
            {
              id: "imp_lf2-el-2_15",
              q: "Was ist ein modulares Netzteil?",
              options: [
                "Ein Netzteil ohne Kabel",
                "Ein Netzteil für Module",
                "Kabel sind einzeln steckbar",
                "Ein externes Netzteil",
              ],
              correct: 2,
              explain:
                "Modular: Nur benötigte Kabel anschließen → bessere Kabelorganisation und Luftstrom im Gehäuse.",
            },
            {
              id: "imp_lf2-el-2_16",
              q: "Welche USV eignet sich für einen einfachen Büro-PC?",
              options: [
                "Online-USV 3000VA",
                "Gar keine USV",
                "Dieselgenerator",
                "Offline/Standby-USV 600VA",
              ],
              correct: 3,
              explain:
                "Büro-PC: Standby-USV (600-800 VA) reicht für sauberes Herunterfahren bei Stromausfall.",
            },
            {
              id: "imp_lf2-el-2_17",
              q: "Was ist eine Schuko-Steckdose?",
              options: [
                "Ein USB-Ladeanschluss für mobile Endgeräte",
                "Deutsche Standard-Steckdose mit Schutzkontakt",
                "Eine Netzwerkdose für RJ45-Patchkabel",
                "Eine spezielle Hochstrom-Steckdose für Server",
              ],
              correct: 1,
              explain:
                "Schuko = Schutzkontakt: Standard-230V-Steckdose in DE. Server nutzen oft C13/C14 (IEC).",
            },
            {
              id: "imp_lf2-el-2_18",
              q: "Was schützt eine USV NICHT?",
              options: [
                "Vor Stromausfall",
                "Vor Überspannung",
                "Vor Spannungsschwankungen",
                "Vor Datenverlust durch Hacking",
              ],
              correct: 3,
              explain: "USV schützt die Stromversorgung. Gegen Cyberangriffe hilft sie nicht.",
            },
            {
              id: "imp_lf2-el-2_19",
              q: "Wie berechnet man die nötige USV-Größe?",
              options: [
                "Gar nicht – einfach die größte kaufen",
                "Anzahl der Geräte × 100 Watt pauschal",
                "Gesamtleistung aller Geräte / Leistungsfaktor",
                "Serverraumfläche in m² × 500 Watt",
              ],
              correct: 2,
              explain:
                "Gesamtlast (W) / Leistungsfaktor (0,7-0,8) = benötigte VA. Plus Reserve für Zukunft.",
            },
          ],
        },
        {
          id: "lf2-dg-1",
          title: "DGUV V3 & Elektrosicherheit",
          content: [
            { type: "heading", value: "DGUV Vorschrift 3 (ehem. BGV A3)" },
            {
              type: "text",
              value:
                "Die DGUV Vorschrift 3 regelt die Prüfung elektrischer Anlagen und Betriebsmittel. Arbeitgeber sind verpflichtet, alle elektrischen Geräte regelmäßig prüfen zu lassen. Betrifft auch IT: Server, Monitore, Drucker, Netzteile, Kabel, USV. Ortsveränderliche Betriebsmittel (Laptop, Monitor): Büro alle 2 Jahre, Werkstatt/Baustelle alle 6 Monate. Ortsfeste Anlagen (Serverraum-Elektrik): Alle 4 Jahre.",
            },
            { type: "heading", value: "Schutzklassen" },
            {
              type: "text",
              value:
                "Schutzklasse I: Metallgehäuse mit Schutzleiter (PE) verbunden. Bei Isolationsfehler fließt Strom über PE ab → Sicherung löst aus. Typisch: Desktop-PCs, Server mit Metallgehäuse. Schutzklasse II: Doppelte oder verstärkte Isolierung, KEIN Schutzleiter nötig. Symbol: Doppelquadrat. Typisch: Laptop-Netzteile, viele externe Festplatten. Schutzklasse III: Schutzkleinspannung (unter 50V AC / 120V DC). Typisch: USB-Geräte, PoE.",
            },
            { type: "heading", value: "IP-Schutzarten" },
            {
              type: "text",
              value:
                "IP-Code (International Protection): Zwei Ziffern. Erste Ziffer (0-6): Schutz gegen Fremdkörper/Berührung (0=kein Schutz, 5=staubgeschützt, 6=staubdicht). Zweite Ziffer (0-9): Schutz gegen Wasser (0=kein Schutz, 4=Spritzwasser, 5=Strahlwasser, 7=zeitweiliges Untertauchen, 8=dauerhaftes Untertauchen). Beispiel: IP20 = Berührungsschutz, kein Wasserschutz (Büro). IP54 = Staubschutz + Spritzwasser (Werkstatt). IP67 = Staubdicht + Untertauchen (Outdoor).",
            },
            { type: "heading", value: "Prüfung in der Praxis" },
            {
              type: "text",
              value:
                "Prüfablauf: 1. Sichtprüfung (Kabel, Stecker, Gehäuse beschädigt?). 2. Messung (Schutzleiterwiderstand, Isolationswiderstand, Ableitstrom). 3. Funktionsprüfung. 4. Dokumentation (Prüfprotokoll, Prüfplakette). Prüfer: Elektrofachkraft (EFK) oder befähigte Person. Als FiSi darfst du NICHT selbst prüfen, aber du musst Prüffristen einhalten und Geräte zur Prüfung bereitstellen.",
            },
            {
              type: "note",
              value:
                "DGUV V3 kommt gelegentlich in AP-Prüfungen vor, besonders im Kontext Arbeitsplatzeinrichtung und Normen. Schutzklassen I/II und IP-Schutzarten sind Dauerbrenner.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Prüffrist" },
            {
              type: "text",
              value:
                "In welchem Intervall werden ortsveränderliche Geräte im Büro üblicherweise nach DGUV V3 geprüft?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nIm Büro (geringe Beanspruchung) üblicherweise alle\n2 Jahre. In Werkstatt/Baustelle (höhere\nBeanspruchung) deutlich häufiger, z.B. alle 6 Monate.\nDie Fristen sind Richtwerte; eine niedrige\nFehlerquote kann sie verlängern.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Schutzklasse" },
            {
              type: "text",
              value:
                "Ein Laptop-Netzteil hat kein Erdungskabel und ein Doppelquadrat-Symbol. Welche Schutzklasse?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nSchutzklasse II - doppelte/verstärkte Isolierung,\ndeshalb KEIN Schutzleiter nötig. Symbol: zwei\nineinanderliegende Quadrate. Schutzklasse I dagegen\nhat ein Metallgehäuse mit Schutzleiter (PE).",
            },
            { type: "heading", value: "Übungsaufgabe 3: IP-Schutzart" },
            { type: "text", value: "Was bedeutet IP54?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nIP = International Protection. Erste Ziffer 5 =\nStaubschutz (staubgeschützt, geringe Mengen\nzulässig). Zweite Ziffer 4 = Schutz gegen\nallseitiges Spritzwasser. Geeignet z.B. für\nWerkstatt-Umgebung.",
            },
            { type: "heading", value: "Beispiel 1: DGUV Vorschrift 3 im IT-Alltag" },
            {
              type: "text",
              value:
                "Alle ortsfesten elektrischen Anlagen (Serverraum-Verkabelung, USV, Schaltschränke) müssen alle 4 Jahre von einer Elektrofachkraft geprüft werden. Ortsveränderliche Geräte (Laptops, Monitore, Netzteile, Mehrfachsteckdosen) je nach Gefährdungsbeurteilung alle 6-24 Monate. Prüfprotokolle müssen dokumentiert und aufbewahrt werden. Verstoß = Ordnungswidrigkeit bis 10.000 EUR.",
            },
            {
              type: "heading",
              value: "Beispiel 2: Elektrofachkraft vs. elektrotechnisch unterwiesene Person",
            },
            {
              type: "text",
              value:
                "Elektrofachkraft (EFK): Abgeschlossene Ausbildung (z.B. Elektroniker), darf selbstständig an elektrischen Anlagen arbeiten. Elektrotechnisch unterwiesene Person (EuP): Wurde über Gefahren belehrt, darf nur unter Aufsicht einer EFK einfache Tätigkeiten ausführen (z.B. Sicherung tauschen). Ein FiSi ist weder EFK noch EuP – er darf NICHT am Stromverteiler arbeiten!",
            },
            { type: "heading", value: "Beispiel 3: Schutzklassen elektrischer Geräte" },
            {
              type: "text",
              value:
                "Schutzklasse I: Metallgehäuse mit Schutzleiter (PE, gelb-grün). Beispiel: Desktop-PC, Server. Schutzklasse II: Doppelte/verstärkte Isolierung, kein Schutzleiter nötig (Symbol: Doppelquadrat). Beispiel: Laptop-Netzteil, Smartphone-Ladegerät. Schutzklasse III: Schutzkleinspannung (unter 50V AC / 120V DC). Beispiel: USB-Geräte, LED-Streifen.",
            },
          ],
          quiz: [
            {
              id: "imp_lf2-dg-1_0",
              q: "DGUV Vorschrift 3?",
              options: [
                "Elektrische Anlagen und Betriebsmittel prüfen",
                "Regelung der täglichen Höchstarbeitszeit und Pausen",
                "Vorgaben zum Schutz personenbezogener Beschäftigtendaten",
                "Vorschriften zum vorbeugenden Brandschutz in Gebäuden",
              ],
              correct: 0,
              explain: "Unfallverhütungsvorschrift für Elektrosicherheit.",
            },
            {
              id: "imp_lf2-dg-1_1",
              q: "Prüffristen ortsveränderlich?",
              options: ["5 Jahre", "Täglich", "6 Monate bis 2 Jahre (je nach Umgebung)", "Nie"],
              correct: 2,
              explain: "Büro: alle 2 Jahre. Werkstatt/Baustelle: 6 Monate.",
            },
            {
              id: "imp_lf2-dg-1_2",
              q: "Wer darf prüfen?",
              options: [
                "Elektrofachkraft oder befähigte Person",
                "Nur Hersteller",
                "Jeder",
                "Nur TÜV",
              ],
              correct: 0,
              explain: "EFK oder unter Aufsicht einer EFK.",
            },
            {
              id: "imp_lf2-dg-1_3",
              q: "Schutzklasse I?",
              options: [
                "Schutzisolierung",
                "Kein Schutz",
                "Schutzkleinspannung",
                "Schutzleiter (PE) + Gehäuse geerdet",
              ],
              correct: 3,
              explain: "Klasse I: Metallgehäuse mit Schutzleiter verbunden.",
            },
            {
              id: "imp_lf2-dg-1_4",
              q: "Schutzklasse II?",
              options: [
                "Doppelte/verstärkte Isolierung (kein PE nötig)",
                "Geräte ohne jeglichen Berührungsschutz",
                "Betrieb mit Schutzkleinspannung (SELV) unter 50 V",
                "Anschluss über Schutzleiter (PE) ans Gehäuse",
              ],
              correct: 0,
              explain: "Symbol: Doppelquadrat. Kein Erdungsanschluss nötig.",
            },
            {
              id: "imp_lf2-dg-1_5",
              q: "IP-Schutzart IP54?",
              options: [
                "Verschlüsselung",
                "Nur Wasser",
                "5=Staubschutz, 4=Spritzwasserschutz",
                "Netzwerkprotokoll",
              ],
              correct: 2,
              explain: "IP: International Protection. 1.Ziffer=Fremdkörper, 2.Ziffer=Wasser.",
            },
            {
              id: "imp_lf2-dg-1_6",
              q: "RCD/FI-Schalter Auslösestrom?",
              options: ["30mA (Personenschutz)", "100mA", "300mA", "10A"],
              correct: 0,
              explain: "30mA = Personenschutz. 300mA = Brandschutz.",
            },
            {
              id: "imp_lf2-dg-1_7",
              q: "Ortsveränderlich = ?",
              options: [
                "Nur Kabel",
                "Nur tragbar",
                "Kann im Betrieb bewegt werden",
                "Fest installiert",
              ],
              correct: 2,
              explain: "Laptop, Monitor, Drucker. Alles was man umstecken/bewegen kann.",
            },
            {
              id: "imp_lf2-dg-1_8",
              q: "EFK = ?",
              options: [
                "Elektrofachkraft (Ausbildung + Prüfung)",
                "Erste-Hilfe-Kraft",
                "IT-Fachkraft",
                "Externe Fachkraft",
              ],
              correct: 0,
              explain: "Elektrofachkraft: Fachliche Ausbildung in Elektrotechnik.",
            },
            {
              id: "imp_lf2-dg-1_9",
              q: "Prüfprotokoll enthält?",
              options: [
                "Ausschließlich das Datum der durchgeführten Prüfung",
                "Lediglich die Seriennummer des geprüften Geräts",
                "Nur das Gesamtergebnis bestanden/nicht bestanden",
                "Prüfling, Messwerte, Ergebnis, Prüfer, nächster Termin",
              ],
              correct: 3,
              explain: "Vollständige Dokumentation jeder Prüfung.",
            },
            {
              id: "imp_lf2-dg-1_10",
              q: "Was regelt die DGUV Vorschrift 3?",
              options: [
                "Höchstarbeitszeiten und Pausenregelungen im Betrieb",
                "Sicherheit elektrischer Anlagen und Betriebsmittel",
                "Baulichen Brandschutz und Fluchtwege im Gebäude",
                "Datenschutz beim Umgang mit Beschäftigtendaten",
              ],
              correct: 1,
              explain:
                "DGUV V3 = Vorschrift zur Sicherheit elektrischer Betriebsmittel (früher BGV A3).",
            },
            {
              id: "imp_lf2-dg-1_11",
              q: "Wie oft müssen ortsveränderliche elektrische Geräte im Büro geprüft werden?",
              options: ["Täglich", "Alle 10 Jahre", "Alle 6-24 Monate", "Nie"],
              correct: 2,
              explain:
                "Nach Gefährdungsbeurteilung. Richtwert: Büro alle 24 Monate, Werkstatt/Baustelle alle 6 Monate. Gefährdungsbeurteilung entscheidet.",
            },
            {
              id: "imp_lf2-dg-1_12",
              q: "Wer darf die DGUV-V3-Prüfung durchführen?",
              options: [
                "Der Geschäftsführer",
                "Das Ordnungsamt",
                "Eine Elektrofachkraft oder befähigte Person",
                "Jeder Mitarbeiter",
              ],
              correct: 2,
              explain: "Nur Elektrofachkräfte oder befähigte Personen nach TRBS 1203.",
            },
            {
              id: "imp_lf2-dg-1_13",
              q: "Was bedeutet Schutzklasse II?",
              options: [
                "Schutzkleinspannung",
                "Explosionsschutz",
                "Metallgehäuse mit Erdung",
                "Doppelte Isolierung, kein Schutzleiter nötig",
              ],
              correct: 3,
              explain:
                "Schutzklasse II: Schutz durch doppelte/verstärkte Isolierung. Symbol: Doppelquadrat.",
            },
            {
              id: "imp_lf2-dg-1_14",
              q: "Was ist ein RCD/FI-Schutzschalter?",
              options: [
                "Ein Schutzelement gegen Störsignale auf Datenleitungen",
                "Erkennt Fehlerströme und schaltet bei Gefahr ab (Personenschutz)",
                "Ein Sicherungsautomat, der Leitungen vor Überlast schützt",
                "Ein Überspannungsschutz gegen Blitzeinschläge im Netz",
              ],
              correct: 1,
              explain:
                "RCD (Residual Current Device): Erkennt, wenn Strom über den Körper abfließt und schaltet in <30ms ab.",
            },
            {
              id: "imp_lf2-dg-1_15",
              q: "Welche Schutzart beschreibt IP54?",
              options: [
                "Vollständigen Staubschutz ohne jeglichen Wasserschutz",
                "Ausschließlich Schutz gegen Strahlwasser, kein Staubschutz",
                "IP5=Staubschutz teilweise, IP4=Spritzwasserschutz",
                "Schutz gegen Über- und Untertemperatur im Betrieb",
              ],
              correct: 2,
              explain:
                "IP54: 5=geschützt gegen Staub (begrenzt), 4=geschützt gegen Spritzwasser aus allen Richtungen.",
            },
            {
              id: "imp_lf2-dg-1_16",
              q: "Was sind die '5 Sicherheitsregeln' beim Arbeiten an elektr. Anlagen?",
              options: [
                "Handschuhe, Schutzbrille, Helm, Sicherheitsschuhe und Warnweste bei allen Elektroarbeiten vollständig tragen",
                "Nur bei Tageslicht arbeiten, Pausen einhalten, Werkzeug prüfen, Leitern sichern, Arbeitsbereich absperren",
                "Freischalten, gegen Wiedereinschalten sichern, Spannungsfreiheit feststellen, Erden/Kurzschließen, benachbarte Teile abdecken",
                "Immer zu zweit arbeiten, Ersthelfer benennen, Notrufnummer kennen, Verbandskasten und Feuerlöscher bereithalten",
              ],
              correct: 2,
              explain:
                "Die 5 Sicherheitsregeln sind verbindlich vor jedem Arbeiten an elektrischen Anlagen.",
            },
            {
              id: "imp_lf2-dg-1_17",
              q: "Was ist der Unterschied zwischen Schutzklasse und Schutzart?",
              options: [
                "Es gibt keinen Unterschied, beide Begriffe bezeichnen dieselbe Kennzeichnung nach DIN",
                "Schutzklasse = Schutz gegen el. Schlag, Schutzart (IP) = Schutz gegen Fremdkörper/Wasser",
                "Die Schutzklasse gibt die Dichtigkeit gegen Wasser an, gestuft von Klasse I bis III",
                "Die Schutzart beschreibt die Maßnahmen gegen elektrischen Schlag, z. B. Schutzisolierung",
              ],
              correct: 1,
              explain:
                "Schutzklasse (I/II/III): Gegen elektrischen Schlag. Schutzart (IP-Code): Gegen Staub und Wasser.",
            },
            {
              id: "imp_lf2-dg-1_18",
              q: "Darf ein FiSi einen Schaltschrank öffnen und darin arbeiten?",
              options: [
                "Nein, nur Elektrofachkräfte",
                "Nur wenn der Chef erlaubt",
                "Nur mit Handschuhen",
                "Ja, immer",
              ],
              correct: 0,
              explain:
                "FiSi ist keine EFK. Arbeiten in Schaltschränken nur durch Elektrofachkräfte!",
            },
            {
              id: "imp_lf2-dg-1_19",
              q: "Was muss nach einer DGUV-V3-Prüfung dokumentiert werden?",
              options: [
                "Nur bei festgestellten Mängeln ist ein kurzer Vermerk erforderlich",
                "Prüfprotokoll mit Datum, Ergebnis, Prüfer, nächster Prüftermin",
                "Nichts – die Prüfplakette am Gerät ersetzt jede schriftliche Doku",
                "Eine mündliche Meldung an den Vorgesetzten genügt vollständig",
              ],
              correct: 1,
              explain:
                "Prüfprotokolle sind Pflicht: Gerät, Datum, Ergebnis, Mängel, Prüfer, nächster Termin.",
            },
          ],
        },
      ],
    },
    {
      id: "lf2-pm",
      title: "Projektmanagement",
      lessons: [
        {
          id: "lf2-pm-4",
          title: "Projektsteuerung: Earned Value & Risikomatrix",
          content: [
            {
              type: "text",
              value:
                'Zwei Werkzeuge, mit denen Projekte GESTEUERT statt nur geplant werden:\n\nEARNED-VALUE-ANALYSE beantwortet die Frage "Sind wir im Plan?" mit drei Kennzahlen zum Stichtag: PV (Planned Value: geplanter Wert der bis heute geplanten Arbeit), EV (Earned Value: geplanter Wert der tatsächlich FERTIGEN Arbeit – der "Fertigstellungswert") und AC (Actual Cost: tatsächlich angefallene Kosten). Daraus: SPI = EV ÷ PV (Termintreue: < 1 = hinter dem Zeitplan) und CPI = EV ÷ AC (Kostentreue: < 1 = teurer als geplant). Der Clou gegenüber dem naiven Kostenvergleich: Wer nur AC gegen PV hält, übersieht, WOFÜR das Geld draufging. Beispiel: Plan bis heute 10.000 € (PV), ausgegeben 9.000 € (AC) – klingt gut. Aber fertig ist nur Arbeit im Planwert von 6.000 € (EV): SPI = 0,6 (massiv verspätet), CPI = 0,67 (jeder Euro bringt nur 67 Cent Fortschritt). Prognose: Gesamtkosten ≈ Budget ÷ CPI.\n\nRISIKOMATRIX: Risiken werden nach EINTRITTSWAHRSCHEINLICHKEIT und SCHADENSHÖHE bewertet (je z. B. 1–3 oder gering/mittel/hoch) und im Raster platziert. Risikowert = Wahrscheinlichkeit × Schaden. Die Ecke "wahrscheinlich + teuer" verlangt sofortige Maßnahmen. Vier Umgangsstrategien (Prüfungsklassiker): VERMEIDEN (Ursache eliminieren – andere Technik wählen), VERMINDERN (Wahrscheinlichkeit/Schaden senken – Backup, Redundanz, Schulung), ÜBERTRAGEN (Versicherung, Vertragsklausel, Subunternehmer) und AKZEPTIEREN (bewusst tragen – bei kleinen Restrisiken, dokumentiert!). Zu jedem Top-Risiko gehören Gegenmaßnahme, Verantwortlicher und Frühwarnindikator.',
            },
            { type: "heading", value: "Übungsaufgabe: Projektlage beurteilen" },
            {
              type: "text",
              value:
                'Migration mit 40.000 € Budget. Zum Stichtag: PV 16.000 €, AC 18.000 €, fertiggestellte Arbeitspakete im Planwert von 12.000 €. a) Berechne SPI und CPI und formuliere die Lage in einem Satz. b) Prognostiziere die Gesamtkosten bei gleichbleibendem CPI. c) Das Risiko "Schlüssellieferant fällt aus" wird mit Wahrscheinlichkeit mittel (2) und Schaden hoch (3) bewertet – nenne Risikowert und je eine Maßnahme für zwei verschiedene Strategien.',
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) SPI = 12.000 ÷ 16.000 = 0,75 · CPI = 12.000 ÷ 18.000 = 0,67. Lage: Das Projekt liegt 25 % hinter dem Zeitplan UND jeder ausgegebene Euro erzeugt nur 67 Cent Planwert – Termin- und Kostenproblem zugleich.\nb) Prognose = Budget ÷ CPI = 40.000 ÷ 0,67 ≈ 60.000 € (+50 %!). Gegensteuern statt hoffen.\nc) Risikowert = 2 × 3 = 6 (Top-Feld). Vermindern: zweiten Lieferanten qualifizieren/Lagerpuffer. Übertragen: Vertragsstrafe/SLA mit dem Lieferanten oder Versicherung. (Auch richtig: Vermeiden durch Standardkomponenten statt Exoten.)",
            },
            { type: "heading", value: "Vertiefung: Frühwarnindikatoren" },
            {
              type: "text",
              value:
                "Eine Risikomatrix ohne Frühwarnung ist ein Poster. Zu jedem Top-Risiko gehört ein messbarer Indikator, der VOR dem Eintritt anschlägt: Lieferantenrisiko → Liefertermintreue der letzten Bestellungen; Schlüsselperson fällt aus → Wissensdokumentation < x %; Budgetrisiko → CPI unter 0,9 zwei Berichtszyklen in Folge. So verzahnen sich Earned Value und Risikomanagement zu echter Projektsteuerung.",
            },
          ],
          quiz: [
            {
              id: "imp_lf2-pm-4_g0",
              q: "Wofür steht der Earned Value (EV)?",
              options: [
                "Die tatsächlich angefallenen Kosten",
                "Der geplante Wert der tatsächlich fertiggestellten Arbeit",
                "Das Restbudget",
                "Der Gewinn des Projekts",
              ],
              correct: 1,
              explain:
                "EV misst Fortschritt in Plan-Euros – unabhängig davon, was er gekostet hat.",
            },
            {
              id: "imp_lf2-pm-4_g1",
              q: "SPI = 0,75 bedeutet:",
              options: [
                "Das Projekt ist 25 % unter Budget",
                "Das Projekt liegt 25 % hinter dem Zeitplan",
                "75 % des Budgets sind verbraucht",
                "Das Projekt ist zu 75 % riskant",
              ],
              correct: 1,
              explain: "SPI = EV/PV: nur 75 % der bis heute geplanten Arbeit sind fertig.",
            },
            {
              id: "imp_lf2-pm-4_g2",
              q: "EV 12.000 €, AC 18.000 € – der CPI beträgt …",
              options: ["1,5", "0,75", "0,67", "0,33"],
              correct: 2,
              explain: "12.000 ÷ 18.000 ≈ 0,67 – jeder Euro bringt 67 Cent Planwert.",
            },
            {
              id: "imp_lf2-pm-4_g3",
              q: "Budget 40.000 €, CPI 0,67 – prognostizierte Gesamtkosten?",
              options: ["ca. 26.800 €", "ca. 40.000 €", "ca. 46.000 €", "ca. 60.000 €"],
              correct: 3,
              explain: "Budget ÷ CPI = 40.000 ÷ 0,67 ≈ 60.000 €.",
            },
            {
              id: "imp_lf2-pm-4_g4",
              q: 'Warum reicht der Vergleich "Ausgaben vs. Plan" ohne EV nicht?',
              options: [
                "Er ignoriert, wie viel Arbeit für das Geld tatsächlich fertig wurde",
                "Ausgaben sind nie messbar",
                "Der Plan ändert sich täglich",
                "Er ist mathematisch falsch",
              ],
              correct: 0,
              explain:
                "Wenig ausgegeben kann auch heißen: wenig geschafft – erst EV macht das sichtbar.",
            },
            {
              id: "imp_lf2-pm-4_g5",
              q: "Welche zwei Achsen hat die Risikomatrix?",
              options: [
                "Kosten und Nutzen",
                "Eintrittswahrscheinlichkeit und Schadenshöhe",
                "Zeit und Qualität",
                "Team und Technik",
              ],
              correct: 1,
              explain: "Risikowert = Wahrscheinlichkeit × Schaden.",
            },
            {
              id: "imp_lf2-pm-4_g6",
              q: "Eine Vertragsstrafe mit dem Lieferanten vereinbaren ist die Strategie …",
              options: ["Vermeiden", "Vermindern", "Übertragen", "Akzeptieren"],
              correct: 2,
              explain: "Das finanzielle Risiko wird auf den Vertragspartner verlagert.",
            },
            {
              id: "imp_lf2-pm-4_g7",
              q: "Was gehört zu jedem Top-Risiko in der Matrix?",
              options: [
                "Ein Schuldiger für den Eintrittsfall",
                "Gegenmaßnahme, Verantwortlicher und Frühwarnindikator",
                "Eine Versicherungspolice",
                "Die Unterschrift der Geschäftsführung",
              ],
              correct: 1,
              explain: "Sonst bleibt die Matrix ein Poster ohne Steuerungswirkung.",
            },
          ],
        },
        {
          id: "lf2-pm-1",
          title: "Lastenheft & Pflichtenheft",
          content: [
            { type: "heading", value: "Lastenheft (Auftraggeber/Kunde)" },
            {
              type: "text",
              value:
                "Beschreibt WAS der Kunde will. Inhalte: Ausgangssituation und Problemstellung, Zielsetzung (funktionale + nicht-funktionale Anforderungen), Schnittstellen zu bestehenden Systemen, Rahmenbedingungen (Budget, Zeitrahmen, Technik), Anforderungen an Datenschutz/Sicherheit, Abnahmekriterien. Wird VOR dem Pflichtenheft erstellt. Grundlage für Angebotserstellung.",
            },
            { type: "heading", value: "Pflichtenheft (Auftragnehmer/Dienstleister)" },
            {
              type: "text",
              value:
                "Beschreibt WIE der AN es umsetzt. Inhalte: Technische Lösung (Hardware, Software, Netzwerk), Systemarchitektur und Netzwerkpläne, Detaillierter Zeitplan mit Meilensteinen, Ressourcenplanung (Personal, Material), Testkonzept und Qualitätssicherung, Schulungskonzept, Wartung und Support. Basiert auf dem Lastenheft, ist aber technisch konkret.",
            },
            { type: "heading", value: "Abgrenzung" },
            {
              type: "text",
              value:
                "Lastenheft = Kundensicht (ergebnisorientiert, was soll erreicht werden). Pflichtenheft = Dienstleistersicht (lösungsorientiert, wie wird es umgesetzt). Reihenfolge: Lastenheft -> Pflichtenheft -> Angebot -> Auftrag. Beide Dokumente sind vertragsrelevant!",
            },
            {
              type: "note",
              value:
                "Prüfungsklassiker: 'Wer erstellt was?' und 'Was gehört in welches Dokument?' – Lastenheft kommt vom Kunden, Pflichtenheft vom IT-Dienstleister.",
            },
            { type: "heading", value: "Übungsaufgabe 1: WAS vs. WIE" },
            {
              type: "text",
              value:
                "Wer schreibt das Lastenheft, wer das Pflichtenheft - und was steht jeweils drin?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nLastenheft: vom AUFTRAGGEBER (Kunde). Beschreibt das\nWAS - die Anforderungen/Ziele aus Kundensicht.\nPflichtenheft: vom AUFTRAGNEHMER. Beschreibt das WIE\n- die konkrete technische Umsetzung der Anforderungen.\nMerksatz: Lastenheft = WAS, Pflichtenheft = WIE.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Zuordnung" },
            {
              type: "text",
              value:
                "Ordne zu: a) 'Das System muss 100 Nutzer verwalten.' b) 'Wir setzen einen Windows Server 2022 mit AD ein.'",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) 'muss 100 Nutzer verwalten' = Anforderung/Ziel\n   -> LASTENHEFT (WAS)\nb) 'Windows Server 2022 mit AD' = konkrete\n   Umsetzungslösung -> PFLICHTENHEFT (WIE)",
            },
            { type: "heading", value: "Übungsaufgabe 3: Nutzen" },
            { type: "text", value: "Warum sind Lasten-/Pflichtenheft rechtlich wichtig?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nSie definieren verbindlich den Leistungsumfang.\nBei Streit dienen sie als Vertragsgrundlage und\nMaßstab für die Abnahme (wurde das Geforderte\ngeliefert?). Sie schützen beide Seiten vor\nMissverständnissen und 'Scope Creep'.",
            },
            { type: "heading", value: "Beispiel 1: Lastenheft für Server-Migration" },
            {
              type: "text",
              value:
                "Kunde (Auftraggeber) schreibt Lastenheft: 'Die bestehenden 3 physischen Server sollen in eine virtualisierte Umgebung migriert werden. Anforderungen: Hochverfügbarkeit (99,9%), Backup-Konzept mit RPO 4h, Remote-Zugriff per VPN, Migration ohne Ausfallzeit am Wochenende.' Das Lastenheft beschreibt WAS der Kunde will – nicht WIE es technisch umgesetzt wird.",
            },
            { type: "heading", value: "Beispiel 2: Pflichtenheft als Antwort" },
            {
              type: "text",
              value:
                "IT-Dienstleister (Auftragnehmer) erstellt Pflichtenheft: 'Umsetzung mit VMware vSphere 8 auf 2× Dell PowerEdge R750 im HA-Cluster. Veeam Backup & Replication mit 4h-RPO auf NAS. WireGuard-VPN mit 2FA. Migration per P2V-Konvertierung am Samstag 02:00-06:00 mit vorheriger Testmigration.' Das Pflichtenheft beschreibt WIE der Dienstleister die Anforderungen technisch umsetzt.",
            },
            { type: "heading", value: "Beispiel 3: Abnahmekriterien definieren" },
            {
              type: "text",
              value:
                "Im Pflichtenheft werden messbare Abnahmekriterien festgelegt: 1) Alle VMs erreichbar und funktionsfähig (Ping + Service-Check). 2) Backup läuft automatisch, Restore-Test erfolgreich. 3) VPN-Zugang von extern mit 2FA getestet. 4) Failover-Test: Ein Host fällt aus → VMs laufen automatisch auf dem anderen weiter. Erst wenn alle Kriterien erfüllt sind, erfolgt die Abnahme.",
            },
          ],
          quiz: [
            {
              id: "imp_lf2-pm-1_0",
              q: "Wer erstellt das Lastenheft?",
              options: ["Projektleiter", "Auftragnehmer", "Beide", "Auftraggeber"],
              correct: 3,
              explain: "Lastenheft = Auftraggeber (Kunde).",
            },
            {
              id: "imp_lf2-pm-1_1",
              q: "Was gehört ins Pflichtenheft?",
              options: [
                "Nur der Preis",
                "Technische Lösung und Zeitplan",
                "Nur Kundenwünsche",
                "Nur Testprotokolle",
              ],
              correct: 1,
              explain: "Pflichtenheft = WIE umgesetzt wird (Technik, Architektur, Zeitplan).",
            },
            {
              id: "imp_lf2-pm-1_2",
              q: "Reihenfolge?",
              options: [
                "Lastenheft vor Pflichtenheft",
                "Gleichzeitig",
                "Pflichtenheft vor Lastenheft",
                "Nur eins nötig",
              ],
              correct: 0,
              explain: "Erst Lastenheft (WAS), dann Pflichtenheft (WIE).",
            },
            {
              id: "imp_lf2-pm-1_3",
              q: "Pflichtenheft erstellt wer?",
              options: ["IHK", "Auftragnehmer (IT-Dienstleister)", "Beide", "Kunde"],
              correct: 1,
              explain: "Pflichtenheft = technische Lösung durch den Auftragnehmer.",
            },
            {
              id: "imp_lf2-pm-1_4",
              q: "Was kommt zuerst?",
              options: ["Pflichtenheft", "Lastenheft", "Angebot", "Vertrag"],
              correct: 1,
              explain: "Lastenheft (WAS) → Pflichtenheft (WIE) → Angebot → Vertrag.",
            },
            {
              id: "imp_lf2-pm-1_5",
              q: "Lastenheft enthält?",
              options: [
                "Die Testprotokolle der abgeschlossenen Abnahme",
                "Die detaillierte technische Lösung des Auftragnehmers",
                "Den kommentierten Quellcode der Implementierung",
                "Anforderungen und Rahmenbedingungen des Kunden",
              ],
              correct: 3,
              explain: "WAS will der Kunde? Anforderungen, Budget, Zeitrahmen.",
            },
            {
              id: "imp_lf2-pm-1_6",
              q: "Abnahmekriterien stehen in?",
              options: [
                "Nur im Vertrag",
                "Nur mündlich",
                "Lastenheft und Pflichtenheft",
                "Projektplan",
              ],
              correct: 2,
              explain: "Abnahmekriterien müssen VOR Projektstart definiert sein.",
            },
            {
              id: "imp_lf2-pm-1_7",
              q: "Lastenheft: Wer schreibt?",
              options: ["Kunde/Auftraggeber", "IT-Dienstleister", "IHK", "Beide gemeinsam"],
              correct: 0,
              explain: "Lastenheft = Kundensicht, Auftraggeber schreibt.",
            },
            {
              id: "imp_lf2-pm-1_8",
              q: "Pflichtenheft enthält?",
              options: [
                "Technische Lösung, Zeitplan, Architektur",
                "Nur Preis",
                "Nur Wünsche",
                "Nur AGB",
              ],
              correct: 0,
              explain: "WIE wird umgesetzt: Technik, Zeitplan, Ressourcen.",
            },
            {
              id: "imp_lf2-pm-1_9",
              q: "Vertragsrelevant?",
              options: [
                "Nur Lastenheft",
                "Beide (Lastenheft + Pflichtenheft)",
                "Keines",
                "Nur Pflichtenheft",
              ],
              correct: 1,
              explain: "Beide Dokumente sind vertragsrelevant!",
            },
            {
              id: "imp_lf2-pm-1_10",
              q: "Wer erstellt das Pflichtenheft?",
              options: [
                "Der Auftraggeber",
                "Das Gericht",
                "Der Betriebsrat",
                "Der Auftragnehmer (Dienstleister)",
              ],
              correct: 3,
              explain:
                "Pflichtenheft = Auftragnehmer beschreibt, WIE er die Anforderungen umsetzt.",
            },
            {
              id: "imp_lf2-pm-1_11",
              q: "Was beschreibt das Lastenheft?",
              options: [
                "Den Projektplan",
                "Die technische Lösung",
                "Die Kosten",
                "Die Anforderungen des Kunden (WAS)",
              ],
              correct: 3,
              explain:
                "Lastenheft = WAS soll erreicht werden? (Anforderungen, Rahmenbedingungen, Ziele).",
            },
            {
              id: "imp_lf2-pm-1_12",
              q: "Was ist der Unterschied zwischen funktionalen und nicht-funktionalen Anforderungen?",
              options: [
                "Kein Unterschied",
                "Funktional = Was das System tun soll, Nicht-funktional = Wie gut",
                "Funktional = Hardware, Nicht-funktional = Software",
                "Funktional = optional, Nicht-funktional = Pflicht",
              ],
              correct: 1,
              explain:
                "Funktional: Was (Features). Nicht-funktional: Wie gut (Performance, Verfügbarkeit, Sicherheit).",
            },
            {
              id: "imp_lf2-pm-1_13",
              q: "Welches Dokument wird nach Kundenabnahme typischerweise Vertragsbestandteil für die technische Umsetzung?",
              options: ["Das Angebot allein", "Keines", "Das Pflichtenheft", "Nur das Lastenheft"],
              correct: 2,
              explain:
                "Das vom Kunden abgenommene Pflichtenheft wird typischerweise Vertragsbestandteil und ist die verbindliche Grundlage der technischen Umsetzung.",
            },
            {
              id: "imp_lf2-pm-1_14",
              q: "Was gehört NICHT in ein Lastenheft?",
              options: [
                "Konkrete technische Lösung (Produktnamen)",
                "Qualitätsanforderungen",
                "Anforderungen",
                "Rahmenbedingungen",
              ],
              correct: 0,
              explain: "Technische Lösungsdetails gehören ins Pflichtenheft, nicht ins Lastenheft.",
            },
            {
              id: "imp_lf2-pm-1_15",
              q: "Was bedeutet RPO?",
              options: [
                "Remote Protocol Output",
                "Redundant Power Output",
                "Recovery Process Order",
                "Recovery Point Objective",
              ],
              correct: 3,
              explain:
                "Max. akzeptabler Datenverlust. RPO = max. Zeitspanne an Datenverlust. RPO 4h = max. 4 Stunden Datenverlust akzeptabel.",
            },
            {
              id: "imp_lf2-pm-1_16",
              q: "Was bedeutet RTO?",
              options: [
                "Recovery Test Operation",
                "Real Time Output",
                "Redundant Transfer Object",
                "Recovery Time Objective",
              ],
              correct: 3,
              explain:
                "Max. Ausfallzeit bis Wiederherstellung. RTO = max. akzeptable Ausfallzeit. RTO 2h = System muss innerhalb 2h wieder laufen.",
            },
            {
              id: "imp_lf2-pm-1_17",
              q: "Was passiert nach Pflichtenheft-Erstellung?",
              options: [
                "Nichts",
                "Lastenheft wird gelöscht",
                "Projekt startet sofort",
                "Kunde prüft und nimmt das Pflichtenheft ab",
              ],
              correct: 3,
              explain:
                "Kunde prüft ob Pflichtenheft seine Anforderungen (Lastenheft) vollständig abdeckt → Abnahme → Umsetzung.",
            },
            {
              id: "imp_lf2-pm-1_18",
              q: "Was ist ein Abnahmekriterium?",
              options: [
                "Messbare Bedingung, die für die Projektabnahme erfüllt sein muss",
                "Ein Vertragspassus, der ausschließlich Zahlungsfristen und Haftung regelt",
                "Ein Qualitätszertifikat, das eine externe Prüfstelle dem Produkt verleiht",
                "Ein unverbindlicher Wunsch des Kunden ohne Bedeutung für die Abnahme",
              ],
              correct: 0,
              explain:
                "Abnahmekriterien = objektiv prüfbare Bedingungen für die erfolgreiche Projektübergabe.",
            },
            {
              id: "imp_lf2-pm-1_19",
              q: "Was ist der Unterschied zwischen Aufwandsschätzung und Kostenplanung?",
              options: [
                "Der Aufwand ist stets teurer als die geplanten Kosten des Projekts",
                "Es gibt keinen Unterschied, beide Begriffe bezeichnen dieselbe Kennzahl",
                "Aufwand = Personentage/Stunden, Kosten = Aufwand × Stundensatz + Material + Lizenzen",
                "Die Kostenplanung erfolgt immer vor der Aufwandsschätzung und ersetzt diese",
              ],
              correct: 2,
              explain:
                "Aufwandsschätzung: Wie viele Stunden/Tage? Kostenplanung: Was kostet es? (Aufwand × Tagessatz + Hardware + Lizenzen + Reisekosten).",
            },
          ],
        },
        {
          id: "lf2-pm-2",
          title: "Projektphasen, PSP, Gantt & Netzplan",
          content: [
            { type: "heading", value: "5 Projektphasen" },
            {
              type: "text",
              value:
                "1. Initiierung: Projektauftrag, Ziele definieren, Machbarkeit prüfen. 2. Planung: PSP, Zeitplan, Ressourcen, Kosten, Risikoanalyse. 3. Durchführung: Arbeitspakete abarbeiten, Zwischenergebnisse. 4. Überwachung: Soll-Ist-Vergleich, Meilensteine prüfen, ggf. nachsteuern. 5. Abschluss: Abnahme, Dokumentation, Lessons Learned.",
            },
            { type: "heading", value: "PSP (Projektstrukturplan)" },
            {
              type: "text",
              value:
                "Hierarchische Gliederung des Gesamtprojekts in Teilprojekte und Arbeitspakete. Oberste Ebene: Projektname. Zweite Ebene: Teilprojekte (Planung, Beschaffung, Installation, Test). Dritte Ebene: Arbeitspakete (konkrete Aufgaben mit Verantwortlichem, Dauer, Kosten). Jedes Arbeitspaket muss eindeutig zuordenbar und messbar sein.",
            },
            { type: "heading", value: "Gantt-Diagramm" },
            {
              type: "text",
              value:
                "Zeitbalken-Darstellung: Jedes Arbeitspaket als horizontaler Balken auf Zeitachse. Zeigt Abhängigkeiten (Ende-Anfang, Anfang-Anfang). Meilensteine als Raute. Kritischer Pfad farblich hervorgehoben.",
            },
            { type: "heading", value: "Netzplan-Berechnung (FAZ/FEZ/SAZ/SEZ)" },
            {
              type: "text",
              value:
                "Vorwärtsrechnung: FAZ (Frühester Anfang) = größter FEZ aller Vorgänger. FEZ = FAZ + Dauer. Rückwärtsrechnung: SEZ (Spätestes Ende) = kleinster SAZ aller Nachfolger. SAZ = SEZ - Dauer. Gesamtpuffer (GP) = SAZ - FAZ (oder SEZ - FEZ). Kritischer Pfad: Alle Vorgänge mit Puffer = 0. Bestimmt die Mindestprojektdauer.",
            },
            {
              type: "note",
              value:
                "Netzplan-Berechnung kommt regelmäßig in AP1. Schema: Vorwärts (FAZ->FEZ), dann Rückwärts (SEZ->SAZ), dann Puffer berechnen.",
            },
            { type: "heading", value: "Durchgerechnetes Beispiel: Netzplan" },
            {
              type: "text",
              value:
                "Vorgänge: A(3 Tage, kein Vorgänger), B(5, nach A), C(2, nach A), D(4, nach B und C). Berechne FAZ, FEZ, SAZ, SEZ, Gesamt- und Freipuffer sowie den kritischen Pfad.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nVorwärtsrechnung (FAZ=früh. Anfang, FEZ=früh. Ende):\n A: FAZ=0  FEZ=0+3=3\n B: FAZ=3  FEZ=3+5=8\n C: FAZ=3  FEZ=3+2=5\n D: FAZ=max(8,5)=8  FEZ=8+4=12  → Projektdauer 12 Tage\n\nRückwärtsrechnung (SEZ=spät. Ende, SAZ=spät. Anfang):\n D: SEZ=12  SAZ=12-4=8\n B: SEZ=8   SAZ=8-5=3\n C: SEZ=8   SAZ=8-2=6\n A: SEZ=min(3,6)=3  SAZ=3-3=0\n\nGesamtpuffer GP = SAZ-FAZ:\n A=0, B=0, C=6-3=3, D=0\n\nKritischer Pfad (GP=0): A → B → D (12 Tage)\nVorgang C hat 3 Tage Puffer.",
            },
            { type: "heading", value: "Übungsaufgabe Netzplan" },
            {
              type: "text",
              value:
                "Vorgänge: A(2, Start), B(4, nach A), C(6, nach A), D(3, nach B und C). Bestimme Projektdauer und kritischen Pfad. Versuch es selbst, dann Lösung lesen.",
            },
            {
              type: "solution",
              value:
                "LÖSUNG:\nVorwärts: A FEZ=2; B FEZ=2+4=6; C FEZ=2+6=8;\n         D FAZ=max(6,8)=8, FEZ=8+3=11\nProjektdauer: 11 Tage\nKritischer Pfad: A → C → D (GP=0)\nB hat Puffer: SAZ(B)=8-4=4, FAZ(B)=2 → GP=2",
            },
            { type: "heading", value: "Übungsaufgabe 3: Gantt vs. Netzplan" },
            { type: "text", value: "Wann nutzt du ein Gantt-Diagramm, wann einen Netzplan?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nGantt-Diagramm: Balken auf einer Zeitachse - gut zur\nÜbersicht/Visualisierung von Dauer und Terminen.\nNetzplan: zeigt Abhängigkeiten zwischen Vorgängen\nund berechnet den kritischen Pfad und Puffer.\nNetzplan = Analyse der Abhängigkeiten, Gantt =\nanschauliche Terminplanung. Oft kombiniert.",
            },
            { type: "heading", value: "Beispiel 1: Netzplan berechnen (AP1-Dauerbrenner)" },
            {
              type: "text",
              value:
                "Vorgänge: A(2d)→B(3d)→D(5d)→F(2d) und A(2d)→C(4d)→E(3d)→F(2d). Vorwärtsrechnung: FAZ(A)=0, FEZ(A)=2. FAZ(B)=2, FEZ(B)=5. FAZ(C)=2, FEZ(C)=6. FAZ(D)=5, FEZ(D)=10. FAZ(E)=6, FEZ(E)=9. FAZ(F)=max(10,9)=10, FEZ(F)=12. Rückwärtsrechnung: SEZ(F)=12, SAZ(F)=10. Kritischer Pfad: A→B→D→F (GP=0 überall). Projektdauer: 12 Tage.",
            },
            { type: "heading", value: "Beispiel 2: Gantt-Diagramm für Netzwerk-Rollout" },
            {
              type: "text",
              value:
                "Phase 1 (KW1-2): Planung (Bestandsaufnahme, Anforderungen). Phase 2 (KW2-3): Beschaffung (Hardware bestellen). Phase 3 (KW3-5): Installation (Verkabelung, Switch-Konfiguration). Phase 4 (KW5): Test (Netzwerk-Check, Lasttest). Phase 5 (KW5-6): Dokumentation + Übergabe. Im Gantt sieht man: Phase 2 und 3 überlappen (Kabel verlegen während Hardware kommt). Phase 4 beginnt erst nach Phase 3 (Abhängigkeit).",
            },
            { type: "heading", value: "Beispiel 3: Projektstrukturplan (PSP) erstellen" },
            {
              type: "text",
              value:
                "Projekt 'Büro-Umzug IT': Level 1 = Gesamtprojekt. Level 2 = Arbeitspakete: 1.Netzwerk, 2.Arbeitsplätze, 3.Server, 4.Telefonie. Level 3 = Teilaufgaben: 1.1 Kabel verlegen, 1.2 Switches konfigurieren, 1.3 WLAN einrichten. 2.1 PCs aufbauen, 2.2 Software installieren, 2.3 Drucker einrichten. Der PSP zeigt ALLE Aufgaben hierarchisch – nichts wird vergessen.",
            },
          ],
          quiz: [
            {
              id: "imp_lf2-pm-2_0",
              q: "Kritischer Pfad = ?",
              options: [
                "Meiste Risiken",
                "Meiste Mitarbeiter",
                "Teuerster Teil",
                "Längste Abhängigkeitskette (Puffer=0)",
              ],
              correct: 3,
              explain: "Alle Vorgänge mit Puffer 0 = längste Kette = Mindestdauer.",
            },
            {
              id: "imp_lf2-pm-2_1",
              q: "GP = SAZ - FAZ. Was bedeutet GP = 0?",
              options: [
                "Vorgang ist optional",
                "Vorgang hat Puffer",
                "Vorgang ist abgeschlossen",
                "Vorgang liegt auf kritischem Pfad",
              ],
              correct: 3,
              explain: "Gesamtpuffer 0 = kritischer Pfad, keine Verschiebung möglich.",
            },
            {
              id: "imp_lf2-pm-2_2",
              q: "FEZ berechnen?",
              options: ["FAZ + Dauer", "FEZ - FAZ", "SEZ - Dauer", "SAZ - FAZ"],
              correct: 0,
              explain: "FEZ = FAZ + Dauer.",
            },
            {
              id: "imp_lf2-pm-2_3",
              q: "SAZ berechnen?",
              options: ["SEZ - Dauer", "FAZ - Dauer", "FAZ + Dauer", "FEZ + Puffer"],
              correct: 0,
              explain: "SAZ = SEZ - Dauer (Rückwärtsrechnung).",
            },
            {
              id: "imp_lf2-pm-2_4",
              q: "Meilenstein im Gantt?",
              options: ["Raute (Dauer = 0, wichtiges Ereignis)", "Pfeil", "Kreis", "Langer Balken"],
              correct: 0,
              explain: "Meilenstein: Wichtiges Ereignis ohne Dauer, als Raute dargestellt.",
            },
            {
              id: "imp_lf2-pm-2_5",
              q: "Puffer = 0: Was bedeutet das?",
              options: [
                "Fehler",
                "Vorgang liegt auf dem kritischen Pfad",
                "Nicht kritisch",
                "Vorgang abgeschlossen",
              ],
              correct: 1,
              explain:
                "Kein Puffer = kritischer Pfad = Verzögerung wirkt sich direkt auf Projektdauer aus.",
            },
            {
              id: "imp_lf2-pm-2_6",
              q: "Gantt: Abhängigkeit EA?",
              options: [
                "Anfang-Ende",
                "Ende-Anfang (Standardabhängigkeit)",
                "Ende-Ende",
                "Start-Start",
              ],
              correct: 1,
              explain: "EA: Aufgabe B startet erst wenn A endet (häufigste Abhängigkeit).",
            },
            {
              id: "imp_lf2-pm-2_7",
              q: "Vorwärtsrechnung: FEZ = ?",
              options: ["SAZ-Puffer", "FAZ + Dauer", "FAZ-Dauer", "SEZ-Dauer"],
              correct: 1,
              explain: "FEZ = Frühester Anfang + Dauer.",
            },
            {
              id: "imp_lf2-pm-2_8",
              q: "Rückwärtsrechnung beginnt?",
              options: [
                "Am Ende (letzter Vorgang, SEZ = FEZ)",
                "Egal",
                "In der Mitte",
                "Am Anfang",
              ],
              correct: 0,
              explain: "Rückwärts: Start am Ende, SEZ des letzten = FEZ des letzten.",
            },
            {
              id: "imp_lf2-pm-2_9",
              q: "Freier Puffer?",
              options: ["SAZ-FAZ", "SEZ-SAZ", "FAZ(Nachfolger) - FEZ(aktuell)", "Immer 0"],
              correct: 2,
              explain:
                "Freier Puffer: Wie viel kann Vorgang verschoben werden ohne Nachfolger zu verzögern.",
            },
            {
              id: "imp_lf2-pm-2_10",
              q: "Was berechnet man mit der Vorwärtsrechnung im Netzplan?",
              options: [
                "Die Gesamtkosten entlang des kritischen Pfads",
                "Den Personalaufwand je Vorgang in Personentagen",
                "FAZ und FEZ (früheste Anfangs-/Endzeitpunkte)",
                "SAZ und SEZ (späteste Anfangs-/Endzeitpunkte)",
              ],
              correct: 2,
              explain: "Vorwärtsrechnung: FAZ und FEZ berechnen (frühestmögliche Termine).",
            },
            {
              id: "imp_lf2-pm-2_11",
              q: "Was ist der kritische Pfad?",
              options: [
                "Ein optionaler Pfad",
                "Der längste Weg",
                "Der teuerste Weg",
                "Der kürzeste Weg",
              ],
              correct: 1,
              explain:
                "Vorgänge mit Gesamtpuffer = 0. Kritischer Pfad = längster Weg durch den Netzplan. Verzögerung hier verzögert das gesamte Projekt.",
            },
            {
              id: "imp_lf2-pm-2_12",
              q: "Wie berechnet man den Gesamtpuffer (GP)?",
              options: [
                "SAZ - FAZ (oder SEZ - FEZ)",
                "FAZ - FEZ",
                "FEZ + SAZ",
                "Projektdauer / Anzahl Vorgänge",
              ],
              correct: 0,
              explain:
                "GP = SAZ - FAZ = SEZ - FEZ. GP = 0 bedeutet: Vorgang liegt auf dem kritischen Pfad.",
            },
            {
              id: "imp_lf2-pm-2_13",
              q: "Was zeigt ein Gantt-Diagramm?",
              options: [
                "Netzwerkstruktur",
                "Hierarchie der Arbeitspakete",
                "Vorgänge als Balken auf einer Zeitachse",
                "Kosten pro Vorgang",
              ],
              correct: 2,
              explain:
                "Gantt = Balkendiagramm: Vorgänge als horizontale Balken über der Zeitachse, mit Abhängigkeiten.",
            },
            {
              id: "imp_lf2-pm-2_14",
              q: "Was ist ein Meilenstein?",
              options: [
                "Ein Ereignis mit Dauer 0",
                "Ein normaler Vorgang",
                "Eine Kostenstelle",
                "Ein Risiko",
              ],
              correct: 0,
              explain:
                "Markiert wichtigen Projektzeitpunkt. Meilenstein = definiertes Zwischenergebnis (z.B. 'Netzwerk betriebsbereit'), Dauer = 0 Tage.",
            },
            {
              id: "imp_lf2-pm-2_15",
              q: "Was ist der PSP?",
              options: [
                "Projekt-Steuerungs-Plan",
                "Projektstrukturplan",
                "Personal-Staffel-Plan",
                "Projekt-Sicherheits-Protokoll",
              ],
              correct: 1,
              explain:
                "Hierarchische Gliederung aller Aufgaben. PSP = Projektstrukturplan: Gliedert das Projekt top-down in Arbeitspakete.",
            },
            {
              id: "imp_lf2-pm-2_16",
              q: "Vorgang B (Dauer 3d) kann frühestens an Tag 5 starten. FEZ(B)?",
              options: ["8", "5", "15", "3"],
              correct: 0,
              explain: "FAZ(B)=5, Dauer=3 → FEZ(B) = FAZ + Dauer = 5 + 3 = 8.",
            },
            {
              id: "imp_lf2-pm-2_17",
              q: "Was ist der freie Puffer (FP)?",
              options: [
                "Unbezahlte Arbeitszeit",
                "Die Zeit zwischen zwei Meilensteinen",
                "Wie weit ein Vorgang verschoben werden kann, ohne das Projektende zu gefährden",
                "Wie weit ein Vorgang verschoben werden kann, ohne den Nachfolger zu verzögern",
              ],
              correct: 3,
              explain:
                "FP = FAZ(Nachfolger) - FEZ(aktueller Vorgang). Maximale Verzögerung ohne Einfluss auf Nachfolger.",
            },
            {
              id: "imp_lf2-pm-2_18",
              q: "Welche Methode visualisiert Abhängigkeiten am besten?",
              options: [
                "Gantt-Diagramm",
                "Netzplan (Vorgangsknotennetzplan)",
                "To-Do-Liste",
                "PSP",
              ],
              correct: 1,
              explain:
                "Netzplan: Zeigt Abhängigkeiten, kritischen Pfad, Pufferzeiten – besser als Gantt für Abhängigkeitsanalyse.",
            },
            {
              id: "imp_lf2-pm-2_19",
              q: "Vorgang auf dem krit. Pfad verzögert sich um 3 Tage. Was passiert?",
              options: [
                "Nichts",
                "Projekt verzögert sich um genau 3 Tage",
                "Nur der nächste Vorgang verzögert sich",
                "Das Projekt wird abgebrochen",
              ],
              correct: 1,
              explain: "Kritischer Pfad: Jede Verzögerung wirkt sich 1:1 auf das Projektende aus.",
            },
          ],
        },
        {
          id: "lf2-pm-3",
          title: "Projektstart: Machbarkeit, Vor-/Nachkalkulation & Stakeholder",
          content: [
            {
              type: "text",
              value:
                "Bevor ein Projekt startet, fallen drei Fragen an: Können wir das überhaupt (Machbarkeit)? Was wird es kosten (Vorkalkulation)? Und wer redet alles mit (Stakeholder)? Genau diese Werkzeuge fragt die AP1 gern im Szenario ab – meist verbunden mit einer Risikobewertung. Nach Projektende schließt die Nachkalkulation den Kreis.",
            },
            { type: "heading", value: "Machbarkeitsanalyse" },
            {
              type: "text",
              value:
                "Die Machbarkeitsanalyse prüft VOR der Zusage, ob das Vorhaben unter den gegebenen Rahmenbedingungen realistisch ist. Geprüft wird in vier Dimensionen: technisch (Sind Infrastruktur, Know-how und Technologie vorhanden oder beschaffbar?), wirtschaftlich (Passt es ins Budget? Stimmt das Kosten-Nutzen-Verhältnis inklusive Risikoreserve?), zeitlich (Ist der Termin mit den verfügbaren Ressourcen haltbar – Stichwort kritischer Pfad und Puffer?) und rechtlich-organisatorisch (Datenschutz, Lizenzfragen, Mitbestimmung des Betriebsrats, betroffene Prozesse). Das Budget wirkt dabei als harte Grenze: Passt das Vorhaben nicht hinein, bleiben nur Umfang reduzieren, Budget erhöhen oder Termin verschieben – das berühmte magische Dreieck.",
            },
            { type: "heading", value: "Vorkalkulation und Nachkalkulation" },
            {
              type: "list",
              value: [
                "Vorkalkulation (vor Projektstart): schätzt Kosten und stützt die Preisbildung. Bestandteile: Kostenarten (Personal, Material/Hardware, externe Dienstleister, Lizenzen), Ressourcen- und Zeitplanung (Personentage × Stundensatz!) sowie ein Risikozuschlag für Unvorhergesehenes.",
                "Nachkalkulation (nach Projektende): vergleicht Ist-Kosten mit der Vorkalkulation. Leitfragen: Wo gab es Mehr-/Minderkosten und warum? War das Projekt wirtschaftlich? Die begründete Abweichungsanalyse fließt in die Lessons Learned und macht künftige Kalkulationen präziser.",
                "Beispielrechnung: Rollout von 25 Clients – 12 PT à 480 € (5.760 €) + Hardware 25 × 950 € (23.750 €) + 8 % Risikozuschlag auf die Dienstleistung (461 €) ≈ 29.971 € Angebotsbasis. Ist es am Ende bei 14 PT geblieben, erklärt die Nachkalkulation die 2 Mehr-PT (z. B. defekte Dockingstations) und beziffert die Abweichung (+960 €).",
              ],
            },
            { type: "heading", value: "Stakeholderanalyse" },
            {
              type: "text",
              value:
                "Stakeholder sind alle, die ein Interesse am Projekt haben oder von ihm betroffen sind – vom Auftraggeber über die Fachabteilung bis zum Betriebsrat. Für jeden werden Einstellung (positiv/neutral/negativ), Erwartungen und Befürchtungen erfasst; nach Einfluss und Interesse priorisiert man die Kommunikation. Beispiel Client-Rollout: Geschäftsführung (positiv – erwartet Produktivität, fürchtet Kosten), Anwender (gemischt – erwarten schnellere Rechner, fürchten Umgewöhnung), IT-Support (positiv – fürchtet Ticketwelle in der Umstellungswoche), Betriebsrat (neutral – achtet auf Mitbestimmung bei Software mit Leistungsbezug). Aus jeder Befürchtung folgt eine Maßnahme: Schulung, frühzeitige Information, Pilotgruppe, BR-Beteiligung.",
            },
            { type: "heading", value: "Risikoanalyse & PSP-Ansätze kompakt" },
            {
              type: "list",
              value: [
                "Risiken bewerten: Eintrittswahrscheinlichkeit × Auswirkung → Matrix. Hohe Risiken: vermeiden, vermindern oder übertragen (z. B. Versicherung/Vertragsstrafe); kleine Risiken bewusst akzeptieren. Je Top-Risiko: Verantwortlichen, Auslöser (Trigger) und Gegenmaßnahme festlegen.",
                "Projektstrukturplan aufstellen: Top-down (vom Ganzen zu den Arbeitspaketen – Standard bei klarer Zielstruktur), Bottom-up (aus bekannten Arbeitspaketen zusammensetzen – gut bei viel Erfahrungswissen im Team) oder im Gegenstromverfahren beides kombiniert.",
                "Abgrenzung: Die Machbarkeitsanalyse entscheidet OB, der PSP strukturiert WAS, Netzplan/Gantt planen WANN, die Kalkulation beziffert WOFÜR wie viel.",
              ],
            },
            { type: "heading", value: "Übungsaufgabe (AP1-Stil)" },
            {
              type: "text",
              value:
                "Deine Firma soll für eine Arztpraxis (8 Arbeitsplätze) die Umstellung auf eine neue Praxissoftware anbieten; Budgetvorgabe 20.000 €, Termin: vor dem Quartalswechsel in 6 Wochen. a) Prüfe die Machbarkeit entlang der vier Dimensionen – je ein konkreter Prüfpunkt. b) Erstelle eine grobe Vorkalkulation (Positionen mit realistischen Ansätzen, Summe ≤ Budget). c) Nenne drei Stakeholder mit je einer Erwartung UND einer Befürchtung. d) Nenne das größte Terminrisiko und eine Gegenmaßnahme.",
            },
            {
              type: "solution",
              value:
                "a) Technisch: Erfüllen die vorhandenen Rechner die Systemvoraussetzungen der neuen Software? Wirtschaftlich: Passen Lizenzen + Dienstleistung + Schulung in 20.000 € inkl. Reserve? Zeitlich: Sind Datenmigration und Schulung in 6 Wochen neben dem Praxisbetrieb möglich (Abend-/Wochenendfenster)? Rechtlich-organisatorisch: Patientendaten = besondere Kategorien nach Art. 9 DSGVO → AV-Vertrag mit dem Softwareanbieter, Datenmigration datenschutzkonform.\nb) Beispiel: Lizenzen 8 × 600 € = 4.800 € · Migration/Installation 10 PT × 480 € = 4.800 € · Schulung 2 × 4 h Pauschale 1.600 € · Altdaten-Export durch Hersteller 2.500 € · Risikozuschlag ca. 10 % ≈ 1.400 € → Summe ≈ 15.100 € – Budget hält mit Reserve.\nc) Praxisinhaber: erwartet reibungslosen Umstieg / fürchtet Praxisausfall. MFA-Team: erwartet einfachere Abläufe / fürchtet Umgewöhnung unter Zeitdruck. Softwarehersteller: erwartet Referenzkunden / fürchtet Altdaten-Chaos. (Auch möglich: Patienten, Datenschutzbeauftragter.)\nd) Größtes Risiko: Datenmigration scheitert oder dauert länger als das Wochenendfenster → Gegenmaßnahme: Testmigration mit Echtdaten-Kopie vorab, Rückfallplan (Altsystem lesend weiterbetreiben), Puffertermin vor dem Quartalswechsel einplanen.",
            },
            {
              type: "links",
              value: [
                [
                  "Wikipedia: Machbarkeitsstudie",
                  "https://de.wikipedia.org/wiki/Machbarkeitsstudie",
                ],
                [
                  "Wikipedia: Stakeholderanalyse",
                  "https://de.wikipedia.org/wiki/Stakeholderanalyse",
                ],
              ],
            },
          ],
          quiz: [
            {
              id: "imp_lf2-pm-3_0",
              q: "In welchen vier Dimensionen prüft die Machbarkeitsanalyse?",
              options: [
                "Hardware, Software, Netzwerkinfrastruktur und Cloud-Dienste",
                "Technisch, wirtschaftlich, zeitlich, rechtlich-organisatorisch",
                "Kosten, Umsatz, Gewinn und Rendite des geplanten Projekts",
                "Plan, Do, Check und Act nach dem Deming-Zyklus",
              ],
              correct: 1,
              explain:
                "Können wir es technisch? Passt es ins Budget? Hält der Termin? Und gibt es rechtliche/organisatorische Hürden (Datenschutz, Betriebsrat)?",
            },
            {
              id: "imp_lf2-pm-3_1",
              q: "Was unterscheidet Vor- und Nachkalkulation?",
              options: [
                "Es gibt keinen Unterschied; beide Begriffe bezeichnen dieselbe Kalkulation",
                "Vorkalkulation schätzt vor Projektstart (Preisbasis), Nachkalkulation vergleicht danach Ist mit Plan",
                "Die Nachkalkulation ergibt grundsätzlich niedrigere Kosten als die Vorkalkulation",
                "Die Vorkalkulation erstellt stets der Kunde und übergibt sie dem Auftragnehmer",
              ],
              correct: 1,
              explain:
                "Vorher schätzen und anbieten – nachher Abweichungen analysieren und daraus lernen (Lessons Learned, bessere künftige Angebote).",
            },
            {
              id: "imp_lf2-pm-3_2",
              q: "Ein Stakeholder hat großen Einfluss und steht dem Projekt negativ gegenüber. Was ist die richtige Konsequenz?",
              options: [
                "Nicht reagieren und erst tätig werden, wenn er sich offiziell beschwert",
                "Aktiv einbinden: Befürchtungen ernst nehmen, früh informieren, Maßnahmen ableiten",
                "Ihn aus allen Verteilern und Terminen entfernen, um Störungen zu vermeiden",
                "Das Projekt vorsorglich sofort abbrechen, bevor Widerstand entsteht",
              ],
              correct: 1,
              explain:
                "Einflussreiche Kritiker sind das größte Projektrisiko – enge Kommunikation und gezielte Maßnahmen gegen ihre Befürchtungen sind Pflicht.",
            },
            {
              id: "imp_lf2-pm-3_3",
              q: "Welche vier Strategien gibt es im Umgang mit bewerteten Risiken?",
              options: [
                "Vermeiden, vermindern, übertragen, akzeptieren",
                "Löschen, kopieren, einfügen, sichern",
                "Planen, testen, dokumentieren, übergeben",
                "Eskalieren, delegieren, priorisieren, archivieren",
              ],
              correct: 0,
              explain:
                "Je nach Lage: Risiko umgehen, Wahrscheinlichkeit/Schaden senken, auf Dritte übertragen (Versicherung, Vertrag) oder bewusst tragen.",
            },
          ],
        },
      ],
    },
    {
      id: "lf2-norm",
      title: "Normen, Kennzeichnungen & Übergabe",
      lessons: [
        {
          id: "lf2-no-1",
          title: "Normen, Zertifikate & Übergabeprotokoll",
          content: [
            { type: "heading", value: "Wichtige Kennzeichnungen" },
            {
              type: "text",
              value:
                "CE-Kennzeichnung: Hersteller erklärt Konformität mit EU-Richtlinien. Pflicht für viele Produkte im EU-Binnenmarkt. GS-Zeichen: Geprüfte Sicherheit, freiwillig, durch unabhängige Stelle (z. B. TÜV). RoHS: Restriction of Hazardous Substances – beschränkt gefährliche Stoffe (Blei, Quecksilber) in Elektrogeräten. WEEE/ElektroG: Elektroaltgeräte müssen fachgerecht entsorgt/recycelt werden. Energy Star: Energieeffizienz-Kennzeichnung für IT-Geräte. EU-Energielabel: Effizienzklassen A-G.",
            },
            { type: "heading", value: "IT-relevante Normen" },
            {
              type: "text",
              value:
                "DIN EN ISO 9001: Qualitätsmanagement. ISO/IEC 27001: Informationssicherheits-Management. ISO/IEC 11801: Strukturierte Verkabelung. IEEE 802.3: Ethernet-Standards. IEEE 802.11: WLAN-Standards. DIN 66399: Vernichtung von Datenträgern (Schutzklassen 1-3, Sicherheitsstufen 1-7).",
            },
            { type: "heading", value: "Übergabeprotokoll erstellen" },
            {
              type: "text",
              value:
                "Dokumentiert die Übergabe des fertig eingerichteten Arbeitsplatzes an den Kunden. Inhalte: Datum, beteiligte Personen, übergebene Komponenten (Seriennummern!), durchgeführte Konfiguration, installierte Software, Netzwerkeinbindung, Funktionstest-Ergebnisse, Einweisung erfolgt ja/nein, bekannte Einschränkungen, Unterschriften beider Seiten.",
            },
            {
              type: "note",
              value:
                "Prüfungsrelevant: CE ist KEINE Qualitätsprüfung, sondern eine Herstellererklärung! GS ist die unabhängige Prüfung.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Übergabeprotokoll" },
            { type: "text", value: "Welche Angaben gehören in ein Übergabeprotokoll beim Kunden?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nDatum, beteiligte Personen, übergebene Komponenten\n(mit Seriennummern), durchgeführte Konfiguration,\ninstallierte Software, Ergebnis des Funktionstests,\nEinweisung (ja/nein), bekannte Einschränkungen,\nUnterschriften beider Seiten. Dient als Nachweis\nund Beginn von Gewährleistungsfristen.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Normen" },
            { type: "text", value: "Wofür stehen DIN, EN und ISO?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nDIN: Deutsches Institut für Normung (national).\nEN: Europäische Norm (europaweit gültig).\nISO: International Organization for Standardization\n(international). Eine Norm kann mehrstufig gelten,\nz.B. DIN EN ISO 9001 (Qualitätsmanagement).",
            },
            { type: "heading", value: "Übungsaufgabe 3: CE" },
            { type: "text", value: "Was bedeutet das CE-Kennzeichen auf Hardware?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nCE = der Hersteller erklärt, dass das Produkt die\ngeltenden EU-Richtlinien (Sicherheit, EMV etc.)\neinhält und im Europäischen Wirtschaftsraum\nverkauft werden darf. Es ist KEIN Qualitätssiegel,\nsondern eine Konformitätserklärung.",
            },
            { type: "heading", value: "Beispiel 1: CE-Kennzeichnung im IT-Einkauf" },
            {
              type: "text",
              value:
                "Beim Kauf von Netzteilen, Monitoren, USB-Hubs muss das CE-Zeichen vorhanden sein – es besagt, dass das Produkt EU-Richtlinien einhält (EMV, Niederspannung). Achtung: CE ist eine Selbsterklärung des Herstellers, KEIN Prüfsiegel! China-Export-Zeichen sieht ähnlich aus (Buchstaben enger zusammen). Im Zweifelsfall EU-Konformitätserklärung anfordern.",
            },
            { type: "heading", value: "Beispiel 2: DIN EN ISO 9001 im IT-Systemhaus" },
            {
              type: "text",
              value:
                "Das IT-Systemhaus ist ISO 9001 zertifiziert: Qualitätsmanagementsystem mit dokumentierten Prozessen (Angebotserstellung, Projektabwicklung, Support). Vorteil: Kunden vertrauen auf standardisierte Qualität. Pflicht: Jährliches Audit durch externen Zertifizierer, Dokumentation aller Prozesse, kontinuierliche Verbesserung (PDCA-Zyklus).",
            },
            { type: "heading", value: "Beispiel 3: Übergabeprotokoll IT-Projekt" },
            {
              type: "text",
              value:
                "Nach Server-Migration: Übergabeprotokoll enthält: Datum, Beteiligte, Ist-Zustand (alle VMs laufen, Backup geprüft, VPN funktioniert), offene Punkte (Feintuning Monitoring noch ausstehend), Abnahme durch Kunden (Unterschrift). Das Protokoll schützt beide Seiten: Der Kunde bestätigt die Leistung, der Dienstleister dokumentiert den Zustand bei Übergabe.",
            },
          ],
          quiz: [
            {
              id: "imp_lf2-no-1_0",
              q: "CE-Kennzeichnung bedeutet?",
              options: [
                "Unabhängig geprüft",
                "Herstellererklärung EU-Konformität",
                "Made in EU",
                "Recycling-fähig",
              ],
              correct: 1,
              explain: "CE = Hersteller erklärt Konformität mit EU-Richtlinien (Selbsterklärung).",
            },
            {
              id: "imp_lf2-no-1_1",
              q: "RoHS beschränkt?",
              options: [
                "Gefährliche Stoffe in Elektronik",
                "Netzwerkbandbreite",
                "Stromverbrauch",
                "Softwarelizenzen",
              ],
              correct: 0,
              explain: "RoHS = Restriction of Hazardous Substances (Blei, Quecksilber etc.).",
            },
            {
              id: "imp_lf2-no-1_2",
              q: "Was gehört ins Übergabeprotokoll?",
              options: [
                "Nur das Übergabedatum und die Uhrzeit des Termins",
                "Nur der vereinbarte Preis mit Zahlungsbedingungen",
                "Nur die installierte Software mit Lizenzschlüsseln",
                "Seriennummern, Konfiguration, Funktionstest, Unterschriften",
              ],
              correct: 3,
              explain:
                "Vollständige Dokumentation: Hardware, Software, Konfiguration, Test, Unterschriften.",
            },
            {
              id: "imp_lf2-no-1_3",
              q: "CE-Zeichen bedeutet?",
              options: [
                "Made in EU",
                "Besonders sicher",
                "Umweltfreundlich",
                "Konformität mit EU-Richtlinien",
              ],
              correct: 3,
              explain:
                "Herstellererklärung. CE = Hersteller erklärt Konformität mit EU-Richtlinien. KEIN Qualitätssiegel!",
            },
            {
              id: "imp_lf2-no-1_4",
              q: "RoHS verbietet?",
              options: [
                "Software mit nicht offengelegtem Quellcode in Geräten",
                "Importe von Elektronikgeräten aus Nicht-EU-Staaten",
                "Bestimmte Gefahrstoffe (Blei, Quecksilber) in Elektronik",
                "Das Recycling alter Elektronikgeräte durch Private",
              ],
              correct: 2,
              explain: "Restriction of Hazardous Substances: Beschränkung gefährlicher Stoffe.",
            },
            {
              id: "imp_lf2-no-1_5",
              q: "GS-Zeichen vs. CE?",
              options: [
                "CE = freiwillig",
                "GS = EU-weit",
                "GS = freiwillig, unabhängig geprüft",
                "Gleich",
              ],
              correct: 2,
              explain:
                "CE = Pflicht, Herstellererklärung. GS: Freiwillig, von Prüfstelle (TÜV) getestet. CE: Pflicht, Eigenerklärung.",
            },
            {
              id: "imp_lf2-no-1_6",
              q: "WEEE-Richtlinie?",
              options: [
                "Arbeitsschutz",
                "Elektroschrott-Entsorgung und Recycling",
                "Lebensmittel",
                "Datenschutz",
              ],
              correct: 1,
              explain: "WEEE: Rücknahme und Recycling von Elektro-Altgeräten.",
            },
            {
              id: "imp_lf2-no-1_7",
              q: "DIN EN ISO 9001?",
              options: ["Datenschutz", "Qualitätsmanagement-Standard", "Umwelt", "IT-Sicherheit"],
              correct: 1,
              explain: "ISO 9001: QM-Zertifizierung.",
            },
            {
              id: "imp_lf2-no-1_8",
              q: "Übergabeprotokoll: Wer unterschreibt?",
              options: ["Kunde + Dienstleister", "Nur Azubi", "Niemand", "Nur IT"],
              correct: 0,
              explain: "Beide Seiten bestätigen die Übergabe.",
            },
            {
              id: "imp_lf2-no-1_9",
              q: "EMV-Richtlinie?",
              options: ["Energie", "Entsorgung", "Elektromagnetische Verträglichkeit", "Umwelt"],
              correct: 2,
              explain: "EMV: Geräte dürfen andere nicht stören und müssen störfest sein.",
            },
            {
              id: "imp_lf2-no-1_10",
              q: "Was bedeutet das CE-Zeichen?",
              options: [
                "Hersteller erklärt Konformität mit EU-Richtlinien",
                "Abkürzung für 'Certified Electronics' nach US-Norm",
                "Prüfsiegel des TÜV nach bestandener Sicherheitsprüfung",
                "Herkunftskennzeichen für 'Made in Europe'",
              ],
              correct: 0,
              explain:
                "CE = Conformité Européenne. Selbsterklärung des Herstellers, dass EU-Richtlinien eingehalten werden.",
            },
            {
              id: "imp_lf2-no-1_11",
              q: "Was ist ISO 9001?",
              options: [
                "Qualitätsmanagementsystem",
                "IT-Sicherheitsnorm",
                "Netzwerkstandard",
                "Umweltnorm",
              ],
              correct: 0,
              explain: "ISO 9001: Internationaler Standard für Qualitätsmanagement (QM-System).",
            },
            {
              id: "imp_lf2-no-1_12",
              q: "Was ist der PDCA-Zyklus?",
              options: [
                "Ein Netzwerkprotokoll",
                "Ein Programmiermodell",
                "Plan-Do-Check-Act (Verbesserungszyklus)",
                "Ein Verschlüsselungsverfahren",
              ],
              correct: 2,
              explain:
                "PDCA = Planen → Umsetzen → Prüfen → Handeln. Zyklus der kontinuierlichen Verbesserung.",
            },
            {
              id: "imp_lf2-no-1_13",
              q: "Was gehört in ein Übergabeprotokoll?",
              options: [
                "Ausschließlich die technischen Daten der übergebenen Geräte",
                "Lediglich die Rechnung mit den vereinbarten Zahlungsbedingungen",
                "Datum, Beteiligte, Ergebnis, offene Punkte, Unterschriften",
                "Nur das Übergabedatum; weitere Angaben sind nicht erforderlich",
              ],
              correct: 2,
              explain:
                "Vollständiges Übergabeprotokoll: Wer, Wann, Was wurde geliefert/geprüft, offene Punkte, Abnahme.",
            },
            {
              id: "imp_lf2-no-1_14",
              q: "Was ist ein Audit?",
              options: [
                "Systematische Überprüfung ob Prozesse/Standards eingehalten werden",
                "Eine Pflichtschulung für Mitarbeiter zu neuen Prozessen",
                "Ein automatisierter Software-Test auf Programmfehler",
                "Eine vollständige Datensicherung vor Systemänderungen",
              ],
              correct: 0,
              explain:
                "Audit = unabhängige Überprüfung der Konformität mit Standards (intern oder extern).",
            },
            {
              id: "imp_lf2-no-1_15",
              q: "Was ist DIN?",
              options: [
                "Eine EU-Norm",
                "Datenschutz-Information-Nummer",
                "Digital Integration Network",
                "Deutsches Institut für Normung",
              ],
              correct: 3,
              explain: "DIN = Deutsches Institut für Normung. Erstellt nationale Standards.",
            },
            {
              id: "imp_lf2-no-1_16",
              q: "Was ist der Unterschied zwischen Norm und Standard?",
              options: [
                "Standards sind historisch älter und wurden durch Normen abgelöst",
                "Normen gelten international, Standards immer nur national",
                "Beide Begriffe sind bedeutungsgleich und beliebig austauschbar",
                "Norm = im formalen Verfahren einer Normungsorganisation (DIN/ISO) verabschiedet; Standard = kann auch informell/de facto entstehen",
              ],
              correct: 3,
              explain:
                "Normen sind grundsätzlich freiwillige Regelwerke und werden erst durch Gesetzes- oder Vertragsverweis verbindlich; Standards entstehen oft de facto am Markt.",
            },
            {
              id: "imp_lf2-no-1_17",
              q: "Wofür steht EN in DIN EN ISO?",
              options: ["Encryption", "Europäische Norm", "English", "Engineering"],
              correct: 1,
              explain:
                "EN = Europäische Norm (CEN). DIN EN ISO = deutsche Übernahme einer europäischen Übernahme einer ISO-Norm.",
            },
            {
              id: "imp_lf2-no-1_18",
              q: "Was ist ein Lasttest im Rahmen der Abnahme?",
              options: [
                "Ein Transporttest für die Anlieferung der Hardware",
                "Ein Test der Tragfähigkeit der Racks mit schwerem Gerät",
                "Ein Belastungstest für Mitarbeiter in Stresssituationen",
                "Prüfung ob das System unter voller Last stabil arbeitet",
              ],
              correct: 3,
              explain:
                "Lasttest: System wird mit realistischer/maximaler Auslastung getestet → Performance und Stabilität prüfen.",
            },
            {
              id: "imp_lf2-no-1_19",
              q: "Wer unterschreibt das Übergabeprotokoll?",
              options: [
                "Auftraggeber UND Auftragnehmer",
                "Die IHK",
                "Nur der Dienstleister",
                "Nur der Auftraggeber",
              ],
              correct: 0,
              explain:
                "Beide Parteien unterschreiben: Auftraggeber bestätigt Abnahme, Auftragnehmer dokumentiert Lieferumfang.",
            },
          ],
        },
      ],
    },
  ],
};
