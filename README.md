
## Bamazon

### Description
This application implements a simple command line based storefront using the npm inquirer package and the MySQL database backend together with the npm mysql package. 

### Customer Interface
The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

### Technologies Used
* MySQL
* Node.JS
* JavaScript

### Dependencies Used
* MySQL
* Inquirer

### Samples of Orders in Command Line

#### Enough Products to Supply Order
![Order Accepted](/images/supply.gif)

#### Not Enough Products to Supply Order
![Order Not Accepted](/images/nosupply.gif)








