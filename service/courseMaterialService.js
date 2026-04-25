const CourseMaterial=require("../model/courseMaterialModel")
async function getAllMateriaks() {
   return CourseMaterial.find(); 
}

async function addCourseMaterial(newMaterials) {
    new CourseMaterial(newMaterials).save();
}

async function deleteCourseMaterial() {
    return CourseMaterial.findOneAndDelete({materialId})
}
async function updateCourseMaterial(materialId,updateData) {
    return CourseMaterial.findOneAndUpdate({material: materialId},updateData,{new:true})
}
module.exports={ getAllMateriaks,addCourseMaterial,updateCourseMaterial,deleteCourseMaterial}