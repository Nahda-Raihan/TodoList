const express=require("express");
const router=express.Router();

const {getAllTasks,getTask,createTasks,updateTasks,deleteTasks}=require("../Controllers/tasks.js");

router.get("/",getAllTasks)
router.post("/",createTasks)
// router.get("/:id",getTask)
// router.get("/",getAllTasks).post(createTasks);
router.route("/:id").get(getTask).patch(updateTasks).delete(deleteTasks);

module.exports=router;