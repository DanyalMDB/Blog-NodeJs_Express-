const mongoose = require('mongoose')



//User,Product,Post
const PostSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    content: String
})


//Model
const Post =mongoose.model('Post',PostSchema)

module.exports= Post