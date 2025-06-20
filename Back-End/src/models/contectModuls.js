const mongoose=require('mongoose');

const contectSChema=new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    message:{type:String, required:true}
})

const Contact=mongoose.model("Contect", contectSChema);

module.exports={Contact};