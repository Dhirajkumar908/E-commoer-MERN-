const express=require('express')
const router=express.Router()

const {CreateUser, ListUser, LoginUser}=require('../controllers/usersController.js')
const {VerifyToken, AuthorizaAdmin}=require('../middleware/jwt.js')

router.get('/', (req, res)=>{
    res.json({message:'running'})
})

//path
router.post('/create-user', CreateUser);
router.get('/list-user',VerifyToken, AuthorizaAdmin, ListUser);
router.post('/login', LoginUser)


module.exports=router;