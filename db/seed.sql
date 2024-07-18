-- Connect to the cafe_dev database
\c cafe_dev;

-- Insert data into the products table
INSERT INTO products (product_name, product_price, product_quantity) VALUES 
('coffee', 400, 20),
('bagel', 100, 20),
('butter roll', 100, 10),
('snicker', 100, 10),
('crossaint', 100, 15),
('bread', 100, 10),
('cookie', 100, 10),
('coke', 100, 10),
('snapple', 200, 10),
('pepsi', 250, 15);

-- Insert data into the users table
INSERT INTO users (user_name, user_address) VALUES 
('Owner', 'Cafe'),
('John Doe', '123 abc st'),
('Jane Doe', '789 xyz ave'),
('Bob', '456 mno dr');

-- Insert data into the cart table
INSERT INTO cart (cart_owner) VALUES 
(3), -- Jane Doe's cart
(2), -- John Doe's cart
(4); -- Bob's cart

-- Insert data into the cart_products table
INSERT INTO cart_products (cart_id, product_id, quantity) VALUES 
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
