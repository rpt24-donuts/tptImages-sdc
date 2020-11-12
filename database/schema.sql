DROP DATABASE IF EXISTS TpT;

CREATE DATABASE TpT;

USE TpT;

CREATE TABLE images (
  id INT AUTO_INCREMENT,
  title VARCHAR(100),
  resourceType VARCHAR(50),
  format VARCHAR(50),
  image1 BLOB,
  image2 BLOB,
  image3 BLOB,
  image4 BLOB,
  image5 BLOB,
  PRIMARY KEY (id)

);

-- INSERT INTO Items (itemName, quantity) VALUES ('Cheese', 5);
-- INSERT INTO Items (itemName, quantity) VALUES ('Beer', 500);
-- INSERT INTO Items (itemName, quantity) VALUES ('Crackers', 50);