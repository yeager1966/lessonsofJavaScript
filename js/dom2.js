// как получить род элемент , или ближайшего родителя

const div = document.querySelector("div");

console.log(div.parentElement); // будет хранится ссылка на родителя вызывает его родителя , возвращает прямого родителя

const link = div.querySelector(".link");
console.log(link);

console.log(link.closest(".content")); // возвращает ближайшего родителя 


// атрибуты (манипуляции)

div.classList.add("idiot"); // classList - объект так сказать для манипуляции , а у него есть метожы по типу add и т.д.
div.classList.remove("idiot"); // удаление такого класса
console.log(div.classList.contains("idiot")); // проверка класса , есть или он или нет
div.classList.toggle("toggle") // если его нет то добавит такой класс , и вернет тру. А если есть то удалит и вернет фолсс

// изменять атрибуты элемента

div.setAttribute("id", "myId"); // добавит в наше div , в его атрибут id
div.getAttribute("id"); // получить название атрибута id
div.hasAttribute("id"); // проверить есть ли в атрибуте id
div.removeAttribute("id"); // удалить атрибут


// работа с кастомными атрибутами

/* console.log(div.dataset.custom); // мой кастомный атрибут в div e */

console.log(div.getAttribute("data-custom"));