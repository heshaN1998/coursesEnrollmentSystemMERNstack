const courseMaterialURL="/material"
const express=require('express')
const router=express.Router();
const courseMaterialService=require("../service/courseMaterialService")
const multer=require("multer")
const CourseMaterial=require("../model/courseMaterialModel")
const { v4: uuidv4} =require("uuid")
//we can rout request
//const courseMat={}

//config multer related storage
const storage=multer.memoryStorage()
const upload=multer({storage: storage})

/////////////path,              function
router.get(courseMaterialURL,async (req,res)=>{
try {
    const allMaterials=await courseMaterialService.getAllCourseMaterials()
    return res.json(allMaterials)
} catch (error) {
    console.error("error fetching materials",err)
    return res.status(500).json({error:"failed to fetch data"})
}
})


 router.post(courseMaterialURL,upload.single("material"),async (req,res)=>{
    try {
        console.log("calling save material")
        console.log("Req body",req.body)
        console.log("File",req.file)

        if(!req.body.fileName || !req.body.materialType || !req.body.courseId || !req.file){
            return res.status(400).json({error:"Required data not included"});
        }
        const fileBase64=req.file.buffer.toString("base64")

        const newMaterial=new CourseMaterial({
            materialId: "CMT- "+uuidv4(),
            fileName:req.body.fileName,
            materialType:req.body.materialType,
            material:fileBase64,
            courseId:req.body.courseId
        });
        await courseMaterialService.addCourseMaterial(newMaterial)
        res.sendStatus(201).json({message:"saved material"})
    } catch (error) {
        console.error("save error"+err)
         res.sendStatus(201).json({error:"saved failed"})
    }
 })

 router.patch(`${courseMaterialURL}/:materialId`,upload.single("material"),(req,res)=>{
    console.log(`${courseMaterialURL}/:materialId`,upload.single("material"),async (req,res)=>{
        console.log('call update material')
        const { materialId }=req.params; 
        console.log("Mat Id",materialId)
        if(!materialId){
            return res.status(400).json({error:"Material ID is required"})
        }
        const updateData={
            ...(req.body.fileName && {fileName: req.body.fileName}),
            ...(req.body.courseId && {courseId: req.body.courseId}),
            ...(req.body.materialType && {materialType: req.body.materialType}),
            ...(req.file && {material: req.file.buffer.toString("base64")})
        }
        const updateMat=await courseMaterialService.updateCourseMaterial(materialId,updateData)
        if(!updateMat){
            return res.status(400).json({error:"material not found"})

        }
        return res.status(204).send();
    })
 })

 router.delete(`${courseMaterialURL}/:materialId`,async (req,res)=>{
    const { materialId }=req.params
    console.log("deleting material by id")

    try {
        const deleteMat=await courseMaterialService.deleteCourseMaterial(material)
        if(!deletedMat){
            return res.status(400).send("course material not found")
        }
        res.send(204).send()
    } catch (err) {
        console.log(err)
        return res.status(500).send("cannot process request")
    }
 })
module.exports=router