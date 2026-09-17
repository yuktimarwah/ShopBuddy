const navbarPath = window.location.pathname.includes("/pages/")
    ? "../components/navbar.html"
    : "components/navbar.html";

fetch(navbarPath)
    .then(response => {
        console.log("Navbar response:", response.status);
        return response.text();
    })
    .then(data => {

        document.getElementById("navbar").innerHTML = data;

        // Search functionality
        const searchInput = document.querySelector("#search-input");
        const searchButton = document.querySelector(".search-btn");

        searchButton.addEventListener("click", () => {

            const searchTerm = searchInput.value.trim().toLowerCase();

            if (searchTerm === "") {
                alert("Please enter a product name.");
                return;
            }

            const productsPath = window.location.pathname.includes("/pages/")
                ? "products.html"
                : "pages/products.html";

            window.location.href =
                `${productsPath}?search=${encodeURIComponent(searchTerm)}`;
        });

        const wishlistNav = document.getElementById("wishlist-nav");

wishlistNav.addEventListener("click", () => {
    const wishlistPath = window.location.pathname.includes("/pages/")
        ? "wishlist.html"
        : "pages/wishlist.html";

    window.location.href = wishlistPath;
});

        const cartNav = document.getElementById("cart-nav");

cartNav.addEventListener("click", () => {
    const cartPath = window.location.pathname.includes("/pages/")
        ? "cart.html"
        : "pages/cart.html";

    window.location.href = cartPath;
})

const accountNav = document.getElementById("account-nav");

accountNav.addEventListener("click", () => {
    const accountPath = window.location.pathname.includes("/pages/")
        ? "account.html"
        : "pages/account.html";

    window.location.href = accountPath;
});

const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
const cartCount = document.getElementById("cart-count");

if (cartCount) {
    cartCount.innerText = `Cart (${cart.length})`;
}
        document.dispatchEvent(new Event("navbarLoaded"));
    })
    .catch(error => {
        console.error("Navbar error:", error);
    });