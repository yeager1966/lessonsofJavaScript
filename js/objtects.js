"use strict";






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
console.log(Object.keys(options).length); // метод встроенный в js

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

// Деструктуризация

/* Как видно, свойства options.title, options.width и options.height автоматически присвоились соответствующим переменным. */

let dist = {
  title: "Меню",
  width: 100,
  height: 200
};

let {title, width, height} = dist;

alert(title);  // Меню
alert(width);  // 100
alert(height); // 200


/* const {border , bg} = objects.colors;
console.log(border); */







////////////////////////////////////////////////////////////////////////////////






