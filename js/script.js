let movieCount = prompt("How many films do you watch?", "0"); 

let personalMovieDB = {
    count  : movieCount,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

alert(personalMovieDB['count']);
