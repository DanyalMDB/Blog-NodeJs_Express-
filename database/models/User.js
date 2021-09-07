
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')



//User,Product,Post
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    
})
//Presave Hook
UserSchema.pre('save',function(next){
    const user = this

    bcrypt.hash(user.password,10, function(error, encrypted){
        user.password= encrypted
        next()
        })
})



module.exports = mongoose.model('User',UserSchema)

