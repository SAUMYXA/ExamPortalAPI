const asyncHandler = require("express-async-handler");
const user=require('../models/user')

const registerUser = asyncHandler(async (req, res) => {
    const {
        name,
        branch,
        section,
        studentNo,
        registrationNo,
        phoneNo,
        email,
        gender,
        hostler,
      } = req.body;
    const userAvailable = await user.findOne({ email });
    if (userAvailable) {
      res
        .status(400)
        .json({ msg: "already registered." });
    }
   
 
  if (!registrationNo || !studentNo) {
    res.status(400).json({ msg: "fill all the credentials!" });
  }

 let createUser = await user.create({
    name,
    branch,
    section,
    studentNo,
    registrationNo,
    phoneNo,
    email,
    gender,
    hostler,
  });
  res.status(201).json({msg:"User has been successfully added.",createUser})
});
const getUsers=asyncHandler(async(req,res)=>{
    const results= await user.find({});
    res.status(201).json({result})
})
module.exports={registerUser,getUsers};