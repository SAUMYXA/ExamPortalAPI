const mongoose = require("mongoose");
const responsesSchema = mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    quesID: {
      type: String,
      required: true,
    },
    markedAns: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("responses", responsesSchema);
