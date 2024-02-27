class classCustomApiError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
    }
}
createCustomError=(msg,statusCode)=>{
    return new classCustomApiError(msg,statusCode)
};
module.exports={createCustomError,classCustomApiError}

// class classCustomApiSuccess extends Error{
//     constructor(message,statusCode){
//         super(message)
//         this.statusCode=statusCode
//     }
// }



// createCustomSuccess=(msg,statusCode)=>{
//     return new classCustomApiSuccess(msg,statusCode);
// }


    // ,classCustomApiSuccess,createCustomSuccess
