require('../dbconfig/dbfile')

async function saveUser(user, done){
    const data = await user.save();

    done(undefined, data)
}

async function getUserById(user, userId, done){
    const data = await user.findById(userId);
    done(undefined, data);
}

module.exports = {saveUser,getUserById}