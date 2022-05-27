'use strict';

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
console.log(numberOfFilms);

let personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let lastFilm = prompt("Один из последних просмотренных фильмов?");
let lastFilmRate = prompt("На сколько оцените его?");
let secondLastFilm = prompt("Один из последних просмотренных фильмов?");
let secondLastFilmRate = prompt("На сколько оцените его?");

personaMovieDB.movies[lastFilm] = lastFilmRate;
personaMovieDB.movies[secondLastFilm] = secondLastFilmRate;

console.log(personaMovieDB);
