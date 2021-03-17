// VARIABLES

const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector ('.close-cart');
const clearCartbtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector ('.cart-items');
const cartItemsN = document.querySelector ('.cart-items-n');
const cartTotal = document.querySelector ('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector ('.products');
const btnToggle= document.querySelector('.nav-icon');



// CART

let cart = ['product1', 'product2', 'product3', 'product4', 'product5', 'product6'];
console.log(cart);



// PRODUCTS 

const product1 = {
    marca: "Philips",
    color: "blanco",
    precio: "$1500",
}

const product2 = {
    marca: "Philips",
    color: "azul",
    precio: '$1500',
}

const product3 = {
    marca: "Philips",
    color: "negro",
    precio: '$1500',
}

const product4 = {
    marca: "Philips",
    color: "blanco",
    precio: '$1500',
}

const product5 = {
    marca: "Philips",
    color: "blanco",
    precio: '$1500',
}

const product6 = {
    marca: "Philips",
    color: "blanco",
    precio: '$1500',
}

// MENU DESPLEGABLE - CART

btnToggle.addEventListener('click', function (){
    document.getElementsByClassName('cart').classList.toggle('.showCart');
});

