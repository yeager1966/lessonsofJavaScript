"use strict";

let str = "some";
let strNew = new (str); // через new можно преоброзовать в объект 

console.log(typeof(str));
console.log(typeof(strNew));


console.dir([1,2,3]);


////////////////// СТАРЫЙ ФОРМАТ
const soldier = {
    health: 200,
    armor: 100,
    sayHello: function(){
        console.log("Hello");
    }
};

const John = {
    health: 100
};

John.__proto__ = soldier;
console.log(John.armor);
John.sayHello();
///////////////// СТАРЫЙ ФОРМАТ

////////// НОВЫЙ ФОРМАТ
const warrior = {
    health: 200,
    armor: 100,
    sayHello: function(){
        console.log("Hello");
    }
};
const Reiner = Object.create(warrior);

/* const Reiner = {
    health: 100
}; */



Object.setPrototypeOf(Reiner , warrior);  /* ТОЖЕ КАК ВАРИАНТ*/




/* console.log(Reiner.armor); */
Reiner.sayHello();

////////// НОВЫЙ ФОРМАТ