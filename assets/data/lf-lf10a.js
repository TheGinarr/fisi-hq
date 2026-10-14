window.LF_CONTENT = window.LF_CONTENT || {};
window.LF_CONTENT["lf10a"] = {
  topics: [
    {
      id: "lf10-script",
      title: "Scripting & Automatisierung",
      lessons: [
        {
          id: "lf10-sc-1",
          title: "PowerShell & Bash Scripting",
          content: [
            { type: "heading", value: "Warum Scripting?" },
            {
              type: "text",
              value:
                "Wiederkehrende Aufgaben automatisieren: Benutzer anlegen, Backups erstellen, Logs auswerten, Konfigurationen verteilen. Ein FiSi, der scripten kann, ist 10x produktiver.",
            },
            { type: "heading", value: "PowerShell (Windows)" },
            {
              type: "code",
              value:
                "# Benutzer aus CSV anlegen\nImport-Csv users.csv | ForEach-Object {\n    New-ADUser -Name $_.Name -SamAccountName $_.Login `\n      -Path 'OU=Mitarbeiter,DC=firma,DC=local' `\n      -AccountPassword (ConvertTo-SecureString $_.PW -AsPlainText -Force) `\n      -Enabled $true\n}\n\n# Dienststatus prüfen\nGet-Service | Where-Object {$_.Status -eq 'Stopped'} | Select-Object Name\n\n# Remote-Befehl\nInvoke-Command -ComputerName SRV01 -ScriptBlock { Get-Process }",
            },
            { type: "heading", value: "Bash (Linux)" },
            {
              type: "code",
              value:
                '#!/bin/bash\n# Backup-Script mit Datum\nDATE=$(date +%Y%m%d)\nBACKDIR="/backup/$DATE"\nmkdir -p "$BACKDIR"\ntar -czf "$BACKDIR/etc-backup.tar.gz" /etc/\nfind /backup -mtime +30 -delete  # Alte Backups löschen\necho "Backup abgeschlossen: $BACKDIR" | logger\n\n# Cron-Job einrichten (täglich 2 Uhr)\n# crontab -e\n# 0 2 * * * /scripts/backup.sh',
            },
            { type: "heading", value: "Fernwartung: RDP, VNC, SSH" },
            {
              type: "text",
              value:
                "RDP (Remote Desktop Protocol): Microsoft, Port 3389. Überträgt Bildschirm, Maus, Tastatur, Audio. TLS-verschlüsselt. Clipboard-Sharing und Drucker-Umleitung möglich. Verfügbar ab Windows Pro. VNC (Virtual Network Computing): Plattformunabhängig, RFB-Protokoll. Zeigt Bildschirm des entfernten Geräts an. Implementierungen: RealVNC, TightVNC, UltraVNC. Standardmäßig NICHT verschlüsselt → nur über VPN oder SSH-Tunnel nutzen! SSH (Secure Shell): Port 22, verschlüsselt, Kommandozeile. Auch für Tunneling (SSH -L: Port Forwarding). SCP/SFTP für Dateitransfer. Clientless Remote Access: Kein Client nötig, Zugriff über Browser (z.B. Apache Guacamole, HTML5-basiert).",
            },
            { type: "heading", value: "Übungsaufgabe: Bash/PowerShell" },
            {
              type: "text",
              value:
                "Finde alle .log-Dateien, die älter als 30 Tage sind, zum Archivieren. Skizziere den Ansatz.",
            },
            {
              type: "solution",
              value:
                'MUSTERLÖSUNG (Bash):\nfind /var/log -name "*.log" -mtime +30\n\n# Direkt verschieben:\nfind /var/log -name "*.log" -mtime +30 -exec mv {} /archiv/ \\;\n\n-mtime +30 = älter als 30 Tage\n-name "*.log" = nur .log-Dateien\n\nPowerShell:\nGet-ChildItem C:\\Logs -Filter *.log |\n  Where-Object {$_.LastWriteTime -lt (Get-Date).AddDays(-30)}',
            },
            { type: "heading", value: "Übungsaufgabe 2: PowerShell AD-Export" },
            {
              type: "text",
              value: "PowerShell-Skript: Alle deaktivierten AD-Benutzer in CSV exportieren.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nGet-ADUser -Filter {Enabled -eq $false} -Properties Name,SamAccountName,WhenChanged |\nSelect-Object Name,SamAccountName,WhenChanged |\nExport-Csv -Path 'Deaktiviert.csv' -NoTypeInformation -Encoding UTF8\n\nVoraussetzung: RSAT-AD-PowerShell Modul.",
            },
            { type: "heading", value: "Beispiel 1: Bash-Backupskript mit Datumsstempel" },
            {
              type: "code",
              value:
                '#!/bin/bash\n# Sichert /srv/daten als tar.gz mit Datum im Namen\nZIEL="/backup"\nDATUM=$(date +%Y-%m-%d)\ntar -czf "$ZIEL/daten_$DATUM.tar.gz" /srv/daten\n# Sicherungen älter als 14 Tage löschen\nfind "$ZIEL" -name "daten_*.tar.gz" -mtime +14 -delete\necho "Backup $DATUM abgeschlossen" >> /var/log/backup.log',
            },
            { type: "heading", value: "Beispiel 2: PowerShell-Bericht über gestoppte Dienste" },
            {
              type: "code",
              value:
                "# Alle automatisch startenden Dienste finden, die NICHT laufen\nGet-Service |\n  Where-Object { $_.StartType -eq 'Automatic' -and $_.Status -ne 'Running' } |\n  Select-Object Name, DisplayName, Status |\n  Export-Csv -Path C:\\Reports\\dienste.csv -NoTypeInformation\n# Dank Objekt-Pipeline kein Text-Parsing nötig",
            },
          ],
          quiz: [
            {
              id: "imp_lf10-sc-1_0",
              q: "PowerShell: Dienste auflisten?",
              options: ["service --list", "ls services", "Show-Services", "Get-Service"],
              correct: 3,
              explain: "Get-Service listet alle Windows-Dienste.",
            },
            {
              id: "imp_lf10-sc-1_1",
              q: "Cron: '0 2 * * *' bedeutet?",
              options: ["Alle 2 Minuten", "Täglich um 2:00 Uhr", "Monatlich am 2.", "Jeden 2. Tag"],
              correct: 1,
              explain: "Minute=0, Stunde=2, Tag=*, Monat=*, Wochentag=* → täglich 02:00.",
            },
            {
              id: "imp_lf10-sc-1_2",
              q: "PowerShell: Get-Service?",
              options: [
                "Alle Dienste und deren Status anzeigen",
                "Dienste installieren",
                "Dienst starten",
                "Firewall prüfen",
              ],
              correct: 0,
              explain: "Zeigt alle Windows-Dienste mit Status (Running/Stopped).",
            },
            {
              id: "imp_lf10-sc-1_3",
              q: "Bash: chmod +x script.sh?",
              options: [
                "Datei komprimieren",
                "Ausführungsrecht setzen",
                "Datei verschieben",
                "Datei löschen",
              ],
              correct: 1,
              explain: "chmod +x macht die Datei ausführbar.",
            },
            {
              id: "imp_lf10-sc-1_4",
              q: "PowerShell Pipeline?",
              options: [
                "Output eines Cmdlets als Input für nächstes (|)",
                "Öffnet jedes Cmdlet in einem separaten Konsolenfenster",
                "Eine Netzwerkverbindung zwischen zwei Remote-Sessions",
                "Übergibt ausschließlich reinen Text, keine Objekte",
              ],
              correct: 0,
              explain: "Get-Process | Where-Object {$_.CPU -gt 100} – Pipeline verkettet Befehle.",
            },
            {
              id: "imp_lf10-sc-1_5",
              q: "Bash: grep -r 'error' /var/log/?",
              options: [
                "Fehler beheben",
                "Rekursiv nach error in /var/log suchen",
                "Dateien erstellen",
                "Logs löschen",
              ],
              correct: 1,
              explain: "grep -r sucht rekursiv in allen Dateien nach dem Muster.",
            },
            {
              id: "imp_lf10-sc-1_6",
              q: "PowerShell: Set-ExecutionPolicy?",
              options: [
                "Passwort setzen",
                "Erlaubt/verbietet Script-Ausführung",
                "Netzwerk konfigurieren",
                "Dienst starten",
              ],
              correct: 1,
              explain: "Steuert, ob und welche PowerShell-Scripts ausgeführt werden dürfen.",
            },
            {
              id: "imp_lf10-sc-1_7",
              q: "Cron-Job?",
              options: [
                "Zeitgesteuerte wiederkehrende Aufgabe (Linux)",
                "Ein Hintergrunddienst des Windows-Taskplaners",
                "Ein einmalig manuell ausgeführter Shell-Befehl",
                "Ein Werkzeug zur Vollsicherung von Festplatten",
              ],
              correct: 0,
              explain: "crontab: Aufgaben zeitgesteuert automatisch ausführen.",
            },
            {
              id: "imp_lf10-sc-1_8",
              q: "Shebang #!/bin/bash?",
              options: [
                "Ein normaler Kommentar, den die Shell komplett ignoriert",
                "Ein Funktionsaufruf, der am Ende des Scripts ausgeführt wird",
                "Sagt dem System, welcher Interpreter das Script ausführt",
                "Deklariert die Variable bash mit dem Wert /bin",
              ],
              correct: 2,
              explain: "Shebang: Erste Zeile definiert den Interpreter.",
            },
            {
              id: "imp_lf10-sc-1_9",
              q: "PowerShell: $_ in Pipeline?",
              options: [
                "Aktuelles Objekt in der Pipeline",
                "Fehlermeldung",
                "Variable löschen",
                "Letzter Befehl",
              ],
              correct: 0,
              explain: "$_ = das aktuelle Objekt, das durch die Pipeline fließt.",
            },
            {
              id: "imp_lf10-sc-1_10",
              q: "Nach welchem Schema sind PowerShell-Cmdlets benannt?",
              options: [
                "Beliebige Namen in durchgehender Kleinschreibung",
                "Verb-Substantiv, z. B. Get-Service oder Stop-Process",
                "Nur dreibuchstabige Kürzel wie GSV oder SPR",
                "Substantiv-Verb, z. B. Service-Get oder Process-Stop",
              ],
              correct: 1,
              explain:
                "Das einheitliche Verb-Noun-Schema macht Cmdlets vorhersagbar: Get- liest, Set- ändert, New- erzeugt, Remove- löscht.",
            },
            {
              id: "imp_lf10-sc-1_11",
              q: "Was unterscheidet die PowerShell-Pipeline von der Bash-Pipeline grundlegend?",
              options: [
                "PowerShell reicht Objekte mit Eigenschaften weiter, Bash reinen Text",
                "Bash verarbeitet Pipelines grundsätzlich schneller als PowerShell",
                "Es gibt keinen Unterschied, beide Pipelines arbeiten identisch",
                "Die PowerShell kann maximal zwei Befehle zu einer Pipeline verketten",
              ],
              correct: 0,
              explain:
                "Get-Service | Where-Object Status -eq 'Running' filtert über die Objekteigenschaft Status – in Bash müsste man Textspalten parsen (z. B. mit awk).",
            },
            {
              id: "imp_lf10-sc-1_12",
              q: "Wie macht man ein Bash-Skript ausführbar und startet es aus dem aktuellen Verzeichnis?",
              options: [
                "format skript.sh",
                "skript.sh reicht immer",
                "chmod +x skript.sh und dann ./skript.sh",
                "run skript.sh",
              ],
              correct: 2,
              explain:
                "Das Ausführungsrecht setzt chmod +x; ./ ist nötig, weil das aktuelle Verzeichnis aus Sicherheitsgründen nicht im PATH liegt.",
            },
            {
              id: "imp_lf10-sc-1_13",
              q: "Wofür steht die erste Zeile #!/bin/bash in einem Skript?",
              options: [
                "Eine Fehlermeldung, die beim letzten Skriptabbruch gespeichert wurde",
                "Shebang: Sie legt fest, welcher Interpreter das Skript ausführt",
                "Die Versionsnummer des Skripts für die Änderungsverwaltung",
                "Ein gewöhnlicher Kommentar ohne jede Wirkung auf die Ausführung",
              ],
              correct: 1,
              explain:
                "Der Kernel liest den Shebang und startet den angegebenen Interpreter – so läuft das Skript auch, wenn der Benutzer eine andere Shell verwendet.",
            },
            {
              id: "imp_lf10-sc-1_14",
              q: "Was regelt die ExecutionPolicy der PowerShell?",
              options: [
                "Die Größe des Arbeitsspeichers",
                "Ob und welche Skripte ausgeführt werden dürfen",
                "Die Bildschirmfarbe der Konsole",
                "Die Geschwindigkeit der Pipeline",
              ],
              correct: 1,
              explain:
                "Z. B. RemoteSigned. Standard auf Clients ist Restricted; RemoteSigned erlaubt lokale Skripte und verlangt Signaturen für heruntergeladene – Schutz vor unbedachtem Skriptstart.",
            },
            {
              id: "imp_lf10-sc-1_15",
              q: "Welcher Unterschied besteht zwischen > und >> bei der Ausgabeumleitung?",
              options: [
                "Beide funktionieren nur mit Fehlern",
                "Beide löschen die Datei",
                "> hängt an, >> überschreibt",
                "> überschreibt die Zieldatei, >> hängt an",
              ],
              correct: 3,
              explain:
                "echo 'x' > log.txt ersetzt den Inhalt; echo 'x' >> log.txt ergänzt am Ende – wichtig bei Logdateien in Schleifen.",
            },
            {
              id: "imp_lf10-sc-1_16",
              q: "Mit welchem Befehl durchsucht man unter Linux Dateien nach einem Textmuster?",
              options: ["ping", "mv", "chmod", "grep"],
              correct: 3,
              explain:
                "grep -i 'fehler' /var/log/syslog findet Zeilen mit dem Muster; -i ignoriert Groß-/Kleinschreibung, -r durchsucht rekursiv.",
            },
            {
              id: "imp_lf10-sc-1_17",
              q: "Wie führt man einen einzelnen Befehl per SSH auf einem entfernten Server aus, ohne eine interaktive Sitzung zu öffnen?",
              options: [
                "telnet server befehl",
                "ftp server befehl",
                "ping -x server befehl",
                "ssh benutzer@server 'befehl'",
              ],
              correct: 3,
              explain:
                "ssh admin@srv01 'df -h' liefert die Ausgabe direkt zurück – Grundlage für einfache Automatisierung über mehrere Server.",
            },
            {
              id: "imp_lf10-sc-1_18",
              q: "Welche Aufgabe übernimmt der Taskplaner (Windows) bzw. cron (Linux) im Zusammenhang mit Skripten?",
              options: [
                "Zeitgesteuertes, wiederkehrendes Ausführen von Skripten ohne manuellen Anstoß",
                "Sie prüfen Skripte vor der Ausführung auf Syntaxfehler",
                "Sie übersetzen Skripte automatisch in andere Skriptsprachen",
                "Sie verschlüsseln Skripte, damit niemand den Code lesen kann",
              ],
              correct: 0,
              explain:
                "Typisch: nächtliches Backup-Skript um 02:00 Uhr – einmal eingerichtet, läuft es zuverlässig ohne Benutzereingriff.",
            },
            {
              id: "imp_lf10-sc-1_19",
              q: "Eine Variable wird in der Bash mit name=wert gesetzt. Wie greift man auf ihren Inhalt zu?",
              options: ["$name", "(name)", "name$", "%name%"],
              correct: 0,
              explain:
                "echo $name gibt den Wert aus. Wichtig: Bei der Zuweisung dürfen keine Leerzeichen um das = stehen. %name% ist die CMD-Syntax.",
            },
          ],
        },
        {
          id: "lf10-sc-2",
          title: "Konfigurationsmanagement (Ansible)",
          content: [
            { type: "heading", value: "Ansible Basics" },
            {
              type: "text",
              value:
                "Agentless (nutzt SSH), Push-basiert, YAML-Playbooks. Inventory definiert Zielserver. Modules führen Aktionen aus. Idempotent: Kann mehrfach laufen ohne Seiteneffekte.",
            },
            {
              type: "code",
              value:
                "# inventory.yml\nwebservers:\n  hosts:\n    web01: {ansible_host: 192.168.1.10}\n    web02: {ansible_host: 192.168.1.11}\n\n# playbook.yml\n- name: Webserver einrichten\n  hosts: webservers\n  become: yes\n  tasks:\n    - name: Nginx installieren\n      apt: name=nginx state=present\n    - name: Nginx starten\n      service: name=nginx state=started enabled=yes\n    - name: Website kopieren\n      copy: src=index.html dest=/var/www/html/\n\n# Ausführen:\n# ansible-playbook -i inventory.yml playbook.yml",
            },
            { type: "heading", value: "Übungsaufgabe 1: Ansible-Playbook" },
            {
              type: "text",
              value: "Ansible-Playbook: Apache auf allen Webservern installieren und starten.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n- name: Apache installieren\n  hosts: webservers\n  become: yes\n  tasks:\n    - apt: name=apache2 state=present update_cache=yes\n    - service: name=apache2 state=started enabled=yes\n\nAufruf: ansible-playbook -i hosts webserver.yml",
            },
            { type: "heading", value: "Übungsaufgabe 2: Ansible Vorteile" },
            { type: "text", value: "4 Vorteile von Ansible gegenüber manueller Konfiguration." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. Reproduzierbar (gleiches Ergebnis überall)\n2. Idempotent (beliebig oft ausführbar)\n3. Dokumentation (Playbook = Doku)\n4. Skalierbar (1 oder 1000 Server)\nZusätzlich: Versionierbar (Git), agentenlos (SSH reicht).",
            },
            { type: "heading", value: "Beispiel 1: Playbook – nginx auf allen Webservern" },
            {
              type: "code",
              value:
                "---\n- name: Webserver bereitstellen\n  hosts: webserver\n  become: true\n  tasks:\n    - name: nginx installieren\n      apt:\n        name: nginx\n        state: present\n    - name: Konfiguration ausrollen\n      copy:\n        src: files/nginx.conf\n        dest: /etc/nginx/nginx.conf\n      notify: nginx neu laden\n  handlers:\n    - name: nginx neu laden\n      service:\n        name: nginx\n        state: reloaded",
            },
            { type: "heading", value: "Beispiel 2: Inventory mit Gruppen" },
            {
              type: "code",
              value:
                "# hosts.ini\n[webserver]\nsrv-web01.firma.local\nsrv-web02.firma.local\n\n[datenbank]\nsrv-db01.firma.local\n\n[produktion:children]\nwebserver\ndatenbank",
            },
            { type: "heading", value: "Vertiefung: Ansible-Bausteine, die du lesen können musst" },
            {
              type: "text",
              value:
                "Prüfungsrelevant ist das LESEN von Playbooks: hosts (Zielgruppe aus dem Inventory), become: true (Rechte erhöhen, sudo), tasks mit Modulen (apt/yum, copy, template, service, user), Variablen ({{ var }}, Jinja2), handlers (laufen nur bei Änderung, z. B. Dienst-Reload nach Konfig-Template) und die Idempotenz-Anzeige im Lauf: ok = war schon so, changed = wurde angepasst, failed = Fehler. Das Inventory gruppiert Hosts ([webserver], [db]); ansible-playbook -i inventory site.yml --check ist der Trockenlauf (Dry Run) – Änderungen werden angezeigt, aber nicht ausgeführt. Vault verschlüsselt Secrets (nie Klartext-Passwörter ins Playbook!).",
            },
            { type: "heading", value: "Übungsaufgabe: Playbook-Ausgabe interpretieren" },
            {
              type: "text",
              value:
                "Ein Lauf über 20 Webserver endet: ok=18 changed=1 failed=1. a) Was bedeutet das konkret? b) Der failed-Host meldet 'Permission denied (publickey)'. Ursache und Behebung? c) Warum ist changed=1 bei 20 identisch konfigurierten Servern ein nützlicher Befund?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG: a) 18 Server entsprachen bereits dem Soll (Idempotenz – nichts zu tun), auf einem wurde etwas angepasst, einer schlug fehl. b) SSH-Schlüsselproblem: Der Ansible-Controlluser hat auf dem Host keinen gültigen Public Key (oder falscher remote_user) – Schlüssel verteilen (ssh-copy-id) bzw. Inventory-User korrigieren; danach Lauf wiederholen, dank Idempotenz ohne Nebenwirkungen. c) Er zeigt Konfigurationsdrift: Ein Server wich vom Soll ab (manuelle Änderung?). Nachgehen, WARUM – sonst wiederholt sich der Drift. Genau dieses Soll-Ist-Denken ist der Kern von Konfigurationsmanagement.",
            },
          ],
          quiz: [
            {
              id: "imp_lf10-sc-2_0",
              q: "Ansible kommuniziert über?",
              options: ["SSH", "API", "SNMP", "Agent"],
              correct: 0,
              explain: "Ansible ist agentless und nutzt SSH (Linux) oder WinRM (Windows).",
            },
            {
              id: "imp_lf10-sc-2_1",
              q: "Idempotent bedeutet?",
              options: [
                "Schnell",
                "Nur einmal nutzbar",
                "Mehrfach ausführbar ohne Seiteneffekte",
                "Verschlüsselt",
              ],
              correct: 2,
              explain: "Gleiche Ausführung liefert gleichen Zustand, egal wie oft.",
            },
            {
              id: "imp_lf10-sc-2_2",
              q: "Ansible Playbook Format?",
              options: ["INI", "JSON", "XML", "YAML"],
              correct: 3,
              explain: "Playbooks sind in YAML geschrieben.",
            },
            {
              id: "imp_lf10-sc-2_3",
              q: "Ansible vs. Puppet: Hauptunterschied?",
              options: [
                "Ansible = Push + agentless, Puppet = Pull + Agent",
                "Beide arbeiten technisch völlig identisch",
                "Ansible ist grundsätzlich kostenpflichtig, Puppet frei",
                "Puppet ist die deutlich neuere Entwicklung als Ansible",
              ],
              correct: 0,
              explain:
                "Ansible: Push-basiert, kein Agent. Puppet: Pull-basiert, Agent auf Zielsystemen.",
            },
            {
              id: "imp_lf10-sc-2_4",
              q: "Ansible Inventory?",
              options: ["Backup", "Liste der Zielserver/-gruppen", "Log-Datei", "Playbook"],
              correct: 1,
              explain: "Inventory definiert, auf welchen Servern das Playbook läuft.",
            },
            {
              id: "imp_lf10-sc-2_5",
              q: "Ansible Modul?",
              options: [
                "Inventory",
                "Playbook",
                "Variable",
                "Einzelne Aktion (apt, copy, service)",
              ],
              correct: 3,
              explain: "Kleinste Einheit.",
            },
            {
              id: "imp_lf10-sc-2_6",
              q: "become: yes?",
              options: ["Anderer Host", "Als Root (sudo)", "Normal", "Debug"],
              correct: 1,
              explain: "Erhöhte Rechte.",
            },
            {
              id: "imp_lf10-sc-2_7",
              q: "Terraform vs Ansible?",
              options: [
                "Gleich",
                "Terraform=Config",
                "Ansible=Prov.",
                "Terraform=Provisioning, Ansible=Config",
              ],
              correct: 3,
              explain: "Ergänzen sich.",
            },
            {
              id: "imp_lf10-sc-2_8",
              q: "Idempotent wichtig?",
              options: ["Schneller", "Sicherheit", "Mehrfach laufen ohne Schaden", "Einmal nur"],
              correct: 2,
              explain: "Gleicher Endzustand.",
            },
            {
              id: "imp_lf10-sc-2_9",
              q: "Warum bezeichnet man Ansible als 'agentless'?",
              options: [
                "Es kommt vollständig ohne Administratorrechte aus und benötigt keinerlei Zugangsdaten zu den Zielsystemen",
                "Es funktioniert ohne Netzwerkverbindung, da alle Änderungen lokal auf dem Control Node simuliert werden",
                "Es verzichtet vollständig auf Konfigurationsdateien; alle Playbooks werden interaktiv eingegeben",
                "Es benötigt keine installierte Agent-Software auf den Zielsystemen, sondern arbeitet über SSH/WinRM",
              ],
              correct: 3,
              explain:
                "Im Gegensatz zu Puppet oder Chef (Agent auf jedem Host) verbindet sich Ansible per SSH (Linux) bzw. WinRM (Windows) – geringere Einstiegshürde.",
            },
            {
              id: "imp_lf10-sc-2_10",
              q: "In welchem Format werden Ansible-Playbooks geschrieben?",
              options: ["XML ausschließlich", "Maschinencode", "Binärformat", "YAML"],
              correct: 3,
              explain:
                "YAML ist einrückungsbasiert und gut lesbar; ein Playbook beschreibt den gewünschten Zielzustand der Systeme.",
            },
            {
              id: "imp_lf10-sc-2_11",
              q: "Was enthält das Ansible-Inventory?",
              options: [
                "Die Lizenzschlüssel der Software",
                "Die Liste der verwalteten Hosts, meist in Gruppen organisiert",
                "Den Quellcode von Ansible",
                "Die Passwörter aller Benutzer im Klartext als Pflichtangabe",
              ],
              correct: 1,
              explain:
                "Im Inventory (z. B. hosts.ini) stehen Gruppen wie [webserver] mit den zugehörigen Hostnamen/IPs – Playbooks zielen auf diese Gruppen.",
            },
            {
              id: "imp_lf10-sc-2_12",
              q: "Was bedeutet Idempotenz bei Konfigurationsmanagement?",
              options: [
                "Fehler werden ignoriert",
                "Das Playbook darf nur einmal laufen",
                "Mehrfaches Ausführen führt zum selben Ergebnis",
                "Jeder Lauf installiert alles komplett neu",
              ],
              correct: 2,
              explain:
                "Nur nötige Änderungen werden vorgenommen. Ist nginx bereits installiert und die Konfiguration korrekt, meldet Ansible 'ok' statt 'changed' – sichere, wiederholbare Läufe.",
            },
            {
              id: "imp_lf10-sc-2_13",
              q: "Wofür dienen Module in Ansible?",
              options: [
                "Sie sind steckbare Hardware-Erweiterungen, die den Ansible-Server um zusätzliche Ports ergänzen",
                "Sie ersetzen das Inventory vollständig, sodass keine Hostlisten mehr gepflegt werden müssen",
                "Sie kapseln einzelne Aufgaben wie Paketinstallation (apt), Dateikopie (copy) oder Dienststeuerung (service)",
                "Sie verschlüsseln den gesamten Netzwerkverkehr zwischen Control Node und den verwalteten Systemen",
              ],
              correct: 2,
              explain:
                "Tasks rufen Module mit Parametern auf; hunderte mitgelieferte Module decken die üblichen Administrationsaufgaben ab.",
            },
            {
              id: "imp_lf10-sc-2_14",
              q: "Was leistet ansible-vault?",
              options: [
                "Ein grafisches Monitoring-Dashboard mit Kennzahlen zu allen Playbook-Läufen",
                "Verschlüsselte Ablage sensibler Daten wie Passwörter innerhalb der Ansible-Dateien",
                "Eine hostbasierte Firewall, die die verwalteten Systeme gegen Angriffe abschottet",
                "Ein Backup-Programm, das die Festplatten der Zielsysteme vollständig sichert",
              ],
              correct: 1,
              explain:
                "Secrets gehören nicht im Klartext ins Repository; vault verschlüsselt sie und entschlüsselt beim Lauf mit Passwort/Keyfile.",
            },
            {
              id: "imp_lf10-sc-2_15",
              q: "Was bewirkt die Option --check beim Playbook-Lauf?",
              options: [
                "Überspringt die Authentifizierung",
                "Löscht alle Hosts",
                "Beschleunigt den Lauf",
                "Trockenlauf: Ansible zeigt, was es ändern würde, ohne etwas zu ändern",
              ],
              correct: 3,
              explain:
                "Der Check-Mode (Dry Run) ist ideal vor Änderungen in der Produktion – erst sehen, dann ausführen.",
            },
            {
              id: "imp_lf10-sc-2_16",
              q: "Wofür sind Handler in einem Playbook gedacht?",
              options: [
                "Aktionen, die nur bei Änderungen ausgelöst werden",
                "Playbooks in einer grafischen Oberfläche anzeigen",
                "Fehlermeldungen während des Laufs unterdrücken",
                "Nicht erreichbare Hosts aus dem Inventory löschen",
              ],
              correct: 0,
              explain:
                "Beispiel: Dienst-Neustart nach Konfigurationsänderung. notify: restart nginx feuert den Handler nur, wenn der Task tatsächlich etwas geändert hat – unnötige Neustarts entfallen.",
            },
            {
              id: "imp_lf10-sc-2_17",
              q: "Was ist eine Ansible-Rolle?",
              options: [
                "Eine standardisierte, wiederverwendbare Struktur aus Tasks, Templates und Variablen für einen Zweck (z. B. 'webserver')",
                "Ein Benutzerkonto auf dem Zielsystem, mit dessen Rechten Ansible sämtliche Playbooks per SSH ausführt",
                "Eine Hardware-Komponente im Rechenzentrum, die die Ansible-Steuerbefehle an die Zielserver verteilt",
                "Ein Lizenzmodell des Herstellers, das den nutzbaren Funktionsumfang der Ansible-Installation festlegt",
              ],
              correct: 0,
              explain:
                "Rollen machen Projekte wartbar: einmal sauber gebaut, in beliebigen Playbooks wiederverwendbar.",
            },
            {
              id: "imp_lf10-sc-2_18",
              q: "Welcher Hauptvorteil ergibt sich aus Konfigurationsmanagement gegenüber manueller Einrichtung von 50 Servern?",
              options: [
                "Reproduzierbare, dokumentierte und versionierbare Konfiguration ohne Abweichungen zwischen den Servern",
                "Die Einrichtung eines einzelnen Servers geht damit in jedem Fall schneller als von Hand",
                "Hardwaredefekte werden durch die zentrale Konfigurationsverwaltung vollständig ausgeschlossen",
                "Die Planungsphase entfällt komplett, da das Werkzeug alle Entscheidungen selbst trifft",
              ],
              correct: 0,
              explain:
                "Infrastructure as Code: Der Zielzustand liegt in Git, Abweichungen (Configuration Drift) werden beim nächsten Lauf korrigiert.",
            },
            {
              id: "imp_lf10-sc-2_19",
              q: "Mit welchem Befehl führt man einen Ad-hoc-Befehl auf allen Hosts der Gruppe 'webserver' aus?",
              options: [
                "ansible-playbook --delete webserver",
                "ssh webserver ping",
                "ansible webserver -m ping",
                "apt install webserver",
              ],
              correct: 2,
              explain:
                "Ad-hoc-Aufrufe (ansible <gruppe> -m <modul>) eignen sich für schnelle Checks; für Wiederholbares schreibt man Playbooks.",
            },
          ],
        },
        {
          id: "lf10-dk-1",
          title: "Docker & Container-Grundlagen",
          content: [
            { type: "heading", value: "Was sind Container?" },
            {
              type: "text",
              value:
                "Container sind leichtgewichtige, isolierte Laufzeitumgebungen für Anwendungen. Anders als VMs teilen sie sich den Kernel des Host-Betriebssystems. Eine VM virtualisiert die komplette Hardware (Hypervisor + Gast-OS + App). Ein Container virtualisiert nur die Anwendungsumgebung (Container-Runtime + App + Libraries). Vorteil: Container starten in Sekunden (VM: Minuten), brauchen weniger RAM/Speicher und sind portabel.",
            },
            { type: "heading", value: "Docker-Grundkonzepte" },
            {
              type: "text",
              value:
                "Image: Schreibgeschütztes Template mit App + Dependencies (wie ein ISO). Container: Laufende Instanz eines Images (wie eine VM, die von einem ISO gestartet wurde). Dockerfile: Bauanleitung für ein Image (FROM ubuntu:22.04, RUN apt install nginx, COPY app /var/www, EXPOSE 80). Registry: Repository für Images (Docker Hub = öffentlich, eigene Registry = privat). Volume: Persistenter Speicher (Container-Dateisystem ist flüchtig!).",
            },
            { type: "heading", value: "Wichtige Docker-Befehle" },
            {
              type: "text",
              value:
                "docker pull nginx – Image herunterladen. docker run -d -p 8080:80 --name web nginx – Container starten (Detached, Port-Mapping 8080→80). docker ps – Laufende Container anzeigen. docker ps -a – Alle Container (auch gestoppte). docker stop web – Container stoppen. docker rm web – Container löschen. docker images – Alle lokalen Images. docker logs web – Container-Logs anzeigen. docker exec -it web bash – Shell im laufenden Container öffnen.",
            },
            { type: "heading", value: "Docker Compose" },
            {
              type: "text",
              value:
                "docker-compose.yml definiert Multi-Container-Setups: version: '3.8' / services: / web: image: nginx, ports: ['8080:80'] / db: image: mysql:8, environment: MYSQL_ROOT_PASSWORD=secret, volumes: ['db_data:/var/lib/mysql'] / volumes: db_data:. Starten: docker compose up -d. Stoppen: docker compose down. Ideal für Entwicklungsumgebungen (Webserver + Datenbank + Cache in einem Befehl).",
            },
            { type: "heading", value: "Container vs. VM" },
            {
              type: "text",
              value:
                "VM: Eigenes OS pro VM (GB-groß), Minuten zum Starten, starke Isolation (eigener Kernel). Container: Teilt Host-Kernel (MB-groß), Sekunden zum Starten, leichtere Isolation (Namespaces/Cgroups). Wann VM: Verschiedene OS nötig, maximale Isolation (Sicherheit), Legacy-Anwendungen. Wann Container: Microservices, CI/CD-Pipelines, identische Dev/Prod-Umgebungen, schnelle Skalierung.",
            },
            { type: "heading", value: "Beispiel 1: Webserver in 10 Sekunden" },
            {
              type: "text",
              value:
                "docker run -d -p 80:80 nginx. Fertig. nginx läuft, erreichbar unter http://localhost. Kein Apache installieren, kein Konfigurieren. Eigene Webseite einbinden: docker run -d -p 80:80 -v /meine/seite:/usr/share/nginx/html nginx. Das Volume mappt den lokalen Ordner in den Container.",
            },
            { type: "heading", value: "Beispiel 2: WordPress mit Docker Compose" },
            {
              type: "text",
              value:
                "docker-compose.yml: WordPress + MySQL mit einem Befehl. WordPress-Container verbindet sich automatisch mit dem MySQL-Container über das Docker-Netzwerk. Datenbank-Daten werden in einem Volume persistiert → bleiben auch bei Container-Neustart erhalten. docker compose up -d → WordPress unter http://localhost:8080 erreichbar. Ideal für schnelle Test-/Demo-Umgebungen.",
            },
            { type: "heading", value: "Beispiel 3: Container im Unternehmen" },
            {
              type: "text",
              value:
                "IT-Dienstleister deployt Monitoring-Stack für Kunden: Grafana (Dashboard) + Prometheus (Metriken) + Node Exporter (Agents). Alles als Docker Compose. Deployment auf neuem Server: 1) Docker installieren (apt install docker.io). 2) docker-compose.yml kopieren. 3) docker compose up -d. In 5 Minuten läuft das komplette Monitoring. Updates: docker compose pull + docker compose up -d.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Container vs. VM Vergleichstabelle" },
            {
              type: "text",
              value:
                "Erstelle eine Vergleichstabelle mit mindestens 6 Kriterien, in der du Container und virtuelle Maschinen gegenüberstellst. Nenne anschließend je 2 konkrete Einsatzszenarien, bei denen Container bzw. VMs die bessere Wahl sind.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nKriterium          | Container              | Virtuelle Maschine\n--------------------|------------------------|------------------------\nIsolation           | Prozess-Isolation       | Vollständige HW-Isolation\n                    | (shared Kernel)         | (eigener Kernel+OS)\nStartzeit           | Sekunden                | Minuten\nSpeicherbedarf      | MB (nur App+Libs)       | GB (volles OS)\nPerformance         | Near-Native             | Overhead durch Hypervisor\nPortabilität        | Sehr hoch (Image)       | Mittel (VM-Format abhängig)\nSicherheit          | Geringer (shared Kernel)| Höher (eigener Kernel)\nBetriebssystem      | Nur Linux-basiert*      | Beliebig (Win, Linux, BSD)\nVerwaltung          | Docker/Kubernetes       | vSphere, Hyper-V, Proxmox\n\n*Windows-Container existieren, sind aber weniger verbreitet\n\nContainer besser bei:\n1) Microservice-Architektur (50 kleine Services unabhängig deployen/skalieren)\n2) CI/CD-Pipeline (Build/Test in identischen Umgebungen, schnell hoch/runterfahren)\n\nVMs besser bei:\n1) Windows-Server neben Linux-Server auf gleicher Hardware (unterschiedliche Kernel)\n2) Maximale Sicherheitsisolation (z.B. verschiedene Kunden auf einem Host → kein shared Kernel)",
            },
            { type: "heading", value: "Übungsaufgabe 2: Docker Compose schreiben" },
            {
              type: "text",
              value:
                "Schreibe eine docker-compose.yml für folgendes Setup: Ein nginx-Webserver (Port 8080 extern → 80 intern), eine MySQL-Datenbank (Port 3306 nur intern, root-Passwort: 'geheim123'), und ein phpMyAdmin (Port 8081 extern → 80 intern, verbunden mit der MySQL-DB). Die MySQL-Daten sollen persistent sein.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nversion: '3.8'\n\nservices:\n  web:\n    image: nginx:latest\n    ports:\n      - '8080:80'\n    restart: unless-stopped\n\n  db:\n    image: mysql:8\n    environment:\n      MYSQL_ROOT_PASSWORD: geheim123\n      MYSQL_DATABASE: webapp\n    volumes:\n      - db_data:/var/lib/mysql\n    restart: unless-stopped\n    # Kein 'ports:' → nur intern erreichbar!\n\n  phpmyadmin:\n    image: phpmyadmin:latest\n    ports:\n      - '8081:80'\n    environment:\n      PMA_HOST: db\n      PMA_PORT: 3306\n    depends_on:\n      - db\n    restart: unless-stopped\n\nvolumes:\n  db_data:\n\nErklärung:\n- db hat kein 'ports:' → nur intern im Docker-Netzwerk erreichbar (Sicherheit!)\n- PMA_HOST: db → phpMyAdmin verbindet sich über den Service-Namen 'db'\n- db_data Volume → Datenbank überlebt docker compose down\n- depends_on → phpMyAdmin startet erst nach db\n- Starten: docker compose up -d\n- Stoppen: docker compose down (Daten bleiben im Volume)",
            },
            { type: "heading", value: "Übungsaufgabe 3: Docker-Troubleshooting" },
            {
              type: "text",
              value:
                "Dein Container 'webapp' startet, ist aber nach 5 Sekunden wieder gestoppt (Status: Exited). Beschreibe mindestens 4 Schritte zur Fehlersuche und nenne 3 häufige Ursachen für sofortiges Container-Beenden.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nFehlersuche:\n1) docker logs webapp → Zeigt stdout/stderr des Containers. Meist steht hier der Fehler (z.B. 'Permission denied', 'Config not found', 'Port already in use').\n2) docker inspect webapp → Zeigt Exit-Code. Exit 0 = normal beendet (Programm ist fertig). Exit 1 = Fehler. Exit 137 = OOM Killed (zu wenig RAM).\n3) docker run -it image /bin/bash → Container interaktiv starten, um manuell zu debuggen.\n4) docker events --since 5m → Docker-Events der letzten 5 Minuten prüfen.\n5) Dockerfile prüfen → CMD/ENTRYPOINT korrekt? Arbeitsverzeichnis vorhanden?\n\nHäufige Ursachen:\n1) Kein Foreground-Prozess: Der Hauptprozess beendet sich sofort (z.B. Script ohne Endlosschleife, Dienst startet im Hintergrund statt Vordergrund). Container leben nur, solange der PID-1-Prozess läuft!\n2) Fehlende Config/Umgebungsvariable: App startet nicht ohne z.B. DB_HOST → Fehler → Exit.\n3) Fehlende Datei/Volume: App erwartet /app/config.yml, die nicht im Image/Volume liegt.\n4) Port-Konflikt: Anderer Container nutzt bereits den gleichen Port.",
            },
          ],
          quiz: [
            {
              id: "imp_lf10-dk-1_0",
              q: "Was ist der Hauptunterschied zwischen Container und VM?",
              options: [
                "Container teilen den Host-Kernel, VMs haben eigenes OS",
                "Container sind durch stärkere Isolation immer sicherer",
                "VMs starten schneller und benötigen weniger Ressourcen",
                "Es gibt keinen Unterschied zwischen beiden Techniken",
              ],
              correct: 0,
              explain:
                "Container: Shared Kernel, leichtgewichtig. VM: Eigenes OS, schwergewichtig, stärkere Isolation.",
            },
            {
              id: "imp_lf10-dk-1_1",
              q: "Was ist ein Docker Image?",
              options: [
                "Schreibgeschütztes Template mit App und allen Abhängigkeiten",
                "Eine Sicherungskopie der Container-Daten für den Restore",
                "Eine virtuelle Festplattendatei (VMDK/VHD) einer VM",
                "Eine laufende Container-Instanz mit beschreibbarer Schicht",
              ],
              correct: 0,
              explain: "Image = Bauplan. Container = laufende Instanz des Images.",
            },
            {
              id: "imp_lf10-dk-1_2",
              q: "Welcher Befehl erstellt und startet einen NEUEN Container aus einem Image?",
              options: ["docker run", "docker create", "docker init", "docker start"],
              correct: 0,
              explain:
                "docker run erstellt und startet einen neuen Container. docker start startet nur einen bereits vorhandenen, gestoppten Container.",
            },
            {
              id: "imp_lf10-dk-1_3",
              q: "Was macht docker ps?",
              options: [
                "Laufende Container anzeigen",
                "Container löschen",
                "Images auflisten",
                "Docker updaten",
              ],
              correct: 0,
              explain: "docker ps: Laufende Container. docker ps -a: Alle (auch gestoppte).",
            },
            {
              id: "imp_lf10-dk-1_4",
              q: "Was ist ein Dockerfile?",
              options: [
                "Konfigurationsdatei zur Laufzeit-Steuerung des Daemons",
                "Textdatei mit Anweisungen zum Bauen eines Docker Images",
                "Ein komprimiertes Backup eines laufenden Containers",
                "Die Log-Datei mit den Ausgaben eines Containers",
              ],
              correct: 1,
              explain: "Dockerfile: FROM, RUN, COPY, EXPOSE, CMD – Schritt für Schritt zum Image.",
            },
            {
              id: "imp_lf10-dk-1_5",
              q: "Was ist Docker Compose?",
              options: [
                "Eine grafische Benutzeroberfläche zur Verwaltung einzelner Container per Mausklick",
                "Tool zum Definieren und Starten von Multi-Container-Anwendungen per YAML",
                "Ein Monitoring-Werkzeug, das CPU- und RAM-Verbrauch laufender Container anzeigt",
                "Eine eigenständige Container-Engine, die Docker vollständig ersetzt",
              ],
              correct: 1,
              explain:
                "Docker Compose: docker-compose.yml beschreibt mehrere Services, Netzwerke, Volumes.",
            },
            {
              id: "imp_lf10-dk-1_6",
              q: "Warum braucht man Volumes?",
              options: [
                "Für CPU-Leistung",
                "Für Sicherheit",
                "Container-Dateisystem ist flüchtig",
                "Für Netzwerk",
              ],
              correct: 2,
              explain:
                "Volumes persistieren Daten über Container-Neustarts. Ohne Volume: Daten weg, wenn der Container gelöscht wird. Volume = persistenter Speicher außerhalb des Containers.",
            },
            {
              id: "imp_lf10-dk-1_7",
              q: "Was macht -p 8080:80 bei docker run?",
              options: [
                "Host-Port 8080 auf Container-Port 80 mappen",
                "Port 80 auf 8080 ändern",
                "Ports anzeigen",
                "Port 8080 blockieren",
              ],
              correct: 0,
              explain: "Port-Mapping: Zugriff auf Host:8080 wird an Container:80 weitergeleitet.",
            },
            {
              id: "imp_lf10-dk-1_8",
              q: "Was ist Docker Hub?",
              options: [
                "Ein Docker-Plugin",
                "Öffentliche Registry für Docker Images",
                "Ein Netzwerk-Hub",
                "Ein VPN",
              ],
              correct: 1,
              explain:
                "Wie GitHub für Code. Docker Hub: Öffentliches Repository. Millionen fertige Images (nginx, mysql, ubuntu, etc.).",
            },
            {
              id: "imp_lf10-dk-1_9",
              q: "Was macht docker exec -it container bash?",
              options: [
                "Die Logs des Containers fortlaufend anzeigen",
                "Den Container stoppen und neu starten",
                "Interaktive Shell im laufenden Container öffnen",
                "Den Container samt Volumes endgültig löschen",
              ],
              correct: 2,
              explain: "-i=interaktiv, -t=Terminal. Öffnet eine Bash-Shell IM laufenden Container.",
            },
            {
              id: "imp_lf10-dk-1_10",
              q: "Was ist der Unterschied zwischen Image und Container?",
              options: [
                "Das Image ist die unveränderliche Vorlage, der Container eine laufende Instanz davon",
                "Beide Begriffe bezeichnen dasselbe Konzept und sind frei austauschbar",
                "Images sind die laufenden Prozesse, Container die auf der Platte liegenden Dateien",
                "Der Container ist die schreibgeschützte Vorlage, aus der Images gestartet werden",
              ],
              correct: 0,
              explain:
                "Aus einem Image lassen sich beliebig viele Container starten – wie Klasse und Objekt in der Programmierung.",
            },
            {
              id: "imp_lf10-dk-1_11",
              q: "Welche Datei beschreibt, wie ein Docker-Image gebaut wird?",
              options: ["image.conf", "makefile.bin", "Dockerfile", "docker.txt"],
              correct: 2,
              explain:
                "Das Dockerfile enthält Anweisungen wie FROM (Basisimage), COPY, RUN und CMD; docker build erzeugt daraus das Image.",
            },
            {
              id: "imp_lf10-dk-1_12",
              q: "Mit welchem Befehl listet man laufende Container auf?",
              options: ["docker ps", "docker run", "docker images", "docker rmi"],
              correct: 0,
              explain:
                "docker ps zeigt laufende, docker ps -a auch beendete Container. docker images listet dagegen die lokalen Images.",
            },
            {
              id: "imp_lf10-dk-1_13",
              q: "Warum verwendet man Volumes?",
              options: [
                "Daten bleiben erhalten, auch wenn der Container gelöscht oder neu erstellt wird",
                "Sie verkürzen die Startzeit von Containern durch vorgeladene Dateisysteme",
                "Sie verschlüsseln das zugrunde liegende Image gegen unbefugten Zugriff",
                "Sie werden nur für Windows-Container benötigt, Linux-Container speichern nativ",
              ],
              correct: 0,
              explain:
                "Container sind vergänglich; persistente Daten (z. B. die Datenbankdateien) gehören in Volumes außerhalb des Container-Dateisystems.",
            },
            {
              id: "imp_lf10-dk-1_14",
              q: "Was bewirkt docker run -p 8080:80 nginx?",
              options: [
                "Port 80 des Hosts wird auf 8080 des Containers geleitet",
                "Port 8080 des Hosts wird auf Port 80 des Containers weitergeleitet",
                "nginx wird auf Port 8080 im Container gestartet",
                "Der Container erhält zwei IP-Adressen",
              ],
              correct: 1,
              explain:
                "Schema -p HOST:CONTAINER. Der Webserver lauscht im Container auf 80, erreichbar ist er über http://host:8080.",
            },
            {
              id: "imp_lf10-dk-1_15",
              q: "Welchen Vorteil bietet ein Multi-Stage-Build im Dockerfile?",
              options: [
                "Beim Deployment werden automatisch mehrere Container parallel gestartet, was den Durchsatz erhöht",
                "Der Build dauert grundsätzlich länger und das fertige Image wird durch die Stages deutlich größer",
                "Das Image wird kleiner gebaut, enthält weniger Angriffsfläche und keine Build-Werkzeuge im Endprodukt",
                "Multi-Stage-Builds funktionieren ausschließlich mit Windows-Containern und Hyper-V-Isolation",
              ],
              correct: 2,
              explain:
                "Im ersten Stage wird kompiliert (mit Compiler/SDK), ins finale Image wandert nur das fertige Artefakt – kleiner, schneller verteilt, weniger Angriffsfläche.",
            },
            {
              id: "imp_lf10-dk-1_16",
              q: "Wofür dient Docker Compose?",
              options: [
                "Docker-Images verlustfrei komprimieren, um Speicherplatz in der Registry zu sparen",
                "Container physisch auf mehrere Rechenzentren verteilen und georedundant spiegeln",
                "Bestehende Container automatisiert in vollwertige virtuelle Maschinen umwandeln",
                "Mehrere zusammengehörige Container (z. B. Web + DB) deklarativ in einer YAML-Datei definieren und gemeinsam starten",
              ],
              correct: 3,
              explain:
                "docker compose up -d startet den gesamten Stack aus der compose.yaml – reproduzierbar statt vieler einzelner run-Befehle.",
            },
            {
              id: "imp_lf10-dk-1_17",
              q: "Warum bauen Docker-Images schichtweise (Layer) auf?",
              options: [
                "Layer dienen nur der übersichtlicheren Anzeige im Registry-Frontend",
                "Layer verhindern jede nachträgliche Änderung am laufenden Container",
                "Jede einzelne Schicht benötigt eine eigene, separat erworbene Lizenz",
                "Unveränderte Schichten werden zwischengespeichert und wiederverwendet",
              ],
              correct: 3,
              explain:
                "Builds und Downloads werden schneller. Ändert sich nur der Anwendungscode, werden Basis-Layer (OS, Laufzeit) aus dem Cache genommen statt neu übertragen.",
            },
            {
              id: "imp_lf10-dk-1_18",
              q: "Worin liegt der wichtigste Unterschied zwischen Container und virtueller Maschine?",
              options: [
                "VMs starten deutlich schneller als Container, da sie keinen eigenen Kernel laden müssen",
                "Container sind durch die stärkere Isolation grundsätzlich sicherer als virtuelle Maschinen",
                "Container benötigen erheblich mehr RAM, weil jeder Container ein eigenes Betriebssystem mitbringt",
                "Container teilen sich den Host-Kernel, VMs virtualisieren komplette Rechner mit eigenem Betriebssystem",
              ],
              correct: 3,
              explain:
                "Deshalb starten Container in Sekunden und sind ressourcenschonend – isolieren aber schwächer als VMs.",
            },
            {
              id: "imp_lf10-dk-1_19",
              q: "Mit welchem Befehl sieht man die Ausgaben (Logs) eines Containers?",
              options: [
                "docker logs <container>",
                "docker push <container>",
                "docker delete <container>",
                "docker tag <container>",
              ],
              correct: 0,
              explain:
                "docker logs -f webshop folgt dem Log live – erste Anlaufstelle, wenn ein Container nicht tut, was er soll.",
            },
          ],
        },
      ],
    },
    {
      id: "lf10-mon",
      title: "Monitoring & Logging",
      lessons: [
        {
          id: "lf10-mo-1",
          title: "Monitoring-Systeme",
          content: [
            { type: "heading", value: "Warum Monitoring?" },
            {
              type: "text",
              value:
                "Proaktiv Probleme erkennen, bevor Nutzer sie melden. SLA-Einhaltung nachweisen. Kapazitätsplanung. Typische Metriken: CPU, RAM, Disk, Netzwerk, Dienstverfügbarkeit, Antwortzeiten.",
            },
            { type: "heading", value: "Monitoring-Tools" },
            {
              type: "text",
              value:
                "Zabbix: Open Source, Agent-basiert, umfangreiche Templates. Prometheus + Grafana: Pull-basiert (scraping), Time-Series DB + Dashboards. Modern, Cloud-native. Nagios/Icinga: Klassiker, Plugin-basiert. PRTG: Kommerziell, Windows, einfache Einrichtung. SNMP: Protokoll zur Geräteüberwachung (Switches, Router, Drucker). OIDs, Community Strings, Traps.",
            },
            { type: "heading", value: "Zentrales Logging" },
            {
              type: "text",
              value:
                "Syslog: Standard-Logging-Protokoll (UDP 514, TCP 514). Severity Level 0-7: Emergency → Alert → Critical → Error → Warning → Notice → Informational → Debug. ELK-Stack: Elasticsearch (Suche) + Logstash (Verarbeitung) + Kibana (Visualisierung). Graylog: Alternative, einfacher.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Monitoring-Konzept" },
            {
              type: "text",
              value:
                "Monitoring-Konzept für 20 Server, 100 Clients. Was überwachen, welche Schwellenwerte?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nServer: CPU W>80%/C>95%, RAM W>85%/C>95%, Disk W>80%/C>90%, Dienste.\nClients: Patch-Status, Antivirus, Disk >90%.\nNetzwerk: Port-Status, Bandbreite, Paketverlust.\nAlerting: E-Mail (Warning), SMS/Teams (Critical), Eskalation nach 30 Min.\nTools: Zabbix, Checkmk, PRTG, Icinga.",
            },
            { type: "heading", value: "Beispiel 1: Schwellwert-Konzept Dateiserver" },
            {
              type: "list",
              value: [
                "Festplatte /daten: Warning 80 %, Critical 90 % – bei Critical zusätzlich SMS",
                "RAM: Warning 85 % über 10 Minuten (kurze Spitzen sind normal)",
                "Dienst smbd: Critical sofort bei Stillstand, automatischer Neustartversuch",
                "Backup-Job: Critical, wenn bis 06:00 Uhr keine Erfolgsmeldung vorliegt",
                "SSL-Zertifikat Webmail: Warning 21 Tage vor Ablauf",
              ],
            },
            { type: "heading", value: "Beispiel 2: Alarmweg in einem KMU" },
            {
              type: "text",
              value:
                "Der Monitoring-Server erkennt um 03:12 Uhr: Festplatte des Mailservers bei 91 %. Critical-Alarm → E-Mail ans IT-Postfach und SMS an die Rufbereitschaft. Der Admin verbindet sich per VPN, verschiebt alte Log-Archive, Füllstand sinkt auf 74 %, Alarm geht automatisch auf 'OK'. Am Morgen wird im Ticket die Ursache (fehlende Logrotation) dauerhaft behoben – der Ausfall des Mailservers wurde verhindert, bevor ein Benutzer etwas gemerkt hat.",
            },
            {
              type: "heading",
              value: "Übungsaufgabe 2: Monitoring-Konzept für einen Kleinbetrieb",
            },
            {
              type: "text",
              value:
                "Ein Betrieb hat: 1 Windows-Server (AD, Dateifreigaben), 1 Linux-Server (Webshop), 1 Switch, 1 Firewall, 1 NAS für Backups. Nenne für jedes Gerät mindestens zwei sinnvolle Checks und lege fest, welche Alarme nachts per SMS eskalieren sollen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG (Auszug):\nWindows-Server: Erreichbarkeit (Ping), Dienste AD/DNS/Freigabe, Festplatte 80/90 %, Windows-Update-Status.\nLinux-Webshop: HTTP-Check auf die Shop-URL (Antwortzeit + Statuscode 200), Dienst nginx/MySQL, Zertifikatslaufzeit, Festplatte.\nSwitch: SNMP-Erreichbarkeit, Portstatus der Uplinks, ggf. Temperatur.\nFirewall: Erreichbarkeit, VPN-Tunnelstatus, Firmware-Stand.\nNAS: Erreichbarkeit, RAID-Status, Backup-Job-Erfolg bis 06:00 Uhr.\nNachts per SMS: nur Critical mit Geschäftsauswirkung – Webshop nicht erreichbar, RAID degraded, Backup fehlgeschlagen, Firewall/VPN down. Alles andere als Ticket bis zum Morgen.",
            },
          ],
          quiz: [
            {
              id: "imp_lf10-mo-1_0",
              q: "Syslog Severity 0?",
              options: ["Informational", "Debug", "Emergency", "Warning"],
              correct: 2,
              explain: "0 = Emergency (höchste Dringlichkeit), 7 = Debug (niedrigste).",
            },
            {
              id: "imp_lf10-mo-1_1",
              q: "Prometheus arbeitet?",
              options: ["Pull-basiert (scraping)", "Push-basiert", "SNMP-only", "Agent-basiert"],
              correct: 0,
              explain: "Prometheus scraped Metriken von Endpoints (Pull-Modell).",
            },
            {
              id: "imp_lf10-mo-1_2",
              q: "SNMP = ?",
              options: [
                "System Notification Message Protocol",
                "Secure Network Monitoring",
                "Server Network Monitor Process",
                "Simple Network Management Protocol",
              ],
              correct: 3,
              explain: "Simple Network Management Protocol – Standard für Netzwerk-Monitoring.",
            },
            {
              id: "imp_lf10-mo-1_3",
              q: "Syslog Port?",
              options: ["514", "22", "161", "53"],
              correct: 0,
              explain: "Syslog: UDP Port 514.",
            },
            {
              id: "imp_lf10-mo-1_4",
              q: "Nagios/Zabbix/PRTG sind?",
              options: ["Monitoring-Systeme", "VPN-Clients", "Datenbanken", "Firewalls"],
              correct: 0,
              explain: "Monitoring-Tools, die Server, Dienste und Netzwerk überwachen.",
            },
            {
              id: "imp_lf10-mo-1_5",
              q: "ELK Stack?",
              options: [
                "Elasticsearch + Logstash + Kibana (Log-Analyse)",
                "Encryption + Login + Keys (Sicherheits-Suite)",
                "Ein E-Mail-System aus Exchange, Lotus und Kerio",
                "Ein Log-Dienst, der nur unter Linux lauffähig ist",
              ],
              correct: 0,
              explain:
                "ELK: Elasticsearch (Suche), Logstash (Log-Einsammlung), Kibana (Visualisierung).",
            },
            {
              id: "imp_lf10-mo-1_6",
              q: "SNMP Trap?",
              options: [
                "Konfiguration",
                "Abfrage vom Manager",
                "Passwort",
                "Gerät sendet aktiv Alarm an Manager",
              ],
              correct: 3,
              explain: "Trap: Gerät meldet sich selbstständig bei Problemen (Push statt Poll).",
            },
            {
              id: "imp_lf10-mo-1_7",
              q: "Prometheus + Grafana?",
              options: [
                "Monitoring (Metriken) + Visualisierung (Dashboards)",
                "Backup-Lösung: Sicherung (Prometheus) + Restore (Grafana)",
                "Ticketsystem: Erfassung (Prometheus) + Bearbeitung (Grafana)",
                "VPN-Stack: Tunnel (Prometheus) + Client-Verwaltung (Grafana)",
              ],
              correct: 0,
              explain: "Prometheus sammelt Metriken, Grafana visualisiert sie als Dashboards.",
            },
            {
              id: "imp_lf10-mo-1_8",
              q: "Alerting?",
              options: [
                "Fortlaufendes Schreiben aller Ereignisse in Logdateien",
                "Automatische Benachrichtigung bei Schwellwertüberschreitung",
                "Grafische Dashboards zur Live-Ansicht von Metriken",
                "Monatliche Berichte über die Auslastung der Systeme",
              ],
              correct: 1,
              explain: "Alert: E-Mail/SMS, wenn CPU > 90 %, Disk>95% etc.",
            },
            {
              id: "imp_lf10-mo-1_9",
              q: "Baseline?",
              options: [
                "Normalzustand des Systems als Vergleichsbasis",
                "Die Erstinstallation des Betriebssystems ab Werk",
                "Eine vollständige Datensicherung auf Bandmedien",
                "Die schriftliche Security-Policy des Unternehmens",
              ],
              correct: 0,
              explain: "Baseline: Was ist normal? Abweichungen = potenzielle Probleme.",
            },
            {
              id: "imp_lf10-mo-1_10",
              q: "Was ist das Hauptziel eines Monitoring-Systems?",
              options: [
                "Regelmäßige Backups vollständig ersetzen",
                "Die Arbeitsleistung der Mitarbeiter überwachen",
                "Probleme erkennen, bevor Benutzer sie bemerken",
                "Den Stromverbrauch der Server senken",
              ],
              correct: 2,
              explain:
                "Proaktiv statt reaktiv. Monitoring misst kontinuierlich Verfügbarkeit und Auslastung; Schwellwerte lösen Alarme aus, bevor ein Dienst kippt.",
            },
            {
              id: "imp_lf10-mo-1_11",
              q: "Wofür steht SNMP?",
              options: [
                "System Node Master Program",
                "Server Name Mapping Protocol",
                "Simple Network Management Protocol",
                "Secure Network Mail Protocol",
              ],
              correct: 2,
              explain:
                "Standardisiertes Abfragen von Geräten (Switches, Drucker, USV). Über SNMP liefern Geräte Werte wie Portstatus, Temperatur oder Tonerstand; Version 3 ergänzt Authentifizierung und Verschlüsselung.",
            },
            {
              id: "imp_lf10-mo-1_12",
              q: "Worin unterscheidet sich agentenbasiertes von agentenlosem Monitoring?",
              options: [
                "Agentenloses Monitoring liefert grundsätzlich detailliertere Daten als ein installierter Agent auf dem System",
                "Agent: Software auf dem Zielsystem liefert detaillierte Daten; agentenlos: Abfrage von außen (SNMP, Ping, WMI)",
                "Monitoring-Agenten lassen sich ausschließlich unter Linux installieren; Windows erlaubt nur agentenlose Abfragen",
                "Beide Begriffe bezeichnen dasselbe Verfahren; die Unterscheidung ist rein historisch bedingt",
              ],
              correct: 1,
              explain:
                "Agenten sehen mehr (Prozesse, Logs), kosten aber Pflege; agentenlos ist schnell ausgerollt, bleibt aber an der Oberfläche.",
            },
            {
              id: "imp_lf10-mo-1_13",
              q: "Wozu dienen zweistufige Schwellwerte (Warning/Critical)?",
              options: [
                "Jeder Alarm wird doppelt versendet, damit keine Meldung verloren geht",
                "Critical fährt den betroffenen Server automatisch herunter",
                "Frühwarnung mit Reaktionszeit (Warning) und Eskalation bei akuter Gefahr (Critical)",
                "Warning-Meldungen sind für Auszubildende, Critical für Administratoren bestimmt",
              ],
              correct: 2,
              explain:
                "Beispiel Festplatte: 80 % = Warning (aufräumen planen), 90 % = Critical (sofort handeln, sonst Dienstausfall).",
            },
            {
              id: "imp_lf10-mo-1_14",
              q: "Was ist ein False Positive im Monitoring?",
              options: [
                "Ein Alarm ohne echtes Problem",
                "Eine erfolgreiche Prüfung",
                "Ein besonders kritischer Ausfall",
                "Ein übersehener echter Fehler",
              ],
              correct: 0,
              explain:
                "Zu empfindliche Schwellwerte erzeugen Fehlalarme; die Folge ist Alarmmüdigkeit – echte Alarme werden dann ignoriert.",
            },
            {
              id: "imp_lf10-mo-1_15",
              q: "Welche Werkzeuge sind typische Monitoring-Systeme?",
              options: [
                "Zabbix, Checkmk, PRTG, Nagios/Icinga",
                "Nur die Windows-Ereignisanzeige",
                "Word, Excel, PowerPoint",
                "GIMP und Inkscape",
              ],
              correct: 0,
              explain:
                "Alle vier überwachen Hosts und Dienste mit Alarmen und Dashboards; PRTG ist sensor-basiert lizenziert, Zabbix/Icinga sind Open Source.",
            },
            {
              id: "imp_lf10-mo-1_16",
              q: "Was bringt zentrales Logging (z. B. Syslog-Server, ELK) gegenüber lokalen Logdateien?",
              options: [
                "Es funktioniert nur mit Windows",
                "Logs werden kürzer",
                "Logs aller Systeme durchsuchbar an einem Ort",
                "Es ersetzt jede Datensicherung",
              ],
              correct: 2,
              explain:
                "Die Logs bleiben verfügbar, auch wenn das Ursprungssystem ausfällt oder kompromittiert wird. Bei Angriffen werden lokale Logs oft gelöscht; zentral gesammelte Logs bleiben als Beweismittel und für die Korrelation erhalten.",
            },
            {
              id: "imp_lf10-mo-1_17",
              q: "Welche Grundmetriken überwacht man auf praktisch jedem Server?",
              options: [
                "Die Anzahl der belegten und freien USB-Ports an Front und Rückseite",
                "Die eingestellte Bildschirmauflösung der angeschlossenen Konsole",
                "Ausschließlich die Gehäusetemperatur, weitere Werte sind verzichtbar",
                "CPU-Last, RAM-Auslastung, Festplattenfüllstand, Erreichbarkeit und kritische Dienste",
              ],
              correct: 3,
              explain:
                "Dazu kommen dienstspezifische Checks: Webserver-Antwortzeit, Datenbank-Verbindungen, Zertifikatslaufzeiten, Backup-Erfolg.",
            },
            {
              id: "imp_lf10-mo-1_18",
              q: "Wozu dient eine Eskalationskette bei Alarmen?",
              options: [
                "Der Geschäftsführer erhält grundsätzlich jeden Alarm als Erster und verteilt ihn dann an die Techniker",
                "Alarme werden nach Ablauf einer Stunde automatisch gelöscht, damit die Übersicht nicht verloren geht",
                "Reagiert die erste Stufe nicht in definierter Zeit, wird automatisch die nächste benachrichtigt",
                "Alle Mitarbeiter erhalten grundsätzlich jeden Alarm gleichzeitig, unabhängig von Zuständigkeit und Uhrzeit",
              ],
              correct: 2,
              explain:
                "Beispiel: Ticket an Bereitschaft → nach 15 Min. SMS an Teamleitung → nach 30 Min. Anruf IT-Leitung. So versandet kein kritischer Alarm.",
            },
            {
              id: "imp_lf10-mo-1_19",
              q: "Wofür wird Grafana in Monitoring-Umgebungen häufig genutzt?",
              options: [
                "Als Ersatz für eine Firewall, die den Netzwerkverkehr filtert und protokolliert",
                "Zum automatisierten Einspielen von Patches auf den überwachten Servern",
                "Visualisierung von Metriken in Dashboards aus Quellen wie Prometheus oder Zabbix",
                "Zur Verwaltung von Benutzerkonten und Gruppen im Active Directory",
              ],
              correct: 2,
              explain:
                "Grafana erstellt aus Zeitreihendaten ansprechende Dashboards – etwa für den Bildschirm im IT-Büro oder Management-Reports.",
            },
          ],
        },
      ],
    },
    {
      id: "lf10-lic",
      title: "Lizenzmanagement & Patch-Management",
      lessons: [
        {
          id: "lf10-li-1",
          title: "Lizenzmodelle & Patch-Management",
          content: [
            { type: "heading", value: "Software-Lizenzmodelle" },
            {
              type: "text",
              value:
                "Proprietär: Quellcode nicht einsehbar, Nutzungsrechte per Lizenzvertrag (z.B. Microsoft, Adobe). Per-User, Per-Device, Per-Core/Per-Prozessor. Open Source: Quellcode frei verfügbar. Lizenzen: GPL (Copyleft: Änderungen müssen auch Open Source sein), MIT/BSD (permissiv: fast keine Einschränkungen), Apache 2.0 (permissiv + Patentschutz). SaaS/Subscription: Keine lokale Installation, monatliche/jährliche Gebühr (M365, Adobe CC). Vorteil: Immer aktuell. Nachteil: Abhängigkeit, laufende Kosten. CAL (Client Access License): Berechtigung zum Zugriff auf Windows Server. Per User-CAL oder Per Device-CAL. Volume Licensing: Rahmenverträge für Unternehmen (Microsoft EA, Select Plus).",
            },
            { type: "heading", value: "Patch-Management" },
            {
              type: "text",
              value:
                "Zyklus: Schwachstelle entdeckt -> Hersteller entwickelt Patch -> Testen in Staging-Umgebung -> Freigabe -> Ausrollen auf Produktivsysteme -> Verifizieren. Tools: WSUS (Windows Server Update Services) für Microsoft-Updates, Ansible/SCCM für automatisiertes Patching, Linux: unattended-upgrades (Debian/Ubuntu). Patch Tuesday: Microsoft veröffentlicht Sicherheitsupdates am 2. Dienstag jeden Monats. Zero-Day-Patch: Sofortige Installation bei kritischen Schwachstellen ohne regulären Testzyklus.",
            },
            {
              type: "note",
              value:
                "Lizenzrecht und Patch-Management kommen in AP2 vor, besonders im Kontext von Serverdiensten und Kundenprojekten.",
            },
            { type: "heading", value: "Softwarearten und Lizenzmodelle" },
            {
              type: "text",
              value:
                "OEM (Original Equipment Manufacturer): Software nur mit Hardware-Kauf, günstiger, nicht übertragbar. Standardsoftware: Fertige Lösung für viele (Windows, Office, SAP). Individualsoftware: Speziell für einen Kunden entwickelt. Angepasste Software: Standard + Plugins/Addons für spezifische Anforderungen. Proprietäre Software: Quellcode nicht einsehbar (Gegenteil von Open Source). Pay-per-Use: Zahlung nach tatsächlicher Nutzung (Datenvolumen, API-Calls, Stunden). EULA (End User License Agreement): Nutzungsbedingungen, die bei Installation akzeptiert werden. Community Cloud: Geteilte Cloud-Infrastruktur für Organisationen mit gleichen Anforderungen (z.B. Gesundheitswesen, Forschung).",
            },
            { type: "heading", value: "Rechtlicher Rahmen: das Urheberrechtsgesetz" },
            {
              type: "text",
              value:
                "Software ist nach § 69a UrhG als Sprachwerk geschützt – automatisch mit der Erstellung, ohne Registrierung. Der Urheber (bzw. bei Angestellten der Arbeitgeber, § 69b UrhG) entscheidet über Vervielfältigung, Verbreitung und Bearbeitung. Eine Lizenz ist deshalb nichts anderes als die vertragliche Erlaubnis, das geschützte Werk in definiertem Umfang zu nutzen. Erlaubt ohne Zustimmung ist nur wenig: eine Sicherungskopie für den eigenen Gebrauch (§ 69d UrhG) und das Beobachten/Testen des Programms. Verboten sind insbesondere das Entfernen von Kopierschutz und die Weitergabe über den Lizenzumfang hinaus – im Betrieb drohen sonst Unterlassung, Schadensersatz und bei Vorsatz sogar Strafbarkeit. Für die Prüfung: Open Source hebt das Urheberrecht NICHT auf – auch GPL & Co. sind Lizenzen, deren Bedingungen (z. B. Quellcode-Weitergabe bei der GPL) einzuhalten sind.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Lizenzmodelle" },
            {
              type: "text",
              value:
                "Lizenzmodelle erklären: Per User, Per Device, Per Core, Concurrent, Subscription. Wann welches?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nPer User: Pro Person, beliebig Geräte (Multi-Device-Nutzer).\nPer Device: Pro Gerät, beliebig Nutzer (Schichtarbeit, Kiosk).\nPer Core: Pro CPU-Kern (Server, virtualisiert).\nConcurrent: Gleichzeitige Nutzer (nicht permanent genutzte SW).\nSubscription: Miete (aktuell, skalierbar, OpEx).\nAchtung: Software-Audit → Unterlizenzierung teuer!",
            },
            { type: "heading", value: "Beispiel 1: CAL-Rechnung im Schichtbetrieb" },
            {
              type: "text",
              value:
                "Produktionsbetrieb: 90 Mitarbeiter in drei Schichten teilen sich 28 Terminals, die auf den Windows-Server zugreifen. User-CALs: 90 Stück nötig. Device-CALs: 28 Stück. Bei z. B. 40 € pro CAL: 3.600 € gegen 1.120 € – Device-CALs sparen hier 2.480 €. Im Verwaltungsbüro desselben Betriebs (jeder nutzt PC, Notebook und Smartphone) wäre die Rechnung umgekehrt.",
            },
            { type: "heading", value: "Beispiel 2: Patch-Prozess mit Ringen" },
            {
              type: "list",
              value: [
                "Patchday (2. Dienstag im Monat): Updates erscheinen, WSUS synchronisiert",
                "Tag 1–3: Ring 0 = IT-Abteilung installiert und testet Kernanwendungen",
                "Tag 4–7: Ring 1 = Pilotnutzer aus jeder Abteilung",
                "Ab Tag 8: Ring 2 = unternehmensweite Freigabe",
                "Ausnahme: aktiv ausgenutzte kritische Lücke → beschleunigte Freigabe nach Kurztest, Information an alle Nutzer",
              ],
            },
            { type: "heading", value: "Übungsaufgabe 2: Lizenzbedarf ermitteln" },
            {
              type: "text",
              value:
                "Ein Unternehmen hat 45 Büro-Mitarbeiter (je PC + Notebook), 60 Lagerkräfte in zwei Schichten an 25 Scannerstationen und einen Windows-Server. Eine CAL kostet 38 € (User wie Device). Berechne die günstigste CAL-Verteilung und die Gesamtkosten.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nBüro: 45 Benutzer × 2 Geräte → User-CALs günstiger: 45 × 38 € = 1.710 € (Device wären 90 × 38 € = 3.420 €).\nLager: 60 Benutzer an nur 25 Geräten → Device-CALs günstiger: 25 × 38 € = 950 € (User wären 60 × 38 € = 2.280 €).\nGesamt: 1.710 € + 950 € = 2.660 €. Mischung aus User- und Device-CALs ist zulässig und hier optimal; teuerste Fehlplanung (alles User) hätte 105 × 38 € = 3.990 € gekostet.",
            },
          ],
          quiz: [
            {
              id: "imp_lf10-li-1_0",
              q: "GPL bedeutet?",
              options: [
                "General Public License (Copyleft)",
                "Guaranteed Public Listing",
                "Global Permission Level",
                "General Private License",
              ],
              correct: 0,
              explain: "GPL = General Public License mit Copyleft-Pflicht.",
            },
            {
              id: "imp_lf10-li-1_1",
              q: "WSUS dient?",
              options: [
                "Windows-Update-Verteilung im Netzwerk",
                "Webhosting",
                "Web Security",
                "Wireless Setup",
              ],
              correct: 0,
              explain: "WSUS = Windows Server Update Services zur zentralen Update-Verwaltung.",
            },
            {
              id: "imp_lf10-li-1_2",
              q: "Patch Tuesday ist?",
              options: [
                "Jeder Dienstag",
                "Letzter Dienstag",
                "2. Dienstag im Monat (Microsoft Updates)",
                "Erster Dienstag",
              ],
              correct: 2,
              explain: "Microsoft veröffentlicht Sicherheitsupdates am 2. Dienstag jeden Monats.",
            },
            {
              id: "imp_lf10-li-1_3",
              q: "GPL = ?",
              options: ["Proprietär", "Shareware", "Copyleft Open-Source", "Freeware"],
              correct: 2,
              explain: "GPL: Abgeleitete Werke müssen auch Open Source sein.",
            },
            {
              id: "imp_lf10-li-1_4",
              q: "EULA = ?",
              options: [
                "Lizenzvereinbarung für Endbenutzer",
                "Enterprise Update",
                "External License",
                "Encryption",
              ],
              correct: 0,
              explain: "End User License Agreement.",
            },
            {
              id: "imp_lf10-li-1_5",
              q: "Patch Management: Warum?",
              options: ["Optional", "Aussehen", "Nur Performance", "Sicherheitslücken schließen"],
              correct: 3,
              explain: "Patches schließen Sicherheitslücken und beheben Bugs.",
            },
            {
              id: "imp_lf10-li-1_6",
              q: "Open Source vs. Freeware?",
              options: [
                "Beide Begriffe bezeichnen exakt dasselbe Lizenzmodell",
                "Open Source = Quellcode offen, Freeware = nur kostenlos",
                "Freeware = Quellcode offen, Open Source = nur kostenlos",
                "Open Source ist stets kostenpflichtig, Freeware gratis",
              ],
              correct: 1,
              explain: "Open Source: Code einsehbar und änderbar. Freeware: Nur kostenlos.",
            },
            {
              id: "imp_lf10-li-1_7",
              q: "CAL = ?",
              options: [
                "Client Access License",
                "Config Analysis",
                "Central Admin Log",
                "Cloud Access Layer",
              ],
              correct: 0,
              explain: "Client Access License: Pro User oder pro Device für Windows Server.",
            },
            {
              id: "imp_lf10-li-1_8",
              q: "SaaS-Lizenz?",
              options: ["Abo-Modell (monatlich/jährlich)", "Einmalig", "Kaufen", "Kostenlos"],
              correct: 0,
              explain: "SaaS: Subscription, man zahlt, solange man nutzt.",
            },
            {
              id: "imp_lf10-li-1_9",
              q: "WSUS = ?",
              options: [
                "Web Security Update Service (Browser-Schutz)",
                "Windows Server Update Services (zentrale Updates)",
                "Windows System Utility Suite (Analyse-Tools)",
                "Wireless Setup Utility Service (WLAN-Einrichtung)",
              ],
              correct: 1,
              explain: "WSUS: Updates zentral verwalten und verteilen.",
            },
            {
              id: "imp_lf10-li-1_10",
              q: "Was unterscheidet proprietäre Software von Open-Source-Software?",
              options: [
                "Open-Source-Software darf in Unternehmen nicht eingesetzt werden, da sie nur für private Zwecke lizenziert ist",
                "Open-Source-Software ist grundsätzlich kostenlos und darf ohne jede Lizenzbedingung beliebig verwendet werden",
                "Proprietäre Software hat keinen Hersteller, sondern wird ausschließlich von freiwilligen Communities gepflegt",
                "Bei Open Source ist der Quellcode einsehbar und unter Lizenzbedingungen nutzbar/veränderbar, bei proprietärer nicht",
              ],
              correct: 3,
              explain:
                "Auch Open Source hat Lizenzen mit Pflichten (z. B. GPL); 'frei' bezieht sich auf die Freiheiten am Code, nicht zwingend auf den Preis.",
            },
            {
              id: "imp_lf10-li-1_11",
              q: "Was verlangt das Copyleft-Prinzip der GPL?",
              options: [
                "Der Name des ursprünglichen Autors muss bei jeder Weitergabe geheim gehalten werden",
                "Die Software darf grundsätzlich niemals kommerziell genutzt oder verkauft werden",
                "Abgeleitete, weitergegebene Software muss wieder unter GPL stehen und den Quellcode offenlegen",
                "Die Software darf pro erworbener Lizenz nur ein einziges Mal installiert werden",
              ],
              correct: 2,
              explain:
                "Permissive Lizenzen wie MIT/BSD erlauben dagegen die Einbindung in proprietäre Produkte ohne Offenlegungspflicht.",
            },
            {
              id: "imp_lf10-li-1_12",
              q: "Worin unterscheidet sich eine OEM- von einer Retail-Lizenz?",
              options: [
                "OEM-Lizenzen sind grundsätzlich teurer, da Hardware-Support enthalten ist",
                "OEM ist an die mitgelieferte Hardware gebunden, Retail unabhängig übertragbar",
                "OEM-Lizenzen existieren ausschließlich für Linux-Distributionen",
                "Retail-Lizenzen laufen nach 30 Tagen ab und müssen verlängert werden",
              ],
              correct: 1,
              explain:
                "Stirbt das OEM-Gerät, stirbt praktisch auch die Lizenz; Retail-Lizenzen dürfen auf neue Hardware umziehen.",
            },
            {
              id: "imp_lf10-li-1_13",
              q: "Wofür benötigt man bei Windows Server CALs?",
              options: [
                "Ausschließlich für die einmalige Installation des Server-Betriebssystems",
                "Für jede über den Server gesendete E-Mail fällt eine CAL an",
                "Zur Kühlung des Servers",
                "Zugriffslizenzen für Benutzer oder Geräte, die Dienste des Servers nutzen",
              ],
              correct: 3,
              explain:
                "Client Access Licenses gibt es pro Benutzer (User-CAL) oder pro Gerät (Device-CAL) – je nach Nutzungsszenario günstiger.",
            },
            {
              id: "imp_lf10-li-1_14",
              q: "Wann lohnen sich Device-CALs gegenüber User-CALs?",
              options: [
                "Nie, User-CALs sind immer die bessere Wahl",
                "Wenn sich viele Benutzer wenige Geräte teilen",
                "Device-CALs sind grundsätzlich immer günstiger",
                "Wenn jeder Benutzer mehrere Geräte nutzt",
              ],
              correct: 1,
              explain:
                "Beispiel: im Schichtbetrieb. Drei Schichten à 20 Arbeiter an 20 Terminals: 20 Device-CALs statt 60 User-CALs. Im Büro mit PC+Notebook+Smartphone pro Person gilt das Gegenteil.",
            },
            {
              id: "imp_lf10-li-1_15",
              q: "Was unterscheidet das Subscription-Modell vom Kauflizenz-Modell?",
              options: [
                "Es gibt keinen Unterschied; beide Modelle gewähren dieselben Rechte und unterscheiden sich nur im Namen",
                "Subscription ist über die gesamte Nutzungsdauer gerechnet grundsätzlich günstiger als jede Kauflizenz",
                "Kauflizenzen schließen zeitlich unbegrenzt kostenlose Upgrades auf alle künftigen Hauptversionen ein",
                "Subscription: laufende Zahlung, Nutzung nur während des Abos, Updates inklusive; Kauf: einmalig, dauerhaftes Nutzungsrecht der Version",
              ],
              correct: 3,
              explain:
                "Bei Abo-Ende verliert man das Nutzungsrecht (z. B. M365); gekaufte Versionen laufen weiter, erreichen aber irgendwann das Support-Ende.",
            },
            {
              id: "imp_lf10-li-1_16",
              q: "Welches Risiko birgt Unterlizenzierung?",
              options: [
                "Die Software drosselt bei fehlenden Lizenzen automatisch die Leistung",
                "Der Bildschirm wird als Warnhinweis dauerhaft abgedunkelt",
                "Es besteht kein Risiko, solange kein Audit angekündigt wird",
                "Bei einem Hersteller-Audit drohen Nachzahlungen und Vertragsstrafen",
              ],
              correct: 3,
              explain:
                "Lizenzverträge erlauben Audits; sauberes Lizenzmanagement (Inventarisierung, SAM-Tools) schützt vor teuren Überraschungen.",
            },
            {
              id: "imp_lf10-li-1_17",
              q: "Warum testet man Patches an einer Pilotgruppe, bevor man sie flächendeckend verteilt?",
              options: [
                "Patches lassen sich technisch erst installieren, nachdem eine Pilotgruppe sie freigeschaltet hat",
                "Weil für Patches Lizenzkosten pro Gerät anfallen und die Pilotgruppe Kosten spart",
                "Weil der Gesetzgeber einen Pilotbetrieb vor jeder Softwareverteilung vorschreibt",
                "Fehlerhafte Patches fallen in kleiner Runde auf, bevor sie hunderte Arbeitsplätze lahmlegen",
              ],
              correct: 3,
              explain:
                "Typischer Ring-Ansatz: IT-Abteilung → Pilotgruppe je Abteilung → alle. Kritische Sicherheitspatches mit verkürztem Zyklus.",
            },
            {
              id: "imp_lf10-li-1_18",
              q: "Welche Aufgabe übernimmt WSUS in Windows-Umgebungen?",
              options: [
                "Zentrale Freigabe und Verteilung von Microsoft-Updates im Unternehmensnetz",
                "Die zentrale Vergabe von IP-Adressen an alle Clients der Domäne",
                "Die Verwaltung und Verteilung von Linux-Paketen im Firmennetz",
                "Die Überwachung von Raumtemperatur und Luftfeuchte im Serverraum",
              ],
              correct: 0,
              explain:
                "Updates werden einmal heruntergeladen, geprüft, freigegeben und intern verteilt – kontrolliert und bandbreitenschonend.",
            },
            {
              id: "imp_lf10-li-1_19",
              q: "Warum ist der Betrieb von Software nach dem End-of-Life (EOL) riskant?",
              options: [
                "Die Software löscht sich automatisch",
                "EOL betrifft nur Spiele",
                "Der Hersteller erhöht die Geschwindigkeit",
                "Es gibt keine Sicherheitsupdates mehr",
              ],
              correct: 3,
              explain:
                "Neue Schwachstellen bleiben dauerhaft offen. EOL-Systeme sind beliebte Angriffsziele und fallen in Audits/Versicherungsfragen negativ auf; Migration rechtzeitig planen.",
            },
          ],
        },
      ],
    },
    {
      id: "lf10-win",
      title: "Windows Administration",
      lessons: [
        {
          id: "lf10-cmd-1",
          title: "Windows CMD & PowerShell Referenz",
          content: [
            { type: "heading", value: "CMD-Grundbefehle (Pflicht für FiSi)" },
            {
              type: "text",
              value:
                "ipconfig /all – IP-Konfiguration aller Adapter. ipconfig /release + /renew – DHCP-Lease erneuern. ipconfig /flushdns – DNS-Cache löschen. ping 192.168.1.1 – Erreichbarkeit prüfen. tracert 8.8.8.8 – Route zum Ziel anzeigen. nslookup example.com – DNS-Auflösung. netstat -ano – Alle Verbindungen + PIDs. arp -a – ARP-Cache anzeigen. route print – Routing-Tabelle. hostname – Computernamen anzeigen. systeminfo – Detaillierte Systeminformationen.",
            },
            { type: "heading", value: "Dateisystem-Befehle (CMD)" },
            {
              type: "text",
              value:
                'dir – Verzeichnisinhalt anzeigen. cd ordner – Verzeichnis wechseln. cd .. – Eine Ebene hoch. mkdir ordner – Ordner erstellen. rmdir ordner /s – Ordner mit Inhalt löschen. copy quelle ziel – Datei kopieren. move quelle ziel – Datei verschieben. del datei – Datei löschen. type datei.txt – Dateiinhalt anzeigen. tree – Verzeichnisbaum anzeigen. find "suchtext" datei.txt – Text in Datei suchen.',
            },
            { type: "heading", value: "Netzwerk-Diagnose (CMD)" },
            {
              type: "text",
              value:
                "netsh wlan show profiles – Gespeicherte WLAN-Profile. netsh interface ip show config – Netzwerk-Konfiguration. netsh advfirewall set allprofiles state off – Firewall deaktivieren (Troubleshooting). pathping ziel – Kombiniert Ping und Traceroute. nbtstat -n – NetBIOS-Namenstabelle. net view – Netzwerk-Computer anzeigen. net use Z: \\\\server\\freigabe – Netzlaufwerk verbinden. net user – Lokale Benutzer anzeigen. net user admin P@ssw0rd /add – Benutzer anlegen.",
            },
            { type: "heading", value: "PowerShell-Grundlagen" },
            {
              type: "text",
              value:
                "PowerShell ist der Nachfolger von CMD – objektorientiert, mächtig, scriptfähig. Cmdlet-Syntax: Verb-Noun (Get-Process, Set-Item, New-ADUser). Pipeline: Get-Process | Where-Object {$_.CPU -gt 10} | Sort-Object CPU. Variablen: $name = 'Server01'. Hilfe: Get-Help Get-Process -Full. Ausführen: .\\script.ps1 (Execution Policy beachten: Set-ExecutionPolicy RemoteSigned).",
            },
            { type: "heading", value: "PowerShell Netzwerk-Befehle" },
            {
              type: "text",
              value:
                "Get-NetIPAddress – IP-Adressen aller Adapter. Get-NetAdapter – Netzwerkadapter-Status. Test-Connection 8.8.8.8 – Ping (PowerShell-Variante). Resolve-DnsName example.com – DNS-Auflösung. Get-NetTCPConnection – Offene TCP-Verbindungen (wie netstat). Get-DnsClientCache – DNS-Cache anzeigen. Clear-DnsClientCache – DNS-Cache löschen. New-NetIPAddress -InterfaceIndex 12 -IPAddress 192.168.1.100 -PrefixLength 24 – Statische IP setzen.",
            },
            { type: "heading", value: "PowerShell AD/Server-Befehle" },
            {
              type: "text",
              value:
                "Get-ADUser -Filter * – Alle AD-Benutzer. New-ADUser -Name 'Max Muster' -SamAccountName mmuster – Neuer AD-User. Get-ADComputer -Filter * – Alle Computer im AD. Get-Service – Alle Dienste anzeigen. Restart-Service Spooler – Druckdienst neu starten. Get-EventLog -LogName System -Newest 20 – Letzte 20 Systemereignisse. Invoke-Command -ComputerName SRV01 -ScriptBlock {Get-Process} – Remote-Befehl ausführen.",
            },
            { type: "heading", value: "Beispiel 1: Netzwerk-Troubleshooting Reihenfolge" },
            {
              type: "text",
              value:
                "1) ipconfig /all → IP korrekt? DHCP aktiv? Gateway gesetzt? 2) ping 127.0.0.1 → TCP/IP-Stack OK? 3) ping 192.168.1.1 → Gateway erreichbar? 4) ping 8.8.8.8 → Internet erreichbar? 5) nslookup google.com → DNS funktioniert? 6) tracert google.com → Wo hängt es? Wenn Schritt 2 fehlschlägt: Netzwerkkarte/Treiber. Schritt 3: Kabel/Switch. Schritt 4: Router/ISP. Schritt 5: DNS-Server.",
            },
            { type: "heading", value: "Beispiel 2: PowerShell-Script für Massenanlage" },
            {
              type: "text",
              value:
                "CSV-Datei mit Benutzern einlesen und in AD anlegen: Import-Csv 'neue_user.csv' | ForEach-Object { New-ADUser -Name $_.Name -SamAccountName $_.Login -Department $_.Abteilung -AccountPassword (ConvertTo-SecureString $_.Passwort -AsPlainText -Force) -Enabled $true }. Das erspart bei 50 neuen Azubis stundenlanges Klicken in der ADUC-Konsole.",
            },
            { type: "heading", value: "Beispiel 3: Dienste überwachen" },
            {
              type: "text",
              value:
                "Get-Service | Where-Object {$_.Status -eq 'Stopped' -and $_.StartType -eq 'Automatic'} | Select-Object Name, Status, DisplayName. Zeigt alle Dienste, die automatisch starten sollten, aber gestoppt sind → mögliche Probleme. Kann als Scheduled Task alle 5 Minuten laufen und bei Fund eine E-Mail senden.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Netzwerk-Troubleshooting durchführen" },
            {
              type: "text",
              value:
                "Ein Mitarbeiter meldet: 'Ich komme nicht ins Internet.' Du sitzt remote an seinem PC (RDP funktioniert über LAN). Beschreibe die CMD/PowerShell-Befehle, die du Schritt für Schritt eingibst, und was du bei jedem Schritt prüfst.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1) ipconfig /all\n   → Prüfe: IP-Adresse vorhanden? (Kein 169.254.x.x/APIPA?)\n   → Gateway korrekt? DNS-Server eingetragen?\n   → DHCP aktiv? Lease gültig?\n\n2) ping 127.0.0.1\n   → TCP/IP-Stack funktioniert? (Sollte immer klappen)\n\n3) ping 192.168.1.1 (Gateway)\n   → Lokales Netzwerk OK? Switch/Kabel/WLAN funktioniert?\n\n4) ping 8.8.8.8\n   → Internet (IP-Ebene) erreichbar? Wenn ja → DNS-Problem\n   → Wenn nein → Routing/Firewall/ISP-Problem\n\n5) nslookup google.com\n   → DNS-Auflösung funktioniert? Antwortet der DNS-Server?\n   → Wenn Timeout: ipconfig /flushdns, dann DNS-Server in\n     ipconfig prüfen (evtl. falscher DNS eingetragen)\n\n6) tracert google.com\n   → Wo bricht die Verbindung ab? (Beim Gateway? Beim ISP?)\n\nHäufigstes Ergebnis: Schritt 4 klappt, Schritt 5 nicht\n→ DNS-Problem. Lösung: DNS auf 8.8.8.8 ändern oder\nipconfig /flushdns und Neustart des DNS-Client-Dienstes.",
            },
            { type: "heading", value: "Übungsaufgabe 2: PowerShell-Script AD-Benutzer anlegen" },
            {
              type: "text",
              value:
                "Schreibe ein PowerShell-Script, das aus einer CSV-Datei (Spalten: Vorname, Nachname, Abteilung, Login) neue Active-Directory-Benutzer anlegt. Jeder User soll ein Initialkennwort 'Start2026!' bekommen, das beim ersten Login geändert werden muss. Erkläre jeden Befehl.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n# CSV-Datei einlesen (neue_azubis.csv)\n# Format: Vorname;Nachname;Abteilung;Login\n$users = Import-Csv -Path '.\\neue_azubis.csv' -Delimiter ';'\n\n# Sicheres Passwort erstellen\n$password = ConvertTo-SecureString 'Start2026!' -AsPlainText -Force\n\nforeach ($user in $users) {\n    # Vollständigen Namen zusammensetzen\n    $fullName = \"$($user.Vorname) $($user.Nachname)\"\n    \n    # AD-Benutzer anlegen\n    New-ADUser `\n        -Name $fullName `\n        -GivenName $user.Vorname `\n        -Surname $user.Nachname `\n        -SamAccountName $user.Login `\n        -UserPrincipalName \"$($user.Login)@firma.local\" `\n        -Department $user.Abteilung `\n        -AccountPassword $password `\n        -ChangePasswordAtLogon $true `\n        -Enabled $true `\n        -Path 'OU=Azubis,DC=firma,DC=local'\n    \n    Write-Host \"Angelegt: $fullName ($($user.Login))\" -ForegroundColor Green\n}\n\nWrite-Host \"Fertig: $($users.Count) Benutzer angelegt.\"\n\nErklärung:\n- Import-Csv: Liest CSV-Datei zeilenweise als Objekte\n- ConvertTo-SecureString: Passwort muss als SecureString übergeben werden\n- -ChangePasswordAtLogon $true: Erzwingt Passwortwechsel beim ersten Login\n- -Path: OU, in der die User angelegt werden\n- Backtick (`) = Zeilenumbruch in PowerShell",
            },
            { type: "heading", value: "Übungsaufgabe 3: CMD vs. PowerShell zuordnen" },
            {
              type: "text",
              value:
                "Ordne die folgenden Aufgaben dem passenden Werkzeug zu (CMD, PowerShell oder beides) und nenne den konkreten Befehl:\na) DNS-Cache leeren\nb) Alle gestoppten Dienste mit Starttyp 'Automatisch' finden\nc) Netzlaufwerk Z: verbinden\nd) Alle AD-Computer in der OU 'Server' auflisten\ne) Offene TCP-Verbindungen mit Prozessnamen anzeigen",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) DNS-Cache leeren:\n   CMD: ipconfig /flushdns\n   PowerShell: Clear-DnsClientCache\n   → Beides funktioniert, CMD ist kürzer\n\nb) Gestoppte Auto-Dienste finden:\n   Nur PowerShell: Get-Service | Where-Object {$_.Status -eq 'Stopped' -and $_.StartType -eq 'Automatic'}\n   → CMD kann nicht nach Starttyp filtern (sc query zeigt nicht den Starttyp)\n\nc) Netzlaufwerk verbinden:\n   CMD: net use Z: \\\\server\\freigabe /persistent:yes\n   PowerShell: New-PSDrive -Name Z -PSProvider FileSystem -Root '\\\\server\\freigabe' -Persist\n   → CMD ist hier einfacher und verbreiteter\n\nd) AD-Computer in OU auflisten:\n   Nur PowerShell: Get-ADComputer -Filter * -SearchBase 'OU=Server,DC=firma,DC=local' | Select Name\n   → CMD hat keinen AD-Zugriff (nur PowerShell mit RSAT-Modul)\n\ne) TCP-Verbindungen mit Prozessnamen:\n   CMD: netstat -ano (zeigt nur PID, manuell tasklist nötig)\n   PowerShell: Get-NetTCPConnection | Select LocalPort, RemoteAddress, State, OwningProcess, @{N='Process';E={(Get-Process -Id $_.OwningProcess).Name}}\n   → PowerShell liefert alles in einem Befehl inkl. Prozessname",
            },
          ],
          quiz: [
            {
              id: "imp_lf10-cmd-1_0",
              q: "Welcher Befehl zeigt die IP-Konfiguration unter Windows?",
              options: ["ip addr", "ifconfig", "netstat", "ipconfig /all"],
              correct: 3,
              explain:
                "ipconfig /all: Zeigt IP, Subnetzmaske, Gateway, DNS, MAC, DHCP für alle Adapter.",
            },
            {
              id: "imp_lf10-cmd-1_1",
              q: "Was macht ipconfig /flushdns?",
              options: [
                "DNS-Cache löschen",
                "Firewall deaktivieren",
                "IP erneuern",
                "Netzwerk neu starten",
              ],
              correct: 0,
              explain:
                "Löscht den lokalen DNS-Cache. Hilfreich, wenn DNS-Einträge geändert wurden.",
            },
            {
              id: "imp_lf10-cmd-1_2",
              q: "Welcher Befehl zeigt offene Ports und zugehörige PIDs?",
              options: ["tracert", "ping", "ipconfig", "netstat -ano"],
              correct: 3,
              explain:
                "netstat -ano: -a=alle, -n=numerisch, -o=PID. Zeigt, welcher Prozess welchen Port nutzt.",
            },
            {
              id: "imp_lf10-cmd-1_3",
              q: "Was ist der Unterschied zwischen CMD und PowerShell?",
              options: [
                "PowerShell besitzt keinerlei Netzwerkfunktionen und Remoting",
                "CMD ist die neuere Shell und löst PowerShell schrittweise ab",
                "Es gibt keinen Unterschied, beide sind identische Interpreter",
                "PowerShell ist objektorientiert und kann mit .NET-Objekten arbeiten",
              ],
              correct: 3,
              explain:
                "PowerShell: Objekte statt Text, Pipeline, Scripting, .NET-Integration. CMD: Nur Textausgabe.",
            },
            {
              id: "imp_lf10-cmd-1_4",
              q: "Welches Cmdlet zeigt alle AD-Benutzer?",
              options: ["dir /users", "net user", "Get-ADUser -Filter *", "Show-ADUser"],
              correct: 2,
              explain: "Get-ADUser -Filter *: Listet alle Benutzer im Active Directory.",
            },
            {
              id: "imp_lf10-cmd-1_5",
              q: "Was macht der Befehl 'net use Z: \\\\server\\freigabe'?",
              options: [
                "Netzwerk testen",
                "Server herunterfahren",
                "Benutzer anzeigen",
                "Netzlaufwerk Z: mit der Freigabe verbinden",
              ],
              correct: 3,
              explain: "net use: Verbindet/trennt Netzlaufwerke. Z: ist der Laufwerksbuchstabe.",
            },
            {
              id: "imp_lf10-cmd-1_6",
              q: "Was ist die PowerShell Execution Policy?",
              options: [
                "Netzwerkrichtlinie, die festlegt, welche Ports PowerShell öffnen darf",
                "Gruppenrichtlinie im AD, die die Installation von PowerShell-Versionen steuert",
                "Firewall-Regelsatz, der Remote-PowerShell-Verbindungen blockiert oder erlaubt",
                "Sicherheitseinstellung, die bestimmt, welche Skripte ausgeführt werden dürfen",
              ],
              correct: 3,
              explain:
                "Execution Policy: Restricted (keine Scripts), RemoteSigned (lokale OK, remote brauchen Signatur), Unrestricted.",
            },
            {
              id: "imp_lf10-cmd-1_7",
              q: "Mit welchem Kommando lässt sich die Routing-Tabelle anzeigen?",
              options: ["arp -a", "route print", "ipconfig", "netstat"],
              correct: 1,
              explain:
                "route print (CMD) oder Get-NetRoute (PowerShell): Zeigt alle Routen inkl. Default-Gateway.",
            },
            {
              id: "imp_lf10-cmd-1_8",
              q: "Was macht Test-Connection in PowerShell?",
              options: [
                "DNS testen",
                "Netzwerk testen",
                "VPN testen",
                "Ping-Äquivalent in PowerShell",
              ],
              correct: 3,
              explain:
                "Mit Objekten statt nur Text. Test-Connection = PowerShell-Ping. Gibt Objekte zurück → filtern, verarbeiten, exportieren möglich.",
            },
            {
              id: "imp_lf10-cmd-1_9",
              q: "Wie führt man ein PowerShell-Script aus?",
              options: ["exec script.ps1", "Doppelklick", ".\\scriptname.ps1", "run script.ps1"],
              correct: 2,
              explain:
                "Mit passender Execution Policy. .\\scriptname.ps1: Der Punkt-Backslash ist Pflicht für lokale Scripts. Execution Policy muss Scripts erlauben.",
            },
            {
              id: "imp_lf10-cmd-1_10",
              q: "Welcher Befehl zeigt unter Windows die vollständige Netzwerkkonfiguration inklusive MAC-Adresse und DNS-Servern?",
              options: ["ping /all", "hostname", "netstat -r", "ipconfig /all"],
              correct: 3,
              explain:
                "ipconfig allein zeigt nur die Kurzfassung; /all ergänzt MAC, DHCP-Server, Lease-Zeiten und DNS – Standard bei jeder Netzwerkdiagnose.",
            },
            {
              id: "imp_lf10-cmd-1_11",
              q: "Wofür dient tracert?",
              options: [
                "Es zeigt die Router-Stationen (Hops) auf dem Weg zum Ziel",
                "Es repariert die Routing-Tabelle",
                "Es misst die Festplattengeschwindigkeit",
                "Es startet den Netzwerkadapter neu",
              ],
              correct: 0,
              explain:
                "tracert lokalisiert, WO eine Verbindung hakt – etwa ob das Problem im eigenen Netz, beim Provider oder beim Ziel liegt.",
            },
            {
              id: "imp_lf10-cmd-1_12",
              q: "Mit welchem Befehl prüft man die DNS-Auflösung eines Namens gezielt?",
              options: ["del firma.de", "nslookup firma.de", "tasklist firma.de", "cls firma.de"],
              correct: 1,
              explain:
                "nslookup fragt den DNS-Server direkt; mit nslookup firma.de 8.8.8.8 testet man gezielt einen anderen Server – so trennt man DNS- von Verbindungsproblemen.",
            },
            {
              id: "imp_lf10-cmd-1_13",
              q: "Was zeigt netstat -ano?",
              options: [
                "Eine Liste aller installierten Programme mit Versionsständen",
                "Den freien und belegten Festplattenplatz aller Laufwerke",
                "Ausschließlich die aktuelle WLAN-Signalstärke des Adapters",
                "Alle Verbindungen und lauschenden Ports mit zugehöriger Prozess-ID",
              ],
              correct: 3,
              explain:
                "Mit der PID aus netstat findet man im Task-Manager (oder tasklist) den Prozess, der z. B. Port 80 blockiert – klassisch beim XAMPP-Portkonflikt.",
            },
            {
              id: "imp_lf10-cmd-1_14",
              q: "Wofür ist sfc /scannow zuständig?",
              options: [
                "Es defragmentiert die Festplatte und ordnet Dateifragmente für schnellere Zugriffe neu",
                "Es formatiert das Systemlaufwerk und setzt Windows auf Werkseinstellungen zurück",
                "Es durchsucht das lokale Netzwerk nach Geräten und listet deren IP-Adressen auf",
                "Prüft Windows-Systemdateien auf Beschädigung und repariert sie aus dem Komponentenspeicher",
              ],
              correct: 3,
              explain:
                "Der System File Checker ist Standard bei unerklärlichem Systemverhalten; bei Bedarf ergänzt DISM /Online /Cleanup-Image /RestoreHealth.",
            },
            {
              id: "imp_lf10-cmd-1_15",
              q: "Warum nutzt man für große Kopieraufträge robocopy statt copy?",
              options: [
                "robocopy wurde für Wechseldatenträger entwickelt und funktioniert nur mit Disketten und USB-Sticks",
                "Es gibt keinen funktionalen Unterschied; beide Befehle rufen intern dieselbe Kopierroutine auf",
                "robocopy kopiert rekursiv, setzt nach Abbrüchen fort, übernimmt Berechtigungen und protokolliert",
                "copy ist der modernere Befehl und ersetzt robocopy in aktuellen Windows-Versionen vollständig",
              ],
              correct: 2,
              explain:
                "robocopy /MIR spiegelt Verzeichnisse, /Z erlaubt Neustart nach Unterbrechung, /LOG schreibt ein Protokoll – Standard bei Datenmigrationen.",
            },
            {
              id: "imp_lf10-cmd-1_16",
              q: "Welches PowerShell-Cmdlet entspricht dem CMD-Befehl dir?",
              options: ["Get-ChildItem", "Set-Location", "Get-Process", "New-Item"],
              correct: 0,
              explain:
                "Get-ChildItem (Aliase: dir, ls, gci) listet Verzeichnisinhalte – liefert aber Objekte, die sich weiterfiltern lassen.",
            },
            {
              id: "imp_lf10-cmd-1_17",
              q: "Wie leitet man in der PowerShell die Ausgabe eines Befehls in eine Datei um?",
              options: [
                "Get-Process -> prozesse.txt",
                "print Get-Process",
                "Get-Process | Out-File prozesse.txt",
                "Get-Process speichern prozesse.txt",
              ],
              correct: 2,
              explain:
                "Out-File (oder > als Kurzform) schreibt in die Datei; Export-Csv strukturiert die Objekte zusätzlich als CSV für Excel.",
            },
            {
              id: "imp_lf10-cmd-1_18",
              q: "Was bewirkt ipconfig /flushdns?",
              options: [
                "Die IP-Adresse wird dauerhaft gelöscht",
                "Der lokale DNS-Cache wird geleert",
                "Alle Netzwerkkabel werden deaktiviert",
                "Der DHCP-Server wird neu gestartet",
              ],
              correct: 1,
              explain:
                "Veraltete Namensauflösungen verschwinden. Nach DNS-Umstellungen (z. B. Serverumzug) löst der Client sonst weiter die alte IP auf, bis die TTL abläuft.",
            },
            {
              id: "imp_lf10-cmd-1_19",
              q: "Mit welcher Tastenkombination bricht man einen laufenden Befehl in CMD/PowerShell ab?",
              options: ["Strg+C", "Windows+L", "Strg+Alt+Entf", "Alt+F4"],
              correct: 0,
              explain:
                "Strg+C sendet das Abbruchsignal an den laufenden Prozess – z. B. bei einem endlosen ping -t.",
            },
          ],
        },
      ],
    },
  ],
};
