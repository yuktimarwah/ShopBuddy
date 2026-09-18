let wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];

function isWishlisted(productId) {
return wishlist.includes(String(productId));
}

function toggleWishlist(productId) {


productId = String(productId);

if (wishlist.includes(productId)) {
    wishlist = wishlist.filter(id => id !== productId);
} else {
    wishlist.push(productId);
}

localStorage.setItem("wishlistItems", JSON.stringify(wishlist));

updateWishlistButtons();
renderWishlist();


}

function updateWishlistButtons() {


const wishlistButtons = document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach(button => {

    const productId = button.dataset.id;

    if (isWishlisted(productId)) {
        button.innerHTML = `<i class="fa-solid fa-heart"></i>`;
        button.classList.add("wishlisted");
    } else {
        button.innerHTML = `<i class="fa-regular fa-heart"></i>`;
        button.classList.remove("wishlisted");
    }
});


}

function renderWishlist() {


const wishlistContainer = document.getElementById("wishlist-container");

if (!wishlistContainer || typeof products === "undefined") {
    return;
}

if (wishlist.length === 0) {
    wishlistContainer.innerHTML = `
        <div class="empty-wishlist">
            <p>Your wishlist is empty.</p>
        </div>
    `;
    return;
}

const wishlistProducts = wishlist
    .map(id => products.find(product => String(product.id) === String(id)))
    .filter(product => product);

wishlistContainer.innerHTML = `
    <div class="wishlist-grid">

        ${wishlistProducts.map(product => `
            <div class="wishlist-card" data-id="${product.id}">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <p class="brand">${product.brand}</p>

                <h3>${product.name}</h3>

                <p class="price">
                    ₹${product.price.toLocaleString("en-IN")}
                </p>

                <button
                    class="remove-wishlist"
                    data-id="${product.id}"
                >
                    Remove
                </button>

            </div>
        `).join("")}

    </div>
`;


}
document.addEventListener("click", (event) => {

    const wishlistCard = event.target.closest(".wishlist-card");

    if (!wishlistCard) {
        return;
    }

    if (event.target.closest(".remove-wishlist")) {
        return;
    }

    const productId = wishlistCard.dataset.id;

    window.location.href = `product-details.html?id=${productId}`;
});

document.addEventListener("click", event => {


const wishlistButton = event.target.closest(".wishlist-btn");

if (wishlistButton) {
    event.stopPropagation();

    const productId = wishlistButton.dataset.id;

    if (productId) {
        toggleWishlist(productId);
    }

    return;
}

const removeButton = event.target.closest(".remove-wishlist");

if (removeButton) {

    const productId = removeButton.dataset.id;

    if (productId) {
        toggleWishlist(productId);
    }
}


});

renderWishlist();
updateWishlistButtons();

window.addEventListener("pageshow", () => {


wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];

renderWishlist();
updateWishlistButtons();


});
