const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connectDB =async()=> {
mongoose
  .connect(
    process.env.CONNECTION_STRING,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Successfully connected to mongodb database");
  })
  .catch((err) => {
    console.log(err);
  })
}
module.exports=connectDB;