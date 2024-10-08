// Sample menu items
// Sample menu items with image URLs
const menuItems = [
    { id: 1, name: "Spaghetti Carbonara", price: 12.99, image: "spaghettii.jpg" },
    { id: 2, name: "Margherita Pizza", price: 10.99, image: "pizza.jpeg" },
    { id: 3, name: "Caesar Salad", price: 8.99, image: "salad.jpg" },
    { id: 4, name: "Grilled Chicken", price: 14.99, image: "grilledchicken.jpeg" },
    { id: 5, name: "Chocolate Lava Cake", price: 6.99, image: "chocolavecake.jpeg" }
];

// Render Menu Items
const menuContainer = document.getElementById('menu-container');
menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="menu-image">
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
        <button onclick="addToOrder(${item.id})">Add to Order</button>
    `;
    menuContainer.appendChild(menuItem);
});


// Order Array
let order = [];

// Add item to order
function addToOrder(itemId) {
    const selectedItem = menuItems.find(item => item.id === itemId);
    order.push(selectedItem);
    renderOrderSummary();
}

// Render Order Summary
function renderOrderSummary() {
    const orderSummary = document.getElementById('order-summary');
    orderSummary.innerHTML = "<h3>Your Order:</h3>";
    
    order.forEach(item => {
        const orderItem = document.createElement('p');
        orderItem.innerHTML = `${item.name} - $${item.price}`;
        orderSummary.appendChild(orderItem);
    });
}

// Handle order placement
const placeOrderBtn = document.getElementById('place-order-btn');
placeOrderBtn.addEventListener('click', () => {
    if (order.length === 0) {
        alert("Your order is empty.");
    } else {
        alert("Order placed successfully!");
        order = [];  // Clear the order after placement
        renderOrderSummary();  // Clear the order summary
    }
});
