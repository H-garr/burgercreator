DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

use burgers_db;
CREATE TABLE burgers (
    id NUMERIC(10)  auto_increment,
    burger_name VARCHAR(30),
    devoured boolean NOT NULL DEFAULT 0 , 
    -- have to add a default value so its always uneaten
    PRIMARY KEY(id)
)
