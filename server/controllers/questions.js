const Question = require("../models/questions");
const addquestions = async (req, res) => {
  try {
    let data = new Question(req.body);
    let result = await data.save();
    res.status(201).json({ msg: "Question added successfully", result });
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error);
  }
};
const getquestions = async (req, res) => {
  try {
    const data = await Question.find({});
    res.status(201).send({ result: data });
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error);
  }
};
const deletequestion = async (req, res) => {
  try {
    let data = await Question.findByIdAndDelete(req.params.id);
    res.status(201).json({ msg: "Question has been deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error);
  }
};
const updatequestion = async (req, res) => {
  try {
    let data = await Question.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({ data });
  } catch (error) {
    res.status(401).json(error);
  }
};
const categoryquestion = async (req, res) => {
  try {
    let data = await Question.find({ category: req.params.key });

    res.status(201).send(data);
  } catch (error) {
    res.status(401).json(error);
  }
};
const searchquestion = async (req, res) => {
  try {
    console.log(req.params.key);
    let data = await Question.find({
      $or: [{ question: { $regex: req.params.key } }],
    });
    res.send(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = {
  addquestions,
  getquestions,
  deletequestion,
  updatequestion,
  categoryquestion,
  searchquestion,
};
