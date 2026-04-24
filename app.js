const express=require("express")
const app=express()
const PORT=3500
const contextPathWithApiVersion="/courseregis/api/v1";

app.get(`${contextPathWithApiVersion}/heartbeat`,(req,res)=>{
    res.send("course enrollment system is working")
})

app.listen(PORT,()=>{
    console.log("server started in port: ",PORT )
});


