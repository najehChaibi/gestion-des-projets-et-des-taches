import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import {UpdateTask} from "../../actions/projectAction";






function TaskUpdate() {
  const [task, setTask] = useState([]);
  constructor(){
    super(props)
    this.task={
      title:'',
      description: '',
      startDate: '',
      endDate:''
    }
  }
  changeHandler = e =>{
    this.setTask({[e.target.title]: e.target.value})
  }
   submitHandler= e =>{
    e.prevntDefault()
    UpdateTask(this.task).then(res =>{
      console.log(res)
    })
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
}
  export default TaskUpdate;




