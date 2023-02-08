// eslint-disable-next-line no-unused-vars
import {GETALLPROJECTS, ADDROJECT, UPDATEPROJECT, DELETEPROJECT  } from "../types";
// import {GETTASKS, ADDTASK, UPDATETASK, DELETETASK} from '../types';



const initialState = {
    projects:[],
    tasks :[]
}


const rootReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "GETALLPROJECTS":
            return {...state}
            
        case "ADDROJECT":
            return {...state} 
            case "UPDATEPROJECT":
            return  {...state} 
            case "DELETEPROJECT":
            return  {...state}  
            case "GETTASKS":
            return  {...state}
            case "ADDTASK":
            return  {...state}
            case "UPDATETASK":
            return  {...state}
            case "DELETETASK":
            return  {...state}
    }
}

export default rootReducer;