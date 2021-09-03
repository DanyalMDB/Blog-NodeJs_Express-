//installed packed nodemon so server automatically restart after changes


const path = require('path')

const { config, engine } = require('express-edge');

const express = require('express')

//setting up Database connection 
const mongoose = require('mongoose')

//BodyParser middleware

var bodyParser = require('body-parser')


const Post = require('./database/models/Post')

//creating app
const app = new express()

//conecting
mongoose.connect('mongodb://localhost/nodeJS-blog')

app.use(express.static('public')) //public directory

app.use(engine)

//bodyParser Json Format
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))


app.set('views',`${__dirname}/views`)



//setting up pages
app.get('/', async (req,res) =>{
    const posts= await Post.find({}) //finding all the post from the database
    console.log(posts)
    res.render('index',{
        posts
    })
})
 
app.get('/contact',(req,res) =>{
    res.render('contact')
})
app.get('/about',(req,res) =>{
    res.render('about')
})
app.get('/post',(req,res) =>{
    res.render('post')
})
app.get('/posts/new',(req,res) =>{
    res.render('create')
})
app.post('/posts/store',(req,res)=>{
    Post.create(req.body, (error, post)=>{
        res.redirect('/')
    })
    
})

//server
app.listen(4200,()=>{
    console.log("App listening")
})


