import React from "react";
import './TodoFilter.css';
import { BiHome, BiMoney, BiBookBookmark, BiRun, BiSmile } from "react-icons/bi";
function TodoFilter({searchCategory, setSearchCategory}) {

 
    const CategoryButtonClick = (event) => {
        setSearchCategory(event.target.value); 
    };
return(

    <div className="TodoFilter">
        <button value={''} onClick={CategoryButtonClick}>All</button>
        <button value={'home-task'} onClick={CategoryButtonClick}><span className="icon"><BiHome /> </span> Home Task</button>
        <button value={'work-task'} onClick={CategoryButtonClick}><span className="icon"><BiMoney /> </span> Work Task</button>
        <button value={'university-task'} onClick={CategoryButtonClick}><span className="icon"><BiBookBookmark /> </span> University Task</button>
        <button value={'sport-task'} onClick={CategoryButtonClick}><span className="icon"><BiRun /> </span> Sport Task</button>
        <button value={'general-task'} onClick={CategoryButtonClick}><span className="icon"><BiSmile /> </span> General Task</button>
    </div>
    );
}

export { TodoFilter }; 
