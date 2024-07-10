const Language = require('../models/Language');
const Exam = require('../models/Exam');
const User = require('../models/user');

exports.getLanguages = async (req, res) => {
  try {
    const languages = await Language.find();
    res.json(languages);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.startExam = async (req, res) => {
  const { userId, language } = req.body;

  try {
    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Create and save the exam
    const exam = new Exam({ user: user._id, language });
    await exam.save();

    res.json({ msg: 'Exam started', exam });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
