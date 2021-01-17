"use strict";

const arr = [2, 6, 4, 8, 10];
arr.sort(compareNum); // сортировка чисел благодаря функции
console.log(arr);

function compareNum( a , b ){ 
    return a - b ;
} // сортировка чисел благодаря функции
 

const str = prompt("" , "");
const products = str.split(" , ");

products.sort(); // сортировка строк по алфавиту

console.log(products.join(" ; ")); // объяденение массива