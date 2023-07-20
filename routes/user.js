const express=require('express');
const {registerUser,getUsers, hostlerFilter, userlogin} = require('../controllers/user');
const router=express.Router();
router.post('/addcandidate',registerUser);
router.get('/getcandidates',getUsers);
router.get('/filter/:Hostler/:Gender',hostlerFilter);
router.post('/userlogin',userlogin)
module.exports=router;