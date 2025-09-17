import "../styles.css";
import "./carosel.js";

const dropdowns = document.querySelectorAll('.dropdown');

document.addEventListener("click", (e) => {

    if (e.target.closest('.dropdown--menu') === null && e.target.closest('.dropdown--button') === null){

        for (let i = 0; i < dropdowns.length; i++){
            const dropdownMenu = dropdowns[i].querySelector('.dropdown--menu');

            if (dropdownMenu.classList.contains("visible")){
                dropdownMenu.classList.toggle("visible");
            }
        }
    }

});

for (let i = 0; i < dropdowns.length; i++){

    const dropdownButton = dropdowns[i].querySelector(".dropdown--button");
    const dropdownMenu = dropdowns[i].querySelector(".dropdown--menu");

    dropdownButton.addEventListener("click", () => {

        dropdownMenu.classList.toggle("visible");

    });
}

