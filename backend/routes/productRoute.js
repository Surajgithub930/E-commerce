let express=require('express')
router=express.Router()
let productController=require('../controller/productController')
// let uploads=require('../multerConfig.js')
let uploads=require('../multerConfig.js')


// router.post('/saveProduct',uploads.single('image'),productController.saveProduct)
router.post('/saveProduct',uploads.single('image'),productController.saveProduct)

router.get('/getProduct',productController.getProduct)

router.delete('/deleteProduct/:id',productController.deleteProduct)

router.put('/updateProduct/:id',productController.updateProduct)

router.get('/getProductById/:id',productController.getProductById)

router.get('/searchProduct/:inp',productController.searchProduct)



module.exports=router