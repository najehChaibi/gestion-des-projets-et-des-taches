import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import {AddProject } from "../../actions/projectAction";







function ProjectAdd() {
  const [projects, setProjects] = useState([]);
  constructor(){
    super(props)
    this.project={
      title:'',
      description: '',
      startDate: '',
      endDate:''
    }
  }

  changeHandler = e =>{
    this.setProject({[e.target.title]: e.target.value})
  }
   submitHandler= e =>{
    e.prevntDefault()
    AddProject(this.project).then(res =>{
      console.log(res)
    })

   }
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");
    return (
     <div style={{padding:"180px", margin: "50px", width: "70%"  }}><h1>Add Project</h1>
    <Box component="form"sx={{'& .MuiTextField-root': { m: 1, width: '50ch' },}} noValidate autoComplete="off">
    <form onSubmit={this.submitHandler}>
      <div>
        <TextField type="text" label="title" value={title} onChange={this.changeHandler}/>
        <TextField type="text" label="Description" value={description} onChange={this.changeHandler}/>
      </div>
      <div>
       
       <TextField label="Starte Date" type="date" value={startDate} defaultValue="2023-05-24" onChange={this.changeHandler}/>
        <TextField label="End Date" type="date" defaultValue="2023-05-24" value={endDate} onChange={this.changeHandler}/>
      </div>
      <Button variant="contained" type='submit' style={{ width: "30%" , justifyItems: "center" , left : "270px", top: "20px"}}>Register</Button>
      </form>
    </Box>
   </div>
    );
  }
  
  export default ProjectAdd;




