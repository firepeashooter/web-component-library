

const rightButton = document.querySelector("#right");
const leftButton = document.querySelector("#left");
const slides = document.querySelector(".slides");
const nav = document.querySelector(".nav");
const circles = Array.from(document.querySelectorAll(".circle"));

//Transform in pixels
let x = 0;
let curPic = 1;

//initial update loads the first 
updateNav();


nav.addEventListener("click", (e) => {

    if (e.target.classList.contains("circle")){
        curPic = parseInt(e.target.id);
    }

    updateNav();

});


rightButton.addEventListener("click", () => {

    x -= 250;
    curPic += 1;
    slides.style.transform= `translateX(${x}px)`;

    updateNav();
});


leftButton.addEventListener("click", () => {

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