const courseMaterialURL="/auth"
const express=require('express')
const router=express.Router();
const userService=require("../service/userService")
const user=require("../model/userModel")
const { v4: uuidv4 } = require("uuid")
const jwt=require("jsonwebtoken")
require('dotenv').config()
const jwtSecret=process.env.JWT_SECRET

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
        res.status(400).json({"error":"missing required input filed"})
    }
    try {
        const CreateUser=userService.addUser(req.body);
        const token=jwt.sign({userId:user.email},jwtSecret,{ expiresIn:'1h'})
        res.status(201).json({token:token})
    } catch (err) {g
        console.err("Login error",err);
        res.status(500).json({"error":"login failed internal error"})
    }
})

