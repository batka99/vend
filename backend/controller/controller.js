const Category = require('../models/categories');
const asyncHandler = require("express-async-handler");
const axios = require('axios');
const request = require('request');


// exports.getQpay = asyncHandler(async (req, res, next)=>{

//     try{
      
//       var options = {
// 			'method': 'POST',
// 			'url': 'https://merchant-sandbox.qpay.mn/v2/auth/token',
// 			'headers': {
// 						'Authorization': 'Basic'
// 			},
//       "auth": {
//         username: "TEST_MERCHANT",
//         password: "123456",
//       }};
//     request(options, function (error, response) {
// 			res.send(response.body);

//             res.status(200).json({
//                 success: true,
//                 data: response.body,
                
//             })
        
        
        
//         });

//     }catch(error){
//         res.status(400).json({
//             success: false,
//             error: error,
         
//         })
//     }
// })





exports.getCategories = asyncHandler(async (req, res, next)=>{
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


exports.getCategory = async(req, res, next)=>{

    try{
        const category =  await Category.findById(req.params.id)

        if(category){
            res.status(200).json({
                success: true,
                data: category,
            })

        }else{
            res.status(400).json({
                success: false,
                error: req.params.id + " ID-тэй категори байхгүй",
            })

        }

    }catch(err){
        res.status(400).json({
            success: false,
            error: err,
         
        })
    }


}

exports.createCategory = async (req, res, next)=>{
    console.log("data", req.body)
    try { const category = await Category.create(req.body)


        res.status(200).json({
            success:true,
            data: category
        })} catch(err){
            res.status(400).json({
                success:false,
                error:err
            })
        }
   
}

exports.deleteCategory = async (req, res, next)=>{
    try { 
        const category = await Category.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success:true,
            data: category
        })} catch(err){
            res.status(400).json({
                success:false,
                error:err
            })
        }  
}


exports.updateCategory = async (req, res, next) => {
    try {
      const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
  
      if (!category) {
        return res.status(400).json({
          success: false,
          error: req.params.id + " ID-тэй категори байхгүй.",
        });
      }
  
      res.status(200).json({
        success: true,
        data: category,
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        error: err,
      });
    }
  };