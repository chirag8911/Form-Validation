const mongoose=require('mongoose');
const userScehema= new mongoose.Schema({
 name:{
     type:String,
     required:true
 },
 mobileno:{
     type:Number,
     required:true,
     min:10,
     unique:true
 },
 email:{
     type:String,
     unique:true,
     required:true
 },
 username:{
     type:String,
     required:true,
    
 },
 pass1:{
     type:String,
     required:true
 },
 pass2:{
    type:String,
    required:true  
 }
})

//now we need to create a collection
const Register= new mongoose.model("Register",userScehema);
module.exports=Register;