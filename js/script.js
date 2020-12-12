let moviesWatched   = "",
    movieRate       = 0,
    message         =  "";
    
let personalMovieDB = {
    count  : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start:              function (){
                            personalMovieDB.count = +prompt("How many films do you watch?", "");
                
                            while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
                                personalMovieDB.count = +prompt("How many films do you watch?", "");
                            }
                        },
    rememberMyMovies:   function (){
                            for(let i = 0; i < personalMovieDB.count; i++){
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
                        },
    detectMoviegoer:    function (){
                            if (personalMovieDB.count < 10) {
                                message = "Few movies watched";
                            } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
                                message = "You are a classic spectator";
                            } else {
                                message = "You are moviegoer";
                            }
                        },
    showMyDB:           function (){
                            if(!personalMovieDB.privat){
                                console.log(personalMovieDB);
                            } else{
                                console.log("Sorry, DB is privat.")
                            }
                        },
    writeYourGenres:    function (){
                            let question = "";
                        
                            for(let i = 0; i < 3; i++){
                                question = prompt(`What is yout favorite genre number ${i+1}?`, "");

                                if(question != "" && question != null){                                    
                                    personalMovieDB.genres[i] = question;
                                } else {
                                    i--;
                                }
                            }

                            personalMovieDB.genres.forEach((value, index) => {
                                console.log(`Favorite genre #${index + 1} is - ${value}`);
                            });
                        },
    toggleVisibleMyDB:  function (){
                            if(personalMovieDB.privat){
                                personalMovieDB.privat = true;
                            } else{
                                personalMovieDB.privat = false;
                            }
                        }
};

personalMovieDB.start();

personalMovieDB.rememberMyMovies();

personalMovieDB.detectMoviegoer();

// personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();



console.log(message);

