// Task 1: Create an Inventory Array of Product Objects 
const inventory = [
    {name: 'Espresso', price: 3, quantity: 10 },
    { name: 'Latte', price: 4, quantity: 5 },
    { name: 'Cappuccino', price: 4, quantity: 6 },
    { name: 'Mocha', price: 5, quantity: 4 }
];

// Task 2: Create an Orders Array of Order Objects
let orders = []

// Task 3: Create a Function to Place an Order 
function placeOrder(custommerName, items) {
    for (let quantity in items) {
        inventory.find(items => items.name === items);
        if (!items) { 
            console.log("Error: Item not avaliable.");
            break;
        }
    }
    for (let quantity in items) {
        inventory.find(item => items.name === items);
        items.quantity -= inventory.quantity;
    }
    orders.push({
        customerName: customerName,
        items: orderedItems,
        status: "Pending"
    });

}
console.log(placeOrder(`Order placed for ${customerName}`));

// Task 4: Create a Function to Calculate Total for an Order
function calculateOrderTotals(order) {
    return order.item. reduce((total, orderItem) => {
        const product = inventory. find(item => item.name === orderItem.name);
        return total + (product.price * orderItem.quantity);
    }, 0);
}
