-- Connect to the cafe_dev database
\c cafe_dev;

INSERT INTO products (product_name, product_price, product_quantity) VALUES 
('Coffee', 4, 20),
('Bagel', 1, 20),
('Butter Roll', 1, 10),
('Choclate Candy', 1, 10),
('Crossaint', 1, 15),
('Bread', 1, 10),
('Chocolate Chip Cookie', 1, 10),
('Root Beer', 1, 10),
('Orange juice', 2, 10),
('Bottle of Water', 2.50, 15);

INSERT INTO users (user_full_name, user_name, user_address, user_password) VALUES 
('Owner','Owner', 'Cafe', 'ImTheOwner1'),
('John Doe', 'johndoe', '123 abc st', 'password123'),
('Jane Doe', 'janedoe', '789 xyz ave', 'password123'),
('Bob', 'bob123', '456 mno dr', 'password123');

INSERT INTO cart_products (carts_id, products_id, products_quantity) VALUES 
(2, 1, 1), 
(2, 2, 2), 
(3, 10, 1), 
(3, 5, 1), 
(4, 3, 2), 
(4, 6, 3),
(4, 2, 1); 

INSERT INTO orders (order_user, order_cart) VALUES 
(3, 2),
(4, 3);
