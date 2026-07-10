# Tasques — 005 Servidor Express i connexió a la DB

[ ] T1 — backend/package.json: dependències (express, mysql2, dotenv) i scripts (start, dev).
[ ] T2 — backend/.gitignore (node_modules/) i backend/.env.example amb DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, PORT.
[ ] T2b — backend/.env local: DB_HOST=localhost, DB_USER=root, DB_PASSWORD= (buit), DB_NAME=todos_pro, DB_PORT=3306, PORT=3000.
[ ] T3 — backend/db.js: pool de connexions mysql2/promise amb les credencials de .env (skill mysql).
[ ] T4 — backend/server.js: app Express, express.static('public') i GET / cap a index.html.
[ ] T5 — backend/server.js: endpoint GET /health que fa ping a la DB (SELECT 1) i respon ok/ko sense petar.
[ ] T6 — npm install i npm start: el servidor arrenca al PORT de backend/.env sense errors.
[ ] T7 — Verificar: GET / mostra la vista; GET /health dona db:"ok" amb la DB viva i db:"ko" amb la DB apagada. Usa les tools del MCP MySQL per a les verificacions.
[ ] T8 — Si tot passa, roadmap 005 a «feta».
