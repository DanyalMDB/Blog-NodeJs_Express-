module.exports =  (req,res,next)=> {
    
    if(req.files == null || req.body.username === null ||
         req.body.title === null || req.body.subtitle === null || 
         req.body.content === null ){
             
        return res.redirect('/posts/new')
    }
    
    next()
}


