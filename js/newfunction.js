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
