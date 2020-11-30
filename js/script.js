let moviesCount     = prompt("How many films do you watch?", "0"),
    moviesWatched   = prompt("One of the last movies you wathced?", ""),
    movieRate       = prompt("How did you rate it?", "");

let personalMovieDB = {
    count  : moviesCount,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

personalMovieDB.movies[moviesWatched] = movieRate;

console.log(personalMovieDB);
