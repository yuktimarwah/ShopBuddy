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