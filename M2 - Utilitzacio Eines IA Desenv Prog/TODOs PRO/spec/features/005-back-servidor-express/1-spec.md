# 005 — Servidor Express i connexió a la DB

Segon pas del BACKEND: aixecar un servidor amb Express que serveixi el FRONT (public/) i que tingui la connexió a la base de dades `todos_pro` (004) preparada i verificable. Encara no hi ha rutes d'API de tasques ni d'auth; només el servidor i la connexió.

- Contingut
Servidor Express que escolta en un port configurable (per defecte 3000).
Serveix els fitxers estàtics de `public/` (index.html, login.html, registre.html, style.css, app.js).
Connexió a MySQL amb un pool de connexions (paquet `mysql2`), amb les credencials en un fitxer `.env` (mai al codi).
Endpoint `GET /health` que fa un ping a la base de dades i respon l'estat de la connexió.

- Contracte
Les credencials de la DB no van mai al codi: viuen a `.env` (que no es puja al repo). Un `.env.example` documenta les variables necessàries.
`GET /health` → 200 `{ "estat": "ok", "db": "ok" }` si la DB respon; 500 `{ "estat": "error", "db": "ko" }` si no.

- Criteris d'acceptació
[ ] `npm install` instal·la express, mysql2 i dotenv sense errors.
[ ] `npm start` aixeca el servidor al port de `.env` (o 3000) sense petar.
[ ] Obrir `/` al navegador mostra la vista de tasques (public/index.html).
[ ] Amb la DB `todos_pro` creada i les credencials correctes, `GET /health` respon 200 amb `db: "ok"`.
[ ] Amb credencials incorrectes o la DB apagada, `GET /health` respon 500 amb `db: "ko"` (no peta el servidor).
[ ] Cap credencial ni secret dins del codi font; tot a `.env`.
