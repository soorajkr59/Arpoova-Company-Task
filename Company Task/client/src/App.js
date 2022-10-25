
import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Tasks } from './component/Tasks';

import Task3 from './component/Task3';
import { Task6 } from './component/Task6';
import Task4 from './component/Task4';
import Task1 from './component/Task1';
import { Task2 } from './component/Task2';





function App() {
  return (
    <div>
{ <BrowserRouter>
      <Routes>
        <Route path='/' element={<Tasks/>}/>
        <Route path='/task1' element={<Task1/>}/>
        <Route path='/task2' element={<Task2/>}/>
        <Route path='/task3' element={<Task3/>}/>
        <Route path='/task6' element={<Task6/>}/>
        <Route path='/task4' element={<Task4/>}/>
        </Routes>      
        </BrowserRouter> }
         
     
    </div>
  );
}

export default App;
