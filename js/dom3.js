// манипуляции с методами DOM

const title1 = document.querySelector("h1");
const div = document.querySelector("div");
const content = document.querySelector(".content")


title1.innerHTML = "<span>text</span>" // если присвоить пустую строку то содержимое будет удалено , но опасно
title1.textContent = "<span>text</span>"; // перезапишутся в виде текста
title1.insertAdjacentHTML("beforebegin", "<h2>H2 TITLE</h2>")

// Создание элемента 

const head3 = document.createElement("h3");
head3.textContent = "kak dela?";
head3.classList.add("predzav");
head3.style.color = "red";
console.log(head3);
content.append(head3);



//////////////////
const fragment = document.createDocumentFragment();
const colors = ["red", "white", "black"];

colors.forEach((color) => {
    const item = document.createElement("div");
    item.classList.add(`bg-${color}`);
    item.textContent = color;
    fragment.appendChild(item);

});

document.body.appendChild(fragment);



/// удаление элементов