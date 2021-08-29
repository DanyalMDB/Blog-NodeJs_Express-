const mongoose = require('mongoose')


//importing
const Post = require('./database/models/Post') 


//connecting
mongoose.connect('mongodb://localhost/nodeJs-Test-Blog')


//sync operation
Post.create({
    id: 1,
    title: 'My first Blog Post',
    description: 'My first blog description with Mongoose',
    content: 'Lorem ipsum content'
},(error, post)=>{
    console.log(error, post)
})