const collection = [
    {
      name: "Beef Ramen",
      picture: "ressources/foods/ramen/ramen 1.jpg",
      price: "15$",
      category: "Meat",
      addItem: "ressources/icons/caddie 2.jpg",
    },
    {
        name: "Pork Ramen",
        picture: "ressources/foods/ramen/ramen 2.jpg",
        price: "15$",
        category: "Meat",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Duck Ramen",
        picture: "ressources/foods/ramen/ramen 3.jpg",
        price: "15$",
        category: "Meat",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Sea Food Ramen",
        picture: "ressources/foods/ramen/ramen 4.jpg",
        price: "15$",
        category: "Fish",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Vegan Ramen",
        picture: "ressources/foods/ramen/ramen 5.jpg",
        price: "15$",
        category: "Vegan",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "California Roll",
        picture: "ressources/foods/sushi/sushi 1.jpg",
        price: "15$",
        category: "Fish",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Discovery Mix",
        picture: "ressources/foods/sushi/sushi 2.jpg",
        price: "15$",
        category: "Fish",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Gyoza",
        picture: "ressources/foods/sushi/sushi 3.jpg",
        price: "15$",
        category: "Meat",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "California Rolls Mix",
        picture: "ressources/foods/sushi/sushi 4.jpg",
        price: "15$",
        category: "Fish",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "California Rolls Salmon Mix",
        picture: "ressources/foods/sushi/sushi 5.jpg",
        price: "15$",
        category: "Fish",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Max Mix",
        picture: "ressources/foods/sushi/sushi 6.jpg",
        price: "15$",
        category: "Fish",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Asahi",
        picture: "ressources/foods/drink/asahi.jpg",
        price: "15$",
        category: "Drink",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Beer",
        picture: "ressources/foods/drink/beer.jpg",
        price: "15$",
        category: "Drink",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Jinro",
        picture: "ressources/foods/drink/jinro.jpg",
        price: "15$",
        category: "Drink",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Ramune",
        picture: "ressources/foods/drink/ramune.jpg",
        price: "15$",
        category: "Drink",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Sake",
        picture: "ressources/foods/drink/sake.jpg",
        price: "15$",
        category: "Drink",
        addItem: "ressources/icons/caddie 2.jpg",
      },
      {
        name: "Tea",
        picture: "ressources/foods/drink/tea.jpg",
        price: "15$",
        category: "Drink",
        addItem: "ressources/icons/caddie 2.jpg",
      },
];

const cards = document.querySelector(".sect-article");

function generateHTML() {
  
    // create elements
    collection.forEach((collection) => {
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
  generateHTML();