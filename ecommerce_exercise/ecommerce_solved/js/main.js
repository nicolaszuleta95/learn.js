/**
 * Dependencies
 */
import products from './../DB/products.js';

const PRODUCTS_KEY = "products";
let arrProducts = [];
const divContainer = document.querySelector(".container");
const spanCar = document.querySelector(".car-txt");

/**
 * 
 * @param {*} product 
 */
const markUpProduct = (product) => {
    return `
        <div class="product">
            <img src=${product.image} alt="">
            <p class="name">Nombre: ${product.name}</p>
            <p class="description">Descripción: ${product.description}</p>
            <p class="price">Precio: ${product.price}</p>
            <button class="add" id="add-${product.id}">+</button>
        </div>
    `;
}

/**
 * 
 */
const drawProducts = () => {
    let productsHtml = "";
    for (let i = 0; i < products.length; i++) {
        productsHtml += markUpProduct(products[i]);     
    }
    divContainer.innerHTML = productsHtml;
    arrProducts = JSON.parse(localStorage.getItem(PRODUCTS_KEY));
    spanCar.textContent = JSON.parse(localStorage.getItem(PRODUCTS_KEY)).length;
}

/** 
 * 
 */
const handleAdd = (product) => {
    arrProducts.push(product);
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(arrProducts));
    spanCar.textContent++;
}

/**
 * 
 */
const addListeners = () => {
    for (let i = 0; i < products.length; i++) {
        //const aa = document.getElementById(`add-${products[i].id}`);
        document.getElementById(`add-${products[i].id}`).addEventListener("click", () => handleAdd(products[i]));
    }
}

drawProducts();
addListeners();