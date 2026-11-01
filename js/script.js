'use strict';

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?');

const personalMovieDatabase = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

 personalMovieDatabase.count = numberOfFilms;

// const a = prompt('Один из недавно просмотренных фильмов?', '');
// const b = prompt('На сколько оцените его?', '');
// const c = prompt('Один из недавно просмотренных фильмов?', '');
// const d = prompt('На сколько оцените его?', '');

// for (let i = 1; i < 2; i++) {
let i = 0;
while (i < numberOfFilms) {
    const a = prompt('Один из недавно просмотренных фильмов?', '');
    const b = prompt('На сколько оцените его?', '');
    if (a === '' || a === null || a.length > 50) {
        alert('Введите правильное значение!');
        continue;
    }
    let strA = '' + a;
    i++;
    personalMovieDatabase.movies[strA] = b;
}

if (personalMovieDatabase.count < 10) {
    alert('Просмотрено мало фильмов');
} else if (personalMovieDatabase.count >= 10 && personalMovieDatabase.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDatabase.count > 30) {
    alert('Вы киноман');
} else {
    alert('Ошибка');
}

console.log(personalMovieDatabase);