function getDishesTemplate(index) {
    let Dishes = myDishes[index]
    return `<div id="dishes">
    <div id="name">
    <div class="name_div"><p><strong>${Dishes.name}</strong></p></div>
    <button id="add_button" onclick="add_Dish(${index})">+</button>
    </div>
    <div id="description"><p>${Dishes.description}</p></div>
    <div id="price"><p><strong>${Dishes.price.toFixed(2)}€</strong></p></div>
    </div>`
}

function getDessertsTemplate(index) {
    let Desserts = myDesserts[index]
    return `<div id="dishes">
    <div id="name">
    <div><p><strong>${Desserts.name}</strong></p></div>
    <button id="add_button" onclick="add_Dessert(${index})">+</button>
    </div>
    <div id="description"><p>${Desserts.description}</p></div>
    <div id="price"><p><strong>${Desserts.price.toFixed(2)}€</strong></p></div>
    </div>`
}

function getDrinksTemplate(index) {
    let Drinks = myDrinks[index]
    return `<div id="dishes">
    <div id="name">
    <div><p><strong>${Drinks.name}</strong></p></div>
    <button id="add_button" onclick="add_Drink(${index})">+</button>
    </div>
    <div id="description"><p>${Drinks.description}</p></div>
    <div id="price"><p><strong>${Drinks.price.toFixed(2)}€</strong></p></div>
    </div>`
}

function emptyBasketTemplate() {
    let basketRef = document.getElementById("basket");
    basketRef.innerHTML = `<h2>Warenkorb</h2>`;
    if (basket_dishes.length === 0) {
        basketRef.innerHTML += `<p>Ihr Warenkorb ist leer.</p>`;
        document.getElementById("basket_over").innerHTML = `<button onclick="toggleBasket()" class="remove_button">✖</button><h2>Warenkorb</h2><p>Ihr Warenkorb ist leer.</p>`;
        return;
    }
}

function fullBasketTemplate() {
    let basketRef = document.getElementById("basket");
    let finalSum = 0;
    for (let i = 0; i < basket_dishes.length; i++) {
        let item = basket_dishes[i];
        basketRef.innerHTML += `<p class="dish_basket"><strong>${item.dish.name}</strong></p><p class="p_tag_basket"><button class="basket_buttons" style="cursor:pointer" onclick="changeQuantity(${i}, -1)">-</button>Menge: ${item.quantity}<button class="basket_buttons" style="cursor:pointer" onclick="changeQuantity(${i}, +1)">+</button></p><p class="p_tag_basket">Preis: ${(item.dish.price * item.quantity).toFixed(2)} €</p><div class="delete_div"><button class="delete_button" onclick="removeItem(${i})">🗑</button></div>`;
        finalSum += item.dish.price * item.quantity;
    }
    basketRef.innerHTML += `<div class="basket_finalSum"><p><strong>Gesamtsumme: ${finalSum.toFixed(2)} €</strong></p></div><button class="order_button" onclick="submit_Order()">Bestellen</button`;
    document.getElementById("basket_over").innerHTML = `<button onclick="toggleBasket()" class="remove_button">✖</button>${basketRef.innerHTML}`;
}

function submitOrderTemplate() {
    let basketRef = document.getElementById("basket");
    basketRef.innerHTML = `
        <h2>Warenkorb</h2>
        <p class="order_message">Vielen Dank! Deine Bestellung wird nun bearbeitet!</p>`;
}

function submitOrderTemplateOverlay() {
    let basketOverlay = document.getElementById("basket_over");
    if (basketOverlay) {
        basketOverlay.innerHTML = `
            <button onclick="toggleBasket()" class="remove_button">✖</button>
            <h2>Warenkorb</h2>
            <p class="order_message">Vielen Dank! Deine Bestellung wird nun bearbeitet 🍽️</p>`;
    }
}