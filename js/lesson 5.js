const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {  // объект 
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените этот фильм?'),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените этот фильм?');


    personalMovieDB.movies[a]=b;
    personalMovieDB.movies[c]=d;

    console.log(personalMovieDB);
 