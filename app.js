const express=require("express")
const app=express()
const contextPathWithApiVersion="/courseregis/api/v1";
//accesinhcourseMaterial Route in app.js
const courseMaterialRoutes=require("./routes/courseMaterialRoutes")
const mongoose=require("mongoose")

require('dotenv').config()
const PORT=process.env.PORT || 3500

app.get(`${contextPathWithApiVersion}/heartbeat`,(req,res)=>{
    res.send("course enrollment system is working")
})
app.use(contextPathWithApiVersion,courseMaterialRoutes)

//database section
mongoose.connect("mongodb://localhost:27017/courseregis")
.then(()=>console.log("connected to MongoDB"))
.catch(err=>console.error("failed connecting MongoDB",err));

app.listen(PORT,()=>{
    console.log("server started in port: ",PORT )
});



