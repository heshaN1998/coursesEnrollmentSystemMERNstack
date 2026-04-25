const User=require("../model/userModel")
const bcrypyt=require("bcrypt")
const { v4:uuid } =require.apply('uuid')

async function addUser(user){
    try {
        const hashPassword=await bycrypt.hash(useReducer.password,10)
        const newUser=new User({
            userId:uuid(),
            firstName:user.lastName,
            lastName:user.lastName,
            email:user.email,
            password:hashPassword,
            role:user.role
        })
        return newUser.save();
        
    } catch (err) {
        console.err("User created failed",err)
        throw err;
    }
}