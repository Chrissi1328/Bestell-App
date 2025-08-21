function getDishesTemplate(index) {
    return `<div id="dishes">
    <div id="name">
    <div class="name_div"><p><strong>${myDishes[index].name}</strong></p></div>
    <button id="add_button" onclick="addItemToBasket(myDishes, ${index})">+</button>
    </div>
    <div id="description"><p>${myDishes[index].description}</p></div>
    <div id="price"><p><strong>${myDishes[index].price.toFixed(2)}€</strong></p></div>
    </div>`
}

function getDessertsTemplate(index) {
    return `<div id="dishes">
    <div id="name">
    <div><p><strong>${myDesserts[index].name}</strong></p></div>
    <button id="add_button" onclick="addItemToBasket(myDesserts, ${index})">+</button>
    </div>
    <div id="description"><p>${myDesserts[index].description}</p></div>
    <div id="price"><p><strong>${myDesserts[index].price.toFixed(2)}€</strong></p></div>
    </div>`
}

function getDrinksTemplate(index) {
    return `<div id="dishes">
    <div id="name">
    <div><p><strong>${myDrinks[index].name}</strong></p></div>
    <button id="add_button" onclick="addItemToBasket(myDrinks, ${index})">+</button>
    </div>
    <div id="description"><p>${myDrinks[index].description}</p></div>
    <div id="price"><p><strong>${myDrinks[index].price.toFixed(2)}€</strong></p></div>
    </div>`
}

function emptyBasketTemplate() {
    return `
        <h2>Warenkorb</h2>
        <p>Ihr Warenkorb ist leer.</p>
    `;
}

function fullBasketTemplate(items, finalSum) {
    let html = '';

    for (let i = 0; i < basket_dishes.length; i++) {
        let item = basket_dishes[i];
        html += `<p class="dish_basket"><strong>${item.dish.name}</strong></p><p class="p_tag_basket"><button class="basket_buttons" onclick="changeQuantity(${i}, -1)">-</button>Menge: ${item.quantity}
                <button class="basket_buttons" onclick="changeQuantity(${i}, +1)">+</button></p><p class="p_tag_basket">Preis: ${(item.dish.price * item.quantity).toFixed(2)} €</p>
            <div class="delete_div"><button class="delete_button" onclick="removeItem(${i})">🗑</button></div>`;
        finalSum += item.dish.price * item.quantity;
    }
    html += `
        <div class="basket_finalSum"><p><strong>Gesamtsumme: ${finalSum.toFixed(2)} €</strong></p></div>
        <button class="order_button" onclick="submit_Order()">Bestellen</button>`;
    return html;
}

function submitOrderTemplate() {
    return `
        <h2>Warenkorb</h2>
        <p class="order_message">Vielen Dank! Deine Bestellung wird nun bearbeitet 🍽️</p>`;
}

function submitOrderTemplateOverlay() {
    return `
        <button onclick="toggleBasket()" class="remove_button">✖</button>
        <h2>Warenkorb</h2>
        <p class="order_message">Vielen Dank! Deine Bestellung wird nun bearbeitet 🍽️</p>`;
}