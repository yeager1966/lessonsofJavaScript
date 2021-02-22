"use strict";
let value;

// == не строгое равенство 
// === строгое равенство
// || оператор ИЛИ запинается на первой правде
// && опертор И запинается на первой лжи
value = 1 == 1;
value = 1 == "1"; // True  , потому что не строгое равенство , и автомат преобразует значение в кавычке в число 
value = 1 === "1"; // False , потому что строгое равенство, также типы данных разные 
value = 1 != '1'; // False , потому что он в кавычке преобразует в число , и говорит что 1 не равняется 1 , поэтому фолсс

// некоторые сравнения 
value = "a" > "ab"; // false , потому что больше символом с правой строны
value = "a".charCodeAt(); // метод , вернет нам числовое значение этого символа 


console.log(value);

value = 10;
if (value) { //  главное чтобы value не равнялось "" , 0 , null , undefined , NaN . Остальное все кроме них true
    console.log("some actions");
} else {
    console.log("else");
}



value = null;
if (!value) { // тут он меняет фоллсс то есть null на true
    console.log("pravilno");
} else {
    console.log("ne pravilno");
}
// Пустой массив или пустой объект всегда тру в булл представлен

value = [];
if (value.length) { // ! тут я делаю его фолсс , если массив пустой value.length равен 0 , а 0 это фолсс , если бы в массиве было что то , то это было тру
    console.log("prav");
} else {
    console.log("ne prav");
}
//  Проверка массива на массив 

value = [];
if (Array.isArray(value)) {
    console.log("this is array");
} else {
    console.log("this is nor array")
}
///////////////////////////////////////

let user = {
    name: "Denis"
};

if (user.name) { // тут мы проверяем user.name что он не null , undefined , false , 0 , ""
    console.log(user.name);
} else {
    console.log("eror");
}


let user2 = {
    name: "Denis"
};

if (user2.hasOwnProperty('name')) { // этот метод проверяет есть ли в объекте такой ключ , но есть проблема он не смотрит на его значение , это может быть null или undefined
    console.log("Да есть такой человек");
} else {
    console.log("нету такого человека");
}


let serverNickname = "Den";
let nickname = serverNickname || "default nickname";
console.log(nickname);
// ===  строгое равенство


// условие 

if (4 == 9) { // если поместить какую то цифру обычную , то условие будет всегда выполняться и всегда верно 
    console.log("ok!");
} else {
    console.log("Eror");
}


const num = 50;
if (num < 49) {
    console.log("Eror"); // начинает по одному каждое условие проверять 
} else if (num >= 50) {
    console.log("Mnogo");
} else {
    console.log("ok");
}





/* 1) Чему равно а, почему? */

let a = 0 || 'string';
console.log(a); // string

let b = 1 && 'string';
console.log(b); // string

let c = null || 25;
console.log(c); // 25

let d = null && 25;
console.log(d); // null

let e = null || 0 || 35;
console.log(e); // 35

let f = null && 0 && 35;
console.log(f); // null

/* 2)Что отобразится в консоли. Почему? */
let a, b, c, d, e, f, g, h;
a = 12 + 14 + '12';
console.log(a); //2612 ( 12 это строка)

b = 3 + 2 - '1';
console.log(b); // 4 

c = '3' + 2 - 1;
console.log(c); // 31

d = true + 2;
console.log(d); // 3 , true = 1 ; 1 + 2

e = +'10' + 1;
console.log(e); // 11 , потому что перед строкой стоит + , строка превращается в цифру

f = undefined + 2;
console.log(f); // NaN


g = null + 5;
console.log(g); // 5 , потому что null равняется 0 

h = true + undefined;
console.log(h); // NaN

/* 3 ) Создать произвольную переменную, присвоеть ей значение и написать условие, если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”. */

let third = "hidden";
if (third == "hidden") {
    third = "visible";
    console.log(third);
} else {
    third = "hidden";
    console.log(third);
}

/* 4)Создать переменную и присвойте ей число.

Используя if, записать условие:

- если переменная равна нулю, присвоить ей 1;

- если меньше нуля - строку “less then zero”;

- если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись). */

let pr = 5;
if (pr == 0) {
    pr = 1;
    console.log(pr);
} else if (pr < 0) {
    pr = "less then zero";
    console.log(pr);
} else if (pr > 0) {
    pr *= 10;
    console.log(pr);
}

/* 5) Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.

Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.*/

let car = {
    name: "Lexus",
    age: 10,
    create: 2008,
    needRepair: false
};
if (car.age > 5) {
    car.needRepair = true;
    console.log(car.needRepair);
    console.log("Need Repair");
} else {
    car.needRepair = false;
}

/* Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.

Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль. */

let item = {
    name: "Intel core I7",
    price: "100$",
    discount: "15%"
};
//метод isNaN() определяет, является ли передаваемое значение NaN 
const price = parseFloat(item.price);
const discount = parseFloat(item.discount);


if (!isNaN(price) && !isNaN(discount )) { // если прайс и скидка не равняется проверка на Nan
    item.priceWithDiscount = "85$";
    const newPrice = parseFloat(item.priceWithDiscount);
    console.log(item.priceWithDiscount);
} else {
    console.log(item.price);
}

/* 7)Дан следующий код: */

let product = {

    name: "Яблоко",
    price: "10$"

};

let min = 10; // минимальная цена

let max = 20; // максимальная цена

const productPrice = parseFloat(product.price);

if (productPrice >= min && productPrice <= max) {
    console.log(product.name);
} else {
    console.log("Товаров не найдено");
}



/* Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено. */

