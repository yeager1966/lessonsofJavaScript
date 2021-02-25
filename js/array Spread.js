"use strict";

// копия объекта не изменяя основного (поверхнастная копия)
let obj1 = {
    name: "Denis",
};

let obj2 = {
    age: 20
};

let newObj = Object.assign({}, obj1, obj2); // поверхнастная копия
console.log(newObj);

// let newObj = Object.assign(obj1, obj2);
// console.log(newObj === obj1); // true

// глубокая копия объекта 
let object = {
    name: "Danil",
    lastname: "Dickout",
    age: 19,
    info: {
        job: "software-enginere of GOOGLE",
        wife: "Angelina"
    }
};

let objJson = JSON.stringify(object);
let newObject = JSON.parse(objJson); // глубокая копия 
// let newObject = JSON.parse(JSON.stringify(objJson)); // глубокая копия 
console.log(newObject);



// СДЕЛАТЬ ИЗ ОБЪЕКТА МАССИВ

let keys = Object.keys(object); // только ключи
console.log(keys);

let values = Object.values(object); // ключи и значение
console.log(values);

let entries = Object.entries(object); // массив массивов, с ключа и значениями
console.log(entries);



// из массива массивов  - делает объект
// let fromEntries = Object.fromEntries([["name" , "danil"] , ["age" , "19"]]);

let fromEntries = Object.fromEntries(entries);
console.log(fromEntries);




















let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = { // ключ - свойство
    a: 5,
    b: 1
};

/* const copy = obj; // Ссылку
copy.a = 10; // модифицируя наш изночальный объект мы модефицируем наш изночальный объект
console.log(copy);
console.log(obj);  */

///////////////////////////////////////////////////////////

/* Создания копии объекта( сам объект , массив , функции и т.д.) */
//  1) это способ поверхностной копии объекта

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy; // возвращаем наружу
}
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }

};
const newNumb = copy(numbers);

newNumb.a = 10;

console.log(newNumb);
console.log(numbers);




///////////////////////////////////////////////////////////

// соеденение объектов
const numbs = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }

};

const add = {
    d: 27,
    g: 13
};
console.log(Object.assign(numbs, add)); //(numbs - первый объект куда хотим все туда поместить , add - объект который надо соеденить ) соеденить объекты

///////////////////////////////////////////////////////////

const newAdd = {
    d: 20,
    g: 17
};
const clone = Object.assign({}, newAdd); //создает новый пустой объект и туда помещает остальные объекты 

clone.g = 20;

console.log(newAdd);
console.log(clone);

///////////////////////////////////////////////////////////
// МАССИВЫ(ССЫЛКИ , КОПИИ)


// Способ 1. Копия массива
const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice(); // через метод oldArray.slice()

newArray[1] = "kalay zhagdai";
console.log(newArray);
console.log(oldArray);

// Способ 2. Копия массива 

// оператор spread разварота для создание копии
const video = ["youtube", "vimeo", "rutube"],
    blogs = ["wordpress", "livejournal", "blogger"],
    internet = [...video, ...blogs, "vk", "facebook"]; // spread оператор разворота.Также для копии и для соеденение элементов

console.log(internet);

//////////////////////////////////////////


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);

}
const num = [2, 5, 7];

log(...num);

//////////////////////////////////////////
const array = ["A", "B", "C"];
const newarray = [...array];
console.log(newarray);


//////////////////////////////////////////

const q = {
    one: 1,
    two: 2
};

const newObj = {
    ...q
};
console.log(newObj);
///////////////////////////////////////////