DROP DATABASE IF EXISTS `burger_DB`;
CREATE DATABASE `burger_DB`;

use burger_DB;

CREATE TABLE Burgers(
	Burger_ID integer (11) auto_increment not null,
	BurgerName VARCHAR(100) NULL,
	Devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (Burger_id)
);
