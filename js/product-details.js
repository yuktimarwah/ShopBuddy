const params = new URLSearchParams(window.location.search);

const productId = params.get("id");

const product = products.find(product => product.id == productId);

const productDetails = document.querySelector(".product-details");

let specifications = "";

    if (product.category === "Mobile") {

    specifications = `
        <p>RAM: ${product.ram}</p>
        <p>Storage: ${product.storage}</p>
        <p>Processor: ${product.processor}</p>
        <p>Camera: ${product.camera}</p>
        <p>Battery: ${product.battery}</p>
        <p>Display: ${product.display}</p>
    `;
    }
    else if (product.category === "Laptop") {

    specifications = `
        <p>RAM: ${product.ram}</p>
        <p>Storage: ${product.storage}</p>
        <p>Processor: ${product.processor}</p>
        <p>Battery: ${product.battery}</p>
        <p>Display: ${product.display}</p>
    `;

} else if (product.category === "Air Conditioner") {

    specifications = `
        <p>Star Rating: ${product.starRating}</p>
        <p>Inverter: ${product.inverter}</p>
        <p>Capacity: ${product.ton}</p>
        <p>Warranty: ${product.warranty}</p>
    `;

}
else if (product.category === "tablet") {

    specifications = `
        <p>RAM: ${product.ram}</p>
        <p>Storage: ${product.storage}</p>
        <p>Processor: ${product.processor}</p>
        <p>Camera: ${product.camera}</p>
        <p>Battery: ${product.battery}</p>
        <p>Display: ${product.display}</p>
    `;

} else if (product.category === "smart watch") {

    specifications = `
        <p>Battery: ${product.battery}</p>
        <p>Display: ${product.display}</p>
        <p>Bluetooth Calling: ${product.bluetoothCalling}</p>
        <p>Warranty: ${product.warranty}</p>
    `;

} else if (product.category === "refrigerator") {

    specifications = `
        <p>Capacity: ${product.capacity}</p>
        <p>Inverter: ${product.inverter}</p>
        <p>Star Rating: ${product.starRating}</p>
        <p>Warranty: ${product.warranty}</p>
    `;

}
else if (product.category === "Washing Machine") {

    specifications = `
        <p>Capacity: ${product.capacity}</p>
        <p>Inverter: ${product.inverter}</p>
        <p>Star Rating: ${product.starRating}</p>
        <p>Warranty: ${product.warranty}</p>
    `;

} else if (product.category === "Microwave") {

    specifications = `
        <p>Capacity: ${product.capacity}</p>
        <p>Warranty: ${product.warranty}</p>
    `;
}

productDetails.innerHTML = `
    <img src="${product.image}" alt="${product.name}">

    <h2>${product.name}</h2>

    <p>${product.brand}</p>

    <p>₹${product.price}</p>
    ${product.discount > 0 ? `<p>Discount: ${product.discount}%</p>` : ``}

    <p>${product.rating}</p>

    <p>${product.reviews}</p>

    <div class="specifications">
    ${specifications}
    </div>

    <div class="product-actions">
    <button class="add-cart">Add to Cart</button>
    <button class="compare">Compare</button>
</div>
`;