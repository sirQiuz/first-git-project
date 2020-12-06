let moviesCount     = +prompt("How many films do you watch?", ""),
    moviesWatched   = "",
    movieRate       = "",
    message         =  "";
let personalMovieDB = {
    count  : moviesCount,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};
if (moviesCount > 0) {
    for(let i = 0; i < moviesCount; i++){
        moviesWatched = prompt("One of the last movies you wathced?", ""),
        movieRate     = prompt("How did you rate it?", "");
        
        if( moviesWatched != null && movieRate != null && moviesWatched != '' && movieRate != '' && moviesWatched.length != 0 && movieRate.length != 0 && moviesWatched.length < 50 && movieRate.length < 50 ){
            personalMovieDB.movies[moviesWatched] = movieRate; 
            console.log('done');           
        } else {
            console.log('error');
            i--;
        }
    }
} else {
    do {
        moviesCount = +prompt("How many films do you watch?", "");
    } while(moviesCount < 1);
}

if (moviesCount < 10) {
    message = "Few movies watched";
} else if (moviesCount > 10 && moviesCount < 30){
    message = "You are a classic spectator";
} else {
    message = "You are moviegoer";
}

console.log(message);
console.log(personalMovieDB);

