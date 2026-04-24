const express=require("express")
const app=express()
const PORT=3500
const contextPathWithApiVersion="/course"

app.get('${contextPathWithAPIVersion}/heartbeat',(req,res)=>{
    res.send("course enrollment system is working")
});
