"use strict";
//Какое будет выведено значение: let x = 5; alert( x++ ); ?
let x = 5;
console.log(x++);


//Чему равно такое выражение: [ ] + false - null + true ?
console.log(typeof ([] + false - null + true)); // пустой массив равен пустой строке
//NaN

//Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
let y = 1;
let x = y = 2; // <- с право на лево
console.log(x);


//Чему равна сумма [ ] + 1 + 2?
console.log([] + 1 + 2); // ответ string 
 // 12 выйдет "1"+"2" = "12"


//Что выведет этот код: alert( "1"[0] )?
console.log("2" [0]);
// или
const a = ["1", "2", "3"];
console.log(a[0]);


//Чему равно 2 && 1 && null && 0 && undefined ?
console.log(2 && 1 && null && 0 && undefined); // оператор &&(И) запинается на первой лжи , тут на null
/* оператор &&(И) запинается на первой лжи , с лево на право идет */



//Есть ли разница между выражениями? !!( a && b ) и (a && b)?
console.log(!!(1 && 2) === (1 && 2)); // false = true    поэтому false


//Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
console.log(2 && 3);
console.log(null || 3);
console.log( 3 || 4); // оператор && будет выполняться первым , даст нам 3 потому что он справа 
/*оператор || запинается на  первой правде */

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