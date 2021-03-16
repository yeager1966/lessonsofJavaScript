const btns = document.querySelectorAll("button");

btns[0].addEventListener("click", (e) => {
    if (!btns[1].classList.contains("red")) { // если нет такого класса , то мы добавляем его 
        btns[1].classList.add("red")
    } else {
        btns[1].classList.remove("red")
    }

    /* btns[1].classList.toggle("red") */
});