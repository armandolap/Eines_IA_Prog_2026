-- schema.sql — Base de dades todos_pro
-- Feature 004: Disseny i creació de la base de dades
-- Nota: MariaDB 10.4 no suporta utf8mb4_0900_ai_ci, s'usa utf8mb4_general_ci

CREATE DATABASE IF NOT EXISTS `todos_pro`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;

USE `todos_pro`;

-- Taula d'usuaris
CREATE TABLE IF NOT EXISTS `users` (
  `id`            BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nom`           VARCHAR(100)    NOT NULL,
  `email`         VARCHAR(255)    NOT NULL,
  `password_hash` VARCHAR(255)    NOT NULL,
  `created_at`    DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_users_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Taula de tasques
CREATE TABLE IF NOT EXISTS `todos` (
  `id`         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title`      VARCHAR(255)    NOT NULL,
  `done`       TINYINT(1)      NOT NULL DEFAULT 0,
  `created_at` DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id`    BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_todos_user_id` (`user_id`),
  CONSTRAINT `fk_todos_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;