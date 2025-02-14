import Tasks from "./Tasks";
export default function SelectedProject ({project, onDelete, onAddTask, tasks, onDeleteTask}){
    const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    });
    return(
        <div className="w-[45rem] mt-16 mx-4">

<header className="w-full">
<div className="flex items-center justify-between border-b-2 border-stone-600 pb-4">
<h1 className="py-4 mb-4  font-bold text-stone-600 border-stone-200 text-3xl" >{project.title}</h1>
<button className="text-stone-600  hover:text-stone-950  border-stone-600" onClick= {onDelete}>Delete</button>
</div>
<p className="text-stone-900 py-4">{formattedDate}</p>
<p className="text-stone-500 break-words w-full block whitespace-pre-wrap py-4 border-b-2 border-stone-600">{project.description}</p>

</header>
<Tasks onAddTask={onAddTask} tasks={tasks} onDeleteTask={onDeleteTask}/>
</div>
        
    )
}