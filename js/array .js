"use strict";

// массив 

const arr = [1, 2, 3, 4, 5];

// методы для массива

// console.log(arr.length); (СВОЙСТВА) количество символов в массиве 
// arr.pop(); // метод для массива , который удаляет последний символ
//arr.push(10); // добавляет в элемент в конец массива


arr.forEach(function(item , i , arr){ // метод , тоже перебор
console.log(`${i}:${item} элементы внутри массива ${arr}`);
}) ;




///////////////////
console.log(arr);

for ( let i = 0; i < arr.length; i++) /* перебор элементов массива , свойства length позволяет переберать пока не закончиться элементы массива */ {

    console.log(arr[i]);


}
/////////////////////////

for ( let value of arr) {  /* Это второй способ через метод of ( Но редко , часто используют только для массива )*/
    console.log(value);
}
///////////////////


const str = prompt("" , "");
const products = str.split(" , ");
console.log(products);