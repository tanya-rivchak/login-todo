<script setup>
import PrimaryButton from "@/components/PrimaryButton"

import TodoService from '@/services/todo';
import { defineProps, ref, inject, computed } from "vue";

const props = defineProps({
    todoItem:{
        type: Object,
        default: () => ({})
    }
});

// task text 
const taskText = ref(props.todoItem.text);
// if task changed - show buttons to save/cancel new task text
const isTextChanged = computed(() => {
    return taskText.value.trim() != props.todoItem.text.trim() ? true : false
})

// methods for buttons
// changeCheckbox and save - exists to create updatedTask
// task done or not
const changeCheckbox = () => {
  const updatedTask = {
    ...props.todoItem,
    done: !props.todoItem.done
  }
  saveTask(updatedTask)
}
// save new task text
const save = () => {
    const updatedTask = {
        ...props.todoItem,
        text: taskText.value
    }
    saveTask(updatedTask)
}
// cancel new task text
const cancel = () => {
    updateTaskText(props.todoItem.text);
    updateError("")
}
// remove task
const remove = async() => {
    try{
        const response = await TodoService.removeTask(props.todoItem.id);

        updateTodoList(response)
    }catch(error){
        console.log(error)
    }
}

// validation - task shouldn't be empty
const error = ref("");
const isTaskEmpty = computed(() => {
    return error.value.trim().length == 0 ? false : true
})

// save task
const saveTask = async(updatedTask) => {
    try{
        const response = await TodoService.saveTask(updatedTask);

        if(response.valid){
            updateError("");
            updateTask(response.data);
        }else{
            updateError(response.data);
        }
    }catch(error){
        console.log(error)
    }
}

// methods to update state
const updateTaskText = (newText) => {
    taskText.value = newText;
}
const updateError = (newVal) => {
    error.value = newVal
}

const updateTodoList = inject('updateTodoList');
const updateTask = inject('updateTask');
</script>

<template>
    <div class="todo-item">
        <div class="todo-item__body">
            <label class="todo-item__checkbox">
                <input type="checkbox" 
                    :name="todoItem.id"
                    :checked="todoItem.done"
                    @change="changeCheckbox(todoItem.id)" />
                <span></span>
            </label>
            <div class="todo-item__text" 
                :contenteditable="true"
                @keyup="updateTaskText($event.target.innerText)"
                @click="updateError('')">
                {{ taskText }}
            </div>
            <span class="error-text" 
                  v-show="isTaskEmpty" >
                {{ error }}
            </span>
            <PrimaryButton class="small error" 
                           @click="remove">✖</PrimaryButton>
        </div>
        <div class="todo-item__btns"
             v-show="isTextChanged">
            <PrimaryButton class="small" 
                           @click="save">save</PrimaryButton>
            <PrimaryButton class="small" 
                           @click="cancel">cancel</PrimaryButton>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.todo-item{
    display: flex;
    flex-flow: column nowrap;
    padding-top: 15px;
    position: relative;
    font-size: 16px;
    line-height: 18px;
    border-top: 1px solid #dfdfdf;
    margin-top: 15px;
    &__body{
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
        width: 100%;
        >*{
            &:not(:last-child){
                margin-right: 15px;
            }
        }
    }
    &__checkbox{
        position: relative;
        height: 30px;
        min-width: 30px;
        display: block;
        cursor: pointer;
        input{
            display: none;
            &:checked~span::after{
                opacity: 1;
            }
        }
        span{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            background: rgba(0, 0, 0, .15);
            &::after{
                content: '✔';
                font-size: 20px;
                line-height: 22px;
                color: var(--primary);
                opacity: 0;
                transition: opacity .3s ease-in;
            }
        }
    }
    &__text{
        flex: 1;
        width: 100%;
        cursor: text;
        padding-top: 7px;
        flex: 1;
        width: 100%;
        position: relative;
        z-index: 1;
    }
    &__btns{
        display: flex;
        flex-flow: row nowrap;
        margin-left: auto;
        margin-right: 0;
        >*{
            margin-top: 15px;
            margin-left: 15px;
        }
    }
    @media screen and (min-width: 1024px){
        font-size: 20px;
        line-height: 22px;
        padding-top: 30px;
        margin-top: 30px;
        &__text{
            padding-top: 5px;
        }
    }
}
.error-text{
    color: var(--error);
    position: absolute;
    left: 45px;
    top: 23px;
    @media screen and (min-width: 1024px){
        top: 35px
    }
}
</style>