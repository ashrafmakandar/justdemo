const e = require('express');
const mongoose = require('mongoose');
require("dotenv").config();


const connect = async()=>{
    try {

        const conn= await mongoose.connect(process.env.MONGO_URL);
        console.log("db connected");
        
    } catch (error) {
        console.log("error",e);

        process.kill(1);
        
    }
}


module.exports= connect;