import {  applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { legacy_createStore } from 'redux';

const middleware = [thunk];


const store = legacy_createStore(

    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  export default store;