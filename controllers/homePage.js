const Post = require('../database/models/Post')

module.exports = async (req, res)=>{
    const posts= await Post.find({}) //finding all the post from the database
    console.log(posts)
    res.render('index',{
        posts
    })
}