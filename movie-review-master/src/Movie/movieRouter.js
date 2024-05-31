const express = require('express');
const router = express.Router();
const movieController = require('./movieController');
const Movie = require('./movieModel');


router.post('/', async (req, res) => {
  
        const newMovie = new Movie({...req.body});
       
        movieController.saveMovie(newMovie, (err, result) => {
                if(err){
                        res.status(400).send('error while saving product', err)
                }
                else{
                        res.status(200).send(result)
                }
})
})

router.get('/:id', async (req, res) => {
   
        const movieId = req.params.id;
        
        movieController.getMovieById(movie, movieId, (err, result) => {
                if(err){
                        res.status(400).send('error getting movie', err)
                }
                else{
                        res.status(200).send(result)
                }
})
})

module.exports = router