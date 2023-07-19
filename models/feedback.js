const mongoose=require('mongoose')
const feedbackSchema= mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    feedbackquest:{
        type:String,
        required:true
    },
    feedbackoptions:[{
        type:String,
        required:true,
        
    }]
})
module.exports=mongoose.model("feedback",feedbackSchema)