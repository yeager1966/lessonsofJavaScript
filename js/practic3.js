/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/






"use strict";

let numberOfFilms;


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) { // пока наш пользователь отменяет или оставляет пустую строку
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    }
}
start();

//////////////////////////////////////////////////////////////////////////

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


//////////////////////////////////////////////////////////////////////////

function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените этот фильм?');
    
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("eror");
            i--;
        }
    }
}

rememberMyFilms();
// null - отмена 

//////////////////////////////////////////////////////////////////////////

function detecPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Eror");
    }
}

detecPersonalLevel();

//////////////////////////////////////////////////////////////////////////

function showMyDB () {
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    } 

}
showMyDB(personalMovieDB.privat);


/* function showMyDB (hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat); */



//////////////////////////////////////////////////////////////////////////

function writeYourGenres(){
    for (let  i = 1 ; i <= 3 ; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre; // свойства в [] , genre значение объекта , так как мы пишем все ответы в массив то -1 делаем чтобы I начиналась с 0
    
    }
}
writeYourGenres();


////////////////////////////////////////////////////////////////////////// 
