
// теренарный оператор 
// выражение ? если true : если false

let a = 1;
let b = 0;

/* if ( a > 0){
    b = a;

} else {
    b+=1;
} */


a > 0  ? b = a : b+=1; // но это не лучший вид
b = a  ? b : b+1; // лучше так , тернарныйй для больших конструкций не используют

console.log(b);



const ter = 50;
(ter == 50) ? console.log("Ok"): console.log("error"); 

let age = 19;
let message = (age < 3) ? 'Здравствуй, малыш!' : // теренарный оператор 
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

console.log( message );

//////////////////////////////////////
/* alert(message); */



const a = 54;
switch (a) { // строгая проверка switch
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
let gg = 1234;
console.log(isNan(gg));