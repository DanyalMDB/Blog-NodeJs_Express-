const path = require('path')
const Post = require('../database/models/Post')

module.exports = async (req, res)=>{
    const {image} = req.files
    //puting image on this location 
    image.mv(path.resolve(__dirname,'..', 'public/assets/img', image.name),(error)=>{
        //create post in database
        Post.create({
             ...req.body, 
             image: image.name 
            },
             (error,post) => {
                  res.redirect('/')
                 })      
    })

}