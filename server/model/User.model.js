const mongoose=require('mongoose');

const UserSchema= new mongoose.Schema({
    username :{
        type : String,
        required:[true,"Username Required !!"],
        unique : [true,"Username Exists!!"]
    },
    password:{
        type:String,
        required:[true,"Password Required!!"],
        unique:false
    },
    email :{
        type: String,
        required:[true,"Email Required"],
        unique:[true,"Enter Unique Email"]
    },
    address:{type:String},
    firstName:{type:String},
    lastName:{type:String},
    mobile:{type:Number},
    profile:{type:String}

});

const schema=mongoose.model('myModel',UserSchema);
module.exports=schema;
