DROP DATABASE IF EXISTS sdcimages;
CREATE DATABASE sdcimages;
\c sdcimages;
DROP TABLE IF EXISTS images;
CREATE TABLE images (
  ID SERIAL PRIMARY KEY,
  images varchar(5000),
  item varchar(20)
)

-- COPY images(images, item) FROM 'database/test.csv' DELIMITER ',' CSV HEADER;