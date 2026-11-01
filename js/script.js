'use strict';

let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?');
while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
  numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?');
}

const personalMovieDatabase = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

personalMovieDatabase.count = numberOfFilms;

// const a = prompt('Один из недавно просмотренных фильмов?', '');
// const b = prompt('На сколько оцените его?', '');
// const c = prompt('Один из недавно просмотренных фильмов?', '');
// const d = prompt('На сколько оцените его?', '');

// for (let i = 1; i < 2; i++) {

function rememberMyFilms() {
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
}

rememberMyFilms();

function countOfFilms() {
  if (personalMovieDatabase.count < 10) {
    alert('Просмотрено мало фильмов');
  } else if (
    personalMovieDatabase.count >= 10 &&
    personalMovieDatabase.count <= 30
  ) {
    alert('Вы классический зритель');
  } else if (personalMovieDatabase.count > 30) {
    alert('Вы киноман');
  } else {
    alert('Ошибка');
  }
}

countOfFilms();

function showMyDB() {
    if (personalMovieDatabase.privat != false) {
        console.log(personalMovieDatabase);
    }
}

showMyDB();


function writeYourGenres() {
    const genres = [];
    for (let i = 0; i <= 2; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
        genres[i] = genre;
    }
    console.log(genres);
}

writeYourGenres();

///// ***************************************************************************

// const str = 'banana';
// console.log(str.indexOf('a'));
// console.log(str.slice(1, 4));
// const ana = str.length;
// console.log(str.slice(ana, -4));
// console.log(str.substring(1, 4));
// console.log(str.substr(1, 3));

// const tst = '12.2px';
// console.log(parseInt(tst));

///// ***************************************************************************
