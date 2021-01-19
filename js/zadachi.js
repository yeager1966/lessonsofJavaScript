"use strict";
//Какое будет выведено значение: let x = 5; alert( x++ ); ?
let x = 5;
console.log(x++);


//Чему равно такое выражение: [ ] + false - null + true ?
console.log(typeof ([] + false - null + true)); // пустой массив к пустой строке


//Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
let y = 1;
let x = y = 2; // <- с право на лево
console.log(x);


//Чему равна сумма [ ] + 1 + 2?
console.log([] + 1 + 2); // string  // 12 выйдет "1"+"2" = "12"


//Что выведет этот код: alert( "1"[0] )?
console.log("2" [0]);
const a = ["1", "2", "3"];
console.log(a[0]);


//Чему равно 2 && 1 && null && 0 && undefined ?
console.log(2 && 1 && null && 0 && undefined); // оператор &&(И) запинается на первой лжи
/* оператор &&(И) запинается на первой лжи
оператор || запинается на  первой правде */


//Есть ли разница между выражениями? !!( a && b ) и (a && b)?
console.log(!!(1 && 2) === (1 && 2)); // false = true поэтому false


//Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
console.log(null || 2 && 3 || 4); // оператор && будет выполняться первым , даст нам 3 потому что он справа 


//arr = [1, 2, 3]; brr = [1, 2, 3]; Правда ли что a == b ?
const arr = [1, 2, 3], // не равнуяется потому что это два разных ящика
      brr = [1, 2, 3];
if(arr==brr){
    console.log(true);
} else {
    console.log(false);
}


//Что выведет этот код : alert(+"Infinity"); ?
console.log(+"Infinity"); // Infinity


//Верно ли сравнение: "Ёжик" > "яблоко" ?
console.log("Ejik">"Apple"); // Тут идет по символное сравнение 


//Чему равно 0 || "" || 2 || undefined || true || falsе ?
console.log(0 || "" || 2 || undefined || true || falsе); // вернется 2 запинается на первой правде 