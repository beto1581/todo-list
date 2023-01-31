import React from 'react';
import './TodoItem.css';
import { BiHome, BiMoney, BiBookBookmark, BiRun, BiSmile, BiCheck } from "react-icons/bi";

function TodoItem(props) {
    const availableOptions = [
        {
            value: 'home-task',
            text: "Home Task",
            icon: <BiHome />
        },
        {
            value: 'work-task',
            text: 'Work Task',
            icon: <BiMoney />
        },
        {
            value: 'university-task',
            text: 'University Task',
            icon: <BiBookBookmark />
        },
        {
            value: 'sport-task',
            text: 'Sport Task',
            icon: <BiRun />
        },
        {
            value: 'general-task',
            text: 'General Task',
            icon: <BiSmile />
        }
    ];

    function getSelection(cat) {
        let icon = availableOptions.filter((cat2) => {
            return (cat2.value === cat);
        });
        return icon[0].icon;
    }
    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                <BiCheck />
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                <span className='TodoItem-p--icon'> {getSelection(props.category)}</span>
                <span className='TodoItem-p--tittle'>{props.text}</span>

            </p>
            <span
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                X
            </span>
        </li>
    );
}

export { TodoItem };