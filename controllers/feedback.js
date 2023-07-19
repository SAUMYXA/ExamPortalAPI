const asyncHandler=require("express-async-handler");
const Feedback=require("../models/feedback");
const addfeedbackques=asyncHandler(async(req,res)=>{
    const{feedbackquest,feedbackoptions}=req.body;
    const newfeedback=await Feedback.create({feedbackquest,feedbackoptions})
    res.status(201).json({msg:"Feedback question has been added",newfeedback})
})
const getFeedbackquest=asyncHandler(async(req,res)=>{
    const feedback=await Feedback.find({})
    res.status(201).json({feedback})
})
module.exports={addfeedbackques,getFeedbackquest}
