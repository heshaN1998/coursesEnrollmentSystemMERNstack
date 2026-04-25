const CourseMaterial=require("../model/courseMaterialModel")
async function getAllMateriaks() {
   return CourseMaterial.find(); 
}

async function addCourseMaterial(newMaterials) {
    new CourseMaterial(newMaterials).save();
}

async function deleteCourseMaterial() {
    
}
async function updateCourseMaterial() {
    
}
module.exports={ getAllMateriaks,addCourseMaterial,updateCourseMaterial,deleteCourseMaterial}