const asyncHandler=require('express-async-handler');
const Usermodel=require('../model/User.model.js')



exports.Register=asyncHandler(async(req,res)=>{
    console.log("herer")
    res.json('Register Route');

});


exports.RegisterMail=asyncHandler(async(req,res)=>{
    res.json('RegisterMail Route');
});


exports.Authenticate=asyncHandler(async(req,res)=>{
    res.json('Authenticate Route');
});


exports.Login=asyncHandler(async(req,res)=>{
    res.json('login Route');
});


exports.Username=asyncHandler(async(req,res)=>{
    res.json('username Route');
});


exports.GenerateOTP=asyncHandler(async(req,res)=>{
    res.json('generate Route');
});


 exports.VerifyOTP=asyncHandler(async(req,res)=>{
    res.json('verify Route');
});


 exports.ResetSession=asyncHandler(async(req,res)=>{
    res.json('resetsession Route');
});


 exports.UpdateUser=asyncHandler(async(req,res)=>{
    res.json('updateUser Route');
});


exports.ResetPassword=asyncHandler(async(req,res)=>{
    res.json('resetPassword Route');
});
