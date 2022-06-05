<script setup>
import PageLayout from "@/layouts/PageLayout"

import TodoForm from "@/components/TodoForm"
import TodoList from "@/components/TodoList"

import TodoService from '@/services/todo';
import { reactive, provide, onMounted } from 'vue';

const store = reactive({
  todoList: []
});

const getTodoList = async() => {
  try{
    const response = await TodoService.getList();
    updateTodoList(response)
  }catch(error){
    console.log(error)
  }
}

const updateTodoList = (newTodoList) => {
  store.todoList = newTodoList;
}
const updateTask = ([index, newTask]) => {
  store.todoList[index] = newTask
}

onMounted(() => {
  getTodoList();
})

provide('updateTodoList', updateTodoList)
provide('updateTask', updateTask)
</script>

<template>
  <PageLayout>
    <TodoForm @updateTodoList="updateTodoList" />
    <TodoList :todoList="store.todoList" />
  </PageLayout>
</template>
