

// Product array
const products = [
    {
        image: "48.jpg",
        name: "Ceramic Dotted Bowl Set",
        price: 2500
    },
    {
        image: "20.jpg",
        name: "Modern Home Decoration",
        price: 3500
    },
    {
        image: "49.jpg",
        name: "Handmade Gabrielle Style Bag",
        price: 2000
    },
    {
        image: "22.jpg",
        name: "Coffee Cup Stand Wooden",
        price: 3000
    },
    {
        image: "50.jpg",
        name: "Handmade Love Rattle",
        price: 4500
    },
    {
        image: "51.jpg",
        name: "Handmade Wooden Toy",
        price: 4000
    },
    {
        image: "19.jpg",
        name: "Dog Bamboo Grooming Brush",
        price: 3000
    },
    {
        image: "52.jpg",
        name: "Home Garden Bowl Set",
        price: 3000
    },
    {
        image: "17.jpg",
        name: "Wicker Wooden Dolls Toy",
        price: 2000
    }
];


// Product container
const productContainer = document.getElementById("productContainer");

// Grid select
const gridSelect = document.getElementById("gridSelect");


// Function to display products
function displayProducts(grid) {

    productContainer.innerHTML = "";

    products.forEach(function(product) {

        const col = document.createElement("div");

        // Bootstrap column
        if (grid == 2) {
            col.className = "col-lg-6 col-md-6 col-sm-12 mb-4";
        }
        else if (grid == 3) {
            col.className = "col-lg-4 col-md-6 col-sm-12 mb-4";
        }
        else if (grid == 4) {
            col.className = "col-lg-3 col-md-6 col-sm-12 mb-4";
        }


        // Product HTML
        col.innerHTML = `
            <div class="product-card">

                <img src="${product.image}"
                     class="img-fluid w-100"
                     alt="${product.name}">

                <h4 class="mt-3">${product.name}</h4>

                <p class="fw-bold">${product.price}/-</p>

            </div>
        `;

        productContainer.appendChild(col);

    });
}


// Initially show 3 products per row
displayProducts(3);


// Change grid when user selects
gridSelect.addEventListener("change", function() {

    const selectedGrid = this.value;

    displayProducts(selectedGrid);

});

