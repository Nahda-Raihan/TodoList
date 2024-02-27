const mongoose=require('mongoose');
const TaskScheme = new mongoose.Schema({  

    name:{
        type:String,
        required:[true,"must provide name"],
        trim:true,
        maxlength:[20,"Name cannot be more than 20 characters"],
    },         
    completed:{
        type:Boolean,
        default:false,
    },
});




module.exports = mongoose.model('TaskName',TaskScheme)  

//Task is the name of collection//data stored in database in this format