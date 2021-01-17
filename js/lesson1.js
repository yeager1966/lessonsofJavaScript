"use strick"; // говорим что используем новый формат кода (строгий режим) 

alert('Salam');



let number = 5;  /* let изменяемая переменная */
const leftBorderWidth = 1; /* Один раз задал изменить не возможно const */

number = 10;
console.log(number);



/* leftBorderWidth = 11; */ /* сразу выдает ошибку */
console.log(leftBorderWidth);


var idiot = 'Ivan'; // такой формат кода уже устарел 
console.log(idiot);



let numb = 4;
console.log(number);
console.log(-4/0); // -infinity
console.log('string'*9);


const persone = "Alex Marcer"; // Строки пишутся обязательно в кавычках ( кавычки могут быть любыми )

const booleanFalse = false; // boolean
const booleanTrue = true; // boolean 


console.log(something); // пишем туда че го не существуещего и получаем в консоли null консоль в браузере


let und;
console.logo(und); // получаем тип через консоль в браузере undefined



const obj  = {       // объект то что в скобках , это свойства объекта
          name: "John", //name это ключ свойства объекта , и name значение этого свойства
          age: 25,
          isMarried:false
};
console.log(obj.name);
/* console.log(obj["name"]); Это второй способ , но лучше первый способ юзать*/

let arr = ['plus.png','orange.jpg',36,6,{},[]]; // массив , если мы хотим обратится к кому то , то должны помнить что нумерация начинается не с 1 , а с 0. Массивы служат для того чтобы наши предметы располагались по порядку. Их ключь это номер порядка их расположения то есть 0 1 2 3 и т.д.
console.log(arr[2]);






