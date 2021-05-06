class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name,
        this.price = price
    }
}

const products = [
    new Product(0, "Libro de misterio", 34),
    new Product(1, "Zapatos de cuero", 89.23),
    new Product(2, "Pack de lapiceras", 12.99),
    new Product(3, "Campera", 129.12),
    new Product(4, "Notebook", 350.99),
    new Product(5, "Juego Monopoly", 25.00),
    new Product(6, "nombre", 123)
]

const cart = [
    {id: 0, quantity: 0},
    {id: 1, quantity: 0},
    {id: 2, quantity: 0},
    {id: 3, quantity: 0},
    {id: 4, quantity: 0},
    {id: 5, quantity: 0},
    {id: 6, quantity: 0},
    {id: 7, quantity: 0}
]

const productsTable = document.querySelector("#tablaProductos");


function createElement(elementType, textContent) {
    const el = document.createElement(elementType);
    el.textContent = textContent;
    return el;
}

const saveCartToLocalStorage = function() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

const addToCart = function(e) {
    const id = e.target.dataset.id;
    const oldQuantity = cart[id].quantity || 0;
    console.log(oldQuantity);
    const newQuantity = oldQuantity + 1;
    cart[id].quantity = newQuantity;
    const quantityEl = document.querySelector(".quantity-" + id);
    quantityEl.textContent = newQuantity.toString();
    saveCartToLocalStorage();
}

const removeFromCart = function(e) {
    const id = e.target.dataset.id;
    const oldQuantity = cart[id].quantity || 0;
    console.log(oldQuantity);
    let newQuantity = 0;
    if (oldQuantity > 0) {
        newQuantity = oldQuantity - 1;
        cart[id].quantity = newQuantity;
    }
    const quantityEl = document.querySelector(".quantity-" + id);
    quantityEl.textContent = newQuantity.toString();
    saveCartToLocalStorage();
}



for (let i = 0; i < products.length; i++) {
    const row = document.createElement("tr");

    row.appendChild(createElement("td", products[i].id));
    row.appendChild(createElement("td", products[i].name));
    row.appendChild(createElement("td", "$" + products[i].price));

    const tdAddToCart = document.createElement("td");
    const addToCartButton = document.createElement("button");
    addToCartButton.onclick = addToCart;
    addToCartButton.dataset.id = products[i].id.toString();
    addToCartButton.textContent = "Agregar";
    tdAddToCart.appendChild(addToCartButton);
    row.appendChild(tdAddToCart)

    const tdRemoveFromCart = document.createElement("td");
    const removeFromCartButton = document.createElement("button");
    removeFromCartButton.dataset.id = products[i].id.toString();
    removeFromCartButton.onclick = removeFromCart;
    removeFromCartButton.textContent = "Quitar";
    tdRemoveFromCart.appendChild(removeFromCartButton);
    row.appendChild(tdRemoveFromCart)

    const quantityColumn = document.createElement("td");
    quantityColumn.classList.add("quantity-" + products[i].id);
    quantityColumn.textContent = 0;
    row.appendChild(quantityColumn);

    productsTable.appendChild(row);
}




