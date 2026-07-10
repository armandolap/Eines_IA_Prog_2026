# Pla — 005 Servidor Express i connexió a la DB

- Fitxers (a l'arrel de backend/):
  - `package.json` — dependències i scripts (`start`, `dev`). Dependències: `express`, `mysql2`, `dotenv`.
  - `server.js` — punt d'entrada: crea l'app Express, serveix `public/`, munta `/health` i escolta al port.
  - `db.js` — crea i exporta el pool de connexions `mysql2` amb credencials de `.env`.
  - `.env` — credencials de connexió locals. Es crea en local amb les dades de desenvolupament: DB_HOST=localhost, DB_USER=root, DB_PASSWORD= (buit), DB_NAME=todos_pro, DB_PORT=3306, PORT=3000. Coincideix amb la config del MCP mysql (opencode.json). Ruta: backend/.env
  - `.env.example` — plantilla documentada de les variables.
  - `.gitignore` — ignora `node_modules/`.

- Decisions:
  - **Connexió**: pool amb `mysql2/promise` (`mysql.createPool`), no connexió única — segueix la skill mysql (no esgotar `max_connections`).
  - **Config**: tot per `.env` amb `dotenv`: `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `PORT`. Valors locals de desenvolupament (localhost / root / sense password / todos_pro). Cap credencial escrita directament al codi: sempre via `.env`.
  - **Estàtics**: `express.static('public')` per servir index.html, login.html, registre.html, style.css, app.js. `GET /` → index.html.
  - **/health**: fa un ping a la DB via el pool (`SELECT 1`). Si respon → 200 `{ estat: "ok", db: "ok" }`; si el pool falla → 500 `{ estat: "error", db: "ko" }`, capturat amb try/catch perquè el servidor no peti.
  - **Fora d'abast**: rutes d'API de tasques (GET/POST/PATCH/DELETE /todos) i d'auth (registre/login). Es faran en features posteriors. Aquest pas només deixa el servidor viu i la connexió preparada.

- Precondicions:
  - La base de dades `todos_pro` i les taules (004) han d'existir a MySQL perquè `/health` doni `db: "ok"`. L'esquema el crea la 004 (skill mysql).

- Eines de referència (segons tech-stack):
  - **Context7 (MCP)**: sintaxi al dia d'Express (`express.static`, rutes, `app.listen`) i de `mysql2` (`createPool`, `pool.query`).
  - **Skill mysql**: regles del pool de connexions.
  - **Skill fetch-api**: fixa el contracte que el front espera; el backend l'ha de complir al pas següent (id, title, done, created_at).
  - `nodejs-backend-patterns` (skills.sh) descartada: TypeScript/enterprise/Postgres, no encaixa amb JS vanilla + MySQL.

- Verificació (MCP mysql + navegador):
  - `npm install` i `npm start` sense errors.
  - `GET /` mostra la vista de tasques.
  - Amb `todos_pro` creada: `GET /health` → 200 `db: "ok"`.
  - Amb la DB apagada o credencials dolentes: `GET /health` → 500 `db: "ko"` (servidor viu).
