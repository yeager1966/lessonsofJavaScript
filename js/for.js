// циклы

// while , do while , for , for of , for in


let i = 50;

while (i <= 55) { // пока здесь тру , тут будет выполнятся 
    console.log(i);
    i++;
}
////////////////////////////////////////////////////////////////////////////////
do {
    console.log(c);
    c++;
} while (c <= 55);

///////////////////////////////////////////////////////////////////////////////
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        continue; // пропускает итерацию
        /*  break; */ // прерывает итерацию цикла , то есть тут он останавливается на 5
    }
    console.log(i);
}

///////////////////////////////////////////////////////////////////////////////
let str = "Hello";
let res = "";
for (let i = 0; i < str.length; i++) {
    /* console.log(str[i]); */ // дает доступ каждому символу
    /* console.log(str[i] + "!");  */
    res += str[i];
}
console.log(res);

///////////////////////////////////////////////////////////////////////////////
let colors = ["white", "yellow", "red"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]); // он мне предоставил их как список 
    colors[i] = colors[i].toUpperCase;
}
/* console.log(colors); */
///////////////////////////////////////////////////////////////////////////////
const users = [{
        name: "den",
        age: 30
    },
    {
        name: "oleg",
        age: 18
    },
    {
        name: "olzhas",
        age: 17
    },
    {
        name: "aslan",
        age: 18
    },
];

const usersObj = {

};




for (let i = 0; i < users.length; i++) {
    /* console.log(users[i].name);
    console.log(users[i].age); */
    usersObj[users[i].name] = users[i]; // то есть в пустом объекте создасться ключи с именами , а их значениями будут name: 'den', age: 30 
}
console.log(usersObj);

///////////////////////////////////////////////////////////////////////////////



let b = 10;
for (let i = 1; i <= 8; i++) {
    console.log("i=" + i); // это количество на сколько раз ты будешь ее увеличивать 
    b++;
    console.log("b=" + b);

}

///////////////////////////////////////////////////////////////////////////////

for (let i = 1; i < 0; i++) { // это бесконечный цикл
    console.log("i=" + i);
}

///////////////////////////////////////////////////////////////////////////////


for (let i = 1; i < 10; i++) { // можно прервать на 6
    if (i == 6) {
        break;
    }
    console.log("i=" + i);
}

///////////////////////////////////////////////////////////////////////////////

for (let i = 1; i < 10; i++) { // можно прервать на 6
    if (i == 6) {
        continue; // 6 пропускает 
    }
    console.log("i=" + i);
}


// for in - нужен для перебора объекта

const user = {
    name: "Adil",
    age: 77
};

for (let key in user) {
    console.log("ключ=" + key);
    console.log("Значение=" + user[key]);
}

// for of - для массива

const array = [{
        name: "den",
        age: 30
    },
    {
        name: "oleg",
        age: 18
    },
    {
        name: "olzhas",
        age: 17
    },
    {
        name: "aslan",
        age: 18
    },
];

for (let value of array) {
    console.log(value);
}


/////////////////////////////////////
/* На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
будут в верхнем регистре. Использовать for или while. */
let str = 'i am in the easycode';
let res = '';

for (let i = 0; i < str.length; i++) {
  if (i === 0 || str[i - 1] === ' ') {
    res += str[i].toUpperCase();
  } else {
    res += str[i];
  }
}

console.log(res);
/* Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд). */

let str = 'tseb eht ma i';
let res = '';

for (let i = str.length; i--;) {
  res = res + str[i];
}

console.log(res);
/* Факториал числа - произведение всех натуральных чисел от 1 до n
включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for. */

let res = 1;

for (let i = 1; i <= 10; i++) {
  res *= i;
}

/* На основе строки “JavaScript is a pretty good language” сделать новую строку,
где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for. */

let str = 'JavaScript is a pretty good language';
let res = '';

for (let i = 0; i < str.length; i++) {
  if (i === 0 || str[i - 1] === ' ') {
    res += str[i].toUpperCase();
  } else if (str[i] !== ' '){
    res += str[i];
  }
}

console.log(res);

/* Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
 */


let arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let num of arr) {
  if (num % 2) {
    console.log(num);
  }
}


/* Дан объект:
let list = {
name: ‘denis’,
work: ‘easycode’,
age: 29
}
Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
 */

 
let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
  };
  
  for (let key in list) {
    if (typeof list[key] === 'string') {
      list[key] = list[key].toUpperCase();
    }
  }
  
console.log(list);

const ol=1;

