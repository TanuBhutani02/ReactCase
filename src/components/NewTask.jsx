import React, {useRef} from 'react';
export default function NewTask({onAddTask}){
    const taskRef = useRef();
     function handleTaskAdd(){
        if(taskRef.current.value.trim().length === 0){
            return;
        }
        onAddTask({
            id: Math.random(),
            title: taskRef.current.value,
        })
        taskRef.current.value = "";
     }
    return(
    <div className="flex gap-4 my-6">
    <input type="text" 
      ref= {taskRef}
    className="w-2/3 py-2 px-3 rounded-md border-2 focus:border-cyan-950 border-stone-300"/>
    <button
     onClick={handleTaskAdd}
    className="ml-12 px-4 py-2 w-1/4 border-stone-600 rounded-md bg-stone-300">Add Task</button>
  </div>)
}