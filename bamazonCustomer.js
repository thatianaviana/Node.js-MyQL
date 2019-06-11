var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "brasilia1",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllProducts();
  
});



function queryAllProducts() {
    console.log("-----------------------------------------------------------------------");
    console.log("Welcome to Bamazon! Below are the products we currently have for sale:" );
    console.log("-----------------------------------------------------------------------");
    console.log("ID| Item Name | Department | Price | Quantity ");
    console.log("---------------------------------------------");
    connection.query("SELECT * FROM products ", function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | $" + res[i].price + " | " + res[i].stock_quantity);
      }
      console.log("---------------------------------------------");
    purchaseItem();
    });
  }

  function purchaseItem() {
    inquirer.prompt([{
        name: "itemID",
        type: "input",
        message: "What is the item ID of the product you would like to buy?"
    }, {
        name: "Quantity",
        type: "input",
        message: "How many would you like to buy?"
    }]).then(function(answer) {
        connection.query("SELECT * FROM products WHERE products.id = ?", [answer.itemID], function(err, res) {

            if (res[0].id == answer.itemID && res[0].stock_quantity >= parseInt(answer.Quantity)) {
                var TotalPrice = res[0].price * parseInt(answer.Quantity);
                console.log("Your purchase was successful.");
                console.log("You just spent: $" + TotalPrice);
              
                connection.query("UPDATE products SET ? WHERE ?", [{
                    stock_quantity: res[0].stock_quantity - parseInt(answer.Quantity)
                }, {
                    id: res[0].id
                }], function(err, res) {
                       console.log("Would You Like to Buy Something Else?");
                       queryAllProducts();
                });

            } else if (res[0].id == answer.itemID && res[0].stock_quantity < parseInt(answer.Quantity)) {
                console.log("We don't have enough to supply your order!");
                queryAllProducts();
            }

        });

    });
};



// -- Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
// -- The app should then prompt users with two messages.



// -- The first should ask them the ID of the product they would like to buy.
// -- The second message should ask how many units of the product they would like to buy.



// -- Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.



// -- If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.



// -- However, if your store does have enough of the product, you should fulfill the customer's order.