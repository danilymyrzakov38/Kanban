function getTasksByType(props) {
    const storedTasksString = localStorage.getItem('tasks');
    const storedTasks = JSON.parse(storedTasksString) || [];

    const countTasksWithTargetType = storedTasks.filter(task => task.typeTask === props);

    const tasks = countTasksWithTargetType.map(task => ({
        id: task.idTask,
        h1: task.nameTask
    }));

    return tasks;
}

export default getTasksByType;