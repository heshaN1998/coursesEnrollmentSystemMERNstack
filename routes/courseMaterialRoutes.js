const courseMaterialURL="/material"
const express=require('express')
const router=express.Router();
//we can rout request
//const courseMat={}

/////////////path,              function
router.get(courseMaterialURL,(req,res)=>{
try {
    const allMaterials=await courseMaterialService.getAllCourseMaterials()
    return res.json(allMaterials)
} catch (error) {
    console.error("error fetching materials",err)
    return res.status(500).json({error:"failed to fetch data"})
}
})

// router.post(courseMaterialURL,courseMaterialURL,(req,res)=>{
    
// })

// router.patch(`${courseMaterialURL}/:materialId`,courseMat,(req,res)=>{
    
// })

// router.delete(`${courseMaterialURL}/:materialId`,(req,res)=>{
    
// })
module.exports=router