const express=require('express')
const router=express.Router()
const authController=require('../controller/authController.js')
const userController=require('../controller/userController')
const authMiddleware=require('../middleware/verifyToken.js')
const validateUser = require('../middleware/validateUser')

router.get('/users',authMiddleware.isAuthenticate,userController.findAll)
router.get('/users/:id',authMiddleware.isAuthenticate,userController.findById)
router.put('/users',validateUser,authMiddleware.isAuthenticate,userController.updateUser)
router.delete('/users/:id',authMiddleware.isAuthenticate,userController.deleteUsers)
router.post('/users',validateUser,authMiddleware.isAuthenticate,userController.addUsers)

router.post('/login',authController.login)

module.exports=router