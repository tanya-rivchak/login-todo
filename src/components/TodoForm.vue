<script setup>
import BaseInput from "@/components/BaseInput";
import PrimaryButton from "@/components/PrimaryButton";

import TodoService from '@/services/todo';
import { ref, inject } from 'vue';

const taskText = ref('');
const error = ref('');

const addTask = async(newTask) => {
  try{
    const response = await TodoService.addTask(newTask);
    if(response.valid){
        updateError('');
        updateTodoList(response.data);
        updateTaskText('');
    }else{
        updateError(response.data)
    }
  }catch(error){
    console.log(error)
  }
}

const updateError = (newVal) => {
    error.value = newVal;
}
const updateTaskText = (newVal) => {
    taskText.value = newVal;
}

const updateTodoList = inject('updateTodoList');
</script>

<template>
    <form @submit.prevent="addTask(taskText)" class="todo-item-form">
        <BaseInput v-model="taskText"
                   inputLabel="New Task"
                   :inputError="error"
                   @removeError="updateError('')"  />
        <PrimaryButton type="submit">Add</PrimaryButton>
    </form>
</template>

<style lang="scss" scoped>
.todo-item-form{
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
    width: 100%;
    margin-bottom: 15px;
    .input{
        margin-bottom: 0;
        width: 100%;
    }
    .btn{
        margin-left: 15px;
        height: 43px;
        padding-top: 5px;
        padding-bottom: 5px;
        @media screen and (min-width: 1024px){
            height: 53px;
        }
    }
}
</style>