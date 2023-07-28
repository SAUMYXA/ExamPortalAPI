const router = require("express").Router();
const Question = require("../models/questions");
const {
  addquestions,
  getquestions,
  deletequestion,
  updatequestion,
  categoryquestion,
  searchquestion,
} = require("../controllers/questions");
router.post("/addquestions", addquestions);
router.get("/getquestions", getquestions);
router.delete("/:id", deletequestion);
router.patch("/updatequestion/:id", updatequestion);
router.get("/search/:key", searchquestion);
router.get("/category/:key", categoryquestion);
module.exports = router;