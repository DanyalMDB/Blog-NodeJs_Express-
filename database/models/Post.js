const mongoose = require('mongoose')



//User,Product,Post
const PostSchema = new mongoose.Schema({
    
    title: String,
    description: String,
    content: String,
    username: String,
    createAt:{
        type: Date,
        default: new Date()
    }
})


//Model
const Post =mongoose.model('Post',PostSchema)

module.exports= Post