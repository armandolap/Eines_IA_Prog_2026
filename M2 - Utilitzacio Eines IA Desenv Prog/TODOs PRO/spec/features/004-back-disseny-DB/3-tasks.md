# Tasques — 004 Disseny de la base de dades

[x] T1 — schema.sql: CREATE DATABASE `todos_pro` amb utf8mb4.
[x] T2 — Taula `users`: id PK, nom, email UNIQUE, password_hash, created_at.
[x] T3 — Taula `todos`: id PK, title, done, created_at, user_id amb FOREIGN KEY cap a users.
[x] T4 — Aplicar schema.sql a MySQL i comprovar que crea les taules sense errors.
[x] T5 — Verificar els criteris contra MySQL: email únic, FK bloqueja user_id inexistent; si tot passa, roadmap a «feta».
