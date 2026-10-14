"use strict";
window.MP_AP2GA1 = {
  kurz: "AP2 GA1",
  titel: "Musterprüfung – FISI AP Teil 2, Bereich 1: Konzeption und Administration von IT-Systemen",
  untertitel:
    "90 Minuten · 112 Punkte · 5 Aufgaben mit durchgehendem Szenario · sortenrein für den ersten berufsspezifischen Prüfungsbereich",
  zeit: 90,
  situation:
    "Die Stadtwerke Norderau GmbH (kommunaler Energieversorger, 140 Mitarbeitende) erneuern ihre zentrale IT: neuer Serverraum, Virtualisierungscluster, Verzeichnisdienst, Datensicherung und Betriebskonzept. Als Fachinformatiker/-in Systemintegration planst und administrierst du die Umgebung. Verfügbarkeit ist wichtig: Störungsannahme und Leitwarte arbeiten rund um die Uhr.",
  aufgaben: [
    {
      t: "Aufgabe 1: Serverraum, Strom & Klimatisierung (26 Punkte)",
      teile: [
        {
          k: "1.1",
          frage:
            "Der Serverschrank zieht 2.700 W Wirkleistung bei einem Leistungsfaktor von 0,9. Die USV soll zusätzlich 25 % Reserve bieten. Berechne die erforderliche Mindest-Scheinleistung der USV in VA (Rechenweg!).",
          punkte: 6,
          zeilen: 4,
          loesung:
            "Scheinleistung S = P / cos φ = 2.700 / 0,9 = 3.000 VA. Mit 25 % Reserve: 3.000 × 1,25 = 3.750 VA → nächste marktübliche Größe (z. B. 4.000 VA/4 kVA) wählen.\nBewertung: Formel 2 P, S = 3.000 VA 2 P, Reserveaufschlag 2 P.",
        },
        {
          k: "1.2",
          frage:
            "Die Leitwarte fordert, dass der Serverraum einen Stromausfall von mindestens 15 Minuten überbrückt, bis das Notstromaggregat übernimmt. Die USV-Batterie liefert 1.000 Wh nutzbare Energie. Prüfe rechnerisch, ob das bei 2.700 W Last reicht, und nenne zwei Maßnahmen, falls nicht.",
          punkte: 6,
          zeilen: 5,
          loesung:
            "Haltezeit = Energie / Leistung = 1.000 Wh / 2.700 W ≈ 0,37 h ≈ 22 Minuten > 15 Minuten – es reicht rechnerisch (mit Alterungsreserve knapp!). Falls nicht bzw. zur Absicherung: zusätzliche Batteriemodule, Lastreduktion durch Abschaltplan unkritischer Systeme (geordnetes Shutdown-Skript), effizientere Netzteile, regelmäßiger Batterietest.\nBewertung: Rechnung 3 P, Bewertung inkl. Alterungshinweis 1 P, je Maßnahme 1 P.",
        },
        {
          k: "1.3",
          frage:
            "Nenne vier bauliche/organisatorische Anforderungen an den neuen Serverraum (über die USV hinaus) mit je einem Stichwort zur Begründung.",
          punkte: 8,
          zeilen: 5,
          loesung:
            "Z. B.: Klimatisierung mit Temperaturüberwachung (Hardware-Lebensdauer, Ausfallschutz); Zutrittskontrolle mit Protokollierung (physische Sicherheit, ISMS); Brandfrüherkennung/Löschanlage ohne Wasser (Sachschutz); keine wasserführenden Leitungen darüber, erhöhter Doppelboden (Wasserschaden); redundante Stromzuführung (Verfügbarkeit); strukturierte Verkabelung mit Beschriftung (Wartbarkeit); Notfallplan/Fluchtwege. Je Anforderung mit Begründung 2 P (max. 8).",
        },
        {
          k: "1.4",
          frage:
            "Die IT-Geräte im Serverraum nehmen zusammen 6 kW elektrische Leistung auf.\na) Begründe, warum die Klimaanlage (mindestens) diese 6 kW als Kühlleistung abführen muss.\nb) Rechne die Wärmelast in BTU/h um (1 kW ≈ 3.412 BTU/h).\nc) Nenne einen sinnvollen Temperatur-Zielwert für den Serverraum und erkläre kurz das Kalt-/Warmgang-Prinzip.",
          punkte: 6,
          zeilen: 6,
          loesung:
            "a) Praktisch die gesamte aufgenommene elektrische Energie wird in Wärme umgesetzt – wird sie nicht abgeführt, steigt die Raumtemperatur, bis Geräte drosseln oder ausfallen. Die Kälteleistung muss daher ≥ der elektrischen Last (plus Reserven für Raum/Personen) sein.\nb) 6 × 3.412 = 20.472 ≈ 20.500 BTU/h.\nc) Zielwert ca. 22 °C (zulässiger Bereich n. ASHRAE etwa 18–27 °C). Kalt-/Warmgang: Racks stehen Front an Front – kalte Zuluft strömt in die Fronten (Kaltgang), warme Abluft sammelt sich hinten (Warmgang) und geht zur Klimaanlage zurück. Keine Vermischung → deutlich effizientere Kühlung.",
        },
      ],
    },
    {
      t: "Aufgabe 2: Virtualisierung, Container & Storage (26 Punkte)",
      teile: [
        {
          k: "2.1",
          frage:
            "Auf einem 2-Host-Cluster (N+1) sollen 8 VMs laufen: zusammen 26 vCPUs, 120 GB RAM, 3,5 TB Storage. Je Host sind 16 GB RAM für Hypervisor/Reserve einzuplanen; RAM-Module gibt es à 32 GB. Berechne die RAM-Bestückung je Host in Modulen und begründe, warum jeder Host die GESAMTE Last tragen können muss.",
          punkte: 6,
          zeilen: 5,
          loesung:
            "RAM je Host: 120 + 16 = 136 GB → 136/32 = 4,25 → 5 Module = 160 GB je Host. N+1 heißt: Fällt ein Host aus (oder Wartung!), übernimmt der verbleibende ALLE VMs – deshalb muss jeder Host allein die Gesamtlast tragen, sonst ist der Cluster nur Schönwetter-Redundanz.\nBewertung: Bedarf 2 P, Modulrechnung (aufrunden!) 2 P, N+1-Begründung 2 P.",
        },
        {
          k: "2.2",
          frage:
            "Für den zentralen Storage stehen 6 Platten à 8 TB bereit. Vervollständige die Tabelle.",
          punkte: 8,
          tabelle: {
            kopf: ["", "RAID 1 (3 Spiegelpaare)", "RAID 5", "RAID 6"],
            zeilen: [
              ["Nettokapazität (TB)", null, null, null],
              ["Verkraftbare Plattenausfälle", null, null, null],
            ],
            check: ["24", "40", "32", "1 je Spiegelpaar|1 pro Paar|mind. 1|1-3", "1", "2"],
          },
          loesung:
            "RAID 1 (3 × Spiegelpaar): 3 × 8 = 24 TB netto; je Paar darf 1 Platte ausfallen (nie beide eines Paares). RAID 5: (6−1) × 8 = 40 TB, 1 Ausfall. RAID 6: (6−2) × 8 = 32 TB, 2 Ausfälle. Je Zelle ~1,3 P. Praxis-Hinweis für die Diskussion: Bei 8-TB-Platten ist die Rebuild-Zeit lang – RAID 6 ist gegen den zweiten Ausfall während des Rebuilds die robustere Wahl.",
        },
        {
          k: "2.3",
          frage:
            "Die VM der Leitwarten-Software gilt als kritisch. Nenne drei Virtualisierungs-Funktionen, die ihre Verfügbarkeit bzw. ihren sicheren Betrieb erhöhen, mit je einem Satz Erklärung.",
          punkte: 6,
          zeilen: 5,
          loesung:
            "Z. B.: Live-Migration (VM läuft bei Host-Wartung unterbrechungsfrei um); automatischer Neustart/HA (VM startet bei Hostausfall auf dem Partnerhost neu); Snapshot vor Updates (schneller Rückweg bei fehlgeschlagenem Patch – kein Backup-Ersatz!); Ressourcen-Reservierung (garantierte CPU/RAM gegen „Noisy Neighbor“); Affinity-/Anti-Affinity-Regeln (kritische VMs nicht auf demselben Host). Je Funktion mit Erklärung 2 P (max. 6).",
        },
        {
          k: "2.4",
          frage:
            "Für zwei interne Web-Anwendungen wird diskutiert, sie statt in eigenen VMs in CONTAINERN zu betreiben.\na) Nenne zwei grundsätzliche Unterschiede zwischen Container und VM (Stichworte Kernel, Ressourcenbedarf).\nb) Gib je einen Vorteil und eine Grenze des Container-Einsatzes in diesem Szenario an.",
          punkte: 6,
          zeilen: 6,
          loesung:
            "a) Container teilen sich den KERNEL des Hosts und bringen nur Anwendung + Bibliotheken mit; eine VM emuliert komplette Hardware mit eigenem Betriebssystem samt Kernel. Dadurch: Container starten in Sekunden und brauchen deutlich weniger RAM/Storage.\nb) Vorteil: hohe Dichte und portables, versionierbares Image (identisch in Test und Produktion). Grenze: schwächere Isolation als eine VM und nur Workloads derselben Kernel-Familie (Linux-Container auf Linux-Host) – für nicht vertrauenswürdige oder Windows-Workloads bleibt die VM erste Wahl.",
        },
      ],
    },
    {
      t: "Aufgabe 3: Verzeichnisdienst & Berechtigungen (20 Punkte)",
      teile: [
        {
          k: "3.1",
          frage:
            "Die Fachabteilung „Netzleitstelle“ (12 Personen) braucht Vollzugriff auf die Freigabe N:\\Leitwarte, die Auszubildenden nur Lesezugriff. Beschreibe die Umsetzung nach dem AGDLP-Prinzip (Active Directory) mit konkreten Beispielgruppen.",
          punkte: 8,
          zeilen: 6,
          loesung:
            "AGDLP: Account → Globale Gruppe → Domänenlokale Gruppe → Permission. Konkret: Benutzerkonten in globale Rollen-Gruppen (G_Netzleitstelle, G_Azubis). Ressourcenbezogene domänenlokale Gruppen anlegen: DL_Leitwarte_RW und DL_Leitwarte_R. Mitgliedschaften: G_Netzleitstelle → DL_Leitwarte_RW; G_Azubis → DL_Leitwarte_R. NTFS-Rechte auf dem Ordner NUR an die DL-Gruppen vergeben (Ändern bzw. Lesen), nie an Einzelbenutzer.\nBewertung: Prinzip-Kette 3 P, sinnvolle Gruppen 3 P, Rechte nur über DL-Gruppen 2 P.",
        },
        {
          k: "3.2",
          frage:
            "Beim Zusammenspiel von Freigabe- und NTFS-Berechtigungen gilt welche Regel? Ein Nutzer hat Freigabe „Lesen“ und NTFS „Ändern“ – was darf er über das Netzwerk effektiv?",
          punkte: 4,
          zeilen: 3,
          loesung:
            "Beim Netzwerkzugriff gilt das RESTRIKTIVERE Recht aus beiden Welten. Freigabe „Lesen“ + NTFS „Ändern“ → effektiv nur LESEN über das Netz (lokal am Server würde NTFS allein greifen). Gängige Praxis: Freigabe großzügig (Authentifizierte Benutzer: Ändern), Feinsteuerung über NTFS.\nBewertung: Regel 2 P, korrekte Anwendung 2 P.",
        },
        {
          k: "3.3",
          frage:
            "Entwirf eine Passwort- und Anmelderichtlinie für die Domäne (vier konkrete Festlegungen) und begründe eine davon gegen einen typischen Angriff.",
          punkte: 8,
          zeilen: 6,
          loesung:
            "Z. B.: Mindestlänge 12+ Zeichen (Passphrasen erlaubt); Sperrung nach z. B. 10 Fehlversuchen mit automatischer Entsperrzeit (bremst Online-Bruteforce); MFA für Administratoren und Remotezugänge (gestohlenes Passwort allein reicht nicht); keine erzwungenen Kurzintervall-Wechsel, stattdessen Wechsel bei Verdacht + Abgleich gegen bekannte Passwortlisten; getrennte Admin-Konten (kein Surfen mit Domain-Admin). Begründung Beispiel: Kontosperrung wirkt direkt gegen Passwort-Raten (Bruteforce/Passwort-Spraying), weil die Versuchsrate zusammenbricht.\nBewertung: je Festlegung 1,5 P (max. 6), Angriffs-Begründung 2 P.",
        },
      ],
    },
    {
      t: "Aufgabe 4: Datensicherung & Wiederanlauf (20 Punkte)",
      teile: [
        {
          k: "4.1",
          frage:
            "Vorgabe der Geschäftsführung: maximal 2 Stunden Datenverlust, maximal 6 Stunden Wiederanlaufzeit für das Abrechnungssystem. Benenne die beiden Kennzahlen und entwirf eine Sicherungsstrategie (Sicherungsarten, Zeitplan, Ablageorte nach 3-2-1), die beides einhält.",
          punkte: 8,
          zeilen: 7,
          loesung:
            "RPO = 2 h (max. Datenverlust), RTO = 6 h (max. Ausfallzeit). Strategie z. B.: nachts Vollsicherung, tagsüber alle 2 Stunden inkrementelle Sicherung bzw. Transaktionslogs der Datenbank (erfüllt RPO). 3-2-1: 3 Kopien, 2 Medientypen (Disk-Backup + Band/Objektspeicher), 1 Kopie extern/offline (Ransomware!). RTO-Absicherung: dokumentierter Wiederanlaufplan, Restore auf Ersatz-VM geübt und mit Zeitmessung nachgewiesen (< 6 h), Prioritätenliste der Systeme.\nBewertung: RPO/RTO je 1 P, Zeitplan passend zum RPO 3 P, 3-2-1 mit Offline-Kopie 2 P, RTO-Nachweis/Plan 1 P.",
        },
        {
          k: "4.2",
          frage:
            "Das tägliche inkrementelle Backup umfasst im Schnitt 180 GB und muss in einem 4-Stunden-Fenster über eine dedizierte 1-Gbit/s-Leitung zum Zweitstandort. Prüfe rechnerisch (nutzbare Rate realistisch 80 %), ob das Fenster reicht.",
          punkte: 6,
          zeilen: 4,
          loesung:
            "Nutzbare Rate: 1 Gbit/s × 0,8 = 0,8 Gbit/s = 100 MB/s. Datenmenge: 180 GB = 180.000 MB (bzw. 180 × 10⁹ Byte). Zeit = 180.000 / 100 = 1.800 s = 30 Minuten – das 4-h-Fenster reicht locker (Reserve für Vollsicherungen einplanen: 1,8 TB ≈ 5 h → Vollsicherung braucht ein größeres Fenster oder Deduplizierung!).\nBewertung: Ratenumrechnung 2 P, Zeitberechnung 2 P, Bewertung/Transfer aufs Vollbackup 2 P.",
        },
        {
          k: "4.3",
          frage:
            "Erkläre, warum ein erfolgreicher Backup-Job allein KEIN Nachweis für Datensicherheit ist, und beschreibe einen sinnvollen Restore-Test (drei Schritte).",
          punkte: 6,
          zeilen: 5,
          loesung:
            "Ein grüner Job beweist nur, dass etwas geschrieben wurde – nicht, dass es vollständig, konsistent und wiederherstellbar ist (defekte Medien, vergessene Systeme, inkonsistente DB-Sicherung, verschlüsselte Backups ohne Schlüssel). Restore-Test: 1. regelmäßig (z. B. quartalsweise) zufällige Dateien UND ein komplettes System auf isolierte Testumgebung zurückspielen; 2. Funktions- und Konsistenzprüfung (Anwendung startet, Stichprobendaten korrekt) mit Zeitmessung gegen die RTO; 3. Ergebnis protokollieren, Abweichungen beheben, Plan aktualisieren.\nBewertung: Begründung 3 P, Testablauf 3 P.",
        },
      ],
    },
    {
      t: "Aufgabe 5: Betrieb, Automatisierung & Lizenzen (20 Punkte)",
      teile: [
        {
          k: "5.1",
          frage:
            "Nenne vier Kenngrößen, die das Monitoring der neuen Umgebung überwachen soll, mit je einem sinnvollen Schwell- bzw. Alarmwert.",
          punkte: 6,
          zeilen: 5,
          loesung:
            "Z. B.: Datastore-Füllstand (Warnung 80 %, kritisch 90 %); RAID-/Plattenstatus (Alarm sofort bei degraded/Predictive Failure); Backup-Jobstatus (Alarm bei Fehlschlag oder ausbleibendem Job); USV (Alarm bei Batteriebetrieb/Batteriefehler); Host-Auslastung CPU/RAM (Warnung > 85 % über 15 min); Zertifikats-/Lizenzablauf (< 30 Tage); Erreichbarkeit kritischer Dienste per Service-Check. Je Kenngröße mit Wert 1,5 P (max. 6).",
        },
        {
          k: "5.2",
          frage:
            "Ein PowerShell-Skript soll alle Konten der OU „Azubis“ auflisten, deren Passwort nie abläuft. Ergänze die Lücken.",
          punkte: 6,
          tabelle: {
            kopf: ["Baustein", "Dein Eintrag"],
            zeilen: [
              ["Cmdlet zum Abfragen der AD-Benutzer", null],
              ["Parameter zur Einschränkung auf die OU", null],
              ["Eigenschaft/Filterkriterium „Passwort läuft nie ab“", null],
            ],
            check: ["get-aduser", "-searchbase|searchbase", "passwordneverexpires"],
          },
          loesung:
            'Get-ADUser -Filter * -SearchBase "OU=Azubis,DC=stadtwerke,DC=local" -Properties PasswordNeverExpires | Where-Object { $_.PasswordNeverExpires } | Select-Object Name.\nJe Lücke 2 P. Sinn der Aufgabe: wiederkehrende Kontrollen gehören automatisiert (Compliance-Report statt Handarbeit).',
        },
        {
          k: "5.3",
          frage:
            "Die Stadtwerke besitzen 120 Office-Lizenzen, installiert ist die Software auf 134 Rechnern. Erläutere den Begriff dieser Situation, zwei mögliche Konsequenzen und zwei organisatorisch-technische Maßnahmen dagegen.",
          punkte: 8,
          zeilen: 6,
          loesung:
            "Unterlizenzierung (Lizenzverstoß). Konsequenzen: Bei einem Hersteller-Audit Nachzahlungen (oft zu Listenpreisen) plus mögliche Vertragsstrafen; rechtliche Risiken (Urheberrechtsverletzung), Reputationsschaden. Maßnahmen: Lizenzmanagement mit Inventarisierung (automatischer Soll-Ist-Abgleich über Softwareverteilung/Inventory-Tool); Installation nur über die zentrale Softwareverteilung (keine lokalen Adminrechte für Standardnutzer); regelmäßige Compliance-Reports; ungenutzte Installationen deinstallieren statt nachkaufen.\nBewertung: Begriff 2 P, je Konsequenz 1,5 P, je Maßnahme 1,5 P.",
        },
      ],
    },
  ],
};
