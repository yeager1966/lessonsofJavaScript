"use strict";

function User(name, age) { // создаем шаблон объекта
    this.name = name;
    this.age = age;
    this.human = true;

    this.hello = function () { // меетод
        console.log(`Hello ${this.name}`);
    };


}


User.prototype.exit = function () { // создание метода
    console.log(`Пользователь ${this.name} ушел`);
};


const ivan = new User("Ivan", 28);
const alex = new User("Alex", 20);

ivan.exit();



ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);