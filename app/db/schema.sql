
CREATE DATABASE user_db;
USE user_db;

CREATE TABLE user
(
	id int NOT NULL AUTO_INCREMENT,
	user_fName varchar(100) NOT NULL,
	user_lName varchar(100) NOT NULL,
	email varchar(100) NOT NULL,
	password varchar(100) NOT NULL,
	dateOfBirth int NOT NULL,
	gender int NULL,
	weight int NULL,
	height int NULL,
	PRIMARY KEY (id)
);

CREATE TABLE alcohol
(
	id int NOT NULL AUTO_INCREMENT,
	alchoholType varchar(100) NOT NULL,
	alcoholContent varchar(100) NOT NULL,
	PRIMARY KEY (id)	
)