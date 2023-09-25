let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".darkmode-toggle");

//enable dark mode
const enableDarkMode = () => {
    //add the class darkmode to the body
    document.body.classList.add("darkmode");
    //update darkmode in the local storage
    localStorage.setItem("darkMode", "enabled");
}

//disable dark mode
const disableDarkMode = () => {
    // remove the class darkmode to the body
    document.body.classList.remove("darkmode");
    //update darkmode in the local storage
    localStorage.setItem("darkMode", null);
}

//stay in dark mode or not when refreshed
if(darkMode === "enabled"){
    enableDarkMode();
}

//event listener on click button
darkModeToggle.addEventListener("click", () => {
    
    darkMode = localStorage.getItem("darkMode");

    if(darkMode !== "enabled"){
        enableDarkMode();
    }
    else{
        disableDarkMode();
    }
});