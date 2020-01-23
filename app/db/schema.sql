
CREATE DATABASE user_db;
USE user_db;


CREATE TABLE alcohol
(
	id int NOT NULL AUTO_INCREMENT,
	alcoholType varchar(100) NOT NULL,
	alcoholContent varchar(100) NOT NULL,
	PRIMARY KEY (id)	
);
