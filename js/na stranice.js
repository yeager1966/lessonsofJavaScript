"use strict";

const box = document.getElementById("box"), // к айди
    btns = document.getElementsByTagName("button"), // к тегу
    circles = document.getElementsByClassName("circle"),// к классу
    hearts = document.querySelectorAll(".heart"),// к селоктору с таким классом(псевдомассив)
    oneHeart = document.querySelector(".heart"),// к первому селектору(псевдомассив)
    wrapper = document.querySelector(".wrapper"),
    title = document.querySelector("h2");

  /*   wrapper = document.querySelector(".wrapper"),
    hearts = wrapper.querySelectorAll(".heart") */ // тут можно четко сказать где ищем

    
/* box.style.backgroundColor = "pink";
box.style.width = "100px";
box.style.height = "100px"; */



btns[1].style.borderRadius = "50%";
circles[0].style.backgroundColor = "red";

box.style.cssText = "background-color:pink; width: 100px; height:100px; border-radius:50%";

/* for (let i = 0; i < hearts.length; i++){
    hearts[i].style.backgroundColor="blue";
} */

hearts.forEach(item => {
    item.style.backgroundColor="grey";
});

// основные методы

const div = document.createElement("div"); // он только находится в js , ("") - cюда мы пишем название тега которого создаем (div , button , header ,li и т.д.)
/* const text = document.createTextNode("Тут я был я"); */

div.classList.add("black");    // это уже метод на свойстве classList , метод add добавляет класс который есть в css стилях 

/* document.querySelector(".wrapper").append(div); */
wrapper.append(div); // добавляет в html в класс wrapper , тег div , appemd это в конец добавляет
/* wrapper.appendChild(div); */ // старый метод



/* wrapper.prepend(div); */// prepend добавляет в начало 
/* wrapper.insertBefore(div, hearts[0]); */ //старый формат тоже
/* hearts[0].before(div);
hearts[0].after(div); */

/* circles[0].remove(); // удалить элмент со страницы
wrapper.removeChild(hearts[1]); // старый формат для удаления 


hearts[0].replaceWith(circles[0]); // для замены места
wrapper.replaceChild(circles[0], hearts[0]); // старый формат замены , первый аргумент на который хотим поменять , второй аргумент тот элемент который меняется */


div.innerHTML = "<h1>Hello World;</h1>"; // а сюда можно h1ml структуру
/* div.textContent = "Hello"; // тут только текст  */

div.insertAdjacentHTML("beforeend" , "<h2>kak dela?</h2>"); // два аргумента, первый аргумент = типо то что может бифор афтер , а второй аргумент это html структура
/* beforebegin -  div перед 
afterbegin - вставляет html код в начале элемента в divе 
beforeend - 
afterend - после div
beforeend - вставляет html код после элемента в dive */
