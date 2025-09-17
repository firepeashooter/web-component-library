

const rightButton = document.querySelector("#right");
const leftButton = document.querySelector("#left");
const slides = document.querySelector(".slides");
const nav = document.querySelector(".nav");
const circles = Array.from(document.querySelectorAll(".circle"));

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");


let x = 0;
let curPic = 1;

//initial update
updateNav();


rightButton.addEventListener("click", (e) => {

    x -= 250;
    curPic += 1;
    slides.style.transform= `translateX(${x}px)`;

    updateNav();

});

leftButton.addEventListener("click", (e) => {

    x += 250;
    curPic -= 1;
    slides.style.transform= `translateX(${x}px)`;

    updateNav();

});

function updateNav(){

    //loop through all circles and properly update them
    for (let i = 0; i < circles.length; i++){
        if (parseInt(circles[i].id) == curPic){
            circles[i].style.backgroundColor = "#555555";
        } else{
            circles[i].style.backgroundColor = "";
        }
    }
}