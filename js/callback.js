"use strict";
// функции высшего порядка - это функции который принимают в качество второго аргумента, вторую функцию или возвращают другие функции

/* Аналог метода мэп, он возвращает новый массив */


function first(y) {
    console.log(1);
    y();
}

function second(a, b) {
    console.log(a * b);
}
first(function () {
    console.log(100 * 4);
});














const arr = ["Denis", "Den", "Olzhas", "Oleg"];
// [ 5  , 3 , 6 ,4]

let newArr = [];
for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].length);
}
console.log(newArr);

let newArr2 = [];

for (let i = 0; i < arr.length; i++) {
    newArr2.push(arr[i].toUpperCase());
}
//////////////////////////////////////////////  ВТОРОЙ ВАРИАНТ ЭТОГО СВЕРХУ


const names = ["Denis", "Den", "Olzhas", "Oleg"];

function mapArray(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]));
    }
    return res;
}


function nameLength(el) { // callback function
    console.log(el);
    return el.length;

}

function nameToUpperCase(el) {
    return el.toUpperCase();
}


const result = mapArray(names, nameLength);
const result2 = mapArray(names, nameToUpperCase);
console.log(result);
console.log(result2);

/////////////////////////////////////////////////////////////////////////]



function greeting(firstname) {
    return function (lastname) {
        return `Hello , ${firstname} ${lastname}`;
    };
}
/* const testGreeting = greeting("Denis");
const fullname = testGreeting("Mescheryakov"); */
const fullname = greeting("Denis")("Malikov");
console.log(fullname);



/////////////////////////////////////////////////////////////////////////

function question(job) {
    if (job === "developer") {
        return function (name) {
            return `${name} , что такое JS?`;
        };
    } else if (job === "teacher") {
        return function (name) {
            return `${name} , какой предмет вы препадаете?`;
        };
    }
}

function question(job) {
    const Dictionary = {
        developer: "Что такое Js?",
        teacher: "Какой предмет вы ведете?"
    };


    return function (name) {
        return `${name} , ${Dictionary[job]}`;
    };
}




const developerQuestion = question("developer");
console.log(developerQuestion("Denis"));








/////////////////////////////////////////////////////////////////////////


console.log(newArr2);
// callback это функция которая должна будет выполнена , как другая фунция завершит свое выполнение
function first() {
    setTimeout(function () {
        // Do something
        console.log(1);
    }, 500); // 500 милисекунд задержка
}

function second() {
    console.log(2);
}
first();
second();

/////////////////////////////////////////////
function learnJs(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback(); // вызываем callback
}

/* learnJs("JavaScript" , function() { // второй аргумент это анонимная функция , второй раз к анонимной функции нельзя обратиться
console.log("I finished this lesson");
}); */


function done() {
    console.log("Я прошел этот урок!");
}

learnJs("Python", done);

/////////////////////////////////////////////

function ask(question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

ask(
    "Вы согласны?",
    function () {
        alert("Вы согласились.");
    },
    function () {
        alert("Вы отменили выполнение.");
    }
);


/////////////////////////////////////////////