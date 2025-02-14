import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function ({children, title}, ref){
    const modalRef = useRef();
    useImperativeHandle(ref, ()=>({
  
        open:()=> modalRef.current.showModal(),
    }));
    return createPortal((
        <dialog ref={modalRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
        <form method="dialog" className="text-right">
            <button className="py-2 text-xl uppercase text-stone-400 bg-stone-700 px-4 border-r-white rounded-md">
                {title}</button></form>
        </dialog>
),document.getElementById("modal-root"));
});

export default Modal;