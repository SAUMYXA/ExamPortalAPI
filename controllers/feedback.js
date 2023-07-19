const asyncHandler=require("express-async-handler");
const Feedback=require("../models/feedback");
const postfeedback=asyncHandler(async(req,res)=>{
    const{feedbackquest,feedback}=req.body;
    const newfeedback=await Feedback.create({feedbackquest,feedback})
    res.status(201).json({msg:"Feedback question has been added",newfeedback})
})
module.exports={postfeedback}