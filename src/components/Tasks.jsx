import NewTask from "./NewTask"
import TaskList from "./TaskList"
export default function  Tasks({onAddTask, tasks, onDeleteTask}){
    return(
        <section className="my-4">
      <NewTask onAddTask={onAddTask}/>
      {!tasks?.length&& <p>No Tasks has been added yet!</p>}
      {tasks?.length>0 && <TaskList tasks={tasks} onDeleteTask={onDeleteTask}/>}
        </section>
    )
}