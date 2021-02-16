"use strict";
// работа с элементами на странице , методы и свойства документа(Объект)
const box = document.getElementById("box"); // обращанение к айди
 
console.log(box);


const btns = document.getElementsByTagName("button")[1];

console.log(btns);

const circle = document.getElementsByClassName("box");
console.log(circle);

// современный формат
const header = document.querySelector(".header"); // ищет в html файле первый селектор , лучше юзать его 
console.log(header);

const hearts = document.querySelectorAll(".heart"); // ищет в html файле все селекторы с таким классом
console.log(hearts); // у него есть метод forEach


hearts.forEach(item => {
console.log(item);
});

const oneHeart = document.querySelector("div"); // Получает самый первый элемент на странице
console.log(oneHeart);


