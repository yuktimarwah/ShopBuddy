const productId1 = localStorage.getItem("compareProduct1");
const productId2 = localStorage.getItem("compareProduct2");



const product1 = products.find(product => product.id == productId1);
const product2 = products.find(product => product.id == productId2);


const specificationFields = [
    "ram",
    "storage",
    "processor",
    "camera",
    "battery",
    "display",
    "bluetoothCalling",
    "warranty",
    "capacity",
    "starRating",
    "inverter",
    "ton"
];

const specifications = specificationFields.filter(field => {
    return product1[field] || product2[field];
});

let specificationRows = "";

specifications.forEach(field => {

    const product1Value = product1[field] || "—";
    const product2Value = product2[field] || "—";

    const label = field
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, letter => letter.toUpperCase());

    specificationRows += `
        <div class="comparison-row">
            <div>${label}</div>
            <div>${product1Value}</div>
            <div>${product2Value}</div>
        </div>
    `;
});

const comparisonContainer = document.getElementById("comparison-container");

comparisonContainer.innerHTML = `
    <div class="comparison-table">

        <div class="comparison-row comparison-heading">
            <div>Specification</div>
            <div>
                <img src="${product1.image}" alt="${product1.name}">
                <h2>${product1.name}</h2>
            </div>
            <div>
                <img src="${product2.image}" alt="${product2.name}">
                <h2>${product2.name}</h2>
            </div>
        </div>

        <div class="comparison-row">
            <div>Brand</div>
            <div>${product1.brand}</div>
            <div>${product2.brand}</div>
        </div>

        <div class="comparison-row">
            <div>Price</div>
            <div>₹${product1.price}</div>
            <div>₹${product2.price}</div>
        </div>

        <div class="comparison-row">
            <div>Rating</div>
            <div>${product1.rating}</div>
            <div>${product2.rating}</div>
        </div>

        <div class="comparison-row">
            <div>Reviews</div>
            <div>${product1.reviews}</div>
            <div>${product2.reviews}</div>
        </div>

        <div class="comparison-row">
            <div>Discount</div>
            <div>${product1.discount}%</div>
            <div>${product2.discount}%</div>
        </div>
        ${specificationRows}
    </div>
`;