const mongoose= require("mongoose");


const User = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"mandatory"]
    },
      password:{
        type:String,
        required:[true,"mandatory"]
    }
},{
    timestamps:true
})


module.exports= mongoose.model('User',User);