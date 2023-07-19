const router = require("express").Router();
const {addfeedbackques,getFeedbackquest, addFeedback,getFeedbacks}=require('../controllers/feedback')
router.post('/addfeedbackquest',addfeedbackques)
router.get('/getfeedbackquestions',getFeedbackquest)
router.post('/addfeedbackres',addFeedback)
router.get('/getFeedbacks',getFeedbacks)
module.exports=router;