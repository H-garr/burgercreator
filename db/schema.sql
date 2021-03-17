DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

use burgers_db;
CREATE TABLE burgers (
    id NUMERIC(10)  auto_increment,
    burger_name VARCHAR(30),
    devoured boolean,
    PRIMARY KEY(id)
)
