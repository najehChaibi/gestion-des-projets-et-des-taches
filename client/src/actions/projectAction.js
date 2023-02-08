import axios from 'axios';
import {GETALLPROJECTS, ADDROJECT, UPDATEPROJECT, ADDTASK} from '../types';
import {GETTASKS, UPDATETASK, DELETETASK, } from '../types';






export const getAllProjects=()=>async (dispatch) =>{
      const res =  await axios.get("http://localhost:5000/api/project/AllProject")
      const data = await res.json()
      console.log('action js')
     dispatch({
         type: GETALLPROJECTS,
         payload : data.projects
     });
}

export const AddProject=(data)=>async(dispatch)=>{
     await axios.post("http://localhost:5000/api/project/AddProject", data)
     dispatch({
        type: ADDROJECT,
        payload: data

     });
}

export const UpdateProject=(id, data)=>async(dispatch)=>{
    await axios.post(`http://localhost:5000/api/project/updateProject/${id}`, data)
    dispatch({
       type: UPDATEPROJECT,
       payload: data
    });
}
export const DeleteProject=(id)=>async(dispatch)=>{
    await axios.post(`http://localhost:5000/api/project/deleteProject/${id}`)
    dispatch({
       type: UPDATEPROJECT,
       
    });
}
       
export const getTasks=(id)=>async (dispatch) =>{
    const res =  await axios.get(`http://localhost:5000/api/task/${id}`)
    const data = await res.json()
    console.log('action js')
   dispatch({
       type: GETTASKS,
       payload : data.tasks
   });
} 

export const AddTask=(id, data)=>async(dispatch)=>{
    await axios.post(`http://localhost:5000/api/task/AddTASK/${id}`, data)
    dispatch({
       type: ADDTASK,
       payload: data
    });
}

export const UpdateTask=(id, data)=>async(dispatch)=>{
    await axios.post(`http://localhost:5000/api/task/updateTask/${id}`, data)
    dispatch({
       type: UPDATETASK,
       payload: data
    });
}
export const DeleteTask=(id, data)=>async(dispatch)=>{
    await axios.post(`http://localhost:5000/api/task/deleteTask/${id}`, data)
    dispatch({
       type: DELETETASK,
       payload: data
    });
}
