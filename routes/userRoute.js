const courseMaterialURL="/auth"
const express=require('express')
const router=express.Router();

//section signIn
router.post(`${authUrl}/signIn`,async(req,res)=>{
    try {
        
    } catch (err) {
        console.err("Login error",err);
        res.status(500).json("error:login failed internal error")
    }
})

//section signUp
router.post(`${authUrl}/signUp`,async(req,res)=>{
    const {firstName,lastName,email,password,role}=req.body
    if(!firstName || !lastName || !email || !password ||!role){
        res.status(400).json({"error:missing required input filed"})
    }
    try {
        
    } catch (err) {
        console.err("Login error",err);
        res.status(500).json("error:login failed internal error")
    }
})

