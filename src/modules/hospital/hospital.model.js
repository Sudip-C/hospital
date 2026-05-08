const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true  
    },
    contactNumber:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    subscriptionPlan:{
        type:String,
        enum:["BASIC","PREMIUM","STANDARD"],
        default:"BASIC"
    },
    isActive:{
        type:Boolean,
        default:true    
    }},
    {timestamps:true}
)

module.exports = mongoose.model("Hospital",hospitalSchema)