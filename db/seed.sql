-- Connect to the cafe_dev database
\c cafe_dev;

-- Insert data into the products table
INSERT INTO products (product_name, product_price, product_quantity) VALUES 
('Coffee', 4, 20),
('Bagel', 1, 20),
('Butter Roll', 1, 10),
('Snicker', 1, 10),
('Crossaint', 1, 15),
('Bread', 1, 10),
('Cookie', 1, 10),
('Coke', 1, 10),
('Snapple', 2, 10),
('Pepsi', 2.50, 15);

-- Insert data into the users table
INSERT INTO users (user_full_name, user_name, user_address, user_password) VALUES 
('Owner','Owner', 'Cafe', 'ImTheOwner1'),
('John Doe', 'johndoe', '123 abc st', 'password123'),
('Jane Doe', 'janedoe', '789 xyz ave', 'password123'),
('Bob', 'bob123', '456 mno dr', 'password123');

-- Insert data into the cart_products table
INSERT INTO cart_products (carts_id, products_id, products_quantity) VALUES 
(2, 1, 1), -- john Doe's cart: 1 coffee
(2, 2, 2), -- john Doe's cart: 2 bagels
(3, 10, 1), -- jane Doe's cart: 1 pepsi
(3, 5, 1), -- jane Doe's cart: 1 crossaint
(4, 3, 2), -- Bob's cart: 2 butter rolls
(4, 6, 3), -- Bob's cart: 3 breads
(4, 2, 1); -- Bob's cart: 1 bagel

-- Insert data into the orders table
INSERT INTO orders (order_user, order_cart) VALUES 
(3, 1), -- Jane Doe's order for her cart
(4, 3); -- Bob's order for his cart
