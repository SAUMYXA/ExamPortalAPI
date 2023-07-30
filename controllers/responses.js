const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const Responses = require("../models/responses");
const Question = require("../models/questions");
const scoring = asyncHandler(async (req, res) => {
  const { userID, quesID, markedAns } = req.body;
  try {
    const response = await Responses.findOne({ userID, quesID });

    if (!response) {
      return res.status(401).json({ msg: "Response not found!" });
    }
    const question = await Question.findById(quesID);

    if (!question) {
      res.status(401).json({ msg: "Question not found!" });
    }
    let updatedScore = 0;
    if (markedAns === question.correctAns) {
      const user = await User.findByIdAndUpdate(
        { _id: userID },
        { $inc: { score: 1 } },
        { new: true }
      );
      updatedScore = user.score;
    } else {
      const user = await User.findById(userID);
      updatedScore = user.score;
    }

    res.status(201).json({ score: updatedScore });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});
module.exports = { scoring };
