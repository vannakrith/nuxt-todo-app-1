import {defineStore} from 'pinia'
import type { ITask } from '~/interface/ITask';
const {saveToLocalStorage} = useUtils();
const LOCAL_STORAGE_KEY = 'saveTodo'

export const useTaskStore = defineStore('taskStore', () => {
    //State
    const tasks = ref<ITask[]>([]);

    onMounted(() => {
        //client side, load todo from local storage
        if(import.meta.client && typeof window !== 'undefined') { //import.meta.client is the nuxt3 specific runtime flag that is true only on client side (browser),false = on server side
            const saved = window.localStorage.getItem(LOCAL_STORAGE_KEY)
            if(saved) {
                tasks.value = JSON.parse(saved)
            }
            console.log('import.meta.client : ',import.meta);
            console.log(window);
            
        }

        //SAVE TO local storage
        if(import.meta.client && typeof window !== 'undefined') {
            watch(tasks, (newTask) => {
                saveToLocalStorage(LOCAL_STORAGE_KEY,newTask)
            }, {deep: true})
            console.log('meta.clients', import.meta.client);
        }
    })
    

    //Getters
    const countAllTasks = computed(() => tasks.value.length)
    const countUncompletedTasks = computed(() =>
        tasks.value.reduce((acc,currentValue) => !currentValue.isCompleted ? acc + 1 : acc, 0)
    )

    const countCompletedTasks = computed(() => 
        tasks.value.reduce((acc, currentValue) => currentValue.isCompleted ? acc + 1 : acc, 0)
    )
    
    const filterOnlyCompletedTasks = computed(() => 
         tasks.value.filter(task => task.isCompleted)
    )

    const filterOnlyUncompletedTasks = computed(() => 
        tasks.value.filter(task => !task.isCompleted)
    )

    //Actions
    const addTask = (todoInput: string) => {
        const randomId = Math.floor(Math.random() * 1000000);
        const newTask : ITask  = {
            id: randomId,
            content: todoInput,
            isCompleted: false
        }
        if(todoInput !== '') {
            tasks.value.push(newTask)
            console.log('added task', tasks.value);
        }
        
    }

    const deleteTask = (taskId: number) => {
        tasks.value = tasks.value.filter(task => task.id !== Number(taskId))
        console.log('tasks after deleted', tasks.value);
        
    }


    return {
        tasks,
        addTask,
        deleteTask,
        countAllTasks,
        countUncompletedTasks,
        countCompletedTasks,
        filterOnlyCompletedTasks,
        filterOnlyUncompletedTasks
    }

})