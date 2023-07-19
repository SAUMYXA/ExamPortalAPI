const express=require('express');
const { scoring } = require('../controllers/responses');
const router=express.Router();
router.post('/submit',scoring);
module.exports=router;