let basket_dishes = [];

function init() {
    getDishes()
}

function getDishes() {
    let ContentRef = document.getElementById("offer_section")
    ContentRef.innerHTML = "";

    let DessertsRef = document.getElementById("desserts_section");
    DessertsRef.innerHTML = "";

    let DrinksRef = document.getElementById("drinks_section");
    DrinksRef.innerHTML = "";

    for (let index = 0; index < myDishes.length; index++) {
        ContentRef.innerHTML += getDishesTemplate(index);
        DessertsRef.innerHTML += getDessertsTemplate(index);
        DrinksRef.innerHTML += getDrinksTemplate(index);
    }
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

function addItemToBasket(array, index) {
    addToBasket(array[index]);
    renderBasket();
    showFeedbackMessage();
}

function renderBasket() {
    let basketRef = document.getElementById("basket");
    if (basket_dishes.length === 0) {
        const empty = emptyBasketTemplate();
        basketRef.innerHTML = empty;
        document.getElementById("basket_over").innerHTML = `<button onclick="toggleBasket()" class="remove_button">✖</button>${empty}`;
        return;
    }
    let sum = basket_dishes.reduce((total, item) => total + item.dish.price * item.quantity, 0);
    let html = fullBasketTemplate(basket_dishes, sum);
    basketRef.innerHTML = `<h2>Warenkorb</h2>` + html;
    document.getElementById("basket_over").innerHTML = `<button onclick="toggleBasket()" class="remove_button">✖</button><h2>Warenkorb</h2>${html}`;
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
    document.getElementById("basket").innerHTML = submitOrderTemplate();
    document.getElementById("basket_over").innerHTML = submitOrderTemplateOverlay();
}

function showFeedbackMessage() {
    let msg = document.getElementById("feedbackMessage");
    msg.classList.add("show");
    setTimeout(() => msg.classList.remove("show"), 2000);
}