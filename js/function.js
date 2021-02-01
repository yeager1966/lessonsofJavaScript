"use strict";

let nameMyFriend = "Olzhas";


function sayHello() {
    let message = "hello JavaScript" + nameMyFriend;
    console.log(message);
}
sayHello(); // вызолв функции

/////////////////////////////////////////////////////
function simpleMath(a, b) {
    let result = a + b;
    console.log(result);
}
simpleMath(11, 77);

/////////////////////////////////////////////////////
function mathExample(a, b) {
    let result = a + b;
  return result;
}
let sum = mathExample(777 , 223);
console.log(sum);

/////////////////////////////////////////////////////



let num = 20;

function showMassage(text) { // функция , () аргументы  // function declaration 2
    console.log(text); // 3
    num = 10; // локальная переменная
}

showMassage("Hello World"); // вызов функции 1 
console.log(num);

//////////////////////////////////////////////////////

function calc(a, b) { // function declaration
    return (a * b); // возвращает результат фунции

}
console.log(calc(4, 3));
console.log(calc(5, 7));
console.log(calc(8, 8));

//////////////////////////////////////////////////////

function ret() { // function declaration
    let num = 50;

    // какая та логика

    return num;
}
const anotherNum = ret(); // тут наша переменная благодаря return вышла наружу , и теперь храниться в переменнной another
console.log(anotherNum);

//////////////////////////////////////////////////////

const logger = function () { // function expression
    console.log("Hello");
};
logger();

//////////////////////////////////////////////////////

const calculate = (a, b) => a + b; // функция стрелочная
console.log(calculate(5, 6));