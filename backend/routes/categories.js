const express = require('express')


const {getCategories, getCategory,createCategory, deleteCategory, updateCategory} = require('../controller/controller')


const router = express.Router()

router.route('/').get(getCategories).post(createCategory)
// router.route('/qpay').post(getQpay)

router.route('/:id').get(getCategory).delete(deleteCategory).put(updateCategory)

module.exports = router;