const express=require('express')
const router=express.Router()

const {CreateUser, ListUser, LoginUser}=require('../controllers/usersController.js')
const {addProductWithUpload, UpdateProductWithUpload, ListProducts, deleteProduct}=require('../controllers/productController.js')
const {SubmitOrder, ListOrders}=require('../controllers/OrderControls.js')
const {ContactFrom, CantectQuery}=require('../controllers/contact.js')
const {VerifyToken, AuthorizaAdmin}=require('../middleware/jwt.js')

router.get('/', (req, res)=>{
    res.json({message:'running'})
})

//path
router.post('/create_user', CreateUser);
router.get('/list-user',VerifyToken, AuthorizaAdmin, ListUser);
router.post('/login', LoginUser);
router.post('/addproduct', VerifyToken, AuthorizaAdmin, addProductWithUpload );
router.put('/update_product/:id', VerifyToken, AuthorizaAdmin, UpdateProductWithUpload);
router.delete('/product/delete/:id',VerifyToken, AuthorizaAdmin, deleteProduct)
router.get('/list_product',ListProducts)
router.post('/order',VerifyToken, SubmitOrder)
router.get('/orders/user/:id',VerifyToken, ListOrders)

router.post('/contect', ContactFrom)
router.get('/query', CantectQuery)





module.exports=router;