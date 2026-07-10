# Conceptes de Programació — TODOs Pro

Glossari de conceptes nous que van sortint durant el desenvolupament del projecte.

---

## MySQL / SQL

### Schema SQL
**Definició:** Fitxer de text que conté les comandes SQL per crear i configurar una base de dades.

**Explicació:** Un schema SQL defineix l'estructura completa d'una base de dades: les taules, les columnes, les relacions entre taules i les restriccions. És com un plànol de la base de dades.

**Exemple:**
```sql
CREATE DATABASE IF NOT EXISTS `todos_pro`;
USE `todos_pro`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
);
```

---

### CREATE DATABASE amb charset i collation
**Definició:** Comanda SQL que crea una base de dades especificant el joc de caràcters i les regles d'ordenació.

**Explicació:**
- `CHARACTER SET utf8mb4`: Permet emmagatzemar qualsevol caràcter Unicode (inclòs emoji).
- `COLLATE utf8mb4_0900_ai_ci`: Regles d'ordenació i comparació de text (accent-insensible, case-insensible). Només disponible a MySQL 8.0+.
- `COLLATE utf8mb4_general_ci`: Collation compatible amb MariaDB i versions anteriors de MySQL.

**Exemple:**
```sql
-- MySQL 8.0+
CREATE DATABASE IF NOT EXISTS `todos_pro`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_0900_ai_ci;

-- MariaDB / MySQL < 8.0
CREATE DATABASE IF NOT EXISTS `todos_pro`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;
```

---

### PRIMARY KEY amb BIGINT UNSIGNED AUTO_INCREMENT
**Definició:** Clau primària que és un número enter positiu que s'incrementa automàticament.

**Explicació:**
- `BIGINT UNSIGNED`: Número enter gran (64 bits) sense signe (només positiu).
- `AUTO_INCREMENT`: MySQL assigna automàticament el següent número disponible.
- És la recomanació de la skill mysql per a taules OLTP (transaccions en línia).

**Exemple:**
```sql
`id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
PRIMARY KEY (`id`)
```

---

### FOREIGN KEY
**Definició:** Restricció que enllaça una columna d'una taula amb la clau primària d'una altra taula.

**Explicació:** Garanteix la integritat referencial: no es pot inserir un registre amb una FK que no existeix a la taula referenciada.

**Exemple:**
```sql
CONSTRAINT `fk_todos_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
  ON DELETE CASCADE ON UPDATE CASCADE
```

---

### ON DELETE CASCADE / ON UPDATE CASCADE
**Definició:** Accions que s'executen automàticament quan es modifica o elimina el registre referenciat.

**Explicació:**
- `ON DELETE CASCADE`: Si s'elimina un usuari, s'eliminen totes les seves tasques.
- `ON UPDATE CASCADE`: Si canvia l'ID d'un usuari, s'actualitza a les tasques associades.

---

### UNIQUE KEY
**Definició:** Restricció que impedeix valors duplicats en una columna.

**Explicació:** Assegura que cada valor de la columna sigui únic a tota la taula. S'utilitza per emails, noms d'usuari, etc.

**Exemple:**
```sql
UNIQUE KEY `uk_users_email` (`email`)
```

---

### Índex
**Definició:** Estructura de dades que accelera les consultes sobre una o més columnes.

**Explicació:** Un índex és com l'índex d'un llibre: permet trobar ràpidament les files que compleixen un criteri sense escanejar tota la taula.

**Exemple:**
```sql
KEY `idx_todos_user_id` (`user_id`)
```

---

### InnoDB
**Definició:** Motor d'emmagatzematge per defecte de MySQL.

**Explicació:** Suporta transaccions, claus foranes i bloqueig de files. És el motor recomanat per a aplicacions OLTP.

**Exemple:**
```sql
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

---

## Conceptes generals

### MySQL vs MariaDB
**Definició:** Dos sistemes de gestió de bases de dades relacionals molt similars.

**Explicació:**
- **MySQL**: desenvolupat originalment per MySQL AB, ara propietat d'Oracle.
- **MariaDB**: fork de MySQL creat pels desenvolupadors originals com a alternativa de codi obert.
- MariaDB és majoritàriament compatible amb MySQL, però pot haver-hi diferències en funcionalitats avançades (com collations específiques).

**Nota al projecte:** El servidor utilitzat és MariaDB 10.4.32, per la qual cosa s'ha utilitzat `utf8mb4_general_ci` en lloc de `utf8mb4_0900_ai_ci`.

---

### OLTP (Online Transaction Processing)
**Definició:** Sistema de processament de transaccions en línia,Optimitzat per a operacions ràpides de lectura/escriptura.

**Explicació:** Les aplicacions web típiques (com TODOs Pro) són OLTP: moltes transaccions curtes i ràpides (afegir tasca, marcar com a feta, etc.).

---

### Integritat referencial
**Definició:** Propietat de les bases de dades que garanteix que les relacions entre taules siguin coherents.

**Explicació:** Si una taula `todos` té una FK a `users`, no pot haver-hi tasques d'usuaris que no existeixen. Les FK enforceixen aquesta regla automàticament.