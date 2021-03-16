'use strict';


const box = document.querySelector(".box");

const width = box.clientWidth; // получили ширину , это без учета прокрутки, с учетом падингов
const height = box.clientHeight; // получили высоту , это без учета прокрутки , с учетом падингов

const widthScroll = box.offsetWidth; // получили ширину , с учетом прокрутки , которые установлены в css
const heightScroll = box.offsetHeight; // получили высоту , с учетом прокрутки , которые установлены в css

const inScrollWidth = box.scrollWidth; // получили ширину scroll , с элементами внутри
const inScrollHeight = box.scrollHeight; // получили высоту scroll , с элементами внутри



console.log(width, height);
console.log(widthScroll, heightScroll);
console.log(inScrollWidth, inScrollHeight);

const btn = document.querySelector("button");


btn.addEventListener("click", (e) => {
    /* const target = e.target;

    // то есть при клике на кнопку , у нас на странице этот блок раскрывается

    if (target.tagName === "BUTTON") {
        box.style.height = box.scrollHeight + "px";
    } */

    console.log(box.scrollTop);
});


console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);


const style = window.getComputedStyle(box); // получить все стили , просто получить и все , они не измнеяемы 


console.log(style.display);


document.documentElement.scrollTop = 0; // узнать сколько ты скролил 

window.scrollBy(0, 400);
window.scrollTo(0, 400);