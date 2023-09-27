let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".darkmode-toggle");

//enable dark mode
const enableDarkMode = () => {
    //add the class darkmode to the body
    document.body.classList.add("darkmode");
    //update darkmode in the local storage
    localStorage.setItem("darkMode", "enabled");
     // Add a black background to the darkmode-toggle button
     darkModeToggle.style.backgroundColor = "black";
}

//disable dark mode
const disableDarkMode = () => {
    // remove the class darkmode to the body
    document.body.classList.remove("darkmode");
    //update darkmode in the local storage
    localStorage.setItem("darkMode", null);
    // Add a white background to the darkmode-toggle button
    darkModeToggle.style.backgroundColor = "white";
}

//stay in dark mode or not when refreshed
if(darkMode === "enabled"){
    enableDarkMode();
    darkModeToggle.innerHTML = '<img src="./ressources/icons/moon.svg" alt="Dark disable">'
}
else{
    darkModeToggle.innerHTML = '<img src="./ressources/icons/sun.svg" alt="Dark enable">'
}



darkModeToggle.addEventListener("click", () => {
    
    darkMode = localStorage.getItem("darkMode");

    if(darkMode !== "enabled"){
        enableDarkMode();
        darkModeToggle.innerHTML = '<img src="./ressources/icons/sun.svg" alt="Dark disable">';

    }
    else{
        disableDarkMode();        
        darkModeToggle.innerHTML = '<img src="./ressources/icons/moon.svg" alt="Dark enable">';
    }
});