const firstName = "Danil";
const lastName = "Dickout";
const age = 19;
const strings = "Hello Leonardo";


let value;

value = firstName + lastName;
value = firstName + " " + lastName;
// value = value + " I am "+age;
value += " I am " + age; // сокращенная форма того сверху

// свойства
value = firstName.length; // получение длины строки
value = firstName[2]; // получение буквы по индексу

value = firstName[firstName.length - 1]; // получение последний буквы по индексу


// методы
const str = "test";
console.log(str.toUpperCase()); // делает все в большом регистре
console.log(str.toLowerCase()); // делает все в маленький регистре

value = firstName.concat(" ", lastName); //это конкатенация строк


let fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); //  поиск под строки, говорит нам с какой строки началось слово , в данном случае с 5


let fruits = "Some fruit";
console.log(fruits.indexOf("t", 5)); // поиск под строки и букв, говорит нам с какой строки началось слово или буква , также вторым аргументом можно указать с какой позиции искать


value = str.includes("e"); // ищет в букву или слово в переменной , в случае если есть возвращает нам true , если нет то false;


const logg = "Hello Salam";
console.log(logg.slice(6, 11)); // обрезать кусочек строки  , то есть с 6 буквы начинается Салам и заканчивается на 11 на +1 еще 11 типо

console.log(logg.substr(6, 5)); // начиная с 6 строки вырежет 5 букв


const salam = "Hello World";
console.log(salam.slice(6)); // начиная с 6 строки начинает вырезать 


const zamena = "Hello Idiot";
console.log(zamena.replace("Idiot", "Cleve boy")); // замена на другое слово



console.log(value);