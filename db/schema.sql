DROP DATABASE IF EXISTS cafe_dev;
CREATE DATABASE cafe_dev;

\c cafe_dev;

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name TEXT NOT NULL,
    product_price DECIMAL(10, 2) NOT NULL,  -- Using DECIMAL for monetary values
    product_quantity INT NOT NULL,
    product_details TEXT, 
    product_image TEXT,
    instock BOOLEAN DEFAULT TRUE
);

CREATE TABLE users ( 
    user_id SERIAL PRIMARY KEY,
    user_name TEXT NOT NULL,
    user_password VARCHAR(15) NOT NULL,
    user_address TEXT NOT NULL
);

CREATE TABLE cart (
    cart_id SERIAL PRIMARY KEY,
    cart_owner INT NOT NULL REFERENCES users (user_id) ON DELETE CASCADE
);

CREATE TABLE cart_products (
    cart_product_id SERIAL PRIMARY KEY,
    carts_id INT NOT NULL REFERENCES cart (cart_id) ON DELETE CASCADE,
    products_id INT NOT NULL REFERENCES products (product_id) ON DELETE CASCADE,
    quantity INT NOT NULL
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    order_user INT REFERENCES users (user_id) ON DELETE SET NULL, 
    order_cart INT REFERENCES cart (cart_id) ON DELETE SET NULL
);
