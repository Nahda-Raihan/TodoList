const TaskModel=require('../Models/task')
const asyncWrapper=require("../Middlewares/async")
const{createCustomError}=require("../Error/custom-error")
const{createCustomSuccess}=require("../Error/custom-error")

const getAllTasks = asyncWrapper(async (req,res)=>{
        const task=await TaskModel.find({});
        res.status(200).json({task});  
});



const getTask= asyncWrapper(async (req,res,next)=>{
    
        const{id:taskID}=req.params;
        const task=await TaskModel.findOne({_id:taskID})
        if(!task){
            // return res.status(404).json({msg:`No task with this id:${taskID}`})
        //     const error =new Error("Not Found")
        //    error.status=404;
        //    return next(error)

        return next(createCustomError(`There Is No Product With This ID:${taskID}`,404))
        }
        res.status(200).json({task})
        return next(createCustomSuccess({task},200))
    
})


const createTasks= asyncWrapper(async (req,res)=>{
    const taskNewField=await TaskModel.create(req.body)
    res.status(201).json({taskNewField})
})


const updateTasks= asyncWrapper(async (req,res,next)=>{
        const{id :taskID}=req.params;
        const task=await TaskModel.findOneAndUpdate({_id: taskID},req.body);
        if(!task){
            // return res.status(404).json({msg:`No task With this id${taskID}`})

        //    const error =new Error("Not Found")
        //    error.status=404;
        //    return next(error)
        return next(createCustomError(`There Is No Product With This ID:${taskID}`,404))
        }
        res.status(200).json({task,nbHits:task.length})
})


const deleteTasks=asyncWrapper(async (req,res,next)=>{
        const{id:taskID}=req.params;
        const task=await TaskModel.findOneAndDelete({_id: taskID})

        if(!task){
            // return res.status(404).json({mgs:`No Task With this Id${taskID}`})
        //     const error =new Error("Not Found")
        //    error.status=404;
        //    return next(error)
        return next(createCustomError(`There Is No Product With This ID:${taskID}`,404))
        }
        res.status(200).json({task})
})
module.exports={getAllTasks,updateTasks,deleteTasks,createTasks,getTask}





 // try{
    //     const{id:taskID}=req.params;
    //     const task=await TaskModel.findOne({_id:taskID})
    //     if(!task){
    //         return res.status(404).json({msg:`No task with this id:${taskID}`})
    //     }
    //     res.status(200).json({task})
    // }
    // catch(error){
    //     res.status(500).json({msg:error})
    // }



    //try{
        //     const{id :taskID}=req.params;
        //     const task=await TaskModel.findOneAndUpdate({_id: taskID},req.body);
        //     if(!task){
        //         return res.status(404).json({msg:`No task With this id${taskID}`})
        //     }
        //     res.status(200).json({task,nbHits:task.length})
        // }
        // catch(error){
        //     return res.status(500).json({msg:error})
        // }



        //try{
            //     const{id:taskID}=req.params;
            //     const task=await TaskModel.findOneAndDelete({_id: taskID})
        
            //     if(!task){
            //         return res.status(404).json({mgs:`No Task With this Id${taskID}`})
            //     }
            //     res.status(200).json({task})
            // }
            // catch(error){
            //     return res.status(500).json({msg:error})
            // }