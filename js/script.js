

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







