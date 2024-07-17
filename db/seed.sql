\c cafe_dev;

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

INSERT INTO users (user_name, user_address) VALUES 
('Owner', 'Cafe'),
('John Doe', '123 abc st'),
('Jane Doe', '789 xyz ave'),
('Bob', '456 mno dr');

INSERT INTO cart (cart_owner,   ) VALUES 
(3, '1-2, 2-1, 3-3'),
(2, '10-2, 5-1, 6-3'),
(4, '3-1, 6-3, 2-1');


INSERT INTO products_in_cart (cart_id, product_id, qty) VALUES 
(3,1,1),
(3, 2, 2),
(2, 10, 1),
(2, 5, 1),
(4, 3, 2), 
(4, 6, 3), 
(4, 2, 1);


INSERT INTO orders (order_user, order_cart) VALUES 
(3 , 1),
(4 , 3);