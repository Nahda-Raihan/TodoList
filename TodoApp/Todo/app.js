const express=require("express");
const app=express();
// require("./DB/connect");
const connectDB=require("./DB/connect")
const port=8000;
const Todo1=require("./Routes/tasks")
require('dotenv').config();
const notFound=require("./Middlewares/not-found")
const errorHandlerMiddleware=require("./Middlewares/errorHandler")


//middleware
app.use(express.json())
app.use("/api",Todo1)
app.use(notFound)
app.use(errorHandlerMiddleware)


const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`server listening at port no ${port}`))
    }
    catch(error){
        console.log(error)
    }
};
start();


// app.listen(port,console.log(`server listening at port number ${port}`))

