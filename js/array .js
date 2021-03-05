"use strict";

// массив 
let value;
const arr = [1, 2, 3, 4, 5];


console.log(value);


// свойства массива

console.log(arr.length); /* (СВОЙСТВА) количество символов в массиве , также добавляет еще один элемент к последнему, то есть если в массиве 4 элемента олн пишет что их 5*/
console.log(Array.isArray(arr)); //  проверка массива на то что массив ли ? 

// методы для массива
arr.pop(); // метод для массива , который удаляет последний символ
arr.shift(); // метод , удаляет первый элемент массива

arr.push(10); // добавляет в элемент в конец массива
arr.unshift(777); // добавляет элемент в начало массива

arr.indexOf(5); //  ищет в массиве такой элемент а именно число 5


arr.splice(1, 1); // начиная с первого индекса то есть с 2 , удалит 1 элемент , возвращает нам измененный массив
arr.splice(1, 2, "one", "xantares"); /* начиная с первого индекса то есть с 2 , удалит 2 элемент ,место них ставит два новых элемента которые мы указали возвращает нам измененный массив */
arr.splice(1, 0, "one", "xantares"); /* начиная с первого индекса то есть с 2 , не удалит ничего,туда просто ставит два новых элемента которые мы указали возвращает нам измененный массив */

value = arr.slice(0, 2); // начиная с нулегого индекса вырезал два элемента , делает копию массива

arr.reverse(); // переворачивает массив , изменяет исходный массив

arr.concat(arr); // конкатинирует два массива между собой , делает копию массива

value = "hello world".split(" "); // из строки массив



/* ПРИМЕРЫ ПЕРЕБОРА МАССИВА */

//forEach
//filter
//map - возвращает новый массив
//reduce - помогает разворачивает массив , или сделать из массив объект
// some/every
//sort
//find



const users = [{
        _id: "5cdce6ce338171bb473d2855",
        index: 0,
        isActive: false,
        balance: 2397.64,
        age: 39,
        name: "Lucile Finley",
        gender: "female",
        company: "ZOXY",
        email: "lucilefinley@zoxy.com",
        phone: "+1 (842) 566-3328",
        registered: "2015-07-12T09:39:03 -03:00"
    },
    {
        _id: "5cdce6ce0aa8d071fa4f4cc5",
        index: 1,
        isActive: true,
        balance: 2608.48,
        age: 33,
        name: "Woodward Grimes",
        gender: "male",
        company: "FORTEAN",
        email: "woodwardgrimes@fortean.com",
        phone: "+1 (960) 436-3138",
        registered: "2014-09-08T03:24:39 -03:00"
    },
    {
        _id: "5cdce6ce103de120d32d6fe4",
        index: 2,
        isActive: true,
        balance: 1699.99,
        age: 25,
        name: "Robinson Coleman",
        gender: "male",
        company: "GENMOM",
        email: "robinsoncoleman@genmom.com",
        phone: "+1 (852) 543-3171",
        registered: "2019-04-23T08:24:58 -03:00"
    },
    {
        _id: "5cdce6cebada7a418d8ccb3d",
        index: 3,
        isActive: true,
        balance: 2621.84,
        age: 25,
        name: "Austin Benton",
        gender: "male",
        company: "ZILIDIUM",
        email: "austinbenton@zilidium.com",
        phone: "+1 (977) 573-2627",
        registered: "2016-08-02T10:08:24 -03:00"
    },
    {
        _id: "5cdce6ced81fe99596d9cef5",
        index: 4,
        isActive: true,
        balance: 1297.31,
        age: 37,
        name: "Casandra Stout",
        gender: "female",
        company: "ANACHO",
        email: "casandrastout@anacho.com",
        phone: "+1 (929) 465-3804",
        registered: "2018-04-14T11:27:26 -03:00"
    },
    {
        _id: "5cdce6ce6c3ae6c4d6f39e88",
        index: 5,
        isActive: false,
        balance: 2165.49,
        age: 20,
        name: "Valencia Carrillo",
        gender: "male",
        company: "XEREX",
        email: "valenciacarrillo@xerex.com",
        phone: "+1 (977) 522-3378",
        registered: "2014-02-14T11:45:27 -02:00"
    }
];

//forEach

users.forEach((user, i, arr) => {
    console.log(user, i, arr);
});

// filter -- отфильтровать , вернет новый массив

const array = ["Something", "someone", 1, 25, 66, 1.5, true, false];
const newArray = array.filter(item => {
    if (isNaN(item)) {
        return true; // true  , false
    }
});
console.log(newArray);






const userLess30 = users.filter(user => user.age < 30);
console.log(userLess30);


const activeUsers = users.filter(user => user.isActive /*  === true) */ );
console.log(activeUsers);


// Map - позволяет нам преебрать массив и создать новый массив который был передан в callback (item, index, arrayExample1) (item - каждый элемент массива то есть 1 , 2  , 3 , 4 , 5) (i - номер по порядку , то есть 0 , 1 , 2 , 3 , 4) (arr - это ссылка на тот массив который перебераем) */

const a = [3, 5, 7];
let b = a.map((item, index) => {
    console.log(`Массив с индексов ${index} с элементом ${item}`);
    return item * 3; // return - возвращает новое значение и присваевает его в переменную b
});

console.log(b);

//////////////////////
const x = [];
x[0] = 5;
x[4] = 21;

let y = x.map((item) => {
    console.log(item);
    return item * 3; // return - возвращает новое значение и присваевает его в переменную b
});

console.log(y);




// const userName = users.map((user) => user.name);
// console.log(userName);
const usersName = users.map(user => ({
    name: user.name,
    age: user.age
}));
console.log(usersName);

// Reduce - развернуть массив , переобразовать массив в друг сущность 
const totalBalance = users.reduce((acc, user) => (acc += user.balance), 0);
// console.log(totalBalance);
const usersObj = users.reduce((acc, user) => {
    acc[user._id] = user;
    return acc;
}, {});
// console.log(usersObj);

//Some/Every
const isMale = users.some(user => user.gender === "male"); //есть ли хотя бы один мужчина
const isAllMale = users.every(user => user.gender === "male"); // проверяет каждый ли мужчина 
const isAll18 = users.every(user => user.age > 18);
// console.log(isAll18);


// Find - ищет среди объекта определенного человека

const user = users.find(user => user.name === "Valencia Carrillo");
console.log(user);

// Sort - сортирует массив , но изменяет исходный массив

const strArr = ["Denis", "Bill", "Anna"];
strArr.sort();
const numArr = [10, 7, 44, 32];
numArr.sort((prev, next) => prev - next); // сортировка чисел
users.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
console.log(users);
















const arrayExample1 = [1, 2, 3, 4, 5];

for (let i = 0; i < arrayExample1.length; i++) /* перебор элементов массива , свойства length позволяет переберать пока не закончиться элементы массива */ {

    console.log(arrayExample1[i]);


}
/////////////////////////////////////////////

for (let value of arrayExample1) {
    /* Это второй способ через метод of ( Но редко , часто используют только для массива ) Можно перебрать псевдомассив , также можно замутить остановку(break) или пропуск одного элемента(continue)*/
    console.log(value);
}
/////////////////////////////////////////////


arrayExample1.forEach(function (item, i, arrayExample1) {
    /* метод , тоже перебор , принимает три аргумента(item - каждый элемент массива то есть 1 , 2  , 3 , 4 , 5) (i - номер по порядку , то есть 0 , 1 , 2 , 3 , 4) (arr - это ссылка на тот массив который перебераем) */
    console.log(`${i}:${item} элементы внутри массива ${arrayExample1}`);
});

//////////////////////////////////////////////

// превращает строки который разделены например через запятую или точку в массив
const str = "Hellow , How are u?";
const products = str.split(" , ");
console.log(products);

// превращает массив в строчки 
const str2 = ("idiot, hello world");
const strings = str2.split(" , "); // тут и строчки получаем массив и опять с массива делаем строчку
/* strings.sort();// метод сортировки , сортирует все по алфавитному порядку*/
console.log(strings.join(";")); /*  .join() метод. В кавычки пишем с помощью чего будем разделять это может быть ,   ;   .   */

// отсортировка чисел 

const a = [1, 1000, 21, 30, 4];
a.sort(compareNum);
console.log(a);

function compareNum(a, b) {
    return a - b;
}
//