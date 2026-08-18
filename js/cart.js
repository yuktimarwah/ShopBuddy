const cartCount = document.getElementById("cart-count");
const addButtons = document.querySelectorAll(".add-cart");

let count = localStorage.getItem("cart") || 0;

if (cartCount) {
    cartCount.innerText = `Cart (${count})`;
}

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        count++;

        if (cartCount) {
            cartCount.innerText = `Cart (${count})`;
        }

        localStorage.setItem("cart", count);
    });
});