let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

function updateCartCount() {
    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.innerText = `Cart (${cart.length})`;
    }
}

function addToCart(productId) {
    if (!cart.includes(String(productId))) {
        cart.push(String(productId));
        localStorage.setItem("cartItems", JSON.stringify(cart));
    }

    updateCartCount();
}

function removeFromCart(productId) {
    cart = cart.filter(id => id !== String(productId));

    localStorage.setItem("cartItems", JSON.stringify(cart));

    updateCartCount();
    renderCart();
}

document.addEventListener("click", event => {

    const addButton = event.target.closest(".add-cart");

    if (addButton) {
        event.stopPropagation();

        const productId = addButton.dataset.id;

        if (productId) {
            addToCart(productId);
        }

        return;
    }

    const removeButton = event.target.closest(".remove-cart");

    if (removeButton) {
        const cartItem = removeButton.closest(".cart-item");

        if (cartItem) {
            removeFromCart(cartItem.dataset.id);
        }
    }
});

function renderCart() {

    const cartContainer = document.getElementById("cart-container");

    if (!cartContainer || typeof products === "undefined") {
        return;
    }

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty.</p>
            </div>
        `;
        return;
    }

    const cartProducts = cart
        .map(id => products.find(product => String(product.id) === String(id)))
        .filter(product => product);

    cartContainer.innerHTML = `
        <div class="cart-items">
            ${cartProducts.map(product => `
                <div class="cart-item" data-id="${product.id}">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <div>
                        <p class="brand">${product.brand}</p>
                        <h3>${product.name}</h3>
                        <p class="price">
                            ₹${product.price.toLocaleString("en-IN")}
                        </p>
                    </div>

                    <button class="remove-cart">
                        Remove
                    </button>

                </div>
            `).join("")}
        </div>
    `;
}

updateCartCount();
renderCart();

document.addEventListener("navbarLoaded", () => {
    updateCartCount();
});

window.addEventListener("pageshow", () => {
    cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    updateCartCount();
});