/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll(".promo__adv"),
        poster = document.querySelector(".promo__bg"),
        genre = poster.querySelector(".promo__genre"),
        movieList = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector(".add"),
        addInput = addForm.querySelector(".adding__input"),
        checkbox = addForm.querySelector('[type="checkbox"]');


    addForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const favorite = checkbox.checked; //.checked отмечена
        if (favorite) {
            alert("Фильм добавлен в избранные");
        }


        let newFilm = addInput.value;
        if (newFilm) { // не пустая строка , текст это не пустая строка значит не фолсс

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0 , 22)}...`

            }


            movieDB.movies.push(newFilm); // пушим в массив

            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }

        e.target.reset();

    });



    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    deleteAdv(adv);







    const makeChanges = () => {
        genre.textContent = "Драма";

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
    makeChanges();



    const sortArr = (arr) => {
        arr.sort();
    }



    function createMovieList(films, parent) {
        sortArr(movieDB.movies);
        parent.innerHTML = ""; // очистка элемента


        films.forEach((film, i) => {
            parent.innerHTML += `
              <li class="promo__interactive-item">${i +1}) ${film}
                <div class="delete"></div>
              </li>
          `;
        });


        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener("click", () => {
                btn.parentElement.remove(); // удаляем с родителем вместе
                movieDB.movies.splice(i, 1); // вырезаем элемент, i - это номер начиная с какого нужно будет вырезать и количество элементов
                createMovieList(movieDB.movies, movieList); // рекурсия
            });
        });
    }

    createMovieList(movieDB.movies, movieList)

    /* console.log(poster.innerHTML); */
});