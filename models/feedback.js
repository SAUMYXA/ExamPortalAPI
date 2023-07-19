const mongoose=require('mongoose')
const feedbackSchema= mongoose.Schema({
    feedbackquest:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        required:true,
        enum:["Very Satisfied ","Satisfied","Neutral","Dissatisfied"]
    }
})
module.exports=mongoose.model("feedback",feedbackSchema)