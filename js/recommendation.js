const category = document.getElementById("category");
const categoryFields = document.getElementById("category-fields");

category.addEventListener("change", () => {
    console.log("Selected category:", category.value);

    const selectedCategory = category.value;

    categoryFields.innerHTML = "";

    if (selectedCategory === "Mobile") {

        categoryFields.innerHTML = `
            <label>Budget</label>
            <input type="number" id="budget" placeholder="Enter your budget">

            <label>RAM</label>
            <select id="ram">
                <option value="">Any</option>
                <option value="4 GB">4 GB</option>
                <option value="6 GB">6 GB</option>
                <option value="8 GB">8 GB</option>
                <option value="12 GB">12 GB</option>
                <option value="16 GB">16 GB</option>
            </select>

            <label>Storage</label>
            <select id="storage">
                <option value="">Any</option>
                <option value="64 GB">64 GB</option>
                <option value="128 GB">128 GB</option>
                <option value="256 GB">256 GB</option>
                <option value="512 GB">512 GB</option>
            </select>

            <label>Priority</label>
            <select id="priority">
                <option value="">Any</option>
                <option value="Camera">Camera</option>
                <option value="Performance">Performance</option>
                <option value="Battery">Battery</option>
            </select>
        `;

    }

    else if (selectedCategory === "Laptop") {

        categoryFields.innerHTML = `
            <label>Budget</label>
            <input type="number" id="budget" placeholder="Enter your budget">

            <label>RAM</label>
            <select id="ram">
                <option value="">Any</option>
                <option value="8 GB">8 GB</option>
                <option value="16 GB">16 GB</option>
                <option value="32 GB">32 GB</option>
            </select>

            <label>Storage</label>
            <select id="storage">
                <option value="">Any</option>
                <option value="256 GB">256 GB</option>
                <option value="512 GB">512 GB</option>
                <option value="1 TB">1 TB</option>
            </select>

            <label>Priority</label>
            <select id="priority">
                <option value="">Any</option>
                <option value="Performance">Performance</option>
                <option value="Battery">Battery</option>
                <option value="Display">Display</option>
            </select>
        `;

    }

    else if (selectedCategory === "Air Conditioner") {

        categoryFields.innerHTML = `
            <label>Budget</label>
            <input type="number" id="budget" placeholder="Enter your budget">

            <label>Capacity</label>
            <select id="ton">
                <option value="">Any</option>
                <option value="1 Ton">1 Ton</option>
                <option value="1.5 Ton">1.5 Ton</option>
                <option value="2 Ton">2 Ton</option>
            </select>

            <label>Inverter</label>
            <select id="inverter">
                <option value="">Any</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>

            <label>Star Rating</label>
            <select id="starRating">
                <option value="">Any</option>
                <option value="3 Star">3 Star</option>
                <option value="4 Star">4 Star</option>
                <option value="5 Star">5 Star</option>
            </select>

            <label>Priority</label>

<select id="priority">
    <option value="">Any</option>
    <option value="Energy Saving">Energy Saving</option>
    <option value="Cooling">Cooling</option>
    <option value="Budget">Budget</option>
    <option value="Premium Features">Premium Features</option>
</select>
        `;

    }

    else if (selectedCategory === "tablet") {

        categoryFields.innerHTML = `
            <label>Budget</label>
            <input type="number" id="budget" placeholder="Enter your budget">

            <label>RAM</label>
            <select id="ram">
                <option value="">Any</option>
                <option value="4 GB">4 GB</option>
                <option value="6 GB">6 GB</option>
                <option value="8 GB">8 GB</option>
                <option value="12 GB">12 GB</option>
            </select>

            <label>Storage</label>
            <select id="storage">
                <option value="">Any</option>
                <option value="64 GB">64 GB</option>
                <option value="128 GB">128 GB</option>
                <option value="256 GB">256 GB</option>
                <option value="512 GB">512 GB</option>
            </select>

            <label>Priority</label>
            <select id="priority">
                <option value="">Any</option>
                <option value="Display">Display</option>
                <option value="Performance">Performance</option>
                <option value="Battery">Battery</option>
            </select>
        `;

    }

    else if (selectedCategory === "smart watch") {

        categoryFields.innerHTML = `
            <label>Budget</label>
            <input type="number" id="budget" placeholder="Enter your budget">

            <label>Display</label>
            <select id="display">
                <option value="">Any</option>
                <option value="AMOLED">AMOLED</option>
                <option value="LCD">LCD</option>
            </select>

            <label>Bluetooth Calling</label>
            <select id="bluetoothCalling">
                <option value="">Any</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>

            <label>Priority</label>
            <select id="priority">
                <option value="">Any</option>
                <option value="Battery">Battery</option>
                <option value="Display">Display</option>
                <option value="Calling">Calling</option>
            </select>
        `;

    }

    else if (selectedCategory === "refrigerator") {

        categoryFields.innerHTML = `
            <label>Budget</label>
            <input type="number" id="budget" placeholder="Enter your budget">

            <label>Capacity</label>
            <input type="text" id="capacity" placeholder="Example: 250 L">

            <label>Inverter</label>
            <select id="inverter">
                <option value="">Any</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>

            <label>Star Rating</label>
            <select id="starRating">
                <option value="">Any</option>
                <option value="2 Star">2 Star</option>
                <option value="3 Star">3 Star</option>
                <option value="4 Star">4 Star</option>
                <option value="5 Star">5 Star</option>
            </select>
        `;

    }

    else if (selectedCategory === "washing machine") {

        categoryFields.innerHTML = `
            <label>Budget</label>
            <input type="number" id="budget" placeholder="Enter your budget">

            <label>Capacity</label>
            <input type="text" id="capacity" placeholder="Example: 7 kg">

            <label>Inverter</label>
            <select id="inverter">
                <option value="">Any</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>

            <label>Star Rating</label>
            <select id="starRating">
                <option value="">Any</option>
                <option value="3 Star">3 Star</option>
                <option value="4 Star">4 Star</option>
                <option value="5 Star">5 Star</option>
            </select>
        `;

    }

    else if (selectedCategory === "microwave") {

        categoryFields.innerHTML = `
            <label>Budget</label>
            <input type="number" id="budget" placeholder="Enter your budget">

            <label>Capacity</label>
            <input type="text" id="capacity" placeholder="Example: 25 L">

            <label>Priority</label>
            <select id="priority">
                <option value="">Any</option>
                <option value="Capacity">Capacity</option>
                <option value="Features">Features</option>
            </select>
        `;
    }

});




const recommendButton = document.getElementById("recommend-button");

recommendButton.addEventListener("click", () => {

    const selectedCategory = category.value;

    if (!selectedCategory) {
        alert("Please select a category first.");
        return;
    }

  if (selectedCategory !== "Mobile") {
    alert("Is category ki recommendations abhi implement kar rahe hain.");
    return;
}

    const budget = Number(document.getElementById("budget").value);
    const ram = document.getElementById("ram").value;
    const storage = document.getElementById("storage").value;
    const priority = document.getElementById("priority").value;

    if (!budget) {
        alert("Please enter your budget.");
        return;
    }

   const categoryProducts = products.filter(product => {

    if (product.category !== selectedCategory) {
        return false;
    }

    if (selectedCategory === "Mobile") {

        if (budget && product.price > budget) {
            return false;
        }

    }

    return true;
});

console.log("Mobile products:", categoryProducts);
console.log(
    "All mobile prices:",
    products
        .filter(product => product.category === "Mobile")
        .map(product => `${product.name} - ₹${product.price}`)
);


const scoredProducts = categoryProducts.map(product => {

        let score = 0;

        // Budget
        if (product.price <= budget) {
            score += 3;
        }

        // RAM
        if (ram && product.ram === ram) {
            score += 2;
        }

        // Storage
        if (storage && product.storage === storage) {
            score += 2;
        }

        // Priority
        if (selectedCategory === "Mobile") {

    if (priority === "Camera" && product.camera) {
        score += 2;
    }

    if (priority === "Performance" && product.processor) {
        score += 2;
    }

    if (priority === "Battery" && product.battery) {
        score += 2;
    }

}



        return {
            product,
            score
        };

    });

    scoredProducts.sort((a, b) => {

        if (b.score !== a.score) {
            return b.score - a.score;
        }

        return b.product.rating - a.product.rating;

    });

    const recommendations = scoredProducts.slice(0, 3);

    const resultsContainer = document.getElementById("recommendation-results");

resultsContainer.innerHTML = "";

if (recommendations.length === 0) {

    resultsContainer.innerHTML = `
        <h2>No matching products found.</h2>
        <p>Try adjusting your requirements.</p>
    `;

    return;
}

recommendations.forEach((item, index) => {

    const product = item.product;

    const card = document.createElement("div");

    card.classList.add("recommendation-card");

    card.innerHTML = `
        ${index === 0 ? `<span class="best-match">⭐ Best Match</span>` : ""}

        <img src="../${product.image}" alt="${product.name}">

        <div class="recommendation-info">

            <p class="brand">${product.brand}</p>

            <h2>${product.name}</h2>

            <p class="price">₹${product.price}</p>

            <p>⭐ ${product.rating} (${product.reviews} reviews)</p>

            <p class="match-score">
                Match Score: ${item.score}
            </p>

            <button class="view-product"
                onclick="window.location.href='product-details.html?id=${product.id}'">
                View Details
            </button>

        </div>
    `;

    resultsContainer.appendChild(card);

});
});