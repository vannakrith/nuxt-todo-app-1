import type { ITask } from "~/interface/ITask"
import { useTaskStore } from "~/store/taskStore"

export const useTask = () => { 
   const taskStore = useTaskStore();
   const {tasks} = storeToRefs(taskStore)

    const sortedTasks = computed(() => 
    [...tasks.value].sort((a , b) => Number(a.isCompleted) - Number(b.isCompleted))
    )
    return {
        sortedTasks
       
    }
}