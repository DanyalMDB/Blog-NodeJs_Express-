//installed packed nodemon so server automatically restart after changes



const { config, engine } = require('express-edge');

const express = require('express')

//setting up Database connection 
const mongoose = require('mongoose')

//BodyParser middleware

var bodyParser = require('body-parser')

const fileUpload = require('express-fileupload')

const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')


//creating app
const app = new express()

//conecting
mongoose.connect('mongodb://localhost/nodeJS-blog')

//app.use() acts as a middleware in express apps.
// you actually can use app.use() without specifying the request URL. 
//In such a case what it does is, it gets executed every time no matter what URL's been hit.

//creating Custom Middleware

const validateCreatePostMiddleware = (req,res,next)=> {
    
    if(req.files == null || req.body.username === null ||
         req.body.title === null || req.body.subtitle === null || 
         req.body.content === null ){
             
        return res.redirect('/posts/new')
    }
    
    next()
}

app.use(fileUpload())

app.use(express.static('public')) //public directory

app.use(engine)

//bodyParser Json Format
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))



app.use('/posts/store',validateCreatePostMiddleware)

//The app.set() function is used to assigns the setting name to value. 
//You may store any value that you want, but certain names can be used to configure the behavior of the server.

app.set('views',`${__dirname}/views`)

//app.get(): This function tells the server what to do when get requests at a given route.

//setting up pages
app.get('/',homePageController)
app.get('/posts/new',createPostController) 
app.get('/post/:id',getPostController)
app.post('/posts/store',storePostController)

//server
app.listen(4200,()=>{
    console.log("App listening")
})


