"use strict";

// события прокрутки
const header = document.querySelector(".header"); // ищет в html файле первый селектор , лучше юзать его 
console.log(header);

window.addEventListener("scroll", function () {
    checkScroll();
    /*  console.log(scrollPos);
     header.classList.add("red"); */
});

document.addEventListener("DOMContentLoaded" , function(){
    checkScroll();
});


function checkScroll(){
    let scrollPos = window.scrollY;

    if (scrollPos > 0) {
        header.classList.add("red");
    } else {
        header.classList.remove("red");
    }
}


// события клика
const testBtn = document.getElementById("testBtn");
testBtn.addEventListener("click", function () {
    alert("Ты лох");
});

// события ссылок
/* Для нескольких ссылок нельзя повесит оброботчик события клика */
const links = document.querySelectorAll(".nav__link");

for (let navItem of links) {
    navItem.addEventListener("click", function () {
        alert("Не перейдешь");
        console.log(navItem.text); //выводит названия каждой ссылки в консоль
    });
}