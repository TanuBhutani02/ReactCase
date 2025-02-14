import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectSideBar from "./components/ProjectsSideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projects, setProjects] = useState({selectedProjectId: undefined, projects: []});
  function handleAddStartedProject(){
    setProjects((prev)=>{
      return{
        ...prev,
        selectedProjectId: null,
      }
    })
  }

  function handleAddProject(project){
    setProjects((prev)=>{
      return{
        ...prev,
        selectedProjectId: undefined,
        projects: [{...project, id: Math.random()},...prev.projects],
  }
})
}

function handleCancel(){
  setProjects((prev)=>{
    return{
      ...prev,
      selectedProjectId: undefined,
    }
  })
}

function handleDelete(){
  setProjects((prev)=>{
    return{
      ...prev,
      selectedProjectId: undefined,
      projects: prev.projects.filter((project)=> project.id !== prev.selectedProjectId),
    }
  })
}

function handleSelectedProject(id){
setProjects((prev)=>({...prev, selectedProjectId: id}));
}

function handleAddTask(task){
  setProjects((prev)=>{
    const projectIndex = prev.projects.findIndex((project)=> project.id === prev.selectedProjectId);
    const updatedProjects = [...prev.projects];
    updatedProjects[projectIndex] = {...prev.projects[projectIndex], tasks: [...(prev.projects[projectIndex]?.tasks || []), task]};
    return {
      ...prev,
      projects: updatedProjects,
    }
  })
}

function handleDeleteTask(taskId){
  setProjects((prev)=>{
    const projectIndex = prev.projects.findIndex((project)=> project.id === prev.selectedProjectId);
    const updatedProjects = [...prev.projects];
    updatedProjects[projectIndex].tasks =   updatedProjects[projectIndex].tasks.filter((task)=> task.id !== taskId);
    return {
      ...prev,
      projects: updatedProjects,
    }
  })
}

const selectedProject = projects.projects.find((project)=>project.id === projects.selectedProjectId);
  
  let content =<SelectedProject 
  onAddTask={handleAddTask}
  project={selectedProject}
  onDelete={handleDelete}
  tasks={selectedProject?.tasks}
  onDeleteTask={handleDeleteTask}
  />;

  if(projects.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject}    onCancel= {handleCancel}/>
  } else if(projects.selectedProjectId === undefined){
    content = <NoProjectSelected onAddProject={handleAddStartedProject}/>
  }
    return(
      <main className="h-screen my-8 flex gap-8">
        <ProjectSideBar onAddProject={handleAddStartedProject} 
        projects={projects.projects}
        onSelectedProject={handleSelectedProject}
        selectedProjectId={projects.selectedProjectId}
        />
        {content}
      </main>
    )
  }
  
export default App;
