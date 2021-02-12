"use strict";
// работа с элементами на странице , методы и свойства документа(Объект)
const box = document.getElementById("box");

console.log(box);


const btns = document.getElementsByTagName("button")[1];

console.log(btns);

const circle = document.getElementsByClassName("box");
console.log(circle);


const header = document.querySelector(".header"); // ищет в html файле первый селектор , лучше юзать его 
console.log(header);

const navLinks = document.querySelectorAll(".nav__link"); // ищет в html файле все селекторы с таким классом
console.log(navLinks);


hearts.forEach(item => {
console.log(item);
});

const oneHeart = document.querySelector("div"); // Получает самый первый элемент на странице
console.log(oneHeart);


const box = document.getElementById("box"), // к айди
    btns = document.getElementsByTagName("button"), // к тегу
    circles = document.getElementsByClassName("circle"),// к классу
    hearts = document.querySelectorAll(".heart"),// к селоктору с таким классом(псевдомассив)
    oneHeart = document.querySelector(".heart");// к первому селектору(псевдомассив)