const Category = require('../models/categories')
const asyncHandler = require("express-async-handler");






exports.login = asyncHandler(async (req, res, next)=>{
    console.log(req.query);

    
    try{
        const categories =  await Category.find(req.query)
        console.log(req.query);
        res.status(200).json({
            success: true,
            data: categories,
        })

    }catch(err){
        res.status(400).json({
            success: false,
            error: err,
         
        })
    }


})