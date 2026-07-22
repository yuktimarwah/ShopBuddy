const productGrid = document.querySelector('.product-grid');
products.forEach(product => {
    const card = `
    <div class="product-card">
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