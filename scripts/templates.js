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