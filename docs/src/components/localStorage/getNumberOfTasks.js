function getNumberOfTasks(props) {
    // Получение текущего массива объектов из Local Storage
    const storedTasksString = localStorage.getItem('tasks');
    const storedTasks = JSON.parse(storedTasksString) || []; // Если массива нет, создаем пустой массив

    // Определенный тип задачи, который вы ищете
    const targetTypeTask = props; // Замените на нужный тип задачи

    // Подсчет задач с определенным typetask
    const countTasksWithTargetType = storedTasks.reduce((count, task) => {
        return count + (task.typeTask === targetTypeTask ? 1 : 0);
    }, 0);

    return countTasksWithTargetType;
}

export default getNumberOfTasks;
