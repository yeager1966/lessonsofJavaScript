"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms, // count тип как количество
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) { // 0 и 1 раз выполниться третий раз не будет , благодаря 2
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените этот фильм?');
    
    if (a != null && b != null && a != "" && b !="" && a.length < 50) { 
        personalMovieDB.movies[a] = b; // a свойтсва объекта , b значение объекта
        console.log("done");
    } else { 
        console.log("eror");
        i--; // опять возвращает его назад , на вопросы
    }
 
    
}


if (personalMovieDB.count < 10) { 
    console.log("Просмотрено довольно мало фильмов"); 
} else if (personalMovieDB >= 10 && personalMovieDB.count < 30 ) { 
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >=30) { 
    console.log("Вы киноман");
} else {
    console.log("Eror");
}

console.log(personalMovieDB);