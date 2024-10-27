//Task 1: Setup HTML structure for order form
// ^look at index.html for task 1

//Task 2: Add Event Listener for Product Selection
const productSelector = document.getElementById('product-selector'); //retrieves HTML element: product-selector
const quantityInput = document.getElementById('quantity'); //retrieves HTML element: quantity
const totalPriceElement = document.getElementById('total-price'); //retrieves HTML element: total-price
const placeOrderButton = document.getElementById('place-order'); //retrieves HTML element: place-order
const orderSummary = document.getElementById('order-summary'); //retrieves HTML element: order-summary

// Task 3: Calculate Total Price Dynamically
function updateTotalPrice() { //updateTotalPrice function
    const productPrice = parseFloat(productSelector.value); //represents price of selected product
    const quantity = parseInt(quantityInput.value); //represents number of products being purchased
    const totalPrice = productPrice * quantity; //calculating total price
    
    totalPriceElement.textContent = totalPrice.toFixed(2); //output total price
}

productSelector.addEventListener('change', updateTotalPrice); //task 2 event listener
quantityInput.addEventListener('input', updateTotalPrice); //task 2 event listener

// Task 4: Handle Order Submission
placeOrderButton.addEventListener('click', function() { //button
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text; //retrieves product selected and stores product in selectedProduct variable
    const quantity = quantityInput.value; //gets number of items from input
    const totalPrice = totalPriceElement.textContent; //total price displayed 
    
    orderSummary.textContent = `You ordered ${quantity} of ${selectedProduct} for the price of $${totalPrice}`; //output message
});