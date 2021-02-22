// теренарный оператор 
// 1) выражение ? если true : если false

// 2) выражение ? если true : выражение ? если true : если false

let a = 1;
let b = 0;

/* if ( a > 0){
    b = a;

} else {
    b+=1;
} */


a > 0 ? b = a : b += 1; // но это не лучший вид
b = a ? b : b + 1; // 1 ) лучше так , тернарныйй для больших конструкций не используют

b = a > 0 ? 2 : a < 0 ? 3 : 0; // 2)

console.log(b);



const ter = 50;
(ter == 50) ? console.log("Ok"): console.log("error");

let age = 19;
let message = (age < 3) ? 'Здравствуй, малыш!' : // теренарный оператор 
    (age < 18) ? 'Привет!' :
    (age < 100) ? 'Здравствуйте!' :
    'Какой необычный возраст!';

console.log(message);

//////////////////////////////////////
/* alert(message); */



const numb = 54;
switch (numb) { // строгая проверка switch
    case 49:
        console.log("Неверно");
        break;
    case 50:
        console.log("verno");
        break;
    default:
        console.log("Ne v etot raz");
        break;
}


let color = "yellow";

switch (color) {
    case "yellow":
        console.log("color is yellow");
        break;
    case "red":
        console.log("color is red");
        break;
    default:
        console.log("color is black");

}

let colors = "yellow";

switch (colors) {
    case "yellow":
    case "red":
        console.log("color is red || color is yellow");
        break;
    default:
        console.log("color is black");

}

/* Записать в виде switch case следующее условие: */

/* if (a === ‘block’) {                
   console.log(‘block’)
} else if (a === ‘none’) {
   console.log(‘none’)
} else if (a === ‘inline’) {
   console.log(‘inline’)
} else {
   console.log(‘other’)
} */

const a = "block";
switch (a) {
    case "block":
        console.log("block");
        break;
    case "none":
        console.log("none");
        break;
    case "inline":
        console.log("inline");
        break;
    default:
        console.log("other");
}

/* аписать данное условие в виде тернарного оператора */

/* let b = 'hidden';
if (b === 'hidden') {
  b = 'visible';
} else {
  b = 'hidden';
} */

let b = "hidden";

/* b === "hidden" ? b = "visible" : b = "hidden"; */
b = b === 'hidden' ? 'visible' : 'hidden';

/* Записать данное условие в виде тернарного оператора */

/* let c = 0;
if (c === 0) {
    c = 1;
} else if (c < 0) {
    c = 'less then zero';
} else {
    c *= 10
} */

let c = 0;

c = c === 0 ? 1 : c < 0 ? 'less then zero' : c * 10;