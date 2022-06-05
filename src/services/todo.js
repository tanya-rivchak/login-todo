import store from '@/defaultStore';
import validate from "@/helpers/validation";

const { todoList } = store;

export default {
    getList(){
        if(!localStorage.todoList){
            localStorage.todoList = JSON.stringify(todoList);
        }
        
        const list = JSON.parse(localStorage.todoList);

        return list
    },
    removeTask(id){
        const list = JSON.parse(localStorage.todoList);
        const taskIndex = list.indexOf(list.find(task => task.id == id));
        
        list.splice(taskIndex, 1);
        localStorage.todoList = JSON.stringify(list);
        
        return list
    },
    addTask(textTask=""){
        const rules = {
            errorText: [textTask.trim().length > 0 || "The task is empty... Add a task"]
        }
        const {valid, errorText} = validate(rules);
        
        const response = {
            valid,
            data: errorText
        }
        
        if(valid){
            const newTask = {
                id: `task-${Date.now()}`,
                text: textTask,
                done: false
            }
            const list = JSON.parse(localStorage.todoList);

            list.push(newTask)
            localStorage.todoList = JSON.stringify(list);
            
            response.data = list  
        }
        return response
        
    },
    saveTask(updatedTask){
        const rules = {
            errorText: [updatedTask.text.trim().length > 0 || "The task is empty... Add a task or delete it"]
        }
        const {valid, errorText} = validate(rules);
        
        const response = {
            valid,
            data: errorText
        }
        
        if(valid){
            const list = JSON.parse(localStorage.todoList);
            const taskIndex = list.indexOf(list.find(task => task.id == updatedTask.id));
            
            list[taskIndex] = {
                ...list[taskIndex],
                ...updatedTask
            };
            localStorage.todoList = JSON.stringify(list);

            response.data = [taskIndex, list[taskIndex]]
        }
        
        return response
    }
}