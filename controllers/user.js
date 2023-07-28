const asyncHandler = require("express-async-handler");
const user=require('../models/user')
const jwt=require('jsonwebtoken')
const dotenv=require("dotenv").config();
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
let results= await user.find({});
    res.status(201).json({msg:"all the candidates are given below",results})
})
const hostlerFilter=asyncHandler(async(req,res)=>{
    let data= await user.find({ hostler: req.params.Hostler, gender:req.params.Gender })
    res.status(201).json({data})
})
const userlogin=asyncHandler(async(req,res,next)=>{
  const{email,studentNo}=req.body;
  const currentuser=await user.findOne({email,studentNo})
  if(!currentuser){
    res.status(401).json({msg:"user does not exist!"})
  }
  const token=jwt.sign({
    name:currentuser.name,
    email: currentuser.email,
      studentNo: currentuser.studentNo,
      branch: currentuser.branch,
      section: currentuser.section,
      phoneNo:currentuser.phoneNo,
      hostler:currentuser.hostler,
      gender:currentuser.gender,
      
  },
    process.env.SECRET_KEY,
    {
       expiresIn:"24h"
    }
  

  )
 
  let oldTokens=currentuser.tokens || []
  if(oldTokens.length){
    oldTokens=oldTokens.filter(t=>{
      timeDiff=(Date.now() - parseInt(t.signedAt))/1000
      if(timeDiff<86400){
        return t
      }
    })
  }
  await user.findByIdAndUpdate(currentuser._id,{tokens:[...oldTokens,{token,signedAt:Date.now().toString()}]})


  res.status(201).json({email:email,studentNo:studentNo,token:token})
})

module.exports={registerUser,getUsers,hostlerFilter,userlogin};