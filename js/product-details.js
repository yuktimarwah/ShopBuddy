const params = new URLSearchParams(window.location.search);

const productId = params.get("id");

const product = products.find(product => product.id == productId);

const productDetails = document.querySelector(".product-details");

let specifications = "";

function getWhyConsiderPoints(product) {

    const points = [];

    if (product.category === "Mobile") {
        if (product.ram)
            points.push(`${product.ram} RAM for smooth multitasking`);

        if (product.storage)
            points.push(`${product.storage} storage`);

        if (product.camera)
            points.push(`${product.camera} camera`);

        if (product.battery)
            points.push(`${product.battery} battery`);
    }

    else if (product.category === "Tablet") {
        if (product.ram)
            points.push(`${product.ram} RAM for smooth performance`);

        if (product.storage)
            points.push(`${product.storage} storage`);

        if (product.battery)
            points.push(`${product.battery} battery`);

        if (product.display)
            points.push(`${product.display} display`);
    }

    else if (product.category === "Smart Watch") {
        if (product.display)
            points.push(`${product.display} display`);

        if (product.battery)
            points.push(`${product.battery} battery`);

        if (product.bluetoothCalling === "Yes")
            points.push("Bluetooth calling support");

        if (product.warranty)
            points.push("Reliable warranty support");
    }

    else if (product.category === "Air Conditioner") {
        if (product.inverter === "Yes")
            points.push("Energy efficient inverter technology");

        if (product.ton)
            points.push(`Suitable for ${product.ton} cooling needs`);

        if (product.starRating)
            points.push(`${product.starRating} energy rating`);

        if (product.warranty)
            points.push("Reliable warranty support");
    }

    else if (product.category === "Refrigerator") {
        if (product.capacity)
            points.push(`${product.capacity} storage capacity`);

        if (product.inverter === "Yes")
            points.push("Energy efficient inverter technology");

        if (product.starRating)
            points.push(`${product.starRating} energy rating`);

        if (product.warranty)
            points.push("Reliable warranty support");
    }

    else if (product.category === "Washing Machine") {
        if (product.capacity)
            points.push(`${product.capacity} washing capacity`);

        if (product.inverter === "Yes")
            points.push("Energy efficient inverter technology");

        if (product.starRating)
            points.push(`${product.starRating} energy rating`);

        if (product.warranty)
            points.push("Reliable warranty support");
    }

    else if (product.category === "Microwave") {
        if (product.capacity)
            points.push(`${product.capacity} capacity`);

        if (product.warranty)
            points.push("Reliable warranty support");
    }

    return points.slice(0, 4);
}

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
else if (product.category === "Tablet") {

    specifications = `
        <p>RAM: ${product.ram}</p>
        <p>Storage: ${product.storage}</p>
        <p>Processor: ${product.processor}</p>
        <p>Camera: ${product.camera}</p>
        <p>Battery: ${product.battery}</p>
        <p>Display: ${product.display}</p>
    `;

} else if (product.category === "Smart Watch") {

    specifications = `
        <p>Battery: ${product.battery}</p>
        <p>Display: ${product.display}</p>
        <p>Bluetooth Calling: ${product.bluetoothCalling}</p>
        <p>Warranty: ${product.warranty}</p>
    `;

} else if (product.category === "Refrigerator") {

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
    <div class="product-image-section">
        <img src="${product.image}" alt="${product.name}">
    </div>

    <div class="product-info">

        <p class="product-brand">${product.brand}</p>

        <h2>${product.name}</h2>

        <div class="rating-row">
            <span class="rating">${product.rating} ★</span>
            <span class="reviews">${product.reviews} Reviews</span>
        </div>

        <div class="price-section">
            <span class="product-price">₹${product.price.toLocaleString("en-IN")}</span>
            
            ${
                product.discount > 0
                ? `<span class="discount">${product.discount}% OFF</span>`
                : ``
            }
        </div>

        <p class="tax-info">Inclusive of all taxes</p>

        <div class="product-actions">
            <button class="add-cart" data-id="${product.id}">Add to Cart</button>
            <button class="compare">Compare</button>
        </div>

        <button class="why-consider-btn">Why consider this?</button>

    </div>

    <div class="specifications">
    <h3>Key Specifications</h3>
    ${specifications}
</div>
`;

const compareButton = productDetails.querySelector(".compare");

compareButton.addEventListener("click", () => {

    openCompareDialog(product.id);

});

const whyButton = productDetails.querySelector(".why-consider-btn");
const whyOverlay = document.getElementById("why-overlay");
const closeWhy = document.getElementById("close-why");
const whyPoints = document.getElementById("why-points");

whyButton.addEventListener("click", () => {

    const points = getWhyConsiderPoints(product);

    whyPoints.innerHTML = points
        .map(point => `<li>${point}</li>`)
        .join("");

    whyOverlay.style.display = "flex";
});

closeWhy.addEventListener("click", () => {
    whyOverlay.style.display = "none";
});

whyOverlay.addEventListener("click", (event) => {
    if (event.target === whyOverlay) {
        whyOverlay.style.display = "none";
    }
});
