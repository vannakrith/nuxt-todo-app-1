<template>
  <div class="flex justify-around my-4">
        <span class="text-sm"> <span class="active-number">{{ countUncompletedTasks }}</span> Todo</span>
        <span class="text-sm"> <span class="completed-number">{{ countCompletedTasks }}</span>  Completed</span>
        <el-button type="primary" plain :class="{'active-btn' : filter === 'All'}"  @click="filter = 'All'" >All Tasks</el-button>
        <el-button type="primary" plain :class="{'active-btn' : filter === 'Uncompleted'}" @click="filter = 'Uncompleted'">Todo Tasks</el-button>
        <el-button type="primary" plain :class="{'active-btn' : filter === 'Completed'}" @click="filter = 'Completed'">Completed Tasks</el-button>
    </div>

  <!--For display all task-->
  <div class="flex-row">
      <el-card 
      style="max-width: 480px"
      v-if="filter === 'All'"
      >
      <ul 
        v-for="task in sortedTasks"
        :key="task.id"
        >
        <li class="flex justify-between items-center w-full my-2">
          <div class="flex items-center">
            <input v-model="task.isCompleted"  type="checkbox">
            <span :class="{'completed' : task.isCompleted}" class="ml-2">{{ task.content }}</span>
          </div>
          <el-button type="danger" :icon="Delete" circle @click="deleteTask(task.id)"></el-button>
        </li>
      </ul>
    
      </el-card>
    </div>
    <!-- display for uncompleted tasks-->
  <div class="flex-row">
      <el-card 
      style="max-width: 480px"
      v-if="filter === 'Uncompleted'"
      >
      <ul 
        v-for="task in filterOnlyUncompletedTasks"
        :key="task.id"
        >
        <li class="flex justify-between items-center w-full my-2">
          <div class="flex items-center">
            <input v-model="task.isCompleted"  type="checkbox">
            <span :class="{'completed' : task.isCompleted}" class="ml-2">{{ task.content }}</span>
          </div>
          <el-button type="danger" :icon="Delete" circle @click="deleteTask(task.id)"></el-button>
        </li>
      </ul>
    
      </el-card>
    </div>

    <!-- display for completed tasks-->
  <div class="flex-row">
      <el-card 
      style="max-width: 480px"
      v-if="filter === 'Completed'"
      >
      <ul 
        v-for="task in filterOnlyCompletedTasks"
        :key="task.id"
        >
        <li class="flex justify-between items-center w-full my-2">
          <div class="flex items-center">
            <input v-model="task.isCompleted"  type="checkbox">
            <span :class="{'completed' : task.isCompleted}" class="ml-2">{{ task.content }}</span>
          </div>
          <el-button type="danger" :icon="Delete" circle @click="deleteTask(task.id)"></el-button>
        </li>
      </ul>
    
      </el-card>
    </div>
</template>

<script setup lang="ts">
import { useTaskStore } from '~/store/taskStore';
import { Delete } from '@element-plus/icons-vue';
const taskStore = useTaskStore();
const {sortedTasks} = useTask()

const {tasks, filterOnlyCompletedTasks, filterOnlyUncompletedTasks, countAllTasks, countCompletedTasks, countUncompletedTasks} = storeToRefs(taskStore);
const {deleteTask} = taskStore;

const filter = ref<string>('All')

console.log('From DisplayTask.vue');


</script>

<style scoped>
button {
  cursor: pointer;
}

.el-button {
  cursor: pointer;
}

[type="checkbox"] {
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
}
.active-number {
  color: rgb(14, 17, 218);
  font-weight: bold;
}
.completed-number {
  color: rgb(16, 234, 125);
  font-weight: bold;
}
.active-btn {
  background-color: rgb(64, 158, 255);
  color: white;
}


</style>