window.LF_CONTENT = window.LF_CONTENT || {};
window.LF_CONTENT["lf9"] = {
  topics: [
    {
      id: "lf9-server",
      title: "Server-Betriebssysteme",
      lessons: [
        {
          id: "lf9-sv-1",
          title: "Windows Server & Active Directory",
          content: [
            { type: "heading", value: "Windows Server Editionen" },
            {
              type: "text",
              value:
                "Standard: Bis zu 2 VMs/Hyper-V-Container. Datacenter: Unbegrenzte VMs, Software-Defined Networking/Storage. Essentials: Für kleine Firmen, max. 25 Benutzer/50 Geräte.",
            },
            { type: "heading", value: "Active Directory (AD DS)" },
            {
              type: "text",
              value:
                "Verzeichnisdienst zur zentralen Verwaltung von Benutzern, Computern, Gruppen und Richtlinien. Kernbegriffe: Domäne: Logische Verwaltungseinheit (z.B. firma.local). Domänencontroller (DC): Server, der AD hostet. OU (Organizational Unit): Container zur Strukturierung. GPO (Group Policy Object): Richtlinien für Benutzer/Computer. Gesamtstruktur (Forest): Höchste AD-Ebene, kann mehrere Domänen enthalten.",
            },
            { type: "heading", value: "DNS & DHCP auf Windows Server" },
            {
              type: "text",
              value:
                "AD braucht DNS zwingend (SRV-Records für DC-Lokalisierung). DHCP-Server-Rolle: Scopes definieren, Reservierungen, Optionen (Gateway, DNS). DNS-Zonen: Forward (Name→IP) und Reverse (IP→Name) Lookup-Zonen.",
            },
            { type: "heading", value: "Übungsaufgabe: Serverdienste" },
            {
              type: "text",
              value:
                "Kunde braucht: zentrale Anmeldung, automatische IP-Vergabe, Namensauflösung. Welche drei Dienste setzt du ein?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. Zentrale Anmeldung -> Active Directory (AD DS)\n   auf einem Domänencontroller\n2. Automatische IP-Vergabe -> DHCP-Server\n3. Namensauflösung -> DNS-Server\n\nDNS ist für AD zwingend nötig (Dienstsuche über\nSRV-Records). DNS+DHCP laufen oft mit AD zusammen.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Active Directory Objekte" },
            {
              type: "text",
              value: "AD-Objekte erklären: Domäne, OU, Benutzer, Gruppe, GPO. Zusammenhang?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nDomäne: Verwaltungsgrenze (firma.local). OU: Strukturierung (GPO-Zuweisung). Benutzer: Anmeldekonto. Gruppe: Berechtigungsvergabe (Sicherheits- vs. Verteilergruppe). GPO: Richtlinie auf OU verknüpft.\nHierarchie: Domäne → OU → Benutzer/Gruppen. GPOs vererbt.",
            },
            { type: "heading", value: "Beispiel 1: AGDLP für die Buchhaltungs-Freigabe" },
            {
              type: "list",
              value: [
                "Benutzerkonten: m.meier, s.schulz (Buchhaltung)",
                "Globale Gruppe (Rolle): G_Buchhaltung – enthält die Benutzer",
                "Domänenlokale Gruppe (Ressource): DL_Freigabe_Buchhaltung_RW – enthält G_Buchhaltung",
                "NTFS-Berechtigung: DL_Freigabe_Buchhaltung_RW erhält 'Ändern' auf \\\\srv-file01\\buchhaltung",
                "Neuer Mitarbeiter? Nur in G_Buchhaltung aufnehmen – fertig.",
              ],
            },
            { type: "heading", value: "Beispiel 2: OU-Struktur eines Mittelständlers" },
            {
              type: "code",
              value:
                "firma.local\n├── OU Standorte\n│   ├── OU Lueneburg\n│   │   ├── OU Benutzer\n│   │   ├── OU Computer\n│   │   └── OU Gruppen\n│   └── OU Hamburg\n│       └── ...\n└── OU Server\n-- GPO 'Laufwerke Buchhaltung' wird an\n-- OU Lueneburg/Benutzer verknüpft.",
            },
          ],
          quiz: [
            {
              id: "imp_lf9-sv-1_0",
              q: "Active Directory braucht zwingend?",
              options: ["FTP", "DNS", "WINS", "DHCP"],
              correct: 1,
              explain: "AD ist auf DNS angewiesen (SRV-Records zur DC-Lokalisierung).",
            },
            {
              id: "imp_lf9-sv-1_1",
              q: "GPO steht für?",
              options: [
                "Group Policy Object",
                "General Purpose Output",
                "Global Processing Order",
                "Gateway Protocol Option",
              ],
              correct: 0,
              explain: "Group Policy Object = Richtlinie für Benutzer/Computer.",
            },
            {
              id: "imp_lf9-sv-1_2",
              q: "Active Directory = ?",
              options: [
                "Firewall zur zentralen Filterung des Domänenverkehrs",
                "Relationale SQL-Datenbank für Geschäftsdaten",
                "Verzeichnisdienst für Benutzer/Computer/Gruppen",
                "Webserver für die Intranet-Seiten der Domäne",
              ],
              correct: 2,
              explain: "AD: Zentraler Verzeichnisdienst für Authentifizierung und Autorisierung.",
            },
            {
              id: "imp_lf9-sv-1_3",
              q: "OU = ?",
              options: ["Online Update", "Output Unit", "Organizational Unit", "Offsite Usage"],
              correct: 2,
              explain:
                "Ordner im AD für GPOs. Organizational Unit: Container im AD zum Strukturieren und GPO-Anwenden.",
            },
            {
              id: "imp_lf9-sv-1_4",
              q: "DNS für AD?",
              options: [
                "Pflicht (AD braucht DNS für Domänen-Auflösung)",
                "Optional, da AD auch ohne DNS voll funktioniert",
                "Nur für externe Namensauflösung im Internet nötig",
                "Nur für interne Freigaben, nicht für die Domäne",
              ],
              correct: 0,
              explain: "DNS ist für AD zwingend erforderlich.",
            },
            {
              id: "imp_lf9-sv-1_5",
              q: "Domänencontroller?",
              options: [
                "Server, der die AD-Datenbank hostet und Authentifizierung durchführt",
                "Switch, der die Netzwerkports der Domäne zentral verwaltet",
                "Firewall, die den Zugriff auf die Domäne per Regelwerk filtert",
                "Router, der Pakete zwischen den Domänen-Subnetzen vermittelt",
              ],
              correct: 0,
              explain:
                "DC: Server mit AD-Rolle, authentifiziert Benutzer und verwaltet Richtlinien.",
            },
            {
              id: "imp_lf9-sv-1_6",
              q: "DHCP-Rolle auf Windows Server?",
              options: ["DHCP Server", "AD DS", "DNS Server", "File Server"],
              correct: 0,
              explain: "DHCP Server Rolle muss installiert und konfiguriert werden.",
            },
            {
              id: "imp_lf9-sv-1_7",
              q: "FSMO Roles?",
              options: [
                "Firewall-Rollen",
                "Failover System",
                "Flexible Single Master Operations",
                "File Server Monitoring",
              ],
              correct: 2,
              explain:
                "Spezielle AD-Rollen. FSMO: 5 spezielle Rollen, die jeweils nur ein DC gleichzeitig innehaben kann.",
            },
            {
              id: "imp_lf9-sv-1_8",
              q: "Kerberos?",
              options: ["Firewall", "DHCP", "DNS", "Authentifizierungsprotokoll in AD"],
              correct: 3,
              explain:
                "Tickets statt Passwörter. Kerberos: Ticket-basierte Authentifizierung im AD.",
            },
            {
              id: "imp_lf9-sv-1_9",
              q: "AD DS = ?",
              options: [
                "Active Directory Domain Services",
                "Automatic DNS",
                "Application Delivery",
                "Admin Desktop",
              ],
              correct: 0,
              explain: "Active Directory Domain Services: Kernrolle für AD.",
            },
            {
              id: "imp_lf9-sv-1_10",
              q: "Was unterscheidet eine Domäne von einer Arbeitsgruppe?",
              options: [
                "Domänen funktionieren ausschließlich mit Linux-Servern und lassen sich nicht mit Windows-Clients betreiben",
                "Eine Arbeitsgruppe benötigt deutlich mehr Server, da jeder Rechner einen eigenen Verwaltungsserver voraussetzt",
                "Zentrale Verwaltung von Konten und Richtlinien über Domain Controller statt lokaler Konten je Rechner",
                "Arbeitsgruppen skalieren für Konzerne besser, weil ohne zentrale Verwaltung weniger Overhead je Rechner anfällt",
              ],
              correct: 2,
              explain:
                "In der Domäne authentifiziert der DC zentral (ein Konto, alle Rechner); in der Arbeitsgruppe pflegt jeder Rechner eigene lokale Konten – nur für Kleinstnetze praktikabel.",
            },
            {
              id: "imp_lf9-sv-1_11",
              q: "Welche Aufgabe hat ein Domain Controller?",
              options: [
                "Er dient ausschließlich als Datei-Server für die Ablage von Abteilungsdokumenten",
                "Er authentifiziert Benutzer und beantwortet Verzeichnisabfragen des Active Directory",
                "Er nimmt Druckaufträge an und verwaltet die Warteschlangen der Netzwerkdrucker",
                "Er verteilt per DHCP IP-Adressen an die Heimrouter der Mitarbeiter im Homeoffice",
              ],
              correct: 1,
              explain:
                "Der DC hält die AD-Datenbank (ntds.dit), prüft Anmeldungen (Kerberos) und repliziert mit anderen DCs.",
            },
            {
              id: "imp_lf9-sv-1_12",
              q: "Was ist eine Organisationseinheit (OU)?",
              options: [
                "Eine Sicherheitsgruppe, die ausschließlich zum Aufbau von E-Mail-Verteilerlisten dient",
                "Ein spezielles Benutzerkonto, das standardmäßig mit Domänen-Adminrechten ausgestattet ist",
                "Ein Container im AD zum Strukturieren von Objekten und Verknüpfen von Gruppenrichtlinien",
                "Ein physischer Serverraum, in dem die Domain Controller eines Standorts untergebracht sind",
              ],
              correct: 2,
              explain:
                "OUs bilden z. B. Abteilungen ab; an OUs werden GPOs verknüpft und Administration delegiert – anders als Gruppen, die Berechtigungen bündeln.",
            },
            {
              id: "imp_lf9-sv-1_13",
              q: "Wofür steht das Prinzip AGDLP?",
              options: [
                "Automatische Gruppenrichtlinien-Doppelung auf Domänen- und Lokal-Ebene",
                "Admin-Gruppen dürfen auf lokalen Systemen Protokolle einsehen und löschen",
                "Accounts in Globale Gruppen, diese in Domänen-Lokale Gruppen, darauf Permissions vergeben",
                "Alle Benutzer und Gruppen direkt auf die Laufwerke und Freigaben berechtigen",
              ],
              correct: 2,
              explain:
                "AGDLP strukturiert Berechtigungen sauber: Benutzer → globale Gruppe (Rolle) → domänenlokale Gruppe (Ressource) → NTFS-Recht.",
            },
            {
              id: "imp_lf9-sv-1_14",
              q: "Warum ist ein funktionierender DNS-Dienst für Active Directory zwingend?",
              options: [
                "Clients und DCs finden Dienste (z. B. den Anmeldeserver) über DNS-SRV-Einträge",
                "Active Directory legt die Passwort-Hashes aller Konten in der DNS-Zone ab",
                "DNS verschlüsselt den Anmeldevorgang zwischen Client und Domain Controller",
                "DNS wird nur für Internetzugriffe benötigt, intern genügen IP-Adressen",
              ],
              correct: 0,
              explain:
                "Ohne korrekte SRV-Records findet kein Client seinen DC – die häufigste Ursache für Anmelde- und Beitrittsprobleme in Domänen.",
            },
            {
              id: "imp_lf9-sv-1_15",
              q: "Welches Protokoll übernimmt die Authentifizierung in einer AD-Domäne?",
              options: ["FTP", "Kerberos", "SNMP", "DHCP"],
              correct: 1,
              explain:
                "Kerberos arbeitet mit Tickets (TGT/Service-Tickets); NTLM existiert nur noch als Fallback.",
            },
            {
              id: "imp_lf9-sv-1_16",
              q: "Was sind die RSAT-Tools?",
              options: [
                "Ein Bandroboter, der Sicherungsbänder automatisch wechselt und in der Bibliothek katalogisiert",
                "Ein Trainingsprogramm mit Übungsaufgaben zur Vorbereitung auf Microsoft-Zertifizierungen",
                "Ein Antivirenpaket von Microsoft, das Server in Echtzeit auf Schadsoftware überwacht",
                "Remote-Server-Verwaltungstools, um Server von einem Admin-Client aus zu administrieren",
              ],
              correct: 3,
              explain:
                "Remote Server Administration Tools bringen Konsolen wie 'Active Directory-Benutzer und -Computer' auf den Admin-PC – Arbeiten direkt am DC wird vermieden.",
            },
            {
              id: "imp_lf9-sv-1_17",
              q: "Was zeichnet eine Server-Core-Installation aus?",
              options: [
                "Ein Server mit besonders vielen CPU-Kernen",
                "Windows Server ohne grafische Oberfläche",
                "Ein Server ohne Netzwerk",
                "Eine Linux-Variante von Windows",
              ],
              correct: 1,
              explain:
                "Weniger Angriffsfläche, weniger Updates. Core wird per PowerShell/RSAT verwaltet und ist für Infrastrukturrollen wie DC oder DNS empfohlen.",
            },
            {
              id: "imp_lf9-sv-1_18",
              q: "Warum betreibt man in einer Domäne mindestens zwei Domain Controller?",
              options: [
                "Aus optischen Gründen, damit der Serverschrank symmetrisch bestückt ist",
                "Weil ein einzelner DC technisch nur maximal 10 Benutzerkonten verwalten kann",
                "Zwei DCs sind im Lizenzpaket günstiger als ein einzelner Domain Controller",
                "Ausfallsicherheit: Fällt ein DC aus, laufen Anmeldungen über den zweiten weiter",
              ],
              correct: 3,
              explain:
                "Die AD-Datenbank repliziert zwischen den DCs; ein einzelner DC ist ein Single Point of Failure für das gesamte Netz.",
            },
            {
              id: "imp_lf9-sv-1_19",
              q: "Ein neuer Mitarbeiter braucht Zugriff auf die Abteilungsfreigabe. Welcher Weg entspricht AGDLP?",
              options: [
                "Benutzer in die globale Abteilungs-Gruppe aufnehmen, die bereits Mitglied der berechtigten domänenlokalen Gruppe ist",
                "Die Freigabe für die Gruppe 'Jeder' öffnen, damit keine weitere Gruppenpflege im AD mehr nötig ist",
                "Den Benutzer in die Gruppe der Domänen-Admins aufnehmen, da diese überall automatisch Zugriff haben",
                "Dem Benutzerkonto direkt in der ACL des Ordners Vollzugriff geben, ohne Gruppen zu verwenden",
              ],
              correct: 0,
              explain:
                "Direktberechtigungen einzelner Benutzer machen Strukturen unwartbar; über die Rollen-Gruppe ist der Zugriff mit einem Schritt erledigt und nachvollziehbar.",
            },
          ],
        },
        {
          id: "lf9-sv-2",
          title: "Linux-Server & Dienste",
          content: [
            { type: "heading", value: "Linux-Server-Distributionen" },
            {
              type: "text",
              value:
                "Ubuntu Server / Debian: Stabil, große Community, apt. RHEL / Rocky Linux / AlmaLinux: Enterprise, Support, dnf. SUSE Linux Enterprise: Europäisch, Enterprise-Support.",
            },
            { type: "heading", value: "Wichtige Serverdienste" },
            {
              type: "text",
              value:
                "Webserver: Apache2 (httpd) oder Nginx. Reverse Proxy: Nginx, HAProxy. Datenbanken: MySQL/MariaDB, PostgreSQL. Dateifreigabe: Samba (Windows-kompatibel), NFS (Linux-zu-Linux). DNS: BIND9. DHCP: isc-dhcp-server oder Kea. Mail: Postfix (MTA) + Dovecot (IMAP/POP3). Monitoring: Zabbix, Nagios, Prometheus+Grafana.",
            },
            { type: "heading", value: "Dienst installieren (Beispiel Nginx)" },
            {
              type: "code",
              value:
                "sudo apt update\nsudo apt install nginx\nsudo systemctl enable --now nginx\nsudo ufw allow 'Nginx Full'\n# Konfig: /etc/nginx/sites-available/default\n# Webroot: /var/www/html/\nnginx -t                    # Konfig testen\nsudo systemctl reload nginx # Konfig neu laden",
            },
            { type: "heading", value: "Übungsaufgabe 1: Apache installieren" },
            {
              type: "text",
              value:
                "Apache-Webserver unter Ubuntu installieren und Website bereitstellen. Schritte?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\napt update && apt install apache2 → systemctl status apache2 → ufw allow 80/tcp → /var/www/html/index.html bearbeiten → Browser testen.\nVirtual Host: sites-available → a2ensite → reload.\nVerzeichnisse: /var/www/html (Daten), /etc/apache2 (Config), /var/log/apache2 (Logs).",
            },
            { type: "heading", value: "Übungsaufgabe 2: SSH absichern" },
            { type: "text", value: "5 Maßnahmen um SSH abzusichern." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. PermitRootLogin no\n2. Key-Auth statt Passwort (PasswordAuthentication no)\n3. Port ändern (reduziert Scan-Traffic)\n4. Fail2Ban (IP-Sperre nach Fehlversuchen)\n5. AllowUsers/AllowGroups einschränken",
            },
            { type: "heading", value: "Beispiel 2: SSH-Key-Login einrichten" },
            {
              type: "code",
              value:
                '# Auf dem Client: Schlüsselpaar erzeugen\nssh-keygen -t ed25519 -C "admin@firma"\n# Öffentlichen Schlüssel auf den Server kopieren\nssh-copy-id admin@srv-web01\n# Testen, dann auf dem Server in /etc/ssh/sshd_config:\n#   PasswordAuthentication no\n#   PermitRootLogin no\nsudo systemctl restart ssh',
            },
            {
              type: "text",
              value:
                "Wichtig: Erst den Key-Login testen, dann die Passwort-Anmeldung abschalten – sonst sperrt man sich aus.",
            },
            { type: "heading", value: "Vertiefung: Dienste-Verwaltung mit systemd im Alltag" },
            {
              type: "text",
              value:
                'Der rote Faden der Linux-Server-Administration ist systemd: systemctl status zeigt Zustand UND letzte Logzeilen eines Dienstes, start/stop/restart greifen sofort, enable/disable steuern den Autostart (enable --now kombiniert beides). Logs liest du mit journalctl -u dienst -f (folgen) oder --since "1 hour ago". Konfig-Änderungen brauchen je nach Dienst reload (Konfig neu einlesen, Verbindungen bleiben) statt restart (harter Neustart). Standard-Fehlerkette bei „Dienst läuft nicht“: systemctl status (Fehlermeldung?) → journalctl -u (warum?) → Konfigtest des Dienstes (nginx -t, apachectl configtest, sshd -t) → Ports frei? (ss -tlnp) → Rechte/Pfade prüfen.',
            },
            { type: "heading", value: "Übungsaufgabe: Webserver startet nicht" },
            {
              type: "text",
              value:
                "Nach einer Konfigänderung: systemctl restart nginx schlägt fehl. Beschreibe die vier Diagnose-Schritte mit konkreten Befehlen bis zur wahrscheinlichen Ursache „Tippfehler in der Konfig“ – und wie du solche Ausfälle künftig VOR dem Neustart verhinderst.",
            },
            {
              type: "solution",
              value:
                'MUSTERLÖSUNG: (1) systemctl status nginx – zeigt failed und oft schon die Fehlerzeile. (2) journalctl -u nginx --since "5 min ago" – vollständige Meldung (z. B. unknown directive in /etc/nginx/conf.d/shop.conf:12). (3) nginx -t – Konfigtest benennt Datei und Zeile exakt. (4) Zeile korrigieren, nginx -t erneut, dann systemctl reload nginx. Prävention: IMMER nginx -t vor jedem restart/reload – der Test kostet eine Sekunde, ein nächtlicher Ausfall ein SLA. Bonus: Konfig unter Versionskontrolle (git), Änderung nachvollziehbar.',
            },
          ],
          quiz: [
            {
              id: "imp_lf9-sv-2_0",
              q: "Welcher Webserver ist auch als Reverse Proxy beliebt?",
              options: ["Tomcat", "Apache", "Nginx", "IIS"],
              correct: 2,
              explain: "Nginx wird häufig als Reverse Proxy und Load Balancer eingesetzt.",
            },
            {
              id: "imp_lf9-sv-2_1",
              q: "Nginx installieren (Debian)?",
              options: [
                "pacman -S nginx",
                "yum install nginx",
                "apt install nginx",
                "brew install nginx",
              ],
              correct: 2,
              explain: "Debian/Ubuntu: apt install nginx.",
            },
            {
              id: "imp_lf9-sv-2_2",
              q: "Nginx-Konfiguration testen?",
              options: ["nginx -t", "nginx --check", "test nginx", "nginx -v"],
              correct: 0,
              explain: "nginx -t prüft die Konfiguration auf Syntaxfehler.",
            },
            {
              id: "imp_lf9-sv-2_3",
              q: "Samba dient?",
              options: [
                "Webhosting",
                "Monitoring",
                "Windows-Dateifreigabe unter Linux",
                "Datenbank",
              ],
              correct: 2,
              explain: "Samba: SMB/CIFS-Protokoll, Linux als Fileserver für Windows-Clients.",
            },
            {
              id: "imp_lf9-sv-2_4",
              q: "NFS vs. Samba?",
              options: [
                "NFS = Linux-zu-Linux, Samba = Windows-kompatibel",
                "NFS ist grundsätzlich schneller, Samba nur ein Fallback",
                "Beide Protokolle sind identisch und frei austauschbar",
                "Samba funktioniert nur lokal ohne Netzwerkfreigaben",
              ],
              correct: 0,
              explain: "NFS für reine Linux-Umgebungen, Samba für gemischte (Windows+Linux).",
            },
            {
              id: "imp_lf9-sv-2_5",
              q: "systemctl status nginx?",
              options: [
                "Nginx löschen",
                "Config testen",
                "Nginx installieren",
                "Nginx Status prüfen (active/inactive)",
              ],
              correct: 3,
              explain: "Zeigt, ob der Dienst läuft, Fehlermeldungen, PID.",
            },
            {
              id: "imp_lf9-sv-2_6",
              q: "NFS vs Samba?",
              options: [
                "Gleich",
                "Samba=nur Linux",
                "NFS=Win",
                "NFS=Linux, Samba=Windows-kompatibel",
              ],
              correct: 3,
              explain: "Gemischte Umgebung.",
            },
            {
              id: "imp_lf9-sv-2_7",
              q: "fail2ban?",
              options: ["Sperrt IPs nach Fehlversuchen", "Backup", "FW", "VPN"],
              correct: 0,
              explain: "Brute-Force-Schutz.",
            },
            {
              id: "imp_lf9-sv-2_8",
              q: "sites-enabled?",
              options: ["Deaktiviert", "Verfügbar", "Logs", "Aktive Configs (Symlinks)"],
              correct: 3,
              explain: "Symlinks aktivieren.",
            },
            {
              id: "imp_lf9-sv-2_9",
              q: "MariaDB vs MySQL?",
              options: [
                "Anders",
                "MySQL neuer",
                "MariaDB proprietär",
                "Fork, kompatibel, Community",
              ],
              correct: 3,
              explain: "Community-Fork.",
            },
            {
              id: "imp_lf9-sv-2_10",
              q: "Mit welchem Befehl prüft man unter systemd den Status des SSH-Dienstes?",
              options: [
                "service --all",
                "systemctl status ssh",
                "ps aux | grep status",
                "ssh --status",
              ],
              correct: 1,
              explain:
                "systemctl status <dienst> zeigt Zustand, letzte Logzeilen und ob der Dienst aktiviert ist (je nach Distribution heißt der Dienst ssh oder sshd).",
            },
            {
              id: "imp_lf9-sv-2_11",
              q: "Was bewirkt systemctl enable nginx?",
              options: [
                "Der Dienst wird samt Konfiguration deinstalliert",
                "Die Konfigurationsdateien des Dienstes werden gelöscht",
                "Der Dienst startet sofort einmalig für die aktuelle Sitzung",
                "Der Dienst wird beim Systemstart automatisch gestartet",
              ],
              correct: 3,
              explain:
                "enable richtet den Autostart ein, start startet sofort. Beides zusammen: systemctl enable --now nginx.",
            },
            {
              id: "imp_lf9-sv-2_12",
              q: "Welche Maßnahme härtet einen SSH-Server wirksam?",
              options: [
                "Root-Login mit einem einfachen Standardpasswort wie '1234' erlauben",
                "SSH auf allen Interfaces ohne vorgeschaltete Firewall-Regeln öffnen",
                "Schlüssel-Authentifizierung erzwingen und Passwort-Login deaktivieren",
                "Telnet zusätzlich als unverschlüsselten Fallback-Zugang aktivieren",
              ],
              correct: 2,
              explain:
                "PasswordAuthentication no und PermitRootLogin no in der sshd_config plus Public-Key-Login schalten Brute-Force-Angriffe auf Passwörter aus.",
            },
            {
              id: "imp_lf9-sv-2_13",
              q: "Mit welchem Befehl installiert man unter Debian/Ubuntu ein Paket?",
              options: ["regedit", "format c:", "dnf remove <paket>", "apt install <paket>"],
              correct: 3,
              explain:
                "Debian-Familie nutzt apt, Red-Hat-Familie dnf/yum. remove deinstalliert – das Gegenteil von install.",
            },
            {
              id: "imp_lf9-sv-2_14",
              q: "Wo liegen unter Linux klassischerweise die Konfigurationsdateien?",
              options: ["C:\\Programme", "/tmp", "/dev", "/etc"],
              correct: 3,
              explain:
                "/etc enthält systemweite Konfiguration (z. B. /etc/ssh/sshd_config, /etc/fstab).",
            },
            {
              id: "imp_lf9-sv-2_15",
              q: "Mit welchem Befehl liest man die Logs eines systemd-Dienstes?",
              options: ["cat /etc/passwd", "journalctl -u <dienst>", "top", "ls -la /var"],
              correct: 1,
              explain:
                "journalctl -u nginx zeigt die Einträge des Dienstes; mit -f folgt man dem Log live.",
            },
            {
              id: "imp_lf9-sv-2_16",
              q: "Was bedeutet die Oktal-Berechtigung 750 auf einem Verzeichnis?",
              options: [
                "Besitzer: nur lesen; Gruppe und Andere: Vollzugriff",
                "Besitzer: alles; Gruppe: lesen+ausführen; Andere: nichts",
                "Besitzer, Gruppe und Andere haben jeweils Vollzugriff",
                "Weder Besitzer noch Gruppe noch Andere haben Rechte",
              ],
              correct: 1,
              explain:
                "7 = rwx (Besitzer), 5 = r-x (Gruppe), 0 = --- (Andere). Bei Verzeichnissen heißt x: betreten dürfen.",
            },
            {
              id: "imp_lf9-sv-2_17",
              q: "Wofür dient ein Cronjob?",
              options: [
                "Der Diagnose von Hardwarekomponenten wie RAM und Festplatten",
                "Zeitgesteuerte, wiederkehrende Ausführung von Befehlen oder Skripten",
                "Dem einmaligen, sofortigen Herunterfahren des Servers",
                "Der grafischen Verwaltung von Servern über ein Web-Frontend",
              ],
              correct: 1,
              explain:
                "Beispiel: 0 2 * * * /usr/local/bin/backup.sh führt das Backup täglich um 02:00 Uhr aus (Minute Stunde Tag Monat Wochentag).",
            },
            {
              id: "imp_lf9-sv-2_18",
              q: "Welche Software stellt Windows-kompatible Dateifreigaben unter Linux bereit?",
              options: ["GRUB", "cron", "GIMP", "Samba"],
              correct: 3,
              explain:
                "Samba implementiert das SMB-Protokoll – Linux-Server tauchen damit wie Windows-Freigaben im Explorer auf.",
            },
            {
              id: "imp_lf9-sv-2_19",
              q: "Mit chown anna:technik bericht.txt wird festgelegt, dass …",
              options: [
                "die Datei nach Bestätigung endgültig gelöscht wird",
                "anna die Datei künftig nur noch lesen darf",
                "anna Besitzerin und technik die Gruppe der Datei ist",
                "die Datei nach /home/technik verschoben wird",
              ],
              correct: 2,
              explain:
                "chown ändert Besitzer und (nach dem Doppelpunkt) die Gruppe; die eigentlichen Rechte setzt chmod.",
            },
          ],
        },
        {
          id: "lf9-voip-1",
          title: "VoIP & Telefonie im Unternehmensnetz",
          content: [
            {
              type: "text",
              value:
                "Telefonie läuft heute als Voice over IP über dein Netzwerk – und ist damit dein Job: SIP (Session Initiation Protocol, Port 5060/5061-TLS) baut Gespräche auf (REGISTER am Telefonanlagen-Server, INVITE für den Anruf), die Sprache selbst fließt per RTP in kleinen UDP-Paketen. Codecs bestimmen Qualität und Bandbreite: G.711 (ISDN-Qualität, 64 kbit/s Nutzdaten, mit RTP/UDP/IP/Ethernet-Overhead rund 87 kbit/s je RICHTUNG) und G.729 (komprimiert, ~8 kbit/s Nutzdaten, ~31 kbit/s mit Overhead – Qualitätsverlust). Sprache ist latenzkritisch: Ziel < 150 ms Ende-zu-Ende, Jitter < 30 ms, Paketverlust < 1 % – deshalb bekommen Telefone ein eigenes VOICE-VLAN und QoS-Priorisierung (DSCP EF), und die Switche liefern PoE gleich mit. Planungspunkte: Bandbreite je gleichzeitigem Gespräch (nicht je Nebenstelle!), Notruffähigkeit bei Stromausfall (PoE-Switch an USV!), Fax/Alarmanlagen brauchen Sonderlösungen (T.38).",
            },
            { type: "heading", value: "Übungsaufgabe: Standortkopplung dimensionieren" },
            {
              type: "text",
              value:
                "Zwei Standorte sind per VPN (50 Mbit/s symmetrisch) gekoppelt. In der Spitze laufen 30 gleichzeitige Gespräche zwischen den Standorten, Codec G.711 (~87 kbit/s je Richtung inkl. Overhead). a) Wie viel Bandbreite belegt die Telefonie je Richtung? b) Reicht die Leitung, wenn parallel 40 Mbit/s Datenverkehr laufen – und was tust du? c) Warum löst „mehr Bandbreite“ allein das Problem schlechter Gesprächsqualität oft nicht?",
            },
            { type: "heading", value: "Praxis: Bandbreite und Priorisierung planen" },
            {
              type: "text",
              value:
                "Für die Dimensionierung rechnest du pro Gespräch mit dem Codec-Bedarf plus Overhead: G.711 belegt inklusive IP/UDP/RTP-Overhead rund 87 kbit/s je Richtung, G.729 nur etwa 31 kbit/s – bei 20 gleichzeitigen Gesprächen also grob 1,74 Mbit/s gegenüber 0,62 Mbit/s. Damit Sprache auch bei Lastspitzen sauber bleibt, markierst du die Pakete per DSCP (Sprache typisch EF/46, Signalisierung CS3) und richtest auf Switches und Router eine Priority Queue ein. Als Zielwerte für gute Gesprächsqualität gelten: Latenz unter 150 ms (einfach), Jitter unter 30 ms, Paketverlust unter 1 %. Ein eigenes Voice-VLAN trennt die Telefone vom Datenverkehr und vereinfacht sowohl QoS als auch die Fehlersuche.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: a) 30 × 87 kbit/s = 2.610 kbit/s ≈ 2,6 Mbit/s je Richtung. b) 2,6 + 40 = 42,6 < 50 Mbit/s – rechnerisch ja, ABER ohne QoS verdrängen Daten-Bursts (Backup!) die Sprachpakete: QoS einrichten (Voice-Klasse mit Priorität/Bandbreitengarantie von z. B. 5 Mbit/s), Backup-Fenster außerhalb der Geschäftszeiten. Alternativ Codec G.729 (30 × 31 ≈ 0,9 Mbit/s) gegen Qualitätsverlust abwägen. c) Sprachqualität hängt an LATENZ, JITTER und VERLUST, nicht nur am Durchsatz – eine volle Queue erzeugt Jitter auch bei „genug“ Bandbreite; deshalb Priorisierung statt nur dickerer Leitung.",
            },
          ],
          quiz: [
            {
              id: "imp_lf9-voip-1_0",
              q: "Welche Aufgabe hat SIP bei VoIP?",
              options: [
                "Es transportiert die Sprachpakete",
                "Es baut Sitzungen auf und ab",
                "Es verschlüsselt Festplatten",
                "Es ersetzt DNS",
              ],
              correct: 1,
              explain:
                "Die Sprache fließt per RTP. SIP = Signalisierung (INVITE, REGISTER), RTP = Medientransport über UDP.",
            },
            {
              id: "imp_lf9-voip-1_1",
              q: "Warum bekommen IP-Telefone ein eigenes Voice-VLAN?",
              options: [
                "Wegen der Farbcodes der Patchkabel im Rack",
                "QoS-Priorisierung und Trennung vom Datenverkehr",
                "Weil der SIP-Standard eigene VLANs vorschreibt",
                "Damit die Telefone keinen DHCP-Server benötigen",
              ],
              correct: 1,
              explain:
                "Sprache ist latenz- und jitterempfindlich. Plus Sicherheitsaspekt: Telefonie-Traffic ist vom Client-Netz getrennt.",
            },
            {
              id: "imp_lf9-voip-1_2",
              q: "20 gleichzeitige G.711-Gespräche (~87 kbit/s je Richtung) – Bandbreitenbedarf je Richtung?",
              options: ["ca. 0,17 Mbit/s", "ca. 1,74 Mbit/s", "ca. 17,4 Mbit/s", "64 kbit/s"],
              correct: 1,
              explain:
                "20 × 87 = 1.740 kbit/s ≈ 1,74 Mbit/s – gerechnet wird je gleichzeitigem Gespräch, nicht je Telefon.",
            },
            {
              id: "imp_lf9-voip-1_3",
              q: "Was ist bei VoIP für den Notruf zwingend zu bedenken?",
              options: [
                "Nichts, die Notruffähigkeit ist bei VoIP technisch immer sichergestellt",
                "Stromausfall: PoE-Switch und Router an die USV, sonst ist Telefonie tot",
                "Notrufe können bei VoIP ausschließlich über ein Faxgerät abgesetzt werden",
                "Der SIP-Standard untersagt das Absetzen von Notrufen über die Anlage",
              ],
              correct: 1,
              explain:
                "Klassische Analogtelefone hingen an der Amtsleitung. Verfügbarkeitsplanung der Telefonie gehört in jedes VoIP-Konzept – auch Standort-Übermittlung bedenken.",
            },
          ],
        },
        {
          id: "lf9-v6mig-1",
          title: "IPv6-Migration: Dual Stack & Übergangstechniken",
          content: [
            {
              type: "text",
              value:
                "Kein Betrieb schaltet IPv4 an einem Tag ab – Migration heißt Koexistenz. Die Strategien: DUAL STACK (der Standardweg: jedes System bekommt IPv4 UND IPv6 parallel; Anwendungen nutzen bevorzugt IPv6, fallen auf IPv4 zurück – volle Kompatibilität, aber doppelte Pflege von Firewall-Regeln und Adresskonzepten!), TUNNEL (IPv6-Inseln über IPv4-Netze verbinden, z. B. 6in4 – heute v. a. Übergangslösung) und ÜBERSETZUNG (NAT64/DNS64: IPv6-only-Clients erreichen IPv4-Server – der DNS64 fälscht AAAA-Antworten ins Präfix 64:ff9b::/96, das NAT64-Gateway übersetzt; Mobilfunknetze arbeiten so). Der Migrationsplan in Phasen: (1) Bestandsaufnahme (welche Geräte/Software können IPv6? Altsysteme!), (2) Adresskonzept (vom Provider /48 oder /56, je Standort/VLAN ein /64 – Subnetting läuft über die Präfix-Hierarchie, nicht über Hostbits-Sparen!), (3) Perimeter zuerst (Firewall-Regelwerk für IPv6 – KEIN NAT-Sicherheitsersatz mehr: jede Adresse ist global routbar, das Regelwerk MUSS stehen!), (4) Dual Stack von außen nach innen aktivieren, (5) Monitoring beider Protokolle, (6) irgendwann IPv4 abschalten (selten erreicht).",
            },
            { type: "heading", value: "Übungsaufgabe: Migrationskonzept skizzieren" },
            {
              type: "text",
              value:
                "Ein Betrieb (ein Standort, 5 VLANs, Provider stellt 2001:db8:5a00::/56) will IPv6 einführen. Skizziere: a) das Adresskonzept für die 5 VLANs, b) die zwei wichtigsten Sicherheitsmaßnahmen VOR der Aktivierung, c) die Reihenfolge der Einführung mit Begründung.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: a) Aus dem /56 stehen 256 /64-Netze zur Verfügung: je VLAN ein /64, sprechend nummeriert – z. B. 2001:db8:5a00:10::/64 (VLAN 10 Verwaltung), …:20::/64 (VLAN 20 Produktion) usw.; Gateway jeweils ::1. b) (1) Firewall-Regelwerk für IPv6 spiegeln BEVOR Adressen verteilt werden – ohne NAT ist jeder Host global erreichbar, Default Deny von außen ist Pflicht; (2) RA-Guard/DHCPv6-Snooping am Switch gegen Rogue-Router-Advertisements (der IPv6-Nachfolger des Rogue-DHCP). c) Reihenfolge: Perimeter (Firewall/Router) → Server-VLAN mit statischen Adressen und DNS-AAAA-Pflege → Client-VLANs per SLAAC/DHCPv6 → Monitoring auf beiden Stacks. Begründung: Erst absichern, dann von kontrollierten zu dynamischen Bereichen – und Dual Stack so lange, bis ALLE Abhängigkeiten (Drucker, Altsoftware!) nachweislich IPv6-fähig sind.",
            },
          ],
          quiz: [
            {
              id: "imp_lf9-v6mig-1_0",
              q: "Was bedeutet Dual Stack?",
              options: [
                "IPv6-Pakete werden in IPv4-Pakete eingekapselt und durch einen Tunnel über das reine IPv4-Netz transportiert",
                "Systeme sprechen IPv4 und IPv6 parallel; Anwendungen bevorzugen IPv6 mit IPv4-Fallback",
                "Zwei Firewalls unterschiedlicher Hersteller werden hintereinander geschaltet, um die Sicherheit zu erhöhen",
                "Jedes System erhält zwei physische Netzwerkkarten, die redundant an getrennte Switches angeschlossen werden",
              ],
              correct: 1,
              explain:
                "Der Standard-Migrationsweg – Preis: doppelte Pflege von Regeln und Adresskonzept.",
            },
            {
              id: "imp_lf9-v6mig-1_1",
              q: "Wozu dient NAT64 mit DNS64?",
              options: [
                "IPv4-only-Clients erreichen darüber reine IPv6-Server",
                "IPv6-only-Clients erreichen IPv4-Server über Übersetzung",
                "Es spart knappe Adressen im riesigen IPv6-Adressraum ein",
                "Es verschlüsselt DNS-Anfragen zwischen Client und Resolver",
              ],
              correct: 1,
              explain:
                "DNS64 synthetisiert AAAA-Antworten, das NAT64-Gateway übersetzt in echtes IPv4 – Standard in Mobilfunknetzen.",
            },
            {
              id: "imp_lf9-v6mig-1_2",
              q: "Provider liefert ein /56-Präfix. Wie viele /64-Netze stecken darin?",
              options: ["8", "64", "256", "65.536"],
              correct: 2,
              explain:
                "64 − 56 = 8 Bit → 2⁸ = 256 Subnetze – IPv6-Subnetting läuft über die Präfix-Hierarchie.",
            },
            {
              id: "imp_lf9-v6mig-1_3",
              q: "Warum ist die Firewall bei IPv6 VOR der Einführung kritischer als bei IPv4?",
              options: [
                "Ist sie nicht",
                "Ohne NAT sind alle Hosts global adressierbar",
                "IPv6 hat keine Ports",
                "Weil IPv6 unverschlüsselt ist",
              ],
              correct: 1,
              explain:
                "Der Schutz kommt allein vom Regelwerk. NAT war nie ein Sicherheitsfeature, hat aber faktisch abgeschirmt – bei IPv6 fällt auch das weg.",
            },
          ],
        },
      ],
    },
    {
      id: "lf9-virt",
      title: "Virtualisierung & Container",
      lessons: [
        {
          id: "lf9-vi-1",
          title: "Virtualisierung im Unternehmen",
          content: [
            { type: "heading", value: "Hypervisor-Plattformen" },
            {
              type: "text",
              value:
                "VMware vSphere/ESXi: Marktführer Enterprise. vCenter für zentrale Verwaltung. Microsoft Hyper-V: In Windows Server integriert, kostengünstig. Proxmox VE: Open Source, KVM+LXC, Web-GUI, beliebt bei KMU. KVM: Kernel-based Virtual Machine, Linux-nativ.",
            },
            { type: "heading", value: "VM-Konzepte" },
            {
              type: "text",
              value:
                "Snapshots: Momentaufnahme einer VM (schnelle Rückkehr möglich, NICHT als Backup!). Live Migration (vMotion/Live Migration): VM ohne Downtime auf anderen Host verschieben. Resource Pools: CPU/RAM auf VM-Gruppen verteilen. Templates: Vorlagen für schnelle VM-Erstellung.",
            },
            { type: "heading", value: "Container (Docker)" },
            {
              type: "code",
              value:
                'docker pull nginx              # Image herunterladen\ndocker run -d -p 80:80 nginx   # Container starten\ndocker ps                      # Laufende Container\ndocker stop <id>               # Stoppen\ndocker-compose up -d           # Multi-Container aus YAML\n\n# Dockerfile\nFROM ubuntu:22.04\nRUN apt update && apt install -y nginx\nEXPOSE 80\nCMD ["nginx", "-g", "daemon off;"]',
            },
            {
              type: "text",
              value:
                "Container vs. VM: Container teilen sich den Host-Kernel, sind leichtgewichtiger, starten in Sekunden. VMs haben eigenes OS, stärkere Isolation. Kubernetes: Container-Orchestrierung für große Umgebungen (automatisches Scaling, Self-Healing, Rolling Updates).",
            },
            { type: "heading", value: "Übungsaufgabe: Virtualisierung planen" },
            {
              type: "text",
              value:
                "Ein Kunde betreibt 5 physische Server mit je ~15% Auslastung. Er will konsolidieren. Erkläre, welche Vorteile Virtualisierung bringt und worauf du beim Host (Hardware) achten musst.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nVorteile der Konsolidierung:\n- Bessere Auslastung (5×15% = 75% auf 1-2 Hosts)\n- Weniger Strom, Platz, Kühlung, Wartung (TCO sinkt)\n- Snapshots, einfache Backups, schnelles Recovery\n- Flexibles Bereitstellen neuer VMs (Minuten statt Tage)\n- Hardware-Unabhängigkeit, Live-Migration\n\nHost-Dimensionierung beachten:\n- CPU-Kerne: Summe der vCPUs + Reserve\n- RAM: oft der Engpass → großzügig + Reserve\n  (RAM lässt sich nicht überbuchen wie CPU)\n- Storage: schnelle SSDs/SAN, RAID für Ausfallsicherheit\n- Netzwerk: redundante NICs, ggf. 10GbE\n- WICHTIG: Host = Single Point of Failure!\n  → mind. 2 Hosts im Cluster für Hochverfügbarkeit",
            },
            { type: "heading", value: "Übungsaufgabe 2: Docker vs. VM" },
            { type: "text", value: "Docker-Container vs. VM: Architektur-Stack und Unterschiede." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nVM: App→Gast-OS→Hypervisor→Host-OS→HW\nContainer: App→Docker→Host-OS(geteilter Kernel)→HW\nVM: GB, Minuten Start, stärkere Isolation, verschiedene OS.\nContainer: MB, Sekunden Start, minimal Overhead, Microservices/CI.",
            },
            { type: "heading", value: "Beispiel 1: Konsolidierungsrechnung" },
            {
              type: "text",
              value:
                "Ausgangslage: 10 physische Server, je 15 % CPU-Auslastung, je 350 W Verbrauch. Ziel: 2 Virtualisierungshosts (je 800 W) plus Reserve. Stromersparnis: 10 × 350 W = 3.500 W gegenüber 2 × 800 W = 1.600 W → 1.900 W weniger, rund 16.600 kWh pro Jahr. Dazu entfallen 8 Wartungsverträge und Ersatzteillager – typische Argumentation in einer AP2-Projektdokumentation.",
            },
            { type: "heading", value: "Beispiel 2: Snapshot-Workflow beim Anwendungsupdate" },
            {
              type: "list",
              value: [
                "1. Wartungsfenster ankündigen, Benutzer abmelden",
                "2. Snapshot 'vor_Update_ERP_v12' erstellen (ohne RAM reicht meist)",
                "3. Update einspielen und Funktionstest durch Fachabteilung",
                "4. Erfolg: Snapshot löschen (Performance!), Doku ergänzen",
                "5. Misserfolg: Revert auf Snapshot, Fehleranalyse, neuer Termin",
              ],
            },
          ],
          quiz: [
            {
              id: "imp_lf9-vi-1_0",
              q: "Snapshots sind geeignet als?",
              options: [
                "Langzeit-Backup",
                "Archivierung",
                "RAID-Ersatz",
                "Kurzfristiger Wiederherstellungspunkt",
              ],
              correct: 3,
              explain: "Snapshots = kurzfristige Wiederherstellungspunkte, NICHT als Backup!",
            },
            {
              id: "imp_lf9-vi-1_1",
              q: "Docker-Container vs. VM?",
              options: [
                "Container bringen ein komplettes eigenes OS mit",
                "Container führen Code immer schneller aus als VMs",
                "Container teilen Host-Kernel, leichtgewichtiger",
                "Kein Unterschied, nur andere Vermarktung",
              ],
              correct: 2,
              explain: "Container teilen den Host-Kernel → leichtgewichtiger, schnellerer Start.",
            },
            {
              id: "imp_lf9-vi-1_2",
              q: "Snapshot?",
              options: [
                "Vollständiges Backup der VM auf externem Speicher",
                "Unabhängige, sofort lauffähige Kopie (Clone) der VM",
                "Zustandssicherung einer VM zu einem Zeitpunkt",
                "Bildschirmfoto der VM-Konsole zur Dokumentation",
              ],
              correct: 2,
              explain: "Snapshot: Aktueller Zustand wird gespeichert, kann zurückgesetzt werden.",
            },
            {
              id: "imp_lf9-vi-1_3",
              q: "vMotion/Live Migration?",
              options: [
                "Einen Snapshot der VM vor Änderungen erstellen",
                "Eine identische Kopie der VM auf demselben Host anlegen",
                "Eine VM samt virtueller Festplatten löschen",
                "VM im laufenden Betrieb auf anderen Host verschieben",
              ],
              correct: 3,
              explain: "VM wird ohne Downtime auf einen anderen physischen Host verschoben.",
            },
            {
              id: "imp_lf9-vi-1_4",
              q: "Thin Provisioning?",
              options: [
                "Deduplizierung",
                "Volle Festplattengröße sofort belegt",
                "Speicher wächst mit tatsächlicher Nutzung",
                "Kompression",
              ],
              correct: 2,
              explain: "Thin: Nur genutzter Speicher wird belegt, wächst bei Bedarf.",
            },
            {
              id: "imp_lf9-vi-1_5",
              q: "Container vs. VM?",
              options: [
                "Beide Techniken sind funktional völlig identisch",
                "Container = kein eigenes OS, leichter, schneller",
                "VMs sind leichter, da sie kein eigenes OS laden",
                "Container benötigen zwingend einen Typ-1-Hypervisor",
              ],
              correct: 1,
              explain: "Container teilen sich Host-Kernel, VMs haben jeweils eigenes OS.",
            },
            {
              id: "imp_lf9-vi-1_6",
              q: "Docker vs. VM: Overhead?",
              options: [
                "Beide verursachen identischen Overhead pro Instanz",
                "Container erzeugen durch die Engine mehr Overhead",
                "Container = weniger Overhead (kein eigenes OS)",
                "VM = weniger Overhead dank direktem Hardwarezugriff",
              ],
              correct: 2,
              explain: "Container teilen Host-Kernel → weniger RAM, schnellerer Start.",
            },
            {
              id: "imp_lf9-vi-1_7",
              q: "HA + Virtualisierung?",
              options: [
                "Nur in der Public Cloud möglich, im eigenen RZ nicht umsetzbar",
                "Unmöglich – virtualisierte Systeme lassen sich nicht hochverfügbar betreiben",
                "VMs können bei Host-Ausfall automatisch auf anderen Host migrieren",
                "Nur mit RAID: Hochverfügbarkeit entsteht allein durch gespiegelte Platten",
              ],
              correct: 2,
              explain: "HA: VM startet automatisch auf anderem Host (HA-Cluster).",
            },
            {
              id: "imp_lf9-vi-1_8",
              q: "Resource Pool?",
              options: [
                "Netzwerk-Pool",
                "Logische Gruppierung von CPU/RAM für VMs",
                "Backup",
                "Storage-Pool",
              ],
              correct: 1,
              explain: "Resource Pool: CPU/RAM-Ressourcen für VM-Gruppen zuteilen.",
            },
            {
              id: "imp_lf9-vi-1_9",
              q: "Template vs. Clone?",
              options: [
                "Template = laufende Kopie, die sich selbst aktualisiert",
                "Beide Begriffe bezeichnen dieselbe VM-Funktion",
                "Clone = schreibgeschützte Vorlage für neue Templates",
                "Template = Vorlage (read-only), Clone = Kopie (unabhängig)",
              ],
              correct: 3,
              explain: "Template: Unveränderliche Vorlage. Clone: Eigenständige Kopie.",
            },
            {
              id: "imp_lf9-vi-1_10",
              q: "Was unterscheidet einen Typ-1- von einem Typ-2-Hypervisor?",
              options: [
                "Typ 2 ist immer schneller, da das Wirtsbetriebssystem die Hardware besser kennt",
                "Typ 1 kann grundsätzlich nur eine einzige VM gleichzeitig ausführen",
                "Es gibt keinen Unterschied, die Typen bezeichnen nur verschiedene Hersteller",
                "Typ 1 läuft direkt auf der Hardware (bare metal), Typ 2 als Anwendung in einem Betriebssystem",
              ],
              correct: 3,
              explain:
                "Typ 1: ESXi, Hyper-V, Proxmox/KVM – für Server. Typ 2: VirtualBox, VMware Workstation – für Desktop/Tests.",
            },
            {
              id: "imp_lf9-vi-1_11",
              q: "Warum ist ein Snapshot KEIN Ersatz für ein Backup?",
              options: [
                "Snapshots sind grundsätzlich verschlüsselt und lassen sich deshalb nicht wiederherstellen",
                "Snapshots sichern ausschließlich die Netzwerkkonfiguration, nicht die virtuellen Festplatten",
                "Snapshots liegen auf demselben Speicher wie die VM und schützen nicht vor Storage-Ausfall",
                "Das Erstellen eines Snapshots dauert deutlich länger als ein vollständiges Backup",
              ],
              correct: 2,
              explain:
                "Ein Snapshot friert einen Zustand ein, hängt aber an der Original-VM und ihrem Datenspeicher. Stirbt der Storage, sind VM und Snapshot weg.",
            },
            {
              id: "imp_lf9-vi-1_12",
              q: "Was bedeutet Overcommitment beim RAM?",
              options: [
                "Den VMs wird in Summe mehr RAM zugewiesen, als der Host physisch besitzt",
                "Mehrere VMs teilen sich eine gemeinsame IP-Adresse im Netzwerk",
                "Der Host ist mit mehr RAM bestückt, als die VMs jemals benötigen",
                "Der Arbeitsspeicher der VMs wird transparent verschlüsselt",
              ],
              correct: 0,
              explain:
                "Das funktioniert, solange nicht alle VMs ihren RAM gleichzeitig voll nutzen; sonst muss der Host auslagern und alles wird langsam.",
            },
            {
              id: "imp_lf9-vi-1_13",
              q: "Was ermöglicht Live-Migration (z. B. vMotion)?",
              options: [
                "Die Beschleunigung von Backups durch parallele Sicherung mehrerer VMs",
                "Das Ändern der BIOS/UEFI-Einstellungen einer VM im laufenden Betrieb",
                "Das endgültige Löschen einer VM samt aller zugehörigen Snapshots",
                "Eine laufende VM ohne Unterbrechung auf einen anderen Host verschieben",
              ],
              correct: 3,
              explain:
                "RAM-Inhalt und Zustand werden im laufenden Betrieb übertragen – Voraussetzung u. a. gemeinsamer Storage; nötig für Wartung ohne Downtime.",
            },
            {
              id: "imp_lf9-vi-1_14",
              q: "Worin unterscheidet sich ein Container von einer VM?",
              options: [
                "Container teilen sich den Kernel des Hosts, VMs bringen ein komplettes eigenes Betriebssystem mit",
                "Container können grundsätzlich kein Netzwerk nutzen und laufen daher nur isoliert lokal",
                "VMs starten schneller als Container, da der Hypervisor das Betriebssystem vorlädt",
                "Container benötigen mehr RAM als VMs, weil jeder Container ein eigenes OS mitbringt",
              ],
              correct: 0,
              explain:
                "Container (Docker) isolieren auf Prozessebene und starten in Sekunden; VMs isolieren stärker, kosten aber je Instanz ein ganzes Gast-OS.",
            },
            {
              id: "imp_lf9-vi-1_15",
              q: "Was bedeutet Thin Provisioning?",
              options: [
                "Die Festplatte wird sofort in voller Größe reserviert",
                "Die virtuelle Festplatte belegt nur den tatsächlich beschriebenen Platz",
                "Die VM erhält gar keine virtuelle Festplatte und bootet aus dem Netz",
                "Die virtuellen Festplatten werden beim Löschen zusätzlich komprimiert",
              ],
              correct: 1,
              explain:
                "Thin spart Platz, birgt aber das Risiko des Überbuchens: Laufen alle Disks voll, ist der Datastore plötzlich erschöpft – Monitoring nötig.",
            },
            {
              id: "imp_lf9-vi-1_16",
              q: "Welcher Vorteil entsteht durch Server-Konsolidierung per Virtualisierung?",
              options: [
                "Weniger physische Server: geringere Hardware-, Strom- und Wartungskosten bei besserer Auslastung",
                "Der Stromverbrauch steigt, weil der Hypervisor zusätzliche Rechenleistung benötigt",
                "Neue Server werden langsamer bereitgestellt, da erst Hardware bestellt werden muss",
                "Jede Anwendung erhält wieder dedizierte eigene Hardware für maximale Trennung",
              ],
              correct: 0,
              explain:
                "Statt zehn schwach ausgelasteter Blechserver laufen die Workloads als VMs auf zwei gut ausgelasteten Hosts.",
            },
            {
              id: "imp_lf9-vi-1_17",
              q: "Was beschreibt P2V?",
              options: [
                "Die Migration eines physischen Servers in eine virtuelle Maschine",
                "Eine RAID-Variante mit Parität über zwei verteilte Datenträger",
                "Ein Netzwerkprotokoll für die Kommunikation zwischen Hypervisoren",
                "Ein Peer-to-Peer-Verfahren zum Streamen von Videoinhalten",
              ],
              correct: 0,
              explain:
                "Physical-to-Virtual: Das laufende System wird per Tool in eine VM überführt – typischer Schritt bei der Konsolidierung von Altservern.",
            },
            {
              id: "imp_lf9-vi-1_18",
              q: "Wozu dient ein virtueller Switch (vSwitch) auf dem Host?",
              options: [
                "Er ersetzt das SAN, indem er den Speicher der VMs zentral bereitstellt und LUNs an die Hosts verteilt",
                "Er überwacht Temperatur und Lüfter des Hosts und senkt bei hoher Last die CPU-Taktung der VMs",
                "Er verwaltet die Snapshots aller VMs und führt deren Delta-Dateien beim Löschen wieder zusammen",
                "Er verbindet die virtuellen Netzwerkkarten der VMs untereinander und mit dem physischen Netz",
              ],
              correct: 3,
              explain:
                "Der vSwitch arbeitet wie ein Layer-2-Switch in Software, inkl. VLAN-Tagging für die Trennung der VM-Netze.",
            },
            {
              id: "imp_lf9-vi-1_19",
              q: "Vor einem riskanten Update einer Anwendungs-VM ist das beste Vorgehen:",
              options: [
                "Den kompletten Virtualisierungs-Host neu starten, damit das Update sauber eingespielt werden kann",
                "Die VM vor dem Update löschen und anschließend aus der Installations-ISO komplett neu aufsetzen",
                "Das Update direkt im laufenden Betrieb einspielen, ohne vorherige Sicherung oder Testplanung",
                "Snapshot erstellen, Update durchführen, nach erfolgreichem Test den Snapshot löschen",
              ],
              correct: 3,
              explain:
                "Schlägt das Update fehl: Revert auf den Snapshot in Minuten. Wichtig: Snapshots zeitnah wieder löschen, sie kosten sonst Performance und Speicher.",
            },
          ],
        },
      ],
    },
    {
      id: "lf9-gpo",
      title: "GPOs, DNS & DHCP vertieft",
      lessons: [
        {
          id: "lf9-gpo-1",
          title: "GPOs & AD-Verwaltung",
          content: [
            { type: "heading", value: "GPO-Verarbeitung (LSDOU)" },
            {
              type: "text",
              value:
                "Local, Site, Domain, OU. Spätere GPOs überschreiben frühere. Enforced = nicht überschreibbar. Vererbung blockieren = stoppt höhere GPOs. Computer-Richtlinien beim Boot, Benutzer beim Login. Aktualisierung alle 90 Min.",
            },
            { type: "heading", value: "Praxis-Beispiele" },
            {
              type: "text",
              value:
                "Passwortrichtlinie: Min. 10 Zeichen, Komplexität, 90 Tage Ablauf. Laufwerke: Netzlaufwerk H: auf Home-Verzeichnis mappen. Software: MSI-Pakete verteilen. Firewall: Windows-Firewall per GPO konfigurieren. Bildschirmsperre: Nach 10 Min. Inaktivität.",
            },
            { type: "heading", value: "DHCP Scopes & Relay" },
            {
              type: "text",
              value:
                "Scope = IP-Bereich pro Subnetz mit Optionen: 003=Gateway, 006=DNS, 015=Domain. Reservierungen: Feste IP per MAC. Relay (ip helper-address): DHCP-Broadcasts über Router weiterleiten.",
            },
            { type: "heading", value: "Active Directory Struktur" },
            {
              type: "text",
              value:
                "AD organisiert Ressourcen hierarchisch: Gesamtstruktur (Forest) → Domäne(n) → Organisationseinheiten (OUs) → Objekte (Benutzer, Gruppen, Computer). Die Domäne ist die zentrale Verwaltungs- und Sicherheitsgrenze. OUs strukturieren innerhalb der Domäne (z.B. nach Abteilung) und sind die Ebene, auf der GPOs verknüpft werden. Domänencontroller (DC) speichern die AD-Datenbank und authentifizieren Anmeldungen (über Kerberos).",
            },
            { type: "heading", value: "Gruppenrichtlinien (GPO)" },
            {
              type: "text",
              value:
                "GPOs (Group Policy Objects) verteilen Einstellungen zentral an Benutzer und Computer. Beispiele: Passwortrichtlinien, Softwareverteilung, Laufwerksverbindungen, Desktop-Sperren, USB-Sperre. Verarbeitungsreihenfolge LSDOU: Local → Site → Domain → OU. Spätere überschreiben frühere (außer bei erzwungenen GPOs). Mit gpupdate /force werden Richtlinien sofort neu angewendet, gpresult zeigt die wirksamen Richtlinien.",
            },
            {
              type: "code",
              value:
                "# Nützliche Befehle\ngpupdate /force          # GPOs sofort anwenden\ngpresult /r              # Wirksame GPOs anzeigen\n\n# Verarbeitungsreihenfolge (LSDOU):\n# 1. Local  2. Site  3. Domain  4. OU\n# Konflikt: die ZULETZT angewendete gewinnt\n# (OU-GPO schlägt also Domain-GPO)",
            },
            { type: "heading", value: "Übungsaufgabe 1: GPO erstellen" },
            {
              type: "text",
              value:
                "GPO erstellen: Desktop-Hintergrund für OU 'Vertrieb' sperren. Schritt für Schritt.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\ngpmc.msc → Rechtsklick OU Vertrieb → GPO erstellen und verknüpfen → Bearbeiten → Benutzerkonfiguration → Administrative Vorlagen → Desktop → 'Ändern des Hintergrunds verhindern' aktivieren.\nAuf Client: gpupdate /force.\nVerarbeitung: Lokal → Standort → Domäne → OU (LSDOU).",
            },
            { type: "heading", value: "Übungsaufgabe 2: Passwort-Policy" },
            {
              type: "text",
              value: "Typische Passwort-Policy im AD. Welche Einstellungen, welche Werte?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nKennwortrichtlinien: Min. 12 Zeichen, Komplexität aktiviert, max. 90 Tage (klassische Vorgabe; das BSI rät seit 2020 vom anlasslosen periodischen Wechsel ab – moderne Policy: lange Passphrase ohne Ablaufzwang), Chronik 12 Passwörter.\nKontosperrung: 5 Fehlversuche, 30 Min Sperre.\nBSI empfiehlt: Länge > Komplexität. 14+ Zeichen Passphrase besser als 8-Zeichen-Komplex.",
            },
            { type: "heading", value: "Beispiel 2: Laufwerkszuordnung für den Vertrieb" },
            {
              type: "list",
              value: [
                "GPO 'Laufwerke Vertrieb' an OU Benutzer/Vertrieb verknüpfen",
                "Benutzerkonfiguration → Einstellungen → Windows-Einstellungen → Laufwerkszuordnungen",
                "Neu: Laufwerk V: auf \\\\srv-file01\\vertrieb, Aktion 'Aktualisieren'",
                "Zielgruppenadressierung optional auf G_Vertrieb einschränken",
                "Test: Anmeldung mit Vertriebsbenutzer, dann gpresult /r kontrollieren",
              ],
            },
          ],
          quiz: [
            {
              id: "imp_lf9-gpo-1_0",
              q: "GPO-Reihenfolge?",
              options: [
                "OU,Domain,Site,Local",
                "Site,Local,OU,Domain",
                "Local,Site,Domain,OU",
                "Domain,OU,Local,Site",
              ],
              correct: 2,
              explain: "LSDOU: Local, Site, Domain, OU.",
            },
            {
              id: "imp_lf9-gpo-1_1",
              q: "DHCP-Option 003?",
              options: ["DNS-Server", "Default Gateway", "Domain-Name", "Lease-Dauer"],
              correct: 1,
              explain: "003 = Default Gateway.",
            },
            {
              id: "imp_lf9-gpo-1_2",
              q: "GPO = ?",
              options: [
                "Grid Power Option",
                "General Purpose Output",
                "Global Protocol Order",
                "Group Policy Object (Richtlinie im AD)",
              ],
              correct: 3,
              explain: "Group Policy Object: Zentrale Richtlinien für Benutzer/Computer.",
            },
            {
              id: "imp_lf9-gpo-1_3",
              q: "GPO Vererbung?",
              options: [
                "Standort→Domäne→OU, Untergeordnete erben",
                "Gibt es nicht",
                "Nur lokal",
                "Nur für Admins",
              ],
              correct: 0,
              explain: "GPOs werden vererbt: Standort > Domäne > OU (letzte gewinnt).",
            },
            {
              id: "imp_lf9-gpo-1_4",
              q: "gpupdate /force?",
              options: [
                "GPO löschen",
                "GPO deaktivieren",
                "Neuer GPO erstellen",
                "GPO sofort aktualisieren auf Client",
              ],
              correct: 3,
              explain: "Erzwingt sofortige Aktualisierung der Gruppenrichtlinien.",
            },
            {
              id: "imp_lf9-gpo-1_5",
              q: "GPO für Passwort-Richtlinie?",
              options: ["Firewall", "Default Domain Policy", "OU-GPO", "Lokale Policy"],
              correct: 1,
              explain:
                "Passwortrichtlinien gelten domänenweit (konventionell in der Default Domain Policy); Ausnahmen nur per Fine-Grained Password Policy.",
            },
            {
              id: "imp_lf9-gpo-1_6",
              q: "RSoP = ?",
              options: [
                "Resultant Set of Policy",
                "Reset Standard",
                "Router Security",
                "Remote Server",
              ],
              correct: 0,
              explain:
                "Effektive GPO anzeigen. RSoP: Zeigt, welche GPOs effektiv auf einen User/Computer wirken.",
            },
            {
              id: "imp_lf9-gpo-1_7",
              q: "Loopback Processing?",
              options: [
                "Kein Effekt",
                "Computer-GPO wird statt User-GPO angewendet",
                "GPO deaktivieren",
                "User-GPO doppelt",
              ],
              correct: 1,
              explain: "Loopback: Bei Terminalservern sollen Computer-GPOs für alle User gelten.",
            },
            {
              id: "imp_lf9-gpo-1_8",
              q: "gpresult /r?",
              options: [
                "Erstellt eine neue Gruppenrichtlinie in der Domäne",
                "Effektive GPOs für aktuellen User/Computer anzeigen",
                "Wechselt die Domänenzugehörigkeit des Computers",
                "Löscht die zuletzt angewendete Gruppenrichtlinie",
              ],
              correct: 1,
              explain: "gpresult: Zeigt, welche GPOs tatsächlich wirken.",
            },
            {
              id: "imp_lf9-gpo-1_9",
              q: "Starter GPOs?",
              options: [
                "Leer",
                "Vorgefertigte Templates als Ausgangspunkt",
                "Admin-GPOs",
                "Pflicht-GPOs",
              ],
              correct: 1,
              explain: "Starter GPOs: Microsoft-Templates als Basis für eigene Richtlinien.",
            },
            {
              id: "imp_lf9-gpo-1_10",
              q: "In welcher Reihenfolge werden Gruppenrichtlinien verarbeitet?",
              options: [
                "OU → Domäne → Standort → Lokal",
                "Lokal → Standort → Domäne → OU (LSDOU)",
                "Zufällig bei jedem Start",
                "Alphabetisch nach GPO-Name",
              ],
              correct: 1,
              explain:
                "Später gewinnt: Eine OU-GPO überschreibt bei Konflikt die Domänen-GPO – es sei denn, diese ist erzwungen.",
            },
            {
              id: "imp_lf9-gpo-1_11",
              q: "Was bewirkt die Option 'Erzwungen' (Enforced) an einer GPO-Verknüpfung?",
              options: [
                "Die GPO setzt sich auch gegen 'Vererbung deaktivieren' und nachgelagerte GPOs durch",
                "Die GPO wird nur ein einziges Mal beim nächsten Anmelden angewendet",
                "Die GPO wird nach der nächsten Replikation automatisch gelöscht",
                "Die GPO gilt ausschließlich für Mitglieder der Administratoren-Gruppe",
              ],
              correct: 0,
              explain:
                "Enforced schlägt Blockierungen und spätere Konflikte – sinnvoll für zentrale Sicherheitsvorgaben der IT.",
            },
            {
              id: "imp_lf9-gpo-1_12",
              q: "Mit welchem Befehl wendet ein Client Gruppenrichtlinien sofort neu an?",
              options: ["chkdsk /f", "ipconfig /renew", "sfc /scannow", "gpupdate /force"],
              correct: 3,
              explain:
                "gpupdate /force holt Computer- und Benutzerrichtlinien sofort; ohne den Befehl gilt der Standardzyklus (ca. alle 90 Minuten plus Zufallsversatz).",
            },
            {
              id: "imp_lf9-gpo-1_13",
              q: "Welches Tool zeigt, welche GPOs auf einen Benutzer/Computer tatsächlich angewendet wurden?",
              options: [
                "taskmgr – der Task-Manager listet die aktiven Richtlinien-Prozesse",
                "gpresult /r bzw. der Gruppenrichtlinienergebnis-Assistent",
                "defrag – optimiert Datenträger und listet dabei angewendete GPOs auf",
                "regedit – zeigt eine fertige Ergebnisübersicht aller angewendeten GPOs",
              ],
              correct: 1,
              explain:
                "gpresult /r listet angewendete und gefilterte GPOs – das Standardwerkzeug bei der Fehlersuche.",
            },
            {
              id: "imp_lf9-gpo-1_14",
              q: "Worin unterscheiden sich Computer- und Benutzerkonfiguration einer GPO?",
              options: [
                "Benutzereinstellungen wirken ausschließlich auf Mitglieder der Gruppe der Domänen-Administratoren",
                "Computereinstellungen werden nur nachts außerhalb der Arbeitszeiten angewendet, um Störungen zu vermeiden",
                "Es gibt keinen Unterschied; beide Zweige enthalten dieselben Richtlinien in doppelter Ausführung",
                "Computereinstellungen greifen beim Systemstart für das Gerät, Benutzereinstellungen bei der Anmeldung für die Person",
              ],
              correct: 3,
              explain:
                "Beispiel: BitLocker-Vorgaben = Computer; Laufwerkszuordnung = Benutzer. Entscheidend ist, in welcher OU Computer- bzw. Benutzerobjekt liegt.",
            },
            {
              id: "imp_lf9-gpo-1_15",
              q: "Wofür dient die Sicherheitsfilterung einer GPO?",
              options: [
                "Sie verschlüsselt den Inhalt der GPO, damit nur Domänencontroller ihn lesen können",
                "Sie verhindert, dass die GPO in Systemsicherungen aufgenommen und wiederhergestellt wird",
                "Sie filtert unerwünschte E-Mails auf allen Clients der verknüpften OU",
                "Die GPO wirkt nur auf bestimmte Gruppen statt auf alle Objekte der verknüpften OU",
              ],
              correct: 3,
              explain:
                "Statt 'Authentifizierte Benutzer' trägt man z. B. nur G_Vertrieb ein – die GPO greift dann nur für diese Gruppe.",
            },
            {
              id: "imp_lf9-gpo-1_16",
              q: "Was bewirkt 'Vererbung deaktivieren' an einer OU?",
              options: [
                "GPOs übergeordneter Ebenen werden nicht mehr angewendet (außer erzwungene)",
                "Alle Benutzer- und Computerobjekte der OU werden unwiderruflich gelöscht",
                "Mit der OU selbst lassen sich anschließend keine neuen GPOs mehr verknüpfen",
                "Die OU wird in der Verwaltungskonsole für alle Administratoren unsichtbar",
              ],
              correct: 0,
              explain:
                "Vorsicht: Damit fallen auch zentrale Sicherheits-GPOs weg, sofern sie nicht Enforced sind – sparsam einsetzen.",
            },
            {
              id: "imp_lf9-gpo-1_17",
              q: "Welcher Vorteil spricht für Softwareverteilung bzw. Einstellungen per GPO statt manueller Einrichtung?",
              options: [
                "GPOs funktionieren auch ohne Domäne und ersetzen so die lokale Konfiguration in jeder Arbeitsgruppe",
                "Die manuelle Einrichtung von Arbeitsplätzen ist in Unternehmensnetzen rechtlich nicht mehr zulässig",
                "Für einen einzelnen PC ist eine GPO grundsätzlich schneller eingerichtet als jede manuelle Einstellung",
                "Einheitliche, dokumentierbare Konfiguration für hunderte Rechner ohne Turnschuh-Administration",
              ],
              correct: 3,
              explain:
                "Zentrale Vorgaben skalieren: Eine Änderung in der GPO erreicht automatisch alle betroffenen Geräte/Benutzer.",
            },
            {
              id: "imp_lf9-gpo-1_18",
              q: "Wozu dient der Loopback-Verarbeitungsmodus?",
              options: [
                "Auf bestimmten Computern (z. B. Terminalserver) gelten Benutzereinstellungen abhängig vom Computer statt vom Benutzerstandort",
                "Er beschleunigt die Anmeldung, indem Gruppenrichtlinien lokal zwischengespeichert und nicht mehr vom DC geladen werden",
                "Er prüft über die Loopback-Adresse 127.0.0.1, ob Netzwerkkarte und TCP/IP-Stack des Clients fehlerfrei arbeiten",
                "Er spiegelt die Systemfestplatte des Domänencontrollers fortlaufend auf einen zweiten Datenträger (RAID 1)",
              ],
              correct: 0,
              explain:
                "Klassiker Terminalserver/Kiosk: Egal welcher Benutzer sich anmeldet, es gelten die restriktiven Einstellungen der Computer-OU.",
            },
            {
              id: "imp_lf9-gpo-1_19",
              q: "Eine GPO mit Laufwerkszuordnung greift bei einem Benutzer nicht. Sinnvolle erste Schritte?",
              options: [
                "Das Benutzerkonto löschen und neu anlegen, damit alle Richtlinien garantiert frisch angewendet werden",
                "Den Domänencontroller sofort neu installieren, da nicht greifende GPOs auf eine defekte AD-Datenbank hindeuten",
                "gpresult /r prüfen: Liegt das Benutzerobjekt in der richtigen OU, ist die Sicherheitsfilterung korrekt, wurde gpupdate ausgeführt?",
                "Die Domäne umbenennen, damit alle Clients ihre Gruppenrichtlinien komplett neu vom DC beziehen müssen",
              ],
              correct: 2,
              explain:
                "Die drei häufigsten Ursachen: falsche OU, Filterung greift nicht (Gruppe fehlt), Richtlinie noch nicht aktualisiert.",
            },
          ],
        },
      ],
    },
    {
      id: "lf9-proxy",
      title: "Reverse Proxy & Load Balancing",
      lessons: [
        {
          id: "lf9-px-1",
          title: "Nginx als Reverse Proxy & SSL",
          content: [
            { type: "heading", value: "Was ist ein Reverse Proxy?" },
            {
              type: "text",
              value:
                "Sitzt VOR den Backend-Servern und nimmt Client-Anfragen entgegen. Clients sehen nur den Proxy, nicht die Backend-Server. Vorteile: SSL-Termination (HTTPS am Proxy entschlüsseln, Backend per HTTP), Load Balancing (Anfragen auf mehrere Server verteilen), Caching (statische Inhalte zwischenspeichern), Sicherheit (Backend nicht direkt erreichbar, WAF möglich), Kompression (gzip/brotli).",
            },
            { type: "heading", value: "Load-Balancing-Methoden" },
            {
              type: "text",
              value:
                "Round Robin (Standard): Reihum an jeden Server. Least Connections: An Server mit wenigsten aktiven Verbindungen. IP Hash: Gleiche Client-IP immer zum gleichen Server (Session Persistence für Warenkorb etc.). Weighted: Server mit unterschiedlicher Kapazität gewichten (z.B. starker Server bekommt mehr).",
            },
            { type: "heading", value: "SSL/TLS mit Let's Encrypt" },
            {
              type: "text",
              value:
                "Let's Encrypt: Kostenlose DV-Zertifikate via ACME-Protokoll. Certbot: Tool zur automatischen Zertifikatserstellung und -erneuerung. Installation: apt install certbot python3-certbot-nginx. Befehl: certbot --nginx -d example.de -d www.example.de. Automatische Erneuerung: Cron-Job (certbot renew). Zertifikatsdateien: fullchain.pem (Zertifikat + CA-Kette), privkey.pem (privater Schlüssel). Gültigkeit: 90 Tage (deshalb Auto-Renewal wichtig).",
            },
            { type: "heading", value: "Nginx Konfigurationsbeispiel" },
            {
              type: "code",
              value:
                "# /etc/nginx/sites-available/example\nserver {\n    listen 80;\n    server_name example.de;\n    return 301 https://$server_name$request_uri;\n}\nserver {\n    listen 443 ssl;\n    server_name example.de;\n    ssl_certificate /etc/letsencrypt/live/example.de/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/example.de/privkey.pem;\n    location / {\n        proxy_pass http://backend_servers;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n    }\n}\nupstream backend_servers {\n    least_conn;\n    server 10.0.0.10:8080;\n    server 10.0.0.11:8080;\n}",
            },
            { type: "heading", value: "Übungsaufgabe 1: Forward vs. Reverse Proxy" },
            {
              type: "text",
              value:
                "Unterschied Forward Proxy und Reverse Proxy? Warum Reverse Proxy vor Webserver?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nForward: Client→Proxy→Internet (Anonymisierung, Filter, Cache).\nReverse: Client→Proxy→Server (Load Balancing, SSL-Termination, Cache, Schutz).\nVorteile: Backend nicht direkt erreichbar, zentrale SSL-Terminierung, Caching, Logging.",
            },
            { type: "heading", value: "Beispiel 2: nginx als Reverse Proxy mit TLS" },
            {
              type: "code",
              value:
                "server {\n    listen 443 ssl;\n    server_name wiki.firma.de;\n\n    ssl_certificate     /etc/letsencrypt/live/wiki.firma.de/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/wiki.firma.de/privkey.pem;\n\n    location / {\n        proxy_pass http://10.0.10.21:8080;\n        proxy_set_header Host $host;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto https;\n    }\n}",
            },
            { type: "heading", value: "Übungsaufgabe 2: 502-Fehler systematisch eingrenzen" },
            {
              type: "text",
              value:
                "Nach einem Server-Update liefert wiki.firma.de den Fehler '502 Bad Gateway'. Beschreibe drei sinnvolle Diagnose-Schritte auf dem Proxy-/Backend-System und nenne je eine mögliche Ursache.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. Backend-Dienst prüfen: systemctl status wiki bzw. curl http://10.0.10.21:8080 direkt vom Proxy – läuft der Dienst nach dem Update überhaupt? (Ursache: Dienst startet nicht.)\n2. nginx-Fehlerlog lesen: journalctl -u nginx bzw. /var/log/nginx/error.log – steht dort 'connection refused' (Port/Dienst) oder 'timeout' (Firewall/Netz)?\n3. Konfiguration kontrollieren: Stimmen IP und Port in proxy_pass noch (hat sich der Port durch das Update geändert)? Danach nginx -t und reload.\nTypische Ursachen: gestoppter Backend-Dienst, geänderter Port, lokale Firewall blockiert die interne Verbindung.",
            },
          ],
          quiz: [
            {
              id: "imp_lf9-px-1_0",
              q: "SSL-Termination?",
              options: [
                "SSL wird deaktiviert",
                "Zertifikat gelöscht",
                "HTTPS endet am Proxy, Backend per HTTP",
                "SSL doppelt verschlüsselt",
              ],
              correct: 2,
              explain: "HTTPS endet am Proxy, Backend kommuniziert unverschlüsselt.",
            },
            {
              id: "imp_lf9-px-1_1",
              q: "Let's Encrypt Gültigkeit?",
              options: ["1 Jahr", "30 Tage", "90 Tage", "Unbegrenzt"],
              correct: 2,
              explain: "90 Tage, deshalb automatische Erneuerung wichtig.",
            },
            {
              id: "imp_lf9-px-1_2",
              q: "Least Connections?",
              options: [
                "Zufällig",
                "Immer der schnellste",
                "Reihum",
                "An Server mit wenigsten Verbindungen",
              ],
              correct: 3,
              explain: "Anfrage geht an den Server mit den wenigsten aktiven Verbindungen.",
            },
            {
              id: "imp_lf9-px-1_3",
              q: "IP Hash für?",
              options: ["Sicherheit", "DNS", "Performance", "Session Persistence"],
              correct: 3,
              explain:
                "Gleicher Client = gleicher Server. Gleiche Client-IP immer zum gleichen Backend (z.B. für Warenkorb/Session).",
            },
            {
              id: "imp_lf9-px-1_4",
              q: "proxy_pass in Nginx?",
              options: [
                "Anfrage an Backend-Server weiterleiten",
                "SSL aktivieren",
                "Cache leeren",
                "Proxy deaktivieren",
              ],
              correct: 0,
              explain: "proxy_pass: Leitet Client-Anfrage an den Backend-Server weiter.",
            },
            {
              id: "imp_lf9-px-1_5",
              q: "Weighted Load Balancing?",
              options: [
                "Stärkere Server bekommen mehr Anfragen",
                "Nur 1 Server",
                "Gleich verteilen",
                "Round Robin",
              ],
              correct: 0,
              explain: "Weight: Server nach Kapazität gewichten.",
            },
            {
              id: "imp_lf9-px-1_6",
              q: "X-Real-IP?",
              options: ["Server", "SSL", "Client-IP an Backend weitergeben", "Proxy-IP"],
              correct: 2,
              explain: "Sonst sieht Backend nur Proxy.",
            },
            {
              id: "imp_lf9-px-1_7",
              q: "upstream Block?",
              options: ["SSL", "Logging", "Backend-Server für Load Balancing", "Name"],
              correct: 2,
              explain: "Serverliste.",
            },
            {
              id: "imp_lf9-px-1_8",
              q: "HTTP→HTTPS?",
              options: [
                "Nur Proxy",
                "Nicht möglich",
                "return 301 https (Best Practice)",
                "Optional",
              ],
              correct: 2,
              explain: "Redirect.",
            },
            {
              id: "imp_lf9-px-1_9",
              q: "Client sieht?",
              options: ["Nichts", "Nur Proxy-IP/Domain", "Alle", "Backend"],
              correct: 1,
              explain: "Backend unsichtbar.",
            },
            {
              id: "imp_lf9-px-1_10",
              q: "Worin unterscheidet sich ein Reverse Proxy von einem Forward Proxy?",
              options: [
                "Reverse Proxys funktionieren ausschließlich mit FTP-Übertragungen, während Forward Proxys alle Protokolle wie HTTP und HTTPS unterstützen",
                "Der Forward Proxy verschlüsselt den gesamten Datenverkehr grundsätzlich immer, während ein Reverse Proxy technisch keinerlei Verschlüsselung beherrscht",
                "Der Reverse Proxy steht vor Servern und nimmt Anfragen für sie an; der Forward Proxy steht vor Clients und leitet deren Anfragen ins Internet",
                "Beide Varianten sind technisch identisch aufgebaut und unterscheiden sich nur im Produktnamen der jeweiligen Hersteller",
              ],
              correct: 2,
              explain:
                "Reverse: schützt/verteilt serverseitig (nginx vor Webservern). Forward: kontrolliert/filtert clientseitig (Unternehmensproxy ins Internet).",
            },
            {
              id: "imp_lf9-px-1_11",
              q: "Welche nginx-Direktive leitet Anfragen an einen Backend-Server weiter?",
              options: ["root", "server_name", "listen", "proxy_pass"],
              correct: 3,
              explain:
                "location / { proxy_pass http://127.0.0.1:8080; } reicht Anfragen an den internen Dienst weiter.",
            },
            {
              id: "imp_lf9-px-1_12",
              q: "Was bedeutet TLS-Terminierung am Reverse Proxy?",
              options: [
                "TLS wird für alle Verbindungen zum Server komplett verboten",
                "Der Proxy verweigert eingehende HTTPS-Verbindungen grundsätzlich",
                "Der Proxy entschlüsselt HTTPS und spricht intern mit den Backends",
                "Jedes Backend benötigt zwingend ein eigenes öffentliches Zertifikat",
              ],
              correct: 2,
              explain:
                "Zertifikatspflege an einer Stelle; intern genügt je nach Schutzbedarf HTTP oder internes TLS.",
            },
            {
              id: "imp_lf9-px-1_13",
              q: "Wofür steht der HTTP-Header X-Forwarded-For?",
              options: [
                "Er aktiviert das Zwischenspeichern von Antworten im Proxy und legt die maximale Cache-Dauer in Sekunden fest",
                "Er sorgt dafür, dass eingehende E-Mails automatisch an eine hinterlegte Weiterleitungsadresse zugestellt werden",
                "Er transportiert das TLS-Zertifikat des Servers, damit der Client die Verbindung kryptografisch prüfen kann",
                "Er übermittelt dem Backend die ursprüngliche Client-IP, die sonst durch den Proxy verdeckt wäre",
              ],
              correct: 3,
              explain:
                "Ohne ihn sähe das Backend nur die Proxy-IP – Logs und Geo-/Sicherheitsfunktionen wären wertlos.",
            },
            {
              id: "imp_lf9-px-1_14",
              q: "Was bedeutet der Fehler 502 Bad Gateway am Reverse Proxy?",
              options: [
                "Der Proxy erreicht das Backend nicht oder erhält eine ungültige Antwort",
                "Die angeforderte Seite wurde dauerhaft auf eine andere URL verschoben",
                "Der Client hat sich mit einem falschen Passwort authentifiziert",
                "Das TLS-Zertifikat des Proxys ist abgelaufen und muss erneuert werden",
              ],
              correct: 0,
              explain:
                "Typische Ursachen: Backend-Dienst gestoppt, falscher Port in proxy_pass, Firewall blockiert die interne Verbindung.",
            },
            {
              id: "imp_lf9-px-1_15",
              q: "Welches Standard-Verteilverfahren nutzt nginx beim Load Balancing über upstream?",
              options: [
                "Immer nur Server 1",
                "Alphabetisch nach Hostname",
                "Round Robin – Anfragen reihum an die Server",
                "Zufällige Ablehnung",
              ],
              correct: 2,
              explain:
                "Ohne weitere Angabe verteilt nginx reihum; Alternativen sind u. a. least_conn (wenigste Verbindungen) und ip_hash (Client bleibt am selben Server).",
            },
            {
              id: "imp_lf9-px-1_16",
              q: "Wofür wird certbot eingesetzt?",
              options: [
                "Zur zentralen Benutzerverwaltung mit Anlegen und Sperren von Linux-Konten",
                "Automatisches Ausstellen und Erneuern kostenloser Let's-Encrypt-Zertifikate",
                "Als Portscanner, der offene Dienste auf entfernten Servern aufspürt",
                "Zum Kompilieren von nginx aus dem Quellcode inklusive aller Module",
              ],
              correct: 1,
              explain:
                "certbot --nginx richtet Zertifikat samt HTTPS-Block ein; die Erneuerung läuft per Timer automatisch (Laufzeit 90 Tage).",
            },
            {
              id: "imp_lf9-px-1_17",
              q: "Was bewirkt der HSTS-Header (Strict-Transport-Security)?",
              options: [
                "Der Browser spricht die Domain künftig nur noch über HTTPS an",
                "Er blockiert die Ausführung von JavaScript auf der Seite",
                "Er deaktiviert das Setzen von Cookies durch die Domain",
                "Er beschleunigt die DNS-Auflösung durch Caching",
              ],
              correct: 0,
              explain:
                "HSTS verhindert Downgrade-Angriffe: Selbst bei Eingabe von http:// wechselt der Browser sofort auf https://.",
            },
            {
              id: "imp_lf9-px-1_18",
              q: "Warum prüft man nach Konfigurationsänderungen mit nginx -t, bevor man neu lädt?",
              options: [
                "Der Befehl startet den Webserver-Prozess vollständig neu und lädt dabei alle Module",
                "Er lädt verfügbare nginx-Updates herunter und installiert sie vor dem Neuladen",
                "Er rotiert und löscht die alten Logdateien, damit die Festplatte nicht vollläuft",
                "Der Syntaxcheck verhindert, dass ein Tippfehler den laufenden Webserver lahmlegt",
              ],
              correct: 3,
              explain:
                "nginx -t && systemctl reload nginx: Erst testen, dann unterbrechungsfrei neu laden – Reload schlägt bei Fehlern nicht den laufenden Prozess kaputt.",
            },
            {
              id: "imp_lf9-px-1_19",
              q: "Welchen Vorteil bietet ein Reverse Proxy vor mehreren internen Webanwendungen?",
              options: [
                "Die Anwendungen werden durch den zusätzlichen Zwischenschritt spürbar langsamer, was die Sicherheit erhöht",
                "Eine öffentliche IP/Domain genügt; der Proxy routet anhand von Hostnamen oder Pfaden zu den Diensten",
                "Die internen Dienste müssen dafür alle direkt aus dem Internet erreichbar sein und eigene Firewalls betreiben",
                "Jede Anwendung benötigt trotz des Proxys weiterhin eine eigene öffentliche IP-Adresse samt DNS-Eintrag",
              ],
              correct: 1,
              explain:
                "Beispiel: wiki.firma.de und shop.firma.de zeigen auf denselben Proxy, der per server_name intern unterschiedlich weiterleitet.",
            },
          ],
        },
      ],
    },
    {
      id: "lf9-cloud",
      title: "Cloud & Shared Responsibility",
      lessons: [
        {
          id: "lf9-cl-1",
          title: "Cloud-Modelle & Shared Responsibility",
          content: [
            { type: "heading", value: "Cloud Service-Modelle im Vergleich" },
            {
              type: "text",
              value:
                "IaaS (Infrastructure as a Service): Anbieter stellt virtuelle Maschinen, Storage, Netzwerk. Kunde verwaltet OS, Middleware, Anwendungen, Daten. Beispiele: AWS EC2, Azure VMs, Hetzner Cloud. PaaS (Platform as a Service): Anbieter verwaltet zusätzlich OS und Middleware. Kunde kümmert sich nur um Anwendung und Daten. Beispiele: Azure App Service, Google App Engine, Heroku. SaaS (Software as a Service): Anbieter verwaltet alles. Kunde nutzt nur die fertige Anwendung und seine Daten. Beispiele: Microsoft 365, Salesforce, Google Workspace.",
            },
            { type: "heading", value: "Shared Responsibility Model" },
            {
              type: "text",
              value:
                "Das Shared Responsibility Model definiert klar, wer für welchen Teil der Sicherheit verantwortlich ist. On-Premises: Kunde verantwortet ALLES (Gebäude, Hardware, Netzwerk, OS, Anwendung, Daten). IaaS: Anbieter = physische Sicherheit, Netzwerk-Infrastruktur, Hypervisor. Kunde = OS-Patching, Firewalls, Zugriffsrechte, Anwendungen, Datenverschlüsselung. PaaS: Anbieter übernimmt zusätzlich OS und Middleware. Kunde = Anwendungscode, Zugriffsmanagement, Daten. SaaS: Anbieter verantwortet fast alles. Kunde = Benutzerverwaltung, Zugriffsrechte, Datenklassifizierung, Konfiguration.",
            },
            { type: "heading", value: "Was der Kunde IMMER verantwortet" },
            {
              type: "text",
              value:
                "Unabhängig vom Cloud-Modell ist der Kunde IMMER verantwortlich für: 1. Eigene Daten und deren Klassifizierung. 2. Identitäts- und Zugriffsmanagement (IAM). 3. Endgeräte und Client-Sicherheit. 4. Kontokonfiguration und Berechtigungen. 5. Compliance mit geltenden Gesetzen (DSGVO, NIS-2). Merksatz: Die Cloud macht Betrieb einfacher, nicht die Verantwortung kleiner.",
            },
            { type: "heading", value: "Deployment-Modelle" },
            {
              type: "text",
              value:
                "Public Cloud: Infrastruktur wird mit anderen Kunden geteilt (Multi-Tenant). Günstig, skalierbar, aber weniger Kontrolle. Private Cloud: Dedizierte Infrastruktur für ein Unternehmen. Mehr Kontrolle und Compliance, aber teurer. Hybrid Cloud: Kombination aus On-Premises/Private + Public Cloud. Sensible Daten intern, skalierbare Workloads in der Cloud. Multi-Cloud: Mehrere Public-Cloud-Anbieter gleichzeitig (AWS + Azure). Vermeidet Vendor Lock-in, aber komplexeres Management.",
            },
            {
              type: "note",
              value:
                "Typische Prüfungsfrage: Wer ist bei IaaS für das OS-Patching verantwortlich? Antwort: Der Kunde! Der Anbieter stellt nur die VM bereit. Viele Sicherheitsvorfälle in der Cloud entstehen durch Fehlkonfiguration auf Kundenseite, nicht durch Anbieter-Fehler.",
            },
            { type: "heading", value: "Übungsaufgabe 1: IaaS/PaaS/SaaS" },
            {
              type: "text",
              value: "IaaS, PaaS, SaaS erklären mit Beispiel. Wer ist wofür verantwortlich?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nIaaS (EC2): Kunde verantwortet OS+App+Daten. PaaS (Heroku): Kunde nur App+Daten. SaaS (M365): Kunde nur Nutzung+Daten.\nFür DATEN ist der Kunde IMMER verantwortlich!",
            },
            { type: "heading", value: "Übungsaufgabe 2: Cloud-Migration" },
            { type: "text", value: "3 Migrationsstrategien für Cloud-Migration. Wann welche?" },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. Lift and Shift: 1:1 verschieben. Schnell, wenig Aufwand.\n2. Replatforming: Kleine Anpassungen (DB→Cloud-DB). Mehr Vorteile.\n3. Refactoring: Neu bauen (Microservices). Max. Cloud-Vorteile, hoher Aufwand.\nWeitere: Retain, Retire, Repurchase (SaaS).",
            },
            { type: "heading", value: "Beispiel 1: Servicemodelle im Alltag zuordnen" },
            {
              type: "list",
              value: [
                "Azure-VM mit selbst installiertem Windows Server → IaaS",
                "Azure App Service / Heroku für die eigene Webanwendung → PaaS",
                "Microsoft 365, Salesforce, Datev Unternehmen online → SaaS",
                "Eigener ESXi-Cluster im Keller → kein Cloud-Servicemodell (On-Premises)",
              ],
            },
            { type: "heading", value: "Beispiel 2: Verfügbarkeit in Ausfallzeit umrechnen" },
            {
              type: "text",
              value:
                "Jahr = 365 × 24 = 8.760 Stunden. 99,5 % → 0,5 % Ausfall = 43,8 h (fast 2 Tage). 99,9 % → 8,76 h. 99,99 % → 0,876 h ≈ 53 Minuten. Für die AP-Prüfung den Rechenweg notieren: Ausfallzeit = (100 % − Verfügbarkeit) × 8.760 h.",
            },
          ],
          quiz: [
            {
              id: "imp_lf9-cl-1_0",
              q: "IaaS: Wer patcht das OS?",
              options: ["Kunde", "Niemand", "Cloud-Anbieter", "Beide"],
              correct: 0,
              explain: "Bei IaaS ist der Kunde für OS-Patching verantwortlich.",
            },
            {
              id: "imp_lf9-cl-1_1",
              q: "SaaS: Kundenverantwortung?",
              options: ["Netzwerk", "Hardware", "OS", "Benutzerverwaltung und Zugriffsrechte"],
              correct: 3,
              explain: "Bei SaaS: Kunde verantwortet Zugriffsrechte, Daten, Konfiguration.",
            },
            {
              id: "imp_lf9-cl-1_2",
              q: "Shared Responsibility: Immer beim Kunden?",
              options: [
                "Netzwerk-Infrastruktur",
                "Hardware",
                "Daten und Identitätsmanagement",
                "Hypervisor",
              ],
              correct: 2,
              explain: "Daten und IAM liegen IMMER beim Kunden, egal welches Cloud-Modell.",
            },
            {
              id: "imp_lf9-cl-1_3",
              q: "PaaS Beispiel?",
              options: ["Microsoft 365", "Azure App Service", "Hetzner Cloud", "AWS EC2"],
              correct: 1,
              explain: "Azure App Service: Plattform bereit, Kunde deployed nur seine App.",
            },
            {
              id: "imp_lf9-cl-1_4",
              q: "Hybrid Cloud?",
              options: [
                "Nur Public",
                "Multi-Cloud",
                "Nur Private",
                "On-Prem + Public Cloud kombiniert",
              ],
              correct: 3,
              explain: "Hybrid: Sensibles intern, Skalierbares in der Cloud.",
            },
            {
              id: "imp_lf9-cl-1_5",
              q: "Häufigste Cloud-Sicherheitslücke?",
              options: [
                "Anbieter-Hack",
                "Fehlkonfiguration auf Kundenseite",
                "DDoS",
                "Physischer Einbruch",
              ],
              correct: 1,
              explain:
                "Die meisten Cloud-Incidents entstehen durch Fehlkonfiguration (offene S3-Buckets etc.).",
            },
            {
              id: "imp_lf9-cl-1_6",
              q: "Multi-Cloud-Vorteil?",
              options: ["Sicherer", "Billiger", "Einfacher", "Kein Vendor Lock-in"],
              correct: 3,
              explain: "Mehrere Anbieter = Unabhängigkeit, kein Lock-in.",
            },
            {
              id: "imp_lf9-cl-1_7",
              q: "Public Cloud: Multi-Tenant?",
              options: ["Nein", "Ja, Infrastruktur wird geteilt", "Nur bei SaaS", "Nur bei IaaS"],
              correct: 1,
              explain:
                "Multi-Tenant: Mehrere Kunden teilen physische Infrastruktur (logisch getrennt).",
            },
            {
              id: "imp_lf9-cl-1_8",
              q: "Private-Cloud-Vorteil?",
              options: ["Billiger", "Skalierbar", "Mehr Kontrolle und Compliance", "Einfacher"],
              correct: 2,
              explain:
                "Private: Volle Kontrolle, einfacher für strenge Compliance (Gesundheit, Finanzen).",
            },
            {
              id: "imp_lf9-cl-1_9",
              q: "DSGVO in der Cloud?",
              options: [
                "Nur der Anbieter",
                "Nur bei EU-Rechenzentrum",
                "Gilt nicht",
                "Kunde bleibt verantwortlich",
              ],
              correct: 3,
              explain:
                "AVV mit Anbieter nötig. Kunde ist datenschutzrechtlich Verantwortlicher, AVV mit Cloud-Anbieter Pflicht.",
            },
            {
              id: "imp_lf9-cl-1_10",
              q: "Ein Unternehmen mietet virtuelle Maschinen samt Speicher und Netz, installiert aber Betriebssystem-Updates selbst. Welches Servicemodell liegt vor?",
              options: ["On-Premises", "IaaS", "SaaS", "PaaS"],
              correct: 1,
              explain:
                "Infrastructure as a Service: Der Anbieter stellt die Infrastruktur, ab Betriebssystem aufwärts ist der Kunde verantwortlich.",
            },
            {
              id: "imp_lf9-cl-1_11",
              q: "Microsoft 365 (E-Mail, Office im Browser) ist ein typisches Beispiel für …",
              options: ["SaaS", "IaaS", "PaaS", "einen Hypervisor"],
              correct: 0,
              explain:
                "Software as a Service: fertige Anwendung, der Anbieter betreibt alles – der Kunde verwaltet nur Benutzer und Daten.",
            },
            {
              id: "imp_lf9-cl-1_12",
              q: "Was kennzeichnet PaaS?",
              options: [
                "Eine Plattform für Entwickler (Laufzeitumgebung, Datenbank), ohne dass diese Server administrieren müssen",
                "Ein lokal betriebenes Rechenzentrum ohne Cloud-Anbindung",
                "Fertige Endanwender-Software, die im Browser genutzt wird",
                "Reine Vermietung von Hardware wie Rechenleistung und Speicher",
              ],
              correct: 0,
              explain:
                "Platform as a Service: Code deployen, der Rest (OS, Patches, Skalierung) liegt beim Anbieter – z. B. Azure App Service.",
            },
            {
              id: "imp_lf9-cl-1_13",
              q: "Was beschreibt das Shared-Responsibility-Modell?",
              options: [
                "In der Cloud sind eigene Sicherheitsmaßnahmen unnötig, da das Rechenzentrum zertifiziert ist",
                "Der Cloud-Anbieter trägt allein die volle Verantwortung für sämtliche Sicherheitsaspekte",
                "Die Sicherheitsverantwortung teilt sich je nach Servicemodell zwischen Anbieter und Kunde auf",
                "Der Kunde trägt allein die gesamte Verantwortung, der Anbieter stellt nur die Hardware",
              ],
              correct: 2,
              explain:
                "Faustregel: Der Anbieter sichert die Cloud selbst (Rechenzentrum, Hardware), der Kunde seine Inhalte – Daten, Identitäten, Konfiguration. Bei IaaS zusätzlich OS und Patches.",
            },
            {
              id: "imp_lf9-cl-1_14",
              q: "Was ist eine Hybrid Cloud?",
              options: [
                "Kombination aus eigener (Private) und öffentlicher (Public) Cloud mit Datenaustausch",
                "Eine ausschließlich lokal im eigenen Rechenzentrum betriebene Lösung ohne Cloud-Anbindung",
                "Der parallele Betrieb von zwei Konten beim selben Public-Cloud-Anbieter",
                "Ein besonders leistungsfähiger Einzelserver mit SSD-Speicher und redundanten Netzteilen",
              ],
              correct: 0,
              explain:
                "Typisch: Sensible Daten bleiben on-premises/privat, Lastspitzen oder Standarddienste laufen in der Public Cloud.",
            },
            {
              id: "imp_lf9-cl-1_15",
              q: "Was bedeutet Vendor Lock-in?",
              options: [
                "Starke Abhängigkeit von einem Anbieter, weil ein Wechsel technisch/finanziell aufwendig wäre",
                "Eine Sicherheitsfunktion gegen Hacker",
                "Ein Rabattprogramm",
                "Die Verschlüsselung der Daten",
              ],
              correct: 0,
              explain:
                "Proprietäre Dienste und Datenformate erschweren die Migration; Gegenmittel: offene Standards, Container, Exit-Strategie im Vertrag.",
            },
            {
              id: "imp_lf9-cl-1_16",
              q: "Eine Verfügbarkeit von 99,9 % pro Jahr entspricht einer maximalen Ausfallzeit von etwa …",
              options: ["4 Tagen", "30 Sekunden", "8,8 Stunden", "53 Minuten"],
              correct: 2,
              explain:
                "0,1 % von 8.760 Stunden ≈ 8,76 Stunden. 99,99 % wären ≈ 53 Minuten – jede weitere Neun wird deutlich teurer.",
            },
            {
              id: "imp_lf9-cl-1_17",
              q: "Worin unterscheidet sich horizontale von vertikaler Skalierung in der Cloud?",
              options: [
                "Beides ist identisch",
                "Horizontal: mehr Instanzen; vertikal: größere Instanz",
                "Vertikal funktioniert nur on-premises",
                "Horizontal: mehr RAM; vertikal: mehr Server",
              ],
              correct: 1,
              explain:
                "Cloud-Architekturen setzen auf horizontal (Auto-Scaling von Instanzen hinter einem Load Balancer); vertikal stößt an Hardware-Grenzen.",
            },
            {
              id: "imp_lf9-cl-1_18",
              q: "Welcher kaufmännische Effekt ist typisch beim Wechsel in die Cloud?",
              options: [
                "Investitionskosten (CAPEX) werden zu laufenden Betriebskosten (OPEX)",
                "Sämtliche IT-Kosten entfallen, da der Anbieter die Infrastruktur finanziert",
                "Es entstehen ausschließlich einmalige Migrationskosten ohne laufende Gebühren",
                "Laufende Betriebskosten (OPEX) werden zu einmaligen Investitionen (CAPEX)",
              ],
              correct: 0,
              explain:
                "Statt Server zu kaufen und abzuschreiben, zahlt man nutzungsabhängig – flexibler, aber bei Dauerlast nicht automatisch günstiger (TCO rechnen!).",
            },
            {
              id: "imp_lf9-cl-1_19",
              q: "Warum ist der Speicherort der Daten (Region) aus DSGVO-Sicht relevant?",
              options: [
                "Die Region wirkt sich ausschließlich auf Latenz und Übertragungsgeschwindigkeit aus; rechtlich macht der Serverstandort keinerlei Unterschied",
                "Personenbezogene Daten dürfen die EU unter keinen Umständen verlassen; die DSGVO kennt weder Angemessenheitsbeschlüsse noch Standardvertragsklauseln als Ausnahme",
                "Die DSGVO greift nur bei lokal gespeicherten Daten; sobald Daten in einer Cloud liegen, ist allein der Anbieter verantwortlich und EU-Recht nicht mehr anwendbar",
                "Personenbezogene Daten unterliegen je nach Standort/Anbieter unterschiedlichen Rechtsräumen; EU-Regionen und AVV erleichtern die Compliance",
              ],
              correct: 3,
              explain:
                "Verantwortlich bleibt das Unternehmen: Auftragsverarbeitungsvertrag, geeignete Region und ggf. Standardvertragsklauseln bei Drittlandtransfer prüfen.",
            },
          ],
        },
      ],
    },
    {
      id: "lf9-zugriff",
      title: "Medienzugriff & Ethernet-Praxis",
      lessons: [
        {
          id: "lf9-zug-1",
          title: "Medienzugriff: CSMA/CD & CSMA/CA, Duplex und PoE",
          content: [
            {
              type: "text",
              value:
                "Wenn sich mehrere Geräte ein Übertragungsmedium teilen, braucht es Regeln: Wer darf wann senden – und was passiert, wenn zwei gleichzeitig loslegen? Genau das regeln Zugriffsverfahren. Für die Prüfung (und den Betrieb) musst du zwei Verfahren sicher auseinanderhalten: CSMA/CD im klassischen Ethernet und CSMA/CA im WLAN. Dazu gehören die Begriffe Halb-/Vollduplex, Auto-Negotiation und – als Praxisthema im 2. Lehrjahr – Power over Ethernet.",
            },
            { type: "heading", value: "CSMA/CD – Kollisionen erkennen (klassisches Ethernet)" },
            {
              type: "text",
              value:
                "CSMA/CD steht für Carrier Sense Multiple Access with Collision Detection. Übersetzt in einen Ablauf: 1. Carrier Sense – vor dem Senden lauschen, ob das Medium frei ist. 2. Multiple Access – alle Stationen teilen sich das Medium gleichberechtigt. 3. Collision Detection – während des Sendens weiter mithören. Erkennt eine Station, dass ihr Signal mit einem anderen kollidiert, bricht sie ab, sendet ein kurzes Störsignal (Jam-Signal), damit auch alle anderen die Kollision bemerken, und wartet dann eine zufällige Zeit (Backoff), bevor sie es erneut versucht. Die Wartezeit wird bei wiederholten Kollisionen immer länger gewählt (exponentieller Backoff) – so entzerrt sich der Verkehr von selbst.",
            },
            {
              type: "note",
              value:
                "Historische Einordnung – ein beliebter Prüfungs-Twist: CSMA/CD stammt aus der Zeit von Koaxialkabeln und Hubs, in der alle Stationen EINE Kollisionsdomäne teilten. Moderne Switches geben jedem Port eine eigene Kollisionsdomäne, und mit Vollduplex wird gleichzeitig gesendet UND empfangen – Kollisionen sind dann technisch ausgeschlossen, CSMA/CD ist deaktiviert. Die Frage „Warum spielt CSMA/CD heute kaum noch eine Rolle?“ beantwortet genau das: Switching + Vollduplex.",
            },
            { type: "heading", value: "CSMA/CA – Kollisionen vermeiden (WLAN, IEEE 802.11)" },
            {
              type: "text",
              value:
                "Im Funknetz funktioniert Kollisionserkennung nicht: Eine Station kann nicht gleichzeitig senden und zuverlässig mithören, und wegen begrenzter Reichweite hören sich zwei Clients oft gegenseitig nicht, obwohl beide denselben Access Point erreichen (Hidden-Station-Problem). Deshalb setzt WLAN auf Collision Avoidance – Kollisionen von vornherein unwahrscheinlich machen: Vor dem Senden wird das Medium abgehört; ist es belegt, wartet die Station das Ende der Übertragung plus eine Pflichtpause (Interframe Space) plus eine zufällige Backoff-Zeit ab. Weil der Sender eine Kollision selbst nicht bemerkt, bestätigt der Empfänger jeden Frame mit einem ACK – bleibt es aus, wird wiederholt. Gegen das Hidden-Station-Problem gibt es optional RTS/CTS: Die Station fragt kurz an (Request to Send), der Access Point erteilt die Freigabe (Clear to Send) – alle anderen halten still.",
            },
            { type: "heading", value: "Interframe Gap: die Pflichtpause zwischen Frames" },
            {
              type: "text",
              value:
                "Auch auf freiem Medium darf eine Station nicht Frame an Frame kleben: Zwischen zwei Ethernet-Frames ist eine Mindestpause vorgeschrieben – das Interframe Gap (IFG, auch Interframe Spacing). Es beträgt 96 Bitzeiten, also die Übertragungsdauer von 12 Byte. Wie lang das in Sekunden ist, hängt von der Datenrate ab: bei 100 Mbit/s sind 96 Bitzeiten 0,96 µs, bei 1 Gbit/s nur noch 96 ns. Zweck: Der Empfänger (und jede Zwischenstation) bekommt Zeit, den Frame abzuschließen und sich auf den nächsten vorzubereiten; zugleich markiert die Lücke die Frame-Grenze auf dem Medium. Prüfungsrelevant wird das IFG bei Effizienzrechnungen: Zu jedem Frame gehören neben den Nutzdaten auch Präambel + Start Frame Delimiter (8 Byte) und das IFG (12 Byte) – bei vielen kleinen Frames frisst dieser feste Overhead spürbar Durchsatz, weshalb große Frames (bis zur MTU) effizienter sind.",
            },
            { type: "heading", value: "Duplex & Auto-Negotiation" },
            {
              type: "list",
              value: [
                "Halbduplex: senden ODER empfangen, nie gleichzeitig (Hub-Ära, Funk). Kollisionsbehandlung nötig.",
                "Vollduplex: senden UND empfangen gleichzeitig über getrennte Adernpaare – Standard an Switchports, keine Kollisionen.",
                "Auto-Negotiation: Netzwerkkarte und Switchport handeln Geschwindigkeit (z. B. 1 Gbit/s) und Duplex-Modus automatisch aus.",
                "Klassiker Duplex-Mismatch: Eine Seite fest auf Vollduplex konfiguriert, die andere auf Auto – die Auto-Seite fällt auf Halbduplex zurück. Folge: Late Collisions, CRC-Fehler, gefühlt „langsames Netz“ trotz Link. In Fehlersuche-Aufgaben ist das eine Standard-Ursache.",
              ],
            },
            { type: "heading", value: "Power over Ethernet (PoE)" },
            {
              type: "text",
              value:
                "PoE liefert Strom über das Datenkabel – ideal für Access Points, IP-Telefone und Kameras an Orten ohne Steckdose. Die Stufen nach IEEE: 802.3af (PoE, bis 15,4 W am Port), 802.3at (PoE+, bis 30 W) und 802.3bt (bis 60 bzw. ca. 90–100 W). Praxisfalle: das PoE-Budget des Switches – die Summe aller Port-Leistungen ist begrenzt. Wer 24 Ports mit je 30 W plant, braucht dafür auch ein Netzteil-Budget von über 700 W, sonst schalten Ports ab.",
            },
            { type: "heading", value: "Übungsaufgabe" },
            {
              type: "text",
              value:
                "a) Beschreibe den Ablauf von CSMA/CD in vier Schritten inklusive Jam-Signal und Backoff. b) Erkläre, warum WLAN stattdessen CSMA/CA nutzt – nenne dabei das Hidden-Station-Problem und die Rolle des ACK. c) Ein Nutzer klagt über extrem langsames LAN; der Switchport zeigt Late Collisions und CRC-Fehler. Nenne die wahrscheinlichste Ursache und die Lösung. d) Ein Neubau bekommt 12 Access Points (je 12 W) und 30 IP-Telefone (je 6 W) an einem PoE-Switch. Reicht ein PoE-Budget von 300 W?",
            },
            {
              type: "solution",
              value:
                "a) 1. Medium abhören (Carrier Sense); 2. bei freiem Medium senden, dabei weiter mithören; 3. bei Kollision: Abbruch + Jam-Signal an alle; 4. zufällige, bei Wiederholung exponentiell wachsende Backoff-Zeit abwarten, dann neuer Versuch.\nb) Im Funk kann der Sender Kollisionen nicht erkennen (kein gleichzeitiges Senden/Hören) und Stationen hören einander wegen Reichweite oft nicht, obwohl beide den AP erreichen (Hidden Station). Deshalb Vermeidung statt Erkennung: warten + Zufalls-Backoff, optional RTS/CTS. Da Kollisionen trotzdem passieren können, bestätigt der Empfänger jeden Frame per ACK – ohne ACK wird erneut gesendet.\nc) Duplex-Mismatch: eine Seite fest Vollduplex, Gegenseite Auto-Negotiation → Rückfall auf Halbduplex. Lösung: beide Seiten auf Auto-Negotiation stellen (oder beide identisch fest konfigurieren).\nd) Bedarf: 12 × 12 W + 30 × 6 W = 144 + 180 = 324 W > 300 W – das Budget reicht NICHT. Optionen: Switch mit größerem PoE-Budget, zweiter Switch oder Verteilung der Verbraucher.",
            },
            {
              type: "links",
              value: [
                [
                  "Wikipedia: CSMA/CD",
                  "https://de.wikipedia.org/wiki/Carrier_Sense_Multiple_Access/Collision_Detection",
                ],
                [
                  "Wikipedia: CSMA/CA",
                  "https://de.wikipedia.org/wiki/Carrier_Sense_Multiple_Access/Collision_Avoidance",
                ],
                [
                  "Wikipedia: Power over Ethernet",
                  "https://de.wikipedia.org/wiki/Power_over_Ethernet",
                ],
              ],
            },
          ],
          quiz: [
            {
              id: "imp_lf9-zug-1_0",
              q: "Was macht eine Station bei CSMA/CD, wenn sie während des Sendens eine Kollision erkennt?",
              options: [
                "Sie sendet unverändert weiter, bis der Frame vollständig übertragen ist",
                "Abbruch, Jam-Signal senden, zufällige Backoff-Zeit abwarten, neuer Versuch",
                "Sie wechselt automatisch auf eine WLAN-Verbindung als Ausweichmedium",
                "Sie erhöht die Sendeleistung, um die Kollision zu übertönen",
              ],
              correct: 1,
              explain:
                "Abbruch + Jam-Signal informiert alle Stationen; der exponentielle Backoff entzerrt die Neuversuche.",
            },
            {
              id: "imp_lf9-zug-1_1",
              q: "Warum nutzt WLAN Collision AVOIDANCE statt DETECTION?",
              options: [
                "Weil WLAN schneller sendet, als Kollisionen entstehen können",
                "Weil Funkstationen Kollisionen beim Senden nicht zuverlässig erkennen können (u. a. Hidden Station)",
                "Weil es im Funkmedium physikalisch keine Kollisionen geben kann",
                "Weil Empfangsbestätigungen (ACKs) im WLAN-Standard verboten sind",
              ],
              correct: 1,
              explain:
                "Gleichzeitiges Senden und Mithören funktioniert im Funk nicht, und versteckte Stationen hören sich gegenseitig nicht – deshalb vermeiden statt erkennen, plus ACK-Bestätigung.",
            },
            {
              id: "imp_lf9-zug-1_2",
              q: "Warum ist CSMA/CD an modernen Switchports praktisch bedeutungslos?",
              options: [
                "Weil Switches jedem Port eine eigene Kollisionsdomäne geben und Vollduplex Kollisionen ausschließt",
                "Weil das Verfahren durch eine EU-Verordnung offiziell abgeschafft und verboten wurde",
                "Weil moderne Kupferkabel Kollisionen physikalisch nicht mehr übertragen können",
                "Weil DHCP die Kollisionsvermeidung übernimmt, indem es Sendezeiten zuteilt",
              ],
              correct: 0,
              explain:
                "Mikrosegmentierung durch den Switch + gleichzeitiges Senden/Empfangen (Vollduplex) = keine Kollisionen, CSMA/CD inaktiv.",
            },
            {
              id: "imp_lf9-zug-1_3",
              q: "Ein Access Point braucht 25 W. Welcher PoE-Standard ist mindestens nötig?",
              options: [
                "802.3af (15,4 W)",
                "802.3at / PoE+ (30 W)",
                "Gar keiner – LAN-Kabel liefern immer Strom",
                "USB-PD",
              ],
              correct: 1,
              explain:
                "802.3af reicht mit 15,4 W nicht; PoE+ (802.3at) liefert bis 30 W am Port. 802.3bt wäre überdimensioniert, aber möglich.",
            },
            {
              id: "imp_lf9-zug-1_4",
              q: "Was ist das Interframe Gap (IFG) im Ethernet?",
              options: [
                "Der Abstand zwischen zwei Switches in Metern",
                "Die vorgeschriebene Sendepause von 96 Bitzeiten zwischen zwei Frames",
                "Die maximale Framegröße (MTU)",
                "Die Zeit bis zum DHCP-Lease-Ablauf",
              ],
              correct: 1,
              explain:
                "96 Bitzeiten = 12 Byte Übertragungsdauer (bei 1 Gbit/s nur 96 ns). Die Pause trennt Frames und gibt Empfängern Verarbeitungszeit – und zählt bei Effizienzrechnungen zum festen Overhead.",
            },
          ],
        },
        {
          id: "lf9-stp-1",
          title: "Spanning Tree Protocol: Schleifenschutz in geswitchten Netzen",
          content: [
            {
              type: "text",
              value:
                "Redundante Verbindungen zwischen Switches sind gewollt (Ausfallsicherheit) – aber ohne Schutz katastrophal: Ethernet-Frames haben kein TTL-Feld, eine Schleife lässt Broadcasts endlos kreisen. Die Folgen: Broadcaststurm (das Netz erstickt in Sekunden) und MAC-Flapping (Switches lernen dieselbe Adresse ständig auf wechselnden Ports). Das Spanning Tree Protocol (STP, IEEE 802.1D) löst das Dilemma: Redundanz verkabeln, Schleifen logisch blockieren – und blockierte Wege erst im Fehlerfall aktivieren.",
            },
            { type: "heading", value: "So baut STP den Baum" },
            {
              type: "list",
              value: [
                "1. Root Bridge wählen: Alle Switches tauschen BPDUs (Bridge Protocol Data Units) aus. Root wird der Switch mit der niedrigsten Bridge-ID – sie besteht aus Priorität (Standard 32768) und MAC-Adresse. Praxisregel: Die Root gehört bewusst konfiguriert (niedrige Priorität auf den Core-Switch), sonst „gewinnt“ zufällig der älteste Access-Switch mit der kleinsten MAC.",
                "2. Pfadkosten rechnen: Jeder Switch bestimmt seinen günstigsten Weg zur Root; die Kosten hängen von der Linkgeschwindigkeit ab (schneller = günstiger, z. B. ist 10 Gbit/s günstiger als 1 Gbit/s).",
                "3. Portrollen verteilen: Root Port = der Port mit dem besten Weg Richtung Root (je Switch genau einer); Designated Port = der zuständige Port eines Segments Richtung „unten“; alles Übrige wird Alternate/Blocking – dort werden keine Nutzdaten weitergeleitet, BPDUs aber weiter beobachtet.",
                "4. Fehlerfall: Fällt ein aktiver Link aus, wird ein blockierter Port aktiviert – klassisches STP braucht dafür bis zu 30–50 Sekunden (Konvergenzzeit).",
              ],
            },
            { type: "heading", value: "Portzustände und RSTP" },
            {
              type: "text",
              value:
                "Klassisches STP kennt die Zustände Blocking → Listening → Learning → Forwarding (plus Disabled). Das moderne Rapid Spanning Tree (RSTP, IEEE 802.1w) fasst zusammen zu Discarding → Learning → Forwarding und konvergiert durch direkte Aushandlung in Sekundenbruchteilen bis wenigen Sekunden – heute der Standard. Für Endgeräte-Ports gibt es Beschleuniger und Schutz: PortFast/Edge-Port (sofort Forwarding, kein Warten beim Anstecken eines PCs) kombiniert mit BPDU Guard (Port wird abgeschaltet, wenn dort unerwartet ein Switch/BPDU auftaucht – schützt vor versehentlich angesteckten Schleifen und Mini-Switches unterm Schreibtisch).",
            },
            {
              type: "note",
              value:
                "Prüfungs- und Praxisklassiker: 1. „Warum sind an einem Switchport keine Frames unterwegs, obwohl der Link leuchtet?“ → Port ist STP-blockiert (gewollt!). 2. „Netz bricht zusammen, nachdem jemand zwei Wanddosen mit einem Patchkabel verbunden hat“ → Schleife ohne/vor STP-Reaktion, Broadcaststurm. 3. Root-Bridge-Wahl aus einer Tabelle mit Prioritäten und MAC-Adressen bestimmen: erst kleinste Priorität, bei Gleichstand kleinste MAC.",
            },
            { type: "heading", value: "Übungsaufgabe" },
            {
              type: "text",
              value:
                "Vier Switches sind im Viereck verkabelt (A–B–C–D–A). Prioritäten/MACs: A 32768/00:AA…, B 4096/00:CC…, C 32768/00:0B…, D 8192/00:DD… a) Wer wird Root Bridge und warum? b) Welche Aussage gilt für die Ports der Root Bridge? c) Was passiert Schritt für Schritt, wenn der Link B–C ausfällt (RSTP)? d) Warum gehören PortFast + BPDU Guard NICHT auf die Uplinks zwischen den Switches?",
            },
            {
              type: "solution",
              value:
                "a) B: Die Priorität schlägt alles – 4096 ist die kleinste (die MAC-Adresse entscheidet nur bei Prioritäts-Gleichstand, hier also nicht zwischen A und C nötig).\nb) Auf der Root Bridge sind ALLE Ports Designated Ports und leiten weiter – eine Root hat keinen Root Port (sie ist ja selbst das Ziel der Wege).\nc) Die angrenzenden Switches erkennen den Linkverlust sofort, RSTP handelt per Proposal/Agreement neue Rollen aus: der bisher blockierte (Alternate-)Port im Ring wird in Sekundenbruchteilen Forwarding, der Baum ist wieder vollständig – Nutzer merken idealerweise nichts.\nd) PortFast überspringt die Schutzlogik (sofort Forwarding) und BPDU Guard schaltet den Port beim Empfang einer BPDU ab – auf einem Uplink käme garantiert eine BPDU vom Nachbar-Switch an und der Uplink würde deaktiviert. Beides gehört ausschließlich auf Endgeräte-/Access-Ports.",
            },
            {
              type: "links",
              value: [
                [
                  "Wikipedia: Spanning Tree Protocol",
                  "https://de.wikipedia.org/wiki/Spanning_Tree_Protocol",
                ],
                [
                  "Wikipedia: Rapid Spanning Tree",
                  "https://de.wikipedia.org/wiki/Spanning_Tree_Protocol#Rapid_Spanning_Tree_Protocol",
                ],
              ],
            },
            {
              type: "heading",
              value: "Verwandt: Link Aggregation (LACP) – bündeln statt blockieren",
            },
            {
              type: "text",
              value:
                "STP blockiert redundante EINZELlinks – Link Aggregation macht aus mehreren physischen Leitungen EINEN logischen Link (IEEE 802.3ad/802.1AX, bei Cisco EtherChannel/Port-Channel). Ergebnis: Redundanz OHNE STP-Blockade (der Bündel-Link zählt als eine Leitung) plus mehr Gesamtdurchsatz. Das LACP-Protokoll handelt die Bündelung aus (Modi active/passive – mindestens eine Seite muss active sein). Wichtigste Prüfungsfalle: Die Lastverteilung erfolgt per Hash über Verbindungsmerkmale (MAC/IP/Port) – ein EINZELNER Datenstrom bleibt auf einem Mitgliedslink und wird nicht schneller; erst viele parallele Verbindungen nutzen die Bündelbreite. Fällt ein Link aus, verteilen die übrigen unterbrechungsfrei weiter. Typischer Einsatz: Switch-Uplinks und Server-NIC-Teaming.",
            },
          ],
          quiz: [
            {
              id: "imp_lf9-stp-1_0",
              q: "Wonach wird die Root Bridge gewählt?",
              options: [
                "Nach der höchsten Portanzahl des Switches",
                "Nach der niedrigsten Bridge-ID: erst Priorität, bei Gleichstand kleinste MAC-Adresse",
                "Nach dem neuesten Firmware-Stand im Verbund",
                "Per Zufallsverfahren bei jedem Neustart des Netzes",
              ],
              correct: 1,
              explain:
                "Priorität (Standard 32768) vor MAC – deshalb konfiguriert man die gewünschte Root bewusst mit niedriger Priorität.",
            },
            {
              id: "imp_lf9-stp-1_1",
              q: "Ein Switchport hat Link, leitet aber keine Nutzdaten weiter. Welche STP-Erklärung liegt nahe?",
              options: [
                "Das Kabel ist defekt und muss getauscht werden",
                "Der Port ist im Zustand Blocking/Discarding – ein gewollt deaktivierter Redundanzpfad",
                "Der Port hat kein VLAN und verwirft deshalb alles",
                "DHCP hat dem Port keine Adresse zugewiesen",
              ],
              correct: 1,
              explain:
                "STP blockiert redundante Pfade logisch; der Link bleibt physisch aktiv und BPDUs werden weiter beobachtet.",
            },
            {
              id: "imp_lf9-stp-1_2",
              q: "Was verbessert RSTP (802.1w) gegenüber klassischem STP?",
              options: [
                "Es verschlüsselt die BPDUs mit AES",
                "Konvergenz in Sekundenbruchteilen statt 30–50 Sekunden durch direkte Aushandlung",
                "Es macht Schleifen physikalisch unmöglich",
                "Es ersetzt MAC-Adressen durch IP-Adressen",
              ],
              correct: 1,
              explain:
                "RSTP handelt Portrollen aktiv aus (Proposal/Agreement) und kennt nur noch Discarding/Learning/Forwarding.",
            },
            {
              id: "imp_lf9-stp-1_3",
              q: "Wozu dient BPDU Guard auf Access-Ports?",
              options: [
                "Er beschleunigt den Portstart für angeschlossene PCs und Drucker deutlich",
                "Er deaktiviert den Port, sobald dort eine BPDU eintrifft – Schutz vor fremden Switches",
                "Er priorisiert Sprach- und Videopakete gegenüber normalem Datenverkehr",
                "Er verteilt die Root-Bridge-Rolle gleichmäßig auf alle Switches im Netz",
              ],
              correct: 1,
              explain:
                "Am Endgeräte-Port hat kein Switch etwas verloren: BPDU-Empfang deutet auf Mini-Switch/Schleife – Port aus, Problem eingedämmt.",
            },
            {
              id: "imp_lf9-stp-1_g_lacp",
              q: "Zwei Switches sind mit vier gebündelten Gigabit-Links (LACP) verbunden. Welche Aussage stimmt?",
              options: [
                "Ein einzelner Kopiervorgang läuft jetzt mit 4 Gbit/s",
                "STP blockiert drei der vier Leitungen dauerhaft",
                "Der Bündel-Link bietet Redundanz und verteilt viele Verbindungen per Hash – ein Einzelstrom bleibt bei 1 Gbit/s",
                "LACP funktioniert nur zwischen Geräten desselben Herstellers",
              ],
              correct: 2,
              explain:
                "802.3ad bündelt zu EINEM logischen Link (daher keine STP-Blockade); die Lastverteilung arbeitet pro Verbindung, nicht pro Paket.",
            },
          ],
        },
      ],
    },
  ],
};
