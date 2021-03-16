const btns = document.querySelectorAll("button"), // возвращает псевломассив (NodeList)
    wrapper = document.querySelector(".btn-block");




console.log(btns[0].classList.length); // узнать какие классы есть у данной кнопки
console.log(btns[0].classList.item(0)); //получить класс который распологается под определенным индексом , например у данный кнопки есть класс "blue some" , item(0) мы можем обратится к классу blue
console.log(btns[0].classList.add("red", "dddd")); // добавить класс
console.log(btns[0].classList.remove("blue")); // удалить класс
console.log(btns[0].classList.toggle("blue")); // toggle - если нет , то добавит. А если есть то уберет.


// проверить есть ли есть этот класс
if (btns[0].classList.contains("red")) {
    console.log("idiot");
}

//типо hamburgera
btns[0].addEventListener("click", (e) => {
    if (!btns[1].classList.contains("red")) { // если нет такого класса , то мы добавляем его 
        btns[1].classList.add("red");
    } else {
        btns[1].classList.remove("red");
    }

    /* btns[1].classList.toggle("red") */
});

//старая , не стоит использовать
console.log(btns[0].className);

// Делигирование событий - например на сайте много кнопок , мы хотим чтобы при клике на кнопку вызывалось одно и тоже событие. Мы берем и назначаем событие на родителя , а внутри мы будем проверять что мы кликнули

wrapper.addEventListener("click", (e) => {
    if (e.target && e.target.tagName === "BUTTON") {
        console.log("hello");
    }

    /* if (e.target && e.target.classList.contains("blue")) {
        console.log("idiot")
    } */

    /* if (e.target && e.target.matches("button.red")) {
        console.log("667")
    } */
});

const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);