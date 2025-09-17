

const rightButton = document.querySelector("#right");
const leftButton = document.querySelector("#left");
const slides = document.querySelector(".slides");
const nav = document.querySelector(".nav");

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");


let x = 0;
let picNum = 1;

//initial update
updateNav();


rightButton.addEventListener("click", (e) => {

    x -= 250;
    picNum += 1;
    slides.style.transform= `translateX(${x}px)`;

    updateNav();



});

leftButton.addEventListener("click", (e) => {

    x += 250;
    picNum -= 1;
    slides.style.transform= `translateX(${x}px)`;

    updateNav();




});

function updateNav(){

    //clear all circles
    one.style.backgroundColor = "";
    two.style.backgroundColor = "";
    three.style.backgroundColor = "";
    four.style.backgroundColor = "";

    //update circles depending on picNum

    if (picNum == 1){
        one.style.backgroundColor = "darkgray";
    } else if (picNum == 2){
        two.style.backgroundColor = "darkgray";
    } else if (picNum == 3){
        three.style.backgroundColor = "darkgray";
    } else if (picNum == 4){
        four.style.backgroundColor = "darkgray";
    }

}