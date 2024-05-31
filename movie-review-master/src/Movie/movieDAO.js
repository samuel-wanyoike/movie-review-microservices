require('../dbconfig/dbfile')


async function saveMovie(movie, done){
    const data = await product.save();

    done(undefined. data)
}

async function getMovieById(movie, movieId, done){
    const data = await movie.findById(movieId);

    done(undefined, data)
}

module.exports = {saveMovie,getMovieById}