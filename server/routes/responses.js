const express = require("express");
const { scoring,getScore } = require("../controllers/responses");
const router = express.Router();
router.post("/submit", scoring);
router.get("/score/:userID",getScore);
module.exports = router;
