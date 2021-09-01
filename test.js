const mongoose = require('mongoose')


//importing
const Post = require('./database/models/Post') 


//connecting
mongoose.connect('mongodb://localhost/nodeJs-Test-Blog')


//extracting all data
//Post is ModelFIle
/*
Post.find({}, function (err, docs) {
    if (err){
        console.log("Error function call : ", err);
    }
    else{
        console.log("First function call : ", docs);
    }
});

*/
/*
Post.findById("612be4226211c9b3b53800fb", function (err, post) {
    if (err){
        console.log(err);
    }
    else{
        console.log("Result : ", post);
    }
});
*/


   /*
    Post.findByIdAndUpdate("612be4226211c9b3b53800fb",{ title :'Updating my first post'}, function (err, post) {
        if (err){
            console.log("Error: " , err)
        }
        else{
            console.log("Result : ", post)
        }
    });
*/
    Post.remove({
        title: "Updating my first post"
    },(error,post)=>{
        console.log(error,post)
    }
    )
    Post.deleteOne({ title: 'My second blog post' }, (error, post) => { 
        console.log(error, post)
    })
/*
//extracting specfic data
Post.find({
    title: 'My first Blog Post'
})

*/

/*
//sync operation
Post.create({
    id: 1,
    title: 'My first Blog Post',
    description: 'My first blog description with Mongoose',
    content: 'Lorem ipsum content'
},(error, post)=>{
    console.log(error, post)
})

*/