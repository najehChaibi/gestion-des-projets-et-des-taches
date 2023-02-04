import axios from 'axios';
import {GETALLPROJCTS} from "../types";




export const getAllProjects = () =>async (dispatch) =>{
      const res =  await axios.get("http://localhost:5000/api/project/AllProject")
      const data = await res.json()
      console.log('action js')
     dispatch({
         type: getAllProjects,
         payload : data.projects
     })
    
}

