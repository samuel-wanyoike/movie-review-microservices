const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const axios = require(axios)

require('../dbconfig/dbfile')

const movieReview = require('./movieReviewModel')


router.post('/', async (req, res) => {
    try {
      const newReview = new movieReview({
        userId: mongoose.Types.ObjectId(req.body.userId),

        movieId: mongoose.Types.ObjectId(req.body.movieId)
     
      }
    );
    const data = await newReview.save();
    if(data){
      res.status(200).send('success')
    }

    } catch (error) {
      console.log('error', error)
    }


 })

router.get('/:id', (req, res) => {
   
  const id = req.params.id;
  movieReview.findById(id).then((review) => {
    if(review){
      axios.get(`http://localhost:4000/user/${user.userId}`).then((response) => {
        let reviewObject = {
          userName: response.data.userName,
        }

        axios.get(`http://localhost:3000/movie/${movie.movieId}`).then((response) => {
          reviewObject.movieName = response.data.movieName;
          reviewObject.movieReview = response.data.movieReview;
          console.log(reviewObject);

          res.json(reviewObject)
        })
      })
    }
    else{
      res.status(404).send('review not found')
    }
  })
  })	
  






module.exports = router
