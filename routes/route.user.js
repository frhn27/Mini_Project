const express= require('express')
const router= express.Router()
const userController=require('../controller/userController')
const validateUser = require('../middleware/validateUser')



router.get('/users',userController.findAll)
router.get('/users/:id',userController.findById)
router.post('/users',validateUser,userController.addUsers)
router.put('/users/:id',validateUser,userController.updateUser)
router.delete('/users/:id',userController.deleteUsers)

module.exports= router 