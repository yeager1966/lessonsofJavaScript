"use strict";
// свойства ( строк ) 
const str = "test";
const arr = [1 , 2 , 5 ];

console.log(str.length); // количество букв
console.log(arr.length); // количество цифр в массиве 

console.log(str[3]);

// методы для строк
console.log(str.toUpperCase()); 

let fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); // поиск под строки , искать с слово 


const logg = "Hello Salam";
console.log(logg.slice(6, 11)); // обрезать кусочек строки  , то есть с 6 буквы начинается ворлд и заканчивается на 11

const salam = "Hello World";
console.log(salam.slice(6)); // начиная с 6 строки начинает вырезать 

console.log(logg.substr(6, 5)); // начиная с 6 строки вырежет 5 букв

// методы к числам

const num = 12.2;
console.log(Math.round(num)); // округление числа

const test =" 12.8px ";
console.log(parseInt(test));
console.log(parseFloat(test));
