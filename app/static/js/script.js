// This script handles adding items to the cart and provides feedback to the user.

document.addEventListener('DOMContentLoaded', function() {

    // Function to update the cart count
    function updateCartCount() {
        const cartItems = document.querySelectorAll('.cart-item').length;
        const cartCountElement = document.getElementById('cart-count');
        if (cartCountElement) {
            cartCountElement.textContent = cartItems;
        }
    }

    // Function to handle adding items to the cart
    function handleAddToCart(event) {
        event.preventDefault();
        const productName = this.dataset.productName;

        // Fake adding to cart for demonstration purposes
        alert(`${productName} has been added to your cart!`);
        
        // Here, you would typically make an AJAX request to add the item to the server-side cart
        
        // Example of how to dynamically add an item to the cart (for demo purposes)
        const cart = document.getElementById('cart');
        if (cart) {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.textContent = productName;
            cart.appendChild(cartItem);
            updateCartCount();
        }
    }

    // Attach event listeners to 'Add to Cart' buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', handleAddToCart);
    });

    // Initial cart count update
    updateCartCount();
    
    // Example function to handle form submission for repair requests
    const repairForm = document.getElementById('repair-form');
    if (repairForm) {
        repairForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const deviceType = document.getElementById('device').value;
            const issueDescription = document.getElementById('issue').value;

            // Display a simple confirmation message
            alert(`Repair request submitted for ${deviceType} with issue: ${issueDescription}`);

            // Here, you would typically make an AJAX request to submit the repair request
        });
    }
});
