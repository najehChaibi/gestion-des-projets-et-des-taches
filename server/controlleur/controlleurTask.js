
const router = require("express").Router();
const Task = require("../models/task");
const Project = require("../models/project");



//create new Task 

router.post("/addTask/:_id", async (req, res) => {
    _id = req.params._id;
    console.log(_id);
    const newTask = new Task(req.body);
    // req.body.project = _id;

    try {
      
      console.log('test 1');
     const project =  await  Project.findById(_id);
     const savedTask = await newTask.save();
    console.log('test 2');
    console.log(project);
    res.status(200).json(savedTask); 
    

    } catch (err) {
      res.status(500).json(err);
    }
});
//, { $push: { tasks: savedTask._id } }
// router.post('/addTodo/:_id', async (req, res)=>{
//     //id user
//     _id = req.params;
//     //add user
//     const todo = await  new Todo (req.body);
//      //get user
//     const user =  await User.findById(_id);
//       todo.users = user;
//      await todo.save();
//      user.todos.push(todo);
//      await user.save();
//       res.json(todo);
// })



router.get("/allTasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
});

 //GET ALL Task by project
router.get("/allTask/:id", async (req, res) => {
  var id = req.params.id;
    try { 
      const tasks = await Project.findById(id).populate('tasks');
      res.status(200).json(tasks);
    } catch (err) {
      res.status(500).json(err);
    }
});


//UPDATE Task
router.put("/updateTask/:id", async (req, res) => {
    var id = req.params.id,
    task = await Task.findByIdAndUpdate({ _id: id },
       { $set: req.body}).exec((err) => {
            if(err){
             res.status(500).json(err);
             }     
     });
     res.status(200).json(task);
 });

 //DELETE Task
router.delete("/deleteTask/:id",  async (req, res) => {
    try {
      await Task.findByIdAndDelete(req.params.id);
      res.status(200).json("Task has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });




  router.get("/user", (req, res)=>{

    res.send ("tst");
   });









module.exports = router;