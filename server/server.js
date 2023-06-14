const express=require('express');
const cors = require('cors');
const morgan=require ('morgan');
const connect=require('./database/connection.js');
const router =require('./router/route.js')


const app=express();

//middleware
app.use(express.json());
app.use(cors());
// app.use(morgan('tiny'));
// app.disable('x-powered-by');
/**api routes */
app.use('/api/use',router);

const port = 8080;

app.get('/',(req,res)=>{
        res.status(201).json("Home GET Request");
});





connect().then(()=>{
    try {
        app.listen(port,()=>{
            console.log(`Server Connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log("Can Not Connect to the server")
    }
}).catch(error=>{
    console.log(error);
})

