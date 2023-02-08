
 import React,{useState,useEffect} from "react" ;
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import {getAllProjects} from "../../actions/projectAction";
import { DeleteProject } from "../../actions/projectAction";
function ProjectList (){
  const [projects, setProjects] = useState([]);
  // useEffect(()=> {
  //   fetch("http://localhost:5000/api/project/AllProject")
  //   .then((response)=>{return response.json()})
  //   .then((data)=>setProjects(data));
  //   console.log('test react');
  // });

  useEffect(()=>{
   getAllProjects().then((data)=>{
     return data.json()}).then((data)=>setProjects(data))
console.log('tst');
   },[]);

   const handleDelete = (id) => {
    DeleteProject(id).then((res) => {  
      console.log(' delete projct');
    }
    );}
   

    return (
      <div style={{padding:"20px", margin: "50px"}}>
        <h1>List Project</h1> 
        
        <Link to="/Project_Add">  
        <Button>Add Project</Button>
        </Link>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">startDate</TableCell>
            <TableCell align="right">EndDate</TableCell>
            <TableCell align="right">More Info</TableCell>
            <TableCell align="right">Update</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {projects.map((project, index) => {
             console.log(project);
             return(
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {project.title}
              </TableCell>
              <TableCell align="right">{project.description}</TableCell>
              <TableCell align="right">{project.startDate }</TableCell>
              <TableCell align="right">{project.endDate }</TableCell>
              <TableCell align="right"><Link to="/Project/Task"> <IconButton><ErrorOutlineIcon/></IconButton></Link></TableCell>
              <TableCell align="right"><Link to="/Project_Update/:id"> <IconButton><BorderColorIcon/></IconButton></Link></TableCell>
              <TableCell align="right"> <IconButton aria-label="delete"  onClick={() => handleDelete(project.id)}><DeleteIcon /></IconButton></TableCell>
            </TableRow>
             );
        })}
        </TableBody>
      </Table>
    </TableContainer>


</div>
    );}
      

export default ProjectList