const mongoose=require("mongoose");

const uploadDate=()=>{
    const timeStamp=Date.now()
    const date=new Date(timeStamp)
    return date.toISOString().split("T")[0]
}

const courseMaterialSchema=new mongoose.Schema({
    materialId:{type:String,required:true,unique:true},
    fileName:{type:String,required:true},
    materialType:{type:String,required:true},
    material:{type:String,required:true},
    uploadAt:{type:String,default:uploadDate()},
    courseId:{type:String,required:true}
})

module.exports=mongoose.model("courseMaterial",courseMaterialSchema)