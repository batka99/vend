const Product = require('../../models/createProduct/createProduct')
const asyncHandler = require("express-async-handler");


exports.createProduct = asyncHandler(async (req, res, next)=>{
    console.log("data", req.body)
    try { const product = await Product.create(req.body)
        res.status(200).json({
            success:true,
            data: product
        })} catch(err){
            res.status(400).json({
                success:false,
                error:err
            })
        }
})

exports.getProducts = asyncHandler(async (req, res, next)=>{
    try{
        const product =  await Product.find(req.query)
        res.status(200).json({
            success: true,
            data: product,
         
        })

    }catch(err){
        res.status(400).json({
            success: false,
            error: err,
         
        })
    }


})

exports.getProductsById = async(req, res, next)=>{

    try{
        const product =  await Product.findById(req.params.id)

        if(product){
            res.status(200).json({
                success: true,
                data: product,
            })

        }else{
            res.status(400).json({
                success: false,
                error: req.params.id + " ID-тэй бараа",
            })

        }

    }catch(err){
        res.status(400).json({
            success: false,
            error: err,
         
        })
    }


}
