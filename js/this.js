function getThis() {
    console.log(this);
}
// getThis();
// console.log(window.getThis);

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