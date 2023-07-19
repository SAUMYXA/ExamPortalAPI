const router = require("express").Router();
const {postfeedback}=require('../controllers/feedback')
router.post('/postfeedback',postfeedback)
module.exports=router;