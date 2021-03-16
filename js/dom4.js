const btn = document.querySelector("button");
const content = document.querySelector(".content");
const link = content.querySelector("a");
// старый способ - минус в том что нельхя повесить множество обработчиков на один элемент

/* 
btn.onclick = function () {
    alert("idiot");
} */

// Новый способ - можно повесить несколько обработчиков сразу
// e - объект события

btn.addEventListener("click", function (e) {
    console.log(e);

}); // принимает три аргумента , первый тип события , второй обработчик(функции) каждый обработчик принимает объект события event , третий(объект с настройками)


////////////////////////////////////
const btn2 = document.querySelector(".button2");
/* btn2.addEventListener("mouseenter", (e) => {
    e.target.remove();
}); */





let i = 0;
const deleteElement = (e) => {
    console.log("Было и не стало");
    i++;
    if (i == 1) {
        btn2.removeEventListener("click", deleteElement);
    }
};

btn2.addEventListener("click", deleteElement); // Сначало создается обработчик событий , выполняется внутри функция deleteElement , после того как i достигает 1 , обработчик событий удаляется

// ссылки и формы имеют свои встроенные события , ссылки например могут пересылать нас на другую страницу формы еще что то , и чтобы отменить их встроенные события мы используем preventDefault()

link.addEventListener("click", function (e) {
    e.preventDefault(); // метод
    console.log("click");
})

// при клике удаление

function deleted(e) {
    e.preventDefault(); // метод
    console.log("click")
};

link.removeEventListener("click", deleted);

// Стрелачная функция - this на нем не работает

/* btn.addEventListener("click", (e) => {
    console.log(e);
}); */




// Динамическая событие
const numbers = document.querySelector(".numbers");


btn.addEventListener("click", (e) => {
    const div = document.createElement("div");
    const newBtn = document.createElement("button");


    div.textContent = Math.random();
    newBtn.textContent = "VIRUS ATACK"


    numbers.append(div);
    div.append(newBtn); // новую кнопку в div , а div в нашем numbers
});

numbers.addEventListener("click", e => { // клик на весь контейнер
    console.dir(e.target);
    if (e.target.tagName === "BUTTON") {
        console.log("button clicked");
    }
});