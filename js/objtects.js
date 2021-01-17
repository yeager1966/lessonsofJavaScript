"use strict";
const objects = {
    name: "test", // name ключ , test значение 
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: " red "

    },
    makeTest: function () {
        console.log("Test");
    }

};

objects.makeTest();
console.log(objects.name);

// Деструктуризация
const {border , bg} = objects.colors;
console.log(border);




// delete objects.name;
// consol.log(objects);



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




for (let key in options) {
    if (typeof (options[key]) === "object") {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key] [i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }

}







const {border , bg} = options.color;
console.log(border);

console.log(Object.keys(options).length); // метод встроенный в js

////////////////////////////////////////////////////////////////////////////////






