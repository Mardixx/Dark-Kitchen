const customersarray = [
    {
    name : 'Timy',
    picture : "./ressources/People/image-Timy.jpg",
    date : "15/8/2023",
    dish : "Duck Ramen",
    comment : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, assumenda!",
    },
    {
    name : 'Lisa',
    picture : "./ressources/People/image-Lisa.jpg",
    date : "21/7/2023",
    dish : "California Rolls Salmon Mix",
    comment : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, assumenda!",
    },
    {
    name : 'Elie',
    picture : "./ressources/People/image-Elie.jpg",
    date : "7/6/2023",
    dish : "Gyoza",
    comment : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, assumenda!",
    }
]

const customers = document.querySelector(".sect-review");

function reviews() {
  
    // create elements
    customersarray.forEach((customersarray) => {
      const customer = document.createElement("div");
      customer.classList.add("review");
      
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

  // Function for obtaining the current date in "day/month/year" format
  function date() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    return `${day}/${month}/${year}`;
}
  

// Function for adding a new customer using prompts
function addcustomer() {
    
    const name = prompt("Enter the customer's name: ");
    const picture = prompt("Enter the path to the client image: ");
    const dish = prompt("choose your dish: ");
    const comment = prompt("Enter your comment: ");
  
    // Create an object representing the new customer
    const newCustomer = {
      name: name,
      picture: picture,
      date: date(),
      dish: dish,
      comment: comment,
    };
  

    customersarray.push(newCustomer);
  
    // Update the posting of notices
    reviews();
}

const addbutton = document.querySelector(".newcustomer");

// Add an event handler when the button is clicked
addbutton.addEventListener("click", function() {

  addcustomer();
});

