// ==============================
// MENU BUTTON TOGGLE
// ==============================

let menuBtn = document.getElementById("menu-btn");

let navMenu = document.getElementById("nav-link");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });

}


// ==============================
// CART VARIABLES
// ==============================

let cartCount = 0;

let cartTotal = 0;

let cartCountElement = document.getElementById("cart-count");


// ==============================
// PRODUCT ARRAY
// ==============================

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


// ==============================
// ADD PRODUCT TO CART
// ==============================

function addToCart(productId) {

    // Find the product

    let product = products.find(function (item) {

        return item.id === productId;

    });


    // Check if product exists

    if (!product) {

        console.log("Product not found");

        return;

    }


    // Increase cart count

    cartCount++;


    // Add product price

    cartTotal = cartTotal + product.price;


    // Update cart display

    updateCart();


    // Save cart

    saveCart();


    // Show message

    alert(product.name + " has been added to your cart.");


    console.log("Product added:", product.name);

    console.log("Cart items:", cartCount);

    console.log("Cart total:", cartTotal);

}


// ==============================
// UPDATE CART
// ==============================

function updateCart() {

    if (cartCountElement) {

        cartCountElement.textContent = cartCount;

    }

    checkDelivery();

}


// ==============================
// VIEW CART
// ==============================

function viewCart() {

    if (cartCount === 0) {

        alert("Your cart is empty.");

        return;

    }


    alert(

        "YOUR CART\n\n" +

        "Items: " +

        cartCount +

        "\n\nTotal: ₦" +

        cartTotal.toLocaleString()

    );

}


// ==============================
// CART LINK
// ==============================

let cartLink = document.querySelector(
    '.nav-links a[href="#cart"]'
);


if (cartLink) {

    cartLink.addEventListener("click", function(event) {

        event.preventDefault();

        viewCart();

    });

}


// ==============================
// CHECKOUT
// ==============================

function checkout() {

    if (cartCount === 0) {

        alert(
            "Your cart is empty. Add a product to cart."
        );

        return;

    }


    alert(

        "CHECKOUT\n\n" +

        "Items: " +

        cartCount +

        "\nTotal: ₦" +

        cartTotal.toLocaleString()

    );

}


// ==============================
// CHECKOUT BUTTON
// ==============================

let checkoutButton =
    document.querySelector(".checkout-btn");


if (checkoutButton) {

    checkoutButton.addEventListener(
        "click",
        function() {

            checkout();

        }
    );

}


// ==============================
// CLEAR CART
// ==============================

function clearCart() {

    cartCount = 0;

    cartTotal = 0;


    updateCart();

    saveCart();


    alert("Your cart has been cleared.");

}


// ==============================
// CLEAR CART BUTTON
// ==============================

let clearCartButton =
    document.querySelector(".clear-cart-btn");


if (clearCartButton) {

    clearCartButton.addEventListener(
        "click",
        function() {

            clearCart();

        }
    );

}


// ==============================
// SAVE CART TO LOCAL STORAGE
// ==============================

function saveCart() {

    localStorage.setItem(
        "cartCount",
        cartCount
    );


    localStorage.setItem(
        "cartTotal",
        cartTotal
    );


    console.log("Cart saved.");

}


// ==============================
// LOAD CART FROM LOCAL STORAGE
// ==============================

function loadCart() {

    let savedCartCount =
        localStorage.getItem("cartCount");


    let savedCartTotal =
        localStorage.getItem("cartTotal");


    if (savedCartCount !== null) {

        cartCount = Number(savedCartCount);

    }


    if (savedCartTotal !== null) {

        cartTotal = Number(savedCartTotal);

    }


    updateCart();


    console.log(
        "Cart loaded:",
        cartCount
    );

}


// ==============================
// CATEGORY CARDS
// ==============================

let categoryCards =
    document.querySelectorAll(".category-card");


categoryCards.forEach(function(card) {

    let heading =
        card.querySelector("h3");


    if (heading) {

        let categoryName =
            heading.textContent;


        card.addEventListener(
            "click",
            function() {

                console.log(
                    "Selected category:",
                    categoryName
                );


                alert(
                    "You selected " +
                    categoryName
                );

            }
        );

    }

});


// ==============================
// PRODUCT CARDS
// ==============================

let productCards =
    document.querySelectorAll(".product-card");


productCards.forEach(function(card, index) {

    let button =
        card.querySelector(".cart-btn");


    if (button) {

        // Remove old inline onclick

        button.removeAttribute("onclick");


        button.addEventListener(
            "click",
            function() {

                let productId =
                    index + 1;


                addToCart(productId);

            }
        );

    }

});


// ==============================
// PRODUCT INFORMATION
// ==============================

productCards.forEach(function(card) {

    let productNameElement =
        card.querySelector("h3");


    let productPriceElement =
        card.querySelector("strong");


    if (
        productNameElement &&
        productPriceElement
    ) {

        let productName =
            productNameElement.textContent;


        let productPrice =
            productPriceElement.textContent;


        console.log(
            productName +
            " - " +
            productPrice
        );

    }

});


// ==============================
// NAVIGATION LINKS
// ==============================

let navLinks =
    document.querySelectorAll(".nav-links a");


navLinks.forEach(function(link) {

    link.addEventListener(
        "click",
        function() {

            if (navMenu) {

                navMenu.classList.remove(
                    "active"
                );

            }

        }
    );

});


// ==============================
// SHOP NOW BUTTON
// ==============================

let shopNowButton =
    document.querySelector(".primary-btn");


if (shopNowButton) {

    shopNowButton.addEventListener(
        "click",
        function() {

            console.log(
                "Customer clicked Shop Now"
            );


            // Scroll to products

            let productsSection =
                document.getElementById(
                    "products"
                );


            if (productsSection) {

                productsSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


// ==============================
// DELIVERY CHECK
// ==============================

function checkDelivery() {

    if (cartTotal >= 50000) {

        console.log(
            "You qualify for FREE DELIVERY!"
        );

    } else {

        console.log(
            "Delivery fee applies."
        );

    }

}


// ==============================
// KEYBOARD EVENT
// ==============================

document.addEventListener(
    "keydown",
    function(event) {

        // Close menu when pressing Space

        if (event.key === " ") {

            if (navMenu) {

                navMenu.classList.remove(
                    "active"
                );

            }

        }

    }
);


// ==============================
// WELCOME MESSAGE
// ==============================

console.log(
    "Welcome to MarketHub!"
);


// ==============================
// LOAD SAVED CART
// ==============================

loadCart();