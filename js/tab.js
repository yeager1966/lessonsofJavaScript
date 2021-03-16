"use strict";

document.addEventListener("DOMContentLoaded", () => {

    // TABS


    const tabs = document.querySelectorAll(".tabheader__item"),
        tabsContent = document.querySelectorAll(".tabcontent"),
        tabsParent = document.querySelector(".tabheader__items");

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add("hide");
            item.classList.remove("show", "fade");
        });

        tabs.forEach(item => {
            item.classList.remove("tabheader__item_active");

        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add("show", "fade");
        tabsContent[i].classList.remove("hide");
        tabs[i].classList.add("tabheader__item_active");

    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (e) => {
        const target = e.target;

        // проверка на то , что мы точно кликнули по tabheader__item
        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, i) => {
                // проверяем если пользователь кликнул по тому нашу элементу
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    // TIMER

    const deadline = '2021-03-21'; // конечный срок

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()), // разница в милисекундах
            days = Math.floor(t / (1000 * 60 * 60 * 24)), // в суках милисекунд
            hours = Math.floor((t / (1000 * 60 * 60) % 24)), // делим на 24 для того чтобы , получить остаток а именно часы , то есть остаток не должен быть больше чем 24 часа
            minutes = Math.floor((t / 1000 / 60) % 60), // делим на 60 , чтобы получить остаток , и остаток не должен быть больше 60 
            seconds = Math.floor((t / 1000) % 60);
        return {
            "total": t, // общее количество милисекунд
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    }


    function getZero(num) { // если цифра меньше 10 , то будет подставляться 0
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),

            timeInterval = setInterval(updateCLock, 1000);

        updateCLock();

        function updateCLock() {
            const t = getTimeRemaining(endtime);


            days.innerHTML = getZero(t.days);
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }


    setClock(".timer", deadline);



    // MODAL WINDOW

    const modalTrigger = document.querySelectorAll("[data-modal"),
        modal = document.querySelector(".modal"),
        modalCloseBtn = document.querySelector("[data-close]");




    function openModal() {
        /*  modal.classList.toggle("show");  Если нет , то добавит , а если есть то удалит*/
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden"; // Не дает нам вообще прокручивать страницу

        clearInterval(modalTimerId);
    }

    function closeModal() {
        /* modal.classList.toggle("show"); если нет , то добавит , а если есть то удалит */
        modal.classList.add("hide");
        modal.classList.remove("show");
        document.body.style.overflow = "";
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener("click", openModal);
    });

    modalCloseBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        const target = e.target;
        if (target && target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        // содержится ли класс шоу у нашего модального окна
        if (e.code === "Escape" && modal.classList.contains("show")) {
            closeModal();
        }
    });


    const modalTimerId = setTimeout(openModal, 5000);


    // scroll


    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener("scroll", showModalByScroll);
        }
    }
    window.addEventListener("scroll", showModalByScroll);


});