const params = new URLSearchParams(window.location.search);

const searchTerm = params.get("search") || "";

const filteredProducts = products.filter(product => {

    return (
        product.name.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.tags.join(" ").toLowerCase().includes(searchTerm)
    );

});

const pageTitle = document.querySelector("#page-title");
const resultCount = document.querySelector("#result-count");

if (filteredProducts.length > 0) {

    pageTitle.innerText = `Results for "${searchTerm}"`;

    resultCount.innerText = `${filteredProducts.length} products found`;

} else {

    pageTitle.innerText = `No results found for "${searchTerm}"`;

    resultCount.innerText = `Try searching with another keyword.`;

}

const productGrid = document.querySelector('.product-grid');

filteredProducts.forEach(product => {
    const card = `
    <div class="product-card" data-id="${product.id}">
    <img src="${product.image}" alt="${product.name}">
    <p class="brand">${product.brand}</p>
    <h3 class="name">${product.name}</h3>
    <p class="specs">${product.ram} | ${product.storage}</p>
    <p class="price">₹${product.price}</p>
    <div class="buttons">
    <button class="add-cart">Add to Cart</button>
    <button class="compare">
        Compare
    </button>
    </div>

    </div>
    `;
    productGrid.innerHTML += card;
})

const productCards = document.querySelectorAll(".product-card");

productCards.forEach(card => {

    card.addEventListener("click", () => {
        const productId = card.dataset.id;

        window.location.href = `product-details.html?id=${productId}`;
    });

    const addCartButton = card.querySelector(".add-cart");

    addCartButton.addEventListener("click", (event) => {
        event.stopPropagation();
    });

});