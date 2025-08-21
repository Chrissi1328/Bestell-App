let basket_dishes = [];

function init() {
    getDishes()
    getDesserts()
    getDrinks()
}

function getDishes() {
    let ContentRef = document.getElementById("offer_section")
    ContentRef.innerHTML = "";

    for (let index = 0; index < myDishes.length; index++) {
        ContentRef.innerHTML += getDishesTemplate(index);
    }
}

function getDesserts() {
    let DessertsRef = document.getElementById("desserts_section");
    DessertsRef.innerHTML = "";

    for (let index = 0; index < myDesserts.length; index++) {
        DessertsRef.innerHTML += getDessertsTemplate(index);

    }
}

function getDrinks() {
    let DrinksRef = document.getElementById("drinks_section");
    DrinksRef.innerHTML = "";

    for (let index = 0; index < myDrinks.length; index++) {
        DrinksRef.innerHTML += getDrinksTemplate(index);

    }
}

function add_Dish(index) {
    let dish = myDishes[index];

    for (let i = 0; i < basket_dishes.length; i++) {
        if (basket_dishes[i].dish.name === dish.name) {
            basket_dishes[i].quantity += 1;
            renderBasket();
            return;
        }
    }

    basket_dishes.push({ dish: dish, quantity: 1 });
    renderBasket()
    showFeedbackMessage()
}

function add_Dessert(index) {
    let dessert = myDesserts[index];

    for (let i = 0; i < basket_dishes.length; i++) {
        if (basket_dishes[i].dish.name === dessert.name) {
            basket_dishes[i].quantity += 1;
            renderBasket();
            return;
        }
    }

    basket_dishes.push({ dish: dessert, quantity: 1 });
    renderBasket()
    showFeedbackMessage()
}

function add_Drink(index) {
    let drink = myDrinks[index];

    for (let i = 0; i < basket_dishes.length; i++) {
        if (basket_dishes[i].dish.name === drink.name) {
            basket_dishes[i].quantity += 1;
            renderBasket();
            return;
        }
    }

    basket_dishes.push({ dish: drink, quantity: 1 });
    renderBasket()
    showFeedbackMessage()
}

function renderBasket() {
    emptyBasketTemplate()
    fullBasketTemplate()
}

function removeItem(index) {
    basket_dishes.splice(index, 1);
    renderBasket();
}

function changeQuantity(index, change) {
    basket_dishes[index].quantity += change;

    if (basket_dishes[index].quantity <= 0) {
        basket_dishes.splice(index, 1);
    }
    renderBasket();
}

function toggleBasket() {
    let overlay = document.getElementById("basketOverlay");
    console.log("overlay:", overlay)
    renderBasket()
    overlay.classList.toggle("show");

    let basket_icon = document.getElementById("basket_icon");
    basket_icon.classList.toggle("show");
}

function submit_Order() {
    basket_dishes = [];
    renderBasket();

    let basketRef = document.getElementById("basket");
    basketRef.innerHTML = `
        <h2>Warenkorb</h2>
        <p class="order_message">Vielen Dank! Deine Bestellung wird nun bearbeitet!</p>
    `;

    let basketOverlay = document.getElementById("basket_over");
    if (basketOverlay) {
        basketOverlay.innerHTML = `
            <button onclick="toggleBasket()" class="remove_button">✖</button>
            <h2>Warenkorb</h2>
            <p class="order_message">Vielen Dank! Deine Bestellung wird nun bearbeitet 🍽️</p>
        `;
    }
}

function showFeedbackMessage() {
    let msg = document.getElementById("feedbackMessage");
    msg.classList.add("show");
    setTimeout(() => msg.classList.remove("show"), 2000);
}