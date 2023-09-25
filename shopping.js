let cart = [];
const shoppingButton = document.getElementsByClassName("shopping-cart");
const shoppingModal = document.getElementsByClassName("modal-shopping-cart");
const shoppingSpan = document.getElementsByClassName("close");


shoppingButton.addEventListener("click", showShoppingCart);
shoppingSpan.addEventListener("click", closeShoppingCart)

function showShoppingCart() {
   shoppingModal.style.display = "block";
}

function closeShoppingCart() {
    shoppingModal.style.display = "none";
}