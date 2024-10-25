let totalPrice = 0;

function addToCart(price) {
    totalPrice += price;
    document.getElementById('cart-total').innerText = totalPrice;
}

function clearCart() {
    totalPrice = 0;
    document.getElementById('cart-total').innerText = totalPrice;
}
