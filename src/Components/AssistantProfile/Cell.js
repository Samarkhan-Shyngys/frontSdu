import { useState } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

export default function Cell({text, value, fields, append, remove}){
    const handle=(e)=>{
        setColor((prev)=> !prev)
        if(!color) {
            append({"time": e.target.value})
         }
        else{
            const a = e.target.value;
            const b = fields.findIndex(el=>el.time==a)
            remove(b)

        }
    }
    const [color, setColor] = useState(false);
    return (
        <button value={value} className={classNames(color ? "bg-blue-800" : "bg-white", "border h-12 cursor-pointer text-base font-semibold")} 
        onClick={handle}>{text}</button>
    );
}