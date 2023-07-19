const mongoose=require('mongoose')
const feedbackSchema= mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    feedbackquest:{
        type:String,
       
    },
    feedbackoptions:[{
        type:String,
        
        
    }],
    feedbackres:{
        type:String,
    }
})
module.exports=mongoose.model("feedback",feedbackSchema)