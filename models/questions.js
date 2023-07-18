const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    // unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  options: {
    opt1: {
      _id: { type: mongoose.Schema.Types.ObjectId },
      type: { type: String }
    },
    opt2: {
      _id: { type: mongoose.Schema.Types.ObjectId },
      type: { type: String }
    },
    opt3: {
      _id: { type: mongoose.Schema.Types.ObjectId },
      type: { type: String }
    },
    opt4: {
      _id: { type: mongoose.Schema.Types.ObjectId },
      type:{ type: String }
    }
  },
  correctId:{
    type:String,
    required:true,
  },
},{versionKey:false});

let Question=mongoose.model("question", questionSchema);
module.exports = Question;

