'use strict';

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i <= 1; i++) {
    let lastFilm = prompt("Один из последних просмотренных фильмов?"),
        lastFilmRate = prompt("На сколько оцените его?");
        if (lastFilm != null && lastFilmRate != null && lastFilm != '' && lastFilmRate != '' && lastFilm.length < 50 && typeof(lastFilmRate) === 'number' ) {
            personalMovieDB.movies[lastFilm] = lastFilmRate;
            console.log('done');
        } else if (lastFilm === null || lastFilmRate === null) {
            break;
        } else {
            console.log('error');
            i--;
        }
}

console.log(personalMovieDB);

let question;

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        question = prompt(`Ваш любимый жанр под номером ${i + 1}?`, '');
        personalMovieDB.genres[i] = question;
    }
    console.log(personalMovieDB);
}

writeYourGenres();
