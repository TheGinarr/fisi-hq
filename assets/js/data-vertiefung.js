"use strict";
window.LESSON_DETAIL = {
  l101: [
    {
      h: "Die Komponenten im Zusammenspiel",
      html: `<p>Das EVA-Prinzip (Eingabe – Verarbeitung – Ausgabe) ist mehr als ein Merksatz: Es ist das Raster, mit dem du jeden Rechner analysierst. Jede Komponente lässt sich einer Phase zuordnen – und jede Kaufberatung, jede Fehlersuche und jede Aufrüstung folgt diesem Raster.</p>
<table class="tbl"><tr><th>Phase</th><th>Komponenten</th><th>Typische Kennzahlen</th></tr>
<tr><td>Eingabe</td><td>Tastatur, Maus, Scanner, Netzwerkkarte (eingehend), Sensoren</td><td>Abtastrate, DPI, Schnittstelle (USB 3.2, PS/2)</td></tr>
<tr><td>Verarbeitung</td><td>CPU, RAM, Chipsatz, GPU (Berechnung)</td><td>Taktrate (GHz), Kerne/Threads, RAM-Größe und -Takt, Cache (L1–L3)</td></tr>
<tr><td>Ausgabe</td><td>Monitor, Drucker, Lautsprecher, Netzwerkkarte (ausgehend)</td><td>Auflösung, ppi, Farbtiefe, Seiten/Minute</td></tr>
<tr><td>Speicherung (EVAS)</td><td>SSD (NVMe/SATA), HDD, USB-Stick, Bandlaufwerk</td><td>IOPS, MB/s, Kapazität, TBW</td></tr></table>
<p>In der Prüfung wird das EVA-Prinzip fast immer indirekt abgefragt: „Der PC ist bei Bildbearbeitung langsam – analysieren Sie systematisch." Erwartete Antwort: Engpass je Phase prüfen (Eingabe ok? CPU ausgelastet? RAM voll → Auslagerung? Ausgabe ok?).</p>`,
    },
    {
      h: "CPU, RAM und Bus – was die Leistung wirklich bestimmt",
      html: `<p>Die CPU-Leistung hängt nicht nur vom Takt ab: <strong>Leistung ≈ Takt × Kerne × IPC</strong> (Instructions per Cycle). Ein 8-Kerner mit 3,0 GHz schlägt bei parallelisierbarer Last einen 4-Kerner mit 4,0 GHz. Für Einzelthread-Anwendungen (viele Altprogramme) zählt dagegen der Takt.</p>
<p>Beim RAM zählen drei Dinge: <strong>Größe</strong> (reicht sie nicht, lagert das System auf die SSD aus – „Swapping", spürbar langsam), <strong>Takt/Timings</strong> (DDR4-3200 = 3200 MT/s) und <strong>Kanäle</strong> (Dual Channel verdoppelt die theoretische Bandbreite – deshalb zwei gleiche Riegel statt einem großen).</p>
<pre class="code">Bandbreite Dual Channel DDR4-3200:
3200 MT/s × 64 Bit × 2 Kanäle / 8 = 51.200 MB/s ≈ 51,2 GB/s</pre>
<p>Merke für Aufgaben mit elektrischer Leistung: <strong>P = U · I</strong>. Ein Netzteil „650 W, Wirkungsgrad 92 % (80 PLUS Platinum)" nimmt bei Volllast 650/0,92 ≈ 707 W auf – die Differenz wird Wärme.</p>`,
    },
    {
      h: "Typische Prüfungsfallen",
      html: `<ul>
<li><strong>„Mehr GHz = schneller"</strong> – falsch ohne Blick auf Kerne, IPC und die Anwendung.</li>
<li><strong>RAM-Aufrüstung als Allheilmittel</strong> – hilft nur, wenn Auslagerung das Problem ist. Task-Manager/htop erst prüfen.</li>
<li><strong>SSD-Angaben verwechseln</strong>: sequenzielle MB/s (große Dateien) vs. IOPS (viele kleine Zugriffe, z. B. Datenbanken). NVMe über PCIe schlägt SATA (max. ~550 MB/s) um ein Vielfaches.</li>
<li><strong>Netzteil zu knapp dimensioniert</strong>: Komponenten-Verbrauch addieren + ~20 % Reserve; Wirkungsgrad bezieht sich auf die Abgabe-, nicht die Aufnahmeleistung.</li></ul>`,
    },
    {
      h: "Werkstatt: Kundenkonfiguration begründen",
      html: `<p><strong>Aufgabe:</strong> Ein Architekturbüro braucht 2 Arbeitsplätze für CAD (große Modelle, GPU-Rendering) und 5 für Büro/E-Mail. Budgetgrenze beachten: Wo investierst du, wo sparst du? Nenne je Arbeitsplatztyp CPU-Profil, RAM, Grafik, Massenspeicher und begründe.</p>
<details><summary>Lösungsvorschlag anzeigen</summary><p><strong>CAD:</strong> CPU mit hohem Takt UND 8+ Kernen (Rendering parallelisiert), 64 GB RAM (Modelle im Speicher), Workstation-GPU mit zertifizierten Treibern, NVMe-SSD 2 TB (Projektdateien, IOPS). <strong>Büro:</strong> Mittelklasse-CPU, 16 GB RAM, integrierte Grafik reicht, NVMe 512 GB. <strong>Begründung nach EVA:</strong> Der Engpass sitzt bei CAD in der Verarbeitungsphase (CPU/GPU/RAM) – dort investieren; bei Büroarbeit ist keine Phase ausgelastet, Überdimensionierung wäre verschwendetes Budget. Dazu: identische Modelle je Gruppe (Wartung, Ersatzteile), 3 Jahre Vor-Ort-Garantie einkalkulieren.</p></details>`,
    },
  ],
  l102: [
    {
      h: "Umrechnen ohne Taschenrechner – die Verfahren im Detail",
      html: `<p><strong>Dezimal → Binär</strong> (fortlaufende Division durch 2, Reste von unten nach oben lesen):</p>
<pre class="code">214 : 2 = 107 Rest 0
107 : 2 =  53 Rest 1
 53 : 2 =  26 Rest 1
 26 : 2 =  13 Rest 0
 13 : 2 =   6 Rest 1
  6 : 2 =   3 Rest 0
  3 : 2 =   1 Rest 1
  1 : 2 =   0 Rest 1   → von unten: 1101 0110</pre>
<p><strong>Binär → Dezimal</strong> (Stellenwerte der Einsen addieren): 1101 0110 → 128+64+16+4+2 = 214. Schreibe dir die Achterreihe hin: 128 · 64 · 32 · 16 · 8 · 4 · 2 · 1 – sie ist die halbe Miete jeder Subnetting-Aufgabe.</p>
<p><strong>Binär ↔ Hex</strong>: immer Vierergruppen. 1101 0110 → 1101=D, 0110=6 → D6. Rückwärts genauso: jede Hex-Ziffer wird zu genau 4 Bit. Deshalb ist Hex nur eine Kurzschreibweise, keine eigene Rechenwelt.</p>`,
    },
    {
      h: "Wo dir die Zahlensysteme in der Praxis begegnen",
      html: `<table class="tbl"><tr><th>Einsatz</th><th>System</th><th>Beispiel</th></tr>
<tr><td>Subnetzmasken</td><td>binär</td><td>/26 = 26 Einsen = 255.255.255.192</td></tr>
<tr><td>MAC-Adressen</td><td>hex</td><td>3C:97:0E:4A:12:F0 (48 Bit = 12 Hex-Ziffern)</td></tr>
<tr><td>IPv6-Adressen</td><td>hex</td><td>2001:db8::1 (128 Bit in 8 Blöcken à 16 Bit)</td></tr>
<tr><td>Dateirechte Linux</td><td>oktal</td><td>chmod 754 = rwx r-x r-- (4+2+1, 4+1, 4)</td></tr>
<tr><td>Farbcodes</td><td>hex</td><td>#ff8800 = R 255, G 136, B 0</td></tr>
<tr><td>Speichergrößen</td><td>binär vs. dezimal</td><td>1 GiB = 1024³ Byte, 1 GB = 1000³ Byte – daher „fehlender" Platz</td></tr></table>
<p>Die GiB/GB-Falle ist ein Prüfungsklassiker: Eine „500-GB-Festplatte" zeigt im Betriebssystem nur ~465 GiB, weil Hersteller dezimal, Windows aber binär rechnet: 500 · 10⁹ / 1024³ ≈ 465,7.</p>`,
    },
    {
      h: "Typische Prüfungsfallen",
      html: `<ul>
<li><strong>Reste falsch herum gelesen</strong>: Bei der Division durch 2 wird von unten nach oben gelesen – der letzte Rest ist das höchstwertige Bit.</li>
<li><strong>Vierergruppen von der falschen Seite</strong>: Bei Binär→Hex von rechts gruppieren und links mit Nullen auffüllen.</li>
<li><strong>Oktal vs. Hex verwechselt</strong>: chmod nutzt oktal (3 Bit je Ziffer), MAC/IPv6 nutzen hex (4 Bit je Ziffer).</li>
<li><strong>KiB/KB gemischt</strong>: In Rechenaufgaben immer angeben, ob mit 1000 oder 1024 gerechnet wird – und konsequent dabei bleiben.</li></ul>`,
    },
    {
      h: "Werkstatt: Zweierkomplement & Rechentraining",
      html: `<p>Negative Zahlen speichert der Rechner im <strong>Zweierkomplement</strong>: alle Bits invertieren, dann +1. Beispiel −42 in 8 Bit: 42 = 0010 1010 → invertiert 1101 0101 → +1 = <strong>1101 0110</strong>. Das höchste Bit zeigt das Vorzeichen; Wertebereich bei 8 Bit: −128 bis +127. Deshalb kippt ein überlaufender Zähler von 127 auf −128 – ein klassischer Programmfehler.</p>
<p><strong>Aufgaben:</strong> (a) 173 → binär, (b) 1010 1111 → dezimal und hex, (c) −100 im 8-Bit-Zweierkomplement, (d) Wie viele Bit braucht 500?</p>
<details><summary>Lösungen anzeigen</summary><pre class="code">(a) 173 = 128+32+8+4+1 = 1010 1101
(b) 1010 1111 = 128+32+8+4+2+1 = 175 = AF
(c) 100 = 0110 0100 → invertiert 1001 1011 → +1 = 1001 1100
(d) 2⁸=256 &lt; 500 ≤ 2⁹=512 → 9 Bit</pre></details>`,
    },
  ],
  l103: [
    {
      h: "Die 7 Schichten mit Protokollen und Geräten",
      html: `<table class="tbl"><tr><th>#</th><th>OSI-Schicht</th><th>Aufgabe</th><th>Protokolle/Beispiele</th><th>Geräte</th></tr>
<tr><td>7</td><td>Anwendung</td><td>Dienste für Programme</td><td>HTTP(S), SMTP, IMAP, DNS, DHCP</td><td>Proxy, ALG</td></tr>
<tr><td>6</td><td>Darstellung</td><td>Formate, Zeichensätze, Verschlüsselung</td><td>TLS (Einordnung strittig), MIME, UTF-8</td><td>–</td></tr>
<tr><td>5</td><td>Sitzung</td><td>Auf-/Abbau von Sitzungen</td><td>NetBIOS, RPC</td><td>–</td></tr>
<tr><td>4</td><td>Transport</td><td>Ende-zu-Ende, Ports, Segmentierung</td><td>TCP (zuverlässig), UDP (schnell)</td><td>Firewall (L4)</td></tr>
<tr><td>3</td><td>Vermittlung</td><td>Logische Adressen, Routing</td><td>IP, ICMP, IPsec</td><td>Router, L3-Switch</td></tr>
<tr><td>2</td><td>Sicherung</td><td>MAC-Adressen, Rahmen, Fehlererkennung</td><td>Ethernet, VLAN (802.1Q), ARP (L2/L3-Grenze)</td><td>Switch, Bridge, WLAN-AP</td></tr>
<tr><td>1</td><td>Bitübertragung</td><td>Bits auf das Medium</td><td>Kupfer, Glasfaser, Funk</td><td>Hub, Repeater, Medienkonverter</td></tr></table>
<p>Merksatz von unten nach oben: „<em>Please Do Not Throw Salami Pizza Away</em>" – oder deutsch von oben: „<em>Alle deutschen Studenten trinken verschiedene Sorten Bier</em>".</p>`,
    },
    {
      h: "OSI vs. TCP/IP und die Kapselung",
      html: `<p>Das TCP/IP-Modell fasst zusammen: Anwendung (OSI 5–7), Transport (4), Internet (3), Netzzugang (1–2). In der Praxis wird TCP/IP gelebt, OSI dient als Analysesprache – „ein Layer-2-Problem" versteht jeder Admin.</p>
<p><strong>Kapselung</strong>: Daten wandern von oben nach unten und bekommen auf jeder Schicht einen Header dazu: Daten → TCP-<em>Segment</em> → IP-<em>Paket</em> → Ethernet-<em>Frame</em> (+ Trailer mit Prüfsumme) → Bits. Beim Empfänger läuft es rückwärts. Die Begriffe Segment/Paket/Frame den Schichten zuordnen zu können ist ein Standard-Prüfungspunkt.</p>
<pre class="code">| Ethernet-Header | IP-Header | TCP-Header | Nutzdaten | FCS |
  Schicht 2         Schicht 3   Schicht 4     ab 5        L2</pre>`,
    },
    {
      h: "Fehlersuche entlang der Schichten",
      html: `<p>Systematische Diagnose läuft von unten nach oben – jede Stufe schließt eine Schicht aus:</p>
<ol>
<li><strong>L1</strong>: Link-LED? Kabel gesteckt? <code>ethtool eth0</code> / Gerätemanager.</li>
<li><strong>L2</strong>: Richtiges VLAN? MAC-Tabelle des Switches? <code>arp -a</code> zeigt, ob ARP auflöst.</li>
<li><strong>L3</strong>: <code>ping 127.0.0.1</code> (Stack) → eigene IP → Gateway → externe IP. Bricht es beim Gateway ab: lokales Problem; bricht es bei externer IP ab: Routing/Firewall.</li>
<li><strong>L4–L7</strong>: Externe IP pingbar, aber Webseite lädt nicht → Port/Dienst prüfen (<code>telnet host 443</code>, <code>ss -tln</code>), dann DNS (<code>nslookup</code>) und die Anwendung selbst.</li></ol>
<p>Klassiker: „Ping auf 8.8.8.8 klappt, google.de nicht" → Schicht ausgrenzen: IP-Konnektivität da, Namensauflösung defekt → DNS-Server-Eintrag prüfen.</p>`,
    },
    {
      h: "Werkstatt: Ports lesen wie ein Admin",
      html: `<p>Zur Schicht 4 gehören die Well-Known-Ports – ohne sie kannst du weder Firewall-Regeln noch <code>ss/netstat</code>-Ausgaben lesen:</p>
<table class="tbl"><tr><th>Port</th><th>Dienst</th><th>Port</th><th>Dienst</th></tr>
<tr><td>20/21</td><td>FTP (Daten/Steuerung)</td><td>80 / 443</td><td>HTTP / HTTPS</td></tr>
<tr><td>22</td><td>SSH, SFTP</td><td>110 / 995</td><td>POP3 / POP3S</td></tr>
<tr><td>25 / 587</td><td>SMTP (Server / Einlieferung)</td><td>143 / 993</td><td>IMAP / IMAPS</td></tr>
<tr><td>53</td><td>DNS (UDP+TCP)</td><td>389 / 636</td><td>LDAP / LDAPS</td></tr>
<tr><td>67/68</td><td>DHCP</td><td>3389</td><td>RDP</td></tr></table>
<p><strong>Aufgabe:</strong> <code>ss -tln</code> zeigt LISTEN auf 0.0.0.0:3389 eines Linux-Servers. Bewerte das.</p>
<details><summary>Lösung anzeigen</summary><p>3389 ist RDP – auf einem Linux-Server unüblich (xrdp möglich, aber begründungspflichtig). „0.0.0.0" heißt: lauscht auf ALLEN Interfaces, also auch Richtung Internet, falls keine Firewall davor ist. Reaktion: Dienst identifizieren (<code>ss -tlnp</code>), Notwendigkeit klären, sonst deaktivieren; mindestens auf das Management-Netz einschränken.</p></details>`,
    },
  ],
  l104: [
    {
      h: "Aufbau einer IPv4-Adresse und die Sonderadressen",
      html: `<p>Eine IPv4-Adresse hat 32 Bit in 4 Oktetten. Die Subnetzmaske trennt Netz- und Hostanteil: Wo die Maske 1 ist, steht Netz; wo 0 ist, steht Host. Netzadresse (alle Hostbits 0) und Broadcast (alle Hostbits 1) sind nie an Hosts vergebbar – deshalb: <strong>nutzbare Hosts = 2ⁿ − 2</strong>.</p>
<table class="tbl"><tr><th>Bereich</th><th>Zweck</th></tr>
<tr><td>10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16</td><td>Privat (RFC 1918) – nicht im Internet geroutet, NAT nötig</td></tr>
<tr><td>127.0.0.0/8</td><td>Loopback (localhost)</td></tr>
<tr><td>169.254.0.0/16</td><td>APIPA/Link-Local – „DHCP nicht erreicht!"-Warnsignal</td></tr>
<tr><td>100.64.0.0/10</td><td>Carrier-Grade NAT (Provider-intern)</td></tr>
<tr><td>224.0.0.0/4</td><td>Multicast</td></tr></table>
<p>Eine 169.254.x.x auf einem Client ist in Prüfungsszenarien fast immer der Hinweis: DHCP-Server nicht erreichbar (Dienst, VLAN, Kabel oder DHCP-Relay prüfen).</p>`,
    },
    {
      h: "Erste Subnetz-Rechnungen komplett durchgerechnet",
      html: `<p><strong>Aufgabe:</strong> 192.168.10.77/26 – Netz, Broadcast, Hostbereich?</p>
<pre class="code">/26 → Maske 255.255.255.192 → Blockgröße im 4. Oktett: 256−192 = 64
Blöcke: 0–63, 64–127, 128–191, 192–255
77 liegt im Block 64–127
Netzadresse:  192.168.10.64
Broadcast:    192.168.10.127
Hosts:        192.168.10.65 – 192.168.10.126  (62 nutzbar = 2⁶−2)</pre>
<p>Die <strong>Blockgrößen-Methode</strong> (256 minus letztes Maskenoktett) ist der schnellste Weg – kein Binärrechnen nötig, solange du die Achterreihe kennst. Gegenprobe im Netztrainer: Training → Netz-Trainer.</p>`,
    },
    {
      h: "Typische Prüfungsfallen",
      html: `<ul>
<li><strong>−2 vergessen</strong>: 2ⁿ Adressen, aber 2ⁿ−2 Hosts (außer /31 bei Punkt-zu-Punkt und /32 als Hostroute – Spezialfälle).</li>
<li><strong>Gateway außerhalb des Subnetzes</strong>: Das Standardgateway MUSS im gleichen Subnetz liegen wie der Host.</li>
<li><strong>Broadcast als Host vergeben</strong>: .63, .127, .191 sind bei /26 Broadcasts der jeweiligen Blöcke – beliebte Fangfrage.</li>
<li><strong>Private Adressen „im Internet"</strong>: Ein Paket von 192.168.x.x kommt ohne NAT nie zurück.</li></ul>`,
    },
    {
      h: "Werkstatt: Wie entscheidet der Host – lokal oder Gateway?",
      html: `<p>Vor jedem Paket rechnet der Host: <strong>eigene IP UND Maske</strong> sowie <strong>Ziel-IP UND Maske</strong> – sind beide Ergebnisse gleich, liegt das Ziel im eigenen Netz (direkt per ARP/MAC), sonst geht das Paket ans Gateway.</p>
<pre class="code">Host: 192.168.10.20/26        Ziel A: 192.168.10.40   Ziel B: 192.168.10.70
20  UND /26 → Block 0–63  → Netz .0
40  UND /26 → Block 0–63  → Netz .0   → GLEICH  → direkt (ARP)
70  UND /26 → Block 64–127 → Netz .64 → ANDERS → über Gateway</pre>
<p><strong>Aufgabe:</strong> Host 172.16.5.200/22, Ziel 172.16.7.10 – lokal oder Gateway?</p>
<details><summary>Lösung anzeigen</summary><p>/22 = Blockgröße 4 im 3. Oktett → Blöcke 4–7: 172.16.4.0/22 umfasst 172.16.4.0–172.16.7.255. Beide liegen im selben Block → <strong>lokal, direkt per ARP</strong>. Genau solche „über-Oktettgrenzen"-Fälle sind AP-Klassiker: Die Blockgrenze im DRITTEN Oktett suchen, nicht im vierten.</p></details>`,
    },
  ],
  l201: [
    {
      h: "VLSM: Subnetze passgenau zuschneiden",
      html: `<p>Beim <strong>VLSM</strong> (Variable Length Subnet Masking) bekommt jede Abteilung genau die Netzgröße, die sie braucht – immer mit der größten Anforderung beginnen:</p>
<pre class="code">Vorgabe: 192.168.20.0/24 für 4 Bereiche:
  Produktion 100 Hosts → 2⁷−2=126 → /25 → 192.168.20.0–127
  Verwaltung  50 Hosts → 2⁶−2=62  → /26 → 192.168.20.128–191
  Technik     20 Hosts → 2⁵−2=30  → /27 → 192.168.20.192–223
  Server      10 Hosts → 2⁴−2=14  → /28 → 192.168.20.224–239
  Rest frei: 192.168.20.240–255</pre>
<p>Der häufigste Fehler ist die falsche Reihenfolge: Wer klein anfängt, „verbaut" sich die Blockgrenzen – Subnetze müssen an Vielfachen ihrer eigenen Größe beginnen.</p>`,
    },
    {
      h: "Die Rechenrezepte auf einen Blick",
      html: `<table class="tbl"><tr><th>Gesucht</th><th>Rezept</th><th>Beispiel /27</th></tr>
<tr><td>Maske aus Präfix</td><td>Achterreihe von links füllen</td><td>/27 = 255.255.255.224</td></tr>
<tr><td>Blockgröße</td><td>256 − Maskenoktett</td><td>256−224 = 32</td></tr>
<tr><td>Anzahl Subnetze</td><td>2^(geliehene Bits)</td><td>/24→/27: 2³ = 8</td></tr>
<tr><td>Hosts je Subnetz</td><td>2^(Hostbits) − 2</td><td>2⁵−2 = 30</td></tr>
<tr><td>Netzadresse</td><td>abrunden auf Blockgrenze</td><td>.77 → .64</td></tr>
<tr><td>Broadcast</td><td>nächste Blockgrenze − 1</td><td>.64+32−1 = .95</td></tr></table>
<p>Damit lassen sich alle vier Standard-Fragetypen der Prüfung lösen. Zeitziel: unter 90 Sekunden pro Aufgabe – der Weg dahin ist der Endlos-Drill im Netz-Trainer.</p>`,
    },
    {
      h: "Supernetting und Wo-liegt-der-Fehler-Aufgaben",
      html: `<p><strong>Supernetting/Route-Aggregation</strong> ist Subnetting rückwärts: 192.168.0.0/24 bis 192.168.3.0/24 lassen sich zu 192.168.0.0/22 zusammenfassen (4 Netze = 2 Bit). Router-Tabellen bleiben klein.</p>
<p>Beliebter Aufgabentyp: „Zwei PCs können sich nicht erreichen – finden Sie den Fehler." Checkliste: (1) Liegen beide IPs im selben Subnetz (mit DERSELBEN Maske gerechnet)? (2) Ist das Gateway im Subnetz des jeweiligen Hosts? (3) Ist eine der Adressen Netz- oder Broadcastadresse? In 9 von 10 Aufgaben steckt der Fehler in Punkt 1: gleiche Maske, aber unterschiedliche Blöcke – z. B. 192.168.1.60/26 (Block 0–63) und 192.168.1.70/26 (Block 64–127).</p>`,
    },
    {
      h: "Werkstatt: komplette VLSM-Klausuraufgabe",
      html: `<p><strong>Aufgabe (AP2-Stil):</strong> Du bekommst 10.20.30.0/24. Benötigt: Fertigung 60 Hosts, Büro 28, WLAN-Gäste 12, Punkt-zu-Punkt-Strecke zum Router 2. Vergib Subnetze mit Netz-/Broadcastadresse und erstem/letztem Host.</p>
<details><summary>Lösungsweg anzeigen</summary><pre class="code">Sortieren: 60 → /26 (62) · 28 → /27 (30) · 12 → /28 (14) · 2 → /30 (2)
Fertigung /26: 10.20.30.0   – .63    Hosts .1–.62
Büro      /27: 10.20.30.64  – .95    Hosts .65–.94
Gäste     /28: 10.20.30.96  – .111   Hosts .97–.110
P2P       /30: 10.20.30.112 – .115   Hosts .113–.114
frei: 10.20.30.116 – 10.20.30.255</pre><p>Prüfpunkte der Korrektoren: richtige Reihenfolge (groß → klein), Blockgrenzen als Vielfache der Blockgröße, „−2" bei den Hosts, und dass die P2P-Strecke ein /30 (bzw. modern /31) bekommt statt Verschwendung.</p></details>`,
    },
  ],
  l202: [
    {
      h: "DHCP im Detail: DORA, Lease und Relay",
      html: `<p>Der Ablauf ist immer <strong>DORA</strong>: <em>Discover</em> (Client-Broadcast), <em>Offer</em> (Server bietet IP), <em>Request</em> (Client wählt), <em>Acknowledge</em> (Server bestätigt). Alles vor der Adresszuteilung läuft als Broadcast, deshalb funktioniert DHCP zunächst nur im eigenen Subnetz – über Subnetzgrenzen hilft ein <strong>DHCP-Relay</strong> (IP-Helper) auf dem Router, der die Broadcasts als Unicast an den zentralen Server weiterreicht.</p>
<p>Die <strong>Lease-Zeit</strong> steuert das Verhalten: Nach 50 % fragt der Client per Unicast eine Verlängerung an (Renew), nach 87,5 % per Broadcast (Rebind). Kurze Leases (z. B. 1 h) für Gäste-WLANs mit hoher Fluktuation, lange (8 Tage) für stabile Büronetze. Feste Geräte wie Drucker bekommen <strong>Reservierungen</strong> (MAC → immer gleiche IP) statt statischer Konfiguration – zentral verwaltbar.</p>
<p>Wichtige Optionen: 3 = Gateway, 6 = DNS-Server, 15 = Domain, 66/67 = PXE-Boot.</p>`,
    },
    {
      h: "DNS im Detail: Auflösung, Record-Typen, Fehlerbilder",
      html: `<p>Eine Auflösung von www.beispiel.de läuft: Client-Cache → hosts-Datei → rekursiver Resolver (z. B. Firmen-DNS) → Root-Server (verweist auf .de) → TLD-Server (verweist auf beispiel.de) → autoritativer Server (liefert die IP). Der Resolver cacht das Ergebnis für die <strong>TTL</strong>.</p>
<table class="tbl"><tr><th>Record</th><th>Bedeutung</th><th>Beispiel</th></tr>
<tr><td>A / AAAA</td><td>Name → IPv4 / IPv6</td><td>www → 203.0.113.10</td></tr>
<tr><td>CNAME</td><td>Alias auf anderen Namen</td><td>shop → www</td></tr>
<tr><td>MX</td><td>Mailserver (mit Priorität)</td><td>10 mail.beispiel.de</td></tr>
<tr><td>PTR</td><td>IP → Name (Reverse)</td><td>für Mail-Reputation wichtig</td></tr>
<tr><td>TXT</td><td>Freitext: SPF, DKIM, Validierungen</td><td>v=spf1 mx -all</td></tr>
<tr><td>SRV</td><td>Dienst-Standort</td><td>_ldap._tcp → dc1:389 (AD!)</td></tr></table>
<p>Diagnose: <code>nslookup name server</code> bzw. <code>dig @server name typ</code>. „8.8.8.8 pingbar, Namen nicht auflösbar" → DNS. „Interne Namen ja, externe nein" → Weiterleitung des internen DNS prüfen. AD-Anmeldeprobleme sind oft SRV-Record-Probleme.</p>`,
    },
    {
      h: "Typische Prüfungsfallen",
      html: `<ul>
<li><strong>DHCP über VLAN-Grenzen</strong> „funktioniert einfach" – nein, ohne Relay/IP-Helper bleibt der Discover im Subnetz.</li>
<li><strong>Zwei DHCP-Server im selben Netz</strong> ohne Abstimmung → doppelte/falsche Adressen („Rogue DHCP", auch beliebtes Angriffs-Szenario).</li>
<li><strong>CNAME neben anderen Records</strong> am selben Namen ist unzulässig – klassische Konfigurationsfrage.</li>
<li><strong>TTL vergessen</strong>: Nach einer IP-Umstellung antworten Clients noch stundenlang mit der alten Adresse aus dem Cache.</li></ul>`,
    },
    {
      h: "Werkstatt: Fehlerbilder Diagnose-Tabelle",
      html: `<table class="tbl"><tr><th>Symptom</th><th>Verdacht</th><th>Prüfbefehl</th></tr>
<tr><td>Client hat 169.254.x.x</td><td>DHCP nicht erreichbar (Dienst, VLAN, Relay)</td><td><code>ipconfig /renew</code>, Scope prüfen</td></tr>
<tr><td>IP da, „Zeitüberschreitung" zum Gateway</td><td>falsches Gateway, VLAN, Firewall</td><td><code>ping</code> Gateway, <code>arp -a</code></td></tr>
<tr><td>8.8.8.8 pingbar, Namen nicht</td><td>DNS-Server falsch/ausgefallen</td><td><code>nslookup heise.de 8.8.8.8</code></td></tr>
<tr><td>interne Namen ok, externe nicht</td><td>Weiterleitung des internen DNS</td><td>Forwarder am DNS prüfen</td></tr>
<tr><td>Anmeldung an der Domäne scheitert</td><td>SRV-Records / falscher DNS am Client</td><td><code>nslookup -type=srv _ldap._tcp.domäne</code></td></tr>
<tr><td>manche Clients doppelte IPs</td><td>zweiter (Rogue-)DHCP im Netz</td><td><code>ipconfig /all</code>: Server-Adresse vergleichen</td></tr></table>
<p><strong>Aufgabe:</strong> Nach einem Switch-Tausch bekommen nur die Clients einer Etage keine IP mehr. Server läuft, andere Etagen ok. Zwei wahrscheinlichste Ursachen?</p>
<details><summary>Lösung anzeigen</summary><p>(1) Am neuen Switch fehlt das richtige VLAN bzw. der Trunk zur Etage (Broadcasts erreichen den Server nicht). (2) Der IP-Helper/DHCP-Relay-Eintrag für dieses Etagen-Subnetz fehlt auf dem neuen Gerät. Beides prüft man vor dem Neustarten von Diensten – der Server ist es nachweislich nicht, da andere Etagen versorgt werden.</p></details>`,
    },
  ],
  l203: [
    {
      h: "Wie ein Switch wirklich arbeitet",
      html: `<p>Ein Switch lernt MAC-Adressen aus den <em>Quell</em>-Feldern eingehender Frames und baut daraus seine MAC-Tabelle (CAM). Für unbekannte Ziele flutet er den Frame an alle Ports (außer dem Eingang). Broadcasts fluten immer – deshalb begrenzen VLANs die <strong>Broadcast-Domäne</strong>. Jeder Switchport ist dagegen eine eigene <strong>Kollisionsdomäne</strong> (Vollduplex: Kollisionen praktisch abgeschafft).</p>
<p><strong>VLAN-Praxis</strong>: Access-Ports gehören genau einem VLAN (Endgeräte), Trunk-Ports transportieren mehrere VLANs zwischen Switches – jedes Frame bekommt dabei einen 802.1Q-Tag (4 Byte, enthält die VLAN-ID 1–4094). Das native VLAN läuft untagged; unterschiedliche native VLANs an beiden Trunk-Enden sind eine klassische Fehlkonfiguration.</p>
<pre class="code">Switch(config)# vlan 20
Switch(config-vlan)# name Verwaltung
Switch(config)# interface fa0/5
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 20</pre>`,
    },
    {
      h: "Routing zwischen VLANs und STP",
      html: `<p>VLANs trennen auf Schicht 2 – damit sie kommunizieren, braucht es Schicht 3: klassisch „Router on a Stick" (ein Trunk zum Router, Subinterfaces je VLAN) oder heute meist ein <strong>Layer-3-Switch</strong> mit SVIs (interface vlan 20 + IP). Jedes VLAN bekommt ein eigenes Subnetz; die SVI-Adresse ist das Gateway der Clients.</p>
<p><strong>Spanning Tree (802.1D/w)</strong> verhindert Schleifen in redundanten L2-Topologien: Die Switches wählen eine Root-Bridge (kleinste Priorität, dann kleinste MAC) und blockieren überzählige Pfade. Ohne STP führt eine Schleife zum <em>Broadcast-Sturm</em>, der das Netz in Sekunden lahmlegt – Prüfungsklassiker: „Nach dem Patchen eines zweiten Uplinks bricht das Netz zusammen. Warum?"</p>`,
    },
    {
      h: "Typische Prüfungsfallen",
      html: `<ul>
<li><strong>Kollisions- vs. Broadcast-Domäne</strong>: Switchport = eigene Kollisionsdomäne; VLAN = eigene Broadcast-Domäne; Router trennt beide.</li>
<li><strong>Trunk vs. Access verwechselt</strong>: Endgerät am Trunk-Port „sieht" getaggte Frames und versteht sie nicht.</li>
<li><strong>Gleiche VLAN-ID ≠ gleiches Netz</strong>: Ohne durchgehenden Trunk sind zwei „VLAN 20" auf getrennten Switches zwei getrennte Netze.</li>
<li><strong>ARP im falschen VLAN gesucht</strong>: Erreichbarkeitsprobleme zwischen VLANs sind meist Routing-/Gateway-Fragen, nicht Switch-Defekte.</li></ul>`,
    },
    {
      h: "Werkstatt: Root-Bridge-Wahl durchrechnen + Port-Security",
      html: `<p><strong>STP-Wahl:</strong> Es gewinnt die kleinste Bridge-ID = Priorität (Standard 32768) + MAC. Aufgabe: SW1 (32768, 00:AA:…), SW2 (28672, 00:FF:…), SW3 (32768, 00:0B:…). Wer wird Root?</p>
<details><summary>Lösung anzeigen</summary><p><strong>SW2</strong> – die Priorität 28672 schlägt alles, die MAC wird erst bei Gleichstand verglichen (dann hätte SW3 wegen 00:0B &lt; 00:AA gewonnen). Praxisfolge: Die Root-Bridge gehört bewusst konfiguriert ins Zentrum (Core), sonst „gewinnt" zufällig der älteste Switch im Lager.</p></details>
<p><strong>Port-Security</strong> begrenzt, welche/wie viele MAC-Adressen an einem Access-Port erlaubt sind – gegen fremde Geräte und MAC-Flooding:</p>
<pre class="code">Switch(config-if)# switchport port-security
Switch(config-if)# switchport port-security maximum 2
Switch(config-if)# switchport port-security violation restrict</pre>
<p>Ergänzend in Prüfungsantworten nennenswert: unbenutzte Ports shutdown + eigenes „Parkplatz-VLAN", kein VLAN 1 für Produktivverkehr, BPDU-Guard an Endgeräte-Ports.</p>`,
    },
  ],
  l204: [
    {
      h: "RAID-Level durchgerechnet",
      html: `<table class="tbl"><tr><th>Level</th><th>Prinzip</th><th>Mindest-Platten</th><th>Nettokapazität</th><th>verkraftet Ausfälle</th></tr>
<tr><td>RAID 0</td><td>Striping</td><td>2</td><td>n · Platte</td><td>0 – nur Tempo!</td></tr>
<tr><td>RAID 1</td><td>Spiegelung</td><td>2</td><td>1 · Platte</td><td>n−1</td></tr>
<tr><td>RAID 5</td><td>Striping + 1 Parität</td><td>3</td><td>(n−1) · Platte</td><td>1</td></tr>
<tr><td>RAID 6</td><td>Striping + 2 Paritäten</td><td>4</td><td>(n−2) · Platte</td><td>2</td></tr>
<tr><td>RAID 10</td><td>Spiegel-Paare gestript</td><td>4</td><td>n/2 · Platte</td><td>1 je Paar</td></tr></table>
<pre class="code">Beispiel: 6 × 4 TB
RAID 5:  (6−1)·4 = 20 TB   RAID 6: (6−2)·4 = 16 TB   RAID 10: 12 TB</pre>
<p>Bei großen Platten (≥ 8 TB) gilt RAID 6 als Pflicht: Während des stunden- bis tagelangen Rebuilds nach einem Ausfall darf eine zweite Platte sterben. Probier die Szenarien im IT-Labor (RAID-Simulator) durch.</p>`,
    },
    {
      h: "Backup-Strategien: 3-2-1, Generationen, Wiederherstellung",
      html: `<p><strong>RAID ist kein Backup</strong> – es schützt vor Plattenausfall, nicht vor Löschen, Verschlüsselungstrojanern oder Brand. Der Standard ist die <strong>3-2-1-Regel</strong>: 3 Kopien, 2 verschiedene Medientypen, 1 Kopie außer Haus (bzw. offline/immutable gegen Ransomware).</p>
<table class="tbl"><tr><th>Sicherungsart</th><th>sichert</th><th>Speicherbedarf</th><th>Restore braucht</th></tr>
<tr><td>Vollsicherung</td><td>alles</td><td>hoch</td><td>1 Satz</td></tr>
<tr><td>Differenziell</td><td>alles seit letzter VOLLsicherung</td><td>wachsend</td><td>Voll + letzte Diff.</td></tr>
<tr><td>Inkrementell</td><td>alles seit letzter Sicherung (egal welcher)</td><td>minimal</td><td>Voll + ALLE Inkremente</td></tr></table>
<p>Rechenklassiker: Mo–Fr inkrementell, So Vollsicherung, Ausfall Donnerstag → Restore = Voll (So) + Mo + Di + Mi. Differenziell wäre: Voll (So) + Mi. Dazu gehören <strong>RPO</strong> (wie viel Datenverlust ist tolerierbar → Sicherungsintervall) und <strong>RTO</strong> (wie schnell muss es wieder laufen → Restore-Verfahren).</p>`,
    },
    {
      h: "Typische Prüfungsfallen",
      html: `<ul>
<li><strong>„RAID 5 verkraftet zwei Ausfälle"</strong> – nein, genau einen; zwei verkraftet RAID 6.</li>
<li><strong>Inkrementell und differenziell vertauscht</strong> – der Restore-Weg ist das Unterscheidungsmerkmal.</li>
<li><strong>Hotspare vergessen</strong>: verkürzt die Zeit bis zum Rebuild, ersetzt aber keine höhere Parität.</li>
<li><strong>Backup nie getestet</strong>: Ein Backup ohne erfolgreichen Probe-Restore ist in der Projektarbeit ein Konzeptfehler.</li></ul>`,
    },
    {
      h: "Werkstatt: Backup-Kalender und Rebuild-Risiko",
      html: `<p><strong>GVS-Rotation (Großvater-Vater-Sohn):</strong> täglich inkrementell (Sohn, Mo–Fr), wöchentlich voll (Vater, 4–5 Sätze), monatlich voll ausgelagert (Großvater, 12 Sätze) – ergibt lange Aufbewahrung mit wenigen Medien. Revisionssichere Monatsstände + kurzfristige Wiederherstellung sind abgedeckt.</p>
<p><strong>Aufgabe:</strong> Vollsicherung So 22:00 (400 GB), inkrementell Mo–Fr 22:00 (je ~30 GB). Crash Do 14:00. (a) Welche Sätze brauchst du? (b) Wie viele Arbeitsstunden Datenverlust (RPO)? (c) Was ändert differenziell am Restore?</p>
<details><summary>Lösung anzeigen</summary><p>(a) Voll (So) + Inkremente Mo, Di, Mi – vier Sätze, in dieser Reihenfolge. (b) Letzte Sicherung Mi 22:00 → Verlust Do 08:00–14:00 = <strong>6 Arbeitsstunden</strong> (RPO faktisch 16 h Kalenderzeit). (c) Differenziell: Voll (So) + NUR Mi – zwei Sätze, schnellerer und robusterer Restore, dafür wachsende Sicherungsfenster ab Wochenmitte.</p></details>`,
    },
  ],
  l205: [
    {
      h: "Die drei Bereiche der strukturierten Verkabelung",
      html: `<p>Nach EN 50173 gliedert sich die Gebäudeverkabelung in <strong>Primärbereich</strong> (Gelände/Gebäude zu Gebäude, Glasfaser, oft redundant), <strong>Sekundärbereich</strong> (Steigleitung zwischen Etagen, Glasfaser oder Kupfer) und <strong>Tertiärbereich</strong> (Etagenverteiler zur Anschlussdose, Kupfer-TP, max. 90 m Link + 2×5 m Patchkabel = 100 m Channel).</p>
<table class="tbl"><tr><th>Kategorie</th><th>Bandbreite</th><th>typisch</th></tr>
<tr><td>Cat 5e</td><td>100 MHz</td><td>1 GBit/s</td></tr>
<tr><td>Cat 6</td><td>250 MHz</td><td>1 GBit/s (10G bis ~55 m)</td></tr>
<tr><td>Cat 6A</td><td>500 MHz</td><td>10 GBit/s auf 100 m – heutiger Neubau-Standard</td></tr>
<tr><td>Cat 7/7A</td><td>600/1000 MHz</td><td>geschirmt S/FTP, Sonderstecker</td></tr></table>
<p>Schirmungscode: <em>Gesamtschirm/Paarschirm + TP</em>, z. B. S/FTP = Geflecht-Gesamtschirm + folierte Paare; U/UTP = ungeschirmt.</p>`,
    },
    {
      h: "Glasfaser: Multimode vs. Singlemode",
      html: `<table class="tbl"><tr><th></th><th>Multimode (OM3/OM4/OM5)</th><th>Singlemode (OS2)</th></tr>
<tr><td>Kern</td><td>50 µm</td><td>9 µm</td></tr>
<tr><td>Lichtquelle</td><td>VCSEL (günstig)</td><td>Laser</td></tr>
<tr><td>Reichweite 10G</td><td>OM3 ~300 m, OM4 ~400 m</td><td>10–40 km+</td></tr>
<tr><td>Einsatz</td><td>im Gebäude/RZ</td><td>Campus, WAN, Provider</td></tr></table>
<p>Steckertypen: LC (klein, heute Standard in SFP-Modulen), SC (älter, Push-Pull), ST (Bajonett, Bestand). Bei Kupfer vs. Glas in der Abwägung zählen: EMV-Unempfindlichkeit, Distanz, Potentialtrennung zwischen Gebäuden (Blitzschutz!) – zwischen zwei Gebäuden gehört IMMER Glasfaser.</p>`,
    },
    {
      h: "T568A/B und typische Messfehler",
      html: `<p>Die Auflegereihenfolge T568A vs. T568B unterscheidet sich nur im Tausch der Paare Grün/Orange. In Deutschland ist <strong>T568B</strong> verbreitet; entscheidend ist, dass beide Enden gleich aufgelegt sind (sonst Crossover – seit Auto-MDI-X meist trotzdem funktional, aber normwidrig). Übe die Belegung im IT-Labor (Patchkabel-Trainer).</p>
<p>Abnahme-Messungen (Zertifizierung nach Klasse EA): Wiremap (Belegung), Länge, Dämpfung, NEXT/FEXT (Übersprechen), Return Loss. Prüfungsrelevante Fehlerbilder: <em>Split Pair</em> (Wiremap ok, aber Paare falsch kombiniert → massives Übersprechen) und zu enger Biegeradius bzw. gequetschte Kabelbinder (Return-Loss-Fehler).</p>`,
    },
    {
      h: "Werkstatt: LWL-Dämpfungsbudget und PoE",
      html: `<p><strong>Dämpfungsbudget:</strong> Sender-Leistung minus Empfänger-Empfindlichkeit ergibt das Budget; Verluste der Strecke müssen darunter bleiben. Aufgabe: Budget 10,5 dB. Strecke: 8 km Singlemode (0,4 dB/km), 4 Spleiße (0,1 dB), 2 Steckerpaare (0,5 dB). Reicht es?</p>
<details><summary>Lösung anzeigen</summary><pre class="code">Faser:   8 × 0,4 = 3,2 dB
Spleiße: 4 × 0,1 = 0,4 dB
Stecker: 2 × 0,5 = 1,0 dB
Summe:             4,6 dB  ≤ 10,5 dB → passt, Reserve 5,9 dB</pre><p>In der Abnahme werden zusätzlich 2–3 dB Alterungs-/Reparaturreserve gefordert – auch damit bleibt die Strecke grün.</p></details>
<p><strong>PoE-Klassen</strong> (Strom über das Datenkabel – APs, Telefone, Kameras):</p>
<table class="tbl"><tr><th>Standard</th><th>Name</th><th>Leistung am Gerät</th></tr>
<tr><td>802.3af</td><td>PoE</td><td>~12,95 W</td></tr>
<tr><td>802.3at</td><td>PoE+</td><td>~25,5 W</td></tr>
<tr><td>802.3bt</td><td>PoE++ (Typ 3/4)</td><td>~51 / ~71 W</td></tr></table>
<p>Planungsfalle: Das <em>Power-Budget des Switches</em> gilt für ALLE Ports zusammen – 48 Ports × PoE+ voll geht bei einem 370-W-Budget nicht.</p>`,
    },
  ],
  l301: [
    {
      h: "Verfügbarkeit rechnen wie in der AP2",
      html: `<p>Verfügbarkeit = vereinbarte Zeit minus Ausfallzeit, geteilt durch vereinbarte Zeit. Die „Neuner" musst du in Minuten übersetzen können:</p>
<table class="tbl"><tr><th>Verfügbarkeit</th><th>Ausfall pro Jahr</th></tr>
<tr><td>99 %</td><td>~3,65 Tage</td></tr>
<tr><td>99,9 %</td><td>~8,76 h</td></tr>
<tr><td>99,99 %</td><td>~52,6 min</td></tr>
<tr><td>99,999 %</td><td>~5,3 min</td></tr></table>
<pre class="code">Reihenschaltung (beide nötig):  A = A1 · A2
  0,999 · 0,999 = 0,998 → SCHLECHTER als jede Komponente
Parallelschaltung (eine reicht): A = 1 − (1−A1)·(1−A2)
  1 − 0,001·0,001 = 0,999999 → BESSER</pre>
<p>Merke: Jede zusätzlich NÖTIGE Komponente senkt die Gesamtverfügbarkeit, jede redundante erhöht sie. Dazu gehören <strong>MTBF</strong> (mittlere Zeit zwischen Ausfällen) und <strong>MTTR</strong> (mittlere Reparaturzeit): A = MTBF / (MTBF + MTTR).</p>`,
    },
    {
      h: "Redundanz-Bausteine im Rechenzentrum",
      html: `<table class="tbl"><tr><th>Ebene</th><th>Maßnahme</th></tr>
<tr><td>Strom</td><td>USV (überbrückt Minuten, filtert Spitzen) + Netzersatzanlage/Diesel (Stunden); zwei getrennte Einspeisungen (A/B-Feed), Server mit 2 Netzteilen</td></tr>
<tr><td>Netz</td><td>doppelte Uplinks (LACP/Stacking), redundante Router mit VRRP/HSRP (virtuelle Gateway-IP), zwei Provider (BGP)</td></tr>
<tr><td>Server</td><td>Cluster: aktiv/passiv (Failover) oder aktiv/aktiv (Lastverteilung); Virtualisierung mit Live-Migration</td></tr>
<tr><td>Storage</td><td>RAID + Multipathing + replizierter Storage (synchron im Campus, asynchron über Distanz)</td></tr>
<tr><td>Standort</td><td>Georedundanz: zweites RZ, Desaster-Recovery-Plan mit RTO/RPO</td></tr></table>
<p>USV-Rechenaufgabe (Klassiker): Last 900 W, USV liefert 1500 VA bei cos φ 0,8 → 1200 W nutzbar; Akku 180 Wh je Modul → Überbrückung = Wh ÷ W. Einheiten sauber halten: VA ≠ W.</p>`,
    },
    {
      h: "Typische Prüfungsfallen",
      html: `<ul>
<li><strong>Reihen- und Parallelrechnung vertauscht</strong> – erst fragen: Brauche ich BEIDE Komponenten (Reihe) oder reicht EINE (parallel)?</li>
<li><strong>VA mit W gleichgesetzt</strong> – ohne cos φ geht die USV-Rechnung schief.</li>
<li><strong>„Cluster ersetzt Backup"</strong> – nein: Redundanz schützt vor Ausfall, Backup vor Datenverlust; ein logischer Fehler repliziert sich in den Cluster hinein.</li>
<li><strong>Single Point of Failure übersehen</strong>: doppelte Server, aber nur ein Switch/eine USV davor – Diagramm immer Ende zu Ende prüfen.</li></ul>`,
    },
    {
      h: "Werkstatt: Cluster, Quorum und eine SLA-Rechnung",
      html: `<p><strong>Split-Brain:</strong> Reißt die Verbindung zwischen zwei Cluster-Knoten ab, halten sich beide für den Überlebenden und schreiben parallel – Datenchaos. Dagegen gibt es das <strong>Quorum</strong>: Nur wer die Mehrheit der Stimmen sieht (z. B. 2 von 3: dritter Knoten oder Witness-Share), darf Dienste führen. Deshalb haben Cluster ungerade Stimmenzahlen.</p>
<p><strong>Aufgabe:</strong> SLA 99,9 % monatlich (30 Tage). (a) Wie viel Ausfall ist erlaubt? (b) Ein Ausfall dauerte 55 Minuten – SLA gerissen? (c) Der Anbieter rechnet „geplante Wartung zählt nicht" – worauf achtest du im Vertrag?</p>
<details><summary>Lösung anzeigen</summary><pre class="code">(a) 30 Tage = 43.200 min × 0,001 = 43,2 min/Monat
(b) 55 min &gt; 43,2 min → SLA verletzt → Pönale/Gutschrift laut Vertrag
(c) Wartungsfenster: Häufigkeit/Dauer begrenzt? Ankündigungsfrist?
    Zählweise (Monat vs. Jahr – 99,9 %/Jahr erlaubt 8,76 h am Stück!)</pre><p>Die Zählweise ist der Kern: Jahres-SLAs erlauben lange Einzelausfälle, Monats-SLAs nicht – für kritische Systeme Monatsbezug plus definierte RTO fordern.</p></details>`,
    },
  ],
  l302: [
    {
      h: "Servicemodelle und Verantwortungsteilung",
      html: `<p>Die drei Servicemodelle unterscheiden sich darin, wie viel du selbst betreibst (nach NIST SP 800-145):</p>
<table class="tbl"><tr><th></th><th>On-Premises</th><th>IaaS</th><th>PaaS</th><th>SaaS</th></tr>
<tr><td>Anwendung</td><td>du</td><td>du</td><td>du</td><td>Anbieter</td></tr>
<tr><td>Laufzeit/Middleware</td><td>du</td><td>du</td><td>Anbieter</td><td>Anbieter</td></tr>
<tr><td>Betriebssystem</td><td>du</td><td>du</td><td>Anbieter</td><td>Anbieter</td></tr>
<tr><td>Virtualisierung/Server</td><td>du</td><td>Anbieter</td><td>Anbieter</td><td>Anbieter</td></tr></table>
<p>Das <strong>Shared-Responsibility-Modell</strong> ist der Prüfungskern: Der Anbieter sichert die Cloud (Gebäude, Hardware, Hypervisor), du sicherst, WAS in der Cloud liegt (Daten, Zugriffe, Konfiguration). „Der Provider macht doch Backups" ist ein klassischer Irrtum – gelöschte Postfächer sind ohne eigene Sicherung weg.</p>`,
    },
    {
      h: "Bereitstellungsmodelle und die Kostenfrage",
      html: `<p><strong>Public</strong> (geteilte Infrastruktur), <strong>Private</strong> (eigene, exklusiv), <strong>Hybrid</strong> (Mischung mit Datenaustausch – der Realfall im Mittelstand), <strong>Community</strong> (mehrere Organisationen mit gleichen Anforderungen, z. B. Kommunen).</p>
<p>Kostenlogik: On-Prem = <strong>CAPEX</strong> (Investition, AfA über Jahre), Cloud = <strong>OPEX</strong> (laufend, skaliert mit Nutzung). Rechenaufgabe im AP2-Stil: Server-Kauf 12.000 € + 200 €/Monat Betrieb über 5 Jahre = 24.000 € vs. Cloud-Instanz 450 €/Monat = 27.000 € – dann qualitative Faktoren abwägen (Skalierung, Personal, Datenschutz, Exit-Kosten, Vendor-Lock-in).</p>
<p>DSGVO-Blick: Bei personenbezogenen Daten braucht es einen AV-Vertrag (Art. 28), Klarheit über Verarbeitungsort (EU/Drittland → Angemessenheitsbeschluss bzw. Standardvertragsklauseln) und Löschkonzepte. „US-Cloud = automatisch verboten" ist falsch, „ohne Prüfung erlaubt" auch – es kommt auf die Rechtsgrundlage an.</p>`,
    },
    {
      h: "Typische Prüfungsfallen",
      html: `<ul>
<li><strong>PaaS und IaaS verwechselt</strong>: Sobald du das Betriebssystem patchst, ist es IaaS.</li>
<li><strong>Elastizität ≠ Hochverfügbarkeit</strong>: Auto-Scaling reagiert auf Last, nicht auf Ausfälle einer Region.</li>
<li><strong>Egress-Kosten vergessen</strong>: Daten in die Cloud sind oft gratis, Daten heraus kosten – wichtig bei Backup-Rückholung.</li>
<li><strong>Shared Responsibility ignoriert</strong>: Fehlkonfigurierte Storage-Buckets sind KUNDEN-Fehler, kein Provider-Versagen.</li></ul>`,
    },
    {
      h: "Werkstatt: Migrationsstrategie wählen (6R) + TCO-Rechnung",
      html: `<p>Für jede Alt-Anwendung eine der <strong>6R-Strategien</strong>: <em>Rehost</em> (Lift &amp; Shift: VM 1:1 in IaaS), <em>Replatform</em> (kleine Anpassung, z. B. Managed-DB), <em>Repurchase</em> (durch SaaS ersetzen), <em>Refactor</em> (neu für die Cloud bauen), <em>Retire</em> (abschalten), <em>Retain</em> (bleibt on-prem, z. B. wegen Latenz/Compliance).</p>
<p><strong>Aufgabe:</strong> Ordne zu: (1) altes Fax-Gateway, kaum genutzt, (2) Exchange-Server, Team will weniger Betrieb, (3) Warenwirtschaft mit Spezialhardware-Dongle, (4) selbst entwickeltes Kundenportal mit Lastspitzen.</p>
<details><summary>Lösung anzeigen</summary><p>(1) <strong>Retire</strong> – erst prüfen, ob es überhaupt noch gebraucht wird. (2) <strong>Repurchase</strong> → SaaS (z. B. gehostetes Mail-Angebot), Betrieb entfällt. (3) <strong>Retain</strong> – Dongle/Spezialhardware bindet on-prem, später ablösen. (4) <strong>Refactor/Replatform</strong> – Lastspitzen sind DAS Argument für elastische Cloud-Dienste (Auto-Scaling statt Dimensionierung auf die Spitze).</p></details>
<p>Bei der TCO-Rechnung an die versteckten Posten denken: Egress-Traffic, Backup-Speicher, Test-/Staging-Umgebungen, Schulung, parallele Betriebsphase während der Migration – und auf der On-Prem-Seite Strom, Kühlung, USV-Wartung, Personalanteil, Ersatzbeschaffung nach AfA.</p>`,
    },
  ],
  l303: [
    {
      h: "PowerShell verstehen statt auswendig lernen",
      html: `<p>PowerShell arbeitet mit <strong>Objekten</strong>, nicht mit Text: <code>Get-Service</code> liefert Service-Objekte mit Eigenschaften (Name, Status), die du durch die Pipeline reichst. Das Schema ist immer <em>Verb-Substantiv</em>:</p>
<pre class="code"># Alle gestoppten Dienste mit Autostart finden und starten:
Get-Service | Where-Object { $_.Status -eq "Stopped" -and $_.StartType -eq "Automatic" } | Start-Service

# Die 10 größten Dateien eines Ordners als Tabelle:
Get-ChildItem C:\\Daten -Recurse -File | Sort-Object Length -Descending |
  Select-Object -First 10 Name, @{n="MB";e={[math]::Round($_.Length/1MB,1)}}</pre>
<p>Prüfungsaufgaben zeigen oft eine Pipeline und fragen: „Was macht dieses Skript?" – lies sie von links nach rechts und benenne je Stufe: holen → filtern (<code>Where-Object</code>) → sortieren → auswählen/formatieren. <code>$_</code> ist immer „das aktuelle Objekt".</p>`,
    },
    {
      h: "Bash-Grundwerkzeug und ein Praxisskript",
      html: `<pre class="code">#!/bin/bash
# Backup mit Datum, Log und Fehlerbehandlung
QUELLE="/srv/daten"; ZIEL="/backup/daten-$(date +%F).tar.gz"
if tar -czf "$ZIEL" "$QUELLE" 2>>/var/log/backup.err; then
  echo "$(date +'%F %T') OK: $ZIEL" >> /var/log/backup.log
else
  echo "$(date +'%F %T') FEHLER bei $ZIEL" >> /var/log/backup.log
  exit 1
fi</pre>
<p>Bausteine, die du lesen können musst: Variablen (<code>$ZIEL</code>), Kommandosubstitution (<code>$(date +%F)</code>), Exit-Codes (0 = Erfolg, <code>$?</code>), Umleitungen (<code>&gt;&gt;</code> anhängen, <code>2&gt;</code> Fehlerkanal) und Pipes (<code>|</code>). Cron plant die Ausführung: <code>0 2 * * * /usr/local/bin/backup.sh</code> = täglich 02:00 (Minute Stunde Tag Monat Wochentag).</p>`,
    },
    {
      h: "Infrastructure as Code: Idempotenz ist der Kern",
      html: `<p>IaC beschreibt den <strong>Soll-Zustand</strong> („dieser Server hat Apache installiert, Port 443 offen") statt einer Befehlsfolge. Werkzeuge wie Ansible gleichen Ist gegen Soll ab – das macht Läufe <strong>idempotent</strong>: Zweimal ausführen ändert nichts mehr, es „repariert" nur Abweichungen.</p>
<pre class="code"># Ansible-Task (YAML):
- name: Apache installieren und starten
  apt: { name: apache2, state: present }
- service: { name: apache2, state: started, enabled: true }</pre>
<p>Vorteile für die Argumentationsaufgabe: reproduzierbar (Testumgebung = Produktion), versionierbar (Git: Wer hat wann was geändert?), dokumentierend (der Code IST die Doku), skalierend (200 Server = 1 Playbook). Risiko: Ein Fehler skaliert genauso – deshalb Review + Staging.</p>`,
    },
    {
      h: "Werkstatt: Skript lesen, Fehler finden, Vergleich der Welten",
      html: `<p><strong>Aufgabe (Skript lesen):</strong> Was tut diese Zeile – und welche Gefahr steckt darin?</p>
<pre class="code">Get-ChildItem C:\\Profile -Recurse -Include *.tmp | Remove-Item -Force</pre>
<details><summary>Lösung anzeigen</summary><p>Sie löscht rekursiv alle .tmp-Dateien unter C:\\Profile – ohne Rückfrage (<code>-Force</code>). Gefahren: kein <code>-WhatIf</code>-Testlauf, keine Protokollierung, und wenn der Pfad aus einer Variablen käme, die leer ist, träfe es ggf. das falsche Verzeichnis. Professionell: erst mit <code>-WhatIf</code> laufen lassen, Treffer loggen, dann scharf schalten.</p></details>
<table class="tbl"><tr><th></th><th>PowerShell</th><th>Bash</th></tr>
<tr><td>Pipeline transportiert</td><td>Objekte</td><td>Text</td></tr>
<tr><td>Filtern</td><td>Where-Object { $_.Status -eq "Stopped" }</td><td>grep, awk</td></tr>
<tr><td>Hilfe</td><td>Get-Help, Get-Member</td><td>man, --help</td></tr>
<tr><td>Testlauf</td><td>-WhatIf / -Confirm</td><td>echo statt ausführen, set -n</td></tr>
<tr><td>Fehlerkanal</td><td>Write-Error, try/catch</td><td>stderr (2&gt;), exit-Codes, set -e</td></tr>
<tr><td>Planung</td><td>Aufgabenplanung/ScheduledTasks</td><td>cron, systemd-Timer</td></tr></table>
<p>Merke für Argumentationsaufgaben: Automatisierung lohnt ab „wiederkehrend + fehleranfällig + dokumentationspflichtig" – die Zeitersparnis rechnet man über Häufigkeit × Minuten × Stundensatz gegen den Erstellungsaufwand.</p>`,
    },
  ],
  l304: [
    {
      h: "Netzplantechnik: FAZ, FEZ, Puffer, kritischer Pfad",
      html: `<p>Das Handwerkszeug der AP2-Planungsaufgabe: <strong>Vorwärtsrechnung</strong> (FAZ = spätestes FEZ aller Vorgänger; FEZ = FAZ + Dauer), dann <strong>Rückwärtsrechnung</strong> vom Projektende (SEZ = frühestes SAZ aller Nachfolger; SAZ = SEZ − Dauer). Der <strong>Gesamtpuffer</strong> GP = SAZ − FAZ; wo GP = 0 ist, verläuft der <strong>kritische Pfad</strong> – jede Verzögerung dort verschiebt das Projektende.</p>
<pre class="code">A(3) → B(5) → D(4)        Vorwärts: A: 0–3, B: 3–8, C: 3–9
A(3) → C(6) → D(4)                  D: FAZ = max(8,9) = 9 → Ende 13
Rückwärts: D: 9–13, C: 3–9 (GP 0), B: 4–9 (GP 1), A: 0–3 (GP 0)
Kritischer Pfad: A–C–D</pre>
<p>Die Maximum-Regel bei FAZ (und Minimum-Regel bei SEZ) ist DIE Fehlerquelle – rechne den Plan in der Labor-Station auf der AP2-Seite selbst durch. Gantt-Diagramme sind derselbe Inhalt als Balken über der Zeitachse.</p>`,
    },
    {
      h: "Die betriebliche Projektarbeit strukturieren",
      html: `<p>Der rote Faden für Antrag und Dokumentation (und die Bewertungslogik der Prüfer):</p>
<ol>
<li><strong>Ist-Analyse</strong>: Was ist heute, was ist das Problem? (messbar!)</li>
<li><strong>Soll-Konzept mit Zielen</strong>: SMART formuliert – spezifisch, messbar, attraktiv/akzeptiert, realistisch, terminiert.</li>
<li><strong>Alternativenvergleich</strong>: mindestens zwei Lösungen, Entscheidung begründet über eine <strong>Nutzwertanalyse</strong> (Kriterien gewichten → Punkte vergeben → gewichtete Summe) plus Kosten.</li>
<li><strong>Umsetzung</strong> mit Zeitplan (Netzplan/Gantt), Abweichungen dokumentieren – Abweichungen sind kein Makel, unbegründete Abweichungen schon.</li>
<li><strong>Wirtschaftlichkeit</strong>: Kosten (Personal via Stundensatz!, Hardware, Lizenzen, laufend) vs. Nutzen (quantitativ: eingesparte Stunden × Satz; qualitativ: Sicherheit, Zufriedenheit); Amortisation = Investition ÷ jährliche Ersparnis.</li>
<li><strong>Abnahme + Übergabe</strong>: Soll-Ist-Vergleich gegen die SMART-Ziele, Doku, Einweisung.</li></ol>`,
    },
    {
      h: "Typische Fallen in Doku und Fachgespräch",
      html: `<ul>
<li><strong>Ziele nicht messbar</strong> („das Netz soll schneller werden") – ohne Zahl kein Soll-Ist-Vergleich am Ende.</li>
<li><strong>Nutzwertanalyse rückwärts gebaut</strong> (Gewichte so gewählt, dass das Wunschergebnis gewinnt) – Prüfer fragen nach der Begründung der Gewichte.</li>
<li><strong>Eigene Arbeitszeit „kostenlos"</strong> – Personalkosten sind fast immer der größte Block; Azubi-Stundensatz gehört in jede Kalkulation.</li>
<li><strong>Puffer im Zeitplan fehlen</strong> – ein Plan ohne Reserve ist im Fachgespräch leicht zu kippen („Was, wenn die Lieferung eine Woche später kommt?").</li></ul>`,
    },
    {
      h: "Werkstatt: Risikomatrix, Stakeholder und SMART in gut/schlecht",
      html: `<p><strong>Risikomatrix</strong> (Eintrittswahrscheinlichkeit × Schadenshöhe) priorisiert Gegenmaßnahmen. Je Risiko: vermeiden, vermindern, übertragen (Versicherung/Dienstleister) oder akzeptieren – mit Begründung.</p>
<table class="tbl"><tr><th>Risiko im Azubi-Projekt</th><th>W'keit</th><th>Schaden</th><th>Maßnahme</th></tr>
<tr><td>Lieferverzug der Hardware</td><td>mittel</td><td>hoch</td><td>früh bestellen, Puffer im Plan (vermindern)</td></tr>
<tr><td>Testumgebung nicht verfügbar</td><td>mittel</td><td>mittel</td><td>Reservierung + Alternative als VM (vermeiden)</td></tr>
<tr><td>Krankheit des Betreuers</td><td>niedrig</td><td>mittel</td><td>Stellvertreter benennen (übertragen)</td></tr></table>
<p><strong>SMART-Check</strong> – zwei Formulierungen im Vergleich:</p>
<pre class="code">Schlecht: "Das Backup soll besser werden."
SMART:    "Bis 30.09. ist für die 3 Fileserver eine tägliche Sicherung
           nach 3-2-1 eingerichtet; ein Test-Restore von 10 GB gelingt
           in unter 60 Minuten und ist dokumentiert."</pre>
<details><summary>Warum ist die zweite Fassung prüfungssicher?</summary><p>Spezifisch (3 Fileserver, 3-2-1), messbar (Test-Restore 10 GB &lt; 60 min), attraktiv/akzeptiert (löst das Ist-Problem), realistisch (Standardtechnik), terminiert (30.09.). Am Projektende lässt sich jeder Punkt objektiv abhaken – genau das prüft der Soll-Ist-Vergleich in Doku und Fachgespräch.</p></details>`,
    },
  ],
  l305: [
    {
      h: "NAS vs. SAN: zwei grundverschiedene Zugriffe",
      html: `<p>Der Kernunterschied ist die Zugriffsebene: Ein <strong>NAS</strong> liefert <em>Dateien</em> über Netzprotokolle (SMB für Windows, NFS für Linux) – das NAS verwaltet das Dateisystem. Ein <strong>SAN</strong> liefert <em>Blöcke</em>: Der Server sieht eine LUN wie eine lokale Festplatte, formatiert sie selbst (NTFS, VMFS, ext4) und verwaltet das Dateisystem allein.</p>
<table class="tbl"><tr><th></th><th>NAS</th><th>SAN</th></tr>
<tr><td>Zugriff</td><td>Datei (SMB/NFS)</td><td>Block (iSCSI, Fibre Channel)</td></tr>
<tr><td>Netz</td><td>vorhandenes LAN</td><td>dediziert: FC-Fabric oder eigenes IP-Netz</td></tr>
<tr><td>Typisch für</td><td>Fileserver, Ablage, Backup-Ziel</td><td>Datenbanken, Virtualisierungs-Datastores</td></tr>
<tr><td>Mehrfachzugriff</td><td>viele Clients gleichzeitig – normal</td><td>eine LUN, ein Schreiber (außer Cluster-Dateisystem!)</td></tr></table>
<p>Prüfungsklassiker: „Zwei Server mounten dieselbe LUN mit NTFS gleichzeitig" → Datenkorruption, weil NTFS kein Cluster-Dateisystem ist. Genau dafür gibt es VMFS/CSV.</p>`,
    },
    {
      h: "iSCSI und Fibre Channel im Detail",
      html: `<p><strong>iSCSI</strong> kapselt SCSI-Befehle in TCP/IP: Der <em>Initiator</em> (Server) verbindet sich zum <em>Target</em> (Storage); adressiert wird über IQNs (iqn.2026-07.de.firma:storage1). Praxisregeln: eigenes VLAN oder physisch getrenntes Netz, Jumbo Frames (MTU 9000) durchgängig konfigurieren, kein Spanning-Tree-Blockieren im Storage-Pfad, <strong>Multipathing</strong> (MPIO) statt einfacher Bündelung.</p>
<p><strong>Fibre Channel</strong> ist das dedizierte Hochleistungs-Pendant (8/16/32 GFC): eigene Fabric aus FC-Switches, Zoning regelt, welcher HBA welches Target sieht. Teurer, aber verlustfrei und latenzarm. <strong>FCoE</strong> und vor allem <strong>NVMe-oF</strong> sind die moderneren Konvergenz-Varianten – für die Prüfung reicht: Block-Storage über das Netz, Performance-Reihenfolge kennen.</p>
<p>Verfügbarkeitsdenken: Storage ist fast immer der kritischste Single Point of Failure – deshalb zwei Fabrics/Pfade (Multipathing), zwei Controller im Array und Replikation auf ein zweites System.</p>`,
    },
    {
      h: "Typische Prüfungsfallen",
      html: `<ul>
<li><strong>NAS/SAN nur an der Hardware festgemacht</strong> – entscheidend ist Datei- vs. Blockzugriff; dieselbe Kiste kann oft beides („Unified Storage").</li>
<li><strong>iSCSI im Client-LAN ohne Trennung</strong> – Storage-Verkehr konkurriert mit Nutzerverkehr, Latenz bricht ein.</li>
<li><strong>Jumbo Frames nur teilweise aktiviert</strong> – MTU muss Ende-zu-Ende passen (Server, Switch, Storage), sonst Fragmentierung/Abbrüche.</li>
<li><strong>LUN ≠ Backup</strong>: Snapshots auf demselben Array schützen nicht vor Array-Ausfall – 3-2-1 gilt auch hier.</li></ul>`,
    },
    {
      h: "Werkstatt: Durchsatz kalkulieren und Snapshot ≠ Backup",
      html: `<p><strong>Aufgabe:</strong> Eine VM soll nachts 2 TB auf das Storage sichern, Fenster 4 h. Reicht 1-GBit/s-iSCSI? Und mit 10 GBit/s?</p>
<details><summary>Lösung anzeigen</summary><pre class="code">1 GBit/s ≈ 125 MB/s theoretisch, real ~100 MB/s
2 TB = 2.000.000 MB ÷ 100 MB/s = 20.000 s ≈ 5,6 h → reicht NICHT
10 GBit/s: real ~1.000 MB/s → ≈ 0,56 h ≈ 34 min → passt locker</pre><p>Antwortschema der Prüfung: Einheiten wandeln (Bit→Byte: ÷8), Realitätsabschlag nennen (Protokoll-Overhead), Ergebnis gegen das Zeitfenster stellen und eine Empfehlung aussprechen (10 GbE oder Fenster/Volumen ändern, z. B. inkrementell sichern).</p></details>
<table class="tbl"><tr><th></th><th>Snapshot</th><th>Backup</th></tr>
<tr><td>liegt</td><td>auf demselben Array</td><td>auf getrenntem System/Medium</td></tr>
<tr><td>schützt vor</td><td>logischen Fehlern (kurzfristig zurückrollen)</td><td>auch Array-Ausfall, Brand, Ransomware</td></tr>
<tr><td>Aufbewahrung</td><td>Stunden bis Tage</td><td>Wochen bis Jahre (GVS)</td></tr>
<tr><td>Kostenprofil</td><td>fast gratis, wächst mit Änderungsrate</td><td>eigene Infrastruktur nötig</td></tr></table>
<p>Der Satz „Wir haben Snapshots, also brauchen wir kein Backup" ist in Prüfung wie Praxis ein rotes Tuch – Snapshots sterben mit dem Array.</p>`,
    },
  ],
};
