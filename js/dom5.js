// ВСПЫЛЫТИЕ И ПОГРУЖЕНИЕ СОБЫТИЙ , сначало идет погружение а потом всплытие , погружение по стандарту не ослеживается

// Тyт идет всплытие , после нажатие кнопки , всплывает сначало кнопка а потом наша обертка content
const btn = document.querySelector("button");
const content = document.querySelector(".content");


btn.addEventListener("click", e => {
    e.stopPropagation(); // событие сработает только на кнопке , не на обертке и не на body, но если кликнем и обертку то оно тоже там сработает
    console.log("BTN CLICKED")
});

content.addEventListener("click", r => {
    console.log("CONTENT CLICKED");
});

document.body.addEventListener("click", e => {
    console.log("BODY CLICKEd")
});



// Погружение - тут у нас сначало кликается body -> content -> btn

btn.addEventListener("click", e => {
    e.stopPropagation(); // событие сработает только на кнопке , не на обертке и не на body, но если кликнем и обертку то оно тоже там сработает
    console.log("BTN CLICKED")
});

content.addEventListener("click", r => {
    console.log("content clicked");
}, true);

document.body.addEventListener("click", e => {
    console.log("BODY CLICKEd")
}, true);