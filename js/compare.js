const compareNav = document.getElementById("compare-nav");
const compareOverlay = document.getElementById("compare-overlay");
const closeCompare = document.getElementById("close-compare");

compareNav.addEventListener("click", () => {
    compareOverlay.style.display = "flex";
});

closeCompare.addEventListener("click", () => {
    compareOverlay.style.display = "none";
});


const compareInput1 = document.getElementById("compare-product-1");
const compareInput2 = document.getElementById("compare-product-2");

const suggestions1 = document.getElementById("suggestions-1");
const suggestions2 = document.getElementById("suggestions-2");

compareInput1.addEventListener("input", () => {

     
    const searchTerm = compareInput1.value.trim().toLowerCase();

    suggestions1.innerHTML = "";

    if (searchTerm === "") {
        return;
    }

    const matchingProducts = products.filter(product => {
        return (
            product.name.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm)
        );
    });

    matchingProducts.forEach(product => {

    const suggestion = document.createElement("div");

    suggestion.classList.add("compare-suggestion");

    suggestion.innerText = `${product.name} - ${product.brand}`;

    suggestion.addEventListener("click", () => {

        compareInput1.value = product.name;

        compareInput1.dataset.productId = product.id;

        suggestions1.innerHTML = "";

    });

    suggestions1.appendChild(suggestion);
});

});

compareInput2.addEventListener("input", () => {

    const searchTerm = compareInput2.value.trim().toLowerCase();

    suggestions2.innerHTML = "";

    if (searchTerm === "") {
        return;
    }

    const matchingProducts = products.filter(product => {
        return (
            product.name.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm)
        );
    });

    matchingProducts.forEach(product => {

        const suggestion = document.createElement("div");

        suggestion.classList.add("compare-suggestion");

        suggestion.innerText = `${product.name} - ${product.brand}`;

        suggestion.addEventListener("click", () => {

            compareInput2.value = product.name;

            compareInput2.dataset.productId = product.id;

            suggestions2.innerHTML = "";

        });

        suggestions2.appendChild(suggestion);
    });

});

const compareSubmit = document.getElementById("compare-submit");
compareSubmit.addEventListener("click", () => {

    const productId1 = compareInput1.dataset.productId;
    const productId2 = compareInput2.dataset.productId;

    if (!productId1 || !productId2) {
        alert("Please select two products to compare.");
        return;
    }

    if (productId1 === productId2) {
        alert("Please select two different products.");
        return;
    }

    localStorage.setItem("compareProduct1", productId1);
    localStorage.setItem("compareProduct2", productId2);

window.location.href = window.comparePagePath;
});