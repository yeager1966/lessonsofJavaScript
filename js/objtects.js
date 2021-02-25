"use strict";

const user = {
    firstName: " Danil ",
    age: 19,
    isAdmin: true,
    email: "test@test.com",
    'user-addres': { // большой ключ
        city: "Almaty"
    },
    skills: ['html', 'css', 'js', 'react']
};

let value;

let prop = "skills"; // Создаем перемен с названием свойства объекта

value = user.firstName;
value = user['isAdmin']; // для большых ключей
value = user['user-addres'];
value = user['user-addres'].city;
/* value = user['user-addres']['city']; */ // Второй вариант

value = user[prop]; // подставляем переменную с названием объекта
value = user[prop][0];

// Перезаписать свойства в объект

user.firstName = "Ivan";
value = user.firstName; // Иван
user['user-addres'].city = "Kiev";


// Создаем новый не существующий объект внутри существующего 

user.plan = {};
user.plan.A = 10;
user.plan.B = 15;

value = user.plan;

console.log(user);
console.log(value);


////////////////////////////////////////////////////////////////////////////////
const options = {
    name: "esek",
    width: 1024,
    height: 1024,
    color: {
        border: "black",
        bg: " red "

    }

};


console.log(options["color"]["border"]);



// delete objects.name;
// consol.log(objects);

// Способ 1. Узнать количество свойств в объекте, благодаря итерации
let counter = 0;
//

for (let key in options) { // обозначаем все свойства именем key в объекте
    if (typeof (options[key]) === "object") { // если значение ключения будет объекта то будет перебор внутри перебора
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key] [i]}`); // до стучилась до i
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`); // если ключ не будет объектом то будет такое значение
        counter++;
    }

}


//Способ 2. Ключи нашего объекта
console.log(Object.keys(options).length); // метод встроенный в js , узнать количество ключей в объекте

/////////////////////////////////////////////////////////////////////////////////////


const objects = {
    name: "test", // name ключ , test значение 
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: " red "

    },
    makeTest: function () { // тут мы создали свой метод
        console.log("Test");
    }

};

objects.makeTest();
console.log(objects.name);






////////////////////////////////////////////////////////////////////////////////


/* 
Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.

Вопросы к этому заданию
Создать объект с полем product, равным ‘iphone’

Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’

Добавить поле details, которое будет содержать объект с полями model и color
 */


const obj = {
    product: "Iphone",
    price: "1000",
    currency: "dollar",
    detail: {
        model: "Xr",
        color: "white"
    }
};

// или
/* Создать объект с полем product, равным ‘iphone’ */

const item = {
    product: "iPhone"
};

/*  Добавить в объект поле price, равное 1000 и поле currency, равное ‘dolla */

item.price = 1000;
item.currency = "dollar";

/* Добавить поле details, которое будет содержать объект с полями model и color */
item.details = {};
item.details.model = "XR";
item.details.color = "Red";