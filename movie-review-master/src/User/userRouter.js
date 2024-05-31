const express = require('express');
const router = express.Router();

const userController = require('./userController');
const user = require('./userModel');


router.post('/', async (req, res) => {
    
       const newUser = new user({...req.body});

        userController.saveUser(newUser, (err, result) => {
           if(err){
                res.status(400).send({'msg: error while saving user, error' :err})
           }
           else{
                res.status(200).send(result)
           }
})
})


router.get('/:id', async (req, res) => {
   
       const userId = req.params.id;

        userController.getUserById(user, userId, (err, result) => {
           if(err){
                res.status(400).send('error getting customer', err)
           } 
           else{
                res.status(500).send(result)
           }
  
})
})

module.exports = router