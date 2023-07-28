const express=require('express');
const {registerUser,getUsers, hostlerFilter, userlogin,validateToken,userlogout} = require('../controllers/user');
const router=express.Router();
router.post('/addcandidate',registerUser);
router.get('/getcandidates',getUsers);
router.get('/filter/:Hostler/:Gender',hostlerFilter);
router.post('/userlogin',userlogin)
router.post('/userlogout',validateToken,userlogout)
module.exports=router;