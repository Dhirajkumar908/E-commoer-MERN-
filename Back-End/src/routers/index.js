const express=require('express')
const router=express.Router()

const {CreateUser, ListUser, LoginUser}=require('../controllers/usersController.js')
const {addProductWithUpload, UpdateProductWithUpload, ListProducts}=require('../controllers/productController.js')
const {SubmitOrder, ListOrders}=require('../controllers/OrderControls.js')
const {VerifyToken, AuthorizaAdmin}=require('../middleware/jwt.js')

router.get('/', (req, res)=>{
    res.json({message:'running'})
})

//path
router.post('/create-user', CreateUser);
router.get('/list-user',VerifyToken, AuthorizaAdmin, ListUser);
router.post('/login', LoginUser);
router.post('/addproduct', VerifyToken, AuthorizaAdmin, addProductWithUpload );
router.put('/update_product/:id', VerifyToken, AuthorizaAdmin, UpdateProductWithUpload);
router.get('/list_product',ListProducts)
router.post('/order', SubmitOrder)
router.get('/myOrder/:id',VerifyToken, ListOrders)




module.exports=router;