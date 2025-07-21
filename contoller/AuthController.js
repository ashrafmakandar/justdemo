const User = require('../models/User');
const  hashed = require("bcryptjs");
const { json } = require('express');
const jwt= require("jsonwebtoken");


const loginUser=async(req,res)=>{

        const {email,password}= req.body;

 const check = await User.findOne({email});
  if(!check)
        {
            return res.status(401).json({"status":"wrong creds"});
        }
        const pwd =  hashed.compare(password,check.password);
        if(!pwd)
        {
            return  res.status(401).json({"status":"user not matching"}); 
        }

      
const st= jwt.sign({userId:check._id,},process.env.JWT_TOKEN,{
    "expiresIn":"2h"
});

res.status(201).json({
    "token":st
})



}

const registerUser = async(req,res)=>{

    try {

  
        const {email,password}= req.body;
              const check= await User.findOne({email});
              const pwd=  await hashed.hash(password,10);
        if(check)
        {
            res.status(401).json({"status":"user already registred"});
        }

const created =  User({email,password:pwd});
await created.save();
res.status(201).json({
    "status":"user created"
})
        
        
    } catch (error) {
        console.log("error",error);
        
    }
    
}

module.exports={loginUser,registerUser};