let cart = [];
const shoppingOpenButton = document.querySelector(".shopping-cart");
const shoppingModal = document.querySelector(".modal-shopping-cart");
const shoppingModalContent = document.querySelector(".modal-content");
const shoppingCloseButton = document.querySelector(".close");

shoppingOpenButton.addEventListener("click", showShoppingCart);
shoppingCloseButton.addEventListener("click", closeShoppingCart)

function showShoppingCart() {
    shoppingModal.style.display = "block";
    shoppingModal.classList.add("animateOn");
}

function closeShoppingCart() {
    shoppingModal.style.display = "none";
    shoppingModal.classList.remove("animateOn");
}

function listenToAddingCart() {
    let addToCartButton = document.querySelectorAll(".addItem")
    
    addToCartButton.forEach(button => {
        button.addEventListener("click", function() {
            let itemName = button.parentNode.getElementsByTagName("h2")[0].innerText;
            let cartFilter = cart.filter(e => e.name == itemName )[0];
            shoppingModal.style.display = "block";
            shoppingModal.classList.add("animateOn");
            if(cartFilter !== undefined){
                cartFilter.count ++ ;
            }
            else{
                cart.push({
                    name: itemName,
                    count: 1,
                });

            }
            addItemsToModal();
        })
    });
}

function addItemsToModal() {
    shoppingModalContent.innerText = "";

    cart.forEach(item => {
        let itemCollection = collection.filter(e => e.name == item.name )[0];

        const card = document.createElement("article");
        card.classList.add("card");

        const name = document.createElement("h2");
        name.textContent = itemCollection.name;
        card.appendChild(name);
        name.classList.add("name");

        const price = document.createElement("span");
        price.textContent = itemCollection.price;
        card.appendChild(price);
        price.classList.add("price");

        const quantity = document.createElement("span");
        quantity.textContent = item.count;
        card.appendChild(quantity);
        quantity.classList.add("quantity");

        const removeItem = document.createElement("button");
        removeItem.classList.add("removeItem");
        card.appendChild(removeItem);
    
        const removeItemImg = document.createElement("img");
        removeItemImg.src = "ressources/icons/trash.png";
        removeItem.appendChild(removeItemImg);
        removeItemImg.classList.add("removeItemImg");

        shoppingModalContent.appendChild(card);
    });

    
    let totalCount = 0;
    let totalQuantity = shoppingModalContent.querySelectorAll(".quantity");
    let totalPrice = shoppingModalContent.querySelectorAll(".price");

    for (let i = 0; i < totalPrice.length; i++) {
        const element = totalPrice[i];
        let multiply = parseInt(totalQuantity[i].innerText);
        let elementPrice = element.innerText.slice(0, -1);
        let elementPriceToInt = parseInt(elementPrice);
        if (multiply > 1) {
            elementPriceToInt = elementPriceToInt * multiply;
        }
        totalCount += elementPriceToInt;
        
    }

    const total = document.createElement("span");
    total.textContent = "Total: " + totalCount + " $";
    shoppingModalContent.appendChild(total);
    total.classList.add("total");

    const placeOrder = document.createElement("button");
    placeOrder.textContent = "Place Order";
    shoppingModalContent.appendChild(placeOrder);
    placeOrder.classList.add("placeOrder");

    shoppingModalContent.querySelectorAll(".removeItem").forEach(item => {
        item.addEventListener("click", function(){
            let delItem = item.parentNode.getElementsByTagName("h2")[0].innerText;
            let cartFilter= cart.filter(e => e.name == delItem )[0]
            let delIndex = cart.indexOf(cartFilter);
            cart.splice(delIndex, 1);
            addItemsToModal();
        })
    })
}

