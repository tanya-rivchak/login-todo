<script setup>
import TodoListItem from "@/components/TodoListItem";

import { defineProps, computed } from "vue";

const props = defineProps({
    todoList: {
        type: Array,
        default: () => ([])
    }
})

const isEmpty = computed(() => {
    return props.todoList.length == 0 ? true : false;
})
</script>

<template>
    <div class="todo-list" v-if="!isEmpty">
        <TodoListItem v-for="todoItem in todoList"
                      :key="todoItem.id"
                      :todoItem="todoItem" />
    </div>
    <div v-else style="margin-top: 30px;">
        No todos yet...
        <br>
        Create a new one! 
    </div>
</template>

<style lang="scss" scoped>
.todo-list{
    display: flex;
    flex-flow: column nowrap;
}
</style>