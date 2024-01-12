import getTaskById from "./searchTaskById";
import setDataInLocalStorage from "./setData";

function changeTaskState(statusUpdateData) {
    const { updatedType, taskId } = statusUpdateData;
    
    const task = getTaskById(taskId);

    const updateTask = {
        typeTask: updatedType,
        id: task.idTask
    };

    setDataInLocalStorage(updateTask);
} 

export default changeTaskState;