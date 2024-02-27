const {classCustomApiError}=require("../Error/custom-error");
const {classCustomApiSuccess}=require("../Error/custom-error");
const errorHandlerMiddleware=(err,req,res,next)=>{
    // return res.status(500).json({msg:"Something Went Wrong"})

if(err instanceof classCustomApiError){
    return res.status(err.statusCode).json({msg:err.message})
}
else if(err instanceof classCustomApiSuccess){
    return res.status(err.statusCode).json({msg:err.message})
}
return res.status(500).json({msg:"Something Went Wrong"})
};

module.exports=errorHandlerMiddleware;