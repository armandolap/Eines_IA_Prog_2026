# Tasques — 005 Servidor Express i connexió a la DB

[x] T1 — backend/package.json: dependències (express, mysql2, dotenv) i scripts (start, dev).
[x] T2 — backend/.gitignore (node_modules/) i backend/.env.example amb DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, PORT.
[x] T2b — backend/.env local: DB_HOST=localhost, DB_USER=root, DB_PASSWORD= (buit), DB_NAME=todos_pro, DB_PORT=3306, PORT=3000.
[x] T3 — backend/db.js: pool de connexions mysql2/promise amb les credencials de .env (skill mysql).
[x] T4 — backend/server.js: app Express amb URLs netes: `GET /todos`→index.html, `GET /login`→login.html, `GET /registre`→registre.html (res.sendFile), `GET /`→redirigeix a /todos. Els assets (style.css, app.js) per express.static('public'); l'HTML NO per estàtics.
[x] T5 — backend/server.js: endpoint GET /health que fa ping a la DB (SELECT 1) i respon ok/ko sense petar.
[x] T6 — npm install i npm start: el servidor arrenca al PORT de backend/.env sense errors.
[x] T7 — Verificar: `/todos`, `/login` i `/registre` mostren la seva pàgina i `/` redirigeix a `/todos` (cap URL amb .html); GET /health dona db:"ok" amb la DB viva i db:"ko" amb la DB apagada. Usa les tools del MCP MySQL per a les verificacions.
[x] T8 — Si tot passa, roadmap 005 a «feta».
