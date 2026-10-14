window.LF_CONTENT = window.LF_CONTENT || {};
window.LF_CONTENT["lf4"] = {
  topics: [
    {
      id: "lf4-gs",
      title: "IT-Grundschutz",
      lessons: [
        {
          id: "lf4-gs-1",
          title: "BSI, CIA & Schutzbedarf",
          content: [
            { type: "heading", value: "CIA-Triade (Schutzziele)" },
            {
              type: "text",
              value:
                "Confidentiality (Vertraulichkeit): Nur autorisierte Personen dürfen Daten lesen. Mittel: Verschlüsselung, Zugriffsrechte, DLP. Integrity (Integrität): Daten dürfen nicht unbemerkt verändert werden. Mittel: Hashing (SHA-256), digitale Signaturen, Prüfsummen. Availability (Verfügbarkeit): Systeme müssen erreichbar sein, wenn benötigt. Mittel: Redundanz, USV, Backup, Load Balancing. Ergänzend: Authentizität (Echtheit nachweisbar), Verbindlichkeit (Nicht-Abstreitbarkeit), Zurechenbarkeit.",
            },
            { type: "heading", value: "BSI IT-Grundschutz" },
            {
              type: "text",
              value:
                "Bundesamt für Sicherheit in der Informationstechnik. Vorgehen: 1) Strukturanalyse (Welche IT-Systeme, Anwendungen, Räume?), 2) Schutzbedarfsfeststellung (Normal/Hoch/Sehr hoch pro System), 3) Modellierung (Passende BSI-Bausteine zuordnen), 4) IT-Grundschutz-Check (Soll-Ist-Vergleich), 5) Risikoanalyse (für hohen/sehr hohen Schutzbedarf), 6) Umsetzung und Dokumentation.",
            },
            { type: "heading", value: "Schutzbedarfskategorien" },
            {
              type: "text",
              value:
                "Normal: Schaden ist begrenzt und überschaubar. Hoch: Schaden ist beträchtlich (z.B. Verstoß gegen Gesetze, erheblicher finanzieller Schaden). Sehr hoch: Schaden ist existenzbedrohend (Insolvenz, Gefahr für Leib und Leben). Vererbungsprinzip: Ein Server mit einer 'sehr hoch'-Anwendung erbt den Schutzbedarf.",
            },
            {
              type: "note",
              value:
                "Strukturanalyse und Schutzbedarfsfeststellung sind zentrale AP1/AP2-Themen. Das BSI IT-Grundschutz-Kompendium definiert Bausteine für jeden Bereich (z.B. SYS.1.1 Server, NET.1.1 Netzarchitektur, OPS.1.1 Betrieb).",
            },
            { type: "heading", value: "Übungsaufgabe 1: CIA" },
            {
              type: "text",
              value: "Erkläre die drei Schutzziele anhand einer Online-Banking-Anwendung.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nVertraulichkeit: nur der Kontoinhaber sieht seine\nKontodaten (Verschlüsselung, Login).\nIntegrität: Überweisungsbeträge dürfen nicht\nunbemerkt verändert werden (Prüfsummen, Signatur).\nVerfügbarkeit: das Banking ist erreichbar, wenn der\nKunde es braucht (Ausfallsicherheit).",
            },
            { type: "heading", value: "Übungsaufgabe 2: Schutzbedarf" },
            {
              type: "text",
              value:
                "Ordne den Schutzbedarf zu: a) öffentlicher Flyer, b) Passwortdatei, c) Patientenakte.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Flyer -> normal (öffentlich, kein Schaden)\nb) Passwortdatei -> hoch/sehr hoch (Kompromittierung\n   gefährdet alle Systeme)\nc) Patientenakte -> sehr hoch (Gesundheitsdaten,\n   existenziell schützenswert, DSGVO Art. 9)",
            },
            { type: "heading", value: "Übungsaufgabe 3: Authentizität" },
            {
              type: "text",
              value: "Was bedeutet Authentizität zusätzlich zu den drei Grundwerten?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nAuthentizität = Echtheit/Nachweisbarkeit der\nIdentität: Ist der Absender/Nutzer wirklich der,\nder er vorgibt zu sein? Sichergestellt durch\nAuthentifizierung (Passwort, Zertifikat, MFA) und\ndigitale Signaturen. Eng verbunden mit Integrität.",
            },
            { type: "heading", value: "Übungsaufgabe 4: BSI-Standards" },
            {
              type: "text",
              value: "Nenne die BSI-Standards 200-1 bis 200-3 und wofür sie stehen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nBSI 200-1: Managementsysteme für Informationssicherheit\n  (ISMS, Leitlinie, Organisation)\nBSI 200-2: IT-Grundschutz-Methodik\n  (Strukturanalyse, Schutzbedarf, Modellierung)\nBSI 200-3: Risikoanalyse auf Basis von IT-Grundschutz\n  (für erhöhten Schutzbedarf)\nHinweis: Seit 2023 gibt es zusätzlich BSI-Standard 200-4 (Business Continuity Management).",
            },
            { type: "heading", value: "Übungsaufgabe 5: Schutzbedarfsstufen" },
            {
              type: "text",
              value:
                "Ordne den Schutzbedarf zu: a) Kantinen-Speiseplan, b) Personalakte, c) Intensivstation-Steuerung.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Speiseplan -> NORMAL (Schaden begrenzt, öffentlich)\nb) Personalakte -> HOCH (personenbezogen, DSGVO,\n   beträchtlicher Schaden bei Offenlegung)\nc) Intensivstation -> SEHR HOCH (Menschenleben\n   gefährdet, katastrophale Auswirkung bei Ausfall)",
            },
            { type: "heading", value: "Beispiel 1: CIA-Triade am Beispiel Patientendaten" },
            {
              type: "text",
              value:
                "Vertraulichkeit (Confidentiality): Nur behandelnde Ärzte dürfen Patientendaten lesen → Berechtigungskonzept, Verschlüsselung. Integrität (Integrity): Daten dürfen nicht unbemerkt verändert werden → Checksummen, Audit-Logs. Verfügbarkeit (Availability): System muss 24/7 laufen → Redundanz, USV, Backup. Verletzung: Patientendaten im Internet (C), falsche Blutgruppe in Akte (I), System 3h offline (A).",
            },
            { type: "heading", value: "Beispiel 2: Schutzbedarfsanalyse für KMU" },
            {
              type: "text",
              value:
                "Server mit Kundendaten: Vertraulichkeit=hoch (personenbezogene Daten, DSGVO), Integrität=hoch (falsche Rechnungsdaten = Rechtsstreit), Verfügbarkeit=normal (4h Ausfall tolerierbar). Website (öffentlich): V=normal, I=normal, A=hoch (Kunden können nicht bestellen). Drucker: V=normal, I=normal, A=normal. Aus hohem Schutzbedarf folgen: Verschlüsselung, Zugriffsprotokollierung, RAID, Backup.",
            },
            { type: "heading", value: "Beispiel 3: BSI-Gefährdungskatalog Beispiele" },
            {
              type: "text",
              value:
                "G 0.14 Ausspähung (Spionage): Wettbewerber verschafft sich Zugang zu Angebotsdaten. G 0.15 Abhören: Unverschlüsseltes WLAN in der Kanzlei. G 0.28 Software-Schwachstellen: Ungepatchter Exchange-Server. G 0.30 Unberechtigte Nutzung: Ex-Mitarbeiter hat noch VPN-Zugang. G 0.46 Integritätsverlust: Ransomware verschlüsselt Datenbank. Jede Gefährdung wird bewertet und mit Maßnahmen adressiert.",
            },
          ],
          quiz: [
            {
              id: "imp_lf4-gs-1_0",
              q: "CIA?",
              options: [
                "Computer, Internet, Application",
                "Confidentiality, Integrity, Availability",
                "Central Intelligence Agency",
                "Control, Inspect, Audit",
              ],
              correct: 1,
              explain: "Vertraulichkeit, Integrität, Verfügbarkeit.",
            },
            {
              id: "imp_lf4-gs-1_1",
              q: "BSI Schritt 1?",
              options: ["Umsetzung", "Risikoanalyse", "Modellierung", "Strukturanalyse"],
              correct: 3,
              explain: "Erst Strukturanalyse: Welche IT-Systeme gibt es?",
            },
            {
              id: "imp_lf4-gs-1_2",
              q: "Schutzbedarf 'Sehr hoch' bedeutet?",
              options: [
                "Existenzbedrohend",
                "Normaler Betrieb",
                "Begrenzte Auswirkung",
                "Kein Schaden",
              ],
              correct: 0,
              explain: "Existenzbedrohend: Insolvenz, Gefahr für Leib und Leben.",
            },
            {
              id: "imp_lf4-gs-1_3",
              q: "Vererbungsprinzip Schutzbedarf?",
              options: [
                "Der niedrigste Schutzbedarf einer App bestimmt den Server",
                "Der Durchschnitt aller Schutzbedarfe wird gebildet",
                "Ein solches Prinzip existiert im Grundschutz nicht",
                "Server erbt höchsten Schutzbedarf seiner Apps",
              ],
              correct: 3,
              explain: "Server mit sehr-hoch-App erbt den Schutzbedarf.",
            },
            {
              id: "imp_lf4-gs-1_4",
              q: "Strukturanalyse erfasst?",
              options: [
                "Alle IT-Systeme, Anwendungen, Räume",
                "Nur Server",
                "Nur Software",
                "Nur Personen",
              ],
              correct: 0,
              explain: "Vollständige Erfassung aller IT-Assets.",
            },
            {
              id: "imp_lf4-gs-1_5",
              q: "Availability Deutsch?",
              options: ["Integrität", "Verfügbarkeit", "Authentizität", "Vertraulichkeit"],
              correct: 1,
              explain: "Availability = Verfügbarkeit.",
            },
            {
              id: "imp_lf4-gs-1_6",
              q: "Confidentiality Maßnahme?",
              options: ["USV", "Verschlüsselung + Zugriffsrechte", "Backup", "Monitoring"],
              correct: 1,
              explain: "Vertraulichkeit: Nur Berechtigte dürfen Daten lesen.",
            },
            {
              id: "imp_lf4-gs-1_7",
              q: "IT-Grundschutz Kompendium?",
              options: [
                "BSI-Bausteine für verschiedene IT-Bereiche",
                "Firewall-Regeln",
                "Gesetz",
                "ISO-Norm",
              ],
              correct: 0,
              explain: "Baustein-Katalog: SYS, NET, OPS, APP etc.",
            },
            {
              id: "imp_lf4-gs-1_8",
              q: "Integrity Maßnahme?",
              options: [
                "Backup",
                "Verschlüsselung",
                "USV",
                "Hashing, digitale Signaturen, Checksummen",
              ],
              correct: 3,
              explain: "Integrität: Daten nicht unbemerkt verändert.",
            },
            {
              id: "imp_lf4-gs-1_9",
              q: "BSI Schritt 4?",
              options: [
                "Grundschutz-Check (Soll-Ist-Vergleich)",
                "Umsetzung",
                "Strukturanalyse",
                "Risikoanalyse",
              ],
              correct: 0,
              explain: "Schritt 4: IT-Grundschutz-Check = Soll vs. Ist.",
            },
            {
              id: "imp_lf4-gs-1_10",
              q: "Wofür steht CIA in der IT-Sicherheit?",
              options: [
                "Control, Inspect, Audit",
                "Confidentiality, Integrity, Availability",
                "Central Intelligence Agency",
                "Cloud, Internet, Application",
              ],
              correct: 1,
              explain: "CIA-Triade: Die drei Schutzziele der Informationssicherheit.",
            },
            {
              id: "imp_lf4-gs-1_11",
              q: "Was bedeutet 'hoher Schutzbedarf'?",
              options: [
                "Die Daten sind unwichtig und frei zugänglich",
                "Die üblichen Standard-Maßnahmen reichen aus",
                "Schäden wären beträchtlich bis existenzbedrohend",
                "Es ist ausschließlich physischer Schutz nötig",
              ],
              correct: 2,
              explain:
                "Hoher Schutzbedarf: Schäden können beträchtlich sein (finanziell, rechtlich, reputationsbezogen).",
            },
            {
              id: "imp_lf4-gs-1_12",
              q: "Welches Schutzziel wird bei Ransomware primär verletzt?",
              options: [
                "Nur Vertraulichkeit",
                "Keine",
                "Verfügbarkeit und Integrität",
                "Nur Verfügbarkeit",
              ],
              correct: 2,
              explain:
                "Ransomware: Verschlüsselt Daten → nicht verfügbar (A) und verändert sie (I). Oft auch Datenabfluss (C).",
            },
            {
              id: "imp_lf4-gs-1_13",
              q: "Was ist der Unterschied zwischen Informationssicherheit und IT-Sicherheit?",
              options: [
                "Es gibt keinen Unterschied, beide Begriffe bezeichnen exakt dasselbe Konzept",
                "Informationssicherheit umfasst auch nicht-digitale Infos (Papier, Gespräche)",
                "Informationssicherheit gilt ausschließlich für Behörden und öffentliche Stellen",
                "IT-Sicherheit ist der umfassendere Begriff und schließt Informationssicherheit ein",
              ],
              correct: 1,
              explain:
                "Informationssicherheit: Schutz ALLER Informationen (auch Aktenordner, Telefonate). IT-Sicherheit: Nur digitale Systeme.",
            },
            {
              id: "imp_lf4-gs-1_14",
              q: "Was ist eine Schutzbedarfsfeststellung?",
              options: [
                "Das Erstellen eines vollständigen Backups aller Systeme",
                "Bewertung wie hoch der Schutzbedarf jedes Assets bzgl. C, I, A ist",
                "Die Installation eines Virenscanners auf allen Clients",
                "Das Konfigurieren der Firewall-Regeln am Perimeter",
              ],
              correct: 1,
              explain:
                "Schutzbedarfsfeststellung: Für jedes IT-Asset wird C, I, A einzeln bewertet (normal/hoch/sehr hoch).",
            },
            {
              id: "imp_lf4-gs-1_15",
              q: "Was ist das Maximumprinzip beim Schutzbedarf?",
              options: [
                "Die maximale Anzahl an Backup-Generationen, die vorgehalten werden müssen",
                "Der höchste Schutzbedarf einer Komponente bestimmt den Schutzbedarf des Gesamtsystems",
                "Das teuerste Asset im System legt den Schutzbedarf aller anderen Komponenten fest",
                "Die Obergrenze der Kosten, die für Sicherheitsmaßnahmen ausgegeben werden dürfen",
              ],
              correct: 1,
              explain:
                "Maximumprinzip: Ein Server mit hohem C-Bedarf hebt den gesamten Netzwerk-Schutzbedarf an.",
            },
            {
              id: "imp_lf4-gs-1_16",
              q: "Welche Organisation ist in DE für IT-Sicherheitsstandards zuständig?",
              options: [
                "Die Landesdatenschutzbehörden als zentrale Aufsicht über IT-Sicherheit",
                "Der TÜV als zentrale Prüf- und Normungsstelle für IT-Sicherheit",
                "BSI (Bundesamt für Sicherheit in der Informationstechnik)",
                "Das BKA (Bundeskriminalamt) als zuständige Standardisierungsstelle",
              ],
              correct: 2,
              explain:
                "BSI: Bundesbehörde, gibt IT-Grundschutz-Kompendium, Warnungen, Zertifizierungen heraus.",
            },
            {
              id: "imp_lf4-gs-1_17",
              q: "Was passiert bei Verletzung der Integrität?",
              options: [
                "Daten werden zu langsam über das Netz übertragen",
                "Daten sind für berechtigte Nutzer nicht verfügbar",
                "Daten wurden von Unbefugten kopiert und eingesehen",
                "Daten wurden unbemerkt verändert oder verfälscht",
              ],
              correct: 3,
              explain:
                "Integritätsverletzung: Daten manipuliert ohne Wissen des Besitzers (z.B. falsche Rechnung, geändertes Angebot).",
            },
            {
              id: "imp_lf4-gs-1_18",
              q: "Ist ein Stromausfall ein IT-Sicherheitsproblem?",
              options: [
                "Nur wenn es länger als 1 Tag dauert",
                "Nur wenn Server betroffen",
                "Ja – Verletzung der Verfügbarkeit",
                "Nein, nur ein technisches Problem",
              ],
              correct: 2,
              explain:
                "Stromausfall = Verfügbarkeitsrisiko. Gegenmaßnahmen: USV, Notstrom, Redundanz.",
            },
            {
              id: "imp_lf4-gs-1_19",
              q: "Was ist ein IT-Asset im Kontext der Schutzbedarfsanalyse?",
              options: [
                "Jedes schutzwürdige Objekt: Hardware, Software, Daten, Räume, Prozesse, Personen",
                "Ausschließlich Server und zentrale Systeme; Clients und Daten zählen nicht dazu",
                "Nur physische Hardware wie PCs, Drucker und Netzwerkgeräte; Software zählt nicht",
                "Nur elektronische Daten und Datenbanken; Geräte und Räume bleiben außen vor",
              ],
              correct: 0,
              explain:
                "Asset = alles Schutzwürdige: Server, Datenbanken, Anwendungen, Räume, Mitarbeiter-Know-how.",
            },
          ],
        },
        {
          id: "lf4-gs-2",
          title: "TOM & Zugangsarten",
          content: [
            { type: "heading", value: "Technische Maßnahmen" },
            {
              type: "text",
              value:
                "Verschlüsselung (AES, TLS, BitLocker), Firewall (Paketfilter, NGFW, WAF), IDS/IPS (Angriffserkennung/-abwehr), Backup-Systeme (3-2-1-Regel), USV (unterbrechungsfreie Stromversorgung), Biometrie (Fingerabdruck, Gesichtserkennung), 2FA/MFA (zweiter Faktor: App, Token, SMS), Virenschutz/EDR, Netzwerksegmentierung (VLANs, DMZ), Protokollierung/Logging.",
            },
            { type: "heading", value: "Organisatorische Maßnahmen" },
            {
              type: "text",
              value:
                "Sicherheitsrichtlinien (IT-Nutzungsordnung), Schulungen und Awareness-Kampagnen, Notfallpläne (Disaster Recovery Plan), Clean Desk Policy (Bildschirmsperre, Dokumente wegräumen), Vier-Augen-Prinzip (kritische Aktionen zu zweit), Regelmäßige Audits, Berechtigungskonzept (Least Privilege: nur nötige Rechte), Zuständigkeitsmatrix (wer darf was), Besucherregelungen.",
            },
            { type: "heading", value: "Zutritt / Zugang / Zugriff" },
            {
              type: "text",
              value:
                "Zutritt (physisch): Wer darf in Gebäude/Räume? Maßnahmen: Schlüsselkarte, Schleuse, Videoüberwachung, Pförtner, Besucherbuch. Zugang (logisch/System): Wer darf sich am System anmelden? Maßnahmen: Benutzername+Passwort, 2FA, Smartcard, Biometrie. Zugriff (Daten/Ressourcen): Auf welche Daten/Funktionen darf der angemeldete Benutzer zugreifen? Maßnahmen: Dateiberechtigungen (NTFS ACLs), Gruppenrichtlinien, RBAC (Role-Based Access Control).",
            },
            {
              type: "note",
              value:
                "Prüfungsklassiker: Zutritt (Gebäude) vs. Zugang (Login) vs. Zugriff (Datenrechte). IMMER unterscheiden!",
            },
            { type: "heading", value: "AAA: Authentisierung, Authentifizierung, Autorisierung" },
            {
              type: "text",
              value:
                "Die drei A unterscheiden (Prüfungsklassiker!): Authentisierung: Benutzer GIBT seine Identität an (Login + Passwort eingeben, Chipkarte vorzeigen). Authentifizierung: System PRÜFT die angegebene Identität (Passwort wird gegen Datenbank geprüft). Autorisierung: System weist RECHTE zu (was darf der Benutzer? Welche Ordner, welche Anwendungen?). Accounting: PROTOKOLLIERUNG der Nutzung (wer hat wann was gemacht, Abrechnung). Beispiel WLAN: 1. Benutzer gibt Benutzername+Passwort ein (Authentisierung). 2. RADIUS-Server prüft Zugangsdaten (Authentifizierung). 3. RADIUS weist VLAN/Rechte zu (Autorisierung). 4. Verbindungsdauer wird protokolliert (Accounting).",
            },
            { type: "heading", value: "Übungsaufgabe 1: TOM" },
            {
              type: "text",
              value:
                "Nenne je ein Beispiel für eine technische und eine organisatorische Maßnahme.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nTechnisch (TOM): Verschlüsselung, Firewall,\nZugriffskontrolle per Login, automatische Sperre.\nOrganisatorisch: Berechtigungskonzept, Schulungen,\nClean-Desk-Policy, Besucherregelung, Notfallplan.\nTOM = Technische und Organisatorische Maßnahmen\n(DSGVO Art. 32).",
            },
            { type: "heading", value: "Übungsaufgabe 2: Faktoren" },
            {
              type: "text",
              value: "Was sind die drei Authentifizierungsfaktoren? Je ein Beispiel.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nWissen: etwas, das man weiß (Passwort, PIN).\nBesitz: etwas, das man hat (Smartcard, Token, Handy).\nSein/Inhärenz: etwas, das man ist (Fingerabdruck,\nGesicht). MFA kombiniert mind. zwei verschiedene\nFaktoren -> deutlich sicherer.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Zutritt/Zugang/Zugriff" },
            { type: "text", value: "Unterscheide Zutritt, Zugang und Zugriff." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nZutritt: physischer Eintritt in Räume (Tür, Ausweis).\nZugang: Anmeldung an IT-Systemen (Login, Konto).\nZugriff: Berechtigung auf konkrete Daten/Funktionen\n(Lese-/Schreibrechte). Drei Ebenen der Zugangskontrolle.",
            },
            { type: "heading", value: "Übungsaufgabe 4: Tailgating" },
            { type: "text", value: "Was ist Tailgating und wie verhindert man es?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nTailgating = eine unbefugte Person folgt einer\nberechtigten durch eine gesicherte Tür.\nGegenmaßnahmen: Vereinzelungsanlage/Drehkreuz,\nSicherheitsbewusstsein der Mitarbeiter (Schulung:\nnicht aufhalten, ansprechen), Sicherheitsdienst.",
            },
            { type: "heading", value: "Beispiel 1: Technisch-organisatorische Maßnahmen (TOM)" },
            {
              type: "text",
              value:
                "Technisch: Verschlüsselung (AES-256 für Festplatten), Firewall (Netzwerkzugang), Virenschutz, automatische Updates, Bildschirmsperre. Organisatorisch: Clean-Desk-Policy, Besucherregelung, Sicherheitsschulungen, Vier-Augen-Prinzip bei kritischen Änderungen, Passwort-Policy (min. 12 Zeichen, Komplexität). TOM müssen dokumentiert sein (DSGVO Art. 32).",
            },
            { type: "heading", value: "Beispiel 2: Zugangsarten und Authentifizierung" },
            {
              type: "text",
              value:
                "Wissen: Passwort, PIN – kann vergessen/erraten werden. Besitz: Smartcard, Token, Smartphone (TOTP) – kann verloren/gestohlen werden. Biometrie: Fingerabdruck, Gesichtserkennung – kann nicht verloren werden, aber Datenschutzbedenken. 2FA/MFA: Kombination aus mind. 2 Faktoren. Beispiel: Login mit Passwort (Wissen) + TOTP-App (Besitz) = 2FA.",
            },
            { type: "heading", value: "Beispiel 3: Physische Sicherheit im Serverraum" },
            {
              type: "text",
              value:
                "Zutritt: Transponder/Kartenleser, nur autorisiertes Personal. Protokollierung: Wer hat wann den Raum betreten (Zutrittskontrollsystem). Klimatisierung: 18-27°C, max. 60% Luftfeuchtigkeit. Brandschutz: Rauchmelder, Gaslöschanlage (kein Wasser bei Servern!). USV + Notstrom. Redundante Netzanbindung. Videoüberwachung (DSGVO-konform!).",
            },
          ],
          quiz: [
            {
              id: "imp_lf4-gs-2_0",
              q: "Zugang vs. Zugriff?",
              options: [
                "Zugang=Daten, Zugriff=System",
                "Zugang=Login, Zugriff=Datenrechte",
                "Gleich",
                "Zugang=physisch, Zugriff=Login",
              ],
              correct: 1,
              explain: "Zugang = Anmeldung am System. Zugriff = Berechtigung auf bestimmte Daten.",
            },
            {
              id: "imp_lf4-gs-2_1",
              q: "Least Privilege bedeutet?",
              options: [
                "Admin für alle",
                "Kein Zugriff",
                "Maximale Rechte",
                "Nur die nötigsten Rechte vergeben",
              ],
              correct: 3,
              explain: "Jeder Benutzer bekommt nur die Rechte, die er für seine Arbeit braucht.",
            },
            {
              id: "imp_lf4-gs-2_2",
              q: "Clean Desk Policy?",
              options: [
                "Tisch putzen",
                "Homeoffice",
                "Bildschirmsperre + Dokumente wegräumen",
                "Nur digitale Daten",
              ],
              correct: 2,
              explain:
                "Arbeitsplatz bei Verlassen aufräumen: Bildschirm sperren, sensible Dokumente wegräumen.",
            },
            {
              id: "imp_lf4-gs-2_3",
              q: "RBAC = ?",
              options: [
                "Remote Backup",
                "Role-Based Access Control",
                "Rule Based",
                "Redundant Base",
              ],
              correct: 1,
              explain: "Rollen-basierte Zugriffskontrolle.",
            },
            {
              id: "imp_lf4-gs-2_4",
              q: "Vier-Augen-Prinzip?",
              options: [
                "4 Admins",
                "Backup",
                "Videoüberwachung",
                "Kritische Aktionen brauchen 2 Personen",
              ],
              correct: 3,
              explain: "Zwei Personen müssen kritische Aktionen gemeinsam freigeben.",
            },
            {
              id: "imp_lf4-gs-2_5",
              q: "DLP = ?",
              options: ["Dynamic Load", "Data Loss Prevention", "Direct Link", "Digital Login"],
              correct: 1,
              explain: "Data Loss Prevention: Verhindert ungewollten Datenabfluss.",
            },
            {
              id: "imp_lf4-gs-2_6",
              q: "Zutritt Maßnahme?",
              options: [
                "Schlüsselkarte, Schleuse, Pförtner (physisch)",
                "Firewall-Regeln am Netzwerkperimeter",
                "ACLs auf Datei- und Verzeichnisebene",
                "Passwortrichtlinie für Benutzerkonten",
              ],
              correct: 0,
              explain: "Zutritt = physischer Zugang zum Gebäude/Raum.",
            },
            {
              id: "imp_lf4-gs-2_7",
              q: "Bildschirmsperre nach?",
              options: ["30 Min", "1 Stunde", "Max. 5-10 Min Inaktivität", "Nie"],
              correct: 2,
              explain: "Bildschirmsperre nach kurzer Inaktivität aktivieren.",
            },
            {
              id: "imp_lf4-gs-2_8",
              q: "Need-to-Know?",
              options: [
                "Nur Chefs",
                "Nur Admins",
                "Alle dürfen alles",
                "Nur Zugriff auf Infos, die für die Aufgabe nötig sind",
              ],
              correct: 3,
              explain: "Need-to-Know: Nur die Informationen, die man für seine Arbeit braucht.",
            },
            {
              id: "imp_lf4-gs-2_9",
              q: "Datensicherung = TOM?",
              options: ["Nur organisatorisch", "Ja (technische Maßnahme)", "Nur physisch", "Nein"],
              correct: 1,
              explain: "Backup ist eine technische Maßnahme zum Schutz der Verfügbarkeit.",
            },
            {
              id: "imp_lf4-gs-2_10",
              q: "Was ist der Unterschied zwischen Zutritt, Zugang und Zugriff?",
              options: [
                "Nur der Zugriff ist sicherheitsrelevant, Zutritt und Zugang müssen nicht geregelt werden",
                "Zutritt=physisch (Raum), Zugang=System (Login), Zugriff=Daten (Berechtigung)",
                "Es gibt keinen Unterschied, alle drei Begriffe bezeichnen dieselbe Schutzmaßnahme",
                "Alle drei Begriffe bezeichnen unterschiedliche Formen der Passwortvergabe",
              ],
              correct: 1,
              explain:
                "Zutritt: Räume betreten. Zugang: System nutzen (einloggen). Zugriff: Auf bestimmte Daten/Funktionen zugreifen.",
            },
            {
              id: "imp_lf4-gs-2_11",
              q: "Was sind die drei Authentifizierungsfaktoren?",
              options: [
                "Wissen (Passwort), Besitz (Token/Smartcard), Biometrie (Fingerabdruck)",
                "PIN, PUK und TAN als die drei Sicherheitscodes der Mobilfunkanbieter",
                "Benutzername, Passwort und E-Mail-Adresse als klassische Anmeldedaten",
                "Login-Name, Passwort und Sicherheitsfrage wie bei der Kontowiederherstellung",
              ],
              correct: 0,
              explain: "Wissen, Besitz, Biometrie – mindestens 2 verschiedene für echtes 2FA/MFA.",
            },
            {
              id: "imp_lf4-gs-2_12",
              q: "Was ist das Least-Privilege-Prinzip?",
              options: [
                "Benutzer erhalten nur die minimal nötigen Berechtigungen",
                "Administratoren erhalten weniger Rechte als normale Benutzer",
                "Jeder Benutzer erhält vorsorglich vollständige Admin-Rechte",
                "Alle Benutzer erhalten identische Rechte auf alle Ressourcen",
              ],
              correct: 0,
              explain:
                "Least Privilege: Nur so viele Rechte wie für die Aufgabe nötig. Reduziert Angriffsfläche.",
            },
            {
              id: "imp_lf4-gs-2_13",
              q: "Was ist eine Clean-Desk-Policy?",
              options: [
                "Die Vorgabe, den Schreibtisch aus hygienischen Gründen stets sauber zu halten",
                "Keine vertraulichen Unterlagen offen auf dem Schreibtisch bei Abwesenheit",
                "Die Pflicht des Reinigungspersonals, jeden Schreibtisch täglich zu desinfizieren",
                "Das Verbot, Getränke und Speisen in der Nähe der IT-Geräte abzustellen",
              ],
              correct: 1,
              explain:
                "Clean Desk: Vertrauliche Dokumente wegsperren, PC sperren, Bildschirm abschalten bei Verlassen des Platzes.",
            },
            {
              id: "imp_lf4-gs-2_14",
              q: "Was ist TOTP?",
              options: [
                "Temporary Online Token Password",
                "Total Online Transfer Protocol",
                "Token Output Transfer Program",
                "Time-based One-Time Password",
              ],
              correct: 3,
              explain:
                "Zeitbasierter Einmalcode (z.B. Google Authenticator). TOTP: Generiert alle 30 Sekunden einen neuen 6-stelligen Code basierend auf Shared Secret + Uhrzeit.",
            },
            {
              id: "imp_lf4-gs-2_15",
              q: "Warum reicht ein Passwort allein nicht als sicher?",
              options: [
                "Nur schwache Passwörter sind unsicher, lange Passwörter sind allein ausreichend",
                "Passwörter sind zu lang, um sie im Alltag fehlerfrei einzugeben",
                "Passwörter sind immer sicher, ein zweiter Faktor bringt keinen Zusatznutzen",
                "Kann durch Phishing, Keylogger, Brute-Force oder Leaks kompromittiert werden",
              ],
              correct: 3,
              explain:
                "Single Factor (nur Passwort): Ein kompromittierter Faktor = voller Zugang. 2FA schützt auch bei Passwortverlust.",
            },
            {
              id: "imp_lf4-gs-2_16",
              q: "Welche Maßnahme ist technisch (nicht organisatorisch)?",
              options: [
                "Besucherregelung",
                "Clean-Desk-Policy",
                "Mitarbeiterschulung",
                "Festplattenverschlüsselung",
              ],
              correct: 3,
              explain:
                "Festplattenverschlüsselung = technische Maßnahme. Die anderen sind organisatorisch.",
            },
            {
              id: "imp_lf4-gs-2_17",
              q: "Was regelt DSGVO Art. 32?",
              options: [
                "Recht auf Vergessenwerden",
                "Bußgelder",
                "Sicherheit der Verarbeitung",
                "Datenschutzbeauftragter",
              ],
              correct: 2,
              explain:
                "Angemessene TOM erforderlich. Art. 32: Verantwortliche müssen angemessene technische und organisatorische Maßnahmen zum Schutz treffen.",
            },
            {
              id: "imp_lf4-gs-2_18",
              q: "Was ist Separation of Duties?",
              options: [
                "Produktions- und Testserver physisch trennen",
                "Kritische Aufgaben auf mehrere Personen verteilen",
                "Die Trennung von Netzwerken in getrennte Segmente",
                "Backup-Systeme räumlich von der Produktion trennen",
              ],
              correct: 1,
              explain:
                "Kein Single Point of Trust. Separation of Duties: z.B. Bestellung (Person A) + Freigabe (Person B) → verhindert Betrug durch Einzelpersonen.",
            },
            {
              id: "imp_lf4-gs-2_19",
              q: "Was ist ein Vier-Augen-Prinzip?",
              options: [
                "Arbeitsplätze werden mit vier Monitoren ausgestattet, um Prozesse besser zu überblicken",
                "Videoüberwachung kritischer Räume durch mindestens zwei Kameras aus verschiedenen Winkeln",
                "Kritische Aktionen benötigen Genehmigung/Prüfung durch eine zweite Person",
                "Auf jedem Server müssen mindestens vier Administratoren als Benutzer eingerichtet sein",
              ],
              correct: 2,
              explain:
                "Vier-Augen-Prinzip: Zwei unabhängige Personen müssen zustimmen → verhindert Fehler und Missbrauch.",
            },
          ],
        },
        {
          id: "lf4-gs-3",
          title: "BSI IT-Grundschutz: Struktur- & Schutzbedarfsanalyse (RECPLAST)",
          content: [
            { type: "heading", value: "Das Musterunternehmen RECPLAST GmbH" },
            {
              type: "text",
              value:
                "RECPLAST GmbH ist ein fiktives Beispielunternehmen, das das BSI zur Veranschaulichung der IT-Grundschutz-Methodik nutzt. Grundlage sind die BSI-Standards 200-1 (ISMS), 200-2 (IT-Grundschutz-Methodik) und 200-3 (Risikoanalyse). Die Geschäftsführung der RECPLAST hat als Ziel einen normalen Schutzbedarf festgelegt (Standard-Absicherung). An diesem Beispiel lässt sich der komplette Weg von der Strukturanalyse bis zum Sicherheitskonzept nachvollziehen.",
            },
            { type: "heading", value: "Schritt 1: Strukturanalyse" },
            {
              type: "text",
              value:
                "Die Strukturanalyse erfasst den gesamten Informationsverbund. Reihenfolge: 1. Geschäftsprozesse erfassen (z.B. Auftragsabwicklung, Produktion, Personalverwaltung). 2. Anwendungen erfassen, die diese Prozesse unterstützen (z.B. ERP, E-Mail, Fileserver). 3. Informationen erfassen, die verarbeitet werden. 4. Netzplan erheben (oft als Ausgangspunkt; gleichartige Komponenten werden zu Gruppen zusammengefasst). 5. IT-Systeme erheben (Server, Clients, Netzkomponenten). 6. Räumliche Gegebenheiten erheben (Serverraum, Büros). Ergebnis: vollständige Liste aller Zielobjekte.",
            },
            { type: "heading", value: "Schritt 2: Schutzbedarfsfeststellung" },
            {
              type: "text",
              value:
                "Bewertet wird nach den drei Grundwerten: Vertraulichkeit (wer darf es sehen?), Integrität (sind die Daten korrekt/unverändert?), Verfügbarkeit (ist es erreichbar, wenn nötig?). Drei Kategorien: NORMAL = begrenzte, überschaubare Schäden. HOCH = beträchtliche Schäden. SEHR HOCH = existenziell bedrohliches, katastrophales Ausmaß. WICHTIG: Zuerst wird der Schutzbedarf der GESCHÄFTSPROZESSE bestimmt, davon abgeleitet der Bedarf von Anwendungen, IT-Systemen, Kommunikationsverbindungen und Räumen. Bewertet wird anhand von Schadensszenarien (z.B. Verstoß gegen Gesetze, Beeinträchtigung der Aufgabenerfüllung, negative Außenwirkung, finanzielle Schäden, Gefahr für Leib und Leben).",
            },
            { type: "heading", value: "Schritt 3: Vererbung des Schutzbedarfs" },
            {
              type: "text",
              value:
                "Der Schutzbedarf vererbt sich vom Geschäftsprozess auf die Anwendungen und von dort auf die IT-Systeme. Dabei gelten Vererbungsprinzipien: MAXIMUMPRINZIP: Ein IT-System erbt den HÖCHSTEN Schutzbedarf aller darauf betriebenen Anwendungen. Beispiel: Läuft auf einem Server eine Anwendung mit normalem und eine mit hohem Bedarf, gilt für den Server hoch. KUMULATIONSEFFEKT: Laufen viele Anwendungen mit jeweils normalem Bedarf auf einem System, kann der gleichzeitige Ausfall einen hohen Gesamtschaden verursachen → Schutzbedarf steigt auf hoch. VERTEILUNGSEFFEKT: Ist eine Anwendung mit hohem Bedarf redundant auf mehrere Systeme verteilt, kann der Bedarf eines einzelnen Systems niedriger sein. KEINE VERERBUNG: In begründeten Fällen wird der Bedarf nicht weitergegeben.",
            },
            { type: "heading", value: "Durchgerechnetes Beispiel: Vererbung" },
            {
              type: "code",
              value:
                "Server S1 betreibt 3 Anwendungen (Grundwert Verfügbarkeit):\n  ERP-System:    hoch\n  Mailserver:    normal\n  Druckdienst:   normal\n\nMaximumprinzip → S1 erbt: HOCH (höchster Wert)\n\nServer S2 betreibt 4 Anwendungen, alle: normal\n  Einzeln tolerierbar, aber gleichzeitiger Ausfall\n  legt die halbe Firma lahm.\nKumulationseffekt → S2 wird hochgestuft: HOCH\n\nWebshop läuft redundant auf S3 + S4 (Cluster):\n  Anwendung Webshop: hoch\n  Fällt S3 aus, übernimmt S4.\nVerteilungseffekt → einzelner Server ggf.: NORMAL",
            },
            { type: "heading", value: "Übungsaufgabe 1: Vererbung beim Virtualisierungs-Host" },
            {
              type: "text",
              value:
                "Auf einem Virtualisierungs-Host laufen 5 virtuelle Server mit jeweils normalem Schutzbedarf für Verfügbarkeit. Begründe, welchen Schutzbedarf der Host bekommt und nach welchem Prinzip.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nJede einzelne VM: normal (Ausfall überbrückbar).\nABER: Fällt der Host aus, fallen ALLE 5 VMs\ngleichzeitig aus → hoher Gesamtschaden.\n\n→ Schutzbedarf Host: HOCH\n→ Prinzip: KUMULATIONSEFFEKT\n\n(Hinweis: Schafft die Virtualisierung dagegen\nRedundanz, z.B. Failover-Cluster, kann für\neinzelne Komponenten der Verteilungseffekt greifen\nund den Bedarf wieder senken.)",
            },
            {
              type: "note",
              value:
                "Strukturanalyse + Schutzbedarfsfeststellung sind das Kernthema von LF4 und kommen in AP1/AP2 vor. Die drei Vererbungsprinzipien (Maximum, Kumulation, Verteilung) und die Reihenfolge (erst Prozesse, dann ableiten) sind besonders prüfungsrelevant.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Reihenfolge" },
            {
              type: "text",
              value: "In welcher Reihenfolge wird der Schutzbedarf festgestellt und warum?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nZuerst die Geschäftsprozesse, davon abgeleitet die\nAnwendungen, dann die IT-Systeme, danach\nKommunikationsverbindungen und Räume. Grund: Der\nSchutzbedarf entsteht aus dem Geschäftswert -\nTechnik dient den Prozessen, also vererbt sich der\nBedarf von oben nach unten.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Verteilungseffekt" },
            {
              type: "text",
              value: "Gib ein Beispiel, bei dem der Schutzbedarf eines Systems SINKT.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nEine Anwendung mit hohem Verfügbarkeitsbedarf läuft\nredundant auf zwei Servern im Failover-Cluster.\nFällt Server A aus, übernimmt B. Für den einzelnen\nServer kann der Verfügbarkeitsbedarf daher niedriger\nangesetzt werden -> Verteilungseffekt.",
            },
            { type: "heading", value: "Übungsaufgabe 4: Vererbung anwenden" },
            {
              type: "text",
              value:
                "Server S1: App A (hoch), App B (normal). Server S2: nur App C (normal), aber Redundanz-Cluster mit S3. Schutzbedarf S1 und S2?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nS1: HOCH (Maximumprinzip - App A hat hoch,\ndas dominiert App B mit normal).\nS2: ggf. NORMAL bleibend (Verteilungseffekt -\nApp C ist auf S2+S3 verteilt/redundant, Ausfall\neines Servers wird durch den anderen aufgefangen).",
            },
            { type: "heading", value: "Beispiel 1: BSI IT-Grundschutz Vorgehensmodell" },
            {
              type: "text",
              value:
                "1. Strukturanalyse: IT-Assets erfassen (Server, Clients, Netze, Räume). 2. Schutzbedarfsfeststellung: C, I, A pro Asset. 3. Modellierung: Passende IT-Grundschutz-Bausteine zuordnen (z.B. SYS.1.1 Server, NET.1.1 Netzarchitektur). 4. IT-Grundschutz-Check: Soll/Ist-Vergleich – welche Maßnahmen fehlen? 5. Risikoanalyse: Für Assets mit erhöhtem Schutzbedarf. 6. Maßnahmen umsetzen und dokumentieren.",
            },
            { type: "heading", value: "Beispiel 2: RECPLAST-Beispiel (aus IT-Grundschutz Demos)" },
            {
              type: "text",
              value:
                "Fiktives Unternehmen RECPLAST: 2 Standorte, 150 MA, ERP-System, Exchange, Fileserver. Strukturanalyse: 5 Server, 120 Clients, 2 WAN-Strecken, 3 Serverräume. Schutzbedarfsfeststellung: ERP-Server = hoher Schutzbedarf (C, I, A alle hoch → geschäftskritisch). Fileserver = normal. Modellierung: ERP-Server bekommt Bausteine SYS.1.1 + APP.4.2 + OPS.1.1 + CON.3.",
            },
            { type: "heading", value: "Beispiel 3: IT-Grundschutz-Baustein Beispiel" },
            {
              type: "text",
              value:
                "Baustein SYS.1.1 'Allgemeiner Server': Anforderung SYS.1.1.A2: 'Benutzerauthentisierung'. SYS.1.1.A3: 'Restriktive Rechtevergabe'. SYS.1.1.A6: 'Schutz der Administrations-Schnittstellen'. Jede Anforderung hat Umsetzungsstatus: Ja/Teilweise/Nein/Entbehrlich. Der IT-Grundschutz-Check dokumentiert den Ist-Stand und identifiziert Lücken.",
            },
          ],
          quiz: [
            {
              id: "imp_lf4-gs-3_0",
              q: "Schutzbedarfsfeststellung: Womit beginnt man?",
              options: ["Räume", "IT-Systeme", "Kabel", "Geschäftsprozesse/Anwendungen"],
              correct: 3,
              explain: "Erst Geschäftsprozesse/Anwendungen, davon wird abgeleitet.",
            },
            {
              id: "imp_lf4-gs-3_1",
              q: "Die 3 Grundwerte?",
              options: [
                "Normal/Hoch/Sehr hoch",
                "Vertraulichkeit, Integrität, Verfügbarkeit",
                "Plan/Do/Check",
                "CPU/RAM/HDD",
              ],
              correct: 1,
              explain: "VIV bzw. CIA: Vertraulichkeit, Integrität, Verfügbarkeit.",
            },
            {
              id: "imp_lf4-gs-3_2",
              q: "Schutzbedarfskategorien BSI?",
              options: ["1/2/3", "A/B/C", "normal/hoch/sehr hoch", "gering/mittel/groß"],
              correct: 2,
              explain: "Drei Stufen: normal, hoch, sehr hoch.",
            },
            {
              id: "imp_lf4-gs-3_3",
              q: "Maximumprinzip?",
              options: [
                "IT-System erbt HÖCHSTEN Schutzbedarf der Anwendungen",
                "Die Schutzbedarfe aller Anwendungen werden aufsummiert",
                "Der Durchschnitt aller Schutzbedarfe wird gebildet",
                "Der niedrigste Schutzbedarf einer Anwendung zählt",
              ],
              correct: 0,
              explain: "Das System erbt den höchsten Bedarf aller darauf laufenden Anwendungen.",
            },
            {
              id: "imp_lf4-gs-3_4",
              q: "Kumulationseffekt?",
              options: [
                "Keine Änderung",
                "Nur bei einer App",
                "Bedarf sinkt",
                "Viele normale Anwendungen → in Summe höher",
              ],
              correct: 3,
              explain: "Gleichzeitiger Ausfall vieler Anwendungen erhöht den Gesamtschaden → hoch.",
            },
            {
              id: "imp_lf4-gs-3_5",
              q: "Verteilungseffekt?",
              options: [
                "Bedarf steigt",
                "Bedarf SINKT durch Redundanz/Verteilung",
                "Bedarf gleich",
                "Nur bei Vertraulichkeit",
              ],
              correct: 1,
              explain: "Redundante Verteilung kann den Schutzbedarf einzelner Systeme senken.",
            },
            {
              id: "imp_lf4-gs-3_6",
              q: "Schutzbedarf 'sehr hoch'?",
              options: [
                "Beträchtliche Schäden",
                "Kein Schaden",
                "Existenziell bedrohlich/katastrophal",
                "Begrenzte Schäden",
              ],
              correct: 2,
              explain: "Sehr hoch = existenziell bedrohliches, katastrophales Ausmaß.",
            },
            {
              id: "imp_lf4-gs-3_7",
              q: "Strukturanalyse erfasst u.a.?",
              options: [
                "Nur die Mitarbeiter mit ihren Rollen und Berechtigungen",
                "Nur die installierte Software mit Versionsständen",
                "Nur die Server im Rechenzentrum samt Seriennummern",
                "Geschäftsprozesse, Anwendungen, Netzplan, IT-Systeme, Räume",
              ],
              correct: 3,
              explain: "Vollständige Erfassung des Informationsverbunds.",
            },
            {
              id: "imp_lf4-gs-3_8",
              q: "RECPLAST GmbH ist?",
              options: [
                "Fiktives BSI-Musterunternehmen für IT-Grundschutz",
                "Eine BSI-Software zur Grundschutz-Modellierung",
                "Ein real existierender Kunststoffverarbeiter aus Bonn",
                "Ein Hersteller von zertifizierter Sicherheitshardware",
              ],
              correct: 0,
              explain: "Fiktives Beispielunternehmen des BSI (Fraunhofer SIT).",
            },
            {
              id: "imp_lf4-gs-3_9",
              q: "Welcher BSI-Standard zur Methodik?",
              options: ["BSI-Standard 200-2", "ISO 9001", "RFC 1918", "DIN 5008"],
              correct: 0,
              explain: "BSI-Standard 200-2 beschreibt die IT-Grundschutz-Methodik.",
            },
            {
              id: "imp_lf4-gs-3_10",
              q: "Was ist der IT-Grundschutz-Check?",
              options: [
                "Ein Penetrationstest, bei dem Angriffe auf die Systeme simuliert werden",
                "Ein BSI-Virenscanner, der die Systeme auf Schadsoftware prüft",
                "Ein Test, ob sich alle Backups vollständig wiederherstellen lassen",
                "Soll/Ist-Vergleich: Welche Grundschutz-Anforderungen sind bereits umgesetzt?",
              ],
              correct: 3,
              explain:
                "IT-Grundschutz-Check: Systematischer Abgleich zwischen Anforderungen der Bausteine und dem Ist-Zustand.",
            },
            {
              id: "imp_lf4-gs-3_11",
              q: "Was ist ein BSI-Baustein?",
              options: [
                "Ein Netzwerkprotokoll zur verschlüsselten Übertragung",
                "Ein physisches Bauteil zur Absicherung des Serverraums",
                "Ein Zertifikat des BSI für geprüfte IT-Produkte",
                "Thematische Sammlung von Sicherheitsanforderungen",
              ],
              correct: 3,
              explain:
                "Z.B. für Server, Netze, Apps. Bausteine: Thematisch gebündelt (SYS=Systeme, NET=Netze, APP=Anwendungen, OPS=Betrieb, CON=Konzepte).",
            },
            {
              id: "imp_lf4-gs-3_12",
              q: "Was ist eine Strukturanalyse?",
              options: [
                "Ein automatischer Netzwerk-Scan nach offenen Ports",
                "Erfassung aller IT-Assets, Anwendungen, Netze und Räume",
                "Ein Code-Review des Quellcodes eigener Anwendungen",
                "Eine Analyse der IT-Kosten je Abteilung und System",
              ],
              correct: 1,
              explain:
                "Strukturanalyse: Inventar aller schutzwürdigen Assets als Basis für den gesamten Sicherheitsprozess.",
            },
            {
              id: "imp_lf4-gs-3_13",
              q: "Wann ist eine ergänzende Risikoanalyse nötig?",
              options: ["Nur bei Neuinstallationen", "Immer", "Nie", "Bei erhöhtem Schutzbedarf"],
              correct: 3,
              explain:
                "Standard-Maßnahmen reichen nicht. Risikoanalyse: Wenn Standard-Bausteine für hohen/sehr hohen Schutzbedarf nicht ausreichen → individuelle Maßnahmen.",
            },
            {
              id: "imp_lf4-gs-3_14",
              q: "Was ist ISO 27001 auf Basis von IT-Grundschutz?",
              options: [
                "Ein völlig eigenständiger Standard ohne Bezug zur ISO 27001",
                "BSI-Zertifizierung, die ISO 27001 mit IT-Grundschutz-Methodik verbindet",
                "Eine Zertifizierung, die ausschließlich Bundesbehörden erhalten",
                "Ein veraltetes Verfahren, das das BSI nicht mehr anbietet",
              ],
              correct: 1,
              explain:
                "ISO 27001 auf Basis IT-Grundschutz: Anerkannte Zertifizierung, beweist systematisches ISMS.",
            },
            {
              id: "imp_lf4-gs-3_15",
              q: "Was bedeutet ISMS?",
              options: [
                "Information Security Management System",
                "IT Security Management Server",
                "Internet Safety Monitoring Service",
                "Integrated System Management Suite",
              ],
              correct: 0,
              explain:
                "ISMS: Managementsystem für Informationssicherheit – Policies, Prozesse, Verantwortlichkeiten, kontinuierliche Verbesserung.",
            },
            {
              id: "imp_lf4-gs-3_16",
              q: "Welche Schutzbedarfskategorien gibt es im IT-Grundschutz?",
              options: [
                "Grün/Gelb/Rot",
                "Normal/Hoch/Sehr hoch",
                "1/2/3/4/5",
                "Niedrig/Mittel/Hoch",
              ],
              correct: 1,
              explain:
                "Drei Stufen: Normal (begrenzte Schäden), Hoch (beträchtliche Schäden), Sehr hoch (existenzbedrohend).",
            },
            {
              id: "imp_lf4-gs-3_17",
              q: "Was passiert nach dem IT-Grundschutz-Check?",
              options: [
                "Das komplette Netzwerk wird neu aufgebaut, um alle Defizite auf einmal zu beheben",
                "Maßnahmenplan erstellen und umsetzen, dann regelmäßig wiederholen (PDCA)",
                "Der Prüfbericht wird verpflichtend an das BSI übermittelt und dort freigegeben",
                "Das Sicherheitsprojekt ist damit abgeschlossen und muss nicht wiederholt werden",
              ],
              correct: 1,
              explain:
                "Lücken schließen, Maßnahmen umsetzen, dokumentieren, regelmäßig prüfen (PDCA-Zyklus).",
            },
            {
              id: "imp_lf4-gs-3_18",
              q: "Was ist der Unterschied zwischen Basis- und Standard-Absicherung?",
              options: [
                "Basis ist teurer, da sie mehr Bausteine als Standard umfasst",
                "Die Standard-Absicherung ist ein optionales Zusatzmodul nur für KRITIS-Betreiber",
                "Kein Unterschied, beide Vorgehensweisen umfassen dieselben Anforderungen",
                "Basis = Mindestschutz schnell umsetzen, Standard = vollständiger Grundschutz",
              ],
              correct: 3,
              explain:
                "Basis-Absicherung: Schneller Einstieg, wichtigste Maßnahmen. Standard-Absicherung: Vollständige Umsetzung aller Bausteine.",
            },
            {
              id: "imp_lf4-gs-3_19",
              q: "Was ist Kern-Absicherung?",
              options: [
                "Die Konfiguration der zentralen Firewall mit restriktiven Regelwerken",
                "Die Härtung des Betriebssystem-Kernels gegen Exploits und Rootkits",
                "Priorisierte Absicherung der wichtigsten (Kronjuwelen-)Geschäftsprozesse",
                "Die automatische Aktualisierung der Antivirus-Signaturen aller Clients",
              ],
              correct: 2,
              explain:
                "Kern-Absicherung: Fokus auf die kritischsten Assets zuerst → sinnvoll wenn Ressourcen knapp.",
            },
          ],
        },
      ],
    },
    {
      id: "lf4-ds",
      title: "Datenschutz & Kryptographie",
      lessons: [
        {
          id: "lf4-ds-1",
          title: "DSGVO im Detail",
          content: [
            { type: "heading", value: "Grundprinzipien (Art. 5 DSGVO)" },
            {
              type: "text",
              value:
                "Rechtmäßigkeit (Rechtsgrundlage nötig: Vertrag, Einwilligung, berechtigtes Interesse). Zweckbindung (nur für festgelegten Zweck). Datenminimierung (nur was nötig ist). Richtigkeit (Daten müssen korrekt sein). Speicherbegrenzung (löschen, wenn nicht mehr benötigt). Integrität und Vertraulichkeit (angemessener Schutz). Rechenschaftspflicht (Verantwortlicher muss Einhaltung nachweisen).",
            },
            { type: "heading", value: "Rechte der Betroffenen" },
            {
              type: "text",
              value:
                "Art. 13/14: Informationspflicht (Was wird gespeichert, warum, wie lange?). Art. 15: Auskunftsrecht (Kopie aller Daten). Art. 16: Berichtigung (falsche Daten korrigieren). Art. 17: Recht auf Löschung ('Recht auf Vergessenwerden'). Art. 20: Datenportabilität (Daten in maschinenlesbarem Format mitnehmen). Art. 21: Widerspruchsrecht gegen Verarbeitung.",
            },
            { type: "heading", value: "Pflichten für Unternehmen" },
            {
              type: "text",
              value:
                "Verarbeitungsverzeichnis führen (Art. 30). Datenschutzbeauftragten bestellen ab 20 Personen, die STÄNDIG mit der AUTOMATISIERTEN Verarbeitung personenbezogener Daten beschäftigt sind. Auftragsverarbeitungsvertrag (AVV) bei externen Dienstleistern (Art. 28). Datenschutz-Folgenabschätzung bei hohem Risiko (Art. 35). Meldepflicht bei Datenpanne: 72 Stunden an Aufsichtsbehörde (Art. 33). Bußgelder: Bis 20 Mio. EUR oder 4% des weltweiten Jahresumsatzes.",
            },
            { type: "heading", value: "Personenbezogene Daten" },
            {
              type: "text",
              value:
                "Alle Informationen, die sich auf eine identifizierbare Person beziehen: Name, Adresse, E-Mail, IP-Adresse, Standortdaten, Cookie-IDs, Gesundheitsdaten (besondere Kategorie Art. 9). Anonymisierte Daten fallen NICHT unter die DSGVO. Pseudonymisierte Daten schon.",
            },
            {
              type: "note",
              value:
                "DSGVO ist TOP-Prüfungsthema bei AP1 und AP2. Besonders: Rechte der Betroffenen, Meldepflicht 72h, DSB ab 20 Personen, und der Unterschied anonymisiert vs. pseudonymisiert.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Betroffenenrechte" },
            { type: "text", value: "Nenne drei Rechte betroffener Personen nach DSGVO." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n- Auskunft (Art. 15): welche Daten werden verarbeitet?\n- Berichtigung (Art. 16): falsche Daten korrigieren.\n- Löschung/'Vergessenwerden' (Art. 17).\nWeitere: Einschränkung, Datenübertragbarkeit,\nWiderspruch.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Rechtsgrundlage" },
            {
              type: "text",
              value: "Eine Firma will Newsletter verschicken. Welche Rechtsgrundlage braucht sie?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nIn der Regel die EINWILLIGUNG (Art. 6 Abs. 1 a)\nder betroffenen Person (aktiv, freiwillig,\nnachweisbar - Double-Opt-In). Sie muss jederzeit\nwiderrufbar sein. Ohne gültige Rechtsgrundlage ist\ndie Verarbeitung unzulässig.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Meldepflicht" },
            {
              type: "text",
              value: "Innerhalb welcher Frist muss eine Datenpanne gemeldet werden und an wen?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nGrundsätzlich innerhalb von 72 Stunden nach\nBekanntwerden an die zuständige Aufsichtsbehörde\n(Art. 33). Bei hohem Risiko zusätzlich die\nbetroffenen Personen benachrichtigen (Art. 34).",
            },
            { type: "heading", value: "Übungsaufgabe 4: Auftragsverarbeitung" },
            { type: "text", value: "Wann braucht man einen AV-Vertrag?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nWenn ein externer Dienstleister personenbezogene Daten\nIM AUFTRAG verarbeitet (Art. 28 DSGVO), z.B.:\n- Cloud-Hosting-Anbieter\n- externes Lohnbüro\n- Newsletter-Dienstleister\nDer Auftraggeber bleibt verantwortlich; der AV-Vertrag\nregelt Pflichten, Weisungen und Sicherheit.",
            },
            { type: "heading", value: "Beispiel 1: DSGVO-Grundsätze im IT-Alltag" },
            {
              type: "text",
              value:
                "Zweckbindung: Kundendaten für Auftrag erhoben → dürfen nicht für Marketing genutzt werden (ohne Einwilligung). Datenminimierung: Nur Daten erheben, die wirklich gebraucht werden (kein Geburtsdatum für IT-Support-Ticket). Speicherbegrenzung: Nach Auftragsende + Aufbewahrungsfrist löschen. Integrität/Vertraulichkeit: TOM implementieren (Art. 32). Rechenschaftspflicht: Alles dokumentieren!",
            },
            { type: "heading", value: "Beispiel 2: Betroffenenrechte umsetzen" },
            {
              type: "text",
              value:
                "Art. 15 Auskunftsrecht: Kunde fragt 'Welche Daten haben Sie über mich?' → Innerhalb 1 Monat vollständig antworten (welche Daten, Zweck, Empfänger, Speicherdauer). Art. 17 Recht auf Löschung: 'Löschen Sie meine Daten' → Prüfen ob Aufbewahrungspflichten entgegenstehen (z.B. Rechnungen 10 Jahre). Art. 20 Datenportabilität: Daten in maschinenlesbarem Format bereitstellen (CSV, JSON).",
            },
            { type: "heading", value: "Beispiel 3: Auftragsverarbeitung (AVV)" },
            {
              type: "text",
              value:
                "IT-Dienstleister hostet Kundendaten → ist Auftragsverarbeiter (Art. 28 DSGVO). Pflicht: Auftragsverarbeitungsvertrag (AVV) mit: Gegenstand/Dauer, Art der Daten, Kategorien Betroffener, Pflichten des Verarbeiters (TOM, Weisungsgebundenheit, Unterauftragsverarbeiter nur mit Genehmigung). Ohne AVV: Bußgeld bis 10 Mio EUR oder 2% Jahresumsatz.",
            },
            { type: "heading", value: "DSGVO-Spickzettel: die Artikel, die immer gefragt werden" },
            {
              type: "text",
              value:
                "Art. 5: Grundsätze (Rechtmäßigkeit, Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung, Integrität/Vertraulichkeit, Rechenschaftspflicht). · Art. 6: Rechtsgrundlagen der Verarbeitung (Einwilligung, Vertrag, rechtliche Pflicht, lebenswichtige Interessen, öffentliche Aufgabe, berechtigtes Interesse). · Art. 15–21: Betroffenenrechte – Auskunft (15), Berichtigung (16), Löschung/„Recht auf Vergessenwerden“ (17), Einschränkung (18), Datenübertragbarkeit (20), Widerspruch (21). · Art. 32: technische und organisatorische Maßnahmen (TOM) nach Stand der Technik. · Art. 33: Meldung von Datenpannen an die Aufsichtsbehörde binnen 72 STUNDEN. · Art. 37: Datenschutzbeauftragter (Pflicht u. a. bei Kerntätigkeit umfangreicher Verarbeitung; nationale Regel: i. d. R. ab 20 Personen mit ständiger automatisierter Verarbeitung). · Art. 83: Bußgelder bis 20 Mio. € oder 4 % des weltweiten Jahresumsatzes – je nachdem, was höher ist.",
            },
            {
              type: "note",
              value:
                "Merkzahlen: 72 h Meldefrist (Art. 33) · 20 Mio./4 % Bußgeld (Art. 83) · Rechte-Kette 15 Auskunft → 16 Berichtigung → 17 Löschung → 20 Übertragbarkeit → 21 Widerspruch.",
            },
          ],
          quiz: [
            {
              id: "imp_lf4-ds-1_0",
              q: "Meldefrist Datenpanne?",
              options: ["24h", "7 Tage", "48h", "72h"],
              correct: 3,
              explain: "72 Stunden an Aufsichtsbehörde.",
            },
            {
              id: "imp_lf4-ds-1_1",
              q: "DSB Pflicht ab?",
              options: ["5 Personen", "20 Personen", "50 Personen", "10 Personen"],
              correct: 1,
              explain: "Ab 20 Personen, die regelmäßig personenbezogene Daten verarbeiten.",
            },
            {
              id: "imp_lf4-ds-1_2",
              q: "Max. DSGVO-Bußgeld?",
              options: ["20 Mio. EUR oder 4% Umsatz", "1 Mio. EUR", "10.000 EUR", "Unbegrenzt"],
              correct: 0,
              explain: "Bis 20 Mio. EUR oder 4% des weltweiten Jahresumsatzes.",
            },
            {
              id: "imp_lf4-ds-1_3",
              q: "IP-Adressen sind personenbezogene Daten?",
              options: ["Nur bei Firmen", "Ja", "Nur statische", "Nein"],
              correct: 1,
              explain: "IP-Adressen sind personenbezogene Daten (EuGH-Urteil).",
            },
            {
              id: "imp_lf4-ds-1_4",
              q: "Art. 20 DSGVO?",
              options: [
                "Berichtigung",
                "Löschung",
                "Auskunft",
                "Datenportabilität (Daten mitnehmen)",
              ],
              correct: 3,
              explain: "Recht auf Datenportabilität: Daten in maschinenlesbarem Format erhalten.",
            },
            {
              id: "imp_lf4-ds-1_5",
              q: "Pseudonymisiert vs. anonymisiert?",
              options: [
                "Anonym = DSGVO gilt, Pseudonym = DSGVO gilt nicht",
                "Für pseudonymisierte Daten gilt die DSGVO nie",
                "Pseudonym = DSGVO gilt, Anonym = DSGVO gilt nicht",
                "Beide Begriffe sind rechtlich gleichbedeutend",
              ],
              correct: 2,
              explain: "Pseudonymisiert: Person mit Zusatzwissen identifizierbar → DSGVO gilt.",
            },
            {
              id: "imp_lf4-ds-1_6",
              q: "Art. 6 DSGVO?",
              options: [
                "Rechtsgrundlagen für Verarbeitung",
                "Löschung",
                "Auskunft",
                "Meldepflicht",
              ],
              correct: 0,
              explain: "Nur mit Rechtsgrundlage.",
            },
            {
              id: "imp_lf4-ds-1_7",
              q: "AVV Art. 28?",
              options: [
                "Optional",
                "Nur intern",
                "Pflicht bei externem DL mit Datenzugriff",
                "Nur Cloud",
              ],
              correct: 2,
              explain: "Auftragsverarbeitung.",
            },
            {
              id: "imp_lf4-ds-1_8",
              q: "DSFA Art. 35?",
              options: ["Folgenabschätzung bei hohem Risiko", "Optional", "Nur Behörden", "FAQ"],
              correct: 0,
              explain: "Pflicht bei hohem Risiko.",
            },
            {
              id: "imp_lf4-ds-1_9",
              q: "Anonymisiert = DSGVO?",
              options: ["Ja", "Kommt drauf an", "Nein, nicht identifizierbar", "Teilweise"],
              correct: 2,
              explain: "Anonym = keine DSGVO.",
            },
            {
              id: "imp_lf4-ds-1_10",
              q: "Welches Gesetz regelt den Datenschutz in der EU?",
              options: ["DSGVO (Datenschutz-Grundverordnung)", "UWG", "BDSG", "TMG"],
              correct: 0,
              explain: "DSGVO: EU-weit gültig seit 25.05.2018. BDSG ergänzt national.",
            },
            {
              id: "imp_lf4-ds-1_11",
              q: "Was ist der Grundsatz der Datenminimierung?",
              options: [
                "Daten verlustfrei komprimieren, um Speicher zu sparen",
                "Nur Daten erheben, die für den Zweck erforderlich sind",
                "Alle Daten unmittelbar nach Erhebung anonymisieren",
                "Alle verfügbaren Daten sammeln und auf Vorrat speichern",
              ],
              correct: 1,
              explain:
                "Datenminimierung (Art. 5 Abs. 1 lit. c): Nur sachlich erforderliche Daten verarbeiten.",
            },
            {
              id: "imp_lf4-ds-1_12",
              q: "Wie hoch können DSGVO-Bußgelder sein?",
              options: [
                "Maximal 1.000 EUR pro festgestelltem Verstoß",
                "Bis 20 Mio. EUR oder 4% des weltweiten Jahresumsatzes",
                "Maximal 50.000 EUR unabhängig vom Jahresumsatz",
                "Keine – die DSGVO sieht nur Verwarnungen vor",
              ],
              correct: 1,
              explain:
                "Bis 20 Mio. EUR oder 4% des weltweiten Jahresumsatzes – je nachdem was höher ist (Art. 83).",
            },
            {
              id: "imp_lf4-ds-1_13",
              q: "Was ist eine Auftragsverarbeitung?",
              options: [
                "Ein Dritter verarbeitet personenbezogene Daten im Auftrag des Verantwortlichen",
                "Personenbezogene Daten werden anonymisiert, bevor sie gespeichert werden dürfen",
                "Die Übertragung personenbezogener Daten an Server außerhalb der EU",
                "Der gewerbliche Verkauf von Kundendaten an Werbetreibende",
              ],
              correct: 0,
              explain:
                "Auftragsverarbeitung (Art. 28): z.B. Cloud-Hoster, IT-Dienstleister, Lohnbüro verarbeiten Daten im Auftrag.",
            },
            {
              id: "imp_lf4-ds-1_14",
              q: "Innerhalb welcher Frist muss ein Auskunftsersuchen beantwortet werden?",
              options: [
                "Innerhalb eines Monats",
                "Sofort",
                "Keine Frist",
                "Innerhalb eines Jahres",
              ],
              correct: 0,
              explain:
                "Art. 12: Innerhalb eines Monats. Kann bei Komplexität um 2 Monate verlängert werden (mit Begründung).",
            },
            {
              id: "imp_lf4-ds-1_15",
              q: "Was sind personenbezogene Daten?",
              options: [
                "Ausschließlich digital gespeicherte Daten, Papierakten fallen nicht darunter",
                "Nur Name und Postanschrift, weitere Angaben gelten als anonym",
                "Alle Informationen, die sich auf eine identifizierbare Person beziehen",
                "Ausschließlich Gesundheitsdaten nach Artikel 9 der DSGVO",
              ],
              correct: 2,
              explain:
                "Art. 4: Name, E-Mail, IP-Adresse, Standort, Cookie-ID, biometrische Daten – alles was eine Person identifiziert.",
            },
            {
              id: "imp_lf4-ds-1_16",
              q: "Wann braucht ein Unternehmen einen Datenschutzbeauftragten?",
              options: [
                "Immer – jedes Unternehmen muss unabhängig von Größe und Tätigkeit einen benennen",
                "Nur Behörden und öffentliche Stellen; für private Unternehmen gilt keine Pflicht",
                "Ab 20 Personen, die regelmäßig personenbezogene Daten verarbeiten (DE)",
                "Nie – die Benennung eines DSB ist in Deutschland grundsätzlich freiwillig",
              ],
              correct: 2,
              explain:
                "In DE: Ab 20 Personen, die ständig mit automatisierter Verarbeitung befasst sind (§38 BDSG).",
            },
            {
              id: "imp_lf4-ds-1_17",
              q: "Was ist eine Datenschutz-Folgenabschätzung (DSFA)?",
              options: [
                "Risikoanalyse für Verarbeitungen mit hohem Risiko für Betroffene (Art. 35)",
                "Ein externes Audit, das die Aufsichtsbehörde jährlich im Unternehmen durchführt",
                "Ein Verschlüsselungsverfahren zum Schutz personenbezogener Daten (Art. 32)",
                "Ein Backup-Konzept für personenbezogene Daten mit festen Aufbewahrungsfristen",
              ],
              correct: 0,
              explain:
                "DSFA: Pflicht bei hohem Risiko (z.B. Videoüberwachung, Scoring, sensible Daten im großen Umfang).",
            },
            {
              id: "imp_lf4-ds-1_18",
              q: "Was ist das Recht auf Vergessenwerden?",
              options: [
                "Personenbezogene Daten dürfen von vornherein niemals gespeichert werden",
                "Es gilt ausschließlich für Suchmaschinen, andere Unternehmen betrifft es nicht",
                "Unternehmen müssen sämtliche Daten aller Kunden jährlich vollständig löschen",
                "Betroffene können Löschung verlangen, wenn kein Rechtsgrund mehr besteht (Art. 17)",
              ],
              correct: 3,
              explain:
                "Art. 17: Löschungsanspruch wenn Zweck entfällt, Einwilligung widerrufen, oder unrechtmäßige Verarbeitung.",
            },
            {
              id: "imp_lf4-ds-1_19",
              q: "Was sind besondere Kategorien personenbezogener Daten?",
              options: [
                "Ausschließlich Bankverbindungen, Kreditkartennummern und Kontostände von Verbrauchern",
                "Ausschließlich E-Mail-Adressen und andere elektronische Kontaktdaten wie Messenger-IDs",
                "Postanschrift, Telefonnummer und Geburtsdatum als übliche Kontakt- und Stammdaten",
                "Gesundheit, Religion, politische Meinung, Sexualität, Biometrie, Ethnie",
              ],
              correct: 3,
              explain:
                "Art. 9: Besonders schutzwürdig. Verarbeitung grundsätzlich verboten, nur mit expliziter Einwilligung oder gesetzlicher Grundlage.",
            },
          ],
        },
        {
          id: "lf4-ds-2",
          title: "Verschlüsselung & Hashing",
          content: [
            { type: "heading", value: "Symmetrische Verschlüsselung" },
            {
              type: "text",
              value:
                "EIN Schlüssel für Ver- UND Entschlüsselung. Schnell, für große Datenmengen. Problem: Schlüsselaustausch (wie bekommt der Empfänger den Schlüssel sicher?). Algorithmen: AES-128/256 (Standard, sicher), DES/3DES (veraltet). Einsatz: Festplattenverschlüsselung (BitLocker), WLAN (WPA2-AES), Datenübertragung nach Schlüsselaustausch.",
            },
            { type: "heading", value: "Asymmetrische Verschlüsselung" },
            {
              type: "text",
              value:
                "ZWEI Schlüssel: Public Key (öffentlich, zum Verschlüsseln) + Private Key (geheim, zum Entschlüsseln). Löst das Schlüsselaustausch-Problem. Langsamer als symmetrisch. Algorithmen: RSA (2048/4096 Bit), ECC (Elliptische Kurven, kürzere Schlüssel). Einsatz: Digitale Signaturen (Private Key signiert, Public Key prüft), Schlüsselaustausch, E-Mail-Verschlüsselung (PGP/S-MIME).",
            },
            { type: "heading", value: "Hybridverfahren (TLS/HTTPS)" },
            {
              type: "text",
              value:
                "Kombiniert beide Vorteile. TLS-Handshake: 1) Client sendet 'Hello' + unterstützte Algorithmen. 2) Server sendet Zertifikat (enthält Public Key). 3) Client generiert Session-Key, verschlüsselt ihn mit Public Key des Servers. 4) Beide haben jetzt den gleichen Session-Key (symmetrisch). 5) Datenübertragung mit AES (schnell). Ergebnis: Sicherer Schlüsselaustausch (asymmetrisch) + schnelle Daten (symmetrisch). (vereinfachtes Prinzip; modernes TLS 1.3 handelt den Sitzungsschlüssel ausschließlich per Diffie-Hellman (ECDHE) aus)",
            },
            { type: "heading", value: "Hashing" },
            {
              type: "text",
              value:
                "Einwegfunktion: Aus Daten wird fester Hash-Wert berechnet. NICHT umkehrbar! Gleiche Eingabe = immer gleicher Hash. Kleinste Änderung = komplett anderer Hash. Algorithmen: MD5 (128 Bit, unsicher, Kollisionen). SHA-1 (160 Bit, unsicher). SHA-256/SHA-3 (sicher, Standard). Einsatz: Passwort-Speicherung (Hash + Salt!), Integritätsprüfung (Datei-Download, Forensik), Digitale Signaturen. Salt: Zufälliger Wert, der vor dem Hashen an das Passwort gehängt wird. Verhindert Rainbow-Table-Angriffe.",
            },
            { type: "heading", value: "X.509 Zertifikate" },
            {
              type: "text",
              value:
                "X.509: Standard für digitale Zertifikate. Inhalt eines Zertifikats: Versionsnummer, Seriennummer, Signaturalgorithmus, Aussteller (CA = Certificate Authority), Gültigkeitszeitraum (von/bis), Subject (für wen: Domain, Organisation), Public Key des Inhabers, Signatur der CA. Zertifikatskette: Root CA → Intermediate CA → Server-Zertifikat. Der Browser prüft die Kette bis zur vertrauenswürdigen Root CA. Algorithmen in der Prüfung: AES-128/256 (symmetrisch, aktuell sicher), 3DES (veraltet, nur Legacy), RSA-2048/4096 (asymmetrisch), SHA-256/SHA-512 (Hash, sicher), MD5 (Hash, UNSICHER, nur noch für Checksummen).",
            },
            { type: "heading", value: "Anonymisierung vs. Pseudonymisierung" },
            {
              type: "text",
              value:
                "Pseudonymisierung: Personenbezug durch Ersatzmerkmal (Kundennr. statt Name). MIT Zusatzwissen kann Person identifiziert werden → DSGVO gilt weiterhin! Anonymisierung: Personenbezug KOMPLETT und UNWIDERRUFLICH entfernt. Kein Rückschluss mehr möglich → DSGVO gilt NICHT mehr. Wichtig: Pseudonymisierung ist eine Schutzmaßnahme, aber KEIN Ersatz für andere DSGVO-Pflichten.",
            },
            { type: "heading", value: "Übungsaufgabe: Hybride Verschlüsselung (TLS)" },
            {
              type: "text",
              value:
                "Erkläre Schritt für Schritt, wie hybride Verschlüsselung beim TLS-Verbindungsaufbau funktioniert, und warum man nicht einfach alles asymmetrisch verschlüsselt.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. Client und Server handeln Verfahren aus (Handshake)\n2. Server sendet sein Zertifikat (enthält Public Key)\n3. Client prüft Zertifikat gegen vertraute CA\n4. Es wird ein gemeinsamer SYMMETRISCHER Sitzungs-\n   schlüssel ausgehandelt (z.B. via Diffie-Hellman),\n   asymmetrisch geschützt\n5. Ab jetzt: gesamte Kommunikation SYMMETRISCH (AES)\n\nWarum hybrid? Asymmetrisch (RSA) ist sehr langsam\nund rechenintensiv. Symmetrisch (AES) ist schnell.\nMan nutzt asymmetrisch NUR für den sicheren Schlüssel-\naustausch, dann schnell symmetrisch für die Daten.\n→ Sicherheit des Schlüsselaustauschs + Tempo von AES.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Symmetrisch/asymmetrisch" },
            {
              type: "text",
              value:
                "Unterschied symmetrische und asymmetrische Verschlüsselung? Je ein Verfahren.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nSymmetrisch: ein gemeinsamer Schlüssel für Ver- und\nEntschlüsselung, schnell. Verfahren: AES.\nProblem: sicherer Schlüsselaustausch.\nAsymmetrisch: Schlüsselpaar (öffentlich/privat),\nlangsam. Verfahren: RSA. Löst den Schlüsselaustausch,\nwird oft nur dafür genutzt (hybrid).",
            },
            { type: "heading", value: "Übungsaufgabe 3: Hash" },
            {
              type: "text",
              value: "Was ist ein Hash und wofür nutzt man ihn? Warum nicht zur Verschlüsselung?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nEin Hash (z.B. SHA-256) bildet Daten auf einen festen\nPrüfwert ab - EINWEG, nicht umkehrbar. Nutzen:\nIntegritätsprüfung und Passwortspeicherung (mit\nSalt). Keine Verschlüsselung, weil man Hashes nicht\nzurückrechnen kann (das ist gerade gewollt).",
            },
            {
              type: "heading",
              value: "Beispiel 1: Symmetrische vs. asymmetrische Verschlüsselung",
            },
            {
              type: "text",
              value:
                "Symmetrisch (AES): Ein Schlüssel für Ver- und Entschlüsselung. Schnell, für große Datenmengen (Festplatte, VPN-Tunnel). Problem: Schlüsselaustausch – wie bekommt der Empfänger den Schlüssel sicher? Asymmetrisch (RSA, ECC): Zwei Schlüssel – öffentlich (verschlüsseln) + privat (entschlüsseln). Langsamer, aber löst das Austauschproblem. Praxis: TLS nutzt asymmetrisch für Schlüsselaustausch, dann symmetrisch für Daten.",
            },
            { type: "heading", value: "Beispiel 2: E-Mail-Verschlüsselung (AP1-Klassiker)" },
            {
              type: "text",
              value:
                "Anwalt A schickt vertrauliche Mail an Mandant M. A verschlüsselt mit M's öffentlichem Schlüssel. Nur M kann mit seinem privaten Schlüssel entschlüsseln. Digitale Signatur: A signiert mit eigenem privaten Schlüssel → M prüft mit A's öffentlichem Schlüssel. So ist sichergestellt: Vertraulichkeit (nur M liest) + Authentizität (wirklich von A) + Integrität (nicht verändert).",
            },
            { type: "heading", value: "Beispiel 3: Hashing zur Integritätsprüfung" },
            {
              type: "text",
              value:
                "SHA-256-Hash einer Datei: Feste 256-Bit-Ausgabe, egal wie groß die Datei. Ändert sich ein Bit in der Datei, ändert sich der komplette Hash. Anwendung: Software-Download → Anbieter veröffentlicht Hash → Nach Download eigenen Hash berechnen → Vergleich. Stimmen sie überein: Datei unverfälscht (Integrität). Hash ist Einwegfunktion: Aus Hash kann man die Originaldaten NICHT rekonstruieren.",
            },
          ],
          quiz: [
            {
              id: "imp_lf4-ds-2_0",
              q: "TLS nutzt für Daten?",
              options: [
                "Nur asymmetrisch",
                "Hashing",
                "Nur symmetrisch",
                "Hybrid (asym. Austausch + sym. Daten)",
              ],
              correct: 3,
              explain: "Hybrid: Asymmetrischer Schlüsselaustausch, dann symmetrische Daten (AES).",
            },
            {
              id: "imp_lf4-ds-2_1",
              q: "AES ist?",
              options: ["Signatur", "Hashing", "Asymmetrisch", "Symmetrisch"],
              correct: 3,
              explain: "AES = symmetrischer Verschlüsselungsalgorithmus.",
            },
            {
              id: "imp_lf4-ds-2_2",
              q: "RSA ist?",
              options: ["Symmetrisch", "Hashing", "Asymmetrisch", "Kompression"],
              correct: 2,
              explain: "RSA = asymmetrisch (Public + Private Key).",
            },
            {
              id: "imp_lf4-ds-2_3",
              q: "Hashing ist?",
              options: ["Kompression", "Umkehrbar", "Einweg (nicht umkehrbar)", "Verschlüsselung"],
              correct: 2,
              explain: "Hashing ist eine Einwegfunktion, nicht umkehrbar.",
            },
            {
              id: "imp_lf4-ds-2_4",
              q: "Salt beim Passwort-Hashing?",
              options: [
                "Komprimiert den Hash",
                "Macht Hash schneller",
                "Verhindert Rainbow-Table-Angriffe",
                "Verschlüsselt das Passwort",
              ],
              correct: 2,
              explain: "Salt = zufälliger Wert vor dem Hashen, verhindert vorberechnete Angriffe.",
            },
            {
              id: "imp_lf4-ds-2_5",
              q: "SHA-256 Output?",
              options: ["160 Bit", "128 Bit", "256 Bit", "512 Bit"],
              correct: 2,
              explain: "SHA-256 = 256 Bit Hash-Wert.",
            },
            {
              id: "imp_lf4-ds-2_6",
              q: "Digitale Signatur nutzt?",
              options: [
                "Private Key zum Signieren, Public Key zum Prüfen",
                "Ausschließlich einen Hashwert ohne jegliche Schlüssel",
                "Einen symmetrischen Schlüssel, den beide Seiten teilen",
                "Gar keine Schlüssel, nur einen Zeitstempel des Servers",
              ],
              correct: 0,
              explain: "Sender signiert mit Private Key, Empfänger prüft mit Public Key.",
            },
            {
              id: "imp_lf4-ds-2_7",
              q: "AES Schlüssellängen?",
              options: ["Beliebig", "128/192/256 Bit", "64/96", "512/1024"],
              correct: 1,
              explain: "AES: 128, 192 oder 256 Bit.",
            },
            {
              id: "imp_lf4-ds-2_8",
              q: "Rainbow Table?",
              options: [
                "Farbpalette zur Kennzeichnung von Netzwerkkabeln",
                "Vorberechnete Hash-Tabelle zum Knacken von Passwörtern",
                "Backup-Tabelle mit versionierten Datenbankständen",
                "Netzwerk-Tool zum Scannen offener Ports",
              ],
              correct: 1,
              explain: "Vorberechnete Hashes: Passwort-Cracking ohne Brute Force.",
            },
            {
              id: "imp_lf4-ds-2_9",
              q: "PFS (Perfect Forward Secrecy)?",
              options: [
                "Alte Verschlüsselung",
                "Backup-Schlüssel",
                "Jede Session hat eigenen Schlüssel",
                "Doppelte Verschlüsselung",
              ],
              correct: 2,
              explain:
                "Kompromittierter Key betrifft nur 1 Session. PFS: Session-Keys werden nicht wiederverwendet.",
            },
            {
              id: "imp_lf4-ds-2_10",
              q: "Was ist der Hauptunterschied zwischen symmetrischer und asymmetrischer Verschlüsselung?",
              options: [
                "Symmetrisch: 1 Schlüssel, Asymmetrisch: 2 Schlüssel (öffentlich+privat)",
                "Nur die Geschwindigkeit; beide nutzen denselben Schlüsselmechanismus",
                "Nur die Sicherheit: Asymmetrisch gilt als unknackbar, symmetrisch nicht",
                "Es gibt keinen Unterschied, die beiden Begriffe sind austauschbar",
              ],
              correct: 0,
              explain:
                "Symmetrisch: Gleicher Schlüssel beidseitig. Asymmetrisch: Schlüsselpaar (Public/Private).",
            },
            {
              id: "imp_lf4-ds-2_11",
              q: "Womit verschlüsselt man eine E-Mail an den Empfänger?",
              options: [
                "Passwort des Empfängers",
                "Eigener privater Schlüssel",
                "Eigener öffentlicher Schlüssel",
                "Öffentlicher Schlüssel des Empfängers",
              ],
              correct: 3,
              explain:
                "Verschlüsseln: Mit Public Key des Empfängers. Nur sein Private Key kann entschlüsseln.",
            },
            {
              id: "imp_lf4-ds-2_12",
              q: "Was ist ein Hash?",
              options: [
                "Ein besonders langes Passwort, das aus Zufallszeichen generiert wird",
                "Eine Verschlüsselung, die sich mit dem passenden Schlüssel wieder entschlüsseln lässt",
                "Einweg-Funktion, die Daten auf einen festen Fingerabdruck reduziert (nicht umkehrbar)",
                "Ein digitales Zertifikat, das eine CA zur Bestätigung einer Identität ausstellt",
              ],
              correct: 2,
              explain:
                "Hash: Feste Ausgabelänge, Einwegfunktion, kollisionsresistent. Nicht zur Verschlüsselung, sondern zur Integritätsprüfung.",
            },
            {
              id: "imp_lf4-ds-2_13",
              q: "Welcher Algorithmus ist KEIN Hash?",
              options: ["SHA-256", "AES", "MD5", "SHA-3"],
              correct: 1,
              explain:
                "AES = symmetrische Verschlüsselung. SHA-256, MD5, SHA-3 sind Hash-Algorithmen.",
            },
            {
              id: "imp_lf4-ds-2_14",
              q: "Wofür nutzt man digitale Signaturen?",
              options: [
                "Authentizität und Integrität prüfen",
                "Dokumente verschlüsseln",
                "Passwörter speichern",
                "Daten komprimieren",
              ],
              correct: 0,
              explain:
                "Wirklich vom Absender, nicht verändert. Digitale Signatur: Absender signiert mit Private Key → Empfänger prüft mit Public Key.",
            },
            {
              id: "imp_lf4-ds-2_15",
              q: "Was ist TLS?",
              options: [
                "Ein Hash-Algorithmus",
                "Ein Passwort-Manager",
                "Transport Layer Security",
                "Ein VPN",
              ],
              correct: 2,
              explain:
                "Verschlüsselt Kommunikation (z.B. HTTPS). TLS: Nachfolger von SSL, verschlüsselt HTTP→HTTPS, SMTP→SMTPS etc. Nutzt Zertifikate und Hybrid-Verschlüsselung.",
            },
            {
              id: "imp_lf4-ds-2_16",
              q: "Warum wird MD5 als unsicher eingestuft?",
              options: ["Zu lange Ausgabe", "Zu langsam", "Kollisionsangriffe möglich", "Zu neu"],
              correct: 2,
              explain:
                "Zwei verschiedene Dateien können gleichen Hash haben. MD5: Kollisionen praktisch berechenbar. Nicht für Sicherheitsanwendungen nutzen. SHA-256+ verwenden.",
            },
            {
              id: "imp_lf4-ds-2_17",
              q: "Was speichert ein Zertifikat?",
              options: [
                "Ausschließlich den SHA-256-Hashwert des Dokuments, das damit signiert wurde",
                "Das Benutzerpasswort in verschlüsselter Form, damit der Server es prüfen kann",
                "Die IP- und MAC-Adresse des Servers, damit Clients ihn im Netz eindeutig finden",
                "Öffentlichen Schlüssel + Identität + Signatur der Zertifizierungsstelle (CA)",
              ],
              correct: 3,
              explain:
                "X.509-Zertifikat: Public Key des Inhabers + Identitätsdaten + digitale Signatur der CA + Gültigkeitsdauer.",
            },
            {
              id: "imp_lf4-ds-2_18",
              q: "Was ist Salting bei Passwörtern?",
              options: [
                "Das Kürzen langer Passwörter auf eine einheitliche Länge vor dem Speichern",
                "Zufälliger Wert, der vor dem Hashen an das Passwort angehängt wird",
                "Die symmetrische Verschlüsselung des Passworts mit einem Firmenschlüssel",
                "Das Anreichern des Passworts mit Sonderzeichen durch den Benutzer selbst",
              ],
              correct: 1,
              explain:
                "Salt: Zufälliger Wert + Passwort → Hash. Verhindert Rainbow-Table-Angriffe (gleiche Passwörter → verschiedene Hashes).",
            },
            {
              id: "imp_lf4-ds-2_19",
              q: "Was ist Perfect Forward Secrecy (PFS)?",
              options: [
                "Eine mathematisch beweisbar unknackbare Verschlüsselung ohne Schwachstellen",
                "Ein VPN-Standard, der IPsec und OpenVPN als Nachfolger ablösen soll",
                "Ein spezieller X.509-Zertifikatstyp mit verlängerter Gültigkeitsdauer",
                "Kompromittierung eines Langzeitschlüssels gefährdet vergangene Sessions nicht",
              ],
              correct: 3,
              explain:
                "PFS: Jede Session hat eigenen kurzlebigen Schlüssel. Selbst wenn Private Key später gestohlen wird, sind alte Sessions sicher.",
            },
          ],
        },
        {
          id: "lf4-oa-1",
          title: "OAuth2, OIDC & Token-basierte Auth",
          content: [
            { type: "heading", value: "OAuth2: Autorisierung ohne Passwort" },
            {
              type: "text",
              value:
                "OAuth2 ermöglicht einer Anwendung (Client) begrenzten Zugriff auf Ressourcen eines Benutzers, OHNE dass der Benutzer sein Passwort an die Anwendung gibt. Beispiel: Du klickst Login mit Google bei einer Website. Google fragt dich, ob die Website dein Profil sehen darf. Du stimmst zu. Die Website bekommt einen Access Token, NICHT dein Google-Passwort.",
            },
            { type: "heading", value: "OAuth2 Rollen und Flows" },
            {
              type: "text",
              value:
                "Resource Owner: Der Benutzer (du). Client: Die Anwendung, die Zugriff will. Authorization Server: Stellt Tokens aus (z.B. Google, Azure AD). Resource Server: Hat die geschützten Daten (z.B. Google API). Authorization Code Flow (sicherster): User → Login-Seite → Authorization Code → Server tauscht Code gegen Token. Implicit Flow (veraltet): Token direkt an Browser (unsicher). Client Credentials: Maschine-zu-Maschine (kein User beteiligt, z.B. Cronjob).",
            },
            { type: "heading", value: "Tokens" },
            {
              type: "text",
              value:
                "Access Token: Kurzlebig (Minuten bis Stunden), wird bei jeder API-Anfrage mitgeschickt (Header: Authorization: Bearer xyz). Refresh Token: Langlebig, holt neuen Access Token, wenn alter abläuft. Wird sicher auf dem Server gespeichert. ID Token (nur OIDC): Enthält Benutzer-Identität (Name, E-Mail, sub=User-ID). JWT (JSON Web Token): Häufiges Token-Format. Drei Teile: Header.Payload.Signature. Base64-codiert, signiert (nicht verschlüsselt!). Claims im Payload: sub, exp, iss, aud.",
            },
            { type: "heading", value: "OIDC: OpenID Connect" },
            {
              type: "text",
              value:
                "OIDC = OAuth2 + Identitäts-Layer. OAuth2 allein sagt nur WAS die App darf (Autorisierung). OIDC sagt zusätzlich WER der Benutzer ist (Authentifizierung). OIDC liefert einen ID Token mit Benutzer-Infos. Typische Provider: Google, Microsoft/Azure AD, Keycloak (Self-hosted), Auth0, Okta.",
            },
            {
              type: "note",
              value:
                "OAuth2/OIDC ist der Standard für moderne Authentifizierung. Als FiSi begegnest du dem bei SSO-Anbindungen, Cloud-Diensten und API-Absicherung. Authorization Code Flow + PKCE ist der aktuelle Best Practice.",
            },
            { type: "heading", value: "Übungsaufgabe 1: OAuth-Zweck" },
            { type: "text", value: "Was löst OAuth2 - wofür ist es da?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nOAuth2 ermöglicht AUTORISIERUNG: Eine App erhält\nbegrenzten Zugriff auf Ressourcen eines Nutzers bei\neinem anderen Dienst, OHNE dessen Passwort zu kennen.\nBeispiel: 'Mit Google anmelden' / App darf Kalender\nlesen. Es werden Tokens statt Passwörter weitergegeben.",
            },
            { type: "heading", value: "Übungsaufgabe 2: OIDC" },
            { type: "text", value: "Worin unterscheidet sich OpenID Connect (OIDC) von OAuth2?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nOAuth2 regelt AUTORISIERUNG (Zugriff auf Ressourcen).\nOIDC setzt darauf auf und ergänzt AUTHENTIFIZIERUNG\n(Wer ist der Nutzer?) über ein ID-Token (JWT) mit\nIdentitätsinformationen. OIDC = Login, OAuth2 =\nZugriffsrechte.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Token" },
            {
              type: "text",
              value:
                "Was ist ein Vorteil von Token-basierter Authentifizierung gegenüber Sessions?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nTokens (z.B. JWT) sind zustandslos: der Server muss\nkeine Session speichern, die Info steckt signiert im\nToken. Das skaliert gut über mehrere Server/APIs\n(kein gemeinsamer Session-Speicher nötig) und eignet\nsich für verteilte Systeme und mobile Apps.",
            },
            { type: "heading", value: "Übungsaufgabe 4: OAuth2-Rollen" },
            { type: "text", value: "Nenne die 4 Rollen im OAuth2-Flow." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. Resource Owner: der Nutzer (besitzt die Daten)\n2. Client: die Anwendung (will auf Daten zugreifen)\n3. Authorization Server: stellt Tokens aus\n4. Resource Server: hat die geschützten Daten\nBeispiel: Du (Owner) erlaubst einer App (Client)\nZugriff auf dein Google-Konto (Resource Server)\nüber Google OAuth (Auth Server).",
            },
            { type: "heading", value: "Übungsaufgabe 5: Token" },
            {
              type: "text",
              value: "Was ist der Unterschied zwischen Access Token und Refresh Token?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nAccess Token: kurzlebig (Minuten/Stunden), wird bei\njeder API-Anfrage mitgeschickt. Berechtigt zum Zugriff.\nRefresh Token: langlebig, wird NUR genutzt, um ein\nneues Access Token zu holen, wenn das alte abläuft.\nWird nicht bei normalen Anfragen mitgeschickt\n(sicherer).",
            },
            { type: "heading", value: "Beispiel 1: OAuth2 Ablauf einfach erklärt" },
            {
              type: "text",
              value:
                "Du klickst 'Mit Google anmelden' bei einer App: 1. App leitet zu Google weiter (Authorization Server). 2. Du meldest dich bei Google an und erlaubst Zugriff. 3. Google gibt Authorization Code an die App. 4. App tauscht Code gegen Access Token beim Google-Server. 5. App nutzt Access Token, um deine Google-Profildaten abzurufen. Dein Google-Passwort kennt die App NIE!",
            },
            { type: "heading", value: "Beispiel 2: JWT-Token Aufbau" },
            {
              type: "text",
              value:
                "JSON Web Token besteht aus 3 Teilen (Base64, getrennt durch Punkte): Header: {'alg':'HS256','typ':'JWT'}. Payload: {'sub':'user123','name':'Max','iat':1699000000,'exp':1699003600}. Signature: HMAC-SHA256(Header+Payload, Secret). Der Server prüft die Signatur → wurde der Token manipuliert? Payload ist NICHT verschlüsselt, nur signiert! Keine sensiblen Daten im Payload speichern.",
            },
            { type: "heading", value: "Beispiel 3: OIDC vs. OAuth2" },
            {
              type: "text",
              value:
                "OAuth2: Autorisierung – 'Darf die App auf meine Google-Fotos zugreifen?'. Kein Standard für Identität/Login. OpenID Connect (OIDC): Authentifizierung auf Basis von OAuth2 – 'Wer bin ich?'. Fügt ID-Token (JWT) hinzu mit User-Informationen. OIDC = OAuth2 + Identitätsschicht. Für Login/SSO immer OIDC, nicht reines OAuth2.",
            },
          ],
          quiz: [
            {
              id: "imp_lf4-oa-1_0",
              q: "OAuth2 Zweck?",
              options: [
                "Hashing: Passwörter werden vor der Übertragung gehasht",
                "Authentifizierung: prüft die Identität des Nutzers per Login",
                "Autorisierung: Drittanbieter-Zugriff OHNE Passwort-Weitergabe",
                "Verschlüsselung des Datenverkehrs zwischen Client und API",
              ],
              correct: 2,
              explain: "Zugriff gewähren ohne Passwort zu teilen.",
            },
            {
              id: "imp_lf4-oa-1_1",
              q: "Access Token?",
              options: [
                "Das dauerhaft gültige Nutzerpasswort im Klartext",
                "Ein Session-Cookie im Browser des Nutzers",
                "Ein X.509-Zertifikat mit öffentlichem Schlüssel",
                "Zeitlich begrenzter Schlüssel für API-Zugriff",
              ],
              correct: 3,
              explain: "Token statt Passwort für jede Anfrage.",
            },
            {
              id: "imp_lf4-oa-1_2",
              q: "Refresh Token?",
              options: [
                "Meldet den Benutzer von allen aktiven Sitzungen ab",
                "Erzwingt beim nächsten Login ein neues Passwort",
                "Verschlüsselt die Datenübertragung zwischen App und Server",
                "Holt neuen Access Token wenn alter abgelaufen",
              ],
              correct: 3,
              explain: "Verlängert Zugriff ohne erneutes Login.",
            },
            {
              id: "imp_lf4-oa-1_3",
              q: "OIDC baut auf?",
              options: ["Kerberos", "SAML", "OAuth2 (fügt Identitäts-Layer hinzu)", "LDAP"],
              correct: 2,
              explain: "OpenID Connect = OAuth2 + Identität (wer ist der User?).",
            },
            {
              id: "imp_lf4-oa-1_4",
              q: "Authorization Code Flow?",
              options: [
                "Unsicherster Flow: Token wird direkt in der URL übertragen",
                "Sicherster: User→Login→Code→Token (Server-to-Server)",
                "Nur für native Mobile-Apps ohne Server nutzbar",
                "Veraltet und in OAuth 2.1 nicht mehr enthalten",
              ],
              correct: 1,
              explain: "Code wird am Server gegen Token getauscht (nie im Browser sichtbar).",
            },
            {
              id: "imp_lf4-oa-1_5",
              q: "JWT = ?",
              options: [
                "Java Web Tool",
                "JSON Web Token",
                "JavaScript Widget",
                "Java Web Transfer",
              ],
              correct: 1,
              explain: "Signierter Token mit Claims. Selbst-beschreibender, signierter Token.",
            },
            {
              id: "imp_lf4-oa-1_6",
              q: "Scope bei OAuth2?",
              options: [
                "Gewährt der App grundsätzlich vollen Zugriff auf alle Kontodaten",
                "Legt die Mindestlänge und Komplexität des Nutzerpassworts fest",
                "Definiert, welche Rechte die App bekommt (z.B. read:email)",
                "Bestimmt den Verschlüsselungsalgorithmus für die Token-Übertragung",
              ],
              correct: 2,
              explain: "Scope begrenzt den Zugriff (Least Privilege).",
            },
            {
              id: "imp_lf4-oa-1_7",
              q: "ID Token (OIDC) enthält?",
              options: [
                "API-Schlüssel",
                "Benutzer-Identität (Name, E-Mail, sub)",
                "Refresh Token",
                "Passwort",
              ],
              correct: 1,
              explain: "Wer ist der eingeloggte Benutzer?",
            },
            {
              id: "imp_lf4-oa-1_8",
              q: "Client Secret?",
              options: [
                "Der Access Token, den der Benutzer nach dem Login erhält",
                "Öffentlicher Wert, der bedenkenlos im Frontend stehen darf",
                "Das Passwort des Benutzers, das die App zwischenspeichert",
                "Geheimnis, das nur der Server kennt (nie im Frontend!)",
              ],
              correct: 3,
              explain: "Wie ein Passwort für die Anwendung selbst.",
            },
            {
              id: "imp_lf4-oa-1_9",
              q: "OAuth2 Beispiel Alltag?",
              options: [
                "E-Mail-Versand über SMTP mit Benutzername und Passwort",
                "VPN-Einwahl ins Firmennetz mit IPsec und Preshared Key",
                "Login mit Google/GitHub bei Drittanbieter-Website",
                "FTP-Dateiübertragung mit anonymem Benutzer-Login",
              ],
              correct: 2,
              explain: "Social Login: Google-Account bei anderer Website nutzen.",
            },
            {
              id: "imp_lf4-oa-1_10",
              q: "Was ist der Hauptunterschied zwischen Authentifizierung und Autorisierung?",
              options: [
                "Authentifizierung = Wer bist du? Autorisierung = Was darfst du?",
                "Authentifizierung ist das technisch sicherere der beiden Verfahren",
                "Autorisierung findet stets vor der Authentifizierung statt",
                "Es gibt keinen Unterschied, beide Begriffe sind synonym",
              ],
              correct: 0,
              explain:
                "Authentifizierung: Identität prüfen. Autorisierung: Berechtigungen prüfen. Erst AuthN, dann AuthZ.",
            },
            {
              id: "imp_lf4-oa-1_11",
              q: "Was ist ein Access Token bei OAuth2?",
              options: [
                "Zeitlich begrenzter Schlüssel, der Zugriff auf eine Ressource erlaubt",
                "Eine Session-ID, die der Server unbegrenzt lange im Cookie speichert",
                "Das Passwort des Benutzers, das an den Drittanbieter weitergegeben wird",
                "Ein X.509-Zertifikat, das eine CA für den Benutzer dauerhaft ausstellt",
              ],
              correct: 0,
              explain:
                "Access Token: Kurzlebig (Min-Stunden), berechtigt zum API-Zugriff. Kein Passwort nötig.",
            },
            {
              id: "imp_lf4-oa-1_12",
              q: "Was ist ein Refresh Token?",
              options: [
                "Ein Token, das automatische App-Updates aus dem Store anstößt",
                "Ein zweites Passwort, das der Nutzer bei jedem Login zusätzlich eingibt",
                "Langlebiger Token, um neue Access Tokens zu erhalten ohne erneuten Login",
                "Ein Ersatz-Token, das als Sicherungskopie des Access Tokens dient",
              ],
              correct: 2,
              explain:
                "Refresh Token: Längere Lebensdauer. Wenn Access Token abläuft → Refresh Token holt neuen Access Token.",
            },
            {
              id: "imp_lf4-oa-1_13",
              q: "Was ist SSO (Single Sign-On)?",
              options: [
                "Jedes System eigenes Passwort",
                "Einmal anmelden, auf viele Systeme zugreifen",
                "Ein besonders sicheres Passwort",
                "Ein VPN",
              ],
              correct: 1,
              explain:
                "SSO: Ein Login für viele Anwendungen (z.B. Microsoft 365, Intranet, CRM – alles mit Azure AD Login).",
            },
            {
              id: "imp_lf4-oa-1_14",
              q: "Was ist ein JWT?",
              options: [
                "Joint Work Token",
                "JSON Web Token",
                "Java Web Tool",
                "JavaScript Widget Template",
              ],
              correct: 1,
              explain:
                "Kompakter, signierter Token für Authentifizierung/Autorisierung. JWT: Header.Payload.Signature (Base64-kodiert, durch Punkte getrennt).",
            },
            {
              id: "imp_lf4-oa-1_15",
              q: "Was ist der Authorization Code Flow?",
              options: [
                "Der Austausch statischer API-Keys zwischen zwei Servern",
                "Die direkte Passwort-Eingabe des Users in der App",
                "Sicherster OAuth2-Flow: User→AuthServer→Code→App→Token",
                "Der direkte Token-Austausch ohne Autorisierungsserver",
              ],
              correct: 2,
              explain:
                "Code wird serverseitig getauscht. Authorization Code Flow: Sicherste Variante, Token-Austausch serverseitig, Code nur kurzlebig.",
            },
            {
              id: "imp_lf4-oa-1_16",
              q: "Was ist SAML?",
              options: [
                "Security Assertion Markup Language",
                "Ein Passwort-Manager",
                "Ein VPN-Protokoll",
                "Ein Verschlüsselungsstandard",
              ],
              correct: 0,
              explain:
                "XML-basiertes SSO-Protokoll (v.a. Enterprise). SAML: Älteres SSO-Protokoll (XML-basiert), noch weit verbreitet in Enterprise-Umgebungen.",
            },
            {
              id: "imp_lf4-oa-1_17",
              q: "Warum ist der Implicit Flow bei OAuth2 unsicher?",
              options: [
                "Der Ablauf ist zu langsam, wodurch Tokens vor der Nutzung ablaufen",
                "Kein Refresh Token möglich",
                "Token wird direkt im Browser (URL-Fragment) exponiert → leicht abgreifbar",
                "Er überträgt Tokens grundsätzlich unverschlüsselt ohne TLS",
              ],
              correct: 2,
              explain:
                "Implicit Flow: Token im URL-Fragment → Browser-History, Logs, Referrer können Token leaken. Obsolet.",
            },
            {
              id: "imp_lf4-oa-1_18",
              q: "Was ist ein ID Token bei OIDC?",
              options: [
                "Ein Access Token",
                "JWT mit Benutzerinformationen",
                "Ein Personalausweis-Scan",
                "Ein Cookie",
              ],
              correct: 1,
              explain:
                "Sub, Name, Email, Issuer, Audience. ID Token: JWT, der die Identität des Users beschreibt. Nur bei OIDC, nicht bei reinem OAuth2.",
            },
            {
              id: "imp_lf4-oa-1_19",
              q: "Was ist ein Scope bei OAuth2?",
              options: [
                "Ein logisch getrenntes Netzwerksegment im Firmen-LAN",
                "Ein Teleskop",
                "Definiert, welche Berechtigungen die App anfordert",
                "Ein Speicherbereich, der zusätzlich verschlüsselt wird",
              ],
              correct: 2,
              explain:
                "Z.B. 'read:email', 'write:calendar'. Scope: Granulare Berechtigung. User sieht: 'App möchte auf Ihre E-Mails zugreifen' und kann zustimmen/ablehnen.",
            },
          ],
        },
        {
          id: "lf4-ds-3",
          title: "Malware, Angriffe & Incident Response",
          content: [
            { type: "heading", value: "Malware-Typen" },
            {
              type: "text",
              value:
                "Virus (an Dateien, braucht Aktion), Wurm (selbstständig im Netz), Trojaner (tarnt sich), Ransomware (verschlüsselt → Lösegeld), Spyware (spioniert), Rootkit (versteckt sich tief), Keylogger (zeichnet Tasten auf), Adware (unerwünschte Werbung), Botnet (ferngesteuerte Zombie-PCs).",
            },
            { type: "heading", value: "Angriffsmethoden" },
            {
              type: "text",
              value:
                "Phishing/Spear-Phishing/Whaling, Social Engineering (Pretexting, Baiting, Tailgating), DoS/DDoS, Man-in-the-Middle, SQL Injection, XSS, Brute Force / Dictionary Attack, Zero-Day-Exploit, DNS Spoofing, ARP Spoofing.",
            },
            { type: "heading", value: "Incident Response (Vorfallbehandlung)" },
            {
              type: "text",
              value:
                "1. Vorbereitung: Notfallpläne, Team, Tools. 2. Erkennung: Monitoring, IDS/SIEM-Alarme. 3. Eindämmung: Betroffene Systeme isolieren. 4. Beseitigung: Malware entfernen, Schwachstelle schließen. 5. Wiederherstellung: Systeme aus Backup wiederherstellen. 6. Nachbereitung: Lessons Learned, Dokumentation.",
            },
            {
              type: "note",
              value:
                "Incident Response ist prüfungsrelevant und praxisnah – als FiSi wirst du damit konfrontiert.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Malware-Arten" },
            { type: "text", value: "Unterscheide Virus, Wurm und Trojaner." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nVirus: hängt sich an eine Wirtsdatei, verbreitet sich\nbeim Ausführen durch den Nutzer.\nWurm: verbreitet sich SELBSTSTÄNDIG über Netze,\nohne Wirtsdatei.\nTrojaner: tarnt sich als nützliches Programm,\nschleust im Hintergrund Schadfunktionen ein (z.B.\nBackdoor).",
            },
            { type: "heading", value: "Übungsaufgabe 2: Ransomware" },
            { type: "text", value: "Was ist Ransomware und wie schützt man sich am wirksamsten?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nRansomware verschlüsselt Daten und fordert Lösegeld.\nWirksamster Schutz: regelmäßige, OFFLINE/offsite\ngehaltene Backups (3-2-1), damit man ohne Zahlung\nwiederherstellen kann. Dazu: Updates, Awareness\n(keine dubiosen Anhänge), Rechtebeschränkung.",
            },
            { type: "heading", value: "Übungsaufgabe 3: Incident Response" },
            {
              type: "text",
              value: "Nenne die grobe Reihenfolge der Schritte bei einem Sicherheitsvorfall.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. Erkennen/Identifizieren des Vorfalls\n2. Eindämmen (Containment - betroffene Systeme isolieren)\n3. Beseitigen der Ursache (Eradication)\n4. Wiederherstellen (Recovery)\n5. Nachbereitung/Lessons Learned (auswerten, verbessern)\nWichtig: dokumentieren und Beweise sichern.",
            },
            { type: "heading", value: "Übungsaufgabe 4: Phishing" },
            {
              type: "text",
              value: "Was ist Spear-Phishing und wie unterscheidet es sich von normalem Phishing?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nPhishing: Massen-Mails an viele, generisch.\nSpear-Phishing: GEZIELT auf eine Person/Firma,\npersonalisiert (Name, Position, Kontext), daher\ndeutlich überzeugender und gefährlicher.\nSchutz: Awareness-Schulung, E-Mail-Filter, bei\nunerwarteten Anfragen Rückruf beim Absender.",
            },
            { type: "heading", value: "Beispiel 1: Malware-Typen Überblick" },
            {
              type: "text",
              value:
                "Virus: Hängt sich an Dateien/Programme, braucht Wirtsdatei, verbreitet sich bei Ausführung. Wurm: Verbreitet sich selbstständig über Netzwerke (kein Wirt nötig), z.B. WannaCry. Trojaner: Tarnt sich als nützliche Software, öffnet Hintertür. Ransomware: Verschlüsselt Daten, fordert Lösegeld. Spyware: Spioniert Daten aus. Rootkit: Versteckt sich tief im System (Kernel-Ebene), sehr schwer zu entfernen.",
            },
            { type: "heading", value: "Beispiel 2: Phishing erkennen und abwehren" },
            {
              type: "text",
              value:
                "Typische Merkmale: Absender-Domain falsch (support@amaz0n-verify.com), Dringlichkeit ('Ihr Konto wird gesperrt!'), Link führt auf gefälschte Seite, Rechtschreibfehler, unpersönliche Anrede. Gegenmaßnahmen: Security-Awareness-Schulungen (wichtigste!), E-Mail-Filter (SPF, DKIM, DMARC), URL-Prüfung, 2FA (schützt auch bei kompromittierten Passwörtern).",
            },
            { type: "heading", value: "Beispiel 3: Incident Response Ablauf" },
            {
              type: "text",
              value:
                "1. Erkennung: IDS/SIEM meldet anomales Verhalten, Mitarbeiter meldet verdächtige Mail. 2. Eindämmung: Betroffenes System vom Netz isolieren (NICHT abschalten – Forensik!). 3. Analyse: Was ist passiert? Umfang? Welche Daten betroffen? 4. Bereinigung: Malware entfernen, Passwörter ändern, Patches einspielen. 5. Wiederherstellung: Systeme aus sauberem Backup wiederherstellen. 6. Nachbereitung: Lessons Learned, Prozesse verbessern, ggf. DSGVO-Meldung (72h-Frist!).",
            },
          ],
          quiz: [
            {
              id: "imp_lf4-ds-3_0",
              q: "Ransomware macht?",
              options: ["Spioniert", "Verschlüsselt + Lösegeld", "Löscht", "Verlangsamt"],
              correct: 1,
              explain: "Verschlüsselt Daten → Lösegeld.",
            },
            {
              id: "imp_lf4-ds-3_1",
              q: "Erster Schritt Incident Response nach Erkennung?",
              options: [
                "Backup einspielen",
                "Systeme isolieren/eindämmen",
                "Sofort löschen",
                "Polizei rufen",
              ],
              correct: 1,
              explain: "Eindämmung: Betroffene Systeme isolieren um Ausbreitung zu stoppen.",
            },
            {
              id: "imp_lf4-ds-3_2",
              q: "Was ist Tailgating?",
              options: [
                "Hinterhergehend durch gesicherte Tür",
                "Passwort-Brute-Force",
                "DNS-Manipulation",
                "Phishing per SMS",
              ],
              correct: 0,
              explain: "Tailgating = unberechtigte Person folgt Berechtigtem durch gesicherte Tür.",
            },
            {
              id: "imp_lf4-ds-3_3",
              q: "APT = ?",
              options: [
                "Anti-Phishing",
                "Active Port",
                "Automatic Protection",
                "Advanced Persistent Threat",
              ],
              correct: 3,
              explain: "APT: Langfristiger gezielter Cyberangriff.",
            },
            {
              id: "imp_lf4-ds-3_4",
              q: "Tailgating?",
              options: ["Malware", "Phishing", "DNS-Angriff", "Unbemerkt durch Tür mitgehen"],
              correct: 3,
              explain: "Unbefugter folgt berechtigter Person durch gesicherte Tür.",
            },
            {
              id: "imp_lf4-ds-3_5",
              q: "Ransomware Schutz?",
              options: [
                "Nur Verschlüsselung",
                "Nur Firewall",
                "Nur Antivirus",
                "Backup + Awareness + Patches + Endpoint",
              ],
              correct: 3,
              explain: "Kombination aus Backup, Schulung, Updates und Endpoint Security.",
            },
            {
              id: "imp_lf4-ds-3_6",
              q: "Wurm vs. Virus?",
              options: [
                "Beide Begriffe bezeichnen dieselbe Art von Schadsoftware",
                "Wurm verbreitet sich selbstständig, Virus braucht Wirtsdatei",
                "Würmer sind harmlos, da sie keine Schadfunktion ausführen können",
                "Viren richten stets größeren Schaden an als Würmer",
              ],
              correct: 1,
              explain: "Wurm: Eigenständig im Netz. Virus: Braucht Datei + Benutzeraktion.",
            },
            {
              id: "imp_lf4-ds-3_7",
              q: "Phishing erkennen?",
              options: [
                "Allein auf den automatischen Spam-Filter vertrauen",
                "Links immer anklicken, um das Ziel zu überprüfen",
                "Absender prüfen, URL prüfen, Dringlichkeit skeptisch",
                "Anhänge direkt öffnen, um den Inhalt zu prüfen",
              ],
              correct: 2,
              explain: "Absender, URL, Sprache, Dringlichkeit = Warnsignale.",
            },
            {
              id: "imp_lf4-ds-3_8",
              q: "Incident Response: Nach Beseitigung?",
              options: [
                "Den Vorfall sofort vergessen und zum Tagesgeschäft übergehen",
                "Nur kurz dokumentieren, weitere Schritte sind nicht nötig",
                "Der Prozess ist damit vollständig abgeschlossen",
                "Wiederherstellung aus Backup + Lessons Learned",
              ],
              correct: 3,
              explain: "Wiederherstellen, dann analysieren und dokumentieren.",
            },
            {
              id: "imp_lf4-ds-3_9",
              q: "Zero-Day = ?",
              options: [
                "Schwachstelle, die noch nicht bekannt/gepatcht ist",
                "Der erste Tag nach einer Neuinstallation",
                "Software, deren Support seit Jahren beendet ist",
                "Kostenlose Software ohne Lizenzbeschränkungen",
              ],
              correct: 0,
              explain: "Zero-Day: Kein Patch verfügbar, Angreifer nutzt unbekannte Lücke.",
            },
            {
              id: "imp_lf4-ds-3_10",
              q: "Was unterscheidet einen Wurm von einem Virus?",
              options: [
                "Es gibt keinen Unterschied zwischen beiden Begriffen",
                "Wurm verbreitet sich selbstständig ohne Wirtsdatei",
                "Ein Virus richtet grundsätzlich größeren Schaden an",
                "Ein Wurm ist lediglich eine Unterart des Virus",
              ],
              correct: 1,
              explain:
                "Wurm: Eigenständige Verbreitung über Netzwerk. Virus: Braucht infizierte Datei als Träger.",
            },
            {
              id: "imp_lf4-ds-3_11",
              q: "Was ist Ransomware?",
              options: [
                "Malware, die Daten verschlüsselt und Lösegeld fordert",
                "Ein Backup-Tool, das Sicherungen automatisch verschlüsselt ablegt",
                "Ein Virenscanner, der infizierte Dateien in Quarantäne verschiebt",
                "Eine Firewall, die eingehende Verbindungen anhand von Regeln blockiert",
              ],
              correct: 0,
              explain:
                "Ransomware: Verschlüsselt Dateien/Systeme, verlangt Zahlung (meist Kryptowährung) für Entschlüsselung.",
            },
            {
              id: "imp_lf4-ds-3_12",
              q: "Was ist Social Engineering?",
              options: [
                "Der gezielte Aufbau beruflicher Kontakte in sozialen Netzwerken",
                "Die private Nutzung von Social-Media-Plattformen am Arbeitsplatz",
                "Ein Teilgebiet des Software-Engineerings für soziale Medienplattformen",
                "Manipulation von Menschen, um an vertrauliche Informationen zu gelangen",
              ],
              correct: 3,
              explain:
                "Social Engineering: Psychologische Manipulation statt technischer Angriff (Phishing, Pretexting, Tailgating).",
            },
            {
              id: "imp_lf4-ds-3_13",
              q: "Was sollte man bei Verdacht auf Ransomware ZUERST tun?",
              options: [
                "Betroffenes System sofort vom Netzwerk isolieren",
                "Alle Daten auf dem System umgehend löschen",
                "Das geforderte Lösegeld umgehend bezahlen",
                "Den PC sofort ausschalten, um den Speicher zu leeren",
              ],
              correct: 0,
              explain:
                "Netzwerk-Isolation: Verhindert Ausbreitung. NICHT ausschalten (Forensik-Daten im RAM gehen verloren).",
            },
            {
              id: "imp_lf4-ds-3_14",
              q: "Innerhalb welcher Frist muss eine Datenschutzverletzung gemeldet werden?",
              options: [
                "1 Monat nach interner Feststellung (Art. 12 DSGVO)",
                "24 Stunden an das BSI nach IT-Sicherheitsgesetz",
                "72 Stunden an die Aufsichtsbehörde (Art. 33 DSGVO)",
                "1 Woche an die betroffenen Personen (Art. 34 DSGVO)",
              ],
              correct: 2,
              explain:
                "72 Stunden nach Bekanntwerden → Meldung an Aufsichtsbehörde. Bei hohem Risiko zusätzlich an Betroffene (Art. 34).",
            },
            {
              id: "imp_lf4-ds-3_15",
              q: "Was ist ein IDS/IPS?",
              options: [
                "Internal Data Storage",
                "Internet Download Service",
                "Intrusion Detection/Prevention System",
                "IP Distribution System",
              ],
              correct: 2,
              explain:
                "Erkennt/verhindert Angriffe im Netzwerk. IDS erkennt Angriffe (Alert). IPS erkennt UND blockiert automatisch (aktiver Schutz).",
            },
            {
              id: "imp_lf4-ds-3_16",
              q: "Was ist ein Zero-Day-Exploit?",
              options: [
                "Ein seit Jahren bekannter Exploit für veraltete Software",
                "Ausnutzung einer Sicherheitslücke, für die es noch keinen Patch gibt",
                "Ein Exploit, dessen Lücke der Hersteller noch am selben Tag behebt",
                "Ein harmloses Analysetool für Penetrationstests ohne Schadwirkung",
              ],
              correct: 1,
              explain:
                "Zero-Day: Lücke dem Hersteller unbekannt/ungepatcht → besonders gefährlich weil kein Schutz möglich.",
            },
            {
              id: "imp_lf4-ds-3_17",
              q: "Was sind SPF, DKIM und DMARC?",
              options: [
                "VPN-Protokolle zum Aufbau verschlüsselter Tunnel",
                "E-Mail-Sicherheitsmechanismen gegen Spoofing/Phishing",
                "Verfahren zur Ende-zu-Ende-Verschlüsselung von Mails",
                "Firewall-Regelsätze zum Filtern von Mail-Ports",
              ],
              correct: 1,
              explain:
                "SPF: Welche Server dürfen für Domain senden? DKIM: Digitale Signatur der Mail. DMARC: Policy was bei Fehlschlag passiert.",
            },
            {
              id: "imp_lf4-ds-3_18",
              q: "Was ist ein Honeypot?",
              options: [
                "Ein Backup-System, das Sicherungen an einem zweiten Standort ablegt",
                "Ein vollständig verschlüsselter Server für besonders sensible Daten",
                "Absichtlich verwundbares Locksystem, um Angreifer zu analysieren",
                "Ein Virenschutzprogramm, das seine Signaturen automatisch aktualisiert",
              ],
              correct: 2,
              explain:
                "Honeypot: Fängt Angreifer ab und protokolliert ihre Methoden → wertvolle Threat Intelligence.",
            },
            {
              id: "imp_lf4-ds-3_19",
              q: "Was gehört in einen Incident-Response-Plan?",
              options: [
                "Rollen/Zuständigkeiten, Eskalationswege, Kommunikationsplan, technische Schritte, Kontaktdaten",
                "Ausschließlich die Telefonnummern der Ansprechpartner, alles Weitere wird im Ernstfall improvisiert",
                "Nur die technischen Gegenmaßnahmen, da Kommunikation und Zuständigkeiten Sache der Geschäftsführung sind",
                "Nur die Anleitung zur Rücksicherung der Backups, da jeder Vorfall auf Datenverlust hinausläuft",
              ],
              correct: 0,
              explain:
                "IR-Plan: Wer macht was wann? Enthält Rollen, Erreichbarkeit, Eskalation, techn. Playbooks, Kommunikation (intern+extern+Behörden).",
            },
          ],
        },
        {
          id: "lf4-mailsec-1",
          title: "E-Mail-Sicherheit: SPF, DKIM & DMARC",
          content: [
            {
              type: "text",
              value:
                "E-Mail ist das Einfallstor Nummer eins (Phishing, CEO-Fraud, Ransomware) – und der Absender einer Mail ist erst mal nur eine Behauptung. Drei DNS-basierte Mechanismen schaffen Prüfbarkeit: SPF (Sender Policy Framework): Ein TXT-Record der Domain listet, welche Server für sie senden dürfen („v=spf1 mx include:mailanbieter.de -all“ – das -all heißt: alle anderen ablehnen); der Empfänger prüft die einliefernde IP dagegen. DKIM (DomainKeys Identified Mail): Der sendende Server SIGNIERT jede Mail kryptografisch; der öffentliche Schlüssel steht im DNS – der Empfänger verifiziert, dass Inhalt und Absenderdomain unverfälscht sind. DMARC verbindet beide: Ein Policy-Record („v=DMARC1; p=quarantine; rua=mailto:report@…“) sagt dem Empfänger, WAS er bei SPF/DKIM-Fehlschlag tun soll (none = nur berichten, quarantine = Spamordner, reject = ablehnen) und liefert Reports über Missbrauch. Wichtig fürs Verständnis: Die drei schützen NICHT deine eingehende Mail vor Spam – sie schützen deine DOMAIN davor, dass Fremde in ihrem Namen senden, und sie helfen Empfängern weltweit, Fälschungen zu erkennen. Ohne sie landet zunehmend auch legitime Post im Spam (Google/Microsoft verlangen SPF+DKIM für Massenversender).",
            },
            { type: "heading", value: "Übungsaufgabe: Records lesen und Vorfall bewerten" },
            {
              type: "text",
              value:
                "Ein Kunde meldet: Geschäftspartner erhalten gefälschte Rechnungsmails „von“ seiner Domain. Die DNS-Prüfung zeigt: SPF vorhanden mit „~all“ (Softfail), kein DKIM, kein DMARC. a) Erkläre, warum die Fälschungen trotz SPF durchkommen. b) Lege die Maßnahmen in sinnvoller Reihenfolge fest. c) Warum startet man DMARC mit p=none statt sofort p=reject?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: a) ~all ist nur ein Softfail – Empfänger werten das als Hinweis, nicht als Ablehnungsgrund; ohne DKIM fehlt die Signaturprüfung, ohne DMARC fehlt die Anweisung, Fälschungen abzulehnen, und niemand erhält Reports. b) (1) SPF härten: alle legitimen Versender erfassen (Mailserver, Newsletter-Tool, Ticketsystem!), dann -all. (2) DKIM auf allen Versandwegen aktivieren (Schlüssel im DNS publizieren). (3) DMARC mit p=none + rua-Reportadresse schalten und 2–4 Wochen Reports auswerten. (4) Auf p=quarantine, dann p=reject erhöhen. c) p=none zuerst, weil die Reports oft vergessene legitime Versender aufdecken (Newsletter, Scan-to-Mail des Multifunktionsgeräts!) – wer sofort auf reject stellt, blockiert die eigene Post. Merksatz: SPF sagt WER senden darf, DKIM beweist DASS es echt ist, DMARC sagt WAS bei Verstoß passiert.",
            },
          ],
          quiz: [
            {
              id: "imp_lf4-mailsec-1_0",
              q: "Was prüft SPF?",
              options: [
                "Den Inhalt eingehender Mails auf Viren, Trojaner und schädliche Dateianhänge",
                "Ob die einliefernde Server-IP laut DNS-Record der Absenderdomain senden darf",
                "Die Rechtschreibung und Grammatik der Mail als Indiz für Phishing-Versuche",
                "Ob die Verbindung zwischen den Mailservern mit TLS verschlüsselt ist",
              ],
              correct: 1,
              explain:
                "Der TXT-Record listet legitime Versender – geprüft wird beim Empfang gegen die tatsächliche Quell-IP.",
            },
            {
              id: "imp_lf4-mailsec-1_1",
              q: "Was leistet DKIM zusätzlich zu SPF?",
              options: [
                "Keinen Zusatznutzen, DKIM ist nur ein anderer Name für denselben SPF-Mechanismus",
                "Kryptografische Signatur: beweist, dass die Mail unverfälscht von der Domain stammt",
                "Es verschlüsselt den Mailinhalt Ende-zu-Ende, sodass nur der Empfänger ihn lesen kann",
                "Es ersetzt die Passwort-Anmeldung am Mailserver durch zertifikatsbasierte Logins",
              ],
              correct: 1,
              explain:
                "Auch nach Weiterleitungen prüfbar. SPF bricht bei Weiterleitungen, die DKIM-Signatur überlebt sie – deshalb braucht es beide.",
            },
            {
              id: "imp_lf4-mailsec-1_2",
              q: "Wofür steht p=quarantine im DMARC-Record?",
              options: [
                "Mails ohne SPF/DKIM-Bestehen sollen in den Spamordner",
                "Die Domain ist für den Mailversand komplett gesperrt",
                "Alle eingehenden Mails der Domain werden sofort gelöscht",
                "Die DMARC-Reports werden dauerhaft abgeschaltet",
              ],
              correct: 0,
              explain:
                "Die Policy-Stufen: none (nur berichten) → quarantine (Spam) → reject (ablehnen).",
            },
            {
              id: "imp_lf4-mailsec-1_3",
              q: "Warum startet ein DMARC-Rollout mit p=none?",
              options: [
                "Aus Bequemlichkeit, um Konfigurationsaufwand zu sparen",
                "Die Reports decken erst alle legitimen Versandwege auf",
                "p=none ist die sicherste der drei DMARC-Richtlinienstufen",
                "DNS lässt beim Anlegen technisch keinen anderen Wert zu",
              ],
              correct: 1,
              explain:
                "Sofortiges reject würde eigene Post blockieren. Scan-to-Mail, Newsletter-Dienste und Ticketsysteme werden regelmäßig vergessen – erst messen, dann verschärfen.",
            },
          ],
        },
      ],
    },
  ],
};
