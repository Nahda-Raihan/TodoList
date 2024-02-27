// const mongoose=require("mongoose");
// const ConnectionString="mongodb+srv://Nahda_Raihan:Swizzz23@cluster0.wzws3xu.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(ConnectionString)
// .then(()=>console.log("Connected to Data Base"))
// .catch((err)=>console.log(err));


const mongoose=require("mongoose");

const connectDB=(url)=>{
return mongoose.connect(url)
}

module.exports=connectDB;