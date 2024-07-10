const express = require('express');
const router = express.Router();
const examController = require('../controllers/examController');
const saveResponse=require('../controllers/responses')
router.get('/languages', examController.getLanguages);
router.post('/start', examController.startExam);
router.get('/getResponseForUser/:userID',saveResponse.saveResponse)

module.exports = router;
