// console.log(document.head); // обращение к head в HTML файле
// console.log(document.body); // обращение к body в HTML файле
// console.log(document.documentElement); // обращение к head в HTML файле
// console.log(document.body.childNodes); // обращение к узлам(нодам) в HTML файле , возвращает нам с пробелами по типу Text
// console.log(document.body.firstChild); // обращение к первомув HTML файле
// console.log(document.body.lastChild); // обращение к последнему в HTML файле
// console.log(document.body.lastElementChild); // обращение к последнему в HTML файле

// console.log(document.querySelector("#current").parentNode); // получение родителя в котором находиться наша кнопка
// // console.log(document.querySelector("#current").parentElement); // УЛУЧШЕННЫЙ ВАРИАНТ ВВЕрхнего

// console.log(document.querySelector("#current").parentNode.parentNode);

// console.log(document.querySelector('[data-current="3"]').nextSibling); //.nextSibling получение следующего элемента на странице

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); //.nextSibling получение через 2 элемента на странице


// console.log(document.body.childNodes); // обращение к узлам в HTML файле

for (let node of document.body.childNodes) {
    if (node.nodeName == "#text") {
        continue;
    }
    console.log(node);
}