import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef(function ({label, textarea, ...props}, ref){
    const inputref= useRef();
    const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
useImperativeHandle(ref, ()=>({
   getValue: ()=> inputref.current.value,
}));

    return(
    <p className="flex flex-col gap-1 my-4">
                    <label htmlFor="" className="text-sm font-bold uppercase text-stone-500" >{label}</label>
                        {textarea?
                        
                        <textarea {...props} className={classes} ref={inputref}/>:
                        <input className={classes} {...props} ref={inputref} />}
                    
                </p>
)
})

export default Input;   