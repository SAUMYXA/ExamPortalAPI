const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const Responses = require("../models/responses");
const Question = require("../models/questions");

const scoring = asyncHandler(async (req, res) => {
  console.log(req.body); // Log the request body to debug issues
  const { userID, quesID, markedAns } = req.body;

  try {
    // Check if the user and question exist
    const user = await User.findById(userID);
    const question = await Question.findById(quesID);

    if (!user) {
      return res.status(401).json({ msg: "User not found!" });
    }

    if (!question) {
      return res.status(401).json({ msg: "Question not found!" });
    }

    // Check if the user has already answered this question
    const existingResponse = await Responses.findOne({ userID, quesID });
    if (existingResponse) {
      return res.status(400).json({ msg: "User has already answered this question!" });
    }

    // Create a new response entry
    const newResponse = new Responses({ userID, quesID, markedAns });
    await newResponse.save();

    // Update score if the answer is correct
    let updatedScore = user.score;
    if (markedAns === question.correctAns) {
      user.score += 1;
      await user.save(); 
      updatedScore = user.score;
    }

    res.status(201).json({ score: updatedScore,newResponse });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});
const getScore = asyncHandler(async (req, res) => {
  const userID = req.params.userID;

  try {
    // Find the user by userID
    const user = await User.findById(userID);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Return the user's score
    res.json({ score: user.score });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
});
const saveResponse = async (req, res) => {
  const { userID } = req.params;

  try {
    // Check if the user exists
    const user = await User.findById(userID);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find all responses for the given userID
    const responses = await Responses.find({ userID });

    // Include the user's score in the response
    const userScore = user.score;

    res.status(200).json({
      userScore,
      responses
    });
  } catch (error) {
    console.error("Error fetching responses:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
const Response = require('../models/responses'); 

const getRanking = async (req, res) => {
  try {
    // Fetch all users
    const users = await User.find();

    // Fetch the latest response time for each user
    const userCompletionTimes = await Promise.all(users.map(async (user) => {
      const latestResponse = await Response.findOne({ userID: user._id }).sort({ createdAt: -1 });
      return {
        userID: user._id,
        score: user.score,
        latestResponseTime: latestResponse ? latestResponse.createdAt : new Date(0)
      };
    }));

    // Sort users by score (descending) and by latest response time (ascending) for ties
    userCompletionTimes.sort((a, b) => {
      if (b.score === a.score) {
        return new Date(a.latestResponseTime) - new Date(b.latestResponseTime);
      }
      return b.score - a.score;
    });

    // Format the response
    const ranking = userCompletionTimes.map((user, index) => ({
      rank: index + 1,
      userID: user.userID,
      score: user.score,
      latestResponseTime: user.latestResponseTime
    }));

    res.status(200).json(ranking);
  } catch (error) {
    console.error("Error fetching ranking:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


module.exports = { scoring,getScore,saveResponse,getRanking};
