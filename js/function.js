"use strict";
/*  function decloration */

function sayHello(fistname, lastname) {
  console.log("hello world");
  console.log(fistname, lastname);
}
sayHello("denis", "Den");

/*  function decloration */

function returns(firstname, lastname) {
  return `Hello ${firstname} , ${lastname}`;
}
let res = returns("Olzhas", "Darmen");
console.log(res);

/*  function decloration */

function eror(firstname, lastname) {
  /*  То есть мы говорим , если нет первого аргумента */
  if (!firstname) {
    return console.log("Eror");
  }
}
let res2 = eror();
console.log(res2);

/*  function decloration */

function newfunction(firstname = "Andrey", lastname = "Omarov") {
  return `Hello ${firstname} ${lastname}`;
}
let res3 = newfunction();
console.log(res3);

// Область видимости
// 20 , 20 - тут переменная переопределила глобальную функцию
let x = 10;

function foo() {
  x = 20;
  console.log(x);
}
foo();
console.log(x);

// 20 , 10 - тут переменная а была объявлена в функции поэтому она не трогала глобальную , также мы можем ее объявить в аргументе функции
let a = 10;

function foo() {
  let a = 20;
  console.log(a);
}
foo();
console.log(a);

/// FOR EXAMPLE

const user = {
  name: "denis",
  age: 30,
};

function getObj(obj) {
  console.log(obj);
}
getObj(user);

////
(function (message) {
  console.log(message);
})("Hello world");

let nameMyFriend = "Olzhas";

function sayHello() {
  let message = "hello JavaScript" + " " + nameMyFriend;
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
  return result; // функцию наружу , обязательно переменную наружу , если юзаешь return
}
let sum = mathExample(777, 223);
console.log(sum);

/////////////////////////////////////////////////////


let car = {
  color: "red"
};

let car2 = {
  color: "green"
};

function colorChange(theCar) { // theCar = car
  theCar.color = "yellow";
}
console.log("car:" + car.color);
console.log("car2:" + car2.color);

colorChange(car);


/////////////////////////////////////////////////////

let newCar = {
  maxSpeed: 240
};

function speedChange(speed) {
  speed.maxSpeed = 300;
  console.log("Новая скорость:" + speed.maxSpeed);

}
console.log("Старая скорость:" + newCar.maxSpeed);
speedChange(newCar);




/////////////////////////////////////////////////////



function showMessage(from, text) {

  from = '*' + from + '*'; // немного украсим "from"

  console.log(from + ': ' + text);
}

let from = "Аня";

showMessage(from, "Привет"); // *Аня*: Привет

// значение "from" осталось прежним, функция изменила значение локальной переменной
console.log(from); // Аня

/////////////////////////////////////////////////////


let userName = 'Вася';

function showMessage() {
  let userName = "Петя"; // объявляем локальную переменную

  let message = 'Привет, ' + userName; // Петя
  alert(message);
}

// функция создаст и будет использовать свою собственную локальную переменную userName
showMessage();

alert(userName); // Вася, не изменилась, функция не трогала внешнюю переменную


/////////////////////////////////////////////////////



function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert(result); // 3


/////////////////////////////////////////////////////






/////////////////////////////////////////////////////


let num = 20;

function showMassage(text) {
  // функция , () аргументы  // function declaration 2
  console.log(text); // 3
  num = 10; // локальная переменная
}

showMassage("Hello World"); // вызов функции 1
console.log(num);

//////////////////////////////////////////////////////

function calc(a, b) {
  // function declaration
  return a * b; // возвращает результат фунции
}
console.log(calc(4, 3));
console.log(calc(5, 7));
console.log(calc(8, 8));

//////////////////////////////////////////////////////

function calculateAge(year) {
  return 2020 - year;
}
/* console.log(calculateAge(1999));
console.log(calculateAge(2001)); */
console.log(calculateAge(2001));

function logInfo(name, year) {
  const age = calculateAge(year);
  if (age <= 19) {
    console.log("Ты не совершеннолетний");
  } else if (age > 20) {
    console.log("Вы уже старый человек");
  } else {
    console.log("Да ты черепаха");
  }
}

logInfo("Ерасыл", 2001);

//////////////////////////////////////////////////////

function ret() {
  // function declaration
  let num = 50;

  // какая та логика

  return num;
}
const anotherNum = ret(); // тут наша переменная благодаря return вышла наружу , и теперь храниться в переменнной another
console.log(anotherNum);

//////////////////////////////////////////////////////

const logger = function () {
  // function expression
  console.log("Hello");
};
logger();

//////////////////////////////////////////////////////

const calculate = (a, b) => a + b; // функция стрелочная
console.log(calculate(5, 6));

const idiot = 1;

/* Задачки */
// 1
function multiply() {
  if (!arguments.length) {
    return 0;
  }
  let res = 1;

  for (let i = 0; i < arguments.length; i++) {
    res *= arguments[i];
  }

  return res;
}

console.log(multiply(1, 5, 2, 20));

// 2
function reverseString(str) {
  let string = String(str);
  let res = "";

  for (let i = string.length; i--;) {
    res = res + string[i];
  }

  return res;
}

console.log(reverseString('test'));
console.log(reverseString(''));
console.log(reverseString(null));
console.log(reverseString(undefined));
console.log(reverseString());


// 3
function getCodeStringFromText(str) {
  let string = String(str);
  let res = '';

  for (let i = 0; i < string.length; i++) {
    res += string[i].charCodeAt() + ' ';
  }

  return res.trim();
}

console.log(getCodeStringFromText('hello'))
console.log(getCodeStringFromText(''))
console.log(getCodeStringFromText(null))
console.log(getCodeStringFromText(undefined))
console.log(getCodeStringFromText(1234))

// 4
function guessTheNumber(num) {
  const number = Number(num);

  if (typeof number !== "number" || isNaN(number)) return new Error("Please provide a valid number");
  if (number < 0 || number > 10) return new Error("Please provide number in range 0 - 10");

  const random = Math.ceil(Math.random() * 10);

  if (random === number) return "You win!";

  return `You are lose, your number is ${number}, the random number is ${random}`;
}

console.log(guessTheNumber(21));



const square = function (x) {
  return x * x;
};
// prints 25
square(5);