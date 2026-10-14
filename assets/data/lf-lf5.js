window.LF_CONTENT = window.LF_CONTENT || {};
window.LF_CONTENT["lf5"] = {
  topics: [
    {
      id: "lf5-zs",
      title: "Zahlensysteme",
      lessons: [
        {
          id: "lf5-zk-1",
          title: "Zweierkomplement & IEEE-754: Zahlen, wie der Rechner sie sieht",
          content: [
            {
              type: "text",
              value:
                "Zwei Darstellungsformen, die jede Programmiersprache prägen – und jedes Jahr Berufsschul-Klausuren füllen:\n\nZWEIERKOMPLEMENT (negative Ganzzahlen): Statt eines Vorzeichen-Bits mit Sonderregeln nutzt der Rechner einen Trick, mit dem die normale Addier-Hardware auch subtrahieren kann. Umwandlung von −x: alle Bits von x KIPPEN, dann +1. Beispiel 8 Bit: 5 = 00000101 → gekippt 11111010 → +1 = 11111011 = −5. Rückrichtung identisch (kippen, +1). Erkennungszeichen: Führendes Bit 1 = negativ. Wertebereich bei n Bit: −2^(n−1) bis +2^(n−1)−1, bei 8 Bit also −128 bis +127 – die Asymmetrie (kein +128!) ist eine beliebte Fangfrage. ÜBERLAUF: 127 + 1 ergibt in 8 Bit 10000000 = −128. Genau so entstehen legendäre Bugs (Zähler kippt ins Negative).\n\nIEEE-754 (Gleitkommazahlen, float/double): Aufbau wie wissenschaftliche Notation, nur binär: VORZEICHEN | EXPONENT (mit Bias, bei 32 Bit: 8 Bit, Bias 127) | MANTISSE (23 Bit, führende 1 implizit). 32 Bit = float (~7 signifikante Dezimalstellen), 64 Bit = double (~15–16 Stellen).\n\nDie Konsequenz, die jeder Entwickler spüren wird: 0,1 ist binär ein UNENDLICHER Bruch (wie 1/3 dezimal) – gespeichert wird eine Näherung. Deshalb ergibt 0,1 + 0,2 nicht exakt 0,3, und deshalb gilt: Gleitkommazahlen NIE mit == auf Gleichheit prüfen (stattdessen |a−b| < Epsilon) und NIE für Geldbeträge verwenden (stattdessen ganze Cent als Integer oder Dezimaltypen). Sonderwerte kennt IEEE-754 auch: ±Infinity (Division durch 0) und NaN (Not a Number, z. B. 0/0) – NaN ist als einziger Wert ungleich sich selbst.",
            },
            { type: "heading", value: "Übungsaufgabe: Rechnen wie die CPU" },
            {
              type: "text",
              value:
                "a) Stelle −42 im 8-Bit-Zweierkomplement dar. b) Welche Dezimalzahl ist 11110001 (Zweierkomplement, 8 Bit)? c) Ein byte-Zähler (8 Bit, vorzeichenbehaftet) steht auf 127 und wird um 1 erhöht – was passiert? d) Warum liefert dieser Ausdruck in fast jeder Sprache false: 0.1 + 0.2 == 0.3?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) 42 = 00101010 → kippen 11010101 → +1 = 11010110 = −42.\nb) Führende 1 → negativ. Kippen: 00001110, +1 = 00001111 = 15 → die Zahl ist −15.\nc) Überlauf: 01111111 + 1 = 10000000 = −128. Der Zähler springt von +127 auf −128.\nd) 0,1 und 0,2 sind binär unendliche Brüche und werden gerundet gespeichert; die Summe ist 0,30000000000000004… – daher Epsilon-Vergleich statt ==, und Geld in Cent-Integern rechnen.",
            },
            { type: "heading", value: "Vertiefung: Bias verstehen in 60 Sekunden" },
            {
              type: "text",
              value:
                "Der Exponent wird nicht im Zweierkomplement gespeichert, sondern mit BIAS: gespeicherter Wert = echter Exponent + 127 (bei float). Ein Exponent von 3 steht also als 130 (10000010) im Speicher. Vorteil: Gleitkommazahlen lassen sich damit wie vorzeichenlose Ganzzahlen der Größe nach vergleichen – Hardware-freundlich. Für die Klausur reicht: Aufbau nennen (1|8|23), Bias 127 erwähnen, implizite führende 1 der Mantisse kennen.",
            },
          ],
          quiz: [
            {
              id: "imp_lf5-zk-1_g0",
              q: "Wie bildet man −x im Zweierkomplement?",
              options: [
                "Alle Bits kippen, dann +1",
                "Nur das erste Bit auf 1 setzen",
                "Alle Bits kippen, fertig",
                "x von 255 abziehen und +2",
              ],
              correct: 0,
              explain: "Invertieren + 1 – so subtrahiert die Addier-Hardware.",
            },
            {
              id: "imp_lf5-zk-1_g1",
              q: "Wertebereich von 8 Bit im Zweierkomplement?",
              options: ["−127 bis +128", "−128 bis +127", "−255 bis +255", "0 bis 255"],
              correct: 1,
              explain: "Asymmetrisch: die 0 liegt auf der positiven Seite, +128 existiert nicht.",
            },
            {
              id: "imp_lf5-zk-1_g2",
              q: "Woran erkennt man eine negative Zahl im Zweierkomplement?",
              options: [
                "Am letzten Bit",
                "Sie endet immer auf 1",
                "Am führenden Bit 1",
                "Negative Zahlen sind nicht darstellbar",
              ],
              correct: 2,
              explain: "Das höchstwertige Bit trägt das Vorzeichen.",
            },
            {
              id: "imp_lf5-zk-1_g3",
              q: "127 + 1 in einem vorzeichenbehafteten 8-Bit-Zähler ergibt …",
              options: ["128", "0", "einen Laufzeitfehler in jeder Sprache", "−128 (Überlauf)"],
              correct: 3,
              explain: "01111111 + 1 = 10000000 = −128 – Quelle klassischer Bugs.",
            },
            {
              id: "imp_lf5-zk-1_g4",
              q: "Aufbau einer 32-Bit-IEEE-754-Zahl?",
              options: [
                "8 Bit Vorzeichen, 8 Bit Exponent, 16 Bit Mantisse",
                "1 Bit Vorzeichen, 8 Bit Exponent (Bias 127), 23 Bit Mantisse",
                "16 Bit Vorkomma, 16 Bit Nachkomma",
                "2 × 16 Bit Zweierkomplement",
              ],
              correct: 1,
              explain: "Plus implizite führende 1 der Mantisse.",
            },
            {
              id: "imp_lf5-zk-1_g5",
              q: "Warum ist 0,1 + 0,2 == 0,3 in der Regel false?",
              options: [
                "Compilerfehler in älteren Sprachen",
                "0,1 und 0,2 sind binär unendliche Brüche und werden gerundet gespeichert",
                "Der Prozessor rundet grundsätzlich ab",
                "Weil == nur für Ganzzahlen definiert ist",
              ],
              correct: 1,
              explain: "Deshalb Epsilon-Vergleich – und Geld nie als float.",
            },
            {
              id: "imp_lf5-zk-1_g6",
              q: "Wie speichert man Geldbeträge korrekt?",
              options: [
                "Als float mit zwei Nachkommastellen",
                "Als double, das reicht immer",
                "Als ganze Cent (Integer) oder in einem Dezimaltyp",
                "Als Zeichenkette mit Komma",
              ],
              correct: 2,
              explain: "Ganzzahlen rechnen exakt – 19,99 € sind 1999 Cent.",
            },
            {
              id: "imp_lf5-zk-1_g7",
              q: "Welche Aussage über NaN stimmt?",
              options: [
                "NaN ist gleich 0",
                "NaN entsteht bei jeder Division",
                "NaN == NaN ist true",
                "NaN ist als einziger Wert ungleich sich selbst",
              ],
              correct: 3,
              explain: "0/0 & Co. erzeugen NaN; der Selbstvergleich schlägt per Definition fehl.",
            },
          ],
        },
        {
          id: "lf5-zs-1",
          title: "Zahlensysteme & Datenmengen",
          content: [
            { type: "heading", value: "Zahlensysteme" },
            {
              type: "text",
              value:
                "Dezimal (Basis 10): Ziffern 0-9, Alltag. Binär (Basis 2): Ziffern 0/1, Computer intern. Oktal (Basis 8): Ziffern 0-7, Linux-Berechtigungen (chmod 755). Hexadezimal (Basis 16): Ziffern 0-F, MAC-Adressen, IPv6, HTML-Farben, Speicheradressen.",
            },
            { type: "heading", value: "Umrechnungsmethoden" },
            {
              type: "text",
              value:
                "Dez zu Bin: Fortlaufend durch 2 teilen, Reste von unten nach oben lesen. Beispiel 42: 42/2=21 R0, 21/2=10 R1, 10/2=5 R0, 5/2=2 R1, 2/2=1 R0, 1/2=0 R1 -> 101010. Bin zu Dez: Stellenwerte addieren. 101010 = 32+8+2 = 42. Hex zu Bin: Jede Hex-Ziffer = 4 Bit. 0x2A = 0010 1010. Bin zu Hex: Je 4 Bit gruppieren (von rechts). 1100 1010 = CA.",
            },
            { type: "heading", value: "Datenmengen & Vorsatzzeichen" },
            {
              type: "text",
              value:
                "1 Bit = 0 oder 1. 1 Byte = 8 Bit. 1 Nibble = 4 Bit = 1 Hex-Ziffer. SI-Präfixe (dezimal): kB = 10³, MB=10^6, GB=10^9, TB=10^12. IEC-Präfixe (binär): KiB=1024, MiB=1024^2, GiB=1024^3. Praxis: Festplattenhersteller nutzen SI (1 TB = 1.000 GB), Betriebssysteme nutzen binär (1 TB = 931 GiB).",
            },
            { type: "heading", value: "ASCII & Unicode" },
            {
              type: "text",
              value:
                "ASCII: 7 Bit, 128 Zeichen (0-127). A=65, a=97, 0=48, Space=32. Nur englische Zeichen. UTF-8 (Unicode): 1-4 Byte, alle Weltsprachen, Emojis. Rückwärtskompatibel zu ASCII. Standard im Web.",
            },
            {
              type: "note",
              value: "Hex-Umrechnung und Datenmengen-Berechnung kommen fast immer in AP1 vor!",
            },
            { type: "heading", value: "Durchgerechnete Beispiele: Umrechnung" },
            {
              type: "code",
              value:
                "DEZIMAL → BINÄR (Beispiel 173):\n173 : 2 = 86 R 1\n 86 : 2 = 43 R 0\n 43 : 2 = 21 R 1\n 21 : 2 = 10 R 1\n 10 : 2 =  5 R 0\n  5 : 2 =  2 R 1\n  2 : 2 =  1 R 0\n  1 : 2 =  0 R 1\nReste von unten lesen: 10101101\n\nBINÄR → DEZIMAL (10101101):\n128+0+32+0+8+4+0+1 = 173\n\nBINÄR → HEX (10101101):\n4er-Gruppen: 1010 1101 = A D = 0xAD\n\nHEX → DEZIMAL (0xAD):\nA×16 + D×1 = 10×16 + 13 = 160+13 = 173",
            },
            { type: "heading", value: "Übungsaufgabe" },
            { type: "text", value: "Rechne 200 in Binär und Hex um. Lösung selbst versuchen!" },
            {
              type: "solution",
              value:
                "LÖSUNG:\n200 dezimal = 11001000 binär = 0xC8\nProbe: 128+64+8 = 200 ✓\nHex: 1100=C, 1000=8 → C8 ✓",
            },
            { type: "heading", value: "Übungsaufgabe 2: Umrechnung" },
            {
              type: "text",
              value:
                "Rechne um: a) 11001010 (binär) → dezimal, b) 200 (dezimal) → hexadezimal, c) 0xAF → dezimal.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) 11001010 = 128+64+8+2 = 202\nb) 200 / 16 = 12 Rest 8 → C8\nc) 0xAF = 10*16 + 15 = 175",
            },
            { type: "heading", value: "Übungsaufgabe 3: Datenmengen" },
            {
              type: "text",
              value:
                "Ein Unternehmen überträgt täglich 500 GB Backup-Daten. Die Leitung hat 1 Gbit/s. Wie lange dauert die Übertragung theoretisch?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n500 GB = 500 * 8 Gbit = 4000 Gbit\n4000 Gbit / 1 Gbit/s = 4000 Sekunden\n= 66 Min 40 Sek ≈ 1 Stunde 7 Minuten\nIn der Praxis länger durch Overhead (TCP, Protokoll-Header).",
            },
            { type: "heading", value: "Beispiel 1: Binär → Dezimal umrechnen" },
            {
              type: "text",
              value:
                "10110011₂ = 1·128 + 0·64 + 1·32 + 1·16 + 0·8 + 0·4 + 1·2 + 1·1 = 128+32+16+2+1 = 179. Tipp: Von rechts nach links die Zweierpotenzen aufschreiben (1,2,4,8,16,32,64,128) und nur die addieren, wo eine 1 steht.",
            },
            { type: "heading", value: "Beispiel 2: Hexadezimal in der Praxis" },
            {
              type: "text",
              value:
                "MAC-Adresse: AA:BB:CC:DD:EE:FF – jedes Paar ist ein Hex-Byte (AA = 10101010 = 170 dezimal). Farben in HTML: #FF8800 = Rot:255, Grün:136, Blau:0 → Orange. IPv6: 2001:0db8:85a3::8a2e:0370:7334 – komplett hexadezimal. Hex ist kompakter als Binär: 1 Hex-Ziffer = 4 Bit, 2 Hex-Ziffern = 1 Byte.",
            },
            { type: "heading", value: "BCD-Code: Dezimalziffern einzeln binär" },
            {
              type: "text",
              value:
                "Der BCD-Code (Binary Coded Decimal, 8421-Code) codiert JEDE Dezimalziffer einzeln mit 4 Bit: 259 wird zu 0010 0101 1001 – ziffernweise, nicht als Gesamtzahl (binär wäre 259 = 100000011). Vorteil: verlustfreie Dezimaldarstellung ohne Rundungsfehler und einfache Anzeige (jede Tetrade steuert eine Ziffernanzeige – Taschenrechner, Digitaluhren, SPS-Anzeigen). Nachteil: Platzverschwendung – von 16 möglichen Tetraden-Werten werden nur 10 genutzt (1010–1111 sind Pseudotetraden und unzulässig), und Rechnen ist aufwendiger als im reinen Dualsystem. Prüfungsfrage-Klassiker: Zahl in BCD umwandeln und BCD von „echt binär“ unterscheiden.",
            },
            {
              type: "note",
              value:
                "Merkhilfe: BCD = jede Ziffer bekommt ihre eigene 4-Bit-Wohnung (8-4-2-1). Werte über 1001 in einer Tetrade = verboten (Pseudotetrade).",
            },
          ],
          quiz: [
            {
              id: "imp_lf5-zs-1_0",
              q: "11001010 binär = dezimal?",
              options: ["200", "192", "210", "202"],
              correct: 3,
              explain: "128+64+8+2 = 202.",
            },
            {
              id: "imp_lf5-zs-1_1",
              q: "0xFF hex = dezimal?",
              options: ["255", "15", "256", "16"],
              correct: 0,
              explain: "F=15, FF = 15*16+15 = 255.",
            },
            {
              id: "imp_lf5-zs-1_2",
              q: "1 TB Festplatte zeigt im OS?",
              options: ["~931 GiB", "1 TB", "500 GB", "1024 GB"],
              correct: 0,
              explain: "Hersteller: 1 TB = 10^12 Byte. OS: 10^12 / 1024^3 = ~931 GiB.",
            },
            {
              id: "imp_lf5-zs-1_3",
              q: "ASCII 'A' = dezimal?",
              options: ["97", "41", "48", "65"],
              correct: 3,
              explain: "A = 65 (a = 97, 0 = 48).",
            },
            {
              id: "imp_lf5-zs-1_4",
              q: "Oktal 755 (chmod)?",
              options: ["Hex", "Binär", "rwxr-xr-x", "Dezimal 755"],
              correct: 2,
              explain: "7=rwx, 5=r-x: Owner alles, Gruppe+Andere lesen+ausführen.",
            },
            {
              id: "imp_lf5-zs-1_5",
              q: "1 Nibble = ?",
              options: ["8 Bit", "1 Bit", "4 Bit", "16 Bit"],
              correct: 2,
              explain: "1 Nibble = 4 Bit = 1 Hex-Ziffer.",
            },
            {
              id: "imp_lf5-zs-1_6",
              q: "0x1F dez?",
              options: ["16", "15", "31", "32"],
              correct: 2,
              explain: "1*16+15=31.",
            },
            {
              id: "imp_lf5-zs-1_7",
              q: "1 Byte max dez?",
              options: ["127", "255", "256", "128"],
              correct: 1,
              explain: "2^8-1=255.",
            },
            {
              id: "imp_lf5-zs-1_8",
              q: "Dez 13 binär?",
              options: ["1110", "1111", "1100", "1101"],
              correct: 3,
              explain: "8+4+1.",
            },
            {
              id: "imp_lf5-zs-1_9",
              q: "KiB vs KB?",
              options: ["KiB=1024, KB=1000", "Gleich", "KB=1024", "KiB=1000"],
              correct: 0,
              explain: "IEC vs SI.",
            },
            {
              id: "imp_lf5-zs-1_10",
              q: "Was ist 11001010 binär in dezimal?",
              options: ["210", "200", "192", "202"],
              correct: 3,
              explain: "1·128+1·64+0+0+1·8+0+1·2+0 = 128+64+8+2 = 202.",
            },
            {
              id: "imp_lf5-zs-1_11",
              q: "Wie viel ist FF hexadezimal in dezimal?",
              options: ["256", "16", "254", "255"],
              correct: 3,
              explain: "F=15. FF = 15·16+15 = 240+15 = 255.",
            },
            {
              id: "imp_lf5-zs-1_12",
              q: "Wie viele Bytes hat ein Kilobyte (KiB)?",
              options: ["1000", "512", "1024", "2048"],
              correct: 2,
              explain: "1 KiB = 2¹⁰ = 1024 Bytes. Achtung: 1 KB (SI) = 1000 Bytes.",
            },
            {
              id: "imp_lf5-zs-1_13",
              q: "Was ist das Zweierkomplement?",
              options: [
                "Eine Kompressionsmethode",
                "Darstellung negativer Zahlen im Binärsystem",
                "Ein Fehlerkorrekturverfahren",
                "Ein Hexadezimal-Format",
              ],
              correct: 1,
              explain:
                "Zweierkomplement: Bits invertieren + 1 addieren. So können negative Zahlen binär dargestellt werden.",
            },
            {
              id: "imp_lf5-zs-1_14",
              q: "Wie viele Werte kann ein Byte darstellen?",
              options: ["128", "255", "8", "256"],
              correct: 3,
              explain: "1 Byte = 8 Bit = 2⁸ = 256 Werte (0 bis 255).",
            },
            {
              id: "imp_lf5-zs-1_15",
              q: "Was ist 0xA3 in binär?",
              options: ["10100001", "10110011", "11000011", "10100011"],
              correct: 3,
              explain: "A=1010, 3=0011 → 10100011.",
            },
            {
              id: "imp_lf5-zs-1_16",
              q: "Wie rechnet man Dezimal 42 in Binär um?",
              options: [
                "Einmalig durch 16 teilen und den Rest ablesen",
                "Gar nicht, 42 hat keine Binärdarstellung",
                "Fortlaufend durch 10 teilen und Reste notieren",
                "Fortlaufend durch 2 teilen und Reste notieren",
              ],
              correct: 3,
              explain: "42÷2=21 R0, 21÷2=10 R1, 10÷2=5 R0, 5÷2=2 R1, 2÷2=1 R0, 1÷2=0 R1 → 101010.",
            },
            {
              id: "imp_lf5-zs-1_17",
              q: "Was ist 1 Gibibyte (GiB)?",
              options: ["512 MiB", "1.024 MiB", "1.000 MB", "1.000.000 KB"],
              correct: 1,
              explain: "1 GiB = 1024 MiB = 1024² KiB = 1024³ Bytes = 1.073.741.824 Bytes.",
            },
            {
              id: "imp_lf5-zs-1_18",
              q: "In welchem Zahlensystem arbeiten Computer intern?",
              options: ["Oktal", "Dezimal", "Binär (Dualsystem)", "Hexadezimal"],
              correct: 2,
              explain:
                "Computer arbeiten binär: Strom an (1) / Strom aus (0). Hex ist nur menschenfreundliche Darstellung.",
            },
            {
              id: "imp_lf5-zs-1_19",
              q: "Was ist BCD-Code?",
              options: [
                "Ein Barcode",
                "Ein Farbcode",
                "Binary Coded Decimal",
                "Ein Verschlüsselungscode",
              ],
              correct: 2,
              explain:
                "Jede Dezimalziffer einzeln binär codiert. BCD: Jede Dezimalziffer wird einzeln in 4 Bit codiert. 42 = 0100 0010 (nicht wie normal binär 101010).",
            },
            {
              id: "imp_lf5-zs-1_g_bcd1",
              q: "42 in BCD (8421)?",
              options: ["101010", "0100 0010", "0010 0100", "1111 0000"],
              correct: 1,
              explain:
                "Ziffernweise: 4 = 0100, 2 = 0010. (Binär als Gesamtzahl wäre 101010 – der klassische Unterschied!)",
            },
            {
              id: "imp_lf5-zs-1_g_bcd2",
              q: "Warum ist 1101 als BCD-Tetrade unzulässig?",
              options: [
                "zu viele Einsen",
                "sie entspricht 13 – Dezimalziffern gehen nur bis 9",
                "BCD kennt keine 1",
                "sie ist reserviert für Vorzeichen",
              ],
              correct: 1,
              explain: "Nur 0000–1001 (0–9) sind gültig; 1010–1111 sind Pseudotetraden.",
            },
          ],
        },
        {
          id: "lf5-mat-1",
          title: "Matrizen & Adjazenzmatrix",
          content: [
            { type: "heading", value: "Was ist eine Matrix?" },
            {
              type: "text",
              value:
                "Eine Matrix ist eine rechteckige Zahlentabelle mit m Zeilen und n Spalten (Schreibweise m×n); das Element a[i][j] steht in Zeile i, Spalte j. In der IT begegnet sie dir ständig – als zweidimensionales Array: int[3][4] IST eine 3×4-Matrix. Addition funktioniert elementweise (nur bei gleicher Größe), Skalarmultiplikation multipliziert jedes Element. Matrixmultiplikation A×B: Zeile mal Spalte – Element c[i][j] = Summe über a[i][k]·b[k][j]; sie ist nur definiert, wenn die Spaltenzahl von A der Zeilenzahl von B entspricht, und sie ist NICHT kommutativ (A·B ≠ B·A).",
            },
            { type: "heading", value: "Adjazenzmatrix: Netze als Tabelle" },
            {
              type: "text",
              value:
                "Ein Graph (Knoten + Kanten) lässt sich als Adjazenzmatrix speichern: Zeile i, Spalte j enthält 1, wenn eine Kante von Knoten i nach Knoten j existiert, sonst 0 – bei gewichteten Graphen steht dort das Gewicht (z. B. Leitungskosten, Latenz). Ungerichtete Graphen (LAN-Verkabelung) ergeben eine symmetrische Matrix (a[i][j] = a[j][i]); gerichtete (Firewall-Regeln „A darf zu B“) nicht. Die Zeilensumme ist der (Ausgangs-)Grad eines Knotens – bei einem Switch: die Zahl seiner Uplinks. Praxisbeispiele: Netzwerktopologien dokumentieren, Erreichbarkeitsanalysen, Routing-Algorithmen (Dijkstra arbeitet auf gewichteten Graphen), Abhängigkeitsmatrizen in der CMDB.",
            },
            {
              type: "code",
              value:
                "Netz: R1—R2, R1—R3, R2—R3, R3—R4   (ungerichtet)\nAdjazenzmatrix:      R1 R2 R3 R4\n              R1   [ 0  1  1  0 ]\n              R2   [ 1  0  1  0 ]\n              R3   [ 1  1  0  1 ]\n              R4   [ 0  0  1  0 ]\nZeilensumme R3 = 3  →  R3 hat 3 Links (zentraler Knoten).",
            },
            { type: "heading", value: "Rechnen mit der Adjazenzmatrix" },
            {
              type: "text",
              value:
                "Der eigentliche Zaubertrick: Potenzen der Adjazenzmatrix zählen Wege! A² an Position [i][j] gibt die Anzahl der Wege der Länge 2 von i nach j an (über genau einen Zwischenknoten), A³ die Wege der Länge 3 usw. Damit beantwortest du Fragen wie „Ist R4 von R1 über höchstens 2 Hops erreichbar?“ rein rechnerisch – im Beispiel: A²[R1][R4] = 1 (Weg über R3). Für die Berufsschule reicht: Matrix aufstellen, ablesen, Zeilensummen deuten und den Wege-Zähl-Gedanken kennen.",
            },
            {
              type: "note",
              value:
                "Merkhilfen: a[Zeile][Spalte] – ZEILE ZUERST. Ungerichtet = symmetrisch. Zeilensumme = Knotengrad. A² zählt 2-Hop-Wege.",
            },
            { type: "heading", value: "Übungsaufgabe: Vom Netzplan zur Matrix" },
            {
              type: "text",
              value:
                "Gegeben die Verbindungen (ungerichtet): S1—S2, S2—S3, S2—S4, S3—S4. a) Stelle die 4×4-Adjazenzmatrix auf. b) Welcher Switch hat den höchsten Grad? c) Ist S1 mit S4 über genau 2 Hops verbunden – über welchen Zwischenknoten?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Zeilen/Spalten S1..S4:\nS1 [0 1 0 0] · S2 [1 0 1 1] · S3 [0 1 0 1] · S4 [0 1 1 0]\nb) S2 (Zeilensumme 3 – drei Links).\nc) Ja: S1—S2—S4 (ein 2-Hop-Weg, Zwischenknoten S2; entspricht A²[S1][S4] = 1).",
            },
          ],
          quiz: [
            {
              id: "imp_lf5-mat-1_0",
              q: "Eine 3×4-Matrix hat …",
              options: [
                "3 Zeilen und 4 Spalten",
                "4 Zeilen und 3 Spalten",
                "12 Zeilen",
                "7 Elemente",
              ],
              correct: 0,
              explain: "m×n = m Zeilen, n Spalten → 12 Elemente; in Code: int[3][4].",
            },
            {
              id: "imp_lf5-mat-1_1",
              q: "Die Adjazenzmatrix eines UNGERICHTETEN Graphen ist …",
              options: ["immer leer", "symmetrisch", "dreieckig", "unlösbar"],
              correct: 1,
              explain: "Kante i—j wirkt in beide Richtungen: a[i][j] = a[j][i].",
            },
            {
              id: "imp_lf5-mat-1_2",
              q: "Die Zeilensumme in der Adjazenzmatrix entspricht …",
              options: ["der Kantenlänge", "dem Knotengrad", "der Latenz", "dem Gewicht"],
              correct: 1,
              explain:
                "Anzahl der (ausgehenden) Kanten des Knotens – beim Switch die Zahl der Links.",
            },
            {
              id: "imp_lf5-mat-1_3",
              q: "A² an Position [i][j] zählt …",
              options: [
                "Kanten zwischen i und j",
                "Wege der Länge 2 von i nach j",
                "die Knoten",
                "die Schleifen",
              ],
              correct: 1,
              explain: "Matrixpotenzen zählen Wege: A² = 2-Hop-Wege, A³ = 3-Hop-Wege.",
            },
            {
              id: "imp_lf5-mat-1_4",
              q: "Matrixmultiplikation A·B ist definiert, wenn …",
              options: [
                "beide quadratisch sind",
                "Spalten(A) = Zeilen(B)",
                "Zeilen(A) = Zeilen(B)",
                "beide symmetrisch sind",
              ],
              correct: 1,
              explain: "Zeile mal Spalte braucht passende Innenmaße: (m×n)·(n×k) = (m×k).",
            },
            {
              id: "imp_lf5-mat-1_5",
              q: "Matrixmultiplikation ist …",
              options: [
                "kommutativ",
                "nicht kommutativ",
                "nur mit Nullen möglich",
                "dasselbe wie Addition",
              ],
              correct: 1,
              explain: "A·B ≠ B·A im Allgemeinen – Reihenfolge zählt.",
            },
            {
              id: "imp_lf5-mat-1_6",
              q: "Gewichtete Adjazenzmatrix: Der Eintrag steht für …",
              options: ["Portnummer", "z. B. Kosten/Latenz der Kante", "MAC-Adresse", "Hostanzahl"],
              correct: 1,
              explain: "Statt 1/0 steht das Kantengewicht – Grundlage z. B. für Dijkstra.",
            },
            {
              id: "imp_lf5-mat-1_7",
              q: "Ein 2D-Array int[5][2] entspricht einer Matrix mit …",
              options: ["5 Spalten, 2 Zeilen", "10 Zeilen", "5 Zeilen, 2 Spalten", "2 Elementen"],
              correct: 2,
              explain: "Erste Dimension = Zeilen, zweite = Spalten: 5×2.",
            },
            {
              id: "imp_lf5-mat-1_8",
              q: "Gerichtete Kante „A darf zu B, nicht umgekehrt“ heißt in der Matrix …",
              options: ["a[A][B]=1, a[B][A]=0", "a[A][B]=a[B][A]=1", "beide 0", "Diagonale = 1"],
              correct: 0,
              explain:
                "Gerichtete Graphen (z. B. Firewall-Beziehungen) sind i. d. R. unsymmetrisch.",
            },
          ],
        },
        {
          id: "lf5-mat-2",
          title: "Gleichungssysteme, Ableitung & Integral rechnen",
          content: [
            { type: "heading", value: "Lineare Gleichungssysteme (2×2) lösen" },
            {
              type: "text",
              value:
                "Zwei Gleichungen, zwei Unbekannte – drei Standardwege: GLEICHSETZUNGSVERFAHREN (beide nach y auflösen, gleichsetzen), EINSETZUNGSVERFAHREN (eine Gleichung nach einer Variablen auflösen, in die andere einsetzen), ADDITIONSVERFAHREN (Gleichungen so multiplizieren, dass eine Variable beim Addieren wegfällt). Der BWL-Klassiker dahinter ist die KRITISCHE MENGE: Angebot A kostet 500 € fix + 2 €/Stück, Angebot B 200 € fix + 5 €/Stück. Gleichsetzen: 500 + 2x = 200 + 5x → 300 = 3x → x = 100. Unter 100 Stück ist B günstiger, darüber A – exakt die Kostenvergleichsrechnung aus der Formelsammlung, nur als Gleichung gedacht. Auch Break-Even ist ein LGS: Erlösgerade = Kostengerade.",
            },
            { type: "heading", value: "Ableiten: die Grundregeln" },
            {
              type: "text",
              value:
                "(Auf ausdrücklichen Wunsch als Rechenstoff – in AP1/AP2 wird das nicht geprüft, an manchen Berufsschulen aber unterrichtet.) Die Ableitung f′(x) gibt die Steigung/momentane Änderungsrate. POTENZREGEL: f(x)=xⁿ → f′(x)=n·xⁿ⁻¹ (aus x³ wird 3x²). FAKTORREGEL: konstante Faktoren bleiben stehen (5x³ → 15x²). SUMMENREGEL: gliedweise ableiten. Konstanten fallen weg (Ableitung von 7 ist 0). Beispiel komplett: f(x)=2x³−4x²+3x−7 → f′(x)=6x²−8x+3. Anwendung: Extremstellen finden über f′(x)=0 – etwa das Minimum einer Kostenfunktion. Zweite Ableitung f″ entscheidet: f″>0 Minimum, f″<0 Maximum.",
            },
            { type: "heading", value: "Integrieren: die Umkehrung" },
            {
              type: "text",
              value:
                "Das Integral summiert auf – Fläche unter der Kurve. Potenzregel rückwärts: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C (aus x² wird x³/3). Beispiel: ∫(6x²−8x+3) dx = 2x³−4x²+3x+C – Ableiten und Integrieren heben sich auf. Bestimmtes Integral mit Grenzen: ∫₀² 3x² dx = [x³]₀² = 8 − 0 = 8. IT-Anschauung: Ist f(t) die Datenrate über die Zeit, ist das Integral die übertragene Datenmenge – Fläche unter der Durchsatzkurve (bei konstanter Rate schlicht Rate × Zeit, siehe Formelsammlung).",
            },
            {
              type: "note",
              value:
                "Merkhilfen: Kritische Menge = Fixkostendifferenz ÷ Differenz variable Kosten. Ableiten: Exponent nach vorn, Exponent minus 1. Integrieren: Exponent plus 1, dann dadurch teilen (+C nicht vergessen).",
            },
            { type: "heading", value: "Übungsaufgabe: Rechnen" },
            {
              type: "text",
              value:
                "a) Löse: Drucker-Angebot A: 300 € + 0,02 €/Seite · Angebot B: 120 € + 0,05 €/Seite. Ab welcher Seitenzahl lohnt A? b) Leite ab: f(x) = 4x³ − 6x² + 5x − 12. c) Berechne ∫₁³ (2x + 1) dx.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) 300 + 0,02x = 120 + 0,05x → 180 = 0,03x → x = 6.000. Ab 6.000 Seiten ist A günstiger (kritische Menge).\nb) f′(x) = 12x² − 12x + 5.\nc) Stammfunktion x² + x → (9 + 3) − (1 + 1) = 12 − 2 = 10.",
            },
          ],
          quiz: [
            {
              id: "imp_lf5-mat-2_0",
              q: "Kritische Menge zweier Angebote berechnet man durch …",
              options: [
                "Gleichsetzen der Kostenfunktionen",
                "Multiplizieren der Fixkosten",
                "Addieren aller Preise",
                "Würfeln",
              ],
              correct: 0,
              explain:
                "Fix1 + var1·x = Fix2 + var2·x → x = Fixkostendifferenz ÷ Differenz der variablen Kosten.",
            },
            {
              id: "imp_lf5-mat-2_1",
              q: "Ableitung von f(x) = x⁵?",
              options: ["x⁴", "5x⁴", "5x⁶", "x⁶/6"],
              correct: 1,
              explain: "Potenzregel: Exponent nach vorn, Exponent −1.",
            },
            {
              id: "imp_lf5-mat-2_2",
              q: "Ableitung einer Konstanten (z. B. 42)?",
              options: ["42", "1", "0", "x"],
              correct: 2,
              explain: "Konstanten ändern sich nicht – Steigung 0.",
            },
            {
              id: "imp_lf5-mat-2_3",
              q: "∫x³ dx = …",
              options: ["3x²", "x⁴/4 + C", "x²/2", "4x⁴"],
              correct: 1,
              explain: "Exponent +1, dann dadurch teilen, +C.",
            },
            {
              id: "imp_lf5-mat-2_4",
              q: "f′(x)=0 und f″(x)>0 bedeutet an dieser Stelle …",
              options: ["Maximum", "Minimum", "Nullstelle von f", "Sprungstelle"],
              correct: 1,
              explain: "Steigung null + Linkskrümmung = Tiefpunkt (z. B. Kostenminimum).",
            },
            {
              id: "imp_lf5-mat-2_5",
              q: "Beim Additionsverfahren …",
              options: [
                "werden Gleichungen so kombiniert, dass eine Variable wegfällt",
                "addiert man nur die Ergebnisse",
                "braucht man drei Gleichungen",
                "wird immer x = 0 gesetzt",
              ],
              correct: 0,
              explain: "Passend multiplizieren und addieren – eine Unbekannte eliminiert sich.",
            },
            {
              id: "imp_lf5-mat-2_6",
              q: "∫₀² 3x² dx = …",
              options: ["6", "12", "4", "8"],
              correct: 3,
              explain: "Stammfunktion x³: 2³ − 0³ = 8.",
            },
            {
              id: "imp_lf5-mat-2_7",
              q: "Das Integral der Datenrate über die Zeit ergibt …",
              options: ["die Latenz", "die übertragene Datenmenge", "den Ping", "die Bandbreite"],
              correct: 1,
              explain:
                "Fläche unter der Durchsatzkurve = Menge; bei konstanter Rate schlicht Rate × Zeit.",
            },
          ],
        },
        {
          id: "lf5-komb-1",
          title: "Kombinatorik & Wahrscheinlichkeit: Schlüsselräume",
          content: [
            { type: "heading", value: "Zählen ohne zu zählen" },
            {
              type: "text",
              value:
                "PRODUKTREGEL: Hintereinander getroffene unabhängige Entscheidungen multiplizieren sich. Ein 8-stelliges Passwort aus 62 Zeichen (a–z, A–Z, 0–9) hat 62⁸ ≈ 2,18·10¹⁴ Möglichkeiten – jede zusätzliche Stelle multipliziert mit 62, jedes zusätzliche Zeichen im Vorrat vergrößert die Basis. Genau deshalb schlägt LÄNGE die Komplexität: 62⁸ ≪ 26¹² (≈ 9,5·10¹⁶) – zwölf Kleinbuchstaben schlagen acht wilde Zeichen. FAKULTÄT n! zählt Anordnungen: 5 Server lassen sich auf 5! = 120 Arten in ein Rack sortieren. PERMUTATION/VARIATION nPr = n!/(n−r)! zählt geordnete Auswahlen (Reihenfolge wichtig), KOMBINATION nCr = n!/(r!(n−r)!) ungeordnete: Aus 10 Azubis ein 3er-Projektteam wählen: 10C3 = 120 Teams (Reihenfolge egal); eine Zugangs-PIN aus 4 verschiedenen Ziffern in fester Reihenfolge: 10·9·8·7 = 5.040 (Variation ohne Wiederholung).",
            },
            { type: "heading", value: "Wahrscheinlichkeit: die Grundformel" },
            {
              type: "text",
              value:
                "P(Ereignis) = günstige ÷ mögliche Fälle (Laplace). Beispiele: P(richtige MC-Antwort raten, 4 Optionen) = 1/4 = 25 %. GEGENEREIGNIS spart Arbeit: P(mindestens einmal …) = 1 − P(nie …). Klassiker Klausur: „Wie wahrscheinlich ist mindestens ein Fehlversuch?“ → über das Gegenteil rechnen. UNABHÄNGIGE Ereignisse multiplizieren sich: Zwei Platten mit je 3 % Jahres-Ausfallwahrscheinlichkeit – P(beide fallen aus) = 0,03² = 0,09 % (deshalb wirkt RAID 1!), P(mindestens eine fällt aus) = 1 − 0,97² ≈ 5,9 %. Brute-Force-Bezug: Erwartete Suchdauer ≈ halber Schlüsselraum ÷ Versuche pro Sekunde – bei 62⁸ Passwörtern und 10⁹ Versuchen/s im Schnitt gut 30 Stunden, bei 12 Stellen Jahrtausende.",
            },
            {
              type: "note",
              value:
                "Merkhilfen: Reihenfolge wichtig = Variation (nPr) · egal = Kombination (nCr) · „mindestens einmal“ = 1 − nie · unabhängig = multiplizieren. Passwort-Wahrheit: Länge schlägt Sonderzeichen.",
            },
            { type: "heading", value: "Übungsaufgabe: Rechnen" },
            {
              type: "text",
              value:
                "a) Wie viele 6-stellige PINs nur aus Ziffern gibt es – und wie viele, wenn sich keine Ziffer wiederholen darf? b) Aus 8 Admins wird ein 2er-Bereitschaftsteam gelost: Wie viele Teams sind möglich? c) Ein Los gewinnt mit P = 10 %. Wie groß ist die Chance, bei 3 Losen mindestens einmal zu gewinnen?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Mit Wiederholung 10⁶ = 1.000.000 · ohne Wiederholung 10·9·8·7·6·5 = 151.200.\nb) 8C2 = 8·7 ÷ 2 = 28 Teams.\nc) P(nie) = 0,9³ = 0,729 → P(mindestens einmal) = 1 − 0,729 = 27,1 %.",
            },
          ],
          quiz: [
            {
              id: "imp_lf5-komb-1_0",
              q: "8-stelliges Passwort aus 62 Zeichen – Anzahl Möglichkeiten?",
              options: ["62·8", "8⁶²", "62⁸", "62!"],
              correct: 2,
              explain: "Produktregel: je Stelle 62 unabhängige Möglichkeiten → 62⁸.",
            },
            {
              id: "imp_lf5-komb-1_1",
              q: "5! = …",
              options: ["25", "120", "60", "15"],
              correct: 1,
              explain: "5·4·3·2·1 = 120 – Anzahl der Anordnungen von 5 Dingen.",
            },
            {
              id: "imp_lf5-komb-1_2",
              q: "Reihenfolge egal, keine Wiederholung – das zählt die …",
              options: ["Variation nPr", "Kombination nCr", "Fakultät", "Permutation"],
              correct: 1,
              explain: "nCr = n! ÷ (r!(n−r)!) – z. B. Teams auswählen.",
            },
            {
              id: "imp_lf5-komb-1_3",
              q: "P(mindestens einmal) rechnet man am schlausten über …",
              options: [
                "Addieren aller Fälle",
                "1 minus P(nie)",
                "Multiplizieren mit n",
                "die Fakultät",
              ],
              correct: 1,
              explain: "Das Gegenereignis ist fast immer der kürzere Weg.",
            },
            {
              id: "imp_lf5-komb-1_4",
              q: "Zwei unabhängige Platten, je 3 % Jahres-Ausfall: P(beide) = …",
              options: ["6 %", "3 %", "0,09 %", "9 %"],
              correct: 2,
              explain: "0,03 × 0,03 = 0,0009 – der Grund, warum Spiegelung so stark wirkt.",
            },
            {
              id: "imp_lf5-komb-1_5",
              q: "Warum schlägt Passwortlänge die Zeichenvielfalt?",
              options: [
                "Länge erhöht den Exponenten, Vielfalt nur die Basis",
                "Sonderzeichen sind verboten",
                "kurze Passwörter sind sicherer",
                "beides ist gleich",
              ],
              correct: 0,
              explain:
                "26¹² > 62⁸: Der Exponent wächst schneller als die Basis – lange Passphrasen gewinnen.",
            },
            {
              id: "imp_lf5-komb-1_6",
              q: "P für richtiges Raten bei 4 MC-Optionen?",
              options: ["50 %", "33 %", "20 %", "25 %"],
              correct: 3,
              explain: "1 günstiger von 4 möglichen Fällen (Laplace).",
            },
            {
              id: "imp_lf5-komb-1_7",
              q: "Aus 10 Personen ein geordnetes 1./2./3.-Podium: wie rechnen?",
              options: ["10·9·8 (Variation)", "10C3", "10!", "3¹⁰"],
              correct: 0,
              explain: "Reihenfolge wichtig, ohne Wiederholung: nPr = 10·9·8 = 720.",
            },
          ],
        },
      ],
    },
    {
      id: "lf5-pr",
      title: "Programmierung (C++)",
      lessons: [
        {
          id: "lf5-bool-1",
          title: "Boolesche Algebra & KV-Diagramm",
          content: [
            {
              type: "text",
              value:
                'Boolesche Algebra ist die Mathematik der Logikgatter – vom IT-Labor-Gatterlevel bis zur if-Bedingung im Code gilt dieselbe Handvoll Regeln:\n\nGRUNDVERKNÜPFUNGEN: UND (∧, liefert 1 nur bei 1∧1), ODER (∨, liefert 0 nur bei 0∨0), NICHT (¬, kippt). Daraus abgeleitet: NAND, NOR (jeweils negiert – und für sich allein "universell": aus NANDs lässt sich jede Schaltung bauen) und XOR (exklusiv: 1, wenn die Eingänge VERSCHIEDEN sind – das Herz von Addierern, Parität und RAID-5).\n\nRECHENREGELN, die Prüfungen lieben: Kommutativ/Assoziativ wie gewohnt; Distributiv in BEIDE Richtungen (a∧(b∨c) = a∧b ∨ a∧c UND a∨(b∧c) = (a∨b)∧(a∨c) – die zweite gibt es in normaler Algebra nicht!); Absorption a∨(a∧b) = a. Und die Stars: die DE-MORGAN-Regeln ¬(a∧b) = ¬a ∨ ¬b und ¬(a∨b) = ¬a ∧ ¬b – "Negation reinziehen, Operator kippen". Im Code: !(x > 5 && y < 3) wird zu x <= 5 || y >= 3.\n\nKV-DIAGRAMM (Karnaugh-Veitch): Wahrheitstabellen grafisch minimieren. Die Tabelle wird in ein Raster übertragen, dessen Nachbarfelder sich nur in EINER Variable unterscheiden (Gray-Code-Anordnung!). Dann fasst man benachbarte Einsen zu möglichst großen Blöcken der Größe 1, 2, 4, 8 zusammen – auch über die Ränder hinweg (das Diagramm ist "rund"). Jeder Block liefert einen Produktterm, in dem genau die Variablen stehen, die im Block KONSTANT sind. Ergebnis: die minimale Schaltfunktion – weniger Gatter, weniger Kosten, weniger Fehlerquellen.',
            },
            { type: "heading", value: "Übungsaufgabe: minimieren wie in der Klausur" },
            {
              type: "text",
              value:
                "Eine Funktion f(a,b,c) ist 1 für die Eingaben (a,b,c) = 011, 010, 111, 110. a) Trage die Einsen gedanklich ins KV-Diagramm ein und bilde den größtmöglichen Block. b) Gib die minimierte Funktion an. c) Vereinfache per De Morgan: ¬(¬a ∧ ¬b).",
            },
            {
              type: "solution",
              value:
                'MUSTERLÖSUNG:\na) Die vier Einsen (011, 010, 111, 110) haben alle b = 1 – a und c wechseln. Sie bilden einen 4er-Block.\nb) Im Block ist nur b konstant → f = b. (Kontrolle: alle vier Belegungen mit b=1 liefern 1 ✓ – aus acht möglichen Termen wurde ein einziges Signal.)\nc) De Morgan: ¬(¬a ∧ ¬b) = a ∨ b – der Klassiker: "nicht (weder a noch b)" heißt "a oder b".',
            },
            { type: "heading", value: "Vertiefung: XOR kurz gewürdigt" },
            {
              type: "text",
              value:
                "XOR verdient einen eigenen Blick: a⊕a = 0 und a⊕0 = a machen es selbstinvers – zweimal mit demselben Wert XOR-en stellt das Original wieder her. Genau darauf bauen RAID 5 (Parität = XOR aller Datenblöcke; fällt eine Platte aus, rekonstruiert XOR der übrigen den Inhalt), einfache Verschlüsselung (One-Time-Pad) und der Halbaddierer (Summe = a⊕b, Übertrag = a∧b). Wer XOR versteht, versteht drei Prüfungsthemen auf einmal.",
            },
          ],
          quiz: [
            {
              id: "imp_lf5-bool-1_g0",
              q: "Wann liefert XOR eine 1?",
              options: [
                "Wenn beide Eingänge 1 sind",
                "Wenn beide Eingänge gleich sind",
                "Wenn die Eingänge verschieden sind",
                "Nie – XOR ist ein Speicherbaustein",
              ],
              correct: 2,
              explain: "Exklusives Oder: ungleiche Eingänge → 1.",
            },
            {
              id: "imp_lf5-bool-1_g1",
              q: "¬(a ∧ b) ist nach De Morgan …",
              options: ["¬a ∧ ¬b", "¬a ∨ ¬b", "a ∨ b", "¬(a ∨ b)"],
              correct: 1,
              explain: "Negation auf die Operanden, UND kippt zu ODER.",
            },
            {
              id: "imp_lf5-bool-1_g2",
              q: "!(x > 5 && y < 3) ist äquivalent zu …",
              options: ["x <= 5 || y >= 3", "x <= 5 && y >= 3", "x > 5 || y < 3", "x < 5 || y > 3"],
              correct: 0,
              explain: "De Morgan im Code: Vergleiche negieren, && wird ||.",
            },
            {
              id: "imp_lf5-bool-1_g3",
              q: "Warum sind die Felder im KV-Diagramm im Gray-Code angeordnet?",
              options: [
                "Aus historischen Gründen",
                "Damit sich Nachbarfelder in genau einer Variable unterscheiden",
                "Um Platz zu sparen",
                "Weil Binärzählung verboten ist",
              ],
              correct: 1,
              explain: "Nur so ergeben benachbarte Einsen zusammenfassbare Terme.",
            },
            {
              id: "imp_lf5-bool-1_g4",
              q: "Welche Blockgrößen sind im KV-Diagramm erlaubt?",
              options: [
                "Beliebige, auch 3 und 6",
                "Nur einzelne Felder",
                "Zweierpotenzen: 1, 2, 4, 8 …",
                "Nur die komplette Zeile",
              ],
              correct: 2,
              explain:
                "Größere Blöcke = weniger Variablen im Term = stärkere Minimierung; auch über Ränder hinweg.",
            },
            {
              id: "imp_lf5-bool-1_g5",
              q: "Vier Einsen bilden einen Block, in dem nur b konstant (=1) ist. Der minimierte Term lautet …",
              options: ["a ∧ b ∧ c", "b", "a ∨ c", "¬b"],
              correct: 1,
              explain: "In den Term wandern nur die im Block konstanten Variablen.",
            },
            {
              id: "imp_lf5-bool-1_g6",
              q: 'Warum heißt NAND "universell"?',
              options: [
                "Es ist das schnellste Gatter",
                "Es verbraucht keinen Strom",
                "Es hat die meisten Eingänge",
                "Aus NAND-Gattern allein lässt sich jede logische Schaltung aufbauen",
              ],
              correct: 3,
              explain:
                "NICHT, UND, ODER sind alle aus NANDs kombinierbar – fertigungstechnisch Gold wert.",
            },
            {
              id: "imp_lf5-bool-1_g7",
              q: "Welche XOR-Eigenschaft nutzt RAID 5 zur Rekonstruktion?",
              options: [
                "a ⊕ a = 0 und a ⊕ 0 = a – XOR ist selbstinvers",
                "XOR verdoppelt die Kapazität",
                "XOR komprimiert die Daten",
                "XOR sortiert die Blöcke",
              ],
              correct: 0,
              explain:
                "Parität = XOR aller Blöcke; XOR der verbliebenen stellt den fehlenden wieder her.",
            },
          ],
        },
        {
          id: "lf5-pr-1",
          title: "Datentypen & Kontrollstrukturen",
          content: [
            { type: "heading", value: "Datentypen in C++" },
            {
              type: "text",
              value:
                "int (4 Byte, ganzzahlig, -2.147.483.648 bis +2.147.483.647). float (4 Byte, ~7 signifikante Stellen). double (8 Byte, ~15–16 signifikante Stellen). char (1 Byte, einzelnes Zeichen, ASCII). bool (1 Byte, true/false). string (Zeichenkette, braucht #include). void (kein Rückgabewert bei Funktionen).",
            },
            { type: "heading", value: "Variablen & Konstanten" },
            {
              type: "code",
              value:
                "int alter = 25;           // Ganzzahl\ndouble preis = 19.99;     // Kommazahl\nchar note = 'A';          // Einzelzeichen\nbool aktiv = true;        // Wahrheitswert\nstring name = \"Max\";      // Zeichenkette\nconst double PI = 3.14159; // Konstante",
            },
            { type: "heading", value: "Kontrollstrukturen" },
            {
              type: "code",
              value:
                "// Selektion\nif (x > 0) { /* ... */ } else if (x == 0) { /* ... */ } else { /* ... */ }\nswitch (wert) { case 1: /* ... */ break; default: /* ... */ }\n// Iteration\nfor (int i = 0; i < 10; i++) { /* zaehlergesteuert */ }\nwhile (bedingung) { /* kopfgesteuert, 0-n mal */ }\ndo { /* ... */ } while (bedingung); // fußgesteuert, min. 1x",
            },
            { type: "heading", value: "Arrays & Funktionen" },
            {
              type: "text",
              value:
                "Array: int zahlen[5] = {10, 20, 30, 40, 50}; Zugriff: zahlen[0] = erstes Element. Funktion: Rückgabetyp Name(Parameter) { return wert; }. Call by Value (Kopie), Call by Reference (Original, mit &).",
            },
            { type: "heading", value: "Übungsaufgabe: Kontrollstruktur" },
            {
              type: "text",
              value:
                "Schreibe C++, das für eine Zahl prüft, ob sie gerade oder ungerade ist. Bei 0 soll 'Null' ausgegeben werden.",
            },
            {
              type: "solution",
              value:
                'MUSTERLÖSUNG (C++):\nint zahl;\ncin >> zahl;\nif (zahl == 0) {\n    cout << "Null";\n} else if (zahl % 2 == 0) {\n    cout << "Gerade";\n} else {\n    cout << "Ungerade";\n}\n\nKern: Modulo % 2 == 0 bedeutet gerade.\nReihenfolge beachten: 0 zuerst prüfen.',
            },
            { type: "heading", value: "Übungsaufgabe 2: Datentypen zuordnen" },
            {
              type: "text",
              value:
                "Welcher Datentyp passt für: a) Anzahl Mitarbeiter, b) Preis eines Produkts, c) Name eines Kunden, d) Checkbox 'AGB akzeptiert'?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) int (Ganzzahl)\nb) float oder double (Kommazahl)\nc) string (Zeichenkette)\nd) bool (true/false)",
            },
            { type: "heading", value: "Übungsaufgabe 3: Kontrollstrukturen" },
            {
              type: "text",
              value:
                "Schreibe Pseudocode: Alter prüfen. Unter 16: 'Kein Zugang'. 16-17: 'Eingeschränkt'. Ab 18: 'Voller Zugang'.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nEINGABE alter\nWENN alter < 16 DANN\n  AUSGABE 'Kein Zugang'\nSONST WENN alter < 18 DANN\n  AUSGABE 'Eingeschränkt'\nSONST\n  AUSGABE 'Voller Zugang'\nENDE WENN",
            },
            { type: "heading", value: "Beispiel 1: Datentypen im Vergleich" },
            {
              type: "text",
              value:
                "int: Ganzzahl (42, -7). float/double: Kommazahl (3.14, -0.001). char: Einzelnes Zeichen ('A'). string: Zeichenkette (\"Hallo Welt\"). bool: Wahrheitswert (true/false). Array/List: Sammlung gleichartiger Werte ([1,2,3]). Typische Fehlerquelle: 7/2 ergibt bei int-Division 3 (nicht 3.5!). Bei float-Division: 7.0/2 = 3.5.",
            },
            { type: "heading", value: "Beispiel 2: If-Else mit Verschachtelung" },
            {
              type: "text",
              value:
                "Aufgabe: Note berechnen. if (punkte >= 92) note = 1; else if (punkte >= 81) note = 2; else if (punkte >= 67) note = 3; else if (punkte >= 50) note = 4; else if (punkte >= 30) note = 5; else note = 6; Wichtig: Die Reihenfolge zählt! Von oben nach unten wird die erste zutreffende Bedingung genommen. Bei 85 Punkten greift die zweite Bedingung → Note 2.",
            },
            { type: "heading", value: "Beispiel 3: Schleifen-Typen" },
            {
              type: "text",
              value:
                "For-Schleife: Zählergesteuert, wenn Anzahl Durchläufe bekannt. for(int i=0; i<10; i++) → läuft 10 Mal. While-Schleife: Kopfgesteuert, prüft VOR dem Durchlauf. while(eingabe != 'q') → läuft so lange, bis 'q' eingegeben wird. Do-While: Fußgesteuert, prüft NACH dem Durchlauf. do { ... } while(x>0); → läuft mindestens 1 Mal, auch wenn Bedingung sofort falsch.",
            },
          ],
          quiz: [
            {
              id: "imp_lf5-pr-1_0",
              q: "do-while vs. while?",
              options: [
                "do-while keine Bedingung",
                "do-while min. 1x",
                "while schneller",
                "Gleich",
              ],
              correct: 1,
              explain: "do-while = mind. 1 Durchlauf (fußgesteuert).",
            },
            {
              id: "imp_lf5-pr-1_1",
              q: "int Wertebereich ca.?",
              options: ["-2 Mrd. bis +2 Mrd.", "0-255", "Unbegrenzt", "0-65535"],
              correct: 0,
              explain: "int (4 Byte): ca. -2,1 Mrd. bis +2,1 Mrd.",
            },
            {
              id: "imp_lf5-pr-1_2",
              q: "const bedeutet?",
              options: ["Nur für Zahlen", "Variabel", "Schneller", "Konstant (nicht änderbar)"],
              correct: 3,
              explain: "const = Wert kann nach Initialisierung nicht mehr geändert werden.",
            },
            {
              id: "imp_lf5-pr-1_3",
              q: "Call by Reference?",
              options: [
                "Kopie",
                "Nur Rückgabewert",
                "Original wird direkt geändert (mit &)",
                "Nur Strings",
              ],
              correct: 2,
              explain: "Funktion arbeitet direkt auf dem Original.",
            },
            {
              id: "imp_lf5-pr-1_4",
              q: "Array Index startet bei?",
              options: ["Kommt drauf an", "-1", "0", "1"],
              correct: 2,
              explain: "In C++: Arrays beginnen bei Index 0.",
            },
            {
              id: "imp_lf5-pr-1_5",
              q: "sizeof(int) auf typischen 32-/64-Bit-Systemen?",
              options: ["4 Byte", "8 Byte", "1 Byte", "2 Byte"],
              correct: 0,
              explain: "int = typischerweise 4 Byte (32 Bit).",
            },
            {
              id: "imp_lf5-pr-1_6",
              q: "for vs. while?",
              options: [
                "for = Zähler bekannt, while = Bedingung",
                "for = langsamer",
                "Gleich",
                "while = nur einmal",
              ],
              correct: 0,
              explain: "for: Wenn Anzahl Durchläufe bekannt. while: Wenn nur Bedingung bekannt.",
            },
            {
              id: "imp_lf5-pr-1_7",
              q: "Scope von Variablen?",
              options: [
                "Kein Scope",
                "Nur global",
                "Global immer",
                "Lokal in Block/Funktion, Global außerhalb",
              ],
              correct: 3,
              explain: "Variablen sind nur in ihrem Block/Funktion sichtbar.",
            },
            {
              id: "imp_lf5-pr-1_8",
              q: "switch vs. if-else?",
              options: [
                "Beide Konstrukte sind vollständig austauschbar und gleich",
                "switch = feste Werte vergleichen, if = Bedingungen",
                "if-Anweisungen funktionieren ausschließlich mit Zahlen",
                "switch ist stets schneller und deshalb immer vorzuziehen",
              ],
              correct: 1,
              explain: "switch: Wert gegen mehrere Optionen. if: Beliebige Bedingungen.",
            },
            {
              id: "imp_lf5-pr-1_9",
              q: "void Funktion?",
              options: [
                "Gibt int zurück",
                "Braucht Parameter",
                "Ist rekursiv",
                "Gibt nichts zurück",
              ],
              correct: 3,
              explain: "void: Kein Rückgabewert.",
            },
            {
              id: "imp_lf5-pr-1_10",
              q: "Was gibt 7/2 bei Integer-Division zurück?",
              options: ["3.5", "3", "Fehler", "4"],
              correct: 1,
              explain:
                "Integer-Division: Nachkommastellen werden abgeschnitten. 7/2 = 3 (nicht gerundet!).",
            },
            {
              id: "imp_lf5-pr-1_11",
              q: "Was ist der Unterschied zwischen = und == in den meisten Sprachen?",
              options: [
                "= Vergleich, == Zuweisung",
                "= Zuweisung, == Vergleich",
                "== ist doppelte Zuweisung",
                "Kein Unterschied",
              ],
              correct: 1,
              explain:
                "x = 5 (Zuweisung). x == 5 (Vergleich: ist x gleich 5?). Häufiger Anfängerfehler: if(x=5) statt if(x==5).",
            },
            {
              id: "imp_lf5-pr-1_12",
              q: "Welche Schleife läuft mindestens einmal?",
              options: ["do-while", "Keine", "while", "for"],
              correct: 0,
              explain:
                "Do-while: Bedingung wird NACH dem ersten Durchlauf geprüft → mindestens 1 Durchlauf garantiert.",
            },
            {
              id: "imp_lf5-pr-1_13",
              q: "Was ist ein Array?",
              options: [
                "Eine Bedingung, die Programmzweige zur Laufzeit steuert",
                "Ein Schleifentyp mit fester Wiederholungsanzahl",
                "Ein primitiver Datentyp für einzelne Textzeichen",
                "Eine geordnete Sammlung von Werten gleichen Typs mit Index",
              ],
              correct: 3,
              explain:
                "Array: Feste Anzahl Elemente, über Index zugreifbar (arr[0] = erstes Element). 0-basiert in den meisten Sprachen.",
            },
            {
              id: "imp_lf5-pr-1_14",
              q: "Was passiert bei einer Endlosschleife?",
              options: [
                "Computer stürzt sofort ab",
                "Programm läuft ewig",
                "Programm wird schneller",
                "Programm kompiliert nicht",
              ],
              correct: 1,
              explain:
                "Abbruchbedingung nie erfüllt. Endlosschleife: while(true) oder vergessene Zählervariable. Programm muss extern beendet werden (Ctrl+C).",
            },
            {
              id: "imp_lf5-pr-1_15",
              q: "Was ist ein Boolean?",
              options: [
                "Ein Texttyp",
                "Ein Wahrheitswert: true oder false",
                "Eine Zahl",
                "Ein Array-Typ",
              ],
              correct: 1,
              explain:
                "Boolean/bool: Nur zwei Werte möglich – true (wahr) oder false (falsch). Für Bedingungen.",
            },
            {
              id: "imp_lf5-pr-1_16",
              q: "Was ist der Scope (Gültigkeitsbereich) einer Variable?",
              options: [
                "Variablen sind immer im gesamten Programm global gültig",
                "Die Zeitspanne vom Programmstart bis zum Programmende",
                "Der Codebereich, in dem die Variable sichtbar/nutzbar ist",
                "Der Speicherplatz, den die Variable im RAM belegt",
              ],
              correct: 2,
              explain:
                "Scope: Variable in einer Funktion ist nur dort sichtbar (lokal). Globale Variable ist überall sichtbar.",
            },
            {
              id: "imp_lf5-pr-1_17",
              q: "Was ist Type Casting?",
              options: [
                "Umwandlung eines Datentyps in einen anderen (z.B. int → float)",
                "Das Umbenennen einer Variablen im gesamten Quellcode (Refactoring)",
                "Das Abfangen von Laufzeitfehlern mit einem try-catch-Block",
                "Das Entfernen einer Typdefinition aus dem Programmcode",
              ],
              correct: 0,
              explain:
                "Casting: (float)7 → 7.0, (int)3.9 → 3 (Abschneiden!). Implizit oder explizit.",
            },
            {
              id: "imp_lf5-pr-1_18",
              q: "Was ist der Unterschied zwischen while und for?",
              options: [
                "Kein Unterschied",
                "for hat Zähler im Kopf, while nur Bedingung",
                "for ist schneller",
                "while kann mehr",
              ],
              correct: 1,
              explain:
                "for: Initialisierung+Bedingung+Inkrement im Kopf. while: Nur Bedingung, Zähler muss manuell verwaltet werden.",
            },
            {
              id: "imp_lf5-pr-1_19",
              q: "Was ist eine Konstante?",
              options: [
                "Eine Variable, deren Wert sich bei jedem Zugriff ändert",
                "Ein Schleifentyp mit fest vorgegebener Durchlaufzahl",
                "Ein Wert, der nach Zuweisung nicht mehr geändert werden kann",
                "Der unveränderliche Name einer Funktion im Quellcode",
              ],
              correct: 2,
              explain:
                "Konstante (const/final): Einmal gesetzt, unveränderlich. Beispiel: const PI = 3.14159. Schützt vor versehentlicher Änderung.",
            },
          ],
        },
        {
          id: "lf5-pr-2",
          title: "Sortieralgorithmen",
          content: [
            { type: "heading", value: "Bubble Sort" },
            {
              type: "text",
              value:
                "Vergleicht benachbarte Elemente und tauscht sie. Wiederholt bis sortiert. O(n²) – ineffizient, aber einfach zu verstehen.",
            },
            { type: "heading", value: "Selection Sort" },
            {
              type: "text",
              value:
                "Findet das Minimum und tauscht es an die erste Position. Dann das zweitkleinste an Position 2 usw. Ebenfalls O(n²).",
            },
            { type: "heading", value: "Insertion Sort" },
            {
              type: "text",
              value:
                "Fügt jedes Element an der richtigen Stelle im bereits sortierten Teil ein. O(n²), aber bei fast sortierten Daten effizient.",
            },
            {
              type: "note",
              value:
                "In der Prüfung: Schreibtischtest (Trockendurchlauf) eines Algorithmus Schritt für Schritt nachvollziehen.",
            },
            { type: "heading", value: "Beispiel: Bubble Sort durchgespielt" },
            {
              type: "text",
              value: "Sortiere [5, 2, 8, 1] mit Bubble Sort aufsteigend. Zeige die Durchläufe.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nStart: [5, 2, 8, 1]\nDurchlauf 1:\n 5>2 → tauschen: [2,5,8,1]\n 5<8 → ok:       [2,5,8,1]\n 8>1 → tauschen: [2,5,1,8]\nDurchlauf 2:\n 2<5 → ok:       [2,5,1,8]\n 5>1 → tauschen: [2,1,5,8]\nDurchlauf 3:\n 2>1 → tauschen: [1,2,5,8]\nErgebnis: [1,2,5,8]\n\nKomplexität Bubble Sort: O(n²) - ineffizient bei\ngroßen Datenmengen. Quicksort/Mergesort: O(n log n).",
            },
            { type: "heading", value: "Übungsaufgabe 2: Bubble Sort" },
            {
              type: "text",
              value: "Sortiere [5, 3, 8, 1, 2] mit Bubble Sort. Zeige die ersten 2 Durchläufe.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nDurchlauf 1: [3,5,8,1,2]→[3,5,1,8,2]→[3,5,1,2,8]\nDurchlauf 2: [3,5,1,2,8]→[3,1,5,2,8]→[3,1,2,5,8]\nBubble Sort: O(n²) Worst/Average.",
            },
            { type: "heading", value: "Beispiel 1: Bubblesort Schritt für Schritt" },
            {
              type: "text",
              value:
                "Array: [5, 3, 8, 1, 2]. Durchlauf 1: (5,3)→tausch→[3,5,8,1,2], (5,8)→ok, (8,1)→tausch→[3,5,1,8,2], (8,2)→tausch→[3,5,1,2,8]. Durchlauf 2: (3,5)→ok, (5,1)→tausch→[3,1,5,2,8], (5,2)→tausch→[3,1,2,5,8]. Durchlauf 3: [1,2,3,5,8] → fertig. Komplexität: O(n²) – langsam bei großen Datenmengen, aber einfach zu verstehen und implementieren.",
            },
            { type: "heading", value: "Beispiel 2: Quicksort-Prinzip" },
            {
              type: "text",
              value:
                "Divide & Conquer: 1) Pivot wählen (z.B. letztes Element). 2) Partitionieren: Alles kleiner links, alles größer rechts. 3) Rekursiv für linke und rechte Hälfte wiederholen. Beispiel [4,2,7,1,5,3] mit Pivot 3: Links=[2,1], Pivot=3, Rechts=[4,7,5]. Dann rekursiv weiter. Komplexität: O(n·log n) im Durchschnitt – deutlich schneller als Bubblesort.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Bubblesort nachvollziehen" },
            {
              type: "text",
              value:
                "Sortiere das Array [6, 2, 8, 4, 1] mit Bubblesort. Zeige jeden Durchlauf und jeden Vergleich/Tausch. Wie viele Durchläufe und wie viele Vergleiche brauchst du?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nDurchlauf 1: (6,2)→T [2,6,8,4,1], (6,8)→ok, (8,4)→T [2,6,4,8,1], (8,1)→T [2,6,4,1,8] → 4 Vergleiche, 3 Tausche\nDurchlauf 2: (2,6)→ok, (6,4)→T [2,4,6,1,8], (6,1)→T [2,4,1,6,8] → 3 Vergleiche, 2 Tausche\nDurchlauf 3: (2,4)→ok, (4,1)→T [2,1,4,6,8] → 2 Vergleiche, 1 Tausch\nDurchlauf 4: (2,1)→T [1,2,4,6,8] → 1 Vergleich, 1 Tausch\n\nErgebnis: [1,2,4,6,8] in 4 Durchläufen, 10 Vergleiche gesamt.\nBei n=5: Worst Case = n·(n-1)/2 = 10 Vergleiche → O(n²).",
            },
            { type: "heading", value: "Übungsaufgabe 3: Algorithmen vergleichen" },
            {
              type: "text",
              value:
                "Nenne für Bubblesort, Quicksort und Mergesort jeweils: Best/Worst/Average-Case Komplexität, ob stabil, und ob in-place. Welchen würdest du für 1 Million Datensätze empfehlen und warum?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n                 Best       Average    Worst      Stabil  In-Place\nBubblesort      O(n)       O(n²)      O(n²)      Ja      Ja\nQuicksort       O(n·log n) O(n·log n) O(n²)*     Nein    Ja\nMergesort       O(n·log n) O(n·log n) O(n·log n) Ja      Nein\n\n*Quicksort Worst Case bei ungünstiger Pivotwahl (z.B. bereits sortiert)\n\nFür 1 Mio Datensätze: Quicksort oder Mergesort.\n- Quicksort: In der Praxis am schnellsten (gute Cache-Lokalität), in-place, aber Worst Case O(n²).\n- Mergesort: Garantiert O(n·log n), stabil, aber braucht O(n) Extra-Speicher.\n- Bubblesort: Bei n=1.000.000 wären es ~10¹² Vergleiche → unbenutzbar langsam.\n\nEmpfehlung: Quicksort mit randomisierter Pivotwahl (vermeidet Worst Case fast sicher).",
            },
          ],
          quiz: [
            {
              id: "imp_lf5-pr-2_0",
              q: "Komplexität von Bubble Sort?",
              options: ["O(n log n)", "O(n)", "O(2^n)", "O(n²)"],
              correct: 3,
              explain: "Bubble Sort = O(n²).",
            },
            {
              id: "imp_lf5-pr-2_1",
              q: "Selection Sort Komplexität?",
              options: ["O(2^n)", "O(n log n)", "O(n²)", "O(n)"],
              correct: 2,
              explain: "Selection Sort = O(n²).",
            },
            {
              id: "imp_lf5-pr-2_2",
              q: "Insertion Sort: Wann effizient?",
              options: ["Nie", "Fast sortierte Daten", "Große Daten", "Zufällige Daten"],
              correct: 1,
              explain: "Bei fast sortierten Daten nahezu O(n).",
            },
            {
              id: "imp_lf5-pr-2_3",
              q: "Stabiler Sortieralgorithmus?",
              options: [
                "Immer O(n)",
                "Gleiche Werte behalten Reihenfolge",
                "Braucht wenig RAM",
                "Kein Absturz",
              ],
              correct: 1,
              explain: "Stabil = gleiche Schlüsselwerte behalten ihre relative Reihenfolge.",
            },
            {
              id: "imp_lf5-pr-2_4",
              q: "Merge Sort Komplexität?",
              options: ["O(n)", "O(n²)", "O(n log n)", "O(n!)"],
              correct: 2,
              explain: "Merge Sort = O(n log n), auch im Worst Case.",
            },
            {
              id: "imp_lf5-pr-2_5",
              q: "Bubble Sort: Wie wird verglichen?",
              options: [
                "Zufällig",
                "Jedes mit jedem",
                "Benachbarte Elemente",
                "Erstes mit letztem",
              ],
              correct: 2,
              explain: "Benachbarte Elemente vergleichen und bei Bedarf tauschen.",
            },
            {
              id: "imp_lf5-pr-2_6",
              q: "Quick Sort Worst Case?",
              options: ["O(n²)", "O(n)", "O(n log n)", "O(2^n)"],
              correct: 0,
              explain: "Worst Case O(n²) bei ungünstigem Pivot, Average O(n log n).",
            },
            {
              id: "imp_lf5-pr-2_7",
              q: "Was ist ein Schreibtischtest?",
              options: [
                "Tastatur testen",
                "Algorithmus per Hand durchspielen",
                "Ausdruck prüfen",
                "Papiertest",
              ],
              correct: 1,
              explain: "Trockenlauf: Algorithmus Schritt für Schritt auf Papier nachvollziehen.",
            },
            {
              id: "imp_lf5-pr-2_8",
              q: "Welcher ist KEIN Sortieralgorithmus?",
              options: ["Binary Search", "Merge Sort", "Quick Sort", "Bubble Sort"],
              correct: 0,
              explain: "Binary Search ist ein Suchalgorithmus, kein Sortieralgorithmus.",
            },
            {
              id: "imp_lf5-pr-2_9",
              q: "O(n²) vs. O(n log n): Was ist bei großen Datenmengen schneller?",
              options: ["Gleich", "O(n²)", "O(n log n)", "Lässt sich grundsätzlich nicht sagen"],
              correct: 2,
              explain:
                "O(n log n) wächst deutlich langsamer – bei großen n ist der Unterschied gewaltig (bei kleinen n können Konstanten das Bild kurz verzerren, asymptotisch gewinnt immer n log n).",
            },
            {
              id: "imp_lf5-pr-2_10",
              q: "Welche Komplexität hat Bubblesort im Worst Case?",
              options: ["O(n·log n)", "O(n²)", "O(n)", "O(log n)"],
              correct: 1,
              explain: "Bubblesort Worst Case: Jedes Element mit jedem vergleichen → O(n²).",
            },
            {
              id: "imp_lf5-pr-2_11",
              q: "Was bedeutet 'stabil' bei einem Sortieralgorithmus?",
              options: [
                "Seine Laufzeit ist bei jeder Eingabe exakt gleich",
                "Elemente mit gleichem Schlüssel behalten ihre relative Reihenfolge",
                "Er bricht auch bei ungültigen Eingaben niemals mit einem Fehler ab",
                "Er benötigt nur konstant wenig zusätzlichen Arbeitsspeicher",
              ],
              correct: 1,
              explain: "Stabil: Bei gleichen Werten bleibt die ursprüngliche Reihenfolge erhalten.",
            },
            {
              id: "imp_lf5-pr-2_12",
              q: "Welches Prinzip nutzt Quicksort?",
              options: [
                "Dynamic Programming",
                "Divide and Conquer (Teile und Herrsche)",
                "Greedy",
                "Brute Force",
              ],
              correct: 1,
              explain:
                "Quicksort: Problem in kleinere Teilprobleme zerlegen (Partitionieren), rekursiv lösen, zusammenführen.",
            },
            {
              id: "imp_lf5-pr-2_13",
              q: "Was ist der Best Case von Bubblesort?",
              options: [
                "O(1)",
                "O(n) (bereits sortiert, optimiert mit Flag)",
                "O(n²)",
                "O(n·log n)",
              ],
              correct: 1,
              explain:
                "Optimierter Bubblesort: Wenn kein Tausch im Durchlauf → Array sortiert → Abbruch nach 1 Durchlauf = O(n).",
            },
            {
              id: "imp_lf5-pr-2_14",
              q: "Was ist In-Place-Sortierung?",
              options: [
                "Ein Sortierverfahren, das ohne Vergleichsoperationen arbeitet",
                "Sortierung in Echtzeit noch während der Dateneingabe",
                "Sortierung am Platz: Kein/kaum zusätzlicher Speicher nötig",
                "Sortierung, die direkt in einer Datenbank ausgeführt wird",
              ],
              correct: 2,
              explain:
                "In-Place: O(1) Extra-Speicher. Bubblesort/Quicksort = in-place. Mergesort = nicht in-place (O(n) Extra).",
            },
            {
              id: "imp_lf5-pr-2_15",
              q: "Was ist das Pivot-Element bei Quicksort?",
              options: [
                "Referenzelement für die Partitionierung",
                "Das größte Element",
                "Das erste Element immer",
                "Das mittlere Element",
              ],
              correct: 0,
              explain:
                "Kleiner/größer aufteilen. Pivot: Trennelement. Alle kleineren links, alle größeren rechts. Wahl beeinflusst Performance.",
            },
            {
              id: "imp_lf5-pr-2_16",
              q: "Welcher Algorithmus garantiert O(n·log n) im Worst Case?",
              options: ["Quicksort", "Bubblesort", "Mergesort", "Insertionsort"],
              correct: 2,
              explain:
                "Mergesort: Immer O(n·log n), egal wie die Eingabe aussieht. Quicksort kann O(n²) werden.",
            },
            {
              id: "imp_lf5-pr-2_17",
              q: "Was ist Insertionsort?",
              options: [
                "Sortierung durch Löschen falsch platzierter Werte",
                "Sortierung durch Mischen rekursiv geteilter Hälften",
                "Sortierung durch Zählen der Häufigkeit jedes Werts",
                "Sortierung durch Einfügen an der richtigen Stelle",
              ],
              correct: 3,
              explain:
                "Insertionsort: Jedes Element an der richtigen Stelle im bereits sortierten Teil einfügen. O(n²), aber gut für kleine/fast sortierte Arrays.",
            },
            {
              id: "imp_lf5-pr-2_18",
              q: "Warum ist O(n²) für große Datenmengen problematisch?",
              options: [
                "Verdopplung der Daten vervierfacht die Laufzeit",
                "Der Algorithmus erzeugt quadratisch mehr Laufzeitfehler",
                "Der Arbeitsspeicher reicht ab n² Elementen nicht mehr aus",
                "Quadratische Laufzeit ist technisch gar nicht umsetzbar",
              ],
              correct: 0,
              explain:
                "O(n²): 1000 Elemente → 1 Mio Schritte. 1 Mio Elemente → 1 Billion Schritte. Skaliert extrem schlecht.",
            },
            {
              id: "imp_lf5-pr-2_19",
              q: "Was ist der Unterschied zwischen vergleichsbasierter und adressbasierter Sortierung?",
              options: [
                "Es gibt keinen Unterschied, beide Begriffe bezeichnen dasselbe Verfahren",
                "Vergleichsbasierte Verfahren benötigen grundsätzlich mehr Speicher als adressbasierte",
                "Adressbasierte Verfahren sind bei jeder Art von Eingabedaten immer schneller",
                "Vergleichsbasiert vergleicht Elemente direkt, adressbasiert nutzt Struktur der Daten",
              ],
              correct: 3,
              explain:
                "Vergleichsbasiert: Bubble/Quick/Merge (min. O(n·log n)). Adressbasiert: Counting/Radix/Bucket (kann O(n) sein!).",
            },
          ],
        },
      ],
    },
    {
      id: "lf5-ht",
      title: "HTML, CSS & JavaScript",
      lessons: [
        {
          id: "lf5-ht-1",
          title: "HTML-Grundlagen",
          content: [
            { type: "heading", value: "HTML = Hypertext Markup Language" },
            {
              type: "text",
              value:
                "Auszeichnungssprache für Webseiten (KEINE Programmiersprache!). Elemente bestehen aus Öffnungs-Tag, Inhalt, Schließ-Tag. Attribute im Öffnungs-Tag. Dokumentstruktur: DOCTYPE, html, head (meta, title, link), body.",
            },
            { type: "heading", value: "Wichtige Elemente" },
            {
              type: "text",
              value:
                "Text: h1-h6 (Überschriften), p (Absatz), br (Zeilenumbruch), strong/em (fett/kursiv). Links: a href='url' (Hyperlink). Bilder: img src='bild.jpg' alt='Beschreibung' (kein Schließ-Tag!). Listen: ul/ol mit li. Tabellen: table, tr (Zeile), th (Header), td (Zelle). Formulare: form action='...', input type='text/password/email/number/checkbox/radio/submit', select/option, textarea.",
            },
            { type: "heading", value: "Semantische Elemente (HTML5)" },
            {
              type: "text",
              value:
                "header (Kopfbereich), nav (Navigation), main (Hauptinhalt), section (Abschnitt), article (eigenständiger Inhalt), aside (Seitenleiste), footer (Fußzeile). Vorteile: Bessere Zugänglichkeit (Screen Reader), besseres SEO (Google versteht Struktur).",
            },
            {
              type: "code",
              value:
                '<!DOCTYPE html>\n<html lang="de">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Meine Seite</title>\n</head>\n<body>\n  <header><nav>...</nav></header>\n  <main>\n    <h1>Titel</h1>\n    <p>Text mit <a href="url">Link</a></p>\n    <img src="bild.jpg" alt="Beschreibung">\n  </main>\n  <footer>Impressum</footer>\n</body>\n</html>',
            },
            { type: "heading", value: "Übungsaufgabe: HTML-Struktur" },
            {
              type: "text",
              value:
                "Erstelle das Grundgerüst einer HTML5-Seite mit Titel, Überschrift und Absatz.",
            },
            {
              type: "solution",
              value:
                'MUSTERLÖSUNG:\n<!DOCTYPE html>\n<html lang="de">\n<head>\n  <meta charset="UTF-8">\n  <title>Meine Seite</title>\n</head>\n<body>\n  <h1>Willkommen</h1>\n  <p>Das ist ein Absatz.</p>\n</body>\n</html>',
            },
            { type: "heading", value: "Übungsaufgabe 2: HTML-Seitenstruktur" },
            {
              type: "text",
              value:
                "Erstelle die HTML-Grundstruktur einer Seite mit Titel 'IT-Azubi Blog', h1-Überschrift, Absatz und Link zu google.de.",
            },
            {
              type: "solution",
              value:
                'MUSTERLÖSUNG:\n<!DOCTYPE html>\n<html lang="de">\n<head>\n  <meta charset="UTF-8">\n  <title>IT-Azubi Blog</title>\n</head>\n<body>\n  <h1>Willkommen</h1>\n  <p>Hier lernen wir HTML.</p>\n  <a href="https://www.google.de">Google</a>\n</body>\n</html>\nWichtig: DOCTYPE, lang, charset, head/body Trennung.',
            },
            { type: "heading", value: "Beispiel 1: Semantisches HTML" },
            {
              type: "text",
              value:
                "Statt nur <div> und <span> nutzt man semantische Tags: <header> (Kopfbereich), <nav> (Navigation), <main> (Hauptinhalt), <article> (eigenständiger Inhalt), <section> (thematischer Abschnitt), <aside> (Seitenleiste), <footer> (Fußbereich). Vorteile: Suchmaschinen verstehen die Seitenstruktur, Screenreader können besser navigieren (Barrierefreiheit), Code ist lesbarer.",
            },
            { type: "heading", value: "Beispiel 2: Formular mit Validierung" },
            {
              type: "text",
              value:
                "<form action='/login' method='POST'> <label for='email'>E-Mail:</label> <input type='email' id='email' name='email' required> <label for='pw'>Passwort:</label> <input type='password' id='pw' name='pw' minlength='8' required> <button type='submit'>Login</button> </form>. type='email' prüft automatisch das Format. required verhindert leeres Absenden. minlength='8' erzwingt Mindestlänge. method='POST' sendet Daten im Body (nicht in der URL wie GET).",
            },
            { type: "heading", value: "Beispiel 3: Tabelle für Daten" },
            {
              type: "text",
              value:
                "<table> <thead> <tr><th>Name</th><th>IP</th><th>Status</th></tr> </thead> <tbody> <tr><td>SRV01</td><td>192.168.1.10</td><td>Online</td></tr> </tbody> </table>. thead/tbody trennen Kopf- und Datenbereich. th = Kopfzelle (fett). td = Datenzelle. Für Barrierefreiheit: <caption>Serverliste</caption> hinzufügen.",
            },
            { type: "heading", value: "Übungsaufgabe 3: HTML-Fehler finden" },
            {
              type: "text",
              value:
                "Der folgende HTML-Code enthält 4 Fehler. Finde und korrigiere sie:\n\n<html>\n<body>\n<h1>Willkommen</h2>\n<img src='logo.png'>\n<p>Text <b>fett<p>\n<a href='seite.html'>Link</p>\n</body>\n</html>",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nFehler 1: <h1> wird mit </h2> geschlossen → <h1>Willkommen</h1>\nFehler 2: <img> hat kein alt-Attribut → <img src='logo.png' alt='Firmenlogo'> (Pflicht für Barrierefreiheit!)\nFehler 3: <b> nicht geschlossen und <p> falsch verschachtelt → <p>Text <b>fett</b></p>\nFehler 4: <a> wird mit </p> geschlossen → <a href='seite.html'>Link</a>\n\nZusätzlich fehlt: <!DOCTYPE html>, <head>, <meta charset='UTF-8'>, <title>.",
            },
          ],
          quiz: [
            {
              id: "imp_lf5-ht-1_0",
              q: "Hyperlink-Element?",
              options: ["<href>", "<a>", "<url>", "<link>"],
              correct: 1,
              explain: "<a href='...'> erstellt einen Hyperlink.",
            },
            {
              id: "imp_lf5-ht-1_1",
              q: "img-Tag hat?",
              options: ["Nur in div", "Kein src", "Kein Schließ-Tag (self-closing)", "Schließ-Tag"],
              correct: 2,
              explain: "img ist ein leeres Element (self-closing), hat kein Schließ-Tag.",
            },
            {
              id: "imp_lf5-ht-1_2",
              q: "Semantisches Element für Navigation?",
              options: ["<nav>", "<menu>", "<div>", "<links>"],
              correct: 0,
              explain: "<nav> kennzeichnet den Navigationsbereich.",
            },
            {
              id: "imp_lf5-ht-1_3",
              q: "Self-closing Element?",
              options: ["<div>", "<img>", "<p>", "<h1>"],
              correct: 1,
              explain: "img hat kein Schließ-Tag.",
            },
            {
              id: "imp_lf5-ht-1_4",
              q: "POST vs. GET?",
              options: [
                "POST = schneller",
                "GET = sicherer",
                "POST = Body (nicht in der URL sichtbar), GET = URL",
                "Gleich",
              ],
              correct: 2,
              explain: "POST: Daten im Body. GET: Daten in URL sichtbar.",
            },
            {
              id: "imp_lf5-ht-1_5",
              q: "Semantik: Hauptinhalt?",
              options: ["<body>", "<main>", "<div>", "<content>"],
              correct: 1,
              explain: "<main> = Hauptinhalt der Seite.",
            },
            {
              id: "imp_lf5-ht-1_6",
              q: "meta charset UTF-8?",
              options: ["Favicon", "Schriftart", "Seitenbreite", "Zeichenkodierung"],
              correct: 3,
              explain:
                "Umlaute, Sonderzeichen. charset=UTF-8: Korrekte Darstellung aller Zeichen (äöüß, Emojis).",
            },
            {
              id: "imp_lf5-ht-1_7",
              q: "viewport Meta-Tag?",
              options: ["Responsive: Seitenbreite an Gerät anpassen", "Titel", "Favicon", "SEO"],
              correct: 0,
              explain: "viewport: Steuert wie die Seite auf Mobile skaliert.",
            },
            {
              id: "imp_lf5-ht-1_8",
              q: "alt bei img?",
              options: ["Titel", "Link", "Stil", "Alternativtext für Barrierefreiheit und SEO"],
              correct: 3,
              explain: "alt: Beschreibung für Screen Reader und wenn Bild nicht lädt.",
            },
            {
              id: "imp_lf5-ht-1_9",
              q: "placeholder in input?",
              options: [
                "Der Feldname, der beim Absenden an den Server übertragen wird",
                "Ein Standardwert, der beim Absenden mitgeschickt wird",
                "Die sichtbare Feldbeschriftung, die dauerhaft daneben steht",
                "Grauer Hinweistext, der beim Tippen verschwindet",
              ],
              correct: 3,
              explain: "Hinweistext im Eingabefeld.",
            },
            {
              id: "imp_lf5-ht-1_10",
              q: "Welches Tag definiert einen Hyperlink?",
              options: ["<link>", "<a>", "<href>", "<url>"],
              correct: 1,
              explain: "<a href='ziel.html'>Linktext</a>. <link> ist für CSS-Einbindung im Head.",
            },
            {
              id: "imp_lf5-ht-1_11",
              q: "Was macht das alt-Attribut bei <img>?",
              options: [
                "Zeigt eine sichtbare Bildunterschrift unter dem Bild an",
                "Dreht das Bild um den angegebenen Winkel im Browser",
                "Vergrößert das Bild beim Überfahren mit der Maus",
                "Alternativtext, wenn Bild nicht lädt + Screenreader",
              ],
              correct: 3,
              explain:
                "alt: Pflicht für Barrierefreiheit. Screenreader lesen den alt-Text vor. Wird angezeigt, wenn Bild fehlt.",
            },
            {
              id: "imp_lf5-ht-1_12",
              q: "Was ist der Unterschied zwischen <div> und <span>?",
              options: [
                "div ist neuer",
                "span ist größer",
                "Kein Unterschied",
                "div = Block-Element, span = Inline-Element",
              ],
              correct: 3,
              explain:
                "div: Block (nimmt volle Breite, neue Zeile). span: Inline (nur so breit wie Inhalt, bleibt in der Zeile).",
            },
            {
              id: "imp_lf5-ht-1_13",
              q: "Welche Methode sendet Formulardaten in der URL?",
              options: ["POST", "DELETE", "GET", "PUT"],
              correct: 2,
              explain:
                "GET: Daten in der URL (?name=Max&age=25). POST: Daten im HTTP-Body (nicht sichtbar in URL).",
            },
            {
              id: "imp_lf5-ht-1_14",
              q: "Was ist DOCTYPE?",
              options: [
                "Ein CSS-Befehl, der das Standard-Stylesheet des Browsers lädt",
                "Ein JavaScript-Objekt mit Metadaten zum geladenen Dokument",
                "Ein normales HTML-Tag mit schließendem Gegenstück im Body",
                "Deklaration, die dem Browser den Dokumenttyp mitteilt (<!DOCTYPE html>)",
              ],
              correct: 3,
              explain:
                "<!DOCTYPE html> muss die erste Zeile sein. Sagt dem Browser: 'Dies ist HTML5, rendere entsprechend.'",
            },
            {
              id: "imp_lf5-ht-1_15",
              q: "Was macht <meta charset='UTF-8'>?",
              options: [
                "Schriftart wählen",
                "Zeichenkodierung festlegen",
                "Seitentitel setzen",
                "Seitenfarbe setzen",
              ],
              correct: 1,
              explain:
                "Umlaute, Sonderzeichen korrekt. charset='UTF-8': Unterstützt alle Zeichen weltweit (Umlaute, Emojis, Chinesisch). Ohne: ÃÂ¼ statt ü.",
            },
            {
              id: "imp_lf5-ht-1_16",
              q: "Welches Element steht semantisch für den Hauptinhalt?",
              options: ["<content>", "<main>", "<body>", "<div id='main'>"],
              correct: 1,
              explain:
                "Das <main>-Tag kennzeichnet den Hauptinhalt semantisch. Nur einmal pro Seite erlaubt.",
            },
            {
              id: "imp_lf5-ht-1_17",
              q: "Was ist der Unterschied zwischen id und class?",
              options: [
                "id ist ausschließlich für CSS reserviert, class nur für JavaScript",
                "Es gibt keinen Unterschied; beide Attribute sind frei austauschbar",
                "class darf nur einmal pro Seite vorkommen, id beliebig oft",
                "id ist einmalig pro Seite, class kann mehrfach verwendet werden",
              ],
              correct: 3,
              explain:
                "id: Einmalig (z.B. id='header'). class: Mehrfach nutzbar (z.B. class='btn' auf vielen Buttons).",
            },
            {
              id: "imp_lf5-ht-1_18",
              q: "Was macht <input type='number' min='0' max='100'>?",
              options: [
                "100 Eingabefelder erstellen",
                "Nur Text erlauben",
                "Eingabefeld für Zahlen 0-100 mit Validierung",
                "Zahl anzeigen",
              ],
              correct: 2,
              explain:
                "type='number' mit min/max: Browser zeigt Spinner, validiert automatisch den Wertebereich.",
            },
            {
              id: "imp_lf5-ht-1_19",
              q: "Welches Tag verwendet man für eine nummerierte Liste?",
              options: ["<ul>", "<dl>", "<list>", "<ol>"],
              correct: 3,
              explain:
                "ol = ordered list (1. 2. 3.). ul = unordered list (Aufzählungszeichen). dl = description list.",
            },
          ],
        },
        {
          id: "lf5-ht-2",
          title: "CSS-Grundlagen",
          content: [
            { type: "heading", value: "Selektoren & Spezifität" },
            {
              type: "text",
              value:
                "Element-Selektor: p, h1, div (Spezifität 1). Klasse: .box, .highlight (10). ID: #main, #header (100). Inline-Style: style='...' (1000). Kombiniert: div.box = Element+Klasse (11). Bei Gleichstand gewinnt die spätere Regel.",
            },
            { type: "heading", value: "Box-Modell" },
            {
              type: "text",
              value:
                "Jedes HTML-Element ist eine Box mit 4 Schichten (von innen nach außen): Content (Inhalt, width/height), Padding (Innenabstand zum Rand), Border (Rahmen, Dicke/Stil/Farbe), Margin (Außenabstand zu anderen Elementen). box-sizing: border-box = width schließt Padding+Border ein (Standard-Praxis).",
            },
            { type: "heading", value: "Layout-Systeme" },
            {
              type: "text",
              value:
                "Flexbox (1D-Layout): display: flex auf Container, justify-content (Hauptachse), align-items (Querachse). Für Navigation, Karten-Layouts, zentrieren. Grid (2D-Layout): display: grid, grid-template-columns/rows. Für komplexe Seitenlayouts mit Zeilen UND Spalten. Responsive: @media (max-width: 768px) { } für mobile Anpassung.",
            },
            { type: "heading", value: "Übungsaufgabe 1: CSS-Selektoren" },
            {
              type: "text",
              value:
                "Erkläre: a) #header, b) .highlight, c) p, d) div > p. Welcher hat die höchste Spezifität?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) #header = ID-Selektor (ein Element)\nb) .highlight = Klassen-Selektor (mehrere)\nc) p = Element-Selektor (alle <p>)\nd) div > p = Kindkombinator\nSpezifität: ID > Klasse > Element. #header hat die höchste.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Box-Modell" },
            {
              type: "text",
              value:
                "Ein Element hat width: 200px, padding: 20px, border: 5px, margin: 10px. Wie breit ist es ohne box-sizing: border-box?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nSichtbar: 200 + 2×20 + 2×5 = 250px\nGesamt mit Margin: 250 + 2×10 = 270px\nMit box-sizing: border-box wäre sichtbar genau 200px.",
            },
            { type: "heading", value: "Beispiel 1: Box-Model verstehen" },
            {
              type: "text",
              value:
                "Jedes HTML-Element ist eine Box: Content (Inhalt) → Padding (Innenabstand) → Border (Rahmen) → Margin (Außenabstand). width:200px bezieht sich standardmäßig nur auf Content. Mit box-sizing:border-box bezieht sich width auf Content+Padding+Border → viel einfacher zu berechnen! Best Practice: * { box-sizing: border-box; } am Anfang jedes Stylesheets.",
            },
            { type: "heading", value: "Beispiel 2: Flexbox für Layout" },
            {
              type: "text",
              value:
                "display:flex macht einen Container zum Flex-Container. justify-content: Ausrichtung auf Hauptachse (space-between, center, flex-start). align-items: Ausrichtung auf Querachse (center, stretch). flex-direction: row (horizontal) oder column (vertikal). gap: Abstand zwischen Elementen. Beispiel Navigation: nav { display:flex; justify-content:space-between; align-items:center; }",
            },
            { type: "heading", value: "Beispiel 3: Responsive Design mit Media Queries" },
            {
              type: "text",
              value:
                "@media (max-width: 768px) { .sidebar { display: none; } .content { width: 100%; } } Bedeutet: Wenn Bildschirm kleiner als 768px (Tablet/Handy), wird Sidebar ausgeblendet und Content nimmt volle Breite. Mobile First: Erst für kleine Bildschirme designen, dann mit @media (min-width: ...) für große erweitern.",
            },
            { type: "heading", value: "Übungsaufgabe 3: CSS-Selektor-Challenge" },
            {
              type: "text",
              value:
                "Schreibe CSS-Selektoren für folgende Anforderungen:\na) Alle Links innerhalb von <nav>\nb) Nur das erste <li> jeder <ul>\nc) Alle Elemente mit class='highlight' die KEIN <span> sind\nd) Jede zweite Tabellenzeile im <tbody>",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) nav a { color: blue; text-decoration: none; }\n   → Nachfahren-Selektor: alle <a> innerhalb von <nav>\n\nb) ul > li:first-child { font-weight: bold; }\n   → :first-child Pseudo-Klasse + > Kind-Selektor\n\nc) .highlight:not(span) { background: yellow; }\n   → :not() Pseudo-Klasse schließt <span> aus\n\nd) tbody tr:nth-child(even) { background: #f2f2f2; }\n   → :nth-child(even) wählt jede gerade Zeile (Zebra-Streifen)",
            },
          ],
          quiz: [
            {
              id: "imp_lf5-ht-2_0",
              q: "Box-Modell innen nach außen?",
              options: [
                "Border,Content,Padding,Margin",
                "Content,Padding,Border,Margin",
                "Content,Margin,Padding,Border",
                "Margin,Border,Padding,Content",
              ],
              correct: 1,
              explain: "Content, Padding, Border, Margin.",
            },
            {
              id: "imp_lf5-ht-2_1",
              q: "Spezifität: ID vs. Klasse?",
              options: ["ID gewinnt (100 vs 10)", "Kommt drauf an", "Klasse gewinnt", "Gleich"],
              correct: 0,
              explain: "ID (100) schlägt Klasse (10).",
            },
            {
              id: "imp_lf5-ht-2_2",
              q: "Flexbox: Ausrichtung der Elemente ENTLANG der Hauptachse steuern?",
              options: ["grid-template", "align-items", "justify-content", "flex-direction"],
              correct: 2,
              explain:
                "justify-content verteilt die Elemente entlang der Hauptachse; flex-direction legt fest, WELCHE Achse die Hauptachse ist; align-items wirkt auf der Querachse.",
            },
            {
              id: "imp_lf5-ht-2_3",
              q: "Grid: 2D oder 1D?",
              options: ["1D", "2D (Zeilen UND Spalten)", "3D", "Nur Spalten"],
              correct: 1,
              explain: "Grid = 2D-Layout mit Zeilen und Spalten.",
            },
            {
              id: "imp_lf5-ht-2_4",
              q: "@media (max-width: 768px) ist?",
              options: [
                "Responsive Breakpoint für Tablets/Mobile",
                "Print-Style",
                "Variable",
                "Animation",
              ],
              correct: 0,
              explain: "Media Query für Bildschirme bis 768px Breite.",
            },
            {
              id: "imp_lf5-ht-2_5",
              q: "border-box bedeutet?",
              options: [
                "Width enthält Padding + Border",
                "Width nur Content",
                "Kein Border",
                "Border = Box",
              ],
              correct: 0,
              explain: "box-sizing: border-box = width schließt Padding und Border ein.",
            },
            {
              id: "imp_lf5-ht-2_6",
              q: "display: none vs. visibility: hidden?",
              options: [
                "hidden rendert schneller, weil der Browser das Layout überspringt",
                "none = Element weg + Platz weg, hidden = unsichtbar aber Platz bleibt",
                "none wirkt nur auf Bilder und andere ersetzte Elemente",
                "Beide entfernen Element und Platzbedarf auf identische Weise",
              ],
              correct: 1,
              explain:
                "display:none entfernt Element komplett. visibility:hidden versteckt es nur.",
            },
            {
              id: "imp_lf5-ht-2_7",
              q: "z-index?",
              options: ["Farbe", "Schriftgröße", "Horizontale Position", "Stacking-Reihenfolge"],
              correct: 3,
              explain: "Was liegt über was. z-index: Welches Element wird über anderen angezeigt.",
            },
            {
              id: "imp_lf5-ht-2_8",
              q: "position: sticky?",
              options: ["Fixiert immer", "Fixiert ab Scroll-Position", "Relativ", "Absolut"],
              correct: 1,
              explain:
                "Scrollt mit bis Punkt. Sticky: Element scrollt mit bis zu einer Position, dann fixiert.",
            },
            {
              id: "imp_lf5-ht-2_9",
              q: "rem vs. px?",
              options: [
                "Beide Einheiten verhalten sich beim Skalieren gleich",
                "px = relativ zur Elternschrift, rem = feste Größe",
                "rem = relativ zur Root-Schriftgröße, px = absolut",
                "rem = absolute Einheit, px = relativ zum Viewport",
              ],
              correct: 2,
              explain: "rem skaliert mit Schriftgröße, besser für Responsive.",
            },
            {
              id: "imp_lf5-ht-2_10",
              q: "Was ist das Box-Model?",
              options: [
                "Content + Padding + Border + Margin um jedes Element",
                "Ein JavaScript-Framework zur Gestaltung von Formularen",
                "Das Grid-Layout-System für mehrspaltige Seitenraster",
                "Ein 3D-Modellformat für Grafiken im Browser",
              ],
              correct: 0,
              explain:
                "Box-Model: Jedes Element hat diese 4 Schichten. box-sizing:border-box vereinfacht die Berechnung.",
            },
            {
              id: "imp_lf5-ht-2_11",
              q: "Was macht display:flex?",
              options: [
                "Die Schriftart aller Kindelemente wird geändert",
                "Container wird Flex-Container für flexibles Layout",
                "Das Element wird ausgeblendet wie bei display:none",
                "Das Element erhält automatisch abgerundete Ecken",
              ],
              correct: 1,
              explain:
                "Flexbox: 1-dimensionales Layout (Zeile oder Spalte). Kinder lassen sich mit justify-content und align-items positionieren.",
            },
            {
              id: "imp_lf5-ht-2_12",
              q: "Was ist der Unterschied zwischen margin und padding?",
              options: [
                "margin = Außenabstand, padding = Innenabstand",
                "padding wirkt ausschließlich auf der linken Seite",
                "margin wirkt ausschließlich an der Oberkante",
                "Kein Unterschied, beide sind austauschbar",
              ],
              correct: 0,
              explain:
                "Padding: Abstand zwischen Content und Border (innen). Margin: Abstand zwischen Border und nächstem Element (außen).",
            },
            {
              id: "imp_lf5-ht-2_13",
              q: "Was macht @media (max-width: 768px)?",
              options: [
                "Der Bildschirm wird auf 768px Breite vergrößert",
                "Die Schriftgröße wird fest auf 768px gesetzt",
                "Das Element erhält einen Rand von 768 Pixeln",
                "CSS-Regeln gelten nur bei Bildschirmbreite ≤768px",
              ],
              correct: 3,
              explain:
                "Media Query: Regeln greifen nur, wenn Bedingung erfüllt. max-width:768px → Tablet/Handy.",
            },
            {
              id: "imp_lf5-ht-2_14",
              q: "Was ist Spezifität bei CSS?",
              options: [
                "Rangordnung der Selektoren: inline > id > class > Element",
                "Die Dateigröße des eingebundenen Stylesheets in Kilobyte",
                "Die vom Stylesheet unterstützte Bildschirmauflösung",
                "Die Ladegeschwindigkeit der CSS-Datei beim Seitenaufruf",
              ],
              correct: 0,
              explain:
                "Spezifität bestimmt, welche Regel gewinnt. #id (100) > .class (10) > element (1). Inline-Style schlägt alles.",
            },
            {
              id: "imp_lf5-ht-2_15",
              q: "Was macht position:absolute?",
              options: [
                "Das Element wird unsichtbar und aus dem DOM entfernt, ähnlich wie bei display:none",
                "Element wird aus dem Dokumentfluss genommen und relativ zum nächsten positionierten Elternelement platziert",
                "Das Element bleibt beim Scrollen dauerhaft an derselben Stelle im Viewport stehen",
                "Das Element wird automatisch horizontal und vertikal im Elternelement zentriert",
              ],
              correct: 1,
              explain:
                "absolute: Aus dem Fluss, positioniert relativ zum nächsten Elternelement mit position:relative. top/left/right/bottom steuern Position.",
            },
            {
              id: "imp_lf5-ht-2_16",
              q: "Was ist z-index?",
              options: ["Seitenzahl", "Zeilenabstand", "Schriftgröße", "Stapelreihenfolge"],
              correct: 3,
              explain:
                "Welches Element vorne liegt bei Überlappung. z-index: Höherer Wert = Element liegt weiter vorne (über anderen). Funktioniert nur mit position-Eigenschaft.",
            },
            {
              id: "imp_lf5-ht-2_17",
              q: "Wofür steht rem als CSS-Einheit?",
              options: [
                "Remainder – der verbleibende Platz nach dem Zeilenumbruch",
                "Responsive em – passt sich automatisch der Viewport-Breite an",
                "Root em – relativ zur Schriftgröße des <html>-Elements",
                "Remote – Einheit für extern nachgeladene Schriftgrößen",
              ],
              correct: 2,
              explain:
                "rem: Relativ zur Root-Schriftgröße. html { font-size:16px } → 1rem=16px, 2rem=32px. Skaliert einheitlich.",
            },
            {
              id: "imp_lf5-ht-2_18",
              q: "Was ist CSS Grid?",
              options: [
                "2-dimensionales Layout-System",
                "Ein Tabellensystem",
                "Ein Framework wie Bootstrap",
                "Nur für Bilder",
              ],
              correct: 0,
              explain:
                "Grid: 2D-Layout mit Zeilen und Spalten. display:grid; grid-template-columns: 1fr 2fr 1fr; Flexbox=1D, Grid=2D.",
            },
            {
              id: "imp_lf5-ht-2_19",
              q: "Was macht * { box-sizing: border-box; }?",
              options: [
                "Width/Height beziehen sich auf Content+Padding+Border statt nur Content",
                "Blendet alle Elemente der Seite vollständig aus (display: none)",
                "Setzt die Außenabstände (margin) aller Elemente auf null",
                "Entfernt sämtliche Rahmenlinien (border) von allen Elementen",
              ],
              correct: 0,
              explain:
                "border-box: width:200px = 200px gesamt (inkl. Padding+Border). Ohne: 200px + Padding + Border = breiter als erwartet.",
            },
          ],
        },
        {
          id: "lf5-ht-3",
          title: "JavaScript-Grundlagen",
          content: [
            { type: "heading", value: "Variablen & Datentypen" },
            {
              type: "text",
              value:
                "let (veränderbar), const (konstant), var (veraltet, Function Scope). Datentypen: String ('Text'), Number (42, 3.14), Boolean (true/false), null, undefined, Array ([1,2,3]), Object ({name:'Max'}). typeof prüft den Typ. JavaScript ist dynamisch typisiert (Typ kann sich ändern).",
            },
            { type: "heading", value: "Funktionen & Events" },
            {
              type: "code",
              value:
                "// Funktionsdeklaration\nfunction gruss(name) {\n  return 'Hallo ' + name;\n}\n// Arrow Function\nconst add = (a, b) => a + b;\n// DOM-Zugriff\nconst btn = document.getElementById('btn');\nbtn.addEventListener('click', function() {\n  document.getElementById('ausgabe').textContent = 'Geklickt!';\n});",
            },
            { type: "heading", value: "Kontrollstrukturen" },
            {
              type: "text",
              value:
                "if/else, switch/case, for, while, do-while, for...of (Arrays), for...in (Objekte). Array-Methoden: .push(), .pop(), .forEach(), .map(), .filter(), .find(), .length.",
            },
            { type: "heading", value: "JSON (JavaScript Object Notation)" },
            {
              type: "text",
              value:
                "Standardformat für Datenaustausch (APIs). Key-Value-Paare in geschweiften Klammern. JSON.parse() (String zu Objekt), JSON.stringify() (Objekt zu String). Wichtig: Keys MÜSSEN in doppelten Anführungszeichen stehen.",
            },
            { type: "heading", value: "Übungsaufgabe: JavaScript" },
            {
              type: "text",
              value:
                "Schreibe eine JS-Funktion summe(arr), die die Summe aller Zahlen in einem Array zurückgibt.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nfunction summe(arr) {\n  let s = 0;\n  for (let i = 0; i < arr.length; i++) {\n    s += arr[i];\n  }\n  return s;\n}\n\n// Kurzform mit reduce:\nconst summe = arr => arr.reduce((a,b) => a+b, 0);",
            },
            { type: "heading", value: "Übungsaufgabe 2: JS-Funktionen" },
            {
              type: "text",
              value:
                "Schreibe eine JavaScript-Funktion rabattPreis(preis, prozent) die den reduzierten Preis berechnet.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nfunction rabattPreis(preis, prozent) {\n  return preis - (preis * prozent / 100);\n}\nrabattPreis(100, 15) // 85\n\nArrow: const rabattPreis = (p, r) => p * (1 - r/100);",
            },
            { type: "heading", value: "Beispiel 1: DOM-Manipulation" },
            {
              type: "text",
              value:
                "document.getElementById('output').textContent = 'Neuer Text'; Ändert den Text eines Elements. document.querySelector('.btn').addEventListener('click', function() { alert('Geklickt!'); }); Reagiert auf Klick-Event. document.createElement('li') + appendChild(): Neues Element erstellen und einfügen. innerHTML vs. textContent: innerHTML interpretiert HTML-Tags, textContent nur Text (sicherer gegen XSS!).",
            },
            { type: "heading", value: "Beispiel 2: Fetch-API für HTTP-Requests" },
            {
              type: "text",
              value:
                "fetch('https://api.example.com/users').then(response => response.json()).then(data => { data.forEach(user => console.log(user.name)); }).catch(error => console.error('Fehler:', error)); Fetch ersetzt das ältere XMLHttpRequest. Gibt ein Promise zurück. .then() für Erfolg, .catch() für Fehler. async/await ist die moderne Syntax: const response = await fetch(url); const data = await response.json();",
            },
            { type: "heading", value: "Beispiel 3: Callback vs. Promise vs. Async/Await" },
            {
              type: "text",
              value:
                "Callback (alt): getData(function(result) { ... }); Problem: Callback Hell bei Verschachtelung. Promise (modern): getData().then(result => ...).catch(err => ...); Besser lesbar, Fehlerbehandlung zentral. Async/Await (aktuell): const result = await getData(); Sieht aus wie synchroner Code, ist aber asynchron. try/catch für Fehler.",
            },
            { type: "heading", value: "Übungsaufgabe 3: JavaScript-Ausgabe vorhersagen" },
            {
              type: "text",
              value:
                "Was gibt der folgende Code aus?\n\nlet x = 5;\nlet y = '5';\nconsole.log(x == y);\nconsole.log(x === y);\nconsole.log(typeof x);\nconsole.log(typeof y);\n\nfor(let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nZeile 1: x == y → true (== vergleicht nur Wert, konvertiert automatisch: 5 == '5' → true)\nZeile 2: x === y → false (=== vergleicht Wert UND Typ: number !== string)\nZeile 3: typeof x → 'number'\nZeile 4: typeof y → 'string'\n\nSchleife: Gibt nach 100ms aus: 0, 1, 2\n(let hat Block-Scope → jede Iteration hat eigenes i.\nMit var statt let würde 3, 3, 3 ausgegeben werden, weil var Function-Scope hat und alle Timeouts das gleiche i sehen.)",
            },
          ],
          quiz: [
            {
              id: "imp_lf5-ht-3_0",
              q: "let vs. const?",
              options: [
                "let veränderbar, const nicht",
                "const schneller",
                "let veraltet",
                "Gleich",
              ],
              correct: 0,
              explain: "let = veränderbar, const = konstant.",
            },
            {
              id: "imp_lf5-ht-3_1",
              q: "JSON: Keys müssen?",
              options: [
                "In doppelten Anführungszeichen",
                "In einfachen Anführungszeichen",
                "Großgeschrieben",
                "Ohne Anführungszeichen",
              ],
              correct: 0,
              explain: "JSON-Keys müssen in doppelten Anführungszeichen stehen.",
            },
            {
              id: "imp_lf5-ht-3_2",
              q: "DOM steht für?",
              options: [
                "Data Object Model",
                "Document Object Model",
                "Dynamic Object Manager",
                "Digital Output Method",
              ],
              correct: 1,
              explain: "Document Object Model – Baumstruktur einer HTML-Seite.",
            },
            {
              id: "imp_lf5-ht-3_3",
              q: "addEventListener dient?",
              options: [
                "CSS ändern",
                "Elemente erstellen",
                "Daten laden",
                "Events an Elemente binden (click, keydown)",
              ],
              correct: 3,
              explain: "Event-Handler an HTML-Elemente binden.",
            },
            {
              id: "imp_lf5-ht-3_4",
              q: "Array .filter() gibt zurück?",
              options: [
                "Neues Array mit Elementen die Bedingung erfüllen",
                "Boolean, ob mindestens ein Element die Bedingung erfüllt",
                "Zahl der Elemente, die die Bedingung erfüllen",
                "Das erste Element, das die Bedingung erfüllt",
              ],
              correct: 0,
              explain: ".filter() gibt neues Array mit allen passenden Elementen zurück.",
            },
            {
              id: "imp_lf5-ht-3_5",
              q: "=== vs. ==?",
              options: [
                "== ist strenger",
                "=== ist langsamer",
                "=== prüft Typ + Wert, == nur Wert",
                "Gleich",
              ],
              correct: 2,
              explain: "=== (strict) prüft Typ UND Wert. == konvertiert Typen automatisch.",
            },
            {
              id: "imp_lf5-ht-3_6",
              q: "fetch() Zweck?",
              options: [
                "HTTP-Anfragen an APIs senden (AJAX)",
                "Dateien löschen",
                "CSS laden",
                "DOM manipulieren",
              ],
              correct: 0,
              explain: "fetch: Daten von APIs laden ohne Seitenneuladung.",
            },
            {
              id: "imp_lf5-ht-3_7",
              q: "null vs. undefined?",
              options: [
                "null = bewusst leer, undefined = nicht zugewiesen",
                "Beide Werte sind identisch und typgleich (===)",
                "undefined entspricht der Zahl 0, null dem Leerstring",
                "null ist ein Fehlerobjekt, das Exceptions auslöst",
              ],
              correct: 0,
              explain:
                "null: Absichtlich kein Wert. undefined: Variable existiert aber hat keinen Wert.",
            },
            {
              id: "imp_lf5-ht-3_8",
              q: "async/await?",
              options: [
                "Führt Code strikt synchron aus und blockiert den Browser",
                "Nur für setTimeout/setInterval-Timer verwendbar",
                "Asynchrone Operationen lesbarer schreiben (Promises)",
                "Nur in Node.js verfügbar, nicht im Browser",
              ],
              correct: 2,
              explain: "async/await: Syntaktischer Zucker für Promises.",
            },
            {
              id: "imp_lf5-ht-3_9",
              q: "localStorage?",
              options: [
                "Arbeitsspeicher des PCs, den der Browser reserviert",
                "Cookie, das bei jedem Request zum Server mitgesendet wird",
                "Browser-Speicher, der über Sessions bestehen bleibt",
                "Speicherbereich auf dem Webserver für Benutzerdaten",
              ],
              correct: 2,
              explain: "Daten bleiben im Browser gespeichert (key-value, bis 5-10MB).",
            },
            {
              id: "imp_lf5-ht-3_10",
              q: "Was ist der Unterschied zwischen == und === in JavaScript?",
              options: [
                "== ist strenger, weil es zusätzlich den Datentyp vergleicht",
                "== vergleicht nur Wert (mit Typkonvertierung), === vergleicht Wert UND Typ",
                "Kein Unterschied, beide Operatoren vergleichen Wert und Typ",
                "=== ist nur eine schnellere Schreibweise mit gleichem Verhalten",
              ],
              correct: 1,
              explain:
                "== (lose): '5'==5 → true. === (strikt): '5'===5 → false. Best Practice: Immer === verwenden!",
            },
            {
              id: "imp_lf5-ht-3_11",
              q: "Was ist ein Event-Listener?",
              options: [
                "Funktion, die auf ein bestimmtes Ereignis reagiert",
                "Ein HTML-Tag zum Einbinden von Audiodateien",
                "Ein CSS-Selektor für interaktive Elemente",
                "Ein Protokoll zur Audioübertragung im Browser",
              ],
              correct: 0,
              explain:
                "Klick, Tastendruck etc. addEventListener('click', callback): Registriert Funktion, die bei Klick ausgeführt wird.",
            },
            {
              id: "imp_lf5-ht-3_12",
              q: "Was gibt typeof null zurück?",
              options: ["'boolean'", "'null'", "'object'", "'undefined'"],
              correct: 2,
              explain:
                "Historischer Bug in JavaScript: typeof null === 'object'. Ist KEIN Objekt, aber der Bug bleibt aus Kompatibilität.",
            },
            {
              id: "imp_lf5-ht-3_13",
              q: "Was ist eine Arrow-Function?",
              options: [
                "Kurzschreibweise für Funktionen: (a, b) => a + b",
                "Ein CSS-Feature zur Animation von Pfeil-Icons",
                "Ein HTML-Attribut zur Verlinkung von Seiten",
                "Ein Pfeildiagramm zur Darstellung von Abläufen",
              ],
              correct: 0,
              explain:
                "Arrow Function: const add = (a,b) => a+b; Kürzer als function(a,b){return a+b;}. Hat kein eigenes 'this'.",
            },
            {
              id: "imp_lf5-ht-3_14",
              q: "Was ist der Unterschied zwischen let und var?",
              options: [
                "var ist sicherer",
                "let ist älter",
                "let hat Block-Scope, var hat Function-Scope",
                "Kein Unterschied",
              ],
              correct: 2,
              explain:
                "let: Gilt nur im {}-Block. var: Gilt in der ganzen Funktion (Hoisting). let ist moderner und sicherer.",
            },
            {
              id: "imp_lf5-ht-3_15",
              q: "Was ist JSON?",
              options: [
                "JavaScript Object Notation",
                "Ein Framework",
                "Eine Programmiersprache",
                "Ein Datenbank-Typ",
              ],
              correct: 0,
              explain:
                'Leichtgewichtiges Datenformat. JSON: Textformat für Datenaustausch. {"name":"Max","alter":25}. JSON.parse() (String→Objekt), JSON.stringify() (Objekt→String).',
            },
            {
              id: "imp_lf5-ht-3_16",
              q: "Was ist ein Promise?",
              options: [
                "Ein primitiver Variablentyp wie number oder string",
                "Objekt, das einen zukünftigen Wert repräsentiert",
                "Ein Schleifentyp für asynchrone Wiederholungen",
                "Ein wörtliches Versprechen des Entwicklers im Code",
              ],
              correct: 1,
              explain:
                "Pending→fulfilled/rejected. Promise: Asynchrone Operation. 3 Zustände: pending (läuft), fulfilled (Erfolg), rejected (Fehler). .then()/.catch().",
            },
            {
              id: "imp_lf5-ht-3_17",
              q: "Was ist das DOM?",
              options: [
                "Ein CSS-Framework",
                "Eine Datenbank",
                "Ein Server-Protokoll",
                "Document Object Model",
              ],
              correct: 3,
              explain:
                "Baumstruktur des HTML-Dokuments im Browser. DOM: Browser wandelt HTML in Baumstruktur um. JavaScript kann über DOM Elemente lesen, ändern, erstellen, löschen.",
            },
            {
              id: "imp_lf5-ht-3_18",
              q: "Was macht console.log()?",
              options: [
                "Speichert die Ausgaben als Logdatei auf der Festplatte des Nutzers",
                "Gibt Werte in der Browser-Entwicklerkonsole aus (Debugging)",
                "Fügt den übergebenen Text sichtbar in die Webseite ein (wie document.write)",
                "Sendet die Protokolldaten per E-Mail an den Administrator",
              ],
              correct: 1,
              explain:
                "console.log(): Ausgabe in F12-Konsole. Wichtigstes Debug-Werkzeug. console.error() für Fehler, console.table() für Arrays.",
            },
            {
              id: "imp_lf5-ht-3_19",
              q: "Was ist localStorage?",
              options: [
                "Ein Cookie",
                "Browser-seitiger Key-Value-Speicher",
                "Server-Speicher",
                "RAM-Speicher",
              ],
              correct: 1,
              explain:
                "Persistent, max ~5MB. localStorage: Daten bleiben auch nach Browser-Neustart. localStorage.setItem('key','value'), .getItem('key'). sessionStorage = nur für aktuelle Sitzung.",
            },
          ],
        },
      ],
    },
    {
      id: "lf5-db",
      title: "Datenbanken",
      lessons: [
        {
          id: "lf5-db-1",
          title: "ERM & Normalformen",
          content: [
            { type: "heading", value: "Entity-Relationship-Modell (ERM)" },
            {
              type: "text",
              value:
                "Entität (Rechteck): Objekt der realen Welt (Kunde, Produkt, Bestellung). Attribut (Oval): Eigenschaft einer Entität (Name, Preis, Datum). Primärschlüssel (PK): Eindeutiges Identifikationsmerkmal (unterstrichen). Fremdschlüssel (FK): Verweist auf PK einer anderen Tabelle. Beziehung (Raute): Verbindung zwischen Entitäten.",
            },
            { type: "heading", value: "Kardinalitäten" },
            {
              type: "text",
              value:
                "1:1 – Genau ein Datensatz zugeordnet (Person hat einen Personalausweis). 1:n – Ein Datensatz zu vielen (eine Abteilung hat viele Mitarbeiter). m:n – Viele zu viele (Schüler belegen viele Kurse, Kurse haben viele Schüler). m:n wird aufgelöst durch Zwischentabelle mit zwei Fremdschlüsseln.",
            },
            { type: "heading", value: "Normalformen" },
            {
              type: "text",
              value:
                "1NF: Jedes Attribut enthält nur atomare (unteilbare) Werte. Keine Listen, keine Wiederholungsgruppen. Beispiel-Verletzung: Spalte 'Telefon' mit '0123, 0456'. 2NF: 1NF + jedes Nicht-Schlüssel-Attribut hängt vom GESAMTEN Primärschlüssel ab. Relevant bei zusammengesetzten Schlüsseln. 3NF: 2NF + keine transitiven Abhängigkeiten. Kein Nicht-Schlüssel-Attribut hängt von einem anderen Nicht-Schlüssel-Attribut ab. Beispiel-Verletzung: PLZ bestimmt Stadt (PLZ->Stadt ist transitiv über Kunden-ID).",
            },
            { type: "heading", value: "Vom ERM zum relationalen Modell" },
            {
              type: "text",
              value:
                "Jede Entität wird eine Tabelle. Attribute werden Spalten. PK bleibt PK. Bei 1:n: FK in der n-Seite. Bei m:n: Zwischentabelle. Beispiel: Kunden(KundenID, Name, PLZ), Bestellungen(BestellID, Datum, KundenID_FK), Artikel(ArtikelID, Bezeichnung), Bestellpositionen(BestellID_FK, ArtikelID_FK, Menge).",
            },
            { type: "heading", value: "Durchgerechnetes Beispiel: Normalisierung" },
            {
              type: "text",
              value:
                "Ausgangstabelle (unnormalisiert): Bestellung(BestellNr, Kunde, KundenAdresse, Artikel1, Artikel2, Artikel3). Normalisiere bis zur 3NF.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1NF (atomar, keine Wiederholgruppen):\n Bestellposition(BestellNr, ArtikelNr, Menge)\n Bestellung(BestellNr, Kunde, KundenAdresse)\n → Artikel1/2/3 aufgelöst in einzelne Zeilen\n\n2NF (1NF + keine part. Abhängigkeit vom Schlüssel):\n Bestellung(BestellNr, KundenNr)\n Kunde(KundenNr, Kunde, KundenAdresse)\n Bestellposition(BestellNr, ArtikelNr, Menge)\n\n3NF (2NF + keine transitive Abhängigkeit):\n Falls KundenAdresse von PLZ abhängt:\n Kunde(KundenNr, Name, PLZ)\n Ort(PLZ, Ortsname)\n → transitive Abhängigkeit aufgelöst",
            },
            { type: "heading", value: "Übungsaufgabe 2: Normalformen" },
            {
              type: "text",
              value:
                "Tabelle BESTELLUNG(BestellNr, KundenNr, KundenName, KundenOrt, Artikel, Preis). Welche NF? Bringe sie in 3NF.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1NF (atomare Werte), aber nicht 2NF: KundenName/Ort hängen nur von KundenNr ab.\n\n2NF/3NF:\nKUNDE(KundenNr, KundenName, KundenOrt)\nBESTELLUNG(BestellNr, KundenNr, Artikel, Preis)\nFremdschlüssel KundenNr in BESTELLUNG.",
            },
            { type: "heading", value: "Beispiel 1: ER-Modell: Kunden-Bestellungen" },
            {
              type: "text",
              value:
                "Entitäten: KUNDE (KundenNr PK, Name, Adresse), BESTELLUNG (BestellNr PK, Datum, KundenNr FK), PRODUKT (ProduktNr PK, Bezeichnung, Preis). Beziehungen: KUNDE 1:n BESTELLUNG (ein Kunde, viele Bestellungen). BESTELLUNG n:m PRODUKT (über Zwischentabelle BESTELLPOSITION mit BestellNr FK, ProduktNr FK, Menge). Die n:m-Beziehung wird IMMER über eine Zwischentabelle aufgelöst.",
            },
            { type: "heading", value: "Beispiel 2: Normalformen am Beispiel" },
            {
              type: "text",
              value:
                "Unnormalisiert: Name|Adresse|Bestellung|Produkte. 1NF: Atomare Werte (keine Listen in Zellen → 'Laptop,Maus' in separate Zeilen). 2NF: Volle funktionale Abhängigkeit vom Gesamtschlüssel (Produktname hängt nur von ProduktNr ab, nicht von BestellNr → eigene Tabelle). 3NF: Keine transitiven Abhängigkeiten (PLZ→Ort hängt transitiv von KundenNr ab → Ort-Tabelle auslagern).",
            },
            { type: "heading", value: "Übungsaufgabe 2: ER-Modell entwerfen" },
            {
              type: "text",
              value:
                "Entwirf ein ER-Modell für eine Schulbibliothek: Schüler können Bücher ausleihen. Jedes Buch hat einen Autor. Ein Schüler kann mehrere Bücher ausleihen. Ein Buch kann von verschiedenen Schülern ausgeliehen werden (aber nicht gleichzeitig). Definiere Entitäten, Attribute, Primärschlüssel und Beziehungen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nEntitäten:\nSCHÜLER (SchülerNr PK, Name, Klasse)\nBUCH (BuchNr PK, Titel, ISBN, AutorNr FK)\nAUTOR (AutorNr PK, Name, Vorname)\nAUSLEIHE (AusleiheNr PK, SchülerNr FK, BuchNr FK, Ausleihdatum, Rückgabedatum)\n\nBeziehungen:\n- SCHÜLER 1:n AUSLEIHE (ein Schüler, viele Ausleihen)\n- BUCH 1:n AUSLEIHE (ein Buch, viele Ausleihen über die Zeit)\n- AUTOR 1:n BUCH (ein Autor, viele Bücher)\n\nAUSLEIHE ist die Auflösungstabelle der n:m-Beziehung SCHÜLER↔BUCH.\nRückgabedatum = NULL bedeutet: Buch noch ausgeliehen.\nConstraint: Nur eine aktive Ausleihe pro Buch (WHERE Rückgabedatum IS NULL).",
            },
          ],
          quiz: [
            {
              id: "imp_lf5-db-1_0",
              q: "1NF verlangt?",
              options: [
                "Atomare Werte",
                "Referenzielle Integrität",
                "Fremdschlüssel",
                "Keine Redundanz",
              ],
              correct: 0,
              explain: "Atomare (unteilbare) Werte in jeder Zelle.",
            },
            {
              id: "imp_lf5-db-1_1",
              q: "m:n Beziehung wird aufgelöst durch?",
              options: ["Normalisierung", "Zusätzlichen PK", "Löschen", "Zwischentabelle"],
              correct: 3,
              explain: "Zwischentabelle mit zwei Fremdschlüsseln.",
            },
            {
              id: "imp_lf5-db-1_2",
              q: "3NF verbietet?",
              options: [
                "Transitive Abhängigkeiten",
                "Zusammengesetzte Schlüssel",
                "Atomare Werte",
                "Fremdschlüssel",
              ],
              correct: 0,
              explain:
                "3NF: Kein Nicht-Schlüssel-Attribut hängt von einem anderen Nicht-Schlüssel ab.",
            },
            {
              id: "imp_lf5-db-1_3",
              q: "FK verweist auf?",
              options: ["Sich selbst", "View", "PK einer anderen Tabelle", "Index"],
              correct: 2,
              explain: "FK = Referenz auf Primärschlüssel einer anderen Tabelle.",
            },
            {
              id: "imp_lf5-db-1_4",
              q: "2NF relevant bei?",
              options: ["Nie", "Zusammengesetztem PK", "Nur 1 PK", "Immer"],
              correct: 1,
              explain: "2NF nur relevant bei zusammengesetztem Primärschlüssel.",
            },
            {
              id: "imp_lf5-db-1_5",
              q: "Referenzielle Integrität?",
              options: [
                "Tabellen gleich groß",
                "Nur Views",
                "FK muss auf existierenden PK zeigen",
                "Daten korrekt",
              ],
              correct: 2,
              explain: "Jeder FK-Wert muss als PK in referenzierter Tabelle existieren.",
            },
            {
              id: "imp_lf5-db-1_6",
              q: "Primärschlüssel Eigenschaft?",
              options: ["Kann NULL sein", "Eindeutig + NOT NULL", "Optional", "Kann doppelt sein"],
              correct: 1,
              explain: "PK: Eindeutig identifizierend, darf nicht NULL sein.",
            },
            {
              id: "imp_lf5-db-1_7",
              q: "BCNF?",
              options: [
                "Vorstufe der 1NF, die vor der Normalisierung geprüft wird",
                "Identisch mit der 2NF, nur eine ältere Bezeichnung dafür",
                "Diese Normalform existiert nicht, nach der 3NF ist Schluss",
                "Stärkere 3NF: Jeder Determinant ist Schlüsselkandidat",
              ],
              correct: 3,
              explain: "Boyce-Codd NF: Strengere Form der 3NF.",
            },
            {
              id: "imp_lf5-db-1_8",
              q: "CASCADE bei FK?",
              options: [
                "Bei Löschung des PK werden FK-Datensätze mitgelöscht",
                "Die Löschung wird mit einem Constraint-Fehler abgewiesen",
                "Nichts – die FK-Datensätze bleiben unverändert bestehen",
                "Vor der Löschung wird automatisch ein Backup der Tabelle angelegt",
              ],
              correct: 0,
              explain: "ON DELETE CASCADE: Abhängige Datensätze werden automatisch gelöscht.",
            },
            {
              id: "imp_lf5-db-1_9",
              q: "INDEX Zweck?",
              options: [
                "Sortierung erzwingen",
                "Fremdschlüssel",
                "Datensicherheit",
                "Schnellere Abfragen (wie Buchindex)",
              ],
              correct: 3,
              explain: "Index beschleunigt SELECT, verlangsamt INSERT/UPDATE leicht.",
            },
            {
              id: "imp_lf5-db-1_10",
              q: "Was ist ein Primärschlüssel?",
              options: [
                "Der erste eingetragene Datensatz einer Tabelle",
                "Eindeutiger Identifikator für jeden Datensatz einer Tabelle",
                "Ein Verweis auf den Schlüssel einer anderen Tabelle",
                "Das Master-Passwort für den Datenbankzugriff",
              ],
              correct: 1,
              explain:
                "PK: Einmalig, nicht NULL, identifiziert jeden Datensatz eindeutig. z.B. KundenNr, ISBN.",
            },
            {
              id: "imp_lf5-db-1_11",
              q: "Was ist ein Fremdschlüssel?",
              options: [
                "Ein kryptografisch verschlüsselter Schlüssel zum Schutz der Tabelle",
                "Ein optionaler Zweitschlüssel für schnellere Sortierungen",
                "Attribut, das auf den Primärschlüssel einer anderen Tabelle verweist",
                "Ein Schlüsselwert, der aus einem ausländischen Zeichensatz stammt",
              ],
              correct: 2,
              explain:
                "FK: Stellt die Beziehung zwischen Tabellen her. Muss auf existierenden PK verweisen (referenzielle Integrität).",
            },
            {
              id: "imp_lf5-db-1_12",
              q: "Was ist eine n:m-Beziehung?",
              options: ["Eins zu Eins", "Viele-zu-Viele", "Eins zu Viele", "Keine Beziehung"],
              correct: 1,
              explain:
                "Wird über Zwischentabelle aufgelöst. n:m: Schüler↔Kurs. Ein Schüler hat viele Kurse, ein Kurs hat viele Schüler. Zwischentabelle: BELEGUNG(SchülerNr,KursNr).",
            },
            {
              id: "imp_lf5-db-1_13",
              q: "Was fordert die 1. Normalform?",
              options: [
                "Atomare Werte",
                "Keine Fremdschlüssel",
                "Maximal 3 Spalten",
                "Keine Redundanz",
              ],
              correct: 0,
              explain:
                "Keine Listen/Mehrfachwerte in einer Zelle. 1NF: Jede Zelle enthält genau einen Wert. 'Laptop,Maus' in einer Zelle verletzt 1NF → in separate Zeilen aufteilen.",
            },
            {
              id: "imp_lf5-db-1_14",
              q: "Was fordert die 2. Normalform?",
              options: [
                "1NF und die Bedingung, dass jede Tabelle überhaupt einen Primärschlüssel besitzt",
                "1NF und die vollständige Beseitigung sämtlicher Redundanzen in allen Tabellen",
                "1NF + jedes Nichtschlüssel-Attribut voll funktional abhängig vom Gesamtschlüssel",
                "1NF und die Pflicht, jede Beziehung über Fremdschlüssel mit Constraints abzubilden",
              ],
              correct: 2,
              explain:
                "2NF: 1NF + kein Nichtschlüssel-Attribut hängt nur von einem TEIL des zusammengesetzten Schlüssels ab.",
            },
            {
              id: "imp_lf5-db-1_15",
              q: "Was ist eine Kardinalität?",
              options: [
                "Der Datentyp eines Attributs, z. B. INTEGER oder VARCHAR",
                "Die Anzahl der Attribute (Spalten) einer einzelnen Tabelle",
                "Die Gesamtzahl der Tabellen in einem Datenbankschema",
                "Art der Beziehung zwischen Entitäten (1:1, 1:n, n:m)",
              ],
              correct: 3,
              explain:
                "Kardinalität beschreibt, wie viele Entitäten einer Seite mit wie vielen der anderen Seite in Beziehung stehen.",
            },
            {
              id: "imp_lf5-db-1_16",
              q: "Was ist referenzielle Integrität?",
              options: [
                "FK muss auf existierenden PK verweisen",
                "Backup-Strategie",
                "Indexierung",
                "Datenbank-Verschlüsselung",
              ],
              correct: 0,
              explain:
                "Keine verwaisten Referenzen. Referenzielle Integrität: Kein FK darf auf einen nicht existierenden PK zeigen. DB verhindert das.",
            },
            {
              id: "imp_lf5-db-1_17",
              q: "Was ist eine Entität im ER-Modell?",
              options: [
                "Eine Beziehung",
                "Ein reales Objekt/Konzept, das Daten hat",
                "Ein Attribut",
                "Eine Datenbank",
              ],
              correct: 1,
              explain:
                "Z.B. Kunde, Produkt, Bestellung. Entität = Ding der realen Welt, das gespeichert wird. Wird zur Tabelle in der Datenbank.",
            },
            {
              id: "imp_lf5-db-1_18",
              q: "Was ist ein zusammengesetzter Primärschlüssel?",
              options: [
                "PK bestehend aus mehreren Attributen zusammen",
                "Ein PK, der zwei Tabellen miteinander verbindet",
                "Ein PK, dessen Werte verschlüsselt abgelegt sind",
                "Ein PK mit besonders vielen Zeichen pro Wert",
              ],
              correct: 0,
              explain:
                "Z.B. BestellNr+ProduktNr. Zusammengesetzter PK: Kein einzelnes Attribut ist eindeutig, aber die Kombination schon (typisch bei Zwischentabellen).",
            },
            {
              id: "imp_lf5-db-1_19",
              q: "Was ist die 3. Normalform?",
              options: [
                "2NF + keine transitiven Abhängigkeiten",
                "Alle Normalformen zusammen",
                "2NF + Index",
                "2NF + keine Listen",
              ],
              correct: 0,
              explain:
                "3NF: 2NF + kein Nichtschlüssel-Attribut hängt transitiv über ein anderes Nichtschlüssel-Attribut vom PK ab (z.B. PLZ→Ort auslagern).",
            },
          ],
        },
        {
          id: "lf5-db-2",
          title: "SQL (DDL, DML & Abfragen)",
          content: [
            { type: "heading", value: "DDL (Data Definition Language)" },
            {
              type: "code",
              value:
                "CREATE TABLE kunden (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(150) UNIQUE,\n  plz CHAR(5),\n  aktiv BOOLEAN DEFAULT true\n);\nALTER TABLE kunden ADD telefon VARCHAR(20);\nDROP TABLE kunden;  -- Tabelle löschen!",
            },
            { type: "heading", value: "DML (Data Manipulation Language)" },
            {
              type: "code",
              value:
                "INSERT INTO kunden (name, email, plz) VALUES ('Max', 'max@mail.de', '21335');\nUPDATE kunden SET aktiv = false WHERE id = 5;\nDELETE FROM kunden WHERE aktiv = false;",
            },
            { type: "heading", value: "SELECT-Abfragen & JOINs" },
            {
              type: "code",
              value:
                "-- Grundabfrage mit Filter und Sortierung\nSELECT name, email FROM kunden WHERE plz LIKE '21%' ORDER BY name ASC;\n\n-- INNER JOIN (nur übereinstimmende Datensätze)\nSELECT k.name, b.datum, b.summe\nFROM kunden k\nINNER JOIN bestellungen b ON k.id = b.kunden_id;\n\n-- LEFT JOIN (alle Kunden, auch ohne Bestellung)\nSELECT k.name, COUNT(b.id) AS anzahl\nFROM kunden k\nLEFT JOIN bestellungen b ON k.id = b.kunden_id\nGROUP BY k.name;",
            },
            { type: "heading", value: "Aggregation & Gruppierung" },
            {
              type: "text",
              value:
                "Aggregatfunktionen: COUNT(), SUM(), AVG(), MIN(), MAX(). GROUP BY: Gruppiert Ergebnisse (z.B. Umsatz pro Kunde). HAVING: Filter NACH Gruppierung (WHERE filtert VOR Gruppierung). Beispiel: SELECT plz, COUNT(*) AS anzahl FROM kunden GROUP BY plz HAVING COUNT(*) > 5;",
            },
            { type: "heading", value: "JOINs Vergleich" },
            {
              type: "text",
              value:
                "INNER JOIN: Nur Datensätze mit Match in BEIDEN Tabellen. LEFT JOIN: Alle aus linker Tabelle + Matches rechts (NULL wenn kein Match). RIGHT JOIN: Alle aus rechter Tabelle + Matches links. FULL OUTER JOIN: Alle aus beiden Tabellen.",
            },
            { type: "heading", value: "Übungsaufgabe: SQL" },
            {
              type: "text",
              value:
                "Tabelle mitarbeiter(id, name, abteilung, gehalt). Schreibe SQL für: a) Durchschnittsgehalt je Abteilung, b) Abteilungen mit mehr als 3 Mitarbeitern, c) die 5 bestbezahlten Mitarbeiter.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n-- a) Durchschnittsgehalt je Abteilung\nSELECT abteilung, AVG(gehalt) AS schnitt\nFROM mitarbeiter\nGROUP BY abteilung;\n\n-- b) Abteilungen mit > 3 Mitarbeitern\nSELECT abteilung, COUNT(*) AS anzahl\nFROM mitarbeiter\nGROUP BY abteilung\nHAVING COUNT(*) > 3;\n\n-- c) Top 5 nach Gehalt\nSELECT name, gehalt\nFROM mitarbeiter\nORDER BY gehalt DESC\nLIMIT 5;\n\nMerke: WHERE filtert Zeilen VOR Gruppierung,\nHAVING filtert Gruppen NACH der Gruppierung.",
            },
            { type: "heading", value: "Übungsaufgabe 2: SQL-Abfragen" },
            {
              type: "text",
              value:
                "Tabelle MITARBEITER(id, name, abteilung, gehalt). SQL für: a) IT-Mitarbeiter nach Gehalt absteigend, b) Durchschnittsgehalt pro Abteilung, c) Abteilungen mit Schnitt über 4000.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) SELECT * FROM MITARBEITER WHERE abteilung='IT' ORDER BY gehalt DESC;\nb) SELECT abteilung, AVG(gehalt) FROM MITARBEITER GROUP BY abteilung;\nc) SELECT abteilung, AVG(gehalt) FROM MITARBEITER GROUP BY abteilung HAVING AVG(gehalt)>4000;\nWHERE filtert VOR Gruppierung, HAVING NACH Gruppierung.",
            },
            { type: "heading", value: "Beispiel 1: SQL CRUD-Operationen" },
            {
              type: "text",
              value:
                "CREATE TABLE kunden (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100) NOT NULL, email VARCHAR(100) UNIQUE); INSERT INTO kunden (name, email) VALUES ('Max Muster', 'max@firma.de'); SELECT * FROM kunden WHERE name LIKE 'M%'; UPDATE kunden SET email='neu@firma.de' WHERE id=1; DELETE FROM kunden WHERE id=1; CRUD = Create, Read, Update, Delete – die 4 Grundoperationen.",
            },
            { type: "heading", value: "Beispiel 2: JOIN-Typen" },
            {
              type: "text",
              value:
                "INNER JOIN: Nur Zeilen, die in BEIDEN Tabellen einen Match haben. LEFT JOIN: Alle Zeilen der linken Tabelle + Matches rechts (NULL wenn kein Match). RIGHT JOIN: Umgekehrt. Beispiel: SELECT k.name, b.datum FROM kunden k LEFT JOIN bestellungen b ON k.id = b.kunden_id; Zeigt ALLE Kunden, auch die ohne Bestellung (Bestelldatum = NULL).",
            },
            { type: "heading", value: "Beispiel 3: Aggregatfunktionen und GROUP BY" },
            {
              type: "text",
              value:
                "SELECT abteilung, COUNT(*) AS anzahl, AVG(gehalt) AS schnitt FROM mitarbeiter GROUP BY abteilung HAVING AVG(gehalt) > 50000 ORDER BY schnitt DESC; COUNT zählt Zeilen, AVG berechnet Durchschnitt. GROUP BY gruppiert nach Abteilung. HAVING filtert Gruppen (nicht WHERE! WHERE filtert einzelne Zeilen VOR der Gruppierung).",
            },
            { type: "heading", value: "Übungsaufgabe 3: SQL-Abfragen schreiben" },
            {
              type: "text",
              value:
                "Gegeben: Tabellen KUNDEN(id, name, stadt), BESTELLUNGEN(id, kunden_id, datum, betrag). Schreibe SQL für:\na) Alle Kunden aus Hamburg\nb) Gesamtumsatz pro Kunde (Name + Summe), sortiert nach Umsatz absteigend\nc) Kunden die noch NIE bestellt haben",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) SELECT * FROM kunden WHERE stadt = 'Hamburg';\n\nb) SELECT k.name, SUM(b.betrag) AS gesamtumsatz\n   FROM kunden k\n   INNER JOIN bestellungen b ON k.id = b.kunden_id\n   GROUP BY k.name\n   ORDER BY gesamtumsatz DESC;\n\nc) SELECT k.name\n   FROM kunden k\n   LEFT JOIN bestellungen b ON k.id = b.kunden_id\n   WHERE b.id IS NULL;\n\n   Erklärung: LEFT JOIN gibt alle Kunden. Wenn kein Match in bestellungen → b.id ist NULL.\n   WHERE b.id IS NULL filtert genau die Kunden ohne Bestellung.\n   Alternative: SELECT name FROM kunden WHERE id NOT IN (SELECT kunden_id FROM bestellungen);",
            },
          ],
          quiz: [
            {
              id: "imp_lf5-db-2_0",
              q: "UPDATE ändert?",
              options: ["Vorhandene Datensätze", "Berechtigungen", "Tabellenstruktur", "Indizes"],
              correct: 0,
              explain: "UPDATE = Datensätze ändern. ALTER = Struktur.",
            },
            {
              id: "imp_lf5-db-2_1",
              q: "LEFT JOIN zeigt?",
              options: [
                "Alle links + Matches rechts",
                "Nur Matches",
                "Alle rechts",
                "Keine NULL-Werte",
              ],
              correct: 0,
              explain: "LEFT JOIN: Alle aus linker Tabelle, NULL, wenn kein Match rechts.",
            },
            {
              id: "imp_lf5-db-2_2",
              q: "HAVING vs. WHERE?",
              options: [
                "Gleich",
                "WHERE filtert nach GROUP BY",
                "HAVING ist schneller",
                "HAVING filtert nach GROUP BY",
              ],
              correct: 3,
              explain: "WHERE filtert VOR Gruppierung, HAVING filtert NACH Gruppierung.",
            },
            {
              id: "imp_lf5-db-2_3",
              q: "Anzahl Kunden pro PLZ?",
              options: [
                "SELECT plz FROM kunden",
                "SELECT DISTINCT plz FROM kunden",
                "SELECT plz, COUNT(*) FROM kunden GROUP BY plz",
                "SELECT COUNT(plz) FROM kunden",
              ],
              correct: 2,
              explain: "GROUP BY plz + COUNT(*) zählt pro PLZ-Gruppe.",
            },
            {
              id: "imp_lf5-db-2_4",
              q: "DISTINCT?",
              options: [
                "Alle Duplikate",
                "Gruppieren",
                "Nur eindeutige Werte anzeigen",
                "Sortieren",
              ],
              correct: 2,
              explain: "SELECT DISTINCT entfernt doppelte Ergebniszeilen.",
            },
            {
              id: "imp_lf5-db-2_5",
              q: "ALTER TABLE?",
              options: [
                "Daten einfügen",
                "Tabelle löschen",
                "Daten ändern",
                "Tabellenstruktur ändern (Spalte hinzufügen)",
              ],
              correct: 3,
              explain: "ALTER = Struktur ändern (ADD COLUMN, DROP COLUMN).",
            },
            {
              id: "imp_lf5-db-2_6",
              q: "WHERE vs HAVING?",
              options: ["HAVING vor", "Gleich", "WHERE nach", "WHERE vor, HAVING nach GROUP BY"],
              correct: 3,
              explain: "WHERE filtert Zeilen, HAVING Gruppen.",
            },
            {
              id: "imp_lf5-db-2_7",
              q: "INNER JOIN?",
              options: ["Alle rechts", "Alle links", "Alle", "Nur Matches in beiden Tabellen"],
              correct: 3,
              explain: "Nur übereinstimmende.",
            },
            {
              id: "imp_lf5-db-2_8",
              q: "ORDER BY DESC?",
              options: ["Aufsteigend", "Zufällig", "Absteigend", "Nach ID"],
              correct: 2,
              explain: "Z→A, 9→1.",
            },
            {
              id: "imp_lf5-db-2_9",
              q: "CREATE INDEX?",
              options: ["Daten einfügen", "Schnellere Abfragen", "Tabelle", "View"],
              correct: 1,
              explain: "Index beschleunigt SELECT.",
            },
            {
              id: "imp_lf5-db-2_10",
              q: "Was ist der Unterschied zwischen WHERE und HAVING?",
              options: [
                "Es gibt keinen Unterschied; beide Schlüsselwörter sind frei austauschbar",
                "HAVING arbeitet schneller, weil es Indizes effizienter nutzt als WHERE",
                "WHERE kann ausschließlich Textspalten filtern, HAVING auch Zahlen",
                "WHERE filtert Zeilen vor GROUP BY, HAVING filtert Gruppen nach GROUP BY",
              ],
              correct: 3,
              explain:
                "WHERE: Filtert einzelne Datensätze. HAVING: Filtert nach Aggregation (GROUP BY). HAVING kann COUNT/SUM/AVG nutzen.",
            },
            {
              id: "imp_lf5-db-2_11",
              q: "Was macht LEFT JOIN?",
              options: [
                "Nur die Zeilen der rechten Tabelle",
                "Nur Datensätze mit Treffern in beiden Tabellen",
                "Alle Zeilen der linken Tabelle + Matches rechts",
                "Vertauscht die Reihenfolge der beiden Tabellen",
              ],
              correct: 2,
              explain:
                "NULL bei keinem Match. LEFT JOIN: Alle links, matches rechts. Kein Match → NULL-Werte in den rechten Spalten.",
            },
            {
              id: "imp_lf5-db-2_12",
              q: "Was bedeutet AUTO_INCREMENT?",
              options: [
                "Die Datenbank erstellt automatisch regelmäßige Backups",
                "Datenbank vergibt automatisch fortlaufende Nummern für den PK",
                "Der Tabelle wird automatisch mehr Speicherplatz zugewiesen",
                "Alte Datensätze werden automatisch nach Ablauf gelöscht",
              ],
              correct: 1,
              explain:
                "AUTO_INCREMENT: Neuer Datensatz bekommt automatisch nächste freie ID. Muss nicht manuell angegeben werden.",
            },
            {
              id: "imp_lf5-db-2_13",
              q: "Was macht DISTINCT?",
              options: [
                "Sortiert Daten",
                "Entfernt Duplikate aus dem Ergebnis",
                "Zählt Einträge",
                "Daten löschen",
              ],
              correct: 1,
              explain:
                "SELECT DISTINCT stadt FROM kunden; → Jede Stadt nur einmal, auch wenn sie mehrfach vorkommt.",
            },
            {
              id: "imp_lf5-db-2_14",
              q: "Was ist eine View?",
              options: [
                "Ein Index, der Abfragen auf großen Tabellen beschleunigt",
                "Ein Eingabeformular, über das Benutzer Datensätze anlegen",
                "Ein CSS-Layout, das die Tabellendarstellung im Browser steuert",
                "Gespeicherte Abfrage, die wie eine virtuelle Tabelle genutzt werden kann",
              ],
              correct: 3,
              explain:
                "CREATE VIEW umsatz AS SELECT ... → View speichert die Query, nicht die Daten. Vereinfacht komplexe Abfragen.",
            },
            {
              id: "imp_lf5-db-2_15",
              q: "Was macht ORDER BY datum DESC?",
              options: [
                "Die Datumsspalte in das Format TT.MM.JJJJ umwandeln",
                "Das Ergebnis aufsteigend sortieren (älteste zuerst)",
                "Ergebnis nach Datum absteigend sortieren (neueste zuerst)",
                "Die Datumsspalte aus dem Ergebnis entfernen",
              ],
              correct: 2,
              explain:
                "DESC = descending (absteigend). ASC = ascending (aufsteigend, Standard). Neueste zuerst → DESC.",
            },
            {
              id: "imp_lf5-db-2_16",
              q: "Was ist SQL-Injection?",
              options: [
                "Verfahren, mit dem eine SQL-Datenbank regelmäßig per Dump-Datei gesichert wird",
                "SQL-Befehl, mit dem bestehende Datensätze in einer Tabelle geändert werden",
                "Angriff, bei dem Schadcode über Benutzereingaben in SQL-Abfragen eingeschleust wird",
                "Funktion, mit der Abfrageergebnisse in eine CSV-Datei exportiert werden",
              ],
              correct: 2,
              explain:
                "Injection: Eingabe ' OR 1=1 -- löscht WHERE-Bedingung. Schutz: Prepared Statements/Parametrisierte Queries nutzen!",
            },
            {
              id: "imp_lf5-db-2_17",
              q: "Was ist ein INDEX?",
              options: [
                "Eine Beziehung zwischen zwei Tabellen über Fremdschlüssel",
                "Ein anderer Name für den Primärschlüssel einer Tabelle",
                "Datenstruktur, die Datenbankabfragen beschleunigt (wie ein Buchindex)",
                "Der fortlaufend durchnummerierte Inhalt der Tabellenzeilen",
              ],
              correct: 2,
              explain:
                "Index: B-Tree auf häufig abgefragte Spalten. SELECT wird schneller, INSERT/UPDATE etwas langsamer (Index muss aktualisiert werden).",
            },
            {
              id: "imp_lf5-db-2_18",
              q: "Was macht GROUP BY?",
              options: [
                "Sortiert die Ergebniszeilen auf- oder absteigend nach einer Spalte",
                "Verbindet zwei Tabellen über gemeinsame Schlüsselspalten miteinander",
                "Entfernt Zeilen mit gleichen Werten dauerhaft aus der Tabelle",
                "Fasst Zeilen mit gleichen Werten zusammen für Aggregatfunktionen",
              ],
              correct: 3,
              explain:
                "GROUP BY stadt: Alle Zeilen mit gleicher Stadt werden zusammengefasst. Dann COUNT/SUM/AVG pro Gruppe.",
            },
            {
              id: "imp_lf5-db-2_19",
              q: "Was ist NULL in SQL?",
              options: ["Fehlender/unbekannter Wert", "Leerer String", "Fehler", "Zahl 0"],
              correct: 0,
              explain:
                "Nicht das Gleiche wie 0 oder ''. NULL = kein Wert vorhanden. NULL ≠ 0, NULL ≠ ''. Prüfung: IS NULL / IS NOT NULL (nicht = NULL!).",
            },
          ],
        },
      ],
    },
    {
      id: "lf5-se",
      title: "Software-Engineering",
      lessons: [
        {
          id: "lf5-se-1",
          title: "Entwicklungsmethoden",
          content: [
            { type: "heading", value: "Wasserfall vs. Agil" },
            {
              type: "text",
              value:
                "Wasserfall: Sequenziell, planbar, unflexibel. Agil: Iterativ, Feedback, anpassungsfähig.",
            },
            { type: "heading", value: "Scrum" },
            {
              type: "text",
              value:
                "Rollen: Product Owner (Was), Scrum Master (Wie/Hindernisse), Dev Team. Events: Sprint (1-4 Wo.), Planning, Daily (15 Min), Review, Retrospective. Artefakte: Product/Sprint Backlog, Increment.",
            },
            { type: "heading", value: "Kanban" },
            {
              type: "text",
              value: "Board (To Do→In Progress→Done), WIP-Limits, kontinuierlicher Fluss.",
            },
            { type: "heading", value: "Weitere Vorgehensmodelle" },
            {
              type: "text",
              value:
                "Spiralmodell (Boehm): Iterativ in 4 Phasen pro Durchlauf: 1. Ziele festlegen, 2. Risiken analysieren, 3. Entwickeln+Testen, 4. Planen des nächsten Zyklus. Jeder Zyklus erweitert das Produkt. Gut für risikoreiche Großprojekte. V-Modell: Jeder Entwicklungsphase (links) ist eine Testphase (rechts) zugeordnet: Anforderung↔Abnahmetest, Entwurf↔Integrationstest, Implementierung↔Modultest. Prototyping: Frühzeitig einen Prototyp bauen, um Anforderungen zu validieren. Throwaway (wird verworfen) oder Evolutionary (wird weiterentwickelt). PDCA-Zyklus (Deming): Plan (Analyse, Ziele setzen) → Do (Maßnahmen umsetzen) → Check (Ergebnisse prüfen) → Act (Verbesserungen standardisieren). Grundlage für kontinuierliche Verbesserung (KVP/Kaizen).",
            },
            { type: "heading", value: "Teststufen" },
            {
              type: "text",
              value:
                "Modultest/Unit Test: Einzelne Funktion isoliert testen (White-Box, Entwickler). Integrationstest: Zusammenspiel mehrerer Module prüfen. Systemtest: Gesamtes System gegen Anforderungen (Pflichtenheft). Abnahmetest: Kunde testet (Black-Box, gegen Lastenheft). Black-Box: Nur Ein-/Ausgabe prüfen, Code ist unbekannt. White-Box: Code und Logik sind bekannt, Pfade werden getestet. Verifikation: Wurde das Produkt RICHTIG gebaut? (Code korrekt implementiert?) Validierung: Wurde das RICHTIGE Produkt gebaut? (Erfüllt es den Kundenwunsch?)",
            },
            { type: "heading", value: "Übungsaufgabe 1: Wasserfall vs. Agil" },
            {
              type: "text",
              value:
                "Vergleiche Wasserfallmodell und Scrum. Je 2 Vor-/Nachteile. Wann passt welches?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nWasserfall: + Klare Struktur, gute Doku. + Gut für feste Anforderungen. - Änderungen spät teuer. - Kunde sieht Ergebnis erst am Ende.\nScrum: + Flexibel bei Änderungen. + Frühes Feedback. - Schwer planbar (Gesamtkosten). - Erfordert engagiertes Team.\nWasserfall: Stabile Anforderungen. Scrum: Dynamisch, unklar.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Scrum-Rollen" },
            {
              type: "text",
              value: "Erkläre die drei Scrum-Rollen und die wichtigsten Scrum-Events.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nRollen: Product Owner (WAS, Backlog priorisieren), Scrum Master (Prozess schützen, Hindernisse beseitigen), Dev Team (selbstorganisiert, 3-9 Personen).\nEvents: Sprint Planning (Was im Sprint?), Daily (15 Min), Sprint Review (Ergebnis zeigen), Retrospective (Prozess verbessern). Sprint: 1-4 Wochen Zeitbox.",
            },
            { type: "heading", value: "Beispiel 1: Wasserfall vs. Scrum" },
            {
              type: "text",
              value:
                "Wasserfall: Phasen strikt nacheinander (Anforderung→Design→Implementierung→Test→Betrieb). Änderungen spät = teuer. Geeignet für: Regulierte Projekte (Medizintechnik), feste Anforderungen. Scrum: Iterativ in Sprints (2-4 Wochen). Product Backlog → Sprint Planning → Daily Standup → Sprint Review → Retrospektive. Änderungen jederzeit über Backlog. Geeignet für: Softwareentwicklung mit sich ändernden Anforderungen.",
            },
            { type: "heading", value: "Beispiel 2: Scrum-Rollen im IT-Projekt" },
            {
              type: "text",
              value:
                "Product Owner: Bestimmt WAS gebaut wird (Priorisiert Backlog). Ist die Stimme des Kunden. Scrum Master: Sorgt dafür, dass Scrum-Regeln eingehalten werden, räumt Hindernisse weg. Ist KEIN Projektmanager! Dev-Team: 3-9 Personen, selbstorganisiert, entscheidet WIE umgesetzt wird. Beispiel IT-Projekt: PO = Fachabteilungsleiter, SM = erfahrener Entwickler, Team = 5 Entwickler + 1 Tester.",
            },
            { type: "heading", value: "Beispiel 3: Kanban im IT-Support" },
            {
              type: "text",
              value:
                "Kanban-Board: To Do → In Progress → Review → Done. WIP-Limit (Work in Progress): Max. 3 Tickets gleichzeitig in 'In Progress'. Verhindert Überlastung. Pull-Prinzip: Neues Ticket wird erst gezogen, wenn Kapazität frei. Kein fester Sprint-Rhythmus (anders als Scrum). Ideal für Support/Betrieb, wo Aufgaben unvorhersehbar reinkommen.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Vorgehensmodell wählen" },
            {
              type: "text",
              value:
                "Für welches Vorgehensmodell (Wasserfall, Scrum, Kanban) würdest du dich entscheiden? Begründe für jedes Szenario:\na) Entwicklung einer Banking-App mit BaFin-Regulierung\nb) Internes Tool für die IT-Abteilung, Anforderungen noch unklar\nc) IT-Helpdesk mit täglichen Supporttickets",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Banking-App → Wasserfall (oder V-Modell)\nBegründung: BaFin fordert umfangreiche Dokumentation, jede Phase muss abgenommen werden. Regulatorische Anforderungen stehen fest, Änderungen sind aufwändig. Phasenmodell mit definierten Meilensteinen passt am besten.\n\nb) Internes Tool → Scrum\nBegründung: Anforderungen unklar → iteratives Vorgehen. Nach jedem Sprint (2 Wochen) kann die IT-Abteilung Feedback geben und Prioritäten ändern. Schnelle erste Version (MVP) nach wenigen Sprints.\n\nc) IT-Helpdesk → Kanban\nBegründung: Tickets kommen unvorhersehbar, keine festen Sprint-Zyklen nötig. WIP-Limit verhindert Überlastung. Pull-Prinzip passt zum Support-Alltag. Board visualisiert den Status aller Tickets.",
            },
          ],
          quiz: [
            {
              id: "imp_lf5-se-1_0",
              q: "Scrum: Wer priorisiert das Backlog?",
              options: ["Product Owner", "Dev Team", "Stakeholder", "Scrum Master"],
              correct: 0,
              explain: "Product Owner.",
            },
            {
              id: "imp_lf5-se-1_1",
              q: "WIP-Limits gehören zu?",
              options: ["Kanban", "V-Modell", "Scrum", "Wasserfall"],
              correct: 0,
              explain: "Kanban.",
            },
            {
              id: "imp_lf5-se-1_2",
              q: "Scrum: Sprint-Dauer?",
              options: ["1-4 Wochen", "1 Tag", "6 Monate", "3 Monate"],
              correct: 0,
              explain: "Typisch 2 Wochen, max. 4 Wochen.",
            },
            {
              id: "imp_lf5-se-1_3",
              q: "Product Owner Aufgabe?",
              options: [
                "Product Backlog priorisieren",
                "Testen",
                "Code schreiben",
                "Server administrieren",
              ],
              correct: 0,
              explain: "PO priorisiert Anforderungen im Product Backlog.",
            },
            {
              id: "imp_lf5-se-1_4",
              q: "V-Modell?",
              options: [
                "Nur für Software",
                "Wasserfallmodell mit zugeordneten Testphasen",
                "Veraltet",
                "Agil",
              ],
              correct: 1,
              explain: "Jeder Entwicklungsphase ist eine Testphase zugeordnet.",
            },
            {
              id: "imp_lf5-se-1_5",
              q: "Daily Standup: Dauer?",
              options: ["1 Stunde", "Unbegrenzt", "5 Min", "15 Min max."],
              correct: 3,
              explain: "Max. 15 Minuten, im Stehen, 3 Fragen (gestern/heute/Hindernisse).",
            },
            {
              id: "imp_lf5-se-1_6",
              q: "Kanban vs. Scrum?",
              options: [
                "Scrum verzichtet vollständig auf Boards",
                "Kanban = kontinuierlicher Fluss, keine Sprints",
                "Kanban eignet sich nur für Hardware-Fertigung",
                "Beide Methoden sind in allen Punkten identisch",
              ],
              correct: 1,
              explain: "Kanban: Kontinuierlicher Fluss mit WIP-Limits, keine festen Iterationen.",
            },
            {
              id: "imp_lf5-se-1_7",
              q: "User Story Format?",
              options: [
                "Nur ein kurzer Titel ohne weitere inhaltliche Angaben",
                "Als [Rolle] möchte ich [Funktion], damit [Nutzen]",
                "Eine SQL-Abfrage, die die Anforderung technisch abbildet",
                "Eine rein technische Spezifikation aus Entwicklersicht",
              ],
              correct: 1,
              explain: "Als Rolle möchte ich Funktion, damit Nutzen.",
            },
            {
              id: "imp_lf5-se-1_8",
              q: "Retrospektive in Scrum?",
              options: [
                "Code Review",
                "Sprint planen",
                "Was lief gut/schlecht, was verbessern?",
                "Backlog pflegen",
              ],
              correct: 2,
              explain: "Team reflektiert nach Sprint: Was verbessern?",
            },
            {
              id: "imp_lf5-se-1_9",
              q: "WIP-Limit (Kanban)?",
              options: [
                "Max. Mitarbeiter",
                "Max. Aufgaben gleichzeitig in einer Spalte",
                "Zeitlimit",
                "Budgetlimit",
              ],
              correct: 1,
              explain: "Work in Progress Limit: Begrenzt parallele Aufgaben pro Status.",
            },
            {
              id: "imp_lf5-se-1_10",
              q: "Was ist ein Sprint in Scrum?",
              options: [
                "Ein abschließender Testlauf, in dem das Produkt vor dem Release geprüft wird",
                "Ein interner Wettbewerb, bei dem Teams um die schnellste Umsetzung konkurrieren",
                "Ein tägliches Meeting von 15 Minuten zur Abstimmung innerhalb des Teams",
                "Zeitbox von 2-4 Wochen, in der ein fertiges Produktinkrement entsteht",
              ],
              correct: 3,
              explain:
                "Sprint: Feste Zeitbox. Am Ende steht ein potenziell lieferbares Produktinkrement.",
            },
            {
              id: "imp_lf5-se-1_11",
              q: "Wer priorisiert das Product Backlog?",
              options: [
                "Scrum Master",
                "Das Entwicklungsteam",
                "Der Kunde direkt",
                "Product Owner",
              ],
              correct: 3,
              explain:
                "Product Owner: Einziger Verantwortlicher für das Backlog. Priorisiert nach Business Value.",
            },
            {
              id: "imp_lf5-se-1_12",
              q: "Was ist ein WIP-Limit bei Kanban?",
              options: [
                "Maximale Anzahl gleichzeitiger Aufgaben pro Spalte/Phase",
                "Eine Obergrenze für das Budget, das pro Sprint ausgegeben werden darf",
                "Eine Regel, wie viele Teammitglieder gleichzeitig Urlaub nehmen dürfen",
                "Eine maximale Bearbeitungszeit in Stunden für jede einzelne Aufgabe",
              ],
              correct: 0,
              explain:
                "WIP-Limit: Begrenzt parallele Arbeit. Verhindert Multitasking-Overhead und Engpässe.",
            },
            {
              id: "imp_lf5-se-1_13",
              q: "Was ist das V-Modell?",
              options: [
                "Ein UML-Diagrammtyp zur Darstellung von Vererbungshierarchien in V-Form",
                "Ein Netzwerkprotokoll für die versionierte Übertragung von Software-Artefakten",
                "Ein Scrum-Artefakt, das den Sprint-Fortschritt als V-förmige Kurve visualisiert",
                "Erweitertes Wasserfall-Modell: Jeder Entwicklungsphase steht eine Testphase gegenüber",
              ],
              correct: 3,
              explain:
                "V-Modell: Links Spezifikation (oben→unten), rechts Tests (unten→oben). Jede Phase hat korrespondierende Tests.",
            },
            {
              id: "imp_lf5-se-1_14",
              q: "Was ist ein MVP?",
              options: [
                "Most Valuable Player",
                "Maximum Volume Product",
                "Minimum Viable Product",
                "Main Version Package",
              ],
              correct: 2,
              explain:
                "Kleinste nutzbare Version mit Kernfunktionen. MVP: Frühes Release mit Kernfunktionen. Sammelt echtes Nutzerfeedback, bevor alles fertig ist.",
            },
            {
              id: "imp_lf5-se-1_15",
              q: "Was passiert im Sprint Review?",
              options: [
                "Das Team reflektiert intern seine Zusammenarbeit und Arbeitsprozesse (Retrospektive)",
                "Team präsentiert das fertige Inkrement dem Product Owner/Stakeholdern für Feedback",
                "Das Team plant die Aufgaben und legt das Sprintziel für den kommenden Sprint fest",
                "Entwickler prüfen gegenseitig den Quellcode auf Fehler, Stil und Verständlichkeit",
              ],
              correct: 1,
              explain:
                "Sprint Review: Demo des Ergebnisses + Feedback einsammeln → fließt in nächsten Sprint ein.",
            },
            {
              id: "imp_lf5-se-1_16",
              q: "Was passiert in der Retrospektive?",
              options: [
                "Der Product Owner sortiert das Product Backlog neu nach Priorität",
                "Team reflektiert: Was lief gut? Was verbessern? Welche Maßnahmen?",
                "Das Team debuggt gemeinsam die im Sprint gefundenen Fehler",
                "Das Team plant die Aufgaben und Ziele des nächsten Sprints",
              ],
              correct: 1,
              explain:
                "Retro: Prozessverbesserung. Fokus auf Zusammenarbeit, Werkzeuge, Abläufe. Nicht auf einzelne Personen!",
            },
            {
              id: "imp_lf5-se-1_17",
              q: "Was ist Pair Programming?",
              options: [
                "Doppelte Arbeit: Beide Entwickler implementieren dieselbe Aufgabe getrennt und vergleichen die Ergebnisse",
                "Zwei Programme werden gleichzeitig in zwei Editor-Fenstern entwickelt, um Wartezeiten zu vermeiden",
                "Paralleles Programmieren: Aufgaben werden in Threads zerlegt und von mehreren CPUs abgearbeitet",
                "Zwei Entwickler arbeiten an einem Computer: einer tippt (Driver), einer denkt mit (Navigator)",
              ],
              correct: 3,
              explain:
                "Pair Programming: Weniger Fehler, Wissenstransfer, besserer Code. Aus Extreme Programming (XP).",
            },
            {
              id: "imp_lf5-se-1_18",
              q: "Was ist der Unterschied zwischen agil und klassisch?",
              options: [
                "Klassisch: Es findet keinerlei Planung statt",
                "Agil: langsamer, da ständig neu geplant wird",
                "Agil: iterativ, flexibel, reagiert auf Änderungen",
                "Kein Unterschied, nur andere Begriffe",
              ],
              correct: 2,
              explain:
                "Klassisch: sequenziell, plangetrieben, Änderungen teuer. Agil: Embrace Change. Klassisch: Plan the Work, Work the Plan. Agil passt bei Unsicherheit, klassisch bei festen Anforderungen.",
            },
            {
              id: "imp_lf5-se-1_19",
              q: "Was ist Technical Debt?",
              options: [
                "Laufende Serverkosten, die durch den Betrieb der Software im Rechenzentrum entstehen",
                "Bewusst oder unbewusst angehäufte Qualitätsmängel im Code, die später Aufwand verursachen",
                "Eine offene Rechnung des Dienstleisters, die nach Projektabschluss noch beglichen werden muss",
                "Aufgelaufene Lizenzkosten für eingesetzte Entwicklungswerkzeuge und Bibliotheken",
              ],
              correct: 1,
              explain:
                "Technical Debt: Schnelle Lösung jetzt → mehr Aufwand später (wie finanzielle Schulden). Muss regelmäßig abgebaut werden.",
            },
          ],
        },
        {
          id: "lf5-se-2",
          title: "UML-Diagramme",
          content: [
            { type: "heading", value: "Strukturdiagramme" },
            {
              type: "text",
              value:
                "Klassendiagramm: Klassen mit Attributen und Methoden + Beziehungen (Assoziation, Aggregation, Komposition, Vererbung). Wichtigstes UML-Diagramm.",
            },
            { type: "heading", value: "Verhaltensdiagramme" },
            {
              type: "text",
              value:
                "Use-Case-Diagramm: Akteure und ihre Anwendungsfälle. Zeigt WAS das System kann, nicht WIE. Aktivitätsdiagramm: Ablauf/Workflow mit Entscheidungen und Parallelität (ähnlich Flussdiagramm). Sequenzdiagramm: Zeitlicher Nachrichtenfluss zwischen Objekten. Zeigt die Reihenfolge von Methodenaufrufen.",
            },
            { type: "heading", value: "Klassendiagramm-Notation" },
            {
              type: "text",
              value:
                "Sichtbarkeit: + public, - private, # protected. Beziehungen: → Assoziation (kennt), ◇→ Aggregation (hat, Teil kann ohne Ganzes), ◆→ Komposition (besteht aus, Teil kann nicht ohne Ganzes), △ Vererbung (ist ein).",
            },
            {
              type: "note",
              value: "Klassendiagramm und Use-Case-Diagramm kommen in AP2 regelmäßig dran.",
            },
            { type: "heading", value: "Übungsaufgabe: UML" },
            {
              type: "text",
              value:
                "Ordne zu: a) Ablauf über die Zeit, b) Klassen und Beziehungen, c) Nutzer-Interaktion mit dem System.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Ablauf über die Zeit -> Sequenzdiagramm\n   (oder Aktivitätsdiagramm für Prozessfluss)\nb) Klassen + Beziehungen -> Klassendiagramm\n   (Vererbung, Assoziation, Attribute, Methoden)\nc) Nutzer und System -> Anwendungsfalldiagramm\n   (Use-Case mit Akteuren)",
            },
            { type: "heading", value: "Übungsaufgabe 2: Use-Case-Diagramm" },
            {
              type: "text",
              value:
                "Beschreibe ein Use-Case-Diagramm für ein Ticketsystem mit Akteuren 'Kunde' und 'Supporter' und mind. 4 Use Cases.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nAkteure: Kunde, Supporter. System: Ticketsystem.\nUse Cases: 1. Ticket erstellen (Kunde), 2. Status einsehen (beide), 3. Ticket bearbeiten (Supporter), 4. Ticket eskalieren (Supporter), 5. Feedback geben (Kunde).\n<<include>>: Ticket erstellen includes E-Mail-Bestätigung.\n<<extend>>: Eskalieren «extend» Ticket bearbeiten – der optionale Use Case „Ticket eskalieren“ erweitert den Basis-Use-Case „Ticket bearbeiten“.",
            },
            { type: "heading", value: "Beispiel 1: Use-Case-Diagramm: Ticketsystem" },
            {
              type: "text",
              value:
                "Akteure: Benutzer, IT-Support, Admin. Use Cases: Ticket erstellen, Ticket bearbeiten, Ticket schließen, Wissensdatenbank durchsuchen, Berichte generieren. Beziehungen: Benutzer → Ticket erstellen, Wissensdatenbank durchsuchen. IT-Support → Ticket bearbeiten, Ticket schließen. Admin → Berichte generieren, Benutzer verwalten. «extend»: Ticket eskalieren erweitert Ticket bearbeiten (optionaler Zusatzfall, Pfeil zeigt vom erweiternden zum Basis-Use-Case). «include»: Ticket erstellen includes Benachrichtigung senden.",
            },
            { type: "heading", value: "Beispiel 2: Klassendiagramm: Online-Shop" },
            {
              type: "text",
              value:
                "Klassen: Kunde(-name:String, -email:String, +bestellen():void), Bestellung(-datum:Date, -status:String, +stornieren():bool), Produkt(-name:String, -preis:float, +getPreis():float). Beziehungen: Kunde 1──* Bestellung (Assoziation: ein Kunde gibt beliebig viele Bestellungen auf; keine zwingende Existenzabhängigkeit). Bestellung *──* Produkt (über Assoziationsklasse Bestellposition mit Attribut menge).",
            },
            { type: "heading", value: "Beispiel 3: Sequenzdiagramm: Login-Vorgang" },
            {
              type: "text",
              value:
                "Objekte: Benutzer, LoginController, Datenbank, SessionManager. Ablauf: Benutzer→LoginController: login(user,pw). LoginController→Datenbank: findUser(user). Datenbank→LoginController: userData. LoginController→LoginController: checkPassword(pw, hash). LoginController→SessionManager: createSession(userId). SessionManager→LoginController: sessionToken. LoginController→Benutzer: loginSuccess(token).",
            },
            { type: "heading", value: "Übungsaufgabe 3: UML-Diagramm zuordnen" },
            {
              type: "text",
              value:
                "Ordne jedem Szenario das passende UML-Diagramm zu und begründe:\na) Welche Funktionen hat ein Geldautomat?\nb) Wie ist die Klassenhierarchie eines Fuhrparks aufgebaut?\nc) In welcher Reihenfolge läuft eine Online-Bezahlung ab?\nd) In welchen Zuständen kann sich ein Support-Ticket befinden?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Geldautomat-Funktionen → Use-Case-Diagramm\nBegründung: Zeigt Akteure (Kunde, Bank-System) und ihre Interaktionen (Geld abheben, Kontostand, PIN ändern) auf Funktionsebene.\n\nb) Fuhrpark-Hierarchie → Klassendiagramm\nBegründung: Vererbung darstellen: Fahrzeug (abstrakt) → PKW, LKW, Transporter. Attribute: Kennzeichen, Kilometerstand. Beziehung: Fahrzeug *──1 Mitarbeiter.\n\nc) Online-Bezahlung → Sequenzdiagramm (oder Aktivitätsdiagramm)\nBegründung: Zeitliche Abfolge von Nachrichten zwischen Objekten: Shop→PaymentGateway→Bank→PaymentGateway→Shop.\n\nd) Support-Ticket Zustände → Zustandsdiagramm\nBegründung: Zustände: Neu→Zugewiesen→In Bearbeitung→Warte auf Kunde→Gelöst→Geschlossen. Übergänge mit Ereignissen (zuweisen, bearbeiten, antworten, schließen).",
            },
          ],
          quiz: [
            {
              id: "imp_lf5-se-2_0",
              q: "Was zeigt ein Use-Case-Diagramm?",
              options: [
                "Datenbankstruktur",
                "Akteure und Anwendungsfälle",
                "Klassenbeziehungen",
                "Zeitlichen Ablauf",
              ],
              correct: 1,
              explain: "Use Case = Akteure + was das System für sie tun kann.",
            },
            {
              id: "imp_lf5-se-2_1",
              q: "UML: '+' bedeutet?",
              options: ["Public", "Private", "Protected", "Package"],
              correct: 0,
              explain: "+ = public, - = private, # = protected.",
            },
            {
              id: "imp_lf5-se-2_2",
              q: "Klassendiagramm zeigt?",
              options: [
                "Hardware",
                "Netzwerk",
                "Klassen, Attribute, Methoden, Beziehungen",
                "Zeitablauf",
              ],
              correct: 2,
              explain:
                "Statische Struktur: Klassen mit Attributen, Methoden und ihren Beziehungen.",
            },
            {
              id: "imp_lf5-se-2_3",
              q: "Sequenzdiagramm zeigt?",
              options: [
                "Tabellen und Beziehungen des Datenbankschemas",
                "Aktivitäten und Verzweigungen eines Geschäftsprozesses",
                "Zeitliche Abfolge von Nachrichten zwischen Objekten",
                "Klassen mit Attributen, Methoden und Vererbung",
              ],
              correct: 2,
              explain: "Zeitlicher Ablauf der Kommunikation zwischen Objekten.",
            },
            {
              id: "imp_lf5-se-2_4",
              q: "Use-Case-Diagramm zeigt?",
              options: [
                "Code",
                "Akteure und ihre Interaktion mit dem System",
                "Datenfluss",
                "Hardware",
              ],
              correct: 1,
              explain: "Wer (Akteur) nutzt welche Funktion (Use Case) des Systems.",
            },
            {
              id: "imp_lf5-se-2_5",
              q: "Aktivitätsdiagramm?",
              options: [
                "Grafische Darstellung der physischen Netzwerktopologie",
                "Modellierung ausschließlich von Datenbanktabellen und Relationen",
                "Statische Struktur der Klassen mit Attributen und Methoden",
                "Ablauf/Workflow mit Entscheidungen und Parallelität",
              ],
              correct: 3,
              explain: "Workflow-Darstellung mit Verzweigungen, Parallelität, Start/Ende.",
            },
            {
              id: "imp_lf5-se-2_6",
              q: "Zustandsdiagramm?",
              options: [
                "Zeitplan",
                "Zustände eines Objekts und Übergänge",
                "Netzwerktopologie",
                "Klassenstruktur",
              ],
              correct: 1,
              explain: "Zeigt alle möglichen Zustände eines Objekts und die Übergänge.",
            },
            {
              id: "imp_lf5-se-2_7",
              q: "ER-Diagramm = ?",
              options: [
                "Entity-Relationship (Datenbank-Entwurf)",
                "UML",
                "Zustandsdiagramm",
                "Aktivitätsdiagramm",
              ],
              correct: 0,
              explain: "ER-Diagramm: Entitäten und ihre Beziehungen (Datenbank-Design).",
            },
            {
              id: "imp_lf5-se-2_8",
              q: "Aggregation in UML?",
              options: [
                "Zwei Klassen ohne jede Verbindung, die nur im selben Diagramm stehen",
                "Eine Schnittstelle, deren Methoden eine Klasse implementieren muss",
                "Ableitung einer Unterklasse, die Attribute der Oberklasse erbt",
                "Teil-Ganzes (Teil kann ohne Ganzes existieren)",
              ],
              correct: 3,
              explain: "Aggregation: Schwache Zugehörigkeit (leere Raute).",
            },
            {
              id: "imp_lf5-se-2_9",
              q: "Komposition?",
              options: [
                "Teil kann NICHT ohne Ganzes existieren (gefüllte Raute)",
                "Gleich wie Aggregation, nur mit anderer Pfeilspitze",
                "Schwache Bindung: Teil existiert unabhängig weiter",
                "Vererbung: Unterklasse erbt Attribute der Oberklasse",
              ],
              correct: 0,
              explain: "Komposition: Starke Zugehörigkeit, Teil stirbt mit Ganzem.",
            },
            {
              id: "imp_lf5-se-2_10",
              q: "Welches UML-Diagramm zeigt die zeitliche Abfolge von Nachrichten?",
              options: [
                "Klassendiagramm",
                "Zustandsdiagramm",
                "Use-Case-Diagramm",
                "Sequenzdiagramm",
              ],
              correct: 3,
              explain:
                "Sequenzdiagramm: Objekte oben, Lebenslinien nach unten, Nachrichten als Pfeile (zeitlich von oben nach unten).",
            },
            {
              id: "imp_lf5-se-2_11",
              q: "Was bedeutet Vererbung im Klassendiagramm?",
              options: [
                "Kindklasse erbt Attribute/Methoden der Elternklasse",
                "Der Quellcode der Elternklasse wird in die Kindklasse hineinkopiert",
                "Zwei Klassen teilen sich zur Laufzeit dieselben Attributwerte",
                "Die Elternklasse wird nach dem Ableiten automatisch gelöscht",
              ],
              correct: 0,
              explain:
                "Pfeil mit leerem Dreieck. Vererbung: Generalisierung/Spezialisierung. Fahrzeug → PKW erbt alle Fahrzeug-Attribute + eigene (z.B. Sitzplätze).",
            },
            {
              id: "imp_lf5-se-2_12",
              q: "Was ist der Unterschied zwischen Aggregation und Komposition?",
              options: [
                "Es gibt keinen Unterschied zwischen beiden",
                "Aggregation bindet Teile stärker als Komposition",
                "Komposition ist die schwächere Form der Bindung",
                "Aggregation: Teil kann ohne Ganzes existieren",
              ],
              correct: 3,
              explain:
                "Komposition: Teil stirbt mit dem Ganzen. Aggregation (leere Raute): Rad◇──Auto (Rad existiert auch ohne Auto). Komposition (volle Raute): Raum◆──Gebäude (Raum nicht ohne Gebäude).",
            },
            {
              id: "imp_lf5-se-2_13",
              q: "Was ist ein Aktivitätsdiagramm?",
              options: [
                "Diagramm der physischen Netzwerk-Topologie",
                "Diagramm für Tabellen und ihre Beziehungen",
                "Übersicht der Server und ihrer Auslastung",
                "Ablaufdiagramm für Geschäftsprozesse/Algorithmen",
              ],
              correct: 3,
              explain:
                "Wie Flussdiagramm, aber mächtiger. Aktivitätsdiagramm: Start→Aktionen→Entscheidungen→Parallelisierung→Ende. Für Prozessmodellierung.",
            },
            {
              id: "imp_lf5-se-2_14",
              q: "Was zeigt ein Zustandsdiagramm?",
              options: [
                "Mögliche Zustände eines Objekts und Übergänge zwischen ihnen",
                "Die statische Klassenstruktur mit Attributen und Methoden",
                "Die Interaktionen zwischen Benutzer und System (Use Cases)",
                "Die Verbindungszustände aktiver Netzwerkkomponenten",
              ],
              correct: 0,
              explain:
                "Zustandsdiagramm: z.B. Bestellung: Neu→Bezahlt→Versendet→Zugestellt. Übergänge durch Events ausgelöst.",
            },
            {
              id: "imp_lf5-se-2_15",
              q: "Was bedeutet '+' und '-' vor Attributen/Methoden?",
              options: [
                "+ = mehr, - = weniger",
                "+ = Pflicht, - = optional",
                "Plus/Minus-Rechnung",
                "+ = public (alle sehen es), − = private (nur die Klasse selbst)",
              ],
              correct: 3,
              explain:
                "UML-Sichtbarkeiten: + public (alle), − private (nur die Klasse selbst), # protected (Klasse + Kindklassen), ~ package.",
            },
            {
              id: "imp_lf5-se-2_16",
              q: "Was ist eine Multiplizität im Klassendiagramm?",
              options: [
                "Die Anzahl der Methoden, die eine Klasse öffentlich zur Verfügung stellt",
                "Die Speichergröße, die eine Instanz der Klasse zur Laufzeit belegt",
                "Anzahl der Instanzen, die an einer Beziehung teilnehmen (z.B. 1..*, 0..1)",
                "Eine Rechenoperation zur Multiplikation von Attributwerten im Diagramm",
              ],
              correct: 2,
              explain:
                "Multiplizität: 1 (genau eins), 0..1 (optional eins), * (beliebig viele), 1..* (mindestens eins).",
            },
            {
              id: "imp_lf5-se-2_17",
              q: "Welcher Pfeil zeigt Vererbung?",
              options: [
                "Gestrichelter Pfeil mit offener Spitze",
                "Durchgezogener Pfeil mit gefüllter schwarzer Spitze",
                "Doppelpfeil mit Spitzen an beiden Enden",
                "Durchgezogener Pfeil mit leerem Dreieck als Spitze",
              ],
              correct: 3,
              explain:
                "Vererbung: ──▷ (leeres Dreieck, durchgezogen). Realisierung (Interface): --▷ (gestrichelt).",
            },
            {
              id: "imp_lf5-se-2_18",
              q: "Was ist ein Paketdiagramm?",
              options: [
                "Gruppiert UML-Elemente in Pakete (Namespaces/Module)",
                "Es zeigt den zeitlichen Nachrichtenaustausch zwischen Objekten",
                "Ein Diagramm zur Planung von Logistik- und Versandprozessen",
                "Es modelliert Abläufe mit Entscheidungen und Parallelität",
              ],
              correct: 0,
              explain:
                "Paketdiagramm: Organisiert das System in logische Gruppen. Zeigt Abhängigkeiten zwischen Modulen.",
            },
            {
              id: "imp_lf5-se-2_19",
              q: "Was ist ein Objektdiagramm?",
              options: [
                "Ein Diagramm für Abläufe mit Start-, End- und Entscheidungsknoten",
                "Die Darstellung des Nachrichtenaustauschs entlang von Lebenslinien",
                "Es ist identisch mit dem Klassendiagramm und zeigt dieselben Klassen",
                "Snapshot konkreter Objekte und ihrer Beziehungen zu einem Zeitpunkt",
              ],
              correct: 3,
              explain:
                "Objektdiagramm: Zeigt konkrete Instanzen (nicht Klassen) mit aktuellen Attributwerten. Wie ein Foto des Systems zu einem bestimmten Zeitpunkt.",
            },
          ],
        },
        {
          id: "lf5-se-3",
          title: "Testing & Versionsverwaltung (Git)",
          content: [
            { type: "heading", value: "Testarten" },
            {
              type: "text",
              value:
                "Unit-Test: Einzelne Funktion/Methode testen. Integrationstest: Zusammenspiel mehrerer Module. Systemtest: Gesamtes System gegen Anforderungen. Abnahmetest: Kunde prüft gegen Lastenheft. Regressionstest: Nach Änderung prüfen, ob Bestehendes noch funktioniert.",
            },
            { type: "heading", value: "Black-Box vs. White-Box" },
            {
              type: "text",
              value:
                "Black-Box: Tester kennt internen Code NICHT – testet nur Ein-/Ausgabe. White-Box: Tester kennt den Code – testet interne Logik, Pfade, Bedingungen.",
            },
            { type: "heading", value: "Git – Versionsverwaltung" },
            {
              type: "code",
              value:
                'git init                    # Neues Repository\ngit clone <url>             # Repository klonen\ngit add .                   # Alle Änderungen stagen\ngit commit -m "Nachricht"   # Commit erstellen\ngit push origin main        # Zum Server hochladen\ngit pull                    # Vom Server aktualisieren\ngit branch feature-x        # Neün Branch erstellen\ngit checkout feature-x      # Branch wechseln\ngit merge feature-x         # Branch zusammenführen',
            },
            {
              type: "text",
              value:
                "Branching-Strategie: main (stabil) → develop (Entwicklung) → feature-branches (einzelne Features). Pull Request / Merge Request: Code-Review vor dem Merge.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Testarten" },
            {
              type: "text",
              value: "Unterschied Unit-Test, Integrationstest, Systemtest? Je ein Beispiel.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nUnit-Test: Einzelne Funktion isoliert. Bsp: berechneRabatt() mit Eingaben prüfen.\nIntegrationstest: Module zusammen. Bsp: Login + Datenbank → korrekte Auth?\nSystemtest: End-to-End. Bsp: Anmelden → Bestellen → Bestätigung per E-Mail.\nTestpyramide: Viele Unit (schnell) → weniger Integration → wenige System (langsam).",
            },
            { type: "heading", value: "Übungsaufgabe 2: Git-Workflow" },
            {
              type: "text",
              value: "Beschreibe den Git-Workflow vom Clone bis zum Merge eines Feature-Branches.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. git clone → Repo lokal\n2. git checkout -b feature/xyz → Branch\n3. Dateien bearbeiten\n4. git add . → Stagen\n5. git commit -m 'Feature X' → Commit\n6. git push origin feature/xyz → Hochladen\n7. Pull Request erstellen → Code Review\n8. git merge → In main mergen\nRegel: Nie direkt auf main committen.",
            },
            { type: "heading", value: "Beispiel 1: Git-Workflow im Team" },
            {
              type: "text",
              value:
                "main/master: Produktiver Code, immer stabil. develop: Integrationsbranch für Features. feature/login: Eigener Branch pro Feature. Workflow: 1) git checkout -b feature/login develop → Branch erstellen. 2) Entwickeln + committen. 3) git push origin feature/login → Pushen. 4) Pull Request erstellen → Code Review. 5) Merge in develop nach Freigabe. 6) develop in main mergen für Release.",
            },
            { type: "heading", value: "Beispiel 2: Unit-Test Beispiel" },
            {
              type: "text",
              value:
                "Funktion: def berechne_rabatt(preis, prozent): return preis * (1 - prozent/100). Tests: test_normal: assert berechne_rabatt(100, 10) == 90.0. test_null: assert berechne_rabatt(100, 0) == 100.0. test_hundred: assert berechne_rabatt(100, 100) == 0.0. test_negative: assert berechne_rabatt(100, -10) → Soll Exception werfen? Testabdeckung: Normalfall, Grenzwerte, Fehlerfälle.",
            },
            { type: "heading", value: "Beispiel 3: Testarten im Überblick" },
            {
              type: "text",
              value:
                "Unit-Test: Einzelne Funktion/Methode isoliert testen (Entwickler). Integrationstest: Zusammenspiel mehrerer Komponenten (z.B. App+DB). Systemtest: Gesamtsystem gegen Anforderungen prüfen. Abnahmetest: Kunde prüft, ob Pflichtenheft erfüllt (UAT). Regressionstest: Nach Änderung prüfen ob Bestehendes noch funktioniert. Lasttest: Verhalten unter hoher Auslastung. Penetrationstest: Sicherheitslücken finden.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Git-Konflikte lösen" },
            {
              type: "text",
              value:
                "Du arbeitest im Branch feature/api. Dein Kollege hat zwischenzeitlich develop geändert. Beim Merge gibt es einen Konflikt in server.py. Beschreibe Schritt für Schritt wie du vorgehst.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1) git checkout develop && git pull origin develop → Aktuellen Stand holen\n2) git checkout feature/api → Zurück zum Feature-Branch\n3) git merge develop → Merge-Versuch → KONFLIKT in server.py\n4) Datei öffnen: Git markiert Konfliktstellen:\n   <<<<<<< HEAD (feature/api)\n   def connect(): return db.open('neue_db')\n   =======\n   def connect(): return db.open('alte_db', timeout=30)\n   >>>>>>> develop\n5) Manuell entscheiden, welche Version korrekt ist (oder beide kombinieren)\n6) Konfliktmarker (<<<, ===, >>>) entfernen\n7) git add server.py → Konflikt als gelöst markieren\n8) git commit → Merge-Commit erstellen\n9) git push origin feature/api → Pushen\n\nBest Practice: Regelmäßig develop in feature-Branch mergen (oder rebase) → kleine Konflikte statt großes Chaos am Ende.",
            },
          ],
          quiz: [
            {
              id: "imp_lf5-se-3_0",
              q: "Black-Box-Testing bedeutet?",
              options: [
                "Ohne Computer testen",
                "Code ist bekannt",
                "Nur bei Nacht testen",
                "Nur Ein-/Ausgabe wird getestet",
              ],
              correct: 3,
              explain: "Black-Box = interner Code unbekannt, nur Ein-/Ausgabe wird geprüft.",
            },
            {
              id: "imp_lf5-se-3_1",
              q: "git add macht?",
              options: [
                "Zum Server pushen",
                "Änderungen stagen (vormerken)",
                "Commit erstellen",
                "Datei löschen",
              ],
              correct: 1,
              explain: "git add staged Änderungen für den nächsten Commit.",
            },
            {
              id: "imp_lf5-se-3_2",
              q: "git commit -m?",
              options: [
                "Push",
                "Branch wechseln",
                "Änderungen mit Nachricht speichern",
                "Datei löschen",
              ],
              correct: 2,
              explain: "Commit = Änderungen im lokalen Repository speichern.",
            },
            {
              id: "imp_lf5-se-3_3",
              q: "git pull?",
              options: [
                "Datei löschen",
                "Branch erstellen",
                "Remote-Änderungen holen + mergen",
                "Lokale Änderungen hochladen",
              ],
              correct: 2,
              explain: "pull = fetch + merge (Remote-Stand holen und zusammenführen).",
            },
            {
              id: "imp_lf5-se-3_4",
              q: "Unit Test prüft?",
              options: [
                "Einzelne Funktion/Methode isoliert",
                "Netzwerk",
                "Gesamtsystem",
                "Hardware",
              ],
              correct: 0,
              explain: "Unit Test: Kleinste testbare Einheit (Funktion/Methode) isoliert prüfen.",
            },
            {
              id: "imp_lf5-se-3_5",
              q: "git branch feature-x?",
              options: ["Branch löschen", "Neuen Branch erstellen", "Branch wechseln", "Merge"],
              correct: 1,
              explain: "Erstellt neuen Branch mit Namen feature-x.",
            },
            {
              id: "imp_lf5-se-3_6",
              q: "Integrationstest?",
              options: [
                "Performance",
                "Zusammenspiel mehrerer Komponenten",
                "Einzelne Funktion",
                "Nur GUI",
              ],
              correct: 1,
              explain: "Prüft ob mehrere Module/Komponenten korrekt zusammenarbeiten.",
            },
            {
              id: "imp_lf5-se-3_7",
              q: "Merge Conflict entsteht wenn?",
              options: [
                "Ein Commit wurde vor dem Merge vergessen (unstaged)",
                "Nie – Git führt alle Änderungen automatisch zusammen",
                "Der Quell-Branch wurde vor dem Merge gelöscht",
                "Gleiche Zeile in 2 Branches unterschiedlich geändert",
              ],
              correct: 3,
              explain: "Gleiche Stelle wurde in verschiedenen Branches unterschiedlich geändert.",
            },
            {
              id: "imp_lf5-se-3_8",
              q: "git stash?",
              options: [
                "Commit",
                "Branch löschen",
                "Änderungen temporär zwischenspeichern",
                "Push",
              ],
              correct: 2,
              explain: "stash: Unfertige Änderungen weglegen um Branch zu wechseln.",
            },
            {
              id: "imp_lf5-se-3_9",
              q: "CI/CD = ?",
              options: [
                "Cloud Integration",
                "Central Infrastructure",
                "Code Inspection",
                "Continuous Integration / Continuous Delivery",
              ],
              correct: 3,
              explain: "Automatisches Bauen, Testen und Ausliefern von Software.",
            },
            {
              id: "imp_lf5-se-3_10",
              q: "Was macht git commit?",
              options: [
                "Snapshot der staged Änderungen im lokalen Repository speichern",
                "Lokale Dateien auf den zentralen Remote-Server hochladen",
                "Den aktuellen Branch samt Historie endgültig löschen",
                "Änderungen vom Remote-Repository herunterladen und mergen",
              ],
              correct: 0,
              explain:
                "commit: Speichert Änderungen lokal mit Nachricht. Push überträgt Commits zum Remote-Repository.",
            },
            {
              id: "imp_lf5-se-3_11",
              q: "Was ist ein Pull Request?",
              options: [
                "Eine Download-Anfrage, um ein Repository lokal herunterzuladen",
                "Ein Rollback, das den letzten Commit rückgängig macht",
                "Eine Git-Konfigurationsdatei mit Benutzername und E-Mail",
                "Anfrage einen Branch in einen anderen zu mergen, inkl. Code Review",
              ],
              correct: 3,
              explain:
                "PR/MR: Entwickler bittet um Review + Merge. Kollegen prüfen Code, kommentieren, geben frei.",
            },
            {
              id: "imp_lf5-se-3_12",
              q: "Was ist der Unterschied zwischen Unit-Test und Integrationstest?",
              options: [
                "Integrationstests laufen schneller, da sie mehrere Komponenten in einem Durchlauf abdecken",
                "Es gibt keinen Unterschied, beide Begriffe bezeichnen dieselbe Teststufe im V-Modell",
                "Unit-Tests prüfen ausschließlich die grafische Oberfläche, Integrationstests die Datenbank",
                "Unit testet isolierte Funktion, Integration testet Zusammenspiel mehrerer Komponenten",
              ],
              correct: 3,
              explain:
                "Unit: Eine Funktion isoliert (Mock-Objekte für Abhängigkeiten). Integration: Echte Komponenten zusammen (z.B. App + echte DB).",
            },
            {
              id: "imp_lf5-se-3_13",
              q: "Was macht git pull?",
              options: [
                "Branch erstellen",
                "git fetch + git merge",
                "Nur herunterladen",
                "Commit rückgängig machen",
              ],
              correct: 1,
              explain:
                "Holt Remote-Änderungen und merged sie in aktuellen Branch. git pull = fetch (herunterladen) + merge (zusammenführen). Kann Konflikte verursachen, wenn lokal auch geändert wurde.",
            },
            {
              id: "imp_lf5-se-3_14",
              q: "Was ist eine Testabdeckung (Code Coverage)?",
              options: [
                "Die absolute Anzahl der geschriebenen Testfälle",
                "Prozentsatz des Codes, der durch Tests ausgeführt wird",
                "Die Gesamtlaufzeit aller Tests in Sekunden",
                "Die Anzahl der gefundenen Bugs pro Testlauf",
              ],
              correct: 1,
              explain:
                "Coverage: 80% = 80% aller Codezeilen werden von mindestens einem Test durchlaufen. 100% ist Ziel, aber nicht immer sinnvoll.",
            },
            {
              id: "imp_lf5-se-3_15",
              q: "Was ist CI/CD?",
              options: [
                "Continuous Integration / Continuous Deployment",
                "Content Integration / Content Design",
                "Computer Interface / Content Delivery",
                "Cloud Interface / Cloud Deployment",
              ],
              correct: 0,
              explain:
                "Automatisches Bauen, Testen, Deployen bei Code-Änderungen. CI: Automatisch bauen+testen bei jedem Commit. CD: Automatisch in Produktion deployen wenn Tests grün. Tools: Jenkins, GitHub Actions, GitLab CI.",
            },
            {
              id: "imp_lf5-se-3_16",
              q: "Was ist ein Merge-Konflikt?",
              options: [
                "Ein Fehler beim Push, weil der Remote-Server nicht erreichbar ist",
                "Ein Syntaxfehler im Quellcode, den der Compiler beim Build meldet",
                "Zwei Branches haben dieselbe Stelle unterschiedlich geändert",
                "Ein versehentlich gelöschter Branch, der wiederhergestellt werden muss",
              ],
              correct: 2,
              explain:
                "Muss manuell gelöst werden. Merge-Konflikt: Git kann nicht automatisch zusammenführen. Entwickler muss entscheiden, welche Version gilt.",
            },
            {
              id: "imp_lf5-se-3_17",
              q: "Was ist ein Branch?",
              options: ["Parallele Entwicklungslinie", "Ein Release", "Ein Fehler", "Ein Backup"],
              correct: 0,
              explain:
                "Unabhängig vom Hauptbranch arbeiten. Branch: Eigenständige Kopie des Codes. Feature-Branches isolieren Arbeit, werden nach Fertigstellung gemergt.",
            },
            {
              id: "imp_lf5-se-3_18",
              q: "Was ist git stash?",
              options: [
                "Erstellt eine vollständige lokale Kopie eines entfernten Repositories",
                "Wechselt den aktiven Branch und aktualisiert das Arbeitsverzeichnis",
                "Unfertige Änderungen temporär zwischenspeichern ohne zu committen",
                "Entfernt nicht versionierte Dateien endgültig aus dem Arbeitsverzeichnis",
              ],
              correct: 2,
              explain:
                "stash: 'Zur Seite legen'. Nützlich wenn man Branch wechseln muss aber uncommittete Änderungen hat.",
            },
            {
              id: "imp_lf5-se-3_19",
              q: "Was ist TDD?",
              options: [
                "Test Driven Development",
                "Total Data Delivery",
                "Technical Documentation Design",
                "Test Driven Design",
              ],
              correct: 0,
              explain:
                "Erst Test schreiben, dann Code, der den Test erfüllt. TDD-Zyklus: Red (Test schreiben → fehlschlägt) → Green (Code schreiben → Test bestanden) → Refactor (verbessern).",
            },
          ],
        },
        {
          id: "lf5-ki-1",
          title: "KI im IT-Alltag: Einsatzfelder, Auswahl, Grenzen & Recht",
          content: [
            {
              type: "text",
              value:
                "Künstliche Intelligenz ist seit der Neuordnung fester Bestandteil der Prüfungskataloge („KI-Software“, „KI-Unterstützung“) und taucht seit einigen Jahren regelmäßig in Abschlussprüfungen auf – unsere Auswertung der Original-Prüfungen zeigt das Thema in der Hälfte der neueren AP2-Bögen. Du musst keine Modelle trainieren können, aber einordnen: Was leistet KI im Betrieb, wonach wählt man Werkzeuge aus, wo liegen Grenzen und welche Regeln gelten?",
            },
            { type: "heading", value: "Begriffe sauber trennen" },
            {
              type: "list",
              value: [
                "Künstliche Intelligenz (KI): Oberbegriff für Systeme, die Aufgaben lösen, die sonst menschliche Intelligenz erfordern (Sprache verstehen, Muster erkennen, entscheiden).",
                "Machine Learning (ML): Teilgebiet – das System lernt Muster aus Daten statt fester Programmierung. Qualität steht und fällt mit den Trainingsdaten.",
                "Generative KI / LLM (Large Language Model): erzeugt neue Inhalte (Text, Code, Bilder) auf Basis von Wahrscheinlichkeiten – stark im Formulieren, aber ohne Wahrheitsgarantie.",
                "Abgrenzung zur klassischen Automatisierung: Ein Skript folgt festen Regeln (deterministisch), ML-Ergebnisse sind statistisch – deshalb gehören sie kontrolliert, nicht blind übernommen.",
              ],
            },
            { type: "heading", value: "Einsatzfelder im IT-Betrieb" },
            {
              type: "list",
              value: [
                "Service Desk: Chatbots und Self-Service-Portale beantworten Standardanfragen, klassifizieren und priorisieren Tickets und routen sie zur richtigen Fachgruppe – Mitarbeitende konzentrieren sich auf komplexe Fälle.",
                "Monitoring/Security: Anomalieerkennung meldet ungewöhnliche Muster (Login-Verhalten, Netzwerkverkehr), bevor starre Schwellwerte anschlagen.",
                "Administration & Entwicklung: Code- und Skript-Assistenz, Log-Analyse, Entwürfe für Dokumentation und Kundenkommunikation – immer mit fachlicher Endkontrolle.",
                "Wissensmanagement: Durchsuchbare Wissensdatenbanken mit Fragen in natürlicher Sprache statt Stichwortsuche.",
              ],
            },
            { type: "heading", value: "Auswahlkriterien für KI-Werkzeuge" },
            {
              type: "text",
              value:
                "Wie bei jeder Software entscheidet ein Kriterienkatalog – mit KI-Besonderheiten: Datenschutz zuerst (Wo werden Eingaben verarbeitet und gespeichert? Werden sie zum Training weiterverwendet? Gibt es einen Auftragsverarbeitungsvertrag nach Art. 28 DSGVO? EU-Datenresidenz oder On-Premises-Betrieb?), dann Qualität und Nachvollziehbarkeit (Testaufgaben aus dem eigenen Alltag, Quellenangaben), Integration (Schnittstellen zu Ticketsystem, IDE, M365), Kostenmodell (pro Nutzer/Monat vs. nutzungsbasiert – Pay-per-Use kann bei Vielnutzung explodieren) und Betreibbarkeit (Rollen- und Rechtekonzept, Protokollierung, Admin-Kontrolle). Eine Nutzwertanalyse mit gewichteten Kriterien macht die Entscheidung begründbar – genau wie beim Hardwarekauf.",
            },
            { type: "heading", value: "Grenzen, Risiken und Regeln" },
            {
              type: "list",
              value: [
                "Halluzinationen: LLMs formulieren falsche Aussagen genauso überzeugend wie richtige – Fakten, Zahlen und Konfigurationen immer prüfen.",
                "Bias: Verzerrte Trainingsdaten erzeugen verzerrte Ergebnisse – kritisch bei Bewertungen und Personalthemen.",
                "Schatten-KI: Mitarbeitende nutzen private KI-Konten für Firmendaten – dagegen helfen klare Richtlinien plus ein freigegebenes, gleichwertiges Firmen-Werkzeug.",
                "Goldene Regel: Keine personenbezogenen Daten, Kundendaten oder Betriebsgeheimnisse in nicht freigegebene (öffentliche) KI-Dienste eingeben.",
                "EU-KI-Verordnung (AI Act): reguliert KI nach Risikoklassen – von verbotenen Praktiken über Hochrisiko-Systeme (strenge Auflagen) bis zu Transparenzpflichten: KI-generierte Inhalte und Chatbots müssen als solche erkennbar sein.",
                "Urheberrecht & Lizenz: Wer haftet für generierten Code? Firmenrichtlinie und Lizenzbedingungen des Anbieters prüfen.",
              ],
            },
            { type: "heading", value: "Übungsaufgabe (AP-Stil)" },
            {
              type: "text",
              value:
                "Die Geschäftsführung will einen KI-Chatbot für den First-Level-Support einführen; er soll Anfragen aus E-Mails automatisch beantworten oder an Fachgruppen weiterleiten. a) Nenne zwei konkrete Nutzenpotenziale. b) Nenne drei Prüfpunkte zum Datenschutz vor der Einführung. c) Erkläre den Begriff Halluzination und eine organisatorische Gegenmaßnahme im Support-Einsatz. d) Welche Transparenzpflicht ist beim Kundenkontakt zu beachten?",
            },
            {
              type: "solution",
              value:
                "a) Entlastung des First-Level (Standardfragen automatisch beantwortet, 24/7-Reaktion) und schnellere, konsistente Zuordnung: Klassifizierung und Priorisierung der Tickets an die richtige Fachgruppe.\nb) 1. Verarbeitungsort und Speicherung der Kundenanfragen (EU/Drittland? Nutzung zum Training?); 2. Auftragsverarbeitungsvertrag nach Art. 28 DSGVO mit dem Anbieter; 3. Datensparsamkeit: personenbezogene Inhalte filtern/pseudonymisieren, Aufbewahrungs- und Löschkonzept; zusätzlich Einbindung des Datenschutzbeauftragten (und ggf. Betriebsrats).\nc) Halluzination = das Modell erzeugt eine plausibel klingende, aber falsche Antwort. Gegenmaßnahme: Der Bot antwortet nur aus einer geprüften Wissensdatenbank und leitet bei Unsicherheit an Menschen weiter; kritische Antworten (z. B. zu Verträgen, Sicherheit) werden vor Versand freigegeben; Stichprobenkontrolle und Feedback-Knopf.\nd) Nutzer müssen erkennen können, dass sie mit einer KI kommunizieren (Transparenzpflicht nach EU-KI-Verordnung) – der Bot stellt sich als solcher vor und bietet die Übergabe an einen Menschen an.",
            },
            {
              type: "links",
              value: [
                [
                  "Wikipedia: Künstliche Intelligenz",
                  "https://de.wikipedia.org/wiki/K%C3%BCnstliche_Intelligenz",
                ],
                [
                  "Wikipedia: Verordnung über künstliche Intelligenz",
                  "https://de.wikipedia.org/wiki/Verordnung_%C3%BCber_k%C3%BCnstliche_Intelligenz",
                ],
                [
                  "Wikipedia: Maschinelles Lernen",
                  "https://de.wikipedia.org/wiki/Maschinelles_Lernen",
                ],
              ],
            },
          ],
          quiz: [
            {
              id: "imp_lf5-ki-1_0",
              q: "Was ist eine Halluzination bei einem Sprachmodell?",
              options: [
                "Ein Darstellungsfehler in der grafischen Oberfläche",
                "Eine überzeugend formulierte, aber inhaltlich falsche Ausgabe",
                "Ein in die Modellgewichte eingeschleuster Schadcode",
                "Eine besonders kreative, aber vollständig korrekte Antwort",
              ],
              correct: 1,
              explain:
                "LLMs erzeugen Wahrscheinlichkeits-Text ohne Wahrheitsgarantie – deshalb Fakten, Zahlen und Configs immer gegenprüfen.",
            },
            {
              id: "imp_lf5-ki-1_1",
              q: "Welche Daten dürfen NICHT in einen öffentlichen, nicht freigegebenen KI-Dienst?",
              options: [
                "Allgemeine Fachfragen zu Standards und Protokollen",
                "Personenbezogene Daten, Kundendaten und Betriebsgeheimnisse",
                "Bereits veröffentlichte Pressemitteilungen des Unternehmens",
                "Selbst formulierte Merksätze und Eselsbrücken zum Lernen",
              ],
              correct: 1,
              explain:
                "Ohne AV-Vertrag und Kontrolle über Verarbeitung/Training wäre das ein Datenschutz- und Geheimnisverstoß – Schatten-KI vermeiden.",
            },
            {
              id: "imp_lf5-ki-1_2",
              q: "Wonach reguliert die EU-KI-Verordnung KI-Systeme?",
              options: [
                "Nach Herstellerland",
                "Nach Risikoklassen",
                "Nach Preis",
                "Nach Rechenleistung",
              ],
              correct: 1,
              explain:
                "Von verboten über Hochrisiko bis zu Transparenzpflichten. Risikobasierter Ansatz: je höher das Risiko für Menschen, desto strenger die Auflagen; Chatbots und KI-Inhalte brauchen Transparenz.",
            },
            {
              id: "imp_lf5-ki-1_3",
              q: "Worin unterscheidet sich ML von einem klassischen Skript?",
              options: [
                "ML-Modelle arbeiten grundsätzlich schneller als jedes Skript",
                "Das Skript folgt festen Regeln, ML lernt Muster aus Daten",
                "Klassische Skripte benötigen zur Ausführung keinen Computer",
                "Es gibt keinen Unterschied, beide arbeiten identisch",
              ],
              correct: 1,
              explain:
                "Ergebnisse sind statistisch, nicht garantiert. Deterministisch vs. statistisch: Deshalb gehören ML-Ergebnisse kontrolliert und die Trainingsdatenqualität ist entscheidend.",
            },
          ],
        },
        {
          id: "lf5-se-4",
          title: "Struktogramm & Programmablaufplan (PAP)",
          content: [
            { type: "heading", value: "Zwei klassische Ablauf-Darstellungen" },
            {
              type: "text",
              value:
                "Bevor Code entsteht, wird der Ablauf modelliert. Das Struktogramm (Nassi-Shneiderman-Diagramm, DIN 66261) packt den Ablauf in verschachtelte Rechtecke – es erzwingt strukturierte Programmierung, ein „GOTO quer durchs Bild“ ist gar nicht darstellbar. Der Programmablaufplan (PAP, Flussdiagramm, DIN 66001) arbeitet mit Symbolen und Pfeilen: Oval = Start/Ende, Rechteck = Anweisung/Verarbeitung, Raute = Entscheidung (ja/nein), Parallelogramm = Ein-/Ausgabe, Pfeile = Ablaufrichtung. In Klassenarbeiten musst du beides LESEN (Ablauf im Kopf ausführen, Ausgabe bestimmen) und ZEICHNEN können.",
            },
            { type: "heading", value: "Die drei Grundstrukturen im Struktogramm" },
            {
              type: "text",
              value:
                "Sequenz: Anweisungen als übereinandergestapelte Rechtecke – wird von oben nach unten abgearbeitet. · Auswahl (Selektion): Das Rechteck wird oben von einem Dreieck geteilt („Bedingung?“ mit Ja-Zweig links, Nein-Zweig rechts); die Mehrfachauswahl (FALL/CASE) fächert in mehrere Spalten auf. · Wiederholung (Iteration): kopfgesteuerte Schleife als umgekehrtes L (Bedingung OBEN – wird ggf. nie betreten), fußgesteuerte Schleife als L (Bedingung UNTEN – läuft mindestens einmal), Zählschleife als Sonderfall der kopfgesteuerten.",
            },
            {
              type: "code",
              value:
                "STRUKTOGRAMM „Passwortprüfung“ (Skizze):\n+--------------------------------------+\n| versuche = 0                         |\n+--------------------------------------+\n| SOLANGE eingabe falsch UND versuche<3|   <- kopfgesteuert\n|  +-----------------------------------+\n|  | lies passwort ein                 |\n|  | versuche = versuche + 1           |\n+--+-----------------------------------+\n| /  eingabe korrekt?  \\               |\n| JA: „Willkommen“  | NEIN: „Gesperrt“ |\n+--------------------------------------+",
            },
            { type: "heading", value: "PAP vs. Struktogramm vs. Pseudocode" },
            {
              type: "text",
              value:
                "PAP-Stärke: Abläufe mit vielen Sprüngen/Sonderwegen (z. B. Fehlersuche-Entscheidungsbäume, Troubleshooting-Workflows) sind anschaulich – Gefahr: Spaghetti-Pfeile. Struktogramm-Stärke: zwingt zu sauberer Blockstruktur, lässt sich 1:1 in Code mit if/while/for übersetzen. Pseudocode: am schnellsten geschrieben, Standard in Prüfungslösungen („SOLANGE … WENN … SONST“). Empfehlung: Zum Entwerfen Pseudocode oder Struktogramm, zum Dokumentieren von Betriebsabläufen PAP. Werkzeuge: Structorizer (Struktogramme, kann sogar ausführen und Code exportieren), draw.io für PAP – siehe Linksammlung.",
            },
            { type: "heading", value: "Lesen üben: der Trace-Trick" },
            {
              type: "text",
              value:
                "Ablauf-Aufgaben löst du mit einer Trace-Tabelle: eine Spalte je Variable, eine Zeile je Durchlauf, Werte stur mitschreiben. So entlarvst du auch die typischen Fallen: Wird die kopfgesteuerte Schleife überhaupt betreten? Läuft die fußgesteuerte einmal „zu viel“? Zählt der Zähler bis n oder bis n−1? Endlos üben: Übungs-Generator „Struktogramm-Trace“.",
            },
            {
              type: "note",
              value:
                "Merkhilfen: Struktogramm = RECHTECKE ohne Pfeile (DIN 66261) · PAP = SYMBOLE mit Pfeilen (DIN 66001, Raute = Entscheidung). Kopfgesteuert prüft VORHER (0..n Durchläufe), fußgesteuert NACHHER (1..n Durchläufe).",
            },
            { type: "heading", value: "Übungsaufgabe: Zeichnen & übersetzen" },
            {
              type: "text",
              value:
                "a) Skizziere als Struktogramm: Lies eine Zahl n ein; solange n nicht zwischen 1 und 10 liegt, fordere eine neue Eingabe an; gib danach die Quadratzahlen von 1 bis n aus. b) Welche Schleifenart hast du für die Eingabeprüfung gewählt – und warum? c) Welches PAP-Symbol stünde an der Stelle der Bereichsprüfung?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Sequenz „lies n“ → fußgesteuerte Schleife „wiederhole: lies n, BIS 1 ≤ n ≤ 10“ (alternativ kopfgesteuert mit Erst-Einlesen davor) → Zählschleife „FÜR i = 1 BIS n: gib i·i aus“.\nb) Fußgesteuert, weil mindestens EINE Eingabe nötig ist, bevor geprüft werden kann.\nc) Die Raute (Entscheidungssymbol) mit den Ausgängen ja/nein.",
            },
          ],
          quiz: [
            {
              id: "imp_lf5-se-4_0",
              q: "Das Struktogramm ist genormt in …",
              options: ["DIN 66261", "DIN 66001", "DIN 5008", "ISO 27001"],
              correct: 0,
              explain: "Struktogramm/Nassi-Shneiderman = DIN 66261; der PAP ist DIN 66001.",
            },
            {
              id: "imp_lf5-se-4_1",
              q: "Die Raute im PAP bedeutet …",
              options: ["Ein-/Ausgabe", "Entscheidung", "Start/Ende", "Unterprogramm"],
              correct: 1,
              explain:
                "Raute = Verzweigung mit ja/nein-Ausgängen; Oval = Start/Ende, Parallelogramm = E/A.",
            },
            {
              id: "imp_lf5-se-4_2",
              q: "Eine KOPFgesteuerte Schleife …",
              options: [
                "läuft immer mindestens einmal",
                "prüft die Bedingung am Ende",
                "wird eventuell nie betreten",
                "hat keinen Abbruch",
              ],
              correct: 2,
              explain: "Bedingung VOR dem Rumpf: ist sie sofort falsch, gibt es 0 Durchläufe.",
            },
            {
              id: "imp_lf5-se-4_3",
              q: "Für „mindestens eine Eingabe, dann prüfen“ nimmst du …",
              options: [
                "Zählschleife",
                "Sequenz",
                "kopfgesteuerte Schleife",
                "fußgesteuerte Schleife",
              ],
              correct: 3,
              explain: "Fußgesteuert (do-while) garantiert den ersten Durchlauf vor der Prüfung.",
            },
            {
              id: "imp_lf5-se-4_4",
              q: "Warum sind im Struktogramm keine GOTO-Sprünge möglich?",
              options: [
                "Es kennt nur verschachtelte Blöcke ohne Pfeile",
                "Sie sind nur rot erlaubt",
                "DIN 5008 verbietet sie",
                "Weil es keine Schleifen kennt",
              ],
              correct: 0,
              explain:
                "Die Blockstruktur erzwingt strukturierte Programmierung – genau das ist der Zweck.",
            },
            {
              id: "imp_lf5-se-4_5",
              q: "Trace-Tabelle bedeutet …",
              options: [
                "Fehlerprotokoll des Compilers",
                "Werte aller Variablen je Durchlauf mitschreiben",
                "UML-Tabelle",
                "Netzwerk-Route verfolgen",
              ],
              correct: 1,
              explain:
                "Sturer Werteverlauf pro Schleifendurchlauf – das sicherste Mittel gegen Ablauf-Fallen.",
            },
            {
              id: "imp_lf5-se-4_6",
              q: "Das Parallelogramm im PAP steht für …",
              options: ["Entscheidung", "Schleife", "Ein-/Ausgabe", "Kommentar"],
              correct: 2,
              explain:
                "Ein- und Ausgabeoperationen (lesen/schreiben) werden als Parallelogramm gezeichnet.",
            },
            {
              id: "imp_lf5-se-4_7",
              q: "Struktogramm nach Code: „SOLANGE oben“ entspricht …",
              options: ["do { } while", "while ( ) { }", "for-each", "switch"],
              correct: 1,
              explain: "Bedingung oben = kopfgesteuert = while-Schleife; L-Form unten = do-while.",
            },
            {
              id: "imp_lf5-se-4_8",
              q: "Passendes Werkzeug speziell für Struktogramme?",
              options: ["Wireshark", "Structorizer", "PuTTY", "Excel"],
              correct: 1,
              explain:
                "Structorizer zeichnet Nassi-Shneiderman-Diagramme, führt sie aus und exportiert Code (siehe Linksammlung).",
            },
            {
              id: "imp_lf5-se-4_9",
              q: "Mehrfachauswahl (CASE) im Struktogramm erscheint als …",
              options: [
                "gestapelte Rechtecke",
                "aufgefächerte Spalten unter einem Kopf",
                "Pfeilkreis",
                "Doppel-Raute",
              ],
              correct: 1,
              explain:
                "Der Kopf nennt die Fallvariable, darunter je ein Ast pro Fall (plus sonst-Ast).",
            },
          ],
        },
        {
          id: "lf5-se-5",
          title: "Scrum & Kanban vertieft",
          content: [
            { type: "heading", value: "Agil vs. klassisch – wann was?" },
            {
              type: "text",
              value:
                "Klassische Modelle (Wasserfall, V-Modell) planen das Ganze vorab – stark bei stabilen Anforderungen, Festpreis und hoher Dokumentationspflicht. Agile Methoden liefern in kurzen Zyklen nutzbare Zwischenstände und begrüßen Anforderungsänderungen – stark, wenn der Kunde das Ziel erst beim Sehen präzisiert. Das Agile Manifest (2001) fasst die Haltung zusammen: Individuen und Interaktionen über Prozesse, funktionierende Software über umfassende Dokumentation, Kundenzusammenarbeit über Vertragsverhandlung, Reagieren auf Veränderung über Planbefolgung – wobei die rechten Seiten weiterhin WICHTIG sind, nur eben weniger wichtig.",
            },
            { type: "heading", value: "Scrum: Rollen, Artefakte, Events" },
            {
              type: "text",
              value:
                "Drei ROLLEN: Product Owner (verantwortet das WAS: priorisiert das Product Backlog, vertritt die Stakeholder) · Scrum Master (verantwortet den PROZESS: beseitigt Hindernisse/Impediments, schützt das Team, ist Coach – KEIN Chef!) · Entwicklungsteam (crossfunktional, organisiert sich selbst, typisch 3–9 Personen). Drei ARTEFAKTE: Product Backlog (geordnete Wunschliste, oft als User Storys: „Als <Rolle> möchte ich <Funktion>, um <Nutzen>“), Sprint Backlog (die für den aktuellen Sprint gezogenen Einträge + Plan), Increment (das fertige, potenziell auslieferbare Produktstück – „fertig“ definiert die Definition of Done). Fünf EVENTS: Sprint (fester Takt, max. 1 Monat, üblich 2 Wochen), Sprint Planning, Daily Scrum (15 min, im Stehen: Was habe ich getan / tue ich / was blockiert mich?), Sprint Review (Increment den Stakeholdern zeigen), Sprint Retrospective (Wie verbessern WIR unsere Zusammenarbeit?).",
            },
            { type: "heading", value: "Kanban: Fluss statt Takt" },
            {
              type: "text",
              value:
                "Kanban visualisiert Arbeit auf einem Board (Spalten z. B. To Do → In Arbeit → Test → Fertig) und begrenzt die parallele Arbeit per WIP-Limit (Work in Progress). Regel: Stopp beim Limit – erst fertigmachen, dann Neues ziehen (Pull-Prinzip). Kein fester Takt, keine Pflichtrollen: ideal für Betriebs-/Supportteams mit ständig eintreffenden Tickets. Kennzahlen: Durchlaufzeit (Lead/Cycle Time) und Durchsatz. Scrum vs. Kanban in einem Satz: Scrum TAKTET (Sprints, Rollen, Events), Kanban FLIESST (Board, WIP-Limits) – Mischformen („Scrumban“) sind üblich.",
            },
            { type: "heading", value: "Typische Prüfungs- und Praxisfallen" },
            {
              type: "text",
              value:
                "Der Scrum Master ist kein Projektleiter und verteilt keine Aufgaben – das Team zieht sich seine Arbeit selbst. · Der Product Owner priorisiert, das Team schätzt den Aufwand (z. B. Planning Poker mit Story Points – relative Größen, keine Stunden!). · Review ≠ Retrospektive: Review betrachtet das PRODUKT, die Retro den PROZESS. · Velocity (geschaffte Story Points je Sprint) dient der Prognose des Teams – sie taugt NICHT zum Vergleich verschiedener Teams. · Ein Daily ist kein Statusbericht an den Chef, sondern Selbstabstimmung des Teams.",
            },
            {
              type: "note",
              value:
                "Merkhilfen: Scrum-Dreierpacks – 3 Rollen (PO/SM/Team), 3 Artefakte (Product/Sprint Backlog, Increment). Rollenmerksatz: PO = WAS, SM = WIE (Prozess), Team = BAU. Kanban = Board + WIP-Limit + Pull.",
            },
            { type: "heading", value: "Übungsaufgabe: Methode empfehlen" },
            {
              type: "text",
              value:
                "Team A entwickelt eine neue Kundenportal-Software; die Fachabteilung kann Anforderungen nur grob nennen und will alle zwei Wochen Zwischenstände sehen. Team B betreibt den IT-Support mit täglich unplanbar eintreffenden Tickets. Empfiehl je Team eine Methode mit zwei Begründungen – und erkläre, warum ein WIP-Limit Team B schneller macht, obwohl es Arbeit begrenzt.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nTeam A: Scrum – unklare, reifende Anforderungen sprechen für iterative Entwicklung; der 2-Wochen-Wunsch passt exakt auf Sprint + Review.\nTeam B: Kanban – kein planbarer Takt, kontinuierlicher Ticketfluss; Board macht Engpässe sichtbar, keine Sprint-Zwänge.\nWIP-Limit: Weniger parallele Tickets bedeuten weniger Kontextwechsel und schnelleres FERTIGwerden einzelner Aufgaben – die Durchlaufzeit sinkt, Engpässe (volle Spalte) werden sofort sichtbar und behebbar.",
            },
          ],
          quiz: [
            {
              id: "imp_lf5-se-5_0",
              q: "Wer priorisiert das Product Backlog?",
              options: [
                "Der Scrum Master",
                "Der Product Owner",
                "Das Entwicklungsteam",
                "Die Stakeholder direkt",
              ],
              correct: 1,
              explain:
                "Der PO verantwortet Inhalt und Reihenfolge – er vertritt dabei die Stakeholder.",
            },
            {
              id: "imp_lf5-se-5_1",
              q: "Der Scrum Master …",
              options: [
                "verteilt die Aufgaben",
                "beurteilt das Team",
                "beseitigt Hindernisse und coacht den Prozess",
                "schreibt die User Storys",
              ],
              correct: 2,
              explain:
                "Servant Leader: Prozesshüter und Impediment-Beseitiger – kein Vorgesetzter.",
            },
            {
              id: "imp_lf5-se-5_2",
              q: "Review vs. Retrospektive – richtig ist:",
              options: [
                "Review = Produkt, Retro = Prozess",
                "Review = Prozess, Retro = Produkt",
                "beides dasselbe",
                "Retro nur bei Fehlern",
              ],
              correct: 0,
              explain:
                "Im Review wird das Increment gezeigt; in der Retro verbessert das Team seine Zusammenarbeit.",
            },
            {
              id: "imp_lf5-se-5_3",
              q: "Ein WIP-Limit bewirkt …",
              options: [
                "mehr parallele Arbeit",
                "weniger Kontextwechsel, kürzere Durchlaufzeit",
                "längere Sprints",
                "mehr Dokumentation",
              ],
              correct: 1,
              explain:
                "Begrenzte parallele Arbeit → Aufgaben werden FERTIG statt angefangen; Engpässe werden sichtbar.",
            },
            {
              id: "imp_lf5-se-5_4",
              q: "Das Daily Scrum dauert maximal …",
              options: ["15 Minuten", "60 Minuten", "einen halben Tag", "5 Minuten je Person"],
              correct: 0,
              explain: "Timebox 15 Minuten – Selbstabstimmung des Teams, kein Statusrapport.",
            },
            {
              id: "imp_lf5-se-5_5",
              q: "User-Story-Schablone?",
              options: [
                "Wer macht was bis wann im Team",
                "Als <Rolle> möchte ich <Funktion>, um <Nutzen>",
                "Given/When/Then als Testschablone",
                "Soll an Haben mit zwei Konten",
              ],
              correct: 1,
              explain:
                "Rolle + Funktion + Nutzen; Given/When/Then beschreibt dagegen Akzeptanzkriterien.",
            },
            {
              id: "imp_lf5-se-5_6",
              q: "Story Points sind …",
              options: [
                "Arbeitsstunden",
                "Euro-Beträge",
                "relative Aufwandsgrößen",
                "Fehlerpunkte",
              ],
              correct: 2,
              explain:
                "Relative Schätzgrößen des Teams (z. B. Fibonacci beim Planning Poker) – bewusst keine Stunden.",
            },
            {
              id: "imp_lf5-se-5_7",
              q: "Velocity eignet sich …",
              options: [
                "zum Teamvergleich durch den Chef",
                "zur Gehaltsfindung",
                "als Deadline-Garantie",
                "zur Prognose desselben Teams",
              ],
              correct: 3,
              explain:
                "Story Points sind teamintern kalibriert – Vergleich zwischen Teams ist Unsinn.",
            },
            {
              id: "imp_lf5-se-5_8",
              q: "Kanban stammt ursprünglich aus …",
              options: [
                "der Toyota-Produktion (Lean)",
                "dem US-Militär",
                "der NASA",
                "dem V-Modell",
              ],
              correct: 0,
              explain:
                "Lean Production: Karten (Kanban) signalisieren Nachschub – Pull-Prinzip statt Push.",
            },
            {
              id: "imp_lf5-se-5_9",
              q: "Sprint-Eigenschaft?",
              options: [
                "variable Länge je nach Lust",
                "fester Takt, max. 1 Monat",
                "mindestens 6 Wochen",
                "endet nur, wenn alles fertig ist",
              ],
              correct: 1,
              explain:
                "Feste Timebox (üblich 2 Wochen); nicht Fertiges geht zurück ins Product Backlog.",
            },
            {
              id: "imp_lf5-se-5_10",
              q: "Für ein Support-Team mit unplanbarem Ticketstrom passt am besten …",
              options: ["Wasserfall", "V-Modell", "Kanban", "Festpreisprojekt"],
              correct: 2,
              explain:
                "Kontinuierlicher Fluss + WIP-Limits statt Sprint-Takt – klassischer Kanban-Fall.",
            },
          ],
        },
      ],
    },
    {
      id: "lf5-linux",
      title: "Linux-Grundlagen",
      lessons: [
        {
          id: "lf5-lx-1",
          title: "Linux-Dateisystem & Befehle",
          content: [
            { type: "heading", value: "Verzeichnisstruktur" },
            {
              type: "text",
              value:
                "/ (Root), /home (Benutzer), /etc (Konfiguration), /var (Logs, variable Daten), /tmp (temporär), /usr (Programme), /bin und /sbin (Systembefehle), /dev (Geräte), /mnt und /media (Einhängepunkte), /proc (Kernel-Info).",
            },
            { type: "heading", value: "Wichtige Befehle" },
            {
              type: "code",
              value:
                "ls -la              # Dateien auflisten (mit Details)\ncd /etc             # Verzeichnis wechseln\npwd                 # Aktuelles Verzeichnis\nmkdir ordner        # Verzeichnis erstellen\ncp quelle ziel      # Kopieren\nmv alt neu          # Verschieben/Umbenennen\nrm datei            # Löschen (-r für Ordner)\ncat datei           # Datei anzeigen\ngrep 'text' datei   # Text suchen\nchmod 755 datei     # Rechte setzen\nchown user:group f  # Besitzer ändern\nsudo befehl         # Als Root ausführen\napt update && apt upgrade  # Pakete aktualisieren (Debian/Ubuntu)",
            },
            { type: "heading", value: "Dateiberechtigungen" },
            {
              type: "text",
              value:
                "rwx = Read(4) Write(2) Execute(1). Drei Gruppen: Owner | Group | Others. chmod 755 = rwxr-xr-x (Owner alles, Gruppe+Andere lesen+ausführen). chmod 644 = rw-r--r-- (typisch für Dateien).",
            },
            {
              type: "note",
              value: "Linux ist als FiSi unverzichtbar – Server laufen überwiegend unter Linux.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Verzeichnisse" },
            {
              type: "text",
              value:
                "Ordne zu: /etc, /var, /home, /tmp, /usr, /dev. Was enthält: a) Benutzerdaten, b) Konfiguration, c) Geräte, d) Logs, e) Temp, f) Programme?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) /home b) /etc c) /dev d) /var (z.B. /var/log) e) /tmp f) /usr (/usr/bin)",
            },
            { type: "heading", value: "Übungsaufgabe 2: Befehle" },
            {
              type: "text",
              value:
                "Befehle für: a) Datei suchen, b) Text in Dateien suchen, c) Berechtigungen ändern, d) Datei kopieren, e) Dateiinhalt anzeigen?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) find / -name 'x' (oder locate)\nb) grep 'text' datei (grep -r für rekursiv)\nc) chmod 755 datei (r=4, w=2, x=1)\nd) cp quelle ziel (-r für Verzeichnisse)\ne) cat (komplett), less (seitenweise), head/tail",
            },
            { type: "heading", value: "Essentielle Linux-Befehle für FiSi (Referenz)" },
            {
              type: "text",
              value:
                "DATEISYSTEM: ls -la (ausführlich auflisten), cd /pfad (Verzeichnis wechseln), pwd (aktuelles Verzeichnis), mkdir -p ordner/unter (Ordner+Unterordner erstellen), rm -rf ordner (rekursiv löschen – VORSICHT!), cp -r quelle ziel (rekursiv kopieren), mv alt neu (verschieben/umbenennen), find / -name '*.log' (Dateien suchen), du -sh /var (Ordnergröße), df -h (Festplattenbelegung), cat/less/head/tail datei (Datei anzeigen), nano/vim datei (Editor), chmod 755 datei (Rechte setzen), chown user:gruppe datei (Besitzer ändern).",
            },
            {
              type: "text",
              value:
                "NETZWERK: ip addr show (IP-Adressen), ip route show (Routing-Tabelle), ss -tulpn (offene Ports + PIDs – Nachfolger von netstat), ping/traceroute/dig/nslookup (Diagnose), curl -v https://example.com (HTTP-Request), wget URL (Datei herunterladen), nmcli con show (NetworkManager), /etc/resolv.conf (DNS-Config), /etc/hosts (lokale Namensauflösung), iptables -L / nft list ruleset (Firewall-Regeln), tcpdump -i eth0 port 80 (Paketmitschnitt).",
            },
            {
              type: "text",
              value:
                "SYSTEM: systemctl start/stop/status/enable dienst (Dienste verwalten), journalctl -u dienst -f (Live-Logs), top/htop (Prozesse/Auslastung), ps aux | grep prozess (Prozess suchen), kill -9 PID (Prozess beenden), free -h (RAM-Auslastung), lsblk (Blockgeräte/Festplatten), mount/umount (Dateisysteme einhängen), crontab -e (Cronjobs bearbeiten), uname -a (Kernel-Info), uptime (Laufzeit+Load), dmesg (Kernel-Meldungen).",
            },
            {
              type: "text",
              value:
                "BENUTZER & RECHTE: useradd -m -s /bin/bash user (Benutzer anlegen), passwd user (Passwort setzen), usermod -aG sudo user (User zur Gruppe sudo hinzufügen), groups user (Gruppenzugehörigkeit), id user (UID/GID anzeigen), su - user (Benutzer wechseln), sudo befehl (als root ausführen), visudo (/etc/sudoers bearbeiten), /etc/passwd + /etc/shadow (Benutzerdaten).",
            },
            {
              type: "text",
              value:
                "PAKETVERWALTUNG: Debian/Ubuntu: apt update && apt upgrade (aktualisieren), apt install paket, apt remove paket, dpkg -l (installierte Pakete). RHEL/CentOS: dnf install paket, dnf update. Allgemein: which befehl (Pfad finden), whereis befehl (alle Pfade), man befehl (Handbuch).",
            },
            { type: "heading", value: "Beispiel 1: Dateisystem-Hierarchie" },
            {
              type: "text",
              value:
                "/ (Root), /home (Benutzer-Home), /etc (Konfiguration), /var (Variable Daten: Logs, Mail, Datenbanken), /tmp (Temporär, wird geleert), /opt (Optionale Software), /usr (User-Programme), /bin + /sbin (Systembefehle), /dev (Geräte-Dateien), /proc (Prozess-Info, virtuell), /mnt + /media (Mount-Punkte). Alles ist eine Datei in Linux – sogar Geräte (/dev/sda) und Prozessinfos (/proc/cpuinfo).",
            },
            { type: "heading", value: "Beispiel 2: Berechtigungen verstehen" },
            {
              type: "text",
              value:
                "ls -l zeigt: -rwxr-xr-- 1 max users 4096 Jun 8 10:00 script.sh. Typ(-=Datei, d=Dir, l=Link) | Owner(rwx) | Group(r-x) | Others(r--). r=lesen(4), w=schreiben(2), x=ausführen(1). chmod 755 = rwxr-xr-x (Owner alles, Rest lesen+ausführen). chmod 644 = rw-r--r-- (Owner lesen+schreiben, Rest nur lesen). chown max:users datei → Besitzer + Gruppe ändern.",
            },
            { type: "heading", value: "Beispiel 3: Pipes und Umleitung" },
            {
              type: "text",
              value:
                "cat /var/log/syslog | grep 'error' | wc -l → Zählt Fehlerzeilen im Syslog. | (Pipe): Ausgabe von Befehl 1 als Eingabe für Befehl 2. > datei.txt: Ausgabe in Datei (überschreiben). >> datei.txt: Anhängen. 2> errors.log: Nur Fehler umleiten. /dev/null: Schwarzes Loch (Ausgabe verwerfen). Beispiel: find / -name '*.log' 2>/dev/null → Findet alle .log-Dateien, unterdrückt Fehlermeldungen.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Linux-Berechtigungen berechnen" },
            {
              type: "text",
              value:
                "Ein Script backup.sh soll folgende Berechtigungen haben: Besitzer (admin) darf lesen, schreiben, ausführen. Gruppe (it-team) darf lesen und ausführen. Alle anderen dürfen nichts.\na) Wie lautet der chmod-Befehl (oktal)?\nb) Wie lautet die symbolische Schreibweise?\nc) Was zeigt ls -l nach dem chmod?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) chmod 750 backup.sh\n   Berechnung: Owner=rwx=4+2+1=7, Group=r-x=4+0+1=5, Others=---=0 → 750\n\nb) chmod u=rwx,g=rx,o= backup.sh\n   Oder: chmod u+rwx,g+rx,o-rwx backup.sh\n\nc) ls -l zeigt:\n   -rwxr-x--- 1 admin it-team 2048 Jun 8 10:00 backup.sh\n\nErklärung:\n- rwx = Owner (admin): Lesen+Schreiben+Ausführen\n- r-x = Group (it-team): Lesen+Ausführen\n- --- = Others: Keine Rechte\n\nWichtig: Für Scripte ist das x-Bit (execute) Pflicht! Ohne x: 'Permission denied' beim Ausführen.",
            },
          ],
          quiz: [
            {
              id: "imp_lf5-lx-1_0",
              q: "chmod 755 bedeutet?",
              options: ["rw-rw-rw-", "rwx------", "rwxr-xr-x", "Nur Lesen"],
              correct: 2,
              explain: "7=rwx (Owner), 5=r-x (Group), 5=r-x (Others).",
            },
            {
              id: "imp_lf5-lx-1_1",
              q: "/etc enthält?",
              options: ["Temporäre Dateien", "Konfigurationsdateien", "Benutzerdaten", "Programme"],
              correct: 1,
              explain: "/etc = Systemkonfiguration.",
            },
            {
              id: "imp_lf5-lx-1_2",
              q: "Befehl zur Textsuche in Dateien?",
              options: ["find", "grep", "search", "locate"],
              correct: 1,
              explain: "grep durchsucht Dateiinhalte nach Textmustern.",
            },
            {
              id: "imp_lf5-lx-1_3",
              q: "ls -la zeigt?",
              options: ["Nur Ordner", "Alle inkl. versteckte + Rechte", "Nur Dateien", "Nur Größe"],
              correct: 1,
              explain: "-l=Lang, -a=alle (auch versteckte).",
            },
            {
              id: "imp_lf5-lx-1_4",
              q: "sudo = ?",
              options: ["System Update", "Diagnose", "Super User", "Befehl als Root ausführen"],
              correct: 3,
              explain: "sudo: Befehl mit Root-Rechten ausführen.",
            },
            {
              id: "imp_lf5-lx-1_5",
              q: "grep Zweck?",
              options: [
                "Dateien löschen",
                "Textmuster in Dateien suchen",
                "Komprimieren",
                "Dateien erstellen",
              ],
              correct: 1,
              explain: "grep: Zeilen, die ein Muster enthalten, aus Dateien filtern.",
            },
            {
              id: "imp_lf5-lx-1_6",
              q: "chmod 644?",
              options: [
                "r-------- (nur der Owner darf lesen, sonst niemand)",
                "rwx------ (Owner darf alles, sonst niemand etwas)",
                "rw-r--r-- (Owner lesen+schreiben, Rest nur lesen)",
                "rwxrwxrwx (alle dürfen lesen, schreiben, ausführen)",
              ],
              correct: 2,
              explain: "6=rw-, 4=r--, 4=r--.",
            },
            {
              id: "imp_lf5-lx-1_7",
              q: "chown?",
              options: [
                "Datei löschen",
                "Besitzer ändern (change owner)",
                "Kopieren",
                "Rechte ändern",
              ],
              correct: 1,
              explain: "chown user:group datei = Besitzer und Gruppe ändern.",
            },
            {
              id: "imp_lf5-lx-1_8",
              q: "Pipe | in Linux?",
              options: [
                "Fehlerumleitung",
                "Parallele Ausführung",
                "Hintergrund",
                "Output von Befehl 1 als Input für Befehl 2",
              ],
              correct: 3,
              explain: "cat log.txt | grep error = Output von cat wird in grep geleitet.",
            },
            {
              id: "imp_lf5-lx-1_9",
              q: "Was macht chmod 644?",
              options: [
                "Besitzer: rw-, Gruppe: r--, Andere: r--",
                "Datei verschlüsseln",
                "Vollzugriff für alle",
                "Datei löschen",
              ],
              correct: 0,
              explain:
                "Lesen für alle, Schreiben nur Owner. 6=rw-(4+2), 4=r--(4), 4=r--(4). Typisch für Konfigurationsdateien.",
            },
            {
              id: "imp_lf5-lx-1_10",
              q: "Welches Verzeichnis enthält Konfigurationsdateien?",
              options: ["/home", "/etc", "/tmp", "/var"],
              correct: 1,
              explain:
                "/etc: Alle System-Konfigurationsdateien (network, fstab, passwd, hosts, ssh, apache...).",
            },
            {
              id: "imp_lf5-lx-1_11",
              q: "Was macht der Befehl grep?",
              options: [
                "Dateien in ein komprimiertes Archiv packen",
                "Einen neuen Benutzer im System anlegen",
                "Text in Dateien/Ausgaben nach Muster durchsuchen",
                "Dateien und Verzeichnisse endgültig löschen",
              ],
              correct: 2,
              explain:
                "grep 'error' logfile.txt: Zeigt nur Zeilen, die 'error' enthalten. -i = case-insensitive, -r = rekursiv.",
            },
            {
              id: "imp_lf5-lx-1_12",
              q: "Was ist eine Pipe (|)?",
              options: [
                "Leitet die Ausgabe eines Befehls als Eingabe an den nächsten",
                "Ein Netzwerkkabel zur direkten Verbindung zweier Rechner",
                "Ein spezielles Systemverzeichnis für temporäre Dateien",
                "Eine Umgebungsvariable, die den Suchpfad der Shell festlegt",
              ],
              correct: 0,
              explain:
                "Pipe: ls -la | grep '.conf' → Listet Dateien auf und filtert nur .conf-Dateien.",
            },
            {
              id: "imp_lf5-lx-1_13",
              q: "Was macht 'cat datei.txt > kopie.txt'?",
              options: [
                "Vergleicht beide Dateien zeilenweise und zeigt Unterschiede an",
                "Löscht datei.txt nach dem Anzeigen des Inhalts vom Datenträger",
                "Inhalt von datei.txt in kopie.txt schreiben (überschreiben)",
                "Öffnet datei.txt zum Bearbeiten in einem interaktiven Editor",
              ],
              correct: 2,
              explain:
                "> überschreibt die Zieldatei. >> hängt an. Ohne Zieldatei: Ausgabe auf Terminal.",
            },
            {
              id: "imp_lf5-lx-1_14",
              q: "Welches Verzeichnis enthält Log-Dateien?",
              options: ["/etc", "/home", "/tmp", "/var/log"],
              correct: 3,
              explain:
                "/var/log: syslog, auth.log, kern.log, apache2/error.log etc. Wichtigste Anlaufstelle bei Problemen.",
            },
            {
              id: "imp_lf5-lx-1_15",
              q: "Was zeigt 'pwd'?",
              options: [
                "Plattenspeicher",
                "Passwort",
                "Aktuelles Arbeitsverzeichnis",
                "Prozessliste",
              ],
              correct: 2,
              explain:
                "Print Working Directory. pwd: Gibt den vollständigen Pfad des aktuellen Verzeichnisses aus.",
            },
            {
              id: "imp_lf5-lx-1_16",
              q: "Was macht 'find / -name \"*.log\" -mtime -7'?",
              options: [
                "Zeigt den Inhalt aller .log-Dateien seitenweise im Terminal an",
                "Alle .log-Dateien finden, die in den letzten 7 Tagen geändert wurden",
                "Komprimiert alle .log-Dateien, die älter als 7 Tage sind, mit gzip",
                "Löscht alle .log-Dateien, die seit 7 Tagen nicht geändert wurden",
              ],
              correct: 1,
              explain:
                "find: Sucht Dateien. / = ab Root. -name: Dateiname. -mtime -7: Modifiziert in letzten 7 Tagen.",
            },
            {
              id: "imp_lf5-lx-1_17",
              q: "Was ist der Unterschied zwischen hard link und symbolic link?",
              options: [
                "Hard Link verweist auf Inode (gleiche Datei), Symlink auf Pfad (wie Verknüpfung)",
                "Hard Links beschleunigen Dateizugriffe durch direktes Caching im Kernel",
                "Kein Unterschied, beide erzeugen identische Verweise auf den Dateipfad",
                "Symlinks sind sicherer, da sie Schreibzugriffe auf das Original verhindern",
              ],
              correct: 0,
              explain:
                "Hard Link: Zweiter Name für gleiche Daten. Symlink: Zeiger auf Pfad (ln -s). Symlink kann kaputtgehen, wenn das Ziel gelöscht wird.",
            },
            {
              id: "imp_lf5-lx-1_18",
              q: "Was macht 'tail -f /var/log/syslog'?",
              options: [
                "Kopiert die Logdatei mit allen Attributen ins Home-Verzeichnis (Fast Copy)",
                "Zeigt die letzten Zeilen und aktualisiert live bei neuen Einträgen (Follow)",
                "Löscht die Datei nach Bestätigung und legt eine leere Logdatei an (Force)",
                "Öffnet die Datei im Standardeditor zur direkten Bearbeitung (File Edit)",
              ],
              correct: 1,
              explain:
                "tail -f: Live-Monitoring einer Log-Datei. Neue Zeilen erscheinen sofort. Ctrl+C zum Beenden.",
            },
            {
              id: "imp_lf5-lx-1_19",
              q: "Was macht 'wc -l datei.txt'?",
              options: ["Dateigröße", "Zeichen zählen", "Zeilen zählen", "Wörter zählen"],
              correct: 2,
              explain:
                "Word Count mit -l = lines. wc: Word Count. -l = Zeilen, -w = Wörter, -c = Bytes, -m = Zeichen.",
            },
          ],
        },
        {
          id: "lf5-lx-2",
          title: "Benutzer, Dienste & Netzwerk unter Linux",
          content: [
            { type: "heading", value: "Benutzerverwaltung" },
            {
              type: "code",
              value:
                "useradd -m benutzer     # Benutzer anlegen mit Home\npasswd benutzer         # Passwort setzen\nusermod -aG sudo benutzer  # Zur Gruppe hinzufügen\nuserdel -r benutzer     # Benutzer + Home löschen\ngroups benutzer         # Gruppenzugehörigkeit\n/etc/passwd             # Benutzerliste\n/etc/shadow             # Passwort-Hashes",
            },
            { type: "heading", value: "Dienste (systemd)" },
            {
              type: "code",
              value:
                "systemctl start nginx       # Dienst starten\nsystemctl stop nginx        # Stoppen\nsystemctl restart nginx     # Neustarten\nsystemctl enable nginx      # Autostart aktivieren\nsystemctl status nginx      # Status anzeigen\njournalctl -u nginx -f      # Logs live verfolgen",
            },
            { type: "heading", value: "Netzwerk unter Linux" },
            {
              type: "code",
              value:
                "ip addr show            # IP-Konfiguration\nip route show           # Routing-Tabelle\nss -tuln                # Offene Ports\n/etc/netplan/           # Ubuntu Netzkonfig (YAML)\n/etc/resolv.conf        # DNS-Konfiguration\nhostnamectl             # Hostname anzeigen/setzen",
            },
            { type: "heading", value: "Übungsaufgabe 1: Benutzerverwaltung" },
            {
              type: "text",
              value: "Lege Benutzer 'azubi' an, setze Passwort, füge zur Gruppe 'sudo' hinzu.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nsudo useradd -m azubi\nsudo passwd azubi\nsudo usermod -aG sudo azubi\nPrüfen: groups azubi\n/etc/passwd → Benutzer, /etc/shadow → Hashes, /etc/group → Gruppen",
            },
            { type: "heading", value: "Übungsaufgabe 2: Dienste mit systemd" },
            {
              type: "text",
              value: "Wie startest, stoppst und prüfst du einen Dienst (z.B. apache2) unter Linux?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nsystemctl start/stop/restart/status apache2\nsystemctl enable/disable apache2 (Autostart)\njournalctl -u apache2 (Logs)\nsystemctl list-units --type=service (alle Dienste)",
            },
            { type: "heading", value: "Beispiel 1: Benutzer und Gruppen verwalten" },
            {
              type: "text",
              value:
                "useradd -m -s /bin/bash -G sudo,www-data webadmin → Erstellt User 'webadmin' mit Home-Dir, Bash-Shell, in Gruppen sudo und www-data. passwd webadmin → Passwort setzen. usermod -aG docker webadmin → Nachträglich zur Gruppe docker hinzufügen (-a = append, ohne -a werden alle bisherigen Gruppen ersetzt!). userdel -r webadmin → User + Home-Dir löschen.",
            },
            { type: "heading", value: "Beispiel 2: Dienste mit systemd verwalten" },
            {
              type: "text",
              value:
                "systemctl start nginx → Dienst starten. systemctl enable nginx → Autostart bei Boot. systemctl status nginx → Status + letzte Log-Zeilen. systemctl restart nginx → Neustart (stop+start). systemctl reload nginx → Konfiguration neu laden OHNE Neustart (keine Downtime). journalctl -u nginx -f → Live-Logs des Dienstes. systemctl list-units --type=service → Alle Dienste auflisten.",
            },
            { type: "heading", value: "Beispiel 3: Netzwerk unter Linux konfigurieren" },
            {
              type: "text",
              value:
                "ip addr show → Alle IPs anzeigen. ip addr add 192.168.1.100/24 dev eth0 → Statische IP setzen (temporär). Permanent: /etc/netplan/01-config.yaml (Ubuntu) oder /etc/network/interfaces (Debian). DNS: /etc/resolv.conf (nameserver 8.8.8.8). Hostname: hostnamectl set-hostname server01. Firewall: ufw allow 22/tcp (SSH erlauben), ufw enable (aktivieren).",
            },
            { type: "heading", value: "Übungsaufgabe 3: Linux-Server aufsetzen" },
            {
              type: "text",
              value:
                "Beschreibe die Schritte um einen Ubuntu-Server als Webserver einzurichten: SSH absichern, Apache installieren, Firewall konfigurieren, Benutzer für Webmaster anlegen. Nenne die konkreten Befehle.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1) SSH absichern:\n   sudo nano /etc/ssh/sshd_config\n   → PermitRootLogin no\n   → PasswordAuthentication no (nur SSH-Keys!)\n   sudo systemctl restart sshd\n\n2) System aktualisieren:\n   sudo apt update && sudo apt upgrade -y\n\n3) Apache installieren:\n   sudo apt install apache2 -y\n   sudo systemctl enable apache2\n   sudo systemctl start apache2\n\n4) Firewall konfigurieren:\n   sudo ufw allow 22/tcp    # SSH\n   sudo ufw allow 80/tcp    # HTTP\n   sudo ufw allow 443/tcp   # HTTPS\n   sudo ufw enable\n   sudo ufw status\n\n5) Webmaster-Benutzer anlegen:\n   sudo useradd -m -s /bin/bash -G www-data webmaster\n   sudo passwd webmaster\n   sudo chown -R webmaster:www-data /var/www/html\n   sudo chmod -R 755 /var/www/html\n\n6) Testen:\n   curl http://localhost → Apache-Standardseite\n   ss -tulpn | grep :80 → Apache lauscht auf Port 80",
            },
          ],
          quiz: [
            {
              id: "imp_lf5-lx-2_0",
              q: "Dienst beim Booten automatisch starten?",
              options: [
                "service autostart",
                "systemctl daemon-reload",
                "systemctl start",
                "systemctl enable",
              ],
              correct: 3,
              explain: "systemctl enable = Autostart aktivieren.",
            },
            {
              id: "imp_lf5-lx-2_1",
              q: "Wo stehen Passwort-Hashes unter Linux?",
              options: ["/etc/users", "/home/.passwords", "/etc/passwd", "/etc/shadow"],
              correct: 3,
              explain: "/etc/shadow enthält die gehashten Passwörter.",
            },
            {
              id: "imp_lf5-lx-2_2",
              q: "useradd vs. adduser?",
              options: [
                "adduser dient zum Löschen bestehender Benutzerkonten",
                "useradd legt ausschließlich das root-Konto neu an",
                "useradd = low-level, adduser = interaktiv (Debian)",
                "Beide Befehle sind identische Aliasse desselben Tools",
              ],
              correct: 2,
              explain: "useradd: Basis-Befehl. adduser: Interaktives Script (fragt Passwort etc.).",
            },
            {
              id: "imp_lf5-lx-2_3",
              q: "systemctl enable nginx?",
              options: [
                "Nginx starten",
                "Nginx deinstallieren",
                "Nginx beim Boot automatisch starten",
                "Nginx installieren",
              ],
              correct: 2,
              explain: "enable = Dienst startet automatisch beim Systemstart.",
            },
            {
              id: "imp_lf5-lx-2_4",
              q: "ss -tulpn zeigt?",
              options: ["Festplatten", "Offene Ports mit Prozessen", "Benutzer", "CPU-Last"],
              correct: 1,
              explain: "TCP/UDP listening Ports mit Prozessnamen.",
            },
            {
              id: "imp_lf5-lx-2_5",
              q: "/etc/passwd enthält?",
              options: [
                "Logs",
                "Benutzerkontoinformationen (kein Passwort!)",
                "Netzwerkconfig",
                "Passwörter",
              ],
              correct: 1,
              explain: "Benutzer, UID, GID, Home, Shell. Passwort-Hashes in /etc/shadow.",
            },
            {
              id: "imp_lf5-lx-2_6",
              q: "chmod 755?",
              options: [
                "--------- (niemand hat Rechte, Datei komplett gesperrt)",
                "r--r--r-- (alle dürfen die Datei ausschließlich lesen)",
                "rwx------ (nur der Owner besitzt sämtliche Rechte)",
                "rwxr-xr-x (Owner: alles, Gruppe+Andere: lesen+ausführen)",
              ],
              correct: 3,
              explain: "7=rwx, 5=r-x, 5=r-x.",
            },
            {
              id: "imp_lf5-lx-2_7",
              q: "/etc/shadow enthält?",
              options: [
                "Logs",
                "Passwort-Hashes (nur root lesbar)",
                "Benutzernamen",
                "IP-Adressen",
              ],
              correct: 1,
              explain: "/etc/shadow: Gehashte Passwörter, nur root darf lesen.",
            },
            {
              id: "imp_lf5-lx-2_8",
              q: "journalctl -u nginx?",
              options: [
                "Config prüfen",
                "Nginx starten",
                "Logs des nginx-Dienstes anzeigen",
                "Nginx installieren",
              ],
              correct: 2,
              explain: "journalctl: Systemd-Logs für einen bestimmten Dienst.",
            },
            {
              id: "imp_lf5-lx-2_9",
              q: "ufw = ?",
              options: [
                "Unix Format Writer",
                "Uncomplicated Firewall",
                "User File Watcher",
                "Upload Framework",
              ],
              correct: 1,
              explain:
                "Einfache iptables-Verwaltung. UFW: Benutzerfreundliches Frontend für iptables.",
            },
            {
              id: "imp_lf5-lx-2_10",
              q: "Was macht 'systemctl enable nginx'?",
              options: [
                "nginx für Autostart bei Boot aktivieren",
                "nginx starten",
                "nginx deinstallieren",
                "nginx installieren",
              ],
              correct: 0,
              explain:
                "enable: Erstellt Symlink in den Boot-Targets. nginx startet automatisch bei jedem Systemstart.",
            },
            {
              id: "imp_lf5-lx-2_11",
              q: "Wie fügt man einen User zu einer Gruppe hinzu, OHNE andere Gruppen zu entfernen?",
              options: [
                "useradd -G gruppe user",
                "usermod -G gruppe user",
                "groupadd user gruppe",
                "usermod -aG gruppe user",
              ],
              correct: 3,
              explain:
                "Mit -a für append! -aG: -a = append (anhängen). OHNE -a werden alle bisherigen Gruppen durch die neue ersetzt!",
            },
            {
              id: "imp_lf5-lx-2_12",
              q: "Was zeigt 'ss -tulpn'?",
              options: [
                "Routing-Tabelle",
                "Alle offenen TCP/UDP-Ports mit Prozess-Info",
                "DNS-Einträge",
                "Systeminformationen",
              ],
              correct: 1,
              explain:
                "ss: Socket Statistics. -t=TCP, -u=UDP, -l=listening, -p=Prozess, -n=numerisch. Nachfolger von netstat.",
            },
            {
              id: "imp_lf5-lx-2_13",
              q: "Wo liegt die SSH-Konfiguration?",
              options: [
                "/etc/ssh/sshd_config (Server) und ~/.ssh/config (Client)",
                "/home/.ssh/sshd.conf – zentral für alle Benutzer",
                "/var/ssh/config – im variablen Datenbereich",
                "/usr/ssh/ssh.ini – bei den installierten Programmen",
              ],
              correct: 0,
              explain:
                "Server: /etc/ssh/sshd_config. Client-Keys: ~/.ssh/ (id_rsa, id_rsa.pub, authorized_keys, known_hosts).",
            },
            {
              id: "imp_lf5-lx-2_14",
              q: "Was macht 'journalctl -u nginx -f'?",
              options: [
                "Den aktuellen Dienststatus von nginx ausgeben",
                "Die nginx-Konfiguration auf Syntaxfehler prüfen",
                "Live-Logs des nginx-Dienstes anzeigen (Follow-Modus)",
                "Den nginx-Dienst stoppen und neu starten",
              ],
              correct: 2,
              explain:
                "journalctl: Systemd-Logviewer. -u = Unit (Dienst). -f = Follow (live). Auch: --since '1 hour ago'.",
            },
            {
              id: "imp_lf5-lx-2_15",
              q: "Was ist der Unterschied zwischen apt und dpkg?",
              options: [
                "apt löst Abhängigkeiten automatisch auf, dpkg installiert nur einzelne .deb-Pakete",
                "Kein Unterschied – beide Befehle rufen intern dieselbe Funktion mit gleichem Umfang auf",
                "apt ist lediglich der ältere Vorgänger von dpkg und wird heute nicht mehr gepflegt",
                "dpkg kann mehr: Es lädt Pakete aus Repositories und löst Abhängigkeiten auf, apt nicht",
              ],
              correct: 0,
              explain:
                "apt: High-Level (Repositories, Abhängigkeiten). dpkg: Low-Level (einzelne .deb-Dateien ohne Abhängigkeits-Auflösung).",
            },
            {
              id: "imp_lf5-lx-2_16",
              q: "Was macht ufw?",
              options: [
                "USB-Firmware-Update",
                "Dateien komprimieren",
                "Uncomplicated Firewall",
                "User-File-Watcher",
              ],
              correct: 2,
              explain:
                "Einfache Firewall-Verwaltung für iptables. ufw: Vereinfachtes Frontend für iptables/nftables. ufw allow 22/tcp, ufw deny 3306, ufw enable.",
            },
            {
              id: "imp_lf5-lx-2_17",
              q: "Wie prüft man, ob ein Dienst läuft?",
              options: ["systemctl status dienstname", "ps aux", "ping dienst", "telnet dienst"],
              correct: 0,
              explain:
                "systemctl status: Zeigt active/inactive, seit wann, PID, letzte Log-Zeilen. Umfassendste Info.",
            },
            {
              id: "imp_lf5-lx-2_18",
              q: "Was ist cron?",
              options: [
                "Ein Netzwerkprotokoll zur Zeitsynchronisation zwischen Servern",
                "Ein journalbasiertes Dateisystem für Linux-Partitionen",
                "Ein terminalbasierter Texteditor für Konfigurationsdateien",
                "Zeitbasierter Aufgabenplaner für wiederkehrende Befehle",
              ],
              correct: 3,
              explain:
                "cron: Cronjobs ausführen (z.B. tägliches Backup um 02:00). crontab -e zum Bearbeiten. Format: Min Std Tag Mon WTag Befehl.",
            },
            {
              id: "imp_lf5-lx-2_19",
              q: "Was macht 'chmod +x script.sh'?",
              options: [
                "Script verschlüsseln",
                "Script kompilieren",
                "Script löschen",
                "Ausführungsrecht (execute) für alle setzen",
              ],
              correct: 3,
              explain:
                "Script kann gestartet werden. Ohne +x: 'Permission denied'. Mit +x: ./script.sh funktioniert. Alternative: bash script.sh (braucht kein +x).",
            },
          ],
        },
      ],
    },
    {
      id: "lf5-python",
      title: "Python",
      lessons: [
        {
          id: "lf5-py-1",
          title: "Python-Grundlagen (AP1-relevant)",
          content: [
            { type: "heading", value: "Warum Python in der AP1?" },
            {
              type: "text",
              value:
                "Seit AO 2020 wird in der AP1 regelmäßig Python-Code oder Pseudocode abgefragt. Typische Aufgaben: Funktion lesen und Rückgabewerte berechnen, Fehler im Code finden, Ausgabe vorhersagen. Du musst nicht programmieren können – aber Code LESEN und VERSTEHEN.",
            },
            { type: "heading", value: "Grundlegende Syntax" },
            {
              type: "text",
              value:
                "Variablen: x = 42 (kein Typ nötig, dynamisch typisiert). Datentypen: int (42), float (3.14), str ('Hallo'), bool (True/False), list ([1,2,3]), dict ({'name': 'Max'}). Print: print('Hallo', x). Input: name = input('Dein Name: '). Kommentare: # Einzeilig oder '''Mehrzeilig'''.",
            },
            { type: "heading", value: "Kontrollstrukturen" },
            {
              type: "text",
              value:
                "If/Elif/Else: if x > 10: print('groß') elif x > 5: print('mittel') else: print('klein'). WICHTIG: Python nutzt Einrückung (Indentation) statt geschweifter Klammern! 4 Leerzeichen = ein Block. For-Schleife: for i in range(5): print(i) → gibt 0,1,2,3,4 aus. While-Schleife: while x > 0: x -= 1.",
            },
            { type: "heading", value: "Funktionen" },
            {
              type: "text",
              value:
                "Definition: def addiere(a, b): return a + b. Aufruf: ergebnis = addiere(3, 4) → ergebnis = 7. Standardwerte: def gruss(name='Welt'): return 'Hallo ' + name. Mehrere Rückgabewerte: def teile(a, b): return a // b, a % b → ganzzahl, rest = teile(17, 5) → 3, 2.",
            },
            { type: "heading", value: "Listen und Schleifen" },
            {
              type: "text",
              value:
                "Liste erstellen: zahlen = [10, 20, 30, 40]. Zugriff: zahlen[0] = 10, zahlen[-1] = 40. Länge: len(zahlen) = 4. Anhängen: zahlen.append(50). Durchlaufen: for z in zahlen: print(z). List Comprehension: quadrate = [x**2 for x in range(5)] → [0, 1, 4, 9, 16]. Slicing: zahlen[1:3] → [20, 30].",
            },
            { type: "heading", value: "String-Operationen" },
            {
              type: "text",
              value:
                "Verkettung: 'Hallo' + ' ' + 'Welt' → 'Hallo Welt'. F-String: f'Name: {name}, Alter: {alter}'. Methoden: 'hallo'.upper() → 'HALLO', 'HALLO'.lower() → 'hallo', 'a,b,c'.split(',') → ['a','b','c'], ','.join(['a','b','c']) → 'a,b,c'. Länge: len('Hallo') → 5.",
            },
            { type: "heading", value: "Dictionaries" },
            {
              type: "text",
              value:
                "Erstellen: server = {'name': 'SRV01', 'ip': '192.168.1.10', 'os': 'Linux'}. Zugriff: server['name'] → 'SRV01'. Hinzufügen: server['ram'] = '32GB'. Durchlaufen: for key, value in server.items(): print(f'{key}: {value}'). Prüfen: 'ip' in server → True.",
            },
            { type: "heading", value: "Beispiel 1: Python in der AP1 (Funktion lesen)" },
            {
              type: "text",
              value:
                "def analytics(besucher, seiten, suchmaschinen, bounces): pro_besucher = seiten / besucher; prozent_such = (suchmaschinen / besucher) * 100; non_bounce = ((besucher - bounces) / besucher) * 100; return (pro_besucher, prozent_such, non_bounce). Aufruf: analytics(12000, 33000, 5562, 7554). Ergebnis: Seitenaufrufe pro Besucher = 2,75; Suchmaschinen-Anteil = 46,35%; Non-Bounce-Rate = 37,05%.",
            },
            { type: "heading", value: "Beispiel 2: Schleife mit Bedingung" },
            {
              type: "text",
              value:
                "netzwerk = ['192.168.1.10', '192.168.1.20', '10.0.0.1', '192.168.1.30']; intern = []; for ip in netzwerk: if ip.startswith('192.168'): intern.append(ip); print(f'{len(intern)} interne IPs gefunden: {intern}'). Ausgabe: '3 interne IPs gefunden: [192.168.1.10, 192.168.1.20, 192.168.1.30]'.",
            },
            { type: "heading", value: "Beispiel 3: Dictionary für Inventar" },
            {
              type: "text",
              value:
                "inventar = {'Laptop': 45, 'Monitor': 38, 'Tastatur': 50, 'Maus': 50}; gesamt = 0; for gerät, anzahl in inventar.items(): gesamt += anzahl; if anzahl < 40: print(f'Nachbestellen: {gerät} (nur {anzahl} Stück)'). Gibt aus: 'Nachbestellen: Monitor (nur 38 Stück)'. gesamt = 183.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Funktionsausgabe berechnen (AP1-Stil)" },
            {
              type: "text",
              value:
                "Gegeben ist folgende Python-Funktion:\n\ndef analyse(werte):\n    summe = 0\n    anzahl = 0\n    for w in werte:\n        if w > 0:\n            summe += w\n            anzahl += 1\n    if anzahl == 0:\n        return 0\n    return summe / anzahl\n\nWas gibt analyse([10, -5, 20, 0, -3, 15]) zurück? Erkläre Schritt für Schritt.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nDie Funktion berechnet den Durchschnitt aller POSITIVEN Werte.\n\nDurchlauf der Liste [10, -5, 20, 0, -3, 15]:\n- w=10:  10 > 0 → summe=10, anzahl=1\n- w=-5:  -5 > 0 → NEIN, übersprungen\n- w=20:  20 > 0 → summe=30, anzahl=2\n- w=0:   0 > 0 → NEIN (0 ist nicht größer als 0!)\n- w=-3:  -3 > 0 → NEIN\n- w=15:  15 > 0 → summe=45, anzahl=3\n\nanzahl = 3 (nicht 0), also: return 45 / 3 = 15.0\n\nDie Funktion gibt 15.0 zurück (float, weil Python bei / immer float liefert).",
            },
            { type: "heading", value: "Übungsaufgabe 2: Fehler im Code finden" },
            {
              type: "text",
              value:
                "Der folgende Code soll alle geraden Zahlen von 1 bis 20 ausgeben, funktioniert aber nicht korrekt. Finde die 3 Fehler.\n\ndef gerade_zahlen()\n    zahlen = []\n    for i in range(1, 20)\n        if i % 2 = 0:\n            zahlen.append(i)\n    return zahlen\n\nprint(gerade_zahlen())",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nFehler 1: def gerade_zahlen() → Doppelpunkt fehlt: def gerade_zahlen():\nFehler 2: for i in range(1, 20) → Doppelpunkt fehlt UND range(1, 20) geht nur bis 19. Korrekt: for i in range(1, 21):\nFehler 3: if i % 2 = 0 → Einfaches = ist Zuweisung, Vergleich braucht ==. Korrekt: if i % 2 == 0:\n\nKorrigierter Code:\ndef gerade_zahlen():\n    zahlen = []\n    for i in range(1, 21):\n        if i % 2 == 0:\n            zahlen.append(i)\n    return zahlen\n\nErgebnis: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]",
            },
            { type: "heading", value: "Übungsaufgabe 3: Dictionary und Schleife schreiben" },
            {
              type: "text",
              value:
                "Schreibe eine Python-Funktion inventar_check(lager, mindestbestand), die ein Dictionary mit Artikeln und Beständen erhält sowie einen Mindestbestand. Die Funktion soll eine Liste aller Artikel zurückgeben, deren Bestand unter dem Mindestbestand liegt.\n\nBeispielaufruf: inventar_check({'Laptop': 12, 'Monitor': 3, 'Maus': 45, 'Tastatur': 7}, 10)\nErwartete Rückgabe: ['Monitor', 'Tastatur']",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\ndef inventar_check(lager, mindestbestand):\n    nachbestellen = []\n    for artikel, bestand in lager.items():\n        if bestand < mindestbestand:\n            nachbestellen.append(artikel)\n    return nachbestellen\n\n# Oder kompakt als List Comprehension:\ndef inventar_check(lager, mindestbestand):\n    return [artikel for artikel, bestand in lager.items() if bestand < mindestbestand]\n\n# Test:\nresult = inventar_check({'Laptop': 12, 'Monitor': 3, 'Maus': 45, 'Tastatur': 7}, 10)\nprint(result)  # ['Monitor', 'Tastatur']\n\nErklärung:\n- lager.items() gibt Paare (Key, Value) zurück\n- Vergleich bestand < mindestbestand filtert\n- Nur der Artikelname wird in die Liste aufgenommen",
            },
          ],
          quiz: [
            {
              id: "imp_lf5-py-1_0",
              q: "Was gibt range(5) zurück?",
              options: ["[5]", "[0,1,2,3,4,5]", "[1,2,3,4,5]", "[0,1,2,3,4]"],
              correct: 3,
              explain: "range(5) erzeugt 0,1,2,3,4 (Start bei 0, Ende exklusive 5).",
            },
            {
              id: "imp_lf5-py-1_1",
              q: "Was ist die Ausgabe von: print(10 // 3)?",
              options: ["4", "3", "3.33", "10"],
              correct: 1,
              explain:
                "// = Ganzzahldivision (Floor Division). 10 // 3 = 3 (Rest wird abgeschnitten).",
            },
            {
              id: "imp_lf5-py-1_2",
              q: "Was macht len([1,2,3])?",
              options: ["Fehler", "6", "1", "3"],
              correct: 3,
              explain: "len() gibt die Anzahl Elemente zurück. [1,2,3] hat 3 Elemente.",
            },
            {
              id: "imp_lf5-py-1_3",
              q: "Welcher Datentyp ist {'a': 1, 'b': 2}?",
              options: ["set", "list", "tuple", "dict"],
              correct: 3,
              explain: "Geschweifte Klammern mit Key:Value = Dictionary (dict).",
            },
            {
              id: "imp_lf5-py-1_4",
              q: "Was passiert bei falschem Einrücken in Python?",
              options: ["Automatische Korrektur", "Warnung", "IndentationError", "Nichts"],
              correct: 2,
              explain:
                "Das Programm läuft nicht. Python nutzt Einrückung statt {} für Blöcke. Falsche Einrückung = Syntaxfehler.",
            },
            {
              id: "imp_lf5-py-1_5",
              q: "Was gibt 'Hallo'[1] zurück?",
              options: ["'H'", "'o'", "'a'", "'l'"],
              correct: 2,
              explain:
                "Strings sind 0-indiziert: 'Hallo'[0]='H', [1]='a', [2]='l', [3]='l', [4]='o'.",
            },
            {
              id: "imp_lf5-py-1_6",
              q: "Was macht .append() bei einer Liste?",
              options: [
                "Gibt die Länge zurück",
                "Fügt ein Element am Ende hinzu",
                "Sortiert die Liste",
                "Löscht ein Element",
              ],
              correct: 1,
              explain: "liste.append(x): Fügt x am Ende der Liste hinzu.",
            },
            {
              id: "imp_lf5-py-1_7",
              q: "Was ist die Ausgabe: for i in range(3): print(i, end=' ')?",
              options: ["0 1 2 3", "3 2 1", "0 1 2", "1 2 3"],
              correct: 2,
              explain: "range(3) = 0,1,2. end=' ' verhindert Zeilenumbruch → '0 1 2 '.",
            },
            {
              id: "imp_lf5-py-1_8",
              q: "Was gibt type(42) zurück?",
              options: ["<class 'bool'>", "<class 'str'>", "<class 'float'>", "<class 'int'>"],
              correct: 3,
              explain: "42 ist eine Ganzzahl = int. 42.0 wäre float.",
            },
            {
              id: "imp_lf5-py-1_9",
              q: "Was ist der Unterschied zwischen = und ==?",
              options: [
                "= ist Zuweisung, == ist Vergleich",
                "== gibt immer True zurück",
                "= ist Vergleich, == ist Zuweisung",
                "Kein Unterschied",
              ],
              correct: 0,
              explain:
                "x = 5 (Zuweisung: x bekommt den Wert 5). x == 5 (Vergleich: ist x gleich 5? → True/False).",
            },
            {
              id: "imp_lf5-py-1_10",
              q: "Was macht split(',')?",
              options: [
                "Verbindet Strings",
                "Teilt String bei jedem Komma in eine Liste",
                "Zählt Kommas",
                "Löscht Kommas",
              ],
              correct: 1,
              explain: "'a,b,c'.split(',') → ['a', 'b', 'c']. Teilt String am Trennzeichen.",
            },
            {
              id: "imp_lf5-py-1_11",
              q: "Was ist eine List Comprehension?",
              options: [
                "Eine while-Schleife mit eingebautem Zähler",
                "Eine eingebaute Funktion: comprehension(liste)",
                "Kompakte Syntax: [ausdruck for x in liste if bedingung]",
                "Ein Fehlertyp bei falsch verschachtelten Listen",
              ],
              correct: 2,
              explain:
                "List Comprehension: [x*2 for x in range(5)] → [0, 2, 4, 6, 8]. Kompakt statt for-Schleife.",
            },
            {
              id: "imp_lf5-py-1_12",
              q: "x = [1,2,3]; x[1] = 99. Was ist x?",
              options: ["[99,2,3]", "[1,99,3]", "[1,2,99]", "Fehler"],
              correct: 1,
              explain: "Listen sind änderbar (mutable). Index 1 wird auf 99 gesetzt → [1, 99, 3].",
            },
            {
              id: "imp_lf5-py-1_13",
              q: "Was gibt 'ip' in {'ip': '1.2.3.4', 'name': 'srv'} zurück?",
              options: ["'1.2.3.4'", "False", "Fehler", "True"],
              correct: 3,
              explain: "'in' prüft, ob ein KEY im Dictionary existiert. 'ip' ist ein Key → True.",
            },
            {
              id: "imp_lf5-py-1_14",
              q: "def f(x): return x * 2. Was ist f(f(3))?",
              options: ["12", "9", "6", "18"],
              correct: 0,
              explain: "f(3) = 6. f(f(3)) = f(6) = 12.",
            },
            {
              id: "imp_lf5-py-1_15",
              q: "Was ist die Ausgabe: print(list(range(2, 8, 2)))?",
              options: ["[2,8,2]", "[2,3,4,5,6,7]", "[2,4,6,8]", "[2,4,6]"],
              correct: 3,
              explain: "range(start=2, stop=8, step=2) → 2, 4, 6 (8 ist exklusive).",
            },
            {
              id: "imp_lf5-py-1_16",
              q: "Was macht try/except in Python?",
              options: [
                "Datei-Operationen",
                "Typ-Konvertierung",
                "Schleifen-Kontrolle",
                "Fehlerbehandlung",
              ],
              correct: 3,
              explain:
                "Code im try-Block wird ausgeführt, bei Fehler springt er zu except. try: riskanter Code / except FehlerTyp: Fehlerbehandlung. Verhindert Programmabsturz.",
            },
            {
              id: "imp_lf5-py-1_17",
              q: "Was ist ein f-String?",
              options: [
                "Ein String, der ausschließlich Gleitkommazahlen (floats) aufnehmen kann",
                "Ein fehlerhafter String, den der Interpreter beim Parsen ablehnt",
                "Formatierter String mit {variablen} direkt im Text: f'Hallo {name}'",
                "Ein Platzhalter für Dateinamen beim Öffnen von Dateien",
              ],
              correct: 2,
              explain: "f-String (ab Python 3.6): f'Wert: {x}' → Variablen direkt einsetzen.",
            },
            {
              id: "imp_lf5-py-1_18",
              q: "Was gibt sorted([3,1,2]) zurück?",
              options: ["[3,1,2]", "None", "[1,2,3]", "[3,2,1]"],
              correct: 2,
              explain:
                "sorted() gibt eine neue sortierte Liste zurück (aufsteigend). Original bleibt unverändert.",
            },
            {
              id: "imp_lf5-py-1_19",
              q: "Was ist der Unterschied zwischen list und tuple?",
              options: [
                "list bietet lediglich mehr eingebaute Methoden, sonst sind beide gleich",
                "Es gibt keinen Unterschied, beide Typen sind austauschbare Synonyme",
                "list ist änderbar (mutable), tuple ist unveränderlich (immutable)",
                "tuple ist nur eine schnellere Implementierung mit identischem Verhalten",
              ],
              correct: 2,
              explain:
                "list = [1,2,3] (änderbar). tuple = (1,2,3) (unveränderlich nach Erstellung). Tuple für feste Datengruppen.",
            },
          ],
        },
      ],
    },
  ],
};
