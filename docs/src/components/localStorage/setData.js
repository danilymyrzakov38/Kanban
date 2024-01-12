import getTaskById from './searchTaskById';

function setDataInLocalStorage(props) {
    let { typeTask, h1, editText, id } = props;

    if (typeTask === 'backlog') {
        const storedTasksString = localStorage.getItem('tasks');
        const storedTasks = JSON.parse(storedTasksString) || [];

        function generateUniqueId() {
            const timestamp = new Date().getTime();
            const random = Math.floor(Math.random() * 10000);
            return `${timestamp}${random}`;
        }
    
        const newTask = {
            idTask: generateUniqueId(),
            typeTask: 'backlog',
            nameTask: h1,
            desc: ''
        };
    
        storedTasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    } else if (typeTask === 'finished') {
        const foundTask = getTaskById(id);

        foundTask.typeTask = 'finished';
        
        const storedTasksString = localStorage.getItem('tasks');
        const storedTasks = JSON.parse(storedTasksString) || [];
        
        const foundTaskIndex = storedTasks.findIndex(task => task.idTask === id);
        
        storedTasks[foundTaskIndex] = foundTask;
        
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    } else if (typeTask === 'ready') {
        const foundTask = getTaskById(id);
        
        foundTask.typeTask = 'ready';
        
        const storedTasksString = localStorage.getItem('tasks');
        const storedTasks = JSON.parse(storedTasksString) || [];
        
        const foundTaskIndex = storedTasks.findIndex(task => task.idTask === id);
        
        storedTasks[foundTaskIndex] = foundTask;
        
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    } else if (typeTask === 'inProgress') {
        const foundTask = getTaskById(id);
        
        foundTask.typeTask = 'inProgress';
        
        const storedTasksString = localStorage.getItem('tasks');
        const storedTasks = JSON.parse(storedTasksString) || [];
        
        const foundTaskIndex = storedTasks.findIndex(task => task.idTask === id);
        
        storedTasks[foundTaskIndex] = foundTask;
        
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    } else if (typeTask === 'edit') {
        const foundTask = getTaskById(id);
        
        foundTask.desc = editText;
        
        const storedTasksString = localStorage.getItem('tasks');
        const storedTasks = JSON.parse(storedTasksString) || [];
        
        const foundTaskIndex = storedTasks.findIndex(task => task.idTask === id);
        
        storedTasks[foundTaskIndex] = foundTask;
        
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}

export default setDataInLocalStorage;