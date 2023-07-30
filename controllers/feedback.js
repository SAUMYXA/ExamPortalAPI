const asyncHandler = require("express-async-handler");
const Feedback = require("../models/feedback");
const addfeedbackques = asyncHandler(async (req, res) => {
  const { feedbackquest, feedbackoptions } = req.body;
  const newfeedback = await Feedback.create({ feedbackquest, feedbackoptions });
  res
    .status(201)
    .json({ msg: "Feedback question has been added", newfeedback });
});
const getFeedbackquest = asyncHandler(async (req, res) => {
  const feedback = await Feedback.find({});
  res.status(201).json({ feedback });
});
const addFeedback = asyncHandler(async (req, res) => {
  const newfeedbackres = await Feedback.create({
    user_id: req.body.user_id,
    feedbackres: req.body.feedbackres,
  });
  const feedbackData = await newfeedbackres.save();
  res
    .status(201)
    .json({ msg: "New feedback response has been added", feedbackData });
});
const getFeedbacks = asyncHandler(async (req, res) => {
  // const feedbackres = req.body.feedbackres;
  const feedback = await Feedback.find().select("feedbackres");
  res.status(201).json({ feedback });
});
module.exports = {
  addfeedbackques,
  getFeedbackquest,
  addFeedback,
  getFeedbacks,
};
