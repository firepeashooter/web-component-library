

const rightButton = document.querySelector("#right");
const leftButton = document.querySelector("#left");
const slides = document.querySelector(".slides");
let x = 0;



rightButton.addEventListener("click", (e) => {

    x -= 250;
    slides.style.transform= `translateX(${x}px)`;



});

leftButton.addEventListener("click", (e) => {

    x += 250;
    slides.style.transform= `translateX(${x}px)`;



});