const category = document.getElementById("category");
const categoryFields = document.getElementById("category-fields");

category.addEventListener("change", () => {
    const selectedCategory = category.value;
    categoryFields.innerHTML = "";

    // ================= MOBILE =================

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


    // ================= AIR CONDITIONER =================

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


    // ================= TABLET =================

    else if (selectedCategory === "Tablet") {

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


    // ================= SMART WATCH =================

    else if (selectedCategory === "Smart Watch") {

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


    // ================= REFRIGERATOR =================

    else if (selectedCategory === "Refrigerator") {

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

            <label>Priority</label>
            <select id="priority">
                <option value="">Any</option>
                <option value="Energy Saving">Energy Saving</option>
                <option value="Capacity">Capacity</option>
            </select>
        `;
    }


    // ================= WASHING MACHINE =================

    else if (selectedCategory === "Washing Machine") {

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

            <label>Priority</label>
            <select id="priority">
                <option value="">Any</option>
                <option value="Energy Saving">Energy Saving</option>
                <option value="Capacity">Capacity</option>
            </select>
        `;
    }


    // ================= MICROWAVE =================

    else if (selectedCategory === "Microwave") {

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

function getMaxScore(category, fields) {

    let maxScore = 3;

    if (category === "Mobile" || category === "Tablet") {
        if (fields.ram) maxScore += 3;
        if (fields.storage) maxScore += 3;
        if (fields.priority) maxScore += 2;
    }

    else if (category === "Air Conditioner") {
        if (fields.ton) maxScore += 3;
        if (fields.inverter) maxScore += 3;
        if (fields.starRating) maxScore += 3;

        if (fields.priority) {
            maxScore += fields.priority === "Budget" ? 3 : 2;
        }
    }

    else if (category === "Smart Watch") {
        if (fields.display) maxScore += 3;
        if (fields.bluetoothCalling) maxScore += 3;
        if (fields.priority) maxScore += 2;
    }

    else if (
        category === "Refrigerator" ||
        category === "Washing Machine"
    ) {
        if (fields.capacity) maxScore += 3;
        if (fields.inverter) maxScore += 3;
        if (fields.starRating) maxScore += 3;
        if (fields.priority) maxScore += 2;
    }

    else if (category === "Microwave") {
        if (fields.capacity) maxScore += 3;
        if (fields.priority) maxScore += 2;
    }

    return maxScore;
}

recommendButton.addEventListener("click", () => {

    const selectedCategory = category.value;

    if (!selectedCategory) {
        alert("Please select a category first.");
        return;
    }

    const budgetElement = document.getElementById("budget");

    if (!budgetElement) {
        alert("Please select a category first.");
        return;
    }

    const budget = Number(budgetElement.value);

    if (!budget) {
        alert("Please enter your budget.");
        return;
    }

    // Read only fields that exist for the selected category
    const getValue = (id) => {
        const element = document.getElementById(id);
        return element ? element.value : "";
    };

    const ram = getValue("ram");
    const storage = getValue("storage");
    const ton = getValue("ton");
    const inverter = getValue("inverter");
    const starRating = getValue("starRating");
    const display = getValue("display");
    const bluetoothCalling = getValue("bluetoothCalling");
    const capacity = getValue("capacity");
    const priority = getValue("priority");

    const fields = {
        ram,
        storage,
        ton,
        inverter,
        starRating,
        display,
        bluetoothCalling,
        capacity,
        priority
    };

    const maxScore = getMaxScore(selectedCategory, fields);


    // ================= HARD FILTER =================
    // Category + budget must match

    const categoryProducts = products.filter(product => {

        if (product.category !== selectedCategory) {
            return false;
        }

        if (product.price > budget) {
            return false;
        }

        return true;
    });


    // ================= SCORING =================

    const scoredProducts = categoryProducts.map(product => {

        // Every product here already satisfies budget
        let score = 3;


        // ================= MOBILE / TABLET RAM =================

        if (
            (selectedCategory === "Mobile" ||
                selectedCategory === "Tablet") &&
            ram &&
            product.ram
        ) {

            const userRam = parseInt(ram);
            const productRam = parseInt(product.ram);

            if (productRam === userRam) {
                score += 3;
            }
            else if (productRam > userRam) {
                score += 2;
            }
            else if (productRam >= userRam - 2) {
                score += 1;
            }
        }


        // ================= MOBILE / TABLET STORAGE =================

        if (
            (selectedCategory === "Mobile" ||
                selectedCategory === "Tablet") &&
            storage &&
            product.storage
        ) {

            const userStorage = parseInt(storage);
            const productStorage = parseInt(product.storage);

            if (productStorage === userStorage) {
                score += 3;
            }
            else if (productStorage > userStorage) {
                score += 2;
            }
            else if (productStorage >= userStorage / 2) {
                score += 1;
            }
        }


        // ================= MOBILE =================

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


        // ================= AC =================

        if (selectedCategory === "Air Conditioner") {

            // Capacity
            if (ton && product.ton === ton) {
                score += 3;
            }

            // Inverter
            if (inverter && product.inverter === inverter) {
                score += 3;
            }

            // Star Rating
            if (starRating && product.starRating === starRating) {
                score += 3;
            }


            // Priority
            if (priority === "Energy Saving") {

                if (
                    product.tags &&
                    product.tags.includes("Energy Saving")
                ) {
                    score += 2;
                }
                else if (product.starRating === "5 Star") {
                    score += 1;
                }
            }


            if (priority === "Cooling") {

                if (product.ton === ton) {
                    score += 2;
                }
            }


            if (priority === "Premium Features") {

                if (
                    product.tags &&
                    (
                        product.tags.includes("Premium") ||
                        product.tags.includes("AI")
                    )
                ) {
                    score += 2;
                }
            }


            if (priority === "Budget") {

                const cheapestPrice = Math.min(
                    ...categoryProducts.map(p => p.price)
                );

                if (product.price === cheapestPrice) {
                    score += 3;
                }
                else if (product.price <= cheapestPrice + 5000) {
                    score += 2;
                }
                else {
                    score += 1;
                }
            }
        }


        // ================= TABLET =================

        if (selectedCategory === "Tablet") {

            if (priority === "Display" && product.display) {
                score += 2;
            }

            if (priority === "Performance" && product.processor) {
                score += 2;
            }

            if (priority === "Battery" && product.battery) {
                score += 2;
            }
        }


        // ================= SMART WATCH =================

        if (selectedCategory === "Smart Watch") {

            if (
                display &&
                product.display === display
            ) {
                score += 3;
            }

            if (
                bluetoothCalling &&
                product.bluetoothCalling === bluetoothCalling
            ) {
                score += 3;
            }


            if (priority === "Battery" && product.battery) {
                score += 2;
            }

            if (priority === "Display" && product.display) {
                score += 2;
            }

            if (
                priority === "Calling" &&
                product.bluetoothCalling === "Yes"
            ) {
                score += 2;
            }
        }


        // ================= REFRIGERATOR =================

        if (selectedCategory === "Refrigerator") {

            if (
                inverter &&
                product.inverter === inverter
            ) {
                score += 3;
            }

            if (
                starRating &&
                product.starRating === starRating
            ) {
                score += 3;
            }


            if (
                capacity &&
                product.capacity
            ) {

                const userCapacity = parseInt(capacity);
                const productCapacity = parseInt(product.capacity);

                if (
                    !isNaN(userCapacity) &&
                    !isNaN(productCapacity)
                ) {

                    if (productCapacity === userCapacity) {
                        score += 3;
                    }
                    else if (productCapacity >= userCapacity) {
                        score += 2;
                    }
                    else if (productCapacity >= userCapacity * 0.8) {
                        score += 1;
                    }
                }
            }


            if (priority === "Energy Saving") {

                if (product.inverter === "Yes") {
                    score += 2;
                }

                if (product.starRating === "5 Star") {
                    score += 1;
                }
            }


            if (
                priority === "Capacity" &&
                product.capacity
            ) {
                score += 2;
            }
        }


        // ================= WASHING MACHINE =================

        if (selectedCategory === "Washing Machine") {

            if (
                inverter &&
                product.inverter === inverter
            ) {
                score += 3;
            }

            if (
                starRating &&
                product.starRating === starRating
            ) {
                score += 3;
            }


            if (
                capacity &&
                product.capacity
            ) {

                const userCapacity = parseInt(capacity);
                const productCapacity = parseInt(product.capacity);

                if (
                    !isNaN(userCapacity) &&
                    !isNaN(productCapacity)
                ) {

                    if (productCapacity === userCapacity) {
                        score += 3;
                    }
                    else if (productCapacity >= userCapacity) {
                        score += 2;
                    }
                    else if (productCapacity >= userCapacity * 0.8) {
                        score += 1;
                    }
                }
            }


            if (
                priority === "Energy Saving" &&
                product.inverter === "Yes"
            ) {
                score += 2;
            }

            if (
                priority === "Capacity" &&
                product.capacity
            ) {
                score += 2;
            }
        }


        // ================= MICROWAVE =================

        if (selectedCategory === "Microwave") {

            if (
                capacity &&
                product.capacity
            ) {

                const userCapacity = parseInt(capacity);
                const productCapacity = parseInt(product.capacity);

                if (
                    !isNaN(userCapacity) &&
                    !isNaN(productCapacity)
                ) {

                    if (productCapacity === userCapacity) {
                        score += 3;
                    }
                    else if (productCapacity >= userCapacity) {
                        score += 2;
                    }
                    else if (productCapacity >= userCapacity * 0.8) {
                        score += 1;
                    }
                }
            }


            if (
                priority === "Capacity" &&
                product.capacity
            ) {
                score += 2;
            }


            if (
                priority === "Features" &&
                product.tags &&
                product.tags.length > 0
            ) {
                score += 2;
            }
        }


        return {
            product,
            score
        };
    });


    // ================= SORT =================

    scoredProducts.sort((a, b) => {

        if (b.score !== a.score) {
            return b.score - a.score;
        }

        // Rating breaks ties
        return b.product.rating - a.product.rating;
    });


    // Top 3
    const recommendations = scoredProducts.slice(0, 3);


    // ================= DISPLAY RESULTS =================

    const resultsContainer =
        document.getElementById("recommendation-results");

    resultsContainer.innerHTML = "";


    if (recommendations.length === 0) {

        resultsContainer.innerHTML = `
            <h2>No matching products found.</h2>
            <p>Try increasing your budget or changing your requirements.</p>
        `;

        return;
    }


   recommendations.forEach((item, index) => {

    const product = item.product;

    const matchPercentage = Math.round(
        (item.score / maxScore) * 100
    );

    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("recommendation-wrapper");

    cardWrapper.innerHTML = `
        ${index === 0 ? '<span class="best-match">Best Match</span>' : ''}

        <div class="recommendation-card">

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <button class="wishlist-btn" data-id="${product.id}">
        <i class="fa-regular fa-heart"></i>
    </button>

            <div class="recommendation-info">

                <p class="brand">
                    ${product.brand}
                </p>

                <h2>
                    ${product.name}
                </h2>

                <p class="price">
                    ₹${product.price}
                </p>

                <p>
                    ⭐ ${product.rating}
                    (${product.reviews} reviews)
                </p>

                <p class="match-score">
                    ${matchPercentage}% Match
                </p>

                <button
                    class="view-product"
                    onclick="window.location.href='product-details.html?id=${product.id}'"
                >
                    View Details
                </button>

            </div>
        </div>
    `;

    resultsContainer.appendChild(cardWrapper);
    const wishlistButton = cardWrapper.querySelector(".wishlist-btn");

wishlistButton.addEventListener("click", (event) => {
    event.stopPropagation();

    const productId = wishlistButton.dataset.id;
    toggleWishlist(productId);
});
});
    });

