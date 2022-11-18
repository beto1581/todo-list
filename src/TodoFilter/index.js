import React from "react";
import './TodoFilter.css';

function TodoFilter() {
return(

    <div className="todo-filter">
        <button>All</button>
        <button>Home Task</button>
        <button>Work Task</button>
        <button>University Task</button>
        <button>Sport Task</button>
        <button>General Task</button>
    </div>
    );
}

export { TodoFilter }; 
