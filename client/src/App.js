
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  ProjectList  from './components/Project/ProjectList';
import ProjectAdd from './components/Project/ProjectAdd';
import ProjectUpdate from './components/Project/ProjectUpdate';
import TaskList from './components/Task/TaskList';
import TaskAdd from './components/Task/TaskAdd';
import TaskUpdate from './components/Task/TaskUpdate';

function App() {
  return (
   <div>
   <BrowserRouter>
   <Routes>
    <Route>
    <Route path='/' element={<ProjectList/>} />
    <Route path='/Project_Add' element={<ProjectAdd/>} />
    <Route path='/Project_Update/:id' element={<ProjectUpdate/>} />
    <Route path='/Project/Task' element={<TaskList/>} />
    <Route path='/Project/Task_Add' element={<TaskAdd/>} />
    <Route path='/Project/Task_Update/:id' element={<TaskUpdate/>} />
    </Route>
   </Routes>


    </BrowserRouter></div>
  );
}

export default App;
