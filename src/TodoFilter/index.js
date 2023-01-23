import React from "react";
import './TodoFilter.css';
import { BiHome, BiMoney, BiBookBookmark, BiRun, BiSmile } from "react-icons/bi";
function TodoFilter() {
return(

    <div className="TodoFilter">
        <button>All</button>
        <button><span className="icon"><BiHome /> </span> Home Task</button>
        <button><span className="icon"><BiMoney /> </span> Work Task</button>
        <button><span className="icon"><BiBookBookmark /> </span> University Task</button>
        <button><span className="icon"><BiRun /> </span> Sport Task</button>
        <button><span className="icon"><BiSmile /> </span> General Task</button>
    </div>
    );
}

export { TodoFilter }; 
