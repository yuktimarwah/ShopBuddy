// Home Appliances Dialog

const applianceCard = document.getElementById("home-appliances-card");
const applianceOverlay = document.getElementById("appliance-overlay");
const closeAppliance = document.getElementById("close-appliance");
const applianceOptions = document.querySelectorAll(".appliance-option");

if (applianceCard) {

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

}