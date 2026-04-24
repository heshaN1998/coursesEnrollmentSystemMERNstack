const express=require("express")
const app=express()
const PORT=3500
const contextPathWithApiVersion="/courseregis/api/v1";
//accesinhcourseMaterial Route in app.js
const courseMaterialRoutes=require("./routes/courseMaterialRoutes")

app.get(`${contextPathWithApiVersion}/heartbeat`,(req,res)=>{
    res.send("course enrollment system is working")
})
app.use(contextPathWithApiVersion,courseMaterialRoutes)

app.listen(PORT,()=>{
    console.log("server started in port: ",PORT )
});


