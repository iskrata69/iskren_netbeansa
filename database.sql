DROP DATABASE IF EXISTS gotvarstvo;
CREATE DATABASE gotvarstvo;
USE gotvarstvo;
CREATE TABLE potrebiteli(id INT, name VARCHAR(255), pass VARCHAR(255), mail VARCHAR(255));
INSERT INTO potrebiteli VALUES
(1, "admin", "admin", "admin@local.bg"),
(2, "usr", "usr", "usr@local.bg");