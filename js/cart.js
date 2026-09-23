let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

// Convert old cart format ["1", "5"] into
// new format [{ id: "1", quantity: 1 }, { id: "5", quantity: 1 }]
cart = cart.map(item => {
    if (typeof item === "string") {
        return {
            id: item,
            quantity: 1
        };
    }
    return item;
});

function saveCart() {
    localStorage.setItem("cartItems", JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.innerText = `Cart (${cart.length})`;
    }
}

function addToCart(productId) {

    productId = String(productId);

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
}

function updateCart(productId, quantity) {

    productId = String(productId);
    quantity = Number(quantity);

    const cartItem = cart.find(item => item.id === productId);

    if (!cartItem) {
        return;
    }

    if (quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    cartItem.quantity = quantity;

    saveCart();
    updateCartCount();
    renderCart();
}

function removeFromCart(productId) {

    cart = cart.filter(item => item.id !== String(productId));

    saveCart();
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

        return;
    }

    const increaseButton = event.target.closest(".increase-quantity");

    if (increaseButton) {

        const cartItem = increaseButton.closest(".cart-item");

        if (cartItem) {

            const productId = cartItem.dataset.id;
            const item = cart.find(item => item.id === productId);

            if (item) {
                updateCart(productId, item.quantity + 1);
            }
        }

        return;
    }

    const decreaseButton = event.target.closest(".decrease-quantity");

    if (decreaseButton) {

        const cartItem = decreaseButton.closest(".cart-item");

        if (cartItem) {

            const productId = cartItem.dataset.id;
            const item = cart.find(item => item.id === productId);

            if (item) {
                updateCart(productId, item.quantity - 1);
            }
        }

        return;
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
        .map(item => {
            const product = products.find(
                product => String(product.id) === String(item.id)
            );

            if (!product) {
                return null;
            }

            return {
                product,
                quantity: item.quantity
            };
        })
        .filter(item => item);

    cartContainer.innerHTML = `
        <div class="cart-items">

            ${cartProducts.map(item => `
                <div class="cart-item" data-id="${item.product.id}">

                    <img
                        src="${item.product.image}"
                        alt="${item.product.name}"
                    >

                    <div>
                        <p class="brand">${item.product.brand}</p>

                        <h3>${item.product.name}</h3>

                        <p class="price">
                            ₹${item.product.price.toLocaleString("en-IN")}
                        </p>

                        <div class="quantity-control">

                            <button
                                class="quantity-btn decrease-quantity"
                                data-id="${item.product.id}"
                            >
                                −
                            </button>

                            <span class="quantity">
                                ${item.quantity}
                            </span>

                            <button
                                class="quantity-btn increase-quantity"
                                data-id="${item.product.id}"
                            >
                                +
                            </button>

                        </div>
                    </div>

                    <button class="remove-cart">
                        Remove
                    </button>

                </div>
            `).join("")}

        </div>
    `;
}

document.addEventListener("click", event => {

    const cartItem = event.target.closest(".cart-item");

    if (!cartItem) {
        return;
    }

    if (
        event.target.closest(".remove-cart") ||
        event.target.closest(".quantity-control")
    ) {
        return;
    }

    const productId = cartItem.dataset.id;

    window.location.href = `product-details.html?id=${productId}`;
});

updateCartCount();
renderCart();

document.addEventListener("navbarLoaded", () => {
    updateCartCount();
});

window.addEventListener("pageshow", () => {

    cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    cart = cart.map(item => {
        if (typeof item === "string") {
            return {
                id: item,
                quantity: 1
            };
        }

        return item;
    });

    updateCartCount();
    renderCart();
});