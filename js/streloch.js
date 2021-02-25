const plus = (x, y) => x + y; // у стрелочных функции нету контекста this , также arguments , а у обычной функции есть
const plusRes = plus(1, 2);
console.log(plusRes);



const withoutArgs = () => console.log("Hello World");
const singleArg = x => x * 2;
const moreActions = (a, b) => {
    a = a * 2;
    b = b * 3;
    return a + b;

};

console.log(moreActions(2, 2));

const returnObj = (str = "") => { // Возвращаем с функции объект
    return {
        value: str,
        length: str.length,
    };
};

console.log(returnObj("Hello idiot"));

function plusFoo(x, y) {
    console.log(arguments);
    return x + y;
}
plusFoo(1, 2, 3, 4, "hello");


const obj = {
    firstname: "Feb",
    getFirstName() {
        console.log(this); // указывает на наш объект
    },
    getAgeArrow: null,
    getAge() {
        this.getAgeArrow = () => console.log(this);
    }
};
obj.getAge();
obj.getAgeArrow();