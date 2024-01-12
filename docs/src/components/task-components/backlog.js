import React, { useEffect, useState } from "react";
import '../../index.css';
import AddTaskBacklog from "./addTaskBacklog";
import getTasksByType from '../localStorage/getTasksByType';

function Backlog({ onTaskClick }) {
    const [Tasks, setBacklogTasks] = useState([]);

    useEffect(() => {
        function getData() {
            let backlogTask = getTasksByType('backlog');
            setBacklogTasks(backlogTask);
        }

        getData();
        const intervalId = setInterval(() => {
            getData();
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="task__component__div backlog">
            <h1>Backlog</h1>
            <div className="task__component__div__container">
                {Tasks.map((task) => (
                    <button key={task.id} id={task.id} className="task__component__div__container__tasks" onClick={() => onTaskClick(task.id)}>
                        <p>{task.h1}</p>
                    </button>
                ))}
            </div>
            <AddTaskBacklog />
        </div>
    );
}

export default Backlog;
