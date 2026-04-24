const courseMaterialURL="/material"
const express=require('express')
const router=express.Router();
//we can rout request
//const courseMat={}

/////////////path,              function
router.get(courseMaterialURL,(req,res)=>{
res.send("Tesh Rout")
})

// router.post(courseMaterialURL,courseMaterialURL,(req,res)=>{
    
// })

// router.patch(`${courseMaterialURL}/:materialId`,courseMat,(req,res)=>{
    
// })

// router.delete(`${courseMaterialURL}/:materialId`,(req,res)=>{
    
// })
module.exports=router