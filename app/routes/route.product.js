const express= require('express')
const router= express.Router()
const productController=require('../controller/productController')
const validateProduct = require('../middleware/validateProduct')



router.get('/product',productController.findAll)
router.get('/product/detail/:id',productController.findById)
router.post('/product',validateProduct,productController.post)
router.put('/product/:id',validateProduct,productController.put)
router.delete('/product/:id',productController.delete)

module.exports= router