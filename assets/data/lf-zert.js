window.LF_CONTENT = window.LF_CONTENT || {};
window.LF_CONTENT["zert"] = {
  topics: [
    {
      id: "ci-net",
      title: "Network Fundamentals",
      lessons: [
        {
          id: "ci-nf-1",
          title: "Ethernet, Switching & VLANs",
          content: [
            { type: "heading", value: "Ethernet-Standards" },
            {
              type: "text",
              value:
                "10BASE-T: 10M. 100BASE-TX: 100M. 1000BASE-T: 1G, Cat5e+. 10GBASE-T: 10G, Cat6a+. LWL: 1000BASE-SX (MM,550m), 1000BASE-LX (SM,5km).",
            },
            { type: "heading", value: "Switch: MAC-Lernen" },
            {
              type: "text",
              value:
                "Quell-MAC in CAM-Tabelle speichern. Ziel bekannt → Forward. Unbekannt → Flooding.",
            },
            { type: "heading", value: "VLANs" },
            {
              type: "text",
              value:
                "Logische Segmentierung. 802.1Q-Tagging auf Trunk-Ports. Native VLAN = ungetaggt. Inter-VLAN-Routing über Router-on-a-Stick oder L3-Switch.",
            },
            { type: "heading", value: "VLANs im Detail" },
            {
              type: "text",
              value:
                "Ein VLAN (Virtual LAN) trennt ein physisches Switch-Netz in mehrere logische Broadcast-Domänen. Vorteile: Sicherheit (Abteilungen getrennt), weniger Broadcast-Last, Flexibilität (unabhängig vom Standort). Access-Port: gehört zu EINEM VLAN, verbindet Endgeräte. Trunk-Port: überträgt MEHRERE VLANs zwischen Switches, nutzt 802.1Q-Tagging (4-Byte-Tag mit VLAN-ID im Frame). Native VLAN: das eine VLAN, das auf dem Trunk ungetaggt läuft. Inter-VLAN-Routing: VLANs sind getrennte Netze, Kommunikation zwischen ihnen braucht einen Router oder Layer-3-Switch (Router-on-a-Stick oder SVI).",
            },
            {
              type: "code",
              value:
                "! VLAN anlegen und Port zuweisen (Cisco IOS)\nvlan 10\n name Vertrieb\ninterface FastEthernet0/1\n switchport mode access\n switchport access vlan 10\n\n! Trunk für mehrere VLANs zwischen Switches\ninterface GigabitEthernet0/1\n switchport mode trunk\n switchport trunk allowed vlan 10,20,30\n\n! Wirksame VLANs anzeigen\nshow vlan brief",
            },
            { type: "heading", value: "Vertiefung: Wie ein Cisco-Switch wirklich entscheidet" },
            {
              type: "text",
              value:
                "Hinter den Befehlen steckt immer dieselbe Logik: Der Switch lernt Quell-MACs pro Port in die CAM-Tabelle (show mac address-table), flutet Unbekanntes und trennt Broadcast-Domänen per VLAN. Access-Ports (switchport mode access, access vlan 20) tragen genau ein VLAN untagged zum Endgerät; Trunks (mode trunk) transportieren viele VLANs mit 802.1Q-Tag zwischen Switches – das native VLAN bleibt untagged und MUSS beidseitig gleich sein (CDP meckert sonst: native VLAN mismatch). Diagnose-Trio für jede VLAN-Störung: show vlan brief (existiert das VLAN, hängt der Port drin?), show interfaces trunk (läuft der Trunk, welche VLANs erlaubt?), show interfaces status (Port up? richtiger Modus?).",
            },
            { type: "heading", value: "Übungsaufgabe: Der stumme Access-Port" },
            {
              type: "text",
              value:
                "PC an Fa0/7 erreicht nichts. show vlan brief zeigt Fa0/7 in VLAN 30, aber VLAN 30 fehlt in der Liste (act/unsup). show interfaces trunk zum Core zeigt allowed vlans 10,20. Nenne die zwei Fehler und die Konfigurationsbefehle zur Behebung.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: Fehler 1: VLAN 30 existiert auf dem Switch nicht (Port verweist ins Leere) → vlan 30 + name Technik anlegen. Fehler 2: Der Trunk zum Core erlaubt VLAN 30 nicht → interface gi0/1, switchport trunk allowed vlan add 30 (WICHTIG: add – ohne add überschreibst du die Liste und reißt VLAN 10/20 ab, der Klassiker!). Prüfen: show vlan brief, show interfaces trunk, dann ping Gateway.",
            },
          ],
          quiz: [
            {
              id: "imp_ci-nf-1_0",
              q: "Max. Kabellänge Ethernet (TP)?",
              options: ["50m", "100m", "200m", "550m"],
              correct: 1,
              explain: "100m für alle TP-Standards.",
            },
            {
              id: "imp_ci-nf-1_1",
              q: "802.1Q?",
              options: ["Port Security", "VLAN-Tagging", "Spanning Tree", "WLAN-Standard"],
              correct: 1,
              explain: "802.1Q = VLAN-Tagging auf Trunk-Ports.",
            },
            {
              id: "imp_ci-nf-1_2",
              q: "VLAN-Vorteil?",
              options: [
                "Schnelleres Internet",
                "Mehr Ports",
                "Billigere Switches",
                "Logische Netztrennung ohne extra Hardware",
              ],
              correct: 3,
              explain: "VLANs segmentieren Netzwerke logisch auf einem physischen Switch.",
            },
            {
              id: "imp_ci-nf-1_3",
              q: "Trunk Port?",
              options: [
                "Nur für Router",
                "Transportiert mehrere VLANs (802.1Q Tagging)",
                "Nur Management",
                "Nur 1 VLAN",
              ],
              correct: 1,
              explain: "Trunk: Tagged Frames mehrerer VLANs zwischen Switches/Routern.",
            },
            {
              id: "imp_ci-nf-1_4",
              q: "Native VLAN?",
              options: [
                "Sicherheits-VLAN",
                "Nur für Voice",
                "Immer VLAN 1",
                "Untagged Traffic auf Trunk",
              ],
              correct: 3,
              explain:
                "Standard VLAN 1, änderbar. Frames ohne VLAN-Tag werden dem Native VLAN zugeordnet.",
            },
            {
              id: "imp_ci-nf-1_5",
              q: "STP = ?",
              options: [
                "Switch Tagging Protocol",
                "Spanning Tree Protocol (verhindert Loops)",
                "Server Testing Platform",
                "Simple Transfer Protocol",
              ],
              correct: 1,
              explain: "STP: Verhindert Schleifen in redundanten Switch-Topologien.",
            },
            {
              id: "imp_ci-nf-1_6",
              q: "Access Port?",
              options: [
                "Trunk",
                "Management-Port",
                "Gehört zu genau einem VLAN (für Endgeräte)",
                "Alle VLANs",
              ],
              correct: 2,
              explain: "Access Port: Ein VLAN, für PCs/Drucker/IP-Phones.",
            },
            {
              id: "imp_ci-nf-1_7",
              q: "MAC Address Table?",
              options: [
                "Tabelle, in der ein Host IPs zu MACs auflöst (ARP)",
                "Tabelle, in der ein Router Zielnetze Next-Hops zuordnet",
                "Switch lernt, welche MAC an welchem Port hängt",
                "Tabelle, die Hostnamen zu MAC-Adressen auflöst",
              ],
              correct: 2,
              explain: "Switch baut Tabelle: MAC-Adresse → Port-Zuordnung.",
            },
            {
              id: "imp_ci-nf-1_8",
              q: "PortFast?",
              options: [
                "STP-Port geht sofort in Forwarding (für Endgeräte)",
                "Der Port wird bei Fehlern dauerhaft deaktiviert",
                "Macht den Port zum Trunk für mehrere VLANs",
                "Verlängert die STP-Wartezeit für mehr Stabilität",
              ],
              correct: 0,
              explain: "PortFast: Überspringt STP-Listening/Learning für Access Ports.",
            },
            {
              id: "imp_ci-nf-1_9",
              q: "Wie wird die STP-Root-Bridge gewählt?",
              options: [
                "Niedrigste Bridge-ID gewinnt",
                "Per Zufall bei jedem Neustart",
                "Der zuerst eingeschaltete Switch",
                "Höchste MAC-Adresse gewinnt",
              ],
              correct: 0,
              explain:
                "Priorität, bei Gleichstand niedrigste MAC-Adresse. Deshalb setzt man die Priorität der gewünschten Root-Bridge manuell herab (z. B. spanning-tree vlan 10 priority 4096).",
            },
            {
              id: "imp_ci-nf-1_10",
              q: "Was sind BPDUs?",
              options: [
                "Broadcast-Pakete von Clients",
                "Bridge Protocol Data Units",
                "Fehlermeldungen des Routers",
                "VLAN-Tags",
              ],
              correct: 1,
              explain:
                "Nachrichten, mit denen Switches STP-Informationen austauschen. Alle 2 Sekunden gesendet; BPDU Guard schützt PortFast-Ports vor unerwarteten Switches.",
            },
            {
              id: "imp_ci-nf-1_11",
              q: "Ein Switch mit 24 Ports (ein VLAN): Wie viele Kollisions- und Broadcast-Domänen?",
              options: [
                "24 Kollisionsdomänen, 1 Broadcast-Domäne",
                "24 und 24",
                "1 und 1",
                "1 und 24",
              ],
              correct: 0,
              explain:
                "Jeder Switchport ist eine eigene Kollisionsdomäne; Broadcast-Domänen trennen erst VLANs oder Router.",
            },
            {
              id: "imp_ci-nf-1_12",
              q: "Was bündelt EtherChannel (LACP)?",
              options: [
                "Mehrere VLANs zu einem einzigen großen VLAN",
                "Mehrere physische Links zu einem logischen Link",
                "Strom- und Datenkabel in einem Kabelstrang",
                "Mehrere Switches zu einem verwalteten Stack",
              ],
              correct: 1,
              explain:
                "Mehr Bandbreite und Redundanz ohne STP-Blockade. LACP (802.3ad) handelt die Bündelung dynamisch aus; STP sieht nur EINEN logischen Link.",
            },
            {
              id: "imp_ci-nf-1_13",
              q: "Warum ist VTP mit Vorsicht zu genießen?",
              options: [
                "Ein falsch konfigurierter Switch mit höherer Revisionsnummer kann die VLAN-Datenbank der Domäne überschreiben",
                "Es funktioniert nur in Hub-basierten Netzen, da Switches die VTP-Advertisements nicht weiterleiten können",
                "Es ist pro Switch kostenpflichtig zu lizenzieren, wodurch in großen Domänen erhebliche Kosten entstehen",
                "VTP verschlüsselt die VLAN-Datenbank so stark, dass Switches sie bei Ausfall nicht wiederherstellen können",
              ],
              correct: 0,
              explain:
                "Der Klassiker: gebrauchter Switch ins Netz → VLANs weg. Daher VTP transparent/off oder Revisionsnummer nullen.",
            },
            {
              id: "imp_ci-nf-1_14",
              q: "Mit welchem Befehl wird ein Port fest als Access-Port für VLAN 20 konfiguriert?",
              options: [
                "interface vlan 20 access + switchport enable",
                "switchport mode access + switchport access vlan 20",
                "vlan access 20 + vlan mode access static",
                "set port access vlan 20 mode static",
              ],
              correct: 1,
              explain:
                "Feste Moduszuweisung verhindert DTP-Aushandlung – auch ein Sicherheitsthema (VLAN Hopping).",
            },
            {
              id: "imp_ci-nf-1_15",
              q: "Was passiert, wenn die MAC-Address-Table eines Switches voll ist?",
              options: [
                "Neue Geräte erhalten keine IP-Adresse per DHCP mehr",
                "Nichts, denn die Tabelle ist praktisch unbegrenzt groß",
                "Der Switch schaltet sich zum Selbstschutz komplett ab",
                "Unbekannte Ziele werden geflutet wie bei einem Hub",
              ],
              correct: 3,
              explain:
                "Das nutzt der MAC-Flooding-Angriff aus. Gegenmaßnahme: Port Security mit begrenzter MAC-Anzahl pro Port.",
            },
            {
              id: "imp_ci-nf-1_16",
              q: "Was leistet Auto-MDIX?",
              options: [
                "Ein automatisches Update der Switch-Firmware",
                "Die automatische VLAN-Zuweisung je Endgerät",
                "Stromversorgung über das Netzwerkkabel (PoE)",
                "Der Port erkennt die Kabelbelegung automatisch",
              ],
              correct: 3,
              explain:
                "Gekreuzte und gerade Kabel funktionieren beide. Seit Gigabit-Ethernet Standard – Crossover-Kabel sind dadurch praktisch Geschichte.",
            },
            {
              id: "imp_ci-nf-1_17",
              q: "Typisches Symptom eines Duplex-Mismatch?",
              options: [
                "Doppelte IP-Adressen mit ständigen Adresskonflikt-Meldungen im Netz",
                "Verbindung steht, aber sehr langsam mit vielen Late Collisions/CRC-Fehlern",
                "Der Link kommt gar nicht erst zustande, die Port-LED bleibt dunkel",
                "Der Port wird thermisch überlastet und dauerhaft beschädigt",
              ],
              correct: 1,
              explain:
                "Eine Seite fest full, andere auf auto (fällt auf half zurück) – show interface zeigt die Fehlerzähler.",
            },
            {
              id: "imp_ci-nf-1_18",
              q: "Was bedeutet der Portstatus 'err-disabled'?",
              options: [
                "Ein normaler Betriebszustand, den der Port beim Hochfahren durchläuft, bevor er in den Forwarding-Modus wechselt",
                "Der Switch hat den Port wegen eines Fehlers (z. B. Port-Security-Verstoß, BPDU Guard) deaktiviert",
                "Der Port ist lediglich in der Bandbreite gedrosselt, überträgt aber weiterhin Daten mit reduzierter Geschwindigkeit",
                "Das angeschlossene Kabel überschreitet die maximale Länge von 100 Metern und dämpft das Signal zu stark",
              ],
              correct: 1,
              explain:
                "Reaktivierung: shutdown / no shutdown oder errdisable recovery – vorher die Ursache klären!",
            },
            {
              id: "imp_ci-nf-1_19",
              q: "Wozu dient ein Voice-VLAN?",
              options: [
                "Es überträgt ausschließlich Musik-Streams in hoher Qualität",
                "Es ersetzt das Management-VLAN für die Switch-Verwaltung",
                "Es ist ein separates WLAN-Funknetz nur für schnurlose Telefone",
                "IP-Telefone bekommen am selben Port ein eigenes, getaggtes VLAN",
              ],
              correct: 3,
              explain:
                "Getrennt vom PC-Datenverkehr. switchport voice vlan 150 – das Telefon taggt seinen Verkehr, der PC dahinter bleibt im Access-VLAN; QoS lässt sich gezielt anwenden.",
            },
          ],
        },
        {
          id: "ci-nf-2",
          title: "Routing & OSPF",
          content: [
            { type: "heading", value: "Routing-Grundlagen" },
            {
              type: "text",
              value:
                "Statisches Routing: Routen werden manuell vom Administrator eingetragen (ip route). Dynamisches Routing: Router lernen Routen automatisch über Routingprotokolle: RIP (veraltet, Hop-Count), OSPF (Standard, Link-State), BGP (Internet, Path-Vector), EIGRP (Cisco-proprietär). Administrative Distanz (Vertrauenswürdigkeit, kleiner = besser): Connected(0), Static(1), EIGRP(90), OSPF(110), RIP(120).",
            },
            { type: "heading", value: "Statisch vs. Dynamisch: Wann was?" },
            {
              type: "text",
              value:
                "Statisches Routing wählen, wenn: Kleines Netz (wenige Router), stabile Topologie, hohe Sicherheit (keine Routing-Updates, die abgefangen werden können), volle Kontrolle gewünscht, wenig CPU/RAM-Last. Nachteil: Bei Änderungen muss jeder Router manuell angepasst werden, fehleranfällig bei großen Netzen, kein automatisches Failover. Dynamisches Routing wählen, wenn: Großes/wachsendes Netz, häufige Topologie-Änderungen, automatische Anpassung bei Ausfall (Konvergenz), redundante Pfade. Nachteil: Höhere CPU/RAM-Last, Bandbreite für Routing-Updates, komplexer, potenzielles Sicherheitsrisiko. Praxis: Oft Kombination – statische Default-Route ins Internet + dynamisches Routing intern.",
            },
            { type: "heading", value: "OSPF im Detail" },
            {
              type: "text",
              value:
                "Link-State-Protokoll, Area-basiert. Area 0 = Backbone, alle anderen Areas müssen damit verbunden sein. Router-Typen: Internal, ABR (Area Border), ASBR (AS Boundary). Metrik: Cost basierend auf Bandbreite (100Mbit/s Referenz). Hello-Pakete alle 10s (Broadcast-Netze). LSA-Austausch → Link-State-Database → SPF-Algorithmus (Dijkstra) → Routing-Tabelle.",
            },
            {
              type: "code",
              value:
                "! Statische Route\nip route 192.168.2.0 255.255.255.0 10.0.0.2\nip route 0.0.0.0 0.0.0.0 203.0.113.1   ! Default Route\n\n! Dynamisches Routing (OSPF)\nrouter ospf 1\n network 192.168.1.0 0.0.0.255 area 0\n network 10.0.0.0 0.0.0.3 area 1\n!\ninterface GigabitEthernet0/0\n ip ospf cost 10",
            },
            { type: "heading", value: "Übungsaufgabe: Routenentscheidung begründen" },
            {
              type: "text",
              value:
                "Ein Router kennt zum Ziel 10.20.30.40 folgende Einträge: (1) OSPF 10.20.0.0/16, AD 110, Cost 20; (2) statisch 10.20.30.0/24 via R2, AD 1; (3) EIGRP 10.20.30.0/24, AD 90; (4) statisch 0.0.0.0/0 via ISP, AD 1. Welche Route wird verwendet? Begründe in zwei Schritten.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nSchritt 1 – Longest Prefix Match: Zuerst zählt die Präfixlänge. /24 (Routen 2 und 3) ist spezifischer als /16 (Route 1) und /0 (Route 4) → nur Routen 2 und 3 konkurrieren.\nSchritt 2 – Administrative Distance: Bei gleicher Präfixlänge gewinnt die niedrigere AD. Statisch (AD 1) schlägt EIGRP (AD 90) → Route 2 via R2 wird in die Routing-Tabelle übernommen und verwendet.\nMerke: Präfixlänge vor AD vor Metrik – die Metrik (OSPF Cost 20) wäre erst der dritte Vergleich innerhalb desselben Protokolls.",
            },
          ],
          quiz: [
            {
              id: "imp_ci-nf-2_0",
              q: "OSPF Admin. Distanz?",
              options: ["110", "1", "90", "0"],
              correct: 0,
              explain: "110.",
            },
            {
              id: "imp_ci-nf-2_1",
              q: "OSPF Area 0 heißt?",
              options: ["Default", "Stub", "Backbone", "Transit"],
              correct: 2,
              explain: "Area 0 = Backbone Area.",
            },
            {
              id: "imp_ci-nf-2_2",
              q: "OSPF = ?",
              options: [
                "Online Server Protocol Framework",
                "Open Shortest Path First",
                "Optical Signal Processing",
                "Open System Process Format",
              ],
              correct: 1,
              explain: "OSPF: Link-State Routing-Protokoll, nutzt Dijkstra-Algorithmus.",
            },
            {
              id: "imp_ci-nf-2_3",
              q: "Statische vs. dynamische Route?",
              options: [
                "Statisch = manuell, Dynamisch = automatisch gelernt",
                "Statische Routen leiten Pakete schneller weiter",
                "Beide Routenarten unterscheiden sich technisch nicht",
                "Dynamische Routen sind grundsätzlich unverschlüsselt und unsicher",
              ],
              correct: 0,
              explain:
                "Statisch: Admin trägt ein. Dynamisch: Router lernen Routen automatisch (OSPF, EIGRP).",
            },
            {
              id: "imp_ci-nf-2_4",
              q: "Default Route?",
              options: [
                "Die Route mit der schnellsten gemessenen Latenz",
                "Eine Backup-Route, die nur bei Leitungsausfall aktiv wird",
                "0.0.0.0/0 – wenn keine spezifischere Route passt",
                "Eine Spezialroute ausschließlich für DNS-Anfragen",
              ],
              correct: 2,
              explain:
                "Default Route: Auffangroute für alles, was keiner spezifischen Route entspricht.",
            },
            {
              id: "imp_ci-nf-2_5",
              q: "Administrative Distance: RIP?",
              options: ["1", "110", "0", "120"],
              correct: 3,
              explain:
                "RIP AD = 120 (Connected = 0, Static = 1, EIGRP = 90, OSPF = 110) – je kleiner, desto vertrauenswürdiger.",
            },
            {
              id: "imp_ci-nf-2_6",
              q: "EIGRP AD?",
              options: ["90", "120", "110", "100"],
              correct: 0,
              explain: "90.",
            },
            {
              id: "imp_ci-nf-2_7",
              q: "Longest Match?",
              options: [
                "Billigste",
                "Schnellste",
                "Kürzeste",
                "Spezifischste Route (längster Prefix)",
              ],
              correct: 3,
              explain: "/28 vor /24.",
            },
            {
              id: "imp_ci-nf-2_8",
              q: "show ip route?",
              options: ["ARP", "Config", "Interfaces", "Routing-Tabelle"],
              correct: 3,
              explain: "Alle Routen.",
            },
            {
              id: "imp_ci-nf-2_9",
              q: "Next-Hop?",
              options: ["Nächster Router auf dem Weg", "Gateway Ziel", "DNS", "Ziel"],
              correct: 0,
              explain: "Nächster Router.",
            },
            {
              id: "imp_ci-nf-2_10",
              q: "Wie berechnet OSPF die Kosten (Cost) eines Interfaces?",
              options: [
                "Zufallswert",
                "Referenzbandbreite / Interface-Bandbreite",
                "Nach der Kabellänge",
                "Anzahl der Hops",
              ],
              correct: 1,
              explain:
                "Standard-Referenz 100 Mbit/s. Bei Gigabit-Netzen Referenzbandbreite anheben (auto-cost reference-bandwidth), sonst kosten 1G und 10G beide 1.",
            },
            {
              id: "imp_ci-nf-2_11",
              q: "Wie wird der OSPF-DR in einem Broadcast-Netz gewählt?",
              options: [
                "Der Router mit der niedrigsten IP-Adresse auf dem Segment gewinnt die Wahl",
                "In Broadcast-Netzen wird grundsätzlich kein DR gewählt; jeder Router spricht mit jedem",
                "Höchste Interface-Priorität, bei Gleichstand höchste Router-ID",
                "Der Router mit der längsten Betriebszeit (Uptime) wird automatisch zum DR bestimmt",
              ],
              correct: 2,
              explain:
                "Priorität 0 = nimmt nie an der Wahl teil. DR/BDR reduzieren die Adjacency-Anzahl im Segment.",
            },
            {
              id: "imp_ci-nf-2_12",
              q: "Wie bestimmt ein Router seine OSPF-Router-ID, wenn nichts konfiguriert ist?",
              options: [
                "Immer 1.1.1.1 – dieser Standardwert ist in der OSPF-Spezifikation fest vorgegeben",
                "Höchste IP eines Loopback-Interfaces, sonst höchste IP eines aktiven physischen Interfaces",
                "Per DHCP: Der Router fordert seine Router-ID beim zentralen DHCP-Server an",
                "Die MAC-Adresse des ersten Interfaces wird unverändert als Router-ID übernommen",
              ],
              correct: 1,
              explain:
                "Best Practice: Router-ID explizit setzen (router-id 10.0.0.1) – stabil und dokumentierbar.",
            },
            {
              id: "imp_ci-nf-2_13",
              q: "Welche Standard-Timer nutzt OSPF auf Ethernet?",
              options: [
                "Hello 60 s, Dead 600 s",
                "Hello 1 s, Dead 2 s",
                "Hello 10 s, Dead 40 s",
                "Keine Timer",
              ],
              correct: 2,
              explain:
                "Stimmen Hello-/Dead-Timer (oder Area/Subnetz) zweier Nachbarn nicht überein, kommt keine Adjacency zustande – Top-Fehlerquelle.",
            },
            {
              id: "imp_ci-nf-2_14",
              q: "Wozu dient passive-interface?",
              options: [
                "Es erhöht die Übertragungsrate des Interfaces durch Abschalten unnötiger Protokoll-Overheads",
                "Es deaktiviert das Interface administrativ, vergleichbar mit dem Befehl shutdown",
                "Es blockiert sämtlichen ein- und ausgehenden Datenverkehr auf dem Interface wie eine ACL",
                "Das Interface sendet keine Hellos (keine Adjacency), das Netz wird aber weiterhin announced",
              ],
              correct: 3,
              explain:
                "Standard für LAN-/Endgeräte-Interfaces: Routing-Infos gehören nicht ins Client-Netz.",
            },
            {
              id: "imp_ci-nf-2_15",
              q: "Was ist eine Floating Static Route?",
              options: [
                "Eine statische Route ohne Next-Hop-Angabe, die der Router per Broadcast an alle Nachbarn verteilt",
                "Eine Route, die Datenpakete drahtlos über ein WLAN-Mesh leitet, wenn die Kabelstrecke ausfällt",
                "Ein OSPF-Spezialtyp, bei dem der Router die Metrik dynamisch aus der Link-Auslastung berechnet",
                "Eine statische Route mit künstlich erhöhter Administrative Distance als Backup zur dynamischen Route",
              ],
              correct: 3,
              explain:
                "Beispiel: ip route 0.0.0.0 0.0.0.0 <Backup-GW> 250 – greift erst, wenn die OSPF-Route (AD 110) wegfällt.",
            },
            {
              id: "imp_ci-nf-2_16",
              q: "Welcher Nachbarzustand zeigt eine vollständige OSPF-Adjacency?",
              options: ["FULL", "DOWN", "INIT", "HALF"],
              correct: 0,
              explain:
                "2WAY ist bei DROther-Paaren im Broadcast-Netz normal; zu DR/BDR muss FULL erreicht werden.",
            },
            {
              id: "imp_ci-nf-2_17",
              q: "Was bedeutet die Wildcard-Maske im network-Befehl (z. B. network 10.1.1.0 0.0.0.255 area 0)?",
              options: [
                "Sie ist die invertierte Subnetzmaske und bestimmt, welche Interfaces an OSPF teilnehmen",
                "Sie filtert MAC-Adressen und legt fest, welche Endgeräte Routing-Updates empfangen dürfen",
                "Sie ist die gewöhnliche Subnetzmaske in Standardnotation und bestimmt die Netzgröße des Interfaces",
                "Sie legt die Referenzbandbreite fest, aus der OSPF die Kosten (Metrik) der Interfaces berechnet",
              ],
              correct: 0,
              explain: "0 = Bit muss übereinstimmen, 1 = beliebig. 0.0.0.255 entspricht /24.",
            },
            {
              id: "imp_ci-nf-2_18",
              q: "Was ist die LSDB?",
              options: [
                "Eine Logdatei",
                "Ein Cisco-Lizenzserver",
                "Die Link-State-Datenbank",
                "Die MAC-Tabelle",
              ],
              correct: 2,
              explain:
                "Alle Router einer Area haben dieselbe Topologiesicht und rechnen darauf SPF. OSPF tauscht LSAs aus, bis die LSDBs synchron sind – dann rechnet Dijkstra die besten Pfade.",
            },
            {
              id: "imp_ci-nf-2_19",
              q: "Welchen Vorteil bringen mehrere OSPF-Areas?",
              options: [
                "Keinen, Areas sind rein kosmetische Gliederung",
                "Verschlüsselung aller Routing-Updates",
                "Mehr nutzbare Bandbreite auf allen Links",
                "Kleinere LSDBs und weniger SPF-Neuberechnungen",
              ],
              correct: 3,
              explain:
                "Besser skalierbar; Area 0 verbindet als Backbone alle anderen. ABRs fassen an den Area-Grenzen zusammen (Summarization) – Änderungen bleiben lokal begrenzt.",
            },
          ],
        },
      ],
    },
    {
      id: "ci-sec",
      title: "Network Security",
      lessons: [
        {
          id: "ci-sec-1",
          title: "Firewalls, ACLs & Port Security",
          content: [
            { type: "heading", value: "ACLs" },
            {
              type: "text",
              value:
                "Standard (1-99): Nur Quell-IP. Extended (100-199): Quell/Ziel-IP, Protokoll, Port. Implizites 'deny any' am Ende.",
            },
            {
              type: "code",
              value:
                "access-list 100 permit tcp 192.168.1.0 0.0.0.255 any eq 443\naccess-list 100 deny ip any any log\ninterface Gi0/1\n ip access-group 100 in",
            },
            { type: "heading", value: "Port Security" },
            {
              type: "text",
              value:
                "Beschränkt MAC-Adressen pro Switch-Port. Violation Modes: Protect (verwerfen, kein Log), Restrict (verwerfen + Log), Shutdown (Port deaktivieren, Standard).",
            },
            {
              type: "code",
              value:
                "interface Gi0/1\n switchport mode access\n switchport port-security\n switchport port-security maximum 2\n switchport port-security violation shutdown\n switchport port-security mac-address sticky",
            },
            { type: "heading", value: "STP (Spanning Tree Protocol)" },
            {
              type: "text",
              value:
                "Verhindert Layer-2-Schleifen. Wählt Root Bridge, blockiert redundante Pfade. RSTP (802.1w): Schnellere Konvergenz. Port-Rollen: Root Port, Designated Port, Blocked Port.",
            },
            { type: "heading", value: "Übungsaufgabe: Extended ACL schreiben" },
            {
              type: "text",
              value:
                "Schreibe eine Extended ACL 'BLOCK-GUEST': Das Gastnetz 192.168.50.0/24 darf NICHT per Telnet (23) und SSH (22) auf den Server 10.0.0.10 zugreifen; HTTP/HTTPS auf diesen Server bleibt erlaubt; aller übrige Verkehr des Gastnetzes ist erlaubt. Gib auch die Zuweisung auf Interface Gi0/1 (eingehend) an.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nip access-list extended BLOCK-GUEST\n deny tcp 192.168.50.0 0.0.0.255 host 10.0.0.10 eq 23\n deny tcp 192.168.50.0 0.0.0.255 host 10.0.0.10 eq 22\n permit tcp 192.168.50.0 0.0.0.255 host 10.0.0.10 eq 80\n permit tcp 192.168.50.0 0.0.0.255 host 10.0.0.10 eq 443\n permit ip any any\n!\ninterface GigabitEthernet0/1\n ip access-group BLOCK-GUEST in\nBegründung: Spezifische deny-Zeilen VOR den permits (First Match); das abschließende permit ip any any verhindert, dass das implizite deny any den restlichen Gastverkehr blockiert. Wildcard 0.0.0.255 entspricht /24, 'host' ist die Kurzform für 0.0.0.0.",
            },
            { type: "heading", value: "Vertiefung: ACL-Logik, die Prüfungen lieben" },
            {
              type: "text",
              value:
                "Cisco-ACLs werden von OBEN nach UNTEN gelesen, der erste Treffer gewinnt, am Ende steht ein unsichtbares deny any. Daraus folgen die drei ewigen Regeln: (1) Spezifisches vor Allgemeinem (erst den einen Host erlauben, dann das Netz verbieten). (2) Standard-ACLs (nur Quell-IP, Nummern 1–99) nahe ans ZIEL legen, Extended-ACLs (Quelle, Ziel, Protokoll, Port, 100–199) nahe an die QUELLE. (3) Wildcard-Masken sind inverse Masken: /24 = 0.0.0.255. Port-Security am Access-Port begrenzt MACs (maximum 2), violation-Modi: protect (verwirft still), restrict (verwirft + loggt), shutdown (Port err-disabled – Standard). Wiederbeleben: shutdown/no shutdown oder errdisable recovery.",
            },
            { type: "heading", value: "Übungsaufgabe: ACL mit Denkfehler" },
            {
              type: "text",
              value:
                "Gegeben: access-list 110 deny ip 192.168.10.0 0.0.0.255 any / access-list 110 permit tcp host 192.168.10.5 any eq 443. Der Admin wundert sich, dass Host .5 KEINE HTTPS-Verbindungen aufbauen kann. Erkläre den Fehler und schreibe die korrekte Reihenfolge.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: First match wins: Zeile 1 verwirft ALLES aus 192.168.10.0/24 – Zeile 2 wird für .5 nie erreicht. Korrekt: access-list 110 permit tcp host 192.168.10.5 any eq 443 ZUERST, dann access-list 110 deny ip 192.168.10.0 0.0.0.255 any (und, falls gewünscht, permit für den Rest, sonst greift implizites deny any). Merksatz: Ausnahme vor Regel – und nach jeder ACL-Änderung mit show access-lists die Trefferzähler kontrollieren.",
            },
          ],
          quiz: [
            {
              id: "imp_ci-sec-1_0",
              q: "Port Security Violation 'Shutdown' macht?",
              options: ["Nichts", "Pakete verwerfen", "Port deaktivieren", "MAC loggen"],
              correct: 2,
              explain: "Shutdown = Port geht in err-disabled.",
            },
            {
              id: "imp_ci-sec-1_1",
              q: "STP verhindert?",
              options: ["VLAN-Hopping", "Layer-2-Schleifen", "ARP-Spoofing", "IP-Konflikte"],
              correct: 1,
              explain: "Spanning Tree = Schleifenvermeidung.",
            },
            {
              id: "imp_ci-sec-1_2",
              q: "ACL = ?",
              options: [
                "Active Connection Layer",
                "Advanced Cipher Library",
                "Access Control List",
                "Automatic Control Logic",
              ],
              correct: 2,
              explain:
                "Zugriffssteuerungsliste. ACL: Regelliste auf Router/Switch, die Traffic erlaubt oder blockiert.",
            },
            {
              id: "imp_ci-sec-1_3",
              q: "Port Security: Violation Mode Shutdown?",
              options: [
                "Port bleibt offen",
                "Nur Warnung",
                "Paket verwerfen",
                "Port wird deaktiviert bei unbekannter MAC",
              ],
              correct: 3,
              explain: "Shutdown: Port geht in err-disabled wenn unbekannte MAC erkannt wird.",
            },
            {
              id: "imp_ci-sec-1_4",
              q: "Standard ACL filtert nach?",
              options: ["Nur Ports", "Nur Quell-IP", "MAC-Adressen", "Quell- und Ziel-IP"],
              correct: 1,
              explain: "Standard ACL: Filtert nur nach Quell-IP-Adresse.",
            },
            {
              id: "imp_ci-sec-1_5",
              q: "Extended ACL filtert nach?",
              options: [
                "Nur Quell-IP",
                "Nur VLAN",
                "Quell-IP, Ziel-IP, Protokoll, Port",
                "Nur MAC",
              ],
              correct: 2,
              explain: "Extended ACL: Filtert nach Quelle, Ziel, Protokoll und Port.",
            },
            {
              id: "imp_ci-sec-1_6",
              q: "Standard ACL: Wo?",
              options: ["Am Router", "Am Switch", "Nah am Ziel", "Quelle"],
              correct: 2,
              explain: "Nur Quell-IP.",
            },
            {
              id: "imp_ci-sec-1_7",
              q: "Extended ACL: Wo?",
              options: ["Egal", "Ziel", "Nah an Quelle", "Core"],
              correct: 2,
              explain: "Früh filtern.",
            },
            {
              id: "imp_ci-sec-1_8",
              q: "show access-lists?",
              options: ["Status", "Alle ACLs anzeigen", "Löschen", "Erstellen"],
              correct: 1,
              explain: "Mit Trefferzähler.",
            },
            {
              id: "imp_ci-sec-1_9",
              q: "Sticky MAC?",
              options: ["Statisch", "Dynamisch gelernt, in Config gespeichert", "Trunk", "Manuell"],
              correct: 1,
              explain: "Auto-Learning + Save.",
            },
            {
              id: "imp_ci-sec-1_10",
              q: "Was steht implizit am Ende jeder Cisco-ACL?",
              options: [
                "Ein unsichtbares 'deny any'",
                "Ein 'permit any'",
                "Ein Logging-Befehl",
                "Nichts",
              ],
              correct: 0,
              explain:
                "Nicht explizit erlaubter Verkehr wird verworfen. Wer nur deny-Zeilen schreibt, blockt ALLES – mindestens ein permit muss rein.",
            },
            {
              id: "imp_ci-sec-1_11",
              q: "Welche Nummernbereiche haben Standard- und Extended-ACLs?",
              options: [
                "Beide 1–50",
                "Standard 100–199, Extended 1–99",
                "Frei wählbar ohne Bereiche",
                "Standard 1–99, Extended 100–199",
              ],
              correct: 3,
              explain:
                "Plus erweiterte Bereiche. Named ACLs umgehen die Nummernlogik und sind selbstdokumentierend – heute Best Practice.",
            },
            {
              id: "imp_ci-sec-1_12",
              q: "Welchen Vorteil bieten Named ACLs?",
              options: [
                "Sprechende Namen und das Bearbeiten einzelner Zeilen (Sequenznummern) statt Löschen der ganzen Liste",
                "Sie werden automatisch auf sämtliche Interfaces des Routers angewendet, ohne Zuweisung per Befehl",
                "Sie benötigen keine permit-Anweisungen, da benannte Listen standardmäßig allen Verkehr erlauben",
                "Sie werden grundsätzlich in Hardware verarbeitet und filtern dadurch schneller als nummerierte ACLs",
              ],
              correct: 0,
              explain:
                "ip access-list extended BLOCK-GUEST – mit Sequenznummern lassen sich Zeilen gezielt einfügen.",
            },
            {
              id: "imp_ci-sec-1_13",
              q: "Wie wird eine ACL auf einem Interface aktiviert?",
              options: [
                "access-list enable im globalen Konfigurationsmodus",
                "ip access-group <Name/Nr> in|out auf dem Interface",
                "ip acl start <Name> im Interface-Modus",
                "Sie wirkt automatisch nach Erstellung",
              ],
              correct: 1,
              explain:
                "Ohne Zuweisung mit Richtung filtert eine ACL gar nichts – häufiger Praxisfehler.",
            },
            {
              id: "imp_ci-sec-1_14",
              q: "Worin unterscheiden sich die Port-Security-Modi protect und restrict?",
              options: [
                "Es gibt keinen Unterschied, beide Modi sind identische Aliasnamen desselben Verhaltens",
                "protect schaltet den Port bei einem Verstoß dauerhaft ab und versetzt ihn in err-disabled",
                "restrict lässt Frames fremder MAC-Adressen ungehindert passieren und zählt keine Verstöße",
                "Beide verwerfen Frames fremder MACs, restrict zählt zusätzlich Verstöße und loggt/trapt",
              ],
              correct: 3,
              explain:
                "shutdown (Standard) deaktiviert den Port komplett (err-disabled) – die drastischste Variante.",
            },
            {
              id: "imp_ci-sec-1_15",
              q: "Wie viele MAC-Adressen erlaubt Port Security pro Port standardmäßig?",
              options: ["1", "Unbegrenzt", "8", "16"],
              correct: 0,
              explain: "switchport port-security maximum 2, z. B. für IP-Telefon plus PC dahinter.",
            },
            {
              id: "imp_ci-sec-1_16",
              q: "Was prüft DHCP Snooping?",
              options: [
                "DHCP-Server-Antworten sind nur auf vertrauenswürdigen (trusted) Ports erlaubt",
                "Ob die Clients gültige Lizenzen für ihre DHCP-Nutzung bezahlt haben",
                "Ob die WLAN-Verschlüsselung aller Access Points mindestens WPA2 nutzt",
                "Ob die vergebene Lease-Dauer die konfigurierte Höchstdauer einhält",
              ],
              correct: 0,
              explain:
                "Rogue-DHCP wird geblockt. Uplinks zum echten DHCP-Server = trusted, Access-Ports = untrusted; nebenbei entsteht die Binding-Tabelle.",
            },
            {
              id: "imp_ci-sec-1_17",
              q: "Worauf baut Dynamic ARP Inspection (DAI) auf?",
              options: [
                "Auf der DHCP-Snooping-Binding-Tabelle",
                "Auf der Routing-Tabelle",
                "Auf VTP",
                "Auf NTP",
              ],
              correct: 0,
              explain:
                "ARP-Antworten mit falscher IP/MAC-Zuordnung werden verworfen. Schutz gegen ARP-Spoofing/Man-in-the-Middle im Access-Bereich.",
            },
            {
              id: "imp_ci-sec-1_18",
              q: "Mit welchem Befehl kann der Switch err-disabled-Ports automatisch reaktivieren?",
              options: [
                "no err forever auf dem betroffenen Interface",
                "reload in 5 (geplanter Neustart des Switches)",
                "errdisable recovery cause <Grund> (+ Intervall)",
                "port revive all im globalen Konfigurationsmodus",
              ],
              correct: 2,
              explain:
                "Sinnvoll mit Bedacht – die Ursache (z. B. fremdes Gerät) sollte trotzdem untersucht werden.",
            },
            {
              id: "imp_ci-sec-1_19",
              q: "Wozu dienen remark-Zeilen in ACLs?",
              options: [
                "Als Kommentare zur Dokumentation der Regeln",
                "Sie löschen die ACL",
                "Sie filtern Verkehr doppelt",
                "Sie sind Pflichtzeilen",
              ],
              correct: 0,
              explain:
                "access-list 110 remark Block Gast-Telnet – wer in 6 Monaten liest, dankt es.",
            },
          ],
        },
      ],
    },
    {
      id: "ci-v6",
      title: "IPv6 auf Cisco",
      lessons: [
        {
          id: "ci-v6-1",
          title: "IPv6-Konfiguration",
          content: [
            { type: "heading", value: "IPv6 auf Cisco Router aktivieren" },
            {
              type: "text",
              value:
                "Erster Schritt: ipv6 unicast-routing im globalen Konfigurationsmodus. Ohne diesen Befehl routet der Router KEINE IPv6-Pakete! Dann IPv6-Adressen auf Interfaces konfigurieren.",
            },
            { type: "heading", value: "Interface-Konfiguration" },
            {
              type: "code",
              value:
                "! IPv6 Routing aktivieren\nRouter(config)# ipv6 unicast-routing\n!\n! Interface konfigurieren\nRouter(config)# interface GigabitEthernet0/0\nRouter(config-if)# ipv6 address 2001:db8:acad:1::1/64\nRouter(config-if)# ipv6 address fe80::1 link-local\nRouter(config-if)# no shutdown\n!\n! Statische Route\nRouter(config)# ipv6 route 2001:db8:acad:2::/64 2001:db8:acad:99::2\n!\n! Verifizierung\nRouter# show ipv6 interface brief\nRouter# show ipv6 route\nRouter# show ipv6 neighbors",
            },
            { type: "heading", value: "IPv6 Adresstypen in der Praxis" },
            {
              type: "text",
              value:
                "Global Unicast (2000::/3): Wie öffentliche IPv4, weltweit routbar. Link-Local (fe80::/10): Automatisch auf jedem Interface, nur im lokalen Segment gültig. Wird für Routing-Protokolle (OSPFv3) und Neighbor Discovery verwendet. Multicast: ff02::1 (alle Knoten), ff02::2 (alle Router), ff02::5 (OSPF-Router).",
            },
            { type: "heading", value: "Migrationsmethoden" },
            {
              type: "text",
              value:
                "Dual-Stack: IPv4 + IPv6 gleichzeitig auf allen Geräten. Häufigster Migrationspfad. Tunneling (6to4, ISATAP, Teredo): IPv6-Pakete in IPv4 kapseln für Transport über IPv4-only-Netze. NAT64: Übersetzung zwischen IPv6 und IPv4. Für Kommunikation mit reinen IPv4-Diensten.",
            },
            { type: "heading", value: "Vertiefung: IPv6 auf dem Interface verstehen" },
            {
              type: "text",
              value:
                "Ein Cisco-Interface bekommt IPv6 in drei Varianten: statisch (ipv6 address 2001:db8:10::1/64), per SLAAC vom Router-Advertisement (ipv6 address autoconfig) oder DHCPv6. ipv6 unicast-routing schaltet das Routing (und damit die RAs) frei – der häufigste vergessene Befehl! Jedes Interface trägt zusätzlich IMMER eine Link-Local-Adresse (fe80::/10, automatisch aus der MAC per EUI-64 oder zufällig) – Nachbarschaft (NDP statt ARP!), Routing-Protokolle und Gateways laufen darüber; deshalb ist „Gateway = fe80::…“ bei IPv6 völlig normal. Diagnose: show ipv6 interface brief (Adressen), show ipv6 neighbors (NDP-Tabelle = ARP-Ersatz), ping ipv6 fe80::… %interface (Link-Local braucht Interface-Angabe!).",
            },
            { type: "heading", value: "Übungsaufgabe: SLAAC funktioniert nicht" },
            {
              type: "text",
              value:
                "Clients im VLAN 10 bekommen keine IPv6-Adressen per SLAAC. Auf dem Router: interface vlan 10 hat ipv6 address 2001:db8:10::1/64, aber show ipv6 interface zeigt keine Router-Advertisements. Nenne die wahrscheinlichste Ursache samt Befehl und zwei Prüfschritte danach.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: Ursache: ipv6 unicast-routing fehlt global – ohne Routing sendet der Router keine RAs, SLAAC bleibt stumm. Beheben: conf t → ipv6 unicast-routing. Prüfen: (1) show ipv6 interface vlan 10 – RAs aktiv, Präfix wird angekündigt? (2) Am Client: Adresse aus 2001:db8:10::/64 vorhanden und ping auf die Link-Local des Routers? Bonuswissen: „suppress-ra“ am Interface wäre Ursache Nummer zwei.",
            },
          ],
          quiz: [
            {
              id: "imp_ci-v6-1_0",
              q: "IPv6-Routing aktivieren?",
              options: ["router ipv6", "ip routing", "ipv6 unicast-routing", "ipv6 enable"],
              correct: 2,
              explain: "ipv6 unicast-routing im globalen Config-Modus.",
            },
            {
              id: "imp_ci-v6-1_1",
              q: "ff02::1 auf Cisco?",
              options: [
                "Alle Knoten im lokalen Segment",
                "Nur der Router",
                "Broadcast",
                "Alle Router",
              ],
              correct: 0,
              explain: "ff02::1 = Multicast an alle IPv6-Knoten im Segment.",
            },
            {
              id: "imp_ci-v6-1_2",
              q: "show ipv6 neighbors zeigt?",
              options: [
                "Routing-Tabelle",
                "IPv6 Neighbor Cache (wie ARP-Tabelle)",
                "Interface-Status",
                "ACLs",
              ],
              correct: 1,
              explain: "Neighbor Cache = IPv6-Äquivalent zur ARP-Tabelle.",
            },
            {
              id: "imp_ci-v6-1_3",
              q: "Dual-Stack bedeutet?",
              options: [
                "Zwei Firewalls",
                "IPv4 + IPv6 gleichzeitig",
                "Zwei NICs",
                "Doppelte Bandbreite",
              ],
              correct: 1,
              explain: "Beide Protokolle parallel auf allen Geräten.",
            },
            {
              id: "imp_ci-v6-1_4",
              q: "show ipv6 interface brief?",
              options: [
                "Routing-Tabelle",
                "IPv6-Adressen aller Interfaces",
                "Config",
                "Nur Link-Local",
              ],
              correct: 1,
              explain: "Zeigt IPv6-Adressen und Status aller Interfaces.",
            },
            {
              id: "imp_ci-v6-1_5",
              q: "fe80:: = ?",
              options: [
                "Global Unicast",
                "Anycast",
                "Multicast",
                "Link-Local (nur lokales Segment)",
              ],
              correct: 3,
              explain: "fe80::/10 = Link-Local, nur im direkten Segment gültig.",
            },
            {
              id: "imp_ci-v6-1_6",
              q: "Router Advertisement?",
              options: ["DHCP", "ARP", "Router sendet Präfix (SLAAC)", "DNS"],
              correct: 2,
              explain: "RA für Autokonfig.",
            },
            {
              id: "imp_ci-v6-1_7",
              q: "ipv6 route ::/0?",
              options: ["Loopback", "Multicast", "Link-Local", "Default Route IPv6"],
              correct: 3,
              explain: "Wie 0.0.0.0/0.",
            },
            {
              id: "imp_ci-v6-1_8",
              q: "show ipv6 route?",
              options: ["Neighbors", "Config", "Interfaces", "IPv6 Routing-Tabelle"],
              correct: 3,
              explain: "IPv6-Routen.",
            },
            {
              id: "imp_ci-v6-1_9",
              q: "NDP?",
              options: ["DHCP", "Routing", "Neighbor Discovery (ersetzt ARP)", "DNS"],
              correct: 2,
              explain: "Findet Nachbarn.",
            },
            {
              id: "imp_ci-v6-1_10",
              q: "Worin unterscheiden sich SLAAC und Stateful DHCPv6?",
              options: [
                "SLAAC: Client bildet die Adresse selbst aus dem RA-Präfix; Stateful DHCPv6: Server vergibt und verwaltet Adressen zentral",
                "SLAAC funktioniert nur mit IPv4-Adressen; für IPv6 muss zwingend Stateful DHCPv6 eingesetzt werden",
                "DHCPv6 existiert nicht; unter IPv6 ist SLAAC das einzige verfügbare Verfahren zur Adressvergabe",
                "Beide Verfahren sind identisch und unterscheiden sich nur im Namen der jeweiligen RFC-Dokumente",
              ],
              correct: 0,
              explain:
                "Mischform Stateless DHCPv6: Adresse per SLAAC, Zusatzinfos (DNS) vom DHCP-Server – gesteuert über die RA-Flags.",
            },
            {
              id: "imp_ci-v6-1_11",
              q: "Wie entsteht ein Interface-Identifier nach EUI-64?",
              options: [
                "Die vorhandene IPv4-Adresse wird an das Präfix angehängt und aufgefüllt",
                "Die MAC-Adresse wird unverändert verdoppelt und als Identifier verwendet",
                "FFFE wird in die Mitte der MAC eingefügt und das 7. Bit invertiert",
                "Eine reine Zufallszahl ohne feste Bildungsregel bei jedem Systemstart",
              ],
              correct: 2,
              explain:
                "Aus 00:1A:2B:3C:4D:5E wird 021A:2BFF:FE3C:4D5E – aus Datenschutzgründen nutzen Clients heute oft Privacy Extensions statt EUI-64.",
            },
            {
              id: "imp_ci-v6-1_12",
              q: "Welcher Bereich ist für globale Unicast-Adressen vorgesehen?",
              options: ["fe80::/10", "ff00::/8", "fc00::/7", "2000::/3"],
              correct: 3,
              explain:
                "fe80 = link-lokal, fc00/fd00 = Unique Local (privates Pendant), ff00 = Multicast.",
            },
            {
              id: "imp_ci-v6-1_13",
              q: "Was sind Unique Local Addresses (ULA)?",
              options: [
                "Öffentliche Serveradressen",
                "Privat nutzbare IPv6-Adressen aus fc00::/7",
                "Multicast-Gruppen",
                "Veraltete Adressen",
              ],
              correct: 1,
              explain:
                "Nicht im Internet geroutet, praktisch fd00::/8. Das IPv6-Gegenstück zu RFC-1918-Adressen – für rein interne Kommunikation.",
            },
            {
              id: "imp_ci-v6-1_14",
              q: "Welche Multicast-Gruppe erreicht alle Router am Link?",
              options: ["2001::2", "fe80::1", "ff02::2", "ff02::1"],
              correct: 2,
              explain:
                "ff02::1 = alle Knoten, ff02::2 = alle Router – ersetzt Broadcasts, die es in IPv6 nicht mehr gibt.",
            },
            {
              id: "imp_ci-v6-1_15",
              q: "Warum gibt es in IPv6 keinen Broadcast?",
              options: [
                "Multicast (und Anycast) übernehmen die Aufgaben gezielter und effizienter",
                "Broadcast existiert in IPv6 unverändert weiter und wird genauso genutzt wie in IPv4",
                "IPv6-Subnetze sind zu klein, als dass sich ein Broadcast an alle Teilnehmer lohnen würde",
                "Regulierungsbehörden haben Broadcast aus rechtlichen Gründen international untersagt",
              ],
              correct: 0,
              explain:
                "ARP-Broadcasts ersetzt z. B. Neighbor Discovery per Solicited-Node-Multicast – nur betroffene Hosts hören zu.",
            },
            {
              id: "imp_ci-v6-1_16",
              q: "Was ist die Solicited-Node-Multicast-Adresse?",
              options: [
                "Die Loopback-Adresse",
                "ff02::1:ff + letzte 24 Bit der Zieladresse",
                "Eine Anycast-Adresse des Routers",
                "Die Adresse des DNS-Servers",
              ],
              correct: 1,
              explain:
                "Ziel der Neighbor Solicitation statt Broadcast. So stört die Adressauflösung nicht mehr alle Geräte im Segment wie früher ARP.",
            },
            {
              id: "imp_ci-v6-1_17",
              q: "Was kennzeichnet eine Anycast-Adresse?",
              options: [
                "Eine ungültige Adresse",
                "Eine Adresse für genau ein Gerät",
                "Dieselbe Adresse auf mehreren Systemen",
                "Nur für Drucker",
              ],
              correct: 2,
              explain:
                "Das Routing liefert zum nächstgelegenen System. Klassiker: weltweite DNS-Resolver wie 2001:4860:4860::8888 – jeder erreicht die nächste Instanz.",
            },
            {
              id: "imp_ci-v6-1_18",
              q: "Mit welchem Befehl bezieht ein Cisco-Interface seine Adresse per SLAAC?",
              options: [
                "ipv6 slaac on",
                "ip address dhcp v6",
                "ipv6 enable only",
                "ipv6 address autoconfig",
              ],
              correct: 3,
              explain:
                "ipv6 enable allein erzeugt nur die link-lokale Adresse; autoconfig nutzt zusätzlich das RA-Präfix.",
            },
            {
              id: "imp_ci-v6-1_19",
              q: "Wie lautet eine statische IPv6-Route auf das Netz 2001:db8:5::/64 via fe80::1 auf Gi0/0?",
              options: [
                "ipv6 static 2001:db8:5::/64 GigabitEthernet0/0 fe80::1",
                "ipv6 route 2001:db8:5::/64 GigabitEthernet0/0 fe80::1",
                "route add v6 2001:db8:5::/64 gw fe80::1 dev Gi0/0",
                "ip route 2001:db8:5::/64 GigabitEthernet0/0 fe80::1",
              ],
              correct: 1,
              explain:
                "Bei link-lokalem Next-Hop MUSS das Ausgangsinterface mit angegeben werden – fe80-Adressen sind nur je Link eindeutig.",
            },
          ],
        },
      ],
    },
    {
      id: "ci-infra",
      title: "Infrastructure Services",
      lessons: [
        {
          id: "ci-inf-1",
          title: "DHCP, NAT & NTP auf Cisco",
          content: [
            {
              type: "text",
              value:
                "Warum diese drei Dienste zusammen? DHCP, NAT und NTP sind die Grunddienste, die ein Cisco-Router in kleinen Netzen selbst übernehmen kann: DHCP verteilt Adressen an die Clients (excluded-address schützt fest vergebene IPs wie Gateway und Server vor Doppelvergabe), NAT übersetzt die privaten Adressen auf die öffentliche (Static NAT für von außen erreichbare Server, PAT für alle Clients hinter EINER öffentlichen IP – das Standardszenario), und NTP hält die Uhren synchron – ohne korrekte Zeit sind Logs nicht korrelierbar und Zertifikate schlagen fehl. Die show-Befehle sind der Prüfungsliebling: Sie zeigen, ob die Theorie auf dem Gerät wirklich läuft.",
            },
            { type: "heading", value: "DHCP-Server auf Cisco-Router" },
            {
              type: "code",
              value:
                "ip dhcp excluded-address 192.168.1.1 192.168.1.10\nip dhcp pool LAN_POOL\n network 192.168.1.0 255.255.255.0\n default-router 192.168.1.1\n dns-server 8.8.8.8\n lease 7\n!\nshow ip dhcp binding    ! Vergebene Adressen\nshow ip dhcp pool       ! Pool-Statistiken",
            },
            { type: "heading", value: "NAT-Konfiguration" },
            {
              type: "code",
              value:
                "! Static NAT (1:1)\nip nat inside source static 192.168.1.100 203.0.113.50\n! PAT / NAT Overload\naccess-list 1 permit 192.168.1.0 0.0.0.255\nip nat inside source list 1 interface Gi0/1 overload\n!\ninterface Gi0/0\n ip nat inside\ninterface Gi0/1\n ip nat outside\n!\nshow ip nat translations",
            },
            { type: "heading", value: "NTP (Zeitsynchronisation)" },
            { type: "code", value: "ntp server 0.de.pool.ntp.org\nshow ntp status\nshow clock" },
            {
              type: "note",
              value:
                "NTP ist kritisch für Logging, Zertifikate und Kerberos-Authentifizierung. Falsche Zeit = Authentifizierungsfehler.",
            },
            {
              type: "heading",
              value: "Vertiefung: Die drei Dienste im Zusammenspiel + Fehlersuche",
            },
            {
              type: "text",
              value:
                "Praxis-Reihenfolge bei „Clients kommen nicht ins Internet“ auf einem Cisco-Router mit DHCP+NAT: (1) DHCP: show ip dhcp binding – bekommen Clients Adressen? Pool-Bereich und excluded-address kollisionsfrei? (2) NAT: show ip nat translations – entstehen Übersetzungen? Wenn nicht: Sind ip nat inside/outside auf den RICHTIGEN Interfaces gesetzt (der meistgemachte Fehler!) und matcht die ACL der NAT-Regel die Client-IPs? (3) NTP: show ntp status – synchronisiert? Falsche Uhrzeit zerlegt Zertifikatsprüfungen und macht Logs wertlos (Korrelation!). Merke die Rollen: DHCP verteilt, NAT übersetzt, NTP synchronisiert – drei unabhängige Dienste, die in Prüfungsszenarien gern gemeinsam kaputt sind.",
            },
            { type: "heading", value: "Übungsaufgabe: NAT ohne Übersetzungen" },
            {
              type: "text",
              value:
                "Clients haben korrekte DHCP-Adressen (192.168.1.x), aber show ip nat translations bleibt leer. Die NAT-Regel lautet: ip nat inside source list 1 interface gi0/0 overload; access-list 1 permit 192.168.2.0 0.0.0.255. Finde die zwei möglichen Fehler und korrigiere.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: Fehler 1: Die ACL matcht das falsche Netz – Clients sitzen in 192.168.1.0/24, die Liste erlaubt 192.168.2.0/24 → access-list 1 permit 192.168.1.0 0.0.0.255. Fehler 2 (immer prüfen): ip nat inside auf dem LAN-Interface und ip nat outside auf gi0/0 gesetzt? Ohne die Interface-Rollen entstehen nie Übersetzungen. Test: Client-Ping auf 8.8.8.8, dann show ip nat translations – Einträge mit inside local/global sichtbar.",
            },
          ],
          quiz: [
            {
              id: "imp_ci-inf-1_0",
              q: "NAT Overload (PAT) nutzt was zur Unterscheidung?",
              options: ["MAC-Adressen", "TTL-Werte", "VLAN-Tags", "Portnummern"],
              correct: 3,
              explain: "PAT unterscheidet interne Hosts über verschiedene Quellports.",
            },
            {
              id: "imp_ci-inf-1_1",
              q: "Welcher Befehl zeigt DHCP-Zuweisungen auf Cisco?",
              options: [
                "show dhcp status",
                "show ip dhcp binding",
                "show dhcp leases",
                "show ip dhcp pool",
              ],
              correct: 1,
              explain: "show ip dhcp binding zeigt alle vergebenen Adressen.",
            },
            {
              id: "imp_ci-inf-1_2",
              q: "ip dhcp excluded-address?",
              options: [
                "IP-Bereich von Vergabe ausschließen (z. B. Gateway)",
                "Deaktiviert den DHCP-Dienst auf dem Router komplett",
                "Setzt den DNS-Server, den Clients per Lease erhalten",
                "Löscht den kompletten DHCP-Pool aus der Konfiguration",
              ],
              correct: 0,
              explain: "Bestimmte IPs (Gateway, Server) werden nicht per DHCP vergeben.",
            },
            {
              id: "imp_ci-inf-1_3",
              q: "show ip dhcp binding?",
              options: [
                "Aktuell vergebene IP-MAC-Zuordnungen",
                "DNS-Einträge",
                "DHCP Statistik",
                "Pool-Konfiguration",
              ],
              correct: 0,
              explain: "Zeigt, welche IPs an welche MAC-Adressen vergeben wurden.",
            },
            {
              id: "imp_ci-inf-1_4",
              q: "NTP = ?",
              options: [
                "Node Testing Process",
                "Network Transfer Protocol",
                "Network Time Protocol",
                "New Tunnel Protocol",
              ],
              correct: 2,
              explain:
                "Zeitsynchronisation. NTP: Synchronisiert Uhren aller Geräte im Netzwerk (wichtig für Logs!).",
            },
            {
              id: "imp_ci-inf-1_5",
              q: "NTP Wichtigkeit?",
              options: [
                "Optional, da Gerätekristalle genau genug laufen",
                "Nur für die Gültigkeitsprüfung von Zertifikaten nötig",
                "Zeitsynchronisation für Log-Korrelation und Sicherheit",
                "Reiner Komfort für korrekte Uhrzeit-Anzeige im Login",
              ],
              correct: 2,
              explain:
                "Synchrone Uhren: Logs vergleichbar, Zertifikate gültig, Kerberos funktioniert.",
            },
            {
              id: "imp_ci-inf-1_6",
              q: "ip nat inside?",
              options: ["NAT aus", "Internes Interface", "DHCP", "Extern"],
              correct: 1,
              explain: "Zeigt zum LAN.",
            },
            {
              id: "imp_ci-inf-1_7",
              q: "show ip nat translations?",
              options: ["DHCP", "Config", "NAT-Tabelle", "Routing"],
              correct: 2,
              explain: "IP-Übersetzungen.",
            },
            {
              id: "imp_ci-inf-1_8",
              q: "NTP warum?",
              options: [
                "Komfort",
                "Zertifikate nur",
                "Optional",
                "Zeitsync für Logs und Sicherheit",
              ],
              correct: 3,
              explain: "Logs korrelieren.",
            },
            {
              id: "imp_ci-inf-1_9",
              q: "DHCP Relay?",
              options: ["Server", "DHCP über Subnetzgrenzen weiterleiten", "DNS", "Deaktivieren"],
              correct: 1,
              explain: "ip helper-address.",
            },
            {
              id: "imp_ci-inf-1_10",
              q: "Wozu dient ip helper-address auf einem Router-Interface?",
              options: [
                "Er beschleunigt NAT, indem Übersetzungstabellen für häufige Ziele im Voraus aufgebaut werden",
                "Er aktiviert NTP auf dem Interface, damit Clients die Uhrzeit direkt vom Router beziehen können",
                "Er hilft beim Login, indem Anmeldedaten der Clients an den RADIUS-Server weitergereicht werden",
                "DHCP-Broadcasts der Clients werden als Unicast an den zentralen DHCP-Server weitergeleitet (Relay)",
              ],
              correct: 3,
              explain:
                "Ohne Relay bräuchte jedes VLAN einen eigenen DHCP-Server – der Befehl gehört auf das Client-seitige SVI/Interface.",
            },
            {
              id: "imp_ci-inf-1_11",
              q: "Was bedeutet 'inside local' vs. 'inside global' bei Cisco-NAT?",
              options: [
                "Inside local = private interne Adresse, inside global = übersetzte öffentliche Adresse desselben Hosts",
                "Inside local bezeichnet IPv4-Adressen, inside global die zugehörigen IPv6-Adressen",
                "Reine Marketingbegriffe von Cisco ohne technische Bedeutung in der Konfiguration",
                "Beides sind externe Adressen aus dem öffentlichen Adressraum des Providers",
              ],
              correct: 0,
              explain:
                "Die Begriffe tauchen in show ip nat translations auf – wer sie kennt, liest die Tabelle fehlerfrei.",
            },
            {
              id: "imp_ci-inf-1_12",
              q: "Wofür nutzt man statisches NAT typischerweise?",
              options: [
                "Für viele surfende Clients, die sich dynamisch eine öffentliche Adresse teilen sollen",
                "Ein interner Server soll unter einer festen öffentlichen Adresse dauerhaft erreichbar sein",
                "Für VLAN-Trunks, damit mehrere VLANs über ein einzelnes Interface transportiert werden",
                "Zum Energiesparen, weil statische Übersetzungen die CPU des Routers stark entlasten",
              ],
              correct: 1,
              explain:
                "ip nat inside source static 10.0.0.10 203.0.113.10 – feste 1:1-Zuordnung; surfende Clients nutzen PAT.",
            },
            {
              id: "imp_ci-inf-1_13",
              q: "Was sagt das NTP-Stratum aus?",
              options: [
                "Die Genauigkeit der Uhr direkt in Millisekunden: Stratum 3 bedeutet eine maximale Abweichung von 3 ms zur Referenzzeit",
                "Die Entfernung zur Referenzuhr: Stratum 1 hängt direkt an einer Referenz (z. B. GPS), höhere Werte sind weiter entfernt",
                "Die Anzahl der Clients, die ein Server maximal gleichzeitig synchronisieren darf, bevor er neue Anfragen ablehnt",
                "Die aktuell übertragene Uhrzeit in UTC einschließlich der geltenden Schaltsekunden-Korrektur",
              ],
              correct: 1,
              explain:
                "Stratum 16 = unsynchronisiert. Interne Geräte synchronisieren auf wenige interne NTP-Server, diese auf externe Quellen.",
            },
            {
              id: "imp_ci-inf-1_14",
              q: "Mit welchem Befehl wird ein Cisco-Gerät NTP-Client eines Servers 10.0.0.1?",
              options: [
                "time sync 10.0.0.1",
                "ntp client enable",
                "clock set 10.0.0.1",
                "ntp server 10.0.0.1",
              ],
              correct: 3,
              explain:
                "Prüfen mit show ntp status / show ntp associations – korrekte Zeit ist Voraussetzung für auswertbare Logs und Zertifikate.",
            },
            {
              id: "imp_ci-inf-1_15",
              q: "Was legt die DHCP-Lease-Time fest?",
              options: [
                "Die maximale Anzahl an Clients, die der DHCP-Server gleichzeitig bedienen kann",
                "Wie lange eine zugewiesene Adresse gültig ist, bevor der Client verlängern muss",
                "Die ausgehandelte Übertragungsgeschwindigkeit des Switch-Ports des Clients",
                "Den genauen Zeitstempel, zu dem die Adresse an den Client vergeben wurde",
              ],
              correct: 1,
              explain:
                "Kurze Leases (z. B. Gast-WLAN) geben Adressen schnell frei; lange Leases reduzieren Broadcast-Verkehr.",
            },
            {
              id: "imp_ci-inf-1_16",
              q: "Wie erkennt ein DHCP-Server einen Adresskonflikt vor der Vergabe?",
              options: [
                "Gar nicht",
                "Durch Nachfrage beim Admin",
                "Per Ping auf die Adresse",
                "Über DNS",
              ],
              correct: 2,
              explain:
                "Cisco: konfigurierbar mit ip dhcp ping packets. Clients prüfen zusätzlich per Gratuitous ARP – doppelte Vergaben fallen so meist sofort auf.",
            },
            {
              id: "imp_ci-inf-1_17",
              q: "Welche zwei Befehle gehören mindestens in einen Cisco-DHCP-Pool?",
              options: [
                "enable secret <Passwort> und line vty 0 4",
                "ip route 0.0.0.0 0.0.0.0 und ntp server <IP>",
                "hostname <Name> und banner motd <Text>",
                "network <Netz> <Maske> und default-router <Gateway>",
              ],
              correct: 3,
              explain:
                "Dazu üblicherweise dns-server und domain-name; ip dhcp excluded-address hält statische Adressen frei.",
            },
            {
              id: "imp_ci-inf-1_18",
              q: "Wie leert man die NAT-Übersetzungstabelle für die Fehlersuche?",
              options: ["no ip nat", "clear ip nat translation *", "reload", "delete nat all"],
              correct: 1,
              explain:
                "Hängende Einträge können Tests verfälschen – nach dem Löschen baut sich die Tabelle sofort neu auf.",
            },
            {
              id: "imp_ci-inf-1_19",
              q: "In welcher Reihenfolge wird PAT-Overload klassisch konfiguriert?",
              options: [
                "Zuerst den DNS-Server eintragen, danach die VLANs anlegen – NAT übernimmt anschließend automatisch deren Adressbereiche",
                "NAT konfiguriert sich selbst, sobald das WAN-Interface eine öffentliche Adresse per DHCP erhält; weitere Befehle entfallen",
                "ACL für interne Netze → ip nat inside source list <ACL> interface <WAN> overload → Interfaces mit ip nat inside/outside markieren",
                "Grundsätzlich genügt der einzelne Befehl ip nat enable global, der ACL und Interface-Rollen automatisch ableitet",
              ],
              correct: 2,
              explain:
                "Fehlt das inside/outside-Tagging auf den Interfaces, übersetzt NAT nichts – häufigster Laborfehler.",
            },
          ],
        },
      ],
    },
    {
      id: "ci-auto",
      title: "Netzwerk-Automatisierung",
      lessons: [
        {
          id: "ci-auto-1",
          title: "Automation & Programmability Basics",
          content: [
            { type: "heading", value: "Warum Automatisierung?" },
            {
              type: "text",
              value:
                "Manuelles CLI-Management skaliert nicht: 100 Switches einzeln konfigurieren ist fehleranfällig und zeitintensiv. Automatisierung spart Zeit, reduziert Fehler und sorgt für konsistente Konfigurationen.",
            },
            { type: "heading", value: "REST APIs" },
            {
              type: "text",
              value:
                "Netzwerkgeräte bieten zunehmend APIs an. HTTP-Methoden: GET (lesen), POST (erstellen), PUT (ersetzen), PATCH (ändern), DELETE (löschen). Datenformat: JSON oder XML. Cisco DNA Center, Meraki Dashboard – alle API-gesteuert.",
            },
            { type: "heading", value: "Datenformate: JSON vs. YAML vs. XML" },
            {
              type: "code",
              value:
                '// JSON (JavaScript Object Notation)\n{"hostname": "SW01", "vlans": [10, 20, 30]}\n\n# YAML (Ansible-Standard)\nhostname: SW01\nvlans:\n  - 10\n  - 20\n  - 30\n\n<!-- XML -->\n<device><hostname>SW01</hostname></device>',
            },
            { type: "heading", value: "Configuration Management Tools" },
            {
              type: "text",
              value:
                "Ansible: Agentless, YAML Playbooks, Push-basiert, SSH. Sehr verbreitet für Netzwerk-Automation. Puppet/Chef: Agent-basiert, eher für Server. Terraform: Infrastructure as Code, für Cloud-Provisioning. Python + Netmiko/NAPALM: Skriptbasierte Automation für Netzwerkgeräte.",
            },
            {
              type: "note",
              value:
                "Automatisierung ist CCNA-Prüfungsthema seit 2020 und wird in der FiSi-Ausbildung immer wichtiger.",
            },
            {
              type: "heading",
              value: "Vertiefung: Warum Netzwerk-Automatisierung – und die Bausteine",
            },
            {
              type: "text",
              value:
                'Handarbeit skaliert nicht: 50 Switches einzeln per SSH konfigurieren dauert Tage und produziert Drift (jeder Switch ein Unikat). Automatisierung ersetzt CLI-Sitzungen durch APIs und strukturierte Daten: REST-APIs (HTTP-Verben GET/POST/PUT/DELETE gegen Controller wie DNA Center), Datenformate JSON (leichtgewichtig, {"vlan": 20}) und YAML (menschenlesbar, Ansible-Playbooks), NETCONF/RESTCONF mit YANG-Datenmodellen für Gerätekonfig, und Konfigurationsmanagement (Ansible: idempotente Playbooks statt Befehlslisten). Der Denkwechsel: Nicht mehr „welche Befehle tippe ich“, sondern „welchen SOLL-Zustand beschreibe ich“ – Versionskontrolle (Git) macht jede Änderung nachvollziehbar und rückrollbar.',
            },
            { type: "heading", value: "Übungsaufgabe: JSON lesen" },
            {
              type: "text",
              value:
                'Eine Controller-API liefert: {"device": "SW-ETAGE2", "interfaces": [{"name": "Gi1/0/7", "vlan": 30, "status": "down"}]}. a) Welche Aussage steckt darin? b) Mit welcher HTTP-Methode fragst du diesen Zustand ab, mit welcher änderst du das VLAN? c) Warum ist dieses Format automatisierungsfreundlicher als eine show-Ausgabe?',
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: a) Auf Switch SW-ETAGE2 liegt Port Gi1/0/7 in VLAN 30 und ist down. b) Abfragen: GET; ändern: PUT (Ressource ersetzen) bzw. PATCH (Teiländerung) – POST legt neu an, DELETE entfernt. c) JSON ist strukturiert und maschinenlesbar: Ein Skript greift device/interfaces[0].vlan direkt zu, statt Textausgaben fehleranfällig zu parsen; Felder sind stabil benannt, während show-Formate je Version variieren.",
            },
          ],
          quiz: [
            {
              id: "imp_ci-auto-1_0",
              q: "Welches Datenformat nutzt Ansible?",
              options: ["XML", "YAML", "JSON", "CSV"],
              correct: 1,
              explain: "Ansible Playbooks werden in YAML geschrieben.",
            },
            {
              id: "imp_ci-auto-1_1",
              q: "REST API: Daten abrufen = welche HTTP-Methode?",
              options: ["PUT", "GET", "POST", "DELETE"],
              correct: 1,
              explain: "GET = Daten lesen/abrufen.",
            },
            {
              id: "imp_ci-auto-1_2",
              q: "REST API auf Cisco?",
              options: ["Nicht möglich", "Nur SNMP", "RESTCONF / Cisco DNA Center API", "Nur CLI"],
              correct: 2,
              explain: "Moderne Cisco-Geräte bieten REST APIs für Automatisierung.",
            },
            {
              id: "imp_ci-auto-1_3",
              q: "JSON vs. YAML?",
              options: [
                "JSON speichert ausschließlich Text, keine Zahlen oder Listen",
                "JSON = geschweifte Klammern, YAML = Einrückung",
                "YAML ist ein binäres Format, nur maschinell lesbar",
                "Beide Formate sind syntaktisch identisch und austauschbar",
              ],
              correct: 1,
              explain: "JSON: {key: value}. YAML: key: value (einrückungsbasiert).",
            },
            {
              id: "imp_ci-auto-1_4",
              q: "Infrastructure as Code?",
              options: [
                "Infrastruktur per Code/Templates definieren und versionieren",
                "Jedes System einzeln von Hand über die Konsole konfigurieren",
                "Ein Schulungskonzept, um Administratoren Programmieren beizubringen",
                "Ein Verfahren, das ausschließlich in Public Clouds einsetzbar ist",
              ],
              correct: 0,
              explain: "IaC: Netzwerk/Server-Config als Code, reproduzierbar, versionierbar.",
            },
            {
              id: "imp_ci-auto-1_5",
              q: "YANG = ?",
              options: [
                "Programmiersprache",
                "Monitoring",
                "Datenbank",
                "Datenmodellierungssprache für Netzwerkconfig",
              ],
              correct: 3,
              explain: "YANG: Definiert Struktur von Netzwerkkonfigurationsdaten.",
            },
            {
              id: "imp_ci-auto-1_6",
              q: "NETCONF?",
              options: ["Konfigurationsprotokoll XML/SSH", "FW", "Monitor", "Routing"],
              correct: 0,
              explain: "Programmatisch.",
            },
            {
              id: "imp_ci-auto-1_7",
              q: "SDN?",
              options: [
                "Secure Digital",
                "Server DNS",
                "Software-Defined Networking",
                "Static Data",
              ],
              correct: 2,
              explain: "Zentrale Steuerung.",
            },
            {
              id: "imp_ci-auto-1_8",
              q: "Ansible Netzwerk?",
              options: ["Module für Cisco/Arista/Juniper", "Unmöglich", "Nur Server", "Nur Python"],
              correct: 0,
              explain: "Netzwerk-Module.",
            },
            {
              id: "imp_ci-auto-1_9",
              q: "Git für Config?",
              options: ["Versionierung, Rollback möglich", "Nur Code", "Unnötig", "Zu komplex"],
              correct: 0,
              explain: "Config as Code.",
            },
            {
              id: "imp_ci-auto-1_10",
              q: "Was unterscheidet Northbound- von Southbound-APIs im SDN?",
              options: [
                "Northbound-APIs übertragen mit höherer Priorität und geringerer Latenz als Southbound-Verbindungen",
                "Northbound-APIs sind ausschließlich für IPv6-Traffic zuständig, Southbound verwaltet das IPv4-Routing",
                "Northbound: Apps/Skripte sprechen mit dem Controller; Southbound: der Controller spricht mit den Netzgeräten",
                "Es gibt keinen Unterschied – beide Begriffe bezeichnen dieselbe Controller-Schnittstelle",
              ],
              correct: 2,
              explain:
                "Northbound meist REST/JSON; Southbound z. B. NETCONF, OpenFlow oder herstellerspezifische Protokolle.",
            },
            {
              id: "imp_ci-auto-1_11",
              q: "Welche Ebenen trennt SDN architektonisch?",
              options: [
                "Kabelgebundenes LAN und drahtloses WLAN in getrennte Verwaltungsbereiche",
                "Die Verkabelungsebene von der Steckverbinder- und Patchfeld-Ebene",
                "Die eigentliche Switch-Hardware vom Gehäuse und den Lüftereinheiten",
                "Control Plane (Entscheidungen, zentral im Controller) und Data Plane (Weiterleitung auf den Geräten)",
              ],
              correct: 3,
              explain:
                "Zentralisierte Steuerung ermöglicht netzweite Policies statt Gerät-für-Gerät-Konfiguration.",
            },
            {
              id: "imp_ci-auto-1_12",
              q: "Warum gilt Ansible als 'agentless'?",
              options: [
                "Es braucht keine Konfiguration",
                "Es verbindet sich per SSH/API – ohne installierte Agent-Software auf dem Ziel",
                "Weil es kostenlos ist",
                "Es läuft ohne Server",
              ],
              correct: 1,
              explain:
                "Gerade für Netzwerkgeräte ideal, auf denen sich keine Agents installieren lassen; Puppet/Chef setzen klassisch Agents ein.",
            },
            {
              id: "imp_ci-auto-1_13",
              q: "Welches Dateiformat verwenden Ansible-Playbooks?",
              options: ["Binär", "XML", "CSV", "YAML"],
              correct: 3,
              explain:
                "Einrückungen sind Syntax! Module wie ios_config setzen die Tasks auf Cisco-Geräten um.",
            },
            {
              id: "imp_ci-auto-1_14",
              q: "Was bedeutet Idempotenz bei Automatisierungswerkzeugen?",
              options: [
                "Mehrfaches Ausführen erzeugt denselben Zielzustand",
                "Ein symmetrisches Verschlüsselungsverfahren",
                "Jeder Lauf führt alle Schritte komplett neu aus",
                "Skripte lassen sich nur ein einziges Mal ausführen",
              ],
              correct: 0,
              explain:
                "Nur Abweichungen werden geändert. Beschreibt-den-Zielzustand-Denken statt Befehlslisten: 'VLAN 10 existiert' statt 'füge VLAN 10 hinzu'.",
            },
            {
              id: "imp_ci-auto-1_15",
              q: "Was ist Configuration Drift?",
              options: [
                "Ein Cisco-Lizenzmodell mit nutzungsabhängiger Abrechnung",
                "Ein WLAN-Phänomen, bei dem sich Funkkanäle gegenseitig überlagern",
                "Schleichende Abweichung der Ist-Konfiguration vom dokumentierten Soll",
                "Schleichender Verschleiß der Flash-Speicherzellen im Gerät",
              ],
              correct: 2,
              explain:
                "Z. B. durch manuelle Hotfixes. Gegenmittel: Versionierte Soll-Konfiguration (Git) plus regelmäßiger automatischer Abgleich.",
            },
            {
              id: "imp_ci-auto-1_16",
              q: "Worin unterscheiden sich NETCONF und RESTCONF im Transport?",
              options: [
                "NETCONF läuft über SSH (Port 830), RESTCONF über HTTPS mit REST-Semantik",
                "RESTCONF nutzt unverschlüsseltes Telnet auf Port 23, NETCONF dagegen HTTPS",
                "NETCONF überträgt grundsätzlich unverschlüsselt, nur RESTCONF unterstützt Verschlüsselung",
                "Beide Protokolle übertragen ihre Konfigurationsdaten ausschließlich per FTP-Dateitransfer",
              ],
              correct: 0,
              explain:
                "Beide nutzen YANG-Datenmodelle – RESTCONF ist der leichtgewichtige HTTP-Zugang zu denselben Modellen.",
            },
            {
              id: "imp_ci-auto-1_17",
              q: "Wie authentifizieren sich Skripte typischerweise gegen eine REST-API?",
              options: [
                "Über die im BIOS hinterlegte Seriennummer des ausführenden Rechners",
                "Mit der MAC-Adresse der Netzwerkkarte als Identitätsnachweis",
                "Mit Token/API-Key oder Benutzerdaten über HTTPS",
                "Gar nicht – REST-APIs sind grundsätzlich frei zugänglich",
              ],
              correct: 2,
              explain:
                "Schlüssel niemals im Klartext ins Repository. Secrets gehören in Vaults/Umgebungsvariablen – API-Keys im Git-Repo sind ein klassischer Sicherheitsvorfall.",
            },
            {
              id: "imp_ci-auto-1_18",
              q: "Welche JSON-Syntaxregeln gelten?",
              options: [
                "Die Einrückungstiefe ist syntaktisch bindend: falsch eingerückte Elemente führen wie bei YAML zu einem Parserfehler",
                "Schlüssel und Strings müssen in einfachen Anführungszeichen stehen, doppelte sind laut Spezifikation unzulässig",
                "Kommentare mit // oder /* */ sind an jeder Stelle erlaubt und werden von jedem JSON-Parser ignoriert",
                "Schlüssel in doppelten Anführungszeichen, Paare mit Doppelpunkt, Objekte {} und Arrays [], kein Komma nach dem letzten Element",
              ],
              correct: 3,
              explain:
                "Anders als YAML kennt Standard-JSON keine Kommentare – beliebte Stolperfalle in Prüfungsfragen.",
            },
            {
              id: "imp_ci-auto-1_19",
              q: "Was bedeutet 'Single Source of Truth' in der Netzautomatisierung?",
              options: [
                "Ein kommerzielles Backup-Produkt, das Konfigurationen täglich sichert",
                "Die Konfiguration existiert ausschließlich auf den Geräten selbst und wird dort gepflegt",
                "Eine zentrale, versionierte Quelle (z. B. Git-Repo/IPAM) definiert den Soll-Zustand",
                "Jeder Administrator dokumentiert seinen Netzbereich in einer eigenen lokalen Datei",
              ],
              correct: 2,
              explain:
                "Geräte werden daraus konfiguriert. Infrastructure as Code: Review per Merge Request, Rollback per Git – Konfigurationsänderungen werden nachvollziehbar.",
            },
          ],
        },
      ],
    },
    {
      id: "ci-cli",
      title: "Cisco IOS Befehlsreferenz",
      lessons: [
        {
          id: "ci-cli-1",
          title: "Cisco IOS CLI-Befehle",
          content: [
            { type: "heading", value: "IOS-Modi" },
            {
              type: "text",
              value:
                "User EXEC (>): Eingeschränkte Befehle (show, ping). Privileged EXEC (#): Alle show-Befehle, Debug, Copy. Wechsel: enable. Global Config (config)#: Systemweite Konfiguration. Wechsel: configure terminal. Interface Config (config-if)#: Port/Interface konfigurieren. Wechsel: interface GigabitEthernet0/1. VLAN Config (config-vlan)#: VLANs erstellen/benennen.",
            },
            { type: "heading", value: "Grundlegende Befehle" },
            {
              type: "text",
              value:
                "enable – In Privileged Mode wechseln. configure terminal (conf t) – In Global Config. hostname SWITCH01 – Gerätename setzen. enable secret Passw0rd – Privileged-Passwort (verschlüsselt). service password-encryption – Alle Passwörter verschlüsseln. banner motd #Zutritt verboten# – Login-Banner. no shutdown – Interface aktivieren. copy running-config startup-config (wr) – Konfiguration speichern!",
            },
            { type: "heading", value: "Show-Befehle (Diagnose)" },
            {
              type: "text",
              value:
                "show running-config – Aktuelle Konfiguration. show startup-config – Gespeicherte Konfiguration. show ip interface brief – Alle Interfaces mit IP und Status. show vlan brief – VLAN-Zuordnung. show interfaces trunk – Trunk-Status. show mac address-table – MAC-Adress-Tabelle. show ip route – Routing-Tabelle. show cdp neighbors – Direkt verbundene Cisco-Geräte. show version – IOS-Version, Uptime, Hardware. show interfaces Gi0/1 – Detail-Status eines Ports.",
            },
            { type: "heading", value: "Switch-Konfiguration" },
            {
              type: "text",
              value:
                "Interface konfigurieren: interface GigabitEthernet0/1, switchport mode access, switchport access vlan 10, no shutdown. Trunk: switchport mode trunk, switchport trunk allowed vlan 10,20. Port Security: switchport port-security, switchport port-security maximum 2, switchport port-security violation shutdown. STP: spanning-tree mode rapid-pvst, spanning-tree portfast (für Access-Ports).",
            },
            { type: "heading", value: "Router-Konfiguration" },
            {
              type: "text",
              value:
                "Interface IP: interface Gi0/0, ip address 192.168.1.1 255.255.255.0, no shutdown. Statische Route: ip route 10.0.0.0 255.255.255.0 192.168.1.254. Default-Route: ip route 0.0.0.0 0.0.0.0 203.0.113.1. DHCP: ip dhcp pool BUERO, network 192.168.10.0 255.255.255.0, default-router 192.168.10.1, dns-server 8.8.8.8. NAT: ip nat inside (LAN-Interface), ip nat outside (WAN-Interface), ip nat inside source list 1 interface Gi0/1 overload.",
            },
            { type: "heading", value: "Beispiel 1: Switch Initial-Setup" },
            {
              type: "text",
              value:
                "enable → conf t → hostname SW-EG-01 → enable secret Str0ngP@ss → line console 0 → password ConP@ss → login → ip domain-name firma.local → crypto key generate rsa modulus 2048 → username admin secret Adm1nP@ss → line vty 0 15 → login local → transport input ssh (SSH statt Telnet: braucht Domain, RSA-Key und lokalen Benutzer) → service password-encryption → banner motd #Unbefugter Zugriff verboten!# → interface vlan 1 → ip address 192.168.1.2 255.255.255.0 → no shutdown → exit → ip default-gateway 192.168.1.1 → copy run start.",
            },
            { type: "heading", value: "Beispiel 2: SSH statt Telnet" },
            {
              type: "text",
              value:
                "Telnet ist unverschlüsselt → immer SSH verwenden! hostname Router01 → ip domain-name firma.local → crypto key generate rsa (2048 Bit) → username admin privilege 15 secret P@ssw0rd → line vty 0 15 → transport input ssh → login local → ip ssh version 2. Zugriff: ssh -l admin 192.168.1.1 (von Linux/PuTTY).",
            },
            { type: "heading", value: "Beispiel 3: Troubleshooting-Workflow" },
            {
              type: "text",
              value:
                "Problem: PC in VLAN 10 kommt nicht ins Internet. 1) show vlan brief → Ist der Port im richtigen VLAN? 2) show interfaces Gi0/5 → Ist der Port up/up? 3) show interfaces trunk → Läuft der Trunk zum Router? 4) show ip route (auf Router) → Gibt es eine Route ins Internet? 5) show ip nat translations → Funktioniert NAT? 6) ping 8.8.8.8 source 192.168.10.1 (vom Router) → Hat der Router Internet?",
            },
            { type: "heading", value: "Übungsaufgabe 1: Switch Grundkonfiguration" },
            {
              type: "text",
              value:
                "Konfiguriere einen neuen Cisco 2960 Switch von Grund auf: Hostname 'SW-OG2-01', Passwort für Enable-Mode 'En@ble2026', Console-Passwort 'C0nsole!', SSH-Zugang für User 'admin' mit Passwort 'Adm!n2026', Domain 'firma.local', Login-Banner mit Warnung. Schreibe die kompletten Befehle.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nenable\nconfigure terminal\n\n! Hostname setzen\nhostname SW-OG2-01\n\n! Enable-Passwort (verschlüsselt)\nenable secret En@ble2026\n\n! Console-Zugang sichern\nline console 0\n password C0nsole!\n login\n exec-timeout 5 0\n logging synchronous\n exit\n\n! SSH konfigurieren\nip domain-name firma.local\ncrypto key generate rsa general-keys modulus 2048\nusername admin privilege 15 secret Adm!n2026\nip ssh version 2\n\nline vty 0 15\n transport input ssh\n login local\n exec-timeout 10 0\n exit\n\n! Alle Passwörter im Config verschlüsseln\nservice password-encryption\n\n! Login-Banner\nbanner motd #\n*** WARNUNG: Unbefugter Zugriff ist verboten! ***\n*** Alle Aktivitäten werden protokolliert.    ***\n#\n\n! Speichern\ncopy running-config startup-config",
            },
            { type: "heading", value: "Übungsaufgabe 2: Show-Befehle interpretieren" },
            {
              type: "text",
              value:
                "Du führst 'show ip interface brief' aus und erhältst:\nInterface         IP-Address    OK? Method Status    Protocol\nGi0/1           192.168.1.1   YES manual up        up\nGi0/2           unassigned    YES unset  down      down\nGi0/3           unassigned    YES unset  up        up\nVlan1             unassigned    YES unset  admin down down\nVlan10            192.168.10.1  YES manual up        up\n\nErkläre den Status jedes Interfaces und identifiziere mögliche Probleme.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nGi0/1: Status up/up, IP 192.168.1.1 manuell gesetzt → Alles OK, aktiver Port mit IP.\n\nGi0/2: Status down/down, keine IP → Interface ist physisch nicht verbunden ODER per 'shutdown' deaktiviert. Kein Problem, wenn absichtlich unbenutzt.\n\nGi0/3: Status up/up, KEINE IP → Port ist aktiv (Gerät angeschlossen), aber hat keine IP-Adresse. Als Access-Port normal (bekommt IP über VLAN). Als Management-Port wäre das ein Problem.\n\nVlan1: Status 'administratively down'/down → Wurde absichtlich deaktiviert (shutdown). Best Practice: Vlan1 deaktivieren und Management-VLAN nutzen (hier Vlan10).\n\nVlan10: Status up/up, IP 192.168.10.1 → Management-SVI, funktioniert korrekt. Dient als Gateway für VLAN 10.\n\nMögliches Problem: Gi0/2 ist down – wenn dort ein Gerät angeschlossen sein sollte: Kabel prüfen, 'no shutdown' eingeben, Port-Security prüfen (evtl. err-disabled).",
            },
            { type: "heading", value: "Übungsaufgabe 3: NAT-Konfiguration auf Router" },
            {
              type: "text",
              value:
                "Ein Unternehmen hat internes Netz 192.168.10.0/24, der ISP hat dem Router die öffentliche IP 203.0.113.5/30 zugewiesen. Konfiguriere NAT (PAT/Overload) auf dem Router, damit alle internen PCs über die eine öffentliche IP ins Internet kommen. Interface Gi0/0 ist LAN, Gi0/1 ist WAN.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nenable\nconfigure terminal\n\n! LAN-Interface als 'inside' markieren\ninterface GigabitEthernet0/0\n ip address 192.168.10.1 255.255.255.0\n ip nat inside\n no shutdown\n\n! WAN-Interface als 'outside' markieren\ninterface GigabitEthernet0/1\n ip address 203.0.113.5 255.255.255.252\n ip nat outside\n no shutdown\n\n! Access-List definiert, welche IPs geNATtet werden\naccess-list 1 permit 192.168.10.0 0.0.0.255\n\n! NAT-Regel: ACL 1 über WAN-Interface mit Overload (PAT)\nip nat inside source list 1 interface GigabitEthernet0/1 overload\n\n! Default-Route zum ISP-Gateway\nip route 0.0.0.0 0.0.0.0 203.0.113.6\n\n! Speichern\ncopy running-config startup-config\n\nPrüfung:\n- show ip nat translations → Zeigt aktive NAT-Einträge\n- show ip nat statistics → Zähler für Inside/Outside\n- Vom PC: ping 8.8.8.8 → Sollte funktionieren\n\nErklärung:\n- 0.0.0.255 = Wildcard-Mask (inverse Subnetzmaske)\n- 'overload' = PAT: Viele interne IPs teilen eine öffentliche IP über verschiedene Ports\n- 203.0.113.6 = Next-Hop (ISP-Gateway im /30-Netz)",
            },
          ],
          quiz: [
            {
              id: "imp_ci-cli-1_0",
              q: "Welcher Befehl wechselt in den Privileged Mode?",
              options: ["login", "enable", "sudo", "configure terminal"],
              correct: 1,
              explain: "enable: Wechsel von User EXEC (>) zu Privileged EXEC (#).",
            },
            {
              id: "imp_ci-cli-1_1",
              q: "Was macht 'copy running-config startup-config'?",
              options: [
                "Kopiert die Konfigurationsdatei auf einen USB-Datenträger",
                "Lädt die gespeicherte Startkonfiguration in den laufenden Betrieb",
                "Aktuelle Konfiguration dauerhaft speichern (überlebt Neustart)",
                "Löscht die gespeicherte Startkonfiguration aus dem NVRAM",
              ],
              correct: 2,
              explain:
                "running-config = RAM (flüchtig). startup-config = NVRAM (persistent). copy run start = Speichern!",
            },
            {
              id: "imp_ci-cli-1_2",
              q: "Welcher Befehl zeigt alle Interfaces mit IP und Status?",
              options: [
                "show vlan brief",
                "show version",
                "show ip interface brief",
                "show interfaces",
              ],
              correct: 2,
              explain:
                "show ip interface brief: Kompakte Übersicht aller Interfaces mit IP, Status (up/down), Protokoll.",
            },
            {
              id: "imp_ci-cli-1_3",
              q: "Was passiert ohne 'no shutdown' nach Interface-Konfiguration?",
              options: [
                "Das Interface startet nach dem Speichern automatisch",
                "IOS bricht die Konfiguration mit Fehlermeldung ab",
                "Interface bleibt administrativ deaktiviert (down)",
                "Die eingegebene Konfiguration wird sofort verworfen",
              ],
              correct: 2,
              explain:
                "Cisco-Interfaces sind per Default shutdown. 'no shutdown' aktiviert sie explizit.",
            },
            {
              id: "imp_ci-cli-1_4",
              q: "Was ist der Unterschied zwischen running-config und startup-config?",
              options: [
                "Kein Unterschied, beide sind stets identisch",
                "running-config ist die unveränderliche Werkseinstellung",
                "startup-config ist immer die neuere der beiden Dateien",
                "running = aktiv im RAM, startup = gespeichert im NVRAM",
              ],
              correct: 3,
              explain:
                "running-config: Aktuelle Konfig (RAM, geht bei Reboot verloren). startup-config: Gespeichert (NVRAM, überlebt Reboot).",
            },
            {
              id: "imp_ci-cli-1_5",
              q: "Warum SSH statt Telnet?",
              options: [
                "Telnet ist das neuere Protokoll und löst SSH schrittweise ab",
                "Kein Unterschied, beide übertragen Daten gleich geschützt",
                "SSH überträgt Daten durch Kompression deutlich schneller",
                "SSH verschlüsselt die Verbindung, Telnet überträgt Passwörter im Klartext",
              ],
              correct: 3,
              explain:
                "Telnet: Alles im Klartext (auch Passwörter!). SSH: Verschlüsselt. Immer SSH verwenden.",
            },
            {
              id: "imp_ci-cli-1_6",
              q: "Was zeigt 'show mac address-table'?",
              options: [
                "Welche MAC-Adressen an welchen Switch-Ports gelernt wurden",
                "Alle konfigurierten VLANs mit Namen und Status",
                "Die Routing-Tabelle mit Zielnetzen und Next-Hops",
                "Die IP-Adressen aller Clients mit Lease-Dauer",
              ],
              correct: 0,
              explain:
                "MAC-Tabelle: Zuordnung MAC-Adresse → Port → VLAN. Basis für Switch-Forwarding.",
            },
            {
              id: "imp_ci-cli-1_7",
              q: "Welcher Befehl setzt eine statische Route?",
              options: [
                "ip route 10.0.0.0 255.255.255.0 192.168.1.254",
                "route add 10.0.0.0 255.255.255.0 192.168.1.254",
                "static route 10.0.0.0 255.255.255.0 192.168.1.254",
                "set route 10.0.0.0 255.255.255.0 192.168.1.254",
              ],
              correct: 0,
              explain: "ip route [Zielnetz] [Maske] [Next-Hop oder Exit-Interface].",
            },
            {
              id: "imp_ci-cli-1_8",
              q: "Was macht 'spanning-tree portfast' auf einem Access-Port?",
              options: [
                "Port geht sofort in Forwarding-State",
                "STP deaktivieren",
                "Port wird schneller",
                "VLAN wechseln",
              ],
              correct: 0,
              explain:
                "Kein 30-sekündiges STP-Warten. Portfast: Überspringt STP-Listening/Learning. Nur für Endgeräte-Ports, NIE für Switch-zu-Switch!",
            },
            {
              id: "imp_ci-cli-1_9",
              q: "Was ist CDP?",
              options: [
                "Cisco Diagnostic Protocol",
                "Container Deployment Protocol",
                "Central Data Processing",
                "Cisco Discovery Protocol",
              ],
              correct: 3,
              explain:
                "Zeigt direkt verbundene Cisco-Geräte. CDP: Proprietäres Cisco-Protokoll. show cdp neighbors zeigt Nachbar-Geräte mit Typ, Interface, IP.",
            },
            {
              id: "imp_ci-cli-1_10",
              q: "Warum enable secret statt enable password?",
              options: [
                "enable password nutzt eine stärkere Verschlüsselung und sollte deshalb bevorzugt werden",
                "enable secret speichert einen Hash statt (schwach verschlüsseltem) Klartext und hat Vorrang",
                "Beide Befehle speichern das Kennwort identisch, nur die Syntax unterscheidet sich",
                "enable secret hat keine Funktion mehr und bleibt nur aus Kompatibilitätsgründen erhalten",
              ],
              correct: 1,
              explain:
                "Type-7-Passwörter (service password-encryption) sind trivial umkehrbar – secret nutzt echte Hashes.",
            },
            {
              id: "imp_ci-cli-1_11",
              q: "Welche Befehle erlauben NUR SSH auf den VTY-Lines?",
              options: [
                "line vty 0 4 → transport input ssh → login local",
                "line vty 0 4 → transport input telnet → login",
                "line ssh 0 4 → input secure → login remote",
                "ssh enable global → vty secure all → no telnet",
              ],
              correct: 0,
              explain:
                "Dazu gehören: hostname + ip domain-name + crypto key generate rsa + lokaler Benutzer – sonst startet SSH nicht.",
            },
            {
              id: "imp_ci-cli-1_12",
              q: "Wozu dient banner motd?",
              options: [
                "Es zeigt das Wetter",
                "Es startet das Gerät neu",
                "Eine Anmelde-Warnmeldung",
                "Es ist ein Spielmodus",
              ],
              correct: 2,
              explain:
                "Z. B. rechtlicher Hinweis 'Unbefugter Zugriff verboten'. Kein 'Welcome' formulieren – ein Begrüßungstext kann rechtlich als Einladung gewertet werden.",
            },
            {
              id: "imp_ci-cli-1_13",
              q: "Wie führt man einen show-Befehl im Konfigurationsmodus aus?",
              options: ["Mit run", "Gar nicht möglich", "Mit sudo", "Mit vorangestelltem do"],
              correct: 3,
              explain:
                "Beispiel: do show ip interface brief. Spart das ständige exit/configure terminal – kleiner Befehl, großer Komfort.",
            },
            {
              id: "imp_ci-cli-1_14",
              q: "Was zeigt show version u. a. an?",
              options: [
                "Die vollständige Routingtabelle mit allen gelernten Präfixen",
                "Die Liste aller angelegten VLANs mit zugeordneten Ports",
                "IOS-Version, Uptime, Hardware/Speicher und das Konfigurationsregister",
                "Ausschließlich die Seriennummer des Geräts für den Support",
              ],
              correct: 2,
              explain:
                "Erste Anlaufstelle bei Updates und beim Passwort-Recovery (Konfigurationsregister 0x2142).",
            },
            {
              id: "imp_ci-cli-1_15",
              q: "Was bewirkt logging synchronous auf der Console-Line?",
              options: [
                "Log-Meldungen unterbrechen die eigene Eingabe nicht mehr mitten im Befehl",
                "Es deaktiviert sämtliche Log-Ausgaben auf der Console dauerhaft",
                "Es protokolliert jede Meldung doppelt in Puffer und Console",
                "Es synchronisiert die Systemuhr des Geräts mit einem NTP-Server",
              ],
              correct: 0,
              explain:
                "Zusammen mit exec-timeout die Standard-Komfortkonfiguration für Console und VTY.",
            },
            {
              id: "imp_ci-cli-1_16",
              q: "Wie hilft das Fragezeichen (?) in der IOS-CLI?",
              options: [
                "Es hat in der IOS-CLI keine Sonderfunktion und wird wie ein normales Zeichen eingefügt",
                "Kontextsensitive Hilfe: zeigt mögliche Befehle/Parameter an der aktuellen Position",
                "Es beendet die laufende Terminal-Session und meldet den Benutzer vom Gerät ab",
                "Es löscht die aktuelle Eingabezeile vollständig, ähnlich der Tastenkombination Strg+U",
              ],
              correct: 1,
              explain:
                "sh? listet Befehle mit sh, show ? die möglichen Parameter – plus Tab zur Vervollständigung.",
            },
            {
              id: "imp_ci-cli-1_17",
              q: "Dürfen IOS-Befehle abgekürzt werden?",
              options: [
                "Ja, solange die Abkürzung eindeutig ist",
                "Nur mit Sonderlizenz",
                "Nein, niemals",
                "Nur im ROMMON",
              ],
              correct: 0,
              explain:
                "Z. B. sh ip int br. '% Ambiguous command' erscheint, wenn die Abkürzung auf mehrere Befehle passt.",
            },
            {
              id: "imp_ci-cli-1_18",
              q: "Mit welchem Befehl setzt man den Gerätenamen?",
              options: [
                "name SW-ETAGE1",
                "rename SW-ETAGE1",
                "hostname SW-ETAGE1",
                "set device SW-ETAGE1",
              ],
              correct: 2,
              explain:
                "Im globalen Konfigurationsmodus. Saubere Hostnamen sind Doku im Gerät selbst – und Voraussetzung für SSH-Schlüsselerzeugung.",
            },
            {
              id: "imp_ci-cli-1_19",
              q: "Was passiert beim Befehl reload, wenn die running-config nicht gespeichert wurde?",
              options: [
                "Alle Änderungen werden vor dem Neustart automatisch gespeichert",
                "Das Gerät verweigert den Neustart dauerhaft bis zum Speichern",
                "Die gespeicherte startup-config wird beim Neustart gelöscht",
                "IOS warnt; ohne copy run start gehen ungespeicherte Änderungen verloren",
              ],
              correct: 3,
              explain:
                "Vor geplanten Arbeiten: Stand sichern – oder bewusst NICHT speichern, um per Neustart zum letzten guten Stand zurückzukehren.",
            },
          ],
        },
      ],
    },
    {
      id: "ct-ap",
      title: "CompTIA A+",
      lessons: [
        {
          id: "ct-ap-1",
          title: "Troubleshooting & Hardware",
          content: [
            { type: "heading", value: "CompTIA 6-Schritte Troubleshooting-Methode" },
            {
              type: "text",
              value:
                "1. Identify the problem: Symptome sammeln, Benutzer befragen (Was genau? Seit wann? Was geändert?), Umgebung prüfen. 2. Establish a theory of probable cause: Wahrscheinlichste Ursache zuerst (Occam's Razor), offensichtliche Dinge prüfen (Kabel, Strom, Neustart). 3. Test the theory: Theorie verifizieren oder widerlegen. Bei Widerlegung: neue Theorie. 4. Establish a plan of action: Lösung planen, Auswirkungen abschätzen, ggf. Rückfallplan. 5. Implement the solution: Lösung umsetzen, ggf. Eskalation, wenn nötig. 6. Verify functionality & document: Funktionstest, Benutzer bestätigt Lösung, dokumentieren für Knowledge Base.",
            },
            { type: "heading", value: "POST, BIOS/UEFI & Boot-Vorgang" },
            {
              type: "text",
              value:
                "POST (Power-On Self-Test): Prüft CPU, RAM, GPU, Tastatur beim Start. Beep-Codes signalisieren Fehler (1x kurz = OK, 3x kurz = RAM-Fehler (AMI-BIOS) etc., herstellerabhängig). UEFI vs. BIOS: UEFI = moderner (grafisch, Maus, Secure Boot, GPT, >2TB Boot, schneller). Legacy BIOS = textbasiert, MBR, max 2TB. Boot-Reihenfolge im UEFI änderbar. Secure Boot: Nur signierte Bootloader/OS starten.",
            },
            {
              type: "heading",
              value: "Vertiefung: Die CompTIA-Troubleshooting-Methodik an Hardware angewandt",
            },
            {
              type: "text",
              value:
                "A+-Fragen prüfen Symptom→Ursache-Ketten. Die wichtigsten Muster: Rechner startet nicht + Piepcodes/Beep-Codes = RAM/GPU-Fehler laut BIOS-Hersteller-Tabelle. Zufällige Neustarts/Freezes unter Last = Kühlung (Staub, Lüfter, Wärmeleitpaste) oder Netzteil. Blaue/Bunte Artefakte im Bild = Grafikkarte/Kabel. Klickende Geräusche + langsame Zugriffe = HDD stirbt (SOFORT Backup!). SSD wird nicht erkannt = Kabel/Port, BIOS-Modus (AHCI), oder M.2-Slot teilt sich Lanes mit SATA-Ports (Handbuch!). Kondensator-Beulen auf dem Mainboard = Austausch. Immer die Reihenfolge: erst Sichtprüfung und Minimalkonfiguration (nur CPU, 1 RAM-Riegel, Onboard-Grafik), dann Komponenten einzeln tauschen – nie zwei Variablen gleichzeitig ändern.",
            },
            { type: "heading", value: "Übungsaufgabe: Der Montags-PC" },
            {
              type: "text",
              value:
                "Ein PC friert seit Wochen immer nach 20–30 Minuten ein, danach startet er erst nach längerer Pause wieder. Im Winter trat es seltener auf. Stelle die wahrscheinlichste Diagnose, begründe mit den Symptomen und beschreibe die Prüf- und Behebungsschritte.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: Diagnose: Überhitzung (thermisches Problem). Begründung: Zeitmuster (nach Aufwärmphase), Erholung nach Abkühlpause, Temperaturabhängigkeit (Winter besser). Prüfen: Temperaturen auslesen (BIOS/HWMonitor), Lüfterfunktion und Staub sichtprüfen, Kühlkörpersitz kontrollieren. Beheben: Reinigen (Druckluft), ggf. Wärmeleitpaste erneuern, Gehäuselüftung verbessern; danach Lasttest (z. B. 30 min Volllast) mit Temperaturüberwachung als Verifikation. Bonus: SMART-Werte und Netzteil ausschließen, falls das Muster bleibt.",
            },
          ],
          quiz: [
            {
              id: "imp_ct-ap-1_0",
              q: "Erster Troubleshooting-Schritt?",
              options: [
                "Dokumentieren",
                "Theory testen",
                "Plan erstellen",
                "Problem identifizieren",
              ],
              correct: 3,
              explain: "Erst Problem identifizieren (Symptome, Befragung).",
            },
            {
              id: "imp_ct-ap-1_1",
              q: "Occam's Razor im Troubleshooting?",
              options: [
                "Einfachste/wahrscheinlichste Ursache zuerst",
                "Immer Hardware tauschen",
                "Teuerste Lösung",
                "Komplexeste Lösung",
              ],
              correct: 0,
              explain: "Einfachste Erklärung zuerst prüfen.",
            },
            {
              id: "imp_ct-ap-1_2",
              q: "UEFI Secure Boot?",
              options: [
                "Festplattenverschlüsselung",
                "Schnellerer Boot",
                "Boot-Reihenfolge",
                "Nur signierte Bootloader/OS starten",
              ],
              correct: 3,
              explain: "Secure Boot: Verhindert Start unsignierter Software (Rootkit-Schutz).",
            },
            {
              id: "imp_ct-ap-1_3",
              q: "POST Beep-Codes?",
              options: ["BIOS-Update", "Musik", "Fehlersignale beim Hardwaretest", "OK-Signal nur"],
              correct: 2,
              explain:
                "Herstellerspezifisch. Beep-Codes signalisieren Hardware-Fehler beim POST (RAM, GPU, CPU).",
            },
            {
              id: "imp_ct-ap-1_4",
              q: "Blue Screen (BSOD)?",
              options: [
                "Ein Kernel-Panic-Fehler des Linux-Betriebssystems",
                "Ein Darstellungsfehler des Browsers bei Webseiten",
                "Windows-Absturz durch Treiber-/Hardwarefehler",
                "Ein rein optischer Anzeigefehler ohne Systemabsturz",
              ],
              correct: 2,
              explain: "BSOD: Kritischer Windows-Fehler, oft Treiber/RAM/Festplatte.",
            },
            {
              id: "imp_ct-ap-1_5",
              q: "Event Viewer (Windows)?",
              options: [
                "Registry",
                "Geräte-Manager",
                "Systemereignisse und Fehlerlogs anzeigen",
                "Task Manager",
              ],
              correct: 2,
              explain: "Event Viewer: System-, Anwendungs- und Sicherheitslogs.",
            },
            {
              id: "imp_ct-ap-1_6",
              q: "Safe Mode?",
              options: ["Schnell", "Minimalstart für Troubleshooting", "Nur CLI", "Normal"],
              correct: 1,
              explain: "Basis-Treiber.",
            },
            {
              id: "imp_ct-ap-1_7",
              q: "chkdsk?",
              options: ["RAM", "Dateisystem prüfen/reparieren", "CPU", "Netzwerk"],
              correct: 1,
              explain: "NTFS/FAT.",
            },
            {
              id: "imp_ct-ap-1_8",
              q: "sfc /scannow?",
              options: ["Defrag", "Firewall", "Reset", "Systemdateien prüfen/reparieren"],
              correct: 3,
              explain: "System File Checker.",
            },
            {
              id: "imp_ct-ap-1_9",
              q: "Gelbes ! im Device Manager?",
              options: ["OK", "Defekt", "Warnung nur", "Treiber-Problem"],
              correct: 3,
              explain: "Treiber fehlt/fehlerhaft.",
            },
            {
              id: "imp_ct-ap-1_10",
              q: "In welcher Reihenfolge läuft die CompTIA-Troubleshooting-Methodik ab?",
              options: [
                "Umsetzen → Ergebnis abwarten → bei Misserfolg neue Vermutung raten → Vorgang wiederholen, bis das Problem verschwindet",
                "Problem identifizieren → Theorie aufstellen → Theorie testen → Maßnahmenplan → Umsetzen → Funktion verifizieren → Dokumentieren",
                "Theorie aufstellen → Problem daran anpassen → Maßnahme ableiten → abschließen, ohne die Funktion zu verifizieren",
                "Dokumentieren → System neu starten → Ticket schließen; weitere Schritte sind laut Methodik nicht vorgesehen",
              ],
              correct: 1,
              explain:
                "Wörtlicher Prüfungsstoff (CompTIA zählt Maßnahmenplan erstellen und umsetzen als EINEN Schritt – zusammen sechs Schritte) und deckt sich mit professioneller Ticketarbeit.",
            },
            {
              id: "imp_ct-ap-1_11",
              q: "Was gehört zu 'Identify the problem'?",
              options: [
                "Dem Nutzer nachweisen, dass er den Fehler durch Fehlbedienung selbst verursacht hat",
                "Nutzer befragen, Symptome aufnehmen, letzte Änderungen erfragen, Backups/Status sichern",
                "Das Ticket umgehend schließen und den Vorgang als nicht reproduzierbar dokumentieren",
                "Sofort alle potenziell betroffenen Hardwarekomponenten vorsorglich austauschen",
              ],
              correct: 1,
              explain: "'Was wurde zuletzt geändert?' löst erfahrungsgemäß die Hälfte aller Fälle.",
            },
            {
              id: "imp_ct-ap-1_12",
              q: "Womit endet jeder Troubleshooting-Fall methodisch?",
              options: [
                "Dokumentation von Befund, Maßnahmen und Ergebnis",
                "Mit gar nichts; nach der Behebung ist der Fall erledigt",
                "Mit dem Dienstschluss des Technikers, unabhängig vom Stand",
                "Mit der Rechnungsstellung an den Kunden über die Arbeitszeit",
              ],
              correct: 0,
              explain:
                "Die Doku speist die Wissensdatenbank – der nächste gleiche Fall ist dann in Minuten gelöst.",
            },
            {
              id: "imp_ct-ap-1_13",
              q: "Welche Funktion hat Wärmeleitpaste?",
              options: [
                "Sie dient als Korrosionsschutz und verhindert Rost am Kupferboden des Kühlers",
                "Sie isoliert die CPU-Pins elektrisch und verhindert damit Kurzschlüsse im Sockel",
                "Sie verklebt Kühler und Prozessor dauerhaft, sodass keine Halteklammern nötig sind",
                "Sie füllt mikroskopische Unebenheiten zwischen CPU und Kühler und verbessert die Wärmeübertragung",
              ],
              correct: 3,
              explain:
                "Zu viel ist kontraproduktiv – eine dünne Schicht genügt; ausgetrocknete Paste verursacht Thermal Throttling.",
            },
            {
              id: "imp_ct-ap-1_14",
              q: "Typische Symptome eines defekten Netzteils?",
              options: [
                "Dauerhafte Pixelfehler und Farbstiche im Display, die mit steigender Betriebsdauer zunehmen",
                "Ausschließlich langsames WLAN, da das Netzteil die Sendeleistung der Antennen begrenzt",
                "Sporadische Abstürze/Neustarts unter Last, Nichtstarten, Geruch oder klackende Geräusche",
                "Eine ständig zurückgesetzte Uhrzeit, weil das Netzteil die BIOS-Batterie nicht mehr auflädt",
              ],
              correct: 2,
              explain:
                "Diagnose: bekannt gutes Netzteil testweise einsetzen oder PSU-Tester nutzen – Messen schlägt Raten.",
            },
            {
              id: "imp_ct-ap-1_15",
              q: "Erster sinnvoller Schritt bei RAM-Verdacht (Abstürze, Bluescreens)?",
              options: [
                "Module neu stecken und einzeln mit einem Speichertest (z. B. MemTest86) prüfen",
                "Die BIOS-Batterie entfernen, um sämtliche Speicherfehler zurückzusetzen",
                "Sofort das Mainboard tauschen, da RAM-Fehler fast immer dort entstehen",
                "Die Festplatte formatieren und das Betriebssystem vollständig neu aufsetzen",
              ],
              correct: 0,
              explain:
                "Mit nur einem Modul je Slot testen grenzt defektes Modul vs. defekten Slot ein.",
            },
            {
              id: "imp_ct-ap-1_16",
              q: "Woran erkennt man eine ausfallende SSD frühzeitig?",
              options: [
                "Lautes Klacken der mechanischen Leseköpfe beim Zugriff auf Sektoren",
                "SMART-Warnungen, zunehmende Schreibfehler, eingefrorene Zugriffe",
                "Sichtbare Staubablagerungen an den Lüftungsschlitzen des Gehäuses",
                "Ein messbar höheres Gewicht durch die zunehmende Datenmenge",
              ],
              correct: 1,
              explain:
                "Klackern ist das HDD-Symptom – SSDs sterben leise: SMART-Monitoring und Backups sind die Versicherung.",
            },
            {
              id: "imp_ct-ap-1_17",
              q: "Wozu dient ein ESD-Armband?",
              options: [
                "Es isoliert den Träger gegen Netzspannung und schützt so vor einem Stromschlag aus der Steckdose",
                "Es dient als Kennzeichnung des Servicepersonals im Rechenzentrum und hat keine elektrische Funktion",
                "Es leitet elektrostatische Ladung kontrolliert ab und schützt Bauteile bei der Hardwarearbeit",
                "Es misst Puls und Hautleitwert des Technikers, um Ermüdung bei langen Wartungsarbeiten zu erkennen",
              ],
              correct: 2,
              explain:
                "Schon wenige Volt unspürbarer Entladung können Chips vorschädigen – Latenzschäden fallen erst Wochen später auf.",
            },
            {
              id: "imp_ct-ap-1_18",
              q: "Aufgeblähte Kondensatoren auf dem Mainboard deuten auf …",
              options: [
                "ein Treiberproblem",
                "einen Hardwaredefekt der Spannungsversorgung",
                "zu viel RAM",
                "ein Softwareproblem",
              ],
              correct: 1,
              explain:
                "Board tauschen bzw. professionell reparieren. Sichtprüfung gehört zur Hardware-Diagnose: Wölbung oder ausgetretenes Elektrolyt sind eindeutig.",
            },
            {
              id: "imp_ct-ap-1_19",
              q: "PC 'völlig tot': Welche Prüfreihenfolge ist sinnvoll?",
              options: [
                "Von außen nach innen: Steckdose/Kabel → Netzteilschalter → Power-Taster/Frontpanel-Anschluss → Netzteil → Board",
                "Zuerst ein BIOS-Update über das Netzwerk einspielen, da veraltete Firmware die häufigste Ursache für Totalausfälle ist",
                "Zuerst die CPU austauschen, da sie das empfindlichste Bauteil ist und bei totem PC fast immer defekt ist",
                "Windows vom USB-Stick neu installieren, da ein beschädigtes Betriebssystem den Einschaltvorgang verhindert",
              ],
              correct: 0,
              explain:
                "Einfache Ursachen zuerst ausschließen – die Mehrzahl der 'Totalausfälle' ist ein Kabel- oder Schalterproblem.",
            },
          ],
        },
        {
          id: "ct-ap-2",
          title: "Virtualisierung & Cloud",
          content: [
            { type: "heading", value: "Hypervisor-Typen" },
            {
              type: "text",
              value:
                "Typ 1 (Bare-Metal): Direkt auf Hardware installiert. VMware ESXi, Microsoft Hyper-V, KVM, Citrix XenServer. Für Server/Rechenzentren. Bessere Performance. Typ 2 (Hosted): Auf einem Betriebssystem installiert. VirtualBox, VMware Workstation/Fusion, Parallels. Für Entwicklung/Test auf Desktop.",
            },
            { type: "heading", value: "Cloud-Service-Modelle" },
            {
              type: "text",
              value:
                "IaaS (Infrastructure as a Service): VMs, Storage, Netzwerk mieten. Kunde verwaltet OS + Apps. AWS EC2, Azure VMs. PaaS (Platform as a Service): Entwicklungsplattform, Kunde deployt nur Code. Heroku, Azure App Service, Google App Engine. SaaS (Software as a Service): Fertige Software im Browser. M365, Salesforce, Dropbox. Verantwortung: On-Prem = alles selbst. IaaS = Infra vom Anbieter. SaaS = fast alles vom Anbieter.",
            },
            { type: "heading", value: "Cloud-Deployment-Modelle" },
            {
              type: "text",
              value:
                "Public Cloud: Öffentlich, Multi-Tenant (AWS, Azure, GCP). Günstig, skalierbar. Private Cloud: Eigene Infrastruktur oder dediziert bei Anbieter. Kontrolle, Compliance. Hybrid Cloud: Kombination Public + Private. Sensitive Daten privat, Burst in Public. Community Cloud: Gemeinsam von Organisationen mit gleichen Anforderungen genutzt.",
            },
            { type: "heading", value: "Vertiefung: Virtualisierung und Cloud in der A+-Denkweise" },
            {
              type: "text",
              value:
                "Die Prüfungslogik dreht sich um Zuordnung: Hypervisor TYP 1 läuft direkt auf der Hardware (ESXi, Hyper-V, Proxmox – Rechenzentrum), TYP 2 als Programm im Betriebssystem (VirtualBox, VMware Workstation – Test/Schulung). VM vs. Container: Die VM bringt ein eigenes OS mit (starke Isolation, Minuten-Start, GB-groß), der Container teilt den Host-Kernel (Sekunden-Start, MB-groß, gleiche Kernel-Familie nötig). Cloud-Modelle: IaaS (du verwaltest ab OS aufwärts), PaaS (du bringst nur die Anwendung), SaaS (du nutzt nur noch). Dazu die Ressourcen-Begriffe: Snapshots (Zustand einfrieren – kein Backup!), Thin Provisioning (Speicher wird erst bei Nutzung belegt – Überbuchungsgefahr!), vCPU-Overcommitment (mehr vCPUs vergeben als Kerne da sind – okay bis zur CPU-Ready-Bremse).",
            },
            { type: "heading", value: "Übungsaufgabe: Die volle Platte, die nicht voll ist" },
            {
              type: "text",
              value:
                "Ein Host meldet 95 % Storage-Belegung, die Summe der VM-Daten ergibt aber nur 60 %. Die VMs nutzen Thin Provisioning, und es existieren mehrere Monate alte Snapshots. Erkläre die zwei Effekte und die richtige Reihenfolge der Bereinigung.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: Effekt 1: Alte Snapshots wachsen unbegrenzt – jede Änderung seit dem Snapshot landet in Delta-Dateien; nach Monaten sind die oft größer als die VM selbst. Effekt 2: Thin-Disks geben gelöschten Platz nicht automatisch an den Host zurück (Unmap/Trim nötig). Reihenfolge: (1) Snapshots konsolidieren/löschen (der große Hebel – vorher prüfen, ob niemand sie noch braucht!), (2) danach ggf. Speicher zurückfordern (Unmap), (3) Monitoring-Schwelle + Snapshot-Aufbewahrungsregel einführen (z. B. max. 72 h), damit es nicht wieder passiert.",
            },
          ],
          quiz: [
            {
              id: "imp_ct-ap-2_0",
              q: "Typ-1-Hypervisor?",
              options: ["In Container", "Auf OS", "Direkt auf HW (Bare-Metal)", "Im Browser"],
              correct: 2,
              explain: "Bare-Metal = direkt auf Hardware.",
            },
            {
              id: "imp_ct-ap-2_1",
              q: "M365 ist welches Cloud-Modell?",
              options: ["PaaS", "On-Prem", "IaaS", "SaaS"],
              correct: 3,
              explain: "SaaS = fertige Software im Browser.",
            },
            {
              id: "imp_ct-ap-2_2",
              q: "Was kennzeichnet eine Hybrid Cloud?",
              options: [
                "Nur Private",
                "Nur Community",
                "Nur Public",
                "Kombination Public + Private",
              ],
              correct: 3,
              explain: "Hybrid = Public + Private kombiniert.",
            },
            {
              id: "imp_ct-ap-2_3",
              q: "IaaS: Kunde verwaltet?",
              options: ["Alles", "OS + Anwendungen", "Nur Daten", "Nichts"],
              correct: 1,
              explain: "IaaS: Anbieter = Infra, Kunde = OS + Apps.",
            },
            {
              id: "imp_ct-ap-2_4",
              q: "Kubernetes = ?",
              options: ["Monitoring", "Docker", "Container-Orchestrierung", "VM-Hypervisor"],
              correct: 2,
              explain: "K8s: Automatisches Management vieler Container.",
            },
            {
              id: "imp_ct-ap-2_5",
              q: "SaaS Beispiel?",
              options: ["Microsoft 365", "AWS EC2", "VMware", "Docker"],
              correct: 0,
              explain: "M365: Fertige Software im Browser = SaaS.",
            },
            {
              id: "imp_ct-ap-2_6",
              q: "Private Cloud?",
              options: ["Kostenlos", "Günstiger", "Öffentlich", "Exklusiv für eine Organisation"],
              correct: 3,
              explain: "Dediziert.",
            },
            {
              id: "imp_ct-ap-2_7",
              q: "Container Vorteil?",
              options: ["Langsamer", "Konsistente Umgebung überall", "Nur Linux", "Mehr RAM"],
              correct: 1,
              explain: "Works everywhere.",
            },
            {
              id: "imp_ct-ap-2_8",
              q: "Pay-as-you-go?",
              options: ["Zahlen was man nutzt", "Vorauszahlung", "Gratis", "Flatrate"],
              correct: 0,
              explain: "Nutzungsbasiert.",
            },
            {
              id: "imp_ct-ap-2_9",
              q: "Multi-Cloud?",
              options: ["Mehrere Anbieter kombinieren", "Eine", "Nur AWS", "Nur Azure"],
              correct: 0,
              explain: "Kein Lock-in.",
            },
            {
              id: "imp_ct-ap-2_10",
              q: "Welche Produkte sind Typ-2-Hypervisoren?",
              options: [
                "Proxmox VE",
                "Docker",
                "VirtualBox und VMware Workstation",
                "ESXi und Hyper-V Server",
              ],
              correct: 2,
              explain:
                "Sie laufen als Anwendung auf einem Host-OS. Typ 1 läuft direkt auf der Hardware (Bare Metal) – Produktionsumgebungen nutzen Typ 1, Typ 2 ist für Desktop/Test.",
            },
            {
              id: "imp_ct-ap-2_11",
              q: "Wofür sind VM-Snapshots gedacht – und wofür nicht?",
              options: [
                "Als Langzeitarchiv",
                "Kurzfristige Rücksetzpunkte vor Änderungen",
                "Als RAID-Ersatz",
                "Zum Klonen von Lizenzen",
              ],
              correct: 1,
              explain:
                "Kein Ersatz für Backups und nicht für Langzeitaufbewahrung. Alte Snapshot-Ketten kosten massiv Performance und Speicher – nach erfolgreicher Änderung konsolidieren.",
            },
            {
              id: "imp_ct-ap-2_12",
              q: "Was ist VM-Sprawl?",
              options: [
                "Unkontrollierter Wildwuchs an VMs ohne Eigentümer, Patches und Dokumentation",
                "Ein Verfahren zur Live-Migration von VMs zwischen zwei Hosts",
                "Ein Hypervisor-Feature zur automatischen Lastverteilung von VMs",
                "Eine Lizenzform für die unbegrenzte Anzahl virtueller Maschinen",
              ],
              correct: 0,
              explain:
                "Gegenmittel: Inventarisierung, Lifecycle-Prozess und regelmäßige Aufräumläufe – vergessene VMs sind Sicherheitsrisiken.",
            },
            {
              id: "imp_ct-ap-2_13",
              q: "Was bedeutet Elastizität in der Cloud?",
              options: [
                "Ressourcen skalieren automatisch mit der Last nach oben UND wieder nach unten",
                "Daten werden vor der Übertragung automatisch komprimiert, um Bandbreite zu sparen",
                "Cloud-Verträge lassen sich monatlich kündigen und flexibel an Budgets anpassen",
                "Die physischen Server lassen sich im Rack flexibel umbauen und erweitern",
              ],
              correct: 0,
              explain:
                "Zusammen mit Pay-per-Use der Kernvorteil: Lastspitzen abfedern, ohne Hardware für den Spitzenfall zu kaufen.",
            },
            {
              id: "imp_ct-ap-2_14",
              q: "Wie verteilt das Shared-Responsibility-Modell die Verantwortung in der Cloud?",
              options: [
                "Die Verantwortung liegt bei niemandem konkret, da sie sich in der Cloud rechtlich nicht zuordnen lässt",
                "Der Kunde verwaltet die physischen Rechenzentren, der Anbieter kümmert sich nur um die Kundendaten",
                "Der Anbieter sichert die Cloud-Infrastruktur, der Kunde bleibt für Daten, Identitäten und Konfiguration verantwortlich",
                "Der Anbieter haftet vollständig für alles, einschließlich der Daten und Zugriffsrechte des Kunden",
              ],
              correct: 2,
              explain:
                "Fehlkonfigurierte Storage-Buckets sind Kundenfehler – das Modell gehört in jede Cloud-Beratung.",
            },
            {
              id: "imp_ct-ap-2_15",
              q: "Was ist VDI?",
              options: [
                "Ein Dateiformat",
                "Virtual Desktop Infrastructure",
                "Ein Grafikkartentyp",
                "Ein WLAN-Standard",
              ],
              correct: 1,
              explain:
                "Zentral gehostete Desktops, auf die Endgeräte zugreifen. Vorteile: zentrales Patchen, Datenhaltung im RZ, Thin Clients; Preis: Server-, Storage- und Lizenzaufwand.",
            },
            {
              id: "imp_ct-ap-2_16",
              q: "Warum sind Container-Images typischerweise kleiner als VMs?",
              options: [
                "Sie enthalten keine Anwendungen, sondern nur Verweise auf externe Programme",
                "Container teilen sich den Host-Kernel und bringen kein eigenes Betriebssystem mit",
                "Die Aussage stimmt nicht – Container-Images sind stets größer als VM-Abbilder",
                "Sie werden mit einem stärkeren Kompressionsverfahren gepackt als VM-Images",
              ],
              correct: 1,
              explain:
                "Dafür ist die Isolation schwächer als bei VMs – Sicherheitsanforderungen entscheiden über die Wahl.",
            },
            {
              id: "imp_ct-ap-2_17",
              q: "Welche CPU-Funktion muss für Virtualisierung aktiv sein?",
              options: [
                "Turbo Boost",
                "Hardware-Virtualisierung (Intel VT-x / AMD-V)",
                "Übertaktung",
                "Hyper-Threading zwingend",
              ],
              correct: 1,
              explain:
                "Meist im BIOS/UEFI aktivierbar. 'VT-x is disabled' ist der häufigste Fehler beim ersten Hypervisor-Start auf neuen Maschinen.",
            },
            {
              id: "imp_ct-ap-2_18",
              q: "Wofür eignet sich eine Sandbox-VM?",
              options: [
                "Zum zentralen Speichern der täglichen Backups aller Produktivserver des Unternehmens",
                "Verdächtige Dateien oder neue Software isoliert testen, ohne das Produktivsystem zu gefährden",
                "Als produktiver Domain Controller, da die Isolation das Active Directory besonders absichert",
                "Für keinen praktischen Zweck; Sandboxes dienen ausschließlich zu Schulungszwecken",
              ],
              correct: 1,
              explain:
                "Mit Snapshot davor: testen, beobachten, zurückrollen – Standardwerkzeug in Support und Security.",
            },
            {
              id: "imp_ct-ap-2_19",
              q: "Was bedeutet Resource Pooling?",
              options: [
                "Physische Ressourcen (CPU, RAM, Storage) werden gebündelt und dynamisch auf viele Mandanten verteilt",
                "Die gemeinsame Wasserkühlung mehrerer Serverräume über ein zentrales Kühlbecken",
                "Jeder Kunde erhält fest zugewiesene, physisch getrennte Hardware ohne gemeinsame Nutzung",
                "Freie Ressourcen werden in festen Zeitfenstern per Zufallsprinzip an Kunden vergeben",
              ],
              correct: 0,
              explain:
                "Eines der fünf NIST-Cloud-Merkmale – Überbuchung macht die Effizienz, Isolation die Sicherheit.",
            },
          ],
        },
        {
          id: "ct-ap-3",
          title: "Betriebssysteme (Windows, Linux, macOS)",
          content: [
            { type: "heading", value: "Windows" },
            {
              type: "text",
              value:
                "Editionen: Home (Privat), Pro (BitLocker, Remote Desktop, GPOs, Domänenbeitritt), Enterprise (DirectAccess, AppLocker). Dateisystem: NTFS (Standard, Berechtigungen, Verschlüsselung), FAT32 (max. 4GB/Datei, kompatibel), exFAT (USB-Sticks, große Dateien). Verwaltung: MMC, Computerverwaltung, Geräte-Manager, Datenträgerverwaltung, cmd/PowerShell.",
            },
            { type: "heading", value: "Linux" },
            {
              type: "text",
              value:
                "Distributionen: Ubuntu/Debian (apt), RHEL/CentOS/Fedora (dnf/yum), SUSE (zypper). Dateisysteme: ext4 (Standard), XFS (große Dateien), Btrfs (Snapshots). Alles ist eine Datei. Case-sensitive. Paketverwaltung statt Installer.",
            },
            { type: "heading", value: "macOS" },
            {
              type: "text",
              value:
                "Unix-basiert (BSD). Dateisystem: APFS. Terminal = Bash/Zsh. Nur auf Apple-Hardware (offiziell). Spotlight-Suche, Time Machine Backup, AirDrop.",
            },
            { type: "heading", value: "Dateisystem-Vergleich" },
            {
              type: "text",
              value:
                "NTFS: Windows-Standard, max. 256TB, ACLs, Verschlüsselung (EFS), Journaling. ext4: Linux-Standard, max. 1EB, Journaling, keine native Windows-Unterstützung. APFS: macOS/iOS, Snapshots, Klone, optimiert für SSD. FAT32: Universell kompatibel, max. 4GB/Datei.",
            },
            { type: "heading", value: "Übungsaufgabe: Linux-Rechte setzen" },
            {
              type: "text",
              value:
                "Ein Backup-Skript /opt/backup.sh soll vom Eigentümer (root) voll nutzbar sein (lesen, schreiben, ausführen), die Gruppe 'admins' darf es lesen und ausführen, alle anderen dürfen gar nichts. a) Gib den passenden chmod-Befehl in Oktalschreibweise an und erkläre die Ziffern. b) Mit welchen Befehlen setzt du Eigentümer und Gruppe? c) Wie prüfst du das Ergebnis?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) chmod 750 /opt/backup.sh – 7 = rwx für den Eigentümer (4+2+1), 5 = r-x für die Gruppe (4+1), 0 = keine Rechte für andere.\nb) chown root:admins /opt/backup.sh (setzt Eigentümer root und Gruppe admins in einem Schritt).\nc) ls -l /opt/backup.sh → erwartete Ausgabe: -rwxr-x--- 1 root admins … backup.sh. Test zusätzlich mit einem Benutzer der Gruppe (Ausführung klappt) und einem fremden Benutzer (Permission denied).",
            },
            { type: "heading", value: "Vertiefung: Drei Betriebssysteme, ein Werkzeugkasten" },
            {
              type: "text",
              value:
                "A+ will Übersetzungsfähigkeit zwischen den Welten: Paketverwaltung – Windows: winget/Installer + Windows Update; Linux: apt/dnf aus Repositories; macOS: App Store/brew. Benutzer- und Rechtemodell – Windows: NTFS-ACLs, UAC, lokale vs. Domänenkonten; Linux: rwx-Bits, chmod/chown, sudo; macOS: POSIX + Gatekeeper/SIP. Dienste – Windows: services.msc/Get-Service; Linux: systemctl; macOS: launchctl. Datenträger – Windows: Datenträgerverwaltung/diskpart, NTFS; Linux: lsblk/mount, ext4/xfs; macOS: Festplattendienstprogramm, APFS. Logs – Ereignisanzeige vs. journalctl vs. Konsole.app. Merkhilfe für Prüfungsfragen: Erst überlegen, WAS gesucht ist (Dienst? Rechte? Datenträger?), dann das OS-Werkzeug zuordnen – die Konzepte sind identisch, nur die Namen wechseln.",
            },
            { type: "heading", value: "Übungsaufgabe: Derselbe Auftrag, drei Systeme" },
            {
              type: "text",
              value:
                "Auftrag: „Prüfe, ob der SSH-Dienst läuft, und aktiviere ihn dauerhaft.“ Nenne die Vorgehensweise unter (a) Linux (systemd), (b) Windows (OpenSSH-Server), (c) macOS.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: a) systemctl status sshd (bzw. ssh) → systemctl enable --now sshd. b) PowerShell: Get-Service sshd → Set-Service sshd -StartupType Automatic; Start-Service sshd (Feature „OpenSSH-Server“ vorher über optionale Features installieren). c) Systemeinstellungen → Allgemein → Teilen → „Entfernte Anmeldung“ aktivieren (oder sudo systemsetup -setremotelogin on). Punkte für die Struktur: Status prüfen → dauerhaft aktivieren → sofort starten – identische Logik, drei Dialekte.",
            },
          ],
          quiz: [
            {
              id: "imp_ct-ap-3_0",
              q: "Windows Pro hat, Home nicht?",
              options: [
                "Taschenrechner",
                "Windows Update",
                "BitLocker & Domänenbeitritt",
                "Internet Explorer",
              ],
              correct: 2,
              explain: "Pro: BitLocker, Remote Desktop, GPOs, Domäne.",
            },
            {
              id: "imp_ct-ap-3_1",
              q: "Max. Dateigröße bei FAT32?",
              options: ["Unbegrenzt", "16 GB", "4 GB", "2 GB"],
              correct: 2,
              explain: "FAT32: Max. 4 GB pro Datei.",
            },
            {
              id: "imp_ct-ap-3_2",
              q: "Linux Standard-Dateisystem?",
              options: ["NTFS", "APFS", "ext4", "FAT32"],
              correct: 2,
              explain: "ext4.",
            },
            {
              id: "imp_ct-ap-3_3",
              q: "NTFS: ACLs?",
              options: ["Beide FS", "Keines", "Nur NTFS hat Datei-Berechtigungen", "Nur FAT32"],
              correct: 2,
              explain: "NTFS: ACLs für feingranulare Rechte. FAT32: Keine.",
            },
            {
              id: "imp_ct-ap-3_4",
              q: "Linux: Alles ist eine?",
              options: ["Variable", "Datenbank", "Webseite", "Datei"],
              correct: 3,
              explain: "Unix: Alles wird als Datei repräsentiert.",
            },
            {
              id: "imp_ct-ap-3_5",
              q: "ext4 = ?",
              options: ["Linux Standard-Dateisystem", "Windows-Dateisystem", "macOS", "USB-Format"],
              correct: 0,
              explain: "ext4: Standard-Dateisystem für Linux.",
            },
            {
              id: "imp_ct-ap-3_6",
              q: "BitLocker?",
              options: ["Backup", "Festplattenverschlüsselung Win Pro", "FW", "AV"],
              correct: 1,
              explain: "Nutzt i. d. R. TPM.",
            },
            {
              id: "imp_ct-ap-3_7",
              q: "APFS?",
              options: ["Android", "Linux", "Apple File System", "Windows"],
              correct: 2,
              explain: "SSD-optimiert.",
            },
            {
              id: "imp_ct-ap-3_8",
              q: "apt?",
              options: ["macOS", "Windows", "Debian/Ubuntu Paketmanager", "Red Hat"],
              correct: 2,
              explain: "APT.",
            },
            {
              id: "imp_ct-ap-3_9",
              q: "Time Machine?",
              options: ["Server", "Cron", "Zeitreise", "macOS Auto-Backup"],
              correct: 3,
              explain: "Inkrementell.",
            },
            {
              id: "imp_ct-ap-3_10",
              q: "Was bedeuten die Rechte chmod 755 auf einer Datei?",
              options: [
                "Sämtliche Zugriffe sind gesperrt, auch für den Eigentümer der Datei",
                "Nur die Gruppe erhält Schreibrechte, Eigentümer und Andere lesen lediglich",
                "Alle Benutzer dürfen uneingeschränkt lesen, schreiben und ausführen",
                "Eigentümer: lesen+schreiben+ausführen; Gruppe und Andere: lesen+ausführen",
              ],
              correct: 3,
              explain:
                "7 = rwx (4+2+1), 5 = r-x. Reihenfolge: User, Group, Others – Standard für Skripte und Verzeichnisse.",
            },
            {
              id: "imp_ct-ap-3_11",
              q: "Wozu dient sudo unter Linux?",
              options: [
                "Es ist ein Editor",
                "Es löscht Benutzer",
                "Es startet die GUI",
                "Einzelne Befehle mit Root-Rechten ausführen",
              ],
              correct: 3,
              explain:
                "Protokolliert und ohne dauerhafte Root-Anmeldung. Best Practice statt Root-Login: Least Privilege plus Nachvollziehbarkeit in den Logs.",
            },
            {
              id: "imp_ct-ap-3_12",
              q: "Welche Distributionen nutzen apt bzw. dnf/yum?",
              options: [
                "Paketmanager sind distributionsunabhängig identisch",
                "apt: Debian/Ubuntu – dnf/yum: Red Hat/Fedora/Rocky",
                "Beide nur auf Arch",
                "apt: Windows – yum: macOS",
              ],
              correct: 1,
              explain:
                "Für die Prüfung reicht die Zuordnung der Familien; Funktionsprinzip (Repositorys, Abhängigkeiten) ist gleich.",
            },
            {
              id: "imp_ct-ap-3_13",
              q: "Wo liegen die persönlichen Dateien eines Linux-Benutzers standardmäßig?",
              options: ["C:\\Users", "/home/<benutzername>", "/etc/users", "/var/www"],
              correct: 1,
              explain:
                "Root hat abweichend /root; /etc enthält Konfiguration, /var veränderliche Daten wie Logs.",
            },
            {
              id: "imp_ct-ap-3_14",
              q: "In-Place-Upgrade vs. Clean Install – was gilt?",
              options: [
                "Ein Clean Install übernimmt sämtliche Programme und Einstellungen automatisch",
                "Ein In-Place-Upgrade formatiert immer die Systempartition und löscht alle Daten",
                "Beide Verfahren laufen technisch identisch ab und liefern dasselbe Ergebnis",
                "In-Place behält Programme/Daten/Einstellungen, Clean Install startet auf leerer Platte",
              ],
              correct: 3,
              explain:
                "Sauberer, aber mit Neueinrichtung. Vor beidem gilt: vollständiges Backup. Hartnäckige Altlasten sprechen für Clean Install.",
            },
            {
              id: "imp_ct-ap-3_15",
              q: "Warum ist der Betrieb eines OS nach End-of-Life riskant?",
              options: [
                "Lizenzen werden teurer",
                "Der Bildschirm wird schwarz",
                "Keine Sicherheitsupdates mehr",
                "Es wird automatisch langsamer",
              ],
              correct: 2,
              explain:
                "Bekannte Lücken bleiben dauerhaft offen; oft auch Compliance-Verstoß. EOL-Systeme isolieren oder migrieren – im Audit und bei Cyberversicherungen ein K.-o.-Kriterium.",
            },
            {
              id: "imp_ct-ap-3_16",
              q: "Warum sollte das tägliche Arbeitskonto KEIN Administrator sein?",
              options: [
                "Aus Kostengründen, da Adminkonten Lizenzgebühren kosten",
                "Adminkonten arbeiten spürbar langsamer als Standardkonten",
                "Standardkonten erhalten mehr Speicherplatz auf dem Server",
                "Schadsoftware erbt die Rechte des angemeldeten Benutzers",
              ],
              correct: 3,
              explain:
                "Standardrechte begrenzen den Schaden. UAC bzw. sudo holen Adminrechte gezielt ein, wenn sie wirklich gebraucht werden.",
            },
            {
              id: "imp_ct-ap-3_17",
              q: "Welche Werkzeuge zeigen laufende Prozesse und Auslastung?",
              options: [
                "Nur der Geräte-Manager",
                "Windows: Task-Manager/Resource Monitor – Linux: top/htop",
                "Der Papierkorb",
                "Paint",
              ],
              correct: 1,
              explain:
                "Erste Anlaufstelle bei 'Der Rechner ist langsam': CPU-, RAM- und Disk-Fresser identifizieren.",
            },
            {
              id: "imp_ct-ap-3_18",
              q: "Wofür ist exFAT das passende Dateisystem?",
              options: [
                "Die Systempartition von Windows, da exFAT dort die Rechteverwaltung von NTFS vollständig ersetzt",
                "Den Firmware-Speicher von RAID-Controllern, der ein besonders kompaktes Dateisystem benötigt",
                "Externe Datenträger/USB-Sticks mit großen Dateien, die zwischen Windows und macOS getauscht werden",
                "Das Root-Dateisystem von Linux-Servern, weil exFAT dort Journaling und Rechte nativ unterstützt",
              ],
              correct: 2,
              explain:
                "Keine 4-GB-Dateigrenze wie FAT32 und breite OS-Unterstützung – aber ohne Journaling/Rechte wie NTFS/ext4.",
            },
            {
              id: "imp_ct-ap-3_19",
              q: "Wo speichert Windows zentrale Systemeinstellungen, wo klassisches Linux?",
              options: [
                "In der Auslagerungsdatei",
                "Windows: /etc – Linux: Registry",
                "Beide in der Cloud",
                "Windows: Registry – Linux: Textdateien unter /etc",
              ],
              correct: 3,
              explain:
                "Konsequenz für die Praxis: Linux-Konfigs lassen sich versionieren und diffen; unter Windows helfen GPOs und reg-Exporte.",
            },
          ],
        },
      ],
    },
    {
      id: "ct-net",
      title: "CompTIA Network+",
      lessons: [
        {
          id: "ct-net-1",
          title: "Ports & Protokolle",
          content: [
            { type: "heading", value: "Wichtige Ports (auswendig lernen!)" },
            {
              type: "text",
              value:
                "FTP: 20 (Daten) / 21 (Steuerung). SSH: 22. Telnet: 23 (unverschlüsselt!). SMTP: 25 (Mailversand) / 587 (mit Auth). DNS: 53 (TCP+UDP). DHCP: 67 (Server) / 68 (Client). HTTP: 80. HTTPS: 443. POP3: 110 / 995 (SSL). IMAP: 143 / 993 (SSL). SMB: 445 (Dateifreigabe Windows). RDP: 3389 (Remote Desktop). SNMP: 161 (Abfrage) / 162 (Trap). LDAP: 389 / 636 (SSL). NTP: 123 (Zeitsynchronisation). Syslog: 514. MySQL: 3306. MSSQL: 1433. PostgreSQL: 5432.",
            },
            { type: "heading", value: "TCP vs. UDP" },
            {
              type: "text",
              value:
                "TCP (Transmission Control Protocol): Verbindungsorientiert, 3-Way-Handshake, zuverlässig (Bestätigung, Reihenfolge, Neuübertragung). Für: HTTP, SMTP, FTP, SSH. UDP (User Datagram Protocol): Verbindungslos, schneller, keine Garantie. Für: DNS, DHCP, SNMP, VoIP, Streaming, Gaming. DNS nutzt UDP für Anfragen, TCP für Zonentransfers.",
            },
            {
              type: "note",
              value: "Top-Prüfungsfrage: Welcher Port gehört zu welchem Dienst? Und: TCP oder UDP?",
            },
            {
              type: "heading",
              value: "Ports & Protokolle: warum diese Liste dein Grundwerkzeug ist",
            },
            {
              type: "text",
              value:
                "Ports sind die Türnummern der Netzwerkkommunikation: Eine IP-Adresse findet den Rechner, der Port findet den Dienst darauf. Für Zertifizierungen wie CompTIA Network+ – und genauso für AP1/AP2 – musst du die Well-Known-Ports (0–1023) der wichtigsten Dienste zuordnen können, denn jede Firewall-Regel, jede netstat/ss-Ausgabe und jede Fehlersuche („Port 25 blockiert?“) baut darauf auf. Lerne die Ports in Paaren mit ihrer sicheren Variante: HTTP 80 → HTTPS 443, SMTP 25/587 → SMTPS 465, IMAP 143 → IMAPS 993, POP3 110 → POP3S 995, FTP 21 → FTPS 990/SFTP über SSH 22, Telnet 23 (unsicher!) → SSH 22, DNS 53 (UDP und TCP!), DHCP 67/68, RDP 3389, LDAP 389 → LDAPS 636. Merkhilfe: Die unsicheren Klartext-Protokolle (Telnet, FTP, HTTP) sind die Prüfungs-Klassiker für „Was ersetzen Sie hier und warum?“.",
            },
            { type: "heading", value: "Übungsaufgabe: Firewall-Audit" },
            {
              type: "text",
              value:
                "In einer Firewall findest du erlaubte eingehende Ports: 23, 80, 443, 3389 (aus dem Internet auf einen Verwaltungsserver). Bewerte jeden Eintrag und gib eine Empfehlung.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: 23 (Telnet): sofort schließen – Klartext-Fernzugriff, durch SSH (22, nur aus dem Management-Netz) ersetzen. 80 (HTTP): nur belassen, wenn er auf 443 umleitet; Inhalte selbst gehören auf HTTPS. 443 (HTTPS): in Ordnung, sofern der Server öffentlich erreichbar sein MUSS. 3389 (RDP aus dem Internet): hochriskant (Brute-Force, Exploits) – hinter VPN legen oder auf Jump-Host mit MFA beschränken. Grundsatz: Default Deny, jede Öffnung braucht einen dokumentierten Grund.",
            },
          ],
          quiz: [
            {
              id: "imp_ct-net-1_0",
              q: "HTTPS?",
              options: ["8443", "80", "443", "8080"],
              correct: 2,
              explain: "443.",
            },
            {
              id: "imp_ct-net-1_1",
              q: "SSH?",
              options: ["21", "25", "22", "23"],
              correct: 2,
              explain: "22.",
            },
            {
              id: "imp_ct-net-1_2",
              q: "DNS?",
              options: ["53", "67", "25", "80"],
              correct: 0,
              explain: "53.",
            },
            {
              id: "imp_ct-net-1_3",
              q: "RDP?",
              options: ["3306", "443", "22", "3389"],
              correct: 3,
              explain: "3389.",
            },
            {
              id: "imp_ct-net-1_4",
              q: "SMTP mit Auth?",
              options: ["443", "25", "110", "587"],
              correct: 3,
              explain: "587 (SMTP mit Authentifizierung).",
            },
            {
              id: "imp_ct-net-1_5",
              q: "SNMP Port?",
              options: ["514", "22", "53", "161"],
              correct: 3,
              explain: "SNMP: UDP 161 (Abfrage), 162 (Trap).",
            },
            {
              id: "imp_ct-net-1_6",
              q: "Well-Known Ports?",
              options: ["0-65535", "1024-49151", "0-1023", "0-100"],
              correct: 2,
              explain: "Standard-Ports.",
            },
            {
              id: "imp_ct-net-1_7",
              q: "LDAP?",
              options: ["53", "22", "443", "389"],
              correct: 3,
              explain: "389/636.",
            },
            {
              id: "imp_ct-net-1_8",
              q: "Syslog?",
              options: ["22", "161", "514", "389"],
              correct: 2,
              explain: "UDP 514.",
            },
            {
              id: "imp_ct-net-1_9",
              q: "MySQL?",
              options: ["1433", "3306", "3389", "5432"],
              correct: 1,
              explain: "3306.",
            },
            {
              id: "imp_ct-net-1_10",
              q: "Warum sollte Port 23 (Telnet) durch Port 22 (SSH) ersetzt werden?",
              options: [
                "Telnet überträgt zu schnell und überlastet dadurch ältere Netzwerkkomponenten",
                "Telnet überträgt alles inklusive Passwörtern im Klartext, SSH verschlüsselt die Sitzung",
                "Port 23 wurde von der IANA abgeschafft und darf nicht mehr verwendet werden",
                "SSH ist unverschlüsselt und dadurch performanter, was den Umstieg begründet",
              ],
              correct: 1,
              explain:
                "In Audits ist offenes Telnet ein Standardbefund – auf Netzgeräten konsequent deaktivieren.",
            },
            {
              id: "imp_ct-net-1_11",
              q: "Welche Ports nutzt DHCP?",
              options: [
                "UDP 53",
                "TCP 25/110",
                "TCP 80/443",
                "UDP 67 (Server) und UDP 68 (Client)",
              ],
              correct: 3,
              explain:
                "Merkhilfe: Der Server lauscht auf 67, der Client antwortet auf 68 – beides UDP wegen Broadcast-Start.",
            },
            {
              id: "imp_ct-net-1_12",
              q: "Welcher Port gehört zu NTP?",
              options: ["UDP 123", "UDP 514", "TCP 8080", "TCP 321"],
              correct: 0,
              explain:
                "Leicht zu merken: 1-2-3. Zeitsynchronisation ist Voraussetzung für Kerberos, Logs und Zertifikatsprüfung.",
            },
            {
              id: "imp_ct-net-1_13",
              q: "Welche Ports nutzen SNMP-Abfragen und SNMP-Traps?",
              options: [
                "UDP 161 für beides",
                "UDP 161 (Abfragen) und UDP 162 (Traps)",
                "TCP 69",
                "TCP 161/162",
              ],
              correct: 1,
              explain:
                "Traps sind unaufgeforderte Meldungen der Geräte ans Monitoring – v3 verschlüsselt, v1/v2c nur 'Community String'.",
            },
            {
              id: "imp_ct-net-1_14",
              q: "Worin unterscheiden sich Port 389 und 636 bei LDAP?",
              options: [
                "Beide Ports nutzen ausschließlich UDP als Transportprotokoll",
                "389 = LDAP (unverschlüsselt/StartTLS), 636 = LDAPS über TLS",
                "Port 389 steht nur unter Linux-Systemen zur Verfügung",
                "Port 636 bietet lediglich den schnelleren Verbindungsaufbau",
              ],
              correct: 1,
              explain:
                "Verzeichnisabfragen enthalten Konten und Strukturen – produktiv gehört LDAP verschlüsselt.",
            },
            {
              id: "imp_ct-net-1_15",
              q: "Welcher Port gehört zu SMB/Dateifreigaben in Windows-Netzen?",
              options: ["TCP 21", "TCP 3306", "TCP 445", "UDP 69"],
              correct: 2,
              explain:
                "Richtung Internet konsequent blocken – SMB war Einfallstor für Würmer wie WannaCry.",
            },
            {
              id: "imp_ct-net-1_16",
              q: "Welche Ports nutzt klassisches FTP?",
              options: [
                "TCP 25 (Steuerkanal) und TCP 24 (Datenkanal)",
                "TCP 21 (Steuerkanal) und TCP 20 (Datenkanal, aktiv)",
                "TCP 22 für Steuer- und Datenkanal gemeinsam",
                "UDP 21 (Steuerkanal) und UDP 20 (Datenkanal)",
              ],
              correct: 1,
              explain:
                "Heute SFTP (über SSH, Port 22) oder FTPS verwenden – FTP überträgt Anmeldedaten im Klartext.",
            },
            {
              id: "imp_ct-net-1_17",
              q: "Wie läuft der TCP-Drei-Wege-Handshake ab?",
              options: [
                "HELLO → OK → GO",
                "ACK → SYN → FIN",
                "SYN → SYN-ACK → ACK",
                "PING → PONG → DATA",
              ],
              correct: 2,
              explain:
                "Erst danach fließen Daten; halboffene Verbindungen (SYN ohne Abschluss) nutzt der SYN-Flood-Angriff.",
            },
            {
              id: "imp_ct-net-1_18",
              q: "Welche Eigenschaften kennzeichnen UDP?",
              options: [
                "Verbindungslos, ohne Empfangsbestätigung und Reihenfolgegarantie",
                "Die Nutzdaten werden stets automatisch per TLS verschlüsselt",
                "Verbindungsorientiert mit Drei-Wege-Handshake vor der Übertragung",
                "Ausschließlich für E-Mail-Übertragung per SMTP vorgesehen",
              ],
              correct: 0,
              explain:
                "Dafür schnell und schlank. Ideal für Echtzeit (VoIP, Video, DNS-Abfragen): Ein verlorenes Paket nachzusenden wäre dort sinnlos.",
            },
            {
              id: "imp_ct-net-1_19",
              q: "Welcher Standardport gehört zu Microsoft SQL Server?",
              options: ["UDP 53", "TCP 1433", "TCP 5900", "TCP 3306"],
              correct: 1,
              explain:
                "Datenbankports gehören nie offen ins Internet – Zugriff nur aus definierten Netzen/über VPN.",
            },
          ],
        },
        {
          id: "ct-net-2",
          title: "Netzwerk-Troubleshooting",
          content: [
            { type: "heading", value: "Systematisches Vorgehen" },
            {
              type: "text",
              value:
                "Bottom-Up (Schicht 1→7): Kabel → Link → IP → Port/Dienst. Top-Down (7→1): Anwendung → DNS → Routing → Kabel. Divide-and-Conquer: Bei Schicht 3 starten (Ping), dann hoch oder runter.",
            },
            { type: "heading", value: "Häufige Probleme & Lösungen" },
            {
              type: "text",
              value:
                "Kein Link-Light: Kabel prüfen/tauschen, Port prüfen. IP via APIPA (169.254.x.x): DHCP-Server nicht erreichbar → Server/Relay prüfen. Ping lokal OK, extern nicht: Gateway/Routing prüfen. DNS-Auflösung scheitert: nslookup testen, DNS-Server prüfen, alternativen DNS testen (8.8.8.8). Langsames Netzwerk: Duplex-Mismatch, Bandbreitenengpass, Broadcast-Sturm.",
            },
            { type: "heading", value: "Wichtige Tools" },
            {
              type: "text",
              value:
                "Ping, Traceroute, nslookup/dig, Wireshark (Paketanalyse), Netstat/ss, Kabel-Tester, Tongenerator (Toner Probe), OTDR (Glasfaser), Multimeter.",
            },
            {
              type: "heading",
              value: "Systematisches Netzwerk-Troubleshooting: die Methode hinter den Befehlen",
            },
            {
              type: "text",
              value:
                "CompTIA prüft nicht Befehle, sondern METHODE – dieselbe, die dir in jeder Störung hilft: (1) Problem identifizieren (Symptome sammeln, Nutzer befragen, „Was wurde zuletzt geändert?“). (2) Theorie der wahrscheinlichen Ursache aufstellen (von Schicht 1 nach oben denken!). (3) Theorie testen. (4) Plan erstellen und umsetzen. (5) Volle Funktion verifizieren und Präventivmaßnahmen. (6) Dokumentieren. Die Werkzeugkette entlang der Schichten: Kabel/Link-LED → ip/ipconfig (Adresse? APIPA?) → ping Gateway → ping externe IP → nslookup/dig (DNS?) → traceroute (wo bricht der Pfad?) → ss/netstat + telnet Host Port (lauscht der Dienst?). Wer diese Reihenfolge sauber abarbeitet, findet 90 % aller Störungen ohne Raten.",
            },
            { type: "heading", value: "Übungsaufgabe: Der halbe Ausfall" },
            {
              type: "text",
              value:
                "Nutzer melden: Interne Anwendungen erreichbar, aber „kein Internet“. ping 8.8.8.8 vom Client funktioniert, ping google.de nicht. Wende die Methode an: Ursache-Theorie, Test, Behebung.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: Theorie: IP-Konnektivität ins Internet besteht (8.8.8.8 antwortet), die NAMENSAUFLÖSUNG ist gestört → DNS-Problem. Test: nslookup google.de gegen den eingetragenen DNS (Timeout?) und gegen 8.8.8.8 (funktioniert?) – bestätigt: interner DNS-Server/Forwarder gestört. Behebung: Dienst/Forwarder am internen DNS prüfen und neu starten, danach mit nslookup UND im Browser verifizieren; dokumentieren (Ursache, Maßnahme, Zeit). Klassische Prüfungsfalle: „Internet ist weg“ heißt fast nie Leitung – erst Schichten trennen: IP ja/nein, DNS ja/nein.",
            },
          ],
          quiz: [
            {
              id: "imp_ct-net-2_0",
              q: "APIPA-Adresse deutet auf?",
              options: ["Kabelbruch", "DNS-Fehler", "Firewall-Block", "DHCP nicht erreichbar"],
              correct: 3,
              explain: "169.254.x.x = DHCP-Server nicht erreichbar.",
            },
            {
              id: "imp_ct-net-2_1",
              q: "Divide-and-Conquer startet bei?",
              options: ["Schicht 1", "Schicht 7", "Zufällig", "Schicht 3"],
              correct: 3,
              explain: "Bei Schicht 3 (Ping), dann hoch oder runter.",
            },
            {
              id: "imp_ct-net-2_2",
              q: "Ping funktioniert, aber HTTP nicht?",
              options: ["DNS-Problem", "Kabel defekt", "Dienst/Port-Problem", "Netzwerk defekt"],
              correct: 2,
              explain:
                "Firewall, Dienst nicht gestartet. Ping (ICMP) geht, aber Port 80/443 blockiert oder Dienst nicht aktiv.",
            },
            {
              id: "imp_ct-net-2_3",
              q: "Traceroute zeigt * * *?",
              options: ["Alles OK", "Kabel defekt", "Hop antwortet nicht", "DNS kaputt"],
              correct: 2,
              explain:
                "Firewall blockiert ICMP/TTL. Router antwortet nicht auf TTL-expired (ICMP blockiert).",
            },
            {
              id: "imp_ct-net-2_4",
              q: "DNS-Problem diagnostizieren?",
              options: ["netstat", "ipconfig", "ping", "nslookup / dig"],
              correct: 3,
              explain: "nslookup/dig prüfen ob DNS-Auflösung funktioniert.",
            },
            {
              id: "imp_ct-net-2_5",
              q: "DHCP-Lease läuft ab und KEIN DHCP-Server ist erreichbar: Was passiert?",
              options: [
                "Der Client erhält automatisch einen neuen DNS-Server",
                "Client verliert die IP und vergibt sich eine APIPA-Adresse (169.254.x.x)",
                "Nichts – die IP-Adresse bleibt dauerhaft gültig",
                "Der Client startet automatisch neu, um eine IP zu erhalten",
              ],
              correct: 1,
              explain:
                "Normalerweise erneuert der Client die Lease rechtzeitig (T1/T2). Antwortet kein Server, fällt er auf APIPA zurück – lokale Verbindung ja, aber kein Routing/Internet.",
            },
            {
              id: "imp_ct-net-2_6",
              q: "Intermittent?",
              options: ["Sporadischer Ausfall", "Kein Netz", "Nur WLAN", "Dauerhaft"],
              correct: 0,
              explain: "Schwer zu finden.",
            },
            {
              id: "imp_ct-net-2_7",
              q: "Cable Tester?",
              options: ["Scanner", "HW prüft Kabel physisch", "SW", "Ping"],
              correct: 1,
              explain: "Durchgang prüfen.",
            },
            {
              id: "imp_ct-net-2_8",
              q: "Loopback 127.0.0.1?",
              options: ["Prüft lokalen TCP/IP-Stack", "Traceroute", "Extern", "ARP"],
              correct: 0,
              explain: "Eigener Stack.",
            },
            {
              id: "imp_ct-net-2_9",
              q: "Wozu dient eine Performance-Baseline?",
              options: ["Backup", "Nur Install", "Normalzustand als Vergleich", "FW"],
              correct: 2,
              explain: "Abweichungen erkennen.",
            },
            {
              id: "imp_ct-net-2_10",
              q: "Mit welchem Werkzeug prüfst du gezielt die DNS-Auflösung?",
              options: ["chkdsk", "nslookup (bzw. dig)", "format c:", "ping ohne Parameter"],
              correct: 1,
              explain:
                "Abfrage gegen einen wählbaren DNS-Server. nslookup www.firma.de 8.8.8.8 trennt sauber: Liegt es am eigenen DNS oder am Eintrag selbst?",
            },
            {
              id: "imp_ct-net-2_11",
              q: "Was bewirken ipconfig /release und /renew?",
              options: [
                "Sie formatieren die Systempartition der Festplatte",
                "Sie ändern die MAC-Adresse des Netzwerkadapters",
                "Die DHCP-Adresse wird freigegeben und neu angefordert",
                "Sie starten den angeschlossenen Router aus der Ferne neu",
              ],
              correct: 2,
              explain:
                "Dazu ipconfig /all für Details und ipconfig /flushdns für den Namenscache – die Windows-Basistrias.",
            },
            {
              id: "imp_ct-net-2_12",
              q: "Was zeigt netstat -an?",
              options: [
                "Die im System gespeicherten WLAN-Passwörter aller bekannten Funknetze",
                "Die aktuelle Druckerwarteschlange mit allen anstehenden Druckaufträgen",
                "Den vollständigen Browserverlauf mit allen zuletzt besuchten Webseiten",
                "Aktive Verbindungen und lauschende Ports mit Adressen in Zahlenform",
              ],
              correct: 3,
              explain:
                "Welcher Prozess lauscht auf 8080? netstat -ano plus Task-Manager-PID beantwortet das in einer Minute.",
            },
            {
              id: "imp_ct-net-2_13",
              q: "Welche zwei klassischen Symptome hat ein Duplex-Mismatch?",
              options: [
                "Doppelte IP-Adressen und ständige ARP-Konflikte zwischen den beiden Endgeräten",
                "Late Collisions und massiv einbrechender Durchsatz bei größeren Übertragungen",
                "Falsche Uhrzeit auf beiden Geräten und fehlgeschlagene NTP-Synchronisation",
                "Vollständiger Linkausfall, da die Ports sich gar nicht erst verbinden können",
              ],
              correct: 1,
              explain:
                "Ping funktioniert oft unauffällig – erst Dateitransfers brechen ein. Interface-Zähler prüfen!",
            },
            {
              id: "imp_ct-net-2_14",
              q: "Wofür nutzt man einen Protokoll-Analyzer wie Wireshark?",
              options: [
                "Als signaturbasierter Virenscanner, der Schadsoftware auf Endgeräten erkennt und entfernt",
                "Zur zentralen Verwaltung und Inventarisierung von Softwarelizenzen im Unternehmensnetz",
                "Mitschnitt und Analyse des tatsächlichen Netzwerkverkehrs auf Paketebene",
                "Zum fachgerechten Crimpen und anschließenden Durchmessen von Twisted-Pair-Kabeln",
              ],
              correct: 2,
              explain:
                "Wenn Logs nicht reichen: Capture mit Filter (z. B. host 10.0.0.5 and port 443) zeigt, was wirklich über die Leitung geht.",
            },
            {
              id: "imp_ct-net-2_15",
              q: "Top-Down vs. Bottom-Up beim Netz-Troubleshooting bedeutet …",
              options: [
                "Man arbeitet sich im Gebäude vom obersten Stockwerk zu den unteren Etagen vor",
                "Man prüft zuerst alle Server und erst danach die Drucker und Endgeräte",
                "Man arbeitet die betroffenen Geräte alphabetisch nach ihren Hostnamen ab",
                "Start bei Anwendung (Top) bzw. bei Kabel/Physik (Bottom) entlang der OSI-Schichten",
              ],
              correct: 3,
              explain:
                "Erfahrene Praxis: Divide and Conquer – in der Mitte (z. B. Schicht 3: Ping) starten und je nach Ergebnis hoch oder runter.",
            },
            {
              id: "imp_ct-net-2_16",
              q: "Wann ist eine Eskalation des Tickets korrekt?",
              options: [
                "Wenn Lösung außerhalb der eigenen Kompetenz/Rechte liegt",
                "Grundsätzlich nur freitags vor dem Wochenende",
                "Niemals – Eskalation gilt als Eingeständnis von Schwäche",
                "Sofort bei jedem eingehenden Ticket ohne eigene Prüfung",
              ],
              correct: 0,
              explain:
                "Mit dokumentierten bisherigen Schritten. Saubere Übergabe (Symptome, Tests, Ergebnisse) spart dem nächsten Level die doppelte Arbeit.",
            },
            {
              id: "imp_ct-net-2_17",
              q: "Was leistet nmap?",
              options: [
                "Es ist ein Passwortmanager",
                "Port-Scans und Diensterkennung",
                "Es misst die Temperatur",
                "Es repariert Kabel",
              ],
              correct: 1,
              explain:
                "Welche Ports/Versionen sind auf einem Host erreichbar. Nur mit Auftrag/Erlaubnis einsetzen – ungenehmigte Scans fremder Systeme sind rechtlich heikel.",
            },
            {
              id: "imp_ct-net-2_18",
              q: "Womit misst man den tatsächlichen Durchsatz zwischen zwei Hosts?",
              options: ["iperf3 (Client/Server-Messung)", "ping -t", "nslookup", "tracert"],
              correct: 0,
              explain:
                "Ping misst Latenz, nicht Bandbreite – iperf zeigt, ob die Leitung hält, was der Vertrag verspricht.",
            },
            {
              id: "imp_ct-net-2_19",
              q: "Was kombiniert pathping?",
              options: [
                "Nichts – pathping ist kein eigener Befehl, sondern nur ein Alias für ping ohne Zusatzfunktionen",
                "Tracert-Pfadanzeige mit Paketverlust-Statistik je Hop über einen Messzeitraum",
                "Die Sicherung und Wiederherstellung von Netzwerkkonfigurationen in einem Kommando",
                "Die Namensauflösung per DNS mit der automatischen Adressvergabe per DHCP in einem Test",
              ],
              correct: 1,
              explain:
                "Ideal bei sporadischen Aussetzern: Der Hop mit Verlusten wird statistisch sichtbar.",
            },
          ],
        },
        {
          id: "ct-net-3",
          title: "WAN-Technologien & SD-WAN",
          content: [
            { type: "heading", value: "WAN-Technologien" },
            {
              type: "text",
              value:
                "MPLS (Multiprotocol Label Switching): Schnelles Label-basiertes Routing, QoS-fähig, teuer, wird von Carriern bereitgestellt. Metro Ethernet: Ethernet über Carrier-Netz im Stadtbereich. Leased Line: Dedizierte Punkt-zu-Punkt-Verbindung, garantierte Bandbreite, sehr teuer. DSL/Kabel/Glasfaser: Consumer/Business-Internet, shared medium, günstiger.",
            },
            { type: "heading", value: "SD-WAN (Software-Defined WAN)" },
            {
              type: "text",
              value:
                "Abstrahiert WAN-Verbindungen per Software. Kann MPLS + Internet + LTE kombinieren und intelligent routen. Vorteile: Kostensenkung (MPLS durch Internet ersetzen), zentrale Verwaltung, automatisches Failover, Application-Awareness (z.B. VoIP über MPLS, Web über Internet). Anbieter: Cisco Viptela, VMware VeloCloud, Fortinet.",
            },
            { type: "heading", value: "QoS (Quality of Service)" },
            {
              type: "text",
              value:
                "Priorisierung von Netzwerkverkehr. Wichtig für VoIP und Video. Mechanismen: Classification (Pakete markieren, DSCP), Queuing (Priorisierte Warteschlangen), Shaping (Bandbreite begrenzen), Policing (Überschüssiges verwerfen). VoIP braucht: <150ms Latenz, <30ms Jitter, <1% Paketverlust.",
            },
            { type: "heading", value: "Vertiefung: WAN-Anbindungen bewerten wie ein Planer" },
            {
              type: "text",
              value:
                "Network+ fragt WAN-Wissen als Entscheidungsaufgabe. Die Kandidaten: DSL/VDSL (Kupfer, asymmetrisch, günstig, Upload-schwach), Kabel (DOCSIS, shared medium – Abendstau möglich), GLASFASER FTTH (symmetrisch möglich, skalierbar – erste Wahl, wo verfügbar), Richtfunk (schnell verfügbar, wetteranfällig), Mobilfunk 4G/5G (Backup! Volumen und Latenz beachten), Standleitung/Ethernet-Line (garantierte Bandbreite mit SLA, teuer). Moderne Firmenvernetzung: statt teurer MPLS-Leitungen überall SD-WAN – mehrere günstige Internet-Anschlüsse je Standort, eine Software steuert Pfadwahl je Anwendung, misst Qualität live und failovert automatisch; Site-to-Site-VPNs verschlüsseln darüber. Bewertungskriterien in jeder Aufgabe: Bandbreite (up UND down!), Latenz, Verfügbarkeit/SLA, Kosten, Ausbauzeit, Redundanzfähigkeit (zweiter Weg über ANDERE Technik/Trasse).",
            },
            { type: "heading", value: "Übungsaufgabe: Filiale anbinden" },
            {
              type: "text",
              value:
                "Eine neue Filiale (12 Arbeitsplätze, Cloud-Telefonie, tägliche Backups von 30 GB zur Zentrale) hat zur Auswahl: VDSL 100/40, Kabel 500/50, FTTH 300/300 (Mehrpreis 25 €/Monat). Zusätzlich soll ein Ausfall-Backup her. Gib eine begründete Empfehlung für Haupt- und Backup-Anschluss.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: Haupt: FTTH 300/300 – der UPLOAD entscheidet: 30 GB Backup über 40 Mbit/s Upload ≈ 1,7 h, über 300 Mbit/s ≈ 13 min; Cloud-Telefonie profitiert von niedriger, stabiler Latenz; 25 € Mehrpreis sind gegen Arbeitszeit/Backupfenster trivial. Backup: Mobilfunk 5G-Router – ANDERES Übertragungsmedium und andere Trasse als die Glasfaser (Kabel/VDSL teilen sich oft den Weg ins Haus), automatischer Failover in der Firewall. Kabel als Backup wäre zweite Wahl, wenn 5G-Abdeckung schlecht ist.",
            },
          ],
          quiz: [
            {
              id: "imp_ct-net-3_0",
              q: "SD-WAN Hauptvorteil?",
              options: [
                "Intelligente Nutzung mehrerer WAN-Verbindungen",
                "Schnellere CPUs in den angebundenen Routern",
                "Bessere Darstellung auf Monitoring-Bildschirmen",
                "Mehr physische Kabelwege zwischen den Standorten",
              ],
              correct: 0,
              explain: "SD-WAN kombiniert verschiedene WAN-Links intelligent und spart Kosten.",
            },
            {
              id: "imp_ct-net-3_1",
              q: "VoIP max. Latenz?",
              options: ["<1000ms", "<50ms", "<500ms", "<150ms"],
              correct: 3,
              explain: "VoIP braucht <150ms Latenz für akzeptable Qualität.",
            },
            {
              id: "imp_ct-net-3_2",
              q: "MPLS = ?",
              options: [
                "Main Provider Line Service (Provider-Standleitung)",
                "Multi-Protocol Label Switching (WAN-Technologie)",
                "Mobile Protocol Link Service (Mobilfunk-Standard)",
                "Maximum Packet Length Standard (Paketgrößen-Norm)",
              ],
              correct: 1,
              explain: "MPLS: Labels statt IP-Routing für effizientes WAN-Routing.",
            },
            {
              id: "imp_ct-net-3_3",
              q: "Welche Kostenposition ersetzt SD-WAN typischerweise?",
              options: [
                "Das lokale LAN mitsamt den Switches",
                "Teure exklusive MPLS-Leitungen – durch intelligente Mischung mit günstigen Internet-Links",
                "Die Firewalls an den Standorten",
                "Die Endgeräte der Mitarbeiter",
              ],
              correct: 1,
              explain:
                "SD-WAN steuert den Verkehr anwendungsbezogen über mehrere WAN-Links – kritischer Verkehr über die Qualitätsleitung, Rest übers Internet. Das senkt die MPLS-Kosten deutlich.",
            },
            {
              id: "imp_ct-net-3_4",
              q: "Metro Ethernet?",
              options: ["Heimnetzwerk", "Ethernet-basiertes MAN (Stadtgebiet)", "Nur LAN", "WLAN"],
              correct: 1,
              explain: "Ethernet-Technologie für Metropolitan Area Networks.",
            },
            {
              id: "imp_ct-net-3_5",
              q: "DMVPN?",
              options: [
                "DNS-VPN",
                "Desktop-VPN",
                "Statisches VPN",
                "Dynamic Multipoint VPN (Spoke-to-Spoke)",
              ],
              correct: 3,
              explain: "DMVPN: Spokes können direkt kommunizieren ohne Hub.",
            },
            {
              id: "imp_ct-net-3_6",
              q: "Leased Line?",
              options: ["Geteilt", "Dedizierte Standleitung", "Nur Kupfer", "Nur GF"],
              correct: 1,
              explain: "Garantierte BW.",
            },
            {
              id: "imp_ct-net-3_7",
              q: "DSL vs Glasfaser?",
              options: [
                "Gleich",
                "GF = höhere BW + niedrigere Latenz",
                "DSL schneller",
                "GF teurer immer",
              ],
              correct: 1,
              explain: "GF überlegen.",
            },
            {
              id: "imp_ct-net-3_8",
              q: "QoS warum?",
              options: ["Kritischen Traffic priorisieren", "Unnötig", "Nur GF", "Gaming"],
              correct: 0,
              explain: "VoIP <150ms.",
            },
            {
              id: "imp_ct-net-3_9",
              q: "MPLS Label?",
              options: ["DNS", "Routing-Label für effizientes Forwarding", "IP", "MAC"],
              correct: 1,
              explain: "Label statt IP-Lookup.",
            },
            {
              id: "imp_ct-net-3_10",
              q: "Warum hat geostationäres Satelliten-Internet hohe Latenz?",
              options: [
                "Die Signallaufzeit über ~36.000 km Orbithöhe erzeugt prinzipbedingt mehrere hundert ms RTT",
                "Aus Lizenzgründen: Regulierungsbehörden drosseln Satellitenverbindungen künstlich auf hohe Latenzen",
                "Die Empfangsantennen sind zu klein dimensioniert und verzögern dadurch die Signalverarbeitung",
                "Wegen IPv4: Das Protokoll ist für Satellitenstrecken nicht ausgelegt und bremst die Übertragung",
              ],
              correct: 0,
              explain:
                "LEO-Konstellationen (z. B. Starlink) senken die Latenz deutlich – für Echtzeitanwendungen der Unterschied.",
            },
            {
              id: "imp_ct-net-3_11",
              q: "Was ist 5G Fixed Wireless Access (FWA) im WAN-Kontext?",
              options: [
                "Ein Satellitendienst für abgelegene Regionen ohne Netz",
                "Ein WLAN-Standard für Innenräume mit 5-GHz-Band",
                "Standortanbindung über das Mobilfunknetz statt Leitung",
                "Eine Glasfasertechnik für den letzten Kilometer",
              ],
              correct: 2,
              explain:
                "Schnell verfügbar, gut als Backup-WAN. Beliebt als Failover im SD-WAN: zweiter, physisch unabhängiger Weg ohne Tiefbau.",
            },
            {
              id: "imp_ct-net-3_12",
              q: "Worin unterscheiden sich Site-to-Site- und Remote-Access-VPN?",
              options: [
                "Site-to-Site-VPNs übertragen unverschlüsselt, da sich die Gateways in vertrauenswürdigen Firmennetzen befinden",
                "Kein Unterschied – beide Varianten verbinden einzelne Endgeräte und unterscheiden sich nur im Namen",
                "Site-to-Site verbindet ganze Standorte über Gateways dauerhaft; Remote Access verbindet einzelne Endgeräte/Nutzer",
                "Remote-Access-VPN verbindet ausschließlich Server untereinander, niemals einzelne Arbeitsplätze",
              ],
              correct: 2,
              explain:
                "Im Projektalltag: Filiale = Site-to-Site (IPsec), Homeoffice = Remote Access (SSL/IPsec-Client).",
            },
            {
              id: "imp_ct-net-3_13",
              q: "Was bedeutet Split Tunneling beim VPN?",
              options: [
                "Der Tunnel wird doppelt verschlüsselt, indem zwei VPN-Protokolle geschachtelt werden",
                "Jeder Nutzer erhält zwei getrennte physische Leitungen für den VPN-Zugang",
                "Nur Unternehmensziele laufen durch den Tunnel, übriger Traffic geht direkt ins Internet",
                "Der Tunnel teilt sich die Funkantenne mit dem WLAN, um Hardware zu sparen",
              ],
              correct: 2,
              explain:
                "Entlastet die Zentrale, reduziert aber die Kontrolle über den Internetverkehr – eine Policy-Abwägung.",
            },
            {
              id: "imp_ct-net-3_14",
              q: "Was zeichnet eine Standleitung (Leased Line/DIA) gegenüber Consumer-Anschlüssen aus?",
              options: [
                "Nur Download, kein Upload",
                "Sie braucht kein Modem",
                "Garantierte symmetrische Bandbreite mit SLA",
                "Sie ist immer billiger",
              ],
              correct: 2,
              explain:
                "Dazu gehören zugesicherte Verfügbarkeit und Entstörzeit. Fürs Unternehmens-WAN zählt das SLA: 99,9 % Verfügbarkeit und definierte Entstörung statt 'bis zu'-Bandbreite.",
            },
            {
              id: "imp_ct-net-3_15",
              q: "Was beschreibt die 'letzte Meile'?",
              options: [
                "Die letzte Kabelstrecke innerhalb des Rechenzentrums",
                "Den Abschnitt vom Anbieter-Verteiler bis zum Kundenstandort",
                "Eine Laufsporteinheit",
                "Den überregionalen Backbone im Kernnetz des Providers",
              ],
              correct: 1,
              explain:
                "Häufigster Engpass und Kostentreiber. Glasfaser bis zum Gebäude (FTTB/FTTH) vs. Kupfer ab Verteiler entscheidet über realistische Bandbreiten.",
            },
            {
              id: "imp_ct-net-3_16",
              q: "Welcher Kernvorteil macht SD-WAN transportunabhängig?",
              options: [
                "Es abstrahiert die Unterleitungen (MPLS, Internet, LTE/5G) und steuert Anwendungen policy-basiert über den jeweils besten Pfad",
                "Der Anbieter verlegt eigene Glasfaserkabel zwischen den Standorten und wird dadurch unabhängig von fremden Transportnetzen",
                "Es ersetzt Firewalls vollständig, da der SD-WAN-Controller sämtliche Sicherheitsfunktionen der Standorte übernimmt",
                "Es setzt zwingend MPLS als einzige Transporttechnologie voraus und garantiert darüber feste Bandbreiten je Anwendung",
              ],
              correct: 0,
              explain:
                "Messung von Latenz/Jitter/Loss je Pfad plus automatischem Failover – zentral orchestriert.",
            },
            {
              id: "imp_ct-net-3_17",
              q: "Wie erreicht man WAN-Redundanz am Standort klassisch?",
              options: [
                "Durch zwei parallele Patchkabel zwischen Router und demselben Modem, um den Ausfall eines Kabels abzufangen",
                "Durch einen langfristigen Vertrag mit dem Provider, der eine bevorzugte Entstörung vertraglich garantiert",
                "Zwei Anschlüsse unterschiedlicher Provider/Technologien mit automatischem Failover (Dual-WAN)",
                "Gar nicht – ein Standort kann technisch immer nur über einen einzigen WAN-Anschluss angebunden werden",
              ],
              correct: 2,
              explain:
                "Wichtig: echte Wegeredundanz prüfen – zwei Verträge über dieselbe Trasse fallen gemeinsam aus.",
            },
            {
              id: "imp_ct-net-3_18",
              q: "Was leistet WAN-Optimierung (z. B. Deduplizierung, Caching, Kompression)?",
              options: [
                "Sie reduziert übertragene Datenmengen und beschleunigt Anwendungen über langsame/teure Strecken",
                "Sie macht separate Backups überflüssig, da alle Daten bereits dedupliziert vorliegen",
                "Sie erhöht die physikalische Bandbreite der Leitung, indem sie zusätzliche Frequenzen freischaltet",
                "Sie dient ausschließlich der Verschlüsselung des WAN-Verkehrs ohne Einfluss auf die Datenmenge",
              ],
              correct: 0,
              explain:
                "Besonders wirksam bei wiederholten Übertragungen (Backups, Dateisync) zwischen Standorten.",
            },
            {
              id: "imp_ct-net-3_19",
              q: "Metro Ethernet eignet sich wofür?",
              options: [
                "Ausschließlich für das öffentliche WLAN in U-Bahnen und Stadtbussen des Nahverkehrs",
                "Satellitenkommunikation zwischen Kontinenten mit Ethernet-Frames über geostationäre Satelliten",
                "Die Anbindung einzelner Heimanschlüsse in dünn besiedelten ländlichen Regionen",
                "Standortvernetzung innerhalb eines Ballungsraums mit Ethernet-Schnittstellen und hoher Bandbreite",
              ],
              correct: 3,
              explain:
                "Für Firmen attraktiv: vertraute Ethernet-Technik, skalierbare Bandbreiten, oft günstiger als klassische Mietleitungen.",
            },
          ],
        },
      ],
    },
    {
      id: "ct-sec",
      title: "CompTIA Security+",
      lessons: [
        {
          id: "ct-sec-1",
          title: "Angriffe & Authentifizierung",
          content: [
            { type: "heading", value: "Angriffskategorien" },
            {
              type: "text",
              value:
                "Social Engineering: Phishing (gefälschte E-Mails), Spear-Phishing (gezielt auf Person), Whaling (auf Führungskräfte), Vishing (Telefon), Smishing (SMS), Pretexting (falsche Identität), Baiting (USB-Stick mit Malware), Tailgating (unbemerkt mitgehen).",
            },
            {
              type: "text",
              value:
                "Netzwerkangriffe: DoS/DDoS (Überlastung), Man-in-the-Middle (Kommunikation abfangen), DNS Spoofing (gefälschte DNS-Antworten), ARP Spoofing (MAC-Tabelle manipulieren), Replay Attack (aufgezeichnete Daten wiederholen).",
            },
            {
              type: "text",
              value:
                "Anwendungsangriffe: SQL Injection (Datenbankbefehle einschleusen), XSS (JavaScript in Webseite einschleusen), CSRF (Aktion im Namen des Benutzers), Buffer Overflow, Brute Force / Dictionary Attack, Zero-Day (unbekannte Schwachstelle).",
            },
            { type: "heading", value: "Authentifizierung: AAA-Konzept" },
            {
              type: "text",
              value:
                "Authentication (Wer bist du?): Identität nachweisen. Authorization (Was darfst du?): Rechte/Berechtigungen prüfen. Accounting (Was hast du getan?): Protokollierung. Faktoren: Wissen (Passwort, PIN), Besitz (Smartcard, Token, Smartphone), Biometrie (Fingerabdruck, Gesicht, Iris). 2FA/MFA = min. 2 VERSCHIEDENE Faktortypen. 2x Passwort ist KEIN 2FA! RADIUS/TACACS+: AAA-Protokolle für zentrale Authentifizierung (WLAN, VPN, Switches).",
            },
            {
              type: "heading",
              value: "Vertiefung: Angriffe erkennen und die passende Abwehr zuordnen",
            },
            {
              type: "text",
              value:
                "Security+ prüft Paare aus Angriff und Gegenmaßnahme: PHISHING/Spear-Phishing → Awareness, Mailfilter, MFA (stiehlt das Passwort, scheitert am zweiten Faktor). BRUTE FORCE/Credential Stuffing → Sperrrichtlinien, lange Passphrasen, MFA, Leak-Monitoring. MITM/Evil Twin → TLS überall, Zertifikate prüfen, kein offenes WLAN für Vertrauliches, 802.1X. DoS/DDoS → Rate-Limiting, CDN/Scrubbing, Redundanz. SQL-INJECTION → Prepared Statements. RANSOMWARE → Offline-Backups, Segmentierung, Patchen, Least Privilege. INSIDER → Berechtigungskonzept, Logging, Vier-Augen-Prinzip. Bei Authentifizierung die Faktor-Klassen sauber trennen: Wissen (Passwort/PIN), Besitz (Token, Smartphone, FIDO2-Key), Merkmal (Biometrie) – MFA heißt ZWEI VERSCHIEDENE Klassen (Passwort + PIN ist KEIN MFA, zweimal Wissen!).",
            },
            { type: "heading", value: "Übungsaufgabe: Faktor-Check" },
            {
              type: "text",
              value:
                "Bewerte, ob echtes MFA vorliegt: a) Passwort + SMS-Code, b) Passwort + Sicherheitsfrage, c) Fingerabdruck + FIDO2-Stick, d) PIN + Firmen-Smartcard. Und: Welche Variante gilt als Phishing-resistent, welche als schwächster Besitzfaktor?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: a) JA (Wissen + Besitz), aber SMS ist der schwächste Besitzfaktor (SIM-Swapping, Abfangen). b) NEIN – zweimal Wissen, kein MFA. c) JA (Merkmal + Besitz) – FIDO2 ist Phishing-resistent, weil die Signatur an die echte Domain gebunden ist; auf einer Fake-Seite funktioniert der Stick schlicht nicht. d) JA (Wissen + Besitz), klassisches Firmen-Setup. Merksatz für die Prüfung: Klassen zählen, nicht Schritte.",
            },
          ],
          quiz: [
            {
              id: "imp_ct-sec-1_0",
              q: "2FA braucht?",
              options: ["2 Geräte", "2 Benutzer", "2 verschiedene Faktortypen", "2x Passwort"],
              correct: 2,
              explain: "2 VERSCHIEDENE Faktoren (z.B. Passwort + App-Token).",
            },
            {
              id: "imp_ct-sec-1_1",
              q: "Spear-Phishing vs. Phishing?",
              options: [
                "Spear = per SMS",
                "Spear = gezielt auf eine Person",
                "Spear = per Telefon",
                "Gleich",
              ],
              correct: 1,
              explain: "Spear-Phishing = gezielt auf eine bestimmte Person/Organisation.",
            },
            {
              id: "imp_ct-sec-1_2",
              q: "AAA: Was bedeutet Accounting?",
              options: [
                "Authentifizierung",
                "Autorisierung",
                "Protokollierung (was wurde getan)",
                "Buchhaltung",
              ],
              correct: 2,
              explain: "Accounting = Protokollierung der Aktionen.",
            },
            {
              id: "imp_ct-sec-1_3",
              q: "RADIUS dient?",
              options: ["Routing", "DNS", "DHCP", "Zentrale Authentifizierung (AAA)"],
              correct: 3,
              explain: "RADIUS: Zentraler AAA-Server.",
            },
            {
              id: "imp_ct-sec-1_4",
              q: "SQL Injection?",
              options: [
                "Ein Einsteigerkurs zum Erlernen der Sprache SQL",
                "Schadhafte SQL über Eingabefelder einschleusen",
                "Das Optimieren langsamer Datenbankabfragen",
                "Ein Verfahren zum Beschleunigen von SQL-Abfragen",
              ],
              correct: 1,
              explain: "Angreifer schleust SQL über ungeprüfte Eingaben ein.",
            },
            {
              id: "imp_ct-sec-1_5",
              q: "XSS = ?",
              options: [
                "Datenbank-Angriff",
                "Netzwerk-Scan",
                "Cross-Site Scripting",
                "Brute Force",
              ],
              correct: 2,
              explain:
                "JavaScript einschleusen. XSS: Schadhaften JavaScript-Code in die Webseite einschleusen.",
            },
            {
              id: "imp_ct-sec-1_6",
              q: "Privilege Escalation?",
              options: ["Login", "Admin werden", "PW ändern", "Höhere Rechte als berechtigt"],
              correct: 3,
              explain: "Schwachstelle nutzen.",
            },
            {
              id: "imp_ct-sec-1_7",
              q: "Honeypot?",
              options: ["Falle für Angreifer", "FW", "Tool", "VPN"],
              correct: 0,
              explain: "Methoden studieren.",
            },
            {
              id: "imp_ct-sec-1_8",
              q: "MFA vs 2FA?",
              options: ["Gleich", "MFA schwächer", "2FA=2, MFA=2+ Faktoren", "2FA mehr"],
              correct: 2,
              explain: "MFA⊇2FA.",
            },
            {
              id: "imp_ct-sec-1_9",
              q: "Dictionary Attack?",
              options: ["DNS", "Lesen", "DDoS", "Passwort-Crack mit Wortlisten"],
              correct: 3,
              explain: "Wortlisten probieren.",
            },
            {
              id: "imp_ct-sec-1_10",
              q: "Was ist Credential Stuffing?",
              options: [
                "Geleakte Benutzer/Passwort-Paare werden automatisiert bei anderen Diensten durchprobiert",
                "Ein Hardware-Angriff, bei dem manipulierte USB-Geräte Tastatureingaben mitschneiden",
                "Das systematische Durchprobieren zufällig generierter Passwörter (Brute Force)",
                "Das automatisierte Ausfüllen von Webformularen mit gefälschten Adressdaten",
              ],
              correct: 0,
              explain:
                "Funktioniert, weil Passwörter wiederverwendet werden – Gegenmittel: einzigartige Passwörter (Passwortmanager) + MFA.",
            },
            {
              id: "imp_ct-sec-1_11",
              q: "Was unterscheidet Password Spraying vom klassischen Brute Force?",
              options: [
                "Es erfordert physischen Zugang zum Rechner des jeweiligen Opfers",
                "Es probiert alle denkbaren Passwörter gegen ein einzelnes Konto",
                "Wenige gängige Passwörter werden gegen VIELE Konten getestet",
                "Es ist lauter und löst dadurch schneller Kontosperrungen aus",
              ],
              correct: 2,
              explain:
                "Das umgeht Konto-Sperrschwellen. Erkennung über Fehlversuche VERTEILT über viele Konten – ein Fall fürs zentrale Log-Monitoring.",
            },
            {
              id: "imp_ct-sec-1_12",
              q: "Wogegen schützt das Salting von Passwort-Hashes?",
              options: [
                "Gegen SQL-Injection: Der Salt maskiert Sonderzeichen in Eingaben vor der Datenbank",
                "Gegen Datenverlust bei Stromausfall, da der Salt als Prüfsumme die Hashes wiederherstellt",
                "Gegen Phishing: Gesalzene Hashes lassen sich auf gefälschten Seiten nicht eingeben",
                "Gegen Rainbow-Table-Angriffe: gleiche Passwörter ergeben unterschiedliche Hashes",
              ],
              correct: 3,
              explain:
                "Salt = zufälliger Zusatz pro Passwort; moderne Verfahren (bcrypt, Argon2) sind zusätzlich absichtlich langsam.",
            },
            {
              id: "imp_ct-sec-1_13",
              q: "Welche drei Faktor-Kategorien nutzt MFA?",
              options: [
                "Alter, Beruf und Wohnort der anzumeldenden Person",
                "Zwei verschiedene Passwörter plus eine Sicherheitsfrage",
                "Benutzername, Passwort und hinterlegte E-Mail-Adresse",
                "Wissen (Passwort), Besitz (Token/Smartphone), Inhärenz (Biometrie)",
              ],
              correct: 3,
              explain: "Zwei Faktoren derselben Kategorie (zwei Passwörter) sind KEINE echte MFA.",
            },
            {
              id: "imp_ct-sec-1_14",
              q: "Was ist MFA-Fatigue (Push-Bombing)?",
              options: [
                "Der Angreifer löst massenhaft Push-Anfragen aus, bis das Opfer entnervt bestätigt",
                "Ein Hardwaredefekt am MFA-Token, durch den keine Einmalcodes mehr erzeugt werden",
                "Ein Akku-Problem des Smartphones, das die Authenticator-App vorzeitig beendet",
                "Die Ermüdung von Benutzern, die durch zu lange und komplexe Passwörter entsteht",
              ],
              correct: 0,
              explain:
                "Gegenmittel: Number Matching/Code-Eingabe statt simplem Bestätigen, Limits und Phishing-resistente Verfahren (FIDO2).",
            },
            {
              id: "imp_ct-sec-1_15",
              q: "Worin unterscheidet sich TACACS+ von RADIUS?",
              options: [
                "TACACS+ (TCP 49) verschlüsselt das gesamte Paket und trennt AAA",
                "Beide Protokolle sind funktional identisch und frei austauschbar",
                "RADIUS ist ausschließlich für die Anmeldung von WLAN-Druckern gedacht",
                "TACACS+ überträgt sämtliche Daten unverschlüsselt über UDP",
              ],
              correct: 0,
              explain:
                "Standard für Geräteverwaltung; RADIUS für Netzzugang. Merksatz: RADIUS = Network Access (802.1X, VPN), TACACS+ = Device Administration (wer darf welche CLI-Befehle).",
            },
            {
              id: "imp_ct-sec-1_16",
              q: "Wie funktioniert Kerberos im Kern?",
              options: [
                "Ein KDC stellt zeitlich begrenzte Tickets aus",
                "Jeder Dienst speichert alle Passwörter",
                "Es sendet Passwörter im Klartext",
                "Es ist ein Hardware-Token",
              ],
              correct: 0,
              explain:
                "Dienste prüfen Tickets statt Passwörter. Deshalb ist Zeitsynchronisation kritisch: Mehr als ~5 Minuten Drift und die Anmeldung in der AD-Domäne scheitert.",
            },
            {
              id: "imp_ct-sec-1_17",
              q: "Welche Chance und welches Risiko bringt Single Sign-On?",
              options: [
                "Komfort und zentrale Kontrolle",
                "Es verhindert MFA",
                "Es ersetzt Passwörter ersatzlos ohne Risiko",
                "Nur Nachteile",
              ],
              correct: 0,
              explain:
                "Aber ein kompromittiertes Konto öffnet viele Dienste. Konsequenz: das SSO-Konto besonders härten (starke MFA, Conditional Access, Monitoring).",
            },
            {
              id: "imp_ct-sec-1_18",
              q: "Was bewirkt eine Account-Lockout-Policy?",
              options: [
                "Sie verlängert zu kurze Passwörter automatisch",
                "Sie löscht inaktive Konten nach 90 Tagen automatisch",
                "Nach X Fehlversuchen wird das Konto temporär gesperrt",
                "Sie deaktiviert MFA für vertrauenswürdige Geräte",
              ],
              correct: 2,
              explain:
                "Brute Force wird ausgebremst. Nebenwirkung beachten: Angreifer können Sperren gezielt provozieren (DoS auf Konten) – Schwellen mit Augenmaß.",
            },
            {
              id: "imp_ct-sec-1_19",
              q: "Was unterscheidet Vishing und Smishing vom klassischen Phishing?",
              options: [
                "Sie betreffen nur Privatpersonen",
                "Sie sind technische Exploits ohne Menschen",
                "Es sind Schreibfehler",
                "Vishing nutzt Telefonanrufe, Smishing SMS/Messenger",
              ],
              correct: 3,
              explain:
                "Das Ziel (Daten/Geld erschleichen) bleibt gleich. Awareness-Schulungen müssen alle Kanäle abdecken – der 'IT-Support' am Telefon ist ein Klassiker.",
            },
          ],
        },
        {
          id: "ct-sec-2",
          title: "PKI, Zertifikate & Zero Trust",
          content: [
            { type: "heading", value: "PKI (Public Key Infrastructure)" },
            {
              type: "text",
              value:
                "System zur Verwaltung digitaler Zertifikate. CA (Certificate Authority) stellt Zertifikate aus. Hierarchie: Root-CA → Intermediate-CA → Endbenutzer-Zertifikat. Zertifikat enthält: Public Key, Inhaberdaten, Gültigkeitsdauer, Signatur der CA. CRL (Certificate Revocation List) / OCSP: Prüfen, ob Zertifikat widerrufen wurde.",
            },
            { type: "heading", value: "TLS-Zertifikate in der Praxis" },
            {
              type: "text",
              value:
                "DV (Domain Validation): Nur Domain geprüft, schnell, günstig/kostenlos (Let's Encrypt). OV (Organization Validation): Organisation geprüft. EV (Extended Validation): Strengste Prüfung, war früher grüne Adressleiste. Wildcard (*.example.de): Gilt für alle Subdomains. SAN (Subject Alternative Name): Mehrere Domains in einem Zertifikat.",
            },
            { type: "heading", value: "Zero Trust" },
            {
              type: "text",
              value:
                "'Never trust, always verify.' Prinzipien: Kein implizites Vertrauen basierend auf Netzwerkposition. Jeder Zugriff wird authentifiziert und autorisiert. Least Privilege: Nur minimale notwendige Rechte. Mikrosegmentierung: Netzwerk in kleinste Zonen unterteilt. Kontinuierliche Überwachung und Validierung.",
            },
            {
              type: "heading",
              value: "Vertiefung: Die Zertifikatskette und der Zero-Trust-Gedanke",
            },
            {
              type: "text",
              value:
                "PKI in einem Bild: Eine Root-CA (offline, heilig) signiert Zwischen-CAs, diese signieren End-Zertifikate (X.509). Dein Browser vertraut dem Server, wenn die KETTE lückenlos zu einer Root im eigenen Vertrauensspeicher führt, der NAME passt (Common Name/SAN = aufgerufene Domain), der ZEITRAUM gültig ist und das Zertifikat nicht GESPERRT wurde (CRL/OCSP). Typische Fehlerbilder: „Zertifikat abgelaufen“ (Datum/NTP!), „Name stimmt nicht überein“ (SAN vergessen), „Aussteller unbekannt“ (Zwischenzertifikat fehlt am Server!). Zero Trust denkt Sicherheit ohne Burggraben: kein implizites Vertrauen fürs interne Netz – JEDER Zugriff wird authentifiziert (Identität + Gerätezustand), autorisiert (Least Privilege) und verschlüsselt; Mikrosegmentierung ersetzt das flache LAN. Praktisch heißt das: MFA überall, kurzlebige Zugriffe statt Dauer-VPN, Policies pro Anwendung statt pro Netz.",
            },
            { type: "heading", value: "Übungsaufgabe: Das Zertifikat, das nur intern kaputt ist" },
            {
              type: "text",
              value:
                "Extern meldet der Browser die Firmenwebseite als sicher, im Firmen-WLAN erscheint auf denselben Geräten „Aussteller unbekannt“. Der Admin hat kürzlich eine TLS-Inspection-Firewall eingeführt. Erkläre die Ursache über die Zertifikatskette und die saubere Lösung.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: Die Firewall bricht TLS auf (Inspection) und präsentiert den Clients ein NEU signiertes Zertifikat ihrer eigenen internen CA. Extern gilt die echte Kette (öffentliche CA im Vertrauensspeicher) – intern kennt der Client die Firewall-CA nicht → „Aussteller unbekannt“. Lösung: Das CA-Zertifikat der Firewall kontrolliert per zentraler Verteilung (GPO/MDM) in die Vertrauensspeicher ALLER verwalteten Geräte ausrollen – niemals per Klick-Anleitung an Nutzer; zusätzlich Ausnahmen für Banking/Gesundheit definieren (Datenschutz) und die Inspection dokumentieren (Betriebsrat, DSGVO).",
            },
          ],
          quiz: [
            {
              id: "imp_ct-sec-2_0",
              q: "Was stellt eine CA aus?",
              options: ["Passwörter", "VPN-Tunnel", "Firewalls", "Digitale Zertifikate"],
              correct: 3,
              explain: "CA = Certificate Authority, stellt digitale Zertifikate aus.",
            },
            {
              id: "imp_ct-sec-2_1",
              q: "Zero Trust Kernprinzip?",
              options: [
                "Never trust, always verify",
                "VPN = sicher",
                "Einmal authentifiziert = immer vertraut",
                "Firewall genügt",
              ],
              correct: 0,
              explain: "Kein implizites Vertrauen, jeder Zugriff wird geprüft.",
            },
            {
              id: "imp_ct-sec-2_2",
              q: "Let's Encrypt bietet?",
              options: [
                "DV-Zertifikate kostenlos",
                "OV-Zertifikate",
                "EV-Zertifikate",
                "Wildcard-only",
              ],
              correct: 0,
              explain: "Let's Encrypt = kostenlose DV-Zertifikate.",
            },
            {
              id: "imp_ct-sec-2_3",
              q: "CRL = ?",
              options: [
                "Liste widerrufener Zertifikate",
                "Crypto Library",
                "Cloud Resource",
                "Routing Logic",
              ],
              correct: 0,
              explain: "Certificate Revocation List.",
            },
            {
              id: "imp_ct-sec-2_4",
              q: "Mikrosegmentierung?",
              options: [
                "Große VLANs",
                "Netzwerk in kleinste Zonen (Zero Trust)",
                "Nur 1 Segment",
                "Physisch",
              ],
              correct: 1,
              explain: "Jede Workload bekommt eigenes Micro-Segment.",
            },
            {
              id: "imp_ct-sec-2_5",
              q: "OCSP = ?",
              options: [
                "Zertifikatstatus online prüfen",
                "Verschlüsselung",
                "Firewall",
                "VPN-Protokoll",
              ],
              correct: 0,
              explain: "Online Certificate Status Protocol: Prüft ob Zertifikat widerrufen.",
            },
            {
              id: "imp_ct-sec-2_6",
              q: "Wildcard-Cert?",
              options: ["Eine Domain", "Root-CA", "Alle Subdomains (*.example.de)", "Nur IP"],
              correct: 2,
              explain: "Ein Cert für alle Subs.",
            },
            {
              id: "imp_ct-sec-2_7",
              q: "HSTS?",
              options: ["DNS", "VPN", "FW", "Nur HTTPS erlauben"],
              correct: 3,
              explain: "Browser-Zwang.",
            },
            {
              id: "imp_ct-sec-2_8",
              q: "Certificate Pinning?",
              options: ["Backup", "App vertraut nur bestimmten Certs", "Erneuern", "Drucken"],
              correct: 1,
              explain: "Gegen MitM.",
            },
            {
              id: "imp_ct-sec-2_9",
              q: "mTLS?",
              options: ["Einseitig", "Nur Client", "Nur Server", "Beide Seiten zeigen Zertifikat"],
              correct: 3,
              explain: "Mutual.",
            },
            {
              id: "imp_ct-sec-2_10",
              q: "Was enthält ein CSR (Certificate Signing Request)?",
              options: [
                "Das fertige, bereits von der CA signierte Zertifikat",
                "Den privaten Schlüssel zur sicheren Übergabe an die CA",
                "Eine Rechnung über die Ausstellungsgebühren der CA",
                "Den öffentlichen Schlüssel und Identitätsangaben (CN/SAN)",
              ],
              correct: 3,
              explain:
                "Signiert mit dem privaten Schlüssel, der das System nie verlässt. Goldene Regel: Der private Schlüssel wird NIE übertragen – die CA signiert nur den Request.",
            },
            {
              id: "imp_ct-sec-2_11",
              q: "Wozu dient das SAN-Feld (Subject Alternative Name)?",
              options: [
                "Ein Zertifikat gilt für mehrere Namen",
                "Es ersetzt den privaten Schlüssel",
                "Es speichert die Storage-Konfiguration",
                "Es ist ein Ablaufdatum",
              ],
              correct: 0,
              explain:
                "Beispiel: www.firma.de, mail.firma.de, firma.de. Browser prüfen heute primär SAN, nicht mehr den CN – fehlende SAN-Einträge sind ein häufiger Zertifikatsfehler.",
            },
            {
              id: "imp_ct-sec-2_12",
              q: "Was verbessert OCSP-Stapling?",
              options: [
                "Der Server liefert den signierten Sperrstatus gleich mit",
                "Es verkettet mehrere Zertifikate zu einer einzigen Datei",
                "Es verlängert automatisch die Gültigkeitsdauer des Zertifikats",
                "Es ersetzt TLS durch ein eigenes Verschlüsselungsprotokoll",
              ],
              correct: 0,
              explain:
                "Schneller und datenschutzfreundlicher als Client-Abfragen bei der CA. Der Client muss die CA nicht mehr selbst fragen (keine Latenz, kein Tracking des Surfverhaltens durch die CA).",
            },
            {
              id: "imp_ct-sec-2_13",
              q: "Warum signieren CAs mit Intermediate- statt direkt mit Root-Zertifikaten?",
              options: [
                "Die Root bleibt offline geschützt; kompromittierte Intermediates lassen sich sperren, ohne die Root zu verlieren",
                "Reine Tradition aus der Anfangszeit des Internets, technisch besteht heute kein Unterschied zwischen beiden Wegen",
                "Aus Kostengründen: Das Ausstellen direkt von der Root ist bei den Browserherstellern gebührenpflichtig",
                "Intermediates signieren schneller, weil ihre kürzeren Schlüssel weniger Rechenzeit pro Zertifikat benötigen",
              ],
              correct: 0,
              explain:
                "Deshalb müssen Server die Kette (Leaf + Intermediates) ausliefern – fehlende Intermediates sind ein Top-Supportfall.",
            },
            {
              id: "imp_ct-sec-2_14",
              q: "Wofür wird Code Signing eingesetzt?",
              options: [
                "Es verschlüsselt den Quellcode",
                "Es ersetzt Lizenzen",
                "Es macht Software schneller",
                "Software wird signiert, damit Herkunft und Unverändertheit prüfbar sind",
              ],
              correct: 3,
              explain:
                "Betriebssysteme warnen bei fehlender Signatur. Auch intern sinnvoll: signierte Skripte plus PowerShell-Execution-Policy verhindern manipulierte Admin-Skripte.",
            },
            {
              id: "imp_ct-sec-2_15",
              q: "Was ist Key Escrow?",
              options: [
                "Ein Werkzeug zum unbefugten Auslesen fremder Schlüssel",
                "Ein Magnetband für die Auslagerung von Backups",
                "Eine spezielle Zertifikatsart für Code-Signierung",
                "Hinterlegung von Schlüsseln bei einer vertrauenswürdigen Stelle",
              ],
              correct: 3,
              explain:
                "Wiederherstellung möglich, aber zusätzliches Vertrauensrisiko. Im Unternehmen praktisch Pflicht (BitLocker-Recovery im AD/Entra) – privat umstritten.",
            },
            {
              id: "imp_ct-sec-2_16",
              q: "Wann ist ein selbstsigniertes Zertifikat vertretbar?",
              options: [
                "Im öffentlichen Webshop, da Browser selbstsignierte Zertifikate von Shops automatisch als vertrauenswürdig einstufen",
                "Niemals – selbstsignierte Zertifikate sind technisch nicht in der Lage, eine TLS-Verbindung zu verschlüsseln",
                "In Test-/Laborumgebungen oder geschlossenen Systemen mit kontrollierter Verteilung des Zertifikats",
                "Im Online-Banking, weil dort die Banken die Zertifikate ihrer Kunden ohnehin selbst prüfen und verteilen",
              ],
              correct: 2,
              explain:
                "Produktiv intern: besser interne CA mit verteilter Root – dann gibt es keine Klick-dich-durch-Warnungen, die Nutzer abstumpfen.",
            },
            {
              id: "imp_ct-sec-2_17",
              q: "Welche Folge hat ein abgelaufenes Serverzertifikat?",
              options: [
                "Clients zeigen Warnungen/brechen Verbindungen ab",
                "Die ausstellende CA haftet für entstandene Schäden",
                "Keine – alles läuft unverändert ohne Meldung weiter",
                "TLS arbeitet nur mit reduzierter Geschwindigkeit",
              ],
              correct: 0,
              explain:
                "Dienste und Schnittstellen fallen faktisch aus. Gegenmittel: Inventar + Ablauf-Monitoring + Automatisierung (ACME/Let's Encrypt, Zertifikatsmanagement).",
            },
            {
              id: "imp_ct-sec-2_18",
              q: "Welche Rolle spielt ein TPM für Schlüssel?",
              options: [
                "Es speichert ausschließlich Software-Lizenzschlüssel",
                "Es kühlt die CPU bei kryptografischen Berechnungen",
                "Es ist ein USB-Stick zum Transport von Schlüsseln",
                "Ein Hardware-Chip erzeugt/verwahrt Schlüssel geschützt",
              ],
              correct: 3,
              explain:
                "Auslesen aus dem OS heraus wird verhindert. Grundlage u. a. für BitLocker, Windows Hello und Measured Boot.",
            },
            {
              id: "imp_ct-sec-2_19",
              q: "Welche Komponenten gehören zur Zero-Trust-Zugriffskontrolle?",
              options: [
                "Eine stark konfigurierte Perimeter-Firewall am Netzrand deckt alle Anforderungen ab",
                "Identität, Gerätezustand und Kontext werden bei JEDEM Zugriff geprüft (Policy Engine)",
                "Ausreichend lange Passwörter allein erfüllen die Zero-Trust-Anforderungen",
                "Vertrauen wird einmalig pro Abteilung vergeben und gilt anschließend dauerhaft",
              ],
              correct: 1,
              explain:
                "Nicht nur einmal beim Netz-Eintritt. 'Never trust, always verify' – Conditional-Access-Regeln (Nutzer + Gerät + Standort + Risiko) setzen das praktisch um.",
            },
          ],
        },
        {
          id: "ct-sec-3",
          title: "Risikomanagement & Compliance",
          content: [
            { type: "heading", value: "Risikomanagement" },
            {
              type: "text",
              value:
                "Risiko = Eintrittswahrscheinlichkeit × Schadenshöhe. Risikobehandlung: Vermeiden (Aktivität einstellen), Vermindern (Maßnahmen ergreifen), Übertragen (Versicherung), Akzeptieren (bewusst tragen). Risikoanalyse: Qualitativ (Hoch/Mittel/Niedrig-Matrix) oder Quantitativ (SLE × ARO = ALE).",
            },
            { type: "heading", value: "Business Continuity & Disaster Recovery" },
            {
              type: "text",
              value:
                "BCP (Business Continuity Plan): Wie läuft der Betrieb bei Störung weiter? DRP (Disaster Recovery Plan): Wie stellen wir IT nach Katastrophe wieder her? RTO (Recovery Time Objective): Max. tolerierbare Ausfallzeit. RPO (Recovery Point Objective): Max. tolerierter Datenverlust (Zeitraum). Beispiel: RTO 4h, RPO 1h → System muss in 4h wieder laufen, max. 1h Daten dürfen verloren gehen.",
            },
            { type: "heading", value: "Compliance & Frameworks" },
            {
              type: "text",
              value:
                "DSGVO/GDPR: EU-Datenschutz. BSI IT-Grundschutz: Deutsche Behörden/Unternehmen. ISO 27001: Internationaler ISMS-Standard, zertifizierbar. NIST CSF: US-Framework, international anerkannt. PCI DSS: Kreditkarten-Datenverarbeitung. SOC 2: Cloud-Service-Sicherheit.",
            },
            { type: "heading", value: "Übungsaufgabe: Quantitative Risikoanalyse" },
            {
              type: "text",
              value:
                "Ein Onlineshop-Server hat einen Asset-Wert von 200.000 € (inkl. Umsatzbeitrag). Ein erfolgreicher Ransomware-Angriff würde 25 % des Wertes vernichten (Exposure Factor). Die Eintrittswahrscheinlichkeit liegt bei 0,2 pro Jahr. Eine Schutzmaßnahme (EDR + Immutable Backup) kostet 6.000 €/Jahr und senkt die Wahrscheinlichkeit auf 0,05. a) Berechne SLE und ALE ohne Maßnahme. b) Berechne die ALE mit Maßnahme. c) Lohnt sich die Investition? Begründe mit Zahlen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) SLE = Asset-Wert × EF = 200.000 € × 0,25 = 50.000 €. ALE = SLE × ARO = 50.000 € × 0,2 = 10.000 €/Jahr.\nb) ALE neu = 50.000 € × 0,05 = 2.500 €/Jahr.\nc) Risikoreduktion = 10.000 − 2.500 = 7.500 €/Jahr. Kosten der Maßnahme: 6.000 €/Jahr. Nettonutzen = 7.500 − 6.000 = +1.500 €/Jahr → Die Maßnahme lohnt sich rechnerisch. Zusatzargument für das Management: Sie senkt zudem nicht bezifferte Folgekosten (Reputationsschaden, Meldepflichten), die in der ALE nicht enthalten sind.",
            },
          ],
          quiz: [
            {
              id: "imp_ct-sec-3_0",
              q: "RTO bedeutet?",
              options: [
                "Recovery Time Objective",
                "Real-Time Operation",
                "Risk Transfer Option",
                "Redundancy Test Order",
              ],
              correct: 0,
              explain: "Recovery Time Objective = max. tolerierbare Ausfallzeit.",
            },
            {
              id: "imp_ct-sec-3_1",
              q: "Risiko übertragen = ?",
              options: [
                "System abschalten",
                "Versicherung abschließen",
                "Mehr Mitarbeiter einstellen",
                "Risiko ignorieren",
              ],
              correct: 1,
              explain: "Übertragen = z.B. Cyberversicherung.",
            },
            {
              id: "imp_ct-sec-3_2",
              q: "ISO 27001 ist?",
              options: [
                "Cloud-Dienst",
                "ISMS-Zertifizierung",
                "Programmierstandard",
                "Kabelstandard",
              ],
              correct: 1,
              explain:
                "ISO 27001 = internationaler Standard für Informationssicherheits-Managementsysteme.",
            },
            {
              id: "imp_ct-sec-3_3",
              q: "ALE Formel?",
              options: ["SLE / ARO", "SLE + ARO", "ARO / SLE", "SLE x ARO"],
              correct: 3,
              explain: "Annual Loss Expectancy = SLE x ARO.",
            },
            {
              id: "imp_ct-sec-3_4",
              q: "Risikovermeidung?",
              options: [
                "Risikobehaftete Aktivität einstellen",
                "Akzeptieren",
                "Versicherung",
                "Mehr Personal",
              ],
              correct: 0,
              explain: "Aktivität die Risiko verursacht komplett aufgeben.",
            },
            {
              id: "imp_ct-sec-3_5",
              q: "Compliance = ?",
              options: [
                "Nur die Einhaltung interner Hausregeln",
                "Einhaltung von Gesetzen, Standards, Richtlinien",
                "Eine Versicherung gegen Cyber-Schäden",
                "Eine freiwillige Empfehlung ohne Verbindlichkeit",
              ],
              correct: 1,
              explain:
                "Regelkonformität: Gesetze (DSGVO), Standards (ISO 27001), interne Richtlinien.",
            },
            {
              id: "imp_ct-sec-3_6",
              q: "Was regelt die ISO 22301?",
              options: [
                "Business Continuity Management (Notfallvorsorge und Weiterbetrieb)",
                "Qualitätsmanagement",
                "Datenschutz",
                "Netzwerkverkabelung",
              ],
              correct: 0,
              explain:
                "ISO 22301 = BCM-Standard (Weiterbetrieb im Krisenfall). Die ISO 27001 für das ISMS ist eine eigene Frage in diesem Set.",
            },
            {
              id: "imp_ct-sec-3_7",
              q: "Pentest?",
              options: ["Hacking", "Scan", "Autorisierter Angriff", "Normal"],
              correct: 2,
              explain: "Ethical Hacking.",
            },
            {
              id: "imp_ct-sec-3_8",
              q: "Risk Register?",
              options: ["SW", "Log", "Dokumentierte Risiken + Bewertung", "Plan"],
              correct: 2,
              explain: "Alle Risiken.",
            },
            {
              id: "imp_ct-sec-3_9",
              q: "BIA?",
              options: ["Business Impact Analysis", "Backup", "Budget", "Basic"],
              correct: 0,
              explain: "Auswirkung bei Ausfall.",
            },
            {
              id: "imp_ct-sec-3_10",
              q: "Wie wird Risiko grundsätzlich bewertet?",
              options: [
                "Anhand der Firmengröße",
                "Eintrittswahrscheinlichkeit × Schadensausmaß",
                "Nur nach Bauchgefühl",
                "Nach Alphabet",
              ],
              correct: 1,
              explain:
                "Qualitativ als Matrix (hoch/mittel/niedrig) oder quantitativ in Geld (SLE/ARO/ALE).",
            },
            {
              id: "imp_ct-sec-3_11",
              q: "Was bezeichnet der SLE (Single Loss Expectancy)?",
              options: [
                "Die erwartete Anzahl der Sicherheitsvorfälle pro Jahr (Häufigkeit)",
                "Den Jahresumsatz, der durch das betroffene Asset erwirtschaftet wird",
                "Den erwarteten Schaden EINES Vorfalls: Asset-Wert × Exposure Factor",
                "Die jährliche Prämie der Cyber-Versicherung für das Asset",
              ],
              correct: 2,
              explain:
                "Beispiel: Server-Asset 50.000 €, EF 40 % → SLE 20.000 €. Mit ARO multipliziert ergibt sich die ALE.",
            },
            {
              id: "imp_ct-sec-3_12",
              q: "Qualitative vs. quantitative Risikoanalyse – was gilt?",
              options: [
                "Die quantitative Analyse benötigt keine Datengrundlage, da sie ausschließlich mit Erfahrungsschätzungen arbeitet",
                "Qualitativ: Einstufung in Kategorien (Matrix), schnell; quantitativ: Geldwerte, aufwendiger, aber budgetierbar",
                "Beides ist identisch: Beide Verfahren stufen Risiken in dieselben Matrix-Kategorien ein",
                "Die qualitative Analyse ist grundsätzlich überlegen und macht quantitative Bewertungen überflüssig",
              ],
              correct: 1,
              explain:
                "In der Praxis kombiniert: qualitativ priorisieren, für Top-Risiken quantitativ rechnen (Budget-Argumentation).",
            },
            {
              id: "imp_ct-sec-3_13",
              q: "Worin unterscheiden sich Risikominderung und Risikoakzeptanz?",
              options: [
                "Akzeptanz ist nach ISO 27001 grundsätzlich unzulässig; jedes Risiko muss vollständig beseitigt werden",
                "Es gibt keinen Unterschied, beide Begriffe bezeichnen dieselbe Strategie im Risikomanagement",
                "Minderung bedeutet stets den Abschluss einer Versicherung, die den Schaden auf einen Dritten überträgt",
                "Minderung senkt Wahrscheinlichkeit/Schaden durch Maßnahmen; Akzeptanz trägt das (Rest-)Risiko bewusst dokumentiert",
              ],
              correct: 3,
              explain:
                "Die vier Strategien: vermeiden, vermindern, übertragen (z. B. Cyberversicherung), akzeptieren.",
            },
            {
              id: "imp_ct-sec-3_14",
              q: "Wozu dienen NDA, MOU und SLA?",
              options: [
                "Drei austauschbare Bezeichnungen für denselben Standardvertrag zwischen IT-Dienstleistern",
                "NDA: Vertraulichkeit; MOU: Absichtserklärung; SLA: messbare Servicezusagen mit Konsequenzen",
                "Drei technische Netzwerkprotokolle für die verschlüsselte Übertragung von Vertragsdaten",
                "Vertragsformen, die ausschließlich Behörden und öffentlichen Auftraggebern vorbehalten sind",
              ],
              correct: 1,
              explain:
                "Im Dienstleistergeschäft Alltag: Vor dem Datenaustausch NDA, im Betrieb SLA mit Verfügbarkeits- und Reaktionszeiten.",
            },
            {
              id: "imp_ct-sec-3_15",
              q: "Was leistet eine Datenklassifizierung?",
              options: [
                "Sie ist nur Kosmetik",
                "Daten erhalten Schutzstufen (öffentlich/intern/vertraulich/streng vertraulich)",
                "Sie löscht alte Daten",
                "Sie sortiert nach Dateigröße",
              ],
              correct: 1,
              explain:
                "Die Maßnahmen richten sich nach der Stufe. Ohne Klassifizierung schützt man alles gleich (teuer) oder nichts richtig (riskant).",
            },
            {
              id: "imp_ct-sec-3_16",
              q: "Was zählt zu personenbezogenen Daten (PII)?",
              options: [
                "Nur der vollständige Name und ein aktuelles Foto der Person",
                "Reine Maschinendaten wie Sensormesswerte ohne jeden Personenbezug",
                "Ausschließlich Gesundheitsdaten nach Artikel 9 der DSGVO",
                "Alle Informationen, die eine Person identifizieren oder identifizierbar machen",
              ],
              correct: 3,
              explain:
                "Name, E-Mail, IP-Adresse, Standortdaten. Auch Online-Kennungen wie IP-Adressen gelten als personenbezogen – Basis jeder DSGVO-Bewertung.",
            },
            {
              id: "imp_ct-sec-3_17",
              q: "Was regelt eine Aufbewahrungs-/Löschrichtlinie (Retention Policy)?",
              options: [
                "Ausschließlich die Rotation der Backup-Bänder im Archiv",
                "Wie lange Datenarten aufbewahrt und wann sie gelöscht werden",
                "Die Öffnungs- und Bürozeiten der IT-Abteilung",
                "Dass Daten grundsätzlich niemals gelöscht werden dürfen",
              ],
              correct: 1,
              explain:
                "Nach Gesetz und Geschäftsbedarf. Beispiele: Handelsbriefe 6 Jahre, Buchungsbelege 8 Jahre (seit 2025; zuvor 10) – Speichern ohne Ende verletzt dagegen die DSGVO-Speicherbegrenzung.",
            },
            {
              id: "imp_ct-sec-3_18",
              q: "Was ermittelt eine Gap-Analyse?",
              options: [
                "Die Differenz zweier Angebote",
                "Fehlende Urlaubstage",
                "Die Lücke zwischen Ist-Zustand und Soll",
                "Die Lücke im WLAN-Empfang",
              ],
              correct: 2,
              explain:
                "Z. B. Anforderungen der ISO 27001 oder NIS-2. Ergebnis ist ein Maßnahmenplan mit Prioritäten – Standardprodukt jeder Compliance-Beratung.",
            },
            {
              id: "imp_ct-sec-3_19",
              q: "Zu welcher Kontrollart zählt Security-Awareness-Training?",
              options: [
                "Physische Kontrolle",
                "Administrative (organisatorische) Kontrolle",
                "Technische Kontrolle",
                "Keine Kontrolle",
              ],
              correct: 1,
              explain:
                "Kontrollarten: technisch (Firewall), physisch (Zutritt), administrativ (Richtlinien, Schulung) – Prüfungen fragen die Zuordnung.",
            },
          ],
        },
      ],
    },
  ],
};
