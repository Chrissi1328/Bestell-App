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
    addToBasket(dish);
    renderBasket();
    showFeedbackMessage();
}

function addToBasket(item) {
    for (let i = 0; i < basket_dishes.length; i++) {
        if (basket_dishes[i].dish.name === item.name) {
            basket_dishes[i].quantity += 1;
            return;
        }
    }
    basket_dishes.push({ dish: item, quantity: 1 });
}

function add_Dessert(index) {
    let dessert = myDesserts[index];
    addToBasket(dessert)
    renderBasket()
    showFeedbackMessage()
}

function add_Drink(index) {
    let drink = myDrinks[index];
    addToBasket(drink)
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
    submitOrderTemplate()
    submitOrderTemplateOverlay()
}

function showFeedbackMessage() {
    let msg = document.getElementById("feedbackMessage");
    msg.classList.add("show");
    setTimeout(() => msg.classList.remove("show"), 2000);
}