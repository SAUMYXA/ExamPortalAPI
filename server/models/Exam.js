const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Exam', ExamSchema);
