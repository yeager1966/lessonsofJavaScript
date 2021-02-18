"use strict";
let value;
// TO STRING
//1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2)
console.log(typeof(5 + ''));

//3) 
value = (40).toString();

//3)
const num = 5 ;
console.log("https://vk.com/catalog" + num);

//4)
const fontSize = 26 + "px";
console.log(fontSize);

//5)
console.log(typeof([] + 1 + 2)); 
// то есть строка + число = строка

///////////////////////////////////////////////////////////////////////////////////////

//Boolean to string
let bool = String(false);
//Array to string
value = String([1,2,3]);
//Object to string
value = String({name: "Danil"});


value = 30 -""; //number , пустая строка при минусование становится 0
value = 30 -"5"; //25 , number
value = false + 10; //10 так как false = 0; 
value = 10 + true; //11 так как true = 1;
value = false + undefined; // NaN , при плюсование только со строкой undefined приобразуется в строку , в друших случиях нет

///////////////////////////////////////////////////////////////////////////////////////


// TO NUMBER
//1)
console.log(typeof(Number("SALAM")));

//2)
console.log(typeof(+"5"));

//3)
console.log(typeof(parseInt("50px", 10))); // Int для целыхчисел
console.log(parseFloat("10.777")); //Float для дробных 

//4)
let answer = +prompt("How old are u?" , "");
console.log(typeof answer);

//5)
value = Number(null); // 0, type  Number

//6)
value = Number([1,2,3]); // NaN , type Number

///////////////////////////////////////////////////////////////////////////////////////

// TO BOOLEAN
//1)
0 , "" , null , undefined , NaN; // ВСЕГДА FALLS

value = Boolean("hello"); //любая не пустая строка будет считаться true
value = Boolean(""); //любая пустая строка будет считаться false
value = Boolean(" "); //любая пустая строка с пробелом внутри будет считаться true
value = Boolean("5"); //любое число кроме 0 будет считаться true
value = Boolean({}); //пустой объект true
value = Boolean([]); //пустой массив true

let switcher = null;
if (switcher){
    console.log("Working...");
} 

switcher = 1;
if (switcher){
    console.log("nOT...");
} 
//2)
console.log(typeof(Boolean("4")));
//3)
console.log(typeof(!"444"));
