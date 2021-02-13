"use strict";
// свойства ( строк ) 
const str = "test";
const arr = [1 , 2 , 5 ];

console.log(str.length); // количество букв
console.log(arr.length); // количество цифр в массиве 

console.log(str[3]);



console.dir(Number); // можно через нее посмотреть все методы и свойтсва типа данных

// методы для строк
console.log(str.toUpperCase());  // делает все в большом регистре
console.log(str.toLowerCase());  // делает все в маленький регистре


let fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); // поиск под строки, говорит нам с какой строки началось слово , в данном случае с 5 


const logg = "Hello Salam";
console.log(logg.slice(6, 11)); // обрезать кусочек строки  , то есть с 6 буквы начинается Салам и заканчивается на 11 на +1 еще 11 типо


const salam = "Hello World";
console.log(salam.slice(6)); // начиная с 6 строки начинает вырезать 



console.log(logg.substr(6, 5)); // начиная с 6 строки вырежет 5 букв

// методы к числам

const num = 12.2;
console.log(Math.round(num)); // округление числа

const test =" 12.8px ";
console.log(parseInt(test));
console.log(parseFloat(test));
