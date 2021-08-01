CREATE DATABASE runningtideinventory;

CREATE TABLE inventory(
    id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

COPY inventory TO '/Users/urmilshah1/Desktop/inventory.csv' DELIMITER ',' CSV HEADER;