const customersarray = [
    {
    name : 'Timy',
    picture : "./ressources/People/image-Timy.jpg",
    date : "7/5/2022",
    dish : "Duck Ramen",
    comment : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, assumenda!",
    },
    {
    name : 'Lisa',
    picture : "./ressources/People/image-Lisa.jpg",
    date : "7/5/2022",
    dish : "California Rolls Salmon Mix",
    comment : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, assumenda!",
    },
    {
    name : 'Elie',
    picture : "./ressources/People/image-Elie.jpg",
    date : "7/5/2022",
    dish : "Gyoza",
    comment : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, assumenda!",
    }
]

const customers = document.querySelector(".sect-review");

function reviews() {
  
    // create elements
    customersarray.forEach((customersarray) => {
      const customer = document.createElement("review");
      customer.classList.add("customer");
      
      const picture = document.createElement("img");
      picture.src = customersarray.picture;
      customer.appendChild(picture);
      picture.classList.add("picture");
    
      const name = document.createElement("h2");
      name.textContent = customersarray.name;
      customer.appendChild(name);
      name.classList.add("name");
    
      const date = document.createElement("span");
      date.textContent = customersarray.date;
      customer.appendChild(date);
      date.classList.add("date");
    
      const dish = document.createElement("span");
      dish.textContent = customersarray.dish;
      customer.appendChild(dish);
      dish.classList.add("dish");

      const comment = document.createElement("span");
      comment.textContent = customersarray.comment;
      customer.appendChild(comment);
      comment.classList.add("comment");
      
      customers.appendChild(customer);
    });
  }
  //call function
  reviews();