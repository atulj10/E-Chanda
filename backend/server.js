import express from 'express'
import dbConnect from './dbConnect.js';
import { createParchi, getAllParchi } from './Controllers/Puja1Controller.js';
import cors from 'cors'
import dotenv from 'dotenv'


dotenv.config();//Configuring the env file

const app=express()

//User body pareser to parse requested data from body
app.use(express.json())
app.use(cors())


//Connecting ot mongoDB 
dbConnect()



//server view
app.get('/',(req,res)=>{
    res.send('Welcome to SERVER side');
});

//routes
app.post('/api/v1/create',createParchi)
app.get('/api/v1/getAll',getAllParchi)

//listening to server
app.listen(process.env.PORT,()=>{
    console.log(`Server running at ${process.env.PORT}`);
});