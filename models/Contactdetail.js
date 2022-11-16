const mongoose = require('mongoose');

const contactdetailSchema=new mongoose.Schema({
  name:{type:String,required:true},
  phone:{type:Number,required:true},
  email:{type:String},
  message:{type:String}
})

const ContactdetailModel=mongoose.model("contactdetail",contactdetailSchema)

module.exports=ContactdetailModel
