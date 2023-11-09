const mongoose=require ("mongoose");



const userSchema = new mongoose.Schema({
    name:{type:String,require:true},
    email: {type:String},
    password:{type:String},
    role:{type:String,enum:["Admin","Guest","User","DeliveryPerson"],default:"User"},
    img:{type:String}
    });
const User=mongoose.model("user",userSchema)

module.exports=User