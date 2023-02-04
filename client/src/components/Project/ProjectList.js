
import React,{useState,useEffect} from "react" ;

import { getAllProjects } from "../../actions/projectAction";
// import {connect} from "react-redux"
const ProjectList = (props)=>{
  const [projects,setprojects]=useState([]);

useEffect(()=>{
    getAllProjects().then((data)=>{
    return data.json()})
    .then((data)=>setprojects(data))
    console.log('test list');
   
  });

  // useEffect(()=>{
  //   props.getAllProjects().then((data)=>{
 
  //     setprojects(props.products)
      
  //   })
  //   console.log(props.products)
  //   },[])





    return (
      projects.map((project, index) => {
        return (
          <p key={index}>
            {project.title}</p>
    );
    }));

  }
export default ProjectList