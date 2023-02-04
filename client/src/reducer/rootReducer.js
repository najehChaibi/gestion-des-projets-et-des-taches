


// eslint-disable-next-line no-unused-vars
import { getAllProjects } from "../types";
const initialState = {
    projects:[],
    tasks :[]
}
const rootReducer = (state=initialState, action) =>{
    
    // eslint-disable-next-line default-case
    switch(action.type) {
         case "getAllProjects" : 
      return {...state};
    
    
    
    
    }
}

export default rootReducer