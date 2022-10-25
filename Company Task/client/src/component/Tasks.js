import React from "react";
import { Link } from "react-router-dom";

export function Tasks()
{
    return(
        
        <div className="text-center tasks">
            
         <Link to='/task1'> <button>Task1  - kanban Board Api</button></Link>
            <Link to='/task2'><button>Task2 - Autocorrection</button></Link>
           <Link to='/task3' ><button>Task3  - BIt Logic</button></Link>
            <Link to='/task4'><button>Task4  - Movie Title</button></Link>
            
           <Link to='/task6'> <button>Task6  - Positioning</button></Link>
        </div>
      

    );
}