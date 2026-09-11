document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.querySelector("#search-input");
    const searchButton = document.querySelector(".search-btn");

    searchButton.addEventListener("click", () => {

        const searchTerm = searchInput.value.trim().toLowerCase();

        if (searchTerm === "") {
            alert("Please enter a product name.");
            return;
        }

        window.location.href =
            `pages/products.html?search=${searchTerm}`;
    });


    // Home Appliances Dialog

    const applianceCard = document.getElementById("home-appliances-card");
    const applianceOverlay = document.getElementById("appliance-overlay");
    const closeAppliance = document.getElementById("close-appliance");
    const applianceOptions = document.querySelectorAll(".appliance-option");

    applianceCard.addEventListener("click", () => {
        applianceOverlay.style.display = "flex";
    });

    closeAppliance.addEventListener("click", () => {
        applianceOverlay.style.display = "none";
    });

    applianceOverlay.addEventListener("click", (event) => {
        if (event.target === applianceOverlay) {
            applianceOverlay.style.display = "none";
        }
    });

    applianceOptions.forEach(option => {

        option.addEventListener("click", () => {

            const category = option.dataset.category;

            window.location.href =
                `pages/products.html?category=${encodeURIComponent(category)}`;

        });

    });

});