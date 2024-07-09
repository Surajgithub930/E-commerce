let express=require('express')
let router=express.Router()
let clientController=require('../controller/clientController.js')
let uploads=require('../multerConfig.js')


router.post('/saveClient',uploads.single('image'),clientController.saveClient)

router.post('/clientLogin',clientController.clientLogin)

router.post('/createClient/:unique',clientController.createClient)


router.get('/getClient/:unique',clientController.getClient)



module.exports=router 