
// import axios from 'axios';
import React,{useState,useEffect} from "react" ;
// import { getAllProjects } from "../../actions/projectAction";
// import {connect} from "react-redux"
// import React, {Component} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
function TaskList (){
  const [projects, setProjects] = useState([]);
  useEffect(()=> {
    fetch("http://localhost:5000/api/task/allTask/63d5aafad97e1d7f94b44e2b")
    .then((response)=>{return response.json()})
    .then((data)=>setProjects(data));
  });

         
    return (
      <div style={{padding:"20px", margin: "50px"}}>
        <h1>List Tasks</h1> 
        <Link to="/Project/Task_Add/:id">  
        <Button>Add Task</Button>
        </Link>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">startDate</TableCell>
            <TableCell align="right">EndDate</TableCell>
            <TableCell align="right">Update</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {projects.map((project, index) => {
             console.log(project, 'tst');
             return(
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {project.tasks.title}
              </TableCell>
              <TableCell align="right">{project.tasks.description}</TableCell>
              <TableCell align="right">{project.tasks.endDate}</TableCell>
              <TableCell align="right">{project.tasks.completed}</TableCell>
              <TableCell align="right"><Link to="/Project/Task_Update/:id"> <IconButton><BorderColorIcon/></IconButton></Link></TableCell>
              <TableCell align="right"> <IconButton aria-label="delete"><DeleteIcon /></IconButton></TableCell>
            </TableRow>
             );
        })}
        </TableBody>
      </Table>
    </TableContainer>
</div>
);}
    

export default TaskList