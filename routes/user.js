const express=require('express');
const {registerUser,getUsers} = require('../controllers/user');
const router=express.Router();
router.post('/addcandidate',registerUser);
router.get('/getcandidates',getUsers)
module.exports=router;