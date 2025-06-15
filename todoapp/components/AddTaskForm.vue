<template>
    <div>
        <form
            @submit.prevent
            class="my-2 flex gap-4"
        >
            <el-input
            v-model="input"
            style="width: 240px"
            placeholder="Please input"
            clearable
            />
            <el-button 
                type="primary"
                @click="addNewTask"
            >Add Task
            </el-button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore } from '~/store/taskStore';
const taskStore = useTaskStore();

const input = ref<string>('');
const { addTask} = taskStore;

const addNewTask = () => {
    addTask(input.value)
    input.value = '';
}
console.log('From AddTaskForm.vue');

</script>

<style scoped>

</style>