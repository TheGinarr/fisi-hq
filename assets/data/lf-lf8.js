window.LF_CONTENT = window.LF_CONTENT || {};
window.LF_CONTENT["lf8"] = {
  topics: [
    {
      id: "lf8-db",
      title: "Datenbanken vertieft",
      lessons: [
        {
          id: "lf8-db-1",
          title: "Transaktionen, Views & Stored Procedures",
          content: [
            { type: "heading", value: "Transaktionen (ACID)" },
            {
              type: "text",
              value:
                "Eine Transaktion ist eine Folge von Datenbankoperationen, die als Einheit behandelt wird. ACID-Prinzipien: Atomicity (ganz oder gar nicht), Consistency (konsistenter Zustand), Isolation (parallele Transaktionen beeinflussen sich nicht), Durability (Ergebnis bleibt dauerhaft gespeichert).",
            },
            {
              type: "code",
              value:
                "BEGIN TRANSACTION;\n  UPDATE konten SET saldo = saldo - 100 WHERE id = 1;\n  UPDATE konten SET saldo = saldo + 100 WHERE id = 2;\nCOMMIT;\n-- Bei Fehler:\nROLLBACK;",
            },
            { type: "heading", value: "Views" },
            {
              type: "text",
              value:
                "Virtuelle Tabellen basierend auf einer SELECT-Abfrage. Vereinfachen komplexe Abfragen und schützen Daten (nur bestimmte Spalten sichtbar).",
            },
            {
              type: "code",
              value:
                "CREATE VIEW aktive_kunden AS\n  SELECT name, email FROM kunden WHERE status = 'aktiv';",
            },
            { type: "heading", value: "Stored Procedures" },
            {
              type: "text",
              value:
                "Gespeicherte Programmlogik in der Datenbank. Vorteile: Performance (vorkompiliert), Sicherheit (kein direkter Tabellenzugriff), Wiederverwendbarkeit.",
            },
            { type: "heading", value: "Übungsaufgabe 1: ACID" },
            {
              type: "text",
              value:
                "ACID-Eigenschaften anhand einer Banküberweisung (100 EUR von A nach B) erklären.",
            },
            { type: "heading", value: "Unterabfragen: IN, EXISTS und korrelierte Subqueries" },
            {
              type: "text",
              value:
                "In den AP2-Bögen tauchen regelmäßig verschachtelte Abfragen auf. Drei Muster musst du lesen und schreiben können. 1. IN mit Unterabfrage: SELECT name FROM kunde WHERE k_id IN (SELECT k_id FROM auftrag WHERE jahr = 2026) – findet Kunden MIT Aufträgen. 2. EXISTS: SELECT name FROM kunde k WHERE EXISTS (SELECT 1 FROM auftrag a WHERE a.k_id = k.k_id) – prüft je Kundenzeile nur, OB mindestens ein passender Auftrag existiert (korrelierte Unterabfrage: die innere Abfrage nutzt die äußere Zeile). NOT EXISTS ist das Standardmuster für „Kunden OHNE Auftrag“ – die Alternative dazu ist der LEFT JOIN mit IS-NULL-Filter. 3. Unterabfrage mit Aggregat: WHERE preis > (SELECT AVG(preis) FROM artikel) – vergleicht jede Zeile gegen einen berechneten Einzelwert. Merkregel für die Prüfung: IN vergleicht gegen eine Werteliste, EXISTS prüft nur die Existenz (oft schneller, NULL-sicher), und bei „ohne/kein“ führen NOT EXISTS oder LEFT JOIN … IS NULL zum Ziel.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nAtomicity: Beide Buchungen (A -100, B +100) oder keine.\nConsistency: Summe bleibt gleich (500+200=700 → 400+300=700).\nIsolation: Parallele Transaktionen sehen keinen Zwischenzustand.\nDurability: Nach COMMIT dauerhaft, auch bei Stromausfall.\nBei Fehler: ROLLBACK → beide Konten unverändert.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Views" },
            {
              type: "text",
              value: "Wozu Views? Erstelle eine View für aktive Mitarbeiter mit Abteilungsname.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nViews = virtuelle Tabellen (gespeicherte Abfragen). Vereinfachen JOINs, Zugriffskontrolle, Abstraktion.\n\nCREATE VIEW v_aktive_ma AS\nSELECT m.name, a.name AS abteilung\nFROM mitarbeiter m\nJOIN abteilung a ON m.abt_id = a.id\nWHERE m.aktiv = 1;\n\nNutzung: SELECT * FROM v_aktive_ma;",
            },
            { type: "heading", value: "Beispiel 1: Überweisung als Transaktion" },
            {
              type: "code",
              value:
                "START TRANSACTION;\nUPDATE konto SET saldo = saldo - 100 WHERE iban = 'DE11...A';\nUPDATE konto SET saldo = saldo + 100 WHERE iban = 'DE22...B';\nCOMMIT;\n-- Bei Fehler stattdessen: ROLLBACK;",
            },
            {
              type: "text",
              value:
                "Fällt der Server zwischen den beiden UPDATEs aus, sorgt das DBMS beim Neustart dafür, dass die unvollständige Transaktion zurückgerollt wird – die 100 € sind nicht verschwunden.",
            },
            { type: "heading", value: "Beispiel 2: View als Datenschutzfilter" },
            {
              type: "code",
              value:
                "CREATE VIEW v_mitarbeiter_telefonliste AS\nSELECT name, vorname, abteilung, durchwahl\nFROM mitarbeiter;\n-- Empfang erhält SELECT nur auf die View,\n-- nicht auf die Tabelle mit Gehalt und Geburtsdatum.\nGRANT SELECT ON v_mitarbeiter_telefonliste TO empfang;",
            },
          ],
          quiz: [
            {
              id: "imp_lf8-db-1_0",
              q: "ACID: Was bedeutet Atomicity?",
              options: ["Automatisch", "Kleine Daten", "Atomar schnell", "Ganz oder gar nicht"],
              correct: 3,
              explain: "Atomicity = Die Transaktion wird komplett oder gar nicht ausgeführt.",
            },
            {
              id: "imp_lf8-db-1_1",
              q: "Eine View ist?",
              options: [
                "Ein Index",
                "Eine virtuelle Tabelle aus SELECT",
                "Ein Backup",
                "Eine Kopie der Daten",
              ],
              correct: 1,
              explain: "View = virtuelle Tabelle basierend auf einer Abfrage.",
            },
            {
              id: "imp_lf8-db-1_2",
              q: "ACID: A steht für?",
              options: [
                "Atomicity (Alles-oder-Nichts)",
                "Availability",
                "Authorization",
                "Authentication",
              ],
              correct: 0,
              explain: "Atomicity: Transaktion wird ganz oder gar nicht ausgeführt.",
            },
            {
              id: "imp_lf8-db-1_3",
              q: "View in SQL?",
              options: [
                "Backup",
                "Physische Kopie der Tabellendaten",
                "Index",
                "Virtuelle Tabelle basierend auf SELECT",
              ],
              correct: 3,
              explain:
                "View = gespeicherte Abfrage, die sich wie eine Tabelle verhält – sie speichert keine eigenen Daten (anders als eine physische Kopie).",
            },
            {
              id: "imp_lf8-db-1_4",
              q: "Stored Procedure?",
              options: [
                "Indexierung",
                "Gespeichertes SQL-Programm auf dem DB-Server",
                "Replikation",
                "Backup-Prozess",
              ],
              correct: 1,
              explain: "Prozedur: SQL-Code, der auf dem Server gespeichert und aufgerufen wird.",
            },
            {
              id: "imp_lf8-db-1_5",
              q: "ACID: I = ?",
              options: [
                "Isolation (Transaktionen unabhängig voneinander)",
                "Integration (Anbindung externer Datenquellen)",
                "Integrity (referenzielle Integrität der Fremdschlüssel)",
                "Indexing (automatische Indizierung aller Schlüssel)",
              ],
              correct: 0,
              explain: "Isolation: Parallele Transaktionen beeinflussen sich nicht.",
            },
            {
              id: "imp_lf8-db-1_6",
              q: "ROLLBACK?",
              options: [
                "Index erstellen",
                "Transaktion rückgängig machen",
                "Transaktion bestätigen",
                "Tabelle löschen",
              ],
              correct: 1,
              explain: "ROLLBACK macht alle Änderungen der Transaktion rückgängig.",
            },
            {
              id: "imp_lf8-db-1_7",
              q: "COMMIT?",
              options: [
                "Transaktion dauerhaft bestätigen",
                "Lock setzen",
                "Tabelle löschen",
                "Rückgängig machen",
              ],
              correct: 0,
              explain: "COMMIT: Alle Änderungen der Transaktion werden permanent.",
            },
            {
              id: "imp_lf8-db-1_8",
              q: "ACID: D = ?",
              options: [
                "Data",
                "Delete",
                "Durability (Dauerhaftigkeit nach COMMIT)",
                "Distribution",
              ],
              correct: 2,
              explain: "Durability: Nach COMMIT bleiben Daten auch bei Absturz erhalten.",
            },
            {
              id: "imp_lf8-db-1_9",
              q: "Deadlock?",
              options: [
                "Gesperrtes Backup während der Sicherung",
                "Zwei Transaktionen blockieren sich gegenseitig",
                "Ein Index, der Schreibzugriffe dauerhaft sperrt",
                "Eine Abfrage, die durch Sperren schneller läuft",
              ],
              correct: 1,
              explain: "Deadlock: A wartet auf B, B wartet auf A → keiner kommt weiter.",
            },
            {
              id: "imp_lf8-db-1_10",
              q: "Wofür steht das 'A' in ACID?",
              options: [
                "Atomicity – eine Transaktion wird ganz oder gar nicht ausgeführt",
                "Authority – die zentrale Vergabe von Zugriffsrechten",
                "Availability – die ständige Verfügbarkeit des Datenbankservers",
                "Accuracy – die rechnerische Genauigkeit aller Abfrageergebnisse",
              ],
              correct: 0,
              explain:
                "Atomarität: Entweder werden alle Einzelschritte einer Transaktion ausgeführt oder keiner (Rollback).",
            },
            {
              id: "imp_lf8-db-1_11",
              q: "Welcher SQL-Befehl macht alle Änderungen einer laufenden Transaktion rückgängig?",
              options: ["UNDO", "REVERT", "ROLLBACK", "DELETE"],
              correct: 2,
              explain:
                "ROLLBACK verwirft alle Änderungen seit Transaktionsbeginn; COMMIT macht sie dauerhaft.",
            },
            {
              id: "imp_lf8-db-1_12",
              q: "Was ist ein 'Dirty Read'?",
              options: [
                "Lesen von Rohdaten direkt von der Festplatte am Puffer vorbei",
                "Lesen noch nicht committeter Änderungen einer anderen Transaktion",
                "Lesen von Tabellen ohne das erforderliche SELECT-Recht",
                "Lesen aus einer defekten, nicht reparierten Tabelle",
              ],
              correct: 1,
              explain:
                "Bei niedriger Isolationsstufe kann eine Transaktion Zwischenstände sehen, die später per Rollback verworfen werden – die gelesenen Daten waren dann nie gültig.",
            },
            {
              id: "imp_lf8-db-1_13",
              q: "Welcher Vorteil spricht für den Einsatz einer View?",
              options: [
                "Views beschleunigen jede Abfrage automatisch durch integrierte Indizes",
                "Nutzer sehen nur freigegebene Spalten/Zeilen, ohne die Basistabelle zu kennen",
                "Views ersetzen regelmäßige Backups, da sie die Daten zusätzlich vorhalten",
                "Views speichern Daten doppelt und erhöhen so die Sicherheit",
              ],
              correct: 1,
              explain:
                "Eine View ist eine gespeicherte Abfrage: Sie vereinfacht komplexe Joins und dient der Zugriffssteuerung (z. B. Personalliste ohne Gehaltsspalte).",
            },
            {
              id: "imp_lf8-db-1_14",
              q: "Was ist eine Stored Procedure?",
              options: [
                "Ein zusammengesetzter Index über mehrere Spalten einer Tabelle",
                "Ein auf dem Datenbankserver gespeicherter, aufrufbarer Programmcode",
                "Eine automatisch angelegte Sicherungskopie der gesamten Datenbank",
                "Eine temporäre Tabelle ohne Primärschlüssel und ohne Indizes",
              ],
              correct: 1,
              explain:
                "Stored Procedures kapseln Logik serverseitig: weniger Netzwerkverkehr, zentrale Pflege, Rechtevergabe auf die Prozedur statt auf Tabellen.",
            },
            {
              id: "imp_lf8-db-1_15",
              q: "Wann wird ein Trigger ausgeführt?",
              options: [
                "Automatisch bei jedem SELECT auf die betroffene Tabelle",
                "Nur bei manuellem Aufruf durch den Datenbankadministrator per EXECUTE",
                "Automatisch bei definierten Ereignissen wie INSERT, UPDATE oder DELETE",
                "Einmalig beim Start des Datenbankservers während der Initialisierung",
              ],
              correct: 2,
              explain:
                "Trigger reagieren automatisch auf Datenänderungen, z. B. um Änderungen in einer Historientabelle zu protokollieren.",
            },
            {
              id: "imp_lf8-db-1_16",
              q: "Welche Aussage zu Indizes ist korrekt?",
              options: [
                "Indizes sparen immer Speicherplatz, da sie Daten komprimieren",
                "Indizes beschleunigen sämtliche Lese- und Schreiboperationen gleichermaßen",
                "Pro Tabelle ist technisch nur ein einziger Index erlaubt",
                "Indizes beschleunigen Lesezugriffe, verlangsamen aber Schreibzugriffe",
              ],
              correct: 3,
              explain:
                "Jeder Index muss bei INSERT/UPDATE/DELETE mitgepflegt werden und belegt Speicher – sinnvoll auf Spalten, nach denen häufig gesucht wird.",
            },
            {
              id: "imp_lf8-db-1_17",
              q: "Was ist ein Deadlock?",
              options: [
                "Ein abgelaufenes Datenbank-Passwort, das Anmeldungen am Server verhindert",
                "Eine leere Tabelle, deren Struktur existiert, die aber keine Datensätze enthält",
                "Zwei Transaktionen blockieren sich gegenseitig durch wechselseitige Sperren",
                "Ein vollständig belegter Tablespace, in den keine weiteren Daten geschrieben werden können",
              ],
              correct: 2,
              explain:
                "Transaktion A hält Sperre 1 und wartet auf Sperre 2, Transaktion B hält Sperre 2 und wartet auf Sperre 1 – das DBMS löst dies auf, indem es eine Transaktion abbricht.",
            },
            {
              id: "imp_lf8-db-1_18",
              q: "Wofür steht das 'D' in ACID?",
              options: [
                "Durability – bestätigte Änderungen überleben auch einen Systemausfall",
                "Delete – jede Transaktion muss vollständig löschbar sein",
                "Dependency – Transaktionen dürfen nur abhängig voneinander laufen",
                "Distribution – Daten werden automatisch auf mehrere Server verteilt",
              ],
              correct: 0,
              explain:
                "Dauerhaftigkeit: Nach dem COMMIT sind Daten persistent gespeichert (Transaktionslog), auch bei Stromausfall direkt danach.",
            },
            {
              id: "imp_lf8-db-1_19",
              q: "Eine Überweisung bucht 100 € von Konto A ab und auf Konto B auf. Warum gehören beide UPDATEs in eine Transaktion?",
              options: [
                "Damit die beiden UPDATE-Anweisungen schneller ausgeführt werden",
                "Damit bei einem Fehler nach dem ersten UPDATE kein Geld 'verschwindet'",
                "Weil SQL zwei einzelne UPDATEs sonst mit einem Syntaxfehler ablehnt",
                "Damit beide Konten nach der Buchung dauerhaft gesperrt bleiben",
              ],
              correct: 1,
              explain:
                "Atomarität: Schlägt die Gutschrift fehl, wird auch die Abbuchung zurückgerollt – sonst wäre das Geld weg (inkonsistenter Zustand).",
            },
            {
              id: "imp_lf8-db-1_x1",
              q: "Welches SQL-Muster findet alle Kunden OHNE einen einzigen Auftrag?",
              options: [
                "INNER JOIN auf die Auftragstabelle mit WHERE jahr IS NULL",
                "NOT EXISTS mit korrelierter Unterabfrage auf die Auftragstabelle (oder LEFT JOIN … IS NULL)",
                "GROUP BY k_id HAVING COUNT(*) > 0 auf der Auftragstabelle",
                "DELETE FROM kunde WHERE auftrag = 0",
              ],
              correct: 1,
              explain:
                "Der INNER JOIN blendet auftragslose Kunden gerade aus. NOT EXISTS prüft je Kunde, dass KEIN passender Auftrag existiert – gleichwertig zum LEFT JOIN mit IS-NULL-Filter.",
            },
          ],
        },
      ],
    },
    {
      id: "lf8-api",
      title: "APIs & Schnittstellen",
      lessons: [
        {
          id: "lf8-api-1",
          title: "REST-APIs & Datenformate",
          content: [
            { type: "heading", value: "REST (Representational State Transfer)" },
            {
              type: "text",
              value:
                "Architekturstil für Web-APIs. Prinzipien: Zustandslos (jede Anfrage enthält alle Infos), Ressourcen-orientiert (URLs identifizieren Ressourcen), HTTP-Methoden: GET (lesen), POST (erstellen), PUT (ersetzen), PATCH (teilweise ändern), DELETE (löschen). Statuscodes: 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error.",
            },
            { type: "heading", value: "Datenformate" },
            {
              type: "code",
              value:
                '// JSON – Standard für REST-APIs\n{"kunden": [\n  {"id": 1, "name": "Max", "aktiv": true},\n  {"id": 2, "name": "Anna", "aktiv": false}\n]}\n\n<!-- XML – älter, aber in Enterprise üblich -->\n<kunden>\n  <kunde id="1"><name>Max</name></kunde>\n</kunden>\n\n# CSV – für tabellarische Daten\nid,name,aktiv\n1,Max,true\n2,Anna,false',
            },
            { type: "heading", value: "API-Sicherheit" },
            {
              type: "text",
              value:
                "API Key: Einfach, aber unsicher wenn geleakt. OAuth 2.0: Token-basiert, Standard für moderne APIs. JWT (JSON Web Token): Selbstbeschreibendes Token mit Header.Payload.Signatur. Rate Limiting: Anfragen pro Zeiteinheit begrenzen.",
            },
            { type: "heading", value: "Übungsaufgabe: REST" },
            {
              type: "text",
              value:
                "Welche HTTP-Methode für: a) abrufen, b) anlegen, c) komplett ersetzen, d) löschen? Was bedeutet 404 vs. 500?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Abrufen   -> GET\nb) Anlegen   -> POST\nc) Ersetzen  -> PUT (PATCH = teilweise)\nd) Löschen   -> DELETE\n\nStatuscodes:\n404 Not Found = Ressource existiert nicht (Client)\n500 Internal Server Error = Fehler im Server\n2xx=Erfolg, 4xx=Client-Fehler, 5xx=Server-Fehler",
            },
            { type: "heading", value: "Übungsaufgabe 2: REST-Methoden" },
            {
              type: "text",
              value: "HTTP-Methoden den CRUD-Operationen zuordnen mit URL-Beispielen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nCreate→POST /api/kunden, Read→GET /api/kunden/42, Update→PUT/PATCH /api/kunden/42, Delete→DELETE /api/kunden/42.\nGET idempotent (kein Body). POST nicht idempotent. PUT idempotent.",
            },
            { type: "heading", value: "Beispiel 1: CRUD-Operationen einer Kunden-API" },
            {
              type: "list",
              value: [
                "GET /api/v1/kunden – Liste aller Kunden (200 OK)",
                "GET /api/v1/kunden/42 – Kunde 42 lesen (200 OK / 404 Not Found)",
                "POST /api/v1/kunden – Kunde anlegen (201 Created)",
                "PUT /api/v1/kunden/42 – Kunde 42 komplett ersetzen (200 OK)",
                "PATCH /api/v1/kunden/42 – einzelne Felder ändern (200 OK)",
                "DELETE /api/v1/kunden/42 – Kunde löschen (204 No Content)",
              ],
            },
            { type: "heading", value: "Beispiel 2: Anfrage und Antwort im Klartext" },
            {
              type: "code",
              value:
                'POST /api/v1/kunden HTTP/1.1\nContent-Type: application/json\n\n{ "name": "Muster GmbH", "ort": "Lüneburg" }\n\n--- Antwort ---\nHTTP/1.1 201 Created\nLocation: /api/v1/kunden/43\nContent-Type: application/json\n\n{ "id": 43, "name": "Muster GmbH", "ort": "Lüneburg" }',
            },
          ],
          quiz: [
            {
              id: "imp_lf8-api-1_0",
              q: "HTTP 404 bedeutet?",
              options: ["Unauthorized", "Not Found", "OK", "Server Error"],
              correct: 1,
              explain: "404 = Ressource nicht gefunden.",
            },
            {
              id: "imp_lf8-api-1_1",
              q: "REST: Neue Ressource erstellen?",
              options: ["POST", "DELETE", "GET", "PUT"],
              correct: 0,
              explain: "POST = neue Ressource erstellen.",
            },
            {
              id: "imp_lf8-api-1_2",
              q: "REST: GET?",
              options: ["Daten ändern", "Daten erstellen", "Daten löschen", "Daten lesen/abrufen"],
              correct: 3,
              explain: "GET = Ressource lesen (safe, idempotent).",
            },
            {
              id: "imp_lf8-api-1_3",
              q: "HTTP Status 404?",
              options: ["Server Error", "Unauthorized", "Not Found", "OK"],
              correct: 2,
              explain: "404 = Ressource nicht gefunden.",
            },
            {
              id: "imp_lf8-api-1_4",
              q: "JSON vs. XML?",
              options: [
                "JSON = leichter und kompakter, XML = Schema-Validierung",
                "XML wurde als moderner Nachfolger von JSON entwickelt",
                "JSON ist ausschließlich in JavaScript-Programmen nutzbar",
                "Beide Formate sind syntaktisch identisch und frei austauschbar",
              ],
              correct: 0,
              explain: "JSON: Kompakter, einfacher zu parsen. XML: Komplexer, mit Schema/DTD.",
            },
            {
              id: "imp_lf8-api-1_5",
              q: "OAuth2?",
              options: ["Verschlüsselung", "VPN", "Autorisierungsprotokoll", "Datenbank"],
              correct: 2,
              explain:
                "Zugriff ohne Passwort-Weitergabe. OAuth2: Drittanbieter-App bekommt begrenzten Zugriff ohne Passwort.",
            },
            {
              id: "imp_lf8-api-1_6",
              q: "REST: PUT vs. PATCH?",
              options: [
                "PATCH legt eine neue Ressource an, PUT ruft sie nur ab",
                "Beide Methoden verhalten sich identisch und sind austauschbar",
                "PUT = komplett ersetzen, PATCH = teilweise ändern",
                "PUT entfernt die Ressource, PATCH stellt sie wieder her",
              ],
              correct: 2,
              explain: "PUT ersetzt die gesamte Ressource, PATCH ändert nur Teile.",
            },
            {
              id: "imp_lf8-api-1_7",
              q: "HTTP 201?",
              options: ["Created (Ressource erfolgreich erstellt)", "Error", "Not Found", "OK"],
              correct: 0,
              explain: "201 Created: POST erfolgreich, neue Ressource angelegt.",
            },
            {
              id: "imp_lf8-api-1_8",
              q: "HTTP 500?",
              options: ["Created", "Not Found", "Internal Server Error", "OK"],
              correct: 2,
              explain: "500: Serverfehler.",
            },
            {
              id: "imp_lf8-api-1_9",
              q: "REST: DELETE?",
              options: ["Erstellen", "Ändern", "Lesen", "Ressource löschen"],
              correct: 3,
              explain: "DELETE: Ressource entfernen.",
            },
            {
              id: "imp_lf8-api-1_10",
              q: "Welche HTTP-Methode ist idempotent?",
              options: [
                "PUT",
                "POST",
                "Keine HTTP-Methode ist idempotent",
                "Alle HTTP-Methoden sind idempotent",
              ],
              correct: 0,
              explain:
                "PUT (vollständiges Ersetzen) führt bei mehrfacher Ausführung zum selben Ergebnis. POST (Anlegen) erzeugt bei Wiederholung dagegen neue Ressourcen.",
            },
            {
              id: "imp_lf8-api-1_11",
              q: "Welcher Statuscode bestätigt das erfolgreiche Anlegen einer Ressource?",
              options: ["200 OK", "301 Moved Permanently", "201 Created", "204 No Content"],
              correct: 2,
              explain:
                "201 Created ist die korrekte Antwort auf ein erfolgreiches POST, oft mit Location-Header zur neuen Ressource.",
            },
            {
              id: "imp_lf8-api-1_12",
              q: "Was bedeutet der Statuscode 401?",
              options: [
                "Zugriff trotz Anmeldung verboten",
                "Serverfehler",
                "Nicht authentifiziert",
                "Ressource nicht gefunden",
              ],
              correct: 2,
              explain:
                "Anmeldung erforderlich. 401 Unauthorized = Authentifizierung fehlt/ungültig. 403 Forbidden = authentifiziert, aber keine Berechtigung. 404 = nicht gefunden.",
            },
            {
              id: "imp_lf8-api-1_13",
              q: "Was kennzeichnet eine RESTful API als 'stateless'?",
              options: [
                "Es gibt keine Statuscodes",
                "Die API kann keine Daten ändern",
                "Der Server speichert keinen Sitzungszustand",
                "Die API funktioniert ohne Server",
              ],
              correct: 2,
              explain:
                "Jede Anfrage enthält alle nötigen Informationen. Zustandslosigkeit macht APIs gut skalierbar: Jede Anfrage (inkl. Token) ist in sich vollständig, beliebige Server können sie beantworten.",
            },
            {
              id: "imp_lf8-api-1_14",
              q: "Welcher Content-Type-Header kennzeichnet eine JSON-Antwort?",
              options: ["application/xml", "application/json", "text/html", "multipart/form-data"],
              correct: 1,
              explain:
                "Der Content-Type teilt dem Client mit, wie der Body zu interpretieren ist; für JSON ist application/json korrekt.",
            },
            {
              id: "imp_lf8-api-1_15",
              q: "Worin unterscheiden sich PUT und PATCH?",
              options: [
                "PUT überträgt unverschlüsselt, PATCH verschlüsselt die Nutzdaten automatisch",
                "PUT ersetzt die Ressource vollständig, PATCH ändert nur einzelne Felder",
                "PATCH löscht die Ressource, PUT legt sie grundsätzlich neu an",
                "Es gibt keinen Unterschied, beide Methoden sind beliebig austauschbar",
              ],
              correct: 1,
              explain:
                "PUT überträgt die komplette neue Repräsentation; PATCH überträgt nur die Änderungen (z. B. nur die neue E-Mail-Adresse).",
            },
            {
              id: "imp_lf8-api-1_16",
              q: "Wofür stehen Pfad-Parameter wie /kunden/42 im Gegensatz zu Query-Parametern wie ?status=aktiv?",
              options: [
                "Pfad identifiziert eine konkrete Ressource, Query filtert/sortiert",
                "Pfad-Parameter funktionieren ausschließlich mit POST-Requests",
                "Query-Parameter werden bei der Übertragung immer verschlüsselt",
                "Beide Parameterarten sind technisch beliebig austauschbar",
              ],
              correct: 0,
              explain:
                "Konvention: /kunden/42 = die Ressource Kunde 42; /kunden?status=aktiv = Liste, gefiltert nach Status.",
            },
            {
              id: "imp_lf8-api-1_17",
              q: "Welches Format ist menschenlesbar, leichtgewichtig und der De-facto-Standard für REST-APIs?",
              options: ["Binärformat", "CSV", "YAML ausschließlich", "JSON"],
              correct: 3,
              explain:
                "JSON ist kompakt, von praktisch jeder Sprache nativ unterstützt und hat XML als Standard für Web-APIs weitgehend abgelöst.",
            },
            {
              id: "imp_lf8-api-1_18",
              q: "Warum versionieren viele Anbieter ihre APIs (z. B. /v1/kunden)?",
              options: [
                "Weil der HTTP-Standard eine Versionsangabe im Pfad vorschreibt",
                "Damit bestehende Clients bei API-Änderungen weiter funktionieren",
                "Zur Verschlüsselung der Anfragen über den Versionspfad",
                "Aus rein optischen Gründen für besser lesbare URLs",
              ],
              correct: 1,
              explain:
                "Breaking Changes kommen in eine neue Version (/v2/...), während /v1/ für Altclients erhalten bleibt – kontrollierte Migration statt Ausfall.",
            },
            {
              id: "imp_lf8-api-1_19",
              q: "Ein Client erhält auf GET /api/artikel/999 die Antwort 404. Was ist die korrekte Interpretation?",
              options: [
                "Der Artikel mit der ID 999 existiert nicht",
                "Die Anfrage war syntaktisch falsch",
                "Der Client hat kein gültiges Passwort",
                "Der Server ist abgestürzt",
              ],
              correct: 0,
              explain:
                "404 Not Found: Die angefragte Ressource gibt es nicht. Serverfehler wären 5xx, Syntaxfehler der Anfrage 400.",
            },
          ],
        },
        {
          id: "lf8-gw-1",
          title: "API-Gateway & Management",
          content: [
            { type: "heading", value: "Was ist ein API-Gateway?" },
            {
              type: "text",
              value:
                "Ein API-Gateway ist der zentrale Einstiegspunkt für alle API-Anfragen. Es sitzt zwischen Clients (Frontend, Mobile Apps, externe Partner) und Backend-Services. Funktionen: Routing (Anfragen an richtigen Microservice weiterleiten), Authentifizierung (API-Keys, OAuth2-Token prüfen), Rate Limiting (Anfragen pro Zeiteinheit begrenzen), Request/Response Transformation (Header, Body umschreiben), Caching, Logging und Monitoring, SSL-Termination, CORS-Handling.",
            },
            { type: "heading", value: "API-Gateway vs. Reverse Proxy" },
            {
              type: "text",
              value:
                "Reverse Proxy: Allgemein für HTTP-Traffic (Load Balancing, SSL, Caching). API-Gateway: Speziell für APIs, zusätzlich Authentifizierung, Rate Limiting, API-Versionierung, Request-Transformation, Developer Portal. In der Praxis: Nginx/Traefik als Reverse Proxy, Kong/AWS API Gateway/Azure APIM als API-Gateway. Oft werden beide kombiniert.",
            },
            { type: "heading", value: "API-Versionierung" },
            {
              type: "text",
              value:
                "URL-Pfad: /api/v1/users, /api/v2/users (häufigste Methode). Header: Accept: application/vnd.api.v2+json. Query: /api/users?version=2. Warum? Bestehende Clients sollen weiter funktionieren, wenn sich die API ändert. Breaking Changes nur in neuer Version.",
            },
            { type: "heading", value: "Produkte und Praxis" },
            {
              type: "text",
              value:
                "Open Source: Kong (Nginx-basiert), Traefik, Tyk. Cloud: AWS API Gateway, Azure API Management, Google Cloud Endpoints. Swagger/OpenAPI: Standard zur API-Dokumentation. YAML/JSON-Datei beschreibt alle Endpoints, Parameter, Responses. Swagger UI: Interaktive Doku zum Testen direkt im Browser.",
            },
            {
              type: "note",
              value:
                "API-Gateways werden in Microservice-Architekturen fast immer eingesetzt. Für FiSi relevant wenn Kunden Cloud-native Anwendungen betreiben.",
            },
            { type: "heading", value: "Übungsaufgabe 1: API-Gateway Aufgaben" },
            {
              type: "text",
              value: "Aufgaben eines API-Gateways? Warum zwischen Client und Microservices?",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nZentraler Eintrittspunkt. Aufgaben: Routing, Authentifizierung (JWT), Rate Limiting, Load Balancing, Caching, Logging, Transformation (XML→JSON).\nOhne: Client muss jeden Service kennen. Mit: Ein Endpunkt.",
            },
            { type: "heading", value: "Beispiel 1: Rate Limit in der Praxis" },
            {
              type: "text",
              value:
                "Ein Kunde bucht den Tarif 'Basic' mit 60 Anfragen pro Minute. Sein Lagersystem fragt im Fehlerfall in einer Endlosschleife die API ab – 500 Anfragen in 10 Sekunden. Das Gateway beantwortet ab Anfrage 61 alles mit 429 und schützt so das Backend; die anderen Kunden merken nichts.",
            },
            { type: "heading", value: "Beispiel 2: Gateway als Fassade vor Microservices" },
            {
              type: "text",
              value:
                "Der Webshop ruft nur api.firma.de auf. Das Gateway routet /produkte zum Produktdienst, /bestellungen zum Bestelldienst und /kunden zum CRM. Als der Produktdienst später auf einen neuen Server umzieht, ändert sich nur die Gateway-Konfiguration – kein einziger Client muss angepasst werden.",
            },
            { type: "heading", value: "Übungsaufgabe 2: Statuscodes am Gateway zuordnen" },
            {
              type: "text",
              value:
                "Ordne zu: (a) API-Key fehlt, (b) Key gültig, aber Tarif erlaubt diesen Endpunkt nicht, (c) Limit überschritten, (d) Backend antwortet nicht. Verfügbare Codes: 401, 403, 429, 502/504.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n(a) 401 Unauthorized – keine/ungültige Authentifizierung.\n(b) 403 Forbidden – authentifiziert, aber nicht berechtigt.\n(c) 429 Too Many Requests – Rate Limit erreicht.\n(d) 502 Bad Gateway (Backend liefert Fehler) bzw. 504 Gateway Timeout (Backend antwortet nicht rechtzeitig).",
            },
          ],
          quiz: [
            {
              id: "imp_lf8-gw-1_0",
              q: "API-Gateway Hauptfunktion?",
              options: [
                "Auflösung von API-Hostnamen in IP-Adressen (DNS)",
                "Zentrale Datenbank, in der alle API-Daten liegen",
                "Webserver, der die HTML-Seiten der API rendert",
                "Zentraler Einstiegspunkt für alle API-Anfragen",
              ],
              correct: 3,
              explain: "Alle Requests laufen durch das Gateway.",
            },
            {
              id: "imp_lf8-gw-1_1",
              q: "Rate Limiting?",
              options: [
                "Erhöht die verfügbare Bandbreite bei hoher Auslastung",
                "Beschränkt den API-Zugriff auf Administratorkonten",
                "Anfragen pro Zeiteinheit begrenzen (Überlastschutz)",
                "Protokolliert alle eingehenden Anfragen zur Auswertung",
              ],
              correct: 2,
              explain: "Schutz vor Überlastung und Missbrauch.",
            },
            {
              id: "imp_lf8-gw-1_2",
              q: "API-Gateway vs. Reverse Proxy?",
              options: [
                "Gateway = nur Routing",
                "Gateway = API-spezifisch",
                "Gleich",
                "Proxy = mehr Features",
              ],
              correct: 1,
              explain:
                "Auth, Rate Limit, Transformation. Gateway: API-Routing + Auth + Rate Limit + Transformation.",
            },
            {
              id: "imp_lf8-gw-1_3",
              q: "API-Key?",
              options: [
                "Eindeutiger Schlüssel zur Identifikation des API-Nutzers",
                "Session-ID, die der Browser nach jedem Login neu erzeugt",
                "Verschlüsselungsalgorithmus für die API-Übertragung",
                "Das Benutzerpasswort, das bei jedem API-Aufruf mitgesendet wird",
              ],
              correct: 0,
              explain: "Identifiziert, welche App/welcher Nutzer die API aufruft.",
            },
            {
              id: "imp_lf8-gw-1_4",
              q: "API-Versionierung: Warum?",
              options: [
                "Gesetzliche Pflicht: APIs müssen versioniert werden",
                "Unnötig – Clients passen sich Änderungen automatisch an",
                "Bestehende Clients nicht durch Änderungen brechen",
                "Nur Optik: Die Versionsnummer dient allein dem Marketing",
              ],
              correct: 2,
              explain: "v1/v2: Alte Clients funktionieren weiter.",
            },
            {
              id: "imp_lf8-gw-1_5",
              q: "Kong, Traefik, AWS API Gateway sind?",
              options: ["Datenbanken", "API-Gateway-Produkte", "Firewalls", "Webserver"],
              correct: 1,
              explain: "Bekannte API-Gateway-Implementierungen.",
            },
            {
              id: "imp_lf8-gw-1_6",
              q: "CORS?",
              options: ["Datenbank", "Verschlüsselung", "Cross-Origin Resource Sharing", "Routing"],
              correct: 2,
              explain:
                "Browser-Sicherheit für API-Zugriffe. Browser erlaubt/blockiert API-Aufrufe von anderen Domains.",
            },
            {
              id: "imp_lf8-gw-1_7",
              q: "Circuit Breaker Pattern?",
              options: [
                "Elektrische Sicherung im Rack, die Server vor Überspannung schützt",
                "Firewall-Regel, die Anfragen verdächtiger IPs dauerhaft blockiert",
                "Load Balancer, der Anfragen gleichmäßig auf Backends verteilt",
                "Bei wiederholtem Backend-Fehler Anfragen stoppen statt weiterleiten",
              ],
              correct: 3,
              explain: "Verhindert Kaskaden-Ausfälle bei Backend-Problemen.",
            },
            {
              id: "imp_lf8-gw-1_8",
              q: "API-Gateway: Request Transformation?",
              options: [
                "Header/Body/Parameter vor Weiterleitung an Backend ändern",
                "Nicht möglich, Gateways leiten Requests immer unverändert weiter",
                "Requests werden lediglich protokolliert, nie verändert",
                "Requests werden nur anhand der URL ans Backend geroutet",
              ],
              correct: 0,
              explain: "Gateway kann Requests umschreiben, bevor das Backend sie bekommt.",
            },
            {
              id: "imp_lf8-gw-1_9",
              q: "Swagger/OpenAPI?",
              options: [
                "NoSQL-Datenbank zur Speicherung von API-Requests",
                "Standard zur API-Dokumentation und -Spezifikation",
                "Programmiersprache für Backend-Microservices",
                "API-Gateway mit integriertem Load Balancer",
              ],
              correct: 1,
              explain: "OpenAPI Spec: Maschinenlesbare API-Beschreibung.",
            },
            {
              id: "imp_lf8-gw-1_10",
              q: "Welche Aufgabe übernimmt ein API-Gateway typischerweise NICHT?",
              options: [
                "Physische Verkabelung der Server",
                "Routing zu Backend-Diensten",
                "Authentifizierung der Clients",
                "Rate Limiting",
              ],
              correct: 0,
              explain:
                "Ein API-Gateway ist eine Software-Komponente: Auth, Limits, Routing, Caching, Logging – aber keine Hardware-Installation.",
            },
            {
              id: "imp_lf8-gw-1_11",
              q: "Was bewirkt Rate Limiting am Gateway?",
              options: [
                "Es begrenzt die Anzahl Anfragen pro Client und Zeitraum",
                "Es erhöht die verfügbare Bandbreite je Client",
                "Es komprimiert alle Antworten vor der Auslieferung",
                "Es verschlüsselt eingehende Anfragen mit TLS",
              ],
              correct: 0,
              explain:
                "Rate Limiting schützt Backends vor Überlast und Missbrauch, z. B. maximal 100 Anfragen pro Minute und API-Key.",
            },
            {
              id: "imp_lf8-gw-1_12",
              q: "Mit welchem Statuscode lehnt ein Gateway Anfragen ab, die das Rate Limit überschreiten?",
              options: [
                "301 Moved Permanently",
                "202 Accepted",
                "429 Too Many Requests",
                "404 Not Found",
              ],
              correct: 2,
              explain:
                "429 signalisiert dem Client: Limit erreicht, später erneut versuchen (oft mit Retry-After-Header).",
            },
            {
              id: "imp_lf8-gw-1_13",
              q: "Was ist ein API-Key?",
              options: [
                "Das zentrale Administratorpasswort für den Zugang zum API-Server",
                "Ein geheimer Schlüssel zur Identifikation des aufrufenden Clients",
                "Ein TLS-Zertifikat zur Transportverschlüsselung der API-Aufrufe",
                "Eine indizierte Datenbank-Spalte zur schnelleren Suche von Datensätzen",
              ],
              correct: 1,
              explain:
                "Der API-Key wird pro Anfrage mitgesendet (Header oder Query) und ordnet die Nutzung einem Kunden/Projekt zu – Identifikation, aber nur schwache Authentifizierung.",
            },
            {
              id: "imp_lf8-gw-1_14",
              q: "Was ist ein JWT (JSON Web Token)?",
              options: [
                "Ein Kompressionsverfahren, das JSON-Daten vor der Übertragung verkleinert",
                "Ein signiertes Token, das Identitäts- und Berechtigungsdaten transportiert",
                "Ein Standard für Netzwerkkabel mit Kategorien für Übertragungsraten",
                "Ein Speicherformat für Datenbanken, das Tabellen als JSON-Dateien ablegt",
              ],
              correct: 1,
              explain:
                "JWTs bestehen aus Header.Payload.Signatur (Base64). Der Server prüft die Signatur und kann zustandslos authentifizieren – passend zur REST-Idee.",
            },
            {
              id: "imp_lf8-gw-1_15",
              q: "Was bedeutet TLS-Terminierung am Gateway?",
              options: [
                "Das Gateway verschlüsselt ausschließlich die Antworten an den Client",
                "TLS wird für die gesamte Kommunikationsstrecke komplett deaktiviert",
                "Das Gateway beendet die TLS-Verschlüsselung und reicht Anfragen intern weiter",
                "Jeder Backend-Server braucht ein eigenes öffentliches Zertifikat",
              ],
              correct: 2,
              explain:
                "Zertifikate werden zentral am Gateway gepflegt; intern kann unverschlüsselt oder mit internem Zertifikat kommuniziert werden.",
            },
            {
              id: "imp_lf8-gw-1_16",
              q: "Worin unterscheidet sich ein API-Gateway von einem einfachen Reverse Proxy?",
              options: [
                "Ein Reverse Proxy beherrscht kein HTTP und leitet ausschließlich rohe TCP-Verbindungen weiter",
                "Ein API-Gateway arbeitet ausschließlich mit FTP und SFTP für den Dateiaustausch zwischen Diensten",
                "Gar nicht – beide Begriffe bezeichnen dieselbe Komponente und sind austauschbar",
                "Das Gateway bietet zusätzlich API-spezifische Funktionen wie Key-Verwaltung, Quotas und Versionsrouting",
              ],
              correct: 3,
              explain:
                "Jedes Gateway ist auch Reverse Proxy, aber mit API-Management: Schlüssel, Limits, Analytics, Entwicklerportal.",
            },
            {
              id: "imp_lf8-gw-1_17",
              q: "Warum platziert man ein Gateway vor eine Microservice-Landschaft?",
              options: [
                "Weil Microservices untereinander kein HTTP sprechen und einen Protokollübersetzer benötigen",
                "Damit Clients einen einheitlichen Einstiegspunkt haben, statt jeden Dienst einzeln zu kennen",
                "Um die Anzahl der laufenden Dienste zu erhöhen und so die Ausfallsicherheit zu steigern",
                "Um die Datenbanken der einzelnen Dienste durch einen zentralen Speicher zu ersetzen",
              ],
              correct: 1,
              explain:
                "Der Client ruft nur das Gateway auf; das Routing zu den (wechselnden) internen Diensten bleibt verborgen – lose Kopplung.",
            },
            {
              id: "imp_lf8-gw-1_18",
              q: "Welche Information liefert ein Gateway-Log typischerweise für die Abrechnung (Monetarisierung)?",
              options: [
                "Die MAC-Adresse des Entwicklers",
                "Anzahl der Anfragen pro API-Key",
                "Den Quellcode des Backends",
                "Die Zimmertemperatur im Rechenzentrum",
              ],
              correct: 1,
              explain:
                "Nutzungsbasierte Modelle (z. B. 10.000 Calls frei, danach kostenpflichtig) basieren auf den pro Key gezählten Aufrufen.",
            },
            {
              id: "imp_lf8-gw-1_19",
              q: "Ein Backend-Dienst fällt aus. Welche Gateway-Funktion verhindert, dass wartende Anfragen das ganze System lahmlegen?",
              options: [
                "Das Deaktivieren von TLS zur Reduktion der Antwortzeiten",
                "Das Erhöhen des Rate Limits für alle wartenden Clients",
                "Das automatische Löschen der betroffenen Backend-Datenbank",
                "Timeout mit Fehlerantwort (Fail Fast) statt endlosem Warten",
              ],
              correct: 3,
              explain:
                "Kurze Timeouts und schnelle Fehlerantworten verhindern, dass sich blockierte Verbindungen aufstauen und weitere Dienste mitreißen.",
            },
          ],
        },
      ],
    },
    {
      id: "lf8-nosql",
      title: "NoSQL & Datenintegration",
      lessons: [
        {
          id: "lf8-ns-1",
          title: "NoSQL-Datenbanken",
          content: [
            { type: "heading", value: "Warum NoSQL?" },
            {
              type: "text",
              value:
                "Relationale DBs (SQL) stoßen an Grenzen bei: riesigen Datenmengen (Big Data), unstrukturierten Daten (JSON-Dokumente, Bilder), hoher Schreiblast, horizontaler Skalierung. NoSQL = Not Only SQL.",
            },
            { type: "heading", value: "NoSQL-Typen" },
            {
              type: "text",
              value:
                "Dokument-orientiert: MongoDB, CouchDB. Daten als JSON-Dokumente, flexibles Schema. Key-Value: Redis, DynamoDB. Schnellster Zugriff, einfachstes Modell. Spaltenorientiert: Cassandra, HBase. Optimiert für Aggregationen und Zeitreihen. Graph: Neo4j. Für Beziehungsdaten (soziale Netze, Netzwerktopologien).",
            },
            { type: "heading", value: "CAP-Theorem" },
            {
              type: "text",
              value:
                "Ein verteiltes System kann maximal 2 von 3 gleichzeitig garantieren: Consistency (alle Knoten sehen gleiche Daten), Availability (jede Anfrage wird beantwortet), Partition Tolerance (System funktioniert trotz Netzwerkpartition). SQL-DBs: CA. MongoDB: CP. Cassandra: AP.",
            },
            {
              type: "note",
              value:
                "In der Praxis: Für die meisten FiSi-Aufgaben sind relationale DBs richtig. NoSQL ist relevant bei Cloud-Diensten, IoT-Daten und Webanwendungen mit hohem Traffic.",
            },
            { type: "heading", value: "Übungsaufgabe 1: SQL vs. NoSQL" },
            { type: "text", value: "Wann NoSQL besser als relational? 3 konkrete Szenarien." },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n1. Semi-strukturierte Daten → Document Store (MongoDB)\n2. Hohe Schreiblast/Skalierung → Wide Column (Cassandra)\n3. Graphdaten → Graph DB (Neo4j)\nSQL besser bei: ACID, feste Strukturen, JOINs, Reporting.\nCAP-Theorem: Nur 2 von 3 (Consistency, Availability, Partition Tolerance).",
            },
            { type: "heading", value: "Beispiel 1: Session-Store mit Redis" },
            {
              type: "text",
              value:
                "Ein Webshop läuft auf drei Webservern hinter einem Load Balancer. Die Sitzungsdaten (Warenkorb, Login) liegen zentral in Redis: SET session:abc123 '{...}' EX 1800 speichert die Sitzung mit 30 Minuten Ablaufzeit. Egal auf welchem Webserver die nächste Anfrage landet – der Warenkorb ist da. Fällt ein Webserver aus, geht keine Sitzung verloren.",
            },
            { type: "heading", value: "Beispiel 2: Produktkatalog in MongoDB" },
            {
              type: "code",
              value:
                '// Ein Fernseher und ein T-Shirt in derselben Collection –\n// unterschiedliche Felder, kein ALTER TABLE nötig:\n{ "_id": 1, "typ": "tv", "name": "TV 55 Zoll",\n  "bilddiagonale_cm": 139, "hdmi_ports": 4 }\n{ "_id": 2, "typ": "shirt", "name": "T-Shirt Logo",\n  "groessen": ["S","M","L"], "farbe": "navy" }',
            },
            { type: "heading", value: "Übungsaufgabe 2: Datenbanktyp begründet auswählen" },
            {
              type: "text",
              value:
                "Wähle für jeden Fall den passenden Datenbanktyp und begründe kurz: (a) Buchhaltung mit Rechnungen und Buchungssätzen, (b) Zwischenspeicher für Sitzungs-Token mit Ablaufzeit, (c) 'Kunden kauften auch'-Empfehlungen über Beziehungsketten, (d) Produktkatalog mit je nach Kategorie völlig unterschiedlichen Attributen.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n(a) Relationale DB (z. B. PostgreSQL/MySQL) – ACID-Transaktionen, festes Schema, gesetzliche Anforderungen.\n(b) Key-Value-Store (Redis) – schnellste Zugriffe, eingebaute Ablaufzeit (TTL).\n(c) Graphdatenbank (Neo4j) – Beziehungspfade über mehrere Ebenen effizient abfragbar.\n(d) Dokumentendatenbank (MongoDB) – flexible, je Produkt unterschiedliche Felder.",
            },
          ],
          quiz: [
            {
              id: "imp_lf8-ns-1_0",
              q: "MongoDB ist welcher NoSQL-Typ?",
              options: ["Graph", "Spaltenorientiert", "Dokument-orientiert", "Key-Value"],
              correct: 2,
              explain: "MongoDB speichert Daten als JSON-Dokumente.",
            },
            {
              id: "imp_lf8-ns-1_1",
              q: "CAP-Theorem: Max. gleichzeitig garantierbar?",
              options: ["Alle 3", "1 von 3", "Keines", "2 von 3"],
              correct: 3,
              explain: "Maximal 2 von 3: Consistency, Availability, Partition Tolerance.",
            },
            {
              id: "imp_lf8-ns-1_2",
              q: "CAP-Theorem: Was kann man nicht gleichzeitig haben?",
              options: [
                "Consistency + Availability + Partition Tolerance (nur 2 von 3)",
                "Hohe Geschwindigkeit und großen Speicherplatz (Speed + Storage)",
                "Alles gleichzeitig",
                "Sicherheit und Verarbeitungsgeschwindigkeit (Security + Speed)",
              ],
              correct: 0,
              explain: "CAP: In einem verteilten System max. 2 von 3 gleichzeitig.",
            },
            {
              id: "imp_lf8-ns-1_3",
              q: "MongoDB = ?",
              options: [
                "Graph-DB",
                "Document Store (JSON-Dokumente)",
                "SQL-Datenbank",
                "Key-Value",
              ],
              correct: 1,
              explain: "MongoDB: Dokumentenorientierte NoSQL-DB, speichert JSON/BSON.",
            },
            {
              id: "imp_lf8-ns-1_4",
              q: "Redis = ?",
              options: [
                "Graph-DB",
                "Document Store",
                "In-Memory-Key-Value-Store (Cache)",
                "Relationale DB",
              ],
              correct: 2,
              explain: "Redis: Schneller In-Memory Key-Value Store, ideal für Caching.",
            },
            {
              id: "imp_lf8-ns-1_5",
              q: "NoSQL vs. SQL: Wann NoSQL?",
              options: [
                "Große Datenmengen, flexible Schemas, horizontale Skalierung",
                "Wenn strenge ACID-Transaktionen über viele Tabellen gefordert sind",
                "Ausschließlich bei kleinen Projekten mit wenigen hundert Datensätzen",
                "Grundsätzlich in jedem Projekt, da NoSQL SQL vollständig ersetzt",
              ],
              correct: 0,
              explain: "NoSQL: Big Data, flexible Strukturen, einfache horizontale Skalierung.",
            },
            {
              id: "imp_lf8-ns-1_6",
              q: "Key-Value Store Beispiel?",
              options: ["MySQL", "MongoDB", "Redis, Memcached", "Neo4j"],
              correct: 2,
              explain: "Redis: In-Memory Key-Value, ideal für Caching und Sessions.",
            },
            {
              id: "imp_lf8-ns-1_7",
              q: "Graph-Datenbank?",
              options: [
                "Tabellen",
                "Dokumente",
                "Key-Value",
                "Knoten und Kanten (Beziehungen), z.B. Neo4j",
              ],
              correct: 3,
              explain: "Graph-DB: Optimal für stark vernetzte Daten (Social Networks).",
            },
            {
              id: "imp_lf8-ns-1_8",
              q: "Eventual Consistency?",
              options: [
                "Ein Konsistenzmodell, das nur relationale SQL-Datenbanken bieten",
                "Alle Replikate sind zu jedem Zeitpunkt sofort konsistent",
                "Die Replikate erreichen niemals einen konsistenten Zustand",
                "Daten werden irgendwann konsistent (nicht sofort)",
              ],
              correct: 3,
              explain: "Eventual: Nach kurzer Verzögerung sind alle Repliken gleich.",
            },
            {
              id: "imp_lf8-ns-1_9",
              q: "Sharding?",
              options: [
                "Daten horizontal auf mehrere Server verteilen",
                "Regelmäßige Vollsicherung der Datenbank",
                "Kompression der Daten zur Speicherersparnis",
                "Verschlüsselung der Daten auf Feldebene",
              ],
              correct: 0,
              explain: "Sharding: Datenbank auf mehrere Knoten aufteilen für Skalierung.",
            },
            {
              id: "imp_lf8-ns-1_10",
              q: "Welcher NoSQL-Typ passt zu MongoDB?",
              options: [
                "Spaltenorientierte Datenbank",
                "Graphdatenbank",
                "Dokumentenorientierte Datenbank",
                "Key-Value-Store",
              ],
              correct: 2,
              explain: "MongoDB speichert JSON-ähnliche Dokumente (BSON) mit flexiblem Schema.",
            },
            {
              id: "imp_lf8-ns-1_11",
              q: "Wofür ist Redis als Key-Value-Store besonders geeignet?",
              options: [
                "Revisionssichere Langzeitarchivierung auf Bandlaufwerken",
                "Sehr schnelle Zugriffe auf Sitzungsdaten und Caches im RAM",
                "Ausschließlich komplexe Geodaten-Analysen mit Koordinaten",
                "Komplexe Joins über viele relational verknüpfte Tabellen",
              ],
              correct: 1,
              explain:
                "Redis hält Daten im Arbeitsspeicher – ideal für Sessions, Caching und Zähler mit Zugriffszeiten im Mikrosekundenbereich.",
            },
            {
              id: "imp_lf8-ns-1_12",
              q: "Welche Datenbank wählt man typischerweise für stark vernetzte Beziehungsdaten (z. B. 'Wer kennt wen')?",
              options: [
                "Graphdatenbank wie Neo4j",
                "CSV-Dateien",
                "Tabellenkalkulation",
                "Key-Value-Store",
              ],
              correct: 0,
              explain:
                "Graphdatenbanken speichern Knoten und Kanten direkt; Beziehungsabfragen über viele Ebenen sind damit deutlich effizienter als rekursive SQL-Joins.",
            },
            {
              id: "imp_lf8-ns-1_13",
              q: "Was besagt das CAP-Theorem?",
              options: [
                "NoSQL-Datenbanken verarbeiten Anfragen grundsätzlich schneller als relationale SQL-Systeme, unabhängig vom Anwendungsfall",
                "Ein verteiltes System kann Consistency, Availability und Partition Tolerance nie gleichzeitig vollständig garantieren",
                "Jede verteilte Datenbank benötigt mindestens ein tägliches Vollbackup, um Konsistenz garantieren zu können",
                "Konsistenz ist in verteilten Systemen grundsätzlich vernachlässigbar, solange die Verfügbarkeit gewährleistet bleibt",
              ],
              correct: 1,
              explain:
                "Bei einer Netzwerkpartition muss sich das System entscheiden: konsistent antworten (ggf. Anfragen ablehnen) oder verfügbar bleiben (ggf. veraltete Daten liefern).",
            },
            {
              id: "imp_lf8-ns-1_14",
              q: "Wofür steht BASE im NoSQL-Kontext?",
              options: [
                "Binary And Simple Encoding for Storage",
                "Basically Available, Soft State, Eventually Consistent",
                "Backup, Archive, Storage and Encryption",
                "Basic SQL Extension for NoSQL Systems",
              ],
              correct: 1,
              explain:
                "BASE ist das Gegenmodell zu ACID: Das System ist grundsätzlich verfügbar, Konsistenz stellt sich erst nach und nach ein (eventual consistency).",
            },
            {
              id: "imp_lf8-ns-1_15",
              q: "Was bedeutet horizontale Skalierung (Scale-out)?",
              options: [
                "Mehr Monitore anschließen",
                "Einen Server mit mehr CPU/RAM ausstatten",
                "Die Datenbank löschen und neu aufsetzen",
                "Last auf zusätzliche Server verteilen",
              ],
              correct: 3,
              explain:
                "Scale-out fügt Knoten hinzu (typische NoSQL-Stärke); Scale-up (vertikal) rüstet einen einzelnen Server auf – irgendwann am Limit.",
            },
            {
              id: "imp_lf8-ns-1_16",
              q: "Was ist Sharding?",
              options: [
                "Die transparente Verschlüsselung der gesamten Datenbank",
                "Aufteilung des Datenbestands auf mehrere Server nach einem Schlüssel",
                "Die tägliche automatische Sicherung des Datenbestands",
                "Die verlustfreie Komprimierung besonders großer Tabellen",
              ],
              correct: 1,
              explain:
                "Beim Sharding hält jeder Knoten nur einen Teil der Daten (z. B. Kunden A–M / N–Z) – Voraussetzung für horizontale Skalierung großer Datenmengen.",
            },
            {
              id: "imp_lf8-ns-1_17",
              q: "Wann ist eine relationale Datenbank gegenüber NoSQL die bessere Wahl?",
              options: [
                "Wenn sich das Datenschema täglich ändert und keine feste Struktur existiert",
                "Bei strengen Konsistenzanforderungen und strukturierten Daten mit Beziehungen",
                "Bei reinen Cache-Daten mit kurzer Lebensdauer und hoher Zugriffsrate",
                "Wenn keinerlei Transaktionen und keine Konsistenzgarantien benötigt werden",
              ],
              correct: 1,
              explain:
                "Beispiel: Buchhaltung. ACID-Transaktionen, Joins und festes Schema sind genau die Stärken relationaler Systeme – für Finanzdaten meist Pflicht.",
            },
            {
              id: "imp_lf8-ns-1_18",
              q: "Was bedeutet 'Schemafreiheit' bei Dokumentdatenbanken?",
              options: [
                "Daten werden unverschlüsselt gespeichert",
                "Dokumente derselben Collection können unterschiedliche Felder haben",
                "Das Schema wird vom Hersteller vorgegeben",
                "Es dürfen gar keine Felder verwendet werden",
              ],
              correct: 1,
              explain:
                "Neue Felder können ohne ALTER TABLE einfach mitgespeichert werden – flexibel, verlagert aber die Validierungsverantwortung in die Anwendung.",
            },
            {
              id: "imp_lf8-ns-1_19",
              q: "Welche Aussage zur Replikation ist korrekt?",
              options: [
                "Replikation ersetzt Backups vollständig, da alle Datenstände mehrfach vorhanden sind",
                "Replikation verringert die Verfügbarkeit, weil jeder Knoten auf die anderen warten muss",
                "Replikation funktioniert technisch ausschließlich bei relationalen SQL-Datenbanken",
                "Replikation kopiert Daten auf mehrere Knoten und erhöht Ausfallsicherheit und Lesedurchsatz",
              ],
              correct: 3,
              explain:
                "Repliken fangen Knotenausfälle ab und bedienen Leseanfragen. Backups ersetzen sie nicht: Ein versehentliches DELETE wird brav mitrepliziert.",
            },
          ],
        },
      ],
    },
    {
      id: "lf8-web",
      title: "Web-Entwicklung",
      lessons: [
        {
          id: "lf8-web-1",
          title: "Dynamische Webseiten & XAMPP",
          content: [
            { type: "heading", value: "Statische vs. dynamische Webseiten (AP1-Dauerbrenner)" },
            {
              type: "text",
              value:
                "Statische Website: HTML-Dateien werden 1:1 ausgeliefert, Inhalt ändert sich nur durch manuelles Editieren. Technologien: HTML, CSS, JavaScript. Vorteile: Schnell, einfach zu hosten, sicher. Nachteile: Bei vielen Seiten schwer zu pflegen, kein personalisierter Inhalt.",
            },
            {
              type: "text",
              value:
                "Dynamische Website: Inhalte werden zur Laufzeit generiert, z.B. aus einer Datenbank. Technologien: PHP, Python, Node.js, Java + Datenbank (MySQL, PostgreSQL). Vorteile: Personalisiert, CMS möglich, interaktiv. Nachteile: Komplexer, Server nötig, langsamer.",
            },
            { type: "heading", value: "Programmiersprachen für dynamische Websites" },
            {
              type: "text",
              value:
                "PHP: Am weitesten verbreitet (WordPress, Joomla). Serverseitig, einfach zu lernen. Python (Django, Flask): Modern, saubere Syntax, gut für APIs. JavaScript (Node.js): Gleiche Sprache für Frontend und Backend. Ruby (Rails): Schnelle Entwicklung, Convention over Configuration. Java (Spring): Enterprise, sehr robust. WICHTIG für AP1: HTML und CSS sind KEINE Programmiersprachen (Auszeichnungs-/Gestaltungssprache)!",
            },
            { type: "heading", value: "XAMPP als Entwicklungsumgebung" },
            {
              type: "text",
              value:
                "XAMPP = Cross-platform, Apache, MariaDB, PHP, Perl. Lokale Entwicklungsumgebung: Apache (Webserver) + MariaDB/MySQL (Datenbank) + PHP (Scriptsprache) auf dem eigenen PC. Installation: apachefriends.org, Komponenten: Apache + MySQL auswählen und starten. Webroot: C:\\xampp\\htdocs\\ (hier liegen die PHP/HTML-Dateien). Zugriff: http://localhost oder http://127.0.0.1. phpMyAdmin: http://localhost/phpmyadmin (Datenbank-Verwaltung).",
            },
            { type: "heading", value: "PHP-Grundlagen" },
            {
              type: "text",
              value:
                "PHP-Code steht zwischen <?php und ?>. Variablen beginnen mit $: $name = 'Max'; echo 'Hallo ' . $name; In HTML eingebettet: <p>Heute ist <?php echo date('d.m.Y'); ?></p>. Datenbankabfrage: $result = mysqli_query($conn, 'SELECT * FROM kunden'); while($row = mysqli_fetch_assoc($result)) { echo $row['name']; }. PHP wird auf dem SERVER ausgeführt – der Client bekommt nur das HTML-Ergebnis.",
            },
            { type: "heading", value: "Beispiel 1: Client-Server bei dynamischer Website" },
            {
              type: "text",
              value:
                "Nutzer ruft https://shop.example.com/produkt?id=42 auf. Browser sendet HTTP-GET an Webserver. Webserver (Apache/nginx) leitet an PHP weiter. PHP liest id=42, fragt MySQL: SELECT * FROM produkte WHERE id=42. Datenbank liefert: Name='Laptop', Preis=899. PHP generiert HTML-Seite mit den Daten. Webserver sendet fertiges HTML an Browser. Browser rendert die Seite. Nutzer sieht nur HTML – von PHP/MySQL keine Spur.",
            },
            { type: "heading", value: "Beispiel 2: Port-Konflikt bei XAMPP" },
            {
              type: "text",
              value:
                "Problem: Apache startet nicht, Fehlermeldung 'Port 80 already in use'. Ursache: Ein anderer Dienst (Skype, IIS, VMware) belegt Port 80. Lösungen: 1) Anderen Dienst beenden (netstat -ano | findstr :80 → PID finden → taskkill). 2) Apache-Port ändern: httpd.conf → Listen 8080 statt Listen 80. Zugriff dann über http://localhost:8080. MySQL-Port (3306) analog in my.ini ändern wenn belegt.",
            },
            { type: "heading", value: "Beispiel 3: MVC-Architektur" },
            {
              type: "text",
              value:
                "Model-View-Controller trennt Logik, Darstellung und Steuerung: Model: Datenbankzugriff, Geschäftslogik (z.B. Produkt.php mit DB-Abfragen). View: HTML-Templates, Darstellung (z.B. produkt_anzeige.php). Controller: Koordiniert Model und View, verarbeitet Requests (z.B. ProduktController.php). Vorteil: Saubere Trennung, einfacher wartbar. Die meisten Frameworks (Laravel, Django, Spring) nutzen MVC.",
            },
            { type: "heading", value: "Übungsaufgabe 1: Statisch vs. dynamisch zuordnen" },
            {
              type: "text",
              value:
                "Ordne die folgenden Webseiten dem Typ zu (statisch/dynamisch) und begründe:\na) Ein Online-Shop mit Warenkorb und Benutzerkonto\nb) Eine Visitenkarten-Website eines Fotografen (5 Seiten)\nc) Ein Firmen-Blog, der täglich neue Artikel veröffentlicht\nd) Eine Speisekarte eines Restaurants als einzelne HTML-Seite",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\na) Online-Shop: DYNAMISCH – Warenkorb, Login, Produktdatenbank, individuelle Preise/Bestände → serverseitige Logik + Datenbank zwingend erforderlich.\n\nb) Fotografen-Website: STATISCH – 5 feste Seiten mit Bildern, ändern sich selten. HTML/CSS reicht. Könnte mit Static Site Generator (Hugo, Jekyll) erstellt werden.\n\nc) Firmen-Blog: DYNAMISCH – Regelmäßig neue Inhalte, Kategorien, Suche, evtl. Kommentare → CMS nötig (WordPress, Ghost). Alternativ: JAMstack mit Headless CMS.\n\nd) Speisekarte: STATISCH – Eine einzelne HTML-Seite. Änderungen (neue Gerichte) werden manuell im HTML editiert. Bei häufigen Änderungen wäre ein einfaches CMS sinnvoller.",
            },
            { type: "heading", value: "Übungsaufgabe 2: XAMPP Port-Konflikt lösen" },
            {
              type: "text",
              value:
                "Du installierst XAMPP und Apache startet nicht. Die Fehlermeldung lautet: 'Port 80 already in use by PID 4'. Beschreibe Schritt für Schritt, wie du das Problem diagnostizierst und löst (mindestens 2 Lösungswege).",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nDiagnose:\n1) CMD als Admin: netstat -ano | findstr :80\n   → Zeigt: 0.0.0.0:80  LISTENING  PID 4\n2) PID 4 = Windows-Systemprozess (oft IIS oder W3SVC)\n3) Prüfen: tasklist | findstr ' 4 ' → 'System'\n   → IIS (Internet Information Services) belegt Port 80\n\nLösung 1: IIS deaktivieren\n- services.msc → 'World Wide Web-Veröffentlichungsdienst' → Beenden + Starttyp 'Deaktiviert'\n- Oder: iisreset /stop\n\nLösung 2: Apache-Port ändern\n- XAMPP → Config → httpd.conf\n- Zeile 'Listen 80' ändern zu 'Listen 8080'\n- Zeile 'ServerName localhost:80' ändern zu 'ServerName localhost:8080'\n- Apache neu starten → Zugriff über http://localhost:8080\n\nLösung 3: Skype beenden (ältere Versionen nutzen Port 80)\n- Skype → Einstellungen → Erweitert → 'Port 80 verwenden' deaktivieren",
            },
            { type: "heading", value: "Übungsaufgabe 3: MVC-Architektur erklären" },
            {
              type: "text",
              value:
                "Erkläre anhand eines konkreten Beispiels (Online-Bibliothek: Bücher suchen und ausleihen) wie die MVC-Architektur funktioniert. Beschreibe was in Model, View und Controller passiert, wenn ein Benutzer nach 'Python' sucht.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\nBenutzer gibt 'Python' in die Suchleiste ein und klickt 'Suchen'.\n\n1. CONTROLLER (z.B. BuchController.php / BuchController.py):\n   - Empfängt den HTTP-Request: GET /suche?q=Python\n   - Validiert die Eingabe (kein SQL-Injection, nicht leer)\n   - Ruft das Model auf: Buch::suche('Python')\n\n2. MODEL (z.B. Buch.php / buch.py):\n   - Baut die Datenbankabfrage: SELECT * FROM bücher WHERE titel LIKE '%Python%'\n   - Führt die Query aus, erhält 5 Treffer\n   - Gibt die Ergebnisse als Liste/Array an den Controller zurück\n   - Enthält auch Geschäftslogik: Ist das Buch verfügbar? Wie viele Exemplare?\n\n3. VIEW (z.B. suchergebnis.html / suchergebnis.blade.php):\n   - Erhält die 5 Bücher vom Controller\n   - Rendert HTML: Tabelle mit Titel, Autor, Verfügbarkeit, 'Ausleihen'-Button\n   - Kennt KEINE Datenbanklogik, nur Darstellung\n\nVorteil: Wenn das Design geändert wird (View), muss die Datenbanklogik (Model) nicht angefasst werden und umgekehrt.",
            },
          ],
          quiz: [
            {
              id: "imp_lf8-web-1_0",
              q: "Was ist der Hauptunterschied zwischen statischer und dynamischer Website?",
              options: [
                "Es gibt keinen Unterschied in Aufbau und Auslieferung",
                "Der Unterschied liegt allein in der Ladegeschwindigkeit",
                "Statische Seiten sind schlicht die modernere Variante dynamischer Seiten",
                "Dynamisch generiert Inhalte zur Laufzeit aus Datenbank/Logik",
              ],
              correct: 3,
              explain:
                "Dynamisch: Inhalt wird serverseitig generiert (z.B. PHP + MySQL). Statisch: Feste HTML-Dateien.",
            },
            {
              id: "imp_lf8-web-1_1",
              q: "Welche Aussage ist RICHTIG?",
              options: [
                "CSS ist eine Programmiersprache",
                "JavaScript ist keine Programmiersprache",
                "HTML ist eine Programmiersprache",
                "PHP ist eine Programmiersprache",
              ],
              correct: 3,
              explain:
                "PHP = Programmiersprache (Turing-vollständig). HTML = Auszeichnungssprache. CSS = Gestaltungssprache.",
            },
            {
              id: "imp_lf8-web-1_2",
              q: "Wofür steht XAMPP?",
              options: [
                "Extended Apache Manager PHP Pro",
                "XML Application Main PHP Package",
                "Cross Apache MySQL PHP Perl",
                "Extra Advanced MySQL PHP Platform",
              ],
              correct: 2,
              explain:
                "M = MariaDB (früher MySQL). XAMPP: X=Cross-platform, A=Apache, M=MariaDB, P=PHP, P=Perl.",
            },
            {
              id: "imp_lf8-web-1_3",
              q: "Wo legt man in XAMPP Webseiten-Dateien ab?",
              options: [
                "C:\\Programme\\Apache",
                "C:\\Users\\Public",
                "C:\\Windows\\Web",
                "C:\\xampp\\htdocs\\",
              ],
              correct: 3,
              explain: "htdocs ist das Document Root des Apache-Webservers in XAMPP.",
            },
            {
              id: "imp_lf8-web-1_4",
              q: "Was sieht der Browser-Nutzer bei einer PHP-Seite?",
              options: [
                "Nichts",
                "Nur das erzeugte HTML",
                "PHP und HTML gemischt",
                "Den PHP-Quellcode",
              ],
              correct: 1,
              explain:
                "PHP wird serverseitig ausgeführt. PHP wird auf dem Server interpretiert. Der Client bekommt nur das Ergebnis als HTML.",
            },
            {
              id: "imp_lf8-web-1_5",
              q: "Was macht phpMyAdmin?",
              options: [
                "Webbasierte Verwaltung der MySQL/MariaDB-Datenbank",
                "SSL-Zertifikate für den Webserver ausstellen",
                "Die Apache-Konfigurationsdateien verwalten",
                "PHP-Quellcode im Browser editieren und testen",
              ],
              correct: 0,
              explain:
                "phpMyAdmin: Browser-Interface zum Verwalten von Datenbanken, Tabellen, SQL-Abfragen.",
            },
            {
              id: "imp_lf8-web-1_6",
              q: "Was ist MVC?",
              options: [
                "Most Valuable Code",
                "MySQL View Control",
                "Model-View-Controller",
                "Managed Virtual Container",
              ],
              correct: 2,
              explain:
                "Architekturmuster für Webanwendungen. MVC: Model (Daten/Logik), View (Darstellung), Controller (Steuerung). Standard in Web-Frameworks.",
            },
            {
              id: "imp_lf8-web-1_7",
              q: "Welchen Standard-Port nutzt Apache?",
              options: ["22", "80 (HTTP) und 443 (HTTPS)", "3306", "8080"],
              correct: 1,
              explain: "Apache: Port 80 (HTTP) und 443 (HTTPS). MySQL: Port 3306.",
            },
            {
              id: "imp_lf8-web-1_8",
              q: "Was ist der Unterschied zwischen Frontend und Backend?",
              options: [
                "Frontend bezeichnet den Server samt Datenbank, auf dem die Anwendung läuft",
                "Frontend = Browser/Client (HTML/CSS/JS), Backend = Server (PHP/Python + DB)",
                "Es gibt keinen Unterschied, beide Begriffe bezeichnen dieselbe Anwendungsschicht",
                "Backend bezeichnet das grafische Design und die Farbgestaltung der Oberfläche",
              ],
              correct: 1,
              explain:
                "Frontend: Was der User sieht (UI im Browser). Backend: Serverseitige Logik und Datenbank.",
            },
            {
              id: "imp_lf8-web-1_9",
              q: "Welches Framework nutzt PHP?",
              options: ["Spring", "Laravel", "Django", "Express"],
              correct: 1,
              explain:
                "Laravel ist das populärste PHP-Framework. Django=Python, Spring=Java, Express=Node.js.",
            },
            {
              id: "imp_lf8-web-1_10",
              q: "Welche Komponenten enthält XAMPP im Kern?",
              options: [
                "Nur einen FTP-Server",
                "Node.js und MongoDB",
                "Windows Server und Active Directory",
                "Apache, MariaDB/MySQL, PHP und Perl",
              ],
              correct: 3,
              explain:
                "M = MariaDB (früher MySQL). XAMPP bündelt den Webserver Apache, die Datenbank MariaDB/MySQL und die Skriptsprachen PHP/Perl als lokale Entwicklungsumgebung.",
            },
            {
              id: "imp_lf8-web-1_11",
              q: "Auf welchem Port lauscht der Apache-Webserver standardmäßig für HTTP?",
              options: ["80", "21", "443", "3306"],
              correct: 0,
              explain:
                "HTTP nutzt Port 80, HTTPS Port 443. Port 3306 gehört MySQL/MariaDB, 21 ist FTP.",
            },
            {
              id: "imp_lf8-web-1_12",
              q: "Port 3306 ist auf dem Rechner bereits belegt. Wie wurde das Problem im Unterricht gelöst?",
              options: [
                "In der my.ini den Port an den betreffenden Stellen auf 3307 ändern",
                "MySQL deinstallieren und auf eine Datenbank verzichten",
                "Den kompletten Rechner neu aufsetzen und alles neu installieren",
                "Apache anstelle von MySQL starten, da beide denselben Port nutzen",
              ],
              correct: 0,
              explain:
                "Laut Unterrichtsmaterial: In der my.ini wird der Port 3306 an zwei Stellen auf 3307 geändert, danach startet MySQL auf dem neuen Port.",
            },
            {
              id: "imp_lf8-web-1_13",
              q: "In welches Verzeichnis legt man bei XAMPP die eigenen PHP-Dateien?",
              options: [
                "Das BIOS",
                "C:\\Windows\\System32",
                "Den Papierkorb",
                "htdocs im XAMPP-Ordner",
              ],
              correct: 3,
              explain:
                "htdocs ist das DocumentRoot des Apache – Dateien dort sind über http://localhost/ erreichbar.",
            },
            {
              id: "imp_lf8-web-1_14",
              q: "Wie wird PHP-Code in eine HTML-Datei eingebettet?",
              options: ["[php] ... [/php]", "// php ... //", "<php> ... </php>", "<?php ... ?>"],
              correct: 3,
              explain:
                "PHP-Blöcke stehen zwischen <?php und ?>; der Server führt sie aus und liefert nur das Ergebnis als HTML aus.",
            },
            {
              id: "imp_lf8-web-1_15",
              q: "Was gibt der Befehl echo in PHP aus?",
              options: [
                "Er liest Tastatureingaben des Benutzers ein",
                "Er startet den Apache-Webserver kontrolliert neu",
                "Er gibt Text oder Variablenwerte an den Client aus",
                "Er löscht eine Variable aus dem Arbeitsspeicher",
              ],
              correct: 2,
              explain:
                "echo 'Hallo'; schreibt die Ausgabe in die HTML-Antwort, die der Browser anzeigt.",
            },
            {
              id: "imp_lf8-web-1_16",
              q: "Worin unterscheidet sich die Formularübertragung per GET von POST?",
              options: [
                "GET verschlüsselt die Formulardaten automatisch, POST überträgt sie im Klartext",
                "POST ist auf 10 Zeichen begrenzt, GET erlaubt beliebig große Datenmengen",
                "GET hängt Daten sichtbar an die URL an, POST überträgt sie im Request-Body",
                "Es gibt keinen Unterschied, beide Methoden übertragen die Daten identisch",
              ],
              correct: 2,
              explain:
                "GET-Parameter stehen in der URL (bookmarkfähig, längenbegrenzt, ungeeignet für Passwörter); POST überträgt im Body – Standard für Formulare mit sensiblen oder größeren Daten.",
            },
            {
              id: "imp_lf8-web-1_17",
              q: "Wofür dient phpMyAdmin?",
              options: [
                "Zum Kompilieren von PHP-Skripten in Maschinencode",
                "Zum gemeinsamen Bearbeiten von Office-Dokumenten im Browser",
                "Zur webbasierten Verwaltung der MySQL/MariaDB-Datenbank",
                "Als Web Application Firewall vor dem Apache-Server",
              ],
              correct: 2,
              explain:
                "phpMyAdmin läuft unter http://localhost/phpmyadmin und erlaubt Tabellen, Benutzer und SQL-Abfragen im Browser zu verwalten.",
            },
            {
              id: "imp_lf8-web-1_18",
              q: "Welche Adresse erreicht den lokalen Webserver auf dem eigenen Rechner?",
              options: [
                "http://localhost bzw. http://127.0.0.1",
                "ftp://192.168.0.1",
                "http://255.255.255.255",
                "http://example.com",
              ],
              correct: 0,
              explain:
                "localhost löst auf die Loopback-Adresse 127.0.0.1 auf – Anfragen bleiben auf dem eigenen Rechner.",
            },
            {
              id: "imp_lf8-web-1_19",
              q: "Der Apache startet im XAMPP-Control-Panel nicht, Port 80 ist belegt. Welches Vorgehen ist sinnvoll?",
              options: [
                "Im Control-Panel per Netstat prüfen, welches Programm Port 80 belegt, und den Konflikt auflösen",
                "Den Ordner htdocs löschen, da fehlerhafte Webinhalte den Start des Apache-Dienstes blockieren",
                "Windows sofort neu installieren, weil belegte Ports nur durch ein frisches System freigegeben werden",
                "Den MySQL-Dienst stoppen, da dieser standardmäßig Port 80 für phpMyAdmin belegt",
              ],
              correct: 0,
              explain:
                "Dienst beenden oder Apache-Port ändern. Typische Belegungen: Skype, IIS oder der Dienst 'Webbereitstellung'. Entweder den Belegenden beenden oder Apache in der httpd.conf auf einen anderen Port legen.",
            },
          ],
        },
      ],
    },
    {
      id: "lf8-uml",
      title: "Anforderungen modellieren (UML)",
      lessons: [
        {
          id: "lf8-uc-1",
          title: "Use-Case-Diagramme (Anwendungsfalldiagramm)",
          content: [
            { type: "heading", value: "Wozu Anwendungsfalldiagramme?" },
            {
              type: "text",
              value:
                "Das Anwendungsfalldiagramm (Use-Case-Diagramm) ist die UML-Antwort auf die Frage: WAS soll das System können – und WER benutzt es? Das WIE (Technik, Ablauf im Code) bleibt bewusst außen vor. Es entsteht früh im Projekt bei der Anforderungsaufnahme, ist die gemeinsame Sprache zwischen dir und dem Kunden und dient später als Grundlage für Testfälle und für die Abnahme. Praxisbezug für dich: Der Kunde bestellt ein Ticketsystem – bevor irgendjemand etwas installiert oder programmiert, hältst du in diesem Diagramm fest, welche Funktionen es geben muss (Anwendungsfälle) und welche Rollen und Fremdsysteme daran beteiligt sind (Akteure).",
            },
            { type: "heading", value: "Die Bausteine und ihre Notation" },
            {
              type: "text",
              value:
                "Anwendungsfall (Use Case): eine einzelne Funktionalität oder ein Geschäftsprozess des Systems, z. B. „Ticket erstellen“. Notation: Ellipse – und zwar IMMER innerhalb der Systemgrenze (Rechteck mit dem Systemnamen darüber). · Akteur: eine Person oder ein anderes System, das mit dem System interagiert. Personen zeichnet man als Strichmännchen, Fremdsysteme (Mail-Server, Drucker, andere Software) als Rechteck. Akteure stehen IMMER außerhalb der Systemgrenze und brauchen immer eine Bezeichnung. · Assoziation: die Beziehung zwischen Akteur und Anwendungsfall als einfache Linie. Mit Pfeilspitze wird sie zur gerichteten Assoziation: Die Kommunikation läuft nur in eine Richtung – typisch beim Drucker oder Mail-Gateway, das nur Daten empfängt.",
            },
            {
              type: "code",
              value:
                "            +--------------- Ticketsystem ---------------+\nKunde ------|--( Ticket erstellen )                       |\n(Person)    |         :  <<include>>                      |\n            |         v                                   |\n            |  ( Benachrichtigung senden )--------------->|---- [Mail-Gateway]\n            |                                             |     (Fremdsystem)\nSupporter --|--( Ticket bearbeiten ) <----                |\n(Person)    |         ^ <<extend>>       \\                |\n            |  ( Eskalieren )  {Reaktionszeit überschritten}\n            +---------------------------------------------+",
            },
            { type: "heading", value: "Anwendungsfall sauber beschreiben" },
            {
              type: "text",
              value:
                "Die UML schreibt es nicht zwingend vor, aber Prüfung und Praxis erwarten zu wichtigen Anwendungsfällen eine Kurzbeschreibung – wahlweise als Text oder als UML-Kommentar (Notizzettel) am Diagramm. Übliche Punkte am Beispiel „Ticket erstellen“: Ziel (Störung wird strukturiert erfasst), beteiligte Akteure (Kunde), Vorbedingungen (Kunde ist am Portal angemeldet), Nachbedingungen (Ticket mit Nummer angelegt, Benachrichtigung verschickt), Ablauf (1. Formular ausfüllen, 2. Kategorie wählen, 3. Absenden, 4. System vergibt Ticketnummer).",
            },
            { type: "heading", value: "Multiplizitäten an der Assoziation" },
            {
              type: "text",
              value:
                "Zahlen an den Enden der Assoziation geben an, wie viele Akteure mit wie vielen Durchläufen eines Anwendungsfalls in Beziehung stehen: 1 = genau einer · 0..* = keiner bis beliebig viele · 1..* = mindestens einer. Lesebeispiel „Supporter 1..* ——— 0..* Ticket bearbeiten“: Ein Supporter bearbeitet keine bis beliebig viele Tickets, an einer Ticketbearbeitung ist mindestens ein Supporter beteiligt. Ein Ticket gehört dagegen zu genau einem Kunden (1).",
            },
            { type: "heading", value: "include und extend – der Prüfungsklassiker" },
            {
              type: "text",
              value:
                "include (einschließen): Ein Anwendungsfall bindet einen anderen ZWINGEND ein – tritt A ein, läuft automatisch auch B. Notation: gestrichelte Linie mit offenem Pfeil auf den EINGEBUNDENEN Fall, beschriftet mit <<include>>. Der eingebundene Fall ist allein nicht lauffähig, kann aber von beliebig vielen anderen Fällen eingebunden werden. Beispiel: „Ticket erstellen“ schließt „Benachrichtigung senden“ immer ein. · extend (erweitern): Ein Anwendungsfall erweitert einen anderen NUR UNTER EINER BEDINGUNG (condition, in geschweiften Klammern notiert). Notation: gestrichelte Linie mit Pfeil auf den ERWEITERTEN Fall, beschriftet mit <<extend>>. Der erweiterte Fall ist selbstständig lauffähig – anders als beim include. Beispiel: „Eskalieren“ erweitert „Ticket bearbeiten“ nur, wenn die Reaktionszeit überschritten ist. Hat ein Fall mehrere Erweiterungsstellen, listet man sie als extension points im Anwendungsfall auf und nennt am <<extend>> den jeweiligen Punkt.",
            },
            {
              type: "note",
              value:
                "Merksatz: include = immer, extend = eventuell. Beliebte Prüfungsfalle ist die Pfeilrichtung: <<include>> zeigt auf den EINGEBUNDENEN Fall, <<extend>> zeigt auf den ERWEITERTEN (also den Basis-)Fall – die Pfeile zeigen gefühlt „in entgegengesetzte Richtungen“.",
            },
            { type: "heading", value: "Generalisierung: Vererbung bei Fällen und Akteuren" },
            {
              type: "text",
              value:
                "Sowohl Anwendungsfälle als auch Akteure lassen sich spezialisieren. Notation wie in der UML üblich: durchgezogene Linie mit hohler Dreieckspitze, die auf das ALLGEMEINE Element zeigt. Ein spezialisierter Anwendungsfall erbt die Funktionalität des allgemeinen und ergänzt eigene Schritte („Online-Ticket erstellen“ erbt von „Ticket erstellen“ und ergänzt den Portal-Login). Ein spezialisierter Akteur erbt automatisch ALLE Beteiligungen des allgemeinen Akteurs: Der Teamleiter erbt vom Supporter das „Ticket bearbeiten“ und ist zusätzlich an eigenen Fällen beteiligt (z. B. „Eskalation freigeben“), an denen der normale Supporter nicht beteiligt ist.",
            },
            { type: "heading", value: "Übungsaufgabe: Ticketsystem modellieren" },
            {
              type: "text",
              value:
                "Beschreibe (oder skizziere) das Use-Case-Diagramm für folgendes Szenario: Kunden melden Störungen über ein Portal. Jede Ticketerstellung löst automatisch eine E-Mail-Benachrichtigung über das Mail-Gateway aus. Supporter bearbeiten Tickets; wird die vereinbarte Reaktionszeit überschritten, wird zusätzlich eskaliert. Der Teamleiter kann alles, was ein Supporter kann, und gibt außerdem Eskalationen frei. Benenne: Systemgrenze, Akteure (mit Notation), Anwendungsfälle und alle Beziehungstypen mit Richtung.",
            },
            {
              type: "solution",
              value:
                "MUSTERLÖSUNG:\n– Systemgrenze: Rechteck „Ticketsystem“; alle Ellipsen darin, alle Akteure draußen.\n– Akteure: Kunde und Supporter als Strichmännchen, Mail-Gateway als Rechteck (Fremdsystem), Teamleiter als Strichmännchen mit Generalisierungspfeil (hohle Spitze) auf den Supporter – er erbt dessen Beteiligungen.\n– Anwendungsfälle: Ticket erstellen, Benachrichtigung senden, Ticket bearbeiten, Eskalieren, Eskalation freigeben.\n– „Ticket erstellen“ --<<include>>--> „Benachrichtigung senden“ (läuft IMMER automatisch mit; Pfeil auf den eingebundenen Fall).\n– „Eskalieren“ --<<extend>>--> „Ticket bearbeiten“ mit condition {Reaktionszeit überschritten} (nur im Bedarfsfall; Pfeil auf den erweiterten Fall).\n– Assoziation zum Mail-Gateway gerichtet (Pfeilspitze zum Gateway), da es nur Daten empfängt.\n– Multiplizitäten z. B.: Kunde 1 — 0..* „Ticket erstellen“; Supporter 1..* — 0..* „Ticket bearbeiten“.",
            },
          ],
          quiz: [
            {
              id: "imp_lf8-uc-1_0",
              q: "Use-Case-Diagramm: Wo stehen die Akteure?",
              options: [
                "Innerhalb der Systemgrenze",
                "Außerhalb der Systemgrenze",
                "In der Ellipse des Falls",
                "Nur im UML-Kommentar",
              ],
              correct: 1,
              explain:
                "Akteure (Personen sowie Fremdsysteme) stehen immer außerhalb der Systemgrenze – die Anwendungsfälle immer innerhalb.",
            },
            {
              id: "imp_lf8-uc-1_1",
              q: "Welche Beziehung bindet einen Anwendungsfall IMMER automatisch mit ein?",
              options: ["<<extend>>", "Generalisierung", "<<include>>", "Gerichtete Assoziation"],
              correct: 2,
              explain:
                "include = immer: Tritt der einbindende Fall ein, läuft der eingebundene zwingend mit. extend gilt nur unter einer Bedingung.",
            },
            {
              id: "imp_lf8-uc-1_2",
              q: "Was gilt für die <<extend>>-Beziehung?",
              options: [
                "Erweiterung nur unter einer Bedingung",
                "Wird immer automatisch ausgeführt",
                "Verbindet zwei Akteure miteinander",
                "Ersetzt die Generalisierung",
              ],
              correct: 0,
              explain:
                "extend erweitert den Basisfall nur, wenn die angegebene condition erfüllt ist – der erweiterte Fall bleibt eigenständig lauffähig.",
            },
            {
              id: "imp_lf8-uc-1_3",
              q: "Multiplizität 1..* an einer Assoziation bedeutet?",
              options: [
                "Höchstens einer",
                "Genau einer",
                "Keiner oder genau einer",
                "Mindestens einer",
              ],
              correct: 3,
              explain:
                "1..* = einer bis beliebig viele. 0..* wäre keiner bis beliebig viele, 1 genau einer.",
            },
            {
              id: "imp_lf8-uc-1_4",
              q: "Generalisierung bei Akteuren: Der spezialisierte Akteur …",
              options: [
                "steht immer innerhalb des Systems",
                "darf keine eigenen Fälle haben",
                "erbt die Beteiligungen des allgemeinen",
                "ersetzt den allgemeinen Akteur",
              ],
              correct: 2,
              explain:
                "Der spezialisierte Akteur (z. B. Teamleiter) erbt alle Anwendungsfall-Beteiligungen des allgemeinen (Supporter) und kann eigene ergänzen.",
            },
          ],
        },
      ],
    },
  ],
};
