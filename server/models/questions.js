const mongoose = require("mongoose");
// const crypto = require('crypto');
// const uniqueValidator = require('mongoose-unique-validator');
// function generateCustomId() {
//   return crypto.randomBytes(8).toString('hex');
// }
// function generateCustomId() {
//   // Implement your custom ID generation logic here
//   // For example, you can use the `crypto` module or any other method to generate a unique ID
//   // For simplicity, let's use a random alphanumeric string here
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   const idLength = 8;
//   let customId = '';
//   for (let i = 0; i < idLength; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     customId += characters[randomIndex];
//   }
//   return customId;
// }
const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    options: [
      {
        opt1: {
          type: String,
          required: true,
          trim: true,
        },
        opt2: {
          type: String,
          required: true,
          trim: true,
        },
        opt3: {
          type: String,
          required: true,
          trim: true,
        },
        opt4: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
    correctAns: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { versionKey: false }
);
// questionSchema.plugin(uniqueValidator);

// questionSchema.pre('save', function (next) {
//   if (!this.questionId) {
//     this.questionId = generateCustomId();
//   }
//   this.options.forEach(option => {
//     if (!option.optId) {
//       option.optId = generateCustomId();
//     }
//   });
//   if (!this.correctAnsId) {
//     this.correctAnsId = generateCustomId();
//   }
//   next();
// });

let Question = mongoose.model("question", questionSchema);
module.exports = Question;
