const mongoose = require('mongoose');

async function connect(){
   const y= await mongoose.connect('mongodb://127.0.0.1:27017/Log_in');
    return y;
}
module.exports=connect;

//mongodb://127.0.0.1:27017/Log_in
//mongodb+srv://mayur:mayur@cluster0.hdowxj4.mongodb.net/?retryWrites=true&w=majority