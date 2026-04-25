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

// router.patch(`${courseMaterialURL}/:materialId`,courseMat,(req,res)=>{
    
// })

// router.delete(`${courseMaterialURL}/:materialId`,(req,res)=>{
    
// })
module.exports=router