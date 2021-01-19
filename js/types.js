"use strict";
// TO STRING
//1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2)
console.log(typeof(5 + ''));

const num = 5 ;
console.log("https://vk.com/catalog" + num);

const fontSize = 26 + "px";

console.log(typeof([] + 1 + 2)); 
// то есть строка + число = строка


// TO NUMBER
//1)
console.log(typeof(Number("SALAM")));

//2)
console.log(typeof(+"5"));

//3)
console.log(typeof(parseInt("10px", 10)));

let answer = +prompt("How old are u?" , "");

// TO BOOLEAN
//1)
0 , "" , null , undefined , NaN; // ВСЕГДА FALLS

let switcher = null;
if (switcher){
    console.log("Working...");
} 

switcher = 1;
if (switcher){
    console.log("Working...");
} 
//2)
console.log(typeof(Boolean("4")));
//3)
console.log(typeof(!!"444"));
