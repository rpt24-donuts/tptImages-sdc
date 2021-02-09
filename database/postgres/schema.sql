DROP DATABASE IF EXISTS sdcimages;
CREATE DATABASE sdcimages;
\c sdcimages;
DROP TABLE IF EXISTS images;
CREATE TABLE images (
  ID SERIAL PRIMARY KEY,
  item varchar(20),
  images varchar(5000)
)