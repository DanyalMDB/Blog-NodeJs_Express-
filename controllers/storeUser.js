const User = require('../database/models/User')

module.exports = async (req, res)=>{
        //create post in database
        User.create(req.body, (error,user)=> {
                  res.redirect('/')
                 })      
    

}