// Деструктуризация - разбить объект(объекты , массивы)


// ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТА
const user = {
    firstName: "Danil",
    lastName: "Dickout",
    // age = 25
    info: {
        work: "Racuten",
        skills: ["HTML", "CSS", "JS", "BOOTSTRAP", "AJAX"]
    }
};

const {
    firstName,
    lastName,
    age = 30
} = user;

const {
    info: {
        work,
        skills
    }
} = user;

// : - если есть уже значение , а мы просто хотим его перемиеновать 
// =  - если нету значение

// console.log(firstName: name, lastName: idiot, age = 30);
console.log(firstName, lastName);
console.log(skills, work);

/////////////////
// ДЕСТРУКТУРИЗАЦИЯ МАССИВА


const colors = ["white", " red ", "pink", "black"];
const [w, r, p, b] = colors;
// const [w, r, p, b, green = "green"] = colors;
console.log(w, r, p, b);



const names = ["denis", "oleg", "zhanibek", "didar"];
const [, name2, name3, name4] = names; // , пропуск имени
console.log(name2, name3);



const array = ["Hello World", ["Oleg", "IP"]]; // Вложенный массив
const [, [name1, ip1]] = array;
console.log(name1, ip1);



//////// глубокая копия массива
const arrayExample1 = ["Hello World", ["Oleg", "IP"], {
    login: "bbe",
    password: "ggg"
}];

let newObject = JSON.parse(JSON.stringify(arrayExample1));
console.log(newObject);
//////////////////



//rest - остаток от массива или копирование массива

// получить остаток от массива 
const names1 = ["denis", "oleg", "zhanibek", "didar"];
const [name1, ...otherNames] = names1; // otheNames - массив из оставшихся элментов
console.log(name1, otherNames);



// получить копию от массива
const names2 = ["eldar", "vadim", "ali", "olzhas"];
// const [...newNames] = names; // Spread
const newNames = [...names2]; // Это не глубокое копирование , Spread
console.log(newNames);
// console.log(...newNames); // выведит не как массив , а просто через запятые


const frontEnd = ["html", "css", "sass", "js", "vue", "react"];
const backEnd = ["php", "nodeJs", "mySQL"];


const FullStack = ["java", ...frontEnd, ...backEnd]; // Также SPREAD ,  но тут мы объядинили два массива 
console.log(FullStack);




const user1 = {
    firstName: "Danil",
    lastName: "Dickout",
    // age = 25
    info: {
        work: "Racuten",
        skills: ["HTML", "CSS", "JS", "BOOTSTRAP", "AJAX"]
    }
};


const newUser = {
    ...user1
};
// console.log(newUser);

const {
    info: {
        skills: [H, C, J, B, A] // vue , react стали переменнами
    }
} = newUser;

console.log(H, C);







// FUNCTION SPREAD
const person = {
    firstName: "Danil",
    lastName: "Dickout",
    // age = 25
    info: {
        work: "Racuten",
        skills: ["HTML", "CSS", "JS", "BOOTSTRAP", "AJAX"]
    }
};

function myPerson({
    firstName,
    lastName
}) { // чтобы вытянуть элементы с объекта , мы можем передать их в аргумент
    console.log(firstName, lastName);
}

myPerson(person);



/* function myPerson({ firstName,lastName} = person) { // чтобы вытянуть элементы с объекта , мы можем передать их в аргумент
    console.log(firstName, lastName);
}

myPerson(); */


function myPerson({
    firstName = "IDIOT",
    lastName = "Bot",
    info: {
        skills
    } = {},
} = person) { // чтобы вытянуть элементы с объекта , мы можем передать их в аргумент
    console.log(skills);
}

myPerson();

// Получить все аргументы внутри функции

function foo(x, y, ...others) {
    console.log(arguments);
    const [...args] = arguments;
    console.log(args);
    console.log(others);
}
foo(1, 2, "a", "b");

// получаем данные ввиде массива

const numbers = [55, 66, 77];

function foo2(x, y, z) {
    console.log(x, y, z);
}

// foo2(numbers[0], numbers[1] , numbers[2]);
foo2(...numbers);


//////

const numbers1 = [55, 66, 77];

function foo3(x, y, z) {
    return x * y * z;
}

let value = foo3(...numbers1);
console.log(value);






/* Как видно, свойства options.title, options.width и options.height автоматически присвоились соответствующим переменным. */

let dist = {
    title: "Меню",
    width: 100,
    height: 200
};

let {
    title,
    width,
    height
} = dist;

alert(title); // Меню
alert(width); // 100
alert(height); // 200


/* const {border , bg} = objects.colors;
console.log(border); */