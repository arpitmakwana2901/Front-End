let name = document.querySelector("#productName");
let price = document.querySelector("#productPrice");
let image = document.querySelector("#productImage");
let category = document.querySelector("#productCategory");
let container = document.querySelector("#container");
let add = document.querySelector("#add");
let sortSelect = document.querySelector("#sortSelect");
let searchInput = document.querySelector("#searchInput");
let filterSelect = document.querySelector("#filterSelect");

let productArray = JSON.parse(localStorage.getItem("tododata")) || [];

function showData(products = productArray) {
    container.innerHTML = "";

    products.forEach((product, index) => {
        let card = document.createElement("div");
        
        let nameElem = document.createElement("h1");
        nameElem.innerText = product.name;

        let priceElem = document.createElement("p");
        priceElem.innerText = `Price: $${product.price}`;

        let imageElem = document.createElement("img");
        imageElem.src = product.image;

        let categoryElem = document.createElement("p");
        categoryElem.innerText = `Category: ${product.category}`;

        let edit = document.createElement("button");
        edit.textContent = "Edit";

        let del = document.createElement("button");
        del.textContent = "Delete";

        edit.addEventListener("click", () => {
            let newName = prompt("Enter new name:", product.name);
            let newPrice = prompt("Enter new price:", product.price);
            let newImage = prompt("Enter new image URL:", product.image);
            let newCategory = prompt("Enter new category:", product.category);

            if (newName && newPrice && newImage && newCategory) {
                productArray[index] = {
                    name: newName,
                    price: newPrice,
                    image: newImage,
                    category: newCategory
                };

                localStorage.setItem("tododata", JSON.stringify(productArray));
                showData();
            }
        });

        del.addEventListener("click", () => {
            productArray = productArray.filter((ele, i) => i !== index);
            localStorage.setItem("tododata", JSON.stringify(productArray));
            showData();
        });

        card.append(nameElem, priceElem, imageElem, categoryElem, edit, del);
        container.append(card);
    });
}

function sortProducts(criteria) {
    let sortedProducts = [...productArray];
    switch (criteria) {
        case "name":
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "price":
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case "category":
            sortedProducts.sort((a, b) => a.category.localeCompare(b.category));
            break;
        default:
            break;
    }
    showData(sortedProducts);
}

function searchProducts(query) {
    let searchedProducts = productArray.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );
    showData(searchedProducts);
}

function filterProducts(selectedCategory) {
    if (selectedCategory === "all") {
        showData(productArray);
    } else {
        let filteredProducts = productArray.filter(product =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );
        showData(filteredProducts);
    }
}

sortSelect.addEventListener("change", (e) => {
    sortProducts(e.target.value);
});

searchInput.addEventListener("input", (e) => {
    searchProducts(e.target.value);
});

filterSelect.addEventListener("change", (e) => {
    console.log("Filtering by:", e.target.value); // Debugging
    filterProducts(e.target.value);
});

add.addEventListener("click", () => {
    if (name.value && price.value && image.value && category.value) {
        productArray.push({
            name: name.value,
            price: price.value,
            image: image.value,
            category: category.value
        });

        localStorage.setItem("tododata", JSON.stringify(productArray));
        showData();
        
        name.value = "";
        price.value = "";
        image.value = "";
        category.value = "";
    } else {
        alert("Please fill in all fields");
    }
});

showData();