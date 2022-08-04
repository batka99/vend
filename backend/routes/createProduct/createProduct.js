const express = require('express')

const {createProduct, getProducts, getProductsById} = require('../../controller/ProductController/createProduct')

const ProductRouter = express.Router()

ProductRouter.route('/').post(createProduct).get(getProducts)
ProductRouter.route('/:id').get(getProductsById)
ProductRouter.route('/cart/:id').get(getProductsById)



module.exports = ProductRouter;