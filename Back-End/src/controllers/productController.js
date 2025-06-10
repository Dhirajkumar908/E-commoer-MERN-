const {Product}=require('../models/userModuls.js')


exports.addProduct=async (req, res)=>{
    try{
        const {name, price, description, category,image}=req.body;
        if(!name || !price || !description || !category || !image){
            return res.status(400).json({message:'Required fields missing'})
        }
        const produs= await Product({name, price, description, category,image})
        produs.save()
        return res.status(201).json({message:'Product added successfull'})

    }catch(e){
        return res.status().json({message:e})
    }
}