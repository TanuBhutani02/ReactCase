import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
export default function NewProject({onAdd, onCancel}) {
    const validationRef = useRef();
    const titleRef= useRef();
    const descriptionRef= useRef();
    const dateRef= useRef();
   
   function handleSave(){
    if(titleRef?.current?.getValue().trim()==="" || 
    descriptionRef?.current?.getValue().trim()===""
    || dateRef?.current?.getValue().trim()===""){
        validationRef?.current?.open();
        return;
    }
        onAdd(
            {title : titleRef?.current?.getValue() ,
             description:descriptionRef?.current?.getValue(),
             date: dateRef?.current?.getValue()}
            );
    
   }
    return(
        <>
        <Modal title="Okay" ref={validationRef}> 

        <h2 className="mt-4 mb-4 text-center font-bold text-xl text-stone-700">Invalid Input</h2>
        <p className=" py-2 px-4 text-stone-900">Oops... looks like you forgot to enter a value</p>
        <p className=" text-stone-900 mb-4 py-2 px-4">Please make sure you provide a valid value for every input field...</p>
        </Modal>
        <div className="mt-16 w-[35rem]">
            <menu className="flex justify-end items-center gap-4 my-4">
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>CANCEL</button>
            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}> SAVE </button>
            </menu>
            <div>
            <Input label="Title" ref={titleRef} type= "text"/>
                <Input label="Description" ref={descriptionRef}textarea type="text"/>
               <Input type="date" label="Due Date" ref={dateRef}/>
            </div>
            </div>
            </>
    )
}