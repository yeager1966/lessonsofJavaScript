"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

/* const copy = obj; // Ссылку
copy.a = 10;
console.log(copy);
console.log(obj); */

///////////////////////////////////////////////////////////
function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
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




///////////////////////////////////////////////////////////

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
console.log(Object.assign(numbs, add)); // соеденить объекты

///////////////////////////////////////////////////////////

const newAdd = {
    d: 20,
    g: 17
};
const clone = Object.assign({}, newAdd); // соеденить объекты

clone.g = 20;

console.log(newAdd);
console.log(clone);

// МАССИВЫ(ССЫЛКИ , КОПИИ)


// копия массива
const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice(); // через метод oldArray.slice()

newArray[1] = "kalay zhagdai";
console.log(newArray);
console.log(oldArray);
// копия массива 


// оператор разварота для создание копии
const video = ["youtube", "vimeo", "rutube"],
    blogs = ["wordpress", "livejournal", "blogger"],
    internet = [...video, ...blogs, "vk", "facebook"]; // spread оператор разворота.Также для копии и для соеденение элементов

console.log(internet);

////////////////////////////////////


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);

}
const num = [2, 5, 7];

log(...num);

////////////////////////
const array = ["A" , "B" , "C"];
const newarray = [...array];

///////////////////////////
const q = {
    one: 1 , 
    two: 2
};

const newObj= {...q};
console.log(newObj);