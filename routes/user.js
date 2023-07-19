const express=require('express');
const {registerUser,getUsers, hostlerFilter} = require('../controllers/user');
const router=express.Router();
router.post('/addcandidate',registerUser);
router.get('/getcandidates',getUsers);
router.get('/filter/:Hostler/:Gender',hostlerFilter);
module.exports=router;