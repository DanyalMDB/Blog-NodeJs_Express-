//installed packed nodemon so server automatically restart after changes


const path = require('path')

const { config, engine } = require('express-edge');

const express = require('express')

//setting up Database connection 
const mongoose = require('mongoose')

//BodyParser middleware
const bodyParser = require('body-parser')

//creating app
const app = new express()

//conecting
mongoose.connect('mongodb://localhost/nodeJS-blog')

app.use(express.static('public')) //public directory

app.use(engine)

//bodyParser Json Format
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended: true}))


app.set('views',`${__dirname}/views`)



//setting up pages
app.get('/',(req,res) =>{
    res.render('index')
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
    console.log(req.body)// getting all data  
    res.redirect('/')
})

//server
app.listen(4000,()=>{
    console.log("App listening")
})


