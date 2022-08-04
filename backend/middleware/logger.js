const logger = (req, res, next)=>{
    console.log(`${req.method} ${req.protocol}://${req.host}${req.originalUrl}`);
    if(req.method == "GET"){
        console.log("ene bol GET meTHOD")
    }
    
    next();
}


module.exports = logger