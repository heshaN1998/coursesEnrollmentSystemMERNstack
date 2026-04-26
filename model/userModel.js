const mongoose=require("mongoose")
const { replacesOne } = require("./courseMaterialModel")

const userSchema =new mongoose.Schema({
    userId:{type:String,require:true,unique:true},
    firstName:{type:String,require:true},
    lastName:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    role:{type:String,require:true}
});

module.exports=mongoose.model("user",userSchema)