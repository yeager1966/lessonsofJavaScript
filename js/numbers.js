"use strict";

const num1 = 10;
const num2 = 20;
let value;

// = * / -

value = num1 + num2;
value = value + 100;
value += 100;


// % - остаток от деления 
value = 5 % 2;

// инкрименты и дикрименты 
value++; // постинкр
value--; // постдикр

++value; // преинкримент
--value; // предикримент

// Округление чисел 
value = 0.5 + 0.6;
value = +value.toFixed(2); // toFixed это Округление в кавычки пишем до скольки чисел после нуля , возвращает нам всегда строку поэтому лучше его преобразововать в чистло

// Math
value = Math.PI; //это свойство 
value = Math.random(); // Это метод , возвращает рандомные цифры от 0 - 10
value = Math.round(2, 77); // Это метод округление
value = Math.ceil(2, 1); // Это метод округление в большую сторону , ответ будет : 3
value = Math.floor(2, 8); // Это метод округление в меньшую сторону , ответ будет : 2
value = Math.min(2, 4, 6, 1, 2); // Это метод который находит минимальное число

value = Math.floor(Math.random() * 10 + 1); // Это метод для получение рандомных цифр, начиная с 0 до включая 10

const arr = ['black', 'red', 'white', 'pink'];
value = Math.floor(Math.random() * arr.length); // получение рандомных цветов из массива

console.log(value, arr[value]);


// Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

let numb1,numb2;

numb1 = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
numb2 = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(numb1 , numb2);

// Получить число pi из Math и округлить его до 2-х знаков после точки
let Pi;

Pi = Math.PI;
Pi = +Pi.toFixed(2);
console.log(Pi);

// Работа с Math.random:

// a. Получить случайное число и округлить его до двух цифр после запятой

// b. Получить случайное целое число от 0 до X. X - любое произвольное число.

let randomNumb , randomNumb2;

randomNumb = (Math.random() * 10 + 1).toFixed(2); 
console.log(randomNumb);

randomNumb2 = (Math.random() * 10 + 1).toFixed(0); 
console.log(randomNumb2);


// Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

let numbs;
numbs = 0.6 + 0.7;
console.log(numbs.toFixed(1));

// Получить число из строки ‘100$’

value = +"100$";
console.log(typeof value);
