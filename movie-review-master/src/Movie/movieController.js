const movieService = require('./movieService');



function saveMovie(movie, done) {
  movieService.saveMovie(movie, done)
    
}



function getMovieById(movie,movieId,done){

   movieService.getMovieById(movie, movieId, done)
 
}

module.exports = {saveMovie,getMovieById}