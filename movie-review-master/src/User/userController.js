const userService = require('./userService')

function saveUser(user, done) {
  
userService.saveUser(user, done)
    
 }
 
function getUserById(user,userId,done){
      
    userService.getUserById(user, userId, done)
 }
module.exports = {saveUser,getUserById}