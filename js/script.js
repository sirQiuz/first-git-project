let moviesCount,
    moviesWatched   = "",
    movieRate       = 0,
    message         =  "";

function start(){
    moviesCount = +prompt("How many films do you watch?", "");

    while(moviesCount == '' || moviesCount == null || isNaN(moviesCount)){
        moviesCount = +prompt("How many films do you watch?", "");
    }
}start();
    
let personalMovieDB = {
    count  : moviesCount,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

function rememberMyMovies(){
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
}rememberMyMovies();

function detectMoviegoer(){
    if (moviesCount < 10) {
        message = "Few movies watched";
    } else if (moviesCount > 10 && moviesCount < 30){
        message = "You are a classic spectator";
    } else {
        message = "You are moviegoer";
    }
}detectMoviegoer();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    } else{
        console.log("Sorry, DB is privat.")
    }
}showMyDB(personalMovieDB['privat']);

function writeYourGenres(){
    let question = "";

    for(let i = 0; i < 3; i++){
        question = prompt(`What is yout favorite genre number ${i+1}?`, "");
        personalMovieDB.genres[i] = question;
    }
}writeYourGenres();



console.log(message);

