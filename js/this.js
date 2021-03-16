"use strict";

//this - это контекст вызова 
// пример ProCode IT School
const obj1 = {
    a: 10,
    baseFunct: function () {
        console.log(this); // ссылает на этот объект , этот  this , не функционал объекта , а функционал function
    },
    arrowFunct: () => {
        console.log(this); // из-за того что это стрелочная функция , он ссылается на глобальный объект window
    }

};

obj1.baseFunct();

// Пример с объектом конструкторам 

const obj2 = new function () {
    this.a = 10,

        this.baseFunct = function () {
            console.log("base", this); // 
        },
        this.arrowFunct = () => {
            console.log("arrow", this); // 
        },

        console.log("obj", this),

        setTimeout(() => {
            console.log("timeout", this); // Работает
        }, 300);

    obj2.baseFunct();
    obj2.arrowFunct();

    const el = document.querySelector("#test");
    el.addEventListener("click", (ev) => { // тут указывает на этот объект
        console.log("click", this);
        console.log(ev.target);
    });

}


// Асинхронный функции по типу(пример:setTimeout) , всегда ломают this , но стрелочная функция тут видит this


const el = document.querySelector("#test");
el.addEventListener("click", (ev) => { // тут со стрелочной функция указывает на window
    console.log("click", this);
    console.log(ev.target);
});







/// ПРИМЕРЫ С ЮТУБА
document.querySelector(".b-1").onclick = function () { // якобы со страницы берем параграф
    console.log(this); // В данном случае this , указыавет на ту кнопку , на которую мы нажимаем
    this.style.background = "orange"; // При нажатии на кнопку , у нас будет меняться ее цвет фона на orange


};

///////////////////
function f1() {
    this.style.background = "orange"; // ТУТ THIS УКАЗЫВАЕТ НА ТОТ ЭЛЕМЕНТ НА КОТОРОМ ПРОИЗОШЛО СОБЫТИЕ
}

let p = document.querySelectorAll("p"); // Якобы со страницы берем параграф
p.forEach((item, i) => {
    p[i].onclick = f1;
});
/////////////////////

// ()=>{}; При использовании стрелочной функции this указывает на окно window

// Классы пишутся в отдельных файлах , и там только классы

class u2 {
    constructor(model) {
        this.model = model;
    }
}



// ПРИМЕРЫ С КНИГ
// 1) Обычная функция : this = window , но если use strict - undefined
function getThis(a, b) {
    console.log(this);

    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
getThis(4, 5);

// 2) Контекст у методов объекта эта будет сам объект

const object = {
    a: 20,
    b: 15,
    sum: function () {
        function shout() {
            console.log(this);
        }
        shout();
    }
};

object.sum();


const prod1 = {
    name: "intel",
    price: 100,
    getPrice: function () {
        console.log(this.price); /* Здесь во время выполнения кода prod1.getPrice() значением this будет являться prod1 (ссылка на объект prod1). */
    },
    info: {
        information: ["2,7ghz"],
        getInfo: function () {
            console.log(this);
        },
    },
};
prod1.getPrice();
prod1.info.getInfo();


//////////////////////////////////////////
function getPrice() {
    console.log(this.price);
}


const product = {
    name: "intel",
    price: 100,
    getPrice,
    info: {
        information: ["2,7ghz"],
        getInfo: function () {
            console.log(this);
        },
    },
};
product.getPrice();
// prod1.info.getInfo();

const product2 = {
    name: "AMD",
    price: 50,
    getPrice,
};

product2.getPrice();

////////////////////////////////////////////////////////////////

function getPrice(currency = "$") {
    console.log(currency + this.price);
    return this;
}

function getName() {
    console.log(this.name);
    return this;
}


const product = {
    name: "intel",
    price: 100,
    getPrice,
    getName,
    info: {
        information: ["2,7ghz"],
        getInfo: function () {
            console.log(this);
        },
    },
};
product.getPrice();
product.getName();
// prod1.info.getInfo();
product.info.getInfo();


const product2 = {
    name: "AMD",
    price: 50,
    getPrice,
};

product2.getPrice();
product2.getName = product.getName;

product2.getName();



/////////////////////

let str = "Hello World";
const reverseStr = str
    .split("") // ["He" , "e" , "l" , "l" ....]
    .reverse() // ["d" , "l" ...]
    .join(""); //"dlrow olleH"

console.log(reverseStr);

const prod3 = {
    name: "ARM",
    price: 200,
    // getPrice,
    // getName,
};

getPrice.call(prod3, "$");
// prod3
//     .getName() //prod3
//     .getPrice(); // prod3.getPrice()