DROP DATABASE IF EXISTS cafe_dev;
CREATE DATABASE cafe_dev;

\c cafe_dev;

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY ,
    product_name TEXT NOT NULL,
    product_price INT NOT NULL,
    product_details TEXT, 
    product_image TEXT,
    inStock BOOLEAN
);

CREATE TABLE orders (

);

CREATE TABLE cart (

);