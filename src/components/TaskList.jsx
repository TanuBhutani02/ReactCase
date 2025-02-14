export default function TaskList({tasks,onDeleteTask}){
 return(
        <ul className="mt-8">
        {tasks?.map((task)=>{
            return(<li key={task.id} className="flex justify-between items-center bg-stone-300 w-full py-4 px-4 text-left rounded-sm my-1 hover:text-stone-200 hover:bg-stone-500">
              <span className="break-words w-11/12 block">    {task.title}</span>
            <span className="float-right mr-2">
                 <button 
                 onClick={()=>onDeleteTask(task.id)}
                 className="items-center px-2 bg-stone-700 text-stone-400 rounded-md hover:bg-stone-600 hover:text-stone-100">
                 &#10007;</button>
                 </span>
            
                </li>
                ) 
            })}
        </ul>
 )
}