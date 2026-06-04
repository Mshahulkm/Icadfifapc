# ICAD FIFA World Cup 2026 — Prediction Contest

A modern, animated, fully-offline static website for ICAD & MBL employees.

## Run locally

`fetch()` won't work via `file://`. Use any static server:

```bash
# Python 3
python3 -m http.server 8080

# Or Node.js
npx serve .
```

Then open http://localhost:8080

## Edit content

- **Announcements:** edit `data/announcements.json`
- **Previous winners:** edit `data/winners.json`
- **Countdown date:** edit `TARGET` in `js/app.js`
- **Styles / colors:** edit `css/style.css` (CSS variables at top of file)

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <YOUR_REPO_URL>
git push -u origin main
```

Then enable Pages: **Settings → Pages → Deploy from branch → main → /(root)**

## Tech

HTML5 · CSS3 · Bootstrap 5 · Font Awesome 6 · AOS · Vanilla JS — no build step, all libraries bundled locally.
