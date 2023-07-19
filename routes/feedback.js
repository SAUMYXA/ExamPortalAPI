const router = require("express").Router();
const {addfeedbackques,getFeedbackquest}=require('../controllers/feedback')
router.post('/addfeedbackquest',addfeedbackques)
router.get('/getfeedbackquestions',getFeedbackquest)
module.exports=router;