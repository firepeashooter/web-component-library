import "../styles.css";


const container = document.querySelector('.container');
const dropdownButton = document.querySelector('.dropdown--button');
const dropdownMenu = document.querySelector('.dropdown--menu')

dropdownButton.addEventListener("click", (e) => {

    console.log("dropdown button pressed");
    dropdownMenu.classList.toggle("visible");

});


