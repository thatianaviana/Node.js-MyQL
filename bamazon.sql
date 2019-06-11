
-- Create a MySQL Database called bamazon.
CREATE DATABASE bamazon_db;
USE bamazon_db;


-- Then create a Table inside of that database called products.
-- item_id (unique id for each product)
-- product_name (Name of product)
-- department_name
-- price (cost to customer)
-- stock_quantity (how much of the product is available in stores)

CREATE TABLE products (
    id INTEGER (11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR (20) NOT NULL,
    price INTEGER (11) NOT NULL,
    stock_quantity INTEGER (100) NOT NULL,
    PRIMARY KEY (id)

);

-- Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("dish soap", "house", 5, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("keyboard", "electronics", 30, 98);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("tooth paste", "house", 3.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("candles", "house decor", 3, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("trash can", "house", 8, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("ipad", "electronics", 400, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("water bottles", "house", 4, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("pens", "office", 3, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("go pro camera", "electronics", 300, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("iphone case", "electronics", 20, 400);



-- Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
-- The app should then prompt users with two messages.



-- The first should ask them the ID of the product they would like to buy.
-- The second message should ask how many units of the product they would like to buy.



-- Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.



-- If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.



-- However, if your store does have enough of the product, you should fulfill the customer's order.


-- This means updating the SQL database to reflect the remaining quantity.
-- Once the update goes through, show the customer the total cost of their purchase.




