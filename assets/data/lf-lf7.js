window.LF_CONTENT = window.LF_CONTENT || {};
window.LF_CONTENT["lf7"] = {
  topics: [
    {
      id: "lf7-iot",
      title: "IoT & Embedded Systems",
      lessons: [
        {
          id: "lf7-io-1",
          title: "IoT-Grundlagen",
          content: [
            { type: "heading", value: "Was sind cyber-physische Systeme (CPS)?" },
            {
              type: "text",
              value:
                "CPS verbinden physische Prozesse mit digitaler Steuerung. Beispiele: Smarte Fertigung (Industrie 4.0), vernetzte Gebäudetechnik, autonome Fahrzeuge, medizinische Geräte. IoT (Internet of Things) ist eine Teilmenge: Alltagsgeräte mit Internet-Anbindung.",
            },
            { type: "heading", value: "Komponenten eines IoT-Systems" },
            {
              type: "text",
              value:
                "Sensoren: Erfassen physische Größen (Temperatur, Druck, Bewegung, Licht, Feuchtigkeit). Aktoren: Führen Aktionen aus (Motoren, Ventile, LEDs, Relais). Mikrocontroller: Verarbeitung vor Ort (Arduino, ESP32, Raspberry Pi). Gateway: Verbindet IoT-Netz mit IP-Netz. Cloud/Edge: Datenverarbeitung und -speicherung.",
            },
            { type: "heading", value: "Kommunikationsprotokolle" },
            {
              type: "text",
              value:
                "MQTT (Message Queuing Telemetry Transport): Leichtgewichtig, Publish/Subscribe, ideal für IoT. Broker vermittelt Nachrichten. QoS-Level 0/1/2. CoAP (Constrained Application Protocol): REST-ähnlich für ressourcenbeschränkte Geräte, UDP-basiert. Zigbee/Z-Wave: Mesh-Netzwerke für Smart Home, geringe Reichweite, niedriger Stromverbrauch. LoRaWAN: Langstrecke (bis 15 km), niedriger Stromverbrauch, geringe Datenrate – für Sensornetzwerke. Bluetooth LE (BLE): Kurze Distanz, niedriger Verbrauch, Wearables.",
            },
            {
              type: "note",
              value: "MQTT ist das wichtigste IoT-Protokoll – Publish/Subscribe-Modell verstehen!",
            },
            { type: "heading", value: "Übungsaufgabe: MQTT" },
            {
              type: "text",
              value:
                "Erkläre MQTT anhand eines Temperatursensors, der an mehrere Anzeigen sendet. Welche Rollen gibt es?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (Publish/Subscribe):\n- Publisher: der Temperatursensor, veröffentlicht\n  Werte zu einem Topic, z.B. haus/wohnzimmer/temp\n- Broker: zentrale Vermittlung, verteilt Nachrichten\n- Subscriber: die Anzeigen, abonnieren das Topic\n\nAblauf: Sensor publiziert 21 Grad -> Broker leitet\nan alle Subscriber weiter. Sender und Empfänger\nkennen sich nicht (Entkopplung). Ein Wert erreicht\nbeliebig viele Empfänger. Ideal für sparsame Geräte.",
            },
            { type: "heading", value: "Übungsaufgabe 2: IoT-Architektur" },
            {
              type: "text",
              value: "Datenfluss IoT-Temperaturüberwachung Serverraum. Welche Komponenten?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. Sensor (DHT22) → 2. Edge Device (ESP32) → 3. Gateway → 4. MQTT-Broker → 5. Cloud/Server (DB + Dashboard) → 6. Auswertung/Aktion (>30°C → Alarm).\nProtokolle: MQTT (leichtgewichtig, pub/sub), alternativ CoAP (UDP).",
            },
            { type: "heading", value: "Beispiel 1: Smart-Office mit MQTT" },
            {
              type: "text",
              value:
                "Ein Temperatursensor publiziert alle 60 Sekunden den Messwert an das Topic buero/eg/raum12/temperatur. Die Heizungssteuerung (Aktor) hat dieses Topic abonniert und öffnet bei Unterschreiten von 20 °C das Ventil. Der Broker (z. B. Mosquitto) läuft auf einem Server im IoT-VLAN – Sensor und Aktor kennen sich gegenseitig nicht, beide kennen nur den Broker.",
            },
            { type: "heading", value: "Beispiel 2: Wahl der QoS-Stufe" },
            {
              type: "text",
              value:
                "Für den Temperaturwert reicht QoS 0 – geht eine Messung verloren, kommt 60 Sekunden später die nächste. Der Befehl 'Ventil öffnen' wird dagegen mit QoS 1 gesendet: Er muss ankommen, ein Duplikat schadet nicht (das Ventil ist dann einfach schon offen). QoS 2 wäre nötig, wenn ein doppelt verarbeiteter Befehl Schaden anrichten würde, etwa 'Zähler um 1 erhöhen'.",
            },
          ],
          quiz: [
            {
              id: "imp_lf7-io-1_0",
              q: "MQTT nutzt welches Kommunikationsmodell?",
              options: ["Request-Response", "Client-Server", "Publish/Subscribe", "Peer-to-Peer"],
              correct: 2,
              explain: "MQTT = Publish/Subscribe über einen Broker.",
            },
            {
              id: "imp_lf7-io-1_1",
              q: "LoRaWAN ist optimiert für?",
              options: [
                "Hohe Bandbreite",
                "Lange Reichweite + niedriger Strom",
                "Video-Streaming",
                "LAN-Verbindungen",
              ],
              correct: 1,
              explain: "LoRaWAN: bis 15 km, extrem niedriger Stromverbrauch, kleine Datenpakete.",
            },
            {
              id: "imp_lf7-io-1_2",
              q: "MQTT = ?",
              options: [
                "Ein Echtzeit-Betriebssystem für Mikrocontroller",
                "Leichtgewichtiges Messaging-Protokoll für IoT",
                "Eine Zeitreihen-Datenbank für Sensormesswerte",
                "Eine Programmiersprache für Embedded-Geräte",
              ],
              correct: 1,
              explain: "Message Queuing Telemetry Transport – Publish/Subscribe für IoT.",
            },
            {
              id: "imp_lf7-io-1_3",
              q: "MQTT Broker?",
              options: [
                "Client, der Messwerte an die Sensoren zurücksendet",
                "Sensor, der Temperatur- und Messdaten selbst erfasst",
                "Gateway, das MQTT-Pakete in HTTP-Anfragen übersetzt",
                "Zentraler Vermittler, der Nachrichten weiterleitet",
              ],
              correct: 3,
              explain: "Broker empfängt Nachrichten von Publishern und verteilt an Subscriber.",
            },
            {
              id: "imp_lf7-io-1_4",
              q: "LoRaWAN?",
              options: ["Low Power Wide Area Network für IoT", "WLAN-Standard", "5G", "Bluetooth"],
              correct: 0,
              explain: "Long Range, Low Power, für Sensoren über große Distanzen (km).",
            },
            {
              id: "imp_lf7-io-1_5",
              q: "CoAP vs. HTTP?",
              options: [
                "HTTP = leichter, da es ohne Header-Overhead auskommt",
                "CoAP = leichtgewichtiger, für eingeschränkte Geräte (UDP)",
                "Beide Protokolle sind im Aufbau und Einsatz identisch",
                "CoAP = nur für Webbrowser, HTTP = nur für Maschinen",
              ],
              correct: 1,
              explain: "CoAP: Wie HTTP, aber für ressourcenbeschränkte IoT-Geräte, nutzt UDP.",
            },
            {
              id: "imp_lf7-io-1_6",
              q: "Publish/Subscribe?",
              options: [
                "Sender publiziert an Topic, Empfänger abonniert Topic",
                "Direkte Peer-to-Peer-Verbindung zwischen zwei Geräten",
                "Client fragt Server direkt an und wartet auf Antwort",
                "Sender broadcastet an alle Geräte im selben Subnetz",
              ],
              correct: 0,
              explain: "Pub/Sub: Entkopplung von Sender und Empfänger über Topics.",
            },
            {
              id: "imp_lf7-io-1_7",
              q: "MQTT QoS 0?",
              options: [
                "Garantierte Zustellung",
                "At most once (Fire and Forget)",
                "At least once",
                "Exactly once",
              ],
              correct: 1,
              explain: "QoS 0: Keine Garantie, Nachricht wird einmal gesendet.",
            },
            {
              id: "imp_lf7-io-1_8",
              q: "Raspberry Pi im IoT?",
              options: ["Edge-Device/Gateway für Sensoren", "Switch", "Server", "Router"],
              correct: 0,
              explain: "Raspberry Pi: Günstiger Einplatinencomputer als IoT-Gateway.",
            },
            {
              id: "imp_lf7-io-1_9",
              q: "Smart Factory?",
              options: [
                "Vernetzte, automatisierte Produktion (Industrie 4.0)",
                "Fabrik, deren Produktion komplett in die Cloud verlagert ist",
                "Halle, in der nur Roboter ohne IT-Vernetzung arbeiten",
                "Modernes Bürogebäude mit Smart-Home-Ausstattung",
              ],
              correct: 0,
              explain: "Industrie 4.0: Maschinen kommunizieren miteinander, selbstoptimierend.",
            },
            {
              id: "imp_lf7-io-1_10",
              q: "Welche Rolle übernimmt der Broker bei MQTT?",
              options: [
                "Er wandelt analoge in digitale Signale um",
                "Er stellt die Stromversorgung der Sensoren sicher",
                "Er misst physikalische Größen",
                "Er vermittelt Nachrichten zwischen Publishern und Subscribern",
              ],
              correct: 3,
              explain:
                "MQTT arbeitet nach dem Publish/Subscribe-Prinzip: Clients senden an Topics, der Broker verteilt die Nachrichten an alle Abonnenten.",
            },
            {
              id: "imp_lf7-io-1_11",
              q: "Was bedeutet MQTT QoS-Stufe 1?",
              options: [
                "Nachricht wird höchstens einmal zugestellt",
                "Nachricht wird verschlüsselt übertragen",
                "Nachricht wird genau einmal zugestellt",
                "Nachricht wird mindestens einmal zugestellt",
              ],
              correct: 3,
              explain:
                "QoS 0 = höchstens einmal (fire and forget), QoS 1 = mindestens einmal (Duplikate möglich), QoS 2 = genau einmal.",
            },
            {
              id: "imp_lf7-io-1_12",
              q: "Welcher Standard-Port wird für unverschlüsseltes MQTT verwendet?",
              options: ["80", "1883", "443", "3306"],
              correct: 1,
              explain:
                "MQTT nutzt Port 1883, MQTT über TLS Port 8883. 80/443 sind HTTP/HTTPS, 3306 ist MySQL.",
            },
            {
              id: "imp_lf7-io-1_13",
              q: "Was ist der Unterschied zwischen Sensor und Aktor?",
              options: [
                "Sensoren arbeiten nur drahtlos, Aktoren nur kabelgebunden",
                "Beide Begriffe bezeichnen dasselbe",
                "Sensoren erfassen Messwerte, Aktoren führen Aktionen aus",
                "Aktoren erfassen Messwerte, Sensoren führen Aktionen aus",
              ],
              correct: 2,
              explain:
                "Ein Sensor wandelt physikalische Größen (Temperatur, Licht) in Daten um; ein Aktor setzt Befehle in physische Aktionen um (Ventil öffnen, Motor starten).",
            },
            {
              id: "imp_lf7-io-1_14",
              q: "Wofür ist LoRaWAN typischerweise ausgelegt?",
              options: [
                "Echtzeit-Videoübertragung in hoher Auflösung über Mobilfunkstrecken",
                "Verkabelte Industrienetze mit deterministischen Latenzzeiten",
                "Geringe Datenraten über große Reichweite bei niedrigem Energieverbrauch",
                "Hohe Datenraten über kurze Distanzen bei hohem Energieeinsatz",
              ],
              correct: 2,
              explain:
                "LoRaWAN ist ein LPWAN (Low Power Wide Area Network): Kilometer Reichweite, sehr geringer Stromverbrauch, aber nur kleine Datenmengen.",
            },
            {
              id: "imp_lf7-io-1_15",
              q: "Warum gelten viele IoT-Geräte als Sicherheitsrisiko?",
              options: [
                "Sie können keine Daten senden und sind daher schwer überwachbar",
                "Standard-Passwörter und fehlende Updates machen sie angreifbar",
                "Sie nutzen grundsätzlich kein Netzwerk und sind daher isoliert",
                "Sie sind ab Werk immer durch integrierte Firewalls geschützt",
              ],
              correct: 1,
              explain:
                "Bekanntes Beispiel ist das Mirai-Botnetz, das massenhaft IoT-Geräte mit unveränderten Standard-Zugangsdaten kaperte.",
            },
            {
              id: "imp_lf7-io-1_16",
              q: "Welche Maßnahme erhöht die Sicherheit von IoT-Geräten im Firmennetz am wirksamsten?",
              options: [
                "Standard-Passwörter beibehalten, aber notieren",
                "Geräte direkt ins Server-VLAN stellen",
                "Geräte in ein separates VLAN segmentieren",
                "UPnP am Router aktivieren",
              ],
              correct: 2,
              explain:
                "Netzsegmentierung begrenzt den Schaden: Kompromittierte IoT-Geräte erreichen so keine kritischen Systeme.",
            },
            {
              id: "imp_lf7-io-1_17",
              q: "Warum ist IPv6 für das IoT besonders relevant?",
              options: [
                "IPv6 ist langsamer und damit stromsparender",
                "IPv6 funktioniert nur in Mobilfunknetzen",
                "Der riesige Adressraum erlaubt eine eigene Adresse pro Gerät",
                "IPv6 benötigt keine Router",
              ],
              correct: 2,
              explain:
                "Mit 128-Bit-Adressen lassen sich Milliarden Geräte direkt adressieren, ohne auf NAT angewiesen zu sein.",
            },
            {
              id: "imp_lf7-io-1_18",
              q: "Was ist eine 'Retained Message' bei MQTT?",
              options: [
                "Die letzte am Topic gespeicherte Nachricht, die neue Subscriber sofort erhalten",
                "Eine vom Broker gelöschte Nachricht, die im Papierkorb verbleibt",
                "Eine zurückgehaltene Nachricht, die der Broker niemals an Subscriber zustellt",
                "Eine verschlüsselte Systemnachricht des Brokers an alle Administratoren",
              ],
              correct: 0,
              explain:
                "Der Broker speichert pro Topic die letzte Retained Message; neue Abonnenten bekommen damit sofort den aktuellen Zustand.",
            },
            {
              id: "imp_lf7-io-1_19",
              q: "Welches Protokoll ist wie MQTT für ressourcenschwache Geräte gedacht, basiert aber auf REST-Prinzipien über UDP?",
              options: ["RDP", "CoAP", "SMTP", "FTP"],
              correct: 1,
              explain:
                "CoAP (Constrained Application Protocol) überträgt REST-ähnliche Anfragen über UDP und ist für Mikrocontroller optimiert.",
            },
          ],
        },
        {
          id: "lf7-io-2",
          title: "Edge Computing & Industrie 4.0",
          content: [
            { type: "heading", value: "Edge vs. Cloud vs. Fog Computing" },
            {
              type: "text",
              value:
                "Cloud: Zentrale Verarbeitung in Rechenzentren. Hohe Latenz, hohe Rechenleistung. Edge: Verarbeitung direkt am Gerät/Sensor. Minimale Latenz, begrenzte Leistung. Ideal für Echtzeitanforderungen. Fog: Zwischenschicht – Verarbeitung im lokalen Netzwerk (Gateway-Level). Kompromiss aus Latenz und Leistung.",
            },
            { type: "heading", value: "Industrie 4.0" },
            {
              type: "text",
              value:
                "Die vierte industrielle Revolution: Vernetzung von Maschinen, Produkten und Menschen. Schlüsseltechnologien: Digitaler Zwilling (virtuelles Abbild einer physischen Anlage), Predictive Maintenance (vorausschauende Wartung durch Sensorauswertung), M2M-Kommunikation (Machine-to-Machine), OPC UA (Industriestandard für Datenaustausch).",
            },
            { type: "heading", value: "Übungsaufgabe 1: Edge vs. Cloud" },
            {
              type: "text",
              value: "Vergleiche Edge und Cloud Computing. Wann ist Edge im IoT sinnvoller?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nEdge: + Geringe Latenz, + Offline-fähig, + Weniger Bandbreite, + Datenschutz. Cloud: + Unbegrenzte Rechenleistung, + Zentrale Auswertung, + Einfaches Management.\nEdge sinnvoller bei: Echtzeit, schlechtem Internet, DSGVO, hohem Datenvolumen.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Digitaler Zwilling" },
            { type: "text", value: "Was sind digitale Zwillinge? Nutzen in der Industrie 4.0?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nVirtuelles Abbild eines physischen Objekts, Echtzeit-Synchronisation mit Sensordaten.\nNutzen: Simulation (testen vor Umsetzung), Predictive Maintenance (Verschleiß vorhersagen), Optimierung (Prozesse verbessern), Schulung (virtuelles Training).",
            },
            { type: "heading", value: "Beispiel 1: Edge-Gateway in der Fertigungslinie" },
            {
              type: "text",
              value:
                "Eine CNC-Fräse liefert 1.000 Messwerte pro Sekunde. Statt alles in die Cloud zu schicken (Bandbreite, Kosten, Latenz), berechnet ein Edge-Gateway lokal Mittelwert, Minimum und Maximum pro Minute und sendet nur diese drei Werte. Bei Grenzwertüberschreitung stoppt das Gateway die Maschine sofort lokal – ohne auf eine Cloud-Antwort zu warten.",
            },
            { type: "heading", value: "Beispiel 2: Predictive Maintenance am Lüftermotor" },
            {
              type: "text",
              value:
                "Ein Vibrationssensor am Motor zeigt über Wochen langsam steigende Schwingungswerte – ein typisches Lagerschaden-Muster. Das System meldet: 'Wartung in den nächsten 14 Tagen empfohlen.' Die Instandhaltung tauscht das Lager im geplanten Stillstand am Wochenende. Ohne Prognose wäre der Motor mitten in der Schicht ausgefallen: Produktionsstopp, Expresslieferung, Mehrkosten.",
            },
          ],
          quiz: [
            {
              id: "imp_lf7-io-2_0",
              q: "Edge Computing bedeutet?",
              options: [
                "Verarbeitung im Browser",
                "Verarbeitung auf dem Smartphone",
                "Verarbeitung direkt am Gerät/Sensor",
                "Verarbeitung in der Cloud",
              ],
              correct: 2,
              explain: "Edge = Datenverarbeitung am Rand des Netzwerks, direkt am Gerät.",
            },
            {
              id: "imp_lf7-io-2_1",
              q: "Warum verarbeitet man IoT-Daten oft am Edge statt in der Cloud?",
              options: [
                "Weil die Cloud keine Sensordaten versteht",
                "Geringere Latenz, weniger Bandbreite, funktioniert auch bei Verbindungsausfall",
                "Weil Edge-Geräte kostenlos sind",
                "Weil die DSGVO Cloud-Verarbeitung verbietet",
              ],
              correct: 1,
              explain:
                "Am Rand des Netzes gefiltert/vorverarbeitet: Reaktionen in Echtzeit, nur relevante Daten gehen in die Cloud, Betrieb läuft auch offline weiter – die reine Definitionsfrage steht separat.",
            },
            {
              id: "imp_lf7-io-2_2",
              q: "Fog Computing?",
              options: [
                "Nur bei Nebel",
                "Zwischenschicht zwischen Edge und Cloud",
                "Veraltete Technik",
                "Wie Cloud",
              ],
              correct: 1,
              explain: "Fog = Verarbeitung auf Gateway-Level, zwischen Edge und Cloud.",
            },
            {
              id: "imp_lf7-io-2_3",
              q: "Digitaler Zwilling?",
              options: [
                "Backup",
                "Doppelte Firewall",
                "Virtuelles Abbild einer physischen Anlage",
                "Zwei identische Server",
              ],
              correct: 2,
              explain:
                "Digitaler Zwilling = virtuelles Modell einer realen Anlage für Simulation/Monitoring.",
            },
            {
              id: "imp_lf7-io-2_4",
              q: "Predictive Maintenance?",
              options: [
                "Reparatur erst nach dem eingetretenen Ausfall",
                "Wartung in festen Intervallen nach Kalender",
                "Vollständiger Verzicht auf jegliche Wartung",
                "Vorausschauende Wartung durch Sensorauswertung",
              ],
              correct: 3,
              explain:
                "Sensordaten analysieren, um Ausfälle vorherzusagen und rechtzeitig zu warten.",
            },
            {
              id: "imp_lf7-io-2_5",
              q: "Edge vs. Cloud: Latenz?",
              options: [
                "Gleich",
                "Edge = geringere Latenz (lokal verarbeitet)",
                "Cloud = schneller",
                "Nur bei 5G",
              ],
              correct: 1,
              explain: "Edge: Daten werden lokal verarbeitet → geringere Latenz.",
            },
            {
              id: "imp_lf7-io-2_6",
              q: "Industrie 4.0?",
              options: ["Nur Roboter", "4.: Vernetzung, IoT, KI", "1. Rev.", "Cloud"],
              correct: 1,
              explain: "Cyber-physische Systeme.",
            },
            {
              id: "imp_lf7-io-2_7",
              q: "Digital Twin Nutzen?",
              options: ["Optik", "Backup", "Simulation ohne Risiko", "Marketing"],
              correct: 2,
              explain: "Virtuell testen.",
            },
            {
              id: "imp_lf7-io-2_8",
              q: "5G Industrie?",
              options: ["Nur Handy", "Niedrige Latenz für Echtzeit", "WLAN-Ersatz", "Nur Internet"],
              correct: 1,
              explain: "<10ms.",
            },
            {
              id: "imp_lf7-io-2_9",
              q: "OPC UA?",
              options: ["VPN", "OS", "DB", "Industrielles Kommunikationsprotokoll"],
              correct: 3,
              explain: "M2M-Standard.",
            },
            {
              id: "imp_lf7-io-2_10",
              q: "Was ist der Kerngedanke von Edge Computing?",
              options: [
                "Verzicht auf jede lokale Hardware",
                "Alle Daten werden ausschließlich in der Cloud verarbeitet",
                "Datenverarbeitung nahe an der Datenquelle statt zentral in der Cloud",
                "Server werden nur am Netzwerkrand des Internets betrieben",
              ],
              correct: 2,
              explain:
                "Edge Computing verarbeitet Daten dort, wo sie entstehen (Maschine, Gateway) – das senkt Latenz und Bandbreitenbedarf.",
            },
            {
              id: "imp_lf7-io-2_11",
              q: "Welcher Vorteil spricht für Edge- statt reiner Cloud-Verarbeitung in der Produktion?",
              options: [
                "Wegfall lokaler Geräte",
                "Höhere Internetabhängigkeit",
                "Geringere Latenz für zeitkritische Steuerungen",
                "Mehr Datenverkehr ins Rechenzentrum",
              ],
              correct: 2,
              explain:
                "Steuerungsentscheidungen im Millisekundenbereich vertragen keinen Umweg über das Internet; zudem bleibt die Anlage bei Internetausfall funktionsfähig.",
            },
            {
              id: "imp_lf7-io-2_12",
              q: "Wofür steht OPC UA?",
              options: [
                "Ein Büro-Softwarepaket für die kaufmännische Verwaltung",
                "Ein spezielles Dateisystem für Sensor-Messwerte",
                "Ein herstellerunabhängiger Kommunikationsstandard der Industrie",
                "Ein Verschlüsselungsverfahren für industrielle WLAN-Netze",
              ],
              correct: 2,
              explain:
                "OPC UA (Open Platform Communications Unified Architecture) ermöglicht herstellerübergreifenden, sicheren Datenaustausch zwischen Maschinen und IT-Systemen.",
            },
            {
              id: "imp_lf7-io-2_13",
              q: "Was ist ein Digitaler Zwilling?",
              options: [
                "Ein redundanter Server, der bei Ausfall des Hauptservers übernimmt",
                "Eine täglich erstellte Datensicherung der Produktionsdatenbank",
                "Ein virtuelles Abbild eines realen Objekts oder Prozesses mit Echtzeitdaten",
                "Ein zweiter, identisch konfigurierter Bildschirm am Arbeitsplatz",
              ],
              correct: 2,
              explain:
                "Der Digitale Zwilling spiegelt Zustand und Verhalten eines physischen Objekts und erlaubt Simulationen und Analysen, ohne in den realen Prozess einzugreifen.",
            },
            {
              id: "imp_lf7-io-2_14",
              q: "Was bedeutet Predictive Maintenance?",
              options: [
                "Kompletter Verzicht auf Wartung durch hochwertigere Hardware",
                "Vorausschauende Wartung auf Basis von Sensordaten und Prognosen",
                "Wartung in starren, kalenderbasierten Intervallen nach Plan",
                "Wartung grundsätzlich erst nach dem Ausfall der Maschine",
              ],
              correct: 1,
              explain:
                "Sensordaten (z. B. Vibration, Temperatur) werden ausgewertet, um Verschleiß zu erkennen und Wartung zu planen, bevor die Maschine ausfällt.",
            },
            {
              id: "imp_lf7-io-2_15",
              q: "Was unterscheidet OT von IT?",
              options: [
                "OT steuert physische Prozesse (Anlagen), IT verarbeitet Informationen",
                "OT-Netze sind grundsätzlich drahtlos, IT-Netze immer kabelgebunden",
                "IT steuert die Produktionsmaschinen, OT verwaltet die Büroarbeitsplätze",
                "Es gibt keinen Unterschied, beide Begriffe meinen dasselbe",
              ],
              correct: 0,
              explain:
                "Operational Technology (Steuerungen, SPS, SCADA) hat andere Prioritäten als klassische IT: Verfügbarkeit und Sicherheit der Anlage stehen vor Vertraulichkeit.",
            },
            {
              id: "imp_lf7-io-2_16",
              q: "Was beschreibt der Begriff 'Brownfield' in Industrie-4.0-Projekten?",
              options: [
                "Neubau einer Anlage auf der grünen Wiese",
                "Digitalisierung bestehender, gewachsener Anlagen",
                "Ein fehlgeschlagenes Projekt",
                "Eine spezielle Sensorbauform",
              ],
              correct: 1,
              explain:
                "Brownfield = Bestandsanlagen nachrüsten (häufigster Fall), Greenfield = komplette Neuplanung ohne Altlasten.",
            },
            {
              id: "imp_lf7-io-2_17",
              q: "Welche Funktion übernimmt ein Edge-Gateway typischerweise?",
              options: [
                "Es sammelt, filtert und aggregiert Sensordaten vor der Weiterleitung",
                "Es verwaltet die Benutzerkonten im Active Directory der Produktion",
                "Es druckt automatisiert die täglichen Produktionsberichte aus",
                "Es ersetzt die zentrale Firewall des Unternehmens vollständig",
              ],
              correct: 0,
              explain:
                "Das Gateway übersetzt Protokolle (z. B. Modbus zu MQTT), verdichtet Rohdaten und sendet nur relevante Werte in die Cloud.",
            },
            {
              id: "imp_lf7-io-2_18",
              q: "Wofür wird RFID in der Logistik eingesetzt?",
              options: [
                "Zur Temperaturmessung in gekühlten Transportboxen",
                "Als flächendeckender Ersatz für WLAN im Lager",
                "Zur kontaktlosen Identifikation von Objekten per Funk",
                "Zur digitalen Verschlüsselung von Lieferscheinen",
              ],
              correct: 2,
              explain:
                "RFID-Tags speichern eine ID, die ohne Sichtkontakt per Funk gelesen wird – anders als Barcodes, die optisch gescannt werden müssen.",
            },
            {
              id: "imp_lf7-io-2_19",
              q: "Was versteht man unter M2M-Kommunikation?",
              options: [
                "Ein Backup-Verfahren für Produktionsanlagen",
                "Mitarbeiter tauschen untereinander E-Mails aus",
                "Maschinen tauschen ohne menschliches Zutun Daten aus",
                "Ein spezieller Mobilfunktarif für Vieltelefonierer",
              ],
              correct: 2,
              explain:
                "Machine-to-Machine: Geräte kommunizieren automatisiert miteinander, z. B. meldet eine Maschine ihren Materialbedarf direkt ans Lager.",
            },
          ],
        },
      ],
    },
  ],
};
