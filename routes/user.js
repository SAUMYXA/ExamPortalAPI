const express=require('express');
const {registerUser,getUsers, hostlerFilter} = require('../controllers/user');
const router=express.Router();
router.post('/addcandidate',registerUser);
router.get('/getcandidates',getUsers);
router.get('/filterHostler/:key/:keyy',hostlerFilter);
module.exports=router;