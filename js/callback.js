"use strict";
// callback это функция которая должна будет выполнена , как другая фунция завершит свое выполнение
function first () { 
    setTimeout(function(){
        // Do something
        console.log(1);
    }, 500); // 500 милисекунд задержка
}

function second () {
    console.log(2);
}
first();
second();

/////////////////////////////////////////////
function learnJs(lang , callback){
    console.log(`Я учу: ${lang}`);
    callback();
}

/* learnJs("JavaScript" , function() { // второй аргумент это анонимная функция , второй раз к анонимной функции нельзя обратиться
console.log("I finished this lesson");
}); */


function done (){
    console.log("Я прошел этот урок!");
}

learnJs("Python" , done);

/////////////////////////////////////////////
