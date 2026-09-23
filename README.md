# Wort-Institut · Website

Statische Website für Dr. Werner Irro, gebaut mit [Eleventy](https://www.11ty.dev/), gehostet auf GitHub Pages, Inhalte gepflegt über [Pages CMS](https://pagescms.org/).

## Wie alles zusammenhängt

```
Pages CMS (Bearbeiten im Browser)
        │  speichert = Git-Commit
        ▼
GitHub Repository (alle Inhalte als Markdown in content/)
        │  Push löst GitHub Action aus
        ▼
Eleventy baut die Website (.github/workflows/deploy.yml)
        │
        ▼
GitHub Pages (live, mit eigener Domain und HTTPS)
```

Es gibt keine Datenbank und keinen Server. Alle Inhalte liegen als Textdateien im Ordner `content/`, Bilder im Ordner `media/`.

## Einmalige Einrichtung

### 1. Repository anlegen und hochladen

1. Auf github.com ein neues Repository anlegen (privat oder öffentlich).
2. Dieses Projekt hochladen:
   ```
   git init
   git add .
   git commit -m "Erste Version der Website"
   git branch -M main
   git remote add origin https://github.com/BENUTZERNAME/REPO-NAME.git
   git push -u origin main
   ```

### 2. GitHub Pages aktivieren

Im Repository: **Settings → Pages → Source: "GitHub Actions"** auswählen.
Danach unter **Actions** prüfen, ob der Workflow "Website veröffentlichen" durchgelaufen ist. Die Seite ist dann unter `https://BENUTZERNAME.github.io/REPO-NAME/` erreichbar.

### 3. Eigene Domain verbinden

1. **Settings → Pages → Custom domain**: die Domain eintragen (z.B. `www.wort-institut.de`) und speichern.
2. Beim Domain-Anbieter die DNS-Einträge setzen:
   - Für eine Subdomain wie `www`: ein **CNAME**-Eintrag auf `BENUTZERNAME.github.io`
   - Für die Hauptdomain (ohne www): **A**-Einträge auf `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Nach der DNS-Prüfung in den Pages-Einstellungen **"Enforce HTTPS"** aktivieren. Das Zertifikat erneuert sich automatisch.

### 4. Pages CMS verbinden

1. Auf [app.pagescms.org](https://app.pagescms.org/) mit dem GitHub-Konto anmelden.
2. Bei der Berechtigungsabfrage nur dieses eine Repository freigeben.
3. Das Projekt öffnen — die Konfiguration (`.pages.yml`) wird automatisch erkannt.
4. Unter den Projekteinstellungen den Redakteur/die Redakteurin **per E-Mail einladen**. Die Person braucht kein GitHub-Konto und meldet sich künftig per Magic-Link an.

## Inhalte pflegen (für die Redaktion)

1. [app.pagescms.org](https://app.pagescms.org/) öffnen und anmelden.
2. Links die gewünschte Seite auswählen (Startseite, Lektorat, Autor, Vita, Kontakt …).
3. Text ändern, ggf. Bilder per Drag & Drop hochladen, **Speichern** klicken.
4. Nach ein bis zwei Minuten ist die Änderung auf der Website sichtbar.

Notfall-Alternative ohne Pages CMS: Datei im Ordner `content/` direkt auf github.com öffnen, Stift-Symbol anklicken, ändern, "Commit changes".

## Lokal entwickeln (optional, nur für Technik-Änderungen)

Voraussetzung: Node.js (Version 20 oder neuer).

```
npm install
npm start        # Vorschau unter http://localhost:8080
npm run build    # erzeugt die fertige Website im Ordner _site/
```

## Projektstruktur

```
content/           Alle Seiteninhalte (Markdown mit Front Matter)
media/             Hochgeladene Bilder (Buchcover, Porträt)
_includes/         HTML-Vorlagen (base.njk + Seitenlayouts)
assets/style.css   Das gesamte Design
.pages.yml         Konfiguration der Bearbeitungsoberfläche (Pages CMS)
.github/workflows/ Automatische Veröffentlichung
eleventy.config.js Eleventy-Konfiguration
```

## Wartung

- Einzige Abhängigkeit ist `@11ty/eleventy`. Ein Update ist selten nötig; wenn doch: `npm update` und testen.
- Vor Veröffentlichung: die rechtlichen Hinweise auf der Seite **Impressum & Datenschutz** prüfen und bei Bedarf vervollständigen.
