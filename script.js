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

//connect cart link to javascript 
let cartLink = document.querySelector(".nav-links a [href="cart"]);
    if (cartLink) {
        cartLink.addEventListener("click", function(event){
            event.preventDefault();

            //open cart 
            viewCart();
        }
    )
    }

    //checkout
    function checkout() {
        if (checkout === 0) {
            alert(
                "your cart empty. Add a product to cart."
            );
            return;
        }
        alert(
            "checkout\n\n" + 
            "Items: " +
            cartCount +

            "\nTotal: #" +
            cartTotal.toLocaleString()
        )
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

//load cart from local storage
function loadCart() {


    let savedCartCount = localStorage.getItem("cartCount");

    let savedCartTotal = localStorage.getItem("cartTotal"); 

    if (savedCartCount !== null){
        cartCount = Number(savedCartCount);
    }

    if (savedCartTotal !== null) {
        cartTotal = Number(savedCartTotal);
    }

    updateCart(); 

    console.log("cart loaded:", 
        cartCount
    );
}

//category card
let categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(function(card) {
    let categoryName = card.querySelector("h3").textContent;

    console.log(
        "selected category:",
        categoryName
    );

    alert(
        "you selected " +
        categoryName
    );
});

//product cards 
let productCards = document.querySelectorAll(".product-card");

productCards.forEach(function(card, index) {
    let button = card.querySelector(".cart-btn");

    if (button) {
        button.removeAttribute("onclick");

        button.addEventListener("click", function(){
            let productId = index + 1;

            addToCart(productId);
        });
    }
});

//product info 
productCards.forEach(function (card) {
    let productName = card.querySelector("h3").textContent;

    let productPrice = card.querySelector(strong).textContent;

    console.log(
        productName + 
        " - " +
        productPrice
    );
});

let navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("active")
    });
});

//scorll products
let shopNowButton = document.querySelector(".primary-btn");

if (shopNowButton) {
    shopNowButton.addEventListener(
        "click", 
        function() {
            console.log("customer click Shop Now");
        }
    );
}


console.log("welcome to MarketHub");

loadCart()

//delievery message
function checkDelivery() {
    if (cartTotal >= 50000) {
        console.log(
            "you qualify for FREE DELIVERY!"
        ); 
    } else {
        console.log( 
    "delivery fee applies"
);
    }
}

function updateCart() {
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }

    checkDelivery();
}


//keyboard event
document.addEventListener(
    "keydown", function(event) {
        if (event.key === "Espace"){
            navMenu.classList.remove("active");
        }
    }

);







