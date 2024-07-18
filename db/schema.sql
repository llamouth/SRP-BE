DROP DATABASE IF EXISTS cafe_dev;
CREATE DATABASE cafe_dev;

\c cafe_dev;

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name TEXT NOT NULL,
    product_price INT NOT NULL,
    product_quantity INT NOT NULL,
    product_details TEXT, 
    product_image TEXT,
    instock BOOLEAN
);

CREATE TABLE users ( 
    user_id SERIAL PRIMARY KEY,
    user_name TEXT NOT NULL,
    user_address TEXT NOT NULL
);

CREATE TABLE cart (
    cart_id SERIAL PRIMARY KEY,
    cart_owner INT REFERENCES users (user_id) NOT NULL, 
    cart_products TEXT NOT NULL
);

CREATE TABLE products_in_cart (
    products_in_cart_id SERIAL PRIMARY KEY,
    cart_id INT REFERENCES cart (cart_id),
    product_id INT REFERENCES products (product_id),
    products_in_cart_aquantity
);

CREATE TABLE orders (
    orders_id SERIAL PRIMARY KEY,
    order_user INT REFERENCES users (user_id), 
    order_cart INT REFERENCES cart (cart_id)
);