function getTaskById(taskId) {
    const storedTasksString = localStorage.getItem('tasks');
    const storedTasks = JSON.parse(storedTasksString) || [];

    const foundTask = storedTasks.find(task => task.idTask === taskId);

    return foundTask;
}

export default getTaskById;