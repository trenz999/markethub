// menu button toggle
let menuBtn = document.getElementById("menu-btn");

// nav menu toggle
let navMenu = document.getElementById("nav-link");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}


// cart variables
let cartCount = 0;
let cartTotal = 0;

let cartCountElement = document.getElementById("cart-count");


// product array
let products = [
    {
        id: 1,
        name: "Classic Sneakers",
        category: "Fashion",
        price: 45000
    },

    {
        id: 2,
        name: "Smart Watch",
        category: "Electronics",
        price: 65000
    },

    {
        id: 3,
        name: "Leather Bag",
        category: "Fashion",
        price: 30000
    },

    {
        id: 4,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 55000
    }
];


// add product to cart
function addToCart(productId) {

    if (productId === undefined) {
        productId = 1;
    }

    let product = products.find(function (item) {
        return item.id === productId;
    });

    // if the product doesn't exist
    if (!product) {
        console.log("Product not found");
        return;
    }

    // increase cart count
    cartCount++;

    // add product price to cart total
    cartTotal = cartTotal + product.price;

    // update cart
    updateCart();

    // save cart
    saveCart();

    alert(product.name + " has been added");

    console.log("Product added:", product.name);
    console.log("Cart items:", cartCount);
    console.log("Cart total:", cartTotal);
}


// update cart
function updateCart() {

    if (!cartCountElement) {
        return;
    }

    cartCountElement.textContent = cartCount;
}


// view cart
function viewCart() {

    if (cartCount === 0) {
        alert("Your cart is empty.");
        return;
    }

    alert(
        "You have " +
        cartCount +
        " item(s) in the cart.\n\n" +
        "Total: ₦" +
        cartTotal.toLocaleString()
    );
}


// clear cart
function clearCart() {

    cartCount = 0;
    cartTotal = 0;

    updateCart();
    saveCart();

    alert("Your cart has been cleared.");
}


// save cart to local storage
function saveCart() {

    localStorage.setItem(
        "cartCount",
        cartCount
    );

    localStorage.setItem(
        "cartTotal",
        cartTotal
    );

    console.log("Cart Saved.");
}

