-- Connect to the cafe_dev database
\c cafe_dev;

-- Insert data into the products table
INSERT INTO products (product_name, product_price, product_quantity) VALUES 
('coffee', 4, 20),
('bagel', 1, 20),
('butter roll', 1, 10),
('snicker', 1, 10),
('crossaint', 1, 15),
('bread', 1, 10),
('cookie', 1, 10),
('coke', 1, 10),
('snapple', 2, 10),
('pepsi', 2.50, 15);

-- Insert data into the users table
INSERT INTO users (user_name, user_address, user_password) VALUES 
('Owner', 'Cafe', 'ImTheOwner1'),
('John Doe', '123 abc st', 'password123'),
('Jane Doe', '789 xyz ave', 'password123'),
('Bob', '456 mno dr', 'password123');

-- Insert data into the cart table
INSERT INTO cart (cart_owner) VALUES 
(3), -- Jane Doe's cart
(2), -- John Doe's cart
(4); -- Bob's cart

-- Insert data into the cart_products table
INSERT INTO cart_products (carts_id, products_id, products_quantity) VALUES 
(1, 1, 1), -- Jane Doe's cart: 1 coffee
(1, 2, 2), -- Jane Doe's cart: 2 bagels
(2, 10, 1), -- John Doe's cart: 1 pepsi
(2, 5, 1), -- John Doe's cart: 1 crossaint
(3, 3, 2), -- Bob's cart: 2 butter rolls
(3, 6, 3), -- Bob's cart: 3 breads
(3, 2, 1); -- Bob's cart: 1 bagel

-- Insert data into the orders table
INSERT INTO orders (order_user, order_cart) VALUES 
(3, 1), -- Jane Doe's order for her cart
(4, 3); -- Bob's order for his cart
