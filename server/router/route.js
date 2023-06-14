const express=require('express');
const router=express.Router();
const controller=require('../controller/controller.js');



//POST METHODS
router.post('/register',controller.Register);
router.post('/registerMail',controller.RegisterMail);
router.post('/authenticate',controller.Authenticate);
router.post('/login',controller.Login);


//GET METHODS
router.get('/user/:username',controller.Username);
router.get('/generateOTP',controller.GenerateOTP);
router.get('/verifyOTP',controller.VerifyOTP);
router.get('/createResetSession',controller.ResetSession);



//PUT METHODS
router.put('/updateuser',controller.UpdateUser);
router.put('/updatePassword',controller.ResetPassword);



module.exports=router;


