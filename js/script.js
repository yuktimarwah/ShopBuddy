const cartCount = document.getElementById("cart-count");
const addButtons = document.querySelectorAll(".add-cart");

let count = localStorage.getItem("cart") || 0;
cartCount.innerText = `Cart (${count})`;
addButtons.forEach(button => {
    button.addEventListener("click",() => {
        count++;
        cartCount.innerText = `Cart (${count})`;
        localStorage.setItem("cart", count);
    });
});

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector(".search-btn");

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === "") {
    alert("Please enter a product name.");
    return;
}

window.location.href = `pages/products.html?search=${searchTerm}`;
});







