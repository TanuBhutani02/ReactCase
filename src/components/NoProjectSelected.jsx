 import Button from './Button';
 import noProjectSelected from '../assets/no-projects.png';
export default function({onAddProject}) {
    return(
        <div className="mt-24  items-center w-2/3 text-center"> 
          <img src={noProjectSelected} className='w-16 h-16 object-contain mx-auto'/>
           <h2>No Project Selected</h2>
           <p className='text-stone-400 mb-4'>Select a Project or get started with the new One</p>
           <p className='mt-8'>
            <Button onClick={onAddProject}>Create a new Project</Button></p>
        </div>
    )
}