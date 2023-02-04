
const router = require("express").Router();
const Project = require("../models/project");



//create new Project

router.post("/addProject", async (req, res) => {
    const newProject = new Project(req.body);
  
    try {
      const savedProject = await newProject.save();
      res.status(200).json(savedProject);
    } catch (err) {
      res.status(500).json(err);
    }
});

// //GET ALL Project

router.get("/allProject", async (req, res) => {
    try {
 
        
      const projects = await Project.find();
      res.status(200).json(projects);
    } catch (err) {
      res.status(500).json(err);
    }
});


//UPDATE Project
router.put("/updateProject/:id", async (req, res) => {

    var id = req.params.id,
    project = await Project.findByIdAndUpdate({ _id: id },
       { $set: req.body}).exec((err) => {
            if(err){
             res.status(500).json(err);
             } 
             res.status(200).json(project);    
     });
 });

 //DELETE Project
router.delete("/deleteProject/:id",  async (req, res) => {
    try {
      await Project.findByIdAndDelete(req.params.id);
      res.status(200).json("Project has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });




  router.get("/user", (req, res)=>{

    res.send ("tst");
   });









module.exports = router;