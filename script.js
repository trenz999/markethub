console.log("Script loaded successfully!");


// variable declaration
let productsName = "classic snaeakers";
let price = 45000;



console.log(productsName);
console.log(price);

console.log("product:", productsName);
console.log("price:", price);

let customerName = "John";
let cartsItems = 3; 
let isLoggedIn = true;

let score = 10; 
score = 15;

const taxRate = 0.15; 
// taxRate = 0.18; // This will throw an error because taxRate is a constant

// if statement
let total = 60000;
if (total >= 50000) {
    console.log("You are eligible for free shipping!");
} else {
    console.log("You are not eligible for free shipping.");
}

let age = 20; 
if (age >= 18) {
    console.log("you are eligible to enter the club");
} else {
    console.log("you are not eligible to enter the club");
}

let totalCart = 15000;
let isPremiumMember = true;

if (totalCart >= 20000 || isPremiumMember) {
    console.log("You are eligible for free shipping!");
}



// fuction to add product to cart



function addNumbers(a,b) {
 return a + b; 
}

let result = addNumbers(10, 20);
console.log(result);



function addToCart(name) {
    alert("Product added to cart: " + name);
}

addToCart("classic sneakers");

function sayHello() {
    alert("Hello, welcome to our store!");

}

sayHello();

function addNumbers(a, b) {
    return a + b;
}

let results = addNumbers(10, 20);
console.log(results);



function multiplyNumbers(a, b) {
    return a * b;
}

const multiplyNumbersArrow = (a, b) => a * b;

console.log(multiplyNumbersArrow(5, 10));

let cartCount = 0; 

function addToCart() {
    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;
}

let menuBtn = document.getElementById("nav-link");
let navLinks = document.querySelector("nav ul");

let navMenu = document.querySelector("nav-links");

menuBtn.addEventListener("click", function() {
    navMenu.classList.toggle("active");
});



// javascript array
let carts = [];
carts.push("classic sneakers");
carts.pop();
carts.unshift("product1");
car
carts.push("smart watch");
carts.push("product3");
console.log(carts);
console.log(carts.length);

let products = {
    name: "classic sneakers",
    price: 45000, 
    category: "shoes"
}; 
console.log(products.name);
console.log(products.price);
console.log(products.category);


{
    id: 1, 
    name: "classic sneakers",
    price: 45000, 
    category: "shoes"
    img: "images/product1.jpg"
}


echo "# markethub" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/trenz999/markethub.git
git push -u origin main




let fruits = [
    "apple", "banana", "orange", "grape", "mango"
]

console.log(fruits.length); 
