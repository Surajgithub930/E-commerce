let express=require('express')
let router=express.Router()
let adminController=require('../controller/adminController')

router.post('/adminSave',adminController.adminSave)

router.post('/adminLogin',adminController.adminLogin)

module.exports=router