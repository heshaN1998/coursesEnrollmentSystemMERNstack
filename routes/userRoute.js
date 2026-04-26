const express=require('express')
const router=express.Router();
const userService=require("../service/userService")
const user=require("../model/userModel")
const { v4: uuidv4 } = require("uuid")
const jwt=require("jsonwebtoken")
require('dotenv').config()
const jwtSecret=process.env.JWT_SECRET
const bcrypt = require("bcrypt");
const authUrl = "/auth";

if(!jwtSecret){
    console.error("cannot find JWT secret")
    process.exit(1)
}

//section signIn
router.post(`${authUrl}/signIn`,async(req,res)=>{
    const { email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({"error":"missing required input fields"})
    }
    try {
    const user=await User.findOne({ email })
    if(!user){
    return res.status(401).json({"error":"invalid credential"})
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(401).json({"error":"invalid credential"})
    }
    //creating token
    const token=jwt.sign({ userId:user.email},jwtSecret,{ expiresIn:'1h' })
    res.json({token})
    } catch (err) {
        console.error("Login error",error);
        res.status(500).json("error:login failed internal error")
    }
})

//section signUp
router.post(`${authUrl}/signUp`,async(req,res)=>{
    const {firstName,lastName,email,password,role}=req.body
    if(!firstName || !lastName || !email || !password ||!role){
        return res.status(400).json({"error":"missing required input filed"})
    }
    try {
        const CreateUser=userService.addUser(req.body);
        const token=jwt.sign({userId:CreateUser.email},jwtSecret,{ expiresIn:'1h'})
        res.status(201).json({token:token})
    } catch (err) {
        console.error("Login error",error);
        res.status(500).json({"error":"login failed internal error"})
    }
})
module.exports=router
