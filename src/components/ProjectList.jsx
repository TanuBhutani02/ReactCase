export default function ProjectList({projects,onSelectedProject, selectedProjectId}){
    return(
        <ul className="mt-8">
        {projects?.map((project)=>{
            let cssclases = "w-full py-2 px-4 text-left rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
             cssclases += selectedProjectId === project.id ? " bg-stone-800 text-stone-200" : "text-stone-400";
            return(<li key={project.id}>
                <button onClick ={()=>onSelectedProject(project.id)}
                className= {cssclases}
                >{project.title}</button>
                </li>
                )
            
            })}
        </ul>
    )
    
}