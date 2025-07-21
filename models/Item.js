const mongoose= require("mongoose");


const Item = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is compulsory"]
    },
      content:{
        type:String,
        required:[true,"content is compulsory"]
    },

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'

    }
},{
    timestamps:true
})

module.exports= mongoose.model('Item',Item);