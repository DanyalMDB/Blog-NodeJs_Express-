//installed packed nodemon so server automatically restart after changes


const path = require('path')

const { config, engine } = require('express-edge');

const express = require('express')


//creating app
const app = new express()

app.use(express.static('public')) //public directory

app.use(engine)

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



//server
app.listen(4200,()=>{
    console.log("App listening")
})


