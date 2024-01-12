import React, { useEffect, useState } from "react";
import '../../index.css';
import getTasksByType from '../localStorage/getTasksByType';
import changeTaskState from "../localStorage/changeTaskState";

function InProgress({ onTaskClick }) {
    const [Tasks, setBacklogTasks] = useState([]);
    const [isInputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [buttonState, setButtonState] = useState(false);

    useEffect(() => {
        function getData() {
            let readyTask = getTasksByType('inProgress');
            setBacklogTasks(readyTask);
        };

        getData();
        const intervalId = setInterval(() => {
            getData();
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const backlogTasks = getTasksByType('ready');

    useEffect(() => {
        if(backlogTasks.length != 0) {
            setButtonState(true);
        } else {
            setButtonState(false);
        }
    }, [backlogTasks]);

    const optionsArray = [];

    backlogTasks.forEach(task => {
      optionsArray.push({
        idTask: task.id,
        nameTask: task.h1
      });
    });

    const handleInputChange = (event) => {
        setInputValue(event.target.value);

        const statusUpdateData = {
            taskId: event.target.value,
            updatedType: 'inProgress'
        };
        changeTaskState(statusUpdateData);

        setInputVisible(! isInputVisible);
    };
    
    const handleBtnClick = () => {
        setInputVisible(! isInputVisible);
    };

    return (
        <div className="task__component__div inProgress">
            <h1>InProgress</h1>
            <div className="task__component__div__container">
                {Tasks.map((task) => (
                    <button key={task.id} id={task.id} className="task__component__div__container__tasks" onClick={() => onTaskClick(task.id)}>
                        <p>{task.h1}</p>
                    </button>
                ))}
            </div>
            <div>
                {isInputVisible && (
                <div className="task__component__div__container__tasks task__component__div__container__tasks--input">
                    <select id="optionsList" className="task__component__div__container__tasks--input" value={inputValue} onChange={handleInputChange} required>
                        <option value=""></option>
                        {optionsArray.map((option, index) => (
                            <option key={index} value={option.idTask}>{option.nameTask}</option>
                        ))}
                    </select>
                </div>
                )}
                <button className="task__component__div__btn" onClick={handleBtnClick} disabled={!buttonState}>
                    <div className="task__component__div__btn--content__text">
                        <p>+</p>
                        <p className="task__component__div__btn--content__text--text">Add card</p>
                    </div>
                </button> 
            </div>
        </div>
    );
}

export default InProgress;