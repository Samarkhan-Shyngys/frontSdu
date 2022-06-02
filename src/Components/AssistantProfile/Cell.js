import { useState } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

export default function Cell({text, value, fields, append, remove}){
    const [color, setColor] = useState(false);
    const handle=(e)=>{
        e.preventDefault();
        setColor((prev)=> !prev)
        if(!color) {
            append({"time": e.target.value})
         }
        else{
            const a = e.target.value;
            const b = fields.findIndex(el=>el.time===a)
            remove(b)

        }
    }
    return (
        <button value={value} className={classNames(color ? "bg-[#1e40af]" : "bg-white", "bg-blue-900 border h-12 cursor-pointer text-base font-semibold")} 
        onClick={handle}>{text}</button>
    );
}