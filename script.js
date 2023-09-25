const collection = [
    {
      name: "Beef Ramen",
      picture: "ressources/foods/ramen/ramen 1-min.jpg",
      price: "15$",
      category: "Meat",
      addItem: "ressources/icons/caddie 2.jpg",
    },
    {
        name: "Pork Ramen",
        picture: "ressources/foods/ramen/ramen 2-min.jpg",
        price: "15$",
        category: "Meat",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Duck Ramen",
        picture: "ressources/foods/ramen/ramen 3-min.jpg",
        price: "15$",
        category: "Meat",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Sea Food Ramen",
        picture: "ressources/foods/ramen/ramen 4-min.jpg",
        price: "15$",
        category: "Fish",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Vegan Ramen",
        picture: "ressources/foods/ramen/ramen 5-min.jpg",
        price: "15$",
        category: "Vegan",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "California Roll",
        picture: "ressources/foods/sushi/sushi 1-min.jpg",
        price: "15$",
        category: "Fish",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Discovery Mix",
        picture: "ressources/foods/sushi/sushi 2-min.jpg",
        price: "15$",
        category: "Fish",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Gyoza",
        picture: "ressources/foods/sushi/sushi 3-min.jpg",
        price: "15$",
        category: "Meat",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "California Rolls Mix",
        picture: "ressources/foods/sushi/sushi 4-min.jpg",
        price: "15$",
        category: "Fish",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "California Rolls Salmon Mix",
        picture: "ressources/foods/sushi/sushi 5-min.jpg",
        price: "15$",
        category: "Fish",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Max Mix",
        picture: "ressources/foods/sushi/sushi 6-min.jpg",
        price: "15$",
        category: "Fish",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Asahi",
        picture: "ressources/foods/drink/asahi-min.jpg",
        price: "15$",
        category: "Drink",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Beer",
        picture: "ressources/foods/drink/beer-min.jpg",
        price: "15$",
        category: "Drink",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Jinro",
        picture: "ressources/foods/drink/jinro-min.jpg",
        price: "15$",
        category: "Drink",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Ramune",
        picture: "ressources/foods/drink/ramune-min.jpg",
        price: "15$",
        category: "Drink",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Sake",
        picture: "ressources/foods/drink/sake-min.jpg",
        price: "15$",
        category: "Drink",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Tea",
        picture: "ressources/foods/drink/tea-min.jpg",
        price: "15$",
        category: "Drink",
        addItem: "ressources/icons/caddie 2.jpg",
      },
];

const cards = document.querySelector(".sect-article");
let filteredCollection = collection;

function generateHTML(array) {
  
    // create elements
    array.forEach((collection) => {
      const card = document.createElement("article");
      card.classList.add("card");
      
      const picture = document.createElement("img");
      picture.src = collection.picture;
      card.appendChild(picture);
      picture.classList.add("picture");
    
      const name = document.createElement("h2");
      name.textContent = collection.name;
      card.appendChild(name);
      name.classList.add("name");
    
      const price = document.createElement("p");
      price.textContent = collection.price;
      card.appendChild(price);
      price.classList.add("price");
    
      const category = document.createElement("p");
      category.textContent = collection.category;
      card.appendChild(category);
      category.classList.add("category");

      const addItem = document.createElement("button");
      addItem.classList.add("addItem");
      card.appendChild(addItem);
    
      const addItemImg = document.createElement("img");
      addItemImg.src = collection.addItem;
      addItem.appendChild(addItemImg);
      addItemImg.classList.add("addItemImg");
      
      cards.appendChild(card);
    });
  }
//call function
generateHTML(filteredCollection);



const options = document.getElementById("category-select");
// event listener on change option
options.addEventListener("change", function () {
    filterByCategory(options.value)
})

// add the function to sort
function filterByCategory(filterString) {

    // if the value option is none
    if (filterString == "none") {
      cards.innerText = "";
      //generate the collection
      generateHTML(collection);
    }
    else{
      filteredCollection = collection.filter(item => item.category == filterString);
      cards.innerText = "";
      // generate filter collection
      generateHTML(filteredCollection);
    }
  }