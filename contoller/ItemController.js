const Item = require('../models/Item');

const getAllItems= async (req,res)=>{
    try {

        const items = await Item.find({userId:req.body.id});
        res.json({
            "items":items
        })
        
    } catch (error) {
        
    }
}


const addItem= async (req,res)=>{
    try {
        console.log(req);

        const items = await Item.create({...req.body,userId:req.user.userId});
        const all = await Item.find();
        res.json({
           "status":"item created successfully",
           "items":all
        })
        
    } catch (error) {
        
    }
}


const deleteItem = async (req,res)=>{
    console.log(req);
    try {

        const items = await Item.findByIdAndDelete(req.params.id)
        const all = await Item.find();
        res.json({
           "status":"item deleted successfully",
           "items":all
        })
        
    } catch (error) {
        
    }
}



const updateItem = async (req,res)=>{
    try {
        console.log(req);

        const items = await Item.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        });
        const all = await Item.find();
        res.json({
           "status":"item updated successfully",
           "items":all
        })
        
    } catch (error) {
        
    }
}

module.exports={getAllItems,updateItem,deleteItem,addItem};